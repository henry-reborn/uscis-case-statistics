(this["webpackJsonpuscis-case-statistics"]=this["webpackJsonpuscis-case-statistics"]||[]).push([[0],{186:function(e,t,a){e.exports=a.p+"static/media/donation_wechat.84e04efe.jpg"},187:function(e,t,a){e.exports=a.p+"static/media/wechat_qr.6a2dd925.jpg"},219:function(e,t,a){e.exports=a(433)},433:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(34),o=a.n(l),c=a(189),i=a(115),u=a.n(i),s=a(175),m=a(63),d=a(176),p=a.n(d),f=a(87),h=a(177),E=a.n(h),v=a(116),y=a.n(v),g=a(119),w=a(22),b=a(461),x=a(464),A=a(463),S=a(457),k=a(459),j=a(462),D=a(460),I=a(186),L=a.n(I),O=a(187),C=a.n(O);function Q(e){var t;return null!==(t=f.a.Map([["Case Was Received","#999900"],["Case Was Approved","#00FF00"],["Request for Additional Evidence Was Sent","#FF0000"]]).get(e))&&void 0!==t?t:(new p.a).hex(e)}var W=function(){var e,t,a,l,o,i,d,p,h,v=null!==(e=new URL(window.location.href).searchParams.get("form"))&&void 0!==e?e:"I-129",I=null!==(t=new URL(window.location.href).searchParams.get("center"))&&void 0!==t?t:"WAC",O=Object(n.useState)(null),W=Object(m.a)(O,2),U=W[0],F=W[1],K=Object(n.useState)({}),R=Object(m.a)(K,2),N=R[0],P=R[1],B=function(e,t){var a=new URL(window.location.href),n=a.searchParams;n.set(e,t),a.search=n.toString(),window.location.href=a.toString()},M=new URL(window.location.href);Object(n.useEffect)((function(){Object(s.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return M.searchParams.get("form")||B("form","I-129"),M.searchParams.get("center")||B("center","WAC"),e.t0=P,e.t1=E.a,e.next=6,fetch("https://raw.githubusercontent.com/vicdus/uscis-case-statistics/master/src/data.json5");case 6:return e.next=8,e.sent.text();case 8:e.t2=e.sent,e.t3=e.t1.parse.call(e.t1,e.t2),(0,e.t0)(e.t3);case 11:case"end":return e.stop()}}),e)})))()}),[]);var _=f.a.List(Object.entries(N).flatMap((function(e){var t=Object(m.a)(e,2),a=t[0],n=t[1],r=a.split("|"),l=Object(m.a)(r,6),o=l[0],c=l[1],i=l[2],u=l[3],s=l[4],d=l[5];return Object.entries(n).map((function(e){return{center:o,year:c,day:i,code:u,form:s,status:d,updateDay:e[0],count:e[1]}}))}))),q=_.filter((function(e){return e.form===v&&e.center===I})),H=q.map((function(e){return Number.parseInt(e.updateDay)})).toSet().toList().sort(),J=q.map((function(e){return e.count})).toSet().toList().sort(),G=q.map((function(e){return Number.parseInt(e.updateDay)})).max(),T=q.filter((function(e){var t;return e.updateDay===(null===(t=null!==U&&void 0!==U?U:G)||void 0===t?void 0:t.toString())})),V=_.map((function(e){return e.form})).toSet(),$=_.map((function(e){return e.center})).toSet(),z=q.countBy((function(e){return e.status})),X=q.map((function(e){return e.status})).toSet().toList().sortBy((function(e){var t;return-(null!==(t=z.get(e))&&void 0!==t?t:0)})),Y=q.map((function(e){return Number.parseInt(e.day)})).toSet().toList().sort(),Z=T.groupBy((function(e){return e.day})).map((function(e,t){return Object(c.a)({day:t},e.reduce((function(e,t){return e.set(t.status,t.count)}),f.a.Map()).toObject())})).toList().sort((function(e,t){return Number.parseInt(e.day)-Number.parseInt(t.day)})).toArray(),ee=Y.map((function(e){var t;return null!==(t=Z.find((function(t){return t.day===e.toString()})))&&void 0!==t?t:{day:e}})).toArray(),te=r.a.createElement(w.e,{width:1440,height:810,data:ee},r.a.createElement(w.c,{strokeDasharray:"3 3"}),r.a.createElement(w.g,{dataKey:"day"}),r.a.createElement(w.h,{type:"number",height:810,domain:[0,null!==(a=J.max())&&void 0!==a?a:1]}),r.a.createElement(w.f,{offset:100,itemSorter:function(e){var t;return-e.payload[y()(null===(t=e.dataKey)||void 0===t?void 0:t.toString())]}}),X.toArray().map((function(e,t){return r.a.createElement(w.d,{key:t,type:"linear",isAnimationActive:!1,dataKey:e,stroke:Q(e)})}))),ae=r.a.createElement(w.b,{height:1440,width:810,data:ee,layout:"vertical"},r.a.createElement(w.c,{strokeDasharray:"3 3"}),r.a.createElement(w.g,{type:"number",dataKey:"day",domain:[0,null!==(l=J.max())&&void 0!==l?l:1]}),r.a.createElement(w.h,{type:"category",dataKey:"day",domain:[(null!==(o=Y.min())&&void 0!==o?o:0)-1,(null!==(i=Y.max())&&void 0!==i?i:1)+1],tick:!0,interval:0,allowDecimals:!0,ticks:Y.toArray()}),r.a.createElement(w.f,{offset:100,itemSorter:function(e){return-X.indexOf(y()(e.dataKey))}}),X.toArray().map((function(e,t){return r.a.createElement(w.a,{key:t,isAnimationActive:!1,dataKey:e,stackId:"a",fill:Q(e)})}))),ne=r.a.createElement("div",null,r.a.createElement("h1",null,"USCIS case progress tracker"),r.a.createElement("p",null,"Current Form: ",r.a.createElement("strong",null,v),",",r.a.createElement("br",null)," location:"," ",r.a.createElement("strong",null,I)," ,",r.a.createElement("br",null)," Last Update for this form and location:",r.a.createElement("strong",null,G?new Date(864e5*G+252e5).toDateString():"Not Exist currently")),r.a.createElement("h3",null,"Help needed for UI and clawer"),r.a.createElement("p",null,"GitHub project:",r.a.createElement("a",{href:"https://github.com/vicdus/uscis-case-statistics/",target:"_blank",rel:"noopener noreferrer"},"https://github.com/vicdus/uscis-case-statistics/"))),re=H.max()?r.a.createElement(S.a,{item:!0,xs:8},r.a.createElement(D.a,{style:{marginLeft:"128px",marginRight:"128px"},defaultValue:null!==(d=H.max())&&void 0!==d?d:1,onChange:function(e,t){return F(t.toString())},"aria-labelledby":"discrete-slider",valueLabelDisplay:"off",step:null,marks:H.map((function(e){return{value:e,label:1+new Date(864e5*e+252e5).getMonth()+"/"+new Date(864e5*e+252e5).getDate()}})).toArray(),min:null!==(p=H.min())&&void 0!==p?p:0,max:null!==(h=H.max())&&void 0!==h?h:1})):null,le=r.a.createElement("div",null,r.a.createElement("h3",null,"Q and A"),r.a.createElement("h4",null,"Q: \u600e\u4e48\u7528\uff1f"),r.a.createElement("p",null,"A: \u6a2a\u5750\u6807\u662f\u53f7\u6bb5\uff0c\u7eb5\u5750\u6807\u662f\u72b6\u6001\u5bf9\u5e94\u7684\u6570\u91cf\u3002"),r.a.createElement("h4",null,"Q: \u4ec0\u4e48\u662f\u53f7\u6bb5\uff1f"),r.a.createElement("p",null,"A: \u8fd9\u5f20\u56fe\u91cc\u7684working day number"),r.a.createElement("img",{alt:"day-explain",src:"https://www.am22tech.com/wp-content/uploads/2018/12/uscis-receipt-number-status-i797-notice-truvisa.jpg"}),r.a.createElement("h4",null,"Q: \u4f60\u662f\u8c01\uff1f"),r.a.createElement("p",null,"A: \u6211\u4eca\u5e74\u62bd\u4e2d\u4e86h1b, \u5728\u7b49approve"),r.a.createElement("h4",null,"Q: \u6570\u636e\u6765\u6e90\uff1f"),r.a.createElement("p",null,"A: \u679a\u4e3e\u53f7\u6bb5\u4e0b\u6240\u6709\u53ef\u80fd\u7684case number\u5e76\u722c\u53d6USCIS, \u4fdd\u5b58\u6210\u6587\u4ef6"),r.a.createElement("h4",null,"Q: \u6ca1\u6709\u6211\u7684\u53f7\u6bb5\u7684\u6570\u636e\uff1f"),r.a.createElement("p",null,"A: \u53ef\u80fd\u9700\u8981\u5730\u91cc\u5927\u5bb6\u4e00\u8d77\u6765\u722c\u5e76\u66f4\u65b0\uff0c\u7a0d\u540e\u653e\u51fa\u6b65\u9aa4"),r.a.createElement("h4",null,"Q: \u4e3a\u4ec0\u4e48\u662f\u6587\u4ef6\uff1f\u4e3a\u4ec0\u4e48\u4e0d\u7528\u6570\u636e\u5e93\uff1f"),r.a.createElement("p",null,"A: \u8d2b\u7a77"),r.a.createElement("h4",null,"Q: \u8fd9\u4e2a\u5f88\u6709\u7528\uff0c\u53ef\u4ee5\u8bf7\u4f60\u559d\u676f\u5496\u5561\u5417\uff1f"),r.a.createElement("p",null,"A: \u611f\u8c22\uff01"),r.a.createElement("img",{src:L.a,alt:"wechat_donation",style:{width:"400px",height:"560px"}}),r.a.createElement("h4",null,"Q: \u6211\u60f3\u548c\u4f60\u804a\u4e00\u804a\uff1f"),r.a.createElement("p",null,"A: \u52a0\u6211\u5fae\u4fe1\u5427\uff01"),r.a.createElement("img",{src:C.a,alt:"wechat_donation",style:{width:"400px",height:"560px"}})),oe=r.a.createElement(g.FacebookProvider,{appId:"185533902045623"},r.a.createElement(g.Comments,{href:"https://vicdus.github.io/uscis-case-statistics/"})),ce=r.a.createElement(b.a,{fullWidth:!0,component:"fieldset"},r.a.createElement(A.a,{component:"legend"},"Form Type"),r.a.createElement(j.a,{"aria-label":"form",name:"form",value:v,onChange:function(e){return B("form",e.target.value)},row:!0},V.toArray().sort().map((function(e,t){return r.a.createElement(x.a,{key:t,value:e,control:r.a.createElement(k.a,null),label:e})})))),ie=r.a.createElement(b.a,{fullWidth:!0,component:"fieldset"},r.a.createElement(A.a,{component:"legend"},"Center"),r.a.createElement(j.a,{"aria-label":"form",name:"form",value:I,onChange:function(e){return B("center",e.target.value)},row:!0},$.toArray().sort().map((function(e,t){return r.a.createElement(x.a,{key:t,value:e,control:r.a.createElement(k.a,null),label:e})}))));return r.a.createElement("div",null,ne,ce,ie,re,ae,te,re,le,oe)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[219,1,2]]]);
//# sourceMappingURL=main.65bff5df.chunk.js.map