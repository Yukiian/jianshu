import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { ListItem, ListInfo, LoadMore } from "../style";
import { actionCreators } from "../store";
import { Link } from "react-router-dom";

class List extends PureComponent {
  render() {
    const { articleList, getMoreList, page } = this.props;
    return (
      <div>
        {articleList.map((item, index) => {
          return (
            <Link to={"/detail/" + item.get("id")} key={index}>
              <ListItem>
                <img className="list-pic" alt="" src={item.get("imgUrl")} />
                <ListInfo>
                  <h3 className="title">{item.get("title")}</h3>
                  <p className="desc">{item.get("content")}</p>
                </ListInfo>
              </ListItem>
            </Link>
          );
        })}
        <LoadMore onClick={() => getMoreList(page)}>更多文字</LoadMore>
      </div>
    );
  }
}

const mapState = (state) => ({
  articleList: state.getIn(["home", "articleList"]),
  page: state.getIn(["home", "articalPage"]),
});

const mapDispatch = (dispatch) => ({
  getMoreList(page) {
    dispatch(actionCreators.getMoreList(page));
  },
});
export default connect(mapState, mapDispatch)(List);
