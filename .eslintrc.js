module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // iview 标签报错
    'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }],
    'linebreak-style': 'off',
  },
  plugins: [
    'html', // 此插件用于识别文件中的js代码，没有MIME类型标识没有script标签也可以识别到，因此拿来识别.vue文件中的js代码
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
};
