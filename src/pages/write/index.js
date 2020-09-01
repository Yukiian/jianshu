import React, { PureComponent } from "react";
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Login extends PureComponent {
  render() {
      const { loginState } = this.props;
      console.log(loginState)
      if(loginState){
        return (
           <div>write</div>
        );
      }else{
        return <Redirect to='/login'></Redirect>
      }
  }


}

const mapToState = (state)=>({
    loginState:state.getIn(['login','login'])
})



export default connect(mapToState,null)(Login);