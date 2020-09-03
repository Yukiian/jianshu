import React, { useState, useEffect } from "react";
import { DetailWrapper, Header, Content } from "./style";
import { connect } from 'react-redux'
// import * as actionCreators from './store/actionCreator'
import axios from 'axios'

// class Detail extends PureComponent {
//   render() {
//     const { title, content } = this.props
//     return (
//       <DetailWrapper>
//         <Header>{title}</Header>
//         <Content dangerouslySetInnerHTML={{ __html: content }} />
//       </DetailWrapper>
//     );
//   }

//   componentDidMount() {
//     this.props.getDetail(this.props.match.params.id)
//   }
// }

function Detail(props) {
  const id = props.match.params.id;
  const [info, setInfo] = useState({})
  useEffect(() => {
    const getDetail = () => {
      axios.get("/api/detail.json?id=" + id).then((res) => {
        setInfo(res.data.data)
      });
    }
    getDetail()
  }, [id])

  return (
    <DetailWrapper>
      <Header>{info.title}</Header>
      <Content dangerouslySetInnerHTML={{ __html: info.content }} />
    </DetailWrapper>
  );
}

// const mapToState = (state) => ({
//   title: state.getIn(['detail', 'title']),
//   content: state.getIn(['detail', 'content'])
// })

// const mapToDispatch = (dispatch) => ({
//   getDetail(id) {
//     dispatch(actionCreators.getDetail(id))
//   }
// })

export default connect(null, null)(Detail);
