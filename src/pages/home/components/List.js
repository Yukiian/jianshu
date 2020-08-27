import React, { Component } from "react";
import { connect } from "react-redux";
import { ListItem, ListInfo } from "../style";

class List extends Component {
  render() {
    return (
      <div>
        {this.props.articleList.map((item) => {
          return (
            <ListItem key={item.get('id')}>
              <img className="list-pic" alt="" src={item.get("imgUrl")} />
              <ListInfo>
                <h3 className="title">{item.get('title')}</h3>
                <p className="desc">
                 {item.get('content')}
                </p>
              </ListInfo>
            </ListItem>
          );
        })}
      </div>
    );
  }
}

const mapState = (state) => ({
  articleList: state.getIn(['home','articleList']),
});

export default connect(mapState, null)(List);
