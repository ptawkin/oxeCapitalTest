webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/blocks/Blog/Blog.scss":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./src/blocks/Blog/Blog.scss ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".blog {\n  margin-top: 120px; }\n  .blog__items {\n    display: flex;\n    justify-content: center; }\n  .blog__col {\n    width: 260px;\n    margin-right: 20px; }\n    .blog__col:nth-child(3) {\n      width: 360px; }\n  .blog__item {\n    margin-bottom: 20px; }\n    .blog__item-img img {\n      width: 100%; }\n    .blog__item-info {\n      display: flex;\n      font-size: 20px; }\n", "",{"version":3,"sources":["webpack://src/blocks/Blog/Blog.scss"],"names":[],"mappings":"AAAA;EACE,iBAAiB,EAAA;EAEjB;IACE,aAAa;IACb,uBAAuB,EAAA;EAGzB;IACE,YAAY;IACZ,kBAAkB,EAAA;IAFnB;MAKG,YAAY,EAAA;EAIhB;IACE,mBAAmB,EAAA;IAElB;MAEG,WACF,EAAA;IAGF;MACE,aAAa;MACb,eAAe,EAAA","sourcesContent":[".blog {\n  margin-top: 120px;\n\n  &__items {\n    display: flex;\n    justify-content: center;\n  }\n\n  &__col {\n    width: 260px;\n    margin-right: 20px;\n\n    &:nth-child(3) {\n      width: 360px;\n    }\n  }\n\n  &__item {\n    margin-bottom: 20px;\n\n    &-img {\n      & img {\n        width: 100%\n      }\n    }\n\n    &-info {\n      display: flex;\n      font-size: 20px;\n    }\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/blocks/Blog/Blog.js":
/*!*********************************!*\
  !*** ./src/blocks/Blog/Blog.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _data_blogNewsDada_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/blogNewsDada.json */ "./src/data/blogNewsDada.json");
var _data_blogNewsDada_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data/blogNewsDada.json */ "./src/data/blogNewsDada.json", 1);
/* harmony import */ var _img_post0_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../img/post0.png */ "./src/img/post0.png");
/* harmony import */ var _img_post1_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../img/post1.png */ "./src/img/post1.png");
/* harmony import */ var _img_post2_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../img/post2.png */ "./src/img/post2.png");
/* harmony import */ var _img_post3_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../img/post3.png */ "./src/img/post3.png");
/* harmony import */ var _img_post4_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../img/post4.png */ "./src/img/post4.png");
/* harmony import */ var _img_post5_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../img/post5.png */ "./src/img/post5.png");
/* harmony import */ var _img_post6_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../img/post6.png */ "./src/img/post6.png");
/* harmony import */ var _img_post7_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../img/post7.png */ "./src/img/post7.png");
/* harmony import */ var _Blog_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Blog.scss */ "./src/blocks/Blog/Blog.scss");
/* harmony import */ var _Blog_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Blog_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/demo/Work/oxeCapital/test/src/blocks/Blog/Blog.js";












function renderBlogItems() {// let content = `<div className={'blog__col'}>`;
  //
  // for (let i = 0; i < data.length; i++) {
  //     content += `<div className={'blog_item'}>
  //                  <div className={'blog_item-img'}>
  //                    <img src={data[i].img} alt={data[i].shortTitle}/>
  //                  </div>
  //
  //                  <div className={'blog_item-info'}>
  //                      <div className={'blog_item-title'}>
  //                          {data[i].date}
  //                      </div>
  //
  //                      <div className={'blog_item-date'}>
  //                          {data[i].shortTitle}
  //                      </div>
  //                  </div>
  //              </div>`
  //
  //     if (i % 2 === 0 && i !== 0) {
  //         content += `</div>`;
  //         content += `<div className={'blog__col'}>`;
  //     }
  // }
  //
  // content += `</div>`;
  //
  // return content;
  // return data.map(item => {
  //         return (
  //             <div className={'blog__item'}>
  //                 <div className={'blog__item-img'}>
  //                     <img src={item.img} alt={item.shortTitle}/>
  //                 </div>
  //
  //                 <div className={'blog__item-info'}>
  //                     <div className={'blog_item-date'}>
  //                         {item.date}
  //                     </div>
  //
  //                     <div className={'blog__item-title'}>
  //                         {item.shortTitle}
  //                     </div>
  //                 </div>
  //             </div>
  //         )
  //     }
  // )
}

function Blog() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
    className: "blog",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
      className: 'blog__items',
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
        className: 'blog__col',
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
          className: 'blog__item',
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
            className: 'blog__item-img',
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("img", {
              src: _img_post0_png__WEBPACK_IMPORTED_MODULE_1__["default"],
              alt: _data_blogNewsDada_json__WEBPACK_IMPORTED_MODULE_0__[0].shortTitle
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
            className: 'blog__item-info',
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
              className: 'blog_item-date',
              children: _data_blogNewsDada_json__WEBPACK_IMPORTED_MODULE_0__[0].date
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
              className: 'blog__item-title',
              children: _data_blogNewsDada_json__WEBPACK_IMPORTED_MODULE_0__[0].shortTitle
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
          className: 'blog__item',
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
            className: 'blog__item-img',
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("img", {
              src: _img_post1_png__WEBPACK_IMPORTED_MODULE_2__["default"],
              alt: _data_blogNewsDada_json__WEBPACK_IMPORTED_MODULE_0__[1].shortTitle
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
            className: 'blog__item-info',
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
              className: 'blog_item-date',
              children: _data_blogNewsDada_json__WEBPACK_IMPORTED_MODULE_0__[1].date
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
              className: 'blog__item-title',
              children: _data_blogNewsDada_json__WEBPACK_IMPORTED_MODULE_0__[1].shortTitle
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
        className: 'blog__col',
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
          className: 'blog__item',
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
            className: 'blog__item-img',
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("img", {
              src: _img_post2_png__WEBPACK_IMPORTED_MODULE_3__["default"],
              alt: _data_blogNewsDada_json__WEBPACK_IMPORTED_MODULE_0__[2].shortTitle
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
            className: 'blog__item-info',
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
              className: 'blog_item-date',
              children: _data_blogNewsDada_json__WEBPACK_IMPORTED_MODULE_0__[2].date
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
              className: 'blog__item-title',
              children: _data_blogNewsDada_json__WEBPACK_IMPORTED_MODULE_0__[2].shortTitle
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
          className: 'blog__item',
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
            className: 'blog__item-img',
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("img", {
              src: _img_post3_png__WEBPACK_IMPORTED_MODULE_4__["default"],
              alt: _data_blogNewsDada_json__WEBPACK_IMPORTED_MODULE_0__[3].shortTitle
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 130,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
            className: 'blog__item-info',
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
              className: 'blog_item-date',
              children: _data_blogNewsDada_json__WEBPACK_IMPORTED_MODULE_0__[3].date
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
              className: 'blog__item-title',
              children: _data_blogNewsDada_json__WEBPACK_IMPORTED_MODULE_0__[3].shortTitle
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 138,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
        className: 'blog__col',
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
          className: 'blog__item',
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
            className: 'blog__item-img',
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("img", {
              src: _img_post4_png__WEBPACK_IMPORTED_MODULE_5__["default"],
              alt: _data_blogNewsDada_json__WEBPACK_IMPORTED_MODULE_0__[4].shortTitle
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 148,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
            className: 'blog__item-info',
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
              className: 'blog_item-date',
              children: _data_blogNewsDada_json__WEBPACK_IMPORTED_MODULE_0__[4].date
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 152,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
              className: 'blog__item-title',
              children: _data_blogNewsDada_json__WEBPACK_IMPORTED_MODULE_0__[4].shortTitle
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 156,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
          className: 'blog__item',
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
            className: 'blog__item-img',
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("img", {
              src: _img_post5_png__WEBPACK_IMPORTED_MODULE_6__["default"],
              alt: _data_blogNewsDada_json__WEBPACK_IMPORTED_MODULE_0__[5].shortTitle
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 164,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 163,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
            className: 'blog__item-info',
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
              className: 'blog_item-date',
              children: _data_blogNewsDada_json__WEBPACK_IMPORTED_MODULE_0__[5].date
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 168,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
              className: 'blog__item-title',
              children: _data_blogNewsDada_json__WEBPACK_IMPORTED_MODULE_0__[5].shortTitle
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 172,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 167,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
        className: 'blog__col',
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
          className: 'blog__item',
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
            className: 'blog__item-img',
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("img", {
              src: _img_post6_png__WEBPACK_IMPORTED_MODULE_7__["default"],
              alt: _data_blogNewsDada_json__WEBPACK_IMPORTED_MODULE_0__[6].shortTitle
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 182,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 181,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
            className: 'blog__item-info',
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
              className: 'blog_item-date',
              children: _data_blogNewsDada_json__WEBPACK_IMPORTED_MODULE_0__[6].date
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 186,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
              className: 'blog__item-title',
              children: _data_blogNewsDada_json__WEBPACK_IMPORTED_MODULE_0__[6].shortTitle
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 190,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 185,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
          className: 'blog__item',
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
            className: 'blog__item-img',
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("img", {
              src: _img_post7_png__WEBPACK_IMPORTED_MODULE_8__["default"],
              alt: _data_blogNewsDada_json__WEBPACK_IMPORTED_MODULE_0__[7].shortTitle
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 198,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 197,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
            className: 'blog__item-info',
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
              className: 'blog_item-date',
              children: _data_blogNewsDada_json__WEBPACK_IMPORTED_MODULE_0__[7].date
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 202,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
              className: 'blog__item-title',
              children: _data_blogNewsDada_json__WEBPACK_IMPORTED_MODULE_0__[7].shortTitle
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 206,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 201,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 75,
    columnNumber: 9
  }, this);
}

_c = Blog;
/* harmony default export */ __webpack_exports__["default"] = (Blog);

var _c;

__webpack_require__.$Refresh$.register(_c, "Blog");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/data/blogNewsDada.json":
/*!************************************!*\
  !*** ./src/data/blogNewsDada.json ***!
  \************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":0,\"date\":\"21.01.20\",\"shortTitle\":\"ДЕПАРТАМЕНТ\",\"title\":\"ДЕПАРТАМЕНТ ГОРОДСКОЙ НЕДВИЖИМОСТИ\",\"content\":\"Департамент городской недвижимости OXE CAPITAL - это команда сверх-профессиональных брокеров, которые разбираются как в глобальных процессах изменения инвестиционной привлекательности районов столицы, так и в мельчайших нюансах продажи объектов от собственников.\\n\\nВ штате департамента работают 15 профессиональных сотрудников, обладающих огромным опытом и высокой компетенцией в продажах вторичной недвижимости. Они инициируют большой поток сделок в компании. Брокеры городского департамента искренне влюблены в реализуемые объекты, прекрасно знают историю Москвы, ее проспектов, площадей, улиц и переулков. Чаще всего клиенты департамента городской недвижимости становятся добрыми друзьями брокеров, а те, в свою очередь, переходят в разряд семейных специалистов, работающих с несколькими поколениями.\",\"img\":\"/../../img/post0.png\"},{\"id\":1,\"date\":\"21.01.20\",\"shortTitle\":\"ДЕПАРТАМЕНТ\",\"title\":\"ДЕПАРТАМЕНТ ГОРОДСКОЙ НЕДВИЖИМОСТИ\",\"content\":\"Департамент городской недвижимости OXE CAPITAL - это команда сверх-профессиональных брокеров, которые разбираются как в глобальных процессах изменения инвестиционной привлекательности районов столицы, так и в мельчайших нюансах продажи объектов от собственников.\\n\\nВ штате департамента работают 15 профессиональных сотрудников, обладающих огромным опытом и высокой компетенцией в продажах вторичной недвижимости. Они инициируют большой поток сделок в компании. Брокеры городского департамента искренне влюблены в реализуемые объекты, прекрасно знают историю Москвы, ее проспектов, площадей, улиц и переулков. Чаще всего клиенты департамента городской недвижимости становятся добрыми друзьями брокеров, а те, в свою очередь, переходят в разряд семейных специалистов, работающих с несколькими поколениями.\",\"img\":\"../../img/post1.png\"},{\"id\":2,\"date\":\"21.01.20\",\"shortTitle\":\"ДЕПАРТАМЕНТ\",\"title\":\"ДЕПАРТАМЕНТ ГОРОДСКОЙ НЕДВИЖИМОСТИ\",\"content\":\"Департамент городской недвижимости OXE CAPITAL - это команда сверх-профессиональных брокеров, которые разбираются как в глобальных процессах изменения инвестиционной привлекательности районов столицы, так и в мельчайших нюансах продажи объектов от собственников.\\n\\nВ штате департамента работают 15 профессиональных сотрудников, обладающих огромным опытом и высокой компетенцией в продажах вторичной недвижимости. Они инициируют большой поток сделок в компании. Брокеры городского департамента искренне влюблены в реализуемые объекты, прекрасно знают историю Москвы, ее проспектов, площадей, улиц и переулков. Чаще всего клиенты департамента городской недвижимости становятся добрыми друзьями брокеров, а те, в свою очередь, переходят в разряд семейных специалистов, работающих с несколькими поколениями.\",\"img\":\"../../img/post2.png\"},{\"id\":3,\"date\":\"21.01.20\",\"shortTitle\":\"ДЕПАРТАМЕНТ\",\"title\":\"ДЕПАРТАМЕНТ ГОРОДСКОЙ НЕДВИЖИМОСТИ\",\"content\":\"Департамент городской недвижимости OXE CAPITAL - это команда сверх-профессиональных брокеров, которые разбираются как в глобальных процессах изменения инвестиционной привлекательности районов столицы, так и в мельчайших нюансах продажи объектов от собственников.\\n\\nВ штате департамента работают 15 профессиональных сотрудников, обладающих огромным опытом и высокой компетенцией в продажах вторичной недвижимости. Они инициируют большой поток сделок в компании. Брокеры городского департамента искренне влюблены в реализуемые объекты, прекрасно знают историю Москвы, ее проспектов, площадей, улиц и переулков. Чаще всего клиенты департамента городской недвижимости становятся добрыми друзьями брокеров, а те, в свою очередь, переходят в разряд семейных специалистов, работающих с несколькими поколениями.\",\"img\":\"../../img/post3.png\"},{\"id\":4,\"date\":\"21.01.20\",\"shortTitle\":\"ДЕПАРТАМЕНТ\",\"title\":\"ДЕПАРТАМЕНТ ГОРОДСКОЙ НЕДВИЖИМОСТИ\",\"content\":\"Департамент городской недвижимости OXE CAPITAL - это команда сверх-профессиональных брокеров, которые разбираются как в глобальных процессах изменения инвестиционной привлекательности районов столицы, так и в мельчайших нюансах продажи объектов от собственников.\\n\\nВ штате департамента работают 15 профессиональных сотрудников, обладающих огромным опытом и высокой компетенцией в продажах вторичной недвижимости. Они инициируют большой поток сделок в компании. Брокеры городского департамента искренне влюблены в реализуемые объекты, прекрасно знают историю Москвы, ее проспектов, площадей, улиц и переулков. Чаще всего клиенты департамента городской недвижимости становятся добрыми друзьями брокеров, а те, в свою очередь, переходят в разряд семейных специалистов, работающих с несколькими поколениями.\",\"img\":\"../../img/post4.png\"},{\"id\":5,\"date\":\"21.01.20\",\"shortTitle\":\"ДЕПАРТАМЕНТ\",\"title\":\"ДЕПАРТАМЕНТ ГОРОДСКОЙ НЕДВИЖИМОСТИ\",\"content\":\"Департамент городской недвижимости OXE CAPITAL - это команда сверх-профессиональных брокеров, которые разбираются как в глобальных процессах изменения инвестиционной привлекательности районов столицы, так и в мельчайших нюансах продажи объектов от собственников.\\n\\nВ штате департамента работают 15 профессиональных сотрудников, обладающих огромным опытом и высокой компетенцией в продажах вторичной недвижимости. Они инициируют большой поток сделок в компании. Брокеры городского департамента искренне влюблены в реализуемые объекты, прекрасно знают историю Москвы, ее проспектов, площадей, улиц и переулков. Чаще всего клиенты департамента городской недвижимости становятся добрыми друзьями брокеров, а те, в свою очередь, переходят в разряд семейных специалистов, работающих с несколькими поколениями.\",\"img\":\"../../img/post5.png\"},{\"id\":6,\"date\":\"21.01.20\",\"shortTitle\":\"ДЕПАРТАМЕНТ\",\"title\":\"ДЕПАРТАМЕНТ ГОРОДСКОЙ НЕДВИЖИМОСТИ\",\"content\":\"Департамент городской недвижимости OXE CAPITAL - это команда сверх-профессиональных брокеров, которые разбираются как в глобальных процессах изменения инвестиционной привлекательности районов столицы, так и в мельчайших нюансах продажи объектов от собственников.\\n\\nВ штате департамента работают 15 профессиональных сотрудников, обладающих огромным опытом и высокой компетенцией в продажах вторичной недвижимости. Они инициируют большой поток сделок в компании. Брокеры городского департамента искренне влюблены в реализуемые объекты, прекрасно знают историю Москвы, ее проспектов, площадей, улиц и переулков. Чаще всего клиенты департамента городской недвижимости становятся добрыми друзьями брокеров, а те, в свою очередь, переходят в разряд семейных специалистов, работающих с несколькими поколениями.\",\"img\":\"../../img/post6.png\"},{\"id\":7,\"date\":\"21.01.20\",\"shortTitle\":\"ДЕПАРТАМЕНТ\",\"title\":\"ДЕПАРТАМЕНТ ГОРОДСКОЙ НЕДВИЖИМОСТИ\",\"content\":\"Департамент городской недвижимости OXE CAPITAL - это команда сверх-профессиональных брокеров, которые разбираются как в глобальных процессах изменения инвестиционной привлекательности районов столицы, так и в мельчайших нюансах продажи объектов от собственников.\\n\\nВ штате департамента работают 15 профессиональных сотрудников, обладающих огромным опытом и высокой компетенцией в продажах вторичной недвижимости. Они инициируют большой поток сделок в компании. Брокеры городского департамента искренне влюблены в реализуемые объекты, прекрасно знают историю Москвы, ее проспектов, площадей, улиц и переулков. Чаще всего клиенты департамента городской недвижимости становятся добрыми друзьями брокеров, а те, в свою очередь, переходят в разряд семейных специалистов, работающих с несколькими поколениями.\",\"img\":\"../../img/post7.png\"}]");

/***/ })

})
//# sourceMappingURL=main.ce5a859cdd42c73a7e7b.hot-update.js.map