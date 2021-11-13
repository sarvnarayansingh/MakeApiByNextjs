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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/auth */ \"./lib/auth.js\");\n\n\n\n// import axios from 'axios'\n// axios.defaults.withCredentials =true\nconst ProfileData = ()=>{\n    const { 0: userData , 1: setUserData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (0,_lib_auth__WEBPACK_IMPORTED_MODULE_2__.profileUserData)().then((user)=>console.log(user)\n        );\n    }, []);\n    console.log(\"data\", userData);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        __source: {\n            fileName: \"/home/sarv/Desktop/MakeApiByNextjs/components/Profile.js\",\n            lineNumber: 16,\n            columnNumber: 9\n        },\n        __self: undefined,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n            __source: {\n                fileName: \"/home/sarv/Desktop/MakeApiByNextjs/components/Profile.js\",\n                lineNumber: 17,\n                columnNumber: 13\n            },\n            __self: undefined,\n            children: \"Profile\"\n        })\n    }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfileData);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2ZpbGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUN3RDtBQUNiO0FBQzNDLEVBQTRCO0FBQzVCLEVBQXVDO0FBRXZDLEtBQUssQ0FBQ0ssV0FBVyxPQUFTLENBQUM7SUFDdkIsS0FBSyxNQUFFQyxRQUFRLE1BQUNDLFdBQVcsTUFBR04sK0NBQVEsQ0FBQyxDQUFDO0lBQUEsQ0FBQztJQUV6Q0MsZ0RBQVMsS0FBTyxDQUFDO1FBQ2JFLDBEQUFlLEdBQUdJLElBQUksRUFBQ0MsSUFBSSxHQUFJQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsSUFBSTs7SUFDbkQsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNMQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFNLE9BQUNMLFFBQVE7SUFFM0IsTUFBTSxzRUFDRE0sQ0FBRzs7Ozs7Ozt1RkFDQ0MsQ0FBRTs7Ozs7OztzQkFBQyxDQUFPOzs7QUFjdkIsQ0FBQztBQUNELGlFQUFlUixXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXV0aC1jb29raWVzLy4vY29tcG9uZW50cy9Qcm9maWxlLmpzPzY1MTEiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3Qse3VzZVN0YXRlLHVzZUVmZmVjdCwgRnJhZ21lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtwcm9maWxlVXNlckRhdGF9IGZyb20gJy4uL2xpYi9hdXRoJ1xuLy8gaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuLy8gYXhpb3MuZGVmYXVsdHMud2l0aENyZWRlbnRpYWxzID10cnVlXG5cbmNvbnN0IFByb2ZpbGVEYXRhID0gKCkgPT4ge1xuICAgIGNvbnN0IFt1c2VyRGF0YSxzZXRVc2VyRGF0YV09IHVzZVN0YXRlKHt9KVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgcHJvZmlsZVVzZXJEYXRhKCkudGhlbih1c2VyID0+IGNvbnNvbGUubG9nKHVzZXIpKVxuICAgIH0sIFtdKVxuICAgIGNvbnNvbGUubG9nKFwiZGF0YVwiLHVzZXJEYXRhKVxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxPlByb2ZpbGU8L2gxPlxuICAgICAgICAgICAgey8qIHt1c2VyRGF0YT9cbiAgICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgIDxkaXY+e3VzZXJEYXRhJiZ1c2VyRGF0YS51c2VyLmlkfTwvZGl2PlxuICAgICAgICAgICAgPGRpdj57dXNlckRhdGEmJnVzZXJEYXRhLnVzZXIuZW1haWx9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2Pnt1c2VyRGF0YSYmdXNlckRhdGEudXNlci5uYW1lfTwvZGl2PlxuICAgICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgICAgIDo8ZGl2PlxuICAgICAgICAgICAgICAgIDxwPk5vIFVzZXIgRGF0YTwvcD5cbiAgICAgICAgICAgICAgICA8YSBocmVmPXsnL2xvZ2luJ30+Z28gdG8gTG9naW5QYWdlPC9hPjwvZGl2Pn0gKi99XG4gICAgICAgIDwvZGl2PlxuICAgIClcbiAgICBcblxufVxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZURhdGEiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkZyYWdtZW50IiwicHJvZmlsZVVzZXJEYXRhIiwiUHJvZmlsZURhdGEiLCJ1c2VyRGF0YSIsInNldFVzZXJEYXRhIiwidGhlbiIsInVzZXIiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Profile.js\n");

/***/ }),

/***/ "./lib/auth.js":
/*!*********************!*\
  !*** ./lib/auth.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loginUser\": () => (/* binding */ loginUser),\n/* harmony export */   \"profileUserData\": () => (/* binding */ profileUserData)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n(axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.withCredentials) = true;\nconst loginUser = async (email, password)=>{\n    await axios__WEBPACK_IMPORTED_MODULE_0___default().post('/api/login', {\n        email,\n        password\n    }).then((response)=>{\n        return response.data;\n    }).catch((error)=>{\n        console.log(\"--error\");\n    });\n};\nconst profileUserData = async ()=>{\n    await axios__WEBPACK_IMPORTED_MODULE_0___default().get('/api/profile').then((response)=>{\n        return response.data;\n    }).catch((error)=>{\n        console.log(\"--error\");\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvYXV0aC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXlCO0FBQ3pCQSx1RUFBOEIsR0FBRSxJQUFJO0FBRTdCLEtBQUssQ0FBQ0csU0FBUyxVQUFVQyxLQUFLLEVBQUNDLFFBQVEsR0FBRyxDQUFDO0lBQzlDLEtBQUssQ0FBQ0wsaURBQVUsQ0FBQyxDQUFZLGFBQUMsQ0FBQ0k7UUFBQUEsS0FBSztRQUFDQyxRQUFRO0lBQUEsQ0FBQyxFQUM3Q0UsSUFBSSxFQUFFQyxRQUFRLEdBQUcsQ0FBQztRQUNmLE1BQU0sQ0FBQ0EsUUFBUSxDQUFDQyxJQUFJO0lBQ3hCLENBQUMsRUFDQUMsS0FBSyxFQUFFQyxLQUFLLEdBQUcsQ0FBQztRQUNiQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFTO0lBQ3pCLENBQUM7QUFDTCxDQUFDO0FBRU0sS0FBSyxDQUFDQyxlQUFlLGFBQWMsQ0FBQztJQUN2QyxLQUFLLENBQUNkLGdEQUFTLENBQUMsQ0FBYyxlQUM3Qk8sSUFBSSxFQUFFQyxRQUFRLEdBQUcsQ0FBQztRQUNmLE1BQU0sQ0FBQ0EsUUFBUSxDQUFDQyxJQUFJO0lBQ3hCLENBQUMsRUFDQUMsS0FBSyxFQUFFQyxLQUFLLEdBQUcsQ0FBQztRQUNiQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFTO0lBQ3pCLENBQUM7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXV0aC1jb29raWVzLy4vbGliL2F1dGguanM/Mjg3YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5heGlvcy5kZWZhdWx0cy53aXRoQ3JlZGVudGlhbHMgPXRydWVcblxuZXhwb3J0IGNvbnN0IGxvZ2luVXNlciA9IGFzeW5jIChlbWFpbCxwYXNzd29yZCk9PntcbiAgICBhd2FpdCBheGlvcy5wb3N0KCcvYXBpL2xvZ2luJyx7ZW1haWwscGFzc3dvcmR9KVxuICAgIC50aGVuKChyZXNwb25zZSk9PntcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGFcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpPT57XG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS1lcnJvclwiKVxuICAgIH0pXG59XG5cbmV4cG9ydCBjb25zdCBwcm9maWxlVXNlckRhdGEgPSBhc3luYyAoKT0+IHtcbiAgICBhd2FpdCBheGlvcy5nZXQoJy9hcGkvcHJvZmlsZScpXG4gICAgLnRoZW4oKHJlc3BvbnNlKT0+e1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YVxuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcik9PntcbiAgICAgICAgY29uc29sZS5sb2coXCItLWVycm9yXCIpXG4gICAgfSlcbn0iXSwibmFtZXMiOlsiYXhpb3MiLCJkZWZhdWx0cyIsIndpdGhDcmVkZW50aWFscyIsImxvZ2luVXNlciIsImVtYWlsIiwicGFzc3dvcmQiLCJwb3N0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwicHJvZmlsZVVzZXJEYXRhIiwiZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/auth.js\n");

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