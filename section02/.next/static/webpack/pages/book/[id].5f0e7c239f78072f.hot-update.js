"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/book/[id]",{

/***/ "./src/pages/book/[id].tsx":
/*!*********************************!*\
  !*** ./src/pages/book/[id].tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _id_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./[id].module.css */ \"./src/pages/book/[id].module.css\");\n/* harmony import */ var _id_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_id_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_fetch_book_detail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/fetch-book-detail */ \"./src/lib/fetch-book-detail.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n// export const getServerSideProps = async (\n//   context: GetServerSidePropsContext\n// ) => {\n//   const id = context.params!.id; //const id = params!.id;\n//   console.log(\"아이디 :\" + id);\n//   // const book = await fetctDetail(Number(id));\n//   const book = await fetctBooks();\n//   return {\n//     props: { book },\n//   };\n// };\nfunction Page() {\n    _s();\n    const [book, setBook] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const { id } = router.query;\n    //console.log(id);\n    const fetchbookDetail = async ()=>{\n        const data = await (0,_lib_fetch_book_detail__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Number(id));\n        console.log(data);\n        if (data) setBook(data);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (id) {\n            //상세\n            fetchbookDetail();\n        }\n    }, [\n        id\n    ]);\n    // const { id, title, subTitle, author, publisher, description, coverImgUrl } =\n    //   book;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_id_module_css__WEBPACK_IMPORTED_MODULE_1___default().contaniner),\n        children: [\n            \"title: \",\n            book === null || book === void 0 ? void 0 : book.title\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\work\\\\onebite-next\\\\section02\\\\src\\\\pages\\\\book\\\\[id].tsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n}\n_s(Page, \"A2DmqlEcgU3oxBSBAGMKIu7Vy/U=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYm9vay9baWRdLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFFTTtBQUNNO0FBQ1Y7QUFHeEMsNENBQTRDO0FBQzVDLHVDQUF1QztBQUN2QyxTQUFTO0FBQ1QsNERBQTREO0FBQzVELCtCQUErQjtBQUMvQixtREFBbUQ7QUFDbkQscUNBQXFDO0FBQ3JDLGFBQWE7QUFDYix1QkFBdUI7QUFDdkIsT0FBTztBQUNQLEtBQUs7QUFFVSxTQUFTSzs7SUFDdEIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdMLCtDQUFRQTtJQUNoQyxNQUFNTSxTQUFTSixzREFBU0E7SUFDeEIsTUFBTSxFQUFFSyxFQUFFLEVBQUUsR0FBR0QsT0FBT0UsS0FBSztJQUUzQixrQkFBa0I7SUFFbEIsTUFBTUMsa0JBQWtCO1FBQ3RCLE1BQU1DLE9BQU8sTUFBTVQsa0VBQVdBLENBQUNVLE9BQU9KO1FBQ3RDSyxRQUFRQyxHQUFHLENBQUNIO1FBQ1osSUFBSUEsTUFBTUwsUUFBUUs7SUFDcEI7SUFFQVgsZ0RBQVNBLENBQUM7UUFDUixJQUFJUSxJQUFJO1lBQ04sSUFBSTtZQUNKRTtRQUNGO0lBQ0YsR0FBRztRQUFDRjtLQUFHO0lBRVAsK0VBQStFO0lBQy9FLFVBQVU7SUFFVixxQkFDRSw4REFBQ087UUFBSUMsV0FBV2pCLGtFQUFnQjs7WUFBRTtZQUN4Qk0saUJBQUFBLDJCQUFBQSxLQUFNYSxLQUFLOzs7Ozs7O0FBaUJ6QjtHQTFDd0JkOztRQUVQRCxrREFBU0E7OztLQUZGQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvYm9vay9baWRdLnRzeD9mZjcxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZSBmcm9tIFwiLi9baWRdLm1vZHVsZS5jc3NcIjtcclxuXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGZldGN0RGV0YWlsIGZyb20gXCJAL2xpYi9mZXRjaC1ib29rLWRldGFpbFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQm9va0RhdGEgfSBmcm9tIFwiQC90eXBlc1wiO1xyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChcclxuLy8gICBjb250ZXh0OiBHZXRTZXJ2ZXJTaWRlUHJvcHNDb250ZXh0XHJcbi8vICkgPT4ge1xyXG4vLyAgIGNvbnN0IGlkID0gY29udGV4dC5wYXJhbXMhLmlkOyAvL2NvbnN0IGlkID0gcGFyYW1zIS5pZDtcclxuLy8gICBjb25zb2xlLmxvZyhcIuyVhOydtOuUlCA6XCIgKyBpZCk7XHJcbi8vICAgLy8gY29uc3QgYm9vayA9IGF3YWl0IGZldGN0RGV0YWlsKE51bWJlcihpZCkpO1xyXG4vLyAgIGNvbnN0IGJvb2sgPSBhd2FpdCBmZXRjdEJvb2tzKCk7XHJcbi8vICAgcmV0dXJuIHtcclxuLy8gICAgIHByb3BzOiB7IGJvb2sgfSxcclxuLy8gICB9O1xyXG4vLyB9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZSgpIHtcclxuICBjb25zdCBbYm9vaywgc2V0Qm9va10gPSB1c2VTdGF0ZTxCb29rRGF0YT4oKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XHJcblxyXG4gIC8vY29uc29sZS5sb2coaWQpO1xyXG5cclxuICBjb25zdCBmZXRjaGJvb2tEZXRhaWwgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y3REZXRhaWwoTnVtYmVyKGlkKSk7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIGlmIChkYXRhKSBzZXRCb29rKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoaWQpIHtcclxuICAgICAgLy/sg4HshLhcclxuICAgICAgZmV0Y2hib29rRGV0YWlsKCk7XHJcbiAgICB9XHJcbiAgfSwgW2lkXSk7XHJcblxyXG4gIC8vIGNvbnN0IHsgaWQsIHRpdGxlLCBzdWJUaXRsZSwgYXV0aG9yLCBwdWJsaXNoZXIsIGRlc2NyaXB0aW9uLCBjb3ZlckltZ1VybCB9ID1cclxuICAvLyAgIGJvb2s7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY29udGFuaW5lcn0+XHJcbiAgICAgIHRpdGxlOiB7Ym9vaz8udGl0bGV9XHJcbiAgICAgIHsvKiA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS5jb3Zlcl9pbWdfY29udGFpbmVyfVxyXG4gICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybCgnJHtjb3ZlckltZ1VybH0nKWAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxpbWcgc3JjPXtjb3ZlckltZ1VybH0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS50aXRsZX0+e3RpdGxlfTwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuc3ViVGl0bGV9PntzdWJUaXRsZX08L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmF1dGhvcn0+XHJcbiAgICAgICAge2F1dGhvcn0gfCB7cHVibGlzaGVyfVxyXG4gICAgICA8L2Rpdj4gXHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuZGVzY3JpcHRpb259PntkZXNjcmlwdGlvbn08L2Rpdj5cclxuICAgICAgKi99XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJzdHlsZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZmV0Y3REZXRhaWwiLCJ1c2VSb3V0ZXIiLCJQYWdlIiwiYm9vayIsInNldEJvb2siLCJyb3V0ZXIiLCJpZCIsInF1ZXJ5IiwiZmV0Y2hib29rRGV0YWlsIiwiZGF0YSIsIk51bWJlciIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YW5pbmVyIiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/book/[id].tsx\n"));

/***/ })

});