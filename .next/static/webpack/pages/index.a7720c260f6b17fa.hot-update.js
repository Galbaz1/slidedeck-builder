"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/FootstepsAnimation.tsx":
/*!*******************************************!*\
  !*** ./components/FootstepsAnimation.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst RightFootprint = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef((_, ref)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n        ref: ref,\n        width: \"24\",\n        height: \"36\",\n        viewBox: \"0 0 16 32\",\n        fill: \"currentColor\",\n        xmlns: \"http://www.w3.org/2000/svg\",\n        className: \"footstep right-step\",\n        style: {\n            transform: \"rotate(90deg)\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n            d: \"M5.058 20.918l6.21-1.664c-0.204-2.22 0-4.745 1.205-7.11 0.18-6.195-1.867-11.962-6.835-10.631-5.468 1.465-4.865 13.899-0.58 19.404v0zM5.468 23.537c0.343 11.974 12.512 6.497 6.318-1.693l-6.318 1.693z\"\n        }, void 0, false, {\n            fileName: \"/Users/fausto/coding_2024/dell_presentation/components/FootstepsAnimation.tsx\",\n            lineNumber: 19,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/fausto/coding_2024/dell_presentation/components/FootstepsAnimation.tsx\",\n        lineNumber: 9,\n        columnNumber: 3\n    }, undefined));\n_c = RightFootprint;\nconst LeftFootprint = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef((_, ref)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n        ref: ref,\n        width: \"24\",\n        height: \"36\",\n        viewBox: \"20 0 16 32\",\n        fill: \"currentColor\",\n        xmlns: \"http://www.w3.org/2000/svg\",\n        className: \"footstep left-step\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n            d: \"M27.227 20.917l-6.21-1.664c0.204-2.22-0-4.745-1.205-7.11-0.18-6.195 1.867-11.962 6.835-10.631 5.468 1.466 4.865 13.9 0.58 19.404v0zM26.818 23.536c-0.343 11.973-12.512 6.497-6.318-1.693l6.318 1.693z\"\n        }, void 0, false, {\n            fileName: \"/Users/fausto/coding_2024/dell_presentation/components/FootstepsAnimation.tsx\",\n            lineNumber: 33,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/fausto/coding_2024/dell_presentation/components/FootstepsAnimation.tsx\",\n        lineNumber: 24,\n        columnNumber: 3\n    }, undefined));\n_c1 = LeftFootprint;\nconst FootstepsAnimation = ()=>{\n    _s();\n    const leftFootRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const rightFootRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const ghostTrailRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!leftFootRef.current || !rightFootRef.current || !ghostTrailRef.current) return;\n        // River-like flowing path with gentle curves\n        const flowingPath = [\n            // Start at first orange circle\n            {\n                x: 200,\n                y: 250\n            },\n            {\n                x: 250,\n                y: 245\n            },\n            {\n                x: 300,\n                y: 240\n            },\n            {\n                x: 350,\n                y: 245\n            },\n            {\n                x: 400,\n                y: 250\n            },\n            // Middle section (to second circle)\n            {\n                x: 450,\n                y: 245\n            },\n            {\n                x: 500,\n                y: 240\n            },\n            {\n                x: 550,\n                y: 245\n            },\n            {\n                x: 600,\n                y: 250\n            },\n            // Final section (to third circle)\n            {\n                x: 650,\n                y: 245\n            },\n            {\n                x: 700,\n                y: 240\n            },\n            {\n                x: 750,\n                y: 245\n            },\n            {\n                x: 800,\n                y: 250\n            }\n        ];\n        const createGhostTrail = function(element, x, y) {\n            let rotation = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;\n            if (!ghostTrailRef.current) return;\n            const ghost = element.cloneNode(true);\n            ghost.style.position = \"absolute\";\n            ghost.style.left = \"\".concat(x, \"px\");\n            ghost.style.top = \"\".concat(y, \"px\");\n            ghost.style.transform = \"rotate(\".concat(rotation, \"deg)\");\n            ghost.classList.add(\"ghost-trail\");\n            ghostTrailRef.current.appendChild(ghost);\n            // Maintain more visible ghost trail\n            gsap__WEBPACK_IMPORTED_MODULE_2__[\"default\"].to(ghost, {\n                opacity: 0.25,\n                duration: 3,\n                ease: \"none\"\n            });\n        };\n        const animateFootstep = (foot, path, delay, isLeft)=>{\n            path.forEach((point, index)=>{\n                const prevPoint = index > 0 ? path[index - 1] : point;\n                const nextPoint = index < path.length - 1 ? path[index + 1] : point;\n                // Calculate rotation based on current direction of movement\n                const rotation = Math.atan2(nextPoint.y - prevPoint.y, nextPoint.x - prevPoint.x) * 180 / Math.PI;\n                gsap__WEBPACK_IMPORTED_MODULE_2__[\"default\"].to(foot, {\n                    x: point.x + (isLeft ? -12 : 12),\n                    y: point.y + (index % 2 ? 5 : -5),\n                    rotation: rotation + (isLeft ? -15 : 15),\n                    duration: 0.6,\n                    delay: delay + index * 0.7,\n                    ease: \"power2.inOut\",\n                    onComplete: ()=>createGhostTrail(foot, point.x + (isLeft ? -12 : 12), point.y + (index % 2 ? 5 : -5), rotation + (isLeft ? -15 : 15))\n                });\n            });\n        };\n        // Start animations with proper timing\n        const timeline = gsap__WEBPACK_IMPORTED_MODULE_2__[\"default\"].timeline();\n        // Animate both feet with slight offset for natural walking\n        animateFootstep(leftFootRef.current, flowingPath, 0, true);\n        animateFootstep(rightFootRef.current, flowingPath, 0.35, false); // Increased offset\n        return ()=>{\n            timeline.kill();\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed inset-0 pointer-events-none\",\n        style: {\n            zIndex: 50\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: ghostTrailRef,\n                className: \"ghost-trail-container\",\n                style: {\n                    zIndex: 50\n                }\n            }, void 0, false, {\n                fileName: \"/Users/fausto/coding_2024/dell_presentation/components/FootstepsAnimation.tsx\",\n                lineNumber: 137,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LeftFootprint, {\n                ref: leftFootRef\n            }, void 0, false, {\n                fileName: \"/Users/fausto/coding_2024/dell_presentation/components/FootstepsAnimation.tsx\",\n                lineNumber: 142,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(RightFootprint, {\n                ref: rightFootRef\n            }, void 0, false, {\n                fileName: \"/Users/fausto/coding_2024/dell_presentation/components/FootstepsAnimation.tsx\",\n                lineNumber: 143,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/fausto/coding_2024/dell_presentation/components/FootstepsAnimation.tsx\",\n        lineNumber: 136,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FootstepsAnimation, \"zNqrOtmob5/AbFHcy1ky8sCUnGM=\");\n_c2 = FootstepsAnimation;\nRightFootprint.displayName = \"RightFootprint\";\nLeftFootprint.displayName = \"LeftFootprint\";\n/* harmony default export */ __webpack_exports__[\"default\"] = (FootstepsAnimation);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"RightFootprint\");\n$RefreshReg$(_c1, \"LeftFootprint\");\n$RefreshReg$(_c2, \"FootstepsAnimation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJN0MsV0FBVTtRQUFvQ0MsT0FBTztZQUFFNkMsUUFBUTtRQUFHOzswQkFDckUsOERBQUNEO2dCQUNDcEQsS0FBS2dCO2dCQUNMVCxXQUFVO2dCQUNWQyxPQUFPO29CQUFFNkMsUUFBUTtnQkFBRzs7Ozs7OzBCQUV0Qiw4REFBQ3pDO2dCQUFjWixLQUFLYzs7Ozs7OzBCQUNwQiw4REFBQ2pCO2dCQUFlRyxLQUFLZTs7Ozs7Ozs7Ozs7O0FBRzNCO0dBN0dNRjtNQUFBQTtBQStHTmhCLGVBQWV5RCxXQUFXLEdBQUc7QUFDN0IxQyxjQUFjMEMsV0FBVyxHQUFHO0FBRTVCLCtEQUFlekMsa0JBQWtCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRm9vdHN0ZXBzQW5pbWF0aW9uLnRzeD9kODRiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBnc2FwIGZyb20gJ2dzYXAnO1xuXG5pbnRlcmZhY2UgRm9vdFByb3BzIHtcbiAgcmVmOiBSZWFjdC5SZWZPYmplY3Q8U1ZHU1ZHRWxlbWVudD47XG59XG5cbmNvbnN0IFJpZ2h0Rm9vdHByaW50ID0gUmVhY3QuZm9yd2FyZFJlZjxTVkdTVkdFbGVtZW50PigoXywgcmVmKSA9PiAoXG4gIDxzdmcgXG4gICAgcmVmPXtyZWZ9XG4gICAgd2lkdGg9XCIyNFwiIFxuICAgIGhlaWdodD1cIjM2XCIgXG4gICAgdmlld0JveD1cIjAgMCAxNiAzMlwiIFxuICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgXG4gICAgY2xhc3NOYW1lPVwiZm9vdHN0ZXAgcmlnaHQtc3RlcFwiXG4gICAgc3R5bGU9e3sgdHJhbnNmb3JtOiAncm90YXRlKDkwZGVnKScgfX1cbiAgPlxuICAgIDxwYXRoIGQ9XCJNNS4wNTggMjAuOTE4bDYuMjEtMS42NjRjLTAuMjA0LTIuMjIgMC00Ljc0NSAxLjIwNS03LjExIDAuMTgtNi4xOTUtMS44NjctMTEuOTYyLTYuODM1LTEwLjYzMS01LjQ2OCAxLjQ2NS00Ljg2NSAxMy44OTktMC41OCAxOS40MDR2MHpNNS40NjggMjMuNTM3YzAuMzQzIDExLjk3NCAxMi41MTIgNi40OTcgNi4zMTgtMS42OTNsLTYuMzE4IDEuNjkzelwiIC8+XG4gIDwvc3ZnPlxuKSk7XG5cbmNvbnN0IExlZnRGb290cHJpbnQgPSBSZWFjdC5mb3J3YXJkUmVmPFNWR1NWR0VsZW1lbnQ+KChfLCByZWYpID0+IChcbiAgPHN2ZyBcbiAgICByZWY9e3JlZn1cbiAgICB3aWR0aD1cIjI0XCIgXG4gICAgaGVpZ2h0PVwiMzZcIiBcbiAgICB2aWV3Qm94PVwiMjAgMCAxNiAzMlwiIFxuICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgXG4gICAgY2xhc3NOYW1lPVwiZm9vdHN0ZXAgbGVmdC1zdGVwXCJcbiAgPlxuICAgIDxwYXRoIGQ9XCJNMjcuMjI3IDIwLjkxN2wtNi4yMS0xLjY2NGMwLjIwNC0yLjIyLTAtNC43NDUtMS4yMDUtNy4xMS0wLjE4LTYuMTk1IDEuODY3LTExLjk2MiA2LjgzNS0xMC42MzEgNS40NjggMS40NjYgNC44NjUgMTMuOSAwLjU4IDE5LjQwNHYwek0yNi44MTggMjMuNTM2Yy0wLjM0MyAxMS45NzMtMTIuNTEyIDYuNDk3LTYuMzE4LTEuNjkzbDYuMzE4IDEuNjkzelwiIC8+XG4gIDwvc3ZnPlxuKSk7XG5cbmNvbnN0IEZvb3RzdGVwc0FuaW1hdGlvbjogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IGxlZnRGb290UmVmID0gdXNlUmVmPFNWR1NWR0VsZW1lbnQ+KG51bGwpO1xuICBjb25zdCByaWdodEZvb3RSZWYgPSB1c2VSZWY8U1ZHU1ZHRWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IGdob3N0VHJhaWxSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFsZWZ0Rm9vdFJlZi5jdXJyZW50IHx8ICFyaWdodEZvb3RSZWYuY3VycmVudCB8fCAhZ2hvc3RUcmFpbFJlZi5jdXJyZW50KSByZXR1cm47XG5cbiAgICAvLyBSaXZlci1saWtlIGZsb3dpbmcgcGF0aCB3aXRoIGdlbnRsZSBjdXJ2ZXNcbiAgICBjb25zdCBmbG93aW5nUGF0aCA9IFtcbiAgICAgIC8vIFN0YXJ0IGF0IGZpcnN0IG9yYW5nZSBjaXJjbGVcbiAgICAgIHsgeDogMjAwLCB5OiAyNTAgfSwgICAgLy8gU3RhcnRpbmcgcG9zaXRpb25cbiAgICAgIHsgeDogMjUwLCB5OiAyNDUgfSwgICAgLy8gU2xpZ2h0IHVwd2FyZCBjdXJ2ZVxuICAgICAgeyB4OiAzMDAsIHk6IDI0MCB9LCAgICAvLyBDb250aW51ZSBnZW50bGUgcmlzZVxuICAgICAgeyB4OiAzNTAsIHk6IDI0NSB9LCAgICAvLyBTdGFydCBzdWJ0bGUgZGlwXG4gICAgICB7IHg6IDQwMCwgeTogMjUwIH0sICAgIC8vIFJldHVybiB0byBtaWRkbGUgaGVpZ2h0XG4gICAgICAvLyBNaWRkbGUgc2VjdGlvbiAodG8gc2Vjb25kIGNpcmNsZSlcbiAgICAgIHsgeDogNDUwLCB5OiAyNDUgfSwgICAgLy8gQmVnaW4gc2Vjb25kIGN1cnZlIHVwXG4gICAgICB7IHg6IDUwMCwgeTogMjQwIH0sICAgIC8vIFBlYWsgb2YgbWlkZGxlIGN1cnZlXG4gICAgICB7IHg6IDU1MCwgeTogMjQ1IH0sICAgIC8vIFN0YXJ0IGRlc2NlbmRpbmdcbiAgICAgIHsgeDogNjAwLCB5OiAyNTAgfSwgICAgLy8gTGV2ZWwgYXQgc2Vjb25kIGNpcmNsZVxuICAgICAgLy8gRmluYWwgc2VjdGlvbiAodG8gdGhpcmQgY2lyY2xlKVxuICAgICAgeyB4OiA2NTAsIHk6IDI0NSB9LCAgICAvLyBGaW5hbCBjdXJ2ZSBiZWdpbnNcbiAgICAgIHsgeDogNzAwLCB5OiAyNDAgfSwgICAgLy8gTGFzdCBnZW50bGUgcmlzZVxuICAgICAgeyB4OiA3NTAsIHk6IDI0NSB9LCAgICAvLyBBcHByb2FjaGluZyBlbmRcbiAgICAgIHsgeDogODAwLCB5OiAyNTAgfSwgICAgLy8gRW5kIGF0IHRoaXJkIGNpcmNsZVxuICAgIF07XG5cbiAgICBjb25zdCBjcmVhdGVHaG9zdFRyYWlsID0gKFxuICAgICAgZWxlbWVudDogU1ZHU1ZHRWxlbWVudCwgXG4gICAgICB4OiBudW1iZXIsIFxuICAgICAgeTogbnVtYmVyLFxuICAgICAgcm90YXRpb246IG51bWJlciA9IDBcbiAgICApOiB2b2lkID0+IHtcbiAgICAgIGlmICghZ2hvc3RUcmFpbFJlZi5jdXJyZW50KSByZXR1cm47XG4gICAgICBcbiAgICAgIGNvbnN0IGdob3N0ID0gZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSkgYXMgU1ZHU1ZHRWxlbWVudDtcbiAgICAgIGdob3N0LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgIGdob3N0LnN0eWxlLmxlZnQgPSBgJHt4fXB4YDtcbiAgICAgIGdob3N0LnN0eWxlLnRvcCA9IGAke3l9cHhgO1xuICAgICAgZ2hvc3Quc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZSgke3JvdGF0aW9ufWRlZylgO1xuICAgICAgZ2hvc3QuY2xhc3NMaXN0LmFkZCgnZ2hvc3QtdHJhaWwnKTtcbiAgICAgIFxuICAgICAgZ2hvc3RUcmFpbFJlZi5jdXJyZW50LmFwcGVuZENoaWxkKGdob3N0KTtcbiAgICAgIFxuICAgICAgLy8gTWFpbnRhaW4gbW9yZSB2aXNpYmxlIGdob3N0IHRyYWlsXG4gICAgICBnc2FwLnRvKGdob3N0LCB7XG4gICAgICAgIG9wYWNpdHk6IDAuMjUsICAvLyBJbmNyZWFzZWQgdmlzaWJpbGl0eVxuICAgICAgICBkdXJhdGlvbjogMywgICAgLy8gTG9uZ2VyIGR1cmF0aW9uXG4gICAgICAgIGVhc2U6IFwibm9uZVwiLCAgIC8vIExpbmVhciBmYWRlIGZvciBjb25zaXN0ZW50IHRyYWlsXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgYW5pbWF0ZUZvb3RzdGVwID0gKFxuICAgICAgZm9vdDogU1ZHU1ZHRWxlbWVudCxcbiAgICAgIHBhdGg6IEFycmF5PHt4OiBudW1iZXIsIHk6IG51bWJlcn0+LFxuICAgICAgZGVsYXk6IG51bWJlcixcbiAgICAgIGlzTGVmdDogYm9vbGVhblxuICAgICk6IHZvaWQgPT4ge1xuICAgICAgcGF0aC5mb3JFYWNoKChwb2ludCwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgcHJldlBvaW50ID0gaW5kZXggPiAwID8gcGF0aFtpbmRleCAtIDFdIDogcG9pbnQ7XG4gICAgICAgIGNvbnN0IG5leHRQb2ludCA9IGluZGV4IDwgcGF0aC5sZW5ndGggLSAxID8gcGF0aFtpbmRleCArIDFdIDogcG9pbnQ7XG4gICAgICAgIFxuICAgICAgICAvLyBDYWxjdWxhdGUgcm90YXRpb24gYmFzZWQgb24gY3VycmVudCBkaXJlY3Rpb24gb2YgbW92ZW1lbnRcbiAgICAgICAgY29uc3Qgcm90YXRpb24gPSBNYXRoLmF0YW4yKFxuICAgICAgICAgIG5leHRQb2ludC55IC0gcHJldlBvaW50LnksXG4gICAgICAgICAgbmV4dFBvaW50LnggLSBwcmV2UG9pbnQueFxuICAgICAgICApICogMTgwIC8gTWF0aC5QSTtcbiAgICAgICAgXG4gICAgICAgIGdzYXAudG8oZm9vdCwge1xuICAgICAgICAgIHg6IHBvaW50LnggKyAoaXNMZWZ0ID8gLTEyIDogMTIpLCAgLy8gTGF0ZXJhbCBvZmZzZXQgZm9yIGxlZnQvcmlnaHQgZm9vdFxuICAgICAgICAgIHk6IHBvaW50LnkgKyAoaW5kZXggJSAyID8gNSA6IC01KSwgLy8gU2xpZ2h0IHZlcnRpY2FsIGFsdGVybmF0aW9uXG4gICAgICAgICAgcm90YXRpb246IHJvdGF0aW9uICsgKGlzTGVmdCA/IC0xNSA6IDE1KSwgLy8gQW5nbGUgZmVldCBzbGlnaHRseSBvdXR3YXJkXG4gICAgICAgICAgZHVyYXRpb246IDAuNiwgICAgLy8gU2xvd2VyLCBtb3JlIG5hdHVyYWwgc3RlcCB0aW1pbmdcbiAgICAgICAgICBkZWxheTogZGVsYXkgKyAoaW5kZXggKiAwLjcpLCAvLyBNb3JlIHRpbWUgYmV0d2VlbiBzdGVwc1xuICAgICAgICAgIGVhc2U6IFwicG93ZXIyLmluT3V0XCIsXG4gICAgICAgICAgb25Db21wbGV0ZTogKCkgPT4gY3JlYXRlR2hvc3RUcmFpbChcbiAgICAgICAgICAgIGZvb3QsIFxuICAgICAgICAgICAgcG9pbnQueCArIChpc0xlZnQgPyAtMTIgOiAxMiksXG4gICAgICAgICAgICBwb2ludC55ICsgKGluZGV4ICUgMiA/IDUgOiAtNSksXG4gICAgICAgICAgICByb3RhdGlvbiArIChpc0xlZnQgPyAtMTUgOiAxNSlcbiAgICAgICAgICApLFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvLyBTdGFydCBhbmltYXRpb25zIHdpdGggcHJvcGVyIHRpbWluZ1xuICAgIGNvbnN0IHRpbWVsaW5lID0gZ3NhcC50aW1lbGluZSgpO1xuICAgIFxuICAgIC8vIEFuaW1hdGUgYm90aCBmZWV0IHdpdGggc2xpZ2h0IG9mZnNldCBmb3IgbmF0dXJhbCB3YWxraW5nXG4gICAgYW5pbWF0ZUZvb3RzdGVwKGxlZnRGb290UmVmLmN1cnJlbnQsIGZsb3dpbmdQYXRoLCAwLCB0cnVlKTtcbiAgICBhbmltYXRlRm9vdHN0ZXAocmlnaHRGb290UmVmLmN1cnJlbnQsIGZsb3dpbmdQYXRoLCAwLjM1LCBmYWxzZSk7IC8vIEluY3JlYXNlZCBvZmZzZXRcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB0aW1lbGluZS5raWxsKCk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIHBvaW50ZXItZXZlbnRzLW5vbmVcIiBzdHlsZT17eyB6SW5kZXg6IDUwIH19PlxuICAgICAgPGRpdiBcbiAgICAgICAgcmVmPXtnaG9zdFRyYWlsUmVmfSBcbiAgICAgICAgY2xhc3NOYW1lPVwiZ2hvc3QtdHJhaWwtY29udGFpbmVyXCIgXG4gICAgICAgIHN0eWxlPXt7IHpJbmRleDogNTAgfX1cbiAgICAgIC8+XG4gICAgICA8TGVmdEZvb3RwcmludCByZWY9e2xlZnRGb290UmVmfSAvPlxuICAgICAgPFJpZ2h0Rm9vdHByaW50IHJlZj17cmlnaHRGb290UmVmfSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuUmlnaHRGb290cHJpbnQuZGlzcGxheU5hbWUgPSAnUmlnaHRGb290cHJpbnQnO1xuTGVmdEZvb3RwcmludC5kaXNwbGF5TmFtZSA9ICdMZWZ0Rm9vdHByaW50JztcblxuZXhwb3J0IGRlZmF1bHQgRm9vdHN0ZXBzQW5pbWF0aW9uOyAiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJnc2FwIiwiUmlnaHRGb290cHJpbnQiLCJmb3J3YXJkUmVmIiwiXyIsInJlZiIsInN2ZyIsIndpZHRoIiwiaGVpZ2h0Iiwidmlld0JveCIsImZpbGwiLCJ4bWxucyIsImNsYXNzTmFtZSIsInN0eWxlIiwidHJhbnNmb3JtIiwicGF0aCIsImQiLCJMZWZ0Rm9vdHByaW50IiwiRm9vdHN0ZXBzQW5pbWF0aW9uIiwibGVmdEZvb3RSZWYiLCJyaWdodEZvb3RSZWYiLCJnaG9zdFRyYWlsUmVmIiwiY3VycmVudCIsImZsb3dpbmdQYXRoIiwieCIsInkiLCJjcmVhdGVHaG9zdFRyYWlsIiwiZWxlbWVudCIsInJvdGF0aW9uIiwiZ2hvc3QiLCJjbG9uZU5vZGUiLCJwb3NpdGlvbiIsImxlZnQiLCJ0b3AiLCJjbGFzc0xpc3QiLCJhZGQiLCJhcHBlbmRDaGlsZCIsInRvIiwib3BhY2l0eSIsImR1cmF0aW9uIiwiZWFzZSIsImFuaW1hdGVGb290c3RlcCIsImZvb3QiLCJkZWxheSIsImlzTGVmdCIsImZvckVhY2giLCJwb2ludCIsImluZGV4IiwicHJldlBvaW50IiwibmV4dFBvaW50IiwibGVuZ3RoIiwiTWF0aCIsImF0YW4yIiwiUEkiLCJvbkNvbXBsZXRlIiwidGltZWxpbmUiLCJraWxsIiwiZGl2IiwiekluZGV4IiwiZGlzcGxheU5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/FootstepsAnimation.tsx\n"));

/***/ })

});