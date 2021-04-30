var __defProp=Object.defineProperty,__hasOwnProp=Object.prototype.hasOwnProperty,__getOwnPropSymbols=Object.getOwnPropertySymbols,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(e,t,r)=>t in e?__defProp(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,__assign=(e,t)=>{for(var r in t||(t={}))__hasOwnProp.call(t,r)&&__defNormalProp(e,r,t[r]);if(__getOwnPropSymbols)for(var r of __getOwnPropSymbols(t))__propIsEnum.call(t,r)&&__defNormalProp(e,r,t[r]);return e};!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react")):"function"==typeof define&&define.amd?define(["exports","react"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self)["vi-data-grid"]={},e.React)}(this,(function(e,t){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=r(t);function o(){}function i(){}i.resetWarningCache=o;var a,l=(function(e){e.exports=function(){function e(e,t,r,n,o,i){if("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"!==i){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return r.PropTypes=r,r}()}(a={exports:{}},a.exports),a.exports);var s="_root_pcpfu_1";const u=({children:e,height:t})=>n.default.createElement("div",{className:s,style:{height:t,maxHeight:t}},e);var c={};const d=({rowsCount:e,pagesCount:t,page:r,pageSize:o,onPageChange:i,onPageSizeChange:a})=>n.default.createElement("div",{className:c.root});var f="_root_pcpfu_1";const p=({children:e})=>{const[r,o]=t.useState(),[i,a]=t.useState();return t.useEffect((()=>{if(r){const e=()=>{const{width:e,height:t}=r.getBoundingClientRect();a({width:e,height:t})};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}}),[r]),n.default.createElement("div",{ref:o,className:f},i&&e(i))};var h="_root_1ujnk_1";const g=({children:e,width:r,height:o,isVirtualized:i})=>{const[a,l]=t.useState(0),s=i?e=>l(e.target.scrollTop):null;return n.default.createElement("div",{className:h,style:{width:r,height:o},onScroll:s},e(a))};var y="_root_7uzqt_1";const _=({children:e})=>n.default.createElement("table",{className:y},e);function m(e){var t,r,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=m(e[t]))&&(n&&(n+=" "),n+=r);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function v(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=m(e))&&(n&&(n+=" "),n+=t);return n}var E="_root_1jfl5_1",b="_sticky_1jfl5_11",w="_sortable_1jfl5_16";const C=({children:e,width:t,flex:r,left:o,style:i,isSticky:a,isSortable:l,onClick:s})=>n.default.createElement("th",{className:v(E,a&&b,l&&w),style:__assign({width:t,flex:r,left:o},i),onClick:s},e);var P="_root_1fsdn_1",S="_row_1fsdn_14";const O=({headerGroups:e,sort:t,changeSort:r})=>n.default.createElement("thead",{className:P},e.map(((e,o)=>n.default.createElement("tr",{key:o,className:S},e.map((e=>{const o=e.isSortable?()=>r({field:e.field}):null;return n.default.createElement(C,{key:e.field,width:e.width,flex:e.flex,left:e.left,style:e.headerCellStyle,isSticky:e.isSticky,isSortable:e.isSortable,onClick:o},t.field===e.field&&"none"!==t.order&&t.order[0],e.header)}))))));var D="_root_tul66_1",I="_sticky_tul66_11",k="_editable_tul66_16";var A=n.default.memo((({children:e,width:t,flex:r,left:o,isSticky:i,isEditable:a,onClick:l})=>n.default.createElement("td",{className:v(D,i&&I,a&&k),style:{width:t,flex:r,left:o},onClick:l},e)));var j="_root_1kwth_1";const N=({id:e,data:t,columns:r,editedCell:o,startCellEditing:i,cancelCellEditing:a,finishCellEditing:l})=>n.default.createElement("tr",{className:j},r.map((r=>{const s={rowId:e,rowData:t,colDef:r,field:r.field},u=r.valueGetter?r.valueGetter(s):t[r.field],c=r.valueFormatter?r.valueFormatter(__assign(__assign({},s),{value:u})):u;let d=null;o&&o.rowId===e&&o.field===r.field?d=r.renderEditCell(__assign(__assign({},s),{value:u,formattedValue:c,cancelCellEditing:a,finishCellEditing:l})):r.renderCell&&(d=r.renderCell(__assign(__assign({},s),{value:u,formattedValue:c})));const f=r.isEditable?()=>i({rowId:e,field:r.field}):null;return n.default.createElement(A,{key:r.field,width:r.width,flex:r.flex,left:r.left,isSticky:r.isSticky,isEditable:r.isEditable,onClick:f},d||c||u)})));var T="_root_mh8ht_1";const R=({columns:e,rows:t,isVirtualized:r,height:o,scrollTop:i,editedCell:a,startCellEditing:l,cancelCellEditing:s,finishCellEditing:u})=>{let c=r&&(({height:e,scrollTop:t,rows:r})=>{let n=[],o=0,i=0;return r.reduce(((r,a)=>{const l=40;return r>=t-l?e>=-200?(e-=l,n.push(a)):i+=l:o=r+l,r+l}),0),{beginHeight:o,endHeight:i,virtualizedRows:n}})({height:o,scrollTop:i,rows:t});return n.default.createElement("tbody",{className:T},r&&n.default.createElement("tr",{style:{height:c.beginHeight}},n.default.createElement("td",{style:{height:c.beginHeight}})),(r?c.virtualizedRows:t).map((t=>n.default.createElement(N,{key:t.id,id:t.id,data:t.data,columns:e,editedCell:a,startCellEditing:l,cancelCellEditing:s,finishCellEditing:u}))),r&&n.default.createElement("tr",{style:{height:c.endHeight}},n.default.createElement("td",{style:{height:c.endHeight}})))};var G="_root_1hu9t_1";const x=({pagesCount:e,page:t,onPageChange:r})=>e<1?null:n.default.createElement("div",{className:G},"pagination");function z(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];throw Error("[Immer] minified error nr: "+e+(r.length?" "+r.map((function(e){return"'"+e+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function F(e){return!!e&&!!e[Ce]}function L(e){return!!e&&(function(e){if(!e||"object"!=typeof e)return!1;var t=Object.getPrototypeOf(e);if(null===t)return!0;var r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return"function"==typeof r&&Function.toString.call(r)===Pe}(e)||Array.isArray(e)||!!e[we]||!!e.constructor[we]||W(e)||q(e))}function H(e,t,r){void 0===r&&(r=!1),0===M(e)?(r?Object.keys:Se)(e).forEach((function(n){r&&"symbol"==typeof n||t(n,e[n],e)})):e.forEach((function(r,n){return t(n,r,e)}))}function M(e){var t=e[Ce];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:W(e)?2:q(e)?3:0}function U(e,t){return 2===M(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function V(e,t,r){var n=M(e);2===n?e.set(t,r):3===n?(e.delete(t),e.add(r)):e[t]=r}function W(e){return me&&e instanceof Map}function q(e){return ve&&e instanceof Set}function K(e){return e.o||e.t}function B(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=Oe(e);delete t[Ce];for(var r=Se(t),n=0;n<r.length;n++){var o=r[n],i=t[o];!1===i.writable&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(t[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[o]})}return Object.create(Object.getPrototypeOf(e),t)}function $(e,t){return void 0===t&&(t=!1),Z(e)||F(e)||!L(e)||(M(e)>1&&(e.set=e.add=e.clear=e.delete=J),Object.freeze(e),t&&H(e,(function(e,t){return $(t,!0)}),!0)),e}function J(){z(2)}function Z(e){return null==e||"object"!=typeof e||Object.isFrozen(e)}function X(e){var t=De[e];return t||z(18,e),t}function Y(){return ye}function Q(e,t){t&&(X("Patches"),e.u=[],e.s=[],e.v=t)}function ee(e){te(e),e.p.forEach(ne),e.p=null}function te(e){e===ye&&(ye=e.l)}function re(e){return ye={p:[],l:ye,h:e,m:!0,_:0}}function ne(e){var t=e[Ce];0===t.i||1===t.i?t.j():t.g=!0}function oe(e,t){t._=t.p.length;var r=t.p[0],n=void 0!==e&&e!==r;return t.h.O||X("ES5").S(t,e,n),n?(r[Ce].P&&(ee(t),z(4)),L(e)&&(e=ie(t,e),t.l||le(t,e)),t.u&&X("Patches").M(r[Ce],e,t.u,t.s)):e=ie(t,r,[]),ee(t),t.u&&t.v(t.u,t.s),e!==be?e:void 0}function ie(e,t,r){if(Z(t))return t;var n=t[Ce];if(!n)return H(t,(function(o,i){return ae(e,n,t,o,i,r)}),!0),t;if(n.A!==e)return t;if(!n.P)return le(e,n.t,!0),n.t;if(!n.I){n.I=!0,n.A._--;var o=4===n.i||5===n.i?n.o=B(n.k):n.o;H(3===n.i?new Set(o):o,(function(t,i){return ae(e,n,o,t,i,r)})),le(e,o,!1),r&&e.u&&X("Patches").R(n,r,e.u,e.s)}return n.o}function ae(e,t,r,n,o,i){if(F(o)){var a=ie(e,o,i&&t&&3!==t.i&&!U(t.D,n)?i.concat(n):void 0);if(V(r,n,a),!F(a))return;e.m=!1}if(L(o)&&!Z(o)){if(!e.h.F&&e._<1)return;ie(e,o),t&&t.A.l||le(e,o)}}function le(e,t,r){void 0===r&&(r=!1),e.h.F&&e.m&&$(t,r)}function se(e,t){var r=e[Ce];return(r?K(r):e)[t]}function ue(e,t){if(t in e)for(var r=Object.getPrototypeOf(e);r;){var n=Object.getOwnPropertyDescriptor(r,t);if(n)return n;r=Object.getPrototypeOf(r)}}function ce(e){e.P||(e.P=!0,e.l&&ce(e.l))}function de(e){e.o||(e.o=B(e.t))}function fe(e,t,r){var n=W(t)?X("MapSet").N(t,r):q(t)?X("MapSet").T(t,r):e.O?function(e,t){var r=Array.isArray(e),n={i:r?1:0,A:t?t.A:Y(),P:!1,I:!1,D:{},l:t,t:e,k:null,o:null,j:null,C:!1},o=n,i=Ie;r&&(o=[n],i=ke);var a=Proxy.revocable(o,i),l=a.revoke,s=a.proxy;return n.k=s,n.j=l,s}(t,r):X("ES5").J(t,r);return(r?r.A:Y()).p.push(n),n}function pe(e){return F(e)||z(22,e),function e(t){if(!L(t))return t;var r,n=t[Ce],o=M(t);if(n){if(!n.P&&(n.i<4||!X("ES5").K(n)))return n.t;n.I=!0,r=he(t,o),n.I=!1}else r=he(t,o);return H(r,(function(t,o){n&&function(e,t){return 2===M(e)?e.get(t):e[t]}(n.t,t)===o||V(r,t,e(o))})),3===o?new Set(r):r}(e)}function he(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return B(e)}var ge,ye,_e="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),me="undefined"!=typeof Map,ve="undefined"!=typeof Set,Ee="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,be=_e?Symbol.for("immer-nothing"):((ge={})["immer-nothing"]=!0,ge),we=_e?Symbol.for("immer-draftable"):"__$immer_draftable",Ce=_e?Symbol.for("immer-state"):"__$immer_state",Pe=""+Object.prototype.constructor,Se="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,Oe=Object.getOwnPropertyDescriptors||function(e){var t={};return Se(e).forEach((function(r){t[r]=Object.getOwnPropertyDescriptor(e,r)})),t},De={},Ie={get:function(e,t){if(t===Ce)return e;var r,n,o,i=K(e);if(!U(i,t))return r=e,(o=ue(i,t))?"value"in o?o.value:null===(n=o.get)||void 0===n?void 0:n.call(r.k):void 0;var a=i[t];return e.I||!L(a)?a:a===se(e.t,t)?(de(e),e.o[t]=fe(e.A.h,a,e)):a},has:function(e,t){return t in K(e)},ownKeys:function(e){return Reflect.ownKeys(K(e))},set:function(e,t,r){var n=ue(K(e),t);if(null==n?void 0:n.set)return n.set.call(e.k,r),!0;if(!e.P){var o=se(K(e),t),i=null==o?void 0:o[Ce];if(i&&i.t===r)return e.o[t]=r,e.D[t]=!1,!0;if(function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}(r,o)&&(void 0!==r||U(e.t,t)))return!0;de(e),ce(e)}return e.o[t]===r&&"number"!=typeof r||(e.o[t]=r,e.D[t]=!0,!0)},deleteProperty:function(e,t){return void 0!==se(e.t,t)||t in e.t?(e.D[t]=!1,de(e),ce(e)):delete e.D[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var r=K(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n?{writable:!0,configurable:1!==e.i||"length"!==t,enumerable:n.enumerable,value:r[t]}:n},defineProperty:function(){z(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){z(12)}},ke={};H(Ie,(function(e,t){ke[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),ke.deleteProperty=function(e,t){return Ie.deleteProperty.call(this,e[0],t)},ke.set=function(e,t,r){return Ie.set.call(this,e[0],t,r,e[0])};var Ae=new(function(){function e(e){var t=this;this.O=Ee,this.F=!0,this.produce=function(e,r,n){if("function"==typeof e&&"function"!=typeof r){var o=r;r=e;var i=t;return function(e){var t=this;void 0===e&&(e=o);for(var n=arguments.length,a=Array(n>1?n-1:0),l=1;l<n;l++)a[l-1]=arguments[l];return i.produce(e,(function(e){var n;return(n=r).call.apply(n,[t,e].concat(a))}))}}var a;if("function"!=typeof r&&z(6),void 0!==n&&"function"!=typeof n&&z(7),L(e)){var l=re(t),s=fe(t,e,void 0),u=!0;try{a=r(s),u=!1}finally{u?ee(l):te(l)}return"undefined"!=typeof Promise&&a instanceof Promise?a.then((function(e){return Q(l,n),oe(e,l)}),(function(e){throw ee(l),e})):(Q(l,n),oe(a,l))}if(!e||"object"!=typeof e){if((a=r(e))===be)return;return void 0===a&&(a=e),t.F&&$(a,!0),a}z(21,e)},this.produceWithPatches=function(e,r){return"function"==typeof e?function(r){for(var n=arguments.length,o=Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];return t.produceWithPatches(r,(function(t){return e.apply(void 0,[t].concat(o))}))}:[t.produce(e,r,(function(e,t){n=e,o=t})),n,o];var n,o},"boolean"==typeof(null==e?void 0:e.useProxies)&&this.setUseProxies(e.useProxies),"boolean"==typeof(null==e?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze)}var t=e.prototype;return t.createDraft=function(e){L(e)||z(8),F(e)&&(e=pe(e));var t=re(this),r=fe(this,e,void 0);return r[Ce].C=!0,te(t),r},t.finishDraft=function(e,t){var r=(e&&e[Ce]).A;return Q(r,t),oe(void 0,r)},t.setAutoFreeze=function(e){this.F=e},t.setUseProxies=function(e){e&&!Ee&&z(20),this.O=e},t.applyPatches=function(e,t){var r;for(r=t.length-1;r>=0;r--){var n=t[r];if(0===n.path.length&&"replace"===n.op){e=n.value;break}}var o=X("Patches").$;return F(e)?o(e,t):this.produce(e,(function(e){return o(e,t.slice(r+1))}))},e}()),je=Ae.produce;Ae.produceWithPatches.bind(Ae),Ae.setAutoFreeze.bind(Ae),Ae.setUseProxies.bind(Ae),Ae.applyPatches.bind(Ae),Ae.createDraft.bind(Ae),Ae.finishDraft.bind(Ae);const Ne=({rowId:e,rowData:r,colDef:o,field:i,value:a,formattedValue:l,finishCellEditing:s,cancelCellEditing:u})=>{const c=t.useRef(),[d,f]=t.useState(a);return t.useEffect((()=>{f(a),c.current.focus()}),[a]),n.default.createElement("input",{ref:c,type:o.type,value:d,onChange:e=>f(e.target.value),onBlur:()=>{s({rowId:e,field:i,value:d,rowData:r})},onWheel:()=>{s({rowId:e,field:i,value:d,rowData:r})},onKeyDown:t=>{"Enter"===t.key?s({rowId:e,field:i,value:d,rowData:r}):"Escape"===t.key&&u()}})},Te={type:"string",width:150,left:0,headerCellStyle:{},isSticky:!1,isMobileSticky:!1,isSortable:!1,isEditable:!1,valueGetter:null,valueFormatter:null,renderCell:null,renderEditCell:e=>n.default.createElement(Ne,__assign({},e))},Re={none:"ascending",ascending:"descending",descending:"none"},Ge=(e,t,r)=>e.isSticky?r.slice(0,t).reduce(((e,t)=>e+(t.width||Te.width)),0):0,xe=(e,t,r)=>{const n=r?r(e,t):e.id;return((e,t)=>{if(null==e)throw new Error(["The data grid component requires all rows to have a unique id property.","A row was provided without id in the rows prop:",JSON.stringify(t)].join("\n"))})(n,e),n},ze=((...e)=>0===e.length?e=>e:1===e.length?e[0]:e.reduce(((e,t)=>(...r)=>e(t(...r)))))((e=>e),je)(((e,t)=>{switch(t.type){case"COLUMNS_UPDATED":const{headerGroups:r,columns:n}=t.payload;e.headerGroups=r,e.columns=n;break;case"ROWS_UPDATED":e.rows=t.payload;break;case"SORT_CHANGED":e.sort=t.payload;break;case"PAGE_CHANGED":e.page=t.payload;break;case"PAGE_SIZE_CHANGED":e.pageSize=t.payload;break;case"CELL_EDITING_STARTED":e.editedCell=t.payload;break;case"CELL_EDITING_CANCELED":e.editedCell=null;break;case"CELL_EDITING_FINISHED":{const{rowId:r,field:n,value:o}=t.payload,i=e.rows.findIndex((e=>e.id===r));e.rows[i].data[n]=o,e.editedCell=null;break}}})),Fe={headerGroups:[],columns:[],rows:[],sort:{order:"none",field:null},page:0,pageSize:100,editedCell:null},Le=({colDefs:e,rowDefs:r,getRowId:n,onCellEdited:o})=>{const[i,a]=t.useReducer(ze,Fe);t.useEffect((()=>{const{headerGroups:t,columns:r}=(e=>{const t=[[]],r=[],n=e.some((e=>e.columns));return n?(t.push([]),e.forEach((e=>{e.columns?(t[0].push(__assign(__assign({},e),{isSortable:!1,width:e.columns.reduce(((e,t)=>e+(t.width||Te.width)),0)})),e.columns.forEach((e=>{r.push(e),t[1].push(e)}))):(r.push(e),t[0].push(__assign(__assign({},e),{header:""})),t[1].push(__assign(__assign({},e),{headerCellStyle:n?{height:100,marginTop:-50}:{}})))})),{headerGroups:[t[0].map(((t,r)=>__assign(__assign(__assign({},Te),t),{left:Ge(t,r,e)}))),t[1].map(((t,r)=>__assign(__assign(__assign({},Te),t),{left:Ge(t,r,e)})))],columns:r.map(((t,r)=>__assign(__assign(__assign({},Te),t),{left:Ge(t,r,e)})))}):(e.forEach((e=>{r.push(e),t[0].push(e)})),{headerGroups:[t[0].map(((t,r)=>__assign(__assign(__assign({},Te),t),{left:Ge(t,r,e)})))],columns:r.map(((t,r)=>__assign(__assign(__assign({},Te),t),{left:Ge(t,r,e)})))})})(e);a({type:"COLUMNS_UPDATED",payload:{headerGroups:t,columns:r}})}),[e]),t.useEffect((()=>{const e=((e,t,r)=>((e,t)=>{if(t.field&&t.order&&"none"!==t.order){const r=[...e];return r.sort(((e,r)=>{const{field:n,order:o}=t;switch(o){case"ascending":return e[n]>r[n]?1:-1;case"descending":return e[n]>r[n]?-1:1;case"none":default:return 0}})),r}return e})(e.map(((e,r)=>({id:xe(e,r,t),data:e}))),r))(r,n,i.sort);a({type:"ROWS_UPDATED",payload:e})}),[r,n,i.sort]);return __assign(__assign({},i),{changeSort:({field:e})=>{const t=e===i.sort.field?Re[i.sort.order]:"ascending";a({type:"SORT_CHANGED",payload:{order:t,field:e}})},changePage:e=>{a({type:"PAGE_CHANGED",payload:e})},changePageSize:e=>{a({type:"PAGE_SIZE_CHANGED",payload:e})},startCellEditing:({rowId:e,field:t})=>{a({type:"CELL_EDITING_STARTED",payload:{rowId:e,field:t}})},cancelCellEditing:()=>a({type:"CELL_EDITING_CANCELED"}),finishCellEditing:({rowId:e,field:t,value:r,rowData:n})=>{a({type:"CELL_EDITING_FINISHED",payload:{rowId:e,field:t,value:r}}),o&&o({rowId:e,field:t,value:r,rowData:n})}})},He=({columns:e,rows:t,height:r,isVirtualized:o,pagesCount:i,rowsCount:a,getRowId:l,onCellEdited:s})=>{const{headerGroups:c,columns:f,rows:h,sort:y,page:m,pageSize:v,editedCell:E,changeSort:b,changePage:w,changePageSize:C,startCellEditing:P,cancelCellEditing:S,finishCellEditing:D}=Le({colDefs:e,rowDefs:t,getRowId:l,onCellEdited:s});return n.default.createElement(u,{height:r},n.default.createElement(d,{rowsCount:a,pagesCount:i,page:m,pageSize:v,onPageChange:w,onPageSizeChange:C}),n.default.createElement(p,null,(({width:e,height:t})=>n.default.createElement(g,{width:e,height:t,isVirtualized:o},(e=>n.default.createElement(_,null,n.default.createElement(O,{headerGroups:c,sort:y,changeSort:b}),n.default.createElement(R,{columns:f,rows:h,isVirtualized:o,height:t,scrollTop:e,editedCell:E,startCellEditing:P,cancelCellEditing:S,finishCellEditing:D})))))),n.default.createElement(x,{pagesCount:i,page:m,onPageChange:w}))};He.propTypes={columns:l.arrayOf(l.shape({header:l.string.isRequired,field:l.string.isRequired,type:l.string,width:l.number,flex:l.number,isSticky:l.bool,isSortable:l.bool,isEditable:l.bool,valueGetter:l.func,valueFormatter:l.func,renderCell:l.func,renderEditCell:l.func})).isRequired,rows:l.arrayOf(l.object),height:l.number,isVirtualized:l.bool,pagesCount:l.number,rowsCount:l.number,getRowId:l.func,onCellEdited:l.func},He.defaultProps={rows:[],height:null,isVirtualized:!1,pagesCount:0,rowsCount:0,getRowId:null,onCellEdited:null},e.DataGrid=He,Object.defineProperty(e,"__esModule",{value:!0}),e[Symbol.toStringTag]="Module"}));