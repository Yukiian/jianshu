import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import { actionCreater } from "./store";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList,
  NavSearch,
  Addition,
  Button,
} from "./style";

class Header extends Component {
  getListArea() {
    const {
      focused,
      list,
      page,
      totalPage,
      mouseIn,
      handleMouseEnter,
      handleMouseLeave,
      handleChangePage,
    } = this.props;
    const newList = list.toJS();
    const pageList = [];

    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        if (!newList[i]) continue;
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        );
      }
    }

    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch
              onClick={() => handleChangePage(page, totalPage, this.spinIcon)}
            >
              <i
                ref={(spinIcon) => {
                  this.spinIcon = spinIcon;
                }}
                className="iconfont spin"
              >
                &#xe851;
              </i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>{pageList}</SearchInfoList>
        </SearchInfo>
      );
    } else {
      return null;
    }
  }
  render() {
    const { focused, handleInputFocus, handleInputBlur, list } = this.props;
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登陆</NavItem>
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition in={focused} classNames="slide" timeout={200}>
              <NavSearch
                className={focused ? "focused" : ""}
                onFocus={() => handleInputFocus(list)}
                onBlur={handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <i className={focused ? "focused iconfont zoom" : "iconfont zoom"}>
              &#xe62d;
            </i>
            {this.getListArea()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="writting">
            <i className="iconfont">&#xe708;</i>写文章
          </Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    );
  }
}

// function Header(props) {
//   const { focused, handleInputFocus, handleInputBlur } = props;
//   return (
//     <HeaderWrapper>
//       <Logo />
//       <Nav>
//         <NavItem className="left active">首页</NavItem>
//         <NavItem className="left">下载App</NavItem>
//         <NavItem className="right">登陆</NavItem>
//         <NavItem className="right">
//           <i className="iconfont">&#xe636;</i>
//         </NavItem>
//         <SearchWrapper>
//           <CSSTransition in={focused} classNames="slide" timeout={200}>
//             <NavSearch
//               className={focused ? "focused" : ""}
//               onFocus={handleInputFocus}
//               onBlur={handleInputBlur}
//             ></NavSearch>
//           </CSSTransition>
//           <i className={focused ? "focused iconfont" : "iconfont"}>&#xe62d;</i>
//           {getListArea(focused)}
//         </SearchWrapper>
//       </Nav>
//       <Addition>
//         <Button className="writting">
//           <i className="iconfont">&#xe708;</i>写文章
//         </Button>
//         <Button className="reg">注册</Button>
//       </Addition>
//     </HeaderWrapper>
//   );
// }

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(["header", "focused"]),
    list: state.getIn(["header", "list"]),
    page: state.getIn(["header", "page"]),
    totalPage: state.getIn(["header", "totalPage"]),
    mouseIn: state.getIn(["header", "mouseIn"]),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      list.size === 0 && dispatch(actionCreater.getList());
      dispatch(actionCreater.setSearchFocus());
    },
    handleInputBlur() {
      const action = actionCreater.setSearchBlur();
      dispatch(action);
    },
    handleMouseEnter() {
      dispatch(actionCreater.mouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreater.mouseLeave());
    },
    handleChangePage(page, totalPage, spinIcon) {
      let originTransform = spinIcon.style.transform.replace(/[^0-9]/gi, "");
      originTransform = originTransform ? parseInt(originTransform, 10) : 0;
      spinIcon.style.transform = `rotate(${originTransform + 360}deg)`;
      page = page < totalPage ? page + 1 : 1;
      dispatch(actionCreater.changePage(page));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
