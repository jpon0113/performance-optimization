/* Tree-shaking --------------------------------------------------------------------------------------------------------- */
// 上下文未用到的程式碼(dead code)
// 基於ES6 import export
// package.json "sideEffects" 該屬性是不想被tree-shaking的範圍設定
// Babel的module設置要為false
ex: 
"sideEffects": [
  "*.css",
]

/* js壓縮 --------------------------------------------------------------------------------------------------------- */
// terser-webpack-plugin 

/* 作用域提升scope hoisting --------------------------------------------------------------------------------------------------------- */
// 程式碼體積減小
// 提高執行效率
// Babel的module設置要為false
```
/****************** util.js ******************/
export default 'Hello,Webpack';

/**************** index.jsx ********************/
import str from './util';
console.log(str);

/***************** 没有 scope hoisting, webpack 打包後 *******************/
[
  (function (module, __webpack_exports__, __webpack_require__) {
    var __WEBPACK_IMPORTED_MODULE_0__util_js__ = __webpack_require__(1);
    console.log(__WEBPACK_IMPORTED_MODULE_0__util_js__["a"]);
  }),
  (function (module, __webpack_exports__, __webpack_require__) {
    __webpack_exports__["a"] = ('Hello,Webpack');
  })
]
/************************************/

/***************** 有 scope hoisting, webpack 打包後 *******************/
[
  (function (module, __webpack_exports__, __webpack_require__) {
    var util = ('Hello,Webpack');
    console.log(util);
  })
]
/************************************/
```

/* babel 設定 --------------------------------------------------------------------------------------------------------- */
// polyfill的需要加載
presets: [
  [{
    "useBuiltIns": "usage",
  }]
]
// 輔助函數的複用
plugins: [  
  "@babel/plugin-transform-runtime",
]

/* noParse --------------------------------------------------------------------------------------------------------- */
// 提高打包速度
// 忽略較大的lib不要加入解析
// 被忽略的條件為 不能有import, require, define的引入方式

/* DllPlugin --------------------------------------------------------------------------------------------------------- */
// 避免打包時對不變的lib重複構建 ex: vue, react

/* minification --------------------------------------------------------------------------------------------------------- */
// Terser 壓縮js
// mini-css-extract-plugin 壓縮css
npm i mini-css-extract-plugin optimize-css-assets-webpack-plugin
plugins: [
  // css 提取
  new MiniCssExtractPlugin({
    filename: '[name].[contenthash].css',
    chunkFilename: '[id].[contenthash:8].css',
  }),
  // css 優化(下面的配置是刪除註釋)
  new OptimizeCssAssetsPlugin({
    cssProcessorPluginOptions: {
        preset: ['default', {discardComments: {removeAll: true}}],
    },
    canPrint: true
  }),
]
// HtmlWebpackPlugin(默認使用minify: html-minifier-terser) 壓縮html
plugins: [
  new HtmlWebpackPlugin({
    template: 'target.html', 
  }),
]
