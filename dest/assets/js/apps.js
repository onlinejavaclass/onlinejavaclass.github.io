webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(8);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactRouterDom = __webpack_require__(18);
	
	var _reactRouterDom2 = _interopRequireDefault(_reactRouterDom);
	
	var _blogRegisterServiceWorker = __webpack_require__(50);
	
	var _blogRegisterServiceWorker2 = _interopRequireDefault(_blogRegisterServiceWorker);
	
	var _blogHandlersAppHandlerJs = __webpack_require__(51);
	
	var _blogHandlersAppHandlerJs2 = _interopRequireDefault(_blogHandlersAppHandlerJs);
	
	var _reactRouterDomModulesNavLink = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-router-dom/modules/NavLink\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _reactRouterDomModulesNavLink2 = _interopRequireDefault(_reactRouterDomModulesNavLink);
	
	var _reactRouterDom3 = _interopRequireDefault(_reactRouterDom);
	
	var _blogHandlersAboutHandler = __webpack_require__(53);
	
	var _blogHandlersAboutHandler2 = _interopRequireDefault(_blogHandlersAboutHandler);
	
	var _reactRouterDom4 = _interopRequireDefault(_reactRouterDom);
	
	var routing = _react2['default'].createElement(_reactRouterDom2['default'], null, _react2['default'].createElement('div', null, _react2['default'].createElement('ul', null, _react2['default'].createElement('li', null, _react2['default'].createElement(_reactRouterDomModulesNavLink2['default'], { exact: true, activeClassName: 'active', to: '/' }, 'Home')), _react2['default'].createElement('li', null, _react2['default'].createElement(_reactRouterDomModulesNavLink2['default'], { activeClassName: 'active', to: '/about' }, 'About'))), _react2['default'].createElement('hr', null), _react2['default'].createElement(_reactRouterDom3['default'], null, _react2['default'].createElement(_reactRouterDom4['default'], { exact: true, path: '/', component: _blogHandlersAppHandlerJs2['default'] }), _react2['default'].createElement(_reactRouterDom4['default'], { path: '/about', component: _blogHandlersAboutHandler2['default'] }))));
	
	_reactDom2['default'].render(routing, document.getElementById("app"));
	
	(0, _blogRegisterServiceWorker2['default'])();

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";
	
	if (process.env.NODE_ENV === "production") {
	  module.exports = __webpack_require__(19);
	} else {
	  module.exports = __webpack_require__(49);
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var reactRouter=__webpack_require__(20),React=_interopDefault(__webpack_require__(1)),history=__webpack_require__(46);__webpack_require__(22),__webpack_require__(37);var invariant=_interopDefault(__webpack_require__(38));function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}function _inheritsLoose(e,t){e.prototype=Object.create(t.prototype),(e.prototype.constructor=e).__proto__=t}function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],0<=t.indexOf(r)||(n[r]=e[r]);return n}var BrowserRouter=function(n){function e(){for(var e,t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return(e=n.call.apply(n,[this].concat(r))||this).history=history.createBrowserHistory(e.props),e}return _inheritsLoose(e,n),e.prototype.render=function(){return React.createElement(reactRouter.Router,{history:this.history,children:this.props.children})},e}(React.Component),HashRouter=function(n){function e(){for(var e,t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return(e=n.call.apply(n,[this].concat(r))||this).history=history.createHashHistory(e.props),e}return _inheritsLoose(e,n),e.prototype.render=function(){return React.createElement(reactRouter.Router,{history:this.history,children:this.props.children})},e}(React.Component),resolveToLocation=function(e,t){return"function"==typeof e?e(t):e},normalizeToLocation=function(e,t){return"string"==typeof e?history.createLocation(e,null,null,t):e},forwardRefShim=function(e){return e},forwardRef=React.forwardRef;function isModifiedEvent(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}void 0===forwardRef&&(forwardRef=forwardRefShim);var LinkAnchor=forwardRef(function(e,t){var r=e.innerRef,o=e.navigate,n=e.onClick,a=_objectWithoutPropertiesLoose(e,["innerRef","navigate","onClick"]),i=a.target,c=_extends({},a,{onClick:function(t){try{n&&n(t)}catch(e){throw t.preventDefault(),e}t.defaultPrevented||0!==t.button||i&&"_self"!==i||isModifiedEvent(t)||(t.preventDefault(),o())}});return c.ref=forwardRefShim!==forwardRef&&t||r,React.createElement("a",c)}),Link=forwardRef(function(e,a){var t=e.component,i=void 0===t?LinkAnchor:t,c=e.replace,u=e.to,s=e.innerRef,f=_objectWithoutPropertiesLoose(e,["component","replace","to","innerRef"]);return React.createElement(reactRouter.__RouterContext.Consumer,null,function(t){t||invariant(!1);var r=t.history,e=normalizeToLocation(resolveToLocation(u,t.location),t.location),o=e?r.createHref(e):"",n=_extends({},f,{href:o,navigate:function(){var e=resolveToLocation(u,t.location);(c?r.replace:r.push)(e)}});return forwardRefShim!==forwardRef?n.ref=a||s:n.innerRef=s,React.createElement(i,n)})}),forwardRefShim$1=function(e){return e},forwardRef$1=React.forwardRef;function joinClassnames(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter(function(e){return e}).join(" ")}void 0===forwardRef$1&&(forwardRef$1=forwardRefShim$1);var NavLink=forwardRef$1(function(e,f){var t=e["aria-current"],l=void 0===t?"page":t,r=e.activeClassName,p=void 0===r?"active":r,R=e.activeStyle,h=e.className,d=e.exact,y=e.isActive,m=e.location,v=e.sensitive,b=e.strict,w=e.style,x=e.to,g=e.innerRef,P=_objectWithoutPropertiesLoose(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return React.createElement(reactRouter.__RouterContext.Consumer,null,function(e){e||invariant(!1);var t=m||e.location,r=normalizeToLocation(resolveToLocation(x,t),t),o=r.pathname,n=o&&o.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),a=n?reactRouter.matchPath(t.pathname,{path:n,exact:d,sensitive:v,strict:b}):null,i=!!(y?y(a,t):a),c=i?joinClassnames(h,p):h,u=i?_extends({},w,{},R):w,s=_extends({"aria-current":i&&l||null,className:c,style:u,to:r},P);return forwardRefShim$1!==forwardRef$1?s.ref=f||g:s.innerRef=g,React.createElement(Link,s)})});Object.defineProperty(exports,"MemoryRouter",{enumerable:!0,get:function(){return reactRouter.MemoryRouter}}),Object.defineProperty(exports,"Prompt",{enumerable:!0,get:function(){return reactRouter.Prompt}}),Object.defineProperty(exports,"Redirect",{enumerable:!0,get:function(){return reactRouter.Redirect}}),Object.defineProperty(exports,"Route",{enumerable:!0,get:function(){return reactRouter.Route}}),Object.defineProperty(exports,"Router",{enumerable:!0,get:function(){return reactRouter.Router}}),Object.defineProperty(exports,"StaticRouter",{enumerable:!0,get:function(){return reactRouter.StaticRouter}}),Object.defineProperty(exports,"Switch",{enumerable:!0,get:function(){return reactRouter.Switch}}),Object.defineProperty(exports,"generatePath",{enumerable:!0,get:function(){return reactRouter.generatePath}}),Object.defineProperty(exports,"matchPath",{enumerable:!0,get:function(){return reactRouter.matchPath}}),Object.defineProperty(exports,"useHistory",{enumerable:!0,get:function(){return reactRouter.useHistory}}),Object.defineProperty(exports,"useLocation",{enumerable:!0,get:function(){return reactRouter.useLocation}}),Object.defineProperty(exports,"useParams",{enumerable:!0,get:function(){return reactRouter.useParams}}),Object.defineProperty(exports,"useRouteMatch",{enumerable:!0,get:function(){return reactRouter.useRouteMatch}}),Object.defineProperty(exports,"withRouter",{enumerable:!0,get:function(){return reactRouter.withRouter}}),exports.BrowserRouter=BrowserRouter,exports.HashRouter=HashRouter,exports.Link=Link,exports.NavLink=NavLink;
	//# sourceMappingURL=react-router-dom.min.js.map


/***/ }),
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	if (process.env.NODE_ENV === 'production') {
	  module.exports = __webpack_require__(47);
	} else {
	  module.exports = __webpack_require__(48);
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";function _interopDefault(t){return t&&"object"==typeof t&&"default"in t?t.default:t}Object.defineProperty(exports,"__esModule",{value:!0});var resolvePathname=_interopDefault(__webpack_require__(31)),valueEqual=_interopDefault(__webpack_require__(34));__webpack_require__(37);var invariant=_interopDefault(__webpack_require__(38));function _extends(){return(_extends=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}return t}).apply(this,arguments)}function addLeadingSlash(t){return"/"===t.charAt(0)?t:"/"+t}function stripLeadingSlash(t){return"/"===t.charAt(0)?t.substr(1):t}function hasBasename(t,n){return 0===t.toLowerCase().indexOf(n.toLowerCase())&&-1!=="/?#".indexOf(t.charAt(n.length))}function stripBasename(t,n){return hasBasename(t,n)?t.substr(n.length):t}function stripTrailingSlash(t){return"/"===t.charAt(t.length-1)?t.slice(0,-1):t}function parsePath(t){var n=t||"/",e="",a="",r=n.indexOf("#");-1!==r&&(a=n.substr(r),n=n.substr(0,r));var o=n.indexOf("?");return-1!==o&&(e=n.substr(o),n=n.substr(0,o)),{pathname:n,search:"?"===e?"":e,hash:"#"===a?"":a}}function createPath(t){var n=t.pathname,e=t.search,a=t.hash,r=n||"/";return e&&"?"!==e&&(r+="?"===e.charAt(0)?e:"?"+e),a&&"#"!==a&&(r+="#"===a.charAt(0)?a:"#"+a),r}function createLocation(t,n,e,a){var r;"string"==typeof t?(r=parsePath(t)).state=n:(void 0===(r=_extends({},t)).pathname&&(r.pathname=""),r.search?"?"!==r.search.charAt(0)&&(r.search="?"+r.search):r.search="",r.hash?"#"!==r.hash.charAt(0)&&(r.hash="#"+r.hash):r.hash="",void 0!==n&&void 0===r.state&&(r.state=n));try{r.pathname=decodeURI(r.pathname)}catch(t){throw t instanceof URIError?new URIError('Pathname "'+r.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):t}return e&&(r.key=e),a?r.pathname?"/"!==r.pathname.charAt(0)&&(r.pathname=resolvePathname(r.pathname,a.pathname)):r.pathname=a.pathname:r.pathname||(r.pathname="/"),r}function locationsAreEqual(t,n){return t.pathname===n.pathname&&t.search===n.search&&t.hash===n.hash&&t.key===n.key&&valueEqual(t.state,n.state)}function createTransitionManager(){var o=null;var a=[];return{setPrompt:function(t){return o=t,function(){o===t&&(o=null)}},confirmTransitionTo:function(t,n,e,a){if(null!=o){var r="function"==typeof o?o(t,n):o;"string"==typeof r?"function"==typeof e?e(r,a):a(!0):a(!1!==r)}else a(!0)},appendListener:function(t){var n=!0;function e(){n&&t.apply(void 0,arguments)}return a.push(e),function(){n=!1,a=a.filter(function(t){return t!==e})}},notifyListeners:function(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];a.forEach(function(t){return t.apply(void 0,n)})}}}var canUseDOM=!("undefined"==typeof window||!window.document||!window.document.createElement);function getConfirmation(t,n){n(window.confirm(t))}function supportsHistory(){var t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&(window.history&&"pushState"in window.history)}function supportsPopStateOnHashChange(){return-1===window.navigator.userAgent.indexOf("Trident")}function supportsGoWithoutReloadUsingHash(){return-1===window.navigator.userAgent.indexOf("Firefox")}function isExtraneousPopstateEvent(t){return void 0===t.state&&-1===navigator.userAgent.indexOf("CriOS")}var PopStateEvent="popstate",HashChangeEvent="hashchange";function getHistoryState(){try{return window.history.state||{}}catch(t){return{}}}function createBrowserHistory(t){void 0===t&&(t={}),canUseDOM||invariant(!1);var s=window.history,c=supportsHistory(),n=!supportsPopStateOnHashChange(),e=t,a=e.forceRefresh,h=void 0!==a&&a,r=e.getUserConfirmation,u=void 0===r?getConfirmation:r,o=e.keyLength,i=void 0===o?6:o,f=t.basename?stripTrailingSlash(addLeadingSlash(t.basename)):"";function l(t){var n=t||{},e=n.key,a=n.state,r=window.location,o=r.pathname+r.search+r.hash;return f&&(o=stripBasename(o,f)),createLocation(o,a,e)}function d(){return Math.random().toString(36).substr(2,i)}var v=createTransitionManager();function p(t){_extends(T,t),T.length=s.length,v.notifyListeners(T.location,T.action)}function g(t){isExtraneousPopstateEvent(t)||w(l(t.state))}function P(){w(l(getHistoryState()))}var m=!1;function w(n){if(m)m=!1,p();else{v.confirmTransitionTo(n,"POP",u,function(t){t?p({action:"POP",location:n}):function(t){var n=T.location,e=H.indexOf(n.key);-1===e&&(e=0);var a=H.indexOf(t.key);-1===a&&(a=0);var r=e-a;r&&(m=!0,L(r))}(n)})}}var y=l(getHistoryState()),H=[y.key];function x(t){return f+createPath(t)}function L(t){s.go(t)}var O=0;function E(t){1===(O+=t)&&1===t?(window.addEventListener(PopStateEvent,g),n&&window.addEventListener(HashChangeEvent,P)):0===O&&(window.removeEventListener(PopStateEvent,g),n&&window.removeEventListener(HashChangeEvent,P))}var S=!1;var T={length:s.length,action:"POP",location:y,createHref:x,push:function(t,n){var i=createLocation(t,n,d(),T.location);v.confirmTransitionTo(i,"PUSH",u,function(t){if(t){var n=x(i),e=i.key,a=i.state;if(c)if(s.pushState({key:e,state:a},null,n),h)window.location.href=n;else{var r=H.indexOf(T.location.key),o=H.slice(0,r+1);o.push(i.key),H=o,p({action:"PUSH",location:i})}else window.location.href=n}})},replace:function(t,n){var o="REPLACE",i=createLocation(t,n,d(),T.location);v.confirmTransitionTo(i,o,u,function(t){if(t){var n=x(i),e=i.key,a=i.state;if(c)if(s.replaceState({key:e,state:a},null,n),h)window.location.replace(n);else{var r=H.indexOf(T.location.key);-1!==r&&(H[r]=i.key),p({action:o,location:i})}else window.location.replace(n)}})},go:L,goBack:function(){L(-1)},goForward:function(){L(1)},block:function(t){void 0===t&&(t=!1);var n=v.setPrompt(t);return S||(E(1),S=!0),function(){return S&&(S=!1,E(-1)),n()}},listen:function(t){var n=v.appendListener(t);return E(1),function(){E(-1),n()}}};return T}var HashChangeEvent$1="hashchange",HashPathCoders={hashbang:{encodePath:function(t){return"!"===t.charAt(0)?t:"!/"+stripLeadingSlash(t)},decodePath:function(t){return"!"===t.charAt(0)?t.substr(1):t}},noslash:{encodePath:stripLeadingSlash,decodePath:addLeadingSlash},slash:{encodePath:addLeadingSlash,decodePath:addLeadingSlash}};function stripHash(t){var n=t.indexOf("#");return-1===n?t:t.slice(0,n)}function getHashPath(){var t=window.location.href,n=t.indexOf("#");return-1===n?"":t.substring(n+1)}function pushHashPath(t){window.location.hash=t}function replaceHashPath(t){window.location.replace(stripHash(window.location.href)+"#"+t)}function createHashHistory(t){void 0===t&&(t={}),canUseDOM||invariant(!1);var n=window.history,e=(supportsGoWithoutReloadUsingHash(),t),a=e.getUserConfirmation,i=void 0===a?getConfirmation:a,r=e.hashType,o=void 0===r?"slash":r,s=t.basename?stripTrailingSlash(addLeadingSlash(t.basename)):"",c=HashPathCoders[o],h=c.encodePath,u=c.decodePath;function f(){var t=u(getHashPath());return s&&(t=stripBasename(t,s)),createLocation(t)}var l=createTransitionManager();function d(t){_extends(E,t),E.length=n.length,l.notifyListeners(E.location,E.action)}var v=!1,p=null;function g(){var t=getHashPath(),n=h(t);if(t!==n)replaceHashPath(n);else{var e=f(),a=E.location;if(!v&&function(t,n){return t.pathname===n.pathname&&t.search===n.search&&t.hash===n.hash}(a,e))return;if(p===createPath(e))return;p=null,function(n){if(v)v=!1,d();else{l.confirmTransitionTo(n,"POP",i,function(t){t?d({action:"POP",location:n}):function(t){var n=E.location,e=y.lastIndexOf(createPath(n));-1===e&&(e=0);var a=y.lastIndexOf(createPath(t));-1===a&&(a=0);var r=e-a;r&&(v=!0,H(r))}(n)})}}(e)}}var P=getHashPath(),m=h(P);P!==m&&replaceHashPath(m);var w=f(),y=[createPath(w)];function H(t){n.go(t)}var x=0;function L(t){1===(x+=t)&&1===t?window.addEventListener(HashChangeEvent$1,g):0===x&&window.removeEventListener(HashChangeEvent$1,g)}var O=!1;var E={length:n.length,action:"POP",location:w,createHref:function(t){var n=document.querySelector("base"),e="";return n&&n.getAttribute("href")&&(e=stripHash(window.location.href)),e+"#"+h(s+createPath(t))},push:function(t,n){var o=createLocation(t,void 0,void 0,E.location);l.confirmTransitionTo(o,"PUSH",i,function(t){if(t){var n=createPath(o),e=h(s+n);if(getHashPath()!==e){p=n,pushHashPath(e);var a=y.lastIndexOf(createPath(E.location)),r=y.slice(0,a+1);r.push(n),y=r,d({action:"PUSH",location:o})}else d()}})},replace:function(t,n){var r="REPLACE",o=createLocation(t,void 0,void 0,E.location);l.confirmTransitionTo(o,r,i,function(t){if(t){var n=createPath(o),e=h(s+n);getHashPath()!==e&&(p=n,replaceHashPath(e));var a=y.indexOf(createPath(E.location));-1!==a&&(y[a]=n),d({action:r,location:o})}})},go:H,goBack:function(){H(-1)},goForward:function(){H(1)},block:function(t){void 0===t&&(t=!1);var n=l.setPrompt(t);return O||(L(1),O=!0),function(){return O&&(O=!1,L(-1)),n()}},listen:function(t){var n=l.appendListener(t);return L(1),function(){L(-1),n()}}};return E}function clamp(t,n,e){return Math.min(Math.max(t,n),e)}function createMemoryHistory(t){void 0===t&&(t={});var n=t,r=n.getUserConfirmation,e=n.initialEntries,a=void 0===e?["/"]:e,o=n.initialIndex,i=void 0===o?0:o,s=n.keyLength,c=void 0===s?6:s,h=createTransitionManager();function u(t){_extends(g,t),g.length=g.entries.length,h.notifyListeners(g.location,g.action)}function f(){return Math.random().toString(36).substr(2,c)}var l=clamp(i,0,a.length-1),d=a.map(function(t){return createLocation(t,void 0,"string"==typeof t?f():t.key||f())}),v=createPath;function p(t){var n=clamp(g.index+t,0,g.entries.length-1),e=g.entries[n];h.confirmTransitionTo(e,"POP",r,function(t){t?u({action:"POP",location:e,index:n}):u()})}var g={length:d.length,action:"POP",location:d[l],index:l,entries:d,createHref:v,push:function(t,n){var a=createLocation(t,n,f(),g.location);h.confirmTransitionTo(a,"PUSH",r,function(t){if(t){var n=g.index+1,e=g.entries.slice(0);e.length>n?e.splice(n,e.length-n,a):e.push(a),u({action:"PUSH",location:a,index:n,entries:e})}})},replace:function(t,n){var e="REPLACE",a=createLocation(t,n,f(),g.location);h.confirmTransitionTo(a,e,r,function(t){t&&(g.entries[g.index]=a,u({action:e,location:a}))})},go:p,goBack:function(){p(-1)},goForward:function(){p(1)},canGo:function(t){var n=g.index+t;return 0<=n&&n<g.entries.length},block:function(t){return void 0===t&&(t=!1),h.setPrompt(t)},listen:function(t){return h.appendListener(t)}};return g}exports.createBrowserHistory=createBrowserHistory,exports.createHashHistory=createHashHistory,exports.createMemoryHistory=createMemoryHistory,exports.createLocation=createLocation,exports.locationsAreEqual=locationsAreEqual,exports.parsePath=parsePath,exports.createPath=createPath;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', { value: true });
	
	function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }
	
	var resolvePathname = _interopDefault(__webpack_require__(31));
	var valueEqual = _interopDefault(__webpack_require__(34));
	var warning = _interopDefault(__webpack_require__(37));
	var invariant = _interopDefault(__webpack_require__(38));
	
	function _extends() {
	  _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];
	
	      for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }
	
	    return target;
	  };
	
	  return _extends.apply(this, arguments);
	}
	
	function addLeadingSlash(path) {
	  return path.charAt(0) === '/' ? path : '/' + path;
	}
	function stripLeadingSlash(path) {
	  return path.charAt(0) === '/' ? path.substr(1) : path;
	}
	function hasBasename(path, prefix) {
	  return path.toLowerCase().indexOf(prefix.toLowerCase()) === 0 && '/?#'.indexOf(path.charAt(prefix.length)) !== -1;
	}
	function stripBasename(path, prefix) {
	  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
	}
	function stripTrailingSlash(path) {
	  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
	}
	function parsePath(path) {
	  var pathname = path || '/';
	  var search = '';
	  var hash = '';
	  var hashIndex = pathname.indexOf('#');
	
	  if (hashIndex !== -1) {
	    hash = pathname.substr(hashIndex);
	    pathname = pathname.substr(0, hashIndex);
	  }
	
	  var searchIndex = pathname.indexOf('?');
	
	  if (searchIndex !== -1) {
	    search = pathname.substr(searchIndex);
	    pathname = pathname.substr(0, searchIndex);
	  }
	
	  return {
	    pathname: pathname,
	    search: search === '?' ? '' : search,
	    hash: hash === '#' ? '' : hash
	  };
	}
	function createPath(location) {
	  var pathname = location.pathname,
	      search = location.search,
	      hash = location.hash;
	  var path = pathname || '/';
	  if (search && search !== '?') path += search.charAt(0) === '?' ? search : "?" + search;
	  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : "#" + hash;
	  return path;
	}
	
	function createLocation(path, state, key, currentLocation) {
	  var location;
	
	  if (typeof path === 'string') {
	    // Two-arg form: push(path, state)
	    location = parsePath(path);
	    location.state = state;
	  } else {
	    // One-arg form: push(location)
	    location = _extends({}, path);
	    if (location.pathname === undefined) location.pathname = '';
	
	    if (location.search) {
	      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
	    } else {
	      location.search = '';
	    }
	
	    if (location.hash) {
	      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
	    } else {
	      location.hash = '';
	    }
	
	    if (state !== undefined && location.state === undefined) location.state = state;
	  }
	
	  try {
	    location.pathname = decodeURI(location.pathname);
	  } catch (e) {
	    if (e instanceof URIError) {
	      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
	    } else {
	      throw e;
	    }
	  }
	
	  if (key) location.key = key;
	
	  if (currentLocation) {
	    // Resolve incomplete/relative pathname relative to current location.
	    if (!location.pathname) {
	      location.pathname = currentLocation.pathname;
	    } else if (location.pathname.charAt(0) !== '/') {
	      location.pathname = resolvePathname(location.pathname, currentLocation.pathname);
	    }
	  } else {
	    // When there is no prior location and pathname is empty, set it to /
	    if (!location.pathname) {
	      location.pathname = '/';
	    }
	  }
	
	  return location;
	}
	function locationsAreEqual(a, b) {
	  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && valueEqual(a.state, b.state);
	}
	
	function createTransitionManager() {
	  var prompt = null;
	
	  function setPrompt(nextPrompt) {
	    warning(prompt == null, 'A history supports only one prompt at a time');
	    prompt = nextPrompt;
	    return function () {
	      if (prompt === nextPrompt) prompt = null;
	    };
	  }
	
	  function confirmTransitionTo(location, action, getUserConfirmation, callback) {
	    // TODO: If another transition starts while we're still confirming
	    // the previous one, we may end up in a weird state. Figure out the
	    // best way to handle this.
	    if (prompt != null) {
	      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;
	
	      if (typeof result === 'string') {
	        if (typeof getUserConfirmation === 'function') {
	          getUserConfirmation(result, callback);
	        } else {
	          warning(false, 'A history needs a getUserConfirmation function in order to use a prompt message');
	          callback(true);
	        }
	      } else {
	        // Return false from a transition hook to cancel the transition.
	        callback(result !== false);
	      }
	    } else {
	      callback(true);
	    }
	  }
	
	  var listeners = [];
	
	  function appendListener(fn) {
	    var isActive = true;
	
	    function listener() {
	      if (isActive) fn.apply(void 0, arguments);
	    }
	
	    listeners.push(listener);
	    return function () {
	      isActive = false;
	      listeners = listeners.filter(function (item) {
	        return item !== listener;
	      });
	    };
	  }
	
	  function notifyListeners() {
	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    listeners.forEach(function (listener) {
	      return listener.apply(void 0, args);
	    });
	  }
	
	  return {
	    setPrompt: setPrompt,
	    confirmTransitionTo: confirmTransitionTo,
	    appendListener: appendListener,
	    notifyListeners: notifyListeners
	  };
	}
	
	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
	function getConfirmation(message, callback) {
	  callback(window.confirm(message)); // eslint-disable-line no-alert
	}
	/**
	 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
	 *
	 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
	 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
	 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
	 */
	
	function supportsHistory() {
	  var ua = window.navigator.userAgent;
	  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;
	  return window.history && 'pushState' in window.history;
	}
	/**
	 * Returns true if browser fires popstate on hash change.
	 * IE10 and IE11 do not.
	 */
	
	function supportsPopStateOnHashChange() {
	  return window.navigator.userAgent.indexOf('Trident') === -1;
	}
	/**
	 * Returns false if using go(n) with hash history causes a full page reload.
	 */
	
	function supportsGoWithoutReloadUsingHash() {
	  return window.navigator.userAgent.indexOf('Firefox') === -1;
	}
	/**
	 * Returns true if a given popstate event is an extraneous WebKit event.
	 * Accounts for the fact that Chrome on iOS fires real popstate events
	 * containing undefined state when pressing the back button.
	 */
	
	function isExtraneousPopstateEvent(event) {
	  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
	}
	
	var PopStateEvent = 'popstate';
	var HashChangeEvent = 'hashchange';
	
	function getHistoryState() {
	  try {
	    return window.history.state || {};
	  } catch (e) {
	    // IE 11 sometimes throws when accessing window.history.state
	    // See https://github.com/ReactTraining/history/pull/289
	    return {};
	  }
	}
	/**
	 * Creates a history object that uses the HTML5 history API including
	 * pushState, replaceState, and the popstate event.
	 */
	
	
	function createBrowserHistory(props) {
	  if (props === void 0) {
	    props = {};
	  }
	
	  !canUseDOM ? invariant(false, 'Browser history needs a DOM') : void 0;
	  var globalHistory = window.history;
	  var canUseHistory = supportsHistory();
	  var needsHashChangeListener = !supportsPopStateOnHashChange();
	  var _props = props,
	      _props$forceRefresh = _props.forceRefresh,
	      forceRefresh = _props$forceRefresh === void 0 ? false : _props$forceRefresh,
	      _props$getUserConfirm = _props.getUserConfirmation,
	      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
	      _props$keyLength = _props.keyLength,
	      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
	  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';
	
	  function getDOMLocation(historyState) {
	    var _ref = historyState || {},
	        key = _ref.key,
	        state = _ref.state;
	
	    var _window$location = window.location,
	        pathname = _window$location.pathname,
	        search = _window$location.search,
	        hash = _window$location.hash;
	    var path = pathname + search + hash;
	    warning(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');
	    if (basename) path = stripBasename(path, basename);
	    return createLocation(path, state, key);
	  }
	
	  function createKey() {
	    return Math.random().toString(36).substr(2, keyLength);
	  }
	
	  var transitionManager = createTransitionManager();
	
	  function setState(nextState) {
	    _extends(history, nextState);
	
	    history.length = globalHistory.length;
	    transitionManager.notifyListeners(history.location, history.action);
	  }
	
	  function handlePopState(event) {
	    // Ignore extraneous popstate events in WebKit.
	    if (isExtraneousPopstateEvent(event)) return;
	    handlePop(getDOMLocation(event.state));
	  }
	
	  function handleHashChange() {
	    handlePop(getDOMLocation(getHistoryState()));
	  }
	
	  var forceNextPop = false;
	
	  function handlePop(location) {
	    if (forceNextPop) {
	      forceNextPop = false;
	      setState();
	    } else {
	      var action = 'POP';
	      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	        if (ok) {
	          setState({
	            action: action,
	            location: location
	          });
	        } else {
	          revertPop(location);
	        }
	      });
	    }
	  }
	
	  function revertPop(fromLocation) {
	    var toLocation = history.location; // TODO: We could probably make this more reliable by
	    // keeping a list of keys we've seen in sessionStorage.
	    // Instead, we just default to 0 for keys we don't know.
	
	    var toIndex = allKeys.indexOf(toLocation.key);
	    if (toIndex === -1) toIndex = 0;
	    var fromIndex = allKeys.indexOf(fromLocation.key);
	    if (fromIndex === -1) fromIndex = 0;
	    var delta = toIndex - fromIndex;
	
	    if (delta) {
	      forceNextPop = true;
	      go(delta);
	    }
	  }
	
	  var initialLocation = getDOMLocation(getHistoryState());
	  var allKeys = [initialLocation.key]; // Public interface
	
	  function createHref(location) {
	    return basename + createPath(location);
	  }
	
	  function push(path, state) {
	    warning(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');
	    var action = 'PUSH';
	    var location = createLocation(path, state, createKey(), history.location);
	    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	      if (!ok) return;
	      var href = createHref(location);
	      var key = location.key,
	          state = location.state;
	
	      if (canUseHistory) {
	        globalHistory.pushState({
	          key: key,
	          state: state
	        }, null, href);
	
	        if (forceRefresh) {
	          window.location.href = href;
	        } else {
	          var prevIndex = allKeys.indexOf(history.location.key);
	          var nextKeys = allKeys.slice(0, prevIndex + 1);
	          nextKeys.push(location.key);
	          allKeys = nextKeys;
	          setState({
	            action: action,
	            location: location
	          });
	        }
	      } else {
	        warning(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history');
	        window.location.href = href;
	      }
	    });
	  }
	
	  function replace(path, state) {
	    warning(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');
	    var action = 'REPLACE';
	    var location = createLocation(path, state, createKey(), history.location);
	    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	      if (!ok) return;
	      var href = createHref(location);
	      var key = location.key,
	          state = location.state;
	
	      if (canUseHistory) {
	        globalHistory.replaceState({
	          key: key,
	          state: state
	        }, null, href);
	
	        if (forceRefresh) {
	          window.location.replace(href);
	        } else {
	          var prevIndex = allKeys.indexOf(history.location.key);
	          if (prevIndex !== -1) allKeys[prevIndex] = location.key;
	          setState({
	            action: action,
	            location: location
	          });
	        }
	      } else {
	        warning(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history');
	        window.location.replace(href);
	      }
	    });
	  }
	
	  function go(n) {
	    globalHistory.go(n);
	  }
	
	  function goBack() {
	    go(-1);
	  }
	
	  function goForward() {
	    go(1);
	  }
	
	  var listenerCount = 0;
	
	  function checkDOMListeners(delta) {
	    listenerCount += delta;
	
	    if (listenerCount === 1 && delta === 1) {
	      window.addEventListener(PopStateEvent, handlePopState);
	      if (needsHashChangeListener) window.addEventListener(HashChangeEvent, handleHashChange);
	    } else if (listenerCount === 0) {
	      window.removeEventListener(PopStateEvent, handlePopState);
	      if (needsHashChangeListener) window.removeEventListener(HashChangeEvent, handleHashChange);
	    }
	  }
	
	  var isBlocked = false;
	
	  function block(prompt) {
	    if (prompt === void 0) {
	      prompt = false;
	    }
	
	    var unblock = transitionManager.setPrompt(prompt);
	
	    if (!isBlocked) {
	      checkDOMListeners(1);
	      isBlocked = true;
	    }
	
	    return function () {
	      if (isBlocked) {
	        isBlocked = false;
	        checkDOMListeners(-1);
	      }
	
	      return unblock();
	    };
	  }
	
	  function listen(listener) {
	    var unlisten = transitionManager.appendListener(listener);
	    checkDOMListeners(1);
	    return function () {
	      checkDOMListeners(-1);
	      unlisten();
	    };
	  }
	
	  var history = {
	    length: globalHistory.length,
	    action: 'POP',
	    location: initialLocation,
	    createHref: createHref,
	    push: push,
	    replace: replace,
	    go: go,
	    goBack: goBack,
	    goForward: goForward,
	    block: block,
	    listen: listen
	  };
	  return history;
	}
	
	var HashChangeEvent$1 = 'hashchange';
	var HashPathCoders = {
	  hashbang: {
	    encodePath: function encodePath(path) {
	      return path.charAt(0) === '!' ? path : '!/' + stripLeadingSlash(path);
	    },
	    decodePath: function decodePath(path) {
	      return path.charAt(0) === '!' ? path.substr(1) : path;
	    }
	  },
	  noslash: {
	    encodePath: stripLeadingSlash,
	    decodePath: addLeadingSlash
	  },
	  slash: {
	    encodePath: addLeadingSlash,
	    decodePath: addLeadingSlash
	  }
	};
	
	function stripHash(url) {
	  var hashIndex = url.indexOf('#');
	  return hashIndex === -1 ? url : url.slice(0, hashIndex);
	}
	
	function getHashPath() {
	  // We can't use window.location.hash here because it's not
	  // consistent across browsers - Firefox will pre-decode it!
	  var href = window.location.href;
	  var hashIndex = href.indexOf('#');
	  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
	}
	
	function pushHashPath(path) {
	  window.location.hash = path;
	}
	
	function replaceHashPath(path) {
	  window.location.replace(stripHash(window.location.href) + '#' + path);
	}
	
	function createHashHistory(props) {
	  if (props === void 0) {
	    props = {};
	  }
	
	  !canUseDOM ? invariant(false, 'Hash history needs a DOM') : void 0;
	  var globalHistory = window.history;
	  var canGoWithoutReload = supportsGoWithoutReloadUsingHash();
	  var _props = props,
	      _props$getUserConfirm = _props.getUserConfirmation,
	      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
	      _props$hashType = _props.hashType,
	      hashType = _props$hashType === void 0 ? 'slash' : _props$hashType;
	  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';
	  var _HashPathCoders$hashT = HashPathCoders[hashType],
	      encodePath = _HashPathCoders$hashT.encodePath,
	      decodePath = _HashPathCoders$hashT.decodePath;
	
	  function getDOMLocation() {
	    var path = decodePath(getHashPath());
	    warning(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');
	    if (basename) path = stripBasename(path, basename);
	    return createLocation(path);
	  }
	
	  var transitionManager = createTransitionManager();
	
	  function setState(nextState) {
	    _extends(history, nextState);
	
	    history.length = globalHistory.length;
	    transitionManager.notifyListeners(history.location, history.action);
	  }
	
	  var forceNextPop = false;
	  var ignorePath = null;
	
	  function locationsAreEqual$$1(a, b) {
	    return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash;
	  }
	
	  function handleHashChange() {
	    var path = getHashPath();
	    var encodedPath = encodePath(path);
	
	    if (path !== encodedPath) {
	      // Ensure we always have a properly-encoded hash.
	      replaceHashPath(encodedPath);
	    } else {
	      var location = getDOMLocation();
	      var prevLocation = history.location;
	      if (!forceNextPop && locationsAreEqual$$1(prevLocation, location)) return; // A hashchange doesn't always == location change.
	
	      if (ignorePath === createPath(location)) return; // Ignore this change; we already setState in push/replace.
	
	      ignorePath = null;
	      handlePop(location);
	    }
	  }
	
	  function handlePop(location) {
	    if (forceNextPop) {
	      forceNextPop = false;
	      setState();
	    } else {
	      var action = 'POP';
	      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	        if (ok) {
	          setState({
	            action: action,
	            location: location
	          });
	        } else {
	          revertPop(location);
	        }
	      });
	    }
	  }
	
	  function revertPop(fromLocation) {
	    var toLocation = history.location; // TODO: We could probably make this more reliable by
	    // keeping a list of paths we've seen in sessionStorage.
	    // Instead, we just default to 0 for paths we don't know.
	
	    var toIndex = allPaths.lastIndexOf(createPath(toLocation));
	    if (toIndex === -1) toIndex = 0;
	    var fromIndex = allPaths.lastIndexOf(createPath(fromLocation));
	    if (fromIndex === -1) fromIndex = 0;
	    var delta = toIndex - fromIndex;
	
	    if (delta) {
	      forceNextPop = true;
	      go(delta);
	    }
	  } // Ensure the hash is encoded properly before doing anything else.
	
	
	  var path = getHashPath();
	  var encodedPath = encodePath(path);
	  if (path !== encodedPath) replaceHashPath(encodedPath);
	  var initialLocation = getDOMLocation();
	  var allPaths = [createPath(initialLocation)]; // Public interface
	
	  function createHref(location) {
	    var baseTag = document.querySelector('base');
	    var href = '';
	
	    if (baseTag && baseTag.getAttribute('href')) {
	      href = stripHash(window.location.href);
	    }
	
	    return href + '#' + encodePath(basename + createPath(location));
	  }
	
	  function push(path, state) {
	    warning(state === undefined, 'Hash history cannot push state; it is ignored');
	    var action = 'PUSH';
	    var location = createLocation(path, undefined, undefined, history.location);
	    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	      if (!ok) return;
	      var path = createPath(location);
	      var encodedPath = encodePath(basename + path);
	      var hashChanged = getHashPath() !== encodedPath;
	
	      if (hashChanged) {
	        // We cannot tell if a hashchange was caused by a PUSH, so we'd
	        // rather setState here and ignore the hashchange. The caveat here
	        // is that other hash histories in the page will consider it a POP.
	        ignorePath = path;
	        pushHashPath(encodedPath);
	        var prevIndex = allPaths.lastIndexOf(createPath(history.location));
	        var nextPaths = allPaths.slice(0, prevIndex + 1);
	        nextPaths.push(path);
	        allPaths = nextPaths;
	        setState({
	          action: action,
	          location: location
	        });
	      } else {
	        warning(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack');
	        setState();
	      }
	    });
	  }
	
	  function replace(path, state) {
	    warning(state === undefined, 'Hash history cannot replace state; it is ignored');
	    var action = 'REPLACE';
	    var location = createLocation(path, undefined, undefined, history.location);
	    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	      if (!ok) return;
	      var path = createPath(location);
	      var encodedPath = encodePath(basename + path);
	      var hashChanged = getHashPath() !== encodedPath;
	
	      if (hashChanged) {
	        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
	        // rather setState here and ignore the hashchange. The caveat here
	        // is that other hash histories in the page will consider it a POP.
	        ignorePath = path;
	        replaceHashPath(encodedPath);
	      }
	
	      var prevIndex = allPaths.indexOf(createPath(history.location));
	      if (prevIndex !== -1) allPaths[prevIndex] = path;
	      setState({
	        action: action,
	        location: location
	      });
	    });
	  }
	
	  function go(n) {
	    warning(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser');
	    globalHistory.go(n);
	  }
	
	  function goBack() {
	    go(-1);
	  }
	
	  function goForward() {
	    go(1);
	  }
	
	  var listenerCount = 0;
	
	  function checkDOMListeners(delta) {
	    listenerCount += delta;
	
	    if (listenerCount === 1 && delta === 1) {
	      window.addEventListener(HashChangeEvent$1, handleHashChange);
	    } else if (listenerCount === 0) {
	      window.removeEventListener(HashChangeEvent$1, handleHashChange);
	    }
	  }
	
	  var isBlocked = false;
	
	  function block(prompt) {
	    if (prompt === void 0) {
	      prompt = false;
	    }
	
	    var unblock = transitionManager.setPrompt(prompt);
	
	    if (!isBlocked) {
	      checkDOMListeners(1);
	      isBlocked = true;
	    }
	
	    return function () {
	      if (isBlocked) {
	        isBlocked = false;
	        checkDOMListeners(-1);
	      }
	
	      return unblock();
	    };
	  }
	
	  function listen(listener) {
	    var unlisten = transitionManager.appendListener(listener);
	    checkDOMListeners(1);
	    return function () {
	      checkDOMListeners(-1);
	      unlisten();
	    };
	  }
	
	  var history = {
	    length: globalHistory.length,
	    action: 'POP',
	    location: initialLocation,
	    createHref: createHref,
	    push: push,
	    replace: replace,
	    go: go,
	    goBack: goBack,
	    goForward: goForward,
	    block: block,
	    listen: listen
	  };
	  return history;
	}
	
	function clamp(n, lowerBound, upperBound) {
	  return Math.min(Math.max(n, lowerBound), upperBound);
	}
	/**
	 * Creates a history object that stores locations in memory.
	 */
	
	
	function createMemoryHistory(props) {
	  if (props === void 0) {
	    props = {};
	  }
	
	  var _props = props,
	      getUserConfirmation = _props.getUserConfirmation,
	      _props$initialEntries = _props.initialEntries,
	      initialEntries = _props$initialEntries === void 0 ? ['/'] : _props$initialEntries,
	      _props$initialIndex = _props.initialIndex,
	      initialIndex = _props$initialIndex === void 0 ? 0 : _props$initialIndex,
	      _props$keyLength = _props.keyLength,
	      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
	  var transitionManager = createTransitionManager();
	
	  function setState(nextState) {
	    _extends(history, nextState);
	
	    history.length = history.entries.length;
	    transitionManager.notifyListeners(history.location, history.action);
	  }
	
	  function createKey() {
	    return Math.random().toString(36).substr(2, keyLength);
	  }
	
	  var index = clamp(initialIndex, 0, initialEntries.length - 1);
	  var entries = initialEntries.map(function (entry) {
	    return typeof entry === 'string' ? createLocation(entry, undefined, createKey()) : createLocation(entry, undefined, entry.key || createKey());
	  }); // Public interface
	
	  var createHref = createPath;
	
	  function push(path, state) {
	    warning(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');
	    var action = 'PUSH';
	    var location = createLocation(path, state, createKey(), history.location);
	    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	      if (!ok) return;
	      var prevIndex = history.index;
	      var nextIndex = prevIndex + 1;
	      var nextEntries = history.entries.slice(0);
	
	      if (nextEntries.length > nextIndex) {
	        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
	      } else {
	        nextEntries.push(location);
	      }
	
	      setState({
	        action: action,
	        location: location,
	        index: nextIndex,
	        entries: nextEntries
	      });
	    });
	  }
	
	  function replace(path, state) {
	    warning(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');
	    var action = 'REPLACE';
	    var location = createLocation(path, state, createKey(), history.location);
	    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	      if (!ok) return;
	      history.entries[history.index] = location;
	      setState({
	        action: action,
	        location: location
	      });
	    });
	  }
	
	  function go(n) {
	    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);
	    var action = 'POP';
	    var location = history.entries[nextIndex];
	    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	      if (ok) {
	        setState({
	          action: action,
	          location: location,
	          index: nextIndex
	        });
	      } else {
	        // Mimic the behavior of DOM histories by
	        // causing a render after a cancelled POP.
	        setState();
	      }
	    });
	  }
	
	  function goBack() {
	    go(-1);
	  }
	
	  function goForward() {
	    go(1);
	  }
	
	  function canGo(n) {
	    var nextIndex = history.index + n;
	    return nextIndex >= 0 && nextIndex < history.entries.length;
	  }
	
	  function block(prompt) {
	    if (prompt === void 0) {
	      prompt = false;
	    }
	
	    return transitionManager.setPrompt(prompt);
	  }
	
	  function listen(listener) {
	    return transitionManager.appendListener(listener);
	  }
	
	  var history = {
	    length: entries.length,
	    action: 'POP',
	    location: entries[index],
	    index: index,
	    entries: entries,
	    createHref: createHref,
	    push: push,
	    replace: replace,
	    go: go,
	    goBack: goBack,
	    goForward: goForward,
	    canGo: canGo,
	    block: block,
	    listen: listen
	  };
	  return history;
	}
	
	exports.createBrowserHistory = createBrowserHistory;
	exports.createHashHistory = createHashHistory;
	exports.createMemoryHistory = createMemoryHistory;
	exports.createLocation = createLocation;
	exports.locationsAreEqual = locationsAreEqual;
	exports.parsePath = parsePath;
	exports.createPath = createPath;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }
	
	var reactRouter = __webpack_require__(20);
	var React = _interopDefault(__webpack_require__(1));
	var history = __webpack_require__(46);
	var PropTypes = _interopDefault(__webpack_require__(22));
	var warning = _interopDefault(__webpack_require__(37));
	var invariant = _interopDefault(__webpack_require__(38));
	
	function _extends() {
	  _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];
	
	      for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }
	
	    return target;
	  };
	
	  return _extends.apply(this, arguments);
	}
	
	function _inheritsLoose(subClass, superClass) {
	  subClass.prototype = Object.create(superClass.prototype);
	  subClass.prototype.constructor = subClass;
	  subClass.__proto__ = superClass;
	}
	
	function _objectWithoutPropertiesLoose(source, excluded) {
	  if (source == null) return {};
	  var target = {};
	  var sourceKeys = Object.keys(source);
	  var key, i;
	
	  for (i = 0; i < sourceKeys.length; i++) {
	    key = sourceKeys[i];
	    if (excluded.indexOf(key) >= 0) continue;
	    target[key] = source[key];
	  }
	
	  return target;
	}
	
	/**
	 * The public API for a <Router> that uses HTML5 history.
	 */
	
	var BrowserRouter =
	/*#__PURE__*/
	function (_React$Component) {
	  _inheritsLoose(BrowserRouter, _React$Component);
	
	  function BrowserRouter() {
	    var _this;
	
	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
	    _this.history = history.createBrowserHistory(_this.props);
	    return _this;
	  }
	
	  var _proto = BrowserRouter.prototype;
	
	  _proto.render = function render() {
	    return React.createElement(reactRouter.Router, {
	      history: this.history,
	      children: this.props.children
	    });
	  };
	
	  return BrowserRouter;
	}(React.Component);
	
	{
	  BrowserRouter.propTypes = {
	    basename: PropTypes.string,
	    children: PropTypes.node,
	    forceRefresh: PropTypes.bool,
	    getUserConfirmation: PropTypes.func,
	    keyLength: PropTypes.number
	  };
	
	  BrowserRouter.prototype.componentDidMount = function () {
	     warning(!this.props.history, "<BrowserRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { BrowserRouter as Router }`.") ;
	  };
	}
	
	/**
	 * The public API for a <Router> that uses window.location.hash.
	 */
	
	var HashRouter =
	/*#__PURE__*/
	function (_React$Component) {
	  _inheritsLoose(HashRouter, _React$Component);
	
	  function HashRouter() {
	    var _this;
	
	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
	    _this.history = history.createHashHistory(_this.props);
	    return _this;
	  }
	
	  var _proto = HashRouter.prototype;
	
	  _proto.render = function render() {
	    return React.createElement(reactRouter.Router, {
	      history: this.history,
	      children: this.props.children
	    });
	  };
	
	  return HashRouter;
	}(React.Component);
	
	{
	  HashRouter.propTypes = {
	    basename: PropTypes.string,
	    children: PropTypes.node,
	    getUserConfirmation: PropTypes.func,
	    hashType: PropTypes.oneOf(["hashbang", "noslash", "slash"])
	  };
	
	  HashRouter.prototype.componentDidMount = function () {
	     warning(!this.props.history, "<HashRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { HashRouter as Router }`.") ;
	  };
	}
	
	var resolveToLocation = function resolveToLocation(to, currentLocation) {
	  return typeof to === "function" ? to(currentLocation) : to;
	};
	var normalizeToLocation = function normalizeToLocation(to, currentLocation) {
	  return typeof to === "string" ? history.createLocation(to, null, null, currentLocation) : to;
	};
	
	var forwardRefShim = function forwardRefShim(C) {
	  return C;
	};
	
	var forwardRef = React.forwardRef;
	
	if (typeof forwardRef === "undefined") {
	  forwardRef = forwardRefShim;
	}
	
	function isModifiedEvent(event) {
	  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
	}
	
	var LinkAnchor = forwardRef(function (_ref, forwardedRef) {
	  var innerRef = _ref.innerRef,
	      navigate = _ref.navigate,
	      _onClick = _ref.onClick,
	      rest = _objectWithoutPropertiesLoose(_ref, ["innerRef", "navigate", "onClick"]);
	
	  var target = rest.target;
	
	  var props = _extends({}, rest, {
	    onClick: function onClick(event) {
	      try {
	        if (_onClick) _onClick(event);
	      } catch (ex) {
	        event.preventDefault();
	        throw ex;
	      }
	
	      if (!event.defaultPrevented && // onClick prevented default
	      event.button === 0 && ( // ignore everything but left clicks
	      !target || target === "_self") && // let browser handle "target=_blank" etc.
	      !isModifiedEvent(event) // ignore clicks with modifier keys
	      ) {
	          event.preventDefault();
	          navigate();
	        }
	    }
	  }); // React 15 compat
	
	
	  if (forwardRefShim !== forwardRef) {
	    props.ref = forwardedRef || innerRef;
	  } else {
	    props.ref = innerRef;
	  }
	  /* eslint-disable-next-line jsx-a11y/anchor-has-content */
	
	
	  return React.createElement("a", props);
	});
	
	{
	  LinkAnchor.displayName = "LinkAnchor";
	}
	/**
	 * The public API for rendering a history-aware <a>.
	 */
	
	
	var Link = forwardRef(function (_ref2, forwardedRef) {
	  var _ref2$component = _ref2.component,
	      component = _ref2$component === void 0 ? LinkAnchor : _ref2$component,
	      replace = _ref2.replace,
	      to = _ref2.to,
	      innerRef = _ref2.innerRef,
	      rest = _objectWithoutPropertiesLoose(_ref2, ["component", "replace", "to", "innerRef"]);
	
	  return React.createElement(reactRouter.__RouterContext.Consumer, null, function (context) {
	    !context ?  invariant(false, "You should not use <Link> outside a <Router>")  : void 0;
	    var history = context.history;
	    var location = normalizeToLocation(resolveToLocation(to, context.location), context.location);
	    var href = location ? history.createHref(location) : "";
	
	    var props = _extends({}, rest, {
	      href: href,
	      navigate: function navigate() {
	        var location = resolveToLocation(to, context.location);
	        var method = replace ? history.replace : history.push;
	        method(location);
	      }
	    }); // React 15 compat
	
	
	    if (forwardRefShim !== forwardRef) {
	      props.ref = forwardedRef || innerRef;
	    } else {
	      props.innerRef = innerRef;
	    }
	
	    return React.createElement(component, props);
	  });
	});
	
	{
	  var toType = PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.func]);
	  var refType = PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.shape({
	    current: PropTypes.any
	  })]);
	  Link.displayName = "Link";
	  Link.propTypes = {
	    innerRef: refType,
	    onClick: PropTypes.func,
	    replace: PropTypes.bool,
	    target: PropTypes.string,
	    to: toType.isRequired
	  };
	}
	
	var forwardRefShim$1 = function forwardRefShim(C) {
	  return C;
	};
	
	var forwardRef$1 = React.forwardRef;
	
	if (typeof forwardRef$1 === "undefined") {
	  forwardRef$1 = forwardRefShim$1;
	}
	
	function joinClassnames() {
	  for (var _len = arguments.length, classnames = new Array(_len), _key = 0; _key < _len; _key++) {
	    classnames[_key] = arguments[_key];
	  }
	
	  return classnames.filter(function (i) {
	    return i;
	  }).join(" ");
	}
	/**
	 * A <Link> wrapper that knows if it's "active" or not.
	 */
	
	
	var NavLink = forwardRef$1(function (_ref, forwardedRef) {
	  var _ref$ariaCurrent = _ref["aria-current"],
	      ariaCurrent = _ref$ariaCurrent === void 0 ? "page" : _ref$ariaCurrent,
	      _ref$activeClassName = _ref.activeClassName,
	      activeClassName = _ref$activeClassName === void 0 ? "active" : _ref$activeClassName,
	      activeStyle = _ref.activeStyle,
	      classNameProp = _ref.className,
	      exact = _ref.exact,
	      isActiveProp = _ref.isActive,
	      locationProp = _ref.location,
	      sensitive = _ref.sensitive,
	      strict = _ref.strict,
	      styleProp = _ref.style,
	      to = _ref.to,
	      innerRef = _ref.innerRef,
	      rest = _objectWithoutPropertiesLoose(_ref, ["aria-current", "activeClassName", "activeStyle", "className", "exact", "isActive", "location", "sensitive", "strict", "style", "to", "innerRef"]);
	
	  return React.createElement(reactRouter.__RouterContext.Consumer, null, function (context) {
	    !context ?  invariant(false, "You should not use <NavLink> outside a <Router>")  : void 0;
	    var currentLocation = locationProp || context.location;
	    var toLocation = normalizeToLocation(resolveToLocation(to, currentLocation), currentLocation);
	    var path = toLocation.pathname; // Regex taken from: https://github.com/pillarjs/path-to-regexp/blob/master/index.js#L202
	
	    var escapedPath = path && path.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
	    var match = escapedPath ? reactRouter.matchPath(currentLocation.pathname, {
	      path: escapedPath,
	      exact: exact,
	      sensitive: sensitive,
	      strict: strict
	    }) : null;
	    var isActive = !!(isActiveProp ? isActiveProp(match, currentLocation) : match);
	    var className = isActive ? joinClassnames(classNameProp, activeClassName) : classNameProp;
	    var style = isActive ? _extends({}, styleProp, {}, activeStyle) : styleProp;
	
	    var props = _extends({
	      "aria-current": isActive && ariaCurrent || null,
	      className: className,
	      style: style,
	      to: toLocation
	    }, rest); // React 15 compat
	
	
	    if (forwardRefShim$1 !== forwardRef$1) {
	      props.ref = forwardedRef || innerRef;
	    } else {
	      props.innerRef = innerRef;
	    }
	
	    return React.createElement(Link, props);
	  });
	});
	
	{
	  NavLink.displayName = "NavLink";
	  var ariaCurrentType = PropTypes.oneOf(["page", "step", "location", "date", "time", "true"]);
	  NavLink.propTypes = _extends({}, Link.propTypes, {
	    "aria-current": ariaCurrentType,
	    activeClassName: PropTypes.string,
	    activeStyle: PropTypes.object,
	    className: PropTypes.string,
	    exact: PropTypes.bool,
	    isActive: PropTypes.func,
	    location: PropTypes.object,
	    sensitive: PropTypes.bool,
	    strict: PropTypes.bool,
	    style: PropTypes.object
	  });
	}
	
	Object.defineProperty(exports, 'MemoryRouter', {
	  enumerable: true,
	  get: function () {
	    return reactRouter.MemoryRouter;
	  }
	});
	Object.defineProperty(exports, 'Prompt', {
	  enumerable: true,
	  get: function () {
	    return reactRouter.Prompt;
	  }
	});
	Object.defineProperty(exports, 'Redirect', {
	  enumerable: true,
	  get: function () {
	    return reactRouter.Redirect;
	  }
	});
	Object.defineProperty(exports, 'Route', {
	  enumerable: true,
	  get: function () {
	    return reactRouter.Route;
	  }
	});
	Object.defineProperty(exports, 'Router', {
	  enumerable: true,
	  get: function () {
	    return reactRouter.Router;
	  }
	});
	Object.defineProperty(exports, 'StaticRouter', {
	  enumerable: true,
	  get: function () {
	    return reactRouter.StaticRouter;
	  }
	});
	Object.defineProperty(exports, 'Switch', {
	  enumerable: true,
	  get: function () {
	    return reactRouter.Switch;
	  }
	});
	Object.defineProperty(exports, 'generatePath', {
	  enumerable: true,
	  get: function () {
	    return reactRouter.generatePath;
	  }
	});
	Object.defineProperty(exports, 'matchPath', {
	  enumerable: true,
	  get: function () {
	    return reactRouter.matchPath;
	  }
	});
	Object.defineProperty(exports, 'useHistory', {
	  enumerable: true,
	  get: function () {
	    return reactRouter.useHistory;
	  }
	});
	Object.defineProperty(exports, 'useLocation', {
	  enumerable: true,
	  get: function () {
	    return reactRouter.useLocation;
	  }
	});
	Object.defineProperty(exports, 'useParams', {
	  enumerable: true,
	  get: function () {
	    return reactRouter.useParams;
	  }
	});
	Object.defineProperty(exports, 'useRouteMatch', {
	  enumerable: true,
	  get: function () {
	    return reactRouter.useRouteMatch;
	  }
	});
	Object.defineProperty(exports, 'withRouter', {
	  enumerable: true,
	  get: function () {
	    return reactRouter.withRouter;
	  }
	});
	exports.BrowserRouter = BrowserRouter;
	exports.HashRouter = HashRouter;
	exports.Link = Link;
	exports.NavLink = NavLink;
	//# sourceMappingURL=react-router-dom.js.map


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// In production, we register a service worker to serve assets from local cache.
	
	// This lets the app load faster on subsequent visits in production, and gives
	// it offline capabilities. However, it also means that developers (and users)
	// will only see deployed updates on the "N+1" visit to a page, since previously
	// cached resources are updated in the background.
	
	// To learn more about the benefits of this model, read https://goo.gl/KwvDNy.
	// This link also includes instructions on opting out of this behavior.
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports['default'] = register;
	exports.unregister = unregister;
	var isLocalhost = Boolean(window.location.hostname === 'localhost' ||
	// [::1] is the IPv6 localhost address.
	window.location.hostname === '[::1]' ||
	// 127.0.0.1/8 is considered localhost for IPv4.
	window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
	
	function register() {
	    if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
	        // The URL constructor is available in all browsers that support SW.
	        var publicUrl = new URL(process.env.PUBLIC_URL, window.location);
	        if (publicUrl.origin !== window.location.origin) {
	            // Our service worker won't work if PUBLIC_URL is on a different origin
	            // from what our page is served on. This might happen if a CDN is used to
	            // serve assets; see https://github.com/facebookincubator/create-react-app/issues/2374
	            return;
	        }
	
	        window.addEventListener('load', function () {
	            var swUrl = process.env.PUBLIC_URL + '/service-worker.js';
	
	            if (isLocalhost) {
	                // This is running on localhost. Lets check if a service worker still exists or not.
	                checkValidServiceWorker(swUrl);
	
	                // Add some additional logging to localhost, pointing developers to the
	                // service worker/PWA documentation.
	                navigator.serviceWorker.ready.then(function () {
	                    console.log('This web app is being served cache-first by a service ' + 'worker. To learn more, visit https://goo.gl/SC7cgQ');
	                });
	            } else {
	                // Is not local host. Just register service worker
	                registerValidSW(swUrl);
	            }
	        });
	    }
	}
	
	function registerValidSW(swUrl) {
	    navigator.serviceWorker.register(swUrl).then(function (registration) {
	        registration.onupdatefound = function () {
	            var installingWorker = registration.installing;
	            installingWorker.onstatechange = function () {
	                if (installingWorker.state === 'installed') {
	                    if (navigator.serviceWorker.controller) {
	                        // At this point, the old content will have been purged and
	                        // the fresh content will have been added to the cache.
	                        // It's the perfect time to display a "New content is
	                        // available; please refresh." message in your web app.
	                        console.log('New content is available; please refresh.');
	                    } else {
	                        // At this point, everything has been precached.
	                        // It's the perfect time to display a
	                        // "Content is cached for offline use." message.
	                        console.log('Content is cached for offline use.');
	                    }
	                }
	            };
	        };
	    })['catch'](function (error) {
	        console.error('Error during service worker registration:', error);
	    });
	}
	
	function checkValidServiceWorker(swUrl) {
	    // Check if the service worker can be found. If it can't reload the page.
	    fetch(swUrl).then(function (response) {
	        // Ensure service worker exists, and that we really are getting a JS file.
	        if (response.status === 404 || response.headers.get('content-type').indexOf('javascript') === -1) {
	            // No service worker found. Probably a different app. Reload the page.
	            navigator.serviceWorker.ready.then(function (registration) {
	                registration.unregister().then(function () {
	                    window.location.reload();
	                });
	            });
	        } else {
	            // Service worker found. Proceed as normal.
	            registerValidSW(swUrl);
	        }
	    })['catch'](function () {
	        console.log('No internet connection found. App is running in offline mode.');
	    });
	}
	
	function unregister() {
	    if ('serviceWorker' in navigator) {
	        navigator.serviceWorker.ready.then(function (registration) {
	            registration.unregister();
	        });
	    }
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	})();
	
	var _get = function get(_x, _x2, _x3) {
	    var _again = true;_function: while (_again) {
	        var object = _x,
	            property = _x2,
	            receiver = _x3;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	            var parent = Object.getPrototypeOf(object);if (parent === null) {
	                return undefined;
	            } else {
	                _x = parent;_x2 = property;_x3 = receiver;_again = true;desc = parent = undefined;continue _function;
	            }
	        } else if ('value' in desc) {
	            return desc.value;
	        } else {
	            var getter = desc.get;if (getter === undefined) {
	                return undefined;
	            }return getter.call(receiver);
	        }
	    }
	};
	
	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError('Cannot call a class as a function');
	    }
	}
	
	function _inherits(subClass, superClass) {
	    if (typeof superClass !== 'function' && superClass !== null) {
	        throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _FooterHandlerJs = __webpack_require__(52);
	
	var _FooterHandlerJs2 = _interopRequireDefault(_FooterHandlerJs);
	
	var _reactRouterDom = __webpack_require__(18);
	
	var _reactRouterDom2 = _interopRequireDefault(_reactRouterDom);
	
	var _AboutHandler = __webpack_require__(53);
	
	var _AboutHandler2 = _interopRequireDefault(_AboutHandler);
	
	var _TermsHandlerJs = __webpack_require__(55);
	
	var _TermsHandlerJs2 = _interopRequireDefault(_TermsHandlerJs);
	
	var _PrivacyHandlerJs = __webpack_require__(58);
	
	var _PrivacyHandlerJs2 = _interopRequireDefault(_PrivacyHandlerJs);
	
	var _ExperimentsHandlerJs = __webpack_require__(60);
	
	var _ExperimentsHandlerJs2 = _interopRequireDefault(_ExperimentsHandlerJs);
	
	var _ExperimentArchiveHandlerJs = __webpack_require__(82);
	
	var _ExperimentArchiveHandlerJs2 = _interopRequireDefault(_ExperimentArchiveHandlerJs);
	
	var _ExperimentTagsHandlerJs = __webpack_require__(221);
	
	var _ExperimentTagsHandlerJs2 = _interopRequireDefault(_ExperimentTagsHandlerJs);
	
	var _ExperimentHandlerJs = __webpack_require__(223);
	
	var _ExperimentHandlerJs2 = _interopRequireDefault(_ExperimentHandlerJs);
	
	var _ExperimentSearchHandlerJs = __webpack_require__(227);
	
	var _ExperimentSearchHandlerJs2 = _interopRequireDefault(_ExperimentSearchHandlerJs);
	
	var _reactRouterDom3 = _interopRequireDefault(_reactRouterDom);
	
	var _reactRouterDom4 = _interopRequireDefault(_reactRouterDom);
	
	var _componentsAbout = __webpack_require__(54);
	
	var _componentsAbout2 = _interopRequireDefault(_componentsAbout);
	
	var AppHandler = (function (_Component) {
	    _inherits(AppHandler, _Component);
	
	    function AppHandler() {
	        _classCallCheck(this, AppHandler);
	
	        _get(Object.getPrototypeOf(AppHandler.prototype), 'constructor', this).apply(this, arguments);
	    }
	
	    _createClass(AppHandler, [{
	        key: 'render',
	
	        // gtag('send', 'pageview', state.path);
	        // let sitemap = flux.getStore('appStore').getSiteMap();
	        // if (Object.getOwnPropertyNames(sitemap).length === 0) {
	        //     let appActions = flux.getActions('appActions');
	        //     await appActions.getSiteMap();
	        //     await appActions.getSearchIndex();
	        // }
	        value: function render() {
	            return _react2['default'].createElement('div', null, _react2['default'].createElement('div', { className: 'top-header' }, _react2['default'].createElement('div', { className: 'top-header-wrap-1' }, _react2['default'].createElement('div', { className: 'top-header-wrap-2' }, _react2['default'].createElement('div', { className: 'top-header-h1 z-depth-1' }, _react2['default'].createElement('span', { className: 'top-header-title' }, 'bash-3.2$ echo "Online Java Class" | tee $1')), _react2['default'].createElement('a', { className: 'face', href: '/' }, _react2['default'].createElement('img', { alt: 'avatar', className: 'avatar', src: 'assets/img/me.png' }))))), _react2['default'].createElement('div', { className: 'top-menu' }, _react2['default'].createElement('div', { className: 'top-menu-wrap-1' }, _react2['default'].createElement('div', { className: 'top-menu-wrap-2' }, _react2['default'].createElement('div', { className: 'top-menu-wrap-3' }, _react2['default'].createElement('ul', { className: 'menu pull-left' }, _react2['default'].createElement('li', { className: 'item' }, _react2['default'].createElement(_reactRouterDom.Link, { to: '/' }, _react2['default'].createElement('i', { className: 'fap fap-experiments' }), _react2['default'].createElement('div', { className: 'text' }, 'Articles')))), _react2['default'].createElement('ul', { className: 'menu pull-right' }, _react2['default'].createElement('li', { className: 'item' }, _react2['default'].createElement('a', { href: 'mailto:contact@onlinejavaclass.com' }, _react2['default'].createElement('i', { className: 'fap fap-mail' }), _react2['default'].createElement('div', { className: 'text' }, 'Mail'))), _react2['default'].createElement('li', { className: 'item' }, _react2['default'].createElement('a', { href: 'https://github.com/metao1', target: '_blank' }, _react2['default'].createElement('i', { className: 'fap fap-github' }), _react2['default'].createElement('div', { className: 'text' }, 'Github'))), _react2['default'].createElement('li', { className: 'item' }, _react2['default'].createElement('a', { href: 'https://www.linkedin.com/in/allahkarami', target: '_blank' }, _react2['default'].createElement('i', { className: 'fap fap-linkedin' }), _react2['default'].createElement('div', { className: 'text' }, 'LinkedIn')))))))), _react2['default'].createElement('div', null, _react2['default'].createElement(_FooterHandlerJs2['default'], null)));
	        }
	    }], [{
	        key: 'routerWillRunOnClient',
	        value: function routerWillRunOnClient(state, flux) {
	            return regeneratorRuntime.async(function routerWillRunOnClient$(context$2$0) {
	                while (1) switch (context$2$0.prev = context$2$0.next) {
	                    case 0:
	                    case 'end':
	                        return context$2$0.stop();
	                }
	            }, null, this);
	        }
	    }]);
	
	    return AppHandler;
	})(_react.Component);
	
	exports['default'] = AppHandler;
	module.exports = exports['default'];

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	})();
	
	var _get = function get(_x, _x2, _x3) {
	    var _again = true;_function: while (_again) {
	        var object = _x,
	            property = _x2,
	            receiver = _x3;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	            var parent = Object.getPrototypeOf(object);if (parent === null) {
	                return undefined;
	            } else {
	                _x = parent;_x2 = property;_x3 = receiver;_again = true;desc = parent = undefined;continue _function;
	            }
	        } else if ("value" in desc) {
	            return desc.value;
	        } else {
	            var getter = desc.get;if (getter === undefined) {
	                return undefined;
	            }return getter.call(receiver);
	        }
	    }
	};
	
	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { "default": obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}
	
	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var _reactRouterDom = __webpack_require__(18);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var FooterHandler = (function (_Component) {
	    _inherits(FooterHandler, _Component);
	
	    function FooterHandler() {
	        _classCallCheck(this, FooterHandler);
	
	        _get(Object.getPrototypeOf(FooterHandler.prototype), "constructor", this).apply(this, arguments);
	    }
	
	    _createClass(FooterHandler, [{
	        key: "render",
	        value: function render() {
	            return _react2["default"].createElement("footer", { className: "footer-distributed" }, _react2["default"].createElement("div", { className: "footer-left" }, _react2["default"].createElement("h3", null, "Online", _react2["default"].createElement("span", null, "Java"), "Class"), _react2["default"].createElement("p", { className: "footer-company-name" }, "©Copyright 2015-2020 All rights reserved.", _react2["default"].createElement("br", null), " This blog is fully run by myself and the powerful React framework")), _react2["default"].createElement("div", { className: "footer-center" }, _react2["default"].createElement("div", null, _react2["default"].createElement(_reactRouterDom.Link, { to: "about" }, _react2["default"].createElement("i", { className: "fap fap-avatar" }), "About Me")), _react2["default"].createElement("div", null, _react2["default"].createElement(_reactRouterDom.Link, { to: "privacy" }, _react2["default"].createElement("i", { className: "fap fap-privacy" }), _react2["default"].createElement("p", null, "Privacy Policy"))), _react2["default"].createElement("div", null, _react2["default"].createElement(_reactRouterDom.Link, { to: "terms" }, _react2["default"].createElement("i", { className: "fap fap-terms" }), _react2["default"].createElement("p", null, "Terms of Use"))), _react2["default"].createElement("div", null, _react2["default"].createElement("i", { className: "fap fap-mail" }), _react2["default"].createElement("p", null, _react2["default"].createElement("a", { href: "mailto:support@company.com" }, "contact@onlinejavaclass.com")))), _react2["default"].createElement("div", { className: "footer-right" }, _react2["default"].createElement("p", { className: "footer-company-about" }, _react2["default"].createElement("span", null, "About Online Java Class"), "Online Java Class has different classes in Java for beginners and professionals."), _react2["default"].createElement("div", { className: "footer-icons" }, _react2["default"].createElement("a", { href: "#" }, _react2["default"].createElement("i", { className: "fap fap-linkedin" })), _react2["default"].createElement("a", { href: "#" }, _react2["default"].createElement("i", { className: "fap fap-github" })))));
	        }
	    }]);
	
	    return FooterHandler;
	})(_react.Component);
	
	exports["default"] = FooterHandler;
	module.exports = exports["default"];

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _componentsAboutJs = __webpack_require__(54);
	
	var _componentsAboutJs2 = _interopRequireDefault(_componentsAboutJs);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var AboutHandler = (function (_Component) {
	    _inherits(AboutHandler, _Component);
	
	    function AboutHandler() {
	        _classCallCheck(this, AboutHandler);
	
	        _get(Object.getPrototypeOf(AboutHandler.prototype), "constructor", this).apply(this, arguments);
	    }
	
	    _createClass(AboutHandler, [{
	        key: "render",
	        value: function render() {
	            return _react2["default"].createElement(
	                "div",
	                { className: "content" },
	                _react2["default"].createElement(
	                    "section",
	                    null,
	                    _react2["default"].createElement(_componentsAboutJs2["default"], { link: "/data/footer/about.md" })
	                )
	            );
	        }
	    }]);
	
	    return AboutHandler;
	})(_react.Component);
	
	exports["default"] = AboutHandler;
	module.exports = exports["default"];

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	})();
	
	var _get = function get(_x, _x2, _x3) {
	    var _again = true;_function: while (_again) {
	        var object = _x,
	            property = _x2,
	            receiver = _x3;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	            var parent = Object.getPrototypeOf(object);if (parent === null) {
	                return undefined;
	            } else {
	                _x = parent;_x2 = property;_x3 = receiver;_again = true;desc = parent = undefined;continue _function;
	            }
	        } else if ("value" in desc) {
	            return desc.value;
	        } else {
	            var getter = desc.get;if (getter === undefined) {
	                return undefined;
	            }return getter.call(receiver);
	        }
	    }
	};
	
	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { "default": obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}
	
	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var About = (function (_Component) {
	    _inherits(About, _Component);
	
	    function About(props) {
	        _classCallCheck(this, About);
	
	        _get(Object.getPrototypeOf(About.prototype), "constructor", this).call(this, props);
	        this.state = {};
	        this.getFromStore = this.getFromStore.bind(this);
	    }
	
	    _createClass(About, [{
	        key: "componentWillMount",
	        value: function componentWillMount() {
	            ////this.getFromStore();
	        }
	    }, {
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            // this.AppStore.addListener('change', this.getFromStore);
	            //this.getResource(this.props.link);
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            //// this.AppStore.removeListener('change', this.getFromStore);
	        }
	    }, {
	        key: "getFromStore",
	        value: function getFromStore() {
	            //this.setState(this.AppStore.getResource(this.props.link));
	        }
	    }, {
	        key: "getResource",
	        value: function getResource(link) {
	            // appActions.getResource({src: link, link: link})
	            //     .then(result => {
	            //         if (result && result.text) {
	            //             this.setState({text: result.text});
	            //         }
	            //     });
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            if (this.state.STORE_MISS) {
	                return _react2["default"].createElement("div", null);
	            } else {
	                return _react2["default"].createElement("div", { className: "column" }, _react2["default"].createElement("div", { className: "col-md-9" }, _react2["default"].createElement("img", { alt: "me", src: "/assets/img/me.png", className: "avatar" }), _react2["default"].createElement("div", { className: "about" }, _react2["default"].createElement("p", null, _react2["default"].createElement("b", null, "Hi, I’m Mehrdad, and I run the onlinejavaclass blog.")), _react2["default"].createElement("p", null, "I’m a software developer, consultant, architect, coach … whatever the role, I’m focused on getting software ready for production."))), _react2["default"].createElement("blockquote", { className: "center-box" }, _react2["default"].createElement("p", null, _react2["default"].createElement("strong", null, "The goal of this blog is to persist the things I learned so that you (and future me) don’t have to learn them the hard way (again)"))), _react2["default"].createElement("div", { className: "below" }, _react2["default"].createElement("p", null, "With this blog, I produce:"), _react2["default"].createElement("ul", null, _react2["default"].createElement("li", null, "deep-dive tutorials about Spring Boot"), _react2["default"].createElement("li", null, "hands-on tutorials about Java"), _react2["default"].createElement("li", null, "best practices on complex algorithms and data structure implementations with Java"), _react2["default"].createElement("li", null, "opinion on practices of the Software Craft"))), _react2["default"].createElement("div", { className: "below center-box" }, _react2["default"].createElement("p", null, "If you’re interested in working with me or have any feedback about my writing, don’t hesitate to contact me."), _react2["default"].createElement("ul", { className: "footer-social" }, _react2["default"].createElement("li", null, _react2["default"].createElement("a", { target: "_blank", title: "Follow me on LinkedIn",
	                    href: "https://www.linkedin.com/in/allahkarami",
	                    className: "follow-linkedin" }, _react2["default"].createElement("i", { className: "fap fap-linkedin" }))), _react2["default"].createElement("li", null, _react2["default"].createElement("a", { target: "_blank", title: "Follow me on GitHub",
	                    href: "https://github.com/metao1", className: "follow-github" }, _react2["default"].createElement("i", {
	                    className: "fap fap-github" }))), _react2["default"].createElement("li", null, _react2["default"].createElement("a", { target: "_blank", title: "Drop me an email",
	                    href: "mailto:contact@onlinejavaclass.com",
	                    className: "follow-email" }, _react2["default"].createElement("i", { className: "fap fap-mail" }))))));
	            }
	        }
	    }]);
	
	    return About;
	})(_react.Component);
	
	exports["default"] = About;
	module.exports = exports["default"];

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	})();
	
	var _get = function get(_x, _x2, _x3) {
	    var _again = true;_function: while (_again) {
	        var object = _x,
	            property = _x2,
	            receiver = _x3;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	            var parent = Object.getPrototypeOf(object);if (parent === null) {
	                return undefined;
	            } else {
	                _x = parent;_x2 = property;_x3 = receiver;_again = true;desc = parent = undefined;continue _function;
	            }
	        } else if ("value" in desc) {
	            return desc.value;
	        } else {
	            var getter = desc.get;if (getter === undefined) {
	                return undefined;
	            }return getter.call(receiver);
	        }
	    }
	};
	
	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { "default": obj };
	}
	
	function _interopRequireWildcard(obj) {
	    if (obj && obj.__esModule) {
	        return obj;
	    } else {
	        var newObj = {};if (obj != null) {
	            for (var key in obj) {
	                if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	            }
	        }newObj["default"] = obj;return newObj;
	    }
	}
	
	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}
	
	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var _react = __webpack_require__(1);
	
	var React = _interopRequireWildcard(_react);
	
	var _componentsTermsJs = __webpack_require__(56);
	
	var _componentsTermsJs2 = _interopRequireDefault(_componentsTermsJs);
	
	var TermsHandler = (function (_Component) {
	    _inherits(TermsHandler, _Component);
	
	    function TermsHandler() {
	        _classCallCheck(this, TermsHandler);
	
	        _get(Object.getPrototypeOf(TermsHandler.prototype), "constructor", this).apply(this, arguments);
	    }
	
	    _createClass(TermsHandler, [{
	        key: "render",
	        value: function render() {
	            return React.createElement("div", { className: "content" }, React.createElement("section", null, React.createElement(_componentsTermsJs2["default"], { link: "/data/footer/terms.md" })));
	        }
	    }]);
	
	    return TermsHandler;
	})(_react.Component);
	
	exports["default"] = TermsHandler;
	module.exports = exports["default"];

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	})();
	
	var _get = function get(_x, _x2, _x3) {
	    var _again = true;_function: while (_again) {
	        var object = _x,
	            property = _x2,
	            receiver = _x3;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	            var parent = Object.getPrototypeOf(object);if (parent === null) {
	                return undefined;
	            } else {
	                _x = parent;_x2 = property;_x3 = receiver;_again = true;desc = parent = undefined;continue _function;
	            }
	        } else if ('value' in desc) {
	            return desc.value;
	        } else {
	            var getter = desc.get;if (getter === undefined) {
	                return undefined;
	            }return getter.call(receiver);
	        }
	    }
	};
	
	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError('Cannot call a class as a function');
	    }
	}
	
	function _inherits(subClass, superClass) {
	    if (typeof superClass !== 'function' && superClass !== null) {
	        throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _onlinejavaclassMarked = __webpack_require__(57);
	
	var _onlinejavaclassMarked2 = _interopRequireDefault(_onlinejavaclassMarked);
	
	var Terms = (function (_Component) {
	    _inherits(Terms, _Component);
	
	    function Terms(props) {
	        _classCallCheck(this, Terms);
	
	        _get(Object.getPrototypeOf(Terms.prototype), 'constructor', this).call(this, props);
	        this.state = {};
	        this.getFromStore = this.getFromStore.bind(this);
	    }
	
	    _createClass(Terms, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            //this.getFromStore();
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            // this.AppStore.addListener('change', this.getFromStore);
	            this.getResource(this.props.link);
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            // this.AppStore.removeListener('change', this.getFromStore);
	        }
	    }, {
	        key: 'getFromStore',
	        value: function getFromStore() {
	            this.setState(this.AppStore.getResource(this.props.link));
	        }
	    }, {
	        key: 'getResource',
	        value: function getResource(link) {
	            var _this = this;
	
	            var appActions = this.context.flux.getActions('appActions');
	            appActions.getResource({ src: link, link: link }).then(function (result) {
	                if (result && result.text) {
	                    _this.setState({ text: result.text });
	                }
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            if (this.state.STORE_MISS) {
	                return _react2['default'].createElement('div', null);
	            } else {
	                var txt = (0, _onlinejavaclassMarked2['default'])(this.state.text);
	                return _react2['default'].createElement('div', { className: 'markdown', dangerouslySetInnerHTML: { __html: txt } });
	            }
	        }
	    }]);
	
	    return Terms;
	})(_react.Component);
	
	exports['default'] = Terms;
	module.exports = exports['default'];

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * marked - a markdown parser
	 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
	 * https://github.com/markedjs/marked
	 */
	
	;(function (root) {
	    'use strict';
	
	    /**
	     * Block-Level Grammar
	     */
	
	    var block = {
	        newline: /^\n+/,
	        code: /^( {4}[^\n]+\n*)+/,
	        fences: noop,
	        hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
	        heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
	        nptable: noop,
	        blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
	        list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
	        html: /^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,
	        def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
	        codeBlock: /^(~+)\s*([\s\S]*?[^`]?)\s*\1(?!~)/,
	        table: noop,
	        lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
	        paragraph: /^([^\n]+(?:\n?(?!hr|heading|lheading| {0,3}>|tag)[^\n]+)+)/,
	        text: /^[^\n]+/
	    };
	
	    block._label = /(?:\\[\[\]]|[^\[\]])+/;
	    block._title = /(?:"(?:\"|[^"]|"[^"\n]*")*"|'\n?(?:[^'\n]+\n?)*'|\([^()]*\))/;
	    block.def = edit(block.def)
	        .replace('label', block._label)
	        .replace('title', block._title)
	        .getRegex();
	
	    block.bullet = /(?:[*+-]|\d+\.)/;
	    block.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/;
	    block.item = edit(block.item, 'gm')
	        .replace(/bull/g, block.bullet)
	        .getRegex();
	
	    block.list = edit(block.list)
	        .replace(/bull/g, block.bullet)
	        .replace('hr', '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))')
	        .replace('def', '\\n+(?=' + block.def.source + ')')
	        .getRegex();
	
	    block._tag = '(?!(?:'
	        + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code'
	        + '|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo'
	        + '|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b';
	
	    block.html = edit(block.html)
	        .replace('comment', /<!--[\s\S]*?-->/)
	        .replace('closed', /<(tag)[\s\S]+?<\/\1>/)
	        .replace('closing', /<tag(?:"[^"]*"|'[^']*'|\s[^'"\/>\s]*)*?\/?>/)
	        .replace(/tag/g, block._tag)
	        .getRegex();
	
	    block.paragraph = edit(block.paragraph)
	        .replace('hr', block.hr)
	        .replace('heading', block.heading)
	        .replace('lheading', block.lheading)
	        .replace('tag', '<' + block._tag)
	        .getRegex();
	
	    block.blockquote = edit(block.blockquote)
	        .replace('paragraph', block.paragraph)
	        .getRegex();
	
	    /**
	     * Normal Block Grammar
	     */
	
	    block.normal = merge({}, block);
	
	    /**
	     * GFM Block Grammar
	     */
	
	    block.gfm = merge({}, block.normal, {
	        fences: /^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\n? *\1 *(?:\n+|$)/,
	        paragraph: /^/,
	        heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
	    });
	
	    block.gfm.paragraph = edit(block.paragraph)
	        .replace('(?!', '(?!'
	            + block.gfm.fences.source.replace('\\1', '\\2') + '|'
	            + block.list.source.replace('\\1', '\\3') + '|')
	        .getRegex();
	
	    /**
	     * GFM + Tables Block Grammar
	     */
	
	    block.tables = merge({}, block.gfm, {
	        nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
	        table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
	    });
	
	    /**
	     * Block Lexer
	     */
	
	    function Lexer(options) {
	        this.tokens = [];
	        this.tokens.links = {};
	        this.options = options || marked.defaults;
	        this.rules = block.normal;
	
	        if (this.options.gfm) {
	            if (this.options.tables) {
	                this.rules = block.tables;
	            } else {
	                this.rules = block.gfm;
	            }
	        }
	    }
	
	    /**
	     * Expose Block Rules
	     */
	
	    Lexer.rules = block;
	
	    /**
	     * Static Lex Method
	     */
	
	    Lexer.lex = function (src, options) {
	        var lexer = new Lexer(options);
	        return lexer.lex(src);
	    };
	
	    /**
	     * Preprocessing
	     */
	
	    Lexer.prototype.lex = function (src) {
	        src = src
	            .replace(/\r\n|\r/g, '\n')
	            .replace(/\t/g, '    ')
	            .replace(/\u00a0/g, ' ')
	            .replace(/\u2424/g, '\n');
	
	        return this.token(src, true);
	    };
	
	    /**
	     * Lexing
	     */
	
	    Lexer.prototype.token = function (src, top) {
	        src = src.replace(/^ +$/gm, '');
	        var next,
	            loose,
	            cap,
	            bull,
	            b,
	            item,
	            space,
	            i,
	            tag,
	            l,
	            isordered;
	
	        while (src) {
	            // newline
	            if (cap = this.rules.newline.exec(src)) {
	                src = src.substring(cap[0].length);
	                if (cap[0].length > 1) {
	                    this.tokens.push({
	                        type: 'space'
	                    });
	                }
	            }
	
	            // code
	            if (cap = this.rules.code.exec(src)) {
	                src = src.substring(cap[0].length);
	                cap = cap[0].replace(/^ {4}/gm, '');
	                this.tokens.push({
	                    type: 'code',
	                    text: !this.options.pedantic
	                        ? cap.replace(/\n+$/, '')
	                        : cap
	                });
	                continue;
	            }
	
	            // fences (gfm)
	            if (cap = this.rules.fences.exec(src)) {
	                src = src.substring(cap[0].length);
	                this.tokens.push({
	                    type: 'code',
	                    lang: cap[2],
	                    text: cap[3] || ''
	                });
	                continue;
	            }
	
	            // heading
	            if (cap = this.rules.heading.exec(src)) {
	                src = src.substring(cap[0].length);
	                this.tokens.push({
	                    type: 'heading',
	                    depth: cap[1].length,
	                    text: cap[2]
	                });
	                continue;
	            }
	
	            // table no leading pipe (gfm)
	            if (top && (cap = this.rules.nptable.exec(src))) {
	                src = src.substring(cap[0].length);
	
	                item = {
	                    type: 'table',
	                    header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
	                    align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
	                    cells: cap[3].replace(/\n$/, '').split('\n')
	                };
	
	                for (i = 0; i < item.align.length; i++) {
	                    if (/^ *-+: *$/.test(item.align[i])) {
	                        item.align[i] = 'right';
	                    } else if (/^ *:-+: *$/.test(item.align[i])) {
	                        item.align[i] = 'center';
	                    } else if (/^ *:-+ *$/.test(item.align[i])) {
	                        item.align[i] = 'left';
	                    } else {
	                        item.align[i] = null;
	                    }
	                }
	
	                for (i = 0; i < item.cells.length; i++) {
	                    item.cells[i] = item.cells[i].split(/ *\| */);
	                }
	
	                this.tokens.push(item);
	
	                continue;
	            }
	
	            // hr
	            if (cap = this.rules.hr.exec(src)) {
	                src = src.substring(cap[0].length);
	                this.tokens.push({
	                    type: 'hr'
	                });
	                continue;
	            }
	
	            // blockquote
	            if (cap = this.rules.blockquote.exec(src)) {
	                src = src.substring(cap[0].length);
	
	                this.tokens.push({
	                    type: 'blockquote_start'
	                });
	
	                cap = cap[0].replace(/^ *> ?/gm, '');
	
	                // Pass `top` to keep the current
	                // "toplevel" state. This is exactly
	                // how markdown.pl works.
	                this.token(cap, top);
	
	                this.tokens.push({
	                    type: 'blockquote_end'
	                });
	
	                continue;
	            }
	
	            // list
	            if (cap = this.rules.list.exec(src)) {
	                src = src.substring(cap[0].length);
	                bull = cap[2];
	                isordered = bull.length > 1;
	
	                this.tokens.push({
	                    type: 'list_start',
	                    ordered: isordered,
	                    start: isordered ? +bull : ''
	                });
	
	                // Get each top-level item.
	                cap = cap[0].match(this.rules.item);
	
	                next = false;
	                l = cap.length;
	                i = 0;
	
	                for (; i < l; i++) {
	                    item = cap[i];
	
	                    // Remove the list item's bullet
	                    // so it is seen as the next token.
	                    space = item.length;
	                    item = item.replace(/^ *([*+-]|\d+\.) +/, '');
	
	                    // Outdent whatever the
	                    // list item contains. Hacky.
	                    if (~item.indexOf('\n ')) {
	                        space -= item.length;
	                        item = !this.options.pedantic
	                            ? item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '')
	                            : item.replace(/^ {1,4}/gm, '');
	                    }
	
	                    // Determine whether the next list item belongs here.
	                    // Backpedal if it does not belong in this list.
	                    if (this.options.smartLists && i !== l - 1) {
	                        b = block.bullet.exec(cap[i + 1])[0];
	                        if (bull !== b && !(bull.length > 1 && b.length > 1)) {
	                            src = cap.slice(i + 1).join('\n') + src;
	                            i = l - 1;
	                        }
	                    }
	
	                    // Determine whether item is loose or not.
	                    // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
	                    // for discount behavior.
	                    loose = next || /\n\n(?!\s*$)/.test(item);
	                    if (i !== l - 1) {
	                        next = item.charAt(item.length - 1) === '\n';
	                        if (!loose) loose = next;
	                    }
	
	                    this.tokens.push({
	                        type: loose
	                            ? 'loose_item_start'
	                            : 'list_item_start'
	                    });
	
	                    // Recurse.
	                    this.token(item, false);
	
	                    this.tokens.push({
	                        type: 'list_item_end'
	                    });
	                }
	
	                this.tokens.push({
	                    type: 'list_end'
	                });
	
	                continue;
	            }
	
	            //code block
	            if (cap = this.rules.codeBlock.exec(src)) {
	                src = src.substring(cap[0].length);
	
	                function matchesTo(char) {
	                    return char.charCodeAt(0) === 32 ||
	                        char.charCodeAt(0) === 123 ||
	                        char.charCodeAt(0) === 59 ||
	                        char.charCodeAt(0) === 60 ||
	                        char.charCodeAt(0) === 62 ||
	                        char.charCodeAt(0) === 10 ||
	                        char.charCodeAt(0) === 40 ||
	                        char.charCodeAt(0) === 44 ||
	                        char.charCodeAt(0) === 46 ||
	                        char.charCodeAt(0) === 125 ||
	                        char.charCodeAt(0) === 38 ||
	                        char.charCodeAt(0) === 41;
	                }
	
	                function matchQuote(line) {
	                    return line.toLowerCase().match(/"(.*?)"/g);
	                }
	
	                function processLine(line) {
	                    let sentence = '';
	                    let word = '';
	
	                    for (var index = 0; (index < line.length); index++) {
	                        if (!line[index]) {
	                            continue;
	                        }
	                        word += line[index];
	                        if (matchesTo(line[index])) {
	                            word = word.substr(0, word.length - 1);
	                            if (matchQuote(word)) {
	                                word = '<span class="pun">' + word + '</span>';
	                            } else if (word.trim().match(/^[A-Z]+[\w]+$/g)) {
	                                word = '<span class="typ">' + word + '</span>';
	                            } else if (keywords.indexOf(word.trim()) !== -1) {
	                                word = '<span class="kwd">' + word + '</span>';
	                            } else {
	                                word = '<span class="pln">' + word + '</span>';
	                            }
	                            word += '<span class="pln">' + line[index] + '</span>';
	                            sentence += word;
	                            word = '';
	                        }
	                    }
	                    return sentence;
	                }
	
	                function matchesComment(line) {
	                    return (line.trim().match(/(.|[\r\n\s])*?\*\/$/g) || line.trim().match(/(\/{2})[\r\n\s]*\w*/g)) && !line.includes(":");
	                }
	
	                const keywords = ["abstract", "continue", "for", "new", "switch",
	                    "assert", "default", "goto", "package", "synchronized",
	                    "boolean", "do", "if", "private", "this",
	                    "break", "double", "implements", "protected", "throw",
	                    "byte", "else", "import", "public", "throws",
	                    "case", "enum", "instanceof", "return", "transient",
	                    "catch", "extends", "int", "short", "try",
	                    "char", "final", "interface", "static", "void",
	                    "class", "finally", "long", "strictfp", "volatile",
	                    "const", "float", "native", "super", "while"
	                ]
	                //let arr = cap[2].split(/\n+/);
	                // for (let i = -1; i++ < arr.length;) {
	                //     if (arr[i]) {
	                //         let line = arr[i];
	                //         let word = '';
	                //         let sentence = '';/**
	                //  * marked - a markdown parser
	                //  * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
	                //  * https://github.com/markedjs/marked
	                //  */
	                //
	                // ;(function (root) {
	                //     'use strict';
	                //
	                //     /**
	                //      * Block-Level Grammar
	                //      */
	                //
	                //     var block = {
	                //         newline: /^\n+/,
	                //         code: /^( {4}[^\n]+\n*)+/,
	                //         fences: noop,
	                //         hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
	                //         heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
	                //         nptable: noop,
	                //         blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
	                //         list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
	                //         html: /^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,
	                //         def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
	                //         codeBlock: /^(~+)\s*([\s\S]*?[^`]?)\s*\1(?!~)/,
	                //         table: noop,
	                //         lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
	                //         paragraph: /^([^\n]+(?:\n?(?!hr|heading|lheading| {0,3}>|tag)[^\n]+)+)/,
	                //         text: /^[^\n]+/
	                //     };
	                //
	                //     block._label = /(?:\\[\[\]]|[^\[\]])+/;
	                //     block._title = /(?:"(?:\"|[^"]|"[^"\n]*")*"|'\n?(?:[^'\n]+\n?)*'|\([^()]*\))/;
	                //     block.def = edit(block.def)
	                //         .replace('label', block._label)
	                //         .replace('title', block._title)
	                //         .getRegex();
	                //
	                //     block.bullet = /(?:[*+-]|\d+\.)/;
	                //     block.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/;
	                //     block.item = edit(block.item, 'gm')
	                //         .replace(/bull/g, block.bullet)
	                //         .getRegex();
	                //
	                //     block.list = edit(block.list)
	                //         .replace(/bull/g, block.bullet)
	                //         .replace('hr', '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))')
	                //         .replace('def', '\\n+(?=' + block.def.source + ')')
	                //         .getRegex();
	                //
	                //     block._tag = '(?!(?:'
	                //         + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code'
	                //         + '|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo'
	                //         + '|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b';
	                //
	                //     block.html = edit(block.html)
	                //         .replace('comment', /<!--[\s\S]*?-->/)
	                //         .replace('closed', /<(tag)[\s\S]+?<\/\1>/)
	                //         .replace('closing', /<tag(?:"[^"]*"|'[^']*'|\s[^'"\/>\s]*)*?\/?>/)
	                //         .replace(/tag/g, block._tag)
	                //         .getRegex();
	                //
	                //     block.paragraph = edit(block.paragraph)
	                //         .replace('hr', block.hr)
	                //         .replace('heading', block.heading)
	                //         .replace('lheading', block.lheading)
	                //         .replace('tag', '<' + block._tag)
	                //         .getRegex();
	                //
	                //     block.blockquote = edit(block.blockquote)
	                //         .replace('paragraph', block.paragraph)
	                //         .getRegex();
	                //
	                //     /**
	                //      * Normal Block Grammar
	                //      */
	                //
	                //     block.normal = merge({}, block);
	                //
	                //     /**
	                //      * GFM Block Grammar
	                //      */
	                //
	                //     block.gfm = merge({}, block.normal, {
	                //         fences: /^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\n? *\1 *(?:\n+|$)/,
	                //         paragraph: /^/,
	                //         heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
	                //     });
	                //
	                //     block.gfm.paragraph = edit(block.paragraph)
	                //         .replace('(?!', '(?!'
	                //             + block.gfm.fences.source.replace('\\1', '\\2') + '|'
	                //             + block.list.source.replace('\\1', '\\3') + '|')
	                //         .getRegex();
	                //
	                //     /**
	                //      * GFM + Tables Block Grammar
	                //      */
	                //
	                //     block.tables = merge({}, block.gfm, {
	                //         nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
	                //         table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
	                //     });
	                //
	                //     /**
	                //      * Block Lexer
	                //      */
	                //
	                //     function Lexer(options) {
	                //         this.tokens = [];
	                //         this.tokens.links = {};
	                //         this.options = options || marked.defaults;
	                //         this.rules = block.normal;
	                //
	                //         if (this.options.gfm) {
	                //             if (this.options.tables) {
	                //                 this.rules = block.tables;
	                //             } else {
	                //                 this.rules = block.gfm;
	                //             }
	                //         }
	                //     }
	                //
	                //     /**
	                //      * Expose Block Rules
	                //      */
	                //
	                //     Lexer.rules = block;
	                //
	                //     /**
	                //      * Static Lex Method
	                //      */
	                //
	                //     Lexer.lex = function (src, options) {
	                //         var lexer = new Lexer(options);
	                //         return lexer.lex(src);
	                //     };
	                //
	                //     /**
	                //      * Preprocessing
	                //      */
	                //
	                //     Lexer.prototype.lex = function (src) {
	                //         src = src
	                //             .replace(/\r\n|\r/g, '\n')
	                //             .replace(/\t/g, '    ')
	                //             .replace(/\u00a0/g, ' ')
	                //             .replace(/\u2424/g, '\n');
	                //
	                //         return this.token(src, true);
	                //     };
	                //
	                //     /**
	                //      * Lexing
	                //      */
	                //
	                //     Lexer.prototype.token = function (src, top) {
	                //         src = src.replace(/^ +$/gm, '');
	                //         var next,
	                //             loose,
	                //             cap,
	                //             bull,
	                //             b,
	                //             item,
	                //             space,
	                //             i,
	                //             tag,
	                //             l,
	                //             isordered;
	                //
	                //         while (src) {
	                //             // newline
	                //             if (cap = this.rules.newline.exec(src)) {
	                //                 src = src.substring(cap[0].length);
	                //                 if (cap[0].length > 1) {
	                //                     this.tokens.push({
	                //                         type: 'space'
	                //                     });
	                //                 }
	                //             }
	                //
	                //             // code
	                //             if (cap = this.rules.code.exec(src)) {
	                //                 src = src.substring(cap[0].length);
	                //                 cap = cap[0].replace(/^ {4}/gm, '');
	                //                 this.tokens.push({
	                //                     type: 'code',
	                //                     text: !this.options.pedantic
	                //                         ? cap.replace(/\n+$/, '')
	                //                         : cap
	                //                 });
	                //                 continue;
	                //             }
	                //
	                //             // fences (gfm)
	                //             if (cap = this.rules.fences.exec(src)) {
	                //                 src = src.substring(cap[0].length);
	                //                 this.tokens.push({
	                //                     type: 'code',
	                //                     lang: cap[2],
	                //                     text: cap[3] || ''
	                //                 });
	                //                 continue;
	                //             }
	                //
	                //             // heading
	                //             if (cap = this.rules.heading.exec(src)) {
	                //                 src = src.substring(cap[0].length);
	                //                 this.tokens.push({
	                //                     type: 'heading',
	                //                     depth: cap[1].length,
	                //                     text: cap[2]
	                //                 });
	                //                 continue;
	                //             }
	                //
	                //             // table no leading pipe (gfm)
	                //             if (top && (cap = this.rules.nptable.exec(src))) {
	                //                 src = src.substring(cap[0].length);
	                //
	                //                 item = {
	                //                     type: 'table',
	                //                     header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
	                //                     align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
	                //                     cells: cap[3].replace(/\n$/, '').split('\n')
	                //                 };
	                //
	                //                 for (i = 0; i < item.align.length; i++) {
	                //                     if (/^ *-+: *$/.test(item.align[i])) {
	                //                         item.align[i] = 'right';
	                //                     } else if (/^ *:-+: *$/.test(item.align[i])) {
	                //                         item.align[i] = 'center';
	                //                     } else if (/^ *:-+ *$/.test(item.align[i])) {
	                //                         item.align[i] = 'left';
	                //                     } else {
	                //                         item.align[i] = null;
	                //                     }
	                //                 }
	                //
	                //                 for (i = 0; i < item.cells.length; i++) {
	                //                     item.cells[i] = item.cells[i].split(/ *\| */);
	                //                 }
	                //
	                //                 this.tokens.push(item);
	                //
	                //                 continue;
	                //             }
	                //
	                //             // hr
	                //             if (cap = this.rules.hr.exec(src)) {
	                //                 src = src.substring(cap[0].length);
	                //                 this.tokens.push({
	                //                     type: 'hr'
	                //                 });
	                //                 continue;
	                //             }
	                //
	                //             // blockquote
	                //             if (cap = this.rules.blockquote.exec(src)) {
	                //                 src = src.substring(cap[0].length);
	                //
	                //                 this.tokens.push({
	                //                     type: 'blockquote_start'
	                //                 });
	                //
	                //                 cap = cap[0].replace(/^ *> ?/gm, '');
	                //
	                //                 // Pass `top` to keep the current
	                //                 // "toplevel" state. This is exactly
	                //                 // how markdown.pl works.
	                //                 this.token(cap, top);
	                //
	                //                 this.tokens.push({
	                //                     type: 'blockquote_end'
	                //                 });
	                //
	                //                 continue;
	                //             }
	                //
	                //             // list
	                //             if (cap = this.rules.list.exec(src)) {
	                //                 src = src.substring(cap[0].length);
	                //                 bull = cap[2];
	                //                 isordered = bull.length > 1;
	                //
	                //                 this.tokens.push({
	                //                     type: 'list_start',
	                //                     ordered: isordered,
	                //                     start: isordered ? +bull : ''
	                //                 });
	                //
	                //                 // Get each top-level item.
	                //                 cap = cap[0].match(this.rules.item);
	                //
	                //                 next = false;
	                //                 l = cap.length;
	                //                 i = 0;
	                //
	                //                 for (; i < l; i++) {
	                //                     item = cap[i];
	                //
	                //                     // Remove the list item's bullet
	                //                     // so it is seen as the next token.
	                //                     space = item.length;
	                //                     item = item.replace(/^ *([*+-]|\d+\.) +/, '');
	                //
	                //                     // Outdent whatever the
	                //                     // list item contains. Hacky.
	                //                     if (~item.indexOf('\n ')) {
	                //                         space -= item.length;
	                //                         item = !this.options.pedantic
	                //                             ? item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '')
	                //                             : item.replace(/^ {1,4}/gm, '');
	                //                     }
	                //
	                //                     // Determine whether the next list item belongs here.
	                //                     // Backpedal if it does not belong in this list.
	                //                     if (this.options.smartLists && i !== l - 1) {
	                //                         b = block.bullet.exec(cap[i + 1])[0];
	                //                         if (bull !== b && !(bull.length > 1 && b.length > 1)) {
	                //                             src = cap.slice(i + 1).join('\n') + src;
	                //                             i = l - 1;
	                //                         }
	                //                     }
	                //
	                //                     // Determine whether item is loose or not.
	                //                     // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
	                //                     // for discount behavior.
	                //                     loose = next || /\n\n(?!\s*$)/.test(item);
	                //                     if (i !== l - 1) {
	                //                         next = item.charAt(item.length - 1) === '\n';
	                //                         if (!loose) loose = next;
	                //                     }
	                //
	                //                     this.tokens.push({
	                //                         type: loose
	                //                             ? 'loose_item_start'
	                //                             : 'list_item_start'
	                //                     });
	                //
	                //                     // Recurse.
	                //                     this.token(item, false);
	                //
	                //                     this.tokens.push({
	                //                         type: 'list_item_end'
	                //                     });
	                //                 }
	                //
	                //                 this.tokens.push({
	                //                     type: 'list_end'
	                //                 });
	                //
	                //                 continue;
	                //             }
	                //
	                //             //code block
	                //             if (cap = this.rules.codeBlock.exec(src)) {
	                //                 src = src.substring(cap[0].length);
	                //
	                //                 function matchesTo(char) {
	                //                     return char.charCodeAt(0) === 32 ||
	                //                         char.charCodeAt(0) === 123 ||
	                //                         char.charCodeAt(0) === 59 ||
	                //                         char.charCodeAt(0) === 60 ||
	                //                         char.charCodeAt(0) === 62 ||
	                //                         char.charCodeAt(0) === 10 ||
	                //                         char.charCodeAt(0) === 40 ||
	                //                         char.charCodeAt(0) === 44 ||
	                //                         char.charCodeAt(0) === 46 ||
	                //                         char.charCodeAt(0) === 125 ||
	                //                         char.charCodeAt(0) === 38 ||
	                //                         char.charCodeAt(0) === 41;
	                //                 }
	                //
	                //                 function matchQuote(line) {
	                //                     return line.toLowerCase().match(/"(.*?)"/g);
	                //                 }
	                //
	                //                 function processLine(line) {
	                //                     let sentence = '';
	                //                     let word = '';
	                //
	                //                     for (var index = 0; (index < line.length); index++) {
	                //                         if (!line[index]) {
	                //                             continue;
	                //                         }
	                //                         word += line[index];
	                //                         if (matchesTo(line[index])) {
	                //                             word = word.substr(0, word.length - 1);
	                //                             if (matchQuote(word)) {
	                //                                 word = '<span class="pun">' + word + '</span>';
	                //                             } else if (word.trim().match(/^[A-Z]+[\w]+$/g)) {
	                //                                 word = '<span class="typ">' + word + '</span>';
	                //                             } else if (keywords.indexOf(word.trim()) !== -1) {
	                //                                 word = '<span class="kwd">' + word + '</span>';
	                //                             } else {
	                //                                 word = '<span class="pln">' + word + '</span>';
	                //                             }
	                //                             word += '<span class="pln">' + line[index] + '</span>';
	                //                             sentence += word;
	                //                             word = '';
	                //                         }
	                //                     }
	                //                     return sentence;
	                //                 }
	                //
	                //                 function matchesComment(line) {
	                //                     return (line.trim().match(/(.|[\r\n\s])*?\*\/$/g) || line.trim().match(/(\/{2})[\r\n\s]*\w*/g)) && !line.includes(":");
	                //                 }
	                //
	                //                 const keywords = ["abstract", "continue", "for", "new", "switch",
	                //                     "assert", "default", "goto", "package", "synchronized",
	                //                     "boolean", "do", "if", "private", "this",
	                //                     "break", "double", "implements", "protected", "throw",
	                //                     "byte", "else", "import", "public", "throws",
	                //                     "case", "enum", "instanceof", "return", "transient",
	                //                     "catch", "extends", "int", "short", "try",
	                //                     "char", "final", "interface", "static", "void",
	                //                     "class", "finally", "long", "strictfp", "volatile",
	                //                     "const", "float", "native", "super", "while"
	                //                 ]
	                //                 //let arr = cap[2].split(/\n+/);
	                //                 // for (let i = -1; i++ < arr.length;) {
	                //                 //     if (arr[i]) {
	                //                 //         let line = arr[i];
	                //                 //         let word = '';
	                //                 //         let sentence = '';
	                //                 //         if (line.trim().startsWith("@")) {
	                //                 //             sentence = '<span class="pun">' + line + '</span>';
	                //                 //         } else if (matchesComment(line)) {
	                //                 //             let section = line.substr(0, line.indexOf("/"));
	                //                 //             if (section && section.length > 0) {
	                //                 //                 section = processLine(section);
	                //                 //             }
	                //                 //             let comment = line.substr(line.indexOf("/"));
	                //                 //             sentence = section + '<span class="str">' + comment + '</span>';
	                //                 //         }
	                //                 //         if (sentence.length === 0) {
	                //                 //             sentence = processLine(line);
	                //                 //         }
	                //                 //         paragraph += sentence + '\n';
	                //                 //         sentence = '';
	                //                 //     }
	                //                 // }
	                //                 item = {
	                //                     type: 'codeBlock',
	                //                     body: cap[2],
	                //                 };
	                //                 this.tokens.push(item);
	                //                 continue;
	                //             }
	                //
	                //             // html
	                //             if (cap = this.rules.html.exec(src)) {
	                //                 src = src.substring(cap[0].length);
	                //                 this.tokens.push({
	                //                     type: this.options.sanitize
	                //                         ? 'paragraph'
	                //                         : 'html',
	                //                     pre: !this.options.sanitizer
	                //                         && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
	                //                     text: cap[0]
	                //                 });
	                //                 continue;
	                //             }
	                //
	                //             // def
	                //             if (top && (cap = this.rules.def.exec(src))) {
	                //                 src = src.substring(cap[0].length);
	                //                 if (cap[3]) cap[3] = cap[3].substring(1, cap[3].length - 1);
	                //                 tag = cap[1].toLowerCase();
	                //                 if (!this.tokens.links[tag]) {
	                //                     this.tokens.links[tag] = {
	                //                         href: cap[2],
	                //                         title: cap[3]
	                //                     };
	                //                 }
	                //                 continue;
	                //             }
	                //
	                //             // table (gfm)
	                //             if (top && (cap = this.rules.table.exec(src))) {
	                //                 src = src.substring(cap[0].length);
	                //
	                //                 item = {
	                //                     type: 'table',
	                //                     header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
	                //                     align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
	                //                     cells: cap[3].replace(/(?: *\| *)?\n$/, '').split('\n')
	                //                 };
	                //
	                //                 for (i = 0; i < item.align.length; i++) {
	                //                     if (/^ *-+: *$/.test(item.align[i])) {
	                //                         item.align[i] = 'right';
	                //                     } else if (/^ *:-+: *$/.test(item.align[i])) {
	                //                         item.align[i] = 'center';
	                //                     } else if (/^ *:-+ *$/.test(item.align[i])) {
	                //                         item.align[i] = 'left';
	                //                     } else {
	                //                         item.align[i] = null;
	                //                     }
	                //                 }
	                //
	                //                 for (i = 0; i < item.cells.length; i++) {
	                //                     item.cells[i] = item.cells[i]
	                //                         .replace(/^ *\| *| *\| *$/g, '')
	                //                         .split(/ *\| */);
	                //                 }
	                //
	                //                 this.tokens.push(item);
	                //
	                //                 continue;
	                //             }
	                //
	                //             // lheading
	                //             if (cap = this.rules.lheading.exec(src)) {
	                //                 src = src.substring(cap[0].length);
	                //                 this.tokens.push({
	                //                     type: 'heading',
	                //                     depth: cap[2] === '=' ? 1 : 2,
	                //                     text: cap[1]
	                //                 });
	                //                 continue;
	                //             }
	                //
	                //             // top-level paragraph
	                //             if (top && (cap = this.rules.paragraph.exec(src))) {
	                //                 src = src.substring(cap[0].length);
	                //                 this.tokens.push({
	                //                     type: 'paragraph',
	                //                     text: cap[1].charAt(cap[1].length - 1) === '\n'
	                //                         ? cap[1].slice(0, -1)
	                //                         : cap[1]
	                //                 });
	                //                 continue;
	                //             }
	                //
	                //             // text
	                //             if (cap = this.rules.text.exec(src)) {
	                //                 // Top-level should never reach here.
	                //                 src = src.substring(cap[0].length);
	                //                 this.tokens.push({
	                //                     type: 'text',
	                //                     text: cap[0]
	                //                 });
	                //                 continue;
	                //             }
	                //
	                //             if (src) {
	                //                 throw new Error('Infinite loop on byte: ' + src.charCodeAt(0));
	                //             }
	                //         }
	                //
	                //         return this.tokens;
	                //     };
	                //
	                //     /**
	                //      * Inline-Level Grammar
	                //      */
	                //
	                //     var inline = {
	                //         escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
	                //         autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
	                //         url: noop,
	                //         tag: /^<!--[\s\S]*?-->|^<\/?[a-zA-Z0-9\-]+(?:"[^"]*"|'[^']*'|\s[^<'">\/\s]*)*?\/?>/,
	                //         link: /^!?\[(inside)\]\(href\)/,
	                //         reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
	                //         nolink: /^!?\[((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\]/,
	                //         strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
	                //         em: /^_([^\s_](?:[^_]|__)+?[^\s_])_\b|^\*((?:\*\*|[^*])+?)\*(?!\*)/,
	                //         code: /^(`+)\s*([\s\S]*?[^`]?)\s*\1(?!`)/,
	                //         br: /^ {2,}\n(?!\s*$)/,
	                //         codeBlock: /^(~+)\s*([\s\S]*?[^`]?)\s*\1(?!~)/,
	                //         del: noop,
	                //         text: /^[\s\S]+?(?=[\\<!\[`*]|\b_| {2,}\n|$)/
	                //     };
	                //
	                //     inline._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
	                //     inline._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
	                //
	                //     inline.autolink = edit(inline.autolink)
	                //         .replace('scheme', inline._scheme)
	                //         .replace('email', inline._email)
	                //         .getRegex()
	                //
	                //     inline._inside = /(?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]]|\](?=[^\[]*\]))*/;
	                //     inline._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/;
	                //
	                //     inline.link = edit(inline.link)
	                //         .replace('inside', inline._inside)
	                //         .replace('href', inline._href)
	                //         .getRegex();
	                //
	                //     inline.reflink = edit(inline.reflink)
	                //         .replace('inside', inline._inside)
	                //         .getRegex();
	                //
	                //     /**
	                //      * Normal Inline Grammar
	                //      */
	                //
	                //     inline.normal = merge({}, inline);
	                //
	                //     /**
	                //      * Pedantic Inline Grammar
	                //      */
	                //
	                //     inline.pedantic = merge({}, inline.normal, {
	                //         strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
	                //         em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
	                //     });
	                //
	                //     /**
	                //      * GFM Inline Grammar
	                //      */
	                //
	                //     inline.gfm = merge({}, inline.normal, {
	                //         escape: edit(inline.escape).replace('])', '~|])').getRegex(),
	                //         url: edit(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/)
	                //             .replace('email', inline._email)
	                //             .getRegex(),
	                //         _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
	                //         del: /^~~(?=\S)([\s\S]*?\S)~~/,
	                //         text: edit(inline.text)
	                //             .replace(']|', '~]|')
	                //             .replace('|', '|https?://|ftp://|www\\.|[a-zA-Z0-9.!#$%&\'*+/=?^_`{\\|}~-]+@|')
	                //             .getRegex()
	                //     });
	                //
	                //     /**
	                //      * GFM + Line Breaks Inline Grammar
	                //      */
	                //
	                //     inline.breaks = merge({}, inline.gfm, {
	                //         br: edit(inline.br).replace('{2,}', '*').getRegex(),
	                //         text: edit(inline.gfm.text).replace('{2,}', '*').getRegex()
	                //     });
	                //
	                //     /**
	                //      * Inline Lexer & Compiler
	                //      */
	                //
	                //     function InlineLexer(links, options) {
	                //         this.options = options || marked.defaults;
	                //         this.links = links;
	                //         this.rules = inline.normal;
	                //         this.renderer = this.options.renderer || new Renderer();
	                //         this.renderer.options = this.options;
	                //
	                //         if (!this.links) {
	                //             throw new Error('Tokens array requires a `links` property.');
	                //         }
	                //
	                //         if (this.options.gfm) {
	                //             if (this.options.breaks) {
	                //                 this.rules = inline.breaks;
	                //             } else {
	                //                 this.rules = inline.gfm;
	                //             }
	                //         } else if (this.options.pedantic) {
	                //             this.rules = inline.pedantic;
	                //         }
	                //     }
	                //
	                //     /**
	                //      * Expose Inline Rules
	                //      */
	                //
	                //     InlineLexer.rules = inline;
	                //
	                //     /**
	                //      * Static Lexing/Compiling Method
	                //      */
	                //
	                //     InlineLexer.output = function (src, links, options) {
	                //         var inline = new InlineLexer(links, options);
	                //         return inline.output(src);
	                //     };
	                //
	                //     /**
	                //      * Lexing/Compiling
	                //      */
	                //
	                //     InlineLexer.prototype.output = function (src) {
	                //         var out = '',
	                //             link,
	                //             text,
	                //             href,
	                //             cap;
	                //
	                //         while (src) {
	                //             // escape
	                //             if (cap = this.rules.escape.exec(src)) {
	                //                 src = src.substring(cap[0].length);
	                //                 out += cap[1];
	                //                 continue;
	                //             }
	                //
	                //             // autolink
	                //             if (cap = this.rules.autolink.exec(src)) {
	                //                 src = src.substring(cap[0].length);
	                //                 if (cap[2] === '@') {
	                //                     text = escape(this.mangle(cap[1]));
	                //                     href = 'mailto:' + text;
	                //                 } else {
	                //                     text = escape(cap[1]);
	                //                     href = text;
	                //                 }
	                //                 out += this.renderer.link(href, null, text);
	                //                 continue;
	                //             }
	                //
	                //             // url (gfm)
	                //             if (!this.inLink && (cap = this.rules.url.exec(src))) {
	                //                 cap[0] = this.rules._backpedal.exec(cap[0])[0];
	                //                 src = src.substring(cap[0].length);
	                //                 if (cap[2] === '@') {
	                //                     text = escape(cap[0]);
	                //                     href = 'mailto:' + text;
	                //                 } else {
	                //                     text = escape(cap[0]);
	                //                     if (cap[1] === 'www.') {
	                //                         href = 'http://' + text;
	                //                     } else {
	                //                         href = text;
	                //                     }
	                //                 }
	                //                 out += this.renderer.link(href, null, text);
	                //                 continue;
	                //             }
	                //
	                //             // tag
	                //             if (cap = this.rules.tag.exec(src)) {
	                //                 if (!this.inLink && /^<a /i.test(cap[0])) {
	                //                     this.inLink = true;
	                //                 } else if (this.inLink && /^<\/a>/i.test(cap[0])) {
	                //                     this.inLink = false;
	                //                 }
	                //                 src = src.substring(cap[0].length);
	                //                 out += this.options.sanitize
	                //                     ? this.options.sanitizer
	                //                         ? this.options.sanitizer(cap[0])
	                //                         : escape(cap[0])
	                //                     : cap[0]
	                //                 continue;
	                //             }
	                //
	                //             // link
	                //             if (cap = this.rules.link.exec(src)) {
	                //                 src = src.substring(cap[0].length);
	                //                 this.inLink = true;
	                //                 out += this.outputLink(cap, {
	                //                     href: cap[2],
	                //                     title: cap[3]
	                //                 });
	                //                 this.inLink = false;
	                //                 continue;
	                //             }
	                //
	                //             // reflink, nolink
	                //             if ((cap = this.rules.reflink.exec(src))
	                //                 || (cap = this.rules.nolink.exec(src))) {
	                //                 src = src.substring(cap[0].length);
	                //                 link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
	                //                 link = this.links[link.toLowerCase()];
	                //                 if (!link || !link.href) {
	                //                     out += cap[0].charAt(0);
	                //                     src = cap[0].substring(1) + src;
	                //                     continue;
	                //                 }
	                //                 this.inLink = true;
	                //                 out += this.outputLink(cap, link);
	                //                 this.inLink = false;
	                //                 continue;
	                //             }
	                //
	                //             // strong
	                //             if (cap = this.rules.strong.exec(src)) {
	                //                 src = src.substring(cap[0].length);
	                //                 out += this.renderer.strong(this.output(cap[2] || cap[1]));
	                //                 continue;
	                //             }
	                //
	                //             // em
	                //             if (cap = this.rules.em.exec(src)) {
	                //                 src = src.substring(cap[0].length);
	                //                 out += this.renderer.em(this.output(cap[2] || cap[1]));
	                //                 continue;
	                //             }
	                //
	                //             // code
	                //             if (cap = this.rules.code.exec(src)) {
	                //                 src = src.substring(cap[0].length);
	                //                 out += this.renderer.codespan(escape(cap[2].trim(), true));
	                //                 continue;
	                //             }
	                //
	                //             // br
	                //             if (cap = this.rules.br.exec(src)) {
	                //                 src = src.substring(cap[0].length);
	                //                 out += this.renderer.br();
	                //                 continue;
	                //             }
	                //
	                //             // del (gfm)
	                //             if (cap = this.rules.del.exec(src)) {
	                //                 src = src.substring(cap[0].length);
	                //                 out += this.renderer.del(this.output(cap[1]));
	                //                 continue;
	                //             }
	                //
	                //             // text
	                //             if (cap = this.rules.text.exec(src)) {
	                //                 src = src.substring(cap[0].length);
	                //                 out += this.renderer.text(escape(this.smartypants(cap[0])));
	                //                 continue;
	                //             }
	                //
	                //             if (src) {
	                //                 throw new Error('Infinite loop on byte: ' + src.charCodeAt(0));
	                //             }
	                //         }
	                //
	                //         return out;
	                //     };
	                //
	                //     /**
	                //      * Compile Link
	                //      */
	                //
	                //     InlineLexer.prototype.outputLink = function (cap, link) {
	                //         var href = escape(link.href),
	                //             title = link.title ? escape(link.title) : null;
	                //
	                //         return cap[0].charAt(0) !== '!'
	                //             ? this.renderer.link(href, title, this.output(cap[1]))
	                //             : this.renderer.image(href, title, escape(cap[1]));
	                //     };
	                //
	                //     /**
	                //      * Smartypants Transformations
	                //      */
	                //
	                //     InlineLexer.prototype.smartypants = function (text) {
	                //         if (!this.options.smartypants) return text;
	                //         return text
	                //             // em-dashes
	                //             .replace(/---/g, '\u2014')
	                //             // en-dashes
	                //             .replace(/--/g, '\u2013')
	                //             // opening singles
	                //             .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018')
	                //             // closing singles & apostrophes
	                //             .replace(/'/g, '\u2019')
	                //             // opening doubles
	                //             .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201c')
	                //             // closing doubles
	                //             .replace(/"/g, '\u201d')
	                //             // ellipses
	                //             .replace(/\.{3}/g, '\u2026');
	                //     };
	                //
	                //     /**
	                //      * Mangle Links
	                //      */
	                //
	                //     InlineLexer.prototype.mangle = function (text) {
	                //         if (!this.options.mangle) return text;
	                //         var out = '',
	                //             l = text.length,
	                //             i = 0,
	                //             ch;
	                //
	                //         for (; i < l; i++) {
	                //             ch = text.charCodeAt(i);
	                //             if (Math.random() > 0.5) {
	                //                 ch = 'x' + ch.toString(16);
	                //             }
	                //             out += '&#' + ch + ';';
	                //         }
	                //
	                //         return out;
	                //     };
	                //
	                //     /**
	                //      * Renderer
	                //      */
	                //
	                //     function Renderer(options) {
	                //         this.options = options || {};
	                //     }
	                //
	                //     Renderer.prototype.code = function (code, lang, escaped) {
	                //         if (this.options.highlight) {
	                //             var out = this.options.highlight(code, lang);
	                //             if (out != null && out !== code) {
	                //                 escaped = true;
	                //                 code = out;
	                //             }
	                //         }
	                //
	                //         if (!lang) {
	                //             return '<pre><code>'
	                //                 + (escaped ? code : escape(code, true))
	                //                 + '\n</code></pre>';
	                //         }
	                //
	                //         return '<pre><code class="'
	                //             + this.options.langPrefix
	                //             + escape(lang, true)
	                //             + '">'
	                //             + (escaped ? code : escape(code, true))
	                //             + '\n</code></pre>\n';
	                //     };
	                //
	                //     Renderer.prototype.blockquote = function (quote) {
	                //         return '<blockquote>\n' + quote + '</blockquote>\n';
	                //     };
	                //
	                //     Renderer.prototype.html = function (html) {
	                //         return html;
	                //     };
	                //
	                //     Renderer.prototype.heading = function (text, level, raw) {
	                //         return '<h'
	                //             + level
	                //             + ' id="'
	                //             + this.options.headerPrefix
	                //             + raw.toLowerCase().replace(/[^\w]+/g, '-')
	                //             + '">'
	                //             + text
	                //             + '</h'
	                //             + level
	                //             + '>\n';
	                //     };
	                //
	                //     Renderer.prototype.hr = function () {
	                //         return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
	                //     };
	                //
	                //     Renderer.prototype.list = function (body, ordered, start) {
	                //         var type = ordered ? 'ol' : 'ul',
	                //             startatt = (ordered && start !== 1) ? (' start="' + start + '"') : '';
	                //         return '<' + type + startatt + '>\n' + body + '</' + type + '>\n';
	                //     };
	                //
	                //     Renderer.prototype.listitem = function (text) {
	                //         return '<li>' + text + '</li>\n';
	                //     };
	                //
	                //     Renderer.prototype.paragraph = function (text) {
	                //         return '<p>' + text + '</p>\n';
	                //     };
	                //
	                //     Renderer.prototype.codeBlock = function (text) {
	                //         return '<pre class="prettyprint language-java">\n' +
	                //             text.body +
	                //             '\n</pre>';
	                //     };
	                //
	                //     Renderer.prototype.table = function (header, body) {
	                //         return '<table>\n'
	                //             + '<thead>\n'
	                //             + header
	                //             + '</thead>\n'
	                //             + '<tbody>\n'
	                //             + body
	                //             + '</tbody>\n'
	                //             + '</table>\n';
	                //     };
	                //
	                //     Renderer.prototype.tablerow = function (content) {
	                //         return '<tr>\n' + content + '</tr>\n';
	                //     };
	                //
	                //     Renderer.prototype.tablecell = function (content, flags) {
	                //         var type = flags.header ? 'th' : 'td';
	                //         var tag = flags.align
	                //             ? '<' + type + ' style="text-align:' + flags.align + '">'
	                //             : '<' + type + '>';
	                //         return tag + content + '</' + type + '>\n';
	                //     };
	                //
	                // // span level renderer
	                //     Renderer.prototype.strong = function (text) {
	                //         return '<strong>' + text + '</strong>';
	                //     };
	                //
	                //     Renderer.prototype.em = function (text) {
	                //         return '<em>' + text + '</em>';
	                //     };
	                //
	                //     Renderer.prototype.codespan = function (text) {
	                //         return '<code>' + text + '</code>';
	                //     };
	                //
	                //     Renderer.prototype.br = function () {
	                //         return this.options.xhtml ? '<br/>' : '<br>';
	                //     };
	                //
	                //     Renderer.prototype.del = function (text) {
	                //         return '<del>' + text + '</del>';
	                //     };
	                //
	                //     Renderer.prototype.link = function (href, title, text) {
	                //         if (this.options.sanitize) {
	                //             try {
	                //                 var prot = decodeURIComponent(unescape(href))
	                //                     .replace(/[^\w:]/g, '')
	                //                     .toLowerCase();
	                //             } catch (e) {
	                //                 return text;
	                //             }
	                //             if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0 || prot.indexOf('data:') === 0) {
	                //                 return text;
	                //             }
	                //         }
	                //         if (this.options.baseUrl && !originIndependentUrl.test(href)) {
	                //             href = resolveUrl(this.options.baseUrl, href);
	                //         }
	                //         var out = '<a href="' + href + '"';
	                //         if (title) {
	                //             out += ' title="' + title + '"';
	                //         }
	                //         out += '>' + text + '</a>';
	                //         return out;
	                //     };
	                //
	                //     Renderer.prototype.image = function (href, title, text) {
	                //         if (this.options.baseUrl && !originIndependentUrl.test(href)) {
	                //             href = resolveUrl(this.options.baseUrl, href);
	                //         }
	                //         var out = '<img src="' + href + '" alt="' + text + '"';
	                //         if (title) {
	                //             out += ' title="' + title + '"';
	                //         }
	                //         out += this.options.xhtml ? '/>' : '>';
	                //         return out;
	                //     };
	                //
	                //     Renderer.prototype.text = function (text) {
	                //         return text;
	                //     };
	                //
	                //     /**
	                //      * TextRenderer
	                //      * returns only the textual part of the token
	                //      */
	                //
	                //     function TextRenderer() {
	                //     }
	                //
	                // // no need for block level renderers
	                //
	                //     TextRenderer.prototype.strong =
	                //         TextRenderer.prototype.em =
	                //             TextRenderer.prototype.codespan =
	                //                 TextRenderer.prototype.del =
	                //                     TextRenderer.prototype.text = function (text) {
	                //                         return text;
	                //                     }
	                //
	                //     TextRenderer.prototype.link =
	                //         TextRenderer.prototype.image = function (href, title, text) {
	                //             return '' + text;
	                //         }
	                //
	                //     TextRenderer.prototype.br = function () {
	                //         return '';
	                //     }
	                //
	                //     /**
	                //      * Parsing & Compiling
	                //      */
	                //
	                //     function Parser(options) {
	                //         this.tokens = [];
	                //         this.token = null;
	                //         this.options = options || marked.defaults;
	                //         this.options.renderer = this.options.renderer || new Renderer();
	                //         this.renderer = this.options.renderer;
	                //         this.renderer.options = this.options;
	                //     }
	                //
	                //     /**
	                //      * Static Parse Method
	                //      */
	                //
	                //     Parser.parse = function (src, options) {
	                //         var parser = new Parser(options);
	                //         return parser.parse(src);
	                //     };
	                //
	                //     /**
	                //      * Parse Loop
	                //      */
	                //
	                //     Parser.prototype.parse = function (src) {
	                //         this.inline = new InlineLexer(src.links, this.options);
	                //         // use an InlineLexer with a TextRenderer to extract pure text
	                //         this.inlineText = new InlineLexer(
	                //             src.links,
	                //             merge({}, this.options, {renderer: new TextRenderer()})
	                //         );
	                //         this.tokens = src.reverse();
	                //
	                //         var out = '';
	                //         while (this.next()) {
	                //             out += this.tok();
	                //         }
	                //
	                //         return out;
	                //     };
	                //
	                //     /**
	                //      * Next Token
	                //      */
	                //
	                //     Parser.prototype.next = function () {
	                //         return this.token = this.tokens.pop();
	                //     };
	                //
	                //     /**
	                //      * Preview Next Token
	                //      */
	                //
	                //     Parser.prototype.peek = function () {
	                //         return this.tokens[this.tokens.length - 1] || 0;
	                //     };
	                //
	                //     /**
	                //      * Parse Text Tokens
	                //      */
	                //
	                //     Parser.prototype.parseText = function () {
	                //         var body = this.token.text;
	                //
	                //         while (this.peek().type === 'text') {
	                //             body += '\n' + this.next().text;
	                //         }
	                //
	                //         return this.inline.output(body);
	                //     };
	                //
	                //     /**
	                //      * Parse Current Token
	                //      */
	                //
	                //     Parser.prototype.tok = function () {
	                //         switch (this.token.type) {
	                //             case 'space': {
	                //                 return '';
	                //             }
	                //             case 'hr': {
	                //                 return this.renderer.hr();
	                //             }
	                //             case 'heading': {
	                //                 return this.renderer.heading(
	                //                     this.inline.output(this.token.text),
	                //                     this.token.depth,
	                //                     unescape(this.inlineText.output(this.token.text)));
	                //             }
	                //             case 'codeBlock': {
	                //                 return this.renderer.codeBlock(this.token);
	                //             }
	                //
	                //             case 'code': {
	                //                 return this.renderer.code(this.token.text,
	                //                     this.token.lang,
	                //                     this.token.escaped);
	                //             }
	                //             case 'table': {
	                //                 var header = '',
	                //                     body = '',
	                //                     i,
	                //                     row,
	                //                     cell,
	                //                     j;
	                //
	                //                 // header
	                //                 cell = '';
	                //                 for (i = 0; i < this.token.header.length; i++) {
	                //                     cell += this.renderer.tablecell(
	                //                         this.inline.output(this.token.header[i]),
	                //                         {header: true, align: this.token.align[i]}
	                //                     );
	                //                 }
	                //                 header += this.renderer.tablerow(cell);
	                //
	                //                 for (i = 0; i < this.token.cells.length; i++) {
	                //                     row = this.token.cells[i];
	                //
	                //                     cell = '';
	                //                     for (j = 0; j < row.length; j++) {
	                //                         cell += this.renderer.tablecell(
	                //                             this.inline.output(row[j]),
	                //                             {header: false, align: this.token.align[j]}
	                //                         );
	                //                     }
	                //
	                //                     body += this.renderer.tablerow(cell);
	                //                 }
	                //                 return this.renderer.table(header, body);
	                //             }
	                //             case 'blockquote_start': {
	                //                 body = '';
	                //
	                //                 while (this.next().type !== 'blockquote_end') {
	                //                     body += this.tok();
	                //                 }
	                //
	                //                 return this.renderer.blockquote(body);
	                //             }
	                //             case 'list_start': {
	                //                 body = '';
	                //                 var ordered = this.token.ordered,
	                //                     start = this.token.start;
	                //
	                //                 while (this.next().type !== 'list_end') {
	                //                     body += this.tok();
	                //                 }
	                //
	                //                 return this.renderer.list(body, ordered, start);
	                //             }
	                //             case 'list_item_start': {
	                //                 body = '';
	                //
	                //                 while (this.next().type !== 'list_item_end') {
	                //                     body += this.token.type === 'text'
	                //                         ? this.parseText()
	                //                         : this.tok();
	                //                 }
	                //
	                //                 return this.renderer.listitem(body);
	                //             }
	                //             case 'loose_item_start': {
	                //                 body = '';
	                //
	                //                 while (this.next().type !== 'list_item_end') {
	                //                     body += this.tok();
	                //                 }
	                //
	                //                 return this.renderer.listitem(body);
	                //             }
	                //             case 'html': {
	                //                 var html = !this.token.pre && !this.options.pedantic
	                //                     ? this.inline.output(this.token.text)
	                //                     : this.token.text;
	                //                 return this.renderer.html(html);
	                //             }
	                //             case 'paragraph': {
	                //                 return this.renderer.paragraph(this.inline.output(this.token.text));
	                //             }
	                //             case 'text': {
	                //                 return this.renderer.paragraph(this.parseText());
	                //             }
	                //         }
	                //     };
	                //
	                //     /**
	                //      * Helpers
	                //      */
	                //
	                //     function escape(html, encode) {
	                //         return html
	                //             .replace(!encode ? /&(?!#?\w+;)/g : /&/g, '&amp;')
	                //             .replace(/</g, '&lt;')
	                //             .replace(/>/g, '&gt;')
	                //             .replace(/"/g, '&quot;')
	                //             .replace(/'/g, '&#39;');
	                //     }
	                //
	                //     function unescape(html) {
	                //         // explicitly match decimal, hex, and named HTML entities
	                //         return html.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, function (_, n) {
	                //             n = n.toLowerCase();
	                //             if (n === 'colon') return ':';
	                //             if (n.charAt(0) === '#') {
	                //                 return n.charAt(1) === 'x'
	                //                     ? String.fromCharCode(parseInt(n.substring(2), 16))
	                //                     : String.fromCharCode(+n.substring(1));
	                //             }
	                //             return '';
	                //         });
	                //     }
	                //
	                //     function edit(regex, opt) {
	                //         regex = regex.source;
	                //         opt = opt || '';
	                //         return {
	                //             replace: function (name, val) {
	                //                 val = val.source || val;
	                //                 val = val.replace(/(^|[^\[])\^/g, '$1');
	                //                 regex = regex.replace(name, val);
	                //                 return this;
	                //             },
	                //             getRegex: function () {
	                //                 return new RegExp(regex, opt);
	                //             }
	                //         };
	                //     }
	                //
	                //     function resolveUrl(base, href) {
	                //         if (!baseUrls[' ' + base]) {
	                //             // we can ignore everything in base after the last slash of its path component,
	                //             // but we might need to add _that_
	                //             // https://tools.ietf.org/html/rfc3986#section-3
	                //             if (/^[^:]+:\/*[^/]*$/.test(base)) {
	                //                 baseUrls[' ' + base] = base + '/';
	                //             } else {
	                //                 baseUrls[' ' + base] = base.replace(/[^/]*$/, '');
	                //             }
	                //         }
	                //         base = baseUrls[' ' + base];
	                //
	                //         if (href.slice(0, 2) === '//') {
	                //             return base.replace(/:[\s\S]*/, ':') + href;
	                //         } else if (href.charAt(0) === '/') {
	                //             return base.replace(/(:\/*[^/]*)[\s\S]*/, '$1') + href;
	                //         } else {
	                //             return base + href;
	                //         }
	                //     }
	                //
	                //     var baseUrls = {};
	                //     var originIndependentUrl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
	                //
	                //     function noop() {
	                //     }
	                //
	                //     noop.exec = noop;
	                //
	                //     function merge(obj) {
	                //         var i = 1,
	                //             target,
	                //             key;
	                //
	                //         for (; i < arguments.length; i++) {
	                //             target = arguments[i];
	                //             for (key in target) {
	                //                 if (Object.prototype.hasOwnProperty.call(target, key)) {
	                //                     obj[key] = target[key];
	                //                 }
	                //             }
	                //         }
	                //
	                //         return obj;
	                //     }
	                //
	                //     /**
	                //      * Marked
	                //      */
	                //
	                //     function marked(src, opt, callback) {
	                //         // throw error in case of non string input
	                //         if (typeof src === 'undefined' || src === null) {
	                //             throw new Error('marked(): input parameter is undefined or null');
	                //         }
	                //         if (typeof src !== 'string') {
	                //             throw new Error('marked(): input parameter is of type '
	                //                 + Object.prototype.toString.call(src) + ', string expected');
	                //         }
	                //
	                //         if (callback || typeof opt === 'function') {
	                //             if (!callback) {
	                //                 callback = opt;
	                //                 opt = null;
	                //             }
	                //
	                //             opt = merge({}, marked.defaults, opt || {});
	                //
	                //             var highlight = opt.highlight,
	                //                 tokens,
	                //                 pending,
	                //                 i = 0;
	                //
	                //             try {
	                //                 tokens = Lexer.lex(src, opt)
	                //             } catch (e) {
	                //                 return callback(e);
	                //             }
	                //
	                //             pending = tokens.length;
	                //
	                //             var done = function (err) {
	                //                 if (err) {
	                //                     opt.highlight = highlight;
	                //                     return callback(err);
	                //                 }
	                //
	                //                 var out;
	                //
	                //                 try {
	                //                     out = Parser.parse(tokens, opt);
	                //                 } catch (e) {
	                //                     err = e;
	                //                 }
	                //
	                //                 opt.highlight = highlight;
	                //
	                //                 return err
	                //                     ? callback(err)
	                //                     : callback(null, out);
	                //             };
	                //
	                //             if (!highlight || highlight.length < 3) {
	                //                 return done();
	                //             }
	                //
	                //             delete opt.highlight;
	                //
	                //             if (!pending) return done();
	                //
	                //             for (; i < tokens.length; i++) {
	                //                 (function (token) {
	                //                     if (token.type !== 'code') {
	                //                         return --pending || done();
	                //                     }
	                //                     return highlight(token.text, token.lang, function (err, code) {
	                //                         if (err) return done(err);
	                //                         if (code == null || code === token.text) {
	                //                             return --pending || done();
	                //                         }
	                //                         token.text = code;
	                //                         token.escaped = true;
	                //                         --pending || done();
	                //                     });
	                //                 })(tokens[i]);
	                //             }
	                //
	                //             return;
	                //         }
	                //         try {
	                //             if (opt) opt = merge({}, marked.defaults, opt);
	                //             return Parser.parse(Lexer.lex(src, opt), opt);
	                //         } catch (e) {
	                //             e.message += '\nPlease report this to https://github.com/markedjs/marked.';
	                //             if ((opt || marked.defaults).silent) {
	                //                 return '<p>An error occurred:</p><pre>'
	                //                     + escape(e.message + '', true)
	                //                     + '</pre>';
	                //             }
	                //             throw e;
	                //         }
	                //     }
	                //
	                //     /**
	                //      * Options
	                //      */
	                //
	                //     marked.options =
	                //         marked.setOptions = function (opt) {
	                //             merge(marked.defaults, opt);
	                //             return marked;
	                //         };
	                //
	                //     marked.defaults = {
	                //         gfm: true,
	                //         tables: true,
	                //         breaks: false,
	                //         pedantic: false,
	                //         sanitize: false,
	                //         sanitizer: null,
	                //         mangle: true,
	                //         smartLists: false,
	                //         silent: false,
	                //         highlight: null,
	                //         langPrefix: 'lang-',
	                //         smartypants: false,
	                //         headerPrefix: '',
	                //         renderer: new Renderer(),
	                //         xhtml: false,
	                //         baseUrl: null
	                //     };
	                //
	                //     /**
	                //      * Expose
	                //      */
	                //
	                //     marked.Parser = Parser;
	                //     marked.parser = Parser.parse;
	                //
	                //     marked.Renderer = Renderer;
	                //     marked.TextRenderer = TextRenderer;
	                //
	                //     marked.Lexer = Lexer;
	                //     marked.lexer = Lexer.lex;
	                //
	                //     marked.InlineLexer = InlineLexer;
	                //     marked.inlineLexer = InlineLexer.output;
	                //
	                //     marked.parse = marked;
	                //
	                //     if (typeof module !== 'undefined' && typeof exports === 'object') {
	                //         module.exports = marked;
	                //     } else if (typeof define === 'function' && define.amd) {
	                //         define(function () {
	                //             return marked;
	                //         });
	                //     } else {
	                //         root.marked = marked;
	                //     }
	                // })(this || (typeof window !== 'undefined' ? window : global));
	                //         if (line.trim().startsWith("@")) {
	                //             sentence = '<span class="pun">' + line + '</span>';
	                //         } else if (matchesComment(line)) {
	                //             let section = line.substr(0, line.indexOf("/"));
	                //             if (section && section.length > 0) {
	                //                 section = processLine(section);
	                //             }
	                //             let comment = line.substr(line.indexOf("/"));
	                //             sentence = section + '<span class="str">' + comment + '</span>';
	                //         }
	                //         if (sentence.length === 0) {
	                //             sentence = processLine(line);
	                //         }
	                //         paragraph += sentence + '\n';
	                //         sentence = '';
	                //     }
	                // }
	                item = {
	                    type: 'codeBlock',
	                    body: PR.prettyPrintOne(cap[2], 'java', false)
	                };
	                this.tokens.push(item);
	                continue;
	            }
	
	            // html
	            if (cap = this.rules.html.exec(src)) {
	                src = src.substring(cap[0].length);
	                this.tokens.push({
	                    type: this.options.sanitize
	                        ? 'paragraph'
	                        : 'html',
	                    pre: !this.options.sanitizer
	                        && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
	                    text: cap[0]
	                });
	                continue;
	            }
	
	            // def
	            if (top && (cap = this.rules.def.exec(src))) {
	                src = src.substring(cap[0].length);
	                if (cap[3]) cap[3] = cap[3].substring(1, cap[3].length - 1);
	                tag = cap[1].toLowerCase();
	                if (!this.tokens.links[tag]) {
	                    this.tokens.links[tag] = {
	                        href: cap[2],
	                        title: cap[3]
	                    };
	                }
	                continue;
	            }
	
	            // table (gfm)
	            if (top && (cap = this.rules.table.exec(src))) {
	                src = src.substring(cap[0].length);
	
	                item = {
	                    type: 'table',
	                    header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
	                    align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
	                    cells: cap[3].replace(/(?: *\| *)?\n$/, '').split('\n')
	                };
	
	                for (i = 0; i < item.align.length; i++) {
	                    if (/^ *-+: *$/.test(item.align[i])) {
	                        item.align[i] = 'right';
	                    } else if (/^ *:-+: *$/.test(item.align[i])) {
	                        item.align[i] = 'center';
	                    } else if (/^ *:-+ *$/.test(item.align[i])) {
	                        item.align[i] = 'left';
	                    } else {
	                        item.align[i] = null;
	                    }
	                }
	
	                for (i = 0; i < item.cells.length; i++) {
	                    item.cells[i] = item.cells[i]
	                        .replace(/^ *\| *| *\| *$/g, '')
	                        .split(/ *\| */);
	                }
	
	                this.tokens.push(item);
	
	                continue;
	            }
	
	            // lheading
	            if (cap = this.rules.lheading.exec(src)) {
	                src = src.substring(cap[0].length);
	                this.tokens.push({
	                    type: 'heading',
	                    depth: cap[2] === '=' ? 1 : 2,
	                    text: cap[1]
	                });
	                continue;
	            }
	
	            // top-level paragraph
	            if (top && (cap = this.rules.paragraph.exec(src))) {
	                src = src.substring(cap[0].length);
	                this.tokens.push({
	                    type: 'paragraph',
	                    text: cap[1].charAt(cap[1].length - 1) === '\n'
	                        ? cap[1].slice(0, -1)
	                        : cap[1]
	                });
	                continue;
	            }
	
	            // text
	            if (cap = this.rules.text.exec(src)) {
	                // Top-level should never reach here.
	                src = src.substring(cap[0].length);
	                this.tokens.push({
	                    type: 'text',
	                    text: cap[0]
	                });
	                continue;
	            }
	
	            if (src) {
	                throw new Error('Infinite loop on byte: ' + src.charCodeAt(0));
	            }
	        }
	
	        return this.tokens;
	    };
	
	    /**
	     * Inline-Level Grammar
	     */
	
	    var inline = {
	        escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
	        autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
	        url: noop,
	        tag: /^<!--[\s\S]*?-->|^<\/?[a-zA-Z0-9\-]+(?:"[^"]*"|'[^']*'|\s[^<'">\/\s]*)*?\/?>/,
	        link: /^!?\[(inside)\]\(href\)/,
	        reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
	        nolink: /^!?\[((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\]/,
	        strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
	        em: /^_([^\s_](?:[^_]|__)+?[^\s_])_\b|^\*((?:\*\*|[^*])+?)\*(?!\*)/,
	        code: /^(`+)\s*([\s\S]*?[^`]?)\s*\1(?!`)/,
	        br: /^ {2,}\n(?!\s*$)/,
	        codeBlock: /^(~+)\s*([\s\S]*?[^`]?)\s*\1(?!~)/,
	        del: noop,
	        text: /^[\s\S]+?(?=[\\<!\[`*]|\b_| {2,}\n|$)/
	    };
	
	    inline._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
	    inline._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
	
	    inline.autolink = edit(inline.autolink)
	        .replace('scheme', inline._scheme)
	        .replace('email', inline._email)
	        .getRegex()
	
	    inline._inside = /(?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]]|\](?=[^\[]*\]))*/;
	    inline._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/;
	
	    inline.link = edit(inline.link)
	        .replace('inside', inline._inside)
	        .replace('href', inline._href)
	        .getRegex();
	
	    inline.reflink = edit(inline.reflink)
	        .replace('inside', inline._inside)
	        .getRegex();
	
	    /**
	     * Normal Inline Grammar
	     */
	
	    inline.normal = merge({}, inline);
	
	    /**
	     * Pedantic Inline Grammar
	     */
	
	    inline.pedantic = merge({}, inline.normal, {
	        strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
	        em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
	    });
	
	    /**
	     * GFM Inline Grammar
	     */
	
	    inline.gfm = merge({}, inline.normal, {
	        escape: edit(inline.escape).replace('])', '~|])').getRegex(),
	        url: edit(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/)
	            .replace('email', inline._email)
	            .getRegex(),
	        _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
	        del: /^~~(?=\S)([\s\S]*?\S)~~/,
	        text: edit(inline.text)
	            .replace(']|', '~]|')
	            .replace('|', '|https?://|ftp://|www\\.|[a-zA-Z0-9.!#$%&\'*+/=?^_`{\\|}~-]+@|')
	            .getRegex()
	    });
	
	    /**
	     * GFM + Line Breaks Inline Grammar
	     */
	
	    inline.breaks = merge({}, inline.gfm, {
	        br: edit(inline.br).replace('{2,}', '*').getRegex(),
	        text: edit(inline.gfm.text).replace('{2,}', '*').getRegex()
	    });
	
	    /**
	     * Inline Lexer & Compiler
	     */
	
	    function InlineLexer(links, options) {
	        this.options = options || marked.defaults;
	        this.links = links;
	        this.rules = inline.normal;
	        this.renderer = this.options.renderer || new Renderer();
	        this.renderer.options = this.options;
	
	        if (!this.links) {
	            throw new Error('Tokens array requires a `links` property.');
	        }
	
	        if (this.options.gfm) {
	            if (this.options.breaks) {
	                this.rules = inline.breaks;
	            } else {
	                this.rules = inline.gfm;
	            }
	        } else if (this.options.pedantic) {
	            this.rules = inline.pedantic;
	        }
	    }
	
	    /**
	     * Expose Inline Rules
	     */
	
	    InlineLexer.rules = inline;
	
	    /**
	     * Static Lexing/Compiling Method
	     */
	
	    InlineLexer.output = function (src, links, options) {
	        var inline = new InlineLexer(links, options);
	        return inline.output(src);
	    };
	
	    /**
	     * Lexing/Compiling
	     */
	
	    InlineLexer.prototype.output = function (src) {
	        var out = '',
	            link,
	            text,
	            href,
	            cap;
	
	        while (src) {
	            // escape
	            if (cap = this.rules.escape.exec(src)) {
	                src = src.substring(cap[0].length);
	                out += cap[1];
	                continue;
	            }
	
	            // autolink
	            if (cap = this.rules.autolink.exec(src)) {
	                src = src.substring(cap[0].length);
	                if (cap[2] === '@') {
	                    text = escape(this.mangle(cap[1]));
	                    href = 'mailto:' + text;
	                } else {
	                    text = escape(cap[1]);
	                    href = text;
	                }
	                out += this.renderer.link(href, null, text);
	                continue;
	            }
	
	            // url (gfm)
	            if (!this.inLink && (cap = this.rules.url.exec(src))) {
	                cap[0] = this.rules._backpedal.exec(cap[0])[0];
	                src = src.substring(cap[0].length);
	                if (cap[2] === '@') {
	                    text = escape(cap[0]);
	                    href = 'mailto:' + text;
	                } else {
	                    text = escape(cap[0]);
	                    if (cap[1] === 'www.') {
	                        href = 'http://' + text;
	                    } else {
	                        href = text;
	                    }
	                }
	                out += this.renderer.link(href, null, text);
	                continue;
	            }
	
	            // tag
	            if (cap = this.rules.tag.exec(src)) {
	                if (!this.inLink && /^<a /i.test(cap[0])) {
	                    this.inLink = true;
	                } else if (this.inLink && /^<\/a>/i.test(cap[0])) {
	                    this.inLink = false;
	                }
	                src = src.substring(cap[0].length);
	                out += this.options.sanitize
	                    ? this.options.sanitizer
	                        ? this.options.sanitizer(cap[0])
	                        : escape(cap[0])
	                    : cap[0]
	                continue;
	            }
	
	            // link
	            if (cap = this.rules.link.exec(src)) {
	                src = src.substring(cap[0].length);
	                this.inLink = true;
	                out += this.outputLink(cap, {
	                    href: cap[2],
	                    title: cap[3]
	                });
	                this.inLink = false;
	                continue;
	            }
	
	            // reflink, nolink
	            if ((cap = this.rules.reflink.exec(src))
	                || (cap = this.rules.nolink.exec(src))) {
	                src = src.substring(cap[0].length);
	                link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
	                link = this.links[link.toLowerCase()];
	                if (!link || !link.href) {
	                    out += cap[0].charAt(0);
	                    src = cap[0].substring(1) + src;
	                    continue;
	                }
	                this.inLink = true;
	                out += this.outputLink(cap, link);
	                this.inLink = false;
	                continue;
	            }
	
	            // strong
	            if (cap = this.rules.strong.exec(src)) {
	                src = src.substring(cap[0].length);
	                out += this.renderer.strong(this.output(cap[2] || cap[1]));
	                continue;
	            }
	
	            // em
	            if (cap = this.rules.em.exec(src)) {
	                src = src.substring(cap[0].length);
	                out += this.renderer.em(this.output(cap[2] || cap[1]));
	                continue;
	            }
	
	            // code
	            if (cap = this.rules.code.exec(src)) {
	                src = src.substring(cap[0].length);
	                out += this.renderer.codespan(escape(cap[2].trim(), true));
	                continue;
	            }
	
	            // br
	            if (cap = this.rules.br.exec(src)) {
	                src = src.substring(cap[0].length);
	                out += this.renderer.br();
	                continue;
	            }
	
	            // del (gfm)
	            if (cap = this.rules.del.exec(src)) {
	                src = src.substring(cap[0].length);
	                out += this.renderer.del(this.output(cap[1]));
	                continue;
	            }
	
	            // text
	            if (cap = this.rules.text.exec(src)) {
	                src = src.substring(cap[0].length);
	                out += this.renderer.text(escape(this.smartypants(cap[0])));
	                continue;
	            }
	
	            if (src) {
	                throw new Error('Infinite loop on byte: ' + src.charCodeAt(0));
	            }
	        }
	
	        return out;
	    };
	
	    /**
	     * Compile Link
	     */
	
	    InlineLexer.prototype.outputLink = function (cap, link) {
	        var href = escape(link.href),
	            title = link.title ? escape(link.title) : null;
	
	        return cap[0].charAt(0) !== '!'
	            ? this.renderer.link(href, title, this.output(cap[1]))
	            : this.renderer.image(href, title, escape(cap[1]));
	    };
	
	    /**
	     * Smartypants Transformations
	     */
	
	    InlineLexer.prototype.smartypants = function (text) {
	        if (!this.options.smartypants) return text;
	        return text
	            // em-dashes
	            .replace(/---/g, '\u2014')
	            // en-dashes
	            .replace(/--/g, '\u2013')
	            // opening singles
	            .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018')
	            // closing singles & apostrophes
	            .replace(/'/g, '\u2019')
	            // opening doubles
	            .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201c')
	            // closing doubles
	            .replace(/"/g, '\u201d')
	            // ellipses
	            .replace(/\.{3}/g, '\u2026');
	    };
	
	    /**
	     * Mangle Links
	     */
	
	    InlineLexer.prototype.mangle = function (text) {
	        if (!this.options.mangle) return text;
	        var out = '',
	            l = text.length,
	            i = 0,
	            ch;
	
	        for (; i < l; i++) {
	            ch = text.charCodeAt(i);
	            if (Math.random() > 0.5) {
	                ch = 'x' + ch.toString(16);
	            }
	            out += '&#' + ch + ';';
	        }
	
	        return out;
	    };
	
	    /**
	     * Renderer
	     */
	
	    function Renderer(options) {
	        this.options = options || {};
	    }
	
	    Renderer.prototype.code = function (code, lang, escaped) {
	        if (this.options.highlight) {
	            var out = this.options.highlight(code, lang);
	            if (out != null && out !== code) {
	                escaped = true;
	                code = out;
	            }
	        }
	
	        if (!lang) {
	            return '<pre><code>'
	                + (escaped ? code : escape(code, true))
	                + '\n</code></pre>';
	        }
	
	        return '<pre><code class="'
	            + this.options.langPrefix
	            + escape(lang, true)
	            + '">'
	            + (escaped ? code : escape(code, true))
	            + '\n</code></pre>\n';
	    };
	
	    Renderer.prototype.blockquote = function (quote) {
	        return '<blockquote>\n' + quote + '</blockquote>\n';
	    };
	
	    Renderer.prototype.html = function (html) {
	        return html;
	    };
	
	    Renderer.prototype.heading = function (text, level, raw) {
	        return '<h'
	            + level
	            + ' id="'
	            + this.options.headerPrefix
	            + raw.toLowerCase().replace(/[^\w]+/g, '-')
	            + '">'
	            + text
	            + '</h'
	            + level
	            + '>\n';
	    };
	
	    Renderer.prototype.hr = function () {
	        return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
	    };
	
	    Renderer.prototype.list = function (body, ordered, start) {
	        var type = ordered ? 'ol' : 'ul',
	            startatt = (ordered && start !== 1) ? (' start="' + start + '"') : '';
	        return '<' + type + startatt + '>\n' + body + '</' + type + '>\n';
	    };
	
	    Renderer.prototype.listitem = function (text) {
	        return '<li>' + text + '</li>\n';
	    };
	
	    Renderer.prototype.paragraph = function (text) {
	        return '<p>' + text + '</p>\n';
	    };
	
	    function $rand() {
	        return Math.random().toString(5).substring(2, 5);
	    }
	
	    Renderer.prototype.codeBlock = function (text) {
	        const number = $rand();
	        return '<div class="marked">' +
	            <!-- Trigger -->
	            '<button class="copy-button" title="copied!" type="button" data-clipboard-target="#marker-' + number + '" aria-label="Copy it!" data-balloon-pos="up">' +
	            '    <img src="assets/img/clippy.svg" width="13" alt="Copy to clipboard">' +
	            '</button>' +
	            '</div>' +
	            '<pre id="marker-' + number + '" class="display prettyprint language-java">\n' +
	            text.body +
	            '\n</pre>';
	    };
	
	    Renderer.prototype.table = function (header, body) {
	        return '<table>\n'
	            + '<thead>\n'
	            + header
	            + '</thead>\n'
	            + '<tbody>\n'
	            + body
	            + '</tbody>\n'
	            + '</table>\n';
	    };
	
	    Renderer.prototype.tablerow = function (content) {
	        return '<tr>\n' + content + '</tr>\n';
	    };
	
	    Renderer.prototype.tablecell = function (content, flags) {
	        var type = flags.header ? 'th' : 'td';
	        var tag = flags.align
	            ? '<' + type + ' style="text-align:' + flags.align + '">'
	            : '<' + type + '>';
	        return tag + content + '</' + type + '>\n';
	    };
	
	// span level renderer
	    Renderer.prototype.strong = function (text) {
	        return '<strong>' + text + '</strong>';
	    };
	
	    Renderer.prototype.em = function (text) {
	        return '<em>' + text + '</em>';
	    };
	
	    Renderer.prototype.codespan = function (text) {
	        return '<code>' + text + '</code>';
	    };
	
	    Renderer.prototype.br = function () {
	        return this.options.xhtml ? '<br/>' : '<br>';
	    };
	
	    Renderer.prototype.del = function (text) {
	        return '<del>' + text + '</del>';
	    };
	
	    Renderer.prototype.link = function (href, title, text) {
	        if (this.options.sanitize) {
	            try {
	                var prot = decodeURIComponent(unescape(href))
	                    .replace(/[^\w:]/g, '')
	                    .toLowerCase();
	            } catch (e) {
	                return text;
	            }
	            if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0 || prot.indexOf('data:') === 0) {
	                return text;
	            }
	        }
	        if (this.options.baseUrl && !originIndependentUrl.test(href)) {
	            href = resolveUrl(this.options.baseUrl, href);
	        }
	        var out = '<a href="' + href + '"';
	        if (title) {
	            out += ' title="' + title + '"';
	        }
	        out += '>' + text + '</a>';
	        return out;
	    };
	
	    Renderer.prototype.image = function (href, title, text) {
	        if (this.options.baseUrl && !originIndependentUrl.test(href)) {
	            href = resolveUrl(this.options.baseUrl, href);
	        }
	        var out = '<img src="' + href + '" alt="' + text + '"';
	        if (title) {
	            out += ' title="' + title + '"';
	        }
	        out += this.options.xhtml ? '/>' : '>';
	        return out;
	    };
	
	    Renderer.prototype.text = function (text) {
	        return text;
	    };
	
	    /**
	     * TextRenderer
	     * returns only the textual part of the token
	     */
	
	    function TextRenderer() {
	    }
	
	// no need for block level renderers
	
	    TextRenderer.prototype.strong =
	        TextRenderer.prototype.em =
	            TextRenderer.prototype.codespan =
	                TextRenderer.prototype.del =
	                    TextRenderer.prototype.text = function (text) {
	                        return text;
	                    }
	
	    TextRenderer.prototype.link =
	        TextRenderer.prototype.image = function (href, title, text) {
	            return '' + text;
	        }
	
	    TextRenderer.prototype.br = function () {
	        return '';
	    }
	
	    /**
	     * Parsing & Compiling
	     */
	
	    function Parser(options) {
	        this.tokens = [];
	        this.token = null;
	        this.options = options || marked.defaults;
	        this.options.renderer = this.options.renderer || new Renderer();
	        this.renderer = this.options.renderer;
	        this.renderer.options = this.options;
	    }
	
	    /**
	     * Static Parse Method
	     */
	
	    Parser.parse = function (src, options) {
	        var parser = new Parser(options);
	        return parser.parse(src);
	    };
	
	    /**
	     * Parse Loop
	     */
	
	    Parser.prototype.parse = function (src) {
	        this.inline = new InlineLexer(src.links, this.options);
	        // use an InlineLexer with a TextRenderer to extract pure text
	        this.inlineText = new InlineLexer(
	            src.links,
	            merge({}, this.options, {renderer: new TextRenderer()})
	        );
	        this.tokens = src.reverse();
	
	        var out = '';
	        while (this.next()) {
	            out += this.tok();
	        }
	
	        return out;
	    };
	
	    /**
	     * Next Token
	     */
	
	    Parser.prototype.next = function () {
	        return this.token = this.tokens.pop();
	    };
	
	    /**
	     * Preview Next Token
	     */
	
	    Parser.prototype.peek = function () {
	        return this.tokens[this.tokens.length - 1] || 0;
	    };
	
	    /**
	     * Parse Text Tokens
	     */
	
	    Parser.prototype.parseText = function () {
	        var body = this.token.text;
	
	        while (this.peek().type === 'text') {
	            body += '\n' + this.next().text;
	        }
	
	        return this.inline.output(body);
	    };
	
	    /**
	     * Parse Current Token
	     */
	
	    Parser.prototype.tok = function () {
	        switch (this.token.type) {
	            case 'space': {
	                return '';
	            }
	            case 'hr': {
	                return this.renderer.hr();
	            }
	            case 'heading': {
	                return this.renderer.heading(
	                    this.inline.output(this.token.text),
	                    this.token.depth,
	                    unescape(this.inlineText.output(this.token.text)));
	            }
	            case 'codeBlock': {
	                return this.renderer.codeBlock(this.token);
	            }
	
	            case 'code': {
	                return this.renderer.code(this.token.text,
	                    this.token.lang,
	                    this.token.escaped);
	            }
	            case 'table': {
	                var header = '',
	                    body = '',
	                    i,
	                    row,
	                    cell,
	                    j;
	
	                // header
	                cell = '';
	                for (i = 0; i < this.token.header.length; i++) {
	                    cell += this.renderer.tablecell(
	                        this.inline.output(this.token.header[i]),
	                        {header: true, align: this.token.align[i]}
	                    );
	                }
	                header += this.renderer.tablerow(cell);
	
	                for (i = 0; i < this.token.cells.length; i++) {
	                    row = this.token.cells[i];
	
	                    cell = '';
	                    for (j = 0; j < row.length; j++) {
	                        cell += this.renderer.tablecell(
	                            this.inline.output(row[j]),
	                            {header: false, align: this.token.align[j]}
	                        );
	                    }
	
	                    body += this.renderer.tablerow(cell);
	                }
	                return this.renderer.table(header, body);
	            }
	            case 'blockquote_start': {
	                body = '';
	
	                while (this.next().type !== 'blockquote_end') {
	                    body += this.tok();
	                }
	
	                return this.renderer.blockquote(body);
	            }
	            case 'list_start': {
	                body = '';
	                var ordered = this.token.ordered,
	                    start = this.token.start;
	
	                while (this.next().type !== 'list_end') {
	                    body += this.tok();
	                }
	
	                return this.renderer.list(body, ordered, start);
	            }
	            case 'list_item_start': {
	                body = '';
	
	                while (this.next().type !== 'list_item_end') {
	                    body += this.token.type === 'text'
	                        ? this.parseText()
	                        : this.tok();
	                }
	
	                return this.renderer.listitem(body);
	            }
	            case 'loose_item_start': {
	                body = '';
	
	                while (this.next().type !== 'list_item_end') {
	                    body += this.tok();
	                }
	
	                return this.renderer.listitem(body);
	            }
	            case 'html': {
	                var html = !this.token.pre && !this.options.pedantic
	                    ? this.inline.output(this.token.text)
	                    : this.token.text;
	                return this.renderer.html(html);
	            }
	            case 'paragraph': {
	                return this.renderer.paragraph(this.inline.output(this.token.text));
	            }
	            case 'text': {
	                return this.renderer.paragraph(this.parseText());
	            }
	        }
	    };
	
	    /**
	     * Helpers
	     */
	
	    function escape(html, encode) {
	        return html
	            .replace(!encode ? /&(?!#?\w+;)/g : /&/g, '&amp;')
	            .replace(/</g, '&lt;')
	            .replace(/>/g, '&gt;')
	            .replace(/"/g, '&quot;')
	            .replace(/'/g, '&#39;');
	    }
	
	    function unescape(html) {
	        // explicitly match decimal, hex, and named HTML entities
	        return html.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, function (_, n) {
	            n = n.toLowerCase();
	            if (n === 'colon') return ':';
	            if (n.charAt(0) === '#') {
	                return n.charAt(1) === 'x'
	                    ? String.fromCharCode(parseInt(n.substring(2), 16))
	                    : String.fromCharCode(+n.substring(1));
	            }
	            return '';
	        });
	    }
	
	    function edit(regex, opt) {
	        regex = regex.source;
	        opt = opt || '';
	        return {
	            replace: function (name, val) {
	                val = val.source || val;
	                val = val.replace(/(^|[^\[])\^/g, '$1');
	                regex = regex.replace(name, val);
	                return this;
	            },
	            getRegex: function () {
	                return new RegExp(regex, opt);
	            }
	        };
	    }
	
	    function resolveUrl(base, href) {
	        if (!baseUrls[' ' + base]) {
	            // we can ignore everything in base after the last slash of its path component,
	            // but we might need to add _that_
	            // https://tools.ietf.org/html/rfc3986#section-3
	            if (/^[^:]+:\/*[^/]*$/.test(base)) {
	                baseUrls[' ' + base] = base + '/';
	            } else {
	                baseUrls[' ' + base] = base.replace(/[^/]*$/, '');
	            }
	        }
	        base = baseUrls[' ' + base];
	
	        if (href.slice(0, 2) === '//') {
	            return base.replace(/:[\s\S]*/, ':') + href;
	        } else if (href.charAt(0) === '/') {
	            return base.replace(/(:\/*[^/]*)[\s\S]*/, '$1') + href;
	        } else {
	            return base + href;
	        }
	    }
	
	    var baseUrls = {};
	    var originIndependentUrl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
	
	    function noop() {
	    }
	
	    noop.exec = noop;
	
	    function merge(obj) {
	        var i = 1,
	            target,
	            key;
	
	        for (; i < arguments.length; i++) {
	            target = arguments[i];
	            for (key in target) {
	                if (Object.prototype.hasOwnProperty.call(target, key)) {
	                    obj[key] = target[key];
	                }
	            }
	        }
	
	        return obj;
	    }
	
	    /**
	     * Marked
	     */
	
	    function marked(src, opt, callback) {
	        // throw error in case of non string input
	        if (typeof src === 'undefined' || src === null) {
	            throw new Error('marked(): input parameter is undefined or null');
	        }
	        if (typeof src !== 'string') {
	            throw new Error('marked(): input parameter is of type '
	                + Object.prototype.toString.call(src) + ', string expected');
	        }
	
	        if (callback || typeof opt === 'function') {
	            if (!callback) {
	                callback = opt;
	                opt = null;
	            }
	
	            opt = merge({}, marked.defaults, opt || {});
	
	            var highlight = opt.highlight,
	                tokens,
	                pending,
	                i = 0;
	
	            try {
	                tokens = Lexer.lex(src, opt)
	            } catch (e) {
	                return callback(e);
	            }
	
	            pending = tokens.length;
	
	            var done = function (err) {
	                if (err) {
	                    opt.highlight = highlight;
	                    return callback(err);
	                }
	
	                var out;
	
	                try {
	                    out = Parser.parse(tokens, opt);
	                } catch (e) {
	                    err = e;
	                }
	
	                opt.highlight = highlight;
	
	                return err
	                    ? callback(err)
	                    : callback(null, out);
	            };
	
	            if (!highlight || highlight.length < 3) {
	                return done();
	            }
	
	            delete opt.highlight;
	
	            if (!pending) return done();
	
	            for (; i < tokens.length; i++) {
	                (function (token) {
	                    if (token.type !== 'code') {
	                        return --pending || done();
	                    }
	                    return highlight(token.text, token.lang, function (err, code) {
	                        if (err) return done(err);
	                        if (code == null || code === token.text) {
	                            return --pending || done();
	                        }
	                        token.text = code;
	                        token.escaped = true;
	                        --pending || done();
	                    });
	                })(tokens[i]);
	            }
	
	            return;
	        }
	        try {
	            if (opt) opt = merge({}, marked.defaults, opt);
	            return Parser.parse(Lexer.lex(src, opt), opt);
	        } catch (e) {
	            e.message += '\nPlease report this to https://github.com/markedjs/marked.';
	            if ((opt || marked.defaults).silent) {
	                return '<p>An error occurred:</p><pre>'
	                    + escape(e.message + '', true)
	                    + '</pre>';
	            }
	            throw e;
	        }
	    }
	
	    /**
	     * Options
	     */
	
	    marked.options =
	        marked.setOptions = function (opt) {
	            merge(marked.defaults, opt);
	            return marked;
	        };
	
	    marked.defaults = {
	        gfm: true,
	        tables: true,
	        breaks: false,
	        pedantic: false,
	        sanitize: false,
	        sanitizer: null,
	        mangle: true,
	        smartLists: false,
	        silent: false,
	        highlight: null,
	        langPrefix: 'lang-',
	        smartypants: false,
	        headerPrefix: '',
	        renderer: new Renderer(),
	        xhtml: false,
	        baseUrl: null
	    };
	
	    /**
	     * Expose
	     */
	
	    marked.Parser = Parser;
	    marked.parser = Parser.parse;
	
	    marked.Renderer = Renderer;
	    marked.TextRenderer = TextRenderer;
	
	    marked.Lexer = Lexer;
	    marked.lexer = Lexer.lex;
	
	    marked.InlineLexer = InlineLexer;
	    marked.inlineLexer = InlineLexer.output;
	
	    marked.parse = marked;
	
	    if (true) {
	        module.exports = marked;
	    } else if (typeof define === 'function' && define.amd) {
	        define(function () {
	            return marked;
	        });
	    } else {
	        root.marked = marked;
	    }
	})(this || (typeof window !== 'undefined' ? window : global));
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	})();
	
	var _get = function get(_x, _x2, _x3) {
	    var _again = true;_function: while (_again) {
	        var object = _x,
	            property = _x2,
	            receiver = _x3;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	            var parent = Object.getPrototypeOf(object);if (parent === null) {
	                return undefined;
	            } else {
	                _x = parent;_x2 = property;_x3 = receiver;_again = true;desc = parent = undefined;continue _function;
	            }
	        } else if ("value" in desc) {
	            return desc.value;
	        } else {
	            var getter = desc.get;if (getter === undefined) {
	                return undefined;
	            }return getter.call(receiver);
	        }
	    }
	};
	
	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { "default": obj };
	}
	
	function _interopRequireWildcard(obj) {
	    if (obj && obj.__esModule) {
	        return obj;
	    } else {
	        var newObj = {};if (obj != null) {
	            for (var key in obj) {
	                if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	            }
	        }newObj["default"] = obj;return newObj;
	    }
	}
	
	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}
	
	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var _react = __webpack_require__(1);
	
	var React = _interopRequireWildcard(_react);
	
	var _componentsPrivacyJs = __webpack_require__(59);
	
	var _componentsPrivacyJs2 = _interopRequireDefault(_componentsPrivacyJs);
	
	var PrivacyHandler = (function (_Component) {
	    _inherits(PrivacyHandler, _Component);
	
	    function PrivacyHandler() {
	        _classCallCheck(this, PrivacyHandler);
	
	        _get(Object.getPrototypeOf(PrivacyHandler.prototype), "constructor", this).apply(this, arguments);
	    }
	
	    _createClass(PrivacyHandler, [{
	        key: "render",
	        value: function render() {
	            return React.createElement("div", { className: "content" }, React.createElement("section", null, React.createElement(_componentsPrivacyJs2["default"], { link: "/data/footer/privacy.md" })));
	        }
	    }]);
	
	    return PrivacyHandler;
	})(_react.Component);
	
	exports["default"] = PrivacyHandler;
	module.exports = exports["default"];

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	})();
	
	var _get = function get(_x, _x2, _x3) {
	    var _again = true;_function: while (_again) {
	        var object = _x,
	            property = _x2,
	            receiver = _x3;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	            var parent = Object.getPrototypeOf(object);if (parent === null) {
	                return undefined;
	            } else {
	                _x = parent;_x2 = property;_x3 = receiver;_again = true;desc = parent = undefined;continue _function;
	            }
	        } else if ('value' in desc) {
	            return desc.value;
	        } else {
	            var getter = desc.get;if (getter === undefined) {
	                return undefined;
	            }return getter.call(receiver);
	        }
	    }
	};
	
	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError('Cannot call a class as a function');
	    }
	}
	
	function _inherits(subClass, superClass) {
	    if (typeof superClass !== 'function' && superClass !== null) {
	        throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _onlinejavaclassMarked = __webpack_require__(57);
	
	var _onlinejavaclassMarked2 = _interopRequireDefault(_onlinejavaclassMarked);
	
	var Privacy = (function (_Component) {
	    _inherits(Privacy, _Component);
	
	    function Privacy(props) {
	        _classCallCheck(this, Privacy);
	
	        _get(Object.getPrototypeOf(Privacy.prototype), 'constructor', this).call(this, props);
	        this.state = {};
	        this.getFromStore = this.getFromStore.bind(this);
	    }
	
	    _createClass(Privacy, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            //this.AppStore = this.context.flux.getStore('appStore');
	            //this.getFromStore();
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            // this.AppStore.addListener('change', this.getFromStore);
	            this.getResource(this.props.link);
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            // this.AppStore.removeListener('change', this.getFromStore);
	        }
	    }, {
	        key: 'getFromStore',
	        value: function getFromStore() {
	            this.setState(this.AppStore.getResource(this.props.link));
	        }
	    }, {
	        key: 'getResource',
	        value: function getResource(link) {
	            var _this = this;
	
	            var appActions = this.context.flux.getActions('appActions');
	            appActions.getResource({ src: link, link: link }).then(function (result) {
	                if (result && result.text) {
	                    _this.setState({ text: result.text });
	                }
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            if (this.state.STORE_MISS) {
	                return _react2['default'].createElement('div', null);
	            } else {
	                var txt = (0, _onlinejavaclassMarked2['default'])(this.state.text);
	                return _react2['default'].createElement('div', { className: 'markdown', dangerouslySetInnerHTML: { __html: txt } });
	            }
	        }
	    }]);
	
	    return Privacy;
	})(_react.Component);
	
	exports['default'] = Privacy;
	module.exports = exports['default'];

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	})();
	
	var _get = function get(_x, _x2, _x3) {
	    var _again = true;_function: while (_again) {
	        var object = _x,
	            property = _x2,
	            receiver = _x3;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	            var parent = Object.getPrototypeOf(object);if (parent === null) {
	                return undefined;
	            } else {
	                _x = parent;_x2 = property;_x3 = receiver;_again = true;desc = parent = undefined;continue _function;
	            }
	        } else if ('value' in desc) {
	            return desc.value;
	        } else {
	            var getter = desc.get;if (getter === undefined) {
	                return undefined;
	            }return getter.call(receiver);
	        }
	    }
	};
	
	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError('Cannot call a class as a function');
	    }
	}
	
	function _inherits(subClass, superClass) {
	    if (typeof superClass !== 'function' && superClass !== null) {
	        throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(20);
	
	var _utilsTimerJs = __webpack_require__(61);
	
	var _componentsPopupJs = __webpack_require__(62);
	
	var _componentsPopupJs2 = _interopRequireDefault(_componentsPopupJs);
	
	var _componentsNewsletterJs = __webpack_require__(63);
	
	var _componentsNewsletterJs2 = _interopRequireDefault(_componentsNewsletterJs);
	
	var _reactCookies = __webpack_require__(78);
	
	var _reactCookies2 = _interopRequireDefault(_reactCookies);
	
	var _componentsDatenschutzJs = __webpack_require__(81);
	
	var _componentsDatenschutzJs2 = _interopRequireDefault(_componentsDatenschutzJs);
	
	var ExperimentsHandler = (function (_Component) {
	    _inherits(ExperimentsHandler, _Component);
	
	    function ExperimentsHandler(props) {
	        _classCallCheck(this, ExperimentsHandler);
	
	        _get(Object.getPrototypeOf(ExperimentsHandler.prototype), 'constructor', this).call(this, props);
	        this.state = {
	            showDataSchutzen: _reactCookies2['default'].load('showDataSchutzen'),
	            showPopup: _reactCookies2['default'].load('showPopup'),
	            query: ''
	        };
	
	        this.closePopup = this.closePopup.bind(this);
	        this.closeDataschutzen = this.closeDataschutzen.bind(this);
	        this.handleChange = this.handleChange.bind(this);
	        this.handleSearch = this.handleSearch.bind(this);
	        this.setSearchQuery = this.setSearchQuery.bind(this);
	    }
	
	    _createClass(ExperimentsHandler, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            var that = this;
	            this.handleSearchDebounced = (0, _utilsTimerJs.debounce)(function () {
	                this.handleSearch.apply(that, [this.state.query]);
	            }, 500);
	        }
	    }, {
	        key: 'handleChange',
	        value: function handleChange(event) {
	            var query = event.target.value;
	            this.setState({ query: query });
	            this.handleSearchDebounced();
	        }
	    }, {
	        key: 'handleSearch',
	        value: function handleSearch(query) {
	            if (query && query.length > 0) {
	                this.context.router.transitionTo('/search/' + query);
	            }
	        }
	    }, {
	        key: 'setSearchQuery',
	        value: function setSearchQuery(query) {
	            this.setState({ query: query });
	        }
	    }, {
	        key: 'closePopup',
	        value: function closePopup() {
	            this.setState({
	                showPopup: true
	            });
	            _reactCookies2['default'].save('showPopup', true);
	        }
	    }, {
	        key: 'closeDataschutzen',
	        value: function closeDataschutzen() {
	            this.setState({
	                showDataSchutzen: true
	            });
	            _reactCookies2['default'].save('showDataSchutzen', true);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2['default'].createElement('div', { className: 'content' }, _react2['default'].createElement('div', { className: 'search' }, _react2['default'].createElement('div', { className: 'search-wrap-1' }, _react2['default'].createElement('input', { type: 'text', value: this.state.query, onChange: this.handleChange,
	                placeholder: 'Search in experiments' }))), _react2['default'].createElement('section', null, _react2['default'].createElement('ul', { className: 'menu with-search' }, _react2['default'].createElement('li', { className: 'item' }, _react2['default'].createElement(_reactRouter.Link, { to: 'experimentarchive' }, _react2['default'].createElement('i', { className: 'fap fap-archive' }), _react2['default'].createElement('div', { className: 'text' }, 'Archive'))), _react2['default'].createElement('li', { className: 'item' }, _react2['default'].createElement(_reactRouter.Link, { to: 'experimenttags' }, _react2['default'].createElement('i', { className: 'fap fap-tags' }), _react2['default'].createElement('div', { className: 'text' }, 'Tags')))), _react2['default'].createElement(_reactRouter.RouteHandler, { setSearchQuery: this.setSearchQuery })), _react2['default'].createElement(_componentsNewsletterJs2['default'], null), _react2['default'].createElement(_componentsPopupJs2['default'], {
	                show: this.state.showPopup,
	                text: 'Newsletter',
	                closePopup: this.closePopup
	            }), _react2['default'].createElement(_componentsDatenschutzJs2['default'], {
	                show: this.state.showDataSchutzen,
	                closePopup: this.closeDataschutzen
	            }));
	        }
	    }]);
	
	    return ExperimentsHandler;
	})(_react.Component);
	
	exports['default'] = ExperimentsHandler;
	module.exports = exports['default'];

/***/ }),
/* 61 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.debounce = debounce;
	
	function debounce(func, wait, immediate) {
	  var timeout;
	  return function () {
	    var context = this,
	        args = arguments;
	    var later = function later() {
	      timeout = null;
	      if (!immediate) {
	        func.apply(context, args);
	      }
	    };
	    var callNow = immediate && !timeout;
	    clearTimeout(timeout);
	    timeout = setTimeout(later, wait);
	    if (callNow) {
	      func.apply(context, args);
	    }
	  };
	}
	
	var delay = function delay(time) {
	  return new Promise(function (resolve) {
	    return setTimeout(resolve, time);
	  });
	};
	exports.delay = delay;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	})();
	
	var _get = function get(_x, _x2, _x3) {
	    var _again = true;_function: while (_again) {
	        var object = _x,
	            property = _x2,
	            receiver = _x3;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	            var parent = Object.getPrototypeOf(object);if (parent === null) {
	                return undefined;
	            } else {
	                _x = parent;_x2 = property;_x3 = receiver;_again = true;desc = parent = undefined;continue _function;
	            }
	        } else if ('value' in desc) {
	            return desc.value;
	        } else {
	            var getter = desc.get;if (getter === undefined) {
	                return undefined;
	            }return getter.call(receiver);
	        }
	    }
	};
	
	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError('Cannot call a class as a function');
	    }
	}
	
	function _inherits(subClass, superClass) {
	    if (typeof superClass !== 'function' && superClass !== null) {
	        throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _NewsletterJs = __webpack_require__(63);
	
	var _NewsletterJs2 = _interopRequireDefault(_NewsletterJs);
	
	var Popup = (function (_React$Component) {
	    _inherits(Popup, _React$Component);
	
	    function Popup(props) {
	        _classCallCheck(this, Popup);
	
	        _get(Object.getPrototypeOf(Popup.prototype), 'constructor', this).call(this, props);
	    }
	
	    _createClass(Popup, [{
	        key: 'render',
	        value: function render() {
	            return _react2['default'].createElement('div', { className: 'main-popup', hidden: this.props.show }, _react2['default'].createElement('div', { className: 'popup' }, _react2['default'].createElement('h1', null, this.props.text), _react2['default'].createElement(_NewsletterJs2['default'], null), _react2['default'].createElement('button', { className: 'button button1', onClick: this.props.closePopup }, 'close me')));
	        }
	    }]);
	
	    return Popup;
	})(_react2['default'].Component);
	
	exports['default'] = Popup;
	module.exports = exports['default'];

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	})();
	
	var _get = function get(_x, _x2, _x3) {
	    var _again = true;_function: while (_again) {
	        var object = _x,
	            property = _x2,
	            receiver = _x3;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	            var parent = Object.getPrototypeOf(object);if (parent === null) {
	                return undefined;
	            } else {
	                _x = parent;_x2 = property;_x3 = receiver;_again = true;desc = parent = undefined;continue _function;
	            }
	        } else if ('value' in desc) {
	            return desc.value;
	        } else {
	            var getter = desc.get;if (getter === undefined) {
	                return undefined;
	            }return getter.call(receiver);
	        }
	    }
	};
	
	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError('Cannot call a class as a function');
	    }
	}
	
	function _inherits(subClass, superClass) {
	    if (typeof superClass !== 'function' && superClass !== null) {
	        throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilsHttpRequest = __webpack_require__(64);
	
	var _utilsHttpRequest2 = _interopRequireDefault(_utilsHttpRequest);
	
	var Newsletter = (function (_React$Component) {
	    _inherits(Newsletter, _React$Component);
	
	    function Newsletter(props) {
	        var _this = this;
	
	        _classCallCheck(this, Newsletter);
	
	        _get(Object.getPrototypeOf(Newsletter.prototype), 'constructor', this).call(this, props);
	
	        this.submitEmail = function callee$2$0(event) {
	            var URL;
	            return regeneratorRuntime.async(function callee$2$0$(context$3$0) {
	                while (1) switch (context$3$0.prev = context$3$0.next) {
	                    case 0:
	                        event.preventDefault();
	                        URL = 'https://o91o15qwvf.execute-api.eu-central-1.amazonaws.com/Prod/newsletter?email=' + this.state.email;
	
	                        this.setState({ email: '' });
	                        this.setState({ subscribed: true });
	                        context$3$0.next = 6;
	                        return regeneratorRuntime.awrap(_utilsHttpRequest2['default'].get(URL).exec().then(function (val) {
	                            return val.body;
	                        }));
	
	                    case 6:
	                        return context$3$0.abrupt('return', context$3$0.sent);
	
	                    case 7:
	                    case 'end':
	                        return context$3$0.stop();
	                }
	            }, null, _this);
	        };
	
	        this.state = {
	            subscribed: false,
	            email: ''
	        };
	        this.handleEmailChange = this.handleEmailChange.bind(this);
	    }
	
	    _createClass(Newsletter, [{
	        key: 'handleEmailChange',
	        value: function handleEmailChange(event) {
	            this.setState({ email: event.target.value });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            if (this.state.STORE_MISS) {
	                return _react2['default'].createElement('div', null);
	            } else {
	                return _react2['default'].createElement('div', { className: 'newsletter' }, _react2['default'].createElement('div', { className: 'popup' }, _react2['default'].createElement('span', null, _react2['default'].createElement('small', null, 'I WON\'T SPAM YOU! You will be updated with newest Java classes if you insert your email here and press subscribe!')), _react2['default'].createElement('form', { method: 'GET', onSubmit: this.submitEmail }, _react2['default'].createElement('div', { hidden: !this.state.subscribed }, 'Thank you!'), _react2['default'].createElement('input', { type: 'email', name: 'email', placeholder: 'Your Email Please',
	                    value: this.state.email, onChange: this.handleEmailChange,
	                    hidden: this.state.subscribed, required: true }, _react2['default'].createElement('button', { className: 'button button1', type: 'submit', disabled: this.state.subscribed }, 'Subscribe')))));
	            }
	        }
	    }]);
	
	    return Newsletter;
	})(_react2['default'].Component);
	
	exports['default'] = Newsletter;
	module.exports = exports['default'];

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	var _superagent = __webpack_require__(65);
	
	var _superagent2 = _interopRequireDefault(_superagent);
	
	_superagent.Request.prototype.jsonp = function () {
	
	  var sel = undefined;
	
	  this.jsonpCallbackName = 'superagentCallback' + new Date().valueOf() + parseInt(Math.random() * 1000);
	
	  window[this.jsonpCallbackName] = (function (data) {
	    delete window[this.jsonpCallbackName];
	    sel.parentNode.removeChild(sel);
	    this.callback.apply(this, [null, data]);
	  }).bind(this);
	
	  this.end = function (fn) {
	    this.callback = fn;
	
	    sel = document.createElement('script');
	    var sep = this.url.indexOf('?') === -1 ? '?' : '&';
	    sel.src = this.url + sep + 'callback=' + this.jsonpCallbackName;
	    document.getElementsByTagName('head')[0].appendChild(sel);
	  };
	
	  return this;
	};
	
	_superagent.Request.prototype.exec = function () {
	  var req = this;
	
	  return new Promise(function (resolve, reject) {
	    req.end(function (error, res) {
	      if (error) {
	        return reject(error);
	      }
	      resolve(res);
	    });
	  });
	};
	
	exports['default'] = _superagent2['default'];
	module.exports = exports['default'];

/***/ }),
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.load = load;
	exports.loadAll = loadAll;
	exports.select = select;
	exports.save = save;
	exports.remove = remove;
	exports.setRawCookie = setRawCookie;
	exports.plugToRequest = plugToRequest;
	
	var _cookie = __webpack_require__(79);
	
	var _cookie2 = _interopRequireDefault(_cookie);
	
	var _objectAssign = __webpack_require__(80);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var IS_NODE = typeof document === 'undefined' || typeof process !== 'undefined' && process.env && process.env.NODE_ENV === 'test';
	var _rawCookie = {};
	var _res = void 0;
	
	function _isResWritable() {
	  return _res && !_res.headersSent;
	}
	
	function load(name, doNotParse) {
	  var cookies = IS_NODE ? _rawCookie : _cookie2.default.parse(document.cookie);
	  var cookieVal = cookies && cookies[name];
	
	  if (typeof doNotParse === 'undefined') {
	    doNotParse = !cookieVal || cookieVal[0] !== '{' && cookieVal[0] !== '[';
	  }
	
	  if (!doNotParse) {
	    try {
	      cookieVal = JSON.parse(cookieVal);
	    } catch (err) {
	      // Not serialized object
	    }
	  }
	
	  return cookieVal;
	}
	
	function loadAll(doNotParse) {
	  var cookies = IS_NODE ? _rawCookie : _cookie2.default.parse(document.cookie);
	  var cookieVal = cookies;
	
	  if (typeof doNotParse === 'undefined') {
	    doNotParse = !cookieVal || cookieVal[0] !== '{' && cookieVal[0] !== '[';
	  }
	
	  if (!doNotParse) {
	    try {
	      cookieVal = JSON.parse(cookieVal);
	    } catch (err) {
	      // Not serialized object
	    }
	  }
	
	  return cookieVal;
	}
	
	function select(regex) {
	  var cookies = IS_NODE ? _rawCookie : _cookie2.default.parse(document.cookie);
	
	  if (!cookies) {
	    return {};
	  }
	
	  if (!regex) {
	    return cookies;
	  }
	
	  return Object.keys(cookies).reduce(function (accumulator, name) {
	    if (!regex.test(name)) {
	      return accumulator;
	    }
	
	    var newCookie = {};
	    newCookie[name] = cookies[name];
	    return (0, _objectAssign2.default)({}, accumulator, newCookie);
	  }, {});
	}
	
	function save(name, val, opt) {
	  _rawCookie[name] = val;
	
	  // Allow you to work with cookies as objects.
	  if ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object') {
	    _rawCookie[name] = JSON.stringify(val);
	  }
	
	  // Cookies only work in the browser
	  if (!IS_NODE) {
	    document.cookie = _cookie2.default.serialize(name, _rawCookie[name], opt);
	  }
	
	  if (_isResWritable() && _res.cookie) {
	    _res.cookie(name, val, opt);
	  }
	}
	
	function remove(name, opt) {
	  delete _rawCookie[name];
	
	  if (typeof opt === 'undefined') {
	    opt = {};
	  } else if (typeof opt === 'string') {
	    // Will be deprecated in future versions
	    opt = { path: opt };
	  } else {
	    // Prevent mutation of opt below
	    opt = (0, _objectAssign2.default)({}, opt);
	  }
	
	  if (typeof document !== 'undefined') {
	    opt.expires = new Date(1970, 1, 1, 0, 0, 1);
	    opt.maxAge = 0;
	    document.cookie = _cookie2.default.serialize(name, '', opt);
	  }
	
	  if (_isResWritable() && _res.clearCookie) {
	    _res.clearCookie(name, opt);
	  }
	}
	
	function setRawCookie(rawCookie) {
	  if (rawCookie) {
	    _rawCookie = _cookie2.default.parse(rawCookie);
	  } else {
	    _rawCookie = {};
	  }
	}
	
	function plugToRequest(req, res) {
	  if (req.cookie) {
	    _rawCookie = req.cookie;
	  } else if (req.cookies) {
	    _rawCookie = req.cookies;
	  } else if (req.headers && req.headers.cookie) {
	    setRawCookie(req.headers.cookie);
	  } else {
	    _rawCookie = {};
	  }
	
	  _res = res;
	
	  return function unplug() {
	    _res = null;
	    _rawCookie = {};
	  };
	}
	
	exports.default = {
	  setRawCookie: setRawCookie,
	  load: load,
	  loadAll: loadAll,
	  select: select,
	  save: save,
	  remove: remove,
	  plugToRequest: plugToRequest
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 79 */
/***/ (function(module, exports) {

	/*!
	 * cookie
	 * Copyright(c) 2012-2014 Roman Shtylman
	 * Copyright(c) 2015 Douglas Christopher Wilson
	 * MIT Licensed
	 */
	
	'use strict';
	
	/**
	 * Module exports.
	 * @public
	 */
	
	exports.parse = parse;
	exports.serialize = serialize;
	
	/**
	 * Module variables.
	 * @private
	 */
	
	var decode = decodeURIComponent;
	var encode = encodeURIComponent;
	var pairSplitRegExp = /; */;
	
	/**
	 * RegExp to match field-content in RFC 7230 sec 3.2
	 *
	 * field-content = field-vchar [ 1*( SP / HTAB ) field-vchar ]
	 * field-vchar   = VCHAR / obs-text
	 * obs-text      = %x80-FF
	 */
	
	var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
	
	/**
	 * Parse a cookie header.
	 *
	 * Parse the given cookie header string into an object
	 * The object has the various cookies as keys(names) => values
	 *
	 * @param {string} str
	 * @param {object} [options]
	 * @return {object}
	 * @public
	 */
	
	function parse(str, options) {
	  if (typeof str !== 'string') {
	    throw new TypeError('argument str must be a string');
	  }
	
	  var obj = {}
	  var opt = options || {};
	  var pairs = str.split(pairSplitRegExp);
	  var dec = opt.decode || decode;
	
	  for (var i = 0; i < pairs.length; i++) {
	    var pair = pairs[i];
	    var eq_idx = pair.indexOf('=');
	
	    // skip things that don't look like key=value
	    if (eq_idx < 0) {
	      continue;
	    }
	
	    var key = pair.substr(0, eq_idx).trim()
	    var val = pair.substr(++eq_idx, pair.length).trim();
	
	    // quoted values
	    if ('"' == val[0]) {
	      val = val.slice(1, -1);
	    }
	
	    // only assign once
	    if (undefined == obj[key]) {
	      obj[key] = tryDecode(val, dec);
	    }
	  }
	
	  return obj;
	}
	
	/**
	 * Serialize data into a cookie header.
	 *
	 * Serialize the a name value pair into a cookie string suitable for
	 * http headers. An optional options object specified cookie parameters.
	 *
	 * serialize('foo', 'bar', { httpOnly: true })
	 *   => "foo=bar; httpOnly"
	 *
	 * @param {string} name
	 * @param {string} val
	 * @param {object} [options]
	 * @return {string}
	 * @public
	 */
	
	function serialize(name, val, options) {
	  var opt = options || {};
	  var enc = opt.encode || encode;
	
	  if (typeof enc !== 'function') {
	    throw new TypeError('option encode is invalid');
	  }
	
	  if (!fieldContentRegExp.test(name)) {
	    throw new TypeError('argument name is invalid');
	  }
	
	  var value = enc(val);
	
	  if (value && !fieldContentRegExp.test(value)) {
	    throw new TypeError('argument val is invalid');
	  }
	
	  var str = name + '=' + value;
	
	  if (null != opt.maxAge) {
	    var maxAge = opt.maxAge - 0;
	    if (isNaN(maxAge)) throw new Error('maxAge should be a Number');
	    str += '; Max-Age=' + Math.floor(maxAge);
	  }
	
	  if (opt.domain) {
	    if (!fieldContentRegExp.test(opt.domain)) {
	      throw new TypeError('option domain is invalid');
	    }
	
	    str += '; Domain=' + opt.domain;
	  }
	
	  if (opt.path) {
	    if (!fieldContentRegExp.test(opt.path)) {
	      throw new TypeError('option path is invalid');
	    }
	
	    str += '; Path=' + opt.path;
	  }
	
	  if (opt.expires) {
	    if (typeof opt.expires.toUTCString !== 'function') {
	      throw new TypeError('option expires is invalid');
	    }
	
	    str += '; Expires=' + opt.expires.toUTCString();
	  }
	
	  if (opt.httpOnly) {
	    str += '; HttpOnly';
	  }
	
	  if (opt.secure) {
	    str += '; Secure';
	  }
	
	  if (opt.sameSite) {
	    var sameSite = typeof opt.sameSite === 'string'
	      ? opt.sameSite.toLowerCase() : opt.sameSite;
	
	    switch (sameSite) {
	      case true:
	        str += '; SameSite=Strict';
	        break;
	      case 'lax':
	        str += '; SameSite=Lax';
	        break;
	      case 'strict':
	        str += '; SameSite=Strict';
	        break;
	      default:
	        throw new TypeError('option sameSite is invalid');
	    }
	  }
	
	  return str;
	}
	
	/**
	 * Try decoding a string using a decoding function.
	 *
	 * @param {string} str
	 * @param {function} decode
	 * @private
	 */
	
	function tryDecode(str, decode) {
	  try {
	    return decode(str);
	  } catch (e) {
	    return str;
	  }
	}


/***/ }),
/* 80 */
/***/ (function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	
	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}
	
			// Detect buggy property enumeration order in older V8 versions.
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}
	
			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}
	
	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	})();
	
	var _get = function get(_x, _x2, _x3) {
	    var _again = true;_function: while (_again) {
	        var object = _x,
	            property = _x2,
	            receiver = _x3;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	            var parent = Object.getPrototypeOf(object);if (parent === null) {
	                return undefined;
	            } else {
	                _x = parent;_x2 = property;_x3 = receiver;_again = true;desc = parent = undefined;continue _function;
	            }
	        } else if ("value" in desc) {
	            return desc.value;
	        } else {
	            var getter = desc.get;if (getter === undefined) {
	                return undefined;
	            }return getter.call(receiver);
	        }
	    }
	};
	
	function _interopRequireWildcard(obj) {
	    if (obj && obj.__esModule) {
	        return obj;
	    } else {
	        var newObj = {};if (obj != null) {
	            for (var key in obj) {
	                if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	            }
	        }newObj["default"] = obj;return newObj;
	    }
	}
	
	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}
	
	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var _react = __webpack_require__(1);
	
	var React = _interopRequireWildcard(_react);
	
	var Datenschutz = (function (_React$Component) {
	    _inherits(Datenschutz, _React$Component);
	
	    function Datenschutz() {
	        _classCallCheck(this, Datenschutz);
	
	        _get(Object.getPrototypeOf(Datenschutz.prototype), "constructor", this).apply(this, arguments);
	    }
	
	    _createClass(Datenschutz, [{
	        key: "render",
	        value: function render() {
	            return React.createElement("div", { className: "consent_blackbar", hidden: this.props.show }, React.createElement("div", { className: "consent-track" }, React.createElement("div", { className: "consent-content" }, React.createElement("div", { className: "consent-text messageColumn" }, "We use cookies to improve your experience with the site. To find out more, you can read the full Privacy and Cookie Policy   ", React.createElement("a", { href: "https://onlinejavaclass.com/#/privacy", target: "_blank",
	                id: "privacy-button" }, "Privacy and Data Processing Policy")), React.createElement("div", { className: "buttonsColumn consent-buttons" }, React.createElement("span", { className: "repop-msg" }), React.createElement("button", { className: "button button1", onClick: this.props.closePopup }, "OK")))));
	        }
	    }]);
	
	    return Datenschutz;
	})(React.Component);
	
	exports["default"] = Datenschutz;
	module.exports = exports["default"];

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	})();
	
	var _get = function get(_x, _x2, _x3) {
	  var _again = true;_function: while (_again) {
	    var object = _x,
	        property = _x2,
	        receiver = _x3;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	      var parent = Object.getPrototypeOf(object);if (parent === null) {
	        return undefined;
	      } else {
	        _x = parent;_x2 = property;_x3 = receiver;_again = true;desc = parent = undefined;continue _function;
	      }
	    } else if ('value' in desc) {
	      return desc.value;
	    } else {
	      var getter = desc.get;if (getter === undefined) {
	        return undefined;
	      }return getter.call(receiver);
	    }
	  }
	};
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError('Cannot call a class as a function');
	  }
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== 'function' && superClass !== null) {
	    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _componentsItemListJs = __webpack_require__(83);
	
	var _componentsItemListJs2 = _interopRequireDefault(_componentsItemListJs);
	
	var _componentsSpinnerJs = __webpack_require__(220);
	
	var _componentsSpinnerJs2 = _interopRequireDefault(_componentsSpinnerJs);
	
	var ExperimentArchiveHandler = (function (_Component) {
	  _inherits(ExperimentArchiveHandler, _Component);
	
	  function ExperimentArchiveHandler(props) {
	    _classCallCheck(this, ExperimentArchiveHandler);
	
	    _get(Object.getPrototypeOf(ExperimentArchiveHandler.prototype), 'constructor', this).call(this, props);
	    this.state = {};
	  }
	
	  _createClass(ExperimentArchiveHandler, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      //this.AppStore = this.context.flux.getStore('appStore');
	      //this.getFromStore();
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      // this.AppStore.addListener('change', this.getFromStore);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      // this.AppStore.removeListener('change', this.getFromStore);
	    }
	  }, {
	    key: 'getFromStore',
	    value: function getFromStore() {
	      this.setState({ items: this.AppStore.getExperiments() });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var items = this.state.items;
	      var jsx = undefined;
	
	      if (items.STORE_MISS) {
	        jsx = _react2['default'].createElement(_componentsSpinnerJs2['default'], null);
	      } else {
	        jsx = _react2['default'].createElement(_componentsItemListJs2['default'], { src: items });
	      }
	
	      return jsx;
	    }
	  }]);
	
	  return ExperimentArchiveHandler;
	})(_react.Component);
	
	exports['default'] = ExperimentArchiveHandler;
	module.exports = exports['default'];

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	})();
	
	var _get = function get(_x, _x2, _x3) {
	    var _again = true;_function: while (_again) {
	        var object = _x,
	            property = _x2,
	            receiver = _x3;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	            var parent = Object.getPrototypeOf(object);if (parent === null) {
	                return undefined;
	            } else {
	                _x = parent;_x2 = property;_x3 = receiver;_again = true;desc = parent = undefined;continue _function;
	            }
	        } else if ('value' in desc) {
	            return desc.value;
	        } else {
	            var getter = desc.get;if (getter === undefined) {
	                return undefined;
	            }return getter.call(receiver);
	        }
	    }
	};
	
	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError('Cannot call a class as a function');
	    }
	}
	
	function _inherits(subClass, superClass) {
	    if (typeof superClass !== 'function' && superClass !== null) {
	        throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouterDom = __webpack_require__(18);
	
	var _moment = __webpack_require__(84);
	
	var _moment2 = _interopRequireDefault(_moment);
	
	var ItemList = (function (_React$Component) {
	    _inherits(ItemList, _React$Component);
	
	    function ItemList() {
	        _classCallCheck(this, ItemList);
	
	        _get(Object.getPrototypeOf(ItemList.prototype), 'constructor', this).apply(this, arguments);
	    }
	
	    _createClass(ItemList, [{
	        key: 'render',
	        value: function render() {
	            var items = this.props.src;
	            var jsx = undefined;
	
	            if (items.length === 0) {
	                jsx = _react2['default'].createElement('div', { className: 'post center-box' }, 'No data');
	            } else {
	                jsx = _react2['default'].createElement('div', { className: 'post center-box' }, items.map(function (it, i) {
	                    var date = it.date ? (0, _moment2['default'])(it.date).fromNow() : '';
	                    var title = it.title ? it.title : '';
	                    var tags = it.tags ? it.tags : '';
	                    var link = it.link.split('/').pop();
	                    return _react2['default'].createElement('div', null, _react2['default'].createElement('div', { key: i, className: 'post itemlist' }, _react2['default'].createElement('div', { className: 'date' }, date), _react2['default'].createElement(_reactRouterDom.Link, { className: 'post-title', to: 'experiment', params: { link: link } }, _react2['default'].createElement('span', null, title)), _react2['default'].createElement('div', { className: 'tags center-box' }, tags.map(function (tag, i) {
	                        return _react2['default'].createElement(_reactRouterDom.Link, { key: tag + i, className: 'tag', to: 'search', params: { query: tag } }, tag);
	                    }))));
	                }));
	            }
	
	            return jsx;
	        }
	    }]);
	
	    return ItemList;
	})(_react2['default'].Component);
	
	exports['default'] = ItemList;
	module.exports = exports['default'];

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

	var require;/* WEBPACK VAR INJECTION */(function(module) {//! moment.js
	//! version : 2.27.0
	//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
	//! license : MIT
	//! momentjs.com
	
	;(function (global, factory) {
	     true ? module.exports = factory() :
	    typeof define === 'function' && define.amd ? define(factory) :
	    global.moment = factory()
	}(this, (function () { 'use strict';
	
	    var hookCallback;
	
	    function hooks() {
	        return hookCallback.apply(null, arguments);
	    }
	
	    // This is done to register the method called with moment()
	    // without creating circular dependencies.
	    function setHookCallback(callback) {
	        hookCallback = callback;
	    }
	
	    function isArray(input) {
	        return (
	            input instanceof Array ||
	            Object.prototype.toString.call(input) === '[object Array]'
	        );
	    }
	
	    function isObject(input) {
	        // IE8 will treat undefined and null as object if it wasn't for
	        // input != null
	        return (
	            input != null &&
	            Object.prototype.toString.call(input) === '[object Object]'
	        );
	    }
	
	    function hasOwnProp(a, b) {
	        return Object.prototype.hasOwnProperty.call(a, b);
	    }
	
	    function isObjectEmpty(obj) {
	        if (Object.getOwnPropertyNames) {
	            return Object.getOwnPropertyNames(obj).length === 0;
	        } else {
	            var k;
	            for (k in obj) {
	                if (hasOwnProp(obj, k)) {
	                    return false;
	                }
	            }
	            return true;
	        }
	    }
	
	    function isUndefined(input) {
	        return input === void 0;
	    }
	
	    function isNumber(input) {
	        return (
	            typeof input === 'number' ||
	            Object.prototype.toString.call(input) === '[object Number]'
	        );
	    }
	
	    function isDate(input) {
	        return (
	            input instanceof Date ||
	            Object.prototype.toString.call(input) === '[object Date]'
	        );
	    }
	
	    function map(arr, fn) {
	        var res = [],
	            i;
	        for (i = 0; i < arr.length; ++i) {
	            res.push(fn(arr[i], i));
	        }
	        return res;
	    }
	
	    function extend(a, b) {
	        for (var i in b) {
	            if (hasOwnProp(b, i)) {
	                a[i] = b[i];
	            }
	        }
	
	        if (hasOwnProp(b, 'toString')) {
	            a.toString = b.toString;
	        }
	
	        if (hasOwnProp(b, 'valueOf')) {
	            a.valueOf = b.valueOf;
	        }
	
	        return a;
	    }
	
	    function createUTC(input, format, locale, strict) {
	        return createLocalOrUTC(input, format, locale, strict, true).utc();
	    }
	
	    function defaultParsingFlags() {
	        // We need to deep clone this object.
	        return {
	            empty: false,
	            unusedTokens: [],
	            unusedInput: [],
	            overflow: -2,
	            charsLeftOver: 0,
	            nullInput: false,
	            invalidEra: null,
	            invalidMonth: null,
	            invalidFormat: false,
	            userInvalidated: false,
	            iso: false,
	            parsedDateParts: [],
	            era: null,
	            meridiem: null,
	            rfc2822: false,
	            weekdayMismatch: false,
	        };
	    }
	
	    function getParsingFlags(m) {
	        if (m._pf == null) {
	            m._pf = defaultParsingFlags();
	        }
	        return m._pf;
	    }
	
	    var some;
	    if (Array.prototype.some) {
	        some = Array.prototype.some;
	    } else {
	        some = function (fun) {
	            var t = Object(this),
	                len = t.length >>> 0,
	                i;
	
	            for (i = 0; i < len; i++) {
	                if (i in t && fun.call(this, t[i], i, t)) {
	                    return true;
	                }
	            }
	
	            return false;
	        };
	    }
	
	    function isValid(m) {
	        if (m._isValid == null) {
	            var flags = getParsingFlags(m),
	                parsedParts = some.call(flags.parsedDateParts, function (i) {
	                    return i != null;
	                }),
	                isNowValid =
	                    !isNaN(m._d.getTime()) &&
	                    flags.overflow < 0 &&
	                    !flags.empty &&
	                    !flags.invalidEra &&
	                    !flags.invalidMonth &&
	                    !flags.invalidWeekday &&
	                    !flags.weekdayMismatch &&
	                    !flags.nullInput &&
	                    !flags.invalidFormat &&
	                    !flags.userInvalidated &&
	                    (!flags.meridiem || (flags.meridiem && parsedParts));
	
	            if (m._strict) {
	                isNowValid =
	                    isNowValid &&
	                    flags.charsLeftOver === 0 &&
	                    flags.unusedTokens.length === 0 &&
	                    flags.bigHour === undefined;
	            }
	
	            if (Object.isFrozen == null || !Object.isFrozen(m)) {
	                m._isValid = isNowValid;
	            } else {
	                return isNowValid;
	            }
	        }
	        return m._isValid;
	    }
	
	    function createInvalid(flags) {
	        var m = createUTC(NaN);
	        if (flags != null) {
	            extend(getParsingFlags(m), flags);
	        } else {
	            getParsingFlags(m).userInvalidated = true;
	        }
	
	        return m;
	    }
	
	    // Plugins that add properties should also add the key here (null value),
	    // so we can properly clone ourselves.
	    var momentProperties = (hooks.momentProperties = []),
	        updateInProgress = false;
	
	    function copyConfig(to, from) {
	        var i, prop, val;
	
	        if (!isUndefined(from._isAMomentObject)) {
	            to._isAMomentObject = from._isAMomentObject;
	        }
	        if (!isUndefined(from._i)) {
	            to._i = from._i;
	        }
	        if (!isUndefined(from._f)) {
	            to._f = from._f;
	        }
	        if (!isUndefined(from._l)) {
	            to._l = from._l;
	        }
	        if (!isUndefined(from._strict)) {
	            to._strict = from._strict;
	        }
	        if (!isUndefined(from._tzm)) {
	            to._tzm = from._tzm;
	        }
	        if (!isUndefined(from._isUTC)) {
	            to._isUTC = from._isUTC;
	        }
	        if (!isUndefined(from._offset)) {
	            to._offset = from._offset;
	        }
	        if (!isUndefined(from._pf)) {
	            to._pf = getParsingFlags(from);
	        }
	        if (!isUndefined(from._locale)) {
	            to._locale = from._locale;
	        }
	
	        if (momentProperties.length > 0) {
	            for (i = 0; i < momentProperties.length; i++) {
	                prop = momentProperties[i];
	                val = from[prop];
	                if (!isUndefined(val)) {
	                    to[prop] = val;
	                }
	            }
	        }
	
	        return to;
	    }
	
	    // Moment prototype object
	    function Moment(config) {
	        copyConfig(this, config);
	        this._d = new Date(config._d != null ? config._d.getTime() : NaN);
	        if (!this.isValid()) {
	            this._d = new Date(NaN);
	        }
	        // Prevent infinite loop in case updateOffset creates new moment
	        // objects.
	        if (updateInProgress === false) {
	            updateInProgress = true;
	            hooks.updateOffset(this);
	            updateInProgress = false;
	        }
	    }
	
	    function isMoment(obj) {
	        return (
	            obj instanceof Moment || (obj != null && obj._isAMomentObject != null)
	        );
	    }
	
	    function warn(msg) {
	        if (
	            hooks.suppressDeprecationWarnings === false &&
	            typeof console !== 'undefined' &&
	            console.warn
	        ) {
	            console.warn('Deprecation warning: ' + msg);
	        }
	    }
	
	    function deprecate(msg, fn) {
	        var firstTime = true;
	
	        return extend(function () {
	            if (hooks.deprecationHandler != null) {
	                hooks.deprecationHandler(null, msg);
	            }
	            if (firstTime) {
	                var args = [],
	                    arg,
	                    i,
	                    key;
	                for (i = 0; i < arguments.length; i++) {
	                    arg = '';
	                    if (typeof arguments[i] === 'object') {
	                        arg += '\n[' + i + '] ';
	                        for (key in arguments[0]) {
	                            if (hasOwnProp(arguments[0], key)) {
	                                arg += key + ': ' + arguments[0][key] + ', ';
	                            }
	                        }
	                        arg = arg.slice(0, -2); // Remove trailing comma and space
	                    } else {
	                        arg = arguments[i];
	                    }
	                    args.push(arg);
	                }
	                warn(
	                    msg +
	                        '\nArguments: ' +
	                        Array.prototype.slice.call(args).join('') +
	                        '\n' +
	                        new Error().stack
	                );
	                firstTime = false;
	            }
	            return fn.apply(this, arguments);
	        }, fn);
	    }
	
	    var deprecations = {};
	
	    function deprecateSimple(name, msg) {
	        if (hooks.deprecationHandler != null) {
	            hooks.deprecationHandler(name, msg);
	        }
	        if (!deprecations[name]) {
	            warn(msg);
	            deprecations[name] = true;
	        }
	    }
	
	    hooks.suppressDeprecationWarnings = false;
	    hooks.deprecationHandler = null;
	
	    function isFunction(input) {
	        return (
	            (typeof Function !== 'undefined' && input instanceof Function) ||
	            Object.prototype.toString.call(input) === '[object Function]'
	        );
	    }
	
	    function set(config) {
	        var prop, i;
	        for (i in config) {
	            if (hasOwnProp(config, i)) {
	                prop = config[i];
	                if (isFunction(prop)) {
	                    this[i] = prop;
	                } else {
	                    this['_' + i] = prop;
	                }
	            }
	        }
	        this._config = config;
	        // Lenient ordinal parsing accepts just a number in addition to
	        // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
	        // TODO: Remove "ordinalParse" fallback in next major release.
	        this._dayOfMonthOrdinalParseLenient = new RegExp(
	            (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
	                '|' +
	                /\d{1,2}/.source
	        );
	    }
	
	    function mergeConfigs(parentConfig, childConfig) {
	        var res = extend({}, parentConfig),
	            prop;
	        for (prop in childConfig) {
	            if (hasOwnProp(childConfig, prop)) {
	                if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
	                    res[prop] = {};
	                    extend(res[prop], parentConfig[prop]);
	                    extend(res[prop], childConfig[prop]);
	                } else if (childConfig[prop] != null) {
	                    res[prop] = childConfig[prop];
	                } else {
	                    delete res[prop];
	                }
	            }
	        }
	        for (prop in parentConfig) {
	            if (
	                hasOwnProp(parentConfig, prop) &&
	                !hasOwnProp(childConfig, prop) &&
	                isObject(parentConfig[prop])
	            ) {
	                // make sure changes to properties don't modify parent config
	                res[prop] = extend({}, res[prop]);
	            }
	        }
	        return res;
	    }
	
	    function Locale(config) {
	        if (config != null) {
	            this.set(config);
	        }
	    }
	
	    var keys;
	
	    if (Object.keys) {
	        keys = Object.keys;
	    } else {
	        keys = function (obj) {
	            var i,
	                res = [];
	            for (i in obj) {
	                if (hasOwnProp(obj, i)) {
	                    res.push(i);
	                }
	            }
	            return res;
	        };
	    }
	
	    var defaultCalendar = {
	        sameDay: '[Today at] LT',
	        nextDay: '[Tomorrow at] LT',
	        nextWeek: 'dddd [at] LT',
	        lastDay: '[Yesterday at] LT',
	        lastWeek: '[Last] dddd [at] LT',
	        sameElse: 'L',
	    };
	
	    function calendar(key, mom, now) {
	        var output = this._calendar[key] || this._calendar['sameElse'];
	        return isFunction(output) ? output.call(mom, now) : output;
	    }
	
	    function zeroFill(number, targetLength, forceSign) {
	        var absNumber = '' + Math.abs(number),
	            zerosToFill = targetLength - absNumber.length,
	            sign = number >= 0;
	        return (
	            (sign ? (forceSign ? '+' : '') : '-') +
	            Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) +
	            absNumber
	        );
	    }
	
	    var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
	        localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
	        formatFunctions = {},
	        formatTokenFunctions = {};
	
	    // token:    'M'
	    // padded:   ['MM', 2]
	    // ordinal:  'Mo'
	    // callback: function () { this.month() + 1 }
	    function addFormatToken(token, padded, ordinal, callback) {
	        var func = callback;
	        if (typeof callback === 'string') {
	            func = function () {
	                return this[callback]();
	            };
	        }
	        if (token) {
	            formatTokenFunctions[token] = func;
	        }
	        if (padded) {
	            formatTokenFunctions[padded[0]] = function () {
	                return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
	            };
	        }
	        if (ordinal) {
	            formatTokenFunctions[ordinal] = function () {
	                return this.localeData().ordinal(
	                    func.apply(this, arguments),
	                    token
	                );
	            };
	        }
	    }
	
	    function removeFormattingTokens(input) {
	        if (input.match(/\[[\s\S]/)) {
	            return input.replace(/^\[|\]$/g, '');
	        }
	        return input.replace(/\\/g, '');
	    }
	
	    function makeFormatFunction(format) {
	        var array = format.match(formattingTokens),
	            i,
	            length;
	
	        for (i = 0, length = array.length; i < length; i++) {
	            if (formatTokenFunctions[array[i]]) {
	                array[i] = formatTokenFunctions[array[i]];
	            } else {
	                array[i] = removeFormattingTokens(array[i]);
	            }
	        }
	
	        return function (mom) {
	            var output = '',
	                i;
	            for (i = 0; i < length; i++) {
	                output += isFunction(array[i])
	                    ? array[i].call(mom, format)
	                    : array[i];
	            }
	            return output;
	        };
	    }
	
	    // format date using native date object
	    function formatMoment(m, format) {
	        if (!m.isValid()) {
	            return m.localeData().invalidDate();
	        }
	
	        format = expandFormat(format, m.localeData());
	        formatFunctions[format] =
	            formatFunctions[format] || makeFormatFunction(format);
	
	        return formatFunctions[format](m);
	    }
	
	    function expandFormat(format, locale) {
	        var i = 5;
	
	        function replaceLongDateFormatTokens(input) {
	            return locale.longDateFormat(input) || input;
	        }
	
	        localFormattingTokens.lastIndex = 0;
	        while (i >= 0 && localFormattingTokens.test(format)) {
	            format = format.replace(
	                localFormattingTokens,
	                replaceLongDateFormatTokens
	            );
	            localFormattingTokens.lastIndex = 0;
	            i -= 1;
	        }
	
	        return format;
	    }
	
	    var defaultLongDateFormat = {
	        LTS: 'h:mm:ss A',
	        LT: 'h:mm A',
	        L: 'MM/DD/YYYY',
	        LL: 'MMMM D, YYYY',
	        LLL: 'MMMM D, YYYY h:mm A',
	        LLLL: 'dddd, MMMM D, YYYY h:mm A',
	    };
	
	    function longDateFormat(key) {
	        var format = this._longDateFormat[key],
	            formatUpper = this._longDateFormat[key.toUpperCase()];
	
	        if (format || !formatUpper) {
	            return format;
	        }
	
	        this._longDateFormat[key] = formatUpper
	            .match(formattingTokens)
	            .map(function (tok) {
	                if (
	                    tok === 'MMMM' ||
	                    tok === 'MM' ||
	                    tok === 'DD' ||
	                    tok === 'dddd'
	                ) {
	                    return tok.slice(1);
	                }
	                return tok;
	            })
	            .join('');
	
	        return this._longDateFormat[key];
	    }
	
	    var defaultInvalidDate = 'Invalid date';
	
	    function invalidDate() {
	        return this._invalidDate;
	    }
	
	    var defaultOrdinal = '%d',
	        defaultDayOfMonthOrdinalParse = /\d{1,2}/;
	
	    function ordinal(number) {
	        return this._ordinal.replace('%d', number);
	    }
	
	    var defaultRelativeTime = {
	        future: 'in %s',
	        past: '%s ago',
	        s: 'a few seconds',
	        ss: '%d seconds',
	        m: 'a minute',
	        mm: '%d minutes',
	        h: 'an hour',
	        hh: '%d hours',
	        d: 'a day',
	        dd: '%d days',
	        w: 'a week',
	        ww: '%d weeks',
	        M: 'a month',
	        MM: '%d months',
	        y: 'a year',
	        yy: '%d years',
	    };
	
	    function relativeTime(number, withoutSuffix, string, isFuture) {
	        var output = this._relativeTime[string];
	        return isFunction(output)
	            ? output(number, withoutSuffix, string, isFuture)
	            : output.replace(/%d/i, number);
	    }
	
	    function pastFuture(diff, output) {
	        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
	        return isFunction(format) ? format(output) : format.replace(/%s/i, output);
	    }
	
	    var aliases = {};
	
	    function addUnitAlias(unit, shorthand) {
	        var lowerCase = unit.toLowerCase();
	        aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
	    }
	
	    function normalizeUnits(units) {
	        return typeof units === 'string'
	            ? aliases[units] || aliases[units.toLowerCase()]
	            : undefined;
	    }
	
	    function normalizeObjectUnits(inputObject) {
	        var normalizedInput = {},
	            normalizedProp,
	            prop;
	
	        for (prop in inputObject) {
	            if (hasOwnProp(inputObject, prop)) {
	                normalizedProp = normalizeUnits(prop);
	                if (normalizedProp) {
	                    normalizedInput[normalizedProp] = inputObject[prop];
	                }
	            }
	        }
	
	        return normalizedInput;
	    }
	
	    var priorities = {};
	
	    function addUnitPriority(unit, priority) {
	        priorities[unit] = priority;
	    }
	
	    function getPrioritizedUnits(unitsObj) {
	        var units = [],
	            u;
	        for (u in unitsObj) {
	            if (hasOwnProp(unitsObj, u)) {
	                units.push({ unit: u, priority: priorities[u] });
	            }
	        }
	        units.sort(function (a, b) {
	            return a.priority - b.priority;
	        });
	        return units;
	    }
	
	    function isLeapYear(year) {
	        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
	    }
	
	    function absFloor(number) {
	        if (number < 0) {
	            // -0 -> 0
	            return Math.ceil(number) || 0;
	        } else {
	            return Math.floor(number);
	        }
	    }
	
	    function toInt(argumentForCoercion) {
	        var coercedNumber = +argumentForCoercion,
	            value = 0;
	
	        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
	            value = absFloor(coercedNumber);
	        }
	
	        return value;
	    }
	
	    function makeGetSet(unit, keepTime) {
	        return function (value) {
	            if (value != null) {
	                set$1(this, unit, value);
	                hooks.updateOffset(this, keepTime);
	                return this;
	            } else {
	                return get(this, unit);
	            }
	        };
	    }
	
	    function get(mom, unit) {
	        return mom.isValid()
	            ? mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]()
	            : NaN;
	    }
	
	    function set$1(mom, unit, value) {
	        if (mom.isValid() && !isNaN(value)) {
	            if (
	                unit === 'FullYear' &&
	                isLeapYear(mom.year()) &&
	                mom.month() === 1 &&
	                mom.date() === 29
	            ) {
	                value = toInt(value);
	                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](
	                    value,
	                    mom.month(),
	                    daysInMonth(value, mom.month())
	                );
	            } else {
	                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
	            }
	        }
	    }
	
	    // MOMENTS
	
	    function stringGet(units) {
	        units = normalizeUnits(units);
	        if (isFunction(this[units])) {
	            return this[units]();
	        }
	        return this;
	    }
	
	    function stringSet(units, value) {
	        if (typeof units === 'object') {
	            units = normalizeObjectUnits(units);
	            var prioritized = getPrioritizedUnits(units),
	                i;
	            for (i = 0; i < prioritized.length; i++) {
	                this[prioritized[i].unit](units[prioritized[i].unit]);
	            }
	        } else {
	            units = normalizeUnits(units);
	            if (isFunction(this[units])) {
	                return this[units](value);
	            }
	        }
	        return this;
	    }
	
	    var match1 = /\d/, //       0 - 9
	        match2 = /\d\d/, //      00 - 99
	        match3 = /\d{3}/, //     000 - 999
	        match4 = /\d{4}/, //    0000 - 9999
	        match6 = /[+-]?\d{6}/, // -999999 - 999999
	        match1to2 = /\d\d?/, //       0 - 99
	        match3to4 = /\d\d\d\d?/, //     999 - 9999
	        match5to6 = /\d\d\d\d\d\d?/, //   99999 - 999999
	        match1to3 = /\d{1,3}/, //       0 - 999
	        match1to4 = /\d{1,4}/, //       0 - 9999
	        match1to6 = /[+-]?\d{1,6}/, // -999999 - 999999
	        matchUnsigned = /\d+/, //       0 - inf
	        matchSigned = /[+-]?\d+/, //    -inf - inf
	        matchOffset = /Z|[+-]\d\d:?\d\d/gi, // +00:00 -00:00 +0000 -0000 or Z
	        matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi, // +00 -00 +00:00 -00:00 +0000 -0000 or Z
	        matchTimestamp = /[+-]?\d+(\.\d{1,3})?/, // 123456789 123456789.123
	        // any word (or two) characters or numbers including two/three word month in arabic.
	        // includes scottish gaelic two word and hyphenated months
	        matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
	        regexes;
	
	    regexes = {};
	
	    function addRegexToken(token, regex, strictRegex) {
	        regexes[token] = isFunction(regex)
	            ? regex
	            : function (isStrict, localeData) {
	                  return isStrict && strictRegex ? strictRegex : regex;
	              };
	    }
	
	    function getParseRegexForToken(token, config) {
	        if (!hasOwnProp(regexes, token)) {
	            return new RegExp(unescapeFormat(token));
	        }
	
	        return regexes[token](config._strict, config._locale);
	    }
	
	    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
	    function unescapeFormat(s) {
	        return regexEscape(
	            s
	                .replace('\\', '')
	                .replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (
	                    matched,
	                    p1,
	                    p2,
	                    p3,
	                    p4
	                ) {
	                    return p1 || p2 || p3 || p4;
	                })
	        );
	    }
	
	    function regexEscape(s) {
	        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
	    }
	
	    var tokens = {};
	
	    function addParseToken(token, callback) {
	        var i,
	            func = callback;
	        if (typeof token === 'string') {
	            token = [token];
	        }
	        if (isNumber(callback)) {
	            func = function (input, array) {
	                array[callback] = toInt(input);
	            };
	        }
	        for (i = 0; i < token.length; i++) {
	            tokens[token[i]] = func;
	        }
	    }
	
	    function addWeekParseToken(token, callback) {
	        addParseToken(token, function (input, array, config, token) {
	            config._w = config._w || {};
	            callback(input, config._w, config, token);
	        });
	    }
	
	    function addTimeToArrayFromToken(token, input, config) {
	        if (input != null && hasOwnProp(tokens, token)) {
	            tokens[token](input, config._a, config, token);
	        }
	    }
	
	    var YEAR = 0,
	        MONTH = 1,
	        DATE = 2,
	        HOUR = 3,
	        MINUTE = 4,
	        SECOND = 5,
	        MILLISECOND = 6,
	        WEEK = 7,
	        WEEKDAY = 8;
	
	    function mod(n, x) {
	        return ((n % x) + x) % x;
	    }
	
	    var indexOf;
	
	    if (Array.prototype.indexOf) {
	        indexOf = Array.prototype.indexOf;
	    } else {
	        indexOf = function (o) {
	            // I know
	            var i;
	            for (i = 0; i < this.length; ++i) {
	                if (this[i] === o) {
	                    return i;
	                }
	            }
	            return -1;
	        };
	    }
	
	    function daysInMonth(year, month) {
	        if (isNaN(year) || isNaN(month)) {
	            return NaN;
	        }
	        var modMonth = mod(month, 12);
	        year += (month - modMonth) / 12;
	        return modMonth === 1
	            ? isLeapYear(year)
	                ? 29
	                : 28
	            : 31 - ((modMonth % 7) % 2);
	    }
	
	    // FORMATTING
	
	    addFormatToken('M', ['MM', 2], 'Mo', function () {
	        return this.month() + 1;
	    });
	
	    addFormatToken('MMM', 0, 0, function (format) {
	        return this.localeData().monthsShort(this, format);
	    });
	
	    addFormatToken('MMMM', 0, 0, function (format) {
	        return this.localeData().months(this, format);
	    });
	
	    // ALIASES
	
	    addUnitAlias('month', 'M');
	
	    // PRIORITY
	
	    addUnitPriority('month', 8);
	
	    // PARSING
	
	    addRegexToken('M', match1to2);
	    addRegexToken('MM', match1to2, match2);
	    addRegexToken('MMM', function (isStrict, locale) {
	        return locale.monthsShortRegex(isStrict);
	    });
	    addRegexToken('MMMM', function (isStrict, locale) {
	        return locale.monthsRegex(isStrict);
	    });
	
	    addParseToken(['M', 'MM'], function (input, array) {
	        array[MONTH] = toInt(input) - 1;
	    });
	
	    addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
	        var month = config._locale.monthsParse(input, token, config._strict);
	        // if we didn't find a month name, mark the date as invalid.
	        if (month != null) {
	            array[MONTH] = month;
	        } else {
	            getParsingFlags(config).invalidMonth = input;
	        }
	    });
	
	    // LOCALES
	
	    var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split(
	            '_'
	        ),
	        defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split(
	            '_'
	        ),
	        MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
	        defaultMonthsShortRegex = matchWord,
	        defaultMonthsRegex = matchWord;
	
	    function localeMonths(m, format) {
	        if (!m) {
	            return isArray(this._months)
	                ? this._months
	                : this._months['standalone'];
	        }
	        return isArray(this._months)
	            ? this._months[m.month()]
	            : this._months[
	                  (this._months.isFormat || MONTHS_IN_FORMAT).test(format)
	                      ? 'format'
	                      : 'standalone'
	              ][m.month()];
	    }
	
	    function localeMonthsShort(m, format) {
	        if (!m) {
	            return isArray(this._monthsShort)
	                ? this._monthsShort
	                : this._monthsShort['standalone'];
	        }
	        return isArray(this._monthsShort)
	            ? this._monthsShort[m.month()]
	            : this._monthsShort[
	                  MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'
	              ][m.month()];
	    }
	
	    function handleStrictParse(monthName, format, strict) {
	        var i,
	            ii,
	            mom,
	            llc = monthName.toLocaleLowerCase();
	        if (!this._monthsParse) {
	            // this is not used
	            this._monthsParse = [];
	            this._longMonthsParse = [];
	            this._shortMonthsParse = [];
	            for (i = 0; i < 12; ++i) {
	                mom = createUTC([2000, i]);
	                this._shortMonthsParse[i] = this.monthsShort(
	                    mom,
	                    ''
	                ).toLocaleLowerCase();
	                this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
	            }
	        }
	
	        if (strict) {
	            if (format === 'MMM') {
	                ii = indexOf.call(this._shortMonthsParse, llc);
	                return ii !== -1 ? ii : null;
	            } else {
	                ii = indexOf.call(this._longMonthsParse, llc);
	                return ii !== -1 ? ii : null;
	            }
	        } else {
	            if (format === 'MMM') {
	                ii = indexOf.call(this._shortMonthsParse, llc);
	                if (ii !== -1) {
	                    return ii;
	                }
	                ii = indexOf.call(this._longMonthsParse, llc);
	                return ii !== -1 ? ii : null;
	            } else {
	                ii = indexOf.call(this._longMonthsParse, llc);
	                if (ii !== -1) {
	                    return ii;
	                }
	                ii = indexOf.call(this._shortMonthsParse, llc);
	                return ii !== -1 ? ii : null;
	            }
	        }
	    }
	
	    function localeMonthsParse(monthName, format, strict) {
	        var i, mom, regex;
	
	        if (this._monthsParseExact) {
	            return handleStrictParse.call(this, monthName, format, strict);
	        }
	
	        if (!this._monthsParse) {
	            this._monthsParse = [];
	            this._longMonthsParse = [];
	            this._shortMonthsParse = [];
	        }
	
	        // TODO: add sorting
	        // Sorting makes sure if one month (or abbr) is a prefix of another
	        // see sorting in computeMonthsParse
	        for (i = 0; i < 12; i++) {
	            // make the regex if we don't have it already
	            mom = createUTC([2000, i]);
	            if (strict && !this._longMonthsParse[i]) {
	                this._longMonthsParse[i] = new RegExp(
	                    '^' + this.months(mom, '').replace('.', '') + '$',
	                    'i'
	                );
	                this._shortMonthsParse[i] = new RegExp(
	                    '^' + this.monthsShort(mom, '').replace('.', '') + '$',
	                    'i'
	                );
	            }
	            if (!strict && !this._monthsParse[i]) {
	                regex =
	                    '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
	                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
	            }
	            // test the regex
	            if (
	                strict &&
	                format === 'MMMM' &&
	                this._longMonthsParse[i].test(monthName)
	            ) {
	                return i;
	            } else if (
	                strict &&
	                format === 'MMM' &&
	                this._shortMonthsParse[i].test(monthName)
	            ) {
	                return i;
	            } else if (!strict && this._monthsParse[i].test(monthName)) {
	                return i;
	            }
	        }
	    }
	
	    // MOMENTS
	
	    function setMonth(mom, value) {
	        var dayOfMonth;
	
	        if (!mom.isValid()) {
	            // No op
	            return mom;
	        }
	
	        if (typeof value === 'string') {
	            if (/^\d+$/.test(value)) {
	                value = toInt(value);
	            } else {
	                value = mom.localeData().monthsParse(value);
	                // TODO: Another silent failure?
	                if (!isNumber(value)) {
	                    return mom;
	                }
	            }
	        }
	
	        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
	        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
	        return mom;
	    }
	
	    function getSetMonth(value) {
	        if (value != null) {
	            setMonth(this, value);
	            hooks.updateOffset(this, true);
	            return this;
	        } else {
	            return get(this, 'Month');
	        }
	    }
	
	    function getDaysInMonth() {
	        return daysInMonth(this.year(), this.month());
	    }
	
	    function monthsShortRegex(isStrict) {
	        if (this._monthsParseExact) {
	            if (!hasOwnProp(this, '_monthsRegex')) {
	                computeMonthsParse.call(this);
	            }
	            if (isStrict) {
	                return this._monthsShortStrictRegex;
	            } else {
	                return this._monthsShortRegex;
	            }
	        } else {
	            if (!hasOwnProp(this, '_monthsShortRegex')) {
	                this._monthsShortRegex = defaultMonthsShortRegex;
	            }
	            return this._monthsShortStrictRegex && isStrict
	                ? this._monthsShortStrictRegex
	                : this._monthsShortRegex;
	        }
	    }
	
	    function monthsRegex(isStrict) {
	        if (this._monthsParseExact) {
	            if (!hasOwnProp(this, '_monthsRegex')) {
	                computeMonthsParse.call(this);
	            }
	            if (isStrict) {
	                return this._monthsStrictRegex;
	            } else {
	                return this._monthsRegex;
	            }
	        } else {
	            if (!hasOwnProp(this, '_monthsRegex')) {
	                this._monthsRegex = defaultMonthsRegex;
	            }
	            return this._monthsStrictRegex && isStrict
	                ? this._monthsStrictRegex
	                : this._monthsRegex;
	        }
	    }
	
	    function computeMonthsParse() {
	        function cmpLenRev(a, b) {
	            return b.length - a.length;
	        }
	
	        var shortPieces = [],
	            longPieces = [],
	            mixedPieces = [],
	            i,
	            mom;
	        for (i = 0; i < 12; i++) {
	            // make the regex if we don't have it already
	            mom = createUTC([2000, i]);
	            shortPieces.push(this.monthsShort(mom, ''));
	            longPieces.push(this.months(mom, ''));
	            mixedPieces.push(this.months(mom, ''));
	            mixedPieces.push(this.monthsShort(mom, ''));
	        }
	        // Sorting makes sure if one month (or abbr) is a prefix of another it
	        // will match the longer piece.
	        shortPieces.sort(cmpLenRev);
	        longPieces.sort(cmpLenRev);
	        mixedPieces.sort(cmpLenRev);
	        for (i = 0; i < 12; i++) {
	            shortPieces[i] = regexEscape(shortPieces[i]);
	            longPieces[i] = regexEscape(longPieces[i]);
	        }
	        for (i = 0; i < 24; i++) {
	            mixedPieces[i] = regexEscape(mixedPieces[i]);
	        }
	
	        this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
	        this._monthsShortRegex = this._monthsRegex;
	        this._monthsStrictRegex = new RegExp(
	            '^(' + longPieces.join('|') + ')',
	            'i'
	        );
	        this._monthsShortStrictRegex = new RegExp(
	            '^(' + shortPieces.join('|') + ')',
	            'i'
	        );
	    }
	
	    // FORMATTING
	
	    addFormatToken('Y', 0, 0, function () {
	        var y = this.year();
	        return y <= 9999 ? zeroFill(y, 4) : '+' + y;
	    });
	
	    addFormatToken(0, ['YY', 2], 0, function () {
	        return this.year() % 100;
	    });
	
	    addFormatToken(0, ['YYYY', 4], 0, 'year');
	    addFormatToken(0, ['YYYYY', 5], 0, 'year');
	    addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');
	
	    // ALIASES
	
	    addUnitAlias('year', 'y');
	
	    // PRIORITIES
	
	    addUnitPriority('year', 1);
	
	    // PARSING
	
	    addRegexToken('Y', matchSigned);
	    addRegexToken('YY', match1to2, match2);
	    addRegexToken('YYYY', match1to4, match4);
	    addRegexToken('YYYYY', match1to6, match6);
	    addRegexToken('YYYYYY', match1to6, match6);
	
	    addParseToken(['YYYYY', 'YYYYYY'], YEAR);
	    addParseToken('YYYY', function (input, array) {
	        array[YEAR] =
	            input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
	    });
	    addParseToken('YY', function (input, array) {
	        array[YEAR] = hooks.parseTwoDigitYear(input);
	    });
	    addParseToken('Y', function (input, array) {
	        array[YEAR] = parseInt(input, 10);
	    });
	
	    // HELPERS
	
	    function daysInYear(year) {
	        return isLeapYear(year) ? 366 : 365;
	    }
	
	    // HOOKS
	
	    hooks.parseTwoDigitYear = function (input) {
	        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
	    };
	
	    // MOMENTS
	
	    var getSetYear = makeGetSet('FullYear', true);
	
	    function getIsLeapYear() {
	        return isLeapYear(this.year());
	    }
	
	    function createDate(y, m, d, h, M, s, ms) {
	        // can't just apply() to create a date:
	        // https://stackoverflow.com/q/181348
	        var date;
	        // the date constructor remaps years 0-99 to 1900-1999
	        if (y < 100 && y >= 0) {
	            // preserve leap years using a full 400 year cycle, then reset
	            date = new Date(y + 400, m, d, h, M, s, ms);
	            if (isFinite(date.getFullYear())) {
	                date.setFullYear(y);
	            }
	        } else {
	            date = new Date(y, m, d, h, M, s, ms);
	        }
	
	        return date;
	    }
	
	    function createUTCDate(y) {
	        var date, args;
	        // the Date.UTC function remaps years 0-99 to 1900-1999
	        if (y < 100 && y >= 0) {
	            args = Array.prototype.slice.call(arguments);
	            // preserve leap years using a full 400 year cycle, then reset
	            args[0] = y + 400;
	            date = new Date(Date.UTC.apply(null, args));
	            if (isFinite(date.getUTCFullYear())) {
	                date.setUTCFullYear(y);
	            }
	        } else {
	            date = new Date(Date.UTC.apply(null, arguments));
	        }
	
	        return date;
	    }
	
	    // start-of-first-week - start-of-year
	    function firstWeekOffset(year, dow, doy) {
	        var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
	            fwd = 7 + dow - doy,
	            // first-week day local weekday -- which local weekday is fwd
	            fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;
	
	        return -fwdlw + fwd - 1;
	    }
	
	    // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
	    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
	        var localWeekday = (7 + weekday - dow) % 7,
	            weekOffset = firstWeekOffset(year, dow, doy),
	            dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
	            resYear,
	            resDayOfYear;
	
	        if (dayOfYear <= 0) {
	            resYear = year - 1;
	            resDayOfYear = daysInYear(resYear) + dayOfYear;
	        } else if (dayOfYear > daysInYear(year)) {
	            resYear = year + 1;
	            resDayOfYear = dayOfYear - daysInYear(year);
	        } else {
	            resYear = year;
	            resDayOfYear = dayOfYear;
	        }
	
	        return {
	            year: resYear,
	            dayOfYear: resDayOfYear,
	        };
	    }
	
	    function weekOfYear(mom, dow, doy) {
	        var weekOffset = firstWeekOffset(mom.year(), dow, doy),
	            week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
	            resWeek,
	            resYear;
	
	        if (week < 1) {
	            resYear = mom.year() - 1;
	            resWeek = week + weeksInYear(resYear, dow, doy);
	        } else if (week > weeksInYear(mom.year(), dow, doy)) {
	            resWeek = week - weeksInYear(mom.year(), dow, doy);
	            resYear = mom.year() + 1;
	        } else {
	            resYear = mom.year();
	            resWeek = week;
	        }
	
	        return {
	            week: resWeek,
	            year: resYear,
	        };
	    }
	
	    function weeksInYear(year, dow, doy) {
	        var weekOffset = firstWeekOffset(year, dow, doy),
	            weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
	        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
	    }
	
	    // FORMATTING
	
	    addFormatToken('w', ['ww', 2], 'wo', 'week');
	    addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');
	
	    // ALIASES
	
	    addUnitAlias('week', 'w');
	    addUnitAlias('isoWeek', 'W');
	
	    // PRIORITIES
	
	    addUnitPriority('week', 5);
	    addUnitPriority('isoWeek', 5);
	
	    // PARSING
	
	    addRegexToken('w', match1to2);
	    addRegexToken('ww', match1to2, match2);
	    addRegexToken('W', match1to2);
	    addRegexToken('WW', match1to2, match2);
	
	    addWeekParseToken(['w', 'ww', 'W', 'WW'], function (
	        input,
	        week,
	        config,
	        token
	    ) {
	        week[token.substr(0, 1)] = toInt(input);
	    });
	
	    // HELPERS
	
	    // LOCALES
	
	    function localeWeek(mom) {
	        return weekOfYear(mom, this._week.dow, this._week.doy).week;
	    }
	
	    var defaultLocaleWeek = {
	        dow: 0, // Sunday is the first day of the week.
	        doy: 6, // The week that contains Jan 6th is the first week of the year.
	    };
	
	    function localeFirstDayOfWeek() {
	        return this._week.dow;
	    }
	
	    function localeFirstDayOfYear() {
	        return this._week.doy;
	    }
	
	    // MOMENTS
	
	    function getSetWeek(input) {
	        var week = this.localeData().week(this);
	        return input == null ? week : this.add((input - week) * 7, 'd');
	    }
	
	    function getSetISOWeek(input) {
	        var week = weekOfYear(this, 1, 4).week;
	        return input == null ? week : this.add((input - week) * 7, 'd');
	    }
	
	    // FORMATTING
	
	    addFormatToken('d', 0, 'do', 'day');
	
	    addFormatToken('dd', 0, 0, function (format) {
	        return this.localeData().weekdaysMin(this, format);
	    });
	
	    addFormatToken('ddd', 0, 0, function (format) {
	        return this.localeData().weekdaysShort(this, format);
	    });
	
	    addFormatToken('dddd', 0, 0, function (format) {
	        return this.localeData().weekdays(this, format);
	    });
	
	    addFormatToken('e', 0, 0, 'weekday');
	    addFormatToken('E', 0, 0, 'isoWeekday');
	
	    // ALIASES
	
	    addUnitAlias('day', 'd');
	    addUnitAlias('weekday', 'e');
	    addUnitAlias('isoWeekday', 'E');
	
	    // PRIORITY
	    addUnitPriority('day', 11);
	    addUnitPriority('weekday', 11);
	    addUnitPriority('isoWeekday', 11);
	
	    // PARSING
	
	    addRegexToken('d', match1to2);
	    addRegexToken('e', match1to2);
	    addRegexToken('E', match1to2);
	    addRegexToken('dd', function (isStrict, locale) {
	        return locale.weekdaysMinRegex(isStrict);
	    });
	    addRegexToken('ddd', function (isStrict, locale) {
	        return locale.weekdaysShortRegex(isStrict);
	    });
	    addRegexToken('dddd', function (isStrict, locale) {
	        return locale.weekdaysRegex(isStrict);
	    });
	
	    addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
	        var weekday = config._locale.weekdaysParse(input, token, config._strict);
	        // if we didn't get a weekday name, mark the date as invalid
	        if (weekday != null) {
	            week.d = weekday;
	        } else {
	            getParsingFlags(config).invalidWeekday = input;
	        }
	    });
	
	    addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
	        week[token] = toInt(input);
	    });
	
	    // HELPERS
	
	    function parseWeekday(input, locale) {
	        if (typeof input !== 'string') {
	            return input;
	        }
	
	        if (!isNaN(input)) {
	            return parseInt(input, 10);
	        }
	
	        input = locale.weekdaysParse(input);
	        if (typeof input === 'number') {
	            return input;
	        }
	
	        return null;
	    }
	
	    function parseIsoWeekday(input, locale) {
	        if (typeof input === 'string') {
	            return locale.weekdaysParse(input) % 7 || 7;
	        }
	        return isNaN(input) ? null : input;
	    }
	
	    // LOCALES
	    function shiftWeekdays(ws, n) {
	        return ws.slice(n, 7).concat(ws.slice(0, n));
	    }
	
	    var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split(
	            '_'
	        ),
	        defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
	        defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
	        defaultWeekdaysRegex = matchWord,
	        defaultWeekdaysShortRegex = matchWord,
	        defaultWeekdaysMinRegex = matchWord;
	
	    function localeWeekdays(m, format) {
	        var weekdays = isArray(this._weekdays)
	            ? this._weekdays
	            : this._weekdays[
	                  m && m !== true && this._weekdays.isFormat.test(format)
	                      ? 'format'
	                      : 'standalone'
	              ];
	        return m === true
	            ? shiftWeekdays(weekdays, this._week.dow)
	            : m
	            ? weekdays[m.day()]
	            : weekdays;
	    }
	
	    function localeWeekdaysShort(m) {
	        return m === true
	            ? shiftWeekdays(this._weekdaysShort, this._week.dow)
	            : m
	            ? this._weekdaysShort[m.day()]
	            : this._weekdaysShort;
	    }
	
	    function localeWeekdaysMin(m) {
	        return m === true
	            ? shiftWeekdays(this._weekdaysMin, this._week.dow)
	            : m
	            ? this._weekdaysMin[m.day()]
	            : this._weekdaysMin;
	    }
	
	    function handleStrictParse$1(weekdayName, format, strict) {
	        var i,
	            ii,
	            mom,
	            llc = weekdayName.toLocaleLowerCase();
	        if (!this._weekdaysParse) {
	            this._weekdaysParse = [];
	            this._shortWeekdaysParse = [];
	            this._minWeekdaysParse = [];
	
	            for (i = 0; i < 7; ++i) {
	                mom = createUTC([2000, 1]).day(i);
	                this._minWeekdaysParse[i] = this.weekdaysMin(
	                    mom,
	                    ''
	                ).toLocaleLowerCase();
	                this._shortWeekdaysParse[i] = this.weekdaysShort(
	                    mom,
	                    ''
	                ).toLocaleLowerCase();
	                this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
	            }
	        }
	
	        if (strict) {
	            if (format === 'dddd') {
	                ii = indexOf.call(this._weekdaysParse, llc);
	                return ii !== -1 ? ii : null;
	            } else if (format === 'ddd') {
	                ii = indexOf.call(this._shortWeekdaysParse, llc);
	                return ii !== -1 ? ii : null;
	            } else {
	                ii = indexOf.call(this._minWeekdaysParse, llc);
	                return ii !== -1 ? ii : null;
	            }
	        } else {
	            if (format === 'dddd') {
	                ii = indexOf.call(this._weekdaysParse, llc);
	                if (ii !== -1) {
	                    return ii;
	                }
	                ii = indexOf.call(this._shortWeekdaysParse, llc);
	                if (ii !== -1) {
	                    return ii;
	                }
	                ii = indexOf.call(this._minWeekdaysParse, llc);
	                return ii !== -1 ? ii : null;
	            } else if (format === 'ddd') {
	                ii = indexOf.call(this._shortWeekdaysParse, llc);
	                if (ii !== -1) {
	                    return ii;
	                }
	                ii = indexOf.call(this._weekdaysParse, llc);
	                if (ii !== -1) {
	                    return ii;
	                }
	                ii = indexOf.call(this._minWeekdaysParse, llc);
	                return ii !== -1 ? ii : null;
	            } else {
	                ii = indexOf.call(this._minWeekdaysParse, llc);
	                if (ii !== -1) {
	                    return ii;
	                }
	                ii = indexOf.call(this._weekdaysParse, llc);
	                if (ii !== -1) {
	                    return ii;
	                }
	                ii = indexOf.call(this._shortWeekdaysParse, llc);
	                return ii !== -1 ? ii : null;
	            }
	        }
	    }
	
	    function localeWeekdaysParse(weekdayName, format, strict) {
	        var i, mom, regex;
	
	        if (this._weekdaysParseExact) {
	            return handleStrictParse$1.call(this, weekdayName, format, strict);
	        }
	
	        if (!this._weekdaysParse) {
	            this._weekdaysParse = [];
	            this._minWeekdaysParse = [];
	            this._shortWeekdaysParse = [];
	            this._fullWeekdaysParse = [];
	        }
	
	        for (i = 0; i < 7; i++) {
	            // make the regex if we don't have it already
	
	            mom = createUTC([2000, 1]).day(i);
	            if (strict && !this._fullWeekdaysParse[i]) {
	                this._fullWeekdaysParse[i] = new RegExp(
	                    '^' + this.weekdays(mom, '').replace('.', '\\.?') + '$',
	                    'i'
	                );
	                this._shortWeekdaysParse[i] = new RegExp(
	                    '^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$',
	                    'i'
	                );
	                this._minWeekdaysParse[i] = new RegExp(
	                    '^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$',
	                    'i'
	                );
	            }
	            if (!this._weekdaysParse[i]) {
	                regex =
	                    '^' +
	                    this.weekdays(mom, '') +
	                    '|^' +
	                    this.weekdaysShort(mom, '') +
	                    '|^' +
	                    this.weekdaysMin(mom, '');
	                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
	            }
	            // test the regex
	            if (
	                strict &&
	                format === 'dddd' &&
	                this._fullWeekdaysParse[i].test(weekdayName)
	            ) {
	                return i;
	            } else if (
	                strict &&
	                format === 'ddd' &&
	                this._shortWeekdaysParse[i].test(weekdayName)
	            ) {
	                return i;
	            } else if (
	                strict &&
	                format === 'dd' &&
	                this._minWeekdaysParse[i].test(weekdayName)
	            ) {
	                return i;
	            } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
	                return i;
	            }
	        }
	    }
	
	    // MOMENTS
	
	    function getSetDayOfWeek(input) {
	        if (!this.isValid()) {
	            return input != null ? this : NaN;
	        }
	        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
	        if (input != null) {
	            input = parseWeekday(input, this.localeData());
	            return this.add(input - day, 'd');
	        } else {
	            return day;
	        }
	    }
	
	    function getSetLocaleDayOfWeek(input) {
	        if (!this.isValid()) {
	            return input != null ? this : NaN;
	        }
	        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
	        return input == null ? weekday : this.add(input - weekday, 'd');
	    }
	
	    function getSetISODayOfWeek(input) {
	        if (!this.isValid()) {
	            return input != null ? this : NaN;
	        }
	
	        // behaves the same as moment#day except
	        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
	        // as a setter, sunday should belong to the previous week.
	
	        if (input != null) {
	            var weekday = parseIsoWeekday(input, this.localeData());
	            return this.day(this.day() % 7 ? weekday : weekday - 7);
	        } else {
	            return this.day() || 7;
	        }
	    }
	
	    function weekdaysRegex(isStrict) {
	        if (this._weekdaysParseExact) {
	            if (!hasOwnProp(this, '_weekdaysRegex')) {
	                computeWeekdaysParse.call(this);
	            }
	            if (isStrict) {
	                return this._weekdaysStrictRegex;
	            } else {
	                return this._weekdaysRegex;
	            }
	        } else {
	            if (!hasOwnProp(this, '_weekdaysRegex')) {
	                this._weekdaysRegex = defaultWeekdaysRegex;
	            }
	            return this._weekdaysStrictRegex && isStrict
	                ? this._weekdaysStrictRegex
	                : this._weekdaysRegex;
	        }
	    }
	
	    function weekdaysShortRegex(isStrict) {
	        if (this._weekdaysParseExact) {
	            if (!hasOwnProp(this, '_weekdaysRegex')) {
	                computeWeekdaysParse.call(this);
	            }
	            if (isStrict) {
	                return this._weekdaysShortStrictRegex;
	            } else {
	                return this._weekdaysShortRegex;
	            }
	        } else {
	            if (!hasOwnProp(this, '_weekdaysShortRegex')) {
	                this._weekdaysShortRegex = defaultWeekdaysShortRegex;
	            }
	            return this._weekdaysShortStrictRegex && isStrict
	                ? this._weekdaysShortStrictRegex
	                : this._weekdaysShortRegex;
	        }
	    }
	
	    function weekdaysMinRegex(isStrict) {
	        if (this._weekdaysParseExact) {
	            if (!hasOwnProp(this, '_weekdaysRegex')) {
	                computeWeekdaysParse.call(this);
	            }
	            if (isStrict) {
	                return this._weekdaysMinStrictRegex;
	            } else {
	                return this._weekdaysMinRegex;
	            }
	        } else {
	            if (!hasOwnProp(this, '_weekdaysMinRegex')) {
	                this._weekdaysMinRegex = defaultWeekdaysMinRegex;
	            }
	            return this._weekdaysMinStrictRegex && isStrict
	                ? this._weekdaysMinStrictRegex
	                : this._weekdaysMinRegex;
	        }
	    }
	
	    function computeWeekdaysParse() {
	        function cmpLenRev(a, b) {
	            return b.length - a.length;
	        }
	
	        var minPieces = [],
	            shortPieces = [],
	            longPieces = [],
	            mixedPieces = [],
	            i,
	            mom,
	            minp,
	            shortp,
	            longp;
	        for (i = 0; i < 7; i++) {
	            // make the regex if we don't have it already
	            mom = createUTC([2000, 1]).day(i);
	            minp = regexEscape(this.weekdaysMin(mom, ''));
	            shortp = regexEscape(this.weekdaysShort(mom, ''));
	            longp = regexEscape(this.weekdays(mom, ''));
	            minPieces.push(minp);
	            shortPieces.push(shortp);
	            longPieces.push(longp);
	            mixedPieces.push(minp);
	            mixedPieces.push(shortp);
	            mixedPieces.push(longp);
	        }
	        // Sorting makes sure if one weekday (or abbr) is a prefix of another it
	        // will match the longer piece.
	        minPieces.sort(cmpLenRev);
	        shortPieces.sort(cmpLenRev);
	        longPieces.sort(cmpLenRev);
	        mixedPieces.sort(cmpLenRev);
	
	        this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
	        this._weekdaysShortRegex = this._weekdaysRegex;
	        this._weekdaysMinRegex = this._weekdaysRegex;
	
	        this._weekdaysStrictRegex = new RegExp(
	            '^(' + longPieces.join('|') + ')',
	            'i'
	        );
	        this._weekdaysShortStrictRegex = new RegExp(
	            '^(' + shortPieces.join('|') + ')',
	            'i'
	        );
	        this._weekdaysMinStrictRegex = new RegExp(
	            '^(' + minPieces.join('|') + ')',
	            'i'
	        );
	    }
	
	    // FORMATTING
	
	    function hFormat() {
	        return this.hours() % 12 || 12;
	    }
	
	    function kFormat() {
	        return this.hours() || 24;
	    }
	
	    addFormatToken('H', ['HH', 2], 0, 'hour');
	    addFormatToken('h', ['hh', 2], 0, hFormat);
	    addFormatToken('k', ['kk', 2], 0, kFormat);
	
	    addFormatToken('hmm', 0, 0, function () {
	        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
	    });
	
	    addFormatToken('hmmss', 0, 0, function () {
	        return (
	            '' +
	            hFormat.apply(this) +
	            zeroFill(this.minutes(), 2) +
	            zeroFill(this.seconds(), 2)
	        );
	    });
	
	    addFormatToken('Hmm', 0, 0, function () {
	        return '' + this.hours() + zeroFill(this.minutes(), 2);
	    });
	
	    addFormatToken('Hmmss', 0, 0, function () {
	        return (
	            '' +
	            this.hours() +
	            zeroFill(this.minutes(), 2) +
	            zeroFill(this.seconds(), 2)
	        );
	    });
	
	    function meridiem(token, lowercase) {
	        addFormatToken(token, 0, 0, function () {
	            return this.localeData().meridiem(
	                this.hours(),
	                this.minutes(),
	                lowercase
	            );
	        });
	    }
	
	    meridiem('a', true);
	    meridiem('A', false);
	
	    // ALIASES
	
	    addUnitAlias('hour', 'h');
	
	    // PRIORITY
	    addUnitPriority('hour', 13);
	
	    // PARSING
	
	    function matchMeridiem(isStrict, locale) {
	        return locale._meridiemParse;
	    }
	
	    addRegexToken('a', matchMeridiem);
	    addRegexToken('A', matchMeridiem);
	    addRegexToken('H', match1to2);
	    addRegexToken('h', match1to2);
	    addRegexToken('k', match1to2);
	    addRegexToken('HH', match1to2, match2);
	    addRegexToken('hh', match1to2, match2);
	    addRegexToken('kk', match1to2, match2);
	
	    addRegexToken('hmm', match3to4);
	    addRegexToken('hmmss', match5to6);
	    addRegexToken('Hmm', match3to4);
	    addRegexToken('Hmmss', match5to6);
	
	    addParseToken(['H', 'HH'], HOUR);
	    addParseToken(['k', 'kk'], function (input, array, config) {
	        var kInput = toInt(input);
	        array[HOUR] = kInput === 24 ? 0 : kInput;
	    });
	    addParseToken(['a', 'A'], function (input, array, config) {
	        config._isPm = config._locale.isPM(input);
	        config._meridiem = input;
	    });
	    addParseToken(['h', 'hh'], function (input, array, config) {
	        array[HOUR] = toInt(input);
	        getParsingFlags(config).bigHour = true;
	    });
	    addParseToken('hmm', function (input, array, config) {
	        var pos = input.length - 2;
	        array[HOUR] = toInt(input.substr(0, pos));
	        array[MINUTE] = toInt(input.substr(pos));
	        getParsingFlags(config).bigHour = true;
	    });
	    addParseToken('hmmss', function (input, array, config) {
	        var pos1 = input.length - 4,
	            pos2 = input.length - 2;
	        array[HOUR] = toInt(input.substr(0, pos1));
	        array[MINUTE] = toInt(input.substr(pos1, 2));
	        array[SECOND] = toInt(input.substr(pos2));
	        getParsingFlags(config).bigHour = true;
	    });
	    addParseToken('Hmm', function (input, array, config) {
	        var pos = input.length - 2;
	        array[HOUR] = toInt(input.substr(0, pos));
	        array[MINUTE] = toInt(input.substr(pos));
	    });
	    addParseToken('Hmmss', function (input, array, config) {
	        var pos1 = input.length - 4,
	            pos2 = input.length - 2;
	        array[HOUR] = toInt(input.substr(0, pos1));
	        array[MINUTE] = toInt(input.substr(pos1, 2));
	        array[SECOND] = toInt(input.substr(pos2));
	    });
	
	    // LOCALES
	
	    function localeIsPM(input) {
	        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
	        // Using charAt should be more compatible.
	        return (input + '').toLowerCase().charAt(0) === 'p';
	    }
	
	    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i,
	        // Setting the hour should keep the time, because the user explicitly
	        // specified which hour they want. So trying to maintain the same hour (in
	        // a new timezone) makes sense. Adding/subtracting hours does not follow
	        // this rule.
	        getSetHour = makeGetSet('Hours', true);
	
	    function localeMeridiem(hours, minutes, isLower) {
	        if (hours > 11) {
	            return isLower ? 'pm' : 'PM';
	        } else {
	            return isLower ? 'am' : 'AM';
	        }
	    }
	
	    var baseConfig = {
	        calendar: defaultCalendar,
	        longDateFormat: defaultLongDateFormat,
	        invalidDate: defaultInvalidDate,
	        ordinal: defaultOrdinal,
	        dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
	        relativeTime: defaultRelativeTime,
	
	        months: defaultLocaleMonths,
	        monthsShort: defaultLocaleMonthsShort,
	
	        week: defaultLocaleWeek,
	
	        weekdays: defaultLocaleWeekdays,
	        weekdaysMin: defaultLocaleWeekdaysMin,
	        weekdaysShort: defaultLocaleWeekdaysShort,
	
	        meridiemParse: defaultLocaleMeridiemParse,
	    };
	
	    // internal storage for locale config files
	    var locales = {},
	        localeFamilies = {},
	        globalLocale;
	
	    function commonPrefix(arr1, arr2) {
	        var i,
	            minl = Math.min(arr1.length, arr2.length);
	        for (i = 0; i < minl; i += 1) {
	            if (arr1[i] !== arr2[i]) {
	                return i;
	            }
	        }
	        return minl;
	    }
	
	    function normalizeLocale(key) {
	        return key ? key.toLowerCase().replace('_', '-') : key;
	    }
	
	    // pick the locale from the array
	    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
	    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
	    function chooseLocale(names) {
	        var i = 0,
	            j,
	            next,
	            locale,
	            split;
	
	        while (i < names.length) {
	            split = normalizeLocale(names[i]).split('-');
	            j = split.length;
	            next = normalizeLocale(names[i + 1]);
	            next = next ? next.split('-') : null;
	            while (j > 0) {
	                locale = loadLocale(split.slice(0, j).join('-'));
	                if (locale) {
	                    return locale;
	                }
	                if (
	                    next &&
	                    next.length >= j &&
	                    commonPrefix(split, next) >= j - 1
	                ) {
	                    //the next array item is better than a shallower substring of this one
	                    break;
	                }
	                j--;
	            }
	            i++;
	        }
	        return globalLocale;
	    }
	
	    function loadLocale(name) {
	        var oldLocale = null,
	            aliasedRequire;
	        // TODO: Find a better way to register and load all the locales in Node
	        if (
	            locales[name] === undefined &&
	            typeof module !== 'undefined' &&
	            module &&
	            module.exports
	        ) {
	            try {
	                oldLocale = globalLocale._abbr;
	                aliasedRequire = require;
	                __webpack_require__(86)("./" + name);
	                getSetGlobalLocale(oldLocale);
	            } catch (e) {
	                // mark as not found to avoid repeating expensive file require call causing high CPU
	                // when trying to find en-US, en_US, en-us for every format call
	                locales[name] = null; // null means not found
	            }
	        }
	        return locales[name];
	    }
	
	    // This function will load locale and then set the global locale.  If
	    // no arguments are passed in, it will simply return the current global
	    // locale key.
	    function getSetGlobalLocale(key, values) {
	        var data;
	        if (key) {
	            if (isUndefined(values)) {
	                data = getLocale(key);
	            } else {
	                data = defineLocale(key, values);
	            }
	
	            if (data) {
	                // moment.duration._locale = moment._locale = data;
	                globalLocale = data;
	            } else {
	                if (typeof console !== 'undefined' && console.warn) {
	                    //warn user if arguments are passed but the locale could not be set
	                    console.warn(
	                        'Locale ' + key + ' not found. Did you forget to load it?'
	                    );
	                }
	            }
	        }
	
	        return globalLocale._abbr;
	    }
	
	    function defineLocale(name, config) {
	        if (config !== null) {
	            var locale,
	                parentConfig = baseConfig;
	            config.abbr = name;
	            if (locales[name] != null) {
	                deprecateSimple(
	                    'defineLocaleOverride',
	                    'use moment.updateLocale(localeName, config) to change ' +
	                        'an existing locale. moment.defineLocale(localeName, ' +
	                        'config) should only be used for creating a new locale ' +
	                        'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.'
	                );
	                parentConfig = locales[name]._config;
	            } else if (config.parentLocale != null) {
	                if (locales[config.parentLocale] != null) {
	                    parentConfig = locales[config.parentLocale]._config;
	                } else {
	                    locale = loadLocale(config.parentLocale);
	                    if (locale != null) {
	                        parentConfig = locale._config;
	                    } else {
	                        if (!localeFamilies[config.parentLocale]) {
	                            localeFamilies[config.parentLocale] = [];
	                        }
	                        localeFamilies[config.parentLocale].push({
	                            name: name,
	                            config: config,
	                        });
	                        return null;
	                    }
	                }
	            }
	            locales[name] = new Locale(mergeConfigs(parentConfig, config));
	
	            if (localeFamilies[name]) {
	                localeFamilies[name].forEach(function (x) {
	                    defineLocale(x.name, x.config);
	                });
	            }
	
	            // backwards compat for now: also set the locale
	            // make sure we set the locale AFTER all child locales have been
	            // created, so we won't end up with the child locale set.
	            getSetGlobalLocale(name);
	
	            return locales[name];
	        } else {
	            // useful for testing
	            delete locales[name];
	            return null;
	        }
	    }
	
	    function updateLocale(name, config) {
	        if (config != null) {
	            var locale,
	                tmpLocale,
	                parentConfig = baseConfig;
	
	            if (locales[name] != null && locales[name].parentLocale != null) {
	                // Update existing child locale in-place to avoid memory-leaks
	                locales[name].set(mergeConfigs(locales[name]._config, config));
	            } else {
	                // MERGE
	                tmpLocale = loadLocale(name);
	                if (tmpLocale != null) {
	                    parentConfig = tmpLocale._config;
	                }
	                config = mergeConfigs(parentConfig, config);
	                if (tmpLocale == null) {
	                    // updateLocale is called for creating a new locale
	                    // Set abbr so it will have a name (getters return
	                    // undefined otherwise).
	                    config.abbr = name;
	                }
	                locale = new Locale(config);
	                locale.parentLocale = locales[name];
	                locales[name] = locale;
	            }
	
	            // backwards compat for now: also set the locale
	            getSetGlobalLocale(name);
	        } else {
	            // pass null for config to unupdate, useful for tests
	            if (locales[name] != null) {
	                if (locales[name].parentLocale != null) {
	                    locales[name] = locales[name].parentLocale;
	                    if (name === getSetGlobalLocale()) {
	                        getSetGlobalLocale(name);
	                    }
	                } else if (locales[name] != null) {
	                    delete locales[name];
	                }
	            }
	        }
	        return locales[name];
	    }
	
	    // returns locale data
	    function getLocale(key) {
	        var locale;
	
	        if (key && key._locale && key._locale._abbr) {
	            key = key._locale._abbr;
	        }
	
	        if (!key) {
	            return globalLocale;
	        }
	
	        if (!isArray(key)) {
	            //short-circuit everything else
	            locale = loadLocale(key);
	            if (locale) {
	                return locale;
	            }
	            key = [key];
	        }
	
	        return chooseLocale(key);
	    }
	
	    function listLocales() {
	        return keys(locales);
	    }
	
	    function checkOverflow(m) {
	        var overflow,
	            a = m._a;
	
	        if (a && getParsingFlags(m).overflow === -2) {
	            overflow =
	                a[MONTH] < 0 || a[MONTH] > 11
	                    ? MONTH
	                    : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH])
	                    ? DATE
	                    : a[HOUR] < 0 ||
	                      a[HOUR] > 24 ||
	                      (a[HOUR] === 24 &&
	                          (a[MINUTE] !== 0 ||
	                              a[SECOND] !== 0 ||
	                              a[MILLISECOND] !== 0))
	                    ? HOUR
	                    : a[MINUTE] < 0 || a[MINUTE] > 59
	                    ? MINUTE
	                    : a[SECOND] < 0 || a[SECOND] > 59
	                    ? SECOND
	                    : a[MILLISECOND] < 0 || a[MILLISECOND] > 999
	                    ? MILLISECOND
	                    : -1;
	
	            if (
	                getParsingFlags(m)._overflowDayOfYear &&
	                (overflow < YEAR || overflow > DATE)
	            ) {
	                overflow = DATE;
	            }
	            if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
	                overflow = WEEK;
	            }
	            if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
	                overflow = WEEKDAY;
	            }
	
	            getParsingFlags(m).overflow = overflow;
	        }
	
	        return m;
	    }
	
	    // iso 8601 regex
	    // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
	    var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
	        basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
	        tzRegex = /Z|[+-]\d\d(?::?\d\d)?/,
	        isoDates = [
	            ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
	            ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
	            ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
	            ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
	            ['YYYY-DDD', /\d{4}-\d{3}/],
	            ['YYYY-MM', /\d{4}-\d\d/, false],
	            ['YYYYYYMMDD', /[+-]\d{10}/],
	            ['YYYYMMDD', /\d{8}/],
	            ['GGGG[W]WWE', /\d{4}W\d{3}/],
	            ['GGGG[W]WW', /\d{4}W\d{2}/, false],
	            ['YYYYDDD', /\d{7}/],
	            ['YYYYMM', /\d{6}/, false],
	            ['YYYY', /\d{4}/, false],
	        ],
	        // iso time formats and regexes
	        isoTimes = [
	            ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
	            ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
	            ['HH:mm:ss', /\d\d:\d\d:\d\d/],
	            ['HH:mm', /\d\d:\d\d/],
	            ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
	            ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
	            ['HHmmss', /\d\d\d\d\d\d/],
	            ['HHmm', /\d\d\d\d/],
	            ['HH', /\d\d/],
	        ],
	        aspNetJsonRegex = /^\/?Date\((-?\d+)/i,
	        // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
	        rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
	        obsOffsets = {
	            UT: 0,
	            GMT: 0,
	            EDT: -4 * 60,
	            EST: -5 * 60,
	            CDT: -5 * 60,
	            CST: -6 * 60,
	            MDT: -6 * 60,
	            MST: -7 * 60,
	            PDT: -7 * 60,
	            PST: -8 * 60,
	        };
	
	    // date from iso format
	    function configFromISO(config) {
	        var i,
	            l,
	            string = config._i,
	            match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
	            allowTime,
	            dateFormat,
	            timeFormat,
	            tzFormat;
	
	        if (match) {
	            getParsingFlags(config).iso = true;
	
	            for (i = 0, l = isoDates.length; i < l; i++) {
	                if (isoDates[i][1].exec(match[1])) {
	                    dateFormat = isoDates[i][0];
	                    allowTime = isoDates[i][2] !== false;
	                    break;
	                }
	            }
	            if (dateFormat == null) {
	                config._isValid = false;
	                return;
	            }
	            if (match[3]) {
	                for (i = 0, l = isoTimes.length; i < l; i++) {
	                    if (isoTimes[i][1].exec(match[3])) {
	                        // match[2] should be 'T' or space
	                        timeFormat = (match[2] || ' ') + isoTimes[i][0];
	                        break;
	                    }
	                }
	                if (timeFormat == null) {
	                    config._isValid = false;
	                    return;
	                }
	            }
	            if (!allowTime && timeFormat != null) {
	                config._isValid = false;
	                return;
	            }
	            if (match[4]) {
	                if (tzRegex.exec(match[4])) {
	                    tzFormat = 'Z';
	                } else {
	                    config._isValid = false;
	                    return;
	                }
	            }
	            config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
	            configFromStringAndFormat(config);
	        } else {
	            config._isValid = false;
	        }
	    }
	
	    function extractFromRFC2822Strings(
	        yearStr,
	        monthStr,
	        dayStr,
	        hourStr,
	        minuteStr,
	        secondStr
	    ) {
	        var result = [
	            untruncateYear(yearStr),
	            defaultLocaleMonthsShort.indexOf(monthStr),
	            parseInt(dayStr, 10),
	            parseInt(hourStr, 10),
	            parseInt(minuteStr, 10),
	        ];
	
	        if (secondStr) {
	            result.push(parseInt(secondStr, 10));
	        }
	
	        return result;
	    }
	
	    function untruncateYear(yearStr) {
	        var year = parseInt(yearStr, 10);
	        if (year <= 49) {
	            return 2000 + year;
	        } else if (year <= 999) {
	            return 1900 + year;
	        }
	        return year;
	    }
	
	    function preprocessRFC2822(s) {
	        // Remove comments and folding whitespace and replace multiple-spaces with a single space
	        return s
	            .replace(/\([^)]*\)|[\n\t]/g, ' ')
	            .replace(/(\s\s+)/g, ' ')
	            .replace(/^\s\s*/, '')
	            .replace(/\s\s*$/, '');
	    }
	
	    function checkWeekday(weekdayStr, parsedInput, config) {
	        if (weekdayStr) {
	            // TODO: Replace the vanilla JS Date object with an independent day-of-week check.
	            var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
	                weekdayActual = new Date(
	                    parsedInput[0],
	                    parsedInput[1],
	                    parsedInput[2]
	                ).getDay();
	            if (weekdayProvided !== weekdayActual) {
	                getParsingFlags(config).weekdayMismatch = true;
	                config._isValid = false;
	                return false;
	            }
	        }
	        return true;
	    }
	
	    function calculateOffset(obsOffset, militaryOffset, numOffset) {
	        if (obsOffset) {
	            return obsOffsets[obsOffset];
	        } else if (militaryOffset) {
	            // the only allowed military tz is Z
	            return 0;
	        } else {
	            var hm = parseInt(numOffset, 10),
	                m = hm % 100,
	                h = (hm - m) / 100;
	            return h * 60 + m;
	        }
	    }
	
	    // date and time from ref 2822 format
	    function configFromRFC2822(config) {
	        var match = rfc2822.exec(preprocessRFC2822(config._i)),
	            parsedArray;
	        if (match) {
	            parsedArray = extractFromRFC2822Strings(
	                match[4],
	                match[3],
	                match[2],
	                match[5],
	                match[6],
	                match[7]
	            );
	            if (!checkWeekday(match[1], parsedArray, config)) {
	                return;
	            }
	
	            config._a = parsedArray;
	            config._tzm = calculateOffset(match[8], match[9], match[10]);
	
	            config._d = createUTCDate.apply(null, config._a);
	            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
	
	            getParsingFlags(config).rfc2822 = true;
	        } else {
	            config._isValid = false;
	        }
	    }
	
	    // date from 1) ASP.NET, 2) ISO, 3) RFC 2822 formats, or 4) optional fallback if parsing isn't strict
	    function configFromString(config) {
	        var matched = aspNetJsonRegex.exec(config._i);
	        if (matched !== null) {
	            config._d = new Date(+matched[1]);
	            return;
	        }
	
	        configFromISO(config);
	        if (config._isValid === false) {
	            delete config._isValid;
	        } else {
	            return;
	        }
	
	        configFromRFC2822(config);
	        if (config._isValid === false) {
	            delete config._isValid;
	        } else {
	            return;
	        }
	
	        if (config._strict) {
	            config._isValid = false;
	        } else {
	            // Final attempt, use Input Fallback
	            hooks.createFromInputFallback(config);
	        }
	    }
	
	    hooks.createFromInputFallback = deprecate(
	        'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
	            'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
	            'discouraged and will be removed in an upcoming major release. Please refer to ' +
	            'http://momentjs.com/guides/#/warnings/js-date/ for more info.',
	        function (config) {
	            config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
	        }
	    );
	
	    // Pick the first defined of two or three arguments.
	    function defaults(a, b, c) {
	        if (a != null) {
	            return a;
	        }
	        if (b != null) {
	            return b;
	        }
	        return c;
	    }
	
	    function currentDateArray(config) {
	        // hooks is actually the exported moment object
	        var nowValue = new Date(hooks.now());
	        if (config._useUTC) {
	            return [
	                nowValue.getUTCFullYear(),
	                nowValue.getUTCMonth(),
	                nowValue.getUTCDate(),
	            ];
	        }
	        return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
	    }
	
	    // convert an array to a date.
	    // the array should mirror the parameters below
	    // note: all values past the year are optional and will default to the lowest possible value.
	    // [year, month, day , hour, minute, second, millisecond]
	    function configFromArray(config) {
	        var i,
	            date,
	            input = [],
	            currentDate,
	            expectedWeekday,
	            yearToUse;
	
	        if (config._d) {
	            return;
	        }
	
	        currentDate = currentDateArray(config);
	
	        //compute day of the year from weeks and weekdays
	        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
	            dayOfYearFromWeekInfo(config);
	        }
	
	        //if the day of the year is set, figure out what it is
	        if (config._dayOfYear != null) {
	            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);
	
	            if (
	                config._dayOfYear > daysInYear(yearToUse) ||
	                config._dayOfYear === 0
	            ) {
	                getParsingFlags(config)._overflowDayOfYear = true;
	            }
	
	            date = createUTCDate(yearToUse, 0, config._dayOfYear);
	            config._a[MONTH] = date.getUTCMonth();
	            config._a[DATE] = date.getUTCDate();
	        }
	
	        // Default to current date.
	        // * if no year, month, day of month are given, default to today
	        // * if day of month is given, default month and year
	        // * if month is given, default only year
	        // * if year is given, don't default anything
	        for (i = 0; i < 3 && config._a[i] == null; ++i) {
	            config._a[i] = input[i] = currentDate[i];
	        }
	
	        // Zero out whatever was not defaulted, including time
	        for (; i < 7; i++) {
	            config._a[i] = input[i] =
	                config._a[i] == null ? (i === 2 ? 1 : 0) : config._a[i];
	        }
	
	        // Check for 24:00:00.000
	        if (
	            config._a[HOUR] === 24 &&
	            config._a[MINUTE] === 0 &&
	            config._a[SECOND] === 0 &&
	            config._a[MILLISECOND] === 0
	        ) {
	            config._nextDay = true;
	            config._a[HOUR] = 0;
	        }
	
	        config._d = (config._useUTC ? createUTCDate : createDate).apply(
	            null,
	            input
	        );
	        expectedWeekday = config._useUTC
	            ? config._d.getUTCDay()
	            : config._d.getDay();
	
	        // Apply timezone offset from input. The actual utcOffset can be changed
	        // with parseZone.
	        if (config._tzm != null) {
	            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
	        }
	
	        if (config._nextDay) {
	            config._a[HOUR] = 24;
	        }
	
	        // check for mismatching day of week
	        if (
	            config._w &&
	            typeof config._w.d !== 'undefined' &&
	            config._w.d !== expectedWeekday
	        ) {
	            getParsingFlags(config).weekdayMismatch = true;
	        }
	    }
	
	    function dayOfYearFromWeekInfo(config) {
	        var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow, curWeek;
	
	        w = config._w;
	        if (w.GG != null || w.W != null || w.E != null) {
	            dow = 1;
	            doy = 4;
	
	            // TODO: We need to take the current isoWeekYear, but that depends on
	            // how we interpret now (local, utc, fixed offset). So create
	            // a now version of current config (take local/utc/offset flags, and
	            // create now).
	            weekYear = defaults(
	                w.GG,
	                config._a[YEAR],
	                weekOfYear(createLocal(), 1, 4).year
	            );
	            week = defaults(w.W, 1);
	            weekday = defaults(w.E, 1);
	            if (weekday < 1 || weekday > 7) {
	                weekdayOverflow = true;
	            }
	        } else {
	            dow = config._locale._week.dow;
	            doy = config._locale._week.doy;
	
	            curWeek = weekOfYear(createLocal(), dow, doy);
	
	            weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);
	
	            // Default to current week.
	            week = defaults(w.w, curWeek.week);
	
	            if (w.d != null) {
	                // weekday -- low day numbers are considered next week
	                weekday = w.d;
	                if (weekday < 0 || weekday > 6) {
	                    weekdayOverflow = true;
	                }
	            } else if (w.e != null) {
	                // local weekday -- counting starts from beginning of week
	                weekday = w.e + dow;
	                if (w.e < 0 || w.e > 6) {
	                    weekdayOverflow = true;
	                }
	            } else {
	                // default to beginning of week
	                weekday = dow;
	            }
	        }
	        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
	            getParsingFlags(config)._overflowWeeks = true;
	        } else if (weekdayOverflow != null) {
	            getParsingFlags(config)._overflowWeekday = true;
	        } else {
	            temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
	            config._a[YEAR] = temp.year;
	            config._dayOfYear = temp.dayOfYear;
	        }
	    }
	
	    // constant that refers to the ISO standard
	    hooks.ISO_8601 = function () {};
	
	    // constant that refers to the RFC 2822 form
	    hooks.RFC_2822 = function () {};
	
	    // date from string and format string
	    function configFromStringAndFormat(config) {
	        // TODO: Move this to another part of the creation flow to prevent circular deps
	        if (config._f === hooks.ISO_8601) {
	            configFromISO(config);
	            return;
	        }
	        if (config._f === hooks.RFC_2822) {
	            configFromRFC2822(config);
	            return;
	        }
	        config._a = [];
	        getParsingFlags(config).empty = true;
	
	        // This array is used to make a Date, either with `new Date` or `Date.UTC`
	        var string = '' + config._i,
	            i,
	            parsedInput,
	            tokens,
	            token,
	            skipped,
	            stringLength = string.length,
	            totalParsedInputLength = 0,
	            era;
	
	        tokens =
	            expandFormat(config._f, config._locale).match(formattingTokens) || [];
	
	        for (i = 0; i < tokens.length; i++) {
	            token = tokens[i];
	            parsedInput = (string.match(getParseRegexForToken(token, config)) ||
	                [])[0];
	            if (parsedInput) {
	                skipped = string.substr(0, string.indexOf(parsedInput));
	                if (skipped.length > 0) {
	                    getParsingFlags(config).unusedInput.push(skipped);
	                }
	                string = string.slice(
	                    string.indexOf(parsedInput) + parsedInput.length
	                );
	                totalParsedInputLength += parsedInput.length;
	            }
	            // don't parse if it's not a known token
	            if (formatTokenFunctions[token]) {
	                if (parsedInput) {
	                    getParsingFlags(config).empty = false;
	                } else {
	                    getParsingFlags(config).unusedTokens.push(token);
	                }
	                addTimeToArrayFromToken(token, parsedInput, config);
	            } else if (config._strict && !parsedInput) {
	                getParsingFlags(config).unusedTokens.push(token);
	            }
	        }
	
	        // add remaining unparsed input length to the string
	        getParsingFlags(config).charsLeftOver =
	            stringLength - totalParsedInputLength;
	        if (string.length > 0) {
	            getParsingFlags(config).unusedInput.push(string);
	        }
	
	        // clear _12h flag if hour is <= 12
	        if (
	            config._a[HOUR] <= 12 &&
	            getParsingFlags(config).bigHour === true &&
	            config._a[HOUR] > 0
	        ) {
	            getParsingFlags(config).bigHour = undefined;
	        }
	
	        getParsingFlags(config).parsedDateParts = config._a.slice(0);
	        getParsingFlags(config).meridiem = config._meridiem;
	        // handle meridiem
	        config._a[HOUR] = meridiemFixWrap(
	            config._locale,
	            config._a[HOUR],
	            config._meridiem
	        );
	
	        // handle era
	        era = getParsingFlags(config).era;
	        if (era !== null) {
	            config._a[YEAR] = config._locale.erasConvertYear(era, config._a[YEAR]);
	        }
	
	        configFromArray(config);
	        checkOverflow(config);
	    }
	
	    function meridiemFixWrap(locale, hour, meridiem) {
	        var isPm;
	
	        if (meridiem == null) {
	            // nothing to do
	            return hour;
	        }
	        if (locale.meridiemHour != null) {
	            return locale.meridiemHour(hour, meridiem);
	        } else if (locale.isPM != null) {
	            // Fallback
	            isPm = locale.isPM(meridiem);
	            if (isPm && hour < 12) {
	                hour += 12;
	            }
	            if (!isPm && hour === 12) {
	                hour = 0;
	            }
	            return hour;
	        } else {
	            // this is not supposed to happen
	            return hour;
	        }
	    }
	
	    // date from string and array of format strings
	    function configFromStringAndArray(config) {
	        var tempConfig,
	            bestMoment,
	            scoreToBeat,
	            i,
	            currentScore,
	            validFormatFound,
	            bestFormatIsValid = false;
	
	        if (config._f.length === 0) {
	            getParsingFlags(config).invalidFormat = true;
	            config._d = new Date(NaN);
	            return;
	        }
	
	        for (i = 0; i < config._f.length; i++) {
	            currentScore = 0;
	            validFormatFound = false;
	            tempConfig = copyConfig({}, config);
	            if (config._useUTC != null) {
	                tempConfig._useUTC = config._useUTC;
	            }
	            tempConfig._f = config._f[i];
	            configFromStringAndFormat(tempConfig);
	
	            if (isValid(tempConfig)) {
	                validFormatFound = true;
	            }
	
	            // if there is any input that was not parsed add a penalty for that format
	            currentScore += getParsingFlags(tempConfig).charsLeftOver;
	
	            //or tokens
	            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
	
	            getParsingFlags(tempConfig).score = currentScore;
	
	            if (!bestFormatIsValid) {
	                if (
	                    scoreToBeat == null ||
	                    currentScore < scoreToBeat ||
	                    validFormatFound
	                ) {
	                    scoreToBeat = currentScore;
	                    bestMoment = tempConfig;
	                    if (validFormatFound) {
	                        bestFormatIsValid = true;
	                    }
	                }
	            } else {
	                if (currentScore < scoreToBeat) {
	                    scoreToBeat = currentScore;
	                    bestMoment = tempConfig;
	                }
	            }
	        }
	
	        extend(config, bestMoment || tempConfig);
	    }
	
	    function configFromObject(config) {
	        if (config._d) {
	            return;
	        }
	
	        var i = normalizeObjectUnits(config._i),
	            dayOrDate = i.day === undefined ? i.date : i.day;
	        config._a = map(
	            [i.year, i.month, dayOrDate, i.hour, i.minute, i.second, i.millisecond],
	            function (obj) {
	                return obj && parseInt(obj, 10);
	            }
	        );
	
	        configFromArray(config);
	    }
	
	    function createFromConfig(config) {
	        var res = new Moment(checkOverflow(prepareConfig(config)));
	        if (res._nextDay) {
	            // Adding is smart enough around DST
	            res.add(1, 'd');
	            res._nextDay = undefined;
	        }
	
	        return res;
	    }
	
	    function prepareConfig(config) {
	        var input = config._i,
	            format = config._f;
	
	        config._locale = config._locale || getLocale(config._l);
	
	        if (input === null || (format === undefined && input === '')) {
	            return createInvalid({ nullInput: true });
	        }
	
	        if (typeof input === 'string') {
	            config._i = input = config._locale.preparse(input);
	        }
	
	        if (isMoment(input)) {
	            return new Moment(checkOverflow(input));
	        } else if (isDate(input)) {
	            config._d = input;
	        } else if (isArray(format)) {
	            configFromStringAndArray(config);
	        } else if (format) {
	            configFromStringAndFormat(config);
	        } else {
	            configFromInput(config);
	        }
	
	        if (!isValid(config)) {
	            config._d = null;
	        }
	
	        return config;
	    }
	
	    function configFromInput(config) {
	        var input = config._i;
	        if (isUndefined(input)) {
	            config._d = new Date(hooks.now());
	        } else if (isDate(input)) {
	            config._d = new Date(input.valueOf());
	        } else if (typeof input === 'string') {
	            configFromString(config);
	        } else if (isArray(input)) {
	            config._a = map(input.slice(0), function (obj) {
	                return parseInt(obj, 10);
	            });
	            configFromArray(config);
	        } else if (isObject(input)) {
	            configFromObject(config);
	        } else if (isNumber(input)) {
	            // from milliseconds
	            config._d = new Date(input);
	        } else {
	            hooks.createFromInputFallback(config);
	        }
	    }
	
	    function createLocalOrUTC(input, format, locale, strict, isUTC) {
	        var c = {};
	
	        if (format === true || format === false) {
	            strict = format;
	            format = undefined;
	        }
	
	        if (locale === true || locale === false) {
	            strict = locale;
	            locale = undefined;
	        }
	
	        if (
	            (isObject(input) && isObjectEmpty(input)) ||
	            (isArray(input) && input.length === 0)
	        ) {
	            input = undefined;
	        }
	        // object construction must be done this way.
	        // https://github.com/moment/moment/issues/1423
	        c._isAMomentObject = true;
	        c._useUTC = c._isUTC = isUTC;
	        c._l = locale;
	        c._i = input;
	        c._f = format;
	        c._strict = strict;
	
	        return createFromConfig(c);
	    }
	
	    function createLocal(input, format, locale, strict) {
	        return createLocalOrUTC(input, format, locale, strict, false);
	    }
	
	    var prototypeMin = deprecate(
	            'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
	            function () {
	                var other = createLocal.apply(null, arguments);
	                if (this.isValid() && other.isValid()) {
	                    return other < this ? this : other;
	                } else {
	                    return createInvalid();
	                }
	            }
	        ),
	        prototypeMax = deprecate(
	            'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
	            function () {
	                var other = createLocal.apply(null, arguments);
	                if (this.isValid() && other.isValid()) {
	                    return other > this ? this : other;
	                } else {
	                    return createInvalid();
	                }
	            }
	        );
	
	    // Pick a moment m from moments so that m[fn](other) is true for all
	    // other. This relies on the function fn to be transitive.
	    //
	    // moments should either be an array of moment objects or an array, whose
	    // first element is an array of moment objects.
	    function pickBy(fn, moments) {
	        var res, i;
	        if (moments.length === 1 && isArray(moments[0])) {
	            moments = moments[0];
	        }
	        if (!moments.length) {
	            return createLocal();
	        }
	        res = moments[0];
	        for (i = 1; i < moments.length; ++i) {
	            if (!moments[i].isValid() || moments[i][fn](res)) {
	                res = moments[i];
	            }
	        }
	        return res;
	    }
	
	    // TODO: Use [].sort instead?
	    function min() {
	        var args = [].slice.call(arguments, 0);
	
	        return pickBy('isBefore', args);
	    }
	
	    function max() {
	        var args = [].slice.call(arguments, 0);
	
	        return pickBy('isAfter', args);
	    }
	
	    var now = function () {
	        return Date.now ? Date.now() : +new Date();
	    };
	
	    var ordering = [
	        'year',
	        'quarter',
	        'month',
	        'week',
	        'day',
	        'hour',
	        'minute',
	        'second',
	        'millisecond',
	    ];
	
	    function isDurationValid(m) {
	        var key,
	            unitHasDecimal = false,
	            i;
	        for (key in m) {
	            if (
	                hasOwnProp(m, key) &&
	                !(
	                    indexOf.call(ordering, key) !== -1 &&
	                    (m[key] == null || !isNaN(m[key]))
	                )
	            ) {
	                return false;
	            }
	        }
	
	        for (i = 0; i < ordering.length; ++i) {
	            if (m[ordering[i]]) {
	                if (unitHasDecimal) {
	                    return false; // only allow non-integers for smallest unit
	                }
	                if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
	                    unitHasDecimal = true;
	                }
	            }
	        }
	
	        return true;
	    }
	
	    function isValid$1() {
	        return this._isValid;
	    }
	
	    function createInvalid$1() {
	        return createDuration(NaN);
	    }
	
	    function Duration(duration) {
	        var normalizedInput = normalizeObjectUnits(duration),
	            years = normalizedInput.year || 0,
	            quarters = normalizedInput.quarter || 0,
	            months = normalizedInput.month || 0,
	            weeks = normalizedInput.week || normalizedInput.isoWeek || 0,
	            days = normalizedInput.day || 0,
	            hours = normalizedInput.hour || 0,
	            minutes = normalizedInput.minute || 0,
	            seconds = normalizedInput.second || 0,
	            milliseconds = normalizedInput.millisecond || 0;
	
	        this._isValid = isDurationValid(normalizedInput);
	
	        // representation for dateAddRemove
	        this._milliseconds =
	            +milliseconds +
	            seconds * 1e3 + // 1000
	            minutes * 6e4 + // 1000 * 60
	            hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
	        // Because of dateAddRemove treats 24 hours as different from a
	        // day when working around DST, we need to store them separately
	        this._days = +days + weeks * 7;
	        // It is impossible to translate months into days without knowing
	        // which months you are are talking about, so we have to store
	        // it separately.
	        this._months = +months + quarters * 3 + years * 12;
	
	        this._data = {};
	
	        this._locale = getLocale();
	
	        this._bubble();
	    }
	
	    function isDuration(obj) {
	        return obj instanceof Duration;
	    }
	
	    function absRound(number) {
	        if (number < 0) {
	            return Math.round(-1 * number) * -1;
	        } else {
	            return Math.round(number);
	        }
	    }
	
	    // compare two arrays, return the number of differences
	    function compareArrays(array1, array2, dontConvert) {
	        var len = Math.min(array1.length, array2.length),
	            lengthDiff = Math.abs(array1.length - array2.length),
	            diffs = 0,
	            i;
	        for (i = 0; i < len; i++) {
	            if (
	                (dontConvert && array1[i] !== array2[i]) ||
	                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))
	            ) {
	                diffs++;
	            }
	        }
	        return diffs + lengthDiff;
	    }
	
	    // FORMATTING
	
	    function offset(token, separator) {
	        addFormatToken(token, 0, 0, function () {
	            var offset = this.utcOffset(),
	                sign = '+';
	            if (offset < 0) {
	                offset = -offset;
	                sign = '-';
	            }
	            return (
	                sign +
	                zeroFill(~~(offset / 60), 2) +
	                separator +
	                zeroFill(~~offset % 60, 2)
	            );
	        });
	    }
	
	    offset('Z', ':');
	    offset('ZZ', '');
	
	    // PARSING
	
	    addRegexToken('Z', matchShortOffset);
	    addRegexToken('ZZ', matchShortOffset);
	    addParseToken(['Z', 'ZZ'], function (input, array, config) {
	        config._useUTC = true;
	        config._tzm = offsetFromString(matchShortOffset, input);
	    });
	
	    // HELPERS
	
	    // timezone chunker
	    // '+10:00' > ['10',  '00']
	    // '-1530'  > ['-15', '30']
	    var chunkOffset = /([\+\-]|\d\d)/gi;
	
	    function offsetFromString(matcher, string) {
	        var matches = (string || '').match(matcher),
	            chunk,
	            parts,
	            minutes;
	
	        if (matches === null) {
	            return null;
	        }
	
	        chunk = matches[matches.length - 1] || [];
	        parts = (chunk + '').match(chunkOffset) || ['-', 0, 0];
	        minutes = +(parts[1] * 60) + toInt(parts[2]);
	
	        return minutes === 0 ? 0 : parts[0] === '+' ? minutes : -minutes;
	    }
	
	    // Return a moment from input, that is local/utc/zone equivalent to model.
	    function cloneWithOffset(input, model) {
	        var res, diff;
	        if (model._isUTC) {
	            res = model.clone();
	            diff =
	                (isMoment(input) || isDate(input)
	                    ? input.valueOf()
	                    : createLocal(input).valueOf()) - res.valueOf();
	            // Use low-level api, because this fn is low-level api.
	            res._d.setTime(res._d.valueOf() + diff);
	            hooks.updateOffset(res, false);
	            return res;
	        } else {
	            return createLocal(input).local();
	        }
	    }
	
	    function getDateOffset(m) {
	        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
	        // https://github.com/moment/moment/pull/1871
	        return -Math.round(m._d.getTimezoneOffset());
	    }
	
	    // HOOKS
	
	    // This function will be called whenever a moment is mutated.
	    // It is intended to keep the offset in sync with the timezone.
	    hooks.updateOffset = function () {};
	
	    // MOMENTS
	
	    // keepLocalTime = true means only change the timezone, without
	    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
	    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
	    // +0200, so we adjust the time as needed, to be valid.
	    //
	    // Keeping the time actually adds/subtracts (one hour)
	    // from the actual represented time. That is why we call updateOffset
	    // a second time. In case it wants us to change the offset again
	    // _changeInProgress == true case, then we have to adjust, because
	    // there is no such time in the given timezone.
	    function getSetOffset(input, keepLocalTime, keepMinutes) {
	        var offset = this._offset || 0,
	            localAdjust;
	        if (!this.isValid()) {
	            return input != null ? this : NaN;
	        }
	        if (input != null) {
	            if (typeof input === 'string') {
	                input = offsetFromString(matchShortOffset, input);
	                if (input === null) {
	                    return this;
	                }
	            } else if (Math.abs(input) < 16 && !keepMinutes) {
	                input = input * 60;
	            }
	            if (!this._isUTC && keepLocalTime) {
	                localAdjust = getDateOffset(this);
	            }
	            this._offset = input;
	            this._isUTC = true;
	            if (localAdjust != null) {
	                this.add(localAdjust, 'm');
	            }
	            if (offset !== input) {
	                if (!keepLocalTime || this._changeInProgress) {
	                    addSubtract(
	                        this,
	                        createDuration(input - offset, 'm'),
	                        1,
	                        false
	                    );
	                } else if (!this._changeInProgress) {
	                    this._changeInProgress = true;
	                    hooks.updateOffset(this, true);
	                    this._changeInProgress = null;
	                }
	            }
	            return this;
	        } else {
	            return this._isUTC ? offset : getDateOffset(this);
	        }
	    }
	
	    function getSetZone(input, keepLocalTime) {
	        if (input != null) {
	            if (typeof input !== 'string') {
	                input = -input;
	            }
	
	            this.utcOffset(input, keepLocalTime);
	
	            return this;
	        } else {
	            return -this.utcOffset();
	        }
	    }
	
	    function setOffsetToUTC(keepLocalTime) {
	        return this.utcOffset(0, keepLocalTime);
	    }
	
	    function setOffsetToLocal(keepLocalTime) {
	        if (this._isUTC) {
	            this.utcOffset(0, keepLocalTime);
	            this._isUTC = false;
	
	            if (keepLocalTime) {
	                this.subtract(getDateOffset(this), 'm');
	            }
	        }
	        return this;
	    }
	
	    function setOffsetToParsedOffset() {
	        if (this._tzm != null) {
	            this.utcOffset(this._tzm, false, true);
	        } else if (typeof this._i === 'string') {
	            var tZone = offsetFromString(matchOffset, this._i);
	            if (tZone != null) {
	                this.utcOffset(tZone);
	            } else {
	                this.utcOffset(0, true);
	            }
	        }
	        return this;
	    }
	
	    function hasAlignedHourOffset(input) {
	        if (!this.isValid()) {
	            return false;
	        }
	        input = input ? createLocal(input).utcOffset() : 0;
	
	        return (this.utcOffset() - input) % 60 === 0;
	    }
	
	    function isDaylightSavingTime() {
	        return (
	            this.utcOffset() > this.clone().month(0).utcOffset() ||
	            this.utcOffset() > this.clone().month(5).utcOffset()
	        );
	    }
	
	    function isDaylightSavingTimeShifted() {
	        if (!isUndefined(this._isDSTShifted)) {
	            return this._isDSTShifted;
	        }
	
	        var c = {},
	            other;
	
	        copyConfig(c, this);
	        c = prepareConfig(c);
	
	        if (c._a) {
	            other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
	            this._isDSTShifted =
	                this.isValid() && compareArrays(c._a, other.toArray()) > 0;
	        } else {
	            this._isDSTShifted = false;
	        }
	
	        return this._isDSTShifted;
	    }
	
	    function isLocal() {
	        return this.isValid() ? !this._isUTC : false;
	    }
	
	    function isUtcOffset() {
	        return this.isValid() ? this._isUTC : false;
	    }
	
	    function isUtc() {
	        return this.isValid() ? this._isUTC && this._offset === 0 : false;
	    }
	
	    // ASP.NET json date format regex
	    var aspNetRegex = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
	        // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
	        // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
	        // and further modified to allow for strings containing both week and day
	        isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
	
	    function createDuration(input, key) {
	        var duration = input,
	            // matching against regexp is expensive, do it on demand
	            match = null,
	            sign,
	            ret,
	            diffRes;
	
	        if (isDuration(input)) {
	            duration = {
	                ms: input._milliseconds,
	                d: input._days,
	                M: input._months,
	            };
	        } else if (isNumber(input) || !isNaN(+input)) {
	            duration = {};
	            if (key) {
	                duration[key] = +input;
	            } else {
	                duration.milliseconds = +input;
	            }
	        } else if ((match = aspNetRegex.exec(input))) {
	            sign = match[1] === '-' ? -1 : 1;
	            duration = {
	                y: 0,
	                d: toInt(match[DATE]) * sign,
	                h: toInt(match[HOUR]) * sign,
	                m: toInt(match[MINUTE]) * sign,
	                s: toInt(match[SECOND]) * sign,
	                ms: toInt(absRound(match[MILLISECOND] * 1000)) * sign, // the millisecond decimal point is included in the match
	            };
	        } else if ((match = isoRegex.exec(input))) {
	            sign = match[1] === '-' ? -1 : 1;
	            duration = {
	                y: parseIso(match[2], sign),
	                M: parseIso(match[3], sign),
	                w: parseIso(match[4], sign),
	                d: parseIso(match[5], sign),
	                h: parseIso(match[6], sign),
	                m: parseIso(match[7], sign),
	                s: parseIso(match[8], sign),
	            };
	        } else if (duration == null) {
	            // checks for null or undefined
	            duration = {};
	        } else if (
	            typeof duration === 'object' &&
	            ('from' in duration || 'to' in duration)
	        ) {
	            diffRes = momentsDifference(
	                createLocal(duration.from),
	                createLocal(duration.to)
	            );
	
	            duration = {};
	            duration.ms = diffRes.milliseconds;
	            duration.M = diffRes.months;
	        }
	
	        ret = new Duration(duration);
	
	        if (isDuration(input) && hasOwnProp(input, '_locale')) {
	            ret._locale = input._locale;
	        }
	
	        if (isDuration(input) && hasOwnProp(input, '_isValid')) {
	            ret._isValid = input._isValid;
	        }
	
	        return ret;
	    }
	
	    createDuration.fn = Duration.prototype;
	    createDuration.invalid = createInvalid$1;
	
	    function parseIso(inp, sign) {
	        // We'd normally use ~~inp for this, but unfortunately it also
	        // converts floats to ints.
	        // inp may be undefined, so careful calling replace on it.
	        var res = inp && parseFloat(inp.replace(',', '.'));
	        // apply sign while we're at it
	        return (isNaN(res) ? 0 : res) * sign;
	    }
	
	    function positiveMomentsDifference(base, other) {
	        var res = {};
	
	        res.months =
	            other.month() - base.month() + (other.year() - base.year()) * 12;
	        if (base.clone().add(res.months, 'M').isAfter(other)) {
	            --res.months;
	        }
	
	        res.milliseconds = +other - +base.clone().add(res.months, 'M');
	
	        return res;
	    }
	
	    function momentsDifference(base, other) {
	        var res;
	        if (!(base.isValid() && other.isValid())) {
	            return { milliseconds: 0, months: 0 };
	        }
	
	        other = cloneWithOffset(other, base);
	        if (base.isBefore(other)) {
	            res = positiveMomentsDifference(base, other);
	        } else {
	            res = positiveMomentsDifference(other, base);
	            res.milliseconds = -res.milliseconds;
	            res.months = -res.months;
	        }
	
	        return res;
	    }
	
	    // TODO: remove 'name' arg after deprecation is removed
	    function createAdder(direction, name) {
	        return function (val, period) {
	            var dur, tmp;
	            //invert the arguments, but complain about it
	            if (period !== null && !isNaN(+period)) {
	                deprecateSimple(
	                    name,
	                    'moment().' +
	                        name +
	                        '(period, number) is deprecated. Please use moment().' +
	                        name +
	                        '(number, period). ' +
	                        'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.'
	                );
	                tmp = val;
	                val = period;
	                period = tmp;
	            }
	
	            dur = createDuration(val, period);
	            addSubtract(this, dur, direction);
	            return this;
	        };
	    }
	
	    function addSubtract(mom, duration, isAdding, updateOffset) {
	        var milliseconds = duration._milliseconds,
	            days = absRound(duration._days),
	            months = absRound(duration._months);
	
	        if (!mom.isValid()) {
	            // No op
	            return;
	        }
	
	        updateOffset = updateOffset == null ? true : updateOffset;
	
	        if (months) {
	            setMonth(mom, get(mom, 'Month') + months * isAdding);
	        }
	        if (days) {
	            set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
	        }
	        if (milliseconds) {
	            mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
	        }
	        if (updateOffset) {
	            hooks.updateOffset(mom, days || months);
	        }
	    }
	
	    var add = createAdder(1, 'add'),
	        subtract = createAdder(-1, 'subtract');
	
	    function isString(input) {
	        return typeof input === 'string' || input instanceof String;
	    }
	
	    // type MomentInput = Moment | Date | string | number | (number | string)[] | MomentInputObject | void; // null | undefined
	    function isMomentInput(input) {
	        return (
	            isMoment(input) ||
	            isDate(input) ||
	            isString(input) ||
	            isNumber(input) ||
	            isNumberOrStringArray(input) ||
	            isMomentInputObject(input) ||
	            input === null ||
	            input === undefined
	        );
	    }
	
	    function isMomentInputObject(input) {
	        var objectTest = isObject(input) && !isObjectEmpty(input),
	            propertyTest = false,
	            properties = [
	                'years',
	                'year',
	                'y',
	                'months',
	                'month',
	                'M',
	                'days',
	                'day',
	                'd',
	                'dates',
	                'date',
	                'D',
	                'hours',
	                'hour',
	                'h',
	                'minutes',
	                'minute',
	                'm',
	                'seconds',
	                'second',
	                's',
	                'milliseconds',
	                'millisecond',
	                'ms',
	            ],
	            i,
	            property;
	
	        for (i = 0; i < properties.length; i += 1) {
	            property = properties[i];
	            propertyTest = propertyTest || hasOwnProp(input, property);
	        }
	
	        return objectTest && propertyTest;
	    }
	
	    function isNumberOrStringArray(input) {
	        var arrayTest = isArray(input),
	            dataTypeTest = false;
	        if (arrayTest) {
	            dataTypeTest =
	                input.filter(function (item) {
	                    return !isNumber(item) && isString(input);
	                }).length === 0;
	        }
	        return arrayTest && dataTypeTest;
	    }
	
	    function isCalendarSpec(input) {
	        var objectTest = isObject(input) && !isObjectEmpty(input),
	            propertyTest = false,
	            properties = [
	                'sameDay',
	                'nextDay',
	                'lastDay',
	                'nextWeek',
	                'lastWeek',
	                'sameElse',
	            ],
	            i,
	            property;
	
	        for (i = 0; i < properties.length; i += 1) {
	            property = properties[i];
	            propertyTest = propertyTest || hasOwnProp(input, property);
	        }
	
	        return objectTest && propertyTest;
	    }
	
	    function getCalendarFormat(myMoment, now) {
	        var diff = myMoment.diff(now, 'days', true);
	        return diff < -6
	            ? 'sameElse'
	            : diff < -1
	            ? 'lastWeek'
	            : diff < 0
	            ? 'lastDay'
	            : diff < 1
	            ? 'sameDay'
	            : diff < 2
	            ? 'nextDay'
	            : diff < 7
	            ? 'nextWeek'
	            : 'sameElse';
	    }
	
	    function calendar$1(time, formats) {
	        // Support for single parameter, formats only overload to the calendar function
	        if (arguments.length === 1) {
	            if (isMomentInput(arguments[0])) {
	                time = arguments[0];
	                formats = undefined;
	            } else if (isCalendarSpec(arguments[0])) {
	                formats = arguments[0];
	                time = undefined;
	            }
	        }
	        // We want to compare the start of today, vs this.
	        // Getting start-of-today depends on whether we're local/utc/offset or not.
	        var now = time || createLocal(),
	            sod = cloneWithOffset(now, this).startOf('day'),
	            format = hooks.calendarFormat(this, sod) || 'sameElse',
	            output =
	                formats &&
	                (isFunction(formats[format])
	                    ? formats[format].call(this, now)
	                    : formats[format]);
	
	        return this.format(
	            output || this.localeData().calendar(format, this, createLocal(now))
	        );
	    }
	
	    function clone() {
	        return new Moment(this);
	    }
	
	    function isAfter(input, units) {
	        var localInput = isMoment(input) ? input : createLocal(input);
	        if (!(this.isValid() && localInput.isValid())) {
	            return false;
	        }
	        units = normalizeUnits(units) || 'millisecond';
	        if (units === 'millisecond') {
	            return this.valueOf() > localInput.valueOf();
	        } else {
	            return localInput.valueOf() < this.clone().startOf(units).valueOf();
	        }
	    }
	
	    function isBefore(input, units) {
	        var localInput = isMoment(input) ? input : createLocal(input);
	        if (!(this.isValid() && localInput.isValid())) {
	            return false;
	        }
	        units = normalizeUnits(units) || 'millisecond';
	        if (units === 'millisecond') {
	            return this.valueOf() < localInput.valueOf();
	        } else {
	            return this.clone().endOf(units).valueOf() < localInput.valueOf();
	        }
	    }
	
	    function isBetween(from, to, units, inclusivity) {
	        var localFrom = isMoment(from) ? from : createLocal(from),
	            localTo = isMoment(to) ? to : createLocal(to);
	        if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
	            return false;
	        }
	        inclusivity = inclusivity || '()';
	        return (
	            (inclusivity[0] === '('
	                ? this.isAfter(localFrom, units)
	                : !this.isBefore(localFrom, units)) &&
	            (inclusivity[1] === ')'
	                ? this.isBefore(localTo, units)
	                : !this.isAfter(localTo, units))
	        );
	    }
	
	    function isSame(input, units) {
	        var localInput = isMoment(input) ? input : createLocal(input),
	            inputMs;
	        if (!(this.isValid() && localInput.isValid())) {
	            return false;
	        }
	        units = normalizeUnits(units) || 'millisecond';
	        if (units === 'millisecond') {
	            return this.valueOf() === localInput.valueOf();
	        } else {
	            inputMs = localInput.valueOf();
	            return (
	                this.clone().startOf(units).valueOf() <= inputMs &&
	                inputMs <= this.clone().endOf(units).valueOf()
	            );
	        }
	    }
	
	    function isSameOrAfter(input, units) {
	        return this.isSame(input, units) || this.isAfter(input, units);
	    }
	
	    function isSameOrBefore(input, units) {
	        return this.isSame(input, units) || this.isBefore(input, units);
	    }
	
	    function diff(input, units, asFloat) {
	        var that, zoneDelta, output;
	
	        if (!this.isValid()) {
	            return NaN;
	        }
	
	        that = cloneWithOffset(input, this);
	
	        if (!that.isValid()) {
	            return NaN;
	        }
	
	        zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;
	
	        units = normalizeUnits(units);
	
	        switch (units) {
	            case 'year':
	                output = monthDiff(this, that) / 12;
	                break;
	            case 'month':
	                output = monthDiff(this, that);
	                break;
	            case 'quarter':
	                output = monthDiff(this, that) / 3;
	                break;
	            case 'second':
	                output = (this - that) / 1e3;
	                break; // 1000
	            case 'minute':
	                output = (this - that) / 6e4;
	                break; // 1000 * 60
	            case 'hour':
	                output = (this - that) / 36e5;
	                break; // 1000 * 60 * 60
	            case 'day':
	                output = (this - that - zoneDelta) / 864e5;
	                break; // 1000 * 60 * 60 * 24, negate dst
	            case 'week':
	                output = (this - that - zoneDelta) / 6048e5;
	                break; // 1000 * 60 * 60 * 24 * 7, negate dst
	            default:
	                output = this - that;
	        }
	
	        return asFloat ? output : absFloor(output);
	    }
	
	    function monthDiff(a, b) {
	        if (a.date() < b.date()) {
	            // end-of-month calculations work correct when the start month has more
	            // days than the end month.
	            return -monthDiff(b, a);
	        }
	        // difference in months
	        var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()),
	            // b is in (anchor - 1 month, anchor + 1 month)
	            anchor = a.clone().add(wholeMonthDiff, 'months'),
	            anchor2,
	            adjust;
	
	        if (b - anchor < 0) {
	            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
	            // linear across the month
	            adjust = (b - anchor) / (anchor - anchor2);
	        } else {
	            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
	            // linear across the month
	            adjust = (b - anchor) / (anchor2 - anchor);
	        }
	
	        //check for negative zero, return zero if negative zero
	        return -(wholeMonthDiff + adjust) || 0;
	    }
	
	    hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
	    hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';
	
	    function toString() {
	        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
	    }
	
	    function toISOString(keepOffset) {
	        if (!this.isValid()) {
	            return null;
	        }
	        var utc = keepOffset !== true,
	            m = utc ? this.clone().utc() : this;
	        if (m.year() < 0 || m.year() > 9999) {
	            return formatMoment(
	                m,
	                utc
	                    ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]'
	                    : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ'
	            );
	        }
	        if (isFunction(Date.prototype.toISOString)) {
	            // native implementation is ~50x faster, use it when we can
	            if (utc) {
	                return this.toDate().toISOString();
	            } else {
	                return new Date(this.valueOf() + this.utcOffset() * 60 * 1000)
	                    .toISOString()
	                    .replace('Z', formatMoment(m, 'Z'));
	            }
	        }
	        return formatMoment(
	            m,
	            utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ'
	        );
	    }
	
	    /**
	     * Return a human readable representation of a moment that can
	     * also be evaluated to get a new moment which is the same
	     *
	     * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
	     */
	    function inspect() {
	        if (!this.isValid()) {
	            return 'moment.invalid(/* ' + this._i + ' */)';
	        }
	        var func = 'moment',
	            zone = '',
	            prefix,
	            year,
	            datetime,
	            suffix;
	        if (!this.isLocal()) {
	            func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
	            zone = 'Z';
	        }
	        prefix = '[' + func + '("]';
	        year = 0 <= this.year() && this.year() <= 9999 ? 'YYYY' : 'YYYYYY';
	        datetime = '-MM-DD[T]HH:mm:ss.SSS';
	        suffix = zone + '[")]';
	
	        return this.format(prefix + year + datetime + suffix);
	    }
	
	    function format(inputString) {
	        if (!inputString) {
	            inputString = this.isUtc()
	                ? hooks.defaultFormatUtc
	                : hooks.defaultFormat;
	        }
	        var output = formatMoment(this, inputString);
	        return this.localeData().postformat(output);
	    }
	
	    function from(time, withoutSuffix) {
	        if (
	            this.isValid() &&
	            ((isMoment(time) && time.isValid()) || createLocal(time).isValid())
	        ) {
	            return createDuration({ to: this, from: time })
	                .locale(this.locale())
	                .humanize(!withoutSuffix);
	        } else {
	            return this.localeData().invalidDate();
	        }
	    }
	
	    function fromNow(withoutSuffix) {
	        return this.from(createLocal(), withoutSuffix);
	    }
	
	    function to(time, withoutSuffix) {
	        if (
	            this.isValid() &&
	            ((isMoment(time) && time.isValid()) || createLocal(time).isValid())
	        ) {
	            return createDuration({ from: this, to: time })
	                .locale(this.locale())
	                .humanize(!withoutSuffix);
	        } else {
	            return this.localeData().invalidDate();
	        }
	    }
	
	    function toNow(withoutSuffix) {
	        return this.to(createLocal(), withoutSuffix);
	    }
	
	    // If passed a locale key, it will set the locale for this
	    // instance.  Otherwise, it will return the locale configuration
	    // variables for this instance.
	    function locale(key) {
	        var newLocaleData;
	
	        if (key === undefined) {
	            return this._locale._abbr;
	        } else {
	            newLocaleData = getLocale(key);
	            if (newLocaleData != null) {
	                this._locale = newLocaleData;
	            }
	            return this;
	        }
	    }
	
	    var lang = deprecate(
	        'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
	        function (key) {
	            if (key === undefined) {
	                return this.localeData();
	            } else {
	                return this.locale(key);
	            }
	        }
	    );
	
	    function localeData() {
	        return this._locale;
	    }
	
	    var MS_PER_SECOND = 1000,
	        MS_PER_MINUTE = 60 * MS_PER_SECOND,
	        MS_PER_HOUR = 60 * MS_PER_MINUTE,
	        MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;
	
	    // actual modulo - handles negative numbers (for dates before 1970):
	    function mod$1(dividend, divisor) {
	        return ((dividend % divisor) + divisor) % divisor;
	    }
	
	    function localStartOfDate(y, m, d) {
	        // the date constructor remaps years 0-99 to 1900-1999
	        if (y < 100 && y >= 0) {
	            // preserve leap years using a full 400 year cycle, then reset
	            return new Date(y + 400, m, d) - MS_PER_400_YEARS;
	        } else {
	            return new Date(y, m, d).valueOf();
	        }
	    }
	
	    function utcStartOfDate(y, m, d) {
	        // Date.UTC remaps years 0-99 to 1900-1999
	        if (y < 100 && y >= 0) {
	            // preserve leap years using a full 400 year cycle, then reset
	            return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
	        } else {
	            return Date.UTC(y, m, d);
	        }
	    }
	
	    function startOf(units) {
	        var time, startOfDate;
	        units = normalizeUnits(units);
	        if (units === undefined || units === 'millisecond' || !this.isValid()) {
	            return this;
	        }
	
	        startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
	
	        switch (units) {
	            case 'year':
	                time = startOfDate(this.year(), 0, 1);
	                break;
	            case 'quarter':
	                time = startOfDate(
	                    this.year(),
	                    this.month() - (this.month() % 3),
	                    1
	                );
	                break;
	            case 'month':
	                time = startOfDate(this.year(), this.month(), 1);
	                break;
	            case 'week':
	                time = startOfDate(
	                    this.year(),
	                    this.month(),
	                    this.date() - this.weekday()
	                );
	                break;
	            case 'isoWeek':
	                time = startOfDate(
	                    this.year(),
	                    this.month(),
	                    this.date() - (this.isoWeekday() - 1)
	                );
	                break;
	            case 'day':
	            case 'date':
	                time = startOfDate(this.year(), this.month(), this.date());
	                break;
	            case 'hour':
	                time = this._d.valueOf();
	                time -= mod$1(
	                    time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
	                    MS_PER_HOUR
	                );
	                break;
	            case 'minute':
	                time = this._d.valueOf();
	                time -= mod$1(time, MS_PER_MINUTE);
	                break;
	            case 'second':
	                time = this._d.valueOf();
	                time -= mod$1(time, MS_PER_SECOND);
	                break;
	        }
	
	        this._d.setTime(time);
	        hooks.updateOffset(this, true);
	        return this;
	    }
	
	    function endOf(units) {
	        var time, startOfDate;
	        units = normalizeUnits(units);
	        if (units === undefined || units === 'millisecond' || !this.isValid()) {
	            return this;
	        }
	
	        startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
	
	        switch (units) {
	            case 'year':
	                time = startOfDate(this.year() + 1, 0, 1) - 1;
	                break;
	            case 'quarter':
	                time =
	                    startOfDate(
	                        this.year(),
	                        this.month() - (this.month() % 3) + 3,
	                        1
	                    ) - 1;
	                break;
	            case 'month':
	                time = startOfDate(this.year(), this.month() + 1, 1) - 1;
	                break;
	            case 'week':
	                time =
	                    startOfDate(
	                        this.year(),
	                        this.month(),
	                        this.date() - this.weekday() + 7
	                    ) - 1;
	                break;
	            case 'isoWeek':
	                time =
	                    startOfDate(
	                        this.year(),
	                        this.month(),
	                        this.date() - (this.isoWeekday() - 1) + 7
	                    ) - 1;
	                break;
	            case 'day':
	            case 'date':
	                time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
	                break;
	            case 'hour':
	                time = this._d.valueOf();
	                time +=
	                    MS_PER_HOUR -
	                    mod$1(
	                        time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
	                        MS_PER_HOUR
	                    ) -
	                    1;
	                break;
	            case 'minute':
	                time = this._d.valueOf();
	                time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
	                break;
	            case 'second':
	                time = this._d.valueOf();
	                time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
	                break;
	        }
	
	        this._d.setTime(time);
	        hooks.updateOffset(this, true);
	        return this;
	    }
	
	    function valueOf() {
	        return this._d.valueOf() - (this._offset || 0) * 60000;
	    }
	
	    function unix() {
	        return Math.floor(this.valueOf() / 1000);
	    }
	
	    function toDate() {
	        return new Date(this.valueOf());
	    }
	
	    function toArray() {
	        var m = this;
	        return [
	            m.year(),
	            m.month(),
	            m.date(),
	            m.hour(),
	            m.minute(),
	            m.second(),
	            m.millisecond(),
	        ];
	    }
	
	    function toObject() {
	        var m = this;
	        return {
	            years: m.year(),
	            months: m.month(),
	            date: m.date(),
	            hours: m.hours(),
	            minutes: m.minutes(),
	            seconds: m.seconds(),
	            milliseconds: m.milliseconds(),
	        };
	    }
	
	    function toJSON() {
	        // new Date(NaN).toJSON() === null
	        return this.isValid() ? this.toISOString() : null;
	    }
	
	    function isValid$2() {
	        return isValid(this);
	    }
	
	    function parsingFlags() {
	        return extend({}, getParsingFlags(this));
	    }
	
	    function invalidAt() {
	        return getParsingFlags(this).overflow;
	    }
	
	    function creationData() {
	        return {
	            input: this._i,
	            format: this._f,
	            locale: this._locale,
	            isUTC: this._isUTC,
	            strict: this._strict,
	        };
	    }
	
	    addFormatToken('N', 0, 0, 'eraAbbr');
	    addFormatToken('NN', 0, 0, 'eraAbbr');
	    addFormatToken('NNN', 0, 0, 'eraAbbr');
	    addFormatToken('NNNN', 0, 0, 'eraName');
	    addFormatToken('NNNNN', 0, 0, 'eraNarrow');
	
	    addFormatToken('y', ['y', 1], 'yo', 'eraYear');
	    addFormatToken('y', ['yy', 2], 0, 'eraYear');
	    addFormatToken('y', ['yyy', 3], 0, 'eraYear');
	    addFormatToken('y', ['yyyy', 4], 0, 'eraYear');
	
	    addRegexToken('N', matchEraAbbr);
	    addRegexToken('NN', matchEraAbbr);
	    addRegexToken('NNN', matchEraAbbr);
	    addRegexToken('NNNN', matchEraName);
	    addRegexToken('NNNNN', matchEraNarrow);
	
	    addParseToken(['N', 'NN', 'NNN', 'NNNN', 'NNNNN'], function (
	        input,
	        array,
	        config,
	        token
	    ) {
	        var era = config._locale.erasParse(input, token, config._strict);
	        if (era) {
	            getParsingFlags(config).era = era;
	        } else {
	            getParsingFlags(config).invalidEra = input;
	        }
	    });
	
	    addRegexToken('y', matchUnsigned);
	    addRegexToken('yy', matchUnsigned);
	    addRegexToken('yyy', matchUnsigned);
	    addRegexToken('yyyy', matchUnsigned);
	    addRegexToken('yo', matchEraYearOrdinal);
	
	    addParseToken(['y', 'yy', 'yyy', 'yyyy'], YEAR);
	    addParseToken(['yo'], function (input, array, config, token) {
	        var match;
	        if (config._locale._eraYearOrdinalRegex) {
	            match = input.match(config._locale._eraYearOrdinalRegex);
	        }
	
	        if (config._locale.eraYearOrdinalParse) {
	            array[YEAR] = config._locale.eraYearOrdinalParse(input, match);
	        } else {
	            array[YEAR] = parseInt(input, 10);
	        }
	    });
	
	    function localeEras(m, format) {
	        var i,
	            l,
	            date,
	            eras = this._eras || getLocale('en')._eras;
	        for (i = 0, l = eras.length; i < l; ++i) {
	            switch (typeof eras[i].since) {
	                case 'string':
	                    // truncate time
	                    date = hooks(eras[i].since).startOf('day');
	                    eras[i].since = date.valueOf();
	                    break;
	            }
	
	            switch (typeof eras[i].until) {
	                case 'undefined':
	                    eras[i].until = +Infinity;
	                    break;
	                case 'string':
	                    // truncate time
	                    date = hooks(eras[i].until).startOf('day').valueOf();
	                    eras[i].until = date.valueOf();
	                    break;
	            }
	        }
	        return eras;
	    }
	
	    function localeErasParse(eraName, format, strict) {
	        var i,
	            l,
	            eras = this.eras(),
	            name,
	            abbr,
	            narrow;
	        eraName = eraName.toUpperCase();
	
	        for (i = 0, l = eras.length; i < l; ++i) {
	            name = eras[i].name.toUpperCase();
	            abbr = eras[i].abbr.toUpperCase();
	            narrow = eras[i].narrow.toUpperCase();
	
	            if (strict) {
	                switch (format) {
	                    case 'N':
	                    case 'NN':
	                    case 'NNN':
	                        if (abbr === eraName) {
	                            return eras[i];
	                        }
	                        break;
	
	                    case 'NNNN':
	                        if (name === eraName) {
	                            return eras[i];
	                        }
	                        break;
	
	                    case 'NNNNN':
	                        if (narrow === eraName) {
	                            return eras[i];
	                        }
	                        break;
	                }
	            } else if ([name, abbr, narrow].indexOf(eraName) >= 0) {
	                return eras[i];
	            }
	        }
	    }
	
	    function localeErasConvertYear(era, year) {
	        var dir = era.since <= era.until ? +1 : -1;
	        if (year === undefined) {
	            return hooks(era.since).year();
	        } else {
	            return hooks(era.since).year() + (year - era.offset) * dir;
	        }
	    }
	
	    function getEraName() {
	        var i,
	            l,
	            val,
	            eras = this.localeData().eras();
	        for (i = 0, l = eras.length; i < l; ++i) {
	            // truncate time
	            val = this.startOf('day').valueOf();
	
	            if (eras[i].since <= val && val <= eras[i].until) {
	                return eras[i].name;
	            }
	            if (eras[i].until <= val && val <= eras[i].since) {
	                return eras[i].name;
	            }
	        }
	
	        return '';
	    }
	
	    function getEraNarrow() {
	        var i,
	            l,
	            val,
	            eras = this.localeData().eras();
	        for (i = 0, l = eras.length; i < l; ++i) {
	            // truncate time
	            val = this.startOf('day').valueOf();
	
	            if (eras[i].since <= val && val <= eras[i].until) {
	                return eras[i].narrow;
	            }
	            if (eras[i].until <= val && val <= eras[i].since) {
	                return eras[i].narrow;
	            }
	        }
	
	        return '';
	    }
	
	    function getEraAbbr() {
	        var i,
	            l,
	            val,
	            eras = this.localeData().eras();
	        for (i = 0, l = eras.length; i < l; ++i) {
	            // truncate time
	            val = this.startOf('day').valueOf();
	
	            if (eras[i].since <= val && val <= eras[i].until) {
	                return eras[i].abbr;
	            }
	            if (eras[i].until <= val && val <= eras[i].since) {
	                return eras[i].abbr;
	            }
	        }
	
	        return '';
	    }
	
	    function getEraYear() {
	        var i,
	            l,
	            dir,
	            val,
	            eras = this.localeData().eras();
	        for (i = 0, l = eras.length; i < l; ++i) {
	            dir = eras[i].since <= eras[i].until ? +1 : -1;
	
	            // truncate time
	            val = this.startOf('day').valueOf();
	
	            if (
	                (eras[i].since <= val && val <= eras[i].until) ||
	                (eras[i].until <= val && val <= eras[i].since)
	            ) {
	                return (
	                    (this.year() - hooks(eras[i].since).year()) * dir +
	                    eras[i].offset
	                );
	            }
	        }
	
	        return this.year();
	    }
	
	    function erasNameRegex(isStrict) {
	        if (!hasOwnProp(this, '_erasNameRegex')) {
	            computeErasParse.call(this);
	        }
	        return isStrict ? this._erasNameRegex : this._erasRegex;
	    }
	
	    function erasAbbrRegex(isStrict) {
	        if (!hasOwnProp(this, '_erasAbbrRegex')) {
	            computeErasParse.call(this);
	        }
	        return isStrict ? this._erasAbbrRegex : this._erasRegex;
	    }
	
	    function erasNarrowRegex(isStrict) {
	        if (!hasOwnProp(this, '_erasNarrowRegex')) {
	            computeErasParse.call(this);
	        }
	        return isStrict ? this._erasNarrowRegex : this._erasRegex;
	    }
	
	    function matchEraAbbr(isStrict, locale) {
	        return locale.erasAbbrRegex(isStrict);
	    }
	
	    function matchEraName(isStrict, locale) {
	        return locale.erasNameRegex(isStrict);
	    }
	
	    function matchEraNarrow(isStrict, locale) {
	        return locale.erasNarrowRegex(isStrict);
	    }
	
	    function matchEraYearOrdinal(isStrict, locale) {
	        return locale._eraYearOrdinalRegex || matchUnsigned;
	    }
	
	    function computeErasParse() {
	        var abbrPieces = [],
	            namePieces = [],
	            narrowPieces = [],
	            mixedPieces = [],
	            i,
	            l,
	            eras = this.eras();
	
	        for (i = 0, l = eras.length; i < l; ++i) {
	            namePieces.push(regexEscape(eras[i].name));
	            abbrPieces.push(regexEscape(eras[i].abbr));
	            narrowPieces.push(regexEscape(eras[i].narrow));
	
	            mixedPieces.push(regexEscape(eras[i].name));
	            mixedPieces.push(regexEscape(eras[i].abbr));
	            mixedPieces.push(regexEscape(eras[i].narrow));
	        }
	
	        this._erasRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
	        this._erasNameRegex = new RegExp('^(' + namePieces.join('|') + ')', 'i');
	        this._erasAbbrRegex = new RegExp('^(' + abbrPieces.join('|') + ')', 'i');
	        this._erasNarrowRegex = new RegExp(
	            '^(' + narrowPieces.join('|') + ')',
	            'i'
	        );
	    }
	
	    // FORMATTING
	
	    addFormatToken(0, ['gg', 2], 0, function () {
	        return this.weekYear() % 100;
	    });
	
	    addFormatToken(0, ['GG', 2], 0, function () {
	        return this.isoWeekYear() % 100;
	    });
	
	    function addWeekYearFormatToken(token, getter) {
	        addFormatToken(0, [token, token.length], 0, getter);
	    }
	
	    addWeekYearFormatToken('gggg', 'weekYear');
	    addWeekYearFormatToken('ggggg', 'weekYear');
	    addWeekYearFormatToken('GGGG', 'isoWeekYear');
	    addWeekYearFormatToken('GGGGG', 'isoWeekYear');
	
	    // ALIASES
	
	    addUnitAlias('weekYear', 'gg');
	    addUnitAlias('isoWeekYear', 'GG');
	
	    // PRIORITY
	
	    addUnitPriority('weekYear', 1);
	    addUnitPriority('isoWeekYear', 1);
	
	    // PARSING
	
	    addRegexToken('G', matchSigned);
	    addRegexToken('g', matchSigned);
	    addRegexToken('GG', match1to2, match2);
	    addRegexToken('gg', match1to2, match2);
	    addRegexToken('GGGG', match1to4, match4);
	    addRegexToken('gggg', match1to4, match4);
	    addRegexToken('GGGGG', match1to6, match6);
	    addRegexToken('ggggg', match1to6, match6);
	
	    addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (
	        input,
	        week,
	        config,
	        token
	    ) {
	        week[token.substr(0, 2)] = toInt(input);
	    });
	
	    addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
	        week[token] = hooks.parseTwoDigitYear(input);
	    });
	
	    // MOMENTS
	
	    function getSetWeekYear(input) {
	        return getSetWeekYearHelper.call(
	            this,
	            input,
	            this.week(),
	            this.weekday(),
	            this.localeData()._week.dow,
	            this.localeData()._week.doy
	        );
	    }
	
	    function getSetISOWeekYear(input) {
	        return getSetWeekYearHelper.call(
	            this,
	            input,
	            this.isoWeek(),
	            this.isoWeekday(),
	            1,
	            4
	        );
	    }
	
	    function getISOWeeksInYear() {
	        return weeksInYear(this.year(), 1, 4);
	    }
	
	    function getISOWeeksInISOWeekYear() {
	        return weeksInYear(this.isoWeekYear(), 1, 4);
	    }
	
	    function getWeeksInYear() {
	        var weekInfo = this.localeData()._week;
	        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
	    }
	
	    function getWeeksInWeekYear() {
	        var weekInfo = this.localeData()._week;
	        return weeksInYear(this.weekYear(), weekInfo.dow, weekInfo.doy);
	    }
	
	    function getSetWeekYearHelper(input, week, weekday, dow, doy) {
	        var weeksTarget;
	        if (input == null) {
	            return weekOfYear(this, dow, doy).year;
	        } else {
	            weeksTarget = weeksInYear(input, dow, doy);
	            if (week > weeksTarget) {
	                week = weeksTarget;
	            }
	            return setWeekAll.call(this, input, week, weekday, dow, doy);
	        }
	    }
	
	    function setWeekAll(weekYear, week, weekday, dow, doy) {
	        var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
	            date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);
	
	        this.year(date.getUTCFullYear());
	        this.month(date.getUTCMonth());
	        this.date(date.getUTCDate());
	        return this;
	    }
	
	    // FORMATTING
	
	    addFormatToken('Q', 0, 'Qo', 'quarter');
	
	    // ALIASES
	
	    addUnitAlias('quarter', 'Q');
	
	    // PRIORITY
	
	    addUnitPriority('quarter', 7);
	
	    // PARSING
	
	    addRegexToken('Q', match1);
	    addParseToken('Q', function (input, array) {
	        array[MONTH] = (toInt(input) - 1) * 3;
	    });
	
	    // MOMENTS
	
	    function getSetQuarter(input) {
	        return input == null
	            ? Math.ceil((this.month() + 1) / 3)
	            : this.month((input - 1) * 3 + (this.month() % 3));
	    }
	
	    // FORMATTING
	
	    addFormatToken('D', ['DD', 2], 'Do', 'date');
	
	    // ALIASES
	
	    addUnitAlias('date', 'D');
	
	    // PRIORITY
	    addUnitPriority('date', 9);
	
	    // PARSING
	
	    addRegexToken('D', match1to2);
	    addRegexToken('DD', match1to2, match2);
	    addRegexToken('Do', function (isStrict, locale) {
	        // TODO: Remove "ordinalParse" fallback in next major release.
	        return isStrict
	            ? locale._dayOfMonthOrdinalParse || locale._ordinalParse
	            : locale._dayOfMonthOrdinalParseLenient;
	    });
	
	    addParseToken(['D', 'DD'], DATE);
	    addParseToken('Do', function (input, array) {
	        array[DATE] = toInt(input.match(match1to2)[0]);
	    });
	
	    // MOMENTS
	
	    var getSetDayOfMonth = makeGetSet('Date', true);
	
	    // FORMATTING
	
	    addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');
	
	    // ALIASES
	
	    addUnitAlias('dayOfYear', 'DDD');
	
	    // PRIORITY
	    addUnitPriority('dayOfYear', 4);
	
	    // PARSING
	
	    addRegexToken('DDD', match1to3);
	    addRegexToken('DDDD', match3);
	    addParseToken(['DDD', 'DDDD'], function (input, array, config) {
	        config._dayOfYear = toInt(input);
	    });
	
	    // HELPERS
	
	    // MOMENTS
	
	    function getSetDayOfYear(input) {
	        var dayOfYear =
	            Math.round(
	                (this.clone().startOf('day') - this.clone().startOf('year')) / 864e5
	            ) + 1;
	        return input == null ? dayOfYear : this.add(input - dayOfYear, 'd');
	    }
	
	    // FORMATTING
	
	    addFormatToken('m', ['mm', 2], 0, 'minute');
	
	    // ALIASES
	
	    addUnitAlias('minute', 'm');
	
	    // PRIORITY
	
	    addUnitPriority('minute', 14);
	
	    // PARSING
	
	    addRegexToken('m', match1to2);
	    addRegexToken('mm', match1to2, match2);
	    addParseToken(['m', 'mm'], MINUTE);
	
	    // MOMENTS
	
	    var getSetMinute = makeGetSet('Minutes', false);
	
	    // FORMATTING
	
	    addFormatToken('s', ['ss', 2], 0, 'second');
	
	    // ALIASES
	
	    addUnitAlias('second', 's');
	
	    // PRIORITY
	
	    addUnitPriority('second', 15);
	
	    // PARSING
	
	    addRegexToken('s', match1to2);
	    addRegexToken('ss', match1to2, match2);
	    addParseToken(['s', 'ss'], SECOND);
	
	    // MOMENTS
	
	    var getSetSecond = makeGetSet('Seconds', false);
	
	    // FORMATTING
	
	    addFormatToken('S', 0, 0, function () {
	        return ~~(this.millisecond() / 100);
	    });
	
	    addFormatToken(0, ['SS', 2], 0, function () {
	        return ~~(this.millisecond() / 10);
	    });
	
	    addFormatToken(0, ['SSS', 3], 0, 'millisecond');
	    addFormatToken(0, ['SSSS', 4], 0, function () {
	        return this.millisecond() * 10;
	    });
	    addFormatToken(0, ['SSSSS', 5], 0, function () {
	        return this.millisecond() * 100;
	    });
	    addFormatToken(0, ['SSSSSS', 6], 0, function () {
	        return this.millisecond() * 1000;
	    });
	    addFormatToken(0, ['SSSSSSS', 7], 0, function () {
	        return this.millisecond() * 10000;
	    });
	    addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
	        return this.millisecond() * 100000;
	    });
	    addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
	        return this.millisecond() * 1000000;
	    });
	
	    // ALIASES
	
	    addUnitAlias('millisecond', 'ms');
	
	    // PRIORITY
	
	    addUnitPriority('millisecond', 16);
	
	    // PARSING
	
	    addRegexToken('S', match1to3, match1);
	    addRegexToken('SS', match1to3, match2);
	    addRegexToken('SSS', match1to3, match3);
	
	    var token, getSetMillisecond;
	    for (token = 'SSSS'; token.length <= 9; token += 'S') {
	        addRegexToken(token, matchUnsigned);
	    }
	
	    function parseMs(input, array) {
	        array[MILLISECOND] = toInt(('0.' + input) * 1000);
	    }
	
	    for (token = 'S'; token.length <= 9; token += 'S') {
	        addParseToken(token, parseMs);
	    }
	
	    getSetMillisecond = makeGetSet('Milliseconds', false);
	
	    // FORMATTING
	
	    addFormatToken('z', 0, 0, 'zoneAbbr');
	    addFormatToken('zz', 0, 0, 'zoneName');
	
	    // MOMENTS
	
	    function getZoneAbbr() {
	        return this._isUTC ? 'UTC' : '';
	    }
	
	    function getZoneName() {
	        return this._isUTC ? 'Coordinated Universal Time' : '';
	    }
	
	    var proto = Moment.prototype;
	
	    proto.add = add;
	    proto.calendar = calendar$1;
	    proto.clone = clone;
	    proto.diff = diff;
	    proto.endOf = endOf;
	    proto.format = format;
	    proto.from = from;
	    proto.fromNow = fromNow;
	    proto.to = to;
	    proto.toNow = toNow;
	    proto.get = stringGet;
	    proto.invalidAt = invalidAt;
	    proto.isAfter = isAfter;
	    proto.isBefore = isBefore;
	    proto.isBetween = isBetween;
	    proto.isSame = isSame;
	    proto.isSameOrAfter = isSameOrAfter;
	    proto.isSameOrBefore = isSameOrBefore;
	    proto.isValid = isValid$2;
	    proto.lang = lang;
	    proto.locale = locale;
	    proto.localeData = localeData;
	    proto.max = prototypeMax;
	    proto.min = prototypeMin;
	    proto.parsingFlags = parsingFlags;
	    proto.set = stringSet;
	    proto.startOf = startOf;
	    proto.subtract = subtract;
	    proto.toArray = toArray;
	    proto.toObject = toObject;
	    proto.toDate = toDate;
	    proto.toISOString = toISOString;
	    proto.inspect = inspect;
	    if (typeof Symbol !== 'undefined' && Symbol.for != null) {
	        proto[Symbol.for('nodejs.util.inspect.custom')] = function () {
	            return 'Moment<' + this.format() + '>';
	        };
	    }
	    proto.toJSON = toJSON;
	    proto.toString = toString;
	    proto.unix = unix;
	    proto.valueOf = valueOf;
	    proto.creationData = creationData;
	    proto.eraName = getEraName;
	    proto.eraNarrow = getEraNarrow;
	    proto.eraAbbr = getEraAbbr;
	    proto.eraYear = getEraYear;
	    proto.year = getSetYear;
	    proto.isLeapYear = getIsLeapYear;
	    proto.weekYear = getSetWeekYear;
	    proto.isoWeekYear = getSetISOWeekYear;
	    proto.quarter = proto.quarters = getSetQuarter;
	    proto.month = getSetMonth;
	    proto.daysInMonth = getDaysInMonth;
	    proto.week = proto.weeks = getSetWeek;
	    proto.isoWeek = proto.isoWeeks = getSetISOWeek;
	    proto.weeksInYear = getWeeksInYear;
	    proto.weeksInWeekYear = getWeeksInWeekYear;
	    proto.isoWeeksInYear = getISOWeeksInYear;
	    proto.isoWeeksInISOWeekYear = getISOWeeksInISOWeekYear;
	    proto.date = getSetDayOfMonth;
	    proto.day = proto.days = getSetDayOfWeek;
	    proto.weekday = getSetLocaleDayOfWeek;
	    proto.isoWeekday = getSetISODayOfWeek;
	    proto.dayOfYear = getSetDayOfYear;
	    proto.hour = proto.hours = getSetHour;
	    proto.minute = proto.minutes = getSetMinute;
	    proto.second = proto.seconds = getSetSecond;
	    proto.millisecond = proto.milliseconds = getSetMillisecond;
	    proto.utcOffset = getSetOffset;
	    proto.utc = setOffsetToUTC;
	    proto.local = setOffsetToLocal;
	    proto.parseZone = setOffsetToParsedOffset;
	    proto.hasAlignedHourOffset = hasAlignedHourOffset;
	    proto.isDST = isDaylightSavingTime;
	    proto.isLocal = isLocal;
	    proto.isUtcOffset = isUtcOffset;
	    proto.isUtc = isUtc;
	    proto.isUTC = isUtc;
	    proto.zoneAbbr = getZoneAbbr;
	    proto.zoneName = getZoneName;
	    proto.dates = deprecate(
	        'dates accessor is deprecated. Use date instead.',
	        getSetDayOfMonth
	    );
	    proto.months = deprecate(
	        'months accessor is deprecated. Use month instead',
	        getSetMonth
	    );
	    proto.years = deprecate(
	        'years accessor is deprecated. Use year instead',
	        getSetYear
	    );
	    proto.zone = deprecate(
	        'moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/',
	        getSetZone
	    );
	    proto.isDSTShifted = deprecate(
	        'isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information',
	        isDaylightSavingTimeShifted
	    );
	
	    function createUnix(input) {
	        return createLocal(input * 1000);
	    }
	
	    function createInZone() {
	        return createLocal.apply(null, arguments).parseZone();
	    }
	
	    function preParsePostFormat(string) {
	        return string;
	    }
	
	    var proto$1 = Locale.prototype;
	
	    proto$1.calendar = calendar;
	    proto$1.longDateFormat = longDateFormat;
	    proto$1.invalidDate = invalidDate;
	    proto$1.ordinal = ordinal;
	    proto$1.preparse = preParsePostFormat;
	    proto$1.postformat = preParsePostFormat;
	    proto$1.relativeTime = relativeTime;
	    proto$1.pastFuture = pastFuture;
	    proto$1.set = set;
	    proto$1.eras = localeEras;
	    proto$1.erasParse = localeErasParse;
	    proto$1.erasConvertYear = localeErasConvertYear;
	    proto$1.erasAbbrRegex = erasAbbrRegex;
	    proto$1.erasNameRegex = erasNameRegex;
	    proto$1.erasNarrowRegex = erasNarrowRegex;
	
	    proto$1.months = localeMonths;
	    proto$1.monthsShort = localeMonthsShort;
	    proto$1.monthsParse = localeMonthsParse;
	    proto$1.monthsRegex = monthsRegex;
	    proto$1.monthsShortRegex = monthsShortRegex;
	    proto$1.week = localeWeek;
	    proto$1.firstDayOfYear = localeFirstDayOfYear;
	    proto$1.firstDayOfWeek = localeFirstDayOfWeek;
	
	    proto$1.weekdays = localeWeekdays;
	    proto$1.weekdaysMin = localeWeekdaysMin;
	    proto$1.weekdaysShort = localeWeekdaysShort;
	    proto$1.weekdaysParse = localeWeekdaysParse;
	
	    proto$1.weekdaysRegex = weekdaysRegex;
	    proto$1.weekdaysShortRegex = weekdaysShortRegex;
	    proto$1.weekdaysMinRegex = weekdaysMinRegex;
	
	    proto$1.isPM = localeIsPM;
	    proto$1.meridiem = localeMeridiem;
	
	    function get$1(format, index, field, setter) {
	        var locale = getLocale(),
	            utc = createUTC().set(setter, index);
	        return locale[field](utc, format);
	    }
	
	    function listMonthsImpl(format, index, field) {
	        if (isNumber(format)) {
	            index = format;
	            format = undefined;
	        }
	
	        format = format || '';
	
	        if (index != null) {
	            return get$1(format, index, field, 'month');
	        }
	
	        var i,
	            out = [];
	        for (i = 0; i < 12; i++) {
	            out[i] = get$1(format, i, field, 'month');
	        }
	        return out;
	    }
	
	    // ()
	    // (5)
	    // (fmt, 5)
	    // (fmt)
	    // (true)
	    // (true, 5)
	    // (true, fmt, 5)
	    // (true, fmt)
	    function listWeekdaysImpl(localeSorted, format, index, field) {
	        if (typeof localeSorted === 'boolean') {
	            if (isNumber(format)) {
	                index = format;
	                format = undefined;
	            }
	
	            format = format || '';
	        } else {
	            format = localeSorted;
	            index = format;
	            localeSorted = false;
	
	            if (isNumber(format)) {
	                index = format;
	                format = undefined;
	            }
	
	            format = format || '';
	        }
	
	        var locale = getLocale(),
	            shift = localeSorted ? locale._week.dow : 0,
	            i,
	            out = [];
	
	        if (index != null) {
	            return get$1(format, (index + shift) % 7, field, 'day');
	        }
	
	        for (i = 0; i < 7; i++) {
	            out[i] = get$1(format, (i + shift) % 7, field, 'day');
	        }
	        return out;
	    }
	
	    function listMonths(format, index) {
	        return listMonthsImpl(format, index, 'months');
	    }
	
	    function listMonthsShort(format, index) {
	        return listMonthsImpl(format, index, 'monthsShort');
	    }
	
	    function listWeekdays(localeSorted, format, index) {
	        return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
	    }
	
	    function listWeekdaysShort(localeSorted, format, index) {
	        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
	    }
	
	    function listWeekdaysMin(localeSorted, format, index) {
	        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
	    }
	
	    getSetGlobalLocale('en', {
	        eras: [
	            {
	                since: '0001-01-01',
	                until: +Infinity,
	                offset: 1,
	                name: 'Anno Domini',
	                narrow: 'AD',
	                abbr: 'AD',
	            },
	            {
	                since: '0000-12-31',
	                until: -Infinity,
	                offset: 1,
	                name: 'Before Christ',
	                narrow: 'BC',
	                abbr: 'BC',
	            },
	        ],
	        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
	        ordinal: function (number) {
	            var b = number % 10,
	                output =
	                    toInt((number % 100) / 10) === 1
	                        ? 'th'
	                        : b === 1
	                        ? 'st'
	                        : b === 2
	                        ? 'nd'
	                        : b === 3
	                        ? 'rd'
	                        : 'th';
	            return number + output;
	        },
	    });
	
	    // Side effect imports
	
	    hooks.lang = deprecate(
	        'moment.lang is deprecated. Use moment.locale instead.',
	        getSetGlobalLocale
	    );
	    hooks.langData = deprecate(
	        'moment.langData is deprecated. Use moment.localeData instead.',
	        getLocale
	    );
	
	    var mathAbs = Math.abs;
	
	    function abs() {
	        var data = this._data;
	
	        this._milliseconds = mathAbs(this._milliseconds);
	        this._days = mathAbs(this._days);
	        this._months = mathAbs(this._months);
	
	        data.milliseconds = mathAbs(data.milliseconds);
	        data.seconds = mathAbs(data.seconds);
	        data.minutes = mathAbs(data.minutes);
	        data.hours = mathAbs(data.hours);
	        data.months = mathAbs(data.months);
	        data.years = mathAbs(data.years);
	
	        return this;
	    }
	
	    function addSubtract$1(duration, input, value, direction) {
	        var other = createDuration(input, value);
	
	        duration._milliseconds += direction * other._milliseconds;
	        duration._days += direction * other._days;
	        duration._months += direction * other._months;
	
	        return duration._bubble();
	    }
	
	    // supports only 2.0-style add(1, 's') or add(duration)
	    function add$1(input, value) {
	        return addSubtract$1(this, input, value, 1);
	    }
	
	    // supports only 2.0-style subtract(1, 's') or subtract(duration)
	    function subtract$1(input, value) {
	        return addSubtract$1(this, input, value, -1);
	    }
	
	    function absCeil(number) {
	        if (number < 0) {
	            return Math.floor(number);
	        } else {
	            return Math.ceil(number);
	        }
	    }
	
	    function bubble() {
	        var milliseconds = this._milliseconds,
	            days = this._days,
	            months = this._months,
	            data = this._data,
	            seconds,
	            minutes,
	            hours,
	            years,
	            monthsFromDays;
	
	        // if we have a mix of positive and negative values, bubble down first
	        // check: https://github.com/moment/moment/issues/2166
	        if (
	            !(
	                (milliseconds >= 0 && days >= 0 && months >= 0) ||
	                (milliseconds <= 0 && days <= 0 && months <= 0)
	            )
	        ) {
	            milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
	            days = 0;
	            months = 0;
	        }
	
	        // The following code bubbles up values, see the tests for
	        // examples of what that means.
	        data.milliseconds = milliseconds % 1000;
	
	        seconds = absFloor(milliseconds / 1000);
	        data.seconds = seconds % 60;
	
	        minutes = absFloor(seconds / 60);
	        data.minutes = minutes % 60;
	
	        hours = absFloor(minutes / 60);
	        data.hours = hours % 24;
	
	        days += absFloor(hours / 24);
	
	        // convert days to months
	        monthsFromDays = absFloor(daysToMonths(days));
	        months += monthsFromDays;
	        days -= absCeil(monthsToDays(monthsFromDays));
	
	        // 12 months -> 1 year
	        years = absFloor(months / 12);
	        months %= 12;
	
	        data.days = days;
	        data.months = months;
	        data.years = years;
	
	        return this;
	    }
	
	    function daysToMonths(days) {
	        // 400 years have 146097 days (taking into account leap year rules)
	        // 400 years have 12 months === 4800
	        return (days * 4800) / 146097;
	    }
	
	    function monthsToDays(months) {
	        // the reverse of daysToMonths
	        return (months * 146097) / 4800;
	    }
	
	    function as(units) {
	        if (!this.isValid()) {
	            return NaN;
	        }
	        var days,
	            months,
	            milliseconds = this._milliseconds;
	
	        units = normalizeUnits(units);
	
	        if (units === 'month' || units === 'quarter' || units === 'year') {
	            days = this._days + milliseconds / 864e5;
	            months = this._months + daysToMonths(days);
	            switch (units) {
	                case 'month':
	                    return months;
	                case 'quarter':
	                    return months / 3;
	                case 'year':
	                    return months / 12;
	            }
	        } else {
	            // handle milliseconds separately because of floating point math errors (issue #1867)
	            days = this._days + Math.round(monthsToDays(this._months));
	            switch (units) {
	                case 'week':
	                    return days / 7 + milliseconds / 6048e5;
	                case 'day':
	                    return days + milliseconds / 864e5;
	                case 'hour':
	                    return days * 24 + milliseconds / 36e5;
	                case 'minute':
	                    return days * 1440 + milliseconds / 6e4;
	                case 'second':
	                    return days * 86400 + milliseconds / 1000;
	                // Math.floor prevents floating point math errors here
	                case 'millisecond':
	                    return Math.floor(days * 864e5) + milliseconds;
	                default:
	                    throw new Error('Unknown unit ' + units);
	            }
	        }
	    }
	
	    // TODO: Use this.as('ms')?
	    function valueOf$1() {
	        if (!this.isValid()) {
	            return NaN;
	        }
	        return (
	            this._milliseconds +
	            this._days * 864e5 +
	            (this._months % 12) * 2592e6 +
	            toInt(this._months / 12) * 31536e6
	        );
	    }
	
	    function makeAs(alias) {
	        return function () {
	            return this.as(alias);
	        };
	    }
	
	    var asMilliseconds = makeAs('ms'),
	        asSeconds = makeAs('s'),
	        asMinutes = makeAs('m'),
	        asHours = makeAs('h'),
	        asDays = makeAs('d'),
	        asWeeks = makeAs('w'),
	        asMonths = makeAs('M'),
	        asQuarters = makeAs('Q'),
	        asYears = makeAs('y');
	
	    function clone$1() {
	        return createDuration(this);
	    }
	
	    function get$2(units) {
	        units = normalizeUnits(units);
	        return this.isValid() ? this[units + 's']() : NaN;
	    }
	
	    function makeGetter(name) {
	        return function () {
	            return this.isValid() ? this._data[name] : NaN;
	        };
	    }
	
	    var milliseconds = makeGetter('milliseconds'),
	        seconds = makeGetter('seconds'),
	        minutes = makeGetter('minutes'),
	        hours = makeGetter('hours'),
	        days = makeGetter('days'),
	        months = makeGetter('months'),
	        years = makeGetter('years');
	
	    function weeks() {
	        return absFloor(this.days() / 7);
	    }
	
	    var round = Math.round,
	        thresholds = {
	            ss: 44, // a few seconds to seconds
	            s: 45, // seconds to minute
	            m: 45, // minutes to hour
	            h: 22, // hours to day
	            d: 26, // days to month/week
	            w: null, // weeks to month
	            M: 11, // months to year
	        };
	
	    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
	    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
	        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
	    }
	
	    function relativeTime$1(posNegDuration, withoutSuffix, thresholds, locale) {
	        var duration = createDuration(posNegDuration).abs(),
	            seconds = round(duration.as('s')),
	            minutes = round(duration.as('m')),
	            hours = round(duration.as('h')),
	            days = round(duration.as('d')),
	            months = round(duration.as('M')),
	            weeks = round(duration.as('w')),
	            years = round(duration.as('y')),
	            a =
	                (seconds <= thresholds.ss && ['s', seconds]) ||
	                (seconds < thresholds.s && ['ss', seconds]) ||
	                (minutes <= 1 && ['m']) ||
	                (minutes < thresholds.m && ['mm', minutes]) ||
	                (hours <= 1 && ['h']) ||
	                (hours < thresholds.h && ['hh', hours]) ||
	                (days <= 1 && ['d']) ||
	                (days < thresholds.d && ['dd', days]);
	
	        if (thresholds.w != null) {
	            a =
	                a ||
	                (weeks <= 1 && ['w']) ||
	                (weeks < thresholds.w && ['ww', weeks]);
	        }
	        a = a ||
	            (months <= 1 && ['M']) ||
	            (months < thresholds.M && ['MM', months]) ||
	            (years <= 1 && ['y']) || ['yy', years];
	
	        a[2] = withoutSuffix;
	        a[3] = +posNegDuration > 0;
	        a[4] = locale;
	        return substituteTimeAgo.apply(null, a);
	    }
	
	    // This function allows you to set the rounding function for relative time strings
	    function getSetRelativeTimeRounding(roundingFunction) {
	        if (roundingFunction === undefined) {
	            return round;
	        }
	        if (typeof roundingFunction === 'function') {
	            round = roundingFunction;
	            return true;
	        }
	        return false;
	    }
	
	    // This function allows you to set a threshold for relative time strings
	    function getSetRelativeTimeThreshold(threshold, limit) {
	        if (thresholds[threshold] === undefined) {
	            return false;
	        }
	        if (limit === undefined) {
	            return thresholds[threshold];
	        }
	        thresholds[threshold] = limit;
	        if (threshold === 's') {
	            thresholds.ss = limit - 1;
	        }
	        return true;
	    }
	
	    function humanize(argWithSuffix, argThresholds) {
	        if (!this.isValid()) {
	            return this.localeData().invalidDate();
	        }
	
	        var withSuffix = false,
	            th = thresholds,
	            locale,
	            output;
	
	        if (typeof argWithSuffix === 'object') {
	            argThresholds = argWithSuffix;
	            argWithSuffix = false;
	        }
	        if (typeof argWithSuffix === 'boolean') {
	            withSuffix = argWithSuffix;
	        }
	        if (typeof argThresholds === 'object') {
	            th = Object.assign({}, thresholds, argThresholds);
	            if (argThresholds.s != null && argThresholds.ss == null) {
	                th.ss = argThresholds.s - 1;
	            }
	        }
	
	        locale = this.localeData();
	        output = relativeTime$1(this, !withSuffix, th, locale);
	
	        if (withSuffix) {
	            output = locale.pastFuture(+this, output);
	        }
	
	        return locale.postformat(output);
	    }
	
	    var abs$1 = Math.abs;
	
	    function sign(x) {
	        return (x > 0) - (x < 0) || +x;
	    }
	
	    function toISOString$1() {
	        // for ISO strings we do not use the normal bubbling rules:
	        //  * milliseconds bubble up until they become hours
	        //  * days do not bubble at all
	        //  * months bubble up until they become years
	        // This is because there is no context-free conversion between hours and days
	        // (think of clock changes)
	        // and also not between days and months (28-31 days per month)
	        if (!this.isValid()) {
	            return this.localeData().invalidDate();
	        }
	
	        var seconds = abs$1(this._milliseconds) / 1000,
	            days = abs$1(this._days),
	            months = abs$1(this._months),
	            minutes,
	            hours,
	            years,
	            s,
	            total = this.asSeconds(),
	            totalSign,
	            ymSign,
	            daysSign,
	            hmsSign;
	
	        if (!total) {
	            // this is the same as C#'s (Noda) and python (isodate)...
	            // but not other JS (goog.date)
	            return 'P0D';
	        }
	
	        // 3600 seconds -> 60 minutes -> 1 hour
	        minutes = absFloor(seconds / 60);
	        hours = absFloor(minutes / 60);
	        seconds %= 60;
	        minutes %= 60;
	
	        // 12 months -> 1 year
	        years = absFloor(months / 12);
	        months %= 12;
	
	        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
	        s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';
	
	        totalSign = total < 0 ? '-' : '';
	        ymSign = sign(this._months) !== sign(total) ? '-' : '';
	        daysSign = sign(this._days) !== sign(total) ? '-' : '';
	        hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';
	
	        return (
	            totalSign +
	            'P' +
	            (years ? ymSign + years + 'Y' : '') +
	            (months ? ymSign + months + 'M' : '') +
	            (days ? daysSign + days + 'D' : '') +
	            (hours || minutes || seconds ? 'T' : '') +
	            (hours ? hmsSign + hours + 'H' : '') +
	            (minutes ? hmsSign + minutes + 'M' : '') +
	            (seconds ? hmsSign + s + 'S' : '')
	        );
	    }
	
	    var proto$2 = Duration.prototype;
	
	    proto$2.isValid = isValid$1;
	    proto$2.abs = abs;
	    proto$2.add = add$1;
	    proto$2.subtract = subtract$1;
	    proto$2.as = as;
	    proto$2.asMilliseconds = asMilliseconds;
	    proto$2.asSeconds = asSeconds;
	    proto$2.asMinutes = asMinutes;
	    proto$2.asHours = asHours;
	    proto$2.asDays = asDays;
	    proto$2.asWeeks = asWeeks;
	    proto$2.asMonths = asMonths;
	    proto$2.asQuarters = asQuarters;
	    proto$2.asYears = asYears;
	    proto$2.valueOf = valueOf$1;
	    proto$2._bubble = bubble;
	    proto$2.clone = clone$1;
	    proto$2.get = get$2;
	    proto$2.milliseconds = milliseconds;
	    proto$2.seconds = seconds;
	    proto$2.minutes = minutes;
	    proto$2.hours = hours;
	    proto$2.days = days;
	    proto$2.weeks = weeks;
	    proto$2.months = months;
	    proto$2.years = years;
	    proto$2.humanize = humanize;
	    proto$2.toISOString = toISOString$1;
	    proto$2.toString = toISOString$1;
	    proto$2.toJSON = toISOString$1;
	    proto$2.locale = locale;
	    proto$2.localeData = localeData;
	
	    proto$2.toIsoString = deprecate(
	        'toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)',
	        toISOString$1
	    );
	    proto$2.lang = lang;
	
	    // FORMATTING
	
	    addFormatToken('X', 0, 0, 'unix');
	    addFormatToken('x', 0, 0, 'valueOf');
	
	    // PARSING
	
	    addRegexToken('x', matchSigned);
	    addRegexToken('X', matchTimestamp);
	    addParseToken('X', function (input, array, config) {
	        config._d = new Date(parseFloat(input) * 1000);
	    });
	    addParseToken('x', function (input, array, config) {
	        config._d = new Date(toInt(input));
	    });
	
	    //! moment.js
	
	    hooks.version = '2.27.0';
	
	    setHookCallback(createLocal);
	
	    hooks.fn = proto;
	    hooks.min = min;
	    hooks.max = max;
	    hooks.now = now;
	    hooks.utc = createUTC;
	    hooks.unix = createUnix;
	    hooks.months = listMonths;
	    hooks.isDate = isDate;
	    hooks.locale = getSetGlobalLocale;
	    hooks.invalid = createInvalid;
	    hooks.duration = createDuration;
	    hooks.isMoment = isMoment;
	    hooks.weekdays = listWeekdays;
	    hooks.parseZone = createInZone;
	    hooks.localeData = getLocale;
	    hooks.isDuration = isDuration;
	    hooks.monthsShort = listMonthsShort;
	    hooks.weekdaysMin = listWeekdaysMin;
	    hooks.defineLocale = defineLocale;
	    hooks.updateLocale = updateLocale;
	    hooks.locales = listLocales;
	    hooks.weekdaysShort = listWeekdaysShort;
	    hooks.normalizeUnits = normalizeUnits;
	    hooks.relativeTimeRounding = getSetRelativeTimeRounding;
	    hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
	    hooks.calendarFormat = getCalendarFormat;
	    hooks.prototype = proto;
	
	    // currently HTML5 input type only supports 24-hour formats
	    hooks.HTML5_FMT = {
	        DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm', // <input type="datetime-local" />
	        DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss', // <input type="datetime-local" step="1" />
	        DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS', // <input type="datetime-local" step="0.001" />
	        DATE: 'YYYY-MM-DD', // <input type="date" />
	        TIME: 'HH:mm', // <input type="time" />
	        TIME_SECONDS: 'HH:mm:ss', // <input type="time" step="1" />
	        TIME_MS: 'HH:mm:ss.SSS', // <input type="time" step="0.001" />
	        WEEK: 'GGGG-[W]WW', // <input type="week" />
	        MONTH: 'YYYY-MM', // <input type="month" />
	    };
	
	    return hooks;
	
	})));
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(85)(module)))

/***/ }),
/* 85 */,
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

	var map = {
		"./af": 87,
		"./af.js": 87,
		"./ar": 88,
		"./ar-dz": 89,
		"./ar-dz.js": 89,
		"./ar-kw": 90,
		"./ar-kw.js": 90,
		"./ar-ly": 91,
		"./ar-ly.js": 91,
		"./ar-ma": 92,
		"./ar-ma.js": 92,
		"./ar-sa": 93,
		"./ar-sa.js": 93,
		"./ar-tn": 94,
		"./ar-tn.js": 94,
		"./ar.js": 88,
		"./az": 95,
		"./az.js": 95,
		"./be": 96,
		"./be.js": 96,
		"./bg": 97,
		"./bg.js": 97,
		"./bm": 98,
		"./bm.js": 98,
		"./bn": 99,
		"./bn.js": 99,
		"./bo": 100,
		"./bo.js": 100,
		"./br": 101,
		"./br.js": 101,
		"./bs": 102,
		"./bs.js": 102,
		"./ca": 103,
		"./ca.js": 103,
		"./cs": 104,
		"./cs.js": 104,
		"./cv": 105,
		"./cv.js": 105,
		"./cy": 106,
		"./cy.js": 106,
		"./da": 107,
		"./da.js": 107,
		"./de": 108,
		"./de-at": 109,
		"./de-at.js": 109,
		"./de-ch": 110,
		"./de-ch.js": 110,
		"./de.js": 108,
		"./dv": 111,
		"./dv.js": 111,
		"./el": 112,
		"./el.js": 112,
		"./en-au": 113,
		"./en-au.js": 113,
		"./en-ca": 114,
		"./en-ca.js": 114,
		"./en-gb": 115,
		"./en-gb.js": 115,
		"./en-ie": 116,
		"./en-ie.js": 116,
		"./en-il": 117,
		"./en-il.js": 117,
		"./en-in": 118,
		"./en-in.js": 118,
		"./en-nz": 119,
		"./en-nz.js": 119,
		"./en-sg": 120,
		"./en-sg.js": 120,
		"./eo": 121,
		"./eo.js": 121,
		"./es": 122,
		"./es-do": 123,
		"./es-do.js": 123,
		"./es-us": 124,
		"./es-us.js": 124,
		"./es.js": 122,
		"./et": 125,
		"./et.js": 125,
		"./eu": 126,
		"./eu.js": 126,
		"./fa": 127,
		"./fa.js": 127,
		"./fi": 128,
		"./fi.js": 128,
		"./fil": 129,
		"./fil.js": 129,
		"./fo": 130,
		"./fo.js": 130,
		"./fr": 131,
		"./fr-ca": 132,
		"./fr-ca.js": 132,
		"./fr-ch": 133,
		"./fr-ch.js": 133,
		"./fr.js": 131,
		"./fy": 134,
		"./fy.js": 134,
		"./ga": 135,
		"./ga.js": 135,
		"./gd": 136,
		"./gd.js": 136,
		"./gl": 137,
		"./gl.js": 137,
		"./gom-deva": 138,
		"./gom-deva.js": 138,
		"./gom-latn": 139,
		"./gom-latn.js": 139,
		"./gu": 140,
		"./gu.js": 140,
		"./he": 141,
		"./he.js": 141,
		"./hi": 142,
		"./hi.js": 142,
		"./hr": 143,
		"./hr.js": 143,
		"./hu": 144,
		"./hu.js": 144,
		"./hy-am": 145,
		"./hy-am.js": 145,
		"./id": 146,
		"./id.js": 146,
		"./is": 147,
		"./is.js": 147,
		"./it": 148,
		"./it-ch": 149,
		"./it-ch.js": 149,
		"./it.js": 148,
		"./ja": 150,
		"./ja.js": 150,
		"./jv": 151,
		"./jv.js": 151,
		"./ka": 152,
		"./ka.js": 152,
		"./kk": 153,
		"./kk.js": 153,
		"./km": 154,
		"./km.js": 154,
		"./kn": 155,
		"./kn.js": 155,
		"./ko": 156,
		"./ko.js": 156,
		"./ku": 157,
		"./ku.js": 157,
		"./ky": 158,
		"./ky.js": 158,
		"./lb": 159,
		"./lb.js": 159,
		"./lo": 160,
		"./lo.js": 160,
		"./lt": 161,
		"./lt.js": 161,
		"./lv": 162,
		"./lv.js": 162,
		"./me": 163,
		"./me.js": 163,
		"./mi": 164,
		"./mi.js": 164,
		"./mk": 165,
		"./mk.js": 165,
		"./ml": 166,
		"./ml.js": 166,
		"./mn": 167,
		"./mn.js": 167,
		"./mr": 168,
		"./mr.js": 168,
		"./ms": 169,
		"./ms-my": 170,
		"./ms-my.js": 170,
		"./ms.js": 169,
		"./mt": 171,
		"./mt.js": 171,
		"./my": 172,
		"./my.js": 172,
		"./nb": 173,
		"./nb.js": 173,
		"./ne": 174,
		"./ne.js": 174,
		"./nl": 175,
		"./nl-be": 176,
		"./nl-be.js": 176,
		"./nl.js": 175,
		"./nn": 177,
		"./nn.js": 177,
		"./oc-lnc": 178,
		"./oc-lnc.js": 178,
		"./pa-in": 179,
		"./pa-in.js": 179,
		"./pl": 180,
		"./pl.js": 180,
		"./pt": 181,
		"./pt-br": 182,
		"./pt-br.js": 182,
		"./pt.js": 181,
		"./ro": 183,
		"./ro.js": 183,
		"./ru": 184,
		"./ru.js": 184,
		"./sd": 185,
		"./sd.js": 185,
		"./se": 186,
		"./se.js": 186,
		"./si": 187,
		"./si.js": 187,
		"./sk": 188,
		"./sk.js": 188,
		"./sl": 189,
		"./sl.js": 189,
		"./sq": 190,
		"./sq.js": 190,
		"./sr": 191,
		"./sr-cyrl": 192,
		"./sr-cyrl.js": 192,
		"./sr.js": 191,
		"./ss": 193,
		"./ss.js": 193,
		"./sv": 194,
		"./sv.js": 194,
		"./sw": 195,
		"./sw.js": 195,
		"./ta": 196,
		"./ta.js": 196,
		"./te": 197,
		"./te.js": 197,
		"./tet": 198,
		"./tet.js": 198,
		"./tg": 199,
		"./tg.js": 199,
		"./th": 200,
		"./th.js": 200,
		"./tk": 201,
		"./tk.js": 201,
		"./tl-ph": 202,
		"./tl-ph.js": 202,
		"./tlh": 203,
		"./tlh.js": 203,
		"./tr": 204,
		"./tr.js": 204,
		"./tzl": 205,
		"./tzl.js": 205,
		"./tzm": 206,
		"./tzm-latn": 207,
		"./tzm-latn.js": 207,
		"./tzm.js": 206,
		"./ug-cn": 208,
		"./ug-cn.js": 208,
		"./uk": 209,
		"./uk.js": 209,
		"./ur": 210,
		"./ur.js": 210,
		"./uz": 211,
		"./uz-latn": 212,
		"./uz-latn.js": 212,
		"./uz.js": 211,
		"./vi": 213,
		"./vi.js": 213,
		"./x-pseudo": 214,
		"./x-pseudo.js": 214,
		"./yo": 215,
		"./yo.js": 215,
		"./zh-cn": 216,
		"./zh-cn.js": 216,
		"./zh-hk": 217,
		"./zh-hk.js": 217,
		"./zh-mo": 218,
		"./zh-mo.js": 218,
		"./zh-tw": 219,
		"./zh-tw.js": 219
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 86;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Afrikaans [af]
	//! author : Werner Mollentze : https://github.com/wernerm
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var af = moment.defineLocale('af', {
	        months: 'Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember'.split(
	            '_'
	        ),
	        monthsShort: 'Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des'.split('_'),
	        weekdays: 'Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag'.split(
	            '_'
	        ),
	        weekdaysShort: 'Son_Maa_Din_Woe_Don_Vry_Sat'.split('_'),
	        weekdaysMin: 'So_Ma_Di_Wo_Do_Vr_Sa'.split('_'),
	        meridiemParse: /vm|nm/i,
	        isPM: function (input) {
	            return /^nm$/i.test(input);
	        },
	        meridiem: function (hours, minutes, isLower) {
	            if (hours < 12) {
	                return isLower ? 'vm' : 'VM';
	            } else {
	                return isLower ? 'nm' : 'NM';
	            }
	        },
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd, D MMMM YYYY HH:mm',
	        },
	        calendar: {
	            sameDay: '[Vandag om] LT',
	            nextDay: '[Môre om] LT',
	            nextWeek: 'dddd [om] LT',
	            lastDay: '[Gister om] LT',
	            lastWeek: '[Laas] dddd [om] LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: 'oor %s',
	            past: '%s gelede',
	            s: "'n paar sekondes",
	            ss: '%d sekondes',
	            m: "'n minuut",
	            mm: '%d minute',
	            h: "'n uur",
	            hh: '%d ure',
	            d: "'n dag",
	            dd: '%d dae',
	            M: "'n maand",
	            MM: '%d maande',
	            y: "'n jaar",
	            yy: '%d jaar',
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
	        ordinal: function (number) {
	            return (
	                number +
	                (number === 1 || number === 8 || number >= 20 ? 'ste' : 'de')
	            ); // Thanks to Joris Röling : https://github.com/jjupiter
	        },
	        week: {
	            dow: 1, // Maandag is die eerste dag van die week.
	            doy: 4, // Die week wat die 4de Januarie bevat is die eerste week van die jaar.
	        },
	    });
	
	    return af;
	
	})));


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Arabic [ar]
	//! author : Abdel Said: https://github.com/abdelsaid
	//! author : Ahmed Elkhatib
	//! author : forabi https://github.com/forabi
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var symbolMap = {
	            '1': '١',
	            '2': '٢',
	            '3': '٣',
	            '4': '٤',
	            '5': '٥',
	            '6': '٦',
	            '7': '٧',
	            '8': '٨',
	            '9': '٩',
	            '0': '٠',
	        },
	        numberMap = {
	            '١': '1',
	            '٢': '2',
	            '٣': '3',
	            '٤': '4',
	            '٥': '5',
	            '٦': '6',
	            '٧': '7',
	            '٨': '8',
	            '٩': '9',
	            '٠': '0',
	        },
	        pluralForm = function (n) {
	            return n === 0
	                ? 0
	                : n === 1
	                ? 1
	                : n === 2
	                ? 2
	                : n % 100 >= 3 && n % 100 <= 10
	                ? 3
	                : n % 100 >= 11
	                ? 4
	                : 5;
	        },
	        plurals = {
	            s: [
	                'أقل من ثانية',
	                'ثانية واحدة',
	                ['ثانيتان', 'ثانيتين'],
	                '%d ثوان',
	                '%d ثانية',
	                '%d ثانية',
	            ],
	            m: [
	                'أقل من دقيقة',
	                'دقيقة واحدة',
	                ['دقيقتان', 'دقيقتين'],
	                '%d دقائق',
	                '%d دقيقة',
	                '%d دقيقة',
	            ],
	            h: [
	                'أقل من ساعة',
	                'ساعة واحدة',
	                ['ساعتان', 'ساعتين'],
	                '%d ساعات',
	                '%d ساعة',
	                '%d ساعة',
	            ],
	            d: [
	                'أقل من يوم',
	                'يوم واحد',
	                ['يومان', 'يومين'],
	                '%d أيام',
	                '%d يومًا',
	                '%d يوم',
	            ],
	            M: [
	                'أقل من شهر',
	                'شهر واحد',
	                ['شهران', 'شهرين'],
	                '%d أشهر',
	                '%d شهرا',
	                '%d شهر',
	            ],
	            y: [
	                'أقل من عام',
	                'عام واحد',
	                ['عامان', 'عامين'],
	                '%d أعوام',
	                '%d عامًا',
	                '%d عام',
	            ],
	        },
	        pluralize = function (u) {
	            return function (number, withoutSuffix, string, isFuture) {
	                var f = pluralForm(number),
	                    str = plurals[u][pluralForm(number)];
	                if (f === 2) {
	                    str = str[withoutSuffix ? 0 : 1];
	                }
	                return str.replace(/%d/i, number);
	            };
	        },
	        months = [
	            'يناير',
	            'فبراير',
	            'مارس',
	            'أبريل',
	            'مايو',
	            'يونيو',
	            'يوليو',
	            'أغسطس',
	            'سبتمبر',
	            'أكتوبر',
	            'نوفمبر',
	            'ديسمبر',
	        ];
	
	    var ar = moment.defineLocale('ar', {
	        months: months,
	        monthsShort: months,
	        weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
	        weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
	        weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
	        weekdaysParseExact: true,
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'D/\u200FM/\u200FYYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd D MMMM YYYY HH:mm',
	        },
	        meridiemParse: /ص|م/,
	        isPM: function (input) {
	            return 'م' === input;
	        },
	        meridiem: function (hour, minute, isLower) {
	            if (hour < 12) {
	                return 'ص';
	            } else {
	                return 'م';
	            }
	        },
	        calendar: {
	            sameDay: '[اليوم عند الساعة] LT',
	            nextDay: '[غدًا عند الساعة] LT',
	            nextWeek: 'dddd [عند الساعة] LT',
	            lastDay: '[أمس عند الساعة] LT',
	            lastWeek: 'dddd [عند الساعة] LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: 'بعد %s',
	            past: 'منذ %s',
	            s: pluralize('s'),
	            ss: pluralize('s'),
	            m: pluralize('m'),
	            mm: pluralize('m'),
	            h: pluralize('h'),
	            hh: pluralize('h'),
	            d: pluralize('d'),
	            dd: pluralize('d'),
	            M: pluralize('M'),
	            MM: pluralize('M'),
	            y: pluralize('y'),
	            yy: pluralize('y'),
	        },
	        preparse: function (string) {
	            return string
	                .replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (match) {
	                    return numberMap[match];
	                })
	                .replace(/،/g, ',');
	        },
	        postformat: function (string) {
	            return string
	                .replace(/\d/g, function (match) {
	                    return symbolMap[match];
	                })
	                .replace(/,/g, '،');
	        },
	        week: {
	            dow: 6, // Saturday is the first day of the week.
	            doy: 12, // The week that contains Jan 12th is the first week of the year.
	        },
	    });
	
	    return ar;
	
	})));


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Arabic (Algeria) [ar-dz]
	//! author : Amine Roukh: https://github.com/Amine27
	//! author : Abdel Said: https://github.com/abdelsaid
	//! author : Ahmed Elkhatib
	//! author : forabi https://github.com/forabi
	//! author : Noureddine LOUAHEDJ : https://github.com/noureddinem
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var pluralForm = function (n) {
	            return n === 0
	                ? 0
	                : n === 1
	                ? 1
	                : n === 2
	                ? 2
	                : n % 100 >= 3 && n % 100 <= 10
	                ? 3
	                : n % 100 >= 11
	                ? 4
	                : 5;
	        },
	        plurals = {
	            s: [
	                'أقل من ثانية',
	                'ثانية واحدة',
	                ['ثانيتان', 'ثانيتين'],
	                '%d ثوان',
	                '%d ثانية',
	                '%d ثانية',
	            ],
	            m: [
	                'أقل من دقيقة',
	                'دقيقة واحدة',
	                ['دقيقتان', 'دقيقتين'],
	                '%d دقائق',
	                '%d دقيقة',
	                '%d دقيقة',
	            ],
	            h: [
	                'أقل من ساعة',
	                'ساعة واحدة',
	                ['ساعتان', 'ساعتين'],
	                '%d ساعات',
	                '%d ساعة',
	                '%d ساعة',
	            ],
	            d: [
	                'أقل من يوم',
	                'يوم واحد',
	                ['يومان', 'يومين'],
	                '%d أيام',
	                '%d يومًا',
	                '%d يوم',
	            ],
	            M: [
	                'أقل من شهر',
	                'شهر واحد',
	                ['شهران', 'شهرين'],
	                '%d أشهر',
	                '%d شهرا',
	                '%d شهر',
	            ],
	            y: [
	                'أقل من عام',
	                'عام واحد',
	                ['عامان', 'عامين'],
	                '%d أعوام',
	                '%d عامًا',
	                '%d عام',
	            ],
	        },
	        pluralize = function (u) {
	            return function (number, withoutSuffix, string, isFuture) {
	                var f = pluralForm(number),
	                    str = plurals[u][pluralForm(number)];
	                if (f === 2) {
	                    str = str[withoutSuffix ? 0 : 1];
	                }
	                return str.replace(/%d/i, number);
	            };
	        },
	        months = [
	            'جانفي',
	            'فيفري',
	            'مارس',
	            'أفريل',
	            'ماي',
	            'جوان',
	            'جويلية',
	            'أوت',
	            'سبتمبر',
	            'أكتوبر',
	            'نوفمبر',
	            'ديسمبر',
	        ];
	
	    var arDz = moment.defineLocale('ar-dz', {
	        months: months,
	        monthsShort: months,
	        weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
	        weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
	        weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
	        weekdaysParseExact: true,
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'D/\u200FM/\u200FYYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd D MMMM YYYY HH:mm',
	        },
	        meridiemParse: /ص|م/,
	        isPM: function (input) {
	            return 'م' === input;
	        },
	        meridiem: function (hour, minute, isLower) {
	            if (hour < 12) {
	                return 'ص';
	            } else {
	                return 'م';
	            }
	        },
	        calendar: {
	            sameDay: '[اليوم عند الساعة] LT',
	            nextDay: '[غدًا عند الساعة] LT',
	            nextWeek: 'dddd [عند الساعة] LT',
	            lastDay: '[أمس عند الساعة] LT',
	            lastWeek: 'dddd [عند الساعة] LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: 'بعد %s',
	            past: 'منذ %s',
	            s: pluralize('s'),
	            ss: pluralize('s'),
	            m: pluralize('m'),
	            mm: pluralize('m'),
	            h: pluralize('h'),
	            hh: pluralize('h'),
	            d: pluralize('d'),
	            dd: pluralize('d'),
	            M: pluralize('M'),
	            MM: pluralize('M'),
	            y: pluralize('y'),
	            yy: pluralize('y'),
	        },
	        postformat: function (string) {
	            return string.replace(/,/g, '،');
	        },
	        week: {
	            dow: 0, // Sunday is the first day of the week.
	            doy: 4, // The week that contains Jan 4th is the first week of the year.
	        },
	    });
	
	    return arDz;
	
	})));


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Arabic (Kuwait) [ar-kw]
	//! author : Nusret Parlak: https://github.com/nusretparlak
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var arKw = moment.defineLocale('ar-kw', {
	        months: 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split(
	            '_'
	        ),
	        monthsShort: 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split(
	            '_'
	        ),
	        weekdays: 'الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
	        weekdaysShort: 'احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت'.split('_'),
	        weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
	        weekdaysParseExact: true,
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd D MMMM YYYY HH:mm',
	        },
	        calendar: {
	            sameDay: '[اليوم على الساعة] LT',
	            nextDay: '[غدا على الساعة] LT',
	            nextWeek: 'dddd [على الساعة] LT',
	            lastDay: '[أمس على الساعة] LT',
	            lastWeek: 'dddd [على الساعة] LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: 'في %s',
	            past: 'منذ %s',
	            s: 'ثوان',
	            ss: '%d ثانية',
	            m: 'دقيقة',
	            mm: '%d دقائق',
	            h: 'ساعة',
	            hh: '%d ساعات',
	            d: 'يوم',
	            dd: '%d أيام',
	            M: 'شهر',
	            MM: '%d أشهر',
	            y: 'سنة',
	            yy: '%d سنوات',
	        },
	        week: {
	            dow: 0, // Sunday is the first day of the week.
	            doy: 12, // The week that contains Jan 12th is the first week of the year.
	        },
	    });
	
	    return arKw;
	
	})));


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Arabic (Lybia) [ar-ly]
	//! author : Ali Hmer: https://github.com/kikoanis
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var symbolMap = {
	            '1': '1',
	            '2': '2',
	            '3': '3',
	            '4': '4',
	            '5': '5',
	            '6': '6',
	            '7': '7',
	            '8': '8',
	            '9': '9',
	            '0': '0',
	        },
	        pluralForm = function (n) {
	            return n === 0
	                ? 0
	                : n === 1
	                ? 1
	                : n === 2
	                ? 2
	                : n % 100 >= 3 && n % 100 <= 10
	                ? 3
	                : n % 100 >= 11
	                ? 4
	                : 5;
	        },
	        plurals = {
	            s: [
	                'أقل من ثانية',
	                'ثانية واحدة',
	                ['ثانيتان', 'ثانيتين'],
	                '%d ثوان',
	                '%d ثانية',
	                '%d ثانية',
	            ],
	            m: [
	                'أقل من دقيقة',
	                'دقيقة واحدة',
	                ['دقيقتان', 'دقيقتين'],
	                '%d دقائق',
	                '%d دقيقة',
	                '%d دقيقة',
	            ],
	            h: [
	                'أقل من ساعة',
	                'ساعة واحدة',
	                ['ساعتان', 'ساعتين'],
	                '%d ساعات',
	                '%d ساعة',
	                '%d ساعة',
	            ],
	            d: [
	                'أقل من يوم',
	                'يوم واحد',
	                ['يومان', 'يومين'],
	                '%d أيام',
	                '%d يومًا',
	                '%d يوم',
	            ],
	            M: [
	                'أقل من شهر',
	                'شهر واحد',
	                ['شهران', 'شهرين'],
	                '%d أشهر',
	                '%d شهرا',
	                '%d شهر',
	            ],
	            y: [
	                'أقل من عام',
	                'عام واحد',
	                ['عامان', 'عامين'],
	                '%d أعوام',
	                '%d عامًا',
	                '%d عام',
	            ],
	        },
	        pluralize = function (u) {
	            return function (number, withoutSuffix, string, isFuture) {
	                var f = pluralForm(number),
	                    str = plurals[u][pluralForm(number)];
	                if (f === 2) {
	                    str = str[withoutSuffix ? 0 : 1];
	                }
	                return str.replace(/%d/i, number);
	            };
	        },
	        months = [
	            'يناير',
	            'فبراير',
	            'مارس',
	            'أبريل',
	            'مايو',
	            'يونيو',
	            'يوليو',
	            'أغسطس',
	            'سبتمبر',
	            'أكتوبر',
	            'نوفمبر',
	            'ديسمبر',
	        ];
	
	    var arLy = moment.defineLocale('ar-ly', {
	        months: months,
	        monthsShort: months,
	        weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
	        weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
	        weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
	        weekdaysParseExact: true,
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'D/\u200FM/\u200FYYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd D MMMM YYYY HH:mm',
	        },
	        meridiemParse: /ص|م/,
	        isPM: function (input) {
	            return 'م' === input;
	        },
	        meridiem: function (hour, minute, isLower) {
	            if (hour < 12) {
	                return 'ص';
	            } else {
	                return 'م';
	            }
	        },
	        calendar: {
	            sameDay: '[اليوم عند الساعة] LT',
	            nextDay: '[غدًا عند الساعة] LT',
	            nextWeek: 'dddd [عند الساعة] LT',
	            lastDay: '[أمس عند الساعة] LT',
	            lastWeek: 'dddd [عند الساعة] LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: 'بعد %s',
	            past: 'منذ %s',
	            s: pluralize('s'),
	            ss: pluralize('s'),
	            m: pluralize('m'),
	            mm: pluralize('m'),
	            h: pluralize('h'),
	            hh: pluralize('h'),
	            d: pluralize('d'),
	            dd: pluralize('d'),
	            M: pluralize('M'),
	            MM: pluralize('M'),
	            y: pluralize('y'),
	            yy: pluralize('y'),
	        },
	        preparse: function (string) {
	            return string.replace(/،/g, ',');
	        },
	        postformat: function (string) {
	            return string
	                .replace(/\d/g, function (match) {
	                    return symbolMap[match];
	                })
	                .replace(/,/g, '،');
	        },
	        week: {
	            dow: 6, // Saturday is the first day of the week.
	            doy: 12, // The week that contains Jan 12th is the first week of the year.
	        },
	    });
	
	    return arLy;
	
	})));


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Arabic (Morocco) [ar-ma]
	//! author : ElFadili Yassine : https://github.com/ElFadiliY
	//! author : Abdel Said : https://github.com/abdelsaid
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var arMa = moment.defineLocale('ar-ma', {
	        months: 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split(
	            '_'
	        ),
	        monthsShort: 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split(
	            '_'
	        ),
	        weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
	        weekdaysShort: 'احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت'.split('_'),
	        weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
	        weekdaysParseExact: true,
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd D MMMM YYYY HH:mm',
	        },
	        calendar: {
	            sameDay: '[اليوم على الساعة] LT',
	            nextDay: '[غدا على الساعة] LT',
	            nextWeek: 'dddd [على الساعة] LT',
	            lastDay: '[أمس على الساعة] LT',
	            lastWeek: 'dddd [على الساعة] LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: 'في %s',
	            past: 'منذ %s',
	            s: 'ثوان',
	            ss: '%d ثانية',
	            m: 'دقيقة',
	            mm: '%d دقائق',
	            h: 'ساعة',
	            hh: '%d ساعات',
	            d: 'يوم',
	            dd: '%d أيام',
	            M: 'شهر',
	            MM: '%d أشهر',
	            y: 'سنة',
	            yy: '%d سنوات',
	        },
	        week: {
	            dow: 6, // Saturday is the first day of the week.
	            doy: 12, // The week that contains Jan 12th is the first week of the year.
	        },
	    });
	
	    return arMa;
	
	})));


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Arabic (Saudi Arabia) [ar-sa]
	//! author : Suhail Alkowaileet : https://github.com/xsoh
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var symbolMap = {
	            '1': '١',
	            '2': '٢',
	            '3': '٣',
	            '4': '٤',
	            '5': '٥',
	            '6': '٦',
	            '7': '٧',
	            '8': '٨',
	            '9': '٩',
	            '0': '٠',
	        },
	        numberMap = {
	            '١': '1',
	            '٢': '2',
	            '٣': '3',
	            '٤': '4',
	            '٥': '5',
	            '٦': '6',
	            '٧': '7',
	            '٨': '8',
	            '٩': '9',
	            '٠': '0',
	        };
	
	    var arSa = moment.defineLocale('ar-sa', {
	        months: 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split(
	            '_'
	        ),
	        monthsShort: 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split(
	            '_'
	        ),
	        weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
	        weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
	        weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
	        weekdaysParseExact: true,
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd D MMMM YYYY HH:mm',
	        },
	        meridiemParse: /ص|م/,
	        isPM: function (input) {
	            return 'م' === input;
	        },
	        meridiem: function (hour, minute, isLower) {
	            if (hour < 12) {
	                return 'ص';
	            } else {
	                return 'م';
	            }
	        },
	        calendar: {
	            sameDay: '[اليوم على الساعة] LT',
	            nextDay: '[غدا على الساعة] LT',
	            nextWeek: 'dddd [على الساعة] LT',
	            lastDay: '[أمس على الساعة] LT',
	            lastWeek: 'dddd [على الساعة] LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: 'في %s',
	            past: 'منذ %s',
	            s: 'ثوان',
	            ss: '%d ثانية',
	            m: 'دقيقة',
	            mm: '%d دقائق',
	            h: 'ساعة',
	            hh: '%d ساعات',
	            d: 'يوم',
	            dd: '%d أيام',
	            M: 'شهر',
	            MM: '%d أشهر',
	            y: 'سنة',
	            yy: '%d سنوات',
	        },
	        preparse: function (string) {
	            return string
	                .replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (match) {
	                    return numberMap[match];
	                })
	                .replace(/،/g, ',');
	        },
	        postformat: function (string) {
	            return string
	                .replace(/\d/g, function (match) {
	                    return symbolMap[match];
	                })
	                .replace(/,/g, '،');
	        },
	        week: {
	            dow: 0, // Sunday is the first day of the week.
	            doy: 6, // The week that contains Jan 6th is the first week of the year.
	        },
	    });
	
	    return arSa;
	
	})));


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale  :  Arabic (Tunisia) [ar-tn]
	//! author : Nader Toukabri : https://github.com/naderio
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var arTn = moment.defineLocale('ar-tn', {
	        months: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split(
	            '_'
	        ),
	        monthsShort: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split(
	            '_'
	        ),
	        weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
	        weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
	        weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
	        weekdaysParseExact: true,
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd D MMMM YYYY HH:mm',
	        },
	        calendar: {
	            sameDay: '[اليوم على الساعة] LT',
	            nextDay: '[غدا على الساعة] LT',
	            nextWeek: 'dddd [على الساعة] LT',
	            lastDay: '[أمس على الساعة] LT',
	            lastWeek: 'dddd [على الساعة] LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: 'في %s',
	            past: 'منذ %s',
	            s: 'ثوان',
	            ss: '%d ثانية',
	            m: 'دقيقة',
	            mm: '%d دقائق',
	            h: 'ساعة',
	            hh: '%d ساعات',
	            d: 'يوم',
	            dd: '%d أيام',
	            M: 'شهر',
	            MM: '%d أشهر',
	            y: 'سنة',
	            yy: '%d سنوات',
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4, // The week that contains Jan 4th is the first week of the year.
	        },
	    });
	
	    return arTn;
	
	})));


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Azerbaijani [az]
	//! author : topchiyev : https://github.com/topchiyev
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var suffixes = {
	        1: '-inci',
	        5: '-inci',
	        8: '-inci',
	        70: '-inci',
	        80: '-inci',
	        2: '-nci',
	        7: '-nci',
	        20: '-nci',
	        50: '-nci',
	        3: '-üncü',
	        4: '-üncü',
	        100: '-üncü',
	        6: '-ncı',
	        9: '-uncu',
	        10: '-uncu',
	        30: '-uncu',
	        60: '-ıncı',
	        90: '-ıncı',
	    };
	
	    var az = moment.defineLocale('az', {
	        months: 'yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr'.split(
	            '_'
	        ),
	        monthsShort: 'yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek'.split('_'),
	        weekdays: 'Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə'.split(
	            '_'
	        ),
	        weekdaysShort: 'Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən'.split('_'),
	        weekdaysMin: 'Bz_BE_ÇA_Çə_CA_Cü_Şə'.split('_'),
	        weekdaysParseExact: true,
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD.MM.YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd, D MMMM YYYY HH:mm',
	        },
	        calendar: {
	            sameDay: '[bugün saat] LT',
	            nextDay: '[sabah saat] LT',
	            nextWeek: '[gələn həftə] dddd [saat] LT',
	            lastDay: '[dünən] LT',
	            lastWeek: '[keçən həftə] dddd [saat] LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: '%s sonra',
	            past: '%s əvvəl',
	            s: 'birneçə saniyə',
	            ss: '%d saniyə',
	            m: 'bir dəqiqə',
	            mm: '%d dəqiqə',
	            h: 'bir saat',
	            hh: '%d saat',
	            d: 'bir gün',
	            dd: '%d gün',
	            M: 'bir ay',
	            MM: '%d ay',
	            y: 'bir il',
	            yy: '%d il',
	        },
	        meridiemParse: /gecə|səhər|gündüz|axşam/,
	        isPM: function (input) {
	            return /^(gündüz|axşam)$/.test(input);
	        },
	        meridiem: function (hour, minute, isLower) {
	            if (hour < 4) {
	                return 'gecə';
	            } else if (hour < 12) {
	                return 'səhər';
	            } else if (hour < 17) {
	                return 'gündüz';
	            } else {
	                return 'axşam';
	            }
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
	        ordinal: function (number) {
	            if (number === 0) {
	                // special case for zero
	                return number + '-ıncı';
	            }
	            var a = number % 10,
	                b = (number % 100) - a,
	                c = number >= 100 ? 100 : null;
	            return number + (suffixes[a] || suffixes[b] || suffixes[c]);
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 7, // The week that contains Jan 7th is the first week of the year.
	        },
	    });
	
	    return az;
	
	})));


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Belarusian [be]
	//! author : Dmitry Demidov : https://github.com/demidov91
	//! author: Praleska: http://praleska.pro/
	//! Author : Menelion Elensúle : https://github.com/Oire
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    function plural(word, num) {
	        var forms = word.split('_');
	        return num % 10 === 1 && num % 100 !== 11
	            ? forms[0]
	            : num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20)
	            ? forms[1]
	            : forms[2];
	    }
	    function relativeTimeWithPlural(number, withoutSuffix, key) {
	        var format = {
	            ss: withoutSuffix ? 'секунда_секунды_секунд' : 'секунду_секунды_секунд',
	            mm: withoutSuffix ? 'хвіліна_хвіліны_хвілін' : 'хвіліну_хвіліны_хвілін',
	            hh: withoutSuffix ? 'гадзіна_гадзіны_гадзін' : 'гадзіну_гадзіны_гадзін',
	            dd: 'дзень_дні_дзён',
	            MM: 'месяц_месяцы_месяцаў',
	            yy: 'год_гады_гадоў',
	        };
	        if (key === 'm') {
	            return withoutSuffix ? 'хвіліна' : 'хвіліну';
	        } else if (key === 'h') {
	            return withoutSuffix ? 'гадзіна' : 'гадзіну';
	        } else {
	            return number + ' ' + plural(format[key], +number);
	        }
	    }
	
	    var be = moment.defineLocale('be', {
	        months: {
	            format: 'студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня'.split(
	                '_'
	            ),
	            standalone: 'студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань'.split(
	                '_'
	            ),
	        },
	        monthsShort: 'студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж'.split(
	            '_'
	        ),
	        weekdays: {
	            format: 'нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу'.split(
	                '_'
	            ),
	            standalone: 'нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота'.split(
	                '_'
	            ),
	            isFormat: /\[ ?[Ууў] ?(?:мінулую|наступную)? ?\] ?dddd/,
	        },
	        weekdaysShort: 'нд_пн_ат_ср_чц_пт_сб'.split('_'),
	        weekdaysMin: 'нд_пн_ат_ср_чц_пт_сб'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD.MM.YYYY',
	            LL: 'D MMMM YYYY г.',
	            LLL: 'D MMMM YYYY г., HH:mm',
	            LLLL: 'dddd, D MMMM YYYY г., HH:mm',
	        },
	        calendar: {
	            sameDay: '[Сёння ў] LT',
	            nextDay: '[Заўтра ў] LT',
	            lastDay: '[Учора ў] LT',
	            nextWeek: function () {
	                return '[У] dddd [ў] LT';
	            },
	            lastWeek: function () {
	                switch (this.day()) {
	                    case 0:
	                    case 3:
	                    case 5:
	                    case 6:
	                        return '[У мінулую] dddd [ў] LT';
	                    case 1:
	                    case 2:
	                    case 4:
	                        return '[У мінулы] dddd [ў] LT';
	                }
	            },
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: 'праз %s',
	            past: '%s таму',
	            s: 'некалькі секунд',
	            m: relativeTimeWithPlural,
	            mm: relativeTimeWithPlural,
	            h: relativeTimeWithPlural,
	            hh: relativeTimeWithPlural,
	            d: 'дзень',
	            dd: relativeTimeWithPlural,
	            M: 'месяц',
	            MM: relativeTimeWithPlural,
	            y: 'год',
	            yy: relativeTimeWithPlural,
	        },
	        meridiemParse: /ночы|раніцы|дня|вечара/,
	        isPM: function (input) {
	            return /^(дня|вечара)$/.test(input);
	        },
	        meridiem: function (hour, minute, isLower) {
	            if (hour < 4) {
	                return 'ночы';
	            } else if (hour < 12) {
	                return 'раніцы';
	            } else if (hour < 17) {
	                return 'дня';
	            } else {
	                return 'вечара';
	            }
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}-(і|ы|га)/,
	        ordinal: function (number, period) {
	            switch (period) {
	                case 'M':
	                case 'd':
	                case 'DDD':
	                case 'w':
	                case 'W':
	                    return (number % 10 === 2 || number % 10 === 3) &&
	                        number % 100 !== 12 &&
	                        number % 100 !== 13
	                        ? number + '-і'
	                        : number + '-ы';
	                case 'D':
	                    return number + '-га';
	                default:
	                    return number;
	            }
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 7, // The week that contains Jan 7th is the first week of the year.
	        },
	    });
	
	    return be;
	
	})));


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Bulgarian [bg]
	//! author : Krasen Borisov : https://github.com/kraz
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var bg = moment.defineLocale('bg', {
	        months: 'януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември'.split(
	            '_'
	        ),
	        monthsShort: 'яну_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек'.split('_'),
	        weekdays: 'неделя_понеделник_вторник_сряда_четвъртък_петък_събота'.split(
	            '_'
	        ),
	        weekdaysShort: 'нед_пон_вто_сря_чет_пет_съб'.split('_'),
	        weekdaysMin: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
	        longDateFormat: {
	            LT: 'H:mm',
	            LTS: 'H:mm:ss',
	            L: 'D.MM.YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY H:mm',
	            LLLL: 'dddd, D MMMM YYYY H:mm',
	        },
	        calendar: {
	            sameDay: '[Днес в] LT',
	            nextDay: '[Утре в] LT',
	            nextWeek: 'dddd [в] LT',
	            lastDay: '[Вчера в] LT',
	            lastWeek: function () {
	                switch (this.day()) {
	                    case 0:
	                    case 3:
	                    case 6:
	                        return '[Миналата] dddd [в] LT';
	                    case 1:
	                    case 2:
	                    case 4:
	                    case 5:
	                        return '[Миналия] dddd [в] LT';
	                }
	            },
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: 'след %s',
	            past: 'преди %s',
	            s: 'няколко секунди',
	            ss: '%d секунди',
	            m: 'минута',
	            mm: '%d минути',
	            h: 'час',
	            hh: '%d часа',
	            d: 'ден',
	            dd: '%d дена',
	            M: 'месец',
	            MM: '%d месеца',
	            y: 'година',
	            yy: '%d години',
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
	        ordinal: function (number) {
	            var lastDigit = number % 10,
	                last2Digits = number % 100;
	            if (number === 0) {
	                return number + '-ев';
	            } else if (last2Digits === 0) {
	                return number + '-ен';
	            } else if (last2Digits > 10 && last2Digits < 20) {
	                return number + '-ти';
	            } else if (lastDigit === 1) {
	                return number + '-ви';
	            } else if (lastDigit === 2) {
	                return number + '-ри';
	            } else if (lastDigit === 7 || lastDigit === 8) {
	                return number + '-ми';
	            } else {
	                return number + '-ти';
	            }
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 7, // The week that contains Jan 7th is the first week of the year.
	        },
	    });
	
	    return bg;
	
	})));


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Bambara [bm]
	//! author : Estelle Comment : https://github.com/estellecomment
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var bm = moment.defineLocale('bm', {
	        months: 'Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_Mɛkalo_Zuwɛnkalo_Zuluyekalo_Utikalo_Sɛtanburukalo_ɔkutɔburukalo_Nowanburukalo_Desanburukalo'.split(
	            '_'
	        ),
	        monthsShort: 'Zan_Few_Mar_Awi_Mɛ_Zuw_Zul_Uti_Sɛt_ɔku_Now_Des'.split('_'),
	        weekdays: 'Kari_Ntɛnɛn_Tarata_Araba_Alamisa_Juma_Sibiri'.split('_'),
	        weekdaysShort: 'Kar_Ntɛ_Tar_Ara_Ala_Jum_Sib'.split('_'),
	        weekdaysMin: 'Ka_Nt_Ta_Ar_Al_Ju_Si'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'MMMM [tile] D [san] YYYY',
	            LLL: 'MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm',
	            LLLL: 'dddd MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm',
	        },
	        calendar: {
	            sameDay: '[Bi lɛrɛ] LT',
	            nextDay: '[Sini lɛrɛ] LT',
	            nextWeek: 'dddd [don lɛrɛ] LT',
	            lastDay: '[Kunu lɛrɛ] LT',
	            lastWeek: 'dddd [tɛmɛnen lɛrɛ] LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: '%s kɔnɔ',
	            past: 'a bɛ %s bɔ',
	            s: 'sanga dama dama',
	            ss: 'sekondi %d',
	            m: 'miniti kelen',
	            mm: 'miniti %d',
	            h: 'lɛrɛ kelen',
	            hh: 'lɛrɛ %d',
	            d: 'tile kelen',
	            dd: 'tile %d',
	            M: 'kalo kelen',
	            MM: 'kalo %d',
	            y: 'san kelen',
	            yy: 'san %d',
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4, // The week that contains Jan 4th is the first week of the year.
	        },
	    });
	
	    return bm;
	
	})));


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Bengali [bn]
	//! author : Kaushik Gandhi : https://github.com/kaushikgandhi
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var symbolMap = {
	            '1': '১',
	            '2': '২',
	            '3': '৩',
	            '4': '৪',
	            '5': '৫',
	            '6': '৬',
	            '7': '৭',
	            '8': '৮',
	            '9': '৯',
	            '0': '০',
	        },
	        numberMap = {
	            '১': '1',
	            '২': '2',
	            '৩': '3',
	            '৪': '4',
	            '৫': '5',
	            '৬': '6',
	            '৭': '7',
	            '৮': '8',
	            '৯': '9',
	            '০': '0',
	        };
	
	    var bn = moment.defineLocale('bn', {
	        months: 'জানুয়ারি_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর'.split(
	            '_'
	        ),
	        monthsShort: 'জানু_ফেব্রু_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্ট_অক্টো_নভে_ডিসে'.split(
	            '_'
	        ),
	        weekdays: 'রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার'.split(
	            '_'
	        ),
	        weekdaysShort: 'রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি'.split('_'),
	        weekdaysMin: 'রবি_সোম_মঙ্গল_বুধ_বৃহ_শুক্র_শনি'.split('_'),
	        longDateFormat: {
	            LT: 'A h:mm সময়',
	            LTS: 'A h:mm:ss সময়',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY, A h:mm সময়',
	            LLLL: 'dddd, D MMMM YYYY, A h:mm সময়',
	        },
	        calendar: {
	            sameDay: '[আজ] LT',
	            nextDay: '[আগামীকাল] LT',
	            nextWeek: 'dddd, LT',
	            lastDay: '[গতকাল] LT',
	            lastWeek: '[গত] dddd, LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: '%s পরে',
	            past: '%s আগে',
	            s: 'কয়েক সেকেন্ড',
	            ss: '%d সেকেন্ড',
	            m: 'এক মিনিট',
	            mm: '%d মিনিট',
	            h: 'এক ঘন্টা',
	            hh: '%d ঘন্টা',
	            d: 'এক দিন',
	            dd: '%d দিন',
	            M: 'এক মাস',
	            MM: '%d মাস',
	            y: 'এক বছর',
	            yy: '%d বছর',
	        },
	        preparse: function (string) {
	            return string.replace(/[১২৩৪৫৬৭৮৯০]/g, function (match) {
	                return numberMap[match];
	            });
	        },
	        postformat: function (string) {
	            return string.replace(/\d/g, function (match) {
	                return symbolMap[match];
	            });
	        },
	        meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/,
	        meridiemHour: function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (
	                (meridiem === 'রাত' && hour >= 4) ||
	                (meridiem === 'দুপুর' && hour < 5) ||
	                meridiem === 'বিকাল'
	            ) {
	                return hour + 12;
	            } else {
	                return hour;
	            }
	        },
	        meridiem: function (hour, minute, isLower) {
	            if (hour < 4) {
	                return 'রাত';
	            } else if (hour < 10) {
	                return 'সকাল';
	            } else if (hour < 17) {
	                return 'দুপুর';
	            } else if (hour < 20) {
	                return 'বিকাল';
	            } else {
	                return 'রাত';
	            }
	        },
	        week: {
	            dow: 0, // Sunday is the first day of the week.
	            doy: 6, // The week that contains Jan 6th is the first week of the year.
	        },
	    });
	
	    return bn;
	
	})));


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Tibetan [bo]
	//! author : Thupten N. Chakrishar : https://github.com/vajradog
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var symbolMap = {
	            '1': '༡',
	            '2': '༢',
	            '3': '༣',
	            '4': '༤',
	            '5': '༥',
	            '6': '༦',
	            '7': '༧',
	            '8': '༨',
	            '9': '༩',
	            '0': '༠',
	        },
	        numberMap = {
	            '༡': '1',
	            '༢': '2',
	            '༣': '3',
	            '༤': '4',
	            '༥': '5',
	            '༦': '6',
	            '༧': '7',
	            '༨': '8',
	            '༩': '9',
	            '༠': '0',
	        };
	
	    var bo = moment.defineLocale('bo', {
	        months: 'ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ'.split(
	            '_'
	        ),
	        monthsShort: 'ཟླ་1_ཟླ་2_ཟླ་3_ཟླ་4_ཟླ་5_ཟླ་6_ཟླ་7_ཟླ་8_ཟླ་9_ཟླ་10_ཟླ་11_ཟླ་12'.split(
	            '_'
	        ),
	        monthsShortRegex: /^(ཟླ་\d{1,2})/,
	        monthsParseExact: true,
	        weekdays: 'གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་'.split(
	            '_'
	        ),
	        weekdaysShort: 'ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་'.split(
	            '_'
	        ),
	        weekdaysMin: 'ཉི_ཟླ_མིག_ལྷག_ཕུར_སངས_སྤེན'.split('_'),
	        longDateFormat: {
	            LT: 'A h:mm',
	            LTS: 'A h:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY, A h:mm',
	            LLLL: 'dddd, D MMMM YYYY, A h:mm',
	        },
	        calendar: {
	            sameDay: '[དི་རིང] LT',
	            nextDay: '[སང་ཉིན] LT',
	            nextWeek: '[བདུན་ཕྲག་རྗེས་མ], LT',
	            lastDay: '[ཁ་སང] LT',
	            lastWeek: '[བདུན་ཕྲག་མཐའ་མ] dddd, LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: '%s ལ་',
	            past: '%s སྔན་ལ',
	            s: 'ལམ་སང',
	            ss: '%d སྐར་ཆ།',
	            m: 'སྐར་མ་གཅིག',
	            mm: '%d སྐར་མ',
	            h: 'ཆུ་ཚོད་གཅིག',
	            hh: '%d ཆུ་ཚོད',
	            d: 'ཉིན་གཅིག',
	            dd: '%d ཉིན་',
	            M: 'ཟླ་བ་གཅིག',
	            MM: '%d ཟླ་བ',
	            y: 'ལོ་གཅིག',
	            yy: '%d ལོ',
	        },
	        preparse: function (string) {
	            return string.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function (match) {
	                return numberMap[match];
	            });
	        },
	        postformat: function (string) {
	            return string.replace(/\d/g, function (match) {
	                return symbolMap[match];
	            });
	        },
	        meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
	        meridiemHour: function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (
	                (meridiem === 'མཚན་མོ' && hour >= 4) ||
	                (meridiem === 'ཉིན་གུང' && hour < 5) ||
	                meridiem === 'དགོང་དག'
	            ) {
	                return hour + 12;
	            } else {
	                return hour;
	            }
	        },
	        meridiem: function (hour, minute, isLower) {
	            if (hour < 4) {
	                return 'མཚན་མོ';
	            } else if (hour < 10) {
	                return 'ཞོགས་ཀས';
	            } else if (hour < 17) {
	                return 'ཉིན་གུང';
	            } else if (hour < 20) {
	                return 'དགོང་དག';
	            } else {
	                return 'མཚན་མོ';
	            }
	        },
	        week: {
	            dow: 0, // Sunday is the first day of the week.
	            doy: 6, // The week that contains Jan 6th is the first week of the year.
	        },
	    });
	
	    return bo;
	
	})));


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Breton [br]
	//! author : Jean-Baptiste Le Duigou : https://github.com/jbleduigou
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    function relativeTimeWithMutation(number, withoutSuffix, key) {
	        var format = {
	            mm: 'munutenn',
	            MM: 'miz',
	            dd: 'devezh',
	        };
	        return number + ' ' + mutation(format[key], number);
	    }
	    function specialMutationForYears(number) {
	        switch (lastNumber(number)) {
	            case 1:
	            case 3:
	            case 4:
	            case 5:
	            case 9:
	                return number + ' bloaz';
	            default:
	                return number + ' vloaz';
	        }
	    }
	    function lastNumber(number) {
	        if (number > 9) {
	            return lastNumber(number % 10);
	        }
	        return number;
	    }
	    function mutation(text, number) {
	        if (number === 2) {
	            return softMutation(text);
	        }
	        return text;
	    }
	    function softMutation(text) {
	        var mutationTable = {
	            m: 'v',
	            b: 'v',
	            d: 'z',
	        };
	        if (mutationTable[text.charAt(0)] === undefined) {
	            return text;
	        }
	        return mutationTable[text.charAt(0)] + text.substring(1);
	    }
	
	    var monthsParse = [
	            /^gen/i,
	            /^c[ʼ\']hwe/i,
	            /^meu/i,
	            /^ebr/i,
	            /^mae/i,
	            /^(mez|eve)/i,
	            /^gou/i,
	            /^eos/i,
	            /^gwe/i,
	            /^her/i,
	            /^du/i,
	            /^ker/i,
	        ],
	        monthsRegex = /^(genver|c[ʼ\']hwevrer|meurzh|ebrel|mae|mezheven|gouere|eost|gwengolo|here|du|kerzu|gen|c[ʼ\']hwe|meu|ebr|mae|eve|gou|eos|gwe|her|du|ker)/i,
	        monthsStrictRegex = /^(genver|c[ʼ\']hwevrer|meurzh|ebrel|mae|mezheven|gouere|eost|gwengolo|here|du|kerzu)/i,
	        monthsShortStrictRegex = /^(gen|c[ʼ\']hwe|meu|ebr|mae|eve|gou|eos|gwe|her|du|ker)/i,
	        fullWeekdaysParse = [
	            /^sul/i,
	            /^lun/i,
	            /^meurzh/i,
	            /^merc[ʼ\']her/i,
	            /^yaou/i,
	            /^gwener/i,
	            /^sadorn/i,
	        ],
	        shortWeekdaysParse = [
	            /^Sul/i,
	            /^Lun/i,
	            /^Meu/i,
	            /^Mer/i,
	            /^Yao/i,
	            /^Gwe/i,
	            /^Sad/i,
	        ],
	        minWeekdaysParse = [
	            /^Su/i,
	            /^Lu/i,
	            /^Me([^r]|$)/i,
	            /^Mer/i,
	            /^Ya/i,
	            /^Gw/i,
	            /^Sa/i,
	        ];
	
	    var br = moment.defineLocale('br', {
	        months: 'Genver_Cʼhwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu'.split(
	            '_'
	        ),
	        monthsShort: 'Gen_Cʼhwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker'.split('_'),
	        weekdays: 'Sul_Lun_Meurzh_Mercʼher_Yaou_Gwener_Sadorn'.split('_'),
	        weekdaysShort: 'Sul_Lun_Meu_Mer_Yao_Gwe_Sad'.split('_'),
	        weekdaysMin: 'Su_Lu_Me_Mer_Ya_Gw_Sa'.split('_'),
	        weekdaysParse: minWeekdaysParse,
	        fullWeekdaysParse: fullWeekdaysParse,
	        shortWeekdaysParse: shortWeekdaysParse,
	        minWeekdaysParse: minWeekdaysParse,
	
	        monthsRegex: monthsRegex,
	        monthsShortRegex: monthsRegex,
	        monthsStrictRegex: monthsStrictRegex,
	        monthsShortStrictRegex: monthsShortStrictRegex,
	        monthsParse: monthsParse,
	        longMonthsParse: monthsParse,
	        shortMonthsParse: monthsParse,
	
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D [a viz] MMMM YYYY',
	            LLL: 'D [a viz] MMMM YYYY HH:mm',
	            LLLL: 'dddd, D [a viz] MMMM YYYY HH:mm',
	        },
	        calendar: {
	            sameDay: '[Hiziv da] LT',
	            nextDay: '[Warcʼhoazh da] LT',
	            nextWeek: 'dddd [da] LT',
	            lastDay: '[Decʼh da] LT',
	            lastWeek: 'dddd [paset da] LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: 'a-benn %s',
	            past: '%s ʼzo',
	            s: 'un nebeud segondennoù',
	            ss: '%d eilenn',
	            m: 'ur vunutenn',
	            mm: relativeTimeWithMutation,
	            h: 'un eur',
	            hh: '%d eur',
	            d: 'un devezh',
	            dd: relativeTimeWithMutation,
	            M: 'ur miz',
	            MM: relativeTimeWithMutation,
	            y: 'ur bloaz',
	            yy: specialMutationForYears,
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}(añ|vet)/,
	        ordinal: function (number) {
	            var output = number === 1 ? 'añ' : 'vet';
	            return number + output;
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4, // The week that contains Jan 4th is the first week of the year.
	        },
	        meridiemParse: /a.m.|g.m./, // goude merenn | a-raok merenn
	        isPM: function (token) {
	            return token === 'g.m.';
	        },
	        meridiem: function (hour, minute, isLower) {
	            return hour < 12 ? 'a.m.' : 'g.m.';
	        },
	    });
	
	    return br;
	
	})));


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Bosnian [bs]
	//! author : Nedim Cholich : https://github.com/frontyard
	//! based on (hr) translation by Bojan Marković
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    function translate(number, withoutSuffix, key) {
	        var result = number + ' ';
	        switch (key) {
	            case 'ss':
	                if (number === 1) {
	                    result += 'sekunda';
	                } else if (number === 2 || number === 3 || number === 4) {
	                    result += 'sekunde';
	                } else {
	                    result += 'sekundi';
	                }
	                return result;
	            case 'm':
	                return withoutSuffix ? 'jedna minuta' : 'jedne minute';
	            case 'mm':
	                if (number === 1) {
	                    result += 'minuta';
	                } else if (number === 2 || number === 3 || number === 4) {
	                    result += 'minute';
	                } else {
	                    result += 'minuta';
	                }
	                return result;
	            case 'h':
	                return withoutSuffix ? 'jedan sat' : 'jednog sata';
	            case 'hh':
	                if (number === 1) {
	                    result += 'sat';
	                } else if (number === 2 || number === 3 || number === 4) {
	                    result += 'sata';
	                } else {
	                    result += 'sati';
	                }
	                return result;
	            case 'dd':
	                if (number === 1) {
	                    result += 'dan';
	                } else {
	                    result += 'dana';
	                }
	                return result;
	            case 'MM':
	                if (number === 1) {
	                    result += 'mjesec';
	                } else if (number === 2 || number === 3 || number === 4) {
	                    result += 'mjeseca';
	                } else {
	                    result += 'mjeseci';
	                }
	                return result;
	            case 'yy':
	                if (number === 1) {
	                    result += 'godina';
	                } else if (number === 2 || number === 3 || number === 4) {
	                    result += 'godine';
	                } else {
	                    result += 'godina';
	                }
	                return result;
	        }
	    }
	
	    var bs = moment.defineLocale('bs', {
	        months: 'januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar'.split(
	            '_'
	        ),
	        monthsShort: 'jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.'.split(
	            '_'
	        ),
	        monthsParseExact: true,
	        weekdays: 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split(
	            '_'
	        ),
	        weekdaysShort: 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
	        weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
	        weekdaysParseExact: true,
	        longDateFormat: {
	            LT: 'H:mm',
	            LTS: 'H:mm:ss',
	            L: 'DD.MM.YYYY',
	            LL: 'D. MMMM YYYY',
	            LLL: 'D. MMMM YYYY H:mm',
	            LLLL: 'dddd, D. MMMM YYYY H:mm',
	        },
	        calendar: {
	            sameDay: '[danas u] LT',
	            nextDay: '[sutra u] LT',
	            nextWeek: function () {
	                switch (this.day()) {
	                    case 0:
	                        return '[u] [nedjelju] [u] LT';
	                    case 3:
	                        return '[u] [srijedu] [u] LT';
	                    case 6:
	                        return '[u] [subotu] [u] LT';
	                    case 1:
	                    case 2:
	                    case 4:
	                    case 5:
	                        return '[u] dddd [u] LT';
	                }
	            },
	            lastDay: '[jučer u] LT',
	            lastWeek: function () {
	                switch (this.day()) {
	                    case 0:
	                    case 3:
	                        return '[prošlu] dddd [u] LT';
	                    case 6:
	                        return '[prošle] [subote] [u] LT';
	                    case 1:
	                    case 2:
	                    case 4:
	                    case 5:
	                        return '[prošli] dddd [u] LT';
	                }
	            },
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: 'za %s',
	            past: 'prije %s',
	            s: 'par sekundi',
	            ss: translate,
	            m: translate,
	            mm: translate,
	            h: translate,
	            hh: translate,
	            d: 'dan',
	            dd: translate,
	            M: 'mjesec',
	            MM: translate,
	            y: 'godinu',
	            yy: translate,
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}\./,
	        ordinal: '%d.',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 7, // The week that contains Jan 7th is the first week of the year.
	        },
	    });
	
	    return bs;
	
	})));


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Catalan [ca]
	//! author : Juan G. Hurtado : https://github.com/juanghurtado
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var ca = moment.defineLocale('ca', {
	        months: {
	            standalone: 'gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre'.split(
	                '_'
	            ),
	            format: "de gener_de febrer_de març_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split(
	                '_'
	            ),
	            isFormat: /D[oD]?(\s)+MMMM/,
	        },
	        monthsShort: 'gen._febr._març_abr._maig_juny_jul._ag._set._oct._nov._des.'.split(
	            '_'
	        ),
	        monthsParseExact: true,
	        weekdays: 'diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte'.split(
	            '_'
	        ),
	        weekdaysShort: 'dg._dl._dt._dc._dj._dv._ds.'.split('_'),
	        weekdaysMin: 'dg_dl_dt_dc_dj_dv_ds'.split('_'),
	        weekdaysParseExact: true,
	        longDateFormat: {
	            LT: 'H:mm',
	            LTS: 'H:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM [de] YYYY',
	            ll: 'D MMM YYYY',
	            LLL: 'D MMMM [de] YYYY [a les] H:mm',
	            lll: 'D MMM YYYY, H:mm',
	            LLLL: 'dddd D MMMM [de] YYYY [a les] H:mm',
	            llll: 'ddd D MMM YYYY, H:mm',
	        },
	        calendar: {
	            sameDay: function () {
	                return '[avui a ' + (this.hours() !== 1 ? 'les' : 'la') + '] LT';
	            },
	            nextDay: function () {
	                return '[demà a ' + (this.hours() !== 1 ? 'les' : 'la') + '] LT';
	            },
	            nextWeek: function () {
	                return 'dddd [a ' + (this.hours() !== 1 ? 'les' : 'la') + '] LT';
	            },
	            lastDay: function () {
	                return '[ahir a ' + (this.hours() !== 1 ? 'les' : 'la') + '] LT';
	            },
	            lastWeek: function () {
	                return (
	                    '[el] dddd [passat a ' +
	                    (this.hours() !== 1 ? 'les' : 'la') +
	                    '] LT'
	                );
	            },
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: "d'aquí %s",
	            past: 'fa %s',
	            s: 'uns segons',
	            ss: '%d segons',
	            m: 'un minut',
	            mm: '%d minuts',
	            h: 'una hora',
	            hh: '%d hores',
	            d: 'un dia',
	            dd: '%d dies',
	            M: 'un mes',
	            MM: '%d mesos',
	            y: 'un any',
	            yy: '%d anys',
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
	        ordinal: function (number, period) {
	            var output =
	                number === 1
	                    ? 'r'
	                    : number === 2
	                    ? 'n'
	                    : number === 3
	                    ? 'r'
	                    : number === 4
	                    ? 't'
	                    : 'è';
	            if (period === 'w' || period === 'W') {
	                output = 'a';
	            }
	            return number + output;
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4, // The week that contains Jan 4th is the first week of the year.
	        },
	    });
	
	    return ca;
	
	})));


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Czech [cs]
	//! author : petrbela : https://github.com/petrbela
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var months = 'leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec'.split(
	            '_'
	        ),
	        monthsShort = 'led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro'.split('_'),
	        monthsParse = [
	            /^led/i,
	            /^úno/i,
	            /^bře/i,
	            /^dub/i,
	            /^kvě/i,
	            /^(čvn|červen$|června)/i,
	            /^(čvc|červenec|července)/i,
	            /^srp/i,
	            /^zář/i,
	            /^říj/i,
	            /^lis/i,
	            /^pro/i,
	        ],
	        // NOTE: 'červen' is substring of 'červenec'; therefore 'červenec' must precede 'červen' in the regex to be fully matched.
	        // Otherwise parser matches '1. červenec' as '1. červen' + 'ec'.
	        monthsRegex = /^(leden|únor|březen|duben|květen|červenec|července|červen|června|srpen|září|říjen|listopad|prosinec|led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i;
	
	    function plural(n) {
	        return n > 1 && n < 5 && ~~(n / 10) !== 1;
	    }
	    function translate(number, withoutSuffix, key, isFuture) {
	        var result = number + ' ';
	        switch (key) {
	            case 's': // a few seconds / in a few seconds / a few seconds ago
	                return withoutSuffix || isFuture ? 'pár sekund' : 'pár sekundami';
	            case 'ss': // 9 seconds / in 9 seconds / 9 seconds ago
	                if (withoutSuffix || isFuture) {
	                    return result + (plural(number) ? 'sekundy' : 'sekund');
	                } else {
	                    return result + 'sekundami';
	                }
	            case 'm': // a minute / in a minute / a minute ago
	                return withoutSuffix ? 'minuta' : isFuture ? 'minutu' : 'minutou';
	            case 'mm': // 9 minutes / in 9 minutes / 9 minutes ago
	                if (withoutSuffix || isFuture) {
	                    return result + (plural(number) ? 'minuty' : 'minut');
	                } else {
	                    return result + 'minutami';
	                }
	            case 'h': // an hour / in an hour / an hour ago
	                return withoutSuffix ? 'hodina' : isFuture ? 'hodinu' : 'hodinou';
	            case 'hh': // 9 hours / in 9 hours / 9 hours ago
	                if (withoutSuffix || isFuture) {
	                    return result + (plural(number) ? 'hodiny' : 'hodin');
	                } else {
	                    return result + 'hodinami';
	                }
	            case 'd': // a day / in a day / a day ago
	                return withoutSuffix || isFuture ? 'den' : 'dnem';
	            case 'dd': // 9 days / in 9 days / 9 days ago
	                if (withoutSuffix || isFuture) {
	                    return result + (plural(number) ? 'dny' : 'dní');
	                } else {
	                    return result + 'dny';
	                }
	            case 'M': // a month / in a month / a month ago
	                return withoutSuffix || isFuture ? 'měsíc' : 'měsícem';
	            case 'MM': // 9 months / in 9 months / 9 months ago
	                if (withoutSuffix || isFuture) {
	                    return result + (plural(number) ? 'měsíce' : 'měsíců');
	                } else {
	                    return result + 'měsíci';
	                }
	            case 'y': // a year / in a year / a year ago
	                return withoutSuffix || isFuture ? 'rok' : 'rokem';
	            case 'yy': // 9 years / in 9 years / 9 years ago
	                if (withoutSuffix || isFuture) {
	                    return result + (plural(number) ? 'roky' : 'let');
	                } else {
	                    return result + 'lety';
	                }
	        }
	    }
	
	    var cs = moment.defineLocale('cs', {
	        months: months,
	        monthsShort: monthsShort,
	        monthsRegex: monthsRegex,
	        monthsShortRegex: monthsRegex,
	        // NOTE: 'červen' is substring of 'červenec'; therefore 'červenec' must precede 'červen' in the regex to be fully matched.
	        // Otherwise parser matches '1. červenec' as '1. červen' + 'ec'.
	        monthsStrictRegex: /^(leden|ledna|února|únor|březen|března|duben|dubna|květen|května|červenec|července|červen|června|srpen|srpna|září|říjen|října|listopadu|listopad|prosinec|prosince)/i,
	        monthsShortStrictRegex: /^(led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i,
	        monthsParse: monthsParse,
	        longMonthsParse: monthsParse,
	        shortMonthsParse: monthsParse,
	        weekdays: 'neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota'.split('_'),
	        weekdaysShort: 'ne_po_út_st_čt_pá_so'.split('_'),
	        weekdaysMin: 'ne_po_út_st_čt_pá_so'.split('_'),
	        longDateFormat: {
	            LT: 'H:mm',
	            LTS: 'H:mm:ss',
	            L: 'DD.MM.YYYY',
	            LL: 'D. MMMM YYYY',
	            LLL: 'D. MMMM YYYY H:mm',
	            LLLL: 'dddd D. MMMM YYYY H:mm',
	            l: 'D. M. YYYY',
	        },
	        calendar: {
	            sameDay: '[dnes v] LT',
	            nextDay: '[zítra v] LT',
	            nextWeek: function () {
	                switch (this.day()) {
	                    case 0:
	                        return '[v neděli v] LT';
	                    case 1:
	                    case 2:
	                        return '[v] dddd [v] LT';
	                    case 3:
	                        return '[ve středu v] LT';
	                    case 4:
	                        return '[ve čtvrtek v] LT';
	                    case 5:
	                        return '[v pátek v] LT';
	                    case 6:
	                        return '[v sobotu v] LT';
	                }
	            },
	            lastDay: '[včera v] LT',
	            lastWeek: function () {
	                switch (this.day()) {
	                    case 0:
	                        return '[minulou neděli v] LT';
	                    case 1:
	                    case 2:
	                        return '[minulé] dddd [v] LT';
	                    case 3:
	                        return '[minulou středu v] LT';
	                    case 4:
	                    case 5:
	                        return '[minulý] dddd [v] LT';
	                    case 6:
	                        return '[minulou sobotu v] LT';
	                }
	            },
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: 'za %s',
	            past: 'před %s',
	            s: translate,
	            ss: translate,
	            m: translate,
	            mm: translate,
	            h: translate,
	            hh: translate,
	            d: translate,
	            dd: translate,
	            M: translate,
	            MM: translate,
	            y: translate,
	            yy: translate,
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}\./,
	        ordinal: '%d.',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4, // The week that contains Jan 4th is the first week of the year.
	        },
	    });
	
	    return cs;
	
	})));


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Chuvash [cv]
	//! author : Anatoly Mironov : https://github.com/mirontoli
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var cv = moment.defineLocale('cv', {
	        months: 'кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав'.split(
	            '_'
	        ),
	        monthsShort: 'кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш'.split('_'),
	        weekdays: 'вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун'.split(
	            '_'
	        ),
	        weekdaysShort: 'выр_тун_ытл_юн_кӗҫ_эрн_шӑм'.split('_'),
	        weekdaysMin: 'вр_тн_ыт_юн_кҫ_эр_шм'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD-MM-YYYY',
	            LL: 'YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]',
	            LLL: 'YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm',
	            LLLL: 'dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm',
	        },
	        calendar: {
	            sameDay: '[Паян] LT [сехетре]',
	            nextDay: '[Ыран] LT [сехетре]',
	            lastDay: '[Ӗнер] LT [сехетре]',
	            nextWeek: '[Ҫитес] dddd LT [сехетре]',
	            lastWeek: '[Иртнӗ] dddd LT [сехетре]',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: function (output) {
	                var affix = /сехет$/i.exec(output)
	                    ? 'рен'
	                    : /ҫул$/i.exec(output)
	                    ? 'тан'
	                    : 'ран';
	                return output + affix;
	            },
	            past: '%s каялла',
	            s: 'пӗр-ик ҫеккунт',
	            ss: '%d ҫеккунт',
	            m: 'пӗр минут',
	            mm: '%d минут',
	            h: 'пӗр сехет',
	            hh: '%d сехет',
	            d: 'пӗр кун',
	            dd: '%d кун',
	            M: 'пӗр уйӑх',
	            MM: '%d уйӑх',
	            y: 'пӗр ҫул',
	            yy: '%d ҫул',
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}-мӗш/,
	        ordinal: '%d-мӗш',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 7, // The week that contains Jan 7th is the first week of the year.
	        },
	    });
	
	    return cv;
	
	})));


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Welsh [cy]
	//! author : Robert Allen : https://github.com/robgallen
	//! author : https://github.com/ryangreaves
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var cy = moment.defineLocale('cy', {
	        months: 'Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr'.split(
	            '_'
	        ),
	        monthsShort: 'Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag'.split(
	            '_'
	        ),
	        weekdays: 'Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn'.split(
	            '_'
	        ),
	        weekdaysShort: 'Sul_Llun_Maw_Mer_Iau_Gwe_Sad'.split('_'),
	        weekdaysMin: 'Su_Ll_Ma_Me_Ia_Gw_Sa'.split('_'),
	        weekdaysParseExact: true,
	        // time formats are the same as en-gb
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd, D MMMM YYYY HH:mm',
	        },
	        calendar: {
	            sameDay: '[Heddiw am] LT',
	            nextDay: '[Yfory am] LT',
	            nextWeek: 'dddd [am] LT',
	            lastDay: '[Ddoe am] LT',
	            lastWeek: 'dddd [diwethaf am] LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: 'mewn %s',
	            past: '%s yn ôl',
	            s: 'ychydig eiliadau',
	            ss: '%d eiliad',
	            m: 'munud',
	            mm: '%d munud',
	            h: 'awr',
	            hh: '%d awr',
	            d: 'diwrnod',
	            dd: '%d diwrnod',
	            M: 'mis',
	            MM: '%d mis',
	            y: 'blwyddyn',
	            yy: '%d flynedd',
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
	        // traditional ordinal numbers above 31 are not commonly used in colloquial Welsh
	        ordinal: function (number) {
	            var b = number,
	                output = '',
	                lookup = [
	                    '',
	                    'af',
	                    'il',
	                    'ydd',
	                    'ydd',
	                    'ed',
	                    'ed',
	                    'ed',
	                    'fed',
	                    'fed',
	                    'fed', // 1af to 10fed
	                    'eg',
	                    'fed',
	                    'eg',
	                    'eg',
	                    'fed',
	                    'eg',
	                    'eg',
	                    'fed',
	                    'eg',
	                    'fed', // 11eg to 20fed
	                ];
	            if (b > 20) {
	                if (b === 40 || b === 50 || b === 60 || b === 80 || b === 100) {
	                    output = 'fed'; // not 30ain, 70ain or 90ain
	                } else {
	                    output = 'ain';
	                }
	            } else if (b > 0) {
	                output = lookup[b];
	            }
	            return number + output;
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4, // The week that contains Jan 4th is the first week of the year.
	        },
	    });
	
	    return cy;
	
	})));


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Danish [da]
	//! author : Ulrik Nielsen : https://github.com/mrbase
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var da = moment.defineLocale('da', {
	        months: 'januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december'.split(
	            '_'
	        ),
	        monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
	        weekdays: 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),
	        weekdaysShort: 'søn_man_tir_ons_tor_fre_lør'.split('_'),
	        weekdaysMin: 'sø_ma_ti_on_to_fr_lø'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD.MM.YYYY',
	            LL: 'D. MMMM YYYY',
	            LLL: 'D. MMMM YYYY HH:mm',
	            LLLL: 'dddd [d.] D. MMMM YYYY [kl.] HH:mm',
	        },
	        calendar: {
	            sameDay: '[i dag kl.] LT',
	            nextDay: '[i morgen kl.] LT',
	            nextWeek: 'på dddd [kl.] LT',
	            lastDay: '[i går kl.] LT',
	            lastWeek: '[i] dddd[s kl.] LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: 'om %s',
	            past: '%s siden',
	            s: 'få sekunder',
	            ss: '%d sekunder',
	            m: 'et minut',
	            mm: '%d minutter',
	            h: 'en time',
	            hh: '%d timer',
	            d: 'en dag',
	            dd: '%d dage',
	            M: 'en måned',
	            MM: '%d måneder',
	            y: 'et år',
	            yy: '%d år',
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}\./,
	        ordinal: '%d.',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4, // The week that contains Jan 4th is the first week of the year.
	        },
	    });
	
	    return da;
	
	})));


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : German [de]
	//! author : lluchs : https://github.com/lluchs
	//! author: Menelion Elensúle: https://github.com/Oire
	//! author : Mikolaj Dadela : https://github.com/mik01aj
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    function processRelativeTime(number, withoutSuffix, key, isFuture) {
	        var format = {
	            m: ['eine Minute', 'einer Minute'],
	            h: ['eine Stunde', 'einer Stunde'],
	            d: ['ein Tag', 'einem Tag'],
	            dd: [number + ' Tage', number + ' Tagen'],
	            w: ['eine Woche', 'einer Woche'],
	            M: ['ein Monat', 'einem Monat'],
	            MM: [number + ' Monate', number + ' Monaten'],
	            y: ['ein Jahr', 'einem Jahr'],
	            yy: [number + ' Jahre', number + ' Jahren'],
	        };
	        return withoutSuffix ? format[key][0] : format[key][1];
	    }
	
	    var de = moment.defineLocale('de', {
	        months: 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split(
	            '_'
	        ),
	        monthsShort: 'Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.'.split(
	            '_'
	        ),
	        monthsParseExact: true,
	        weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split(
	            '_'
	        ),
	        weekdaysShort: 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
	        weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
	        weekdaysParseExact: true,
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD.MM.YYYY',
	            LL: 'D. MMMM YYYY',
	            LLL: 'D. MMMM YYYY HH:mm',
	            LLLL: 'dddd, D. MMMM YYYY HH:mm',
	        },
	        calendar: {
	            sameDay: '[heute um] LT [Uhr]',
	            sameElse: 'L',
	            nextDay: '[morgen um] LT [Uhr]',
	            nextWeek: 'dddd [um] LT [Uhr]',
	            lastDay: '[gestern um] LT [Uhr]',
	            lastWeek: '[letzten] dddd [um] LT [Uhr]',
	        },
	        relativeTime: {
	            future: 'in %s',
	            past: 'vor %s',
	            s: 'ein paar Sekunden',
	            ss: '%d Sekunden',
	            m: processRelativeTime,
	            mm: '%d Minuten',
	            h: processRelativeTime,
	            hh: '%d Stunden',
	            d: processRelativeTime,
	            dd: processRelativeTime,
	            w: processRelativeTime,
	            ww: '%d Wochen',
	            M: processRelativeTime,
	            MM: processRelativeTime,
	            y: processRelativeTime,
	            yy: processRelativeTime,
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}\./,
	        ordinal: '%d.',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4, // The week that contains Jan 4th is the first week of the year.
	        },
	    });
	
	    return de;
	
	})));


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : German (Austria) [de-at]
	//! author : lluchs : https://github.com/lluchs
	//! author: Menelion Elensúle: https://github.com/Oire
	//! author : Martin Groller : https://github.com/MadMG
	//! author : Mikolaj Dadela : https://github.com/mik01aj
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    function processRelativeTime(number, withoutSuffix, key, isFuture) {
	        var format = {
	            m: ['eine Minute', 'einer Minute'],
	            h: ['eine Stunde', 'einer Stunde'],
	            d: ['ein Tag', 'einem Tag'],
	            dd: [number + ' Tage', number + ' Tagen'],
	            w: ['eine Woche', 'einer Woche'],
	            M: ['ein Monat', 'einem Monat'],
	            MM: [number + ' Monate', number + ' Monaten'],
	            y: ['ein Jahr', 'einem Jahr'],
	            yy: [number + ' Jahre', number + ' Jahren'],
	        };
	        return withoutSuffix ? format[key][0] : format[key][1];
	    }
	
	    var deAt = moment.defineLocale('de-at', {
	        months: 'Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split(
	            '_'
	        ),
	        monthsShort: 'Jän._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.'.split(
	            '_'
	        ),
	        monthsParseExact: true,
	        weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split(
	            '_'
	        ),
	        weekdaysShort: 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
	        weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
	        weekdaysParseExact: true,
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD.MM.YYYY',
	            LL: 'D. MMMM YYYY',
	            LLL: 'D. MMMM YYYY HH:mm',
	            LLLL: 'dddd, D. MMMM YYYY HH:mm',
	        },
	        calendar: {
	            sameDay: '[heute um] LT [Uhr]',
	            sameElse: 'L',
	            nextDay: '[morgen um] LT [Uhr]',
	            nextWeek: 'dddd [um] LT [Uhr]',
	            lastDay: '[gestern um] LT [Uhr]',
	            lastWeek: '[letzten] dddd [um] LT [Uhr]',
	        },
	        relativeTime: {
	            future: 'in %s',
	            past: 'vor %s',
	            s: 'ein paar Sekunden',
	            ss: '%d Sekunden',
	            m: processRelativeTime,
	            mm: '%d Minuten',
	            h: processRelativeTime,
	            hh: '%d Stunden',
	            d: processRelativeTime,
	            dd: processRelativeTime,
	            w: processRelativeTime,
	            ww: '%d Wochen',
	            M: processRelativeTime,
	            MM: processRelativeTime,
	            y: processRelativeTime,
	            yy: processRelativeTime,
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}\./,
	        ordinal: '%d.',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4, // The week that contains Jan 4th is the first week of the year.
	        },
	    });
	
	    return deAt;
	
	})));


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : German (Switzerland) [de-ch]
	//! author : sschueller : https://github.com/sschueller
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    function processRelativeTime(number, withoutSuffix, key, isFuture) {
	        var format = {
	            m: ['eine Minute', 'einer Minute'],
	            h: ['eine Stunde', 'einer Stunde'],
	            d: ['ein Tag', 'einem Tag'],
	            dd: [number + ' Tage', number + ' Tagen'],
	            w: ['eine Woche', 'einer Woche'],
	            M: ['ein Monat', 'einem Monat'],
	            MM: [number + ' Monate', number + ' Monaten'],
	            y: ['ein Jahr', 'einem Jahr'],
	            yy: [number + ' Jahre', number + ' Jahren'],
	        };
	        return withoutSuffix ? format[key][0] : format[key][1];
	    }
	
	    var deCh = moment.defineLocale('de-ch', {
	        months: 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split(
	            '_'
	        ),
	        monthsShort: 'Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.'.split(
	            '_'
	        ),
	        monthsParseExact: true,
	        weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split(
	            '_'
	        ),
	        weekdaysShort: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
	        weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
	        weekdaysParseExact: true,
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD.MM.YYYY',
	            LL: 'D. MMMM YYYY',
	            LLL: 'D. MMMM YYYY HH:mm',
	            LLLL: 'dddd, D. MMMM YYYY HH:mm',
	        },
	        calendar: {
	            sameDay: '[heute um] LT [Uhr]',
	            sameElse: 'L',
	            nextDay: '[morgen um] LT [Uhr]',
	            nextWeek: 'dddd [um] LT [Uhr]',
	            lastDay: '[gestern um] LT [Uhr]',
	            lastWeek: '[letzten] dddd [um] LT [Uhr]',
	        },
	        relativeTime: {
	            future: 'in %s',
	            past: 'vor %s',
	            s: 'ein paar Sekunden',
	            ss: '%d Sekunden',
	            m: processRelativeTime,
	            mm: '%d Minuten',
	            h: processRelativeTime,
	            hh: '%d Stunden',
	            d: processRelativeTime,
	            dd: processRelativeTime,
	            w: processRelativeTime,
	            ww: '%d Wochen',
	            M: processRelativeTime,
	            MM: processRelativeTime,
	            y: processRelativeTime,
	            yy: processRelativeTime,
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}\./,
	        ordinal: '%d.',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4, // The week that contains Jan 4th is the first week of the year.
	        },
	    });
	
	    return deCh;
	
	})));


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Maldivian [dv]
	//! author : Jawish Hameed : https://github.com/jawish
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var months = [
	            'ޖެނުއަރީ',
	            'ފެބްރުއަރީ',
	            'މާރިޗު',
	            'އޭޕްރީލު',
	            'މޭ',
	            'ޖޫން',
	            'ޖުލައި',
	            'އޯގަސްޓު',
	            'ސެޕްޓެމްބަރު',
	            'އޮކްޓޯބަރު',
	            'ނޮވެމްބަރު',
	            'ޑިސެމްބަރު',
	        ],
	        weekdays = [
	            'އާދިއްތަ',
	            'ހޯމަ',
	            'އަންގާރަ',
	            'ބުދަ',
	            'ބުރާސްފަތި',
	            'ހުކުރު',
	            'ހޮނިހިރު',
	        ];
	
	    var dv = moment.defineLocale('dv', {
	        months: months,
	        monthsShort: months,
	        weekdays: weekdays,
	        weekdaysShort: weekdays,
	        weekdaysMin: 'އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'D/M/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd D MMMM YYYY HH:mm',
	        },
	        meridiemParse: /މކ|މފ/,
	        isPM: function (input) {
	            return 'މފ' === input;
	        },
	        meridiem: function (hour, minute, isLower) {
	            if (hour < 12) {
	                return 'މކ';
	            } else {
	                return 'މފ';
	            }
	        },
	        calendar: {
	            sameDay: '[މިއަދު] LT',
	            nextDay: '[މާދަމާ] LT',
	            nextWeek: 'dddd LT',
	            lastDay: '[އިއްޔެ] LT',
	            lastWeek: '[ފާއިތުވި] dddd LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: 'ތެރޭގައި %s',
	            past: 'ކުރިން %s',
	            s: 'ސިކުންތުކޮޅެއް',
	            ss: 'd% ސިކުންތު',
	            m: 'މިނިޓެއް',
	            mm: 'މިނިޓު %d',
	            h: 'ގަޑިއިރެއް',
	            hh: 'ގަޑިއިރު %d',
	            d: 'ދުވަހެއް',
	            dd: 'ދުވަސް %d',
	            M: 'މަހެއް',
	            MM: 'މަސް %d',
	            y: 'އަހަރެއް',
	            yy: 'އަހަރު %d',
	        },
	        preparse: function (string) {
	            return string.replace(/،/g, ',');
	        },
	        postformat: function (string) {
	            return string.replace(/,/g, '،');
	        },
	        week: {
	            dow: 7, // Sunday is the first day of the week.
	            doy: 12, // The week that contains Jan 12th is the first week of the year.
	        },
	    });
	
	    return dv;
	
	})));


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Greek [el]
	//! author : Aggelos Karalias : https://github.com/mehiel
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    function isFunction(input) {
	        return (
	            (typeof Function !== 'undefined' && input instanceof Function) ||
	            Object.prototype.toString.call(input) === '[object Function]'
	        );
	    }
	
	    var el = moment.defineLocale('el', {
	        monthsNominativeEl: 'Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος'.split(
	            '_'
	        ),
	        monthsGenitiveEl: 'Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου'.split(
	            '_'
	        ),
	        months: function (momentToFormat, format) {
	            if (!momentToFormat) {
	                return this._monthsNominativeEl;
	            } else if (
	                typeof format === 'string' &&
	                /D/.test(format.substring(0, format.indexOf('MMMM')))
	            ) {
	                // if there is a day number before 'MMMM'
	                return this._monthsGenitiveEl[momentToFormat.month()];
	            } else {
	                return this._monthsNominativeEl[momentToFormat.month()];
	            }
	        },
	        monthsShort: 'Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ'.split('_'),
	        weekdays: 'Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο'.split(
	            '_'
	        ),
	        weekdaysShort: 'Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ'.split('_'),
	        weekdaysMin: 'Κυ_Δε_Τρ_Τε_Πε_Πα_Σα'.split('_'),
	        meridiem: function (hours, minutes, isLower) {
	            if (hours > 11) {
	                return isLower ? 'μμ' : 'ΜΜ';
	            } else {
	                return isLower ? 'πμ' : 'ΠΜ';
	            }
	        },
	        isPM: function (input) {
	            return (input + '').toLowerCase()[0] === 'μ';
	        },
	        meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
	        longDateFormat: {
	            LT: 'h:mm A',
	            LTS: 'h:mm:ss A',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY h:mm A',
	            LLLL: 'dddd, D MMMM YYYY h:mm A',
	        },
	        calendarEl: {
	            sameDay: '[Σήμερα {}] LT',
	            nextDay: '[Αύριο {}] LT',
	            nextWeek: 'dddd [{}] LT',
	            lastDay: '[Χθες {}] LT',
	            lastWeek: function () {
	                switch (this.day()) {
	                    case 6:
	                        return '[το προηγούμενο] dddd [{}] LT';
	                    default:
	                        return '[την προηγούμενη] dddd [{}] LT';
	                }
	            },
	            sameElse: 'L',
	        },
	        calendar: function (key, mom) {
	            var output = this._calendarEl[key],
	                hours = mom && mom.hours();
	            if (isFunction(output)) {
	                output = output.apply(mom);
	            }
	            return output.replace('{}', hours % 12 === 1 ? 'στη' : 'στις');
	        },
	        relativeTime: {
	            future: 'σε %s',
	            past: '%s πριν',
	            s: 'λίγα δευτερόλεπτα',
	            ss: '%d δευτερόλεπτα',
	            m: 'ένα λεπτό',
	            mm: '%d λεπτά',
	            h: 'μία ώρα',
	            hh: '%d ώρες',
	            d: 'μία μέρα',
	            dd: '%d μέρες',
	            M: 'ένας μήνας',
	            MM: '%d μήνες',
	            y: 'ένας χρόνος',
	            yy: '%d χρόνια',
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}η/,
	        ordinal: '%dη',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4, // The week that contains Jan 4st is the first week of the year.
	        },
	    });
	
	    return el;
	
	})));


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : English (Australia) [en-au]
	//! author : Jared Morse : https://github.com/jarcoal
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var enAu = moment.defineLocale('en-au', {
	        months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split(
	            '_'
	        ),
	        monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
	        weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split(
	            '_'
	        ),
	        weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
	        weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
	        longDateFormat: {
	            LT: 'h:mm A',
	            LTS: 'h:mm:ss A',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY h:mm A',
	            LLLL: 'dddd, D MMMM YYYY h:mm A',
	        },
	        calendar: {
	            sameDay: '[Today at] LT',
	            nextDay: '[Tomorrow at] LT',
	            nextWeek: 'dddd [at] LT',
	            lastDay: '[Yesterday at] LT',
	            lastWeek: '[Last] dddd [at] LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: 'in %s',
	            past: '%s ago',
	            s: 'a few seconds',
	            ss: '%d seconds',
	            m: 'a minute',
	            mm: '%d minutes',
	            h: 'an hour',
	            hh: '%d hours',
	            d: 'a day',
	            dd: '%d days',
	            M: 'a month',
	            MM: '%d months',
	            y: 'a year',
	            yy: '%d years',
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
	        ordinal: function (number) {
	            var b = number % 10,
	                output =
	                    ~~((number % 100) / 10) === 1
	                        ? 'th'
	                        : b === 1
	                        ? 'st'
	                        : b === 2
	                        ? 'nd'
	                        : b === 3
	                        ? 'rd'
	                        : 'th';
	            return number + output;
	        },
	        week: {
	            dow: 0, // Sunday is the first day of the week.
	            doy: 4, // The week that contains Jan 4th is the first week of the year.
	        },
	    });
	
	    return enAu;
	
	})));


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : English (Canada) [en-ca]
	//! author : Jonathan Abourbih : https://github.com/jonbca
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var enCa = moment.defineLocale('en-ca', {
	        months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split(
	            '_'
	        ),
	        monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
	        weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split(
	            '_'
	        ),
	        weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
	        weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
	        longDateFormat: {
	            LT: 'h:mm A',
	            LTS: 'h:mm:ss A',
	            L: 'YYYY-MM-DD',
	            LL: 'MMMM D, YYYY',
	            LLL: 'MMMM D, YYYY h:mm A',
	            LLLL: 'dddd, MMMM D, YYYY h:mm A',
	        },
	        calendar: {
	            sameDay: '[Today at] LT',
	            nextDay: '[Tomorrow at] LT',
	            nextWeek: 'dddd [at] LT',
	            lastDay: '[Yesterday at] LT',
	            lastWeek: '[Last] dddd [at] LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: 'in %s',
	            past: '%s ago',
	            s: 'a few seconds',
	            ss: '%d seconds',
	            m: 'a minute',
	            mm: '%d minutes',
	            h: 'an hour',
	            hh: '%d hours',
	            d: 'a day',
	            dd: '%d days',
	            M: 'a month',
	            MM: '%d months',
	            y: 'a year',
	            yy: '%d years',
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
	        ordinal: function (number) {
	            var b = number % 10,
	                output =
	                    ~~((number % 100) / 10) === 1
	                        ? 'th'
	                        : b === 1
	                        ? 'st'
	                        : b === 2
	                        ? 'nd'
	                        : b === 3
	                        ? 'rd'
	                        : 'th';
	            return number + output;
	        },
	    });
	
	    return enCa;
	
	})));


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : English (United Kingdom) [en-gb]
	//! author : Chris Gedrim : https://github.com/chrisgedrim
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var enGb = moment.defineLocale('en-gb', {
	        months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split(
	            '_'
	        ),
	        monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
	        weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split(
	            '_'
	        ),
	        weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
	        weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd, D MMMM YYYY HH:mm',
	        },
	        calendar: {
	            sameDay: '[Today at] LT',
	            nextDay: '[Tomorrow at] LT',
	            nextWeek: 'dddd [at] LT',
	            lastDay: '[Yesterday at] LT',
	            lastWeek: '[Last] dddd [at] LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: 'in %s',
	            past: '%s ago',
	            s: 'a few seconds',
	            ss: '%d seconds',
	            m: 'a minute',
	            mm: '%d minutes',
	            h: 'an hour',
	            hh: '%d hours',
	            d: 'a day',
	            dd: '%d days',
	            M: 'a month',
	            MM: '%d months',
	            y: 'a year',
	            yy: '%d years',
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
	        ordinal: function (number) {
	            var b = number % 10,
	                output =
	                    ~~((number % 100) / 10) === 1
	                        ? 'th'
	                        : b === 1
	                        ? 'st'
	                        : b === 2
	                        ? 'nd'
	                        : b === 3
	                        ? 'rd'
	                        : 'th';
	            return number + output;
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4, // The week that contains Jan 4th is the first week of the year.
	        },
	    });
	
	    return enGb;
	
	})));


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : English (Ireland) [en-ie]
	//! author : Chris Cartlidge : https://github.com/chriscartlidge
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var enIe = moment.defineLocale('en-ie', {
	        months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split(
	            '_'
	        ),
	        monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
	        weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split(
	            '_'
	        ),
	        weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
	        weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd D MMMM YYYY HH:mm',
	        },
	        calendar: {
	            sameDay: '[Today at] LT',
	            nextDay: '[Tomorrow at] LT',
	            nextWeek: 'dddd [at] LT',
	            lastDay: '[Yesterday at] LT',
	            lastWeek: '[Last] dddd [at] LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: 'in %s',
	            past: '%s ago',
	            s: 'a few seconds',
	            ss: '%d seconds',
	            m: 'a minute',
	            mm: '%d minutes',
	            h: 'an hour',
	            hh: '%d hours',
	            d: 'a day',
	            dd: '%d days',
	            M: 'a month',
	            MM: '%d months',
	            y: 'a year',
	            yy: '%d years',
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
	        ordinal: function (number) {
	            var b = number % 10,
	                output =
	                    ~~((number % 100) / 10) === 1
	                        ? 'th'
	                        : b === 1
	                        ? 'st'
	                        : b === 2
	                        ? 'nd'
	                        : b === 3
	                        ? 'rd'
	                        : 'th';
	            return number + output;
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4, // The week that contains Jan 4th is the first week of the year.
	        },
	    });
	
	    return enIe;
	
	})));


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : English (Israel) [en-il]
	//! author : Chris Gedrim : https://github.com/chrisgedrim
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var enIl = moment.defineLocale('en-il', {
	        months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split(
	            '_'
	        ),
	        monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
	        weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split(
	            '_'
	        ),
	        weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
	        weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd, D MMMM YYYY HH:mm',
	        },
	        calendar: {
	            sameDay: '[Today at] LT',
	            nextDay: '[Tomorrow at] LT',
	            nextWeek: 'dddd [at] LT',
	            lastDay: '[Yesterday at] LT',
	            lastWeek: '[Last] dddd [at] LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: 'in %s',
	            past: '%s ago',
	            s: 'a few seconds',
	            ss: '%d seconds',
	            m: 'a minute',
	            mm: '%d minutes',
	            h: 'an hour',
	            hh: '%d hours',
	            d: 'a day',
	            dd: '%d days',
	            M: 'a month',
	            MM: '%d months',
	            y: 'a year',
	            yy: '%d years',
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
	        ordinal: function (number) {
	            var b = number % 10,
	                output =
	                    ~~((number % 100) / 10) === 1
	                        ? 'th'
	                        : b === 1
	                        ? 'st'
	                        : b === 2
	                        ? 'nd'
	                        : b === 3
	                        ? 'rd'
	                        : 'th';
	            return number + output;
	        },
	    });
	
	    return enIl;
	
	})));


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : English (India) [en-in]
	//! author : Jatin Agrawal : https://github.com/jatinag22
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var enIn = moment.defineLocale('en-in', {
	        months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split(
	            '_'
	        ),
	        monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
	        weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split(
	            '_'
	        ),
	        weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
	        weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
	        longDateFormat: {
	            LT: 'h:mm A',
	            LTS: 'h:mm:ss A',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY h:mm A',
	            LLLL: 'dddd, D MMMM YYYY h:mm A',
	        },
	        calendar: {
	            sameDay: '[Today at] LT',
	            nextDay: '[Tomorrow at] LT',
	            nextWeek: 'dddd [at] LT',
	            lastDay: '[Yesterday at] LT',
	            lastWeek: '[Last] dddd [at] LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: 'in %s',
	            past: '%s ago',
	            s: 'a few seconds',
	            ss: '%d seconds',
	            m: 'a minute',
	            mm: '%d minutes',
	            h: 'an hour',
	            hh: '%d hours',
	            d: 'a day',
	            dd: '%d days',
	            M: 'a month',
	            MM: '%d months',
	            y: 'a year',
	            yy: '%d years',
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
	        ordinal: function (number) {
	            var b = number % 10,
	                output =
	                    ~~((number % 100) / 10) === 1
	                        ? 'th'
	                        : b === 1
	                        ? 'st'
	                        : b === 2
	                        ? 'nd'
	                        : b === 3
	                        ? 'rd'
	                        : 'th';
	            return number + output;
	        },
	        week: {
	            dow: 0, // Sunday is the first day of the week.
	            doy: 6, // The week that contains Jan 1st is the first week of the year.
	        },
	    });
	
	    return enIn;
	
	})));


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : English (New Zealand) [en-nz]
	//! author : Luke McGregor : https://github.com/lukemcgregor
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var enNz = moment.defineLocale('en-nz', {
	        months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split(
	            '_'
	        ),
	        monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
	        weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split(
	            '_'
	        ),
	        weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
	        weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
	        longDateFormat: {
	            LT: 'h:mm A',
	            LTS: 'h:mm:ss A',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY h:mm A',
	            LLLL: 'dddd, D MMMM YYYY h:mm A',
	        },
	        calendar: {
	            sameDay: '[Today at] LT',
	            nextDay: '[Tomorrow at] LT',
	            nextWeek: 'dddd [at] LT',
	            lastDay: '[Yesterday at] LT',
	            lastWeek: '[Last] dddd [at] LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: 'in %s',
	            past: '%s ago',
	            s: 'a few seconds',
	            ss: '%d seconds',
	            m: 'a minute',
	            mm: '%d minutes',
	            h: 'an hour',
	            hh: '%d hours',
	            d: 'a day',
	            dd: '%d days',
	            M: 'a month',
	            MM: '%d months',
	            y: 'a year',
	            yy: '%d years',
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
	        ordinal: function (number) {
	            var b = number % 10,
	                output =
	                    ~~((number % 100) / 10) === 1
	                        ? 'th'
	                        : b === 1
	                        ? 'st'
	                        : b === 2
	                        ? 'nd'
	                        : b === 3
	                        ? 'rd'
	                        : 'th';
	            return number + output;
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4, // The week that contains Jan 4th is the first week of the year.
	        },
	    });
	
	    return enNz;
	
	})));


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : English (Singapore) [en-sg]
	//! author : Matthew Castrillon-Madrigal : https://github.com/techdimension
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var enSg = moment.defineLocale('en-sg', {
	        months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split(
	            '_'
	        ),
	        monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
	        weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split(
	            '_'
	        ),
	        weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
	        weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd, D MMMM YYYY HH:mm',
	        },
	        calendar: {
	            sameDay: '[Today at] LT',
	            nextDay: '[Tomorrow at] LT',
	            nextWeek: 'dddd [at] LT',
	            lastDay: '[Yesterday at] LT',
	            lastWeek: '[Last] dddd [at] LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: 'in %s',
	            past: '%s ago',
	            s: 'a few seconds',
	            ss: '%d seconds',
	            m: 'a minute',
	            mm: '%d minutes',
	            h: 'an hour',
	            hh: '%d hours',
	            d: 'a day',
	            dd: '%d days',
	            M: 'a month',
	            MM: '%d months',
	            y: 'a year',
	            yy: '%d years',
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
	        ordinal: function (number) {
	            var b = number % 10,
	                output =
	                    ~~((number % 100) / 10) === 1
	                        ? 'th'
	                        : b === 1
	                        ? 'st'
	                        : b === 2
	                        ? 'nd'
	                        : b === 3
	                        ? 'rd'
	                        : 'th';
	            return number + output;
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4, // The week that contains Jan 4th is the first week of the year.
	        },
	    });
	
	    return enSg;
	
	})));


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Esperanto [eo]
	//! author : Colin Dean : https://github.com/colindean
	//! author : Mia Nordentoft Imperatori : https://github.com/miestasmia
	//! comment : miestasmia corrected the translation by colindean
	//! comment : Vivakvo corrected the translation by colindean and miestasmia
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var eo = moment.defineLocale('eo', {
	        months: 'januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro'.split(
	            '_'
	        ),
	        monthsShort: 'jan_feb_mart_apr_maj_jun_jul_aŭg_sept_okt_nov_dec'.split('_'),
	        weekdays: 'dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato'.split('_'),
	        weekdaysShort: 'dim_lun_mard_merk_ĵaŭ_ven_sab'.split('_'),
	        weekdaysMin: 'di_lu_ma_me_ĵa_ve_sa'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'YYYY-MM-DD',
	            LL: '[la] D[-an de] MMMM, YYYY',
	            LLL: '[la] D[-an de] MMMM, YYYY HH:mm',
	            LLLL: 'dddd[n], [la] D[-an de] MMMM, YYYY HH:mm',
	            llll: 'ddd, [la] D[-an de] MMM, YYYY HH:mm',
	        },
	        meridiemParse: /[ap]\.t\.m/i,
	        isPM: function (input) {
	            return input.charAt(0).toLowerCase() === 'p';
	        },
	        meridiem: function (hours, minutes, isLower) {
	            if (hours > 11) {
	                return isLower ? 'p.t.m.' : 'P.T.M.';
	            } else {
	                return isLower ? 'a.t.m.' : 'A.T.M.';
	            }
	        },
	        calendar: {
	            sameDay: '[Hodiaŭ je] LT',
	            nextDay: '[Morgaŭ je] LT',
	            nextWeek: 'dddd[n je] LT',
	            lastDay: '[Hieraŭ je] LT',
	            lastWeek: '[pasintan] dddd[n je] LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: 'post %s',
	            past: 'antaŭ %s',
	            s: 'kelkaj sekundoj',
	            ss: '%d sekundoj',
	            m: 'unu minuto',
	            mm: '%d minutoj',
	            h: 'unu horo',
	            hh: '%d horoj',
	            d: 'unu tago', //ne 'diurno', ĉar estas uzita por proksimumo
	            dd: '%d tagoj',
	            M: 'unu monato',
	            MM: '%d monatoj',
	            y: 'unu jaro',
	            yy: '%d jaroj',
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}a/,
	        ordinal: '%da',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 7, // The week that contains Jan 7th is the first week of the year.
	        },
	    });
	
	    return eo;
	
	})));


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Spanish [es]
	//! author : Julio Napurí : https://github.com/julionc
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var monthsShortDot = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split(
	            '_'
	        ),
	        monthsShort = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_'),
	        monthsParse = [
	            /^ene/i,
	            /^feb/i,
	            /^mar/i,
	            /^abr/i,
	            /^may/i,
	            /^jun/i,
	            /^jul/i,
	            /^ago/i,
	            /^sep/i,
	            /^oct/i,
	            /^nov/i,
	            /^dic/i,
	        ],
	        monthsRegex = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
	
	    var es = moment.defineLocale('es', {
	        months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split(
	            '_'
	        ),
	        monthsShort: function (m, format) {
	            if (!m) {
	                return monthsShortDot;
	            } else if (/-MMM-/.test(format)) {
	                return monthsShort[m.month()];
	            } else {
	                return monthsShortDot[m.month()];
	            }
	        },
	        monthsRegex: monthsRegex,
	        monthsShortRegex: monthsRegex,
	        monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
	        monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
	        monthsParse: monthsParse,
	        longMonthsParse: monthsParse,
	        shortMonthsParse: monthsParse,
	        weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
	        weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
	        weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
	        weekdaysParseExact: true,
	        longDateFormat: {
	            LT: 'H:mm',
	            LTS: 'H:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D [de] MMMM [de] YYYY',
	            LLL: 'D [de] MMMM [de] YYYY H:mm',
	            LLLL: 'dddd, D [de] MMMM [de] YYYY H:mm',
	        },
	        calendar: {
	            sameDay: function () {
	                return '[hoy a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
	            },
	            nextDay: function () {
	                return '[mañana a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
	            },
	            nextWeek: function () {
	                return 'dddd [a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
	            },
	            lastDay: function () {
	                return '[ayer a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
	            },
	            lastWeek: function () {
	                return (
	                    '[el] dddd [pasado a la' +
	                    (this.hours() !== 1 ? 's' : '') +
	                    '] LT'
	                );
	            },
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: 'en %s',
	            past: 'hace %s',
	            s: 'unos segundos',
	            ss: '%d segundos',
	            m: 'un minuto',
	            mm: '%d minutos',
	            h: 'una hora',
	            hh: '%d horas',
	            d: 'un día',
	            dd: '%d días',
	            M: 'un mes',
	            MM: '%d meses',
	            y: 'un año',
	            yy: '%d años',
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}º/,
	        ordinal: '%dº',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4, // The week that contains Jan 4th is the first week of the year.
	        },
	        invalidDate: 'Fecha invalida',
	    });
	
	    return es;
	
	})));


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Spanish (Dominican Republic) [es-do]
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var monthsShortDot = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split(
	            '_'
	        ),
	        monthsShort = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_'),
	        monthsParse = [
	            /^ene/i,
	            /^feb/i,
	            /^mar/i,
	            /^abr/i,
	            /^may/i,
	            /^jun/i,
	            /^jul/i,
	            /^ago/i,
	            /^sep/i,
	            /^oct/i,
	            /^nov/i,
	            /^dic/i,
	        ],
	        monthsRegex = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
	
	    var esDo = moment.defineLocale('es-do', {
	        months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split(
	            '_'
	        ),
	        monthsShort: function (m, format) {
	            if (!m) {
	                return monthsShortDot;
	            } else if (/-MMM-/.test(format)) {
	                return monthsShort[m.month()];
	            } else {
	                return monthsShortDot[m.month()];
	            }
	        },
	        monthsRegex: monthsRegex,
	        monthsShortRegex: monthsRegex,
	        monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
	        monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
	        monthsParse: monthsParse,
	        longMonthsParse: monthsParse,
	        shortMonthsParse: monthsParse,
	        weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
	        weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
	        weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
	        weekdaysParseExact: true,
	        longDateFormat: {
	            LT: 'h:mm A',
	            LTS: 'h:mm:ss A',
	            L: 'DD/MM/YYYY',
	            LL: 'D [de] MMMM [de] YYYY',
	            LLL: 'D [de] MMMM [de] YYYY h:mm A',
	            LLLL: 'dddd, D [de] MMMM [de] YYYY h:mm A',
	        },
	        calendar: {
	            sameDay: function () {
	                return '[hoy a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
	            },
	            nextDay: function () {
	                return '[mañana a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
	            },
	            nextWeek: function () {
	                return 'dddd [a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
	            },
	            lastDay: function () {
	                return '[ayer a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
	            },
	            lastWeek: function () {
	                return (
	                    '[el] dddd [pasado a la' +
	                    (this.hours() !== 1 ? 's' : '') +
	                    '] LT'
	                );
	            },
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: 'en %s',
	            past: 'hace %s',
	            s: 'unos segundos',
	            ss: '%d segundos',
	            m: 'un minuto',
	            mm: '%d minutos',
	            h: 'una hora',
	            hh: '%d horas',
	            d: 'un día',
	            dd: '%d días',
	            M: 'un mes',
	            MM: '%d meses',
	            y: 'un año',
	            yy: '%d años',
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}º/,
	        ordinal: '%dº',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4, // The week that contains Jan 4th is the first week of the year.
	        },
	    });
	
	    return esDo;
	
	})));


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Spanish (United States) [es-us]
	//! author : bustta : https://github.com/bustta
	//! author : chrisrodz : https://github.com/chrisrodz
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var monthsShortDot = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split(
	            '_'
	        ),
	        monthsShort = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_'),
	        monthsParse = [
	            /^ene/i,
	            /^feb/i,
	            /^mar/i,
	            /^abr/i,
	            /^may/i,
	            /^jun/i,
	            /^jul/i,
	            /^ago/i,
	            /^sep/i,
	            /^oct/i,
	            /^nov/i,
	            /^dic/i,
	        ],
	        monthsRegex = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
	
	    var esUs = moment.defineLocale('es-us', {
	        months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split(
	            '_'
	        ),
	        monthsShort: function (m, format) {
	            if (!m) {
	                return monthsShortDot;
	            } else if (/-MMM-/.test(format)) {
	                return monthsShort[m.month()];
	            } else {
	                return monthsShortDot[m.month()];
	            }
	        },
	        monthsRegex: monthsRegex,
	        monthsShortRegex: monthsRegex,
	        monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
	        monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
	        monthsParse: monthsParse,
	        longMonthsParse: monthsParse,
	        shortMonthsParse: monthsParse,
	        weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
	        weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
	        weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
	        weekdaysParseExact: true,
	        longDateFormat: {
	            LT: 'h:mm A',
	            LTS: 'h:mm:ss A',
	            L: 'MM/DD/YYYY',
	            LL: 'D [de] MMMM [de] YYYY',
	            LLL: 'D [de] MMMM [de] YYYY h:mm A',
	            LLLL: 'dddd, D [de] MMMM [de] YYYY h:mm A',
	        },
	        calendar: {
	            sameDay: function () {
	                return '[hoy a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
	            },
	            nextDay: function () {
	                return '[mañana a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
	            },
	            nextWeek: function () {
	                return 'dddd [a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
	            },
	            lastDay: function () {
	                return '[ayer a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
	            },
	            lastWeek: function () {
	                return (
	                    '[el] dddd [pasado a la' +
	                    (this.hours() !== 1 ? 's' : '') +
	                    '] LT'
	                );
	            },
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: 'en %s',
	            past: 'hace %s',
	            s: 'unos segundos',
	            ss: '%d segundos',
	            m: 'un minuto',
	            mm: '%d minutos',
	            h: 'una hora',
	            hh: '%d horas',
	            d: 'un día',
	            dd: '%d días',
	            M: 'un mes',
	            MM: '%d meses',
	            y: 'un año',
	            yy: '%d años',
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}º/,
	        ordinal: '%dº',
	        week: {
	            dow: 0, // Sunday is the first day of the week.
	            doy: 6, // The week that contains Jan 6th is the first week of the year.
	        },
	    });
	
	    return esUs;
	
	})));


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Estonian [et]
	//! author : Henry Kehlmann : https://github.com/madhenry
	//! improvements : Illimar Tambek : https://github.com/ragulka
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    function processRelativeTime(number, withoutSuffix, key, isFuture) {
	        var format = {
	            s: ['mõne sekundi', 'mõni sekund', 'paar sekundit'],
	            ss: [number + 'sekundi', number + 'sekundit'],
	            m: ['ühe minuti', 'üks minut'],
	            mm: [number + ' minuti', number + ' minutit'],
	            h: ['ühe tunni', 'tund aega', 'üks tund'],
	            hh: [number + ' tunni', number + ' tundi'],
	            d: ['ühe päeva', 'üks päev'],
	            M: ['kuu aja', 'kuu aega', 'üks kuu'],
	            MM: [number + ' kuu', number + ' kuud'],
	            y: ['ühe aasta', 'aasta', 'üks aasta'],
	            yy: [number + ' aasta', number + ' aastat'],
	        };
	        if (withoutSuffix) {
	            return format[key][2] ? format[key][2] : format[key][1];
	        }
	        return isFuture ? format[key][0] : format[key][1];
	    }
	
	    var et = moment.defineLocale('et', {
	        months: 'jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember'.split(
	            '_'
	        ),
	        monthsShort: 'jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets'.split(
	            '_'
	        ),
	        weekdays: 'pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev'.split(
	            '_'
	        ),
	        weekdaysShort: 'P_E_T_K_N_R_L'.split('_'),
	        weekdaysMin: 'P_E_T_K_N_R_L'.split('_'),
	        longDateFormat: {
	            LT: 'H:mm',
	            LTS: 'H:mm:ss',
	            L: 'DD.MM.YYYY',
	            LL: 'D. MMMM YYYY',
	            LLL: 'D. MMMM YYYY H:mm',
	            LLLL: 'dddd, D. MMMM YYYY H:mm',
	        },
	        calendar: {
	            sameDay: '[Täna,] LT',
	            nextDay: '[Homme,] LT',
	            nextWeek: '[Järgmine] dddd LT',
	            lastDay: '[Eile,] LT',
	            lastWeek: '[Eelmine] dddd LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: '%s pärast',
	            past: '%s tagasi',
	            s: processRelativeTime,
	            ss: processRelativeTime,
	            m: processRelativeTime,
	            mm: processRelativeTime,
	            h: processRelativeTime,
	            hh: processRelativeTime,
	            d: processRelativeTime,
	            dd: '%d päeva',
	            M: processRelativeTime,
	            MM: processRelativeTime,
	            y: processRelativeTime,
	            yy: processRelativeTime,
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}\./,
	        ordinal: '%d.',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4, // The week that contains Jan 4th is the first week of the year.
	        },
	    });
	
	    return et;
	
	})));


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Basque [eu]
	//! author : Eneko Illarramendi : https://github.com/eillarra
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var eu = moment.defineLocale('eu', {
	        months: 'urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua'.split(
	            '_'
	        ),
	        monthsShort: 'urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.'.split(
	            '_'
	        ),
	        monthsParseExact: true,
	        weekdays: 'igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata'.split(
	            '_'
	        ),
	        weekdaysShort: 'ig._al._ar._az._og._ol._lr.'.split('_'),
	        weekdaysMin: 'ig_al_ar_az_og_ol_lr'.split('_'),
	        weekdaysParseExact: true,
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'YYYY-MM-DD',
	            LL: 'YYYY[ko] MMMM[ren] D[a]',
	            LLL: 'YYYY[ko] MMMM[ren] D[a] HH:mm',
	            LLLL: 'dddd, YYYY[ko] MMMM[ren] D[a] HH:mm',
	            l: 'YYYY-M-D',
	            ll: 'YYYY[ko] MMM D[a]',
	            lll: 'YYYY[ko] MMM D[a] HH:mm',
	            llll: 'ddd, YYYY[ko] MMM D[a] HH:mm',
	        },
	        calendar: {
	            sameDay: '[gaur] LT[etan]',
	            nextDay: '[bihar] LT[etan]',
	            nextWeek: 'dddd LT[etan]',
	            lastDay: '[atzo] LT[etan]',
	            lastWeek: '[aurreko] dddd LT[etan]',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: '%s barru',
	            past: 'duela %s',
	            s: 'segundo batzuk',
	            ss: '%d segundo',
	            m: 'minutu bat',
	            mm: '%d minutu',
	            h: 'ordu bat',
	            hh: '%d ordu',
	            d: 'egun bat',
	            dd: '%d egun',
	            M: 'hilabete bat',
	            MM: '%d hilabete',
	            y: 'urte bat',
	            yy: '%d urte',
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}\./,
	        ordinal: '%d.',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 7, // The week that contains Jan 7th is the first week of the year.
	        },
	    });
	
	    return eu;
	
	})));


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Persian [fa]
	//! author : Ebrahim Byagowi : https://github.com/ebraminio
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var symbolMap = {
	            '1': '۱',
	            '2': '۲',
	            '3': '۳',
	            '4': '۴',
	            '5': '۵',
	            '6': '۶',
	            '7': '۷',
	            '8': '۸',
	            '9': '۹',
	            '0': '۰',
	        },
	        numberMap = {
	            '۱': '1',
	            '۲': '2',
	            '۳': '3',
	            '۴': '4',
	            '۵': '5',
	            '۶': '6',
	            '۷': '7',
	            '۸': '8',
	            '۹': '9',
	            '۰': '0',
	        };
	
	    var fa = moment.defineLocale('fa', {
	        months: 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split(
	            '_'
	        ),
	        monthsShort: 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split(
	            '_'
	        ),
	        weekdays: 'یک\u200cشنبه_دوشنبه_سه\u200cشنبه_چهارشنبه_پنج\u200cشنبه_جمعه_شنبه'.split(
	            '_'
	        ),
	        weekdaysShort: 'یک\u200cشنبه_دوشنبه_سه\u200cشنبه_چهارشنبه_پنج\u200cشنبه_جمعه_شنبه'.split(
	            '_'
	        ),
	        weekdaysMin: 'ی_د_س_چ_پ_ج_ش'.split('_'),
	        weekdaysParseExact: true,
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd, D MMMM YYYY HH:mm',
	        },
	        meridiemParse: /قبل از ظهر|بعد از ظهر/,
	        isPM: function (input) {
	            return /بعد از ظهر/.test(input);
	        },
	        meridiem: function (hour, minute, isLower) {
	            if (hour < 12) {
	                return 'قبل از ظهر';
	            } else {
	                return 'بعد از ظهر';
	            }
	        },
	        calendar: {
	            sameDay: '[امروز ساعت] LT',
	            nextDay: '[فردا ساعت] LT',
	            nextWeek: 'dddd [ساعت] LT',
	            lastDay: '[دیروز ساعت] LT',
	            lastWeek: 'dddd [پیش] [ساعت] LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: 'در %s',
	            past: '%s پیش',
	            s: 'چند ثانیه',
	            ss: '%d ثانیه',
	            m: 'یک دقیقه',
	            mm: '%d دقیقه',
	            h: 'یک ساعت',
	            hh: '%d ساعت',
	            d: 'یک روز',
	            dd: '%d روز',
	            M: 'یک ماه',
	            MM: '%d ماه',
	            y: 'یک سال',
	            yy: '%d سال',
	        },
	        preparse: function (string) {
	            return string
	                .replace(/[۰-۹]/g, function (match) {
	                    return numberMap[match];
	                })
	                .replace(/،/g, ',');
	        },
	        postformat: function (string) {
	            return string
	                .replace(/\d/g, function (match) {
	                    return symbolMap[match];
	                })
	                .replace(/,/g, '،');
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}م/,
	        ordinal: '%dم',
	        week: {
	            dow: 6, // Saturday is the first day of the week.
	            doy: 12, // The week that contains Jan 12th is the first week of the year.
	        },
	    });
	
	    return fa;
	
	})));


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Finnish [fi]
	//! author : Tarmo Aidantausta : https://github.com/bleadof
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var numbersPast = 'nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän'.split(
	            ' '
	        ),
	        numbersFuture = [
	            'nolla',
	            'yhden',
	            'kahden',
	            'kolmen',
	            'neljän',
	            'viiden',
	            'kuuden',
	            numbersPast[7],
	            numbersPast[8],
	            numbersPast[9],
	        ];
	    function translate(number, withoutSuffix, key, isFuture) {
	        var result = '';
	        switch (key) {
	            case 's':
	                return isFuture ? 'muutaman sekunnin' : 'muutama sekunti';
	            case 'ss':
	                result = isFuture ? 'sekunnin' : 'sekuntia';
	                break;
	            case 'm':
	                return isFuture ? 'minuutin' : 'minuutti';
	            case 'mm':
	                result = isFuture ? 'minuutin' : 'minuuttia';
	                break;
	            case 'h':
	                return isFuture ? 'tunnin' : 'tunti';
	            case 'hh':
	                result = isFuture ? 'tunnin' : 'tuntia';
	                break;
	            case 'd':
	                return isFuture ? 'päivän' : 'päivä';
	            case 'dd':
	                result = isFuture ? 'päivän' : 'päivää';
	                break;
	            case 'M':
	                return isFuture ? 'kuukauden' : 'kuukausi';
	            case 'MM':
	                result = isFuture ? 'kuukauden' : 'kuukautta';
	                break;
	            case 'y':
	                return isFuture ? 'vuoden' : 'vuosi';
	            case 'yy':
	                result = isFuture ? 'vuoden' : 'vuotta';
	                break;
	        }
	        result = verbalNumber(number, isFuture) + ' ' + result;
	        return result;
	    }
	    function verbalNumber(number, isFuture) {
	        return number < 10
	            ? isFuture
	                ? numbersFuture[number]
	                : numbersPast[number]
	            : number;
	    }
	
	    var fi = moment.defineLocale('fi', {
	        months: 'tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu'.split(
	            '_'
	        ),
	        monthsShort: 'tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu'.split(
	            '_'
	        ),
	        weekdays: 'sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai'.split(
	            '_'
	        ),
	        weekdaysShort: 'su_ma_ti_ke_to_pe_la'.split('_'),
	        weekdaysMin: 'su_ma_ti_ke_to_pe_la'.split('_'),
	        longDateFormat: {
	            LT: 'HH.mm',
	            LTS: 'HH.mm.ss',
	            L: 'DD.MM.YYYY',
	            LL: 'Do MMMM[ta] YYYY',
	            LLL: 'Do MMMM[ta] YYYY, [klo] HH.mm',
	            LLLL: 'dddd, Do MMMM[ta] YYYY, [klo] HH.mm',
	            l: 'D.M.YYYY',
	            ll: 'Do MMM YYYY',
	            lll: 'Do MMM YYYY, [klo] HH.mm',
	            llll: 'ddd, Do MMM YYYY, [klo] HH.mm',
	        },
	        calendar: {
	            sameDay: '[tänään] [klo] LT',
	            nextDay: '[huomenna] [klo] LT',
	            nextWeek: 'dddd [klo] LT',
	            lastDay: '[eilen] [klo] LT',
	            lastWeek: '[viime] dddd[na] [klo] LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: '%s päästä',
	            past: '%s sitten',
	            s: translate,
	            ss: translate,
	            m: translate,
	            mm: translate,
	            h: translate,
	            hh: translate,
	            d: translate,
	            dd: translate,
	            M: translate,
	            MM: translate,
	            y: translate,
	            yy: translate,
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}\./,
	        ordinal: '%d.',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4, // The week that contains Jan 4th is the first week of the year.
	        },
	    });
	
	    return fi;
	
	})));


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Filipino [fil]
	//! author : Dan Hagman : https://github.com/hagmandan
	//! author : Matthew Co : https://github.com/matthewdeeco
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var fil = moment.defineLocale('fil', {
	        months: 'Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre'.split(
	            '_'
	        ),
	        monthsShort: 'Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis'.split('_'),
	        weekdays: 'Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado'.split(
	            '_'
	        ),
	        weekdaysShort: 'Lin_Lun_Mar_Miy_Huw_Biy_Sab'.split('_'),
	        weekdaysMin: 'Li_Lu_Ma_Mi_Hu_Bi_Sab'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'MM/D/YYYY',
	            LL: 'MMMM D, YYYY',
	            LLL: 'MMMM D, YYYY HH:mm',
	            LLLL: 'dddd, MMMM DD, YYYY HH:mm',
	        },
	        calendar: {
	            sameDay: 'LT [ngayong araw]',
	            nextDay: '[Bukas ng] LT',
	            nextWeek: 'LT [sa susunod na] dddd',
	            lastDay: 'LT [kahapon]',
	            lastWeek: 'LT [noong nakaraang] dddd',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: 'sa loob ng %s',
	            past: '%s ang nakalipas',
	            s: 'ilang segundo',
	            ss: '%d segundo',
	            m: 'isang minuto',
	            mm: '%d minuto',
	            h: 'isang oras',
	            hh: '%d oras',
	            d: 'isang araw',
	            dd: '%d araw',
	            M: 'isang buwan',
	            MM: '%d buwan',
	            y: 'isang taon',
	            yy: '%d taon',
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}/,
	        ordinal: function (number) {
	            return number;
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4, // The week that contains Jan 4th is the first week of the year.
	        },
	    });
	
	    return fil;
	
	})));


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Faroese [fo]
	//! author : Ragnar Johannesen : https://github.com/ragnar123
	//! author : Kristian Sakarisson : https://github.com/sakarisson
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var fo = moment.defineLocale('fo', {
	        months: 'januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember'.split(
	            '_'
	        ),
	        monthsShort: 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
	        weekdays: 'sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur'.split(
	            '_'
	        ),
	        weekdaysShort: 'sun_mán_týs_mik_hós_frí_ley'.split('_'),
	        weekdaysMin: 'su_má_tý_mi_hó_fr_le'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd D. MMMM, YYYY HH:mm',
	        },
	        calendar: {
	            sameDay: '[Í dag kl.] LT',
	            nextDay: '[Í morgin kl.] LT',
	            nextWeek: 'dddd [kl.] LT',
	            lastDay: '[Í gjár kl.] LT',
	            lastWeek: '[síðstu] dddd [kl] LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: 'um %s',
	            past: '%s síðani',
	            s: 'fá sekund',
	            ss: '%d sekundir',
	            m: 'ein minuttur',
	            mm: '%d minuttir',
	            h: 'ein tími',
	            hh: '%d tímar',
	            d: 'ein dagur',
	            dd: '%d dagar',
	            M: 'ein mánaður',
	            MM: '%d mánaðir',
	            y: 'eitt ár',
	            yy: '%d ár',
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}\./,
	        ordinal: '%d.',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4, // The week that contains Jan 4th is the first week of the year.
	        },
	    });
	
	    return fo;
	
	})));


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : French [fr]
	//! author : John Fischer : https://github.com/jfroffice
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var monthsStrictRegex = /^(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i,
	        monthsShortStrictRegex = /(janv\.?|févr\.?|mars|avr\.?|mai|juin|juil\.?|août|sept\.?|oct\.?|nov\.?|déc\.?)/i,
	        monthsRegex = /(janv\.?|févr\.?|mars|avr\.?|mai|juin|juil\.?|août|sept\.?|oct\.?|nov\.?|déc\.?|janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i,
	        monthsParse = [
	            /^janv/i,
	            /^févr/i,
	            /^mars/i,
	            /^avr/i,
	            /^mai/i,
	            /^juin/i,
	            /^juil/i,
	            /^août/i,
	            /^sept/i,
	            /^oct/i,
	            /^nov/i,
	            /^déc/i,
	        ];
	
	    var fr = moment.defineLocale('fr', {
	        months: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split(
	            '_'
	        ),
	        monthsShort: 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split(
	            '_'
	        ),
	        monthsRegex: monthsRegex,
	        monthsShortRegex: monthsRegex,
	        monthsStrictRegex: monthsStrictRegex,
	        monthsShortStrictRegex: monthsShortStrictRegex,
	        monthsParse: monthsParse,
	        longMonthsParse: monthsParse,
	        shortMonthsParse: monthsParse,
	        weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
	        weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
	        weekdaysMin: 'di_lu_ma_me_je_ve_sa'.split('_'),
	        weekdaysParseExact: true,
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd D MMMM YYYY HH:mm',
	        },
	        calendar: {
	            sameDay: '[Aujourd’hui à] LT',
	            nextDay: '[Demain à] LT',
	            nextWeek: 'dddd [à] LT',
	            lastDay: '[Hier à] LT',
	            lastWeek: 'dddd [dernier à] LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: 'dans %s',
	            past: 'il y a %s',
	            s: 'quelques secondes',
	            ss: '%d secondes',
	            m: 'une minute',
	            mm: '%d minutes',
	            h: 'une heure',
	            hh: '%d heures',
	            d: 'un jour',
	            dd: '%d jours',
	            M: 'un mois',
	            MM: '%d mois',
	            y: 'un an',
	            yy: '%d ans',
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
	        ordinal: function (number, period) {
	            switch (period) {
	                // TODO: Return 'e' when day of month > 1. Move this case inside
	                // block for masculine words below.
	                // See https://github.com/moment/moment/issues/3375
	                case 'D':
	                    return number + (number === 1 ? 'er' : '');
	
	                // Words with masculine grammatical gender: mois, trimestre, jour
	                default:
	                case 'M':
	                case 'Q':
	                case 'DDD':
	                case 'd':
	                    return number + (number === 1 ? 'er' : 'e');
	
	                // Words with feminine grammatical gender: semaine
	                case 'w':
	                case 'W':
	                    return number + (number === 1 ? 're' : 'e');
	            }
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4, // The week that contains Jan 4th is the first week of the year.
	        },
	    });
	
	    return fr;
	
	})));


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : French (Canada) [fr-ca]
	//! author : Jonathan Abourbih : https://github.com/jonbca
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var frCa = moment.defineLocale('fr-ca', {
	        months: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split(
	            '_'
	        ),
	        monthsShort: 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split(
	            '_'
	        ),
	        monthsParseExact: true,
	        weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
	        weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
	        weekdaysMin: 'di_lu_ma_me_je_ve_sa'.split('_'),
	        weekdaysParseExact: true,
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'YYYY-MM-DD',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd D MMMM YYYY HH:mm',
	        },
	        calendar: {
	            sameDay: '[Aujourd’hui à] LT',
	            nextDay: '[Demain à] LT',
	            nextWeek: 'dddd [à] LT',
	            lastDay: '[Hier à] LT',
	            lastWeek: 'dddd [dernier à] LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: 'dans %s',
	            past: 'il y a %s',
	            s: 'quelques secondes',
	            ss: '%d secondes',
	            m: 'une minute',
	            mm: '%d minutes',
	            h: 'une heure',
	            hh: '%d heures',
	            d: 'un jour',
	            dd: '%d jours',
	            M: 'un mois',
	            MM: '%d mois',
	            y: 'un an',
	            yy: '%d ans',
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
	        ordinal: function (number, period) {
	            switch (period) {
	                // Words with masculine grammatical gender: mois, trimestre, jour
	                default:
	                case 'M':
	                case 'Q':
	                case 'D':
	                case 'DDD':
	                case 'd':
	                    return number + (number === 1 ? 'er' : 'e');
	
	                // Words with feminine grammatical gender: semaine
	                case 'w':
	                case 'W':
	                    return number + (number === 1 ? 're' : 'e');
	            }
	        },
	    });
	
	    return frCa;
	
	})));


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : French (Switzerland) [fr-ch]
	//! author : Gaspard Bucher : https://github.com/gaspard
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var frCh = moment.defineLocale('fr-ch', {
	        months: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split(
	            '_'
	        ),
	        monthsShort: 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split(
	            '_'
	        ),
	        monthsParseExact: true,
	        weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
	        weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
	        weekdaysMin: 'di_lu_ma_me_je_ve_sa'.split('_'),
	        weekdaysParseExact: true,
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD.MM.YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd D MMMM YYYY HH:mm',
	        },
	        calendar: {
	            sameDay: '[Aujourd’hui à] LT',
	            nextDay: '[Demain à] LT',
	            nextWeek: 'dddd [à] LT',
	            lastDay: '[Hier à] LT',
	            lastWeek: 'dddd [dernier à] LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: 'dans %s',
	            past: 'il y a %s',
	            s: 'quelques secondes',
	            ss: '%d secondes',
	            m: 'une minute',
	            mm: '%d minutes',
	            h: 'une heure',
	            hh: '%d heures',
	            d: 'un jour',
	            dd: '%d jours',
	            M: 'un mois',
	            MM: '%d mois',
	            y: 'un an',
	            yy: '%d ans',
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
	        ordinal: function (number, period) {
	            switch (period) {
	                // Words with masculine grammatical gender: mois, trimestre, jour
	                default:
	                case 'M':
	                case 'Q':
	                case 'D':
	                case 'DDD':
	                case 'd':
	                    return number + (number === 1 ? 'er' : 'e');
	
	                // Words with feminine grammatical gender: semaine
	                case 'w':
	                case 'W':
	                    return number + (number === 1 ? 're' : 'e');
	            }
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4, // The week that contains Jan 4th is the first week of the year.
	        },
	    });
	
	    return frCh;
	
	})));


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Frisian [fy]
	//! author : Robin van der Vliet : https://github.com/robin0van0der0v
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var monthsShortWithDots = 'jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.'.split(
	            '_'
	        ),
	        monthsShortWithoutDots = 'jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des'.split(
	            '_'
	        );
	
	    var fy = moment.defineLocale('fy', {
	        months: 'jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber'.split(
	            '_'
	        ),
	        monthsShort: function (m, format) {
	            if (!m) {
	                return monthsShortWithDots;
	            } else if (/-MMM-/.test(format)) {
	                return monthsShortWithoutDots[m.month()];
	            } else {
	                return monthsShortWithDots[m.month()];
	            }
	        },
	        monthsParseExact: true,
	        weekdays: 'snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon'.split(
	            '_'
	        ),
	        weekdaysShort: 'si._mo._ti._wo._to._fr._so.'.split('_'),
	        weekdaysMin: 'Si_Mo_Ti_Wo_To_Fr_So'.split('_'),
	        weekdaysParseExact: true,
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD-MM-YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd D MMMM YYYY HH:mm',
	        },
	        calendar: {
	            sameDay: '[hjoed om] LT',
	            nextDay: '[moarn om] LT',
	            nextWeek: 'dddd [om] LT',
	            lastDay: '[juster om] LT',
	            lastWeek: '[ôfrûne] dddd [om] LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: 'oer %s',
	            past: '%s lyn',
	            s: 'in pear sekonden',
	            ss: '%d sekonden',
	            m: 'ien minút',
	            mm: '%d minuten',
	            h: 'ien oere',
	            hh: '%d oeren',
	            d: 'ien dei',
	            dd: '%d dagen',
	            M: 'ien moanne',
	            MM: '%d moannen',
	            y: 'ien jier',
	            yy: '%d jierren',
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
	        ordinal: function (number) {
	            return (
	                number +
	                (number === 1 || number === 8 || number >= 20 ? 'ste' : 'de')
	            );
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4, // The week that contains Jan 4th is the first week of the year.
	        },
	    });
	
	    return fy;
	
	})));


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Irish or Irish Gaelic [ga]
	//! author : André Silva : https://github.com/askpt
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var months = [
	            'Eanáir',
	            'Feabhra',
	            'Márta',
	            'Aibreán',
	            'Bealtaine',
	            'Meitheamh',
	            'Iúil',
	            'Lúnasa',
	            'Meán Fómhair',
	            'Deireadh Fómhair',
	            'Samhain',
	            'Nollaig',
	        ],
	        monthsShort = [
	            'Ean',
	            'Feabh',
	            'Márt',
	            'Aib',
	            'Beal',
	            'Meith',
	            'Iúil',
	            'Lún',
	            'M.F.',
	            'D.F.',
	            'Samh',
	            'Noll',
	        ],
	        weekdays = [
	            'Dé Domhnaigh',
	            'Dé Luain',
	            'Dé Máirt',
	            'Dé Céadaoin',
	            'Déardaoin',
	            'Dé hAoine',
	            'Dé Sathairn',
	        ],
	        weekdaysShort = ['Domh', 'Luan', 'Máirt', 'Céad', 'Déar', 'Aoine', 'Sath'],
	        weekdaysMin = ['Do', 'Lu', 'Má', 'Cé', 'Dé', 'A', 'Sa'];
	
	    var ga = moment.defineLocale('ga', {
	        months: months,
	        monthsShort: monthsShort,
	        monthsParseExact: true,
	        weekdays: weekdays,
	        weekdaysShort: weekdaysShort,
	        weekdaysMin: weekdaysMin,
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd, D MMMM YYYY HH:mm',
	        },
	        calendar: {
	            sameDay: '[Inniu ag] LT',
	            nextDay: '[Amárach ag] LT',
	            nextWeek: 'dddd [ag] LT',
	            lastDay: '[Inné ag] LT',
	            lastWeek: 'dddd [seo caite] [ag] LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: 'i %s',
	            past: '%s ó shin',
	            s: 'cúpla soicind',
	            ss: '%d soicind',
	            m: 'nóiméad',
	            mm: '%d nóiméad',
	            h: 'uair an chloig',
	            hh: '%d uair an chloig',
	            d: 'lá',
	            dd: '%d lá',
	            M: 'mí',
	            MM: '%d míonna',
	            y: 'bliain',
	            yy: '%d bliain',
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
	        ordinal: function (number) {
	            var output = number === 1 ? 'd' : number % 10 === 2 ? 'na' : 'mh';
	            return number + output;
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4, // The week that contains Jan 4th is the first week of the year.
	        },
	    });
	
	    return ga;
	
	})));


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Scottish Gaelic [gd]
	//! author : Jon Ashdown : https://github.com/jonashdown
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var months = [
	            'Am Faoilleach',
	            'An Gearran',
	            'Am Màrt',
	            'An Giblean',
	            'An Cèitean',
	            'An t-Ògmhios',
	            'An t-Iuchar',
	            'An Lùnastal',
	            'An t-Sultain',
	            'An Dàmhair',
	            'An t-Samhain',
	            'An Dùbhlachd',
	        ],
	        monthsShort = [
	            'Faoi',
	            'Gear',
	            'Màrt',
	            'Gibl',
	            'Cèit',
	            'Ògmh',
	            'Iuch',
	            'Lùn',
	            'Sult',
	            'Dàmh',
	            'Samh',
	            'Dùbh',
	        ],
	        weekdays = [
	            'Didòmhnaich',
	            'Diluain',
	            'Dimàirt',
	            'Diciadain',
	            'Diardaoin',
	            'Dihaoine',
	            'Disathairne',
	        ],
	        weekdaysShort = ['Did', 'Dil', 'Dim', 'Dic', 'Dia', 'Dih', 'Dis'],
	        weekdaysMin = ['Dò', 'Lu', 'Mà', 'Ci', 'Ar', 'Ha', 'Sa'];
	
	    var gd = moment.defineLocale('gd', {
	        months: months,
	        monthsShort: monthsShort,
	        monthsParseExact: true,
	        weekdays: weekdays,
	        weekdaysShort: weekdaysShort,
	        weekdaysMin: weekdaysMin,
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd, D MMMM YYYY HH:mm',
	        },
	        calendar: {
	            sameDay: '[An-diugh aig] LT',
	            nextDay: '[A-màireach aig] LT',
	            nextWeek: 'dddd [aig] LT',
	            lastDay: '[An-dè aig] LT',
	            lastWeek: 'dddd [seo chaidh] [aig] LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: 'ann an %s',
	            past: 'bho chionn %s',
	            s: 'beagan diogan',
	            ss: '%d diogan',
	            m: 'mionaid',
	            mm: '%d mionaidean',
	            h: 'uair',
	            hh: '%d uairean',
	            d: 'latha',
	            dd: '%d latha',
	            M: 'mìos',
	            MM: '%d mìosan',
	            y: 'bliadhna',
	            yy: '%d bliadhna',
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
	        ordinal: function (number) {
	            var output = number === 1 ? 'd' : number % 10 === 2 ? 'na' : 'mh';
	            return number + output;
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4, // The week that contains Jan 4th is the first week of the year.
	        },
	    });
	
	    return gd;
	
	})));


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Galician [gl]
	//! author : Juan G. Hurtado : https://github.com/juanghurtado
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var gl = moment.defineLocale('gl', {
	        months: 'xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro'.split(
	            '_'
	        ),
	        monthsShort: 'xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.'.split(
	            '_'
	        ),
	        monthsParseExact: true,
	        weekdays: 'domingo_luns_martes_mércores_xoves_venres_sábado'.split('_'),
	        weekdaysShort: 'dom._lun._mar._mér._xov._ven._sáb.'.split('_'),
	        weekdaysMin: 'do_lu_ma_mé_xo_ve_sá'.split('_'),
	        weekdaysParseExact: true,
	        longDateFormat: {
	            LT: 'H:mm',
	            LTS: 'H:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D [de] MMMM [de] YYYY',
	            LLL: 'D [de] MMMM [de] YYYY H:mm',
	            LLLL: 'dddd, D [de] MMMM [de] YYYY H:mm',
	        },
	        calendar: {
	            sameDay: function () {
	                return '[hoxe ' + (this.hours() !== 1 ? 'ás' : 'á') + '] LT';
	            },
	            nextDay: function () {
	                return '[mañá ' + (this.hours() !== 1 ? 'ás' : 'á') + '] LT';
	            },
	            nextWeek: function () {
	                return 'dddd [' + (this.hours() !== 1 ? 'ás' : 'a') + '] LT';
	            },
	            lastDay: function () {
	                return '[onte ' + (this.hours() !== 1 ? 'á' : 'a') + '] LT';
	            },
	            lastWeek: function () {
	                return (
	                    '[o] dddd [pasado ' + (this.hours() !== 1 ? 'ás' : 'a') + '] LT'
	                );
	            },
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: function (str) {
	                if (str.indexOf('un') === 0) {
	                    return 'n' + str;
	                }
	                return 'en ' + str;
	            },
	            past: 'hai %s',
	            s: 'uns segundos',
	            ss: '%d segundos',
	            m: 'un minuto',
	            mm: '%d minutos',
	            h: 'unha hora',
	            hh: '%d horas',
	            d: 'un día',
	            dd: '%d días',
	            M: 'un mes',
	            MM: '%d meses',
	            y: 'un ano',
	            yy: '%d anos',
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}º/,
	        ordinal: '%dº',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4, // The week that contains Jan 4th is the first week of the year.
	        },
	    });
	
	    return gl;
	
	})));


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Konkani Devanagari script [gom-deva]
	//! author : The Discoverer : https://github.com/WikiDiscoverer
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    function processRelativeTime(number, withoutSuffix, key, isFuture) {
	        var format = {
	            s: ['थोडया सॅकंडांनी', 'थोडे सॅकंड'],
	            ss: [number + ' सॅकंडांनी', number + ' सॅकंड'],
	            m: ['एका मिणटान', 'एक मिनूट'],
	            mm: [number + ' मिणटांनी', number + ' मिणटां'],
	            h: ['एका वरान', 'एक वर'],
	            hh: [number + ' वरांनी', number + ' वरां'],
	            d: ['एका दिसान', 'एक दीस'],
	            dd: [number + ' दिसांनी', number + ' दीस'],
	            M: ['एका म्हयन्यान', 'एक म्हयनो'],
	            MM: [number + ' म्हयन्यानी', number + ' म्हयने'],
	            y: ['एका वर्सान', 'एक वर्स'],
	            yy: [number + ' वर्सांनी', number + ' वर्सां'],
	        };
	        return isFuture ? format[key][0] : format[key][1];
	    }
	
	    var gomDeva = moment.defineLocale('gom-deva', {
	        months: {
	            standalone: 'जानेवारी_फेब्रुवारी_मार्च_एप्रील_मे_जून_जुलय_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर'.split(
	                '_'
	            ),
	            format: 'जानेवारीच्या_फेब्रुवारीच्या_मार्चाच्या_एप्रीलाच्या_मेयाच्या_जूनाच्या_जुलयाच्या_ऑगस्टाच्या_सप्टेंबराच्या_ऑक्टोबराच्या_नोव्हेंबराच्या_डिसेंबराच्या'.split(
	                '_'
	            ),
	            isFormat: /MMMM(\s)+D[oD]?/,
	        },
	        monthsShort: 'जाने._फेब्रु._मार्च_एप्री._मे_जून_जुल._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.'.split(
	            '_'
	        ),
	        monthsParseExact: true,
	        weekdays: 'आयतार_सोमार_मंगळार_बुधवार_बिरेस्तार_सुक्रार_शेनवार'.split('_'),
	        weekdaysShort: 'आयत._सोम._मंगळ._बुध._ब्रेस्त._सुक्र._शेन.'.split('_'),
	        weekdaysMin: 'आ_सो_मं_बु_ब्रे_सु_शे'.split('_'),
	        weekdaysParseExact: true,
	        longDateFormat: {
	            LT: 'A h:mm [वाजतां]',
	            LTS: 'A h:mm:ss [वाजतां]',
	            L: 'DD-MM-YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY A h:mm [वाजतां]',
	            LLLL: 'dddd, MMMM Do, YYYY, A h:mm [वाजतां]',
	            llll: 'ddd, D MMM YYYY, A h:mm [वाजतां]',
	        },
	        calendar: {
	            sameDay: '[आयज] LT',
	            nextDay: '[फाल्यां] LT',
	            nextWeek: '[फुडलो] dddd[,] LT',
	            lastDay: '[काल] LT',
	            lastWeek: '[फाटलो] dddd[,] LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: '%s',
	            past: '%s आदीं',
	            s: processRelativeTime,
	            ss: processRelativeTime,
	            m: processRelativeTime,
	            mm: processRelativeTime,
	            h: processRelativeTime,
	            hh: processRelativeTime,
	            d: processRelativeTime,
	            dd: processRelativeTime,
	            M: processRelativeTime,
	            MM: processRelativeTime,
	            y: processRelativeTime,
	            yy: processRelativeTime,
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}(वेर)/,
	        ordinal: function (number, period) {
	            switch (period) {
	                // the ordinal 'वेर' only applies to day of the month
	                case 'D':
	                    return number + 'वेर';
	                default:
	                case 'M':
	                case 'Q':
	                case 'DDD':
	                case 'd':
	                case 'w':
	                case 'W':
	                    return number;
	            }
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4, // The week that contains Jan 4th is the first week of the year.
	        },
	        meridiemParse: /राती|सकाळीं|दनपारां|सांजे/,
	        meridiemHour: function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === 'राती') {
	                return hour < 4 ? hour : hour + 12;
	            } else if (meridiem === 'सकाळीं') {
	                return hour;
	            } else if (meridiem === 'दनपारां') {
	                return hour > 12 ? hour : hour + 12;
	            } else if (meridiem === 'सांजे') {
	                return hour + 12;
	            }
	        },
	        meridiem: function (hour, minute, isLower) {
	            if (hour < 4) {
	                return 'राती';
	            } else if (hour < 12) {
	                return 'सकाळीं';
	            } else if (hour < 16) {
	                return 'दनपारां';
	            } else if (hour < 20) {
	                return 'सांजे';
	            } else {
	                return 'राती';
	            }
	        },
	    });
	
	    return gomDeva;
	
	})));


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Konkani Latin script [gom-latn]
	//! author : The Discoverer : https://github.com/WikiDiscoverer
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    function processRelativeTime(number, withoutSuffix, key, isFuture) {
	        var format = {
	            s: ['thoddea sekondamni', 'thodde sekond'],
	            ss: [number + ' sekondamni', number + ' sekond'],
	            m: ['eka mintan', 'ek minut'],
	            mm: [number + ' mintamni', number + ' mintam'],
	            h: ['eka voran', 'ek vor'],
	            hh: [number + ' voramni', number + ' voram'],
	            d: ['eka disan', 'ek dis'],
	            dd: [number + ' disamni', number + ' dis'],
	            M: ['eka mhoinean', 'ek mhoino'],
	            MM: [number + ' mhoineamni', number + ' mhoine'],
	            y: ['eka vorsan', 'ek voros'],
	            yy: [number + ' vorsamni', number + ' vorsam'],
	        };
	        return isFuture ? format[key][0] : format[key][1];
	    }
	
	    var gomLatn = moment.defineLocale('gom-latn', {
	        months: {
	            standalone: 'Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr'.split(
	                '_'
	            ),
	            format: 'Janerachea_Febrerachea_Marsachea_Abrilachea_Maiachea_Junachea_Julaiachea_Agostachea_Setembrachea_Otubrachea_Novembrachea_Dezembrachea'.split(
	                '_'
	            ),
	            isFormat: /MMMM(\s)+D[oD]?/,
	        },
	        monthsShort: 'Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.'.split(
	            '_'
	        ),
	        monthsParseExact: true,
	        weekdays: "Aitar_Somar_Mongllar_Budhvar_Birestar_Sukrar_Son'var".split('_'),
	        weekdaysShort: 'Ait._Som._Mon._Bud._Bre._Suk._Son.'.split('_'),
	        weekdaysMin: 'Ai_Sm_Mo_Bu_Br_Su_Sn'.split('_'),
	        weekdaysParseExact: true,
	        longDateFormat: {
	            LT: 'A h:mm [vazta]',
	            LTS: 'A h:mm:ss [vazta]',
	            L: 'DD-MM-YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY A h:mm [vazta]',
	            LLLL: 'dddd, MMMM Do, YYYY, A h:mm [vazta]',
	            llll: 'ddd, D MMM YYYY, A h:mm [vazta]',
	        },
	        calendar: {
	            sameDay: '[Aiz] LT',
	            nextDay: '[Faleam] LT',
	            nextWeek: '[Fuddlo] dddd[,] LT',
	            lastDay: '[Kal] LT',
	            lastWeek: '[Fattlo] dddd[,] LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: '%s',
	            past: '%s adim',
	            s: processRelativeTime,
	            ss: processRelativeTime,
	            m: processRelativeTime,
	            mm: processRelativeTime,
	            h: processRelativeTime,
	            hh: processRelativeTime,
	            d: processRelativeTime,
	            dd: processRelativeTime,
	            M: processRelativeTime,
	            MM: processRelativeTime,
	            y: processRelativeTime,
	            yy: processRelativeTime,
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}(er)/,
	        ordinal: function (number, period) {
	            switch (period) {
	                // the ordinal 'er' only applies to day of the month
	                case 'D':
	                    return number + 'er';
	                default:
	                case 'M':
	                case 'Q':
	                case 'DDD':
	                case 'd':
	                case 'w':
	                case 'W':
	                    return number;
	            }
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4, // The week that contains Jan 4th is the first week of the year.
	        },
	        meridiemParse: /rati|sokallim|donparam|sanje/,
	        meridiemHour: function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === 'rati') {
	                return hour < 4 ? hour : hour + 12;
	            } else if (meridiem === 'sokallim') {
	                return hour;
	            } else if (meridiem === 'donparam') {
	                return hour > 12 ? hour : hour + 12;
	            } else if (meridiem === 'sanje') {
	                return hour + 12;
	            }
	        },
	        meridiem: function (hour, minute, isLower) {
	            if (hour < 4) {
	                return 'rati';
	            } else if (hour < 12) {
	                return 'sokallim';
	            } else if (hour < 16) {
	                return 'donparam';
	            } else if (hour < 20) {
	                return 'sanje';
	            } else {
	                return 'rati';
	            }
	        },
	    });
	
	    return gomLatn;
	
	})));


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Gujarati [gu]
	//! author : Kaushik Thanki : https://github.com/Kaushik1987
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var symbolMap = {
	            '1': '૧',
	            '2': '૨',
	            '3': '૩',
	            '4': '૪',
	            '5': '૫',
	            '6': '૬',
	            '7': '૭',
	            '8': '૮',
	            '9': '૯',
	            '0': '૦',
	        },
	        numberMap = {
	            '૧': '1',
	            '૨': '2',
	            '૩': '3',
	            '૪': '4',
	            '૫': '5',
	            '૬': '6',
	            '૭': '7',
	            '૮': '8',
	            '૯': '9',
	            '૦': '0',
	        };
	
	    var gu = moment.defineLocale('gu', {
	        months: 'જાન્યુઆરી_ફેબ્રુઆરી_માર્ચ_એપ્રિલ_મે_જૂન_જુલાઈ_ઑગસ્ટ_સપ્ટેમ્બર_ઑક્ટ્બર_નવેમ્બર_ડિસેમ્બર'.split(
	            '_'
	        ),
	        monthsShort: 'જાન્યુ._ફેબ્રુ._માર્ચ_એપ્રિ._મે_જૂન_જુલા._ઑગ._સપ્ટે._ઑક્ટ્._નવે._ડિસે.'.split(
	            '_'
	        ),
	        monthsParseExact: true,
	        weekdays: 'રવિવાર_સોમવાર_મંગળવાર_બુધ્વાર_ગુરુવાર_શુક્રવાર_શનિવાર'.split(
	            '_'
	        ),
	        weekdaysShort: 'રવિ_સોમ_મંગળ_બુધ્_ગુરુ_શુક્ર_શનિ'.split('_'),
	        weekdaysMin: 'ર_સો_મં_બુ_ગુ_શુ_શ'.split('_'),
	        longDateFormat: {
	            LT: 'A h:mm વાગ્યે',
	            LTS: 'A h:mm:ss વાગ્યે',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY, A h:mm વાગ્યે',
	            LLLL: 'dddd, D MMMM YYYY, A h:mm વાગ્યે',
	        },
	        calendar: {
	            sameDay: '[આજ] LT',
	            nextDay: '[કાલે] LT',
	            nextWeek: 'dddd, LT',
	            lastDay: '[ગઇકાલે] LT',
	            lastWeek: '[પાછલા] dddd, LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: '%s મા',
	            past: '%s પહેલા',
	            s: 'અમુક પળો',
	            ss: '%d સેકંડ',
	            m: 'એક મિનિટ',
	            mm: '%d મિનિટ',
	            h: 'એક કલાક',
	            hh: '%d કલાક',
	            d: 'એક દિવસ',
	            dd: '%d દિવસ',
	            M: 'એક મહિનો',
	            MM: '%d મહિનો',
	            y: 'એક વર્ષ',
	            yy: '%d વર્ષ',
	        },
	        preparse: function (string) {
	            return string.replace(/[૧૨૩૪૫૬૭૮૯૦]/g, function (match) {
	                return numberMap[match];
	            });
	        },
	        postformat: function (string) {
	            return string.replace(/\d/g, function (match) {
	                return symbolMap[match];
	            });
	        },
	        // Gujarati notation for meridiems are quite fuzzy in practice. While there exists
	        // a rigid notion of a 'Pahar' it is not used as rigidly in modern Gujarati.
	        meridiemParse: /રાત|બપોર|સવાર|સાંજ/,
	        meridiemHour: function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === 'રાત') {
	                return hour < 4 ? hour : hour + 12;
	            } else if (meridiem === 'સવાર') {
	                return hour;
	            } else if (meridiem === 'બપોર') {
	                return hour >= 10 ? hour : hour + 12;
	            } else if (meridiem === 'સાંજ') {
	                return hour + 12;
	            }
	        },
	        meridiem: function (hour, minute, isLower) {
	            if (hour < 4) {
	                return 'રાત';
	            } else if (hour < 10) {
	                return 'સવાર';
	            } else if (hour < 17) {
	                return 'બપોર';
	            } else if (hour < 20) {
	                return 'સાંજ';
	            } else {
	                return 'રાત';
	            }
	        },
	        week: {
	            dow: 0, // Sunday is the first day of the week.
	            doy: 6, // The week that contains Jan 6th is the first week of the year.
	        },
	    });
	
	    return gu;
	
	})));


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Hebrew [he]
	//! author : Tomer Cohen : https://github.com/tomer
	//! author : Moshe Simantov : https://github.com/DevelopmentIL
	//! author : Tal Ater : https://github.com/TalAter
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var he = moment.defineLocale('he', {
	        months: 'ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר'.split(
	            '_'
	        ),
	        monthsShort: 'ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳'.split(
	            '_'
	        ),
	        weekdays: 'ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת'.split('_'),
	        weekdaysShort: 'א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳'.split('_'),
	        weekdaysMin: 'א_ב_ג_ד_ה_ו_ש'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D [ב]MMMM YYYY',
	            LLL: 'D [ב]MMMM YYYY HH:mm',
	            LLLL: 'dddd, D [ב]MMMM YYYY HH:mm',
	            l: 'D/M/YYYY',
	            ll: 'D MMM YYYY',
	            lll: 'D MMM YYYY HH:mm',
	            llll: 'ddd, D MMM YYYY HH:mm',
	        },
	        calendar: {
	            sameDay: '[היום ב־]LT',
	            nextDay: '[מחר ב־]LT',
	            nextWeek: 'dddd [בשעה] LT',
	            lastDay: '[אתמול ב־]LT',
	            lastWeek: '[ביום] dddd [האחרון בשעה] LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: 'בעוד %s',
	            past: 'לפני %s',
	            s: 'מספר שניות',
	            ss: '%d שניות',
	            m: 'דקה',
	            mm: '%d דקות',
	            h: 'שעה',
	            hh: function (number) {
	                if (number === 2) {
	                    return 'שעתיים';
	                }
	                return number + ' שעות';
	            },
	            d: 'יום',
	            dd: function (number) {
	                if (number === 2) {
	                    return 'יומיים';
	                }
	                return number + ' ימים';
	            },
	            M: 'חודש',
	            MM: function (number) {
	                if (number === 2) {
	                    return 'חודשיים';
	                }
	                return number + ' חודשים';
	            },
	            y: 'שנה',
	            yy: function (number) {
	                if (number === 2) {
	                    return 'שנתיים';
	                } else if (number % 10 === 0 && number !== 10) {
	                    return number + ' שנה';
	                }
	                return number + ' שנים';
	            },
	        },
	        meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
	        isPM: function (input) {
	            return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(input);
	        },
	        meridiem: function (hour, minute, isLower) {
	            if (hour < 5) {
	                return 'לפנות בוקר';
	            } else if (hour < 10) {
	                return 'בבוקר';
	            } else if (hour < 12) {
	                return isLower ? 'לפנה"צ' : 'לפני הצהריים';
	            } else if (hour < 18) {
	                return isLower ? 'אחה"צ' : 'אחרי הצהריים';
	            } else {
	                return 'בערב';
	            }
	        },
	    });
	
	    return he;
	
	})));


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Hindi [hi]
	//! author : Mayank Singhal : https://github.com/mayanksinghal
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var symbolMap = {
	            '1': '१',
	            '2': '२',
	            '3': '३',
	            '4': '४',
	            '5': '५',
	            '6': '६',
	            '7': '७',
	            '8': '८',
	            '9': '९',
	            '0': '०',
	        },
	        numberMap = {
	            '१': '1',
	            '२': '2',
	            '३': '3',
	            '४': '4',
	            '५': '5',
	            '६': '6',
	            '७': '7',
	            '८': '8',
	            '९': '9',
	            '०': '0',
	        };
	
	    var hi = moment.defineLocale('hi', {
	        months: 'जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर'.split(
	            '_'
	        ),
	        monthsShort: 'जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.'.split(
	            '_'
	        ),
	        monthsParseExact: true,
	        weekdays: 'रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),
	        weekdaysShort: 'रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि'.split('_'),
	        weekdaysMin: 'र_सो_मं_बु_गु_शु_श'.split('_'),
	        longDateFormat: {
	            LT: 'A h:mm बजे',
	            LTS: 'A h:mm:ss बजे',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY, A h:mm बजे',
	            LLLL: 'dddd, D MMMM YYYY, A h:mm बजे',
	        },
	        calendar: {
	            sameDay: '[आज] LT',
	            nextDay: '[कल] LT',
	            nextWeek: 'dddd, LT',
	            lastDay: '[कल] LT',
	            lastWeek: '[पिछले] dddd, LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: '%s में',
	            past: '%s पहले',
	            s: 'कुछ ही क्षण',
	            ss: '%d सेकंड',
	            m: 'एक मिनट',
	            mm: '%d मिनट',
	            h: 'एक घंटा',
	            hh: '%d घंटे',
	            d: 'एक दिन',
	            dd: '%d दिन',
	            M: 'एक महीने',
	            MM: '%d महीने',
	            y: 'एक वर्ष',
	            yy: '%d वर्ष',
	        },
	        preparse: function (string) {
	            return string.replace(/[१२३४५६७८९०]/g, function (match) {
	                return numberMap[match];
	            });
	        },
	        postformat: function (string) {
	            return string.replace(/\d/g, function (match) {
	                return symbolMap[match];
	            });
	        },
	        // Hindi notation for meridiems are quite fuzzy in practice. While there exists
	        // a rigid notion of a 'Pahar' it is not used as rigidly in modern Hindi.
	        meridiemParse: /रात|सुबह|दोपहर|शाम/,
	        meridiemHour: function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === 'रात') {
	                return hour < 4 ? hour : hour + 12;
	            } else if (meridiem === 'सुबह') {
	                return hour;
	            } else if (meridiem === 'दोपहर') {
	                return hour >= 10 ? hour : hour + 12;
	            } else if (meridiem === 'शाम') {
	                return hour + 12;
	            }
	        },
	        meridiem: function (hour, minute, isLower) {
	            if (hour < 4) {
	                return 'रात';
	            } else if (hour < 10) {
	                return 'सुबह';
	            } else if (hour < 17) {
	                return 'दोपहर';
	            } else if (hour < 20) {
	                return 'शाम';
	            } else {
	                return 'रात';
	            }
	        },
	        week: {
	            dow: 0, // Sunday is the first day of the week.
	            doy: 6, // The week that contains Jan 6th is the first week of the year.
	        },
	    });
	
	    return hi;
	
	})));


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Croatian [hr]
	//! author : Bojan Marković : https://github.com/bmarkovic
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    function translate(number, withoutSuffix, key) {
	        var result = number + ' ';
	        switch (key) {
	            case 'ss':
	                if (number === 1) {
	                    result += 'sekunda';
	                } else if (number === 2 || number === 3 || number === 4) {
	                    result += 'sekunde';
	                } else {
	                    result += 'sekundi';
	                }
	                return result;
	            case 'm':
	                return withoutSuffix ? 'jedna minuta' : 'jedne minute';
	            case 'mm':
	                if (number === 1) {
	                    result += 'minuta';
	                } else if (number === 2 || number === 3 || number === 4) {
	                    result += 'minute';
	                } else {
	                    result += 'minuta';
	                }
	                return result;
	            case 'h':
	                return withoutSuffix ? 'jedan sat' : 'jednog sata';
	            case 'hh':
	                if (number === 1) {
	                    result += 'sat';
	                } else if (number === 2 || number === 3 || number === 4) {
	                    result += 'sata';
	                } else {
	                    result += 'sati';
	                }
	                return result;
	            case 'dd':
	                if (number === 1) {
	                    result += 'dan';
	                } else {
	                    result += 'dana';
	                }
	                return result;
	            case 'MM':
	                if (number === 1) {
	                    result += 'mjesec';
	                } else if (number === 2 || number === 3 || number === 4) {
	                    result += 'mjeseca';
	                } else {
	                    result += 'mjeseci';
	                }
	                return result;
	            case 'yy':
	                if (number === 1) {
	                    result += 'godina';
	                } else if (number === 2 || number === 3 || number === 4) {
	                    result += 'godine';
	                } else {
	                    result += 'godina';
	                }
	                return result;
	        }
	    }
	
	    var hr = moment.defineLocale('hr', {
	        months: {
	            format: 'siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca'.split(
	                '_'
	            ),
	            standalone: 'siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac'.split(
	                '_'
	            ),
	        },
	        monthsShort: 'sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.'.split(
	            '_'
	        ),
	        monthsParseExact: true,
	        weekdays: 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split(
	            '_'
	        ),
	        weekdaysShort: 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
	        weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
	        weekdaysParseExact: true,
	        longDateFormat: {
	            LT: 'H:mm',
	            LTS: 'H:mm:ss',
	            L: 'DD.MM.YYYY',
	            LL: 'Do MMMM YYYY',
	            LLL: 'Do MMMM YYYY H:mm',
	            LLLL: 'dddd, Do MMMM YYYY H:mm',
	        },
	        calendar: {
	            sameDay: '[danas u] LT',
	            nextDay: '[sutra u] LT',
	            nextWeek: function () {
	                switch (this.day()) {
	                    case 0:
	                        return '[u] [nedjelju] [u] LT';
	                    case 3:
	                        return '[u] [srijedu] [u] LT';
	                    case 6:
	                        return '[u] [subotu] [u] LT';
	                    case 1:
	                    case 2:
	                    case 4:
	                    case 5:
	                        return '[u] dddd [u] LT';
	                }
	            },
	            lastDay: '[jučer u] LT',
	            lastWeek: function () {
	                switch (this.day()) {
	                    case 0:
	                        return '[prošlu] [nedjelju] [u] LT';
	                    case 3:
	                        return '[prošlu] [srijedu] [u] LT';
	                    case 6:
	                        return '[prošle] [subote] [u] LT';
	                    case 1:
	                    case 2:
	                    case 4:
	                    case 5:
	                        return '[prošli] dddd [u] LT';
	                }
	            },
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: 'za %s',
	            past: 'prije %s',
	            s: 'par sekundi',
	            ss: translate,
	            m: translate,
	            mm: translate,
	            h: translate,
	            hh: translate,
	            d: 'dan',
	            dd: translate,
	            M: 'mjesec',
	            MM: translate,
	            y: 'godinu',
	            yy: translate,
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}\./,
	        ordinal: '%d.',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 7, // The week that contains Jan 7th is the first week of the year.
	        },
	    });
	
	    return hr;
	
	})));


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Hungarian [hu]
	//! author : Adam Brunner : https://github.com/adambrunner
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var weekEndings = 'vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton'.split(
	        ' '
	    );
	    function translate(number, withoutSuffix, key, isFuture) {
	        var num = number;
	        switch (key) {
	            case 's':
	                return isFuture || withoutSuffix
	                    ? 'néhány másodperc'
	                    : 'néhány másodperce';
	            case 'ss':
	                return num + (isFuture || withoutSuffix)
	                    ? ' másodperc'
	                    : ' másodperce';
	            case 'm':
	                return 'egy' + (isFuture || withoutSuffix ? ' perc' : ' perce');
	            case 'mm':
	                return num + (isFuture || withoutSuffix ? ' perc' : ' perce');
	            case 'h':
	                return 'egy' + (isFuture || withoutSuffix ? ' óra' : ' órája');
	            case 'hh':
	                return num + (isFuture || withoutSuffix ? ' óra' : ' órája');
	            case 'd':
	                return 'egy' + (isFuture || withoutSuffix ? ' nap' : ' napja');
	            case 'dd':
	                return num + (isFuture || withoutSuffix ? ' nap' : ' napja');
	            case 'M':
	                return 'egy' + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');
	            case 'MM':
	                return num + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');
	            case 'y':
	                return 'egy' + (isFuture || withoutSuffix ? ' év' : ' éve');
	            case 'yy':
	                return num + (isFuture || withoutSuffix ? ' év' : ' éve');
	        }
	        return '';
	    }
	    function week(isFuture) {
	        return (
	            (isFuture ? '' : '[múlt] ') +
	            '[' +
	            weekEndings[this.day()] +
	            '] LT[-kor]'
	        );
	    }
	
	    var hu = moment.defineLocale('hu', {
	        months: 'január_február_március_április_május_június_július_augusztus_szeptember_október_november_december'.split(
	            '_'
	        ),
	        monthsShort: 'jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec'.split(
	            '_'
	        ),
	        weekdays: 'vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat'.split('_'),
	        weekdaysShort: 'vas_hét_kedd_sze_csüt_pén_szo'.split('_'),
	        weekdaysMin: 'v_h_k_sze_cs_p_szo'.split('_'),
	        longDateFormat: {
	            LT: 'H:mm',
	            LTS: 'H:mm:ss',
	            L: 'YYYY.MM.DD.',
	            LL: 'YYYY. MMMM D.',
	            LLL: 'YYYY. MMMM D. H:mm',
	            LLLL: 'YYYY. MMMM D., dddd H:mm',
	        },
	        meridiemParse: /de|du/i,
	        isPM: function (input) {
	            return input.charAt(1).toLowerCase() === 'u';
	        },
	        meridiem: function (hours, minutes, isLower) {
	            if (hours < 12) {
	                return isLower === true ? 'de' : 'DE';
	            } else {
	                return isLower === true ? 'du' : 'DU';
	            }
	        },
	        calendar: {
	            sameDay: '[ma] LT[-kor]',
	            nextDay: '[holnap] LT[-kor]',
	            nextWeek: function () {
	                return week.call(this, true);
	            },
	            lastDay: '[tegnap] LT[-kor]',
	            lastWeek: function () {
	                return week.call(this, false);
	            },
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: '%s múlva',
	            past: '%s',
	            s: translate,
	            ss: translate,
	            m: translate,
	            mm: translate,
	            h: translate,
	            hh: translate,
	            d: translate,
	            dd: translate,
	            M: translate,
	            MM: translate,
	            y: translate,
	            yy: translate,
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}\./,
	        ordinal: '%d.',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4, // The week that contains Jan 4th is the first week of the year.
	        },
	    });
	
	    return hu;
	
	})));


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Armenian [hy-am]
	//! author : Armendarabyan : https://github.com/armendarabyan
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var hyAm = moment.defineLocale('hy-am', {
	        months: {
	            format: 'հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի'.split(
	                '_'
	            ),
	            standalone: 'հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր'.split(
	                '_'
	            ),
	        },
	        monthsShort: 'հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ'.split('_'),
	        weekdays: 'կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ'.split(
	            '_'
	        ),
	        weekdaysShort: 'կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ'.split('_'),
	        weekdaysMin: 'կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD.MM.YYYY',
	            LL: 'D MMMM YYYY թ.',
	            LLL: 'D MMMM YYYY թ., HH:mm',
	            LLLL: 'dddd, D MMMM YYYY թ., HH:mm',
	        },
	        calendar: {
	            sameDay: '[այսօր] LT',
	            nextDay: '[վաղը] LT',
	            lastDay: '[երեկ] LT',
	            nextWeek: function () {
	                return 'dddd [օրը ժամը] LT';
	            },
	            lastWeek: function () {
	                return '[անցած] dddd [օրը ժամը] LT';
	            },
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: '%s հետո',
	            past: '%s առաջ',
	            s: 'մի քանի վայրկյան',
	            ss: '%d վայրկյան',
	            m: 'րոպե',
	            mm: '%d րոպե',
	            h: 'ժամ',
	            hh: '%d ժամ',
	            d: 'օր',
	            dd: '%d օր',
	            M: 'ամիս',
	            MM: '%d ամիս',
	            y: 'տարի',
	            yy: '%d տարի',
	        },
	        meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
	        isPM: function (input) {
	            return /^(ցերեկվա|երեկոյան)$/.test(input);
	        },
	        meridiem: function (hour) {
	            if (hour < 4) {
	                return 'գիշերվա';
	            } else if (hour < 12) {
	                return 'առավոտվա';
	            } else if (hour < 17) {
	                return 'ցերեկվա';
	            } else {
	                return 'երեկոյան';
	            }
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
	        ordinal: function (number, period) {
	            switch (period) {
	                case 'DDD':
	                case 'w':
	                case 'W':
	                case 'DDDo':
	                    if (number === 1) {
	                        return number + '-ին';
	                    }
	                    return number + '-րդ';
	                default:
	                    return number;
	            }
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 7, // The week that contains Jan 7th is the first week of the year.
	        },
	    });
	
	    return hyAm;
	
	})));


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Indonesian [id]
	//! author : Mohammad Satrio Utomo : https://github.com/tyok
	//! reference: http://id.wikisource.org/wiki/Pedoman_Umum_Ejaan_Bahasa_Indonesia_yang_Disempurnakan
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var id = moment.defineLocale('id', {
	        months: 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember'.split(
	            '_'
	        ),
	        monthsShort: 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des'.split('_'),
	        weekdays: 'Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu'.split('_'),
	        weekdaysShort: 'Min_Sen_Sel_Rab_Kam_Jum_Sab'.split('_'),
	        weekdaysMin: 'Mg_Sn_Sl_Rb_Km_Jm_Sb'.split('_'),
	        longDateFormat: {
	            LT: 'HH.mm',
	            LTS: 'HH.mm.ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY [pukul] HH.mm',
	            LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm',
	        },
	        meridiemParse: /pagi|siang|sore|malam/,
	        meridiemHour: function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === 'pagi') {
	                return hour;
	            } else if (meridiem === 'siang') {
	                return hour >= 11 ? hour : hour + 12;
	            } else if (meridiem === 'sore' || meridiem === 'malam') {
	                return hour + 12;
	            }
	        },
	        meridiem: function (hours, minutes, isLower) {
	            if (hours < 11) {
	                return 'pagi';
	            } else if (hours < 15) {
	                return 'siang';
	            } else if (hours < 19) {
	                return 'sore';
	            } else {
	                return 'malam';
	            }
	        },
	        calendar: {
	            sameDay: '[Hari ini pukul] LT',
	            nextDay: '[Besok pukul] LT',
	            nextWeek: 'dddd [pukul] LT',
	            lastDay: '[Kemarin pukul] LT',
	            lastWeek: 'dddd [lalu pukul] LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: 'dalam %s',
	            past: '%s yang lalu',
	            s: 'beberapa detik',
	            ss: '%d detik',
	            m: 'semenit',
	            mm: '%d menit',
	            h: 'sejam',
	            hh: '%d jam',
	            d: 'sehari',
	            dd: '%d hari',
	            M: 'sebulan',
	            MM: '%d bulan',
	            y: 'setahun',
	            yy: '%d tahun',
	        },
	        week: {
	            dow: 0, // Sunday is the first day of the week.
	            doy: 6, // The week that contains Jan 6th is the first week of the year.
	        },
	    });
	
	    return id;
	
	})));


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Icelandic [is]
	//! author : Hinrik Örn Sigurðsson : https://github.com/hinrik
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    function plural(n) {
	        if (n % 100 === 11) {
	            return true;
	        } else if (n % 10 === 1) {
	            return false;
	        }
	        return true;
	    }
	    function translate(number, withoutSuffix, key, isFuture) {
	        var result = number + ' ';
	        switch (key) {
	            case 's':
	                return withoutSuffix || isFuture
	                    ? 'nokkrar sekúndur'
	                    : 'nokkrum sekúndum';
	            case 'ss':
	                if (plural(number)) {
	                    return (
	                        result +
	                        (withoutSuffix || isFuture ? 'sekúndur' : 'sekúndum')
	                    );
	                }
	                return result + 'sekúnda';
	            case 'm':
	                return withoutSuffix ? 'mínúta' : 'mínútu';
	            case 'mm':
	                if (plural(number)) {
	                    return (
	                        result + (withoutSuffix || isFuture ? 'mínútur' : 'mínútum')
	                    );
	                } else if (withoutSuffix) {
	                    return result + 'mínúta';
	                }
	                return result + 'mínútu';
	            case 'hh':
	                if (plural(number)) {
	                    return (
	                        result +
	                        (withoutSuffix || isFuture
	                            ? 'klukkustundir'
	                            : 'klukkustundum')
	                    );
	                }
	                return result + 'klukkustund';
	            case 'd':
	                if (withoutSuffix) {
	                    return 'dagur';
	                }
	                return isFuture ? 'dag' : 'degi';
	            case 'dd':
	                if (plural(number)) {
	                    if (withoutSuffix) {
	                        return result + 'dagar';
	                    }
	                    return result + (isFuture ? 'daga' : 'dögum');
	                } else if (withoutSuffix) {
	                    return result + 'dagur';
	                }
	                return result + (isFuture ? 'dag' : 'degi');
	            case 'M':
	                if (withoutSuffix) {
	                    return 'mánuður';
	                }
	                return isFuture ? 'mánuð' : 'mánuði';
	            case 'MM':
	                if (plural(number)) {
	                    if (withoutSuffix) {
	                        return result + 'mánuðir';
	                    }
	                    return result + (isFuture ? 'mánuði' : 'mánuðum');
	                } else if (withoutSuffix) {
	                    return result + 'mánuður';
	                }
	                return result + (isFuture ? 'mánuð' : 'mánuði');
	            case 'y':
	                return withoutSuffix || isFuture ? 'ár' : 'ári';
	            case 'yy':
	                if (plural(number)) {
	                    return result + (withoutSuffix || isFuture ? 'ár' : 'árum');
	                }
	                return result + (withoutSuffix || isFuture ? 'ár' : 'ári');
	        }
	    }
	
	    var is = moment.defineLocale('is', {
	        months: 'janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember'.split(
	            '_'
	        ),
	        monthsShort: 'jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des'.split('_'),
	        weekdays: 'sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur'.split(
	            '_'
	        ),
	        weekdaysShort: 'sun_mán_þri_mið_fim_fös_lau'.split('_'),
	        weekdaysMin: 'Su_Má_Þr_Mi_Fi_Fö_La'.split('_'),
	        longDateFormat: {
	            LT: 'H:mm',
	            LTS: 'H:mm:ss',
	            L: 'DD.MM.YYYY',
	            LL: 'D. MMMM YYYY',
	            LLL: 'D. MMMM YYYY [kl.] H:mm',
	            LLLL: 'dddd, D. MMMM YYYY [kl.] H:mm',
	        },
	        calendar: {
	            sameDay: '[í dag kl.] LT',
	            nextDay: '[á morgun kl.] LT',
	            nextWeek: 'dddd [kl.] LT',
	            lastDay: '[í gær kl.] LT',
	            lastWeek: '[síðasta] dddd [kl.] LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: 'eftir %s',
	            past: 'fyrir %s síðan',
	            s: translate,
	            ss: translate,
	            m: translate,
	            mm: translate,
	            h: 'klukkustund',
	            hh: translate,
	            d: translate,
	            dd: translate,
	            M: translate,
	            MM: translate,
	            y: translate,
	            yy: translate,
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}\./,
	        ordinal: '%d.',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4, // The week that contains Jan 4th is the first week of the year.
	        },
	    });
	
	    return is;
	
	})));


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Italian [it]
	//! author : Lorenzo : https://github.com/aliem
	//! author: Mattia Larentis: https://github.com/nostalgiaz
	//! author: Marco : https://github.com/Manfre98
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var it = moment.defineLocale('it', {
	        months: 'gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre'.split(
	            '_'
	        ),
	        monthsShort: 'gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic'.split('_'),
	        weekdays: 'domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato'.split(
	            '_'
	        ),
	        weekdaysShort: 'dom_lun_mar_mer_gio_ven_sab'.split('_'),
	        weekdaysMin: 'do_lu_ma_me_gi_ve_sa'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd D MMMM YYYY HH:mm',
	        },
	        calendar: {
	            sameDay: function () {
	                return (
	                    '[Oggi a' +
	                    (this.hours() > 1 ? 'lle ' : this.hours() === 0 ? ' ' : "ll'") +
	                    ']LT'
	                );
	            },
	            nextDay: function () {
	                return (
	                    '[Domani a' +
	                    (this.hours() > 1 ? 'lle ' : this.hours() === 0 ? ' ' : "ll'") +
	                    ']LT'
	                );
	            },
	            nextWeek: function () {
	                return (
	                    'dddd [a' +
	                    (this.hours() > 1 ? 'lle ' : this.hours() === 0 ? ' ' : "ll'") +
	                    ']LT'
	                );
	            },
	            lastDay: function () {
	                return (
	                    '[Ieri a' +
	                    (this.hours() > 1 ? 'lle ' : this.hours() === 0 ? ' ' : "ll'") +
	                    ']LT'
	                );
	            },
	            lastWeek: function () {
	                switch (this.day()) {
	                    case 0:
	                        return (
	                            '[La scorsa] dddd [a' +
	                            (this.hours() > 1
	                                ? 'lle '
	                                : this.hours() === 0
	                                ? ' '
	                                : "ll'") +
	                            ']LT'
	                        );
	                    default:
	                        return (
	                            '[Lo scorso] dddd [a' +
	                            (this.hours() > 1
	                                ? 'lle '
	                                : this.hours() === 0
	                                ? ' '
	                                : "ll'") +
	                            ']LT'
	                        );
	                }
	            },
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: 'tra %s',
	            past: '%s fa',
	            s: 'alcuni secondi',
	            ss: '%d secondi',
	            m: 'un minuto',
	            mm: '%d minuti',
	            h: "un'ora",
	            hh: '%d ore',
	            d: 'un giorno',
	            dd: '%d giorni',
	            M: 'un mese',
	            MM: '%d mesi',
	            y: 'un anno',
	            yy: '%d anni',
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}º/,
	        ordinal: '%dº',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4, // The week that contains Jan 4th is the first week of the year.
	        },
	    });
	
	    return it;
	
	})));


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Italian (Switzerland) [it-ch]
	//! author : xfh : https://github.com/xfh
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var itCh = moment.defineLocale('it-ch', {
	        months: 'gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre'.split(
	            '_'
	        ),
	        monthsShort: 'gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic'.split('_'),
	        weekdays: 'domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato'.split(
	            '_'
	        ),
	        weekdaysShort: 'dom_lun_mar_mer_gio_ven_sab'.split('_'),
	        weekdaysMin: 'do_lu_ma_me_gi_ve_sa'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD.MM.YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd D MMMM YYYY HH:mm',
	        },
	        calendar: {
	            sameDay: '[Oggi alle] LT',
	            nextDay: '[Domani alle] LT',
	            nextWeek: 'dddd [alle] LT',
	            lastDay: '[Ieri alle] LT',
	            lastWeek: function () {
	                switch (this.day()) {
	                    case 0:
	                        return '[la scorsa] dddd [alle] LT';
	                    default:
	                        return '[lo scorso] dddd [alle] LT';
	                }
	            },
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: function (s) {
	                return (/^[0-9].+$/.test(s) ? 'tra' : 'in') + ' ' + s;
	            },
	            past: '%s fa',
	            s: 'alcuni secondi',
	            ss: '%d secondi',
	            m: 'un minuto',
	            mm: '%d minuti',
	            h: "un'ora",
	            hh: '%d ore',
	            d: 'un giorno',
	            dd: '%d giorni',
	            M: 'un mese',
	            MM: '%d mesi',
	            y: 'un anno',
	            yy: '%d anni',
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}º/,
	        ordinal: '%dº',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4, // The week that contains Jan 4th is the first week of the year.
	        },
	    });
	
	    return itCh;
	
	})));


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Japanese [ja]
	//! author : LI Long : https://github.com/baryon
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var ja = moment.defineLocale('ja', {
	        eras: [
	            {
	                since: '2019-05-01',
	                offset: 1,
	                name: '令和',
	                narrow: '㋿',
	                abbr: 'R',
	            },
	            {
	                since: '1989-01-08',
	                until: '2019-04-30',
	                offset: 1,
	                name: '平成',
	                narrow: '㍻',
	                abbr: 'H',
	            },
	            {
	                since: '1926-12-25',
	                until: '1989-01-07',
	                offset: 1,
	                name: '昭和',
	                narrow: '㍼',
	                abbr: 'S',
	            },
	            {
	                since: '1912-07-30',
	                until: '1926-12-24',
	                offset: 1,
	                name: '大正',
	                narrow: '㍽',
	                abbr: 'T',
	            },
	            {
	                since: '1873-01-01',
	                until: '1912-07-29',
	                offset: 6,
	                name: '明治',
	                narrow: '㍾',
	                abbr: 'M',
	            },
	            {
	                since: '0001-01-01',
	                until: '1873-12-31',
	                offset: 1,
	                name: '西暦',
	                narrow: 'AD',
	                abbr: 'AD',
	            },
	            {
	                since: '0000-12-31',
	                until: -Infinity,
	                offset: 1,
	                name: '紀元前',
	                narrow: 'BC',
	                abbr: 'BC',
	            },
	        ],
	        eraYearOrdinalRegex: /(元|\d+)年/,
	        eraYearOrdinalParse: function (input, match) {
	            return match[1] === '元' ? 1 : parseInt(match[1] || input, 10);
	        },
	        months: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
	        monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split(
	            '_'
	        ),
	        weekdays: '日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日'.split('_'),
	        weekdaysShort: '日_月_火_水_木_金_土'.split('_'),
	        weekdaysMin: '日_月_火_水_木_金_土'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'YYYY/MM/DD',
	            LL: 'YYYY年M月D日',
	            LLL: 'YYYY年M月D日 HH:mm',
	            LLLL: 'YYYY年M月D日 dddd HH:mm',
	            l: 'YYYY/MM/DD',
	            ll: 'YYYY年M月D日',
	            lll: 'YYYY年M月D日 HH:mm',
	            llll: 'YYYY年M月D日(ddd) HH:mm',
	        },
	        meridiemParse: /午前|午後/i,
	        isPM: function (input) {
	            return input === '午後';
	        },
	        meridiem: function (hour, minute, isLower) {
	            if (hour < 12) {
	                return '午前';
	            } else {
	                return '午後';
	            }
	        },
	        calendar: {
	            sameDay: '[今日] LT',
	            nextDay: '[明日] LT',
	            nextWeek: function (now) {
	                if (now.week() !== this.week()) {
	                    return '[来週]dddd LT';
	                } else {
	                    return 'dddd LT';
	                }
	            },
	            lastDay: '[昨日] LT',
	            lastWeek: function (now) {
	                if (this.week() !== now.week()) {
	                    return '[先週]dddd LT';
	                } else {
	                    return 'dddd LT';
	                }
	            },
	            sameElse: 'L',
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}日/,
	        ordinal: function (number, period) {
	            switch (period) {
	                case 'y':
	                    return number === 1 ? '元年' : number + '年';
	                case 'd':
	                case 'D':
	                case 'DDD':
	                    return number + '日';
	                default:
	                    return number;
	            }
	        },
	        relativeTime: {
	            future: '%s後',
	            past: '%s前',
	            s: '数秒',
	            ss: '%d秒',
	            m: '1分',
	            mm: '%d分',
	            h: '1時間',
	            hh: '%d時間',
	            d: '1日',
	            dd: '%d日',
	            M: '1ヶ月',
	            MM: '%dヶ月',
	            y: '1年',
	            yy: '%d年',
	        },
	    });
	
	    return ja;
	
	})));


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Javanese [jv]
	//! author : Rony Lantip : https://github.com/lantip
	//! reference: http://jv.wikipedia.org/wiki/Basa_Jawa
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var jv = moment.defineLocale('jv', {
	        months: 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember'.split(
	            '_'
	        ),
	        monthsShort: 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des'.split('_'),
	        weekdays: 'Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu'.split('_'),
	        weekdaysShort: 'Min_Sen_Sel_Reb_Kem_Jem_Sep'.split('_'),
	        weekdaysMin: 'Mg_Sn_Sl_Rb_Km_Jm_Sp'.split('_'),
	        longDateFormat: {
	            LT: 'HH.mm',
	            LTS: 'HH.mm.ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY [pukul] HH.mm',
	            LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm',
	        },
	        meridiemParse: /enjing|siyang|sonten|ndalu/,
	        meridiemHour: function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === 'enjing') {
	                return hour;
	            } else if (meridiem === 'siyang') {
	                return hour >= 11 ? hour : hour + 12;
	            } else if (meridiem === 'sonten' || meridiem === 'ndalu') {
	                return hour + 12;
	            }
	        },
	        meridiem: function (hours, minutes, isLower) {
	            if (hours < 11) {
	                return 'enjing';
	            } else if (hours < 15) {
	                return 'siyang';
	            } else if (hours < 19) {
	                return 'sonten';
	            } else {
	                return 'ndalu';
	            }
	        },
	        calendar: {
	            sameDay: '[Dinten puniko pukul] LT',
	            nextDay: '[Mbenjang pukul] LT',
	            nextWeek: 'dddd [pukul] LT',
	            lastDay: '[Kala wingi pukul] LT',
	            lastWeek: 'dddd [kepengker pukul] LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: 'wonten ing %s',
	            past: '%s ingkang kepengker',
	            s: 'sawetawis detik',
	            ss: '%d detik',
	            m: 'setunggal menit',
	            mm: '%d menit',
	            h: 'setunggal jam',
	            hh: '%d jam',
	            d: 'sedinten',
	            dd: '%d dinten',
	            M: 'sewulan',
	            MM: '%d wulan',
	            y: 'setaun',
	            yy: '%d taun',
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 7, // The week that contains Jan 7th is the first week of the year.
	        },
	    });
	
	    return jv;
	
	})));


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Georgian [ka]
	//! author : Irakli Janiashvili : https://github.com/IrakliJani
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var ka = moment.defineLocale('ka', {
	        months: 'იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი'.split(
	            '_'
	        ),
	        monthsShort: 'იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ'.split('_'),
	        weekdays: {
	            standalone: 'კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი'.split(
	                '_'
	            ),
	            format: 'კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს'.split(
	                '_'
	            ),
	            isFormat: /(წინა|შემდეგ)/,
	        },
	        weekdaysShort: 'კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ'.split('_'),
	        weekdaysMin: 'კვ_ორ_სა_ოთ_ხუ_პა_შა'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd, D MMMM YYYY HH:mm',
	        },
	        calendar: {
	            sameDay: '[დღეს] LT[-ზე]',
	            nextDay: '[ხვალ] LT[-ზე]',
	            lastDay: '[გუშინ] LT[-ზე]',
	            nextWeek: '[შემდეგ] dddd LT[-ზე]',
	            lastWeek: '[წინა] dddd LT-ზე',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: function (s) {
	                return s.replace(/(წამ|წუთ|საათ|წელ|დღ|თვ)(ი|ე)/, function (
	                    $0,
	                    $1,
	                    $2
	                ) {
	                    return $2 === 'ი' ? $1 + 'ში' : $1 + $2 + 'ში';
	                });
	            },
	            past: function (s) {
	                if (/(წამი|წუთი|საათი|დღე|თვე)/.test(s)) {
	                    return s.replace(/(ი|ე)$/, 'ის წინ');
	                }
	                if (/წელი/.test(s)) {
	                    return s.replace(/წელი$/, 'წლის წინ');
	                }
	                return s;
	            },
	            s: 'რამდენიმე წამი',
	            ss: '%d წამი',
	            m: 'წუთი',
	            mm: '%d წუთი',
	            h: 'საათი',
	            hh: '%d საათი',
	            d: 'დღე',
	            dd: '%d დღე',
	            M: 'თვე',
	            MM: '%d თვე',
	            y: 'წელი',
	            yy: '%d წელი',
	        },
	        dayOfMonthOrdinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
	        ordinal: function (number) {
	            if (number === 0) {
	                return number;
	            }
	            if (number === 1) {
	                return number + '-ლი';
	            }
	            if (
	                number < 20 ||
	                (number <= 100 && number % 20 === 0) ||
	                number % 100 === 0
	            ) {
	                return 'მე-' + number;
	            }
	            return number + '-ე';
	        },
	        week: {
	            dow: 1,
	            doy: 7,
	        },
	    });
	
	    return ka;
	
	})));


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Kazakh [kk]
	//! authors : Nurlan Rakhimzhanov : https://github.com/nurlan
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var suffixes = {
	        0: '-ші',
	        1: '-ші',
	        2: '-ші',
	        3: '-ші',
	        4: '-ші',
	        5: '-ші',
	        6: '-шы',
	        7: '-ші',
	        8: '-ші',
	        9: '-шы',
	        10: '-шы',
	        20: '-шы',
	        30: '-шы',
	        40: '-шы',
	        50: '-ші',
	        60: '-шы',
	        70: '-ші',
	        80: '-ші',
	        90: '-шы',
	        100: '-ші',
	    };
	
	    var kk = moment.defineLocale('kk', {
	        months: 'қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан'.split(
	            '_'
	        ),
	        monthsShort: 'қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел'.split('_'),
	        weekdays: 'жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі'.split(
	            '_'
	        ),
	        weekdaysShort: 'жек_дүй_сей_сәр_бей_жұм_сен'.split('_'),
	        weekdaysMin: 'жк_дй_сй_ср_бй_жм_сн'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD.MM.YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd, D MMMM YYYY HH:mm',
	        },
	        calendar: {
	            sameDay: '[Бүгін сағат] LT',
	            nextDay: '[Ертең сағат] LT',
	            nextWeek: 'dddd [сағат] LT',
	            lastDay: '[Кеше сағат] LT',
	            lastWeek: '[Өткен аптаның] dddd [сағат] LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: '%s ішінде',
	            past: '%s бұрын',
	            s: 'бірнеше секунд',
	            ss: '%d секунд',
	            m: 'бір минут',
	            mm: '%d минут',
	            h: 'бір сағат',
	            hh: '%d сағат',
	            d: 'бір күн',
	            dd: '%d күн',
	            M: 'бір ай',
	            MM: '%d ай',
	            y: 'бір жыл',
	            yy: '%d жыл',
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}-(ші|шы)/,
	        ordinal: function (number) {
	            var a = number % 10,
	                b = number >= 100 ? 100 : null;
	            return number + (suffixes[number] || suffixes[a] || suffixes[b]);
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 7, // The week that contains Jan 7th is the first week of the year.
	        },
	    });
	
	    return kk;
	
	})));


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Cambodian [km]
	//! author : Kruy Vanna : https://github.com/kruyvanna
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var symbolMap = {
	            '1': '១',
	            '2': '២',
	            '3': '៣',
	            '4': '៤',
	            '5': '៥',
	            '6': '៦',
	            '7': '៧',
	            '8': '៨',
	            '9': '៩',
	            '0': '០',
	        },
	        numberMap = {
	            '១': '1',
	            '២': '2',
	            '៣': '3',
	            '៤': '4',
	            '៥': '5',
	            '៦': '6',
	            '៧': '7',
	            '៨': '8',
	            '៩': '9',
	            '០': '0',
	        };
	
	    var km = moment.defineLocale('km', {
	        months: 'មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ'.split(
	            '_'
	        ),
	        monthsShort: 'មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ'.split(
	            '_'
	        ),
	        weekdays: 'អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍'.split('_'),
	        weekdaysShort: 'អា_ច_អ_ព_ព្រ_សុ_ស'.split('_'),
	        weekdaysMin: 'អា_ច_អ_ព_ព្រ_សុ_ស'.split('_'),
	        weekdaysParseExact: true,
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd, D MMMM YYYY HH:mm',
	        },
	        meridiemParse: /ព្រឹក|ល្ងាច/,
	        isPM: function (input) {
	            return input === 'ល្ងាច';
	        },
	        meridiem: function (hour, minute, isLower) {
	            if (hour < 12) {
	                return 'ព្រឹក';
	            } else {
	                return 'ល្ងាច';
	            }
	        },
	        calendar: {
	            sameDay: '[ថ្ងៃនេះ ម៉ោង] LT',
	            nextDay: '[ស្អែក ម៉ោង] LT',
	            nextWeek: 'dddd [ម៉ោង] LT',
	            lastDay: '[ម្សិលមិញ ម៉ោង] LT',
	            lastWeek: 'dddd [សប្តាហ៍មុន] [ម៉ោង] LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: '%sទៀត',
	            past: '%sមុន',
	            s: 'ប៉ុន្មានវិនាទី',
	            ss: '%d វិនាទី',
	            m: 'មួយនាទី',
	            mm: '%d នាទី',
	            h: 'មួយម៉ោង',
	            hh: '%d ម៉ោង',
	            d: 'មួយថ្ងៃ',
	            dd: '%d ថ្ងៃ',
	            M: 'មួយខែ',
	            MM: '%d ខែ',
	            y: 'មួយឆ្នាំ',
	            yy: '%d ឆ្នាំ',
	        },
	        dayOfMonthOrdinalParse: /ទី\d{1,2}/,
	        ordinal: 'ទី%d',
	        preparse: function (string) {
	            return string.replace(/[១២៣៤៥៦៧៨៩០]/g, function (match) {
	                return numberMap[match];
	            });
	        },
	        postformat: function (string) {
	            return string.replace(/\d/g, function (match) {
	                return symbolMap[match];
	            });
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4, // The week that contains Jan 4th is the first week of the year.
	        },
	    });
	
	    return km;
	
	})));


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Kannada [kn]
	//! author : Rajeev Naik : https://github.com/rajeevnaikte
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var symbolMap = {
	            '1': '೧',
	            '2': '೨',
	            '3': '೩',
	            '4': '೪',
	            '5': '೫',
	            '6': '೬',
	            '7': '೭',
	            '8': '೮',
	            '9': '೯',
	            '0': '೦',
	        },
	        numberMap = {
	            '೧': '1',
	            '೨': '2',
	            '೩': '3',
	            '೪': '4',
	            '೫': '5',
	            '೬': '6',
	            '೭': '7',
	            '೮': '8',
	            '೯': '9',
	            '೦': '0',
	        };
	
	    var kn = moment.defineLocale('kn', {
	        months: 'ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್'.split(
	            '_'
	        ),
	        monthsShort: 'ಜನ_ಫೆಬ್ರ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂ_ಅಕ್ಟೋ_ನವೆಂ_ಡಿಸೆಂ'.split(
	            '_'
	        ),
	        monthsParseExact: true,
	        weekdays: 'ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಬುಧವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ'.split(
	            '_'
	        ),
	        weekdaysShort: 'ಭಾನು_ಸೋಮ_ಮಂಗಳ_ಬುಧ_ಗುರು_ಶುಕ್ರ_ಶನಿ'.split('_'),
	        weekdaysMin: 'ಭಾ_ಸೋ_ಮಂ_ಬು_ಗು_ಶು_ಶ'.split('_'),
	        longDateFormat: {
	            LT: 'A h:mm',
	            LTS: 'A h:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY, A h:mm',
	            LLLL: 'dddd, D MMMM YYYY, A h:mm',
	        },
	        calendar: {
	            sameDay: '[ಇಂದು] LT',
	            nextDay: '[ನಾಳೆ] LT',
	            nextWeek: 'dddd, LT',
	            lastDay: '[ನಿನ್ನೆ] LT',
	            lastWeek: '[ಕೊನೆಯ] dddd, LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: '%s ನಂತರ',
	            past: '%s ಹಿಂದೆ',
	            s: 'ಕೆಲವು ಕ್ಷಣಗಳು',
	            ss: '%d ಸೆಕೆಂಡುಗಳು',
	            m: 'ಒಂದು ನಿಮಿಷ',
	            mm: '%d ನಿಮಿಷ',
	            h: 'ಒಂದು ಗಂಟೆ',
	            hh: '%d ಗಂಟೆ',
	            d: 'ಒಂದು ದಿನ',
	            dd: '%d ದಿನ',
	            M: 'ಒಂದು ತಿಂಗಳು',
	            MM: '%d ತಿಂಗಳು',
	            y: 'ಒಂದು ವರ್ಷ',
	            yy: '%d ವರ್ಷ',
	        },
	        preparse: function (string) {
	            return string.replace(/[೧೨೩೪೫೬೭೮೯೦]/g, function (match) {
	                return numberMap[match];
	            });
	        },
	        postformat: function (string) {
	            return string.replace(/\d/g, function (match) {
	                return symbolMap[match];
	            });
	        },
	        meridiemParse: /ರಾತ್ರಿ|ಬೆಳಿಗ್ಗೆ|ಮಧ್ಯಾಹ್ನ|ಸಂಜೆ/,
	        meridiemHour: function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === 'ರಾತ್ರಿ') {
	                return hour < 4 ? hour : hour + 12;
	            } else if (meridiem === 'ಬೆಳಿಗ್ಗೆ') {
	                return hour;
	            } else if (meridiem === 'ಮಧ್ಯಾಹ್ನ') {
	                return hour >= 10 ? hour : hour + 12;
	            } else if (meridiem === 'ಸಂಜೆ') {
	                return hour + 12;
	            }
	        },
	        meridiem: function (hour, minute, isLower) {
	            if (hour < 4) {
	                return 'ರಾತ್ರಿ';
	            } else if (hour < 10) {
	                return 'ಬೆಳಿಗ್ಗೆ';
	            } else if (hour < 17) {
	                return 'ಮಧ್ಯಾಹ್ನ';
	            } else if (hour < 20) {
	                return 'ಸಂಜೆ';
	            } else {
	                return 'ರಾತ್ರಿ';
	            }
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}(ನೇ)/,
	        ordinal: function (number) {
	            return number + 'ನೇ';
	        },
	        week: {
	            dow: 0, // Sunday is the first day of the week.
	            doy: 6, // The week that contains Jan 6th is the first week of the year.
	        },
	    });
	
	    return kn;
	
	})));


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Korean [ko]
	//! author : Kyungwook, Park : https://github.com/kyungw00k
	//! author : Jeeeyul Lee <jeeeyul@gmail.com>
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var ko = moment.defineLocale('ko', {
	        months: '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
	        monthsShort: '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split(
	            '_'
	        ),
	        weekdays: '일요일_월요일_화요일_수요일_목요일_금요일_토요일'.split('_'),
	        weekdaysShort: '일_월_화_수_목_금_토'.split('_'),
	        weekdaysMin: '일_월_화_수_목_금_토'.split('_'),
	        longDateFormat: {
	            LT: 'A h:mm',
	            LTS: 'A h:mm:ss',
	            L: 'YYYY.MM.DD.',
	            LL: 'YYYY년 MMMM D일',
	            LLL: 'YYYY년 MMMM D일 A h:mm',
	            LLLL: 'YYYY년 MMMM D일 dddd A h:mm',
	            l: 'YYYY.MM.DD.',
	            ll: 'YYYY년 MMMM D일',
	            lll: 'YYYY년 MMMM D일 A h:mm',
	            llll: 'YYYY년 MMMM D일 dddd A h:mm',
	        },
	        calendar: {
	            sameDay: '오늘 LT',
	            nextDay: '내일 LT',
	            nextWeek: 'dddd LT',
	            lastDay: '어제 LT',
	            lastWeek: '지난주 dddd LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: '%s 후',
	            past: '%s 전',
	            s: '몇 초',
	            ss: '%d초',
	            m: '1분',
	            mm: '%d분',
	            h: '한 시간',
	            hh: '%d시간',
	            d: '하루',
	            dd: '%d일',
	            M: '한 달',
	            MM: '%d달',
	            y: '일 년',
	            yy: '%d년',
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}(일|월|주)/,
	        ordinal: function (number, period) {
	            switch (period) {
	                case 'd':
	                case 'D':
	                case 'DDD':
	                    return number + '일';
	                case 'M':
	                    return number + '월';
	                case 'w':
	                case 'W':
	                    return number + '주';
	                default:
	                    return number;
	            }
	        },
	        meridiemParse: /오전|오후/,
	        isPM: function (token) {
	            return token === '오후';
	        },
	        meridiem: function (hour, minute, isUpper) {
	            return hour < 12 ? '오전' : '오후';
	        },
	    });
	
	    return ko;
	
	})));


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Kurdish [ku]
	//! author : Shahram Mebashar : https://github.com/ShahramMebashar
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var symbolMap = {
	            '1': '١',
	            '2': '٢',
	            '3': '٣',
	            '4': '٤',
	            '5': '٥',
	            '6': '٦',
	            '7': '٧',
	            '8': '٨',
	            '9': '٩',
	            '0': '٠',
	        },
	        numberMap = {
	            '١': '1',
	            '٢': '2',
	            '٣': '3',
	            '٤': '4',
	            '٥': '5',
	            '٦': '6',
	            '٧': '7',
	            '٨': '8',
	            '٩': '9',
	            '٠': '0',
	        },
	        months = [
	            'کانونی دووەم',
	            'شوبات',
	            'ئازار',
	            'نیسان',
	            'ئایار',
	            'حوزەیران',
	            'تەمموز',
	            'ئاب',
	            'ئەیلوول',
	            'تشرینی یەكەم',
	            'تشرینی دووەم',
	            'كانونی یەکەم',
	        ];
	
	    var ku = moment.defineLocale('ku', {
	        months: months,
	        monthsShort: months,
	        weekdays: 'یه‌كشه‌ممه‌_دووشه‌ممه‌_سێشه‌ممه‌_چوارشه‌ممه‌_پێنجشه‌ممه‌_هه‌ینی_شه‌ممه‌'.split(
	            '_'
	        ),
	        weekdaysShort: 'یه‌كشه‌م_دووشه‌م_سێشه‌م_چوارشه‌م_پێنجشه‌م_هه‌ینی_شه‌ممه‌'.split(
	            '_'
	        ),
	        weekdaysMin: 'ی_د_س_چ_پ_ه_ش'.split('_'),
	        weekdaysParseExact: true,
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd, D MMMM YYYY HH:mm',
	        },
	        meridiemParse: /ئێواره‌|به‌یانی/,
	        isPM: function (input) {
	            return /ئێواره‌/.test(input);
	        },
	        meridiem: function (hour, minute, isLower) {
	            if (hour < 12) {
	                return 'به‌یانی';
	            } else {
	                return 'ئێواره‌';
	            }
	        },
	        calendar: {
	            sameDay: '[ئه‌مرۆ كاتژمێر] LT',
	            nextDay: '[به‌یانی كاتژمێر] LT',
	            nextWeek: 'dddd [كاتژمێر] LT',
	            lastDay: '[دوێنێ كاتژمێر] LT',
	            lastWeek: 'dddd [كاتژمێر] LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: 'له‌ %s',
	            past: '%s',
	            s: 'چه‌ند چركه‌یه‌ك',
	            ss: 'چركه‌ %d',
	            m: 'یه‌ك خوله‌ك',
	            mm: '%d خوله‌ك',
	            h: 'یه‌ك كاتژمێر',
	            hh: '%d كاتژمێر',
	            d: 'یه‌ك ڕۆژ',
	            dd: '%d ڕۆژ',
	            M: 'یه‌ك مانگ',
	            MM: '%d مانگ',
	            y: 'یه‌ك ساڵ',
	            yy: '%d ساڵ',
	        },
	        preparse: function (string) {
	            return string
	                .replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (match) {
	                    return numberMap[match];
	                })
	                .replace(/،/g, ',');
	        },
	        postformat: function (string) {
	            return string
	                .replace(/\d/g, function (match) {
	                    return symbolMap[match];
	                })
	                .replace(/,/g, '،');
	        },
	        week: {
	            dow: 6, // Saturday is the first day of the week.
	            doy: 12, // The week that contains Jan 12th is the first week of the year.
	        },
	    });
	
	    return ku;
	
	})));


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Kyrgyz [ky]
	//! author : Chyngyz Arystan uulu : https://github.com/chyngyz
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var suffixes = {
	        0: '-чү',
	        1: '-чи',
	        2: '-чи',
	        3: '-чү',
	        4: '-чү',
	        5: '-чи',
	        6: '-чы',
	        7: '-чи',
	        8: '-чи',
	        9: '-чу',
	        10: '-чу',
	        20: '-чы',
	        30: '-чу',
	        40: '-чы',
	        50: '-чү',
	        60: '-чы',
	        70: '-чи',
	        80: '-чи',
	        90: '-чу',
	        100: '-чү',
	    };
	
	    var ky = moment.defineLocale('ky', {
	        months: 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split(
	            '_'
	        ),
	        monthsShort: 'янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек'.split(
	            '_'
	        ),
	        weekdays: 'Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби'.split(
	            '_'
	        ),
	        weekdaysShort: 'Жек_Дүй_Шей_Шар_Бей_Жум_Ише'.split('_'),
	        weekdaysMin: 'Жк_Дй_Шй_Шр_Бй_Жм_Иш'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD.MM.YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd, D MMMM YYYY HH:mm',
	        },
	        calendar: {
	            sameDay: '[Бүгүн саат] LT',
	            nextDay: '[Эртең саат] LT',
	            nextWeek: 'dddd [саат] LT',
	            lastDay: '[Кечээ саат] LT',
	            lastWeek: '[Өткөн аптанын] dddd [күнү] [саат] LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: '%s ичинде',
	            past: '%s мурун',
	            s: 'бирнече секунд',
	            ss: '%d секунд',
	            m: 'бир мүнөт',
	            mm: '%d мүнөт',
	            h: 'бир саат',
	            hh: '%d саат',
	            d: 'бир күн',
	            dd: '%d күн',
	            M: 'бир ай',
	            MM: '%d ай',
	            y: 'бир жыл',
	            yy: '%d жыл',
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}-(чи|чы|чү|чу)/,
	        ordinal: function (number) {
	            var a = number % 10,
	                b = number >= 100 ? 100 : null;
	            return number + (suffixes[number] || suffixes[a] || suffixes[b]);
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 7, // The week that contains Jan 7th is the first week of the year.
	        },
	    });
	
	    return ky;
	
	})));


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Luxembourgish [lb]
	//! author : mweimerskirch : https://github.com/mweimerskirch
	//! author : David Raison : https://github.com/kwisatz
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    function processRelativeTime(number, withoutSuffix, key, isFuture) {
	        var format = {
	            m: ['eng Minutt', 'enger Minutt'],
	            h: ['eng Stonn', 'enger Stonn'],
	            d: ['een Dag', 'engem Dag'],
	            M: ['ee Mount', 'engem Mount'],
	            y: ['ee Joer', 'engem Joer'],
	        };
	        return withoutSuffix ? format[key][0] : format[key][1];
	    }
	    function processFutureTime(string) {
	        var number = string.substr(0, string.indexOf(' '));
	        if (eifelerRegelAppliesToNumber(number)) {
	            return 'a ' + string;
	        }
	        return 'an ' + string;
	    }
	    function processPastTime(string) {
	        var number = string.substr(0, string.indexOf(' '));
	        if (eifelerRegelAppliesToNumber(number)) {
	            return 'viru ' + string;
	        }
	        return 'virun ' + string;
	    }
	    /**
	     * Returns true if the word before the given number loses the '-n' ending.
	     * e.g. 'an 10 Deeg' but 'a 5 Deeg'
	     *
	     * @param number {integer}
	     * @returns {boolean}
	     */
	    function eifelerRegelAppliesToNumber(number) {
	        number = parseInt(number, 10);
	        if (isNaN(number)) {
	            return false;
	        }
	        if (number < 0) {
	            // Negative Number --> always true
	            return true;
	        } else if (number < 10) {
	            // Only 1 digit
	            if (4 <= number && number <= 7) {
	                return true;
	            }
	            return false;
	        } else if (number < 100) {
	            // 2 digits
	            var lastDigit = number % 10,
	                firstDigit = number / 10;
	            if (lastDigit === 0) {
	                return eifelerRegelAppliesToNumber(firstDigit);
	            }
	            return eifelerRegelAppliesToNumber(lastDigit);
	        } else if (number < 10000) {
	            // 3 or 4 digits --> recursively check first digit
	            while (number >= 10) {
	                number = number / 10;
	            }
	            return eifelerRegelAppliesToNumber(number);
	        } else {
	            // Anything larger than 4 digits: recursively check first n-3 digits
	            number = number / 1000;
	            return eifelerRegelAppliesToNumber(number);
	        }
	    }
	
	    var lb = moment.defineLocale('lb', {
	        months: 'Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember'.split(
	            '_'
	        ),
	        monthsShort: 'Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split(
	            '_'
	        ),
	        monthsParseExact: true,
	        weekdays: 'Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg'.split(
	            '_'
	        ),
	        weekdaysShort: 'So._Mé._Dë._Më._Do._Fr._Sa.'.split('_'),
	        weekdaysMin: 'So_Mé_Dë_Më_Do_Fr_Sa'.split('_'),
	        weekdaysParseExact: true,
	        longDateFormat: {
	            LT: 'H:mm [Auer]',
	            LTS: 'H:mm:ss [Auer]',
	            L: 'DD.MM.YYYY',
	            LL: 'D. MMMM YYYY',
	            LLL: 'D. MMMM YYYY H:mm [Auer]',
	            LLLL: 'dddd, D. MMMM YYYY H:mm [Auer]',
	        },
	        calendar: {
	            sameDay: '[Haut um] LT',
	            sameElse: 'L',
	            nextDay: '[Muer um] LT',
	            nextWeek: 'dddd [um] LT',
	            lastDay: '[Gëschter um] LT',
	            lastWeek: function () {
	                // Different date string for 'Dënschdeg' (Tuesday) and 'Donneschdeg' (Thursday) due to phonological rule
	                switch (this.day()) {
	                    case 2:
	                    case 4:
	                        return '[Leschten] dddd [um] LT';
	                    default:
	                        return '[Leschte] dddd [um] LT';
	                }
	            },
	        },
	        relativeTime: {
	            future: processFutureTime,
	            past: processPastTime,
	            s: 'e puer Sekonnen',
	            ss: '%d Sekonnen',
	            m: processRelativeTime,
	            mm: '%d Minutten',
	            h: processRelativeTime,
	            hh: '%d Stonnen',
	            d: processRelativeTime,
	            dd: '%d Deeg',
	            M: processRelativeTime,
	            MM: '%d Méint',
	            y: processRelativeTime,
	            yy: '%d Joer',
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}\./,
	        ordinal: '%d.',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4, // The week that contains Jan 4th is the first week of the year.
	        },
	    });
	
	    return lb;
	
	})));


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Lao [lo]
	//! author : Ryan Hart : https://github.com/ryanhart2
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var lo = moment.defineLocale('lo', {
	        months: 'ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ'.split(
	            '_'
	        ),
	        monthsShort: 'ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ'.split(
	            '_'
	        ),
	        weekdays: 'ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ'.split('_'),
	        weekdaysShort: 'ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ'.split('_'),
	        weekdaysMin: 'ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ'.split('_'),
	        weekdaysParseExact: true,
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'ວັນdddd D MMMM YYYY HH:mm',
	        },
	        meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/,
	        isPM: function (input) {
	            return input === 'ຕອນແລງ';
	        },
	        meridiem: function (hour, minute, isLower) {
	            if (hour < 12) {
	                return 'ຕອນເຊົ້າ';
	            } else {
	                return 'ຕອນແລງ';
	            }
	        },
	        calendar: {
	            sameDay: '[ມື້ນີ້ເວລາ] LT',
	            nextDay: '[ມື້ອື່ນເວລາ] LT',
	            nextWeek: '[ວັນ]dddd[ໜ້າເວລາ] LT',
	            lastDay: '[ມື້ວານນີ້ເວລາ] LT',
	            lastWeek: '[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: 'ອີກ %s',
	            past: '%sຜ່ານມາ',
	            s: 'ບໍ່ເທົ່າໃດວິນາທີ',
	            ss: '%d ວິນາທີ',
	            m: '1 ນາທີ',
	            mm: '%d ນາທີ',
	            h: '1 ຊົ່ວໂມງ',
	            hh: '%d ຊົ່ວໂມງ',
	            d: '1 ມື້',
	            dd: '%d ມື້',
	            M: '1 ເດືອນ',
	            MM: '%d ເດືອນ',
	            y: '1 ປີ',
	            yy: '%d ປີ',
	        },
	        dayOfMonthOrdinalParse: /(ທີ່)\d{1,2}/,
	        ordinal: function (number) {
	            return 'ທີ່' + number;
	        },
	    });
	
	    return lo;
	
	})));


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Lithuanian [lt]
	//! author : Mindaugas Mozūras : https://github.com/mmozuras
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var units = {
	        ss: 'sekundė_sekundžių_sekundes',
	        m: 'minutė_minutės_minutę',
	        mm: 'minutės_minučių_minutes',
	        h: 'valanda_valandos_valandą',
	        hh: 'valandos_valandų_valandas',
	        d: 'diena_dienos_dieną',
	        dd: 'dienos_dienų_dienas',
	        M: 'mėnuo_mėnesio_mėnesį',
	        MM: 'mėnesiai_mėnesių_mėnesius',
	        y: 'metai_metų_metus',
	        yy: 'metai_metų_metus',
	    };
	    function translateSeconds(number, withoutSuffix, key, isFuture) {
	        if (withoutSuffix) {
	            return 'kelios sekundės';
	        } else {
	            return isFuture ? 'kelių sekundžių' : 'kelias sekundes';
	        }
	    }
	    function translateSingular(number, withoutSuffix, key, isFuture) {
	        return withoutSuffix
	            ? forms(key)[0]
	            : isFuture
	            ? forms(key)[1]
	            : forms(key)[2];
	    }
	    function special(number) {
	        return number % 10 === 0 || (number > 10 && number < 20);
	    }
	    function forms(key) {
	        return units[key].split('_');
	    }
	    function translate(number, withoutSuffix, key, isFuture) {
	        var result = number + ' ';
	        if (number === 1) {
	            return (
	                result + translateSingular(number, withoutSuffix, key[0], isFuture)
	            );
	        } else if (withoutSuffix) {
	            return result + (special(number) ? forms(key)[1] : forms(key)[0]);
	        } else {
	            if (isFuture) {
	                return result + forms(key)[1];
	            } else {
	                return result + (special(number) ? forms(key)[1] : forms(key)[2]);
	            }
	        }
	    }
	    var lt = moment.defineLocale('lt', {
	        months: {
	            format: 'sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio'.split(
	                '_'
	            ),
	            standalone: 'sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis'.split(
	                '_'
	            ),
	            isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/,
	        },
	        monthsShort: 'sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd'.split('_'),
	        weekdays: {
	            format: 'sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį'.split(
	                '_'
	            ),
	            standalone: 'sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis'.split(
	                '_'
	            ),
	            isFormat: /dddd HH:mm/,
	        },
	        weekdaysShort: 'Sek_Pir_Ant_Tre_Ket_Pen_Šeš'.split('_'),
	        weekdaysMin: 'S_P_A_T_K_Pn_Š'.split('_'),
	        weekdaysParseExact: true,
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'YYYY-MM-DD',
	            LL: 'YYYY [m.] MMMM D [d.]',
	            LLL: 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
	            LLLL: 'YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]',
	            l: 'YYYY-MM-DD',
	            ll: 'YYYY [m.] MMMM D [d.]',
	            lll: 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
	            llll: 'YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]',
	        },
	        calendar: {
	            sameDay: '[Šiandien] LT',
	            nextDay: '[Rytoj] LT',
	            nextWeek: 'dddd LT',
	            lastDay: '[Vakar] LT',
	            lastWeek: '[Praėjusį] dddd LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: 'po %s',
	            past: 'prieš %s',
	            s: translateSeconds,
	            ss: translate,
	            m: translateSingular,
	            mm: translate,
	            h: translateSingular,
	            hh: translate,
	            d: translateSingular,
	            dd: translate,
	            M: translateSingular,
	            MM: translate,
	            y: translateSingular,
	            yy: translate,
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}-oji/,
	        ordinal: function (number) {
	            return number + '-oji';
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4, // The week that contains Jan 4th is the first week of the year.
	        },
	    });
	
	    return lt;
	
	})));


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Latvian [lv]
	//! author : Kristaps Karlsons : https://github.com/skakri
	//! author : Jānis Elmeris : https://github.com/JanisE
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var units = {
	        ss: 'sekundes_sekundēm_sekunde_sekundes'.split('_'),
	        m: 'minūtes_minūtēm_minūte_minūtes'.split('_'),
	        mm: 'minūtes_minūtēm_minūte_minūtes'.split('_'),
	        h: 'stundas_stundām_stunda_stundas'.split('_'),
	        hh: 'stundas_stundām_stunda_stundas'.split('_'),
	        d: 'dienas_dienām_diena_dienas'.split('_'),
	        dd: 'dienas_dienām_diena_dienas'.split('_'),
	        M: 'mēneša_mēnešiem_mēnesis_mēneši'.split('_'),
	        MM: 'mēneša_mēnešiem_mēnesis_mēneši'.split('_'),
	        y: 'gada_gadiem_gads_gadi'.split('_'),
	        yy: 'gada_gadiem_gads_gadi'.split('_'),
	    };
	    /**
	     * @param withoutSuffix boolean true = a length of time; false = before/after a period of time.
	     */
	    function format(forms, number, withoutSuffix) {
	        if (withoutSuffix) {
	            // E.g. "21 minūte", "3 minūtes".
	            return number % 10 === 1 && number % 100 !== 11 ? forms[2] : forms[3];
	        } else {
	            // E.g. "21 minūtes" as in "pēc 21 minūtes".
	            // E.g. "3 minūtēm" as in "pēc 3 minūtēm".
	            return number % 10 === 1 && number % 100 !== 11 ? forms[0] : forms[1];
	        }
	    }
	    function relativeTimeWithPlural(number, withoutSuffix, key) {
	        return number + ' ' + format(units[key], number, withoutSuffix);
	    }
	    function relativeTimeWithSingular(number, withoutSuffix, key) {
	        return format(units[key], number, withoutSuffix);
	    }
	    function relativeSeconds(number, withoutSuffix) {
	        return withoutSuffix ? 'dažas sekundes' : 'dažām sekundēm';
	    }
	
	    var lv = moment.defineLocale('lv', {
	        months: 'janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris'.split(
	            '_'
	        ),
	        monthsShort: 'jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec'.split('_'),
	        weekdays: 'svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena'.split(
	            '_'
	        ),
	        weekdaysShort: 'Sv_P_O_T_C_Pk_S'.split('_'),
	        weekdaysMin: 'Sv_P_O_T_C_Pk_S'.split('_'),
	        weekdaysParseExact: true,
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD.MM.YYYY.',
	            LL: 'YYYY. [gada] D. MMMM',
	            LLL: 'YYYY. [gada] D. MMMM, HH:mm',
	            LLLL: 'YYYY. [gada] D. MMMM, dddd, HH:mm',
	        },
	        calendar: {
	            sameDay: '[Šodien pulksten] LT',
	            nextDay: '[Rīt pulksten] LT',
	            nextWeek: 'dddd [pulksten] LT',
	            lastDay: '[Vakar pulksten] LT',
	            lastWeek: '[Pagājušā] dddd [pulksten] LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: 'pēc %s',
	            past: 'pirms %s',
	            s: relativeSeconds,
	            ss: relativeTimeWithPlural,
	            m: relativeTimeWithSingular,
	            mm: relativeTimeWithPlural,
	            h: relativeTimeWithSingular,
	            hh: relativeTimeWithPlural,
	            d: relativeTimeWithSingular,
	            dd: relativeTimeWithPlural,
	            M: relativeTimeWithSingular,
	            MM: relativeTimeWithPlural,
	            y: relativeTimeWithSingular,
	            yy: relativeTimeWithPlural,
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}\./,
	        ordinal: '%d.',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4, // The week that contains Jan 4th is the first week of the year.
	        },
	    });
	
	    return lv;
	
	})));


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Montenegrin [me]
	//! author : Miodrag Nikač <miodrag@restartit.me> : https://github.com/miodragnikac
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var translator = {
	        words: {
	            //Different grammatical cases
	            ss: ['sekund', 'sekunda', 'sekundi'],
	            m: ['jedan minut', 'jednog minuta'],
	            mm: ['minut', 'minuta', 'minuta'],
	            h: ['jedan sat', 'jednog sata'],
	            hh: ['sat', 'sata', 'sati'],
	            dd: ['dan', 'dana', 'dana'],
	            MM: ['mjesec', 'mjeseca', 'mjeseci'],
	            yy: ['godina', 'godine', 'godina'],
	        },
	        correctGrammaticalCase: function (number, wordKey) {
	            return number === 1
	                ? wordKey[0]
	                : number >= 2 && number <= 4
	                ? wordKey[1]
	                : wordKey[2];
	        },
	        translate: function (number, withoutSuffix, key) {
	            var wordKey = translator.words[key];
	            if (key.length === 1) {
	                return withoutSuffix ? wordKey[0] : wordKey[1];
	            } else {
	                return (
	                    number +
	                    ' ' +
	                    translator.correctGrammaticalCase(number, wordKey)
	                );
	            }
	        },
	    };
	
	    var me = moment.defineLocale('me', {
	        months: 'januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar'.split(
	            '_'
	        ),
	        monthsShort: 'jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.'.split(
	            '_'
	        ),
	        monthsParseExact: true,
	        weekdays: 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split(
	            '_'
	        ),
	        weekdaysShort: 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
	        weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
	        weekdaysParseExact: true,
	        longDateFormat: {
	            LT: 'H:mm',
	            LTS: 'H:mm:ss',
	            L: 'DD.MM.YYYY',
	            LL: 'D. MMMM YYYY',
	            LLL: 'D. MMMM YYYY H:mm',
	            LLLL: 'dddd, D. MMMM YYYY H:mm',
	        },
	        calendar: {
	            sameDay: '[danas u] LT',
	            nextDay: '[sjutra u] LT',
	
	            nextWeek: function () {
	                switch (this.day()) {
	                    case 0:
	                        return '[u] [nedjelju] [u] LT';
	                    case 3:
	                        return '[u] [srijedu] [u] LT';
	                    case 6:
	                        return '[u] [subotu] [u] LT';
	                    case 1:
	                    case 2:
	                    case 4:
	                    case 5:
	                        return '[u] dddd [u] LT';
	                }
	            },
	            lastDay: '[juče u] LT',
	            lastWeek: function () {
	                var lastWeekDays = [
	                    '[prošle] [nedjelje] [u] LT',
	                    '[prošlog] [ponedjeljka] [u] LT',
	                    '[prošlog] [utorka] [u] LT',
	                    '[prošle] [srijede] [u] LT',
	                    '[prošlog] [četvrtka] [u] LT',
	                    '[prošlog] [petka] [u] LT',
	                    '[prošle] [subote] [u] LT',
	                ];
	                return lastWeekDays[this.day()];
	            },
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: 'za %s',
	            past: 'prije %s',
	            s: 'nekoliko sekundi',
	            ss: translator.translate,
	            m: translator.translate,
	            mm: translator.translate,
	            h: translator.translate,
	            hh: translator.translate,
	            d: 'dan',
	            dd: translator.translate,
	            M: 'mjesec',
	            MM: translator.translate,
	            y: 'godinu',
	            yy: translator.translate,
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}\./,
	        ordinal: '%d.',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 7, // The week that contains Jan 7th is the first week of the year.
	        },
	    });
	
	    return me;
	
	})));


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Maori [mi]
	//! author : John Corrigan <robbiecloset@gmail.com> : https://github.com/johnideal
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var mi = moment.defineLocale('mi', {
	        months: 'Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea'.split(
	            '_'
	        ),
	        monthsShort: 'Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki'.split(
	            '_'
	        ),
	        monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
	        monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
	        monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
	        monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
	        weekdays: 'Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei'.split('_'),
	        weekdaysShort: 'Ta_Ma_Tū_We_Tāi_Pa_Hā'.split('_'),
	        weekdaysMin: 'Ta_Ma_Tū_We_Tāi_Pa_Hā'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY [i] HH:mm',
	            LLLL: 'dddd, D MMMM YYYY [i] HH:mm',
	        },
	        calendar: {
	            sameDay: '[i teie mahana, i] LT',
	            nextDay: '[apopo i] LT',
	            nextWeek: 'dddd [i] LT',
	            lastDay: '[inanahi i] LT',
	            lastWeek: 'dddd [whakamutunga i] LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: 'i roto i %s',
	            past: '%s i mua',
	            s: 'te hēkona ruarua',
	            ss: '%d hēkona',
	            m: 'he meneti',
	            mm: '%d meneti',
	            h: 'te haora',
	            hh: '%d haora',
	            d: 'he ra',
	            dd: '%d ra',
	            M: 'he marama',
	            MM: '%d marama',
	            y: 'he tau',
	            yy: '%d tau',
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}º/,
	        ordinal: '%dº',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4, // The week that contains Jan 4th is the first week of the year.
	        },
	    });
	
	    return mi;
	
	})));


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Macedonian [mk]
	//! author : Borislav Mickov : https://github.com/B0k0
	//! author : Sashko Todorov : https://github.com/bkyceh
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var mk = moment.defineLocale('mk', {
	        months: 'јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември'.split(
	            '_'
	        ),
	        monthsShort: 'јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек'.split('_'),
	        weekdays: 'недела_понеделник_вторник_среда_четврток_петок_сабота'.split(
	            '_'
	        ),
	        weekdaysShort: 'нед_пон_вто_сре_чет_пет_саб'.split('_'),
	        weekdaysMin: 'нe_пo_вт_ср_че_пе_сa'.split('_'),
	        longDateFormat: {
	            LT: 'H:mm',
	            LTS: 'H:mm:ss',
	            L: 'D.MM.YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY H:mm',
	            LLLL: 'dddd, D MMMM YYYY H:mm',
	        },
	        calendar: {
	            sameDay: '[Денес во] LT',
	            nextDay: '[Утре во] LT',
	            nextWeek: '[Во] dddd [во] LT',
	            lastDay: '[Вчера во] LT',
	            lastWeek: function () {
	                switch (this.day()) {
	                    case 0:
	                    case 3:
	                    case 6:
	                        return '[Изминатата] dddd [во] LT';
	                    case 1:
	                    case 2:
	                    case 4:
	                    case 5:
	                        return '[Изминатиот] dddd [во] LT';
	                }
	            },
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: 'за %s',
	            past: 'пред %s',
	            s: 'неколку секунди',
	            ss: '%d секунди',
	            m: 'една минута',
	            mm: '%d минути',
	            h: 'еден час',
	            hh: '%d часа',
	            d: 'еден ден',
	            dd: '%d дена',
	            M: 'еден месец',
	            MM: '%d месеци',
	            y: 'една година',
	            yy: '%d години',
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
	        ordinal: function (number) {
	            var lastDigit = number % 10,
	                last2Digits = number % 100;
	            if (number === 0) {
	                return number + '-ев';
	            } else if (last2Digits === 0) {
	                return number + '-ен';
	            } else if (last2Digits > 10 && last2Digits < 20) {
	                return number + '-ти';
	            } else if (lastDigit === 1) {
	                return number + '-ви';
	            } else if (lastDigit === 2) {
	                return number + '-ри';
	            } else if (lastDigit === 7 || lastDigit === 8) {
	                return number + '-ми';
	            } else {
	                return number + '-ти';
	            }
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 7, // The week that contains Jan 7th is the first week of the year.
	        },
	    });
	
	    return mk;
	
	})));


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Malayalam [ml]
	//! author : Floyd Pink : https://github.com/floydpink
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var ml = moment.defineLocale('ml', {
	        months: 'ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ'.split(
	            '_'
	        ),
	        monthsShort: 'ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.'.split(
	            '_'
	        ),
	        monthsParseExact: true,
	        weekdays: 'ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച'.split(
	            '_'
	        ),
	        weekdaysShort: 'ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി'.split('_'),
	        weekdaysMin: 'ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ'.split('_'),
	        longDateFormat: {
	            LT: 'A h:mm -നു',
	            LTS: 'A h:mm:ss -നു',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY, A h:mm -നു',
	            LLLL: 'dddd, D MMMM YYYY, A h:mm -നു',
	        },
	        calendar: {
	            sameDay: '[ഇന്ന്] LT',
	            nextDay: '[നാളെ] LT',
	            nextWeek: 'dddd, LT',
	            lastDay: '[ഇന്നലെ] LT',
	            lastWeek: '[കഴിഞ്ഞ] dddd, LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: '%s കഴിഞ്ഞ്',
	            past: '%s മുൻപ്',
	            s: 'അൽപ നിമിഷങ്ങൾ',
	            ss: '%d സെക്കൻഡ്',
	            m: 'ഒരു മിനിറ്റ്',
	            mm: '%d മിനിറ്റ്',
	            h: 'ഒരു മണിക്കൂർ',
	            hh: '%d മണിക്കൂർ',
	            d: 'ഒരു ദിവസം',
	            dd: '%d ദിവസം',
	            M: 'ഒരു മാസം',
	            MM: '%d മാസം',
	            y: 'ഒരു വർഷം',
	            yy: '%d വർഷം',
	        },
	        meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
	        meridiemHour: function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (
	                (meridiem === 'രാത്രി' && hour >= 4) ||
	                meridiem === 'ഉച്ച കഴിഞ്ഞ്' ||
	                meridiem === 'വൈകുന്നേരം'
	            ) {
	                return hour + 12;
	            } else {
	                return hour;
	            }
	        },
	        meridiem: function (hour, minute, isLower) {
	            if (hour < 4) {
	                return 'രാത്രി';
	            } else if (hour < 12) {
	                return 'രാവിലെ';
	            } else if (hour < 17) {
	                return 'ഉച്ച കഴിഞ്ഞ്';
	            } else if (hour < 20) {
	                return 'വൈകുന്നേരം';
	            } else {
	                return 'രാത്രി';
	            }
	        },
	    });
	
	    return ml;
	
	})));


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Mongolian [mn]
	//! author : Javkhlantugs Nyamdorj : https://github.com/javkhaanj7
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    function translate(number, withoutSuffix, key, isFuture) {
	        switch (key) {
	            case 's':
	                return withoutSuffix ? 'хэдхэн секунд' : 'хэдхэн секундын';
	            case 'ss':
	                return number + (withoutSuffix ? ' секунд' : ' секундын');
	            case 'm':
	            case 'mm':
	                return number + (withoutSuffix ? ' минут' : ' минутын');
	            case 'h':
	            case 'hh':
	                return number + (withoutSuffix ? ' цаг' : ' цагийн');
	            case 'd':
	            case 'dd':
	                return number + (withoutSuffix ? ' өдөр' : ' өдрийн');
	            case 'M':
	            case 'MM':
	                return number + (withoutSuffix ? ' сар' : ' сарын');
	            case 'y':
	            case 'yy':
	                return number + (withoutSuffix ? ' жил' : ' жилийн');
	            default:
	                return number;
	        }
	    }
	
	    var mn = moment.defineLocale('mn', {
	        months: 'Нэгдүгээр сар_Хоёрдугаар сар_Гуравдугаар сар_Дөрөвдүгээр сар_Тавдугаар сар_Зургадугаар сар_Долдугаар сар_Наймдугаар сар_Есдүгээр сар_Аравдугаар сар_Арван нэгдүгээр сар_Арван хоёрдугаар сар'.split(
	            '_'
	        ),
	        monthsShort: '1 сар_2 сар_3 сар_4 сар_5 сар_6 сар_7 сар_8 сар_9 сар_10 сар_11 сар_12 сар'.split(
	            '_'
	        ),
	        monthsParseExact: true,
	        weekdays: 'Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба'.split('_'),
	        weekdaysShort: 'Ням_Дав_Мяг_Лха_Пүр_Баа_Бям'.split('_'),
	        weekdaysMin: 'Ня_Да_Мя_Лх_Пү_Ба_Бя'.split('_'),
	        weekdaysParseExact: true,
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'YYYY-MM-DD',
	            LL: 'YYYY оны MMMMын D',
	            LLL: 'YYYY оны MMMMын D HH:mm',
	            LLLL: 'dddd, YYYY оны MMMMын D HH:mm',
	        },
	        meridiemParse: /ҮӨ|ҮХ/i,
	        isPM: function (input) {
	            return input === 'ҮХ';
	        },
	        meridiem: function (hour, minute, isLower) {
	            if (hour < 12) {
	                return 'ҮӨ';
	            } else {
	                return 'ҮХ';
	            }
	        },
	        calendar: {
	            sameDay: '[Өнөөдөр] LT',
	            nextDay: '[Маргааш] LT',
	            nextWeek: '[Ирэх] dddd LT',
	            lastDay: '[Өчигдөр] LT',
	            lastWeek: '[Өнгөрсөн] dddd LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: '%s дараа',
	            past: '%s өмнө',
	            s: translate,
	            ss: translate,
	            m: translate,
	            mm: translate,
	            h: translate,
	            hh: translate,
	            d: translate,
	            dd: translate,
	            M: translate,
	            MM: translate,
	            y: translate,
	            yy: translate,
	        },
	        dayOfMonthOrdinalParse: /\d{1,2} өдөр/,
	        ordinal: function (number, period) {
	            switch (period) {
	                case 'd':
	                case 'D':
	                case 'DDD':
	                    return number + ' өдөр';
	                default:
	                    return number;
	            }
	        },
	    });
	
	    return mn;
	
	})));


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Marathi [mr]
	//! author : Harshad Kale : https://github.com/kalehv
	//! author : Vivek Athalye : https://github.com/vnathalye
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var symbolMap = {
	            '1': '१',
	            '2': '२',
	            '3': '३',
	            '4': '४',
	            '5': '५',
	            '6': '६',
	            '7': '७',
	            '8': '८',
	            '9': '९',
	            '0': '०',
	        },
	        numberMap = {
	            '१': '1',
	            '२': '2',
	            '३': '3',
	            '४': '4',
	            '५': '5',
	            '६': '6',
	            '७': '7',
	            '८': '8',
	            '९': '9',
	            '०': '0',
	        };
	
	    function relativeTimeMr(number, withoutSuffix, string, isFuture) {
	        var output = '';
	        if (withoutSuffix) {
	            switch (string) {
	                case 's':
	                    output = 'काही सेकंद';
	                    break;
	                case 'ss':
	                    output = '%d सेकंद';
	                    break;
	                case 'm':
	                    output = 'एक मिनिट';
	                    break;
	                case 'mm':
	                    output = '%d मिनिटे';
	                    break;
	                case 'h':
	                    output = 'एक तास';
	                    break;
	                case 'hh':
	                    output = '%d तास';
	                    break;
	                case 'd':
	                    output = 'एक दिवस';
	                    break;
	                case 'dd':
	                    output = '%d दिवस';
	                    break;
	                case 'M':
	                    output = 'एक महिना';
	                    break;
	                case 'MM':
	                    output = '%d महिने';
	                    break;
	                case 'y':
	                    output = 'एक वर्ष';
	                    break;
	                case 'yy':
	                    output = '%d वर्षे';
	                    break;
	            }
	        } else {
	            switch (string) {
	                case 's':
	                    output = 'काही सेकंदां';
	                    break;
	                case 'ss':
	                    output = '%d सेकंदां';
	                    break;
	                case 'm':
	                    output = 'एका मिनिटा';
	                    break;
	                case 'mm':
	                    output = '%d मिनिटां';
	                    break;
	                case 'h':
	                    output = 'एका तासा';
	                    break;
	                case 'hh':
	                    output = '%d तासां';
	                    break;
	                case 'd':
	                    output = 'एका दिवसा';
	                    break;
	                case 'dd':
	                    output = '%d दिवसां';
	                    break;
	                case 'M':
	                    output = 'एका महिन्या';
	                    break;
	                case 'MM':
	                    output = '%d महिन्यां';
	                    break;
	                case 'y':
	                    output = 'एका वर्षा';
	                    break;
	                case 'yy':
	                    output = '%d वर्षां';
	                    break;
	            }
	        }
	        return output.replace(/%d/i, number);
	    }
	
	    var mr = moment.defineLocale('mr', {
	        months: 'जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर'.split(
	            '_'
	        ),
	        monthsShort: 'जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.'.split(
	            '_'
	        ),
	        monthsParseExact: true,
	        weekdays: 'रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),
	        weekdaysShort: 'रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि'.split('_'),
	        weekdaysMin: 'र_सो_मं_बु_गु_शु_श'.split('_'),
	        longDateFormat: {
	            LT: 'A h:mm वाजता',
	            LTS: 'A h:mm:ss वाजता',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY, A h:mm वाजता',
	            LLLL: 'dddd, D MMMM YYYY, A h:mm वाजता',
	        },
	        calendar: {
	            sameDay: '[आज] LT',
	            nextDay: '[उद्या] LT',
	            nextWeek: 'dddd, LT',
	            lastDay: '[काल] LT',
	            lastWeek: '[मागील] dddd, LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: '%sमध्ये',
	            past: '%sपूर्वी',
	            s: relativeTimeMr,
	            ss: relativeTimeMr,
	            m: relativeTimeMr,
	            mm: relativeTimeMr,
	            h: relativeTimeMr,
	            hh: relativeTimeMr,
	            d: relativeTimeMr,
	            dd: relativeTimeMr,
	            M: relativeTimeMr,
	            MM: relativeTimeMr,
	            y: relativeTimeMr,
	            yy: relativeTimeMr,
	        },
	        preparse: function (string) {
	            return string.replace(/[१२३४५६७८९०]/g, function (match) {
	                return numberMap[match];
	            });
	        },
	        postformat: function (string) {
	            return string.replace(/\d/g, function (match) {
	                return symbolMap[match];
	            });
	        },
	        meridiemParse: /पहाटे|सकाळी|दुपारी|सायंकाळी|रात्री/,
	        meridiemHour: function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === 'पहाटे' || meridiem === 'सकाळी') {
	                return hour;
	            } else if (
	                meridiem === 'दुपारी' ||
	                meridiem === 'सायंकाळी' ||
	                meridiem === 'रात्री'
	            ) {
	                return hour >= 12 ? hour : hour + 12;
	            }
	        },
	        meridiem: function (hour, minute, isLower) {
	            if (hour >= 0 && hour < 6) {
	                return 'पहाटे';
	            } else if (hour < 12) {
	                return 'सकाळी';
	            } else if (hour < 17) {
	                return 'दुपारी';
	            } else if (hour < 20) {
	                return 'सायंकाळी';
	            } else {
	                return 'रात्री';
	            }
	        },
	        week: {
	            dow: 0, // Sunday is the first day of the week.
	            doy: 6, // The week that contains Jan 6th is the first week of the year.
	        },
	    });
	
	    return mr;
	
	})));


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Malay [ms]
	//! author : Weldan Jamili : https://github.com/weldan
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var ms = moment.defineLocale('ms', {
	        months: 'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split(
	            '_'
	        ),
	        monthsShort: 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'.split('_'),
	        weekdays: 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split('_'),
	        weekdaysShort: 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),
	        weekdaysMin: 'Ah_Is_Sl_Rb_Km_Jm_Sb'.split('_'),
	        longDateFormat: {
	            LT: 'HH.mm',
	            LTS: 'HH.mm.ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY [pukul] HH.mm',
	            LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm',
	        },
	        meridiemParse: /pagi|tengahari|petang|malam/,
	        meridiemHour: function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === 'pagi') {
	                return hour;
	            } else if (meridiem === 'tengahari') {
	                return hour >= 11 ? hour : hour + 12;
	            } else if (meridiem === 'petang' || meridiem === 'malam') {
	                return hour + 12;
	            }
	        },
	        meridiem: function (hours, minutes, isLower) {
	            if (hours < 11) {
	                return 'pagi';
	            } else if (hours < 15) {
	                return 'tengahari';
	            } else if (hours < 19) {
	                return 'petang';
	            } else {
	                return 'malam';
	            }
	        },
	        calendar: {
	            sameDay: '[Hari ini pukul] LT',
	            nextDay: '[Esok pukul] LT',
	            nextWeek: 'dddd [pukul] LT',
	            lastDay: '[Kelmarin pukul] LT',
	            lastWeek: 'dddd [lepas pukul] LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: 'dalam %s',
	            past: '%s yang lepas',
	            s: 'beberapa saat',
	            ss: '%d saat',
	            m: 'seminit',
	            mm: '%d minit',
	            h: 'sejam',
	            hh: '%d jam',
	            d: 'sehari',
	            dd: '%d hari',
	            M: 'sebulan',
	            MM: '%d bulan',
	            y: 'setahun',
	            yy: '%d tahun',
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 7, // The week that contains Jan 7th is the first week of the year.
	        },
	    });
	
	    return ms;
	
	})));


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Malay [ms-my]
	//! note : DEPRECATED, the correct one is [ms]
	//! author : Weldan Jamili : https://github.com/weldan
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var msMy = moment.defineLocale('ms-my', {
	        months: 'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split(
	            '_'
	        ),
	        monthsShort: 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'.split('_'),
	        weekdays: 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split('_'),
	        weekdaysShort: 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),
	        weekdaysMin: 'Ah_Is_Sl_Rb_Km_Jm_Sb'.split('_'),
	        longDateFormat: {
	            LT: 'HH.mm',
	            LTS: 'HH.mm.ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY [pukul] HH.mm',
	            LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm',
	        },
	        meridiemParse: /pagi|tengahari|petang|malam/,
	        meridiemHour: function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === 'pagi') {
	                return hour;
	            } else if (meridiem === 'tengahari') {
	                return hour >= 11 ? hour : hour + 12;
	            } else if (meridiem === 'petang' || meridiem === 'malam') {
	                return hour + 12;
	            }
	        },
	        meridiem: function (hours, minutes, isLower) {
	            if (hours < 11) {
	                return 'pagi';
	            } else if (hours < 15) {
	                return 'tengahari';
	            } else if (hours < 19) {
	                return 'petang';
	            } else {
	                return 'malam';
	            }
	        },
	        calendar: {
	            sameDay: '[Hari ini pukul] LT',
	            nextDay: '[Esok pukul] LT',
	            nextWeek: 'dddd [pukul] LT',
	            lastDay: '[Kelmarin pukul] LT',
	            lastWeek: 'dddd [lepas pukul] LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: 'dalam %s',
	            past: '%s yang lepas',
	            s: 'beberapa saat',
	            ss: '%d saat',
	            m: 'seminit',
	            mm: '%d minit',
	            h: 'sejam',
	            hh: '%d jam',
	            d: 'sehari',
	            dd: '%d hari',
	            M: 'sebulan',
	            MM: '%d bulan',
	            y: 'setahun',
	            yy: '%d tahun',
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 7, // The week that contains Jan 7th is the first week of the year.
	        },
	    });
	
	    return msMy;
	
	})));


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Maltese (Malta) [mt]
	//! author : Alessandro Maruccia : https://github.com/alesma
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var mt = moment.defineLocale('mt', {
	        months: 'Jannar_Frar_Marzu_April_Mejju_Ġunju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Diċembru'.split(
	            '_'
	        ),
	        monthsShort: 'Jan_Fra_Mar_Apr_Mej_Ġun_Lul_Aww_Set_Ott_Nov_Diċ'.split('_'),
	        weekdays: 'Il-Ħadd_It-Tnejn_It-Tlieta_L-Erbgħa_Il-Ħamis_Il-Ġimgħa_Is-Sibt'.split(
	            '_'
	        ),
	        weekdaysShort: 'Ħad_Tne_Tli_Erb_Ħam_Ġim_Sib'.split('_'),
	        weekdaysMin: 'Ħa_Tn_Tl_Er_Ħa_Ġi_Si'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd, D MMMM YYYY HH:mm',
	        },
	        calendar: {
	            sameDay: '[Illum fil-]LT',
	            nextDay: '[Għada fil-]LT',
	            nextWeek: 'dddd [fil-]LT',
	            lastDay: '[Il-bieraħ fil-]LT',
	            lastWeek: 'dddd [li għadda] [fil-]LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: 'f’ %s',
	            past: '%s ilu',
	            s: 'ftit sekondi',
	            ss: '%d sekondi',
	            m: 'minuta',
	            mm: '%d minuti',
	            h: 'siegħa',
	            hh: '%d siegħat',
	            d: 'ġurnata',
	            dd: '%d ġranet',
	            M: 'xahar',
	            MM: '%d xhur',
	            y: 'sena',
	            yy: '%d sni',
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}º/,
	        ordinal: '%dº',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4, // The week that contains Jan 4th is the first week of the year.
	        },
	    });
	
	    return mt;
	
	})));


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Burmese [my]
	//! author : Squar team, mysquar.com
	//! author : David Rossellat : https://github.com/gholadr
	//! author : Tin Aung Lin : https://github.com/thanyawzinmin
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var symbolMap = {
	            '1': '၁',
	            '2': '၂',
	            '3': '၃',
	            '4': '၄',
	            '5': '၅',
	            '6': '၆',
	            '7': '၇',
	            '8': '၈',
	            '9': '၉',
	            '0': '၀',
	        },
	        numberMap = {
	            '၁': '1',
	            '၂': '2',
	            '၃': '3',
	            '၄': '4',
	            '၅': '5',
	            '၆': '6',
	            '၇': '7',
	            '၈': '8',
	            '၉': '9',
	            '၀': '0',
	        };
	
	    var my = moment.defineLocale('my', {
	        months: 'ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ'.split(
	            '_'
	        ),
	        monthsShort: 'ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ'.split('_'),
	        weekdays: 'တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ'.split(
	            '_'
	        ),
	        weekdaysShort: 'နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ'.split('_'),
	        weekdaysMin: 'နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ'.split('_'),
	
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd D MMMM YYYY HH:mm',
	        },
	        calendar: {
	            sameDay: '[ယနေ.] LT [မှာ]',
	            nextDay: '[မနက်ဖြန်] LT [မှာ]',
	            nextWeek: 'dddd LT [မှာ]',
	            lastDay: '[မနေ.က] LT [မှာ]',
	            lastWeek: '[ပြီးခဲ့သော] dddd LT [မှာ]',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: 'လာမည့် %s မှာ',
	            past: 'လွန်ခဲ့သော %s က',
	            s: 'စက္ကန်.အနည်းငယ်',
	            ss: '%d စက္ကန့်',
	            m: 'တစ်မိနစ်',
	            mm: '%d မိနစ်',
	            h: 'တစ်နာရီ',
	            hh: '%d နာရီ',
	            d: 'တစ်ရက်',
	            dd: '%d ရက်',
	            M: 'တစ်လ',
	            MM: '%d လ',
	            y: 'တစ်နှစ်',
	            yy: '%d နှစ်',
	        },
	        preparse: function (string) {
	            return string.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function (match) {
	                return numberMap[match];
	            });
	        },
	        postformat: function (string) {
	            return string.replace(/\d/g, function (match) {
	                return symbolMap[match];
	            });
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4, // The week that contains Jan 4th is the first week of the year.
	        },
	    });
	
	    return my;
	
	})));


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Norwegian Bokmål [nb]
	//! authors : Espen Hovlandsdal : https://github.com/rexxars
	//!           Sigurd Gartmann : https://github.com/sigurdga
	//!           Stephen Ramthun : https://github.com/stephenramthun
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var nb = moment.defineLocale('nb', {
	        months: 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split(
	            '_'
	        ),
	        monthsShort: 'jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.'.split(
	            '_'
	        ),
	        monthsParseExact: true,
	        weekdays: 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),
	        weekdaysShort: 'sø._ma._ti._on._to._fr._lø.'.split('_'),
	        weekdaysMin: 'sø_ma_ti_on_to_fr_lø'.split('_'),
	        weekdaysParseExact: true,
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD.MM.YYYY',
	            LL: 'D. MMMM YYYY',
	            LLL: 'D. MMMM YYYY [kl.] HH:mm',
	            LLLL: 'dddd D. MMMM YYYY [kl.] HH:mm',
	        },
	        calendar: {
	            sameDay: '[i dag kl.] LT',
	            nextDay: '[i morgen kl.] LT',
	            nextWeek: 'dddd [kl.] LT',
	            lastDay: '[i går kl.] LT',
	            lastWeek: '[forrige] dddd [kl.] LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: 'om %s',
	            past: '%s siden',
	            s: 'noen sekunder',
	            ss: '%d sekunder',
	            m: 'ett minutt',
	            mm: '%d minutter',
	            h: 'en time',
	            hh: '%d timer',
	            d: 'en dag',
	            dd: '%d dager',
	            M: 'en måned',
	            MM: '%d måneder',
	            y: 'ett år',
	            yy: '%d år',
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}\./,
	        ordinal: '%d.',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4, // The week that contains Jan 4th is the first week of the year.
	        },
	    });
	
	    return nb;
	
	})));


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Nepalese [ne]
	//! author : suvash : https://github.com/suvash
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var symbolMap = {
	            '1': '१',
	            '2': '२',
	            '3': '३',
	            '4': '४',
	            '5': '५',
	            '6': '६',
	            '7': '७',
	            '8': '८',
	            '9': '९',
	            '0': '०',
	        },
	        numberMap = {
	            '१': '1',
	            '२': '2',
	            '३': '3',
	            '४': '4',
	            '५': '5',
	            '६': '6',
	            '७': '7',
	            '८': '8',
	            '९': '9',
	            '०': '0',
	        };
	
	    var ne = moment.defineLocale('ne', {
	        months: 'जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर'.split(
	            '_'
	        ),
	        monthsShort: 'जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.'.split(
	            '_'
	        ),
	        monthsParseExact: true,
	        weekdays: 'आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार'.split(
	            '_'
	        ),
	        weekdaysShort: 'आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.'.split('_'),
	        weekdaysMin: 'आ._सो._मं._बु._बि._शु._श.'.split('_'),
	        weekdaysParseExact: true,
	        longDateFormat: {
	            LT: 'Aको h:mm बजे',
	            LTS: 'Aको h:mm:ss बजे',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY, Aको h:mm बजे',
	            LLLL: 'dddd, D MMMM YYYY, Aको h:mm बजे',
	        },
	        preparse: function (string) {
	            return string.replace(/[१२३४५६७८९०]/g, function (match) {
	                return numberMap[match];
	            });
	        },
	        postformat: function (string) {
	            return string.replace(/\d/g, function (match) {
	                return symbolMap[match];
	            });
	        },
	        meridiemParse: /राति|बिहान|दिउँसो|साँझ/,
	        meridiemHour: function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === 'राति') {
	                return hour < 4 ? hour : hour + 12;
	            } else if (meridiem === 'बिहान') {
	                return hour;
	            } else if (meridiem === 'दिउँसो') {
	                return hour >= 10 ? hour : hour + 12;
	            } else if (meridiem === 'साँझ') {
	                return hour + 12;
	            }
	        },
	        meridiem: function (hour, minute, isLower) {
	            if (hour < 3) {
	                return 'राति';
	            } else if (hour < 12) {
	                return 'बिहान';
	            } else if (hour < 16) {
	                return 'दिउँसो';
	            } else if (hour < 20) {
	                return 'साँझ';
	            } else {
	                return 'राति';
	            }
	        },
	        calendar: {
	            sameDay: '[आज] LT',
	            nextDay: '[भोलि] LT',
	            nextWeek: '[आउँदो] dddd[,] LT',
	            lastDay: '[हिजो] LT',
	            lastWeek: '[गएको] dddd[,] LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: '%sमा',
	            past: '%s अगाडि',
	            s: 'केही क्षण',
	            ss: '%d सेकेण्ड',
	            m: 'एक मिनेट',
	            mm: '%d मिनेट',
	            h: 'एक घण्टा',
	            hh: '%d घण्टा',
	            d: 'एक दिन',
	            dd: '%d दिन',
	            M: 'एक महिना',
	            MM: '%d महिना',
	            y: 'एक बर्ष',
	            yy: '%d बर्ष',
	        },
	        week: {
	            dow: 0, // Sunday is the first day of the week.
	            doy: 6, // The week that contains Jan 6th is the first week of the year.
	        },
	    });
	
	    return ne;
	
	})));


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Dutch [nl]
	//! author : Joris Röling : https://github.com/jorisroling
	//! author : Jacob Middag : https://github.com/middagj
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var monthsShortWithDots = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split(
	            '_'
	        ),
	        monthsShortWithoutDots = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split(
	            '_'
	        ),
	        monthsParse = [
	            /^jan/i,
	            /^feb/i,
	            /^maart|mrt.?$/i,
	            /^apr/i,
	            /^mei$/i,
	            /^jun[i.]?$/i,
	            /^jul[i.]?$/i,
	            /^aug/i,
	            /^sep/i,
	            /^okt/i,
	            /^nov/i,
	            /^dec/i,
	        ],
	        monthsRegex = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
	
	    var nl = moment.defineLocale('nl', {
	        months: 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split(
	            '_'
	        ),
	        monthsShort: function (m, format) {
	            if (!m) {
	                return monthsShortWithDots;
	            } else if (/-MMM-/.test(format)) {
	                return monthsShortWithoutDots[m.month()];
	            } else {
	                return monthsShortWithDots[m.month()];
	            }
	        },
	
	        monthsRegex: monthsRegex,
	        monthsShortRegex: monthsRegex,
	        monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
	        monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
	
	        monthsParse: monthsParse,
	        longMonthsParse: monthsParse,
	        shortMonthsParse: monthsParse,
	
	        weekdays: 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split(
	            '_'
	        ),
	        weekdaysShort: 'zo._ma._di._wo._do._vr._za.'.split('_'),
	        weekdaysMin: 'zo_ma_di_wo_do_vr_za'.split('_'),
	        weekdaysParseExact: true,
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD-MM-YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd D MMMM YYYY HH:mm',
	        },
	        calendar: {
	            sameDay: '[vandaag om] LT',
	            nextDay: '[morgen om] LT',
	            nextWeek: 'dddd [om] LT',
	            lastDay: '[gisteren om] LT',
	            lastWeek: '[afgelopen] dddd [om] LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: 'over %s',
	            past: '%s geleden',
	            s: 'een paar seconden',
	            ss: '%d seconden',
	            m: 'één minuut',
	            mm: '%d minuten',
	            h: 'één uur',
	            hh: '%d uur',
	            d: 'één dag',
	            dd: '%d dagen',
	            M: 'één maand',
	            MM: '%d maanden',
	            y: 'één jaar',
	            yy: '%d jaar',
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
	        ordinal: function (number) {
	            return (
	                number +
	                (number === 1 || number === 8 || number >= 20 ? 'ste' : 'de')
	            );
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4, // The week that contains Jan 4th is the first week of the year.
	        },
	    });
	
	    return nl;
	
	})));


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Dutch (Belgium) [nl-be]
	//! author : Joris Röling : https://github.com/jorisroling
	//! author : Jacob Middag : https://github.com/middagj
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var monthsShortWithDots = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split(
	            '_'
	        ),
	        monthsShortWithoutDots = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split(
	            '_'
	        ),
	        monthsParse = [
	            /^jan/i,
	            /^feb/i,
	            /^maart|mrt.?$/i,
	            /^apr/i,
	            /^mei$/i,
	            /^jun[i.]?$/i,
	            /^jul[i.]?$/i,
	            /^aug/i,
	            /^sep/i,
	            /^okt/i,
	            /^nov/i,
	            /^dec/i,
	        ],
	        monthsRegex = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
	
	    var nlBe = moment.defineLocale('nl-be', {
	        months: 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split(
	            '_'
	        ),
	        monthsShort: function (m, format) {
	            if (!m) {
	                return monthsShortWithDots;
	            } else if (/-MMM-/.test(format)) {
	                return monthsShortWithoutDots[m.month()];
	            } else {
	                return monthsShortWithDots[m.month()];
	            }
	        },
	
	        monthsRegex: monthsRegex,
	        monthsShortRegex: monthsRegex,
	        monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
	        monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
	
	        monthsParse: monthsParse,
	        longMonthsParse: monthsParse,
	        shortMonthsParse: monthsParse,
	
	        weekdays: 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split(
	            '_'
	        ),
	        weekdaysShort: 'zo._ma._di._wo._do._vr._za.'.split('_'),
	        weekdaysMin: 'zo_ma_di_wo_do_vr_za'.split('_'),
	        weekdaysParseExact: true,
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd D MMMM YYYY HH:mm',
	        },
	        calendar: {
	            sameDay: '[vandaag om] LT',
	            nextDay: '[morgen om] LT',
	            nextWeek: 'dddd [om] LT',
	            lastDay: '[gisteren om] LT',
	            lastWeek: '[afgelopen] dddd [om] LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: 'over %s',
	            past: '%s geleden',
	            s: 'een paar seconden',
	            ss: '%d seconden',
	            m: 'één minuut',
	            mm: '%d minuten',
	            h: 'één uur',
	            hh: '%d uur',
	            d: 'één dag',
	            dd: '%d dagen',
	            M: 'één maand',
	            MM: '%d maanden',
	            y: 'één jaar',
	            yy: '%d jaar',
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
	        ordinal: function (number) {
	            return (
	                number +
	                (number === 1 || number === 8 || number >= 20 ? 'ste' : 'de')
	            );
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4, // The week that contains Jan 4th is the first week of the year.
	        },
	    });
	
	    return nlBe;
	
	})));


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Nynorsk [nn]
	//! authors : https://github.com/mechuwind
	//!           Stephen Ramthun : https://github.com/stephenramthun
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var nn = moment.defineLocale('nn', {
	        months: 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split(
	            '_'
	        ),
	        monthsShort: 'jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.'.split(
	            '_'
	        ),
	        monthsParseExact: true,
	        weekdays: 'sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag'.split('_'),
	        weekdaysShort: 'su._må._ty._on._to._fr._lau.'.split('_'),
	        weekdaysMin: 'su_må_ty_on_to_fr_la'.split('_'),
	        weekdaysParseExact: true,
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD.MM.YYYY',
	            LL: 'D. MMMM YYYY',
	            LLL: 'D. MMMM YYYY [kl.] H:mm',
	            LLLL: 'dddd D. MMMM YYYY [kl.] HH:mm',
	        },
	        calendar: {
	            sameDay: '[I dag klokka] LT',
	            nextDay: '[I morgon klokka] LT',
	            nextWeek: 'dddd [klokka] LT',
	            lastDay: '[I går klokka] LT',
	            lastWeek: '[Føregåande] dddd [klokka] LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: 'om %s',
	            past: '%s sidan',
	            s: 'nokre sekund',
	            ss: '%d sekund',
	            m: 'eit minutt',
	            mm: '%d minutt',
	            h: 'ein time',
	            hh: '%d timar',
	            d: 'ein dag',
	            dd: '%d dagar',
	            M: 'ein månad',
	            MM: '%d månader',
	            y: 'eit år',
	            yy: '%d år',
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}\./,
	        ordinal: '%d.',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4, // The week that contains Jan 4th is the first week of the year.
	        },
	    });
	
	    return nn;
	
	})));


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Occitan, lengadocian dialecte [oc-lnc]
	//! author : Quentin PAGÈS : https://github.com/Quenty31
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var ocLnc = moment.defineLocale('oc-lnc', {
	        months: {
	            standalone: 'genièr_febrièr_març_abril_mai_junh_julhet_agost_setembre_octòbre_novembre_decembre'.split(
	                '_'
	            ),
	            format: "de genièr_de febrièr_de març_d'abril_de mai_de junh_de julhet_d'agost_de setembre_d'octòbre_de novembre_de decembre".split(
	                '_'
	            ),
	            isFormat: /D[oD]?(\s)+MMMM/,
	        },
	        monthsShort: 'gen._febr._març_abr._mai_junh_julh._ago._set._oct._nov._dec.'.split(
	            '_'
	        ),
	        monthsParseExact: true,
	        weekdays: 'dimenge_diluns_dimars_dimècres_dijòus_divendres_dissabte'.split(
	            '_'
	        ),
	        weekdaysShort: 'dg._dl._dm._dc._dj._dv._ds.'.split('_'),
	        weekdaysMin: 'dg_dl_dm_dc_dj_dv_ds'.split('_'),
	        weekdaysParseExact: true,
	        longDateFormat: {
	            LT: 'H:mm',
	            LTS: 'H:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM [de] YYYY',
	            ll: 'D MMM YYYY',
	            LLL: 'D MMMM [de] YYYY [a] H:mm',
	            lll: 'D MMM YYYY, H:mm',
	            LLLL: 'dddd D MMMM [de] YYYY [a] H:mm',
	            llll: 'ddd D MMM YYYY, H:mm',
	        },
	        calendar: {
	            sameDay: '[uèi a] LT',
	            nextDay: '[deman a] LT',
	            nextWeek: 'dddd [a] LT',
	            lastDay: '[ièr a] LT',
	            lastWeek: 'dddd [passat a] LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: "d'aquí %s",
	            past: 'fa %s',
	            s: 'unas segondas',
	            ss: '%d segondas',
	            m: 'una minuta',
	            mm: '%d minutas',
	            h: 'una ora',
	            hh: '%d oras',
	            d: 'un jorn',
	            dd: '%d jorns',
	            M: 'un mes',
	            MM: '%d meses',
	            y: 'un an',
	            yy: '%d ans',
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
	        ordinal: function (number, period) {
	            var output =
	                number === 1
	                    ? 'r'
	                    : number === 2
	                    ? 'n'
	                    : number === 3
	                    ? 'r'
	                    : number === 4
	                    ? 't'
	                    : 'è';
	            if (period === 'w' || period === 'W') {
	                output = 'a';
	            }
	            return number + output;
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4,
	        },
	    });
	
	    return ocLnc;
	
	})));


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Punjabi (India) [pa-in]
	//! author : Harpreet Singh : https://github.com/harpreetkhalsagtbit
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var symbolMap = {
	            '1': '੧',
	            '2': '੨',
	            '3': '੩',
	            '4': '੪',
	            '5': '੫',
	            '6': '੬',
	            '7': '੭',
	            '8': '੮',
	            '9': '੯',
	            '0': '੦',
	        },
	        numberMap = {
	            '੧': '1',
	            '੨': '2',
	            '੩': '3',
	            '੪': '4',
	            '੫': '5',
	            '੬': '6',
	            '੭': '7',
	            '੮': '8',
	            '੯': '9',
	            '੦': '0',
	        };
	
	    var paIn = moment.defineLocale('pa-in', {
	        // There are months name as per Nanakshahi Calendar but they are not used as rigidly in modern Punjabi.
	        months: 'ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ'.split(
	            '_'
	        ),
	        monthsShort: 'ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ'.split(
	            '_'
	        ),
	        weekdays: 'ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ'.split(
	            '_'
	        ),
	        weekdaysShort: 'ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ'.split('_'),
	        weekdaysMin: 'ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ'.split('_'),
	        longDateFormat: {
	            LT: 'A h:mm ਵਜੇ',
	            LTS: 'A h:mm:ss ਵਜੇ',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY, A h:mm ਵਜੇ',
	            LLLL: 'dddd, D MMMM YYYY, A h:mm ਵਜੇ',
	        },
	        calendar: {
	            sameDay: '[ਅਜ] LT',
	            nextDay: '[ਕਲ] LT',
	            nextWeek: '[ਅਗਲਾ] dddd, LT',
	            lastDay: '[ਕਲ] LT',
	            lastWeek: '[ਪਿਛਲੇ] dddd, LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: '%s ਵਿੱਚ',
	            past: '%s ਪਿਛਲੇ',
	            s: 'ਕੁਝ ਸਕਿੰਟ',
	            ss: '%d ਸਕਿੰਟ',
	            m: 'ਇਕ ਮਿੰਟ',
	            mm: '%d ਮਿੰਟ',
	            h: 'ਇੱਕ ਘੰਟਾ',
	            hh: '%d ਘੰਟੇ',
	            d: 'ਇੱਕ ਦਿਨ',
	            dd: '%d ਦਿਨ',
	            M: 'ਇੱਕ ਮਹੀਨਾ',
	            MM: '%d ਮਹੀਨੇ',
	            y: 'ਇੱਕ ਸਾਲ',
	            yy: '%d ਸਾਲ',
	        },
	        preparse: function (string) {
	            return string.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, function (match) {
	                return numberMap[match];
	            });
	        },
	        postformat: function (string) {
	            return string.replace(/\d/g, function (match) {
	                return symbolMap[match];
	            });
	        },
	        // Punjabi notation for meridiems are quite fuzzy in practice. While there exists
	        // a rigid notion of a 'Pahar' it is not used as rigidly in modern Punjabi.
	        meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,
	        meridiemHour: function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === 'ਰਾਤ') {
	                return hour < 4 ? hour : hour + 12;
	            } else if (meridiem === 'ਸਵੇਰ') {
	                return hour;
	            } else if (meridiem === 'ਦੁਪਹਿਰ') {
	                return hour >= 10 ? hour : hour + 12;
	            } else if (meridiem === 'ਸ਼ਾਮ') {
	                return hour + 12;
	            }
	        },
	        meridiem: function (hour, minute, isLower) {
	            if (hour < 4) {
	                return 'ਰਾਤ';
	            } else if (hour < 10) {
	                return 'ਸਵੇਰ';
	            } else if (hour < 17) {
	                return 'ਦੁਪਹਿਰ';
	            } else if (hour < 20) {
	                return 'ਸ਼ਾਮ';
	            } else {
	                return 'ਰਾਤ';
	            }
	        },
	        week: {
	            dow: 0, // Sunday is the first day of the week.
	            doy: 6, // The week that contains Jan 6th is the first week of the year.
	        },
	    });
	
	    return paIn;
	
	})));


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Polish [pl]
	//! author : Rafal Hirsz : https://github.com/evoL
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var monthsNominative = 'styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień'.split(
	            '_'
	        ),
	        monthsSubjective = 'stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia'.split(
	            '_'
	        );
	    function plural(n) {
	        return n % 10 < 5 && n % 10 > 1 && ~~(n / 10) % 10 !== 1;
	    }
	    function translate(number, withoutSuffix, key) {
	        var result = number + ' ';
	        switch (key) {
	            case 'ss':
	                return result + (plural(number) ? 'sekundy' : 'sekund');
	            case 'm':
	                return withoutSuffix ? 'minuta' : 'minutę';
	            case 'mm':
	                return result + (plural(number) ? 'minuty' : 'minut');
	            case 'h':
	                return withoutSuffix ? 'godzina' : 'godzinę';
	            case 'hh':
	                return result + (plural(number) ? 'godziny' : 'godzin');
	            case 'MM':
	                return result + (plural(number) ? 'miesiące' : 'miesięcy');
	            case 'yy':
	                return result + (plural(number) ? 'lata' : 'lat');
	        }
	    }
	
	    var pl = moment.defineLocale('pl', {
	        months: function (momentToFormat, format) {
	            if (!momentToFormat) {
	                return monthsNominative;
	            } else if (format === '') {
	                // Hack: if format empty we know this is used to generate
	                // RegExp by moment. Give then back both valid forms of months
	                // in RegExp ready format.
	                return (
	                    '(' +
	                    monthsSubjective[momentToFormat.month()] +
	                    '|' +
	                    monthsNominative[momentToFormat.month()] +
	                    ')'
	                );
	            } else if (/D MMMM/.test(format)) {
	                return monthsSubjective[momentToFormat.month()];
	            } else {
	                return monthsNominative[momentToFormat.month()];
	            }
	        },
	        monthsShort: 'sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru'.split('_'),
	        weekdays: 'niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota'.split(
	            '_'
	        ),
	        weekdaysShort: 'ndz_pon_wt_śr_czw_pt_sob'.split('_'),
	        weekdaysMin: 'Nd_Pn_Wt_Śr_Cz_Pt_So'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD.MM.YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd, D MMMM YYYY HH:mm',
	        },
	        calendar: {
	            sameDay: '[Dziś o] LT',
	            nextDay: '[Jutro o] LT',
	            nextWeek: function () {
	                switch (this.day()) {
	                    case 0:
	                        return '[W niedzielę o] LT';
	
	                    case 2:
	                        return '[We wtorek o] LT';
	
	                    case 3:
	                        return '[W środę o] LT';
	
	                    case 6:
	                        return '[W sobotę o] LT';
	
	                    default:
	                        return '[W] dddd [o] LT';
	                }
	            },
	            lastDay: '[Wczoraj o] LT',
	            lastWeek: function () {
	                switch (this.day()) {
	                    case 0:
	                        return '[W zeszłą niedzielę o] LT';
	                    case 3:
	                        return '[W zeszłą środę o] LT';
	                    case 6:
	                        return '[W zeszłą sobotę o] LT';
	                    default:
	                        return '[W zeszły] dddd [o] LT';
	                }
	            },
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: 'za %s',
	            past: '%s temu',
	            s: 'kilka sekund',
	            ss: translate,
	            m: translate,
	            mm: translate,
	            h: translate,
	            hh: translate,
	            d: '1 dzień',
	            dd: '%d dni',
	            M: 'miesiąc',
	            MM: translate,
	            y: 'rok',
	            yy: translate,
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}\./,
	        ordinal: '%d.',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4, // The week that contains Jan 4th is the first week of the year.
	        },
	    });
	
	    return pl;
	
	})));


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Portuguese [pt]
	//! author : Jefferson : https://github.com/jalex79
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var pt = moment.defineLocale('pt', {
	        months: 'janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro'.split(
	            '_'
	        ),
	        monthsShort: 'jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez'.split('_'),
	        weekdays: 'Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado'.split(
	            '_'
	        ),
	        weekdaysShort: 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
	        weekdaysMin: 'Do_2ª_3ª_4ª_5ª_6ª_Sá'.split('_'),
	        weekdaysParseExact: true,
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D [de] MMMM [de] YYYY',
	            LLL: 'D [de] MMMM [de] YYYY HH:mm',
	            LLLL: 'dddd, D [de] MMMM [de] YYYY HH:mm',
	        },
	        calendar: {
	            sameDay: '[Hoje às] LT',
	            nextDay: '[Amanhã às] LT',
	            nextWeek: 'dddd [às] LT',
	            lastDay: '[Ontem às] LT',
	            lastWeek: function () {
	                return this.day() === 0 || this.day() === 6
	                    ? '[Último] dddd [às] LT' // Saturday + Sunday
	                    : '[Última] dddd [às] LT'; // Monday - Friday
	            },
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: 'em %s',
	            past: 'há %s',
	            s: 'segundos',
	            ss: '%d segundos',
	            m: 'um minuto',
	            mm: '%d minutos',
	            h: 'uma hora',
	            hh: '%d horas',
	            d: 'um dia',
	            dd: '%d dias',
	            M: 'um mês',
	            MM: '%d meses',
	            y: 'um ano',
	            yy: '%d anos',
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}º/,
	        ordinal: '%dº',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4, // The week that contains Jan 4th is the first week of the year.
	        },
	    });
	
	    return pt;
	
	})));


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Portuguese (Brazil) [pt-br]
	//! author : Caio Ribeiro Pereira : https://github.com/caio-ribeiro-pereira
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var ptBr = moment.defineLocale('pt-br', {
	        months: 'janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro'.split(
	            '_'
	        ),
	        monthsShort: 'jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez'.split('_'),
	        weekdays: 'domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado'.split(
	            '_'
	        ),
	        weekdaysShort: 'dom_seg_ter_qua_qui_sex_sáb'.split('_'),
	        weekdaysMin: 'do_2ª_3ª_4ª_5ª_6ª_sá'.split('_'),
	        weekdaysParseExact: true,
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D [de] MMMM [de] YYYY',
	            LLL: 'D [de] MMMM [de] YYYY [às] HH:mm',
	            LLLL: 'dddd, D [de] MMMM [de] YYYY [às] HH:mm',
	        },
	        calendar: {
	            sameDay: '[Hoje às] LT',
	            nextDay: '[Amanhã às] LT',
	            nextWeek: 'dddd [às] LT',
	            lastDay: '[Ontem às] LT',
	            lastWeek: function () {
	                return this.day() === 0 || this.day() === 6
	                    ? '[Último] dddd [às] LT' // Saturday + Sunday
	                    : '[Última] dddd [às] LT'; // Monday - Friday
	            },
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: 'em %s',
	            past: 'há %s',
	            s: 'poucos segundos',
	            ss: '%d segundos',
	            m: 'um minuto',
	            mm: '%d minutos',
	            h: 'uma hora',
	            hh: '%d horas',
	            d: 'um dia',
	            dd: '%d dias',
	            M: 'um mês',
	            MM: '%d meses',
	            y: 'um ano',
	            yy: '%d anos',
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}º/,
	        ordinal: '%dº',
	    });
	
	    return ptBr;
	
	})));


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Romanian [ro]
	//! author : Vlad Gurdiga : https://github.com/gurdiga
	//! author : Valentin Agachi : https://github.com/avaly
	//! author : Emanuel Cepoi : https://github.com/cepem
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    function relativeTimeWithPlural(number, withoutSuffix, key) {
	        var format = {
	                ss: 'secunde',
	                mm: 'minute',
	                hh: 'ore',
	                dd: 'zile',
	                MM: 'luni',
	                yy: 'ani',
	            },
	            separator = ' ';
	        if (number % 100 >= 20 || (number >= 100 && number % 100 === 0)) {
	            separator = ' de ';
	        }
	        return number + separator + format[key];
	    }
	
	    var ro = moment.defineLocale('ro', {
	        months: 'ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie'.split(
	            '_'
	        ),
	        monthsShort: 'ian._feb._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.'.split(
	            '_'
	        ),
	        monthsParseExact: true,
	        weekdays: 'duminică_luni_marți_miercuri_joi_vineri_sâmbătă'.split('_'),
	        weekdaysShort: 'Dum_Lun_Mar_Mie_Joi_Vin_Sâm'.split('_'),
	        weekdaysMin: 'Du_Lu_Ma_Mi_Jo_Vi_Sâ'.split('_'),
	        longDateFormat: {
	            LT: 'H:mm',
	            LTS: 'H:mm:ss',
	            L: 'DD.MM.YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY H:mm',
	            LLLL: 'dddd, D MMMM YYYY H:mm',
	        },
	        calendar: {
	            sameDay: '[azi la] LT',
	            nextDay: '[mâine la] LT',
	            nextWeek: 'dddd [la] LT',
	            lastDay: '[ieri la] LT',
	            lastWeek: '[fosta] dddd [la] LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: 'peste %s',
	            past: '%s în urmă',
	            s: 'câteva secunde',
	            ss: relativeTimeWithPlural,
	            m: 'un minut',
	            mm: relativeTimeWithPlural,
	            h: 'o oră',
	            hh: relativeTimeWithPlural,
	            d: 'o zi',
	            dd: relativeTimeWithPlural,
	            M: 'o lună',
	            MM: relativeTimeWithPlural,
	            y: 'un an',
	            yy: relativeTimeWithPlural,
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 7, // The week that contains Jan 7th is the first week of the year.
	        },
	    });
	
	    return ro;
	
	})));


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Russian [ru]
	//! author : Viktorminator : https://github.com/Viktorminator
	//! author : Menelion Elensúle : https://github.com/Oire
	//! author : Коренберг Марк : https://github.com/socketpair
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    function plural(word, num) {
	        var forms = word.split('_');
	        return num % 10 === 1 && num % 100 !== 11
	            ? forms[0]
	            : num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20)
	            ? forms[1]
	            : forms[2];
	    }
	    function relativeTimeWithPlural(number, withoutSuffix, key) {
	        var format = {
	            ss: withoutSuffix ? 'секунда_секунды_секунд' : 'секунду_секунды_секунд',
	            mm: withoutSuffix ? 'минута_минуты_минут' : 'минуту_минуты_минут',
	            hh: 'час_часа_часов',
	            dd: 'день_дня_дней',
	            MM: 'месяц_месяца_месяцев',
	            yy: 'год_года_лет',
	        };
	        if (key === 'm') {
	            return withoutSuffix ? 'минута' : 'минуту';
	        } else {
	            return number + ' ' + plural(format[key], +number);
	        }
	    }
	    var monthsParse = [
	        /^янв/i,
	        /^фев/i,
	        /^мар/i,
	        /^апр/i,
	        /^ма[йя]/i,
	        /^июн/i,
	        /^июл/i,
	        /^авг/i,
	        /^сен/i,
	        /^окт/i,
	        /^ноя/i,
	        /^дек/i,
	    ];
	
	    // http://new.gramota.ru/spravka/rules/139-prop : § 103
	    // Сокращения месяцев: http://new.gramota.ru/spravka/buro/search-answer?s=242637
	    // CLDR data:          http://www.unicode.org/cldr/charts/28/summary/ru.html#1753
	    var ru = moment.defineLocale('ru', {
	        months: {
	            format: 'января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря'.split(
	                '_'
	            ),
	            standalone: 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split(
	                '_'
	            ),
	        },
	        monthsShort: {
	            // по CLDR именно "июл." и "июн.", но какой смысл менять букву на точку?
	            format: 'янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.'.split(
	                '_'
	            ),
	            standalone: 'янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.'.split(
	                '_'
	            ),
	        },
	        weekdays: {
	            standalone: 'воскресенье_понедельник_вторник_среда_четверг_пятница_суббота'.split(
	                '_'
	            ),
	            format: 'воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу'.split(
	                '_'
	            ),
	            isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?] ?dddd/,
	        },
	        weekdaysShort: 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
	        weekdaysMin: 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
	        monthsParse: monthsParse,
	        longMonthsParse: monthsParse,
	        shortMonthsParse: monthsParse,
	
	        // полные названия с падежами, по три буквы, для некоторых, по 4 буквы, сокращения с точкой и без точки
	        monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
	
	        // копия предыдущего
	        monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
	
	        // полные названия с падежами
	        monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
	
	        // Выражение, которое соответствует только сокращённым формам
	        monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
	        longDateFormat: {
	            LT: 'H:mm',
	            LTS: 'H:mm:ss',
	            L: 'DD.MM.YYYY',
	            LL: 'D MMMM YYYY г.',
	            LLL: 'D MMMM YYYY г., H:mm',
	            LLLL: 'dddd, D MMMM YYYY г., H:mm',
	        },
	        calendar: {
	            sameDay: '[Сегодня, в] LT',
	            nextDay: '[Завтра, в] LT',
	            lastDay: '[Вчера, в] LT',
	            nextWeek: function (now) {
	                if (now.week() !== this.week()) {
	                    switch (this.day()) {
	                        case 0:
	                            return '[В следующее] dddd, [в] LT';
	                        case 1:
	                        case 2:
	                        case 4:
	                            return '[В следующий] dddd, [в] LT';
	                        case 3:
	                        case 5:
	                        case 6:
	                            return '[В следующую] dddd, [в] LT';
	                    }
	                } else {
	                    if (this.day() === 2) {
	                        return '[Во] dddd, [в] LT';
	                    } else {
	                        return '[В] dddd, [в] LT';
	                    }
	                }
	            },
	            lastWeek: function (now) {
	                if (now.week() !== this.week()) {
	                    switch (this.day()) {
	                        case 0:
	                            return '[В прошлое] dddd, [в] LT';
	                        case 1:
	                        case 2:
	                        case 4:
	                            return '[В прошлый] dddd, [в] LT';
	                        case 3:
	                        case 5:
	                        case 6:
	                            return '[В прошлую] dddd, [в] LT';
	                    }
	                } else {
	                    if (this.day() === 2) {
	                        return '[Во] dddd, [в] LT';
	                    } else {
	                        return '[В] dddd, [в] LT';
	                    }
	                }
	            },
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: 'через %s',
	            past: '%s назад',
	            s: 'несколько секунд',
	            ss: relativeTimeWithPlural,
	            m: relativeTimeWithPlural,
	            mm: relativeTimeWithPlural,
	            h: 'час',
	            hh: relativeTimeWithPlural,
	            d: 'день',
	            dd: relativeTimeWithPlural,
	            M: 'месяц',
	            MM: relativeTimeWithPlural,
	            y: 'год',
	            yy: relativeTimeWithPlural,
	        },
	        meridiemParse: /ночи|утра|дня|вечера/i,
	        isPM: function (input) {
	            return /^(дня|вечера)$/.test(input);
	        },
	        meridiem: function (hour, minute, isLower) {
	            if (hour < 4) {
	                return 'ночи';
	            } else if (hour < 12) {
	                return 'утра';
	            } else if (hour < 17) {
	                return 'дня';
	            } else {
	                return 'вечера';
	            }
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
	        ordinal: function (number, period) {
	            switch (period) {
	                case 'M':
	                case 'd':
	                case 'DDD':
	                    return number + '-й';
	                case 'D':
	                    return number + '-го';
	                case 'w':
	                case 'W':
	                    return number + '-я';
	                default:
	                    return number;
	            }
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4, // The week that contains Jan 4th is the first week of the year.
	        },
	    });
	
	    return ru;
	
	})));


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Sindhi [sd]
	//! author : Narain Sagar : https://github.com/narainsagar
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var months = [
	            'جنوري',
	            'فيبروري',
	            'مارچ',
	            'اپريل',
	            'مئي',
	            'جون',
	            'جولاءِ',
	            'آگسٽ',
	            'سيپٽمبر',
	            'آڪٽوبر',
	            'نومبر',
	            'ڊسمبر',
	        ],
	        days = ['آچر', 'سومر', 'اڱارو', 'اربع', 'خميس', 'جمع', 'ڇنڇر'];
	
	    var sd = moment.defineLocale('sd', {
	        months: months,
	        monthsShort: months,
	        weekdays: days,
	        weekdaysShort: days,
	        weekdaysMin: days,
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd، D MMMM YYYY HH:mm',
	        },
	        meridiemParse: /صبح|شام/,
	        isPM: function (input) {
	            return 'شام' === input;
	        },
	        meridiem: function (hour, minute, isLower) {
	            if (hour < 12) {
	                return 'صبح';
	            }
	            return 'شام';
	        },
	        calendar: {
	            sameDay: '[اڄ] LT',
	            nextDay: '[سڀاڻي] LT',
	            nextWeek: 'dddd [اڳين هفتي تي] LT',
	            lastDay: '[ڪالهه] LT',
	            lastWeek: '[گزريل هفتي] dddd [تي] LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: '%s پوء',
	            past: '%s اڳ',
	            s: 'چند سيڪنڊ',
	            ss: '%d سيڪنڊ',
	            m: 'هڪ منٽ',
	            mm: '%d منٽ',
	            h: 'هڪ ڪلاڪ',
	            hh: '%d ڪلاڪ',
	            d: 'هڪ ڏينهن',
	            dd: '%d ڏينهن',
	            M: 'هڪ مهينو',
	            MM: '%d مهينا',
	            y: 'هڪ سال',
	            yy: '%d سال',
	        },
	        preparse: function (string) {
	            return string.replace(/،/g, ',');
	        },
	        postformat: function (string) {
	            return string.replace(/,/g, '،');
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4, // The week that contains Jan 4th is the first week of the year.
	        },
	    });
	
	    return sd;
	
	})));


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Northern Sami [se]
	//! authors : Bård Rolstad Henriksen : https://github.com/karamell
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var se = moment.defineLocale('se', {
	        months: 'ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu'.split(
	            '_'
	        ),
	        monthsShort: 'ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov'.split(
	            '_'
	        ),
	        weekdays: 'sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat'.split(
	            '_'
	        ),
	        weekdaysShort: 'sotn_vuos_maŋ_gask_duor_bear_láv'.split('_'),
	        weekdaysMin: 's_v_m_g_d_b_L'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD.MM.YYYY',
	            LL: 'MMMM D. [b.] YYYY',
	            LLL: 'MMMM D. [b.] YYYY [ti.] HH:mm',
	            LLLL: 'dddd, MMMM D. [b.] YYYY [ti.] HH:mm',
	        },
	        calendar: {
	            sameDay: '[otne ti] LT',
	            nextDay: '[ihttin ti] LT',
	            nextWeek: 'dddd [ti] LT',
	            lastDay: '[ikte ti] LT',
	            lastWeek: '[ovddit] dddd [ti] LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: '%s geažes',
	            past: 'maŋit %s',
	            s: 'moadde sekunddat',
	            ss: '%d sekunddat',
	            m: 'okta minuhta',
	            mm: '%d minuhtat',
	            h: 'okta diimmu',
	            hh: '%d diimmut',
	            d: 'okta beaivi',
	            dd: '%d beaivvit',
	            M: 'okta mánnu',
	            MM: '%d mánut',
	            y: 'okta jahki',
	            yy: '%d jagit',
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}\./,
	        ordinal: '%d.',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4, // The week that contains Jan 4th is the first week of the year.
	        },
	    });
	
	    return se;
	
	})));


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Sinhalese [si]
	//! author : Sampath Sitinamaluwa : https://github.com/sampathsris
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    /*jshint -W100*/
	    var si = moment.defineLocale('si', {
	        months: 'ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්'.split(
	            '_'
	        ),
	        monthsShort: 'ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ'.split(
	            '_'
	        ),
	        weekdays: 'ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා'.split(
	            '_'
	        ),
	        weekdaysShort: 'ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන'.split('_'),
	        weekdaysMin: 'ඉ_ස_අ_බ_බ්‍ර_සි_සෙ'.split('_'),
	        weekdaysParseExact: true,
	        longDateFormat: {
	            LT: 'a h:mm',
	            LTS: 'a h:mm:ss',
	            L: 'YYYY/MM/DD',
	            LL: 'YYYY MMMM D',
	            LLL: 'YYYY MMMM D, a h:mm',
	            LLLL: 'YYYY MMMM D [වැනි] dddd, a h:mm:ss',
	        },
	        calendar: {
	            sameDay: '[අද] LT[ට]',
	            nextDay: '[හෙට] LT[ට]',
	            nextWeek: 'dddd LT[ට]',
	            lastDay: '[ඊයේ] LT[ට]',
	            lastWeek: '[පසුගිය] dddd LT[ට]',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: '%sකින්',
	            past: '%sකට පෙර',
	            s: 'තත්පර කිහිපය',
	            ss: 'තත්පර %d',
	            m: 'මිනිත්තුව',
	            mm: 'මිනිත්තු %d',
	            h: 'පැය',
	            hh: 'පැය %d',
	            d: 'දිනය',
	            dd: 'දින %d',
	            M: 'මාසය',
	            MM: 'මාස %d',
	            y: 'වසර',
	            yy: 'වසර %d',
	        },
	        dayOfMonthOrdinalParse: /\d{1,2} වැනි/,
	        ordinal: function (number) {
	            return number + ' වැනි';
	        },
	        meridiemParse: /පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,
	        isPM: function (input) {
	            return input === 'ප.ව.' || input === 'පස් වරු';
	        },
	        meridiem: function (hours, minutes, isLower) {
	            if (hours > 11) {
	                return isLower ? 'ප.ව.' : 'පස් වරු';
	            } else {
	                return isLower ? 'පෙ.ව.' : 'පෙර වරු';
	            }
	        },
	    });
	
	    return si;
	
	})));


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Slovak [sk]
	//! author : Martin Minka : https://github.com/k2s
	//! based on work of petrbela : https://github.com/petrbela
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var months = 'január_február_marec_apríl_máj_jún_júl_august_september_október_november_december'.split(
	            '_'
	        ),
	        monthsShort = 'jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec'.split('_');
	    function plural(n) {
	        return n > 1 && n < 5;
	    }
	    function translate(number, withoutSuffix, key, isFuture) {
	        var result = number + ' ';
	        switch (key) {
	            case 's': // a few seconds / in a few seconds / a few seconds ago
	                return withoutSuffix || isFuture ? 'pár sekúnd' : 'pár sekundami';
	            case 'ss': // 9 seconds / in 9 seconds / 9 seconds ago
	                if (withoutSuffix || isFuture) {
	                    return result + (plural(number) ? 'sekundy' : 'sekúnd');
	                } else {
	                    return result + 'sekundami';
	                }
	            case 'm': // a minute / in a minute / a minute ago
	                return withoutSuffix ? 'minúta' : isFuture ? 'minútu' : 'minútou';
	            case 'mm': // 9 minutes / in 9 minutes / 9 minutes ago
	                if (withoutSuffix || isFuture) {
	                    return result + (plural(number) ? 'minúty' : 'minút');
	                } else {
	                    return result + 'minútami';
	                }
	            case 'h': // an hour / in an hour / an hour ago
	                return withoutSuffix ? 'hodina' : isFuture ? 'hodinu' : 'hodinou';
	            case 'hh': // 9 hours / in 9 hours / 9 hours ago
	                if (withoutSuffix || isFuture) {
	                    return result + (plural(number) ? 'hodiny' : 'hodín');
	                } else {
	                    return result + 'hodinami';
	                }
	            case 'd': // a day / in a day / a day ago
	                return withoutSuffix || isFuture ? 'deň' : 'dňom';
	            case 'dd': // 9 days / in 9 days / 9 days ago
	                if (withoutSuffix || isFuture) {
	                    return result + (plural(number) ? 'dni' : 'dní');
	                } else {
	                    return result + 'dňami';
	                }
	            case 'M': // a month / in a month / a month ago
	                return withoutSuffix || isFuture ? 'mesiac' : 'mesiacom';
	            case 'MM': // 9 months / in 9 months / 9 months ago
	                if (withoutSuffix || isFuture) {
	                    return result + (plural(number) ? 'mesiace' : 'mesiacov');
	                } else {
	                    return result + 'mesiacmi';
	                }
	            case 'y': // a year / in a year / a year ago
	                return withoutSuffix || isFuture ? 'rok' : 'rokom';
	            case 'yy': // 9 years / in 9 years / 9 years ago
	                if (withoutSuffix || isFuture) {
	                    return result + (plural(number) ? 'roky' : 'rokov');
	                } else {
	                    return result + 'rokmi';
	                }
	        }
	    }
	
	    var sk = moment.defineLocale('sk', {
	        months: months,
	        monthsShort: monthsShort,
	        weekdays: 'nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota'.split('_'),
	        weekdaysShort: 'ne_po_ut_st_št_pi_so'.split('_'),
	        weekdaysMin: 'ne_po_ut_st_št_pi_so'.split('_'),
	        longDateFormat: {
	            LT: 'H:mm',
	            LTS: 'H:mm:ss',
	            L: 'DD.MM.YYYY',
	            LL: 'D. MMMM YYYY',
	            LLL: 'D. MMMM YYYY H:mm',
	            LLLL: 'dddd D. MMMM YYYY H:mm',
	        },
	        calendar: {
	            sameDay: '[dnes o] LT',
	            nextDay: '[zajtra o] LT',
	            nextWeek: function () {
	                switch (this.day()) {
	                    case 0:
	                        return '[v nedeľu o] LT';
	                    case 1:
	                    case 2:
	                        return '[v] dddd [o] LT';
	                    case 3:
	                        return '[v stredu o] LT';
	                    case 4:
	                        return '[vo štvrtok o] LT';
	                    case 5:
	                        return '[v piatok o] LT';
	                    case 6:
	                        return '[v sobotu o] LT';
	                }
	            },
	            lastDay: '[včera o] LT',
	            lastWeek: function () {
	                switch (this.day()) {
	                    case 0:
	                        return '[minulú nedeľu o] LT';
	                    case 1:
	                    case 2:
	                        return '[minulý] dddd [o] LT';
	                    case 3:
	                        return '[minulú stredu o] LT';
	                    case 4:
	                    case 5:
	                        return '[minulý] dddd [o] LT';
	                    case 6:
	                        return '[minulú sobotu o] LT';
	                }
	            },
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: 'za %s',
	            past: 'pred %s',
	            s: translate,
	            ss: translate,
	            m: translate,
	            mm: translate,
	            h: translate,
	            hh: translate,
	            d: translate,
	            dd: translate,
	            M: translate,
	            MM: translate,
	            y: translate,
	            yy: translate,
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}\./,
	        ordinal: '%d.',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4, // The week that contains Jan 4th is the first week of the year.
	        },
	    });
	
	    return sk;
	
	})));


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Slovenian [sl]
	//! author : Robert Sedovšek : https://github.com/sedovsek
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    function processRelativeTime(number, withoutSuffix, key, isFuture) {
	        var result = number + ' ';
	        switch (key) {
	            case 's':
	                return withoutSuffix || isFuture
	                    ? 'nekaj sekund'
	                    : 'nekaj sekundami';
	            case 'ss':
	                if (number === 1) {
	                    result += withoutSuffix ? 'sekundo' : 'sekundi';
	                } else if (number === 2) {
	                    result += withoutSuffix || isFuture ? 'sekundi' : 'sekundah';
	                } else if (number < 5) {
	                    result += withoutSuffix || isFuture ? 'sekunde' : 'sekundah';
	                } else {
	                    result += 'sekund';
	                }
	                return result;
	            case 'm':
	                return withoutSuffix ? 'ena minuta' : 'eno minuto';
	            case 'mm':
	                if (number === 1) {
	                    result += withoutSuffix ? 'minuta' : 'minuto';
	                } else if (number === 2) {
	                    result += withoutSuffix || isFuture ? 'minuti' : 'minutama';
	                } else if (number < 5) {
	                    result += withoutSuffix || isFuture ? 'minute' : 'minutami';
	                } else {
	                    result += withoutSuffix || isFuture ? 'minut' : 'minutami';
	                }
	                return result;
	            case 'h':
	                return withoutSuffix ? 'ena ura' : 'eno uro';
	            case 'hh':
	                if (number === 1) {
	                    result += withoutSuffix ? 'ura' : 'uro';
	                } else if (number === 2) {
	                    result += withoutSuffix || isFuture ? 'uri' : 'urama';
	                } else if (number < 5) {
	                    result += withoutSuffix || isFuture ? 'ure' : 'urami';
	                } else {
	                    result += withoutSuffix || isFuture ? 'ur' : 'urami';
	                }
	                return result;
	            case 'd':
	                return withoutSuffix || isFuture ? 'en dan' : 'enim dnem';
	            case 'dd':
	                if (number === 1) {
	                    result += withoutSuffix || isFuture ? 'dan' : 'dnem';
	                } else if (number === 2) {
	                    result += withoutSuffix || isFuture ? 'dni' : 'dnevoma';
	                } else {
	                    result += withoutSuffix || isFuture ? 'dni' : 'dnevi';
	                }
	                return result;
	            case 'M':
	                return withoutSuffix || isFuture ? 'en mesec' : 'enim mesecem';
	            case 'MM':
	                if (number === 1) {
	                    result += withoutSuffix || isFuture ? 'mesec' : 'mesecem';
	                } else if (number === 2) {
	                    result += withoutSuffix || isFuture ? 'meseca' : 'mesecema';
	                } else if (number < 5) {
	                    result += withoutSuffix || isFuture ? 'mesece' : 'meseci';
	                } else {
	                    result += withoutSuffix || isFuture ? 'mesecev' : 'meseci';
	                }
	                return result;
	            case 'y':
	                return withoutSuffix || isFuture ? 'eno leto' : 'enim letom';
	            case 'yy':
	                if (number === 1) {
	                    result += withoutSuffix || isFuture ? 'leto' : 'letom';
	                } else if (number === 2) {
	                    result += withoutSuffix || isFuture ? 'leti' : 'letoma';
	                } else if (number < 5) {
	                    result += withoutSuffix || isFuture ? 'leta' : 'leti';
	                } else {
	                    result += withoutSuffix || isFuture ? 'let' : 'leti';
	                }
	                return result;
	        }
	    }
	
	    var sl = moment.defineLocale('sl', {
	        months: 'januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december'.split(
	            '_'
	        ),
	        monthsShort: 'jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.'.split(
	            '_'
	        ),
	        monthsParseExact: true,
	        weekdays: 'nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota'.split('_'),
	        weekdaysShort: 'ned._pon._tor._sre._čet._pet._sob.'.split('_'),
	        weekdaysMin: 'ne_po_to_sr_če_pe_so'.split('_'),
	        weekdaysParseExact: true,
	        longDateFormat: {
	            LT: 'H:mm',
	            LTS: 'H:mm:ss',
	            L: 'DD. MM. YYYY',
	            LL: 'D. MMMM YYYY',
	            LLL: 'D. MMMM YYYY H:mm',
	            LLLL: 'dddd, D. MMMM YYYY H:mm',
	        },
	        calendar: {
	            sameDay: '[danes ob] LT',
	            nextDay: '[jutri ob] LT',
	
	            nextWeek: function () {
	                switch (this.day()) {
	                    case 0:
	                        return '[v] [nedeljo] [ob] LT';
	                    case 3:
	                        return '[v] [sredo] [ob] LT';
	                    case 6:
	                        return '[v] [soboto] [ob] LT';
	                    case 1:
	                    case 2:
	                    case 4:
	                    case 5:
	                        return '[v] dddd [ob] LT';
	                }
	            },
	            lastDay: '[včeraj ob] LT',
	            lastWeek: function () {
	                switch (this.day()) {
	                    case 0:
	                        return '[prejšnjo] [nedeljo] [ob] LT';
	                    case 3:
	                        return '[prejšnjo] [sredo] [ob] LT';
	                    case 6:
	                        return '[prejšnjo] [soboto] [ob] LT';
	                    case 1:
	                    case 2:
	                    case 4:
	                    case 5:
	                        return '[prejšnji] dddd [ob] LT';
	                }
	            },
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: 'čez %s',
	            past: 'pred %s',
	            s: processRelativeTime,
	            ss: processRelativeTime,
	            m: processRelativeTime,
	            mm: processRelativeTime,
	            h: processRelativeTime,
	            hh: processRelativeTime,
	            d: processRelativeTime,
	            dd: processRelativeTime,
	            M: processRelativeTime,
	            MM: processRelativeTime,
	            y: processRelativeTime,
	            yy: processRelativeTime,
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}\./,
	        ordinal: '%d.',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 7, // The week that contains Jan 7th is the first week of the year.
	        },
	    });
	
	    return sl;
	
	})));


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Albanian [sq]
	//! author : Flakërim Ismani : https://github.com/flakerimi
	//! author : Menelion Elensúle : https://github.com/Oire
	//! author : Oerd Cukalla : https://github.com/oerd
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var sq = moment.defineLocale('sq', {
	        months: 'Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor'.split(
	            '_'
	        ),
	        monthsShort: 'Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj'.split('_'),
	        weekdays: 'E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë'.split(
	            '_'
	        ),
	        weekdaysShort: 'Die_Hën_Mar_Mër_Enj_Pre_Sht'.split('_'),
	        weekdaysMin: 'D_H_Ma_Më_E_P_Sh'.split('_'),
	        weekdaysParseExact: true,
	        meridiemParse: /PD|MD/,
	        isPM: function (input) {
	            return input.charAt(0) === 'M';
	        },
	        meridiem: function (hours, minutes, isLower) {
	            return hours < 12 ? 'PD' : 'MD';
	        },
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd, D MMMM YYYY HH:mm',
	        },
	        calendar: {
	            sameDay: '[Sot në] LT',
	            nextDay: '[Nesër në] LT',
	            nextWeek: 'dddd [në] LT',
	            lastDay: '[Dje në] LT',
	            lastWeek: 'dddd [e kaluar në] LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: 'në %s',
	            past: '%s më parë',
	            s: 'disa sekonda',
	            ss: '%d sekonda',
	            m: 'një minutë',
	            mm: '%d minuta',
	            h: 'një orë',
	            hh: '%d orë',
	            d: 'një ditë',
	            dd: '%d ditë',
	            M: 'një muaj',
	            MM: '%d muaj',
	            y: 'një vit',
	            yy: '%d vite',
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}\./,
	        ordinal: '%d.',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4, // The week that contains Jan 4th is the first week of the year.
	        },
	    });
	
	    return sq;
	
	})));


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Serbian [sr]
	//! author : Milan Janačković<milanjanackovic@gmail.com> : https://github.com/milan-j
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var translator = {
	        words: {
	            //Different grammatical cases
	            ss: ['sekunda', 'sekunde', 'sekundi'],
	            m: ['jedan minut', 'jedne minute'],
	            mm: ['minut', 'minute', 'minuta'],
	            h: ['jedan sat', 'jednog sata'],
	            hh: ['sat', 'sata', 'sati'],
	            dd: ['dan', 'dana', 'dana'],
	            MM: ['mesec', 'meseca', 'meseci'],
	            yy: ['godina', 'godine', 'godina'],
	        },
	        correctGrammaticalCase: function (number, wordKey) {
	            return number === 1
	                ? wordKey[0]
	                : number >= 2 && number <= 4
	                ? wordKey[1]
	                : wordKey[2];
	        },
	        translate: function (number, withoutSuffix, key) {
	            var wordKey = translator.words[key];
	            if (key.length === 1) {
	                return withoutSuffix ? wordKey[0] : wordKey[1];
	            } else {
	                return (
	                    number +
	                    ' ' +
	                    translator.correctGrammaticalCase(number, wordKey)
	                );
	            }
	        },
	    };
	
	    var sr = moment.defineLocale('sr', {
	        months: 'januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar'.split(
	            '_'
	        ),
	        monthsShort: 'jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.'.split(
	            '_'
	        ),
	        monthsParseExact: true,
	        weekdays: 'nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota'.split(
	            '_'
	        ),
	        weekdaysShort: 'ned._pon._uto._sre._čet._pet._sub.'.split('_'),
	        weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
	        weekdaysParseExact: true,
	        longDateFormat: {
	            LT: 'H:mm',
	            LTS: 'H:mm:ss',
	            L: 'DD.MM.YYYY',
	            LL: 'D. MMMM YYYY',
	            LLL: 'D. MMMM YYYY H:mm',
	            LLLL: 'dddd, D. MMMM YYYY H:mm',
	        },
	        calendar: {
	            sameDay: '[danas u] LT',
	            nextDay: '[sutra u] LT',
	            nextWeek: function () {
	                switch (this.day()) {
	                    case 0:
	                        return '[u] [nedelju] [u] LT';
	                    case 3:
	                        return '[u] [sredu] [u] LT';
	                    case 6:
	                        return '[u] [subotu] [u] LT';
	                    case 1:
	                    case 2:
	                    case 4:
	                    case 5:
	                        return '[u] dddd [u] LT';
	                }
	            },
	            lastDay: '[juče u] LT',
	            lastWeek: function () {
	                var lastWeekDays = [
	                    '[prošle] [nedelje] [u] LT',
	                    '[prošlog] [ponedeljka] [u] LT',
	                    '[prošlog] [utorka] [u] LT',
	                    '[prošle] [srede] [u] LT',
	                    '[prošlog] [četvrtka] [u] LT',
	                    '[prošlog] [petka] [u] LT',
	                    '[prošle] [subote] [u] LT',
	                ];
	                return lastWeekDays[this.day()];
	            },
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: 'za %s',
	            past: 'pre %s',
	            s: 'nekoliko sekundi',
	            ss: translator.translate,
	            m: translator.translate,
	            mm: translator.translate,
	            h: translator.translate,
	            hh: translator.translate,
	            d: 'dan',
	            dd: translator.translate,
	            M: 'mesec',
	            MM: translator.translate,
	            y: 'godinu',
	            yy: translator.translate,
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}\./,
	        ordinal: '%d.',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 7, // The week that contains Jan 7th is the first week of the year.
	        },
	    });
	
	    return sr;
	
	})));


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Serbian Cyrillic [sr-cyrl]
	//! author : Milan Janačković<milanjanackovic@gmail.com> : https://github.com/milan-j
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var translator = {
	        words: {
	            //Different grammatical cases
	            ss: ['секунда', 'секунде', 'секунди'],
	            m: ['један минут', 'једне минуте'],
	            mm: ['минут', 'минуте', 'минута'],
	            h: ['један сат', 'једног сата'],
	            hh: ['сат', 'сата', 'сати'],
	            dd: ['дан', 'дана', 'дана'],
	            MM: ['месец', 'месеца', 'месеци'],
	            yy: ['година', 'године', 'година'],
	        },
	        correctGrammaticalCase: function (number, wordKey) {
	            return number === 1
	                ? wordKey[0]
	                : number >= 2 && number <= 4
	                ? wordKey[1]
	                : wordKey[2];
	        },
	        translate: function (number, withoutSuffix, key) {
	            var wordKey = translator.words[key];
	            if (key.length === 1) {
	                return withoutSuffix ? wordKey[0] : wordKey[1];
	            } else {
	                return (
	                    number +
	                    ' ' +
	                    translator.correctGrammaticalCase(number, wordKey)
	                );
	            }
	        },
	    };
	
	    var srCyrl = moment.defineLocale('sr-cyrl', {
	        months: 'јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар'.split(
	            '_'
	        ),
	        monthsShort: 'јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.'.split(
	            '_'
	        ),
	        monthsParseExact: true,
	        weekdays: 'недеља_понедељак_уторак_среда_четвртак_петак_субота'.split('_'),
	        weekdaysShort: 'нед._пон._уто._сре._чет._пет._суб.'.split('_'),
	        weekdaysMin: 'не_по_ут_ср_че_пе_су'.split('_'),
	        weekdaysParseExact: true,
	        longDateFormat: {
	            LT: 'H:mm',
	            LTS: 'H:mm:ss',
	            L: 'DD.MM.YYYY',
	            LL: 'D. MMMM YYYY',
	            LLL: 'D. MMMM YYYY H:mm',
	            LLLL: 'dddd, D. MMMM YYYY H:mm',
	        },
	        calendar: {
	            sameDay: '[данас у] LT',
	            nextDay: '[сутра у] LT',
	            nextWeek: function () {
	                switch (this.day()) {
	                    case 0:
	                        return '[у] [недељу] [у] LT';
	                    case 3:
	                        return '[у] [среду] [у] LT';
	                    case 6:
	                        return '[у] [суботу] [у] LT';
	                    case 1:
	                    case 2:
	                    case 4:
	                    case 5:
	                        return '[у] dddd [у] LT';
	                }
	            },
	            lastDay: '[јуче у] LT',
	            lastWeek: function () {
	                var lastWeekDays = [
	                    '[прошле] [недеље] [у] LT',
	                    '[прошлог] [понедељка] [у] LT',
	                    '[прошлог] [уторка] [у] LT',
	                    '[прошле] [среде] [у] LT',
	                    '[прошлог] [четвртка] [у] LT',
	                    '[прошлог] [петка] [у] LT',
	                    '[прошле] [суботе] [у] LT',
	                ];
	                return lastWeekDays[this.day()];
	            },
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: 'за %s',
	            past: 'пре %s',
	            s: 'неколико секунди',
	            ss: translator.translate,
	            m: translator.translate,
	            mm: translator.translate,
	            h: translator.translate,
	            hh: translator.translate,
	            d: 'дан',
	            dd: translator.translate,
	            M: 'месец',
	            MM: translator.translate,
	            y: 'годину',
	            yy: translator.translate,
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}\./,
	        ordinal: '%d.',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 7, // The week that contains Jan 7th is the first week of the year.
	        },
	    });
	
	    return srCyrl;
	
	})));


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : siSwati [ss]
	//! author : Nicolai Davies<mail@nicolai.io> : https://github.com/nicolaidavies
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var ss = moment.defineLocale('ss', {
	        months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split(
	            '_'
	        ),
	        monthsShort: 'Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo'.split('_'),
	        weekdays: 'Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo'.split(
	            '_'
	        ),
	        weekdaysShort: 'Lis_Umb_Lsb_Les_Lsi_Lsh_Umg'.split('_'),
	        weekdaysMin: 'Li_Us_Lb_Lt_Ls_Lh_Ug'.split('_'),
	        weekdaysParseExact: true,
	        longDateFormat: {
	            LT: 'h:mm A',
	            LTS: 'h:mm:ss A',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY h:mm A',
	            LLLL: 'dddd, D MMMM YYYY h:mm A',
	        },
	        calendar: {
	            sameDay: '[Namuhla nga] LT',
	            nextDay: '[Kusasa nga] LT',
	            nextWeek: 'dddd [nga] LT',
	            lastDay: '[Itolo nga] LT',
	            lastWeek: 'dddd [leliphelile] [nga] LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: 'nga %s',
	            past: 'wenteka nga %s',
	            s: 'emizuzwana lomcane',
	            ss: '%d mzuzwana',
	            m: 'umzuzu',
	            mm: '%d emizuzu',
	            h: 'lihora',
	            hh: '%d emahora',
	            d: 'lilanga',
	            dd: '%d emalanga',
	            M: 'inyanga',
	            MM: '%d tinyanga',
	            y: 'umnyaka',
	            yy: '%d iminyaka',
	        },
	        meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
	        meridiem: function (hours, minutes, isLower) {
	            if (hours < 11) {
	                return 'ekuseni';
	            } else if (hours < 15) {
	                return 'emini';
	            } else if (hours < 19) {
	                return 'entsambama';
	            } else {
	                return 'ebusuku';
	            }
	        },
	        meridiemHour: function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === 'ekuseni') {
	                return hour;
	            } else if (meridiem === 'emini') {
	                return hour >= 11 ? hour : hour + 12;
	            } else if (meridiem === 'entsambama' || meridiem === 'ebusuku') {
	                if (hour === 0) {
	                    return 0;
	                }
	                return hour + 12;
	            }
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}/,
	        ordinal: '%d',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4, // The week that contains Jan 4th is the first week of the year.
	        },
	    });
	
	    return ss;
	
	})));


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Swedish [sv]
	//! author : Jens Alm : https://github.com/ulmus
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var sv = moment.defineLocale('sv', {
	        months: 'januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december'.split(
	            '_'
	        ),
	        monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
	        weekdays: 'söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag'.split('_'),
	        weekdaysShort: 'sön_mån_tis_ons_tor_fre_lör'.split('_'),
	        weekdaysMin: 'sö_må_ti_on_to_fr_lö'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'YYYY-MM-DD',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY [kl.] HH:mm',
	            LLLL: 'dddd D MMMM YYYY [kl.] HH:mm',
	            lll: 'D MMM YYYY HH:mm',
	            llll: 'ddd D MMM YYYY HH:mm',
	        },
	        calendar: {
	            sameDay: '[Idag] LT',
	            nextDay: '[Imorgon] LT',
	            lastDay: '[Igår] LT',
	            nextWeek: '[På] dddd LT',
	            lastWeek: '[I] dddd[s] LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: 'om %s',
	            past: 'för %s sedan',
	            s: 'några sekunder',
	            ss: '%d sekunder',
	            m: 'en minut',
	            mm: '%d minuter',
	            h: 'en timme',
	            hh: '%d timmar',
	            d: 'en dag',
	            dd: '%d dagar',
	            M: 'en månad',
	            MM: '%d månader',
	            y: 'ett år',
	            yy: '%d år',
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}(\:e|\:a)/,
	        ordinal: function (number) {
	            var b = number % 10,
	                output =
	                    ~~((number % 100) / 10) === 1
	                        ? ':e'
	                        : b === 1
	                        ? ':a'
	                        : b === 2
	                        ? ':a'
	                        : b === 3
	                        ? ':e'
	                        : ':e';
	            return number + output;
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4, // The week that contains Jan 4th is the first week of the year.
	        },
	    });
	
	    return sv;
	
	})));


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Swahili [sw]
	//! author : Fahad Kassim : https://github.com/fadsel
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var sw = moment.defineLocale('sw', {
	        months: 'Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba'.split(
	            '_'
	        ),
	        monthsShort: 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des'.split('_'),
	        weekdays: 'Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi'.split(
	            '_'
	        ),
	        weekdaysShort: 'Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos'.split('_'),
	        weekdaysMin: 'J2_J3_J4_J5_Al_Ij_J1'.split('_'),
	        weekdaysParseExact: true,
	        longDateFormat: {
	            LT: 'hh:mm A',
	            LTS: 'HH:mm:ss',
	            L: 'DD.MM.YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd, D MMMM YYYY HH:mm',
	        },
	        calendar: {
	            sameDay: '[leo saa] LT',
	            nextDay: '[kesho saa] LT',
	            nextWeek: '[wiki ijayo] dddd [saat] LT',
	            lastDay: '[jana] LT',
	            lastWeek: '[wiki iliyopita] dddd [saat] LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: '%s baadaye',
	            past: 'tokea %s',
	            s: 'hivi punde',
	            ss: 'sekunde %d',
	            m: 'dakika moja',
	            mm: 'dakika %d',
	            h: 'saa limoja',
	            hh: 'masaa %d',
	            d: 'siku moja',
	            dd: 'siku %d',
	            M: 'mwezi mmoja',
	            MM: 'miezi %d',
	            y: 'mwaka mmoja',
	            yy: 'miaka %d',
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 7, // The week that contains Jan 7th is the first week of the year.
	        },
	    });
	
	    return sw;
	
	})));


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Tamil [ta]
	//! author : Arjunkumar Krishnamoorthy : https://github.com/tk120404
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var symbolMap = {
	            '1': '௧',
	            '2': '௨',
	            '3': '௩',
	            '4': '௪',
	            '5': '௫',
	            '6': '௬',
	            '7': '௭',
	            '8': '௮',
	            '9': '௯',
	            '0': '௦',
	        },
	        numberMap = {
	            '௧': '1',
	            '௨': '2',
	            '௩': '3',
	            '௪': '4',
	            '௫': '5',
	            '௬': '6',
	            '௭': '7',
	            '௮': '8',
	            '௯': '9',
	            '௦': '0',
	        };
	
	    var ta = moment.defineLocale('ta', {
	        months: 'ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்'.split(
	            '_'
	        ),
	        monthsShort: 'ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்'.split(
	            '_'
	        ),
	        weekdays: 'ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை'.split(
	            '_'
	        ),
	        weekdaysShort: 'ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி'.split(
	            '_'
	        ),
	        weekdaysMin: 'ஞா_தி_செ_பு_வி_வெ_ச'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY, HH:mm',
	            LLLL: 'dddd, D MMMM YYYY, HH:mm',
	        },
	        calendar: {
	            sameDay: '[இன்று] LT',
	            nextDay: '[நாளை] LT',
	            nextWeek: 'dddd, LT',
	            lastDay: '[நேற்று] LT',
	            lastWeek: '[கடந்த வாரம்] dddd, LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: '%s இல்',
	            past: '%s முன்',
	            s: 'ஒரு சில விநாடிகள்',
	            ss: '%d விநாடிகள்',
	            m: 'ஒரு நிமிடம்',
	            mm: '%d நிமிடங்கள்',
	            h: 'ஒரு மணி நேரம்',
	            hh: '%d மணி நேரம்',
	            d: 'ஒரு நாள்',
	            dd: '%d நாட்கள்',
	            M: 'ஒரு மாதம்',
	            MM: '%d மாதங்கள்',
	            y: 'ஒரு வருடம்',
	            yy: '%d ஆண்டுகள்',
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}வது/,
	        ordinal: function (number) {
	            return number + 'வது';
	        },
	        preparse: function (string) {
	            return string.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, function (match) {
	                return numberMap[match];
	            });
	        },
	        postformat: function (string) {
	            return string.replace(/\d/g, function (match) {
	                return symbolMap[match];
	            });
	        },
	        // refer http://ta.wikipedia.org/s/1er1
	        meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
	        meridiem: function (hour, minute, isLower) {
	            if (hour < 2) {
	                return ' யாமம்';
	            } else if (hour < 6) {
	                return ' வைகறை'; // வைகறை
	            } else if (hour < 10) {
	                return ' காலை'; // காலை
	            } else if (hour < 14) {
	                return ' நண்பகல்'; // நண்பகல்
	            } else if (hour < 18) {
	                return ' எற்பாடு'; // எற்பாடு
	            } else if (hour < 22) {
	                return ' மாலை'; // மாலை
	            } else {
	                return ' யாமம்';
	            }
	        },
	        meridiemHour: function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === 'யாமம்') {
	                return hour < 2 ? hour : hour + 12;
	            } else if (meridiem === 'வைகறை' || meridiem === 'காலை') {
	                return hour;
	            } else if (meridiem === 'நண்பகல்') {
	                return hour >= 10 ? hour : hour + 12;
	            } else {
	                return hour + 12;
	            }
	        },
	        week: {
	            dow: 0, // Sunday is the first day of the week.
	            doy: 6, // The week that contains Jan 6th is the first week of the year.
	        },
	    });
	
	    return ta;
	
	})));


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Telugu [te]
	//! author : Krishna Chaitanya Thota : https://github.com/kcthota
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var te = moment.defineLocale('te', {
	        months: 'జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జులై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్'.split(
	            '_'
	        ),
	        monthsShort: 'జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జులై_ఆగ._సెప్._అక్టో._నవ._డిసె.'.split(
	            '_'
	        ),
	        monthsParseExact: true,
	        weekdays: 'ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం'.split(
	            '_'
	        ),
	        weekdaysShort: 'ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని'.split('_'),
	        weekdaysMin: 'ఆ_సో_మం_బు_గు_శు_శ'.split('_'),
	        longDateFormat: {
	            LT: 'A h:mm',
	            LTS: 'A h:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY, A h:mm',
	            LLLL: 'dddd, D MMMM YYYY, A h:mm',
	        },
	        calendar: {
	            sameDay: '[నేడు] LT',
	            nextDay: '[రేపు] LT',
	            nextWeek: 'dddd, LT',
	            lastDay: '[నిన్న] LT',
	            lastWeek: '[గత] dddd, LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: '%s లో',
	            past: '%s క్రితం',
	            s: 'కొన్ని క్షణాలు',
	            ss: '%d సెకన్లు',
	            m: 'ఒక నిమిషం',
	            mm: '%d నిమిషాలు',
	            h: 'ఒక గంట',
	            hh: '%d గంటలు',
	            d: 'ఒక రోజు',
	            dd: '%d రోజులు',
	            M: 'ఒక నెల',
	            MM: '%d నెలలు',
	            y: 'ఒక సంవత్సరం',
	            yy: '%d సంవత్సరాలు',
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}వ/,
	        ordinal: '%dవ',
	        meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,
	        meridiemHour: function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === 'రాత్రి') {
	                return hour < 4 ? hour : hour + 12;
	            } else if (meridiem === 'ఉదయం') {
	                return hour;
	            } else if (meridiem === 'మధ్యాహ్నం') {
	                return hour >= 10 ? hour : hour + 12;
	            } else if (meridiem === 'సాయంత్రం') {
	                return hour + 12;
	            }
	        },
	        meridiem: function (hour, minute, isLower) {
	            if (hour < 4) {
	                return 'రాత్రి';
	            } else if (hour < 10) {
	                return 'ఉదయం';
	            } else if (hour < 17) {
	                return 'మధ్యాహ్నం';
	            } else if (hour < 20) {
	                return 'సాయంత్రం';
	            } else {
	                return 'రాత్రి';
	            }
	        },
	        week: {
	            dow: 0, // Sunday is the first day of the week.
	            doy: 6, // The week that contains Jan 6th is the first week of the year.
	        },
	    });
	
	    return te;
	
	})));


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Tetun Dili (East Timor) [tet]
	//! author : Joshua Brooks : https://github.com/joshbrooks
	//! author : Onorio De J. Afonso : https://github.com/marobo
	//! author : Sonia Simoes : https://github.com/soniasimoes
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var tet = moment.defineLocale('tet', {
	        months: 'Janeiru_Fevereiru_Marsu_Abril_Maiu_Juñu_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru'.split(
	            '_'
	        ),
	        monthsShort: 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
	        weekdays: 'Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu'.split('_'),
	        weekdaysShort: 'Dom_Seg_Ters_Kua_Kint_Sest_Sab'.split('_'),
	        weekdaysMin: 'Do_Seg_Te_Ku_Ki_Ses_Sa'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd, D MMMM YYYY HH:mm',
	        },
	        calendar: {
	            sameDay: '[Ohin iha] LT',
	            nextDay: '[Aban iha] LT',
	            nextWeek: 'dddd [iha] LT',
	            lastDay: '[Horiseik iha] LT',
	            lastWeek: 'dddd [semana kotuk] [iha] LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: 'iha %s',
	            past: '%s liuba',
	            s: 'segundu balun',
	            ss: 'segundu %d',
	            m: 'minutu ida',
	            mm: 'minutu %d',
	            h: 'oras ida',
	            hh: 'oras %d',
	            d: 'loron ida',
	            dd: 'loron %d',
	            M: 'fulan ida',
	            MM: 'fulan %d',
	            y: 'tinan ida',
	            yy: 'tinan %d',
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
	        ordinal: function (number) {
	            var b = number % 10,
	                output =
	                    ~~((number % 100) / 10) === 1
	                        ? 'th'
	                        : b === 1
	                        ? 'st'
	                        : b === 2
	                        ? 'nd'
	                        : b === 3
	                        ? 'rd'
	                        : 'th';
	            return number + output;
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4, // The week that contains Jan 4th is the first week of the year.
	        },
	    });
	
	    return tet;
	
	})));


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Tajik [tg]
	//! author : Orif N. Jr. : https://github.com/orif-jr
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var suffixes = {
	        0: '-ум',
	        1: '-ум',
	        2: '-юм',
	        3: '-юм',
	        4: '-ум',
	        5: '-ум',
	        6: '-ум',
	        7: '-ум',
	        8: '-ум',
	        9: '-ум',
	        10: '-ум',
	        12: '-ум',
	        13: '-ум',
	        20: '-ум',
	        30: '-юм',
	        40: '-ум',
	        50: '-ум',
	        60: '-ум',
	        70: '-ум',
	        80: '-ум',
	        90: '-ум',
	        100: '-ум',
	    };
	
	    var tg = moment.defineLocale('tg', {
	        months: 'январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр'.split(
	            '_'
	        ),
	        monthsShort: 'янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек'.split('_'),
	        weekdays: 'якшанбе_душанбе_сешанбе_чоршанбе_панҷшанбе_ҷумъа_шанбе'.split(
	            '_'
	        ),
	        weekdaysShort: 'яшб_дшб_сшб_чшб_пшб_ҷум_шнб'.split('_'),
	        weekdaysMin: 'яш_дш_сш_чш_пш_ҷм_шб'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd, D MMMM YYYY HH:mm',
	        },
	        calendar: {
	            sameDay: '[Имрӯз соати] LT',
	            nextDay: '[Пагоҳ соати] LT',
	            lastDay: '[Дирӯз соати] LT',
	            nextWeek: 'dddd[и] [ҳафтаи оянда соати] LT',
	            lastWeek: 'dddd[и] [ҳафтаи гузашта соати] LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: 'баъди %s',
	            past: '%s пеш',
	            s: 'якчанд сония',
	            m: 'як дақиқа',
	            mm: '%d дақиқа',
	            h: 'як соат',
	            hh: '%d соат',
	            d: 'як рӯз',
	            dd: '%d рӯз',
	            M: 'як моҳ',
	            MM: '%d моҳ',
	            y: 'як сол',
	            yy: '%d сол',
	        },
	        meridiemParse: /шаб|субҳ|рӯз|бегоҳ/,
	        meridiemHour: function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === 'шаб') {
	                return hour < 4 ? hour : hour + 12;
	            } else if (meridiem === 'субҳ') {
	                return hour;
	            } else if (meridiem === 'рӯз') {
	                return hour >= 11 ? hour : hour + 12;
	            } else if (meridiem === 'бегоҳ') {
	                return hour + 12;
	            }
	        },
	        meridiem: function (hour, minute, isLower) {
	            if (hour < 4) {
	                return 'шаб';
	            } else if (hour < 11) {
	                return 'субҳ';
	            } else if (hour < 16) {
	                return 'рӯз';
	            } else if (hour < 19) {
	                return 'бегоҳ';
	            } else {
	                return 'шаб';
	            }
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}-(ум|юм)/,
	        ordinal: function (number) {
	            var a = number % 10,
	                b = number >= 100 ? 100 : null;
	            return number + (suffixes[number] || suffixes[a] || suffixes[b]);
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 7, // The week that contains Jan 1th is the first week of the year.
	        },
	    });
	
	    return tg;
	
	})));


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Thai [th]
	//! author : Kridsada Thanabulpong : https://github.com/sirn
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var th = moment.defineLocale('th', {
	        months: 'มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม'.split(
	            '_'
	        ),
	        monthsShort: 'ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.'.split(
	            '_'
	        ),
	        monthsParseExact: true,
	        weekdays: 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์'.split('_'),
	        weekdaysShort: 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์'.split('_'), // yes, three characters difference
	        weekdaysMin: 'อา._จ._อ._พ._พฤ._ศ._ส.'.split('_'),
	        weekdaysParseExact: true,
	        longDateFormat: {
	            LT: 'H:mm',
	            LTS: 'H:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY เวลา H:mm',
	            LLLL: 'วันddddที่ D MMMM YYYY เวลา H:mm',
	        },
	        meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
	        isPM: function (input) {
	            return input === 'หลังเที่ยง';
	        },
	        meridiem: function (hour, minute, isLower) {
	            if (hour < 12) {
	                return 'ก่อนเที่ยง';
	            } else {
	                return 'หลังเที่ยง';
	            }
	        },
	        calendar: {
	            sameDay: '[วันนี้ เวลา] LT',
	            nextDay: '[พรุ่งนี้ เวลา] LT',
	            nextWeek: 'dddd[หน้า เวลา] LT',
	            lastDay: '[เมื่อวานนี้ เวลา] LT',
	            lastWeek: '[วัน]dddd[ที่แล้ว เวลา] LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: 'อีก %s',
	            past: '%sที่แล้ว',
	            s: 'ไม่กี่วินาที',
	            ss: '%d วินาที',
	            m: '1 นาที',
	            mm: '%d นาที',
	            h: '1 ชั่วโมง',
	            hh: '%d ชั่วโมง',
	            d: '1 วัน',
	            dd: '%d วัน',
	            M: '1 เดือน',
	            MM: '%d เดือน',
	            y: '1 ปี',
	            yy: '%d ปี',
	        },
	    });
	
	    return th;
	
	})));


/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Turkmen [trk]
	//! author : Atamyrat Abdyrahmanov : https://github.com/atamyratabdy
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var suffixes = {
	        1: "'inji",
	        5: "'inji",
	        8: "'inji",
	        70: "'inji",
	        80: "'inji",
	        2: "'nji",
	        7: "'nji",
	        20: "'nji",
	        50: "'nji",
	        3: "'ünji",
	        4: "'ünji",
	        100: "'ünji",
	        6: "'njy",
	        9: "'unjy",
	        10: "'unjy",
	        30: "'unjy",
	        60: "'ynjy",
	        90: "'ynjy",
	    };
	
	    var tk = moment.defineLocale('tk', {
	        months: 'Ýanwar_Fewral_Mart_Aprel_Maý_Iýun_Iýul_Awgust_Sentýabr_Oktýabr_Noýabr_Dekabr'.split(
	            '_'
	        ),
	        monthsShort: 'Ýan_Few_Mar_Apr_Maý_Iýn_Iýl_Awg_Sen_Okt_Noý_Dek'.split('_'),
	        weekdays: 'Ýekşenbe_Duşenbe_Sişenbe_Çarşenbe_Penşenbe_Anna_Şenbe'.split(
	            '_'
	        ),
	        weekdaysShort: 'Ýek_Duş_Siş_Çar_Pen_Ann_Şen'.split('_'),
	        weekdaysMin: 'Ýk_Dş_Sş_Çr_Pn_An_Şn'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD.MM.YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd, D MMMM YYYY HH:mm',
	        },
	        calendar: {
	            sameDay: '[bugün sagat] LT',
	            nextDay: '[ertir sagat] LT',
	            nextWeek: '[indiki] dddd [sagat] LT',
	            lastDay: '[düýn] LT',
	            lastWeek: '[geçen] dddd [sagat] LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: '%s soň',
	            past: '%s öň',
	            s: 'birnäçe sekunt',
	            m: 'bir minut',
	            mm: '%d minut',
	            h: 'bir sagat',
	            hh: '%d sagat',
	            d: 'bir gün',
	            dd: '%d gün',
	            M: 'bir aý',
	            MM: '%d aý',
	            y: 'bir ýyl',
	            yy: '%d ýyl',
	        },
	        ordinal: function (number, period) {
	            switch (period) {
	                case 'd':
	                case 'D':
	                case 'Do':
	                case 'DD':
	                    return number;
	                default:
	                    if (number === 0) {
	                        // special case for zero
	                        return number + "'unjy";
	                    }
	                    var a = number % 10,
	                        b = (number % 100) - a,
	                        c = number >= 100 ? 100 : null;
	                    return number + (suffixes[a] || suffixes[b] || suffixes[c]);
	            }
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 7, // The week that contains Jan 7th is the first week of the year.
	        },
	    });
	
	    return tk;
	
	})));


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Tagalog (Philippines) [tl-ph]
	//! author : Dan Hagman : https://github.com/hagmandan
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var tlPh = moment.defineLocale('tl-ph', {
	        months: 'Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre'.split(
	            '_'
	        ),
	        monthsShort: 'Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis'.split('_'),
	        weekdays: 'Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado'.split(
	            '_'
	        ),
	        weekdaysShort: 'Lin_Lun_Mar_Miy_Huw_Biy_Sab'.split('_'),
	        weekdaysMin: 'Li_Lu_Ma_Mi_Hu_Bi_Sab'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'MM/D/YYYY',
	            LL: 'MMMM D, YYYY',
	            LLL: 'MMMM D, YYYY HH:mm',
	            LLLL: 'dddd, MMMM DD, YYYY HH:mm',
	        },
	        calendar: {
	            sameDay: 'LT [ngayong araw]',
	            nextDay: '[Bukas ng] LT',
	            nextWeek: 'LT [sa susunod na] dddd',
	            lastDay: 'LT [kahapon]',
	            lastWeek: 'LT [noong nakaraang] dddd',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: 'sa loob ng %s',
	            past: '%s ang nakalipas',
	            s: 'ilang segundo',
	            ss: '%d segundo',
	            m: 'isang minuto',
	            mm: '%d minuto',
	            h: 'isang oras',
	            hh: '%d oras',
	            d: 'isang araw',
	            dd: '%d araw',
	            M: 'isang buwan',
	            MM: '%d buwan',
	            y: 'isang taon',
	            yy: '%d taon',
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}/,
	        ordinal: function (number) {
	            return number;
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4, // The week that contains Jan 4th is the first week of the year.
	        },
	    });
	
	    return tlPh;
	
	})));


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Klingon [tlh]
	//! author : Dominika Kruk : https://github.com/amaranthrose
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var numbersNouns = 'pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut'.split('_');
	
	    function translateFuture(output) {
	        var time = output;
	        time =
	            output.indexOf('jaj') !== -1
	                ? time.slice(0, -3) + 'leS'
	                : output.indexOf('jar') !== -1
	                ? time.slice(0, -3) + 'waQ'
	                : output.indexOf('DIS') !== -1
	                ? time.slice(0, -3) + 'nem'
	                : time + ' pIq';
	        return time;
	    }
	
	    function translatePast(output) {
	        var time = output;
	        time =
	            output.indexOf('jaj') !== -1
	                ? time.slice(0, -3) + 'Hu’'
	                : output.indexOf('jar') !== -1
	                ? time.slice(0, -3) + 'wen'
	                : output.indexOf('DIS') !== -1
	                ? time.slice(0, -3) + 'ben'
	                : time + ' ret';
	        return time;
	    }
	
	    function translate(number, withoutSuffix, string, isFuture) {
	        var numberNoun = numberAsNoun(number);
	        switch (string) {
	            case 'ss':
	                return numberNoun + ' lup';
	            case 'mm':
	                return numberNoun + ' tup';
	            case 'hh':
	                return numberNoun + ' rep';
	            case 'dd':
	                return numberNoun + ' jaj';
	            case 'MM':
	                return numberNoun + ' jar';
	            case 'yy':
	                return numberNoun + ' DIS';
	        }
	    }
	
	    function numberAsNoun(number) {
	        var hundred = Math.floor((number % 1000) / 100),
	            ten = Math.floor((number % 100) / 10),
	            one = number % 10,
	            word = '';
	        if (hundred > 0) {
	            word += numbersNouns[hundred] + 'vatlh';
	        }
	        if (ten > 0) {
	            word += (word !== '' ? ' ' : '') + numbersNouns[ten] + 'maH';
	        }
	        if (one > 0) {
	            word += (word !== '' ? ' ' : '') + numbersNouns[one];
	        }
	        return word === '' ? 'pagh' : word;
	    }
	
	    var tlh = moment.defineLocale('tlh', {
	        months: 'tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’'.split(
	            '_'
	        ),
	        monthsShort: 'jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’'.split(
	            '_'
	        ),
	        monthsParseExact: true,
	        weekdays: 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split(
	            '_'
	        ),
	        weekdaysShort: 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split(
	            '_'
	        ),
	        weekdaysMin: 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split(
	            '_'
	        ),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD.MM.YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd, D MMMM YYYY HH:mm',
	        },
	        calendar: {
	            sameDay: '[DaHjaj] LT',
	            nextDay: '[wa’leS] LT',
	            nextWeek: 'LLL',
	            lastDay: '[wa’Hu’] LT',
	            lastWeek: 'LLL',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: translateFuture,
	            past: translatePast,
	            s: 'puS lup',
	            ss: translate,
	            m: 'wa’ tup',
	            mm: translate,
	            h: 'wa’ rep',
	            hh: translate,
	            d: 'wa’ jaj',
	            dd: translate,
	            M: 'wa’ jar',
	            MM: translate,
	            y: 'wa’ DIS',
	            yy: translate,
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}\./,
	        ordinal: '%d.',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4, // The week that contains Jan 4th is the first week of the year.
	        },
	    });
	
	    return tlh;
	
	})));


/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Turkish [tr]
	//! authors : Erhan Gundogan : https://github.com/erhangundogan,
	//!           Burak Yiğit Kaya: https://github.com/BYK
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var suffixes = {
	        1: "'inci",
	        5: "'inci",
	        8: "'inci",
	        70: "'inci",
	        80: "'inci",
	        2: "'nci",
	        7: "'nci",
	        20: "'nci",
	        50: "'nci",
	        3: "'üncü",
	        4: "'üncü",
	        100: "'üncü",
	        6: "'ncı",
	        9: "'uncu",
	        10: "'uncu",
	        30: "'uncu",
	        60: "'ıncı",
	        90: "'ıncı",
	    };
	
	    var tr = moment.defineLocale('tr', {
	        months: 'Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık'.split(
	            '_'
	        ),
	        monthsShort: 'Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara'.split('_'),
	        weekdays: 'Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi'.split(
	            '_'
	        ),
	        weekdaysShort: 'Paz_Pts_Sal_Çar_Per_Cum_Cts'.split('_'),
	        weekdaysMin: 'Pz_Pt_Sa_Ça_Pe_Cu_Ct'.split('_'),
	        meridiem: function (hours, minutes, isLower) {
	            if (hours < 12) {
	                return isLower ? 'öö' : 'ÖÖ';
	            } else {
	                return isLower ? 'ös' : 'ÖS';
	            }
	        },
	        meridiemParse: /öö|ÖÖ|ös|ÖS/,
	        isPM: function (input) {
	            return input === 'ös' || input === 'ÖS';
	        },
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD.MM.YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd, D MMMM YYYY HH:mm',
	        },
	        calendar: {
	            sameDay: '[bugün saat] LT',
	            nextDay: '[yarın saat] LT',
	            nextWeek: '[gelecek] dddd [saat] LT',
	            lastDay: '[dün] LT',
	            lastWeek: '[geçen] dddd [saat] LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: '%s sonra',
	            past: '%s önce',
	            s: 'birkaç saniye',
	            ss: '%d saniye',
	            m: 'bir dakika',
	            mm: '%d dakika',
	            h: 'bir saat',
	            hh: '%d saat',
	            d: 'bir gün',
	            dd: '%d gün',
	            M: 'bir ay',
	            MM: '%d ay',
	            y: 'bir yıl',
	            yy: '%d yıl',
	        },
	        ordinal: function (number, period) {
	            switch (period) {
	                case 'd':
	                case 'D':
	                case 'Do':
	                case 'DD':
	                    return number;
	                default:
	                    if (number === 0) {
	                        // special case for zero
	                        return number + "'ıncı";
	                    }
	                    var a = number % 10,
	                        b = (number % 100) - a,
	                        c = number >= 100 ? 100 : null;
	                    return number + (suffixes[a] || suffixes[b] || suffixes[c]);
	            }
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 7, // The week that contains Jan 7th is the first week of the year.
	        },
	    });
	
	    return tr;
	
	})));


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Talossan [tzl]
	//! author : Robin van der Vliet : https://github.com/robin0van0der0v
	//! author : Iustì Canun
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    // After the year there should be a slash and the amount of years since December 26, 1979 in Roman numerals.
	    // This is currently too difficult (maybe even impossible) to add.
	    var tzl = moment.defineLocale('tzl', {
	        months: 'Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar'.split(
	            '_'
	        ),
	        monthsShort: 'Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec'.split('_'),
	        weekdays: 'Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi'.split('_'),
	        weekdaysShort: 'Súl_Lún_Mai_Már_Xhú_Vié_Sát'.split('_'),
	        weekdaysMin: 'Sú_Lú_Ma_Má_Xh_Vi_Sá'.split('_'),
	        longDateFormat: {
	            LT: 'HH.mm',
	            LTS: 'HH.mm.ss',
	            L: 'DD.MM.YYYY',
	            LL: 'D. MMMM [dallas] YYYY',
	            LLL: 'D. MMMM [dallas] YYYY HH.mm',
	            LLLL: 'dddd, [li] D. MMMM [dallas] YYYY HH.mm',
	        },
	        meridiemParse: /d\'o|d\'a/i,
	        isPM: function (input) {
	            return "d'o" === input.toLowerCase();
	        },
	        meridiem: function (hours, minutes, isLower) {
	            if (hours > 11) {
	                return isLower ? "d'o" : "D'O";
	            } else {
	                return isLower ? "d'a" : "D'A";
	            }
	        },
	        calendar: {
	            sameDay: '[oxhi à] LT',
	            nextDay: '[demà à] LT',
	            nextWeek: 'dddd [à] LT',
	            lastDay: '[ieiri à] LT',
	            lastWeek: '[sür el] dddd [lasteu à] LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: 'osprei %s',
	            past: 'ja%s',
	            s: processRelativeTime,
	            ss: processRelativeTime,
	            m: processRelativeTime,
	            mm: processRelativeTime,
	            h: processRelativeTime,
	            hh: processRelativeTime,
	            d: processRelativeTime,
	            dd: processRelativeTime,
	            M: processRelativeTime,
	            MM: processRelativeTime,
	            y: processRelativeTime,
	            yy: processRelativeTime,
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}\./,
	        ordinal: '%d.',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4, // The week that contains Jan 4th is the first week of the year.
	        },
	    });
	
	    function processRelativeTime(number, withoutSuffix, key, isFuture) {
	        var format = {
	            s: ['viensas secunds', "'iensas secunds"],
	            ss: [number + ' secunds', '' + number + ' secunds'],
	            m: ["'n míut", "'iens míut"],
	            mm: [number + ' míuts', '' + number + ' míuts'],
	            h: ["'n þora", "'iensa þora"],
	            hh: [number + ' þoras', '' + number + ' þoras'],
	            d: ["'n ziua", "'iensa ziua"],
	            dd: [number + ' ziuas', '' + number + ' ziuas'],
	            M: ["'n mes", "'iens mes"],
	            MM: [number + ' mesen', '' + number + ' mesen'],
	            y: ["'n ar", "'iens ar"],
	            yy: [number + ' ars', '' + number + ' ars'],
	        };
	        return isFuture
	            ? format[key][0]
	            : withoutSuffix
	            ? format[key][0]
	            : format[key][1];
	    }
	
	    return tzl;
	
	})));


/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Central Atlas Tamazight [tzm]
	//! author : Abdel Said : https://github.com/abdelsaid
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var tzm = moment.defineLocale('tzm', {
	        months: 'ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ'.split(
	            '_'
	        ),
	        monthsShort: 'ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ'.split(
	            '_'
	        ),
	        weekdays: 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
	        weekdaysShort: 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
	        weekdaysMin: 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd D MMMM YYYY HH:mm',
	        },
	        calendar: {
	            sameDay: '[ⴰⵙⴷⵅ ⴴ] LT',
	            nextDay: '[ⴰⵙⴽⴰ ⴴ] LT',
	            nextWeek: 'dddd [ⴴ] LT',
	            lastDay: '[ⴰⵚⴰⵏⵜ ⴴ] LT',
	            lastWeek: 'dddd [ⴴ] LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: 'ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s',
	            past: 'ⵢⴰⵏ %s',
	            s: 'ⵉⵎⵉⴽ',
	            ss: '%d ⵉⵎⵉⴽ',
	            m: 'ⵎⵉⵏⵓⴺ',
	            mm: '%d ⵎⵉⵏⵓⴺ',
	            h: 'ⵙⴰⵄⴰ',
	            hh: '%d ⵜⴰⵙⵙⴰⵄⵉⵏ',
	            d: 'ⴰⵙⵙ',
	            dd: '%d oⵙⵙⴰⵏ',
	            M: 'ⴰⵢoⵓⵔ',
	            MM: '%d ⵉⵢⵢⵉⵔⵏ',
	            y: 'ⴰⵙⴳⴰⵙ',
	            yy: '%d ⵉⵙⴳⴰⵙⵏ',
	        },
	        week: {
	            dow: 6, // Saturday is the first day of the week.
	            doy: 12, // The week that contains Jan 12th is the first week of the year.
	        },
	    });
	
	    return tzm;
	
	})));


/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Central Atlas Tamazight Latin [tzm-latn]
	//! author : Abdel Said : https://github.com/abdelsaid
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var tzmLatn = moment.defineLocale('tzm-latn', {
	        months: 'innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir'.split(
	            '_'
	        ),
	        monthsShort: 'innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir'.split(
	            '_'
	        ),
	        weekdays: 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
	        weekdaysShort: 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
	        weekdaysMin: 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd D MMMM YYYY HH:mm',
	        },
	        calendar: {
	            sameDay: '[asdkh g] LT',
	            nextDay: '[aska g] LT',
	            nextWeek: 'dddd [g] LT',
	            lastDay: '[assant g] LT',
	            lastWeek: 'dddd [g] LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: 'dadkh s yan %s',
	            past: 'yan %s',
	            s: 'imik',
	            ss: '%d imik',
	            m: 'minuḍ',
	            mm: '%d minuḍ',
	            h: 'saɛa',
	            hh: '%d tassaɛin',
	            d: 'ass',
	            dd: '%d ossan',
	            M: 'ayowr',
	            MM: '%d iyyirn',
	            y: 'asgas',
	            yy: '%d isgasn',
	        },
	        week: {
	            dow: 6, // Saturday is the first day of the week.
	            doy: 12, // The week that contains Jan 12th is the first week of the year.
	        },
	    });
	
	    return tzmLatn;
	
	})));


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js language configuration
	//! locale : Uyghur (China) [ug-cn]
	//! author: boyaq : https://github.com/boyaq
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js language configuration
	
	    var ugCn = moment.defineLocale('ug-cn', {
	        months: 'يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر'.split(
	            '_'
	        ),
	        monthsShort: 'يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر'.split(
	            '_'
	        ),
	        weekdays: 'يەكشەنبە_دۈشەنبە_سەيشەنبە_چارشەنبە_پەيشەنبە_جۈمە_شەنبە'.split(
	            '_'
	        ),
	        weekdaysShort: 'يە_دۈ_سە_چا_پە_جۈ_شە'.split('_'),
	        weekdaysMin: 'يە_دۈ_سە_چا_پە_جۈ_شە'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'YYYY-MM-DD',
	            LL: 'YYYY-يىلىM-ئاينىڭD-كۈنى',
	            LLL: 'YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm',
	            LLLL: 'dddd، YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm',
	        },
	        meridiemParse: /يېرىم كېچە|سەھەر|چۈشتىن بۇرۇن|چۈش|چۈشتىن كېيىن|كەچ/,
	        meridiemHour: function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (
	                meridiem === 'يېرىم كېچە' ||
	                meridiem === 'سەھەر' ||
	                meridiem === 'چۈشتىن بۇرۇن'
	            ) {
	                return hour;
	            } else if (meridiem === 'چۈشتىن كېيىن' || meridiem === 'كەچ') {
	                return hour + 12;
	            } else {
	                return hour >= 11 ? hour : hour + 12;
	            }
	        },
	        meridiem: function (hour, minute, isLower) {
	            var hm = hour * 100 + minute;
	            if (hm < 600) {
	                return 'يېرىم كېچە';
	            } else if (hm < 900) {
	                return 'سەھەر';
	            } else if (hm < 1130) {
	                return 'چۈشتىن بۇرۇن';
	            } else if (hm < 1230) {
	                return 'چۈش';
	            } else if (hm < 1800) {
	                return 'چۈشتىن كېيىن';
	            } else {
	                return 'كەچ';
	            }
	        },
	        calendar: {
	            sameDay: '[بۈگۈن سائەت] LT',
	            nextDay: '[ئەتە سائەت] LT',
	            nextWeek: '[كېلەركى] dddd [سائەت] LT',
	            lastDay: '[تۆنۈگۈن] LT',
	            lastWeek: '[ئالدىنقى] dddd [سائەت] LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: '%s كېيىن',
	            past: '%s بۇرۇن',
	            s: 'نەچچە سېكونت',
	            ss: '%d سېكونت',
	            m: 'بىر مىنۇت',
	            mm: '%d مىنۇت',
	            h: 'بىر سائەت',
	            hh: '%d سائەت',
	            d: 'بىر كۈن',
	            dd: '%d كۈن',
	            M: 'بىر ئاي',
	            MM: '%d ئاي',
	            y: 'بىر يىل',
	            yy: '%d يىل',
	        },
	
	        dayOfMonthOrdinalParse: /\d{1,2}(-كۈنى|-ئاي|-ھەپتە)/,
	        ordinal: function (number, period) {
	            switch (period) {
	                case 'd':
	                case 'D':
	                case 'DDD':
	                    return number + '-كۈنى';
	                case 'w':
	                case 'W':
	                    return number + '-ھەپتە';
	                default:
	                    return number;
	            }
	        },
	        preparse: function (string) {
	            return string.replace(/،/g, ',');
	        },
	        postformat: function (string) {
	            return string.replace(/,/g, '،');
	        },
	        week: {
	            // GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
	            dow: 1, // Monday is the first day of the week.
	            doy: 7, // The week that contains Jan 1st is the first week of the year.
	        },
	    });
	
	    return ugCn;
	
	})));


/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Ukrainian [uk]
	//! author : zemlanin : https://github.com/zemlanin
	//! Author : Menelion Elensúle : https://github.com/Oire
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    function plural(word, num) {
	        var forms = word.split('_');
	        return num % 10 === 1 && num % 100 !== 11
	            ? forms[0]
	            : num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20)
	            ? forms[1]
	            : forms[2];
	    }
	    function relativeTimeWithPlural(number, withoutSuffix, key) {
	        var format = {
	            ss: withoutSuffix ? 'секунда_секунди_секунд' : 'секунду_секунди_секунд',
	            mm: withoutSuffix ? 'хвилина_хвилини_хвилин' : 'хвилину_хвилини_хвилин',
	            hh: withoutSuffix ? 'година_години_годин' : 'годину_години_годин',
	            dd: 'день_дні_днів',
	            MM: 'місяць_місяці_місяців',
	            yy: 'рік_роки_років',
	        };
	        if (key === 'm') {
	            return withoutSuffix ? 'хвилина' : 'хвилину';
	        } else if (key === 'h') {
	            return withoutSuffix ? 'година' : 'годину';
	        } else {
	            return number + ' ' + plural(format[key], +number);
	        }
	    }
	    function weekdaysCaseReplace(m, format) {
	        var weekdays = {
	                nominative: 'неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота'.split(
	                    '_'
	                ),
	                accusative: 'неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу'.split(
	                    '_'
	                ),
	                genitive: 'неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи'.split(
	                    '_'
	                ),
	            },
	            nounCase;
	
	        if (m === true) {
	            return weekdays['nominative']
	                .slice(1, 7)
	                .concat(weekdays['nominative'].slice(0, 1));
	        }
	        if (!m) {
	            return weekdays['nominative'];
	        }
	
	        nounCase = /(\[[ВвУу]\]) ?dddd/.test(format)
	            ? 'accusative'
	            : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(format)
	            ? 'genitive'
	            : 'nominative';
	        return weekdays[nounCase][m.day()];
	    }
	    function processHoursFunction(str) {
	        return function () {
	            return str + 'о' + (this.hours() === 11 ? 'б' : '') + '] LT';
	        };
	    }
	
	    var uk = moment.defineLocale('uk', {
	        months: {
	            format: 'січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня'.split(
	                '_'
	            ),
	            standalone: 'січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень'.split(
	                '_'
	            ),
	        },
	        monthsShort: 'січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд'.split(
	            '_'
	        ),
	        weekdays: weekdaysCaseReplace,
	        weekdaysShort: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
	        weekdaysMin: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD.MM.YYYY',
	            LL: 'D MMMM YYYY р.',
	            LLL: 'D MMMM YYYY р., HH:mm',
	            LLLL: 'dddd, D MMMM YYYY р., HH:mm',
	        },
	        calendar: {
	            sameDay: processHoursFunction('[Сьогодні '),
	            nextDay: processHoursFunction('[Завтра '),
	            lastDay: processHoursFunction('[Вчора '),
	            nextWeek: processHoursFunction('[У] dddd ['),
	            lastWeek: function () {
	                switch (this.day()) {
	                    case 0:
	                    case 3:
	                    case 5:
	                    case 6:
	                        return processHoursFunction('[Минулої] dddd [').call(this);
	                    case 1:
	                    case 2:
	                    case 4:
	                        return processHoursFunction('[Минулого] dddd [').call(this);
	                }
	            },
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: 'за %s',
	            past: '%s тому',
	            s: 'декілька секунд',
	            ss: relativeTimeWithPlural,
	            m: relativeTimeWithPlural,
	            mm: relativeTimeWithPlural,
	            h: 'годину',
	            hh: relativeTimeWithPlural,
	            d: 'день',
	            dd: relativeTimeWithPlural,
	            M: 'місяць',
	            MM: relativeTimeWithPlural,
	            y: 'рік',
	            yy: relativeTimeWithPlural,
	        },
	        // M. E.: those two are virtually unused but a user might want to implement them for his/her website for some reason
	        meridiemParse: /ночі|ранку|дня|вечора/,
	        isPM: function (input) {
	            return /^(дня|вечора)$/.test(input);
	        },
	        meridiem: function (hour, minute, isLower) {
	            if (hour < 4) {
	                return 'ночі';
	            } else if (hour < 12) {
	                return 'ранку';
	            } else if (hour < 17) {
	                return 'дня';
	            } else {
	                return 'вечора';
	            }
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}-(й|го)/,
	        ordinal: function (number, period) {
	            switch (period) {
	                case 'M':
	                case 'd':
	                case 'DDD':
	                case 'w':
	                case 'W':
	                    return number + '-й';
	                case 'D':
	                    return number + '-го';
	                default:
	                    return number;
	            }
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 7, // The week that contains Jan 7th is the first week of the year.
	        },
	    });
	
	    return uk;
	
	})));


/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Urdu [ur]
	//! author : Sawood Alam : https://github.com/ibnesayeed
	//! author : Zack : https://github.com/ZackVision
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var months = [
	            'جنوری',
	            'فروری',
	            'مارچ',
	            'اپریل',
	            'مئی',
	            'جون',
	            'جولائی',
	            'اگست',
	            'ستمبر',
	            'اکتوبر',
	            'نومبر',
	            'دسمبر',
	        ],
	        days = ['اتوار', 'پیر', 'منگل', 'بدھ', 'جمعرات', 'جمعہ', 'ہفتہ'];
	
	    var ur = moment.defineLocale('ur', {
	        months: months,
	        monthsShort: months,
	        weekdays: days,
	        weekdaysShort: days,
	        weekdaysMin: days,
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd، D MMMM YYYY HH:mm',
	        },
	        meridiemParse: /صبح|شام/,
	        isPM: function (input) {
	            return 'شام' === input;
	        },
	        meridiem: function (hour, minute, isLower) {
	            if (hour < 12) {
	                return 'صبح';
	            }
	            return 'شام';
	        },
	        calendar: {
	            sameDay: '[آج بوقت] LT',
	            nextDay: '[کل بوقت] LT',
	            nextWeek: 'dddd [بوقت] LT',
	            lastDay: '[گذشتہ روز بوقت] LT',
	            lastWeek: '[گذشتہ] dddd [بوقت] LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: '%s بعد',
	            past: '%s قبل',
	            s: 'چند سیکنڈ',
	            ss: '%d سیکنڈ',
	            m: 'ایک منٹ',
	            mm: '%d منٹ',
	            h: 'ایک گھنٹہ',
	            hh: '%d گھنٹے',
	            d: 'ایک دن',
	            dd: '%d دن',
	            M: 'ایک ماہ',
	            MM: '%d ماہ',
	            y: 'ایک سال',
	            yy: '%d سال',
	        },
	        preparse: function (string) {
	            return string.replace(/،/g, ',');
	        },
	        postformat: function (string) {
	            return string.replace(/,/g, '،');
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4, // The week that contains Jan 4th is the first week of the year.
	        },
	    });
	
	    return ur;
	
	})));


/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Uzbek [uz]
	//! author : Sardor Muminov : https://github.com/muminoff
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var uz = moment.defineLocale('uz', {
	        months: 'январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр'.split(
	            '_'
	        ),
	        monthsShort: 'янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек'.split('_'),
	        weekdays: 'Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба'.split('_'),
	        weekdaysShort: 'Якш_Душ_Сеш_Чор_Пай_Жум_Шан'.split('_'),
	        weekdaysMin: 'Як_Ду_Се_Чо_Па_Жу_Ша'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'D MMMM YYYY, dddd HH:mm',
	        },
	        calendar: {
	            sameDay: '[Бугун соат] LT [да]',
	            nextDay: '[Эртага] LT [да]',
	            nextWeek: 'dddd [куни соат] LT [да]',
	            lastDay: '[Кеча соат] LT [да]',
	            lastWeek: '[Утган] dddd [куни соат] LT [да]',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: 'Якин %s ичида',
	            past: 'Бир неча %s олдин',
	            s: 'фурсат',
	            ss: '%d фурсат',
	            m: 'бир дакика',
	            mm: '%d дакика',
	            h: 'бир соат',
	            hh: '%d соат',
	            d: 'бир кун',
	            dd: '%d кун',
	            M: 'бир ой',
	            MM: '%d ой',
	            y: 'бир йил',
	            yy: '%d йил',
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 7, // The week that contains Jan 4th is the first week of the year.
	        },
	    });
	
	    return uz;
	
	})));


/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Uzbek Latin [uz-latn]
	//! author : Rasulbek Mirzayev : github.com/Rasulbeeek
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var uzLatn = moment.defineLocale('uz-latn', {
	        months: 'Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr'.split(
	            '_'
	        ),
	        monthsShort: 'Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek'.split('_'),
	        weekdays: 'Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba'.split(
	            '_'
	        ),
	        weekdaysShort: 'Yak_Dush_Sesh_Chor_Pay_Jum_Shan'.split('_'),
	        weekdaysMin: 'Ya_Du_Se_Cho_Pa_Ju_Sha'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'D MMMM YYYY, dddd HH:mm',
	        },
	        calendar: {
	            sameDay: '[Bugun soat] LT [da]',
	            nextDay: '[Ertaga] LT [da]',
	            nextWeek: 'dddd [kuni soat] LT [da]',
	            lastDay: '[Kecha soat] LT [da]',
	            lastWeek: "[O'tgan] dddd [kuni soat] LT [da]",
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: 'Yaqin %s ichida',
	            past: 'Bir necha %s oldin',
	            s: 'soniya',
	            ss: '%d soniya',
	            m: 'bir daqiqa',
	            mm: '%d daqiqa',
	            h: 'bir soat',
	            hh: '%d soat',
	            d: 'bir kun',
	            dd: '%d kun',
	            M: 'bir oy',
	            MM: '%d oy',
	            y: 'bir yil',
	            yy: '%d yil',
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 7, // The week that contains Jan 7th is the first week of the year.
	        },
	    });
	
	    return uzLatn;
	
	})));


/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Vietnamese [vi]
	//! author : Bang Nguyen : https://github.com/bangnk
	//! author : Chien Kira : https://github.com/chienkira
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var vi = moment.defineLocale('vi', {
	        months: 'tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12'.split(
	            '_'
	        ),
	        monthsShort: 'Thg 01_Thg 02_Thg 03_Thg 04_Thg 05_Thg 06_Thg 07_Thg 08_Thg 09_Thg 10_Thg 11_Thg 12'.split(
	            '_'
	        ),
	        monthsParseExact: true,
	        weekdays: 'chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy'.split(
	            '_'
	        ),
	        weekdaysShort: 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
	        weekdaysMin: 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
	        weekdaysParseExact: true,
	        meridiemParse: /sa|ch/i,
	        isPM: function (input) {
	            return /^ch$/i.test(input);
	        },
	        meridiem: function (hours, minutes, isLower) {
	            if (hours < 12) {
	                return isLower ? 'sa' : 'SA';
	            } else {
	                return isLower ? 'ch' : 'CH';
	            }
	        },
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM [năm] YYYY',
	            LLL: 'D MMMM [năm] YYYY HH:mm',
	            LLLL: 'dddd, D MMMM [năm] YYYY HH:mm',
	            l: 'DD/M/YYYY',
	            ll: 'D MMM YYYY',
	            lll: 'D MMM YYYY HH:mm',
	            llll: 'ddd, D MMM YYYY HH:mm',
	        },
	        calendar: {
	            sameDay: '[Hôm nay lúc] LT',
	            nextDay: '[Ngày mai lúc] LT',
	            nextWeek: 'dddd [tuần tới lúc] LT',
	            lastDay: '[Hôm qua lúc] LT',
	            lastWeek: 'dddd [tuần trước lúc] LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: '%s tới',
	            past: '%s trước',
	            s: 'vài giây',
	            ss: '%d giây',
	            m: 'một phút',
	            mm: '%d phút',
	            h: 'một giờ',
	            hh: '%d giờ',
	            d: 'một ngày',
	            dd: '%d ngày',
	            M: 'một tháng',
	            MM: '%d tháng',
	            y: 'một năm',
	            yy: '%d năm',
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}/,
	        ordinal: function (number) {
	            return number;
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4, // The week that contains Jan 4th is the first week of the year.
	        },
	    });
	
	    return vi;
	
	})));


/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Pseudo [x-pseudo]
	//! author : Andrew Hood : https://github.com/andrewhood125
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var xPseudo = moment.defineLocale('x-pseudo', {
	        months: 'J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér'.split(
	            '_'
	        ),
	        monthsShort: 'J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc'.split(
	            '_'
	        ),
	        monthsParseExact: true,
	        weekdays: 'S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý'.split(
	            '_'
	        ),
	        weekdaysShort: 'S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát'.split('_'),
	        weekdaysMin: 'S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá'.split('_'),
	        weekdaysParseExact: true,
	        longDateFormat: {
	            LT: 'HH:mm',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd, D MMMM YYYY HH:mm',
	        },
	        calendar: {
	            sameDay: '[T~ódá~ý át] LT',
	            nextDay: '[T~ómó~rró~w át] LT',
	            nextWeek: 'dddd [át] LT',
	            lastDay: '[Ý~ést~érdá~ý át] LT',
	            lastWeek: '[L~ást] dddd [át] LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: 'í~ñ %s',
	            past: '%s á~gó',
	            s: 'á ~féw ~sécó~ñds',
	            ss: '%d s~écóñ~ds',
	            m: 'á ~míñ~úté',
	            mm: '%d m~íñú~tés',
	            h: 'á~ñ hó~úr',
	            hh: '%d h~óúrs',
	            d: 'á ~dáý',
	            dd: '%d d~áýs',
	            M: 'á ~móñ~th',
	            MM: '%d m~óñt~hs',
	            y: 'á ~ýéár',
	            yy: '%d ý~éárs',
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
	        ordinal: function (number) {
	            var b = number % 10,
	                output =
	                    ~~((number % 100) / 10) === 1
	                        ? 'th'
	                        : b === 1
	                        ? 'st'
	                        : b === 2
	                        ? 'nd'
	                        : b === 3
	                        ? 'rd'
	                        : 'th';
	            return number + output;
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4, // The week that contains Jan 4th is the first week of the year.
	        },
	    });
	
	    return xPseudo;
	
	})));


/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Yoruba Nigeria [yo]
	//! author : Atolagbe Abisoye : https://github.com/andela-batolagbe
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var yo = moment.defineLocale('yo', {
	        months: 'Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀'.split(
	            '_'
	        ),
	        monthsShort: 'Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀'.split('_'),
	        weekdays: 'Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta'.split('_'),
	        weekdaysShort: 'Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá'.split('_'),
	        weekdaysMin: 'Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb'.split('_'),
	        longDateFormat: {
	            LT: 'h:mm A',
	            LTS: 'h:mm:ss A',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY h:mm A',
	            LLLL: 'dddd, D MMMM YYYY h:mm A',
	        },
	        calendar: {
	            sameDay: '[Ònì ni] LT',
	            nextDay: '[Ọ̀la ni] LT',
	            nextWeek: "dddd [Ọsẹ̀ tón'bọ] [ni] LT",
	            lastDay: '[Àna ni] LT',
	            lastWeek: 'dddd [Ọsẹ̀ tólọ́] [ni] LT',
	            sameElse: 'L',
	        },
	        relativeTime: {
	            future: 'ní %s',
	            past: '%s kọjá',
	            s: 'ìsẹjú aayá die',
	            ss: 'aayá %d',
	            m: 'ìsẹjú kan',
	            mm: 'ìsẹjú %d',
	            h: 'wákati kan',
	            hh: 'wákati %d',
	            d: 'ọjọ́ kan',
	            dd: 'ọjọ́ %d',
	            M: 'osù kan',
	            MM: 'osù %d',
	            y: 'ọdún kan',
	            yy: 'ọdún %d',
	        },
	        dayOfMonthOrdinalParse: /ọjọ́\s\d{1,2}/,
	        ordinal: 'ọjọ́ %d',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4, // The week that contains Jan 4th is the first week of the year.
	        },
	    });
	
	    return yo;
	
	})));


/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Chinese (China) [zh-cn]
	//! author : suupic : https://github.com/suupic
	//! author : Zeno Zeng : https://github.com/zenozeng
	//! author : uu109 : https://github.com/uu109
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var zhCn = moment.defineLocale('zh-cn', {
	        months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split(
	            '_'
	        ),
	        monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split(
	            '_'
	        ),
	        weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
	        weekdaysShort: '周日_周一_周二_周三_周四_周五_周六'.split('_'),
	        weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'YYYY/MM/DD',
	            LL: 'YYYY年M月D日',
	            LLL: 'YYYY年M月D日Ah点mm分',
	            LLLL: 'YYYY年M月D日ddddAh点mm分',
	            l: 'YYYY/M/D',
	            ll: 'YYYY年M月D日',
	            lll: 'YYYY年M月D日 HH:mm',
	            llll: 'YYYY年M月D日dddd HH:mm',
	        },
	        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
	        meridiemHour: function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === '凌晨' || meridiem === '早上' || meridiem === '上午') {
	                return hour;
	            } else if (meridiem === '下午' || meridiem === '晚上') {
	                return hour + 12;
	            } else {
	                // '中午'
	                return hour >= 11 ? hour : hour + 12;
	            }
	        },
	        meridiem: function (hour, minute, isLower) {
	            var hm = hour * 100 + minute;
	            if (hm < 600) {
	                return '凌晨';
	            } else if (hm < 900) {
	                return '早上';
	            } else if (hm < 1130) {
	                return '上午';
	            } else if (hm < 1230) {
	                return '中午';
	            } else if (hm < 1800) {
	                return '下午';
	            } else {
	                return '晚上';
	            }
	        },
	        calendar: {
	            sameDay: '[今天]LT',
	            nextDay: '[明天]LT',
	            nextWeek: function (now) {
	                if (now.week() !== this.week()) {
	                    return '[下]dddLT';
	                } else {
	                    return '[本]dddLT';
	                }
	            },
	            lastDay: '[昨天]LT',
	            lastWeek: function (now) {
	                if (this.week() !== now.week()) {
	                    return '[上]dddLT';
	                } else {
	                    return '[本]dddLT';
	                }
	            },
	            sameElse: 'L',
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
	        ordinal: function (number, period) {
	            switch (period) {
	                case 'd':
	                case 'D':
	                case 'DDD':
	                    return number + '日';
	                case 'M':
	                    return number + '月';
	                case 'w':
	                case 'W':
	                    return number + '周';
	                default:
	                    return number;
	            }
	        },
	        relativeTime: {
	            future: '%s后',
	            past: '%s前',
	            s: '几秒',
	            ss: '%d 秒',
	            m: '1 分钟',
	            mm: '%d 分钟',
	            h: '1 小时',
	            hh: '%d 小时',
	            d: '1 天',
	            dd: '%d 天',
	            M: '1 个月',
	            MM: '%d 个月',
	            y: '1 年',
	            yy: '%d 年',
	        },
	        week: {
	            // GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
	            dow: 1, // Monday is the first day of the week.
	            doy: 4, // The week that contains Jan 4th is the first week of the year.
	        },
	    });
	
	    return zhCn;
	
	})));


/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Chinese (Hong Kong) [zh-hk]
	//! author : Ben : https://github.com/ben-lin
	//! author : Chris Lam : https://github.com/hehachris
	//! author : Konstantin : https://github.com/skfd
	//! author : Anthony : https://github.com/anthonylau
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var zhHk = moment.defineLocale('zh-hk', {
	        months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split(
	            '_'
	        ),
	        monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split(
	            '_'
	        ),
	        weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
	        weekdaysShort: '週日_週一_週二_週三_週四_週五_週六'.split('_'),
	        weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'YYYY/MM/DD',
	            LL: 'YYYY年M月D日',
	            LLL: 'YYYY年M月D日 HH:mm',
	            LLLL: 'YYYY年M月D日dddd HH:mm',
	            l: 'YYYY/M/D',
	            ll: 'YYYY年M月D日',
	            lll: 'YYYY年M月D日 HH:mm',
	            llll: 'YYYY年M月D日dddd HH:mm',
	        },
	        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
	        meridiemHour: function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === '凌晨' || meridiem === '早上' || meridiem === '上午') {
	                return hour;
	            } else if (meridiem === '中午') {
	                return hour >= 11 ? hour : hour + 12;
	            } else if (meridiem === '下午' || meridiem === '晚上') {
	                return hour + 12;
	            }
	        },
	        meridiem: function (hour, minute, isLower) {
	            var hm = hour * 100 + minute;
	            if (hm < 600) {
	                return '凌晨';
	            } else if (hm < 900) {
	                return '早上';
	            } else if (hm < 1200) {
	                return '上午';
	            } else if (hm === 1200) {
	                return '中午';
	            } else if (hm < 1800) {
	                return '下午';
	            } else {
	                return '晚上';
	            }
	        },
	        calendar: {
	            sameDay: '[今天]LT',
	            nextDay: '[明天]LT',
	            nextWeek: '[下]ddddLT',
	            lastDay: '[昨天]LT',
	            lastWeek: '[上]ddddLT',
	            sameElse: 'L',
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
	        ordinal: function (number, period) {
	            switch (period) {
	                case 'd':
	                case 'D':
	                case 'DDD':
	                    return number + '日';
	                case 'M':
	                    return number + '月';
	                case 'w':
	                case 'W':
	                    return number + '週';
	                default:
	                    return number;
	            }
	        },
	        relativeTime: {
	            future: '%s後',
	            past: '%s前',
	            s: '幾秒',
	            ss: '%d 秒',
	            m: '1 分鐘',
	            mm: '%d 分鐘',
	            h: '1 小時',
	            hh: '%d 小時',
	            d: '1 天',
	            dd: '%d 天',
	            M: '1 個月',
	            MM: '%d 個月',
	            y: '1 年',
	            yy: '%d 年',
	        },
	    });
	
	    return zhHk;
	
	})));


/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Chinese (Macau) [zh-mo]
	//! author : Ben : https://github.com/ben-lin
	//! author : Chris Lam : https://github.com/hehachris
	//! author : Tan Yuanhong : https://github.com/le0tan
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var zhMo = moment.defineLocale('zh-mo', {
	        months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split(
	            '_'
	        ),
	        monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split(
	            '_'
	        ),
	        weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
	        weekdaysShort: '週日_週一_週二_週三_週四_週五_週六'.split('_'),
	        weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'YYYY年M月D日',
	            LLL: 'YYYY年M月D日 HH:mm',
	            LLLL: 'YYYY年M月D日dddd HH:mm',
	            l: 'D/M/YYYY',
	            ll: 'YYYY年M月D日',
	            lll: 'YYYY年M月D日 HH:mm',
	            llll: 'YYYY年M月D日dddd HH:mm',
	        },
	        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
	        meridiemHour: function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === '凌晨' || meridiem === '早上' || meridiem === '上午') {
	                return hour;
	            } else if (meridiem === '中午') {
	                return hour >= 11 ? hour : hour + 12;
	            } else if (meridiem === '下午' || meridiem === '晚上') {
	                return hour + 12;
	            }
	        },
	        meridiem: function (hour, minute, isLower) {
	            var hm = hour * 100 + minute;
	            if (hm < 600) {
	                return '凌晨';
	            } else if (hm < 900) {
	                return '早上';
	            } else if (hm < 1130) {
	                return '上午';
	            } else if (hm < 1230) {
	                return '中午';
	            } else if (hm < 1800) {
	                return '下午';
	            } else {
	                return '晚上';
	            }
	        },
	        calendar: {
	            sameDay: '[今天] LT',
	            nextDay: '[明天] LT',
	            nextWeek: '[下]dddd LT',
	            lastDay: '[昨天] LT',
	            lastWeek: '[上]dddd LT',
	            sameElse: 'L',
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
	        ordinal: function (number, period) {
	            switch (period) {
	                case 'd':
	                case 'D':
	                case 'DDD':
	                    return number + '日';
	                case 'M':
	                    return number + '月';
	                case 'w':
	                case 'W':
	                    return number + '週';
	                default:
	                    return number;
	            }
	        },
	        relativeTime: {
	            future: '%s內',
	            past: '%s前',
	            s: '幾秒',
	            ss: '%d 秒',
	            m: '1 分鐘',
	            mm: '%d 分鐘',
	            h: '1 小時',
	            hh: '%d 小時',
	            d: '1 天',
	            dd: '%d 天',
	            M: '1 個月',
	            MM: '%d 個月',
	            y: '1 年',
	            yy: '%d 年',
	        },
	    });
	
	    return zhMo;
	
	})));


/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Chinese (Taiwan) [zh-tw]
	//! author : Ben : https://github.com/ben-lin
	//! author : Chris Lam : https://github.com/hehachris
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(84)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, (function (moment) { 'use strict';
	
	    //! moment.js locale configuration
	
	    var zhTw = moment.defineLocale('zh-tw', {
	        months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split(
	            '_'
	        ),
	        monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split(
	            '_'
	        ),
	        weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
	        weekdaysShort: '週日_週一_週二_週三_週四_週五_週六'.split('_'),
	        weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'YYYY/MM/DD',
	            LL: 'YYYY年M月D日',
	            LLL: 'YYYY年M月D日 HH:mm',
	            LLLL: 'YYYY年M月D日dddd HH:mm',
	            l: 'YYYY/M/D',
	            ll: 'YYYY年M月D日',
	            lll: 'YYYY年M月D日 HH:mm',
	            llll: 'YYYY年M月D日dddd HH:mm',
	        },
	        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
	        meridiemHour: function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === '凌晨' || meridiem === '早上' || meridiem === '上午') {
	                return hour;
	            } else if (meridiem === '中午') {
	                return hour >= 11 ? hour : hour + 12;
	            } else if (meridiem === '下午' || meridiem === '晚上') {
	                return hour + 12;
	            }
	        },
	        meridiem: function (hour, minute, isLower) {
	            var hm = hour * 100 + minute;
	            if (hm < 600) {
	                return '凌晨';
	            } else if (hm < 900) {
	                return '早上';
	            } else if (hm < 1130) {
	                return '上午';
	            } else if (hm < 1230) {
	                return '中午';
	            } else if (hm < 1800) {
	                return '下午';
	            } else {
	                return '晚上';
	            }
	        },
	        calendar: {
	            sameDay: '[今天] LT',
	            nextDay: '[明天] LT',
	            nextWeek: '[下]dddd LT',
	            lastDay: '[昨天] LT',
	            lastWeek: '[上]dddd LT',
	            sameElse: 'L',
	        },
	        dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
	        ordinal: function (number, period) {
	            switch (period) {
	                case 'd':
	                case 'D':
	                case 'DDD':
	                    return number + '日';
	                case 'M':
	                    return number + '月';
	                case 'w':
	                case 'W':
	                    return number + '週';
	                default:
	                    return number;
	            }
	        },
	        relativeTime: {
	            future: '%s後',
	            past: '%s前',
	            s: '幾秒',
	            ss: '%d 秒',
	            m: '1 分鐘',
	            mm: '%d 分鐘',
	            h: '1 小時',
	            hh: '%d 小時',
	            d: '1 天',
	            dd: '%d 天',
	            M: '1 個月',
	            MM: '%d 個月',
	            y: '1 年',
	            yy: '%d 年',
	        },
	    });
	
	    return zhTw;
	
	})));


/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	})();
	
	var _get = function get(_x, _x2, _x3) {
	  var _again = true;_function: while (_again) {
	    var object = _x,
	        property = _x2,
	        receiver = _x3;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	      var parent = Object.getPrototypeOf(object);if (parent === null) {
	        return undefined;
	      } else {
	        _x = parent;_x2 = property;_x3 = receiver;_again = true;desc = parent = undefined;continue _function;
	      }
	    } else if ("value" in desc) {
	      return desc.value;
	    } else {
	      var getter = desc.get;if (getter === undefined) {
	        return undefined;
	      }return getter.call(receiver);
	    }
	  }
	};
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { "default": obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var Spinner = (function (_React$Component) {
	  _inherits(Spinner, _React$Component);
	
	  function Spinner() {
	    _classCallCheck(this, Spinner);
	
	    _get(Object.getPrototypeOf(Spinner.prototype), "constructor", this).apply(this, arguments);
	  }
	
	  _createClass(Spinner, [{
	    key: "render",
	    value: function render() {
	      return _react2["default"].createElement("div", { className: "spinner", "data-reactid": ".0.2.1.1" }, _react2["default"].createElement("div", { className: "rect1 blue", "data-reactid": ".0.2.1.1.0" }), _react2["default"].createElement("div", { className: "rect2 blue", "data-reactid": ".0.2.1.1.1" }), _react2["default"].createElement("div", { className: "rect3 blue", "data-reactid": ".0.2.1.1.2" }), _react2["default"].createElement("div", { className: "rect4 blue", "data-reactid": ".0.2.1.1.3" }), _react2["default"].createElement("div", { className: "rect5 blue", "data-reactid": ".0.2.1.1.4" }), _react2["default"].createElement("div", { className: "rect5 blue", "data-reactid": ".0.2.1.1.5" }), _react2["default"].createElement("div", { className: "rect4 blue", "data-reactid": ".0.2.1.1.6" }), _react2["default"].createElement("div", { className: "rect3 blue", "data-reactid": ".0.2.1.1.7" }), _react2["default"].createElement("div", { className: "rect2 blue", "data-reactid": ".0.2.1.1.8" }), _react2["default"].createElement("div", { className: "rect1 blue", "data-reactid": ".0.2.1.1.9" }));
	    }
	  }]);
	
	  return Spinner;
	})(_react2["default"].Component);
	
	exports["default"] = Spinner;
	module.exports = exports["default"];

/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	})();
	
	var _get = function get(_x, _x2, _x3) {
	  var _again = true;_function: while (_again) {
	    var object = _x,
	        property = _x2,
	        receiver = _x3;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	      var parent = Object.getPrototypeOf(object);if (parent === null) {
	        return undefined;
	      } else {
	        _x = parent;_x2 = property;_x3 = receiver;_again = true;desc = parent = undefined;continue _function;
	      }
	    } else if ('value' in desc) {
	      return desc.value;
	    } else {
	      var getter = desc.get;if (getter === undefined) {
	        return undefined;
	      }return getter.call(receiver);
	    }
	  }
	};
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError('Cannot call a class as a function');
	  }
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== 'function' && superClass !== null) {
	    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(20);
	
	var _componentsSpinnerJs = __webpack_require__(220);
	
	var _componentsSpinnerJs2 = _interopRequireDefault(_componentsSpinnerJs);
	
	__webpack_require__(222);
	
	var ExperimentTagsHandler = (function (_Component) {
	  _inherits(ExperimentTagsHandler, _Component);
	
	  function ExperimentTagsHandler(props) {
	    _classCallCheck(this, ExperimentTagsHandler);
	
	    _get(Object.getPrototypeOf(ExperimentTagsHandler.prototype), 'constructor', this).call(this, props);
	    this.state = {};
	  }
	
	  _createClass(ExperimentTagsHandler, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      //this.AppStore = this.context.flux.getStore('appStore');
	      //this.getFromStore();
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      // this.AppStore.addListener('change', this.getFromStore);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      // this.AppStore.removeListener('change', this.getFromStore);
	    }
	  }, {
	    key: 'getFromStore',
	    value: function getFromStore() {
	      this.setState({ items: this.AppStore.getExperimentTags() });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var items = this.state.items;
	      var jsx = undefined;
	      if (items.STORE_MISS) {
	        jsx = _react2['default'].createElement(_componentsSpinnerJs2['default'], null);
	      } else {
	        jsx = _react2['default'].createElement('div', { key: '0', className: 'post center-box' }, _react2['default'].createElement('div', { className: 'tags' }, items.map(function (tag, i) {
	          return _react2['default'].createElement(_reactRouter.Link, { key: tag + i, className: 'tag', to: 'search', params: { query: tag } }, tag);
	        })));
	      }
	      return jsx;
	    }
	  }]);
	
	  return ExperimentTagsHandler;
	})(_react.Component);
	
	exports['default'] = ExperimentTagsHandler;
	module.exports = exports['default'];

/***/ }),
/* 222 */
/***/ (function(module, exports) {

	/*eslint-disable no-extend-native */
	"use strict";
	
	Array.prototype.flatMap = function (lambda) {
	  return Array.prototype.concat.apply([], this.map(lambda));
	};
	/*eslint-enable no-extend-native */

/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	})();
	
	var _get = function get(_x, _x2, _x3) {
	    var _again = true;_function: while (_again) {
	        var object = _x,
	            property = _x2,
	            receiver = _x3;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	            var parent = Object.getPrototypeOf(object);if (parent === null) {
	                return undefined;
	            } else {
	                _x = parent;_x2 = property;_x3 = receiver;_again = true;desc = parent = undefined;continue _function;
	            }
	        } else if ('value' in desc) {
	            return desc.value;
	        } else {
	            var getter = desc.get;if (getter === undefined) {
	                return undefined;
	            }return getter.call(receiver);
	        }
	    }
	};
	
	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError('Cannot call a class as a function');
	    }
	}
	
	function _inherits(subClass, superClass) {
	    if (typeof superClass !== 'function' && superClass !== null) {
	        throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _componentsItemJs = __webpack_require__(224);
	
	var _componentsItemJs2 = _interopRequireDefault(_componentsItemJs);
	
	var ExperimentHandler = (function (_Component) {
	    _inherits(ExperimentHandler, _Component);
	
	    function ExperimentHandler() {
	        _classCallCheck(this, ExperimentHandler);
	
	        _get(Object.getPrototypeOf(ExperimentHandler.prototype), 'constructor', this).apply(this, arguments);
	    }
	
	    _createClass(ExperimentHandler, [{
	        key: 'render',
	        value: function render() {
	            return _react2['default'].createElement(_componentsItemJs2['default'], { key: '0', link: this.context.router.getCurrentPath(), linkClicked: this.linkClicked });
	        }
	    }, {
	        key: 'linkClicked',
	        value: function linkClicked(e) {}
	    }]);
	
	    return ExperimentHandler;
	})(_react.Component);
	
	exports['default'] = ExperimentHandler;
	module.exports = exports['default'];

/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

	/*global FB:true*/
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	})();
	
	var _get = function get(_x, _x2, _x3) {
	    var _again = true;_function: while (_again) {
	        var object = _x,
	            property = _x2,
	            receiver = _x3;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	            var parent = Object.getPrototypeOf(object);if (parent === null) {
	                return undefined;
	            } else {
	                _x = parent;_x2 = property;_x3 = receiver;_again = true;desc = parent = undefined;continue _function;
	            }
	        } else if ('value' in desc) {
	            return desc.value;
	        } else {
	            var getter = desc.get;if (getter === undefined) {
	                return undefined;
	            }return getter.call(receiver);
	        }
	    }
	};
	
	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError('Cannot call a class as a function');
	    }
	}
	
	function _inherits(subClass, superClass) {
	    if (typeof superClass !== 'function' && superClass !== null) {
	        throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _onlinejavaclassMarked = __webpack_require__(57);
	
	var _onlinejavaclassMarked2 = _interopRequireDefault(_onlinejavaclassMarked);
	
	var _moment = __webpack_require__(84);
	
	var _moment2 = _interopRequireDefault(_moment);
	
	var _SpinnerJs = __webpack_require__(220);
	
	var _SpinnerJs2 = _interopRequireDefault(_SpinnerJs);
	
	var _reactDeviceDetect = __webpack_require__(225);
	
	var Item = (function (_React$Component) {
	    _inherits(Item, _React$Component);
	
	    function Item(props) {
	        _classCallCheck(this, Item);
	
	        _get(Object.getPrototypeOf(Item.prototype), 'constructor', this).call(this, props);
	        this.state = {};
	        this.getFromStore = this.getFromStore.bind(this);
	    }
	
	    _createClass(Item, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            //this.AppStore = this.context.flux.getStore('appStore');
	            //this.getFromStore();
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            // this.AppStore.addListener('change', this.getFromStore);
	            this.getResource(this.props.link);
	            var clipboard = new ClipboardJS('.copy-button');
	            clipboard.on('success', function (e) {
	                e.clearSelection();
	            });
	            clipboard.on('error', function (e) {});
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            // this.AppStore.removeListener('change', this.getFromStore);
	        }
	    }, {
	        key: 'getFromStore',
	        value: function getFromStore() {
	            this.setState(this.AppStore.getResource(this.props.link));
	        }
	    }, {
	        key: 'getResource',
	        value: function getResource(link) {
	            var _this = this;
	
	            var appActions = this.context.flux.getActions('appActions');
	            var siteMap = this.AppStore.getSiteMap();
	            var resourceDef = siteMap[link];
	            if (!resourceDef) {
	                return;
	            }
	            resourceDef.link = link;
	            if (typeof window !== 'undefined') {
	                window.location.href = "#" + link;
	            }
	            document.title = this.filter(link);
	            appActions.getResource(resourceDef).then(function (ref) {
	                _this.setState({
	                    STORE_MISS: ref.STORE_MISS,
	                    date: ref.date,
	                    link: ref.link,
	                    next: ref.next ? ref.next : undefined,
	                    pre: ref.pre ? ref.pre : undefined,
	                    repo: ref.repo ? ref.repo : 'https://github.com/metao1',
	                    postLink: ref.date,
	                    src: ref.src,
	                    tags: ref.tags,
	                    text: ref.text,
	                    title: ref.title,
	                    type: ref.type
	                });
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;
	
	            var jsx = undefined;
	            if (this.state.STORE_MISS) {
	                jsx = _react2['default'].createElement(_SpinnerJs2['default'], null);
	            } else {
	                var txt = (0, _onlinejavaclassMarked2['default'])(this.state.text);
	                var date = (0, _moment2['default'])(this.state.date).fromNow();
	                jsx = _react2['default'].createElement('div', { className: 'post markdown center-box' }, _react2['default'].createElement('div', { className: 'operational-btn' }, _react2['default'].createElement('div', { className: 'operational-link' }, _react2['default'].createElement('button', { className: 'button button1', disabled: !this.state.pre,
	                    onClick: function onClick() {
	                        return _this2.getResource(_this2.state.pre);
	                    } }, 'previous'), _react2['default'].createElement('button', { className: 'button button1', disabled: !this.state.next,
	                    onClick: function onClick() {
	                        return _this2.getResource(_this2.state.next);
	                    } }, 'next')), _react2['default'].createElement('div', { className: 'operational-link' }, _react2['default'].createElement('span', { className: 'navigation-spans' }, this.filter(this.state.pre)), _react2['default'].createElement('span', { className: 'navigation-spans' }, this.filter(this.state.next)))), _react2['default'].createElement('hr', null), _react2['default'].createElement('div', { className: 'date' }, _react2['default'].createElement('span', null, date), _react2['default'].createElement('a', { hidden: this.state.repo, id: 'viewSourceOnGithub', className: 'btn btn-primary',
	                    href: this.state.repo,
	                    target: '_blank' }, ' ', _react2['default'].createElement('span', { className: 'fap fap-github' }), 'View Source on Github  ')), _react2['default'].createElement('div', { className: 'markdown', dangerouslySetInnerHTML: { __html: txt } }));
	            }
	            return jsx;
	        }
	    }, {
	        key: 'filter',
	        value: function filter(link) {
	            if (!!link) {
	                return link.split('-').join(' ').split('/').join(' ').substr(0, link.length > this.checkRightSize() ? this.checkRightSize() : link.length).concat(link.length > this.checkRightSize() ? "..." : "");
	            }
	            return undefined;
	        }
	    }, {
	        key: 'checkRightSize',
	        value: function checkRightSize() {
	            return _reactDeviceDetect.isMobile ? 50 : 60;
	        }
	    }]);
	
	    return Item;
	})(_react2['default'].Component);
	
	exports['default'] = Item;
	module.exports = exports['default'];

/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', { value: true });
	
	function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }
	
	var React = __webpack_require__(1);
	var React__default = _interopDefault(React);
	
	var UAParser = __webpack_require__(226);
	
	var UA = new UAParser();
	var browser = UA.getBrowser();
	var cpu = UA.getCPU();
	var device = UA.getDevice();
	var engine = UA.getEngine();
	var os = UA.getOS();
	var ua = UA.getUA();
	
	var setDefaults = function setDefaults(p) {
	  var d = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'none';
	  return p ? p : d;
	};
	var getNavigatorInstance = function getNavigatorInstance() {
	  if (typeof window !== 'undefined') {
	    if (window.navigator || navigator) {
	      return window.navigator || navigator;
	    }
	  }
	
	  return false;
	};
	var isIOS13Check = function isIOS13Check(type) {
	  var nav = getNavigatorInstance();
	  return nav && nav.platform && (nav.platform.indexOf(type) !== -1 || nav.platform === 'MacIntel' && nav.maxTouchPoints > 1 && !window.MSStream);
	};
	
	function _typeof(obj) {
	  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
	    _typeof = function (obj) {
	      return typeof obj;
	    };
	  } else {
	    _typeof = function (obj) {
	      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	    };
	  }
	
	  return _typeof(obj);
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _defineProperties(target, props) {
	  for (var i = 0; i < props.length; i++) {
	    var descriptor = props[i];
	    descriptor.enumerable = descriptor.enumerable || false;
	    descriptor.configurable = true;
	    if ("value" in descriptor) descriptor.writable = true;
	    Object.defineProperty(target, descriptor.key, descriptor);
	  }
	}
	
	function _createClass(Constructor, protoProps, staticProps) {
	  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	  if (staticProps) _defineProperties(Constructor, staticProps);
	  return Constructor;
	}
	
	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }
	
	  return obj;
	}
	
	function _extends() {
	  _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];
	
	      for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }
	
	    return target;
	  };
	
	  return _extends.apply(this, arguments);
	}
	
	function ownKeys(object, enumerableOnly) {
	  var keys = Object.keys(object);
	
	  if (Object.getOwnPropertySymbols) {
	    var symbols = Object.getOwnPropertySymbols(object);
	    if (enumerableOnly) symbols = symbols.filter(function (sym) {
	      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
	    });
	    keys.push.apply(keys, symbols);
	  }
	
	  return keys;
	}
	
	function _objectSpread2(target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i] != null ? arguments[i] : {};
	
	    if (i % 2) {
	      ownKeys(source, true).forEach(function (key) {
	        _defineProperty(target, key, source[key]);
	      });
	    } else if (Object.getOwnPropertyDescriptors) {
	      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
	    } else {
	      ownKeys(source).forEach(function (key) {
	        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
	      });
	    }
	  }
	
	  return target;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function");
	  }
	
	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf(subClass, superClass);
	}
	
	function _getPrototypeOf(o) {
	  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
	    return o.__proto__ || Object.getPrototypeOf(o);
	  };
	  return _getPrototypeOf(o);
	}
	
	function _setPrototypeOf(o, p) {
	  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
	    o.__proto__ = p;
	    return o;
	  };
	
	  return _setPrototypeOf(o, p);
	}
	
	function _assertThisInitialized(self) {
	  if (self === void 0) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }
	
	  return self;
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (call && (typeof call === "object" || typeof call === "function")) {
	    return call;
	  }
	
	  return _assertThisInitialized(self);
	}
	
	var DEVICE_TYPES = {
	  MOBILE: 'mobile',
	  TABLET: 'tablet',
	  SMART_TV: 'smarttv',
	  CONSOLE: 'console',
	  WEARABLE: 'wearable',
	  BROWSER: undefined
	};
	var BROWSER_TYPES = {
	  CHROME: 'Chrome',
	  FIREFOX: "Firefox",
	  OPERA: "Opera",
	  YANDEX: "Yandex",
	  SAFARI: "Safari",
	  INTERNET_EXPLORER: "Internet Explorer",
	  EDGE: "Edge",
	  CHROMIUM: "Chromium",
	  IE: 'IE',
	  MOBILE_SAFARI: "Mobile Safari",
	  EDGE_CHROMIUM: "Edge Chromium"
	};
	var OS_TYPES = {
	  IOS: 'iOS',
	  ANDROID: "Android",
	  WINDOWS_PHONE: "Windows Phone",
	  WINDOWS: 'Windows',
	  MAC_OS: 'Mac OS'
	};
	var initialData = {
	  isMobile: false,
	  isTablet: false,
	  isBrowser: false,
	  isSmartTV: false,
	  isConsole: false,
	  isWearable: false
	};
	var checkType = function checkType(type) {
	  switch (type) {
	    case DEVICE_TYPES.MOBILE:
	      return {
	        isMobile: true
	      };
	
	    case DEVICE_TYPES.TABLET:
	      return {
	        isTablet: true
	      };
	
	    case DEVICE_TYPES.SMART_TV:
	      return {
	        isSmartTV: true
	      };
	
	    case DEVICE_TYPES.CONSOLE:
	      return {
	        isConsole: true
	      };
	
	    case DEVICE_TYPES.WEARABLE:
	      return {
	        isWearable: true
	      };
	
	    case DEVICE_TYPES.BROWSER:
	      return {
	        isBrowser: true
	      };
	
	    default:
	      return initialData;
	  }
	};
	var broPayload = function broPayload(isBrowser, browser, engine, os, ua) {
	  return {
	    isBrowser: isBrowser,
	    browserMajorVersion: setDefaults(browser.major),
	    browserFullVersion: setDefaults(browser.version),
	    browserName: setDefaults(browser.name),
	    engineName: setDefaults(engine.name),
	    engineVersion: setDefaults(engine.version),
	    osName: setDefaults(os.name),
	    osVersion: setDefaults(os.version),
	    userAgent: setDefaults(ua)
	  };
	};
	var mobilePayload = function mobilePayload(type, device, os, ua) {
	  return _objectSpread2({}, type, {
	    vendor: setDefaults(device.vendor),
	    model: setDefaults(device.model),
	    os: setDefaults(os.name),
	    osVersion: setDefaults(os.version),
	    ua: setDefaults(ua)
	  });
	};
	var stvPayload = function stvPayload(isSmartTV, engine, os, ua) {
	  return {
	    isSmartTV: isSmartTV,
	    engineName: setDefaults(engine.name),
	    engineVersion: setDefaults(engine.version),
	    osName: setDefaults(os.name),
	    osVersion: setDefaults(os.version),
	    userAgent: setDefaults(ua)
	  };
	};
	var consolePayload = function consolePayload(isConsole, engine, os, ua) {
	  return {
	    isConsole: isConsole,
	    engineName: setDefaults(engine.name),
	    engineVersion: setDefaults(engine.version),
	    osName: setDefaults(os.name),
	    osVersion: setDefaults(os.version),
	    userAgent: setDefaults(ua)
	  };
	};
	var wearPayload = function wearPayload(isWearable, engine, os, ua) {
	  return {
	    isWearable: isWearable,
	    engineName: setDefaults(engine.name),
	    engineVersion: setDefaults(engine.version),
	    osName: setDefaults(os.name),
	    osVersion: setDefaults(os.version),
	    userAgent: setDefaults(ua)
	  };
	};
	
	var type = checkType(device.type);
	
	function deviceDetect() {
	  var isBrowser = type.isBrowser,
	      isMobile = type.isMobile,
	      isTablet = type.isTablet,
	      isSmartTV = type.isSmartTV,
	      isConsole = type.isConsole,
	      isWearable = type.isWearable;
	
	  if (isBrowser) {
	    return broPayload(isBrowser, browser, engine, os, ua);
	  }
	
	  if (isSmartTV) {
	    return stvPayload(isSmartTV, engine, os, ua);
	  }
	
	  if (isConsole) {
	    return consolePayload(isConsole, engine, os, ua);
	  }
	
	  if (isMobile) {
	    return mobilePayload(type, device, os, ua);
	  }
	
	  if (isTablet) {
	    return mobilePayload(type, device, os, ua);
	  }
	
	  if (isWearable) {
	    return wearPayload(isWearable, engine, os, ua);
	  }
	}
	
	var isMobileType = function isMobileType() {
	  return device.type === DEVICE_TYPES.MOBILE;
	};
	
	var isTabletType = function isTabletType() {
	  return device.type === DEVICE_TYPES.TABLET;
	};
	
	var isMobileAndTabletType = function isMobileAndTabletType() {
	  switch (device.type) {
	    case DEVICE_TYPES.MOBILE:
	    case DEVICE_TYPES.TABLET:
	      return true;
	
	    default:
	      return false;
	  }
	};
	
	var isEdgeChromiumType = function isEdgeChromiumType() {
	  if (os.name === OS_TYPES.WINDOWS && os.version === '10') {
	    return typeof ua === 'string' && ua.indexOf('Edg/') !== -1;
	  }
	
	  return false;
	};
	
	var isSmartTVType = function isSmartTVType() {
	  return device.type === DEVICE_TYPES.SMART_TV;
	};
	
	var isBrowserType = function isBrowserType() {
	  return device.type === DEVICE_TYPES.BROWSER;
	};
	
	var isWearableType = function isWearableType() {
	  return device.type === DEVICE_TYPES.WEARABLE;
	};
	
	var isConsoleType = function isConsoleType() {
	  return device.type === DEVICE_TYPES.CONSOLE;
	};
	
	var isAndroidType = function isAndroidType() {
	  return os.name === OS_TYPES.ANDROID;
	};
	
	var isWindowsType = function isWindowsType() {
	  return os.name === OS_TYPES.WINDOWS;
	};
	
	var isMacOsType = function isMacOsType() {
	  return os.name === OS_TYPES.MAC_OS;
	};
	
	var isWinPhoneType = function isWinPhoneType() {
	  return os.name === OS_TYPES.WINDOWS_PHONE;
	};
	
	var isIOSType = function isIOSType() {
	  return os.name === OS_TYPES.IOS;
	};
	
	var isChromeType = function isChromeType() {
	  return browser.name === BROWSER_TYPES.CHROME;
	};
	
	var isFirefoxType = function isFirefoxType() {
	  return browser.name === BROWSER_TYPES.FIREFOX;
	};
	
	var isChromiumType = function isChromiumType() {
	  return browser.name === BROWSER_TYPES.CHROMIUM;
	};
	
	var isEdgeType = function isEdgeType() {
	  return browser.name === BROWSER_TYPES.EDGE;
	};
	
	var isYandexType = function isYandexType() {
	  return browser.name === BROWSER_TYPES.YANDEX;
	};
	
	var isSafariType = function isSafariType() {
	  return browser.name === BROWSER_TYPES.SAFARI || browser.name === BROWSER_TYPES.MOBILE_SAFARI;
	};
	
	var isMobileSafariType = function isMobileSafariType() {
	  return browser.name === BROWSER_TYPES.MOBILE_SAFARI;
	};
	
	var isOperaType = function isOperaType() {
	  return browser.name === BROWSER_TYPES.OPERA;
	};
	
	var isIEType = function isIEType() {
	  return browser.name === BROWSER_TYPES.INTERNET_EXPLORER || browser.name === BROWSER_TYPES.IE;
	};
	
	var isElectronType = function isElectronType() {
	  var nav = getNavigatorInstance();
	  var ua = nav && nav.userAgent.toLowerCase();
	  return typeof ua === 'string' ? /electron/.test(ua) : false;
	};
	
	var getIOS13 = function getIOS13() {
	  var nav = getNavigatorInstance();
	  return nav && (/iPad|iPhone|iPod/.test(nav.platform) || nav.platform === 'MacIntel' && nav.maxTouchPoints > 1) && !window.MSStream;
	};
	
	var getIPad13 = function getIPad13() {
	  return isIOS13Check('iPad');
	};
	
	var getIphone13 = function getIphone13() {
	  return isIOS13Check('iPhone');
	};
	
	var getIPod13 = function getIPod13() {
	  return isIOS13Check('iPod');
	};
	
	var getBrowserFullVersion = function getBrowserFullVersion() {
	  return setDefaults(browser.version);
	};
	
	var getBrowserVersion = function getBrowserVersion() {
	  return setDefaults(browser.major);
	};
	
	var getOsVersion = function getOsVersion() {
	  return setDefaults(os.version);
	};
	
	var getOsName = function getOsName() {
	  return setDefaults(os.name);
	};
	
	var getBrowserName = function getBrowserName() {
	  return setDefaults(browser.name);
	};
	
	var getMobileVendor = function getMobileVendor() {
	  return setDefaults(device.vendor);
	};
	
	var getMobileModel = function getMobileModel() {
	  return setDefaults(device.model);
	};
	
	var getEngineName = function getEngineName() {
	  return setDefaults(engine.name);
	};
	
	var getEngineVersion = function getEngineVersion() {
	  return setDefaults(engine.version);
	};
	
	var getUseragent = function getUseragent() {
	  return setDefaults(ua);
	};
	
	var getDeviceType = function getDeviceType() {
	  return setDefaults(device.type, 'browser');
	};
	
	var isSmartTV = isSmartTVType();
	var isConsole = isConsoleType();
	var isWearable = isWearableType();
	var isMobileSafari = isMobileSafariType() || getIPad13();
	var isChromium = isChromiumType();
	var isMobile = isMobileAndTabletType() || getIPad13();
	var isMobileOnly = isMobileType();
	var isTablet = isTabletType() || getIPad13();
	var isBrowser = isBrowserType();
	var isAndroid = isAndroidType();
	var isWinPhone = isWinPhoneType();
	var isIOS = isIOSType() || getIPad13();
	var isChrome = isChromeType();
	var isFirefox = isFirefoxType();
	var isSafari = isSafariType();
	var isOpera = isOperaType();
	var isIE = isIEType();
	var osVersion = getOsVersion();
	var osName = getOsName();
	var fullBrowserVersion = getBrowserFullVersion();
	var browserVersion = getBrowserVersion();
	var browserName = getBrowserName();
	var mobileVendor = getMobileVendor();
	var mobileModel = getMobileModel();
	var engineName = getEngineName();
	var engineVersion = getEngineVersion();
	var getUA = getUseragent();
	var isEdge = isEdgeType() || isEdgeChromiumType();
	var isYandex = isYandexType();
	var deviceType = getDeviceType();
	var isIOS13 = getIOS13();
	var isIPad13 = getIPad13();
	var isIPhone13 = getIphone13();
	var isIPod13 = getIPod13();
	var isElectron = isElectronType();
	var isEdgeChromium = isEdgeChromiumType();
	var isLegacyEdge = isEdgeType();
	var isWindows = isWindowsType();
	var isMacOs = isMacOsType();
	
	var AndroidView = function AndroidView(_ref) {
	  var renderWithFragment = _ref.renderWithFragment,
	      children = _ref.children,
	      viewClassName = _ref.viewClassName,
	      style = _ref.style;
	  return isAndroid ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", {
	    className: viewClassName,
	    style: style
	  }, children) : null;
	};
	var BrowserView = function BrowserView(_ref2) {
	  var renderWithFragment = _ref2.renderWithFragment,
	      children = _ref2.children,
	      viewClassName = _ref2.viewClassName,
	      style = _ref2.style;
	  return isBrowser ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", {
	    className: viewClassName,
	    style: style
	  }, children) : null;
	};
	var IEView = function IEView(_ref3) {
	  var renderWithFragment = _ref3.renderWithFragment,
	      children = _ref3.children,
	      viewClassName = _ref3.viewClassName,
	      style = _ref3.style;
	  return isIE ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", {
	    className: viewClassName,
	    style: style
	  }, children) : null;
	};
	var IOSView = function IOSView(_ref4) {
	  var renderWithFragment = _ref4.renderWithFragment,
	      children = _ref4.children,
	      viewClassName = _ref4.viewClassName,
	      style = _ref4.style;
	  return isIOS ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", {
	    className: viewClassName,
	    style: style
	  }, children) : null;
	};
	var MobileView = function MobileView(_ref5) {
	  var renderWithFragment = _ref5.renderWithFragment,
	      children = _ref5.children,
	      viewClassName = _ref5.viewClassName,
	      style = _ref5.style;
	  return isMobile ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", {
	    className: viewClassName,
	    style: style
	  }, children) : null;
	};
	var TabletView = function TabletView(_ref6) {
	  var renderWithFragment = _ref6.renderWithFragment,
	      children = _ref6.children,
	      viewClassName = _ref6.viewClassName,
	      style = _ref6.style;
	  return isTablet ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", {
	    className: viewClassName,
	    style: style
	  }, children) : null;
	};
	var WinPhoneView = function WinPhoneView(_ref7) {
	  var renderWithFragment = _ref7.renderWithFragment,
	      children = _ref7.children,
	      viewClassName = _ref7.viewClassName,
	      style = _ref7.style;
	  return isWinPhone ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", {
	    className: viewClassName,
	    style: style
	  }, children) : null;
	};
	var MobileOnlyView = function MobileOnlyView(_ref8) {
	  var renderWithFragment = _ref8.renderWithFragment,
	      children = _ref8.children,
	      viewClassName = _ref8.viewClassName,
	      style = _ref8.style;
	  return isMobileOnly ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", {
	    className: viewClassName,
	    style: style
	  }, children) : null;
	};
	var SmartTVView = function SmartTVView(_ref9) {
	  var renderWithFragment = _ref9.renderWithFragment,
	      children = _ref9.children,
	      viewClassName = _ref9.viewClassName,
	      style = _ref9.style;
	  return isSmartTV ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", {
	    className: viewClassName,
	    style: style
	  }, children) : null;
	};
	var ConsoleView = function ConsoleView(_ref10) {
	  var renderWithFragment = _ref10.renderWithFragment,
	      children = _ref10.children,
	      viewClassName = _ref10.viewClassName,
	      style = _ref10.style;
	  return isConsole ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", {
	    className: viewClassName,
	    style: style
	  }, children) : null;
	};
	var WearableView = function WearableView(_ref11) {
	  var renderWithFragment = _ref11.renderWithFragment,
	      children = _ref11.children,
	      viewClassName = _ref11.viewClassName,
	      style = _ref11.style;
	  return isWearable ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", {
	    className: viewClassName,
	    style: style
	  }, children) : null;
	};
	var CustomView = function CustomView(_ref12) {
	  var renderWithFragment = _ref12.renderWithFragment,
	      children = _ref12.children,
	      viewClassName = _ref12.viewClassName,
	      style = _ref12.style,
	      condition = _ref12.condition;
	  return condition ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", {
	    className: viewClassName,
	    style: style
	  }, children) : null;
	};
	
	function withOrientationChange(WrappedComponent) {
	  return (
	    /*#__PURE__*/
	    function (_React$Component) {
	      _inherits(_class, _React$Component);
	
	      function _class(props) {
	        var _this;
	
	        _classCallCheck(this, _class);
	
	        _this = _possibleConstructorReturn(this, _getPrototypeOf(_class).call(this, props));
	        _this.isEventListenerAdded = false;
	        _this.handleOrientationChange = _this.handleOrientationChange.bind(_assertThisInitialized(_this));
	        _this.onOrientationChange = _this.onOrientationChange.bind(_assertThisInitialized(_this));
	        _this.onPageLoad = _this.onPageLoad.bind(_assertThisInitialized(_this));
	        _this.state = {
	          isLandscape: false,
	          isPortrait: false
	        };
	        return _this;
	      }
	
	      _createClass(_class, [{
	        key: "handleOrientationChange",
	        value: function handleOrientationChange() {
	          if (!this.isEventListenerAdded) {
	            this.isEventListenerAdded = true;
	          }
	
	          var orientation = window.innerWidth > window.innerHeight ? 90 : 0;
	          this.setState({
	            isPortrait: orientation === 0,
	            isLandscape: orientation === 90
	          });
	        }
	      }, {
	        key: "onOrientationChange",
	        value: function onOrientationChange() {
	          this.handleOrientationChange();
	        }
	      }, {
	        key: "onPageLoad",
	        value: function onPageLoad() {
	          this.handleOrientationChange();
	        }
	      }, {
	        key: "componentDidMount",
	        value: function componentDidMount() {
	          if ((typeof window === "undefined" ? "undefined" : _typeof(window)) !== undefined && isMobile) {
	            if (!this.isEventListenerAdded) {
	              this.handleOrientationChange();
	              window.addEventListener("load", this.onPageLoad, false);
	            } else {
	              window.removeEventListener("load", this.onPageLoad, false);
	            }
	
	            window.addEventListener("resize", this.onOrientationChange, false);
	          }
	        }
	      }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	          window.removeEventListener("resize", this.onOrientationChange, false);
	        }
	      }, {
	        key: "render",
	        value: function render() {
	          return React__default.createElement(WrappedComponent, _extends({}, this.props, {
	            isLandscape: this.state.isLandscape,
	            isPortrait: this.state.isPortrait
	          }));
	        }
	      }]);
	
	      return _class;
	    }(React__default.Component)
	  );
	}
	
	exports.AndroidView = AndroidView;
	exports.BrowserView = BrowserView;
	exports.ConsoleView = ConsoleView;
	exports.CustomView = CustomView;
	exports.IEView = IEView;
	exports.IOSView = IOSView;
	exports.MobileOnlyView = MobileOnlyView;
	exports.MobileView = MobileView;
	exports.SmartTVView = SmartTVView;
	exports.TabletView = TabletView;
	exports.WearableView = WearableView;
	exports.WinPhoneView = WinPhoneView;
	exports.browserName = browserName;
	exports.browserVersion = browserVersion;
	exports.deviceDetect = deviceDetect;
	exports.deviceType = deviceType;
	exports.engineName = engineName;
	exports.engineVersion = engineVersion;
	exports.fullBrowserVersion = fullBrowserVersion;
	exports.getUA = getUA;
	exports.isAndroid = isAndroid;
	exports.isBrowser = isBrowser;
	exports.isChrome = isChrome;
	exports.isChromium = isChromium;
	exports.isConsole = isConsole;
	exports.isEdge = isEdge;
	exports.isEdgeChromium = isEdgeChromium;
	exports.isElectron = isElectron;
	exports.isFirefox = isFirefox;
	exports.isIE = isIE;
	exports.isIOS = isIOS;
	exports.isIOS13 = isIOS13;
	exports.isIPad13 = isIPad13;
	exports.isIPhone13 = isIPhone13;
	exports.isIPod13 = isIPod13;
	exports.isLegacyEdge = isLegacyEdge;
	exports.isMacOs = isMacOs;
	exports.isMobile = isMobile;
	exports.isMobileOnly = isMobileOnly;
	exports.isMobileSafari = isMobileSafari;
	exports.isOpera = isOpera;
	exports.isSafari = isSafari;
	exports.isSmartTV = isSmartTV;
	exports.isTablet = isTablet;
	exports.isWearable = isWearable;
	exports.isWinPhone = isWinPhone;
	exports.isWindows = isWindows;
	exports.isYandex = isYandex;
	exports.mobileModel = mobileModel;
	exports.mobileVendor = mobileVendor;
	exports.osName = osName;
	exports.osVersion = osVersion;
	exports.withOrientationChange = withOrientationChange;


/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * UAParser.js v0.7.21
	 * Lightweight JavaScript-based User-Agent string parser
	 * https://github.com/faisalman/ua-parser-js
	 *
	 * Copyright © 2012-2019 Faisal Salman <f@faisalman.com>
	 * Licensed under MIT License
	 */
	(function(window,undefined){"use strict";var LIBVERSION="0.7.21",EMPTY="",UNKNOWN="?",FUNC_TYPE="function",UNDEF_TYPE="undefined",OBJ_TYPE="object",STR_TYPE="string",MAJOR="major",MODEL="model",NAME="name",TYPE="type",VENDOR="vendor",VERSION="version",ARCHITECTURE="architecture",CONSOLE="console",MOBILE="mobile",TABLET="tablet",SMARTTV="smarttv",WEARABLE="wearable",EMBEDDED="embedded";var util={extend:function(regexes,extensions){var mergedRegexes={};for(var i in regexes){if(extensions[i]&&extensions[i].length%2===0){mergedRegexes[i]=extensions[i].concat(regexes[i])}else{mergedRegexes[i]=regexes[i]}}return mergedRegexes},has:function(str1,str2){if(typeof str1==="string"){return str2.toLowerCase().indexOf(str1.toLowerCase())!==-1}else{return false}},lowerize:function(str){return str.toLowerCase()},major:function(version){return typeof version===STR_TYPE?version.replace(/[^\d\.]/g,"").split(".")[0]:undefined},trim:function(str){return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}};var mapper={rgx:function(ua,arrays){var i=0,j,k,p,q,matches,match;while(i<arrays.length&&!matches){var regex=arrays[i],props=arrays[i+1];j=k=0;while(j<regex.length&&!matches){matches=regex[j++].exec(ua);if(!!matches){for(p=0;p<props.length;p++){match=matches[++k];q=props[p];if(typeof q===OBJ_TYPE&&q.length>0){if(q.length==2){if(typeof q[1]==FUNC_TYPE){this[q[0]]=q[1].call(this,match)}else{this[q[0]]=q[1]}}else if(q.length==3){if(typeof q[1]===FUNC_TYPE&&!(q[1].exec&&q[1].test)){this[q[0]]=match?q[1].call(this,match,q[2]):undefined}else{this[q[0]]=match?match.replace(q[1],q[2]):undefined}}else if(q.length==4){this[q[0]]=match?q[3].call(this,match.replace(q[1],q[2])):undefined}}else{this[q]=match?match:undefined}}}}i+=2}},str:function(str,map){for(var i in map){if(typeof map[i]===OBJ_TYPE&&map[i].length>0){for(var j=0;j<map[i].length;j++){if(util.has(map[i][j],str)){return i===UNKNOWN?undefined:i}}}else if(util.has(map[i],str)){return i===UNKNOWN?undefined:i}}return str}};var maps={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2000:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}};var regexes={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[NAME,VERSION],[/(opios)[\/\s]+([\w\.]+)/i],[[NAME,"Opera Mini"],VERSION],[/\s(opr)\/([\w\.]+)/i],[[NAME,"Opera"],VERSION],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,/(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i,/(bidubrowser|baidubrowser)[\/\s]?([\w\.]+)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]*)/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i],[NAME,VERSION],[/(konqueror)\/([\w\.]+)/i],[[NAME,"Konqueror"],VERSION],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[[NAME,"IE"],VERSION],[/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i],[[NAME,"Edge"],VERSION],[/(yabrowser)\/([\w\.]+)/i],[[NAME,"Yandex"],VERSION],[/(Avast)\/([\w\.]+)/i],[[NAME,"Avast Secure Browser"],VERSION],[/(AVG)\/([\w\.]+)/i],[[NAME,"AVG Secure Browser"],VERSION],[/(puffin)\/([\w\.]+)/i],[[NAME,"Puffin"],VERSION],[/(focus)\/([\w\.]+)/i],[[NAME,"Firefox Focus"],VERSION],[/(opt)\/([\w\.]+)/i],[[NAME,"Opera Touch"],VERSION],[/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[[NAME,"UCBrowser"],VERSION],[/(comodo_dragon)\/([\w\.]+)/i],[[NAME,/_/g," "],VERSION],[/(windowswechat qbcore)\/([\w\.]+)/i],[[NAME,"WeChat(Win) Desktop"],VERSION],[/(micromessenger)\/([\w\.]+)/i],[[NAME,"WeChat"],VERSION],[/(brave)\/([\w\.]+)/i],[[NAME,"Brave"],VERSION],[/(qqbrowserlite)\/([\w\.]+)/i],[NAME,VERSION],[/(QQ)\/([\d\.]+)/i],[NAME,VERSION],[/m?(qqbrowser)[\/\s]?([\w\.]+)/i],[NAME,VERSION],[/(baiduboxapp)[\/\s]?([\w\.]+)/i],[NAME,VERSION],[/(2345Explorer)[\/\s]?([\w\.]+)/i],[NAME,VERSION],[/(MetaSr)[\/\s]?([\w\.]+)/i],[NAME],[/(LBBROWSER)/i],[NAME],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[VERSION,[NAME,"MIUI Browser"]],[/;fbav\/([\w\.]+);/i],[VERSION,[NAME,"Facebook"]],[/safari\s(line)\/([\w\.]+)/i,/android.+(line)\/([\w\.]+)\/iab/i],[NAME,VERSION],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[VERSION,[NAME,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[NAME,/(.+)/,"$1 WebView"],VERSION],[/((?:oculus|samsung)browser)\/([\w\.]+)/i],[[NAME,/(.+(?:g|us))(.+)/,"$1 $2"],VERSION],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],[VERSION,[NAME,"Android Browser"]],[/(sailfishbrowser)\/([\w\.]+)/i],[[NAME,"Sailfish Browser"],VERSION],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[NAME,VERSION],[/(dolfin)\/([\w\.]+)/i],[[NAME,"Dolphin"],VERSION],[/(qihu|qhbrowser|qihoobrowser|360browser)/i],[[NAME,"360 Browser"]],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[NAME,"Chrome"],VERSION],[/(coast)\/([\w\.]+)/i],[[NAME,"Opera Coast"],VERSION],[/fxios\/([\w\.-]+)/i],[VERSION,[NAME,"Firefox"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],[VERSION,[NAME,"Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],[VERSION,NAME],[/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[[NAME,"GSA"],VERSION],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[NAME,[VERSION,mapper.str,maps.browser.oldsafari.version]],[/(webkit|khtml)\/([\w\.]+)/i],[NAME,VERSION],[/(navigator|netscape)\/([\w\.-]+)/i],[[NAME,"Netscape"],VERSION],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]*)/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[NAME,VERSION]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[ARCHITECTURE,"amd64"]],[/(ia32(?=;))/i],[[ARCHITECTURE,util.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[ARCHITECTURE,"ia32"]],[/windows\s(ce|mobile);\sppc;/i],[[ARCHITECTURE,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[ARCHITECTURE,/ower/,"",util.lowerize]],[/(sun4\w)[;\)]/i],[[ARCHITECTURE,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[[ARCHITECTURE,util.lowerize]]],device:[[/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i],[MODEL,VENDOR,[TYPE,TABLET]],[/applecoremedia\/[\w\.]+ \((ipad)/],[MODEL,[VENDOR,"Apple"],[TYPE,TABLET]],[/(apple\s{0,1}tv)/i],[[MODEL,"Apple TV"],[VENDOR,"Apple"],[TYPE,SMARTTV]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(hp).+(tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[VENDOR,MODEL,[TYPE,TABLET]],[/(kf[A-z]+)\sbuild\/.+silk\//i],[MODEL,[VENDOR,"Amazon"],[TYPE,TABLET]],[/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],[[MODEL,mapper.str,maps.device.amazon.model],[VENDOR,"Amazon"],[TYPE,MOBILE]],[/android.+aft([bms])\sbuild/i],[MODEL,[VENDOR,"Amazon"],[TYPE,SMARTTV]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[MODEL,VENDOR,[TYPE,MOBILE]],[/\((ip[honed|\s\w*]+);/i],[MODEL,[VENDOR,"Apple"],[TYPE,MOBILE]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[VENDOR,MODEL,[TYPE,MOBILE]],[/\(bb10;\s(\w+)/i],[MODEL,[VENDOR,"BlackBerry"],[TYPE,MOBILE]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i],[MODEL,[VENDOR,"Asus"],[TYPE,TABLET]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[VENDOR,"Sony"],[MODEL,"Xperia Tablet"],[TYPE,TABLET]],[/android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[MODEL,[VENDOR,"Sony"],[TYPE,MOBILE]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[VENDOR,MODEL,[TYPE,CONSOLE]],[/android.+;\s(shield)\sbuild/i],[MODEL,[VENDOR,"Nvidia"],[TYPE,CONSOLE]],[/(playstation\s[34portablevi]+)/i],[MODEL,[VENDOR,"Sony"],[TYPE,CONSOLE]],[/(sprint\s(\w+))/i],[[VENDOR,mapper.str,maps.device.sprint.vendor],[MODEL,mapper.str,maps.device.sprint.model],[TYPE,MOBILE]],[/(htc)[;_\s-]+([\w\s]+(?=\)|\sbuild)|\w+)/i,/(zte)-(\w*)/i,/(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],[VENDOR,[MODEL,/_/g," "],[TYPE,MOBILE]],[/(nexus\s9)/i],[MODEL,[VENDOR,"HTC"],[TYPE,TABLET]],[/d\/huawei([\w\s-]+)[;\)]/i,/(nexus\s6p|vog-l29|ane-lx1|eml-l29)/i],[MODEL,[VENDOR,"Huawei"],[TYPE,MOBILE]],[/android.+(bah2?-a?[lw]\d{2})/i],[MODEL,[VENDOR,"Huawei"],[TYPE,TABLET]],[/(microsoft);\s(lumia[\s\w]+)/i],[VENDOR,MODEL,[TYPE,MOBILE]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[MODEL,[VENDOR,"Microsoft"],[TYPE,CONSOLE]],[/(kin\.[onetw]{3})/i],[[MODEL,/\./g," "],[VENDOR,"Microsoft"],[TYPE,MOBILE]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w*)/i,/(XT\d{3,4}) build\//i,/(nexus\s6)/i],[MODEL,[VENDOR,"Motorola"],[TYPE,MOBILE]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[MODEL,[VENDOR,"Motorola"],[TYPE,TABLET]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[VENDOR,util.trim],[MODEL,util.trim],[TYPE,SMARTTV]],[/hbbtv.+maple;(\d+)/i],[[MODEL,/^/,"SmartTV"],[VENDOR,"Samsung"],[TYPE,SMARTTV]],[/\(dtv[\);].+(aquos)/i],[MODEL,[VENDOR,"Sharp"],[TYPE,SMARTTV]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[VENDOR,"Samsung"],MODEL,[TYPE,TABLET]],[/smart-tv.+(samsung)/i],[VENDOR,[TYPE,SMARTTV],MODEL],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,/sec-((sgh\w+))/i],[[VENDOR,"Samsung"],MODEL,[TYPE,MOBILE]],[/sie-(\w*)/i],[MODEL,[VENDOR,"Siemens"],[TYPE,MOBILE]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]*)/i],[[VENDOR,"Nokia"],MODEL,[TYPE,MOBILE]],[/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],[MODEL,[VENDOR,"Acer"],[TYPE,TABLET]],[/android.+([vl]k\-?\d{3})\s+build/i],[MODEL,[VENDOR,"LG"],[TYPE,TABLET]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[VENDOR,"LG"],MODEL,[TYPE,TABLET]],[/(lg) netcast\.tv/i],[VENDOR,MODEL,[TYPE,SMARTTV]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w*)/i,/android.+lg(\-?[\d\w]+)\s+build/i],[MODEL,[VENDOR,"LG"],[TYPE,MOBILE]],[/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i],[VENDOR,MODEL,[TYPE,TABLET]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[MODEL,[VENDOR,"Lenovo"],[TYPE,TABLET]],[/(lenovo)[_\s-]?([\w-]+)/i],[VENDOR,MODEL,[TYPE,MOBILE]],[/linux;.+((jolla));/i],[VENDOR,MODEL,[TYPE,MOBILE]],[/((pebble))app\/[\d\.]+\s/i],[VENDOR,MODEL,[TYPE,WEARABLE]],[/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[VENDOR,MODEL,[TYPE,MOBILE]],[/crkey/i],[[MODEL,"Chromecast"],[VENDOR,"Google"],[TYPE,SMARTTV]],[/android.+;\s(glass)\s\d/i],[MODEL,[VENDOR,"Google"],[TYPE,WEARABLE]],[/android.+;\s(pixel c)[\s)]/i],[MODEL,[VENDOR,"Google"],[TYPE,TABLET]],[/android.+;\s(pixel( [23])?( xl)?)[\s)]/i],[MODEL,[VENDOR,"Google"],[TYPE,MOBILE]],[/android.+;\s(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:a\d|one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i,/android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i],[[MODEL,/_/g," "],[VENDOR,"Xiaomi"],[TYPE,MOBILE]],[/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],[[MODEL,/_/g," "],[VENDOR,"Xiaomi"],[TYPE,TABLET]],[/android.+;\s(m[1-5]\snote)\sbuild/i],[MODEL,[VENDOR,"Meizu"],[TYPE,MOBILE]],[/(mz)-([\w-]{2,})/i],[[VENDOR,"Meizu"],MODEL,[TYPE,MOBILE]],[/android.+a000(1)\s+build/i,/android.+oneplus\s(a\d{4})[\s)]/i],[MODEL,[VENDOR,"OnePlus"],[TYPE,MOBILE]],[/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],[MODEL,[VENDOR,"RCA"],[TYPE,TABLET]],[/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],[MODEL,[VENDOR,"Dell"],[TYPE,TABLET]],[/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],[MODEL,[VENDOR,"Verizon"],[TYPE,TABLET]],[/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],[[VENDOR,"Barnes & Noble"],MODEL,[TYPE,TABLET]],[/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],[MODEL,[VENDOR,"NuVision"],[TYPE,TABLET]],[/android.+;\s(k88)\sbuild/i],[MODEL,[VENDOR,"ZTE"],[TYPE,TABLET]],[/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],[MODEL,[VENDOR,"Swiss"],[TYPE,MOBILE]],[/android.+[;\/]\s*(zur\d{3})\s+build/i],[MODEL,[VENDOR,"Swiss"],[TYPE,TABLET]],[/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],[MODEL,[VENDOR,"Zeki"],[TYPE,TABLET]],[/(android).+[;\/]\s+([YR]\d{2})\s+build/i,/android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],[[VENDOR,"Dragon Touch"],MODEL,[TYPE,TABLET]],[/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],[MODEL,[VENDOR,"Insignia"],[TYPE,TABLET]],[/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],[MODEL,[VENDOR,"NextBook"],[TYPE,TABLET]],[/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],[[VENDOR,"Voice"],MODEL,[TYPE,MOBILE]],[/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],[[VENDOR,"LvTel"],MODEL,[TYPE,MOBILE]],[/android.+;\s(PH-1)\s/i],[MODEL,[VENDOR,"Essential"],[TYPE,MOBILE]],[/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],[MODEL,[VENDOR,"Envizen"],[TYPE,TABLET]],[/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],[VENDOR,MODEL,[TYPE,TABLET]],[/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],[MODEL,[VENDOR,"MachSpeed"],[TYPE,TABLET]],[/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],[VENDOR,MODEL,[TYPE,TABLET]],[/android.+[;\/]\s*TU_(1491)\s+build/i],[MODEL,[VENDOR,"Rotor"],[TYPE,TABLET]],[/android.+(KS(.+))\s+build/i],[MODEL,[VENDOR,"Amazon"],[TYPE,TABLET]],[/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],[VENDOR,MODEL,[TYPE,TABLET]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[TYPE,util.lowerize],VENDOR,MODEL],[/[\s\/\(](smart-?tv)[;\)]/i],[[TYPE,SMARTTV]],[/(android[\w\.\s\-]{0,9});.+build/i],[MODEL,[VENDOR,"Generic"]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[VERSION,[NAME,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[VERSION,[NAME,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[NAME,VERSION],[/rv\:([\w\.]{1,9}).+(gecko)/i],[VERSION,NAME]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[NAME,VERSION],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[NAME,[VERSION,mapper.str,maps.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[NAME,"Windows"],[VERSION,mapper.str,maps.os.windows.version]],[/\((bb)(10);/i],[[NAME,"BlackBerry"],VERSION],[/(blackberry)\w*\/?([\w\.]*)/i,/(tizen|kaios)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i],[NAME,VERSION],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],[[NAME,"Symbian"],VERSION],[/\((series40);/i],[NAME],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[NAME,"Firefox OS"],VERSION],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w*)/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,/(hurd|linux)\s?([\w\.]*)/i,/(gnu)\s?([\w\.]*)/i],[NAME,VERSION],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[NAME,"Chromium OS"],VERSION],[/(sunos)\s?([\w\.\d]*)/i],[[NAME,"Solaris"],VERSION],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],[NAME,VERSION],[/(haiku)\s(\w+)/i],[NAME,VERSION],[/cfnetwork\/.+darwin/i,/ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],[[VERSION,/_/g,"."],[NAME,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]*)/i,/(macintosh|mac(?=_powerpc)\s)/i],[[NAME,"Mac OS"],[VERSION,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]*)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,/(unix)\s?([\w\.]*)/i],[NAME,VERSION]]};var UAParser=function(uastring,extensions){if(typeof uastring==="object"){extensions=uastring;uastring=undefined}if(!(this instanceof UAParser)){return new UAParser(uastring,extensions).getResult()}var ua=uastring||(window&&window.navigator&&window.navigator.userAgent?window.navigator.userAgent:EMPTY);var rgxmap=extensions?util.extend(regexes,extensions):regexes;this.getBrowser=function(){var browser={name:undefined,version:undefined};mapper.rgx.call(browser,ua,rgxmap.browser);browser.major=util.major(browser.version);return browser};this.getCPU=function(){var cpu={architecture:undefined};mapper.rgx.call(cpu,ua,rgxmap.cpu);return cpu};this.getDevice=function(){var device={vendor:undefined,model:undefined,type:undefined};mapper.rgx.call(device,ua,rgxmap.device);return device};this.getEngine=function(){var engine={name:undefined,version:undefined};mapper.rgx.call(engine,ua,rgxmap.engine);return engine};this.getOS=function(){var os={name:undefined,version:undefined};mapper.rgx.call(os,ua,rgxmap.os);return os};this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}};this.getUA=function(){return ua};this.setUA=function(uastring){ua=uastring;return this};return this};UAParser.VERSION=LIBVERSION;UAParser.BROWSER={NAME:NAME,MAJOR:MAJOR,VERSION:VERSION};UAParser.CPU={ARCHITECTURE:ARCHITECTURE};UAParser.DEVICE={MODEL:MODEL,VENDOR:VENDOR,TYPE:TYPE,CONSOLE:CONSOLE,MOBILE:MOBILE,SMARTTV:SMARTTV,TABLET:TABLET,WEARABLE:WEARABLE,EMBEDDED:EMBEDDED};UAParser.ENGINE={NAME:NAME,VERSION:VERSION};UAParser.OS={NAME:NAME,VERSION:VERSION};if(typeof exports!==UNDEF_TYPE){if(typeof module!==UNDEF_TYPE&&module.exports){exports=module.exports=UAParser}exports.UAParser=UAParser}else{if(true){!(__WEBPACK_AMD_DEFINE_RESULT__ = function(){return UAParser}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))}else if(window){window.UAParser=UAParser}}var $=window&&(window.jQuery||window.Zepto);if($&&!$.ua){var parser=new UAParser;$.ua=parser.getResult();$.ua.get=function(){return parser.getUA()};$.ua.set=function(uastring){parser.setUA(uastring);var result=parser.getResult();for(var prop in result){$.ua[prop]=result[prop]}}}})(typeof window==="object"?window:this);

/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	})();
	
	var _get = function get(_x, _x2, _x3) {
	  var _again = true;_function: while (_again) {
	    var object = _x,
	        property = _x2,
	        receiver = _x3;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	      var parent = Object.getPrototypeOf(object);if (parent === null) {
	        return undefined;
	      } else {
	        _x = parent;_x2 = property;_x3 = receiver;_again = true;desc = parent = undefined;continue _function;
	      }
	    } else if ('value' in desc) {
	      return desc.value;
	    } else {
	      var getter = desc.get;if (getter === undefined) {
	        return undefined;
	      }return getter.call(receiver);
	    }
	  }
	};
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError('Cannot call a class as a function');
	  }
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== 'function' && superClass !== null) {
	    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _componentsItemListJs = __webpack_require__(83);
	
	var _componentsItemListJs2 = _interopRequireDefault(_componentsItemListJs);
	
	var _componentsSpinnerJs = __webpack_require__(220);
	
	var _componentsSpinnerJs2 = _interopRequireDefault(_componentsSpinnerJs);
	
	var ExperimentSearchHandler = (function (_Component) {
	  _inherits(ExperimentSearchHandler, _Component);
	
	  function ExperimentSearchHandler(props) {
	    _classCallCheck(this, ExperimentSearchHandler);
	
	    _get(Object.getPrototypeOf(ExperimentSearchHandler.prototype), 'constructor', this).call(this, props);
	    this.state = {
	      setSearchQuery: this.props.setSearchQuery
	    };
	
	    this.getFromStore = this.getFromStore.bind(this);
	  }
	
	  _createClass(ExperimentSearchHandler, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      //this.AppStore = this.context.flux.getStore('appStore');
	      this.setState({
	        query: this.context.router.getCurrentParams().query,
	        items: this.AppStore.getSearchItems(this.context.router.getCurrentParams().query)
	      });
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps() {
	      if (this.context.router.getCurrentParams().query !== this.state.query) {
	        this.setState({ query: this.context.router.getCurrentParams().query, items: this.AppStore.getSearchItems(this.context.router.getCurrentParams().query) });
	        this.state.setSearchQuery(this.context.router.getCurrentParams().query);
	      }
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      // this.AppStore.addListener('change', this.getFromStore);
	      this.state.setSearchQuery(this.context.router.getCurrentParams().query);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      // this.AppStore.removeListener('change', this.getFromStore);
	    }
	  }, {
	    key: 'getFromStore',
	    value: function getFromStore() {
	      this.setState({ items: this.AppStore.getSearchItems(this.state.query) });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var items = this.state.items;
	      var jsx = undefined;
	
	      if (items.STORE_MISS) {
	        jsx = _react2['default'].createElement(_componentsSpinnerJs2['default'], null);
	      } else {
	        jsx = _react2['default'].createElement(_componentsItemListJs2['default'], { src: items });
	      }
	
	      return jsx;
	    }
	  }], [{
	    key: 'willTransitionFrom',
	    value: function willTransitionFrom(transition, component) {
	      if (transition.path.indexOf('/search/') !== 0) {
	        component.state.setSearchQuery('');
	      }
	    }
	  }]);
	
	  return ExperimentSearchHandler;
	})(_react.Component);
	
	exports['default'] = ExperimentSearchHandler;
	module.exports = exports['default'];

/***/ })
]);
//# sourceMappingURL=apps.js.map