module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/* global Dicoogle */

	var MyPlugin = function () {
	    function MyPlugin() {
	        _classCallCheck(this, MyPlugin);
	    }
	    // TODO initialize plugin here


	    /** 
	     * @param {DOMElement} parent
	     * @param {DOMElement} slot
	     */


	    _createClass(MyPlugin, [{
	        key: 'render',
	        value: function render(parent, slot) {
	            // TODO mount a new web component here
	            var div = document.createElement('div');
	            div.innerHTML = 'Image Compression Converter';

	            var div2 = document.createElement('div');
	            var h1 = document.createElement('h1');
	            var btn = document.createElement('button');
	            btn.innerHTML = "Upload Image";
	            div2.appendChild(h1);
	            div2.appendChild(btn);

	            var div1 = document.createElement('div');
	            var h = document.createElement('h1');
	            var sel = document.createElement('select');
	            var option1 = document.createElement('option');
	            var option2 = document.createElement('option');
	            var option3 = document.createElement('option');
	            var option4 = document.createElement('option');
	            var option5 = document.createElement('option');
	            var option6 = document.createElement('option');
	            option1.innerHTML = "RAW";
	            option2.innerHTML = "JPEG Lossy";
	            option3.innerHTML = "JPEG Lossless";
	            option4.innerHTML = "JPEG 2000";
	            option5.innerHTML = "MPEG2";
	            option6.innerHTML = "MPEG4";
	            sel.appendChild(option1);
	            sel.appendChild(option2);
	            sel.appendChild(option3);
	            sel.appendChild(option4);
	            sel.appendChild(option5);
	            sel.appendChild(option6);
	            var btn1 = document.createElement('button');
	            btn1.innerHTML = "Compression";
	            div1.appendChild(h1);
	            div1.appendChild(sel);
	            div1.appendChild(btn1);

	            var div4 = document.createElement('div');
	            var hp = document.createElement('h1');
	            div4.appendChild(hp);

	            var div3 = document.createElement('div');
	            var btn2 = document.createElement('button');
	            btn2.innerHTML = "Download Image Converted";
	            div3.appendChild(btn2);

	            parent.appendChild(div);
	            parent.appendChild(div2);
	            parent.appendChild(div1);
	            parent.appendChild(div4);
	            parent.appendChild(div3);
	        }
	    }]);

	    return MyPlugin;
	}();

	exports.default = MyPlugin;

/***/ })
/******/ ]);