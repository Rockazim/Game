import{io as Zl}from"https://cdn.socket.io/4.6.2/socket.io.esm.min.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const yo="167",Jl=0,Yo=1,jl=2,rl=1,ol=2,sn=3,yn=0,Te=1,Ue=2,vn=0,ui=1,Lr=2,Ko=3,$o=4,Ql=5,Dn=100,tc=101,ec=102,nc=103,ic=104,sc=200,rc=201,oc=202,ac=203,Ir=204,Dr=205,lc=206,cc=207,hc=208,uc=209,dc=210,fc=211,pc=212,mc=213,gc=214,_c=0,vc=1,xc=2,Ls=3,yc=4,Mc=5,Sc=6,Ec=7,Mo=0,wc=1,bc=2,xn=0,Tc=1,Ac=2,Cc=3,Rc=4,Pc=5,Lc=6,Ic=7,al=300,mi=301,gi=302,Ur=303,Nr=304,ks=306,Fr=1e3,Nn=1001,Or=1002,Ne=1003,Dc=1004,Ki=1005,ke=1006,Js=1007,Fn=1008,ln=1009,ll=1010,cl=1011,Oi=1012,So=1013,zn=1014,rn=1015,Gi=1016,Eo=1017,wo=1018,_i=1020,hl=35902,ul=1021,dl=1022,Ge=1023,fl=1024,pl=1025,di=1026,vi=1027,ml=1028,bo=1029,gl=1030,To=1031,Ao=1033,bs=33776,Ts=33777,As=33778,Cs=33779,zr=35840,Br=35841,kr=35842,Hr=35843,Gr=36196,Vr=37492,Wr=37496,Xr=37808,qr=37809,Yr=37810,Kr=37811,$r=37812,Zr=37813,Jr=37814,jr=37815,Qr=37816,to=37817,eo=37818,no=37819,io=37820,so=37821,Rs=36492,ro=36494,oo=36495,_l=36283,ao=36284,lo=36285,co=36286,Uc=3200,Nc=3201,Co=0,Fc=1,_n="",qe="srgb",Sn="srgb-linear",Ro="display-p3",Hs="display-p3-linear",Is="linear",te="srgb",Ds="rec709",Us="p3",Gn=7680,Zo=519,Oc=512,zc=513,Bc=514,vl=515,kc=516,Hc=517,Gc=518,Vc=519,ho=35044,Jo="300 es",on=2e3,Ns=2001;class yi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],js=Math.PI/180,uo=180/Math.PI;function an(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ye[s&255]+ye[s>>8&255]+ye[s>>16&255]+ye[s>>24&255]+"-"+ye[t&255]+ye[t>>8&255]+"-"+ye[t>>16&15|64]+ye[t>>24&255]+"-"+ye[e&63|128]+ye[e>>8&255]+"-"+ye[e>>16&255]+ye[e>>24&255]+ye[n&255]+ye[n>>8&255]+ye[n>>16&255]+ye[n>>24&255]).toLowerCase()}function xe(s,t,e){return Math.max(t,Math.min(e,s))}function Wc(s,t){return(s%t+t)%t}function Qs(s,t,e){return(1-e)*s+e*t}function Ke(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Qt(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class it{constructor(t=0,e=0){it.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Bt{constructor(t,e,n,i,r,o,a,l,c){Bt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],S=i[1],y=i[4],E=i[7],N=i[2],A=i[5],R=i[8];return r[0]=o*_+a*S+l*N,r[3]=o*m+a*y+l*A,r[6]=o*p+a*E+l*R,r[1]=c*_+h*S+u*N,r[4]=c*m+h*y+u*A,r[7]=c*p+h*E+u*R,r[2]=d*_+f*S+g*N,r[5]=d*m+f*y+g*A,r[8]=d*p+f*E+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=e*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=d*_,t[4]=(h*e-i*l)*_,t[5]=(i*r-a*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(tr.makeScale(t,e)),this}rotate(t){return this.premultiply(tr.makeRotation(-t)),this}translate(t,e){return this.premultiply(tr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const tr=new Bt;function xl(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Fs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Xc(){const s=Fs("canvas");return s.style.display="block",s}const jo={};function fi(s){s in jo||(jo[s]=!0,console.warn(s))}function qc(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Qo=new Bt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ta=new Bt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ei={[Sn]:{transfer:Is,primaries:Ds,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[qe]:{transfer:te,primaries:Ds,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Hs]:{transfer:Is,primaries:Us,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(ta),fromReference:s=>s.applyMatrix3(Qo)},[Ro]:{transfer:te,primaries:Us,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(ta),fromReference:s=>s.applyMatrix3(Qo).convertLinearToSRGB()}},Yc=new Set([Sn,Hs]),Jt={enabled:!0,_workingColorSpace:Sn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Yc.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=Ei[t].toReference,i=Ei[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return Ei[s].primaries},getTransfer:function(s){return s===_n?Is:Ei[s].transfer},getLuminanceCoefficients:function(s,t=this._workingColorSpace){return s.fromArray(Ei[t].luminanceCoefficients)}};function pi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function er(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Vn;class Kc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Vn===void 0&&(Vn=Fs("canvas")),Vn.width=t.width,Vn.height=t.height;const n=Vn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Vn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Fs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=pi(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(pi(e[n]/255)*255):e[n]=pi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let $c=0;class yl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$c++}),this.uuid=an(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(nr(i[o].image)):r.push(nr(i[o]))}else r=nr(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function nr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Kc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Zc=0;class be extends yi{constructor(t=be.DEFAULT_IMAGE,e=be.DEFAULT_MAPPING,n=Nn,i=Nn,r=ke,o=Fn,a=Ge,l=ln,c=be.DEFAULT_ANISOTROPY,h=_n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zc++}),this.uuid=an(),this.name="",this.source=new yl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==al)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Fr:t.x=t.x-Math.floor(t.x);break;case Nn:t.x=t.x<0?0:1;break;case Or:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Fr:t.y=t.y-Math.floor(t.y);break;case Nn:t.y=t.y<0?0:1;break;case Or:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}be.DEFAULT_IMAGE=null;be.DEFAULT_MAPPING=al;be.DEFAULT_ANISOTROPY=1;class de{constructor(t=0,e=0,n=0,i=1){de.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,E=(f+1)/2,N=(p+1)/2,A=(h+d)/4,R=(u+_)/4,D=(g+m)/4;return y>E&&y>N?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=A/n,r=R/n):E>N?E<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(E),n=A/i,r=D/i):N<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(N),n=R/r,i=D/r),this.set(n,i,r,e),this}let S=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(u-_)/S,this.z=(d-h)/S,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Jc extends yi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ke,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new be(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new yl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bn extends Jc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ml extends be{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class jc extends be{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vi{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==f||h!==g){let m=1-a;const p=l*d+c*f+h*g+u*_,S=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const N=Math.sqrt(y),A=Math.atan2(N,p*S);m=Math.sin(m*A)/N,a=Math.sin(a*A)/N}const E=a*S;if(l=l*m+d*E,c=c*m+f*E,h=h*m+g*E,u=u*m+_*E,m===1-a){const N=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=N,c*=N,h*=N,u*=N}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-a*f,t[e+2]=c*g+h*f+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),d=l(n/2),f=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(t=0,e=0,n=0){C.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ea.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ea.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ir.copy(this).projectOnVector(t),this.sub(ir)}reflect(t){return this.sub(ir.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ir=new C,ea=new Vi;class Wi{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Oe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Oe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Oe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Oe):Oe.fromBufferAttribute(r,o),Oe.applyMatrix4(t.matrixWorld),this.expandByPoint(Oe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),$i.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),$i.copy(n.boundingBox)),$i.applyMatrix4(t.matrixWorld),this.union($i)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Oe),Oe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(wi),Zi.subVectors(this.max,wi),Wn.subVectors(t.a,wi),Xn.subVectors(t.b,wi),qn.subVectors(t.c,wi),un.subVectors(Xn,Wn),dn.subVectors(qn,Xn),bn.subVectors(Wn,qn);let e=[0,-un.z,un.y,0,-dn.z,dn.y,0,-bn.z,bn.y,un.z,0,-un.x,dn.z,0,-dn.x,bn.z,0,-bn.x,-un.y,un.x,0,-dn.y,dn.x,0,-bn.y,bn.x,0];return!sr(e,Wn,Xn,qn,Zi)||(e=[1,0,0,0,1,0,0,0,1],!sr(e,Wn,Xn,qn,Zi))?!1:(Ji.crossVectors(un,dn),e=[Ji.x,Ji.y,Ji.z],sr(e,Wn,Xn,qn,Zi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Oe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Oe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(je[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),je[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),je[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),je[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),je[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),je[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),je[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),je[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(je),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const je=[new C,new C,new C,new C,new C,new C,new C,new C],Oe=new C,$i=new Wi,Wn=new C,Xn=new C,qn=new C,un=new C,dn=new C,bn=new C,wi=new C,Zi=new C,Ji=new C,Tn=new C;function sr(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Tn.fromArray(s,r);const a=i.x*Math.abs(Tn.x)+i.y*Math.abs(Tn.y)+i.z*Math.abs(Tn.z),l=t.dot(Tn),c=e.dot(Tn),h=n.dot(Tn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Qc=new Wi,bi=new C,rr=new C;class Gs{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Qc.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;bi.subVectors(t,this.center);const e=bi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(bi,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(rr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(bi.copy(t.center).add(rr)),this.expandByPoint(bi.copy(t.center).sub(rr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Qe=new C,or=new C,ji=new C,fn=new C,ar=new C,Qi=new C,lr=new C;class Po{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Qe)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Qe.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Qe.copy(this.origin).addScaledVector(this.direction,e),Qe.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){or.copy(t).add(e).multiplyScalar(.5),ji.copy(e).sub(t).normalize(),fn.copy(this.origin).sub(or);const r=t.distanceTo(e)*.5,o=-this.direction.dot(ji),a=fn.dot(this.direction),l=-fn.dot(ji),c=fn.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(or).addScaledVector(ji,d),f}intersectSphere(t,e){Qe.subVectors(t.center,this.origin);const n=Qe.dot(this.direction),i=Qe.dot(Qe)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Qe)!==null}intersectTriangle(t,e,n,i,r){ar.subVectors(e,t),Qi.subVectors(n,t),lr.crossVectors(ar,Qi);let o=this.direction.dot(lr),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;fn.subVectors(this.origin,t);const l=a*this.direction.dot(Qi.crossVectors(fn,Qi));if(l<0)return null;const c=a*this.direction.dot(ar.cross(fn));if(c<0||l+c>o)return null;const h=-a*fn.dot(lr);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ee{constructor(t,e,n,i,r,o,a,l,c,h,u,d,f,g,_,m){ee.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,u,d,f,g,_,m)}set(t,e,n,i,r,o,a,l,c,h,u,d,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ee().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Yn.setFromMatrixColumn(t,0).length(),r=1/Yn.setFromMatrixColumn(t,1).length(),o=1/Yn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d+_*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(th,t,eh)}lookAt(t,e,n){const i=this.elements;return Re.subVectors(t,e),Re.lengthSq()===0&&(Re.z=1),Re.normalize(),pn.crossVectors(n,Re),pn.lengthSq()===0&&(Math.abs(n.z)===1?Re.x+=1e-4:Re.z+=1e-4,Re.normalize(),pn.crossVectors(n,Re)),pn.normalize(),ts.crossVectors(Re,pn),i[0]=pn.x,i[4]=ts.x,i[8]=Re.x,i[1]=pn.y,i[5]=ts.y,i[9]=Re.y,i[2]=pn.z,i[6]=ts.z,i[10]=Re.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],S=n[3],y=n[7],E=n[11],N=n[15],A=i[0],R=i[4],D=i[8],w=i[12],x=i[1],P=i[5],B=i[9],F=i[13],H=i[2],X=i[6],G=i[10],j=i[14],V=i[3],ut=i[7],pt=i[11],mt=i[15];return r[0]=o*A+a*x+l*H+c*V,r[4]=o*R+a*P+l*X+c*ut,r[8]=o*D+a*B+l*G+c*pt,r[12]=o*w+a*F+l*j+c*mt,r[1]=h*A+u*x+d*H+f*V,r[5]=h*R+u*P+d*X+f*ut,r[9]=h*D+u*B+d*G+f*pt,r[13]=h*w+u*F+d*j+f*mt,r[2]=g*A+_*x+m*H+p*V,r[6]=g*R+_*P+m*X+p*ut,r[10]=g*D+_*B+m*G+p*pt,r[14]=g*w+_*F+m*j+p*mt,r[3]=S*A+y*x+E*H+N*V,r[7]=S*R+y*P+E*X+N*ut,r[11]=S*D+y*B+E*G+N*pt,r[15]=S*w+y*F+E*j+N*mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*l*u-i*c*u-r*a*d+n*c*d+i*a*f-n*l*f)+_*(+e*l*f-e*c*d+r*o*d-i*o*f+i*c*h-r*l*h)+m*(+e*c*u-e*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+p*(-i*a*h-e*l*u+e*a*d+i*o*u-n*o*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],S=u*m*c-_*d*c+_*l*f-a*m*f-u*l*p+a*d*p,y=g*d*c-h*m*c-g*l*f+o*m*f+h*l*p-o*d*p,E=h*_*c-g*u*c+g*a*f-o*_*f-h*a*p+o*u*p,N=g*u*l-h*_*l-g*a*d+o*_*d+h*a*m-o*u*m,A=e*S+n*y+i*E+r*N;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return t[0]=S*R,t[1]=(_*d*r-u*m*r-_*i*f+n*m*f+u*i*p-n*d*p)*R,t[2]=(a*m*r-_*l*r+_*i*c-n*m*c-a*i*p+n*l*p)*R,t[3]=(u*l*r-a*d*r-u*i*c+n*d*c+a*i*f-n*l*f)*R,t[4]=y*R,t[5]=(h*m*r-g*d*r+g*i*f-e*m*f-h*i*p+e*d*p)*R,t[6]=(g*l*r-o*m*r-g*i*c+e*m*c+o*i*p-e*l*p)*R,t[7]=(o*d*r-h*l*r+h*i*c-e*d*c-o*i*f+e*l*f)*R,t[8]=E*R,t[9]=(g*u*r-h*_*r-g*n*f+e*_*f+h*n*p-e*u*p)*R,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*p+e*a*p)*R,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*f-e*a*f)*R,t[12]=N*R,t[13]=(h*_*i-g*u*i+g*n*d-e*_*d-h*n*m+e*u*m)*R,t[14]=(g*a*i-o*_*i-g*n*l+e*_*l+o*n*m-e*a*m)*R,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*d+e*a*d)*R,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,_=o*h,m=o*u,p=a*u,S=l*c,y=l*h,E=l*u,N=n.x,A=n.y,R=n.z;return i[0]=(1-(_+p))*N,i[1]=(f+E)*N,i[2]=(g-y)*N,i[3]=0,i[4]=(f-E)*A,i[5]=(1-(d+p))*A,i[6]=(m+S)*A,i[7]=0,i[8]=(g+y)*R,i[9]=(m-S)*R,i[10]=(1-(d+_))*R,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Yn.set(i[0],i[1],i[2]).length();const o=Yn.set(i[4],i[5],i[6]).length(),a=Yn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],ze.copy(this);const c=1/r,h=1/o,u=1/a;return ze.elements[0]*=c,ze.elements[1]*=c,ze.elements[2]*=c,ze.elements[4]*=h,ze.elements[5]*=h,ze.elements[6]*=h,ze.elements[8]*=u,ze.elements[9]*=u,ze.elements[10]*=u,e.setFromRotationMatrix(ze),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=on){const l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let f,g;if(a===on)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ns)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=on){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(o-r),d=(e+t)*c,f=(n+i)*h;let g,_;if(a===on)g=(o+r)*u,_=-2*u;else if(a===Ns)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Yn=new C,ze=new ee,th=new C(0,0,0),eh=new C(1,1,1),pn=new C,ts=new C,Re=new C,na=new ee,ia=new Vi;class We{constructor(t=0,e=0,n=0,i=We.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(xe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-xe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return na.makeRotationFromQuaternion(t),this.setFromRotationMatrix(na,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ia.setFromEuler(this),this.setFromQuaternion(ia,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}We.DEFAULT_ORDER="XYZ";class Lo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let nh=0;const sa=new C,Kn=new Vi,tn=new ee,es=new C,Ti=new C,ih=new C,sh=new Vi,ra=new C(1,0,0),oa=new C(0,1,0),aa=new C(0,0,1),la={type:"added"},rh={type:"removed"},$n={type:"childadded",child:null},cr={type:"childremoved",child:null};class fe extends yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nh++}),this.uuid=an(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fe.DEFAULT_UP.clone();const t=new C,e=new We,n=new Vi,i=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ee},normalMatrix:{value:new Bt}}),this.matrix=new ee,this.matrixWorld=new ee,this.matrixAutoUpdate=fe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Kn.setFromAxisAngle(t,e),this.quaternion.multiply(Kn),this}rotateOnWorldAxis(t,e){return Kn.setFromAxisAngle(t,e),this.quaternion.premultiply(Kn),this}rotateX(t){return this.rotateOnAxis(ra,t)}rotateY(t){return this.rotateOnAxis(oa,t)}rotateZ(t){return this.rotateOnAxis(aa,t)}translateOnAxis(t,e){return sa.copy(t).applyQuaternion(this.quaternion),this.position.add(sa.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ra,t)}translateY(t){return this.translateOnAxis(oa,t)}translateZ(t){return this.translateOnAxis(aa,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(tn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?es.copy(t):es.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ti.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?tn.lookAt(Ti,es,this.up):tn.lookAt(es,Ti,this.up),this.quaternion.setFromRotationMatrix(tn),i&&(tn.extractRotation(i.matrixWorld),Kn.setFromRotationMatrix(tn),this.quaternion.premultiply(Kn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(la),$n.child=t,this.dispatchEvent($n),$n.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(rh),cr.child=t,this.dispatchEvent(cr),cr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),tn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),tn.multiply(t.parent.matrixWorld)),t.applyMatrix4(tn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(la),$n.child=t,this.dispatchEvent($n),$n.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ti,t,ih),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ti,sh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}fe.DEFAULT_UP=new C(0,1,0);fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Be=new C,en=new C,hr=new C,nn=new C,Zn=new C,Jn=new C,ca=new C,ur=new C,dr=new C,fr=new C;class He{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Be.subVectors(t,e),i.cross(Be);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Be.subVectors(i,e),en.subVectors(n,e),hr.subVectors(t,e);const o=Be.dot(Be),a=Be.dot(en),l=Be.dot(hr),c=en.dot(en),h=en.dot(hr),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,nn)===null?!1:nn.x>=0&&nn.y>=0&&nn.x+nn.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,nn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,nn.x),l.addScaledVector(o,nn.y),l.addScaledVector(a,nn.z),l)}static isFrontFacing(t,e,n,i){return Be.subVectors(n,e),en.subVectors(t,e),Be.cross(en).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Be.subVectors(this.c,this.b),en.subVectors(this.a,this.b),Be.cross(en).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return He.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return He.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return He.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return He.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return He.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;Zn.subVectors(i,n),Jn.subVectors(r,n),ur.subVectors(t,n);const l=Zn.dot(ur),c=Jn.dot(ur);if(l<=0&&c<=0)return e.copy(n);dr.subVectors(t,i);const h=Zn.dot(dr),u=Jn.dot(dr);if(h>=0&&u<=h)return e.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Zn,o);fr.subVectors(t,r);const f=Zn.dot(fr),g=Jn.dot(fr);if(g>=0&&f<=g)return e.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Jn,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return ca.subVectors(r,i),a=(u-h)/(u-h+(f-g)),e.copy(i).addScaledVector(ca,a);const p=1/(m+_+d);return o=_*p,a=d*p,e.copy(n).addScaledVector(Zn,o).addScaledVector(Jn,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Sl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mn={h:0,s:0,l:0},ns={h:0,s:0,l:0};function pr(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class kt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Jt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Jt.workingColorSpace){if(t=Wc(t,1),e=xe(e,0,1),n=xe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=pr(o,r,t+1/3),this.g=pr(o,r,t),this.b=pr(o,r,t-1/3)}return Jt.toWorkingColorSpace(this,i),this}setStyle(t,e=qe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=qe){const n=Sl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=pi(t.r),this.g=pi(t.g),this.b=pi(t.b),this}copyLinearToSRGB(t){return this.r=er(t.r),this.g=er(t.g),this.b=er(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=qe){return Jt.fromWorkingColorSpace(Me.copy(this),t),Math.round(xe(Me.r*255,0,255))*65536+Math.round(xe(Me.g*255,0,255))*256+Math.round(xe(Me.b*255,0,255))}getHexString(t=qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.fromWorkingColorSpace(Me.copy(this),e);const n=Me.r,i=Me.g,r=Me.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Jt.workingColorSpace){return Jt.fromWorkingColorSpace(Me.copy(this),e),t.r=Me.r,t.g=Me.g,t.b=Me.b,t}getStyle(t=qe){Jt.fromWorkingColorSpace(Me.copy(this),t);const e=Me.r,n=Me.g,i=Me.b;return t!==qe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(mn),this.setHSL(mn.h+t,mn.s+e,mn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(mn),t.getHSL(ns);const n=Qs(mn.h,ns.h,e),i=Qs(mn.s,ns.s,e),r=Qs(mn.l,ns.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Me=new kt;kt.NAMES=Sl;let oh=0;class En extends yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:oh++}),this.uuid=an(),this.name="",this.type="Material",this.blending=ui,this.side=yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ir,this.blendDst=Dr,this.blendEquation=Dn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=Ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gn,this.stencilZFail=Gn,this.stencilZPass=Gn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ui&&(n.blending=this.blending),this.side!==yn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ir&&(n.blendSrc=this.blendSrc),this.blendDst!==Dr&&(n.blendDst=this.blendDst),this.blendEquation!==Dn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ls&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Gn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Gn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class $e extends En{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new We,this.combine=Mo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const he=new C,is=new it;class Ve{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ho,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=rn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return fi("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)is.fromBufferAttribute(this,e),is.applyMatrix3(t),this.setXY(e,is.x,is.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)he.fromBufferAttribute(this,e),he.applyMatrix3(t),this.setXYZ(e,he.x,he.y,he.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)he.fromBufferAttribute(this,e),he.applyMatrix4(t),this.setXYZ(e,he.x,he.y,he.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)he.fromBufferAttribute(this,e),he.applyNormalMatrix(t),this.setXYZ(e,he.x,he.y,he.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)he.fromBufferAttribute(this,e),he.transformDirection(t),this.setXYZ(e,he.x,he.y,he.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ke(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ke(e,this.array)),e}setX(t,e){return this.normalized&&(e=Qt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ke(e,this.array)),e}setY(t,e){return this.normalized&&(e=Qt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ke(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Qt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ke(e,this.array)),e}setW(t,e){return this.normalized&&(e=Qt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array),i=Qt(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array),i=Qt(i,this.array),r=Qt(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ho&&(t.usage=this.usage),t}}class El extends Ve{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class wl extends Ve{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class oe extends Ve{constructor(t,e,n){super(new Float32Array(t),e,n)}}let ah=0;const Ie=new ee,mr=new fe,jn=new C,Pe=new Wi,Ai=new Wi,ge=new C;class Se extends yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ah++}),this.uuid=an(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(xl(t)?wl:El)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Bt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ie.makeRotationFromQuaternion(t),this.applyMatrix4(Ie),this}rotateX(t){return Ie.makeRotationX(t),this.applyMatrix4(Ie),this}rotateY(t){return Ie.makeRotationY(t),this.applyMatrix4(Ie),this}rotateZ(t){return Ie.makeRotationZ(t),this.applyMatrix4(Ie),this}translate(t,e,n){return Ie.makeTranslation(t,e,n),this.applyMatrix4(Ie),this}scale(t,e,n){return Ie.makeScale(t,e,n),this.applyMatrix4(Ie),this}lookAt(t){return mr.lookAt(t),mr.updateMatrix(),this.applyMatrix4(mr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(jn).negate(),this.translate(jn.x,jn.y,jn.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new oe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Pe.setFromBufferAttribute(r),this.morphTargetsRelative?(ge.addVectors(this.boundingBox.min,Pe.min),this.boundingBox.expandByPoint(ge),ge.addVectors(this.boundingBox.max,Pe.max),this.boundingBox.expandByPoint(ge)):(this.boundingBox.expandByPoint(Pe.min),this.boundingBox.expandByPoint(Pe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){const n=this.boundingSphere.center;if(Pe.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Ai.setFromBufferAttribute(a),this.morphTargetsRelative?(ge.addVectors(Pe.min,Ai.min),Pe.expandByPoint(ge),ge.addVectors(Pe.max,Ai.max),Pe.expandByPoint(ge)):(Pe.expandByPoint(Ai.min),Pe.expandByPoint(Ai.max))}Pe.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)ge.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(ge));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ge.fromBufferAttribute(a,c),l&&(jn.fromBufferAttribute(t,c),ge.add(jn)),i=Math.max(i,n.distanceToSquared(ge))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ve(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<n.count;D++)a[D]=new C,l[D]=new C;const c=new C,h=new C,u=new C,d=new it,f=new it,g=new it,_=new C,m=new C;function p(D,w,x){c.fromBufferAttribute(n,D),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,x),d.fromBufferAttribute(r,D),f.fromBufferAttribute(r,w),g.fromBufferAttribute(r,x),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(P),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),a[D].add(_),a[w].add(_),a[x].add(_),l[D].add(m),l[w].add(m),l[x].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let D=0,w=S.length;D<w;++D){const x=S[D],P=x.start,B=x.count;for(let F=P,H=P+B;F<H;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const y=new C,E=new C,N=new C,A=new C;function R(D){N.fromBufferAttribute(i,D),A.copy(N);const w=a[D];y.copy(w),y.sub(N.multiplyScalar(N.dot(w))).normalize(),E.crossVectors(A,w);const P=E.dot(l[D])<0?-1:1;o.setXYZW(D,y.x,y.y,y.z,P)}for(let D=0,w=S.length;D<w;++D){const x=S[D],P=x.start,B=x.count;for(let F=P,H=P+B;F<H;F+=3)R(t.getX(F+0)),R(t.getX(F+1)),R(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ve(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new C,r=new C,o=new C,a=new C,l=new C,c=new C,h=new C,u=new C;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ge.fromBufferAttribute(t,e),ge.normalize(),t.setXYZ(e,ge.x,ge.y,ge.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new Ve(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Se,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ha=new ee,An=new Po,ss=new Gs,ua=new C,Qn=new C,ti=new C,ei=new C,gr=new C,rs=new C,os=new it,as=new it,ls=new it,da=new C,fa=new C,pa=new C,cs=new C,hs=new C;class Q extends fe{constructor(t=new Se,e=new $e){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){rs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(gr.fromBufferAttribute(u,t),o?rs.addScaledVector(gr,h):rs.addScaledVector(gr.sub(e),h))}e.add(rs)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ss.copy(n.boundingSphere),ss.applyMatrix4(r),An.copy(t.ray).recast(t.near),!(ss.containsPoint(An.origin)===!1&&(An.intersectSphere(ss,ua)===null||An.origin.distanceToSquared(ua)>(t.far-t.near)**2))&&(ha.copy(r).invert(),An.copy(t.ray).applyMatrix4(ha),!(n.boundingBox!==null&&An.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,An)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],S=Math.max(m.start,f.start),y=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let E=S,N=y;E<N;E+=3){const A=a.getX(E),R=a.getX(E+1),D=a.getX(E+2);i=us(this,p,t,n,c,h,u,A,R,D),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const S=a.getX(m),y=a.getX(m+1),E=a.getX(m+2);i=us(this,o,t,n,c,h,u,S,y,E),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],S=Math.max(m.start,f.start),y=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let E=S,N=y;E<N;E+=3){const A=E,R=E+1,D=E+2;i=us(this,p,t,n,c,h,u,A,R,D),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const S=m,y=m+1,E=m+2;i=us(this,o,t,n,c,h,u,S,y,E),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function lh(s,t,e,n,i,r,o,a){let l;if(t.side===Te?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===yn,a),l===null)return null;hs.copy(a),hs.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(hs);return c<e.near||c>e.far?null:{distance:c,point:hs.clone(),object:s}}function us(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,Qn),s.getVertexPosition(l,ti),s.getVertexPosition(c,ei);const h=lh(s,t,e,n,Qn,ti,ei,cs);if(h){i&&(os.fromBufferAttribute(i,a),as.fromBufferAttribute(i,l),ls.fromBufferAttribute(i,c),h.uv=He.getInterpolation(cs,Qn,ti,ei,os,as,ls,new it)),r&&(os.fromBufferAttribute(r,a),as.fromBufferAttribute(r,l),ls.fromBufferAttribute(r,c),h.uv1=He.getInterpolation(cs,Qn,ti,ei,os,as,ls,new it)),o&&(da.fromBufferAttribute(o,a),fa.fromBufferAttribute(o,l),pa.fromBufferAttribute(o,c),h.normal=He.getInterpolation(cs,Qn,ti,ei,da,fa,pa,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new C,materialIndex:0};He.getNormal(Qn,ti,ei,u.normal),h.face=u}return h}class Vt extends Se{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new oe(c,3)),this.setAttribute("normal",new oe(h,3)),this.setAttribute("uv",new oe(u,2));function g(_,m,p,S,y,E,N,A,R,D,w){const x=E/R,P=N/D,B=E/2,F=N/2,H=A/2,X=R+1,G=D+1;let j=0,V=0;const ut=new C;for(let pt=0;pt<G;pt++){const mt=pt*P-F;for(let Ut=0;Ut<X;Ut++){const Gt=Ut*x-B;ut[_]=Gt*S,ut[m]=mt*y,ut[p]=H,c.push(ut.x,ut.y,ut.z),ut[_]=0,ut[m]=0,ut[p]=A>0?1:-1,h.push(ut.x,ut.y,ut.z),u.push(Ut/R),u.push(1-pt/D),j+=1}}for(let pt=0;pt<D;pt++)for(let mt=0;mt<R;mt++){const Ut=d+mt+X*pt,Gt=d+mt+X*(pt+1),W=d+(mt+1)+X*(pt+1),et=d+(mt+1)+X*pt;l.push(Ut,Gt,et),l.push(Gt,W,et),V+=6}a.addGroup(f,V,w),f+=V,d+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function xi(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function we(s){const t={};for(let e=0;e<s.length;e++){const n=xi(s[e]);for(const i in n)t[i]=n[i]}return t}function ch(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function bl(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}const hh={clone:xi,merge:we};var uh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mn extends En{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uh,this.fragmentShader=dh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=xi(t.uniforms),this.uniformsGroups=ch(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Tl extends fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ee,this.projectionMatrix=new ee,this.projectionMatrixInverse=new ee,this.coordinateSystem=on}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const gn=new C,ma=new it,ga=new it;class De extends Tl{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=uo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(js*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return uo*2*Math.atan(Math.tan(js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){gn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(gn.x,gn.y).multiplyScalar(-t/gn.z),gn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gn.x,gn.y).multiplyScalar(-t/gn.z)}getViewSize(t,e){return this.getViewBounds(t,ma,ga),e.subVectors(ga,ma)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(js*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ni=-90,ii=1;class fh extends fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new De(ni,ii,t,e);i.layers=this.layers,this.add(i);const r=new De(ni,ii,t,e);r.layers=this.layers,this.add(r);const o=new De(ni,ii,t,e);o.layers=this.layers,this.add(o);const a=new De(ni,ii,t,e);a.layers=this.layers,this.add(a);const l=new De(ni,ii,t,e);l.layers=this.layers,this.add(l);const c=new De(ni,ii,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===on)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ns)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Al extends be{constructor(t,e,n,i,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:mi,super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ph extends Bn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Al(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ke}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Vt(5,5,5),r=new Mn({name:"CubemapFromEquirect",uniforms:xi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Te,blending:vn});r.uniforms.tEquirect.value=e;const o=new Q(i,r),a=e.minFilter;return e.minFilter===Fn&&(e.minFilter=ke),new fh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}const _r=new C,mh=new C,gh=new Bt;class Ln{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=_r.subVectors(n,e).cross(mh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(_r),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||gh.getNormalMatrix(t),i=this.coplanarPoint(_r).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Cn=new Gs,ds=new C;class Io{constructor(t=new Ln,e=new Ln,n=new Ln,i=new Ln,r=new Ln,o=new Ln){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=on){const n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],S=i[13],y=i[14],E=i[15];if(n[0].setComponents(l-r,d-c,m-f,E-p).normalize(),n[1].setComponents(l+r,d+c,m+f,E+p).normalize(),n[2].setComponents(l+o,d+h,m+g,E+S).normalize(),n[3].setComponents(l-o,d-h,m-g,E-S).normalize(),n[4].setComponents(l-a,d-u,m-_,E-y).normalize(),e===on)n[5].setComponents(l+a,d+u,m+_,E+y).normalize();else if(e===Ns)n[5].setComponents(a,u,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Cn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Cn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Cn)}intersectsSprite(t){return Cn.center.set(0,0,0),Cn.radius=.7071067811865476,Cn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Cn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(ds.x=i.normal.x>0?t.max.x:t.min.x,ds.y=i.normal.y>0?t.max.y:t.min.y,ds.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ds)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Cl(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function _h(s){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l._updateRange,d=l.updateRanges;if(s.bindBuffer(c,a),u.count===-1&&d.length===0&&s.bufferSubData(c,0,h),d.length!==0){for(let f=0,g=d.length;f<g;f++){const _=d[f];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}u.count!==-1&&(s.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count),u.count=-1),l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}class Mi extends Se{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,d=e/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const S=p*d-o;for(let y=0;y<c;y++){const E=y*u-r;g.push(E,-S,0),_.push(0,0,1),m.push(y/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<a;S++){const y=S+c*p,E=S+c*(p+1),N=S+1+c*(p+1),A=S+1+c*p;f.push(y,E,A),f.push(E,N,A)}this.setIndex(f),this.setAttribute("position",new oe(g,3)),this.setAttribute("normal",new oe(_,3)),this.setAttribute("uv",new oe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mi(t.width,t.height,t.widthSegments,t.heightSegments)}}var vh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,yh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Eh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,bh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Th=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ah=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ch=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ph=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Lh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ih=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Dh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Uh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Nh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Oh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Bh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,kh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Hh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Gh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Vh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Wh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kh="gl_FragColor = linearToOutputTexel( gl_FragColor );",$h=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Jh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Qh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,eu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,iu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,su=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ru=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ou=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,au=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,hu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,uu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,du=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,gu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,_u=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,vu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,xu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Su=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Eu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Au=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ru=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Lu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Iu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Du=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Uu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Fu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ou=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ku=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Hu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Yu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ku=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$u=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ju=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ju=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qu=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,td=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ed=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,nd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,id=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,rd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,od=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ad=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ld=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ud=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,dd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,fd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,md=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,gd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _d=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Md=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ed=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,wd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,bd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Td=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ad=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Pd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ld=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Id=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ud=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Fd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Od=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,zd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Bd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Gd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,qd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yd=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$d=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,zt={alphahash_fragment:vh,alphahash_pars_fragment:xh,alphamap_fragment:yh,alphamap_pars_fragment:Mh,alphatest_fragment:Sh,alphatest_pars_fragment:Eh,aomap_fragment:wh,aomap_pars_fragment:bh,batching_pars_vertex:Th,batching_vertex:Ah,begin_vertex:Ch,beginnormal_vertex:Rh,bsdfs:Ph,iridescence_fragment:Lh,bumpmap_pars_fragment:Ih,clipping_planes_fragment:Dh,clipping_planes_pars_fragment:Uh,clipping_planes_pars_vertex:Nh,clipping_planes_vertex:Fh,color_fragment:Oh,color_pars_fragment:zh,color_pars_vertex:Bh,color_vertex:kh,common:Hh,cube_uv_reflection_fragment:Gh,defaultnormal_vertex:Vh,displacementmap_pars_vertex:Wh,displacementmap_vertex:Xh,emissivemap_fragment:qh,emissivemap_pars_fragment:Yh,colorspace_fragment:Kh,colorspace_pars_fragment:$h,envmap_fragment:Zh,envmap_common_pars_fragment:Jh,envmap_pars_fragment:jh,envmap_pars_vertex:Qh,envmap_physical_pars_fragment:hu,envmap_vertex:tu,fog_vertex:eu,fog_pars_vertex:nu,fog_fragment:iu,fog_pars_fragment:su,gradientmap_pars_fragment:ru,lightmap_pars_fragment:ou,lights_lambert_fragment:au,lights_lambert_pars_fragment:lu,lights_pars_begin:cu,lights_toon_fragment:uu,lights_toon_pars_fragment:du,lights_phong_fragment:fu,lights_phong_pars_fragment:pu,lights_physical_fragment:mu,lights_physical_pars_fragment:gu,lights_fragment_begin:_u,lights_fragment_maps:vu,lights_fragment_end:xu,logdepthbuf_fragment:yu,logdepthbuf_pars_fragment:Mu,logdepthbuf_pars_vertex:Su,logdepthbuf_vertex:Eu,map_fragment:wu,map_pars_fragment:bu,map_particle_fragment:Tu,map_particle_pars_fragment:Au,metalnessmap_fragment:Cu,metalnessmap_pars_fragment:Ru,morphinstance_vertex:Pu,morphcolor_vertex:Lu,morphnormal_vertex:Iu,morphtarget_pars_vertex:Du,morphtarget_vertex:Uu,normal_fragment_begin:Nu,normal_fragment_maps:Fu,normal_pars_fragment:Ou,normal_pars_vertex:zu,normal_vertex:Bu,normalmap_pars_fragment:ku,clearcoat_normal_fragment_begin:Hu,clearcoat_normal_fragment_maps:Gu,clearcoat_pars_fragment:Vu,iridescence_pars_fragment:Wu,opaque_fragment:Xu,packing:qu,premultiplied_alpha_fragment:Yu,project_vertex:Ku,dithering_fragment:$u,dithering_pars_fragment:Zu,roughnessmap_fragment:Ju,roughnessmap_pars_fragment:ju,shadowmap_pars_fragment:Qu,shadowmap_pars_vertex:td,shadowmap_vertex:ed,shadowmask_pars_fragment:nd,skinbase_vertex:id,skinning_pars_vertex:sd,skinning_vertex:rd,skinnormal_vertex:od,specularmap_fragment:ad,specularmap_pars_fragment:ld,tonemapping_fragment:cd,tonemapping_pars_fragment:hd,transmission_fragment:ud,transmission_pars_fragment:dd,uv_pars_fragment:fd,uv_pars_vertex:pd,uv_vertex:md,worldpos_vertex:gd,background_vert:_d,background_frag:vd,backgroundCube_vert:xd,backgroundCube_frag:yd,cube_vert:Md,cube_frag:Sd,depth_vert:Ed,depth_frag:wd,distanceRGBA_vert:bd,distanceRGBA_frag:Td,equirect_vert:Ad,equirect_frag:Cd,linedashed_vert:Rd,linedashed_frag:Pd,meshbasic_vert:Ld,meshbasic_frag:Id,meshlambert_vert:Dd,meshlambert_frag:Ud,meshmatcap_vert:Nd,meshmatcap_frag:Fd,meshnormal_vert:Od,meshnormal_frag:zd,meshphong_vert:Bd,meshphong_frag:kd,meshphysical_vert:Hd,meshphysical_frag:Gd,meshtoon_vert:Vd,meshtoon_frag:Wd,points_vert:Xd,points_frag:qd,shadow_vert:Yd,shadow_frag:Kd,sprite_vert:$d,sprite_frag:Zd},ht={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},Ye={basic:{uniforms:we([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:we([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new kt(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:we([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:we([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:we([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new kt(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:we([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:we([ht.points,ht.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:we([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:we([ht.common,ht.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:we([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:we([ht.sprite,ht.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distanceRGBA:{uniforms:we([ht.common,ht.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distanceRGBA_vert,fragmentShader:zt.distanceRGBA_frag},shadow:{uniforms:we([ht.lights,ht.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};Ye.physical={uniforms:we([Ye.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};const fs={r:0,b:0,g:0},Rn=new We,Jd=new ee;function jd(s,t,e,n,i,r,o){const a=new kt(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(S){let y=S.isScene===!0?S.background:null;return y&&y.isTexture&&(y=(S.backgroundBlurriness>0?e:t).get(y)),y}function _(S){let y=!1;const E=g(S);E===null?p(a,l):E&&E.isColor&&(p(E,1),y=!0);const N=s.xr.getEnvironmentBlendMode();N==="additive"?n.buffers.color.setClear(0,0,0,1,o):N==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(S,y){const E=g(y);E&&(E.isCubeTexture||E.mapping===ks)?(h===void 0&&(h=new Q(new Vt(1,1,1),new Mn({name:"BackgroundCubeMaterial",uniforms:xi(Ye.backgroundCube.uniforms),vertexShader:Ye.backgroundCube.vertexShader,fragmentShader:Ye.backgroundCube.fragmentShader,side:Te,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(N,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Rn.copy(y.backgroundRotation),Rn.x*=-1,Rn.y*=-1,Rn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Rn.y*=-1,Rn.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Jd.makeRotationFromEuler(Rn)),h.material.toneMapped=Jt.getTransfer(E.colorSpace)!==te,(u!==E||d!==E.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=E,d=E.version,f=s.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Q(new Mi(2,2),new Mn({name:"BackgroundMaterial",uniforms:xi(Ye.background.uniforms),vertexShader:Ye.background.vertexShader,fragmentShader:Ye.background.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Jt.getTransfer(E.colorSpace)!==te,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||d!==E.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=E,d=E.version,f=s.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,y){S.getRGB(fs,bl(s)),n.buffers.color.setClear(fs.r,fs.g,fs.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(S,y=1){a.set(S),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(a,l)},render:_,addToRenderList:m}}function Qd(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(x,P,B,F,H){let X=!1;const G=u(F,B,P);r!==G&&(r=G,c(r.object)),X=f(x,F,B,H),X&&g(x,F,B,H),H!==null&&t.update(H,s.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,E(x,P,B,F),H!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return s.createVertexArray()}function c(x){return s.bindVertexArray(x)}function h(x){return s.deleteVertexArray(x)}function u(x,P,B){const F=B.wireframe===!0;let H=n[x.id];H===void 0&&(H={},n[x.id]=H);let X=H[P.id];X===void 0&&(X={},H[P.id]=X);let G=X[F];return G===void 0&&(G=d(l()),X[F]=G),G}function d(x){const P=[],B=[],F=[];for(let H=0;H<e;H++)P[H]=0,B[H]=0,F[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:B,attributeDivisors:F,object:x,attributes:{},index:null}}function f(x,P,B,F){const H=r.attributes,X=P.attributes;let G=0;const j=B.getAttributes();for(const V in j)if(j[V].location>=0){const pt=H[V];let mt=X[V];if(mt===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(mt=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(mt=x.instanceColor)),pt===void 0||pt.attribute!==mt||mt&&pt.data!==mt.data)return!0;G++}return r.attributesNum!==G||r.index!==F}function g(x,P,B,F){const H={},X=P.attributes;let G=0;const j=B.getAttributes();for(const V in j)if(j[V].location>=0){let pt=X[V];pt===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(pt=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(pt=x.instanceColor));const mt={};mt.attribute=pt,pt&&pt.data&&(mt.data=pt.data),H[V]=mt,G++}r.attributes=H,r.attributesNum=G,r.index=F}function _(){const x=r.newAttributes;for(let P=0,B=x.length;P<B;P++)x[P]=0}function m(x){p(x,0)}function p(x,P){const B=r.newAttributes,F=r.enabledAttributes,H=r.attributeDivisors;B[x]=1,F[x]===0&&(s.enableVertexAttribArray(x),F[x]=1),H[x]!==P&&(s.vertexAttribDivisor(x,P),H[x]=P)}function S(){const x=r.newAttributes,P=r.enabledAttributes;for(let B=0,F=P.length;B<F;B++)P[B]!==x[B]&&(s.disableVertexAttribArray(B),P[B]=0)}function y(x,P,B,F,H,X,G){G===!0?s.vertexAttribIPointer(x,P,B,H,X):s.vertexAttribPointer(x,P,B,F,H,X)}function E(x,P,B,F){_();const H=F.attributes,X=B.getAttributes(),G=P.defaultAttributeValues;for(const j in X){const V=X[j];if(V.location>=0){let ut=H[j];if(ut===void 0&&(j==="instanceMatrix"&&x.instanceMatrix&&(ut=x.instanceMatrix),j==="instanceColor"&&x.instanceColor&&(ut=x.instanceColor)),ut!==void 0){const pt=ut.normalized,mt=ut.itemSize,Ut=t.get(ut);if(Ut===void 0)continue;const Gt=Ut.buffer,W=Ut.type,et=Ut.bytesPerElement,gt=W===s.INT||W===s.UNSIGNED_INT||ut.gpuType===So;if(ut.isInterleavedBufferAttribute){const lt=ut.data,At=lt.stride,Nt=ut.offset;if(lt.isInstancedInterleavedBuffer){for(let Lt=0;Lt<V.locationSize;Lt++)p(V.location+Lt,lt.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Lt=0;Lt<V.locationSize;Lt++)m(V.location+Lt);s.bindBuffer(s.ARRAY_BUFFER,Gt);for(let Lt=0;Lt<V.locationSize;Lt++)y(V.location+Lt,mt/V.locationSize,W,pt,At*et,(Nt+mt/V.locationSize*Lt)*et,gt)}else{if(ut.isInstancedBufferAttribute){for(let lt=0;lt<V.locationSize;lt++)p(V.location+lt,ut.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let lt=0;lt<V.locationSize;lt++)m(V.location+lt);s.bindBuffer(s.ARRAY_BUFFER,Gt);for(let lt=0;lt<V.locationSize;lt++)y(V.location+lt,mt/V.locationSize,W,pt,mt*et,mt/V.locationSize*lt*et,gt)}}else if(G!==void 0){const pt=G[j];if(pt!==void 0)switch(pt.length){case 2:s.vertexAttrib2fv(V.location,pt);break;case 3:s.vertexAttrib3fv(V.location,pt);break;case 4:s.vertexAttrib4fv(V.location,pt);break;default:s.vertexAttrib1fv(V.location,pt)}}}}S()}function N(){D();for(const x in n){const P=n[x];for(const B in P){const F=P[B];for(const H in F)h(F[H].object),delete F[H];delete P[B]}delete n[x]}}function A(x){if(n[x.id]===void 0)return;const P=n[x.id];for(const B in P){const F=P[B];for(const H in F)h(F[H].object),delete F[H];delete P[B]}delete n[x.id]}function R(x){for(const P in n){const B=n[P];if(B[x.id]===void 0)continue;const F=B[x.id];for(const H in F)h(F[H].object),delete F[H];delete B[x.id]}}function D(){w(),o=!0,r!==i&&(r=i,c(r.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:D,resetDefaultState:w,dispose:N,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function tf(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_];for(let _=0;_<d.length;_++)e.update(g,n,d[_])}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function ef(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(A){return!(A!==Ge&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const R=A===Gi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==ln&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==rn&&!R)}function l(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),p=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),E=f>0,N=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:p,maxVaryings:S,maxFragmentUniforms:y,vertexTextures:E,maxSamples:N}}function nf(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new Ln,a=new Bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{const S=r?0:n,y=S*4;let E=p.clippingState||null;l.value=E,E=h(g,d,y,f);for(let N=0;N!==y;++N)E[N]=e[N];p.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,E=f;y!==_;++y,E+=4)o.copy(u[y]).applyMatrix4(S,a),o.normal.toArray(m,E),m[E+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function sf(s){let t=new WeakMap;function e(o,a){return a===Ur?o.mapping=mi:a===Nr&&(o.mapping=gi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ur||a===Nr)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new ph(l.height);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Rl extends Tl{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ci=4,_a=[.125,.215,.35,.446,.526,.582],Un=20,vr=new Rl,va=new kt;let xr=null,yr=0,Mr=0,Sr=!1;const In=(1+Math.sqrt(5))/2,si=1/In,xa=[new C(-In,si,0),new C(In,si,0),new C(-si,0,In),new C(si,0,In),new C(0,In,-si),new C(0,In,si),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)];class ya{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){xr=this._renderer.getRenderTarget(),yr=this._renderer.getActiveCubeFace(),Mr=this._renderer.getActiveMipmapLevel(),Sr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ea(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(xr,yr,Mr),this._renderer.xr.enabled=Sr,t.scissorTest=!1,ps(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===mi||t.mapping===gi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),xr=this._renderer.getRenderTarget(),yr=this._renderer.getActiveCubeFace(),Mr=this._renderer.getActiveMipmapLevel(),Sr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ke,minFilter:ke,generateMipmaps:!1,type:Gi,format:Ge,colorSpace:Sn,depthBuffer:!1},i=Ma(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ma(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rf(r)),this._blurMaterial=of(r,t,e)}return i}_compileMaterial(t){const e=new Q(this._lodPlanes[0],t);this._renderer.compile(e,vr)}_sceneToCubeUV(t,e,n,i){const a=new De(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(va),h.toneMapping=xn,h.autoClear=!1;const f=new $e({name:"PMREM.Background",side:Te,depthWrite:!1,depthTest:!1}),g=new Q(new Vt,f);let _=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(va),_=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):S===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const y=this._cubeSize;ps(i,S*y,p>2?y:0,y,y),h.setRenderTarget(i),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===mi||t.mapping===gi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ea()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sa());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Q(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;ps(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,vr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=xa[(i-r-1)%xa.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Q(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Un-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Un;m>Un&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Un}`);const p=[];let S=0;for(let R=0;R<Un;++R){const D=R/_,w=Math.exp(-D*D/2);p.push(w),R===0?S+=w:R<m&&(S+=2*w)}for(let R=0;R<p.length;R++)p[R]=p[R]/S;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const E=this._sizeLods[i],N=3*E*(i>y-ci?i-y+ci:0),A=4*(this._cubeSize-E);ps(e,N,A,3*E,2*E),l.setRenderTarget(e),l.render(u,vr)}}function rf(s){const t=[],e=[],n=[];let i=s;const r=s-ci+1+_a.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>s-ci?l=_a[o-s+ci-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,S=new Float32Array(_*g*f),y=new Float32Array(m*g*f),E=new Float32Array(p*g*f);for(let A=0;A<f;A++){const R=A%3*2/3-1,D=A>2?0:-1,w=[R,D,0,R+2/3,D,0,R+2/3,D+1,0,R,D,0,R+2/3,D+1,0,R,D+1,0];S.set(w,_*g*A),y.set(d,m*g*A);const x=[A,A,A,A,A,A];E.set(x,p*g*A)}const N=new Se;N.setAttribute("position",new Ve(S,_)),N.setAttribute("uv",new Ve(y,m)),N.setAttribute("faceIndex",new Ve(E,p)),t.push(N),i>ci&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ma(s,t,e){const n=new Bn(s,t,e);return n.texture.mapping=ks,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ps(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function of(s,t,e){const n=new Float32Array(Un),i=new C(0,1,0);return new Mn({name:"SphericalGaussianBlur",defines:{n:Un,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Do(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function Sa(){return new Mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Do(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function Ea(){return new Mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Do(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function Do(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function af(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ur||l===Nr,h=l===mi||l===gi;if(c||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new ya(s)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new ya(s)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function lf(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&fi("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function cf(s,t,e,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}d.removeEventListener("dispose",o),delete i[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],s.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],s.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const S=f.array;_=f.version;for(let y=0,E=S.length;y<E;y+=3){const N=S[y+0],A=S[y+1],R=S[y+2];d.push(N,A,A,R,R,N)}}else if(g!==void 0){const S=g.array;_=g.version;for(let y=0,E=S.length/3-1;y<E;y+=3){const N=y+0,A=y+1,R=y+2;d.push(N,A,A,R,R,N)}}else return;const m=new(xl(d)?wl:El)(d,1);m.version=_;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function hf(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*o),e.update(f,n,1)}function c(d,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,d*o,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let S=0;S<g;S++)p+=f[S];for(let S=0;S<_.length;S++)e.update(p,n,_[S])}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function uf(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function df(s,t,e){const n=new WeakMap,i=new de;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let w=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let y=0;f===!0&&(y=1),g===!0&&(y=2),_===!0&&(y=3);let E=a.attributes.position.count*y,N=1;E>t.maxTextureSize&&(N=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);const A=new Float32Array(E*N*4*u),R=new Ml(A,E,N,u);R.type=rn,R.needsUpdate=!0;const D=y*4;for(let x=0;x<u;x++){const P=m[x],B=p[x],F=S[x],H=E*N*4*x;for(let X=0;X<P.count;X++){const G=X*D;f===!0&&(i.fromBufferAttribute(P,X),A[H+G+0]=i.x,A[H+G+1]=i.y,A[H+G+2]=i.z,A[H+G+3]=0),g===!0&&(i.fromBufferAttribute(B,X),A[H+G+4]=i.x,A[H+G+5]=i.y,A[H+G+6]=i.z,A[H+G+7]=0),_===!0&&(i.fromBufferAttribute(F,X),A[H+G+8]=i.x,A[H+G+9]=i.y,A[H+G+10]=i.z,A[H+G+11]=F.itemSize===4?i.w:1)}}d={count:u,texture:R,size:new it(E,N)},n.set(a,d),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];const g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function ff(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class Pl extends be{constructor(t,e,n,i,r,o,a,l,c,h=di){if(h!==di&&h!==vi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===di&&(n=zn),n===void 0&&h===vi&&(n=_i),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ne,this.minFilter=l!==void 0?l:Ne,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Ll=new be,wa=new Pl(1,1),Il=new Ml,Dl=new jc,Ul=new Al,ba=[],Ta=[],Aa=new Float32Array(16),Ca=new Float32Array(9),Ra=new Float32Array(4);function Si(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=ba[i];if(r===void 0&&(r=new Float32Array(i),ba[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function pe(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function me(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Vs(s,t){let e=Ta[t];e===void 0&&(e=new Int32Array(t),Ta[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function pf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function mf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;s.uniform2fv(this.addr,t),me(e,t)}}function gf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(pe(e,t))return;s.uniform3fv(this.addr,t),me(e,t)}}function _f(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;s.uniform4fv(this.addr,t),me(e,t)}}function vf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;Ra.set(n),s.uniformMatrix2fv(this.addr,!1,Ra),me(e,n)}}function xf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;Ca.set(n),s.uniformMatrix3fv(this.addr,!1,Ca),me(e,n)}}function yf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;Aa.set(n),s.uniformMatrix4fv(this.addr,!1,Aa),me(e,n)}}function Mf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Sf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;s.uniform2iv(this.addr,t),me(e,t)}}function Ef(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;s.uniform3iv(this.addr,t),me(e,t)}}function wf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;s.uniform4iv(this.addr,t),me(e,t)}}function bf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Tf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;s.uniform2uiv(this.addr,t),me(e,t)}}function Af(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;s.uniform3uiv(this.addr,t),me(e,t)}}function Cf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;s.uniform4uiv(this.addr,t),me(e,t)}}function Rf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(wa.compareFunction=vl,r=wa):r=Ll,e.setTexture2D(t||r,i)}function Pf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Dl,i)}function Lf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Ul,i)}function If(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Il,i)}function Df(s){switch(s){case 5126:return pf;case 35664:return mf;case 35665:return gf;case 35666:return _f;case 35674:return vf;case 35675:return xf;case 35676:return yf;case 5124:case 35670:return Mf;case 35667:case 35671:return Sf;case 35668:case 35672:return Ef;case 35669:case 35673:return wf;case 5125:return bf;case 36294:return Tf;case 36295:return Af;case 36296:return Cf;case 35678:case 36198:case 36298:case 36306:case 35682:return Rf;case 35679:case 36299:case 36307:return Pf;case 35680:case 36300:case 36308:case 36293:return Lf;case 36289:case 36303:case 36311:case 36292:return If}}function Uf(s,t){s.uniform1fv(this.addr,t)}function Nf(s,t){const e=Si(t,this.size,2);s.uniform2fv(this.addr,e)}function Ff(s,t){const e=Si(t,this.size,3);s.uniform3fv(this.addr,e)}function Of(s,t){const e=Si(t,this.size,4);s.uniform4fv(this.addr,e)}function zf(s,t){const e=Si(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Bf(s,t){const e=Si(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function kf(s,t){const e=Si(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Hf(s,t){s.uniform1iv(this.addr,t)}function Gf(s,t){s.uniform2iv(this.addr,t)}function Vf(s,t){s.uniform3iv(this.addr,t)}function Wf(s,t){s.uniform4iv(this.addr,t)}function Xf(s,t){s.uniform1uiv(this.addr,t)}function qf(s,t){s.uniform2uiv(this.addr,t)}function Yf(s,t){s.uniform3uiv(this.addr,t)}function Kf(s,t){s.uniform4uiv(this.addr,t)}function $f(s,t,e){const n=this.cache,i=t.length,r=Vs(e,i);pe(n,r)||(s.uniform1iv(this.addr,r),me(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Ll,r[o])}function Zf(s,t,e){const n=this.cache,i=t.length,r=Vs(e,i);pe(n,r)||(s.uniform1iv(this.addr,r),me(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Dl,r[o])}function Jf(s,t,e){const n=this.cache,i=t.length,r=Vs(e,i);pe(n,r)||(s.uniform1iv(this.addr,r),me(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Ul,r[o])}function jf(s,t,e){const n=this.cache,i=t.length,r=Vs(e,i);pe(n,r)||(s.uniform1iv(this.addr,r),me(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Il,r[o])}function Qf(s){switch(s){case 5126:return Uf;case 35664:return Nf;case 35665:return Ff;case 35666:return Of;case 35674:return zf;case 35675:return Bf;case 35676:return kf;case 5124:case 35670:return Hf;case 35667:case 35671:return Gf;case 35668:case 35672:return Vf;case 35669:case 35673:return Wf;case 5125:return Xf;case 36294:return qf;case 36295:return Yf;case 36296:return Kf;case 35678:case 36198:case 36298:case 36306:case 35682:return $f;case 35679:case 36299:case 36307:return Zf;case 35680:case 36300:case 36308:case 36293:return Jf;case 36289:case 36303:case 36311:case 36292:return jf}}class tp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Df(e.type)}}class ep{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Qf(e.type)}}class np{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const Er=/(\w+)(\])?(\[|\.)?/g;function Pa(s,t){s.seq.push(t),s.map[t.id]=t}function ip(s,t,e){const n=s.name,i=n.length;for(Er.lastIndex=0;;){const r=Er.exec(n),o=Er.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Pa(e,c===void 0?new tp(a,s,t):new ep(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new np(a),Pa(e,u)),e=u}}}class Ps{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);ip(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function La(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const sp=37297;let rp=0;function op(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function ap(s){const t=Jt.getPrimaries(Jt.workingColorSpace),e=Jt.getPrimaries(s);let n;switch(t===e?n="":t===Us&&e===Ds?n="LinearDisplayP3ToLinearSRGB":t===Ds&&e===Us&&(n="LinearSRGBToLinearDisplayP3"),s){case Sn:case Hs:return[n,"LinearTransferOETF"];case qe:case Ro:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Ia(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+op(s.getShaderSource(t),o)}else return i}function lp(s,t){const e=ap(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function cp(s,t){let e;switch(t){case Tc:e="Linear";break;case Ac:e="Reinhard";break;case Cc:e="OptimizedCineon";break;case Rc:e="ACESFilmic";break;case Lc:e="AgX";break;case Ic:e="Neutral";break;case Pc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ms=new C;function hp(){Jt.getLuminanceCoefficients(ms);const s=ms.x.toFixed(4),t=ms.y.toFixed(4),e=ms.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function up(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ii).join(`
`)}function dp(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function fp(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Ii(s){return s!==""}function Da(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ua(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const pp=/^[ \t]*#include +<([\w\d./]+)>/gm;function fo(s){return s.replace(pp,gp)}const mp=new Map;function gp(s,t){let e=zt[t];if(e===void 0){const n=mp.get(t);if(n!==void 0)e=zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return fo(e)}const _p=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Na(s){return s.replace(_p,vp)}function vp(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Fa(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function xp(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===rl?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===ol?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===sn&&(t="SHADOWMAP_TYPE_VSM"),t}function yp(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case mi:case gi:t="ENVMAP_TYPE_CUBE";break;case ks:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Mp(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case gi:t="ENVMAP_MODE_REFRACTION";break}return t}function Sp(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Mo:t="ENVMAP_BLENDING_MULTIPLY";break;case wc:t="ENVMAP_BLENDING_MIX";break;case bc:t="ENVMAP_BLENDING_ADD";break}return t}function Ep(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function wp(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=xp(e),c=yp(e),h=Mp(e),u=Sp(e),d=Ep(e),f=up(e),g=dp(r),_=i.createProgram();let m,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ii).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ii).join(`
`),p.length>0&&(p+=`
`)):(m=[Fa(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ii).join(`
`),p=[Fa(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==xn?"#define TONE_MAPPING":"",e.toneMapping!==xn?zt.tonemapping_pars_fragment:"",e.toneMapping!==xn?cp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,lp("linearToOutputTexel",e.outputColorSpace),hp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ii).join(`
`)),o=fo(o),o=Da(o,e),o=Ua(o,e),a=fo(a),a=Da(a,e),a=Ua(a,e),o=Na(o),a=Na(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Jo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Jo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=S+m+o,E=S+p+a,N=La(i,i.VERTEX_SHADER,y),A=La(i,i.FRAGMENT_SHADER,E);i.attachShader(_,N),i.attachShader(_,A),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function R(P){if(s.debug.checkShaderErrors){const B=i.getProgramInfoLog(_).trim(),F=i.getShaderInfoLog(N).trim(),H=i.getShaderInfoLog(A).trim();let X=!0,G=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(X=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,N,A);else{const j=Ia(i,N,"vertex"),V=Ia(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+B+`
`+j+`
`+V)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(F===""||H==="")&&(G=!1);G&&(P.diagnostics={runnable:X,programLog:B,vertexShader:{log:F,prefix:m},fragmentShader:{log:H,prefix:p}})}i.deleteShader(N),i.deleteShader(A),D=new Ps(i,_),w=fp(i,_)}let D;this.getUniforms=function(){return D===void 0&&R(this),D};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(_,sp)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=rp++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=N,this.fragmentShader=A,this}let bp=0;class Tp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Ap(t),e.set(t,n)),n}}class Ap{constructor(t){this.id=bp++,this.code=t,this.usedTimes=0}}function Cp(s,t,e,n,i,r,o){const a=new Lo,l=new Tp,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,x,P,B,F){const H=B.fog,X=F.geometry,G=w.isMeshStandardMaterial?B.environment:null,j=(w.isMeshStandardMaterial?e:t).get(w.envMap||G),V=j&&j.mapping===ks?j.image.height:null,ut=g[w.type];w.precision!==null&&(f=i.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));const pt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,mt=pt!==void 0?pt.length:0;let Ut=0;X.morphAttributes.position!==void 0&&(Ut=1),X.morphAttributes.normal!==void 0&&(Ut=2),X.morphAttributes.color!==void 0&&(Ut=3);let Gt,W,et,gt;if(ut){const Yt=Ye[ut];Gt=Yt.vertexShader,W=Yt.fragmentShader}else Gt=w.vertexShader,W=w.fragmentShader,l.update(w),et=l.getVertexShaderID(w),gt=l.getFragmentShaderID(w);const lt=s.getRenderTarget(),At=F.isInstancedMesh===!0,Nt=F.isBatchedMesh===!0,Lt=!!w.map,qt=!!w.matcap,b=!!j,st=!!w.aoMap,tt=!!w.lightMap,dt=!!w.bumpMap,q=!!w.normalMap,Tt=!!w.displacementMap,ft=!!w.emissiveMap,yt=!!w.metalnessMap,T=!!w.roughnessMap,v=w.anisotropy>0,z=w.clearcoat>0,J=w.dispersion>0,Z=w.iridescence>0,$=w.sheen>0,bt=w.transmission>0,ct=v&&!!w.anisotropyMap,xt=z&&!!w.clearcoatMap,Ot=z&&!!w.clearcoatNormalMap,nt=z&&!!w.clearcoatRoughnessMap,vt=Z&&!!w.iridescenceMap,Wt=Z&&!!w.iridescenceThicknessMap,Dt=$&&!!w.sheenColorMap,Mt=$&&!!w.sheenRoughnessMap,Ft=!!w.specularMap,Ht=!!w.specularColorMap,ne=!!w.specularIntensityMap,L=bt&&!!w.transmissionMap,rt=bt&&!!w.thicknessMap,Y=!!w.gradientMap,K=!!w.alphaMap,at=w.alphaTest>0,Rt=!!w.alphaHash,Xt=!!w.extensions;let le=xn;w.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(le=s.toneMapping);const _e={shaderID:ut,shaderType:w.type,shaderName:w.name,vertexShader:Gt,fragmentShader:W,defines:w.defines,customVertexShaderID:et,customFragmentShaderID:gt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:Nt,batchingColor:Nt&&F._colorsTexture!==null,instancing:At,instancingColor:At&&F.instanceColor!==null,instancingMorph:At&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:lt===null?s.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:Sn,alphaToCoverage:!!w.alphaToCoverage,map:Lt,matcap:qt,envMap:b,envMapMode:b&&j.mapping,envMapCubeUVHeight:V,aoMap:st,lightMap:tt,bumpMap:dt,normalMap:q,displacementMap:d&&Tt,emissiveMap:ft,normalMapObjectSpace:q&&w.normalMapType===Fc,normalMapTangentSpace:q&&w.normalMapType===Co,metalnessMap:yt,roughnessMap:T,anisotropy:v,anisotropyMap:ct,clearcoat:z,clearcoatMap:xt,clearcoatNormalMap:Ot,clearcoatRoughnessMap:nt,dispersion:J,iridescence:Z,iridescenceMap:vt,iridescenceThicknessMap:Wt,sheen:$,sheenColorMap:Dt,sheenRoughnessMap:Mt,specularMap:Ft,specularColorMap:Ht,specularIntensityMap:ne,transmission:bt,transmissionMap:L,thicknessMap:rt,gradientMap:Y,opaque:w.transparent===!1&&w.blending===ui&&w.alphaToCoverage===!1,alphaMap:K,alphaTest:at,alphaHash:Rt,combine:w.combine,mapUv:Lt&&_(w.map.channel),aoMapUv:st&&_(w.aoMap.channel),lightMapUv:tt&&_(w.lightMap.channel),bumpMapUv:dt&&_(w.bumpMap.channel),normalMapUv:q&&_(w.normalMap.channel),displacementMapUv:Tt&&_(w.displacementMap.channel),emissiveMapUv:ft&&_(w.emissiveMap.channel),metalnessMapUv:yt&&_(w.metalnessMap.channel),roughnessMapUv:T&&_(w.roughnessMap.channel),anisotropyMapUv:ct&&_(w.anisotropyMap.channel),clearcoatMapUv:xt&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:Ot&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:vt&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:Wt&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&_(w.sheenRoughnessMap.channel),specularMapUv:Ft&&_(w.specularMap.channel),specularColorMapUv:Ht&&_(w.specularColorMap.channel),specularIntensityMapUv:ne&&_(w.specularIntensityMap.channel),transmissionMapUv:L&&_(w.transmissionMap.channel),thicknessMapUv:rt&&_(w.thicknessMap.channel),alphaMapUv:K&&_(w.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(q||v),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!X.attributes.uv&&(Lt||K),fog:!!H,useFog:w.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:F.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:mt,morphTextureStride:Ut,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:le,decodeVideoTexture:Lt&&w.map.isVideoTexture===!0&&Jt.getTransfer(w.map.colorSpace)===te,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ue,flipSided:w.side===Te,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Xt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xt&&w.extensions.multiDraw===!0||Nt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return _e.vertexUv1s=c.has(1),_e.vertexUv2s=c.has(2),_e.vertexUv3s=c.has(3),c.clear(),_e}function p(w){const x=[];if(w.shaderID?x.push(w.shaderID):(x.push(w.customVertexShaderID),x.push(w.customFragmentShaderID)),w.defines!==void 0)for(const P in w.defines)x.push(P),x.push(w.defines[P]);return w.isRawShaderMaterial===!1&&(S(x,w),y(x,w),x.push(s.outputColorSpace)),x.push(w.customProgramCacheKey),x.join()}function S(w,x){w.push(x.precision),w.push(x.outputColorSpace),w.push(x.envMapMode),w.push(x.envMapCubeUVHeight),w.push(x.mapUv),w.push(x.alphaMapUv),w.push(x.lightMapUv),w.push(x.aoMapUv),w.push(x.bumpMapUv),w.push(x.normalMapUv),w.push(x.displacementMapUv),w.push(x.emissiveMapUv),w.push(x.metalnessMapUv),w.push(x.roughnessMapUv),w.push(x.anisotropyMapUv),w.push(x.clearcoatMapUv),w.push(x.clearcoatNormalMapUv),w.push(x.clearcoatRoughnessMapUv),w.push(x.iridescenceMapUv),w.push(x.iridescenceThicknessMapUv),w.push(x.sheenColorMapUv),w.push(x.sheenRoughnessMapUv),w.push(x.specularMapUv),w.push(x.specularColorMapUv),w.push(x.specularIntensityMapUv),w.push(x.transmissionMapUv),w.push(x.thicknessMapUv),w.push(x.combine),w.push(x.fogExp2),w.push(x.sizeAttenuation),w.push(x.morphTargetsCount),w.push(x.morphAttributeCount),w.push(x.numDirLights),w.push(x.numPointLights),w.push(x.numSpotLights),w.push(x.numSpotLightMaps),w.push(x.numHemiLights),w.push(x.numRectAreaLights),w.push(x.numDirLightShadows),w.push(x.numPointLightShadows),w.push(x.numSpotLightShadows),w.push(x.numSpotLightShadowsWithMaps),w.push(x.numLightProbes),w.push(x.shadowMapType),w.push(x.toneMapping),w.push(x.numClippingPlanes),w.push(x.numClipIntersection),w.push(x.depthPacking)}function y(w,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.skinning&&a.enable(4),x.morphTargets&&a.enable(5),x.morphNormals&&a.enable(6),x.morphColors&&a.enable(7),x.premultipliedAlpha&&a.enable(8),x.shadowMapEnabled&&a.enable(9),x.doubleSided&&a.enable(10),x.flipSided&&a.enable(11),x.useDepthPacking&&a.enable(12),x.dithering&&a.enable(13),x.transmission&&a.enable(14),x.sheen&&a.enable(15),x.opaque&&a.enable(16),x.pointsUvs&&a.enable(17),x.decodeVideoTexture&&a.enable(18),x.alphaToCoverage&&a.enable(19),w.push(a.mask)}function E(w){const x=g[w.type];let P;if(x){const B=Ye[x];P=hh.clone(B.uniforms)}else P=w.uniforms;return P}function N(w,x){let P;for(let B=0,F=h.length;B<F;B++){const H=h[B];if(H.cacheKey===x){P=H,++P.usedTimes;break}}return P===void 0&&(P=new wp(s,x,w,r),h.push(P)),P}function A(w){if(--w.usedTimes===0){const x=h.indexOf(w);h[x]=h[h.length-1],h.pop(),w.destroy()}}function R(w){l.remove(w)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:E,acquireProgram:N,releaseProgram:A,releaseShaderCache:R,programs:h,dispose:D}}function Rp(){let s=new WeakMap;function t(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function e(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function Pp(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Oa(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function za(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,f,g,_,m){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function a(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||Pp),n.length>1&&n.sort(d||Oa),i.length>1&&i.sort(d||Oa)}function h(){for(let u=t,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function Lp(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new za,s.set(n,[o])):i>=r.length?(o=new za,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function Ip(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new kt};break;case"SpotLight":e={position:new C,direction:new C,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new C,halfWidth:new C,halfHeight:new C};break}return s[t.id]=e,e}}}function Dp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Up=0;function Np(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Fp(s){const t=new Ip,e=Dp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);const i=new C,r=new ee,o=new ee;function a(c){let h=0,u=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,S=0,y=0,E=0,N=0,A=0,R=0;c.sort(Np);for(let w=0,x=c.length;w<x;w++){const P=c[w],B=P.color,F=P.intensity,H=P.distance,X=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=B.r*F,u+=B.g*F,d+=B.b*F;else if(P.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(P.sh.coefficients[G],F);R++}else if(P.isDirectionalLight){const G=t.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const j=P.shadow,V=e.get(P);V.shadowIntensity=j.intensity,V.shadowBias=j.bias,V.shadowNormalBias=j.normalBias,V.shadowRadius=j.radius,V.shadowMapSize=j.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=X,n.directionalShadowMatrix[f]=P.shadow.matrix,S++}n.directional[f]=G,f++}else if(P.isSpotLight){const G=t.get(P);G.position.setFromMatrixPosition(P.matrixWorld),G.color.copy(B).multiplyScalar(F),G.distance=H,G.coneCos=Math.cos(P.angle),G.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),G.decay=P.decay,n.spot[_]=G;const j=P.shadow;if(P.map&&(n.spotLightMap[N]=P.map,N++,j.updateMatrices(P),P.castShadow&&A++),n.spotLightMatrix[_]=j.matrix,P.castShadow){const V=e.get(P);V.shadowIntensity=j.intensity,V.shadowBias=j.bias,V.shadowNormalBias=j.normalBias,V.shadowRadius=j.radius,V.shadowMapSize=j.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=X,E++}_++}else if(P.isRectAreaLight){const G=t.get(P);G.color.copy(B).multiplyScalar(F),G.halfWidth.set(P.width*.5,0,0),G.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=G,m++}else if(P.isPointLight){const G=t.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),G.distance=P.distance,G.decay=P.decay,P.castShadow){const j=P.shadow,V=e.get(P);V.shadowIntensity=j.intensity,V.shadowBias=j.bias,V.shadowNormalBias=j.normalBias,V.shadowRadius=j.radius,V.shadowMapSize=j.mapSize,V.shadowCameraNear=j.camera.near,V.shadowCameraFar=j.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=P.shadow.matrix,y++}n.point[g]=G,g++}else if(P.isHemisphereLight){const G=t.get(P);G.skyColor.copy(P.color).multiplyScalar(F),G.groundColor.copy(P.groundColor).multiplyScalar(F),n.hemi[p]=G,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ht.LTC_FLOAT_1,n.rectAreaLTC2=ht.LTC_FLOAT_2):(n.rectAreaLTC1=ht.LTC_HALF_1,n.rectAreaLTC2=ht.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const D=n.hash;(D.directionalLength!==f||D.pointLength!==g||D.spotLength!==_||D.rectAreaLength!==m||D.hemiLength!==p||D.numDirectionalShadows!==S||D.numPointShadows!==y||D.numSpotShadows!==E||D.numSpotMaps!==N||D.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=E+N-A,n.spotLightMap.length=N,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=R,D.directionalLength=f,D.pointLength=g,D.spotLength=_,D.rectAreaLength=m,D.hemiLength=p,D.numDirectionalShadows=S,D.numPointShadows=y,D.numSpotShadows=E,D.numSpotMaps=N,D.numLightProbes=R,n.version=Up++)}function l(c,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){const y=c[p];if(y.isDirectionalLight){const E=n.directional[u];E.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(m),u++}else if(y.isSpotLight){const E=n.spot[f];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(m),f++}else if(y.isRectAreaLight){const E=n.rectArea[g];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const E=n.point[d];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const E=n.hemi[_];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function Ba(s){const t=new Fp(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Op(s){let t=new WeakMap;function e(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new Ba(s),t.set(i,[a])):r>=o.length?(a=new Ba(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class zp extends En{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Uc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Bp extends En{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const kp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Gp(s,t,e){let n=new Io;const i=new it,r=new it,o=new de,a=new zp({depthPacking:Nc}),l=new Bp,c={},h=e.maxTextureSize,u={[yn]:Te,[Te]:yn,[Ue]:Ue},d=new Mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:kp,fragmentShader:Hp}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Se;g.setAttribute("position",new Ve(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Q(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rl;let p=this.type;this.render=function(A,R,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const w=s.getRenderTarget(),x=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),B=s.state;B.setBlending(vn),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const F=p!==sn&&this.type===sn,H=p===sn&&this.type!==sn;for(let X=0,G=A.length;X<G;X++){const j=A[X],V=j.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const ut=V.getFrameExtents();if(i.multiply(ut),r.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/ut.x),i.x=r.x*ut.x,V.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/ut.y),i.y=r.y*ut.y,V.mapSize.y=r.y)),V.map===null||F===!0||H===!0){const mt=this.type!==sn?{minFilter:Ne,magFilter:Ne}:{};V.map!==null&&V.map.dispose(),V.map=new Bn(i.x,i.y,mt),V.map.texture.name=j.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();const pt=V.getViewportCount();for(let mt=0;mt<pt;mt++){const Ut=V.getViewport(mt);o.set(r.x*Ut.x,r.y*Ut.y,r.x*Ut.z,r.y*Ut.w),B.viewport(o),V.updateMatrices(j,mt),n=V.getFrustum(),E(R,D,V.camera,j,this.type)}V.isPointLightShadow!==!0&&this.type===sn&&S(V,D),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(w,x,P)};function S(A,R){const D=t.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Bn(i.x,i.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(R,null,D,d,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(R,null,D,f,_,null)}function y(A,R,D,w){let x=null;const P=D.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)x=P;else if(x=D.isPointLight===!0?l:a,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const B=x.uuid,F=R.uuid;let H=c[B];H===void 0&&(H={},c[B]=H);let X=H[F];X===void 0&&(X=x.clone(),H[F]=X,R.addEventListener("dispose",N)),x=X}if(x.visible=R.visible,x.wireframe=R.wireframe,w===sn?x.side=R.shadowSide!==null?R.shadowSide:R.side:x.side=R.shadowSide!==null?R.shadowSide:u[R.side],x.alphaMap=R.alphaMap,x.alphaTest=R.alphaTest,x.map=R.map,x.clipShadows=R.clipShadows,x.clippingPlanes=R.clippingPlanes,x.clipIntersection=R.clipIntersection,x.displacementMap=R.displacementMap,x.displacementScale=R.displacementScale,x.displacementBias=R.displacementBias,x.wireframeLinewidth=R.wireframeLinewidth,x.linewidth=R.linewidth,D.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const B=s.properties.get(x);B.light=D}return x}function E(A,R,D,w,x){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&x===sn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,A.matrixWorld);const F=t.update(A),H=A.material;if(Array.isArray(H)){const X=F.groups;for(let G=0,j=X.length;G<j;G++){const V=X[G],ut=H[V.materialIndex];if(ut&&ut.visible){const pt=y(A,ut,w,x);A.onBeforeShadow(s,A,R,D,F,pt,V),s.renderBufferDirect(D,null,F,pt,A,V),A.onAfterShadow(s,A,R,D,F,pt,V)}}}else if(H.visible){const X=y(A,H,w,x);A.onBeforeShadow(s,A,R,D,F,X,null),s.renderBufferDirect(D,null,F,X,A,null),A.onAfterShadow(s,A,R,D,F,X,null)}}const B=A.children;for(let F=0,H=B.length;F<H;F++)E(B[F],R,D,w,x)}function N(A){A.target.removeEventListener("dispose",N);for(const D in c){const w=c[D],x=A.target.uuid;x in w&&(w[x].dispose(),delete w[x])}}}function Vp(s){function t(){let L=!1;const rt=new de;let Y=null;const K=new de(0,0,0,0);return{setMask:function(at){Y!==at&&!L&&(s.colorMask(at,at,at,at),Y=at)},setLocked:function(at){L=at},setClear:function(at,Rt,Xt,le,_e){_e===!0&&(at*=le,Rt*=le,Xt*=le),rt.set(at,Rt,Xt,le),K.equals(rt)===!1&&(s.clearColor(at,Rt,Xt,le),K.copy(rt))},reset:function(){L=!1,Y=null,K.set(-1,0,0,0)}}}function e(){let L=!1,rt=null,Y=null,K=null;return{setTest:function(at){at?gt(s.DEPTH_TEST):lt(s.DEPTH_TEST)},setMask:function(at){rt!==at&&!L&&(s.depthMask(at),rt=at)},setFunc:function(at){if(Y!==at){switch(at){case _c:s.depthFunc(s.NEVER);break;case vc:s.depthFunc(s.ALWAYS);break;case xc:s.depthFunc(s.LESS);break;case Ls:s.depthFunc(s.LEQUAL);break;case yc:s.depthFunc(s.EQUAL);break;case Mc:s.depthFunc(s.GEQUAL);break;case Sc:s.depthFunc(s.GREATER);break;case Ec:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Y=at}},setLocked:function(at){L=at},setClear:function(at){K!==at&&(s.clearDepth(at),K=at)},reset:function(){L=!1,rt=null,Y=null,K=null}}}function n(){let L=!1,rt=null,Y=null,K=null,at=null,Rt=null,Xt=null,le=null,_e=null;return{setTest:function(Yt){L||(Yt?gt(s.STENCIL_TEST):lt(s.STENCIL_TEST))},setMask:function(Yt){rt!==Yt&&!L&&(s.stencilMask(Yt),rt=Yt)},setFunc:function(Yt,Je,Xe){(Y!==Yt||K!==Je||at!==Xe)&&(s.stencilFunc(Yt,Je,Xe),Y=Yt,K=Je,at=Xe)},setOp:function(Yt,Je,Xe){(Rt!==Yt||Xt!==Je||le!==Xe)&&(s.stencilOp(Yt,Je,Xe),Rt=Yt,Xt=Je,le=Xe)},setLocked:function(Yt){L=Yt},setClear:function(Yt){_e!==Yt&&(s.clearStencil(Yt),_e=Yt)},reset:function(){L=!1,rt=null,Y=null,K=null,at=null,Rt=null,Xt=null,le=null,_e=null}}}const i=new t,r=new e,o=new n,a=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,d=[],f=null,g=!1,_=null,m=null,p=null,S=null,y=null,E=null,N=null,A=new kt(0,0,0),R=0,D=!1,w=null,x=null,P=null,B=null,F=null;const H=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,G=0;const j=s.getParameter(s.VERSION);j.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(j)[1]),X=G>=1):j.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),X=G>=2);let V=null,ut={};const pt=s.getParameter(s.SCISSOR_BOX),mt=s.getParameter(s.VIEWPORT),Ut=new de().fromArray(pt),Gt=new de().fromArray(mt);function W(L,rt,Y,K){const at=new Uint8Array(4),Rt=s.createTexture();s.bindTexture(L,Rt),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Xt=0;Xt<Y;Xt++)L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY?s.texImage3D(rt,0,s.RGBA,1,1,K,0,s.RGBA,s.UNSIGNED_BYTE,at):s.texImage2D(rt+Xt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,at);return Rt}const et={};et[s.TEXTURE_2D]=W(s.TEXTURE_2D,s.TEXTURE_2D,1),et[s.TEXTURE_CUBE_MAP]=W(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[s.TEXTURE_2D_ARRAY]=W(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),et[s.TEXTURE_3D]=W(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),o.setClear(0),gt(s.DEPTH_TEST),r.setFunc(Ls),dt(!1),q(Yo),gt(s.CULL_FACE),st(vn);function gt(L){c[L]!==!0&&(s.enable(L),c[L]=!0)}function lt(L){c[L]!==!1&&(s.disable(L),c[L]=!1)}function At(L,rt){return h[L]!==rt?(s.bindFramebuffer(L,rt),h[L]=rt,L===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=rt),L===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=rt),!0):!1}function Nt(L,rt){let Y=d,K=!1;if(L){Y=u.get(rt),Y===void 0&&(Y=[],u.set(rt,Y));const at=L.textures;if(Y.length!==at.length||Y[0]!==s.COLOR_ATTACHMENT0){for(let Rt=0,Xt=at.length;Rt<Xt;Rt++)Y[Rt]=s.COLOR_ATTACHMENT0+Rt;Y.length=at.length,K=!0}}else Y[0]!==s.BACK&&(Y[0]=s.BACK,K=!0);K&&s.drawBuffers(Y)}function Lt(L){return f!==L?(s.useProgram(L),f=L,!0):!1}const qt={[Dn]:s.FUNC_ADD,[tc]:s.FUNC_SUBTRACT,[ec]:s.FUNC_REVERSE_SUBTRACT};qt[nc]=s.MIN,qt[ic]=s.MAX;const b={[sc]:s.ZERO,[rc]:s.ONE,[oc]:s.SRC_COLOR,[Ir]:s.SRC_ALPHA,[dc]:s.SRC_ALPHA_SATURATE,[hc]:s.DST_COLOR,[lc]:s.DST_ALPHA,[ac]:s.ONE_MINUS_SRC_COLOR,[Dr]:s.ONE_MINUS_SRC_ALPHA,[uc]:s.ONE_MINUS_DST_COLOR,[cc]:s.ONE_MINUS_DST_ALPHA,[fc]:s.CONSTANT_COLOR,[pc]:s.ONE_MINUS_CONSTANT_COLOR,[mc]:s.CONSTANT_ALPHA,[gc]:s.ONE_MINUS_CONSTANT_ALPHA};function st(L,rt,Y,K,at,Rt,Xt,le,_e,Yt){if(L===vn){g===!0&&(lt(s.BLEND),g=!1);return}if(g===!1&&(gt(s.BLEND),g=!0),L!==Ql){if(L!==_||Yt!==D){if((m!==Dn||y!==Dn)&&(s.blendEquation(s.FUNC_ADD),m=Dn,y=Dn),Yt)switch(L){case ui:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Lr:s.blendFunc(s.ONE,s.ONE);break;case Ko:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case $o:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case ui:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Lr:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Ko:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case $o:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}p=null,S=null,E=null,N=null,A.set(0,0,0),R=0,_=L,D=Yt}return}at=at||rt,Rt=Rt||Y,Xt=Xt||K,(rt!==m||at!==y)&&(s.blendEquationSeparate(qt[rt],qt[at]),m=rt,y=at),(Y!==p||K!==S||Rt!==E||Xt!==N)&&(s.blendFuncSeparate(b[Y],b[K],b[Rt],b[Xt]),p=Y,S=K,E=Rt,N=Xt),(le.equals(A)===!1||_e!==R)&&(s.blendColor(le.r,le.g,le.b,_e),A.copy(le),R=_e),_=L,D=!1}function tt(L,rt){L.side===Ue?lt(s.CULL_FACE):gt(s.CULL_FACE);let Y=L.side===Te;rt&&(Y=!Y),dt(Y),L.blending===ui&&L.transparent===!1?st(vn):st(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),r.setFunc(L.depthFunc),r.setTest(L.depthTest),r.setMask(L.depthWrite),i.setMask(L.colorWrite);const K=L.stencilWrite;o.setTest(K),K&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ft(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?gt(s.SAMPLE_ALPHA_TO_COVERAGE):lt(s.SAMPLE_ALPHA_TO_COVERAGE)}function dt(L){w!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),w=L)}function q(L){L!==Jl?(gt(s.CULL_FACE),L!==x&&(L===Yo?s.cullFace(s.BACK):L===jl?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):lt(s.CULL_FACE),x=L}function Tt(L){L!==P&&(X&&s.lineWidth(L),P=L)}function ft(L,rt,Y){L?(gt(s.POLYGON_OFFSET_FILL),(B!==rt||F!==Y)&&(s.polygonOffset(rt,Y),B=rt,F=Y)):lt(s.POLYGON_OFFSET_FILL)}function yt(L){L?gt(s.SCISSOR_TEST):lt(s.SCISSOR_TEST)}function T(L){L===void 0&&(L=s.TEXTURE0+H-1),V!==L&&(s.activeTexture(L),V=L)}function v(L,rt,Y){Y===void 0&&(V===null?Y=s.TEXTURE0+H-1:Y=V);let K=ut[Y];K===void 0&&(K={type:void 0,texture:void 0},ut[Y]=K),(K.type!==L||K.texture!==rt)&&(V!==Y&&(s.activeTexture(Y),V=Y),s.bindTexture(L,rt||et[L]),K.type=L,K.texture=rt)}function z(){const L=ut[V];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function J(){try{s.compressedTexImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Z(){try{s.compressedTexImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{s.texSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function bt(){try{s.texSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ct(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ot(){try{s.texStorage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function nt(){try{s.texStorage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function vt(){try{s.texImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Wt(){try{s.texImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Dt(L){Ut.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),Ut.copy(L))}function Mt(L){Gt.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),Gt.copy(L))}function Ft(L,rt){let Y=l.get(rt);Y===void 0&&(Y=new WeakMap,l.set(rt,Y));let K=Y.get(L);K===void 0&&(K=s.getUniformBlockIndex(rt,L.name),Y.set(L,K))}function Ht(L,rt){const K=l.get(rt).get(L);a.get(rt)!==K&&(s.uniformBlockBinding(rt,K,L.__bindingPointIndex),a.set(rt,K))}function ne(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),c={},V=null,ut={},h={},u=new WeakMap,d=[],f=null,g=!1,_=null,m=null,p=null,S=null,y=null,E=null,N=null,A=new kt(0,0,0),R=0,D=!1,w=null,x=null,P=null,B=null,F=null,Ut.set(0,0,s.canvas.width,s.canvas.height),Gt.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),o.reset()}return{buffers:{color:i,depth:r,stencil:o},enable:gt,disable:lt,bindFramebuffer:At,drawBuffers:Nt,useProgram:Lt,setBlending:st,setMaterial:tt,setFlipSided:dt,setCullFace:q,setLineWidth:Tt,setPolygonOffset:ft,setScissorTest:yt,activeTexture:T,bindTexture:v,unbindTexture:z,compressedTexImage2D:J,compressedTexImage3D:Z,texImage2D:vt,texImage3D:Wt,updateUBOMapping:Ft,uniformBlockBinding:Ht,texStorage2D:Ot,texStorage3D:nt,texSubImage2D:$,texSubImage3D:bt,compressedTexSubImage2D:ct,compressedTexSubImage3D:xt,scissor:Dt,viewport:Mt,reset:ne}}function ka(s,t,e,n){const i=Wp(n);switch(e){case ul:return s*t;case fl:return s*t;case pl:return s*t*2;case ml:return s*t/i.components*i.byteLength;case bo:return s*t/i.components*i.byteLength;case gl:return s*t*2/i.components*i.byteLength;case To:return s*t*2/i.components*i.byteLength;case dl:return s*t*3/i.components*i.byteLength;case Ge:return s*t*4/i.components*i.byteLength;case Ao:return s*t*4/i.components*i.byteLength;case bs:case Ts:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case As:case Cs:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Br:case Hr:return Math.max(s,16)*Math.max(t,8)/4;case zr:case kr:return Math.max(s,8)*Math.max(t,8)/2;case Gr:case Vr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Wr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Xr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case qr:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Yr:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Kr:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case $r:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Zr:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Jr:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case jr:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Qr:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case to:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case eo:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case no:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case io:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case so:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Rs:case ro:case oo:return Math.ceil(s/4)*Math.ceil(t/4)*16;case _l:case ao:return Math.ceil(s/4)*Math.ceil(t/4)*8;case lo:case co:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Wp(s){switch(s){case ln:case ll:return{byteLength:1,components:1};case Oi:case cl:case Gi:return{byteLength:2,components:1};case Eo:case wo:return{byteLength:2,components:4};case zn:case So:case rn:return{byteLength:4,components:1};case hl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Xp(s,t,e,n,i,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new it,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,v){return f?new OffscreenCanvas(T,v):Fs("canvas")}function _(T,v,z){let J=1;const Z=yt(T);if((Z.width>z||Z.height>z)&&(J=z/Math.max(Z.width,Z.height)),J<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const $=Math.floor(J*Z.width),bt=Math.floor(J*Z.height);u===void 0&&(u=g($,bt));const ct=v?g($,bt):u;return ct.width=$,ct.height=bt,ct.getContext("2d").drawImage(T,0,0,$,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+$+"x"+bt+")."),ct}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),T;return T}function m(T){return T.generateMipmaps&&T.minFilter!==Ne&&T.minFilter!==ke}function p(T){s.generateMipmap(T)}function S(T,v,z,J,Z=!1){if(T!==null){if(s[T]!==void 0)return s[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let $=v;if(v===s.RED&&(z===s.FLOAT&&($=s.R32F),z===s.HALF_FLOAT&&($=s.R16F),z===s.UNSIGNED_BYTE&&($=s.R8)),v===s.RED_INTEGER&&(z===s.UNSIGNED_BYTE&&($=s.R8UI),z===s.UNSIGNED_SHORT&&($=s.R16UI),z===s.UNSIGNED_INT&&($=s.R32UI),z===s.BYTE&&($=s.R8I),z===s.SHORT&&($=s.R16I),z===s.INT&&($=s.R32I)),v===s.RG&&(z===s.FLOAT&&($=s.RG32F),z===s.HALF_FLOAT&&($=s.RG16F),z===s.UNSIGNED_BYTE&&($=s.RG8)),v===s.RG_INTEGER&&(z===s.UNSIGNED_BYTE&&($=s.RG8UI),z===s.UNSIGNED_SHORT&&($=s.RG16UI),z===s.UNSIGNED_INT&&($=s.RG32UI),z===s.BYTE&&($=s.RG8I),z===s.SHORT&&($=s.RG16I),z===s.INT&&($=s.RG32I)),v===s.RGB&&z===s.UNSIGNED_INT_5_9_9_9_REV&&($=s.RGB9_E5),v===s.RGBA){const bt=Z?Is:Jt.getTransfer(J);z===s.FLOAT&&($=s.RGBA32F),z===s.HALF_FLOAT&&($=s.RGBA16F),z===s.UNSIGNED_BYTE&&($=bt===te?s.SRGB8_ALPHA8:s.RGBA8),z===s.UNSIGNED_SHORT_4_4_4_4&&($=s.RGBA4),z===s.UNSIGNED_SHORT_5_5_5_1&&($=s.RGB5_A1)}return($===s.R16F||$===s.R32F||$===s.RG16F||$===s.RG32F||$===s.RGBA16F||$===s.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function y(T,v){let z;return T?v===null||v===zn||v===_i?z=s.DEPTH24_STENCIL8:v===rn?z=s.DEPTH32F_STENCIL8:v===Oi&&(z=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===zn||v===_i?z=s.DEPTH_COMPONENT24:v===rn?z=s.DEPTH_COMPONENT32F:v===Oi&&(z=s.DEPTH_COMPONENT16),z}function E(T,v){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Ne&&T.minFilter!==ke?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function N(T){const v=T.target;v.removeEventListener("dispose",N),R(v),v.isVideoTexture&&h.delete(v)}function A(T){const v=T.target;v.removeEventListener("dispose",A),w(v)}function R(T){const v=n.get(T);if(v.__webglInit===void 0)return;const z=T.source,J=d.get(z);if(J){const Z=J[v.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&D(T),Object.keys(J).length===0&&d.delete(z)}n.remove(T)}function D(T){const v=n.get(T);s.deleteTexture(v.__webglTexture);const z=T.source,J=d.get(z);delete J[v.__cacheKey],o.memory.textures--}function w(T){const v=n.get(T);if(T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(v.__webglFramebuffer[J]))for(let Z=0;Z<v.__webglFramebuffer[J].length;Z++)s.deleteFramebuffer(v.__webglFramebuffer[J][Z]);else s.deleteFramebuffer(v.__webglFramebuffer[J]);v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer[J])}else{if(Array.isArray(v.__webglFramebuffer))for(let J=0;J<v.__webglFramebuffer.length;J++)s.deleteFramebuffer(v.__webglFramebuffer[J]);else s.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&s.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let J=0;J<v.__webglColorRenderbuffer.length;J++)v.__webglColorRenderbuffer[J]&&s.deleteRenderbuffer(v.__webglColorRenderbuffer[J]);v.__webglDepthRenderbuffer&&s.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const z=T.textures;for(let J=0,Z=z.length;J<Z;J++){const $=n.get(z[J]);$.__webglTexture&&(s.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(z[J])}n.remove(T)}let x=0;function P(){x=0}function B(){const T=x;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),x+=1,T}function F(T){const v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function H(T,v){const z=n.get(T);if(T.isVideoTexture&&Tt(T),T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){const J=T.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Gt(z,T,v);return}}e.bindTexture(s.TEXTURE_2D,z.__webglTexture,s.TEXTURE0+v)}function X(T,v){const z=n.get(T);if(T.version>0&&z.__version!==T.version){Gt(z,T,v);return}e.bindTexture(s.TEXTURE_2D_ARRAY,z.__webglTexture,s.TEXTURE0+v)}function G(T,v){const z=n.get(T);if(T.version>0&&z.__version!==T.version){Gt(z,T,v);return}e.bindTexture(s.TEXTURE_3D,z.__webglTexture,s.TEXTURE0+v)}function j(T,v){const z=n.get(T);if(T.version>0&&z.__version!==T.version){W(z,T,v);return}e.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+v)}const V={[Fr]:s.REPEAT,[Nn]:s.CLAMP_TO_EDGE,[Or]:s.MIRRORED_REPEAT},ut={[Ne]:s.NEAREST,[Dc]:s.NEAREST_MIPMAP_NEAREST,[Ki]:s.NEAREST_MIPMAP_LINEAR,[ke]:s.LINEAR,[Js]:s.LINEAR_MIPMAP_NEAREST,[Fn]:s.LINEAR_MIPMAP_LINEAR},pt={[Oc]:s.NEVER,[Vc]:s.ALWAYS,[zc]:s.LESS,[vl]:s.LEQUAL,[Bc]:s.EQUAL,[Gc]:s.GEQUAL,[kc]:s.GREATER,[Hc]:s.NOTEQUAL};function mt(T,v){if(v.type===rn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===ke||v.magFilter===Js||v.magFilter===Ki||v.magFilter===Fn||v.minFilter===ke||v.minFilter===Js||v.minFilter===Ki||v.minFilter===Fn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(T,s.TEXTURE_WRAP_S,V[v.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,V[v.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,V[v.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,ut[v.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,ut[v.minFilter]),v.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,pt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Ne||v.minFilter!==Ki&&v.minFilter!==Fn||v.type===rn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");s.texParameterf(T,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Ut(T,v){let z=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",N));const J=v.source;let Z=d.get(J);Z===void 0&&(Z={},d.set(J,Z));const $=F(v);if($!==T.__cacheKey){Z[$]===void 0&&(Z[$]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,z=!0),Z[$].usedTimes++;const bt=Z[T.__cacheKey];bt!==void 0&&(Z[T.__cacheKey].usedTimes--,bt.usedTimes===0&&D(v)),T.__cacheKey=$,T.__webglTexture=Z[$].texture}return z}function Gt(T,v,z){let J=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(J=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(J=s.TEXTURE_3D);const Z=Ut(T,v),$=v.source;e.bindTexture(J,T.__webglTexture,s.TEXTURE0+z);const bt=n.get($);if($.version!==bt.__version||Z===!0){e.activeTexture(s.TEXTURE0+z);const ct=Jt.getPrimaries(Jt.workingColorSpace),xt=v.colorSpace===_n?null:Jt.getPrimaries(v.colorSpace),Ot=v.colorSpace===_n||ct===xt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ot);let nt=_(v.image,!1,i.maxTextureSize);nt=ft(v,nt);const vt=r.convert(v.format,v.colorSpace),Wt=r.convert(v.type);let Dt=S(v.internalFormat,vt,Wt,v.colorSpace,v.isVideoTexture);mt(J,v);let Mt;const Ft=v.mipmaps,Ht=v.isVideoTexture!==!0,ne=bt.__version===void 0||Z===!0,L=$.dataReady,rt=E(v,nt);if(v.isDepthTexture)Dt=y(v.format===vi,v.type),ne&&(Ht?e.texStorage2D(s.TEXTURE_2D,1,Dt,nt.width,nt.height):e.texImage2D(s.TEXTURE_2D,0,Dt,nt.width,nt.height,0,vt,Wt,null));else if(v.isDataTexture)if(Ft.length>0){Ht&&ne&&e.texStorage2D(s.TEXTURE_2D,rt,Dt,Ft[0].width,Ft[0].height);for(let Y=0,K=Ft.length;Y<K;Y++)Mt=Ft[Y],Ht?L&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,Mt.width,Mt.height,vt,Wt,Mt.data):e.texImage2D(s.TEXTURE_2D,Y,Dt,Mt.width,Mt.height,0,vt,Wt,Mt.data);v.generateMipmaps=!1}else Ht?(ne&&e.texStorage2D(s.TEXTURE_2D,rt,Dt,nt.width,nt.height),L&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,nt.width,nt.height,vt,Wt,nt.data)):e.texImage2D(s.TEXTURE_2D,0,Dt,nt.width,nt.height,0,vt,Wt,nt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ht&&ne&&e.texStorage3D(s.TEXTURE_2D_ARRAY,rt,Dt,Ft[0].width,Ft[0].height,nt.depth);for(let Y=0,K=Ft.length;Y<K;Y++)if(Mt=Ft[Y],v.format!==Ge)if(vt!==null)if(Ht){if(L)if(v.layerUpdates.size>0){const at=ka(Mt.width,Mt.height,v.format,v.type);for(const Rt of v.layerUpdates){const Xt=Mt.data.subarray(Rt*at/Mt.data.BYTES_PER_ELEMENT,(Rt+1)*at/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,Rt,Mt.width,Mt.height,1,vt,Xt,0,0)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,Mt.width,Mt.height,nt.depth,vt,Mt.data,0,0)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Y,Dt,Mt.width,Mt.height,nt.depth,0,Mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?L&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,Mt.width,Mt.height,nt.depth,vt,Wt,Mt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Y,Dt,Mt.width,Mt.height,nt.depth,0,vt,Wt,Mt.data)}else{Ht&&ne&&e.texStorage2D(s.TEXTURE_2D,rt,Dt,Ft[0].width,Ft[0].height);for(let Y=0,K=Ft.length;Y<K;Y++)Mt=Ft[Y],v.format!==Ge?vt!==null?Ht?L&&e.compressedTexSubImage2D(s.TEXTURE_2D,Y,0,0,Mt.width,Mt.height,vt,Mt.data):e.compressedTexImage2D(s.TEXTURE_2D,Y,Dt,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?L&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,Mt.width,Mt.height,vt,Wt,Mt.data):e.texImage2D(s.TEXTURE_2D,Y,Dt,Mt.width,Mt.height,0,vt,Wt,Mt.data)}else if(v.isDataArrayTexture)if(Ht){if(ne&&e.texStorage3D(s.TEXTURE_2D_ARRAY,rt,Dt,nt.width,nt.height,nt.depth),L)if(v.layerUpdates.size>0){const Y=ka(nt.width,nt.height,v.format,v.type);for(const K of v.layerUpdates){const at=nt.data.subarray(K*Y/nt.data.BYTES_PER_ELEMENT,(K+1)*Y/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,K,nt.width,nt.height,1,vt,Wt,at)}v.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,vt,Wt,nt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Dt,nt.width,nt.height,nt.depth,0,vt,Wt,nt.data);else if(v.isData3DTexture)Ht?(ne&&e.texStorage3D(s.TEXTURE_3D,rt,Dt,nt.width,nt.height,nt.depth),L&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,vt,Wt,nt.data)):e.texImage3D(s.TEXTURE_3D,0,Dt,nt.width,nt.height,nt.depth,0,vt,Wt,nt.data);else if(v.isFramebufferTexture){if(ne)if(Ht)e.texStorage2D(s.TEXTURE_2D,rt,Dt,nt.width,nt.height);else{let Y=nt.width,K=nt.height;for(let at=0;at<rt;at++)e.texImage2D(s.TEXTURE_2D,at,Dt,Y,K,0,vt,Wt,null),Y>>=1,K>>=1}}else if(Ft.length>0){if(Ht&&ne){const Y=yt(Ft[0]);e.texStorage2D(s.TEXTURE_2D,rt,Dt,Y.width,Y.height)}for(let Y=0,K=Ft.length;Y<K;Y++)Mt=Ft[Y],Ht?L&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,vt,Wt,Mt):e.texImage2D(s.TEXTURE_2D,Y,Dt,vt,Wt,Mt);v.generateMipmaps=!1}else if(Ht){if(ne){const Y=yt(nt);e.texStorage2D(s.TEXTURE_2D,rt,Dt,Y.width,Y.height)}L&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,vt,Wt,nt)}else e.texImage2D(s.TEXTURE_2D,0,Dt,vt,Wt,nt);m(v)&&p(J),bt.__version=$.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function W(T,v,z){if(v.image.length!==6)return;const J=Ut(T,v),Z=v.source;e.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+z);const $=n.get(Z);if(Z.version!==$.__version||J===!0){e.activeTexture(s.TEXTURE0+z);const bt=Jt.getPrimaries(Jt.workingColorSpace),ct=v.colorSpace===_n?null:Jt.getPrimaries(v.colorSpace),xt=v.colorSpace===_n||bt===ct?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);const Ot=v.isCompressedTexture||v.image[0].isCompressedTexture,nt=v.image[0]&&v.image[0].isDataTexture,vt=[];for(let K=0;K<6;K++)!Ot&&!nt?vt[K]=_(v.image[K],!0,i.maxCubemapSize):vt[K]=nt?v.image[K].image:v.image[K],vt[K]=ft(v,vt[K]);const Wt=vt[0],Dt=r.convert(v.format,v.colorSpace),Mt=r.convert(v.type),Ft=S(v.internalFormat,Dt,Mt,v.colorSpace),Ht=v.isVideoTexture!==!0,ne=$.__version===void 0||J===!0,L=Z.dataReady;let rt=E(v,Wt);mt(s.TEXTURE_CUBE_MAP,v);let Y;if(Ot){Ht&&ne&&e.texStorage2D(s.TEXTURE_CUBE_MAP,rt,Ft,Wt.width,Wt.height);for(let K=0;K<6;K++){Y=vt[K].mipmaps;for(let at=0;at<Y.length;at++){const Rt=Y[at];v.format!==Ge?Dt!==null?Ht?L&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,at,0,0,Rt.width,Rt.height,Dt,Rt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,at,Ft,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ht?L&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,at,0,0,Rt.width,Rt.height,Dt,Mt,Rt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,at,Ft,Rt.width,Rt.height,0,Dt,Mt,Rt.data)}}}else{if(Y=v.mipmaps,Ht&&ne){Y.length>0&&rt++;const K=yt(vt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,rt,Ft,K.width,K.height)}for(let K=0;K<6;K++)if(nt){Ht?L&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,vt[K].width,vt[K].height,Dt,Mt,vt[K].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ft,vt[K].width,vt[K].height,0,Dt,Mt,vt[K].data);for(let at=0;at<Y.length;at++){const Xt=Y[at].image[K].image;Ht?L&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,at+1,0,0,Xt.width,Xt.height,Dt,Mt,Xt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,at+1,Ft,Xt.width,Xt.height,0,Dt,Mt,Xt.data)}}else{Ht?L&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Dt,Mt,vt[K]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ft,Dt,Mt,vt[K]);for(let at=0;at<Y.length;at++){const Rt=Y[at];Ht?L&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,at+1,0,0,Dt,Mt,Rt.image[K]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,at+1,Ft,Dt,Mt,Rt.image[K])}}}m(v)&&p(s.TEXTURE_CUBE_MAP),$.__version=Z.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function et(T,v,z,J,Z,$){const bt=r.convert(z.format,z.colorSpace),ct=r.convert(z.type),xt=S(z.internalFormat,bt,ct,z.colorSpace);if(!n.get(v).__hasExternalTextures){const nt=Math.max(1,v.width>>$),vt=Math.max(1,v.height>>$);Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?e.texImage3D(Z,$,xt,nt,vt,v.depth,0,bt,ct,null):e.texImage2D(Z,$,xt,nt,vt,0,bt,ct,null)}e.bindFramebuffer(s.FRAMEBUFFER,T),q(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,J,Z,n.get(z).__webglTexture,0,dt(v)):(Z===s.TEXTURE_2D||Z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,J,Z,n.get(z).__webglTexture,$),e.bindFramebuffer(s.FRAMEBUFFER,null)}function gt(T,v,z){if(s.bindRenderbuffer(s.RENDERBUFFER,T),v.depthBuffer){const J=v.depthTexture,Z=J&&J.isDepthTexture?J.type:null,$=y(v.stencilBuffer,Z),bt=v.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=dt(v);q(v)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ct,$,v.width,v.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,ct,$,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,$,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,bt,s.RENDERBUFFER,T)}else{const J=v.textures;for(let Z=0;Z<J.length;Z++){const $=J[Z],bt=r.convert($.format,$.colorSpace),ct=r.convert($.type),xt=S($.internalFormat,bt,ct,$.colorSpace),Ot=dt(v);z&&q(v)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ot,xt,v.width,v.height):q(v)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ot,xt,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,xt,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function lt(T,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),H(v.depthTexture,0);const J=n.get(v.depthTexture).__webglTexture,Z=dt(v);if(v.depthTexture.format===di)q(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0);else if(v.depthTexture.format===vi)q(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function At(T){const v=n.get(T),z=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!v.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");lt(v.__webglFramebuffer,T)}else if(z){v.__webglDepthbuffer=[];for(let J=0;J<6;J++)e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[J]),v.__webglDepthbuffer[J]=s.createRenderbuffer(),gt(v.__webglDepthbuffer[J],T,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=s.createRenderbuffer(),gt(v.__webglDepthbuffer,T,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function Nt(T,v,z){const J=n.get(T);v!==void 0&&et(J.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),z!==void 0&&At(T)}function Lt(T){const v=T.texture,z=n.get(T),J=n.get(v);T.addEventListener("dispose",A);const Z=T.textures,$=T.isWebGLCubeRenderTarget===!0,bt=Z.length>1;if(bt||(J.__webglTexture===void 0&&(J.__webglTexture=s.createTexture()),J.__version=v.version,o.memory.textures++),$){z.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(v.mipmaps&&v.mipmaps.length>0){z.__webglFramebuffer[ct]=[];for(let xt=0;xt<v.mipmaps.length;xt++)z.__webglFramebuffer[ct][xt]=s.createFramebuffer()}else z.__webglFramebuffer[ct]=s.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){z.__webglFramebuffer=[];for(let ct=0;ct<v.mipmaps.length;ct++)z.__webglFramebuffer[ct]=s.createFramebuffer()}else z.__webglFramebuffer=s.createFramebuffer();if(bt)for(let ct=0,xt=Z.length;ct<xt;ct++){const Ot=n.get(Z[ct]);Ot.__webglTexture===void 0&&(Ot.__webglTexture=s.createTexture(),o.memory.textures++)}if(T.samples>0&&q(T)===!1){z.__webglMultisampledFramebuffer=s.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ct=0;ct<Z.length;ct++){const xt=Z[ct];z.__webglColorRenderbuffer[ct]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,z.__webglColorRenderbuffer[ct]);const Ot=r.convert(xt.format,xt.colorSpace),nt=r.convert(xt.type),vt=S(xt.internalFormat,Ot,nt,xt.colorSpace,T.isXRRenderTarget===!0),Wt=dt(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,Wt,vt,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.RENDERBUFFER,z.__webglColorRenderbuffer[ct])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(z.__webglDepthRenderbuffer=s.createRenderbuffer(),gt(z.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if($){e.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture),mt(s.TEXTURE_CUBE_MAP,v);for(let ct=0;ct<6;ct++)if(v.mipmaps&&v.mipmaps.length>0)for(let xt=0;xt<v.mipmaps.length;xt++)et(z.__webglFramebuffer[ct][xt],T,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,xt);else et(z.__webglFramebuffer[ct],T,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);m(v)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let ct=0,xt=Z.length;ct<xt;ct++){const Ot=Z[ct],nt=n.get(Ot);e.bindTexture(s.TEXTURE_2D,nt.__webglTexture),mt(s.TEXTURE_2D,Ot),et(z.__webglFramebuffer,T,Ot,s.COLOR_ATTACHMENT0+ct,s.TEXTURE_2D,0),m(Ot)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let ct=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ct=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ct,J.__webglTexture),mt(ct,v),v.mipmaps&&v.mipmaps.length>0)for(let xt=0;xt<v.mipmaps.length;xt++)et(z.__webglFramebuffer[xt],T,v,s.COLOR_ATTACHMENT0,ct,xt);else et(z.__webglFramebuffer,T,v,s.COLOR_ATTACHMENT0,ct,0);m(v)&&p(ct),e.unbindTexture()}T.depthBuffer&&At(T)}function qt(T){const v=T.textures;for(let z=0,J=v.length;z<J;z++){const Z=v[z];if(m(Z)){const $=T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,bt=n.get(Z).__webglTexture;e.bindTexture($,bt),p($),e.unbindTexture()}}}const b=[],st=[];function tt(T){if(T.samples>0){if(q(T)===!1){const v=T.textures,z=T.width,J=T.height;let Z=s.COLOR_BUFFER_BIT;const $=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,bt=n.get(T),ct=v.length>1;if(ct)for(let xt=0;xt<v.length;xt++)e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let xt=0;xt<v.length;xt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Z|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Z|=s.STENCIL_BUFFER_BIT)),ct){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,bt.__webglColorRenderbuffer[xt]);const Ot=n.get(v[xt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ot,0)}s.blitFramebuffer(0,0,z,J,0,0,z,J,Z,s.NEAREST),l===!0&&(b.length=0,st.length=0,b.push(s.COLOR_ATTACHMENT0+xt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(b.push($),st.push($),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,st)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,b))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ct)for(let xt=0;xt<v.length;xt++){e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.RENDERBUFFER,bt.__webglColorRenderbuffer[xt]);const Ot=n.get(v[xt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.TEXTURE_2D,Ot,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const v=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[v])}}}function dt(T){return Math.min(i.maxSamples,T.samples)}function q(T){const v=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Tt(T){const v=o.render.frame;h.get(T)!==v&&(h.set(T,v),T.update())}function ft(T,v){const z=T.colorSpace,J=T.format,Z=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||z!==Sn&&z!==_n&&(Jt.getTransfer(z)===te?(J!==Ge||Z!==ln)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),v}function yt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=P,this.setTexture2D=H,this.setTexture2DArray=X,this.setTexture3D=G,this.setTextureCube=j,this.rebindTextures=Nt,this.setupRenderTarget=Lt,this.updateRenderTargetMipmap=qt,this.updateMultisampleRenderTarget=tt,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=et,this.useMultisampledRTT=q}function qp(s,t){function e(n,i=_n){let r;const o=Jt.getTransfer(i);if(n===ln)return s.UNSIGNED_BYTE;if(n===Eo)return s.UNSIGNED_SHORT_4_4_4_4;if(n===wo)return s.UNSIGNED_SHORT_5_5_5_1;if(n===hl)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===ll)return s.BYTE;if(n===cl)return s.SHORT;if(n===Oi)return s.UNSIGNED_SHORT;if(n===So)return s.INT;if(n===zn)return s.UNSIGNED_INT;if(n===rn)return s.FLOAT;if(n===Gi)return s.HALF_FLOAT;if(n===ul)return s.ALPHA;if(n===dl)return s.RGB;if(n===Ge)return s.RGBA;if(n===fl)return s.LUMINANCE;if(n===pl)return s.LUMINANCE_ALPHA;if(n===di)return s.DEPTH_COMPONENT;if(n===vi)return s.DEPTH_STENCIL;if(n===ml)return s.RED;if(n===bo)return s.RED_INTEGER;if(n===gl)return s.RG;if(n===To)return s.RG_INTEGER;if(n===Ao)return s.RGBA_INTEGER;if(n===bs||n===Ts||n===As||n===Cs)if(o===te)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===bs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ts)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===As)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Cs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===bs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ts)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===As)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Cs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===zr||n===Br||n===kr||n===Hr)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===zr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Br)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===kr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Hr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Gr||n===Vr||n===Wr)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Gr||n===Vr)return o===te?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Wr)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Xr||n===qr||n===Yr||n===Kr||n===$r||n===Zr||n===Jr||n===jr||n===Qr||n===to||n===eo||n===no||n===io||n===so)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Xr)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===qr)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Yr)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Kr)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===$r)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Zr)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Jr)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===jr)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Qr)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===to)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===eo)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===no)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===io)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===so)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Rs||n===ro||n===oo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Rs)return o===te?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ro)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===oo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===_l||n===ao||n===lo||n===co)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Rs)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ao)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===lo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===co)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===_i?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class Yp extends De{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ae extends fe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Kp={type:"move"};class wr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ae,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ae,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ae,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Kp)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ae;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const $p=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Zp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Jp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new be,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Mn({vertexShader:$p,fragmentShader:Zp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Q(new Mi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jp extends yi{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const _=new Jp,m=e.getContextAttributes();let p=null,S=null;const y=[],E=[],N=new it;let A=null;const R=new De;R.layers.enable(1),R.viewport=new de;const D=new De;D.layers.enable(2),D.viewport=new de;const w=[R,D],x=new Yp;x.layers.enable(1),x.layers.enable(2);let P=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let et=y[W];return et===void 0&&(et=new wr,y[W]=et),et.getTargetRaySpace()},this.getControllerGrip=function(W){let et=y[W];return et===void 0&&(et=new wr,y[W]=et),et.getGripSpace()},this.getHand=function(W){let et=y[W];return et===void 0&&(et=new wr,y[W]=et),et.getHandSpace()};function F(W){const et=E.indexOf(W.inputSource);if(et===-1)return;const gt=y[et];gt!==void 0&&(gt.update(W.inputSource,W.frame,c||o),gt.dispatchEvent({type:W.type,data:W.inputSource}))}function H(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",X);for(let W=0;W<y.length;W++){const et=E[W];et!==null&&(E[W]=null,y[W].disconnect(et))}P=null,B=null,_.reset(),t.setRenderTarget(p),f=null,d=null,u=null,i=null,S=null,Gt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(N.width,N.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",H),i.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(N),i.renderState.layers===void 0){const et={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,et),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new Bn(f.framebufferWidth,f.framebufferHeight,{format:Ge,type:ln,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let et=null,gt=null,lt=null;m.depth&&(lt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=m.stencil?vi:di,gt=m.stencil?_i:zn);const At={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(At),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new Bn(d.textureWidth,d.textureHeight,{format:Ge,type:ln,depthTexture:new Pl(d.textureWidth,d.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Gt.setContext(i),Gt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function X(W){for(let et=0;et<W.removed.length;et++){const gt=W.removed[et],lt=E.indexOf(gt);lt>=0&&(E[lt]=null,y[lt].disconnect(gt))}for(let et=0;et<W.added.length;et++){const gt=W.added[et];let lt=E.indexOf(gt);if(lt===-1){for(let Nt=0;Nt<y.length;Nt++)if(Nt>=E.length){E.push(gt),lt=Nt;break}else if(E[Nt]===null){E[Nt]=gt,lt=Nt;break}if(lt===-1)break}const At=y[lt];At&&At.connect(gt)}}const G=new C,j=new C;function V(W,et,gt){G.setFromMatrixPosition(et.matrixWorld),j.setFromMatrixPosition(gt.matrixWorld);const lt=G.distanceTo(j),At=et.projectionMatrix.elements,Nt=gt.projectionMatrix.elements,Lt=At[14]/(At[10]-1),qt=At[14]/(At[10]+1),b=(At[9]+1)/At[5],st=(At[9]-1)/At[5],tt=(At[8]-1)/At[0],dt=(Nt[8]+1)/Nt[0],q=Lt*tt,Tt=Lt*dt,ft=lt/(-tt+dt),yt=ft*-tt;et.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(yt),W.translateZ(ft),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const T=Lt+ft,v=qt+ft,z=q-yt,J=Tt+(lt-yt),Z=b*qt/v*T,$=st*qt/v*T;W.projectionMatrix.makePerspective(z,J,Z,$,T,v),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function ut(W,et){et===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(et.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;_.texture!==null&&(W.near=_.depthNear,W.far=_.depthFar),x.near=D.near=R.near=W.near,x.far=D.far=R.far=W.far,(P!==x.near||B!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),P=x.near,B=x.far,R.near=P,R.far=B,D.near=P,D.far=B,R.updateProjectionMatrix(),D.updateProjectionMatrix(),W.updateProjectionMatrix());const et=W.parent,gt=x.cameras;ut(x,et);for(let lt=0;lt<gt.length;lt++)ut(gt[lt],et);gt.length===2?V(x,R,D):x.projectionMatrix.copy(R.projectionMatrix),pt(W,x,et)};function pt(W,et,gt){gt===null?W.matrix.copy(et.matrixWorld):(W.matrix.copy(gt.matrixWorld),W.matrix.invert(),W.matrix.multiply(et.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(et.projectionMatrix),W.projectionMatrixInverse.copy(et.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=uo*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(W){l=W,d!==null&&(d.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let mt=null;function Ut(W,et){if(h=et.getViewerPose(c||o),g=et,h!==null){const gt=h.views;f!==null&&(t.setRenderTargetFramebuffer(S,f.framebuffer),t.setRenderTarget(S));let lt=!1;gt.length!==x.cameras.length&&(x.cameras.length=0,lt=!0);for(let Nt=0;Nt<gt.length;Nt++){const Lt=gt[Nt];let qt=null;if(f!==null)qt=f.getViewport(Lt);else{const st=u.getViewSubImage(d,Lt);qt=st.viewport,Nt===0&&(t.setRenderTargetTextures(S,st.colorTexture,d.ignoreDepthValues?void 0:st.depthStencilTexture),t.setRenderTarget(S))}let b=w[Nt];b===void 0&&(b=new De,b.layers.enable(Nt),b.viewport=new de,w[Nt]=b),b.matrix.fromArray(Lt.transform.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale),b.projectionMatrix.fromArray(Lt.projectionMatrix),b.projectionMatrixInverse.copy(b.projectionMatrix).invert(),b.viewport.set(qt.x,qt.y,qt.width,qt.height),Nt===0&&(x.matrix.copy(b.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),lt===!0&&x.cameras.push(b)}const At=i.enabledFeatures;if(At&&At.includes("depth-sensing")){const Nt=u.getDepthInformation(gt[0]);Nt&&Nt.isValid&&Nt.texture&&_.init(t,Nt,i.renderState)}}for(let gt=0;gt<y.length;gt++){const lt=E[gt],At=y[gt];lt!==null&&At!==void 0&&At.update(lt,et,c||o)}mt&&mt(W,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}const Gt=new Cl;Gt.setAnimationLoop(Ut),this.setAnimationLoop=function(W){mt=W},this.dispose=function(){}}}const Pn=new We,Qp=new ee;function tm(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,bl(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,S,y,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,E)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,S,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Te&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Te&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=t.get(p),y=S.envMap,E=S.envMapRotation;y&&(m.envMap.value=y,Pn.copy(E),Pn.x*=-1,Pn.y*=-1,Pn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Pn.y*=-1,Pn.z*=-1),m.envMapRotation.value.setFromMatrix4(Qp.makeRotationFromEuler(Pn)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Te&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function em(s,t,e,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,y){const E=y.program;n.uniformBlockBinding(S,E)}function c(S,y){let E=i[S.id];E===void 0&&(g(S),E=h(S),i[S.id]=E,S.addEventListener("dispose",m));const N=y.program;n.updateUBOMapping(S,N);const A=t.render.frame;r[S.id]!==A&&(d(S),r[S.id]=A)}function h(S){const y=u();S.__bindingPointIndex=y;const E=s.createBuffer(),N=S.__size,A=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,E),s.bufferData(s.UNIFORM_BUFFER,N,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,E),E}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const y=i[S.id],E=S.uniforms,N=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let A=0,R=E.length;A<R;A++){const D=Array.isArray(E[A])?E[A]:[E[A]];for(let w=0,x=D.length;w<x;w++){const P=D[w];if(f(P,A,w,N)===!0){const B=P.__offset,F=Array.isArray(P.value)?P.value:[P.value];let H=0;for(let X=0;X<F.length;X++){const G=F[X],j=_(G);typeof G=="number"||typeof G=="boolean"?(P.__data[0]=G,s.bufferSubData(s.UNIFORM_BUFFER,B+H,P.__data)):G.isMatrix3?(P.__data[0]=G.elements[0],P.__data[1]=G.elements[1],P.__data[2]=G.elements[2],P.__data[3]=0,P.__data[4]=G.elements[3],P.__data[5]=G.elements[4],P.__data[6]=G.elements[5],P.__data[7]=0,P.__data[8]=G.elements[6],P.__data[9]=G.elements[7],P.__data[10]=G.elements[8],P.__data[11]=0):(G.toArray(P.__data,H),H+=j.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,B,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(S,y,E,N){const A=S.value,R=y+"_"+E;if(N[R]===void 0)return typeof A=="number"||typeof A=="boolean"?N[R]=A:N[R]=A.clone(),!0;{const D=N[R];if(typeof A=="number"||typeof A=="boolean"){if(D!==A)return N[R]=A,!0}else if(D.equals(A)===!1)return D.copy(A),!0}return!1}function g(S){const y=S.uniforms;let E=0;const N=16;for(let R=0,D=y.length;R<D;R++){const w=Array.isArray(y[R])?y[R]:[y[R]];for(let x=0,P=w.length;x<P;x++){const B=w[x],F=Array.isArray(B.value)?B.value:[B.value];for(let H=0,X=F.length;H<X;H++){const G=F[H],j=_(G),V=E%N,ut=V%j.boundary,pt=V+ut;E+=ut,pt!==0&&N-pt<j.storage&&(E+=N-pt),B.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=E,E+=j.storage}}}const A=E%N;return A>0&&(E+=N-A),S.__size=E,S.__cache={},this}function _(S){const y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function m(S){const y=S.target;y.removeEventListener("dispose",m);const E=o.indexOf(y.__bindingPointIndex);o.splice(E,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function p(){for(const S in i)s.deleteBuffer(i[S]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}class nm{constructor(t={}){const{canvas:e=Xc(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=qe,this.toneMapping=xn,this.toneMappingExposure=1;const y=this;let E=!1,N=0,A=0,R=null,D=-1,w=null;const x=new de,P=new de;let B=null;const F=new kt(0);let H=0,X=e.width,G=e.height,j=1,V=null,ut=null;const pt=new de(0,0,X,G),mt=new de(0,0,X,G);let Ut=!1;const Gt=new Io;let W=!1,et=!1;const gt=new ee,lt=new C,At=new de,Nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Lt=!1;function qt(){return R===null?j:1}let b=n;function st(M,I){return e.getContext(M,I)}try{const M={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${yo}`),e.addEventListener("webglcontextlost",Y,!1),e.addEventListener("webglcontextrestored",K,!1),e.addEventListener("webglcontextcreationerror",at,!1),b===null){const I="webgl2";if(b=st(I,M),b===null)throw st(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let tt,dt,q,Tt,ft,yt,T,v,z,J,Z,$,bt,ct,xt,Ot,nt,vt,Wt,Dt,Mt,Ft,Ht,ne;function L(){tt=new lf(b),tt.init(),Ft=new qp(b,tt),dt=new ef(b,tt,t,Ft),q=new Vp(b),Tt=new uf(b),ft=new Rp,yt=new Xp(b,tt,q,ft,dt,Ft,Tt),T=new sf(y),v=new af(y),z=new _h(b),Ht=new Qd(b,z),J=new cf(b,z,Tt,Ht),Z=new ff(b,J,z,Tt),Wt=new df(b,dt,yt),Ot=new nf(ft),$=new Cp(y,T,v,tt,dt,Ht,Ot),bt=new tm(y,ft),ct=new Lp,xt=new Op(tt),vt=new jd(y,T,v,q,Z,d,l),nt=new Gp(y,Z,dt),ne=new em(b,Tt,dt,q),Dt=new tf(b,tt,Tt),Mt=new hf(b,tt,Tt),Tt.programs=$.programs,y.capabilities=dt,y.extensions=tt,y.properties=ft,y.renderLists=ct,y.shadowMap=nt,y.state=q,y.info=Tt}L();const rt=new jp(y,b);this.xr=rt,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const M=tt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=tt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(M){M!==void 0&&(j=M,this.setSize(X,G,!1))},this.getSize=function(M){return M.set(X,G)},this.setSize=function(M,I,O=!0){if(rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=M,G=I,e.width=Math.floor(M*j),e.height=Math.floor(I*j),O===!0&&(e.style.width=M+"px",e.style.height=I+"px"),this.setViewport(0,0,M,I)},this.getDrawingBufferSize=function(M){return M.set(X*j,G*j).floor()},this.setDrawingBufferSize=function(M,I,O){X=M,G=I,j=O,e.width=Math.floor(M*O),e.height=Math.floor(I*O),this.setViewport(0,0,M,I)},this.getCurrentViewport=function(M){return M.copy(x)},this.getViewport=function(M){return M.copy(pt)},this.setViewport=function(M,I,O,k){M.isVector4?pt.set(M.x,M.y,M.z,M.w):pt.set(M,I,O,k),q.viewport(x.copy(pt).multiplyScalar(j).round())},this.getScissor=function(M){return M.copy(mt)},this.setScissor=function(M,I,O,k){M.isVector4?mt.set(M.x,M.y,M.z,M.w):mt.set(M,I,O,k),q.scissor(P.copy(mt).multiplyScalar(j).round())},this.getScissorTest=function(){return Ut},this.setScissorTest=function(M){q.setScissorTest(Ut=M)},this.setOpaqueSort=function(M){V=M},this.setTransparentSort=function(M){ut=M},this.getClearColor=function(M){return M.copy(vt.getClearColor())},this.setClearColor=function(){vt.setClearColor.apply(vt,arguments)},this.getClearAlpha=function(){return vt.getClearAlpha()},this.setClearAlpha=function(){vt.setClearAlpha.apply(vt,arguments)},this.clear=function(M=!0,I=!0,O=!0){let k=0;if(M){let U=!1;if(R!==null){const ot=R.texture.format;U=ot===Ao||ot===To||ot===bo}if(U){const ot=R.texture.type,_t=ot===ln||ot===zn||ot===Oi||ot===_i||ot===Eo||ot===wo,St=vt.getClearColor(),Et=vt.getClearAlpha(),Pt=St.r,It=St.g,Ct=St.b;_t?(f[0]=Pt,f[1]=It,f[2]=Ct,f[3]=Et,b.clearBufferuiv(b.COLOR,0,f)):(g[0]=Pt,g[1]=It,g[2]=Ct,g[3]=Et,b.clearBufferiv(b.COLOR,0,g))}else k|=b.COLOR_BUFFER_BIT}I&&(k|=b.DEPTH_BUFFER_BIT),O&&(k|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Y,!1),e.removeEventListener("webglcontextrestored",K,!1),e.removeEventListener("webglcontextcreationerror",at,!1),ct.dispose(),xt.dispose(),ft.dispose(),T.dispose(),v.dispose(),Z.dispose(),Ht.dispose(),ne.dispose(),$.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",Xe),rt.removeEventListener("sessionend",ko),wn.stop()};function Y(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function K(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const M=Tt.autoReset,I=nt.enabled,O=nt.autoUpdate,k=nt.needsUpdate,U=nt.type;L(),Tt.autoReset=M,nt.enabled=I,nt.autoUpdate=O,nt.needsUpdate=k,nt.type=U}function at(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Rt(M){const I=M.target;I.removeEventListener("dispose",Rt),Xt(I)}function Xt(M){le(M),ft.remove(M)}function le(M){const I=ft.get(M).programs;I!==void 0&&(I.forEach(function(O){$.releaseProgram(O)}),M.isShaderMaterial&&$.releaseShaderCache(M))}this.renderBufferDirect=function(M,I,O,k,U,ot){I===null&&(I=Nt);const _t=U.isMesh&&U.matrixWorld.determinant()<0,St=ql(M,I,O,k,U);q.setMaterial(k,_t);let Et=O.index,Pt=1;if(k.wireframe===!0){if(Et=J.getWireframeAttribute(O),Et===void 0)return;Pt=2}const It=O.drawRange,Ct=O.attributes.position;let Kt=It.start*Pt,se=(It.start+It.count)*Pt;ot!==null&&(Kt=Math.max(Kt,ot.start*Pt),se=Math.min(se,(ot.start+ot.count)*Pt)),Et!==null?(Kt=Math.max(Kt,0),se=Math.min(se,Et.count)):Ct!=null&&(Kt=Math.max(Kt,0),se=Math.min(se,Ct.count));const re=se-Kt;if(re<0||re===1/0)return;Ht.setup(U,k,St,O,Et);let Ae,$t=Dt;if(Et!==null&&(Ae=z.get(Et),$t=Mt,$t.setIndex(Ae)),U.isMesh)k.wireframe===!0?(q.setLineWidth(k.wireframeLinewidth*qt()),$t.setMode(b.LINES)):$t.setMode(b.TRIANGLES);else if(U.isLine){let wt=k.linewidth;wt===void 0&&(wt=1),q.setLineWidth(wt*qt()),U.isLineSegments?$t.setMode(b.LINES):U.isLineLoop?$t.setMode(b.LINE_LOOP):$t.setMode(b.LINE_STRIP)}else U.isPoints?$t.setMode(b.POINTS):U.isSprite&&$t.setMode(b.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)$t.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))$t.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const wt=U._multiDrawStarts,ve=U._multiDrawCounts,Zt=U._multiDrawCount,Fe=Et?z.get(Et).bytesPerElement:1,Hn=ft.get(k).currentProgram.getUniforms();for(let Ce=0;Ce<Zt;Ce++)Hn.setValue(b,"_gl_DrawID",Ce),$t.render(wt[Ce]/Fe,ve[Ce])}else if(U.isInstancedMesh)$t.renderInstances(Kt,re,U.count);else if(O.isInstancedBufferGeometry){const wt=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,ve=Math.min(O.instanceCount,wt);$t.renderInstances(Kt,re,ve)}else $t.render(Kt,re)};function _e(M,I,O){M.transparent===!0&&M.side===Ue&&M.forceSinglePass===!1?(M.side=Te,M.needsUpdate=!0,Yi(M,I,O),M.side=yn,M.needsUpdate=!0,Yi(M,I,O),M.side=Ue):Yi(M,I,O)}this.compile=function(M,I,O=null){O===null&&(O=M),m=xt.get(O),m.init(I),S.push(m),O.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),M!==O&&M.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),m.setupLights();const k=new Set;return M.traverse(function(U){const ot=U.material;if(ot)if(Array.isArray(ot))for(let _t=0;_t<ot.length;_t++){const St=ot[_t];_e(St,O,U),k.add(St)}else _e(ot,O,U),k.add(ot)}),S.pop(),m=null,k},this.compileAsync=function(M,I,O=null){const k=this.compile(M,I,O);return new Promise(U=>{function ot(){if(k.forEach(function(_t){ft.get(_t).currentProgram.isReady()&&k.delete(_t)}),k.size===0){U(M);return}setTimeout(ot,10)}tt.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let Yt=null;function Je(M){Yt&&Yt(M)}function Xe(){wn.stop()}function ko(){wn.start()}const wn=new Cl;wn.setAnimationLoop(Je),typeof self<"u"&&wn.setContext(self),this.setAnimationLoop=function(M){Yt=M,rt.setAnimationLoop(M),M===null?wn.stop():wn.start()},rt.addEventListener("sessionstart",Xe),rt.addEventListener("sessionend",ko),this.render=function(M,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(I),I=rt.getCamera()),M.isScene===!0&&M.onBeforeRender(y,M,I,R),m=xt.get(M,S.length),m.init(I),S.push(m),gt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Gt.setFromProjectionMatrix(gt),et=this.localClippingEnabled,W=Ot.init(this.clippingPlanes,et),_=ct.get(M,p.length),_.init(),p.push(_),rt.enabled===!0&&rt.isPresenting===!0){const ot=y.xr.getDepthSensingMesh();ot!==null&&Ys(ot,I,-1/0,y.sortObjects)}Ys(M,I,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(V,ut),Lt=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,Lt&&vt.addToRenderList(_,M),this.info.render.frame++,W===!0&&Ot.beginShadows();const O=m.state.shadowsArray;nt.render(O,M,I),W===!0&&Ot.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=_.opaque,U=_.transmissive;if(m.setupLights(),I.isArrayCamera){const ot=I.cameras;if(U.length>0)for(let _t=0,St=ot.length;_t<St;_t++){const Et=ot[_t];Go(k,U,M,Et)}Lt&&vt.render(M);for(let _t=0,St=ot.length;_t<St;_t++){const Et=ot[_t];Ho(_,M,Et,Et.viewport)}}else U.length>0&&Go(k,U,M,I),Lt&&vt.render(M),Ho(_,M,I);R!==null&&(yt.updateMultisampleRenderTarget(R),yt.updateRenderTargetMipmap(R)),M.isScene===!0&&M.onAfterRender(y,M,I),Ht.resetDefaultState(),D=-1,w=null,S.pop(),S.length>0?(m=S[S.length-1],W===!0&&Ot.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Ys(M,I,O,k){if(M.visible===!1)return;if(M.layers.test(I.layers)){if(M.isGroup)O=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(I);else if(M.isLight)m.pushLight(M),M.castShadow&&m.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Gt.intersectsSprite(M)){k&&At.setFromMatrixPosition(M.matrixWorld).applyMatrix4(gt);const _t=Z.update(M),St=M.material;St.visible&&_.push(M,_t,St,O,At.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Gt.intersectsObject(M))){const _t=Z.update(M),St=M.material;if(k&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),At.copy(M.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),At.copy(_t.boundingSphere.center)),At.applyMatrix4(M.matrixWorld).applyMatrix4(gt)),Array.isArray(St)){const Et=_t.groups;for(let Pt=0,It=Et.length;Pt<It;Pt++){const Ct=Et[Pt],Kt=St[Ct.materialIndex];Kt&&Kt.visible&&_.push(M,_t,Kt,O,At.z,Ct)}}else St.visible&&_.push(M,_t,St,O,At.z,null)}}const ot=M.children;for(let _t=0,St=ot.length;_t<St;_t++)Ys(ot[_t],I,O,k)}function Ho(M,I,O,k){const U=M.opaque,ot=M.transmissive,_t=M.transparent;m.setupLightsView(O),W===!0&&Ot.setGlobalState(y.clippingPlanes,O),k&&q.viewport(x.copy(k)),U.length>0&&qi(U,I,O),ot.length>0&&qi(ot,I,O),_t.length>0&&qi(_t,I,O),q.buffers.depth.setTest(!0),q.buffers.depth.setMask(!0),q.buffers.color.setMask(!0),q.setPolygonOffset(!1)}function Go(M,I,O,k){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[k.id]===void 0&&(m.state.transmissionRenderTarget[k.id]=new Bn(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float")?Gi:ln,minFilter:Fn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Jt.workingColorSpace}));const ot=m.state.transmissionRenderTarget[k.id],_t=k.viewport||x;ot.setSize(_t.z,_t.w);const St=y.getRenderTarget();y.setRenderTarget(ot),y.getClearColor(F),H=y.getClearAlpha(),H<1&&y.setClearColor(16777215,.5),y.clear(),Lt&&vt.render(O);const Et=y.toneMapping;y.toneMapping=xn;const Pt=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),m.setupLightsView(k),W===!0&&Ot.setGlobalState(y.clippingPlanes,k),qi(M,O,k),yt.updateMultisampleRenderTarget(ot),yt.updateRenderTargetMipmap(ot),tt.has("WEBGL_multisampled_render_to_texture")===!1){let It=!1;for(let Ct=0,Kt=I.length;Ct<Kt;Ct++){const se=I[Ct],re=se.object,Ae=se.geometry,$t=se.material,wt=se.group;if($t.side===Ue&&re.layers.test(k.layers)){const ve=$t.side;$t.side=Te,$t.needsUpdate=!0,Vo(re,O,k,Ae,$t,wt),$t.side=ve,$t.needsUpdate=!0,It=!0}}It===!0&&(yt.updateMultisampleRenderTarget(ot),yt.updateRenderTargetMipmap(ot))}y.setRenderTarget(St),y.setClearColor(F,H),Pt!==void 0&&(k.viewport=Pt),y.toneMapping=Et}function qi(M,I,O){const k=I.isScene===!0?I.overrideMaterial:null;for(let U=0,ot=M.length;U<ot;U++){const _t=M[U],St=_t.object,Et=_t.geometry,Pt=k===null?_t.material:k,It=_t.group;St.layers.test(O.layers)&&Vo(St,I,O,Et,Pt,It)}}function Vo(M,I,O,k,U,ot){M.onBeforeRender(y,I,O,k,U,ot),M.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),U.transparent===!0&&U.side===Ue&&U.forceSinglePass===!1?(U.side=Te,U.needsUpdate=!0,y.renderBufferDirect(O,I,k,U,M,ot),U.side=yn,U.needsUpdate=!0,y.renderBufferDirect(O,I,k,U,M,ot),U.side=Ue):y.renderBufferDirect(O,I,k,U,M,ot),M.onAfterRender(y,I,O,k,U,ot)}function Yi(M,I,O){I.isScene!==!0&&(I=Nt);const k=ft.get(M),U=m.state.lights,ot=m.state.shadowsArray,_t=U.state.version,St=$.getParameters(M,U.state,ot,I,O),Et=$.getProgramCacheKey(St);let Pt=k.programs;k.environment=M.isMeshStandardMaterial?I.environment:null,k.fog=I.fog,k.envMap=(M.isMeshStandardMaterial?v:T).get(M.envMap||k.environment),k.envMapRotation=k.environment!==null&&M.envMap===null?I.environmentRotation:M.envMapRotation,Pt===void 0&&(M.addEventListener("dispose",Rt),Pt=new Map,k.programs=Pt);let It=Pt.get(Et);if(It!==void 0){if(k.currentProgram===It&&k.lightsStateVersion===_t)return Xo(M,St),It}else St.uniforms=$.getUniforms(M),M.onBeforeCompile(St,y),It=$.acquireProgram(St,Et),Pt.set(Et,It),k.uniforms=St.uniforms;const Ct=k.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ct.clippingPlanes=Ot.uniform),Xo(M,St),k.needsLights=Kl(M),k.lightsStateVersion=_t,k.needsLights&&(Ct.ambientLightColor.value=U.state.ambient,Ct.lightProbe.value=U.state.probe,Ct.directionalLights.value=U.state.directional,Ct.directionalLightShadows.value=U.state.directionalShadow,Ct.spotLights.value=U.state.spot,Ct.spotLightShadows.value=U.state.spotShadow,Ct.rectAreaLights.value=U.state.rectArea,Ct.ltc_1.value=U.state.rectAreaLTC1,Ct.ltc_2.value=U.state.rectAreaLTC2,Ct.pointLights.value=U.state.point,Ct.pointLightShadows.value=U.state.pointShadow,Ct.hemisphereLights.value=U.state.hemi,Ct.directionalShadowMap.value=U.state.directionalShadowMap,Ct.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Ct.spotShadowMap.value=U.state.spotShadowMap,Ct.spotLightMatrix.value=U.state.spotLightMatrix,Ct.spotLightMap.value=U.state.spotLightMap,Ct.pointShadowMap.value=U.state.pointShadowMap,Ct.pointShadowMatrix.value=U.state.pointShadowMatrix),k.currentProgram=It,k.uniformsList=null,It}function Wo(M){if(M.uniformsList===null){const I=M.currentProgram.getUniforms();M.uniformsList=Ps.seqWithValue(I.seq,M.uniforms)}return M.uniformsList}function Xo(M,I){const O=ft.get(M);O.outputColorSpace=I.outputColorSpace,O.batching=I.batching,O.batchingColor=I.batchingColor,O.instancing=I.instancing,O.instancingColor=I.instancingColor,O.instancingMorph=I.instancingMorph,O.skinning=I.skinning,O.morphTargets=I.morphTargets,O.morphNormals=I.morphNormals,O.morphColors=I.morphColors,O.morphTargetsCount=I.morphTargetsCount,O.numClippingPlanes=I.numClippingPlanes,O.numIntersection=I.numClipIntersection,O.vertexAlphas=I.vertexAlphas,O.vertexTangents=I.vertexTangents,O.toneMapping=I.toneMapping}function ql(M,I,O,k,U){I.isScene!==!0&&(I=Nt),yt.resetTextureUnits();const ot=I.fog,_t=k.isMeshStandardMaterial?I.environment:null,St=R===null?y.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Sn,Et=(k.isMeshStandardMaterial?v:T).get(k.envMap||_t),Pt=k.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,It=!!O.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Ct=!!O.morphAttributes.position,Kt=!!O.morphAttributes.normal,se=!!O.morphAttributes.color;let re=xn;k.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(re=y.toneMapping);const Ae=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,$t=Ae!==void 0?Ae.length:0,wt=ft.get(k),ve=m.state.lights;if(W===!0&&(et===!0||M!==w)){const Le=M===w&&k.id===D;Ot.setState(k,M,Le)}let Zt=!1;k.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==ve.state.version||wt.outputColorSpace!==St||U.isBatchedMesh&&wt.batching===!1||!U.isBatchedMesh&&wt.batching===!0||U.isBatchedMesh&&wt.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&wt.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&wt.instancing===!1||!U.isInstancedMesh&&wt.instancing===!0||U.isSkinnedMesh&&wt.skinning===!1||!U.isSkinnedMesh&&wt.skinning===!0||U.isInstancedMesh&&wt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&wt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&wt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&wt.instancingMorph===!1&&U.morphTexture!==null||wt.envMap!==Et||k.fog===!0&&wt.fog!==ot||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==Ot.numPlanes||wt.numIntersection!==Ot.numIntersection)||wt.vertexAlphas!==Pt||wt.vertexTangents!==It||wt.morphTargets!==Ct||wt.morphNormals!==Kt||wt.morphColors!==se||wt.toneMapping!==re||wt.morphTargetsCount!==$t)&&(Zt=!0):(Zt=!0,wt.__version=k.version);let Fe=wt.currentProgram;Zt===!0&&(Fe=Yi(k,I,U));let Hn=!1,Ce=!1,Ks=!1;const ce=Fe.getUniforms(),hn=wt.uniforms;if(q.useProgram(Fe.program)&&(Hn=!0,Ce=!0,Ks=!0),k.id!==D&&(D=k.id,Ce=!0),Hn||w!==M){ce.setValue(b,"projectionMatrix",M.projectionMatrix),ce.setValue(b,"viewMatrix",M.matrixWorldInverse);const Le=ce.map.cameraPosition;Le!==void 0&&Le.setValue(b,lt.setFromMatrixPosition(M.matrixWorld)),dt.logarithmicDepthBuffer&&ce.setValue(b,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ce.setValue(b,"isOrthographic",M.isOrthographicCamera===!0),w!==M&&(w=M,Ce=!0,Ks=!0)}if(U.isSkinnedMesh){ce.setOptional(b,U,"bindMatrix"),ce.setOptional(b,U,"bindMatrixInverse");const Le=U.skeleton;Le&&(Le.boneTexture===null&&Le.computeBoneTexture(),ce.setValue(b,"boneTexture",Le.boneTexture,yt))}U.isBatchedMesh&&(ce.setOptional(b,U,"batchingTexture"),ce.setValue(b,"batchingTexture",U._matricesTexture,yt),ce.setOptional(b,U,"batchingIdTexture"),ce.setValue(b,"batchingIdTexture",U._indirectTexture,yt),ce.setOptional(b,U,"batchingColorTexture"),U._colorsTexture!==null&&ce.setValue(b,"batchingColorTexture",U._colorsTexture,yt));const $s=O.morphAttributes;if(($s.position!==void 0||$s.normal!==void 0||$s.color!==void 0)&&Wt.update(U,O,Fe),(Ce||wt.receiveShadow!==U.receiveShadow)&&(wt.receiveShadow=U.receiveShadow,ce.setValue(b,"receiveShadow",U.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(hn.envMap.value=Et,hn.flipEnvMap.value=Et.isCubeTexture&&Et.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&I.environment!==null&&(hn.envMapIntensity.value=I.environmentIntensity),Ce&&(ce.setValue(b,"toneMappingExposure",y.toneMappingExposure),wt.needsLights&&Yl(hn,Ks),ot&&k.fog===!0&&bt.refreshFogUniforms(hn,ot),bt.refreshMaterialUniforms(hn,k,j,G,m.state.transmissionRenderTarget[M.id]),Ps.upload(b,Wo(wt),hn,yt)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Ps.upload(b,Wo(wt),hn,yt),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ce.setValue(b,"center",U.center),ce.setValue(b,"modelViewMatrix",U.modelViewMatrix),ce.setValue(b,"normalMatrix",U.normalMatrix),ce.setValue(b,"modelMatrix",U.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Le=k.uniformsGroups;for(let Zs=0,$l=Le.length;Zs<$l;Zs++){const qo=Le[Zs];ne.update(qo,Fe),ne.bind(qo,Fe)}}return Fe}function Yl(M,I){M.ambientLightColor.needsUpdate=I,M.lightProbe.needsUpdate=I,M.directionalLights.needsUpdate=I,M.directionalLightShadows.needsUpdate=I,M.pointLights.needsUpdate=I,M.pointLightShadows.needsUpdate=I,M.spotLights.needsUpdate=I,M.spotLightShadows.needsUpdate=I,M.rectAreaLights.needsUpdate=I,M.hemisphereLights.needsUpdate=I}function Kl(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(M,I,O){ft.get(M.texture).__webglTexture=I,ft.get(M.depthTexture).__webglTexture=O;const k=ft.get(M);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=O===void 0,k.__autoAllocateDepthBuffer||tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,I){const O=ft.get(M);O.__webglFramebuffer=I,O.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(M,I=0,O=0){R=M,N=I,A=O;let k=!0,U=null,ot=!1,_t=!1;if(M){const Et=ft.get(M);Et.__useDefaultFramebuffer!==void 0?(q.bindFramebuffer(b.FRAMEBUFFER,null),k=!1):Et.__webglFramebuffer===void 0?yt.setupRenderTarget(M):Et.__hasExternalTextures&&yt.rebindTextures(M,ft.get(M.texture).__webglTexture,ft.get(M.depthTexture).__webglTexture);const Pt=M.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(_t=!0);const It=ft.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(It[I])?U=It[I][O]:U=It[I],ot=!0):M.samples>0&&yt.useMultisampledRTT(M)===!1?U=ft.get(M).__webglMultisampledFramebuffer:Array.isArray(It)?U=It[O]:U=It,x.copy(M.viewport),P.copy(M.scissor),B=M.scissorTest}else x.copy(pt).multiplyScalar(j).floor(),P.copy(mt).multiplyScalar(j).floor(),B=Ut;if(q.bindFramebuffer(b.FRAMEBUFFER,U)&&k&&q.drawBuffers(M,U),q.viewport(x),q.scissor(P),q.setScissorTest(B),ot){const Et=ft.get(M.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+I,Et.__webglTexture,O)}else if(_t){const Et=ft.get(M.texture),Pt=I||0;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,Et.__webglTexture,O||0,Pt)}D=-1},this.readRenderTargetPixels=function(M,I,O,k,U,ot,_t){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=ft.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&_t!==void 0&&(St=St[_t]),St){q.bindFramebuffer(b.FRAMEBUFFER,St);try{const Et=M.texture,Pt=Et.format,It=Et.type;if(!dt.textureFormatReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!dt.textureTypeReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=M.width-k&&O>=0&&O<=M.height-U&&b.readPixels(I,O,k,U,Ft.convert(Pt),Ft.convert(It),ot)}finally{const Et=R!==null?ft.get(R).__webglFramebuffer:null;q.bindFramebuffer(b.FRAMEBUFFER,Et)}}},this.readRenderTargetPixelsAsync=async function(M,I,O,k,U,ot,_t){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=ft.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&_t!==void 0&&(St=St[_t]),St){q.bindFramebuffer(b.FRAMEBUFFER,St);try{const Et=M.texture,Pt=Et.format,It=Et.type;if(!dt.textureFormatReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!dt.textureTypeReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=M.width-k&&O>=0&&O<=M.height-U){const Ct=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,Ct),b.bufferData(b.PIXEL_PACK_BUFFER,ot.byteLength,b.STREAM_READ),b.readPixels(I,O,k,U,Ft.convert(Pt),Ft.convert(It),0),b.flush();const Kt=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);await qc(b,Kt,4);try{b.bindBuffer(b.PIXEL_PACK_BUFFER,Ct),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,ot)}finally{b.deleteBuffer(Ct),b.deleteSync(Kt)}return ot}}finally{const Et=R!==null?ft.get(R).__webglFramebuffer:null;q.bindFramebuffer(b.FRAMEBUFFER,Et)}}},this.copyFramebufferToTexture=function(M,I=null,O=0){M.isTexture!==!0&&(fi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,M=arguments[1]);const k=Math.pow(2,-O),U=Math.floor(M.image.width*k),ot=Math.floor(M.image.height*k),_t=I!==null?I.x:0,St=I!==null?I.y:0;yt.setTexture2D(M,0),b.copyTexSubImage2D(b.TEXTURE_2D,O,0,0,_t,St,U,ot),q.unbindTexture()},this.copyTextureToTexture=function(M,I,O=null,k=null,U=0){M.isTexture!==!0&&(fi("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,M=arguments[1],I=arguments[2],U=arguments[3]||0,O=null);let ot,_t,St,Et,Pt,It;O!==null?(ot=O.max.x-O.min.x,_t=O.max.y-O.min.y,St=O.min.x,Et=O.min.y):(ot=M.image.width,_t=M.image.height,St=0,Et=0),k!==null?(Pt=k.x,It=k.y):(Pt=0,It=0);const Ct=Ft.convert(I.format),Kt=Ft.convert(I.type);yt.setTexture2D(I,0),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,I.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,I.unpackAlignment);const se=b.getParameter(b.UNPACK_ROW_LENGTH),re=b.getParameter(b.UNPACK_IMAGE_HEIGHT),Ae=b.getParameter(b.UNPACK_SKIP_PIXELS),$t=b.getParameter(b.UNPACK_SKIP_ROWS),wt=b.getParameter(b.UNPACK_SKIP_IMAGES),ve=M.isCompressedTexture?M.mipmaps[U]:M.image;b.pixelStorei(b.UNPACK_ROW_LENGTH,ve.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,ve.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,St),b.pixelStorei(b.UNPACK_SKIP_ROWS,Et),M.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,U,Pt,It,ot,_t,Ct,Kt,ve.data):M.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,U,Pt,It,ve.width,ve.height,Ct,ve.data):b.texSubImage2D(b.TEXTURE_2D,U,Pt,It,ot,_t,Ct,Kt,ve),b.pixelStorei(b.UNPACK_ROW_LENGTH,se),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,re),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Ae),b.pixelStorei(b.UNPACK_SKIP_ROWS,$t),b.pixelStorei(b.UNPACK_SKIP_IMAGES,wt),U===0&&I.generateMipmaps&&b.generateMipmap(b.TEXTURE_2D),q.unbindTexture()},this.copyTextureToTexture3D=function(M,I,O=null,k=null,U=0){M.isTexture!==!0&&(fi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,k=arguments[1]||null,M=arguments[2],I=arguments[3],U=arguments[4]||0);let ot,_t,St,Et,Pt,It,Ct,Kt,se;const re=M.isCompressedTexture?M.mipmaps[U]:M.image;O!==null?(ot=O.max.x-O.min.x,_t=O.max.y-O.min.y,St=O.max.z-O.min.z,Et=O.min.x,Pt=O.min.y,It=O.min.z):(ot=re.width,_t=re.height,St=re.depth,Et=0,Pt=0,It=0),k!==null?(Ct=k.x,Kt=k.y,se=k.z):(Ct=0,Kt=0,se=0);const Ae=Ft.convert(I.format),$t=Ft.convert(I.type);let wt;if(I.isData3DTexture)yt.setTexture3D(I,0),wt=b.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)yt.setTexture2DArray(I,0),wt=b.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,I.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,I.unpackAlignment);const ve=b.getParameter(b.UNPACK_ROW_LENGTH),Zt=b.getParameter(b.UNPACK_IMAGE_HEIGHT),Fe=b.getParameter(b.UNPACK_SKIP_PIXELS),Hn=b.getParameter(b.UNPACK_SKIP_ROWS),Ce=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,re.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,re.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Et),b.pixelStorei(b.UNPACK_SKIP_ROWS,Pt),b.pixelStorei(b.UNPACK_SKIP_IMAGES,It),M.isDataTexture||M.isData3DTexture?b.texSubImage3D(wt,U,Ct,Kt,se,ot,_t,St,Ae,$t,re.data):I.isCompressedArrayTexture?b.compressedTexSubImage3D(wt,U,Ct,Kt,se,ot,_t,St,Ae,re.data):b.texSubImage3D(wt,U,Ct,Kt,se,ot,_t,St,Ae,$t,re),b.pixelStorei(b.UNPACK_ROW_LENGTH,ve),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Zt),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Fe),b.pixelStorei(b.UNPACK_SKIP_ROWS,Hn),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Ce),U===0&&I.generateMipmaps&&b.generateMipmap(wt),q.unbindTexture()},this.initRenderTarget=function(M){ft.get(M).__webglFramebuffer===void 0&&yt.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?yt.setTextureCube(M,0):M.isData3DTexture?yt.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?yt.setTexture2DArray(M,0):yt.setTexture2D(M,0),q.unbindTexture()},this.resetState=function(){N=0,A=0,R=null,q.reset(),Ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return on}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Ro?"display-p3":"srgb",e.unpackColorSpace=Jt.workingColorSpace===Hs?"display-p3":"srgb"}}class zi{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new kt(t),this.near=e,this.far=n}clone(){return new zi(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class im extends fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new We,this.environmentIntensity=1,this.environmentRotation=new We,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class sm{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ho,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=an()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return fi("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=an()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=an()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ee=new C;class Os{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix4(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyNormalMatrix(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.transformDirection(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Ke(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Qt(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Qt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Qt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Qt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Qt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Ke(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Ke(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Ke(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Ke(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array),i=Qt(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array),i=Qt(i,this.array),r=Qt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new Ve(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Os(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ws extends En{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ri;const Ci=new C,oi=new C,ai=new C,li=new it,Ri=new it,Nl=new ee,gs=new C,Pi=new C,_s=new C,Ha=new it,br=new it,Ga=new it;class On extends fe{constructor(t=new Ws){if(super(),this.isSprite=!0,this.type="Sprite",ri===void 0){ri=new Se;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new sm(e,5);ri.setIndex([0,1,2,0,2,3]),ri.setAttribute("position",new Os(n,3,0,!1)),ri.setAttribute("uv",new Os(n,2,3,!1))}this.geometry=ri,this.material=t,this.center=new it(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),oi.setFromMatrixScale(this.matrixWorld),Nl.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ai.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&oi.multiplyScalar(-ai.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;vs(gs.set(-.5,-.5,0),ai,o,oi,i,r),vs(Pi.set(.5,-.5,0),ai,o,oi,i,r),vs(_s.set(.5,.5,0),ai,o,oi,i,r),Ha.set(0,0),br.set(1,0),Ga.set(1,1);let a=t.ray.intersectTriangle(gs,Pi,_s,!1,Ci);if(a===null&&(vs(Pi.set(-.5,.5,0),ai,o,oi,i,r),br.set(0,1),a=t.ray.intersectTriangle(gs,_s,Pi,!1,Ci),a===null))return;const l=t.ray.origin.distanceTo(Ci);l<t.near||l>t.far||e.push({distance:l,point:Ci.clone(),uv:He.getInterpolation(Ci,gs,Pi,_s,Ha,br,Ga,new it),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function vs(s,t,e,n,i,r){li.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Ri.x=r*li.x-i*li.y,Ri.y=i*li.x+r*li.y):Ri.copy(li),s.copy(t),s.x+=Ri.x,s.y+=Ri.y,s.applyMatrix4(Nl)}const xs=new C,Va=new C;class rm extends fe{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(t){super.copy(t,!1);const e=t.levels;for(let n=0,i=e.length;n<i;n++){const r=e[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=t.autoUpdate,this}addLevel(t,e=0,n=0){e=Math.abs(e);const i=this.levels;let r;for(r=0;r<i.length&&!(e<i[r].distance);r++);return i.splice(r,0,{distance:e,hysteresis:n,object:t}),this.add(t),this}getCurrentLevel(){return this._currentLevel}getObjectForDistance(t){const e=this.levels;if(e.length>0){let n,i;for(n=1,i=e.length;n<i;n++){let r=e[n].distance;if(e[n].object.visible&&(r-=r*e[n].hysteresis),t<r)break}return e[n-1].object}return null}raycast(t,e){if(this.levels.length>0){xs.setFromMatrixPosition(this.matrixWorld);const i=t.ray.origin.distanceTo(xs);this.getObjectForDistance(i).raycast(t,e)}}update(t){const e=this.levels;if(e.length>1){xs.setFromMatrixPosition(t.matrixWorld),Va.setFromMatrixPosition(this.matrixWorld);const n=xs.distanceTo(Va)/t.zoom;e[0].object.visible=!0;let i,r;for(i=1,r=e.length;i<r;i++){let o=e[i].distance;if(e[i].object.visible&&(o-=o*e[i].hysteresis),n>=o)e[i-1].object.visible=!1,e[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<r;i++)e[i].object.visible=!1}}toJSON(t){const e=super.toJSON(t);this.autoUpdate===!1&&(e.object.autoUpdate=!1),e.object.levels=[];const n=this.levels;for(let i=0,r=n.length;i<r;i++){const o=n[i];e.object.levels.push({object:o.object.uuid,distance:o.distance,hysteresis:o.hysteresis})}return e}}class po extends En{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const zs=new C,Bs=new C,Wa=new ee,Li=new Po,ys=new Gs,Tr=new C,Xa=new C;class qa extends fe{constructor(t=new Se,e=new po){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)zs.fromBufferAttribute(e,i-1),Bs.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=zs.distanceTo(Bs);t.setAttribute("lineDistance",new oe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ys.copy(n.boundingSphere),ys.applyMatrix4(i),ys.radius+=r,t.ray.intersectsSphere(ys)===!1)return;Wa.copy(i).invert(),Li.copy(t.ray).applyMatrix4(Wa);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){const p=h.getX(_),S=h.getX(_+1),y=Ms(this,t,Li,l,p,S);y&&e.push(y)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=Ms(this,t,Li,l,_,m);p&&e.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){const p=Ms(this,t,Li,l,_,_+1);p&&e.push(p)}if(this.isLineLoop){const _=Ms(this,t,Li,l,g-1,f);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ms(s,t,e,n,i,r){const o=s.geometry.attributes.position;if(zs.fromBufferAttribute(o,i),Bs.fromBufferAttribute(o,r),e.distanceSqToSegment(zs,Bs,Tr,Xa)>n)return;Tr.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(Tr);if(!(l<t.near||l>t.far))return{distance:l,point:Xa.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,object:s}}class Uo extends be{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ze{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new it:new C);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new C,i=[],r=[],o=[],a=new C,l=new ee;for(let f=0;f<=t;f++){const g=f/t;i[f]=this.getTangentAt(g,new C)}r[0]=new C,o[0]=new C;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(xe(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(xe(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class No extends Ze{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new it){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class om extends No{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Fo(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return s+t*r+e*o+n*a}}}const Ss=new C,Ar=new Fo,Cr=new Fo,Rr=new Fo;class am extends Ze{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new C){const n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(Ss.subVectors(i[0],i[1]).add(i[0]),c=Ss);const u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Ss.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Ss),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Ar.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,m),Cr.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,m),Rr.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Ar.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Cr.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Rr.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Ar.calc(l),Cr.calc(l),Rr.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new C().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Ya(s,t,e,n,i){const r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function lm(s,t){const e=1-s;return e*e*t}function cm(s,t){return 2*(1-s)*s*t}function hm(s,t){return s*s*t}function Di(s,t,e,n){return lm(s,t)+cm(s,e)+hm(s,n)}function um(s,t){const e=1-s;return e*e*e*t}function dm(s,t){const e=1-s;return 3*e*e*s*t}function fm(s,t){return 3*(1-s)*s*s*t}function pm(s,t){return s*s*s*t}function Ui(s,t,e,n,i){return um(s,t)+dm(s,e)+fm(s,n)+pm(s,i)}class Fl extends Ze{constructor(t=new it,e=new it,n=new it,i=new it){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new it){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ui(t,i.x,r.x,o.x,a.x),Ui(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class mm extends Ze{constructor(t=new C,e=new C,n=new C,i=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new C){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ui(t,i.x,r.x,o.x,a.x),Ui(t,i.y,r.y,o.y,a.y),Ui(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ol extends Ze{constructor(t=new it,e=new it){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new it){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new it){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class gm extends Ze{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class zl extends Ze{constructor(t=new it,e=new it,n=new it){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new it){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Di(t,i.x,r.x,o.x),Di(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class _m extends Ze{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Di(t,i.x,r.x,o.x),Di(t,i.y,r.y,o.y),Di(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Bl extends Ze{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new it){const n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Ya(a,l.x,c.x,h.x,u.x),Ya(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new it().fromArray(i))}return this}}var mo=Object.freeze({__proto__:null,ArcCurve:om,CatmullRomCurve3:am,CubicBezierCurve:Fl,CubicBezierCurve3:mm,EllipseCurve:No,LineCurve:Ol,LineCurve3:gm,QuadraticBezierCurve:zl,QuadraticBezierCurve3:_m,SplineCurve:Bl});class vm extends Ze{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new mo[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new mo[i.type]().fromJSON(i))}return this}}class go extends vm{constructor(t){super(),this.type="Path",this.currentPoint=new it,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Ol(this.currentPoint.clone(),new it(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new zl(this.currentPoint.clone(),new it(t,e),new it(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){const a=new Fl(this.currentPoint.clone(),new it(t,e),new it(n,i),new it(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Bl(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){const c=new No(t,e,n,i,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Oo extends Se{constructor(t=[new it(0,-.5),new it(.5,0),new it(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=xe(i,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],h=1/e,u=new C,d=new it,f=new C,g=new C,_=new C;let m=0,p=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(g)}for(let S=0;S<=e;S++){const y=n+S*h*i,E=Math.sin(y),N=Math.cos(y);for(let A=0;A<=t.length-1;A++){u.x=t[A].x*E,u.y=t[A].y,u.z=t[A].x*N,o.push(u.x,u.y,u.z),d.x=S/e,d.y=A/(t.length-1),a.push(d.x,d.y);const R=l[3*A+0]*E,D=l[3*A+1],w=l[3*A+0]*N;c.push(R,D,w)}}for(let S=0;S<e;S++)for(let y=0;y<t.length-1;y++){const E=y+S*t.length,N=E,A=E+t.length,R=E+t.length+1,D=E+1;r.push(N,A,D),r.push(R,D,A)}this.setIndex(r),this.setAttribute("position",new oe(o,3)),this.setAttribute("uv",new oe(a,2)),this.setAttribute("normal",new oe(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oo(t.points,t.segments,t.phiStart,t.phiLength)}}class Ni extends Oo{constructor(t=1,e=1,n=4,i=8){const r=new go;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new Ni(t.radius,t.length,t.capSegments,t.radialSegments)}}class ue extends Se{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;S(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new oe(u,3)),this.setAttribute("normal",new oe(d,3)),this.setAttribute("uv",new oe(f,2));function S(){const E=new C,N=new C;let A=0;const R=(e-t)/n;for(let D=0;D<=r;D++){const w=[],x=D/r,P=x*(e-t)+t;for(let B=0;B<=i;B++){const F=B/i,H=F*l+a,X=Math.sin(H),G=Math.cos(H);N.x=P*X,N.y=-x*n+m,N.z=P*G,u.push(N.x,N.y,N.z),E.set(X,R,G).normalize(),d.push(E.x,E.y,E.z),f.push(F,1-x),w.push(g++)}_.push(w)}for(let D=0;D<i;D++)for(let w=0;w<r;w++){const x=_[w][D],P=_[w+1][D],B=_[w+1][D+1],F=_[w][D+1];h.push(x,P,F),h.push(P,B,F),A+=6}c.addGroup(p,A,0),p+=A}function y(E){const N=g,A=new it,R=new C;let D=0;const w=E===!0?t:e,x=E===!0?1:-1;for(let B=1;B<=i;B++)u.push(0,m*x,0),d.push(0,x,0),f.push(.5,.5),g++;const P=g;for(let B=0;B<=i;B++){const H=B/i*l+a,X=Math.cos(H),G=Math.sin(H);R.x=w*G,R.y=m*x,R.z=w*X,u.push(R.x,R.y,R.z),d.push(0,x,0),A.x=X*.5+.5,A.y=G*.5*x+.5,f.push(A.x,A.y),g++}for(let B=0;B<i;B++){const F=N+B,H=P+B;E===!0?h.push(H,H+1,F):h.push(H+1,H,F),D+=3}c.addGroup(p,D,E===!0?1:2),p+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ue(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class zo extends go{constructor(t){super(t),this.uuid=an(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new go().fromJSON(i))}return this}}const xm={triangulate:function(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=kl(s,0,i,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,d,f;if(n&&(r=wm(s,t,r,e)),s.length>80*e){a=c=s[0],l=h=s[1];for(let g=e;g<i;g+=e)u=s[g],d=s[g+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return Bi(r,o,e,a,l,f,0),o}};function kl(s,t,e,n,i){let r,o;if(i===Nm(s,t,e,n)>0)for(r=t;r<e;r+=n)o=Ka(r,s[r],s[r+1],o);else for(r=e-n;r>=t;r-=n)o=Ka(r,s[r],s[r+1],o);return o&&Xs(o,o.next)&&(Hi(o),o=o.next),o}function kn(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Xs(e,e.next)||ie(e.prev,e,e.next)===0)){if(Hi(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Bi(s,t,e,n,i,r,o){if(!s)return;!o&&r&&Rm(s,n,i,r);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?Mm(s,n,i,r):ym(s)){t.push(l.i/e|0),t.push(s.i/e|0),t.push(c.i/e|0),Hi(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=Sm(kn(s),t,e),Bi(s,t,e,n,i,r,2)):o===2&&Em(s,t,e,n,i,r):Bi(kn(s),t,e,n,i,r,1);break}}}function ym(s){const t=s.prev,e=s,n=s.next;if(ie(t,e,n)>=0)return!1;const i=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=i<r?i<o?i:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,d=i>r?i>o?i:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&hi(i,a,r,l,o,c,g.x,g.y)&&ie(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Mm(s,t,e,n){const i=s.prev,r=s,o=s.next;if(ie(i,r,o)>=0)return!1;const a=i.x,l=r.x,c=o.x,h=i.y,u=r.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,_=a>l?a>c?a:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,p=_o(f,g,t,e,n),S=_o(_,m,t,e,n);let y=s.prevZ,E=s.nextZ;for(;y&&y.z>=p&&E&&E.z<=S;){if(y.x>=f&&y.x<=_&&y.y>=g&&y.y<=m&&y!==i&&y!==o&&hi(a,h,l,u,c,d,y.x,y.y)&&ie(y.prev,y,y.next)>=0||(y=y.prevZ,E.x>=f&&E.x<=_&&E.y>=g&&E.y<=m&&E!==i&&E!==o&&hi(a,h,l,u,c,d,E.x,E.y)&&ie(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=_&&y.y>=g&&y.y<=m&&y!==i&&y!==o&&hi(a,h,l,u,c,d,y.x,y.y)&&ie(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;E&&E.z<=S;){if(E.x>=f&&E.x<=_&&E.y>=g&&E.y<=m&&E!==i&&E!==o&&hi(a,h,l,u,c,d,E.x,E.y)&&ie(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function Sm(s,t,e){let n=s;do{const i=n.prev,r=n.next.next;!Xs(i,r)&&Hl(i,n,n.next,r)&&ki(i,r)&&ki(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Hi(n),Hi(n.next),n=s=r),n=n.next}while(n!==s);return kn(n)}function Em(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Im(o,a)){let l=Gl(o,a);o=kn(o,o.next),l=kn(l,l.next),Bi(o,t,e,n,i,r,0),Bi(l,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function wm(s,t,e,n){const i=[];let r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:s.length,c=kl(s,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(Lm(c));for(i.sort(bm),r=0;r<i.length;r++)e=Tm(i[r],e);return e}function bm(s,t){return s.x-t.x}function Tm(s,t){const e=Am(s,t);if(!e)return t;const n=Gl(e,s);return kn(n,n.next),kn(e,e.next)}function Am(s,t){let e=t,n=-1/0,i;const r=s.x,o=s.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,i=e.x<e.next.x?e:e.next,d===r))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,l=i.x,c=i.y;let h=1/0,u;e=i;do r>=e.x&&e.x>=l&&r!==e.x&&hi(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),ki(e,s)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&Cm(i,e)))&&(i=e,h=u)),e=e.next;while(e!==a);return i}function Cm(s,t){return ie(s.prev,s,t.prev)<0&&ie(t.next,s,s.next)<0}function Rm(s,t,e,n){let i=s;do i.z===0&&(i.z=_o(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Pm(i)}function Pm(s){let t,e,n,i,r,o,a,l,c=1;do{for(e=s,s=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,c*=2}while(o>1);return s}function _o(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Lm(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function hi(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function Im(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!Dm(s,t)&&(ki(s,t)&&ki(t,s)&&Um(s,t)&&(ie(s.prev,s,t.prev)||ie(s,t.prev,t))||Xs(s,t)&&ie(s.prev,s,s.next)>0&&ie(t.prev,t,t.next)>0)}function ie(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Xs(s,t){return s.x===t.x&&s.y===t.y}function Hl(s,t,e,n){const i=ws(ie(s,t,e)),r=ws(ie(s,t,n)),o=ws(ie(e,n,s)),a=ws(ie(e,n,t));return!!(i!==r&&o!==a||i===0&&Es(s,e,t)||r===0&&Es(s,n,t)||o===0&&Es(e,s,n)||a===0&&Es(e,t,n))}function Es(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function ws(s){return s>0?1:s<0?-1:0}function Dm(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Hl(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function ki(s,t){return ie(s.prev,s,s.next)<0?ie(s,t,s.next)>=0&&ie(s,s.prev,t)>=0:ie(s,t,s.prev)<0||ie(s,s.next,t)<0}function Um(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Gl(s,t){const e=new vo(s.i,s.x,s.y),n=new vo(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Ka(s,t,e,n){const i=new vo(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Hi(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function vo(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Nm(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class Fi{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return Fi.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];$a(t),Za(n,t);let o=t.length;e.forEach($a);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,Za(n,e[l]);const a=xm.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function $a(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Za(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class qs extends Se{constructor(t=new zo([new it(.5,.5),new it(-.5,.5),new it(-.5,-.5),new it(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new oe(i,3)),this.setAttribute("uv",new oe(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:Fm;let y,E=!1,N,A,R,D;p&&(y=p.getSpacedPoints(h),E=!0,d=!1,N=p.computeFrenetFrames(h,!1),A=new C,R=new C,D=new C),d||(m=0,f=0,g=0,_=0);const w=a.extractPoints(c);let x=w.shape;const P=w.holes;if(!Fi.isClockWise(x)){x=x.reverse();for(let b=0,st=P.length;b<st;b++){const tt=P[b];Fi.isClockWise(tt)&&(P[b]=tt.reverse())}}const F=Fi.triangulateShape(x,P),H=x;for(let b=0,st=P.length;b<st;b++){const tt=P[b];x=x.concat(tt)}function X(b,st,tt){return st||console.error("THREE.ExtrudeGeometry: vec does not exist"),b.clone().addScaledVector(st,tt)}const G=x.length,j=F.length;function V(b,st,tt){let dt,q,Tt;const ft=b.x-st.x,yt=b.y-st.y,T=tt.x-b.x,v=tt.y-b.y,z=ft*ft+yt*yt,J=ft*v-yt*T;if(Math.abs(J)>Number.EPSILON){const Z=Math.sqrt(z),$=Math.sqrt(T*T+v*v),bt=st.x-yt/Z,ct=st.y+ft/Z,xt=tt.x-v/$,Ot=tt.y+T/$,nt=((xt-bt)*v-(Ot-ct)*T)/(ft*v-yt*T);dt=bt+ft*nt-b.x,q=ct+yt*nt-b.y;const vt=dt*dt+q*q;if(vt<=2)return new it(dt,q);Tt=Math.sqrt(vt/2)}else{let Z=!1;ft>Number.EPSILON?T>Number.EPSILON&&(Z=!0):ft<-Number.EPSILON?T<-Number.EPSILON&&(Z=!0):Math.sign(yt)===Math.sign(v)&&(Z=!0),Z?(dt=-yt,q=ft,Tt=Math.sqrt(z)):(dt=ft,q=yt,Tt=Math.sqrt(z/2))}return new it(dt/Tt,q/Tt)}const ut=[];for(let b=0,st=H.length,tt=st-1,dt=b+1;b<st;b++,tt++,dt++)tt===st&&(tt=0),dt===st&&(dt=0),ut[b]=V(H[b],H[tt],H[dt]);const pt=[];let mt,Ut=ut.concat();for(let b=0,st=P.length;b<st;b++){const tt=P[b];mt=[];for(let dt=0,q=tt.length,Tt=q-1,ft=dt+1;dt<q;dt++,Tt++,ft++)Tt===q&&(Tt=0),ft===q&&(ft=0),mt[dt]=V(tt[dt],tt[Tt],tt[ft]);pt.push(mt),Ut=Ut.concat(mt)}for(let b=0;b<m;b++){const st=b/m,tt=f*Math.cos(st*Math.PI/2),dt=g*Math.sin(st*Math.PI/2)+_;for(let q=0,Tt=H.length;q<Tt;q++){const ft=X(H[q],ut[q],dt);lt(ft.x,ft.y,-tt)}for(let q=0,Tt=P.length;q<Tt;q++){const ft=P[q];mt=pt[q];for(let yt=0,T=ft.length;yt<T;yt++){const v=X(ft[yt],mt[yt],dt);lt(v.x,v.y,-tt)}}}const Gt=g+_;for(let b=0;b<G;b++){const st=d?X(x[b],Ut[b],Gt):x[b];E?(R.copy(N.normals[0]).multiplyScalar(st.x),A.copy(N.binormals[0]).multiplyScalar(st.y),D.copy(y[0]).add(R).add(A),lt(D.x,D.y,D.z)):lt(st.x,st.y,0)}for(let b=1;b<=h;b++)for(let st=0;st<G;st++){const tt=d?X(x[st],Ut[st],Gt):x[st];E?(R.copy(N.normals[b]).multiplyScalar(tt.x),A.copy(N.binormals[b]).multiplyScalar(tt.y),D.copy(y[b]).add(R).add(A),lt(D.x,D.y,D.z)):lt(tt.x,tt.y,u/h*b)}for(let b=m-1;b>=0;b--){const st=b/m,tt=f*Math.cos(st*Math.PI/2),dt=g*Math.sin(st*Math.PI/2)+_;for(let q=0,Tt=H.length;q<Tt;q++){const ft=X(H[q],ut[q],dt);lt(ft.x,ft.y,u+tt)}for(let q=0,Tt=P.length;q<Tt;q++){const ft=P[q];mt=pt[q];for(let yt=0,T=ft.length;yt<T;yt++){const v=X(ft[yt],mt[yt],dt);E?lt(v.x,v.y+y[h-1].y,y[h-1].x+tt):lt(v.x,v.y,u+tt)}}}W(),et();function W(){const b=i.length/3;if(d){let st=0,tt=G*st;for(let dt=0;dt<j;dt++){const q=F[dt];At(q[2]+tt,q[1]+tt,q[0]+tt)}st=h+m*2,tt=G*st;for(let dt=0;dt<j;dt++){const q=F[dt];At(q[0]+tt,q[1]+tt,q[2]+tt)}}else{for(let st=0;st<j;st++){const tt=F[st];At(tt[2],tt[1],tt[0])}for(let st=0;st<j;st++){const tt=F[st];At(tt[0]+G*h,tt[1]+G*h,tt[2]+G*h)}}n.addGroup(b,i.length/3-b,0)}function et(){const b=i.length/3;let st=0;gt(H,st),st+=H.length;for(let tt=0,dt=P.length;tt<dt;tt++){const q=P[tt];gt(q,st),st+=q.length}n.addGroup(b,i.length/3-b,1)}function gt(b,st){let tt=b.length;for(;--tt>=0;){const dt=tt;let q=tt-1;q<0&&(q=b.length-1);for(let Tt=0,ft=h+m*2;Tt<ft;Tt++){const yt=G*Tt,T=G*(Tt+1),v=st+dt+yt,z=st+q+yt,J=st+q+T,Z=st+dt+T;Nt(v,z,J,Z)}}}function lt(b,st,tt){l.push(b),l.push(st),l.push(tt)}function At(b,st,tt){Lt(b),Lt(st),Lt(tt);const dt=i.length/3,q=S.generateTopUV(n,i,dt-3,dt-2,dt-1);qt(q[0]),qt(q[1]),qt(q[2])}function Nt(b,st,tt,dt){Lt(b),Lt(st),Lt(dt),Lt(st),Lt(tt),Lt(dt);const q=i.length/3,Tt=S.generateSideWallUV(n,i,q-6,q-3,q-2,q-1);qt(Tt[0]),qt(Tt[1]),qt(Tt[3]),qt(Tt[1]),qt(Tt[2]),qt(Tt[3])}function Lt(b){i.push(l[b*3+0]),i.push(l[b*3+1]),i.push(l[b*3+2])}function qt(b){r.push(b.x),r.push(b.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Om(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new mo[i.type]().fromJSON(i)),new qs(n,t.options)}}const Fm={generateTopUV:function(s,t,e,n,i){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new it(r,o),new it(a,l),new it(c,h)]},generateSideWallUV:function(s,t,e,n,i,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[i*3],f=t[i*3+1],g=t[i*3+2],_=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new it(o,1-l),new it(c,1-u),new it(d,1-g),new it(_,1-p)]:[new it(a,1-l),new it(h,1-u),new it(f,1-g),new it(m,1-p)]}};function Om(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class cn extends Se{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new C,d=new C,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const S=[],y=p/n;let E=0;p===0&&o===0?E=.5/e:p===n&&l===Math.PI&&(E=-.5/e);for(let N=0;N<=e;N++){const A=N/e;u.x=-t*Math.cos(i+A*r)*Math.sin(o+y*a),u.y=t*Math.cos(o+y*a),u.z=t*Math.sin(i+A*r)*Math.sin(o+y*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(A+E,1-y),S.push(c++)}h.push(S)}for(let p=0;p<n;p++)for(let S=0;S<e;S++){const y=h[p][S+1],E=h[p][S],N=h[p+1][S],A=h[p+1][S+1];(p!==0||o>0)&&f.push(y,E,A),(p!==n-1||l<Math.PI)&&f.push(E,N,A)}this.setIndex(f),this.setAttribute("position",new oe(g,3)),this.setAttribute("normal",new oe(_,3)),this.setAttribute("uv",new oe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Xi extends Se{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],h=new C,u=new C,d=new C;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const _=g/i*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const _=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,S=(i+1)*f+g;o.push(_,m,S),o.push(m,p,S)}this.setIndex(o),this.setAttribute("position",new oe(a,3)),this.setAttribute("normal",new oe(l,3)),this.setAttribute("uv",new oe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xi(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class jt extends En{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Co,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new We,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ja extends En{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Co,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new We,this.combine=Mo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Vl extends fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Pr=new ee,ja=new C,Qa=new C;class zm{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.map=null,this.mapPass=null,this.matrix=new ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Io,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new de(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ja.setFromMatrixPosition(t.matrixWorld),e.position.copy(ja),Qa.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Qa),e.updateMatrixWorld(),Pr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Pr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Bm extends zm{constructor(){super(new Rl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class tl extends Vl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(fe.DEFAULT_UP),this.updateMatrix(),this.target=new fe,this.shadow=new Bm}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class km extends Vl{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Hm{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=el(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=el();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function el(){return(typeof performance>"u"?Date:performance).now()}const nl=new ee;class Wl{constructor(t,e,n=0,i=1/0){this.ray=new Po(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Lo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return nl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(nl),this}intersectObject(t,e=!0,n=[]){return xo(t,this,n,e),n.sort(il),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)xo(t[i],this,n,e);return n.sort(il),n}}function il(s,t){return s.distance-t.distance}function xo(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)xo(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yo);const Gm={simple_arena:{name:"Simple Arena",skyColor:"#87CEEB",fogColor:"#87CEEB",fogNear:10,fogFar:100,spawn:[8,1,5],objects:[{type:"box",pos:[0,-.5,0],size:[100,1,100],color:"#404040"},{type:"box",pos:[0,5,-20],size:[40,10,2],color:"#808080"},{type:"box",pos:[0,5,20],size:[40,10,2],color:"#808080"},{type:"box",pos:[20,5,0],size:[2,10,40],color:"#808080"},{type:"box",pos:[-20,5,0],size:[2,10,40],color:"#808080"},{type:"box",pos:[0,1,0],size:[10,2,10],color:"#4169e1"},{type:"box",pos:[15,1.5,15],size:[6,3,6],color:"#606060"},{type:"box",pos:[-15,1.5,15],size:[6,3,6],color:"#606060"},{type:"box",pos:[15,1.5,-15],size:[6,3,6],color:"#606060"},{type:"box",pos:[-15,1.5,-15],size:[6,3,6],color:"#606060"},{type:"box",pos:[0,.5,12],size:[8,1,4],color:"#606060"},{type:"box",pos:[0,.5,-12],size:[8,1,4],color:"#606060"},{type:"box",pos:[8,1,0],size:[2,2,2],color:"#8B4513"},{type:"box",pos:[-8,1,0],size:[2,2,2],color:"#8B4513"},{type:"box",pos:[0,.75,8],size:[3,1.5,1.5],color:"#8B4513"},{type:"box",pos:[0,.75,-8],size:[3,1.5,1.5],color:"#8B4513"},{type:"box",pos:[10,1.25,5],size:[1.5,2.5,1.5],color:"#8B4513"},{type:"box",pos:[-10,1.25,-5],size:[1.5,2.5,1.5],color:"#8B4513"},{type:"ramp",pos:[0,1,6.5],size:[3,2,3],rot:[0,0,0],color:"#606060"},{type:"ramp",pos:[0,1,-6.5],size:[3,2,3],rot:[0,180,0],color:"#606060"},{type:"ramp",pos:[6.5,1,0],size:[3,2,3],rot:[0,90,0],color:"#606060"},{type:"ramp",pos:[-6.5,1,0],size:[3,2,3],rot:[0,-90,0],color:"#606060"},{type:"ramp",pos:[15,1.5,11.5],size:[3,3,4],rot:[0,0,0],color:"#606060"},{type:"ramp",pos:[-15,1.5,11.5],size:[3,3,4],rot:[0,0,0],color:"#606060"},{type:"ramp",pos:[15,1.5,-11.5],size:[3,3,4],rot:[0,180,0],color:"#606060"},{type:"ramp",pos:[-15,1.5,-11.5],size:[3,3,4],rot:[0,180,0],color:"#606060"}]},krunker_style:{name:"Krunker Style",skyColor:"#a0d8ef",fogColor:"#a0d8ef",fogNear:50,fogFar:200,spawn:[0,1,0],objects:[{type:"box",pos:[0,-.5,0],size:[80,1,80],color:"#3a3a3a"},{type:"box",pos:[0,5,-20],size:[30,10,2],color:"#666666"},{type:"box",pos:[15,5,-10],size:[2,10,20],color:"#666666"},{type:"box",pos:[-15,5,-10],size:[2,10,20],color:"#666666"},{type:"box",pos:[25,7.5,25],size:[8,15,8],color:"#4a4a4a"},{type:"box",pos:[25,1,20],size:[2,2,2],color:"#8B4513"},{type:"box",pos:[25,2,18],size:[2,2,2],color:"#8B4513"},{type:"box",pos:[25,3,16],size:[2,2,2],color:"#8B4513"},{type:"box",pos:[0,2,0],size:[15,4,15],color:"#5c5c5c"},{type:"box",pos:[0,4.5,0],size:[10,1,10],color:"#ff0000"},{type:"box",pos:[10,1,10],size:[3,2,3],color:"#8B4513"},{type:"box",pos:[-10,1,10],size:[3,2,3],color:"#8B4513"},{type:"box",pos:[10,1,-10],size:[3,2,3],color:"#8B4513"},{type:"box",pos:[-10,1,-10],size:[3,2,3],color:"#8B4513"},{type:"ramp",pos:[0,2,10],size:[5,4,5],rot:[0,0,0],color:"#606060"},{type:"ramp",pos:[20,3.5,20],size:[4,7,5],rot:[0,-45,0],color:"#606060"}]}};class Vm{constructor(t){this.scene=t,this.objects=[],this.colliders=[]}loadMap(t){this.clearMap();const e=Gm[t];return e?(e.skyColor&&(this.scene.background=new kt(e.skyColor)),e.fogColor&&(this.scene.fog=new zi(e.fogColor,e.fogNear||10,e.fogFar||100)),e.objects.forEach(n=>{this.createObject(n)}),e.spawn||[0,1,0]):(console.error(`Map "${t}" not found!`),null)}clearMap(){this.objects.forEach(t=>{this.scene.remove(t)}),this.objects=[],this.colliders=[]}createObject(t){let e;switch(t.type){case"box":e=this.createBox(t);break;case"ramp":e=this.createRamp(t);break;case"cylinder":e=this.createCylinder(t);break;case"sphere":e=this.createSphere(t);break;default:console.warn(`Unknown object type: ${t.type}`);return}e&&(this.objects.push(e),this.scene.add(e),t.noCollide||this.colliders.push({type:t.type,position:t.pos,size:t.size,rotation:t.rot||[0,0,0],mesh:e}))}createBox(t){const[e,n,i]=t.size,[r,o,a]=t.pos,l=new Vt(e,n,i),c=new jt({color:t.color||"#808080",roughness:t.roughness||.7,metalness:t.metalness||.1}),h=new Q(l,c);return h.position.set(r,o,a),t.rot&&(h.rotation.x=t.rot[0]*Math.PI/180,h.rotation.y=t.rot[1]*Math.PI/180,h.rotation.z=t.rot[2]*Math.PI/180),h.castShadow=!0,h.receiveShadow=!0,h}createRamp(t){const[e,n,i]=t.size,[r,o,a]=t.pos,l=new zo;l.moveTo(0,0),l.lineTo(i,0),l.lineTo(i,n),l.closePath();const c={steps:1,depth:e,bevelEnabled:!1},h=new qs(l,c);h.center();const u=new jt({color:t.color||"#606060",roughness:t.roughness||.7,metalness:t.metalness||.1}),d=new Q(h,u);return d.position.set(r,o,a),t.rot&&(d.rotation.x=t.rot[0]*Math.PI/180,d.rotation.y=t.rot[1]*Math.PI/180,d.rotation.z=t.rot[2]*Math.PI/180),d.castShadow=!0,d.receiveShadow=!0,d}createCylinder(t){const[e,n]=t.size,[i,r,o]=t.pos,a=new ue(e,e,n,16),l=new jt({color:t.color||"#808080",roughness:t.roughness||.7,metalness:t.metalness||.1}),c=new Q(a,l);return c.position.set(i,r,o),t.rot&&(c.rotation.x=t.rot[0]*Math.PI/180,c.rotation.y=t.rot[1]*Math.PI/180,c.rotation.z=t.rot[2]*Math.PI/180),c.castShadow=!0,c.receiveShadow=!0,c}createSphere(t){const[e]=t.size,[n,i,r]=t.pos,o=new cn(e,16,16),a=new jt({color:t.color||"#808080",roughness:t.roughness||.7,metalness:t.metalness||.1}),l=new Q(o,a);return l.position.set(n,i,r),l.castShadow=!0,l.receiveShadow=!0,l}getColliders(){return this.colliders}}class Bo{constructor(t,e){this.scene=t,this.config=e,this.mesh=null,this.muzzleFlash=null,this.currentAmmo=e.magSize||30,this.reserveAmmo=e.maxAmmo||90,this.isReloading=!1,this.isFiring=!1,this.lastFireTime=0,this.reloadStartTime=0,this.recoilOffset=new C,this.swayOffset=new C,this.idleOffset=new C,this.createWeaponMesh(),this.createMuzzleFlash()}createWeaponMesh(){}createMuzzleFlash(){const t=new Mi(.3,.3),e=new $e({color:16755200,transparent:!0,opacity:0,side:Ue,blending:Lr});this.muzzleFlash=new Q(t,e),this.muzzleFlash.visible=!1,this.mesh&&(this.mesh.add(this.muzzleFlash),this.muzzleFlash.position.set(0,0,-1))}fire(){if(this.isReloading||this.currentAmmo<=0)return!1;const t=Date.now(),e=6e4/this.config.fireRate;return t-this.lastFireTime<e?!1:(this.currentAmmo--,this.lastFireTime=t,this.addRecoil(),this.showMuzzleFlash(),!0)}reload(){return this.isReloading||this.currentAmmo===this.config.magSize||this.reserveAmmo<=0?!1:(this.isReloading=!0,this.reloadStartTime=Date.now(),setTimeout(()=>{const t=this.config.magSize-this.currentAmmo,e=Math.min(t,this.reserveAmmo);this.currentAmmo+=e,this.reserveAmmo-=e,this.isReloading=!1},this.config.reloadTime*1e3),!0)}addRecoil(){const t=this.config.recoilAmount||.05;this.recoilOffset.z=t,this.recoilOffset.y=t*.5,this.recoilOffset.x=(Math.random()-.5)*t*.3}showMuzzleFlash(){this.muzzleFlash&&(this.muzzleFlash.visible=!0,this.muzzleFlash.material.opacity=1,this.muzzleFlash.rotation.z=Math.random()*Math.PI*2,setTimeout(()=>{this.muzzleFlash.visible=!1,this.muzzleFlash.material.opacity=0},50))}update(t,e,n){if(this.recoilOffset.multiplyScalar(1-t*10),e){const r=n?.02:.01,o=Date.now()*.003;this.swayOffset.x=Math.sin(o)*r,this.swayOffset.y=Math.abs(Math.sin(o*2))*r}else this.swayOffset.multiplyScalar(1-t*5);const i=Date.now()*.001;if(this.idleOffset.x=Math.sin(i*1.5)*.002,this.idleOffset.y=Math.sin(i*2)*.003,this.mesh){const r=new C().add(this.recoilOffset).add(this.swayOffset).add(this.idleOffset);this.mesh.position.x=this.config.position.x+r.x,this.mesh.position.y=this.config.position.y+r.y,this.mesh.position.z=this.config.position.z+r.z,this.mesh.rotation.x=this.config.rotation.x-this.recoilOffset.z*.5}}onEquip(){this.mesh&&(this.mesh.visible=!0)}onUnequip(){this.mesh&&(this.mesh.visible=!1)}dispose(){this.mesh&&(this.mesh.parent&&this.mesh.parent.remove(this.mesh),this.mesh.geometry&&this.mesh.geometry.dispose(),this.mesh.material&&(Array.isArray(this.mesh.material)?this.mesh.material.forEach(t=>t.dispose()):this.mesh.material.dispose()))}}class Wm extends Bo{constructor(t){const e={name:"Pistol",damage:28,fireRate:400,accuracy:.75,range:50,magSize:17,maxAmmo:102,reloadTime:2,switchTime:.5,recoilAmount:.03,position:new C(.22,-.35,-.45),rotation:new C(-.05,.1,0)};super(t,e)}createWeaponMesh(){const t=new ae,e=new Vt(.06,.22,.33),n=new jt({color:2763306,roughness:.4,metalness:.8}),i=new Q(e,n);i.position.set(0,0,0),t.add(i);const r=new Vt(.05,.16,.1),o=new jt({color:1710618,roughness:.8,metalness:.2}),a=new Q(r,o);a.position.set(0,-.1,.06),a.rotation.x=-.3,t.add(a);const l=new ue(.015,.015,.22,8),c=new jt({color:3815994,roughness:.3,metalness:.9}),h=new Q(l,c);h.rotation.z=Math.PI/2,h.position.set(0,.03,-.24),t.add(h);const u=new Xi(.035,.004,4,8,Math.PI),d=new jt({color:2763306,roughness:.4,metalness:.8}),f=new Q(u,d);f.position.set(0,-.035,0),f.rotation.z=Math.PI,t.add(f);const g=new Vt(.012,.025,.06),_=new jt({color:1710618,roughness:.6,metalness:.4}),m=new Q(g,_);m.position.set(0,.11,-.135),t.add(m);const p=new Q(g,_);p.position.set(0,.11,.1),t.add(p),t.position.copy(this.config.position),t.rotation.x=this.config.rotation.x,t.rotation.y=this.config.rotation.y,t.rotation.z=this.config.rotation.z,this.mesh=t,this.muzzleFlash&&(this.muzzleFlash.position.set(0,.03,-.35),this.muzzleFlash.scale.set(1,1,1))}}class Xm extends Bo{constructor(t){const e={name:"AK-47",damage:36,fireRate:600,accuracy:.85,range:100,magSize:30,maxAmmo:120,reloadTime:2.5,switchTime:1,recoilAmount:.06,isAutomatic:!0,position:new C(.18,-.33,-.42),rotation:new C(-.05,.05,0)};super(t,e)}createWeaponMesh(){const t=new ae,e=new Vt(.07,.14,.8),n=new jt({color:3811866,roughness:.7,metalness:.3}),i=new Q(e,n);i.position.set(0,0,0),t.add(i);const r=new Vt(.06,.12,.3),o=new jt({color:4863264,roughness:.9,metalness:.1}),a=new Q(r,o);a.position.set(0,-.03,.4),a.rotation.x=.1,t.add(a);const l=new ue(.018,.018,.48,8),c=new jt({color:2763306,roughness:.3,metalness:.9}),h=new Q(l,c);h.rotation.z=Math.PI/2,h.position.set(0,.02,-.52),t.add(h);const u=new Vt(.035,.18,.09),d=new jt({color:2763306,roughness:.5,metalness:.7}),f=new Q(u,d);f.position.set(0,-.12,0),f.rotation.x=-.15,t.add(f);const g=new Vt(.045,.09,.06),_=new jt({color:3811866,roughness:.8,metalness:.2}),m=new Q(g,_);m.position.set(0,-.09,.15),m.rotation.x=-.2,t.add(m);const p=new Vt(.018,.035,.012),S=new jt({color:1710618,roughness:.6,metalness:.4}),y=new Q(p,S);y.position.set(0,.09,-.3),t.add(y);const E=new Vt(.035,.035,.012),N=new Q(E,S);N.position.set(0,.09,.18),t.add(N);const A=new Xi(.045,.004,4,8,Math.PI),R=new jt({color:2763306,roughness:.4,metalness:.8}),D=new Q(A,R);D.position.set(0,-.045,.06),D.rotation.z=Math.PI,t.add(D);const w=new ue(.009,.009,.36,6),x=new Q(w,c);x.rotation.z=Math.PI/2,x.position.set(0,.06,-.18),t.add(x),t.position.copy(this.config.position),t.rotation.x=this.config.rotation.x,t.rotation.y=this.config.rotation.y,t.rotation.z=this.config.rotation.z,this.mesh=t,this.muzzleFlash&&(this.muzzleFlash.position.set(0,.02,-.76),this.muzzleFlash.scale.set(1.5,1.5,1))}}class qm extends Bo{constructor(t){const e={name:"Knife",damage:55,backstabDamage:100,range:2,attackRate:.8,switchTime:.3,isMelee:!0,position:new C(.25,-.32,-.4),rotation:new C(Math.PI/2,.2,.1)};super(t,e),this.isAttacking=!1,this.attackAnimation=0}createWeaponMesh(){const t=new ae,e=new zo;e.moveTo(0,0),e.lineTo(.025,0),e.lineTo(.015,.28),e.lineTo(.008,.35),e.lineTo(0,.35);const n=new qs(e,{steps:1,depth:.005,bevelEnabled:!1}),i=new jt({color:12632256,roughness:.2,metalness:.95,side:Ue}),r=new Q(n,i);r.rotation.x=Math.PI/2,r.position.set(0,0,-.175),t.add(r);const o=new ue(.025,.025,.18,8),a=new jt({color:2763306,roughness:.8,metalness:.2}),l=new Q(o,a);l.position.set(0,0,.09),l.rotation.x=Math.PI/2,t.add(l);const c=new ue(.028,.028,.12,8),h=new jt({color:1710618,roughness:.9,metalness:.1}),u=new Q(c,h);u.position.set(0,0,.09),u.rotation.x=Math.PI/2,t.add(u);const d=new Vt(.09,.012,.012),f=new jt({color:3815994,roughness:.4,metalness:.8}),g=new Q(d,f);g.position.set(0,0,0),t.add(g);const _=new cn(.026,8,8),m=new Q(_,a);m.position.set(0,0,.18),t.add(m),t.position.copy(this.config.position),t.rotation.x=this.config.rotation.x,t.rotation.y=this.config.rotation.y,t.rotation.z=this.config.rotation.z,this.mesh=t}fire(){return this.isAttacking?!1:(this.isAttacking=!0,this.attackAnimation=0,setTimeout(()=>{this.isAttacking=!1},this.config.attackRate*1e3),!0)}reload(){return!1}update(t,e,n){if(super.update(t,e,n),this.isAttacking&&this.mesh){if(this.attackAnimation+=t*8,this.attackAnimation<1){const i=this.attackAnimation;this.mesh.rotation.x=this.config.rotation.x-i*.8,this.mesh.position.z=this.config.position.z-i*.3,this.mesh.position.y=this.config.position.y+i*.1}else if(this.attackAnimation<2){const i=this.attackAnimation-1;this.mesh.rotation.x=this.config.rotation.x-.8*(1-i),this.mesh.position.z=this.config.position.z-.3*(1-i),this.mesh.position.y=this.config.position.y+.1*(1-i)}}}}class Ym{constructor(t,e,n){this.scene=t,this.weaponMount=e,this.camera=n,this.weapons={},this.currentWeapon=null,this.currentWeaponType=null,this.isSwitching=!1,this.isAutoFiring=!1,this.init()}init(){this.weapons.pistol=new Wm(this.scene),this.weapons.ak47=new Xm(this.scene),this.weapons.knife=new qm(this.scene),Object.values(this.weapons).forEach(t=>{t.mesh&&(this.weaponMount.add(t.mesh),t.mesh.visible=!1)}),this.switchWeapon("pistol")}switchWeapon(t){if(this.isSwitching||!this.weapons[t]||t===this.currentWeaponType)return!1;this.isSwitching=!0,this.isAutoFiring=!1;const e=this.currentWeapon?this.currentWeapon.config.switchTime:.5;if(this.currentWeapon&&this.currentWeapon.onUnequip(),this.weaponMount){const n=this.weaponMount.position.y;this.weaponMount.position.y-=.5,setTimeout(()=>{this.currentWeapon=this.weapons[t],this.currentWeaponType=t,this.currentWeapon.onEquip(),this.weaponMount.position.y=n,setTimeout(()=>{this.isSwitching=!1},e*500)},e*500)}return!0}startShooting(){return this.isSwitching||!this.currentWeapon?(console.log("Cannot shoot: switching or no weapon"),!1):(console.log(`Starting shooting with ${this.currentWeapon.config.name}`),this.currentWeapon.config.isAutomatic&&(this.isAutoFiring=!0,console.log("Automatic fire enabled")),this.fire())}stopShooting(){this.isAutoFiring&&console.log("Stopping automatic fire"),this.isAutoFiring=!1}fire(){if(!this.currentWeapon||this.isSwitching)return null;if(this.currentWeapon.fire()){console.log(`Fired ${this.currentWeapon.config.name} - Ammo: ${this.currentWeapon.currentAmmo}/${this.currentWeapon.reserveAmmo}`);const e=this.camera.position.clone(),n=(1-this.currentWeapon.config.accuracy)*.05,i=(Math.random()-.5)*n,r=(Math.random()-.5)*n,o=new C(i,r,-1);return o.unproject(this.camera),o.sub(this.camera.position).normalize(),{damage:this.currentWeapon.config.damage,range:this.currentWeapon.config.range,accuracy:this.currentWeapon.config.accuracy,isMelee:this.currentWeapon.config.isMelee||!1,origin:e,direction:o}}return this.currentWeapon.currentAmmo===0&&this.reload(),null}reload(){return!this.currentWeapon||this.isSwitching?!1:this.currentWeapon.reload()}update(t,e,n){if(this.currentWeapon&&(this.currentWeapon.update(t,e,n),this.isAutoFiring&&this.currentWeapon.config.isAutomatic)){const i=Date.now(),r=6e4/this.currentWeapon.config.fireRate;if(!this.lastAutoFireTime||i-this.lastAutoFireTime>=r){const o=this.fire();o&&(this.lastAutoFireTime=i,this.lastShotData=o)}}}getAmmoInfo(){return this.currentWeapon?{current:this.currentWeapon.currentAmmo,reserve:this.currentWeapon.reserveAmmo}:{current:0,reserve:0}}isReloading(){return this.currentWeapon&&this.currentWeapon.isReloading}getCurrentWeaponName(){return this.currentWeapon?this.currentWeapon.config.name:""}addSway(t,e){!this.currentWeapon||!this.currentWeapon.mesh||(this.currentWeapon.swayOffset.x+=Math.sin(e*8)*t,this.currentWeapon.swayOffset.y+=Math.abs(Math.sin(e*16))*t*.5)}dispose(){Object.values(this.weapons).forEach(t=>{t.dispose()}),this.weapons={},this.currentWeapon=null}}class Km{constructor(t,e,n=null){this.scene=t,this.camera=e,this.hitboxSystem=n,this.raycaster=new Wl,this.raycaster.near=.1,this.raycaster.far=1e3,this.impacts=[],this.maxImpacts=50,this.trails=[],this.maxTrails=20,this.createImpactPool(),this.createTrailPool()}createImpactPool(){const t=new cn(.05,4,4),e=new $e({color:16755200,transparent:!0,opacity:.8});for(let n=0;n<this.maxImpacts;n++){const i=new Q(t,e.clone());i.visible=!1,this.scene.add(i),this.impacts.push({mesh:i,active:!1,lifetime:0})}}createTrailPool(){for(let t=0;t<this.maxTrails;t++){const e=[new C,new C],n=new Se().setFromPoints(e),i=new po({color:16776960,transparent:!0,opacity:0}),r=new qa(n,i);r.visible=!1,this.scene.add(r),this.trails.push({mesh:r,active:!1,opacity:0})}}createTrail(t,e){const n=this.trails.find(c=>!c.active);if(!n)return console.log("No inactive trails available"),null;let i,r;t instanceof C?i=t.clone():i=new C((t==null?void 0:t.x)||0,(t==null?void 0:t.y)||0,(t==null?void 0:t.z)||0),e instanceof C?r=e.clone().normalize():r=new C((e==null?void 0:e.x)||0,(e==null?void 0:e.y)||0,(e==null?void 0:e.z)||-1).normalize();const o=i.clone().add(r.multiplyScalar(100)),a=n.mesh.geometry.attributes.position.array;a[0]=i.x,a[1]=i.y,a[2]=i.z,a[3]=o.x,a[4]=o.y,a[5]=o.z,n.mesh.geometry.attributes.position.needsUpdate=!0,n.active=!0,n.opacity=.8,n.mesh.material.opacity=.8,n.mesh.material.color.setHex(16776960),n.mesh.visible=!0;const l=()=>{n.opacity-=.05,n.mesh.material.opacity=n.opacity,n.opacity<=0?(n.active=!1,n.mesh.visible=!1,n.opacity=0):requestAnimationFrame(l)};return setTimeout(l,50),n.mesh}shoot(t,e,n=null){var l,c;if(t.isMelee)return this.meleeAttack(t,n);let i,r;if(t.origin&&t.direction)i=t.origin,r=t.direction;else{const h=(1-t.accuracy)*.05,u=(Math.random()-.5)*h,d=(Math.random()-.5)*h;r=new C(u,d,-1),r.unproject(this.camera),r.sub(this.camera.position).normalize(),i=this.camera.position}if(this.createTrail(i,r),this.hitboxSystem&&this.hitboxSystem.playerModels.size>0){console.log("Using hitbox system for hit detection");const h=this.hitboxSystem.checkHit(i,r,t.range,"local");if(console.log("Hitbox system result:",h),h&&h.hit){const u=this.hitboxSystem.calculateDamage(t.damage,h);return this.showImpact(h.point,h.normal),this.hitboxSystem.createHitMarker&&this.hitboxSystem.createHitMarker(this.scene,h.point,h.bodyPart,u),{hit:!0,point:h.point,distance:h.distance,object:h.hitbox,damage:u,isPlayer:!0,playerId:h.playerId,isHeadshot:h.isHeadshot,bodyPart:h.bodyPart,damageMultiplier:h.damageMultiplier}}}if((!this.hitboxSystem||this.hitboxSystem.playerModels.size===0)&&(console.log("Using fallback raycaster system - hitboxSystem:",!!this.hitboxSystem,"models:",((c=(l=this.hitboxSystem)==null?void 0:l.playerModels)==null?void 0:c.size)||0),this.raycaster.set(i,r),this.raycaster.far=t.range,n&&n.size>0)){console.log("Remote players available:",n.size);const h=Array.from(n.values()),u=[];h.forEach(f=>{f&&f.matrixWorld&&(f instanceof On||u.push(f),f.children&&f.children.forEach(g=>{g&&g.matrixWorld&&!(g instanceof On)&&u.push(g)}))}),console.log("Valid targets for hit detection:",u.length);const d=u.length>0?this.raycaster.intersectObjects(u,!0):[];if(console.log("Player intersects found:",d.length),d.length>0){const f=d[0];console.log("Hit object:",f.object.type,"Distance:",f.distance);let g=null;console.log("Checking hit against remote players...");for(const[p,S]of n.entries())if(console.log(`Checking player ${p}, mesh:`,S?"exists":"null"),S===f.object||S.children&&S.children.includes(f.object)){g=p,console.log(`Found hit on player: ${p}`);break}this.showImpact(f.point,f.face?f.face.normal:new C(0,1,0));let _=t.damage;const m=1.6;return f.point.y>m&&(_=Math.round(_*2)),{hit:!0,point:f.point,distance:f.distance,object:f.object,damage:_,isPlayer:!0,playerId:g,isHeadshot:f.point.y>m}}}const o=this.raycaster.intersectObjects(this.scene.children,!0);let a=null;for(const h of o){if(h.object.userData&&h.object.userData.ignoreRaycast)continue;let u=!1;if(n){for(const d of n.values())if(d===h.object||d.children.includes(h.object)){u=!0;break}}if(!u){a=h;break}}return a?(this.showImpact(a.point,a.face?a.face.normal:new C(0,1,0)),{hit:!0,point:a.point,distance:a.distance,object:a.object,damage:t.damage,isPlayer:!1}):{hit:!1,damage:0}}meleeAttack(t,e=null){const n=new C(0,0,-1);if(n.applyQuaternion(this.camera.quaternion),this.raycaster.set(this.camera.position,n),this.raycaster.far=t.range,e&&e.size>0){const r=Array.from(e.values()),o=[];r.forEach(l=>{l&&l.matrixWorld&&(l instanceof On||o.push(l),l.children&&l.children.forEach(c=>{c&&c.matrixWorld&&!(c instanceof On)&&o.push(c)}))});const a=o.length>0?this.raycaster.intersectObjects(o,!1):[];if(a.length>0){const l=a[0];let c=null;for(const[u,d]of e.entries())if(d===l.object||d.children&&d.children.includes(l.object)){c=u;break}let h=t.damage;return t.backstabDamage&&(h=t.backstabDamage),{hit:!0,point:l.point,distance:l.distance,object:l.object,damage:h,isMelee:!0,isPlayer:!0,playerId:c}}}const i=this.raycaster.intersectObjects(this.scene.children,!0);if(i.length>0){const r=i[0];if(e){for(const o of e.values())if(o===r.object||o.children.includes(r.object))return{hit:!1,damage:0,isMelee:!0}}return{hit:!0,point:r.point,distance:r.distance,object:r.object,damage:t.damage,isMelee:!0,isPlayer:!1}}return{hit:!1,damage:0,isMelee:!0}}showImpact(t,e){let n=null;for(let a=0;a<this.impacts.length;a++)if(!this.impacts[a].active){n=this.impacts[a];break}n||(n=this.impacts[0]),n.mesh.position.copy(t),n.mesh.position.add(e.multiplyScalar(.01)),n.mesh.visible=!0,n.mesh.material.opacity=.8,n.mesh.scale.set(1,1,1),n.active=!0,n.lifetime=1;const i=new Mi(.1,.1),r=new $e({color:1710618,transparent:!0,opacity:.5,side:Ue}),o=new Q(i,r);o.position.copy(t),o.position.add(e.clone().multiplyScalar(.02)),o.lookAt(t.clone().add(e)),this.scene.add(o),setTimeout(()=>{this.scene.remove(o),o.geometry.dispose(),o.material.dispose()},3e4)}createBulletTrail(t,e){const n=[t,e],i=new Se().setFromPoints(n),r=new po({color:16776960,transparent:!0,opacity:.5,linewidth:2}),o=new qa(i,r);this.scene.add(o);const a=()=>{r.opacity-=.05,r.opacity<=0?(this.scene.remove(o),i.dispose(),r.dispose()):requestAnimationFrame(a)};setTimeout(a,50)}update(t){for(let e=0;e<this.impacts.length;e++){const n=this.impacts[e];if(n.active)if(n.lifetime-=t,n.lifetime<=0)n.mesh.visible=!1,n.active=!1;else{n.mesh.material.opacity=n.lifetime*.8;const i=1+(1-n.lifetime)*2;n.mesh.scale.set(i,i,i)}}}dispose(){this.impacts.forEach(t=>{t.mesh&&(this.scene.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose())}),this.impacts=[]}}class $m{constructor(){this.element=null,this.dotElement=null,this.linesElements=[],this.currentSpread=10,this.targetSpread=10,this.init()}init(){this.element=document.createElement("div"),this.element.id="crosshair",this.element.style.cssText=`
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1000;
      pointer-events: none;
      width: 100px;
      height: 100px;
    `,this.dotElement=document.createElement("div"),this.dotElement.style.cssText=`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 2px;
      height: 2px;
      background-color: #00ff00;
      border: 1px solid #000;
      border-radius: 50%;
    `,this.element.appendChild(this.dotElement);const t=`
      position: absolute;
      background-color: #00ff00;
      border: 1px solid #000;
    `,e=document.createElement("div");e.className="crosshair-line top",e.style.cssText=t+`
      width: 2px;
      height: 15px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -100%);
    `,this.element.appendChild(e),this.linesElements.push(e);const n=document.createElement("div");n.className="crosshair-line bottom",n.style.cssText=t+`
      width: 2px;
      height: 15px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, 0);
    `,this.element.appendChild(n),this.linesElements.push(n);const i=document.createElement("div");i.className="crosshair-line left",i.style.cssText=t+`
      width: 15px;
      height: 2px;
      top: 50%;
      left: 50%;
      transform: translate(-100%, -50%);
    `,this.element.appendChild(i),this.linesElements.push(i);const r=document.createElement("div");r.className="crosshair-line right",r.style.cssText=t+`
      width: 15px;
      height: 2px;
      top: 50%;
      left: 50%;
      transform: translate(0, -50%);
    `,this.element.appendChild(r),this.linesElements.push(r),document.body.appendChild(this.element)}setWeapon(t){switch(t){case"knife":this.setColor("#ffffff"),this.setStyle("dot");break;case"ak47":this.setColor("#00ff00"),this.setStyle("dynamic"),this.targetSpread=15;break;case"pistol":default:this.setColor("#00ff00"),this.setStyle("dynamic"),this.targetSpread=10;break}}setColor(t){this.dotElement.style.backgroundColor=t,this.linesElements.forEach(e=>{e.style.backgroundColor=t})}setStyle(t){t==="dot"?(this.linesElements.forEach(e=>{e.style.display="none"}),this.dotElement.style.width="4px",this.dotElement.style.height="4px"):(this.linesElements.forEach(e=>{e.style.display="block"}),this.dotElement.style.width="2px",this.dotElement.style.height="2px")}updateSpread(t,e,n){let i=10;n?this.targetSpread=i*.5:e?this.targetSpread=i*2.5:t?this.targetSpread=i*1.5:this.targetSpread=i,this.currentSpread+=(this.targetSpread-this.currentSpread)*.1,this.updateLinePositions()}updateLinePositions(){const t=this.currentSpread;this.linesElements.forEach((e,n)=>{e.className.includes("top")?e.style.transform=`translate(-50%, calc(-100% - ${t}px))`:e.className.includes("bottom")?e.style.transform=`translate(-50%, ${t}px)`:e.className.includes("left")?e.style.transform=`translate(calc(-100% - ${t}px), -50%)`:e.className.includes("right")&&(e.style.transform=`translate(${t}px, -50%)`)})}hide(){this.element&&(this.element.style.display="none")}show(){this.element&&(this.element.style.display="block")}dispose(){this.element&&this.element.parentNode&&this.element.parentNode.removeChild(this.element)}}class Zm{constructor(){this.container=null,this.ammoDisplay=null,this.healthDisplay=null,this.weaponDisplay=null,this.init()}init(){this.container=document.createElement("div"),this.container.id="hud",this.container.style.cssText=`
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 999;
      font-family: 'Courier New', monospace;
      color: #00ff00;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
      user-select: none;
      pointer-events: none;
    `,this.weaponDisplay=document.createElement("div"),this.weaponDisplay.style.cssText=`
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 5px;
      text-align: right;
    `,this.weaponDisplay.textContent="PISTOL",this.container.appendChild(this.weaponDisplay),this.ammoDisplay=document.createElement("div"),this.ammoDisplay.style.cssText=`
      font-size: 32px;
      font-weight: bold;
      text-align: right;
    `,this.ammoDisplay.innerHTML='<span id="current-ammo">17</span> / <span id="reserve-ammo">102</span>',this.container.appendChild(this.ammoDisplay);const t=document.createElement("div");t.style.cssText=`
      position: fixed;
      bottom: 20px;
      left: 20px;
      font-size: 24px;
      font-weight: bold;
    `;const e=document.createElement("span");e.style.cssText=`
      color: #ff0000;
      margin-right: 10px;
    `,e.textContent="HP:",t.appendChild(e),this.healthDisplay=document.createElement("span"),this.healthDisplay.id="health-display",this.healthDisplay.style.cssText=`
      color: #00ff00;
    `,this.healthDisplay.textContent="100",t.appendChild(this.healthDisplay),this.reloadIndicator=document.createElement("div"),this.reloadIndicator.id="reload-indicator",this.reloadIndicator.style.cssText=`
      position: fixed;
      top: 60%;
      left: 50%;
      transform: translateX(-50%);
      font-size: 20px;
      font-weight: bold;
      color: #ffff00;
      display: none;
    `,this.reloadIndicator.textContent="RELOADING...",this.lowAmmoWarning=document.createElement("div"),this.lowAmmoWarning.id="low-ammo",this.lowAmmoWarning.style.cssText=`
      position: fixed;
      top: 70%;
      left: 50%;
      transform: translateX(-50%);
      font-size: 18px;
      font-weight: bold;
      color: #ff0000;
      display: none;
    `,this.lowAmmoWarning.textContent="LOW AMMO",document.body.appendChild(this.container),document.body.appendChild(t),document.body.appendChild(this.reloadIndicator),document.body.appendChild(this.lowAmmoWarning)}updateAmmo(t,e){const n=document.getElementById("current-ammo"),i=document.getElementById("reserve-ammo");n&&(n.textContent=t,t===0?n.style.color="#ff0000":t<=5?n.style.color="#ffaa00":n.style.color="#00ff00"),i&&(i.textContent=e),t<=5&&t>0?this.lowAmmoWarning.style.display="block":this.lowAmmoWarning.style.display="none"}updateHealth(t){this.healthDisplay&&(this.healthDisplay.textContent=t,t<=25?this.healthDisplay.style.color="#ff0000":t<=50?this.healthDisplay.style.color="#ffaa00":this.healthDisplay.style.color="#00ff00")}updateWeapon(t){this.weaponDisplay&&(this.weaponDisplay.textContent=t.toUpperCase())}showReloading(t){this.reloadIndicator&&(this.reloadIndicator.style.display=t?"block":"none")}showHitMarker(){const t=document.createElement("div");t.style.cssText=`
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 40px;
      height: 40px;
      pointer-events: none;
      z-index: 1001;
    `;const e=document.createElement("div");e.style.cssText=`
      position: absolute;
      width: 100%;
      height: 2px;
      background: #ffffff;
      top: 50%;
      transform: translateY(-50%) rotate(45deg);
    `;const n=document.createElement("div");n.style.cssText=`
      position: absolute;
      width: 100%;
      height: 2px;
      background: #ffffff;
      top: 50%;
      transform: translateY(-50%) rotate(-45deg);
    `,t.appendChild(e),t.appendChild(n),document.body.appendChild(t),setTimeout(()=>{t.style.opacity="0",t.style.transition="opacity 0.2s",setTimeout(()=>{document.body.removeChild(t)},200)},100)}dispose(){this.container&&this.container.parentNode&&this.container.parentNode.removeChild(this.container),["health-display","reload-indicator","low-ammo"].forEach(e=>{const n=document.getElementById(e);n&&n.parentNode&&n.parentNode.removeChild(n)})}}class Jm{constructor(t){this.game=t,this.socket=null,this.connected=!1,this.playerId=null,this.username=null,this.roomId=null,this.players=new Map,window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?this.serverUrl="http://localhost:3000":window.location.hostname==="hyperfps.xyz"||window.location.hostname==="www.hyperfps.xyz"?this.serverUrl="https://hyperfps.xyz":window.location.hostname==="137.184.228.68"?this.serverUrl="https://137.184.228.68":this.serverUrl=window.location.origin}connect(t){this.username=t||`Player${Math.floor(Math.random()*9999)}`,this.socket=Zl(this.serverUrl,{transports:["websocket","polling"],reconnection:!0,reconnectionAttempts:5,reconnectionDelay:1e3}),this.setupEventHandlers(),this.socket.on("connect",()=>{this.connected=!0,console.log("Connected to server"),this.socket.emit("join",{username:this.username})}),this.socket.on("connect_error",e=>{console.error("Connection error:",e)})}setupEventHandlers(){this.socket.on("joined",t=>{this.playerId=t.playerId,this.username=t.username,console.log(`Joined as ${this.username} (${this.playerId})`),this.game.ui&&this.game.ui.showRoomList(t.rooms)}),this.socket.on("roomCreated",t=>{console.log("Room created:",t.name)}),this.socket.on("joinedRoom",t=>{this.roomId=t.roomId,console.log("Joined room:",t.roomName),this.players.clear(),t.players.forEach(e=>{e.id!==this.playerId&&this.addRemotePlayer(e)}),this.game.ui&&this.game.ui.hideRoomList()}),this.socket.on("playerJoined",t=>{console.log("Player joined:",t.username),this.addRemotePlayer(t),this.game.ui&&this.game.ui.showNotification(`${t.username} joined`)}),this.socket.on("playerLeft",t=>{console.log("Player left:",t.username),this.removeRemotePlayer(t.id),this.game.ui&&this.game.ui.showNotification(`${t.username} left`)}),this.socket.on("leftRoom",()=>{this.roomId=null,this.players.clear(),this.game.ui&&this.game.ui.showRoomList()}),this.socket.on("playerMoved",t=>{const e=this.players.get(t.id);e&&(e.targetPosition=t.position,e.targetRotation=t.rotation)}),this.socket.on("playerShot",t=>{t.playerId!==this.playerId&&this.game.showRemoteShot&&this.game.showRemoteShot(t)}),this.socket.on("playerHit",t=>{console.log("PlayerHit event:",t,"My ID:",this.playerId),t.targetId===this.playerId&&(console.log("I got hit! Health:",t.health),this.game.player&&(this.game.player.health=t.health),this.game.hud&&this.game.hud.updateHealth(t.health),this.game.showHitEffect&&this.game.showHitEffect())}),this.socket.on("playerKilled",t=>{if(t.victimId===this.playerId)this.game.handleDeath&&this.game.handleDeath(t.killerName);else if(t.killerId===this.playerId)this.game.player&&this.game.player.kills++,this.showKillNotification(`You killed ${t.victimName}!`);else{const e=this.players.get(t.victimId);e&&(e.isDead=!0,e.mesh&&(e.mesh.visible=!1,this.game.remotePlayers&&this.game.remotePlayers.delete(t.victimId)))}this.game.ui&&this.game.ui.showKillNotification(t.killerName,t.victimName,t.weapon)}),this.socket.on("playerRespawned",t=>{if(t.id===this.playerId)this.game.player&&(this.game.player.position.set(t.position.x,t.position.y,t.position.z),this.game.player.health=100),this.game.hud&&this.game.hud.updateHealth(100);else{const e=this.players.get(t.id);e&&e.mesh&&(e.mesh.position.set(t.position.x,t.position.y,t.position.z),e.mesh.visible=!0,e.isDead=!1,this.game.remotePlayers&&this.game.remotePlayers.set(t.id,e.mesh))}}),this.socket.on("chat",t=>{this.game.ui&&this.game.ui.addChatMessage(t.username,t.message)}),this.socket.on("error",t=>{console.error("Server error:",t.message),this.game.ui&&this.game.ui.showError(t.message)}),this.socket.on("disconnect",()=>{this.connected=!1,console.log("Disconnected from server"),this.game.ui&&this.game.ui.showDisconnected()})}createRoom(t,e=10){this.connected&&this.socket.emit("createRoom",{name:t,maxPlayers:e})}joinRoom(t){this.connected&&this.socket.emit("joinRoom",{roomId:t})}leaveRoom(){!this.connected||!this.roomId||this.socket.emit("leaveRoom")}sendMovement(t,e){if(!this.connected||!this.roomId)return;const n=this.toPlainVector(t),i=e&&typeof e=="object"?{x:Number(e.x)||0,y:Number(e.y)||0}:{x:0,y:0};this.socket.emit("move",{position:n,rotation:i})}toPlainVector(t){return t?typeof t=="object"?{x:Number(t.x)||0,y:Number(t.y)||0,z:Number(t.z)||0}:{x:0,y:0,z:0}:{x:0,y:0,z:0}}sendShoot(t,e,n){if(!this.connected||!this.roomId)return;const i=this.toPlainVector(t),r=this.toPlainVector(e);try{JSON.stringify({position:i,direction:r,weapon:n})}catch(o){console.error("Failed to serialize shoot data:",o);return}this.socket.emit("shoot",{position:i,direction:r,weapon:n})}sendHit(t,e,n){if(!this.connected||!this.roomId){console.log("Cannot send hit - not connected or not in room");return}console.log(`Sending hit to server - Target: ${t}, Damage: ${e}, Weapon: ${n}`),this.socket.emit("hit",{targetId:t,damage:e,weapon:n})}sendChat(t){!this.connected||!this.roomId||this.socket.emit("chat",{message:t})}requestRespawn(){!this.connected||!this.roomId||this.socket.emit("requestRespawn")}addRemotePlayer(t){if(t.id===this.playerId)return;let e=null;this.game.createRemotePlayer&&(e=this.game.createRemotePlayer(t)),this.players.set(t.id,{...t,mesh:e,targetPosition:t.position,targetRotation:t.rotation||{x:0,y:0},isDead:!1})}removeRemotePlayer(t){const e=this.players.get(t);e&&(e.mesh&&this.game.removeRemotePlayer&&this.game.removeRemotePlayer(t),this.players.delete(t))}updatePlayers(t){this.players.forEach(e=>{if(e.mesh&&e.targetPosition){const n=Math.min(t*5,1);e.mesh.position.lerp(e.targetPosition,n),e.targetRotation&&(e.mesh.rotation.y=this.lerpAngle(e.mesh.rotation.y,e.targetRotation.y,n))}})}lerpAngle(t,e,n){let i=e-t;for(;i>Math.PI;)i-=Math.PI*2;for(;i<-Math.PI;)i+=Math.PI*2;return t+i*n}showKillNotification(t){const e=document.createElement("div");if(e.style.cssText=`
      position: fixed;
      top: 20%;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(0, 255, 0, 0.2);
      border: 2px solid #00ff00;
      color: #00ff00;
      padding: 10px 20px;
      font-family: monospace;
      font-size: 20px;
      font-weight: bold;
      border-radius: 5px;
      z-index: 1000;
      animation: fadeOut 3s ease-in-out forwards;
    `,e.textContent=t,!document.getElementById("kill-animation")){const n=document.createElement("style");n.id="kill-animation",n.textContent=`
        @keyframes fadeOut {
          0% { opacity: 1; }
          70% { opacity: 1; }
          100% { opacity: 0; }
        }
      `,document.head.appendChild(n)}document.body.appendChild(e),setTimeout(()=>document.body.removeChild(e),3e3)}disconnect(){this.socket&&(this.socket.disconnect(),this.socket=null),this.connected=!1,this.roomId=null,this.players.clear()}}class sl{constructor(t={}){this.team=t.team||"ct",this.isLocalPlayer=t.isLocalPlayer||!1,this.showArms=t.showArms||!1,this.root=new ae,this.body=new ae,this.upperBody=new ae,this.lowerBody=new ae,this.head=null,this.leftArm=new ae,this.rightArm=new ae,this.leftLeg=new ae,this.rightLeg=new ae,this.hitboxes=new ae,this.hitboxes.visible=!1,this.animationTime=0,this.walkCycle=0,this.isMoving=!1,this.isCrouching=!1,this.isDead=!1,this.createModel(),this.createHitboxes(),this.glowMeshes=[]}createModel(){this.team;const t=this.team==="ct"?"#2C3E50":"#8B4513",e=this.team==="ct"?"#5DADE2":"#F39C12",n=new jt({color:"#FDBCB4",roughness:.7,metalness:0}),i=new jt({color:t,roughness:.8,metalness:.1}),r=new jt({color:"#2C3E50",roughness:.85,metalness:0}),o=new jt({color:"#1A1A1A",roughness:.9,metalness:.05}),a=new jt({color:e,roughness:.3,metalness:.7,emissive:e,emissiveIntensity:.1}),l=new ue(.28,.32,.64,8);this.head=new Q(l,n),this.head.position.y=1.92,this.head.castShadow=!0;const c=new Vt(.08,.08,.04),h=new jt({color:"#000000"}),u=new Q(c,h);u.position.set(-.12,.08,.28),this.head.add(u);const d=new Q(c,h);d.position.set(.12,.08,.28),this.head.add(d);const f=new Xi(.32,.04,4,12),g=new Q(f,a);g.position.y=.16,g.rotation.x=Math.PI/2,this.head.add(g),this.isLocalPlayer&&!this.showArms&&(this.head.visible=!1);const _=new Vt(.96,.8,.48),m=new Q(_,i);m.position.y=1.2,m.castShadow=!0;const p=new Vt(.64,.48,.08),S=new Q(p,a);S.position.set(0,0,.24),m.add(S);const y=new Vt(.16,.12,.04),E=new Q(y,t);E.position.set(-.24,-.16,.28),m.add(E);const N=new Q(y,t);N.position.set(.24,-.16,.28),m.add(N);const A=new ue(.12,.096,.48,6),R=new ue(.096,.08,.4,6),D=new Vt(.12,.16,.064),w=new Q(A,i);w.position.set(-.52,1.2,0),w.rotation.z=.1;const x=new Q(R,n);x.position.set(0,-.4,0);const P=new Q(D,n);P.position.set(0,-.28,0),x.add(P),w.add(x),this.leftArm.add(w);const B=new Q(A,i);B.position.set(.52,1.2,0),B.rotation.z=-.1;const F=new Q(R,n);F.position.set(0,-.4,0);const H=new Q(D,n);H.position.set(0,-.28,0),F.add(H),B.add(F),this.rightArm.add(B),this.isLocalPlayer&&!this.showArms&&(this.leftArm.visible=!1,this.rightArm.visible=!1);const X=new Vt(.8,.16,.44),G=new Q(X,o);G.position.y=.72;const j=new Vt(.12,.12,.04),V=new Q(j,a);V.position.set(0,0,.24),G.add(V);const ut=new Vt(.28,.48,.28),pt=new Vt(.24,.4,.24),mt=new Vt(.28,.12,.36),Ut=new Q(ut,r);Ut.position.set(-.2,.4,0);const Gt=new Q(new Vt(.24,.12,.08),a);Gt.position.set(0,-.16,.16),Ut.add(Gt);const W=new Q(pt,r);W.position.set(0,-.4,0);const et=new Q(mt,o);et.position.set(0,-.24,.04),W.add(et),Ut.add(W),this.leftLeg.add(Ut);const gt=new Q(ut,r);gt.position.set(.2,.4,0);const lt=new Q(new Vt(.24,.12,.08),a);lt.position.set(0,-.16,.16),gt.add(lt);const At=new Q(pt,r);At.position.set(0,-.4,0);const Nt=new Q(mt,o);Nt.position.set(0,-.24,.04),At.add(Nt),gt.add(At),this.rightLeg.add(gt),this.upperBody.add(this.head),this.upperBody.add(m),this.upperBody.add(this.leftArm),this.upperBody.add(this.rightArm),this.lowerBody.add(G),this.lowerBody.add(this.leftLeg),this.lowerBody.add(this.rightLeg),this.body.add(this.upperBody),this.body.add(this.lowerBody),this.root.add(this.body),this.root.add(this.hitboxes),this.glowMeshes=[m,S,g,Gt,lt,V]}createHitboxes(){const t=new $e({color:65280,wireframe:!0,transparent:!0,opacity:.3,visible:!1}),e=new Q(new cn(.32,8,6),t);e.position.y=1.92,e.userData={type:"head",damageMultiplier:2,priority:1};const n=new Q(new Vt(.96,.48,.48),t);n.position.y=1.36,n.userData={type:"chest",damageMultiplier:1,priority:2};const i=new Q(new Vt(.8,.4,.44),t);i.position.y=.88,i.userData={type:"stomach",damageMultiplier:.9,priority:3};const r=new Ni(.096,.64,4,6),o=new Q(r,t);o.position.set(-.52,1.04,0),o.userData={type:"arm",damageMultiplier:.7,priority:4};const a=new Q(r,t);a.position.set(.52,1.04,0),a.userData={type:"arm",damageMultiplier:.7,priority:4};const l=new Ni(.12,.64,4,6),c=new Q(l,t);c.position.set(-.2,.32,0),c.userData={type:"leg",damageMultiplier:.8,priority:5};const h=new Q(l,t);h.position.set(.2,.32,0),h.userData={type:"leg",damageMultiplier:.8,priority:5},this.hitboxes.add(e),this.hitboxes.add(n),this.hitboxes.add(i),this.hitboxes.add(o),this.hitboxes.add(a),this.hitboxes.add(c),this.hitboxes.add(h),this.headHitbox=e,this.chestHitbox=n,this.stomachHitbox=i,this.leftArmHitbox=o,this.rightArmHitbox=a,this.leftLegHitbox=c,this.rightLegHitbox=h}getHitboxes(){return this.hitboxes.children}setHitboxesVisible(t){this.hitboxes.visible=t,this.hitboxes.traverse(e=>{e.isMesh&&e.material&&(e.material.visible=t)})}update(t,e=null){if(this.isDead)return;if(this.animationTime+=t,e){const i=Math.sqrt(e.x*e.x+e.z*e.z);this.isMoving=i>.1}if(this.isMoving&&!this.isCrouching){this.walkCycle+=t*8;const i=Math.sin(this.walkCycle)*.3;this.leftLeg.rotation.x=i,this.rightLeg.rotation.x=-i,(!this.isLocalPlayer||this.showArms)&&(this.leftArm.rotation.x=-i*.5,this.rightArm.rotation.x=i*.5),this.body.position.y=Math.abs(Math.sin(this.walkCycle*2))*.02}else this.leftLeg.rotation.x*=.9,this.rightLeg.rotation.x*=.9,(!this.isLocalPlayer||this.showArms)&&(this.leftArm.rotation.x*=.9,this.rightArm.rotation.x*=.9),this.body.position.y*=.9;const n=Math.sin(this.animationTime*2)*.01;this.upperBody.position.y=n,this.head&&this.head.visible&&(this.head.rotation.y=Math.sin(this.animationTime*.5)*.05)}setCrouching(t){this.isCrouching=t,t?(this.body.scale.y=.6,this.body.position.y=-.4,this.hitboxes.scale.y=.6,this.hitboxes.position.y=-.4):(this.body.scale.y=1,this.body.position.y=0,this.hitboxes.scale.y=1,this.hitboxes.position.y=0)}playDeathAnimation(){this.isDead=!0;const t=Math.random()*Math.PI*2;this.body.rotation.z=Math.PI/2,this.body.rotation.y=t,this.body.position.y=-1,this.root.traverse(e=>{e.isMesh&&e.material&&(e.material.transparent=!0,e.material.opacity=.5)})}respawn(){this.isDead=!1,this.body.rotation.set(0,0,0),this.body.position.y=0,this.root.traverse(t=>{t.isMesh&&t.material&&(t.material.opacity=1)})}setGlowEffect(t,e=null){this.glowMeshes.forEach(n=>{n&&n.material&&(t?(n.material.emissive=new kt(e||this.team==="ct"?"#5DADE2":"#F39C12"),n.material.emissiveIntensity=.3):n.material.emissiveIntensity=.1)})}getModel(){return this.root}setFirstPersonVisibility(t=!1){this.showArms=t,this.isLocalPlayer&&(this.head&&(this.head.visible=!1),this.leftArm.visible=t,this.rightArm.visible=t)}createLODModel(){const t=new rm;t.addLevel(this.root,0);const e=this.createMediumDetailModel();t.addLevel(e,20);const n=this.createLowDetailModel();t.addLevel(n,50);const i=this.createVeryLowDetailModel();return t.addLevel(i,100),t}createMediumDetailModel(){const t=new ae,e=this.team==="ct"?"#4A90E2":"#E67E22",n=new Ja({color:e}),i=new Ja({color:"#FDBCB4"}),r=new Vt(.96,1.6,.48),o=new Q(r,n);o.position.y=1.2,t.add(o);const a=new cn(.32,6,6),l=new Q(a,i);l.position.y=1.92,t.add(l);const c=new Vt(.64,.8,.4),h=new Q(c,n);return h.position.y=.4,t.add(h),t.add(this.hitboxes.clone()),t}createLowDetailModel(){const t=new ae,e=this.team==="ct"?"#4A90E2":"#E67E22",n=new $e({color:e}),i=new Ni(.4,1.44,4,6),r=new Q(i,n);return r.position.y=1.12,t.add(r),t.add(this.hitboxes.clone()),t}createVeryLowDetailModel(){const t=new ae,e=document.createElement("canvas");e.width=64,e.height=128;const n=e.getContext("2d"),i=this.team==="ct"?"#4A90E2":"#E67E22";n.fillStyle=i,n.fillRect(24,20,16,40),n.fillRect(20,40,24,40),n.fillStyle="#FDBCB4",n.beginPath(),n.arc(32,16,8,0,Math.PI*2),n.fill();const r=new Uo(e),o=new Ws({map:r,color:16777215}),a=new On(o);return a.scale.set(.8,1.6,1),a.position.y=1.12,t.add(a),t}updateLOD(t){this.lodGroup&&this.lodGroup.update(t)}getLODModel(){return this.lodGroup||(this.lodGroup=this.createLODModel()),this.lodGroup}dispose(){this.root.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material.forEach(e=>{e&&e.dispose&&e.dispose()}):t.material&&t.material.dispose&&t.material.dispose())}),this.lodGroup&&this.lodGroup.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material.forEach(e=>{e&&e.dispose&&e.dispose()}):t.material&&t.material.dispose&&t.material.dispose())})}}class jm{constructor(){this.raycaster=new Wl,this.debugMode=!1,this.damageMultipliers={head:2,chest:1,stomach:.9,arm:.7,leg:.8},this.hitColors={head:16711680,chest:16750848,stomach:16776960,arm:65280,leg:39423},this.playerModels=new Map,this.hitMarkers=[],this.maxHitMarkers=20}registerPlayer(t,e){if(!e||!e.getHitboxes){console.warn("Invalid player model provided to hitbox system");return}this.playerModels.set(t,e),e.setHitboxesVisible(this.debugMode)}unregisterPlayer(t){this.playerModels.delete(t)}checkHit(t,e,n=100,i=null){this.raycaster.set(t,e),this.raycaster.far=n;let r=null,o=1/0;for(const[a,l]of this.playerModels){if(a===i)continue;const c=l.getHitboxes();if(!c||c.length===0)continue;const h=this.raycaster.intersectObjects(c,!1);if(h.length>0){h.sort((d,f)=>{const g=d.object.userData.priority||999,_=f.object.userData.priority||999;return g-_});const u=h[0];if(u.distance<o){o=u.distance;const d=u.object.userData;r={hit:!0,playerId:a,playerModel:l,point:u.point,distance:u.distance,normal:u.face?u.face.normal:new C(0,1,0),hitbox:u.object,bodyPart:d.type||"chest",damageMultiplier:d.damageMultiplier||1,isHeadshot:d.type==="head"}}}}return r||{hit:!1}}calculateDamage(t,e){if(!e||!e.hit)return 0;const n=e.damageMultiplier||1,i=Math.round(t*n),r=i*.05,o=i+(Math.random()-.5)*r;return Math.round(Math.max(1,o))}createHitMarker(t,e,n,i){const r=new cn(.05,8,8),o=this.hitColors[n]||16777215,a=new $e({color:o,transparent:!0,opacity:.8}),l=new Q(r,a);l.position.copy(e);const c=document.createElement("canvas");c.width=128,c.height=64;const h=c.getContext("2d");n==="head"?(h.fillStyle="#ff0000",h.font="bold 48px Arial"):(h.fillStyle="#ffffff",h.font="36px Arial"),h.textAlign="center",h.fillText(i.toString(),64,45),n==="head"&&(h.font="20px Arial",h.fillText("HEADSHOT!",64,60));const u=new Uo(c),d=new Ws({map:u,transparent:!0}),f=new On(d);for(f.scale.set(.5,.25,1),f.position.copy(e),f.position.y+=.2,t.add(l),t.add(f),this.hitMarkers.push({marker:l,sprite:f,lifetime:1});this.hitMarkers.length>this.maxHitMarkers;){const g=this.hitMarkers.shift();t.remove(g.marker),t.remove(g.sprite),g.marker.geometry.dispose(),g.marker.material.dispose(),g.sprite.material.map.dispose(),g.sprite.material.dispose()}return{marker:l,sprite:f}}updateHitMarkers(t,e){for(let n=this.hitMarkers.length-1;n>=0;n--){const i=this.hitMarkers[n];if(i.lifetime-=e,i.lifetime<=0)t.remove(i.marker),t.remove(i.sprite),i.marker.geometry.dispose(),i.marker.material.dispose(),i.sprite.material.map.dispose(),i.sprite.material.dispose(),this.hitMarkers.splice(n,1);else{const r=i.lifetime;i.marker.material.opacity=r*.8,i.sprite.material.opacity=r,i.sprite.position.y+=e*.5}}}setDebugMode(t){this.debugMode=t;for(const e of this.playerModels.values())e.setHitboxesVisible(t)}getHitStats(t){const e={totalHits:0,headshots:0,bodyShots:0,limbShots:0,avgDamage:0,totalDamage:0};return Array.isArray(t)&&(t.forEach(n=>{if(n.hit)switch(e.totalHits++,e.totalDamage+=n.damage||0,n.bodyPart){case"head":e.headshots++;break;case"chest":case"stomach":e.bodyShots++;break;case"arm":case"leg":e.limbShots++;break}}),e.totalHits>0&&(e.avgDamage=Math.round(e.totalDamage/e.totalHits))),e}checkPositionCollision(t,e=.5,n=null){const i=[];for(const[r,o]of this.playerModels){if(r===n)continue;const a=o.getModel().position,l=t.distanceTo(a);l<e+.5&&i.push({playerId:r,distance:l,playerModel:o})}return i}dispose(){this.hitMarkers.forEach(t=>{t.marker&&(t.marker.geometry.dispose(),t.marker.material.dispose()),t.sprite&&(t.sprite.material.map.dispose(),t.sprite.material.dispose())}),this.hitMarkers=[],this.playerModels.clear()}}class Qm{constructor(){this.settings={leftHanded:!1,debugCollisions:!1},this.multiplayer=null,this.remotePlayers=new Map,this.remotePlayerModels=new Map,this.hitboxSystem=new jm,this.player={health:100,position:null,currentWeapon:"pistol",isDead:!1,kills:0,deaths:0},this.moveSpeed=5,this.sprintMultiplier=2,this.crouchMultiplier=.4,this.jumpHeight=4,this.gravity=-15,this.velocity=new C,this.isOnGround=!0,this.canJump=!0,this.standHeight=2.4,this.crouchHeight=1.2,this.currentHeight=this.standHeight,this.isCrouching=!1,this.crouchSpeed=8,this.keys={forward:!1,backward:!1,left:!1,right:!1,jump:!1,sprint:!1,crouch:!1},this.init(),this.createScene(),this.createLights(),this.createMap(),this.createCharacter(),this.setupWeaponSystem(),this.setupFirstPersonControls(),this.setupMovementControls(),this.handleResize(),this.animate()}init(){this.scene=new im,this.scene.background=new kt("#1a1a2e"),this.scene.fog=new zi("#1a1a2e",10,50),this.camera=new De(75,window.innerWidth/window.innerHeight,.1,1e3),this.renderer=new nm({antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=ol,document.body.appendChild(this.renderer.domElement),this.clock=new Hm}createScene(){this.scene.background=new kt("#87CEEB"),this.scene.fog=new zi("#87CEEB",50,200)}createMap(){this.mapLoader=new Vm(this.scene);const t=this.mapLoader.loadMap("simple_arena");t&&this.character&&this.character.position.set(...t)}createLights(){const t=new km("#ffeecc",.7);this.scene.add(t);const e=new tl("#ffddaa",1);e.position.set(50,100,30),e.castShadow=!0,e.shadow.camera.left=-100,e.shadow.camera.right=100,e.shadow.camera.top=100,e.shadow.camera.bottom=-100,e.shadow.camera.near=.1,e.shadow.camera.far=300,e.shadow.mapSize.width=2048,e.shadow.mapSize.height=2048,this.scene.add(e);const n=new tl("#aaccff",.3);n.position.set(-30,50,-20),this.scene.add(n)}createCharacter(){this.playerModel=new sl({team:"ct",isLocalPlayer:!0,showArms:!1}),this.character=this.playerModel.getModel(),this.player.position=this.character.position,this.character.position.set(8,1,5),this.scene.add(this.character),this.hitboxSystem.registerPlayer("local",this.playerModel),this.characterHead=this.playerModel.head,this.viewModel=new ae;const t=new jt({color:"#fdbcb4",roughness:.7,metalness:0}),e=new jt({color:"#4169e1",roughness:.8,metalness:0}),n=new ue(.03,.035,.15,8),i=new Vt(.06,.08,.05),r=new ue(.035,.04,.08,8);if(this.settings.leftHanded){const o=new Q(n,t);o.position.set(-.25,-.4,-.6),o.rotation.x=-.2,o.rotation.z=.05,this.viewModel.add(o);const a=new Q(i,t);a.position.set(-.2,-.45,-.85),a.rotation.x=-.1,this.viewModel.add(a);const l=new Q(r,e);l.position.set(-.25,-.25,-.5),l.rotation.x=-.2,l.rotation.z=.05,this.viewModel.add(l);const c=new Q(n,t);c.position.set(.15,-.35,-.7),c.rotation.x=-.1,c.rotation.z=-.3,c.rotation.y=-.2,this.viewModel.add(c);const h=new Q(i,t);h.position.set(.1,-.4,-.9),h.rotation.x=-.1,h.rotation.y=-.2,this.viewModel.add(h)}else{const o=new Q(n,t);o.position.set(.25,-.45,-.4),o.rotation.x=.1,o.rotation.z=.15,this.viewModel.add(o);const a=new Q(i,t);a.position.set(.23,-.38,-.45),a.rotation.x=-.1,this.viewModel.add(a);const l=new Q(r,e);l.position.set(.25,-.48,-.38),l.rotation.x=.1,l.rotation.z=.15,this.viewModel.add(l);const c=new Q(n,t);c.position.set(.05,-.42,-.48),c.rotation.x=.3,c.rotation.z=-.1,c.visible=!1,this.viewModel.add(c),this.leftSupportArm=c;const h=new Q(i,t);h.position.set(.05,-.38,-.55),h.rotation.x=-.1,h.visible=!1,this.viewModel.add(h),this.leftSupportHand=h}this.scene.add(this.viewModel),this.weaponMount=new ae,this.viewModel.add(this.weaponMount)}setupWeaponSystem(){this.weaponSystem=new Ym(this.scene,this.weaponMount,this.camera),this.bulletSystem=new Km(this.scene,this.camera,this.hitboxSystem),this.crosshair=new $m,this.hud=new Zm,this.crosshair.setWeapon("pistol"),this.hud.updateWeapon("Pistol"),this.playerHealth=100,this.hud.updateHealth(this.playerHealth)}setupFirstPersonControls(){this.mouseX=0,this.mouseY=0,this.targetRotationX=0,this.targetRotationY=0,this.rotationSpeed=.002,this.verticalRotationLimit=Math.PI/3,this.renderer.domElement.addEventListener("click",()=>{document.pointerLockElement!==this.renderer.domElement&&this.renderer.domElement.requestPointerLock()}),this.renderer.domElement.addEventListener("mousedown",t=>{document.pointerLockElement===this.renderer.domElement&&(t.button===0?(this.handleShooting(),this.weaponSystem.startShooting()):t.button)}),this.renderer.domElement.addEventListener("mouseup",t=>{t.button===0&&this.weaponSystem.stopShooting()}),this.renderer.domElement.addEventListener("contextmenu",t=>t.preventDefault()),document.addEventListener("mousemove",t=>{document.pointerLockElement===this.renderer.domElement&&(this.mouseX+=t.movementX,this.mouseY+=t.movementY,this.targetRotationX=-this.mouseX*this.rotationSpeed,this.targetRotationY=Math.max(-this.verticalRotationLimit,Math.min(this.verticalRotationLimit,-this.mouseY*this.rotationSpeed)))}),document.addEventListener("keydown",t=>{t.key==="Escape"&&document.exitPointerLock(),(t.key==="h"||t.key==="H")&&this.toggleHandPreference(),(t.key==="g"||t.key==="G")&&(this.settings.debugCollisions=!this.settings.debugCollisions,this.updateDebugVisuals(),console.log(`Collision debug: ${this.settings.debugCollisions?"ON":"OFF"}`)),t.key==="1"&&this.weaponSystem.switchWeapon("pistol")&&(this.crosshair.setWeapon("pistol"),this.hud.updateWeapon("Pistol"),this.leftSupportArm&&(this.leftSupportArm.visible=!1),this.leftSupportHand&&(this.leftSupportHand.visible=!1)),t.key==="2"&&this.weaponSystem.switchWeapon("ak47")&&(this.crosshair.setWeapon("ak47"),this.hud.updateWeapon("AK-47"),this.leftSupportArm&&(this.leftSupportArm.visible=!0),this.leftSupportHand&&(this.leftSupportHand.visible=!0)),t.key==="3"&&this.weaponSystem.switchWeapon("knife")&&(this.crosshair.setWeapon("knife"),this.hud.updateWeapon("Knife"),this.leftSupportArm&&(this.leftSupportArm.visible=!1),this.leftSupportHand&&(this.leftSupportHand.visible=!1)),(t.key==="r"||t.key==="R")&&this.weaponSystem.reload()})}toggleHandPreference(){for(this.settings.leftHanded=!this.settings.leftHanded;this.viewModel.children.length>0;)this.viewModel.remove(this.viewModel.children[0]);const t=new jt({color:"#fdbcb4",roughness:.7,metalness:0}),e=new jt({color:"#4169e1",roughness:.8,metalness:0}),n=new ue(.03,.035,.15,8),i=new Vt(.06,.08,.05),r=new ue(.035,.04,.08,8);if(this.settings.leftHanded){const o=new Q(n,t);o.position.set(-.25,-.4,-.6),o.rotation.x=-.2,o.rotation.z=.05,this.viewModel.add(o);const a=new Q(i,t);a.position.set(-.2,-.45,-.85),a.rotation.x=-.1,this.viewModel.add(a);const l=new Q(r,e);l.position.set(-.25,-.25,-.5),l.rotation.x=-.2,l.rotation.z=.05,this.viewModel.add(l);const c=new Q(n,t);c.position.set(.15,-.35,-.7),c.rotation.x=-.1,c.rotation.z=-.3,c.rotation.y=-.2,this.viewModel.add(c);const h=new Q(i,t);h.position.set(.1,-.4,-.9),h.rotation.x=-.1,h.rotation.y=-.2,this.viewModel.add(h)}else{const o=new Q(n,t);o.position.set(.25,-.45,-.4),o.rotation.x=.1,o.rotation.z=.15,this.viewModel.add(o);const a=new Q(i,t);a.position.set(.23,-.38,-.45),a.rotation.x=-.1,this.viewModel.add(a);const l=new Q(r,e);l.position.set(.25,-.48,-.38),l.rotation.x=.1,l.rotation.z=.15,this.viewModel.add(l);const c=new Q(n,t);c.position.set(.05,-.42,-.48),c.rotation.x=.3,c.rotation.z=-.1,c.visible=!1,this.viewModel.add(c),this.leftSupportArm=c;const h=new Q(i,t);h.position.set(.05,-.38,-.55),h.rotation.x=-.1,h.visible=!1,this.viewModel.add(h),this.leftSupportHand=h}console.log(`Switched to ${this.settings.leftHanded?"left":"right"}-handed mode`)}updateDebugVisuals(){var t;if(this.debugCollider&&(this.scene.remove(this.debugCollider),this.debugCollider=null),this.debugObjects&&(this.debugObjects.forEach(e=>this.scene.remove(e)),this.debugObjects=[]),this.settings.debugCollisions){const e=this.isCrouching?1.2:2.4,n=new ue(.5,.5,e,16),i=new $e({color:65280,wireframe:!0,opacity:.7,transparent:!0});this.debugCollider=new Q(n,i),this.scene.add(this.debugCollider),this.debugObjects=[],(((t=this.mapLoader)==null?void 0:t.getColliders())||[]).forEach(o=>{let a;const l=new $e({color:16711680,wireframe:!0,opacity:.3,transparent:!0});if(o.type==="box"){const[c,h,u]=o.size;a=new Q(new Vt(c,h,u),l),a.position.set(...o.position)}else if(o.type==="cylinder"){const[c,h]=o.size;a=new Q(new ue(c,c,h,16),l),a.position.set(...o.position)}else if(o.type==="sphere"){const[c]=o.size;a=new Q(new cn(c,16,16),l),a.position.set(...o.position)}a&&(this.debugObjects.push(a),this.scene.add(a))})}}setupMovementControls(){document.addEventListener("keydown",t=>{switch(t.code){case"KeyW":case"ArrowUp":this.keys.forward=!0;break;case"KeyS":case"ArrowDown":this.keys.backward=!0;break;case"KeyA":case"ArrowLeft":this.keys.left=!0;break;case"KeyD":case"ArrowRight":this.keys.right=!0;break;case"Space":this.canJump&&this.isOnGround&&(this.keys.jump=!0),t.preventDefault();break;case"ShiftLeft":case"ShiftRight":this.keys.sprint=!0;break;case"KeyC":this.keys.crouch=!0;break;case"KeyH":this.hitboxSystem&&(this.settings.debugCollisions=!this.settings.debugCollisions,this.hitboxSystem.setDebugMode(this.settings.debugCollisions),console.log(`Hitbox debug mode: ${this.settings.debugCollisions?"ON":"OFF"}`));break;case"KeyT":this.spawnTestDummy();break;case"KeyG":this.playerModel&&(this.settings.glowEnabled=!this.settings.glowEnabled,this.playerModel.setGlowEffect(this.settings.glowEnabled),console.log(`Glow effects: ${this.settings.glowEnabled?"ON":"OFF"}`));break;case"KeyP":this.hitboxSystem&&console.log("Hit Statistics:",this.hitStats||"No hits recorded");break}}),document.addEventListener("keyup",t=>{switch(t.code){case"KeyW":case"ArrowUp":this.keys.forward=!1;break;case"KeyS":case"ArrowDown":this.keys.backward=!1;break;case"KeyA":case"ArrowLeft":this.keys.left=!1;break;case"KeyD":case"ArrowRight":this.keys.right=!1;break;case"Space":this.keys.jump=!1;break;case"ShiftLeft":case"ShiftRight":this.keys.sprint=!1;break;case"KeyC":this.keys.crouch=!1;break}})}handleResize(){window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)})}animate(){requestAnimationFrame(()=>this.animate());const t=this.clock.getDelta(),e=this.clock.getElapsedTime();if(this.updateMovement(t),this.playerModel&&(this.playerModel.update(t,this.velocity),this.playerModel.setCrouching(this.isCrouching)),this.character){const n=Math.sin(e*2)*.02;this.character.rotation.y=this.targetRotationX;const i=new C;this.characterHead.getWorldPosition(i),this.camera.position.copy(i),this.camera.position.y+=n;const r=new C(0,0,-.15);r.applyQuaternion(this.character.quaternion),this.camera.position.add(r),this.camera.rotation.y=this.targetRotationX,this.camera.rotation.x=this.targetRotationY,this.camera.rotation.order="YXZ";const o=this.targetRotationY>.8;if(this.character.children.forEach(a=>{if(a===this.characterHead){a.visible=!1;return}const l=Math.abs(a.position.y-1.4)<.1;l&&o?a.visible=!1:l&&(a.visible=!0),a.position.y<1&&(a.visible=!0)}),this.debugCollider){const a=this.isCrouching?1.2:2.4;this.debugCollider.position.copy(this.character.position),this.debugCollider.position.y+=a/2,this.isCrouching&&this.debugCollider.geometry.parameters.height!==1.2?(this.debugCollider.geometry.dispose(),this.debugCollider.geometry=new ue(.5,.5,1.2,16)):!this.isCrouching&&this.debugCollider.geometry.parameters.height!==2.4&&(this.debugCollider.geometry.dispose(),this.debugCollider.geometry=new ue(.5,.5,2.4,16))}}if(this.viewModel){this.viewModel.position.copy(this.camera.position),this.viewModel.rotation.y=this.targetRotationX,this.viewModel.rotation.x=this.targetRotationY,this.viewModel.rotation.order="YXZ";const n=Math.sin(e*1.5)*.005,i=Math.sin(e*2)*.003;if(this.isCrouching&&(this.viewModel.position.y-=.15,this.viewModel.position.z+=.05),this.viewModel.position.x+=n,this.viewModel.position.y+=i,this.weaponSystem){const o=this.keys.forward||this.keys.backward||this.keys.left||this.keys.right;if(this.weaponSystem.update(t,o,this.keys.sprint),this.weaponSystem.lastShotData&&(this.processShotData(this.weaponSystem.lastShotData),this.weaponSystem.lastShotData=null),o){const a=this.keys.sprint?.01:.005;this.weaponSystem.addSway(a,e)}}if(this.bulletSystem&&this.bulletSystem.update(t),this.hitboxSystem&&this.hitboxSystem.updateHitMarkers(this.scene,t),this.crosshair){const o=this.keys.forward||this.keys.backward||this.keys.left||this.keys.right,a=this.weaponSystem&&this.weaponSystem.isAutoFiring,l=this.weaponSystem&&this.weaponSystem.isReloading();this.crosshair.updateSpread(o,a,l)}if(this.hud&&this.weaponSystem){const o=this.weaponSystem.getAmmoInfo();this.hud.updateAmmo(o.current,o.reserve),this.hud.showReloading(this.weaponSystem.isReloading())}const r=this.targetRotationY;r>.8||r<-.8?this.viewModel.visible=!1:this.viewModel.visible=!0}if(this.multiplayer&&this.multiplayer.connected&&this.multiplayer.roomId){(!this.lastNetworkUpdate||Date.now()-this.lastNetworkUpdate>50)&&(this.multiplayer.sendMovement({x:this.character.position.x,y:this.character.position.y,z:this.character.position.z},{x:this.targetRotationY,y:this.targetRotationX}),this.lastNetworkUpdate=Date.now()),this.multiplayer.updatePlayers(t);for(const[n,i]of this.remotePlayerModels){const r=this.multiplayer.players.get(n);if(r&&i){const o=r.targetPosition?new C().subVectors(r.targetPosition,r.mesh.position):new C;i.update(t,o)}}}this.renderer.render(this.scene,this.camera)}updateMovement(t){if(!this.character||this.player.isDead)return;this.keys.crouch&&this.isOnGround?this.isCrouching=!0:this.isCrouching=!1;const e=this.isCrouching?this.crouchHeight:this.standHeight;this.currentHeight+=(e-this.currentHeight)*this.crouchSpeed*t,this.characterHead&&(this.characterHead.position.y=this.currentHeight);const n=new C,i=new C(0,0,-1),r=new C(1,0,0);if(i.applyQuaternion(this.camera.quaternion),i.y=0,i.normalize(),r.applyQuaternion(this.camera.quaternion),r.y=0,r.normalize(),this.keys.forward&&n.add(i),this.keys.backward&&n.sub(i),this.keys.left&&n.sub(r),this.keys.right&&n.add(r),n.length()>0){n.normalize();let a=this.moveSpeed;this.isCrouching?a*=this.crouchMultiplier:this.keys.sprint&&(a*=this.sprintMultiplier),n.multiplyScalar(a*t),this.character.position.clone();const l=this.moveWithCollision(n);this.character.position.add(l)}this.keys.jump&&this.isOnGround&&!this.isCrouching&&(this.velocity.y=this.jumpHeight,this.isOnGround=!1,this.canJump=!1,this.keys.jump=!1),this.isOnGround||(this.velocity.y+=this.gravity*t),this.character.position.y+=this.velocity.y*t;let o=0;o=this.getStairHeight(this.character.position.x,this.character.position.z),this.character.position.y<=o?(this.character.position.y=o,this.velocity.y=0,this.isOnGround=!0,this.canJump=!0):this.isOnGround=!1}getStairHeight(t,e){if(!this.mapLoader)return 0;const n=this.mapLoader.getColliders();let i=0;const r=.5,o=.5;for(const a of n)if(a.type==="box"){const[l,c,h]=a.size,[u,d,f]=a.position,g=u-l/2,_=u+l/2,m=f-h/2,p=f+h/2,S=d+c/2;t>=g-r&&t<=_+r&&e>=m-r&&e<=p+r&&S>i&&S<=this.character.position.y+o&&(i=S)}else if(a.type==="cylinder"){const[l,c]=a.size,[h,u,d]=a.position;if(Math.sqrt((t-h)*(t-h)+(e-d)*(e-d))<l+r){const g=u+c/2;g>i&&g<=this.character.position.y+o&&(i=g)}}else if(a.type==="sphere"){const[l]=a.size,[c,h,u]=a.position,d=Math.sqrt((t-c)*(t-c)+(e-u)*(e-u));if(d<l+r){const f=Math.sqrt(Math.max(0,l*l-d*d)),g=h+f;g>i&&g<=this.character.position.y+o&&(i=g)}}else if(a.type==="ramp"){const[l,c,h]=a.size,[u,d,f]=a.position,g=a.rotation[1]||0,_=t-u,m=e-f,p=-g*Math.PI/180,S=_*Math.cos(p)-m*Math.sin(p),y=_*Math.sin(p)+m*Math.cos(p);if(Math.abs(S)<=l/2+r&&y>=-h/2-r&&y<=h/2+r){const N=(Math.max(-h/2,Math.min(h/2,y))+h/2)/h,A=d+N*c;A>i&&(i=A)}}return i}moveWithCollision(t){const n=t.clone().divideScalar(5),i=new C;for(let r=0;r<5;r++){const o=this.character.position.clone().add(i).add(n),a=this.getCollisionInfo(o);if(a.hit){const l=a.normal.multiplyScalar(a.penetration),c=n.clone(),h=c.dot(a.normal);c.sub(a.normal.clone().multiplyScalar(h)),i.add(c),i.add(l)}else i.add(n)}return i}getCollisionInfo(t){const n=this.isCrouching?1.2:2.4,i=t.y,r=i+n;if(!this.mapLoader)return{hit:!1};const o=this.mapLoader.getColliders();let a=null,l=1/0;for(const c of o)if(c.type==="box"){const[h,u,d]=c.size,[f,g,_]=c.position,m=f-h/2,p=f+h/2,S=_-d/2,y=_+d/2,E=g-u/2,N=g+u/2;if(t.x>=m-.5&&t.x<=p+.5&&t.z>=S-.5&&t.z<=y+.5&&i>=N-.3&&i<=N+.5||r<=E||i>=N)continue;const R=Math.max(m,Math.min(t.x,p)),D=Math.max(S,Math.min(t.z,y)),w=t.x-R,x=t.z-D,P=w*w+x*x;if(P<.5*.5){const B=Math.sqrt(P),F=.5-B;let H;if(B>.001)H=new C(w/B,0,x/B);else{const X=[{dist:Math.abs(t.x-m),normal:new C(-1,0,0)},{dist:Math.abs(t.x-p),normal:new C(1,0,0)},{dist:Math.abs(t.z-S),normal:new C(0,0,-1)},{dist:Math.abs(t.z-y),normal:new C(0,0,1)}];X.sort((G,j)=>G.dist-j.dist),H=X[0].normal}B<l&&(l=B,a={hit:!0,normal:H,penetration:F,distance:B})}}else if(c.type==="cylinder"){const[h,u]=c.size,[d,f,g]=c.position,_=f-u/2,m=f+u/2,p=Math.sqrt((t.x-d)**2+(t.z-g)**2);if(p<h+.5*.5&&i>=m-.3&&i<=m+.5||r<=_||i>=m)continue;if(p<h+.5&&p>.001){const y=h+.5-p,E=new C((t.x-d)/p,0,(t.z-g)/p);p<l&&(l=p,a={hit:!0,normal:E,penetration:y,distance:p})}}else if(c.type==="sphere"){const[h]=c.size,[u,d,f]=c.position,g=Math.max(i,Math.min(d,r)),_=t.x-u,m=g-d,p=t.z-f,S=Math.sqrt(_*_+m*m+p*p);if(S<h+.5&&S>.001){const y=h+.5-S,E=new C(_/S,m/S,p/S);S<l&&(l=S,a={hit:!0,normal:E,penetration:y,distance:S})}}return a||{hit:!1}}checkCollision(){return this.getCollisionInfo(this.character.position).hit}handleShooting(){if(!this.weaponSystem||!this.bulletSystem||this.player.isDead)return;const t=this.weaponSystem.fire();t&&this.processShotData(t)}processShotData(t){if(!t||!this.bulletSystem||this.player.isDead)return;this.multiplayer&&this.multiplayer.connected&&this.multiplayer.roomId&&this.multiplayer.sendShoot({x:t.origin.x,y:t.origin.y,z:t.origin.z},{x:t.direction.x,y:t.direction.y,z:t.direction.z},this.weaponSystem.currentWeapon);const e=this.bulletSystem.shoot(t,this.mapLoader.getColliders(),this.remotePlayers);if(e.hit)if(e.isPlayer&&e.playerId){const n=e.bodyPart?` [${e.bodyPart.toUpperCase()}]`:"";if(console.log(`Hit player! ID: ${e.playerId}, Damage: ${e.damage}${n}${e.isHeadshot?" (HEADSHOT!)":""}`),console.log("Current weapon type:",this.weaponSystem.currentWeaponType),console.log("Remote players IDs:",Array.from(this.remotePlayers.keys())),this.hitStats||(this.hitStats={totalHits:0,headshots:0,bodyShots:0,limbShots:0,totalDamage:0,shots:0,accuracy:0}),this.hitStats.totalHits++,this.hitStats.totalDamage+=e.damage,e.bodyPart)switch(e.bodyPart){case"head":this.hitStats.headshots++;break;case"chest":case"stomach":this.hitStats.bodyShots++;break;case"arm":case"leg":this.hitStats.limbShots++;break}this.multiplayer&&this.multiplayer.connected&&(console.log("Sending hit to server - targetId:",e.playerId),console.log("Weapon being sent:",this.weaponSystem.currentWeaponType),this.multiplayer.sendHit(e.playerId,e.damage,this.weaponSystem.currentWeaponType)),this.hud&&this.hud.showHitMarker(e.isHeadshot),this.showDamageNumber(e.point,e.damage,e.isHeadshot)}else console.log(`Hit at distance: ${e.distance.toFixed(2)}m`);t&&(this.hitStats||(this.hitStats={totalHits:0,shots:0,accuracy:0}),this.hitStats.shots++,this.hitStats.totalHits>0&&(this.hitStats.accuracy=(this.hitStats.totalHits/this.hitStats.shots*100).toFixed(1)))}initMultiplayer(){this.multiplayer=new Jm(this);const t=prompt("Enter your username:")||`Player${Math.floor(Math.random()*9999)}`;this.multiplayer.connect(t),this.createMultiplayerUI()}createMultiplayerUI(){const t=document.createElement("div");t.id="multiplayer-ui",t.style.cssText=`
      position: fixed;
      top: 10px;
      right: 10px;
      color: white;
      font-family: monospace;
      font-size: 14px;
      background: rgba(0,0,0,0.5);
      padding: 10px;
      border-radius: 5px;
      z-index: 1000;
    `,t.innerHTML=`
      <div id="connection-status">Connecting...</div>
      <div id="room-controls" style="margin-top: 10px;">
        <button id="create-room" style="margin-right: 5px;">Create Room</button>
        <button id="join-room">Join Room</button>
        <div id="room-list" style="margin-top: 10px;"></div>
      </div>
      <div id="room-info" style="display: none; margin-top: 10px;">
        <div>Room: <span id="current-room"></span></div>
        <div>Players: <span id="player-count">0</span></div>
        <button id="leave-room">Leave Room</button>
      </div>
    `,document.body.appendChild(t),this.ui={connectionStatus:document.getElementById("connection-status"),roomControls:document.getElementById("room-controls"),roomInfo:document.getElementById("room-info"),roomList:document.getElementById("room-list"),showRoomList:e=>{if(!e||e.length===0){this.ui.roomList.innerHTML="<div>No rooms available</div>";return}this.ui.roomList.innerHTML=e.map(n=>`
          <div style="margin: 5px 0;">
            ${n.name} (${n.players}/${n.maxPlayers})
            <button onclick="game.joinRoom('${n.id}')" style="margin-left: 10px;">Join</button>
          </div>
        `).join("")},hideRoomList:()=>{this.ui.roomControls.style.display="none",this.ui.roomInfo.style.display="block"},showNotification:e=>{console.log(`[Notification] ${e}`)},showError:e=>{console.error(`[Error] ${e}`)},showDisconnected:()=>{this.ui.connectionStatus.textContent="Disconnected",this.ui.connectionStatus.style.color="red"}},document.getElementById("create-room").addEventListener("click",()=>{const e=prompt("Enter room name:")||"New Room";this.multiplayer.createRoom(e,10)}),document.getElementById("join-room").addEventListener("click",()=>{const e=prompt("Enter room ID:");e&&this.multiplayer.joinRoom(e)}),document.getElementById("leave-room").addEventListener("click",()=>{this.multiplayer.leaveRoom(),this.ui.roomControls.style.display="block",this.ui.roomInfo.style.display="none"}),setTimeout(()=>{this.multiplayer&&this.multiplayer.connected&&(this.ui.connectionStatus.textContent="Connected",this.ui.connectionStatus.style.color="lime")},1e3)}joinRoom(t){this.multiplayer&&this.multiplayer.joinRoom(t)}createRemotePlayer(t){var h,u,d;console.log("Creating remote player with data:",t);const e=t.team||(Math.random()>.5?"ct":"t"),n=new sl({team:e,isLocalPlayer:!1,showArms:!0}),i=n.getModel();i.position.set(((h=t.position)==null?void 0:h.x)||0,((u=t.position)==null?void 0:u.y)||0,((d=t.position)==null?void 0:d.z)||0);const r=document.createElement("canvas");r.width=256,r.height=64;const o=r.getContext("2d");o.fillStyle="rgba(0, 0, 0, 0.5)",o.fillRect(0,0,256,64),o.fillStyle="white",o.font="bold 28px Arial",o.textAlign="center",o.fillText(t.username||"Player",128,40);const a=new Uo(r),l=new Ws({map:a,depthTest:!1,depthWrite:!1}),c=new On(l);return c.scale.set(2,.5,1),c.position.y=3.2,i.add(c),this.scene.add(i),console.log("Storing remote player with ID:",t.id),this.remotePlayers.set(t.id,i),this.remotePlayerModels.set(t.id,n),console.log("Remote players after adding:",Array.from(this.remotePlayers.keys())),this.hitboxSystem.registerPlayer(t.id,n),n.setGlowEffect(!0),i}removeRemotePlayer(t){console.log("Removing remote player with ID:",t);const e=this.remotePlayers.get(t);if(e){this.scene.remove(e),this.hitboxSystem.unregisterPlayer(t);const n=this.remotePlayerModels.get(t);n&&(n.dispose(),this.remotePlayerModels.delete(t)),this.remotePlayers.delete(t),console.log("Remote players after removal:",Array.from(this.remotePlayers.keys()))}else console.log("Player not found in remotePlayers map:",t)}showRemoteShot(t){if(this.bulletSystem&&t.position&&t.direction){const e=new C(t.position.x||0,t.position.y||0,t.position.z||0),n=new C(t.direction.x||0,t.direction.y||0,t.direction.z||0),i=this.bulletSystem.createTrail(e,n);i&&(this.scene.add(i),setTimeout(()=>this.scene.remove(i),100))}}showHitEffect(){const t=document.createElement("div");t.style.cssText=`
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: red;
      opacity: 0.3;
      pointer-events: none;
      z-index: 999;
    `,document.body.appendChild(t),setTimeout(()=>{t.style.opacity="0",t.style.transition="opacity 0.5s",setTimeout(()=>document.body.removeChild(t),500)},100)}spawnTestDummy(){const t={id:`dummy_${Date.now()}`,username:`TestDummy_${Math.floor(Math.random()*100)}`,position:{x:this.character.position.x+(Math.random()-.5)*10,y:this.character.position.y,z:this.character.position.z+(Math.random()-.5)*10},team:Math.random()>.5?"ct":"t"},e=this.createRemotePlayer(t);return console.log(`Spawned test dummy: ${t.username} at position (${t.position.x.toFixed(1)}, ${t.position.y.toFixed(1)}, ${t.position.z.toFixed(1)})`),this.testDummies||(this.testDummies=[]),this.testDummies.push({id:t.id,mesh:e,data:t}),e}clearTestDummies(){this.testDummies&&(this.testDummies.forEach(t=>{this.removeRemotePlayer(t.id)}),this.testDummies=[],console.log("Cleared all test dummies"))}showDamageNumber(t,e,n){const i=document.createElement("div");i.style.cssText=`
      position: fixed;
      color: ${n?"#ff0000":"#ffff00"};
      font-family: monospace;
      font-size: ${n?"28px":"24px"};
      font-weight: bold;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
      pointer-events: none;
      z-index: 1000;
      animation: floatUp 1s ease-out forwards;
    `,i.textContent=n?`${e} HEADSHOT!`:e;const r=t.clone();r.project(this.camera);const o=(r.x*.5+.5)*window.innerWidth,a=(-r.y*.5+.5)*window.innerHeight;if(i.style.left=`${o}px`,i.style.top=`${a}px`,!document.getElementById("damage-animation")){const l=document.createElement("style");l.id="damage-animation",l.textContent=`
        @keyframes floatUp {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(-50px); opacity: 0; }
        }
      `,document.head.appendChild(l)}document.body.appendChild(i),setTimeout(()=>document.body.removeChild(i),1e3)}handleDeath(t){console.log(`You were killed by ${t}`),this.player.isDead=!0,this.player.deaths++,document.pointerLockElement&&document.exitPointerLock();const e=document.createElement("div");e.id="death-screen",e.style.cssText=`
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.85);
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-family: monospace;
      z-index: 9999;
    `,e.innerHTML=`
      <div style="font-size: 48px; color: #ff0000; margin-bottom: 20px;">YOU DIED</div>
      <div style="font-size: 24px; margin-bottom: 10px;">Killed by <span style="color: #ffaa00">${t}</span></div>
      <div style="font-size: 18px; margin: 20px 0; color: #888;">
        K/D: ${this.player.kills}/${this.player.deaths}
      </div>
      <button id="respawn-btn" style="
        padding: 15px 30px;
        font-size: 20px;
        background: #4CAF50;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        margin-top: 20px;
        font-family: monospace;
      ">RESPAWN</button>
      <div style="font-size: 14px; margin-top: 10px; color: #666;">
        Press SPACE or click RESPAWN to continue
      </div>
    `,document.body.appendChild(e);const n=document.getElementById("respawn-btn"),i=()=>{this.multiplayer&&this.multiplayer.connected&&this.multiplayer.requestRespawn(),document.body.removeChild(e),this.player.isDead=!1,this.renderer.domElement.requestPointerLock()};n.addEventListener("click",i);const r=o=>{o.code==="Space"&&this.player.isDead&&(i(),document.removeEventListener("keydown",r))};document.addEventListener("keydown",r)}}const Xl=new Qm;window.game=Xl;setTimeout(()=>{Xl.initMultiplayer()},1e3);
