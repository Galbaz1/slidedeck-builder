"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[7].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[7].oneOf[14].use[2]!./styles/speaker_intro.css":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[7].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[7].oneOf[14].use[2]!./styles/speaker_intro.css ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@keyframes spin-slow {\\n  from {\\n    transform: rotate(0deg);\\n  }\\n  to {\\n    transform: rotate(360deg);\\n  }\\n}\\n\\n.animate-spin-slow {\\n  animation: spin-slow 20s linear infinite;\\n}\\n\\n@keyframes fallIn {\\n  0% {\\n    transform: translateY(-100vh) rotate(0deg);\\n    opacity: 0;\\n  }\\n  60% {\\n    transform: translateY(20px) rotate(720deg);\\n  }\\n  80% {\\n    transform: translateY(-10px) rotate(720deg);\\n  }\\n  100% {\\n    transform: translateY(0) rotate(720deg);\\n    opacity: 1;\\n  }\\n}\\n\\n@keyframes footsteps {\\n  0% {\\n    clip-path: inset(0 100% 0 0);\\n  }\\n  100% {\\n    clip-path: inset(0 0 0 0);\\n  }\\n}\\n\\n@keyframes dotted-line {\\n  0% {\\n    stroke-dashoffset: 1000;\\n  }\\n  100% {\\n    stroke-dashoffset: 0;\\n  }\\n}\\n\\n@keyframes synergy-appear {\\n  0% {\\n    transform: scale(0) rotate(0deg);\\n    opacity: 0;\\n  }\\n  100% {\\n    transform: scale(1) rotate(360deg);\\n    opacity: 1;\\n  }\\n}\\n\\n.fall-animation {\\n  opacity: 0;\\n  animation: fallIn 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;\\n  animation-delay: 2s;\\n}\\n\\n.fall-animation-delay-1 {\\n  animation-delay: 7s;\\n}\\n\\n.fall-animation-delay-2 {\\n  animation-delay: 15s;\\n}\\n\\n.footsteps-path {\\n  stroke-dasharray: 10;\\n  stroke-dashoffset: 1000;\\n  animation: dotted-line 1.5s ease-in-out forwards;\\n}\\n\\n.footsteps-animation-1 {\\n  animation-delay: 1.5s;\\n}\\n\\n.footsteps-animation-2 {\\n  animation-delay: 3.5s;\\n}\\n\\n.synergy-animation {\\n  opacity: 0;\\n  animation: synergy-appear 2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;\\n  animation-delay: 15s;\\n}\\n\\n/* Footsteps styling */\\n.footstep {\\n  position: absolute;\\n  width: 24px;\\n  height: 36px;\\n  opacity: 1;\\n  transform-origin: center;\\n  z-index: 51;\\n}\\n\\n.footstep.active {\\n  opacity: 1;\\n}\\n\\n.footstep.trail {\\n  fill: #666;\\n  opacity: 0.5;\\n}\\n\\n.ghost-trail .footstep {\\n  fill: #666;\\n  opacity: 0.5;\\n}\\n\\n/* First block path animation */\\n@keyframes first-block-path {\\n  0% { transform: translate(0, 0) rotate(0deg); opacity: 0; }\\n  5% { transform: translate(0, 0) rotate(0deg); opacity: 1; }\\n  20% { transform: translate(-100px, 0) rotate(-90deg); }\\n  35% { transform: translate(-100px, 100px) rotate(-90deg); }\\n  50% { transform: translate(0, 100px) rotate(0deg); }\\n  65% { transform: translate(0, 0) rotate(90deg); }\\n  80% { transform: translate(100px, 0) rotate(90deg); }\\n  95% { transform: translate(100px, 0) rotate(90deg); opacity: 1; }\\n  100% { transform: translate(100px, 0) rotate(90deg); opacity: 0; }\\n}\\n\\n.first-block-path .left-step {\\n  animation: first-block-path 4s ease-in-out forwards;\\n}\\n\\n.first-block-path .right-step {\\n  animation: first-block-path 4s ease-in-out 0.5s forwards;\\n}\\n\\n/* Second block path animation */\\n@keyframes second-block-path {\\n  /* Similar to first-block-path but adjusted for second block position */\\n}\\n\\n.second-block-path .left-step {\\n  animation: second-block-path 4s ease-in-out 4s forwards;\\n}\\n\\n.second-block-path .right-step {\\n  animation: second-block-path 4s ease-in-out 4.5s forwards;\\n}\\n\\n/* Third block path animation */\\n@keyframes third-block-path {\\n  /* Similar to previous paths but adjusted for third block position */\\n}\\n\\n.third-block-path .left-step {\\n  animation: third-block-path 4s ease-in-out 8s forwards;\\n}\\n\\n.third-block-path .right-step {\\n  animation: third-block-path 4s ease-in-out 8.5s forwards;\\n}\\n\\n/* Trail effect */\\n.footstep-trail {\\n  position: absolute;\\n  opacity: 0.3;\\n  transition: opacity 0.5s ease-out;\\n}\\n\\n.footstep-trail.fade {\\n  opacity: 0;\\n}\\n\\n.ghost-trail {\\n  position: absolute;\\n  fill: #666;\\n  opacity: 0.5;\\n  transition: opacity 1s ease-out;\\n  z-index: 50;\\n}\\n\\n.ghost-trail-container {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  pointer-events: none;\\n  z-index: 50;\\n  overflow: hidden;\\n}\\n\\n.ghost-trail svg {\\n  fill: #d97706 !important; /* amber-600 for ghost trails */\\n  opacity: 0.5;\\n} \", \"\",{\"version\":3,\"sources\":[\"webpack://styles/speaker_intro.css\"],\"names\":[],\"mappings\":\"AAAA;EACE;IACE,uBAAuB;EACzB;EACA;IACE,yBAAyB;EAC3B;AACF;;AAEA;EACE,wCAAwC;AAC1C;;AAEA;EACE;IACE,0CAA0C;IAC1C,UAAU;EACZ;EACA;IACE,0CAA0C;EAC5C;EACA;IACE,2CAA2C;EAC7C;EACA;IACE,uCAAuC;IACvC,UAAU;EACZ;AACF;;AAEA;EACE;IACE,4BAA4B;EAC9B;EACA;IACE,yBAAyB;EAC3B;AACF;;AAEA;EACE;IACE,uBAAuB;EACzB;EACA;IACE,oBAAoB;EACtB;AACF;;AAEA;EACE;IACE,gCAAgC;IAChC,UAAU;EACZ;EACA;IACE,kCAAkC;IAClC,UAAU;EACZ;AACF;;AAEA;EACE,UAAU;EACV,kEAAkE;EAClE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,oBAAoB;EACpB,uBAAuB;EACvB,gDAAgD;AAClD;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,UAAU;EACV,uEAAuE;EACvE,oBAAoB;AACtB;;AAEA,sBAAsB;AACtB;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,UAAU;EACV,wBAAwB;EACxB,WAAW;AACb;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,UAAU;EACV,YAAY;AACd;;AAEA;EACE,UAAU;EACV,YAAY;AACd;;AAEA,+BAA+B;AAC/B;EACE,KAAK,uCAAuC,EAAE,UAAU,EAAE;EAC1D,KAAK,uCAAuC,EAAE,UAAU,EAAE;EAC1D,MAAM,8CAA8C,EAAE;EACtD,MAAM,kDAAkD,EAAE;EAC1D,MAAM,2CAA2C,EAAE;EACnD,MAAM,wCAAwC,EAAE;EAChD,MAAM,4CAA4C,EAAE;EACpD,MAAM,4CAA4C,EAAE,UAAU,EAAE;EAChE,OAAO,4CAA4C,EAAE,UAAU,EAAE;AACnE;;AAEA;EACE,mDAAmD;AACrD;;AAEA;EACE,wDAAwD;AAC1D;;AAEA,gCAAgC;AAChC;EACE,uEAAuE;AACzE;;AAEA;EACE,uDAAuD;AACzD;;AAEA;EACE,yDAAyD;AAC3D;;AAEA,+BAA+B;AAC/B;EACE,oEAAoE;AACtE;;AAEA;EACE,sDAAsD;AACxD;;AAEA;EACE,wDAAwD;AAC1D;;AAEA,iBAAiB;AACjB;EACE,kBAAkB;EAClB,YAAY;EACZ,iCAAiC;AACnC;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,YAAY;EACZ,+BAA+B;EAC/B,WAAW;AACb;;AAEA;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,oBAAoB;EACpB,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,wBAAwB,EAAE,+BAA+B;EACzD,YAAY;AACd\",\"sourcesContent\":[\"@keyframes spin-slow {\\n  from {\\n    transform: rotate(0deg);\\n  }\\n  to {\\n    transform: rotate(360deg);\\n  }\\n}\\n\\n.animate-spin-slow {\\n  animation: spin-slow 20s linear infinite;\\n}\\n\\n@keyframes fallIn {\\n  0% {\\n    transform: translateY(-100vh) rotate(0deg);\\n    opacity: 0;\\n  }\\n  60% {\\n    transform: translateY(20px) rotate(720deg);\\n  }\\n  80% {\\n    transform: translateY(-10px) rotate(720deg);\\n  }\\n  100% {\\n    transform: translateY(0) rotate(720deg);\\n    opacity: 1;\\n  }\\n}\\n\\n@keyframes footsteps {\\n  0% {\\n    clip-path: inset(0 100% 0 0);\\n  }\\n  100% {\\n    clip-path: inset(0 0 0 0);\\n  }\\n}\\n\\n@keyframes dotted-line {\\n  0% {\\n    stroke-dashoffset: 1000;\\n  }\\n  100% {\\n    stroke-dashoffset: 0;\\n  }\\n}\\n\\n@keyframes synergy-appear {\\n  0% {\\n    transform: scale(0) rotate(0deg);\\n    opacity: 0;\\n  }\\n  100% {\\n    transform: scale(1) rotate(360deg);\\n    opacity: 1;\\n  }\\n}\\n\\n.fall-animation {\\n  opacity: 0;\\n  animation: fallIn 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;\\n  animation-delay: 2s;\\n}\\n\\n.fall-animation-delay-1 {\\n  animation-delay: 7s;\\n}\\n\\n.fall-animation-delay-2 {\\n  animation-delay: 15s;\\n}\\n\\n.footsteps-path {\\n  stroke-dasharray: 10;\\n  stroke-dashoffset: 1000;\\n  animation: dotted-line 1.5s ease-in-out forwards;\\n}\\n\\n.footsteps-animation-1 {\\n  animation-delay: 1.5s;\\n}\\n\\n.footsteps-animation-2 {\\n  animation-delay: 3.5s;\\n}\\n\\n.synergy-animation {\\n  opacity: 0;\\n  animation: synergy-appear 2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;\\n  animation-delay: 15s;\\n}\\n\\n/* Footsteps styling */\\n.footstep {\\n  position: absolute;\\n  width: 24px;\\n  height: 36px;\\n  opacity: 1;\\n  transform-origin: center;\\n  z-index: 51;\\n}\\n\\n.footstep.active {\\n  opacity: 1;\\n}\\n\\n.footstep.trail {\\n  fill: #666;\\n  opacity: 0.5;\\n}\\n\\n.ghost-trail .footstep {\\n  fill: #666;\\n  opacity: 0.5;\\n}\\n\\n/* First block path animation */\\n@keyframes first-block-path {\\n  0% { transform: translate(0, 0) rotate(0deg); opacity: 0; }\\n  5% { transform: translate(0, 0) rotate(0deg); opacity: 1; }\\n  20% { transform: translate(-100px, 0) rotate(-90deg); }\\n  35% { transform: translate(-100px, 100px) rotate(-90deg); }\\n  50% { transform: translate(0, 100px) rotate(0deg); }\\n  65% { transform: translate(0, 0) rotate(90deg); }\\n  80% { transform: translate(100px, 0) rotate(90deg); }\\n  95% { transform: translate(100px, 0) rotate(90deg); opacity: 1; }\\n  100% { transform: translate(100px, 0) rotate(90deg); opacity: 0; }\\n}\\n\\n.first-block-path .left-step {\\n  animation: first-block-path 4s ease-in-out forwards;\\n}\\n\\n.first-block-path .right-step {\\n  animation: first-block-path 4s ease-in-out 0.5s forwards;\\n}\\n\\n/* Second block path animation */\\n@keyframes second-block-path {\\n  /* Similar to first-block-path but adjusted for second block position */\\n}\\n\\n.second-block-path .left-step {\\n  animation: second-block-path 4s ease-in-out 4s forwards;\\n}\\n\\n.second-block-path .right-step {\\n  animation: second-block-path 4s ease-in-out 4.5s forwards;\\n}\\n\\n/* Third block path animation */\\n@keyframes third-block-path {\\n  /* Similar to previous paths but adjusted for third block position */\\n}\\n\\n.third-block-path .left-step {\\n  animation: third-block-path 4s ease-in-out 8s forwards;\\n}\\n\\n.third-block-path .right-step {\\n  animation: third-block-path 4s ease-in-out 8.5s forwards;\\n}\\n\\n/* Trail effect */\\n.footstep-trail {\\n  position: absolute;\\n  opacity: 0.3;\\n  transition: opacity 0.5s ease-out;\\n}\\n\\n.footstep-trail.fade {\\n  opacity: 0;\\n}\\n\\n.ghost-trail {\\n  position: absolute;\\n  fill: #666;\\n  opacity: 0.5;\\n  transition: opacity 1s ease-out;\\n  z-index: 50;\\n}\\n\\n.ghost-trail-container {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  pointer-events: none;\\n  z-index: 50;\\n  overflow: hidden;\\n}\\n\\n.ghost-trail svg {\\n  fill: #d97706 !important; /* amber-600 for ghost trails */\\n  opacity: 0.5;\\n} \"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s3XS5vbmVPZlsxNF0udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzddLm9uZU9mWzE0XS51c2VbMl0hLi9zdHlsZXMvc3BlYWtlcl9pbnRyby5jc3MiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDd0g7QUFDeEgsOEJBQThCLGtIQUEyQjtBQUN6RDtBQUNBLGdFQUFnRSxVQUFVLDhCQUE4QixLQUFLLFFBQVEsZ0NBQWdDLEtBQUssR0FBRyx3QkFBd0IsNkNBQTZDLEdBQUcsdUJBQXVCLFFBQVEsaURBQWlELGlCQUFpQixLQUFLLFNBQVMsaURBQWlELEtBQUssU0FBUyxrREFBa0QsS0FBSyxVQUFVLDhDQUE4QyxpQkFBaUIsS0FBSyxHQUFHLDBCQUEwQixRQUFRLG1DQUFtQyxLQUFLLFVBQVUsZ0NBQWdDLEtBQUssR0FBRyw0QkFBNEIsUUFBUSw4QkFBOEIsS0FBSyxVQUFVLDJCQUEyQixLQUFLLEdBQUcsK0JBQStCLFFBQVEsdUNBQXVDLGlCQUFpQixLQUFLLFVBQVUseUNBQXlDLGlCQUFpQixLQUFLLEdBQUcscUJBQXFCLGVBQWUsdUVBQXVFLHdCQUF3QixHQUFHLDZCQUE2Qix3QkFBd0IsR0FBRyw2QkFBNkIseUJBQXlCLEdBQUcscUJBQXFCLHlCQUF5Qiw0QkFBNEIscURBQXFELEdBQUcsNEJBQTRCLDBCQUEwQixHQUFHLDRCQUE0QiwwQkFBMEIsR0FBRyx3QkFBd0IsZUFBZSw0RUFBNEUseUJBQXlCLEdBQUcsd0NBQXdDLHVCQUF1QixnQkFBZ0IsaUJBQWlCLGVBQWUsNkJBQTZCLGdCQUFnQixHQUFHLHNCQUFzQixlQUFlLEdBQUcscUJBQXFCLGVBQWUsaUJBQWlCLEdB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QixHQUFHLHdCQUF3QixlQUFlLDRFQUE0RSx5QkFBeUIsR0FBRyx3Q0FBd0MsdUJBQXVCLGdCQUFnQixpQkFBaUIsZUFBZSw2QkFBNkIsZ0JBQWdCLEdBQUcsc0JBQXNCLGVBQWUsR0FBRyxxQkFBcUIsZUFBZSxpQkFBaUIsR0FBRyw0QkFBNEIsZUFBZSxpQkFBaUIsR0FBRyxtRUFBbUUsU0FBUyx5Q0FBeUMsYUFBYSxTQUFTLHlDQUF5QyxhQUFhLFVBQVUsaURBQWlELFVBQVUscURBQXFELFVBQVUsOENBQThDLFVBQVUsMkNBQTJDLFVBQVUsK0NBQStDLFVBQVUsOENBQThDLGFBQWEsV0FBVyw4Q0FBOEMsYUFBYSxHQUFHLGtDQUFrQyx3REFBd0QsR0FBRyxtQ0FBbUMsNkRBQTZELEdBQUcscUVBQXFFLCtFQUErRSxtQ0FBbUMsNERBQTRELEdBQUcsb0NBQW9DLDhEQUE4RCxHQUFHLG1FQUFtRSw0RUFBNEUsa0NBQWtDLDJEQUEyRCxHQUFHLG1DQUFtQyw2REFBNkQsR0FBRyx5Q0FBeUMsdUJBQXVCLGlCQUFpQixzQ0FBc0MsR0FBRywwQkFBMEIsZUFBZSxHQUFHLGtCQUFrQix1QkFBdUIsZUFBZSxpQkFBaUIsb0NBQW9DLGdCQUFnQixHQUFHLDRCQUE0QixvQkFBb0IsV0FBVyxZQUFZLGdCQUFnQixpQkFBaUIseUJBQXlCLGdCQUFnQixxQkFBcUIsR0FBRyxzQkFBc0IsOEJBQThCLGlEQUFpRCxJQUFJLG1CQUFtQjtBQUN6NVM7QUFDQSwrREFBZSx1QkFBdUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdHlsZXMvc3BlYWtlcl9pbnRyby5jc3M/NjAwNiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGtleWZyYW1lcyBzcGluLXNsb3cge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG5cXG4uYW5pbWF0ZS1zcGluLXNsb3cge1xcbiAgYW5pbWF0aW9uOiBzcGluLXNsb3cgMjBzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuXFxuQGtleWZyYW1lcyBmYWxsSW4ge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMHZoKSByb3RhdGUoMGRlZyk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICA2MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCkgcm90YXRlKDcyMGRlZyk7XFxuICB9XFxuICA4MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpIHJvdGF0ZSg3MjBkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSByb3RhdGUoNzIwZGVnKTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBmb290c3RlcHMge1xcbiAgMCUge1xcbiAgICBjbGlwLXBhdGg6IGluc2V0KDAgMTAwJSAwIDApO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIGNsaXAtcGF0aDogaW5zZXQoMCAwIDAgMCk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgZG90dGVkLWxpbmUge1xcbiAgMCUge1xcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMTAwMDtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBzeW5lcmd5LWFwcGVhciB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCkgcm90YXRlKDBkZWcpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlKDM2MGRlZyk7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblxcbi5mYWxsLWFuaW1hdGlvbiB7XFxuICBvcGFjaXR5OiAwO1xcbiAgYW5pbWF0aW9uOiBmYWxsSW4gMnMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuOTQpIGZvcndhcmRzO1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAycztcXG59XFxuXFxuLmZhbGwtYW5pbWF0aW9uLWRlbGF5LTEge1xcbiAgYW5pbWF0aW9uLWRlbGF5OiA3cztcXG59XFxuXFxuLmZhbGwtYW5pbWF0aW9uLWRlbGF5LTIge1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAxNXM7XFxufVxcblxcbi5mb290c3RlcHMtcGF0aCB7XFxuICBzdHJva2UtZGFzaGFycmF5OiAxMDtcXG4gIHN0cm9rZS1kYXNob2Zmc2V0OiAxMDAwO1xcbiAgYW5pbWF0aW9uOiBkb3R0ZWQtbGluZSAxLjVzIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xcbn1cXG5cXG4uZm9vdHN0ZXBzLWFuaW1hdGlvbi0xIHtcXG4gIGFuaW1hdGlvbi1kZWxheTogMS41cztcXG59XFxuXFxuLmZvb3RzdGVwcy1hbmltYXRpb24tMiB7XFxuICBhbmltYXRpb24tZGVsYXk6IDMuNXM7XFxufVxcblxcbi5zeW5lcmd5LWFuaW1hdGlvbiB7XFxuICBvcGFjaXR5OiAwO1xcbiAgYW5pbWF0aW9uOiBzeW5lcmd5LWFwcGVhciAycyBjdWJpYy1iZXppZXIoMC4zNCwgMS41NiwgMC42NCwgMSkgZm9yd2FyZHM7XFxuICBhbmltYXRpb24tZGVsYXk6IDE1cztcXG59XFxuXFxuLyogRm9vdHN0ZXBzIHN0eWxpbmcgKi9cXG4uZm9vdHN0ZXAge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDI0cHg7XFxuICBoZWlnaHQ6IDM2cHg7XFxuICBvcGFjaXR5OiAxO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xcbiAgei1pbmRleDogNTE7XFxufVxcblxcbi5mb290c3RlcC5hY3RpdmUge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmZvb3RzdGVwLnRyYWlsIHtcXG4gIGZpbGw6ICM2NjY7XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi5naG9zdC10cmFpbCAuZm9vdHN0ZXAge1xcbiAgZmlsbDogIzY2NjtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLyogRmlyc3QgYmxvY2sgcGF0aCBhbmltYXRpb24gKi9cXG5Aa2V5ZnJhbWVzIGZpcnN0LWJsb2NrLXBhdGgge1xcbiAgMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSByb3RhdGUoMGRlZyk7IG9wYWNpdHk6IDA7IH1cXG4gIDUlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgcm90YXRlKDBkZWcpOyBvcGFjaXR5OiAxOyB9XFxuICAyMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwcHgsIDApIHJvdGF0ZSgtOTBkZWcpOyB9XFxuICAzNSUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwcHgsIDEwMHB4KSByb3RhdGUoLTkwZGVnKTsgfVxcbiAgNTAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMTAwcHgpIHJvdGF0ZSgwZGVnKTsgfVxcbiAgNjUlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgcm90YXRlKDkwZGVnKTsgfVxcbiAgODAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTAwcHgsIDApIHJvdGF0ZSg5MGRlZyk7IH1cXG4gIDk1JSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwMHB4LCAwKSByb3RhdGUoOTBkZWcpOyBvcGFjaXR5OiAxOyB9XFxuICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTAwcHgsIDApIHJvdGF0ZSg5MGRlZyk7IG9wYWNpdHk6IDA7IH1cXG59XFxuXFxuLmZpcnN0LWJsb2NrLXBhdGggLmxlZnQtc3RlcCB7XFxuICBhbmltYXRpb246IGZpcnN0LWJsb2NrLXBhdGggNHMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XFxufVxcblxcbi5maXJzdC1ibG9jay1wYXRoIC5yaWdodC1zdGVwIHtcXG4gIGFuaW1hdGlvbjogZmlyc3QtYmxvY2stcGF0aCA0cyBlYXNlLWluLW91dCAwLjVzIGZvcndhcmRzO1xcbn1cXG5cXG4vKiBTZWNvbmQgYmxvY2sgcGF0aCBhbmltYXRpb24gKi9cXG5Aa2V5ZnJhbWVzIHNlY29uZC1ibG9jay1wYXRoIHtcXG4gIC8qIFNpbWlsYXIgdG8gZmlyc3QtYmxvY2stcGF0aCBidXQgYWRqdXN0ZWQgZm9yIHNlY29uZCBibG9jayBwb3NpdGlvbiAqL1xcbn1cXG5cXG4uc2Vjb25kLWJsb2NrLXBhdGggLmxlZnQtc3RlcCB7XFxuICBhbmltYXRpb246IHNlY29uZC1ibG9jay1wYXRoIDRzIGVhc2UtaW4tb3V0IDRzIGZvcndhcmRzO1xcbn1cXG5cXG4uc2Vjb25kLWJsb2NrLXBhdGggLnJpZ2h0LXN0ZXAge1xcbiAgYW5pbWF0aW9uOiBzZWNvbmQtYmxvY2stcGF0aCA0cyBlYXNlLWluLW91dCA0LjVzIGZvcndhcmRzO1xcbn1cXG5cXG4vKiBUaGlyZCBibG9jayBwYXRoIGFuaW1hdGlvbiAqL1xcbkBrZXlmcmFtZXMgdGhpcmQtYmxvY2stcGF0aCB7XFxuICAvKiBTaW1pbGFyIHRvIHByZXZpb3VzIHBhdGhzIGJ1dCBhZGp1c3RlZCBmb3IgdGhpcmQgYmxvY2sgcG9zaXRpb24gKi9cXG59XFxuXFxuLnRoaXJkLWJsb2NrLXBhdGggLmxlZnQtc3RlcCB7XFxuICBhbmltYXRpb246IHRoaXJkLWJsb2NrLXBhdGggNHMgZWFzZS1pbi1vdXQgOHMgZm9yd2FyZHM7XFxufVxcblxcbi50aGlyZC1ibG9jay1wYXRoIC5yaWdodC1zdGVwIHtcXG4gIGFuaW1hdGlvbjogdGhpcmQtYmxvY2stcGF0aCA0cyBlYXNlLWluLW91dCA4LjVzIGZvcndhcmRzO1xcbn1cXG5cXG4vKiBUcmFpbCBlZmZlY3QgKi9cXG4uZm9vdHN0ZXAtdHJhaWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgb3BhY2l0eTogMC4zO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2Utb3V0O1xcbn1cXG5cXG4uZm9vdHN0ZXAtdHJhaWwuZmFkZSB7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4uZ2hvc3QtdHJhaWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZmlsbDogIzY2NjtcXG4gIG9wYWNpdHk6IDAuNTtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZS1vdXQ7XFxuICB6LWluZGV4OiA1MDtcXG59XFxuXFxuLmdob3N0LXRyYWlsLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIHotaW5kZXg6IDUwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmdob3N0LXRyYWlsIHN2ZyB7XFxuICBmaWxsOiAjZDk3NzA2ICFpbXBvcnRhbnQ7IC8qIGFtYmVyLTYwMCBmb3IgZ2hvc3QgdHJhaWxzICovXFxuICBvcGFjaXR5OiAwLjU7XFxufSBcIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL3NwZWFrZXJfaW50cm8uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0U7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNGOztBQUVBO0VBQ0Usd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0U7SUFDRSwwQ0FBMEM7SUFDMUMsVUFBVTtFQUNaO0VBQ0E7SUFDRSwwQ0FBMEM7RUFDNUM7RUFDQTtJQUNFLDJDQUEyQztFQUM3QztFQUNBO0lBQ0UsdUNBQXVDO0lBQ3ZDLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0U7SUFDRSw0QkFBNEI7RUFDOUI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLG9CQUFvQjtFQUN0QjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxnQ0FBZ0M7SUFDaEMsVUFBVTtFQUNaO0VBQ0E7SUFDRSxrQ0FBa0M7SUFDbEMsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0VBQWtFO0VBQ2xFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQix1QkFBdUI7RUFDdkIsZ0RBQWdEO0FBQ2xEOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLHVFQUF1RTtFQUN2RSxvQkFBb0I7QUFDdEI7O0FBRUEsc0JBQXNCO0FBQ3RCO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osVUFBVTtFQUNWLHdCQUF3QjtFQUN4QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7QUFDZDs7QUFFQSwrQkFBK0I7QUFDL0I7RUFDRSxLQUFLLHVDQUF1QyxFQUFFLFVBQVUsRUFBRTtFQUMxRCxLQUFLLHVDQUF1QyxFQUFFLFVBQVUsRUFBRTtFQUMxRCxNQUFNLDhDQUE4QyxFQUFFO0VBQ3RELE1BQU0sa0RBQWtELEVBQUU7RUFDMUQsTUFBTSwyQ0FBMkMsRUFBRTtFQUNuRCxNQUFNLHdDQUF3QyxFQUFFO0VBQ2hELE1BQU0sNENBQTRDLEVBQUU7RUFDcEQsTUFBTSw0Q0FBNEMsRUFBRSxVQUFVLEVBQUU7RUFDaEUsT0FBTyw0Q0FBNEMsRUFBRSxVQUFVLEVBQUU7QUFDbkU7O0FBRUE7RUFDRSxtREFBbUQ7QUFDckQ7O0FBRUE7RUFDRSx3REFBd0Q7QUFDMUQ7O0FBRUEsZ0NBQWdDO0FBQ2hDO0VBQ0UsdUVBQXVFO0FBQ3pFOztBQUVBO0VBQ0UsdURBQXVEO0FBQ3pEOztBQUVBO0VBQ0UseURBQXlEO0FBQzNEOztBQUVBLCtCQUErQjtBQUMvQjtFQUNFLG9FQUFvRTtBQUN0RTs7QUFFQTtFQUNFLHNEQUFzRDtBQUN4RDs7QUFFQTtFQUNFLHdEQUF3RDtBQUMxRDs7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsWUFBWTtFQUNaLCtCQUErQjtFQUMvQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usd0JBQXdCLEVBQUUsK0JBQStCO0VBQ3pELFlBQVk7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAa2V5ZnJhbWVzIHNwaW4tc2xvdyB7XFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcblxcbi5hbmltYXRlLXNwaW4tc2xvdyB7XFxuICBhbmltYXRpb246IHNwaW4tc2xvdyAyMHMgbGluZWFyIGluZmluaXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhbGxJbiB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwdmgpIHJvdGF0ZSgwZGVnKTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIDYwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KSByb3RhdGUoNzIwZGVnKTtcXG4gIH1cXG4gIDgwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCkgcm90YXRlKDcyMGRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHJvdGF0ZSg3MjBkZWcpO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZvb3RzdGVwcyB7XFxuICAwJSB7XFxuICAgIGNsaXAtcGF0aDogaW5zZXQoMCAxMDAlIDAgMCk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgY2xpcC1wYXRoOiBpbnNldCgwIDAgMCAwKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBkb3R0ZWQtbGluZSB7XFxuICAwJSB7XFxuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAxMDAwO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHN5bmVyZ3ktYXBwZWFyIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKSByb3RhdGUoMGRlZyk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGUoMzYwZGVnKTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXFxuLmZhbGwtYW5pbWF0aW9uIHtcXG4gIG9wYWNpdHk6IDA7XFxuICBhbmltYXRpb246IGZhbGxJbiAycyBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC45NCkgZm9yd2FyZHM7XFxuICBhbmltYXRpb24tZGVsYXk6IDJzO1xcbn1cXG5cXG4uZmFsbC1hbmltYXRpb24tZGVsYXktMSB7XFxuICBhbmltYXRpb24tZGVsYXk6IDdzO1xcbn1cXG5cXG4uZmFsbC1hbmltYXRpb24tZGVsYXktMiB7XFxuICBhbmltYXRpb24tZGVsYXk6IDE1cztcXG59XFxuXFxuLmZvb3RzdGVwcy1wYXRoIHtcXG4gIHN0cm9rZS1kYXNoYXJyYXk6IDEwO1xcbiAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDEwMDA7XFxuICBhbmltYXRpb246IGRvdHRlZC1saW5lIDEuNXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XFxufVxcblxcbi5mb290c3RlcHMtYW5pbWF0aW9uLTEge1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAxLjVzO1xcbn1cXG5cXG4uZm9vdHN0ZXBzLWFuaW1hdGlvbi0yIHtcXG4gIGFuaW1hdGlvbi1kZWxheTogMy41cztcXG59XFxuXFxuLnN5bmVyZ3ktYW5pbWF0aW9uIHtcXG4gIG9wYWNpdHk6IDA7XFxuICBhbmltYXRpb246IHN5bmVyZ3ktYXBwZWFyIDJzIGN1YmljLWJlemllcigwLjM0LCAxLjU2LCAwLjY0LCAxKSBmb3J3YXJkcztcXG4gIGFuaW1hdGlvbi1kZWxheTogMTVzO1xcbn1cXG5cXG4vKiBGb290c3RlcHMgc3R5bGluZyAqL1xcbi5mb290c3RlcCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMjRweDtcXG4gIGhlaWdodDogMzZweDtcXG4gIG9wYWNpdHk6IDE7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XFxuICB6LWluZGV4OiA1MTtcXG59XFxuXFxuLmZvb3RzdGVwLmFjdGl2ZSB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uZm9vdHN0ZXAudHJhaWwge1xcbiAgZmlsbDogIzY2NjtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLmdob3N0LXRyYWlsIC5mb290c3RlcCB7XFxuICBmaWxsOiAjNjY2O1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4vKiBGaXJzdCBibG9jayBwYXRoIGFuaW1hdGlvbiAqL1xcbkBrZXlmcmFtZXMgZmlyc3QtYmxvY2stcGF0aCB7XFxuICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHJvdGF0ZSgwZGVnKTsgb3BhY2l0eTogMDsgfVxcbiAgNSUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSByb3RhdGUoMGRlZyk7IG9wYWNpdHk6IDE7IH1cXG4gIDIwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDBweCwgMCkgcm90YXRlKC05MGRlZyk7IH1cXG4gIDM1JSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDBweCwgMTAwcHgpIHJvdGF0ZSgtOTBkZWcpOyB9XFxuICA1MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAxMDBweCkgcm90YXRlKDBkZWcpOyB9XFxuICA2NSUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSByb3RhdGUoOTBkZWcpOyB9XFxuICA4MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMDBweCwgMCkgcm90YXRlKDkwZGVnKTsgfVxcbiAgOTUlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTAwcHgsIDApIHJvdGF0ZSg5MGRlZyk7IG9wYWNpdHk6IDE7IH1cXG4gIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMDBweCwgMCkgcm90YXRlKDkwZGVnKTsgb3BhY2l0eTogMDsgfVxcbn1cXG5cXG4uZmlyc3QtYmxvY2stcGF0aCAubGVmdC1zdGVwIHtcXG4gIGFuaW1hdGlvbjogZmlyc3QtYmxvY2stcGF0aCA0cyBlYXNlLWluLW91dCBmb3J3YXJkcztcXG59XFxuXFxuLmZpcnN0LWJsb2NrLXBhdGggLnJpZ2h0LXN0ZXAge1xcbiAgYW5pbWF0aW9uOiBmaXJzdC1ibG9jay1wYXRoIDRzIGVhc2UtaW4tb3V0IDAuNXMgZm9yd2FyZHM7XFxufVxcblxcbi8qIFNlY29uZCBibG9jayBwYXRoIGFuaW1hdGlvbiAqL1xcbkBrZXlmcmFtZXMgc2Vjb25kLWJsb2NrLXBhdGgge1xcbiAgLyogU2ltaWxhciB0byBmaXJzdC1ibG9jay1wYXRoIGJ1dCBhZGp1c3RlZCBmb3Igc2Vjb25kIGJsb2NrIHBvc2l0aW9uICovXFxufVxcblxcbi5zZWNvbmQtYmxvY2stcGF0aCAubGVmdC1zdGVwIHtcXG4gIGFuaW1hdGlvbjogc2Vjb25kLWJsb2NrLXBhdGggNHMgZWFzZS1pbi1vdXQgNHMgZm9yd2FyZHM7XFxufVxcblxcbi5zZWNvbmQtYmxvY2stcGF0aCAucmlnaHQtc3RlcCB7XFxuICBhbmltYXRpb246IHNlY29uZC1ibG9jay1wYXRoIDRzIGVhc2UtaW4tb3V0IDQuNXMgZm9yd2FyZHM7XFxufVxcblxcbi8qIFRoaXJkIGJsb2NrIHBhdGggYW5pbWF0aW9uICovXFxuQGtleWZyYW1lcyB0aGlyZC1ibG9jay1wYXRoIHtcXG4gIC8qIFNpbWlsYXIgdG8gcHJldmlvdXMgcGF0aHMgYnV0IGFkanVzdGVkIGZvciB0aGlyZCBibG9jayBwb3NpdGlvbiAqL1xcbn1cXG5cXG4udGhpcmQtYmxvY2stcGF0aCAubGVmdC1zdGVwIHtcXG4gIGFuaW1hdGlvbjogdGhpcmQtYmxvY2stcGF0aCA0cyBlYXNlLWluLW91dCA4cyBmb3J3YXJkcztcXG59XFxuXFxuLnRoaXJkLWJsb2NrLXBhdGggLnJpZ2h0LXN0ZXAge1xcbiAgYW5pbWF0aW9uOiB0aGlyZC1ibG9jay1wYXRoIDRzIGVhc2UtaW4tb3V0IDguNXMgZm9yd2FyZHM7XFxufVxcblxcbi8qIFRyYWlsIGVmZmVjdCAqL1xcbi5mb290c3RlcC10cmFpbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBvcGFjaXR5OiAwLjM7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZS1vdXQ7XFxufVxcblxcbi5mb290c3RlcC10cmFpbC5mYWRlIHtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbi5naG9zdC10cmFpbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBmaWxsOiAjNjY2O1xcbiAgb3BhY2l0eTogMC41O1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlLW91dDtcXG4gIHotaW5kZXg6IDUwO1xcbn1cXG5cXG4uZ2hvc3QtdHJhaWwtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgei1pbmRleDogNTA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uZ2hvc3QtdHJhaWwgc3ZnIHtcXG4gIGZpbGw6ICNkOTc3MDYgIWltcG9ydGFudDsgLyogYW1iZXItNjAwIGZvciBnaG9zdCB0cmFpbHMgKi9cXG4gIG9wYWNpdHk6IDAuNTtcXG59IFwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[7].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[7].oneOf[14].use[2]!./styles/speaker_intro.css\n"));

/***/ })

});