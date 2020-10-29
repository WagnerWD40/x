webpackHotUpdate_N_E(3,{

/***/ "./utils/windowmanager.ts":
/*!********************************!*\
  !*** ./utils/windowmanager.ts ***!
  \********************************/
/*! exports provided: getMaxDimensions, getNextVisibleWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getMaxDimensions\", function() { return getMaxDimensions; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getNextVisibleWindow\", function() { return getNextVisibleWindow; });\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/constants */ \"./utils/constants.ts\");\n\nvar getMaxDimensions = function getMaxDimensions(width, height) {\n  var defaultWidth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;\n  var defaultHeight = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;\n  var lockAspectRatio = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;\n\n  if (width === defaultWidth && height === defaultHeight) {\n    var PADDING = _utils_constants__WEBPACK_IMPORTED_MODULE_0__[\"WINDOW_PADDING\"] * 2;\n    var maxWidth = window.innerWidth - PADDING;\n    var maxHeight = window.innerHeight - _utils_constants__WEBPACK_IMPORTED_MODULE_0__[\"TASKBAR_HEIGHT\"] - PADDING;\n\n    if (lockAspectRatio) {\n      var aspectLockedHeight = height / width * Math.min(maxWidth, width);\n\n      if (aspectLockedHeight > maxHeight) {\n        maxWidth = maxHeight / (height / width);\n      } else {\n        maxHeight = aspectLockedHeight;\n      }\n    }\n\n    return {\n      height: Math.ceil(Math.min(maxHeight, height)),\n      width: Math.ceil(Math.min(maxWidth, width))\n    };\n  }\n\n  return {\n    height: height,\n    width: width\n  };\n};\nvar getNextVisibleWindow = function getNextVisibleWindow(processes, stackOrder) {\n  var visibleProcessId = stackOrder.find(function (stackId) {\n    return processes.find(function (process) {\n      return process.id === stackId && !process.minimized;\n    });\n  });\n  return visibleProcessId || '';\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvd2luZG93bWFuYWdlci50cz8xNDRiIl0sIm5hbWVzIjpbImdldE1heERpbWVuc2lvbnMiLCJ3aWR0aCIsImhlaWdodCIsImRlZmF1bHRXaWR0aCIsImRlZmF1bHRIZWlnaHQiLCJsb2NrQXNwZWN0UmF0aW8iLCJQQURESU5HIiwiV0lORE9XX1BBRERJTkciLCJtYXhXaWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJtYXhIZWlnaHQiLCJpbm5lckhlaWdodCIsIlRBU0tCQVJfSEVJR0hUIiwiYXNwZWN0TG9ja2VkSGVpZ2h0IiwiTWF0aCIsIm1pbiIsImNlaWwiLCJnZXROZXh0VmlzaWJsZVdpbmRvdyIsInByb2Nlc3NlcyIsInN0YWNrT3JkZXIiLCJ2aXNpYmxlUHJvY2Vzc0lkIiwiZmluZCIsInN0YWNrSWQiLCJwcm9jZXNzIiwiaWQiLCJtaW5pbWl6ZWQiXSwibWFwcGluZ3MiOiJBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxJQUFNQSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQzlCQyxLQUQ4QixFQUU5QkMsTUFGOEIsRUFNUTtBQUFBLE1BSHRDQyxZQUdzQyx1RUFIdkIsQ0FHdUI7QUFBQSxNQUZ0Q0MsYUFFc0MsdUVBRnRCLENBRXNCO0FBQUEsTUFEdENDLGVBQ3NDLHVFQURwQixLQUNvQjs7QUFDdEMsTUFBSUosS0FBSyxLQUFLRSxZQUFWLElBQTBCRCxNQUFNLEtBQUtFLGFBQXpDLEVBQXdEO0FBQ3RELFFBQU1FLE9BQU8sR0FBR0MsK0RBQWMsR0FBRyxDQUFqQztBQUNBLFFBQUlDLFFBQVEsR0FBR0MsTUFBTSxDQUFDQyxVQUFQLEdBQW9CSixPQUFuQztBQUNBLFFBQUlLLFNBQVMsR0FBR0YsTUFBTSxDQUFDRyxXQUFQLEdBQXFCQywrREFBckIsR0FBc0NQLE9BQXREOztBQUVBLFFBQUlELGVBQUosRUFBcUI7QUFDbkIsVUFBTVMsa0JBQWtCLEdBQUlaLE1BQU0sR0FBR0QsS0FBVixHQUFtQmMsSUFBSSxDQUFDQyxHQUFMLENBQVNSLFFBQVQsRUFBbUJQLEtBQW5CLENBQTlDOztBQUVBLFVBQUlhLGtCQUFrQixHQUFHSCxTQUF6QixFQUFvQztBQUNsQ0gsZ0JBQVEsR0FBR0csU0FBUyxJQUFJVCxNQUFNLEdBQUdELEtBQWIsQ0FBcEI7QUFDRCxPQUZELE1BRU87QUFDTFUsaUJBQVMsR0FBR0csa0JBQVo7QUFDRDtBQUNGOztBQUVELFdBQU87QUFDTFosWUFBTSxFQUFFYSxJQUFJLENBQUNFLElBQUwsQ0FBVUYsSUFBSSxDQUFDQyxHQUFMLENBQVNMLFNBQVQsRUFBb0JULE1BQXBCLENBQVYsQ0FESDtBQUVMRCxXQUFLLEVBQUVjLElBQUksQ0FBQ0UsSUFBTCxDQUFVRixJQUFJLENBQUNDLEdBQUwsQ0FBU1IsUUFBVCxFQUFtQlAsS0FBbkIsQ0FBVjtBQUZGLEtBQVA7QUFJRDs7QUFFRCxTQUFPO0FBQUVDLFVBQU0sRUFBTkEsTUFBRjtBQUFVRCxTQUFLLEVBQUxBO0FBQVYsR0FBUDtBQUNELENBN0JNO0FBK0JBLElBQU1pQixvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLENBQ2xDQyxTQURrQyxFQUVsQ0MsVUFGa0MsRUFHdkI7QUFDWCxNQUFNQyxnQkFBZ0IsR0FBR0QsVUFBVSxDQUFDRSxJQUFYLENBQWdCLFVBQUNDLE9BQUQ7QUFBQSxXQUN2Q0osU0FBUyxDQUFDRyxJQUFWLENBQWUsVUFBQ0UsT0FBRDtBQUFBLGFBQWFBLE9BQU8sQ0FBQ0MsRUFBUixLQUFlRixPQUFmLElBQTBCLENBQUNDLE9BQU8sQ0FBQ0UsU0FBaEQ7QUFBQSxLQUFmLENBRHVDO0FBQUEsR0FBaEIsQ0FBekI7QUFJQSxTQUFPTCxnQkFBZ0IsSUFBSSxFQUEzQjtBQUNELENBVE0iLCJmaWxlIjoiLi91dGlscy93aW5kb3dtYW5hZ2VyLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBQcm9jZXNzZXMgfSBmcm9tICdAL3R5cGVzL3V0aWxzL3Byb2Nlc3NtYW5hZ2VyJztcblxuaW1wb3J0IHsgVEFTS0JBUl9IRUlHSFQsIFdJTkRPV19QQURESU5HIH0gZnJvbSAnQC91dGlscy9jb25zdGFudHMnO1xuXG5leHBvcnQgY29uc3QgZ2V0TWF4RGltZW5zaW9ucyA9IChcbiAgd2lkdGg6IG51bWJlcixcbiAgaGVpZ2h0OiBudW1iZXIsXG4gIGRlZmF1bHRXaWR0aCA9IDAsXG4gIGRlZmF1bHRIZWlnaHQgPSAwLFxuICBsb2NrQXNwZWN0UmF0aW8gPSBmYWxzZVxuKTogeyB3aWR0aDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlciB9ID0+IHtcbiAgaWYgKHdpZHRoID09PSBkZWZhdWx0V2lkdGggJiYgaGVpZ2h0ID09PSBkZWZhdWx0SGVpZ2h0KSB7XG4gICAgY29uc3QgUEFERElORyA9IFdJTkRPV19QQURESU5HICogMjtcbiAgICBsZXQgbWF4V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAtIFBBRERJTkc7XG4gICAgbGV0IG1heEhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIFRBU0tCQVJfSEVJR0hUIC0gUEFERElORztcblxuICAgIGlmIChsb2NrQXNwZWN0UmF0aW8pIHtcbiAgICAgIGNvbnN0IGFzcGVjdExvY2tlZEhlaWdodCA9IChoZWlnaHQgLyB3aWR0aCkgKiBNYXRoLm1pbihtYXhXaWR0aCwgd2lkdGgpO1xuXG4gICAgICBpZiAoYXNwZWN0TG9ja2VkSGVpZ2h0ID4gbWF4SGVpZ2h0KSB7XG4gICAgICAgIG1heFdpZHRoID0gbWF4SGVpZ2h0IC8gKGhlaWdodCAvIHdpZHRoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1heEhlaWdodCA9IGFzcGVjdExvY2tlZEhlaWdodDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgaGVpZ2h0OiBNYXRoLmNlaWwoTWF0aC5taW4obWF4SGVpZ2h0LCBoZWlnaHQpKSxcbiAgICAgIHdpZHRoOiBNYXRoLmNlaWwoTWF0aC5taW4obWF4V2lkdGgsIHdpZHRoKSlcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHsgaGVpZ2h0LCB3aWR0aCB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGdldE5leHRWaXNpYmxlV2luZG93ID0gKFxuICBwcm9jZXNzZXM6IFByb2Nlc3NlcyxcbiAgc3RhY2tPcmRlcjogc3RyaW5nW11cbik6IHN0cmluZyA9PiB7XG4gIGNvbnN0IHZpc2libGVQcm9jZXNzSWQgPSBzdGFja09yZGVyLmZpbmQoKHN0YWNrSWQpID0+XG4gICAgcHJvY2Vzc2VzLmZpbmQoKHByb2Nlc3MpID0+IHByb2Nlc3MuaWQgPT09IHN0YWNrSWQgJiYgIXByb2Nlc3MubWluaW1pemVkKVxuICApO1xuXG4gIHJldHVybiB2aXNpYmxlUHJvY2Vzc0lkIHx8ICcnO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/windowmanager.ts\n");

/***/ })

})