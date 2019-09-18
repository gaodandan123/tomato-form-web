const createMock = (url, data, method = 'get') => ({
  url,
  method,
  data,
});

exports.createMock = createMock;
