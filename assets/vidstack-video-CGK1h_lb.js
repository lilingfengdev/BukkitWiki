var O=Object.defineProperty;var E=i=>{throw TypeError(i)};var U=(i,t,e)=>t in i?O(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var m=(i,t,e)=>U(i,typeof t!="symbol"?t+"":t,e),I=(i,t,e)=>t.has(i)||E("Cannot "+e);var s=(i,t,e)=>(I(i,t,"read from private field"),e?e.call(i):t.get(i)),r=(i,t,e)=>t.has(i)?E("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(i):t.set(i,e),c=(i,t,e,n)=>(I(i,t,"write to private field"),n?n.call(i,e):t.set(i,e),e),p=(i,t,e)=>(I(i,t,"access private method"),e);import{N as $,aR as V,aS as S,aT as q,h as A,aU as F,aV as v,a5 as Y,T as _,aD as j}from"./app-nbGwAOr7.js";import{H as z,a as B}from"./vidstack-CSv7rfHP-Cstsf9ma.js";import"./vidstack-DSYpsFWk-L8TZdf1G.js";var P,f,k,C,D;class G{constructor(t,e){r(this,k);r(this,P);r(this,f);c(this,P,t),c(this,f,e),t.textTracks.onaddtrack=p(this,k,C).bind(this),A(p(this,k,D).bind(this))}}P=new WeakMap,f=new WeakMap,k=new WeakSet,C=function(t){const e=t.track;if(!e||J(s(this,P),e))return;const n=new F({id:e.id,kind:e.kind,label:e.label??"",language:e.language,type:"vtt"});n[v.native]={track:e},n[v.readyState]=2,n[v.nativeHLS]=!0;let a=0;const b=N=>{if(e.cues)for(let w=a;w<e.cues.length;w++)n.addCue(e.cues[w],N),a++};b(t),e.oncuechange=b,s(this,f).textTracks.add(n,t),n.setMode(e.mode,t)},D=function(){var t;s(this,P).textTracks.onaddtrack=null;for(const e of s(this,f).textTracks){const n=(t=e[v.native])==null?void 0:t.track;n!=null&&n.oncuechange&&(n.oncuechange=null)}};function J(i,t){return Array.from(i.children).find(e=>e.track===t)}var d,y,x,H,L,T;class K{constructor(t,e){r(this,x);r(this,d);r(this,y);r(this,T,(t,e)=>{s(this,y).notify("picture-in-picture-change",t,e)});c(this,d,t),c(this,y,e),new Y(t).add("enterpictureinpicture",p(this,x,H).bind(this)).add("leavepictureinpicture",p(this,x,L).bind(this))}get active(){return document.pictureInPictureElement===s(this,d)}get supported(){return S(s(this,d))}async enter(){return s(this,d).requestPictureInPicture()}exit(){return document.exitPictureInPicture()}}d=new WeakMap,y=new WeakMap,x=new WeakSet,H=function(t){s(this,T).call(this,!0,t)},L=function(t){s(this,T).call(this,!1,t)},T=new WeakMap;var l,g,o,M,R;class Q{constructor(t,e){r(this,M);r(this,l);r(this,g);r(this,o,"inline");c(this,l,t),c(this,g,e),_(t,"webkitpresentationmodechanged",p(this,M,R).bind(this))}get mode(){return s(this,o)}get supported(){return V(s(this,l))}async setPresentationMode(t){s(this,o)!==t&&s(this,l).webkitSetPresentationMode(t)}}l=new WeakMap,g=new WeakMap,o=new WeakMap,M=new WeakSet,R=function(t){var n;const e=s(this,o);c(this,o,s(this,l).webkitPresentationMode),(n=s(this,g).player)==null||n.dispatch(new j("video-presentation-change",{detail:s(this,o),trigger:t})),["fullscreen","picture-in-picture"].forEach(a=>{(s(this,o)===a||e===a)&&s(this,g).notify(`${a}-change`,s(this,o)===a,t)})};var u;class W{constructor(t){r(this,u);c(this,u,t)}get active(){return s(this,u).mode==="fullscreen"}get supported(){return s(this,u).supported}async enter(){s(this,u).setPresentationMode("fullscreen")}async exit(){s(this,u).setPresentationMode("inline")}}u=new WeakMap;var h;class X{constructor(t){r(this,h);c(this,h,t)}get active(){return s(this,h).mode==="picture-in-picture"}get supported(){return s(this,h).supported}async enter(){s(this,h).setPresentationMode("picture-in-picture")}async exit(){s(this,h).setPresentationMode("inline")}}h=new WeakMap;class st extends z{constructor(e,n){super(e,n);m(this,"$$PROVIDER_TYPE","VIDEO");m(this,"airPlay");m(this,"fullscreen");m(this,"pictureInPicture");$(()=>{if(this.airPlay=new B(e,n),V(e)){const a=new Q(e,n);this.fullscreen=new W(a),this.pictureInPicture=new X(a)}else S(e)&&(this.pictureInPicture=new K(e,n))},this.scope)}get type(){return"video"}setup(){super.setup(),q(this.video)&&new G(this.video,this.ctx),this.ctx.textRenderers.attachVideo(this.video),A(()=>{this.ctx.textRenderers.attachVideo(null)}),this.type==="video"&&this.ctx.notify("provider-setup",this)}get video(){return this.media}}export{st as VideoProvider};