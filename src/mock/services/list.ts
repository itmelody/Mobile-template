import { builder, getBody } from '../util';
import Mock, { Random } from 'mockjs';
// 返回的数据
let list = [];

for (let i = 0; i < 10; i++) {
  // 点赞的人
  let likePeople = Mock.mock({
    'array|0-1': [Mock.mock('@cname'), Mock.mock('@cname'), Mock.mock('@cname')],
  });
  let Data = {
    // 朋友圈ID
    id: Mock.mock('@id'),
    // 发布人名字
    name: Mock.mock('@cname'),
    // 时间戳
    // time: date,
    time: Mock.mock('@datetime'),
    // 说说文字
    text: Mock.mock('@cparagraph(1, 10)'),
    // 图片
    image: [],
    // 点赞的人
    likes: likePeople.array,
    // likes: likePeople.array,
    // 本人有没有点赞
    star: Mock.mock('@boolean'),
    // 评论栏内容
    comment: Mock.mock('@boolean'),
  };
  list.push(Data);
  likePeople = [];
}

const listData = (options: any) => {
  const body = getBody(options);

  return builder(
    {
      list,
    },
    '登录成功',
    0,
    { 'Custom-Header': Mock.mock('@id') },
  );
};
Mock.mock(/\/@test\/list/, 'post', listData);