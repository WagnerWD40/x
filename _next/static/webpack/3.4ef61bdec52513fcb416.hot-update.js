webpackHotUpdate_N_E(3,{

/***/ "./utils/windowmanager.ts":
/*!********************************!*\
  !*** ./utils/windowmanager.ts ***!
  \********************************/
/*! exports provided: getMaxDimensions, getNextVisibleWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getMaxDimensions\", function() { return getMaxDimensions; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getNextVisibleWindow\", function() { return getNextVisibleWindow; });\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/constants */ \"./utils/constants.ts\");\n\nvar getMaxDimensions = function getMaxDimensions(width, height) {\n  var defaultWidth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;\n  var defaultHeight = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;\n  var lockAspectRatio = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;\n\n  if (width === defaultWidth && height === defaultHeight) {\n    var maxWidth = window.innerWidth;\n    var maxHeight = window.innerHeight - _utils_constants__WEBPACK_IMPORTED_MODULE_0__[\"TASKBAR_HEIGHT\"];\n\n    if (lockAspectRatio) {\n      var aspectLockedHeight = Math.min(maxWidth, width) * (height / width);\n\n      if (aspectLockedHeight > maxHeight) {\n        maxWidth = maxHeight / (height / width);\n      } else {\n        maxHeight = aspectLockedHeight;\n      }\n    }\n\n    return {\n      height: Math.floor(Math.min(maxHeight - _utils_constants__WEBPACK_IMPORTED_MODULE_0__[\"WINDOW_PADDING\"] * 2, height)),\n      width: Math.floor(Math.min(maxWidth - _utils_constants__WEBPACK_IMPORTED_MODULE_0__[\"WINDOW_PADDING\"] * 2, width))\n    };\n  }\n\n  return {\n    height: height,\n    width: width\n  };\n};\nvar getNextVisibleWindow = function getNextVisibleWindow(processes, stackOrder) {\n  var visibleProcessId = stackOrder.find(function (stackId) {\n    return processes.find(function (process) {\n      return process.id === stackId && !process.minimized;\n    });\n  });\n  return visibleProcessId || '';\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvd2luZG93bWFuYWdlci50cz8xNDRiIl0sIm5hbWVzIjpbImdldE1heERpbWVuc2lvbnMiLCJ3aWR0aCIsImhlaWdodCIsImRlZmF1bHRXaWR0aCIsImRlZmF1bHRIZWlnaHQiLCJsb2NrQXNwZWN0UmF0aW8iLCJtYXhXaWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJtYXhIZWlnaHQiLCJpbm5lckhlaWdodCIsIlRBU0tCQVJfSEVJR0hUIiwiYXNwZWN0TG9ja2VkSGVpZ2h0IiwiTWF0aCIsIm1pbiIsImZsb29yIiwiV0lORE9XX1BBRERJTkciLCJnZXROZXh0VmlzaWJsZVdpbmRvdyIsInByb2Nlc3NlcyIsInN0YWNrT3JkZXIiLCJ2aXNpYmxlUHJvY2Vzc0lkIiwiZmluZCIsInN0YWNrSWQiLCJwcm9jZXNzIiwiaWQiLCJtaW5pbWl6ZWQiXSwibWFwcGluZ3MiOiJBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxJQUFNQSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQzlCQyxLQUQ4QixFQUU5QkMsTUFGOEIsRUFNUTtBQUFBLE1BSHRDQyxZQUdzQyx1RUFIdkIsQ0FHdUI7QUFBQSxNQUZ0Q0MsYUFFc0MsdUVBRnRCLENBRXNCO0FBQUEsTUFEdENDLGVBQ3NDLHVFQURwQixLQUNvQjs7QUFDdEMsTUFBSUosS0FBSyxLQUFLRSxZQUFWLElBQTBCRCxNQUFNLEtBQUtFLGFBQXpDLEVBQXdEO0FBQ3RELFFBQUlFLFFBQVEsR0FBR0MsTUFBTSxDQUFDQyxVQUF0QjtBQUNBLFFBQUlDLFNBQVMsR0FBR0YsTUFBTSxDQUFDRyxXQUFQLEdBQXFCQywrREFBckM7O0FBRUEsUUFBSU4sZUFBSixFQUFxQjtBQUNuQixVQUFNTyxrQkFBa0IsR0FBR0MsSUFBSSxDQUFDQyxHQUFMLENBQVNSLFFBQVQsRUFBbUJMLEtBQW5CLEtBQTZCQyxNQUFNLEdBQUdELEtBQXRDLENBQTNCOztBQUVBLFVBQUlXLGtCQUFrQixHQUFHSCxTQUF6QixFQUFvQztBQUNsQ0gsZ0JBQVEsR0FBR0csU0FBUyxJQUFJUCxNQUFNLEdBQUdELEtBQWIsQ0FBcEI7QUFDRCxPQUZELE1BRU87QUFDTFEsaUJBQVMsR0FBR0csa0JBQVo7QUFDRDtBQUNGOztBQUVELFdBQU87QUFDTFYsWUFBTSxFQUFFVyxJQUFJLENBQUNFLEtBQUwsQ0FBV0YsSUFBSSxDQUFDQyxHQUFMLENBQVNMLFNBQVMsR0FBR08sK0RBQWMsR0FBRyxDQUF0QyxFQUF5Q2QsTUFBekMsQ0FBWCxDQURIO0FBRUxELFdBQUssRUFBRVksSUFBSSxDQUFDRSxLQUFMLENBQVdGLElBQUksQ0FBQ0MsR0FBTCxDQUFTUixRQUFRLEdBQUdVLCtEQUFjLEdBQUcsQ0FBckMsRUFBd0NmLEtBQXhDLENBQVg7QUFGRixLQUFQO0FBSUQ7O0FBRUQsU0FBTztBQUFFQyxVQUFNLEVBQU5BLE1BQUY7QUFBVUQsU0FBSyxFQUFMQTtBQUFWLEdBQVA7QUFDRCxDQTVCTTtBQThCQSxJQUFNZ0Isb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUNsQ0MsU0FEa0MsRUFFbENDLFVBRmtDLEVBR3ZCO0FBQ1gsTUFBTUMsZ0JBQWdCLEdBQUdELFVBQVUsQ0FBQ0UsSUFBWCxDQUFnQixVQUFDQyxPQUFEO0FBQUEsV0FDdkNKLFNBQVMsQ0FBQ0csSUFBVixDQUFlLFVBQUNFLE9BQUQ7QUFBQSxhQUFhQSxPQUFPLENBQUNDLEVBQVIsS0FBZUYsT0FBZixJQUEwQixDQUFDQyxPQUFPLENBQUNFLFNBQWhEO0FBQUEsS0FBZixDQUR1QztBQUFBLEdBQWhCLENBQXpCO0FBSUEsU0FBT0wsZ0JBQWdCLElBQUksRUFBM0I7QUFDRCxDQVRNIiwiZmlsZSI6Ii4vdXRpbHMvd2luZG93bWFuYWdlci50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgUHJvY2Vzc2VzIH0gZnJvbSAnQC90eXBlcy91dGlscy9wcm9jZXNzbWFuYWdlcic7XG5cbmltcG9ydCB7IFRBU0tCQVJfSEVJR0hULCBXSU5ET1dfUEFERElORyB9IGZyb20gJ0AvdXRpbHMvY29uc3RhbnRzJztcblxuZXhwb3J0IGNvbnN0IGdldE1heERpbWVuc2lvbnMgPSAoXG4gIHdpZHRoOiBudW1iZXIsXG4gIGhlaWdodDogbnVtYmVyLFxuICBkZWZhdWx0V2lkdGggPSAwLFxuICBkZWZhdWx0SGVpZ2h0ID0gMCxcbiAgbG9ja0FzcGVjdFJhdGlvID0gZmFsc2Vcbik6IHsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXIgfSA9PiB7XG4gIGlmICh3aWR0aCA9PT0gZGVmYXVsdFdpZHRoICYmIGhlaWdodCA9PT0gZGVmYXVsdEhlaWdodCkge1xuICAgIGxldCBtYXhXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIGxldCBtYXhIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSBUQVNLQkFSX0hFSUdIVDtcblxuICAgIGlmIChsb2NrQXNwZWN0UmF0aW8pIHtcbiAgICAgIGNvbnN0IGFzcGVjdExvY2tlZEhlaWdodCA9IE1hdGgubWluKG1heFdpZHRoLCB3aWR0aCkgKiAoaGVpZ2h0IC8gd2lkdGgpO1xuXG4gICAgICBpZiAoYXNwZWN0TG9ja2VkSGVpZ2h0ID4gbWF4SGVpZ2h0KSB7XG4gICAgICAgIG1heFdpZHRoID0gbWF4SGVpZ2h0IC8gKGhlaWdodCAvIHdpZHRoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1heEhlaWdodCA9IGFzcGVjdExvY2tlZEhlaWdodDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgaGVpZ2h0OiBNYXRoLmZsb29yKE1hdGgubWluKG1heEhlaWdodCAtIFdJTkRPV19QQURESU5HICogMiwgaGVpZ2h0KSksXG4gICAgICB3aWR0aDogTWF0aC5mbG9vcihNYXRoLm1pbihtYXhXaWR0aCAtIFdJTkRPV19QQURESU5HICogMiwgd2lkdGgpKVxuICAgIH07XG4gIH1cblxuICByZXR1cm4geyBoZWlnaHQsIHdpZHRoIH07XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0TmV4dFZpc2libGVXaW5kb3cgPSAoXG4gIHByb2Nlc3NlczogUHJvY2Vzc2VzLFxuICBzdGFja09yZGVyOiBzdHJpbmdbXVxuKTogc3RyaW5nID0+IHtcbiAgY29uc3QgdmlzaWJsZVByb2Nlc3NJZCA9IHN0YWNrT3JkZXIuZmluZCgoc3RhY2tJZCkgPT5cbiAgICBwcm9jZXNzZXMuZmluZCgocHJvY2VzcykgPT4gcHJvY2Vzcy5pZCA9PT0gc3RhY2tJZCAmJiAhcHJvY2Vzcy5taW5pbWl6ZWQpXG4gICk7XG5cbiAgcmV0dXJuIHZpc2libGVQcm9jZXNzSWQgfHwgJyc7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/windowmanager.ts\n");

/***/ })

})