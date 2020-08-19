import React from "react";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import { setSearchBlur, setSearchFocus } from "./store/actionCreater";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  Addition,
  Button,
} from "./style";

// class Header extends Component {

//   render() {
//     const {focused,handleInputFocus,handleInputBlur} = this.props
//     return (
//       <HeaderWrapper>
//         <Logo />
//         <Nav>
//           <NavItem className="left active">首页</NavItem>
//           <NavItem className="left">下载App</NavItem>
//           <NavItem className="right">登陆</NavItem>
//           <NavItem className="right">
//             <i className="iconfont">&#xe636;</i>
//           </NavItem>
//           <SearchWrapper>
//             <CSSTransition
//               in={focused}
//               classNames="slide"
//               timeout={200}
//             >
//               <NavSearch
//                 className={focused ? "focused" : ""}
//                 onFocus={handleInputFocus}
//                 onBlur={handleInputBlur}
//               ></NavSearch>
//             </CSSTransition>
//             <i className={focused ? "focused iconfont" : "iconfont"}>
//               &#xe62d;
//             </i>
//           </SearchWrapper>
//         </Nav>
//         <Addition>
//           <Button className="writting">
//             <i className="iconfont">&#xe708;</i>写文章
//           </Button>
//           <Button className="reg">注册</Button>
//         </Addition>
//       </HeaderWrapper>
//     );
//   }

// }

function Header(props) {
  const { focused, handleInputFocus, handleInputBlur } = props;
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
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            ></NavSearch>
          </CSSTransition>
          <i className={focused ? "focused iconfont" : "iconfont"}>&#xe62d;</i>
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

const mapStateToProps = (state) => {
  return {
    focused: state.header.focused,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      const action = setSearchFocus();
      dispatch(action);
    },
    handleInputBlur() {
      const action = setSearchBlur();
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
