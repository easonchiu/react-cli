webpackJsonp([2],{250:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(103),o=n(630),a=r(o),l=n(261),c=r(l),i=(0,u.compose)((0,u.applyMiddleware)(a.default))(u.createStore),f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i(c.default,e)};t.default=f},251:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(13),o=r(u),a=n(601),l=n(262),c=r(l),i=function(){return o.default.createElement(a.HashRouter,null,o.default.createElement("div",null,o.default.createElement(a.Route,{exact:!0,path:"/",component:c.default}),o.default.createElement(a.Redirect,{from:"*",to:"/"})))};t.default=i},254:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(444);var r=n(13),u=function(e){return e&&e.__esModule?e:{default:e}}(r),o=function(e){var t=e.click,n=e.text;return u.default.createElement("fieldset",{className:"button-comp"},u.default.createElement("legend",null,"I am 'button' component"),u.default.createElement("button",{className:"button",onClick:t.bind(void 0,n)},n))};t.default=o},255:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};n(445);var o=n(13),a=r(o),l=n(254),c=r(l),i=function(e){var t=(e.text,e.button),n=e.click;return a.default.createElement("div",{className:"list-item"},a.default.createElement(c.default,{text:t,click:n}))},f=function(e){var t=e.content;return a.default.createElement("fieldset",{className:"list"},a.default.createElement("legend",null,"I am 'list' container"),t.map(function(e,t){return a.default.createElement(i,u({},e,{key:t}))}))};t.default=f},256:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}n(252);var u=n(13),o=r(u),a=n(253),l=n(161),c=n(250),i=r(c),f=n(251),s=r(f),d=(0,i.default)();(0,a.render)(o.default.createElement(l.Provider,{store:d},o.default.createElement(s.default,null)),document.getElementById("root"))},257:function(e,t,n){"use strict";function r(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(u,o){try{var a=t[u](o),l=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(l).then(function(e){r("next",e)},function(e){r("throw",e)});e(l)}return r("next")})}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(245),o=(0,u.createAction)("DEMO_EMIT"),a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2e3;return new Promise(function(t){setTimeout(function(){t()},e)})},l=function(e){return function(){var t=r(regeneratorRuntime.mark(function t(n,r){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a(2e3);case 2:n(o(e));case 3:case"end":return t.stop()}},t,void 0)}));return function(e,n){return t.apply(this,arguments)}}()};t.default={emit:o,anyncEmit:l}},258:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.$demo=void 0;var r=n(257),u=function(e){return e&&e.__esModule?e:{default:e}}(r);t.$demo=u.default},259:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=n(103),o=n(161),a=n(258),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(a);t.default=function(e){var t=function(e){return r({},e)},n=function(e){var t={};for(var n in l)t[n]=(0,u.bindActionCreators)(l[n],e);return t};return(0,o.connect)(t,n)(e)}},260:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(245),u={name:"initial store in redux/reducers/demo.js"},o=(0,r.handleActions)({DEMO_EMIT:function(e,t){return Object.assign({},e,t.payload)}},u);t.default=o},261:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=n(103),o=n(260),a=function(e){return e&&e.__esModule?e:{default:e}}(o),l={$$demo:a.default};t.default=(0,u.combineReducers)(r({},l))},262:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(446);var c=n(13),i=r(c),f=n(259),s=r(f),d=n(255),m=r(d),p=function(e){function t(e){u(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.buttonClick=n.buttonClick.bind(n),n.list=[{button:"async btnA",click:n.buttonClick},{button:"btnB",click:n.buttonClick}],n}return a(t,e),l(t,[{key:"buttonClick",value:function(e){"async btnA"===e?this.props.$demo.anyncEmit({name:e+"(async state in views/demo/index.jsx)"}):this.props.$demo.emit({name:e+"(state in views/demo/index.jsx)"})}},{key:"render",value:function(){return i.default.createElement("fieldset",{className:"view-demo"},i.default.createElement("legend",null,"I am 'demo' view"),i.default.createElement("h1",{className:"title"},"demo view with react"),i.default.createElement("p",{className:"info"},"store: ",this.props.$$demo.name),i.default.createElement(m.default,{content:this.list}),i.default.createElement("br",null),i.default.createElement(m.default,{content:this.list}))}}]),t}(c.Component);t.default=(0,s.default)(p)},444:function(e,t){},445:function(e,t){},446:function(e,t){}},[256]);