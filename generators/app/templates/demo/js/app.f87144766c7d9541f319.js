$_$([3],{"4DX+":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("KIQr"),o=n("qJIr"),i=function(e){return e&&e.__esModule?e:{default:e}}(o),d=(0,i.default)({list:[0,1,2]});t.default=(0,a.handleActions)({DEMO_POP:function(e,t){var n=i.default.asMutable(e.list);return n.pop(),i.default.merge(e,{list:n})},DEMO_PUSH:function(e,t){var n=e.list.length,a=i.default.asMutable(e.list);return a.push(n),i.default.merge(e,{list:a})},DEMO_CLEAR:function(e,t){return i.default.merge(e,{list:[]})},DEMO_ASYNC_FETCH:function(e,t){}},d)},"6bRL":function(e,t,n){"use strict";Date.prototype.format=function(e){var t={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length)));for(var n in t)new RegExp("("+n+")").test(e)&&(e=e.replace(RegExp.$1,1==RegExp.$1.length?t[n]:("00"+t[n]).substr((""+t[n]).length)));return e}},"7LXJ":function(e,t,n){"use strict";function a(e){var t=d.encode(JSON.stringify(e)),n=document.createElement("iframe");return n.style.display="none",document.body.appendChild(n),r?n.src="atzuche.dynamic:param="+t:l&&(n.src="https://atzuche.dynamic/?param="+t),setTimeout(function(){n.parentNode.removeChild(n)},30),!1}Object.defineProperty(t,"__esModule",{value:!0}),t.isiOS=t.isAndroid=t.base64=void 0,t.default=a;var o=n("hmEs"),i=function(e){return e&&e.__esModule?e:{default:e}}(o),d=new i.default,u=navigator.userAgent,r=u.indexOf("Android")>-1||u.indexOf("Adr")>-1,l=!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);t.base64=d,t.isAndroid=r,t.isiOS=l},"7gqh":function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n("dJD+"),i=n("SHgP"),d=a(i),u=n("T0/s"),r=a(u),l=(0,o.compose)((0,o.applyMiddleware)(d.default))(o.createStore),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return l(r.default,e)};t.default=c},"991W":function(e,t){},AZk7:function(e,t,n){"use strict";/Android [4-6]/.test(navigator.appVersion)&&window.addEventListener("resize",function(e){"INPUT"!==document.activeElement.tagName&&"TEXTAREA"!==document.activeElement.tagName||window.setTimeout(document.activeElement.scrollIntoViewIfNeeded)}),document.body.addEventListener("click",function(e){if("INPUT"!==e.target.tagName&&"TEXTAREA"!==e.target.tagName){var t=document.querySelector("input:focus");t&&t.blur()}})},B51Y:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n("Jmof"),i=a(o),d=n("sQRt"),u=a(d),r=n("KC3J"),l=(0,u.default)(function(e){return n.e(1).then(n.bind(null,"JNMW"))}),c=(0,u.default)(function(e){return n.e(0).then(n.bind(null,"emyj"))}),f=function(e){return i.default.createElement(r.BrowserRouter,{basename:"demo"},i.default.createElement(r.Switch,null,i.default.createElement(r.Route,{exact:!0,path:"/",component:l}),i.default.createElement(r.Route,{exact:!0,path:"/2",component:c}),i.default.createElement(r.Redirect,{to:"/"})))};t.default=f},CEv1:function(e,t,n){"use strict";var a=n("Y4hn"),o=function(e){return e&&e.__esModule?e:{default:e}}(a);window.isApp&&o.default&&o.default.setWebviewBounces({isBounces:0})},DVmc:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}n("991W"),n("AZk7"),n("6bRL"),n("CEv1");var o=n("Jmof"),i=a(o),d=n("wLXD"),u=n("H/qB"),r=n("fVUg"),l=a(r),c=n("7gqh"),f=a(c),s=n("B51Y"),v=a(s);l.default.attach(document.body);var h=(0,f.default)();(0,d.render)(i.default.createElement(u.Provider,{store:h},i.default.createElement(v.default,null)),document.getElementById("root"))},"H/qB":function(e,t){e.exports=ReactRedux},Jmof:function(e,t){e.exports=React},KC3J:function(e,t){e.exports=ReactRouterDOM},KIQr:function(e,t){e.exports=ReduxActions},KdUP:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("7LXJ"),o=function(e){return e&&e.__esModule?e:{default:e}}(a),i={callback:{_fnIndex:0,_addEvents:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0",n=void 0,a=[];return this._fnIndex++,n="at_"+this._fnIndex,a.push(n),this[n]=function(n){e(n),"1"!==t&&this._clear(a)},n},_addMultiEvents:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=[];this._fnIndex++;for(var a=0;a<t.length;a++)!function(a){var o=void 0;o="at_"+a+e._fnIndex,n.push(o),e[o]=function(o){t[a](o),e._clear(n)}}(a);return n},fn:function(e){if(e=a.base64.decode(e),e=JSON.parse(e),"resume"===e.fnId||"pause"===e.fnId)return void i[e.fnId]();this[e.fnId](e.data)},_clear:function(e){for(var t=0;t<e.length;t++)delete this[e[t]]}},loading:{show:function(){(0,o.default)({info:{type:"2001"}})},hide:function(){(0,o.default)({info:{type:"2005"}})}},toast:function(e){(0,o.default)({info:{type:"2004"},data:{text:e.toString()}})},alert:function(e){var t=e.title,n=void 0===t?"标题":t,a=e.text,d=void 0===a?"内容":a,u=e.okText,r=void 0===u?"确定":u,l=e.ok,c=void 0===l?null:l,f=i.callback._addEvents(c);(0,o.default)({info:{type:"2003"},data:{title:n,text:d,okText:r,ok:f}})},confirm:function(e){var t=e.title,n=void 0===t?"标题":t,a=e.text,d=void 0===a?"内容":a,u=e.okText,r=void 0===u?"确定":u,l=e.cancelText,c=void 0===l?"取消":l,f=e.ok,s=void 0===f?null:f,v=e.cancel,h=void 0===v?null:v,p=i.callback._addMultiEvents([s,h]);(0,o.default)({info:{type:"2002"},data:{title:n,text:d,okText:r,ok:p[0],cancelText:c,cancel:p[1]}})},openWindow:function(e){var t=e.title,n=void 0===t?"标题":t,a=e.url,i=void 0===a?"https://www.atzuche.com":a,d=e.isShowStatusBar,u=void 0===d||d,r=e.isShowNaviBar,l=void 0===r||r;(0,o.default)({info:{type:"1101"},data:{title:n,url:i,isShowStatusBar:u,isShowNaviBar:l}})},closeWindow:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;switch(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"move"){case"slideDown":(0,o.default)({info:{type:"1001"},data:{pageId:"0021"}});break;default:(0,o.default)({info:{type:"10006"},data:{number:e}})}},setTitle:function(e){(0,o.default)({info:{type:"1102"},data:{title:e||"标题"}})},setStatusBar:function(e){var t=e.isShowStatusBar,n=void 0!==t&&t,a=e.isShowNaviBar,i=void 0!==a&&a;(0,o.default)({info:{type:"1103"},data:{isShowStatusBar:n,isShowNaviBar:i}})},openLogin:function(e){var t=e.success,n=void 0===t?null:t,a=e.cancel,d=void 0===a?null:a,u=i.callback._addMultiEvents([n,d]);(0,o.default)({info:{type:"1002"},data:{success:u[0],cancel:u[1]}})},getLocation:function(e){var t=e.callback,n=void 0===t?null:t,a=i.callback._addEvents(n);(0,o.default)({info:{type:"9005"},data:{callback:a}})},getRealTimeLocation:function(e){var t=e.callback,n=void 0===t?null:t,a=i.callback._addEvents(n);(0,o.default)({info:{type:"10007"},data:{callback:a}})},addRightBtn:function(e){var t=e.btnText,n=void 0===t?"":t,a=e.callback,d=void 0===a?null:a,u=i.callback._addEvents(d,"1");(0,o.default)({info:{type:"9004"},data:{btnText:n,callback:u}})},getDeviceNum:function(e){var t=e.callback,n=void 0===t?null:t,a=i.callback._addEvents(n);(0,o.default)({info:{type:"9003"},data:{callback:a}})},getToken:function(e){var t=e.callback,n=void 0===t?null:t,a=i.callback._addEvents(n);(0,o.default)({info:{type:"9002"},data:{callback:a}})},wxOAuth:function(e){var t=e.success,n=void 0===t?null:t,a=e.error,d=void 0===a?null:a,u=i.callback._addMultiEvents([n,d]);(0,o.default)({info:{type:"10005"},data:{success:u[0],error:u[1]}})},share:function(e){var t=e.shareTitle,n=void 0===t?"分享标题":t,a=e.text,d=void 0===a?"分享内容":a,u=e.url,r=void 0===u?"https://www.atzuche.com":u,l=e.sharePicUrl,c=void 0===l?"https://carphoto.atzuche.com/web/images/share.png":l,f=e.ways,s=void 0===f?"sinaWeibo,tencentWeibo,weixinFriend,friendsCircle,shortMessage,email":f,v=e.sourceType,h=void 0===v?"":v,p=e.success,m=void 0===p?null:p,g=e.cancel,_=void 0===g?null:g,b=i.callback._addMultiEvents([m,_]);(0,o.default)({info:{type:"1001"},data:{pageId:"0005",shareTitle:n,text:d,url:r,sharePicUrl:c,ways:s,success:b[0],cancel:b[1],sourceType:h}})},carDetail:function(e){var t=e.carNo,n=void 0===t?"":t,a=e.sceneId,i=void 0===a?"":a;(0,o.default)({info:{type:"1001"},data:{pageId:"0001",carNo:n,sceneId:i}})},home:function(){(0,o.default)({info:{type:"1001"},data:{pageId:"0007"}})},popup:function(e){var t=e.title,n=void 0===t?"标题":t,a=e.url,i=void 0===a?"":a;(0,o.default)({info:{type:"1001"},data:{pageId:"0011",title:n,url:i}})},phoneToAddressList:function(){(0,o.default)({info:{type:"1001"},data:{pageId:"0018"}})},pay:function(e){var t=e.orderNo,n=void 0===t?"":t,a=e.finish,d=void 0===a?null:a,u=e.cancel,r=void 0===u?null:u;if(!n)return void i.alert({text:"orderNo不能为空"});var l=i.callback._addMultiEvents([d,r]);(0,o.default)({info:{type:"10001"},data:{orderNo:n,source:"h5",finish:l[0],cancel:l[1]}})},identityAuth:function(e){var t=e.finish,n=void 0===t?null:t,a=e.cancel,d=void 0===a?null:a,u=i.callback._addMultiEvents([n,d]);(0,o.default)({info:{type:"10002"},data:{source:"h5",finish:u[0],cancel:u[1]}})},setWebviewBounces:function(e){var t=e.isBounces,n=void 0===t?1:t;a.isAndroid||(0,o.default)({info:{type:"10008"},data:{isBounces:n}})},contacts:function(e){var t=e.callback,n=void 0===t?null:t,a=i.callback._addEvents(n);(0,o.default)({info:{type:"10009"},data:{callback:a}})}};window.NativeJsBridge=i,t.default=i},OMN4:function(e,t){e.exports=axios},SHgP:function(e,t){e.exports=ReduxThunk},"T0/s":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("dJD+"),o=n("4DX+"),i=function(e){return e&&e.__esModule?e:{default:e}}(o);t.default=(0,a.combineReducers)({$$demo:i.default})},Y4hn:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("KdUP"),o=function(e){return e&&e.__esModule?e:{default:e}}(a);t.default=o.default},"dJD+":function(e,t){e.exports=Redux},fVUg:function(e,t){e.exports=FastClick},hmEs:function(e,t,n){"use strict";function a(e){e=e.replace(/\r\n/g,"\n");for(var t="",n=0;n<e.length;n++){var a=e.charCodeAt(n);a<128?t+=String.fromCharCode(a):a>127&&a<2048?(t+=String.fromCharCode(a>>6|192),t+=String.fromCharCode(63&a|128)):(t+=String.fromCharCode(a>>12|224),t+=String.fromCharCode(a>>6&63|128),t+=String.fromCharCode(63&a|128))}return t}function o(e){for(var t="",n=0,a=0,o=0;n<e.length;)a=e.charCodeAt(n),a<128?(t+=String.fromCharCode(a),n++):a>191&&a<224?(o=e.charCodeAt(n+1),t+=String.fromCharCode((31&a)<<6|63&o),n+=2):(o=e.charCodeAt(n+1),c3=e.charCodeAt(n+2),t+=String.fromCharCode((15&a)<<12|(63&o)<<6|63&c3),n+=3);return t}function i(){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";this.encode=function(t){var n="",o=void 0,i=void 0,d=void 0,u=void 0,r=void 0,l=void 0,c=void 0,f=0;for(t=a(t);f<t.length;)o=t.charCodeAt(f++),i=t.charCodeAt(f++),d=t.charCodeAt(f++),u=o>>2,r=(3&o)<<4|i>>4,l=(15&i)<<2|d>>6,c=63&d,isNaN(i)?l=c=64:isNaN(d)&&(c=64),n+=e.charAt(u)+e.charAt(r)+e.charAt(l)+e.charAt(c);return n},this.decode=function(t){var n="",a=void 0,i=void 0,d=void 0,u=void 0,r=void 0,l=void 0,c=void 0,f=0;for(t=t.replace(/[^A-Za-z0-9\+\/\=]/g,"");f<t.length;)u=e.indexOf(t.charAt(f++)),r=e.indexOf(t.charAt(f++)),l=e.indexOf(t.charAt(f++)),c=e.indexOf(t.charAt(f++)),a=u<<2|r>>4,i=(15&r)<<4|l>>2,d=(3&l)<<6|c,n+=String.fromCharCode(a),64!=l&&(n+=String.fromCharCode(i)),64!=c&&(n+=String.fromCharCode(d));return n=o(n)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i},qJIr:function(e,t){e.exports=Immutable},sQRt:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n("Zx67"),i=a(o),d=n("Zrlr"),u=a(d),r=n("wxAW"),l=a(r),c=n("zwoO"),f=a(c),s=n("Pf15"),v=a(s),h=n("Jmof"),p=a(h),m=function(e){var t=function(t){function n(e){(0,u.default)(this,n);var t=(0,f.default)(this,(n.__proto__||(0,i.default)(n)).call(this,e));return t.state={Component:null},t}return(0,v.default)(n,t),(0,l.default)(n,[{key:"componentWillMount",value:function(){var t=this;this.hasLoadedComponent()||e().then(function(e){return e.default}).then(function(e){t.setState({Component:e})}).catch(function(e){throw e})}},{key:"hasLoadedComponent",value:function(){return null!==this.state.Component}},{key:"render",value:function(){var e=this.state.Component;return e?p.default.createElement(e,this.props):null}}]),n}(h.PureComponent);return t.displayName="AsyncComponent",t};t.default=m},wLXD:function(e,t){e.exports=ReactDOM}},["DVmc"]);