"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/queue.tsx":
/*!**********************************!*\
  !*** ./app/components/queue.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Queue = ()=>{\n    _s();\n    const [queue, setQueue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const fetchQueue = async ()=>{\n        try {\n            const response = await fetch(\"/api/streams\");\n            if (!response.ok) {\n                throw new Error(\"Network response was not ok\");\n            }\n            const data = await response.json();\n            setQueue(data);\n        } catch (error) {\n            console.error(\"Error fetching queue:\", error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchQueue();\n        const interval = setInterval(fetchQueue, 5000); // Poll every 5 seconds\n        return ()=>clearInterval(interval);\n    }, []);\n    const handleVote = async (streamId)=>{\n        try {\n            const response = await fetch(\"/api/streams\", {\n                method: \"PATCH\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    streamId: streamId\n                })\n            });\n            if (response.ok) {\n                fetchQueue(); // Refresh queue\n            } else {\n                console.error(\"Error voting:\", await response.text());\n            }\n        } catch (error) {\n            console.error(\"Network error:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-6 bg-gray-900 text-white rounded-lg shadow-lg max-w-md mx-auto mt-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-xl font-bold mb-4\",\n                children: \"Song Queue\"\n            }, void 0, false, {\n                fileName: \"G:\\\\MyProjects\\\\Muzer\\\\client\\\\app\\\\components\\\\queue.tsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"space-y-4\",\n                children: queue.map((song)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"flex items-center space-x-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                src: song.thumbnail_url,\n                                alt: song.title,\n                                width: 100,\n                                height: 100,\n                                className: \"rounded-md shadow-md\"\n                            }, void 0, false, {\n                                fileName: \"G:\\\\MyProjects\\\\Muzer\\\\client\\\\app\\\\components\\\\queue.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex-1\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        className: \"text-lg font-semibold\",\n                                        children: song.title\n                                    }, void 0, false, {\n                                        fileName: \"G:\\\\MyProjects\\\\Muzer\\\\client\\\\app\\\\components\\\\queue.tsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-gray-400\",\n                                        children: [\n                                            \"Votes: \",\n                                            song.votes\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"G:\\\\MyProjects\\\\Muzer\\\\client\\\\app\\\\components\\\\queue.tsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"G:\\\\MyProjects\\\\Muzer\\\\client\\\\app\\\\components\\\\queue.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>handleVote(song.id),\n                                className: \"bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition duration-300\",\n                                children: \"Vote\"\n                            }, void 0, false, {\n                                fileName: \"G:\\\\MyProjects\\\\Muzer\\\\client\\\\app\\\\components\\\\queue.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, song.id, true, {\n                        fileName: \"G:\\\\MyProjects\\\\Muzer\\\\client\\\\app\\\\components\\\\queue.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"G:\\\\MyProjects\\\\Muzer\\\\client\\\\app\\\\components\\\\queue.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"G:\\\\MyProjects\\\\Muzer\\\\client\\\\app\\\\components\\\\queue.tsx\",\n        lineNumber: 59,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Queue, \"gnm5c9ihVUjA3R/713RS3rschgA=\");\n_c = Queue;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Queue);\nvar _c;\n$RefreshReg$(_c, \"Queue\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3F1ZXVlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRTRDO0FBQ2I7QUFVL0IsTUFBTUcsUUFBUTs7SUFDWixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0osK0NBQVFBLENBQVcsRUFBRTtJQUUvQyxNQUFNSyxhQUFhO1FBQ2pCLElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU1DLE1BQU07WUFDN0IsSUFBSSxDQUFDRCxTQUFTRSxFQUFFLEVBQUU7Z0JBQ2hCLE1BQU0sSUFBSUMsTUFBTTtZQUNsQjtZQUNBLE1BQU1DLE9BQWlCLE1BQU1KLFNBQVNLLElBQUk7WUFDMUNQLFNBQVNNO1FBQ1gsRUFBRSxPQUFPRSxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQyx5QkFBeUJBO1FBQ3pDO0lBQ0Y7SUFFQWIsZ0RBQVNBLENBQUM7UUFDUk07UUFDQSxNQUFNUyxXQUFXQyxZQUFZVixZQUFZLE9BQU8sdUJBQXVCO1FBQ3ZFLE9BQU8sSUFBTVcsY0FBY0Y7SUFDN0IsR0FBRyxFQUFFO0lBRUwsTUFBTUcsYUFBYSxPQUFPQztRQUN4QixJQUFJO1lBQ0YsTUFBTVosV0FBVyxNQUFNQyxNQUFPLGdCQUFlO2dCQUMzQ1ksUUFBUTtnQkFDUkMsU0FBUztvQkFDUCxnQkFBZ0I7Z0JBQ2xCO2dCQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7b0JBQ25CTCxVQUFVQTtnQkFDWjtZQUNGO1lBRUEsSUFBSVosU0FBU0UsRUFBRSxFQUFFO2dCQUNmSCxjQUFjLGdCQUFnQjtZQUNoQyxPQUFPO2dCQUNMUSxRQUFRRCxLQUFLLENBQUMsaUJBQWlCLE1BQU1OLFNBQVNrQixJQUFJO1lBQ3BEO1FBQ0YsRUFBRSxPQUFPWixPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQyxrQkFBa0JBO1FBQ2xDO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ2E7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUF5Qjs7Ozs7OzBCQUN2Qyw4REFBQ0U7Z0JBQUdGLFdBQVU7MEJBQ1h2QixNQUFNMEIsR0FBRyxDQUFDLENBQUNDLHFCQUNWLDhEQUFDQzt3QkFBaUJMLFdBQVU7OzBDQUMxQiw4REFBQ3pCLGtEQUFLQTtnQ0FDSitCLEtBQUtGLEtBQUtHLGFBQWE7Z0NBQ3ZCQyxLQUFLSixLQUFLSyxLQUFLO2dDQUNmQyxPQUFPO2dDQUNQQyxRQUFRO2dDQUNSWCxXQUFVOzs7Ozs7MENBRVosOERBQUNEO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ1k7d0NBQUdaLFdBQVU7a0RBQXlCSSxLQUFLSyxLQUFLOzs7Ozs7a0RBQ2pELDhEQUFDSTt3Q0FBRWIsV0FBVTs7NENBQWdCOzRDQUFRSSxLQUFLVSxLQUFLOzs7Ozs7Ozs7Ozs7OzBDQUVqRCw4REFBQ0M7Z0NBQ0NDLFNBQVMsSUFBTXpCLFdBQVdhLEtBQUthLEVBQUU7Z0NBQ2pDakIsV0FBVTswQ0FDWDs7Ozs7Ozt1QkFmTUksS0FBS2EsRUFBRTs7Ozs7Ozs7Ozs7Ozs7OztBQXVCMUI7R0F4RU16QztLQUFBQTtBQTBFTiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9xdWV1ZS50c3g/OTg0NCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5cclxuaW50ZXJmYWNlIFN0cmVhbSB7XHJcbiAgaWQ6IHN0cmluZztcclxuICB1cmw6IHN0cmluZztcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIHRodW1ibmFpbF91cmw6IHN0cmluZztcclxuICB2b3RlczogbnVtYmVyO1xyXG59XHJcblxyXG5jb25zdCBRdWV1ZSA9ICgpID0+IHtcclxuICBjb25zdCBbcXVldWUsIHNldFF1ZXVlXSA9IHVzZVN0YXRlPFN0cmVhbVtdPihbXSk7XHJcblxyXG4gIGNvbnN0IGZldGNoUXVldWUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9zdHJlYW1zXCIpO1xyXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTmV0d29yayByZXNwb25zZSB3YXMgbm90IG9rXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGRhdGE6IFN0cmVhbVtdID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICBzZXRRdWV1ZShkYXRhKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBxdWV1ZTpcIiwgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaFF1ZXVlKCk7XHJcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKGZldGNoUXVldWUsIDUwMDApOyAvLyBQb2xsIGV2ZXJ5IDUgc2Vjb25kc1xyXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVm90ZSA9IGFzeW5jIChzdHJlYW1JZDogc3RyaW5nKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvYXBpL3N0cmVhbXNgLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBBVENIXCIsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICBzdHJlYW1JZDogc3RyZWFtSWQsXHJcbiAgICAgICAgfSksXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgZmV0Y2hRdWV1ZSgpOyAvLyBSZWZyZXNoIHF1ZXVlXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHZvdGluZzpcIiwgYXdhaXQgcmVzcG9uc2UudGV4dCgpKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIk5ldHdvcmsgZXJyb3I6XCIsIGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwLTYgYmctZ3JheS05MDAgdGV4dC13aGl0ZSByb3VuZGVkLWxnIHNoYWRvdy1sZyBtYXgtdy1tZCBteC1hdXRvIG10LTZcIj5cclxuICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIG1iLTRcIj5Tb25nIFF1ZXVlPC9oMj5cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxyXG4gICAgICAgIHtxdWV1ZS5tYXAoKHNvbmcpID0+IChcclxuICAgICAgICAgIDxsaSBrZXk9e3NvbmcuaWR9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtNFwiPlxyXG4gICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICBzcmM9e3NvbmcudGh1bWJuYWlsX3VybH1cclxuICAgICAgICAgICAgICBhbHQ9e3NvbmcudGl0bGV9XHJcbiAgICAgICAgICAgICAgd2lkdGg9ezEwMH1cclxuICAgICAgICAgICAgICBoZWlnaHQ9ezEwMH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLW1kIHNoYWRvdy1tZFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xXCI+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1zZW1pYm9sZFwiPntzb25nLnRpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMFwiPlZvdGVzOiB7c29uZy52b3Rlc308L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlVm90ZShzb25nLmlkKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ibHVlLTYwMCBob3ZlcjpiZy1ibHVlLTcwMCB0ZXh0LXdoaXRlIHB5LTIgcHgtNCByb3VuZGVkLW1kIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFZvdGVcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFF1ZXVlO1xyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJJbWFnZSIsIlF1ZXVlIiwicXVldWUiLCJzZXRRdWV1ZSIsImZldGNoUXVldWUiLCJyZXNwb25zZSIsImZldGNoIiwib2siLCJFcnJvciIsImRhdGEiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJoYW5kbGVWb3RlIiwic3RyZWFtSWQiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0ZXh0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJ1bCIsIm1hcCIsInNvbmciLCJsaSIsInNyYyIsInRodW1ibmFpbF91cmwiLCJhbHQiLCJ0aXRsZSIsIndpZHRoIiwiaGVpZ2h0IiwiaDMiLCJwIiwidm90ZXMiLCJidXR0b24iLCJvbkNsaWNrIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/queue.tsx\n"));

/***/ })

});