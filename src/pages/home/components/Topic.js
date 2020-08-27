import React, { Component } from "react";
import { connect } from "react-redux";
import { TopicWrapper, TopicItem } from "../style";

class Topic extends Component {
  render() {
    return (
      <div>
        <TopicWrapper>
          {this.props.list.map((item)=>{
            return (
              <TopicItem key={item.get('id')}>
              <img
                alt=""
                className="topic-pic"
                src={item.get('imgUrl')}
              />
              {item.get('title')}
            </TopicItem>
            )
          })}
        </TopicWrapper>
      </div>
    );
  }
}

const mapState = (state)=>({
    list : state.getIn(['home','topicList'])
})

export default connect(mapState,null)(Topic);
