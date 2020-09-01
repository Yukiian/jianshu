import React, { PureComponent } from "react";
import { connect } from 'react-redux'
import {LoginWrapper,LoginBox,Input,Button } from './style'
import { Redirect } from 'react-router-dom'
import * as actionCreator from './store/actionCreator'

class Login extends PureComponent {
  render() {
      const { loginState } = this.props;
      if(!loginState){
        return (
            <LoginWrapper>
                <LoginBox>
                    <Input placeholder='账号' ref={(account)=>(this.account=account)} />
                    <Input placeholder='密码' type="password" ref={(password)=>(this.password=password)} />
                    <Button onClick={()=>{this.props.login(this.account,this.password)}}>登陆</Button>
                </LoginBox>
            </LoginWrapper>
        );
      }else{
        return <Redirect to='/'></Redirect>
      }
  }


}

const mapToState = (state)=>({
    loginState:state.getIn(['login','login'])
})

const mapToDispatch = (dispatch)=>({
    login(account,password){
        dispatch(actionCreator.login(account.value,password.value))
    }
})

export default connect(mapToState,mapToDispatch)(Login);