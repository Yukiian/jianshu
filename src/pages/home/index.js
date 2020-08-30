import React, { PureComponent } from "react";
import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from "./style";

class Home extends PureComponent {
  handleScrollTop() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <div>
            <img
              className="banner-img"
              alt=""
              src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2164724814,1401845036&fm=26&gp=0.jpg"
            />
          </div>
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        {this.props.showScroll ? (
          <BackTop onClick={this.handleScrollTop}>顶部</BackTop>
        ) : null}
      </HomeWrapper>
    );
  }

  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvent()
  }

  componentWillUnmount(){
    window.removeEventListener('scroll',this.props.changeScrollTopShow)
  }

  bindEvent(){
    window.addEventListener('scroll',this.props.changeScrollTopShow)
  }
}

const mapState = (state) => ({
  showScroll: state.getIn(["home", "showScroll"]),
});

const mapDispatch = (dispatch) => {
  return {
    changeHomeData() {
      const action = actionCreators.getHomeInfo();
      dispatch(action);
    },
    changeScrollTopShow(){
      if(document.documentElement.scrollTop >100){
        dispatch(actionCreators.toggleTopShow(true));
      }else{
        dispatch(actionCreators.toggleTopShow(false));
      }
    }
  };
};

export default connect(mapState, mapDispatch)(Home);
