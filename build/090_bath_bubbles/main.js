!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e,n){(function(e){var n;n=function(){var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function i(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}var o=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(t){return e[t]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(t){r[t]=t})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(i){return!1}}()?Object.assign:function(e,o){for(var a,s,c=i(e),p=1;p<arguments.length;p++){for(var u in a=Object(arguments[p]))n.call(a,u)&&(c[u]=a[u]);if(t){s=t(a);for(var f=0;f<s.length;f++)r.call(a,s[f])&&(c[s[f]]=a[s[f]])}}return c},a="undefined"!==typeof window?window:"undefined"!==typeof e?e:"undefined"!==typeof self?self:{};function s(t,e){return t(e={exports:{}},e.exports),e.exports}var c=a.performance&&a.performance.now?function(){return performance.now()}:Date.now||function(){return+new Date},p=function(t){return!!t&&("object"===typeof t||"function"===typeof t)&&"function"===typeof t.then},u=function(t){return!(!t||"object"!==typeof t)&&("object"===typeof window&&"object"===typeof window.Node?t instanceof window.Node:"number"===typeof t.nodeType&&"string"===typeof t.nodeName)};function f(){return"undefined"!==typeof window&&window["canvas-sketch-cli"]}function h(){for(var t=arguments,e=0;e<arguments.length;e++)if(null!=t[e])return t[e]}function l(){return"undefined"!==typeof document}var d,m,y=s((function(t,e){function n(t){var e=[];for(var n in t)e.push(n);return e}(t.exports="function"===typeof Object.keys?Object.keys:n).shim=n})),g=(y.shim,s((function(t,e){var n="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();function r(t){return"[object Arguments]"==Object.prototype.toString.call(t)}function i(t){return t&&"object"==typeof t&&"number"==typeof t.length&&Object.prototype.hasOwnProperty.call(t,"callee")&&!Object.prototype.propertyIsEnumerable.call(t,"callee")||!1}(e=t.exports=n?r:i).supported=r,e.unsupported=i}))),v=(g.supported,g.unsupported,s((function(t){var e=Array.prototype.slice,n=t.exports=function(t,o,a){return a||(a={}),t===o||(t instanceof Date&&o instanceof Date?t.getTime()===o.getTime():!t||!o||"object"!=typeof t&&"object"!=typeof o?a.strict?t===o:t==o:function(t,o,a){var s,c;if(r(t)||r(o))return!1;if(t.prototype!==o.prototype)return!1;if(g(t))return!!g(o)&&(t=e.call(t),o=e.call(o),n(t,o,a));if(i(t)){if(!i(o))return!1;if(t.length!==o.length)return!1;for(s=0;s<t.length;s++)if(t[s]!==o[s])return!1;return!0}try{var p=y(t),u=y(o)}catch(f){return!1}if(p.length!=u.length)return!1;for(p.sort(),u.sort(),s=p.length-1;s>=0;s--)if(p[s]!=u[s])return!1;for(s=p.length-1;s>=0;s--)if(c=p[s],!n(t[c],o[c],a))return!1;return typeof t===typeof o}(t,o,a))};function r(t){return null===t||void 0===t}function i(t){return!(!t||"object"!==typeof t||"number"!==typeof t.length)&&"function"===typeof t.copy&&"function"===typeof t.slice&&!(t.length>0&&"number"!==typeof t[0])}}))),w=s((function(t,e){!function(e){var n=function(){var t=/d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|"[^"]*"|'[^']*'/g,e=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,s=/[^-+\dA-Z]/g;return function(c,p,u,f){if(1!==arguments.length||"string"!==a(c)||/\d/.test(c)||(p=c,c=void 0),(c=c||new Date)instanceof Date||(c=new Date(c)),isNaN(c))throw TypeError("Invalid date");var h=(p=String(n.masks[p]||p||n.masks.default)).slice(0,4);"UTC:"!==h&&"GMT:"!==h||(p=p.slice(4),u=!0,"GMT:"===h&&(f=!0));var l=u?"getUTC":"get",d=c[l+"Date"](),m=c[l+"Day"](),y=c[l+"Month"](),g=c[l+"FullYear"](),v=c[l+"Hours"](),w=c[l+"Minutes"](),b=c[l+"Seconds"](),_=c[l+"Milliseconds"](),x=u?0:c.getTimezoneOffset(),R=i(c),F=o(c),E={d:d,dd:r(d),ddd:n.i18n.dayNames[m],dddd:n.i18n.dayNames[m+7],m:y+1,mm:r(y+1),mmm:n.i18n.monthNames[y],mmmm:n.i18n.monthNames[y+12],yy:String(g).slice(2),yyyy:g,h:v%12||12,hh:r(v%12||12),H:v,HH:r(v),M:w,MM:r(w),s:b,ss:r(b),l:r(_,3),L:r(Math.round(_/10)),t:v<12?n.i18n.timeNames[0]:n.i18n.timeNames[1],tt:v<12?n.i18n.timeNames[2]:n.i18n.timeNames[3],T:v<12?n.i18n.timeNames[4]:n.i18n.timeNames[5],TT:v<12?n.i18n.timeNames[6]:n.i18n.timeNames[7],Z:f?"GMT":u?"UTC":(String(c).match(e)||[""]).pop().replace(s,""),o:(x>0?"-":"+")+r(100*Math.floor(Math.abs(x)/60)+Math.abs(x)%60,4),S:["th","st","nd","rd"][d%10>3?0:(d%100-d%10!=10)*d%10],W:R,N:F};return p.replace(t,(function(t){return t in E?E[t]:t.slice(1,t.length-1)}))}}();function r(t,e){for(t=String(t),e=e||2;t.length<e;)t="0"+t;return t}function i(t){var e=new Date(t.getFullYear(),t.getMonth(),t.getDate());e.setDate(e.getDate()-(e.getDay()+6)%7+3);var n=new Date(e.getFullYear(),0,4);n.setDate(n.getDate()-(n.getDay()+6)%7+3);var r=e.getTimezoneOffset()-n.getTimezoneOffset();e.setHours(e.getHours()-r);var i=(e-n)/6048e5;return 1+Math.floor(i)}function o(t){var e=t.getDay();return 0===e&&(e=7),e}function a(t){return null===t?"null":void 0===t?"undefined":"object"!==typeof t?typeof t:Array.isArray(t)?"array":{}.toString.call(t).slice(8,-1).toLowerCase()}n.masks={default:"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:sso",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",expiresHeaderFormat:"ddd, dd mmm yyyy HH:MM:ss Z"},n.i18n={dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"],timeNames:["a","p","am","pm","A","P","AM","PM"]},t.exports=n}()})),b="",_=function(t,e){if("string"!==typeof t)throw new TypeError("expected a string");if(1===e)return t;if(2===e)return t+t;var n=t.length*e;if(d!==t||"undefined"===typeof d)d=t,b="";else if(b.length>=n)return b.substr(0,n);for(;n>b.length&&e>1;)1&e&&(b+=t),e>>=1,t+=t;return b=(b+=t).substr(0,n)},x=function(){},R={extension:"",prefix:"",suffix:""},F=["image/png","image/jpeg","image/webp"];function E(t,e){return void 0===e&&(e={}),new Promise((function(n,r){e=o({},R,e);var i=k(Object.assign({},e,{extension:"",frame:void 0})),a=t?"streamStart":"streamEnd",s=f();return s&&s.output&&"function"===typeof s[a]?s[a](o({},e,{filename:i})).then((function(t){return n(t)})):n({filename:i,client:!1})}))}function A(t,e){return void 0===e&&(e={}),function(t){return new Promise((function(e){var n=t.indexOf(",");if(-1!==n){for(var r=t.slice(n+1),i=window.atob(r),o=t.slice(0,n),a=/data:([^;]+)/.exec(o),s=(a?a[1]:"")||void 0,c=new ArrayBuffer(i.length),p=new Uint8Array(c),u=0;u<i.length;u++)p[u]=i.charCodeAt(u);e(new window.Blob([c],{type:s}))}else e(new window.Blob)}))}(t).then((function(t){return T(t,e)}))}function T(t,e){return void 0===e&&(e={}),new Promise((function(n){var r=(e=o({},R,e)).filename,i=f();if(i&&"function"===typeof i.saveBlob&&i.output)return i.saveBlob(t,o({},e,{filename:r})).then((function(t){return n(t)}));m||((m=document.createElement("a")).style.visibility="hidden",m.target="_blank"),m.download=r,m.href=window.URL.createObjectURL(t),document.body.appendChild(m),m.onclick=function(){m.onclick=x,setTimeout((function(){window.URL.revokeObjectURL(t),m.parentElement&&m.parentElement.removeChild(m),m.removeAttribute("href"),n({filename:r,client:!1})}))},m.click()}))}function k(t){if(void 0===t&&(t={}),"function"===typeof(t=o({},t)).file)return t.file(t);if(t.file)return t.file;var e,n,r,i,a=null,s="";"string"===typeof t.extension&&(s=t.extension),"number"===typeof t.frame&&(e="number"===typeof t.totalFrames?t.totalFrames:Math.max(1e4,t.frame),n=String(t.frame),r=String(e).length,i="0",n=n.toString(),a="undefined"===typeof r?n:(i=0===i?"0":i?i.toString():" ",_(i,r-n.length)+n));var c=isFinite(t.totalLayers)&&isFinite(t.layer)&&t.totalLayers>1?""+t.layer:"";if(null!=a)return[c,a].filter(Boolean).join("-")+s;var p=t.timeStamp;return[t.prefix,t.name||p,c,t.hash,t.suffix].filter(Boolean).join("-")+s}var P={dimension:"dimensions",animated:"animate",animating:"animate",unit:"units",P5:"p5",pixellated:"pixelated",looping:"loop",pixelPerInch:"pixels"},S=["dimensions","units","pixelsPerInch","orientation","scaleToFit","scaleToView","bleed","pixelRatio","exportPixelRatio","maxPixelRatio","scaleContext","resizeCanvas","styleCanvas","canvas","context","attributes","parent","file","name","prefix","suffix","animate","playing","loop","duration","totalFrames","fps","playbackRate","timeScale","frame","time","flush","pixelated","hotkeys","p5","id","scaleToFitPadding","data","params","encoding","encodingQuality"],M=function(t){Object.keys(t).forEach((function(t){if(t in P){var e=P[t];console.warn('[canvas-sketch] Could not recognize the setting "'+t+'", did you mean "'+e+'"?')}else S.includes(t)||console.warn('[canvas-sketch] Could not recognize the setting "'+t+'"')}))},j=[["postcard",101.6,152.4],["poster-small",280,430],["poster",460,610],["poster-large",610,910],["business-card",50.8,88.9],["2r",64,89],["3r",89,127],["4r",102,152],["5r",127,178],["6r",152,203],["8r",203,254],["10r",254,305],["11r",279,356],["12r",305,381],["a0",841,1189],["a1",594,841],["a2",420,594],["a3",297,420],["a4",210,297],["a5",148,210],["a6",105,148],["a7",74,105],["a8",52,74],["a9",37,52],["a10",26,37],["2a0",1189,1682],["4a0",1682,2378],["b0",1e3,1414],["b1",707,1e3],["b1+",720,1020],["b2",500,707],["b2+",520,720],["b3",353,500],["b4",250,353],["b5",176,250],["b6",125,176],["b7",88,125],["b8",62,88],["b9",44,62],["b10",31,44],["b11",22,32],["b12",16,22],["c0",917,1297],["c1",648,917],["c2",458,648],["c3",324,458],["c4",229,324],["c5",162,229],["c6",114,162],["c7",81,114],["c8",57,81],["c9",40,57],["c10",28,40],["c11",22,32],["c12",16,22],["half-letter",5.5,8.5,"in"],["letter",8.5,11,"in"],["legal",8.5,14,"in"],["junior-legal",5,8,"in"],["ledger",11,17,"in"],["tabloid",11,17,"in"],["ansi-a",8.5,11,"in"],["ansi-b",11,17,"in"],["ansi-c",17,22,"in"],["ansi-d",22,34,"in"],["ansi-e",34,44,"in"],["arch-a",9,12,"in"],["arch-b",12,18,"in"],["arch-c",18,24,"in"],["arch-d",24,36,"in"],["arch-e",36,48,"in"],["arch-e1",30,42,"in"],["arch-e2",26,38,"in"],["arch-e3",27,39,"in"]].reduce((function(t,e){var n={units:e[3]||"mm",dimensions:[e[1],e[2]]};return t[e[0]]=n,t[e[0].replace(/-/g," ")]=n,t}),{}),C=["mm","cm","m","pc","pt","in","ft","px"],O={m:{system:"metric",factor:1},cm:{system:"metric",factor:.01},mm:{system:"metric",factor:.001},pt:{system:"imperial",factor:1/72},pc:{system:"imperial",factor:1/6},in:{system:"imperial",factor:1},ft:{system:"imperial",factor:12}};const D={metric:{unit:"m",ratio:1/.0254},imperial:{unit:"in",ratio:.0254}};var L=function(t,e,n,r){if("number"!==typeof t||!isFinite(t))throw new Error("Value must be a finite number");if(!e||!n)throw new Error("Must specify from and to units");var i=function(){for(var t=0;t<arguments.length;t++)if(void 0!==arguments[t])return arguments[t]}((r=r||{}).pixelsPerInch,96),o=r.precision,a=!1!==r.roundPixel;if(e=e.toLowerCase(),n=n.toLowerCase(),-1===C.indexOf(e))throw new Error('Invalid from unit "'+e+'", must be one of: '+C.join(", "));if(-1===C.indexOf(n))throw new Error('Invalid from unit "'+n+'", must be one of: '+C.join(", "));if(e===n)return t;var s=1,c=1,p=!1;"px"===e&&(c=1/i,e="in"),"px"===n&&(p=!0,s=i,n="in");var u=O[e],f=O[n],h=t*u.factor*c;u.system!==f.system&&(h*=D[u.system].ratio);var l=h/f.factor*s;return p&&a?l=Math.round(l):"number"===typeof o&&isFinite(o)&&(l=function(t,e){return Number(Math.round(t+"e"+e)+"e-"+e)}(l,o)),l},N=C;function I(t,e,n,r){return void 0===e&&(e="px"),void 0===n&&(n="px"),void 0===r&&(r=72),L(t,e,n,{pixelsPerInch:r,precision:4,roundPixel:!0})}function H(t,e){var n,r,i,o,a,s,c=l(),p=e.dimensions,u=function(t){return!!t.dimensions&&("string"===typeof t.dimensions||!!(Array.isArray(t.dimensions)&&t.dimensions.length>=2))}(e),f=t.exporting,d=!!u&&!1!==e.scaleToFit,m=!(!f&&u)||e.scaleToView;c||(d=m=!1);var y,g,v=e.units,w="number"===typeof e.pixelsPerInch&&isFinite(e.pixelsPerInch)?e.pixelsPerInch:72,b=h(e.bleed,0),_=c?window.devicePixelRatio:1,x=m?_:1;"number"===typeof e.pixelRatio&&isFinite(e.pixelRatio)?(y=e.pixelRatio,g=h(e.exportPixelRatio,y)):u?(y=x,g=h(e.exportPixelRatio,1)):(y=_,g=h(e.exportPixelRatio,y)),"number"===typeof e.maxPixelRatio&&isFinite(e.maxPixelRatio)&&(y=Math.min(e.maxPixelRatio,y)),f&&(y=g);var R,F,E=function(t,e){if(!l())return[300,150];var n=e.parent||window;if(n===window||n===document||n===document.body)return[window.innerWidth,window.innerHeight];var r=n.getBoundingClientRect();return[r.width,r.height]}(0,e),A=E[0],T=E[1];if(u){var k=function(t,e,n){if(void 0===e&&(e="px"),void 0===n&&(n=72),"string"===typeof t){var r=t.toLowerCase();if(!(r in j))throw new Error('The dimension preset "'+t+'" is not supported or could not be found; try using a4, a3, postcard, letter, etc.');var i=j[r];return i.dimensions.map((function(t){return I(t,i.units,e,n)}))}return t}(p,v,w),P=Math.max(k[0],k[1]),S=Math.min(k[0],k[1]);if(e.orientation){var M="landscape"===e.orientation;n=M?P:S,r=M?S:P}else n=k[0],r=k[1];R=n,F=r,n+=2*b,r+=2*b}else R=n=A,F=r=T;var C=n,O=r;if(u&&v&&(C=I(n,v,"px",w),O=I(r,v,"px",w)),i=Math.round(C),o=Math.round(O),d&&!f&&u){var D=n/r,L=A/T,N=h(e.scaleToFitPadding,40),H=Math.round(A-2*N),U=Math.round(T-2*N);(i>H||o>U)&&(L>D?(o=U,i=Math.round(o*D)):(i=H,o=Math.round(i/D)))}return{bleed:b,pixelRatio:y,width:n,height:r,dimensions:[n,r],units:v||"px",scaleX:(a=m?Math.round(y*i):Math.round(y*C))/n,scaleY:(s=m?Math.round(y*o):Math.round(y*O))/r,pixelsPerInch:w,viewportWidth:m?Math.round(i):Math.round(C),viewportHeight:m?Math.round(o):Math.round(O),canvasWidth:a,canvasHeight:s,trimWidth:R,trimHeight:F,styleWidth:i,styleHeight:o}}L.units=N;var U=function(t,e){if("string"!==typeof t)throw new TypeError("must specify type string");if(e=e||{},"undefined"===typeof document&&!e.canvas)return null;var n=e.canvas||document.createElement("canvas");"number"===typeof e.width&&(n.width=e.width),"number"===typeof e.height&&(n.height=e.height);var r,i=e;try{var o=[t];0===t.indexOf("webgl")&&o.push("experimental-"+t);for(var a=0;a<o.length;a++)if(r=n.getContext(o[a],i))return r}catch(s){r=null}return r||null};function B(t){var e,n;void 0===t&&(t={});var r=!1;if(!1!==t.canvas){if(!(e=t.context)||"string"===typeof e){var i=t.canvas;i||(i=function(){if(!l())throw new Error("It appears you are runing from Node.js or a non-browser environment. Try passing in an existing { canvas } interface instead.");return document.createElement("canvas")}(),r=!0);var a=e||"2d";if("function"!==typeof i.getContext)throw new Error("The specified { canvas } element does not have a getContext() function, maybe it is not a <canvas> tag?");if(!(e=U(a,o({},t.attributes,{canvas:i}))))throw new Error("Failed at canvas.getContext('"+a+"') - the browser may not support this context, or a different context may already be in use with this canvas.")}if(n=e.canvas,t.canvas&&n!==t.canvas)throw new Error("The { canvas } and { context } settings must point to the same underlying canvas element");t.pixelated&&(e.imageSmoothingEnabled=!1,e.mozImageSmoothingEnabled=!1,e.oImageSmoothingEnabled=!1,e.webkitImageSmoothingEnabled=!1,e.msImageSmoothingEnabled=!1,n.style["image-rendering"]="pixelated")}return{canvas:n,context:e,ownsCanvas:r}}var z=function(){var t=this;this._settings={},this._props={},this._sketch=void 0,this._raf=null,this._recordTimeout=null,this._lastRedrawResult=void 0,this._isP5Resizing=!1,this._keyboardShortcuts=function(t){void 0===t&&(t={});var e=function(e){if(t.enabled()){var n=f();83!==e.keyCode||e.altKey||!e.metaKey&&!e.ctrlKey?32===e.keyCode?t.togglePlay(e):n&&!e.altKey&&75===e.keyCode&&(e.metaKey||e.ctrlKey)&&(e.preventDefault(),t.commit(e)):(e.preventDefault(),t.save(e))}};return{attach:function(){window.addEventListener("keydown",e)},detach:function(){window.removeEventListener("keydown",e)}}}({enabled:function(){return!1!==t.settings.hotkeys},save:function(e){e.shiftKey?t.props.recording?(t.endRecord(),t.run()):t.record():t.props.recording||t.exportFrame()},togglePlay:function(){t.props.playing?t.pause():t.play()},commit:function(e){t.exportFrame({commit:!0})}}),this._animateHandler=function(){return t.animate()},this._resizeHandler=function(){t.resize()&&t.render()}},W={sketch:{configurable:!0},settings:{configurable:!0},props:{configurable:!0}};W.sketch.get=function(){return this._sketch},W.settings.get=function(){return this._settings},W.props.get=function(){return this._props},z.prototype._computePlayhead=function(t,e){return"number"===typeof e&&isFinite(e)?t/e:0},z.prototype._computeFrame=function(t,e,n,r){return isFinite(n)&&n>1?Math.floor(t*(n-1)):Math.floor(r*e)},z.prototype._computeCurrentFrame=function(){return this._computeFrame(this.props.playhead,this.props.time,this.props.totalFrames,this.props.fps)},z.prototype._getSizeProps=function(){var t=this.props;return{width:t.width,height:t.height,pixelRatio:t.pixelRatio,canvasWidth:t.canvasWidth,canvasHeight:t.canvasHeight,viewportWidth:t.viewportWidth,viewportHeight:t.viewportHeight}},z.prototype.run=function(){if(!this.sketch)throw new Error("should wait until sketch is loaded before trying to play()");return!1!==this.settings.playing&&this.play(),"function"===typeof this.sketch.dispose&&console.warn("In canvas-sketch@0.0.23 the dispose() event has been renamed to unload()"),this.props.started||(this._signalBegin(),this.props.started=!0),this.tick(),this.render(),this},z.prototype._cancelTimeouts=function(){null!=this._raf&&"undefined"!==typeof window&&"function"===typeof window.cancelAnimationFrame&&(window.cancelAnimationFrame(this._raf),this._raf=null),null!=this._recordTimeout&&(clearTimeout(this._recordTimeout),this._recordTimeout=null)},z.prototype.play=function(){var t=this.settings.animate;"animation"in this.settings&&(t=!0,console.warn("[canvas-sketch] { animation } has been renamed to { animate }")),t&&(l()?this.props.playing||(this.props.started||(this._signalBegin(),this.props.started=!0),this.props.playing=!0,this._cancelTimeouts(),this._lastTime=c(),this._raf=window.requestAnimationFrame(this._animateHandler)):console.error("[canvas-sketch] WARN: Using { animate } in Node.js is not yet supported"))},z.prototype.pause=function(){this.props.recording&&this.endRecord(),this.props.playing=!1,this._cancelTimeouts()},z.prototype.togglePlay=function(){this.props.playing?this.pause():this.play()},z.prototype.stop=function(){this.pause(),this.props.frame=0,this.props.playhead=0,this.props.time=0,this.props.deltaTime=0,this.props.started=!1,this.render()},z.prototype.record=function(){var t=this;if(!this.props.recording)if(l()){this.stop(),this.props.playing=!0,this.props.recording=!0;var e=this._createExportOptions({sequence:!0}),n=1/this.props.fps;this._cancelTimeouts();var r,i=function(){return t.props.recording?(t.props.deltaTime=n,t.tick(),t.exportFrame(e).then((function(){t.props.recording&&(t.props.deltaTime=0,t.props.frame++,t.props.frame<t.props.totalFrames?(t.props.time+=n,t.props.playhead=t._computePlayhead(t.props.time,t.props.duration),t._recordTimeout=setTimeout(i,0)):(console.log("Finished recording"),t._signalEnd(),t.endRecord(),t.stop(),t.run()))}))):Promise.resolve()};this.props.started||(this._signalBegin(),this.props.started=!0),this.sketch&&"function"===typeof this.sketch.beginRecord&&this._wrapContextScale((function(e){return t.sketch.beginRecord(e)})),(r=e,void 0===r&&(r={}),E(!0,r)).catch((function(t){console.error(t)})).then((function(e){t._raf=window.requestAnimationFrame(i)}))}else console.error("[canvas-sketch] WARN: Recording from Node.js is not yet supported")},z.prototype._signalBegin=function(){var t=this;this.sketch&&"function"===typeof this.sketch.begin&&this._wrapContextScale((function(e){return t.sketch.begin(e)}))},z.prototype._signalEnd=function(){var t=this;this.sketch&&"function"===typeof this.sketch.end&&this._wrapContextScale((function(e){return t.sketch.end(e)}))},z.prototype.endRecord=function(){var t,e=this,n=this.props.recording;return this._cancelTimeouts(),this.props.recording=!1,this.props.deltaTime=0,this.props.playing=!1,(void 0===t&&(t={}),E(!1,t)).catch((function(t){console.error(t)})).then((function(){n&&e.sketch&&"function"===typeof e.sketch.endRecord&&e._wrapContextScale((function(t){return e.sketch.endRecord(t)}))}))},z.prototype._createExportOptions=function(t){return void 0===t&&(t={}),{sequence:t.sequence,save:t.save,fps:this.props.fps,frame:t.sequence?this.props.frame:void 0,file:this.settings.file,name:this.settings.name,prefix:this.settings.prefix,suffix:this.settings.suffix,encoding:this.settings.encoding,encodingQuality:this.settings.encodingQuality,timeStamp:t.timeStamp||w(new Date,"yyyy.mm.dd-HH.MM.ss"),totalFrames:isFinite(this.props.totalFrames)?Math.max(0,this.props.totalFrames):1e3}},z.prototype.exportFrame=function(t){var e=this;if(void 0===t&&(t={}),!this.sketch)return Promise.all([]);"function"===typeof this.sketch.preExport&&this.sketch.preExport();var n=this._createExportOptions(t),r=f(),i=Promise.resolve();if(r&&t.commit&&"function"===typeof r.commit){var a=o({},n),s=r.commit(a);i=p(s)?s:Promise.resolve(s)}return i.then((function(t){return e._doExportFrame(o({},n,{hash:t||""}))})).then((function(t){return 1===t.length?t[0]:t}))},z.prototype._doExportFrame=function(t){var e=this;void 0===t&&(t={}),this._props.exporting=!0,this.resize();var n=this.render(),r=this.props.canvas;return"undefined"===typeof n&&(n=[r]),n=(n=[].concat(n).filter(Boolean)).map((function(e){var n,r="object"===typeof e&&e&&("data"in e||"dataURL"in e),i=r?e.data:e,a=r?o({},e,{data:i}):{data:i};if(u(n=i)&&/canvas/i.test(n.nodeName)&&"function"===typeof n.getContext){var s=function(t,e){void 0===e&&(e={});var n=e.encoding||"image/png";if(!F.includes(n))throw new Error("Invalid canvas encoding "+n);var r=(n.split("/")[1]||"").replace(/jpeg/i,"jpg");return r&&(r=("."+r).toLowerCase()),{extension:r,type:n,dataURL:t.toDataURL(n,e.encodingQuality)}}(i,{encoding:a.encoding||t.encoding,encodingQuality:h(a.encodingQuality,t.encodingQuality,.95)}),c=s.dataURL,p=s.extension,f=s.type;return Object.assign(a,{dataURL:c,extension:p,type:f})}return a})),this._props.exporting=!1,this.resize(),this.render(),Promise.all(n.map((function(e,n,r){var i=o({extension:"",prefix:"",suffix:""},t,e,{layer:n,totalLayers:r.length}),a=!1!==t.save&&e.save;for(var s in i.save=!1!==a,i.filename=k(i),delete i.encoding,delete i.encodingQuality,i)"undefined"===typeof i[s]&&delete i[s];var c=Promise.resolve({});if(i.save){var p=i.data;c=i.dataURL?A(i.dataURL,i):function(t,e){void 0===e&&(e={});var n=Array.isArray(t)?t:[t];return T(new window.Blob(n,{type:e.type||""}),e)}(p,i)}return c.then((function(t){return Object.assign({},i,t)}))}))).then((function(n){var r=n.filter((function(t){return t.save}));if(r.length>0){var i,o=r.find((function(t){return t.outputName})),a=r.some((function(t){return t.client})),s=r.some((function(t){return t.stream}));i=r.length>1?r.length:o?o.outputName+"/"+r[0].filename:""+r[0].filename;var c="";t.sequence?c=isFinite(e.props.totalFrames)?" (frame "+(t.frame+1)+" / "+e.props.totalFrames+")":" (frame "+t.frame+")":r.length>1&&(c=" files");var p=a?"canvas-sketch-cli":"canvas-sketch",u=s?"Streaming into":"Exported";console.log("%c["+p+"]%c "+u+" %c"+i+"%c"+c,"color: #8e8e8e;","color: initial;","font-weight: bold;","font-weight: initial;")}return"function"===typeof e.sketch.postExport&&e.sketch.postExport(),n}))},z.prototype._wrapContextScale=function(t){this._preRender(),t(this.props),this._postRender()},z.prototype._preRender=function(){var t=this.props;this.props.gl||!t.context||t.p5?t.p5&&t.p5.scale(t.scaleX/t.pixelRatio,t.scaleY/t.pixelRatio):(t.context.save(),!1!==this.settings.scaleContext&&t.context.scale(t.scaleX,t.scaleY))},z.prototype._postRender=function(){var t=this.props;this.props.gl||!t.context||t.p5||t.context.restore(),t.gl&&!1!==this.settings.flush&&!t.p5&&t.gl.flush()},z.prototype.tick=function(){this.sketch&&"function"===typeof this.sketch.tick&&(this._preRender(),this.sketch.tick(this.props),this._postRender())},z.prototype.render=function(){return this.props.p5?(this._lastRedrawResult=void 0,this.props.p5.redraw(),this._lastRedrawResult):this.submitDrawCall()},z.prototype.submitDrawCall=function(){if(this.sketch){var t,e=this.props;return this._preRender(),"function"===typeof this.sketch?t=this.sketch(e):"function"===typeof this.sketch.render&&(t=this.sketch.render(e)),this._postRender(),t}},z.prototype.update=function(t){var e=this;void 0===t&&(t={});var n=["animate"];Object.keys(t).forEach((function(t){if(n.indexOf(t)>=0)throw new Error("Sorry, the { "+t+" } option is not yet supported with update().")}));var r=this._settings.canvas,i=this._settings.context;for(var o in t){var a=t[o];"undefined"!==typeof a&&(e._settings[o]=a)}var s=Object.assign({},this._settings,t);if("time"in t&&"frame"in t)throw new Error("You should specify { time } or { frame } but not both");if("time"in t?delete s.frame:"frame"in t&&delete s.time,"duration"in t&&"totalFrames"in t)throw new Error("You should specify { duration } or { totalFrames } but not both");"duration"in t?delete s.totalFrames:"totalFrames"in t&&delete s.duration,"data"in t&&(this._props.data=t.data);var c=this.getTimeProps(s);if(Object.assign(this._props,c),r!==this._settings.canvas||i!==this._settings.context){var p=B(this._settings),u=p.canvas,f=p.context;this.props.canvas=u,this.props.context=f,this._setupGLKey(),this._appendCanvasIfNeeded()}return t.p5&&"function"!==typeof t.p5&&(this.props.p5=t.p5,this.props.p5.draw=function(){e._isP5Resizing||(e._lastRedrawResult=e.submitDrawCall())}),"playing"in t&&(t.playing?this.play():this.pause()),M(this._settings),this.resize(),this.render(),this.props},z.prototype.resize=function(){var t=this._getSizeProps(),e=this.settings,n=this.props,r=H(n,e);Object.assign(this._props,r);var i=this.props,o=i.pixelRatio,a=i.canvasWidth,s=i.canvasHeight,c=i.styleWidth,p=i.styleHeight,u=this.props.canvas;u&&!1!==e.resizeCanvas&&(n.p5?u.width===a&&u.height===s||(this._isP5Resizing=!0,n.p5.pixelDensity(o),n.p5.resizeCanvas(a/o,s/o,!1),this._isP5Resizing=!1):(u.width!==a&&(u.width=a),u.height!==s&&(u.height=s)),l()&&!1!==e.styleCanvas&&(u.style.width=c+"px",u.style.height=p+"px"));var f=this._getSizeProps(),h=!v(t,f);return h&&this._sizeChanged(),h},z.prototype._sizeChanged=function(){this.sketch&&"function"===typeof this.sketch.resize&&this.sketch.resize(this.props)},z.prototype.animate=function(){if(this.props.playing)if(l()){this._raf=window.requestAnimationFrame(this._animateHandler);var t=c(),e=1e3/this.props.fps,n=t-this._lastTime,r=this.props.duration,i="number"===typeof r&&isFinite(r),o=!0,a=this.settings.playbackRate;"fixed"===a?n=e:"throttle"===a?n>e?(t-=n%e,this._lastTime=t):o=!1:this._lastTime=t;var s=n/1e3,p=this.props.time+s*this.props.timeScale;p<0&&i&&(p=r+p);var u=!1,f=!1,h=!1!==this.settings.loop;if(i&&p>=r&&(h?(o=!0,p%=r,f=!0):(o=!1,p=r,u=!0),this._signalEnd()),o){this.props.deltaTime=s,this.props.time=p,this.props.playhead=this._computePlayhead(p,r);var d=this.props.frame;this.props.frame=this._computeCurrentFrame(),f&&this._signalBegin(),d!==this.props.frame&&this.tick(),this.render(),this.props.deltaTime=0}u&&this.pause()}else console.error("[canvas-sketch] WARN: Animation in Node.js is not yet supported")},z.prototype.dispatch=function(t){if("function"!==typeof t)throw new Error("must pass function into dispatch()");t(this.props),this.render()},z.prototype.mount=function(){this._appendCanvasIfNeeded()},z.prototype.unmount=function(){l()&&(window.removeEventListener("resize",this._resizeHandler),this._keyboardShortcuts.detach()),this.props.canvas.parentElement&&this.props.canvas.parentElement.removeChild(this.props.canvas)},z.prototype._appendCanvasIfNeeded=function(){l()&&!1!==this.settings.parent&&this.props.canvas&&!this.props.canvas.parentElement&&(this.settings.parent||document.body).appendChild(this.props.canvas)},z.prototype._setupGLKey=function(){var t;this.props.context&&("function"===typeof(t=this.props.context).clear&&"function"===typeof t.clearColor&&"function"===typeof t.bufferData?this._props.gl=this.props.context:delete this._props.gl)},z.prototype.getTimeProps=function(t){void 0===t&&(t={});var e=t.duration,n=t.totalFrames,r=h(t.timeScale,1),i=h(t.fps,24),o="number"===typeof e&&isFinite(e),a="number"===typeof n&&isFinite(n),s=o?Math.floor(i*e):void 0,c=a?n/i:void 0;if(o&&a&&s!==n)throw new Error("You should specify either duration or totalFrames, but not both. Or, they must match exactly.");"undefined"===typeof t.dimensions&&"undefined"!==typeof t.units&&console.warn("You've specified a { units } setting but no { dimension }, so the units will be ignored."),n=h(n,s,1/0),e=h(e,c,1/0);var p=t.time,u=t.frame,f="number"===typeof p&&isFinite(p),l="number"===typeof u&&isFinite(u),d=0,m=0,y=0;if(f&&l)throw new Error("You should specify either start frame or time, but not both.");return f?(d=p,y=this._computePlayhead(d,e),m=this._computeFrame(y,d,n,i)):l&&(d=(m=u)/i,y=this._computePlayhead(d,e)),{playhead:y,time:d,frame:m,duration:e,totalFrames:n,fps:i,timeScale:r}},z.prototype.setup=function(t){var e=this;if(void 0===t&&(t={}),this.sketch)throw new Error("Multiple setup() calls not yet supported.");this._settings=Object.assign({},t,this._settings),M(this._settings);var n=B(this._settings),r=n.context,i=n.canvas,o=this.getTimeProps(this._settings);this._props=Object.assign({},o,{canvas:i,context:r,deltaTime:0,started:!1,exporting:!1,playing:!1,recording:!1,settings:this.settings,data:this.settings.data,render:function(){return e.render()},togglePlay:function(){return e.togglePlay()},dispatch:function(t){return e.dispatch(t)},tick:function(){return e.tick()},resize:function(){return e.resize()},update:function(t){return e.update(t)},exportFrame:function(t){return e.exportFrame(t)},record:function(){return e.record()},play:function(){return e.play()},pause:function(){return e.pause()},stop:function(){return e.stop()}}),this._setupGLKey(),this.resize()},z.prototype.loadAndRun=function(t,e){var n=this;return this.load(t,e).then((function(){return n.run(),n}))},z.prototype.unload=function(){var t=this;this.pause(),this.sketch&&("function"===typeof this.sketch.unload&&this._wrapContextScale((function(e){return t.sketch.unload(e)})),this._sketch=null)},z.prototype.destroy=function(){this.unload(),this.unmount()},z.prototype.load=function(t,e){var n=this;if("function"!==typeof t)throw new Error("The function must take in a function as the first parameter. Example:\n  canvasSketcher(() => { ... }, settings)");this.sketch&&this.unload(),"undefined"!==typeof e&&this.update(e),this._preRender();var r=Promise.resolve();if(this.settings.p5){if(!l())throw new Error("[canvas-sketch] ERROR: Using p5.js in Node.js is not supported");r=new Promise((function(t){var e,r=n.settings.p5;r.p5&&(e=r.preload,r=r.p5);var i=function(r){e&&(r.preload=function(){return e(r)}),r.setup=function(){var e=n.props,i="webgl"===n.settings.context,o=i?r.WEBGL:r.P2D;r.noLoop(),r.pixelDensity(e.pixelRatio),r.createCanvas(e.viewportWidth,e.viewportHeight,o),i&&n.settings.attributes&&r.setAttributes(n.settings.attributes),n.update({p5:r,canvas:r.canvas,context:r._renderer.drawingContext}),t()}};if("function"===typeof r)new r(i);else{if("function"!==typeof window.createCanvas)throw new Error("{ p5 } setting is passed but can't find p5.js in global (window) scope. Maybe you did not create it globally?\nnew p5(); // <-- attaches to global scope");i(window)}}))}return r.then((function(){var e=t(n.props);return p(e)||(e=Promise.resolve(e)),e})).then((function(t){return t||(t={}),n._sketch=t,l()&&(n._keyboardShortcuts.attach(),window.addEventListener("resize",n._resizeHandler)),n._postRender(),n._sizeChanged(),n})).catch((function(t){throw console.warn("Could not start sketch, the async loading function rejected with an error:\n    Error: "+t.message),t}))},Object.defineProperties(z.prototype,W);var Y="hot-id-cache",q=[];function G(t,e){if(void 0===e&&(e={}),e.p5){if(e.canvas||e.context&&"string"!==typeof e.context)throw new Error('In { p5 } mode, you can\'t pass your own canvas or context, unless the context is a "webgl" or "2d" string');var n="string"===typeof e.context&&e.context;e=Object.assign({},e,{canvas:!1,context:n})}var r,i=function(){var t=f();return t&&t.hot}();i&&(r=h(e.id,"$__DEFAULT_CANVAS_SKETCH_ID__$"));var o=i&&"string"===typeof r;o&&q.includes(r)&&(console.warn("Warning: You have multiple calls to canvasSketch() in --hot mode. You must pass unique { id } strings in settings to enable hot reload across multiple sketches. ",r),o=!1);var a=Promise.resolve();if(o){q.push(r);var s=function(t){var e=f();if(e)return e[Y]=e[Y]||{},e[Y][t]}(r);if(s){var c=function(){var t,n=(t=s.manager,e.animate?{time:t.props.time}:void 0);return s.manager.destroy(),n};a=s.load.then(c).catch(c)}}return a.then((function(n){var i,a=new z;return t?(e=Object.assign({},e,n),a.setup(e),a.mount(),i=a.loadAndRun(t)):i=Promise.resolve(a),o&&function(t,e){var n=f();n&&(n[Y]=n[Y]||{},n[Y][t]=e)}(r,{load:i,manager:a}),i}))}return G.canvasSketch=G,G.PaperSizes=j,G},t.exports=n()}).call(this,n(1))},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";n.r(e);var r=n(0),i=n.n(r),o=function(t,e,n){var r=t.createShader(e);if(!r)throw new Error("createShader failed");if(t.shaderSource(r,n),t.compileShader(r),!t.getShaderParameter(r,t.COMPILE_STATUS))throw new Error("could not compile shader: ".concat(t.getShaderInfoLog(r)||""));return r},a={canvas:document.querySelector("#canvas"),context:"webgl2",animate:!0};i()((function(t){t.canvas;var e=t.gl;e.enable(e.BLEND),e.blendFunc(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA);for(var n=o(e,e.VERTEX_SHADER,"#version 300 es\n#define GLSLIFY 1\n\nin vec4 a_position;\nin vec2 a_offset;\nin vec2 a_uv;\n\nuniform float u_time;\nuniform vec2 u_resolution;\n\nout vec2 v_uv;\nout float v_depth;\n\nfloat hash11(float p) {\n  p = fract(p * 0.1031);\n  p *= p + 33.33;\n  p *= p + p;\n  return fract(p);\n}\n\nvoid main() {\n  vec4 pos = a_position;\n\n  float depth = hash11(float(gl_InstanceID) * .01);\n  float size = hash11(float(gl_InstanceID + 147) * .053);\n  float speed = hash11(float(gl_InstanceID + 254) * .0425);\n  float timeOffset = hash11(float(gl_InstanceID + 557) * .0149);\n\n  pos.xy *= .5 + sqrt(depth) * (size*.75 + .25) * 5.;\n\n  pos.x *= u_resolution.y / u_resolution.x;\n\n  pos = pos + vec4(a_offset, 0., 0.);\n\n  float t = u_time * .25 * (1. - depth + speed * .5) * .8 + 100.;\n\n  float mFactor = t / (1. + sqrt(depth * 2.)) + timeOffset;\n  float mFx = hash11(floor(mFactor)*.1)*2. - 1.;\n  float yOffset = (fract(mFactor) * 2. - 1.) * 2.;\n  pos.y += yOffset;\n  pos.x += mFx;\n\n  pos.x += sin(yOffset * 5. * speed) * .02;\n\n  gl_Position = pos;\n  v_uv = a_uv;\n  v_depth = depth;\n}\n"),r=o(e,e.FRAGMENT_SHADER,"#version 300 es\n\nprecision highp float;\n#define GLSLIFY 1\n\nin vec2 v_uv;\nin float v_depth;\n\nuniform vec2 u_resolution;\n\nout vec4 outColor;\n\nvoid main() {\n  vec2 ouv = (v_uv - .5);\n  vec2 uv = ouv;\n\n  float smoothing = .75 - sqrt(v_depth * 2.5);\n  smoothing = clamp(smoothing, 0., .49);\n\n  float d = smoothstep(.5, smoothing, length(uv));\n\n  d -= smoothstep(.5, .0, length(uv)) * .25;\n  d -= smoothstep(.5, .4, length(uv)) * .2;\n  d *= .5 * (1. - v_depth);\n  d = clamp(d, 0., 1.);\n  d *= d * 2.5;\n  d *= clamp(sqrt(u_resolution.x / u_resolution.y), 0., 1.);\n\n  outColor = vec4(vec3(uv, uv.x+uv.y), d);\n}\n"),i=function(t,e,n){var r=t.createProgram();if(!r)throw new Error("createProgram failed");if(t.attachShader(r,e),t.attachShader(r,n),t.linkProgram(r),!t.getProgramParameter(r,t.LINK_STATUS))throw new Error("program failed to link:".concat(t.getProgramInfoLog(r)||""));return r}(e,n,r),a=e.getAttribLocation(i,"a_position"),s=e.getAttribLocation(i,"a_uv"),c=e.getAttribLocation(i,"a_offset"),p=e.getUniformLocation(i,"u_time"),u=e.getUniformLocation(i,"u_resolution"),f=new Float32Array(2e4),h=new Float32Array(1e4),l=new Float32Array(3e4),d=new Float32Array(1e4),m=[],y=[],g=[],v=[],w=0;w<1e4;w+=1)g.push(new Float32Array(f.buffer,2*w*4,2)),y.push(new Float32Array(h.buffer,4*w,1)),m.push(new Float32Array(l.buffer,3*w*4,3)),v.push(new Float32Array(d.buffer,4*w,1));g.forEach((function(t){t[0]=2*Math.random()-1,t[1]=2*Math.random()-1})),y.forEach((function(t){t[0]=Math.random()})),m.forEach((function(t){t[0]=Math.random(),t[1]=Math.random(),t[2]=Math.random()})),v.forEach((function(t){t[0]=2*Math.random()+.5}));var b=e.createVertexArray();e.bindVertexArray(b);var _=new Float32Array([-.075,-.075,.075,-.075,.075,.075,-.075,.075]);e.bindBuffer(e.ARRAY_BUFFER,e.createBuffer()),e.bufferData(e.ARRAY_BUFFER,_,e.STATIC_DRAW),e.enableVertexAttribArray(a),e.vertexAttribPointer(a,2,e.FLOAT,!1,0,0);var x=new Float32Array([0,0,1,0,1,1,0,1]);e.bindBuffer(e.ARRAY_BUFFER,e.createBuffer()),e.bufferData(e.ARRAY_BUFFER,x,e.STATIC_DRAW),e.enableVertexAttribArray(s),e.vertexAttribPointer(s,2,e.FLOAT,!1,0,0);var R=new Uint16Array([0,1,3,3,1,2]);e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,e.createBuffer()),e.bufferData(e.ELEMENT_ARRAY_BUFFER,new Uint16Array(R),e.STATIC_DRAW);var F=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,F),e.bufferData(e.ARRAY_BUFFER,f,e.STATIC_DRAW),e.enableVertexAttribArray(c),e.vertexAttribPointer(c,2,e.FLOAT,!1,0,0),e.vertexAttribDivisor(c,1),e.bindVertexArray(null),e.bindBuffer(e.ARRAY_BUFFER,null),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null),{resize:function(t){var n=t.viewportWidth,r=t.viewportHeight;e.viewport(0,0,n,r)},render:function(t){var n=t.time;e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT),e.useProgram(i),e.uniform1f(p,n),e.uniform2fv(u,[e.canvas.width,e.canvas.height]),e.bindVertexArray(b),e.drawElementsInstanced(e.TRIANGLES,6,e.UNSIGNED_SHORT,0,1e4),e.bindVertexArray(null)},unload:function(){}}}),a)}]);