var I=Object.defineProperty;var x=i=>{throw TypeError(i)};var M=(i,n,t)=>n in i?I(i,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[n]=t;var g=(i,n,t)=>M(i,typeof n!="symbol"?n+"":n,t),b=(i,n,t)=>n.has(i)||x("Cannot "+t);var o=(i,n,t)=>(b(i,n,"read from private field"),t?t.call(i):n.get(i)),u=(i,n,t)=>n.has(i)?x("Cannot add the same private member more than once"):n instanceof WeakSet?n.add(i):n.set(i,t),f=(i,n,t,e)=>(b(i,n,"write to private field"),e?e.call(i,t):n.set(i,t),t),r=(i,n,t)=>(b(i,n,"access private method"),t);import{C as T,a1 as k,u as z,j as l,a3 as B,aH as D,q as m,a2 as F,P as G}from"./app-D5CmHko7.js";var h,s,C,E,P,H,N,$,v,w,y,j,L,q;class O extends T{constructor(){super(...arguments);u(this,s);u(this,h);u(this,$,"")}onSetup(){f(this,h,z()),r(this,s,v).call(this),r(this,s,w).call(this),r(this,s,y).call(this),r(this,s,P).call(this)}onAttach(t){t.style.setProperty("pointer-events","none"),l(r(this,s,N).bind(this)),l(r(this,s,v).bind(this)),l(r(this,s,w).bind(this)),l(r(this,s,y).bind(this)),l(r(this,s,P).bind(this));const{started:e}=o(this,h).$state;this.setAttributes({"data-visible":()=>!e()&&!this.$state.hidden(),"data-loading":r(this,s,H).bind(this),"data-error":r(this,s,C).bind(this),"data-hidden":this.$state.hidden})}onConnect(t){l(r(this,s,E).bind(this)),l(r(this,s,j).bind(this))}}h=new WeakMap,s=new WeakSet,C=function(){const{error:t}=this.$state;return!B(t())},E=function(){const{canLoadPoster:t,poster:e}=o(this,h).$state;!t()&&e()&&D(e(),"preconnect")},P=function(){const{src:t}=this.$props,{poster:e,nativeControls:a}=o(this,h).$state;this.el&&m(this.el,"display",a()?"none":null),this.$state.hidden.set(r(this,s,C).call(this)||!(t()||e())||a())},H=function(){const{loading:t,hidden:e}=this.$state;return!e()&&t()},N=function(){const t=this.$state.img();t&&(new F(t).add("load",r(this,s,L).bind(this)).add("error",r(this,s,q).bind(this)),t.complete&&r(this,s,L).call(this))},$=new WeakMap,v=function(){const{poster:t}=o(this,h).$props,{canLoadPoster:e,providedPoster:a,inferredPoster:p}=o(this,h).$state,d=this.$props.src()||"",S=d||t()||p();o(this,$)===a()&&a.set(d),this.$state.src.set(e()&&S.length?S:null),f(this,$,d)},w=function(){const{src:t}=this.$props,{alt:e}=this.$state,{poster:a}=o(this,h).$state;e.set(t()||a()?this.$props.alt():null)},y=function(){const{crossOrigin:t}=this.$props,{crossOrigin:e}=this.$state,{crossOrigin:a,poster:p}=o(this,h).$state,d=t()!==null?t():a();e.set(/ytimg\.com|vimeo/.test(p()||"")?null:d===!0?"anonymous":d)},j=function(){const{loading:t,error:e}=this.$state,{canLoadPoster:a,poster:p}=o(this,h).$state;t.set(a()&&!!p()),e.set(null)},L=function(){const{loading:t,error:e}=this.$state;t.set(!1),e.set(null)},q=function(t){const{loading:e,error:a}=this.$state;e.set(!1),a.set(t)},g(O,"props",{src:null,alt:null,crossOrigin:null}),g(O,"state",new k({img:null,src:null,alt:null,crossOrigin:null,loading:!0,error:null,hidden:!1}));var c;class A extends G(HTMLElement,O){constructor(){super(...arguments);u(this,c,document.createElement("img"))}onSetup(){this.$state.img.set(o(this,c))}onConnect(){const{src:t,alt:e,crossOrigin:a}=this.$state;l(()=>{const{loading:p,hidden:d}=this.$state;o(this,c).style.display=p()||d()?"none":""}),l(()=>{m(o(this,c),"alt",e()),m(o(this,c),"crossorigin",a()),m(o(this,c),"src",t())}),o(this,c).parentNode!==this&&this.prepend(o(this,c))}}c=new WeakMap,g(A,"tagName","media-poster"),g(A,"attrs",{crossOrigin:"crossorigin"});export{A as MediaPosterElement};
