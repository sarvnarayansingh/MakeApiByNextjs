"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/profile";
exports.ids = ["pages/profile"];
exports.modules = {

/***/ "./components/Profile.js":
/*!*******************************!*\
  !*** ./components/Profile.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/auth */ \"./lib/auth.js\");\n\n\n\n// import axios from 'axios'\n// axios.defaults.withCredentials =true\nconst ProfileData = ()=>{\n    const { 0: userData , 1: setUserData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (0,_lib_auth__WEBPACK_IMPORTED_MODULE_2__.profileUserData)().then((user)=>setUserData(user)\n        );\n    }, []);\n    console.log(\"data\", userData);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"/home/sarv/Desktop/MakeApiByNextjs/components/Profile.js\",\n            lineNumber: 16,\n            columnNumber: 9\n        },\n        __self: undefined,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                __source: {\n                    fileName: \"/home/sarv/Desktop/MakeApiByNextjs/components/Profile.js\",\n                    lineNumber: 17,\n                    columnNumber: 13\n                },\n                __self: undefined,\n                children: \"Profile\"\n            }),\n            userData ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                __source: {\n                    fileName: \"/home/sarv/Desktop/MakeApiByNextjs/components/Profile.js\",\n                    lineNumber: 19,\n                    columnNumber: 13\n                },\n                __self: undefined,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        __source: {\n                            fileName: \"/home/sarv/Desktop/MakeApiByNextjs/components/Profile.js\",\n                            lineNumber: 20,\n                            columnNumber: 13\n                        },\n                        __self: undefined,\n                        children: userData && userData.user.id\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        __source: {\n                            fileName: \"/home/sarv/Desktop/MakeApiByNextjs/components/Profile.js\",\n                            lineNumber: 21,\n                            columnNumber: 13\n                        },\n                        __self: undefined,\n                        children: userData && userData.user.email\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        __source: {\n                            fileName: \"/home/sarv/Desktop/MakeApiByNextjs/components/Profile.js\",\n                            lineNumber: 22,\n                            columnNumber: 13\n                        },\n                        __self: undefined,\n                        children: userData && userData.user.name\n                    })\n                ]\n            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                __source: {\n                    fileName: \"/home/sarv/Desktop/MakeApiByNextjs/components/Profile.js\",\n                    lineNumber: 24,\n                    columnNumber: 14\n                },\n                __self: undefined,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                        __source: {\n                            fileName: \"/home/sarv/Desktop/MakeApiByNextjs/components/Profile.js\",\n                            lineNumber: 25,\n                            columnNumber: 17\n                        },\n                        __self: undefined,\n                        children: \"No User Data\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                        href: '/login',\n                        __source: {\n                            fileName: \"/home/sarv/Desktop/MakeApiByNextjs/components/Profile.js\",\n                            lineNumber: 26,\n                            columnNumber: 17\n                        },\n                        __self: undefined,\n                        children: \"go to LoginPage\"\n                    })\n                ]\n            })\n        ]\n    }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfileData);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2ZpbGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUN3RDtBQUNiO0FBQzNDLEVBQTRCO0FBQzVCLEVBQXVDO0FBRXZDLEtBQUssQ0FBQ0ssV0FBVyxPQUFTLENBQUM7SUFDdkIsS0FBSyxNQUFFQyxRQUFRLE1BQUNDLFdBQVcsTUFBR04sK0NBQVEsQ0FBQyxJQUFJO0lBRTNDQyxnREFBUyxLQUFPLENBQUM7UUFDYkUsMERBQWUsR0FBR0ksSUFBSSxFQUFDQyxJQUFJLEdBQUVGLFdBQVcsQ0FBQ0UsSUFBSTs7SUFDakQsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNMQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFNLE9BQUNMLFFBQVE7SUFFM0IsTUFBTSx1RUFDRE0sQ0FBRzs7Ozs7Ozs7aUZBQ0NDLENBQUU7Ozs7Ozs7MEJBQUMsQ0FBTzs7WUFDVlAsUUFBUSx5RUFDUkgsMkNBQVE7Ozs7Ozs7O3lGQUNSUyxDQUFHOzs7Ozs7O2tDQUFFTixRQUFRLElBQUVBLFFBQVEsQ0FBQ0csSUFBSSxDQUFDSyxFQUFFOzt5RkFDL0JGLENBQUc7Ozs7Ozs7a0NBQUVOLFFBQVEsSUFBRUEsUUFBUSxDQUFDRyxJQUFJLENBQUNNLEtBQUs7O3lGQUNsQ0gsQ0FBRzs7Ozs7OztrQ0FBRU4sUUFBUSxJQUFFQSxRQUFRLENBQUNHLElBQUksQ0FBQ08sSUFBSTs7O3VGQUVoQ0osQ0FBRzs7Ozs7Ozs7eUZBQ0FLLENBQUM7Ozs7Ozs7a0NBQUMsQ0FBWTs7eUZBQ2RDLENBQUM7d0JBQUNDLElBQUksRUFBRSxDQUFROzs7Ozs7O2tDQUFFLENBQWU7Ozs7OztBQUtsRCxDQUFDO0FBQ0QsaUVBQWVkLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdXRoLWNvb2tpZXMvLi9jb21wb25lbnRzL1Byb2ZpbGUuanM/NjUxMSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCx7dXNlU3RhdGUsdXNlRWZmZWN0LCBGcmFnbWVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge3Byb2ZpbGVVc2VyRGF0YX0gZnJvbSAnLi4vbGliL2F1dGgnXG4vLyBpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG4vLyBheGlvcy5kZWZhdWx0cy53aXRoQ3JlZGVudGlhbHMgPXRydWVcblxuY29uc3QgUHJvZmlsZURhdGEgPSAoKSA9PiB7XG4gICAgY29uc3QgW3VzZXJEYXRhLHNldFVzZXJEYXRhXT0gdXNlU3RhdGUobnVsbClcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHByb2ZpbGVVc2VyRGF0YSgpLnRoZW4odXNlcj0+c2V0VXNlckRhdGEodXNlcikpXG4gICAgfSwgW10pXG4gICAgY29uc29sZS5sb2coXCJkYXRhXCIsdXNlckRhdGEpXG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDE+UHJvZmlsZTwvaDE+XG4gICAgICAgICAgICB7dXNlckRhdGE/XG4gICAgICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICA8ZGl2Pnt1c2VyRGF0YSYmdXNlckRhdGEudXNlci5pZH08L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+e3VzZXJEYXRhJiZ1c2VyRGF0YS51c2VyLmVtYWlsfTwvZGl2PlxuICAgICAgICAgICAgPGRpdj57dXNlckRhdGEmJnVzZXJEYXRhLnVzZXIubmFtZX08L2Rpdj5cbiAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICAgICA6PGRpdj5cbiAgICAgICAgICAgICAgICA8cD5ObyBVc2VyIERhdGE8L3A+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj17Jy9sb2dpbid9PmdvIHRvIExvZ2luUGFnZTwvYT48L2Rpdj59XG4gICAgICAgIDwvZGl2PlxuICAgIClcbiAgICBcblxufVxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZURhdGEiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkZyYWdtZW50IiwicHJvZmlsZVVzZXJEYXRhIiwiUHJvZmlsZURhdGEiLCJ1c2VyRGF0YSIsInNldFVzZXJEYXRhIiwidGhlbiIsInVzZXIiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiaDEiLCJpZCIsImVtYWlsIiwibmFtZSIsInAiLCJhIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Profile.js\n");

/***/ }),

/***/ "./lib/auth.js":
/*!*********************!*\
  !*** ./lib/auth.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loginUser\": () => (/* binding */ loginUser),\n/* harmony export */   \"profileUserData\": () => (/* binding */ profileUserData)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n(axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.withCredentials) = true;\nconst loginUser = async (email, password)=>{\n    await axios__WEBPACK_IMPORTED_MODULE_0___default().post('/api/login', {\n        email,\n        password\n    }).then((response)=>{\n        return response.data;\n    }).catch((error)=>{\n        console.log(\"--error\");\n    });\n};\nconst profileUserData = async ()=>{\n    const { data  } = await axios__WEBPACK_IMPORTED_MODULE_0___default().get('/api/profile');\n    return data;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvYXV0aC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXlCO0FBQ3pCQSx1RUFBOEIsR0FBRSxJQUFJO0FBRTdCLEtBQUssQ0FBQ0csU0FBUyxVQUFVQyxLQUFLLEVBQUNDLFFBQVEsR0FBRyxDQUFDO0lBQzlDLEtBQUssQ0FBQ0wsaURBQVUsQ0FBQyxDQUFZLGFBQUMsQ0FBQ0k7UUFBQUEsS0FBSztRQUFDQyxRQUFRO0lBQUEsQ0FBQyxFQUM3Q0UsSUFBSSxFQUFFQyxRQUFRLEdBQUcsQ0FBQztRQUNmLE1BQU0sQ0FBQ0EsUUFBUSxDQUFDQyxJQUFJO0lBQ3hCLENBQUMsRUFDQUMsS0FBSyxFQUFFQyxLQUFLLEdBQUcsQ0FBQztRQUNiQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFTO0lBQ3pCLENBQUM7QUFDTCxDQUFDO0FBRU0sS0FBSyxDQUFDQyxlQUFlLGFBQWMsQ0FBQztJQUN2QyxLQUFLLENBQUMsQ0FBQ0wsQ0FBQUEsSUFBSSxHQUFDLEdBQUcsS0FBSyxDQUFDVCxnREFBUyxDQUFDLENBQWM7SUFDekMsTUFBTSxDQUFDUyxJQUFJO0FBRW5CLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdXRoLWNvb2tpZXMvLi9saWIvYXV0aC5qcz8yODdiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmF4aW9zLmRlZmF1bHRzLndpdGhDcmVkZW50aWFscyA9dHJ1ZVxuXG5leHBvcnQgY29uc3QgbG9naW5Vc2VyID0gYXN5bmMgKGVtYWlsLHBhc3N3b3JkKT0+e1xuICAgIGF3YWl0IGF4aW9zLnBvc3QoJy9hcGkvbG9naW4nLHtlbWFpbCxwYXNzd29yZH0pXG4gICAgLnRoZW4oKHJlc3BvbnNlKT0+e1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YVxuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcik9PntcbiAgICAgICAgY29uc29sZS5sb2coXCItLWVycm9yXCIpXG4gICAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IHByb2ZpbGVVc2VyRGF0YSA9IGFzeW5jICgpPT4ge1xuICAgIGNvbnN0IHtkYXRhfSA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9wcm9maWxlJylcbiAgICAgICAgcmV0dXJuIGRhdGFcbiAgXG59Il0sIm5hbWVzIjpbImF4aW9zIiwiZGVmYXVsdHMiLCJ3aXRoQ3JlZGVudGlhbHMiLCJsb2dpblVzZXIiLCJlbWFpbCIsInBhc3N3b3JkIiwicG9zdCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInByb2ZpbGVVc2VyRGF0YSIsImdldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/auth.js\n");

/***/ }),

/***/ "./pages/profile.js":
/*!**************************!*\
  !*** ./pages/profile.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Profile */ \"./components/Profile.js\");\n\n\nconst Profile = ()=>{\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Profile__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        __source: {\n            fileName: \"/home/sarv/Desktop/MakeApiByNextjs/pages/profile.js\",\n            lineNumber: 4,\n            columnNumber: 12\n        },\n        __self: undefined\n    }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Profile);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9maWxlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQStDO0FBRS9DLEtBQUssQ0FBQ0MsT0FBTyxPQUFTLENBQUM7SUFDbkIsTUFBTSxzRUFBRUQsMkRBQVc7Ozs7Ozs7O0FBQ3ZCLENBQUM7QUFDRCxpRUFBZUMsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL2F1dGgtY29va2llcy8uL3BhZ2VzL3Byb2ZpbGUuanM/MDhkMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvZmlsZURhdGEgZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9maWxlJ1xuXG5jb25zdCBQcm9maWxlID0gKCkgPT4ge1xuICAgIHJldHVybiA8UHJvZmlsZURhdGEgLz5cbn1cbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGUiXSwibmFtZXMiOlsiUHJvZmlsZURhdGEiLCJQcm9maWxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/profile.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/profile.js"));
module.exports = __webpack_exports__;

})();