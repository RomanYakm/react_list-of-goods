(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var s,r=n(4),o=n.n(r),a=n(5),c=n(6),i=n(9),l=n(7),u=n(8),h=n(1),d=n.n(h),b=(n(14),n(15),n(2)),p=n.n(b),j=n(0),v=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(e){e[e.NONE=0]="NONE",e[e.ALPABET=1]="ALPABET",e[e.LENGTH=2]="LENGTH"}(s||(s={}));var N=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={isReversed:!1,sortType:s.NONE},e.handleSortAlphabet=function(){e.setState({sortType:s.ALPABET})},e.handleSortLength=function(){e.setState({sortType:s.LENGTH})},e.handleReverse=function(){e.setState((function(e){return{isReversed:!e.isReversed}}))},e.handleReset=function(){e.setState({isReversed:!1,sortType:s.NONE})},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this.state,t=e.isReversed,n=e.sortType,r=function(e,t){var n=t.sortType,s=t.isReversed,r=Object(u.a)(e);return console.log(n,s),r}(v,{sortType:n,isReversed:t});return r.sort((function(e,t){switch(n){case s.ALPABET:return e.localeCompare(t);case s.LENGTH:return e.length-t.length;default:return 0}})),t&&r.reverse(),Object(j.jsxs)("div",{className:"section content",children:[Object(j.jsxs)("div",{className:"buttons",children:[Object(j.jsx)("button",{type:"button",className:p()("button is-info ",{"is-light":n!==s.ALPABET}),onClick:this.handleSortAlphabet,children:"Sort alphabetically"}),Object(j.jsx)("button",{type:"button",className:p()("button is-success",{"is-light":n!==s.LENGTH}),onClick:this.handleSortLength,children:"Sort by length"}),Object(j.jsx)("button",{type:"button",className:p()("button is-warning",{"is-light":!1===t}),onClick:this.handleReverse,children:"Reverse"}),(n!==s.NONE||t)&&Object(j.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:this.handleReset,children:"Reset"})]}),Object(j.jsx)("ul",{children:r.map((function(e){return Object(j.jsx)("li",{"data-cy":"Good",children:e},e)}))})]})}}]),n}(d.a.Component);o.a.render(Object(j.jsx)(N,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.5a4dba26.chunk.js.map