(window["webpackJsonpgpt-2-frontend"]=window["webpackJsonpgpt-2-frontend"]||[]).push([[0],{108:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(10),o=a.n(l),c=(a(82),a(14)),i=a(45),u=a(154),m=a(150),s=a(65),p=a(151),d=(a(83),a(35)),f=a.n(d),h=function(){return function(e){var t=r.a.useState({data:null,complete:!1,pending:!1,error:!1}),a=Object(c.a)(t,2),n=a[0],l=a[1],o=r.a.useState(),i=Object(c.a)(o,2),u=i[0],m=i[1];return r.a.useEffect((function(){u&&(l({data:null,pending:!0,error:!1,complete:!1}),f()(u).then((function(e){return l({data:e.data,pending:!1,error:!1,complete:!0})})).catch((function(){return l({data:null,pending:!1,error:!0,complete:!0})})))}),[u]),console.log(n),[n,function(){return m(e.apply(void 0,arguments))}]}((function(e){return{url:"https://api.pushkin.monetka.name/push",method:"GET",params:{text:e.text,temp:e.temperature}}}))},b=function(){return function(e){var t=r.a.useState({data:null,complete:!1,pending:!1,error:!1}),a=Object(c.a)(t,2),n=a[0],l=a[1],o=r.a.useState(),i=Object(c.a)(o,2),u=i[0],m=i[1];return r.a.useEffect((function(){u&&(l({data:null,pending:!0,error:!1,complete:!1}),f()(u).then((function(e){return l({data:e.data,pending:!1,error:!1,complete:!0})})).catch((function(){return l({data:null,pending:!1,error:!0,complete:!0})})))}),[u]),console.log(n),[n,function(){return m(e.apply(void 0,arguments))}]}((function(e){return{url:"https://api.pushkin.monetka.name/stih",method:"GET",params:{name:e.name,temp:e.temperature,length:100}}}))},g=a(145),E=a(157),v=a(148),j=a(60),O=a(155),k=a(152),w=a(156),x=a(153),y=a(149),S=a(4),N=["children","value","index"],C=["children","loading"];function P(e){var t=e.children,a=e.value,n=e.index,l=Object(i.a)(e,N);return r.a.createElement(g.a,Object.assign({component:"div",role:"tabpanel",hidden:a!==n,id:"scrollable-auto-tabpanel-".concat(n),"aria-labelledby":"scrollable-auto-tab-".concat(n)},l),r.a.createElement(O.a,{p:3},t))}function z(e){return{id:"scrollable-auto-tab-".concat(e),"aria-controls":"scrollable-auto-tabpanel-".concat(e)}}Object(v.a)((function(e){return{root:{flexGrow:1,width:"100%",backgroundColor:e.palette.background.paper}}}));var T=function(){var e=Object(n.useState)(!1),t=Object(c.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(!1),d=Object(c.a)(o,2),f=d[0],N=d[1],T=Object(n.useState)("\u0417\u0430\u0445\u043e\u0434\u0438\u0442 \u041f\u0443\u0448\u043a\u0438\u043d \u0432 \u043c\u0430\u0433\u0430\u0437\u0438\u043d \u043a\u0443\u043f\u0438\u0442\u044c \u0448\u043b\u044f\u043f\u0443, \u0430 \u043e\u043d\u0430 \u0435\u043c\u0443"),W=Object(c.a)(T,2),A=W[0],B=W[1],D=Object(n.useState)(),G=Object(c.a)(D,2),L=G[0],M=G[1],F=Object(n.useState)(),I=Object(c.a)(F,2),V=I[0],J=I[1],K=Object(n.useState)(.7),_=Object(c.a)(K,2),Q=_[0],R=_[1],Y=h(),$=Object(c.a)(Y,2),q=$[0],H=$[1],U=b(),X=Object(c.a)(U,2),Z=X[0],ee=X[1],te=r.a.useState(0),ae=Object(c.a)(te,2),ne=ae[0],re=ae[1],le=Object(S.a)({root:{marginLeft:5}})((function(e){return r.a.createElement(y.a,{className:e.classes.spinner,size:10,style:{marginLeft:"0.5em"}})})),oe=function(e){var t=e.children,a=e.loading,n=Object(i.a)(e,C);return r.a.createElement(m.a,Object.assign({size:"large",style:{marginTop:"1em",marginBottom:"1em",width:"fit-content",paddingBottom:"2em",backgroundColor:"transparent"},color:"primary"},n),t,a&&r.a.createElement(le,n))},ce=Object(v.a)({root:{width:300},title:{flexGrow:1,textAlign:"center"}});Object(n.useEffect)((function(){document.title="Neural Pushkin"}),[]);var ie=Object(s.a)({typography:{fontFamily:'"bikham","MinionPro",  sans-serif',fontSize:16,fontWeightLight:300,fontWeightRegular:400,fontWeightMedium:500}});return!q.complete||q.error||a||(B(q.data.text),l(!0)),!Z.complete||Z.error||f||(J(Z.data.text.split("poem:start")[1]),N(!0)),ce(),r.a.createElement(p.a,{theme:ie},r.a.createElement("div",{className:"app-container"},r.a.createElement(j.YMInitializer,{accounts:[83274316],options:{webvisor:!0}}),r.a.createElement("form",{noValidate:!0,autoComplete:"off"},r.a.createElement("div",{className:"centering"},r.a.createElement("h1",null,"Neural Pushkin"),r.a.createElement("img",{src:"npushkin2.jpg",width:"250",height:"250",alt:"Neural Pushkin"})),r.a.createElement(g.a,{id:"discrete-slider"}," \u0423\u0440\u043e\u0432\u0435\u043d\u044c \u043a\u0440\u0435\u0430\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u0438 "),r.a.createElement(E.a,{defaultValue:.7,getAriaValueText:function(e){R(e)},"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",step:.1,marks:!0,min:.1,max:2}),r.a.createElement("p",null),r.a.createElement(k.a,{position:"static",color:"transparent",elevation:0},r.a.createElement(w.a,{value:ne,onChange:function(e,t){re(t)},indicatorColor:"primary",textColor:"primary",variant:"standart",scrollButtons:"auto","aria-label":"standart auto tabs example",centered:!0},r.a.createElement(x.a,Object.assign({label:"\u0421\u0442\u0438\u0445\u0438"},z(0))),r.a.createElement(x.a,Object.assign({label:"\u041f\u0440\u043e\u0437\u0430"},z(1))))),r.a.createElement(P,{value:ne,index:0},r.a.createElement("div",{class:"centering"},r.a.createElement("font",{face:"MinionPro"},r.a.createElement(u.a,{className:"form textinput ",label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0441\u0442\u0438\u0445\u0430...",onChange:function(e){M(e.target.value)}}),r.a.createElement(g.a,{style:{whiteSpace:"pre-line",fontSize:20}},V),r.a.createElement(oe,{onClick:function(){Z.complete=!1,ee({name:L,temperature:Q}),N(!1)},loading:Z.pending},"\u0414\u043e\u043f\u0443\u0448\u043a\u0438\u043d\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u0442\u044c")))),r.a.createElement(P,{value:ne,index:1},r.a.createElement(u.a,{className:"form textinput",multiline:!0,fullWidth:!0,value:A,onChange:function(e){B(e.target.value)}}),r.a.createElement(O.a,{textAlign:"center"},r.a.createElement(oe,{onClick:function(){q.complete=!1,H({text:A,temperature:Q}),l(!1)},loading:q.pending},"\u0414\u043e\u043f\u0443\u0448\u043a\u0438\u043d\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u0442\u044c")))),r.a.createElement("div",{className:"centering"},r.a.createElement("p",null,"Created by ",r.a.createElement("a",{href:"https://t.me/lovedeathtransformers"},"Alex Wortega"),", ",r.a.createElement("a",{href:"https://t.me/def_model_train"},"Arina Pu\u0441hkova")),r.a.createElement("p",null,"Front by ",r.a.createElement("a",{href:"https://github.com/TimofeyKorzh"},"Timofey Korzhebin")),r.a.createElement("p",null,"\u0411\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u0438\u043c \u0437\u0430 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u043e\u043d\u043d\u0443\u044e \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0443 ",r.a.createElement("br",null),r.a.createElement("a",{href:"https://t.me/NeuralShit"},"NeuralShit"),", ",r.a.createElement("a",{href:"https://t.me/denissexy"},"DenisSexyIt"),", ",r.a.createElement("a",{href:"https://t.me/DeepFaker"},"Deepfaker")),r.a.createElement("p",null,"Neural Pushkin in ",r.a.createElement("a",{href:"https://twitter.com/NeuralPushkin"},"Twitter")),r.a.createElement("p",null,"\u0421\u0431\u043e\u0440 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u043d\u0430 ",r.a.createElement("a",{href:"https://www.tinkoff.ru/sl/6Nv1r2nsuiQ"},"\u043b\u0443\u0447\u0448\u0438\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u0430")," \u0434\u043b\u044f \u041f\u0443\u0448\u043a\u0438\u043d\u0430"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},77:function(e,t,a){e.exports=a(108)},82:function(e,t,a){},83:function(e,t,a){}},[[77,1,2]]]);
//# sourceMappingURL=main.d63fc378.chunk.js.map