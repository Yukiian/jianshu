import React, { useState, useEffect } from "react";
import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from "./style";

// class Home extends PureComponent {
//   handleScrollTop() {
//     window.scrollTo(0, 0);
//   }

//   render() {
//     return (
//       <HomeWrapper>
//         <HomeLeft>
//           <div>
//             <img
//               className="banner-img"
//               alt=""
//               src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2164724814,1401845036&fm=26&gp=0.jpg"
//             />
//           </div>
//           <Topic />
//           <List />
//         </HomeLeft>
//         <HomeRight>
//           <Recommend />
//           <Writer />
//         </HomeRight>
//         {this.props.showScroll ? (
//           <BackTop onClick={this.handleScrollTop}>顶部</BackTop>
//         ) : null}
//       </HomeWrapper>
//     );
//   }

//   componentDidMount() {
//     this.props.changeHomeData();
//     this.bindEvent()
//   }

//   componentWillUnmount() {
//     window.removeEventListener('scroll', this.props.changeScrollTopShow)
//   }

//   bindEvent() {
//     window.addEventListener('scroll', this.props.changeScrollTopShow)
//   }
// }


function Home(props) {
  const { changeHomeData } = props;
  const changeScrollTopShow = () => (document.documentElement.scrollTop > 100 ? setShowScroll(true) : setShowScroll(false))
  const handleScrollTop = () => (window.scrollTo(0, 0));
  const [showScroll, setShowScroll] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', changeScrollTopShow)
    return () => {
      window.removeEventListener('scroll', changeScrollTopShow)
    }
  }, []);
  useEffect(() => {
    changeHomeData && changeHomeData();
  }, [changeHomeData])


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
      {showScroll ? (
        <BackTop onClick={handleScrollTop}>顶部</BackTop>
      ) : null}
    </HomeWrapper>
  );
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

  };
};

export default connect(mapState, mapDispatch)(Home);
