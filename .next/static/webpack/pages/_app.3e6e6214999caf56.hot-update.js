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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@keyframes spin-slow {\\n  from {\\n    transform: rotate(0deg);\\n  }\\n  to {\\n    transform: rotate(360deg);\\n  }\\n}\\n\\n.animate-spin-slow {\\n  animation: spin-slow 20s linear infinite;\\n}\\n\\n@keyframes fallIn {\\n  0% {\\n    transform: translateY(-100vh) rotate(0deg);\\n    opacity: 0;\\n  }\\n  60% {\\n    transform: translateY(20px) rotate(720deg);\\n  }\\n  80% {\\n    transform: translateY(-10px) rotate(720deg);\\n  }\\n  100% {\\n    transform: translateY(0) rotate(720deg);\\n    opacity: 1;\\n  }\\n}\\n\\n@keyframes footsteps {\\n  0% {\\n    clip-path: inset(0 100% 0 0);\\n  }\\n  100% {\\n    clip-path: inset(0 0 0 0);\\n  }\\n}\\n\\n@keyframes dotted-line {\\n  0% {\\n    stroke-dashoffset: 1000;\\n  }\\n  100% {\\n    stroke-dashoffset: 0;\\n  }\\n}\\n\\n@keyframes synergy-appear {\\n  0% {\\n    transform: scale(0) rotate(0deg);\\n    opacity: 0;\\n  }\\n  100% {\\n    transform: scale(1) rotate(360deg);\\n    opacity: 1;\\n  }\\n}\\n\\n.fall-animation {\\n  opacity: 0;\\n  animation: fallIn 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;\\n}\\n\\n.fall-animation-delay-1 {\\n  animation-delay: 2s;\\n}\\n\\n.fall-animation-delay-2 {\\n  animation-delay: 4s;\\n}\\n\\n.footsteps-path {\\n  stroke-dasharray: 10;\\n  stroke-dashoffset: 1000;\\n  animation: dotted-line 1.5s ease-in-out forwards;\\n}\\n\\n.footsteps-animation-1 {\\n  animation-delay: 1.5s;\\n}\\n\\n.footsteps-animation-2 {\\n  animation-delay: 3.5s;\\n}\\n\\n.synergy-animation {\\n  opacity: 0;\\n  animation: synergy-appear 2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;\\n  animation-delay: 6s;\\n}\\n\\n/* Footsteps styling */\\n.footstep {\\n  position: absolute;\\n  width: 24px;\\n  height: 36px;\\n  fill: #ff69b4;\\n  opacity: 1;\\n  transform-origin: center;\\n  z-index: 51;\\n}\\n\\n.footstep.active {\\n  opacity: 1;\\n}\\n\\n.footstep.trail {\\n  fill: #666;\\n  opacity: 0.5;\\n}\\n\\n.ghost-trail .footstep {\\n  fill: #666;\\n  opacity: 0.5;\\n}\\n\\n/* First block path animation */\\n@keyframes first-block-path {\\n  0% { transform: translate(0, 0) rotate(0deg); opacity: 0; }\\n  5% { transform: translate(0, 0) rotate(0deg); opacity: 1; }\\n  20% { transform: translate(-100px, 0) rotate(-90deg); }\\n  35% { transform: translate(-100px, 100px) rotate(-90deg); }\\n  50% { transform: translate(0, 100px) rotate(0deg); }\\n  65% { transform: translate(0, 0) rotate(90deg); }\\n  80% { transform: translate(100px, 0) rotate(90deg); }\\n  95% { transform: translate(100px, 0) rotate(90deg); opacity: 1; }\\n  100% { transform: translate(100px, 0) rotate(90deg); opacity: 0; }\\n}\\n\\n.first-block-path .left-step {\\n  animation: first-block-path 4s ease-in-out forwards;\\n}\\n\\n.first-block-path .right-step {\\n  animation: first-block-path 4s ease-in-out 0.5s forwards;\\n}\\n\\n/* Second block path animation */\\n@keyframes second-block-path {\\n  /* Similar to first-block-path but adjusted for second block position */\\n}\\n\\n.second-block-path .left-step {\\n  animation: second-block-path 4s ease-in-out 4s forwards;\\n}\\n\\n.second-block-path .right-step {\\n  animation: second-block-path 4s ease-in-out 4.5s forwards;\\n}\\n\\n/* Third block path animation */\\n@keyframes third-block-path {\\n  /* Similar to previous paths but adjusted for third block position */\\n}\\n\\n.third-block-path .left-step {\\n  animation: third-block-path 4s ease-in-out 8s forwards;\\n}\\n\\n.third-block-path .right-step {\\n  animation: third-block-path 4s ease-in-out 8.5s forwards;\\n}\\n\\n/* Trail effect */\\n.footstep-trail {\\n  position: absolute;\\n  opacity: 0.3;\\n  transition: opacity 0.5s ease-out;\\n}\\n\\n.footstep-trail.fade {\\n  opacity: 0;\\n}\\n\\n.ghost-trail {\\n  position: absolute;\\n  fill: #666;\\n  opacity: 0.5;\\n  transition: opacity 1s ease-out;\\n  z-index: 50;\\n}\\n\\n.ghost-trail-container {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  pointer-events: none;\\n  z-index: 50;\\n  overflow: hidden;\\n}\\n\\n.footstep {\\n  transform-origin: center;\\n}\\n\\n.ghost-trail-container .footstep {\\n  transition: opacity 0.5s ease-out;\\n} \", \"\",{\"version\":3,\"sources\":[\"webpack://styles/speaker_intro.css\"],\"names\":[],\"mappings\":\"AAAA;EACE;IACE,uBAAuB;EACzB;EACA;IACE,yBAAyB;EAC3B;AACF;;AAEA;EACE,wCAAwC;AAC1C;;AAEA;EACE;IACE,0CAA0C;IAC1C,UAAU;EACZ;EACA;IACE,0CAA0C;EAC5C;EACA;IACE,2CAA2C;EAC7C;EACA;IACE,uCAAuC;IACvC,UAAU;EACZ;AACF;;AAEA;EACE;IACE,4BAA4B;EAC9B;EACA;IACE,yBAAyB;EAC3B;AACF;;AAEA;EACE;IACE,uBAAuB;EACzB;EACA;IACE,oBAAoB;EACtB;AACF;;AAEA;EACE;IACE,gCAAgC;IAChC,UAAU;EACZ;EACA;IACE,kCAAkC;IAClC,UAAU;EACZ;AACF;;AAEA;EACE,UAAU;EACV,kEAAkE;AACpE;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,oBAAoB;EACpB,uBAAuB;EACvB,gDAAgD;AAClD;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,UAAU;EACV,uEAAuE;EACvE,mBAAmB;AACrB;;AAEA,sBAAsB;AACtB;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,aAAa;EACb,UAAU;EACV,wBAAwB;EACxB,WAAW;AACb;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,UAAU;EACV,YAAY;AACd;;AAEA;EACE,UAAU;EACV,YAAY;AACd;;AAEA,+BAA+B;AAC/B;EACE,KAAK,uCAAuC,EAAE,UAAU,EAAE;EAC1D,KAAK,uCAAuC,EAAE,UAAU,EAAE;EAC1D,MAAM,8CAA8C,EAAE;EACtD,MAAM,kDAAkD,EAAE;EAC1D,MAAM,2CAA2C,EAAE;EACnD,MAAM,wCAAwC,EAAE;EAChD,MAAM,4CAA4C,EAAE;EACpD,MAAM,4CAA4C,EAAE,UAAU,EAAE;EAChE,OAAO,4CAA4C,EAAE,UAAU,EAAE;AACnE;;AAEA;EACE,mDAAmD;AACrD;;AAEA;EACE,wDAAwD;AAC1D;;AAEA,gCAAgC;AAChC;EACE,uEAAuE;AACzE;;AAEA;EACE,uDAAuD;AACzD;;AAEA;EACE,yDAAyD;AAC3D;;AAEA,+BAA+B;AAC/B;EACE,oEAAoE;AACtE;;AAEA;EACE,sDAAsD;AACxD;;AAEA;EACE,wDAAwD;AAC1D;;AAEA,iBAAiB;AACjB;EACE,kBAAkB;EAClB,YAAY;EACZ,iCAAiC;AACnC;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,YAAY;EACZ,+BAA+B;EAC/B,WAAW;AACb;;AAEA;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,oBAAoB;EACpB,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,iCAAiC;AACnC\",\"sourcesContent\":[\"@keyframes spin-slow {\\n  from {\\n    transform: rotate(0deg);\\n  }\\n  to {\\n    transform: rotate(360deg);\\n  }\\n}\\n\\n.animate-spin-slow {\\n  animation: spin-slow 20s linear infinite;\\n}\\n\\n@keyframes fallIn {\\n  0% {\\n    transform: translateY(-100vh) rotate(0deg);\\n    opacity: 0;\\n  }\\n  60% {\\n    transform: translateY(20px) rotate(720deg);\\n  }\\n  80% {\\n    transform: translateY(-10px) rotate(720deg);\\n  }\\n  100% {\\n    transform: translateY(0) rotate(720deg);\\n    opacity: 1;\\n  }\\n}\\n\\n@keyframes footsteps {\\n  0% {\\n    clip-path: inset(0 100% 0 0);\\n  }\\n  100% {\\n    clip-path: inset(0 0 0 0);\\n  }\\n}\\n\\n@keyframes dotted-line {\\n  0% {\\n    stroke-dashoffset: 1000;\\n  }\\n  100% {\\n    stroke-dashoffset: 0;\\n  }\\n}\\n\\n@keyframes synergy-appear {\\n  0% {\\n    transform: scale(0) rotate(0deg);\\n    opacity: 0;\\n  }\\n  100% {\\n    transform: scale(1) rotate(360deg);\\n    opacity: 1;\\n  }\\n}\\n\\n.fall-animation {\\n  opacity: 0;\\n  animation: fallIn 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;\\n}\\n\\n.fall-animation-delay-1 {\\n  animation-delay: 2s;\\n}\\n\\n.fall-animation-delay-2 {\\n  animation-delay: 4s;\\n}\\n\\n.footsteps-path {\\n  stroke-dasharray: 10;\\n  stroke-dashoffset: 1000;\\n  animation: dotted-line 1.5s ease-in-out forwards;\\n}\\n\\n.footsteps-animation-1 {\\n  animation-delay: 1.5s;\\n}\\n\\n.footsteps-animation-2 {\\n  animation-delay: 3.5s;\\n}\\n\\n.synergy-animation {\\n  opacity: 0;\\n  animation: synergy-appear 2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;\\n  animation-delay: 6s;\\n}\\n\\n/* Footsteps styling */\\n.footstep {\\n  position: absolute;\\n  width: 24px;\\n  height: 36px;\\n  fill: #ff69b4;\\n  opacity: 1;\\n  transform-origin: center;\\n  z-index: 51;\\n}\\n\\n.footstep.active {\\n  opacity: 1;\\n}\\n\\n.footstep.trail {\\n  fill: #666;\\n  opacity: 0.5;\\n}\\n\\n.ghost-trail .footstep {\\n  fill: #666;\\n  opacity: 0.5;\\n}\\n\\n/* First block path animation */\\n@keyframes first-block-path {\\n  0% { transform: translate(0, 0) rotate(0deg); opacity: 0; }\\n  5% { transform: translate(0, 0) rotate(0deg); opacity: 1; }\\n  20% { transform: translate(-100px, 0) rotate(-90deg); }\\n  35% { transform: translate(-100px, 100px) rotate(-90deg); }\\n  50% { transform: translate(0, 100px) rotate(0deg); }\\n  65% { transform: translate(0, 0) rotate(90deg); }\\n  80% { transform: translate(100px, 0) rotate(90deg); }\\n  95% { transform: translate(100px, 0) rotate(90deg); opacity: 1; }\\n  100% { transform: translate(100px, 0) rotate(90deg); opacity: 0; }\\n}\\n\\n.first-block-path .left-step {\\n  animation: first-block-path 4s ease-in-out forwards;\\n}\\n\\n.first-block-path .right-step {\\n  animation: first-block-path 4s ease-in-out 0.5s forwards;\\n}\\n\\n/* Second block path animation */\\n@keyframes second-block-path {\\n  /* Similar to first-block-path but adjusted for second block position */\\n}\\n\\n.second-block-path .left-step {\\n  animation: second-block-path 4s ease-in-out 4s forwards;\\n}\\n\\n.second-block-path .right-step {\\n  animation: second-block-path 4s ease-in-out 4.5s forwards;\\n}\\n\\n/* Third block path animation */\\n@keyframes third-block-path {\\n  /* Similar to previous paths but adjusted for third block position */\\n}\\n\\n.third-block-path .left-step {\\n  animation: third-block-path 4s ease-in-out 8s forwards;\\n}\\n\\n.third-block-path .right-step {\\n  animation: third-block-path 4s ease-in-out 8.5s forwards;\\n}\\n\\n/* Trail effect */\\n.footstep-trail {\\n  position: absolute;\\n  opacity: 0.3;\\n  transition: opacity 0.5s ease-out;\\n}\\n\\n.footstep-trail.fade {\\n  opacity: 0;\\n}\\n\\n.ghost-trail {\\n  position: absolute;\\n  fill: #666;\\n  opacity: 0.5;\\n  transition: opacity 1s ease-out;\\n  z-index: 50;\\n}\\n\\n.ghost-trail-container {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  pointer-events: none;\\n  z-index: 50;\\n  overflow: hidden;\\n}\\n\\n.footstep {\\n  transform-origin: center;\\n}\\n\\n.ghost-trail-container .footstep {\\n  transition: opacity 0.5s ease-out;\\n} \"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s3XS5vbmVPZlsxNF0udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzddLm9uZU9mWzE0XS51c2VbMl0hLi9zdHlsZXMvc3BlYWtlcl9pbnRyby5jc3MiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDd0g7QUFDeEgsOEJBQThCLGtIQUEyQjtBQUN6RDtBQUNBLGdFQUFnRSxVQUFVLDhCQUE4QixLQUFLLFFBQVEsZ0NBQWdDLEtBQUssR0FBRyx3QkFBd0IsNkNBQTZDLEdBQUcsdUJBQXVCLFFBQVEsaURBQWlELGlCQUFpQixLQUFLLFNBQVMsaURBQWlELEtBQUssU0FBUyxrREFBa0QsS0FBSyxVQUFVLDhDQUE4QyxpQkFBaUIsS0FBSyxHQUFHLDBCQUEwQixRQUFRLG1DQUFtQyxLQUFLLFVBQVUsZ0NBQWdDLEtBQUssR0FBRyw0QkFBNEIsUUFBUSw4QkFBOEIsS0FBSyxVQUFVLDJCQUEyQixLQUFLLEdBQUcsK0JBQStCLFFBQVEsdUNBQXVDLGlCQUFpQixLQUFLLFVBQVUseUNBQXlDLGlCQUFpQixLQUFLLEdBQUcscUJBQXFCLGVBQWUsdUVBQXVFLEdBQUcsNkJBQTZCLHdCQUF3QixHQUFHLDZCQUE2Qix3QkFBd0IsR0FBRyxxQkFBcUIseUJBQXlCLDRCQUE0QixxREFBcUQsR0FBRyw0QkFBNEIsMEJBQTBCLEdBQUcsNEJBQTRCLDBCQUEwQixHQUFHLHdCQUF3QixlQUFlLDRFQUE0RSx3QkFBd0IsR0FBRyx3Q0FBd0MsdUJBQXVCLGdCQUFnQixpQkFBaUIsa0JBQWtCLGVBQWUsNkJBQTZCLGdCQUFnQixHQUFHLHNCQUFzQixlQUFlLEdBQUcscUJBQXFCLGVBQWUsaUJBQWlCLEdB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QkFBNEIsMEJBQTBCLEdBQUcsd0JBQXdCLGVBQWUsNEVBQTRFLHdCQUF3QixHQUFHLHdDQUF3Qyx1QkFBdUIsZ0JBQWdCLGlCQUFpQixrQkFBa0IsZUFBZSw2QkFBNkIsZ0JBQWdCLEdBQUcsc0JBQXNCLGVBQWUsR0FBRyxxQkFBcUIsZUFBZSxpQkFBaUIsR0FBRyw0QkFBNEIsZUFBZSxpQkFBaUIsR0FBRyxtRUFBbUUsU0FBUyx5Q0FBeUMsYUFBYSxTQUFTLHlDQUF5QyxhQUFhLFVBQVUsaURBQWlELFVBQVUscURBQXFELFVBQVUsOENBQThDLFVBQVUsMkNBQTJDLFVBQVUsK0NBQStDLFVBQVUsOENBQThDLGFBQWEsV0FBVyw4Q0FBOEMsYUFBYSxHQUFHLGtDQUFrQyx3REFBd0QsR0FBRyxtQ0FBbUMsNkRBQTZELEdBQUcscUVBQXFFLCtFQUErRSxtQ0FBbUMsNERBQTRELEdBQUcsb0NBQW9DLDhEQUE4RCxHQUFHLG1FQUFtRSw0RUFBNEUsa0NBQWtDLDJEQUEyRCxHQUFHLG1DQUFtQyw2REFBNkQsR0FBRyx5Q0FBeUMsdUJBQXVCLGlCQUFpQixzQ0FBc0MsR0FBRywwQkFBMEIsZUFBZSxHQUFHLGtCQUFrQix1QkFBdUIsZUFBZSxpQkFBaUIsb0NBQW9DLGdCQUFnQixHQUFHLDRCQUE0QixvQkFBb0IsV0FBVyxZQUFZLGdCQUFnQixpQkFBaUIseUJBQXlCLGdCQUFnQixxQkFBcUIsR0FBRyxlQUFlLDZCQUE2QixHQUFHLHNDQUFzQyxzQ0FBc0MsSUFBSSxtQkFBbUI7QUFDcDdTO0FBQ0EsK0RBQWUsdUJBQXVCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL3NwZWFrZXJfaW50cm8uY3NzPzYwMDYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBrZXlmcmFtZXMgc3Bpbi1zbG93IHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuXFxuLmFuaW1hdGUtc3Bpbi1zbG93IHtcXG4gIGFuaW1hdGlvbjogc3Bpbi1zbG93IDIwcyBsaW5lYXIgaW5maW5pdGU7XFxufVxcblxcbkBrZXlmcmFtZXMgZmFsbEluIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDB2aCkgcm90YXRlKDBkZWcpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgNjAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpIHJvdGF0ZSg3MjBkZWcpO1xcbiAgfVxcbiAgODAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KSByb3RhdGUoNzIwZGVnKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlKDcyMGRlZyk7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgZm9vdHN0ZXBzIHtcXG4gIDAlIHtcXG4gICAgY2xpcC1wYXRoOiBpbnNldCgwIDEwMCUgMCAwKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBjbGlwLXBhdGg6IGluc2V0KDAgMCAwIDApO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGRvdHRlZC1saW5lIHtcXG4gIDAlIHtcXG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDEwMDA7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgc3luZXJneS1hcHBlYXIge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApIHJvdGF0ZSgwZGVnKTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZSgzNjBkZWcpO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG4uZmFsbC1hbmltYXRpb24ge1xcbiAgb3BhY2l0eTogMDtcXG4gIGFuaW1hdGlvbjogZmFsbEluIDJzIGN1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjk0KSBmb3J3YXJkcztcXG59XFxuXFxuLmZhbGwtYW5pbWF0aW9uLWRlbGF5LTEge1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAycztcXG59XFxuXFxuLmZhbGwtYW5pbWF0aW9uLWRlbGF5LTIge1xcbiAgYW5pbWF0aW9uLWRlbGF5OiA0cztcXG59XFxuXFxuLmZvb3RzdGVwcy1wYXRoIHtcXG4gIHN0cm9rZS1kYXNoYXJyYXk6IDEwO1xcbiAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDEwMDA7XFxuICBhbmltYXRpb246IGRvdHRlZC1saW5lIDEuNXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XFxufVxcblxcbi5mb290c3RlcHMtYW5pbWF0aW9uLTEge1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAxLjVzO1xcbn1cXG5cXG4uZm9vdHN0ZXBzLWFuaW1hdGlvbi0yIHtcXG4gIGFuaW1hdGlvbi1kZWxheTogMy41cztcXG59XFxuXFxuLnN5bmVyZ3ktYW5pbWF0aW9uIHtcXG4gIG9wYWNpdHk6IDA7XFxuICBhbmltYXRpb246IHN5bmVyZ3ktYXBwZWFyIDJzIGN1YmljLWJlemllcigwLjM0LCAxLjU2LCAwLjY0LCAxKSBmb3J3YXJkcztcXG4gIGFuaW1hdGlvbi1kZWxheTogNnM7XFxufVxcblxcbi8qIEZvb3RzdGVwcyBzdHlsaW5nICovXFxuLmZvb3RzdGVwIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAyNHB4O1xcbiAgaGVpZ2h0OiAzNnB4O1xcbiAgZmlsbDogI2ZmNjliNDtcXG4gIG9wYWNpdHk6IDE7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XFxuICB6LWluZGV4OiA1MTtcXG59XFxuXFxuLmZvb3RzdGVwLmFjdGl2ZSB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uZm9vdHN0ZXAudHJhaWwge1xcbiAgZmlsbDogIzY2NjtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLmdob3N0LXRyYWlsIC5mb290c3RlcCB7XFxuICBmaWxsOiAjNjY2O1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4vKiBGaXJzdCBibG9jayBwYXRoIGFuaW1hdGlvbiAqL1xcbkBrZXlmcmFtZXMgZmlyc3QtYmxvY2stcGF0aCB7XFxuICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHJvdGF0ZSgwZGVnKTsgb3BhY2l0eTogMDsgfVxcbiAgNSUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSByb3RhdGUoMGRlZyk7IG9wYWNpdHk6IDE7IH1cXG4gIDIwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDBweCwgMCkgcm90YXRlKC05MGRlZyk7IH1cXG4gIDM1JSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDBweCwgMTAwcHgpIHJvdGF0ZSgtOTBkZWcpOyB9XFxuICA1MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAxMDBweCkgcm90YXRlKDBkZWcpOyB9XFxuICA2NSUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSByb3RhdGUoOTBkZWcpOyB9XFxuICA4MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMDBweCwgMCkgcm90YXRlKDkwZGVnKTsgfVxcbiAgOTUlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTAwcHgsIDApIHJvdGF0ZSg5MGRlZyk7IG9wYWNpdHk6IDE7IH1cXG4gIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMDBweCwgMCkgcm90YXRlKDkwZGVnKTsgb3BhY2l0eTogMDsgfVxcbn1cXG5cXG4uZmlyc3QtYmxvY2stcGF0aCAubGVmdC1zdGVwIHtcXG4gIGFuaW1hdGlvbjogZmlyc3QtYmxvY2stcGF0aCA0cyBlYXNlLWluLW91dCBmb3J3YXJkcztcXG59XFxuXFxuLmZpcnN0LWJsb2NrLXBhdGggLnJpZ2h0LXN0ZXAge1xcbiAgYW5pbWF0aW9uOiBmaXJzdC1ibG9jay1wYXRoIDRzIGVhc2UtaW4tb3V0IDAuNXMgZm9yd2FyZHM7XFxufVxcblxcbi8qIFNlY29uZCBibG9jayBwYXRoIGFuaW1hdGlvbiAqL1xcbkBrZXlmcmFtZXMgc2Vjb25kLWJsb2NrLXBhdGgge1xcbiAgLyogU2ltaWxhciB0byBmaXJzdC1ibG9jay1wYXRoIGJ1dCBhZGp1c3RlZCBmb3Igc2Vjb25kIGJsb2NrIHBvc2l0aW9uICovXFxufVxcblxcbi5zZWNvbmQtYmxvY2stcGF0aCAubGVmdC1zdGVwIHtcXG4gIGFuaW1hdGlvbjogc2Vjb25kLWJsb2NrLXBhdGggNHMgZWFzZS1pbi1vdXQgNHMgZm9yd2FyZHM7XFxufVxcblxcbi5zZWNvbmQtYmxvY2stcGF0aCAucmlnaHQtc3RlcCB7XFxuICBhbmltYXRpb246IHNlY29uZC1ibG9jay1wYXRoIDRzIGVhc2UtaW4tb3V0IDQuNXMgZm9yd2FyZHM7XFxufVxcblxcbi8qIFRoaXJkIGJsb2NrIHBhdGggYW5pbWF0aW9uICovXFxuQGtleWZyYW1lcyB0aGlyZC1ibG9jay1wYXRoIHtcXG4gIC8qIFNpbWlsYXIgdG8gcHJldmlvdXMgcGF0aHMgYnV0IGFkanVzdGVkIGZvciB0aGlyZCBibG9jayBwb3NpdGlvbiAqL1xcbn1cXG5cXG4udGhpcmQtYmxvY2stcGF0aCAubGVmdC1zdGVwIHtcXG4gIGFuaW1hdGlvbjogdGhpcmQtYmxvY2stcGF0aCA0cyBlYXNlLWluLW91dCA4cyBmb3J3YXJkcztcXG59XFxuXFxuLnRoaXJkLWJsb2NrLXBhdGggLnJpZ2h0LXN0ZXAge1xcbiAgYW5pbWF0aW9uOiB0aGlyZC1ibG9jay1wYXRoIDRzIGVhc2UtaW4tb3V0IDguNXMgZm9yd2FyZHM7XFxufVxcblxcbi8qIFRyYWlsIGVmZmVjdCAqL1xcbi5mb290c3RlcC10cmFpbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBvcGFjaXR5OiAwLjM7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZS1vdXQ7XFxufVxcblxcbi5mb290c3RlcC10cmFpbC5mYWRlIHtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbi5naG9zdC10cmFpbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBmaWxsOiAjNjY2O1xcbiAgb3BhY2l0eTogMC41O1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlLW91dDtcXG4gIHotaW5kZXg6IDUwO1xcbn1cXG5cXG4uZ2hvc3QtdHJhaWwtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgei1pbmRleDogNTA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uZm9vdHN0ZXAge1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xcbn1cXG5cXG4uZ2hvc3QtdHJhaWwtY29udGFpbmVyIC5mb290c3RlcCB7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZS1vdXQ7XFxufSBcIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL3NwZWFrZXJfaW50cm8uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0U7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNGOztBQUVBO0VBQ0Usd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0U7SUFDRSwwQ0FBMEM7SUFDMUMsVUFBVTtFQUNaO0VBQ0E7SUFDRSwwQ0FBMEM7RUFDNUM7RUFDQTtJQUNFLDJDQUEyQztFQUM3QztFQUNBO0lBQ0UsdUNBQXVDO0lBQ3ZDLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0U7SUFDRSw0QkFBNEI7RUFDOUI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLG9CQUFvQjtFQUN0QjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxnQ0FBZ0M7SUFDaEMsVUFBVTtFQUNaO0VBQ0E7SUFDRSxrQ0FBa0M7SUFDbEMsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0VBQWtFO0FBQ3BFOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLHVCQUF1QjtFQUN2QixnREFBZ0Q7QUFDbEQ7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsdUVBQXVFO0VBQ3ZFLG1CQUFtQjtBQUNyQjs7QUFFQSxzQkFBc0I7QUFDdEI7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsVUFBVTtFQUNWLHdCQUF3QjtFQUN4QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7QUFDZDs7QUFFQSwrQkFBK0I7QUFDL0I7RUFDRSxLQUFLLHVDQUF1QyxFQUFFLFVBQVUsRUFBRTtFQUMxRCxLQUFLLHVDQUF1QyxFQUFFLFVBQVUsRUFBRTtFQUMxRCxNQUFNLDhDQUE4QyxFQUFFO0VBQ3RELE1BQU0sa0RBQWtELEVBQUU7RUFDMUQsTUFBTSwyQ0FBMkMsRUFBRTtFQUNuRCxNQUFNLHdDQUF3QyxFQUFFO0VBQ2hELE1BQU0sNENBQTRDLEVBQUU7RUFDcEQsTUFBTSw0Q0FBNEMsRUFBRSxVQUFVLEVBQUU7RUFDaEUsT0FBTyw0Q0FBNEMsRUFBRSxVQUFVLEVBQUU7QUFDbkU7O0FBRUE7RUFDRSxtREFBbUQ7QUFDckQ7O0FBRUE7RUFDRSx3REFBd0Q7QUFDMUQ7O0FBRUEsZ0NBQWdDO0FBQ2hDO0VBQ0UsdUVBQXVFO0FBQ3pFOztBQUVBO0VBQ0UsdURBQXVEO0FBQ3pEOztBQUVBO0VBQ0UseURBQXlEO0FBQzNEOztBQUVBLCtCQUErQjtBQUMvQjtFQUNFLG9FQUFvRTtBQUN0RTs7QUFFQTtFQUNFLHNEQUFzRDtBQUN4RDs7QUFFQTtFQUNFLHdEQUF3RDtBQUMxRDs7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsWUFBWTtFQUNaLCtCQUErQjtFQUMvQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBrZXlmcmFtZXMgc3Bpbi1zbG93IHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuXFxuLmFuaW1hdGUtc3Bpbi1zbG93IHtcXG4gIGFuaW1hdGlvbjogc3Bpbi1zbG93IDIwcyBsaW5lYXIgaW5maW5pdGU7XFxufVxcblxcbkBrZXlmcmFtZXMgZmFsbEluIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDB2aCkgcm90YXRlKDBkZWcpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgNjAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpIHJvdGF0ZSg3MjBkZWcpO1xcbiAgfVxcbiAgODAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KSByb3RhdGUoNzIwZGVnKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlKDcyMGRlZyk7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgZm9vdHN0ZXBzIHtcXG4gIDAlIHtcXG4gICAgY2xpcC1wYXRoOiBpbnNldCgwIDEwMCUgMCAwKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBjbGlwLXBhdGg6IGluc2V0KDAgMCAwIDApO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGRvdHRlZC1saW5lIHtcXG4gIDAlIHtcXG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDEwMDA7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgc3luZXJneS1hcHBlYXIge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApIHJvdGF0ZSgwZGVnKTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZSgzNjBkZWcpO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG4uZmFsbC1hbmltYXRpb24ge1xcbiAgb3BhY2l0eTogMDtcXG4gIGFuaW1hdGlvbjogZmFsbEluIDJzIGN1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjk0KSBmb3J3YXJkcztcXG59XFxuXFxuLmZhbGwtYW5pbWF0aW9uLWRlbGF5LTEge1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAycztcXG59XFxuXFxuLmZhbGwtYW5pbWF0aW9uLWRlbGF5LTIge1xcbiAgYW5pbWF0aW9uLWRlbGF5OiA0cztcXG59XFxuXFxuLmZvb3RzdGVwcy1wYXRoIHtcXG4gIHN0cm9rZS1kYXNoYXJyYXk6IDEwO1xcbiAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDEwMDA7XFxuICBhbmltYXRpb246IGRvdHRlZC1saW5lIDEuNXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XFxufVxcblxcbi5mb290c3RlcHMtYW5pbWF0aW9uLTEge1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAxLjVzO1xcbn1cXG5cXG4uZm9vdHN0ZXBzLWFuaW1hdGlvbi0yIHtcXG4gIGFuaW1hdGlvbi1kZWxheTogMy41cztcXG59XFxuXFxuLnN5bmVyZ3ktYW5pbWF0aW9uIHtcXG4gIG9wYWNpdHk6IDA7XFxuICBhbmltYXRpb246IHN5bmVyZ3ktYXBwZWFyIDJzIGN1YmljLWJlemllcigwLjM0LCAxLjU2LCAwLjY0LCAxKSBmb3J3YXJkcztcXG4gIGFuaW1hdGlvbi1kZWxheTogNnM7XFxufVxcblxcbi8qIEZvb3RzdGVwcyBzdHlsaW5nICovXFxuLmZvb3RzdGVwIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAyNHB4O1xcbiAgaGVpZ2h0OiAzNnB4O1xcbiAgZmlsbDogI2ZmNjliNDtcXG4gIG9wYWNpdHk6IDE7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XFxuICB6LWluZGV4OiA1MTtcXG59XFxuXFxuLmZvb3RzdGVwLmFjdGl2ZSB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uZm9vdHN0ZXAudHJhaWwge1xcbiAgZmlsbDogIzY2NjtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLmdob3N0LXRyYWlsIC5mb290c3RlcCB7XFxuICBmaWxsOiAjNjY2O1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4vKiBGaXJzdCBibG9jayBwYXRoIGFuaW1hdGlvbiAqL1xcbkBrZXlmcmFtZXMgZmlyc3QtYmxvY2stcGF0aCB7XFxuICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHJvdGF0ZSgwZGVnKTsgb3BhY2l0eTogMDsgfVxcbiAgNSUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSByb3RhdGUoMGRlZyk7IG9wYWNpdHk6IDE7IH1cXG4gIDIwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDBweCwgMCkgcm90YXRlKC05MGRlZyk7IH1cXG4gIDM1JSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDBweCwgMTAwcHgpIHJvdGF0ZSgtOTBkZWcpOyB9XFxuICA1MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAxMDBweCkgcm90YXRlKDBkZWcpOyB9XFxuICA2NSUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSByb3RhdGUoOTBkZWcpOyB9XFxuICA4MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMDBweCwgMCkgcm90YXRlKDkwZGVnKTsgfVxcbiAgOTUlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTAwcHgsIDApIHJvdGF0ZSg5MGRlZyk7IG9wYWNpdHk6IDE7IH1cXG4gIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMDBweCwgMCkgcm90YXRlKDkwZGVnKTsgb3BhY2l0eTogMDsgfVxcbn1cXG5cXG4uZmlyc3QtYmxvY2stcGF0aCAubGVmdC1zdGVwIHtcXG4gIGFuaW1hdGlvbjogZmlyc3QtYmxvY2stcGF0aCA0cyBlYXNlLWluLW91dCBmb3J3YXJkcztcXG59XFxuXFxuLmZpcnN0LWJsb2NrLXBhdGggLnJpZ2h0LXN0ZXAge1xcbiAgYW5pbWF0aW9uOiBmaXJzdC1ibG9jay1wYXRoIDRzIGVhc2UtaW4tb3V0IDAuNXMgZm9yd2FyZHM7XFxufVxcblxcbi8qIFNlY29uZCBibG9jayBwYXRoIGFuaW1hdGlvbiAqL1xcbkBrZXlmcmFtZXMgc2Vjb25kLWJsb2NrLXBhdGgge1xcbiAgLyogU2ltaWxhciB0byBmaXJzdC1ibG9jay1wYXRoIGJ1dCBhZGp1c3RlZCBmb3Igc2Vjb25kIGJsb2NrIHBvc2l0aW9uICovXFxufVxcblxcbi5zZWNvbmQtYmxvY2stcGF0aCAubGVmdC1zdGVwIHtcXG4gIGFuaW1hdGlvbjogc2Vjb25kLWJsb2NrLXBhdGggNHMgZWFzZS1pbi1vdXQgNHMgZm9yd2FyZHM7XFxufVxcblxcbi5zZWNvbmQtYmxvY2stcGF0aCAucmlnaHQtc3RlcCB7XFxuICBhbmltYXRpb246IHNlY29uZC1ibG9jay1wYXRoIDRzIGVhc2UtaW4tb3V0IDQuNXMgZm9yd2FyZHM7XFxufVxcblxcbi8qIFRoaXJkIGJsb2NrIHBhdGggYW5pbWF0aW9uICovXFxuQGtleWZyYW1lcyB0aGlyZC1ibG9jay1wYXRoIHtcXG4gIC8qIFNpbWlsYXIgdG8gcHJldmlvdXMgcGF0aHMgYnV0IGFkanVzdGVkIGZvciB0aGlyZCBibG9jayBwb3NpdGlvbiAqL1xcbn1cXG5cXG4udGhpcmQtYmxvY2stcGF0aCAubGVmdC1zdGVwIHtcXG4gIGFuaW1hdGlvbjogdGhpcmQtYmxvY2stcGF0aCA0cyBlYXNlLWluLW91dCA4cyBmb3J3YXJkcztcXG59XFxuXFxuLnRoaXJkLWJsb2NrLXBhdGggLnJpZ2h0LXN0ZXAge1xcbiAgYW5pbWF0aW9uOiB0aGlyZC1ibG9jay1wYXRoIDRzIGVhc2UtaW4tb3V0IDguNXMgZm9yd2FyZHM7XFxufVxcblxcbi8qIFRyYWlsIGVmZmVjdCAqL1xcbi5mb290c3RlcC10cmFpbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBvcGFjaXR5OiAwLjM7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZS1vdXQ7XFxufVxcblxcbi5mb290c3RlcC10cmFpbC5mYWRlIHtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbi5naG9zdC10cmFpbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBmaWxsOiAjNjY2O1xcbiAgb3BhY2l0eTogMC41O1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlLW91dDtcXG4gIHotaW5kZXg6IDUwO1xcbn1cXG5cXG4uZ2hvc3QtdHJhaWwtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgei1pbmRleDogNTA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uZm9vdHN0ZXAge1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xcbn1cXG5cXG4uZ2hvc3QtdHJhaWwtY29udGFpbmVyIC5mb290c3RlcCB7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZS1vdXQ7XFxufSBcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[7].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[7].oneOf[14].use[2]!./styles/speaker_intro.css\n"));

/***/ })

});