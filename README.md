# cinema
## 调用
引入 ad-cinema.js
```
var a = new cinema(12, 12, ['12-12', '12-11', '12-1'], dataArr, 'demo')；

$('.ad-submit').click(function(e){
　　console.log(dataArr);
　　// 这里做提交数组数据的ajax的操作
})

```

第一个和第二个参数必须是数字，分别对应的是 电影院座位的行和列， 第三个参数是 座位为空的数组，第四个
dataArr 是一个来自后端接口数据的一个数组，最后一个是 dom 选择器，目前是只支持传 class 选择器


##ToDo
## 增加其他dom显示，如提示选择了那个座位
## 不用构造函数的方式 new 这个对象，来调用，用现在流行的方式，  npm install **
## 封装一个基于jq 的jq 插件
## 因为轻度依赖jq,只用了选择器和事件委托的方法，改成原生js的方法，脱离jquery.
