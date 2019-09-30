# v-utils-pkg

> 一个vue的工具库插件，集成了lodash库、moment日期库、accounting货币库等。


## 安装


```sh
$ npm i v-utils-pkg --save
```

## 引入

```js
import vUtilsPkg from 'v-utils-pkg';

const options = {
  name: 'myUtils', // 工具库名称，默认为 $utils
  expand: { // 拓展全局、实例属性和方法
    customProp: 'customProp',
    customFun: () => 'customFun',
  }, 
}
Vue.use(vUtilsPkg, options);
```

## 使用

```js
// filter
<div>
    {{ 1569810877228 | @formatDate('YYYY-MM-DD') }} 
    {{ "86578412.2" | @formatMoney }}
    {{ '----------trim-----------' | @trim('-') }}
</div>                      
```

```js
// script
     Vue.$utils.chunk(['a', 'b', 'c', 'd'], 2);      
     Vue.$utils.moment().format('YYYY-MM-DD');
     Vue.$utils.accounting.formatMoney(12345678.22, '￥');
     Vue.$utils.customProp;
     Vue.$utils.customFun();
```

## 过滤器
### @formatDate 
> 格式化日期，详情请参考 http://momentjs.cn/。


### @formatMoney
> 格式化货币，详情请参考 http://openexchangerates.github.io/accounting.js/。

### @camelCase 
### @capitalize
### @endsWith 
### @escape
### @escapeRegExp
### @kebabCase 
### @lowerCase 
### @lowerFirst
### @pad
### @padEnd
### @padStart
### @parseInt
### @repeat
### @snakeCase
### @startsWith
### @template
### @toLower
### @toUpper
### @trim
### @trimEnd
### @truncate
### @unescape
### @upperFirst
### @words
> 字符串处理方法，详情请参考 https://www.html.cn/doc/lodash/

## 全局方法/实例方法
### Vue.$utils.chunk()、Vue.$utils.concat()... 
> 来自lodash的所有工具方法。

### Vue.$utils.moment()
> moment日期类。

### Vue.$utils.accounting
> 货币函数
