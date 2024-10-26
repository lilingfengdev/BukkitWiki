var U=Object.defineProperty;var b=i=>{throw TypeError(i)};var $=(i,t,e)=>t in i?U(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var m=(i,t,e)=>$(i,typeof t!="symbol"?t+"":t,e),E=(i,t,e)=>t.has(i)||b("Cannot "+e);var s=(i,t,e)=>(E(i,t,"read from private field"),e?e.call(i):t.get(i)),r=(i,t,e)=>t.has(i)?b("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(i):t.set(i,e),c=(i,t,e,n)=>(E(i,t,"write to private field"),n?n.call(i,e):t.set(i,e),e),p=(i,t,e)=>(E(i,t,"access private method"),e);import{O as N,aS as V,aT as S,aU as q,h as A,aV as F,aW as v,a6 as W,U as Y,aE as _}from"./app-DmwaTO4H.js";import{H as j,a as z}from"./vidstack-CSv7rfHP-LZSQYNTy.js";import"./vidstack-DSYpsFWk-DXbv2kOe.js";var P,f,k,C,H;class B{constructor(t,e){r(this,k);r(this,P);r(this,f);c(this,P,t),c(this,f,e),t.textTracks.onaddtrack=p(this,k,C).bind(this),A(p(this,k,H).bind(this))}}P=new WeakMap,f=new WeakMap,k=new WeakSet,C=function(t){const e=t.track;if(!e||G(s(this,P),e))return;const n=new F({id:e.id,kind:e.kind,label:e.label??"",language:e.language,type:"vtt"});n[v.native]={track:e},n[v.readyState]=2,n[v.nativeHLS]=!0;let a=0;const I=R=>{if(e.cues)for(let w=a;w<e.cues.length;w++)n.addCue(e.cues[w],R),a++};I(t),e.oncuechange=I,s(this,f).textTracks.add(n,t),n.setMode(e.mode,t)},H=function(){var t;s(this,P).textTracks.onaddtrack=null;for(const e of s(this,f).textTracks){const n=(t=e[v.native])==null?void 0:t.track;n!=null&&n.oncuechange&&(n.oncuechange=null)}};function G(i,t){return Array.from(i.children).find(e=>e.track===t)}var d,y,x,D,L,T;class J{constructor(t,e){r(this,x);r(this,d);r(this,y);r(this,T,(t,e)=>{s(this,y).notify("picture-in-picture-change",t,e)});c(this,d,t),c(this,y,e),new W(t).add("enterpictureinpicture",p(this,x,D).bind(this)).add("leavepictureinpicture",p(this,x,L).bind(this))}get active(){return document.pictureInPictureElement===s(this,d)}get supported(){return S(s(this,d))}async enter(){return s(this,d).requestPictureInPicture()}exit(){return document.exitPictureInPicture()}}d=new WeakMap,y=new WeakMap,x=new WeakSet,D=function(t){s(this,T).call(this,!0,t)},L=function(t){s(this,T).call(this,!1,t)},T=new WeakMap;var l,g,o,M,O;class K{constructor(t,e){r(this,M);r(this,l);r(this,g);r(this,o,"inline");c(this,l,t),c(this,g,e),Y(t,"webkitpresentationmodechanged",p(this,M,O).bind(this))}get mode(){return s(this,o)}get supported(){return V(s(this,l))}async setPresentationMode(t){s(this,o)!==t&&s(this,l).webkitSetPresentationMode(t)}}l=new WeakMap,g=new WeakMap,o=new WeakMap,M=new WeakSet,O=function(t){var n;const e=s(this,o);c(this,o,s(this,l).webkitPresentationMode),(n=s(this,g).player)==null||n.dispatch(new _("video-presentation-change",{detail:s(this,o),trigger:t})),["fullscreen","picture-in-picture"].forEach(a=>{(s(this,o)===a||e===a)&&s(this,g).notify(`${a}-change`,s(this,o)===a,t)})};var u;class Q{constructor(t){r(this,u);c(this,u,t)}get active(){return s(this,u).mode==="fullscreen"}get supported(){return s(this,u).supported}async enter(){s(this,u).setPresentationMode("fullscreen")}async exit(){s(this,u).setPresentationMode("inline")}}u=new WeakMap;var h;class X{constructor(t){r(this,h);c(this,h,t)}get active(){return s(this,h).mode==="picture-in-picture"}get supported(){return s(this,h).supported}async enter(){s(this,h).setPresentationMode("picture-in-picture")}async exit(){s(this,h).setPresentationMode("inline")}}h=new WeakMap;class st extends j{constructor(e,n){super(e,n);m(this,"$$PROVIDER_TYPE","VIDEO");m(this,"airPlay");m(this,"fullscreen");m(this,"pictureInPicture");N(()=>{if(this.airPlay=new z(e,n),V(e)){const a=new K(e,n);this.fullscreen=new Q(a),this.pictureInPicture=new X(a)}else S(e)&&(this.pictureInPicture=new J(e,n))},this.scope)}get type(){return"video"}setup(){super.setup(),q(this.video)&&new B(this.video,this.ctx),this.ctx.textRenderers.attachVideo(this.video),A(()=>{this.ctx.textRenderers.attachVideo(null)}),this.type==="video"&&this.ctx.notify("provider-setup",this)}get video(){return this.media}}export{st as VideoProvider};
