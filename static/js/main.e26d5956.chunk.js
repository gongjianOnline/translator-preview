(this.webpackJsonptranslator=this.webpackJsonptranslator||[]).push([[0],{130:function(e,a,l){"use strict";l.r(a);var n=l(2),t=l(0),s=l(23),c=l.n(s),u=(l(78),l(6)),r=(l(79),function(e){var a=Object(t.useState)((function(){return{value:"en",label:"\u82f1\u6587"}})),l=Object(u.a)(a,2),s=l[0],c=l[1];return Object(n.jsx)("div",{className:"configure-container",children:Object(n.jsx)("ul",{children:Object(n.jsxs)("li",{className:"target-container",onClick:function(e){!function(e){e.stopPropagation();var a=document.getElementsByClassName("language-container");a[0].className.split(" ").indexOf("isShowTrue")<0?(a[0].classList.remove("isShowFalse"),a[0].classList.add("isShowTrue")):(a[0].classList.remove("isShowTrue"),a[0].classList.add("isShowFalse"))}(e)},children:["\u76ee\u6807\u8bed\u8a00: ",s.label,Object(n.jsx)("div",{className:"language-container isShowTrue",children:Object(n.jsx)("ul",{className:"languageList-container",children:[{label:"\u4e2d\u6587",value:"zh"},{label:"\u82f1\u8bed",value:"en"},{label:"\u7ca4\u8bed",value:"yue"},{label:"\u6587\u8a00\u6587",value:"yue"},{label:"\u65e5\u8bed",value:"jp"},{label:"\u97e9\u8bed",value:"kor"},{label:"\u6cd5\u8bed",value:"fra"},{label:"\u897f\u73ed\u7259\u8bed",value:"spa"},{label:"\u6cf0\u8bed",value:"th"},{label:"\u963f\u62c9\u4f2f\u8bed",value:"ara"},{label:"\u4fc4\u8bed",value:"ru"},{label:"\u8461\u5934\u7259\u8bed",value:"pt"},{label:"\u5fb7\u8bed",value:"de"},{label:"\u610f\u5927\u5229\u8bed",value:"it"},{label:"\u5e0c\u814a\u8bed",value:"el"},{label:"\u8377\u5170\u8bed",value:"nl"},{label:"\u6ce2\u5170\u8bed",value:"pl"},{label:"\u4fdd\u52a0\u5229\u4e9a\u8bed",value:"bul"},{label:"\u7231\u6c99\u5c3c\u4e9a\u8bed",value:"est"},{label:"\u4e39\u9ea6\u8bed",value:"dan"},{label:"\u82ac\u5170\u8bed",value:"fin"},{label:"\u6377\u514b\u8bed",value:"cs"},{label:"\u7f57\u9a6c\u5c3c\u4e9a\u8bed",value:"rom"},{label:"\u65af\u6d1b\u6587\u5c3c\u4e9a\u8bed",value:"slo"},{label:"\u745e\u5178\u8bed",value:"swe"},{label:"\u5308\u7259\u5229\u8bed",value:"hu"},{label:"\u7e41\u4f53\u4e2d\u6587",value:"cht"},{label:"\u8d8a\u5357\u8bed",value:"vie"}].map((function(a,l){return Object(n.jsx)("li",{className:"languageList-content",onClick:function(){!function(a){e.configure(a),c({value:a.value,label:a.label})}(a)},children:a.label},l)}))})})]})})})}),i=(l(80),function(e){var a=Object(t.useState)((function(){return{value:"auto",label:"\u81ea\u52a8\u68c0\u6d4b"}})),l=Object(u.a)(a,2),s=l[0],c=l[1];return Object(n.jsx)("div",{className:"source-container",children:Object(n.jsx)("ul",{children:Object(n.jsxs)("li",{className:"sourceLanguage-container",onClick:function(e){!function(e){e.stopPropagation();var a=document.getElementsByClassName("source-language-container");a[0].className.split(" ").indexOf("isShowTrue")<0?(a[0].classList.remove("isShowFalse"),a[0].classList.add("isShowTrue")):(a[0].classList.remove("isShowTrue"),a[0].classList.add("isShowFalse"))}(e)},children:["\u6e90\u8bed\u8a00: ",s.label,Object(n.jsx)("div",{className:"source-language-container isShowTrue",children:Object(n.jsx)("ul",{className:"source-languageList-container",children:[{label:"\u81ea\u52a8\u68c0\u6d4b",value:"auto"},{label:"\u4e2d\u6587",value:"zh"},{label:"\u82f1\u8bed",value:"en"},{label:"\u7ca4\u8bed",value:"yue"},{label:"\u6587\u8a00\u6587",value:"yue"},{label:"\u65e5\u8bed",value:"jp"},{label:"\u97e9\u8bed",value:"kor"},{label:"\u6cd5\u8bed",value:"fra"},{label:"\u897f\u73ed\u7259\u8bed",value:"spa"},{label:"\u6cf0\u8bed",value:"th"},{label:"\u963f\u62c9\u4f2f\u8bed",value:"ara"},{label:"\u4fc4\u8bed",value:"ru"},{label:"\u8461\u5934\u7259\u8bed",value:"pt"},{label:"\u5fb7\u8bed",value:"de"},{label:"\u610f\u5927\u5229\u8bed",value:"it"},{label:"\u5e0c\u814a\u8bed",value:"el"},{label:"\u8377\u5170\u8bed",value:"nl"},{label:"\u6ce2\u5170\u8bed",value:"pl"},{label:"\u4fdd\u52a0\u5229\u4e9a\u8bed",value:"bul"},{label:"\u7231\u6c99\u5c3c\u4e9a\u8bed",value:"est"},{label:"\u4e39\u9ea6\u8bed",value:"dan"},{label:"\u82ac\u5170\u8bed",value:"fin"},{label:"\u6377\u514b\u8bed",value:"cs"},{label:"\u7f57\u9a6c\u5c3c\u4e9a\u8bed",value:"rom"},{label:"\u65af\u6d1b\u6587\u5c3c\u4e9a\u8bed",value:"slo"},{label:"\u745e\u5178\u8bed",value:"swe"},{label:"\u5308\u7259\u5229\u8bed",value:"hu"},{label:"\u7e41\u4f53\u4e2d\u6587",value:"cht"},{label:"\u8d8a\u5357\u8bed",value:"vie"}].map((function(a,l){return Object(n.jsx)("li",{className:"source-languageList-content",onClick:function(){!function(a){e.getSource(a),c({value:a.value,label:a.label})}(a)},children:a.label},l)}))})})]})})})}),o=l(61),b=l.n(o).a.create({baseURL:"http://39.98.154.87:8888/"});b.interceptors.request.use((function(e){return e})),b.interceptors.response.use((function(e){return e}));l(97),l(99),l(52);var v=l(132).a.Search,d=function(){var e=Object(t.useState)(""),a=Object(u.a)(e,2),l=a[0],s=a[1],c=Object(t.useState)(!1),o=Object(u.a)(c,2),d=o[0],j=o[1],h=function(e,a){var l=document.getElementsByClassName("App")[0];1===a?(j(!1),l.classList.add("banner"),l.classList.remove("banner2")):(j(!0),l.classList.add("banner2"),l.classList.remove("banner"))},f=Object(t.useState)((function(){return{value:"auto",label:"\u81ea\u52a8\u68c0\u6d4b"}})),m=Object(u.a)(f,2),g=m[0],O=m[1],p=Object(t.useState)((function(){return{value:"en",label:"\u82f1\u6587"}})),x=Object(u.a)(p,2),S=x[0],N=x[1];return Object(n.jsxs)("div",{className:"translate-wrapper",children:[Object(n.jsxs)("div",{className:"OPTLanguage-container",children:[Object(n.jsx)(i,{getSource:function(e){return function(e){O({value:e.value,label:e.label})}(e)}}),Object(n.jsx)(r,{configure:function(e){return function(e){N({value:e.value,label:e.label})}(e)}})]}),Object(n.jsxs)("div",{className:"option-container",children:[Object(n.jsx)("div",{className:d?"":"select-content",onClick:function(e){return h(0,1)},children:"\u5355\u8bcd"}),Object(n.jsx)("div",{className:d?"select-content":"",onClick:function(e){return h(0,0)},children:"\u53e5\u5b50"})]}),Object(n.jsx)("div",{className:"search-container",children:Object(n.jsx)(v,{placeholder:"\u8bf7\u8f93\u5165\u8981\u67e5\u8be2\u7684\u5185\u5bb9",allowClear:!0,enterButton:"\u7ffb\u8bd1",size:"large",onInput:function(e){!function(e){""===e.target.value&&s("")}(e)},onSearch:function(e){return function(e){e&&b({methods:"get",url:"/baiduCurrency",params:{word:e,from:g.value,to:S.value}}).then((function(e){e.data.error_code?alert("\u9519\u8bef\u63d0\u793a:".concat(e.data.error_code)):s(e.data.trans_result[0].dst)}))}(e)}})}),Object(n.jsx)("div",{className:"translate-container",children:l})]})};l(129);var j=function(){return Object(n.jsx)("div",{className:"App banner",onClick:function(e){!function(e){if("target-container"!==e.target.className){var a=document.getElementsByClassName("language-container")[0];a.className.split(" ").indexOf("isShowFalse")>0&&(a.classList.remove("isShowFalse"),a.classList.add("isShowTrue"));var l=document.getElementsByClassName("source-language-container")[0],n=l.className.split(" ");console.log(n),-1!==n.indexOf("isShowFalse")&&(l.classList.remove("isShowFalse"),l.classList.add("isShowTrue"))}}(e)},children:Object(n.jsx)(d,{})})},h=function(e){e&&e instanceof Function&&l.e(3).then(l.bind(null,133)).then((function(a){var l=a.getCLS,n=a.getFID,t=a.getFCP,s=a.getLCP,c=a.getTTFB;l(e),n(e),t(e),s(e),c(e)}))};c.a.render(Object(n.jsx)(j,{}),document.getElementById("root")),h()},52:function(e,a,l){},78:function(e,a,l){},79:function(e,a,l){},80:function(e,a,l){},99:function(e,a,l){}},[[130,1,2]]]);
//# sourceMappingURL=main.e26d5956.chunk.js.map