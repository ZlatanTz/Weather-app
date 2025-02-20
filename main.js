/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n    \n    margin: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: 'Nunito', sans-serif;\n}\n\nheader{\n    height: 100px;\n    background-color: #16161f;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n\nheader input {\n    color: white;\n    background-color: #16161f;\n    width: 50%;\n    height: 50px;\n    font-size: 1.4rem;\n    text-indent: 20px;\n    border-radius: 1rem;\n    border: none;\n    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);\n    transition: 0.3s ease-in-out;\n}\n\nheader input::placeholder{\n    font-family: 'Nunito', sans-serif;\n}\n\nheader input:focus {\n    box-shadow: 0px 4px 15px rgba(255, 255, 255, 0.6); /* Blue glow on focus */\n    outline: none;\n}\n\nmain{\n    height: calc(100vh - 100px);\n    background: #131319;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.container {\n    display: none;\n    background-color: #16161f;\n    height: 550px;\n    width: 50%;\n    border-radius: 2rem;\n    border: none;\n    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);\n    padding: 30px;\n    opacity: 0; /* Initially transparent */\n    transform: scale(0.8); /* Initially smaller */\n    transition: opacity 0.5s ease-out, transform 0.5s ease-out;\n}\n\n.container.show {\n    display: block;\n    opacity: 1;\n    transform: scale(1); /* Grows to normal size */\n}\n\n\n\n.wrapper{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    height: 80%;\n}\n\n.weather-name{\n    color: white;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    border-bottom: 1px solid rgb(146, 146, 146);\n    height: 100px;\n    font-size: 2.8rem;\n}\n\n\n.weather-stats{\n    width: 100%;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    height: 100%;\n    color: white;\n}\n\n.stats-temperature{\n    display: flex;\n    height: 100%;\n    justify-content: center;\n    align-items: center;\n    font-size: 3rem;\n    font-weight: 700;\n    flex-direction: row-reverse; \n\n}\n\n.stats-temperature img{\n    width: 200px;\n\n}\n\n\n\n\n.stats-details{\n    grid-row: 1 / 3;\n    grid-column: 2 / 3;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n    font-size: 1.7rem;\n\n    \n}\n\n\n\n.stats-description{\n    font-size: 1.5rem;\n}\n\n.stat-conditions{\n    font-size: 2.7rem;\n    font-weight: 700;\n}\n\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\nconst INPUT_ELEM = document.querySelector('#location-input')\nconst STATS_DISPLAY_ELEM_MAIN = document.querySelector('.weather-stats')\nconst ADDRESS_NAME_ELEM = document.querySelector('.weather-name')\nconst MAIN_CONTAINER_ELEM = document.querySelector('.container')\nconsole.log(INPUT_ELEM);\nconst apiKey = 'HV3EBVHU3XN6F3KS7XMFJ7SDG';\n\n\nasync function getData(input){\nconst url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${input}?key=${apiKey}&unitGroup=metric`;\n    try{\n    const response = (await fetch(url));\n    if(!response.ok){\n        throw new Error(`Error: ${response.status}`)\n    }\n    const data = await response.json();\n    return data\n    }catch(err){\n        console.log(err);\n        return null;\n    }\n\n}\n\nasync function displayData(input){\n    const data = await getData(input)\n    const {icon, temp, datetime, feelslike, humidity, windspeed, windgust, conditions} = data.currentConditions;\n    const {resolvedAddress, description} = data;\n    showContainer();\n    STATS_DISPLAY_ELEM_MAIN.innerHTML = ``;\n    ADDRESS_NAME_ELEM.innerHTML = ``;\n    ADDRESS_NAME_ELEM.innerHTML = resolvedAddress\n    STATS_DISPLAY_ELEM_MAIN.innerHTML = `\n                    <div class=\"stats-temperature\">\n                        <img src=\"${weatherIcons[icon]}\" alt=\"weather-icon\" class=\"temperature-icon\">\n                        <p class=\"temperature-numeric\">${temp} &deg;C</p> \n                    </div>\n                    <div class=\"stats-details\">\n                        <div class=\"currentTime\">Current Time: ${datetime}</div>\n                        <div class=\"stat-realFeel\">Feels like: ${feelslike} &deg;C</div>\n                        <div class=\"stat-humidity\">Humidity: ${humidity}</div>\n                        <div class=\"stat-wind-speed\">Wind speed: ${windspeed} km/h</div>\n                        <div class=\"stat-wind-gust\">Wind gust: ${windgust} km/h</div>\n                    </div>\n                      <div class=\"stats-description\">\n                        <div class=\"stat-conditions\">${conditions}</div>\n                        <div class=\"stat-forecast\">${description}</div>\n                    </div>\n                    `\n\n}\n\nfunction showContainer() {\n    MAIN_CONTAINER_ELEM.style.display = 'block'; // Make it visible\n    setTimeout(() => {\n        MAIN_CONTAINER_ELEM.classList.add('show'); // Start animation\n    }, 10); // Small delay to ensure CSS applies\n}\n\n\nINPUT_ELEM.addEventListener('keydown', (e) => {\n    if(e.key == 'Enter'){\n        const input = INPUT_ELEM.value.toLowerCase();\n        displayData(input)\n    }\n})\n\n\nconst weatherIcons = {};\nconst iconKeys = [\n    \"clear-day\", \n    \"clear-night\", \n    \"partly-cloudy-day\", \n    \"partly-cloudy-night\", \n    \"cloudy\", \n    \"rain\", \n    \"snow\", \n    \"sleet\", \n    \"wind\", \n    \"fog\", \n    \"showers-day\", \n    \"showers-night\", \n    \"thunder-rain\", \n    \"thunder-showers-day\", \n    \"thunder-showers-night\"\n  ];\n\nconst loadIcons = (async () => {\n    const iconPromises = iconKeys.map((key) => {\n        return __webpack_require__(\"./src/svgs lazy recursive ^\\\\.\\\\/.*\\\\.svg$\")(`./${key}.svg`)\n        .then((module) => {\n            weatherIcons[key] = module.default;  // Store the imported icon (SVG)\n        })\n        .catch(err => {\n            console.error(`Error loading icon for ${key}:`, err);\n            weatherIcons[key] = null;  // Optionally handle the absence of the icon\n        });\n    })\n\n    await Promise.all(iconPromises)\n})()\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ }),

/***/ "./src/svgs lazy recursive ^\\.\\/.*\\.svg$":
/*!*******************************************************!*\
  !*** ./src/svgs/ lazy ^\.\/.*\.svg$ namespace object ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./clear-day.svg\": [\n\t\t\"./src/svgs/clear-day.svg\",\n\t\t\"src_svgs_clear-day_svg\"\n\t],\n\t\"./clear-night.svg\": [\n\t\t\"./src/svgs/clear-night.svg\",\n\t\t\"src_svgs_clear-night_svg\"\n\t],\n\t\"./cloudy-day-1.svg\": [\n\t\t\"./src/svgs/cloudy-day-1.svg\",\n\t\t\"src_svgs_cloudy-day-1_svg\"\n\t],\n\t\"./cloudy-day-2.svg\": [\n\t\t\"./src/svgs/cloudy-day-2.svg\",\n\t\t\"src_svgs_cloudy-day-2_svg\"\n\t],\n\t\"./cloudy-day-3.svg\": [\n\t\t\"./src/svgs/cloudy-day-3.svg\",\n\t\t\"src_svgs_cloudy-day-3_svg\"\n\t],\n\t\"./cloudy-night-1.svg\": [\n\t\t\"./src/svgs/cloudy-night-1.svg\",\n\t\t\"src_svgs_cloudy-night-1_svg\"\n\t],\n\t\"./cloudy-night-2.svg\": [\n\t\t\"./src/svgs/cloudy-night-2.svg\",\n\t\t\"src_svgs_cloudy-night-2_svg\"\n\t],\n\t\"./cloudy-night-3.svg\": [\n\t\t\"./src/svgs/cloudy-night-3.svg\",\n\t\t\"src_svgs_cloudy-night-3_svg\"\n\t],\n\t\"./cloudy-original.svg\": [\n\t\t\"./src/svgs/cloudy-original.svg\",\n\t\t\"src_svgs_cloudy-original_svg\"\n\t],\n\t\"./cloudy.svg\": [\n\t\t\"./src/svgs/cloudy.svg\",\n\t\t\"src_svgs_cloudy_svg\"\n\t],\n\t\"./day.svg\": [\n\t\t\"./src/svgs/day.svg\",\n\t\t\"src_svgs_day_svg\"\n\t],\n\t\"./fair-day.svg\": [\n\t\t\"./src/svgs/fair-day.svg\",\n\t\t\"src_svgs_fair-day_svg\"\n\t],\n\t\"./fair-night.svg\": [\n\t\t\"./src/svgs/fair-night.svg\",\n\t\t\"src_svgs_fair-night_svg\"\n\t],\n\t\"./fog.svg\": [\n\t\t\"./src/svgs/fog.svg\",\n\t\t\"src_svgs_fog_svg\"\n\t],\n\t\"./haze.svg\": [\n\t\t\"./src/svgs/haze.svg\",\n\t\t\"src_svgs_haze_svg\"\n\t],\n\t\"./hurricane.svg\": [\n\t\t\"./src/svgs/hurricane.svg\",\n\t\t\"src_svgs_hurricane_svg\"\n\t],\n\t\"./isolated-thunderstorms.svg\": [\n\t\t\"./src/svgs/isolated-thunderstorms.svg\",\n\t\t\"src_svgs_isolated-thunderstorms_svg\"\n\t],\n\t\"./night.svg\": [\n\t\t\"./src/svgs/night.svg\",\n\t\t\"src_svgs_night_svg\"\n\t],\n\t\"./partly-cloudy-day.svg\": [\n\t\t\"./src/svgs/partly-cloudy-day.svg\",\n\t\t\"src_svgs_partly-cloudy-day_svg\"\n\t],\n\t\"./partly-cloudy-night.svg\": [\n\t\t\"./src/svgs/partly-cloudy-night.svg\",\n\t\t\"src_svgs_partly-cloudy-night_svg\"\n\t],\n\t\"./rain-and-sleet-mix.svg\": [\n\t\t\"./src/svgs/rain-and-sleet-mix.svg\",\n\t\t\"src_svgs_rain-and-sleet-mix_svg\"\n\t],\n\t\"./rain-and-snow-mix.svg\": [\n\t\t\"./src/svgs/rain-and-snow-mix.svg\",\n\t\t\"src_svgs_rain-and-snow-mix_svg\"\n\t],\n\t\"./rain.svg\": [\n\t\t\"./src/svgs/rain.svg\",\n\t\t\"src_svgs_rain_svg\"\n\t],\n\t\"./rainy-1.svg\": [\n\t\t\"./src/svgs/rainy-1.svg\",\n\t\t\"src_svgs_rainy-1_svg\"\n\t],\n\t\"./rainy-2.svg\": [\n\t\t\"./src/svgs/rainy-2.svg\",\n\t\t\"src_svgs_rainy-2_svg\"\n\t],\n\t\"./rainy-3.svg\": [\n\t\t\"./src/svgs/rainy-3.svg\",\n\t\t\"src_svgs_rainy-3_svg\"\n\t],\n\t\"./rainy-4.svg\": [\n\t\t\"./src/svgs/rainy-4.svg\",\n\t\t\"src_svgs_rainy-4_svg\"\n\t],\n\t\"./rainy-5.svg\": [\n\t\t\"./src/svgs/rainy-5.svg\",\n\t\t\"src_svgs_rainy-5_svg\"\n\t],\n\t\"./rainy-6.svg\": [\n\t\t\"./src/svgs/rainy-6.svg\",\n\t\t\"src_svgs_rainy-6_svg\"\n\t],\n\t\"./rainy-7.svg\": [\n\t\t\"./src/svgs/rainy-7.svg\",\n\t\t\"src_svgs_rainy-7_svg\"\n\t],\n\t\"./scattered-thunderstorms.svg\": [\n\t\t\"./src/svgs/scattered-thunderstorms.svg\",\n\t\t\"src_svgs_scattered-thunderstorms_svg\"\n\t],\n\t\"./severe-thunderstorm.svg\": [\n\t\t\"./src/svgs/severe-thunderstorm.svg\",\n\t\t\"src_svgs_severe-thunderstorm_svg\"\n\t],\n\t\"./showers-day.svg\": [\n\t\t\"./src/svgs/showers-day.svg\",\n\t\t\"src_svgs_showers-day_svg\"\n\t],\n\t\"./showers-night.svg\": [\n\t\t\"./src/svgs/showers-night.svg\",\n\t\t\"src_svgs_showers-night_svg\"\n\t],\n\t\"./sleet.svg\": [\n\t\t\"./src/svgs/sleet.svg\",\n\t\t\"src_svgs_sleet_svg\"\n\t],\n\t\"./snow-and-sleet-mix.svg\": [\n\t\t\"./src/svgs/snow-and-sleet-mix.svg\",\n\t\t\"src_svgs_snow-and-sleet-mix_svg\"\n\t],\n\t\"./snow.svg\": [\n\t\t\"./src/svgs/snow.svg\",\n\t\t\"src_svgs_snow_svg\"\n\t],\n\t\"./snowy-1.svg\": [\n\t\t\"./src/svgs/snowy-1.svg\",\n\t\t\"src_svgs_snowy-1_svg\"\n\t],\n\t\"./snowy-2.svg\": [\n\t\t\"./src/svgs/snowy-2.svg\",\n\t\t\"src_svgs_snowy-2_svg\"\n\t],\n\t\"./snowy-3.svg\": [\n\t\t\"./src/svgs/snowy-3.svg\",\n\t\t\"src_svgs_snowy-3_svg\"\n\t],\n\t\"./snowy-4.svg\": [\n\t\t\"./src/svgs/snowy-4.svg\",\n\t\t\"src_svgs_snowy-4_svg\"\n\t],\n\t\"./snowy-5.svg\": [\n\t\t\"./src/svgs/snowy-5.svg\",\n\t\t\"src_svgs_snowy-5_svg\"\n\t],\n\t\"./snowy-6.svg\": [\n\t\t\"./src/svgs/snowy-6.svg\",\n\t\t\"src_svgs_snowy-6_svg\"\n\t],\n\t\"./sunny-day.svg\": [\n\t\t\"./src/svgs/sunny-day.svg\",\n\t\t\"src_svgs_sunny-day_svg\"\n\t],\n\t\"./sunny-night.svg\": [\n\t\t\"./src/svgs/sunny-night.svg\",\n\t\t\"src_svgs_sunny-night_svg\"\n\t],\n\t\"./thunder-rain.svg\": [\n\t\t\"./src/svgs/thunder-rain.svg\",\n\t\t\"src_svgs_thunder-rain_svg\"\n\t],\n\t\"./thunder-showers-day.svg\": [\n\t\t\"./src/svgs/thunder-showers-day.svg\",\n\t\t\"src_svgs_thunder-showers-day_svg\"\n\t],\n\t\"./thunder-showers-night.svg\": [\n\t\t\"./src/svgs/thunder-showers-night.svg\",\n\t\t\"src_svgs_thunder-showers-night_svg\"\n\t],\n\t\"./tornado.svg\": [\n\t\t\"./src/svgs/tornado.svg\",\n\t\t\"src_svgs_tornado_svg\"\n\t],\n\t\"./tropical-storm.svg\": [\n\t\t\"./src/svgs/tropical-storm.svg\",\n\t\t\"src_svgs_tropical-storm_svg\"\n\t],\n\t\"./weather-sprite.svg\": [\n\t\t\"./src/svgs/weather-sprite.svg\",\n\t\t\"src_svgs_weather-sprite_svg\"\n\t],\n\t\"./weather.svg\": [\n\t\t\"./src/svgs/weather.svg\",\n\t\t\"src_svgs_weather_svg\"\n\t],\n\t\"./weather_sagittarius.svg\": [\n\t\t\"./src/svgs/weather_sagittarius.svg\",\n\t\t\"src_svgs_weather_sagittarius_svg\"\n\t],\n\t\"./weather_sunset.svg\": [\n\t\t\"./src/svgs/weather_sunset.svg\",\n\t\t\"src_svgs_weather_sunset_svg\"\n\t],\n\t\"./wind.svg\": [\n\t\t\"./src/svgs/wind.svg\",\n\t\t\"src_svgs_wind_svg\"\n\t]\n};\nfunction webpackAsyncContext(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\treturn Promise.resolve().then(() => {\n\t\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\t\te.code = 'MODULE_NOT_FOUND';\n\t\t\tthrow e;\n\t\t});\n\t}\n\n\tvar ids = map[req], id = ids[0];\n\treturn __webpack_require__.e(ids[1]).then(() => {\n\t\treturn __webpack_require__.t(id, 1 | 16);\n\t});\n}\nwebpackAsyncContext.keys = () => (Object.keys(map));\nwebpackAsyncContext.id = \"./src/svgs lazy recursive ^\\\\.\\\\/.*\\\\.svg$\";\nmodule.exports = webpackAsyncContext;\n\n//# sourceURL=webpack:///./src/svgs/_lazy_^\\.\\/.*\\.svg$_namespace_object?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".main.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		// data-webpack is not used as build has no uniqueName
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 		
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;