const Mock = require('mockjs');
const util = require('./util');
// 获取 mock.Random 对象
const { Random } = Mock;

// mock一组数据
const produceData = function (opt) {
  console.log(opt);
  const articles = [];
  for (let i = 0; i < 30; i += 1) {
    const newArticleObject = {
      title: Random.csentence(5, 30), // Random.csentence( min, max )
      author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
      date: `${Random.date()} ${Random.time()}`, // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
    };
    articles.push(newArticleObject);
  }
  return {
    data: articles,
  };
};

module.exports = [
  util.createMock('/api/news', Mock.mock(produceData)),
];
