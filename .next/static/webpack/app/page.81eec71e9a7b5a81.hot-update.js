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

/***/ "(app-pages-browser)/./app/components/nowplaying.tsx":
/*!***************************************!*\
  !*** ./app/components/nowplaying.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst NowPlaying = ()=>{\n    _s();\n    const [nowPlaying, setNowPlaying] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [queue, setQueue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const playerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [isYouTubeAPIReady, setIsYouTubeAPIReady] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchQueue = async ()=>{\n            const response = await fetch(\"/api/streams\");\n            const data = await response.json();\n            setQueue(data);\n            setNowPlaying(data[0]);\n        };\n        fetchQueue();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (true) {\n            if (!window.YT) {\n                const tag = document.createElement(\"script\");\n                tag.src = \"https://www.youtube.com/iframe_api\";\n                document.body.appendChild(tag);\n                window.onYouTubeIframeAPIReady = ()=>{\n                    setIsYouTubeAPIReady(true);\n                };\n            } else {\n                setIsYouTubeAPIReady(true);\n            }\n        }\n    }, []);\n    const handleSongEnd = ()=>{\n        const currentIndex = queue.findIndex((song)=>song.id === (nowPlaying === null || nowPlaying === void 0 ? void 0 : nowPlaying.id));\n        if (currentIndex !== -1 && currentIndex + 1 < queue.length) {\n            setNowPlaying(queue[currentIndex + 1]);\n        } else {\n            setNowPlaying(null);\n        }\n    };\n    const onPlayerStateChange = (event)=>{\n        if (event.data === 0) {\n            handleSongEnd();\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (nowPlaying && isYouTubeAPIReady && playerRef.current) {\n            new window.YT.Player(playerRef.current, {\n                videoId: extractYouTubeId(nowPlaying.url),\n                events: {\n                    \"onStateChange\": onPlayerStateChange\n                }\n            });\n        }\n    }, [\n        nowPlaying,\n        isYouTubeAPIReady\n    ]);\n    const extractYouTubeId = (url)=>{\n        const regExp = /^.*(youtu.be\\/|v\\/|\\/u\\/\\w\\/|embed\\/|watch\\?v=|\\&v=|watch\\?.*?v=)([^#\\&\\?]*).*/;\n        const match = url.match(regExp);\n        return match && match[2].length === 11 ? match[2] : null;\n    };\n    const handleNextSong = ()=>{\n        const currentIndex = queue.findIndex((song)=>song.id === (nowPlaying === null || nowPlaying === void 0 ? void 0 : nowPlaying.id));\n        if (currentIndex !== -1 && currentIndex + 1 < queue.length) {\n            setNowPlaying(queue[currentIndex + 1]);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-24 bg-gray-800 p-6 rounded-lg shadow-lg max-w-4xl mx-auto\",\n        children: [\n            nowPlaying ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center space-x-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        src: nowPlaying.thumbnail_url,\n                        alt: \"Thumbnail\",\n                        width: 200,\n                        height: 200,\n                        className: \"rounded-lg shadow-md\"\n                    }, void 0, false, {\n                        fileName: \"G:\\\\MyProjects\\\\Muzer\\\\client\\\\app\\\\components\\\\nowplaying.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-white flex-1\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-2xl font-bold\",\n                                children: \"Now Playing\"\n                            }, void 0, false, {\n                                fileName: \"G:\\\\MyProjects\\\\Muzer\\\\client\\\\app\\\\components\\\\nowplaying.tsx\",\n                                lineNumber: 96,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-gray-300 mt-2\",\n                                children: nowPlaying.url\n                            }, void 0, false, {\n                                fileName: \"G:\\\\MyProjects\\\\Muzer\\\\client\\\\app\\\\components\\\\nowplaying.tsx\",\n                                lineNumber: 97,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative w-full mt-4\",\n                                style: {\n                                    paddingBottom: \"56.25%\"\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    id: \"player-container\",\n                                    className: \"absolute top-0 left-0 w-full h-full\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                                        ref: playerRef,\n                                        width: \"100%\",\n                                        height: \"100%\",\n                                        src: \"https://www.youtube.com/embed/\".concat(extractYouTubeId(nowPlaying.url), \"?enablejsapi=1&autoplay=1\"),\n                                        frameBorder: \"0\",\n                                        allow: \"autoplay; encrypted-media\",\n                                        allowFullScreen: true,\n                                        className: \"absolute top-0 left-0 w-full h-full\"\n                                    }, void 0, false, {\n                                        fileName: \"G:\\\\MyProjects\\\\Muzer\\\\client\\\\app\\\\components\\\\nowplaying.tsx\",\n                                        lineNumber: 100,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"G:\\\\MyProjects\\\\Muzer\\\\client\\\\app\\\\components\\\\nowplaying.tsx\",\n                                    lineNumber: 99,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"G:\\\\MyProjects\\\\Muzer\\\\client\\\\app\\\\components\\\\nowplaying.tsx\",\n                                lineNumber: 98,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"G:\\\\MyProjects\\\\Muzer\\\\client\\\\app\\\\components\\\\nowplaying.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"G:\\\\MyProjects\\\\Muzer\\\\client\\\\app\\\\components\\\\nowplaying.tsx\",\n                lineNumber: 87,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-white text-center\",\n                children: \"No song playing\"\n            }, void 0, false, {\n                fileName: \"G:\\\\MyProjects\\\\Muzer\\\\client\\\\app\\\\components\\\\nowplaying.tsx\",\n                lineNumber: 115,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleNextSong,\n                className: \"mt-6 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300\",\n                children: \"Play Next Song\"\n            }, void 0, false, {\n                fileName: \"G:\\\\MyProjects\\\\Muzer\\\\client\\\\app\\\\components\\\\nowplaying.tsx\",\n                lineNumber: 117,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"G:\\\\MyProjects\\\\Muzer\\\\client\\\\app\\\\components\\\\nowplaying.tsx\",\n        lineNumber: 85,\n        columnNumber: 5\n    }, undefined);\n};\n_s(NowPlaying, \"Vh9JEM639DaKHYA6fEMMoKr/FOQ=\");\n_c = NowPlaying;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NowPlaying);\nvar _c;\n$RefreshReg$(_c, \"NowPlaying\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL25vd3BsYXlpbmcudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDb0Q7QUFDckI7QUFTL0IsTUFBTUksYUFBYTs7SUFDakIsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdMLCtDQUFRQSxDQUFnQjtJQUM1RCxNQUFNLENBQUNNLE9BQU9DLFNBQVMsR0FBR1AsK0NBQVFBLENBQVcsRUFBRTtJQUMvQyxNQUFNUSxZQUFZUCw2Q0FBTUEsQ0FBMkI7SUFDbkQsTUFBTSxDQUFDUSxtQkFBbUJDLHFCQUFxQixHQUFHViwrQ0FBUUEsQ0FBQztJQUUzREQsZ0RBQVNBLENBQUM7UUFDUixNQUFNWSxhQUFhO1lBQ2pCLE1BQU1DLFdBQVcsTUFBTUMsTUFBTTtZQUM3QixNQUFNQyxPQUFPLE1BQU1GLFNBQVNHLElBQUk7WUFDaENSLFNBQVNPO1lBQ1RULGNBQWNTLElBQUksQ0FBQyxFQUFFO1FBQ3ZCO1FBRUFIO0lBQ0YsR0FBRyxFQUFFO0lBRUxaLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSSxJQUE2QixFQUFFO1lBQ2pDLElBQUksQ0FBQ2lCLE9BQU9DLEVBQUUsRUFBRTtnQkFDZCxNQUFNQyxNQUFNQyxTQUFTQyxhQUFhLENBQUM7Z0JBQ25DRixJQUFJRyxHQUFHLEdBQUc7Z0JBQ1ZGLFNBQVNHLElBQUksQ0FBQ0MsV0FBVyxDQUFDTDtnQkFFMUJGLE9BQU9RLHVCQUF1QixHQUFHO29CQUMvQmQscUJBQXFCO2dCQUN2QjtZQUNGLE9BQU87Z0JBQ0xBLHFCQUFxQjtZQUN2QjtRQUNGO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTWUsZ0JBQWdCO1FBQ3BCLE1BQU1DLGVBQWVwQixNQUFNcUIsU0FBUyxDQUFDQyxDQUFBQSxPQUFRQSxLQUFLQyxFQUFFLE1BQUt6Qix1QkFBQUEsaUNBQUFBLFdBQVl5QixFQUFFO1FBQ3ZFLElBQUlILGlCQUFpQixDQUFDLEtBQUtBLGVBQWUsSUFBSXBCLE1BQU13QixNQUFNLEVBQUU7WUFDMUR6QixjQUFjQyxLQUFLLENBQUNvQixlQUFlLEVBQUU7UUFDdkMsT0FBTztZQUNMckIsY0FBYztRQUNoQjtJQUNGO0lBRUEsTUFBTTBCLHNCQUFzQixDQUFDQztRQUMzQixJQUFJQSxNQUFNbEIsSUFBSSxLQUFLLEdBQUc7WUFDcEJXO1FBQ0Y7SUFDRjtJQUVBMUIsZ0RBQVNBLENBQUM7UUFDUixJQUFJSyxjQUFjSyxxQkFBcUJELFVBQVV5QixPQUFPLEVBQUU7WUFDeEQsSUFBSWpCLE9BQU9DLEVBQUUsQ0FBQ2lCLE1BQU0sQ0FBQzFCLFVBQVV5QixPQUFPLEVBQUU7Z0JBQ3RDRSxTQUFTQyxpQkFBaUJoQyxXQUFXaUMsR0FBRztnQkFDeENDLFFBQVE7b0JBQ04saUJBQWlCUDtnQkFDbkI7WUFDRjtRQUNGO0lBQ0YsR0FBRztRQUFDM0I7UUFBWUs7S0FBa0I7SUFFbEMsTUFBTTJCLG1CQUFtQixDQUFDQztRQUN4QixNQUFNRSxTQUFTO1FBQ2YsTUFBTUMsUUFBUUgsSUFBSUcsS0FBSyxDQUFDRDtRQUN4QixPQUFPQyxTQUFTQSxLQUFLLENBQUMsRUFBRSxDQUFDVixNQUFNLEtBQUssS0FBS1UsS0FBSyxDQUFDLEVBQUUsR0FBRztJQUN0RDtJQUVBLE1BQU1DLGlCQUFpQjtRQUNyQixNQUFNZixlQUFlcEIsTUFBTXFCLFNBQVMsQ0FBQ0MsQ0FBQUEsT0FBUUEsS0FBS0MsRUFBRSxNQUFLekIsdUJBQUFBLGlDQUFBQSxXQUFZeUIsRUFBRTtRQUN2RSxJQUFJSCxpQkFBaUIsQ0FBQyxLQUFLQSxlQUFlLElBQUlwQixNQUFNd0IsTUFBTSxFQUFFO1lBQzFEekIsY0FBY0MsS0FBSyxDQUFDb0IsZUFBZSxFQUFFO1FBQ3ZDO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ2dCO1FBQUlDLFdBQVU7O1lBQ1p2QywyQkFDQyw4REFBQ3NDO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ3pDLGtEQUFLQTt3QkFDSm1CLEtBQUtqQixXQUFXd0MsYUFBYTt3QkFDN0JDLEtBQUk7d0JBQ0pDLE9BQU87d0JBQ1BDLFFBQVE7d0JBQ1JKLFdBQVU7Ozs7OztrQ0FFWiw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDSztnQ0FBR0wsV0FBVTswQ0FBcUI7Ozs7OzswQ0FDbkMsOERBQUNNO2dDQUFFTixXQUFVOzBDQUFzQnZDLFdBQVdpQyxHQUFHOzs7Ozs7MENBQ2pELDhEQUFDSztnQ0FBSUMsV0FBVTtnQ0FBdUJPLE9BQU87b0NBQUVDLGVBQWU7Z0NBQVM7MENBQ3JFLDRFQUFDVDtvQ0FBSWIsSUFBRztvQ0FBbUJjLFdBQVU7OENBQ25DLDRFQUFDUzt3Q0FDQ0MsS0FBSzdDO3dDQUNMc0MsT0FBTTt3Q0FDTkMsUUFBTzt3Q0FDUDFCLEtBQUssaUNBQWtFLE9BQWpDZSxpQkFBaUJoQyxXQUFXaUMsR0FBRyxHQUFFO3dDQUN2RWlCLGFBQVk7d0NBQ1pDLE9BQU07d0NBQ05DLGVBQWU7d0NBQ2ZiLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQ0FPcEIsOERBQUNNO2dCQUFFTixXQUFVOzBCQUF5Qjs7Ozs7OzBCQUV4Qyw4REFBQ2M7Z0JBQ0NDLFNBQVNqQjtnQkFDVEUsV0FBVTswQkFDWDs7Ozs7Ozs7Ozs7O0FBS1A7R0FqSE14QztLQUFBQTtBQW1ITiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9ub3dwbGF5aW5nLnRzeD8yYjVmIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5cclxuaW50ZXJmYWNlIFN0cmVhbSB7XHJcbiAgaWQ6IHN0cmluZztcclxuICB1cmw6IHN0cmluZztcclxuICB0aHVtYm5haWxfdXJsOiBzdHJpbmc7XHJcbiAgdm90ZXM6IG51bWJlcjtcclxufVxyXG5cclxuY29uc3QgTm93UGxheWluZyA9ICgpID0+IHtcclxuICBjb25zdCBbbm93UGxheWluZywgc2V0Tm93UGxheWluZ10gPSB1c2VTdGF0ZTxTdHJlYW0gfCBudWxsPihudWxsKTtcclxuICBjb25zdCBbcXVldWUsIHNldFF1ZXVlXSA9IHVzZVN0YXRlPFN0cmVhbVtdPihbXSk7XHJcbiAgY29uc3QgcGxheWVyUmVmID0gdXNlUmVmPEhUTUxJRnJhbWVFbGVtZW50IHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgW2lzWW91VHViZUFQSVJlYWR5LCBzZXRJc1lvdVR1YmVBUElSZWFkeV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaFF1ZXVlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9zdHJlYW1zXCIpO1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICBzZXRRdWV1ZShkYXRhKTtcclxuICAgICAgc2V0Tm93UGxheWluZyhkYXRhWzBdKTtcclxuICAgIH07XHJcblxyXG4gICAgZmV0Y2hRdWV1ZSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgIGlmICghd2luZG93LllUKSB7XHJcbiAgICAgICAgY29uc3QgdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcclxuICAgICAgICB0YWcuc3JjID0gXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9pZnJhbWVfYXBpXCI7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0YWcpO1xyXG5cclxuICAgICAgICB3aW5kb3cub25Zb3VUdWJlSWZyYW1lQVBJUmVhZHkgPSAoKSA9PiB7XHJcbiAgICAgICAgICBzZXRJc1lvdVR1YmVBUElSZWFkeSh0cnVlKTtcclxuICAgICAgICB9O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldElzWW91VHViZUFQSVJlYWR5KHRydWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVTb25nRW5kID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY3VycmVudEluZGV4ID0gcXVldWUuZmluZEluZGV4KHNvbmcgPT4gc29uZy5pZCA9PT0gbm93UGxheWluZz8uaWQpO1xyXG4gICAgaWYgKGN1cnJlbnRJbmRleCAhPT0gLTEgJiYgY3VycmVudEluZGV4ICsgMSA8IHF1ZXVlLmxlbmd0aCkge1xyXG4gICAgICBzZXROb3dQbGF5aW5nKHF1ZXVlW2N1cnJlbnRJbmRleCArIDFdKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldE5vd1BsYXlpbmcobnVsbCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25QbGF5ZXJTdGF0ZUNoYW5nZSA9IChldmVudDogYW55KSA9PiB7XHJcbiAgICBpZiAoZXZlbnQuZGF0YSA9PT0gMCkge1xyXG4gICAgICBoYW5kbGVTb25nRW5kKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChub3dQbGF5aW5nICYmIGlzWW91VHViZUFQSVJlYWR5ICYmIHBsYXllclJlZi5jdXJyZW50KSB7XHJcbiAgICAgIG5ldyB3aW5kb3cuWVQuUGxheWVyKHBsYXllclJlZi5jdXJyZW50LCB7XHJcbiAgICAgICAgdmlkZW9JZDogZXh0cmFjdFlvdVR1YmVJZChub3dQbGF5aW5nLnVybCksXHJcbiAgICAgICAgZXZlbnRzOiB7XHJcbiAgICAgICAgICAnb25TdGF0ZUNoYW5nZSc6IG9uUGxheWVyU3RhdGVDaGFuZ2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSwgW25vd1BsYXlpbmcsIGlzWW91VHViZUFQSVJlYWR5XSk7XHJcblxyXG4gIGNvbnN0IGV4dHJhY3RZb3VUdWJlSWQgPSAodXJsOiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IHJlZ0V4cCA9IC9eLiooeW91dHUuYmVcXC98dlxcL3xcXC91XFwvXFx3XFwvfGVtYmVkXFwvfHdhdGNoXFw/dj18XFwmdj18d2F0Y2hcXD8uKj92PSkoW14jXFwmXFw/XSopLiovO1xyXG4gICAgY29uc3QgbWF0Y2ggPSB1cmwubWF0Y2gocmVnRXhwKTtcclxuICAgIHJldHVybiBtYXRjaCAmJiBtYXRjaFsyXS5sZW5ndGggPT09IDExID8gbWF0Y2hbMl0gOiBudWxsO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZU5leHRTb25nID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY3VycmVudEluZGV4ID0gcXVldWUuZmluZEluZGV4KHNvbmcgPT4gc29uZy5pZCA9PT0gbm93UGxheWluZz8uaWQpO1xyXG4gICAgaWYgKGN1cnJlbnRJbmRleCAhPT0gLTEgJiYgY3VycmVudEluZGV4ICsgMSA8IHF1ZXVlLmxlbmd0aCkge1xyXG4gICAgICBzZXROb3dQbGF5aW5nKHF1ZXVlW2N1cnJlbnRJbmRleCArIDFdKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yNCBiZy1ncmF5LTgwMCBwLTYgcm91bmRlZC1sZyBzaGFkb3ctbGcgbWF4LXctNHhsIG14LWF1dG9cIj5cclxuICAgICAge25vd1BsYXlpbmcgPyAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTRcIj5cclxuICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICBzcmM9e25vd1BsYXlpbmcudGh1bWJuYWlsX3VybH1cclxuICAgICAgICAgICAgYWx0PVwiVGh1bWJuYWlsXCJcclxuICAgICAgICAgICAgd2lkdGg9ezIwMH1cclxuICAgICAgICAgICAgaGVpZ2h0PXsyMDB9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgc2hhZG93LW1kXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZmxleC0xXCI+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGRcIj5Ob3cgUGxheWluZzwvaDI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS0zMDAgbXQtMlwiPntub3dQbGF5aW5nLnVybH08L3A+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsIG10LTRcIiBzdHlsZT17eyBwYWRkaW5nQm90dG9tOiBcIjU2LjI1JVwiIH19PlxyXG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJwbGF5ZXItY29udGFpbmVyXCIgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgbGVmdC0wIHctZnVsbCBoLWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgIDxpZnJhbWVcclxuICAgICAgICAgICAgICAgICAgcmVmPXtwbGF5ZXJSZWZ9XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgICBzcmM9e2BodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke2V4dHJhY3RZb3VUdWJlSWQobm93UGxheWluZy51cmwpfT9lbmFibGVqc2FwaT0xJmF1dG9wbGF5PTFgfVxyXG4gICAgICAgICAgICAgICAgICBmcmFtZUJvcmRlcj1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICBhbGxvdz1cImF1dG9wbGF5OyBlbmNyeXB0ZWQtbWVkaWFcIlxyXG4gICAgICAgICAgICAgICAgICBhbGxvd0Z1bGxTY3JlZW5cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgbGVmdC0wIHctZnVsbCBoLWZ1bGxcIlxyXG4gICAgICAgICAgICAgICAgPjwvaWZyYW1lPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC1jZW50ZXJcIj5ObyBzb25nIHBsYXlpbmc8L3A+XHJcbiAgICAgICl9XHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVOZXh0U29uZ31cclxuICAgICAgICBjbGFzc05hbWU9XCJtdC02IHB4LTYgcHktMiBiZy1ibHVlLTYwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtbWQgaG92ZXI6YmctYmx1ZS03MDAgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDBcIlxyXG4gICAgICA+XHJcbiAgICAgICAgUGxheSBOZXh0IFNvbmdcclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTm93UGxheWluZztcclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwiSW1hZ2UiLCJOb3dQbGF5aW5nIiwibm93UGxheWluZyIsInNldE5vd1BsYXlpbmciLCJxdWV1ZSIsInNldFF1ZXVlIiwicGxheWVyUmVmIiwiaXNZb3VUdWJlQVBJUmVhZHkiLCJzZXRJc1lvdVR1YmVBUElSZWFkeSIsImZldGNoUXVldWUiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJ3aW5kb3ciLCJZVCIsInRhZyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNyYyIsImJvZHkiLCJhcHBlbmRDaGlsZCIsIm9uWW91VHViZUlmcmFtZUFQSVJlYWR5IiwiaGFuZGxlU29uZ0VuZCIsImN1cnJlbnRJbmRleCIsImZpbmRJbmRleCIsInNvbmciLCJpZCIsImxlbmd0aCIsIm9uUGxheWVyU3RhdGVDaGFuZ2UiLCJldmVudCIsImN1cnJlbnQiLCJQbGF5ZXIiLCJ2aWRlb0lkIiwiZXh0cmFjdFlvdVR1YmVJZCIsInVybCIsImV2ZW50cyIsInJlZ0V4cCIsIm1hdGNoIiwiaGFuZGxlTmV4dFNvbmciLCJkaXYiLCJjbGFzc05hbWUiLCJ0aHVtYm5haWxfdXJsIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJoMiIsInAiLCJzdHlsZSIsInBhZGRpbmdCb3R0b20iLCJpZnJhbWUiLCJyZWYiLCJmcmFtZUJvcmRlciIsImFsbG93IiwiYWxsb3dGdWxsU2NyZWVuIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/nowplaying.tsx\n"));

/***/ })

});