import {
  fromJS
} from "immutable";

const defaultState = fromJS({
  topicList: [{
      id: 1,
      title: "社会热点",
      imgUrl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598544632558&di=a550d0dcc3e27d0f821fcae3028772c3&imgtype=0&src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201910%2F23%2F20191023165146_VdXQi.thumb.400_0.jpeg",
    },
    {
      id: 2,
      title: "手绘",
      imgUrl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598544632558&di=a550d0dcc3e27d0f821fcae3028772c3&imgtype=0&src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201910%2F23%2F20191023165146_VdXQi.thumb.400_0.jpeg",
    },
  ],
  articleList: [{
    id: 1,
    title: "女人对男人动了情，会有哪些表现？",
    content: "女人对男人动了情，也许是喜欢，也许是爱慕，喜欢上一个男人，与爱情还有距离，只是好感，这个时候的表现有3点： 1.愿意跟男人在一起共事 比如说，女...",
    imgUrl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598544632558&di=a550d0dcc3e27d0f821fcae3028772c3&imgtype=0&src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201910%2F23%2F20191023165146_VdXQi.thumb.400_0.jpeg",
  }, {
    id: 2,
    title: "姑妈说：找媳妇不能找家有两个闺女的",
    content: "表弟找了女朋友，姑妈死活不同意。表弟急了：你都没见过，就说不同意，为什么呀？ 姑妈振振有词：我不用见，早就告诉过你，两个女孩的人家不能要，你还非...",
    imgUrl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598544632558&di=a550d0dcc3e27d0f821fcae3028772c3&imgtype=0&src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201910%2F23%2F20191023165146_VdXQi.thumb.400_0.jpeg",
  }, {
    id: 3,
    title: "撒贝宁说：我对自己的婚姻非常失望",
    content: "在参加一档节目中,谈到婚姻，撒贝宁公开说道：“我觉得自己的婚姻非常的无望，也没有继续维持下去的必要。”惹得现场观众大吃一惊。 事实上当时马东故意...",
    imgUrl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598544632558&di=a550d0dcc3e27d0f821fcae3028772c3&imgtype=0&src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201910%2F23%2F20191023165146_VdXQi.thumb.400_0.jpeg",
  }, {
    id: 4,
    title: "撒贝宁说：我对自己的婚姻非常失望",
    content: "在参加一档节目中,谈到婚姻，撒贝宁公开说道：“我觉得自己的婚姻非常的无望，也没有继续维持下去的必要。”惹得现场观众大吃一惊。 事实上当时马东故意...",
    imgUrl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598544632558&di=a550d0dcc3e27d0f821fcae3028772c3&imgtype=0&src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201910%2F23%2F20191023165146_VdXQi.thumb.400_0.jpeg",
  }, {
    id: 5,
    title: "撒贝宁说：我对自己的婚姻非常失望",
    content: "在参加一档节目中,谈到婚姻，撒贝宁公开说道：“我觉得自己的婚姻非常的无望，也没有继续维持下去的必要。”惹得现场观众大吃一惊。 事实上当时马东故意...",
    imgUrl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598544632558&di=a550d0dcc3e27d0f821fcae3028772c3&imgtype=0&src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201910%2F23%2F20191023165146_VdXQi.thumb.400_0.jpeg",
  }],
  recommendList: [{
      id: 1,
      imgUrl: "http://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png",
    },
    {
      id: 2,
      imgUrl: "http:////cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png",
    },
    {
      id: 3,
      imgUrl: "http://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png",
    },
    {
      id: 4,
      imgUrl: "http://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png",
    }
  ]
});

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};