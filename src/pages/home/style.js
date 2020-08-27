import styled from 'styled-components'


export const HomeWrapper = styled.div`
    width:960px;
    margin:0 auto;
    overflow:hidden;
`


export const HomeLeft = styled.div`
    margin-left:15px;
    padding-top:30px;
    width:625px;
    float:left;
    .banner-img{
        display:block;
        width:625px;
        height:270px;
    }
`
export const HomeRight= styled.div`
    width:280px;
    float:right;
`

export const TopicWrapper= styled.div`
    padding:20px 0 10px 0;
    margin-left:-18px;
    border-bottom:1px solid #dcdcdc;
    overflow:hidden;
`

export const TopicItem= styled.div`
    float:left;
    background:#f7f7f7;
    height:32px;
    line-height:32px;
    padding-right:10px;
    margin-left:18px;
    margin-bottom:18px;
    font-size:14px;
    color:#000;
    border:1px solid #dcdcdc;
    border-radius:4px;
    .topic-pic{
        display:block;
        float: left;
        margin-right:10px;
        width:32px;
        height:32px;
    }
`

export const ListItem = styled.div`
    padding:20px 0;
    border-bottom:1px solid #dcdcdc;
    overflow:hidden;
    .list-pic{
        display:block;
        float:right;
        width:125px;
        height:100px;
        border-radius:10px;
    }
`

export const ListInfo = styled.div`
    width:500px;
    float: left;
    .title{
        line-height:27px;
        font-size:18px;
        font-weight:bold;
        color:#333;
    }
    .desc{
        line-height:24px;
        font-size:13px;
        color: #999;
    }
`
export const RecommendWrapper = styled.div`
    width :280px;
    margin:30px 0;
`

export const RecommendItem = styled.div`
    width:280px;
    height:50px;
    background:url(${(props)=>props.imgUrl});
    background-size:contain;
`