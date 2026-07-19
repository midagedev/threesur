(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}})();const Oh="185",dp=0,Dc=1,up=2,Gr=1,fp=2,Ta=3,Fn=0,vi=1,ui=2,Qi=0,en=1,jt=2,Uc=3,kc=4,pp=5,Yn=100,mp=101,gp=102,vp=103,xp=104,bp=200,yp=201,_p=202,wp=203,Ul=204,kl=205,Mp=206,Sp=207,Ap=208,Tp=209,Ep=210,Cp=211,Rp=212,Pp=213,Ip=214,zl=0,Nl=1,Ol=2,qs=3,Bl=4,Hl=5,Gl=6,Vl=7,Yu=0,Lp=1,Fp=2,tn=0,Bh=1,Hh=2,Gh=3,mo=4,Vh=5,Wh=6,Xh=7,Ku=300,is=301,$s=302,Ao=303,To=304,go=306,vn=1e3,Bi=1001,Wl=1002,ot=1003,Oa=1004,Xa=1005,li=1006,Eo=1007,Qn=1008,Ii=1009,Ju=1010,Qu=1011,Pa=1012,qh=1013,nn=1014,Hi=1015,Si=1016,$h=1017,jh=1018,Ia=1020,ef=35902,tf=35899,nf=1021,sf=1022,Gi=1023,xn=1026,es=1027,Zh=1028,Yh=1029,ns=1030,Kh=1031,Jh=1033,Vr=33776,Wr=33777,Xr=33778,qr=33779,Xl=35840,ql=35841,$l=35842,jl=35843,Zl=36196,Yl=37492,Kl=37496,Jl=37488,Ql=37489,eo=37490,eh=37491,th=37808,ih=37809,nh=37810,sh=37811,ah=37812,rh=37813,oh=37814,lh=37815,hh=37816,ch=37817,dh=37818,uh=37819,fh=37820,ph=37821,mh=36492,gh=36494,vh=36495,xh=36283,bh=36284,to=36285,yh=36286,Dp=3200,zc=0,Up=1,Cn="",Mt="srgb",io="srgb-linear",no="linear",at="srgb",cs=7680,Nc=519,kp=512,zp=513,Np=514,Qh=515,Op=516,Bp=517,ec=518,Hp=519,_h=35044,Pe=35048,Oc="300 es",Ji=2e3,so=2001;function Gp(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function La(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function Vp(){const a=La("canvas");return a.style.display="block",a}const Bc={};function ao(...a){const e="THREE."+a.shift();console.log(e,...a)}function af(a){const e=a[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=a[1];t&&t.isStackTrace?a[0]+=" "+t.getLocation():a[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return a}function ke(...a){a=af(a);const e="THREE."+a.shift();{const t=a[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...a)}}function Je(...a){a=af(a);const e="THREE."+a.shift();{const t=a[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...a)}}function Gs(...a){const e=a.join(" ");e in Bc||(Bc[e]=!0,ke(...a))}function Wp(a,e,t){return new Promise(function(i,n){function s(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:n();break;case a.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const Xp={[zl]:Nl,[Ol]:Gl,[Bl]:Vl,[qs]:Hl,[Nl]:zl,[Gl]:Ol,[Vl]:Bl,[Hl]:qs};class rs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const n=i[e];if(n!==void 0){const s=n.indexOf(t);s!==-1&&n.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const n=i.slice(0);for(let s=0,r=n.length;s<r;s++)n[s].call(this,e);e.target=null}}}const ii=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Co=Math.PI/180,wh=180/Math.PI;function Ln(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ii[a&255]+ii[a>>8&255]+ii[a>>16&255]+ii[a>>24&255]+"-"+ii[e&255]+ii[e>>8&255]+"-"+ii[e>>16&15|64]+ii[e>>24&255]+"-"+ii[t&63|128]+ii[t>>8&255]+"-"+ii[t>>16&255]+ii[t>>24&255]+ii[i&255]+ii[i>>8&255]+ii[i>>16&255]+ii[i>>24&255]).toLowerCase()}function Ye(a,e,t){return Math.max(e,Math.min(t,a))}function qp(a,e){return(a%e+e)%e}function Ro(a,e,t){return(1-t)*a+t*e}function Ki(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function dt(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}class ve{static{ve.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*i-r*n+e.x,this.y=s*n+r*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qs{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,s,r,o){let l=i[n+0],h=i[n+1],c=i[n+2],d=i[n+3],u=s[r+0],f=s[r+1],m=s[r+2],v=s[r+3];if(d!==v||l!==u||h!==f||c!==m){let g=l*u+h*f+c*m+d*v;g<0&&(u=-u,f=-f,m=-m,v=-v,g=-g);let p=1-o;if(g<.9995){const M=Math.acos(g),T=Math.sin(M);p=Math.sin(p*M)/T,o=Math.sin(o*M)/T,l=l*p+u*o,h=h*p+f*o,c=c*p+m*o,d=d*p+v*o}else{l=l*p+u*o,h=h*p+f*o,c=c*p+m*o,d=d*p+v*o;const M=1/Math.sqrt(l*l+h*h+c*c+d*d);l*=M,h*=M,c*=M,d*=M}}e[t]=l,e[t+1]=h,e[t+2]=c,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,n,s,r){const o=i[n],l=i[n+1],h=i[n+2],c=i[n+3],d=s[r],u=s[r+1],f=s[r+2],m=s[r+3];return e[t]=o*m+c*d+l*f-h*u,e[t+1]=l*m+c*u+h*d-o*f,e[t+2]=h*m+c*f+o*u-l*d,e[t+3]=c*m-o*d-l*u-h*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,n=e._y,s=e._z,r=e._order,o=Math.cos,l=Math.sin,h=o(i/2),c=o(n/2),d=o(s/2),u=l(i/2),f=l(n/2),m=l(s/2);switch(r){case"XYZ":this._x=u*c*d+h*f*m,this._y=h*f*d-u*c*m,this._z=h*c*m+u*f*d,this._w=h*c*d-u*f*m;break;case"YXZ":this._x=u*c*d+h*f*m,this._y=h*f*d-u*c*m,this._z=h*c*m-u*f*d,this._w=h*c*d+u*f*m;break;case"ZXY":this._x=u*c*d-h*f*m,this._y=h*f*d+u*c*m,this._z=h*c*m+u*f*d,this._w=h*c*d-u*f*m;break;case"ZYX":this._x=u*c*d-h*f*m,this._y=h*f*d+u*c*m,this._z=h*c*m-u*f*d,this._w=h*c*d+u*f*m;break;case"YZX":this._x=u*c*d+h*f*m,this._y=h*f*d+u*c*m,this._z=h*c*m-u*f*d,this._w=h*c*d-u*f*m;break;case"XZY":this._x=u*c*d-h*f*m,this._y=h*f*d-u*c*m,this._z=h*c*m+u*f*d,this._w=h*c*d+u*f*m;break;default:ke("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],s=t[8],r=t[1],o=t[5],l=t[9],h=t[2],c=t[6],d=t[10],u=i+o+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(c-l)*f,this._y=(s-h)*f,this._z=(r-n)*f}else if(i>o&&i>d){const f=2*Math.sqrt(1+i-o-d);this._w=(c-l)/f,this._x=.25*f,this._y=(n+r)/f,this._z=(s+h)/f}else if(o>d){const f=2*Math.sqrt(1+o-i-d);this._w=(s-h)/f,this._x=(n+r)/f,this._y=.25*f,this._z=(l+c)/f}else{const f=2*Math.sqrt(1+d-i-o);this._w=(r-n)/f,this._x=(s+h)/f,this._y=(l+c)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,s=e._z,r=e._w,o=t._x,l=t._y,h=t._z,c=t._w;return this._x=i*c+r*o+n*h-s*l,this._y=n*c+r*l+s*o-i*h,this._z=s*c+r*h+i*l-n*o,this._w=r*c-i*o-n*l-s*h,this._onChangeCallback(),this}slerp(e,t){let i=e._x,n=e._y,s=e._z,r=e._w,o=this.dot(e);o<0&&(i=-i,n=-n,s=-s,r=-r,o=-o);let l=1-t;if(o<.9995){const h=Math.acos(o),c=Math.sin(h);l=Math.sin(l*h)/c,t=Math.sin(t*h)/c,this._x=this._x*l+i*t,this._y=this._y*l+n*t,this._z=this._z*l+s*t,this._w=this._w*l+r*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+n*t,this._z=this._z*l+s*t,this._w=this._w*l+r*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{static{I.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Hc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Hc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*n,this.y=s[1]*t+s[4]*i+s[7]*n,this.z=s[2]*t+s[5]*i+s[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=e.elements,r=1/(s[3]*t+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*n+s[12])*r,this.y=(s[1]*t+s[5]*i+s[9]*n+s[13])*r,this.z=(s[2]*t+s[6]*i+s[10]*n+s[14])*r,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,s=e.x,r=e.y,o=e.z,l=e.w,h=2*(r*n-o*i),c=2*(o*t-s*n),d=2*(s*i-r*t);return this.x=t+l*h+r*d-o*c,this.y=i+l*c+o*h-s*d,this.z=n+l*d+s*c-r*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n,this.y=s[1]*t+s[5]*i+s[9]*n,this.z=s[2]*t+s[6]*i+s[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,s=e.z,r=t.x,o=t.y,l=t.z;return this.x=n*l-s*o,this.y=s*r-i*l,this.z=i*o-n*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Po.copy(this).projectOnVector(e),this.sub(Po)}reflect(e){return this.sub(Po.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Po=new I,Hc=new Qs;class Oe{static{Oe.prototype.isMatrix3=!0}constructor(e,t,i,n,s,r,o,l,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,r,o,l,h)}set(e,t,i,n,s,r,o,l,h){const c=this.elements;return c[0]=e,c[1]=n,c[2]=o,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=r,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,r=i[0],o=i[3],l=i[6],h=i[1],c=i[4],d=i[7],u=i[2],f=i[5],m=i[8],v=n[0],g=n[3],p=n[6],M=n[1],T=n[4],w=n[7],A=n[2],_=n[5],E=n[8];return s[0]=r*v+o*M+l*A,s[3]=r*g+o*T+l*_,s[6]=r*p+o*w+l*E,s[1]=h*v+c*M+d*A,s[4]=h*g+c*T+d*_,s[7]=h*p+c*w+d*E,s[2]=u*v+f*M+m*A,s[5]=u*g+f*T+m*_,s[8]=u*p+f*w+m*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],r=e[4],o=e[5],l=e[6],h=e[7],c=e[8];return t*r*c-t*o*h-i*s*c+i*o*l+n*s*h-n*r*l}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],r=e[4],o=e[5],l=e[6],h=e[7],c=e[8],d=c*r-o*h,u=o*l-c*s,f=h*s-r*l,m=t*d+i*u+n*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return e[0]=d*v,e[1]=(n*h-c*i)*v,e[2]=(o*i-n*r)*v,e[3]=u*v,e[4]=(c*t-n*l)*v,e[5]=(n*s-o*t)*v,e[6]=f*v,e[7]=(i*l-h*t)*v,e[8]=(r*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,s,r,o){const l=Math.cos(s),h=Math.sin(s);return this.set(i*l,i*h,-i*(l*r+h*o)+r+e,-n*h,n*l,-n*(-h*r+l*o)+o+t,0,0,1),this}scale(e,t){return Gs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Io.makeScale(e,t)),this}rotate(e){return Gs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Io.makeRotation(-e)),this}translate(e,t){return Gs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Io.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Io=new Oe,Gc=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vc=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $p(){const a={enabled:!0,workingColorSpace:io,spaces:{},convert:function(n,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===at&&(n.r=gn(n.r),n.g=gn(n.g),n.b=gn(n.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(n.applyMatrix3(this.spaces[s].toXYZ),n.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===at&&(n.r=Vs(n.r),n.g=Vs(n.g),n.b=Vs(n.b))),n},workingToColorSpace:function(n,s){return this.convert(n,this.workingColorSpace,s)},colorSpaceToWorking:function(n,s){return this.convert(n,s,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Cn?no:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,s=this.workingColorSpace){return n.fromArray(this.spaces[s].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,s,r){return n.copy(this.spaces[s].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,s){return Gs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(n,s)},toWorkingColorSpace:function(n,s){return Gs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(n,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return a.define({[io]:{primaries:e,whitePoint:i,transfer:no,toXYZ:Gc,fromXYZ:Vc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Mt},outputColorSpaceConfig:{drawingBufferColorSpace:Mt}},[Mt]:{primaries:e,whitePoint:i,transfer:at,toXYZ:Gc,fromXYZ:Vc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Mt}}}),a}const Ze=$p();function gn(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Vs(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let ds;class jp{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ds===void 0&&(ds=La("canvas")),ds.width=e.width,ds.height=e.height;const n=ds.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),i=ds}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=La("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),s=n.data;for(let r=0;r<s.length;r++)s[r]=gn(s[r]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(gn(t[i]/255)*255):t[i]=gn(t[i]);return{data:t,width:e.width,height:e.height}}else return ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Zp=0;class tc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zp++}),this.uuid=Ln(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let r=0,o=n.length;r<o;r++)n[r].isDataTexture?s.push(Lo(n[r].image)):s.push(Lo(n[r]))}else s=Lo(n);i.url=s}return t||(e.images[this.uuid]=i),i}}function Lo(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?jp.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(ke("Texture: Unable to serialize Texture."),{})}let Yp=0;const Fo=new I;class ei extends rs{constructor(e=ei.DEFAULT_IMAGE,t=ei.DEFAULT_MAPPING,i=Bi,n=Bi,s=li,r=Qn,o=Gi,l=Ii,h=ei.DEFAULT_ANISOTROPY,c=Cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yp++}),this.uuid=Ln(),this.name="",this.source=new tc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=r,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ve(0,0),this.repeat=new ve(1,1),this.center=new ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Fo).x}get height(){return this.source.getSize(Fo).y}get depth(){return this.source.getSize(Fo).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){ke(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){ke(`Texture.setValues(): property '${t}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ku)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vn:e.x=e.x-Math.floor(e.x);break;case Bi:e.x=e.x<0?0:1;break;case Wl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vn:e.y=e.y-Math.floor(e.y);break;case Bi:e.y=e.y<0?0:1;break;case Wl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ei.DEFAULT_IMAGE=null;ei.DEFAULT_MAPPING=Ku;ei.DEFAULT_ANISOTROPY=1;class It{static{It.prototype.isVector4=!0}constructor(e=0,t=0,i=0,n=1){this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*n+r[12]*s,this.y=r[1]*t+r[5]*i+r[9]*n+r[13]*s,this.z=r[2]*t+r[6]*i+r[10]*n+r[14]*s,this.w=r[3]*t+r[7]*i+r[11]*n+r[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,s;const l=e.elements,h=l[0],c=l[4],d=l[8],u=l[1],f=l[5],m=l[9],v=l[2],g=l[6],p=l[10];if(Math.abs(c-u)<.01&&Math.abs(d-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(c+u)<.1&&Math.abs(d+v)<.1&&Math.abs(m+g)<.1&&Math.abs(h+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(h+1)/2,w=(f+1)/2,A=(p+1)/2,_=(c+u)/4,E=(d+v)/4,x=(m+g)/4;return T>w&&T>A?T<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(T),n=_/i,s=E/i):w>A?w<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(w),i=_/n,s=x/n):A<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(A),i=E/s,n=x/s),this.set(i,n,s,t),this}let M=Math.sqrt((g-m)*(g-m)+(d-v)*(d-v)+(u-c)*(u-c));return Math.abs(M)<.001&&(M=1),this.x=(g-m)/M,this.y=(d-v)/M,this.z=(u-c)/M,this.w=Math.acos((h+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this.w=Ye(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this.w=Ye(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Kp extends rs{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:li,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t),this.textures=[];const n={width:e,height:t,depth:i.depth},s=new ei(n),r=i.count;for(let o=0;o<r;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:li,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const n=Object.assign({},e.textures[t].image);this.textures[t].source=new tc(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xi extends Kp{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class rf extends ei{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=ot,this.minFilter=ot,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Jp extends ei{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=ot,this.minFilter=ot,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mt{static{mt.prototype.isMatrix4=!0}constructor(e,t,i,n,s,r,o,l,h,c,d,u,f,m,v,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,r,o,l,h,c,d,u,f,m,v,g)}set(e,t,i,n,s,r,o,l,h,c,d,u,f,m,v,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=n,p[1]=s,p[5]=r,p[9]=o,p[13]=l,p[2]=h,p[6]=c,p[10]=d,p[14]=u,p[3]=f,p[7]=m,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,n=1/us.setFromMatrixColumn(e,0).length(),s=1/us.setFromMatrixColumn(e,1).length(),r=1/us.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*r,t[9]=i[9]*r,t[10]=i[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,n=e.y,s=e.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(n),h=Math.sin(n),c=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const u=r*c,f=r*d,m=o*c,v=o*d;t[0]=l*c,t[4]=-l*d,t[8]=h,t[1]=f+m*h,t[5]=u-v*h,t[9]=-o*l,t[2]=v-u*h,t[6]=m+f*h,t[10]=r*l}else if(e.order==="YXZ"){const u=l*c,f=l*d,m=h*c,v=h*d;t[0]=u+v*o,t[4]=m*o-f,t[8]=r*h,t[1]=r*d,t[5]=r*c,t[9]=-o,t[2]=f*o-m,t[6]=v+u*o,t[10]=r*l}else if(e.order==="ZXY"){const u=l*c,f=l*d,m=h*c,v=h*d;t[0]=u-v*o,t[4]=-r*d,t[8]=m+f*o,t[1]=f+m*o,t[5]=r*c,t[9]=v-u*o,t[2]=-r*h,t[6]=o,t[10]=r*l}else if(e.order==="ZYX"){const u=r*c,f=r*d,m=o*c,v=o*d;t[0]=l*c,t[4]=m*h-f,t[8]=u*h+v,t[1]=l*d,t[5]=v*h+u,t[9]=f*h-m,t[2]=-h,t[6]=o*l,t[10]=r*l}else if(e.order==="YZX"){const u=r*l,f=r*h,m=o*l,v=o*h;t[0]=l*c,t[4]=v-u*d,t[8]=m*d+f,t[1]=d,t[5]=r*c,t[9]=-o*c,t[2]=-h*c,t[6]=f*d+m,t[10]=u-v*d}else if(e.order==="XZY"){const u=r*l,f=r*h,m=o*l,v=o*h;t[0]=l*c,t[4]=-d,t[8]=h*c,t[1]=u*d+v,t[5]=r*c,t[9]=f*d-m,t[2]=m*d-f,t[6]=o*c,t[10]=v*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Qp,e,em)}lookAt(e,t,i){const n=this.elements;return yi.subVectors(e,t),yi.lengthSq()===0&&(yi.z=1),yi.normalize(),wn.crossVectors(i,yi),wn.lengthSq()===0&&(Math.abs(i.z)===1?yi.x+=1e-4:yi.z+=1e-4,yi.normalize(),wn.crossVectors(i,yi)),wn.normalize(),qa.crossVectors(yi,wn),n[0]=wn.x,n[4]=qa.x,n[8]=yi.x,n[1]=wn.y,n[5]=qa.y,n[9]=yi.y,n[2]=wn.z,n[6]=qa.z,n[10]=yi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,r=i[0],o=i[4],l=i[8],h=i[12],c=i[1],d=i[5],u=i[9],f=i[13],m=i[2],v=i[6],g=i[10],p=i[14],M=i[3],T=i[7],w=i[11],A=i[15],_=n[0],E=n[4],x=n[8],y=n[12],R=n[1],P=n[5],F=n[9],W=n[13],$=n[2],N=n[6],V=n[10],k=n[14],Y=n[3],ee=n[7],ae=n[11],de=n[15];return s[0]=r*_+o*R+l*$+h*Y,s[4]=r*E+o*P+l*N+h*ee,s[8]=r*x+o*F+l*V+h*ae,s[12]=r*y+o*W+l*k+h*de,s[1]=c*_+d*R+u*$+f*Y,s[5]=c*E+d*P+u*N+f*ee,s[9]=c*x+d*F+u*V+f*ae,s[13]=c*y+d*W+u*k+f*de,s[2]=m*_+v*R+g*$+p*Y,s[6]=m*E+v*P+g*N+p*ee,s[10]=m*x+v*F+g*V+p*ae,s[14]=m*y+v*W+g*k+p*de,s[3]=M*_+T*R+w*$+A*Y,s[7]=M*E+T*P+w*N+A*ee,s[11]=M*x+T*F+w*V+A*ae,s[15]=M*y+T*W+w*k+A*de,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],s=e[12],r=e[1],o=e[5],l=e[9],h=e[13],c=e[2],d=e[6],u=e[10],f=e[14],m=e[3],v=e[7],g=e[11],p=e[15],M=l*f-h*u,T=o*f-h*d,w=o*u-l*d,A=r*f-h*c,_=r*u-l*c,E=r*d-o*c;return t*(v*M-g*T+p*w)-i*(m*M-g*A+p*_)+n*(m*T-v*A+p*E)-s*(m*w-v*_+g*E)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],n=e[8],s=e[1],r=e[5],o=e[9],l=e[2],h=e[6],c=e[10];return t*(r*c-o*h)-i*(s*c-o*l)+n*(s*h-r*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],r=e[4],o=e[5],l=e[6],h=e[7],c=e[8],d=e[9],u=e[10],f=e[11],m=e[12],v=e[13],g=e[14],p=e[15],M=t*o-i*r,T=t*l-n*r,w=t*h-s*r,A=i*l-n*o,_=i*h-s*o,E=n*h-s*l,x=c*v-d*m,y=c*g-u*m,R=c*p-f*m,P=d*g-u*v,F=d*p-f*v,W=u*p-f*g,$=M*W-T*F+w*P+A*R-_*y+E*x;if($===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/$;return e[0]=(o*W-l*F+h*P)*N,e[1]=(n*F-i*W-s*P)*N,e[2]=(v*E-g*_+p*A)*N,e[3]=(u*_-d*E-f*A)*N,e[4]=(l*R-r*W-h*y)*N,e[5]=(t*W-n*R+s*y)*N,e[6]=(g*w-m*E-p*T)*N,e[7]=(c*E-u*w+f*T)*N,e[8]=(r*F-o*R+h*x)*N,e[9]=(i*R-t*F-s*x)*N,e[10]=(m*_-v*w+p*M)*N,e[11]=(d*w-c*_-f*M)*N,e[12]=(o*y-r*P-l*x)*N,e[13]=(t*P-i*y+n*x)*N,e[14]=(v*T-m*A-g*M)*N,e[15]=(c*A-d*T+u*M)*N,this}scale(e){const t=this.elements,i=e.x,n=e.y,s=e.z;return t[0]*=i,t[4]*=n,t[8]*=s,t[1]*=i,t[5]*=n,t[9]*=s,t[2]*=i,t[6]*=n,t[10]*=s,t[3]*=i,t[7]*=n,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),s=1-i,r=e.x,o=e.y,l=e.z,h=s*r,c=s*o;return this.set(h*r+i,h*o-n*l,h*l+n*o,0,h*o+n*l,c*o+i,c*l-n*r,0,h*l-n*o,c*l+n*r,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,s,r){return this.set(1,i,s,0,e,1,r,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,s=t._x,r=t._y,o=t._z,l=t._w,h=s+s,c=r+r,d=o+o,u=s*h,f=s*c,m=s*d,v=r*c,g=r*d,p=o*d,M=l*h,T=l*c,w=l*d,A=i.x,_=i.y,E=i.z;return n[0]=(1-(v+p))*A,n[1]=(f+w)*A,n[2]=(m-T)*A,n[3]=0,n[4]=(f-w)*_,n[5]=(1-(u+p))*_,n[6]=(g+M)*_,n[7]=0,n[8]=(m+T)*E,n[9]=(g-M)*E,n[10]=(1-(u+v))*E,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;e.x=n[12],e.y=n[13],e.z=n[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let r=us.set(n[0],n[1],n[2]).length();const o=us.set(n[4],n[5],n[6]).length(),l=us.set(n[8],n[9],n[10]).length();s<0&&(r=-r),Di.copy(this);const h=1/r,c=1/o,d=1/l;return Di.elements[0]*=h,Di.elements[1]*=h,Di.elements[2]*=h,Di.elements[4]*=c,Di.elements[5]*=c,Di.elements[6]*=c,Di.elements[8]*=d,Di.elements[9]*=d,Di.elements[10]*=d,t.setFromRotationMatrix(Di),i.x=r,i.y=o,i.z=l,this}makePerspective(e,t,i,n,s,r,o=Ji,l=!1){const h=this.elements,c=2*s/(t-e),d=2*s/(i-n),u=(t+e)/(t-e),f=(i+n)/(i-n);let m,v;if(l)m=s/(r-s),v=r*s/(r-s);else if(o===Ji)m=-(r+s)/(r-s),v=-2*r*s/(r-s);else if(o===so)m=-r/(r-s),v=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return h[0]=c,h[4]=0,h[8]=u,h[12]=0,h[1]=0,h[5]=d,h[9]=f,h[13]=0,h[2]=0,h[6]=0,h[10]=m,h[14]=v,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,i,n,s,r,o=Ji,l=!1){const h=this.elements,c=2/(t-e),d=2/(i-n),u=-(t+e)/(t-e),f=-(i+n)/(i-n);let m,v;if(l)m=1/(r-s),v=r/(r-s);else if(o===Ji)m=-2/(r-s),v=-(r+s)/(r-s);else if(o===so)m=-1/(r-s),v=-s/(r-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return h[0]=c,h[4]=0,h[8]=0,h[12]=u,h[1]=0,h[5]=d,h[9]=0,h[13]=f,h[2]=0,h[6]=0,h[10]=m,h[14]=v,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const us=new I,Di=new mt,Qp=new I(0,0,0),em=new I(1,1,1),wn=new I,qa=new I,yi=new I,Wc=new mt,Xc=new Qs;class ss{constructor(e=0,t=0,i=0,n=ss.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,s=n[0],r=n[4],o=n[8],l=n[1],h=n[5],c=n[9],d=n[2],u=n[6],f=n[10];switch(t){case"XYZ":this._y=Math.asin(Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,f),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(u,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-r,h)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ye(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,h));break;case"YZX":this._z=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ye(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,h),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-c,f),this._y=0);break;default:ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Wc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xc.setFromEuler(this),this.setFromQuaternion(Xc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ss.DEFAULT_ORDER="XYZ";class of{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let tm=0;const qc=new I,fs=new Qs,an=new mt,$a=new I,aa=new I,im=new I,nm=new Qs,$c=new I(1,0,0),jc=new I(0,1,0),Zc=new I(0,0,1),Yc={type:"added"},sm={type:"removed"},ps={type:"childadded",child:null},Do={type:"childremoved",child:null};class Zt extends rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tm++}),this.uuid=Ln(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Zt.DEFAULT_UP.clone();const e=new I,t=new ss,i=new Qs,n=new I(1,1,1);function s(){i.setFromEuler(t,!1)}function r(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new mt},normalMatrix:{value:new Oe}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=Zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new of,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fs.setFromAxisAngle(e,t),this.quaternion.multiply(fs),this}rotateOnWorldAxis(e,t){return fs.setFromAxisAngle(e,t),this.quaternion.premultiply(fs),this}rotateX(e){return this.rotateOnAxis($c,e)}rotateY(e){return this.rotateOnAxis(jc,e)}rotateZ(e){return this.rotateOnAxis(Zc,e)}translateOnAxis(e,t){return qc.copy(e).applyQuaternion(this.quaternion),this.position.add(qc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($c,e)}translateY(e){return this.translateOnAxis(jc,e)}translateZ(e){return this.translateOnAxis(Zc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(an.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?$a.copy(e):$a.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),aa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?an.lookAt(aa,$a,this.up):an.lookAt($a,aa,this.up),this.quaternion.setFromRotationMatrix(an),n&&(an.extractRotation(n.matrixWorld),fs.setFromRotationMatrix(an),this.quaternion.premultiply(fs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yc),ps.child=e,this.dispatchEvent(ps),ps.child=null):Je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(sm),Do.child=e,this.dispatchEvent(Do),Do.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),an.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),an.multiply(e.parent.matrixWorld)),e.applyMatrix4(an),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yc),ps.child=e,this.dispatchEvent(ps),ps.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const r=this.children[i].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const n=this.children;for(let s=0,r=n.length;s<r;s++)n[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(aa,e,im),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(aa,nm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,n=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*n,s[13]+=i-s[1]*t-s[5]*i-s[9]*n,s[14]+=n-s[2]*t-s[6]*i-s[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),this.static!==!1&&(n.static=this.static),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(e),n.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){const d=l[h];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(s(e.materials,this.material[l]));n.material=o}else n.material=s(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(s(e.animations,l))}}if(t){const o=r(e.geometries),l=r(e.materials),h=r(e.textures),c=r(e.images),d=r(e.shapes),u=r(e.skeletons),f=r(e.animations),m=r(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),h.length>0&&(i.textures=h),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),m.length>0&&(i.nodes=m)}return i.object=n,i;function r(o){const l=[];for(const h in o){const c=o[h];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}}Zt.DEFAULT_UP=new I(0,1,0);Zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ja extends Zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const am={type:"move"};class Uo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ja,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ja,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ja,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,s=null,r=null;const o=this._targetRay,l=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){r=!0;for(const v of e.hand.values()){const g=t.getJointPose(v,i),p=this._getHandJoint(h,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const c=h.joints["index-finger-tip"],d=h.joints["thumb-tip"],u=c.position.distanceTo(d.position),f=.02,m=.005;h.inputState.pinching&&u>f+m?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&u<=f-m&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(am)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=s!==null),h!==null&&(h.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ja;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const lf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mn={h:0,s:0,l:0},Za={h:0,s:0,l:0};function ko(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}class Ne{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,t),this}setRGB(e,t,i,n=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ze.colorSpaceToWorking(this,n),this}setHSL(e,t,i,n=Ze.workingColorSpace){if(e=qp(e,1),t=Ye(t,0,1),i=Ye(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,r=2*i-s;this.r=ko(r,s,e+1/3),this.g=ko(r,s,e),this.b=ko(r,s,e-1/3)}return Ze.colorSpaceToWorking(this,n),this}setStyle(e,t=Mt){function i(s){s!==void 0&&parseFloat(s)<1&&ke("Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const r=n[1],o=n[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:ke("Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=n[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(s,16),t);ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mt){const i=lf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gn(e.r),this.g=gn(e.g),this.b=gn(e.b),this}copyLinearToSRGB(e){return this.r=Vs(e.r),this.g=Vs(e.g),this.b=Vs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mt){return Ze.workingToColorSpace(ni.copy(this),e),Math.round(Ye(ni.r*255,0,255))*65536+Math.round(Ye(ni.g*255,0,255))*256+Math.round(Ye(ni.b*255,0,255))}getHexString(e=Mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.workingToColorSpace(ni.copy(this),t);const i=ni.r,n=ni.g,s=ni.b,r=Math.max(i,n,s),o=Math.min(i,n,s);let l,h;const c=(o+r)/2;if(o===r)l=0,h=0;else{const d=r-o;switch(h=c<=.5?d/(r+o):d/(2-r-o),r){case i:l=(n-s)/d+(n<s?6:0);break;case n:l=(s-i)/d+2;break;case s:l=(i-n)/d+4;break}l/=6}return e.h=l,e.s=h,e.l=c,e}getRGB(e,t=Ze.workingColorSpace){return Ze.workingToColorSpace(ni.copy(this),t),e.r=ni.r,e.g=ni.g,e.b=ni.b,e}getStyle(e=Mt){Ze.workingToColorSpace(ni.copy(this),e);const t=ni.r,i=ni.g,n=ni.b;return e!==Mt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(Mn),this.setHSL(Mn.h+e,Mn.s+t,Mn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Mn),e.getHSL(Za);const i=Ro(Mn.h,Za.h,t),n=Ro(Mn.s,Za.s,t),s=Ro(Mn.l,Za.l,t);return this.setHSL(i,n,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,n=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*n,this.g=s[1]*t+s[4]*i+s[7]*n,this.b=s[2]*t+s[5]*i+s[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ni=new Ne;Ne.NAMES=lf;class ic{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ne(e),this.density=t}clone(){return new ic(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class rm extends Zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ss,this.environmentIntensity=1,this.environmentRotation=new ss,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ui=new I,rn=new I,zo=new I,on=new I,ms=new I,gs=new I,Kc=new I,No=new I,Oo=new I,Bo=new I,Ho=new It,Go=new It,Vo=new It;class Li{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),Ui.subVectors(e,t),n.cross(Ui);const s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(e,t,i,n,s){Ui.subVectors(n,t),rn.subVectors(i,t),zo.subVectors(e,t);const r=Ui.dot(Ui),o=Ui.dot(rn),l=Ui.dot(zo),h=rn.dot(rn),c=rn.dot(zo),d=r*h-o*o;if(d===0)return s.set(0,0,0),null;const u=1/d,f=(h*l-o*c)*u,m=(r*c-o*l)*u;return s.set(1-f-m,m,f)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,on)===null?!1:on.x>=0&&on.y>=0&&on.x+on.y<=1}static getInterpolation(e,t,i,n,s,r,o,l){return this.getBarycoord(e,t,i,n,on)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,on.x),l.addScaledVector(r,on.y),l.addScaledVector(o,on.z),l)}static getInterpolatedAttribute(e,t,i,n,s,r){return Ho.setScalar(0),Go.setScalar(0),Vo.setScalar(0),Ho.fromBufferAttribute(e,t),Go.fromBufferAttribute(e,i),Vo.fromBufferAttribute(e,n),r.setScalar(0),r.addScaledVector(Ho,s.x),r.addScaledVector(Go,s.y),r.addScaledVector(Vo,s.z),r}static isFrontFacing(e,t,i,n){return Ui.subVectors(i,t),rn.subVectors(e,t),Ui.cross(rn).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ui.subVectors(this.c,this.b),rn.subVectors(this.a,this.b),Ui.cross(rn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Li.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Li.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,s){return Li.getInterpolation(e,this.a,this.b,this.c,t,i,n,s)}containsPoint(e){return Li.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Li.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,s=this.c;let r,o;ms.subVectors(n,i),gs.subVectors(s,i),No.subVectors(e,i);const l=ms.dot(No),h=gs.dot(No);if(l<=0&&h<=0)return t.copy(i);Oo.subVectors(e,n);const c=ms.dot(Oo),d=gs.dot(Oo);if(c>=0&&d<=c)return t.copy(n);const u=l*d-c*h;if(u<=0&&l>=0&&c<=0)return r=l/(l-c),t.copy(i).addScaledVector(ms,r);Bo.subVectors(e,s);const f=ms.dot(Bo),m=gs.dot(Bo);if(m>=0&&f<=m)return t.copy(s);const v=f*h-l*m;if(v<=0&&h>=0&&m<=0)return o=h/(h-m),t.copy(i).addScaledVector(gs,o);const g=c*m-f*d;if(g<=0&&d-c>=0&&f-m>=0)return Kc.subVectors(s,n),o=(d-c)/(d-c+(f-m)),t.copy(n).addScaledVector(Kc,o);const p=1/(g+v+u);return r=v*p,o=u*p,t.copy(i).addScaledVector(ms,r).addScaledVector(gs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class os{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ki.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ki.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ki.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,ki):ki.fromBufferAttribute(s,r),ki.applyMatrix4(e.matrixWorld),this.expandByPoint(ki);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ya.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ya.copy(i.boundingBox)),Ya.applyMatrix4(e.matrixWorld),this.union(Ya)}const n=e.children;for(let s=0,r=n.length;s<r;s++)this.expandByObject(n[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ki),ki.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ra),Ka.subVectors(this.max,ra),vs.subVectors(e.a,ra),xs.subVectors(e.b,ra),bs.subVectors(e.c,ra),Sn.subVectors(xs,vs),An.subVectors(bs,xs),kn.subVectors(vs,bs);let t=[0,-Sn.z,Sn.y,0,-An.z,An.y,0,-kn.z,kn.y,Sn.z,0,-Sn.x,An.z,0,-An.x,kn.z,0,-kn.x,-Sn.y,Sn.x,0,-An.y,An.x,0,-kn.y,kn.x,0];return!Wo(t,vs,xs,bs,Ka)||(t=[1,0,0,0,1,0,0,0,1],!Wo(t,vs,xs,bs,Ka))?!1:(Ja.crossVectors(Sn,An),t=[Ja.x,Ja.y,Ja.z],Wo(t,vs,xs,bs,Ka))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ki).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ki).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ln=[new I,new I,new I,new I,new I,new I,new I,new I],ki=new I,Ya=new os,vs=new I,xs=new I,bs=new I,Sn=new I,An=new I,kn=new I,ra=new I,Ka=new I,Ja=new I,zn=new I;function Wo(a,e,t,i,n){for(let s=0,r=a.length-3;s<=r;s+=3){zn.fromArray(a,s);const o=n.x*Math.abs(zn.x)+n.y*Math.abs(zn.y)+n.z*Math.abs(zn.z),l=e.dot(zn),h=t.dot(zn),c=i.dot(zn);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>o)return!1}return!0}const Bt=new I,Qa=new ve;let om=0;class St extends rs{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:om++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=_h,this.updateRanges=[],this.gpuType=Hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Qa.fromBufferAttribute(this,t),Qa.applyMatrix3(e),this.setXY(t,Qa.x,Qa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix3(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ki(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=dt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ki(t,this.array)),t}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ki(t,this.array)),t}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ki(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ki(t,this.array)),t}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),n=dt(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),n=dt(n,this.array),s=dt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_h&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class hf extends St{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class cf extends St{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class xt extends St{constructor(e,t,i){super(new Float32Array(e),t,i)}}const lm=new os,oa=new I,Xo=new I;class ea{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):lm.setFromPoints(e).getCenter(i);let n=0;for(let s=0,r=e.length;s<r;s++)n=Math.max(n,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;oa.subVectors(e,this.center);const t=oa.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(oa,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(oa.copy(e.center).add(Xo)),this.expandByPoint(oa.copy(e.center).sub(Xo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let hm=0;const Ei=new mt,qo=new Zt,ys=new I,_i=new os,la=new os,$t=new I;class zt extends rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hm++}),this.uuid=Ln(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gp(e)?cf:hf)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Oe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ei.makeRotationFromQuaternion(e),this.applyMatrix4(Ei),this}rotateX(e){return Ei.makeRotationX(e),this.applyMatrix4(Ei),this}rotateY(e){return Ei.makeRotationY(e),this.applyMatrix4(Ei),this}rotateZ(e){return Ei.makeRotationZ(e),this.applyMatrix4(Ei),this}translate(e,t,i){return Ei.makeTranslation(e,t,i),this.applyMatrix4(Ei),this}scale(e,t,i){return Ei.makeScale(e,t,i),this.applyMatrix4(Ei),this}lookAt(e){return qo.lookAt(e),qo.updateMatrix(),this.applyMatrix4(qo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ys).negate(),this.translate(ys.x,ys.y,ys.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new xt(i,3))}else{const i=Math.min(e.length,t.count);for(let n=0;n<i;n++){const s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new os);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const s=t[i];_i.setFromBufferAttribute(s),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,_i.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,_i.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(_i.min),this.boundingBox.expandByPoint(_i.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ea);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(_i.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){const o=t[s];la.setFromBufferAttribute(o),this.morphTargetsRelative?($t.addVectors(_i.min,la.min),_i.expandByPoint($t),$t.addVectors(_i.max,la.max),_i.expandByPoint($t)):(_i.expandByPoint(la.min),_i.expandByPoint(la.max))}_i.getCenter(i);let n=0;for(let s=0,r=e.count;s<r;s++)$t.fromBufferAttribute(e,s),n=Math.max(n,i.distanceToSquared($t));if(t)for(let s=0,r=t.length;s<r;s++){const o=t[s],l=this.morphTargetsRelative;for(let h=0,c=o.count;h<c;h++)$t.fromBufferAttribute(o,h),l&&(ys.fromBufferAttribute(e,h),$t.add(ys)),n=Math.max(n,i.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&Je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,n=t.normal,s=t.uv;let r=this.getAttribute("tangent");(r===void 0||r.count!==i.count)&&(r=new St(new Float32Array(4*i.count),4),this.setAttribute("tangent",r));const o=[],l=[];for(let x=0;x<i.count;x++)o[x]=new I,l[x]=new I;const h=new I,c=new I,d=new I,u=new ve,f=new ve,m=new ve,v=new I,g=new I;function p(x,y,R){h.fromBufferAttribute(i,x),c.fromBufferAttribute(i,y),d.fromBufferAttribute(i,R),u.fromBufferAttribute(s,x),f.fromBufferAttribute(s,y),m.fromBufferAttribute(s,R),c.sub(h),d.sub(h),f.sub(u),m.sub(u);const P=1/(f.x*m.y-m.x*f.y);isFinite(P)&&(v.copy(c).multiplyScalar(m.y).addScaledVector(d,-f.y).multiplyScalar(P),g.copy(d).multiplyScalar(f.x).addScaledVector(c,-m.x).multiplyScalar(P),o[x].add(v),o[y].add(v),o[R].add(v),l[x].add(g),l[y].add(g),l[R].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let x=0,y=M.length;x<y;++x){const R=M[x],P=R.start,F=R.count;for(let W=P,$=P+F;W<$;W+=3)p(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const T=new I,w=new I,A=new I,_=new I;function E(x){A.fromBufferAttribute(n,x),_.copy(A);const y=o[x];T.copy(y),T.sub(A.multiplyScalar(A.dot(y))).normalize(),w.crossVectors(_,y);const P=w.dot(l[x])<0?-1:1;r.setXYZW(x,T.x,T.y,T.z,P)}for(let x=0,y=M.length;x<y;++x){const R=M[x],P=R.start,F=R.count;for(let W=P,$=P+F;W<$;W+=3)E(e.getX(W+0)),E(e.getX(W+1)),E(e.getX(W+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new St(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);const n=new I,s=new I,r=new I,o=new I,l=new I,h=new I,c=new I,d=new I;if(e)for(let u=0,f=e.count;u<f;u+=3){const m=e.getX(u+0),v=e.getX(u+1),g=e.getX(u+2);n.fromBufferAttribute(t,m),s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,g),c.subVectors(r,s),d.subVectors(n,s),c.cross(d),o.fromBufferAttribute(i,m),l.fromBufferAttribute(i,v),h.fromBufferAttribute(i,g),o.add(c),l.add(c),h.add(c),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(g,h.x,h.y,h.z)}else for(let u=0,f=t.count;u<f;u+=3)n.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),r.fromBufferAttribute(t,u+2),c.subVectors(r,s),d.subVectors(n,s),c.cross(d),i.setXYZ(u+0,c.x,c.y,c.z),i.setXYZ(u+1,c.x,c.y,c.z),i.setXYZ(u+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)$t.fromBufferAttribute(e,t),$t.normalize(),e.setXYZ(t,$t.x,$t.y,$t.z)}toNonIndexed(){function e(o,l){const h=o.array,c=o.itemSize,d=o.normalized,u=new h.constructor(l.length*c);let f=0,m=0;for(let v=0,g=l.length;v<g;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*c;for(let p=0;p<c;p++)u[m++]=h[f++]}return new St(u,c,d)}if(this.index===null)return ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new zt,i=this.index.array,n=this.attributes;for(const o in n){const l=n[o],h=e(l,i);t.setAttribute(o,h)}const s=this.morphAttributes;for(const o in s){const l=[],h=s[o];for(let c=0,d=h.length;c<d;c++){const u=h[c],f=e(u,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const h=r[o];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(e[h]=l[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const h=i[l];e.data.attributes[l]=h.toJSON(e.data)}const n={};let s=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],c=[];for(let d=0,u=h.length;d<u;d++){const f=h[d];c.push(f.toJSON(e.data))}c.length>0&&(n[l]=c,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const n=e.attributes;for(const h in n){const c=n[h];this.setAttribute(h,c.clone(t))}const s=e.morphAttributes;for(const h in s){const c=[],d=s[h];for(let u=0,f=d.length;u<f;u++)c.push(d[u].clone(t));this.morphAttributes[h]=c}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let h=0,c=r.length;h<c;h++){const d=r[h];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class cm{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=_h,this.updateRanges=[],this.version=0,this.uuid=Ln()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,s=this.stride;n<s;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ln()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ln()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ci=new I;class ro{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)ci.fromBufferAttribute(this,t),ci.applyMatrix4(e),this.setXYZ(t,ci.x,ci.y,ci.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ci.fromBufferAttribute(this,t),ci.applyNormalMatrix(e),this.setXYZ(t,ci.x,ci.y,ci.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ci.fromBufferAttribute(this,t),ci.transformDirection(e),this.setXYZ(t,ci.x,ci.y,ci.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Ki(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=dt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ki(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ki(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ki(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ki(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),n=dt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),n=dt(n,this.array),s=dt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=s,this}clone(e){if(e===void 0){ao("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[n+s])}return new St(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ro(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ao("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[n+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let dm=0;class ta extends rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dm++}),this.uuid=Ln(),this.name="",this.type="Material",this.blending=en,this.side=Fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ul,this.blendDst=kl,this.blendEquation=Yn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cs,this.stencilZFail=cs,this.stencilZPass=cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){ke(`Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){ke(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==en&&(i.blending=this.blending),this.side!==Fn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ul&&(i.blendSrc=this.blendSrc),this.blendDst!==kl&&(i.blendDst=this.blendDst),this.blendEquation!==Yn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==qs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Nc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==cs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==cs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){const r=[];for(const o in s){const l=s[o];delete l.metadata,r.push(l)}return r}if(t){const s=n(e.textures),r=n(e.images);s.length>0&&(i.textures=s),r.length>0&&(i.images=r)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ne().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ve().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ve().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class js extends ta{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let _s;const ha=new I,ws=new I,Ms=new I,Ss=new ve,ca=new ve,df=new mt,er=new I,da=new I,tr=new I,Jc=new ve,$o=new ve,Qc=new ve;class Fa extends Zt{constructor(e=new js){if(super(),this.isSprite=!0,this.type="Sprite",_s===void 0){_s=new zt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new cm(t,5);_s.setIndex([0,1,2,0,2,3]),_s.setAttribute("position",new ro(i,3,0,!1)),_s.setAttribute("uv",new ro(i,2,3,!1))}this.geometry=_s,this.material=e,this.center=new ve(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Je('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ws.setFromMatrixScale(this.matrixWorld),df.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ms.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ws.multiplyScalar(-Ms.z);const i=this.material.rotation;let n,s;i!==0&&(s=Math.cos(i),n=Math.sin(i));const r=this.center;ir(er.set(-.5,-.5,0),Ms,r,ws,n,s),ir(da.set(.5,-.5,0),Ms,r,ws,n,s),ir(tr.set(.5,.5,0),Ms,r,ws,n,s),Jc.set(0,0),$o.set(1,0),Qc.set(1,1);let o=e.ray.intersectTriangle(er,da,tr,!1,ha);if(o===null&&(ir(da.set(-.5,.5,0),Ms,r,ws,n,s),$o.set(0,1),o=e.ray.intersectTriangle(er,tr,da,!1,ha),o===null))return;const l=e.ray.origin.distanceTo(ha);l<e.near||l>e.far||t.push({distance:l,point:ha.clone(),uv:Li.getInterpolation(ha,er,da,tr,Jc,$o,Qc,new ve),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ir(a,e,t,i,n,s){Ss.subVectors(a,t).addScalar(.5).multiply(i),n!==void 0?(ca.x=s*Ss.x-n*Ss.y,ca.y=n*Ss.x+s*Ss.y):ca.copy(Ss),a.copy(e),a.x+=ca.x,a.y+=ca.y,a.applyMatrix4(df)}const hn=new I,jo=new I,nr=new I,Tn=new I,Zo=new I,sr=new I,Yo=new I;class uf{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=hn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hn.copy(this.origin).addScaledVector(this.direction,t),hn.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){jo.copy(e).add(t).multiplyScalar(.5),nr.copy(t).sub(e).normalize(),Tn.copy(this.origin).sub(jo);const s=e.distanceTo(t)*.5,r=-this.direction.dot(nr),o=Tn.dot(this.direction),l=-Tn.dot(nr),h=Tn.lengthSq(),c=Math.abs(1-r*r);let d,u,f,m;if(c>0)if(d=r*l-o,u=r*o-l,m=s*c,d>=0)if(u>=-m)if(u<=m){const v=1/c;d*=v,u*=v,f=d*(d+r*u+2*o)+u*(r*d+u+2*l)+h}else u=s,d=Math.max(0,-(r*u+o)),f=-d*d+u*(u+2*l)+h;else u=-s,d=Math.max(0,-(r*u+o)),f=-d*d+u*(u+2*l)+h;else u<=-m?(d=Math.max(0,-(-r*s+o)),u=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+h):u<=m?(d=0,u=Math.min(Math.max(-s,-l),s),f=u*(u+2*l)+h):(d=Math.max(0,-(r*s+o)),u=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+h);else u=r>0?-s:s,d=Math.max(0,-(r*u+o)),f=-d*d+u*(u+2*l)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy(jo).addScaledVector(nr,u),f}intersectSphere(e,t){hn.subVectors(e.center,this.origin);const i=hn.dot(this.direction),n=hn.dot(hn)-i*i,s=e.radius*e.radius;if(n>s)return null;const r=Math.sqrt(s-n),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,s,r,o,l;const h=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,u=this.origin;return h>=0?(i=(e.min.x-u.x)*h,n=(e.max.x-u.x)*h):(i=(e.max.x-u.x)*h,n=(e.min.x-u.x)*h),c>=0?(s=(e.min.y-u.y)*c,r=(e.max.y-u.y)*c):(s=(e.max.y-u.y)*c,r=(e.min.y-u.y)*c),i>r||s>n||((s>i||isNaN(i))&&(i=s),(r<n||isNaN(n))&&(n=r),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,hn)!==null}intersectTriangle(e,t,i,n,s){Zo.subVectors(t,e),sr.subVectors(i,e),Yo.crossVectors(Zo,sr);let r=this.direction.dot(Yo),o;if(r>0){if(n)return null;o=1}else if(r<0)o=-1,r=-r;else return null;Tn.subVectors(this.origin,e);const l=o*this.direction.dot(sr.crossVectors(Tn,sr));if(l<0)return null;const h=o*this.direction.dot(Zo.cross(Tn));if(h<0||l+h>r)return null;const c=-o*Tn.dot(Yo);return c<0?null:this.at(c/r,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Fi extends ta{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ss,this.combine=Yu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ed=new mt,Nn=new uf,ar=new ea,td=new I,rr=new I,or=new I,lr=new I,Ko=new I,hr=new I,id=new I,cr=new I;class Lt extends Zt{constructor(e=new zt,t=new Fi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=n.length;s<r;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,r=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const o=this.morphTargetInfluences;if(s&&o){hr.set(0,0,0);for(let l=0,h=s.length;l<h;l++){const c=o[l],d=s[l];c!==0&&(Ko.fromBufferAttribute(d,e),r?hr.addScaledVector(Ko,c):hr.addScaledVector(Ko.sub(t),c))}t.add(hr)}return t}raycast(e,t){const i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ar.copy(i.boundingSphere),ar.applyMatrix4(s),Nn.copy(e.ray).recast(e.near),!(ar.containsPoint(Nn.origin)===!1&&(Nn.intersectSphere(ar,td)===null||Nn.origin.distanceToSquared(td)>(e.far-e.near)**2))&&(ed.copy(s).invert(),Nn.copy(e.ray).applyMatrix4(ed),!(i.boundingBox!==null&&Nn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Nn)))}_computeIntersections(e,t,i){let n;const s=this.geometry,r=this.material,o=s.index,l=s.attributes.position,h=s.attributes.uv,c=s.attributes.uv1,d=s.attributes.normal,u=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(r))for(let m=0,v=u.length;m<v;m++){const g=u[m],p=r[g.materialIndex],M=Math.max(g.start,f.start),T=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let w=M,A=T;w<A;w+=3){const _=o.getX(w),E=o.getX(w+1),x=o.getX(w+2);n=dr(this,p,e,i,h,c,d,_,E,x),n&&(n.faceIndex=Math.floor(w/3),n.face.materialIndex=g.materialIndex,t.push(n))}}else{const m=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let g=m,p=v;g<p;g+=3){const M=o.getX(g),T=o.getX(g+1),w=o.getX(g+2);n=dr(this,r,e,i,h,c,d,M,T,w),n&&(n.faceIndex=Math.floor(g/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(r))for(let m=0,v=u.length;m<v;m++){const g=u[m],p=r[g.materialIndex],M=Math.max(g.start,f.start),T=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let w=M,A=T;w<A;w+=3){const _=w,E=w+1,x=w+2;n=dr(this,p,e,i,h,c,d,_,E,x),n&&(n.faceIndex=Math.floor(w/3),n.face.materialIndex=g.materialIndex,t.push(n))}}else{const m=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let g=m,p=v;g<p;g+=3){const M=g,T=g+1,w=g+2;n=dr(this,r,e,i,h,c,d,M,T,w),n&&(n.faceIndex=Math.floor(g/3),t.push(n))}}}}function um(a,e,t,i,n,s,r,o){let l;if(e.side===vi?l=i.intersectTriangle(r,s,n,!0,o):l=i.intersectTriangle(n,s,r,e.side===Fn,o),l===null)return null;cr.copy(o),cr.applyMatrix4(a.matrixWorld);const h=t.ray.origin.distanceTo(cr);return h<t.near||h>t.far?null:{distance:h,point:cr.clone(),object:a}}function dr(a,e,t,i,n,s,r,o,l,h){a.getVertexPosition(o,rr),a.getVertexPosition(l,or),a.getVertexPosition(h,lr);const c=um(a,e,t,i,rr,or,lr,id);if(c){const d=new I;Li.getBarycoord(id,rr,or,lr,d),n&&(c.uv=Li.getInterpolatedAttribute(n,o,l,h,d,new ve)),s&&(c.uv1=Li.getInterpolatedAttribute(s,o,l,h,d,new ve)),r&&(c.normal=Li.getInterpolatedAttribute(r,o,l,h,d,new I),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const u={a:o,b:l,c:h,normal:new I,materialIndex:0};Li.getNormal(rr,or,lr,u.normal),c.face=u,c.barycoord=d}return c}class ff extends ei{constructor(e=null,t=1,i=1,n,s,r,o,l,h=ot,c=ot,d,u){super(null,r,o,l,h,c,n,s,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qe extends St{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const As=new mt,nd=new mt,ur=[],sd=new os,fm=new mt,ua=new Lt,fa=new ea;class At extends Lt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new qe(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,fm)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new os),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,As),sd.copy(e.boundingBox).applyMatrix4(As),this.boundingBox.union(sd)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ea),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,As),fa.copy(e.boundingSphere).applyMatrix4(As),this.boundingSphere.union(fa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,n=this.morphTexture.source.data.data,s=i.length+1,r=e*s+1;for(let o=0;o<i.length;o++)i[o]=n[r+o]}raycast(e,t){const i=this.matrixWorld,n=this.count;if(ua.geometry=this.geometry,ua.material=this.material,ua.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fa.copy(this.boundingSphere),fa.applyMatrix4(i),e.ray.intersectsSphere(fa)!==!1))for(let s=0;s<n;s++){this.getMatrixAt(s,As),nd.multiplyMatrices(i,As),ua.matrixWorld=nd,ua.raycast(e,ur);for(let r=0,o=ur.length;r<o;r++){const l=ur[r];l.instanceId=s,l.object=this,t.push(l)}ur.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new qe(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new ff(new Float32Array(n*this.count),n,this.count,Zh,Hi));const s=this.morphTexture.source.data.data;let r=0;for(let h=0;h<i.length;h++)r+=i[h];const o=this.geometry.morphTargetsRelative?1:1-r,l=n*e;return s[l]=o,s.set(i,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Jo=new I,pm=new I,mm=new Oe;class jn{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=Jo.subVectors(i,t).cross(pm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const n=e.delta(Jo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(r<0||r>1)?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||mm.getNormalMatrix(e),n=this.coplanarPoint(Jo).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const On=new ea,gm=new ve(.5,.5),fr=new I;class pf{constructor(e=new jn,t=new jn,i=new jn,n=new jn,s=new jn,r=new jn){this.planes=[e,t,i,n,s,r]}set(e,t,i,n,s,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(r),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ji,i=!1){const n=this.planes,s=e.elements,r=s[0],o=s[1],l=s[2],h=s[3],c=s[4],d=s[5],u=s[6],f=s[7],m=s[8],v=s[9],g=s[10],p=s[11],M=s[12],T=s[13],w=s[14],A=s[15];if(n[0].setComponents(h-r,f-c,p-m,A-M).normalize(),n[1].setComponents(h+r,f+c,p+m,A+M).normalize(),n[2].setComponents(h+o,f+d,p+v,A+T).normalize(),n[3].setComponents(h-o,f-d,p-v,A-T).normalize(),i)n[4].setComponents(l,u,g,w).normalize(),n[5].setComponents(h-l,f-u,p-g,A-w).normalize();else if(n[4].setComponents(h-l,f-u,p-g,A-w).normalize(),t===Ji)n[5].setComponents(h+l,f+u,p+g,A+w).normalize();else if(t===so)n[5].setComponents(l,u,g,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),On.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),On.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(On)}intersectsSprite(e){On.center.set(0,0,0);const t=gm.distanceTo(e.center);return On.radius=.7071067811865476+t,On.applyMatrix4(e.matrixWorld),this.intersectsSphere(On)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(fr.x=n.normal.x>0?e.max.x:e.min.x,fr.y=n.normal.y>0?e.max.y:e.min.y,fr.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(fr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class vm extends ta{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ad=new mt,Mh=new uf,pr=new ea,mr=new I;class mf extends Zt{constructor(e=new zt,t=new vm){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,s=e.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),pr.copy(i.boundingSphere),pr.applyMatrix4(n),pr.radius+=s,e.ray.intersectsSphere(pr)===!1)return;ad.copy(n).invert(),Mh.copy(e.ray).applyMatrix4(ad);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,h=i.index,d=i.attributes.position;if(h!==null){const u=Math.max(0,r.start),f=Math.min(h.count,r.start+r.count);for(let m=u,v=f;m<v;m++){const g=h.getX(m);mr.fromBufferAttribute(d,g),rd(mr,g,l,n,e,t,this)}}else{const u=Math.max(0,r.start),f=Math.min(d.count,r.start+r.count);for(let m=u,v=f;m<v;m++)mr.fromBufferAttribute(d,m),rd(mr,m,l,n,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=n.length;s<r;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function rd(a,e,t,i,n,s,r){const o=Mh.distanceSqToPoint(a);if(o<t){const l=new I;Mh.closestPointToPoint(a,l),l.applyMatrix4(i);const h=n.ray.origin.distanceTo(l);if(h<n.near||h>n.far)return;s.push({distance:h,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}class gf extends ei{constructor(e=[],t=is,i,n,s,r,o,l,h,c){super(e,t,i,n,s,r,o,l,h,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ai extends ei{constructor(e,t,i,n,s,r,o,l,h){super(e,t,i,n,s,r,o,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Zs extends ei{constructor(e,t,i=nn,n,s,r,o=ot,l=ot,h,c=xn,d=1){if(c!==xn&&c!==es)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:d};super(u,n,s,r,o,l,c,i,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new tc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class xm extends Zs{constructor(e,t=nn,i=is,n,s,r=ot,o=ot,l,h=xn){const c={width:e,height:e,depth:1},d=[c,c,c,c,c,c];super(e,e,t,i,n,s,r,o,l,h),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class vf extends ei{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class sn extends zt{constructor(e=1,t=1,i=1,n=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:s,depthSegments:r};const o=this;n=Math.floor(n),s=Math.floor(s),r=Math.floor(r);const l=[],h=[],c=[],d=[];let u=0,f=0;m("z","y","x",-1,-1,i,t,e,r,s,0),m("z","y","x",1,-1,i,t,-e,r,s,1),m("x","z","y",1,1,e,i,t,n,r,2),m("x","z","y",1,-1,e,i,-t,n,r,3),m("x","y","z",1,-1,e,t,i,n,s,4),m("x","y","z",-1,-1,e,t,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new xt(h,3)),this.setAttribute("normal",new xt(c,3)),this.setAttribute("uv",new xt(d,2));function m(v,g,p,M,T,w,A,_,E,x,y){const R=w/E,P=A/x,F=w/2,W=A/2,$=_/2,N=E+1,V=x+1;let k=0,Y=0;const ee=new I;for(let ae=0;ae<V;ae++){const de=ae*P-W;for(let xe=0;xe<N;xe++){const Ke=xe*R-F;ee[v]=Ke*M,ee[g]=de*T,ee[p]=$,h.push(ee.x,ee.y,ee.z),ee[v]=0,ee[g]=0,ee[p]=_>0?1:-1,c.push(ee.x,ee.y,ee.z),d.push(xe/E),d.push(1-ae/x),k+=1}}for(let ae=0;ae<x;ae++)for(let de=0;de<E;de++){const xe=u+de+N*ae,Ke=u+de+N*(ae+1),Tt=u+(de+1)+N*(ae+1),it=u+(de+1)+N*ae;l.push(xe,Ke,it),l.push(Ke,Tt,it),Y+=6}o.addGroup(f,Y,y),f+=Y,u+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class vo extends zt{constructor(e=1,t=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);const s=[],r=[],o=[],l=[],h=new I,c=new ve;r.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){const f=i+d/t*n;h.x=e*Math.cos(f),h.y=e*Math.sin(f),r.push(h.x,h.y,h.z),o.push(0,0,1),c.x=(r[u]/e+1)/2,c.y=(r[u+1]/e+1)/2,l.push(c.x,c.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new xt(r,3)),this.setAttribute("normal",new xt(o,3)),this.setAttribute("uv",new xt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vo(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class xo extends zt{constructor(e=1,t=1,i=1,n=32,s=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:l};const h=this;n=Math.floor(n),s=Math.floor(s);const c=[],d=[],u=[],f=[];let m=0;const v=[],g=i/2;let p=0;M(),r===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(c),this.setAttribute("position",new xt(d,3)),this.setAttribute("normal",new xt(u,3)),this.setAttribute("uv",new xt(f,2));function M(){const w=new I,A=new I;let _=0;const E=(t-e)/i;for(let x=0;x<=s;x++){const y=[],R=x/s,P=R*(t-e)+e;for(let F=0;F<=n;F++){const W=F/n,$=W*l+o,N=Math.sin($),V=Math.cos($);A.x=P*N,A.y=-R*i+g,A.z=P*V,d.push(A.x,A.y,A.z),w.set(N,E,V).normalize(),u.push(w.x,w.y,w.z),f.push(W,1-R),y.push(m++)}v.push(y)}for(let x=0;x<n;x++)for(let y=0;y<s;y++){const R=v[y][x],P=v[y+1][x],F=v[y+1][x+1],W=v[y][x+1];(e>0||y!==0)&&(c.push(R,P,W),_+=3),(t>0||y!==s-1)&&(c.push(P,F,W),_+=3)}h.addGroup(p,_,0),p+=_}function T(w){const A=m,_=new ve,E=new I;let x=0;const y=w===!0?e:t,R=w===!0?1:-1;for(let F=1;F<=n;F++)d.push(0,g*R,0),u.push(0,R,0),f.push(.5,.5),m++;const P=m;for(let F=0;F<=n;F++){const $=F/n*l+o,N=Math.cos($),V=Math.sin($);E.x=y*V,E.y=g*R,E.z=y*N,d.push(E.x,E.y,E.z),u.push(0,R,0),_.x=N*.5+.5,_.y=V*.5*R+.5,f.push(_.x,_.y),m++}for(let F=0;F<n;F++){const W=A+F,$=P+F;w===!0?c.push($,$+1,W):c.push($+1,$,W),x+=3}h.addGroup(p,x,w===!0?1:2),p+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class nc extends xo{constructor(e=1,t=1,i=32,n=1,s=!1,r=0,o=Math.PI*2){super(0,e,t,i,n,s,r,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:r,thetaLength:o}}static fromJSON(e){return new nc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class sc extends zt{constructor(e=[],t=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};const s=[],r=[];o(n),h(i),c(),this.setAttribute("position",new xt(s,3)),this.setAttribute("normal",new xt(s.slice(),3)),this.setAttribute("uv",new xt(r,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const T=new I,w=new I,A=new I;for(let _=0;_<t.length;_+=3)f(t[_+0],T),f(t[_+1],w),f(t[_+2],A),l(T,w,A,M)}function l(M,T,w,A){const _=A+1,E=[];for(let x=0;x<=_;x++){E[x]=[];const y=M.clone().lerp(w,x/_),R=T.clone().lerp(w,x/_),P=_-x;for(let F=0;F<=P;F++)F===0&&x===_?E[x][F]=y:E[x][F]=y.clone().lerp(R,F/P)}for(let x=0;x<_;x++)for(let y=0;y<2*(_-x)-1;y++){const R=Math.floor(y/2);y%2===0?(u(E[x][R+1]),u(E[x+1][R]),u(E[x][R])):(u(E[x][R+1]),u(E[x+1][R+1]),u(E[x+1][R]))}}function h(M){const T=new I;for(let w=0;w<s.length;w+=3)T.x=s[w+0],T.y=s[w+1],T.z=s[w+2],T.normalize().multiplyScalar(M),s[w+0]=T.x,s[w+1]=T.y,s[w+2]=T.z}function c(){const M=new I;for(let T=0;T<s.length;T+=3){M.x=s[T+0],M.y=s[T+1],M.z=s[T+2];const w=g(M)/2/Math.PI+.5,A=p(M)/Math.PI+.5;r.push(w,1-A)}m(),d()}function d(){for(let M=0;M<r.length;M+=6){const T=r[M+0],w=r[M+2],A=r[M+4],_=Math.max(T,w,A),E=Math.min(T,w,A);_>.9&&E<.1&&(T<.2&&(r[M+0]+=1),w<.2&&(r[M+2]+=1),A<.2&&(r[M+4]+=1))}}function u(M){s.push(M.x,M.y,M.z)}function f(M,T){const w=M*3;T.x=e[w+0],T.y=e[w+1],T.z=e[w+2]}function m(){const M=new I,T=new I,w=new I,A=new I,_=new ve,E=new ve,x=new ve;for(let y=0,R=0;y<s.length;y+=9,R+=6){M.set(s[y+0],s[y+1],s[y+2]),T.set(s[y+3],s[y+4],s[y+5]),w.set(s[y+6],s[y+7],s[y+8]),_.set(r[R+0],r[R+1]),E.set(r[R+2],r[R+3]),x.set(r[R+4],r[R+5]),A.copy(M).add(T).add(w).divideScalar(3);const P=g(A);v(_,R+0,M,P),v(E,R+2,T,P),v(x,R+4,w,P)}}function v(M,T,w,A){A<0&&M.x===1&&(r[T]=M.x-1),w.x===0&&w.z===0&&(r[T]=A/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sc(e.vertices,e.indices,e.radius,e.detail)}}class ac extends sc{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ac(e.radius,e.detail)}}class tt extends zt{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};const s=e/2,r=t/2,o=Math.floor(i),l=Math.floor(n),h=o+1,c=l+1,d=e/o,u=t/l,f=[],m=[],v=[],g=[];for(let p=0;p<c;p++){const M=p*u-r;for(let T=0;T<h;T++){const w=T*d-s;m.push(w,-M,0),v.push(0,0,1),g.push(T/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){const T=M+h*p,w=M+h*(p+1),A=M+1+h*(p+1),_=M+1+h*p;f.push(T,w,_),f.push(w,A,_)}this.setIndex(f),this.setAttribute("position",new xt(m,3)),this.setAttribute("normal",new xt(v,3)),this.setAttribute("uv",new xt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tt(e.width,e.height,e.widthSegments,e.heightSegments)}}class oo extends zt{constructor(e=.5,t=1,i=32,n=1,s=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:n,thetaStart:s,thetaLength:r},i=Math.max(3,i),n=Math.max(1,n);const o=[],l=[],h=[],c=[];let d=e;const u=(t-e)/n,f=new I,m=new ve;for(let v=0;v<=n;v++){for(let g=0;g<=i;g++){const p=s+g/i*r;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),h.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,c.push(m.x,m.y)}d+=u}for(let v=0;v<n;v++){const g=v*(i+1);for(let p=0;p<i;p++){const M=p+g,T=M,w=M+i+1,A=M+i+2,_=M+1;o.push(T,w,_),o.push(w,A,_)}}this.setIndex(o),this.setAttribute("position",new xt(l,3)),this.setAttribute("normal",new xt(h,3)),this.setAttribute("uv",new xt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oo(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class rc extends zt{constructor(e=1,t=32,i=16,n=0,s=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:s,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(r+o,Math.PI);let h=0;const c=[],d=new I,u=new I,f=[],m=[],v=[],g=[];for(let p=0;p<=i;p++){const M=[],T=p/i,w=r+T*o,A=e*Math.cos(w),_=Math.sqrt(e*e-A*A);let E=0;p===0&&r===0?E=.5/t:p===i&&l===Math.PI&&(E=-.5/t);for(let x=0;x<=t;x++){const y=x/t,R=n+y*s;d.x=-_*Math.cos(R),d.y=A,d.z=_*Math.sin(R),m.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),g.push(y+E,1-T),M.push(h++)}c.push(M)}for(let p=0;p<i;p++)for(let M=0;M<t;M++){const T=c[p][M+1],w=c[p][M],A=c[p+1][M],_=c[p+1][M+1];(p!==0||r>0)&&f.push(T,w,_),(p!==i-1||l<Math.PI)&&f.push(w,A,_)}this.setIndex(f),this.setAttribute("position",new xt(m,3)),this.setAttribute("normal",new xt(v,3)),this.setAttribute("uv",new xt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Ys(a){const e={};for(const t in a){e[t]={};for(const i in a[t]){const n=a[t][i];if(od(n))n.isRenderTargetTexture?(ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone();else if(Array.isArray(n))if(od(n[0])){const s=[];for(let r=0,o=n.length;r<o;r++)s[r]=n[r].clone();e[t][i]=s}else e[t][i]=n.slice();else e[t][i]=n}}return e}function di(a){const e={};for(let t=0;t<a.length;t++){const i=Ys(a[t]);for(const n in i)e[n]=i[n]}return e}function od(a){return a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)}function bm(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function xf(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const Da={clone:Ys,merge:di};var ym=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_m=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Be extends ta{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ym,this.fragmentShader=_m,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ys(e.uniforms),this.uniformsGroups=bm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:"m4",value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const n=e.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=t[n.value]||null;break;case"c":this.uniforms[i].value=new Ne().setHex(n.value);break;case"v2":this.uniforms[i].value=new ve().fromArray(n.value);break;case"v3":this.uniforms[i].value=new I().fromArray(n.value);break;case"v4":this.uniforms[i].value=new It().fromArray(n.value);break;case"m3":this.uniforms[i].value=new Oe().fromArray(n.value);break;case"m4":this.uniforms[i].value=new mt().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class bf extends Be{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class wm extends ta{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Mm extends ta{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Qo={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(ld(a)||(this.files[a]=e))},get:function(a){if(this.enabled!==!1&&!ld(a))return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};function ld(a){try{const e=a.slice(a.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Sm{constructor(e,t,i){const n=this;let s=!1,r=0,o=0,l;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(c){o++,s===!1&&n.onStart!==void 0&&n.onStart(c,r,o),s=!0},this.itemEnd=function(c){r++,n.onProgress!==void 0&&n.onProgress(c,r,o),r===o&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(c){n.onError!==void 0&&n.onError(c)},this.resolveURL=function(c){return c=c.normalize("NFC"),l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,d){return h.push(c,d),this},this.removeHandler=function(c){const d=h.indexOf(c);return d!==-1&&h.splice(d,2),this},this.getHandler=function(c){for(let d=0,u=h.length;d<u;d+=2){const f=h[d],m=h[d+1];if(f.global&&(f.lastIndex=0),f.test(c))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Am=new Sm;class oc{constructor(e){this.manager=e!==void 0?e:Am,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(n,s){i.load(e,n,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}oc.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ts=new WeakMap;class Tm extends oc{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=Qo.get(`image:${e}`);if(r!==void 0){if(r.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0);else{let d=Ts.get(r);d===void 0&&(d=[],Ts.set(r,d)),d.push({onLoad:t,onError:n})}return r}const o=La("img");function l(){c(),t&&t(this);const d=Ts.get(this)||[];for(let u=0;u<d.length;u++){const f=d[u];f.onLoad&&f.onLoad(this)}Ts.delete(this),s.manager.itemEnd(e)}function h(d){c(),n&&n(d),Qo.remove(`image:${e}`);const u=Ts.get(this)||[];for(let f=0;f<u.length;f++){const m=u[f];m.onError&&m.onError(d)}Ts.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){o.removeEventListener("load",l,!1),o.removeEventListener("error",h,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Qo.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class Ba extends oc{constructor(e){super(e)}load(e,t,i,n){const s=new ei,r=new Tm(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,n),s}}const gr=new I,vr=new Qs,qi=new I;class yf extends Zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=Ji,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(gr,vr,qi),qi.x===1&&qi.y===1&&qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(gr,vr,qi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(gr,vr,qi),qi.x===1&&qi.y===1&&qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(gr,vr,qi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const En=new I,hd=new ve,cd=new ve;class Ri extends yf{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=wh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Co*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wh*2*Math.atan(Math.tan(Co*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){En.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(En.x,En.y).multiplyScalar(-e/En.z),En.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(En.x,En.y).multiplyScalar(-e/En.z)}getViewSize(e,t){return this.getViewBounds(e,hd,cd),t.subVectors(cd,hd)}setViewOffset(e,t,i,n,s,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Co*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,s=-.5*n;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,h=r.fullHeight;s+=r.offsetX*n/l,t-=r.offsetY*i/h,n*=r.width/l,i*=r.height/h}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class lc extends yf{constructor(e=-1,t=1,i=1,n=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let s=i-e,r=i+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,r=s+h*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Es=-90,Cs=1;class Em extends Zt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Ri(Es,Cs,e,t);n.layers=this.layers,this.add(n);const s=new Ri(Es,Cs,e,t);s.layers=this.layers,this.add(s);const r=new Ri(Es,Cs,e,t);r.layers=this.layers,this.add(r);const o=new Ri(Es,Cs,e,t);o.layers=this.layers,this.add(o);const l=new Ri(Es,Cs,e,t);l.layers=this.layers,this.add(l);const h=new Ri(Es,Cs,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,n,s,r,o,l]=t;for(const h of t)this.remove(h);if(e===Ji)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===so)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,r,o,l,h,c]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,n),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,n),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,2,n),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,n),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,n),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,n),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(d,u,f),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class Cm extends Ri{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Rm{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Pm.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function Pm(){this._document.hidden===!1&&this.reset()}class _f{static{_f.prototype.isMatrix2=!0}constructor(e,t,i,n){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,n){const s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=n,this}}function dd(a,e,t,i){const n=Im(i);switch(t){case nf:return a*e;case Zh:return a*e/n.components*n.byteLength;case Yh:return a*e/n.components*n.byteLength;case ns:return a*e*2/n.components*n.byteLength;case Kh:return a*e*2/n.components*n.byteLength;case sf:return a*e*3/n.components*n.byteLength;case Gi:return a*e*4/n.components*n.byteLength;case Jh:return a*e*4/n.components*n.byteLength;case Vr:case Wr:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Xr:case qr:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case ql:case jl:return Math.max(a,16)*Math.max(e,8)/4;case Xl:case $l:return Math.max(a,8)*Math.max(e,8)/2;case Zl:case Yl:case Jl:case Ql:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Kl:case eo:case eh:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case th:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case ih:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case nh:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case sh:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case ah:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case rh:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case oh:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case lh:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case hh:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case ch:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case dh:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case uh:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case fh:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case ph:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case mh:case gh:case vh:return Math.ceil(a/4)*Math.ceil(e/4)*16;case xh:case bh:return Math.ceil(a/4)*Math.ceil(e/4)*8;case to:case yh:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Im(a){switch(a){case Ii:case Ju:return{byteLength:1,components:1};case Pa:case Qu:case Si:return{byteLength:2,components:1};case $h:case jh:return{byteLength:2,components:4};case nn:case qh:case Hi:return{byteLength:4,components:1};case ef:case tf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Oh}}));typeof window<"u"&&(window.__THREE__?ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Oh);function wf(){let a=null,e=!1,t=null,i=null;function n(s,r){t(s,r),i=a.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&a!==null&&(i=a.requestAnimationFrame(n),e=!0)},stop:function(){a!==null&&a.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){a=s}}}function Lm(a){const e=new WeakMap;function t(o,l){const h=o.array,c=o.usage,d=h.byteLength,u=a.createBuffer();a.bindBuffer(l,u),a.bufferData(l,h,c),o.onUploadCallback();let f;if(h instanceof Float32Array)f=a.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)f=a.HALF_FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?f=a.HALF_FLOAT:f=a.UNSIGNED_SHORT;else if(h instanceof Int16Array)f=a.SHORT;else if(h instanceof Uint32Array)f=a.UNSIGNED_INT;else if(h instanceof Int32Array)f=a.INT;else if(h instanceof Int8Array)f=a.BYTE;else if(h instanceof Uint8Array)f=a.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)f=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:u,type:f,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,h){const c=l.array,d=l.updateRanges;if(a.bindBuffer(h,o),d.length===0)a.bufferSubData(h,0,c);else{d.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<d.length;f++){const m=d[u],v=d[f];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++u,d[u]=v)}d.length=u+1;for(let f=0,m=d.length;f<m;f++){const v=d[f];a.bufferSubData(h,v.start*c.BYTES_PER_ELEMENT,c,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(a.deleteBuffer(l.buffer),e.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const c=e.get(o);(!c||c.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const h=e.get(o);if(h===void 0)e.set(o,t(o,l));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,o,l),h.version=o.version}}return{get:n,remove:s,update:r}}var Fm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Dm=`#ifdef USE_ALPHAHASH
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
#endif`,Um=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,km=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Nm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Om=`#ifdef USE_AOMAP
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
#endif`,Bm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hm=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Gm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qm=`#ifdef USE_IRIDESCENCE
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
#endif`,$m=`#ifdef USE_BUMPMAP
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
#endif`,jm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Zm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ym=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Km=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Qm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,e0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,t0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,i0=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,n0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,s0=`vec3 transformedNormal = objectNormal;
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
#endif`,a0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,r0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,o0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,l0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,h0="gl_FragColor = linearToOutputTexel( gl_FragColor );",c0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,d0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,u0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,f0=`#ifdef USE_ENVMAP
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
#endif`,p0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,m0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,g0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,v0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,x0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,b0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,y0=`#ifdef USE_GRADIENTMAP
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
}`,_0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,w0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,M0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,S0=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#endif
#include <lightprobes_pars_fragment>`,A0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
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
#endif`,T0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,E0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,C0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,R0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,P0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,I0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,L0=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,F0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,D0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,U0=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,k0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,z0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,N0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,O0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,B0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,H0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,G0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,V0=`#if defined( USE_POINTS_UV )
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
#endif`,W0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,X0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,q0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,j0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Z0=`#ifdef USE_MORPHTARGETS
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
#endif`,Y0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,K0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,J0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Q0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ig=`#ifdef USE_NORMALMAP
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
#endif`,ng=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ag=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,og=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,hg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ug=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,gg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,xg=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,bg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yg=`#ifdef USE_SKINNING
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
#endif`,_g=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wg=`#ifdef USE_SKINNING
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
#endif`,Mg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ag=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Tg=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Eg=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Cg=`#ifdef USE_TRANSMISSION
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
#endif`,Rg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ig=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Fg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Dg=`uniform sampler2D t2D;
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
}`,Ug=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ng=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Og=`#include <common>
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
}`,Bg=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Hg=`#define DISTANCE
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
}`,Gg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xg=`uniform float scale;
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
}`,qg=`uniform vec3 diffuse;
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
}`,$g=`#include <common>
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
}`,jg=`uniform vec3 diffuse;
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
}`,Zg=`#define LAMBERT
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
}`,Yg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Kg=`#define MATCAP
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
}`,Jg=`#define MATCAP
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
}`,Qg=`#define NORMAL
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
}`,ev=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,tv=`#define PHONG
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
}`,iv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,nv=`#define STANDARD
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
}`,sv=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,av=`#define TOON
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
}`,rv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,ov=`uniform float size;
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
}`,lv=`uniform vec3 diffuse;
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
}`,hv=`#include <common>
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
}`,cv=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,dv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,uv=`uniform vec3 diffuse;
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
}`,We={alphahash_fragment:Fm,alphahash_pars_fragment:Dm,alphamap_fragment:Um,alphamap_pars_fragment:km,alphatest_fragment:zm,alphatest_pars_fragment:Nm,aomap_fragment:Om,aomap_pars_fragment:Bm,batching_pars_vertex:Hm,batching_vertex:Gm,begin_vertex:Vm,beginnormal_vertex:Wm,bsdfs:Xm,iridescence_fragment:qm,bumpmap_pars_fragment:$m,clipping_planes_fragment:jm,clipping_planes_pars_fragment:Zm,clipping_planes_pars_vertex:Ym,clipping_planes_vertex:Km,color_fragment:Jm,color_pars_fragment:Qm,color_pars_vertex:e0,color_vertex:t0,common:i0,cube_uv_reflection_fragment:n0,defaultnormal_vertex:s0,displacementmap_pars_vertex:a0,displacementmap_vertex:r0,emissivemap_fragment:o0,emissivemap_pars_fragment:l0,colorspace_fragment:h0,colorspace_pars_fragment:c0,envmap_fragment:d0,envmap_common_pars_fragment:u0,envmap_pars_fragment:f0,envmap_pars_vertex:p0,envmap_physical_pars_fragment:A0,envmap_vertex:m0,fog_vertex:g0,fog_pars_vertex:v0,fog_fragment:x0,fog_pars_fragment:b0,gradientmap_pars_fragment:y0,lightmap_pars_fragment:_0,lights_lambert_fragment:w0,lights_lambert_pars_fragment:M0,lights_pars_begin:S0,lights_toon_fragment:T0,lights_toon_pars_fragment:E0,lights_phong_fragment:C0,lights_phong_pars_fragment:R0,lights_physical_fragment:P0,lights_physical_pars_fragment:I0,lights_fragment_begin:L0,lights_fragment_maps:F0,lights_fragment_end:D0,lightprobes_pars_fragment:U0,logdepthbuf_fragment:k0,logdepthbuf_pars_fragment:z0,logdepthbuf_pars_vertex:N0,logdepthbuf_vertex:O0,map_fragment:B0,map_pars_fragment:H0,map_particle_fragment:G0,map_particle_pars_fragment:V0,metalnessmap_fragment:W0,metalnessmap_pars_fragment:X0,morphinstance_vertex:q0,morphcolor_vertex:$0,morphnormal_vertex:j0,morphtarget_pars_vertex:Z0,morphtarget_vertex:Y0,normal_fragment_begin:K0,normal_fragment_maps:J0,normal_pars_fragment:Q0,normal_pars_vertex:eg,normal_vertex:tg,normalmap_pars_fragment:ig,clearcoat_normal_fragment_begin:ng,clearcoat_normal_fragment_maps:sg,clearcoat_pars_fragment:ag,iridescence_pars_fragment:rg,opaque_fragment:og,packing:lg,premultiplied_alpha_fragment:hg,project_vertex:cg,dithering_fragment:dg,dithering_pars_fragment:ug,roughnessmap_fragment:fg,roughnessmap_pars_fragment:pg,shadowmap_pars_fragment:mg,shadowmap_pars_vertex:gg,shadowmap_vertex:vg,shadowmask_pars_fragment:xg,skinbase_vertex:bg,skinning_pars_vertex:yg,skinning_vertex:_g,skinnormal_vertex:wg,specularmap_fragment:Mg,specularmap_pars_fragment:Sg,tonemapping_fragment:Ag,tonemapping_pars_fragment:Tg,transmission_fragment:Eg,transmission_pars_fragment:Cg,uv_pars_fragment:Rg,uv_pars_vertex:Pg,uv_vertex:Ig,worldpos_vertex:Lg,background_vert:Fg,background_frag:Dg,backgroundCube_vert:Ug,backgroundCube_frag:kg,cube_vert:zg,cube_frag:Ng,depth_vert:Og,depth_frag:Bg,distance_vert:Hg,distance_frag:Gg,equirect_vert:Vg,equirect_frag:Wg,linedashed_vert:Xg,linedashed_frag:qg,meshbasic_vert:$g,meshbasic_frag:jg,meshlambert_vert:Zg,meshlambert_frag:Yg,meshmatcap_vert:Kg,meshmatcap_frag:Jg,meshnormal_vert:Qg,meshnormal_frag:ev,meshphong_vert:tv,meshphong_frag:iv,meshphysical_vert:nv,meshphysical_frag:sv,meshtoon_vert:av,meshtoon_frag:rv,points_vert:ov,points_frag:lv,shadow_vert:hv,shadow_frag:cv,sprite_vert:dv,sprite_frag:uv},fe={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},Yi={basic:{uniforms:di([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:di([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Ne(0)},envMapIntensity:{value:1}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:di([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:di([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:di([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Ne(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:di([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:di([fe.points,fe.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:di([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:di([fe.common,fe.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:di([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:di([fe.sprite,fe.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distance:{uniforms:di([fe.common,fe.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distance_vert,fragmentShader:We.distance_frag},shadow:{uniforms:di([fe.lights,fe.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};Yi.physical={uniforms:di([Yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const xr={r:0,b:0,g:0},fv=new mt,Mf=new Oe;Mf.set(-1,0,0,0,1,0,0,0,1);function pv(a,e,t,i,n,s){const r=new Ne(0);let o=n===!0?0:1,l,h,c=null,d=0,u=null;function f(M){let T=M.isScene===!0?M.background:null;if(T&&T.isTexture){const w=M.backgroundBlurriness>0;T=e.get(T,w)}return T}function m(M){let T=!1;const w=f(M);w===null?g(r,o):w&&w.isColor&&(g(w,1),T=!0);const A=a.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(a.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function v(M,T){const w=f(T);w&&(w.isCubeTexture||w.mapping===go)?(h===void 0&&(h=new Lt(new sn(1,1,1),new Be({name:"BackgroundCubeMaterial",uniforms:Ys(Yi.backgroundCube.uniforms),vertexShader:Yi.backgroundCube.vertexShader,fragmentShader:Yi.backgroundCube.fragmentShader,side:vi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,_,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=w,h.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(fv.makeRotationFromEuler(T.backgroundRotation)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Mf),h.material.toneMapped=Ze.getTransfer(w.colorSpace)!==at,(c!==w||d!==w.version||u!==a.toneMapping)&&(h.material.needsUpdate=!0,c=w,d=w.version,u=a.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new Lt(new tt(2,2),new Be({name:"BackgroundMaterial",uniforms:Ys(Yi.background.uniforms),vertexShader:Yi.background.vertexShader,fragmentShader:Yi.background.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=Ze.getTransfer(w.colorSpace)!==at,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(c!==w||d!==w.version||u!==a.toneMapping)&&(l.material.needsUpdate=!0,c=w,d=w.version,u=a.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function g(M,T){M.getRGB(xr,xf(a)),t.buffers.color.setClear(xr.r,xr.g,xr.b,T,s)}function p(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(M,T=1){r.set(M),o=T,g(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,g(r,o)},render:m,addToRenderList:v,dispose:p}}function mv(a,e){const t=a.getParameter(a.MAX_VERTEX_ATTRIBS),i={},n=u(null);let s=n,r=!1;function o(P,F,W,$,N){let V=!1;const k=d(P,$,W,F);s!==k&&(s=k,h(s.object)),V=f(P,$,W,N),V&&m(P,$,W,N),N!==null&&e.update(N,a.ELEMENT_ARRAY_BUFFER),(V||r)&&(r=!1,w(P,F,W,$),N!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return a.createVertexArray()}function h(P){return a.bindVertexArray(P)}function c(P){return a.deleteVertexArray(P)}function d(P,F,W,$){const N=$.wireframe===!0;let V=i[F.id];V===void 0&&(V={},i[F.id]=V);const k=P.isInstancedMesh===!0?P.id:0;let Y=V[k];Y===void 0&&(Y={},V[k]=Y);let ee=Y[W.id];ee===void 0&&(ee={},Y[W.id]=ee);let ae=ee[N];return ae===void 0&&(ae=u(l()),ee[N]=ae),ae}function u(P){const F=[],W=[],$=[];for(let N=0;N<t;N++)F[N]=0,W[N]=0,$[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:W,attributeDivisors:$,object:P,attributes:{},index:null}}function f(P,F,W,$){const N=s.attributes,V=F.attributes;let k=0;const Y=W.getAttributes();for(const ee in Y)if(Y[ee].location>=0){const de=N[ee];let xe=V[ee];if(xe===void 0&&(ee==="instanceMatrix"&&P.instanceMatrix&&(xe=P.instanceMatrix),ee==="instanceColor"&&P.instanceColor&&(xe=P.instanceColor)),de===void 0||de.attribute!==xe||xe&&de.data!==xe.data)return!0;k++}return s.attributesNum!==k||s.index!==$}function m(P,F,W,$){const N={},V=F.attributes;let k=0;const Y=W.getAttributes();for(const ee in Y)if(Y[ee].location>=0){let de=V[ee];de===void 0&&(ee==="instanceMatrix"&&P.instanceMatrix&&(de=P.instanceMatrix),ee==="instanceColor"&&P.instanceColor&&(de=P.instanceColor));const xe={};xe.attribute=de,de&&de.data&&(xe.data=de.data),N[ee]=xe,k++}s.attributes=N,s.attributesNum=k,s.index=$}function v(){const P=s.newAttributes;for(let F=0,W=P.length;F<W;F++)P[F]=0}function g(P){p(P,0)}function p(P,F){const W=s.newAttributes,$=s.enabledAttributes,N=s.attributeDivisors;W[P]=1,$[P]===0&&(a.enableVertexAttribArray(P),$[P]=1),N[P]!==F&&(a.vertexAttribDivisor(P,F),N[P]=F)}function M(){const P=s.newAttributes,F=s.enabledAttributes;for(let W=0,$=F.length;W<$;W++)F[W]!==P[W]&&(a.disableVertexAttribArray(W),F[W]=0)}function T(P,F,W,$,N,V,k){k===!0?a.vertexAttribIPointer(P,F,W,N,V):a.vertexAttribPointer(P,F,W,$,N,V)}function w(P,F,W,$){v();const N=$.attributes,V=W.getAttributes(),k=F.defaultAttributeValues;for(const Y in V){const ee=V[Y];if(ee.location>=0){let ae=N[Y];if(ae===void 0&&(Y==="instanceMatrix"&&P.instanceMatrix&&(ae=P.instanceMatrix),Y==="instanceColor"&&P.instanceColor&&(ae=P.instanceColor)),ae!==void 0){const de=ae.normalized,xe=ae.itemSize,Ke=e.get(ae);if(Ke===void 0)continue;const Tt=Ke.buffer,it=Ke.type,K=Ke.bytesPerElement,re=it===a.INT||it===a.UNSIGNED_INT||ae.gpuType===qh;if(ae.isInterleavedBufferAttribute){const te=ae.data,ze=te.stride,He=ae.offset;if(te.isInstancedInterleavedBuffer){for(let De=0;De<ee.locationSize;De++)p(ee.location+De,te.meshPerAttribute);P.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let De=0;De<ee.locationSize;De++)g(ee.location+De);a.bindBuffer(a.ARRAY_BUFFER,Tt);for(let De=0;De<ee.locationSize;De++)T(ee.location+De,xe/ee.locationSize,it,de,ze*K,(He+xe/ee.locationSize*De)*K,re)}else{if(ae.isInstancedBufferAttribute){for(let te=0;te<ee.locationSize;te++)p(ee.location+te,ae.meshPerAttribute);P.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let te=0;te<ee.locationSize;te++)g(ee.location+te);a.bindBuffer(a.ARRAY_BUFFER,Tt);for(let te=0;te<ee.locationSize;te++)T(ee.location+te,xe/ee.locationSize,it,de,xe*K,xe/ee.locationSize*te*K,re)}}else if(k!==void 0){const de=k[Y];if(de!==void 0)switch(de.length){case 2:a.vertexAttrib2fv(ee.location,de);break;case 3:a.vertexAttrib3fv(ee.location,de);break;case 4:a.vertexAttrib4fv(ee.location,de);break;default:a.vertexAttrib1fv(ee.location,de)}}}}M()}function A(){y();for(const P in i){const F=i[P];for(const W in F){const $=F[W];for(const N in $){const V=$[N];for(const k in V)c(V[k].object),delete V[k];delete $[N]}}delete i[P]}}function _(P){if(i[P.id]===void 0)return;const F=i[P.id];for(const W in F){const $=F[W];for(const N in $){const V=$[N];for(const k in V)c(V[k].object),delete V[k];delete $[N]}}delete i[P.id]}function E(P){for(const F in i){const W=i[F];for(const $ in W){const N=W[$];if(N[P.id]===void 0)continue;const V=N[P.id];for(const k in V)c(V[k].object),delete V[k];delete N[P.id]}}}function x(P){for(const F in i){const W=i[F],$=P.isInstancedMesh===!0?P.id:0,N=W[$];if(N!==void 0){for(const V in N){const k=N[V];for(const Y in k)c(k[Y].object),delete k[Y];delete N[V]}delete W[$],Object.keys(W).length===0&&delete i[F]}}}function y(){R(),r=!0,s!==n&&(s=n,h(s.object))}function R(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:y,resetDefaultState:R,dispose:A,releaseStatesOfGeometry:_,releaseStatesOfObject:x,releaseStatesOfProgram:E,initAttributes:v,enableAttribute:g,disableUnusedAttributes:M}}function gv(a,e,t){let i;function n(l){i=l}function s(l,h){a.drawArrays(i,l,h),t.update(h,i,1)}function r(l,h,c){c!==0&&(a.drawArraysInstanced(i,l,h,c),t.update(h,i,c))}function o(l,h,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,c);let u=0;for(let f=0;f<c;f++)u+=h[f];t.update(u,i,1)}this.setMode=n,this.render=s,this.renderInstances=r,this.renderMultiDraw=o}function vv(a,e,t,i){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");n=a.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(E){return!(E!==Gi&&i.convert(E)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){const x=E===Si&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Ii&&i.convert(E)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Hi&&!x)}function l(E){if(E==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const c=l(h);c!==h&&(ke("WebGLRenderer:",h,"not supported, using",c,"instead."),h=c);const d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&ke("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),m=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=a.getParameter(a.MAX_TEXTURE_SIZE),g=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),p=a.getParameter(a.MAX_VERTEX_ATTRIBS),M=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),T=a.getParameter(a.MAX_VARYING_VECTORS),w=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),A=a.getParameter(a.MAX_SAMPLES),_=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:M,maxVaryings:T,maxFragmentUniforms:w,maxSamples:A,samples:_}}function xv(a){const e=this;let t=null,i=0,n=!1,s=!1;const r=new jn,o=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||i!==0||n;return n=u,i=d.length,f},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){t=c(d,u,0)},this.setState=function(d,u,f){const m=d.clippingPlanes,v=d.clipIntersection,g=d.clipShadows,p=a.get(d);if(!n||m===null||m.length===0||s&&!g)s?c(null):h();else{const M=s?0:i,T=M*4;let w=p.clippingState||null;l.value=w,w=c(m,u,T,f);for(let A=0;A!==T;++A)w[A]=t[A];p.clippingState=w,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function h(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,u,f,m){const v=d!==null?d.length:0;let g=null;if(v!==0){if(g=l.value,m!==!0||g===null){const p=f+v*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(g===null||g.length<p)&&(g=new Float32Array(p));for(let T=0,w=f;T!==v;++T,w+=4)r.copy(d[T]).applyMatrix4(M,o),r.normal.toArray(g,w),g[w+3]=r.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}const In=4,ud=[.125,.215,.35,.446,.526,.582],Kn=20,bv=256,pa=new lc,fd=new Ne;let el=null,tl=0,il=0,nl=!1;const yv=new I;class pd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,n=100,s={}){const{size:r=256,position:o=yv}=s;el=this._renderer.getRenderTarget(),tl=this._renderer.getActiveCubeFace(),il=this._renderer.getActiveMipmapLevel(),nl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,n,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(el,tl,il),this._renderer.xr.enabled=nl,e.scissorTest=!1,Rs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===is||e.mapping===$s?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),el=this._renderer.getRenderTarget(),tl=this._renderer.getActiveCubeFace(),il=this._renderer.getActiveMipmapLevel(),nl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:li,minFilter:li,generateMipmaps:!1,type:Si,format:Gi,colorSpace:io,depthBuffer:!1},n=md(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=md(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=_v(s)),this._blurMaterial=Mv(s,e,t),this._ggxMaterial=wv(s,e,t)}return n}_compileMaterial(e){const t=new Lt(new zt,e);this._renderer.compile(t,pa)}_sceneToCubeUV(e,t,i,n,s){const l=new Ri(90,1,t,i),h=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(fd),d.toneMapping=tn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(n),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Lt(new sn,new Fi({name:"PMREM.Background",side:vi,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,g=v.material;let p=!1;const M=e.background;M?M.isColor&&(g.color.copy(M),e.background=null,p=!0):(g.color.copy(fd),p=!0);for(let T=0;T<6;T++){const w=T%3;w===0?(l.up.set(0,h[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+c[T],s.y,s.z)):w===1?(l.up.set(0,0,h[T]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+c[T],s.z)):(l.up.set(0,h[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+c[T]));const A=this._cubeSize;Rs(n,w*A,T>2?A:0,A,A),d.setRenderTarget(n),p&&d.render(v,l),d.render(e,l)}d.toneMapping=f,d.autoClear=u,e.background=M}_textureToCubeUV(e,t){const i=this._renderer,n=e.mapping===is||e.mapping===$s;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=vd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gd());const s=n?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Rs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(r,pa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const n=this._lodMeshes.length;for(let s=1;s<n;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const n=this._renderer,s=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[i];o.material=r;const l=r.uniforms,h=i/(this._lodMeshes.length-1),c=t/(this._lodMeshes.length-1),d=Math.sqrt(h*h-c*c),u=0+h*1.25,f=d*u,{_lodMax:m}=this,v=this._sizeLods[i],g=3*v*(i>m-In?i-m+In:0),p=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=m-t,Rs(s,g,p,3*v,2*v),n.setRenderTarget(s),n.render(o,pa),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=m-i,Rs(e,g,p,3*v,2*v),n.setRenderTarget(e),n.render(o,pa)}_blur(e,t,i,n,s){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,i,n,"latitudinal",s),this._halfBlur(r,e,i,i,n,"longitudinal",s)}_halfBlur(e,t,i,n,s,r,o){const l=this._renderer,h=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&Je("blur direction must be either latitudinal or longitudinal!");const c=3,d=this._lodMeshes[n];d.material=h;const u=h.uniforms,f=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Kn-1),v=s/m,g=isFinite(s)?1+Math.floor(c*v):Kn;g>Kn&&ke(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Kn}`);const p=[];let M=0;for(let E=0;E<Kn;++E){const x=E/v,y=Math.exp(-x*x/2);p.push(y),E===0?M+=y:E<g&&(M+=2*y)}for(let E=0;E<p.length;E++)p[E]=p[E]/M;u.envMap.value=e.texture,u.samples.value=g,u.weights.value=p,u.latitudinal.value=r==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:T}=this;u.dTheta.value=m,u.mipInt.value=T-i;const w=this._sizeLods[n],A=3*w*(n>T-In?n-T+In:0),_=4*(this._cubeSize-w);Rs(t,A,_,3*w,2*w),l.setRenderTarget(t),l.render(d,pa)}}function _v(a){const e=[],t=[],i=[];let n=a;const s=a-In+1+ud.length;for(let r=0;r<s;r++){const o=Math.pow(2,n);e.push(o);let l=1/o;r>a-In?l=ud[r-a+In-1]:r===0&&(l=0),t.push(l);const h=1/(o-2),c=-h,d=1+h,u=[c,c,d,c,d,d,c,c,d,d,c,d],f=6,m=6,v=3,g=2,p=1,M=new Float32Array(v*m*f),T=new Float32Array(g*m*f),w=new Float32Array(p*m*f);for(let _=0;_<f;_++){const E=_%3*2/3-1,x=_>2?0:-1,y=[E,x,0,E+2/3,x,0,E+2/3,x+1,0,E,x,0,E+2/3,x+1,0,E,x+1,0];M.set(y,v*m*_),T.set(u,g*m*_);const R=[_,_,_,_,_,_];w.set(R,p*m*_)}const A=new zt;A.setAttribute("position",new St(M,v)),A.setAttribute("uv",new St(T,g)),A.setAttribute("faceIndex",new St(w,p)),i.push(new Lt(A,null)),n>In&&n--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function md(a,e,t){const i=new xi(a,e,t);return i.texture.mapping=go,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Rs(a,e,t,i,n){a.viewport.set(e,t,i,n),a.scissor.set(e,t,i,n)}function wv(a,e,t){return new Be({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:bv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:bo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function Mv(a,e,t){const i=new Float32Array(Kn),n=new I(0,1,0);return new Be({name:"SphericalGaussianBlur",defines:{n:Kn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:bo(),fragmentShader:`

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
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function gd(){return new Be({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bo(),fragmentShader:`

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
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function vd(){return new Be({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function bo(){return`

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
	`}class Sf extends xi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new gf(n),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new sn(5,5,5),s=new Be({name:"CubemapFromEquirect",uniforms:Ys(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:vi,blending:Qi});s.uniforms.tEquirect.value=t;const r=new Lt(n,s),o=t.minFilter;return t.minFilter===Qn&&(t.minFilter=li),new Em(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t=!0,i=!0,n=!0){const s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,i,n);e.setRenderTarget(s)}}function Sv(a){let e=new WeakMap,t=new WeakMap,i=null;function n(u,f=!1){return u==null?null:f?r(u):s(u)}function s(u){if(u&&u.isTexture){const f=u.mapping;if(f===Ao||f===To)if(e.has(u)){const m=e.get(u).texture;return o(m,u.mapping)}else{const m=u.image;if(m&&m.height>0){const v=new Sf(m.height);return v.fromEquirectangularTexture(a,u),e.set(u,v),u.addEventListener("dispose",h),o(v.texture,u.mapping)}else return null}}return u}function r(u){if(u&&u.isTexture){const f=u.mapping,m=f===Ao||f===To,v=f===is||f===$s;if(m||v){let g=t.get(u);const p=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new pd(a)),g=m?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),g.texture;if(g!==void 0)return g.texture;{const M=u.image;return m&&M&&M.height>0||v&&M&&l(M)?(i===null&&(i=new pd(a)),g=m?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),u.addEventListener("dispose",c),g.texture):null}}}return u}function o(u,f){return f===Ao?u.mapping=is:f===To&&(u.mapping=$s),u}function l(u){let f=0;const m=6;for(let v=0;v<m;v++)u[v]!==void 0&&f++;return f===m}function h(u){const f=u.target;f.removeEventListener("dispose",h);const m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function c(u){const f=u.target;f.removeEventListener("dispose",c);const m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:d}}function Av(a){const e={};function t(i){if(e[i]!==void 0)return e[i];const n=a.getExtension(i);return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const n=t(i);return n===null&&Gs("WebGLRenderer: "+i+" extension not supported."),n}}}function Tv(a,e,t,i){const n={},s=new WeakMap;function r(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const m in u.attributes)e.remove(u.attributes[m]);u.removeEventListener("dispose",r),delete n[u.id];const f=s.get(u);f&&(e.remove(f),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return n[u.id]===!0||(u.addEventListener("dispose",r),n[u.id]=!0,t.memory.geometries++),u}function l(d){const u=d.attributes;for(const f in u)e.update(u[f],a.ARRAY_BUFFER)}function h(d){const u=[],f=d.index,m=d.attributes.position;let v=0;if(m===void 0)return;if(f!==null){const M=f.array;v=f.version;for(let T=0,w=M.length;T<w;T+=3){const A=M[T+0],_=M[T+1],E=M[T+2];u.push(A,_,_,E,E,A)}}else{const M=m.array;v=m.version;for(let T=0,w=M.length/3-1;T<w;T+=3){const A=T+0,_=T+1,E=T+2;u.push(A,_,_,E,E,A)}}const g=new(m.count>=65535?cf:hf)(u,1);g.version=v;const p=s.get(d);p&&e.remove(p),s.set(d,g)}function c(d){const u=s.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&h(d)}else h(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:c}}function Ev(a,e,t){let i;function n(d){i=d}let s,r;function o(d){s=d.type,r=d.bytesPerElement}function l(d,u){a.drawElements(i,u,s,d*r),t.update(u,i,1)}function h(d,u,f){f!==0&&(a.drawElementsInstanced(i,u,s,d*r,f),t.update(u,i,f))}function c(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,d,0,f);let v=0;for(let g=0;g<f;g++)v+=u[g];t.update(v,i,1)}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=h,this.renderMultiDraw=c}function Cv(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,r,o){switch(t.calls++,r){case a.TRIANGLES:t.triangles+=o*(s/3);break;case a.LINES:t.lines+=o*(s/2);break;case a.LINE_STRIP:t.lines+=o*(s-1);break;case a.LINE_LOOP:t.lines+=o*s;break;case a.POINTS:t.points+=o*s;break;default:Je("WebGLInfo: Unknown draw mode:",r);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function Rv(a,e,t){const i=new WeakMap,n=new It;function s(r,o,l){const h=r.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=c!==void 0?c.length:0;let u=i.get(o);if(u===void 0||u.count!==d){let R=function(){x.dispose(),i.delete(o),o.removeEventListener("dispose",R)};var f=R;u!==void 0&&u.texture.dispose();const m=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let w=0;m===!0&&(w=1),v===!0&&(w=2),g===!0&&(w=3);let A=o.attributes.position.count*w,_=1;A>e.maxTextureSize&&(_=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const E=new Float32Array(A*_*4*d),x=new rf(E,A,_,d);x.type=Hi,x.needsUpdate=!0;const y=w*4;for(let P=0;P<d;P++){const F=p[P],W=M[P],$=T[P],N=A*_*4*P;for(let V=0;V<F.count;V++){const k=V*y;m===!0&&(n.fromBufferAttribute(F,V),E[N+k+0]=n.x,E[N+k+1]=n.y,E[N+k+2]=n.z,E[N+k+3]=0),v===!0&&(n.fromBufferAttribute(W,V),E[N+k+4]=n.x,E[N+k+5]=n.y,E[N+k+6]=n.z,E[N+k+7]=0),g===!0&&(n.fromBufferAttribute($,V),E[N+k+8]=n.x,E[N+k+9]=n.y,E[N+k+10]=n.z,E[N+k+11]=$.itemSize===4?n.w:1)}}u={count:d,texture:x,size:new ve(A,_)},i.set(o,u),o.addEventListener("dispose",R)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(a,"morphTexture",r.morphTexture,t);else{let m=0;for(let g=0;g<h.length;g++)m+=h[g];const v=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(a,"morphTargetBaseInfluence",v),l.getUniforms().setValue(a,"morphTargetInfluences",h)}l.getUniforms().setValue(a,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(a,"morphTargetsTextureSize",u.size)}return{update:s}}function Pv(a,e,t,i,n){let s=new WeakMap;function r(h){const c=n.render.frame,d=h.geometry,u=e.get(h,d);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),h.isInstancedMesh&&(h.hasEventListener("dispose",l)===!1&&h.addEventListener("dispose",l),s.get(h)!==c&&(t.update(h.instanceMatrix,a.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,a.ARRAY_BUFFER),s.set(h,c))),h.isSkinnedMesh){const f=h.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function l(h){const c=h.target;c.removeEventListener("dispose",l),i.releaseStatesOfObject(c),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Iv={[Bh]:"LINEAR_TONE_MAPPING",[Hh]:"REINHARD_TONE_MAPPING",[Gh]:"CINEON_TONE_MAPPING",[mo]:"ACES_FILMIC_TONE_MAPPING",[Wh]:"AGX_TONE_MAPPING",[Xh]:"NEUTRAL_TONE_MAPPING",[Vh]:"CUSTOM_TONE_MAPPING"};function Lv(a,e,t,i,n,s){const r=new xi(e,t,{type:a,depthBuffer:n,stencilBuffer:s,samples:i?4:0,depthTexture:n?new Zs(e,t):void 0}),o=new xi(e,t,{type:Si,depthBuffer:!1,stencilBuffer:!1}),l=new zt;l.setAttribute("position",new xt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new xt([0,2,0,0,2,0],2));const h=new bf({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Lt(l,h),d=new lc(-1,1,1,-1,0,1);let u=null,f=null,m=!1,v,g=null,p=[],M=!1;this.setSize=function(T,w){r.setSize(T,w),o.setSize(T,w);for(let A=0;A<p.length;A++){const _=p[A];_.setSize&&_.setSize(T,w)}},this.setEffects=function(T){p=T,M=p.length>0&&p[0].isRenderPass===!0;const w=r.width,A=r.height;for(let _=0;_<p.length;_++){const E=p[_];E.setSize&&E.setSize(w,A)}},this.begin=function(T,w){if(m||T.toneMapping===tn&&p.length===0)return!1;if(g=w,w!==null){const A=w.width,_=w.height;(r.width!==A||r.height!==_)&&this.setSize(A,_)}return M===!1&&T.setRenderTarget(r),v=T.toneMapping,T.toneMapping=tn,!0},this.hasRenderPass=function(){return M},this.end=function(T,w){T.toneMapping=v,m=!0;let A=r,_=o;for(let E=0;E<p.length;E++){const x=p[E];if(x.enabled!==!1&&(x.render(T,_,A,w),x.needsSwap!==!1)){const y=A;A=_,_=y}}if(u!==T.outputColorSpace||f!==T.toneMapping){u=T.outputColorSpace,f=T.toneMapping,h.defines={},Ze.getTransfer(u)===at&&(h.defines.SRGB_TRANSFER="");const E=Iv[f];E&&(h.defines[E]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=A.texture,T.setRenderTarget(g),T.render(c,d),g=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),o.dispose(),l.dispose(),h.dispose()}}const Af=new ei,Sh=new Zs(1,1),Tf=new rf,Ef=new Jp,Cf=new gf,xd=[],bd=[],yd=new Float32Array(16),_d=new Float32Array(9),wd=new Float32Array(4);function ia(a,e,t){const i=a[0];if(i<=0||i>0)return a;const n=e*t;let s=xd[n];if(s===void 0&&(s=new Float32Array(n),xd[n]=s),e!==0){i.toArray(s,0);for(let r=1,o=0;r!==e;++r)o+=t,a[r].toArray(s,o)}return s}function Wt(a,e){if(a.length!==e.length)return!1;for(let t=0,i=a.length;t<i;t++)if(a[t]!==e[t])return!1;return!0}function Xt(a,e){for(let t=0,i=e.length;t<i;t++)a[t]=e[t]}function yo(a,e){let t=bd[e];t===void 0&&(t=new Int32Array(e),bd[e]=t);for(let i=0;i!==e;++i)t[i]=a.allocateTextureUnit();return t}function Fv(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function Dv(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;a.uniform2fv(this.addr,e),Xt(t,e)}}function Uv(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Wt(t,e))return;a.uniform3fv(this.addr,e),Xt(t,e)}}function kv(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;a.uniform4fv(this.addr,e),Xt(t,e)}}function zv(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(Wt(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,i))return;wd.set(i),a.uniformMatrix2fv(this.addr,!1,wd),Xt(t,i)}}function Nv(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(Wt(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,i))return;_d.set(i),a.uniformMatrix3fv(this.addr,!1,_d),Xt(t,i)}}function Ov(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(Wt(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,i))return;yd.set(i),a.uniformMatrix4fv(this.addr,!1,yd),Xt(t,i)}}function Bv(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function Hv(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;a.uniform2iv(this.addr,e),Xt(t,e)}}function Gv(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;a.uniform3iv(this.addr,e),Xt(t,e)}}function Vv(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;a.uniform4iv(this.addr,e),Xt(t,e)}}function Wv(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function Xv(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;a.uniform2uiv(this.addr,e),Xt(t,e)}}function qv(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;a.uniform3uiv(this.addr,e),Xt(t,e)}}function $v(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;a.uniform4uiv(this.addr,e),Xt(t,e)}}function jv(a,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(a.uniform1i(this.addr,n),i[0]=n);let s;this.type===a.SAMPLER_2D_SHADOW?(Sh.compareFunction=t.isReversedDepthBuffer()?ec:Qh,s=Sh):s=Af,t.setTexture2D(e||s,n)}function Zv(a,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(a.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||Ef,n)}function Yv(a,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(a.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||Cf,n)}function Kv(a,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(a.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||Tf,n)}function Jv(a){switch(a){case 5126:return Fv;case 35664:return Dv;case 35665:return Uv;case 35666:return kv;case 35674:return zv;case 35675:return Nv;case 35676:return Ov;case 5124:case 35670:return Bv;case 35667:case 35671:return Hv;case 35668:case 35672:return Gv;case 35669:case 35673:return Vv;case 5125:return Wv;case 36294:return Xv;case 36295:return qv;case 36296:return $v;case 35678:case 36198:case 36298:case 36306:case 35682:return jv;case 35679:case 36299:case 36307:return Zv;case 35680:case 36300:case 36308:case 36293:return Yv;case 36289:case 36303:case 36311:case 36292:return Kv}}function Qv(a,e){a.uniform1fv(this.addr,e)}function ex(a,e){const t=ia(e,this.size,2);a.uniform2fv(this.addr,t)}function tx(a,e){const t=ia(e,this.size,3);a.uniform3fv(this.addr,t)}function ix(a,e){const t=ia(e,this.size,4);a.uniform4fv(this.addr,t)}function nx(a,e){const t=ia(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function sx(a,e){const t=ia(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function ax(a,e){const t=ia(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function rx(a,e){a.uniform1iv(this.addr,e)}function ox(a,e){a.uniform2iv(this.addr,e)}function lx(a,e){a.uniform3iv(this.addr,e)}function hx(a,e){a.uniform4iv(this.addr,e)}function cx(a,e){a.uniform1uiv(this.addr,e)}function dx(a,e){a.uniform2uiv(this.addr,e)}function ux(a,e){a.uniform3uiv(this.addr,e)}function fx(a,e){a.uniform4uiv(this.addr,e)}function px(a,e,t){const i=this.cache,n=e.length,s=yo(t,n);Wt(i,s)||(a.uniform1iv(this.addr,s),Xt(i,s));let r;this.type===a.SAMPLER_2D_SHADOW?r=Sh:r=Af;for(let o=0;o!==n;++o)t.setTexture2D(e[o]||r,s[o])}function mx(a,e,t){const i=this.cache,n=e.length,s=yo(t,n);Wt(i,s)||(a.uniform1iv(this.addr,s),Xt(i,s));for(let r=0;r!==n;++r)t.setTexture3D(e[r]||Ef,s[r])}function gx(a,e,t){const i=this.cache,n=e.length,s=yo(t,n);Wt(i,s)||(a.uniform1iv(this.addr,s),Xt(i,s));for(let r=0;r!==n;++r)t.setTextureCube(e[r]||Cf,s[r])}function vx(a,e,t){const i=this.cache,n=e.length,s=yo(t,n);Wt(i,s)||(a.uniform1iv(this.addr,s),Xt(i,s));for(let r=0;r!==n;++r)t.setTexture2DArray(e[r]||Tf,s[r])}function xx(a){switch(a){case 5126:return Qv;case 35664:return ex;case 35665:return tx;case 35666:return ix;case 35674:return nx;case 35675:return sx;case 35676:return ax;case 5124:case 35670:return rx;case 35667:case 35671:return ox;case 35668:case 35672:return lx;case 35669:case 35673:return hx;case 5125:return cx;case 36294:return dx;case 36295:return ux;case 36296:return fx;case 35678:case 36198:case 36298:case 36306:case 35682:return px;case 35679:case 36299:case 36307:return mx;case 35680:case 36300:case 36308:case 36293:return gx;case 36289:case 36303:case 36311:case 36292:return vx}}class bx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Jv(t.type)}}class yx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=xx(t.type)}}class _x{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const n=this.seq;for(let s=0,r=n.length;s!==r;++s){const o=n[s];o.setValue(e,t[o.id],i)}}}const sl=/(\w+)(\])?(\[|\.)?/g;function Md(a,e){a.seq.push(e),a.map[e.id]=e}function wx(a,e,t){const i=a.name,n=i.length;for(sl.lastIndex=0;;){const s=sl.exec(i),r=sl.lastIndex;let o=s[1];const l=s[2]==="]",h=s[3];if(l&&(o=o|0),h===void 0||h==="["&&r+2===n){Md(t,h===void 0?new bx(o,a,e):new yx(o,a,e));break}else{let d=t.map[o];d===void 0&&(d=new _x(o),Md(t,d)),t=d}}}class $r{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(t,r),l=e.getUniformLocation(t,o.name);wx(o,l,this)}const n=[],s=[];for(const r of this.seq)r.type===e.SAMPLER_2D_SHADOW||r.type===e.SAMPLER_CUBE_SHADOW||r.type===e.SAMPLER_2D_ARRAY_SHADOW?n.push(r):s.push(r);n.length>0&&(this.seq=n.concat(s))}setValue(e,t,i,n){const s=this.map[t];s!==void 0&&s.setValue(e,i,n)}setOptional(e,t,i){const n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let s=0,r=t.length;s!==r;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){const i=[];for(let n=0,s=e.length;n!==s;++n){const r=e[n];r.id in t&&i.push(r)}return i}}function Sd(a,e,t){const i=a.createShader(e);return a.shaderSource(i,t),a.compileShader(i),i}const Mx=37297;let Sx=0;function Ax(a,e){const t=a.split(`
`),i=[],n=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let r=n;r<s;r++){const o=r+1;i.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return i.join(`
`)}const Ad=new Oe;function Tx(a){Ze._getMatrix(Ad,Ze.workingColorSpace,a);const e=`mat3( ${Ad.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(a)){case no:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return ke("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function Td(a,e,t){const i=a.getShaderParameter(e,a.COMPILE_STATUS),s=(a.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Ax(a.getShaderSource(e),o)}else return s}function Ex(a,e){const t=Tx(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Cx={[Bh]:"Linear",[Hh]:"Reinhard",[Gh]:"Cineon",[mo]:"ACESFilmic",[Wh]:"AgX",[Xh]:"Neutral",[Vh]:"Custom"};function Rx(a,e){const t=Cx[e];return t===void 0?(ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const br=new I;function Px(){Ze.getLuminanceCoefficients(br);const a=br.x.toFixed(4),e=br.y.toFixed(4),t=br.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ix(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ea).join(`
`)}function Lx(a){const e=[];for(const t in a){const i=a[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Fx(a,e){const t={},i=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const s=a.getActiveAttrib(e,n),r=s.name;let o=1;s.type===a.FLOAT_MAT2&&(o=2),s.type===a.FLOAT_MAT3&&(o=3),s.type===a.FLOAT_MAT4&&(o=4),t[r]={type:s.type,location:a.getAttribLocation(e,r),locationSize:o}}return t}function Ea(a){return a!==""}function Ed(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Cd(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Dx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ah(a){return a.replace(Dx,kx)}const Ux=new Map;function kx(a,e){let t=We[e];if(t===void 0){const i=Ux.get(e);if(i!==void 0)t=We[i],ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Ah(t)}const zx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rd(a){return a.replace(zx,Nx)}function Nx(a,e,t,i){let n="";for(let s=parseInt(e);s<parseInt(t);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function Pd(a){let e=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Ox={[Gr]:"SHADOWMAP_TYPE_PCF",[Ta]:"SHADOWMAP_TYPE_VSM"};function Bx(a){return Ox[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Hx={[is]:"ENVMAP_TYPE_CUBE",[$s]:"ENVMAP_TYPE_CUBE",[go]:"ENVMAP_TYPE_CUBE_UV"};function Gx(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":Hx[a.envMapMode]||"ENVMAP_TYPE_CUBE"}const Vx={[$s]:"ENVMAP_MODE_REFRACTION"};function Wx(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":Vx[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Xx={[Yu]:"ENVMAP_BLENDING_MULTIPLY",[Lp]:"ENVMAP_BLENDING_MIX",[Fp]:"ENVMAP_BLENDING_ADD"};function qx(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":Xx[a.combine]||"ENVMAP_BLENDING_NONE"}function $x(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function jx(a,e,t,i){const n=a.getContext(),s=t.defines;let r=t.vertexShader,o=t.fragmentShader;const l=Bx(t),h=Gx(t),c=Wx(t),d=qx(t),u=$x(t),f=Ix(t),m=Lx(s),v=n.createProgram();let g,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ea).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ea).join(`
`),p.length>0&&(p+=`
`)):(g=[Pd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ea).join(`
`),p=[Pd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==tn?"#define TONE_MAPPING":"",t.toneMapping!==tn?We.tonemapping_pars_fragment:"",t.toneMapping!==tn?Rx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,Ex("linearToOutputTexel",t.outputColorSpace),Px(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ea).join(`
`)),r=Ah(r),r=Ed(r,t),r=Cd(r,t),o=Ah(o),o=Ed(o,t),o=Cd(o,t),r=Rd(r),o=Rd(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Oc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Oc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const T=M+g+r,w=M+p+o,A=Sd(n,n.VERTEX_SHADER,T),_=Sd(n,n.FRAGMENT_SHADER,w);n.attachShader(v,A),n.attachShader(v,_),t.index0AttributeName!==void 0?n.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&n.bindAttribLocation(v,0,"position"),n.linkProgram(v);function E(P){if(a.debug.checkShaderErrors){const F=n.getProgramInfoLog(v)||"",W=n.getShaderInfoLog(A)||"",$=n.getShaderInfoLog(_)||"",N=F.trim(),V=W.trim(),k=$.trim();let Y=!0,ee=!0;if(n.getProgramParameter(v,n.LINK_STATUS)===!1)if(Y=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(n,v,A,_);else{const ae=Td(n,A,"vertex"),de=Td(n,_,"fragment");Je("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(v,n.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+N+`
`+ae+`
`+de)}else N!==""?ke("WebGLProgram: Program Info Log:",N):(V===""||k==="")&&(ee=!1);ee&&(P.diagnostics={runnable:Y,programLog:N,vertexShader:{log:V,prefix:g},fragmentShader:{log:k,prefix:p}})}n.deleteShader(A),n.deleteShader(_),x=new $r(n,v),y=Fx(n,v)}let x;this.getUniforms=function(){return x===void 0&&E(this),x};let y;this.getAttributes=function(){return y===void 0&&E(this),y};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=n.getProgramParameter(v,Mx)),R},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Sx++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=_,this}let Zx=0;class Yx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const n=this._getShaderCacheForMaterial(e);return n.has(t)===!1&&(n.add(t),t.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Kx(e),t.set(e,i)),i}}class Kx{constructor(e){this.id=Zx++,this.code=e,this.usedTimes=0}}function Jx(a){return a===ns||a===eo||a===to}function Qx(a,e,t,i,n,s){const r=new of,o=new Yx,l=new Set,h=[],c=new Map,d=i.logarithmicDepthBuffer;let u=i.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return l.add(x),x===0?"uv":`uv${x}`}function v(x,y,R,P,F,W){const $=P.fog,N=F.geometry,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?P.environment:null,k=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,Y=e.get(x.envMap||V,k),ee=Y&&Y.mapping===go?Y.image.height:null,ae=f[x.type];x.precision!==null&&(u=i.getMaxPrecision(x.precision),u!==x.precision&&ke("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));const de=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,xe=de!==void 0?de.length:0;let Ke=0;N.morphAttributes.position!==void 0&&(Ke=1),N.morphAttributes.normal!==void 0&&(Ke=2),N.morphAttributes.color!==void 0&&(Ke=3);let Tt,it,K,re;if(ae){const Se=Yi[ae];Tt=Se.vertexShader,it=Se.fragmentShader}else{Tt=x.vertexShader,it=x.fragmentShader;const Se=o.getVertexShaderStage(x),Ct=o.getFragmentShaderStage(x);o.update(x,Se,Ct),K=Se.id,re=Ct.id}const te=a.getRenderTarget(),ze=a.state.buffers.depth.getReversed(),He=F.isInstancedMesh===!0,De=F.isBatchedMesh===!0,Ft=!!x.map,je=!!x.matcap,ut=!!Y,nt=!!x.aoMap,Qe=!!x.lightMap,Nt=!!x.bumpMap&&x.wireframe===!1,Ht=!!x.normalMap,qt=!!x.displacementMap,Yt=!!x.emissiveMap,Et=!!x.metalnessMap,Ot=!!x.roughnessMap,D=x.anisotropy>0,pi=x.clearcoat>0,rt=x.dispersion>0,C=x.iridescence>0,b=x.sheen>0,z=x.transmission>0,H=D&&!!x.anisotropyMap,X=pi&&!!x.clearcoatMap,ne=pi&&!!x.clearcoatNormalMap,oe=pi&&!!x.clearcoatRoughnessMap,q=C&&!!x.iridescenceMap,Z=C&&!!x.iridescenceThicknessMap,le=b&&!!x.sheenColorMap,Ee=b&&!!x.sheenRoughnessMap,ue=!!x.specularMap,he=!!x.specularColorMap,Le=!!x.specularIntensityMap,Ue=z&&!!x.transmissionMap,Ge=z&&!!x.thicknessMap,L=!!x.gradientMap,se=!!x.alphaMap,j=x.alphaTest>0,ce=!!x.alphaHash,ge=!!x.extensions;let Q=tn;x.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Q=a.toneMapping);const Te={shaderID:ae,shaderType:x.type,shaderName:x.name,vertexShader:Tt,fragmentShader:it,defines:x.defines,customVertexShaderID:K,customFragmentShaderID:re,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:De,batchingColor:De&&F._colorsTexture!==null,instancing:He,instancingColor:He&&F.instanceColor!==null,instancingMorph:He&&F.morphTexture!==null,outputColorSpace:te===null?a.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Ze.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ft,matcap:je,envMap:ut,envMapMode:ut&&Y.mapping,envMapCubeUVHeight:ee,aoMap:nt,lightMap:Qe,bumpMap:Nt,normalMap:Ht,displacementMap:qt,emissiveMap:Yt,normalMapObjectSpace:Ht&&x.normalMapType===Up,normalMapTangentSpace:Ht&&x.normalMapType===zc,packedNormalMap:Ht&&x.normalMapType===zc&&Jx(x.normalMap.format),metalnessMap:Et,roughnessMap:Ot,anisotropy:D,anisotropyMap:H,clearcoat:pi,clearcoatMap:X,clearcoatNormalMap:ne,clearcoatRoughnessMap:oe,dispersion:rt,iridescence:C,iridescenceMap:q,iridescenceThicknessMap:Z,sheen:b,sheenColorMap:le,sheenRoughnessMap:Ee,specularMap:ue,specularColorMap:he,specularIntensityMap:Le,transmission:z,transmissionMap:Ue,thicknessMap:Ge,gradientMap:L,opaque:x.transparent===!1&&x.blending===en&&x.alphaToCoverage===!1,alphaMap:se,alphaTest:j,alphaHash:ce,combine:x.combine,mapUv:Ft&&m(x.map.channel),aoMapUv:nt&&m(x.aoMap.channel),lightMapUv:Qe&&m(x.lightMap.channel),bumpMapUv:Nt&&m(x.bumpMap.channel),normalMapUv:Ht&&m(x.normalMap.channel),displacementMapUv:qt&&m(x.displacementMap.channel),emissiveMapUv:Yt&&m(x.emissiveMap.channel),metalnessMapUv:Et&&m(x.metalnessMap.channel),roughnessMapUv:Ot&&m(x.roughnessMap.channel),anisotropyMapUv:H&&m(x.anisotropyMap.channel),clearcoatMapUv:X&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:ne&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:q&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:Z&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:le&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&m(x.sheenRoughnessMap.channel),specularMapUv:ue&&m(x.specularMap.channel),specularColorMapUv:he&&m(x.specularColorMap.channel),specularIntensityMapUv:Le&&m(x.specularIntensityMap.channel),transmissionMapUv:Ue&&m(x.transmissionMap.channel),thicknessMapUv:Ge&&m(x.thicknessMap.channel),alphaMapUv:se&&m(x.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Ht||D),vertexNormals:!!N.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!N.attributes.uv&&(Ft||se),fog:!!$,useFog:x.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||N.attributes.normal===void 0&&Ht===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ze,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:Ke,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:W.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:a.shadowMap.enabled&&R.length>0,shadowMapType:a.shadowMap.type,toneMapping:Q,decodeVideoTexture:Ft&&x.map.isVideoTexture===!0&&Ze.getTransfer(x.map.colorSpace)===at,decodeVideoTextureEmissive:Yt&&x.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(x.emissiveMap.colorSpace)===at,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ui,flipSided:x.side===vi,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ge&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ge&&x.extensions.multiDraw===!0||De)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Te.vertexUv1s=l.has(1),Te.vertexUv2s=l.has(2),Te.vertexUv3s=l.has(3),l.clear(),Te}function g(x){const y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(const R in x.defines)y.push(R),y.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(p(y,x),M(y,x),y.push(a.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function p(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapCubeUVHeight),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.morphAttributeCount),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function M(x,y){r.disableAll(),y.instancing&&r.enable(0),y.instancingColor&&r.enable(1),y.instancingMorph&&r.enable(2),y.matcap&&r.enable(3),y.envMap&&r.enable(4),y.normalMapObjectSpace&&r.enable(5),y.normalMapTangentSpace&&r.enable(6),y.clearcoat&&r.enable(7),y.iridescence&&r.enable(8),y.alphaTest&&r.enable(9),y.vertexColors&&r.enable(10),y.vertexAlphas&&r.enable(11),y.vertexUv1s&&r.enable(12),y.vertexUv2s&&r.enable(13),y.vertexUv3s&&r.enable(14),y.vertexTangents&&r.enable(15),y.anisotropy&&r.enable(16),y.alphaHash&&r.enable(17),y.batching&&r.enable(18),y.dispersion&&r.enable(19),y.batchingColor&&r.enable(20),y.gradientMap&&r.enable(21),y.packedNormalMap&&r.enable(22),y.vertexNormals&&r.enable(23),x.push(r.mask),r.disableAll(),y.fog&&r.enable(0),y.useFog&&r.enable(1),y.flatShading&&r.enable(2),y.logarithmicDepthBuffer&&r.enable(3),y.reversedDepthBuffer&&r.enable(4),y.skinning&&r.enable(5),y.morphTargets&&r.enable(6),y.morphNormals&&r.enable(7),y.morphColors&&r.enable(8),y.premultipliedAlpha&&r.enable(9),y.shadowMapEnabled&&r.enable(10),y.doubleSided&&r.enable(11),y.flipSided&&r.enable(12),y.useDepthPacking&&r.enable(13),y.dithering&&r.enable(14),y.transmission&&r.enable(15),y.sheen&&r.enable(16),y.opaque&&r.enable(17),y.pointsUvs&&r.enable(18),y.decodeVideoTexture&&r.enable(19),y.decodeVideoTextureEmissive&&r.enable(20),y.alphaToCoverage&&r.enable(21),y.numLightProbeGrids>0&&r.enable(22),y.hasPositionAttribute&&r.enable(23),x.push(r.mask)}function T(x){const y=f[x.type];let R;if(y){const P=Yi[y];R=Da.clone(P.uniforms)}else R=x.uniforms;return R}function w(x,y){let R=c.get(y);return R!==void 0?++R.usedTimes:(R=new jx(a,y,x,n),h.push(R),c.set(y,R)),R}function A(x){if(--x.usedTimes===0){const y=h.indexOf(x);h[y]=h[h.length-1],h.pop(),c.delete(x.cacheKey),x.destroy()}}function _(x){o.remove(x)}function E(){o.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:T,acquireProgram:w,releaseProgram:A,releaseShaderCache:_,programs:h,dispose:E}}function eb(){let a=new WeakMap;function e(r){return a.has(r)}function t(r){let o=a.get(r);return o===void 0&&(o={},a.set(r,o)),o}function i(r){a.delete(r)}function n(r,o,l){a.get(r)[o]=l}function s(){a=new WeakMap}return{has:e,get:t,remove:i,update:n,dispose:s}}function tb(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.materialVariant!==e.materialVariant?a.materialVariant-e.materialVariant:a.z!==e.z?a.z-e.z:a.id-e.id}function Id(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Ld(){const a=[];let e=0;const t=[],i=[],n=[];function s(){e=0,t.length=0,i.length=0,n.length=0}function r(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,m,v,g,p){let M=a[e];return M===void 0?(M={id:u.id,object:u,geometry:f,material:m,materialVariant:r(u),groupOrder:v,renderOrder:u.renderOrder,z:g,group:p},a[e]=M):(M.id=u.id,M.object=u,M.geometry=f,M.material=m,M.materialVariant=r(u),M.groupOrder=v,M.renderOrder=u.renderOrder,M.z=g,M.group=p),e++,M}function l(u,f,m,v,g,p){const M=o(u,f,m,v,g,p);m.transmission>0?i.push(M):m.transparent===!0?n.push(M):t.push(M)}function h(u,f,m,v,g,p){const M=o(u,f,m,v,g,p);m.transmission>0?i.unshift(M):m.transparent===!0?n.unshift(M):t.unshift(M)}function c(u,f,m){t.length>1&&t.sort(u||tb),i.length>1&&i.sort(f||Id),n.length>1&&n.sort(f||Id),m&&(t.reverse(),i.reverse(),n.reverse())}function d(){for(let u=e,f=a.length;u<f;u++){const m=a[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:n,init:s,push:l,unshift:h,finish:d,sort:c}}function ib(){let a=new WeakMap;function e(i,n){const s=a.get(i);let r;return s===void 0?(r=new Ld,a.set(i,[r])):n>=s.length?(r=new Ld,s.push(r)):r=s[n],r}function t(){a=new WeakMap}return{get:e,dispose:t}}function nb(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Ne};break;case"SpotLight":t={position:new I,direction:new I,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new I,halfWidth:new I,halfHeight:new I};break}return a[e.id]=t,t}}}function sb(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let ab=0;function rb(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function ob(a){const e=new nb,t=sb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new I);const n=new I,s=new mt,r=new mt;function o(h){let c=0,d=0,u=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let f=0,m=0,v=0,g=0,p=0,M=0,T=0,w=0,A=0,_=0,E=0;h.sort(rb);for(let y=0,R=h.length;y<R;y++){const P=h[y],F=P.color,W=P.intensity,$=P.distance;let N=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===ns?N=P.shadow.map.texture:N=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)c+=F.r*W,d+=F.g*W,u+=F.b*W;else if(P.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(P.sh.coefficients[V],W);E++}else if(P.isDirectionalLight){const V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const k=P.shadow,Y=t.get(P);Y.shadowIntensity=k.intensity,Y.shadowBias=k.bias,Y.shadowNormalBias=k.normalBias,Y.shadowRadius=k.radius,Y.shadowMapSize=k.mapSize,i.directionalShadow[f]=Y,i.directionalShadowMap[f]=N,i.directionalShadowMatrix[f]=P.shadow.matrix,M++}i.directional[f]=V,f++}else if(P.isSpotLight){const V=e.get(P);V.position.setFromMatrixPosition(P.matrixWorld),V.color.copy(F).multiplyScalar(W),V.distance=$,V.coneCos=Math.cos(P.angle),V.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),V.decay=P.decay,i.spot[v]=V;const k=P.shadow;if(P.map&&(i.spotLightMap[A]=P.map,A++,k.updateMatrices(P),P.castShadow&&_++),i.spotLightMatrix[v]=k.matrix,P.castShadow){const Y=t.get(P);Y.shadowIntensity=k.intensity,Y.shadowBias=k.bias,Y.shadowNormalBias=k.normalBias,Y.shadowRadius=k.radius,Y.shadowMapSize=k.mapSize,i.spotShadow[v]=Y,i.spotShadowMap[v]=N,w++}v++}else if(P.isRectAreaLight){const V=e.get(P);V.color.copy(F).multiplyScalar(W),V.halfWidth.set(P.width*.5,0,0),V.halfHeight.set(0,P.height*.5,0),i.rectArea[g]=V,g++}else if(P.isPointLight){const V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),V.distance=P.distance,V.decay=P.decay,P.castShadow){const k=P.shadow,Y=t.get(P);Y.shadowIntensity=k.intensity,Y.shadowBias=k.bias,Y.shadowNormalBias=k.normalBias,Y.shadowRadius=k.radius,Y.shadowMapSize=k.mapSize,Y.shadowCameraNear=k.camera.near,Y.shadowCameraFar=k.camera.far,i.pointShadow[m]=Y,i.pointShadowMap[m]=N,i.pointShadowMatrix[m]=P.shadow.matrix,T++}i.point[m]=V,m++}else if(P.isHemisphereLight){const V=e.get(P);V.skyColor.copy(P.color).multiplyScalar(W),V.groundColor.copy(P.groundColor).multiplyScalar(W),i.hemi[p]=V,p++}}g>0&&(a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=d,i.ambient[2]=u;const x=i.hash;(x.directionalLength!==f||x.pointLength!==m||x.spotLength!==v||x.rectAreaLength!==g||x.hemiLength!==p||x.numDirectionalShadows!==M||x.numPointShadows!==T||x.numSpotShadows!==w||x.numSpotMaps!==A||x.numLightProbes!==E)&&(i.directional.length=f,i.spot.length=v,i.rectArea.length=g,i.point.length=m,i.hemi.length=p,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=w+A-_,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=_,i.numLightProbes=E,x.directionalLength=f,x.pointLength=m,x.spotLength=v,x.rectAreaLength=g,x.hemiLength=p,x.numDirectionalShadows=M,x.numPointShadows=T,x.numSpotShadows=w,x.numSpotMaps=A,x.numLightProbes=E,i.version=ab++)}function l(h,c){let d=0,u=0,f=0,m=0,v=0;const g=c.matrixWorldInverse;for(let p=0,M=h.length;p<M;p++){const T=h[p];if(T.isDirectionalLight){const w=i.directional[d];w.direction.setFromMatrixPosition(T.matrixWorld),n.setFromMatrixPosition(T.target.matrixWorld),w.direction.sub(n),w.direction.transformDirection(g),d++}else if(T.isSpotLight){const w=i.spot[f];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(g),w.direction.setFromMatrixPosition(T.matrixWorld),n.setFromMatrixPosition(T.target.matrixWorld),w.direction.sub(n),w.direction.transformDirection(g),f++}else if(T.isRectAreaLight){const w=i.rectArea[m];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(g),r.identity(),s.copy(T.matrixWorld),s.premultiply(g),r.extractRotation(s),w.halfWidth.set(T.width*.5,0,0),w.halfHeight.set(0,T.height*.5,0),w.halfWidth.applyMatrix4(r),w.halfHeight.applyMatrix4(r),m++}else if(T.isPointLight){const w=i.point[u];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(g),u++}else if(T.isHemisphereLight){const w=i.hemi[v];w.direction.setFromMatrixPosition(T.matrixWorld),w.direction.transformDirection(g),v++}}}return{setup:o,setupView:l,state:i}}function Fd(a){const e=new ob(a),t=[],i=[],n=[];function s(u){d.camera=u,t.length=0,i.length=0,n.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function l(u){n.push(u)}function h(){e.setup(t)}function c(u){e.setupView(t,u)}const d={lightsArray:t,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:h,setupLightsView:c,pushLight:r,pushShadow:o,pushLightProbeGrid:l}}function lb(a){let e=new WeakMap;function t(n,s=0){const r=e.get(n);let o;return r===void 0?(o=new Fd(a),e.set(n,[o])):s>=r.length?(o=new Fd(a),r.push(o)):o=r[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const hb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,db=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],ub=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],Dd=new mt,ma=new I,al=new I;function fb(a,e,t){let i=new pf;const n=new ve,s=new ve,r=new It,o=new wm,l=new Mm,h={},c=t.maxTextureSize,d={[Fn]:vi,[vi]:Fn,[ui]:ui},u=new Be({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ve},radius:{value:4}},vertexShader:hb,fragmentShader:cb}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const m=new zt;m.setAttribute("position",new St(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Lt(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gr;let p=this.type;this.render=function(_,E,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||_.length===0)return;this.type===fp&&(ke("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Gr);const y=a.getRenderTarget(),R=a.getActiveCubeFace(),P=a.getActiveMipmapLevel(),F=a.state;F.setBlending(Qi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const W=p!==this.type;W&&E.traverse(function($){$.material&&(Array.isArray($.material)?$.material.forEach(N=>N.needsUpdate=!0):$.material.needsUpdate=!0)});for(let $=0,N=_.length;$<N;$++){const V=_[$],k=V.shadow;if(k===void 0){ke("WebGLShadowMap:",V,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;n.copy(k.mapSize);const Y=k.getFrameExtents();n.multiply(Y),s.copy(k.mapSize),(n.x>c||n.y>c)&&(n.x>c&&(s.x=Math.floor(c/Y.x),n.x=s.x*Y.x,k.mapSize.x=s.x),n.y>c&&(s.y=Math.floor(c/Y.y),n.y=s.y*Y.y,k.mapSize.y=s.y));const ee=a.state.buffers.depth.getReversed();if(k.camera._reversedDepth=ee,k.map===null||W===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Ta){if(V.isPointLight){ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new xi(n.x,n.y,{format:ns,type:Si,minFilter:li,magFilter:li,generateMipmaps:!1}),k.map.texture.name=V.name+".shadowMap",k.map.depthTexture=new Zs(n.x,n.y,Hi),k.map.depthTexture.name=V.name+".shadowMapDepth",k.map.depthTexture.format=xn,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=ot,k.map.depthTexture.magFilter=ot}else V.isPointLight?(k.map=new Sf(n.x),k.map.depthTexture=new xm(n.x,nn)):(k.map=new xi(n.x,n.y),k.map.depthTexture=new Zs(n.x,n.y,nn)),k.map.depthTexture.name=V.name+".shadowMap",k.map.depthTexture.format=xn,this.type===Gr?(k.map.depthTexture.compareFunction=ee?ec:Qh,k.map.depthTexture.minFilter=li,k.map.depthTexture.magFilter=li):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=ot,k.map.depthTexture.magFilter=ot);k.camera.updateProjectionMatrix()}const ae=k.map.isWebGLCubeRenderTarget?6:1;for(let de=0;de<ae;de++){if(k.map.isWebGLCubeRenderTarget)a.setRenderTarget(k.map,de),a.clear();else{de===0&&(a.setRenderTarget(k.map),a.clear());const xe=k.getViewport(de);r.set(s.x*xe.x,s.y*xe.y,s.x*xe.z,s.y*xe.w),F.viewport(r)}if(V.isPointLight){const xe=k.camera,Ke=k.matrix,Tt=V.distance||xe.far;Tt!==xe.far&&(xe.far=Tt,xe.updateProjectionMatrix()),ma.setFromMatrixPosition(V.matrixWorld),xe.position.copy(ma),al.copy(xe.position),al.add(db[de]),xe.up.copy(ub[de]),xe.lookAt(al),xe.updateMatrixWorld(),Ke.makeTranslation(-ma.x,-ma.y,-ma.z),Dd.multiplyMatrices(xe.projectionMatrix,xe.matrixWorldInverse),k._frustum.setFromProjectionMatrix(Dd,xe.coordinateSystem,xe.reversedDepth)}else k.updateMatrices(V);i=k.getFrustum(),w(E,x,k.camera,V,this.type)}k.isPointLightShadow!==!0&&this.type===Ta&&M(k,x),k.needsUpdate=!1}p=this.type,g.needsUpdate=!1,a.setRenderTarget(y,R,P)};function M(_,E){const x=e.update(v);u.defines.VSM_SAMPLES!==_.blurSamples&&(u.defines.VSM_SAMPLES=_.blurSamples,f.defines.VSM_SAMPLES=_.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),_.mapPass===null&&(_.mapPass=new xi(n.x,n.y,{format:ns,type:Si})),u.uniforms.shadow_pass.value=_.map.depthTexture,u.uniforms.resolution.value=_.mapSize,u.uniforms.radius.value=_.radius,a.setRenderTarget(_.mapPass),a.clear(),a.renderBufferDirect(E,null,x,u,v,null),f.uniforms.shadow_pass.value=_.mapPass.texture,f.uniforms.resolution.value=_.mapSize,f.uniforms.radius.value=_.radius,a.setRenderTarget(_.map),a.clear(),a.renderBufferDirect(E,null,x,f,v,null)}function T(_,E,x,y){let R=null;const P=x.isPointLight===!0?_.customDistanceMaterial:_.customDepthMaterial;if(P!==void 0)R=P;else if(R=x.isPointLight===!0?l:o,a.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){const F=R.uuid,W=E.uuid;let $=h[F];$===void 0&&($={},h[F]=$);let N=$[W];N===void 0&&(N=R.clone(),$[W]=N,E.addEventListener("dispose",A)),R=N}if(R.visible=E.visible,R.wireframe=E.wireframe,y===Ta?R.side=E.shadowSide!==null?E.shadowSide:E.side:R.side=E.shadowSide!==null?E.shadowSide:d[E.side],R.alphaMap=E.alphaMap,R.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,R.map=E.map,R.clipShadows=E.clipShadows,R.clippingPlanes=E.clippingPlanes,R.clipIntersection=E.clipIntersection,R.displacementMap=E.displacementMap,R.displacementScale=E.displacementScale,R.displacementBias=E.displacementBias,R.wireframeLinewidth=E.wireframeLinewidth,R.linewidth=E.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const F=a.properties.get(R);F.light=x}return R}function w(_,E,x,y,R){if(_.visible===!1)return;if(_.layers.test(E.layers)&&(_.isMesh||_.isLine||_.isPoints)&&(_.castShadow||_.receiveShadow&&R===Ta)&&(!_.frustumCulled||i.intersectsObject(_))){_.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,_.matrixWorld);const W=e.update(_),$=_.material;if(Array.isArray($)){const N=W.groups;for(let V=0,k=N.length;V<k;V++){const Y=N[V],ee=$[Y.materialIndex];if(ee&&ee.visible){const ae=T(_,ee,y,R);_.onBeforeShadow(a,_,E,x,W,ae,Y),a.renderBufferDirect(x,null,W,ae,_,Y),_.onAfterShadow(a,_,E,x,W,ae,Y)}}}else if($.visible){const N=T(_,$,y,R);_.onBeforeShadow(a,_,E,x,W,N,null),a.renderBufferDirect(x,null,W,N,_,null),_.onAfterShadow(a,_,E,x,W,N,null)}}const F=_.children;for(let W=0,$=F.length;W<$;W++)w(F[W],E,x,y,R)}function A(_){_.target.removeEventListener("dispose",A);for(const x in h){const y=h[x],R=_.target.uuid;R in y&&(y[R].dispose(),delete y[R])}}}function pb(a,e){function t(){let L=!1;const se=new It;let j=null;const ce=new It(0,0,0,0);return{setMask:function(ge){j!==ge&&!L&&(a.colorMask(ge,ge,ge,ge),j=ge)},setLocked:function(ge){L=ge},setClear:function(ge,Q,Te,Se,Ct){Ct===!0&&(ge*=Se,Q*=Se,Te*=Se),se.set(ge,Q,Te,Se),ce.equals(se)===!1&&(a.clearColor(ge,Q,Te,Se),ce.copy(se))},reset:function(){L=!1,j=null,ce.set(-1,0,0,0)}}}function i(){let L=!1,se=!1,j=null,ce=null,ge=null;return{setReversed:function(Q){if(se!==Q){const Te=e.get("EXT_clip_control");Q?Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.ZERO_TO_ONE_EXT):Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.NEGATIVE_ONE_TO_ONE_EXT),se=Q;const Se=ge;ge=null,this.setClear(Se)}},getReversed:function(){return se},setTest:function(Q){Q?te(a.DEPTH_TEST):ze(a.DEPTH_TEST)},setMask:function(Q){j!==Q&&!L&&(a.depthMask(Q),j=Q)},setFunc:function(Q){if(se&&(Q=Xp[Q]),ce!==Q){switch(Q){case zl:a.depthFunc(a.NEVER);break;case Nl:a.depthFunc(a.ALWAYS);break;case Ol:a.depthFunc(a.LESS);break;case qs:a.depthFunc(a.LEQUAL);break;case Bl:a.depthFunc(a.EQUAL);break;case Hl:a.depthFunc(a.GEQUAL);break;case Gl:a.depthFunc(a.GREATER);break;case Vl:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}ce=Q}},setLocked:function(Q){L=Q},setClear:function(Q){ge!==Q&&(ge=Q,se&&(Q=1-Q),a.clearDepth(Q))},reset:function(){L=!1,j=null,ce=null,ge=null,se=!1}}}function n(){let L=!1,se=null,j=null,ce=null,ge=null,Q=null,Te=null,Se=null,Ct=null;return{setTest:function(gt){L||(gt?te(a.STENCIL_TEST):ze(a.STENCIL_TEST))},setMask:function(gt){se!==gt&&!L&&(a.stencilMask(gt),se=gt)},setFunc:function(gt,Vi,Wi){(j!==gt||ce!==Vi||ge!==Wi)&&(a.stencilFunc(gt,Vi,Wi),j=gt,ce=Vi,ge=Wi)},setOp:function(gt,Vi,Wi){(Q!==gt||Te!==Vi||Se!==Wi)&&(a.stencilOp(gt,Vi,Wi),Q=gt,Te=Vi,Se=Wi)},setLocked:function(gt){L=gt},setClear:function(gt){Ct!==gt&&(a.clearStencil(gt),Ct=gt)},reset:function(){L=!1,se=null,j=null,ce=null,ge=null,Q=null,Te=null,Se=null,Ct=null}}}const s=new t,r=new i,o=new n,l=new WeakMap,h=new WeakMap;let c={},d={},u={},f=new WeakMap,m=[],v=null,g=!1,p=null,M=null,T=null,w=null,A=null,_=null,E=null,x=new Ne(0,0,0),y=0,R=!1,P=null,F=null,W=null,$=null,N=null;const V=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,Y=0;const ee=a.getParameter(a.VERSION);ee.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(ee)[1]),k=Y>=1):ee.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),k=Y>=2);let ae=null,de={};const xe=a.getParameter(a.SCISSOR_BOX),Ke=a.getParameter(a.VIEWPORT),Tt=new It().fromArray(xe),it=new It().fromArray(Ke);function K(L,se,j,ce){const ge=new Uint8Array(4),Q=a.createTexture();a.bindTexture(L,Q),a.texParameteri(L,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(L,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Te=0;Te<j;Te++)L===a.TEXTURE_3D||L===a.TEXTURE_2D_ARRAY?a.texImage3D(se,0,a.RGBA,1,1,ce,0,a.RGBA,a.UNSIGNED_BYTE,ge):a.texImage2D(se+Te,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,ge);return Q}const re={};re[a.TEXTURE_2D]=K(a.TEXTURE_2D,a.TEXTURE_2D,1),re[a.TEXTURE_CUBE_MAP]=K(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[a.TEXTURE_2D_ARRAY]=K(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),re[a.TEXTURE_3D]=K(a.TEXTURE_3D,a.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),te(a.DEPTH_TEST),r.setFunc(qs),Nt(!1),Ht(Dc),te(a.CULL_FACE),nt(Qi);function te(L){c[L]!==!0&&(a.enable(L),c[L]=!0)}function ze(L){c[L]!==!1&&(a.disable(L),c[L]=!1)}function He(L,se){return u[L]!==se?(a.bindFramebuffer(L,se),u[L]=se,L===a.DRAW_FRAMEBUFFER&&(u[a.FRAMEBUFFER]=se),L===a.FRAMEBUFFER&&(u[a.DRAW_FRAMEBUFFER]=se),!0):!1}function De(L,se){let j=m,ce=!1;if(L){j=f.get(se),j===void 0&&(j=[],f.set(se,j));const ge=L.textures;if(j.length!==ge.length||j[0]!==a.COLOR_ATTACHMENT0){for(let Q=0,Te=ge.length;Q<Te;Q++)j[Q]=a.COLOR_ATTACHMENT0+Q;j.length=ge.length,ce=!0}}else j[0]!==a.BACK&&(j[0]=a.BACK,ce=!0);ce&&a.drawBuffers(j)}function Ft(L){return v!==L?(a.useProgram(L),v=L,!0):!1}const je={[Yn]:a.FUNC_ADD,[mp]:a.FUNC_SUBTRACT,[gp]:a.FUNC_REVERSE_SUBTRACT};je[vp]=a.MIN,je[xp]=a.MAX;const ut={[bp]:a.ZERO,[yp]:a.ONE,[_p]:a.SRC_COLOR,[Ul]:a.SRC_ALPHA,[Ep]:a.SRC_ALPHA_SATURATE,[Ap]:a.DST_COLOR,[Mp]:a.DST_ALPHA,[wp]:a.ONE_MINUS_SRC_COLOR,[kl]:a.ONE_MINUS_SRC_ALPHA,[Tp]:a.ONE_MINUS_DST_COLOR,[Sp]:a.ONE_MINUS_DST_ALPHA,[Cp]:a.CONSTANT_COLOR,[Rp]:a.ONE_MINUS_CONSTANT_COLOR,[Pp]:a.CONSTANT_ALPHA,[Ip]:a.ONE_MINUS_CONSTANT_ALPHA};function nt(L,se,j,ce,ge,Q,Te,Se,Ct,gt){if(L===Qi){g===!0&&(ze(a.BLEND),g=!1);return}if(g===!1&&(te(a.BLEND),g=!0),L!==pp){if(L!==p||gt!==R){if((M!==Yn||A!==Yn)&&(a.blendEquation(a.FUNC_ADD),M=Yn,A=Yn),gt)switch(L){case en:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case jt:a.blendFunc(a.ONE,a.ONE);break;case Uc:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case kc:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:Je("WebGLState: Invalid blending: ",L);break}else switch(L){case en:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case jt:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case Uc:Je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case kc:Je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Je("WebGLState: Invalid blending: ",L);break}T=null,w=null,_=null,E=null,x.set(0,0,0),y=0,p=L,R=gt}return}ge=ge||se,Q=Q||j,Te=Te||ce,(se!==M||ge!==A)&&(a.blendEquationSeparate(je[se],je[ge]),M=se,A=ge),(j!==T||ce!==w||Q!==_||Te!==E)&&(a.blendFuncSeparate(ut[j],ut[ce],ut[Q],ut[Te]),T=j,w=ce,_=Q,E=Te),(Se.equals(x)===!1||Ct!==y)&&(a.blendColor(Se.r,Se.g,Se.b,Ct),x.copy(Se),y=Ct),p=L,R=!1}function Qe(L,se){L.side===ui?ze(a.CULL_FACE):te(a.CULL_FACE);let j=L.side===vi;se&&(j=!j),Nt(j),L.blending===en&&L.transparent===!1?nt(Qi):nt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),r.setFunc(L.depthFunc),r.setTest(L.depthTest),r.setMask(L.depthWrite),s.setMask(L.colorWrite);const ce=L.stencilWrite;o.setTest(ce),ce&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Yt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?te(a.SAMPLE_ALPHA_TO_COVERAGE):ze(a.SAMPLE_ALPHA_TO_COVERAGE)}function Nt(L){P!==L&&(L?a.frontFace(a.CW):a.frontFace(a.CCW),P=L)}function Ht(L){L!==dp?(te(a.CULL_FACE),L!==F&&(L===Dc?a.cullFace(a.BACK):L===up?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):ze(a.CULL_FACE),F=L}function qt(L){L!==W&&(k&&a.lineWidth(L),W=L)}function Yt(L,se,j){L?(te(a.POLYGON_OFFSET_FILL),($!==se||N!==j)&&($=se,N=j,r.getReversed()&&(se=-se),a.polygonOffset(se,j))):ze(a.POLYGON_OFFSET_FILL)}function Et(L){L?te(a.SCISSOR_TEST):ze(a.SCISSOR_TEST)}function Ot(L){L===void 0&&(L=a.TEXTURE0+V-1),ae!==L&&(a.activeTexture(L),ae=L)}function D(L,se,j){j===void 0&&(ae===null?j=a.TEXTURE0+V-1:j=ae);let ce=de[j];ce===void 0&&(ce={type:void 0,texture:void 0},de[j]=ce),(ce.type!==L||ce.texture!==se)&&(ae!==j&&(a.activeTexture(j),ae=j),a.bindTexture(L,se||re[L]),ce.type=L,ce.texture=se)}function pi(){const L=de[ae];L!==void 0&&L.type!==void 0&&(a.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function rt(){try{a.compressedTexImage2D(...arguments)}catch(L){Je("WebGLState:",L)}}function C(){try{a.compressedTexImage3D(...arguments)}catch(L){Je("WebGLState:",L)}}function b(){try{a.texSubImage2D(...arguments)}catch(L){Je("WebGLState:",L)}}function z(){try{a.texSubImage3D(...arguments)}catch(L){Je("WebGLState:",L)}}function H(){try{a.compressedTexSubImage2D(...arguments)}catch(L){Je("WebGLState:",L)}}function X(){try{a.compressedTexSubImage3D(...arguments)}catch(L){Je("WebGLState:",L)}}function ne(){try{a.texStorage2D(...arguments)}catch(L){Je("WebGLState:",L)}}function oe(){try{a.texStorage3D(...arguments)}catch(L){Je("WebGLState:",L)}}function q(){try{a.texImage2D(...arguments)}catch(L){Je("WebGLState:",L)}}function Z(){try{a.texImage3D(...arguments)}catch(L){Je("WebGLState:",L)}}function le(L){return d[L]!==void 0?d[L]:a.getParameter(L)}function Ee(L,se){d[L]!==se&&(a.pixelStorei(L,se),d[L]=se)}function ue(L){Tt.equals(L)===!1&&(a.scissor(L.x,L.y,L.z,L.w),Tt.copy(L))}function he(L){it.equals(L)===!1&&(a.viewport(L.x,L.y,L.z,L.w),it.copy(L))}function Le(L,se){let j=h.get(se);j===void 0&&(j=new WeakMap,h.set(se,j));let ce=j.get(L);ce===void 0&&(ce=a.getUniformBlockIndex(se,L.name),j.set(L,ce))}function Ue(L,se){const ce=h.get(se).get(L);l.get(se)!==ce&&(a.uniformBlockBinding(se,ce,L.__bindingPointIndex),l.set(se,ce))}function Ge(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),r.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),a.pixelStorei(a.PACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.BROWSER_DEFAULT_WEBGL),a.pixelStorei(a.PACK_ROW_LENGTH,0),a.pixelStorei(a.PACK_SKIP_PIXELS,0),a.pixelStorei(a.PACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_ROW_LENGTH,0),a.pixelStorei(a.UNPACK_IMAGE_HEIGHT,0),a.pixelStorei(a.UNPACK_SKIP_PIXELS,0),a.pixelStorei(a.UNPACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_SKIP_IMAGES,0),c={},d={},ae=null,de={},u={},f=new WeakMap,m=[],v=null,g=!1,p=null,M=null,T=null,w=null,A=null,_=null,E=null,x=new Ne(0,0,0),y=0,R=!1,P=null,F=null,W=null,$=null,N=null,Tt.set(0,0,a.canvas.width,a.canvas.height),it.set(0,0,a.canvas.width,a.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:te,disable:ze,bindFramebuffer:He,drawBuffers:De,useProgram:Ft,setBlending:nt,setMaterial:Qe,setFlipSided:Nt,setCullFace:Ht,setLineWidth:qt,setPolygonOffset:Yt,setScissorTest:Et,activeTexture:Ot,bindTexture:D,unbindTexture:pi,compressedTexImage2D:rt,compressedTexImage3D:C,texImage2D:q,texImage3D:Z,pixelStorei:Ee,getParameter:le,updateUBOMapping:Le,uniformBlockBinding:Ue,texStorage2D:ne,texStorage3D:oe,texSubImage2D:b,texSubImage3D:z,compressedTexSubImage2D:H,compressedTexSubImage3D:X,scissor:ue,viewport:he,reset:Ge}}function mb(a,e,t,i,n,s,r){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new ve,c=new WeakMap,d=new Set;let u;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,b){return m?new OffscreenCanvas(C,b):La("canvas")}function g(C,b,z){let H=1;const X=rt(C);if((X.width>z||X.height>z)&&(H=z/Math.max(X.width,X.height)),H<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const ne=Math.floor(H*X.width),oe=Math.floor(H*X.height);u===void 0&&(u=v(ne,oe));const q=b?v(ne,oe):u;return q.width=ne,q.height=oe,q.getContext("2d").drawImage(C,0,0,ne,oe),ke("WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+ne+"x"+oe+")."),q}else return"data"in C&&ke("WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),C;return C}function p(C){return C.generateMipmaps}function M(C){a.generateMipmap(C)}function T(C){return C.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?a.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function w(C,b,z,H,X,ne=!1){if(C!==null){if(a[C]!==void 0)return a[C];ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let oe;H&&(oe=e.get("EXT_texture_norm16"),oe||ke("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=b;if(b===a.RED&&(z===a.FLOAT&&(q=a.R32F),z===a.HALF_FLOAT&&(q=a.R16F),z===a.UNSIGNED_BYTE&&(q=a.R8),z===a.UNSIGNED_SHORT&&oe&&(q=oe.R16_EXT),z===a.SHORT&&oe&&(q=oe.R16_SNORM_EXT)),b===a.RED_INTEGER&&(z===a.UNSIGNED_BYTE&&(q=a.R8UI),z===a.UNSIGNED_SHORT&&(q=a.R16UI),z===a.UNSIGNED_INT&&(q=a.R32UI),z===a.BYTE&&(q=a.R8I),z===a.SHORT&&(q=a.R16I),z===a.INT&&(q=a.R32I)),b===a.RG&&(z===a.FLOAT&&(q=a.RG32F),z===a.HALF_FLOAT&&(q=a.RG16F),z===a.UNSIGNED_BYTE&&(q=a.RG8),z===a.UNSIGNED_SHORT&&oe&&(q=oe.RG16_EXT),z===a.SHORT&&oe&&(q=oe.RG16_SNORM_EXT)),b===a.RG_INTEGER&&(z===a.UNSIGNED_BYTE&&(q=a.RG8UI),z===a.UNSIGNED_SHORT&&(q=a.RG16UI),z===a.UNSIGNED_INT&&(q=a.RG32UI),z===a.BYTE&&(q=a.RG8I),z===a.SHORT&&(q=a.RG16I),z===a.INT&&(q=a.RG32I)),b===a.RGB_INTEGER&&(z===a.UNSIGNED_BYTE&&(q=a.RGB8UI),z===a.UNSIGNED_SHORT&&(q=a.RGB16UI),z===a.UNSIGNED_INT&&(q=a.RGB32UI),z===a.BYTE&&(q=a.RGB8I),z===a.SHORT&&(q=a.RGB16I),z===a.INT&&(q=a.RGB32I)),b===a.RGBA_INTEGER&&(z===a.UNSIGNED_BYTE&&(q=a.RGBA8UI),z===a.UNSIGNED_SHORT&&(q=a.RGBA16UI),z===a.UNSIGNED_INT&&(q=a.RGBA32UI),z===a.BYTE&&(q=a.RGBA8I),z===a.SHORT&&(q=a.RGBA16I),z===a.INT&&(q=a.RGBA32I)),b===a.RGB&&(z===a.UNSIGNED_SHORT&&oe&&(q=oe.RGB16_EXT),z===a.SHORT&&oe&&(q=oe.RGB16_SNORM_EXT),z===a.UNSIGNED_INT_5_9_9_9_REV&&(q=a.RGB9_E5),z===a.UNSIGNED_INT_10F_11F_11F_REV&&(q=a.R11F_G11F_B10F)),b===a.RGBA){const Z=ne?no:Ze.getTransfer(X);z===a.FLOAT&&(q=a.RGBA32F),z===a.HALF_FLOAT&&(q=a.RGBA16F),z===a.UNSIGNED_BYTE&&(q=Z===at?a.SRGB8_ALPHA8:a.RGBA8),z===a.UNSIGNED_SHORT&&oe&&(q=oe.RGBA16_EXT),z===a.SHORT&&oe&&(q=oe.RGBA16_SNORM_EXT),z===a.UNSIGNED_SHORT_4_4_4_4&&(q=a.RGBA4),z===a.UNSIGNED_SHORT_5_5_5_1&&(q=a.RGB5_A1)}return(q===a.R16F||q===a.R32F||q===a.RG16F||q===a.RG32F||q===a.RGBA16F||q===a.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function A(C,b){let z;return C?b===null||b===nn||b===Ia?z=a.DEPTH24_STENCIL8:b===Hi?z=a.DEPTH32F_STENCIL8:b===Pa&&(z=a.DEPTH24_STENCIL8,ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===nn||b===Ia?z=a.DEPTH_COMPONENT24:b===Hi?z=a.DEPTH_COMPONENT32F:b===Pa&&(z=a.DEPTH_COMPONENT16),z}function _(C,b){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==ot&&C.minFilter!==li?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function E(C){const b=C.target;b.removeEventListener("dispose",E),y(b),b.isVideoTexture&&c.delete(b),b.isHTMLTexture&&d.delete(b)}function x(C){const b=C.target;b.removeEventListener("dispose",x),P(b)}function y(C){const b=i.get(C);if(b.__webglInit===void 0)return;const z=C.source,H=f.get(z);if(H){const X=H[b.__cacheKey];X.usedTimes--,X.usedTimes===0&&R(C),Object.keys(H).length===0&&f.delete(z)}i.remove(C)}function R(C){const b=i.get(C);a.deleteTexture(b.__webglTexture);const z=C.source,H=f.get(z);delete H[b.__cacheKey],r.memory.textures--}function P(C){const b=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(b.__webglFramebuffer[H]))for(let X=0;X<b.__webglFramebuffer[H].length;X++)a.deleteFramebuffer(b.__webglFramebuffer[H][X]);else a.deleteFramebuffer(b.__webglFramebuffer[H]);b.__webglDepthbuffer&&a.deleteRenderbuffer(b.__webglDepthbuffer[H])}else{if(Array.isArray(b.__webglFramebuffer))for(let H=0;H<b.__webglFramebuffer.length;H++)a.deleteFramebuffer(b.__webglFramebuffer[H]);else a.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&a.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&a.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let H=0;H<b.__webglColorRenderbuffer.length;H++)b.__webglColorRenderbuffer[H]&&a.deleteRenderbuffer(b.__webglColorRenderbuffer[H]);b.__webglDepthRenderbuffer&&a.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const z=C.textures;for(let H=0,X=z.length;H<X;H++){const ne=i.get(z[H]);ne.__webglTexture&&(a.deleteTexture(ne.__webglTexture),r.memory.textures--),i.remove(z[H])}i.remove(C)}let F=0;function W(){F=0}function $(){return F}function N(C){F=C}function V(){const C=F;return C>=n.maxTextures&&ke("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+n.maxTextures),F+=1,C}function k(C){const b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function Y(C,b){const z=i.get(C);if(C.isVideoTexture&&D(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&z.__version!==C.version){const H=C.image;if(H===null)ke("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)ke("WebGLRenderer: Texture marked for update but image is incomplete");else{ze(z,C,b);return}}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(a.TEXTURE_2D,z.__webglTexture,a.TEXTURE0+b)}function ee(C,b){const z=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){ze(z,C,b);return}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(a.TEXTURE_2D_ARRAY,z.__webglTexture,a.TEXTURE0+b)}function ae(C,b){const z=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){ze(z,C,b);return}t.bindTexture(a.TEXTURE_3D,z.__webglTexture,a.TEXTURE0+b)}function de(C,b){const z=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&z.__version!==C.version){He(z,C,b);return}t.bindTexture(a.TEXTURE_CUBE_MAP,z.__webglTexture,a.TEXTURE0+b)}const xe={[vn]:a.REPEAT,[Bi]:a.CLAMP_TO_EDGE,[Wl]:a.MIRRORED_REPEAT},Ke={[ot]:a.NEAREST,[Oa]:a.NEAREST_MIPMAP_NEAREST,[Xa]:a.NEAREST_MIPMAP_LINEAR,[li]:a.LINEAR,[Eo]:a.LINEAR_MIPMAP_NEAREST,[Qn]:a.LINEAR_MIPMAP_LINEAR},Tt={[kp]:a.NEVER,[Hp]:a.ALWAYS,[zp]:a.LESS,[Qh]:a.LEQUAL,[Np]:a.EQUAL,[ec]:a.GEQUAL,[Op]:a.GREATER,[Bp]:a.NOTEQUAL};function it(C,b){if(b.type===Hi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===li||b.magFilter===Eo||b.magFilter===Xa||b.magFilter===Qn||b.minFilter===li||b.minFilter===Eo||b.minFilter===Xa||b.minFilter===Qn)&&ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(C,a.TEXTURE_WRAP_S,xe[b.wrapS]),a.texParameteri(C,a.TEXTURE_WRAP_T,xe[b.wrapT]),(C===a.TEXTURE_3D||C===a.TEXTURE_2D_ARRAY)&&a.texParameteri(C,a.TEXTURE_WRAP_R,xe[b.wrapR]),a.texParameteri(C,a.TEXTURE_MAG_FILTER,Ke[b.magFilter]),a.texParameteri(C,a.TEXTURE_MIN_FILTER,Ke[b.minFilter]),b.compareFunction&&(a.texParameteri(C,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(C,a.TEXTURE_COMPARE_FUNC,Tt[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===ot||b.minFilter!==Xa&&b.minFilter!==Qn||b.type===Hi&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");a.texParameterf(C,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,n.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function K(C,b){let z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",E));const H=b.source;let X=f.get(H);X===void 0&&(X={},f.set(H,X));const ne=k(b);if(ne!==C.__cacheKey){X[ne]===void 0&&(X[ne]={texture:a.createTexture(),usedTimes:0},r.memory.textures++,z=!0),X[ne].usedTimes++;const oe=X[C.__cacheKey];oe!==void 0&&(X[C.__cacheKey].usedTimes--,oe.usedTimes===0&&R(b)),C.__cacheKey=ne,C.__webglTexture=X[ne].texture}return z}function re(C,b,z){return Math.floor(Math.floor(C/z)/b)}function te(C,b,z,H){const ne=C.updateRanges;if(ne.length===0)t.texSubImage2D(a.TEXTURE_2D,0,0,0,b.width,b.height,z,H,b.data);else{ne.sort((Ee,ue)=>Ee.start-ue.start);let oe=0;for(let Ee=1;Ee<ne.length;Ee++){const ue=ne[oe],he=ne[Ee],Le=ue.start+ue.count,Ue=re(he.start,b.width,4),Ge=re(ue.start,b.width,4);he.start<=Le+1&&Ue===Ge&&re(he.start+he.count-1,b.width,4)===Ue?ue.count=Math.max(ue.count,he.start+he.count-ue.start):(++oe,ne[oe]=he)}ne.length=oe+1;const q=t.getParameter(a.UNPACK_ROW_LENGTH),Z=t.getParameter(a.UNPACK_SKIP_PIXELS),le=t.getParameter(a.UNPACK_SKIP_ROWS);t.pixelStorei(a.UNPACK_ROW_LENGTH,b.width);for(let Ee=0,ue=ne.length;Ee<ue;Ee++){const he=ne[Ee],Le=Math.floor(he.start/4),Ue=Math.ceil(he.count/4),Ge=Le%b.width,L=Math.floor(Le/b.width),se=Ue,j=1;t.pixelStorei(a.UNPACK_SKIP_PIXELS,Ge),t.pixelStorei(a.UNPACK_SKIP_ROWS,L),t.texSubImage2D(a.TEXTURE_2D,0,Ge,L,se,j,z,H,b.data)}C.clearUpdateRanges(),t.pixelStorei(a.UNPACK_ROW_LENGTH,q),t.pixelStorei(a.UNPACK_SKIP_PIXELS,Z),t.pixelStorei(a.UNPACK_SKIP_ROWS,le)}}function ze(C,b,z){let H=a.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(H=a.TEXTURE_2D_ARRAY),b.isData3DTexture&&(H=a.TEXTURE_3D);const X=K(C,b),ne=b.source;t.bindTexture(H,C.__webglTexture,a.TEXTURE0+z);const oe=i.get(ne);if(ne.version!==oe.__version||X===!0){if(t.activeTexture(a.TEXTURE0+z),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const j=Ze.getPrimaries(Ze.workingColorSpace),ce=b.colorSpace===Cn?null:Ze.getPrimaries(b.colorSpace),ge=b.colorSpace===Cn||j===ce?a.NONE:a.BROWSER_DEFAULT_WEBGL;t.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge)}t.pixelStorei(a.UNPACK_ALIGNMENT,b.unpackAlignment);let Z=g(b.image,!1,n.maxTextureSize);Z=pi(b,Z);const le=s.convert(b.format,b.colorSpace),Ee=s.convert(b.type);let ue=w(b.internalFormat,le,Ee,b.normalized,b.colorSpace,b.isVideoTexture);it(H,b);let he;const Le=b.mipmaps,Ue=b.isVideoTexture!==!0,Ge=oe.__version===void 0||X===!0,L=ne.dataReady,se=_(b,Z);if(b.isDepthTexture)ue=A(b.format===es,b.type),Ge&&(Ue?t.texStorage2D(a.TEXTURE_2D,1,ue,Z.width,Z.height):t.texImage2D(a.TEXTURE_2D,0,ue,Z.width,Z.height,0,le,Ee,null));else if(b.isDataTexture)if(Le.length>0){Ue&&Ge&&t.texStorage2D(a.TEXTURE_2D,se,ue,Le[0].width,Le[0].height);for(let j=0,ce=Le.length;j<ce;j++)he=Le[j],Ue?L&&t.texSubImage2D(a.TEXTURE_2D,j,0,0,he.width,he.height,le,Ee,he.data):t.texImage2D(a.TEXTURE_2D,j,ue,he.width,he.height,0,le,Ee,he.data);b.generateMipmaps=!1}else Ue?(Ge&&t.texStorage2D(a.TEXTURE_2D,se,ue,Z.width,Z.height),L&&te(b,Z,le,Ee)):t.texImage2D(a.TEXTURE_2D,0,ue,Z.width,Z.height,0,le,Ee,Z.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ue&&Ge&&t.texStorage3D(a.TEXTURE_2D_ARRAY,se,ue,Le[0].width,Le[0].height,Z.depth);for(let j=0,ce=Le.length;j<ce;j++)if(he=Le[j],b.format!==Gi)if(le!==null)if(Ue){if(L)if(b.layerUpdates.size>0){const ge=dd(he.width,he.height,b.format,b.type);for(const Q of b.layerUpdates){const Te=he.data.subarray(Q*ge/he.data.BYTES_PER_ELEMENT,(Q+1)*ge/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,j,0,0,Q,he.width,he.height,1,le,Te)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,j,0,0,0,he.width,he.height,Z.depth,le,he.data)}else t.compressedTexImage3D(a.TEXTURE_2D_ARRAY,j,ue,he.width,he.height,Z.depth,0,he.data,0,0);else ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?L&&t.texSubImage3D(a.TEXTURE_2D_ARRAY,j,0,0,0,he.width,he.height,Z.depth,le,Ee,he.data):t.texImage3D(a.TEXTURE_2D_ARRAY,j,ue,he.width,he.height,Z.depth,0,le,Ee,he.data)}else{Ue&&Ge&&t.texStorage2D(a.TEXTURE_2D,se,ue,Le[0].width,Le[0].height);for(let j=0,ce=Le.length;j<ce;j++)he=Le[j],b.format!==Gi?le!==null?Ue?L&&t.compressedTexSubImage2D(a.TEXTURE_2D,j,0,0,he.width,he.height,le,he.data):t.compressedTexImage2D(a.TEXTURE_2D,j,ue,he.width,he.height,0,he.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?L&&t.texSubImage2D(a.TEXTURE_2D,j,0,0,he.width,he.height,le,Ee,he.data):t.texImage2D(a.TEXTURE_2D,j,ue,he.width,he.height,0,le,Ee,he.data)}else if(b.isDataArrayTexture)if(Ue){if(Ge&&t.texStorage3D(a.TEXTURE_2D_ARRAY,se,ue,Z.width,Z.height,Z.depth),L)if(b.layerUpdates.size>0){const j=dd(Z.width,Z.height,b.format,b.type);for(const ce of b.layerUpdates){const ge=Z.data.subarray(ce*j/Z.data.BYTES_PER_ELEMENT,(ce+1)*j/Z.data.BYTES_PER_ELEMENT);t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,ce,Z.width,Z.height,1,le,Ee,ge)}b.clearLayerUpdates()}else t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,le,Ee,Z.data)}else t.texImage3D(a.TEXTURE_2D_ARRAY,0,ue,Z.width,Z.height,Z.depth,0,le,Ee,Z.data);else if(b.isData3DTexture)Ue?(Ge&&t.texStorage3D(a.TEXTURE_3D,se,ue,Z.width,Z.height,Z.depth),L&&t.texSubImage3D(a.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,le,Ee,Z.data)):t.texImage3D(a.TEXTURE_3D,0,ue,Z.width,Z.height,Z.depth,0,le,Ee,Z.data);else if(b.isFramebufferTexture){if(Ge)if(Ue)t.texStorage2D(a.TEXTURE_2D,se,ue,Z.width,Z.height);else{let j=Z.width,ce=Z.height;for(let ge=0;ge<se;ge++)t.texImage2D(a.TEXTURE_2D,ge,ue,j,ce,0,le,Ee,null),j>>=1,ce>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in a){const j=a.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),Z.parentNode!==j){j.appendChild(Z),d.add(b),j.onpaint=ce=>{const ge=ce.changedElements;for(const Q of d)ge.includes(Q.image)&&(Q.needsUpdate=!0)},j.requestPaint();return}if(a.texElementImage2D.length===3)a.texElementImage2D(a.TEXTURE_2D,a.RGBA8,Z);else{const ge=a.RGBA,Q=a.RGBA,Te=a.UNSIGNED_BYTE;a.texElementImage2D(a.TEXTURE_2D,0,ge,Q,Te,Z)}a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE)}}else if(Le.length>0){if(Ue&&Ge){const j=rt(Le[0]);t.texStorage2D(a.TEXTURE_2D,se,ue,j.width,j.height)}for(let j=0,ce=Le.length;j<ce;j++)he=Le[j],Ue?L&&t.texSubImage2D(a.TEXTURE_2D,j,0,0,le,Ee,he):t.texImage2D(a.TEXTURE_2D,j,ue,le,Ee,he);b.generateMipmaps=!1}else if(Ue){if(Ge){const j=rt(Z);t.texStorage2D(a.TEXTURE_2D,se,ue,j.width,j.height)}L&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,le,Ee,Z)}else t.texImage2D(a.TEXTURE_2D,0,ue,le,Ee,Z);p(b)&&M(H),oe.__version=ne.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function He(C,b,z){if(b.image.length!==6)return;const H=K(C,b),X=b.source;t.bindTexture(a.TEXTURE_CUBE_MAP,C.__webglTexture,a.TEXTURE0+z);const ne=i.get(X);if(X.version!==ne.__version||H===!0){t.activeTexture(a.TEXTURE0+z);const oe=Ze.getPrimaries(Ze.workingColorSpace),q=b.colorSpace===Cn?null:Ze.getPrimaries(b.colorSpace),Z=b.colorSpace===Cn||oe===q?a.NONE:a.BROWSER_DEFAULT_WEBGL;t.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(a.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);const le=b.isCompressedTexture||b.image[0].isCompressedTexture,Ee=b.image[0]&&b.image[0].isDataTexture,ue=[];for(let Q=0;Q<6;Q++)!le&&!Ee?ue[Q]=g(b.image[Q],!0,n.maxCubemapSize):ue[Q]=Ee?b.image[Q].image:b.image[Q],ue[Q]=pi(b,ue[Q]);const he=ue[0],Le=s.convert(b.format,b.colorSpace),Ue=s.convert(b.type),Ge=w(b.internalFormat,Le,Ue,b.normalized,b.colorSpace),L=b.isVideoTexture!==!0,se=ne.__version===void 0||H===!0,j=X.dataReady;let ce=_(b,he);it(a.TEXTURE_CUBE_MAP,b);let ge;if(le){L&&se&&t.texStorage2D(a.TEXTURE_CUBE_MAP,ce,Ge,he.width,he.height);for(let Q=0;Q<6;Q++){ge=ue[Q].mipmaps;for(let Te=0;Te<ge.length;Te++){const Se=ge[Te];b.format!==Gi?Le!==null?L?j&&t.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te,0,0,Se.width,Se.height,Le,Se.data):t.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te,Ge,Se.width,Se.height,0,Se.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?j&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te,0,0,Se.width,Se.height,Le,Ue,Se.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te,Ge,Se.width,Se.height,0,Le,Ue,Se.data)}}}else{if(ge=b.mipmaps,L&&se){ge.length>0&&ce++;const Q=rt(ue[0]);t.texStorage2D(a.TEXTURE_CUBE_MAP,ce,Ge,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(Ee){L?j&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ue[Q].width,ue[Q].height,Le,Ue,ue[Q].data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ge,ue[Q].width,ue[Q].height,0,Le,Ue,ue[Q].data);for(let Te=0;Te<ge.length;Te++){const Ct=ge[Te].image[Q].image;L?j&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te+1,0,0,Ct.width,Ct.height,Le,Ue,Ct.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te+1,Ge,Ct.width,Ct.height,0,Le,Ue,Ct.data)}}else{L?j&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Le,Ue,ue[Q]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ge,Le,Ue,ue[Q]);for(let Te=0;Te<ge.length;Te++){const Se=ge[Te];L?j&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te+1,0,0,Le,Ue,Se.image[Q]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te+1,Ge,Le,Ue,Se.image[Q])}}}p(b)&&M(a.TEXTURE_CUBE_MAP),ne.__version=X.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function De(C,b,z,H,X,ne){const oe=s.convert(z.format,z.colorSpace),q=s.convert(z.type),Z=w(z.internalFormat,oe,q,z.normalized,z.colorSpace),le=i.get(b),Ee=i.get(z);if(Ee.__renderTarget=b,!le.__hasExternalTextures){const ue=Math.max(1,b.width>>ne),he=Math.max(1,b.height>>ne);X===a.TEXTURE_3D||X===a.TEXTURE_2D_ARRAY?t.texImage3D(X,ne,Z,ue,he,b.depth,0,oe,q,null):t.texImage2D(X,ne,Z,ue,he,0,oe,q,null)}t.bindFramebuffer(a.FRAMEBUFFER,C),Ot(b)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,H,X,Ee.__webglTexture,0,Et(b)):(X===a.TEXTURE_2D||X>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,H,X,Ee.__webglTexture,ne),t.bindFramebuffer(a.FRAMEBUFFER,null)}function Ft(C,b,z){if(a.bindRenderbuffer(a.RENDERBUFFER,C),b.depthBuffer){const H=b.depthTexture,X=H&&H.isDepthTexture?H.type:null,ne=A(b.stencilBuffer,X),oe=b.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;Ot(b)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Et(b),ne,b.width,b.height):z?a.renderbufferStorageMultisample(a.RENDERBUFFER,Et(b),ne,b.width,b.height):a.renderbufferStorage(a.RENDERBUFFER,ne,b.width,b.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,oe,a.RENDERBUFFER,C)}else{const H=b.textures;for(let X=0;X<H.length;X++){const ne=H[X],oe=s.convert(ne.format,ne.colorSpace),q=s.convert(ne.type),Z=w(ne.internalFormat,oe,q,ne.normalized,ne.colorSpace);Ot(b)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Et(b),Z,b.width,b.height):z?a.renderbufferStorageMultisample(a.RENDERBUFFER,Et(b),Z,b.width,b.height):a.renderbufferStorage(a.RENDERBUFFER,Z,b.width,b.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function je(C,b,z){const H=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(a.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const X=i.get(b.depthTexture);if(X.__renderTarget=b,(!X.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),H){if(X.__webglInit===void 0&&(X.__webglInit=!0,b.depthTexture.addEventListener("dispose",E)),X.__webglTexture===void 0){X.__webglTexture=a.createTexture(),t.bindTexture(a.TEXTURE_CUBE_MAP,X.__webglTexture),it(a.TEXTURE_CUBE_MAP,b.depthTexture);const le=s.convert(b.depthTexture.format),Ee=s.convert(b.depthTexture.type);let ue;b.depthTexture.format===xn?ue=a.DEPTH_COMPONENT24:b.depthTexture.format===es&&(ue=a.DEPTH24_STENCIL8);for(let he=0;he<6;he++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ue,b.width,b.height,0,le,Ee,null)}}else Y(b.depthTexture,0);const ne=X.__webglTexture,oe=Et(b),q=H?a.TEXTURE_CUBE_MAP_POSITIVE_X+z:a.TEXTURE_2D,Z=b.depthTexture.format===es?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(b.depthTexture.format===xn)Ot(b)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,Z,q,ne,0,oe):a.framebufferTexture2D(a.FRAMEBUFFER,Z,q,ne,0);else if(b.depthTexture.format===es)Ot(b)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,Z,q,ne,0,oe):a.framebufferTexture2D(a.FRAMEBUFFER,Z,q,ne,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ut(C){const b=i.get(C),z=C.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==C.depthTexture){const H=C.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),H){const X=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,H.removeEventListener("dispose",X)};H.addEventListener("dispose",X),b.__depthDisposeCallback=X}b.__boundDepthTexture=H}if(C.depthTexture&&!b.__autoAllocateDepthBuffer)if(z)for(let H=0;H<6;H++)je(b.__webglFramebuffer[H],C,H);else{const H=C.texture.mipmaps;H&&H.length>0?je(b.__webglFramebuffer[0],C,0):je(b.__webglFramebuffer,C,0)}else if(z){b.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(t.bindFramebuffer(a.FRAMEBUFFER,b.__webglFramebuffer[H]),b.__webglDepthbuffer[H]===void 0)b.__webglDepthbuffer[H]=a.createRenderbuffer(),Ft(b.__webglDepthbuffer[H],C,!1);else{const X=C.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ne=b.__webglDepthbuffer[H];a.bindRenderbuffer(a.RENDERBUFFER,ne),a.framebufferRenderbuffer(a.FRAMEBUFFER,X,a.RENDERBUFFER,ne)}}else{const H=C.texture.mipmaps;if(H&&H.length>0?t.bindFramebuffer(a.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(a.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=a.createRenderbuffer(),Ft(b.__webglDepthbuffer,C,!1);else{const X=C.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ne=b.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,ne),a.framebufferRenderbuffer(a.FRAMEBUFFER,X,a.RENDERBUFFER,ne)}}t.bindFramebuffer(a.FRAMEBUFFER,null)}function nt(C,b,z){const H=i.get(C);b!==void 0&&De(H.__webglFramebuffer,C,C.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),z!==void 0&&ut(C)}function Qe(C){const b=C.texture,z=i.get(C),H=i.get(b);C.addEventListener("dispose",x);const X=C.textures,ne=C.isWebGLCubeRenderTarget===!0,oe=X.length>1;if(oe||(H.__webglTexture===void 0&&(H.__webglTexture=a.createTexture()),H.__version=b.version,r.memory.textures++),ne){z.__webglFramebuffer=[];for(let q=0;q<6;q++)if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer[q]=[];for(let Z=0;Z<b.mipmaps.length;Z++)z.__webglFramebuffer[q][Z]=a.createFramebuffer()}else z.__webglFramebuffer[q]=a.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer=[];for(let q=0;q<b.mipmaps.length;q++)z.__webglFramebuffer[q]=a.createFramebuffer()}else z.__webglFramebuffer=a.createFramebuffer();if(oe)for(let q=0,Z=X.length;q<Z;q++){const le=i.get(X[q]);le.__webglTexture===void 0&&(le.__webglTexture=a.createTexture(),r.memory.textures++)}if(C.samples>0&&Ot(C)===!1){z.__webglMultisampledFramebuffer=a.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(a.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let q=0;q<X.length;q++){const Z=X[q];z.__webglColorRenderbuffer[q]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,z.__webglColorRenderbuffer[q]);const le=s.convert(Z.format,Z.colorSpace),Ee=s.convert(Z.type),ue=w(Z.internalFormat,le,Ee,Z.normalized,Z.colorSpace,C.isXRRenderTarget===!0),he=Et(C);a.renderbufferStorageMultisample(a.RENDERBUFFER,he,ue,C.width,C.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+q,a.RENDERBUFFER,z.__webglColorRenderbuffer[q])}a.bindRenderbuffer(a.RENDERBUFFER,null),C.depthBuffer&&(z.__webglDepthRenderbuffer=a.createRenderbuffer(),Ft(z.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(a.FRAMEBUFFER,null)}}if(ne){t.bindTexture(a.TEXTURE_CUBE_MAP,H.__webglTexture),it(a.TEXTURE_CUBE_MAP,b);for(let q=0;q<6;q++)if(b.mipmaps&&b.mipmaps.length>0)for(let Z=0;Z<b.mipmaps.length;Z++)De(z.__webglFramebuffer[q][Z],C,b,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+q,Z);else De(z.__webglFramebuffer[q],C,b,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);p(b)&&M(a.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){for(let q=0,Z=X.length;q<Z;q++){const le=X[q],Ee=i.get(le);let ue=a.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ue=C.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(ue,Ee.__webglTexture),it(ue,le),De(z.__webglFramebuffer,C,le,a.COLOR_ATTACHMENT0+q,ue,0),p(le)&&M(ue)}t.unbindTexture()}else{let q=a.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(q=C.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(q,H.__webglTexture),it(q,b),b.mipmaps&&b.mipmaps.length>0)for(let Z=0;Z<b.mipmaps.length;Z++)De(z.__webglFramebuffer[Z],C,b,a.COLOR_ATTACHMENT0,q,Z);else De(z.__webglFramebuffer,C,b,a.COLOR_ATTACHMENT0,q,0);p(b)&&M(q),t.unbindTexture()}C.depthBuffer&&ut(C)}function Nt(C){const b=C.textures;for(let z=0,H=b.length;z<H;z++){const X=b[z];if(p(X)){const ne=T(C),oe=i.get(X).__webglTexture;t.bindTexture(ne,oe),M(ne),t.unbindTexture()}}}const Ht=[],qt=[];function Yt(C){if(C.samples>0){if(Ot(C)===!1){const b=C.textures,z=C.width,H=C.height;let X=a.COLOR_BUFFER_BIT;const ne=C.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,oe=i.get(C),q=b.length>1;if(q)for(let le=0;le<b.length;le++)t.bindFramebuffer(a.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+le,a.RENDERBUFFER,null),t.bindFramebuffer(a.FRAMEBUFFER,oe.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+le,a.TEXTURE_2D,null,0);t.bindFramebuffer(a.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer);const Z=C.texture.mipmaps;Z&&Z.length>0?t.bindFramebuffer(a.DRAW_FRAMEBUFFER,oe.__webglFramebuffer[0]):t.bindFramebuffer(a.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let le=0;le<b.length;le++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(X|=a.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(X|=a.STENCIL_BUFFER_BIT)),q){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,oe.__webglColorRenderbuffer[le]);const Ee=i.get(b[le]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Ee,0)}a.blitFramebuffer(0,0,z,H,0,0,z,H,X,a.NEAREST),l===!0&&(Ht.length=0,qt.length=0,Ht.push(a.COLOR_ATTACHMENT0+le),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Ht.push(ne),qt.push(ne),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,qt)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,Ht))}if(t.bindFramebuffer(a.READ_FRAMEBUFFER,null),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),q)for(let le=0;le<b.length;le++){t.bindFramebuffer(a.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+le,a.RENDERBUFFER,oe.__webglColorRenderbuffer[le]);const Ee=i.get(b[le]).__webglTexture;t.bindFramebuffer(a.FRAMEBUFFER,oe.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+le,a.TEXTURE_2D,Ee,0)}t.bindFramebuffer(a.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const b=C.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[b])}}}function Et(C){return Math.min(n.maxSamples,C.samples)}function Ot(C){const b=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function D(C){const b=r.render.frame;c.get(C)!==b&&(c.set(C,b),C.update())}function pi(C,b){const z=C.colorSpace,H=C.format,X=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||z!==io&&z!==Cn&&(Ze.getTransfer(z)===at?(H!==Gi||X!==Ii)&&ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Je("WebGLTextures: Unsupported texture color space:",z)),b}function rt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(h.width=C.naturalWidth||C.width,h.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(h.width=C.displayWidth,h.height=C.displayHeight):(h.width=C.width,h.height=C.height),h}this.allocateTextureUnit=V,this.resetTextureUnits=W,this.getTextureUnits=$,this.setTextureUnits=N,this.setTexture2D=Y,this.setTexture2DArray=ee,this.setTexture3D=ae,this.setTextureCube=de,this.rebindTextures=nt,this.setupRenderTarget=Qe,this.updateRenderTargetMipmap=Nt,this.updateMultisampleRenderTarget=Yt,this.setupDepthRenderbuffer=ut,this.setupFrameBufferTexture=De,this.useMultisampledRTT=Ot,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function gb(a,e){function t(i,n=Cn){let s;const r=Ze.getTransfer(n);if(i===Ii)return a.UNSIGNED_BYTE;if(i===$h)return a.UNSIGNED_SHORT_4_4_4_4;if(i===jh)return a.UNSIGNED_SHORT_5_5_5_1;if(i===ef)return a.UNSIGNED_INT_5_9_9_9_REV;if(i===tf)return a.UNSIGNED_INT_10F_11F_11F_REV;if(i===Ju)return a.BYTE;if(i===Qu)return a.SHORT;if(i===Pa)return a.UNSIGNED_SHORT;if(i===qh)return a.INT;if(i===nn)return a.UNSIGNED_INT;if(i===Hi)return a.FLOAT;if(i===Si)return a.HALF_FLOAT;if(i===nf)return a.ALPHA;if(i===sf)return a.RGB;if(i===Gi)return a.RGBA;if(i===xn)return a.DEPTH_COMPONENT;if(i===es)return a.DEPTH_STENCIL;if(i===Zh)return a.RED;if(i===Yh)return a.RED_INTEGER;if(i===ns)return a.RG;if(i===Kh)return a.RG_INTEGER;if(i===Jh)return a.RGBA_INTEGER;if(i===Vr||i===Wr||i===Xr||i===qr)if(r===at)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Vr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Wr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Xr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===qr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Vr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Wr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Xr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===qr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Xl||i===ql||i===$l||i===jl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Xl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ql)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===$l)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===jl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Zl||i===Yl||i===Kl||i===Jl||i===Ql||i===eo||i===eh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Zl||i===Yl)return r===at?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Kl)return r===at?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Jl)return s.COMPRESSED_R11_EAC;if(i===Ql)return s.COMPRESSED_SIGNED_R11_EAC;if(i===eo)return s.COMPRESSED_RG11_EAC;if(i===eh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===th||i===ih||i===nh||i===sh||i===ah||i===rh||i===oh||i===lh||i===hh||i===ch||i===dh||i===uh||i===fh||i===ph)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===th)return r===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ih)return r===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===nh)return r===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===sh)return r===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ah)return r===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===rh)return r===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===oh)return r===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===lh)return r===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===hh)return r===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ch)return r===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===dh)return r===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===uh)return r===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===fh)return r===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ph)return r===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===mh||i===gh||i===vh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===mh)return r===at?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===gh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===vh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===xh||i===bh||i===to||i===yh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===xh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===bh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===to)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===yh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ia?a.UNSIGNED_INT_24_8:a[i]!==void 0?a[i]:null}return{convert:t}}const vb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xb=`
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

}`;class bb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new vf(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Be({vertexShader:vb,fragmentShader:xb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Lt(new tt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yb extends rs{constructor(e,t){super();const i=this;let n=null,s=1,r=null,o="local-floor",l=1,h=null,c=null,d=null,u=null,f=null,m=null;const v=typeof XRWebGLBinding<"u",g=new bb,p={},M=t.getContextAttributes();let T=null,w=null;const A=[],_=[],E=new ve;let x=null;const y=new Ri;y.viewport=new It;const R=new Ri;R.viewport=new It;const P=[y,R],F=new Cm;let W=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let re=A[K];return re===void 0&&(re=new Uo,A[K]=re),re.getTargetRaySpace()},this.getControllerGrip=function(K){let re=A[K];return re===void 0&&(re=new Uo,A[K]=re),re.getGripSpace()},this.getHand=function(K){let re=A[K];return re===void 0&&(re=new Uo,A[K]=re),re.getHandSpace()};function N(K){const re=_.indexOf(K.inputSource);if(re===-1)return;const te=A[re];te!==void 0&&(te.update(K.inputSource,K.frame,h||r),te.dispatchEvent({type:K.type,data:K.inputSource}))}function V(){n.removeEventListener("select",N),n.removeEventListener("selectstart",N),n.removeEventListener("selectend",N),n.removeEventListener("squeeze",N),n.removeEventListener("squeezestart",N),n.removeEventListener("squeezeend",N),n.removeEventListener("end",V),n.removeEventListener("inputsourceschange",k);for(let K=0;K<A.length;K++){const re=_[K];re!==null&&(_[K]=null,A[K].disconnect(re))}W=null,$=null,g.reset();for(const K in p)delete p[K];e.setRenderTarget(T),f=null,u=null,d=null,n=null,w=null,it.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||r},this.setReferenceSpace=function(K){h=K},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(n,t)),d},this.getFrame=function(){return m},this.getSession=function(){return n},this.setSession=async function(K){if(n=K,n!==null){if(T=e.getRenderTarget(),n.addEventListener("select",N),n.addEventListener("selectstart",N),n.addEventListener("selectend",N),n.addEventListener("squeeze",N),n.addEventListener("squeezestart",N),n.addEventListener("squeezeend",N),n.addEventListener("end",V),n.addEventListener("inputsourceschange",k),M.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(E),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let te=null,ze=null,He=null;M.depth&&(He=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=M.stencil?es:xn,ze=M.stencil?Ia:nn);const De={colorFormat:t.RGBA8,depthFormat:He,scaleFactor:s};d=this.getBinding(),u=d.createProjectionLayer(De),n.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),w=new xi(u.textureWidth,u.textureHeight,{format:Gi,type:Ii,depthTexture:new Zs(u.textureWidth,u.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const te={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(n,t,te),n.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),w=new xi(f.framebufferWidth,f.framebufferHeight,{format:Gi,type:Ii,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),h=null,r=await n.requestReferenceSpace(o),it.setContext(n),it.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function k(K){for(let re=0;re<K.removed.length;re++){const te=K.removed[re],ze=_.indexOf(te);ze>=0&&(_[ze]=null,A[ze].disconnect(te))}for(let re=0;re<K.added.length;re++){const te=K.added[re];let ze=_.indexOf(te);if(ze===-1){for(let De=0;De<A.length;De++)if(De>=_.length){_.push(te),ze=De;break}else if(_[De]===null){_[De]=te,ze=De;break}if(ze===-1)break}const He=A[ze];He&&He.connect(te)}}const Y=new I,ee=new I;function ae(K,re,te){Y.setFromMatrixPosition(re.matrixWorld),ee.setFromMatrixPosition(te.matrixWorld);const ze=Y.distanceTo(ee),He=re.projectionMatrix.elements,De=te.projectionMatrix.elements,Ft=He[14]/(He[10]-1),je=He[14]/(He[10]+1),ut=(He[9]+1)/He[5],nt=(He[9]-1)/He[5],Qe=(He[8]-1)/He[0],Nt=(De[8]+1)/De[0],Ht=Ft*Qe,qt=Ft*Nt,Yt=ze/(-Qe+Nt),Et=Yt*-Qe;if(re.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Et),K.translateZ(Yt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),He[10]===-1)K.projectionMatrix.copy(re.projectionMatrix),K.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const Ot=Ft+Yt,D=je+Yt,pi=Ht-Et,rt=qt+(ze-Et),C=ut*je/D*Ot,b=nt*je/D*Ot;K.projectionMatrix.makePerspective(pi,rt,C,b,Ot,D),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function de(K,re){re===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(re.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(n===null)return;let re=K.near,te=K.far;g.texture!==null&&(g.depthNear>0&&(re=g.depthNear),g.depthFar>0&&(te=g.depthFar)),F.near=R.near=y.near=re,F.far=R.far=y.far=te,(W!==F.near||$!==F.far)&&(n.updateRenderState({depthNear:F.near,depthFar:F.far}),W=F.near,$=F.far),F.layers.mask=K.layers.mask|6,y.layers.mask=F.layers.mask&-5,R.layers.mask=F.layers.mask&-3;const ze=K.parent,He=F.cameras;de(F,ze);for(let De=0;De<He.length;De++)de(He[De],ze);He.length===2?ae(F,y,R):F.projectionMatrix.copy(y.projectionMatrix),xe(K,F,ze)};function xe(K,re,te){te===null?K.matrix.copy(re.matrixWorld):(K.matrix.copy(te.matrixWorld),K.matrix.invert(),K.matrix.multiply(re.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(re.projectionMatrix),K.projectionMatrixInverse.copy(re.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=wh*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(K){l=K,u!==null&&(u.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(F)},this.getCameraTexture=function(K){return p[K]};let Ke=null;function Tt(K,re){if(c=re.getViewerPose(h||r),m=re,c!==null){const te=c.views;f!==null&&(e.setRenderTargetFramebuffer(w,f.framebuffer),e.setRenderTarget(w));let ze=!1;te.length!==F.cameras.length&&(F.cameras.length=0,ze=!0);for(let je=0;je<te.length;je++){const ut=te[je];let nt=null;if(f!==null)nt=f.getViewport(ut);else{const Nt=d.getViewSubImage(u,ut);nt=Nt.viewport,je===0&&(e.setRenderTargetTextures(w,Nt.colorTexture,Nt.depthStencilTexture),e.setRenderTarget(w))}let Qe=P[je];Qe===void 0&&(Qe=new Ri,Qe.layers.enable(je),Qe.viewport=new It,P[je]=Qe),Qe.matrix.fromArray(ut.transform.matrix),Qe.matrix.decompose(Qe.position,Qe.quaternion,Qe.scale),Qe.projectionMatrix.fromArray(ut.projectionMatrix),Qe.projectionMatrixInverse.copy(Qe.projectionMatrix).invert(),Qe.viewport.set(nt.x,nt.y,nt.width,nt.height),je===0&&(F.matrix.copy(Qe.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),ze===!0&&F.cameras.push(Qe)}const He=n.enabledFeatures;if(He&&He.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&v){d=i.getBinding();const je=d.getDepthInformation(te[0]);je&&je.isValid&&je.texture&&g.init(je,n.renderState)}if(He&&He.includes("camera-access")&&v){e.state.unbindTexture(),d=i.getBinding();for(let je=0;je<te.length;je++){const ut=te[je].camera;if(ut){let nt=p[ut];nt||(nt=new vf,p[ut]=nt);const Qe=d.getCameraImage(ut);nt.sourceTexture=Qe}}}}for(let te=0;te<A.length;te++){const ze=_[te],He=A[te];ze!==null&&He!==void 0&&He.update(ze,re,h||r)}Ke&&Ke(K,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),m=null}const it=new wf;it.setAnimationLoop(Tt),this.setAnimationLoop=function(K){Ke=K},this.dispose=function(){}}}const _b=new mt,Rf=new Oe;Rf.set(-1,0,0,0,1,0,0,0,1);function wb(a,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,xf(a)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function n(g,p,M,T,w){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(g,p):p.isMeshLambertMaterial?(s(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(g,p),d(g,p)):p.isMeshPhongMaterial?(s(g,p),c(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(g,p),u(g,p),p.isMeshPhysicalMaterial&&f(g,p,w)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),v(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(r(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,M,T):p.isSpriteMaterial?h(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===vi&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===vi&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const M=e.get(p),T=M.envMap,w=M.envMapRotation;T&&(g.envMap.value=T,g.envMapRotation.value.setFromMatrix4(_b.makeRotationFromEuler(w)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Rf),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function r(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,M,T){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*M,g.scale.value=T*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,M){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===vi&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){const M=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Mb(a,e,t,i){let n={},s={},r=[];const o=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,A){const _=A.program;i.uniformBlockBinding(w,_)}function h(w,A){let _=n[w.id];_===void 0&&(g(w),_=c(w),n[w.id]=_,w.addEventListener("dispose",M));const E=A.program;i.updateUBOMapping(w,E);const x=e.render.frame;s[w.id]!==x&&(u(w),s[w.id]=x)}function c(w){const A=d();w.__bindingPointIndex=A;const _=a.createBuffer(),E=w.__size,x=w.usage;return a.bindBuffer(a.UNIFORM_BUFFER,_),a.bufferData(a.UNIFORM_BUFFER,E,x),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,A,_),_}function d(){for(let w=0;w<o;w++)if(r.indexOf(w)===-1)return r.push(w),w;return Je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(w){const A=n[w.id],_=w.uniforms,E=w.__cache;a.bindBuffer(a.UNIFORM_BUFFER,A);for(let x=0,y=_.length;x<y;x++){const R=_[x];if(Array.isArray(R))for(let P=0,F=R.length;P<F;P++)f(R[P],x,P,E);else f(R,x,0,E)}a.bindBuffer(a.UNIFORM_BUFFER,null)}function f(w,A,_,E){if(v(w,A,_,E)===!0){const x=w.__offset,y=w.value;if(Array.isArray(y)){let R=0;for(let P=0;P<y.length;P++){const F=y[P],W=p(F);m(F,w.__data,R),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(R+=W.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(y,w.__data,0);a.bufferSubData(a.UNIFORM_BUFFER,x,w.__data)}}function m(w,A,_){typeof w=="number"||typeof w=="boolean"?A[0]=w:w.isMatrix3?(A[0]=w.elements[0],A[1]=w.elements[1],A[2]=w.elements[2],A[3]=0,A[4]=w.elements[3],A[5]=w.elements[4],A[6]=w.elements[5],A[7]=0,A[8]=w.elements[6],A[9]=w.elements[7],A[10]=w.elements[8],A[11]=0):ArrayBuffer.isView(w)?A.set(new w.constructor(w.buffer,w.byteOffset,A.length)):w.toArray(A,_)}function v(w,A,_,E){const x=w.value,y=A+"_"+_;if(E[y]===void 0)return typeof x=="number"||typeof x=="boolean"?E[y]=x:ArrayBuffer.isView(x)?E[y]=x.slice():E[y]=x.clone(),!0;{const R=E[y];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return E[y]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(R.equals(x)===!1)return R.copy(x),!0}}return!1}function g(w){const A=w.uniforms;let _=0;const E=16;for(let y=0,R=A.length;y<R;y++){const P=Array.isArray(A[y])?A[y]:[A[y]];for(let F=0,W=P.length;F<W;F++){const $=P[F],N=Array.isArray($.value)?$.value:[$.value];for(let V=0,k=N.length;V<k;V++){const Y=N[V],ee=p(Y),ae=_%E,de=ae%ee.boundary,xe=ae+de;_+=de,xe!==0&&E-xe<ee.storage&&(_+=E-xe),$.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=_,_+=ee.storage}}}const x=_%E;return x>0&&(_+=E-x),w.__size=_,w.__cache={},this}function p(w){const A={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(A.boundary=4,A.storage=4):w.isVector2?(A.boundary=8,A.storage=8):w.isVector3||w.isColor?(A.boundary=16,A.storage=12):w.isVector4?(A.boundary=16,A.storage=16):w.isMatrix3?(A.boundary=48,A.storage=48):w.isMatrix4?(A.boundary=64,A.storage=64):w.isTexture?ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(A.boundary=16,A.storage=w.byteLength):ke("WebGLRenderer: Unsupported uniform value type.",w),A}function M(w){const A=w.target;A.removeEventListener("dispose",M);const _=r.indexOf(A.__bindingPointIndex);r.splice(_,1),a.deleteBuffer(n[A.id]),delete n[A.id],delete s[A.id]}function T(){for(const w in n)a.deleteBuffer(n[w]);r=[],n={},s={}}return{bind:l,update:h,dispose:T}}const Sb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let $i=null;function Ab(){return $i===null&&($i=new ff(Sb,16,16,ns,Si),$i.name="DFG_LUT",$i.minFilter=li,$i.magFilter=li,$i.wrapS=Bi,$i.wrapT=Bi,$i.generateMipmaps=!1,$i.needsUpdate=!0),$i}class Tb{constructor(e={}){const{canvas:t=Vp(),context:i=null,depth:n=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Ii}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=r;const v=f,g=new Set([Jh,Kh,Yh]),p=new Set([Ii,nn,Pa,Ia,$h,jh]),M=new Uint32Array(4),T=new Int32Array(4),w=new I;let A=null,_=null;const E=[],x=[];let y=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=tn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let P=!1,F=null,W=null,$=null,N=null;this._outputColorSpace=Mt;let V=0,k=0,Y=null,ee=-1,ae=null;const de=new It,xe=new It;let Ke=null;const Tt=new Ne(0);let it=0,K=t.width,re=t.height,te=1,ze=null,He=null;const De=new It(0,0,K,re),Ft=new It(0,0,K,re);let je=!1;const ut=new pf;let nt=!1,Qe=!1;const Nt=new mt,Ht=new I,qt=new It,Yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Et=!1;function Ot(){return Y===null?te:1}let D=i;function pi(S,U){return t.getContext(S,U)}try{const S={alpha:!0,depth:n,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Oh}`),t.addEventListener("webglcontextlost",Ct,!1),t.addEventListener("webglcontextrestored",gt,!1),t.addEventListener("webglcontextcreationerror",Vi,!1),D===null){const U="webgl2";if(D=pi(U,S),D===null)throw pi(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(S){throw Je("WebGLRenderer: "+S.message),S}let rt,C,b,z,H,X,ne,oe,q,Z,le,Ee,ue,he,Le,Ue,Ge,L,se,j,ce,ge,Q;function Te(){rt=new Av(D),rt.init(),ce=new gb(D,rt),C=new vv(D,rt,e,ce),b=new pb(D,rt),C.reversedDepthBuffer&&u&&b.buffers.depth.setReversed(!0),W=D.createFramebuffer(),$=D.createFramebuffer(),N=D.createFramebuffer(),z=new Cv(D),H=new eb,X=new mb(D,rt,b,H,C,ce,z),ne=new Sv(R),oe=new Lm(D),ge=new mv(D,oe),q=new Tv(D,oe,z,ge),Z=new Pv(D,q,oe,ge,z),L=new Rv(D,C,X),Le=new xv(H),le=new Qx(R,ne,rt,C,ge,Le),Ee=new wb(R,H),ue=new ib,he=new lb(rt),Ge=new pv(R,ne,b,Z,m,l),Ue=new fb(R,Z,C),Q=new Mb(D,z,C,b),se=new gv(D,rt,z),j=new Ev(D,rt,z),z.programs=le.programs,R.capabilities=C,R.extensions=rt,R.properties=H,R.renderLists=ue,R.shadowMap=Ue,R.state=b,R.info=z}Te(),v!==Ii&&(y=new Lv(v,t.width,t.height,o,n,s));const Se=new yb(R,D);this.xr=Se,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const S=rt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=rt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(S){S!==void 0&&(te=S,this.setSize(K,re,!1))},this.getSize=function(S){return S.set(K,re)},this.setSize=function(S,U,G=!0){if(Se.isPresenting){ke("WebGLRenderer: Can't change size while VR device is presenting.");return}K=S,re=U,t.width=Math.floor(S*te),t.height=Math.floor(U*te),G===!0&&(t.style.width=S+"px",t.style.height=U+"px"),y!==null&&y.setSize(t.width,t.height),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(K*te,re*te).floor()},this.setDrawingBufferSize=function(S,U,G){K=S,re=U,te=G,t.width=Math.floor(S*G),t.height=Math.floor(U*G),this.setViewport(0,0,S,U)},this.setEffects=function(S){if(v===Ii){Je("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let U=0;U<S.length;U++)if(S[U].isOutputPass===!0){ke("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}y.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(de)},this.getViewport=function(S){return S.copy(De)},this.setViewport=function(S,U,G,O){S.isVector4?De.set(S.x,S.y,S.z,S.w):De.set(S,U,G,O),b.viewport(de.copy(De).multiplyScalar(te).round())},this.getScissor=function(S){return S.copy(Ft)},this.setScissor=function(S,U,G,O){S.isVector4?Ft.set(S.x,S.y,S.z,S.w):Ft.set(S,U,G,O),b.scissor(xe.copy(Ft).multiplyScalar(te).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(S){b.setScissorTest(je=S)},this.setOpaqueSort=function(S){ze=S},this.setTransparentSort=function(S){He=S},this.getClearColor=function(S){return S.copy(Ge.getClearColor())},this.setClearColor=function(){Ge.setClearColor(...arguments)},this.getClearAlpha=function(){return Ge.getClearAlpha()},this.setClearAlpha=function(){Ge.setClearAlpha(...arguments)},this.clear=function(S=!0,U=!0,G=!0){let O=0;if(S){let B=!1;if(Y!==null){const me=Y.texture.format;B=g.has(me)}if(B){const me=Y.texture.type,ye=p.has(me),pe=Ge.getClearColor(),Ae=Ge.getClearAlpha(),Ce=pe.r,Ve=pe.g,Xe=pe.b;ye?(M[0]=Ce,M[1]=Ve,M[2]=Xe,M[3]=Ae,D.clearBufferuiv(D.COLOR,0,M)):(T[0]=Ce,T[1]=Ve,T[2]=Xe,T[3]=Ae,D.clearBufferiv(D.COLOR,0,T))}else O|=D.COLOR_BUFFER_BIT}U&&(O|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(O|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O!==0&&D.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),F=S},this.dispose=function(){t.removeEventListener("webglcontextlost",Ct,!1),t.removeEventListener("webglcontextrestored",gt,!1),t.removeEventListener("webglcontextcreationerror",Vi,!1),Ge.dispose(),ue.dispose(),he.dispose(),H.dispose(),ne.dispose(),Z.dispose(),ge.dispose(),Q.dispose(),le.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",Tc),Se.removeEventListener("sessionend",Ec),Un.stop()};function Ct(S){S.preventDefault(),ao("WebGLRenderer: Context Lost."),P=!0}function gt(){ao("WebGLRenderer: Context Restored."),P=!1;const S=z.autoReset,U=Ue.enabled,G=Ue.autoUpdate,O=Ue.needsUpdate,B=Ue.type;Te(),z.autoReset=S,Ue.enabled=U,Ue.autoUpdate=G,Ue.needsUpdate=O,Ue.type=B}function Vi(S){Je("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Wi(S){const U=S.target;U.removeEventListener("dispose",Wi),sp(U)}function sp(S){ap(S),H.remove(S)}function ap(S){const U=H.get(S).programs;U!==void 0&&(U.forEach(function(G){le.releaseProgram(G)}),S.isShaderMaterial&&le.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,G,O,B,me){U===null&&(U=Yt);const ye=B.isMesh&&B.matrixWorld.determinantAffine()<0,pe=lp(S,U,G,O,B);b.setMaterial(O,ye);let Ae=G.index,Ce=1;if(O.wireframe===!0){if(Ae=q.getWireframeAttribute(G),Ae===void 0)return;Ce=2}const Ve=G.drawRange,Xe=G.attributes.position;let Ie=Ve.start*Ce,lt=(Ve.start+Ve.count)*Ce;me!==null&&(Ie=Math.max(Ie,me.start*Ce),lt=Math.min(lt,(me.start+me.count)*Ce)),Ae!==null?(Ie=Math.max(Ie,0),lt=Math.min(lt,Ae.count)):Xe!=null&&(Ie=Math.max(Ie,0),lt=Math.min(lt,Xe.count));const Dt=lt-Ie;if(Dt<0||Dt===1/0)return;ge.setup(B,O,pe,G,Ae);let Rt,ft=se;if(Ae!==null&&(Rt=oe.get(Ae),ft=j,ft.setIndex(Rt)),B.isMesh)O.wireframe===!0?(b.setLineWidth(O.wireframeLinewidth*Ot()),ft.setMode(D.LINES)):ft.setMode(D.TRIANGLES);else if(B.isLine){let ti=O.linewidth;ti===void 0&&(ti=1),b.setLineWidth(ti*Ot()),B.isLineSegments?ft.setMode(D.LINES):B.isLineLoop?ft.setMode(D.LINE_LOOP):ft.setMode(D.LINE_STRIP)}else B.isPoints?ft.setMode(D.POINTS):B.isSprite&&ft.setMode(D.TRIANGLES);if(B.isBatchedMesh)if(rt.get("WEBGL_multi_draw"))ft.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const ti=B._multiDrawStarts,be=B._multiDrawCounts,bi=B._multiDrawCount,et=Ae?oe.get(Ae).bytesPerElement:1,Ti=H.get(O).currentProgram.getUniforms();for(let Xi=0;Xi<bi;Xi++)Ti.setValue(D,"_gl_DrawID",Xi),ft.render(ti[Xi]/et,be[Xi])}else if(B.isInstancedMesh)ft.renderInstances(Ie,Dt,B.count);else if(G.isInstancedBufferGeometry){const ti=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,be=Math.min(G.instanceCount,ti);ft.renderInstances(Ie,Dt,be)}else ft.render(Ie,Dt)};function Ac(S,U,G){S.transparent===!0&&S.side===ui&&S.forceSinglePass===!1?(S.side=vi,S.needsUpdate=!0,Wa(S,U,G),S.side=Fn,S.needsUpdate=!0,Wa(S,U,G),S.side=ui):Wa(S,U,G)}this.compile=function(S,U,G=null){G===null&&(G=S),_=he.get(G),_.init(U),x.push(_),G.traverseVisible(function(B){B.isLight&&B.layers.test(U.layers)&&(_.pushLight(B),B.castShadow&&_.pushShadow(B))}),S!==G&&S.traverseVisible(function(B){B.isLight&&B.layers.test(U.layers)&&(_.pushLight(B),B.castShadow&&_.pushShadow(B))}),_.setupLights();const O=new Set;return S.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const me=B.material;if(me)if(Array.isArray(me))for(let ye=0;ye<me.length;ye++){const pe=me[ye];Ac(pe,G,B),O.add(pe)}else Ac(me,G,B),O.add(me)}),_=x.pop(),O},this.compileAsync=function(S,U,G=null){const O=this.compile(S,U,G);return new Promise(B=>{function me(){if(O.forEach(function(ye){H.get(ye).currentProgram.isReady()&&O.delete(ye)}),O.size===0){B(S);return}setTimeout(me,10)}rt.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let Mo=null;function rp(S){Mo&&Mo(S)}function Tc(){Un.stop()}function Ec(){Un.start()}const Un=new wf;Un.setAnimationLoop(rp),typeof self<"u"&&Un.setContext(self),this.setAnimationLoop=function(S){Mo=S,Se.setAnimationLoop(S),S===null?Un.stop():Un.start()},Se.addEventListener("sessionstart",Tc),Se.addEventListener("sessionend",Ec),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){Je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;F!==null&&F.renderStart(S,U);const G=Se.enabled===!0&&Se.isPresenting===!0,O=y!==null&&(Y===null||G)&&y.begin(R,Y);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(y===null||y.isCompositing()===!1)&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(U),U=Se.getCamera()),S.isScene===!0&&S.onBeforeRender(R,S,U,Y),_=he.get(S,x.length),_.init(U),_.state.textureUnits=X.getTextureUnits(),x.push(_),Nt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),ut.setFromProjectionMatrix(Nt,Ji,U.reversedDepth),Qe=this.localClippingEnabled,nt=Le.init(this.clippingPlanes,Qe),A=ue.get(S,E.length),A.init(),E.push(A),Se.enabled===!0&&Se.isPresenting===!0){const ye=R.xr.getDepthSensingMesh();ye!==null&&So(ye,U,-1/0,R.sortObjects)}So(S,U,0,R.sortObjects),A.finish(),R.sortObjects===!0&&A.sort(ze,He,U.reversedDepth),Et=Se.enabled===!1||Se.isPresenting===!1||Se.hasDepthSensing()===!1,Et&&Ge.addToRenderList(A,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),nt===!0&&Le.beginShadows();const B=_.state.shadowsArray;if(Ue.render(B,S,U),nt===!0&&Le.endShadows(),(O&&y.hasRenderPass())===!1){const ye=A.opaque,pe=A.transmissive;if(_.setupLights(),U.isArrayCamera){const Ae=U.cameras;if(pe.length>0)for(let Ce=0,Ve=Ae.length;Ce<Ve;Ce++){const Xe=Ae[Ce];Rc(ye,pe,S,Xe)}Et&&Ge.render(S);for(let Ce=0,Ve=Ae.length;Ce<Ve;Ce++){const Xe=Ae[Ce];Cc(A,S,Xe,Xe.viewport)}}else pe.length>0&&Rc(ye,pe,S,U),Et&&Ge.render(S),Cc(A,S,U)}Y!==null&&k===0&&(X.updateMultisampleRenderTarget(Y),X.updateRenderTargetMipmap(Y)),O&&y.end(R),S.isScene===!0&&S.onAfterRender(R,S,U),ge.resetDefaultState(),ee=-1,ae=null,x.pop(),x.length>0?(_=x[x.length-1],X.setTextureUnits(_.state.textureUnits),nt===!0&&Le.setGlobalState(R.clippingPlanes,_.state.camera)):_=null,E.pop(),E.length>0?A=E[E.length-1]:A=null,F!==null&&F.renderEnd()};function So(S,U,G,O){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)G=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLightProbeGrid)_.pushLightProbeGrid(S);else if(S.isLight)_.pushLight(S),S.castShadow&&_.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||ut.intersectsSprite(S)){O&&qt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Nt);const ye=Z.update(S),pe=S.material;pe.visible&&A.push(S,ye,pe,G,qt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||ut.intersectsObject(S))){const ye=Z.update(S),pe=S.material;if(O&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),qt.copy(S.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),qt.copy(ye.boundingSphere.center)),qt.applyMatrix4(S.matrixWorld).applyMatrix4(Nt)),Array.isArray(pe)){const Ae=ye.groups;for(let Ce=0,Ve=Ae.length;Ce<Ve;Ce++){const Xe=Ae[Ce],Ie=pe[Xe.materialIndex];Ie&&Ie.visible&&A.push(S,ye,Ie,G,qt.z,Xe)}}else pe.visible&&A.push(S,ye,pe,G,qt.z,null)}}const me=S.children;for(let ye=0,pe=me.length;ye<pe;ye++)So(me[ye],U,G,O)}function Cc(S,U,G,O){const{opaque:B,transmissive:me,transparent:ye}=S;_.setupLightsView(G),nt===!0&&Le.setGlobalState(R.clippingPlanes,G),O&&b.viewport(de.copy(O)),B.length>0&&Va(B,U,G),me.length>0&&Va(me,U,G),ye.length>0&&Va(ye,U,G),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function Rc(S,U,G,O){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(_.state.transmissionRenderTarget[O.id]===void 0){const Ie=rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float");_.state.transmissionRenderTarget[O.id]=new xi(1,1,{generateMipmaps:!0,type:Ie?Si:Ii,minFilter:Qn,samples:Math.max(4,C.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace})}const me=_.state.transmissionRenderTarget[O.id],ye=O.viewport||de;me.setSize(ye.z*R.transmissionResolutionScale,ye.w*R.transmissionResolutionScale);const pe=R.getRenderTarget(),Ae=R.getActiveCubeFace(),Ce=R.getActiveMipmapLevel();R.setRenderTarget(me),R.getClearColor(Tt),it=R.getClearAlpha(),it<1&&R.setClearColor(16777215,.5),R.clear(),Et&&Ge.render(G);const Ve=R.toneMapping;R.toneMapping=tn;const Xe=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),_.setupLightsView(O),nt===!0&&Le.setGlobalState(R.clippingPlanes,O),Va(S,G,O),X.updateMultisampleRenderTarget(me),X.updateRenderTargetMipmap(me),rt.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let lt=0,Dt=U.length;lt<Dt;lt++){const Rt=U[lt],{object:ft,geometry:ti,material:be,group:bi}=Rt;if(be.side===ui&&ft.layers.test(O.layers)){const et=be.side;be.side=vi,be.needsUpdate=!0,Pc(ft,G,O,ti,be,bi),be.side=et,be.needsUpdate=!0,Ie=!0}}Ie===!0&&(X.updateMultisampleRenderTarget(me),X.updateRenderTargetMipmap(me))}R.setRenderTarget(pe,Ae,Ce),R.setClearColor(Tt,it),Xe!==void 0&&(O.viewport=Xe),R.toneMapping=Ve}function Va(S,U,G){const O=U.isScene===!0?U.overrideMaterial:null;for(let B=0,me=S.length;B<me;B++){const ye=S[B],{object:pe,geometry:Ae,group:Ce}=ye;let Ve=ye.material;Ve.allowOverride===!0&&O!==null&&(Ve=O),pe.layers.test(G.layers)&&Pc(pe,U,G,Ae,Ve,Ce)}}function Pc(S,U,G,O,B,me){S.onBeforeRender(R,U,G,O,B,me),S.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),B.onBeforeRender(R,U,G,O,S,me),B.transparent===!0&&B.side===ui&&B.forceSinglePass===!1?(B.side=vi,B.needsUpdate=!0,R.renderBufferDirect(G,U,O,B,S,me),B.side=Fn,B.needsUpdate=!0,R.renderBufferDirect(G,U,O,B,S,me),B.side=ui):R.renderBufferDirect(G,U,O,B,S,me),S.onAfterRender(R,U,G,O,B,me)}function Wa(S,U,G){U.isScene!==!0&&(U=Yt);const O=H.get(S),B=_.state.lights,me=_.state.shadowsArray,ye=B.state.version,pe=le.getParameters(S,B.state,me,U,G,_.state.lightProbeGridArray),Ae=le.getProgramCacheKey(pe);let Ce=O.programs;O.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?U.environment:null,O.fog=U.fog;const Ve=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;O.envMap=ne.get(S.envMap||O.environment,Ve),O.envMapRotation=O.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,Ce===void 0&&(S.addEventListener("dispose",Wi),Ce=new Map,O.programs=Ce);let Xe=Ce.get(Ae);if(Xe!==void 0){if(O.currentProgram===Xe&&O.lightsStateVersion===ye)return Lc(S,pe),Xe}else pe.uniforms=le.getUniforms(S),F!==null&&S.isNodeMaterial&&F.build(S,G,pe),S.onBeforeCompile(pe,R),Xe=le.acquireProgram(pe,Ae),Ce.set(Ae,Xe),O.uniforms=pe.uniforms;const Ie=O.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ie.clippingPlanes=Le.uniform),Lc(S,pe),O.needsLights=cp(S),O.lightsStateVersion=ye,O.needsLights&&(Ie.ambientLightColor.value=B.state.ambient,Ie.lightProbe.value=B.state.probe,Ie.directionalLights.value=B.state.directional,Ie.directionalLightShadows.value=B.state.directionalShadow,Ie.spotLights.value=B.state.spot,Ie.spotLightShadows.value=B.state.spotShadow,Ie.rectAreaLights.value=B.state.rectArea,Ie.ltc_1.value=B.state.rectAreaLTC1,Ie.ltc_2.value=B.state.rectAreaLTC2,Ie.pointLights.value=B.state.point,Ie.pointLightShadows.value=B.state.pointShadow,Ie.hemisphereLights.value=B.state.hemi,Ie.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ie.spotLightMatrix.value=B.state.spotLightMatrix,Ie.spotLightMap.value=B.state.spotLightMap,Ie.pointShadowMatrix.value=B.state.pointShadowMatrix),O.lightProbeGrid=_.state.lightProbeGridArray.length>0,O.currentProgram=Xe,O.uniformsList=null,Xe}function Ic(S){if(S.uniformsList===null){const U=S.currentProgram.getUniforms();S.uniformsList=$r.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function Lc(S,U){const G=H.get(S);G.outputColorSpace=U.outputColorSpace,G.batching=U.batching,G.batchingColor=U.batchingColor,G.instancing=U.instancing,G.instancingColor=U.instancingColor,G.instancingMorph=U.instancingMorph,G.skinning=U.skinning,G.morphTargets=U.morphTargets,G.morphNormals=U.morphNormals,G.morphColors=U.morphColors,G.morphTargetsCount=U.morphTargetsCount,G.numClippingPlanes=U.numClippingPlanes,G.numIntersection=U.numClipIntersection,G.vertexAlphas=U.vertexAlphas,G.vertexTangents=U.vertexTangents,G.toneMapping=U.toneMapping}function op(S,U){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;w.setFromMatrixPosition(U.matrixWorld);for(let G=0,O=S.length;G<O;G++){const B=S[G];if(B.texture!==null&&B.boundingBox.containsPoint(w))return B}return null}function lp(S,U,G,O,B){U.isScene!==!0&&(U=Yt),X.resetTextureUnits();const me=U.fog,ye=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?U.environment:null,pe=Y===null?R.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Ze.workingColorSpace,Ae=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,Ce=ne.get(O.envMap||ye,Ae),Ve=O.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Xe=!!G.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Ie=!!G.morphAttributes.position,lt=!!G.morphAttributes.normal,Dt=!!G.morphAttributes.color;let Rt=tn;O.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Rt=R.toneMapping);const ft=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ti=ft!==void 0?ft.length:0,be=H.get(O),bi=_.state.lights;if(nt===!0&&(Qe===!0||S!==ae)){const vt=S===ae&&O.id===ee;Le.setState(O,S,vt)}let et=!1;O.version===be.__version?(be.needsLights&&be.lightsStateVersion!==bi.state.version||be.outputColorSpace!==pe||B.isBatchedMesh&&be.batching===!1||!B.isBatchedMesh&&be.batching===!0||B.isBatchedMesh&&be.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&be.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&be.instancing===!1||!B.isInstancedMesh&&be.instancing===!0||B.isSkinnedMesh&&be.skinning===!1||!B.isSkinnedMesh&&be.skinning===!0||B.isInstancedMesh&&be.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&be.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&be.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&be.instancingMorph===!1&&B.morphTexture!==null||be.envMap!==Ce||O.fog===!0&&be.fog!==me||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==Le.numPlanes||be.numIntersection!==Le.numIntersection)||be.vertexAlphas!==Ve||be.vertexTangents!==Xe||be.morphTargets!==Ie||be.morphNormals!==lt||be.morphColors!==Dt||be.toneMapping!==Rt||be.morphTargetsCount!==ti||!!be.lightProbeGrid!=_.state.lightProbeGridArray.length>0)&&(et=!0):(et=!0,be.__version=O.version);let Ti=be.currentProgram;et===!0&&(Ti=Wa(O,U,B),F&&O.isNodeMaterial&&F.onUpdateProgram(O,Ti,be));let Xi=!1,bn=!1,ls=!1;const pt=Ti.getUniforms(),Ut=be.uniforms;if(b.useProgram(Ti.program)&&(Xi=!0,bn=!0,ls=!0),O.id!==ee&&(ee=O.id,bn=!0),be.needsLights){const vt=op(_.state.lightProbeGridArray,B);be.lightProbeGrid!==vt&&(be.lightProbeGrid=vt,bn=!0)}if(Xi||ae!==S){b.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),pt.setValue(D,"projectionMatrix",S.projectionMatrix),pt.setValue(D,"viewMatrix",S.matrixWorldInverse);const _n=pt.map.cameraPosition;_n!==void 0&&_n.setValue(D,Ht.setFromMatrixPosition(S.matrixWorld)),C.logarithmicDepthBuffer&&pt.setValue(D,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&pt.setValue(D,"isOrthographic",S.isOrthographicCamera===!0),ae!==S&&(ae=S,bn=!0,ls=!0)}if(be.needsLights&&(bi.state.directionalShadowMap.length>0&&pt.setValue(D,"directionalShadowMap",bi.state.directionalShadowMap,X),bi.state.spotShadowMap.length>0&&pt.setValue(D,"spotShadowMap",bi.state.spotShadowMap,X),bi.state.pointShadowMap.length>0&&pt.setValue(D,"pointShadowMap",bi.state.pointShadowMap,X)),B.isSkinnedMesh){pt.setOptional(D,B,"bindMatrix"),pt.setOptional(D,B,"bindMatrixInverse");const vt=B.skeleton;vt&&(vt.boneTexture===null&&vt.computeBoneTexture(),pt.setValue(D,"boneTexture",vt.boneTexture,X))}B.isBatchedMesh&&(pt.setOptional(D,B,"batchingTexture"),pt.setValue(D,"batchingTexture",B._matricesTexture,X),pt.setOptional(D,B,"batchingIdTexture"),pt.setValue(D,"batchingIdTexture",B._indirectTexture,X),pt.setOptional(D,B,"batchingColorTexture"),B._colorsTexture!==null&&pt.setValue(D,"batchingColorTexture",B._colorsTexture,X));const yn=G.morphAttributes;if((yn.position!==void 0||yn.normal!==void 0||yn.color!==void 0)&&L.update(B,G,Ti),(bn||be.receiveShadow!==B.receiveShadow)&&(be.receiveShadow=B.receiveShadow,pt.setValue(D,"receiveShadow",B.receiveShadow)),(O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial)&&O.envMap===null&&U.environment!==null&&(Ut.envMapIntensity.value=U.environmentIntensity),Ut.dfgLUT!==void 0&&(Ut.dfgLUT.value=Ab()),bn){if(pt.setValue(D,"toneMappingExposure",R.toneMappingExposure),be.needsLights&&hp(Ut,ls),me&&O.fog===!0&&Ee.refreshFogUniforms(Ut,me),Ee.refreshMaterialUniforms(Ut,O,te,re,_.state.transmissionRenderTarget[S.id]),be.needsLights&&be.lightProbeGrid){const vt=be.lightProbeGrid;Ut.probesSH.value=vt.texture,Ut.probesMin.value.copy(vt.boundingBox.min),Ut.probesMax.value.copy(vt.boundingBox.max),Ut.probesResolution.value.copy(vt.resolution)}$r.upload(D,Ic(be),Ut,X)}if(O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&($r.upload(D,Ic(be),Ut,X),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&pt.setValue(D,"center",B.center),pt.setValue(D,"modelViewMatrix",B.modelViewMatrix),pt.setValue(D,"normalMatrix",B.normalMatrix),pt.setValue(D,"modelMatrix",B.matrixWorld),O.uniformsGroups!==void 0){const vt=O.uniformsGroups;for(let _n=0,hs=vt.length;_n<hs;_n++){const Fc=vt[_n];Q.update(Fc,Ti),Q.bind(Fc,Ti)}}return Ti}function hp(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function cp(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(S,U,G){const O=H.get(S);O.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),H.get(S.texture).__webglTexture=U,H.get(S.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:G,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,U){const G=H.get(S);G.__webglFramebuffer=U,G.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(S,U=0,G=0){Y=S,V=U,k=G;let O=null,B=!1,me=!1;if(S){const pe=H.get(S);if(pe.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(D.FRAMEBUFFER,pe.__webglFramebuffer),de.copy(S.viewport),xe.copy(S.scissor),Ke=S.scissorTest,b.viewport(de),b.scissor(xe),b.setScissorTest(Ke),ee=-1;return}else if(pe.__webglFramebuffer===void 0)X.setupRenderTarget(S);else if(pe.__hasExternalTextures)X.rebindTextures(S,H.get(S.texture).__webglTexture,H.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Ve=S.depthTexture;if(pe.__boundDepthTexture!==Ve){if(Ve!==null&&H.has(Ve)&&(S.width!==Ve.image.width||S.height!==Ve.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");X.setupDepthRenderbuffer(S)}}const Ae=S.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(me=!0);const Ce=H.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ce[U])?O=Ce[U][G]:O=Ce[U],B=!0):S.samples>0&&X.useMultisampledRTT(S)===!1?O=H.get(S).__webglMultisampledFramebuffer:Array.isArray(Ce)?O=Ce[G]:O=Ce,de.copy(S.viewport),xe.copy(S.scissor),Ke=S.scissorTest}else de.copy(De).multiplyScalar(te).floor(),xe.copy(Ft).multiplyScalar(te).floor(),Ke=je;if(G!==0&&(O=W),b.bindFramebuffer(D.FRAMEBUFFER,O)&&b.drawBuffers(S,O),b.viewport(de),b.scissor(xe),b.setScissorTest(Ke),B){const pe=H.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,pe.__webglTexture,G)}else if(me){const pe=U;for(let Ae=0;Ae<S.textures.length;Ae++){const Ce=H.get(S.textures[Ae]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Ae,Ce.__webglTexture,G,pe)}}else if(S!==null&&G!==0){const pe=H.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,pe.__webglTexture,G)}ee=-1},this.readRenderTargetPixels=function(S,U,G,O,B,me,ye,pe=0){if(!(S&&S.isWebGLRenderTarget)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=H.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ye!==void 0&&(Ae=Ae[ye]),Ae){b.bindFramebuffer(D.FRAMEBUFFER,Ae);try{const Ce=S.textures[pe],Ve=Ce.format,Xe=Ce.type;if(S.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+pe),!C.textureFormatReadable(Ve)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!C.textureTypeReadable(Xe)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-O&&G>=0&&G<=S.height-B&&D.readPixels(U,G,O,B,ce.convert(Ve),ce.convert(Xe),me)}finally{const Ce=Y!==null?H.get(Y).__webglFramebuffer:null;b.bindFramebuffer(D.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(S,U,G,O,B,me,ye,pe=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=H.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ye!==void 0&&(Ae=Ae[ye]),Ae)if(U>=0&&U<=S.width-O&&G>=0&&G<=S.height-B){b.bindFramebuffer(D.FRAMEBUFFER,Ae);const Ce=S.textures[pe],Ve=Ce.format,Xe=Ce.type;if(S.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+pe),!C.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!C.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ie=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ie),D.bufferData(D.PIXEL_PACK_BUFFER,me.byteLength,D.STREAM_READ),D.readPixels(U,G,O,B,ce.convert(Ve),ce.convert(Xe),0);const lt=Y!==null?H.get(Y).__webglFramebuffer:null;b.bindFramebuffer(D.FRAMEBUFFER,lt);const Dt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Wp(D,Dt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ie),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,me),D.deleteBuffer(Ie),D.deleteSync(Dt),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,U=null,G=0){const O=Math.pow(2,-G),B=Math.floor(S.image.width*O),me=Math.floor(S.image.height*O),ye=U!==null?U.x:0,pe=U!==null?U.y:0;X.setTexture2D(S,0),D.copyTexSubImage2D(D.TEXTURE_2D,G,0,0,ye,pe,B,me),b.unbindTexture()},this.copyTextureToTexture=function(S,U,G=null,O=null,B=0,me=0){let ye,pe,Ae,Ce,Ve,Xe,Ie,lt,Dt;const Rt=S.isCompressedTexture?S.mipmaps[me]:S.image;if(G!==null)ye=G.max.x-G.min.x,pe=G.max.y-G.min.y,Ae=G.isBox3?G.max.z-G.min.z:1,Ce=G.min.x,Ve=G.min.y,Xe=G.isBox3?G.min.z:0;else{const Ut=Math.pow(2,-B);ye=Math.floor(Rt.width*Ut),pe=Math.floor(Rt.height*Ut),S.isDataArrayTexture?Ae=Rt.depth:S.isData3DTexture?Ae=Math.floor(Rt.depth*Ut):Ae=1,Ce=0,Ve=0,Xe=0}O!==null?(Ie=O.x,lt=O.y,Dt=O.z):(Ie=0,lt=0,Dt=0);const ft=ce.convert(U.format),ti=ce.convert(U.type);let be;U.isData3DTexture?(X.setTexture3D(U,0),be=D.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(X.setTexture2DArray(U,0),be=D.TEXTURE_2D_ARRAY):(X.setTexture2D(U,0),be=D.TEXTURE_2D),b.activeTexture(D.TEXTURE0),b.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),b.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),b.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);const bi=b.getParameter(D.UNPACK_ROW_LENGTH),et=b.getParameter(D.UNPACK_IMAGE_HEIGHT),Ti=b.getParameter(D.UNPACK_SKIP_PIXELS),Xi=b.getParameter(D.UNPACK_SKIP_ROWS),bn=b.getParameter(D.UNPACK_SKIP_IMAGES);b.pixelStorei(D.UNPACK_ROW_LENGTH,Rt.width),b.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Rt.height),b.pixelStorei(D.UNPACK_SKIP_PIXELS,Ce),b.pixelStorei(D.UNPACK_SKIP_ROWS,Ve),b.pixelStorei(D.UNPACK_SKIP_IMAGES,Xe);const ls=S.isDataArrayTexture||S.isData3DTexture,pt=U.isDataArrayTexture||U.isData3DTexture;if(S.isDepthTexture){const Ut=H.get(S),yn=H.get(U),vt=H.get(Ut.__renderTarget),_n=H.get(yn.__renderTarget);b.bindFramebuffer(D.READ_FRAMEBUFFER,vt.__webglFramebuffer),b.bindFramebuffer(D.DRAW_FRAMEBUFFER,_n.__webglFramebuffer);for(let hs=0;hs<Ae;hs++)ls&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,H.get(S).__webglTexture,B,Xe+hs),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,H.get(U).__webglTexture,me,Dt+hs)),D.blitFramebuffer(Ce,Ve,ye,pe,Ie,lt,ye,pe,D.DEPTH_BUFFER_BIT,D.NEAREST);b.bindFramebuffer(D.READ_FRAMEBUFFER,null),b.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(B!==0||S.isRenderTargetTexture||H.has(S)){const Ut=H.get(S),yn=H.get(U);b.bindFramebuffer(D.READ_FRAMEBUFFER,$),b.bindFramebuffer(D.DRAW_FRAMEBUFFER,N);for(let vt=0;vt<Ae;vt++)ls?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ut.__webglTexture,B,Xe+vt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ut.__webglTexture,B),pt?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,yn.__webglTexture,me,Dt+vt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,yn.__webglTexture,me),B!==0?D.blitFramebuffer(Ce,Ve,ye,pe,Ie,lt,ye,pe,D.COLOR_BUFFER_BIT,D.NEAREST):pt?D.copyTexSubImage3D(be,me,Ie,lt,Dt+vt,Ce,Ve,ye,pe):D.copyTexSubImage2D(be,me,Ie,lt,Ce,Ve,ye,pe);b.bindFramebuffer(D.READ_FRAMEBUFFER,null),b.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else pt?S.isDataTexture||S.isData3DTexture?D.texSubImage3D(be,me,Ie,lt,Dt,ye,pe,Ae,ft,ti,Rt.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(be,me,Ie,lt,Dt,ye,pe,Ae,ft,Rt.data):D.texSubImage3D(be,me,Ie,lt,Dt,ye,pe,Ae,ft,ti,Rt):S.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,me,Ie,lt,ye,pe,ft,ti,Rt.data):S.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,me,Ie,lt,Rt.width,Rt.height,ft,Rt.data):D.texSubImage2D(D.TEXTURE_2D,me,Ie,lt,ye,pe,ft,ti,Rt);b.pixelStorei(D.UNPACK_ROW_LENGTH,bi),b.pixelStorei(D.UNPACK_IMAGE_HEIGHT,et),b.pixelStorei(D.UNPACK_SKIP_PIXELS,Ti),b.pixelStorei(D.UNPACK_SKIP_ROWS,Xi),b.pixelStorei(D.UNPACK_SKIP_IMAGES,bn),me===0&&U.generateMipmaps&&D.generateMipmap(be),b.unbindTexture()},this.initRenderTarget=function(S){H.get(S).__webglFramebuffer===void 0&&X.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?X.setTextureCube(S,0):S.isData3DTexture?X.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?X.setTexture2DArray(S,0):X.setTexture2D(S,0),b.unbindTexture()},this.resetState=function(){V=0,k=0,Y=null,b.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}}const jr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class na{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Eb=new lc(-1,1,1,-1,0,1);class Cb extends zt{constructor(){super(),this.setAttribute("position",new xt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new xt([0,2,0,0,2,0],2))}}const Rb=new Cb;class hc{constructor(e){this._mesh=new Lt(Rb,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Eb)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class cc extends na{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Be?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Da.clone(e.uniforms),this.material=new Be({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new hc(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Ud extends na{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const n=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let r,o;this.inverse?(r=0,o=1):(r=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),s.buffers.stencil.setFunc(n.ALWAYS,r,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(n.EQUAL,1,4294967295),s.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),s.buffers.stencil.setLocked(!0)}}class Pb extends na{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Ib{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new ve);this._width=i.width,this._height=i.height,t=new xi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Si}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new cc(jr),this.copyPass.material.blending=Qi,this.timer=new Rm}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let n=0,s=this.passes.length;n<s;n++){const r=this.passes[n];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),r.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Ud!==void 0&&(r instanceof Ud?i=!0:r instanceof Pb&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ve);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,n)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Lb extends na{constructor(e,t,i=null,n=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ne}render(e,t,i){const n=e.autoClear;e.autoClear=!1;let s,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),e.autoClear=n}}const Fb={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ne(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Ks extends na{constructor(e,t=1,i,n){super(),this.strength=t,this.radius=i,this.threshold=n,this.resolution=e!==void 0?new ve(e.x,e.y):new ve(256,256),this.clearColor=new Ne(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new xi(s,r,{type:Si}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let c=0;c<this.nMips;c++){const d=new xi(s,r,{type:Si});d.texture.name="UnrealBloomPass.h"+c,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const u=new xi(s,r,{type:Si});u.texture.name="UnrealBloomPass.v"+c,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),s=Math.round(s/2),r=Math.round(r/2)}const o=Fb;this.highPassUniforms=Da.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Be({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let c=0;c<this.nMips;c++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[c])),this.separableBlurMaterials[c].uniforms.invSize.value=new ve(1/s,1/r),s=Math.round(s/2),r=Math.round(r/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Da.clone(jr.uniforms),this.blendMaterial=new Be({uniforms:this.copyUniforms,vertexShader:jr.vertexShader,fragmentShader:jr.fragmentShader,premultipliedAlpha:!0,blending:jt,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ne,this._oldClearAlpha=1,this._basic=new Fi,this._fsQuad=new hc(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),n=Math.round(t/2);this.renderTargetBright.setSize(i,n);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,n),this.renderTargetsVertical[s].setSize(i,n),this.separableBlurMaterials[s].uniforms.invSize.value=new ve(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(e,t,i,n,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const r=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Ks.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Ks.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=r}_getSeparableBlurMaterial(e){const t=[],i=e/3;for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(i*i))/i);return new Be({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ve(.5,.5)},direction:{value:new ve(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Be({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}Ks.BlurDirectionX=new ve(1,0);Ks.BlurDirectionY=new ve(0,1);const yr={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Db extends na{constructor(){super(),this.isOutputPass=!0,this.uniforms=Da.clone(yr.uniforms),this.material=new bf({name:yr.name,uniforms:this.uniforms,vertexShader:yr.vertexShader,fragmentShader:yr.fragmentShader}),this._fsQuad=new hc(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ze.getTransfer(this._outputColorSpace)===at&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Bh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Hh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Gh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===mo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Wh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Xh?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Vh&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const Ub={uniforms:{tDiffuse:{value:null},uTime:{value:0},uBlur:{value:0},uBlurDir:{value:new ve(0,0)},uAberr:{value:0},uMobile:{value:0},uRes:{value:new ve(1,1)},uGrain:{value:.035},uVig:{value:.26}},vertexShader:`
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float uTime;
    uniform float uBlur;
    uniform vec2 uBlurDir;
    uniform float uAberr;
    uniform float uMobile;
    uniform vec2 uRes;
    uniform float uGrain;
    uniform float uVig;
    varying vec2 vUv;
    float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
    void main() {
      vec2 uv = vUv;
      vec2 c = uv - 0.5;
      vec3 col;
      // 방향성/라디얼 모션 블러 (이벤트/무쌍, 데스크톱만)
      if (uBlur > 0.002 && uMobile < 0.5) {
        vec2 dir = (c * 0.9 + uBlurDir * 1.5) * uBlur * 0.055;
        vec3 acc = vec3(0.0);
        for (int i = 0; i < 6; i++) {
          acc += texture2D(tDiffuse, uv - dir * (float(i) / 5.0)).rgb;
        }
        col = acc / 6.0;
      } else {
        col = texture2D(tDiffuse, uv).rgb;
      }
      // 색수차 펄스 (이벤트): R/B 반경 오프셋
      if (uAberr > 0.002) {
        vec2 off = c * uAberr * 0.02;
        col.r = texture2D(tDiffuse, uv + off).r;
        col.b = texture2D(tDiffuse, uv - off).b;
      }
      // 톤 그레이딩: HDR 안전한 미세 온기 곱(섀도 청록/하이라이트 웜 대비)
      col *= vec3(1.025, 1.0, 0.985);
      // 비네트 브리딩 (상시, 아주 느린 맥동)
      float breathe = uVig + 0.05 * sin(uTime * 0.6);
      float vig = 1.0 - smoothstep(0.45, 0.98, length(c)) * breathe;
      col *= vig;
      // 필름 그레인 (상시, 애니메이션)
      float g = hash(uv * uRes + fract(uTime) * 91.7);
      col += (g - 0.5) * uGrain;
      gl_FragColor = vec4(col, 1.0);
    }
  `};class kb{pass;mobile;blur=0;blurX=0;blurZ=0;aberr=0;musou=0;time=0;lastT=0;constructor(e){this.mobile=e,this.pass=new cc(Ub),this.pass.uniforms.uMobile.value=e?1:0,this.pass.uniforms.uGrain.value=e?.02:.035,this.lastT=performance.now()}pulseBlur(e,t=0,i=0){e>this.blur&&(this.blur=e);const n=Math.hypot(t,i);n>.001?(this.blurX=t/n,this.blurZ=i/n):(this.blurX=0,this.blurZ=0)}pulseAberration(e){e>this.aberr&&(this.aberr=e)}setMusou(e){this.musou=e<0?0:e>1?1:e}setSize(e,t){this.pass.uniforms.uRes.value.set(e,t)}reset(){this.blur=0,this.aberr=0,this.musou=0}update(){const e=performance.now();let t=(e-this.lastT)/1e3;this.lastT=e,t>.1&&(t=.1),this.time+=t,this.blur=this.blur>.01?this.blur*Math.exp(-t/.11):0,this.aberr=this.aberr>.01?this.aberr*Math.exp(-t/.16):0;const i=this.musou*.45,n=this.musou*.3,s=this.blur>.01,r=this.pass.uniforms;r.uBlur.value=Math.max(this.blur,i),r.uBlurDir.value.set(s?this.blurX:0,s?this.blurZ:0),r.uAberr.value=Math.max(this.aberr,n),r.uTime.value=this.time}}function Zr(){return"ontouchstart"in window||navigator.maxTouchPoints>0}function Th(){return Math.min(window.devicePixelRatio,Zr()?1.5:2)}function zb(a){const e=new Tb({antialias:!1,powerPreference:"high-performance"});return e.setPixelRatio(Th()),e.setSize(window.innerWidth,window.innerHeight),e.toneMapping=mo,e.toneMappingExposure=1,e.outputColorSpace=Mt,e.setClearColor(329226,1),a.appendChild(e.domElement),e}const Nb={uniforms:{tDiffuse:{value:null},uStrength:{value:0},uTime:{value:0}},vertexShader:`
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float uStrength;
    uniform float uTime;
    varying vec2 vUv;
    void main() {
      vec4 c = texture2D(tDiffuse, vUv);
      if (uStrength <= 0.001) { gl_FragColor = c; return; }
      vec2 d = vUv - 0.5;
      float dist = length(d);
      float ang = atan(d.y, d.x);
      // 채도 부스트 + 살짝 붉은 기운
      float luma = dot(c.rgb, vec3(0.299, 0.587, 0.114));
      vec3 sat = mix(vec3(luma), c.rgb, 1.0 + 0.6 * uStrength);
      sat.r *= 1.0 + 0.06 * uStrength;
      // 방사형 스피드라인 (가장자리에서 강함)
      float lines = sin(ang * 60.0 + uTime * 4.0) * 0.5 + 0.5;
      lines = pow(lines, 6.0) * smoothstep(0.15, 0.5, dist);
      sat += lines * uStrength * 0.5;
      // 비네트
      float vig = 1.0 - smoothstep(0.35, 0.85, dist) * uStrength * 0.8;
      gl_FragColor = vec4(sat * vig, c.a);
    }
  `},_r=320,wr=180,Ob=2,ga=90,kd=4;class Bb{composer;bloom;musouPass;postfx;renderer;bloomScale;pipEnabled;ring=[];ringCtx=[];ringFilled=0;ringHead=0;capCounter=0;replayT=-1;replayStart=0;replayFrames=[];pipWrap=null;pipCanvas=null;pipCtx=null;constructor(e,t,i){this.renderer=e,this.composer=new Ib(e),this.composer.setPixelRatio(Th()),this.composer.setSize(window.innerWidth,window.innerHeight),this.composer.addPass(new Lb(t,i)),this.bloomScale=Zr()?.5:1,this.bloom=new Ks(new ve(window.innerWidth*this.bloomScale,window.innerHeight*this.bloomScale),.34,.4,.88),this.composer.addPass(this.bloom),this.musouPass=new cc(Nb),this.composer.addPass(this.musouPass),this.postfx=new kb(Zr()),this.postfx.setSize(window.innerWidth,window.innerHeight),this.composer.addPass(this.postfx.pass),this.composer.addPass(new Db),this.pipEnabled=!Zr(),this.pipEnabled&&this.initPip()}initPip(){for(let s=0;s<ga;s++){const r=document.createElement("canvas");r.width=_r,r.height=wr;const o=r.getContext("2d");if(!o){this.pipEnabled=!1;return}this.ring.push(r),this.ringCtx.push(o)}const e=document.createElement("div");e.style.cssText=["position:fixed","right:18px","bottom:18px","width:26vw","max-width:360px","aspect-ratio:16/9","z-index:28","pointer-events:none","display:none","border:2px solid rgba(232,201,103,0.85)","border-radius:6px","overflow:hidden","box-shadow:0 6px 24px rgba(0,0,0,0.6)"].join(";");const t=document.createElement("div");t.textContent="討伐 · 슬로 리플레이",t.style.cssText=["position:absolute","left:0","top:0","padding:2px 8px","font:600 12px/1.4 system-ui,sans-serif","color:#ffe9a8","background:linear-gradient(90deg,rgba(0,0,0,0.7),rgba(0,0,0,0))","letter-spacing:0.04em"].join(";");const i=document.createElement("canvas");i.width=_r,i.height=wr,i.style.cssText="width:100%;height:100%;display:block;";const n=i.getContext("2d");if(!n){this.pipEnabled=!1;return}e.appendChild(i),e.appendChild(t),document.body.appendChild(e),this.pipWrap=e,this.pipCanvas=i,this.pipCtx=n}playReplay(){if(!this.pipEnabled||this.replayT>=0||this.ringFilled<8)return;this.replayFrames.length=0;const e=this.ringFilled<ga?0:this.ringHead;for(let t=0;t<this.ringFilled;t++)this.replayFrames.push(this.ring[(e+t)%ga]);this.replayT=0,this.replayStart=performance.now(),this.pipWrap&&(this.pipWrap.style.display="block",this.pipWrap.animate([{opacity:0,transform:"translateY(12px) scale(0.94)"},{opacity:1,transform:"none"}],{duration:260,easing:"ease-out"}))}setMusou(e,t){this.musouPass.uniforms.uStrength.value=e,this.musouPass.uniforms.uTime.value=t,this.postfx.setMusou(e)}pulseBlur(e,t=0,i=0){this.postfx.pulseBlur(e,t,i)}pulseAberration(e){this.postfx.pulseAberration(e)}setSize(e,t){const i=Th();this.renderer.setPixelRatio(i),this.renderer.setSize(e,t),this.composer.setPixelRatio(i),this.composer.setSize(e,t),this.bloom.setSize(e*this.bloomScale,t*this.bloomScale),this.postfx.setSize(e,t)}render(){this.postfx.update(),this.composer.render(),this.pipEnabled&&this.pipTick()}pipTick(){if(this.replayT>=0){this.advanceReplay();return}++this.capCounter<Ob||(this.capCounter=0,this.ringCtx[this.ringHead].drawImage(this.renderer.domElement,0,0,_r,wr),this.ringHead=(this.ringHead+1)%ga,this.ringFilled<ga&&this.ringFilled++)}advanceReplay(){const e=(performance.now()-this.replayStart)/1e3;if(this.replayT=e,e>=kd||!this.pipCtx||this.replayFrames.length===0){this.endReplay();return}const t=Math.min(this.replayFrames.length-1,Math.floor(e/kd*this.replayFrames.length));this.pipCtx.drawImage(this.replayFrames[t],0,0,_r,wr)}endReplay(){if(this.replayT=-1,this.replayFrames.length=0,this.capCounter=0,this.pipWrap){const e=this.pipWrap;e.animate([{opacity:1},{opacity:0}],{duration:260,easing:"ease-in"}).onfinish=()=>{e.style.display="none"}}}}const sa=55*Math.PI/180,Hb=24,Gb=Math.sin(sa),Vb=Math.cos(sa),Wb=1.1,Xb=1.5,zd=1.1,qb=.08,$b=2.5,jb=.3,Zb=.05,Yb=.05,Kb=1.32,Nd=2.2,Jb=.55,Od=1.8;function rl(a,e){const t=Math.sin(a*12.9898+e*78.233)*43758.5453;return(t-Math.floor(t))*2-1}const Bd=40;class Qb{camera;sx={x:0,z:0};trauma=0;time=0;inited=!1;fovPunch=0;zoom=1;threat=0;speedFrac=0;cine=0;cineHold=0;azi=0;elevOff=0;offX=0;offZ=0;laX=0;laZ=0;laTX=0;laTZ=0;look=new I;constructor(){this.camera=new Ri(Bd,window.innerWidth/window.innerHeight,.1,300)}onResize(e,t){this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}addTrauma(e){this.trauma=Math.min(1,this.trauma+e)}punchFov(e){this.fovPunch=Math.max(-6,Math.min(6,this.fovPunch+e))}setThreat(e){this.threat=e<0?0:e>1?1:e}setLookAhead(e,t,i){const n=Math.min(1,i);this.speedFrac=n;const s=Math.hypot(e,t)||1;this.laTX=e/s*n*Nd*Jb,this.laTZ=t/s*n*Nd}cinematic(e){this.cine=e}setCinematicPose(e,t,i,n=0,s=0){this.azi=e,this.elevOff=t,this.cineHold=i,this.offX=n,this.offZ=s}update(e,t,i){this.time+=e,this.laX+=(this.laTX-this.laX)*Math.min(1,Od*e),this.laZ+=(this.laTZ-this.laZ)*Math.min(1,Od*e);const n=t+this.laX,s=i+this.laZ;this.inited||(this.sx.x=n,this.sx.z=s,this.inited=!0);const r=1-Math.exp(-9*e);this.sx.x+=(n-this.sx.x)*r,this.sx.z+=(s-this.sx.z)*r,this.cine*=Math.exp(-e/.7),Math.abs(this.cine)<.002&&(this.cine=0);const o=Math.min(Kb,1+this.threat*jb-Zb*(1-this.threat)+Yb*this.speedFrac);this.zoom+=(o-this.zoom)*Math.min(1,$b*e);const l=Hb*Math.max(.5,this.zoom+this.cine+this.cineHold);Math.abs(this.fovPunch)>.001&&(this.fovPunch*=Math.exp(-e/.18),Math.abs(this.fovPunch)<.001&&(this.fovPunch=0),this.camera.fov=Bd+this.fovPunch,this.camera.updateProjectionMatrix());let h=Gb,c=Vb;if(this.elevOff!==0){const m=sa+this.elevOff;h=Math.sin(m),c=Math.cos(m)}const d=l*c,u=this.sx.x+this.offX,f=this.sx.z+this.offZ;if(this.azi!==0?this.camera.position.set(u+d*Math.sin(this.azi),l*h,f+d*Math.cos(this.azi)):this.camera.position.set(u,l*h,f+d),this.look.set(u,Wb,f),this.camera.lookAt(this.look),this.trauma=Math.max(0,this.trauma-Xb*e),this.trauma>0){const m=this.trauma*this.trauma,v=this.time*32;this.camera.position.x+=zd*m*rl(v,1),this.camera.position.y+=zd*m*rl(v,2),this.camera.rotation.z+=qb*m*rl(v,3)}}}class ey{down=new Set;pressed=new Set;move={x:0,z:0};joy={x:0,z:0,active:!1};constructor(e=window){e.addEventListener("keydown",this.onKeyDown),e.addEventListener("keyup",this.onKeyUp),window.addEventListener("blur",()=>{this.down.clear()})}onKeyDown=e=>{ty.has(e.code)&&e.preventDefault(),this.down.has(e.code)||this.pressed.add(e.code),this.down.add(e.code)};onKeyUp=e=>{this.down.delete(e.code)};isDown(e){return this.down.has(e)}consumePressed(e){return this.pressed.has(e)?(this.pressed.delete(e),!0):!1}press(e){this.pressed.add(e)}poll(){if(this.joy.active){this.move.x=this.joy.x,this.move.z=this.joy.z;return}let e=0,t=0;(this.down.has("KeyD")||this.down.has("ArrowRight"))&&(e+=1),(this.down.has("KeyA")||this.down.has("ArrowLeft"))&&(e-=1),(this.down.has("KeyS")||this.down.has("ArrowDown"))&&(t+=1),(this.down.has("KeyW")||this.down.has("ArrowUp"))&&(t-=1),this.move.x=e,this.move.z=t}endFrame(){this.pressed.clear()}}const ty=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"]);class iy{running=!1;last=0;cb;constructor(e){this.cb=e}start(){this.running||(this.running=!0,this.last=performance.now(),requestAnimationFrame(this.tick))}stop(){this.running=!1}tick=e=>{if(!this.running)return;let t=(e-this.last)/1e3;this.last=e,t>.033&&(t=.033),t<0&&(t=0),this.cb(t),requestAnimationFrame(this.tick)}}const Dn=48,Ua=64;function dc(a,e,t,i,n,s){const r=e+n*Dn,o=t+i*Ua;s.u=r/a.texW,s.v=1-(o+Ua)/a.texH}class ny{manifest;sgrade;apriority;soldiers;variants;constructor(e,t){this.manifest=e,this.sgrade=t.sgrade,this.apriority=t.apriority,this.soldiers=t.soldiers,this.variants=t.variants}soldierBlockPx(e){return e*4*Dn}variantBlocks(e){return this.manifest.sheets.soldiersVariants.variants[e]??[]}}function Mr(a,e,t){a.magFilter=ot,a.minFilter=ot,a.generateMipmaps=!1,a.colorSpace=Mt,a.premultiplyAlpha=!1,a.flipY=!0,a.needsUpdate=!0;const i=e*Dn,n=t*Ua;return{texture:a,texW:i,texH:n,cellUvW:Dn/i,cellUvH:Ua/n}}async function sy(){const e="/threesur/"+"assets/sprites/",i=await(await fetch(e+"manifest.json")).json(),n=new Ba,s=c=>new Promise((d,u)=>{n.load(e+c,d,void 0,u)}),[r,o,l,h]=await Promise.all([s(i.sheets.sgrade.file),s(i.sheets.apriority.file),s(i.sheets.soldiers.file),s(i.sheets.soldiersVariants.file)]);return new ny(i,{sgrade:Mr(r,i.sheets.sgrade.cols,i.sheets.sgrade.rows),apriority:Mr(o,i.sheets.apriority.cols,i.sheets.apriority.rows),soldiers:Mr(l,i.sheets.soldiers.cols,i.sheets.soldiers.rows),variants:Mr(h,i.sheets.soldiersVariants.cols,i.sheets.soldiersVariants.rows)})}const Ps=a=>1-Math.pow(1-a,3),Is=a=>a<.5?4*a*a*a:1-Math.pow(-2*a+2,3)/2,Eh=a=>a<0?0:a>1?1:a,Hd=(a,e,t)=>{const i=Eh((t-a)/(e-a));return i*i*(3-2*i)},Sr=.4,ol=-.15,Gd=-.08,ay=-.11,Vd=.4,Ar=.6,ll=1.1,ry=.07,oy=.9,Wd=.45,hl=.7,ly=-.13,hy=32,Xd=1,qd=9,cy=.1,$d=1.2,dy=.62,uy=-.12,jd=6,Zd=.7,Yd=4,fy=.05;class py{rig;onReplay;musouActive=!1;musouT=0;musouEndT=-1;endAzi=0;endElev=0;endZoom=0;killcamT=-1;killcamCooldown=0;panT=-1;panDirX=0;panDirZ=0;deathT=-1;deathDirX=0;deathDirZ=0;allyT=-1;allyDirX=0;allyDirZ=0;vignette;replayPending=!1;constructor(e,t){this.rig=e,this.onReplay=t??null,this.vignette=document.createElement("div"),this.vignette.style.cssText=["position:fixed","inset:0","pointer-events:none","opacity:0","z-index:29","background:radial-gradient(ellipse at center, rgba(0,0,0,0) 34%, rgba(6,4,10,0.9) 100%)"].join(";"),document.body.appendChild(this.vignette)}onMusouStart(){this.musouActive=!0,this.musouT=0,this.musouEndT=-1,this.killcamT=-1,this.rig.addTrauma(.35),this.rig.punchFov(-2.5)}onMusouEnd(){if(!this.musouActive)return;const e=this.musouPose(this.musouT);this.endAzi=e.azi,this.endElev=e.elev,this.endZoom=e.zoom,this.musouActive=!1,this.musouEndT=0,this.rig.cinematic(-.11),this.rig.punchFov(4.5),this.rig.addTrauma(.6)}onMassKill(e){this.musouActive||this.musouEndT>=0||this.killcamCooldown>0||this.killcamT>=0||(this.killcamT=0,this.killcamCooldown=hy,this.rig.addTrauma(.25),this.vignette.animate([{opacity:0},{opacity:.95,offset:.22},{opacity:.6,offset:.55},{opacity:0}],{duration:hl*1e3,easing:"ease-out"}))}onBossSpawn(e,t){const i=Math.hypot(e,t)||1;this.panDirX=e/i,this.panDirZ=t/i,this.panT=0}onBossDeath(e,t){const i=Math.hypot(e,t)||1;this.deathDirX=e/i,this.deathDirZ=t/i,this.deathT=0,this.panT=-1,this.onReplay?this.onReplay():this.replayPending=!0}onAllyJoin(e,t){if(this.musouActive||this.musouEndT>=0||this.panT>=0||this.deathT>=0||this.killcamT>=0)return;const i=Math.hypot(e,t)||1;this.allyDirX=e/i,this.allyDirZ=t/i,this.allyT=0}onDash(){this.rig.cinematic(-.1),this.rig.punchFov(2)}get wantsSkipInput(){return this.panT>=0}skip(){this.panT>=0&&(this.panT=-1),this.allyT>=0&&(this.allyT=-1)}consumeReplayTrigger(){return this.replayPending?(this.replayPending=!1,!0):!1}reset(){this.musouActive=!1,this.musouEndT=-1,this.killcamT=-1,this.killcamCooldown=0,this.panT=-1,this.deathT=-1,this.allyT=-1,this.replayPending=!1,this.rig.setCinematicPose(0,0,0,0,0)}update(e){this.killcamCooldown>0&&(this.killcamCooldown-=e);let t=0,i=0,n=0,s=0,r=0;if(this.musouActive){this.musouT+=e;const o=this.musouPose(this.musouT);t+=o.azi,i+=o.elev,n+=o.zoom}else if(this.musouEndT>=0){this.musouEndT+=e;const o=Is(Eh(this.musouEndT/Wd));t+=this.endAzi*(1-o),i+=this.endElev*(1-o),n+=this.endZoom*(1-o),this.musouEndT>=Wd&&(this.musouEndT=-1)}if(this.killcamT>=0){this.killcamT+=e;const o=this.killcamT/hl,l=Hd(0,.18,o)*(1-Hd(.55,1,o));n+=ly*l,this.killcamT>=hl&&(this.killcamT=-1)}if(this.panT>=0){this.panT+=e;const o=this.panT/Xd,l=o<.5?Ps(o/.5):1-Is((o-.5)/.5);s+=this.panDirX*qd*l,r+=this.panDirZ*qd*l,n+=cy*l,this.panT>=Xd&&(this.panT=-1)}if(this.deathT>=0){this.deathT+=e;const o=this.deathT/$d,l=o<.45?Ps(o/.45):1-Is((o-.45)/.55);t+=dy*l,n+=uy*l,s+=this.deathDirX*jd*l,r+=this.deathDirZ*jd*l,this.deathT>=$d&&(this.deathT=-1)}if(this.allyT>=0)if(this.musouActive||this.musouEndT>=0||this.panT>=0||this.deathT>=0||this.killcamT>=0)this.allyT=-1;else{this.allyT+=e;const o=this.allyT/Zd,l=o<.5?Ps(o/.5):1-Is((o-.5)/.5);s+=this.allyDirX*Yd*l,r+=this.allyDirZ*Yd*l,n+=fy*l,this.allyT>=Zd&&(this.allyT=-1)}this.rig.setCinematicPose(t,i,n,s,r)}musouPose(e){let t;if(e<Sr)t=ol*Ps(e/Sr);else if(e<.9){const s=Is((e-Sr)/(.9-Sr));t=ol+(Gd-ol)*s}else t=Gd;const i=ay*Ps(Eh(e/.5));let n;if(e<Ar)n=Vd*Ps(e/Ar);else if(e<ll){const s=Is((e-Ar)/(ll-Ar));n=Vd*(1-s)}else n=ry*Math.sin((e-ll)*oy);return{azi:n,elev:i,zoom:t}}}const Jt=12,_o=`
  #define MAX_LIGHTS ${Jt}
  uniform vec3 uLightPos[MAX_LIGHTS];
  uniform vec3 uLightColor[MAX_LIGHTS];
  uniform float uLightRadius[MAX_LIGHTS];
  uniform int uLightCount;
  varying vec2 vWorldXZ;
  vec3 sampleLights() {
    vec3 s = vec3(0.0);
    for (int i = 0; i < MAX_LIGHTS; i++) {
      if (i >= uLightCount) break;
      vec2 d = vWorldXZ - uLightPos[i].xz;
      float dist = length(d);
      float a = clamp(1.0 - dist / uLightRadius[i], 0.0, 1.0);
      s += uLightColor[i] * a * a;
    }
    return s;
  }
`,wo="varying vec2 vWorldXZ;";class my{px=new Float32Array(Jt);py=new Float32Array(Jt);pz=new Float32Array(Jt);cr=new Float32Array(Jt);cg=new Float32Array(Jt);cb=new Float32Array(Jt);rad=new Float32Array(Jt);life=new Float32Array(Jt);maxLife=new Float32Array(Jt);prio=new Uint8Array(Jt);uLightPos={value:new Float32Array(Jt*3)};uLightColor={value:new Float32Array(Jt*3)};uLightRadius={value:new Float32Array(Jt)};uLightCount={value:0};capActive;constructor(e=!1){this.capActive=e?6:Jt}spawn(e,t,i,n,s,r,o,l,h=!1){let c=-1,d=1/0;for(let u=0;u<Jt;u++){if(this.life[u]<=0){c=u;break}!h&&this.prio[u]===1||this.life[u]<d&&(d=this.life[u],c=u)}c<0||(this.px[c]=e,this.py[c]=t,this.pz[c]=i,this.cr[c]=n,this.cg[c]=s,this.cb[c]=r,this.rad[c]=o,this.life[c]=l,this.maxLife[c]=l,this.prio[c]=h?1:0)}update(e){const t=this.uLightPos.value,i=this.uLightColor.value,n=this.uLightRadius.value;let s=0;for(let r=0;r<Jt;r++){if(this.life[r]<=0||(this.life[r]-=e,this.life[r]<=0||s>=this.capActive))continue;const o=this.life[r]/this.maxLife[r],l=o*o,h=s*3;t[h]=this.px[r],t[h+1]=this.py[r],t[h+2]=this.pz[r],i[h]=this.cr[r]*l,i[h+1]=this.cg[r]*l,i[h+2]=this.cb[r]*l,n[s]=this.rad[r],s++}this.uLightCount.value=s}uniforms(){return{uLightPos:this.uLightPos,uLightColor:this.uLightColor,uLightRadius:this.uLightRadius,uLightCount:this.uLightCount}}reset(){this.life.fill(0),this.prio.fill(0),this.uLightCount.value=0}get activeCount(){return this.uLightCount.value}}const Ch=420,Rh=42,Kd=Ch/Rh,Tr=240,gy=34;class vy{plane;tex;fireflies;fireflyMat;time=0;constructor(e,t){e.fog=new ic(329226,.017),this.tex=xy(),this.tex.wrapS=vn,this.tex.wrapT=vn,this.tex.repeat.set(Rh,Rh);const i=new tt(Ch,Ch,1,1);i.rotateX(-Math.PI/2);const n=new Fi({map:this.tex,toneMapped:!0});n.onBeforeCompile=h=>{Object.assign(h.uniforms,t),h.vertexShader=h.vertexShader.replace("#include <common>",`#include <common>
${wo}`).replace("#include <project_vertex>",`#include <project_vertex>
  vWorldXZ = (modelMatrix * vec4(transformed, 1.0)).xz;`),h.fragmentShader=h.fragmentShader.replace("#include <common>",`#include <common>
${_o}`).replace("#include <tonemapping_fragment>",`  gl_FragColor.rgb += sampleLights() * 1.35;
#include <tonemapping_fragment>`)},this.plane=new Lt(i,n),this.plane.renderOrder=-1,e.add(this.plane);const s=new zt,r=new Float32Array(Tr*3),o=new Float32Array(Tr),l=new Float32Array(Tr);for(let h=0;h<Tr;h++){const c=Math.random()*Math.PI*2,d=Math.sqrt(Math.random())*gy;r[h*3]=Math.cos(c)*d,r[h*3+1]=.5+Math.random()*7,r[h*3+2]=Math.sin(c)*d,o[h]=Math.random()*Math.PI*2,l[h]=.5+Math.random()*1.2}s.setAttribute("position",new St(r,3)),s.setAttribute("aPhase",new St(o,1)),s.setAttribute("aSpeed",new St(l,1)),this.fireflyMat=new Be({uniforms:{uTime:{value:0},uSize:{value:90},uColor:{value:new Ne(1.5,.85,.4)}},vertexShader:`
        attribute float aPhase;
        attribute float aSpeed;
        uniform float uTime;
        uniform float uSize;
        varying float vTw;
        void main() {
          vec3 p = position;
          p.x += sin(uTime * 0.5 * aSpeed + aPhase) * 0.9;
          p.y += sin(uTime * 0.7 * aSpeed + aPhase * 1.7) * 0.6;
          p.z += cos(uTime * 0.45 * aSpeed + aPhase) * 0.9;
          vTw = 0.5 + 0.5 * sin(uTime * 2.0 * aSpeed + aPhase * 3.0);
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          gl_PointSize = uSize / max(0.1, -mv.z);
          gl_Position = projectionMatrix * mv;
        }
      `,fragmentShader:`
        uniform vec3 uColor;
        varying float vTw;
        void main() {
          float d = length(gl_PointCoord - 0.5);
          if (d > 0.5) discard;
          float a = smoothstep(0.5, 0.0, d);
          gl_FragColor = vec4(uColor * (0.4 + vTw) * a, 1.0);
        }
      `,transparent:!0,blending:jt,depthWrite:!1,depthTest:!0}),this.fireflies=new mf(s,this.fireflyMat),this.fireflies.frustumCulled=!1,e.add(this.fireflies)}update(e,t,i){this.time+=e,this.plane.position.set(t,0,i),this.tex.offset.set(t/Kd,-i/Kd),this.fireflies.position.set(t,0,i),this.fireflyMat.uniforms.uTime.value=this.time}}function xy(){const e=document.createElement("canvas");e.width=512,e.height=512;const t=e.getContext("2d");t.fillStyle="#080a11",t.fillRect(0,0,512,512);const i=(s,r,o,l,h)=>{for(let c=-1;c<=1;c++)for(let d=-1;d<=1;d++)t.fillStyle=`rgba(${l},${l+4},${l+12},${h})`,t.beginPath(),t.arc(s+c*512,r+d*512,o,0,Math.PI*2),t.fill()};for(let s=0;s<40;s++)i(Math.random()*512,Math.random()*512,40+Math.random()*90,6+Math.random()*14,.04);for(let s=0;s<240;s++)i(Math.random()*512,Math.random()*512,8+Math.random()*30,8+Math.random()*26,.05);for(let s=0;s<900;s++)i(Math.random()*512,Math.random()*512,1+Math.random()*6,10+Math.random()*30,.05);t.strokeStyle="rgba(20,24,34,0.45)";for(let s=0;s<22;s++){t.lineWidth=.5+Math.random()*1.6;let r=Math.random()*512,o=Math.random()*512;t.beginPath(),t.moveTo(r,o);const l=3+(Math.random()*5|0);for(let h=0;h<l;h++)r+=(Math.random()*2-1)*55,o+=(Math.random()*2-1)*55,t.lineTo(r,o);t.stroke()}const n=new Ai(e);return n.anisotropy=4,n.needsUpdate=!0,n}const by=new I(18e-5,26e-5,8e-4),yy=.019,ts={uCutFrom:{value:new I(0,40,60)},uCutTo:{value:new I(0,1.2,0)},uCutR:{value:2},uCutOn:{value:0}};function Jd(a,e,t,i,n,s,r){ts.uCutFrom.value.set(a,e,t),ts.uCutTo.value.set(i,n,s),ts.uCutOn.value=r?1:0}const Qd=new Map;function _y(a){const e=Qd.get(a);if(e)return e;const t=document.createElement("canvas");t.width=64,t.height=64;const i=t.getContext("2d"),n=a==="stone"?["#b7b2aa","#948f89","#716e6d","#4e4d52"]:a==="darkStone"?["#8b8988","#69686b","#4c4c52","#303138"]:a==="roof"?["#a5a9a8","#797f82","#545c62","#303943"]:a==="wood"?["#b7ada4","#8f857f","#655d5c","#403a3d"]:["#d8d1be","#afa68e","#817965","#514b42"];if(i.fillStyle=n[1],i.fillRect(0,0,64,64),a==="stone"||a==="darkStone")for(let r=0;r<64;r+=8){const o=(r/8&1)*6;i.fillStyle=n[3],i.fillRect(0,r,64,1);for(let l=-o;l<64;l+=12){i.fillRect(l,r,1,8);const h=l*7+r*11>>>2&1;i.fillStyle=n[h],i.fillRect(l+2,r+2,7,1),i.fillStyle=n[3]}}else if(a==="roof"){i.fillStyle=n[3];for(let r=0;r<64;r+=8)i.fillRect(0,r,64,1);for(let r=0;r<64;r+=8){const o=(r/8&1)*4;for(let l=-o;l<64;l+=8)i.fillStyle=n[2],i.fillRect(l,r+1,1,7),i.fillStyle=n[0],i.fillRect(l+2,r+2,4,1)}}else if(a==="wood"){for(let r=0;r<64;r+=8)i.fillStyle=n[3],i.fillRect(r,0,1,64),i.fillStyle=n[0],i.fillRect(r+2,0,1,64);for(let r=7;r<64;r+=17)i.fillStyle=n[2],i.fillRect(r*5%56+2,r,4,2)}else for(let r=0;r<64;r+=6)i.fillStyle=r/6&1?n[0]:n[2],i.fillRect(0,r,64,2);const s=new Ai(t);return s.colorSpace=Mt,s.wrapS=vn,s.wrapT=vn,s.magFilter=ot,s.minFilter=Oa,s.generateMipmaps=!0,Qd.set(a,s),s}function Ha(a){return new Be({uniforms:{uBase:{value:new Ne(a.base)},uDark:{value:new Ne(a.dark)},uMap:{value:_y(a.surface)},uTextureScale:{value:a.textureScale},uFogColor:{value:by.clone()},uFogDensity:{value:yy},uCutFrom:ts.uCutFrom,uCutTo:ts.uCutTo,uCutR:ts.uCutR,uCutOn:ts.uCutOn},vertexShader:`
      varying vec3 vWorld;
      varying vec3 vNormalWorld;
      varying float vFogDepth;
      void main() {
        mat4 worldMatrix = modelMatrix * instanceMatrix;
        vec4 world = worldMatrix * vec4(position, 1.0);
        vWorld = world.xyz;
        vNormalWorld = normalize(mat3(worldMatrix) * normal);
        vec4 mv = viewMatrix * world;
        vFogDepth = -mv.z;
        gl_Position = projectionMatrix * mv;
      }
    `,fragmentShader:`
      uniform vec3 uBase;
      uniform vec3 uDark;
      uniform sampler2D uMap;
      uniform float uTextureScale;
      uniform vec3 uFogColor;
      uniform float uFogDensity;
      uniform vec3 uCutFrom;
      uniform vec3 uCutTo;
      uniform float uCutR;
      uniform float uCutOn;
      varying vec3 vWorld;
      varying vec3 vNormalWorld;
      varying float vFogDepth;
      void main() {
        // #52 컷어웨이: 카메라→플레이어 광선 실린더 안이고 플레이어보다 카메라 쪽에 있는
        // 조각을 오더드 디더(IGN)로 제거 → 성문루/성벽 뒤 플레이어가 비쳐 보인다.
        if (uCutOn > 0.5) {
          vec3 axis = uCutTo - uCutFrom;
          float pl = length(axis);
          vec3 dir = axis / max(pl, 0.001);
          vec3 rel = vWorld - uCutFrom;
          float along = dot(rel, dir);
          if (along > 0.4 && along < pl - 0.5) {
            float perp = length(rel - dir * along);
            float hole = 1.0 - smoothstep(uCutR * 0.6, uCutR, perp);
            if (hole > 0.001) {
              float ign = fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715))));
              if (hole > ign) discard;
            }
          }
        }
        vec3 n = normalize(vNormalWorld);
        vec2 surfaceUv = abs(n.y) > 0.72
          ? vWorld.xz
          : (abs(n.x) > abs(n.z) ? vWorld.zy : vWorld.xy);
        float texel = texture2D(uMap, surfaceUv * uTextureScale).r;
        vec3 albedo = mix(uDark, uBase, clamp(texel * 1.32, 0.0, 1.0));

        // 장면에 실제 광원이 없어도 형태가 뜨지 않도록 반구광, 지면 반사광, 기단 AO를 합성한다.
        vec3 keyDir = normalize(vec3(-0.48, 0.84, 0.28));
        vec3 fillDir = normalize(vec3(0.62, 0.24, -0.52));
        float key = max(0.0, dot(n, keyDir));
        float fill = max(0.0, dot(n, fillDir));
        float hemi = mix(0.76, 1.04, n.y * 0.5 + 0.5);
        float baseAo = mix(0.74, 1.0, smoothstep(0.0, 1.35, vWorld.y));
        float undersideAo = mix(0.82, 1.0, smoothstep(-0.35, 0.35, n.y));
        vec3 ambientTint = mix(vec3(0.72, 0.66, 0.64), vec3(0.84, 0.9, 1.0), n.y * 0.5 + 0.5);
        vec3 illumination = ambientTint * hemi + vec3(1.0, 0.78, 0.56) * key * 0.34 + vec3(0.38, 0.45, 0.62) * fill * 0.14;
        vec3 col = albedo * illumination * baseAo * undersideAo;

        // 조명을 계단식으로 양자화해 기존 캐릭터 도트와 어울리는 면 분할을 만든다.
        col = floor(col * 18.0 + 0.5) / 18.0;
        float fog = 1.0 - exp(-uFogDensity * uFogDensity * vFogDepth * vFogDepth);
        gl_FragColor = vec4(mix(col, uFogColor, clamp(fog, 0.0, 1.0)), 1.0);
      }
    `,depthWrite:!0,depthTest:!0})}class Bn{mesh;dummy=new Zt;scratch=new mt;w=0;constructor(e,t,i,n){this.mesh=new At(t,i,n),this.mesh.instanceMatrix.setUsage(Pe),this.mesh.count=0,this.mesh.frustumCulled=!1,e.add(this.mesh)}begin(){this.w=0}push(e,t,i,n,s,r,o=0,l=0,h=0){this.w>=this.mesh.instanceMatrix.count||(this.dummy.position.set(e,t,i),this.dummy.rotation.set(h,o,l,"YXZ"),this.dummy.scale.set(n,s,r),this.dummy.updateMatrix(),this.scratch.copy(this.dummy.matrix),this.mesh.setMatrixAt(this.w++,this.scratch))}end(){this.mesh.count=this.w,this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.computeBoundingSphere()}get count(){return this.w}}const wy=Ha({base:10652272,dark:4667956,surface:"stone",textureScale:.46}),My=Ha({base:6511446,dark:2696746,surface:"darkStone",textureScale:.52}),Sy=Ha({base:5404541,dark:2243911,surface:"roof",textureScale:.62}),Ay=Ha({base:14248008,dark:6956323,surface:"wood",textureScale:.72}),eu=Ha({base:14792285,dark:7423265,surface:"gold",textureScale:.8});function Er(){const a=new sn(1,1,1);return a.translate(0,.5,0),a}function Ty(){const a=document.createElement("canvas");a.width=32,a.height=32;const e=a.getContext("2d"),t=e.createRadialGradient(16,16,2,16,16,16);t.addColorStop(0,"rgba(255,255,255,0.78)"),t.addColorStop(.58,"rgba(255,255,255,0.48)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,32,32);const i=new Ai(a);return i.magFilter=ot,i.minFilter=ot,i.generateMipmaps=!1,i}class Ey{stone;darkStone;roof;wood;goldTrim;gold;shadows;constructor(e){this.stone=new Bn(e,Er(),wy,1400),this.darkStone=new Bn(e,Er(),My,720),this.roof=new Bn(e,new sn(1,1,1),Sy,160),this.wood=new Bn(e,Er(),Ay,320),this.goldTrim=new Bn(e,Er(),eu,160),this.gold=new Bn(e,new rc(1,6,4),eu,320);const t=new tt(1,1);t.rotateX(-Math.PI*.5);const i=new Fi({map:Ty(),color:329226,transparent:!0,opacity:.62,depthWrite:!1,depthTest:!0,toneMapped:!1});this.shadows=new Bn(e,t,i,192),this.shadows.mesh.renderOrder=0}begin(){this.stone.begin(),this.darkStone.begin(),this.roof.begin(),this.wood.begin(),this.goldTrim.begin(),this.gold.begin(),this.shadows.begin()}addWall(e){const t=e.hx*2,i=e.hz*2,n=e.horizontal?t:i,s=2.25,r=1.35,o=e.horizontal?n:r,l=e.horizontal?r:n;this.shadows.push(e.x,.035,e.z,o+2.1,1,l+2.1),this.darkStone.push(e.x,0,e.z,o+(e.horizontal?.18:.42),.42,l+(e.horizontal?.42:.18)),this.stone.push(e.x,.32,e.z,o,s-.32,l),this.darkStone.push(e.x,s-.08,e.z,e.horizontal?n+.2:1.72,.22,e.horizontal?1.72:n+.2);const h=Math.max(2,Math.floor(n/1.85)),c=n/h;for(let u=0;u<h;u++){if((u&1)!==0)continue;const f=-n*.5+c*(u+.5);for(const m of[-1,1]){const v=e.x+(e.horizontal?f:m*.54),g=e.z+(e.horizontal?m*.54:f);this.stone.push(v,s+.12,g,e.horizontal?c*.82:.44,.62,e.horizontal?.44:c*.82)}}const d=Math.max(2,Math.ceil(n/5.5));for(let u=0;u<=d;u++){const f=-n*.5+n*u/d,m=e.x+(e.horizontal?f:0),v=e.z+(e.horizontal?0:f);this.darkStone.push(m,0,v,e.horizontal?.42:1.72,1.5,e.horizontal?1.72:.42),this.stone.push(m,1.48,v,e.horizontal?.56:1.62,.28,e.horizontal?1.62:.56)}}addGate(e,t,i){const n=e.horizontal,s=m=>({x:e.x+(n?m:0),z:e.z+(n?0:m)}),r=(m,v,g,p,M,T,w=0)=>{const A=s(v);m.push(A.x,g,A.z,n?p:T,M,n?T:p,w)},o=(m,v,g,p)=>{const M=s(m),T=.18,w=p*.56;n?(this.roof.push(M.x,v+.18,M.z+p*.24,g,.13,w,0,0,T),this.roof.push(M.x,v+.18,M.z-p*.24,g,.13,w,0,0,-T),this.wood.push(M.x,v+.02,M.z+p*.55,g+.28,.14,.12),this.wood.push(M.x,v+.02,M.z-p*.55,g+.28,.14,.12),this.goldTrim.push(M.x,v+.39,M.z,g*.78,.09,.11)):(this.roof.push(M.x+p*.24,v+.18,M.z,w,.13,g,0,-T),this.roof.push(M.x-p*.24,v+.18,M.z,w,.13,g,0,T),this.wood.push(M.x+p*.55,v+.02,M.z,.12,.14,g+.28),this.wood.push(M.x-p*.55,v+.02,M.z,.12,.14,g+.28),this.goldTrim.push(M.x,v+.39,M.z,.11,.09,g*.78))};if(!i){for(const m of[-1,1]){r(this.darkStone,m*3.85,0,.84,.34,1.38),r(this.stone,m*3.85,.28,.66,2.25,1.16),r(this.darkStone,m*3.85,2.48,.92,.18,1.42);const v=s(m*3.85);this.gold.push(v.x,2.86,v.z,.12,.22,.12)}return}this.shadows.push(e.x,.038,e.z,n?12.2:6.2,1,n?6.2:12.2);const l=4.2,h=2.65,c=3.15,d=3.55,u=5;for(const m of[-1,1]){r(this.darkStone,m*l,0,h+.35,.45,c+.4),r(this.stone,m*l,.36,h,d-.36,c),r(this.darkStone,m*l,d-.12,h+.45,.22,c+.45);const v=s(m*l);o(m*l,d+.1,2.78,2.7),this.gold.push(v.x,d+.58,v.z,.12,.18,.12);for(const g of[-.62,.62]){const p=m*l+g*(h*.5);r(this.wood,p,d-.85,.13,.78,c+.18)}}r(this.stone,0,2.36,u+.72,1.02,c+.12),r(this.darkStone,0,3.34,u+1.15,.2,c+.42);const f=c*.5+.1;if(n?(this.wood.push(e.x,2.72,e.z+f,u+.32,.46,.16),this.goldTrim.push(e.x,2.82,e.z+f+.09,1.58,.25,.08)):(this.wood.push(e.x+f,2.72,e.z,.16,.46,u+.32),this.goldTrim.push(e.x+f+.09,2.82,e.z,.08,.25,1.58)),o(0,3.46,5.58,3),t)for(let m=0;m<12;m++){const v=m<6?-1:1,g=m%6/5,p=v*(u*(.26+g*.21)),M=s(p),T=(m*17%7-3)*.16,w=M.x+(n?0:T),A=M.z+(n?T:0);this.stone.push(w,0,A,.45+m%3*.14,.24+m%2*.15,.4+(m+1)%3*.12,m*.37)}else{const v=c*.5-.12;n?this.wood.push(e.x,0,e.z+v,u,2.62,.34):this.wood.push(e.x+v,0,e.z,.34,2.62,u);for(let g=-2;g<=2;g++){const p=s(u/5*g);n?this.darkStone.push(p.x,.12,p.z+v+.03,.09,2.34,.34+.08):this.darkStone.push(p.x+v+.03,.12,p.z,.34+.08,2.34,.09)}n?(this.goldTrim.push(e.x,.72,e.z+v+.08,u+.1,.12,.34+.14),this.goldTrim.push(e.x,1.76,e.z+v+.08,u+.1,.12,.34+.14)):(this.goldTrim.push(e.x+v+.08,.72,e.z,.34+.14,.12,u+.1),this.goldTrim.push(e.x+v+.08,1.76,e.z,.34+.14,.12,u+.1));for(const g of[-1,1]){const p=s(g*.58),M=n?{x:0,z:.23}:{x:.23,z:0};this.gold.push(p.x+M.x,1.27,p.z+M.z,.14,.14,.14)}}}end(){this.stone.end(),this.darkStone.end(),this.roof.end(),this.wood.end(),this.goldTrim.end(),this.gold.end(),this.shadows.end()}get count(){return this.stone.count+this.darkStone.count+this.roof.count+this.wood.count+this.goldTrim.count+this.gold.count+this.shadows.count}}const uc=2.4,Pf=-sa,Cy=48/64,Ry=new I(18e-5,26e-5,8e-4),Py=.019,If=1.15;function Lf(){const a=new tt(Cy,1,1,1);return a.translate(0,.5,0),a.rotateX(Pf),a}const Ff="varying float vFogDepth;",Df=`
  varying float vFogDepth;
  uniform vec3 uFogColor;
  uniform float uFogDensity;
`,Iy=`
  attribute vec2 aUvOffset;
  attribute float aFlash;
  attribute vec3 aTint;
  attribute vec2 aSquash; // #45 19.4 피격 스쿼시(x=폭·y=높이 곱, 기본 1,1) — 빌보드 변환 전 로컬 적용
  uniform vec2 uCellUv;
  varying vec2 vUv;
  varying vec2 vCellLo;
  varying float vFlash;
  varying vec3 vTint;
  ${wo}
  ${Ff}
  void main() {
    vUv = aUvOffset + uv * uCellUv;
    vCellLo = aUvOffset;
    vFlash = aFlash;
    vTint = aTint;
    vWorldXZ = (modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xz;
    vec3 sp = vec3(position.x * aSquash.x, position.y * aSquash.y, position.z);
    vec4 mv = modelViewMatrix * instanceMatrix * vec4(sp, 1.0);
    vFogDepth = -mv.z;
    gl_Position = projectionMatrix * mv;
  }
`,Uf=`
  uniform vec2 uTexel;   // (1/texW, 1/texH)
  uniform vec2 uCellUv;  // 셀 UV 크기
  float nbTrans(vec2 uv, vec2 lo, vec2 hi) {
    if (uv.x < lo.x || uv.y < lo.y || uv.x > hi.x || uv.y > hi.y) return 1.0;
    return texture2D(uMap, uv).a < 0.5 ? 1.0 : 0.0;
  }
  float edgeFactor(vec2 uv, vec2 cellLo) {
    vec2 hi = cellLo + uCellUv;
    float e = nbTrans(uv + vec2(uTexel.x, 0.0), cellLo, hi);
    e = max(e, nbTrans(uv - vec2(uTexel.x, 0.0), cellLo, hi));
    e = max(e, nbTrans(uv + vec2(0.0, uTexel.y), cellLo, hi));
    e = max(e, nbTrans(uv - vec2(0.0, uTexel.y), cellLo, hi));
    return e;
  }
`,Ly=`
  uniform vec2 uCellUv;
  uniform vec2 uUvOffset;
  uniform float uFootDepth;
  varying vec2 vUv;
  ${wo}
  ${Ff}
  void main() {
    vUv = uUvOffset + uv * uCellUv;
    vWorldXZ = (modelMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xz;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    vFogDepth = -mv.z;
    vec4 clip = projectionMatrix * mv;
    // #52 발 기준 깊이: 켜지면 전체 스프라이트 깊이를 발(오브젝트 원점) 깊이로 통일.
    // 기운 빌보드의 머리가 뒤로 밀려 3D 성벽 박스 깊이에 파묻혀 가려지던 문제 해소.
    // 화면 x/y는 그대로 두고 z(깊이)만 발 기준 → 발이 벽 앞이면 전체가 앞, 뒤면 정상 가림.
    if (uFootDepth > 0.5) {
      vec4 footClip = projectionMatrix * modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);
      clip.z = footClip.z / footClip.w * clip.w;
    }
    gl_Position = clip;
  }
`,Fy=`
  uniform sampler2D uMap;
  varying vec2 vUv;
  varying vec2 vCellLo;
  varying float vFlash;
  varying vec3 vTint;
  ${Uf}
  ${_o}
  ${Df}
  void main() {
    vec4 tex = texture2D(uMap, vUv);
    if (tex.a < 0.5) discard;
    vec3 col = pow(tex.rgb, vec3(2.2)) * vTint * ${If.toFixed(3)};
    // 디매팅 프린지 → 어두운 아웃라인으로 눌러 밝은 테두리 제거
    col *= mix(1.0, 0.32, edgeFactor(vUv, vCellLo));
    col += sampleLights() * 0.75; // 폭발/낙뢰가 적을 실제로 비춤
    col = mix(col, vec3(2.0), vFlash); // 피격 화이트 플래시(HDR로 블룸)
    float fog = 1.0 - exp(-uFogDensity * uFogDensity * vFogDepth * vFogDepth);
    col = mix(col, uFogColor, clamp(fog, 0.0, 1.0));
    gl_FragColor = vec4(col, 1.0);
  }
`,Dy=`
  uniform sampler2D uMap;
  uniform vec2 uUvOffset;
  uniform float uFlash;
  uniform vec3 uTint;
  uniform float uPlayer; // 1이면 플레이어(금색 림) / 0이면 다크 아웃라인
  uniform float uAlly; // 1이면 원군(청록 림 — 적과 확실히 구분)
  uniform float uRim; // 림 강도(모바일 저해상도 블룸 대응으로 낮춤)
  varying vec2 vUv;
  ${Uf}
  ${_o}
  ${Df}
  void main() {
    vec4 tex = texture2D(uMap, vUv);
    if (tex.a < 0.5) discard;
    float lift = ${If.toFixed(3)} * mix(1.0, 1.18, max(uPlayer, uAlly));
    vec3 col = pow(tex.rgb, vec3(2.2)) * uTint * lift;
    float edge = edgeFactor(vUv, uUvOffset);
    // 플레이어=금색 림 / 원군=청록 림(아군 표식) / 그 외(보스)=다크 아웃라인
    vec3 darkEdge = col * 0.32;
    vec3 goldRim = mix(darkEdge, vec3(1.9, 1.35, 0.55) * uRim, 0.8);
    vec3 azureRim = mix(darkEdge, vec3(0.45, 1.4, 2.3) * uRim, 0.85);
    vec3 rimC = mix(mix(darkEdge, azureRim, uAlly), goldRim, uPlayer); // 플레이어 우선
    col = mix(col, rimC, edge);
    col += sampleLights() * 0.6;
    col = mix(col, vec3(2.0), uFlash);
    float fog = 1.0 - exp(-uFogDensity * uFogDensity * vFogDepth * vFogDepth);
    col = mix(col, uFogColor, clamp(fog, 0.0, 1.0));
    gl_FragColor = vec4(col, 1.0);
  }
`;function kf(){return{uFogColor:{value:Ry.clone()},uFogDensity:{value:Py}}}class Cr{mesh;matArr;uvArr;flashArr;tintArr;uvAttr;flashAttr;tintAttr;squashArr;squashAttr;w=0;constructor(e,t,i){const n=Lf();this.uvArr=new Float32Array(t*2),this.flashArr=new Float32Array(t),this.tintArr=new Float32Array(t*3),this.uvAttr=new qe(this.uvArr,2),this.flashAttr=new qe(this.flashArr,1),this.tintAttr=new qe(this.tintArr,3),this.uvAttr.setUsage(Pe),this.flashAttr.setUsage(Pe),this.tintAttr.setUsage(Pe),this.squashArr=new Float32Array(t*2),this.squashAttr=new qe(this.squashArr,2),this.squashAttr.setUsage(Pe),n.setAttribute("aUvOffset",this.uvAttr),n.setAttribute("aFlash",this.flashAttr),n.setAttribute("aTint",this.tintAttr),n.setAttribute("aSquash",this.squashAttr);const s=new Be({uniforms:{uMap:{value:e.texture},uCellUv:{value:new ve(e.cellUvW,e.cellUvH)},uTexel:{value:new ve(1/e.texW,1/e.texH)},...i,...kf()},vertexShader:Iy,fragmentShader:Fy,transparent:!1,depthWrite:!0,depthTest:!0});this.mesh=new At(n,s,t),this.mesh.instanceMatrix.setUsage(Pe),this.mesh.frustumCulled=!1,this.mesh.count=0,this.mesh.renderOrder=2,this.matArr=this.mesh.instanceMatrix.array}begin(){this.w=0}push(e,t,i,n,s,r,o,l,h){const c=this.w,d=c*16;this.matArr[d]=i,this.matArr[d+5]=i,this.matArr[d+10]=i,this.matArr[d+12]=e,this.matArr[d+13]=0,this.matArr[d+14]=t,this.matArr[d+15]=1;const u=c*2;this.uvArr[u]=n,this.uvArr[u+1]=s,this.flashArr[c]=r;const f=c*3;this.tintArr[f]=o,this.tintArr[f+1]=l,this.tintArr[f+2]=h,this.squashArr[c*2]=1,this.squashArr[c*2+1]=1,this.w++}setSquash(e,t){const i=this.w-1;i<0||(this.squashArr[i*2]=e,this.squashArr[i*2+1]=t)}end(){this.mesh.count=this.w,this.mesh.instanceMatrix.needsUpdate=!0,this.uvAttr.needsUpdate=!0,this.flashAttr.needsUpdate=!0,this.tintAttr.needsUpdate=!0,this.squashAttr.needsUpdate=!0}}class zf{mesh;mat;worldH;constructor(e,t,i=uc){this.worldH=i,this.mat=new Be({uniforms:{uMap:{value:e.texture},uCellUv:{value:new ve(e.cellUvW,e.cellUvH)},uTexel:{value:new ve(1/e.texW,1/e.texH)},uUvOffset:{value:new ve(0,0)},uFootDepth:{value:0},uFlash:{value:0},uTint:{value:new Ne(1,1,1)},uPlayer:{value:0},uAlly:{value:0},uRim:{value:1},...t,...kf()},vertexShader:Ly,fragmentShader:Dy,transparent:!1,depthWrite:!0,depthTest:!0}),this.mesh=new Lt(Lf(),this.mat),this.mesh.frustumCulled=!1,this.mesh.scale.setScalar(i),this.mesh.renderOrder=2}setPlayer(e){this.mat.uniforms.uPlayer.value=e?1:0}setFootDepth(e){this.mat.uniforms.uFootDepth.value=e?1:0}setAlly(e){this.mat.uniforms.uAlly.value=e?1:0}setRimScale(e){this.mat.uniforms.uRim.value=e}setSquash(e,t){this.mesh.scale.set(this.worldH*e,this.worldH*t,this.worldH*e)}setUv(e,t){this.mat.uniforms.uUvOffset.value.set(e,t)}setFlash(e){this.mat.uniforms.uFlash.value=e}setTint(e,t,i){this.mat.uniforms.uTint.value.setRGB(e,t,i)}setPosition(e,t,i){this.mesh.position.set(e,t,i)}setScale(e){this.mesh.scale.setScalar(e)}}class fc{mesh;matArr;w=0;constructor(e){const t=new vo(1,20);t.rotateX(-Math.PI/2);const i=Uy(),n=new Fi({map:i,color:0,transparent:!0,opacity:.5,depthWrite:!1,depthTest:!0,side:ui,toneMapped:!1});this.mesh=new At(t,n,e),this.mesh.instanceMatrix.setUsage(Pe),this.mesh.frustumCulled=!1,this.mesh.count=0,this.mesh.renderOrder=0,this.matArr=this.mesh.instanceMatrix.array}begin(){this.w=0}push(e,t,i){const n=this.w*16;this.matArr[n]=i,this.matArr[n+5]=1,this.matArr[n+10]=i,this.matArr[n+12]=e,this.matArr[n+13]=.02,this.matArr[n+14]=t,this.matArr[n+15]=1,this.w++}end(){this.mesh.count=this.w,this.mesh.instanceMatrix.needsUpdate=!0}}function Uy(){const e=document.createElement("canvas");e.width=64,e.height=64;const t=e.getContext("2d"),i=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.6,"rgba(255,255,255,0.7)"),i.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=i,t.fillRect(0,0,64,64);const n=new Ai(e);return n.needsUpdate=!0,n}function Ws(a,e,t){return a===0&&e===0?t:Math.abs(a)>Math.abs(e)?a>0?2:1:e>0?0:3}const Ls={palisade:3,warDrum:6,powderCart:8,dumplingCart:9,shrine:10,gong:12},ky=4,zy=4,Ny=new I(18e-5,26e-5,8e-4),Oy=.019;let cl=null;function By(){if(cl)return cl;const a=new Ba().load("/threesur/assets/world/world-kit-atlas-retro.png");return a.colorSpace=Mt,a.magFilter=ot,a.minFilter=Oa,a.generateMipmaps=!0,a.wrapS=Bi,a.wrapT=Bi,cl=a,a}class Nf{mesh;matrices;uvOffsets;tints;uvAttr;tintAttr;cols;rows;w=0;constructor(e,t,i=!0,n=By(),s=ky,r=zy){this.cols=s,this.rows=r;const o=new tt(1,1,1,1);o.translate(0,.5,0),o.rotateX(-sa),this.uvOffsets=new Float32Array(t*2),this.tints=new Float32Array(t*3),this.uvAttr=new qe(this.uvOffsets,2),this.tintAttr=new qe(this.tints,3),i&&(this.uvAttr.setUsage(Pe),this.tintAttr.setUsage(Pe)),o.setAttribute("aUvOffset",this.uvAttr),o.setAttribute("aTint",this.tintAttr);const l=new Be({uniforms:{uMap:{value:n},uCellUv:{value:new ve(1/s,1/r)},uFogColor:{value:Ny.clone()},uFogDensity:{value:Oy}},vertexShader:`
        attribute vec2 aUvOffset;
        attribute vec3 aTint;
        uniform vec2 uCellUv;
        varying vec2 vUv;
        varying vec3 vTint;
        varying float vFogDepth;
        void main() {
          vUv = aUvOffset + uv * uCellUv;
          vTint = aTint;
          vec4 mv = modelViewMatrix * instanceMatrix * vec4(position, 1.0);
          vFogDepth = -mv.z;
          gl_Position = projectionMatrix * mv;
        }
      `,fragmentShader:`
        uniform sampler2D uMap;
        uniform vec3 uFogColor;
        uniform float uFogDensity;
        varying vec2 vUv;
        varying vec3 vTint;
        varying float vFogDepth;
        void main() {
          vec4 tex = texture2D(uMap, vUv);
          if (tex.a < 0.48) discard;
          // Texture.colorSpace가 sRGB 디코딩을 담당하므로 생성 에셋의 어두운 팔레트에
          // 감마를 중복 적용하지 않는다. 약한 리프트만 주어 캐릭터 도트와 명도를 맞춘다.
          vec3 col = tex.rgb * vTint * 1.08;
          float fog = 1.0 - exp(-uFogDensity * uFogDensity * vFogDepth * vFogDepth);
          col = mix(col, uFogColor, clamp(fog, 0.0, 1.0));
          gl_FragColor = vec4(col, 1.0);
        }
      `,transparent:!1,depthWrite:!0,depthTest:!0});this.mesh=new At(o,l,t),i&&this.mesh.instanceMatrix.setUsage(Pe),this.mesh.count=0,this.mesh.renderOrder=1,this.mesh.frustumCulled=!1,this.matrices=this.mesh.instanceMatrix.array,e.add(this.mesh)}begin(){this.w=0}push(e,t,i,n,s,r=1){const o=this.w++,l=o*16;this.matrices[l]=n,this.matrices[l+5]=s,this.matrices[l+10]=s,this.matrices[l+12]=t,this.matrices[l+13]=0,this.matrices[l+14]=i,this.matrices[l+15]=1;const h=o*2,c=e%this.cols,d=Math.floor(e/this.cols);this.uvOffsets[h]=c/this.cols,this.uvOffsets[h+1]=1-(d+1)/this.rows;const u=o*3;this.tints[u]=r,this.tints[u+1]=r,this.tints[u+2]=r}end(){this.mesh.count=this.w,this.mesh.instanceMatrix.needsUpdate=!0,this.uvAttr.needsUpdate=!0,this.tintAttr.needsUpdate=!0}get count(){return this.w}}class Hy{mesh;matrices;w=0;constructor(e,t){const i=new tt(1,1);i.rotateX(-Math.PI/2);const n=Gy(),s=new Fi({map:n,transparent:!0,opacity:.54,depthWrite:!1});this.mesh=new At(i,s,t),this.mesh.count=0,this.mesh.renderOrder=0,this.mesh.frustumCulled=!1,this.matrices=this.mesh.instanceMatrix.array,e.add(this.mesh)}begin(){this.w=0}push(e,t,i,n){const s=this.w++*16;this.matrices[s]=i,this.matrices[s+5]=1,this.matrices[s+10]=n,this.matrices[s+12]=e,this.matrices[s+13]=.025,this.matrices[s+14]=t,this.matrices[s+15]=1}end(){this.mesh.count=this.w,this.mesh.instanceMatrix.needsUpdate=!0}get count(){return this.w}}function Gy(){const e=document.createElement("canvas");e.width=64,e.height=64;const t=e.getContext("2d");t.clearRect(0,0,64,64),t.fillStyle="rgba(72,55,39,0.74)",t.fillRect(2,2,60,60);for(let n=4;n<60;n+=6)for(let s=3+n/6%2*4;s<61;s+=9){const r=66+(s*13+n*7)%22;t.fillStyle=`rgba(${r},${r-10},${r-21},0.48)`,t.fillRect(s,n,6,3)}const i=new Ai(e);return i.colorSpace=Mt,i.magFilter=ot,i.minFilter=Oa,i.wrapS=vn,i.wrapT=vn,i.generateMipmaps=!0,i}class Vy{mesh;constructor(e){const t=new tt(1,1);t.translate(0,.5,0),t.rotateX(-sa);const i=new Ba().load("/threesur/assets/world/hulao-fortress.png");i.colorSpace=Mt,i.magFilter=ot,i.minFilter=Oa,i.generateMipmaps=!0,i.repeat.set(1,.62),i.offset.set(0,.38);const n=new Fi({map:i,alphaTest:.08,transparent:!0,opacity:.72,depthWrite:!1,depthTest:!0,toneMapped:!1,side:ui});this.mesh=new Lt(t,n),this.mesh.visible=!1,this.mesh.frustumCulled=!1,this.mesh.renderOrder=-1,e.add(this.mesh)}place(e,t){this.mesh.visible=!0,this.mesh.position.set(e,4.1,t-5.6),this.mesh.scale.set(14,6.4,6.4)}}class Wy{map;sprites;roads;fortress;landmark;propShadows;revision=-1;constructor(e,t){this.map=t,this.sprites=new Nf(e,320,!1),this.roads=new Hy(e,160),this.fortress=new Ey(e),this.landmark=new Vy(e),this.propShadows=new fc(64),e.add(this.propShadows.mesh)}update(){if(this.revision!==this.map.revision){this.revision=this.map.revision,this.sprites.begin(),this.fortress.begin(),this.roads.begin(),this.propShadows.begin(),this.landmark.mesh.visible=!1;for(const e of this.map.roads)this.roads.push(e.x,e.z,e.width,e.depth);for(const e of this.map.walls)this.fortress.addWall(e);for(const e of this.map.gates){const t=this.map.isGateBreached(e.key);e.key==="origin-north"&&this.landmark.place(e.x,e.z);const i=e.key==="origin-north"||e.key.startsWith("castle-");this.fortress.addGate(e,t,i)}for(const e of this.map.props)this.sprites.push(e.kind,e.x,e.z,e.width,e.height,.96),this.propShadows.push(e.x,e.z,Math.max(.8,e.width*.38));this.roads.end(),this.fortress.end(),this.sprites.end(),this.propShadows.end()}}get visibleProps(){return this.sprites.count+this.fortress.count+this.roads.count}get landmarkVisible(){return this.landmark.mesh.visible}}const Gt=72;class Xy{x=new Float32Array(Gt);y=new Float32Array(Gt);z=new Float32Array(Gt);vx=new Float32Array(Gt);vy=new Float32Array(Gt);vz=new Float32Array(Gt);life=new Float32Array(Gt);ttl=new Float32Array(Gt);sx=new Float32Array(Gt);sy=new Float32Array(Gt);sz=new Float32Array(Gt);cr=new Float32Array(Gt);cg=new Float32Array(Gt);cb=new Float32Array(Gt);cursor=0;mesh;matrices;colors;fades;colorAttr;fadeAttr;constructor(e){const t=new sn(1,1,1);this.colors=new Float32Array(Gt*3),this.fades=new Float32Array(Gt),this.colorAttr=new qe(this.colors,3),this.fadeAttr=new qe(this.fades,1),this.colorAttr.setUsage(Pe),this.fadeAttr.setUsage(Pe),t.setAttribute("aColor",this.colorAttr),t.setAttribute("aFade",this.fadeAttr);const i=new Be({vertexShader:`
        attribute vec3 aColor;
        attribute float aFade;
        varying vec3 vColor;
        varying float vFade;
        void main() {
          vColor = aColor;
          vFade = aFade;
          gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        varying vec3 vColor;
        varying float vFade;
        void main() {
          float bayer = mod(gl_FragCoord.x + gl_FragCoord.y * 2.0, 4.0) / 4.0;
          if (vFade < bayer * 0.72) discard;
          vec3 stepped = floor(vColor * 5.0 + 0.5) / 5.0;
          gl_FragColor = vec4(stepped * (1.0 + vFade * 0.55), 1.0);
        }
      `,transparent:!1,depthWrite:!0,depthTest:!0});this.mesh=new At(t,i,Gt),this.mesh.instanceMatrix.setUsage(Pe),this.mesh.count=0,this.mesh.frustumCulled=!1,this.mesh.renderOrder=3,this.matrices=this.mesh.instanceMatrix.array,e.add(this.mesh)}reset(){this.life.fill(0),this.mesh.count=0}burst(e,t){const i="ontouchstart"in window?28:48;for(let n=0;n<i;n++){const s=this.cursor++%Gt,r=Math.random()*Math.PI*2,o=2.4+Math.random()*5.2;if(this.x[s]=e+(Math.random()-.5)*3.4,this.y[s]=.8+Math.random()*3.8,this.z[s]=t+(Math.random()-.5)*1.2,this.vx[s]=Math.cos(r)*o,this.vz[s]=Math.sin(r)*o,this.vy[s]=3.8+Math.random()*6.5,this.ttl[s]=.75+Math.random()*.75,this.life[s]=this.ttl[s],this.sx[s]=.16+Math.random()*.42,this.sy[s]=.12+Math.random()*.5,this.sz[s]=.14+Math.random()*.4,n%4===0)this.cr[s]=1.08,this.cg[s]=.3,this.cb[s]=.13;else{const l=.34+Math.random()*.28;this.cr[s]=l*1.1,this.cg[s]=l*.78,this.cb[s]=l*.58}}}update(e){let t=0;for(let i=0;i<Gt;i++){if(this.life[i]<=0||(this.life[i]-=e,this.life[i]<=0))continue;this.vy[i]-=12*e,this.x[i]+=this.vx[i]*e,this.y[i]+=this.vy[i]*e,this.z[i]+=this.vz[i]*e,this.vx[i]*=Math.max(0,1-e*1.5),this.vz[i]*=Math.max(0,1-e*1.5),this.y[i]<.12&&(this.y[i]=.12,this.vy[i]*=-.28);const n=t*16;this.matrices[n]=this.sx[i],this.matrices[n+5]=this.sy[i],this.matrices[n+10]=this.sz[i],this.matrices[n+12]=this.x[i],this.matrices[n+13]=this.y[i],this.matrices[n+14]=this.z[i],this.matrices[n+15]=1;const s=t*3;this.colors[s]=this.cr[i],this.colors[s+1]=this.cg[i],this.colors[s+2]=this.cb[i],this.fades[t]=this.life[i]/this.ttl[i],t++}this.mesh.count=t,this.mesh.instanceMatrix.needsUpdate=!0,this.colorAttr.needsUpdate=!0,this.fadeAttr.needsUpdate=!0}get activeCount(){return this.mesh.count}}function Of(a,e=!1){const t=a[0].index!==null,i=new Set(Object.keys(a[0].attributes)),n=new Set(Object.keys(a[0].morphAttributes)),s={},r={},o=a[0].morphTargetsRelative,l=new zt;let h=0;for(let c=0;c<a.length;++c){const d=a[c];let u=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in d.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(d.attributes[f]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in d.morphAttributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.morphAttributes[f])}if(e){let f;if(t)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;l.addGroup(h,f,c),h+=f}}if(t){let c=0;const d=[];for(let u=0;u<a.length;++u){const f=a[u].index;for(let m=0;m<f.count;++m)d.push(f.getX(m)+c);c+=a[u].attributes.position.count}l.setIndex(d)}for(const c in s){const d=tu(s[c]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;l.setAttribute(c,d)}for(const c in r){const d=r[c][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[c]=[];for(let u=0;u<d;++u){const f=[];for(let v=0;v<r[c].length;++v)f.push(r[c][v][u]);const m=tu(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;l.morphAttributes[c].push(m)}}}return l}function tu(a){let e,t,i,n=-1,s=0;for(let h=0;h<a.length;++h){const c=a[h];if(e===void 0&&(e=c.array.constructor),e!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=c.itemSize),t!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=c.normalized),i!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(n===-1&&(n=c.gpuType),n!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=c.count*t}const r=new e(s),o=new St(r,t,i);let l=0;for(let h=0;h<a.length;++h){const c=a[h];if(c.isInterleavedBufferAttribute){const d=l/t;for(let u=0,f=c.count;u<f;u++)for(let m=0;m<t;m++){const v=c.getComponent(u,m);o.setComponent(u+d,m,v)}}else r.set(c.array,l);l+=c.count*t}return n!==void 0&&(o.gpuType=n),o}const Bf=0,iu=1,qy=2,Yr=3,$y=["attack-spear","attack-guandao","attack-zhangba","attack-halberd"];function jy(a){const e=new Ba().load(`/threesur/assets/projectiles/${a}.png`);return e.colorSpace=Mt,e.magFilter=ot,e.minFilter=ot,e.generateMipmaps=!1,e}class Zy{pools=[[],[],[],[]];cursors=new Uint8Array(4);constructor(e){const t=new tt(1,1);t.rotateX(-Math.PI*.5);const i=t.clone();i.translate(.5,0,0);for(let n=0;n<4;n++){const s=jy($y[n]),r=n===Bf?i:t;for(let o=0;o<8;o++){const l=new Fi({map:s,transparent:!0,opacity:0,blending:en,depthWrite:!1,depthTest:!0,toneMapped:!1}),h=new Lt(r,l);h.visible=!1,h.frustumCulled=!1,h.renderOrder=5,e.add(h),this.pools[n].push({mesh:h,material:l,age:0,duration:.2,scaleX:1,scaleZ:1,active:!1})}}}spawn(e,t,i,n,s,r,o,l){const h=this.pools[e],c=this.cursors[e];this.cursors[e]=(c+1)%h.length;const d=h[c];d.age=0,d.duration=l,d.scaleX=r,d.scaleZ=o,d.active=!0,d.mesh.visible=!0,d.mesh.position.set(t,.72,i),d.mesh.rotation.y=Math.atan2(-s,n),d.mesh.scale.set(r*.88,1,o*.88),d.material.opacity=1}update(e){for(const t of this.pools)for(const i of t){if(!i.active)continue;i.age+=e;const n=i.age/i.duration;if(n>=1){i.active=!1,i.mesh.visible=!1;continue}const r=.88+(1-(1-n)*(1-n))*.16;i.mesh.scale.set(i.scaleX*r,1,i.scaleZ*r),i.material.opacity=Math.min(1,(1-n)*1.7)}}}const kt=12,Ph=0,nu=1,dl=2;class Yy{x=new Float32Array(kt);z=new Float32Array(kt);ang=new Float32Array(kt);sx=new Float32Array(kt);sz=new Float32Array(kt);shape=new Float32Array(kt);param=new Float32Array(kt);life=new Float32Array(kt);maxLife=new Float32Array(kt);cr=new Float32Array(kt);cg=new Float32Array(kt);cb=new Float32Array(kt);alive=new Uint8Array(kt);cursor=0;mesh;matArr;aShape;aProg;aParam;aCol;aAlpha;shapeAttr;progAttr;paramAttr;colAttr;alphaAttr;constructor(e){const t=new tt(1,1);t.rotateX(-Math.PI/2),this.aShape=new Float32Array(kt),this.aProg=new Float32Array(kt),this.aParam=new Float32Array(kt),this.aCol=new Float32Array(kt*3),this.aAlpha=new Float32Array(kt),this.shapeAttr=new qe(this.aShape,1),this.progAttr=new qe(this.aProg,1),this.paramAttr=new qe(this.aParam,1),this.colAttr=new qe(this.aCol,3),this.alphaAttr=new qe(this.aAlpha,1);for(const n of[this.shapeAttr,this.progAttr,this.paramAttr,this.colAttr,this.alphaAttr])n.setUsage(Pe);t.setAttribute("aShape",this.shapeAttr),t.setAttribute("aProg",this.progAttr),t.setAttribute("aParam",this.paramAttr),t.setAttribute("aCol",this.colAttr),t.setAttribute("aAlpha",this.alphaAttr);const i=new Be({vertexShader:`
        attribute float aShape; attribute float aProg; attribute float aParam;
        attribute vec3 aCol; attribute float aAlpha;
        varying vec2 vUv; varying float vShape; varying float vProg; varying float vParam;
        varying vec3 vCol; varying float vAlpha;
        void main() {
          vUv = uv; vShape = aShape; vProg = aProg; vParam = aParam; vCol = aCol; vAlpha = aAlpha;
          gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        varying vec2 vUv; varying float vShape; varying float vProg; varying float vParam;
        varying vec3 vCol; varying float vAlpha;
        void main() {
          vec2 p = (vUv - 0.5) * 2.0; // [-1,1]
          float len = length(p);
          float m; float border;
          if (vShape < 0.5) {                 // 원
            m = 1.0 - step(1.0, len);
            border = smoothstep(0.82, 1.0, len);
          } else if (vShape < 1.5) {          // 콘: 중심 apex, +x 방향, 반각 vParam
            float ang = atan(p.y, p.x);
            m = (1.0 - step(1.0, len)) * (1.0 - step(vParam, abs(ang)));
            float radB = smoothstep(0.82, 1.0, len);
            float angB = smoothstep(vParam * 0.8, vParam, abs(ang));
            border = min(1.0, radB + angB);
          } else {                            // 사각: 쿼드 전체
            m = 1.0;
            vec2 d = abs(p);
            border = max(smoothstep(0.8, 1.0, d.x), smoothstep(0.8, 1.0, d.y));
          }
          if (m < 0.5) discard;
          // 채움 스윕: 원은 반경, 콘/사각은 진행 축(uv.x) 따라 진홍이 차오름 = 남은 시간.
          float fill = (vShape < 0.5) ? step(len, vProg) : step(vUv.x, vProg);
          float a = (0.14 + 0.14 * fill + 0.32 * border) * vAlpha;
          if (a < 0.01) discard;
          vec3 col = vCol * (0.75 + 0.5 * fill) + border * vCol * 0.7;
          gl_FragColor = vec4(col, a);
        }
      `,transparent:!0,blending:en,depthWrite:!1,depthTest:!0});this.mesh=new At(t,i,kt),this.mesh.instanceMatrix.setUsage(Pe),this.mesh.frustumCulled=!1,this.mesh.count=0,this.mesh.renderOrder=2,this.matArr=this.mesh.instanceMatrix.array,e.add(this.mesh)}reset(){this.alive.fill(0),this.mesh.count=0}spawn(e,t,i,n,s,r,o,l,h,c,d){const u=this.cursor;this.cursor=(this.cursor+1)%kt,this.x[u]=t,this.z[u]=i,this.ang[u]=n,this.sx[u]=s,this.sz[u]=r,this.shape[u]=e,this.param[u]=o,this.life[u]=l,this.maxLife[u]=l,this.cr[u]=h,this.cg[u]=c,this.cb[u]=d,this.alive[u]=1}update(e){let t=0;for(let i=0;i<kt;i++){if(this.alive[i]===0)continue;if(this.life[i]-=e,this.life[i]<=0){this.alive[i]=0;continue}const n=Math.cos(this.ang[i]),s=Math.sin(this.ang[i]),r=this.sx[i],o=this.sz[i],l=t*16;this.matArr[l]=n*r,this.matArr[l+1]=0,this.matArr[l+2]=-s*r,this.matArr[l+3]=0,this.matArr[l+4]=0,this.matArr[l+5]=1,this.matArr[l+6]=0,this.matArr[l+7]=0,this.matArr[l+8]=s*o,this.matArr[l+9]=0,this.matArr[l+10]=n*o,this.matArr[l+11]=0,this.matArr[l+12]=this.x[i],this.matArr[l+13]=.05,this.matArr[l+14]=this.z[i],this.matArr[l+15]=1,this.aShape[t]=this.shape[i],this.aProg[t]=1-this.life[i]/this.maxLife[i],this.aParam[t]=this.param[i],this.aCol[t*3]=this.cr[i],this.aCol[t*3+1]=this.cg[i],this.aCol[t*3+2]=this.cb[i],this.aAlpha[t]=Math.min(1,(this.maxLife[i]-this.life[i])/.12),t++}this.mesh.count=t,this.mesh.instanceMatrix.needsUpdate=!0,this.shapeAttr.needsUpdate=!0,this.progAttr.needsUpdate=!0,this.paramAttr.needsUpdate=!0,this.colAttr.needsUpdate=!0,this.alphaAttr.needsUpdate=!0}}const si=6,Ky=12;class Jy{x=new Float32Array(si);y=new Float32Array(si);z=new Float32Array(si);vx=new Float32Array(si);vy=new Float32Array(si);vz=new Float32Array(si);rot=new Float32Array(si);spin=new Float32Array(si);life=new Float32Array(si);maxLife=new Float32Array(si);alive=new Uint8Array(si);cursor=0;mesh;matArr;aFade;fadeAttr;constructor(e){const t=new tt(1,1);this.aFade=new Float32Array(si),this.fadeAttr=new qe(this.aFade,1),this.fadeAttr.setUsage(Pe),t.setAttribute("aFade",this.fadeAttr);const i=new Be({vertexShader:`
        attribute float aFade; varying vec2 vUv; varying float vFade;
        void main() { vUv = uv; vFade = aFade; gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0); }
      `,fragmentShader:`
        varying vec2 vUv; varying float vFade;
        void main() {
          vec2 p = (vUv - 0.5) * 2.0;
          float r = length(p);
          float a = atan(p.y, p.x);
          // 5각별 SDF: 각도별 반경 경계
          float star = 0.5 + 0.42 * cos(floor(0.5 + a * 5.0 / 3.14159265 * 1.5) * 3.14159265 * 2.0 / 5.0 - a);
          // 채운 별 + 얇은 밝은 테두리 + 아주 옅은 중앙 광택 → 블롭이 아니라 '별 실루엣'으로 읽히게.
          float fill = smoothstep(star + 0.05, star - 0.03, r) * 0.82;
          float rim = smoothstep(0.09, 0.0, abs(r - star)) * 0.55;
          float core = smoothstep(0.30, 0.0, r) * 0.13;
          float b = (fill + rim + core) * vFade;
          if (b < 0.01) discard;
          // 옅은 상아빛(금색 강조 X, 오너 피드백). 블룸에 안 타는 낮은 명도 — 존재만 하고 눈에 안 튐.
          vec3 col = vec3(0.85, 0.82, 0.66);
          gl_FragColor = vec4(col * b, b);
        }
      `,transparent:!0,blending:jt,depthWrite:!1,depthTest:!1});this.mesh=new At(t,i,si),this.mesh.instanceMatrix.setUsage(Pe),this.mesh.frustumCulled=!1,this.mesh.count=0,this.mesh.renderOrder=20,this.matArr=this.mesh.instanceMatrix.array,e.add(this.mesh)}reset(){this.alive.fill(0),this.mesh.count=0}activeCount(){let e=0;for(let t=0;t<si;t++)e+=this.alive[t];return e}spawn(e,t,i,n){if(this.activeCount()>=2)return;const s=this.cursor;this.cursor=(this.cursor+1)%si,this.x[s]=e,this.y[s]=1,this.z[s]=t,this.vx[s]=i*22+(Math.random()-.5)*2,this.vy[s]=6+Math.random()*2,this.vz[s]=n*22+(Math.random()-.5)*2,this.rot[s]=Math.random()*6.28,this.spin[s]=7+Math.random()*5,this.life[s]=1.1,this.maxLife[s]=1.1,this.alive[s]=1}update(e){let t=0;for(let i=0;i<si;i++){if(this.alive[i]===0)continue;if(this.life[i]-=e,this.life[i]<=0){this.alive[i]=0;continue}this.vy[i]-=Ky*e,this.x[i]+=this.vx[i]*e,this.y[i]+=this.vy[i]*e,this.z[i]+=this.vz[i]*e,this.rot[i]+=this.spin[i]*e;const n=this.life[i]/this.maxLife[i],s=this.maxLife[i]-this.life[i],r=.88+.12*Math.min(1,s/.05),o=.8+.2*Math.min(1,n/.28),l=1.25*r*o,h=Math.cos(this.rot[i])*l,c=Math.sin(this.rot[i])*l,d=t*16;this.matArr[d]=h,this.matArr[d+1]=c,this.matArr[d+2]=0,this.matArr[d+3]=0,this.matArr[d+4]=-c,this.matArr[d+5]=h,this.matArr[d+6]=0,this.matArr[d+7]=0,this.matArr[d+8]=0,this.matArr[d+9]=0,this.matArr[d+10]=l,this.matArr[d+11]=0,this.matArr[d+12]=this.x[i],this.matArr[d+13]=this.y[i],this.matArr[d+14]=this.z[i],this.matArr[d+15]=1;const u=Math.min(1,n/.22),f=1+.3*Math.max(0,1-s/.08);this.aFade[t]=Math.min(1.1,u*f),t++}this.mesh.count=t,this.mesh.instanceMatrix.needsUpdate=!0,this.fadeAttr.needsUpdate=!0}}class Qy{scene;thrusts=[];arcs=[];rings=[];bolts=[];chains=[];tCur=0;aCur=0;rCur=0;bCur=0;cCur=0;flashes=[];fCur=0;flashThisFrame=0;attackSprites;telegraph;koStar;decals=[];dCur=0;fireWalls=[];fwCur=0;meteors=[];mCur=0;ringQT=new Float32Array(8);ringQX=new Float32Array(8);ringQZ=new Float32Array(8);ringQR=new Float32Array(8);ringQCr=new Float32Array(8);ringQCg=new Float32Array(8);ringQCb=new Float32Array(8);ringQActive=new Uint8Array(8);rqCur=0;crestTexCache=new Map;baguaTexCache=null;screenFlash=null;spawnLight=null;spawnDecal=null;spawnMusouLight=null;constructor(e){this.scene=e,this.attackSprites=new Zy(e),this.telegraph=new Yy(e),this.koStar=new Jy(e);const t=new tt(1,1,1,1);t.rotateX(-Math.PI/2),t.translate(.5,0,0);for(let f=0;f<24;f++)this.thrusts.push(this.makeSlot(t,i_,1));const i=e_(56);for(let f=0;f<20;f++)this.arcs.push(this.makeSlot(i,n_,1,t_));const n=new oo(.8,1,48);n.rotateX(-Math.PI/2);for(let f=0;f<24;f++)this.rings.push(this.makeSlot(n,s_,.05));const s=new tt(1,1,1,1);s.translate(0,.5,0);const r=new tt(1,1,1,1);r.rotateY(Math.PI/2),r.translate(0,.5,0);const o=Of([s,r]);for(let f=0;f<16;f++)this.bolts.push(this.makeSlot(o,r_,.16));const l=new tt(1,1,1,1);l.rotateX(-Math.PI/2),l.translate(.5,0,0);for(let f=0;f<40;f++)this.chains.push(this.makeSlot(l,o_,.12));const h=new oo(0,1,28);h.rotateX(-Math.PI/2);for(let f=0;f<24;f++)this.flashes.push(this.makeSlot(h,a_,.2));const c=new tt(1,1);c.rotateX(-Math.PI/2);for(let f=0;f<6;f++){const m=new Be({uniforms:{uMap:{value:null},uAlpha:{value:0},uColor:{value:new Ne(1,1,1)}},vertexShader:ul,fragmentShader:l_,transparent:!0,blending:jt,depthWrite:!1,depthTest:!0}),v=new Lt(c,m);v.visible=!1,v.frustumCulled=!1,v.renderOrder=1,this.scene.add(v),this.decals.push({mesh:v,mat:m,age:0,dur:1,active:!1,rot:0})}const d=new tt(1,1,1,1);d.rotateX(-Math.PI/2),d.translate(.5,0,0);for(let f=0;f<16;f++)this.fireWalls.push(this.makeSlot(d,h_,1));const u=new tt(1,1,1,1);u.translate(0,.5,0);for(let f=0;f<20;f++){const m=new Be({uniforms:{uColor:{value:new Ne(1,1,1)},uT:{value:0}},vertexShader:ul,fragmentShader:c_,transparent:!0,blending:jt,depthWrite:!1,depthTest:!0}),v=new Lt(u,m);v.visible=!1,v.frustumCulled=!1,v.renderOrder=4,this.scene.add(v),this.meteors.push({mesh:v,mat:m,age:0,dur:1,active:!1,tx:0,tz:0,h0:14,r:1,g:1,b:1})}}makeSlot(e,t,i,n=ul){const s=new Be({uniforms:{uT:{value:0},uAlpha:{value:0},uColor:{value:new Ne(1,1,1)},uHalf:{value:Math.PI},uSeed:{value:0}},vertexShader:n,fragmentShader:t,transparent:!0,blending:jt,depthWrite:!1,depthTest:!0}),r=new Lt(e,s);return r.visible=!1,r.frustumCulled=!1,r.renderOrder=4,this.scene.add(r),{mesh:r,mat:s,age:0,dur:i,active:!1,data:0}}spawnThrust(e,t,i,n,s,r,o=.7,l=.95,h=1.7,c=.15,d=!0){const u=this.thrusts[this.tCur];this.tCur=(this.tCur+1)%this.thrusts.length,u.age=0,u.dur=c,u.active=!0,u.mesh.visible=!0,u.mesh.position.set(e,1,t),u.mesh.rotation.y=Math.atan2(-n,i),u.mesh.scale.set(s,1,r),u.mat.uniforms.uColor.value.setRGB(o,l,h),u.mat.uniforms.uAlpha.value=1,d&&this.attackSprites.spawn(Bf,e,t,i,n,s,r*.82,c*1.22)}spawnDoubleThrust(e,t,i,n,s,r,o=1.2,l=1,h=.7,c=.16){this.spawnThrust(e,t,i,n,s,r,o,l,h,c,!1),this.spawnThrust(e,t,-i,-n,s,r,o,l,h,c,!1),this.attackSprites.spawn(qy,e,t,i,n,s*2.15,r*.9,c*1.2)}spawnSlashArc(e,t,i,n,s,r,o=1.6,l=.9,h=.5,c=.22,d=iu){const u=this.arcs[this.aCur];this.aCur=(this.aCur+1)%this.arcs.length,u.age=0,u.dur=c,u.active=!0,u.mesh.visible=!0,u.mesh.position.set(e,.6,t),u.mesh.rotation.y=Math.atan2(-n,i),u.mesh.scale.setScalar(s),u.mat.uniforms.uColor.value.setRGB(o,l,h),u.mat.uniforms.uHalf.value=r,u.mat.uniforms.uT.value=0;const f=d===Yr?2.05:1.45;this.attackSprites.spawn(d===Yr?Yr:iu,e,t,i,n,s*f,s*f,c*1.1)}spawnRing(e,t,i,n=1.4,s=1.2,r=.7,o=.5){const l=this.rings[this.rCur];this.rCur=(this.rCur+1)%this.rings.length,l.age=0,l.dur=o,l.active=!0,l.data=i,l.mesh.visible=!0,l.mesh.position.set(e,.5,t),l.mesh.scale.setScalar(i*.15),l.mat.uniforms.uColor.value.setRGB(n,s,r),l.mat.uniforms.uT.value=0,i>=3&&(this.spawnLight&&this.spawnLight(e,t,n,s,r,i*1.8,o*.7),this.spawnDecal&&this.spawnDecal(e,t,i*1.15,n,s,r))}spawnFlash(e,t,i,n,s,r){if(this.flashThisFrame>=3)return;this.flashThisFrame++;const o=this.flashes[this.fCur];this.fCur=(this.fCur+1)%this.flashes.length,o.age=0,o.dur=.2,o.active=!0,o.data=r,o.mesh.visible=!0,o.mesh.position.set(e,.45,t),o.mesh.scale.setScalar(r*.6),o.mat.uniforms.uColor.value.setRGB(i,n,s),o.mat.uniforms.uT.value=0,this.spawnLight&&this.spawnLight(e,t,i,n,s,r*1.6,.12+r*.02)}spawnTelegraph(e,t,i,n,s,r,o,l,h=.95,c=.18,d=.18){this.telegraph.spawn(e,t,i,n,s,r,o,l,h,c,d)}spawnKOStar(e,t,i,n){this.koStar.spawn(e,t,i,n)}spawnLightning(e,t,i=1.4,n=1.8,s=2.6,r=7){const o=this.bolts[this.bCur];this.bCur=(this.bCur+1)%this.bolts.length,o.age=0,o.dur=.16,o.active=!0,o.mesh.visible=!0,o.mesh.position.set(e,0,t),o.mesh.scale.set(2.2,r,1),o.mat.uniforms.uColor.value.setRGB(i,n,s),o.mat.uniforms.uSeed.value=Math.random(),o.mat.uniforms.uT.value=0,this.spawnRing(e,t,2.2,i*.8,n*.8,s,.4),this.screenFlash&&this.screenFlash(.16),this.spawnLight&&this.spawnLight(e,t,i,n,s,9,.3),this.spawnDecal&&this.spawnDecal(e,t,3.2,i,n,s)}spawnChainArc(e,t,i,n,s=1.2,r=1.8,o=2.6){const l=this.chains[this.cCur];this.cCur=(this.cCur+1)%this.chains.length;const h=i-e,c=n-t,d=Math.hypot(h,c)||.001;l.age=0,l.dur=.13,l.active=!0,l.mesh.visible=!0,l.mesh.position.set(e,.8,t),l.mesh.rotation.y=Math.atan2(-c,h),l.mesh.scale.set(d,1,.9),l.mat.uniforms.uColor.value.setRGB(s,r,o),l.mat.uniforms.uSeed.value=Math.random(),l.mat.uniforms.uT.value=0}spawnCrest(e,t,i,n,s,r,o=5){this.placeDecal(this.crestTexture(i),e,t,6.4,o,.4,n,s,r)}spawnBaguaSigil(e,t,i=5){this.placeDecal(this.baguaTexture(),e,t,8.4,i,.9,.6,1.5,2.4)}placeDecal(e,t,i,n,s,r,o,l,h){const c=this.decals[this.dCur];this.dCur=(this.dCur+1)%this.decals.length,c.mat.uniforms.uMap.value=e,c.mat.uniforms.uColor.value.setRGB(o,l,h),c.mesh.position.set(t,.07,i),c.mesh.scale.set(n,1,n),c.mesh.rotation.y=0,c.age=0,c.dur=s,c.rot=r,c.active=!0,c.mesh.visible=!0}spawnTripleShock(e,t,i,n=1.6,s=1,r=.4){this.spawnRing(e,t,i,n,s,r,.55);for(let o=1;o<=2;o++){const l=this.rqCur;this.rqCur=(this.rqCur+1)%8,this.ringQT[l]=o*.11,this.ringQX[l]=e,this.ringQZ[l]=t,this.ringQR[l]=i*(1+o*.35),this.ringQCr[l]=n,this.ringQCg[l]=s,this.ringQCb[l]=r,this.ringQActive[l]=1}}spawnFireWall(e,t,i,n,s,r=1.8,o=2.2){const l=this.fireWalls[this.fwCur];this.fwCur=(this.fwCur+1)%this.fireWalls.length,l.age=0,l.dur=o,l.active=!0,l.mesh.visible=!0,l.mesh.position.set(e,.15,t),l.mesh.rotation.y=Math.atan2(-n,i),l.mesh.scale.set(s,1,r),l.mat.uniforms.uColor.value.setRGB(2.4,.7,.2),l.mat.uniforms.uAlpha.value=1}spawnMeteorArrow(e,t,i=1.7,n=1.4,s=.6,r=.5){const o=this.meteors[this.mCur];this.mCur=(this.mCur+1)%this.meteors.length,o.age=0,o.dur=r,o.active=!0,o.tx=e,o.tz=t,o.h0=16,o.r=i,o.g=n,o.b=s,o.mat.uniforms.uColor.value.setRGB(i,n,s),o.mesh.visible=!0}spawnFlameTrail(e,t,i=.4,n=1.9,s=1.1){this.spawnFlash(e,t,i,n,s,1.5)}update(e){this.flashThisFrame=0,this.attackSprites.update(e),this.telegraph.update(e),this.koStar.update(e),this.tickThrust(e),this.tickArc(e),this.tickRing(e),this.tickFlash(e),this.tickDecals(e),this.tickFireWalls(e),this.tickMeteors(e),this.tickRingQueue(e),this.tickSimple(this.bolts,e),this.tickSimple(this.chains,e)}tickDecals(e){for(const t of this.decals){if(!t.active)continue;if(t.age+=e,t.age>=t.dur){t.active=!1,t.mesh.visible=!1;continue}t.mesh.rotation.y+=t.rot*e;const i=t.age/t.dur,n=Math.min(1,i*6)*Math.min(1,(1-i)*3)*(.85+.15*Math.sin(t.age*6));t.mat.uniforms.uAlpha.value=n}}tickFireWalls(e){for(const t of this.fireWalls){if(!t.active)continue;t.age+=e;const i=t.age/t.dur;if(i>=1){this.retire(t);continue}t.mat.uniforms.uAlpha.value=Math.min(1,(1-i)*2.5),t.mat.uniforms.uT.value=t.age}}tickMeteors(e){for(const t of this.meteors){if(!t.active)continue;t.age+=e;const i=t.age/t.dur;if(i>=1){t.active=!1,t.mesh.visible=!1,this.spawnRing(t.tx,t.tz,2.6,t.r,t.g,t.b,.4);continue}const n=t.h0*(1-i)*(1-i);t.mesh.position.set(t.tx,n,t.tz),t.mesh.scale.set(.5,2.4,1),t.mat.uniforms.uT.value=i}}tickRingQueue(e){for(let t=0;t<8;t++)this.ringQActive[t]!==0&&(this.ringQT[t]-=e,this.ringQT[t]<=0&&(this.ringQActive[t]=0,this.spawnRing(this.ringQX[t],this.ringQZ[t],this.ringQR[t],this.ringQCr[t],this.ringQCg[t],this.ringQCb[t],.55)))}tickThrust(e){for(const t of this.thrusts){if(!t.active)continue;t.age+=e;const i=t.age/t.dur;if(i>=1){this.retire(t);continue}t.mat.uniforms.uAlpha.value=1-i}}tickArc(e){for(const t of this.arcs){if(!t.active)continue;t.age+=e;const i=t.age/t.dur;if(i>=1){this.retire(t);continue}t.mat.uniforms.uT.value=i}}tickRing(e){for(const t of this.rings){if(!t.active)continue;t.age+=e;const i=t.age/t.dur;if(i>=1){this.retire(t);continue}const n=t.data*(.15+.85*(1-(1-i)*(1-i)));t.mesh.scale.setScalar(n),t.mat.uniforms.uT.value=i}}tickFlash(e){for(const t of this.flashes){if(!t.active)continue;t.age+=e;const i=t.age/t.dur;if(i>=1){this.retire(t);continue}t.mesh.scale.setScalar(t.data*(.6+.6*i)),t.mat.uniforms.uT.value=i}}tickSimple(e,t){for(const i of e){if(!i.active)continue;i.age+=t;const n=i.age/i.dur;if(n>=1){this.retire(i);continue}i.mat.uniforms.uT.value=n}}retire(e){e.active=!1,e.mesh.visible=!1}crestTexture(e){const t=this.crestTexCache.get(e);if(t)return t;const i=256,n=document.createElement("canvas");n.width=i,n.height=i;const s=n.getContext("2d");s.clearRect(0,0,i,i),s.strokeStyle="rgba(255,255,255,0.85)",s.lineWidth=5,s.beginPath(),s.arc(i/2,i/2,i*.44,0,Math.PI*2),s.stroke(),s.lineWidth=2,s.beginPath(),s.arc(i/2,i/2,i*.38,0,Math.PI*2),s.stroke(),s.fillStyle="#ffffff",s.font='bold 150px "Nanum Myeongjo","SimSun",serif',s.textAlign="center",s.textBaseline="middle",s.fillText(e,i/2,i/2+6);const r=new Ai(n);return r.colorSpace=Mt,r.needsUpdate=!0,this.crestTexCache.set(e,r),r}baguaTexture(){if(this.baguaTexCache)return this.baguaTexCache;const e=256,t=document.createElement("canvas");t.width=e,t.height=e;const i=t.getContext("2d"),n=e/2;i.clearRect(0,0,e,e),i.strokeStyle="rgba(255,255,255,0.9)",i.lineWidth=3;for(const r of[e*.46,e*.32,e*.2])i.beginPath(),i.arc(n,n,r,0,Math.PI*2),i.stroke();for(let r=0;r<8;r++){const o=r/8*Math.PI*2;i.save(),i.translate(n+Math.cos(o)*e*.39,n+Math.sin(o)*e*.39),i.rotate(o+Math.PI/2),i.fillStyle="#ffffff";for(let l=0;l<3;l++){const h=(l-1)*9;r>>l&1?i.fillRect(-16,h-2,32,4):(i.fillRect(-16,h-2,12,4),i.fillRect(4,h-2,12,4))}i.restore()}const s=new Ai(t);return s.colorSpace=Mt,s.needsUpdate=!0,this.baguaTexCache=s,s}}function e_(a){const i=(a+1)*2,n=new Float32Array(i*3),s=new Float32Array(i),r=new Float32Array(i);for(let h=0;h<=a;h++){const c=-Math.PI+h/a*Math.PI*2,d=Math.cos(c),u=Math.sin(c),f=h*2;n[f*3]=.16*d,n[f*3+1]=0,n[f*3+2]=.16*u,s[f]=c/Math.PI,r[f]=0;const m=h*2+1;n[m*3]=1*d,n[m*3+1]=0,n[m*3+2]=1*u,s[m]=c/Math.PI,r[m]=1}const o=[];for(let h=0;h<a;h++){const c=h*2,d=h*2+1,u=(h+1)*2,f=(h+1)*2+1;o.push(c,d,u,d,f,u)}const l=new zt;return l.setAttribute("position",new St(n,3)),l.setAttribute("aAng",new St(s,1)),l.setAttribute("aRad",new St(r,1)),l.setIndex(o),l}const ul=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,t_=`
  attribute float aAng;
  attribute float aRad;
  varying float vAng;
  varying float vRad;
  void main() {
    vAng = aAng;
    vRad = aRad;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,i_=`
  uniform float uAlpha;
  uniform vec3 uColor;
  varying vec2 vUv;
  void main() {
    float across = 1.0 - abs(vUv.y - 0.5) * 2.0;
    float along = smoothstep(0.0, 0.12, vUv.x) * (1.0 - smoothstep(0.55, 1.0, vUv.x));
    float b = pow(max(across, 0.0), 1.6) * along;
    gl_FragColor = vec4(uColor * b * 1.7, b * uAlpha);
  }
`,n_=`
  uniform float uT;
  uniform float uHalf;
  uniform vec3 uColor;
  varying float vAng;
  varying float vRad;
  void main() {
    float ang = vAng * 3.14159265;
    float amask = mix(1.0 - smoothstep(uHalf * 0.8, uHalf, abs(ang)), 1.0, step(3.13, uHalf));
    if (amask <= 0.001) discard;
    float redge = smoothstep(0.12, 0.4, vRad) * (1.0 - smoothstep(0.82, 1.0, vRad));
    // 선두 크레스트가 아크를 가로질러 스윕
    float crestA = mix(-uHalf, uHalf, uT);
    float near = 1.0 - clamp(abs(ang - crestA) / (uHalf * 0.5 + 0.15), 0.0, 1.0);
    float crest = pow(near, 2.0);
    float b = amask * (redge * 0.55 + crest * 1.1);
    float fade = 1.0 - uT * uT;
    gl_FragColor = vec4(uColor * b * 1.9, b * fade);
  }
`,s_=`
  uniform float uT;
  uniform vec3 uColor;
  varying vec2 vUv;
  void main() {
    float fade = 1.0 - uT;
    float b = fade * 1.4;
    gl_FragColor = vec4(uColor * b * 1.3, fade);
  }
`,a_=`
  uniform float uT;
  uniform vec3 uColor;
  varying vec2 vUv;
  void main() {
    float r = length(vUv - 0.5) * 2.0;
    float core = smoothstep(1.0, 0.0, r);
    float fade = 1.0 - uT;
    float b = core * fade;
    if (b <= 0.001) discard;
    gl_FragColor = vec4(uColor * b * 1.6, b);
  }
`,r_=`
  uniform float uT;
  uniform float uSeed;
  uniform vec3 uColor;
  varying vec2 vUv;
  void main() {
    float y = vUv.y;
    float cx = 0.5
      + 0.14 * sin(y * 17.0 + uSeed * 6.283)
      + 0.07 * sin(y * 41.0 + uSeed * 11.0)
      + 0.03 * sin(y * 90.0 + uSeed * 3.0);
    float dist = abs(vUv.x - cx);
    float core = smoothstep(0.05, 0.0, dist);
    float glow = smoothstep(0.3, 0.0, dist);
    float taper = smoothstep(0.0, 0.06, y) * smoothstep(1.0, 0.85, y);
    float env = pow(1.0 - uT, 1.4);
    float b = (glow * 0.4 + core) * taper;
    vec3 col = (vec3(0.5, 0.7, 1.0) * glow * 0.5 + uColor * core) * taper * env;
    gl_FragColor = vec4(col * 2.2, b * env);
  }
`,o_=`
  uniform float uT;
  uniform float uSeed;
  uniform vec3 uColor;
  varying vec2 vUv;
  void main() {
    float x = vUv.x;
    float cy = 0.5
      + 0.16 * sin(x * 22.0 + uSeed * 6.283)
      + 0.08 * sin(x * 47.0 + uSeed * 9.0);
    float dist = abs(vUv.y - cy);
    float core = smoothstep(0.14, 0.0, dist);
    float glow = smoothstep(0.4, 0.0, dist);
    float env = 1.0 - uT;
    float b = (glow * 0.4 + core);
    gl_FragColor = vec4(uColor * b * 2.4 * env, b * env);
  }
`,l_=`
  uniform sampler2D uMap;
  uniform float uAlpha;
  uniform vec3 uColor;
  varying vec2 vUv;
  void main() {
    vec4 tex = texture2D(uMap, vUv);
    float m = tex.a * max(tex.r, max(tex.g, tex.b));
    if (m <= 0.01) discard;
    gl_FragColor = vec4(uColor * m * 1.6, m * uAlpha);
  }
`,h_=`
  uniform float uAlpha;
  uniform float uT;
  uniform vec3 uColor;
  varying vec2 vUv;
  float h(vec2 p){ return fract(sin(dot(p, vec2(41.3, 289.1))) * 43758.5453); }
  void main() {
    float across = 1.0 - abs(vUv.y - 0.5) * 2.0;
    float flick = 0.6 + 0.4 * sin(uT * 14.0 + vUv.x * 30.0) * h(floor(vUv * vec2(24.0, 4.0)));
    float b = pow(max(across, 0.0), 1.4) * flick;
    if (b <= 0.01) discard;
    gl_FragColor = vec4(uColor * b * 0.35, b * uAlpha * 0.8); // #23: additive 누적 백색폭발 방지로 강도 하향
  }
`,c_=`
  uniform vec3 uColor;
  uniform float uT;
  varying vec2 vUv;
  void main() {
    float across = 1.0 - abs(vUv.x - 0.5) * 2.0;
    float tail = smoothstep(0.0, 0.5, vUv.y); // 위(꼬리) → 아래(촉)
    float core = pow(max(across, 0.0), 2.0);
    float b = core * (0.35 + tail);
    if (b <= 0.01) discard;
    gl_FragColor = vec4(uColor * b * 2.0, b);
  }
`,mi=28,su=1.7,fl=14,d_=.6,Rr=2.4,u_=2.6,f_=.14,p_=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
  }
`,m_=`
  varying vec2 vUv;
  void main() {
    float across = 1.0 - abs(vUv.x - 0.5) * 2.0;
    float core = pow(max(across, 0.0), 1.5);
    float tip = smoothstep(0.22, 0.0, vUv.y);       // y=0(선두)에서 1 → 촉
    float shaft = smoothstep(1.0, 0.12, vUv.y);      // 꼬리로 갈수록 페이드 → 살대
    vec3 shaftCol = vec3(0.05, 0.045, 0.04);
    vec3 tipCol = vec3(1.0, 0.5, 0.2);
    float body = core * shaft;
    float head = core * tip;
    vec3 col = shaftCol * body + tipCol * head;
    float a = clamp(body * 0.5 + head * 0.95, 0.0, 1.0);
    if (a < 0.01) discard;
    gl_FragColor = vec4(col, a);
  }
`;class g_{effects;mesh;dummy=new Zt;up=new I(0,1,0);backDir=new I(0,1,0);phase=new Uint8Array(mi);wait=new Float32Array(mi);fall=new Float32Array(mi);ttl=new Float32Array(mi);tx=new Float32Array(mi);tz=new Float32Array(mi);wx=new Float32Array(mi);wz=new Float32Array(mi);bdx=new Float32Array(mi);bdy=new Float32Array(mi);bdz=new Float32Array(mi);cur=0;constructor(e,t){this.effects=t;const i=new tt(1,1);i.translate(0,.5,0);const n=new Be({vertexShader:p_,fragmentShader:m_,transparent:!0,blending:en,side:ui,depthWrite:!1,depthTest:!0});this.mesh=new At(i,n,mi),this.mesh.instanceMatrix.setUsage(Pe),this.mesh.frustumCulled=!1,this.mesh.count=0,this.mesh.renderOrder=4,e.add(this.mesh)}volley(e){if(e.length===0)return;const t=Math.random()*Math.PI*2,i=Math.cos(t),n=Math.sin(t);for(const s of e){const r=Math.max(.05,s.t);this.effects.spawnTelegraph(Ph,s.x,s.z,0,su*2,su*2,0,r,1,.4,.14),this.alloc(s.x,s.z,r,i,n)}}alloc(e,t,i,n,s){const r=this.cur;this.cur=(this.cur+1)%mi;const o=Math.min(i,d_);this.phase[r]=1,this.wait[r]=Math.max(0,i-o),this.fall[r]=o,this.ttl[r]=o,this.tx[r]=e,this.tz[r]=t,this.wx[r]=n,this.wz[r]=s;const l=n*Rr,h=s*Rr,c=Math.hypot(l,fl,h)||1;this.bdx[r]=l/c,this.bdy[r]=fl/c,this.bdz[r]=h/c}update(e){let t=0;for(let i=0;i<mi;i++){const n=this.phase[i];if(n===0)continue;if(n===1){if(this.wait[i]-=e,this.wait[i]>0)continue;this.phase[i]=2,this.ttl[i]=this.fall[i]}if(this.ttl[i]-=e,this.ttl[i]<=0){this.impact(i),this.phase[i]=0;continue}const s=this.ttl[i]/this.fall[i],r=1-(1-s)*(1-s),o=this.tx[i]+this.wx[i]*Rr*r,l=fl*r,h=this.tz[i]+this.wz[i]*Rr*r;this.dummy.position.set(o,l,h),this.backDir.set(this.bdx[i],this.bdy[i],this.bdz[i]),this.dummy.quaternion.setFromUnitVectors(this.up,this.backDir),this.dummy.scale.set(f_,u_,1),this.dummy.updateMatrix(),this.mesh.setMatrixAt(t,this.dummy.matrix),t++}this.mesh.count=t,this.mesh.instanceMatrix.needsUpdate=!0}impact(e){const t=this.tx[e],i=this.tz[e];this.effects.spawnRing(t,i,1.6,.75,.5,.28,.32),this.effects.spawnDecal?.(t,i,1.3,.85,.4,.16)}reset(){this.phase.fill(0),this.cur=0,this.mesh.count=0}}const v_=Dn/Ua,x_=.25,b_=.4;class y_{mesh;mat;time=0;vis=0;boundTex=null;constructor(e){const t=new tt(v_,1);t.translate(0,.5,0),t.rotateX(Pf),this.mat=new Be({uniforms:{uMap:{value:null},uUvOffset:{value:new ve(0,0)},uCellUv:{value:new ve(1,1)},uTexel:{value:new ve(1,1)},uTime:{value:0},uAlpha:{value:0}},vertexShader:`
        varying vec2 vUv;
        void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
      `,fragmentShader:`
        precision highp float;
        uniform sampler2D uMap;
        uniform vec2 uUvOffset;
        uniform vec2 uCellUv;
        uniform vec2 uTexel;
        uniform float uTime;
        uniform float uAlpha;
        varying vec2 vUv;
        // 셀 내부 정규화 좌표(cuv 0..1)에서 알파 마스크 샘플. 셀 밖은 투명(0) → 콘텐츠 외곽선 정확.
        float aAt(vec2 cuv) {
          if (cuv.x < 0.0 || cuv.y < 0.0 || cuv.x > 1.0 || cuv.y > 1.0) return 0.0;
          return texture2D(uMap, uUvOffset + cuv * uCellUv).a >= 0.5 ? 1.0 : 0.0;
        }
        // 반경 r 텍셀 8방향 팽창(최대 알파).
        float dil(vec2 cuv, float r) {
          vec2 t = (uTexel / uCellUv) * r;
          float d = t.x * 0.7071, e = t.y * 0.7071;
          float m = aAt(cuv + vec2(t.x, 0.0));
          m = max(m, aAt(cuv + vec2(-t.x, 0.0)));
          m = max(m, aAt(cuv + vec2(0.0, t.y)));
          m = max(m, aAt(cuv + vec2(0.0, -t.y)));
          m = max(m, aAt(cuv + vec2(d, e)));
          m = max(m, aAt(cuv + vec2(-d, e)));
          m = max(m, aAt(cuv + vec2(d, -e)));
          m = max(m, aAt(cuv + vec2(-d, -e)));
          return m;
        }
        // 사이버 네온 팔레트: 청록→자홍→보라 순환.
        vec3 neon(float t) {
          t = fract(t) * 3.0;
          vec3 c0 = vec3(0.15, 0.95, 1.05);
          vec3 c1 = vec3(1.05, 0.22, 0.9);
          vec3 c2 = vec3(0.6, 0.32, 1.05);
          if (t < 1.0) return mix(c0, c1, smoothstep(0.0, 1.0, t));
          if (t < 2.0) return mix(c1, c2, smoothstep(0.0, 1.0, t - 1.0));
          return mix(c2, c0, smoothstep(0.0, 1.0, t - 2.0));
        }
        void main() {
          vec2 cuv = vUv;
          float own = aAt(cuv);                 // 몸통(불투명)이면 1
          float outer = 1.0 - own;              // 외곽(투명)만 밴드 후보
          float d1 = dil(cuv, 1.5);             // 얇은 밝은 외곽선
          float d2 = dil(cuv, 2.6);             // 살짝 넓은 은은한 글로우(몸통 쪽 번짐 최소화로 좁게)
          float band = (d1 + d2 * 0.4) * outer;
          if (band < 0.02) discard;             // 몸통(투명)·먼 배경(밴드 없음) → 안 가림
          // 흐르는 색: 스프라이트 프레임 중심 기준 각도 + 시간 → 팔레트가 윤곽을 타고 회전.
          vec2 P = cuv - 0.5;
          float a = atan(P.y, P.x) / 6.2831853 + 0.5;
          vec3 col = neon(a + uTime * 0.22);
          float sd = abs(fract(a - uTime * 0.42 + 0.5) - 0.5); // 이동 스윕 하이라이트
          float sweep = smoothstep(0.14, 0.0, sd);
          float b = min(1.4, band) * (0.6 + sweep * 0.55);
          // 게인 1.2로 코어만 블룸(임계 0.88) 살짝 태워 "버프 중" 확실히, 스윕/글로우 절제로 몸통 번짐·블로우아웃 없음.
          vec3 outc = (col + vec3(0.22) * sweep) * b * 1.2;
          gl_FragColor = vec4(outc, min(1.0, b) * uAlpha);
        }
      `,transparent:!0,blending:jt,depthWrite:!1,depthTest:!1}),this.mesh=new Lt(t,this.mat),this.mesh.scale.setScalar(uc),this.mesh.frustumCulled=!1,this.mesh.visible=!1,this.mesh.renderOrder=5,e.add(this.mesh)}reset(){this.time=0,this.vis=0,this.mesh.visible=!1}update(e,t,i,n,s=null,r=0,o=0){e>.1&&(e=.1);const l=s!==null;if(this.vis=n&&l?Math.min(1,this.vis+e/x_):Math.max(0,this.vis-e/b_),this.vis<=.001){this.mesh.visible=!1;return}this.time+=e,s&&(this.boundTex!==s.texture&&(this.mat.uniforms.uMap.value=s.texture,this.boundTex=s.texture),this.mat.uniforms.uCellUv.value.set(s.cellUvW,s.cellUvH),this.mat.uniforms.uTexel.value.set(1/s.texW,1/s.texH),this.mat.uniforms.uUvOffset.value.set(r,o)),this.mesh.position.set(t,0,i),this.mesh.visible=!0,this.mat.uniforms.uTime.value=this.time,this.mat.uniforms.uAlpha.value=this.vis}}class __{points;pos;col;life;size;vel;invDur;grav;drag;posAttr;colAttr;lifeAttr;sizeAttr;n;cursor=0;constructor(e,t=4e3){this.n=t,this.pos=new Float32Array(t*3),this.col=new Float32Array(t*3),this.life=new Float32Array(t),this.size=new Float32Array(t),this.vel=new Float32Array(t*3),this.invDur=new Float32Array(t),this.grav=new Float32Array(t),this.drag=new Float32Array(t);const i=new zt;this.posAttr=new St(this.pos,3),this.colAttr=new St(this.col,3),this.lifeAttr=new St(this.life,1),this.sizeAttr=new St(this.size,1),this.posAttr.setUsage(Pe),this.lifeAttr.setUsage(Pe),this.sizeAttr.setUsage(Pe),this.colAttr.setUsage(Pe),i.setAttribute("position",this.posAttr),i.setAttribute("aColor",this.colAttr),i.setAttribute("aLife",this.lifeAttr),i.setAttribute("aSize",this.sizeAttr);const n=new Be({uniforms:{uPix:{value:320}},vertexShader:`
        attribute float aLife;
        attribute float aSize;
        attribute vec3 aColor;
        uniform float uPix;
        varying float vLife;
        varying vec3 vColor;
        void main() {
          vLife = aLife;
          vColor = aColor;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = (aLife > 0.0) ? uPix * aSize * aLife / max(0.1, -mv.z) : 0.0;
          gl_Position = projectionMatrix * mv;
        }
      `,fragmentShader:`
        varying float vLife;
        varying vec3 vColor;
        void main() {
          if (vLife <= 0.0) discard;
          float d = length(gl_PointCoord - 0.5);
          if (d > 0.5) discard;
          float a = smoothstep(0.5, 0.0, d);
          gl_FragColor = vec4(vColor * vLife * a, 1.0);
        }
      `,transparent:!0,blending:jt,depthWrite:!1,depthTest:!0});this.points=new mf(i,n),this.points.frustumCulled=!1,this.points.renderOrder=3,e.add(this.points)}emit(e,t,i,n,s,r,o,l,h,c,d,u,f){const m=this.cursor;this.cursor=(this.cursor+1)%this.n;const v=m*3;this.pos[v]=e,this.pos[v+1]=t,this.pos[v+2]=i,this.vel[v]=n,this.vel[v+1]=s,this.vel[v+2]=r,this.col[v]=o,this.col[v+1]=l,this.col[v+2]=h,this.size[m]=c,this.life[m]=1,this.invDur[m]=1/d,this.grav[m]=u,this.drag[m]=f}burst(e,t,i,n,s,r,o){for(let l=0;l<r;l++){const h=Math.random()*Math.PI*2,c=o*(.3+Math.random()*.9);this.emit(e,.7+Math.random()*.8,t,Math.cos(h)*c,1.5+Math.random()*3,Math.sin(h)*c,i,n,s,1,.3+Math.random()*.35,6,.92)}}fireEmber(e,t,i){const n=Math.random()*Math.PI*2,s=Math.sqrt(Math.random())*i;this.emit(e+Math.cos(n)*s,.2,t+Math.sin(n)*s,(Math.random()-.5)*.6,1.6+Math.random()*1.8,(Math.random()-.5)*.6,1.2,.5+Math.random()*.25,.12,.4+Math.random()*.3,.5+Math.random()*.4,-1.2,.9)}steam(e,t){const i=Math.random()*Math.PI*2,n=Math.random()*.5;this.emit(e+Math.cos(i)*n,1.6+Math.random()*.4,t+Math.sin(i)*n,(Math.random()-.5)*.3,.9+Math.random()*.7,(Math.random()-.5)*.3,.9,.95,.85,.9+Math.random()*.5,.7+Math.random()*.5,-.6,.94)}spark(e,t){const i=Math.random()*Math.PI*2,n=1.6+Math.random()*2.2;this.emit(e,1+Math.random()*.6,t,Math.cos(i)*n,1.2+Math.random()*2,Math.sin(i)*n,1.6,.85,.25,.42+Math.random()*.3,.22+Math.random()*.16,7,.9)}incense(e,t){const i=Math.random()*Math.PI*2,n=Math.random()*.7;this.emit(e+Math.cos(i)*n,1.2+Math.random()*.5,t+Math.sin(i)*n,(Math.random()-.5)*.25,.55+Math.random()*.5,(Math.random()-.5)*.25,1.1,.92,.55,.8+Math.random()*.6,.9+Math.random()*.6,-.4,.95)}dust(e,t){const i=Math.random()*Math.PI*2;this.emit(e,.3+Math.random()*.5,t,Math.cos(i)*1.4,.6+Math.random()*1,Math.sin(i)*1.4,1.1,1,.85,1.3+Math.random(),.4+Math.random()*.3,3,.9)}projectileTrail(e,t,i,n,s,r,o,l){const h=Math.hypot(i,n)||1,c=i/h,d=n/h,u=l===4?2:1,f=l===2||l===4?.75:l===3?.58:.38;for(let m=0;m<u;m++){const v=(Math.random()-.5)*(l===4?1.2:.35),g=Math.random()*(l===4?1.4:.45);this.emit(e-c*g-d*v,.75+Math.random()*.35,t-d*g+c*v,-c*(.8+Math.random()*1.6)-d*v,.25+Math.random()*.6,-d*(.8+Math.random()*1.6)+c*v,s*.7,r*.7,o*.7,f*(.7+Math.random()*.6),.16+Math.random()*.14,1,.88)}}projectileImpact(e,t,i,n,s,r){const o=r===2||r===4?9:r===3?6:4,l=r===4?5.2:r===2?4:2.8;for(let h=0;h<o;h++){const c=h/o*Math.PI*2+Math.random()*.45,d=l*(.45+Math.random()*.7);this.emit(e,.75+Math.random()*.45,t,Math.cos(c)*d,.9+Math.random()*1.8,Math.sin(c)*d,i,n,s,(r===2||r===4?.72:.48)*(.75+Math.random()*.5),.18+Math.random()*.18,4.2,.9)}}update(e){const t=this.pos,i=this.vel,n=this.life,s=this.invDur,r=this.grav,o=this.drag;for(let l=0;l<this.n;l++){const h=n[l];if(h<=0)continue;const c=h-e*s[l];n[l]=c>0?c:0;const d=l*3;t[d]+=i[d]*e,t[d+1]+=i[d+1]*e,t[d+2]+=i[d+2]*e;const u=o[l];i[d]*=u,i[d+1]=i[d+1]*u-r[l]*e,i[d+2]*=u}this.posAttr.needsUpdate=!0,this.lifeAttr.needsUpdate=!0,this.colAttr.needsUpdate=!0,this.sizeAttr.needsUpdate=!0}}const Fs=128,Ds=72;class w_{slots=[];cap;cursor=0;constructor(e,t=56){this.cap=t;for(let i=0;i<t;i++){const n=document.createElement("canvas");n.width=Fs,n.height=Ds;const s=n.getContext("2d"),r=new Ai(n),o=new js({map:r,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1}),l=new Fa(o);l.visible=!1,l.renderOrder=10,e.add(l),this.slots.push({sprite:l,mat:o,tex:r,ctx:s,life:0,dur:.75,active:!1,base:1.25,crit:!1,bx:0})}}spawn(e,t,i,n,s=!1){const r=this.slots[this.cursor];this.cursor=(this.cursor+1)%this.cap;const o=r.ctx;o.clearRect(0,0,Fs,Ds);const l=Math.max(1,Math.round(e)).toString();o.font=s?'bold 46px "Times New Roman", serif':'bold 34px "Times New Roman", serif',o.textAlign="center",o.textBaseline="middle",o.lineWidth=5,o.strokeStyle="rgba(0,0,0,0.85)",o.strokeText(l,Fs/2,Ds/2),o.fillStyle=s?"#ffe14d":"#ffffff",o.fillText(l,Fs/2,Ds/2),r.tex.needsUpdate=!0,r.base=s?1.9:1.25,r.crit=s,r.bx=t+(Math.random()*.7-.35),r.sprite.scale.set(r.base*(Fs/Ds),r.base,1),r.sprite.position.set(r.bx,i,n),r.sprite.visible=!0,r.life=s?.95:.75,r.dur=r.life,r.mat.opacity=1,r.active=!0}update(e){for(let t=0;t<this.cap;t++){const i=this.slots[t];if(!i.active)continue;if(i.life-=e,i.life<=0){i.active=!1,i.sprite.visible=!1;continue}const n=i.dur-i.life,s=1-i.life/i.dur,r=1+.4*Math.exp(-n/.06),o=i.base*r;i.sprite.scale.set(o*(Fs/Ds),o,1);const l=i.crit?Math.sin(n*60)*.12*Math.exp(-n/.12):0;i.sprite.position.x=i.bx+l,i.sprite.position.y+=e*1.8,i.mat.opacity=1-s*s}}}const va=256,xa=64;class M_{slots=[];cap;cursor=0;constructor(e,t=10){this.cap=t;for(let i=0;i<t;i++){const n=document.createElement("canvas");n.width=va,n.height=xa;const s=n.getContext("2d"),r=new Ai(n),o=new js({map:r,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1}),l=new Fa(o);l.visible=!1,l.renderOrder=11,l.scale.set(1.5*(va/xa),1.5,1),e.add(l),this.slots.push({sprite:l,mat:o,tex:r,ctx:s,text:""})}}begin(){this.cursor=0}place(e,t,i,n){if(this.cursor>=this.cap)return;const s=this.slots[this.cursor++];if(s.text!==e){s.text=e;const r=s.ctx;r.clearRect(0,0,va,xa),r.font='bold 30px "Nanum Myeongjo","Times New Roman",serif',r.textAlign="center",r.textBaseline="middle",r.lineWidth=5,r.strokeStyle="rgba(0,0,0,0.9)",r.strokeText(e,va/2,xa/2),r.fillStyle="#f0e0a0",r.fillText(e,va/2,xa/2),s.tex.needsUpdate=!0}s.sprite.position.set(t,i,n),s.sprite.visible=!0}end(){for(let e=this.cursor;e<this.cap;e++)this.slots[e].sprite.visible=!1}reset(){for(const e of this.slots)e.sprite.visible=!1;this.cursor=0}}const Hn=30,cn=7,gi=1.25,ai=1.5,ht=64,pl=65535,Qt=0,Vt=-48,Pr=9,fn=22,zi=20,Os=9,Jn=8,au=8,S_=34,A_=41,T_=30,Gn=800,Ir=900,ru=26,E_=9,st={banners:[],bannerVersion:0,title:{text:"낙양 외성 洛陽外城",x:Qt,y:6.4,z:Vt+zi-8,alpha:0},allied:!1,flipVersion:0,flipX:0,flipZ:0},_e={cx:Qt,cz:Vt,ohx:fn,ohz:zi,ihx:Os,ihz:Jn,outerGates:[{key:"castle-s",x:Qt,z:Vt+zi,horizontal:!0},{key:"castle-e",x:Qt+fn,z:Vt,horizontal:!1},{key:"castle-w",x:Qt-fn,z:Vt,horizontal:!1}],keepGate:{x:Qt,z:Vt+Jn}},ou=[{kind:11,width:3.2,height:5.4,name:"봉화대 烽火",glow:1.6,gr:1.05,gg:.52,gb:.2},{kind:5,width:5.4,height:4,name:"군영 軍營",glow:0,gr:0,gg:0,gb:0},{kind:6,width:3,height:3.4,name:"전고 戰鼓",glow:1.7,gr:1,gg:.38,gb:.26},{kind:2,width:3.4,height:5.6,name:"망루 望樓",glow:0,gr:0,gg:0,gb:0},{kind:4,width:4.8,height:3.6,name:"공성 잔해 殘骸",glow:0,gr:0,gg:0,gb:0}],C_=12,R_=2.399963229728653;function pc(a,e){let t=Math.imul(a^2654435769,2246822507)^Math.imul(e^3266489909,668265263);return t^=t>>>16,t>>>0}function lu(a,e,t){t.x=a,t.z=e,!(a===0&&e===0)&&(a===0?t.z-=Math.sign(e):e===0||(pc(a,e)&1)===0?t.x-=Math.sign(a):t.z-=Math.sign(e))}const ml={x:0,z:0},gl={x:0,z:0};function Lr(a,e,t,i){if(lu(a,e,ml),ml.x===t&&ml.z===i||(lu(t,i,gl),gl.x===a&&gl.z===e))return!0;const n=Math.min(a,t),s=Math.min(e,i),r=a!==t?17:43;return pc(n*2+r,s*2-r)%100<22}class P_{walls=[];roads=[];props=[];landmarks=[];gates=[];revision=0;collisionCount=0;breachCount=0;gateKills=0;colliders=[];breached=new Set;keepSealed=!0;castleBreachable=!0;gateHp={"castle-s":Gn,"castle-e":Gn,"castle-w":Gn,hulao:Ir};hulaoActive=!1;hulaoTimer=0;hulaoX=0;hulaoZ=0;playerX=0;playerZ=0;castleFlow=!1;flowActive=!1;castleTitleAlpha=0;castleBannerDefs=[];flowOriginX=0;flowOriginZ=0;flowTargetCell=-1;flowTimer=0;blocked=new Uint8Array(ht*ht);distance=new Uint16Array(ht*ht);queue=new Int32Array(ht*ht);update(e,t,i){this.playerX=e,this.playerZ=t,this.hulaoActive&&(this.hulaoTimer-=i,(this.hulaoTimer<=0||this.breached.has("hulao"))&&this.endHulao());const n=e-Qt,s=t-Vt,r=Math.hypot(n,s);if(this.castleTitleAlpha+=((r<T_?1:0)-this.castleTitleAlpha)*Math.min(1,i*2.4),st.title.alpha=this.castleTitleAlpha,this.castleFlow?r>A_&&(this.castleFlow=!1):r<S_&&(this.castleFlow=!0,this.flowTimer=0),this.flowActive=this.hulaoActive||this.castleFlow,!this.flowActive)return;this.flowTimer-=i;const o=Math.floor(e/ai),l=Math.floor(t/ai),h=(o&65535)<<16^l&65535;(this.flowTimer<=0||h!==this.flowTargetCell)&&(this.flowTargetCell=h,this.flowTimer=.22,this.rebuildFlow())}reset(){this.breached.clear(),this.breachCount=0,this.gateKills=0,this.hulaoActive=!1,this.hulaoTimer=0,this.castleFlow=!1,this.flowActive=!1,this.castleTitleAlpha=0,st.title.alpha=0,this.keepSealed=!0,this.castleBreachable=!0,this.gateHp["castle-s"]=Gn,this.gateHp["castle-e"]=Gn,this.gateHp["castle-w"]=Gn,this.gateHp.hulao=Ir,st.allied=!1,st.flipX=Qt,st.flipZ=Vt,st.flipVersion++,this.rebuild()}triggerHulao(e,t,i=45){this.hulaoActive=!0;const n=[t-14,t+14,Vt+zi+15,Vt-zi-15];let s=n[0];for(const r of n)if(!this.hulaoOverlapsCastle(e,r)){s=r;break}this.hulaoX=e,this.hulaoZ=s,this.hulaoTimer=i,this.gateKills=0,this.gateHp.hulao=Ir,this.breached.delete("hulao"),this.rebuild(),this.rebuildFlow()}hulaoOverlapsCastle(e,t){const s=t>=Vt-zi-3&&t<=Vt+zi+3,r=e+20>=Qt-fn-3&&e-20<=Qt+fn+3;return s&&r}endHulao(){this.hulaoActive=!1,this.rebuild(),this.revision++}get hulaoOn(){return this.hulaoActive}rebuild(){this.walls.length=0,this.roads.length=0,this.props.length=0,this.landmarks.length=0,this.gates.length=0,this.colliders.length=0,this.buildLandmarks(),this.buildCastle(),this.hulaoActive&&this.buildHulao(),this.castleBannerDefs.length===0&&this.buildBanners(),this.revision++}buildLandmarks(){for(let e=0;e<C_;e++){const t=ou[e%ou.length],i=18+e*5.8,n=e*R_,s=Math.cos(n)*i,r=Math.sin(n)*i;this.props.push({x:s,z:r,kind:t.kind,width:t.width,height:t.height}),this.landmarks.push({x:s,z:r,kind:t.kind,width:t.width,height:t.height,name:t.name,glow:t.glow,gr:t.gr,gg:t.gg,gb:t.gb})}}buildCastle(){const e=gi,t=Qt,i=Vt,n=fn,s=zi,r=Pr*.5,o=n-r,l=s-r;this.addWall(t,i-s,n*2,e,!0,!0),this.addWall(t-r-o*.5,i+s,o,e,!0,!0),this.addWall(t+r+o*.5,i+s,o,e,!0,!0),this.gates.push({key:"castle-s",x:t,z:i+s,horizontal:!0,visible:!0}),this.addCastleGateCollider("castle-s",t,i+s,Pr,!0),this.addWall(t+n,i-r-l*.5,e,l,!1,!0),this.addWall(t+n,i+r+l*.5,e,l,!1,!0),this.gates.push({key:"castle-e",x:t+n,z:i,horizontal:!1,visible:!0}),this.addCastleGateCollider("castle-e",t+n,i,Pr,!1),this.addWall(t-n,i-r-l*.5,e,l,!1,!0),this.addWall(t-n,i+r+l*.5,e,l,!1,!0),this.gates.push({key:"castle-w",x:t-n,z:i,horizontal:!1,visible:!0}),this.addCastleGateCollider("castle-w",t-n,i,Pr,!1);const h=Os,c=Jn,d=au*.5,u=h-d;this.addWall(t,i-c,h*2,e,!0,!0),this.addWall(t-d-u*.5,i+c,u,e,!0,!0),this.addWall(t+d+u*.5,i+c,u,e,!0,!0),this.gates.push({key:"castle-keep-s",x:t,z:i+c,horizontal:!0,visible:!0}),this.keepSealed&&this.addCastleGateCollider("castle-keep-s",t,i+c,au,!0),this.addWall(t+h,i,e,c*2,!1,!0),this.addWall(t-h,i,e,c*2,!1,!0),this.props.push({x:t-6,z:i+s+1,kind:11,width:2.6,height:4.4}),this.props.push({x:t+6,z:i+s+1,kind:11,width:2.6,height:4.4}),this.props.push({x:t-n+2,z:i-s,kind:2,width:3.2,height:5.4}),this.props.push({x:t+n-2,z:i-s,kind:2,width:3.2,height:5.4}),this.landmarks.push({x:t,z:i+s+1.2,kind:11,width:2.6,height:4.4,name:"성문 城門",glow:3.2,gr:1.7,gg:.85,gb:.32}),this.landmarks.push({x:t,z:i,kind:2,width:3.4,height:5.6,name:"본성 本城",glow:1.7,gr:1.35,gg:1.05,gb:.5})}buildBanners(){const e=[.6,.11,.1],t=[.56,.42,.14],i=this.castleBannerDefs,n=(c,d,u,f,m,v,g)=>{i.push({x:c,z:d,poleH:u,w:f,h:m,ry:v,r:g[0],g:g[1],b:g[2]})},s=Qt,r=Vt,o=fn,l=zi;n(s-5.4,r+l,3.6,1.8,1.2,.28,e),n(s+5.4,r+l,3.6,1.8,1.2,-.28,e),n(s+o,r-5.6,3.4,1.7,1.1,.2,e),n(s+o,r+5.6,3.4,1.7,1.1,-.2,e),n(s-o,r-5.6,3.4,1.7,1.1,.2,e),n(s-o,r+5.6,3.4,1.7,1.1,-.2,e),n(s-o+1.6,r-l,3.7,1.6,1.05,.35,e),n(s+o-1.6,r-l,3.7,1.6,1.05,-.35,e),n(s-Os+1.2,r-Jn,4.3,2.1,1.4,.35,t),n(s+Os-1.2,r-Jn,4.3,2.1,1.4,-.35,t);let h=0;for(const c of this.landmarks)c.kind===5&&(n(c.x+c.width*.42,c.z,3,1.7,1.1,.6+h,e),h+=.7);st.banners=i,st.bannerVersion++}buildHulao(){const e=this.hulaoX,t=this.hulaoZ,i=20,n=cn*.5,s=i-n;this.addWall(e-n-s*.5,t,s,gi,!0,!0),this.addWall(e+n+s*.5,t,s,gi,!0,!0),this.gates.push({key:"hulao",x:e,z:t,horizontal:!0,visible:!0}),this.breached.has("hulao")||this.colliders.push({x:e,z:t,hx:n,hz:gi*.5,gateKey:"hulao"}),this.props.push({x:e-i,z:t,kind:10,width:5,height:5}),this.props.push({x:e+i,z:t,kind:10,width:5,height:5})}buildChunk(e,t,i){const n=e*Hn,s=t*Hn,r=Lr(e,t,e,t-1),o=Lr(e,t,e+1,t),l=Lr(e,t,e,t+1),h=Lr(e,t,e-1,t);if(i){this.roads.push({x:n,z:s,width:9,depth:9}),r&&this.roads.push({x:n,z:s-9.75,width:cn,depth:19.5}),l&&this.roads.push({x:n,z:s+9.75,width:cn,depth:19.5}),h&&this.roads.push({x:n-9.75,z:s,width:19.5,depth:cn}),o&&this.roads.push({x:n+9.75,z:s,width:19.5,depth:cn});const d=Number(r)+Number(o)+Number(l)+Number(h),u=pc(e,t),f=n+(u&1?10:-10),m=s+(u&2?9:-9);this.props.push({x:f,z:m,kind:d<=1?5:d===2?6:d===3?11:10,width:d<=1?5.5:3.4,height:d<=1?4.2:4.6})}const c=e===0&&t===0?"origin-north":`${e},${t}:n`;this.addBoundary(n,s-Hn*.5,!0,r,i,e===0&&t===0,c),this.addBoundary(n-Hn*.5,s,!1,h,i,!1,`${e},${t}:w`)}addBoundary(e,t,i,n,s,r,o){if(!n){this.addWall(e,t,i?Hn:gi,i?gi:Hn,i,s);return}const l=(Hn-cn)*.25,h=cn*.5+l;i?(this.addWall(e-h,t,l*2,gi,!0,s),this.addWall(e+h,t,l*2,gi,!0,s)):(this.addWall(e,t-h,gi,l*2,!1,s),this.addWall(e,t+h,gi,l*2,!1,s)),s&&this.gates.push({key:o,x:e,z:t,horizontal:i,visible:s}),r&&!this.breached.has(o)&&this.colliders.push({x:e,z:t,hx:i?cn*.5:gi*.5,hz:i?gi*.5:cn*.5,gateKey:o})}addWall(e,t,i,n,s,r){this.colliders.push({x:e,z:t,hx:i*.5,hz:n*.5,gateKey:null}),r&&this.walls.push({x:e,z:t,hx:i*.5,hz:n*.5,horizontal:s,visible:r})}addCastleGateCollider(e,t,i,n,s){this.breached.has(e)||this.colliders.push({x:t,z:i,hx:s?n*.5:gi*.5,hz:s?gi*.5:n*.5,gateKey:e})}circleBlocked(e,t,i){for(const n of this.colliders){const s=Math.max(n.x-n.hx,Math.min(e,n.x+n.hx)),r=Math.max(n.z-n.hz,Math.min(t,n.z+n.hz)),o=e-s,l=t-r;if(o*o+l*l<i*i)return!0}return!1}resolveMovement(e,t,i,n,s,r){const o=this.colliders;if(o.length===0)return r.x=i,r.z=n,!1;let l=!1;const h=f=>{let m=i;for(let v=0;v<2;v++)for(const g of o)f<=g.z-g.hz-s||f>=g.z+g.hz+s||m<=g.x-g.hx-s||m>=g.x+g.hx+s||(m=i>=e?g.x-g.hx-s:g.x+g.hx+s,l=!0);return m},c=f=>{let m=n;for(let v=0;v<2;v++)for(const g of o)f<=g.x-g.hx-s||f>=g.x+g.hx+s||m<=g.z-g.hz-s||m>=g.z+g.hz+s||(m=n>=t?g.z-g.hz-s:g.z+g.hz+s,l=!0);return m};let d,u;return Math.abs(n-t)>Math.abs(i-e)?(u=c(e),d=h(u)):(d=h(t),u=c(d)),r.x=d,r.z=u,l&&this.collisionCount++,l}projectWalkable(e,t,i,n){if(!this.circleBlocked(e,t,i))return n.x=e,n.z=t,!1;for(let s=1;s<=5;s++){const r=s*1.1;for(let o=0;o<16;o++){const l=o/16*Math.PI*2,h=e+Math.cos(l)*r,c=t+Math.sin(l)*r;if(!this.circleBlocked(h,c,i))return n.x=h,n.z=c,!0}}return n.x=this.playerX,n.z=this.playerZ,!0}breachGate(e){const t=this.gates.find(n=>n.key===e);if(!t||this.breached.has(e))return null;this.breached.add(e),this.breachCount++,e in this.gateHp&&(this.gateHp[e]=0);const i={...t};return this.rebuild(),this.rebuildFlow(),i}breachNear(e,t,i){for(const n of this.gates){if(this.breached.has(n.key))continue;const s=e-n.x,r=t-n.z;if(!(s*s+r*r>i*i))return this.breachGate(n.key)}return null}gateMaxHp(e){return e==="hulao"?Ir:e==="castle-s"||e==="castle-e"||e==="castle-w"?Gn:-1}damageGate(e,t){return this.gateMaxHp(e)<0||this.breached.has(e)||e.startsWith("castle-")&&!this.castleBreachable||t<=0||(this.gateHp[e]=Math.max(0,this.gateHp[e]-t),this.gateHp[e]>0)?null:this.breachGate(e)}gateHp01(e){if(this.breached.has(e))return-1;const t=this.gateMaxHp(e);return t<=0?-1:this.gateHp[e]/t}nearestSealedGateKey(e,t,i){let n=null,s=i*i;for(const r of this.gates){if(this.gateMaxHp(r.key)<0||this.breached.has(r.key)||r.key.startsWith("castle-")&&!this.castleBreachable)continue;const o=e-r.x,l=t-r.z,h=o*o+l*l;h<s&&(s=h,n=r.key)}return n}recordKillAt(e,t){const i=this.nearestSealedGateKey(e,t,E_);return i?this.damageGate(i,ru):null}primeGate(){this.breached.has("hulao")||(this.gateHp.hulao=ru)}isGateBreached(e="hulao"){return this.breached.has(e)}rebuildFlow(){this.flowOriginX=Math.floor(this.playerX/ai)*ai-ht*ai/2,this.flowOriginZ=Math.floor(this.playerZ/ai)*ai-ht*ai/2;const e=ht*ht;this.distance.fill(pl);for(let o=0;o<ht;o++)for(let l=0;l<ht;l++){const h=this.flowOriginX+(l+.5)*ai,c=this.flowOriginZ+(o+.5)*ai;this.blocked[o*ht+l]=this.circleBlocked(h,c,.58)?1:0}const t=Math.max(0,Math.min(ht-1,Math.floor((this.playerX-this.flowOriginX)/ai)));let n=Math.max(0,Math.min(ht-1,Math.floor((this.playerZ-this.flowOriginZ)/ai)))*ht+t;if(this.blocked[n]){for(let o=0;o<e;o++)if(!this.blocked[o]){n=o;break}}let s=0,r=0;for(this.queue[r++]=n,this.distance[n]=0;s<r;){const o=this.queue[s++],l=o%ht,h=o/ht|0,c=this.distance[o]+1;l>0&&(r=this.visitFlow(o-1,c,r)),l+1<ht&&(r=this.visitFlow(o+1,c,r)),h>0&&(r=this.visitFlow(o-ht,c,r)),h+1<ht&&(r=this.visitFlow(o+ht,c,r))}}visitFlow(e,t,i){return this.blocked[e]||this.distance[e]!==pl?i:(this.distance[e]=t,this.queue[i]=e,i+1)}flowDirection(e,t,i,n,s){if(!this.flowActive){this.directDirection(e,t,i,n,s);return}const r=Math.floor((e-this.flowOriginX)/ai),o=Math.floor((t-this.flowOriginZ)/ai);if(r<1||o<1||r>=ht-1||o>=ht-1){this.directDirection(e,t,i,n,s);return}const l=o*ht+r;let h=this.distance[l],c=r,d=o;for(let m=-1;m<=1;m++)for(let v=-1;v<=1;v++){if(v===0&&m===0)continue;const g=(o+m)*ht+r+v;this.blocked[g]||this.distance[g]>=h||v!==0&&m!==0&&(this.blocked[o*ht+r+v]||this.blocked[(o+m)*ht+r])||(h=this.distance[g],c=r+v,d=o+m)}if(h===pl||c===r&&d===o){this.directDirection(e,t,i,n,s);return}const u=this.flowOriginX+(c+.5)*ai,f=this.flowOriginZ+(d+.5)*ai;this.directDirection(e,t,u,f,s)}directDirection(e,t,i,n,s){const r=i-e,o=n-t,l=Math.hypot(r,o)||1;s.x=r/l,s.z=o/l}get activeColliderCount(){return this.colliders.length}get castleFlowActive(){return this.castleFlow}get castleCenterX(){return Qt}get castleCenterZ(){return Vt}insideCastleBounds(e,t,i=0){return e>=Qt-fn-i&&e<=Qt+fn+i&&t>=Vt-zi-i&&t<=Vt+zi+i}insideKeepBounds(e,t,i=0){return e>=Qt-Os-i&&e<=Qt+Os+i&&t>=Vt-Jn-i&&t<=Vt+Jn+i}openKeepGate(){this.keepSealed&&(this.keepSealed=!1,this.rebuild(),this.rebuildFlow())}setCastleBreachable(e){this.castleBreachable=e}castleOuterBreachCount(){let e=0;for(const t of _e.outerGates)this.breached.has(t.key)&&e++;return e}get keepGateSealed(){return this.keepSealed}}const ba=288,ya=72,I_={font:'bold 30px "Nanum Myeongjo","Times New Roman",serif',fill:"#f0e0a0",stroke:"rgba(0,0,0,0.92)",strokeW:6,scale:1.35},L_={font:'bold 27px "Nanum Myeongjo","Times New Roman",serif',fill:"#c8ecff",stroke:"rgba(0,0,0,0.88)",strokeW:6,scale:1.18},F_={font:'bold 32px "Nanum Myeongjo","Times New Roman",serif',fill:"#ffe6a2",stroke:"rgba(0,0,0,0.94)",strokeW:7,scale:2.35},D_=new I(18e-5,26e-5,8e-4),U_=.019,vl=[.14,.46,.44],k_=.055,z_=.8,N_=.15;class xl{slots=[];cap;style;cursor=0;constructor(e,t,i,n){this.cap=t,this.style=i;for(let s=0;s<t;s++){const r=document.createElement("canvas");r.width=ba,r.height=ya;const o=r.getContext("2d"),l=new Ai(r),h=new js({map:l,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1}),c=new Fa(h);c.visible=!1,c.renderOrder=n,c.scale.set(i.scale*(ba/ya),i.scale,1),e.add(c),this.slots.push({sprite:c,mat:h,tex:l,ctx:o,text:""})}}begin(){this.cursor=0}place(e,t,i,n,s){if(this.cursor>=this.cap)return;const r=this.slots[this.cursor++];if(r.text!==e){r.text=e;const o=r.ctx,l=this.style;o.clearRect(0,0,ba,ya),o.font=l.font,o.textAlign="center",o.textBaseline="middle",o.lineWidth=l.strokeW,o.lineJoin="round",o.strokeStyle=l.stroke,o.strokeText(e,ba/2,ya/2),o.fillStyle=l.fill,o.fillText(e,ba/2,ya/2),r.tex.needsUpdate=!0}r.mat.opacity=s,r.sprite.position.set(t,i,n),r.sprite.visible=!0}end(){for(let e=this.cursor;e<this.cap;e++)this.slots[e].sprite.visible=!1}reset(){for(const e of this.slots)e.sprite.visible=!1;this.cursor=0}}class O_{mat;matrices;colors;seeds;colAttr;seedAttr;mesh;cap;w=0;constructor(e,t){this.cap=t;const i=new tt(1,1);i.rotateX(-Math.PI/2),this.colors=new Float32Array(t*3),this.seeds=new Float32Array(t),this.colAttr=new qe(this.colors,3),this.seedAttr=new qe(this.seeds,1),this.colAttr.setUsage(Pe),this.seedAttr.setUsage(Pe),i.setAttribute("aColor",this.colAttr),i.setAttribute("aSeed",this.seedAttr),this.mat=new Be({uniforms:{uTime:{value:0}},vertexShader:`
        attribute vec3 aColor;
        attribute float aSeed;
        varying vec2 vUv;
        varying vec3 vColor;
        varying float vSeed;
        void main() {
          vUv = uv;
          vColor = aColor;
          vSeed = aSeed;
          gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform float uTime;
        varying vec2 vUv;
        varying vec3 vColor;
        varying float vSeed;
        void main() {
          float r = length(vUv - 0.5) * 2.0;
          float soft = smoothstep(1.0, 0.12, r);
          if (soft <= 0.002) discard;
          float pulse = 0.8 + 0.2 * sin(uTime * 2.3 + vSeed * 6.283);
          float b = soft * soft * pulse;
          gl_FragColor = vec4(vColor * b, b * 0.55);
        }
      `,transparent:!0,blending:jt,depthWrite:!1,depthTest:!0}),this.mesh=new At(i,this.mat,t),this.mesh.count=0,this.mesh.frustumCulled=!1,this.mesh.renderOrder=2,this.mesh.instanceMatrix.setUsage(Pe),this.matrices=this.mesh.instanceMatrix.array,e.add(this.mesh)}begin(){this.w=0}push(e,t,i,n,s,r){if(this.w>=this.cap)return;const o=this.w++,l=o*16,h=i*2;this.matrices[l]=h,this.matrices[l+5]=1,this.matrices[l+10]=h,this.matrices[l+12]=e,this.matrices[l+13]=.06,this.matrices[l+14]=t,this.matrices[l+15]=1;const c=o*3;this.colors[c]=n,this.colors[c+1]=s,this.colors[c+2]=r,this.seeds[o]=(Math.floor(e*3.1+t*7.7)&63)/64}end(e){this.mat.uniforms.uTime.value=e,this.mesh.count=this.w,this.mesh.instanceMatrix.needsUpdate=!0,this.colAttr.needsUpdate=!0,this.seedAttr.needsUpdate=!0}reset(){this.w=0,this.mesh.count=0}}class B_{cloth;poles;clothMat;seeds;cols;seedAttr;colAttr;flut;flutAttr;dummy=new Zt;cap;version=-1;flipVersion=-1;lastTime=-1;count=0;anyFlip=!1;bx;bz;baseCol;isRed;trPhase;trDelay;trProg;trFrom;trTo;constructor(e,t=24){this.cap=t;const i=new tt(1,1,14,3);i.translate(.5,.5,0),this.seeds=new Float32Array(t),this.cols=new Float32Array(t*3),this.flut=new Float32Array(t).fill(1),this.seedAttr=new qe(this.seeds,1),this.colAttr=new qe(this.cols,3),this.flutAttr=new qe(this.flut,1),this.seedAttr.setUsage(Pe),this.colAttr.setUsage(Pe),this.flutAttr.setUsage(Pe),i.setAttribute("aSeed",this.seedAttr),i.setAttribute("aColor",this.colAttr),i.setAttribute("aFlutter",this.flutAttr),this.bx=new Float32Array(t),this.bz=new Float32Array(t),this.baseCol=new Float32Array(t*3),this.isRed=new Uint8Array(t),this.trPhase=new Uint8Array(t),this.trDelay=new Float32Array(t),this.trProg=new Float32Array(t),this.trFrom=new Float32Array(t*3),this.trTo=new Float32Array(t*3),this.clothMat=new Be({uniforms:{uTime:{value:0},uFogColor:{value:D_.clone()},uFogDensity:{value:U_}},vertexShader:`
        attribute float aSeed;
        attribute vec3 aColor;
        attribute float aFlutter;
        uniform float uTime;
        varying vec3 vColor;
        varying float vShade;
        varying float vFogDepth;
        void main() {
          vColor = aColor;
          vec3 p = position;
          float t = uTime + aSeed * 6.2831;
          float amp = p.x * aFlutter; // 깃대(0)→자유단(1) 진폭 증가 × 전환 웨이브 순간 가산
          float w = sin(p.x * 6.5 - t * 5.5) * 0.17 * amp
                  + sin(p.x * 3.0 - t * 3.2 + 1.3) * 0.09 * amp;
          p.z += w;
          p.y += sin(p.x * 4.5 - t * 4.8) * 0.05 * amp;
          vShade = 0.66 + 0.28 * cos(p.x * 6.5 - t * 5.5); // 사인 기울기로 가짜 음영
          vec4 mv = modelViewMatrix * instanceMatrix * vec4(p, 1.0);
          vFogDepth = -mv.z;
          gl_Position = projectionMatrix * mv;
        }
      `,fragmentShader:`
        uniform vec3 uFogColor;
        uniform float uFogDensity;
        varying vec3 vColor;
        varying float vShade;
        varying float vFogDepth;
        void main() {
          vec3 col = vColor * vShade;
          float fog = 1.0 - exp(-uFogDensity * uFogDensity * vFogDepth * vFogDepth);
          col = mix(col, uFogColor, clamp(fog, 0.0, 1.0));
          gl_FragColor = vec4(col, 1.0);
        }
      `,side:ui,transparent:!1,depthWrite:!0,depthTest:!0}),this.cloth=new At(i,this.clothMat,t),this.cloth.count=0,this.cloth.frustumCulled=!1,this.cloth.renderOrder=1,this.cloth.instanceMatrix.setUsage(Pe);const n=new sn(1,1,1);n.translate(0,.5,0);const s=new Fi({color:2366745,toneMapped:!0});this.poles=new At(n,s,t),this.poles.count=0,this.poles.frustumCulled=!1,this.poles.instanceMatrix.setUsage(Pe),e.add(this.cloth),e.add(this.poles)}rebuild(e){const t=Math.min(e.length,this.cap);for(let i=0;i<t;i++){const n=e[i];this.dummy.position.set(n.x,0,n.z),this.dummy.rotation.set(0,0,0),this.dummy.scale.set(.16,n.poleH,.16),this.dummy.updateMatrix(),this.poles.setMatrixAt(i,this.dummy.matrix),this.dummy.position.set(n.x,n.poleH-n.h-.15,n.z),this.dummy.rotation.set(0,n.ry,0),this.dummy.scale.set(n.w,n.h,1),this.dummy.updateMatrix(),this.cloth.setMatrixAt(i,this.dummy.matrix),this.seeds[i]=i*.37%1,this.cols[i*3]=n.r,this.cols[i*3+1]=n.g,this.cols[i*3+2]=n.b,this.bx[i]=n.x,this.bz[i]=n.z,this.baseCol[i*3]=n.r,this.baseCol[i*3+1]=n.g,this.baseCol[i*3+2]=n.b,this.isRed[i]=n.r>n.g&&n.r>n.b&&n.g<n.r*.5?1:0,this.trPhase[i]=0,this.flut[i]=1}this.count=t,this.cloth.count=t,this.poles.count=t,this.anyFlip=!1,this.cloth.instanceMatrix.needsUpdate=!0,this.poles.instanceMatrix.needsUpdate=!0,this.seedAttr.needsUpdate=!0,this.colAttr.needsUpdate=!0,this.flutAttr.needsUpdate=!0}update(e){st.bannerVersion!==this.version&&(this.version=st.bannerVersion,this.rebuild(st.banners)),this.clothMat.uniforms.uTime.value=e;const t=this.lastTime<0?0:Math.min(.05,Math.max(0,e-this.lastTime));this.lastTime=e,st.flipVersion!==this.flipVersion&&(this.flipVersion=st.flipVersion,this.flipVersion>0&&this.armFlip()),this.anyFlip&&this.advanceFlip(t)}armFlip(){const e=st.flipX,t=st.flipZ,i=st.allied;let n=!1;for(let s=0;s<this.count;s++){if(this.isRed[s]===0||Math.abs(this.bx[s]-_e.cx)>_e.ohx+2.5||Math.abs(this.bz[s]-_e.cz)>_e.ohz+2.5)continue;const r=this.bx[s]-e,o=this.bz[s]-t,l=Math.hypot(r,o);this.trDelay[s]=l*k_,this.trProg[s]=0,this.trPhase[s]=1;const h=s*3;this.trFrom[h]=this.cols[h],this.trFrom[h+1]=this.cols[h+1],this.trFrom[h+2]=this.cols[h+2],i?(this.trTo[h]=vl[0],this.trTo[h+1]=vl[1],this.trTo[h+2]=vl[2]):(this.trTo[h]=this.baseCol[h],this.trTo[h+1]=this.baseCol[h+1],this.trTo[h+2]=this.baseCol[h+2]),n=!0}this.anyFlip=n}advanceFlip(e){let t=!1;for(let i=0;i<this.count;i++){const n=this.trPhase[i];if(n===0)continue;if(t=!0,n===1){if(this.trDelay[i]-=e,this.trDelay[i]>0){this.flut[i]=1;continue}this.trPhase[i]=2,this.trProg[i]=0}this.trProg[i]+=e/z_;const s=this.trProg[i]>=1?1:this.trProg[i],r=s*s*(3-2*s),o=i*3;this.cols[o]=this.trFrom[o]+(this.trTo[o]-this.trFrom[o])*r,this.cols[o+1]=this.trFrom[o+1]+(this.trTo[o+1]-this.trFrom[o+1])*r,this.cols[o+2]=this.trFrom[o+2]+(this.trTo[o+2]-this.trFrom[o+2])*r,this.flut[i]=1+N_*Math.sin(s*Math.PI),s>=1&&(this.trPhase[i]=0,this.flut[i]=1)}this.anyFlip=t,this.colAttr.needsUpdate=!0,this.flutAttr.needsUpdate=!0}resetOwnership(){for(let e=0;e<this.count;e++){const t=e*3;this.cols[t]=this.baseCol[t],this.cols[t+1]=this.baseCol[t+1],this.cols[t+2]=this.baseCol[t+2],this.trPhase[e]=0,this.flut[e]=1}this.anyFlip=!1,this.flipVersion=st.flipVersion,this.colAttr.needsUpdate=!0,this.flutAttr.needsUpdate=!0}}function H_(a,e,t){const i=document.createElement("canvas");i.width=4,i.height=4;const n=i.getContext("2d");n.fillStyle=`rgb(${a},${e},${t})`,n.fillRect(0,0,4,4);const s=new Ai(i);return s.needsUpdate=!0,s}function G_(){const a=document.createElement("canvas");a.width=64,a.height=8;const e=a.getContext("2d"),t=e.createLinearGradient(0,0,64,0);t.addColorStop(0,"rgb(224,180,90)"),t.addColorStop(1,"rgb(200,96,36)"),e.fillStyle=t,e.fillRect(0,0,64,8);const i=new Ai(a);return i.needsUpdate=!0,i}const Fr=3,bl=.34,hu=3.2;class V_{bg=[];fill=[];cap;w=0;constructor(e,t){this.cap=t;const i=H_(58,12,10),n=G_();for(let s=0;s<t;s++){const r=new js({map:i,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,opacity:.9}),o=new Fa(r);o.center.set(0,.5),o.scale.set(Fr,bl,1),o.renderOrder=13,o.visible=!1,e.add(o),this.bg.push(o);const l=new js({map:n,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1}),h=new Fa(l);h.center.set(0,.5),h.scale.set(Fr,bl,1),h.renderOrder=14,h.visible=!1,e.add(h),this.fill.push(h)}}begin(){this.w=0}push(e,t,i){if(this.w>=this.cap||i<0)return;const n=this.w++,s=e-Fr*.5,r=this.bg[n];r.position.set(s,hu,t),r.visible=!0;const o=i>1?1:i,l=this.fill[n];l.position.set(s,hu,t),l.scale.set(Fr*o,bl,1),l.visible=o>.001}end(){for(let e=this.w;e<this.cap;e++)this.bg[e].visible=!1,this.fill[e].visible=!1}reset(){for(let e=0;e<this.cap;e++)this.bg[e].visible=!1,this.fill[e].visible=!1;this.w=0}}class W_{mat;matrices;colors;actives;colAttr;actAttr;mesh;cap;w=0;constructor(e,t){this.cap=t;const i=new tt(1,1);i.rotateX(-Math.PI/2),this.colors=new Float32Array(t*3),this.actives=new Float32Array(t),this.colAttr=new qe(this.colors,3),this.actAttr=new qe(this.actives,1),this.colAttr.setUsage(Pe),this.actAttr.setUsage(Pe),i.setAttribute("aColor",this.colAttr),i.setAttribute("aActive",this.actAttr),this.mat=new Be({uniforms:{uTime:{value:0}},vertexShader:`
        attribute vec3 aColor;
        attribute float aActive;
        varying vec2 vUv;
        varying vec3 vColor;
        varying float vActive;
        void main() {
          vUv = uv;
          vColor = aColor;
          vActive = aActive;
          gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform float uTime;
        varying vec2 vUv;
        varying vec3 vColor;
        varying float vActive;
        void main() {
          float r = length(vUv - 0.5) * 2.0;
          // 고리 밴드: 안쪽 0.72 상승 ~ 바깥 0.98 하강.
          float band = smoothstep(0.72, 0.84, r) * smoothstep(1.0, 0.9, r);
          if (band <= 0.002 && vActive < 0.5) discard;
          float pulse = 0.72 + 0.28 * sin(uTime * 3.0);
          // active: 맥동하는 고리 + 아주 옅은 안쪽 채움. 비활성: 정적 흐린 고리만.
          float ringA = band * (vActive > 0.5 ? 0.5 * pulse : 0.2);
          float innerA = vActive > 0.5 ? smoothstep(0.86, 0.0, r) * 0.1 : 0.0;
          float a = ringA + innerA;
          if (a <= 0.003) discard;
          gl_FragColor = vec4(vColor * a, a);
        }
      `,transparent:!0,blending:jt,depthWrite:!1,depthTest:!0}),this.mesh=new At(i,this.mat,t),this.mesh.count=0,this.mesh.frustumCulled=!1,this.mesh.renderOrder=2,this.mesh.instanceMatrix.setUsage(Pe),this.matrices=this.mesh.instanceMatrix.array,e.add(this.mesh)}begin(){this.w=0}push(e,t,i,n,s,r,o){if(this.w>=this.cap)return;const l=this.w++,h=l*16,c=i*2;this.matrices[h]=c,this.matrices[h+5]=1,this.matrices[h+10]=c,this.matrices[h+12]=e,this.matrices[h+13]=.05,this.matrices[h+14]=t,this.matrices[h+15]=1;const d=l*3;this.colors[d]=n,this.colors[d+1]=s,this.colors[d+2]=r,this.actives[l]=o?1:0}end(e){this.mat.uniforms.uTime.value=e,this.mesh.count=this.w,this.mesh.instanceMatrix.needsUpdate=!0,this.colAttr.needsUpdate=!0,this.actAttr.needsUpdate=!0}reset(){this.w=0,this.mesh.count=0}}class X_{glow;names;hints;titles;banners;gateBars;rings;time=0;guideEl;guideArrow;guideDist;gv=new I;constructor(e,t=24,i=18,n=6){this.glow=new O_(e,t),this.names=new xl(e,i,I_,11),this.hints=new xl(e,n,L_,12),this.titles=new xl(e,2,F_,13),this.banners=new B_(e),this.gateBars=new V_(e,4),this.rings=new W_(e,12),this.guideEl=document.createElement("div"),this.guideEl.style.cssText=["position:fixed","left:0","top:0","display:none","flex-direction:column","align-items:center","gap:2px","pointer-events:none","z-index:19",'font-family:"Nanum Myeongjo","Times New Roman",serif',"will-change:transform,left,top"].join(";"),this.guideArrow=document.createElement("div"),this.guideArrow.style.cssText=["width:0","height:0","border-top:7px solid transparent","border-bottom:7px solid transparent","border-left:26px solid rgba(244,222,150,0.9)","filter:drop-shadow(0 0 4px rgba(0,0,0,0.7))"].join(";"),this.guideDist=document.createElement("div"),this.guideDist.style.cssText="color:rgba(240,224,170,0.85);font-size:12px;letter-spacing:1px;text-shadow:0 1px 3px rgba(0,0,0,0.9);font-variant-numeric:tabular-nums;",this.guideEl.appendChild(this.guideArrow),this.guideEl.appendChild(this.guideDist),document.body.appendChild(this.guideEl)}begin(e){this.time=e,this.glow.begin(),this.names.begin(),this.hints.begin(),this.gateBars.begin(),this.rings.begin(),this.banners.update(e),this.titles.begin();const t=st.title;t.alpha>.02&&this.titles.place(t.text,t.x,t.y,t.z,Math.min(1,t.alpha))}glowAt(e,t,i,n,s,r){this.glow.push(e,t,i,n,s,r)}name(e,t,i,n){this.names.place(e,t,i,n,1)}hint(e,t,i,n){const s=.62+.38*Math.sin(this.time*5.2);this.hints.place(e,t,i,n,s)}gateBar(e,t,i){this.gateBars.push(e,t,i)}interactRing(e,t,i,n,s,r){this.rings.push(e,t,1.6,i,n,s,r)}guide(e,t,i,n,s,r="rgba(244,222,150,0.9)"){const o=window.innerWidth,l=window.innerHeight;this.gv.set(e,2.2,t),this.gv.project(s);const h=this.gv.z>1;if(!h&&this.gv.x>=-1&&this.gv.x<=1&&this.gv.y>=-1&&this.gv.y<=1){this.guideEl.style.display!=="none"&&(this.guideEl.style.display="none");return}let d=this.gv.x,u=this.gv.y;h&&(d=-d,u=-u);let f=d,m=-u;const v=Math.hypot(f,m)||1;f/=v,m/=v;const g=o*.5,p=l*.5,M=46,T=Math.max(10,g-M),w=Math.max(10,p-M),A=Math.abs(f)<.001?1/0:T/Math.abs(f),_=Math.abs(m)<.001?1/0:w/Math.abs(m),E=Math.min(A,_),x=g+f*E,y=p+m*E,R=Math.atan2(m,f)*180/Math.PI,P=Math.round(Math.hypot(e-i,t-n));this.guideEl.style.display="flex",this.guideEl.style.left=`${x}px`,this.guideEl.style.top=`${y}px`,this.guideEl.style.transform="translate(-50%,-50%)",this.guideArrow.style.transform=`rotate(${R}deg)`,this.guideArrow.style.borderLeftColor=r,this.guideDist.style.color=r,this.guideDist.textContent=`${P}m`}guideOff(){this.guideEl.style.display!=="none"&&(this.guideEl.style.display="none")}end(){this.glow.end(this.time),this.names.end(),this.hints.end(),this.titles.end(),this.gateBars.end(),this.rings.end(this.time)}reset(){this.glow.reset(),this.names.reset(),this.hints.reset(),this.titles.reset(),this.gateBars.reset(),this.rings.reset(),this.guideOff(),this.banners.resetOwnership()}}const q_=.6,$_=.4,j_=new I(.14,.46,.44),Z_=new I(.17,.55,.5),Y_=.03,K_=.045,J_=1.2;function cu(a,e){const t=e.borderW+.6,i=new tt((e.halfX+t)*2,(e.halfZ+t)*2);i.rotateX(-Math.PI/2);const n=new Be({uniforms:{uCenter:{value:a.clone()},uHalf:{value:new ve(e.halfX,e.halfZ)},uColor:{value:e.color.clone()},uFill:{value:e.fill},uLine:{value:e.line},uBorderW:{value:e.borderW},uGateHalf:{value:e.gateHalf},uGateSoft:{value:J_},uGateMode:{value:e.gateMode},uInnerGap:{value:e.innerGap},uOpacity:{value:0},uTime:{value:0},uFlow:{value:.15}},vertexShader:`
      uniform vec2 uCenter;
      varying vec2 vRel;
      void main() {
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vRel = wp.xz - uCenter; // 중심 기준 월드 XZ 오프셋(x=동서, y=남북 Z)
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform vec2 uHalf;
      uniform vec3 uColor;
      uniform float uFill, uLine, uBorderW, uGateHalf, uGateSoft, uGateMode, uInnerGap, uOpacity, uTime, uFlow;
      varying vec2 vRel;
      void main() {
        vec2 a = abs(vRel);
        float dX = uHalf.x - a.x; // 세로변(동·서)에서 안쪽으로 들어온 거리(m)
        float dZ = uHalf.y - a.y; // 가로변(남·북)에서 안쪽으로 들어온 거리(m)
        float d = min(dX, dZ);    // 가장 가까운 변까지 거리(안쪽 +, 바깥 -)

        // 채움: 사각 안쪽만(살짝 AA). 지면이 비치도록 저알파.
        float fill = smoothstep(0.0, 0.4, d) * uFill;

        // 경계 라인: 변(d≈0)에 밴드. 내성은 안쪽 평행선 1겹 추가(이중선).
        float line = smoothstep(uBorderW, 0.0, abs(d));
        if (uInnerGap > 0.001) line += 0.7 * smoothstep(uBorderW, 0.0, abs(d - uInnerGap));
        line = min(line, 1.2);

        // 성문 통로: 해당 변의 성문 폭만큼 라인을 끊는다.
        float gate = 0.0;
        if (uGateMode > 0.5) {
          if (dX < dZ) {
            // 세로변(동·서 성문) — 외성(mode 1)에만. 성문은 vRel.y(남북) 중앙.
            if (uGateMode < 1.5) gate = 1.0 - smoothstep(uGateHalf, uGateHalf + uGateSoft, abs(vRel.y));
          } else {
            // 가로변: 남성문만(vRel.y>0), 북벽은 폐쇄.
            float south = 1.0 - smoothstep(uGateHalf, uGateHalf + uGateSoft, abs(vRel.x));
            gate = vRel.y > 0.0 ? south : 0.0;
          }
        }
        line *= (1.0 - gate);

        // 경계를 천천히 도는 은은한 셰이드(활성 방어선 느낌 — 저진폭·저속).
        float ang = atan(vRel.y, vRel.x);
        float flow = (1.0 - uFlow) + uFlow * (0.5 + 0.5 * sin(ang * 2.0 - uTime * 0.9));
        line *= flow;

        float alpha = (fill + line * uLine) * uOpacity;
        if (alpha <= 0.003) discard;
        // 라인은 같은 색조로 약간 밝게(블룸 임계는 안 넘게).
        vec3 col = uColor * (1.0 + 0.45 * line);
        gl_FragColor = vec4(col, alpha);
      }
    `,transparent:!0,depthWrite:!1,depthTest:!0,side:ui}),s=new Lt(i,n);return s.position.set(a.x,e.y,a.y),s.renderOrder=0,s.frustumCulled=!1,s.visible=!1,{mesh:s,mat:n}}class Q_{outerMat;innerMat;outer;inner;opacity=0;target=0;time=0;constructor(e){const t=new ve(_e.cx,_e.cz),i=cu(t,{halfX:_e.ohx,halfZ:_e.ohz,color:j_,fill:.13,line:.5,borderW:.7,gateHalf:4.5,gateMode:1,innerGap:0,y:Y_}),n=cu(t,{halfX:_e.ihx,halfZ:_e.ihz,color:Z_,fill:.2,line:.6,borderW:.45,gateHalf:4,gateMode:2,innerGap:1.1,y:K_});this.outer=i.mesh,this.outerMat=i.mat,this.inner=n.mesh,this.innerMat=n.mat,e.add(this.outer,this.inner)}setActive(e){this.target=e?1:0,e&&(this.outer.visible=!0,this.inner.visible=!0)}update(e){if(this.opacity===0&&this.target===0){this.outer.visible&&(this.outer.visible=!1,this.inner.visible=!1);return}if(this.time+=e,this.opacity!==this.target){const t=this.target>this.opacity?e/q_:e/$_;this.opacity=this.target>this.opacity?Math.min(this.target,this.opacity+t):Math.max(this.target,this.opacity-t)}this.outerMat.uniforms.uOpacity.value=this.opacity,this.innerMat.uniforms.uOpacity.value=this.opacity,this.outerMat.uniforms.uTime.value=this.time,this.innerMat.uniforms.uTime.value=this.time,this.opacity===0&&(this.outer.visible=!1,this.inner.visible=!1)}reset(){this.opacity=0,this.target=0,this.time=0,this.outerMat.uniforms.uOpacity.value=0,this.innerMat.uniforms.uOpacity.value=0,this.outer.visible=!1,this.inner.visible=!1}}const e1=`
  uniform float uTime;
  uniform float uReveal;
  varying vec2 vUv;
  varying float vFold;
  void main() {
    vUv = uv;
    vec3 p = position;
    // 결(가로) 방향으로 진행하는 두 개의 사인파 → 천이 펄럭이는 주름.
    float w = sin(p.x * 7.0 + uTime * 3.4) * 0.5 + sin(p.x * 13.0 - uTime * 2.1) * 0.22;
    // 세로 가장자리로 갈수록 진폭↑ (매달린 천 느낌). 펼쳐지는 앞단에서 진폭 가중.
    float edge = 0.35 + abs(p.y) * 1.3;
    float amp = 0.05 * edge * smoothstep(0.0, 0.3, uReveal);
    p.z += w * amp;
    vFold = w; // 주름 음영용
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
  }
`,t1=`
  precision highp float;
  uniform vec3 uColor;
  uniform float uReveal;
  uniform float uAlpha;
  uniform float uTime;
  uniform sampler2D uTex;
  varying vec2 vUv;
  varying float vFold;
  void main() {
    // 좌→우 펼침: uReveal 경계 밖은 버림 + 앞단 밝은 띠.
    float lead = uReveal;
    if (vUv.x > lead) discard;
    float leadGlow = smoothstep(0.05, 0.0, lead - vUv.x) * 0.6;

    // 부드러운 라운드 사각형 천 알파(가장자리 페더).
    vec2 d = abs(vUv - 0.5) * 2.0;
    float shape = (1.0 - smoothstep(0.86, 1.0, d.x)) * (1.0 - smoothstep(0.72, 1.0, d.y));

    // 장수색은 블룸용 HDR(>1)일 수 있어 그대로 쓰면 천이 하얘짐 → LDR로 클램프 후 사용(오너 피드백).
    vec3 tint = clamp(uColor, 0.0, 1.0);
    // 어두운 군기 바탕 + 세력색 틴트 → 옅은 색 장수(원군 등)에서도 화면을 하얗게 덮지 않음.
    float shade = 0.5 + vFold * 0.26 + 0.14 * (1.0 - vUv.y);
    vec3 cloth = mix(vec3(0.05, 0.06, 0.09), tint * 0.7, 0.5) * shade;

    // 문양(한자) — 세력색 위주 엠블럼(흰색 지배 제거 → 화면 하얗게 덮는 문제 해소).
    vec4 g = texture2D(uTex, vUv);
    vec3 emblem = tint * 0.9 + vec3(0.12);
    vec3 col = mix(cloth, emblem, g.a);
    col += leadGlow * tint * 0.7;

    // 위·아래 얇은 금색 테두리 선.
    float bar = smoothstep(0.9, 0.97, d.y) * (1.0 - smoothstep(0.97, 1.02, d.y));
    col = mix(col, vec3(0.95, 0.8, 0.45), bar * 0.8);

    float a = shape * uAlpha;
    if (a < 0.01) discard;
    gl_FragColor = vec4(col, a);
  }
`;class i1{mesh;mat;texCache=new Map;life=0;dur=3;constructor(e){const t=new tt(1,1,48,10);this.mat=new Be({uniforms:{uTime:{value:0},uReveal:{value:0},uAlpha:{value:0},uColor:{value:new Ne(.6,.6,.6)},uTex:{value:this.glyphTexture("群雄","군웅")}},vertexShader:e1,fragmentShader:t1,transparent:!0,depthTest:!1,depthWrite:!1,side:ui}),this.mesh=new Lt(t,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=998,this.mesh.visible=!1,this.mesh.scale.set(18,4.4,1),e.add(this.mesh)}trigger(e,t,i){this.mat.uniforms.uColor.value=new Ne(i[0],i[1],i[2]),this.mat.uniforms.uTex.value=this.glyphTexture(e,t),this.life=this.dur,this.mesh.visible=!0}update(e,t){if(this.life<=0){this.mesh.visible&&(this.mesh.visible=!1);return}this.life-=e;const i=1-this.life/this.dur;this.mat.uniforms.uTime.value+=e,this.mat.uniforms.uReveal.value=Math.min(1,i/.12);const n=Math.min(1,i/.1),s=Math.min(1,this.life/.6);this.mat.uniforms.uAlpha.value=Math.min(n,s)*.8,this.mesh.position.copy(t.position),this.mesh.quaternion.copy(t.quaternion),this.mesh.translateZ(-24),this.mesh.translateY(2.6)}reset(){this.life=0,this.mesh.visible=!1}get playing(){return this.life>0}glyphTexture(e,t){const i=e+t,n=this.texCache.get(i);if(n)return n;const s=1024,r=256,o=document.createElement("canvas");o.width=s,o.height=r;const l=o.getContext("2d");l.clearRect(0,0,s,r),l.textAlign="center",l.textBaseline="middle",l.shadowColor="rgba(0,0,0,0.85)",l.shadowBlur=10,l.fillStyle="#ffffff",l.font='bold 150px "Nanum Myeongjo","SimSun",serif',l.fillText(e,s/2,r*.42),l.font='bold 52px "Nanum Gothic","Malgun Gothic",sans-serif',l.fillText(t,s/2,r*.82);const h=new Ai(o);return h.colorSpace=Mt,h.needsUpdate=!0,this.texCache.set(i,h),h}}const Kt=40;class n1{x=new Float32Array(Kt);z=new Float32Array(Kt);rad=new Float32Array(Kt);life=new Float32Array(Kt);maxLife=new Float32Array(Kt);seed=new Float32Array(Kt);cr=new Float32Array(Kt);cg=new Float32Array(Kt);cb=new Float32Array(Kt);alive=new Uint8Array(Kt);cursor=0;mesh;matArr;colArr;fadeArr;seedArr;colAttr;fadeAttr;seedAttr;constructor(e){const t=new tt(1,1);t.rotateX(-Math.PI/2),this.colArr=new Float32Array(Kt*3),this.fadeArr=new Float32Array(Kt),this.seedArr=new Float32Array(Kt),this.colAttr=new qe(this.colArr,3),this.fadeAttr=new qe(this.fadeArr,1),this.seedAttr=new qe(this.seedArr,1),this.colAttr.setUsage(Pe),this.fadeAttr.setUsage(Pe),this.seedAttr.setUsage(Pe),t.setAttribute("aColor",this.colAttr),t.setAttribute("aFade",this.fadeAttr),t.setAttribute("aSeed",this.seedAttr);const i=new Be({vertexShader:`
        attribute vec3 aColor;
        attribute float aFade;
        attribute float aSeed;
        varying vec2 vUv;
        varying vec3 vColor;
        varying float vFade;
        varying float vSeed;
        void main() {
          vUv = uv;
          vColor = aColor;
          vFade = aFade;
          vSeed = aSeed;
          gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        varying vec2 vUv;
        varying vec3 vColor;
        varying float vFade;
        varying float vSeed;
        void main() {
          vec2 p = vUv - 0.5;
          float r = length(p) * 2.0;
          if (r > 1.0) discard;
          float ang = atan(p.y, p.x);
          // 방사형 균열: 각도 별로 갈라진 밝은 선 + 중심에서 바깥으로 감쇠
          float cracks = pow(abs(sin(ang * 5.0 + vSeed * 12.566)), 10.0)
                       + 0.6 * pow(abs(sin(ang * 8.0 - vSeed * 7.0)), 12.0);
          float radial = smoothstep(1.0, 0.15, r);
          float ember = smoothstep(0.5, 0.0, r) * 0.35; // 중심 잔불
          float b = (cracks * radial + ember) * vFade;
          if (b <= 0.004) discard;
          gl_FragColor = vec4(vColor * b * 1.4, b * 0.9);
        }
      `,transparent:!0,blending:jt,depthWrite:!1,depthTest:!0});this.mesh=new At(t,i,Kt),this.mesh.instanceMatrix.setUsage(Pe),this.mesh.frustumCulled=!1,this.mesh.count=0,this.mesh.renderOrder=1,this.matArr=this.mesh.instanceMatrix.array,e.add(this.mesh)}reset(){this.alive.fill(0),this.mesh.count=0}spawn(e,t,i,n,s,r,o=1.6){const l=this.cursor;this.cursor=(this.cursor+1)%Kt,this.x[l]=e,this.z[l]=t,this.rad[l]=i,this.life[l]=o,this.maxLife[l]=o,this.seed[l]=Math.random(),this.cr[l]=n,this.cg[l]=s,this.cb[l]=r,this.alive[l]=1}update(e){for(let t=0;t<Kt;t++)this.alive[t]!==0&&(this.life[t]-=e,this.life[t]<=0&&(this.alive[t]=0))}render(){let e=0;for(let t=0;t<Kt;t++){if(this.alive[t]===0)continue;const i=e*16,n=this.rad[t]*2;this.matArr[i]=n,this.matArr[i+5]=1,this.matArr[i+10]=n,this.matArr[i+12]=this.x[t],this.matArr[i+13]=.04,this.matArr[i+14]=this.z[t],this.matArr[i+15]=1;const s=e*3;this.colArr[s]=this.cr[t],this.colArr[s+1]=this.cg[t],this.colArr[s+2]=this.cb[t];const r=this.life[t]/this.maxLife[t];this.fadeArr[e]=Math.min(1,r*3.5)*r,this.seedArr[e]=this.seed[t],e++}this.mesh.count=e,this.mesh.instanceMatrix.needsUpdate=!0,this.colAttr.needsUpdate=!0,this.fadeAttr.needsUpdate=!0,this.seedAttr.needsUpdate=!0}}const Hf="threesur-lang";let as=s1();const Ih=new Set;function s1(){try{const a=localStorage.getItem(Hf);if(a==="ko"||a==="en")return a}catch{}return a1()}function a1(){const a=(navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language])||[];for(const e of a)if(typeof e=="string"&&e.toLowerCase().startsWith("ko"))return"ko";return"en"}function we(){return as}function r1(a){if(a!==as){as=a;try{localStorage.setItem(Hf,a)}catch{}for(const e of Ih)e(a)}}function o1(){return r1(as==="ko"?"en":"ko"),as}function l1(a){return Ih.add(a),()=>Ih.delete(a)}function ie(a,e){let i=(yl[as]??yl.ko)[a]??yl.ko[a]??a;if(e)for(const n in e)i=i.replace(new RegExp(`\\{${n}\\}`,"g"),String(e[n]));return i}function _t(a,e,t){return as==="ko"?t:h1[a][e]??t}const yl={ko:{titleKor:"일 기 당 천",titleTag:"삼국 서바이버 · 한 명의 장수로 수천을 베어라",start:"출진 出陣",shop:"본진 本陣",codex:"전공 戰功",back:"뒤로 ‹",controlsHint:"<b>WASD / 화살표</b> 이동 · <b>Space</b> 무쌍난무 · <b>Esc</b> 일시정지<br>모바일: 좌측 가상 조이스틱 + 우측 무쌍 버튼",selectTitle:"장수 선택",weaponLabel:"무기",unlockAtShop:"본진에서 해금",hudKills:"처치 {n}",hudKillsLabel:"처치",hudLevel:"Lv {n}",hudCombo:"連 킬",musouHint:"무쌍 無雙 — Space",resultWin:"천하통일",resultLose:"전사",rsSurvive:"생존",rsKills:"처치",rsMaxCombo:"최대 콤보",rsLevel:"레벨",rsHero:"장수",rsBossKill:"보스 토벌",goldEarned:"획득 골드",goldBonus:"(콤보 보너스 +{n})",baseBalance:"본진 잔액 ⟡ {n}",retry:"다시 출진 再出陣",share:"전과 공유 戰果",toTitle:"본진으로 本陣",newRecord:"신기록",achGet:"업적 달성!",heroUnlockGet:"새 장수 해금!",shopTitle:"본진",goldHeld:"보유 골드 ⟡ {n}",tabUpgrade:"강화 强化",tabCodex:"전공 戰功",upgradeBuy:"강화",unlockBuy:"해금",lvbuUnlockName:"여포 해금",lvbuUnlockDesc:"방천화극 · 공격력 +25%(받는 피해 +25%) · 적토무쌍",maxed:"MAX",recSurvive:"최고 생존",recKills:"최다 처치",recLevel:"최고 레벨",recCombo:"최대 콤보",bossCodex:"보스 토벌 기록",slain:"토벌 완료",notSlain:"미토벌",achSection:"업적 業績",levelupTitle:"레벨 업 — 하나를 택하라",reroll:"리롤 (50G) · 보유 {n}G",levelupHint:"1 · 2 · 3 키로도 선택",tagNew:"신규",tagUp:"강화",tagMax:"최대",tagReward:"보상",tagCurse:"저주",catWeapon:"무기",catPassive:"패시브",catRelic:"저주 유물",rewardHealName:"재정비",rewardHealDesc:"체력 50% 회복",rewardGoldName:"군자금",rewardGoldDesc:"골드 +200",rewardXpName:"병법 수련",rewardXpDesc:"경험치 대량 획득",pauseTitle:"일시정지",resume:"계속 繼續",abandon:"포기 抛棄",resumeHint:"Esc 로도 계속",bannerAppear:"등장",bannerHulao:"호로관 출현",bannerAlly:"원군",bannerSupply:"보급 확보",bannerHulaoBreak:"호로관 파성",bannerEvolve:"진화!",bannerTreasure:"보물 寶物",bannerReward:"보상 報償",bannerEndless:"무한 전투"},en:{titleKor:"ILGIDANGCHEON",titleTag:"Three Kingdoms Survivor · One general, ten thousand foes",start:"Sortie 出陣",shop:"Camp 本陣",codex:"Records 戰功",back:"Back ‹",controlsHint:"<b>WASD / Arrows</b> Move · <b>Space</b> Musou · <b>Esc</b> Pause<br>Mobile: left virtual stick + right Musou button",selectTitle:"Choose Your General",weaponLabel:"Weapon",unlockAtShop:"Unlock at Camp",hudKills:"Kills {n}",hudKillsLabel:"Kills",hudLevel:"Lv {n}",hudCombo:"Combo",musouHint:"Musou 無雙 — Space",resultWin:"Unify the Realm",resultLose:"Fallen in Battle",rsSurvive:"Survived",rsKills:"Kills",rsMaxCombo:"Max Combo",rsLevel:"Level",rsHero:"General",rsBossKill:"Bosses Slain",goldEarned:"Gold Earned",goldBonus:"(combo bonus +{n})",baseBalance:"Camp balance ⟡ {n}",retry:"Sortie Again 再出陣",share:"Share 戰果",toTitle:"To Camp 本陣",newRecord:"RECORD",achGet:"Achievement unlocked!",heroUnlockGet:"New general unlocked!",shopTitle:"Camp",goldHeld:"Gold ⟡ {n}",tabUpgrade:"Upgrades 强化",tabCodex:"Records 戰功",upgradeBuy:"Upgrade",unlockBuy:"Unlock",lvbuUnlockName:"Unlock Lü Bu",lvbuUnlockDesc:"Sky Piercer · Attack +25% (damage taken +25%) · Red Hare Rampage",maxed:"MAX",recSurvive:"Best Survival",recKills:"Most Kills",recLevel:"Best Level",recCombo:"Max Combo",bossCodex:"Bosses Slain",slain:"Slain",notSlain:"Not yet",achSection:"Achievements 業績",levelupTitle:"Level Up — Choose One",reroll:"Reroll (50G) · {n}G held",levelupHint:"Or press 1 · 2 · 3",tagNew:"NEW",tagUp:"UP",tagMax:"MAX",tagReward:"REWARD",tagCurse:"CURSE",catWeapon:"Weapon",catPassive:"Passive",catRelic:"Cursed Relic",rewardHealName:"Regroup",rewardHealDesc:"Restore 50% HP",rewardGoldName:"War Funds",rewardGoldDesc:"Gold +200",rewardXpName:"War Study",rewardXpDesc:"Gain a large amount of XP",pauseTitle:"Paused",resume:"Resume 繼續",abandon:"Abandon 抛棄",resumeHint:"Esc to resume",bannerAppear:"appears",bannerHulao:"Hulao Gate appears",bannerAlly:"Reinforcement",bannerSupply:"Supplies Secured",bannerHulaoBreak:"Hulao Gate Breached",bannerEvolve:"Evolved!",bannerTreasure:"Treasure 寶物",bannerReward:"Reward 報償",bannerEndless:"Endless Battle"}},h1={hero:{zhaoyun:"Zhao Yun",guanyu:"Guan Yu",zhangfei:"Zhang Fei",zhugeliang:"Zhuge Liang",huangzhong:"Huang Zhong",sunshangxiang:"Sun Shangxiang",lvbu:"Lü Bu",yuanshao:"Yuan Shao",dongzhuo:"Dong Zhuo"},weapon:{spear:"Dragon-Gall Spear",guandao:"Green Dragon Blade",zhangba:"Serpent Spear",baiyu:"White Feather Fan",crossbow:"Repeating Crossbow",fire:"Fire Stratagem",thunder:"Heavenly Thunder",orbit:"Eight Trigrams Orbs",halberd:"Sky Piercer Halberd",cavalry:"Xiliang Cavalry",caltrop:"Iron Caltrops",poison:"Venom Spring",twinring:"Twin Rings",zhanma:"Horse-Cleaver Sword",bamen:"Eight Gates Formation",chibi:"Red Cliff Inferno",tianfa:"Heaven’s Judgment Bolt",yuanrong:"Grand Repeater"},passive:{horseshoe:"Red Hare Horseshoe",armor:"Dark Iron Armor",warbook:"Art of War",wine:"White Wine",seal:"Imperial Seal",censer:"Incense Censer",talismanho:"Protective Talisman",vermilion:"Vermilion Banner"},upgrade:{attack:"Martial Training",health:"Iron Reinforcement",speed:"Steed Training",pickup:"Soul-Gathering Sachet",cooldown:"Tactical Mastery",startLevel:"Veteran Deployment",revive:"Rise from Death"}},ka={spear:"Piercing forward thrust",guandao:"Forward fan-shaped slash",zhangba:"Front & rear thrust + knockback",baiyu:"Homing talisman projectiles",crossbow:"Auto rapid-fire at nearest foe",fire:"Flame field underfoot",thunder:"Lightning strikes overhead",orbit:"Orbiting Taiji orbs",halberd:"360° sweeping spin",cavalry:"Summoned cavalry charge",zhanma:"Launches spinning slash waves",bamen:"Piercing talisman storm",chibi:"Advancing wall of flame",tianfa:"Chain lightning between foes",yuanrong:"Omnidirectional volley"},Kr={first_win:{name:"Lord of the Realm",desc:"First victory (survive 10:00)"},slay_lvbu:{name:"Slayer of the Flying General",desc:"Defeat the final boss Lü Bu"},thousand_cut:{name:"Thousand-Slayer",desc:"Slay 1,000 in a single run"},five_hundred_cut:{name:"Five-Hundred-Slayer",desc:"Slay 500 in a single run"},invincible:{name:"Adamantine Body",desc:"Take no hit for 3 minutes"},master_smith:{name:"Legendary Smith",desc:"3+ evolved weapons in one run"},combo_master:{name:"Avatar of the Combo",desc:"Exceed a 500 max combo"},veteran:{name:"Grizzled Veteran",desc:"10,000 cumulative kills"},all_bosses:{name:"Ender of the Warlords",desc:"Slay all three bosses in one run"},high_level:{name:"Master of War",desc:"Reach level 40"},endless_walker:{name:"Nameless Reaper",desc:"Survive 15 min in endless mode"},survivor:{name:"Battle-Tested Hero",desc:"Survive 5+ minutes"}},c1={zhaoyun:"Move speed +10%",guanyu:"Attack +15%",zhangfei:"Max HP +25%",zhugeliang:"Cooldown -10%",huangzhong:"Range & projectile speed +20%",sunshangxiang:"Range & projectile speed +15%, move speed +10%",lvbu:"Attack +25%, damage taken +25%"},d1={zhaoyun:"Musou · Spear Charge — 8-way invincible dash",guanyu:"Musou · Azure Dragon Whirl — giant spinning slash",zhangfei:"Musou · Roar of Changban — full-screen stun",zhugeliang:"Musou · Heavenly Thunder — lightning storm",huangzhong:"Musou · Hundred-Pace Volley — omnidirectional arrows",sunshangxiang:"Musou · Crimson Lotus Dance — storm of red arrows",lvbu:"Musou · Red Hare Rampage — steerable invincible dash"},Gf=[{id:"horseshoe",name:"적토마 편자",hanja:"赤兔蹄鐵",maxLevel:5,desc:a=>we()==="en"?`Move speed +${a*8}%`:`이동속도 +${a*8}%`,apply:(a,e)=>{a.speedMul*=1+.08*e}},{id:"armor",name:"현철갑주",hanja:"玄鐵甲冑",maxLevel:5,desc:a=>we()==="en"?`Damage taken -${a*8}%`:`받는 피해 -${a*8}%`,apply:(a,e)=>{a.dmgReduction=Math.min(.8,a.dmgReduction+.08*e)}},{id:"warbook",name:"병법서",hanja:"兵法書",maxLevel:5,desc:a=>we()==="en"?`XP +${a*8}%`:`경험치 +${a*8}%`,apply:(a,e)=>{a.xpMul*=1+.08*e}},{id:"wine",name:"백주",hanja:"白酒",maxLevel:5,desc:a=>we()==="en"?`Max HP +${a*10}%, regen ${(a*.8).toFixed(1)}/s`:`최대체력 +${a*10}%, 재생 ${(a*.8).toFixed(1)}/s`,apply:(a,e)=>{a.maxHpMul*=1+.1*e,a.hpRegen+=.8*e}},{id:"seal",name:"전국옥새",hanja:"傳國玉璽",maxLevel:5,desc:a=>we()==="en"?`Gold gain +${a*10}%`:`골드 획득 +${a*10}%`,apply:(a,e)=>{a.goldMul*=1+.1*e}},{id:"censer",name:"향로",hanja:"香爐",maxLevel:5,desc:a=>we()==="en"?`Pickup radius +${a*15}%`:`픽업 반경 +${a*15}%`,apply:(a,e)=>{a.pickupMul*=1+.15*e}},{id:"talismanho",name:"호부",hanja:"護符",maxLevel:5,desc:a=>we()==="en"?`Cooldown -${(100*(1-Math.pow(.95,a))).toFixed(0)}%`:`쿨다운 -${(100*(1-Math.pow(.95,a))).toFixed(0)}%`,apply:(a,e)=>{a.cooldownMul*=Math.pow(.95,e)}},{id:"vermilion",name:"주작깃발",hanja:"朱雀旗",maxLevel:3,rare:!0,desc:a=>we()==="en"?`Projectiles +${a}`:`투사체 +${a}`,apply:(a,e)=>{a.projectileBonus+=e}}],Oi={};for(const a of Gf)Oi[a.id]=a;const Vf=[{id:"seven_star",name:"칠성검",nameEn:"Seven Stars Sword",hanja:"七星劍",desc:"공격력 +40%, 최대 체력 -30%",descEn:"Attack +40%, Max HP -30%",apply:a=>{a.damageMul*=1.4,a.maxHpMul*=.7}},{id:"bronze_decree",name:"동작대 금령",nameEn:"Bronze Sparrow Decree",hanja:"銅雀臺金令",desc:"골드 획득 +100%, 이동속도 -15%",descEn:"Gold gain +100%, Move speed -15%",apply:a=>{a.goldMul*=2,a.speedMul*=.85}},{id:"ox_fan",name:"우선",nameEn:"Ox Fan",hanja:"牛扇",desc:"쿨다운 -25%, 픽업 반경 -50%",descEn:"Cooldown -25%, Pickup radius -50%",apply:a=>{a.cooldownMul*=.75,a.pickupMul*=.5}},{id:"poison_pill",name:"오석산",nameEn:"Five-Mineral Powder",hanja:"五石散",desc:"공격력 +30%, 받는 피해 +25%",descEn:"Attack +30%, Damage taken +25%",apply:a=>{a.damageMul*=1.3,a.dmgTakenMul*=1.25}},{id:"blood_banner",name:"피의 군기",nameEn:"Blood War-Banner",hanja:"血軍旗",desc:"투사체 +2, 체력 재생 정지, 최대 체력 -15%",descEn:"Projectiles +2, HP regen off, Max HP -15%",apply:a=>{a.projectileBonus+=2,a.hpRegen=0,a.maxHpMul*=.85}},{id:"greedy_seal",name:"탐랑의 인",nameEn:"Seal of Greed",hanja:"貪狼印",desc:"경험치 +50%, 광역 -25%",descEn:"XP +50%, Area -25%",apply:a=>{a.xpMul*=1.5,a.areaMul*=.75}}],mc={};for(const a of Vf)mc[a.id]=a;function u1(a){return we()==="en"?a.nameEn:a.name}function f1(a){return we()==="en"?a.descEn:a.desc}function p1(a,e){const t=Vf.filter(i=>!e.includes(i.id));return t.length===0?null:t[Math.floor(a()*t.length)]}const za=[{id:"zhangba_mao",name:"장팔사모",nameEn:"Serpent Spear",hanja:"丈八蛇矛",desc:"공격력 +20%, 광역 +15%",descEn:"Attack +20%, Area +15%",lore:"한 길 여덟 자, 뱀처럼 굽이친 긴 모. 길이가 곧 거리이고 무게가 곧 기세라, 닿을 자리를 먼저 정하는 쪽은 늘 이 모를 쥔 손이다.",loreEn:"A serpentine spear a fathom and eight feet long. Reach is distance and weight is momentum — the hand that holds it always decides where the blow lands first.",apply:a=>{a.damageMul*=1.2,a.areaMul*=1.15}},{id:"qinggang_jian",name:"청홍검",nameEn:"Qinggang Blade",hanja:"靑釭劍",desc:"공격력 +18%, 사거리·투사체 속도 +15%",descEn:"Attack +18%, Range & projectile speed +15%",lore:"칼등이 푸르게 식어 빛나는 양날 보검. 쇠를 진흙처럼 갈라, 벤 줄도 모른 채 늦게야 피가 흐른다.",loreEn:"A double-edged sword glowing blue-cold along its spine. It parts iron like clay — the cut is felt only when the blood comes late.",apply:a=>{a.damageMul*=1.18,a.rangeMul*=1.15}},{id:"wanshi_gong",name:"만석궁",nameEn:"Myriad-Stone Bow",hanja:"萬石弓",desc:"사거리·투사체 속도 +30%",descEn:"Range & projectile speed +30%",lore:"만 석을 당긴다는 초강궁. 살이 닿은 갑주와 방패는 종이처럼 뚫려 살촉 자국만 남는다.",loreEn:"A superbow said to draw ten thousand stones. Armor and shields it strikes tear like paper, leaving only the arrowhead’s mark.",apply:a=>{a.rangeMul*=1.3}},{id:"bao_dao",name:"보도",nameEn:"Treasured Saber",hanja:"寶刀",desc:"공격력 +28%",descEn:"Attack +28%",lore:"외날을 곧게 세운 환수도 계열의 명품. 잘 벼린 칼이라 손에 익을수록 난전에서 빠르고 매섭게 빛난다.",loreEn:"A masterwork ring-pommel saber with a true single edge. The better it fits the hand, the faster and fiercer it shines in the melee.",apply:a=>{a.damageMul*=1.28}},{id:"tietai_gong",name:"철태궁",nameEn:"Iron-Core Bow",hanja:"鐵胎弓",desc:"투사체 +1, 공격력 +10%",descEn:"Projectiles +1, Attack +10%",lore:"활채 안쪽에 쇠심을 먹인 강궁. 시위를 끝까지 메길 줄 아는 자만이 그 굳은 채를 살린다.",loreEn:"A bow with an iron core in its limbs. Only one who can draw the string to its limit brings the stiff stave to life.",apply:a=>{a.projectileBonus+=1,a.damageMul*=1.1}},{id:"shuangtie_ji",name:"쌍철극",nameEn:"Twin Iron Halberds",hanja:"雙鐵戟",desc:"투사체 +1, 광역 +12%",descEn:"Projectiles +1, Area +12%",lore:"철로 무겁게 벼린 쌍극. 두 날이 서로 다른 높이에서 파고들어, 막는 자는 어느 쪽을 버릴지 늦게야 깨닫는다.",loreEn:"A pair of heavy iron halberds. The two blades bite in at different heights — the defender learns too late which one to abandon.",apply:a=>{a.projectileBonus+=1,a.areaMul*=1.12}},{id:"lian_nu",name:"연노",nameEn:"Repeating Crossbow",hanja:"連弩",desc:"쿨다운 -20%",descEn:"Cooldown -20%",lore:"짧은 살을 잇달아 먹이는 연발 쇠뇌. 한 발의 깊이는 덜해도 쉼 없이 쏟아져 적이 고개를 들지 못하게 한다.",loreEn:"A repeating crossbow that feeds short bolts in sequence. Each bites less deep, but the endless volley keeps the enemy’s head down.",apply:a=>{a.cooldownMul*=.8}},{id:"mingguang_kai",name:"명광개",nameEn:"Radiant Cuirass",hanja:"明光鎧",desc:"받는 피해 -22%",descEn:"Damage taken -22%",lore:"가슴의 둥근 호심경이 빛을 되쏘는 중갑. 창끝이 미끄러질 만큼 단단해, 무겁되 그 무게가 곧 살길이다.",loreEn:"Heavy armor whose round breast-mirror throws light back. Hard enough to turn a spear-point — its weight is the very road to survival.",apply:a=>{a.dmgTakenMul*=.78}},{id:"sunzi_bingfa",name:"손자병법",nameEn:"The Art of War",hanja:"孫子兵法",desc:"쿨다운 -15%, 광역 +10%",descEn:"Cooldown -15%, Area +10%",lore:"허와 실, 속임과 형세를 가른 십삼 편. 끝까지 익힌 자는 싸우기 전에 이미 셈을 마치고 적의 빈 곳을 짚어 낸다.",loreEn:"Thirteen chapters dividing the empty and the solid, deception and form. One who masters it finishes the reckoning before the battle and finds the enemy’s gaps.",apply:a=>{a.cooldownMul*=.85,a.areaMul*=1.1}},{id:"taigong_bingfa",name:"태공병법",nameEn:"Taigong’s Art",hanja:"太公兵法",desc:"경험치 +35%",descEn:"XP +35%",lore:"강태공의 이름을 빌린 오래된 비전. 천하를 한 판으로 보는 큰 계책이라, 익힌 자의 셈은 형세 전부에 가닿는다.",loreEn:"An ancient secret text under Jiang Taigong’s name. Its grand design reads all-under-heaven as one board — its reckoning reaches the whole field.",apply:a=>{a.xpMul*=1.35}},{id:"heshi_bi",name:"화씨벽",nameEn:"He’s Jade Disc",hanja:"和氏璧",desc:"골드 +60%, 픽업 반경 +20%",descEn:"Gold +60%, Pickup radius +20%",lore:"천하에 둘 없다는 보옥. 진시황이 깎아 옥새로 삼았다는 그 돌이라, 지닌 자를 두고 격이 아니라 천명을 가늠한다.",loreEn:"A jade beyond compare. The very stone Qin Shi Huang cut into an imperial seal — men measure its bearer not by rank but by the mandate of heaven.",apply:a=>{a.goldMul*=1.6,a.pickupMul*=1.2}},{id:"yu_jue",name:"옥결",nameEn:"Jade Jue",hanja:"玉玦",desc:"체력 재생 +1.5/s, 최대 체력 +12%",descEn:"HP regen +1.5/s, Max HP +12%",lore:"한쪽이 트인 고리 옥. 그 트임은 결단의 표식이라, 지닌 것만으로 망설이지 않는 사람으로 읽힌다.",loreEn:"A ring of jade broken on one side. That gap is the mark of resolve — to wear it is to be read as one who does not hesitate.",apply:a=>{a.hpRegen+=1.5,a.maxHpMul*=1.12}},{id:"shuo",name:"삭",nameEn:"Cavalry Lance",hanja:"矟",desc:"공격력 +15%, 이동속도 +10%",descEn:"Attack +15%, Move speed +10%",lore:"한 길이 넘는 기병의 긴 모. 자루가 굵고 무거워 손목이 아니라 말의 기세로 휘두르니, 내리꽂으면 방패째 꿰뚫려 좀체 빠지지 않는다.",loreEn:"A cavalryman’s lance longer than a fathom. Too thick and heavy for the wrist, it is swung by the horse’s momentum — driven down, it pierces shield and all and will not easily pull free.",apply:a=>{a.damageMul*=1.15,a.speedMul*=1.1}},{id:"huanshou_dao",name:"환수도",nameEn:"Ring-Pommel Saber",hanja:"環首刀",desc:"쿨다운 -10%, 공격력 +10%",descEn:"Cooldown -10%, Attack +10%",lore:"자루 끝에 둥근 고리를 단 외날 곧은 칼. 화려할 것 없이 곧게 베고 곧게 찌르는 칼이라, 다룰 줄 아는 손에 쥐여 주면 군말 없이 제 몫을 한다.",loreEn:"A straight single-edged saber with a ring at the pommel. Nothing ornate — it cuts straight and thrusts straight, and in a capable hand it does its share without a word.",apply:a=>{a.cooldownMul*=.9,a.damageMul*=1.1}},{id:"jiao_gong",name:"각궁",nameEn:"Horn Composite Bow",hanja:"角弓",desc:"사거리·투사체 속도 +20%, 쿨다운 -8%",descEn:"Range & projectile speed +20%, Cooldown -8%",lore:"물소뿔과 나무, 힘줄을 부레풀로 겹쳐 붙인 복합궁. 작은 몸피로도 세게 멀리 쏘아, 활을 다스릴 줄 아는 자의 사거리를 말없이 넓혀 준다.",loreEn:"A composite bow of horn, wood, and sinew laminated with fish glue. Small in the hand yet it shoots hard and far, quietly widening the reach of one who can master a bow.",apply:a=>{a.rangeMul*=1.2,a.cooldownMul*=.92}},{id:"liangdang_kai",name:"양당개",nameEn:"Two-Panel Cuirass",hanja:"裲襠鎧",desc:"받는 피해 -10%, 이동속도 +8%",descEn:"Damage taken -10%, Move speed +8%",lore:"가슴과 등을 앞뒤 두 판으로 덮고 어깨끈으로 멘 갑. 옆구리가 가벼워 오래 걸어도 숨이 덜 차고, 빗겨 든 판이 화살을 곧잘 튕겨 흘려보낸다.",loreEn:"Armor of two plates over chest and back, slung from the shoulders. Light at the sides so the breath holds through a long march, its slanted plates readily glance arrows aside.",apply:a=>{a.dmgReduction=Math.min(.8,a.dmgReduction+.1),a.speedMul*=1.08}},{id:"zha_jia",name:"찰갑",nameEn:"Lamellar Armor",hanja:"札甲",desc:"받는 피해 -12%, 최대 체력 +8%",descEn:"Damage taken -12%, Max HP +8%",lore:"작은 미늘판 수천 장을 끈과 가죽으로 촘촘히 엮은 몸통 갑. 미늘이 서로 미끄러져 몸을 따라 움직이니, 잘 짜인 한 벌은 창끝을 틈으로 흘려보내 입은 자를 오래 살린다.",loreEn:"A cuirass of thousands of small scales laced tight with cord and leather. The scales slide over one another to follow the body — a well-made suit slips a spear-point through the gaps and keeps its wearer alive.",apply:a=>{a.dmgReduction=Math.min(.8,a.dmgReduction+.12),a.maxHpMul*=1.08}},{id:"zishou_jinyin",name:"자수금인",nameEn:"Purple-Cord Gold Seal",hanja:"紫綬金印",desc:"골드 +35%, 경험치 +15%",descEn:"Gold +35%, XP +15%",lore:"금 인장에 자줏빛 인끈을 꿰었다. 조정 상층의 격을 말없이 증언하는 물건으로, 끈의 빛깔 하나가 곧 명령이 되어 사람을 부린다.",loreEn:"A gold seal strung with a purple cord. It testifies in silence to the highest rank at court — the color of the cord alone becomes a command that moves men.",apply:a=>{a.goldMul*=1.35,a.xpMul*=1.15}},{id:"yin_yin",name:"은인",nameEn:"Silver Seal",hanja:"銀印",desc:"골드 +25%, 최대 체력 +8%",descEn:"Gold +25%, Max HP +8%",lore:"희게 닦인 은 인장에 푸른 인끈이 드리웠다. 군현을 다스리는 자의 표식이라, 이를 허리에 찬 자 앞에서는 아랫것의 말이 절로 낮아진다.",loreEn:"A polished silver seal hung with a blue cord. It is the token of one who governs a commandery — before its bearer, lesser tongues lower of their own accord.",apply:a=>{a.goldMul*=1.25,a.maxHpMul*=1.08}},{id:"jiuzhang_suanshu",name:"구장산술",nameEn:"Nine Chapters",hanja:"九章算術",desc:"픽업 반경 +30%, 경험치 +15%",descEn:"Pickup radius +30%, XP +15%",lore:"토지 측량과 곡물 환산, 세역과 운송의 셈법을 아홉 장에 묶은 산학의 경전. 펼쳐 읽은 자에게는 시세와 됫박의 속임수가 어디서 새는지 환히 드러난다.",loreEn:"The mathematical classic binding land survey, grain conversion, tax and transport into nine chapters. To one who has read it, wherever a false price or short measure leaks is laid bare.",apply:a=>{a.pickupMul*=1.3,a.xpMul*=1.15}},{id:"sima_fa",name:"사마법",nameEn:"Methods of the Sima",hanja:"司馬法",desc:"광역 +12%, 최대 체력 +10%",descEn:"Area +12%, Max HP +10%",lore:"군법과 진형을 다룬 옛 병서로, 글이 메말라 명령처럼 짧다. 읽으면 군을 부리는 법도가 차곡차곡 쟁여져, 어지러운 판에서도 무엇을 먼저 끊을지 셈하게 된다.",loreEn:"An old treatise on military law and formation, its prose dry and terse as an order. Read it, and the discipline of commanding troops stacks up within — even in chaos one reckons what to cut down first.",apply:a=>{a.areaMul*=1.12,a.maxHpMul*=1.1}},{id:"bingfa_chaolu",name:"병법 초록",nameEn:"Tactics Miscellany",hanja:"兵法抄錄",desc:"경험치 +20%, 광역 +10%",descEn:"XP +20%, Area +10%",lore:"여러 손에서 베껴 모은 잡록이라 글씨체가 장마다 다르다. 그래도 행간을 더듬다 보면 남의 패전이 제 머릿속에서 한 수의 분별로 굳는다.",loreEn:"A miscellany copied by many hands, its script changing page to page. Yet feel along between the lines, and another’s defeat hardens in your mind into a single stroke of discernment.",apply:a=>{a.xpMul*=1.2,a.areaMul*=1.1}},{id:"baiyu_pei",name:"백옥패",nameEn:"White Jade Pendant",hanja:"白玉佩",desc:"체력 재생 +1/s, 이동속도 +8%",descEn:"HP regen +1/s, Move speed +8%",lore:"서리빛 도는 흰 옥편을 끈으로 꿰어 허리 양옆에 드리운 묶음. 걸을 때마다 맑게 부딪쳐 그 소리가 사람보다 먼저 당도하니, 차림이 거칠어도 발걸음이 격을 발설한다.",loreEn:"Frost-pale jade tablets strung and hung at either side of the waist. They chime clear with each step so the sound arrives before the man — coarse dress and all, the gait betrays his rank.",apply:a=>{a.hpRegen+=1,a.speedMul*=1.08}},{id:"shuanghuan_pei",name:"쌍환패",nameEn:"Twin-Ring Pendant",hanja:"雙環佩",desc:"쿨다운 -12%, 사거리·투사체 속도 +10%",descEn:"Cooldown -12%, Range & projectile speed +10%",lore:"두 고리를 위아래로 이어 늘어뜨린 옥. 한 고리가 울면 다른 고리가 받아 부딪는 소리가 겹으로 길게 끌리니, 마주한 자가 함부로 값을 깎지 못한다.",loreEn:"A jade of two rings hung one below the other. When one rings the other answers, the chime doubling and drawing long — so none who faces it dares haggle down its worth.",apply:a=>{a.cooldownMul*=.88,a.rangeMul*=1.1}}],lo={};for(const a of za)lo[a.id]=a;function Wf(a){return we()==="en"?a.nameEn:a.name}function Xf(a){return we()==="en"?a.descEn:a.desc}function m1(a){return we()==="en"?a.loreEn:a.lore}function g1(a){return za.filter(e=>a.masterworks.includes(e.id))}function v1(a,e){return e.masterworks.includes(a)}function du(a,e,t){const i=za.filter(n=>!e.includes(n.id));for(let n=i.length-1;n>0;n--){const s=Math.floor(a()*(n+1)),r=i[n];i[n]=i[s],i[s]=r}return i.slice(0,Math.max(0,t))}const x1=8,b1=.5,y1=6,_1=.5,w1=.16,M1=.8,S1=3.8,A1=.24,T1=.26,uu={KeyW:{x:0,z:-1},ArrowUp:{x:0,z:-1},KeyS:{x:0,z:1},ArrowDown:{x:0,z:1},KeyA:{x:-1,z:0},ArrowLeft:{x:-1,z:0},KeyD:{x:1,z:0},ArrowRight:{x:1,z:0}},E1=["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowLeft","ArrowDown","ArrowRight"];class C1{x=0;z=0;hp;maxHp;stats;hero;meta=null;relicIds=[];masterworkIds=[];curPassives={};buffAttackT=0;buffSpeedT=0;buffMusouT=0;faceX=0;faceZ=1;invuln=0;musouInvuln=!1;flash=0;hurtT=0;hurtFlash(){this.hurtT=.32}dir=0;frame=0;animTime=0;moving=!1;vx=0;vz=0;dashT=0;dashCd=0;ddx=0;ddz=1;time=0;lastTapCode="";lastTapAt=-1;sqSX=1;sqSY=1;justDashed=!1;dashDirX=0;dashDirZ=1;knbX=0;knbZ=0;driftCharge=0;driftSteerX=0;driftSteerZ=1;boostT=0;boostMul=1;boostDirX=0;boostDirZ=1;boostTier=0;justSkid=!1;justBoost=!1;nudge(e,t,i){this.knbX+=e*i,this.knbZ+=t*i}get dashing(){return this.dashT>0}get boosting(){return this.boostT>0}get velX(){return this.vx}get velZ(){return this.vz}get speedFrac(){return Math.hypot(this.vx,this.vz)/Math.max(.01,this.baseSpeed*this.stats.speedMul)}baseSpeed;baseHp;blockPx;quad;atlas;uv={u:0,v:0};constructor(e,t,i){this.atlas=e,this.hero=t,this.quad=new zf(e.sgrade,i),this.quad.setPlayer(!0),this.quad.setFootDepth(!0),this.baseSpeed=t.baseSpeed,this.baseHp=t.baseHp,this.stats={damageMul:1,cooldownMul:1,speedMul:1,maxHpMul:1,pickupMul:1,xpMul:1,dmgReduction:0,goldMul:1,hpRegen:0,projectileBonus:0,rangeMul:1,areaMul:1,dmgTakenMul:1},this.blockPx=t.charIndex*4*Dn,this.resetStats({}),this.maxHp=this.baseHp*this.stats.maxHpMul,this.hp=this.maxHp}get mesh(){return this.quad.mesh}get radius(){return _1}setRimScale(e){this.quad.setRimScale(e)}setHero(e){this.hero=e,this.baseSpeed=e.baseSpeed,this.baseHp=e.baseHp,this.blockPx=e.charIndex*4*Dn}setMeta(e){this.meta=e}resetStats(e){this.curPassives=e;const t=this.stats,i=this.hero;t.damageMul=i.damageMul,t.cooldownMul=i.cooldownMul,t.speedMul=i.speedMul,t.maxHpMul=i.maxHpMul,t.pickupMul=1,t.xpMul=1,t.dmgReduction=0,t.goldMul=1,t.hpRegen=0,t.projectileBonus=0,t.rangeMul=i.rangeMul,t.areaMul=1,t.dmgTakenMul=i.dmgTakenMul;for(const n in e){const s=Oi[n];s&&s.apply(t,e[n])}this.meta&&(t.damageMul*=this.meta.damageMul,t.maxHpMul*=this.meta.maxHpMul,t.speedMul*=this.meta.speedMul,t.pickupMul*=this.meta.pickupMul,t.cooldownMul*=this.meta.cooldownMul);for(const n of this.relicIds){const s=mc[n];s&&s.apply(t)}for(const n of this.masterworkIds){const s=lo[n];s&&s.apply(t)}this.buffAttackT>0&&(t.damageMul*=1.3),this.buffSpeedT>0&&(t.speedMul*=1.25)}addRelic(e){this.relicIds.includes(e)||(this.relicIds.push(e),this.recomputeStats(this.curPassives))}get relicCount(){return this.relicIds.length}addMasterwork(e){this.masterworkIds.includes(e)||(this.masterworkIds.push(e),this.recomputeStats(this.curPassives))}applyBuff(e,t){e==="attack"?this.buffAttackT=Math.max(this.buffAttackT,t):e==="speed"?this.buffSpeedT=Math.max(this.buffSpeedT,t):this.buffMusouT=Math.max(this.buffMusouT,t),this.recomputeStats(this.curPassives)}get musouBuffed(){return this.buffMusouT>0}get shrineBuffActive(){return this.buffAttackT>0||this.buffSpeedT>0||this.buffMusouT>0}get frameUv(){return this.uv}recomputeStats(e){const t=this.maxHp>0?this.hp/this.maxHp:1;this.resetStats(e),this.maxHp=this.baseHp*this.stats.maxHpMul,this.hp=this.maxHp*t}reset(e){this.x=0,this.z=0,this.relicIds=[],this.masterworkIds=[],this.buffAttackT=0,this.buffSpeedT=0,this.buffMusouT=0,this.resetStats(e),this.maxHp=this.baseHp*this.stats.maxHpMul,this.hp=this.maxHp,this.invuln=0,this.musouInvuln=!1,this.flash=0,this.faceX=0,this.faceZ=1,this.vx=0,this.vz=0,this.dashT=0,this.dashCd=0,this.driftCharge=0,this.boostT=0,this.boostTier=0,this.justSkid=!1,this.justBoost=!1,this.sqSX=1,this.sqSY=1,this.justDashed=!1}update(e,t){this.time+=e;const i=t.move.x,n=t.move.z,s=Math.hypot(i,n),r=s>0,o=r?i/s:0,l=r?n/s:0;let h=!1,c=r?o:this.faceX,d=r?l:this.faceZ;(t.consumePressed("ShiftLeft")||t.consumePressed("ShiftRight"))&&(h=!0);for(const A of E1)t.consumePressed(A)&&(this.lastTapCode===A&&this.time-this.lastTapAt<T1&&(h=!0,c=uu[A].x,d=uu[A].z),this.lastTapCode=A,this.lastTapAt=this.time);if(this.dashCd>0&&(this.dashCd-=e),h&&this.dashCd<=0&&this.dashT<=0){const A=Math.hypot(c,d)||1;this.ddx=c/A,this.ddz=d/A,this.dashT=w1,this.dashCd=M1,this.invuln=Math.max(this.invuln,A1),this.faceX=this.ddx,this.faceZ=this.ddz,this.dashDirX=this.ddx,this.dashDirZ=this.ddz,this.justDashed=!0}const u=this.baseSpeed*this.stats.speedMul;if(this.dashT>0){r&&o*this.ddx+l*this.ddz<.766&&(this.driftCharge+=e,this.driftSteerX=o,this.driftSteerZ=l,this.justSkid=!0),this.dashT-=e;const A=u*S1;if(this.vx=this.ddx*A,this.vz=this.ddz*A,this.dashT<=0&&this.driftCharge>=.07){const _=this.driftCharge>=.12;this.boostT=_?.6:.4,this.boostMul=_?1.4:1.3,this.boostDirX=this.driftSteerX,this.boostDirZ=this.driftSteerZ,this.boostTier=_?2:1,this.justBoost=!0}this.dashT<=0&&(this.driftCharge=0)}else if(this.boostT>0){this.boostT-=e;const A=u*this.boostMul;this.vx=this.boostDirX*A,this.vz=this.boostDirZ*A,this.faceX=this.boostDirX,this.faceZ=this.boostDirZ}else if(r){this.faceX=o,this.faceZ=l;const A=1-Math.exp(-20*e);this.vx+=(o*u-this.vx)*A,this.vz+=(l*u-this.vz)*A}else{const A=Math.exp(-13*e);this.vx*=A,this.vz*=A,Math.abs(this.vx)<.02&&(this.vx=0),Math.abs(this.vz)<.02&&(this.vz=0)}this.x+=this.vx*e,this.z+=this.vz*e,this.x+=this.knbX*e,this.z+=this.knbZ*e;const f=Math.exp(-8*e);this.knbX*=f,this.knbZ*=f;const m=Math.hypot(this.vx,this.vz);this.moving=m>.05,this.moving?(this.dir=Ws(this.vx,this.vz,this.dir),this.animTime+=e,this.frame=(this.animTime*x1|0)%4):(this.dir=Ws(this.faceX,this.faceZ,this.dir),this.frame=0),this.invuln>0&&(this.invuln-=e),this.flash>0&&(this.flash-=e*y1,this.flash<0&&(this.flash=0)),this.hurtT>0&&(this.hurtT-=e);let v=1,g=1,p=1;if(this.hurtT>0){const A=this.hurtT/.32;g=1-.62*A,p=1-.62*A}if(this.invuln>0){const A=.6+.4*(Math.sin(this.time*34)>0?1:0);v*=A,g*=A,p*=A}if(this.quad.setTint(v,g,p),this.buffAttackT>0||this.buffSpeedT>0||this.buffMusouT>0){const A=this.buffAttackT>0,_=this.buffSpeedT>0;this.buffAttackT>0&&(this.buffAttackT-=e),this.buffSpeedT>0&&(this.buffSpeedT-=e),this.buffMusouT>0&&(this.buffMusouT-=e),(A&&this.buffAttackT<=0||_&&this.buffSpeedT<=0)&&this.recomputeStats(this.curPassives)}this.stats.hpRegen>0&&this.hp<this.maxHp&&(this.hp=Math.min(this.maxHp,this.hp+this.stats.hpRegen*e));let M=1;this.dashT>0?M=1.28:m>u*.55&&(M=1.07);const T=1/Math.sqrt(M),w=Math.min(1,e*16);this.sqSX+=(T-this.sqSX)*w,this.sqSY+=(M-this.sqSY)*w,this.quad.setSquash(this.sqSX,this.sqSY),dc(this.atlas.sgrade,this.blockPx,0,this.dir,this.frame,this.uv),this.quad.setUv(this.uv.u,this.uv.v),this.quad.setFlash(this.flash),this.quad.setPosition(this.x,0,this.z)}setPosition(e,t){this.x=e,this.z=t,this.quad.setPosition(e,0,t)}takeDamage(e){if(this.musouInvuln||this.invuln>0)return!1;const t=e*this.stats.dmgTakenMul*(1-this.stats.dmgReduction);return this.hp-=t,this.hp<0&&(this.hp=0),this.invuln=b1,this.flash=1,!0}heal(e){this.hp=Math.min(this.maxHp,this.hp+e)}revive(e,t){this.hp=this.maxHp*e,this.invuln=t,this.flash=1}get dead(){return this.hp<=0}}class Pi{mesh;matrices;fade;fadeAttr;material;cursor=0;constructor(e,t,i,n=5,s=1,r=!1){const o=new Ba().load(`/threesur/assets/projectiles/${t}.png`);o.colorSpace=Mt,o.magFilter=ot,o.minFilter=ot,o.generateMipmaps=!1;const l=new tt(1,1,r?12:1,1);l.rotateX(-Math.PI/2),this.fade=new Float32Array(i),this.fadeAttr=new qe(this.fade,1),this.fadeAttr.setUsage(Pe),l.setAttribute("aFade",this.fadeAttr),this.material=new Be({uniforms:{uMap:{value:o},uTime:{value:0},uIntensity:{value:s}},vertexShader:`
        attribute float aFade;
        uniform float uTime;
        varying vec2 vUv;
        varying float vFade;
        void main() {
          vUv = uv;
          vFade = aFade;
          vec3 pos = position;
          ${r?"pos.y += sin(pos.x * 7.0 + uTime * 13.0) * 0.13 + sin(pos.z * 5.0 - uTime * 9.0) * 0.05;":""}
          gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(pos, 1.0);
        }
      `,fragmentShader:`
        uniform sampler2D uMap;
        uniform float uTime;
        uniform float uIntensity;
        varying vec2 vUv;
        varying float vFade;
        void main() {
          vec4 texel = texture2D(uMap, vUv);
          if (texel.a < 0.04) discard;
          float inkPulse = 0.97 + 0.03 * sin(uTime * 5.0 + vUv.x * 5.0);
          // EffectComposer의 OutputPass가 최종 변환하므로 원화 sRGB를 먼저 선형화한다.
          vec3 col = pow(texel.rgb, vec3(2.2)) * inkPulse * uIntensity;
          gl_FragColor = vec4(col, texel.a * vFade);
        }
      `,transparent:!0,blending:en,depthWrite:!1,depthTest:!0}),this.mesh=new At(l,this.material,i),this.mesh.instanceMatrix.setUsage(Pe),this.mesh.frustumCulled=!1,this.mesh.count=0,this.mesh.renderOrder=n,this.matrices=this.mesh.instanceMatrix.array,e.add(this.mesh)}begin(e){this.cursor=0,this.material.uniforms.uTime.value=e}push(e,t,i,n,s,r,o){const l=this.cursor++,h=l*16,c=Math.cos(n),d=Math.sin(n);this.matrices[h]=c*s,this.matrices[h+1]=0,this.matrices[h+2]=-d*s,this.matrices[h+3]=0,this.matrices[h+4]=0,this.matrices[h+5]=1,this.matrices[h+6]=0,this.matrices[h+7]=0,this.matrices[h+8]=d*r,this.matrices[h+9]=0,this.matrices[h+10]=c*r,this.matrices[h+11]=0,this.matrices[h+12]=e,this.matrices[h+13]=t,this.matrices[h+14]=i,this.matrices[h+15]=1,this.fade[l]=o}end(){this.mesh.count=this.cursor,this.mesh.instanceMatrix.needsUpdate=!0,this.fadeAttr.needsUpdate=!0}}const $e=256,Ni=0,gc=1,ho=2,vc=3,Xs=4,pn=5,R1=6;class Ra{x=new Float32Array($e);z=new Float32Array($e);vx=new Float32Array($e);vz=new Float32Array($e);life=new Float32Array($e);damage=new Float32Array($e);radius=new Float32Array($e);homing=new Uint8Array($e);turn=new Float32Array($e);kind=new Uint8Array($e);cr=new Float32Array($e);cg=new Float32Array($e);cb=new Float32Array($e);size=new Float32Array($e);trailT=new Float32Array($e);alive=new Uint8Array($e);free=new Int32Array($e);freeTop=0;mesh;matArr;colArr;kindArr;colAttr;kindAttr;spriteBatches;dots;dotArr;static AIM_CAP=8;aimLines;aimMatArr;aimChargeArr;aimChargeAttr;aimN=0;constructor(e){for(let l=0;l<$e;l++)this.free[l]=$e-1-l;this.freeTop=$e;const t=new tt(1,1,1,1);t.rotateX(-Math.PI/2),this.colArr=new Float32Array($e*3),this.kindArr=new Float32Array($e),this.colAttr=new qe(this.colArr,3),this.kindAttr=new qe(this.kindArr,1),this.colAttr.setUsage(Pe),t.setAttribute("aColor",this.colAttr),t.setAttribute("aKind",this.kindAttr);const i=new Be({uniforms:{uTime:{value:0}},vertexShader:`
        attribute vec3 aColor;
        attribute float aKind;
        varying vec2 vUv;
        varying vec3 vColor;
        varying float vKind;
        void main() {
          vUv = uv;
          vColor = aColor;
          vKind = aKind;
          gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform float uTime;
        varying vec2 vUv;
        varying vec3 vColor;
        varying float vKind;
        void main() {
          vec2 p = vUv - 0.5;
          if (vKind < 0.5) {
            // 적 궁수 화살(#18.2): 몸통+머리 + 중심선 마젠타 핫코어. 야간 지면서 1순위로 읽히게 강하게 태움.
            float across = abs(p.y) * 2.0;
            float body = smoothstep(1.0, 0.4, across);
            float head = smoothstep(0.2, 1.0, vUv.x);
            float b = body * (0.4 + head);
            if (b <= 0.01) discard;
            float core = smoothstep(0.45, 0.0, across) * head;
            vec3 col = mix(vColor, vec3(2.7, 1.3, 2.5), core * 0.65);
            gl_FragColor = vec4(col * b * 0.62, b * 0.5);
          } else {
            float r = length(p) * 2.0;
            float pulse = 0.8 + 0.2 * sin(uTime * 12.0);
            float b = smoothstep(1.0, 0.0, r) * pulse;
            if (b <= 0.01) discard;
            gl_FragColor = vec4(vColor * b * 0.42, b * 0.34);
          }
        }
      `,transparent:!0,blending:jt,depthWrite:!1,depthTest:!0});this.mesh=new At(t,i,$e),this.mesh.instanceMatrix.setUsage(Pe),this.mesh.frustumCulled=!1,this.mesh.count=0,this.mesh.renderOrder=4,this.matArr=this.mesh.instanceMatrix.array,e.add(this.mesh);const n=new tt(1,1);n.rotateX(-Math.PI/2);const s=new Be({uniforms:{uTime:{value:0}},vertexShader:`
        varying vec2 vUv;
        void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0); }
      `,fragmentShader:`
        uniform float uTime;
        varying vec2 vUv;
        void main() {
          float r = length(vUv - 0.5) * 2.0;
          if (r > 1.0) discard;
          float ring = smoothstep(1.0, 0.55, r) * smoothstep(0.15, 0.5, r); // 링
          float core = smoothstep(0.4, 0.0, r) * 0.6;
          float pulse = 0.75 + 0.25 * sin(uTime * 9.0);
          float b = (ring + core) * pulse;
          gl_FragColor = vec4(vec3(2.2, 0.15, 0.12) * b, b * 0.7);
        }
      `,transparent:!0,blending:jt,depthWrite:!1,depthTest:!0});this.dots=new At(n,s,$e),this.dots.instanceMatrix.setUsage(Pe),this.dots.frustumCulled=!1,this.dots.count=0,this.dots.renderOrder=1,this.dotArr=this.dots.instanceMatrix.array,e.add(this.dots);const r=new tt(1,1);r.rotateX(-Math.PI/2),this.aimChargeArr=new Float32Array(Ra.AIM_CAP),this.aimChargeAttr=new qe(this.aimChargeArr,1),this.aimChargeAttr.setUsage(Pe),r.setAttribute("aCharge",this.aimChargeAttr);const o=new Be({vertexShader:`
        attribute float aCharge;
        varying vec2 vUv;
        varying float vCharge;
        void main() { vUv = uv; vCharge = aCharge; gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0); }
      `,fragmentShader:`
        varying vec2 vUv;
        varying float vCharge;
        void main() {
          // 가로(vUv.x)=사수→플레이어, 세로(vUv.y)=폭. 중심선 얇게 + 양끝 페이드(플레이어 수렴 블롭 방지).
          float across = abs(vUv.y - 0.5) * 2.0;
          float line = smoothstep(1.0, 0.0, across);
          float ends = smoothstep(0.0, 0.12, vUv.x) * smoothstep(1.0, 0.86, vUv.x);
          float a = line * ends * vCharge * 0.3; // 알파 상한 0.3 (시각 소음 억제)
          if (a <= 0.004) discard;
          gl_FragColor = vec4(vec3(1.9, 0.35, 2.2) * a * 1.3, a); // 마젠타
        }
      `,transparent:!0,blending:jt,depthWrite:!1,depthTest:!0});this.aimLines=new At(r,o,Ra.AIM_CAP),this.aimLines.instanceMatrix.setUsage(Pe),this.aimLines.frustumCulled=!1,this.aimLines.count=0,this.aimLines.renderOrder=2,this.aimMatArr=this.aimLines.instanceMatrix.array,e.add(this.aimLines),this.spriteBatches=[new Pi(e,"enemy-arrow",$e,5,.92),new Pi(e,"enemy-orb",$e,5,.92),new Pi(e,"boss-fireball",$e,5,.92),new Pi(e,"boss-poison-orb",$e,5,.92),new Pi(e,"boss-lightning-spear",$e,5,.92),new Pi(e,"boss-heavy-shot",$e,5,.92)]}get object(){return this.mesh}get activeCount(){return $e-this.freeTop}get kindCounts(){const e=new Array(R1).fill(0);for(let t=0;t<$e;t++)this.alive[t]&&e[this.kind[t]]++;return e}reset(){this.alive.fill(0);for(let e=0;e<$e;e++)this.free[e]=$e-1-e;this.freeTop=$e,this.aimN=0,this.aimLines.count=0}aimLine(e,t,i,n,s){if(this.aimN>=Ra.AIM_CAP)return;const r=i-e,o=n-t,l=Math.hypot(r,o)||.001,h=Math.atan2(-o,r),c=Math.cos(h),d=Math.sin(h),u=.42,f=this.aimN*16;this.aimMatArr[f]=c*l,this.aimMatArr[f+2]=-d*l,this.aimMatArr[f+5]=1,this.aimMatArr[f+8]=d*u,this.aimMatArr[f+10]=c*u,this.aimMatArr[f+12]=(e+i)*.5,this.aimMatArr[f+13]=.06,this.aimMatArr[f+14]=(t+n)*.5,this.aimMatArr[f+15]=1,this.aimChargeArr[this.aimN]=s,this.aimN++}spawn(e,t,i,n,s,r,o,l){if(this.freeTop===0)return;const h=this.free[--this.freeTop];this.x[h]=e,this.z[h]=t,this.vx[h]=i*s,this.vz[h]=n*s;const c=Math.max(Ni,Math.min(pn,l|0));switch(this.life[h]=o?4.5:c===pn?3.8:3,this.damage[h]=r,this.homing[h]=o?1:0,this.kind[h]=c,this.trailT[h]=0,c){case gc:this.cr[h]=1.55,this.cg[h]=.5,this.cb[h]=2.25,this.size[h]=1.26,this.radius[h]=.4,this.turn[h]=3;break;case ho:this.cr[h]=2.5,this.cg[h]=.65,this.cb[h]=.18,this.size[h]=1.35,this.radius[h]=.48,this.turn[h]=0;break;case vc:this.cr[h]=.6,this.cg[h]=2.05,this.cb[h]=1,this.size[h]=1.18,this.radius[h]=.45,this.turn[h]=1.35;break;case Xs:this.cr[h]=1.9,this.cg[h]=.55,this.cb[h]=2.55,this.size[h]=1.5,this.radius[h]=.38,this.turn[h]=0;break;case pn:this.cr[h]=2.65,this.cg[h]=.95,this.cb[h]=.22,this.size[h]=1.7,this.radius[h]=.65,this.turn[h]=0;break;default:this.cr[h]=2.5,this.cg[h]=.4,this.cb[h]=1.7,this.size[h]=1.56,this.radius[h]=.34,this.turn[h]=0;break}this.alive[h]=1}update(e,t,i,n,s,r,o,l=null){const h=n;for(let c=0;c<$e;c++){if(this.alive[c]===0)continue;if(this.homing[c]){const m=t-this.x[c],v=i-this.z[c],g=Math.hypot(m,v)||1,p=Math.hypot(this.vx[c],this.vz[c]),M=Math.min(1,this.turn[c]*e);this.vx[c]+=(m/g*p-this.vx[c])*M,this.vz[c]+=(v/g*p-this.vz[c])*M}if(this.x[c]+=this.vx[c]*e,this.z[c]+=this.vz[c]*e,l&&l(this.x[c],this.z[c],this.radius[c])){r.projectileImpact(this.x[c],this.z[c],this.cr[c],this.cg[c],this.cb[c],this.kind[c]===Ni?0:3),this.alive[c]=0,this.free[this.freeTop++]=c;continue}this.trailT[c]-=e,this.trailT[c]<=0&&(r.projectileTrail(this.x[c],this.z[c],this.vx[c],this.vz[c],this.cr[c],this.cg[c],this.cb[c],this.kind[c]===Ni?0:3),this.trailT[c]=this.kind[c]===Ni?.09:.055);const d=t-this.x[c],u=i-this.z[c],f=this.radius[c]+h;if(d*d+u*u<=f*f){if(r.projectileImpact(this.x[c],this.z[c],this.cr[c],this.cg[c],this.cb[c],this.kind[c]===Ni?0:3),this.kind[c]!==Ni){const v=this.kind[c]===pn?2.1:this.kind[c]===ho?1.65:1.25;o.spawnRing(this.x[c],this.z[c],v,this.cr[c],this.cg[c],this.cb[c],.24)}r.burst(this.x[c],this.z[c],this.cr[c],this.cg[c],this.cb[c],9,5.5);const m=Math.hypot(this.vx[c],this.vz[c])||1;s(this.damage[c],this.vx[c]/m,this.vz[c]/m),this.alive[c]=0,this.free[this.freeTop++]=c;continue}this.life[c]-=e,this.life[c]<=0&&(this.alive[c]=0,this.free[this.freeTop++]=c)}}render(e){this.mesh.material.uniforms.uTime.value=e,this.dots.material.uniforms.uTime.value=e;for(const i of this.spriteBatches)i.begin(e);let t=0;for(let i=0;i<$e;i++){if(this.alive[i]===0)continue;const n=t*16,s=Math.atan2(-this.vz[i],this.vx[i]),r=Math.cos(s),o=Math.sin(s),l=this.kind[i]===Ni||this.kind[i]===Xs||this.kind[i]===pn,h=l?this.size[i]*1.6:this.size[i],c=l?this.size[i]*.5:this.size[i];this.matArr[n]=r*h,this.matArr[n+2]=-o*h,this.matArr[n+5]=1,this.matArr[n+8]=o*c,this.matArr[n+10]=r*c,this.matArr[n+12]=this.x[i],this.matArr[n+13]=1,this.matArr[n+14]=this.z[i],this.matArr[n+15]=1;const d=t*3;this.colArr[d]=this.cr[i],this.colArr[d+1]=this.cg[i],this.colArr[d+2]=this.cb[i],this.kindArr[t]=this.kind[i];let u=this.size[i]*1.4,f=u;this.kind[i]===Ni?(u=this.size[i]*1.8,f=this.size[i]*.58):this.kind[i]===Xs?(u=this.size[i]*1.9,f=this.size[i]*.68):this.kind[i]===pn&&(u=this.size[i]*1.65,f=this.size[i]*.82),this.spriteBatches[this.kind[i]].push(this.x[i],1.055,this.z[i],s,u,f,1);const m=t*16,v=(this.radius[i]+.68)*2;this.dotArr[m]=v,this.dotArr[m+5]=1,this.dotArr[m+10]=v,this.dotArr[m+12]=this.x[i],this.dotArr[m+13]=.05,this.dotArr[m+14]=this.z[i],this.dotArr[m+15]=1,t++}this.mesh.count=t,this.mesh.instanceMatrix.needsUpdate=!0,this.colAttr.needsUpdate=!0,this.kindAttr.needsUpdate=!0,this.dots.count=t,this.dots.instanceMatrix.needsUpdate=!0;for(const i of this.spriteBatches)i.end();this.aimLines.count=this.aimN,this.aimLines.instanceMatrix.needsUpdate=!0,this.aimChargeAttr.needsUpdate=!0,this.aimN=0}}class P1{s;constructor(e=Math.random()*4294967295>>>0){this.s=e>>>0}next(){this.s=this.s+1831565813|0;let e=Math.imul(this.s^this.s>>>15,1|this.s);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}range(e,t){return e+(t-e)*this.next()}int(e){return this.next()*e|0}}const ct=new P1,Me=1024,_l=8,fu=7,I1=7,pu=8,mu=3,L1=0,Lh=1,F1=2,Zn=3,co=4,Vn=0,_a=1,Dr=2,Us=3,Fh=0,qf=1,Zi=2,Bs=3;class D1{x=new Float32Array(Me);z=new Float32Array(Me);hp=new Float32Array(Me);maxHp=new Float32Array(Me);speed=new Float32Array(Me);radius=new Float32Array(Me);damage=new Float32Array(Me);gemValue=new Float32Array(Me);scale=new Float32Array(Me);sheetId=new Uint8Array(Me);blockPx=new Float32Array(Me);blockPy=new Float32Array(Me);dir=new Uint8Array(Me);frame=new Uint8Array(Me);animTime=new Float32Array(Me);flash=new Float32Array(Me);hitPunch=new Float32Array(Me);alive=new Uint8Array(Me);tr=new Float32Array(Me);tg=new Float32Array(Me);tb=new Float32Array(Me);kbx=new Float32Array(Me);kbz=new Float32Array(Me);kbResist=new Float32Array(Me);ranged=new Uint8Array(Me);range=new Float32Array(Me);atkCd=new Float32Array(Me);atkTimer=new Float32Array(Me);projDamage=new Float32Array(Me);projSpeed=new Float32Array(Me);projHoming=new Uint8Array(Me);behavior=new Uint8Array(Me);patternState=new Uint8Array(Me);patternT=new Float32Array(Me);aimX=new Float32Array(Me);aimZ=new Float32Array(Me);shieldHits=new Uint8Array(Me);elite=new Uint8Array(Me);boss=new Uint8Array(Me);groggy=new Uint8Array(Me);controlled=new Uint8Array(Me);stun=new Float32Array(Me);flee=new Uint8Array(Me);cart=new Uint8Array(Me);labels=new Array(Me).fill(null);chargeStarts=0;volleyStarts=0;casterStarts=0;specials=[];free=new Int32Array(Me);freeTop=0;aliveCount=0;cand=[];uv={u:0,v:0};nav={x:0,z:0};moved={x:0,z:0};constructor(){for(let e=0;e<Me;e++)this.free[e]=Me-1-e;this.freeTop=Me}spawn(e,t,i,n,s,r,o,l,h,c,d){if(this.freeTop===0)return-1;const u=this.free[--this.freeTop];return this.x[u]=e,this.z[u]=t,this.hp[u]=i,this.maxHp[u]=i,this.speed[u]=n,this.radius[u]=s,this.damage[u]=r,this.gemValue[u]=o,this.scale[u]=uc*l,this.sheetId[u]=h,this.blockPx[u]=c,this.blockPy[u]=d,this.dir[u]=0,this.frame[u]=0,this.animTime[u]=Math.random()*.5,this.flash[u]=0,this.hitPunch[u]=0,this.tr[u]=1,this.tg[u]=1,this.tb[u]=1,this.kbx[u]=0,this.kbz[u]=0,this.kbResist[u]=0,this.ranged[u]=0,this.atkTimer[u]=.5+Math.random(),this.behavior[u]=L1,this.patternState[u]=Vn,this.patternT[u]=.8+Math.random()*1.8,this.aimX[u]=0,this.aimZ[u]=1,this.shieldHits[u]=0,this.elite[u]=0,this.boss[u]=0,this.groggy[u]=0,this.controlled[u]=0,this.stun[u]=0,this.flee[u]=0,this.cart[u]=0,this.labels[u]=null,this.alive[u]=1,this.aliveCount++,u}markSpecial(e){this.specials.push(e)}kill(e){this.alive[e]!==0&&(this.alive[e]=0,this.labels[e]=null,this.free[this.freeTop++]=e,this.aliveCount--)}reset(){this.alive.fill(0);for(let e=0;e<Me;e++)this.free[e]=Me-1-e,this.labels[e]=null;this.freeTop=Me,this.aliveCount=0,this.specials.length=0,this.chargeStarts=0,this.volleyStarts=0,this.casterStarts=0}damageAt(e,t){return this.behavior[e]===co&&this.patternState[e]===Vn&&(t*=.55,this.shieldHits[e]++,this.shieldHits[e]>=3&&(this.shieldHits[e]=0,this.patternState[e]=Us,this.patternT[e]=2.4)),this.hp[e]-=t,this.flash[e]=1,this.hitPunch[e]=1,this.hp[e]<=0}push(e,t,i,n){if(this.controlled[e]===1)return;const s=n*(1-this.kbResist[e]);s<=0||(this.kbx[e]+=t*s,this.kbz[e]+=i*s,s>4&&this.stun[e]<.14&&(this.stun[e]=.14))}randomAlive(){if(this.aliveCount===0)return-1;let e=ct.next()*Me|0;for(let t=0;t<Me;t++){if(this.alive[e]===1&&this.controlled[e]===0)return e;e=(e+1)%Me}return-1}countInsideWalls(e){let t=0;for(let i=0;i<Me;i++)this.alive[i]&&e.circleBlocked(this.x[i],this.z[i],this.radius[i]*.9)&&t++;return t}insertAll(e){const t=this.alive;for(let i=0;i<Me;i++)t[i]&&e.insert(i,this.x[i],this.z[i])}update(e,t,i,n,s,r,o){const l=this.cand;let h=0;for(let c=0;c<Me;c++)this.alive[c]&&(this.patternState[c]===_a||this.patternState[c]===Dr)&&h++;for(let c=0;c<Me;c++){if(this.alive[c]===0)continue;this.flash[c]>0&&(this.flash[c]-=e*I1,this.flash[c]<0&&(this.flash[c]=0)),this.hitPunch[c]>0&&(this.hitPunch[c]-=e*9,this.hitPunch[c]<0&&(this.hitPunch[c]=0));const d=this.x[c],u=this.z[c],f=t-d,m=i-u,v=Math.hypot(f,m)||1,g=f/v,p=m/v;o.flowDirection(d,u,t,i,this.nav);let M=this.nav.x,T=this.nav.z;if(this.controlled[c]===1){this.dir[c]=Ws(g,p,this.dir[c]),this.animTime[c]+=e,this.frame[c]=(this.animTime[c]*_l|0)%4;continue}if(this.stun[c]>0){this.stun[c]-=e,o.resolveMovement(d,u,d+this.kbx[c]*e,u+this.kbz[c]*e,this.radius[c],this.moved),this.x[c]=this.moved.x,this.z[c]=this.moved.z;const V=Math.max(0,1-pu*e);this.kbx[c]*=V,this.kbz[c]*=V;continue}const w=this.speed[c];let A=M*w,_=T*w;if(this.flee[c]===1){o.resolveMovement(d,u,d-M*w*e,u-T*w*e,this.radius[c],this.moved),this.x[c]=this.moved.x,this.z[c]=this.moved.z,this.dir[c]=Ws(-M,-T,this.dir[c]),this.animTime[c]+=e,this.frame[c]=(this.animTime[c]*_l|0)%4;continue}const E=this.behavior[c],x=this.patternState[c];if(E===Lh&&(this.patternT[c]-=e,x===Vn?this.patternT[c]<=0&&v>=4&&v<=12&&h<mu&&(this.patternState[c]=_a,this.patternT[c]=.68,this.aimX[c]=g,this.aimZ[c]=p,r.spawnRing(d,u,2.8,2.5,.35,.18,.55),r.spawnThrust(d,u,g,p,8.5,.24,2.5,.28,.14,.68),this.flash[c]=.28,this.chargeStarts++,h++):x===_a?(A=0,_=0,this.flash[c]=Math.max(this.flash[c],.16),this.patternT[c]<=0&&(this.patternState[c]=Dr,this.patternT[c]=.42)):x===Dr?(A=this.aimX[c]*10.5,_=this.aimZ[c]*10.5,this.patternT[c]<=0&&(this.patternState[c]=Us,this.patternT[c]=.95)):(A*=.12,_*=.12,this.patternT[c]<=0&&(this.patternState[c]=Vn,this.patternT[c]=2.8+ct.next()*1.8))),E===co&&x===Us&&(this.patternT[c]-=e,A*=.35,_*=.35,this.patternT[c]<=0&&(this.patternState[c]=Vn)),this.ranged[c]===1){const V=this.range[c];if(v<V*.6?(A=-M*w,_=-T*w):v<V&&(A*=.15,_*=.15),x===Vn)this.atkTimer[c]-=e,this.atkTimer[c]<=0&&v<=V*1.15&&h<mu&&(this.patternState[c]=_a,this.patternT[c]=E===Zn?.92:.72,this.aimX[c]=g,this.aimZ[c]=p,E===Zn?(r.spawnRing(d,u,3.4,1.5,.45,2.5,.75),this.casterStarts++):(r.spawnRing(d,u,2.8,1.9,.4,2.3,.55),r.spawnThrust(d,u,g,p,10.5,.14,1.9,.4,2.3,.72),this.volleyStarts++),h++);else if(x===_a){this.patternT[c]-=e,A*=.05,_*=.05;const k=E===Zn?.92:.72,Y=Math.min(1,Math.max(0,1-this.patternT[c]/k));this.flash[c]=Math.max(this.flash[c],.1+Y*.5),E!==Zn&&s.aimLine(d,u,t,i,Y),this.patternT[c]<=0&&(this.fireFan(c,d,u,s,E===Zn),this.patternState[c]=Us,this.patternT[c]=E===Zn?.85:.6)}else x===Us&&(this.patternT[c]-=e,A*=.2,_*=.2,this.patternT[c]<=0&&(this.patternState[c]=Vn,this.atkTimer[c]=this.atkCd[c]))}const y=this.radius[c],R=y+.9,P=n.query(d,u,R,l);let F=0,W=0;for(let V=0;V<P;V++){const k=l[V];if(k===c)continue;const Y=d-this.x[k],ee=u-this.z[k],ae=Y*Y+ee*ee,de=y+this.radius[k];if(ae>0&&ae<de*de){const xe=Math.sqrt(ae),Ke=(de-xe)/de;F+=Y/xe*Ke,W+=ee/xe*Ke}}A+=F*fu,_+=W*fu,A+=this.kbx[c],_+=this.kbz[c];const $=Math.max(0,1-pu*e);this.kbx[c]*=$,this.kbz[c]*=$;const N=o.resolveMovement(d,u,d+A*e,u+_*e,y,this.moved);this.x[c]=this.moved.x,this.z[c]=this.moved.z,N&&E===Lh&&this.patternState[c]===Dr&&(this.patternState[c]=Us,this.patternT[c]=.95,r.spawnRing(this.x[c],this.z[c],1.8,2,.45,.18,.25)),this.dir[c]=Ws(A,_,this.dir[c]),this.animTime[c]+=e,this.frame[c]=(this.animTime[c]*_l|0)%4}}fireFan(e,t,i,n,s){const r=Math.atan2(this.aimZ[e],this.aimX[e]),o=s?.23:.16,l=this.projSpeed[e]*.88;for(let h=-1;h<=1;h++){const c=r+o*h;n.spawn(t,i,Math.cos(c),Math.sin(c),l,this.projDamage[e],s,s?gc:Ni)}}render(e,t,i,n,s,r){t.begin(),i.begin(),n.begin(),s.begin();const o=this.uv;for(let l=0;l<Me;l++){if(this.alive[l]===0)continue;const h=this.sheetId[l];let c,d;if(h===qf?(c=e.variants,d=i):h===Zi?(c=e.sgrade,d=n):h===Bs?(c=e.apriority,d=s):(c=e.soldiers,d=t),dc(c,this.blockPx[l],this.blockPy[l],this.dir[l],this.frame[l],o),d.push(this.x[l],this.z[l],this.scale[l],o.u,o.v,this.flash[l],this.tr[l],this.tg[l],this.tb[l]),this.hitPunch[l]>0){const u=this.hitPunch[l],f=this.boss[l]===1;d.setSquash(1+(f?.1:.25)*u,1-(f?.08:.25)*u)}r.push(this.x[l],this.z[l],this.radius[l]*1.5)}t.end(),i.end(),n.end(),s.end()}}const Mi={worker:{id:"worker",charIndex:7,hp:6,speed:1.6,radius:.45,damage:6,gemValue:1,worldScale:1},runner:{id:"runner",charIndex:9,hp:4,speed:3.3,radius:.4,damage:5,gemValue:1,worldScale:.95},guard:{id:"guard",charIndex:8,hp:14,speed:1.9,radius:.55,damage:8,gemValue:5,worldScale:1.1},general_spear:{id:"general_spear",charIndex:1,hp:42,speed:1.7,radius:.62,damage:11,gemValue:5,worldScale:1.18},general_blade:{id:"general_blade",charIndex:2,hp:26,speed:2.4,radius:.52,damage:10,gemValue:5,worldScale:1.06},general_bow:{id:"general_bow",charIndex:3,hp:20,speed:1.7,radius:.5,damage:6,gemValue:5,worldScale:1,ranged:!0,range:11,atkCd:2.2,projDamage:8,projSpeed:12},strategist:{id:"strategist",charIndex:4,hp:24,speed:1.4,radius:.5,damage:6,gemValue:5,worldScale:1,ranged:!0,range:13,atkCd:2.8,projDamage:11,projSpeed:7,projHoming:!0}},U1=192,k1=192,z1=19,gu=24,Ur=420,wl=90,vu=[{id:"yellowturban",ko:"황건적",hanja:"黃巾",en:"Yellow Turbans",banner:[.85,.62,.24],tints:[[1.32,1.06,.5],[1.38,1.12,.56],[1.24,.98,.46]],variantStart:0,variantCount:7},{id:"dongzhuo",ko:"동탁군",hanja:"董卓",en:"Dong Zhuo's Host",banner:[.72,.2,.17],tints:[[1.4,.66,.56],[1.28,.58,.5],[1.46,.74,.64]],variantStart:7,variantCount:7},{id:"yuanshao",ko:"원소군",hanja:"袁紹",en:"Yuan Shao's Host",banner:[.24,.44,.72],tints:[[.66,.84,1.4],[.74,.9,1.32],[.6,.78,1.46]],variantStart:14,variantCount:6},{id:"warlords",ko:"군웅",hanja:"群雄",en:"Warlords",banner:[.5,.54,.6],tints:[[.88,.9,1.02],[.78,.82,.94],[1,.94,.92]],variantStart:20,variantCount:4}];function xu(a){return a<2.75?0:a<5.75?1:a<8.75?2:3}class N1{acc=0;eliteTimer=wl;surroundTimer=0;bossActive=!1;siegeActive=!1;factionIdx=0;onWave=null;atlas;pool;map;apriorityNames;constructor(e,t,i){this.atlas=e,this.pool=t,this.map=i;const n=e.manifest.sheets.apriority.chars;this.apriorityNames=new Array(16).fill("장수");for(const s in n){const r=n[s];this.apriorityNames[r]=e.manifest.names[s]??s}}reset(){this.acc=0,this.eliteTimer=wl,this.surroundTimer=0,this.bossActive=!1,this.siegeActive=!1,this.factionIdx=0}setBossActive(e){this.bossActive=e}setSiegeActive(e){this.siegeActive=e}hpScale(e){let t=1+.13*e+.011*e*e;return e>10&&(t*=Math.pow(1.35,e-10)),t}update(e,t,i,n){const s=t/60,r=xu(s);r!==this.factionIdx&&(this.factionIdx=r,this.onWave?.(vu[r]));let o=Math.min(18,2+s*1.7);if(this.bossActive?o*=.4:this.siegeActive&&(o*=.55),this.pool.aliveCount<Ur)for(this.acc+=o*e;this.acc>=1&&(this.acc-=1,!(this.pool.aliveCount>=Ur));)this.spawnOne(s,i,n);else this.acc=0;this.bossActive||(this.eliteTimer-=e,this.eliteTimer<=0&&(this.eliteTimer+=wl,this.spawnElite(s,i,n))),!this.bossActive&&t>=300&&(this.surroundTimer-=e,this.surroundTimer<=0&&(this.surroundTimer=22,this.spawnSurround(s,i,n)))}ringPos(e,t,i){const n=ct.next()*Math.PI*2,s=ct.range(z1,gu);i.x=e+Math.cos(n)*s,i.z=t+Math.sin(n)*s,this.map.projectWalkable(i.x,i.z,.75,i)}_p={x:0,z:0};_spawnP={x:0,z:0};spawnOne(e,t,i){const n=this.pickType(e);this.ringPos(t,i,this._p),this.placeEnemy(n,this._p.x,this._p.z,e)}placeEnemy(e,t,i,n,s){this.map.projectWalkable(t,i,e.radius+.08,this._spawnP),t=this._spawnP.x,i=this._spawnP.z;const r=e.hp*this.hpScale(n);let o=Fh,l=this.atlas.soldierBlockPx(e.charIndex),h=0;const c=vu[s??xu(n)];if(n>=1){const f=this.atlas.variantBlocks(e.id);if(f.length>0){const m=(c.variantStart+ct.int(c.variantCount))%f.length,v=f[m];o=qf,l=v.c*U1,h=v.r*256}}const d=this.pool.spawn(t,i,r,e.speed,e.radius,e.damage,e.gemValue,e.worldScale,o,l,h);if(d<0)return-1;const u=c.tints[ct.int(c.tints.length)];return this.pool.tr[d]=u[0],this.pool.tg[d]=u[1],this.pool.tb[d]=u[2],e.ranged&&(this.pool.ranged[d]=1,this.pool.range[d]=e.range??11,this.pool.atkCd[d]=e.atkCd??2.5,this.pool.projDamage[d]=e.projDamage??8,this.pool.projSpeed[d]=e.projSpeed??10,this.pool.projHoming[d]=e.projHoming?1:0),e.id==="general_spear"||e.id==="runner"&&ct.next()<.34?this.pool.behavior[d]=Lh:e.id==="general_bow"?this.pool.behavior[d]=F1:e.id==="strategist"?this.pool.behavior[d]=Zn:e.id==="guard"&&(this.pool.behavior[d]=co),d}spawnElite(e,t,i){if(this.pool.aliveCount>=Ur)return;this.ringPos(t,i,this._p);const n=ct.int(16),s=Mi.guard.hp*25*this.hpScale(e),r=this.pool.spawn(this._p.x,this._p.z,s,2.2,.85,13,20,1.5,Bs,n*k1,0);r<0||(this.pool.elite[r]=1,this.pool.kbResist[r]=.5,this.pool.behavior[r]=co,this.pool.tr[r]=1.5,this.pool.tg[r]=1.2,this.pool.tb[r]=.7,this.pool.labels[r]=`${this.apriorityNames[n]} 精銳`,this.pool.markSpecial(r))}forcePattern(e,t,i,n){const s=t/60;if(e==="charge"){const r=this.placeEnemy(Mi.general_spear,i+8,n,s);r>=0&&(this.pool.patternT[r]=0)}else if(e==="volley")for(let r=-1;r<=1;r++){const o=this.placeEnemy(Mi.general_bow,i+r*2.2,n+9,s);o>=0&&(this.pool.atkTimer[o]=0)}else if(e==="strategist"){const r=this.placeEnemy(Mi.strategist,i-8,n+5,s);r>=0&&(this.pool.atkTimer[r]=0)}else e==="shield"&&this.placeEnemy(Mi.guard,i+5,n+3,s)}spawnGateRush(e,t,i,n,s){for(let r=0;r<10;r++){const o=r/2|0,l=r%2*2-1,h=i?e+l*1.5:e-4-o*1.4,c=i?t-4-o*1.4:t+l*1.5;this.placeEnemy(r>=8?Mi.general_spear:Mi.runner,h,c,n,s)}}spawnSiegeAttacker(e,t,i,n=!1){const s=n?Mi.general_bow:this.pickType(i);return this.placeEnemy(s,e,t,i,1)}spawnSiegeRush(e,t,i){for(let n=0;n<10;n++){const s=n/10*Math.PI*2,r=1.4+n%3*.9;this.spawnSiegeAttacker(e+Math.cos(s)*r,t+Math.sin(s)*r,i,n>=8)}}spawnGateWatch(e,t){for(const i of e)this.spawnSiegeAttacker(i.x,i.z,t,!0)}garrisonCount(){let e=0;for(let t=0;t<Me;t++)this.pool.alive[t]===1&&this.pool.controlled[t]===0&&this.map.insideCastleBounds(this.pool.x[t],this.pool.z[t],0)&&e++;return e}spawnSurround(e,t,i){const s=gu;for(let r=0;r<36&&!(this.pool.aliveCount>=Ur);r++){const o=r/36*Math.PI*2+ct.range(-.05,.05),l=this.pickType(e);this.placeEnemy(l,t+Math.cos(o)*s,i+Math.sin(o)*s,e)}}pickType(e){const t=ct.next(),i=Mi;return e<1?t<.6?i.worker:i.runner:e<2?t<.45?i.worker:t<.75?i.runner:i.guard:e<3?t<.35?i.worker:t<.6?i.runner:t<.85?i.guard:i.general_spear:e<4.5?t<.3?i.worker:t<.5?i.runner:t<.68?i.guard:t<.85?i.general_spear:i.general_blade:e<6?t<.25?i.worker:t<.42?i.runner:t<.58?i.guard:t<.72?i.general_spear:t<.87?i.general_blade:i.general_bow:e<7.5?t<.2?i.runner:t<.36?i.guard:t<.52?i.general_spear:t<.68?i.general_blade:t<.85?i.general_bow:i.strategist:t<.16?i.runner:t<.32?i.guard:t<.48?i.general_spear:t<.66?i.general_blade:t<.83?i.general_bow:i.strategist}}const ks=2,bu=4096,O1=8192;function yu(a,e){return(a+bu)*O1+(e+bu)}class B1{buckets=new Map;used=[];clear(){const e=this.used;for(let t=0;t<e.length;t++){const i=this.buckets.get(e[t]);i&&(i.length=0)}e.length=0}insert(e,t,i){const n=Math.floor(t/ks),s=Math.floor(i/ks),r=yu(n,s);let o=this.buckets.get(r);o===void 0&&(o=[],this.buckets.set(r,o)),o.length===0&&this.used.push(r),o.push(e)}query(e,t,i,n){const s=Math.floor((e-i)/ks),r=Math.floor((e+i)/ks),o=Math.floor((t-i)/ks),l=Math.floor((t+i)/ks);let h=0;for(let c=s;c<=r;c++)for(let d=o;d<=l;d++){const u=this.buckets.get(yu(c,d));if(u!==void 0)for(let f=0;f<u.length;f++)n[h++]=u[f]}return h}}let _u=0;function H1(a,e,t,i,n,s,r=0){const o=e.query(t,i,n,s);let l=-1,h=n*n,c=-1,d=n*n;const u=a.boss;for(let f=0;f<o;f++){const m=s[f];if(a.alive[m]===0)continue;const v=a.x[m]-t,g=a.z[m]-i,p=v*v+g*g;p<h&&(h=p,l=m),u!==void 0&&u[m]===1&&p<d&&(d=p,c=m)}if(_u++,c>=0){const m=90+Math.round(40*Math.min(1,Math.max(0,r-60)/90));if(_u%200<m)return c}return l}function G1(a,e,t,i,n,s){const r=n-t,o=s-i,l=r*r+o*o;let h=l>0?((a-t)*r+(e-i)*o)/l:0;h<0?h=0:h>1&&(h=1);const c=t+r*h,d=i+o*h,u=a-c,f=e-d;return u*u+f*f}const Pt=512,V1=2,wu=.7;class W1{x=new Float32Array(Pt);z=new Float32Array(Pt);value=new Float32Array(Pt);heal=new Uint8Array(Pt);mag=new Uint8Array(Pt);cr=new Float32Array(Pt);cg=new Float32Array(Pt);cb=new Float32Array(Pt);alive=new Uint8Array(Pt);free=new Int32Array(Pt);freeTop=0;time=0;mesh;matArr;colArr;colAttr;constructor(e){for(let n=0;n<Pt;n++)this.free[n]=Pt-1-n;this.freeTop=Pt;const t=new ac(.26,0),i=new Fi({toneMapped:!1});this.mesh=new At(t,i,Pt),this.mesh.instanceMatrix.setUsage(Pe),this.colArr=new Float32Array(Pt*3),this.colAttr=new qe(this.colArr,3),this.colAttr.setUsage(Pe),this.mesh.instanceColor=this.colAttr,this.mesh.frustumCulled=!1,this.mesh.count=0,this.mesh.renderOrder=1,this.matArr=this.mesh.instanceMatrix.array,e.add(this.mesh)}get object(){return this.mesh}reset(){for(let e=0;e<Pt;e++)this.alive[e]=0,this.free[e]=Pt-1-e;this.freeTop=Pt}spawn(e,t,i){if(this.freeTop===0)return;const n=this.free[--this.freeTop];this.x[n]=e,this.z[n]=t,this.value[n]=i,this.heal[n]=0,this.mag[n]=0,this.alive[n]=1,i>=20?(this.cr[n]=2.2,this.cg[n]=.4,this.cb[n]=.5):i>=5?(this.cr[n]=.4,this.cg[n]=2,this.cb[n]=.7):(this.cr[n]=.35,this.cg[n]=.75,this.cb[n]=2.2)}spawnHeal(e,t,i){if(this.freeTop===0)return;const n=this.free[--this.freeTop];this.x[n]=e,this.z[n]=t,this.value[n]=i,this.heal[n]=1,this.mag[n]=0,this.alive[n]=1,this.cr[n]=2.4,this.cg[n]=2.1,this.cb[n]=1.5}magnetizeAll(){for(let e=0;e<Pt;e++)this.alive[e]===1&&(this.mag[e]=1)}get activeHealCount(){let e=0;for(let t=0;t<Pt;t++)this.alive[t]===1&&this.heal[t]===1&&e++;return e}update(e,t,i,n,s,r){this.time+=e;const o=V1*n,l=o*o,h=wu*wu;for(let c=0;c<Pt;c++){if(this.alive[c]===0)continue;const d=t-this.x[c],u=i-this.z[c],f=d*d+u*u;if(this.mag[c]===0&&f<=l&&(this.mag[c]=1),this.mag[c]){const m=Math.sqrt(f)||1,v=6+(o-Math.min(o,m))*5+10/m;this.x[c]+=d/m*v*e,this.z[c]+=u/m*v*e,f<=h&&(this.heal[c]===1?r?.(this.value[c]):s(this.value[c]),this.alive[c]=0,this.free[this.freeTop++]=c)}}}render(){let e=0;const t=this.time;for(let i=0;i<Pt;i++){if(this.alive[i]===0)continue;const n=e*16,s=1+.12*Math.sin(t*5+i);this.matArr[n]=s,this.matArr[n+5]=s,this.matArr[n+10]=s,this.matArr[n+12]=this.x[i],this.matArr[n+13]=.5+Math.sin(t*3+i)*.12,this.matArr[n+14]=this.z[i],this.matArr[n+15]=1;const r=e*3;this.colArr[r]=this.cr[i],this.colArr[r+1]=this.cg[i],this.colArr[r+2]=this.cb[i],e++}this.mesh.count=e,this.mesh.instanceMatrix.needsUpdate=!0,this.colAttr.needsUpdate=!0}}const X1=new I(18e-5,26e-5,8e-4),q1=.019;function $1(){const a=new xo(.055,.055,.78,6);a.rotateZ(-Math.PI/2),a.translate(-.06,0,0);const e=new nc(.15,.32,8);return e.rotateZ(-Math.PI/2),e.translate(.49,0,0),Of([a,e],!1)}class j1{mesh;matArr;colArr;fadeArr;colAttr;fadeAttr;cap;w=0;constructor(e,t,i){this.cap=t;const n=$1();this.colArr=new Float32Array(t*3),this.fadeArr=new Float32Array(t),this.colAttr=new qe(this.colArr,3),this.fadeAttr=new qe(this.fadeArr,1),this.colAttr.setUsage(Pe),this.fadeAttr.setUsage(Pe),n.setAttribute("aColor",this.colAttr),n.setAttribute("aFade",this.fadeAttr);const s=new Be({uniforms:{uFogColor:{value:X1.clone()},uFogDensity:{value:q1},...i},vertexShader:`
        attribute vec3 aColor;
        attribute float aFade;
        varying vec3 vColor;
        varying float vFade;
        varying float vShade;
        varying float vFogDepth;
        ${wo}
        void main() {
          vColor = aColor;
          vFade = aFade;
          // 고정 방향광 기반 가짜 셰이딩(부피감). 인스턴스 회전만 반영.
          vec3 n = normalize(mat3(instanceMatrix) * normal);
          vShade = 0.55 + 0.45 * clamp(dot(n, normalize(vec3(0.4, 0.8, 0.35))), 0.0, 1.0);
          vWorldXZ = (modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xz;
          vec4 mv = modelViewMatrix * instanceMatrix * vec4(position, 1.0);
          vFogDepth = -mv.z;
          gl_Position = projectionMatrix * mv;
        }
      `,fragmentShader:`
        uniform vec3 uFogColor;
        uniform float uFogDensity;
        varying vec3 vColor;
        varying float vFade;
        varying float vShade;
        varying float vFogDepth;
        ${_o}
        void main() {
          vec3 col = vColor * vShade;
          col += sampleLights() * 0.9;
          float fog = 1.0 - exp(-uFogDensity * uFogDensity * vFogDepth * vFogDepth);
          col = mix(col, uFogColor, clamp(fog, 0.0, 1.0));
          gl_FragColor = vec4(col, vFade);
        }
      `,transparent:!0,depthWrite:!0,depthTest:!0});this.mesh=new At(n,s,t),this.mesh.instanceMatrix.setUsage(Pe),this.mesh.frustumCulled=!1,this.mesh.count=0,this.mesh.renderOrder=4,this.matArr=this.mesh.instanceMatrix.array,e.add(this.mesh)}begin(){this.w=0}push(e,t,i,n,s,r,o,l,h,c){if(this.w>=this.cap)return;const d=this.w++,u=d*16,f=Math.cos(n),m=Math.sin(n);this.matArr[u]=f*s,this.matArr[u+1]=0,this.matArr[u+2]=-m*s,this.matArr[u+3]=0,this.matArr[u+4]=0,this.matArr[u+5]=r,this.matArr[u+6]=0,this.matArr[u+7]=0,this.matArr[u+8]=m*r,this.matArr[u+9]=0,this.matArr[u+10]=f*r,this.matArr[u+11]=0,this.matArr[u+12]=e,this.matArr[u+13]=t,this.matArr[u+14]=i,this.matArr[u+15]=1;const v=d*3;this.colArr[v]=o,this.colArr[v+1]=l,this.colArr[v+2]=h,this.fadeArr[d]=c}end(){this.mesh.count=this.w,this.mesh.instanceMatrix.needsUpdate=!0,this.colAttr.needsUpdate=!0,this.fadeAttr.needsUpdate=!0}}const Fe=384,Ml=8,Z1=8,Y1=.35,Js=0,xc=1,Hs=2,Ca=3,Rn=4,$f=5;class K1{x=new Float32Array(Fe);z=new Float32Array(Fe);vx=new Float32Array(Fe);vz=new Float32Array(Fe);life=new Float32Array(Fe);invDur=new Float32Array(Fe);damage=new Float32Array(Fe);radius=new Float32Array(Fe);pierce=new Int16Array(Fe);homing=new Uint8Array(Fe);turn=new Float32Array(Fe);kind=new Uint8Array(Fe);cr=new Float32Array(Fe);cg=new Float32Array(Fe);cb=new Float32Array(Fe);len=new Float32Array(Fe);wid=new Float32Array(Fe);hy=new Float32Array(Fe);mode=new Uint8Array(Fe);oAng=new Float32Array(Fe);oRad=new Float32Array(Fe);oVel=new Float32Array(Fe);atkT=new Float32Array(Fe);dusty=new Uint8Array(Fe);trailT=new Float32Array(Fe);alive=new Uint8Array(Fe);hits=new Int32Array(Fe*Ml);hitN=new Uint8Array(Fe);free=new Int32Array(Fe);freeTop=0;mesh;matArr;colArr;kindArr;fadeArr;colAttr;kindAttr;fadeAttr;spriteBatches;arrows;constructor(e,t){for(let s=0;s<Fe;s++)this.free[s]=Fe-1-s;this.freeTop=Fe;const i=new tt(1,1,1,1);i.rotateX(-Math.PI/2),this.colArr=new Float32Array(Fe*3),this.kindArr=new Float32Array(Fe),this.fadeArr=new Float32Array(Fe),this.colAttr=new qe(this.colArr,3),this.kindAttr=new qe(this.kindArr,1),this.fadeAttr=new qe(this.fadeArr,1),this.colAttr.setUsage(Pe),this.fadeAttr.setUsage(Pe),i.setAttribute("aColor",this.colAttr),i.setAttribute("aKind",this.kindAttr),i.setAttribute("aFade",this.fadeAttr);const n=new Be({uniforms:{uTime:{value:0}},vertexShader:`
        attribute vec3 aColor;
        attribute float aKind;
        attribute float aFade;
        varying vec2 vUv;
        varying vec3 vColor;
        varying float vKind;
        varying float vFade;
        void main() {
          vUv = uv;
          vColor = aColor;
          vKind = aKind;
          vFade = aFade;
          gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform float uTime;
        varying vec2 vUv;
        varying vec3 vColor;
        varying float vKind;
        varying float vFade;
        void main() {
          vec2 p = vUv - 0.5;
          float along = vUv.x;      // 0..1 (진행 방향 +X)
          float across = abs(p.y) * 2.0;
          float b = 0.0;
          if (vKind < 0.5) {
            // 화살: 뾰족한 머리 + 꼬리 스트릭
            float body = smoothstep(1.0, 0.35, across);
            float head = smoothstep(0.2, 1.0, along);
            float tail = smoothstep(0.0, 0.5, along);
            b = body * mix(tail, 1.0, head) * (0.6 + head);
          } else if (vKind < 1.5) {
            // 부적: 부드러운 발광 블롭 + 짧은 꼬리 + 룬 깜빡임
            float blob = smoothstep(0.6, 0.0, length(p));
            float tailg = smoothstep(0.0, 0.6, along) * smoothstep(1.0, 0.4, across);
            float flick = 0.75 + 0.25 * sin(uTime * 20.0 + vUv.x * 6.0);
            b = (blob + tailg * 0.4) * flick;
          } else if (vKind < 2.5) {
            // 참격파: 넓은 크레센트 밴드
            float band = smoothstep(1.0, 0.2, across) * smoothstep(0.0, 0.3, along) * (1.0 - smoothstep(0.8, 1.0, along));
            b = band * 1.2;
          } else if (vKind < 3.5) {
            // 태극 오브: 이중 소용돌이 발광 구슬
            float r = length(p) * 2.0;
            float disc = smoothstep(1.0, 0.0, r);
            float swirl = 0.5 + 0.5 * sin(atan(p.y, p.x) * 2.0 + uTime * 6.0 + r * 4.0);
            b = disc * (0.6 + 0.5 * swirl);
          } else if (vKind < 4.5) {
            // 기마 돌격: 길고 강한 스트릭
            float body = smoothstep(1.0, 0.2, across);
            float streak = smoothstep(0.0, 0.3, along) * (1.0 - smoothstep(0.7, 1.0, along) * 0.5);
            b = body * streak * 1.3;
          } else {
            // 화염 화살(원융노): 화살형 후광
            float body = smoothstep(1.0, 0.35, across);
            float head = smoothstep(0.2, 1.0, along);
            float tail = smoothstep(0.0, 0.5, along);
            b = body * mix(tail, 1.0, head) * (0.6 + head);
          }
          if (b <= 0.001) discard;
          // 생성 스프라이트가 본체를 담당한다. 이 셰이더는 뒤쪽 후광/속도선만 얇게 맡는다.
          gl_FragColor = vec4(vColor * b * 0.34, b * vFade * 0.2);
        }
      `,transparent:!0,blending:jt,depthWrite:!1,depthTest:!0});this.mesh=new At(i,n,Fe),this.mesh.instanceMatrix.setUsage(Pe),this.mesh.frustumCulled=!1,this.mesh.count=0,this.mesh.renderOrder=4,this.matArr=this.mesh.instanceMatrix.array,e.add(this.mesh),this.spriteBatches=[new Pi(e,"player-arrow-basic",Fe),new Pi(e,"talisman",Fe,5,1,!0),new Pi(e,"slash-wave",Fe),new Pi(e,"bagua-orb",Fe),new Pi(e,"cavalry",Fe),new Pi(e,"player-arrow",Fe)],this.arrows=new j1(e,Fe,t)}get object(){return this.mesh}reset(){this.alive.fill(0);for(let e=0;e<Fe;e++)this.free[e]=Fe-1-e;this.freeTop=Fe}acquire(){return this.freeTop===0?-1:this.free[--this.freeTop]}spawn(e,t,i,n,s,r,o,l,h,c,d,u,f,m,v,g=!1,p=6,M=!1){const T=this.acquire();T<0||(this.x[T]=e,this.z[T]=t,this.vx[T]=i*s,this.vz[T]=n*s,this.life[T]=h,this.invDur[T]=1/h,this.damage[T]=r,this.radius[T]=o,this.pierce[T]=l,this.homing[T]=g?1:0,this.turn[T]=p,this.kind[T]=c,this.cr[T]=d,this.cg[T]=u,this.cb[T]=f,this.len[T]=m,this.wid[T]=v,this.hy[T]=c===Hs?.7:c===Ca?.9:1,this.mode[T]=0,this.dusty[T]=M?1:0,this.trailT[T]=0,this.hitN[T]=0,this.alive[T]=1)}spawnOrbit(e,t,i,n,s,r,o,l){const h=this.acquire();h<0||(this.mode[h]=1,this.oAng[h]=e,this.oRad[h]=t,this.oVel[h]=i,this.damage[h]=n,this.radius[h]=l*.6,this.kind[h]=Ca,this.cr[h]=s,this.cg[h]=r,this.cb[h]=o,this.len[h]=l,this.wid[h]=l,this.hy[h]=.9,this.atkT[h]=0,this.life[h]=1,this.invDur[h]=0,this.dusty[h]=0,this.trailT[h]=0,this.alive[h]=1)}clearOrbits(){for(let e=0;e<Fe;e++)this.alive[e]===1&&this.mode[e]===1&&(this.alive[e]=0,this.free[this.freeTop++]=e)}refreshOrbits(e,t,i){for(let n=0;n<Fe;n++)this.alive[n]===1&&this.mode[n]===1&&(this.damage[n]=e,this.oRad[n]=t,this.oVel[n]=i)}countOrbits(){let e=0;for(let t=0;t<Fe;t++)this.alive[t]===1&&this.mode[t]===1&&e++;return e}tryHit(e,t,i,n,s,r,o,l,h){const c=this.x[e],d=this.z[e],u=this.radius[e]+.7,f=i.query(c,d,u,r),m=this.mode[e]===1,v=e*Ml;for(let g=0;g<f;g++){const p=r[g];if(t.alive[p]===0)continue;const M=t.x[p]-c,T=t.z[p]-d,w=this.radius[e]+t.radius[p];if(M*M+T*T>w*w)continue;if(m){if(!o)continue}else{let x=!1;const y=this.hitN[e];for(let R=0;R<y;R++)if(this.hits[v+R]===p){x=!0;break}if(x)continue;y<Ml&&(this.hits[v+this.hitN[e]++]=p)}const _=t.boss[p]===1?this.damage[e]*Z1*(t.groggy[p]===1?1.6:1)*(m?Y1:1):this.damage[e],E=t.damageAt(p,_);if(n.spawn(_,t.x[p],t.scale[p]*.7,t.z[p],!1),l.projectileImpact(t.x[p],t.z[p],this.cr[e],this.cg[e],this.cb[e],this.kind[e]),this.kind[e]===Hs?h.spawnRing(t.x[p],t.z[p],1.5,this.cr[e],this.cg[e],this.cb[e],.2):this.kind[e]===Ca&&o?h.spawnRing(t.x[p],t.z[p],.75,this.cr[e],this.cg[e],this.cb[e],.18):this.kind[e]===Rn&&h.spawnRing(t.x[p],t.z[p],1.9,1.5,.75,.35,.24),!E){if(this.kind[e]===Rn||this.kind[e]===Hs){const x=Math.hypot(this.vx[e],this.vz[e])||1;t.push(p,this.vx[e]/x,this.vz[e]/x,this.kind[e]===Rn?7:3)}else if(m){const x=t.x[p]-c,y=t.z[p]-d,R=Math.hypot(x,y)||1;t.push(p,x/R,y/R,2)}}if(E&&s(p),!m&&(this.pierce[e]--,this.pierce[e]<0)){this.kill(e);return}}}kill(e){this.alive[e]=0,this.free[this.freeTop++]=e}update(e,t,i,n,s,r,o,l,h,c){for(let d=0;d<Fe;d++)if(this.alive[d]!==0){if(this.mode[d]===1){this.oAng[d]+=this.oVel[d]*e,this.x[d]=t+Math.cos(this.oAng[d])*this.oRad[d],this.z[d]=i+Math.sin(this.oAng[d])*this.oRad[d],this.atkT[d]-=e;const u=this.atkT[d]<=0;u&&(this.atkT[d]=.3),this.trailT[d]-=e,this.trailT[d]<=0&&(l.projectileTrail(this.x[d],this.z[d],0,0,this.cr[d],this.cg[d],this.cb[d],this.kind[d]),this.trailT[d]=.09),this.tryHit(d,n,s,r,o,c,u,l,h);continue}if(this.homing[d]){const u=J1(n,s,this.x[d],this.z[d],9,c);if(u>=0){const f=n.x[u]-this.x[d],m=n.z[u]-this.z[d],v=Math.hypot(f,m)||1,g=Math.hypot(this.vx[d],this.vz[d]),p=Math.min(1,this.turn[d]*e);this.vx[d]+=(f/v*g-this.vx[d])*p,this.vz[d]+=(m/v*g-this.vz[d])*p}}this.x[d]+=this.vx[d]*e,this.z[d]+=this.vz[d]*e,this.dusty[d]&&l.dust(this.x[d],this.z[d]),this.trailT[d]-=e,this.trailT[d]<=0&&(l.projectileTrail(this.x[d],this.z[d],this.vx[d],this.vz[d],this.cr[d],this.cg[d],this.cb[d],this.kind[d]),this.trailT[d]=this.kind[d]===Rn?.035:this.kind[d]===Js?.08:.055),this.tryHit(d,n,s,r,o,c,!1,l,h),this.alive[d]!==0&&(this.life[d]-=e,this.life[d]<=0&&this.kill(d))}}render(e){this.mesh.material.uniforms.uTime.value=e;for(const i of this.spriteBatches)i.begin(e);this.arrows.begin();let t=0;for(let i=0;i<Fe;i++){if(this.alive[i]===0)continue;const n=t*16;let s,r,o;this.mode[i]===1||this.kind[i]===Ca?(s=e*3,r=this.len[i],o=this.wid[i]):(s=Math.atan2(-this.vz[i],this.vx[i]),r=this.len[i],o=this.wid[i]);const l=Math.cos(s),h=Math.sin(s);this.matArr[n]=l*r,this.matArr[n+1]=0,this.matArr[n+2]=-h*r,this.matArr[n+3]=0,this.matArr[n+4]=0,this.matArr[n+5]=1,this.matArr[n+6]=0,this.matArr[n+7]=0,this.matArr[n+8]=h*o,this.matArr[n+9]=0,this.matArr[n+10]=l*o,this.matArr[n+11]=0,this.matArr[n+12]=this.x[i],this.matArr[n+13]=this.hy[i],this.matArr[n+14]=this.z[i],this.matArr[n+15]=1;const c=t*3;this.colArr[c]=this.cr[i],this.colArr[c+1]=this.cg[i],this.colArr[c+2]=this.cb[i],this.kindArr[t]=this.kind[i];let d=1;if(this.mode[i]===0){const m=this.life[i]*this.invDur[i];d=Math.min(1,m*4)*Math.min(1,(1-m)*6+.3)}this.fadeArr[t]=d;const u=this.kind[i]===Rn?this.len[i]:this.kind[i]===Hs?Math.max(this.len[i],this.wid[i]):this.len[i]*1.18;this.kind[i]===Js||this.kind[i]===$f?this.arrows.push(this.x[i],this.hy[i]+.2,this.z[i],s,this.len[i]*1.05,Math.max(this.wid[i],.5)*1.05,this.cr[i],this.cg[i],this.cb[i],d):this.spriteBatches[this.kind[i]].push(this.x[i],this.hy[i]+.055,this.z[i],s,u,u,d),t++}this.mesh.count=t,this.mesh.instanceMatrix.needsUpdate=!0,this.colAttr.needsUpdate=!0,this.kindAttr.needsUpdate=!0,this.fadeAttr.needsUpdate=!0;for(const i of this.spriteBatches)i.end();this.arrows.end()}}function J1(a,e,t,i,n,s){const r=e.query(t,i,n,s);let o=-1,l=n*n;for(let h=0;h<r;h++){const c=s[h];if(a.alive[c]===0)continue;const d=a.x[c]-t,u=a.z[c]-i,f=d*d+u*u;f<l&&(l=f,o=c)}return o}const bt=64,Mu=.25;class Q1{x=new Float32Array(bt);z=new Float32Array(bt);radius=new Float32Array(bt);life=new Float32Array(bt);maxLife=new Float32Array(bt);dps=new Float32Array(bt);vx=new Float32Array(bt);vz=new Float32Array(bt);tickT=new Float32Array(bt);cr=new Float32Array(bt);cg=new Float32Array(bt);cb=new Float32Array(bt);alive=new Uint8Array(bt);free=new Int32Array(bt);freeTop=0;mesh;matArr;colArr;fadeArr;colAttr;fadeAttr;spawnLight=null;constructor(e){for(let n=0;n<bt;n++)this.free[n]=bt-1-n;this.freeTop=bt;const t=new vo(1,40);t.rotateX(-Math.PI/2),this.colArr=new Float32Array(bt*3),this.fadeArr=new Float32Array(bt),this.colAttr=new qe(this.colArr,3),this.fadeAttr=new qe(this.fadeArr,1),this.colAttr.setUsage(Pe),this.fadeAttr.setUsage(Pe),t.setAttribute("aColor",this.colAttr),t.setAttribute("aFade",this.fadeAttr);const i=new Be({uniforms:{uTime:{value:0}},vertexShader:`
        attribute vec3 aColor;
        attribute float aFade;
        varying vec2 vLocal;
        varying vec3 vColor;
        varying float vFade;
        void main() {
          vLocal = position.xz; // -1..1 원반
          vColor = aColor;
          vFade = aFade;
          gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform float uTime;
        varying vec2 vLocal;
        varying vec3 vColor;
        varying float vFade;
        // 값 노이즈
        float hash(vec2 p){ return fract(sin(dot(p, vec2(41.3, 289.1))) * 43758.5453); }
        float noise(vec2 p){
          vec2 i = floor(p); vec2 f = fract(p);
          float a = hash(i), b = hash(i + vec2(1.0,0.0));
          float c = hash(i + vec2(0.0,1.0)), d = hash(i + vec2(1.0,1.0));
          vec2 u = f*f*(3.0-2.0*f);
          return mix(mix(a,b,u.x), mix(c,d,u.x), u.y);
        }
        void main() {
          float r = length(vLocal);
          if (r > 1.0) discard;
          float t = uTime;
          float n = noise(vLocal * 4.0 + vec2(0.0, -t * 1.6));
          n += 0.5 * noise(vLocal * 8.0 + vec2(t * 0.8, -t * 2.2));
          n /= 1.5;
          // 가장자리 일렁임 + 중심 발광 (과다 블룸 방지로 강도 억제)
          float edge = 1.0 - smoothstep(0.5, 1.0, r);
          float flame = edge * (0.3 + n * 0.65);
          float core = smoothstep(0.55, 0.0, r) * 0.25;
          float b = (flame + core) * vFade;
          if (b <= 0.01) discard;
          vec3 col = mix(vColor, vec3(1.7, 1.0, 0.35), core);
          gl_FragColor = vec4(col * b * 0.6, b * 0.85);
        }
      `,transparent:!0,blending:jt,depthWrite:!1,depthTest:!0});this.mesh=new At(t,i,bt),this.mesh.instanceMatrix.setUsage(Pe),this.mesh.frustumCulled=!1,this.mesh.count=0,this.mesh.renderOrder=3,this.matArr=this.mesh.instanceMatrix.array,e.add(this.mesh)}get object(){return this.mesh}reset(){this.alive.fill(0);for(let e=0;e<bt;e++)this.free[e]=bt-1-e;this.freeTop=bt}spawn(e,t,i,n,s,r=2.4,o=.9,l=.25,h=0,c=0){if(this.freeTop===0)return;const d=this.free[--this.freeTop];this.x[d]=e,this.z[d]=t,this.radius[d]=i,this.life[d]=n,this.maxLife[d]=n,this.dps[d]=s,this.vx[d]=h,this.vz[d]=c,this.tickT[d]=0,this.cr[d]=r,this.cg[d]=o,this.cb[d]=l,this.alive[d]=1}update(e,t,i,n,s,r,o){for(let l=0;l<bt;l++){if(this.alive[l]===0)continue;if(this.x[l]+=this.vx[l]*e,this.z[l]+=this.vz[l]*e,this.life[l]-=e,this.life[l]<=0){this.alive[l]=0,this.free[this.freeTop++]=l;continue}if(Math.random()<.22&&r.fireEmber(this.x[l],this.z[l],this.radius[l]*.8),this.spawnLight&&Math.random()<.55){const m=.35+Math.random()*.3;this.spawnLight(this.x[l],this.z[l],this.cr[l]*m,this.cg[l]*m,this.cb[l]*m,this.radius[l]*2,.14)}if(this.tickT[l]-=e,this.tickT[l]>0)continue;this.tickT[l]=Mu;const h=this.x[l],c=this.z[l],d=this.radius[l],u=this.dps[l]*Mu,f=i.query(h,c,d,o);for(let m=0;m<f;m++){const v=o[m];if(t.alive[v]===0)continue;const g=t.x[v]-h,p=t.z[v]-c,M=d+t.radius[v];if(g*g+p*p>M*M)continue;const T=t.damageAt(v,u);n.spawn(u,t.x[v],t.scale[v]*.7,t.z[v],!1),T&&s(v)}}}render(e){this.mesh.material.uniforms.uTime.value=e;let t=0;for(let i=0;i<bt;i++){if(this.alive[i]===0)continue;const n=t*16,s=this.radius[i];this.matArr[n]=s,this.matArr[n+5]=1,this.matArr[n+10]=s,this.matArr[n+12]=this.x[i],this.matArr[n+13]=.05,this.matArr[n+14]=this.z[i],this.matArr[n+15]=1;const r=t*3;this.colArr[r]=this.cr[i],this.colArr[r+1]=this.cg[i],this.colArr[r+2]=this.cb[i];const o=this.life[i]/this.maxLife[i];this.fadeArr[t]=Math.min(1,(1-o)*8+.4)*Math.min(1,o*4+.2),t++}this.mesh.count=t,this.mesh.instanceMatrix.needsUpdate=!0,this.colAttr.needsUpdate=!0,this.fadeAttr.needsUpdate=!0}}const ri=12,ew=2.6,Su=1;class tw{x=new Float32Array(ri);z=new Float32Array(ri);mag=new Uint8Array(ri);boss=new Uint8Array(ri);alive=new Uint8Array(ri);free=new Int32Array(ri);freeTop=0;time=0;mesh;matArr;colArr;colAttr;constructor(e){for(let n=0;n<ri;n++)this.free[n]=ri-1-n;this.freeTop=ri;const t=new sn(.8,.6,.8),i=new Fi({toneMapped:!1,vertexColors:!1});this.mesh=new At(t,i,ri),this.mesh.instanceMatrix.setUsage(Pe),this.colArr=new Float32Array(ri*3),this.colAttr=new qe(this.colArr,3),this.colAttr.setUsage(Pe),this.mesh.instanceColor=this.colAttr,this.mesh.frustumCulled=!1,this.mesh.count=0,this.mesh.renderOrder=1,this.matArr=this.mesh.instanceMatrix.array,e.add(this.mesh)}get object(){return this.mesh}reset(){this.alive.fill(0);for(let e=0;e<ri;e++)this.free[e]=ri-1-e;this.freeTop=ri}spawn(e,t,i){if(this.freeTop===0)return;const n=this.free[--this.freeTop];this.x[n]=e,this.z[n]=t,this.mag[n]=0,this.boss[n]=i?1:0,this.alive[n]=1}update(e,t,i,n,s){this.time+=e;const r=ew*n,o=r*r,l=Su*Su;for(let h=0;h<ri;h++){if(this.alive[h]===0)continue;const c=t-this.x[h],d=i-this.z[h],u=c*c+d*d;if(this.mag[h]===0&&u<=o&&(this.mag[h]=1),this.mag[h]){const f=Math.sqrt(u)||1,m=5+8/f;this.x[h]+=c/f*m*e,this.z[h]+=d/f*m*e,u<=l&&(s(this.boss[h]===1),this.alive[h]=0,this.free[this.freeTop++]=h)}}}render(){let e=0;const t=this.time;for(let i=0;i<ri;i++){if(this.alive[i]===0)continue;const n=e*16,s=t*2+i,r=Math.cos(s),o=Math.sin(s),l=1+.12*Math.sin(t*5+i);this.matArr[n]=r*l,this.matArr[n+2]=-o*l,this.matArr[n+5]=l,this.matArr[n+8]=o*l,this.matArr[n+10]=r*l,this.matArr[n+12]=this.x[i],this.matArr[n+13]=.7+Math.sin(t*3+i)*.15,this.matArr[n+14]=this.z[i],this.matArr[n+15]=1;const h=e*3;this.boss[i]===1?(this.colArr[h]=2.6,this.colArr[h+1]=1.4,this.colArr[h+2]=2.4):(this.colArr[h]=2.8,this.colArr[h+1]=2,this.colArr[h+2]=.6),e++}this.mesh.count=e,this.mesh.instanceMatrix.needsUpdate=!0,this.colAttr.needsUpdate=!0}}const iw=3,Au=[100,500,1e3],nw=["百人斬!","五百人斬!","千人斬!"],sw=[30,120,400],aw=200;class rw{count=0;timer=0;nextMilestone=0;onBanner;onPunch;constructor(e,t){this.onBanner=e,this.onPunch=t}reset(){this.count=0,this.timer=0,this.nextMilestone=0}get fever(){return this.count>=aw}onKill(){this.count++,this.timer=iw,this.onPunch();let e=0;for(;this.nextMilestone<Au.length&&this.count>=Au[this.nextMilestone];)this.onBanner(nw[this.nextMilestone]),e+=sw[this.nextMilestone],this.nextMilestone++;return e}update(e){this.count>0&&(this.timer-=e,this.timer<=0&&(this.count=0,this.nextMilestone=0))}}const Sl=5,ow=.3,Tu={zhaoyun:{char:"龍",r:.5,g:1.4,b:2.4},guanyu:{char:"義",r:.35,g:1.9,b:1.1},zhangfei:{char:"蛇",r:2.3,g:1.2,b:.5},zhugeliang:{char:"卦",r:.7,g:1.2,b:2.4},huangzhong:{char:"弓",r:2.2,g:1.6,b:.6},lvbu:{char:"戟",r:2.4,g:.5,b:.3},sunshangxiang:{char:"香",r:2.2,g:.55,b:1.05},default:{char:"武",r:1.5,g:1.4,b:1}};class lw{gauge=0;active=!1;chargeMul=1;killRate=0;chargeLockT=0;timer=0;tick=0;stormAngle=0;dashIdx=0;dashTimer=0;initDone=!1;introDone=!1;heroMusou;onActivateFx;constructor(e,t){this.heroMusou=e,this.onActivateFx=t}setHero(e){this.heroMusou=e}reset(){this.gauge=0,this.active=!1,this.timer=0,this.tick=0,this.dashIdx=0,this.dashTimer=0,this.initDone=!1,this.introDone=!1,this.chargeMul=1,this.killRate=0,this.chargeLockT=0}get ready(){return this.gauge>=100}get enemyTimeScale(){return this.active?ow:1}addKill(e){if(this.active||this.chargeLockT>0)return;this.killRate+=.25;const t=1+Math.min(1.5,e*.02),i=Math.min(t,2/Math.max(this.killRate,.5));this.gauge=Math.min(100,this.gauge+i*this.chargeMul)}addHit(){this.active||(this.gauge=Math.min(100,this.gauge+3*this.chargeMul))}activate(){return!this.ready||this.active?!1:(this.active=!0,this.timer=Sl,this.tick=0,this.stormAngle=0,this.dashIdx=0,this.dashTimer=0,this.initDone=!1,this.introDone=!1,this.gauge=0,this.onActivateFx(),!0)}update(e,t,i){if(this.killRate*=Math.exp(-e/4),this.chargeLockT>0&&(this.chargeLockT-=e),!this.active)return!1;this.timer-=e,this.tick-=e,this.dashTimer-=e;const n=Tu[this.heroMusou]??Tu.default;switch(this.introDone||(this.introDone=!0,t.effects.spawnCrest(i.x,i.z,n.char,n.r,n.g,n.b,Sl),this.heroMusou==="zhugeliang"&&t.effects.spawnBaguaSigil(i.x,i.z,Sl)),t.effects.spawnMusouLight?.(i.x,i.z,n.r*.32,n.g*.32,n.b*.32,6.5,.07),this.heroMusou){case"zhaoyun":this.runZhaoyun(t,i);break;case"guanyu":this.runGuanyu(t,i);break;case"zhangfei":this.runZhangfei(t,i);break;case"zhugeliang":this.runZhuge(t,i);break;case"huangzhong":this.runHuang(t,i);break;case"lvbu":this.runLvbu(t,i);break;case"sunshangxiang":this.runSunshangxiang(t,i);break;default:this.runCommon(t,i);break}return this.timer<=0?(this.active=!1,this.chargeLockT=6,t.effects.spawnTripleShock(i.x,i.z,30,n.r,n.g,n.b),t.effects.spawnRing(i.x,i.z,26,2.2,1.7,.8,.7),t.effects.spawnMusouLight?.(i.x,i.z,n.r*.6,n.g*.6,n.b*.6,15,.5),this.aoe(t,i.x,i.z,30,400*t.stats.damageMul,6),!0):!1}runCommon(e,t){if(this.tick>0)return;this.tick=.1,this.stormAngle+=.9;const i=Math.cos(this.stormAngle),n=Math.sin(this.stormAngle);e.effects.spawnSlashArc(t.x,t.z,i,n,7,1.3,1.6,1.2,2.4,.24),this.aoe(e,t.x,t.z,7.5,60*e.stats.damageMul,0)}runZhaoyun(e,t){if(this.runCommon(e,t),this.dashTimer>0)return;this.dashTimer=.5;const i=this.dashIdx/8*Math.PI*2;this.dashIdx++;const n=Math.cos(i),s=Math.sin(i);t.x+=n*3.2,t.z+=s*3.2,t.faceX=n,t.faceZ=s,e.effects.spawnThrust(t.x,t.z,n,s,9,2.2,1.4,1.9,2.6);for(let r=0;r<4;r++)e.effects.spawnFlameTrail(t.x-n*r*1.8,t.z-s*r*1.8,.5,1.3,2.4);this.capsule(e,t.x,t.z,n,s,9,1.2,90*e.stats.damageMul)}runGuanyu(e,t){if(this.tick>0)return;this.tick=.06,this.stormAngle+=.55;const i=Math.cos(this.stormAngle),n=Math.sin(this.stormAngle);e.effects.spawnSlashArc(t.x,t.z,i,n,9.5,1.5,.6,2.2,1.1,.2),e.effects.spawnFlameTrail(t.x+i*9,t.z+n*9,.3,1.9,1.1),this.aoe(e,t.x,t.z,9.5,55*e.stats.damageMul,5)}runZhangfei(e,t){if(!this.initDone){this.initDone=!0,this.stunAll(e,t.x,t.z,30,3),e.effects.spawnTripleShock(t.x,t.z,28,2.4,1.5,.6);for(let i=0;i<28;i++){const n=i/28*Math.PI*2;e.particles.dust(t.x+Math.cos(n)*3,t.z+Math.sin(n)*3)}this.aoe(e,t.x,t.z,30,90*e.stats.damageMul,12)}this.tick>0||(this.tick=.5,e.effects.spawnRing(t.x,t.z,14,2.2,1.2,.6,.4),this.aoe(e,t.x,t.z,26,70*e.stats.damageMul,4))}runZhuge(e,t){if(this.tick>0)return;this.tick=.12;const i=e.enemies.randomAlive();if(i<0)return;const n=e.enemies.x[i],s=e.enemies.z[i];e.effects.spawnLightning(n,s),this.aoe(e,n,s,3,80*e.stats.damageMul,0)}runHuang(e,t){if(this.tick>0)return;this.tick=.08;const i=12,n=this.stormAngle;this.stormAngle+=.4;const s=30*e.stats.damageMul;for(let r=0;r<i;r++){const o=n+r/i*Math.PI*2;e.projectiles.spawn(t.x,t.z,Math.cos(o),Math.sin(o),18,s,.5,3,1.6,Js,2.2,1.6,.7,1.6,.55)}for(let r=0;r<3;r++){const o=4+Math.random()*16,l=Math.random()*Math.PI*2,h=t.x+Math.cos(l)*o,c=t.z+Math.sin(l)*o;e.effects.spawnMeteorArrow(h,c,2.2,1.6,.6,.45+Math.random()*.25),this.aoe(e,h,c,2.4,s*.7,2)}}runSunshangxiang(e,t){if(!(this.tick>0)){this.tick=.1,this.stormAngle+=.7;for(let i=0;i<3;i++){const n=this.stormAngle+i/3*Math.PI*2;e.effects.spawnSlashArc(t.x,t.z,Math.cos(n),Math.sin(n),6.5,.7,2.2,.55,1.05,.2)}if(this.aoe(e,t.x,t.z,7,62*e.stats.damageMul,4),this.dashTimer<=0){this.dashTimer=.8;const i=12,n=26*e.stats.damageMul;for(let s=0;s<i;s++){const r=this.stormAngle+s/i*Math.PI*2;e.projectiles.spawn(t.x,t.z,Math.cos(r),Math.sin(r),17,n,.5,3,1.5,Js,2.3,1,.85,1.6,.55)}}}}runLvbu(e,t){e.particles.dust(t.x,t.z),!(this.tick>0)&&(this.tick=.28,e.effects.spawnFireWall(t.x,t.z,t.faceX,t.faceZ,6,1.5,.5),e.effects.spawnRing(t.x,t.z,2.6,2.2,1,.4,.3),this.aoe(e,t.x,t.z,7,85*e.stats.damageMul*2.3,6))}aoe(e,t,i,n,s,r){const o=e.enemies,l=e.hash.query(t,i,n,e.scratch);for(let h=0;h<l;h++){const c=e.scratch[h];if(o.alive[c]===0)continue;const d=o.x[c]-t,u=o.z[c]-i,f=d*d+u*u;if(f>n*n)continue;const m=o.damageAt(c,s);if(r>0){const v=Math.sqrt(f)||1;o.push(c,d/v,u/v,r)}m&&e.onKill(c)}}stunAll(e,t,i,n,s){const r=e.enemies,o=e.hash.query(t,i,n,e.scratch);for(let l=0;l<o;l++){const h=e.scratch[l];r.alive[h]===0||r.boss[h]===1||r.stun[h]<s&&(r.stun[h]=s)}}capsule(e,t,i,n,s,r,o,l){const h=e.enemies,c=t+n*r,d=i+s*r,u=(t+c)*.5,f=(i+d)*.5,m=e.hash.query(u,f,r*.5+o+1.2,e.scratch);for(let v=0;v<m;v++){const g=e.scratch[v];if(h.alive[g]===0)continue;const p=o+h.radius[g],M=hw(h.x[g],h.z[g],t,i,c,d),T=t+(c-t)*M,w=i+(d-i)*M,A=h.x[g]-T,_=h.z[g]-w;if(A*A+_*_>p*p)continue;const E=h.damageAt(g,l);h.push(g,n,s,6),E&&e.onKill(g)}}}function hw(a,e,t,i,n,s){const r=n-t,o=s-i,l=r*r+o*o;if(l<=0)return 0;let h=((a-t)*r+(e-i)*o)/l;return h<0?h=0:h>1&&(h=1),h}const jf={yuanshao:{name:"원소",hanja:"袁紹",charIndex:14,sheet:Zi,pattern:"fan",hp:6e3,speed:2.5,contact:14,radius:1.4,tr:1.1,tg:1.1,tb:1.4},xiahoudun:{name:"하후돈",hanja:"夏侯惇",charIndex:14,sheet:Bs,pattern:"dash",hp:6e3,speed:2.9,contact:16,radius:1.45,tr:1.5,tg:.85,tb:.8},sunce:{name:"손책",hanja:"孫策",charIndex:12,sheet:Zi,pattern:"rush",hp:5800,speed:3.3,contact:15,radius:1.35,tr:1,tg:1.2,tb:1.5},dongzhuo:{name:"동탁",hanja:"董卓",charIndex:4,sheet:Zi,pattern:"firezone",hp:3600,speed:2.1,contact:18,radius:1.6,tr:1.4,tg:1,tb:.9},simayi:{name:"사마의",hanja:"司馬懿",charIndex:11,sheet:Zi,pattern:"delaybolt",hp:4e3,speed:2.3,contact:16,radius:1.5,tr:.9,tg:1.05,tb:1.5},zhouyu:{name:"주유",hanja:"周瑜",charIndex:18,sheet:Zi,pattern:"firezone",hp:3600,speed:2.4,contact:16,radius:1.5,tr:2,tg:1,tb:.45},lvbu:{name:"여포",hanja:"呂布",charIndex:10,sheet:Zi,pattern:"lvbu",hp:7500,speed:3.6,contact:20,radius:1.5,tr:1.5,tg:.9,tb:1.1},huaxiong:{name:"화웅",hanja:"華雄",charIndex:4,sheet:Zi,pattern:"dash",hp:5200,speed:2.7,contact:16,radius:1.45,tr:1.7,tg:.5,tb:.42},dianwei:{name:"전위",hanja:"典韋",charIndex:6,sheet:Bs,pattern:"dash",hp:5e3,speed:2.8,contact:17,radius:1.4,tr:1.4,tg:1.1,tb:.9},gaoshun:{name:"고순",hanja:"高順",charIndex:8,sheet:Bs,pattern:"fan",hp:5e3,speed:2.5,contact:15,radius:1.35,tr:1.2,tg:1.15,tb:1},xiahouyuan:{name:"하후연",hanja:"夏侯淵",charIndex:15,sheet:Bs,pattern:"delaybolt",hp:5e3,speed:2.6,contact:15,radius:1.4,tr:1.45,tg:.95,tb:.85},lumeng:{name:"여몽",hanja:"呂蒙",charIndex:8,sheet:Zi,pattern:"firezone",hp:5e3,speed:2.5,contact:16,radius:1.45,tr:.95,tg:1.3,tb:1.05},luxun:{name:"육손",hanja:"陸遜",charIndex:9,sheet:Zi,pattern:"fan",hp:5e3,speed:2.5,contact:15,radius:1.4,tr:2,tg:1.05,tb:.5}},Eu=["dianwei","gaoshun","xiahouyuan","lumeng","luxun"],cw=192;class dw{active=!1;idx=-1;typeId="";def=null;atlas;onWarn;atk1=0;atk2=0;atk3=0;dashState=0;dashT=0;dashDx=0;dashDz=0;boltX=new Float32Array(3);boltZ=new Float32Array(3);boltT=-1;groggyT=0;groggyCd=0;constructor(e,t){this.atlas=e,this.onWarn=t}get name(){return this.def?this.def.name:""}get hanja(){return this.def?this.def.hanja:""}hpFrac(e){if(!this.active||this.idx<0)return 0;const t=e.enemies;return t.alive[this.idx]===0?0:Math.max(0,t.hp[this.idx]/t.maxHp[this.idx])}spawn(e,t,i,n,s){const r=jf[e];if(!r)return;const o=i.enemies,l=r.hp*(1+.08*t),h=o.spawn(n,s-16,l,r.speed,r.radius,r.contact,40,2.2,r.sheet,r.charIndex*cw,0);h<0||(o.boss[h]=1,o.kbResist[h]=.9,o.controlled[h]=1,o.tr[h]=r.tr,o.tg[h]=r.tg,o.tb[h]=r.tb,o.labels[h]=`${r.name} ${r.hanja}`,o.markSpecial(h),this.idx=h,this.typeId=e,this.def=r,this.active=!0,this.atk1=2,this.atk2=r.pattern==="lvbu"?1.15:3.5,this.atk3=6,this.dashState=0,this.boltT=-1,this.groggyT=0,this.groggyCd=4,i.effects.spawnRing(n,s,24,2.4,1.2,.6,.9),i.effects.spawnLight?.(n,s-16,r.tr*.45,r.tg*.45,r.tb*.45,8,.55),this.onWarn(r.name,r.hanja))}update(e,t,i,n,s){if(!this.active)return;const r=t.enemies;if(r.alive[this.idx]===0){this.active=!1,this.idx=-1;return}const o=this.idx,l=this.def;if(this.groggyCd-=e,this.groggyT>0){this.groggyT-=e,r.groggy[o]=1,r.tr[o]=.55,r.tg[o]=.78,r.tb[o]=1.28,this.groggyT<=0&&(r.groggy[o]=0,r.tr[o]=l.tr,r.tg[o]=l.tg,r.tb[o]=l.tb);return}let h=n-r.x[o],c=s-r.z[o];const d=Math.hypot(h,c)||1;if(h/=d,c/=d,this.dashState===2)r.x[o]+=this.dashDx*18*e,r.z[o]+=this.dashDz*18*e;else if(this.dashState===1)r.flash[o]=.6;else{const u=l.pattern==="fan"?d>9?1:-.2:1;r.x[o]+=h*l.speed*u*e,r.z[o]+=c*l.speed*u*e}switch(this.atk1-=e,this.atk2-=e,this.atk3-=e,l.pattern){case"fan":this.updateFan(t,i,o,h,c);break;case"firezone":this.updateFirezone(t,i,o,n,s,h,c);break;case"dash":this.updateDash(e,t,i,o,h,c);break;case"rush":this.updateRush(e,t,o,h,c);break;case"delaybolt":this.updateDelaybolt(e,t,i,o,n,s);break;case"lvbu":this.updateLvbu(e,t,i,o,n,s,h,c);break}}tryGroggy(e,t){if(this.groggyCd>0||this.groggyT>0)return;const i=e.enemies,n=i.hp[t]/i.maxHp[t]<.25;this.groggyT=n?1.2:1.8,this.groggyCd=this.groggyT+5,i.groggy[t]=1,i.hitPunch[t]=1,e.effects.spawnCrest(i.x[t],i.z[t],"隙",.6,.85,1.4,this.groggyT),e.particles.dust(i.x[t],i.z[t])}updateFan(e,t,i,n,s){const r=e.enemies;if(this.atk1<=0){this.atk1=2.4;const o=Math.atan2(s,n);for(let l=-3;l<=3;l++){const h=o+l*.16;t.spawn(r.x[i],r.z[i],Math.cos(h),Math.sin(h),10,12,!1,Ni)}e.effects.spawnRing(r.x[i],r.z[i],3,1.4,1.2,2,.4),e.effects.spawnTelegraph(nu,r.x[i],r.z[i],Math.atan2(s,n),22,22,.62,.5),this.tryGroggy(e,i)}if(this.atk2<=0){this.atk2=5.2;const o=Math.atan2(s,n);for(let l=-1;l<=1;l++){const h=o+l*.32;t.spawn(r.x[i],r.z[i],Math.cos(h),Math.sin(h),5.4,16,!0,vc)}e.effects.spawnRing(r.x[i],r.z[i],4.2,.7,2.1,1.2,.55)}}updateFirezone(e,t,i,n,s,r,o){const l=e.enemies;if(this.atk1<=0){this.atk1=3.2;for(let h=0;h<4;h++){const c=e.rng.next()*Math.PI*2,d=e.rng.range(0,5),u=n+Math.cos(c)*d,f=s+Math.sin(c)*d;e.effects.spawnTelegraph(Ph,u,f,0,6,6,0,.6),e.zones.spawn(u,f,3,3.2,16,2.6,.7,.2)}e.effects.spawnRing(l.x[i],l.z[i],4,2.4,1,.4,.5),this.tryGroggy(e,i)}if(this.atk2<=0){this.atk2=4.6;const h=Math.atan2(o,r);t.spawn(l.x[i],l.z[i],r,o,7.2,24,!1,pn);for(const c of[-.32,.32]){const d=h+c;t.spawn(l.x[i],l.z[i],Math.cos(d),Math.sin(d),8.5,17,!1,ho)}e.effects.spawnRing(l.x[i],l.z[i],4.8,2.6,.75,.2,.55)}}updateDash(e,t,i,n,s,r){const o=t.enemies;if(this.dashState===1?(this.dashT-=e,this.dashT<=0&&(this.dashState=2,this.dashT=.5,o.damage[n]=46,t.effects.spawnThrust(o.x[n],o.z[n],this.dashDx,this.dashDz,12,3.2,2.2,.7,.6),t.effects.spawnDecal?.(o.x[n],o.z[n],4,2.4,1,.4))):this.dashState===2&&(this.dashT-=e,t.particles.dust(o.x[n],o.z[n]),Math.random()<.4&&t.effects.spawnDecal?.(o.x[n],o.z[n],2.6,2.2,.9,.35),this.dashT<=0&&(this.dashState=0,o.damage[n]=this.def.contact,this.tryGroggy(t,n))),this.atk1<=0&&this.dashState===0&&(this.atk1=3,this.dashState=1,this.dashT=.55,this.dashDx=s,this.dashDz=r,t.effects.spawnTelegraph(dl,o.x[n]+s*5,o.z[n]+r*5,Math.atan2(r,s),10,4.2,0,.55)),this.atk2<=0){this.atk2=3.4;const l=Math.atan2(r,s);for(let h=-1;h<=1;h++){const c=l+h*.22;i.spawn(o.x[n],o.z[n],Math.cos(c),Math.sin(c),11,14,!1,pn)}}}updateRush(e,t,i,n,s){const r=t.enemies;this.dashState===2&&(this.dashT-=e,this.dashT<=0&&(this.dashState=0,r.damage[i]=this.def.contact,this.tryGroggy(t,i))),this.atk1<=0&&this.dashState===0&&(this.atk1=1.6,this.dashState=2,this.dashT=.3,this.dashDx=n,this.dashDz=s,r.damage[i]=30,t.effects.spawnTelegraph(dl,r.x[i]+n*4,r.z[i]+s*4,Math.atan2(s,n),8,3.4,0,.3),t.effects.spawnThrust(r.x[i],r.z[i],n,s,7,2.4,.5,1.25,2.2,.34,!1))}updateDelaybolt(e,t,i,n,s,r){if(t.enemies,this.atk1<=0&&this.boltT<0){this.atk1=3.6;for(let o=0;o<3;o++){const l=t.rng.next()*Math.PI*2,h=t.rng.range(0,6);this.boltX[o]=s+Math.cos(l)*h,this.boltZ[o]=r+Math.sin(l)*h,t.effects.spawnTelegraph(Ph,this.boltX[o],this.boltZ[o],0,6,6,0,.7)}this.boltT=.7}if(this.boltT>=0&&(this.boltT-=e,this.boltT<=0)){this.boltT=-1;for(let o=0;o<3;o++){t.effects.spawnLightning(this.boltX[o],this.boltZ[o],.7,1.2,2.6,9);for(let l=0;l<6;l++){const h=l/6*Math.PI*2;i.spawn(this.boltX[o],this.boltZ[o],Math.cos(h),Math.sin(h),5,16,!1,Xs)}}this.tryGroggy(t,n)}}updateLvbu(e,t,i,n,s,r,o,l){const h=t.enemies;if(this.dashState===1?(this.dashT-=e,this.dashT<=0&&(this.dashState=2,this.dashT=.45,h.damage[n]=40,t.effects.spawnThrust(h.x[n],h.z[n],this.dashDx,this.dashDz,10,3,2.2,.8,.7))):this.dashState===2&&(this.dashT-=e,t.particles.dust(h.x[n],h.z[n]),this.dashT<=0&&(this.dashState=0,h.damage[n]=this.def.contact,this.tryGroggy(t,n))),this.atk1<=0&&this.dashState===0&&(this.atk1=4.5,this.dashState=1,this.dashT=.6,this.dashDx=o,this.dashDz=l,t.effects.spawnTelegraph(dl,h.x[n]+o*4.5,h.z[n]+l*4.5,Math.atan2(l,o),9,4.2,0,.6)),this.atk2<=0){this.atk2=3;const c=Math.atan2(l,o);t.effects.spawnTelegraph(nu,h.x[n],h.z[n],c,20,20,.5,.4);for(let d=-2;d<=2;d++){const u=c+d*.2;i.spawn(h.x[n],h.z[n],Math.cos(u),Math.sin(u),13,14,!1,Xs)}this.tryGroggy(t,n)}if(this.atk3<=0){this.atk3=11;const c=Mi.general_blade,d=this.atlas.soldierBlockPx(c.charIndex);for(let u=0;u<3;u++){const f=t.rng.next()*Math.PI*2,m=3+t.rng.range(0,3);h.spawn(s+Math.cos(f)*m,r+Math.sin(f)*m,c.hp*2,c.speed,c.radius,c.damage,c.gemValue,c.worldScale,0,d,0)}t.effects.spawnRing(h.x[n],h.z[n],5,2,.8,1.4,.5)}}}const zs=40;class uw{d;cartTimes=[];cartFired=0;rush4=!1;rush7=!1;meteorCooldown=0;busyT=0;rushRemaining=0;rushAcc=0;rushDirX=0;rushDirZ=0;showerRemaining=0;showerAcc=0;mx=new Float32Array(zs);mz=new Float32Array(zs);mt=new Float32Array(zs);mActive=new Uint8Array(zs);constructor(e){this.d=e,this.reset()}reset(){const e=this.d.rng;this.cartTimes=[e.range(120,300),e.range(300,480)].sort((t,i)=>t-i),this.cartFired=0,this.rush4=!1,this.rush7=!1,this.meteorCooldown=0,this.busyT=0,this.rushRemaining=0,this.showerRemaining=0,this.mActive.fill(0)}update(e,t){this.busyT>0&&(this.busyT-=e);const i=this.busyT<=0;i&&this.cartFired<this.cartTimes.length&&t>=this.cartTimes[this.cartFired]?(this.cartFired++,this.spawnSupplyCart(t),this.busyT=14):i&&!this.rush4&&t>=240?(this.rush4=!0,this.startRush(),this.busyT=32):i&&!this.rush7&&t>=420?(this.rush7=!0,this.startRush(),this.busyT=32):i&&t>=360&&(this.meteorCooldown-=e,this.meteorCooldown<=0&&this.showerRemaining<=0&&(this.meteorCooldown=this.d.rng.range(35,55),this.startMeteorShower(),this.busyT=16)),this.rushRemaining>0&&this.tickRush(e,t),this.showerRemaining>0&&this.tickShower(e),this.tickMeteorImpacts(e)}forceRush(){this.startRush()}forceMeteor(){this.startMeteorShower()}forceCart(e){this.spawnSupplyCart(e)}startRush(){const e=this.d.rng.next()*Math.PI*2;this.rushDirX=Math.cos(e),this.rushDirZ=Math.sin(e),this.rushRemaining=30,this.rushAcc=0,this.d.banner(we()==="en"?"Yellow Turban Horde 黃巾大軍":"황건 대군 黃巾大軍","#e8c667")}tickRush(e,t){this.rushRemaining-=e,this.rushAcc+=e*14;const i=this.d.playerX(),n=this.d.playerZ(),s=t/60,r=1+.13*s+.011*s*s;for(;this.rushAcc>=1;){this.rushAcc-=1;const o=this.d.rng.range(-16,16),l=-this.rushDirZ,h=this.rushDirX,c=i-this.rushDirX*26+l*o,d=n-this.rushDirZ*26+h*o,u=this.d.rng.next()<.7?Mi.worker:Mi.runner;this.d.enemies.spawn(c,d,u.hp*r,u.speed,u.radius,u.damage,u.gemValue,u.worldScale,Fh,this.d.atlas.soldierBlockPx(u.charIndex),0)}}startMeteorShower(){this.showerRemaining=15,this.showerAcc=0,this.d.banner(we()==="en"?"Meteor Shower 流星雨":"유성우 流星雨","#ff9a3c")}tickShower(e){for(this.showerRemaining-=e,this.showerAcc+=e*3;this.showerAcc>=1;)this.showerAcc-=1,this.queueMeteor()}queueMeteor(){let e=-1;for(let l=0;l<zs;l++)if(this.mActive[l]===0){e=l;break}if(e<0)return;const t=this.d.playerX(),i=this.d.playerZ(),n=this.d.rng.next()*Math.PI*2,s=this.d.rng.range(0,15),r=t+Math.cos(n)*s,o=i+Math.sin(n)*s;this.mx[e]=r,this.mz[e]=o,this.mt[e]=1,this.mActive[e]=1,this.d.effects.spawnRing(r,o,3.2,2,.7,.2,1)}tickMeteorImpacts(e){for(let t=0;t<zs;t++){if(this.mActive[t]===0||(this.mt[t]-=e,this.mt[t]>0))continue;this.mActive[t]=0;const i=this.mx[t],n=this.mz[t];this.d.effects.spawnRing(i,n,4.5,2.6,1.2,.4,.5),this.d.zones.spawn(i,n,3.5,.5,120,2.6,.8,.2),this.d.particles.burst(i,n,2.6,1.2,.4,24,7);const s=this.d.playerX()-i,r=this.d.playerZ()-n;s*s+r*r<3.5*3.5&&this.d.hitPlayer(28)}}spawnSupplyCart(e){const t=this.d.enemies,i=e/60,n=1+.13*i+.011*i*i,s=this.d.playerX(),r=this.d.playerZ(),o=this.d.rng.next()*Math.PI*2,l=Mi.runner,h=s+Math.cos(o)*12,c=r+Math.sin(o)*12,d=t.spawn(h,c,220*n,3.6,.7,0,20,1.3,Fh,this.d.atlas.soldierBlockPx(l.charIndex),0);d<0||(t.flee[d]=1,t.cart[d]=1,t.tr[d]=2.4,t.tg[d]=1.9,t.tb[d]=.6,t.labels[d]=we()==="en"?"Supply Cart 補給馬車":"보급 마차 補給馬車",t.markSpecial(d),this.d.effects.spawnRing(h,c,4,2.4,1.9,.6,.6),this.d.banner(we()==="en"?"Supply Cart — don’t let it escape!":"보급 마차 — 놓치지 마라!","#ffe14d"))}}const oi=32,dn=0,Ns=1,Wn=2,wa=3,Ma=4,kr=5,Xn=6.5,Cu=3,fw=25,Ru=5.2,pw=["화약통 火藥","만두 수레 饅頭","군신 사당 軍神祠","목책 木柵","동라 銅鑼","전고 戰鼓"],mw=["Powder Keg 火藥","Bun Cart 饅頭","War-God Shrine 軍神祠","Palisade 木柵","War Gong 銅鑼","War Drum 戰鼓"],gw=["공격 → 폭파","회복 +30%","버프 획득","공격 → 돌파","접촉 → 젬 흡수","접근 → 적 기절"],vw=["Attack → explode","Heal +30%","Gain buff","Attack → break","Touch → pull gems","Near → stun foes"],xw=a=>we()==="en"?mw[a]:pw[a],bw=a=>we()==="en"?vw[a]:gw[a],Pu=[2.5,2.6,3.8,2.6,2.6,2.6],yw=[[1.5,.5,.18,2.5],[.55,1.25,.7,2.2],[1.5,1.05,.4,3.4],null,[1.7,1.3,.4,2.6],[1.4,.9,.5,2.4]];class _w{d;x=new Float32Array(oi);z=new Float32Array(oi);kind=new Uint8Array(oi);alive=new Uint8Array(oi);igniteT=new Float32Array(oi);drumCd=new Float32Array(oi);spawnTimer=4;batch;shadows;constructor(e,t){this.d=t,this.batch=new Nf(e,oi),this.shadows=new fc(oi),e.add(this.shadows.mesh)}reset(){this.alive.fill(0),this.igniteT.fill(0),this.drumCd.fill(0),this.spawnTimer=4}spawnObject(e){let t=-1;for(let h=0;h<oi;h++)if(this.alive[h]===0){t=h;break}if(t<0)return;const i=this.d.rng,n=i.next(),s=(this.d.playerHpFrac?.()??1)<.4?.6:.44;let r=dn;n<.07?r=Ma:n<.15?r=kr:n<.24?r=Wn:e>90&&n<s?r=Ns:n>.72&&(r=wa);const o=i.next()*Math.PI*2,l=i.range(8,16);this.x[t]=this.d.playerX()+Math.cos(o)*l,this.z[t]=this.d.playerZ()+Math.sin(o)*l,this.kind[t]=r,this.igniteT[t]=0,this.drumCd[t]=0,this.alive[t]=1}placeAt(e,t,i){let n=-1;for(let s=0;s<oi;s++)if(this.alive[s]===0){n=s;break}return n<0?!1:(this.x[n]=t,this.z[n]=i,this.kind[n]=e,this.igniteT[n]=0,this.drumCd[n]=0,this.alive[n]=1,!0)}spawnDumplingAt(e,t){return this.placeAt(Ns,e,t)}spawnGongAt(e,t){return this.placeAt(Ma,e,t)}update(e,t){this.spawnTimer-=e,this.spawnTimer<=0&&(this.spawnTimer=this.d.rng.range(6,11),this.spawnObject(t));const i=this.d.playerX(),n=this.d.playerZ(),s=this.d.playerRadius+.9,r=this.d.particles;for(let o=0;o<oi;o++){if(this.alive[o]===0)continue;const l=this.kind[o],h=this.x[o],c=this.z[o];if(l===Ns?Math.random()<9*e&&r.steam(h,c+.2):l===Wn?Math.random()<7*e&&r.incense(h,c):l===dn&&Math.random()<3.5*e&&r.spark(h,c),l===dn&&this.igniteT[o]>0&&(this.igniteT[o]-=e,Math.random()<40*e&&r.spark(h,c+.5),this.igniteT[o]<=0)){this.explode(o);continue}if(l===dn||l===wa)continue;if(l===kr){this.drumCd[o]>0&&(this.drumCd[o]-=e);const f=i-h,m=n-c;this.drumCd[o]<=0&&f*f+m*m<=36&&this.beatDrum(o);continue}const d=i-h,u=n-c;d*d+u*u<=s*s&&this.interact(o)}}emitMarkers(e,t,i){const n=Ru*Ru;for(let s=0;s<oi;s++){if(this.alive[s]===0)continue;const r=this.kind[s],o=this.x[s],l=this.z[s],h=yw[r];h&&e.glowAt(o,l,h[3],h[0],h[1],h[2]),e.name(xw(r),o,Pu[r],l),r===Wn?e.interactRing(o,l,1.5,1.05,.4,!0):r===Ma?e.interactRing(o,l,1.5,1.2,.5,!0):r===kr&&e.interactRing(o,l,1.4,.85,.4,this.drumCd[s]<=0);const c=t-o,d=i-l;c*c+d*d<=n&&e.hint(bw(r),o,Pu[r]+1,l)}}interact(e){if(this.kind[e]===Ns)this.d.heal(.3),this.d.particles.burst(this.x[e],this.z[e],1.6,2.2,1,12,3),this.d.banner(we()==="en"?"Bun Cart 饅頭":"만두 수레 饅頭","#9affc0");else if(this.kind[e]===Wn){const i=["attack","speed","musou"][this.d.rng.int(3)];this.d.applyBuff(i,30),this.d.effects.spawnRing(this.x[e],this.z[e],6,2.4,2,.8,.7);const n=we()==="en",s=i==="attack"?n?"Attack Up":"공격 강화":i==="speed"?n?"Gale":"질풍":n?"Musou Charge":"무쌍 충전";this.d.banner(`${n?"War-God Shrine":"군신 사당"} · ${s}`,"#e8c667")}else this.kind[e]===Ma&&(this.d.magnetizeGems?.(),this.d.effects.spawnRing(this.x[e],this.z[e],10,2,1.5,.5,.6),this.d.effects.spawnRing(this.x[e],this.z[e],18,1.8,1.35,.45,.8),this.d.banner(we()==="en"?"War Gong 銅鑼":"동라 銅鑼","#ffd86b"));this.alive[e]=0}beatDrum(e){this.drumCd[e]=fw,this.d.stunEnemies?.(this.x[e],this.z[e],9,.8),this.d.effects.spawnRing(this.x[e],this.z[e],9,1.5,.85,.4,.55),this.d.particles.burst(this.x[e],this.z[e],1.3,.85,.4,16,4),this.d.banner(we()==="en"?"War Drum 戰鼓":"전고 戰鼓","#e4a05b")}hitAt(e,t,i){let n=!1;for(let s=0;s<oi;s++){if(this.alive[s]===0||this.kind[s]!==dn&&this.kind[s]!==wa)continue;const r=e-this.x[s],o=t-this.z[s],l=i+.7;r*r+o*o<=l*l&&(this.kind[s]===dn?this.igniteT[s]<=0&&(this.igniteT[s]=Cu,this.d.effects.spawnRing(this.x[s],this.z[s],1.4,2.2,1.4,.5,.25)):this.breakPalisade(s),n=!0)}return n}explode(e){const t=this.x[e],i=this.z[e];this.alive[e]=0,this.igniteT[e]=0,this.d.effects.spawnRing(t,i,Xn,2.6,1,.3,.55),this.d.effects.spawnRing(t,i,Xn*.55,2.9,1.5,.6,.35),this.d.effects.spawnDecal?.(t,i,Xn*.8,.5,.28,.14),this.d.effects.spawnLight?.(t,i,2.4,1.15,.4,Xn*1.3,.32),this.d.particles.burst(t,i,2.6,1.1,.3,42,9),this.d.damageArea(t,i,Xn,120);for(let n=0;n<oi;n++){if(this.alive[n]===0||this.kind[n]!==dn||this.igniteT[n]>0)continue;const s=this.x[n]-t,r=this.z[n]-i;s*s+r*r<=Xn*Xn&&(this.igniteT[n]=.3)}}breakPalisade(e){const t=this.x[e],i=this.z[e];this.alive[e]=0,this.d.effects.spawnRing(t,i,2.8,1.6,1.05,.45,.3),this.d.particles.burst(t,i,1.5,.85,.35,22,5),this.d.damageArea(t,i,2.5,35),this.d.banner(we()==="en"?"Palisade Broken 木柵":"목책 돌파 木柵","#e4a05b")}render(e){this.batch.begin(),this.shadows.begin();for(let t=0;t<oi;t++){if(this.alive[t]===0)continue;if(this.kind[t]===dn){let n=1.12;if(this.igniteT[t]>0){const s=2+Math.max(0,Cu-this.igniteT[t])*3.5;n=Math.sin(e*s*Math.PI*2)>0?2.3:.7}this.batch.push(Ls.powderCart,this.x[t],this.z[t],2.4,2,n)}else this.kind[t]===Ns?this.batch.push(Ls.dumplingCart,this.x[t],this.z[t],2.5,2.1,1.18):this.kind[t]===Wn?this.batch.push(Ls.shrine,this.x[t],this.z[t],2.8,3.3,1.13):this.kind[t]===Ma?this.batch.push(Ls.gong,this.x[t],this.z[t],2.4,2.2,1.1):this.kind[t]===kr?this.batch.push(Ls.warDrum,this.x[t],this.z[t],2.4,2.2,1.1):this.batch.push(Ls.palisade,this.x[t],this.z[t],3.7,2.15,1.05);const i=this.kind[t]===wa?1.55:this.kind[t]===Wn?1.08:.92;this.shadows.push(this.x[t],this.z[t],i)}this.batch.end(),this.shadows.end()}get visibleCount(){let e=0;for(let t=0;t<oi;t++)e+=this.alive[t];return e}testShowcase(e,t){this.alive.fill(0);const i=[[-4.2,-3,dn],[4.2,-3,Ns],[-4.2,3.2,Wn],[4.2,3.2,wa]];for(let n=0;n<i.length;n++)this.x[n]=e+i[n][0],this.z[n]=t+i[n][1],this.kind[n]=i[n][2],this.alive[n]=1}}const ww={yuanshao:{appear:[{ko:"하북의 대군이다. 관도의 둑을 넘을 성싶으냐.",en:"The host of Hebei. Think you to cross the Guandu dike?"},{ko:"사세삼공의 이름 앞이다. 무릎이 먼저 꺾일 것이다.",en:"Four generations of ministers stand here — your knees break first."}],death:[{ko:"군세는 컸으나… 내 결단이 늦었구나.",en:"My armies were vast… my resolve came too late."},{ko:"옳은 쪽을 고를 하루가… 이제는 없구나.",en:"The day left to choose the right side… is gone."}]},dongzhuo:{appear:[{ko:"낙양을 불사른 이 몸이 두렵지 않으냐!",en:"I burned Luoyang to ash. Do you not fear me?"},{ko:"폐립도 내 뜻이었다. 네 목숨도 그러하리라.",en:"I unmade emperors at will — your life is no different."}],death:[{ko:"재로 세운 권세가… 재로 돌아가는가.",en:"Power raised from ash… returns to ash."},{ko:"미오의 곳간이… 나보다 오래 남겠구나.",en:"The granaries of Mei… will outlast me."}]},lvbu:{appear:[{ko:"천하의 여포다. 나를 당할 자 있거든 나오라!",en:"I am Lü Bu. Let any who can match me step forth!"},{ko:"방천극의 무게를 재려는 눈이 또 하나 늘었군.",en:"Another pair of eyes come to weigh my halberd."}],death:[{ko:"적토마여… 나를 두고 어디로 가느냐.",en:"Red Hare… where do you go, leaving me behind?"},{ko:"가까이 둔 칼이… 끝내 나를 겨눴는가.",en:"The blade I kept close… turned on me at last."}]},xiahoudun:{appear:[{ko:"부모의 눈을 화살째 삼킨 하후돈이다!",en:"Xiahou Dun — I swallowed my own eye, arrow and all!"},{ko:"내 한 발은 주공 막사 앞에 박혔다. 물러서지 않는다.",en:"My foot is planted before my lord’s tent — I do not retreat."}],death:[{ko:"남은 한 눈에… 주공의 깃발이 흐려진다.",en:"In my one eye… my lord’s banner grows dim."},{ko:"막사 앞… 첫 한 발을 이제야 뒤로 떼는가.",en:"Before the tent… now at last my foot steps back."}]},sunce:{appear:[{ko:"강동은 내가 세웠다. 소패왕의 창을 받아라!",en:"I forged Jiangdong. Take the Little Conqueror’s spear!"},{ko:"낡은 부곡이 노를 잡았다. 새 깃발이 그 뒤를 친다!",en:"Old retainers man the oars — the new banner strikes behind!"}],death:[{ko:"강동을 아우에게… 손권, 뒤를 맡긴다.",en:"Jiangdong to my brother… Sun Quan, hold it."},{ko:"너무 빨리 열린 문이… 나를 삼키는구나.",en:"The gate that opened too fast… swallows me now."}]},simayi:{appear:[{ko:"죽은 공명도 산 중달을 이기지 못했다.",en:"Even dead Kongming never bested the living Zhongda."},{ko:"낙엽은 담 밑까지 몰아 한 번에 거둔다.",en:"I sweep the leaves to the wall, then take them all at once."}],death:[{ko:"때를 기다린 내가… 그 때에 잡히는구나.",en:"I who waited for the hour… am seized by it."},{ko:"아껴 둔 북소리를… 끝내 울리지 못했다.",en:"The war-drum I hoarded… I never got to sound."}]},zhouyu:{appear:[{ko:"적벽에 동남풍이 분다. 불바다를 보아라!",en:"The southeast wind rises at Chibi. Behold the inferno!"},{ko:"묶인 배는 한 덩이 장작이다. 불씨 하나면 된다.",en:"Chained ships are one great pyre — a single spark will do."}],death:[{ko:"하늘이 주유를 내고 어찌 공명을 냈는가…",en:"Heaven bore Yu — why then did it bear Liang?"},{ko:"음이 틀렸다… 이 한 줄이 불길의 길을 바꾸는가.",en:"A false note… does this one string turn the fire’s path?"}]},dianwei:{appear:[{ko:"주공께는 손대지 못한다. 이 문은 전위가 막는다!",en:"None shall touch my lord. Dian Wei bars this gate!"},{ko:"문은 좁아야 좋다. 한 사람만 들면 한 사람만 막는다.",en:"A narrow gate is best — one enters, one is stopped."}],death:[{ko:"이 문만은… 내 주검으로 막으리라.",en:"This gate alone… I hold with my corpse."},{ko:"떨리는 팔로도… 다섯 걸음은 지켰다.",en:"Even with trembling arms… I held the five paces."}]},gaoshun:{appear:[{ko:"함진영이 나선다. 무너지되 물러서지 않는다.",en:"The Trap-Breaker Camp advances. We fall, never retreat."},{ko:"일곱 줄이다. 한 줄이 비면 그 자리부터 진다.",en:"Seven ranks. Where one empties, there we lose."}],death:[{ko:"여포공을 따라… 하비에서 스러지는가.",en:"Following Lord Lü… I fade at Xiapi."},{ko:"끊긴 줄 하나… 그게 나였구나.",en:"One broken rank… and it was mine."}]},xiahouyuan:{appear:[{ko:"사흘에 오백 리, 질풍의 하후연이다!",en:"Five hundred li in three days — Xiahou Yuan the gale!"},{ko:"성을 보면 늦는다. 나는 성 밖 길목을 친다!",en:"Eye the walls and you’re late — I strike the road beyond!"}],death:[{ko:"정군산 안개 속에… 목이 가벼워졌다.",en:"In the mist of Dingjun… my head has gone light."},{ko:"한 번 보고 친 길이… 내 뒤를 비웠구나.",en:"The road I struck on sight… left my own rear bare."}]},lumeng:{appear:[{ko:"흰 옷으로 강을 건넜다. 형주는 이미 오의 것.",en:"In white robes I crossed the river. Jing is Wu’s now."},{ko:"병이라 적은 문서가 먼저 강을 건넜다.",en:"A letter feigning illness crossed the river first."}],death:[{ko:"관공의 원혼이… 나를 부르는구나.",en:"The wronged spirit of Lord Guan… calls me."},{ko:"늦게 잡은 책도… 여기서 덮이는가.",en:"The book I took up late… closes here."}]},luxun:{appear:[{ko:"서생이라 얕보았느냐. 이릉의 불줄을 받아라!",en:"You scorned a scholar? Take the fire-line of Yiling!"},{ko:"더운 바람이 먼저 일하게 두었다. 긴 영채가 탄다.",en:"I let the hot wind work first — the long camp burns."}],death:[{ko:"촉을 삼킨 불도… 끝내 재만 남기는구나.",en:"Even the fire that ate Shu… leaves only ash."},{ko:"얇은 종이로 눌렀으나… 나도 눌리는구나.",en:"I pressed with thin paper… now I too am pressed."}]}};function Iu(a,e){const t=ww[a];if(!t)return"";const i=t[e];if(!i||i.length===0)return"";const n=i[Math.floor(Math.random()*i.length)];return we()==="en"?n.en:n.ko}const Zf=["cavalry","caltrop","poison"],Jr=1e3,Yf=480,Kf="cavalry";function bc(a,e){switch(a){case"caltrop":return e.totalKills>=Jr;case"poison":return e.best.time>=Yf;case Kf:return e.bosses.length>=1;default:return!0}}function Mw(a){return Zf.filter(e=>bc(e,a))}function Sw(a,e){const t=we()==="en";switch(a){case"caltrop":{const i=Math.min(Jr,Math.floor(e.totalKills));return t?`Total kills ${i}/${Jr}`:`누적 처치 ${i}/${Jr}`}case"poison":{const i=Math.min(Yf,Math.floor(e.best.time)),n=`${Math.floor(i/60)}:${String(i%60).padStart(2,"0")}`;return t?`Best survival ${n} / 8:00`:`최고 생존 ${n} / 8:00`}case Kf:return t?"Defeat your first boss":"첫 보스 처치";default:return""}}const Al={caltrop:{def:{id:"caltrop",name:"철질려",hanja:"蒺藜",maxLevel:8,desc:"이동 경로에 마름쇠 설치 · 접촉 시 폭발 + 둔화"},nameEn:"Iron Caltrops",descEn:"Caltrops along your path; blast + slow on contact"},poison:{def:{id:"poison",name:"독천",hanja:"毒泉",maxLevel:8,desc:"최다 밀집 지점에 독 웅덩이 · 지속 피해"},nameEn:"Venom Spring",descEn:"Venom pool on the densest cluster; damage over time"},twinring:{def:{id:"twinring",name:"쌍륜",hanja:"雙輪",maxLevel:8,desc:"전방 투척 부메랑 · 왕복하며 2회 관통 타격"},nameEn:"Twin Rings",descEn:"Boomerang chakrams; pierce twice on the round trip"}},wt={spear:{id:"spear",name:"용담창",hanja:"龍膽槍",maxLevel:8,desc:"전방 관통 찌르기"},guandao:{id:"guandao",name:"청룡언월도",hanja:"靑龍偃月刀",maxLevel:8,desc:"전방 부채꼴 참격"},zhangba:{id:"zhangba",name:"장팔사모",hanja:"丈八蛇矛",maxLevel:8,desc:"전후 동시 찌르기 + 넉백"},baiyu:{id:"baiyu",name:"백우선",hanja:"白羽扇",maxLevel:8,desc:"호밍 부적 투사체"},crossbow:{id:"crossbow",name:"제갈연노",hanja:"諸葛連弩",maxLevel:8,desc:"최근접 적 자동 연사"},fire:{id:"fire",name:"화계",hanja:"火計",maxLevel:8,desc:"발밑 화염 장판"},thunder:{id:"thunder",name:"천뢰",hanja:"天雷",maxLevel:8,desc:"적 머리 위 낙뢰"},orbit:{id:"orbit",name:"팔진도",hanja:"八陣圖",maxLevel:8,desc:"주위 회전 태극 오브"},halberd:{id:"halberd",name:"방천화극",hanja:"方天畵戟",maxLevel:8,desc:"360° 회전 휩쓸기"},cavalry:{id:"cavalry",name:"서량철기",hanja:"西涼鐵騎",maxLevel:8,desc:"기마 돌격 소환"},zhanma:{id:"zhanma",name:"참마검",hanja:"斬馬劍",maxLevel:8,desc:"회전 참격파 발사",evolution:!0},bamen:{id:"bamen",name:"팔문금쇄진",hanja:"八門金鎖陣",maxLevel:8,desc:"관통 부적 폭풍",evolution:!0},chibi:{id:"chibi",name:"적벽업화",hanja:"赤壁業火",maxLevel:8,desc:"전진하는 화염 해일",evolution:!0},tianfa:{id:"tianfa",name:"천벌뇌정",hanja:"天罰雷霆",maxLevel:8,desc:"적간 연쇄 번개",evolution:!0},yuanrong:{id:"yuanrong",name:"원융노",hanja:"元戎弩",maxLevel:8,desc:"전방위 연사",evolution:!0}},Dh=[{from:"guandao",passive:"armor",to:"zhanma"},{from:"baiyu",passive:"warbook",to:"bamen"},{from:"fire",passive:"wine",to:"chibi"},{from:"thunder",passive:"talismanho",to:"tianfa"},{from:"crossbow",passive:"vermilion",to:"yuanrong"}];for(const a in Al)wt[a]=Al[a].def,ka[a]=Al[a].descEn;const Jf=4.5;function Uh(a,e,t,i,n,s,r,o){const l=a.enemies,h=(e+i)*.5,c=(t+n)*.5,d=Math.hypot(i-e,n-t)*.5+s+1.2,u=a.boosting===!0,f=u||a.dashing===!0?1.5:1,m=u?1.25:1,v=a.hash.query(h,c,d,a.scratch);for(let g=0;g<v;g++){const p=a.scratch[g];if(l.alive[p]===0)continue;const M=s+l.radius[p];if(G1(l.x[p],l.z[p],e,t,i,n)>M*M)continue;const T=l.boss[p]===1,w=(T?r*Jf*(l.groggy[p]===1?1.6:1):r)*m,A=l.damageAt(p,w);a.damageText.spawn(w,l.x[p],l.scale[p]*.7,l.z[p],!1);const _=l.x[p]-a.px,E=l.z[p]-a.pz,x=Math.hypot(_,E)||1;o>0&&(l.push(p,_/x,E/x,o*f),o>=5&&!A&&a.rng.next()<.4&&a.particles.dust(l.x[p],l.z[p])),A?(a.onKill(p),!T&&(u||a.rng.next()<.6)&&a.effects.spawnKOStar(l.x[p],l.z[p],_/x,E/x)):T||(l.hitPunch[p]=u?1.6:1.4)}}function yc(a,e,t,i,n,s,r,o,l){const h=a.enemies,c=Math.cos(r),d=a.boosting===!0,u=d||a.dashing===!0?1.5:1,f=d?1.25:1,m=a.hash.query(e,t,s+21,a.scratch);for(let v=0;v<m;v++){const g=a.scratch[v];if(h.alive[g]===0)continue;const p=h.x[g]-e,M=h.z[g]-t,T=p*p+M*M,w=h.boss[g]===1,A=(w?s+20:s)+h.radius[g];if(T>A*A)continue;const _=Math.sqrt(T)||1;if(r<3.13&&!w&&p/_*i+M/_*n<c)continue;const E=(w?o*Jf*(h.groggy[g]===1?1.6:1):o)*f,x=h.damageAt(g,E);a.damageText.spawn(E,h.x[g],h.scale[g]*.7,h.z[g],!1),l>0&&(h.push(g,p/_,M/_,l*u),l>=5&&!x&&a.rng.next()<.35&&a.particles.dust(h.x[g],h.z[g])),x?(a.onKill(g),!w&&(d||a.rng.next()<.6)&&a.effects.spawnKOStar(h.x[g],h.z[g],p/_,M/_)):w||(h.hitPunch[g]=d?1.6:1.4)}}function Aw(a,e,t,i,n){const s=a.enemies,r=a.hash.query(e,t,i,a.scratch);for(let o=0;o<r;o++){const l=a.scratch[o];if(s.alive[l]===0)continue;const h=s.x[l]-e,c=s.z[l]-t,d=i+s.radius[l];h*h+c*c<=d*d&&n(l)}}function fi(a,e,t,i){return e*a.stats.damageMul*(1+(t-1)*i)}class hi{level=1;timer=0;cooldownPerLevel=0;update(e){if(this.timer-=e.dt,this.timer>0)return;const t=this.baseCooldown*e.stats.cooldownMul*(1-(this.level-1)*this.cooldownPerLevel);this.timer+=Math.max(.05,t),this.timer<0&&(this.timer=0),e.onAttack(this.id,e.aimX,e.aimZ),this.fire(e)}}class Tw extends hi{id="spear";baseCooldown=1.1;fire(e){const t=(5+(this.level-1)*.6)*e.stats.rangeMul,i=.72,n=fi(e,8,this.level,.15),s=e.px+e.aimX*t,r=e.pz+e.aimZ*t;Uh(e,e.px,e.pz,s,r,i,n,3),e.effects.spawnThrust(e.px,e.pz,e.aimX,e.aimZ,t,i*2.2,.7,.95,1.9)}}class Ew extends hi{id="guandao";baseCooldown=1.45;fire(e){const t=(4.4+(this.level-1)*.35)*e.stats.areaMul,i=1.05+(this.level-1)*.02,n=fi(e,15,this.level,.18);yc(e,e.px,e.pz,e.aimX,e.aimZ,t,i,n,5),e.effects.spawnSlashArc(e.px,e.pz,e.aimX,e.aimZ,t,i,.6,2.2,1.1)}}class Cw extends hi{id="zhangba";baseCooldown=1.15;fire(e){const t=(4.6+(this.level-1)*.4)*e.stats.rangeMul,i=.85,n=fi(e,10,this.level,.15),s=e.aimX,r=e.aimZ;Uh(e,e.px,e.pz,e.px+s*t,e.pz+r*t,i,n,9),Uh(e,e.px,e.pz,e.px-s*t,e.pz-r*t,i,n,9),e.effects.spawnDoubleThrust(e.px,e.pz,s,r,t,i*2.2,1.2,1,.7)}}class Rw extends hi{id="baiyu";baseCooldown=1.6;fire(e){const t=2+Math.floor((this.level-1)/2)+e.stats.projectileBonus,i=fi(e,9,this.level,.14),n=8.5*e.stats.rangeMul,s=1+Math.floor(this.level/3),r=Math.atan2(e.aimZ,e.aimX);for(let o=0;o<t;o++){const l=r+(o-(t-1)*.5)*.24;e.projectiles.spawn(e.px,e.pz,Math.cos(l),Math.sin(l),n,i,.5,s,2.6,xc,1.7,1.7,2.1,1.1,.9,!0,7)}}}class Pw extends hi{id="crossbow";baseCooldown=.55;cooldownPerLevel=.04;fire(e){const t=e.aimX,i=e.aimZ,n=1+e.stats.projectileBonus,s=fi(e,7,this.level,.12),r=15*e.stats.rangeMul,o=Math.floor((this.level-1)/2);for(let l=0;l<n;l++){const h=(l-(n-1)/2)*.12,c=Math.atan2(i,t)+h;e.projectiles.spawn(e.px,e.pz,Math.cos(c),Math.sin(c),r,s,.45,o,1.6,Js,2,1.5,.7,1.5,.55)}}}class Iw extends hi{id="fire";baseCooldown=3;fire(e){const t=(2.2+(this.level-1)*.28)*e.stats.areaMul,i=3+(this.level-1)*.3,n=10*e.stats.damageMul*(1+(this.level-1)*.15);e.zones.spawn(e.px,e.pz,t,i,n,2.4,.9,.25)}}class Lw extends hi{id="thunder";baseCooldown=2.6;cooldownPerLevel=.03;fire(e){const t=2+this.level+e.stats.projectileBonus,i=fi(e,20,this.level,.15);for(let n=0;n<t;n++){const s=e.enemies.randomAlive();if(s<0)break;const r=e.enemies.x[s],o=e.enemies.z[s];e.effects.spawnLightning(r,o),Aw(e,r,o,2,l=>{const h=e.enemies.damageAt(l,i);e.damageText.spawn(i,e.enemies.x[l],e.enemies.scale[l]*.7,e.enemies.z[l],!0),h&&e.onKill(l)})}}}class Fw{id="orbit";level=1;built=-1;count(){return 2+Math.floor((this.level-1)/2)}update(e){const t=this.count()+e.stats.projectileBonus,i=3.2,n=2.2+(this.level-1)*.15,s=8*e.stats.damageMul*(1+(this.level-1)*.16);if(t!==this.built){e.projectiles.clearOrbits();for(let r=0;r<t;r++){const o=r/t*Math.PI*2;e.projectiles.spawnOrbit(o,i,n,s,1.6,1.8,2.3,1)}this.built=t}e.projectiles.refreshOrbits(s,i,n)}}class Dw extends hi{id="halberd";baseCooldown=1.5;fire(e){const t=(3.4+(this.level-1)*.3)*e.stats.areaMul,i=fi(e,12,this.level,.16);yc(e,e.px,e.pz,e.aimX,e.aimZ,t,Math.PI,i,6),e.effects.spawnSlashArc(e.px,e.pz,e.aimX,e.aimZ,t,Math.PI,2.2,.7,.5,.28,Yr)}}class Uw extends hi{id="cavalry";baseCooldown=4;fire(e){const t=1+Math.floor(this.level/2)+e.stats.projectileBonus,i=fi(e,18,this.level,.15),n=16;for(let s=0;s<t;s++){const r=e.rng.next()*Math.PI*2,o=Math.cos(r),l=Math.sin(r),h=e.px-o*22,c=e.pz-l*22;e.projectiles.spawn(h,c,o,l,n,i,1.3,9999,3,Rn,2,1.4,.9,4.5,1.7,!1,0,!0)}}}class wi{id="caltrop";level=1;static CAP=32;static PLACE_INTERVAL=.9;static MAX_AGE=14;static TRIGGER_R=.95;cx=new Float32Array(wi.CAP);cz=new Float32Array(wi.CAP);age=new Float32Array(wi.CAP);glintT=new Float32Array(wi.CAP);armed=new Uint8Array(wi.CAP);placeT=0;maxActive(){return Math.min(wi.CAP,3+(this.level-1))}update(e){const t=wi.CAP;this.placeT-=e.dt,this.placeT<=0&&(this.placeT+=wi.PLACE_INTERVAL*e.stats.cooldownMul,this.placeT<0&&(this.placeT=0),this.place(e));const i=e.enemies,n=wi.TRIGGER_R,s=(2.2+(this.level-1)*.13)*e.stats.areaMul,r=fi(e,20,this.level,.13),o=.5+(this.level-1)*.03;for(let l=0;l<t;l++){if(this.armed[l]===0)continue;if(this.age[l]+=e.dt,this.age[l]>=wi.MAX_AGE){this.armed[l]=0;continue}const h=this.cx[l],c=this.cz[l];if(this.glintT[l]-=e.dt,this.glintT[l]<=0){this.glintT[l]=.7+e.rng.next()*.8;for(let f=0;f<3;f++)e.particles.emit(h+(e.rng.next()-.5)*.5,.12,c+(e.rng.next()-.5)*.5,(e.rng.next()-.5)*.3,.5+e.rng.next()*.5,(e.rng.next()-.5)*.3,.55,.68,.95,.5,.55,-.4,.9)}let d=!1;const u=e.hash.query(h,c,n+1,e.scratch);for(let f=0;f<u;f++){const m=e.scratch[f];if(i.alive[m]===0)continue;const v=i.x[m]-h,g=i.z[m]-c,p=n+i.radius[m];if(v*v+g*g<=p*p){d=!0;break}}d&&this.explode(e,l,h,c,s,r,o)}}place(e){const t=wi.CAP,i=this.maxActive();let n=-1,s=0,r=-1,o=-1;for(let d=0;d<t;d++){if(this.armed[d]===0){n<0&&(n=d);continue}s++,this.age[d]>o&&(o=this.age[d],r=d)}let l;if(s<i&&n>=0)l=n;else if(r>=0)l=r;else if(n>=0)l=n;else return;const h=e.px-e.faceX*.5,c=e.pz-e.faceZ*.5;this.cx[l]=h,this.cz[l]=c,this.age[l]=0,this.glintT[l]=0,this.armed[l]=1,e.effects.spawnDecal?.(h,c,.55,.5,.62,.9)}explode(e,t,i,n,s,r,o){this.armed[t]=0;const l=e.enemies,h=e.hash.query(i,n,s,e.scratch);for(let c=0;c<h;c++){const d=e.scratch[c];if(l.alive[d]===0)continue;const u=l.x[d]-i,f=l.z[d]-n,m=s+l.radius[d];if(u*u+f*f>m*m)continue;const v=l.damageAt(d,r);e.damageText.spawn(r,l.x[d],l.scale[d]*.7,l.z[d],!1);const g=Math.sqrt(u*u+f*f)||1;l.push(d,u/g,f/g,4),v||(l.stun[d]=Math.max(l.stun[d],o)),v&&e.onKill(d)}e.effects.spawnRing(i,n,s+.6,.6,.75,1.1,.4),e.effects.spawnFlash(i,n,.7,.85,1.2,s*.8),e.particles.burst(i,n,.6,.72,1,12,6),e.effects.spawnDecal?.(i,n,s*.7,.55,.68,1),e.effects.spawnLight?.(i,n,.5,.65,1,s*2.2,.18)}}class kw extends hi{id="poison";baseCooldown=2.8;fire(e){const t=(2.4+(this.level-1)*.3)*e.stats.areaMul,i=4+(this.level-1)*.35,n=9*e.stats.damageMul*(1+(this.level-1)*.15),s=e.enemies;let r=e.px,o=e.pz,l=-1;const h=t*t;for(let c=0;c<6;c++){const d=s.randomAlive();if(d<0)break;const u=s.x[d],f=s.z[d],m=e.hash.query(u,f,t,e.scratch);let v=0;for(let g=0;g<m;g++){const p=e.scratch[g];if(s.alive[p]===0)continue;const M=s.x[p]-u,T=s.z[p]-f;M*M+T*T<=h&&v++}v>l&&(l=v,r=u,o=f)}l<0||e.zones.spawn(r,o,t,i,n,.3,1.3,.5)}}class yt extends hi{id="twinring";baseCooldown=1.6;static CAP=12;static HITSET=16;static OUT_SPEED=13;static RET_SPEED=15;static MAX_LIFE=4;bx=new Float32Array(yt.CAP);bz=new Float32Array(yt.CAP);dirX=new Float32Array(yt.CAP);dirZ=new Float32Array(yt.CAP);dist=new Float32Array(yt.CAP);maxD=new Float32Array(yt.CAP);dmgv=new Float32Array(yt.CAP);rad=new Float32Array(yt.CAP);life=new Float32Array(yt.CAP);spin=new Float32Array(yt.CAP);phase=new Uint8Array(yt.CAP);active=new Uint8Array(yt.CAP);hitset=new Int32Array(yt.CAP*yt.HITSET);hitN=new Uint8Array(yt.CAP);update(e){super.update(e),this.simulate(e)}fire(e){const t=1+Math.floor((this.level-1)/2)+e.stats.projectileBonus,i=fi(e,12,this.level,.13),n=(6+(this.level-1)*.5)*e.stats.rangeMul,s=Math.atan2(e.aimZ,e.aimX);for(let r=0;r<t;r++){const o=s+(r-(t-1)*.5)*.2;this.throwRing(e,Math.cos(o),Math.sin(o),i,n)}}throwRing(e,t,i,n,s){let r=-1;for(let o=0;o<yt.CAP;o++)if(this.active[o]===0){r=o;break}r<0||(this.bx[r]=e.px,this.bz[r]=e.pz,this.dirX[r]=t,this.dirZ[r]=i,this.dist[r]=0,this.maxD[r]=s,this.dmgv[r]=n,this.rad[r]=.9,this.life[r]=yt.MAX_LIFE,this.spin[r]=0,this.phase[r]=0,this.hitN[r]=0,this.active[r]=1)}simulate(e){const t=yt.CAP;for(let i=0;i<t;i++)if(this.active[i]!==0){if(this.life[i]-=e.dt,this.spin[i]+=e.dt*16,this.phase[i]===0){const n=yt.OUT_SPEED*e.dt;this.bx[i]+=this.dirX[i]*n,this.bz[i]+=this.dirZ[i]*n,this.dist[i]+=n,this.dist[i]>=this.maxD[i]&&(this.phase[i]=1,this.hitN[i]=0)}else{const n=e.px-this.bx[i],s=e.pz-this.bz[i],r=Math.hypot(n,s)||1,o=n/r,l=s/r,h=yt.RET_SPEED*e.dt,c=Math.min(1,r/this.maxD[i])*3.4;if(this.bx[i]+=o*h+-l*c*e.dt,this.bz[i]+=l*h+o*c*e.dt,r<=.9){this.active[i]=0;continue}}if(this.life[i]<=0){this.active[i]=0;continue}this.hitScan(e,i),this.renderBody(e,i)}}hitScan(e,t){const i=e.enemies,n=this.bx[t],s=this.bz[t],r=this.rad[t],o=t*yt.HITSET,l=e.hash.query(n,s,r+1,e.scratch);for(let h=0;h<l;h++){const c=e.scratch[h];if(i.alive[c]===0)continue;const d=i.x[c]-n,u=i.z[c]-s,f=r+i.radius[c];if(d*d+u*u>f*f)continue;let m=!1;const v=this.hitN[t];for(let p=0;p<v;p++)if(this.hitset[o+p]===c){m=!0;break}if(m)continue;v<yt.HITSET&&(this.hitset[o+this.hitN[t]++]=c);const g=i.damageAt(c,this.dmgv[t]);if(e.damageText.spawn(this.dmgv[t],i.x[c],i.scale[c]*.7,i.z[c],!1),!g){const p=Math.sqrt(d*d+u*u)||1;i.push(c,d/p,u/p,2)}e.effects.spawnRing(i.x[c],i.z[c],1,1.6,.5,.3,.16),g&&e.onKill(c)}}renderBody(e,t){const i=this.bx[t],n=this.bz[t],s=this.spin[t],r=.34;e.particles.emit(i+Math.cos(s)*r,.9,n+Math.sin(s)*r,0,0,0,.95,.62,.14,.6,.1,0,.9),e.particles.emit(i+Math.cos(s+Math.PI)*r,.9,n+Math.sin(s+Math.PI)*r,0,0,0,.9,.12,.14,.6,.1,0,.9),e.particles.emit(i,.9,n,0,0,0,.5,.22,.08,.42,.08,0,.9),e.rng.next()<.6&&e.effects.spawnLight?.(i,n,.42,.3,.09,1.5,.1)}}class zw extends hi{id="zhanma";level=8;baseCooldown=1;fire(e){const t=5.5*e.stats.areaMul;yc(e,e.px,e.pz,e.aimX,e.aimZ,t,1.2,fi(e,26,8,.16),4),e.effects.spawnSlashArc(e.px,e.pz,e.aimX,e.aimZ,t,1.2,.6,2.4,1.2);const i=fi(e,22,8,.16),n=Math.atan2(e.aimZ,e.aimX);for(let s=-1;s<=1;s++){const r=n+s*.28;e.projectiles.spawn(e.px,e.pz,Math.cos(r),Math.sin(r),12,i,1.4,6,1.4,Hs,.7,2.4,1.2,3,2.2)}}}class Nw extends hi{id="bamen";level=8;baseCooldown=1.3;fire(e){const t=8+e.stats.projectileBonus,i=fi(e,12,8,.14),n=9*e.stats.rangeMul,s=e.rng.next()*Math.PI*2;for(let r=0;r<t;r++){const o=s+r/t*Math.PI*2;e.projectiles.spawn(e.px,e.pz,Math.cos(o),Math.sin(o),n,i,.55,6,3,xc,1.6,1.9,2.4,1.2,1,!0,5)}}}class Ow extends hi{id="chibi";level=8;baseCooldown=2.4;fire(e){const t=18*e.stats.damageMul,i=e.aimX,n=e.aimZ;for(let s=0;s<3;s++){const r=1.5+s*2.2;e.zones.spawn(e.px+i*r,e.pz+n*r,(2.6+s*.4)*e.stats.areaMul,2.6,t,2.6,.7,.2,i*4.5,n*4.5)}}}class Bw extends hi{id="tianfa";level=8;baseCooldown=2;hitBuf=new Int32Array(8);fire(e){const t=fi(e,24,8,.15),i=3+e.stats.projectileBonus,n=this.hitBuf;for(let s=0;s<i;s++){let r=e.enemies.randomAlive();if(r<0)break;e.effects.spawnLightning(e.enemies.x[r],e.enemies.z[r]);let o=e.enemies.x[r],l=e.enemies.z[r];n[0]=r;let h=1;for(let c=0;c<6;c++){const d=e.enemies,u=d.damageAt(r,t);e.damageText.spawn(t,d.x[r],d.scale[r]*.7,d.z[r],!0),u&&e.onKill(r);let f=-1,m=36;const v=e.hash.query(o,l,6,e.scratch);for(let g=0;g<v;g++){const p=e.scratch[g];if(d.alive[p]===0)continue;let M=!1;for(let _=0;_<h;_++)n[_]===p&&(M=!0);if(M)continue;const T=d.x[p]-o,w=d.z[p]-l,A=T*T+w*w;A<m&&(m=A,f=p)}if(f<0)break;e.effects.spawnChainArc(o,l,e.enemies.x[f],e.enemies.z[f]),o=e.enemies.x[f],l=e.enemies.z[f],r=f,h<n.length&&(n[h++]=f)}}}}class Hw extends hi{id="yuanrong";level=8;baseCooldown=.5;fire(e){const i=fi(e,9,8,.12),n=16*e.stats.rangeMul;for(let s=0;s<12;s++){const r=s/12*Math.PI*2;e.projectiles.spawn(e.px,e.pz,Math.cos(r),Math.sin(r),n,i,.45,2,1.5,$f,2.6,1.4,.5,1.5,.55)}}}const Gw={spear:Tw,guandao:Ew,zhangba:Cw,baiyu:Rw,crossbow:Pw,fire:Iw,thunder:Lw,orbit:Fw,halberd:Dw,cavalry:Uw,caltrop:wi,poison:kw,twinring:yt,zhanma:zw,bamen:Nw,chibi:Ow,tianfa:Bw,yuanrong:Hw};function Sa(a){const e=Gw[a];return new e}class Vw{root;cardEls=[];rerollBtn;titleEl;hintEl;onPick=null;onReroll=null;count=0;active=!1;constructor(){this.root=document.createElement("div"),this.root.className="levelup-overlay";const e=document.createElement("div");e.className="levelup-wrap";const t=document.createElement("div");t.className="levelup-title",this.titleEl=t,e.appendChild(t);const i=document.createElement("div");i.className="levelup-row";for(let r=0;r<3;r++){const o=document.createElement("div");o.className="levelup-card";const l=r;o.addEventListener("click",()=>this.pick(l)),i.appendChild(o),this.cardEls.push(o)}e.appendChild(i);const n=document.createElement("div");n.className="levelup-bottom";const s=document.createElement("div");s.className="levelup-hint",this.hintEl=s,n.appendChild(s),this.rerollBtn=document.createElement("div"),this.rerollBtn.className="levelup-reroll",this.rerollBtn.addEventListener("click",()=>{this.onReroll&&this.onReroll()}),n.appendChild(this.rerollBtn),e.appendChild(n),this.root.appendChild(e),document.body.appendChild(this.root)}open(e,t,i,n,s){this.onPick=n,this.onReroll=s,this.count=e.length;for(let r=0;r<this.cardEls.length;r++){const o=this.cardEls[r],l=e[r];if(l){o.style.display="flex",o.style.borderColor=l.rare?"#ffe9a8":l.accent,o.style.boxShadow=l.rare?"0 0 26px rgba(255,220,120,0.4),inset 0 0 0 1px rgba(255,220,120,0.4)":"0 0 18px rgba(232,198,103,0.12),inset 0 0 0 1px rgba(232,198,103,0.12)";const h=l.badge?`<div class="lc-badge" style="background:${l.accent}22;color:${l.accent};border-color:${l.accent}66;">${l.badge}</div>`:"",c=l.count?/(\d+)\s*\/\s*(\d+)/.exec(l.count):null,d=c?c[1]===c[2]:!1,u=l.count?`<span class="lc-count${d?" full":""}">${l.count}</span>`:"",f=l.evoHint?`<div class="lc-evohint">${l.evoHint}</div>`:"";o.innerHTML=h+`<div class="lc-symbol" style="color:${l.accent};border-color:${l.accent};box-shadow:0 0 14px ${l.accent}55;">${l.symbol}</div><div class="lc-tag" style="color:${l.accent};">${l.tag}${u}</div><div class="lc-title">${l.title}</div><div class="lc-hanja" style="color:${l.accent};">${l.hanja}</div><div class="lc-desc">${l.desc}</div>`+f+`<div class="lc-num">${r+1}</div>`,o.animate([{transform:"translateY(26px) scale(0.9)",opacity:0},{transform:"translateY(0) scale(1)",opacity:1}],{duration:300,delay:r*90,easing:"cubic-bezier(0.2,0.9,0.3,1)",fill:"backwards"})}else o.style.display="none"}this.titleEl.innerHTML=`${ie("levelupTitle")} <span>選一</span>`,this.hintEl.textContent=ie("levelupHint"),this.rerollBtn.textContent=ie("reroll",{n:t}),this.rerollBtn.style.opacity=i?"1":"0.4",this.rerollBtn.style.pointerEvents=i?"auto":"none",this.root.style.display="flex",this.active=!0}pick(e){if(!this.active||e>=this.count)return;this.active=!1,this.root.style.display="none";const t=this.onPick;this.onPick=null,this.onReroll=null,t&&t(e)}close(){this.active=!1,this.root.style.display="none"}}const Lu=6,Ww=6;class Xw{root;timerEl;killsEl;levelEl;goldEl;xpFill;hpFill;hpDelay;hpText;musouWrap;musouFill;musouHint;comboEl;bossWrap;bossFill;bossName;bannerLayer;bannerQueue=[];bannerSeq=0;bannerPlaying=!1;quoteLayer;bossActiveNow=!1;objWrap;objTitle;objSub;objBarTrack;objBarFill;objCountdown;objVisible=!1;objDanger=!1;feverEl;feverOn=!1;slotBar;bottom;seenSlots=new Set;weaponsFullSeen=!1;lastCombo=0;wasReady=!1;touch;constructor(e=!1){this.touch=e;const t=document.createElement("div");t.className="hud-top",t.style.cssText=["position:fixed","top:calc(env(safe-area-inset-top,0px) + 10px)","left:0","right:0","display:flex","flex-direction:column","align-items:center","gap:6px","pointer-events:none","z-index:20","transform-origin:top center",'font-family:"Nanum Myeongjo","Times New Roman",serif'].join(";"),this.timerEl=document.createElement("div"),this.timerEl.style.cssText="color:#f0e4c0;font-size:34px;letter-spacing:3px;text-shadow:0 2px 8px rgba(0,0,0,0.8);font-variant-numeric:tabular-nums;",this.timerEl.textContent="00:00",t.appendChild(this.timerEl);const i=document.createElement("div");i.style.cssText="display:flex;gap:20px;color:#c9cdda;font-size:15px;letter-spacing:1px;align-items:center;",this.levelEl=document.createElement("div"),this.levelEl.textContent="Lv 1",this.killsEl=document.createElement("div"),this.killsEl.style.cssText="font-variant-numeric:tabular-nums;",this.killsEl.textContent=`${ie("hudKillsLabel")} 0`,this.goldEl=document.createElement("div"),this.goldEl.style.cssText="color:#e8c667;font-variant-numeric:tabular-nums;",this.goldEl.textContent="⟡ 0",i.appendChild(this.levelEl),i.appendChild(this.killsEl),i.appendChild(this.goldEl),t.appendChild(i);const n=document.createElement("div");n.style.cssText="width:min(70vw,520px);height:7px;background:rgba(20,22,30,0.85);border:1px solid rgba(232,198,103,0.3);border-radius:4px;overflow:hidden;",this.xpFill=document.createElement("div"),this.xpFill.style.cssText="height:100%;width:0%;background:linear-gradient(90deg,#5aa9ff,#a9d4ff);box-shadow:0 0 8px rgba(120,180,255,0.7);",n.appendChild(this.xpFill),t.appendChild(n),this.bossWrap=document.createElement("div"),this.bossWrap.style.cssText="display:none;flex-direction:column;align-items:center;gap:5px;margin-top:12px;",this.bossName=document.createElement("div"),this.bossName.style.cssText="color:#ff7a68;font-size:19px;letter-spacing:4px;text-shadow:0 0 12px rgba(232,92,74,0.7),0 2px 4px rgba(0,0,0,0.9);",this.bossWrap.appendChild(this.bossName);const s=document.createElement("div");s.style.cssText="width:min(80vw,640px);height:14px;background:rgba(20,10,10,0.85);border:1px solid rgba(232,92,74,0.5);border-radius:4px;overflow:hidden;",this.bossFill=document.createElement("div"),this.bossFill.style.cssText="height:100%;width:100%;background:linear-gradient(90deg,#8a1f16,#e85c4a,#e8c667);box-shadow:0 0 10px rgba(232,92,74,0.6);transition:width 0.1s;",s.appendChild(this.bossFill),this.bossWrap.appendChild(s),t.appendChild(this.bossWrap),this.objWrap=document.createElement("div"),this.objWrap.className="hud-objective",this.objWrap.style.cssText=["display:none","flex-direction:column","align-items:center","gap:4px","max-width:min(92vw,440px)","box-sizing:border-box","margin-top:10px","padding:7px 18px","border:1px solid rgba(232,198,103,0.42)","border-radius:9px","background:linear-gradient(180deg,rgba(22,19,12,0.9),rgba(12,11,8,0.92))","box-shadow:0 3px 16px rgba(0,0,0,0.5),0 0 14px rgba(232,198,103,0.1)"].join(";");const r=document.createElement("div");r.style.cssText="display:flex;gap:12px;align-items:baseline;justify-content:center;flex-wrap:wrap;max-width:100%;",this.objTitle=document.createElement("div"),this.objTitle.style.cssText="color:#f4e6bd;font-size:17px;letter-spacing:2px;text-align:center;line-height:1.25;text-shadow:0 1px 6px rgba(0,0,0,0.8);",this.objCountdown=document.createElement("div"),this.objCountdown.style.cssText="display:none;color:#e8c667;font-size:15px;letter-spacing:1px;font-variant-numeric:tabular-nums;",r.appendChild(this.objTitle),r.appendChild(this.objCountdown),this.objSub=document.createElement("div"),this.objSub.style.cssText="display:none;color:#b9b18c;font-size:12px;letter-spacing:1px;text-align:center;line-height:1.3;",this.objBarTrack=document.createElement("div"),this.objBarTrack.style.cssText="display:none;width:100%;height:5px;border-radius:3px;background:rgba(20,18,12,0.9);border:1px solid rgba(232,198,103,0.28);overflow:hidden;",this.objBarFill=document.createElement("div"),this.objBarFill.style.cssText="height:100%;width:0%;background:linear-gradient(90deg,#a8791f,#e8c667);box-shadow:0 0 6px rgba(232,198,103,0.4);transition:width 0.18s;",this.objBarTrack.appendChild(this.objBarFill),this.objWrap.appendChild(r),this.objWrap.appendChild(this.objSub),this.objWrap.appendChild(this.objBarTrack),t.appendChild(this.objWrap),document.body.appendChild(t),this.root=t,this.slotBar=document.createElement("div"),this.slotBar.className="hud-slots",this.slotBar.style.cssText=["position:fixed","top:calc(env(safe-area-inset-top,0px) + 10px)","left:calc(env(safe-area-inset-left,0px) + 10px)","display:flex","flex-direction:column","gap:6px","pointer-events:none","z-index:20","transform-origin:top left"].join(";");const o=document.createElement("div");o.style.cssText="display:flex;gap:4px;flex-wrap:wrap;max-width:220px;";const l=document.createElement("div");l.style.cssText="display:flex;gap:4px;flex-wrap:wrap;max-width:220px;",this.slotBar.appendChild(o),this.slotBar.appendChild(l),this.slotBar._w=o,this.slotBar._p=l,document.body.appendChild(this.slotBar);const h=document.createElement("div");h.className="hud-bottom",h.style.cssText=["position:fixed",`bottom:calc(env(safe-area-inset-bottom,0px) + ${this.touch?"15vh":"22px"})`,"left:0",`right:${this.touch?"calc(env(safe-area-inset-right,0px) + 134px)":"0"}`,"display:flex","flex-direction:column","align-items:center","gap:6px","pointer-events:none","z-index:20","transform-origin:bottom center",'font-family:"Nanum Myeongjo","Times New Roman",serif'].join(";"),this.musouWrap=document.createElement("div"),this.musouWrap.style.cssText=`display:${this.touch?"none":"flex"};flex-direction:column;align-items:center;gap:2px;`,this.musouHint=document.createElement("div"),this.musouHint.style.cssText="color:#e8c667;font-size:12px;letter-spacing:2px;opacity:0;transition:opacity 0.2s;",this.musouHint.innerHTML=ie("musouHint"),this.musouWrap.appendChild(this.musouHint);const c=document.createElement("div");c.style.cssText="width:min(46vw,320px);height:9px;background:rgba(28,22,10,0.85);border:1px solid rgba(232,198,103,0.4);border-radius:5px;overflow:hidden;",this.musouFill=document.createElement("div"),this.musouFill.style.cssText="height:100%;width:0%;background:linear-gradient(90deg,#a8791f,#e8c667,#fff2c0);box-shadow:0 0 8px rgba(232,198,103,0.7);",c.appendChild(this.musouFill),this.musouWrap.appendChild(c),h.appendChild(this.musouWrap);const d=document.createElement("div");d.style.cssText=`width:${this.touch?"min(56vw,340px)":"min(60vw,420px)"};height:16px;background:rgba(20,22,30,0.85);border:1px solid rgba(232,198,103,0.35);border-radius:5px;overflow:hidden;position:relative;`,this.hpDelay=document.createElement("div"),this.hpDelay.style.cssText="position:absolute;left:0;top:0;height:100%;width:100%;background:rgba(255,225,210,0.7);transition:width 0.45s ease-out 0.14s;",d.appendChild(this.hpDelay),this.hpFill=document.createElement("div"),this.hpFill.style.cssText="position:absolute;left:0;top:0;height:100%;width:100%;background:linear-gradient(90deg,#c0362b,#e85c4a);box-shadow:0 0 8px rgba(232,92,74,0.6);transition:width 0.12s;",d.appendChild(this.hpFill),this.hpText=document.createElement("div"),this.hpText.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#fff;font-size:12px;letter-spacing:1px;text-shadow:0 1px 2px rgba(0,0,0,0.9);font-variant-numeric:tabular-nums;",this.hpText.textContent="100 / 100",d.appendChild(this.hpText),h.appendChild(d),document.body.appendChild(h),this.bottom=h,this.comboEl=document.createElement("div"),this.comboEl.style.cssText=["position:fixed","right:28px","top:38%","display:none","flex-direction:column","align-items:center","pointer-events:none","z-index:20",'font-family:"Nanum Myeongjo","Times New Roman",serif',"text-shadow:0 0 12px rgba(232,198,103,0.5)"].join(";"),document.body.appendChild(this.comboEl),this.bannerLayer=document.createElement("div"),this.bannerLayer.style.cssText=["position:fixed","inset:0","display:flex","align-items:center","justify-content:center","pointer-events:none","z-index:32",'font-family:"Nanum Myeongjo","Times New Roman",serif'].join(";"),document.body.appendChild(this.bannerLayer),this.quoteLayer=document.createElement("div"),this.quoteLayer.style.cssText=["position:fixed","top:calc(env(safe-area-inset-top,0px) + 96px)","left:0","right:0","display:flex","justify-content:center","padding:0 12px","pointer-events:none","z-index:21",'font-family:"Nanum Myeongjo","Times New Roman",serif'].join(";"),document.body.appendChild(this.quoteLayer),this.feverEl=document.createElement("div"),this.feverEl.style.cssText=["position:fixed","inset:0","pointer-events:none","opacity:0","z-index:29","transition:opacity 0.25s","box-shadow:inset 0 0 120px 24px rgba(255,180,60,0.55),inset 0 0 40px 8px rgba(255,120,30,0.5)"].join(";"),document.body.appendChild(this.feverEl)}setFever(e){e!==this.feverOn&&(this.feverOn=e,e?(this.feverEl.style.opacity="1",this.feverEl.animate([{filter:"brightness(1)"},{filter:"brightness(1.5)"},{filter:"brightness(1)"}],{duration:700,iterations:1/0})):(this.feverEl.style.opacity="0",this.feverEl.getAnimations().forEach(t=>t.cancel())))}setVisible(e){this.root.style.display=e?"flex":"none",this.slotBar.style.display=e?"flex":"none",this.bottom.style.display=e?"flex":"none",e||(this.comboEl.style.display="none",this.bossWrap.style.display="none",this.quoteLayer.textContent="",this.bannerQueue.length=0,this.bannerPlaying=!1,this.bannerLayer.textContent="",this.setFever(!1),this.objVisible=!1,this.objDanger=!1,this.objCountdown.classList.remove("obj-danger"),this.objCountdown.style.color="#e8c667",this.objWrap.getAnimations().forEach(t=>t.cancel()),this.objWrap.style.display="none",this.reflowQuote())}setObjective(e){if(!e){if(!this.objVisible)return;this.objVisible=!1,this.objDanger&&(this.objDanger=!1,this.objCountdown.classList.remove("obj-danger"),this.objCountdown.style.color="#e8c667");const i=this.objWrap,n=i.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease-out"});n.onfinish=()=>{this.objVisible||(i.style.display="none")},this.reflowQuote();return}if(this.objTitle.textContent=e.title,e.sub?(this.objSub.textContent=e.sub,this.objSub.style.display=""):this.objSub.style.display="none",e.progress01!==void 0&&e.progress01>=0?(this.objBarTrack.style.display="",this.objBarFill.style.width=`${Math.max(0,Math.min(1,e.progress01))*100}%`,this.objBarFill.style.background=e.color?`linear-gradient(90deg,${e.color},${e.color})`:"linear-gradient(90deg,#a8791f,#e8c667)"):this.objBarTrack.style.display="none",e.countdownSec!==void 0&&e.countdownSec>=0){const i=Math.ceil(e.countdownSec),n=Math.floor(i/60),s=i%60;this.objCountdown.textContent=`${n}:${s.toString().padStart(2,"0")}`,this.objCountdown.style.display="";const r=e.countdownSec<=10;r!==this.objDanger&&(this.objDanger=r,this.objCountdown.classList.toggle("obj-danger",r),this.objCountdown.style.color=r?"#ff6a58":"#e8c667")}else this.objCountdown.style.display="none",this.objDanger&&(this.objDanger=!1,this.objCountdown.classList.remove("obj-danger"),this.objCountdown.style.color="#e8c667");const t=this.objVisible;this.objVisible=!0,this.objWrap.style.display="flex",this.reflowQuote(),t||this.objWrap.animate([{opacity:0,transform:"translateY(-6px)"},{opacity:1,transform:"translateY(0)"}],{duration:200,easing:"ease-out"})}reflowQuote(){if(this.objVisible){const e=this.objWrap.getBoundingClientRect().bottom;this.quoteLayer.style.top=`${Math.round(e+8)}px`}else this.quoteLayer.style.top=`calc(env(safe-area-inset-top,0px) + ${this.bossActiveNow?164:96}px)`}setLoadout(e,t){const i=this.slotBar._w,n=this.slotBar._p;if(this.renderSlots(i,e,Lu),this.renderSlots(n,t,Ww),!this.weaponsFullSeen&&e.length>=Lu){this.weaponsFullSeen=!0;const s=we()==="en"?"Full Arsenal":"병법 만진";this.banner(`${s} 兵法滿陣`,"#e8c667",54,1700)}}renderSlots(e,t,i){for(;e.children.length<i;){const n=document.createElement("div");n.style.cssText=["position:relative","width:30px","height:30px","border-radius:6px","display:flex","align-items:center","justify-content:center","font-size:16px",'font-family:"Nanum Myeongjo",serif',"box-shadow:0 1px 4px rgba(0,0,0,0.6)","transition:border-color 0.2s,background 0.2s"].join(";");const s=document.createElement("span"),r=document.createElement("span");r.style.cssText="position:absolute;right:-2px;bottom:-4px;font-size:10px;color:#f0e4c0;background:rgba(0,0,0,0.7);border-radius:3px;padding:0 2px;line-height:1.2;",n.appendChild(s),n.appendChild(r),e.appendChild(n)}for(let n=0;n<i;n++){const s=e.children[n],r=s.children[0],o=s.children[1],l=t[n];l?(s.style.borderStyle="solid",s.style.borderWidth="1px",s.style.borderColor=l.accent,s.style.background="rgba(14,15,21,0.8)",r.style.color=l.accent,r.textContent=l.glyph,o.style.display="",o.textContent=String(l.level),this.seenSlots.has(l.id)||(this.seenSlots.add(l.id),s.animate([{transform:"scale(1.6)",filter:"brightness(2.2)"},{transform:"scale(1)",filter:"brightness(1)"}],{duration:420,easing:"ease-out"}))):(s.style.borderStyle="dashed",s.style.borderWidth="1px",s.style.borderColor="rgba(232,198,103,0.16)",s.style.background="rgba(10,11,16,0.4)",r.style.color="rgba(232,198,103,0.22)",r.textContent="·",o.style.display="none",o.textContent="")}}resetSlots(){this.seenSlots.clear(),this.weaponsFullSeen=!1;const e=this.slotBar._w,t=this.slotBar._p;e.textContent="",t.textContent=""}update(e){const t=Math.floor(e.time/60),i=Math.floor(e.time%60);this.timerEl.textContent=`${t.toString().padStart(2,"0")}:${i.toString().padStart(2,"0")}`,this.killsEl.textContent=`${ie("hudKillsLabel")} ${e.kills}`,this.levelEl.textContent=`Lv ${e.level}`,this.goldEl.textContent=`⟡ ${Math.floor(e.gold)}`,this.xpFill.style.width=`${Math.min(100,e.xp/e.nextXp*100)}%`;const n=Math.max(0,e.hp/e.maxHp*100);this.hpFill.style.width=`${n}%`,this.hpDelay.style.width=`${n}%`,this.hpText.textContent=`${Math.ceil(e.hp)} / ${Math.round(e.maxHp)}`,this.touch||(this.musouFill.style.width=`${Math.min(100,e.musouPct)}%`,e.musouReady&&!this.wasReady?(this.musouHint.style.opacity="1",this.musouWrap.animate([{filter:"brightness(1)"},{filter:"brightness(1.8)"},{filter:"brightness(1)"}],{duration:900,iterations:1/0})):!e.musouReady&&this.wasReady&&(this.musouHint.style.opacity="0",this.musouWrap.getAnimations().forEach(s=>s.cancel())),this.wasReady=e.musouReady),e.combo>=3?(this.comboEl.style.display="flex",this.comboEl.innerHTML=`<div style="color:#f0e4c0;font-size:52px;line-height:1;font-variant-numeric:tabular-nums;">${e.combo}</div><div style="color:#e8c667;font-size:16px;letter-spacing:2px;">${ie("hudCombo")}</div>`,e.combo!==this.lastCombo&&this.punchCombo()):this.comboEl.style.display="none",this.lastCombo=e.combo,e.bossActive?(this.bossWrap.style.display="flex",this.bossName.textContent=`${e.bossName} ${e.bossHanja}`,this.bossFill.style.width=`${Math.max(0,e.bossFrac*100)}%`):this.bossWrap.style.display="none",e.bossActive!==this.bossActiveNow&&(this.bossActiveNow=e.bossActive,this.reflowQuote())}punchLevel(){this.levelEl.animate([{transform:"scale(1.35)",color:"#e8c667"},{transform:"scale(1)",color:"#c9cdda"}],{duration:260,easing:"ease-out"})}punchCombo(){this.comboEl.animate([{transform:"scale(1.3)"},{transform:"scale(1)"}],{duration:140,easing:"ease-out"})}banner(e,t,i,n=1400,s=0){for(this.bannerQueue.push({text:e,color:t,sizePx:i,durationMs:n,priority:s,seq:this.bannerSeq++});this.bannerQueue.length>2;){let r=0;for(let o=1;o<this.bannerQueue.length;o++){const l=this.bannerQueue[o],h=this.bannerQueue[r];(l.priority<h.priority||l.priority===h.priority&&l.seq<h.seq)&&(r=o)}this.bannerQueue.splice(r,1)}this.bannerPlaying||this.playNextBanner()}playNextBanner(){if(this.bannerQueue.length===0){this.bannerPlaying=!1;return}let e=0;for(let s=1;s<this.bannerQueue.length;s++){const r=this.bannerQueue[s],o=this.bannerQueue[e];(r.priority>o.priority||r.priority===o.priority&&r.seq<o.seq)&&(e=s)}const t=this.bannerQueue.splice(e,1)[0];this.bannerPlaying=!0;const i=document.createElement("div");i.textContent=t.text,i.style.cssText=["position:absolute",`color:${t.color}`,`font-size:min(${t.sizePx}px, 13vw)`,"letter-spacing:6px",`text-shadow:0 0 24px ${t.color}`,"white-space:nowrap"].join(";"),this.bannerLayer.appendChild(i);const n=i.animate([{transform:"scale(0.6)",opacity:0},{transform:"scale(1.1)",opacity:1,offset:.2},{transform:"scale(1)",opacity:1,offset:.75},{transform:"scale(1.05)",opacity:0}],{duration:t.durationMs,easing:"ease-out"});n.onfinish=()=>{i.remove(),this.playNextBanner()}}quote(e,t,i=3600){if(!t)return;this.quoteLayer.textContent="";const n=document.createElement("div");n.className="battle-quote",n.style.cssText=["width:min(680px,92vw)","padding:10px 16px","border:1px solid rgba(126,200,255,0.45)","border-radius:10px","background:linear-gradient(90deg,rgba(8,14,24,0.92),rgba(15,25,38,0.86))","box-shadow:0 4px 22px rgba(0,0,0,0.5),0 0 20px rgba(80,160,240,0.16)","display:flex","gap:10px","align-items:baseline","color:#e9f4ff","font-size:min(15px,3.6vw)","letter-spacing:0.4px","white-space:normal"].join(";");const s=document.createElement("b");s.textContent=e,s.style.cssText="color:#7ec8ff;white-space:nowrap;letter-spacing:2px;flex-shrink:0;";const r=document.createElement("span");r.textContent=`“${t}”`,r.style.cssText="line-height:1.4;",n.appendChild(s),n.appendChild(r),this.quoteLayer.appendChild(n);const o=n.animate([{transform:"translateY(-12px)",opacity:0},{transform:"translateY(0)",opacity:1,offset:.15},{transform:"translateY(0)",opacity:1,offset:.82},{transform:"translateY(-6px)",opacity:0}],{duration:i,easing:"ease-out"});o.onfinish=()=>n.remove()}}const mn={zhaoyun:{id:"zhaoyun",name:"조운",hanja:"趙雲",sheet:"sgrade",charIndex:17,baseHp:100,baseSpeed:5.2,speedMul:1.1,damageMul:1,maxHpMul:1,cooldownMul:1,rangeMul:1,dmgTakenMul:1,startWeapon:"spear",bonusText:"이동속도 +10%",musou:"zhaoyun"},guanyu:{id:"guanyu",name:"관우",hanja:"關羽",sheet:"sgrade",charIndex:5,baseHp:110,baseSpeed:4.9,speedMul:1,damageMul:1.15,maxHpMul:1,cooldownMul:1,rangeMul:1,dmgTakenMul:1,startWeapon:"guandao",bonusText:"공격력 +15%",musou:"guanyu"},zhangfei:{id:"zhangfei",name:"장비",hanja:"張飛",sheet:"sgrade",charIndex:15,baseHp:100,baseSpeed:4.8,speedMul:1,damageMul:1,maxHpMul:1.25,cooldownMul:1,rangeMul:1,dmgTakenMul:1,startWeapon:"zhangba",bonusText:"최대체력 +25%",musou:"zhangfei"},zhugeliang:{id:"zhugeliang",name:"제갈량",hanja:"諸葛亮",sheet:"sgrade",charIndex:19,baseHp:90,baseSpeed:4.9,speedMul:1,damageMul:1,maxHpMul:1,cooldownMul:.9,rangeMul:1,dmgTakenMul:1,startWeapon:"baiyu",bonusText:"쿨다운 -10%",musou:"zhugeliang"},huangzhong:{id:"huangzhong",name:"황충",hanja:"黃忠",sheet:"sgrade",charIndex:6,baseHp:95,baseSpeed:4.9,speedMul:1,damageMul:1,maxHpMul:1,cooldownMul:1,rangeMul:1.2,dmgTakenMul:1,startWeapon:"crossbow",bonusText:"사거리·투사체속도 +20%",musou:"huangzhong"},sunshangxiang:{id:"sunshangxiang",name:"손상향",hanja:"孫尚香",sheet:"sgrade",charIndex:20,baseHp:90,baseSpeed:5.3,speedMul:1.1,damageMul:1,maxHpMul:1,cooldownMul:1,rangeMul:1.15,dmgTakenMul:1,startWeapon:"twinring",bonusText:"사거리·투사체속도 +15%, 이동속도 +10%",musou:"sunshangxiang"},lvbu:{id:"lvbu",name:"여포",hanja:"呂布",sheet:"sgrade",charIndex:10,baseHp:120,baseSpeed:5,speedMul:1,damageMul:1.25,maxHpMul:1,cooldownMul:1,rangeMul:1,dmgTakenMul:1.25,startWeapon:"halberd",bonusText:"공격력 +25%, 받는 피해 +25%",musou:"lvbu"}},qw={title:"bgm-title.mp3",battle:"bgm-battle.mp3",boss:"bgm-boss.mp3",siege:"bgm-siege.mp3",victory:"jingle-victory.mp3",defeat:"jingle-defeat.mp3"},Tl=1.2,$w=2;class jw{ctx=null;master=null;musicBus=null;sfxBus=null;noise=null;buffers={};loading={};current=null;fading=null;wantBgm=null;muted=!1;hitCount=0;gemStep=0;gemStepAt=0;init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}try{const s=window.AudioContext??window.webkitAudioContext;this.ctx=new s}catch{this.ctx=null;return}const e=this.ctx,t=e.createDynamicsCompressor();t.threshold.value=-14,t.knee.value=24,t.ratio.value=4,t.attack.value=.003,t.release.value=.25,t.connect(e.destination),this.master=e.createGain(),this.master.gain.value=this.muted?0:1,this.master.connect(t),this.musicBus=e.createGain(),this.musicBus.gain.value=.55,this.musicBus.connect(this.master),this.sfxBus=e.createGain(),this.sfxBus.gain.value=.9,this.sfxBus.connect(this.master);const i=e.sampleRate*.5;this.noise=e.createBuffer(1,i,e.sampleRate);const n=this.noise.getChannelData(0);for(let s=0;s<i;s++)n[s]=Math.random()*2-1;this.resume(),this.wantBgm&&this.playBgm(this.wantBgm)}async resume(){if(this.ctx&&this.ctx.state==="suspended")try{await this.ctx.resume()}catch{}}get initialized(){return this.ctx!==null}setMuted(e){if(this.muted=e,this.master&&this.ctx){const t=this.ctx.currentTime;this.master.gain.cancelScheduledValues(t),this.master.gain.setTargetAtTime(e?0:1,t,.05)}}toggleMuted(){return this.setMuted(!this.muted),this.muted}base(){return"/threesur/assets/audio/"}ensureBuffer(e){if(!this.ctx||this.buffers[e]||this.loading[e])return;const t=qw[e];t&&(this.loading[e]=!0,fetch(this.base()+t).then(i=>i.arrayBuffer()).then(i=>this.ctx.decodeAudioData(i)).then(i=>{this.buffers[e]=i,this.loading[e]=!1,this.wantBgm===e&&(!this.current||this.current.name!==e)&&this.startBgm(e,i,!0)}).catch(()=>{this.loading[e]=!1}))}playBgm(e){if(this.wantBgm=e,!this.ctx||!this.musicBus||this.current&&this.current.name===e)return;const t=this.buffers[e];if(!t){this.ensureBuffer(e),this.fadeOutCurrent();return}this.startBgm(e,t,!0)}playJingle(e){if(this.wantBgm=null,!this.ctx||!this.musicBus)return;this.fadeOutCurrent();const t=this.buffers[e];if(!t){this.ensureBuffer(e);let i=!1;const n=()=>{if(i)return;const s=this.buffers[e];s&&(i=!0,this.startBgm(e,s,!1))};setTimeout(n,400),setTimeout(n,1200);return}this.startBgm(e,t,!1)}startBgm(e,t,i){if(!this.ctx||!this.musicBus)return;const n=this.ctx.currentTime;this.fadeOutCurrent();const s=this.ctx.createBufferSource();s.buffer=t,s.loop=i;const r=this.ctx.createGain();r.gain.setValueAtTime(0,n),r.gain.linearRampToValueAtTime(1,n+Tl),s.connect(r).connect(this.musicBus),s.start(),i?this.current={src:s,gain:r,name:e}:s.onended=()=>{try{s.disconnect(),r.disconnect()}catch{}}}hardStopFading(){if(!this.fading||!this.ctx)return;const e=this.ctx.currentTime,{src:t,gain:i}=this.fading;try{i.gain.cancelScheduledValues(e),i.gain.setValueAtTime(0,e),t.stop(e+.02)}catch{}this.fading=null}fadeOutCurrent(){if(!this.ctx||!this.current)return;this.hardStopFading();const e=this.ctx.currentTime,{src:t,gain:i}=this.current;i.gain.cancelScheduledValues(e),i.gain.setValueAtTime(i.gain.value,e),i.gain.linearRampToValueAtTime(0,e+Tl);try{t.stop(e+Tl+.05)}catch{}const n={src:t,gain:i};this.fading=n,t.onended=()=>{this.fading===n&&(this.fading=null);try{t.disconnect(),i.disconnect()}catch{}},this.current=null}stopBgm(){this.wantBgm=null,this.fadeOutCurrent()}endFrame(){this.hitCount=0}sfx(e){if(!this.ctx||!this.sfxBus||this.ctx.state!=="running")return;if(e==="hit"){if(this.hitCount>=$w)return;this.hitCount++}const t=this.ctx.currentTime;switch(e){case"hit":this.playHit(t);break;case"gem":this.playGem(t);break;case"levelup":this.playGong(t,220,1.4,.5),this.playGong(t+.02,330,1.2,.35);break;case"cardSelect":this.playBlip(t,660,.08,"square",.18),this.playBlip(t+.05,990,.07,"square",.14);break;case"musou":this.playDrum(t),this.playHum(t);break;case"bossHorn":this.playHorn(t);break;case"evolve":this.playSweep(t);break;case"playerHit":this.playThud(t);break;case"playerHitProj":this.playBlip(t,92,.11,"sine",.3),this.playBlip(t+.012,128,.07,"triangle",.16);break;case"revive":this.playGong(t,523,2.2,.4),this.playGong(t+.08,784,2,.3),this.playGong(t+.16,1046,1.8,.24);break;case"uiClick":this.playBlip(t,440,.05,"triangle",.12);break;case"relic":this.playSweep(t),this.playGong(t,147,1.8,.4);break;case"buff":this.playGong(t,587,1,.34),this.playGong(t+.07,880,.9,.26);break;case"warn":this.playHorn(t);break;case"fever":this.playDrum(t),this.playBlip(t,660,.08,"square",.16),this.playBlip(t+.06,990,.08,"square",.14),this.playBlip(t+.12,1320,.08,"square",.12);break;case"explosion":this.playThud(t),this.playHit(t);break;case"heartbeat":this.playBlip(t,70,.09,"sine",.18),this.playBlip(t+.13,58,.11,"sine",.14);break;case"achievement":this.playGong(t,659,1.6,.34),this.playGong(t+.09,988,1.4,.26),this.playGong(t+.18,1319,1.2,.2);break}}env(e,t,i,n,s){e.gain.setValueAtTime(0,t),e.gain.linearRampToValueAtTime(i,t+n),e.gain.exponentialRampToValueAtTime(1e-4,t+n+s)}playHit(e){const t=this.ctx,i=t.createOscillator();i.type="sine",i.frequency.setValueAtTime(180,e),i.frequency.exponentialRampToValueAtTime(60,e+.09);const n=t.createGain();this.env(n,e,.5,.002,.09),i.connect(n).connect(this.sfxBus),i.start(e),i.stop(e+.12);const s=t.createBufferSource();s.buffer=this.noise;const r=t.createBiquadFilter();r.type="bandpass",r.frequency.value=1400,r.Q.value=.8;const o=t.createGain();this.env(o,e,.28,.001,.05),s.connect(r).connect(o).connect(this.sfxBus),s.start(e),s.stop(e+.07)}playGem(e){const t=this.ctx;e-this.gemStepAt<.8?this.gemStep=Math.min(14,this.gemStep+1):this.gemStep=0,this.gemStepAt=e;const i=[0,2,4,7,9],n=Math.floor(this.gemStep/5),s=i[this.gemStep%5]+n*12,r=523.25*Math.pow(2,s/12),o=t.createOscillator();o.type="triangle",o.frequency.setValueAtTime(r,e);const l=t.createGain();this.env(l,e,.16,.004,.14),o.connect(l).connect(this.sfxBus),o.start(e),o.stop(e+.18)}playGong(e,t,i,n){const s=this.ctx,r=s.createOscillator();r.type="sine",r.frequency.setValueAtTime(t,e),r.frequency.exponentialRampToValueAtTime(t*.985,e+i);const o=s.createGain();this.env(o,e,n,.006,i);const l=s.createOscillator();l.type="sine",l.frequency.setValueAtTime(t*2.76,e);const h=s.createGain();this.env(h,e,n*.3,.006,i*.5),r.connect(o).connect(this.sfxBus),l.connect(h).connect(this.sfxBus),r.start(e),r.stop(e+i+.1),l.start(e),l.stop(e+i+.1)}playBlip(e,t,i,n,s){const r=this.ctx,o=r.createOscillator();o.type=n,o.frequency.setValueAtTime(t,e);const l=r.createGain();this.env(l,e,s,.002,i),o.connect(l).connect(this.sfxBus),o.start(e),o.stop(e+i+.02)}playDrum(e){const t=this.ctx,i=t.createOscillator();i.type="sine",i.frequency.setValueAtTime(160,e),i.frequency.exponentialRampToValueAtTime(45,e+.25);const n=t.createGain();this.env(n,e,.8,.002,.35),i.connect(n).connect(this.sfxBus),i.start(e),i.stop(e+.4);const s=t.createBufferSource();s.buffer=this.noise;const r=t.createBiquadFilter();r.type="lowpass",r.frequency.value=800;const o=t.createGain();this.env(o,e,.4,.001,.08),s.connect(r).connect(o).connect(this.sfxBus),s.start(e),s.stop(e+.1)}playHum(e){const t=this.ctx,i=t.createOscillator();i.type="sawtooth",i.frequency.setValueAtTime(70,e);const n=t.createBiquadFilter();n.type="lowpass",n.frequency.value=220;const s=t.createGain();s.gain.setValueAtTime(0,e),s.gain.linearRampToValueAtTime(.22,e+.15),s.gain.linearRampToValueAtTime(.18,e+.6),s.gain.exponentialRampToValueAtTime(1e-4,e+1.1),i.connect(n).connect(s).connect(this.sfxBus),i.start(e),i.stop(e+1.2)}playHorn(e){const t=this.ctx,i=t.createOscillator();i.type="sawtooth",i.frequency.setValueAtTime(140,e),i.frequency.linearRampToValueAtTime(175,e+.5);const n=t.createOscillator();n.frequency.value=5.5;const s=t.createGain();s.gain.value=6,n.connect(s).connect(i.frequency);const r=t.createBiquadFilter();r.type="lowpass",r.frequency.value=900;const o=t.createGain();o.gain.setValueAtTime(0,e),o.gain.linearRampToValueAtTime(.5,e+.12),o.gain.linearRampToValueAtTime(.45,e+.9),o.gain.exponentialRampToValueAtTime(1e-4,e+1.4),i.connect(r).connect(o).connect(this.sfxBus),i.start(e),i.stop(e+1.5),n.start(e),n.stop(e+1.5)}playSweep(e){const t=this.ctx,i=t.createOscillator();i.type="sine",i.frequency.setValueAtTime(300,e),i.frequency.exponentialRampToValueAtTime(1200,e+.6);const n=t.createGain();this.env(n,e,.4,.02,.6),i.connect(n).connect(this.sfxBus),i.start(e),i.stop(e+.7);const s=t.createOscillator();s.type="triangle",s.frequency.setValueAtTime(900,e),s.frequency.exponentialRampToValueAtTime(2400,e+.5);const r=t.createGain();this.env(r,e+.05,.18,.02,.45),s.connect(r).connect(this.sfxBus),s.start(e),s.stop(e+.6)}playThud(e){const t=this.ctx,i=t.createBufferSource();i.buffer=this.noise;const n=t.createBiquadFilter();n.type="lowpass",n.frequency.value=300;const s=t.createGain();this.env(s,e,.45,.002,.16),i.connect(n).connect(s).connect(this.sfxBus),i.start(e),i.stop(e+.2);const r=t.createOscillator();r.type="sine",r.frequency.setValueAtTime(90,e),r.frequency.exponentialRampToValueAtTime(50,e+.15);const o=t.createGain();this.env(o,e,.35,.002,.15),r.connect(o).connect(this.sfxBus),r.start(e),r.stop(e+.2)}}const Re=new jw,Pn={zhaoyun:{id:"liubei",name:"유비",hanja:"劉備",charIndex:7,attack:"slash",damage:30,cooldown:1.1,special:"rally",specialCd:16,line:{ko:"함께 갑시다!",en:"Forward, together!"},cr:1.6,cg:1.3,cb:.5},guanyu:{id:"caocao",name:"조조",hanja:"曹操",charIndex:0,attack:"lightning",damage:34,cooldown:1.45,special:"triplebolt",specialCd:18,line:{ko:"천하는 내 것이다",en:"The realm is mine."},cr:.7,cg:1,cb:2.4},zhangfei:{id:"zhaoyun",name:"조운",hanja:"趙雲",charIndex:17,attack:"slash",damage:32,cooldown:1,special:"pierce",specialCd:15,line:{ko:"이 한 몸으로 뚫겠소!",en:"I'll cut clean through!"},cr:.6,cg:1.4,cb:2.3},zhugeliang:{id:"zhouyu",name:"주유",hanja:"周瑜",charIndex:18,attack:"lightning",damage:36,cooldown:1.5,special:"firefan",specialCd:18,line:{ko:"적벽의 불을 보아라",en:"Behold the flames of Chibi!"},cr:2.4,cg:1,cb:.35},huangzhong:{id:"liubei",name:"유비",hanja:"劉備",charIndex:7,attack:"slash",damage:30,cooldown:1.1,special:"rally",specialCd:16,line:{ko:"함께 갑시다!",en:"Forward, together!"},cr:1.6,cg:1.3,cb:.5},lvbu:{id:"zhangliao",name:"장료",hanja:"張遼",charIndex:16,attack:"slash",damage:36,cooldown:1.05,special:"chargesweep",specialCd:16,line:{ko:"장료, 여기 있다!",en:"Zhang Liao stands here!"},cr:1.8,cg:1.5,cb:.7}},Fu=45,Zw=270,Yw=[Pn.zhaoyun,Pn.guanyu,Pn.zhangfei,Pn.zhugeliang,Pn.lvbu];function Kw(a,e){const t=Yw.filter(i=>i.id!==a);return t[e()*t.length|0]}function Jw(a){return we()==="en"?a.line.en:a.line.ko}const Qw=15,eM=7,tM=.64;class Du{active=!1;attacks=0;kills=0;x=0;z=0;radius=.45;def=Pn.zhaoyun;sheet;quad;blockPx=0;dir=0;frame=0;animTime=0;attackTimer=0;specialTimer=0;posRingT=0;side=1;joinTime=Fu;specialPhase=0;damageScale=1;joinDirX=0;joinDirZ=1;playerLevel=1;musouActive=!1;pendingSpecial=null;uv={u:0,v:0};constructor(e,t,i){this.sheet=t.sgrade,this.quad=new zf(this.sheet,i,2.15),this.quad.setTint(.72,1.12,1.5),this.quad.setAlly(!0),this.quad.mesh.visible=!1,e.add(this.quad.mesh)}get definition(){return this.def}consumeSpecialEvent(){const e=this.pendingSpecial;return this.pendingSpecial=null,e}reset(e,t){this.def=t?.def??Pn[e]??Pn.zhaoyun,this.blockPx=this.def.charIndex*4*Dn,this.side=t?.side??1,this.joinTime=t?.joinTime??Fu,this.specialPhase=t?.specialPhase??0,this.damageScale=1,this.active=!1,this.attacks=0,this.kills=0,this.animTime=0,this.attackTimer=0,this.specialTimer=0,this.pendingSpecial=null,this.quad.mesh.visible=!1}update(e,t,i,n,s,r){this.playerLevel=s,this.musouActive=r;let o=!1;if(!this.active){if(t<this.joinTime)return!1;this.active=!0,this.x=i.x-i.faceX*2.2+this.side*i.faceZ*1.4,this.z=i.z-i.faceZ*2.2-this.side*i.faceX*1.4,this.joinDirX=i.faceX||0,this.joinDirZ=i.faceZ||1,this.quad.mesh.visible=!0,this.specialTimer=this.def.specialCd*.5+this.specialPhase,this.joinSetpiece(n,i),o=!0}const l=i.x-i.faceX*2.2+this.side*i.faceZ*1.4,h=i.z-i.faceZ*2.2-this.side*i.faceX*1.4;let c=l-this.x,d=h-this.z;if(Math.hypot(c,d)>14)this.x=l,this.z=h,c=0,d=0;else{const m=1-Math.exp(-4.5*e);this.x+=c*m,this.z+=d*m}const f=Math.hypot(c,d)>.08;return this.dir=Ws(c,d,this.dir),f?(this.animTime+=e,this.frame=(this.animTime*eM|0)%4):this.frame=0,this.specialTimer-=e,this.specialTimer<=0&&this.nearestEnemy(n,18)>=0&&(this.useSpecial(n,i),this.specialTimer=this.def.specialCd),this.attackTimer-=e,this.attackTimer<=0&&this.attack(n),this.posRingT-=e,this.posRingT<=0&&(this.posRingT=.55,n.effects.spawnRing(this.x,this.z,1.5,.4,1.2,2,.5)),dc(this.sheet,this.blockPx,0,this.dir,this.frame,this.uv),this.quad.setUv(this.uv.u,this.uv.v),this.quad.setPosition(this.x,0,this.z),o}dmg(e,t){return e*t.stats.damageMul*(1+this.playerLevel*.05)*this.damageScale}nearestEnemy(e,t){const i=e.enemies,n=e.hash.query(this.x,this.z,t,e.scratch);let s=-1,r=t*t;for(let o=0;o<n;o++){const l=e.scratch[o];if(i.alive[l]===0)continue;const h=i.x[l]-this.x,c=i.z[l]-this.z,d=h*h+c*c;d<r&&(r=d,s=l)}return s}joinSetpiece(e,t){const i=this.def,n=t.faceX||0,s=t.faceZ||1;for(let r=1;r<=4;r++)e.particles.dust(this.x-n*(1.2*r),this.z-s*(1.2*r));e.effects.spawnThrust(this.x-n*4.5,this.z-s*4.5,n,s,4.5,1.4,i.cr,i.cg,i.cb,.2),e.effects.spawnFlash(this.x,this.z,i.cr,i.cg,i.cb,2),e.effects.spawnRing(this.x,this.z,2.8,i.cr,i.cg,i.cb,.45),this.aoe(e,this.x,this.z,6,this.dmg(60,e),7)}attack(e){const t=this.nearestEnemy(e,Qw);if(t<0){this.attackTimer=.25;return}const i=e.enemies,n=i.x[t]-this.x,s=i.z[t]-this.z,r=Math.hypot(n,s)||1,o=n/r,l=s/r,h=this.dmg(this.def.damage,e),c=this.musouActive?1.3:1;if(this.def.attack==="lightning"){e.effects.spawnChainArc(this.x,this.z,i.x[t],i.z[t],this.def.cr,this.def.cg,this.def.cb),this.hit(e,t,o,l,h*c,3);const u=this.nearestOther(e,i.x[t],i.z[t],t,6);u>=0&&(e.effects.spawnChainArc(i.x[t],i.z[t],i.x[u],i.z[u],this.def.cr,this.def.cg,this.def.cb),this.hit(e,u,o,l,h*.8*c,2))}else e.effects.spawnSlashArc(this.x,this.z,o,l,5.5,.9,this.def.cr,this.def.cg,this.def.cb,.18),this.cone(e,o,l,5.5,h*c,4);this.attacks++;let d=this.def.cooldown*e.stats.cooldownMul;this.musouActive&&(d*=.5),this.attackTimer=d}useSpecial(e,t){const i=this.def;switch(i.special){case"rally":{e.effects.spawnRing(this.x,this.z,9,i.cr,i.cg,i.cb,.6),e.effects.spawnFlash(this.x,this.z,i.cr,i.cg,i.cb,4),this.aoe(e,this.x,this.z,9,this.dmg(70,e),6),t.heal(t.maxHp*.05);break}case"triplebolt":{for(let n=0;n<3;n++){const s=this.nthEnemy(e,18,n);if(s<0)break;e.effects.spawnLightning(e.enemies.x[s],e.enemies.z[s],i.cr,i.cg,i.cb),this.aoe(e,e.enemies.x[s],e.enemies.z[s],3.2,this.dmg(55,e),3)}break}case"pierce":{const n=this.nearestEnemy(e,18),s=n>=0?e.enemies.x[n]-this.x:t.faceX,r=n>=0?e.enemies.z[n]-this.z:t.faceZ,o=Math.hypot(s,r)||1,l=s/o,h=r/o;e.effects.spawnThrust(this.x,this.z,l,h,11,2.2,i.cr,i.cg,i.cb,.24),this.capsule(e,this.x,this.z,l,h,11,1.4,this.dmg(85,e),9),this.x+=l*8,this.z+=h*8,e.effects.spawnFlash(this.x,this.z,i.cr,i.cg,i.cb,3);break}case"firefan":{const n=this.nearestEnemy(e,18),s=n>=0?e.enemies.x[n]-this.x:t.faceX,r=n>=0?e.enemies.z[n]-this.z:t.faceZ,o=Math.hypot(s,r)||1,l=s/o,h=r/o;e.effects.spawnSlashArc(this.x,this.z,l,h,9,1.3,i.cr,i.cg,i.cb,.24),this.cone(e,l,h,9,this.dmg(60,e),5),e.zones.spawn(this.x+l*5,this.z+h*5,4,3,this.dmg(24,e),2.4,.9,.25);break}case"chargesweep":{e.effects.spawnRing(this.x,this.z,9,i.cr,i.cg,i.cb,.5),e.effects.spawnSlashArc(this.x,this.z,this.dir===2?1:-1,0,9,1.5,i.cr,i.cg,i.cb,.26),this.aoe(e,this.x,this.z,9,this.dmg(75,e),9);break}}this.pendingSpecial={line:Jw(i),cr:i.cr,cg:i.cg,cb:i.cb}}hit(e,t,i,n,s,r){const o=e.enemies;if(o.alive[t]===0)return;const l=o.damageAt(t,s);e.damageText.spawn(s,o.x[t],o.scale[t]*.7,o.z[t],!1),o.push(t,i,n,r),l&&e.onKill(t)}aoe(e,t,i,n,s,r){const o=e.enemies,l=e.hash.query(t,i,n,e.scratch);for(let h=0;h<l;h++){const c=e.scratch[h];if(o.alive[c]===0)continue;const d=o.x[c]-t,u=o.z[c]-i,f=d*d+u*u;if(f>n*n)continue;const m=Math.sqrt(f)||1,v=o.damageAt(c,s);e.damageText.spawn(s,o.x[c],o.scale[c]*.7,o.z[c],!1),o.push(c,d/m,u/m,r),v&&(this.kills++,e.onKill(c))}}cone(e,t,i,n,s,r){const o=e.enemies,l=e.hash.query(this.x,this.z,n,e.scratch);for(let h=0;h<l;h++){const c=e.scratch[h];if(o.alive[c]===0)continue;const d=o.x[c]-this.x,u=o.z[c]-this.z,f=d*d+u*u;if(f>n*n)continue;const m=Math.sqrt(f)||1;if(d/m*t+u/m*i<tM)continue;const v=o.damageAt(c,s);e.damageText.spawn(s,o.x[c],o.scale[c]*.7,o.z[c],!1),o.push(c,d/m,u/m,r),v&&(this.kills++,e.onKill(c))}}capsule(e,t,i,n,s,r,o,l,h){const c=e.enemies,d=t+n*r,u=i+s*r,f=(t+d)*.5,m=(i+u)*.5,v=e.hash.query(f,m,r*.5+o+1.2,e.scratch);for(let g=0;g<v;g++){const p=e.scratch[g];if(c.alive[p]===0)continue;const M=o+c.radius[p];let T=((c.x[p]-t)*n+(c.z[p]-i)*s)/(r||1);T<0?T=0:T>r&&(T=r);const w=t+n*T,A=i+s*T,_=c.x[p]-w,E=c.z[p]-A;if(_*_+E*E>M*M)continue;const x=c.damageAt(p,l);e.damageText.spawn(l,c.x[p],c.scale[p]*.7,c.z[p],!1),c.push(p,n,s,h),x&&(this.kills++,e.onKill(p))}}nearestOther(e,t,i,n,s){const r=e.enemies,o=e.hash.query(t,i,s,e.scratch);let l=-1,h=s*s;for(let c=0;c<o;c++){const d=e.scratch[c];if(d===n||r.alive[d]===0)continue;const u=r.x[d]-t,f=r.z[d]-i,m=u*u+f*f;m<h&&(h=m,l=d)}return l}nthEnemy(e,t,i){const n=e.enemies,s=e.hash.query(this.x,this.z,t,e.scratch);let r=0;for(let o=0;o<s;o++){const l=e.scratch[o];if(n.alive[l]!==0){if(r===i)return l;r++}}return-1}}const Uu={zhaoyun:{name:"Zhao Yun",select:"The horse may gallop, but the child at my back must not be shaken.",lines:["Beneath Gongsun Zan’s banner I first saw Liu Bei. I saw the man before the flag.","The mud of Changban caked upon my hooves. The child in my arms did not cry.","Many generals break through the front. Few hold the line at the rear.","When I brushed the dust from the young lord’s hem, my scabbard was still wet.","At the Han River I left the gates open like an empty fort. The enemy who entered lost the road he came by.","Merit is not counted from the saddle. It is counted by the heads that return.","Even beside my sworn brothers, my place is one step behind. Let that step empty, and the road is cut.","A “flawless general” is dust on a dry banner — the first to fall when the rain comes.","A guard chooses the path before the blade. Confuse whom to save with what to abandon, and the ranks collapse.","An old soldier’s horse never looks fast. It only returns at the same stride to the very end.","The lord’s household moves slower than the banners. He set that slowness at the heart of the battle.","Between Guan Yu’s silence and Zhang Fei’s roar, Zhao Yun tied his saddle-straps to the same length.","At dawn I pull the saddle-strap twice.","At noon I scout the empty path behind the camp first.","At dusk I quietly count the heads that came back.","At night I stand my spear by the door and keep my sleep shallow."]},guanyu:{name:"Guan Yu",select:"I repay the kindness I am given, then take my leave. Only so can I stand unashamed.",lines:["One blade settles the account. There is no need for long words.","Wherever my elder brother goes — through mire or arrow-storm — I follow.","A generous stipend cannot buy a man’s heart.","A name endures after death. Better to die once than live in disgrace.","A true warrior shows courtesy even to his foe — withholding it only from the lawless.","When private debt collides with duty, I repay the debt and return to the duty.","The man who must be cut falls in a single exchange. Long hesitation means he is one who should not be cut.","I speak little. A word once loosed is harder to take back than a sword.","I have worn this beard long. I see myself by men’s eyes, not by mirrors.","The loneliest road is the one you walk after sealing away a kindness. Yet it must be walked.","Since I took the gates of Jing, my laughter has thinned. The waters and men’s hearts sank together.","On the road to Maicheng I learned how long a neck outlasts its pride. Arrogance breaks before the head does.","At dawn I hone my blade and reckon the kindness I owe.","At noon I keep my back straight, free of shame.","At dusk I wipe the long blade and set my heart straight.","However deep the night, I have never forsaken what is right."]},zhangfei:{name:"Zhang Fei",select:"My spear knows only one thing — to clear the way before my brother.",lines:["Where my brother walks, I empty the road ahead.","Drink makes my hands quick. So before my brother I take one cup less.","One round of wine sorts the men you’d trust your back to from the ones who’d show you theirs.","That Cao Bao only reckons figures. A man who reckons will sell a wall by the ledger too.","The hand on the spear has never trembled. What trembled was always elsewhere.","Let my brother take the credit. I take my pay for clearing the road — in wine.","Between the day I first called him brother and today, no word of mine has gone soft. Words change only when men do.","A man to face, I call to the drinking table. A man to strike, I raise the spear first.","He who turns once turns twice. So I finish it the first time.","I can cut a foe even on a sober morning. The one thing I can’t take back is what I did before my brother, drunk.","When my brother falls asleep over a single cup, I grip the empty cup and watch the door.","I know my hand is heavy. So at my brother’s side I keep watching that hand.","At Changban Bridge the hooves stopped not by my voice alone — the child and cart behind me needed time to cross.","The hand that cherished the soldiers and the hand that drove them were the same hand. There were nights I could not stay it.","From dawn I swing the spear to loosen my body.","At noon I never leave my brother’s side empty.","When the sun sets, a bowl of wine calls.","The deeper the night, the clearer my brother’s words."]},zhugeliang:{name:"Zhuge Liang",select:"Record even a single bundle of straw in the ledger. Words that found a nation rot in an empty granary.",lines:["In the thatched hut at Longzhong the map was small. Small, so all three roads fit in one glance.","When Liu Bei came thrice, I was watching the field’s waterways. A field may change owners, but it never lies about water.","The hut’s door opened three times. Before he asked for a map of the realm, Liu Bei asked how many would stay at his side.","Even in persuading Sun Quan, grain came before words. No alliance crosses on an empty hull.","The mountain roads of Nanzhong were not opened by the sword alone. The man set free comes back knowing the next road.","The Memorial on Sending Out the Army was not written in tears. Once the ink dried, the grain-tallies were pinned beside it.","The northern campaign is not the business of banners. It is the business of shoe-soles and storehouse doors.","Sima Yi knew the art of not fighting. So I was the first to smell the grain rotting.","At Wuzhang Plain the lamp went out later than the war-orders. Before Sima Yi’s shut gate, the empty ledger lingered longest.","The law must stand cold. Grip it with a warm hand and it leaves a mark.","The law shines later than the sword, yet lasts longer. When the grain doesn’t add up, even loyalty starves on the road.","With each step north, the weight of the southern granaries settles on my shoulders. The night grows short over the ledgers.","At dawn I tighten the cords of the Longzhong bamboo-slips.","At noon I lay the storehouse key atop the war-orders.","At dusk I study the shoe-soles bound for the northern road.","At night I rub the dry ink of the Memorial with my fingertip."]},huangzhong:{name:"Huang Zhong",select:"The old arm rises slowly. The loosed arrow does not age.",lines:["When I faced Guan Yu at the walls of Changsha, my bowstring answered first.","He who asks my age does not know my range. An arrow flies no shorter for the years it is asked.","The road into Shu was full of young feet. At the front stood a single white beard.","The war-drums of Mount Dingjun came down from the heights. Xiahou Yuan’s banner folded beneath them.","Fa Zheng pointed to the high ground; I looked to the low. That was where the road down lay.","A man who earns his merit late cannot count it in place of those who died first.","My bow is no banquet trick. A hit takes one man away; a miss gives one of mine.","When the young generals laugh, I polish my arrowheads — until the laughter stops.","An old arm does not tremble before a young one. It only has less time to hide a wasted shot.","The wind at Mount Dingjun never asked my age. It asked only where to strike and where to breathe.","In Liu Bei’s tent my name was called late. The later the name, the longer a miss is remembered.","Xiahou Yuan hurried; I waited long. High ground makes a fast horse look smaller still.","At dawn I draw the string back to my ear once.","At noon I dry three arrowheads in the sun.","At dusk I measure the shadow of the high ridge.","At night I rub the bowstring’s mark left in my knuckles."]},lvbu:{name:"Lü Bu",select:"It has been long since I set any man above me.",lines:["I did not raise the walls of Xiapi. Yet it is my halberd that holds them.","Yuan Shu sought a marriage. Chen Gui came, talked a long while, and left. A son-in-law’s seat, he said, is soon a bound one.","The Sky Piercer is not heavy. What is heavy are the eyes that weigh the hand that lifts it.","I took Liu Bei in, and Liu Bei eyed my seat. I do not take a man in twice.","They say there is a man called Guan Yu. Cross spears once, and I shall know.","Ding Yuan and Dong Zhuo both kept me as a son. Both died by my hand. That is what it means to keep a man close.","Chen Gong reckons sharply; Gao Shun holds his tongue. Both are still at my side. How long that lasts, I do not know.","A day is enough to seize a city. A lifetime to hold one.","I speak little. My halberd says it all.","They say the Si River has risen. When the dike breaks, who is swept off first remains to be seen.","Red Hare is not my horse. Should I halt, even that steed will not look my way.","They say Cao Cao chooses his men. Whether I am the one who chooses, or the horse he chose, I still do not know.","The horse wakes and cries first. Then I rise.","When the noon range stands empty, I fill it.","When the day darkens, the wine goes round. Whose cup is it tonight?","At night, Red Hare is nearest of all."]},yuanshao:{name:"Yuan Shao",select:"The name “Four Generations, Three Excellencies” is not one I made. Yet the back that bears its weight is mine.",lines:["Han Fu raised the seal of Ji Province up in both hands. Half a day to receive it — and even over that half-day, those beside me hesitated.","I count the caps ranged below the hall. Tian Feng’s cap and Guo Tu’s cap face different ways. That discord slows my reckoning.","Yan Liang and Wen Chou stand leaning on their spears, awaiting the word. When the mouth that gives it is late, the planted spear grows heavy first.","The storehouses of Ye are the deepest in Hebei. The deeper the store, the slower the hand that sets the day to empty it.","There is a man called Cao Cao — a eunuch’s grandson, I am told. To speak of his birth and to count him in one’s reckoning are two different things.","Ju Shou spread the plan; Feng Ji folded it. Both cannot be right. Choosing the right one cost another day.","That we produced Three Excellencies across four generations does not come to the table as a meal. Yet without that word, the caps that follow me halve.","Gongsun Zan’s cavalry is fast. The fast wears out first. I am the sort who waits for the wearing. If the long wait is a flaw, then it is my flaw.","When I keep a man close, I look first at his birth. That habit raised me to nobility, and made me slow.","Tian Feng spoke rightly. Right words always grate on the ear. Cage them for grating, and that rightness rots in the cell.","By night I number the counties of Hebei. I know how to count. I only cannot fix the day to strike all at once.","Men kneel before my name before my blade. That kneeling has pressed a foe down before my sword ever did.","The name of Four Generations, Three Excellencies rests on my shoulders from dawn.","All noon I admit the guests ranged before my gate.","Till the sun sets I weigh whom to seat above whom.","A noble house’s back cannot bow, even at night."]},dongzhuo:{name:"Dong Zhuo",select:"A capital’s gate is not opened with iron. It is opened with starved war-horses and a frightened seal.",lines:["The dust of Xiliang reached the very halls of Luoyang. The brushes upon those halls coughed first.","Deposing an emperor is no matter drawn from a scabbard. The count of hooves outside the tent decides it first.","The burned beams of Luoyang smoldered long. The soaked people breathed that smoke together.","The granaries of Mei were deep. A deep granary shuts before a starving city does.","I kept Lü Bu close. A near blade enters faster than a distant foe.","Wang Yun’s words were thin. Thin words cut the armor-cord between two men.","The banners of Guandong were many. Many, so they moved slowly — and being slow, I sat long.","Word that Cao Cao entered with a blade in his robe came to me late. Late-heard words make me cut the hearer first.","Even beneath burning beams, Jia Xu counted the door to slip out by. Such reckoning is colder than any sword.","The Chancellor’s seal was larger than my palm. Yet a large seal could not shield a neck.","Thirty years of grain lay heaped at Mei. That grain counted the spring of my war-horses before the winter of the people.","All who pass the palace gate lower their waists. A lowered waist hears the next command the faster.","At dawn I have the Xiliang horses’ feed measured first.","At noon I leave the seal-chest open before the palace gate.","At dusk I beat the smell of Luoyang’s smoke from my armor.","At night I watch which way the near blade points."]},liubei:{name:"Liu Bei",select:"A seat, once lost, is merely lost. A man, once lost, does not return.",lines:["These are hands that once wove mats in Zhuo County. Those same hands still grip a sword.","Two younger brothers call me elder. I have not yet paid the worth of that name in full.","When I gave up Xiapi, I counted the people within the walls before the walls themselves.","What Lü Bu holds is a city. What I hold are the footprints of those who followed me.","Mi Zhu is a man sharp with figures. Such a man threw in his lot with one like me.","The house of Han is far, and the hungry mouths beside me are near. I grope for the road that turns its back on neither.","If gaining one general costs one city, I will give up the city.","In all my wandering, what I lost was land, not men. That much I kept.","They attach “kinsman of the throne” to my name. That word never became a meal.","By night I walk the tents and number the men — whether fewer remain than came in.","Even before I heard the name Kongming, I knew how to wait before a thatched hut for a man.","The night wind at Baidicheng is colder than defeat. Still I must choose the words to leave beside a young king.","I have not yet forgotten the hands that wove straw sandals at dawn.","By day I meet people. A realm stands on people.","At the evening table I always leave one seat empty.","The longer the night, the more I count my brothers’ faces."]},caocao:{name:"Cao Cao",select:"A man to use or a man to discard — that I will judge first.",lines:["I took in three hundred thousand of Qing Province’s surrendered and sifted them — keeping the useful, scattering the idle mouths.","A man of talent I take in even with a crime. The realm is in chaos; where would I find enough flawless men?","The day Guo Jia came, I did not write that one man was added. I wrote that one strategist was gained.","Xun Yu remonstrates again. He is right, so I listen. Heeding right words costs a ruler no dignity.","On the road to Xuzhou a row of carts stands empty. At that road’s end, one account remains to be settled.","Zhang Miao and I once drank at the same table. That hand drew Lü Bu in.","I left the city and returned to find it another man’s. That reckoning I do not forget.","On nights Dian Wei stands blocking my door, my sleep runs deep. His back is always to the door, never turned toward me.","Xiahou Dun took an arrow and did not leave the line. With two more such men, the realm would be too small.","I record the battles I win, and the battles I lose at greater length. On the ground where I lost, I sift the men.","Since I received the Son of Heaven at Xudu, the edict opens the road before the sword. Who writes that edict matters more than the sword.","At Guandu the urgent thing was not crossing the river. It was to resolve before Yuan Shao did.","Even at the dawn when the realm sleeps, I do not put out the lamp.","The noon is short for the work of choosing whom to use.","When the sun tilts, I spread the roll of the surrendered again.","I record the battles I won, and the battles I lost at greater length."]},zhouyu:{name:"Zhou Yu",select:"Zhou Yu arrayed the ships as one tunes a string. One string out of true turned the path of the flames.",lines:["What Sun Ce and I shared were sacks of grain and books of war. In our young days we feigned that the load was light, even carried by two.","The talk of surrender snapped like dry bamboo. I kept the sound of its breaking from leaving the tent.","Cao Cao’s ships were many. Many ships, once lashed together, were one great stack of kindling.","Huang Gai took the beating he was due, and Zhou Yu laid the enemy’s trust upon those welts.","Lu Su spoke of the grand design; Zhou Yu saw the ships to burn at once. Both eyes faced the same way.","I never spent time contending with Zhuge Liang. On the river there was no such idle seat.","The walls of Jiangling were hard. A hard fort cracks only after long battering.","I urged we take Yi Province first. Jiangdong could not last long on defending hands alone.","When a note rang false, he set down his cup. He heard the army’s discipline the same way.","The illness at Baqiu came on slowly. Only the saddle bound for Yi Province cooled sooner than it.","Sun Ce’s empty place opened in the fleet’s roster before the seat of honor. Beside the new seal, Zhou Yu wrote the count of oarsmen.","After the fires of Red Cliff died, the Jiangdong night did not brighten. The Nanjun stores and the Jing documents came to the same table.","At dawn I run my hand along the ropes of the lashed ships.","At noon I look to the dry kindling before the wind.","At dusk I measure the shadow of the Jiangling walls.","At night I dry arrowheads beside my soaked war-robe."]},zhangliao:{name:"Zhang Liao",select:"The wind of Mayi raised the horses’ manes first. Only the orders that passed through that wind did I heed to the end.",lines:["At the Yanmen pass, hoofbeats arrive before the gate. By that sound I formed the ranks.","I took my war-token under Ding Yuan, and passed many banners to reach Xiapi. Banners change; the muster-line does not.","Lü Bu’s spear opened the front wide. Behind the opened road remained a ledger left unclosed.","The dust of Mount Bailang was black. Before the Wuhuan horses could wheel about, the drums fell silent first.","Before the gate of Hefei I wrote eight hundred names. Few columns returned; the empty columns dried a long time.","The word that hushed a Jiangdong child’s crying never left my mouth. The footsteps beyond the gate spoke it for me.","The day I sat across from Guan Yu, the war-orders were set down before the wine. The wine emptied; the orders remained.","I look to the line a man holds to the last, more than the name he served longest. If the line is straight, even an old banner is no burden.","A man who is sparing with words is sparing with the blade too. When the spared blade goes in, once is enough.","In the Mayi household register remain lines of families whose surnames changed. Before the war-tally, a changed surname is but one column.","Even in a defeated camp the muster must be taken. Not knowing who is missing, the next charge goes out nameless too.","At the waters of Xiaoyao Ford, loud voices did not last. When the mist lifted, only the soaked war-tokens remained.","At dawn I retie the cords of the Mayi horse-tokens.","At noon I watch the height of the dust toward Yanmen pass.","At dusk I press the empty columns of the Hefei war-orders with my fingertip.","At night I beat the sand of Mount Bailang from my bow-case."]},sunshangxiang:{name:"Sun Shangxiang",select:"A daughter of the Sun house belongs at the archery range, not the inner chambers.",lines:["Elder brother Sun Ce’s daring, younger brother Sun Quan’s composure — both ride on my arrows.","My handmaids wore blades, not trinkets. My chambers were a barracks.","The moment I draw the bow, no one calls me princess.","What I aim at, I strike. If it missed, I never truly aimed.","My brothers built Jiangdong, but guarding it is not for men alone.","Even if I am wed away to Jing Province, this bow stays at my side.","Men gawk at my bow. They would do better to string their own.","An arrow does not hesitate. Neither do I.","At dawn I restring the bow and check the calluses on my fingertips.","At noon I read the grain of the river wind and reset my aim.","At dusk I send word of my brothers on the fletching of an arrow.","At night I keep my bow at my pillow and sleep light."]},caopi:{name:"Cao Pi",select:"An empty crown-prince’s palace does not stay empty long. The one who measures the vacant seat first is the one who takes it.",lines:["Zijian’s verse is quick. Quick verse does not always cross the threshold.","Jia Xu said little. The words of a man who speaks little linger longest on the table.","Cui Yan spoke, they say, for the eldest son. Even right words become a debt, depending on where they are set down.","Emperor Xian’s seal is cold. Lay it on your palm and it is the blood that chills first.","The scent lingered long in Lady Zhen’s chamber. A scent that lingers is harder to erase than a decree.","I looked to the river to strike at Wu. The river would not take my blade — it shook the hulls first.","At dawn I measure the vacant seat of the eastern palace with my fingers.","At noon I revise men’s positions as one revises a sentence.","At dusk I recall the cold edge of the imperial seal.","At night I fold away the documents that bear my brothers’ names."]},caorui:{name:"Cao Rui",select:"An edict bound for Chang’an must arrive ahead of the horse.",lines:["The earth of the northern palace did not dry even in winter. The laborers’ ledger ate a new page each day.","The wax sealing Meng Da’s letter was thin. Sima Yi opened that thin spot with the point of a blade.","The wind from Liaodong is heard late. A revolt heard late must be stamped out the faster.","He who raises a palace counts the pillars. The people outside count the earth caked on the spade.","Gongsun Yuan’s head came late. What came first was the report that the Liaodong stores were empty.","The new palace’s pillars kept out the rain. The cost of the spades that dug beneath them I recorded apart.","At dawn I read the western beacon-fires and the palace ledger together.","At noon I reckon the horses that bore edicts to Chang’an.","At dusk I open the dust-covered dispatch from Liaodong.","At night my brush halts between the two names of the regents."]},caozhen:{name:"Cao Zhen",select:"A rain-soaked camp does not advance. Once the wet ropes are dried, I will open the western road.",lines:["Send Zhang He ahead. The earth of Jieting must be trodden only after it dries.","The drums in Ji Valley are a feint. The main force is on another mountainside.","A kinsman’s armor is heaviest from within. The western gate comes before my private name.","The Grand Marshal’s seal has no luster. Only long-handled bronze stays in the hand.","The young ones behind me do not yet know the scabbard. So I cannot leave the gate empty.","When rain soaks a campaign order, to fold the soaked order away is discipline too.","At dawn I inspect the wet stretch of the bowstring.","At noon I ask the depth of the mud on the western road.","At dusk I fold the grain-tally to send to Zhang He.","At night I count the sound of rain striking the tent canvas."]},sunce:{name:"Sun Ce",select:"Jiangdong was no long-awaited fortress. A gate that opened too soon swallowed men whole.",lines:["The heirloom I left with Yuan Shu came back as soldiers. That was how I collected the debt.","Liu Yao’s camp did not hold long. The only thing that held long was his name.","With Zhou Yu, the drumbeats matched before the words. When the drums matched, the camps matched too.","The Jiangdong gentry opened their gates late. Through a gate opened late I brought the ledger in first.","I looked once toward the road to Xudu. That road was farther than any hunting trail.","Xu Gong’s retainers lay hidden in the low brush. A young blade thought too little of low grass.","At dawn I push at the hulls by the river with my hand.","At noon I stamp the mark of a new banner onto the ledger of the Six Commanderies.","At dusk I polish the helmet scarred at Shenting Ridge.","At night I listen for the low sounds in the brush along the hunting trail."]},sunquan:{name:"Sun Quan",select:"Sun Quan weighed men long. Even when the balance was right, he was slow to let go.",lines:["Even when I clasped hands with Liu Bei, the waterway ran between us. Hands could meet, but the land stayed split.","At Hefei, Zhang Liao’s hoofbeats came too close. A near sound lingers long.","The flames of Yiling lowered Liu Bei’s banner. A lowered banner weighed more than the letter of alliance.","The seal of King of Wu that Wei sent was a burden from the day I took it. Washed, it still smelled of another’s wax.","The succession’s chamber could not have two doors. Two doors creaked against each other every night.","Sun Quan raised men well. In his last years he suspected even the shadows of the men he raised.","At dawn I count the moored boats at the ferry.","At noon I set the envoy’s seal from across the river out in the sun.","At dusk I push the hoofbeats from Hefei off the edge of the map.","At night I press the seal on the succession documents once more."]},lumeng:{name:"Lü Meng",select:"Lü Meng set a book beside his scabbard. Letters learned late opened the gate of Jing.",lines:["In boyhood the spear-shaft came to hand first. The book taken up late I gripped the harder.","Sun Quan said learn, and Lü Meng learned. A short command made for long nights.","Lu Su said he would look again. Eyes that look again do not close easily.","Lu Xun’s name was low. A low name slowed the great general’s eye.","The tale of the vengeful spirit grew at the drinking table. A sick body cooled before any ghost story.","After taking Jing he was long ill. Even a winning stratagem collects its price later.","At dawn I lay a book open beside the scabbard.","At noon I watch whether the ink of the muster-papers has dried.","At dusk I count the bundles of white robes and the uniforms apart.","At night I set down on paper the sound of Jiangling’s gate-bar."]},luxun:{name:"Lu Xun",select:"Lu Xun set the fire late. Longer than that, he counted the enemy’s heat.",lines:["The letter I sent Guan Yu was low and thin. Thin paper pressed down a thick guard.","Standing behind Lü Meng, his name was small. A small name slipped past great eyes.","The summer at Yiling dulled men longer than any blade. Lu Xun waited out that dulling time.","The old generals called for the drums. He let the hot wind do the work before the drumbeat.","The Chancellor’s seal was not heavy. What was heavy was the dust rising from the crack between the two palaces.","The slip of reproach was thin. The thin thing pressed on a man the longest.","At dawn I write my dispatches under a lowly name.","At noon I finger the tent-cords dried in the sun.","At dusk I fold up, in my mind, the long line of enemy camps.","At night I never lay the slip of reproach beneath the lamp."]},simayi:{name:"Sima Yi",select:"Set the slip that reads “ill” out where they can see it. This strategist counts first the footprints that passed the door-crack.",lines:["Meng Da trusted the road was far. The hoofbeats were faster than his trust.","At Wuzhang Plain I had to spare the drums. The starving side comes down to the river first.","Gongsun Yuan’s gate stood behind the sea-mist. The mist could not shield a neck.","The earth at Gaopingling was soft. The cart-wheel tracks cut deep that day.","Speak of Cao Shuang in a low voice. Even the walls have nail-holes.","The day Zhang Chunhua cut off the talk beyond the door, the household’s very breath fell low, like an army’s order.","At dawn I clean the face that will receive the sick-bed visitors.","At noon I shut the pass and count the hoofbeats.","At dusk I record the grain of a battlefield left unfought.","At night I run my fingers along the edge of a blank edict."]},mizhu:{name:"Mi Zhu",select:"An account is reckoned in men. The goods come after.",lines:["Wealth is not to be piled up but to be let flow — toward men.","Wealth born of water returns to water just as easily. Always watch the dike.","The quick reckoner counts the coins; the quicker one counts the hand that holds them.","A market stall is not a place to lay out goods but to lay out people.","Salt does not rot, but a bad connection rots you, household and all.","A man bought at full price lasts longer than goods bought cheap.","At dawn I loosen the ledger’s cords before the river’s sound.","At noon I watch the tremble of the hand at the stall, not the grain of the silk.","At dusk I reckon first the road by which the empty cart returned.","At night I hear the water by the dike and push the household ledger one column inward."]},caoren:{name:"Cao Ren",select:"If you are given a post, you settle the account at that post.",lines:["The habit of scouting your retreat in advance — that is what loses a fortress.","I set ten men to a single gate. Neither too few nor too many.","I check first whether the ground underfoot is firm. The blade comes after.","The hand that bars the gate must not be slower than the hand that looses the arrow.","As long as the fortress still stands, the account is not yet closed.","A name endures with its fortress, or is buried with it.","At dawn I pressed the wet earth of the battlements with my hand.","At noon I checked the bar of Fancheng’s west gate and Jiangling’s storehouse separately.","At dusk I noted the width of the breached wall before the relief road.","At night I heeded the draft through the gate-crack more than any kinsman’s name."]},caozhi:{name:"Cao Zhi",select:"Seven paces are short. The brush-tip sees blood first.",lines:["A cup grows light when emptied. Yet though I held an empty cup, the guards beyond the door would not withdraw.","The fief of Linzi being far does not dull the brush. Only the dispatches come late.","Brothers’ roots lie buried in one soil. The firewood beneath the cauldron does not spare that soil.","Yang Xiu read too quickly. Writing read too quickly is found out before the sword.","A king’s crown is heavier than the head. Even crowned, one often stands outside the door.","A line of verse cannot open a door. It only slips beneath a closed one.","At dawn I lay the wet brush down upon the silk.","At noon I fold, in silence, the roster sent from my fief.","At dusk I read the words inside the dried wine-cup.","At night I count whether the guards’ spear-points beyond the door catch the lamplight."]},chengong:{name:"Chen Gong",select:"A bow is valued not by who draws it, but by where it is aimed.",lines:["The plan is fully laid. Whether it is taken is the business of the man on the dais, not mine.","Even holding a single fortress has its reckoning. Yet there are never enough ears to hear it.","I am a man who questions. Seat me where nothing is questioned, and it is as if my hands and feet were bound.","Do not ask about my former lord. A road once left I do not reckon again.","Gao Shun is a man of few words. Yet those few words weigh more than a hundred spoken on the dais.","Lord Cao uses men well. Precisely for that, standing beneath him calls for more caution.","In the dawn mist I decide where today’s aim will fall.","At noon I see whom the bow is turned toward.","At dusk I take the measure of the lord I serve once more.","However long the night, I do not draw a bow aimed wrong."]},chengyu:{name:"Cheng Yu",select:"A gate is not shut with the mouth. It is shut by who stands at it.",lines:["When the grain ran out, I once filled the army’s rations even by salting the dead. Ask no more of that.","Lord Cao left Juancheng to me as he went east. I am holding that gate still.","Do not leave a place to retreat to standing empty. Given somewhere to fall back, men fall back in the end.","I do not scold a frightened soldier. I simply give him no room to be afraid.","I once breached the Si River dike to pin the enemy’s feet. Water too is a weapon, if you know how to wield it.","They call me fierce. That word comes from men who entrusted a fortress to a hand that was not.","At dawn I first call the names charged with Juancheng’s gate.","At noon I recount the shortfall in the grain ledger.","At dusk I watch the Si River dike and the wall’s channels together.","At night I reckon even the breathing within the shut gate."]},dianwei:{name:"Dian Wei",select:"The twin halberds are heavy. Too light, and they cannot hold the line.",lines:["Within five paces of my lord is my post. Any blade that enters it, I take.","I am slow at reckoning. Who strikes first, who circles the flank — that alone I keep by heart.","A gate is best when narrow. If only one man can enter, only one need be stopped.","I do not count how many the enemy are. Count as I might, I still have only two hands.","I take my wine in a large cup — only so much as leaves my hands steady.","Do not tell me to watch my back. I am the back.","At dawn I stood the twin halberds up before the tent-cords dried.","At noon I drew a line within five paces of my lord.","At dusk I took the cup, but never turned my back from the door.","At night the threshold of Wancheng narrowed to the width of his body."]},dongzhao:{name:"Dong Zhao",select:"Escorting the emperor is not the work of paving a road. It is the work of turning the ears of the men along it.",lines:["The Duke of Wei’s title did not grow overnight. First the foundation-stones beneath the dais were changed.","Xun Yu saw the empty vessel. I saw the table on which to set it.","An enemy’s letter need not come from an enemy’s hand. If the seal-mark matches, the reader is deceived.","The old hand that served three lords knows sealing-wax better than the scabbard.","Legitimacy is heavy as stone. What is heavy you move not by lifting but by digging beneath it.","The Son of Heaven’s carriage moved its ears before its wheels. When the ears turned, the road turned after.","At dawn I press the sealing-wax with a fingernail to read its mark.","At noon I change out the men posted along the envoy’s route.","At dusk I leave open the blank space in the petition to enfeoff the Duke of Wei.","At night I parcel the same rumor out to different mouths."]},gaoshun:{name:"Gao Shun",select:"If the line does not break, the battle is not lost.",lines:["The Trap-Breaker Camp is seven ranks. Let one rank empty, and the loss begins there.","A looted sack is heavy. By just that weight the line sags.","In a fallen city I look first to the empty cauldrons. When the cauldron is empty, the next rank empties too.","When Chen Gong keeps a heavy silence, I too fall silent and finish counting the ranks.","I retie the armor-cords fresh each day. A cord sound yesterday snaps today.","If one place stands empty on our return, I pass that night counting heads until dawn.","At dawn I count first the empty slots in the Camp’s seven ranks.","At noon I retie the armor-cords and record the heads that returned.","At dusk I look at the empty cauldron and the empty rank side by side.","At night I call the names of the broken rank again, in a low voice."]},guojia:{name:"Guo Jia",select:"Know what your foe fears, and one stroke there is enough.",lines:["Yuan Shao drops his cards wherever he defers the decision. The reckoning ended long ago.","My lord bids me bring the answer before he asks. As it happens, I have brought it.","Wine has stood in for medicine a long while now. The physician says sleep, but asleep I cannot see.","Lü Bu is fierce but shallow. Shallow water, dammed once, has its course cut off.","The cough has grown frequent. And the reckoning, faster.","The cards are already dealt out. There is one place to overturn; the rest is bluff.","The man whose dawn sleep is short reads the enemy’s dreams first.","At noon I reckon what the enemy is afraid of.","At dusk a single cup clears the stratagem further.","The deeper the night, the sharper the place to strike."]},huaxin:{name:"Hua Xin",select:"A bestowed gift kept long in the house summons wagging tongues before it gathers dust.",lines:["The storehouse at Boping had many empty shelves. The guest who saw them sat the longer.","The day I ascended Emperor Xian’s hall, there was no time to knock the dirt from my shoes.","The abdication decree was bound with red cord. However fine the cord, what is bound is bound.","A stipend must flow or it rots. A stipend left to pool clouds the household first.","The storyteller’s brush blackens a man quickly. The historian’s ink is slow to dry.","The young days when I was called the dragon’s head are past. An old minister lowers his neck sooner than his head.","At dawn I leave the unfilled lines of the gift-registry blank.","At noon I record the bolts of silk that went out to guests.","At dusk I do not retie the cord of the abdication document.","At night I keep the tale of the divided mat away from the lamp."]},jushou:{name:"Ju Shou",select:"He who stakes all on one hand loses in one hand. I am a man who paints a single scroll over ten years.",lines:["Tian Feng and I read the same ledger. Though we both point to the same column, on the dais that column is always empty.","A single road at the rear feeds the granary. Again and again I set down the plan to block it. Whether it is heeded is beyond my hands.","Guo Tu’s words are quick and sweet and short. Mine are slow and bitter and long. The sweet ones always go in first.","I left a child behind in a northern city. That reckoning I do not enter in the ledger — enter it, and my hand shakes.","One chooses a lord but once. Yet when that lord splits me into three to hold, I have already reckoned wrong once.","Some read my call to go slowly as fear. It is not fear but reckoning. A dais that reads reckoning as fear does not last long.","Dawn is the first stroke of a scroll to be painted over ten years.","In a single noon move I see the whole board.","At dusk I hold back the one who rushes.","The longer the night, the clearer the move set far ahead."]},shenpei:{name:"Shen Pei",select:"A fortress rarely falls from without. The hand inside that unbars the gate falls first.",lines:["I tamp the wall’s earth with my own feet. Where another has tamped it, my feet cannot tell what is soft.","Guo Tu wagged his tongue on the dais again. A tongue does not raise a single foot of wall.","The word “surrender” has never passed my lips. The moment it does, the tongue becomes the enemy’s first.","Guo Tu’s words are smooth. The smoother the words, the more easily they slide back the bar.","I look to the wells first. When a siege runs long, water divides men before the sword does.","At night I walk the wall’s full round. A stone sound by day is sometimes gone by morning.","At dawn I tread the earth of Ye to find where it is soft.","At noon I match the grain ledger against the watchtower roll-call.","At dusk I check the well-covers and the gate-bar together.","At night I walk the wall all the way to the post that faces north."]},tianfeng:{name:"Tian Feng",select:"Straight words grate on the ear. Words smoothed so as not to grate are no longer straight.",lines:["Words from my mouth have fallen asleep three times upon the dais. Yet a fourth time I mean to offer the same.","My lord hesitates. Hesitation is no crime. The crime is those beside him who, while he wavers, offer only sweet words.","Guo Tu folded his knees prettily on the dais again. I have never seen a man take the realm with a folding knee.","Ju Shou and I read one plan. With two pairs of eyes, at least one crooked word we can block together.","The reckoning is done. Whether it is heeded is the dais’s business, but unheeded does not make it wrong.","I have seen a dais roll on unbothered even with an upright man locked away. For a while, that frightened me more.","At dawn I do not swallow a straight word, though it grate on the ear.","Even at noon I choose the words that are hard to hear.","At dusk I sharpen the words I have left unpolished.","However deep the night, I do not speak a crooked word."]},xiahoudun:{name:"Xiahou Dun",select:"One foot of mine is planted before my lord’s tent. That foot I never draw back.",lines:["I leave the polishing of my spear-shaft to no one. As I polish, I keep the tent-mouth from standing empty.","They say the first step back is the hard one. I do not know that first step.","An arrow took my eye. I lost only what it took. My post I left exactly where it was.","When my lord stands in a perilous place, I plant myself half a pace ahead of him. Half a pace is enough.","Only a man who has crossed blades knows behind whom to stand. I stand behind one man alone.","Even on days of victory I did not leave the tent-front empty. I have seen many a camp loosen its ranks for winning.","At dawn I counted the footprints pressed into the earth before the tent.","At noon I watched the farm-colony channels and the grain-carts together.","At dusk I stood half a pace ahead of where my lord’s carriage halted.","At night I guarded the side I could not see with my spear-shaft."]},xiahouyuan:{name:"Xiahou Yuan",select:"Five hundred li in three days. I arrive before the enemy can hang his cauldron.",lines:["I feed the horses before the road dries. A wet road grips the hooves.","I cut five hundred li in three days. On the fourth day the enemy only then slung his bow.","There is one thing to ask: who stands on the road behind.","Look at the fortress and you are late. I look at the passes outside it.","I take only five days’ grain-carts along. Within that, I finish it.","A slow order eats the grain; a fast blade leaves it.","At dawn I bitted the horses and looked first to the wet road.","At noon I crossed the next ridge before the scouts returned.","At dusk I counted how many grain-carts had fallen behind.","At night I counted how many fires still burned on the passes at my back."]}},kh={zhaoyun:{name:"조운",select:"말은 달려도 등 뒤의 아이 무게는 흔들리면 안 되오.",lines:["공손찬의 깃발 아래서 유비를 보았소. 깃발보다 사람을 먼저 보았지.","장판의 흙은 말굽에 쉽게 뭉쳤소. 품 안의 아이는 울지 않았소.","앞을 뚫는 장수는 많소. 뒤를 닫는 장수는 적소.","아두의 옷자락에 묻은 흙을 털 때, 칼집은 아직 젖어 있었소.","한수의 물가에선 빈 성문처럼 문을 열어 두었소. 들어온 적은 들어온 길을 잃었소.","공은 말 위에서 세지 않소. 돌아온 머릿수로 센다.","형제들 곁에 설 때도 내 자리는 한 걸음 뒤요. 그 한 걸음이 비면 길이 끊긴다.","완전한 장수라는 말은 마른 깃발에 붙은 먼지요. 비 오면 먼저 떨어진다.","호위는 칼끝보다 먼저 길을 고른다. 살릴 사람과 버릴 짐을 헷갈리면 군문이 무너진다.","늙은 장수의 말은 빨라 보이지 않는다. 다만 끝까지 같은 보폭으로 돌아온다.","주공의 집안짐은 깃발보다 늦게 움직인다. 그는 그 늦음을 싸움의 중심에 놓았다.","관우의 침묵과 장비의 호통 사이에서도 조운은 말안장 끈을 같은 길이로 맞췄다.","새벽엔 말안장 끈을 두 번 당긴다.","한낮엔 군막 뒤쪽 빈 길을 먼저 본다.","저물녘엔 돌아온 머릿수를 조용히 맞춘다.","밤엔 창대를 문가에 세우고 잠을 얕게 둔다."]},guanyu:{name:"관우",select:"받은 은혜는 갚고 떠나오. 그래야 떳떳하오.",lines:["칼 한 자루면 셈은 끝나오. 길게 말할 것 없소.","큰형님 가는 곳이면 진창이든 화살밭이든 따라가오.","녹봉이 후하다 하여 마음까지 사지는 못하오.","이름은 죽은 뒤에 남는 것이오. 살아서 욕될 바엔 한 번 죽는 게 낫소.","맹장은 적에게도 예를 갖추오. 무도한 자에게만 그러지 않을 뿐이오.","사사로운 정과 맡은 일이 부딪치면, 정을 갚고 일로 돌아오오.","베어야 할 자는 한 합이면 끝나오. 망설임이 길어지는 건 베지 말아야 할 자일 때요.","말은 적게 하오. 한 번 뱉은 말은 칼보다 거두기 어렵소.","수염을 기른 지 오래요. 거울보다 사람의 눈으로 나를 보오.","은혜를 봉해 두고 떠나는 길이 가장 외롭소. 그래도 가야 할 길이오.","형주 성문을 맡은 뒤로 웃음이 줄었다. 물길과 사람 마음은 함께 낮아졌다.","맥성으로 가는 길에서 목이 길게 남는다는 말을 알았다. 오만은 고개보다 먼저 꺾인다.","새벽 칼을 갈며 받은 은혜를 헤아린다.","한낮에도 등을 곧추세워 부끄럼이 없다.","저물녘 긴 칼날을 닦으며 마음을 곧게 둔다.","밤이 깊어도 의를 저버린 적 없다."]},zhangfei:{name:"장비",select:"내 창은 형 앞을 막는 것만 안다.",lines:["형이 가는 길이면 나는 그 앞을 비운다.","술이 들어가면 손이 빨라진다. 그래서 형 앞에선 한 잔을 덜 마신다.","등을 맡길 자와 등을 보일 자는 술 한 순배면 갈린다.","조표 그자는 셈만 한다. 셈하는 자는 성벽도 셈으로 판다.","창대를 쥔 손이 떨린 적은 없다. 떨린 건 늘 다른 데였다.","공은 형이 받으면 된다. 나는 그 앞을 치운 값을 술로 받는다.","처음 형을 형이라 부른 날과 오늘 사이에 무른 말은 없다. 말이 변하는 건 사람이 변해서다.","맞설 자라면 술상 앞으로 부르고, 칠 자라면 창부터 든다.","한 번 등진 자는 두 번 등진다. 그래서 처음에 끝낸다.","적은 술 깬 아침에도 벨 수 있다. 못 무르는 건 술김에 형 앞에서 저지른 짓 하나다.","형이 한 잔에 잠들면, 나는 빈 잔을 쥐고 문 쪽을 본다.","내 손이 무거운 건 알고 있다. 그래서 형 곁에선 그 손을 늘 본다.","장판교에서 말발굽이 멈춘 것은 내 목소리 때문만이 아니다. 뒤의 아이와 수레가 다리를 건널 시간이 필요했다.","병졸을 아끼는 손과 몰아붙이는 손이 같은 손이었다. 그 손을 못 거둔 밤이 있었다.","새벽부터 창을 휘둘러 몸을 푼다.","한낮엔 형의 곁을 비우지 않는다.","해 지면 한 사발 술이 당긴다.","밤이 깊을수록 형의 말이 또렷하다."]},zhugeliang:{name:"제갈량",select:"볏짚 한 단도 장부에 쓰시오. 나라를 세우는 말은 빈 창고에서 썩소.",lines:["융중의 초가엔 지도가 작았소. 작아야 세 갈래가 한눈에 들어오오.","유비가 세 번 왔을 때 나는 밭의 물길을 보고 있었소. 밭은 주인이 바뀌어도 물을 속이지 않소.","초려의 문이 세 번 열렸소. 유비는 천하 지도를 묻기 전에 곁에 남을 사람 수를 물었소.","손권을 설득할 때도 말보다 군량이 먼저였소. 빈 배로 동맹을 건널 수는 없소.","남중의 산길은 칼로만 열리지 않았소. 풀려난 자가 다음 길을 알고 돌아오오.","출사표는 눈물로 쓰지 않았소. 먹이 마른 뒤 군량표가 붙었소.","북벌은 깃발의 일이 아니오. 신발 밑창과 곳간 문짝의 일이오.","사마의는 싸우지 않는 법을 알았소. 그래서 나는 곡식 썩는 냄새를 먼저 맡았소.","오장원의 등잔은 군령보다 늦게 꺼졌소. 사마의의 닫힌 문 앞에서 빈 장부가 더 오래 남았소.","법은 차갑게 서야 하오. 따뜻한 손으로 잡으면 자국이 남소.","법은 칼보다 늦게 빛나지만 더 오래 남는다. 군량이 맞지 않으면 충성도 길 위에서 굶는다.","북쪽으로 한 걸음 옮길 때마다 남쪽 창고의 무게가 어깨에 더해진다. 밤은 장부 위에서 짧아진다.","새벽엔 융중대 죽간의 끈을 죈다.","한낮엔 곳간 열쇠를 군령 위에 둔다.","저물녘엔 북쪽 길의 신발 밑창을 본다.","밤엔 출사표의 마른 먹을 손끝으로 문지른다."]},huangzhong:{name:"황충",select:"늙은 팔은 느리게 오른다. 놓은 화살은 늙지 않소.",lines:["장사 성벽에서 관우와 마주 섰을 때, 활시위가 먼저 답했소.","나이를 묻는 자는 사정거리를 모르는 자요. 화살은 물은 나이만큼 멀리 가지 않소.","입촉 길엔 젊은 발이 많았소. 앞에 선 건 흰 수염 하나였고.","정군산의 북소리가 높이에서 내려왔소. 하후연의 깃발은 그 아래서 접혔소.","법정이 높은 데를 가리켰고, 나는 낮은 데를 보았소. 내려갈 길이 거기 있었소.","공을 늦게 세운 자는 먼저 죽은 자들의 이름을 대신 세지 못하오.","내 활은 술자리 재주가 아니오. 맞으면 한 사람이 줄고, 빗나가면 내가 준다.","젊은 장수들이 웃을 때는 화살촉을 닦소. 웃음이 멎을 때까지.","늙은 팔은 젊은 팔보다 먼저 떨리지 않는다. 다만 헛쏜 화살을 감출 시간이 적다.","정군산의 바람은 내 나이를 묻지 않았다. 맞힐 곳과 숨 쉴 틈만 물었다.","유비의 군막에서 내 이름은 늦게 불렸소. 늦은 이름일수록 빗나가면 오래 남소.","하후연은 서둘렀고 나는 오래 기다렸소. 높은 곳은 빠른 말을 더 작게 보이게 하오.","새벽엔 활시위를 귀 옆까지 당겨 본다.","한낮엔 화살촉 셋을 햇빛에 말린다.","저물녘엔 높은 둔덕의 그림자를 재 둔다.","밤엔 손가락 마디에 남은 시위 자국을 문지른다."]},lvbu:{name:"여포",select:"내 위에 사람을 두지 않은 지 오래다.",lines:["하비 성벽은 내가 쌓지 않았다. 허나 지키는 건 내 창이다.","원술이 혼사를 청해 왔다. 진규가 와서 한참을 떠들다 갔다. 사위 자리가 곧 매인 자리라 하더군.","방천극은 무겁지 않다. 무거운 건 그걸 든 손을 재 보는 눈들이다.","유비를 거뒀고, 유비가 내 자리를 노렸다. 거두는 일은 두 번 다시 않는다.","관우라는 자가 있다더군. 한 번 창을 맞대 보면 알 일이다.","정원도 동탁도 나를 아들처럼 두었다. 둘 다 내 손에 죽었다. 가까이 둔다는 건 그런 것이다.","진궁은 셈이 밝고 고순은 입이 무겁다. 둘 다 아직 내 곁에 있다. 그게 얼마나 갈지는 모른다.","성을 빼앗는 데는 하루면 족하다. 지키는 데 평생이 든다.","말은 적게 한다. 내 창이 다 말한다.","사수의 물이 불었다더군. 둑이 터지면 누가 먼저 떠내려갈지는 두고 볼 일이다.","적토는 내 말이 아니다. 내가 멈추면 그 말도 나를 보지 않는다.","조조는 사람을 고른다더군. 나는 내가 고르는 사람인지, 그가 고르는 말인지 아직 모르겠다.","말이 먼저 깨어 운다. 나도 일어난다.","한낮의 활터가 비면 내가 채운다.","날이 저물면 술이 돈다. 오늘은 누구의 잔인가.","밤에는 적토가 제일 가깝다."]},yuanshao:{name:"원소",select:"사세삼공의 이름은 내가 지은 게 아니다. 허나 그 무게를 견디는 등은 내 등이다.",lines:["한복이 기주의 인장을 두 손으로 받쳐 올렸다. 받는 데 한나절, 그 한나절을 두고도 곁에서는 망설였다 한다.","마루 아래 늘어선 갓들을 센다. 전풍의 갓과 곽도의 갓이 서로 다른 쪽을 본다. 그 어긋남이 내 셈을 늦춘다.","안량과 문추가 창을 짚고 섰다. 둘은 명을 기다린다. 명을 내리는 입이 늦으면, 짚은 창이 먼저 무거워진다.","업의 곳간은 하북에서 가장 깊다. 깊은 곳간일수록, 비울 날을 정하는 손이 더디다.","조조라는 자가 있다. 환관의 손자라 들었다. 그 출신을 입에 올리는 일과, 그 자를 셈에 넣는 일은 다른 일이다.","저수가 도면을 폈고, 봉기가 그 도면을 접었다. 둘 다 옳을 수는 없다. 옳은 쪽을 고르는 데 또 하루가 갔다.","사세에 걸쳐 삼공을 냈다는 말은 밥상에 오르지 않는다. 허나 그 말이 없으면 따르는 갓들이 절반으로 준다.","공손찬의 기마는 빠르다. 빠른 것은 늘 먼저 닳는다. 나는 닳기를 기다리는 쪽이다. 기다림이 길어지는 게 흠이라면 흠이다.","사람을 곁에 둘 때 그 출신을 먼저 본다. 그 버릇이 나를 명문으로 세웠고, 또 더디게 만들었다.","전풍이 옳은 말을 했다. 옳은 말은 늘 귀에 거슬린다. 거슬린다고 가두면, 그 옳음이 옥 안에서 썩는다.","밤이면 하북의 군현 수를 헤아린다. 헤아릴 줄은 안다. 한 번에 몰아칠 날을 못 정할 뿐이다.","내 이름 앞에 사람들이 먼저 무릎을 꿇는다. 그 무릎이 내 칼보다 먼저 적을 누른 적이 있다.","사세삼공의 이름은 새벽부터 어깨에 얹힌다.","문 앞에 늘어선 빈객을 한낮 내내 들인다.","해 저물도록 누구를 윗자리에 둘지 저울질한다.","명문의 등은 밤에도 굽힐 수 없다."]},dongzhuo:{name:"동탁",select:"도성 문은 쇠로 여는 게 아니오. 굶은 군마와 겁먹은 인수로 연다.",lines:["서량의 먼지는 낙양 마루까지 들어왔소. 마루 위 붓들이 먼저 기침했지.","폐립은 칼집에서 나오는 일이 아니오. 군막 밖 말발굽 수가 먼저 정한다.","불탄 낙양의 들보는 오래 탔소. 젖은 백성도 같이 연기를 먹었다.","미오의 곳간은 깊었소. 깊은 곳간은 배고픈 성보다 먼저 닫힌다.","여포를 가까이 두었소. 가까운 칼은 멀리 있는 적보다 빨리 들어온다.","왕윤의 말은 얇았소. 얇은 말이 두 사람 사이 갑주끈을 끊었소.","관동의 깃발은 많았소. 많아서 더디게 움직였고, 더뎌서 내가 오래 앉았다.","조조가 칼을 품고 들어왔다는 말은 늦게 들었소. 늦게 들은 말은 들은 자부터 베게 한다.","가후는 불붙은 들보 아래서도 빠져나갈 문을 세었소. 그런 셈은 칼보다 차갑다.","상국의 인수는 손바닥보다 컸소. 큰 인수도 목을 가리지 못하더군.","미오에는 삼십 년 곡식이 쌓였소. 그 곡식은 백성의 겨울보다 내 군마의 봄을 먼저 세었소.","궁문을 지나온 자는 모두 허리를 낮추오. 낮춘 허리는 다음 명령을 더 빨리 듣소.","새벽엔 서량 말의 먹이를 먼저 재게 한다.","한낮엔 궁문 앞 인수함을 열어 둔다.","저물녘엔 낙양 쪽 연기 냄새를 갑주에서 턴다.","밤엔 가까운 칼이 어느 쪽을 향했는지 본다."]},liubei:{name:"유비",select:"자리는 잃으면 그만이오. 사람은 잃으면 돌아오지 않소.",lines:["탁현에서 돗자리를 짜던 손이오. 그 손이 아직 칼을 쥐고 있소.","두 아우가 나를 형이라 부르오. 그 부름값을 아직 다 치르지 못했소.","하비를 내줄 때, 성벽보다 성안 사람 수를 먼저 셌소.","여포가 가진 건 성이오. 내가 가진 건 따라온 자들의 발자국이오.","미축은 셈이 밝은 사람이오. 그 사람이 나 같은 자에게 줄을 댔소.","한실은 멀고, 곁의 굶주린 입은 가깝소. 어느 쪽도 등지지 않는 길을 더듬소.","장수 하나를 얻는 데 성 하나 값이 든다면, 나는 성을 내주겠소.","떠도는 동안 잃은 건 땅이지 사람이 아니오. 그것만은 지켰소.","내 이름 뒤에 종친이라는 말이 붙소. 그 말이 밥이 되진 않더이다.","밤에 막사를 돌며 머릿수를 헤아리오. 들어올 때보다 줄지 않았는지를.","공명이라는 이름을 듣기 전에도 초가집 앞에서 사람을 기다리는 법은 알고 있었소.","백제성 밤바람은 패전보다 차갑소. 그래도 어린 임금 곁에 남길 말을 골라야 하오.","새벽에 짚신을 삼던 손을 아직 잊지 않는다.","낮에는 사람을 만난다. 천하는 사람으로 선다.","저녁상에는 한 자리를 늘 비워 둔다.","밤이 길수록 아우들의 얼굴을 센다."]},caocao:{name:"조조",select:"쓸 자인가 버릴 자인가, 그것부터 보겠다.",lines:["청주의 항졸 삼십만을 받아 가린다. 쓸 자만 남기고 입만 무거운 자는 흩는다.","재주 있는 자라면 죄가 있어도 거둔다. 천하가 어지러운데 흠 없는 자를 어디서 다 구하나.","곽가가 들어오던 날, 사람 하나 늘었다 적지 않았다. 군사 하나를 얻었다 적었다.","순욱이 또 간한다. 그가 옳으니 듣는다. 옳은 말을 듣는 데 군주의 체면은 들지 않는다.","서주로 난 길에 마차 한 줄이 비어 있다. 그 길 끝에 받아 둔 셈이 하나 남았다.","장막과는 한 상에서 술을 들던 사이였다. 그 손이 여포를 끌어들였다.","성을 비우고 나갔다 돌아오니 성이 남의 것이 되어 있었다. 그 셈은 잊지 않는다.","전위가 문을 막고 선 밤이면 잠이 깊다. 그자의 등은 늘 문 쪽으로 가 있어, 내 쪽으로 돌 일이 없다.","하후돈은 화살을 맞고도 진을 떠나지 않았다. 그런 자가 둘만 더 있으면 천하가 좁다.","이긴 싸움을 적고 진 싸움을 더 길게 적는다. 진 자리에서 사람을 가린다.","허도에 천자를 모신 뒤로, 칼보다 조서가 먼저 길을 연다. 그 조서를 누가 쓰는지가 칼보다 중요하다.","관도에서 급한 것은 강을 건너는 일이 아니었다. 원소가 결심하기 전, 내가 먼저 결심하는 일이었다.","천하가 잠든 새벽에도 등불은 끄지 않는다.","쓸 자를 고르는 일에 한낮이 짧다.","해가 기울면 항졸의 명부를 다시 편다.","이긴 싸움을 적고, 진 싸움은 더 길게 적는다."]},zhouyu:{name:"주유",select:"주유는 음을 맞추듯 배를 세웠다. 어긋난 줄 하나가 불길의 길을 바꾸었다.",lines:["손책과 나눈 짐은 곡식자루와 병서였다. 젊은 날의 짐은 둘이 들어도 가벼운 척했다.","항복론은 마른 대나무처럼 꺾였다. 꺾는 소리가 군막 밖으로 나가지 않게 했다.","조조의 배는 많았다. 많은 배는 묶이면 한 덩어리 장작이었다.","황개가 맞을 매를 받았고 주유는 그 매 자국에 적의 믿음을 얹었다.","노숙은 큰 그림을 말했고 주유는 당장 태울 배를 보았다. 두 눈은 같은 쪽을 향했다.","제갈량과 겨루느라 시간을 쓴 적은 없었다. 강 위에는 그런 한가한 자리가 없었다.","강릉의 성벽은 단단했다. 단단한 성은 오래 맞아야 금이 갔다.","익주를 먼저 보자 했다. 강동은 지키는 손만으로 오래 가지 못했다.","음이 틀리면 그는 술잔을 내려놓았다. 군율도 그렇게 들었다.","파구의 병은 느리게 왔다. 다만 익주로 가는 말안장은 그보다 먼저 식었다.","손책의 빈자리는 상석보다 군선 명부에 먼저 났다. 주유는 새 인장 곁에 노 젓는 사람 수를 적었다.","적벽의 불이 꺼진 뒤 강동의 밤은 밝아지지 않았다. 남군 창고와 형주 문서가 같은 탁자에 올라왔다.","새벽엔 묶인 배의 밧줄을 손으로 훑는다.","한낮엔 바람보다 먼저 마른 장작을 본다.","저물녘엔 강릉 쪽 성벽 그림자를 재 둔다.","밤엔 젖은 전포 옆에 화살촉을 말린다."]},zhangliao:{name:"장료",select:"마읍의 바람은 말갈기를 먼저 세웠소. 그 바람을 지난 군령만 끝까지 들었소.",lines:["안문 관문에선 말굽 소리가 성문보다 먼저 닿소. 나는 그 소리로 줄을 세웠소.","정원 아래서 군패를 받았고, 여러 깃발을 지나 하비까지 갔소. 깃발은 바뀌어도 점고 줄은 바뀌지 않소.","여포의 창은 앞을 넓게 열었소. 열린 길 뒤에는 닫히지 않은 장부가 남았소.","백랑산의 먼지는 검었소. 오환의 말이 돌아서기 전에 북소리가 먼저 끊겼소.","합비 성문 앞에 팔백 이름을 적었소. 돌아온 칸은 적었고, 빈 칸은 오래 말랐소.","강동 아이 울음을 멈춘 말은 내 입에서 나온 적이 없소. 성문 밖 발소리가 그 말을 대신 했소.","관우와 마주 앉은 날엔 술보다 군령이 먼저 놓였소. 술은 비었고 군령은 남았소.","나는 오래 섬긴 이름보다 마지막까지 선 줄을 보오. 줄이 곧으면 옛 깃발도 짐이 되지 않소.","말을 아끼는 자는 칼도 아끼오. 아낀 칼이 들어갈 때는 한 번이면 족하오.","마읍 호적철엔 성이 바뀐 집안 줄이 남았소. 바뀐 성도 병부 앞에서는 한 칸일 뿐이오.","패전한 군영에서도 점고는 해야 하오. 빠진 이름을 모르면 다음 돌격도 이름 없이 나가오.","소요진 물가에선 큰소리가 오래가지 않았소. 물안개가 걷힌 뒤 남은 건 젖은 군패뿐이오.","새벽엔 마읍 말패의 끈을 다시 묶는다.","한낮엔 안문 관문 쪽 먼지 높이를 본다.","저물녘엔 합비 군령의 빈 칸을 손끝으로 눌러 본다.","밤엔 백랑산에서 묻은 모래를 활집에서 턴다."]},sunshangxiang:{name:"손상향",select:"손가의 딸은 규방보다 활터가 어울려요.",lines:["큰오라버니(손책)의 패기와 작은오라버니(손권)의 진중함, 둘 다 내 화살에 담겨요.","내 시녀들은 노리개 대신 칼을 찼어요. 처소가 곧 병영이었죠.","활을 당기는 순간만은 누구도 나를 공주라 부르지 않아요.","겨눈 곳은 반드시 맞혀요. 빗나갔다면 애초에 겨누지 않은 거예요.","강동은 오라버니들이 세웠지만, 지키는 건 사내들만의 몫이 아니에요.","형주로 시집간다 해도 이 활만은 두고 가지 않아요.","사내들은 내 활을 보고 놀라죠. 놀랄 시간에 제 시위나 얹는 게 나을 텐데.","화살은 망설이지 않아요. 나도 그래요.","새벽엔 시위를 새로 얹고 손끝의 굳은살을 살펴요.","한낮엔 강바람의 결을 읽어 과녁을 다시 잡아요.","저물녘엔 오라버니들의 안부를 화살 깃에 실어 보내요.","밤엔 활을 머리맡에 두고 얕게 자요."]},caopi:{name:"조비",select:"빈 동궁은 오래 비어 있지 않소. 빈 자리를 먼저 재는 자가 그 자리에 앉소.",lines:["자건의 글은 빠르소. 빠른 글이 늘 문턱을 넘는 것은 아니오.","가후가 말한 것은 많지 않았소. 적게 말한 자의 말은 오래 상 위에 남소.","최염은 적장자를 말했다 하오. 옳은 말도 적힌 자리에 따라 빚이 되오.","헌제의 옥새는 차갑소. 손바닥에 올리면 피가 먼저 식는 물건이오.","견씨의 방엔 향이 오래 남았소. 오래 남은 향은 명령문보다 지우기 어렵소.","오를 치러 강을 보았소. 강은 칼을 받아 주지 않고 배 밑을 먼저 흔들더군.","새벽엔 동궁의 남은 자리를 손가락으로 재어 본다.","한낮엔 문장을 고치듯 사람의 자리를 고친다.","저물녘이면 옥새의 차가운 모서리를 떠올린다.","밤에는 형제 이름이 적힌 문서를 접어 둔다."]},caorui:{name:"조예",select:"장안으로 가는 조서는 말보다 먼저 닿아야 하오.",lines:["북쪽 궁궐 흙은 겨울에도 마르지 않았소. 인부 장부는 매일 새 장을 먹었다.","맹달의 글은 봉한 밀랍이 얇았소. 사마의는 그 얇은 곳을 칼끝으로 열었다.","요동의 바람은 늦게 들리오. 늦게 들리는 반란은 더 빨리 밟아야 한다.","궁전을 세우는 자는 기둥 수를 센다. 밖의 백성은 삽날에 붙은 흙을 센다.","공손연의 머리는 늦게 왔소. 먼저 온 것은 요동 창고가 빈다는 보고였소.","새 궁전의 기둥은 비를 막았소. 그 밑을 판 삽날 값은 따로 적었소.","새벽엔 서쪽 봉화와 궁궐 장부를 함께 본다.","한낮엔 장안으로 나간 조서의 말을 헤아린다.","저물녘엔 요동에서 온 먼지 묻은 봉서를 연다.","밤엔 고명 대신 두 이름 사이에 붓끝을 멈춘다."]},caozhen:{name:"조진",select:"비를 맞은 군막은 앞으로 나가지 않소. 젖은 줄을 말린 뒤 서쪽 길을 열겠소.",lines:["장합을 앞으로 보내시오. 가정의 흙은 마른 뒤에 밟아야 하오.","기곡의 북소리는 양동이오. 주력은 다른 산허리에 있소.","종실의 갑옷은 안쪽부터 무겁소. 사사로운 이름보다 서쪽 문이 먼저요.","대장군 인수는 광택이 없소. 오래 만진 구리만 손에 남소.","내 뒤의 아이들은 아직 칼집을 모르오. 그래서 성문을 비울 수 없소.","비가 원정 명령을 젖게 하면, 젖은 명령은 접는 것도 군율이오.","새벽엔 활줄의 젖은 부분을 살핀다.","한낮엔 서쪽 길의 진흙 깊이를 묻는다.","저물녘엔 장합에게 보낼 군량표를 접는다.","밤엔 비가 군막 천을 치는 소리를 센다."]},sunce:{name:"손책",select:"강동은 오래 기다린 성이 아니었다. 너무 빨리 열린 문이 사람을 삼켰다.",lines:["원술에게 맡긴 패물은 병사로 돌아왔다. 그는 빚을 그렇게도 받아 냈다.","유요의 군막은 오래 버티지 못했다. 오래 버틴 것은 그의 이름뿐이었다.","주유와는 말보다 북소리가 먼저 맞았다. 북이 맞으면 군막도 맞았다.","강동 호족은 문을 늦게 열었다. 늦게 열린 문에는 먼저 장부를 들였다.","허도 쪽 길을 한 번 보았다. 그 길은 사냥길보다 멀었다.","허공의 식객은 낮은 풀숲에 숨어 있었다. 젊은 칼은 낮은 풀을 얕보았다.","새벽엔 강가 배밑을 손으로 밀어 본다.","한낮엔 여섯 군 장부에 새 깃발 자국을 찍는다.","저물녘엔 신정 고개에서 긁힌 투구를 닦는다.","밤엔 사냥길 풀숲의 낮은 소리를 듣는다."]},sunquan:{name:"손권",select:"손권은 사람을 오래 저울질했다. 무게가 맞아도 손을 늦게 놓았다.",lines:["유비와 손을 잡을 때도 물길은 가운데 있었다. 손은 닿아도 땅은 갈라져 있었다.","합비에서는 장료의 말발굽이 너무 가까웠다. 가까운 소리는 오래 남았다.","이릉의 불길은 유비의 깃발을 낮췄다. 낮아진 깃발은 동맹문보다 무거웠다.","위가 보낸 오왕 인수는 받은 날부터 짐이 되었다. 씻어도 남의 봉랍 냄새가 났다.","후계의 방은 문이 둘이면 안 되었다. 둘인 문은 밤마다 서로 삐걱였다.","손권은 사람을 잘 올렸다. 만년에는 올린 사람의 그림자까지 의심했다.","새벽엔 나루의 묶인 배를 센다.","한낮엔 강 건너 사신의 인수를 햇빛에 둔다.","저물녘엔 합비 쪽 말발굽 소리를 지도 밖으로 밀어 둔다.","밤엔 후계 문서의 봉인을 다시 누른다."]},lumeng:{name:"여몽",select:"여몽은 칼집 옆에 책을 두었다. 늦게 배운 글자가 형주의 문을 열었다.",lines:["어릴 적에는 창대가 먼저 손에 잡혔다. 늦게 잡은 책은 더 세게 쥐었다.","손권이 배우라 했고 여몽은 배웠다. 짧은 명령이 긴 밤을 만들었다.","노숙은 다시 보겠다고 했다. 다시 보는 눈은 쉽게 감기지 않았다.","육손의 이름은 낮았다. 낮은 이름이 큰 장수의 눈을 늦췄다.","원혼 이야기는 술자리에서 자랐다. 병든 몸은 괴이담보다 먼저 식었다.","형주를 얻은 뒤 그는 오래 앓았다. 이긴 계책도 몸값을 나중에 받았다.","새벽엔 칼집 옆에 책 한 권을 펴 둔다.","한낮엔 병문서의 먹이 마르는지 본다.","저물녘엔 흰옷 묶음과 군복을 따로 센다.","밤엔 강릉 문빗장 소리를 종이에 적는다."]},luxun:{name:"육손",select:"육손은 불을 늦게 놓았다. 그보다 오래 적의 더위를 세었다.",lines:["관우에게 보낸 글은 낮고 얇았다. 얇은 종이가 두꺼운 경계를 눌렀다.","여몽의 뒤에 서 있을 때 그의 이름은 작았다. 작은 이름은 큰 눈을 비켜 갔다.","이릉의 여름은 칼보다 오래 사람을 무디게 했다. 육손은 그 무딘 시간을 기다렸다.","노장들이 북을 치자 했다. 그는 북소리보다 더운 바람이 먼저 일하게 두었다.","승상 인수는 무겁지 않았다. 무거운 것은 두 궁의 문틈에서 올라온 먼지였다.","견책 죽간은 얇았다. 얇은 것이 사람을 오래 눌렀다.","새벽엔 낮은 이름으로 봉서를 쓴다.","한낮엔 햇볕에 마른 장막 끈을 만진다.","저물녘엔 길게 이어진 영채 자리를 접어 본다.","밤엔 견책 죽간을 등불 아래 놓지 않는다."]},simayi:{name:"사마의",select:"병이라 적은 죽간은 바깥에 내놓으시오. 군사는 문틈으로 지난 발자국부터 세오.",lines:["맹달은 길이 멀다 믿었소. 말발굽은 그 믿음보다 빨랐소.","오장원에선 북소리를 아껴야 했소. 굶는 쪽이 먼저 강가로 나오오.","공손연의 성문은 바다 안개 뒤에 있었소. 안개는 목을 가리지 못했소.","고평릉의 흙은 부드러웠소. 수레바퀴 자국은 그날 깊게 남았소.","조상 이야기는 낮은 소리로 하시오. 벽에도 못 자국이 있소.","장춘화가 문밖 말을 끊은 날, 집안의 숨도 군령처럼 낮아졌소.","새벽엔 병문안을 받을 얼굴을 닦는다.","한낮엔 관문을 닫고 말발굽 수를 센다.","저물녘엔 싸우지 않은 전장의 곡식을 적는다.","밤엔 빈 칙서의 가장자리를 만진다."]},mizhu:{name:"미축",select:"셈은 사람으로 셈하는 것이오. 물목은 그 다음이지요.",lines:["재물은 쌓는 게 아니라 흐르게 두는 것이오. 사람에게로.","물에서 난 부는 물로 돌아가기도 쉽소. 둑을 늘 보시오.","셈이 빠른 자는 닢을 세고, 더 빠른 자는 닢 쥔 손을 세지요.","좌판은 물목을 늘어놓는 자리가 아니라 사람을 늘어놓는 자리외다.","소금은 안 썩으나, 잘못 댄 줄은 가산째로 썩소.","헐값에 산 물목보다 제값에 산 사람이 오래 남소.","새벽엔 강물 소리보다 먼저 장부 끈을 푼다.","한낮엔 비단 결보다 좌판 앞 손의 떨림을 본다.","저물녘엔 빈 수레가 돌아온 길부터 셈한다.","밤엔 둑 쪽 물소리를 듣고 가산 장부를 한 칸 안쪽으로 밀어 둔다."]},caoren:{name:"조인",select:"한 자리를 맡았으면 그 자리에서 셈을 끝내야지.",lines:["물러설 자리를 미리 봐 두는 버릇, 그게 성을 잃소.","문 하나에 사람 열을 세웠소. 적게도 많게도 아니오.","발밑이 굳었는지 먼저 본다. 칼은 그 다음이오.","활을 쏘는 손보다 빗장을 거는 손이 늦으면 안 되오.","성이 서 있는 동안은 셈이 안 끝난 거요.","이름은 성과 함께 남거나 함께 묻히오.","새벽엔 성가퀴의 젖은 흙을 손으로 눌렀다.","한낮엔 번성 서문과 강릉 창고의 빗장을 따로 확인했다.","저물녘엔 구원로보다 무너진 벽의 폭을 먼저 적었다.","밤에는 종친의 이름보다 문틈의 바람을 들었다."]},caozhi:{name:"조식",select:"일곱 걸음은 짧소. 붓끝이 먼저 피를 본다.",lines:["술잔은 비면 가벼워지오. 빈 잔을 들고도 문밖 군사가 물러나지 않았다.","임치의 봉지가 멀다 하여 붓이 무뎌지지는 않소. 다만 봉서가 늦게 온다.","형제의 뿌리는 한 흙에 묻혔소. 솥 밑 장작은 그 흙을 가리지 않는다.","양수는 너무 빨리 읽었소. 빨리 읽은 글은 칼보다 먼저 들킨다.","왕의 관은 머리보다 무겁소. 무거운 관을 쓰고도 문밖에 설 때가 많다.","시 한 줄은 문을 열지 못하오. 닫힌 문 밑으로 들어갈 뿐이다.","새벽엔 젖은 붓을 비단 위에 눕힌다.","한낮엔 봉지에서 온 명부를 말없이 접는다.","저물녘엔 마른 술잔 안쪽 글자를 본다.","밤엔 문밖 군사의 창끝이 등불에 닿는지 센다."]},chengong:{name:"진궁",select:"활은 누가 당기느냐가 아니라 어디를 겨누느냐로 값이 매겨지오.",lines:["계책은 다 짜 놓았소. 받느냐 마느냐는 마루 위 사람 몫이지, 내 몫이 아니오.","성 하나 지키는 데도 셈이 있소. 한데 그 셈을 들을 귀가 늘 모자라오.","나는 따지는 사람이오. 따지지 않는 자리에 앉으면 손발이 묶인 것과 같소.","옛 주인 이야기는 묻지 마시오. 떠난 길은 다시 셈하지 않소.","고순은 말수가 적소. 한데 그 적은 말이 마루 위 백 마디보다 무겁소.","조 공은 사람을 잘 쓰오. 바로 그래서 그 밑에 서는 일이 더 조심스럽소.","새벽안개 속에 오늘 겨눌 곳을 정한다.","한낮엔 활이 누구를 향하는지 본다.","저물녘이면 섬길 주공의 그릇을 되짚는다.","밤이 길어도 그릇된 활은 당기지 않는다."]},chengyu:{name:"정욱",select:"성문은 입으로 닫는 게 아니오. 누가 거기 서느냐로 닫는 거요.",lines:["곡식이 떨어지면 시신을 절여서라도 군량을 메운 적이 있소. 그 얘긴 더 묻지 마오.","조공께서 동쪽으로 가시며 견성을 내게 맡기셨소. 나는 아직 그 문을 닫고 있소.","물러설 자리를 미리 비워 두지 마오. 물러설 곳이 있으면 사람은 끝내 물러서오.","겁먹은 군졸은 야단치지 않소. 겁먹을 틈을 안 주면 그뿐이오.","사수의 둑을 터 적의 발을 묶은 적이 있소. 물도 병기요, 쓸 줄 알면.","나를 사납다 하오. 사납지 않은 손에 성을 맡겨 본 자가 그 말을 하오.","새벽엔 견성 성문을 맡은 이름을 먼저 부른다.","한낮엔 군량 장부의 모자란 수를 다시 센다.","저물녘엔 사수 둑과 성벽 물길을 함께 본다.","밤에는 닫힌 문 안의 숨소리까지 셈한다."]},dianwei:{name:"전위",select:"쌍극은 무겁소. 가벼우면 못 막소.",lines:["주공 곁 다섯 걸음 안은 내 자리요. 그 안에 든 칼은 내가 받소.","나는 셈이 더디오. 누가 먼저 들고, 누가 옆을 도는지 — 그것만 외워 두오.","문은 좁아야 좋소. 한 사람만 들면 한 사람만 막으면 되니.","적이 몇인지는 세지 않소. 세어 봤자 손은 둘뿐이오.","술은 큰 잔으로 받소. 손이 떨리지 않을 만큼만.","뒤를 보라 하지 마시오. 내가 뒤요.","새벽엔 장막 끈이 마르기 전에 쌍극을 세웠다.","한낮엔 주공 곁 다섯 걸음 안에 선을 그었다.","저물녘엔 술잔을 받았으나 문 쪽에서 등을 떼지 않았다.","밤에는 완성의 문턱이 그의 몸으로 좁아졌다."]},dongzhao:{name:"동소",select:"봉영은 길을 닦는 일이 아니오. 길목 사람의 귀를 바꾸는 일이다.",lines:["위공의 글자는 하루아침에 커지지 않았소. 먼저 마루 밑 받침돌을 바꾸었다.","순욱은 빈 그릇을 보았소. 나는 그릇을 놓을 상을 보았다.","적의 편지는 적의 손에서만 나오지 않소. 봉한 자국이 같으면 읽는 자가 속는다.","세 왕을 섬긴 늙은 손엔 칼집보다 봉랍이 익었소.","명분은 돌처럼 무겁소. 무거운 것은 들어 올리지 않고 밑을 파야 움직인다.","천자 수레는 바퀴보다 귀가 먼저 움직였소. 귀가 돌아서면 길도 따라 돌아섰소.","새벽엔 봉랍을 손톱으로 눌러 자국을 본다.","한낮엔 사신이 지나갈 길목 사람을 갈아 세운다.","저물녘엔 위공 추대 글의 남길 자리을 남긴다.","밤엔 같은 소문을 다른 입에 나누어 준다."]},gaoshun:{name:"고순",select:"줄이 무너지지 않으면 그 싸움은 진 게 아니오.",lines:["함진영은 일곱 줄이오. 한 줄이 비면 그 자리부터 진다.","약탈한 자루는 무겁소. 그 무게만큼 줄이 처지오.","함락된 성에선 빈 솥부터 보오. 솥이 비면 다음 칸도 비오.","진궁이 무겁게 잠자코 있으면, 나도 잠자코 줄을 마저 세오.","갑주 끈은 매일 새로 매오. 어제 멀쩡하던 끈이 오늘 끊기오.","돌아온 자리에 한 사람이 비면, 그 밤은 머릿수만 세다 새오.","새벽엔 함진영 일곱 줄의 빈 칸을 먼저 센다.","한낮엔 갑주 끈을 다시 매고 돌아온 머릿수를 적는다.","저물녘엔 빈 솥과 빈 줄을 나란히 본다.","밤엔 끊긴 줄 이름을 낮게 다시 부른다."]},guojia:{name:"곽가",select:"상대가 무얼 두려워하는지 알면, 칼은 거기 한 번이면 족하오.",lines:["원소는 결단을 미룬 자리에서 패를 흘리오. 셈은 진작 끝났소.","주공은 묻기 전에 답을 들고 오라 하시지. 마침 들고 왔소.","술이 약을 대신한 지 오래요. 의원은 자라 하고, 자면 보지 못하니.","여포는 사납되 얕소. 얕은 물은 한 번 막으면 길이 끊기오.","기침이 잦아졌소. 셈은 더 빨라졌고.","패는 이미 다 갈렸소. 엎을 자리는 한 군데, 나머지는 허세요.","새벽잠이 짧은 자가 먼저 적의 꿈을 읽는다.","한낮엔 적이 무얼 겁내는지 헤아린다.","저물녘 한 잔에 묘책이 더 맑아진다.","밤이 깊을수록 칠 곳이 또렷하다."]},huaxin:{name:"화흠",select:"하사품은 집 안에 오래 두면 먼지보다 먼저 혀를 부르오.",lines:["박평의 창고엔 남은 칸이 많았소. 남은 칸을 본 손님이 더 오래 앉았다.","헌제의 마루에 오른 날, 신발 밑 흙을 털 시간이 없었소.","선양의 글은 붉은 끈으로 묶였소. 끈이 고와도 묶인 것은 묶인 것이다.","녹봉은 흘러야 썩지 않소. 고인 녹봉은 집안부터 흐리게 한다.","연의의 붓은 사람을 빨리 검게 칠하오. 사관의 먹은 더디 마른다.","용의 머리라 불린 젊은 날은 지났소. 늙은 대신은 머리보다 목을 낮춘다.","새벽엔 하사품 명부의 남은 줄을 남긴다.","한낮엔 손님에게 나간 비단 수를 적는다.","저물녘엔 선양 문서의 끈을 다시 묶지 않는다.","밤엔 갈라진 자리 이야기를 등불 아래 두지 않는다."]},jushou:{name:"저수",select:"한 판에 거는 자는 한 판에 잃소. 나는 열 해를 두고 한 폭을 그리는 사람이오.",lines:["전풍과 나는 같은 장부를 보오. 둘이 같은 칸을 짚어도, 마루 위에선 그 칸이 늘 비어 있소.","후방 길목 하나가 곳간을 먹이오. 그 길을 막을 채비를 거듭 적어 올렸소. 받느냐 마느냐는 내 손 밖이오.","곽도의 말은 빠르고 달고 짧소. 내 말은 더디고 쓰고 기오. 단 자가 늘 먼저 들어가오.","아이 하나를 북쪽 성에 두고 왔소. 그 셈은 장부에 안 적소. 적으면 손이 흔들리니.","사람을 고를 땐 한 번이오. 한데 그 사람이 나를 셋으로 나눠 쥐면, 나는 이미 한 번 그른 셈이오.","더디 가자 한 말을 겁이라 읽는 자가 있소. 겁이 아니라 셈이오. 셈을 겁으로 읽는 마루는 길지 못하오.","새벽은 열 해를 두고 그릴 한 폭의 첫 획이다.","한낮의 한 수에 판 전체를 본다.","저물녘엔 서두르는 자를 말린다.","밤이 길수록 멀리 둔 수가 보인다."]},shenpei:{name:"심배",select:"성은 밖에서 무너지는 일이 드무오. 안에서 빗장 푸는 손이 먼저 무너지오.",lines:["성벽 흙은 내가 직접 밟아 다지오. 남이 다진 흙은 어디가 무른지 발이 모르오.","곽도가 또 마루 위에서 입을 놀렸소. 입은 성벽 한 자도 안 쌓소.","항복이라는 말은 내 입에 담아 본 적이 없소. 담는 순간 혀가 먼저 적의 것이 되오.","곽도의 말은 매끄럽소. 매끄러운 말일수록 빗장을 잘 미오.","우물부터 보오. 농성이 길어지면 칼보다 물이 먼저 사람을 가르오.","밤에 성벽을 한 바퀴 도오. 낮에 멀쩡하던 돌 하나가 밤사이 빠져 있곤 하오.","새벽엔 업성 흙을 밟아 무른 곳을 찾는다.","한낮엔 군량 장부와 망루 점호를 맞춘다.","저물녘엔 우물 덮개와 성문 빗장을 함께 본다.","밤엔 북쪽을 향한 자리까지 성벽 길을 돈다."]},tianfeng:{name:"전풍",select:"곧은 말은 귀에 거슬리오. 거슬리지 않게 다듬은 말은 이미 곧은 말이 아니오.",lines:["내 입에서 나간 말이 마루 위에서 세 번 잠들었소. 한데 네 번째도 같은 말을 올릴 참이오.","주공은 망설이오. 망설임은 죄가 아니오. 한데 망설이는 동안 곁에서 단 말만 올리는 자들이 죄요.","곽도가 또 마루 위에서 무릎을 곱게 접더군. 접는 무릎으로 천하를 잡은 자는 본 적이 없소.","저수와 나는 한 도면을 보오. 보는 눈이 둘이면, 적어도 굽은 말 하나는 둘이서 막소.","셈은 다 끝났소. 받느냐 마느냐는 마루 위 사람 몫이나, 안 받았다 하여 셈이 틀린 건 아니오.","곧은 사람을 가둬 두고도 멀쩡히 굴러가는 마루를 더러 봤소. 한동안은 그게 더 무섭더군.","새벽 곧은 말은 귀에 거슬려도 삼키지 않는다.","한낮에도 듣기 거북한 말을 고른다.","저물녘이면 다듬지 않은 말을 벼른다.","밤이 깊어도 굽은 말은 하지 않는다."]},xiahoudun:{name:"하후돈",select:"내 한 발은 주공의 막사 앞에 박혀 있다. 그 발은 뒤로 떼지 않는다.",lines:["창대를 닦는 일은 남에게 맡기지 않는다. 닦는 동안 막사 입구가 비지 않게 둔다.","물러서는 자는 처음 한 발이 어렵다 한다. 나는 그 첫 발을 모른다.","화살이 눈을 가져갔다. 가져간 만큼만 잃었다. 자리는 그대로 두고 왔다.","주공이 위태로운 자리에 서면, 나는 그 앞 반보를 먼저 밟는다. 반보면 충분하다.","칼을 맞대 본 자라야 누구 뒤에 설지 안다. 나는 한 사람 뒤에만 선다.","이긴 날도 막사 앞은 비우지 않았다. 이겼다고 줄이 풀리는 진을 여럿 봤다.","새벽에는 막사 앞 흙에 박힌 발자국을 세었다.","한낮엔 둔전 물길과 군량 수레를 함께 보았다.","저물녘엔 주공 수레가 멎은 자리보다 반보 앞에 섰다.","밤에는 보이지 않는 쪽을 창대로 막았다."]},xiahouyuan:{name:"하후연",select:"사흘이면 오백 리. 적이 솥을 걸기 전에 닿는다.",lines:["말은 길이 마르기 전에 먹인다. 젖은 길은 발굽을 잡는다.","오백 리를 사흘에 끊었다. 넷째 날 적은 그제야 활을 멨다.","물어볼 건 하나다. 뒤로 난 길에 누가 섰는가.","성을 보면 늦는다. 성 밖 길목을 본다.","군량 수레는 닷새치만 끌고 간다. 그 안에 끝낸다.","느린 명령은 군량을 먹고, 빠른 칼은 군량을 남기오.","새벽엔 말 입에 재갈을 물리고 젖은 길을 먼저 보았다.","한낮엔 척후가 돌아오기 전에 다음 고개를 넘었다.","저물녘엔 군량 수레가 뒤처진 수를 세었다.","밤에는 등 뒤 길목의 불빛이 몇 남았는지 세었다."]}};function _c(a){return we()==="en"&&Uu[a]?Uu[a]:kh[a]}function ku(a){return _c(a)?.select??""}function zu(a,e){const t=_c(a);return!t||t.lines.length===0?"":t.lines[(e%t.lines.length+t.lines.length)%t.lines.length]}function iM(a=Math.random){const e=Object.keys(kh),t=e[Math.floor(a()*e.length)],i=_c(t)??kh[t];return{id:t,name:i.name,line:i.lines[Math.floor(a()*i.lines.length)]??i.select}}const nM=40,sM=1.2,aM=40,Nu=100,El=75,rM=12,oM=55,lM=8,hM=11,cM=.9,Ou=1.7,dM=10,uM=6,Bu=90,fM=[180,360,540];class pM{onLordSpawn=null;onCapture=null;onCounterattack=null;onVolley=null;onDefended=null;onLost=null;onApproach=null;d;state="enemy_held";approached=!1;sentriesSpawned=!1;garrisonAcc=0;captureTimer=0;counterTimer=0;waveIdx=0;trickleAcc=0;volleyTimer=0;fallGauge=0;gaugeThrottle=0;supplyTimer=0;lordX=0;lordZ=0;gameTime=0;volleys=[];_pt={x:0,z:0};constructor(e){this.d=e}reset(){this.state="enemy_held",this.approached=!1,this.sentriesSpawned=!1,this.garrisonAcc=0,this.captureTimer=0,this.counterTimer=0,this.waveIdx=0,this.trickleAcc=0,this.volleyTimer=0,this.fallGauge=0,this.gaugeThrottle=0,this.supplyTimer=0,this.volleys.length=0}update(e,t,i,n){this.gameTime=t;const s=Math.max(1,t/60),r=i-_e.cx,o=n-_e.cz,l=Math.hypot(r,o);switch(this.state){case"enemy_held":case"breached":this.updateSiegePhase(e,s,i,n,l);break;case"lord":break;case"captured":this.updateCaptured(e,t);break;case"counterattack":this.updateCounterattack(e,s,i,n,l);break}}updateSiegePhase(e,t,i,n,s){if(!(s>nM)){for(this.approached||(this.approached=!0,this.onApproach?.()),this.sentriesSpawned||(this.sentriesSpawned=!0,this.d.spawner.spawnGateWatch(this.courtyardCorners(),t)),this.garrisonAcc+=sM*e;this.garrisonAcc>=1;){if(this.garrisonAcc-=1,this.d.spawner.garrisonCount()>=aM){this.garrisonAcc=0;break}const r=this.courtyardPoint();this.d.spawner.spawnSiegeAttacker(r.x,r.z,t,!1)}this.state==="breached"&&this.d.map.insideCastleBounds(i,n,-1)&&!this.d.map.insideKeepBounds(i,n,0)&&!this.d.bossActive()&&this.spawnLord()}}spawnLord(){this.state="lord",this.lordX=_e.keepGate.x,this.lordZ=_e.keepGate.z+4,this.d.map.openKeepGate(),this.d.requestLord(this.lordX,this.lordZ),this.onLordSpawn?.(this.lordX,this.lordZ)}notifyGateBreach(e){this.state==="enemy_held"&&(e==="castle-s"||e==="castle-e"||e==="castle-w")&&(this.state="breached")}captureNow(e,t){this.state==="lord"&&(this.state="captured",this.captureTimer=0,this.d.map.setCastleBreachable(!1),st.allied=!0,st.flipX=e,st.flipZ=t,st.flipVersion++,this.dropDumplings(2),this.d.placeSupply("gong",_e.cx,_e.cz+2),this.supplyTimer=Bu,this.onCapture?.(e,t))}updateCaptured(e,t){this.captureTimer+=e,this.tickSupplyRespawn(e),this.captureTimer>=Nu&&this.canStartCounter(t)&&this.startCounterattack()}canStartCounter(e){if(this.d.bossActive()||this.d.hulaoActive())return!1;for(const t of fM)if(e>=t-25&&e<t)return!1;return!0}tickSupplyRespawn(e){this.supplyTimer-=e,this.supplyTimer<=0&&(this.supplyTimer=Bu,this.d.placeSupply("dumpling",_e.cx+(this.d.rng.next()-.5)*5,_e.cz+(this.d.rng.next()-.5)*4))}startCounterattack(){this.state="counterattack",this.counterTimer=0,this.waveIdx=0,this.trickleAcc=0,this.fallGauge=0,this.gaugeThrottle=0,this.volleyTimer=this.d.rng.range(2,4),this.volleys.length=0,this.d.spawner.setSiegeActive(!0),this.onCounterattack?.(),this.spawnWave(),this.waveIdx=1}updateCounterattack(e,t,i,n,s){for(this.counterTimer+=e,this.tickSupplyRespawn(e);this.waveIdx<4&&this.counterTimer>=this.waveIdx*20;)this.spawnWave(),this.waveIdx++;for(this.trickleAcc+=2*e;this.trickleAcc>=1;)this.trickleAcc-=1,this.spawnTrickle(t);if(this.volleyTimer-=e,this.volleyTimer<=0&&(this.d.map.insideCastleBounds(i,n,0)&&this.fireVolley(i,n),this.volleyTimer=this.d.rng.range(lM,hM)),this.updateVolleys(e,i,n),s>oM){this.fall();return}this.counterTimer>=El&&this.defend()}spawnWave(){const e=Math.max(1,this.gameTime/60);for(const t of _e.outerGates){const i=this.gateOutward(t.x,t.z);this.d.spawner.spawnSiegeRush(i.x,i.z,e)}}spawnTrickle(e){const t=_e.outerGates.filter(s=>this.d.map.isGateBreached(s.key));if(t.length===0)return;const i=t[this.d.rng.int(t.length)],n=this.gateOutward(i.x,i.z);this.d.spawner.spawnSiegeAttacker(n.x+(this.d.rng.next()-.5)*3,n.z+(this.d.rng.next()-.5)*3,e,this.d.rng.next()<.15)}gateOutward(e,t){let i=e-_e.cx,n=t-_e.cz;const s=Math.hypot(i,n)||1;return i/=s,n/=s,{x:e+i*5,z:t+n*5}}fireVolley(e,t){const i=5+this.d.rng.int(3),n=[];for(let s=0;s<i;s++){const r=this.d.rng.next()*Math.PI*2,o=this.d.rng.range(0,5.5);n.push({x:e+Math.cos(r)*o,z:t+Math.sin(r)*o,t:cM})}for(const s of n)this.volleys.push({x:s.x,z:s.z,t:s.t});this.onVolley?.(n)}updateVolleys(e,t,i){for(let n=this.volleys.length-1;n>=0;n--){const s=this.volleys[n];if(s.t-=e,s.t<=0){const r=t-s.x,o=i-s.z;r*r+o*o<=Ou*Ou&&this.d.hitPlayer(dM),this.volleys.splice(n,1)}}}defend(){this.state="held",this.d.spawner.setSiegeActive(!1),this.volleys.length=0,this.onDefended?.()}fall(){this.state="fallen",this.d.spawner.setSiegeActive(!1),this.volleys.length=0,st.allied=!1,st.flipX=_e.cx,st.flipZ=_e.cz,st.flipVersion++,this.onLost?.()}courtyardPoint(){for(let e=0;e<8;e++){const t=_e.cx+this.d.rng.range(-20,_e.ohx-2),i=_e.cz+this.d.rng.range(-18,_e.ohz-2);if(!this.d.map.insideKeepBounds(t,i,1))return this.d.map.projectWalkable(t,i,.75,this._pt),this._pt}return this._pt.x=_e.cx,this._pt.z=_e.cz+_e.ohz-4,this._pt}courtyardCorners(){return[{x:_e.cx-_e.ohx+3,z:_e.cz-_e.ohz+3},{x:_e.cx+_e.ohx-3,z:_e.cz-_e.ohz+3},{x:_e.cx-_e.ohx+3,z:_e.cz+_e.ohz-3},{x:_e.cx+_e.ohx-3,z:_e.cz+_e.ohz-3}]}dropDumplings(e){for(let t=0;t<e;t++){const i=t/Math.max(1,e)*Math.PI*2+.5;this.d.placeSupply("dumpling",_e.cx+Math.cos(i)*3,_e.cz+Math.sin(i)*3)}}get keepAuraActive(){return this.state==="captured"||this.state==="counterattack"||this.state==="held"}get keepCenterX(){return _e.cx}get keepCenterZ(){return _e.cz}get keepAuraRadius(){return uM}get siegeState(){return this.state}get fallGaugeValue(){return this.fallGauge}get lordActive(){return this.state==="lord"}get counterRemainSec(){return this.state==="counterattack"?Math.max(0,El-this.counterTimer):-1}get captureRemainSec(){return this.state==="captured"?Math.max(0,Nu-this.captureTimer):-1}testForceLord(){this.state==="enemy_held"&&(this.state="breached"),this.state==="breached"&&this.spawnLord()}testForceCounter(){this.state==="captured"&&this.startCounterattack()}testAddFall(e){this.fallGauge+=e,this.state==="counterattack"&&this.fallGauge>=rM&&this.fall()}testForceDefend(){this.state==="counterattack"&&(this.counterTimer=El,this.defend())}}const mM={ko:"화웅",en:"Hua Xiong"},Hu=[{ko:"낙양은 상국(相國)께서 지키라 명하신 성. 한 걸음도 들이지 못한다!",en:"Luoyang is the fortress the Chancellor bade me hold — not one step further!"},{ko:"화웅의 목을 노린 자, 모두 관문 앞의 흙이 되었다.",en:"All who sought Hua Xiong’s head became dust before this pass."},{ko:"연합의 깃발이 많다 한들, 한 길목은 한 줄 창병이면 막는다.",en:"However many your banners — one pass needs but one line of spears."},{ko:"호로관 바람은 칼끝에 붙어도, 피 묻은 날을 닦지는 못한다.",en:"The Hulao wind clings to my blade, yet wipes no blood from it."}],Gu=[{ko:"이 화웅이… 끝내 성문 앞에서 스러지는가.",en:"So Hua Xiong falls… here at the gate at last."},{ko:"관문 앞 흙이 된 이름들에… 내 이름도 얹히는가.",en:"To the names turned to dust before this pass… mine is added."}],gM={ko:"낙양성에 동탁의 잔당이 웅거하고 있다. 성문을 부수고 성주의 목을 취하라.",en:"Dong Zhuo’s remnants hold Luoyang. Break the gates and take the lord’s head."},vM={capture:{ko:"낙양 입성 洛陽入城",en:"Luoyang Taken 洛陽入城"},counter:{ko:"낙양 탈환군 來襲",en:"Reclaimers Strike 洛陽奪還軍來襲"},defended:{ko:"낙양 사수 洛陽死守",en:"Luoyang Held 洛陽死守"},fallen:{ko:"낙양 함락 洛陽陷落",en:"Luoyang Fallen 洛陽陷落"}},Ga=a=>we()==="en"?a.en:a.ko;function Vu(){return Ga(mM)}function xM(a=-1){const e=Hu.length,t=a<0?Math.floor(Math.random()*e):a%e;return Ga(Hu[t])}function bM(a=-1){const e=Gu.length,t=a<0?Math.floor(Math.random()*e):a%e;return Ga(Gu[t])}function yM(){return Ga(gM)}function zr(a){return Ga(vM[a])}const wc=a=>we()==="en"?a.en:a.ko,_M={dongzhuo:{ko:"낙양 쪽 하늘이 낮에도 밤처럼 검다. 동탁군이 밀려온다.",en:"The Luoyang sky darkens at noon — Dong Zhuo’s host presses in."},yuanshao:{ko:"하북의 대군이 둑을 넘는다. 넓은 군세, 넓은 그늘.",en:"Hebei’s great host crosses the dike — a wide army, a wide shadow."},warlords:{ko:"깃발이 갈라진다. 이제부터는 군웅의 땅이다.",en:"The banners splinter — from here, the land of warlords."}},wM={ko:"호로관 성문이 솟는다. 바람이 칼끝에 붙는다.",en:"The gate of Hulao rises — the wind clings to the blade."},MM={dianwei:{ko:"완성 문을 지킨 그 교위가 다시 나섰다.",en:"That captain who held the Wancheng gate rides out again."},gaoshun:{ko:"함진영을 이끈 그 진장이 다시 줄을 세운다.",en:"That captain of the Trap-Breaker Camp forms his ranks anew."},xiahouyuan:{ko:"정군산의 그 선봉이 또 길목을 친다.",en:"That vanguard of Dingjun strikes the road once more."},lumeng:{ko:"형주를 삼킨 그 도독이 흰 옷으로 다시 온다.",en:"That commander who swallowed Jing comes again in white."},luxun:{ko:"이릉의 그 별장이 또 불줄을 편다.",en:"That lieutenant of Yiling lays out his fire-line again."}};function SM(a){const e=_M[a];return e?wc(e):""}function AM(){return wc(wM)}function TM(a){const e=MM[a];return e?wc(e):""}const Wu=11,EM=1.25,CM=46,Xu=6,qu=4.5,RM=12,PM=1.2,IM=9,Cl=0,Rl=1,LM=2;class FM{map;towerX=[];towerZ=[];beaconX=[];beaconZ=[];beaconState=[];beaconTimer=[];syncedRevision=-1;_dir={x:0,z:0};_pos={x:0,z:0};constructor(e){this.map=e}reset(){this.beaconX.length=0,this.beaconZ.length=0,this.beaconState.length=0,this.beaconTimer.length=0,this.towerX.length=0,this.towerZ.length=0,this.syncedRevision=-1,this.sync()}sync(){if(this.map.revision===this.syncedRevision)return;this.syncedRevision=this.map.revision;const e=this.beaconX.slice(),t=this.beaconZ.slice(),i=this.beaconState.slice(),n=this.beaconTimer.slice();this.towerX.length=0,this.towerZ.length=0,this.beaconX.length=0,this.beaconZ.length=0,this.beaconState.length=0,this.beaconTimer.length=0;for(const s of this.map.landmarks)if(s.name.includes("望樓"))this.towerX.push(s.x),this.towerZ.push(s.z);else if(s.name.includes("烽火")){this.beaconX.push(s.x),this.beaconZ.push(s.z);let r=Cl,o=0;for(let l=0;l<e.length;l++){const h=e[l]-s.x,c=t[l]-s.z;if(h*h+c*c<.25){r=i[l],o=n[l];break}}this.beaconState.push(r),this.beaconTimer.push(o)}}update(e){this.sync();for(let t=0;t<this.beaconState.length;t++)this.beaconState[t]===Rl&&(this.beaconTimer[t]-=e,this.beaconTimer[t]<=0&&(this.beaconTimer[t]=0,this.beaconState[t]=LM))}watchtowerActive(e,t){this.sync();const i=Wu*Wu;for(let n=0;n<this.towerX.length;n++){const s=e-this.towerX[n],r=t-this.towerZ[n];if(s*s+r*r<=i)return!0}return!1}nearestThreatDir(e,t,i){const n=i.alive.length,s=CM,r=s*s,o=Xu*Xu,l=i.controlled;let h=0,c=0,d=!1;for(let f=0;f<n;f++){if(i.alive[f]===0||l&&l[f]===1)continue;const m=i.x[f]-e,v=i.z[f]-t,g=m*m+v*v;if(g>r||g<o)continue;const p=Math.sqrt(g),M=1-p/s;h+=m/p*M,c+=v/p*M,d=!0}if(!d)return null;const u=Math.hypot(h,c);return u<1e-4?null:(this._dir.x=h/u,this._dir.z=c/u,this._dir)}tryIgniteBeacon(e,t){this.sync();const i=qu*qu;for(let n=0;n<this.beaconX.length;n++){if(this.beaconState[n]!==Cl)continue;const s=e-this.beaconX[n],r=t-this.beaconZ[n];if(s*s+r*r<=i)return this.beaconState[n]=Rl,this.beaconTimer[n]=RM,{x:this.beaconX[n],z:this.beaconZ[n],radius:IM}}return null}beaconBuffActive(){for(let e=0;e<this.beaconState.length;e++)if(this.beaconState[e]===Rl)return!0;return!1}nearestArmedBeacon(e,t,i){this.sync();let n=null,s=i*i;for(let r=0;r<this.beaconX.length;r++){if(this.beaconState[r]!==Cl)continue;const o=e-this.beaconX[r],l=t-this.beaconZ[r],h=o*o+l*l;h<s&&(s=h,this._pos.x=this.beaconX[r],this._pos.z=this.beaconZ[r],n=this._pos)}return n}beaconStateNear(e,t){this.sync();for(let i=0;i<this.beaconX.length;i++){const n=this.beaconX[i]-e,s=this.beaconZ[i]-t;if(n*n+s*s<.25)return this.beaconState[i]}return-1}get watchtowerCount(){return this.sync(),this.towerX.length}get beaconCount(){return this.sync(),this.beaconX.length}}const Nr=6,Pl=6,Il=50,Ll=600,DM=2,UM=.1;function Or(a){return 8+a*a*3}class uo{scene=new rm;rig;cinematics;postfx=null;input;atlas;ground;map=new P_;world;soldiersR;variantsR;sgradeR;apriorityR;shadowR;effects;lightField;banner;decals;particles;damageText;labels;markers;castleZone;gateBreachFx;arrowRain;starAura;player;companion;companion2;enemies=new D1;spawner;hash=new B1;gems;projectiles;zones;enemyProj;treasure;weapons;passives={};availableWeapons=null;combo;musou;boss;events;objects;siege;landmarks;siegeEvents={lordSpawn:0,capture:0,counter:0,volley:0,defended:0,lost:0};hud;levelup=new Vw;hooks;hero=mn.zhaoyun;meta=null;state="attract";gameTime=0;kills=0;level=1;xp=0;nextXp=Or(1);pendingLevels=0;gold=0;goldEarned=0;maxCombo=0;bossesKilled=new Set;reviveAvailable=!1;reviveUsed=!1;ended=!1;attractTime=0;bossFlags={b3:!1,b6:!1,b9:!1};minibossIdx=0;nextMinibossAt=720;frameKills=0;killWindowT=0;killWindowCount=0;rerolledThisLevel=!1;relicIds=[];masterworkIds=[];feverWasOn=!1;endless=!1;victoryAchieved=!1;forceRelicNext=!1;heroQuoteCursor=0;nextHeroQuoteAt=12;hulaoAt=0;gateRushTimer=0;gateRushX=0;gateRushZ=0;gateRushHorizontal=!0;playerWallHits=0;timeScale=1;hitstopRemaining=0;musouStrength=0;renderTime=0;scratch=[];ctx;damageFlash;curChoices=[];moveOut={x:0,z:0};lastAttackWeapon="";lastAttackX=0;lastAttackZ=1;lastAttackCount=0;prevAttackCount=0;constructor(e,t,i,n,s=!1){this.atlas=e,this.rig=t,this.cinematics=new py(t),this.input=i,this.hooks=n,this.hud=new Xw(s),this.lightField=new my(s);const r=this.lightField.uniforms();this.ground=new vy(this.scene,r),this.map.update(0,0,0),this.world=new Wy(this.scene,this.map),this.soldiersR=new Cr(e.soldiers,Me,r),this.variantsR=new Cr(e.variants,Me,r),this.sgradeR=new Cr(e.sgrade,48,r),this.apriorityR=new Cr(e.apriority,48,r),this.shadowR=new fc(Me+2),this.scene.add(this.soldiersR.mesh,this.variantsR.mesh,this.sgradeR.mesh,this.apriorityR.mesh,this.shadowR.mesh),this.effects=new Qy(this.scene),this.arrowRain=new g_(this.scene,this.effects),this.starAura=new y_(this.scene),this.decals=new n1(this.scene),this.particles=new __(this.scene),this.damageText=new w_(this.scene),this.labels=new M_(this.scene),this.markers=new X_(this.scene),this.castleZone=new Q_(this.scene),this.gateBreachFx=new Xy(this.scene),this.gems=new W1(this.scene),this.projectiles=new K1(this.scene,r),this.zones=new Q1(this.scene),this.enemyProj=new Ra(this.scene),this.treasure=new tw(this.scene),this.player=new C1(e,this.hero,r),this.player.setRimScale(s?.5:1),this.scene.add(this.player.mesh),this.companion=new Du(this.scene,e,r),this.companion2=new Du(this.scene,e,r),this.spawner=new N1(e,this.enemies,this.map),this.banner=new i1(this.scene),this.spawner.onWave=o=>{this.banner.trigger(o.hanja,o.ko,o.banner);const l=SM(o.id);l&&(this.hud.quote(this.hero.name,l,3200),this.nextHeroQuoteAt=this.gameTime+30)},this.weapons=[Sa(this.hero.startWeapon)],this.combo=new rw(o=>this.hud.banner(o,"#e8c667",60),()=>this.hud.punchCombo()),this.musou=new lw(this.hero.musou,()=>{this.hud.banner("無雙","#ffe9a8",120,1200,3),this.sayHero(2600),Re.sfx("musou")}),this.boss=new dw(e,(o,l)=>{this.hud.banner(`${o} ${ie("bannerAppear")} ${l}`,"#e85c4a",44,1800,2),this.sayHero(),Re.sfx("bossHorn"),Re.playBgm("boss")}),this.events=new uw({enemies:this.enemies,zones:this.zones,effects:this.effects,particles:this.particles,atlas:e,rng:ct,banner:(o,l)=>{this.hud.banner(o,l,44,1800),Re.sfx("warn")},playerX:()=>this.player.x,playerZ:()=>this.player.z,hitPlayer:o=>{this.onPlayerHit(o)}}),this.objects=new _w(this.scene,{effects:this.effects,particles:this.particles,rng:ct,playerX:()=>this.player.x,playerZ:()=>this.player.z,playerRadius:this.player.radius,damageArea:(o,l,h,c)=>{this.shockwave(o,l,h,c),Re.sfx("explosion")},heal:o=>{this.player.heal(this.player.maxHp*o),Re.sfx("buff")},applyBuff:(o,l)=>{this.player.applyBuff(o,l),Re.sfx("buff")},banner:(o,l)=>{this.hud.banner(o,l,40,1400)},playerHpFrac:()=>this.player.hp/Math.max(1,this.player.maxHp),magnetizeGems:()=>this.gems.magnetizeAll(),stunEnemies:(o,l,h,c)=>{const d=this.hash.query(o,l,h,this.scratch);for(let u=0;u<d;u++){const f=this.scratch[u];this.enemies.alive[f]===1&&this.enemies.controlled[f]===0&&(this.enemies.stun[f]=Math.max(this.enemies.stun[f],c))}}}),this.ctx={dt:0,gameTime:0,px:0,pz:0,faceX:0,faceZ:1,aimX:0,aimZ:1,aimTarget:-1,hash:this.hash,enemies:this.enemies,effects:this.effects,damageText:this.damageText,projectiles:this.projectiles,zones:this.zones,particles:this.particles,stats:this.player.stats,rng:ct,onKill:o=>this.handleKill(o),onAttack:(o,l,h)=>{this.lastAttackWeapon=o,this.lastAttackX=l,this.lastAttackZ=h,this.lastAttackCount++},scratch:this.scratch},this.siege=new pM({map:this.map,spawner:this.spawner,enemies:this.enemies,rng:ct,bossActive:()=>this.boss.active,hulaoActive:()=>this.map.hulaoOn,requestLord:(o,l)=>{this.boss.active||(this.boss.spawn("huaxiong",Math.max(1,this.gameTime/60),this.ctx,o,l+16),this.boss.idx>=0&&(this.enemies.x[this.boss.idx]=o,this.enemies.z[this.boss.idx]=l,this.cinematics.onBossSpawn(o-this.player.x,l-this.player.z)))},hitPlayer:o=>{this.onPlayerHit(o)},placeSupply:(o,l,h)=>{o==="dumpling"?this.objects.spawnDumplingAt(l,h):this.objects.spawnGongAt(l,h)}}),this.siege.onApproach=()=>{this.hud.quote(this.hero.name,yM(),3600),Re.sfx("warn")},this.siege.onLordSpawn=()=>{this.siegeEvents.lordSpawn++,this.hud.quote(Vu(),xM(),3200)},this.siege.onCapture=(o,l)=>{this.siegeEvents.capture++,this.hud.banner(zr("capture"),"#ffd86b",60,1800,1);for(let c=0;c<10;c++){const d=ct.next()*Math.PI*2;this.gems.spawn(o+Math.cos(d)*2,l+Math.sin(d)*2,6)}const h=du(()=>ct.next(),this.masterworkIds,3);if(h.length>0){this.player.heal(this.player.maxHp*.4),this.curChoices=h.map(d=>({kind:"masterwork",id:d.id})),this.state="levelup";const c=this.curChoices.map(d=>this.cardView(d));this.levelup.open(c,Math.floor(this.gold),!1,d=>this.pickCard(d),()=>{})}else this.player.heal(this.player.maxHp*.5);this.hud.quote(this.hero.name,we()==="en"?"Luoyang is ours. Stay in the keep, resupply — the reclaimers will come.":"낙양은 우리 것이다. 성에 머물며 보급을 받고, 탈환군을 기다려라.",4200)},this.siege.onCounterattack=()=>{this.siegeEvents.counter++,this.hud.banner(zr("counter"),"#e85c4a",56,1800,1),this.hud.quote(this.hero.name,we()==="en"?"Reclaimers flood in! Hold your ground in the castle for 75 seconds.":"탈환군이 몰려온다! 성 안에서 75초만 버텨내라.",4600),Re.sfx("warn"),Re.playBgm("siege"),this.rig.addTrauma(.4)},this.siege.onVolley=o=>{this.siegeEvents.volley++,this.arrowRain.volley(o)},this.siege.onDefended=()=>{this.siegeEvents.defended++,this.hud.banner(zr("defended"),"#9affc0",60,1800,1);for(let o=0;o<24;o++){const l=ct.next()*Math.PI*2,h=2+ct.next()*5;this.gems.spawn(_e.cx+Math.cos(l)*h,_e.cz+Math.sin(l)*h,8)}for(let o=0;o<3;o++)this.objects.spawnDumplingAt(_e.cx+(o-1)*3,_e.cz+3);this.musou.gauge=Math.min(100,this.musou.gauge+50),this.rig.addTrauma(.5),Re.sfx("levelup"),this.boss.active||Re.playBgm("battle")},this.siege.onLost=()=>{this.siegeEvents.lost++,this.hud.banner(zr("fallen"),"#c8322a",56,1800,1),this.rig.addTrauma(.6),Re.sfx("warn"),this.boss.active||Re.playBgm("battle")},this.landmarks=new FM(this.map),this.effects.screenFlash=o=>this.flashScreen(o),this.effects.spawnLight=(o,l,h,c,d,u,f)=>this.lightField.spawn(o,.6,l,h,c,d,u,f),this.zones.spawnLight=(o,l,h,c,d,u,f)=>this.lightField.spawn(o,.5,l,h,c,d,u,f),this.effects.spawnDecal=(o,l,h,c,d,u)=>this.decals.spawn(o,l,h,c,d,u),this.effects.spawnMusouLight=(o,l,h,c,d,u,f)=>this.lightField.spawn(o,.8,l,h,c,d,u,f,!0),this.damageFlash=document.createElement("div"),this.damageFlash.style.cssText=["position:fixed","inset:0","pointer-events:none","opacity:0","z-index:30","background:radial-gradient(ellipse at center, rgba(0,0,0,0) 28%, rgba(200,26,20,0.98) 100%)"].join(";"),document.body.appendChild(this.damageFlash),this.lowHpVignette=document.createElement("div"),this.lowHpVignette.style.cssText=["position:fixed","inset:0","pointer-events:none","opacity:0","z-index:29","transition:opacity 0.25s linear","background:radial-gradient(ellipse at center, rgba(0,0,0,0) 45%, rgba(150,10,10,0.9) 100%)"].join(";"),document.body.appendChild(this.lowHpVignette)}lowHpVignette;lowHpBeat=0;damageVigLevel=0;smallFlashCd=0;flashActive=0;updateLowHp(e){this.smallFlashCd>0&&(this.smallFlashCd-=e),this.damageVigLevel>.001?(this.damageVigLevel*=Math.exp(-e/.26),this.damageVigLevel<.02&&(this.damageVigLevel=0),this.damageFlash.style.opacity=this.damageVigLevel.toFixed(3)):this.damageFlash.style.opacity!=="0"&&(this.damageFlash.style.opacity="0");const t=this.player.hp/Math.max(1,this.player.maxHp);if(t<.3&&this.state==="play"&&!this.player.dead){const i=(.3-t)/.3;this.lowHpVignette.style.opacity=(.3+.3*i).toFixed(2),this.lowHpBeat-=e,this.lowHpBeat<=0&&(this.lowHpBeat=.5+.5*(t/.3),Re.sfx("heartbeat"))}else this.lowHpVignette.style.opacity!=="0"&&(this.lowHpVignette.style.opacity="0",this.lowHpBeat=0)}pulseDamageVig(e){const t=e<.15?.15:e>.62?.62:e;t>this.damageVigLevel&&(this.damageVigLevel=t)}flashScreen(e){let t=e;if(t<.2){if(this.smallFlashCd>0)return;this.smallFlashCd=.5,t>.06&&(t=.06)}if(t=Math.min(t,.5-this.flashActive),t<=.01)return;const n=t;this.flashActive+=n;const s=document.createElement("div");s.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:31;background:rgba(200,220,255,1);",document.body.appendChild(s),s.animate([{opacity:t},{opacity:0}],{duration:120,easing:"ease-out"}).onfinish=()=>{s.remove(),this.flashActive-=n}}hitstop(e,t=.05){this.hitstopRemaining=Math.max(this.hitstopRemaining,e/1e3),this.timeScale=t}setHero(e){const t=mn[e];t&&(this.hero=t,this.player.setHero(t),this.musou.setHero(t.musou))}enterAttract(){this.resetPools(),this.player.mesh.visible=!1,this.hud.setVisible(!1),this.state="attract",this.attractTime=0}beginRun(e,t,i){this.setHero(e),this.meta=t,this.player.setMeta(t),this.availableWeapons=i?new Set(i):null,this.restart()}resetPools(){this.enemies.reset(),this.gems.reset(),this.projectiles.reset(),this.zones.reset(),this.enemyProj.reset(),this.treasure.reset(),this.labels.reset(),this.markers.reset(),this.castleZone.reset(),this.arrowRain.reset(),this.lightField.reset(),this.banner.reset(),this.decals.reset(),this.lowHpVignette.style.opacity="0",this.lowHpBeat=0,this.damageVigLevel=0,this.smallFlashCd=0,this.flashActive=0,this.damageFlash.style.opacity="0",this.spawner.reset(),this.combo.reset(),this.musou.reset(),this.events.reset(),this.objects.reset(),this.map.reset(),this.siege.reset(),this.landmarks.reset(),this.siegeEvents={lordSpawn:0,capture:0,counter:0,volley:0,defended:0,lost:0},this.gateBreachFx.reset(),this.starAura.reset(),this.cinematics.reset(),this.gateRushTimer=0,this.hulaoAt=420+ct.range(0,120),this.playerWallHits=0,this.lastAttackWeapon="",this.lastAttackX=0,this.lastAttackZ=1,this.lastAttackCount=0,this.prevAttackCount=0,this.companion.reset(this.hero.id),this.companion2.reset(this.hero.id,{def:Kw(this.companion.definition.id,()=>ct.next()),side:-1,joinTime:Zw,specialPhase:6}),this.boss.active=!1,this.boss.idx=-1}restart(){this.resetPools(),this.passives={},this.player.reset(this.passives),this.player.mesh.visible=!0,this.weapons=[Sa(this.hero.startWeapon)],this.gameTime=0,this.kills=0,this.xp=0,this.gold=0,this.goldEarned=0,this.maxCombo=0,this.bossesKilled.clear(),this.ended=!1,this.bossFlags={b3:!1,b6:!1,b9:!1},this.minibossIdx=0,this.nextMinibossAt=720,this.timeScale=1,this.hitstopRemaining=0,this.musouStrength=0,this.relicIds=[],this.masterworkIds=[],this.endless=!1,this.victoryAchieved=!1,this.forceRelicNext=!1,this.feverWasOn=!1,this.heroQuoteCursor=0,this.nextHeroQuoteAt=12,this.hud.setFever(!1),this.reviveAvailable=this.meta?.revive??!1,this.reviveUsed=!1;const e=this.meta?.startLevel??0;this.level=1+e,this.nextXp=Or(this.level),this.pendingLevels=e,this.hud.setVisible(!0),this.hud.resetSlots(),this.refreshLoadout(),this.state="play",Re.playBgm("battle")}refreshLoadout(){const e=[];for(const i of this.weapons)e.push({id:i.id,glyph:(wt[i.id]?.hanja??"?")[0],level:i.level,accent:"#e8c667"});const t=[];for(const i in this.passives)t.push({id:i,glyph:(Oi[i]?.hanja??"?")[0],level:this.passives[i],accent:"#7ec8ff"});this.hud.setLoadout(e,t)}pause(){this.state==="play"&&(this.state="paused",this.hooks.onPause())}resume(){this.state==="paused"&&(this.state="play")}abandon(){(this.state==="paused"||this.state==="play")&&this.finish(this.victoryAchieved)}get musouGauge(){return this.musou.gauge}get musouReadyFlag(){return this.musou.ready}get currentState(){return this.state}update(e){if(this.renderTime+=e,this.state==="attract"){this.attractTime+=e;const _=Math.sin(this.attractTime*.06)*5,E=Math.cos(this.attractTime*.05)*5;this.ground.update(e,_,E),this.map.update(_,E,e),this.world.update(),this.particles.update(e),this.effects.update(e),this.rig.update(e,_,E),Jd(0,0,0,0,0,0,!1),this.musouStrength+=(0-this.musouStrength)*Math.min(1,e*6),this.renderSprites();return}if(this.state==="dead"||this.state==="victory")return;if(this.state==="levelup"){this.input.consumePressed("Digit1")?this.pickCard(0):this.input.consumePressed("Digit2")?this.pickCard(1):this.input.consumePressed("Digit3")&&this.pickCard(2);return}if((this.input.consumePressed("Escape")||this.input.consumePressed("KeyP"))&&this.pause(),this.state==="paused")return;this.cinematics.wantsSkipInput&&(this.input.move.x!==0||this.input.move.z!==0||this.input.isDown("Space"))&&this.cinematics.skip(),this.input.consumePressed("Space")&&this.musou.activate()&&(this.rig.addTrauma(.5),this.cinematics.onMusouStart(),this.postfx?.pulseAberration(.7),this.flashScreen(.35)),this.hitstopRemaining>0&&(this.hitstopRemaining-=e,this.hitstopRemaining<=0&&(this.timeScale=1));const t=e*this.timeScale,i=t*this.musou.enemyTimeScale;this.frameKills=0,this.musou.chargeMul=this.player.musouBuffed?2:1,this.gameTime+=t,this.player.musouInvuln=this.musou.active,this.map.update(this.player.x,this.player.z,t);const n=this.player.x,s=this.player.z;if(this.player.update(t,this.input),this.map.resolveMovement(n,s,this.player.x,this.player.z,this.player.radius,this.moveOut)&&this.playerWallHits++,this.player.setPosition(this.moveOut.x,this.moveOut.z),this.player.justSkid&&(this.player.justSkid=!1,this.effects.spawnFlash(this.player.x,this.player.z,1.6,1.2,.4,.9),this.particles.dust(this.player.x,this.player.z)),this.player.justBoost){this.player.justBoost=!1;const _=this.player.boostTier>=2;this.effects.spawnThrust(this.player.x,this.player.z,this.player.faceX,this.player.faceZ,_?6:4.5,_?2.2:1.6,1.7,1.35,.5,.24),this.effects.spawnRing(this.player.x,this.player.z,_?4:2.8,1.7,1.3,.5,.4),this.rig.punchFov(_?3:2),Re.sfx("warn")}if(this.map.update(this.player.x,this.player.z,0),this.world.update(),this.player.justDashed){this.player.justDashed=!1;const _=this.player.x,E=this.player.z,x=this.player.dashDirX,y=this.player.dashDirZ;this.effects.spawnRing(_,E,4.5,1.4,1.9,2.4,.35),this.effects.spawnThrust(_,E,x,y,6,2,.7,1.4,2.2,.22),this.effects.spawnFlash(_,E,.8,1.4,2.2,2.2);for(let R=0;R<6;R++)this.particles.dust(_-x*R*.4,E-y*R*.4);this.cinematics.onDash(),this.postfx?.pulseBlur(.8,x,y),Re.sfx("warn")}this.gameTime>=this.nextHeroQuoteAt&&this.sayHero(),this.checkBossSpawn(),this.hulaoAt>0&&this.gameTime>=this.hulaoAt&&!this.map.hulaoOn&&!this.map.isGateBreached()&&(this.hulaoAt=0,this.map.triggerHulao(this.player.x,this.player.z),this.hud.banner(`${ie("bannerHulao")} 虎牢關`,"#ffb05a",48,1800),this.hud.quote(this.hero.name,AM(),3200),this.nextHeroQuoteAt=this.gameTime+30,Re.sfx("warn")),this.spawner.setBossActive(this.boss.active),this.spawner.update(i,this.gameTime,this.player.x,this.player.z),this.siege.update(i,this.gameTime,this.player.x,this.player.z),this.castleZone.setActive(this.siege.keepAuraActive),this.castleZone.update(t),this.landmarks.update(i);const r=this.landmarks.tryIgniteBeacon(this.player.x,this.player.z);if(r){const _=this.hash.query(r.x,r.z,r.radius,this.scratch);for(let E=0;E<_;E++){const x=this.scratch[E];if(this.enemies.alive[x]===1&&this.enemies.controlled[x]===0){this.enemies.stun[x]=Math.max(this.enemies.stun[x],.9);const y=this.enemies.x[x]-r.x,R=this.enemies.z[x]-r.z,P=Math.hypot(y,R)||1;this.enemies.push(x,y/P,R/P,6)}}this.effects.spawnRing(r.x,r.z,r.radius,2.2,1.1,.4,.5),this.hud.banner(we()==="en"?"Beacon Rally 烽火":"봉화 랠리 烽火","#ff9a3c",46,1400,1),Re.sfx("warn")}this.hash.clear(),this.enemies.insertAll(this.hash);const o=H1(this.enemies,this.hash,this.player.x,this.player.z,22,this.scratch,this.enemies.aliveCount);if(this.ctx.aimTarget=o,this.ctx.aimX=this.player.faceX,this.ctx.aimZ=this.player.faceZ,this.ctx.dashing=this.player.dashing,this.ctx.boosting=this.player.boosting,o>=0){const _=this.enemies.x[o]-this.player.x,E=this.enemies.z[o]-this.player.z,x=Math.hypot(_,E)||1;this.ctx.aimX=_/x,this.ctx.aimZ=E/x}this.enemies.update(i,this.player.x,this.player.z,this.hash,this.enemyProj,this.effects,this.map),this.ctx.dt=t,this.ctx.gameTime=this.gameTime,this.ctx.px=this.player.x,this.ctx.pz=this.player.z,this.ctx.faceX=this.player.faceX,this.ctx.faceZ=this.player.faceZ,this.ctx.dt=i,this.boss.update(i,this.ctx,this.enemyProj,this.player.x,this.player.z),this.events.update(i,this.gameTime),this.ctx.dt=t,this.hash.clear(),this.enemies.insertAll(this.hash);const l=_=>{const E=_.definition;this.hud.banner(`${ie("bannerAlly")} ${E.name} ${E.hanja}`,"#7ec8ff",46,1600),this.hud.quote(E.name,zu(E.id,0)),Re.sfx("buff"),this.cinematics.onAllyJoin(_.joinDirX,_.joinDirZ),this.hitstop(250,.32),this.banner.playing||this.banner.trigger(E.hanja,E.name,[E.cr,E.cg,E.cb])};this.companion.update(t,this.gameTime,this.player,this.ctx,this.level,this.musou.active)&&l(this.companion),this.companion2.update(t,this.gameTime,this.player,this.ctx,this.level,this.musou.active)&&l(this.companion2);const h=this.companion.active&&this.companion2.active;this.companion.damageScale=h?.8:1,this.companion2.damageScale=h?.8:1;const c=this.companion.consumeSpecialEvent();c&&(this.hud.quote(this.companion.definition.name,c.line),Re.sfx("buff"));const d=this.companion2.consumeSpecialEvent();d&&(this.hud.quote(this.companion2.definition.name,d.line),Re.sfx("buff"));const u=this.player.stats.rangeMul,f=this.player.stats.damageMul;this.landmarks.watchtowerActive(this.player.x,this.player.z)&&(this.player.stats.rangeMul=u*EM),this.landmarks.beaconBuffActive()&&(this.player.stats.damageMul=f*PM);for(let _=0;_<this.weapons.length;_++)this.weapons[_].update(this.ctx);this.player.stats.rangeMul=u,this.player.stats.damageMul=f,this.projectiles.update(t,this.player.x,this.player.z,this.enemies,this.hash,this.damageText,this.ctx.onKill,this.particles,this.effects,this.scratch),this.zones.update(t,this.enemies,this.hash,this.damageText,this.ctx.onKill,this.particles,this.scratch),this.objects.update(t,this.gameTime);for(const _ of this.map.landmarks){if(_.kind!==5)continue;const E=this.player.x-_.x,x=this.player.z-_.z;E*E+x*x<=25&&(this.player.heal(this.player.maxHp*.025*t),Math.random()<6*t&&this.particles.steam(_.x,_.z+.4),this.lightField.spawn(_.x,.6,_.z,1.3,.9,.5,6,.2))}if(this.siege.keepAuraActive){const _=this.siege.keepCenterX,E=this.siege.keepCenterZ,x=this.player.x-_,y=this.player.z-E,R=this.siege.keepAuraRadius;x*x+y*y<=R*R&&(this.player.heal(this.player.maxHp*.025*t),Math.random()<6*t&&this.particles.steam(_,E+.4),this.lightField.spawn(_,.6,E,1.3,.9,.5,6,.2))}this.objects.hitAt(this.player.x,this.player.z,4);const m=this.lastAttackCount-this.prevAttackCount;if(this.prevAttackCount=this.lastAttackCount,m>0){const _=this.map.nearestSealedGateKey(this.player.x,this.player.z,6);if(_){const E=34*this.player.stats.damageMul*m,x=this.map.damageGate(_,E),y=this.map.gates.find(R=>R.key===_);y&&this.effects.spawnRing(y.x,y.z,1.5,1.6,.6,.22,.22),x&&this.onGateBreached(x)}}this.ctx.dt=e;const v=this.player.x,g=this.player.z;this.musou.update(e,this.ctx,this.player)&&this.cinematics.onMusouEnd(),this.map.resolveMovement(v,g,this.player.x,this.player.z,this.player.radius,this.moveOut),this.player.setPosition(this.moveOut.x,this.moveOut.z),this.ctx.dt=t,this.enemyProj.update(i,this.player.x,this.player.z,this.player.radius,this.onPlayerHit,this.particles,this.effects,(_,E,x)=>this.map.circleBlocked(_,E,x)),this.contactDamage(),this.frameKills>=8&&(this.hitstop(30,.08),this.rig.addTrauma(.35)),this.killWindowT-=e,this.killWindowT<=0&&(this.killWindowT=.5,this.killWindowCount=0),this.killWindowCount+=this.frameKills,this.killWindowCount>=6&&(this.cinematics.onMassKill(this.killWindowCount),this.postfx?.pulseBlur(.85),this.hitstop(240,.28),this.killWindowCount=-1e5),this.gems.update(t,this.player.x,this.player.z,this.player.stats.pickupMul,this.onCollect,_=>{this.player.heal(this.player.maxHp*_),Re.sfx("buff")}),this.treasure.update(t,this.player.x,this.player.z,this.player.stats.pickupMul,this.onTreasure),this.combo.update(t);const p=this.combo.fever;this.hud.setFever(p),p&&!this.feverWasOn&&Re.sfx("fever"),this.feverWasOn=p,this.effects.update(e),this.arrowRain.update(e),this.starAura.update(e,this.player.x,this.player.z,this.player.shrineBuffActive,this.atlas.sgrade,this.player.frameUv.u,this.player.frameUv.v),this.lightField.update(e),this.decals.update(e),this.updateLowHp(e),this.particles.update(e),this.damageText.update(e),this.gateBreachFx.update(e),this.ground.update(e,this.player.x,this.player.z),this.map.update(this.player.x,this.player.z,e),this.world.update();const M=this.hash.query(this.player.x,this.player.z,11,this.scratch);let T=0;for(let _=0;_<M;_++){const E=this.scratch[_];this.enemies.alive[E]===1&&this.enemies.controlled[E]===0&&T++}this.rig.setThreat(Math.min(1,T/45)),this.rig.setLookAhead(this.player.velX,this.player.velZ,this.player.speedFrac),this.cinematics.update(e),this.rig.update(e,this.player.x,this.player.z),this.banner.update(e,this.rig.camera);const w=this.rig.camera.position;Jd(w.x,w.y,w.z,this.player.x,1.2,this.player.z,this.map.activeColliderCount>0),this.gateRushTimer>0&&(this.gateRushTimer-=e,this.gateRushTimer<=0&&this.spawner.spawnGateRush(this.gateRushX,this.gateRushZ,this.gateRushHorizontal,this.gameTime/60));const A=this.musou.active?.9:0;this.musouStrength+=(A-this.musouStrength)*Math.min(1,e*6),this.renderSprites(),this.updateLabels(),this.updateMarkers(e),this.updateSiegeObjective(),this.pendingLevels>0&&this.state==="play"&&this.showNextLevelUp(),this.player.dead?this.onPlayerDeath():!this.endless&&this.gameTime>=Ll&&this.finish(!0),!this.ended&&this.hud.update(this.buildHudState())}buildHudState(){return{time:this.gameTime,kills:this.kills,level:this.level,xp:this.xp,nextXp:this.nextXp,hp:this.player.hp,maxHp:this.player.maxHp,gold:this.gold,musouPct:this.musou.gauge,musouReady:this.musou.ready,combo:this.combo.count,bossActive:this.boss.active,bossName:_t("hero",this.boss.typeId,this.boss.name),bossHanja:this.boss.hanja,bossFrac:this.boss.hpFrac(this.ctx)}}sayHero(e=3600){const t=zu(this.hero.id,this.heroQuoteCursor++);this.hud.quote(this.hero.name,t,e),this.nextHeroQuoteAt=this.gameTime+60}static BOSS_SLOT_3=["yuanshao","xiahoudun","sunce"];static BOSS_SLOT_6=["dongzhuo","simayi","zhouyu"];checkBossSpawn(){if(this.boss.active)return;let e=!1;const t=this.gameTime/60;if(!this.bossFlags.b3&&this.gameTime>=180){this.bossFlags.b3=!0;const i=uo.BOSS_SLOT_3;this.boss.spawn(i[ct.int(i.length)],t,this.ctx,this.player.x,this.player.z),e=!0}else if(!this.bossFlags.b6&&this.gameTime>=360){this.bossFlags.b6=!0;const i=uo.BOSS_SLOT_6;this.boss.spawn(i[ct.int(i.length)],t,this.ctx,this.player.x,this.player.z),e=!0}else if(!this.bossFlags.b9&&this.gameTime>=540)this.bossFlags.b9=!0,this.boss.spawn("lvbu",t,this.ctx,this.player.x,this.player.z),e=!0;else if(this.endless&&this.gameTime>=this.nextMinibossAt){this.nextMinibossAt+=180;const i=Eu[this.minibossIdx%Eu.length];this.minibossIdx++,this.boss.spawn(i,t,this.ctx,this.player.x,this.player.z),e=!0}if(e&&this.boss.idx>=0&&(this.cinematics.onBossSpawn(this.enemies.x[this.boss.idx]-this.player.x,this.enemies.z[this.boss.idx]-this.player.z),this.boss.typeId)){const i=this.endless?TM(this.boss.typeId):"",n=i||Iu(this.boss.typeId,"appear");if(n){const s=i?this.hero.name:_t("hero",this.boss.typeId,this.boss.name);this.hud.quote(s,n,3200)}}}consumeReplayTrigger(){return this.cinematics.consumeReplayTrigger()}setPostFx(e){this.postfx=e}renderSprites(){this.shadowR.begin(),this.state!=="attract"&&this.shadowR.push(this.player.x,this.player.z,this.player.radius*1.6),this.companion.active&&this.shadowR.push(this.companion.x,this.companion.z,this.companion.radius*1.5),this.companion2.active&&this.shadowR.push(this.companion2.x,this.companion2.z,this.companion2.radius*1.5),this.enemies.render(this.atlas,this.soldiersR,this.variantsR,this.sgradeR,this.apriorityR,this.shadowR),this.shadowR.end(),this.decals.render(),this.gems.render(),this.projectiles.render(this.renderTime),this.zones.render(this.renderTime),this.enemyProj.render(this.renderTime),this.treasure.render(),this.objects.render(this.renderTime)}updateLabels(){const e=this.enemies,t=e.specials;this.labels.begin();for(let i=t.length-1;i>=0;i--){const n=t[i];if(e.alive[n]===0||e.labels[n]===null){t.splice(i,1);continue}this.labels.place(e.labels[n],e.x[n],e.scale[n]*1.05,e.z[n]),e.cart[n]===1&&Math.random()<.6&&this.particles.emit(e.x[n],.8,e.z[n],0,.5,0,2.2,1.8,.6,.6,.5,-.4,.9)}this.labels.end()}updateMarkers(e){const t=this.player.x,i=this.player.z;this.markers.begin(this.renderTime);const n=this.map.landmarks;for(let r=0;r<n.length;r++){const o=n[r],l=t-o.x,h=i-o.z,c=l*l+h*h;o.glow>0&&this.markers.glowAt(o.x,o.z,o.glow,o.gr,o.gg,o.gb),c<900&&this.markers.name(o.name,o.x,o.height*.5+1,o.z),c<2116&&this.emitLandmarkAmbient(o,e),o.kind===11?this.markers.interactRing(o.x,o.z,1.6,.9,.35,this.landmarks.beaconStateNear(o.x,o.z)===0):o.kind===5?this.markers.interactRing(o.x,o.z,.5,1.3,.7,!0):o.kind===6?this.markers.interactRing(o.x,o.z,1.4,.85,.4,!0):o.kind===2&&this.markers.interactRing(o.x,o.z,.6,.85,1.2,this.landmarks.watchtowerActive(o.x,o.z))}this.objects.emitMarkers(this.markers,t,i);for(const r of _e.outerGates)this.markers.gateBar(r.x,r.z,this.map.gateHp01(r.key));const s=this.guideTarget();s?this.markers.guide(s.x,s.z,t,i,this.rig.camera,s.color):this.markers.guideOff(),this.markers.end()}guideTarget(){const e=this.enemies;for(let i=0;i<e.flee.length;i++)if(e.alive[i]===1&&e.flee[i]===1)return{x:e.x[i],z:e.z[i],color:"rgba(255,225,77,0.95)"};if(this.boss.active&&this.boss.idx>=0&&e.alive[this.boss.idx]===1)return{x:e.x[this.boss.idx],z:e.z[this.boss.idx],color:"rgba(232,92,74,0.95)"};const t=this.siegeGuideTarget();return t?{x:t.x,z:t.z,color:"rgba(120,220,200,0.9)"}:null}siegeGuideTarget(){const e=this.siege.siegeState;if(e==="held"||e==="fallen")return null;const t=Math.hypot(this.player.x-_e.cx,this.player.z-_e.cz)<70;if(e==="enemy_held"||e==="breached"){if(!t)return null;let i=null,n=1/0;for(const s of _e.outerGates){if(this.map.isGateBreached(s.key))continue;const r=(s.x-this.player.x)**2+(s.z-this.player.z)**2;r<n&&(n=r,i={x:s.x,z:s.z})}return i}return(e==="lord"||e==="captured"||e==="counterattack")&&t?{x:_e.cx,z:_e.cz}:null}updateSiegeObjective(){const e=this.siege.siegeState,t=Math.hypot(this.player.x-_e.cx,this.player.z-_e.cz)<60,i=we()==="en";if(!t||e==="held"||e==="fallen"){this.hud.setObjective(null);return}if(e==="enemy_held"||e==="breached"){const n=this.map.castleOuterBreachCount();this.hud.setObjective({title:i?"Breach the Luoyang gates":"낙양 성문을 부숴라",sub:i?`Attack the gate · breached ${n}/3 · reward 名器`:`성문을 공격하라 · 파성 ${n}/3 · 보상 名器`,progress01:n/3})}else if(e==="lord")this.hud.setObjective({title:i?"Slay the warlord Hua Xiong":"성주 화웅을 베어라",color:"#e85c4a"});else if(e==="captured"){const n=this.siege.captureRemainSec;this.hud.setObjective({title:i?"Luoyang taken — resupply":"낙양 점령 — 보급·정비",sub:i?"Stay in the keep. Reclaimers incoming":"성에 머물러 대비 · 탈환군 내습 임박",countdownSec:n>=0?n:void 0,color:"#9affc0"})}else if(e==="counterattack"){const n=this.siege.counterRemainSec;this.hud.setObjective({title:i?"Hold Luoyang — survive!":"낙양 사수 — 버텨라!",sub:i?"Survive in the castle until time runs out":"성 안에서 시간이 다할 때까지 버텨라",countdownSec:n>=0?n:void 0,color:"#e85c4a"})}}emitLandmarkAmbient(e,t){const i=e.kind;i===11?Math.random()<13*t&&this.particles.fireEmber(e.x,e.z,.5):i===5?Math.random()<4*t&&this.particles.emit(e.x+(Math.random()-.5),e.height*.72,e.z+(Math.random()-.5)*.6,(Math.random()-.5)*.2,.7+Math.random()*.4,(Math.random()-.5)*.2,.5,.5,.52,1.1,1.2,-.3,.95):i===4&&Math.random()<2*t&&this.particles.emit(e.x,e.height*.5,e.z,0,.5+Math.random()*.3,0,.42,.42,.44,.9,1.4,-.2,.96)}contactDamage(){const e=this.player.x,t=this.player.z,i=this.hash.query(e,t,this.player.radius+1.8,this.scratch);let n=0;for(let s=0;s<i;s++){const r=this.scratch[s];if(this.enemies.alive[r]===0)continue;const o=e-this.enemies.x[r],l=t-this.enemies.z[r],h=this.player.radius+this.enemies.radius[r];o*o+l*l<=h*h&&this.enemies.damage[r]>n&&(n=this.enemies.damage[r])}n>0&&this.player.takeDamage(n*.5)&&(this.hitstop(90,.05),this.rig.addTrauma(.65),this.pulseDamageVig(.22+n*.5/this.player.maxHp*1.1),this.player.hurtFlash(),this.postfx?.pulseAberration(.85),this.musou.addHit(),Re.sfx("playerHit"))}onPlayerHit=(e,t=0,i=0)=>(this.player.takeDamage(e)&&(this.hitstop(90,.05),this.rig.addTrauma(.62),this.pulseDamageVig(.22+e/this.player.maxHp*1.1),this.player.hurtFlash(),this.postfx?.pulseAberration(.85),this.musou.addHit(),t!==0||i!==0?(this.player.nudge(t,i,2.4),this.rig.addTrauma(.15),Re.sfx("playerHitProj")):Re.sfx("playerHit")),!0);addGold(e){this.gold+=e,this.goldEarned+=e}handleKill(e){const t=this.enemies,i=t.x[e],n=t.z[e],s=this.map.recordKillAt(i,n);if(s&&this.onGateBreached(s),t.cart[e]===1){this.particles.burst(i,n,2.6,2,.7,30,6),this.effects.spawnRing(i,n,7,2.6,2,.7,.6),this.treasure.spawn(i,n,!1),this.addGold(Math.round(400*this.player.stats.goldMul)),this.hud.banner(`${ie("bannerSupply")} 補給確保`,"#ffe14d",52,1500),Re.sfx("levelup"),this.kills++,t.kill(e);return}if(t.boss[e]===1){if(this.boss.typeId==="huaxiong"){this.captureCastle(e);return}if(this.particles.burst(i,n,2.6,1.6,.7,60,8),this.effects.spawnRing(i,n,16,2.4,1.6,.8,.7),this.effects.spawnRing(i,n,10,2.2,1.2,2,.5),this.effects.spawnFlash(i,n,2.6,2,1,7),this.treasure.spawn(i,n,!0),this.hitstop(120,.05),this.rig.addTrauma(.9),this.cinematics.onBossDeath(i-this.player.x,n-this.player.z),this.postfx?.pulseBlur(.7),this.postfx?.pulseAberration(1),this.flashScreen(.4),this.hud.banner("討伐","#e8c667",90,1600,1),Re.sfx("levelup"),this.boss.typeId){const o=Iu(this.boss.typeId,"death");o&&this.hud.quote(_t("hero",this.boss.typeId,this.boss.name),o,3200),this.bossesKilled.add(this.boss.typeId)}Re.playBgm("battle"),this.addGold(Math.round(300*this.player.stats.goldMul)),this.kills++,t.kill(e);return}if(t.elite[e]===1){this.particles.burst(i,n,2.4,1.4,.7,26,6),this.effects.spawnRing(i,n,6,2.2,1.6,.8,.5),this.effects.spawnFlash(i,n,2.2,1.6,.8,3.6),this.treasure.spawn(i,n,!1),this.hitstop(60,.06),this.rig.addTrauma(.4),Re.sfx("hit"),this.addGold(Math.round(50*this.player.stats.goldMul)),this.kills++,t.kill(e);return}if(this.particles.burst(i,n,2.2*t.tr[e],1.3*t.tg[e],.5*t.tb[e],14,4.5),this.gems.spawn(i,n,t.gemValue[e]),this.musou.active){const o=Math.atan2(n-this.player.z,i-this.player.x);this.effects.spawnKOStar(i,n,Math.cos(o),Math.sin(o))}{const o=this.player.hp<this.player.maxHp*.4;this.gems.activeHealCount<6&&ct.next()<(o?.024:.012)&&this.gems.spawnHeal(i,n,.06)}this.addGold(this.player.stats.goldMul),this.kills++,this.frameKills++,this.frameKills<=2&&this.effects.spawnFlash(i,n,1.5*t.tr[e],.95*t.tg[e],.5*t.tb[e],1.4),Re.sfx("hit");const r=this.combo.onKill();this.combo.count>this.maxCombo&&(this.maxCombo=this.combo.count),r>0&&(this.xp+=r*this.player.stats.xpMul),this.musou.addKill(this.combo.count),this.rig.punchFov(-.5),t.kill(e)}captureCastle(e){const t=this.enemies,i=t.x[e],n=t.z[e];this.particles.burst(i,n,2.6,1.6,.7,60,8),this.effects.spawnRing(i,n,16,2.4,1.6,.8,.7),this.effects.spawnRing(i,n,10,2.2,1.2,2,.5),this.effects.spawnFlash(i,n,2.6,2,1,7),this.hitstop(120,.05),this.rig.addTrauma(.9),this.cinematics.onBossDeath(i-this.player.x,n-this.player.z),this.postfx?.pulseBlur(.7),this.postfx?.pulseAberration(1),this.flashScreen(.4);const s=bM();s&&this.hud.quote(Vu(),s,3200),Re.sfx("levelup"),Re.playBgm("battle"),this.kills++,this.siege.captureNow(i,n),t.kill(e)}onGateBreached(e){if(this.world.update(),this.gateBreachFx.burst(e.x,e.z),this.effects.spawnRing(e.x,e.z,11,1.15,.36,.13,.62),this.effects.spawnRing(e.x,e.z,6.5,.95,.62,.24,.4),this.particles.burst(e.x,e.z,1.8,.7,.25,72,9),this.hitstop(90,.03),this.rig.addTrauma(.78),this.rig.punchFov(3),this.flashScreen(.16),Re.sfx("explosion"),e.key.startsWith("castle-")){this.siege.notifyGateBreach(e.key),this.hud.banner(`${we()==="en"?"Gate Breached":"성문 돌파"} 城門突破`,"#ffb05a",52,1600,1);return}this.hud.banner(`${ie("bannerHulaoBreak")} 虎牢關破城`,"#ffb05a",58,1900),this.gateRushTimer=.8,this.gateRushX=e.x,this.gateRushZ=e.z,this.gateRushHorizontal=e.horizontal}onCollect=e=>{const t=this.combo.fever?1.5:1;for(this.xp+=e*this.player.stats.xpMul*t,Re.sfx("gem"),this.particles.emit(this.player.x,1,this.player.z,0,1.5,0,.4,.8,2.2,.7,.4,3,.9);this.xp>=this.nextXp;)this.xp-=this.nextXp,this.level++,this.nextXp=Or(this.level),this.pendingLevels++,this.hud.punchLevel(),Re.sfx("levelup")};onTreasure=e=>{this.effects.spawnRing(this.player.x,this.player.z,5,2.6,2,.8,.5);const t=this.tryEvolve();if(t){this.hud.banner(`${ie("bannerEvolve")} ${t}`,"#ff9a3c",56,1800),Re.sfx("evolve"),this.refreshLoadout();return}if(e){const i=du(()=>ct.next(),this.masterworkIds,3);if(i.length>0){this.player.heal(this.player.maxHp*.5),this.curChoices=i.map(s=>({kind:"masterwork",id:s.id})),this.state="levelup";const n=this.curChoices.map(s=>this.cardView(s));this.levelup.open(n,Math.floor(this.gold),!1,s=>this.pickCard(s),()=>{});return}}for(this.player.heal(this.player.maxHp*(e?.6:.35)),this.addGold(Math.round((e?200:80)*this.player.stats.goldMul)),this.xp+=(e?this.nextXp*1.5:this.nextXp*.6)*this.player.stats.xpMul,this.hud.banner(ie(e?"bannerTreasure":"bannerReward"),"#9affc0",48,1400);this.xp>=this.nextXp;)this.xp-=this.nextXp,this.level++,this.nextXp=Or(this.level),this.pendingLevels++};tryEvolve(){for(const e of Dh){const t=this.weapons.find(n=>n.id===e.from);if(!t||t.level<8||(this.passives[e.passive]??0)<1||this.weapons.some(n=>n.id===e.to))continue;const i=this.weapons.indexOf(t);return this.weapons[i]=Sa(e.to),this.projectiles.clearOrbits(),this.effects.spawnRing(this.player.x,this.player.z,9,2.8,1.6,2.4,.8),wt[e.to].name}return null}showNextLevelUp(){if(this.pendingLevels<=0){this.state="play";return}this.pendingLevels--,this.state="levelup",this.rerolledThisLevel=!1,this.openCards()}openCards(){this.curChoices=this.buildChoices();const e=this.curChoices.map(t=>this.cardView(t));this.levelup.open(e,Math.floor(this.gold),!this.rerolledThisLevel&&this.gold>=Il,t=>this.pickCard(t),()=>this.reroll())}reroll(){this.rerolledThisLevel||this.gold<Il||(this.gold-=Il,this.rerolledThisLevel=!0,this.openCards())}buildChoices(){const e=[];for(const i of this.weapons)i.level<8&&wt[i.id]&&!wt[i.id].evolution&&e.push({kind:"upWeapon",id:i.id});for(const i in this.passives){const n=Oi[i];n&&this.passives[i]<n.maxLevel&&e.push({kind:"upPassive",id:i})}if(this.weapons.length<Nr)for(const i in wt)wt[i].evolution||this.availableWeapons&&!this.availableWeapons.has(i)||this.weapons.some(s=>s.id===i)||e.push({kind:"newWeapon",id:i});if(Object.keys(this.passives).length<Pl)for(const i of Gf)this.passives[i.id]===void 0&&e.push({kind:"newPassive",id:i.id});for(let i=e.length-1;i>0;i--){const n=ct.int(i+1),s=e[i];e[i]=e[n],e[n]=s}const t=e.slice(0,3);for(;t.length<3;){const i=["heal","gold","xp"][t.length%3];t.push({kind:"reward",id:i})}if(this.relicIds.length<DM&&(this.forceRelicNext||ct.next()<UM)){const i=p1(()=>ct.next(),this.relicIds);i&&(t[ct.int(t.length)]={kind:"relic",id:i.id}),this.forceRelicNext=!1}return t}cardView(e){const t=we()==="en";if(e.kind==="newWeapon"){const s=wt[e.id];return{title:_t("weapon",e.id,s.name),hanja:s.hanja,desc:t?ka[e.id]??s.desc:s.desc,tag:`${ie("catWeapon")} · ${ie("tagNew")}`,accent:"#e8c667",symbol:s.hanja[0],badge:ie("tagNew"),count:`${t?"Weapons":"무기"} ${this.weapons.length}/${Nr}`}}if(e.kind==="upWeapon"){const s=wt[e.id],r=this.weapons.find(h=>h.id===e.id),o=r.level+1>=8;let l;if(o){const h=Dh.find(c=>c.from===e.id);if(h&&!this.weapons.some(c=>c.id===h.to)){const c=_t("passive",h.passive,Oi[h.passive]?.name??h.passive);l=(this.passives[h.passive]??0)>=1?t?"Evolution ready · elite chest 進化":"進化 준비 완료 · 정예 보물상자":t?`Evolve soon · needs ${c} 進化`:`進化 임박 · ${c} 필요`}}return{title:_t("weapon",e.id,s.name),hanja:s.hanja,desc:t?ka[e.id]??s.desc:s.desc,tag:`${ie("catWeapon")} ${ie(o?"tagMax":"tagUp")} Lv${r.level}→${r.level+1}`,accent:"#e8a94a",symbol:s.hanja[0],badge:ie(o?"tagMax":"tagUp"),rare:o,count:`${t?"Weapons":"무기"} ${this.weapons.length}/${Nr}`,evoHint:l}}if(e.kind==="newPassive"){const s=Oi[e.id];return{title:_t("passive",e.id,s.name),hanja:s.hanja,desc:s.desc(1),tag:`${ie("catPassive")} · ${ie("tagNew")}`,accent:"#7ec8ff",symbol:s.hanja[0],badge:ie("tagNew"),rare:s.rare,count:`${t?"Passives":"패시브"} ${Object.keys(this.passives).length}/${Pl}`}}if(e.kind==="upPassive"){const s=Oi[e.id],r=this.passives[e.id];return{title:_t("passive",e.id,s.name),hanja:s.hanja,desc:s.desc(r+1),tag:`${ie("catPassive")} ${ie("tagUp")} Lv${r}→${r+1}`,accent:"#7ec8ff",symbol:s.hanja[0],badge:ie("tagUp"),rare:s.rare,count:`${t?"Passives":"패시브"} ${Object.keys(this.passives).length}/${Pl}`}}if(e.kind==="relic"){const s=mc[e.id];return{title:u1(s),hanja:s.hanja,desc:f1(s),tag:ie("catRelic"),accent:"#c77dff",symbol:s.hanja[0],badge:ie("tagCurse"),rare:!0}}if(e.kind==="masterwork"){const s=lo[e.id];return{title:Wf(s),hanja:s.hanja,desc:Xf(s),tag:t?"Masterwork 名器":"명기 名器",accent:"#f5c542",symbol:s.hanja[0],badge:t?"RARE":"名器",rare:!0}}const n={heal:{name:ie("rewardHealName"),hanja:"再整備",desc:ie("rewardHealDesc"),symbol:"治"},gold:{name:ie("rewardGoldName"),hanja:"軍資金",desc:ie("rewardGoldDesc"),symbol:"金"},xp:{name:ie("rewardXpName"),hanja:"兵法修鍊",desc:ie("rewardXpDesc"),symbol:"書"}}[e.id];return{title:n.name,hanja:n.hanja,desc:n.desc,tag:ie("tagReward"),accent:"#9affc0",symbol:n.symbol,badge:ie("tagReward")}}pickCard(e){if(!this.levelup.active&&this.state!=="levelup")return;const t=this.curChoices[e];t&&(Re.sfx("cardSelect"),this.applyChoice(t),this.levelup.close(),this.refreshLoadout(),this.showNextLevelUp())}applyChoice(e){if(e.kind==="newWeapon")this.weapons.push(Sa(e.id));else if(e.kind==="upWeapon"){const t=this.weapons.find(i=>i.id===e.id);t&&(t.level=Math.min(8,t.level+1))}else if(e.kind==="newPassive")this.passives[e.id]=1,this.player.recomputeStats(this.passives);else if(e.kind==="upPassive")this.passives[e.id]++,this.player.recomputeStats(this.passives);else if(e.kind==="relic")this.relicIds.push(e.id),this.player.addRelic(e.id),Re.sfx("relic");else if(e.kind==="masterwork"){this.masterworkIds.push(e.id),this.player.addMasterwork(e.id),Re.sfx("relic");const t=lo[e.id].hanja[0];this.effects.spawnCrest(this.player.x,this.player.z,t,1.3,1.02,.34,2),this.effects.spawnRing(this.player.x,this.player.z,9,1.3,1.02,.34,.7),this.effects.spawnLight&&this.effects.spawnLight(this.player.x,this.player.z,1.6,1.2,.4,7,.5)}else e.id==="heal"?this.player.heal(this.player.maxHp*.5):e.id==="gold"?this.gold+=200:this.xp+=this.nextXp*.9*this.player.stats.xpMul}onPlayerDeath(){if(this.reviveAvailable&&!this.reviveUsed){this.reviveUsed=!0,this.player.revive(.5,2),this.effects.spawnRing(this.player.x,this.player.z,24,2.4,1.8,.8,.7),this.shockwave(this.player.x,this.player.z,26,600*this.player.stats.damageMul),this.rig.addTrauma(.7),this.flashScreen(.45),this.hud.banner("起死回生","#9affc0",60,1600),Re.sfx("revive");return}this.finish(this.victoryAchieved)}resumeEndless(){this.endless||(this.endless=!0,this.ended=!1,this.victoryAchieved=!0,this.state="play",this.hud.setVisible(!0),this.hud.banner(`${ie("bannerEndless")} 無限`,"#e85c4a",56,1600),Re.playBgm("battle"))}shockwave(e,t,i,n){this.postfx?.pulseAberration(.7);const s=this.enemies,r=this.hash.query(e,t,i,this.scratch);for(let o=0;o<r;o++){const l=this.scratch[o];if(s.alive[l]===0)continue;const h=s.x[l]-e,c=s.z[l]-t,d=h*h+c*c;if(d>i*i)continue;const u=Math.sqrt(d)||1;s.push(l,h/u,c/u,10),s.damageAt(l,n)&&this.handleKill(l)}}finish(e){if(this.ended)return;this.ended=!0,e&&!this.endless&&this.gameTime>=Ll&&(this.victoryAchieved=!0),this.hud.setFever(!1),this.state=e?"victory":"dead",e?this.rig.addTrauma(.5):(this.damageVigLevel=0,this.damageFlash.animate([{opacity:.85},{opacity:0}],{duration:600,easing:"ease-out"}),this.rig.addTrauma(.8)),this.hud.setVisible(!1);const t=Math.floor(this.maxCombo),i={victory:e,heroId:this.hero.id,time:this.gameTime,kills:this.kills,maxCombo:this.maxCombo,level:this.level,goldEarned:Math.floor(this.goldEarned)+t,comboBonus:t,weapons:this.weapons.map(n=>({id:n.id,level:n.level})),passives:Object.keys(this.passives).map(n=>({id:n,level:this.passives[n]})),bosses:Array.from(this.bossesKilled),masterworks:[...this.masterworkIds],endless:this.endless,canContinue:e&&!this.endless&&this.gameTime>=Ll,luoyang:this.siegeEvents.defended>0?"held":this.siegeEvents.lost>0?"fallen":this.siegeEvents.capture>0?"captured":"none"};this.hooks.onEnd(i)}testSetTime(e){this.gameTime=e}testGiveWeapon(e){if(!wt[e])return;const t=this.weapons.find(i=>i.id===e);if(t)t.level=8;else{this.weapons.length>=Nr&&this.weapons.pop();const i=Sa(e);i.level=8,this.weapons.push(i)}this.refreshLoadout()}testGivePassive(e,t=5){Oi[e]&&(this.passives[e]=Math.min(Oi[e].maxLevel,t),this.player.recomputeStats(this.passives),this.refreshLoadout())}testKillPlayer(){this.player.invuln=0,this.player.musouInvuln=!1,this.reviveAvailable=!1,this.player.takeDamage(999999)}testDamagePlayer(e){this.onPlayerHit(e)}testKillBoss(){if(!this.boss.active||this.boss.idx<0)return;const e=this.boss.idx;this.enemies.damageAt(e,1e9)&&this.handleKill(e)}testMusouFx(){const e=this.player.x,t=this.player.z;this.effects.spawnCrest(e,t,"龍",.5,1.4,2.4,6),this.effects.spawnBaguaSigil(e+13,t,6),this.effects.spawnTripleShock(e-13,t,5,1.6,1,.4),this.effects.spawnFireWall(e,t+11,1,0,9,1.8,3),this.effects.spawnFlameTrail(e+7,t-9,.4,1.9,1.1);for(let i=0;i<6;i++)this.effects.spawnMeteorArrow(e-12+i*4.5,t-13,1.7,1.4,.6,.55+i*.07);this.lightField.spawn(e,1,t,.5,1.2,2.2,12,2,!0)}testForceLevel(){this.xp+=this.nextXp,this.onCollect(0)}testShrineBuff(e="attack",t=30){this.player.applyBuff(e,t)}testFlashBurst(e=6,t=.4){for(let i=0;i<e;i++)this.flashScreen(t)}testFillMusou(){this.musou.gauge=100}testActivateMusou(){this.musou.gauge=100,this.musou.activate()}testAddGold(e){this.gold+=e}testSpawnProjectileShowcase(){const e=this.player.x-4,t=this.player.z,i=[[Js,-3.2,2,1.5,.55,2,1.5,.7],[xc,-1.6,1.6,1.25,.95,1.7,1.7,2.1],[Hs,0,1.3,3,2.2,.7,2.4,1.2],[Ca,1.8,1,1.35,1.35,1.6,1.8,2.3],[Rn,3.8,2.4,4.5,1.7,2,1.4,.9]];for(const[n,s,r,o,l,h,c,d]of i)this.projectiles.spawn(e,t+s,1,0,r,0,.2,99,4.5,n,h,c,d,o,l,!1,0,n===Rn);this.testSpawnEnemyProjectileShowcase()}testSpawnEnemyProjectileShowcase(){const e=this.player.x-2.4,t=this.player.z,i=[[Ni,6.2,1.8,!1],[gc,3.8,1.3,!0],[ho,1.5,1.45,!1],[vc,-.8,1.2,!0],[Xs,-3.6,1.7,!1],[pn,-6.2,1.05,!1]];for(const[n,s,r,o]of i)this.enemyProj.spawn(e,t+s,1,0,r,0,o,n)}testSpawnBoss(e){this.boss.active||this.boss.spawn(e,this.gameTime/60,this.ctx,this.player.x,this.player.z)}testTreasure(e=!1){this.onTreasure(e)}testSetBossFlags(e,t,i){this.bossFlags={b3:e,b6:t,b9:i}}testTriggerEvent(e){e==="rush"?this.events.forceRush():e==="meteor"?this.events.forceMeteor():e==="cart"&&this.events.forceCart(this.gameTime)}testSpawnPattern(e){this.spawner.forcePattern(e,this.gameTime,this.player.x,this.player.z)}testShowWorldObjects(){this.objects.testShowcase(this.player.x,this.player.z)}testSetPlayerPosition(e,t){this.map.projectWalkable(e,t,this.player.radius,this.moveOut),this.player.setPosition(this.moveOut.x,this.moveOut.z),this.map.update(this.player.x,this.player.z,0),this.world.update()}testSetInvulnerable(e=60){this.player.invuln=Math.max(this.player.invuln,e)}testTriggerHulao(){this.map.triggerHulao(this.player.x,this.player.z)}testFlipBanners(e){st.allied=e,st.flipX=_e.cx,st.flipZ=_e.cz,st.flipVersion++}testVolley(){const e=this.player.x,t=this.player.z,i=[];for(let n=0;n<6;n++){const s=n/6*Math.PI*2;i.push({x:e+Math.cos(s)*5,z:t+Math.sin(s)*5,t:.9})}this.arrowRain.volley(i)}testPrimeGate(){this.map.hulaoOn||this.map.triggerHulao(this.player.x,this.player.z),this.map.primeGate()}testBreachGate(){this.map.hulaoOn||this.map.triggerHulao(this.player.x,this.player.z),this.map.primeGate();const e=this.map.gates.find(i=>i.key==="hulao");if(!e)return;const t=this.map.recordKillAt(e.x,e.z);t&&this.onGateBreached(t)}testSiegeBreach(e="castle-s"){const t=this.map.gates.find(n=>n.key===e);if(!t)return;const i=this.map.breachNear(t.x,t.z,.5);i&&this.onGateBreached(i)}testSiegeForceLord(){this.siege.testForceLord()}testSiegeForceCounter(){this.siege.testForceCounter()}testSiegeAddFall(e){this.siege.testAddFall(e)}testSiegeForceDefend(){this.siege.testForceDefend()}testSetObjective(e){this.hud.setObjective(e)}testDamageGate(e,t){const i=this.map.damageGate(e,t);i&&this.onGateBreached(i)}testForceRelic(){this.forceRelicNext=!0,this.testForceLevel()}testEnterEndless(){this.victoryAchieved=!0,this.endless=!0,this.gameTime<601&&(this.gameTime=601)}get testStats(){return{time:this.gameTime,musouGauge:this.musou.gauge,kills:this.kills,level:this.level,gold:Math.floor(this.gold),goldEarned:Math.floor(this.goldEarned),maxCombo:this.maxCombo,hero:this.hero.id,alive:this.enemies.aliveCount,worldProps:this.world.visibleProps,worldObjects:this.objects.visibleCount,map:{walls:this.map.walls.length,roads:this.map.roads.length,landmarks:this.map.landmarks.length,landmarkVisible:this.world.landmarkVisible,colliders:this.map.activeColliderCount,collisions:this.map.collisionCount,gateKills:this.map.gateKills,gateBreached:this.map.isGateBreached(),gateHp:{s:this.map.gateHp01("castle-s"),e:this.map.gateHp01("castle-e"),w:this.map.gateHp01("castle-w")},breaches:this.map.breachCount,playerInsideWall:this.map.circleBlocked(this.player.x,this.player.z,this.player.radius*.95),playerWallHits:this.playerWallHits,enemiesInsideWall:this.enemies.countInsideWalls(this.map),debris:this.gateBreachFx.activeCount,playerX:this.player.x,playerZ:this.player.z},enemyProjectiles:this.enemyProj.activeCount,enemyProjectileKinds:this.enemyProj.kindCounts,patterns:{charge:this.enemies.chargeStarts,volley:this.enemies.volleyStarts,caster:this.enemies.casterStarts},autoAim:{target:this.ctx.aimTarget,x:this.ctx.aimX,z:this.ctx.aimZ,lastWeapon:this.lastAttackWeapon,lastX:this.lastAttackX,lastZ:this.lastAttackZ,count:this.lastAttackCount},weapons:this.weapons.map(e=>`${e.id}:${e.level}`),passives:{...this.passives},musou:this.musou.gauge,bossActive:this.boss.active,bossHp01:this.boss.hpFrac(this.ctx),bossX:this.boss.idx>=0?this.enemies.x[this.boss.idx]:0,bossZ:this.boss.idx>=0?this.enemies.z[this.boss.idx]:0,companion:this.companion.active?this.companion.definition.id:null,companionAttacks:this.companion.attacks,companionKills:this.companion.kills+this.companion2.kills,relics:[...this.relicIds],endless:this.endless,fever:this.combo.fever,siege:{state:this.siege.siegeState,fallGauge:this.siege.fallGaugeValue,allied:st.allied,events:{...this.siegeEvents}},state:this.state}}}const Qf=[{id:"attack",name:"무예 단련",hanja:"武藝鍛鍊",maxLevel:5,desc:a=>we()==="en"?`Attack +${a*8}%`:`공격력 +${a*8}%`},{id:"health",name:"철갑 강화",hanja:"鐵甲强化",maxLevel:5,desc:a=>we()==="en"?`Max HP +${a*10}%`:`최대 체력 +${a*10}%`},{id:"speed",name:"준마 훈련",hanja:"駿馬訓鍊",maxLevel:5,desc:a=>we()==="en"?`Move speed +${a*5}%`:`이동속도 +${a*5}%`},{id:"pickup",name:"집혼 향낭",hanja:"集魂香囊",maxLevel:5,desc:a=>we()==="en"?`Pickup radius +${a*12}%`:`픽업 반경 +${a*12}%`},{id:"cooldown",name:"전술 통달",hanja:"戰術通達",maxLevel:5,desc:a=>we()==="en"?`Cooldown -${(100*(1-Math.pow(.96,a))).toFixed(0)}%`:`쿨다운 -${(100*(1-Math.pow(.96,a))).toFixed(0)}%`},{id:"startLevel",name:"숙련 출진",hanja:"熟練出陣",maxLevel:5,desc:a=>we()==="en"?a>0?`Start at level ${1+a}`:"Start at level 1":a>0?`${a}레벨 상태로 시작`:"기본 1레벨로 시작"},{id:"revive",name:"기사회생",hanja:"起死回生",maxLevel:1,desc:a=>we()==="en"?a>0?"Revive once per run (HP 50%, 2s invuln, shockwave)":"No revival on death":a>0?"런당 1회 부활 (HP 50%·무적 2초·충격파)":"사망 시 부활 없음"}],ep={};for(const a of Qf)ep[a.id]=a;function tp(a,e){return e>=a.maxLevel?-1:200*Math.pow(2,e)}const fo=5e3;function kM(a){const e=t=>a[t]??0;return{damageMul:1+.08*e("attack"),maxHpMul:1+.1*e("health"),speedMul:1+.05*e("speed"),pickupMul:1+.12*e("pickup"),cooldownMul:Math.pow(.96,e("cooldown")),startLevel:e("startLevel"),revive:e("revive")>0}}function zM(a){let e=0;for(const t of a)wt[t.id]?.evolution&&e++;return e}const po=[{id:"first_win",name:"천하의 주인",hanja:"天下之主",desc:"첫 승리 (10:00 생존)",priority:60,check:a=>a.victory},{id:"slay_lvbu",name:"비장군 참살",hanja:"飛將軍斬殺",desc:"최종보스 여포 처치",priority:80,check:a=>a.bosses.includes("lvbu")},{id:"thousand_cut",name:"천인참",hanja:"千人斬",desc:"한 런에서 1,000명 처치",priority:55,check:a=>a.kills>=1e3},{id:"five_hundred_cut",name:"오백인참",hanja:"五百人斬",desc:"한 런에서 500명 처치",priority:35,check:a=>a.kills>=500},{id:"invincible",name:"금강불괴",hanja:"金剛不壞",desc:"3분간 무피격 유지",priority:65,check:a=>(a.noHitTime??0)>=180},{id:"master_smith",name:"전설의 대장장이",hanja:"傳說鍛冶",desc:"한 런에서 진화 무기 3종 이상",priority:70,check:a=>zM(a.weapons)>=3},{id:"combo_master",name:"연격의 화신",hanja:"連擊化身",desc:"최대 콤보 500 돌파",priority:50,check:a=>a.maxCombo>=500},{id:"veteran",name:"백전노장",hanja:"百戰老將",desc:"누적 10,000명 처치",priority:45,check:a=>(a.totalKills??0)>=1e4},{id:"all_bosses",name:"군웅할거의 종결자",hanja:"群雄割據終結",desc:"한 런에서 세 보스 모두 처치",priority:75,check:a=>a.bosses.includes("yuanshao")&&a.bosses.includes("dongzhuo")&&a.bosses.includes("lvbu")},{id:"high_level",name:"병법의 대가",hanja:"兵法大家",desc:"레벨 40 도달",priority:40,check:a=>a.level>=40},{id:"endless_walker",name:"무명의 사신",hanja:"無名死神",desc:"무한 모드에서 15분 생존",priority:85,check:a=>!!a.endless&&a.time>=900},{id:"survivor",name:"역전의 용사",hanja:"歷戰勇士",desc:"5분 이상 생존",priority:20,check:a=>a.time>=300}],Mc={};for(const a of po)Mc[a.id]=a;function NM(a){const e=[];for(const t of po)t.check(a)&&e.push(t.id);return e}function OM(a){let e=null;for(const i of a){const n=Mc[i];n&&(!e||n.priority>e.priority)&&(e=n)}const t=we()==="en";return e?{name:t?Kr[e.id]?.name??e.name:e.name,hanja:e.hanja}:{name:t?"Nameless General":"무명의 장수",hanja:"無名將"}}const BM=[{id:"luoyang_held",ko:"낙양을 지킨 자",en:"Keeper of Luoyang",rarity:3,cond:a=>a.luoyang==="held"},{id:"ilgidangcheon",ko:"일기당천 一騎當千",en:"One Rider, a Thousand Foes",rarity:3,cond:a=>a.kills>=1e3},{id:"endless_field",ko:"끝나지 않는 전장에 남은 자",en:"One Who Remained on the Endless Field",rarity:3,cond:a=>a.endless},{id:"wuchao_fire",ko:"오소의 밤불을 든 자",en:"Bearer of the Wuchao Night-Fire",rarity:3,cond:a=>a.bosses.length>=3&&a.maxCombo>=300},{id:"first_unify",ko:"처음으로 천하를 통일한 자",en:"First to Unify the Realm",rarity:3,cond:(a,e)=>a.victory&&e.totalWins<=1},{id:"gate_breaker",ko:"성문을 여는 자",en:"Breaker of the Gate",rarity:2,cond:a=>a.luoyang==="captured"||a.luoyang==="held"},{id:"fallen_gate",ko:"무너진 성문에서 살아남은 자",en:"Survivor of the Fallen Gate",rarity:2,cond:a=>a.luoyang==="fallen"},{id:"three_champions",ko:"세 챔피언을 꺾은 자",en:"Feller of Three Champions",rarity:2,cond:a=>a.bosses.length>=3},{id:"combo_sweep",ko:"한 호흡에 벤 자",en:"One Breath, One Sweep",rarity:2,cond:a=>a.maxCombo>=300},{id:"masterworks_bearer",ko:"명기를 갖춘 자",en:"Bearer of Masterworks",rarity:2,cond:a=>a.masterworks.length>=3},{id:"yangren_gate",ko:"양인의 잿문을 연 자",en:"One Who Opened the Ash-Gate of Yangren",rarity:2,cond:a=>a.bosses.includes("dongzhuo")},{id:"baima_banner",ko:"백마 둑의 큰 깃발을 붙든 자",en:"Holder of the Great Banner at Baima",rarity:2,cond:a=>a.bosses.includes("yuanshao")},{id:"unified",ko:"살아 돌아온 머릿수를 센 자",en:"One Who Counted the Living Home",rarity:1,cond:a=>a.victory},{id:"ash_road",ko:"잿길을 헤치고 나아간 자",en:"One Who Cut Through the Ash-Road",rarity:1,cond:a=>a.kills>=500},{id:"one_masterwork",ko:"명기 하나를 얻은 자",en:"Finder of a Masterwork",rarity:1,cond:a=>a.masterworks.length>=1},{id:"altar_count",ko:"제단 아래 사람 수를 센 자",en:"One Who Counted Heads Beneath the Altar",rarity:1,cond:()=>!0}];function ip(a,e){let t=null;for(const i of BM)i.cond(a,e)&&(!t||i.rarity>t.rarity)&&(t=i);return t}function HM(a){return we()==="en"?a.en:a.ko}const GM=["zhaoyun","guanyu","sunshangxiang","zhangfei","zhugeliang","huangzhong","lvbu"];function Sc(a,e){switch(a){case"zhaoyun":case"guanyu":case"sunshangxiang":return!0;case"zhangfei":return e.totalKills>=100;case"huangzhong":return e.best.time>=180;case"zhugeliang":return e.bosses.includes("dongzhuo");case"lvbu":return e.lvbuUnlocked;default:return!1}}function $u(a){return GM.filter(e=>Sc(e,a))}function VM(a,e){const t=we()==="en";switch(a){case"zhangfei":return t?`Total kills ${Math.min(100,Math.floor(e.totalKills))}/100`:`누적 처치 ${Math.min(100,Math.floor(e.totalKills))}/100`;case"huangzhong":{const i=Math.min(180,Math.floor(e.best.time)),n=`${Math.floor(i/60)}:${String(i%60).padStart(2,"0")}`;return t?`Best survival ${n} / 3:00`:`최고 생존 ${n} / 3:00`}case"zhugeliang":return t?"Defeat Dong Zhuo 董卓":"동탁 董卓 토벌";case"lvbu":return t?"Unlock at Camp (5000⟡)":"본진에서 5000⟡ 해금";default:return""}}const Ci=1200,ji=630,WM="midagedev.github.io/threesur",ju="https://midagedev.github.io/threesur/";function XM(a){const e=Math.floor(a/60),t=Math.floor(a%60);return`${e.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`}function qM(a,e){const t=document.createElement("canvas");t.width=Ci,t.height=ji;const i=t.getContext("2d"),n=mn[a.heroId],s=i.createLinearGradient(0,0,Ci,ji);s.addColorStop(0,"#12131b"),s.addColorStop(1,"#05060a"),i.fillStyle=s,i.fillRect(0,0,Ci,ji);const r=i.createRadialGradient(Ci/2,ji/2,200,Ci/2,ji/2,760);r.addColorStop(0,"rgba(0,0,0,0)"),r.addColorStop(1,"rgba(0,0,0,0.55)"),i.fillStyle=r,i.fillRect(0,0,Ci,ji),i.strokeStyle="rgba(120,140,180,0.05)",i.lineWidth=1;for(let _=0;_<=Ci;_+=60)i.beginPath(),i.moveTo(_,0),i.lineTo(_,ji),i.stroke();i.strokeStyle="rgba(232,198,103,0.7)",i.lineWidth=2,i.strokeRect(22,22,Ci-44,ji-44),i.strokeStyle="rgba(232,198,103,0.25)",i.lineWidth=1,i.strokeRect(30,30,Ci-60,ji-60);const o='"Nanum Myeongjo","Times New Roman",serif';i.textAlign="left",i.textBaseline="alphabetic",i.fillStyle="#f0e4c0",i.font=`bold 46px ${o}`,i.fillText(we()==="en"?"ILGIDANGCHEON":"일기당천",60,96),i.fillStyle="#e8c667",i.font=`30px ${o}`,i.fillText("一騎當千",270,94);const l=70,h=150,c=210,d=280;i.save(),i.fillStyle="rgba(0,0,0,0.35)",i.fillRect(l,h,c,d),i.strokeStyle="rgba(232,198,103,0.5)",i.lineWidth=2,i.strokeRect(l,h,c,d);const u=e?.sgrade.texture.image;if(u&&n){const _=n.charIndex*4*48;i.imageSmoothingEnabled=!1;const E=Math.min(c/48,d/64)*.82,x=48*E,y=64*E;i.drawImage(u,_,0,48,64,l+(c-x)/2,h+(d-y)/2-6,x,y)}i.restore(),i.textAlign="center",i.fillStyle="#f0e4c0",i.font=`28px ${o}`,i.fillText(n?_t("hero",a.heroId,n.name):we()==="en"?"General":"장수",l+c/2,h+d+40),i.fillStyle="#e8c667",i.font=`20px ${o}`,i.fillText(n?n.hanja:"",l+c/2,h+d+68);const f=340;i.textAlign="left",i.fillStyle="#8a8f9c",i.font=`26px ${o}`,i.fillText(we()==="en"?"KILLS":"처치",f,190);const m=a.kills.toLocaleString();i.fillStyle="#e85c4a",i.font=`bold 130px ${o}`,i.fillText(m,f,300);const v=i.measureText(m).width;i.fillStyle="#e8c667",i.font=`56px ${o}`,i.fillText("斬",f+v+24,300);const g=366,p=[[we()==="en"?"Survived":"생존",XM(a.time)],[we()==="en"?"Max Combo":"최대 콤보",`${a.maxCombo.toLocaleString()}`],[we()==="en"?"Level":"레벨",`Lv ${a.level}`],[we()==="en"?"Gold":"획득 골드",`${a.goldEarned.toLocaleString()}`]];let M=f;i.textBaseline="alphabetic";for(const[_,E]of p){i.textAlign="left",i.fillStyle="#8a8f9c",i.font=`20px ${o}`,i.fillText(_,M,g),i.fillStyle="#f0e4c0",i.font=`bold 34px ${o}`,i.fillText(E,M,g+40);const x=i.measureText(E).width;M+=Math.max(150,x+70)}if(a.title){const _=f,E=430,x=`${a.title.name} ${a.title.hanja}`;i.font=`24px ${o}`;const y=i.measureText(x).width+44;i.fillStyle="rgba(232,198,103,0.14)",Br(i,_,E,y,44,22),i.fill(),i.strokeStyle="rgba(232,198,103,0.6)",i.lineWidth=1.5,Br(i,_,E,y,44,22),i.stroke(),i.fillStyle="#e8c667",i.textAlign="left",i.fillText(x,_+22,E+30)}const T=502;i.font=`20px ${o}`,i.textAlign="left",i.fillStyle="#8a8f9c",i.fillText(we()==="en"?"TACTICS":"전법",f,T-6);let w=f;const A=T+8;for(const _ of a.weapons.slice(0,6)){const E=wt[_.id];if(!E)continue;const x=E.hanja;i.font=`22px ${o}`;const y=i.measureText(x).width+28,R=E.evolution;if(i.fillStyle=R?"rgba(255,154,60,0.16)":"rgba(120,150,200,0.12)",Br(i,w,A,y,40,8),i.fill(),i.strokeStyle=R?"rgba(255,154,60,0.7)":"rgba(160,180,220,0.5)",i.lineWidth=1.5,Br(i,w,A,y,40,8),i.stroke(),i.fillStyle=R?"#ffb469":"#cdd7ee",i.fillText(x,w+14,A+28),w+=y+12,w>Ci-70)break}return $M(i,Ci-150,150,a.victory),i.textAlign="right",i.fillStyle="#8a8f9c",i.font=`22px ${o}`,i.fillText(WM,Ci-60,ji-48),t}function Br(a,e,t,i,n,s){a.beginPath(),a.moveTo(e+s,t),a.arcTo(e+i,t,e+i,t+n,s),a.arcTo(e+i,t+n,e,t+n,s),a.arcTo(e,t+n,e,t,s),a.arcTo(e,t,e+i,t,s),a.closePath()}function $M(a,e,t,i){a.save(),a.translate(e,t),a.rotate(-.12);const s=i?"#c0362b":"#3a3f4c";a.strokeStyle=s,a.lineWidth=5,a.beginPath(),a.rect(-78,-78,156,156),a.stroke(),a.fillStyle=i?"rgba(192,54,43,0.12)":"rgba(58,63,76,0.15)",a.fillRect(-78,-78,156,156),a.fillStyle=s,a.textAlign="center",a.textBaseline="middle",a.font='bold 40px "Nanum Myeongjo","Times New Roman",serif',i?(a.fillText("天下",0,-26),a.fillText("統一",0,26)):(a.font='bold 62px "Nanum Myeongjo","Times New Roman",serif',a.fillText("戰死",0,0)),a.restore()}function zh(a){return new Promise((e,t)=>{a.toBlob(i=>i?e(i):t(new Error("blob 생성 실패")),"image/png")})}function jM(a){const e=mn[a.heroId];if(we()==="en"){const n=e?_t("hero",a.heroId,e.name):"a general",s=a.victory?"unified the realm":`slew ${a.kills.toLocaleString()} foes`;return`As ${n} in Ilgidangcheon, I ${s}! ⚔️ ${ju}`}const t=e?e.name:"장수",i=a.victory?"천하를 통일했다":`${a.kills.toLocaleString()}명을 베었다`;return`일기당천에서 ${t}으로 ${i}! ⚔️ ${ju}`}async function ZM(a,e){let t;try{t=await zh(a)}catch{return"failed"}const i=new File([t],"ilgidangcheon.png",{type:"image/png"}),n=navigator;if(n.share&&n.canShare&&n.canShare({files:[i]}))try{return await n.share({files:[i],text:e,title:"일기당천 一騎當千"}),"shared"}catch{}try{const s=window.ClipboardItem;if(s&&navigator.clipboard&&"write"in navigator.clipboard)return await navigator.clipboard.write([new s({"image/png":t})]),"copied"}catch{}try{const s=URL.createObjectURL(t),r=document.createElement("a");return r.href=s,r.download="ilgidangcheon.png",document.body.appendChild(r),r.click(),r.remove(),setTimeout(()=>URL.revokeObjectURL(s),4e3),"downloaded"}catch{return"failed"}}function YM(a,e){const t=qM(a,e),i=document.createElement("div");i.style.cssText=["position:fixed","inset:0","z-index:60","display:flex","flex-direction:column","align-items:center","justify-content:center","gap:18px","background:rgba(4,5,9,0.88)",'font-family:"Nanum Myeongjo","Times New Roman",serif'].join(";");const n=document.createElement("img");n.src=t.toDataURL("image/png"),n.style.cssText="width:min(90vw,720px);border-radius:8px;box-shadow:0 8px 40px rgba(0,0,0,0.6);",i.appendChild(n);const s=document.createElement("div");s.style.cssText="color:#e8c667;font-size:15px;height:18px;letter-spacing:1px;",i.appendChild(s);const r=d=>{s.textContent=d,s.animate([{opacity:1},{opacity:1,offset:.7},{opacity:0}],{duration:2200})},o=document.createElement("div");o.style.cssText="display:flex;gap:12px;flex-wrap:wrap;justify-content:center;";const l=(d,u,f=!1)=>{const m=document.createElement("button");return m.textContent=d,m.style.cssText=["padding:11px 22px","border-radius:8px","cursor:pointer","font-size:15px","letter-spacing:1px","font-family:inherit",f?"background:linear-gradient(180deg,#e8c667,#a8791f);color:#161006;border:none;":"background:transparent;color:#e8c667;border:1px solid #6b5a2e;"].join(";"),m.addEventListener("click",u),o.appendChild(m),m},h=we()==="en",c=jM(a);l(h?"Share":"전과 공유",async()=>{const d=await ZM(t,c);r(h?d==="shared"?"Shared":d==="copied"?"Image copied to clipboard":d==="downloaded"?"Image saved":"Share failed":d==="shared"?"공유했습니다":d==="copied"?"이미지를 클립보드에 복사했습니다":d==="downloaded"?"이미지를 저장했습니다":"공유에 실패했습니다")},!0),l(h?"Copy Image":"이미지 복사",async()=>{try{const d=window.ClipboardItem,u=await zh(t);if(!d)throw new Error("unsupported");await navigator.clipboard.write([new d({"image/png":u})]),r(h?"Image copied to clipboard":"이미지를 클립보드에 복사했습니다")}catch{r(h?"This browser does not support image copy":"이 브라우저는 이미지 복사를 지원하지 않습니다")}}),l(h?"Save Image":"이미지 저장",async()=>{const d=await zh(t),u=URL.createObjectURL(d),f=document.createElement("a");f.href=u,f.download="ilgidangcheon.png",f.click(),setTimeout(()=>URL.revokeObjectURL(u),4e3),r(h?"Image saved":"이미지를 저장했습니다")}),l(h?"Copy Text":"문구 복사",async()=>{try{await navigator.clipboard.writeText(c),r(h?"Share text copied":"공유 문구를 복사했습니다")}catch{r(h?"Clipboard access blocked":"클립보드 접근이 차단되었습니다")}}),l(h?"Close":"닫기",()=>i.remove()),i.appendChild(o),document.body.appendChild(i)}const KM=["zhaoyun","guanyu","sunshangxiang","zhangfei","zhugeliang","huangzhong","lvbu"],JM=["yuanshao","dongzhuo","lvbu"];function Zu(a){const e=Math.floor(a/60),t=Math.floor(a%60);return`${e.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`}function J(a,e,t){const i=document.createElement(a);return e&&(i.className=e),t!==void 0&&(i.innerHTML=t),i}function QM(a,e){const t="/threesur/assets/sprites/sgrade.png",o=a*4*48,l=J("div","hero-portrait");return l.style.width=`${48*e}px`,l.style.height=`${64*e}px`,l.style.backgroundImage=`url(${t})`,l.style.backgroundSize=`${4032*e}px ${256*e}px`,l.style.backgroundPosition=`-${o*e}px 0px`,l}class eS{cb;atlas;overlay;fade;muted=!1;current="none";rerender=null;constructor(e,t){this.cb=e,this.atlas=t,this.fade=J("div"),this.fade.id="fade",document.body.appendChild(this.fade),this.overlay=J("div","overlay"),document.body.appendChild(this.overlay),l1(()=>{this.rerender&&this.rerender()})}setMuted(e){this.muted=e}show(e,t=!1){const i=()=>{this.overlay.textContent="",e(),this.overlay.classList.add("show")};if(t){i();return}this.fade.style.pointerEvents="auto";const n=this.fade.animate([{opacity:0},{opacity:1}],{duration:150,easing:"ease-in",fill:"forwards"});n.onfinish=()=>{i();const s=this.fade.animate([{opacity:1},{opacity:0}],{duration:150,easing:"ease-out",fill:"forwards"});s.onfinish=()=>{this.fade.style.pointerEvents="none"}}}hide(){this.overlay.classList.remove("show"),this.current="none"}button(e,t,i){const n=J("button",i?.primary?"btn btn-primary":"btn");return n.textContent=e,i?.disabled&&(n.disabled=!0),n.addEventListener("click",()=>{n.disabled||t()}),n}muteButton(){const e=J("button","btn btn-icon");return e.textContent=this.muted?"🔇":"🔊",e.setAttribute("aria-label","음소거 토글 / mute"),e.addEventListener("click",()=>{this.muted=this.cb.onToggleMute(),e.textContent=this.muted?"🔇":"🔊"}),e}langButton(){const e=J("button","btn btn-icon");return e.textContent=we()==="ko"?"EN":"KO",e.setAttribute("aria-label","language / 언어"),e.addEventListener("click",()=>{o1()}),e}showTitle(e=!1){this.current="title";const t=iM(),i=()=>{const n=J("div","screen"),s=J("div","title-mark");s.appendChild(J("div","title-hanja","一騎當千")),s.appendChild(J("div","title-kor",ie("titleKor"))),s.appendChild(J("div","title-tag",ie("titleTag"))),n.appendChild(s);const r=J("div","btn-row");r.appendChild(this.button(ie("start"),this.cb.onStart,{primary:!0})),n.appendChild(r);const o=J("div","btn-row");o.appendChild(this.button(ie("shop"),()=>this.cb.onOpenShop("upgrade"))),o.appendChild(this.button(ie("codex"),()=>this.cb.onOpenShop("codex"))),o.appendChild(this.muteButton()),o.appendChild(this.langButton()),n.appendChild(o),n.appendChild(J("div","controls-hint",ie("controlsHint"))),t.line&&n.appendChild(J("div","title-quote",`“${t.line}” <span class="who">— ${t.name}</span>`)),this.overlay.appendChild(n)};this.rerender=()=>{this.overlay.textContent="",i()},this.show(i,e)}showSelect(e){this.current="select";const t=()=>{const i=J("div","screen");i.appendChild(J("div","section-title",`${ie("selectTitle")} <small>將帥選擇</small>`));const n=J("div","hero-grid");for(const s of KM){const r=mn[s];if(!r)continue;const o=!Sc(s,e),l=J("div",o?"hero-card locked":"hero-card");o&&s==="lvbu"&&l.classList.add("shop-lock");const h=QM(r.charIndex,2.4);if(l.appendChild(h),o){const u=J("div","hero-lock");u.appendChild(J("div","","🔒")),u.appendChild(J("div","price",VM(s,e))),l.appendChild(u)}const c=wt[r.startWeapon]?.name??r.startWeapon;l.appendChild(J("div","hero-name",`${_t("hero",s,r.name)}<span class="hanja">${r.hanja}</span>`)),l.appendChild(J("div","hero-line",`${ie("weaponLabel")} <span class="k">${_t("weapon",r.startWeapon,c)}</span>`)),l.appendChild(J("div","hero-line",we()==="en"?c1[s]??r.bonusText:r.bonusText)),l.appendChild(J("div","hero-musou",this.musouText(s)));const d=ku(s);d&&!o&&l.appendChild(J("div","hero-quote",`“${d}”`)),o?s==="lvbu"&&l.addEventListener("click",()=>this.cb.onOpenShop("upgrade")):l.addEventListener("click",()=>this.cb.onSelectHero(s)),n.appendChild(l)}i.appendChild(n),i.appendChild(this.button(ie("back"),this.cb.onBackToTitle)),this.overlay.appendChild(i)};this.rerender=()=>{this.overlay.textContent="",t()},this.show(t)}musouText(e){return we()==="en"?d1[e]??"Musou":{zhaoyun:"무쌍 창격돌진 — 8방향 무적 돌진",guanyu:"무쌍 청룡회천참 — 거대 회전 참격",zhangfei:"무쌍 장판교 포효 — 전화면 스턴",zhugeliang:"무쌍 천뢰소환 — 낙뢰 폭풍",huangzhong:"무쌍 백보천양 — 전방위 화살",sunshangxiang:"무쌍 홍련난무 — 붉은 화살 폭풍",lvbu:"무쌍 적토무쌍 — 조작 가능 무적 돌진"}[e]??"무쌍난무"}showResult(e,t,i,n){this.current="result";const s=()=>{const r=J("div","screen"),o=e.victory;r.appendChild(J("div",`result-title ${o?"win":"lose"}`,o?"天下統一":"戰死")),r.appendChild(J("div","result-sub",ie(o?"resultWin":"resultLose")));const l=ku(e.heroId);l&&r.appendChild(J("div","result-quote",`“${l}”`));const h=ip(e,t);if(h){const g=we()==="en"?"Epithet":"訓章";r.appendChild(J("div","result-epithet",`<span class="ep-label">${g}</span><span class="ep-name">“${HM(h)}”</span>`))}if(n.newAchievements.length>0){const g=n.newAchievements.map(p=>Mc[p]).filter(p=>!!p).map(p=>`${we()==="en"?Kr[p.id]?.name??p.name:p.name} ${p.hanja}`).join(" · ");r.appendChild(J("div","ach-toast",`${ie("achGet")} <b>${g}</b>`))}if(n.newHeroes.length>0){const g=n.newHeroes.map(p=>mn[p]?`${_t("hero",p,mn[p].name)} ${mn[p].hanja}`:null).filter(p=>!!p).join(" · ");r.appendChild(J("div","ach-toast hero-unlock-toast",`${ie("heroUnlockGet")} <b>${g}</b>`))}if(n.newWeapons&&n.newWeapons.length>0){const g=n.newWeapons.map(p=>wt[p]?`${_t("weapon",p,wt[p].name)} ${wt[p].hanja}`:null).filter(p=>!!p).join(" · ");if(g){const p=we()==="en"?"New tactic unlocked":"신규 병법 해금";r.appendChild(J("div","ach-toast weapon-unlock-toast",`${p} — <b>${g}</b>`))}}const c=J("div","result-stats");c.appendChild(this.stat(ie("rsSurvive"),Zu(e.time),i.time)),c.appendChild(this.stat(ie("rsKills"),String(e.kills),i.kills)),c.appendChild(this.stat(ie("rsMaxCombo"),String(e.maxCombo),i.combo)),c.appendChild(this.stat(ie("rsLevel"),`Lv ${e.level}`,i.level)),c.appendChild(this.stat(ie("rsHero"),_t("hero",e.heroId,mn[e.heroId]?.name??e.heroId),!1)),c.appendChild(this.stat(ie("rsBossKill"),String(e.bosses.length),!1)),r.appendChild(c);const d=J("div","gold-earned",`${ie("goldEarned")} ⟡ ${e.goldEarned}`+(e.comboBonus>0?`<span class="bonus">${ie("goldBonus",{n:e.comboBonus})}</span>`:""));r.appendChild(d);const u=we()==="en";r.appendChild(J("div","controls-hint",`${ie("baseBalance",{n:t.gold})} · ${u?"spend it below to upgrade your camp":"아래 강화로 본진을 영구 강화"}`));const f=J("div","build-summary");for(const g of e.weapons)f.appendChild(J("div","build-chip w",`${_t("weapon",g.id,wt[g.id]?.name??g.id)} <b>Lv${g.level}</b>`));for(const g of e.passives)f.appendChild(J("div","build-chip p",`${_t("passive",g.id,Oi[g.id]?.name??g.id)} <b>Lv${g.level}</b>`));r.appendChild(f);const m=J("div","btn-row");m.appendChild(this.button(ie("retry"),this.cb.onRetry,{primary:!0}));const v=this.button(`${u?"Upgrade":"본진 강화"} ⟡ ${t.gold} 強化`,()=>this.cb.onOpenShop("upgrade"));v.style.borderColor="#e8c667",v.style.color="#f4dc8a",v.style.boxShadow="0 0 14px rgba(232, 198, 103, 0.28)",m.appendChild(v),m.appendChild(this.button(ie("share"),()=>YM({victory:e.victory,heroId:e.heroId,time:e.time,kills:e.kills,maxCombo:e.maxCombo,level:e.level,goldEarned:e.goldEarned,weapons:e.weapons,title:n.title},this.atlas))),m.appendChild(this.button(ie("toTitle"),this.cb.onBackToTitle)),r.appendChild(m),this.overlay.appendChild(r)};this.rerender=()=>{this.overlay.textContent="",s()},this.show(s)}stat(e,t,i){const n=J("div","rs");return n.appendChild(J("div","v",t+(i?`<span class="nr">${ie("newRecord")}</span>`:""))),n.appendChild(J("div","l",e)),n}shopSave=null;shopTab="upgrade";showShop(e,t){this.current="shop",this.rerender=()=>this.rebuildShop(e,this.shopTab),this.show(()=>this.buildShop(e,t))}rerenderShop(){this.current==="shop"&&this.shopSave&&this.rebuildShop(this.shopSave,this.shopTab)}rebuildShop(e,t){this.overlay.textContent="",this.buildShop(e,t)}buildShop(e,t){this.shopSave=e,this.shopTab=t;const i=J("div","screen");i.appendChild(J("div","section-title",`${ie("shopTitle")} <small>本陣</small>`)),i.appendChild(J("div","gold-tag",ie("goldHeld",{n:e.gold})));const n=J("div","tabs"),s=J("div",t==="upgrade"?"tab active":"tab",ie("tabUpgrade")),r=J("div",t==="codex"?"tab active":"tab",ie("tabCodex"));s.addEventListener("click",()=>this.rebuildShop(e,"upgrade")),r.addEventListener("click",()=>this.rebuildShop(e,"codex")),n.appendChild(s),n.appendChild(r),i.appendChild(n),t==="upgrade"?i.appendChild(this.upgradeList(e)):i.appendChild(this.codexPanel(e)),i.appendChild(this.button(ie("back"),this.cb.onBackToTitle)),this.overlay.appendChild(i)}upgradeList(e){const t=J("div","shop-list");for(const i of Qf){const n=e.upgrades[i.id]??0,s=tp(i,n),r=s<0,o=J("div","shop-row"),l=J("div","shop-info");l.appendChild(J("div","name",`${_t("upgrade",i.id,i.name)}<span class="hanja">${i.hanja}</span>`)),l.appendChild(J("div","desc",r?i.desc(n):i.desc(n+1)));const h=J("div","pips");for(let d=0;d<i.maxLevel;d++)h.appendChild(J("div",d<n?"pip on":"pip"));l.appendChild(h),o.appendChild(l);const c=J("div","shop-buy");if(r)c.appendChild(J("div","gold-tag",ie("maxed")));else{const d=e.gold>=s;c.appendChild(J("div","controls-hint",`⟡ ${s}`)),c.appendChild(this.button(ie("upgradeBuy"),()=>this.cb.onBuyUpgrade(i.id),{disabled:!d}))}o.appendChild(c),t.appendChild(o)}if(!e.lvbuUnlocked){const i=J("div","shop-row"),n=J("div","shop-info");n.appendChild(J("div","name",`${ie("lvbuUnlockName")}<span class="hanja">呂布</span>`)),n.appendChild(J("div","desc",ie("lvbuUnlockDesc"))),i.appendChild(n);const s=J("div","shop-buy");s.appendChild(J("div","controls-hint",`⟡ ${fo}`)),s.appendChild(this.button(ie("unlockBuy"),this.cb.onUnlockLvbu,{disabled:e.gold<fo})),i.appendChild(s),t.appendChild(i)}return t}codexPanel(e){const t=J("div","screen");t.style.gap="14px",t.style.padding="0";const i=J("div","records");i.appendChild(this.rec(Zu(e.best.time),ie("recSurvive"))),i.appendChild(this.rec(String(e.best.kills),ie("recKills"))),i.appendChild(this.rec(`Lv ${e.best.level}`,ie("recLevel"))),i.appendChild(this.rec(String(e.best.combo),ie("recCombo"))),t.appendChild(i),t.appendChild(J("div","controls-hint",ie("bossCodex")));const n=J("div","codex-grid");for(const f of JM){const m=jf[f];if(!m)continue;const v=e.bosses.includes(f),g=J("div",v?"codex-cell slain":"codex-cell");g.appendChild(J("div","cx-name",v?`${_t("hero",f,m.name)} ${m.hanja}`:"???")),g.appendChild(J("div","cx-state",v?`<span style="color:#e8c667">${ie("slain")}</span>`:`<span style="color:#7f8496">${ie("notSlain")}</span>`)),n.appendChild(g)}t.appendChild(n);const s=we()==="en";t.appendChild(J("div","controls-hint",s?"Tactics Codex 兵法":"병법 도감 兵法"));const r=J("div","wpn-grid");for(const f in wt){const m=wt[f];if(m.evolution)continue;const v=Zf.includes(f)&&!bc(f,e),g=J("div",v?"wpn-cell locked":"wpn-cell");v?(g.appendChild(J("div","wpn-name","？？？")),g.appendChild(J("div","wpn-cond",Sw(f,e)))):(g.appendChild(J("div","wpn-name",`${_t("weapon",f,m.name)} <span class="wh">${m.hanja}</span>`)),g.appendChild(J("div","wpn-desc",s?ka[f]??m.desc:m.desc))),r.appendChild(g)}t.appendChild(r),t.appendChild(J("div","controls-hint",s?"Evolutions 秘傳":"진화 비전 秘傳"));const o="MAX",l=J("div","wpn-grid");for(const f of Dh){const m=wt[f.to],v=wt[f.from],g=Oi[f.passive];if(!m||!v||!g)continue;const p=J("div","wpn-cell evo");p.appendChild(J("div","wpn-name",`${_t("weapon",f.to,m.name)} <span class="wh">${m.hanja}</span>`)),p.appendChild(J("div","wpn-desc",s?ka[f.to]??m.desc:m.desc)),p.appendChild(J("div","wpn-recipe",`${_t("weapon",f.from,v.name)} <b>${o}</b> + ${_t("passive",f.passive,g.name)}`)),l.appendChild(p)}t.appendChild(l);const h=g1(e).length;t.appendChild(J("div","controls-hint",`${s?"Masterworks":"명기 도감"} 名器 (${h}/${za.length})`));const c=J("div","mw-grid");for(const f of za){const m=v1(f.id,e),v=J("div",m?"mw-cell owned":"mw-cell locked");v.appendChild(J("div","mw-name",`${Wf(f)} <span class="mh">${f.hanja}</span>`)),m?(v.appendChild(J("div","mw-desc",Xf(f))),v.appendChild(J("div","mw-lore",`“${m1(f)}”`))):v.appendChild(J("div","mw-state",s?"Undiscovered":"未得")),c.appendChild(v)}t.appendChild(c);const d=e.achievements??[];t.appendChild(J("div","controls-hint",`${ie("achSection")} (${d.length}/${po.length})`));const u=J("div","ach-grid");for(const f of po){const m=d.includes(f.id),v=s?Kr[f.id]?.name??f.name:f.name,g=s?Kr[f.id]?.desc??f.desc:f.desc,p=J("div",m?"ach-cell done":"ach-cell");p.appendChild(J("div","ach-name",m?`${v} <span class="ah">${f.hanja}</span>`:v)),p.appendChild(J("div","ach-desc",m?g:"???")),u.appendChild(p)}return t.appendChild(u),t}rec(e,t){const i=J("div","rec");return i.appendChild(J("div","rv",e)),i.appendChild(J("div","rl",t)),i}showPause(){this.current="pause";const e=()=>{this.overlay.textContent="";const t=J("div","screen");t.appendChild(J("div","section-title",`${ie("pauseTitle")} <small>一時停止</small>`));const i=J("div","btn-row");i.appendChild(this.button(ie("resume"),this.cb.onResume,{primary:!0})),i.appendChild(this.muteButton()),i.appendChild(this.langButton()),i.appendChild(this.button(ie("abandon"),this.cb.onAbandon)),t.appendChild(i),t.appendChild(J("div","controls-hint",ie("resumeHint"))),this.overlay.appendChild(t),this.overlay.classList.add("show")};this.rerender=e,e()}}const un=60,tS=.1;class iS{input;moveZone;base;knob;musouBtn;musouRing;movePointer=-1;startX=0;startY=0;visible=!1;ready=!1;constructor(e){this.input=e,this.moveZone=document.createElement("div"),this.moveZone.style.cssText=["position:fixed","inset:0","z-index:22","touch-action:none","display:none"].join(";"),this.base=document.createElement("div"),this.base.style.cssText=["position:fixed","z-index:22",`width:${un*2}px`,`height:${un*2}px`,"border-radius:50%","border:2px solid rgba(232,198,103,0.5)","background:radial-gradient(circle,rgba(20,22,30,0.5),rgba(10,11,17,0.35))","box-shadow:0 0 18px rgba(232,198,103,0.2)","transform:translate(-50%,-50%)","display:none","pointer-events:none"].join(";"),this.knob=document.createElement("div"),this.knob.style.cssText=["position:absolute","width:52px","height:52px","border-radius:50%","background:radial-gradient(circle at 40% 35%,#f0e4c0,#a8791f)","box-shadow:0 0 14px rgba(232,198,103,0.6)","transform:translate(-50%,-50%)","pointer-events:none"].join(";"),this.base.appendChild(this.knob),this.moveZone.appendChild(this.base),document.body.appendChild(this.moveZone),this.musouBtn=document.createElement("div"),this.musouBtn.style.cssText=["position:fixed","right:calc(env(safe-area-inset-right,0px) + 22px)","bottom:calc(env(safe-area-inset-bottom,0px) + 64px)","width:92px","height:92px","border-radius:50%","z-index:23","touch-action:none","display:none","align-items:center","justify-content:center",'font-family:"Nanum Myeongjo","Times New Roman",serif'].join(";"),this.musouRing=document.createElement("div"),this.musouRing.style.cssText=["position:absolute","inset:0","border-radius:50%","background:conic-gradient(#e8c667 0deg, rgba(40,32,14,0.7) 0deg)","-webkit-mask:radial-gradient(circle, transparent 34px, #000 35px)","mask:radial-gradient(circle, transparent 34px, #000 35px)"].join(";"),this.musouBtn.appendChild(this.musouRing);const t=document.createElement("div");t.style.cssText=["position:absolute","inset:10px","border-radius:50%","background:radial-gradient(circle at 40% 35%,#2a2410,#14120a)","border:1px solid rgba(232,198,103,0.5)","display:flex","align-items:center","justify-content:center","color:#e8c667","font-size:26px","letter-spacing:1px"].join(";"),t.textContent="無",this.musouBtn.appendChild(t),document.body.appendChild(this.musouBtn),this.moveZone.addEventListener("pointerdown",this.onMoveDown,{passive:!1}),this.moveZone.addEventListener("pointermove",this.onMoveMove,{passive:!1}),this.moveZone.addEventListener("pointerup",this.onMoveUp),this.moveZone.addEventListener("pointercancel",this.onMoveUp),this.moveZone.addEventListener("lostpointercapture",this.onMoveUp),window.addEventListener("pointerup",this.onWindowRelease),window.addEventListener("pointercancel",this.onWindowRelease),this.musouBtn.addEventListener("pointerdown",this.onMusouDown)}onWindowRelease=e=>{this.movePointer!==-1&&e.pointerId===this.movePointer&&this.endMove()};setVisible(e){this.visible!==e&&(this.visible=e,this.moveZone.style.display=e?"block":"none",this.musouBtn.style.display=e?"flex":"none",e||this.endMove())}setMusou(e,t){if(!this.visible)return;const i=Math.min(360,e/100*360);this.musouRing.style.background=`conic-gradient(#e8c667 ${i}deg, rgba(40,32,14,0.7) ${i}deg)`,t&&!this.ready?this.musouBtn.animate([{transform:"scale(1)"},{transform:"scale(1.12)"},{transform:"scale(1)"}],{duration:700,iterations:1/0}):!t&&this.ready&&this.musouBtn.getAnimations().forEach(n=>n.cancel()),this.ready=t}onMoveDown=e=>{if(e.preventDefault(),this.movePointer!==-1&&this.movePointer!==e.pointerId)try{this.moveZone.releasePointerCapture(this.movePointer)}catch{}this.movePointer=e.pointerId,this.startX=e.clientX,this.startY=e.clientY,this.base.style.left=`${e.clientX}px`,this.base.style.top=`${e.clientY}px`,this.base.style.display="block",this.knob.style.left="50%",this.knob.style.top="50%",this.input.joy.active=!0,this.input.joy.x=0,this.input.joy.z=0;try{this.moveZone.setPointerCapture(e.pointerId)}catch{}};onMoveMove=e=>{if(e.pointerId!==this.movePointer)return;e.preventDefault();let t=e.clientX-this.startX,i=e.clientY-this.startY;const n=Math.hypot(t,i);n>un&&(t=t/n*un,i=i/n*un),this.knob.style.left=`${50+t/un*50}%`,this.knob.style.top=`${50+i/un*50}%`;const s=t/un,r=i/un;Math.hypot(s,r)<tS?(this.input.joy.x=0,this.input.joy.z=0):(this.input.joy.x=s,this.input.joy.z=r)};onMoveUp=e=>{e.pointerId===this.movePointer&&this.endMove()};endMove(){if(this.movePointer!==-1)try{this.moveZone.releasePointerCapture(this.movePointer)}catch{}this.movePointer=-1,this.base.style.display="none",this.input.joy.active=!1,this.input.joy.x=0,this.input.joy.z=0}onMusouDown=e=>{e.preventDefault(),this.input.press("Space"),this.musouBtn.animate([{filter:"brightness(1.8)"},{filter:"brightness(1)"}],{duration:200,easing:"ease-out"})}}function nS(){return new URLSearchParams(location.search).has("touch")?!0:"ontouchstart"in window||navigator.maxTouchPoints>0}const np="threesur-save-v1",Nh=1;function Qr(){return{version:Nh,gold:0,upgrades:{},lvbuUnlocked:!1,muted:!1,best:{time:0,kills:0,level:1,combo:0},bosses:[],achievements:[],unlockedWeapons:[],masterworks:[],totalKills:0,totalWins:0,epithets:[]}}function sS(){let a=null;try{a=localStorage.getItem(np)}catch{return Qr()}if(!a)return Qr();let e;try{e=JSON.parse(a)}catch{return Qr()}return aS(e)}function aS(a){const e=Qr();if(typeof a!="object"||a===null)return e;const t=a;return typeof t.version=="number"&&t.version>Nh?e:{version:Nh,gold:qn(t.gold,0),upgrades:rS(t.upgrades),lvbuUnlocked:t.lvbuUnlocked===!0,muted:t.muted===!0,best:{time:qn(t.best?.time,0),kills:qn(t.best?.kills,0),level:qn(t.best?.level,1),combo:qn(t.best?.combo,0)},bosses:Array.isArray(t.bosses)?t.bosses.filter(i=>typeof i=="string"):[],achievements:Array.isArray(t.achievements)?t.achievements.filter(i=>typeof i=="string"):[],unlockedWeapons:Array.isArray(t.unlockedWeapons)?t.unlockedWeapons.filter(i=>typeof i=="string"):[],masterworks:Array.isArray(t.masterworks)?t.masterworks.filter(i=>typeof i=="string"):[],totalKills:qn(t.totalKills,0),totalWins:qn(t.totalWins,0),epithets:Array.isArray(t.epithets)?t.epithets.filter(i=>typeof i=="string"):[]}}function qn(a,e){return typeof a=="number"&&isFinite(a)?a:e}function rS(a){const e={};if(typeof a=="object"&&a!==null)for(const t in a){const i=a[t];typeof i=="number"&&isFinite(i)&&i>0&&(e[t]=Math.floor(i))}return e}function Aa(a){try{localStorage.setItem(np,JSON.stringify(a))}catch{}}function oS(a,e){const t={time:e.time>a.time,kills:e.kills>a.kills,level:e.level>a.level,combo:e.combo>a.combo};return t.time&&(a.time=e.time),t.kills&&(a.kills=e.kills),t.level&&(a.level=e.level),t.combo&&(a.combo=e.combo),t}const lS=document.getElementById("app"),Na=document.createElement("div");Na.id="loading";Na.innerHTML='<div style="font-size:30px;">일기당천 一騎當千</div><div style="font-size:15px;color:#b8bcc8;">전장 준비 중…</div>';document.body.appendChild(Na);const $n=zb(lS),Fl=new Qb,Hr=new ey,Dl=nS();sy().then(a=>{const e=sS();Re.setMuted(e.muted);let t="title",i="zhaoyun",n=null;const s=new uo(a,Fl,Hr,{onEnd:y=>m(y),onPause:()=>v()},Dl),r=new Bb($n,s.scene,Fl.camera);s.setPostFx(r);const o=new iS(Hr),l=new eS({onStart:()=>c(),onSelectHero:y=>f(y),onOpenShop:y=>d(y),onBackToTitle:()=>h(),onRetry:()=>f(n?.heroId??i),onBuyUpgrade:y=>p(y),onUnlockLvbu:()=>M(),onToggleMute:()=>(e.muted=Re.toggleMuted(),Aa(e),e.muted),onResume:()=>g(),onAbandon:()=>s.abandon()},a);l.setMuted(e.muted);function h(){t="title",s.enterAttract(),o.setVisible(!1),Re.playBgm("title"),l.showTitle()}function c(){t="select",Re.playBgm("title"),l.showSelect(e)}function d(y){t="shop",Re.playBgm("title"),l.showShop(e,y)}function u(y){return Object.keys(wt).filter(R=>!wt[R].evolution&&bc(R,y))}function f(y,R=!1){!R&&!Sc(y,e)||(i=y,t="run",l.hide(),s.beginRun(y,kM(e.upgrades),u(e)),o.setVisible(Dl))}function m(y){t="result",n=y,o.setVisible(!1);const R=new Set($u(e));e.gold+=y.goldEarned;const P=oS(e.best,{time:y.time,kills:y.kills,level:y.level,combo:y.maxCombo});for(const k of y.bosses)e.bosses.includes(k)||e.bosses.push(k);e.totalKills+=y.kills,y.victory&&(e.totalWins+=1);const F=NM({victory:y.victory,kills:y.kills,maxCombo:y.maxCombo,time:y.time,level:y.level,bosses:y.bosses,weapons:y.weapons,totalKills:e.totalKills,totalWins:e.totalWins,endless:y.endless}),W=F.filter(k=>!e.achievements.includes(k));for(const k of W)e.achievements.push(k);const $=$u(e).filter(k=>!R.has(k)),N=Mw(e).filter(k=>!e.unlockedWeapons.includes(k));for(const k of N)e.unlockedWeapons.push(k);for(const k of y.masterworks)e.masterworks.includes(k)||e.masterworks.push(k);const V=ip(y,e);V&&!e.epithets.includes(V.id)&&e.epithets.push(V.id),Aa(e),Re.playJingle(y.victory?"victory":"defeat"),(W.length>0||N.length>0)&&Re.sfx("achievement"),l.showResult(y,e,P,{title:OM(F),newAchievements:W,newHeroes:$,newWeapons:N})}function v(){t="pause",o.setVisible(!1),l.showPause()}function g(){t="run",l.hide(),s.resume(),o.setVisible(Dl)}function p(y){const R=ep[y];if(!R)return;const P=e.upgrades[y]??0,F=tp(R,P);F<0||e.gold<F||(e.gold-=F,e.upgrades[y]=P+1,Aa(e),Re.sfx("uiClick"),l.rerenderShop())}function M(){e.lvbuUnlocked||e.gold<fo||(e.gold-=fo,e.lvbuUnlocked=!0,Aa(e),Re.sfx("revive"),l.rerenderShop())}const T=()=>{Re.init(),Re.playBgm(t==="run"?"battle":"title")};window.addEventListener("pointerdown",T,{once:!0}),window.addEventListener("keydown",T,{once:!0}),document.addEventListener("gesturestart",y=>y.preventDefault(),{passive:!1}),document.addEventListener("gesturechange",y=>y.preventDefault(),{passive:!1});let w=0;document.addEventListener("touchend",y=>{const R=performance.now();R-w<320&&y.cancelable&&y.preventDefault(),w=R},{passive:!1}),window.addEventListener("keydown",y=>{y.code==="Escape"&&t==="pause"&&g()});const A=()=>{const y=Math.round(window.visualViewport?.width??window.innerWidth),R=Math.round(window.visualViewport?.height??window.innerHeight);Fl.onResize(y,R),r.setSize(y,R)};window.addEventListener("resize",A),window.visualViewport?.addEventListener("resize",A),window.addEventListener("orientationchange",()=>{A(),setTimeout(A,250)}),requestAnimationFrame(A),setTimeout(A,300),s.enterAttract(),Re.playBgm("title"),l.showTitle(!0),Na.remove(),$n.info.autoReset=!1;let _=60;new iy(y=>{Hr.poll(),s.update(y),t==="run"&&o.setMusou(s.musouGauge,s.musouReadyFlag),r.setMusou(s.musouStrength,s.renderTime),t==="run"&&s.consumeReplayTrigger()&&r.playReplay(),$n.info.reset(),r.render(),Hr.endFrame(),Re.endFrame(),y>0&&(_+=(1/y-_)*.05)}).start(),(location.hostname==="localhost"||location.hostname==="127.0.0.1")&&(window.__GAME_TEST__={goToTitle:()=>h(),selectHero:y=>f(y,!0),openShop:(y="upgrade")=>d(y),grantGold:y=>{e.gold+=y,Aa(e),l.rerenderShop()},buyUpgrade:y=>p(y),unlockLvbu:()=>M(),killPlayer:()=>s.testKillPlayer(),damagePlayer:y=>s.testDamagePlayer(y),killBoss:()=>s.testKillBoss(),get scene(){return t},get save(){return{gold:e.gold,upgrades:{...e.upgrades},lvbuUnlocked:e.lvbuUnlocked,best:{...e.best},bosses:[...e.bosses],achievements:[...e.achievements],totalKills:e.totalKills,totalWins:e.totalWins}},setTime:y=>s.testSetTime(y),giveWeapon:y=>s.testGiveWeapon(y),givePassive:(y,R)=>s.testGivePassive(y,R),levelUp:()=>s.testForceLevel(),fillMusou:()=>s.testFillMusou(),activateMusou:()=>s.testActivateMusou(),addGold:y=>s.testAddGold(y),showProjectiles:()=>s.testSpawnProjectileShowcase(),showEnemyProjectiles:()=>s.testSpawnEnemyProjectileShowcase(),musouFx:()=>s.testMusouFx(),shrineBuff:(y,R)=>s.testShrineBuff(y,R),flashBurst:(y,R)=>s.testFlashBurst(y,R),spawnBoss:y=>s.testSpawnBoss(y),setBossFlags:(y,R,P)=>s.testSetBossFlags(y,R,P),treasure:y=>s.testTreasure(y),triggerEvent:y=>s.testTriggerEvent(y),spawnPattern:y=>s.testSpawnPattern(y),showWorldObjects:()=>s.testShowWorldObjects(),setPlayerPosition:(y,R)=>s.testSetPlayerPosition(y,R),setInvulnerable:y=>s.testSetInvulnerable(y),primeGate:()=>s.testPrimeGate(),breachGate:()=>s.testBreachGate(),triggerHulao:()=>s.testTriggerHulao(),flipBanners:y=>s.testFlipBanners(y),testVolley:()=>s.testVolley(),siegeBreach:(y="castle-s")=>s.testSiegeBreach(y),siegeForceLord:()=>s.testSiegeForceLord(),siegeForceCounter:()=>s.testSiegeForceCounter(),siegeAddFall:y=>s.testSiegeAddFall(y),siegeForceDefend:()=>s.testSiegeForceDefend(),setObjective:y=>s.testSetObjective(y),damageGate:(y,R)=>s.testDamageGate(y,R),resumeEndless:()=>s.resumeEndless(),forceRelic:()=>s.testForceRelic(),enterEndless:()=>s.testEnterEndless(),get stats(){return s.testStats}},window.__DEBUG__={info:()=>({fps:Math.round(_),calls:$n.info.render.calls,tris:$n.info.render.triangles,geometries:$n.info.memory.geometries,textures:$n.info.memory.textures})})}).catch(a=>{console.error(a),Na.innerHTML=`<div style="color:#e85c4a;font-size:22px;">로드 실패</div><div style="font-size:13px;color:#b8bcc8;max-width:80vw;">${String(a)}</div>`});
