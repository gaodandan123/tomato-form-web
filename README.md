# oceanus-cli
## 一、使用
### 1、进入文件oecanus-cli 
```
cd oecanus-cli
```
### 2、使用yarn安装依赖
```
yarn install
```
### 3、启动项目
```
yarn run serve
```
### 4、打包发布
```
yarn run build
```
需要注意的是如果使用node.js安装的话，node.js的版本需>=8.11.4

### 自定义设置
[Configuration Reference](https://cli.vuejs.org/config/).
### vue 版本 2.6.6  iview 版本 3.3.0 ctmsTheme 版本 3.3.0
### .env.development,.env.production 根据需要自动进行配置
[环境变量和模式](https://cli.vuejs.org/zh/guide/mode-and-env.html#%E6%A8%A1%E5%BC%8F)
### ctmsTheme custom theme configuration
要注意的是 less 版本号要少于3.0
[通过安装工具修改](https://www.iviewui.com/docs/guide/theme)
### mock Configuration
[mock 文档](http://mockjs.com/)

## 二、项目功能实现目录规则
1、每个模块对应一个文件夹即使该功能只有一个文件  
2、样式可写一个对应的文件，益于修改  
3、rules文件是我们根据需要自行定义的验证规则，可直接使用  
例如： 
this.$rules.mobileNumber  
4、每个模块需要在api中新建一个对应的文件来书写api文档  
5、.env.development的文件夹设置开发环境对应的url，.env.production文件设置生产环境对应的url
6、公用的组件写在对应的文件夹下
## 三、目录文件分析
#### public文件用来存储公用的文件的
#### vue.config.js 
1、参考链接https://cli.vuejs.org/zh/config/
```
outputDir: '../v5/dist', //  打包到相对路径下的文件，可自定义 v5文件和该项目文件应该在同一文件目录下
```
```
chainWebpack: (config) => {
    config
      .plugin('html')
      .tap((args) => {
        Object.assign(args[0], {
          title: packageInfo.version,
        });
        return args;
      });
  },
```
packageInfo.version发布后的版本号
##### mock
```
mock可实现前后端独立进行开发，通过拦截ajax请求返回模拟数据
 // mock数据
    before: isMock ? (app) => {
      mockData.forEach((item) => {
        app[item.method](item.url, (req, res) => {
          res.json({
            success: true,
            code: 0,
            data: item.data,
          });
        });
      });
    } : null,
```
遇到的坑：当我们使用fetch进行请求时，mock是不会拦截的，所以我们的上面的实例是对请求进行的处理
#### postcss.config.js
autoprefixer是用来处理css3的前缀
例如：
```
a{
  display : flex;
}
/*处理后*/
a{
  display : -webkit-box;
  display : -webkit-flex;
  display : -moz-box;
  display : -ms-flexbox;
  display : flex;
}
```
### eslintrc.js编码规则
使用的编码规则是airbnb的  
.env.development 和 .env.production是用来配置环境发布的  
### utils
公用的方法文件一般会放在utils文件里
#### request.js
我们请求数据是使用的fetch，并对fetch请求进行封装
详情请看request.js文件会有相应的注释
#### rules.js
是常用的正则验证规则可根据需要自行添加
### store
store用来实现状态管理，modules文件下的每一个文件对应每一部分状态管理  
index.js文件将每部分的文件汇总公开
### ctmsTheme
ctmsTheme是自定义主题文件  
1、安装工具 iview-theme
```
yarn add iview-theme -g
```
2、进入当前项目下的src文件目录下安装生成指定版本
```
iview-theme init ctmsTheme v3.3.0
```
3、编辑ctmsTheme/custom.less文件，编译
```
iview-theme build -o dist/
```
就会在dist文件下生成一个iview.css文件
然后会在main.js中引入
```
import './ctmsTheme/dist/iview.css';
```
### components
根据业务逻辑需要的公用的组件会放在components文件夹下
### api
用来存放请求路径，每个功能对应一个目录文件

