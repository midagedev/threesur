(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=e(s);fetch(s.href,n)}})();const qh="185",mp=0,Nc=1,gp=2,Kr=1,vp=2,La=3,ks=0,bi=1,ti=2,ns=0,as=1,He=2,Oc=3,Bc=4,xp=5,en=100,bp=101,_p=102,yp=103,Mp=104,wp=200,Sp=201,Ap=202,Tp=203,Wl=204,Xl=205,Ep=206,Cp=207,Rp=208,Pp=209,Fp=210,Lp=211,Dp=212,Ip=213,Up=214,ql=0,jl=1,$l=2,Qn=3,Zl=4,Kl=5,Yl=6,Ql=7,Qd=0,zp=1,kp=2,rs=0,jh=1,$h=2,Zh=3,wo=4,Kh=5,Yh=6,Qh=7,Jd=300,hn=301,Jn=302,Do=303,Io=304,So=306,os=1e3,ki=1001,Jl=1002,oe=1003,qa=1004,tr=1005,hi=1006,Uo=1007,an=1008,Ui=1009,tf=1010,ef=1011,za=1012,Jh=1013,ls=1014,Xi=1015,Ri=1016,tc=1017,ec=1018,ka=1020,sf=35902,nf=35899,af=1021,rf=1022,qi=1023,ws=1026,rn=1027,ic=1028,sc=1029,cn=1030,nc=1031,ac=1033,Yr=33776,Qr=33777,Jr=33778,to=33779,th=35840,eh=35841,ih=35842,sh=35843,nh=36196,ah=37492,rh=37496,oh=37488,lh=37489,lo=37490,hh=37491,ch=37808,uh=37809,dh=37810,fh=37811,ph=37812,mh=37813,gh=37814,vh=37815,xh=37816,bh=37817,_h=37818,yh=37819,Mh=37820,wh=37821,Sh=36492,Ah=36494,Th=36495,Eh=36283,Ch=36284,ho=36285,Rh=36286,Np=3200,Hc=0,Op=1,Ds="",Me="srgb",co="srgb-linear",uo="linear",ae="srgb",xn=7680,Gc=519,Bp=512,Hp=513,Gp=514,rc=515,Vp=516,Wp=517,oc=518,Xp=519,Ph=35044,St=35048,Vc="300 es",ss=2e3,fo=2001;function qp(a){for(let t=a.length-1;t>=0;--t)if(a[t]>=65535)return!0;return!1}function Na(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function jp(){const a=Na("canvas");return a.style.display="block",a}const Wc={};function po(...a){const t="THREE."+a.shift();console.log(t,...a)}function of(a){const t=a[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=a[1];e&&e.isStackTrace?a[0]+=" "+e.getLocation():a[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return a}function kt(...a){a=of(a);const t="THREE."+a.shift();{const e=a[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...a)}}function Qt(...a){a=of(a);const t="THREE."+a.shift();{const e=a[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...a)}}function Zn(...a){const t=a.join(" ");t in Wc||(Wc[t]=!0,kt(...a))}function $p(a,t,e){return new Promise(function(i,s){function n(){switch(a.clientWaitSync(t,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:s();break;case a.TIMEOUT_EXPIRED:setTimeout(n,e);break;default:i()}}setTimeout(n,e)})}const Zp={[ql]:jl,[$l]:Yl,[Zl]:Ql,[Qn]:Kl,[jl]:ql,[Yl]:$l,[Ql]:Zl,[Kl]:Qn};class fn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const n=s.indexOf(e);n!==-1&&s.splice(n,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let n=0,r=s.length;n<r;n++)s[n].call(this,t);t.target=null}}}const si=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zo=Math.PI/180,Fh=180/Math.PI;function zs(){const a=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(si[a&255]+si[a>>8&255]+si[a>>16&255]+si[a>>24&255]+"-"+si[t&255]+si[t>>8&255]+"-"+si[t>>16&15|64]+si[t>>24&255]+"-"+si[e&63|128]+si[e>>8&255]+"-"+si[e>>16&255]+si[e>>24&255]+si[i&255]+si[i>>8&255]+si[i>>16&255]+si[i>>24&255]).toLowerCase()}function Kt(a,t,e){return Math.max(t,Math.min(e,a))}function Kp(a,t){return(a%t+t)%t}function ko(a,t,e){return(1-e)*a+e*t}function is(a,t){switch(t.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ue(a,t){switch(t.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}class vt{static{vt.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Kt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Kt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),n=this.x-t.x,r=this.y-t.y;return this.x=n*i-r*s+t.x,this.y=n*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class aa{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,n,r,o){let l=i[s+0],h=i[s+1],c=i[s+2],u=i[s+3],d=n[r+0],f=n[r+1],m=n[r+2],v=n[r+3];if(u!==v||l!==d||h!==f||c!==m){let g=l*d+h*f+c*m+u*v;g<0&&(d=-d,f=-f,m=-m,v=-v,g=-g);let p=1-o;if(g<.9995){const w=Math.acos(g),A=Math.sin(w);p=Math.sin(p*w)/A,o=Math.sin(o*w)/A,l=l*p+d*o,h=h*p+f*o,c=c*p+m*o,u=u*p+v*o}else{l=l*p+d*o,h=h*p+f*o,c=c*p+m*o,u=u*p+v*o;const w=1/Math.sqrt(l*l+h*h+c*c+u*u);l*=w,h*=w,c*=w,u*=w}}t[e]=l,t[e+1]=h,t[e+2]=c,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,n,r){const o=i[s],l=i[s+1],h=i[s+2],c=i[s+3],u=n[r],d=n[r+1],f=n[r+2],m=n[r+3];return t[e]=o*m+c*u+l*f-h*d,t[e+1]=l*m+c*d+h*u-o*f,t[e+2]=h*m+c*f+o*d-l*u,t[e+3]=c*m-o*u-l*d-h*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,n=t._z,r=t._order,o=Math.cos,l=Math.sin,h=o(i/2),c=o(s/2),u=o(n/2),d=l(i/2),f=l(s/2),m=l(n/2);switch(r){case"XYZ":this._x=d*c*u+h*f*m,this._y=h*f*u-d*c*m,this._z=h*c*m+d*f*u,this._w=h*c*u-d*f*m;break;case"YXZ":this._x=d*c*u+h*f*m,this._y=h*f*u-d*c*m,this._z=h*c*m-d*f*u,this._w=h*c*u+d*f*m;break;case"ZXY":this._x=d*c*u-h*f*m,this._y=h*f*u+d*c*m,this._z=h*c*m+d*f*u,this._w=h*c*u-d*f*m;break;case"ZYX":this._x=d*c*u-h*f*m,this._y=h*f*u+d*c*m,this._z=h*c*m-d*f*u,this._w=h*c*u+d*f*m;break;case"YZX":this._x=d*c*u+h*f*m,this._y=h*f*u+d*c*m,this._z=h*c*m-d*f*u,this._w=h*c*u-d*f*m;break;case"XZY":this._x=d*c*u-h*f*m,this._y=h*f*u-d*c*m,this._z=h*c*m+d*f*u,this._w=h*c*u+d*f*m;break;default:kt("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],n=e[8],r=e[1],o=e[5],l=e[9],h=e[2],c=e[6],u=e[10],d=i+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(c-l)*f,this._y=(n-h)*f,this._z=(r-s)*f}else if(i>o&&i>u){const f=2*Math.sqrt(1+i-o-u);this._w=(c-l)/f,this._x=.25*f,this._y=(s+r)/f,this._z=(n+h)/f}else if(o>u){const f=2*Math.sqrt(1+o-i-u);this._w=(n-h)/f,this._x=(s+r)/f,this._y=.25*f,this._z=(l+c)/f}else{const f=2*Math.sqrt(1+u-i-o);this._w=(r-s)/f,this._x=(n+h)/f,this._y=(l+c)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Kt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,n=t._z,r=t._w,o=e._x,l=e._y,h=e._z,c=e._w;return this._x=i*c+r*o+s*h-n*l,this._y=s*c+r*l+n*o-i*h,this._z=n*c+r*h+i*l-s*o,this._w=r*c-i*o-s*l-n*h,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,n=t._z,r=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,n=-n,r=-r,o=-o);let l=1-e;if(o<.9995){const h=Math.acos(o),c=Math.sin(h);l=Math.sin(l*h)/c,e=Math.sin(e*h)/c,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+n*e,this._w=this._w*l+r*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+n*e,this._w=this._w*l+r*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),n=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),n*Math.sin(e),n*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{static{L.prototype.isVector3=!0}constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Xc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Xc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6]*s,this.y=n[1]*e+n[4]*i+n[7]*s,this.z=n[2]*e+n[5]*i+n[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,n=t.elements,r=1/(n[3]*e+n[7]*i+n[11]*s+n[15]);return this.x=(n[0]*e+n[4]*i+n[8]*s+n[12])*r,this.y=(n[1]*e+n[5]*i+n[9]*s+n[13])*r,this.z=(n[2]*e+n[6]*i+n[10]*s+n[14])*r,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,n=t.x,r=t.y,o=t.z,l=t.w,h=2*(r*s-o*i),c=2*(o*e-n*s),u=2*(n*i-r*e);return this.x=e+l*h+r*u-o*c,this.y=i+l*c+o*h-n*u,this.z=s+l*u+n*c-r*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,n=t.elements;return this.x=n[0]*e+n[4]*i+n[8]*s,this.y=n[1]*e+n[5]*i+n[9]*s,this.z=n[2]*e+n[6]*i+n[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Kt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,n=t.z,r=e.x,o=e.y,l=e.z;return this.x=s*l-n*o,this.y=n*r-i*l,this.z=i*o-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return No.copy(this).projectOnVector(t),this.sub(No)}reflect(t){return this.sub(No.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Kt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const No=new L,Xc=new aa;class Bt{static{Bt.prototype.isMatrix3=!0}constructor(t,e,i,s,n,r,o,l,h){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,n,r,o,l,h)}set(t,e,i,s,n,r,o,l,h){const c=this.elements;return c[0]=t,c[1]=s,c[2]=o,c[3]=e,c[4]=n,c[5]=l,c[6]=i,c[7]=r,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,n=this.elements,r=i[0],o=i[3],l=i[6],h=i[1],c=i[4],u=i[7],d=i[2],f=i[5],m=i[8],v=s[0],g=s[3],p=s[6],w=s[1],A=s[4],y=s[7],T=s[2],M=s[5],C=s[8];return n[0]=r*v+o*w+l*T,n[3]=r*g+o*A+l*M,n[6]=r*p+o*y+l*C,n[1]=h*v+c*w+u*T,n[4]=h*g+c*A+u*M,n[7]=h*p+c*y+u*C,n[2]=d*v+f*w+m*T,n[5]=d*g+f*A+m*M,n[8]=d*p+f*y+m*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],n=t[3],r=t[4],o=t[5],l=t[6],h=t[7],c=t[8];return e*r*c-e*o*h-i*n*c+i*o*l+s*n*h-s*r*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],n=t[3],r=t[4],o=t[5],l=t[6],h=t[7],c=t[8],u=c*r-o*h,d=o*l-c*n,f=h*n-r*l,m=e*u+i*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return t[0]=u*v,t[1]=(s*h-c*i)*v,t[2]=(o*i-s*r)*v,t[3]=d*v,t[4]=(c*e-s*l)*v,t[5]=(s*n-o*e)*v,t[6]=f*v,t[7]=(i*l-h*e)*v,t[8]=(r*e-i*n)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,n,r,o){const l=Math.cos(n),h=Math.sin(n);return this.set(i*l,i*h,-i*(l*r+h*o)+r+t,-s*h,s*l,-s*(-h*r+l*o)+o+e,0,0,1),this}scale(t,e){return Zn("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Oo.makeScale(t,e)),this}rotate(t){return Zn("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Oo.makeRotation(-t)),this}translate(t,e){return Zn("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Oo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Oo=new Bt,qc=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jc=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Yp(){const a={enabled:!0,workingColorSpace:co,spaces:{},convert:function(s,n,r){return this.enabled===!1||n===r||!n||!r||(this.spaces[n].transfer===ae&&(s.r=Ms(s.r),s.g=Ms(s.g),s.b=Ms(s.b)),this.spaces[n].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[n].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===ae&&(s.r=Kn(s.r),s.g=Kn(s.g),s.b=Kn(s.b))),s},workingToColorSpace:function(s,n){return this.convert(s,this.workingColorSpace,n)},colorSpaceToWorking:function(s,n){return this.convert(s,n,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ds?uo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,n=this.workingColorSpace){return s.fromArray(this.spaces[n].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,n,r){return s.copy(this.spaces[n].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,n){return Zn("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(s,n)},toWorkingColorSpace:function(s,n){return Zn("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(s,n)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return a.define({[co]:{primaries:t,whitePoint:i,transfer:uo,toXYZ:qc,fromXYZ:jc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Me},outputColorSpaceConfig:{drawingBufferColorSpace:Me}},[Me]:{primaries:t,whitePoint:i,transfer:ae,toXYZ:qc,fromXYZ:jc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Me}}}),a}const Zt=Yp();function Ms(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Kn(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let bn;class Qp{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{bn===void 0&&(bn=Na("canvas")),bn.width=t.width,bn.height=t.height;const s=bn.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=bn}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Na("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),n=s.data;for(let r=0;r<n.length;r++)n[r]=Ms(n[r]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ms(e[i]/255)*255):e[i]=Ms(e[i]);return{data:e,width:t.width,height:t.height}}else return kt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Jp=0;class lc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jp++}),this.uuid=zs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let n;if(Array.isArray(s)){n=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?n.push(Bo(s[r].image)):n.push(Bo(s[r]))}else n=Bo(s);i.url=n}return e||(t.images[this.uuid]=i),i}}function Bo(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?Qp.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(kt("Texture: Unable to serialize Texture."),{})}let tm=0;const Ho=new L;class ei extends fn{constructor(t=ei.DEFAULT_IMAGE,e=ei.DEFAULT_MAPPING,i=ki,s=ki,n=hi,r=an,o=qi,l=Ui,h=ei.DEFAULT_ANISOTROPY,c=Ds){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tm++}),this.uuid=zs(),this.name="",this.source=new lc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=n,this.minFilter=r,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ho).x}get height(){return this.source.getSize(Ho).y}get depth(){return this.source.getSize(Ho).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){kt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){kt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Jd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case os:t.x=t.x-Math.floor(t.x);break;case ki:t.x=t.x<0?0:1;break;case Jl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case os:t.y=t.y-Math.floor(t.y);break;case ki:t.y=t.y<0?0:1;break;case Jl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ei.DEFAULT_IMAGE=null;ei.DEFAULT_MAPPING=Jd;ei.DEFAULT_ANISOTROPY=1;class De{static{De.prototype.isVector4=!0}constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,n=this.w,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s+r[12]*n,this.y=r[1]*e+r[5]*i+r[9]*s+r[13]*n,this.z=r[2]*e+r[6]*i+r[10]*s+r[14]*n,this.w=r[3]*e+r[7]*i+r[11]*s+r[15]*n,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,n;const l=t.elements,h=l[0],c=l[4],u=l[8],d=l[1],f=l[5],m=l[9],v=l[2],g=l[6],p=l[10];if(Math.abs(c-d)<.01&&Math.abs(u-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(c+d)<.1&&Math.abs(u+v)<.1&&Math.abs(m+g)<.1&&Math.abs(h+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const A=(h+1)/2,y=(f+1)/2,T=(p+1)/2,M=(c+d)/4,C=(u+v)/4,b=(m+g)/4;return A>y&&A>T?A<.01?(i=0,s=.707106781,n=.707106781):(i=Math.sqrt(A),s=M/i,n=C/i):y>T?y<.01?(i=.707106781,s=0,n=.707106781):(s=Math.sqrt(y),i=M/s,n=b/s):T<.01?(i=.707106781,s=.707106781,n=0):(n=Math.sqrt(T),i=C/n,s=b/n),this.set(i,s,n,e),this}let w=Math.sqrt((g-m)*(g-m)+(u-v)*(u-v)+(d-c)*(d-c));return Math.abs(w)<.001&&(w=1),this.x=(g-m)/w,this.y=(u-v)/w,this.z=(d-c)/w,this.w=Math.acos((h+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this.w=Kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this.w=Kt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Kt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class em extends fn{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new De(0,0,t,e),this.scissorTest=!1,this.viewport=new De(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:i.depth},n=new ei(s),r=i.count;for(let o=0;o<r;o++)this.textures[o]=n.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:hi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,n=this.textures.length;s<n;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new lc(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _i extends em{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class lf extends ei{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=oe,this.minFilter=oe,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class im extends ei{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=oe,this.minFilter=oe,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ge{static{ge.prototype.isMatrix4=!0}constructor(t,e,i,s,n,r,o,l,h,c,u,d,f,m,v,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,n,r,o,l,h,c,u,d,f,m,v,g)}set(t,e,i,s,n,r,o,l,h,c,u,d,f,m,v,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=n,p[5]=r,p[9]=o,p[13]=l,p[2]=h,p[6]=c,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ge().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,i=t.elements,s=1/_n.setFromMatrixColumn(t,0).length(),n=1/_n.setFromMatrixColumn(t,1).length(),r=1/_n.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*n,e[5]=i[5]*n,e[6]=i[6]*n,e[7]=0,e[8]=i[8]*r,e[9]=i[9]*r,e[10]=i[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,n=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(s),h=Math.sin(s),c=Math.cos(n),u=Math.sin(n);if(t.order==="XYZ"){const d=r*c,f=r*u,m=o*c,v=o*u;e[0]=l*c,e[4]=-l*u,e[8]=h,e[1]=f+m*h,e[5]=d-v*h,e[9]=-o*l,e[2]=v-d*h,e[6]=m+f*h,e[10]=r*l}else if(t.order==="YXZ"){const d=l*c,f=l*u,m=h*c,v=h*u;e[0]=d+v*o,e[4]=m*o-f,e[8]=r*h,e[1]=r*u,e[5]=r*c,e[9]=-o,e[2]=f*o-m,e[6]=v+d*o,e[10]=r*l}else if(t.order==="ZXY"){const d=l*c,f=l*u,m=h*c,v=h*u;e[0]=d-v*o,e[4]=-r*u,e[8]=m+f*o,e[1]=f+m*o,e[5]=r*c,e[9]=v-d*o,e[2]=-r*h,e[6]=o,e[10]=r*l}else if(t.order==="ZYX"){const d=r*c,f=r*u,m=o*c,v=o*u;e[0]=l*c,e[4]=m*h-f,e[8]=d*h+v,e[1]=l*u,e[5]=v*h+d,e[9]=f*h-m,e[2]=-h,e[6]=o*l,e[10]=r*l}else if(t.order==="YZX"){const d=r*l,f=r*h,m=o*l,v=o*h;e[0]=l*c,e[4]=v-d*u,e[8]=m*u+f,e[1]=u,e[5]=r*c,e[9]=-o*c,e[2]=-h*c,e[6]=f*u+m,e[10]=d-v*u}else if(t.order==="XZY"){const d=r*l,f=r*h,m=o*l,v=o*h;e[0]=l*c,e[4]=-u,e[8]=h*c,e[1]=d*u+v,e[5]=r*c,e[9]=f*u-m,e[2]=m*u-f,e[6]=o*c,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(sm,t,nm)}lookAt(t,e,i){const s=this.elements;return Si.subVectors(t,e),Si.lengthSq()===0&&(Si.z=1),Si.normalize(),Es.crossVectors(i,Si),Es.lengthSq()===0&&(Math.abs(i.z)===1?Si.x+=1e-4:Si.z+=1e-4,Si.normalize(),Es.crossVectors(i,Si)),Es.normalize(),er.crossVectors(Si,Es),s[0]=Es.x,s[4]=er.x,s[8]=Si.x,s[1]=Es.y,s[5]=er.y,s[9]=Si.y,s[2]=Es.z,s[6]=er.z,s[10]=Si.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,n=this.elements,r=i[0],o=i[4],l=i[8],h=i[12],c=i[1],u=i[5],d=i[9],f=i[13],m=i[2],v=i[6],g=i[10],p=i[14],w=i[3],A=i[7],y=i[11],T=i[15],M=s[0],C=s[4],b=s[8],x=s[12],E=s[1],P=s[5],F=s[9],G=s[13],j=s[2],N=s[6],W=s[10],z=s[14],K=s[3],tt=s[7],at=s[11],ut=s[15];return n[0]=r*M+o*E+l*j+h*K,n[4]=r*C+o*P+l*N+h*tt,n[8]=r*b+o*F+l*W+h*at,n[12]=r*x+o*G+l*z+h*ut,n[1]=c*M+u*E+d*j+f*K,n[5]=c*C+u*P+d*N+f*tt,n[9]=c*b+u*F+d*W+f*at,n[13]=c*x+u*G+d*z+f*ut,n[2]=m*M+v*E+g*j+p*K,n[6]=m*C+v*P+g*N+p*tt,n[10]=m*b+v*F+g*W+p*at,n[14]=m*x+v*G+g*z+p*ut,n[3]=w*M+A*E+y*j+T*K,n[7]=w*C+A*P+y*N+T*tt,n[11]=w*b+A*F+y*W+T*at,n[15]=w*x+A*G+y*z+T*ut,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],n=t[12],r=t[1],o=t[5],l=t[9],h=t[13],c=t[2],u=t[6],d=t[10],f=t[14],m=t[3],v=t[7],g=t[11],p=t[15],w=l*f-h*d,A=o*f-h*u,y=o*d-l*u,T=r*f-h*c,M=r*d-l*c,C=r*u-o*c;return e*(v*w-g*A+p*y)-i*(m*w-g*T+p*M)+s*(m*A-v*T+p*C)-n*(m*y-v*M+g*C)}determinantAffine(){const t=this.elements,e=t[0],i=t[4],s=t[8],n=t[1],r=t[5],o=t[9],l=t[2],h=t[6],c=t[10];return e*(r*c-o*h)-i*(n*c-o*l)+s*(n*h-r*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],n=t[3],r=t[4],o=t[5],l=t[6],h=t[7],c=t[8],u=t[9],d=t[10],f=t[11],m=t[12],v=t[13],g=t[14],p=t[15],w=e*o-i*r,A=e*l-s*r,y=e*h-n*r,T=i*l-s*o,M=i*h-n*o,C=s*h-n*l,b=c*v-u*m,x=c*g-d*m,E=c*p-f*m,P=u*g-d*v,F=u*p-f*v,G=d*p-f*g,j=w*G-A*F+y*P+T*E-M*x+C*b;if(j===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/j;return t[0]=(o*G-l*F+h*P)*N,t[1]=(s*F-i*G-n*P)*N,t[2]=(v*C-g*M+p*T)*N,t[3]=(d*M-u*C-f*T)*N,t[4]=(l*E-r*G-h*x)*N,t[5]=(e*G-s*E+n*x)*N,t[6]=(g*y-m*C-p*A)*N,t[7]=(c*C-d*y+f*A)*N,t[8]=(r*F-o*E+h*b)*N,t[9]=(i*E-e*F-n*b)*N,t[10]=(m*M-v*y+p*w)*N,t[11]=(u*y-c*M-f*w)*N,t[12]=(o*x-r*P-l*b)*N,t[13]=(e*P-i*x+s*b)*N,t[14]=(v*A-m*T-g*w)*N,t[15]=(c*T-u*A+d*w)*N,this}scale(t){const e=this.elements,i=t.x,s=t.y,n=t.z;return e[0]*=i,e[4]*=s,e[8]*=n,e[1]*=i,e[5]*=s,e[9]*=n,e[2]*=i,e[6]*=s,e[10]*=n,e[3]*=i,e[7]*=s,e[11]*=n,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),n=1-i,r=t.x,o=t.y,l=t.z,h=n*r,c=n*o;return this.set(h*r+i,h*o-s*l,h*l+s*o,0,h*o+s*l,c*o+i,c*l-s*r,0,h*l-s*o,c*l+s*r,n*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,n,r){return this.set(1,i,n,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,n=e._x,r=e._y,o=e._z,l=e._w,h=n+n,c=r+r,u=o+o,d=n*h,f=n*c,m=n*u,v=r*c,g=r*u,p=o*u,w=l*h,A=l*c,y=l*u,T=i.x,M=i.y,C=i.z;return s[0]=(1-(v+p))*T,s[1]=(f+y)*T,s[2]=(m-A)*T,s[3]=0,s[4]=(f-y)*M,s[5]=(1-(d+p))*M,s[6]=(g+w)*M,s[7]=0,s[8]=(m+A)*C,s[9]=(g-w)*C,s[10]=(1-(d+v))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const n=this.determinantAffine();if(n===0)return i.set(1,1,1),e.identity(),this;let r=_n.set(s[0],s[1],s[2]).length();const o=_n.set(s[4],s[5],s[6]).length(),l=_n.set(s[8],s[9],s[10]).length();n<0&&(r=-r),Oi.copy(this);const h=1/r,c=1/o,u=1/l;return Oi.elements[0]*=h,Oi.elements[1]*=h,Oi.elements[2]*=h,Oi.elements[4]*=c,Oi.elements[5]*=c,Oi.elements[6]*=c,Oi.elements[8]*=u,Oi.elements[9]*=u,Oi.elements[10]*=u,e.setFromRotationMatrix(Oi),i.x=r,i.y=o,i.z=l,this}makePerspective(t,e,i,s,n,r,o=ss,l=!1){const h=this.elements,c=2*n/(e-t),u=2*n/(i-s),d=(e+t)/(e-t),f=(i+s)/(i-s);let m,v;if(l)m=n/(r-n),v=r*n/(r-n);else if(o===ss)m=-(r+n)/(r-n),v=-2*r*n/(r-n);else if(o===fo)m=-r/(r-n),v=-r*n/(r-n);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return h[0]=c,h[4]=0,h[8]=d,h[12]=0,h[1]=0,h[5]=u,h[9]=f,h[13]=0,h[2]=0,h[6]=0,h[10]=m,h[14]=v,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,i,s,n,r,o=ss,l=!1){const h=this.elements,c=2/(e-t),u=2/(i-s),d=-(e+t)/(e-t),f=-(i+s)/(i-s);let m,v;if(l)m=1/(r-n),v=r/(r-n);else if(o===ss)m=-2/(r-n),v=-(r+n)/(r-n);else if(o===fo)m=-1/(r-n),v=-n/(r-n);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return h[0]=c,h[4]=0,h[8]=0,h[12]=d,h[1]=0,h[5]=u,h[9]=0,h[13]=f,h[2]=0,h[6]=0,h[10]=m,h[14]=v,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const _n=new L,Oi=new ge,sm=new L(0,0,0),nm=new L(1,1,1),Es=new L,er=new L,Si=new L,$c=new ge,Zc=new aa;class un{constructor(t=0,e=0,i=0,s=un.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,n=s[0],r=s[4],o=s[8],l=s[1],h=s[5],c=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,f),this._z=Math.atan2(-r,n)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-u,n),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-r,h)):(this._y=0,this._z=Math.atan2(l,n));break;case"ZYX":this._y=Math.asin(-Kt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,n)):(this._x=0,this._z=Math.atan2(-r,h));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-u,n)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Kt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(o,n)):(this._x=Math.atan2(-c,f),this._y=0);break;default:kt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return $c.makeRotationFromQuaternion(t),this.setFromRotationMatrix($c,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Zc.setFromEuler(this),this.setFromQuaternion(Zc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}un.DEFAULT_ORDER="XYZ";class hf{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let am=0;const Kc=new L,yn=new aa,cs=new ge,ir=new L,ua=new L,rm=new L,om=new aa,Yc=new L(1,0,0),Qc=new L(0,1,0),Jc=new L(0,0,1),tu={type:"added"},lm={type:"removed"},Mn={type:"childadded",child:null},Go={type:"childremoved",child:null};class Ze extends fn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:am++}),this.uuid=zs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ze.DEFAULT_UP.clone();const t=new L,e=new un,i=new aa,s=new L(1,1,1);function n(){i.setFromEuler(e,!1)}function r(){e.setFromQuaternion(i,void 0,!1)}e._onChange(n),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ge},normalMatrix:{value:new Bt}}),this.matrix=new ge,this.matrixWorld=new ge,this.matrixAutoUpdate=Ze.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return yn.setFromAxisAngle(t,e),this.quaternion.multiply(yn),this}rotateOnWorldAxis(t,e){return yn.setFromAxisAngle(t,e),this.quaternion.premultiply(yn),this}rotateX(t){return this.rotateOnAxis(Yc,t)}rotateY(t){return this.rotateOnAxis(Qc,t)}rotateZ(t){return this.rotateOnAxis(Jc,t)}translateOnAxis(t,e){return Kc.copy(t).applyQuaternion(this.quaternion),this.position.add(Kc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Yc,t)}translateY(t){return this.translateOnAxis(Qc,t)}translateZ(t){return this.translateOnAxis(Jc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(cs.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ir.copy(t):ir.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ua.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cs.lookAt(ua,ir,this.up):cs.lookAt(ir,ua,this.up),this.quaternion.setFromRotationMatrix(cs),s&&(cs.extractRotation(s.matrixWorld),yn.setFromRotationMatrix(cs),this.quaternion.premultiply(yn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Qt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(tu),Mn.child=t,this.dispatchEvent(Mn),Mn.child=null):Qt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(lm),Go.child=t,this.dispatchEvent(Go),Go.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),cs.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),cs.multiply(t.parent.matrixWorld)),t.applyMatrix4(cs),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(tu),Mn.child=t,this.dispatchEvent(Mn),Mn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const r=this.children[i].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let n=0,r=s.length;n<r;n++)s[n].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ua,t,rm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ua,om,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,s=t.z,n=this.matrix.elements;n[12]+=e-n[0]*e-n[4]*i-n[8]*s,n[13]+=i-n[1]*e-n[5]*i-n[9]*s,n[14]+=s-n[2]*e-n[6]*i-n[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateWorldMatrix(!1,!0,i)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function n(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=n(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){const u=l[h];n(t.shapes,u)}else n(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(n(t.materials,this.material[l]));s.material=o}else s.material=n(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(n(t.animations,l))}}if(e){const o=r(t.geometries),l=r(t.materials),h=r(t.textures),c=r(t.images),u=r(t.shapes),d=r(t.skeletons),f=r(t.animations),m=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),h.length>0&&(i.textures=h),c.length>0&&(i.images=c),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),m.length>0&&(i.nodes=m)}return i.object=s,i;function r(o){const l=[];for(const h in o){const c=o[h];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Ze.DEFAULT_UP=new L(0,1,0);Ze.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Da extends Ze{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hm={type:"move"};class Vo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Da,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Da,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Da,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,n=null,r=null;const o=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){r=!0;for(const v of t.hand.values()){const g=e.getJointPose(v,i),p=this._getHandJoint(h,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const c=h.joints["index-finger-tip"],u=h.joints["thumb-tip"],d=c.position.distanceTo(u.position),f=.02,m=.005;h.inputState.pinching&&d>f+m?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&d<=f-m&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(n=e.getPose(t.gripSpace,i),n!==null&&(l.matrix.fromArray(n.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,n.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(n.linearVelocity)):l.hasLinearVelocity=!1,n.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(n.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&n!==null&&(s=n),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(hm)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=n!==null),h!==null&&(h.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Da;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const cf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cs={h:0,s:0,l:0},sr={h:0,s:0,l:0};function Wo(a,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?a+(t-a)*6*e:e<1/2?t:e<2/3?a+(t-a)*6*(2/3-e):a}class zt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Me){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Zt.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=Zt.workingColorSpace){if(t=Kp(t,1),e=Kt(e,0,1),i=Kt(i,0,1),e===0)this.r=this.g=this.b=i;else{const n=i<=.5?i*(1+e):i+e-i*e,r=2*i-n;this.r=Wo(r,n,t+1/3),this.g=Wo(r,n,t),this.b=Wo(r,n,t-1/3)}return Zt.colorSpaceToWorking(this,s),this}setStyle(t,e=Me){function i(n){n!==void 0&&parseFloat(n)<1&&kt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let n;const r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(n=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(n[4]),this.setRGB(Math.min(255,parseInt(n[1],10))/255,Math.min(255,parseInt(n[2],10))/255,Math.min(255,parseInt(n[3],10))/255,e);if(n=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(n[4]),this.setRGB(Math.min(100,parseInt(n[1],10))/100,Math.min(100,parseInt(n[2],10))/100,Math.min(100,parseInt(n[3],10))/100,e);break;case"hsl":case"hsla":if(n=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(n[4]),this.setHSL(parseFloat(n[1])/360,parseFloat(n[2])/100,parseFloat(n[3])/100,e);break;default:kt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const n=s[1],r=n.length;if(r===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(n,16),e);kt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Me){const i=cf[t.toLowerCase()];return i!==void 0?this.setHex(i,e):kt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ms(t.r),this.g=Ms(t.g),this.b=Ms(t.b),this}copyLinearToSRGB(t){return this.r=Kn(t.r),this.g=Kn(t.g),this.b=Kn(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Me){return Zt.workingToColorSpace(ni.copy(this),t),Math.round(Kt(ni.r*255,0,255))*65536+Math.round(Kt(ni.g*255,0,255))*256+Math.round(Kt(ni.b*255,0,255))}getHexString(t=Me){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.workingToColorSpace(ni.copy(this),e);const i=ni.r,s=ni.g,n=ni.b,r=Math.max(i,s,n),o=Math.min(i,s,n);let l,h;const c=(o+r)/2;if(o===r)l=0,h=0;else{const u=r-o;switch(h=c<=.5?u/(r+o):u/(2-r-o),r){case i:l=(s-n)/u+(s<n?6:0);break;case s:l=(n-i)/u+2;break;case n:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=h,t.l=c,t}getRGB(t,e=Zt.workingColorSpace){return Zt.workingToColorSpace(ni.copy(this),e),t.r=ni.r,t.g=ni.g,t.b=ni.b,t}getStyle(t=Me){Zt.workingToColorSpace(ni.copy(this),t);const e=ni.r,i=ni.g,s=ni.b;return t!==Me?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Cs),this.setHSL(Cs.h+t,Cs.s+e,Cs.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Cs),t.getHSL(sr);const i=ko(Cs.h,sr.h,e),s=ko(Cs.s,sr.s,e),n=ko(Cs.l,sr.l,e);return this.setHSL(i,s,n),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,n=t.elements;return this.r=n[0]*e+n[3]*i+n[6]*s,this.g=n[1]*e+n[4]*i+n[7]*s,this.b=n[2]*e+n[5]*i+n[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ni=new zt;zt.NAMES=cf;class hc{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new zt(t),this.density=e}clone(){return new hc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class cm extends Ze{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new un,this.environmentIntensity=1,this.environmentRotation=new un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Bi=new L,us=new L,Xo=new L,ds=new L,wn=new L,Sn=new L,eu=new L,qo=new L,jo=new L,$o=new L,Zo=new De,Ko=new De,Yo=new De;class zi{constructor(t=new L,e=new L,i=new L){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Bi.subVectors(t,e),s.cross(Bi);const n=s.lengthSq();return n>0?s.multiplyScalar(1/Math.sqrt(n)):s.set(0,0,0)}static getBarycoord(t,e,i,s,n){Bi.subVectors(s,e),us.subVectors(i,e),Xo.subVectors(t,e);const r=Bi.dot(Bi),o=Bi.dot(us),l=Bi.dot(Xo),h=us.dot(us),c=us.dot(Xo),u=r*h-o*o;if(u===0)return n.set(0,0,0),null;const d=1/u,f=(h*l-o*c)*d,m=(r*c-o*l)*d;return n.set(1-f-m,m,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,ds)===null?!1:ds.x>=0&&ds.y>=0&&ds.x+ds.y<=1}static getInterpolation(t,e,i,s,n,r,o,l){return this.getBarycoord(t,e,i,s,ds)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(n,ds.x),l.addScaledVector(r,ds.y),l.addScaledVector(o,ds.z),l)}static getInterpolatedAttribute(t,e,i,s,n,r){return Zo.setScalar(0),Ko.setScalar(0),Yo.setScalar(0),Zo.fromBufferAttribute(t,e),Ko.fromBufferAttribute(t,i),Yo.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(Zo,n.x),r.addScaledVector(Ko,n.y),r.addScaledVector(Yo,n.z),r}static isFrontFacing(t,e,i,s){return Bi.subVectors(i,e),us.subVectors(t,e),Bi.cross(us).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Bi.subVectors(this.c,this.b),us.subVectors(this.a,this.b),Bi.cross(us).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return zi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return zi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,n){return zi.getInterpolation(t,this.a,this.b,this.c,e,i,s,n)}containsPoint(t){return zi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return zi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,n=this.c;let r,o;wn.subVectors(s,i),Sn.subVectors(n,i),qo.subVectors(t,i);const l=wn.dot(qo),h=Sn.dot(qo);if(l<=0&&h<=0)return e.copy(i);jo.subVectors(t,s);const c=wn.dot(jo),u=Sn.dot(jo);if(c>=0&&u<=c)return e.copy(s);const d=l*u-c*h;if(d<=0&&l>=0&&c<=0)return r=l/(l-c),e.copy(i).addScaledVector(wn,r);$o.subVectors(t,n);const f=wn.dot($o),m=Sn.dot($o);if(m>=0&&f<=m)return e.copy(n);const v=f*h-l*m;if(v<=0&&h>=0&&m<=0)return o=h/(h-m),e.copy(i).addScaledVector(Sn,o);const g=c*m-f*u;if(g<=0&&u-c>=0&&f-m>=0)return eu.subVectors(n,s),o=(u-c)/(u-c+(f-m)),e.copy(s).addScaledVector(eu,o);const p=1/(g+v+d);return r=v*p,o=d*p,e.copy(i).addScaledVector(wn,r).addScaledVector(Sn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class pn{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Hi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Hi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Hi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const n=i.getAttribute("position");if(e===!0&&n!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=n.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,Hi):Hi.fromBufferAttribute(n,r),Hi.applyMatrix4(t.matrixWorld),this.expandByPoint(Hi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),nr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),nr.copy(i.boundingBox)),nr.applyMatrix4(t.matrixWorld),this.union(nr)}const s=t.children;for(let n=0,r=s.length;n<r;n++)this.expandByObject(s[n],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Hi),Hi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(da),ar.subVectors(this.max,da),An.subVectors(t.a,da),Tn.subVectors(t.b,da),En.subVectors(t.c,da),Rs.subVectors(Tn,An),Ps.subVectors(En,Tn),Hs.subVectors(An,En);let e=[0,-Rs.z,Rs.y,0,-Ps.z,Ps.y,0,-Hs.z,Hs.y,Rs.z,0,-Rs.x,Ps.z,0,-Ps.x,Hs.z,0,-Hs.x,-Rs.y,Rs.x,0,-Ps.y,Ps.x,0,-Hs.y,Hs.x,0];return!Qo(e,An,Tn,En,ar)||(e=[1,0,0,0,1,0,0,0,1],!Qo(e,An,Tn,En,ar))?!1:(rr.crossVectors(Rs,Ps),e=[rr.x,rr.y,rr.z],Qo(e,An,Tn,En,ar))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Hi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Hi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(fs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),fs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),fs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),fs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),fs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),fs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),fs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),fs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(fs),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const fs=[new L,new L,new L,new L,new L,new L,new L,new L],Hi=new L,nr=new pn,An=new L,Tn=new L,En=new L,Rs=new L,Ps=new L,Hs=new L,da=new L,ar=new L,rr=new L,Gs=new L;function Qo(a,t,e,i,s){for(let n=0,r=a.length-3;n<=r;n+=3){Gs.fromArray(a,n);const o=s.x*Math.abs(Gs.x)+s.y*Math.abs(Gs.y)+s.z*Math.abs(Gs.z),l=t.dot(Gs),h=e.dot(Gs),c=i.dot(Gs);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>o)return!1}return!0}const Be=new L,or=new vt;let um=0;class me extends fn{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:um++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Ph,this.updateRanges=[],this.gpuType=Xi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,n=this.itemSize;s<n;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)or.fromBufferAttribute(this,e),or.applyMatrix3(t),this.setXY(e,or.x,or.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix3(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix4(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Be.fromBufferAttribute(this,e),Be.applyNormalMatrix(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Be.fromBufferAttribute(this,e),Be.transformDirection(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=is(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ue(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=is(e,this.array)),e}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=is(e,this.array)),e}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=is(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=is(e,this.array)),e}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array),s=ue(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,n){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array),s=ue(s,this.array),n=ue(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=n,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ph&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class uf extends me{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class df extends me{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class ve extends me{constructor(t,e,i){super(new Float32Array(t),e,i)}}const dm=new pn,fa=new L,Jo=new L;class ra{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):dm.setFromPoints(t).getCenter(i);let s=0;for(let n=0,r=t.length;n<r;n++)s=Math.max(s,i.distanceToSquared(t[n]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;fa.subVectors(t,this.center);const e=fa.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(fa,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Jo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(fa.copy(t.center).add(Jo)),this.expandByPoint(fa.copy(t.center).sub(Jo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let fm=0;const Fi=new ge,tl=new Ze,Cn=new L,Ai=new pn,pa=new pn,$e=new L;class Ee extends fn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fm++}),this.uuid=zs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(qp(t)?df:uf)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const n=new Bt().getNormalMatrix(t);i.applyNormalMatrix(n),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Fi.makeRotationFromQuaternion(t),this.applyMatrix4(Fi),this}rotateX(t){return Fi.makeRotationX(t),this.applyMatrix4(Fi),this}rotateY(t){return Fi.makeRotationY(t),this.applyMatrix4(Fi),this}rotateZ(t){return Fi.makeRotationZ(t),this.applyMatrix4(Fi),this}translate(t,e,i){return Fi.makeTranslation(t,e,i),this.applyMatrix4(Fi),this}scale(t,e,i){return Fi.makeScale(t,e,i),this.applyMatrix4(Fi),this}lookAt(t){return tl.lookAt(t),tl.updateMatrix(),this.applyMatrix4(tl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cn).negate(),this.translate(Cn.x,Cn.y,Cn.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,n=t.length;s<n;s++){const r=t[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new ve(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const n=t[s];e.setXYZ(s,n.x,n.y,n.z||0)}t.length>e.count&&kt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Qt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const n=e[i];Ai.setFromBufferAttribute(n),this.morphTargetsRelative?($e.addVectors(this.boundingBox.min,Ai.min),this.boundingBox.expandByPoint($e),$e.addVectors(this.boundingBox.max,Ai.max),this.boundingBox.expandByPoint($e)):(this.boundingBox.expandByPoint(Ai.min),this.boundingBox.expandByPoint(Ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ra);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Qt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const i=this.boundingSphere.center;if(Ai.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const o=e[n];pa.setFromBufferAttribute(o),this.morphTargetsRelative?($e.addVectors(Ai.min,pa.min),Ai.expandByPoint($e),$e.addVectors(Ai.max,pa.max),Ai.expandByPoint($e)):(Ai.expandByPoint(pa.min),Ai.expandByPoint(pa.max))}Ai.getCenter(i);let s=0;for(let n=0,r=t.count;n<r;n++)$e.fromBufferAttribute(t,n),s=Math.max(s,i.distanceToSquared($e));if(e)for(let n=0,r=e.length;n<r;n++){const o=e[n],l=this.morphTargetsRelative;for(let h=0,c=o.count;h<c;h++)$e.fromBufferAttribute(o,h),l&&(Cn.fromBufferAttribute(t,h),$e.add(Cn)),s=Math.max(s,i.distanceToSquared($e))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Qt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Qt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,n=e.uv;let r=this.getAttribute("tangent");(r===void 0||r.count!==i.count)&&(r=new me(new Float32Array(4*i.count),4),this.setAttribute("tangent",r));const o=[],l=[];for(let b=0;b<i.count;b++)o[b]=new L,l[b]=new L;const h=new L,c=new L,u=new L,d=new vt,f=new vt,m=new vt,v=new L,g=new L;function p(b,x,E){h.fromBufferAttribute(i,b),c.fromBufferAttribute(i,x),u.fromBufferAttribute(i,E),d.fromBufferAttribute(n,b),f.fromBufferAttribute(n,x),m.fromBufferAttribute(n,E),c.sub(h),u.sub(h),f.sub(d),m.sub(d);const P=1/(f.x*m.y-m.x*f.y);isFinite(P)&&(v.copy(c).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(P),g.copy(u).multiplyScalar(f.x).addScaledVector(c,-m.x).multiplyScalar(P),o[b].add(v),o[x].add(v),o[E].add(v),l[b].add(g),l[x].add(g),l[E].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let b=0,x=w.length;b<x;++b){const E=w[b],P=E.start,F=E.count;for(let G=P,j=P+F;G<j;G+=3)p(t.getX(G+0),t.getX(G+1),t.getX(G+2))}const A=new L,y=new L,T=new L,M=new L;function C(b){T.fromBufferAttribute(s,b),M.copy(T);const x=o[b];A.copy(x),A.sub(T.multiplyScalar(T.dot(x))).normalize(),y.crossVectors(M,x);const P=y.dot(l[b])<0?-1:1;r.setXYZW(b,A.x,A.y,A.z,P)}for(let b=0,x=w.length;b<x;++b){const E=w[b],P=E.start,F=E.count;for(let G=P,j=P+F;G<j;G+=3)C(t.getX(G+0)),C(t.getX(G+1)),C(t.getX(G+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new me(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const s=new L,n=new L,r=new L,o=new L,l=new L,h=new L,c=new L,u=new L;if(t)for(let d=0,f=t.count;d<f;d+=3){const m=t.getX(d+0),v=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,m),n.fromBufferAttribute(e,v),r.fromBufferAttribute(e,g),c.subVectors(r,n),u.subVectors(s,n),c.cross(u),o.fromBufferAttribute(i,m),l.fromBufferAttribute(i,v),h.fromBufferAttribute(i,g),o.add(c),l.add(c),h.add(c),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(g,h.x,h.y,h.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),n.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),c.subVectors(r,n),u.subVectors(s,n),c.cross(u),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)$e.fromBufferAttribute(t,e),$e.normalize(),t.setXYZ(e,$e.x,$e.y,$e.z)}toNonIndexed(){function t(o,l){const h=o.array,c=o.itemSize,u=o.normalized,d=new h.constructor(l.length*c);let f=0,m=0;for(let v=0,g=l.length;v<g;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*c;for(let p=0;p<c;p++)d[m++]=h[f++]}return new me(d,c,u)}if(this.index===null)return kt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ee,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],h=t(l,i);e.setAttribute(o,h)}const n=this.morphAttributes;for(const o in n){const l=[],h=n[o];for(let c=0,u=h.length;c<u;c++){const d=h[c],f=t(d,i);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const h=r[o];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const h=i[l];t.data.attributes[l]=h.toJSON(t.data)}const s={};let n=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],c=[];for(let u=0,d=h.length;u<d;u++){const f=h[u];c.push(f.toJSON(t.data))}c.length>0&&(s[l]=c,n=!0)}n&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const h in s){const c=s[h];this.setAttribute(h,c.clone(e))}const n=t.morphAttributes;for(const h in n){const c=[],u=n[h];for(let d=0,f=u.length;d<f;d++)c.push(u[d].clone(e));this.morphAttributes[h]=c}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let h=0,c=r.length;h<c;h++){const u=r[h];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pm{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ph,this.updateRanges=[],this.version=0,this.uuid=zs()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,n=this.stride;s<n;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zs()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zs()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ui=new L;class mo{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)ui.fromBufferAttribute(this,e),ui.applyMatrix4(t),this.setXYZ(e,ui.x,ui.y,ui.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ui.fromBufferAttribute(this,e),ui.applyNormalMatrix(t),this.setXYZ(e,ui.x,ui.y,ui.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ui.fromBufferAttribute(this,e),ui.transformDirection(t),this.setXYZ(e,ui.x,ui.y,ui.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=is(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ue(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=is(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=is(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=is(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=is(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array),s=ue(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array),s=ue(s,this.array),n=ue(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=n,this}clone(t){if(t===void 0){po("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)e.push(this.data.array[s+n])}return new me(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new mo(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){po("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)e.push(this.data.array[s+n])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let mm=0;class oa extends fn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mm++}),this.uuid=zs(),this.name="",this.type="Material",this.blending=as,this.side=ks,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wl,this.blendDst=Xl,this.blendEquation=en,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=Qn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xn,this.stencilZFail=xn,this.stencilZPass=xn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){kt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){kt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==as&&(i.blending=this.blending),this.side!==ks&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Wl&&(i.blendSrc=this.blendSrc),this.blendDst!==Xl&&(i.blendDst=this.blendDst),this.blendEquation!==en&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Qn&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==xn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==xn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(n){const r=[];for(const o in n){const l=n[o];delete l.metadata,r.push(l)}return r}if(e){const n=s(t.textures),r=s(t.images);n.length>0&&(i.textures=n),r.length>0&&(i.images=r)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new zt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new vt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new vt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let n=0;n!==s;++n)i[n]=e[n].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ta extends oa{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Rn;const ma=new L,Pn=new L,Fn=new L,Ln=new vt,ga=new vt,ff=new ge,lr=new L,va=new L,hr=new L,iu=new vt,el=new vt,su=new vt;class Oa extends Ze{constructor(t=new ta){if(super(),this.isSprite=!0,this.type="Sprite",Rn===void 0){Rn=new Ee;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new pm(e,5);Rn.setIndex([0,1,2,0,2,3]),Rn.setAttribute("position",new mo(i,3,0,!1)),Rn.setAttribute("uv",new mo(i,2,3,!1))}this.geometry=Rn,this.material=t,this.center=new vt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&Qt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Pn.setFromMatrixScale(this.matrixWorld),ff.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Fn.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Pn.multiplyScalar(-Fn.z);const i=this.material.rotation;let s,n;i!==0&&(n=Math.cos(i),s=Math.sin(i));const r=this.center;cr(lr.set(-.5,-.5,0),Fn,r,Pn,s,n),cr(va.set(.5,-.5,0),Fn,r,Pn,s,n),cr(hr.set(.5,.5,0),Fn,r,Pn,s,n),iu.set(0,0),el.set(1,0),su.set(1,1);let o=t.ray.intersectTriangle(lr,va,hr,!1,ma);if(o===null&&(cr(va.set(-.5,.5,0),Fn,r,Pn,s,n),el.set(0,1),o=t.ray.intersectTriangle(lr,hr,va,!1,ma),o===null))return;const l=t.ray.origin.distanceTo(ma);l<t.near||l>t.far||e.push({distance:l,point:ma.clone(),uv:zi.getInterpolation(ma,lr,va,hr,iu,el,su,new vt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function cr(a,t,e,i,s,n){Ln.subVectors(a,e).addScalar(.5).multiply(i),s!==void 0?(ga.x=n*Ln.x-s*Ln.y,ga.y=s*Ln.x+n*Ln.y):ga.copy(Ln),a.copy(t),a.x+=ga.x,a.y+=ga.y,a.applyMatrix4(ff)}const ps=new L,il=new L,ur=new L,Fs=new L,sl=new L,dr=new L,nl=new L;class pf{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ps)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ps.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ps.copy(this.origin).addScaledVector(this.direction,e),ps.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){il.copy(t).add(e).multiplyScalar(.5),ur.copy(e).sub(t).normalize(),Fs.copy(this.origin).sub(il);const n=t.distanceTo(e)*.5,r=-this.direction.dot(ur),o=Fs.dot(this.direction),l=-Fs.dot(ur),h=Fs.lengthSq(),c=Math.abs(1-r*r);let u,d,f,m;if(c>0)if(u=r*l-o,d=r*o-l,m=n*c,u>=0)if(d>=-m)if(d<=m){const v=1/c;u*=v,d*=v,f=u*(u+r*d+2*o)+d*(r*u+d+2*l)+h}else d=n,u=Math.max(0,-(r*d+o)),f=-u*u+d*(d+2*l)+h;else d=-n,u=Math.max(0,-(r*d+o)),f=-u*u+d*(d+2*l)+h;else d<=-m?(u=Math.max(0,-(-r*n+o)),d=u>0?-n:Math.min(Math.max(-n,-l),n),f=-u*u+d*(d+2*l)+h):d<=m?(u=0,d=Math.min(Math.max(-n,-l),n),f=d*(d+2*l)+h):(u=Math.max(0,-(r*n+o)),d=u>0?n:Math.min(Math.max(-n,-l),n),f=-u*u+d*(d+2*l)+h);else d=r>0?-n:n,u=Math.max(0,-(r*d+o)),f=-u*u+d*(d+2*l)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(il).addScaledVector(ur,d),f}intersectSphere(t,e){ps.subVectors(t.center,this.origin);const i=ps.dot(this.direction),s=ps.dot(ps)-i*i,n=t.radius*t.radius;if(s>n)return null;const r=Math.sqrt(n-s),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,n,r,o,l;const h=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,d=this.origin;return h>=0?(i=(t.min.x-d.x)*h,s=(t.max.x-d.x)*h):(i=(t.max.x-d.x)*h,s=(t.min.x-d.x)*h),c>=0?(n=(t.min.y-d.y)*c,r=(t.max.y-d.y)*c):(n=(t.max.y-d.y)*c,r=(t.min.y-d.y)*c),i>r||n>s||((n>i||isNaN(i))&&(i=n),(r<s||isNaN(s))&&(s=r),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,ps)!==null}intersectTriangle(t,e,i,s,n){sl.subVectors(e,t),dr.subVectors(i,t),nl.crossVectors(sl,dr);let r=this.direction.dot(nl),o;if(r>0){if(s)return null;o=1}else if(r<0)o=-1,r=-r;else return null;Fs.subVectors(this.origin,t);const l=o*this.direction.dot(dr.crossVectors(Fs,dr));if(l<0)return null;const h=o*this.direction.dot(sl.cross(Fs));if(h<0||l+h>r)return null;const c=-o*Fs.dot(nl);return c<0?null:this.at(c/r,n)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Mi extends oa{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=Qd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const nu=new ge,Vs=new pf,fr=new ra,au=new L,pr=new L,mr=new L,gr=new L,al=new L,vr=new L,ru=new L,xr=new L;class we extends Ze{constructor(t=new Ee,e=new Mi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,r=s.length;n<r;n++){const o=s[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=n}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,n=i.morphAttributes.position,r=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(n&&o){vr.set(0,0,0);for(let l=0,h=n.length;l<h;l++){const c=o[l],u=n[l];c!==0&&(al.fromBufferAttribute(u,t),r?vr.addScaledVector(al,c):vr.addScaledVector(al.sub(e),c))}e.add(vr)}return e}raycast(t,e){const i=this.geometry,s=this.material,n=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),fr.copy(i.boundingSphere),fr.applyMatrix4(n),Vs.copy(t.ray).recast(t.near),!(fr.containsPoint(Vs.origin)===!1&&(Vs.intersectSphere(fr,au)===null||Vs.origin.distanceToSquared(au)>(t.far-t.near)**2))&&(nu.copy(n).invert(),Vs.copy(t.ray).applyMatrix4(nu),!(i.boundingBox!==null&&Vs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Vs)))}_computeIntersections(t,e,i){let s;const n=this.geometry,r=this.material,o=n.index,l=n.attributes.position,h=n.attributes.uv,c=n.attributes.uv1,u=n.attributes.normal,d=n.groups,f=n.drawRange;if(o!==null)if(Array.isArray(r))for(let m=0,v=d.length;m<v;m++){const g=d[m],p=r[g.materialIndex],w=Math.max(g.start,f.start),A=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let y=w,T=A;y<T;y+=3){const M=o.getX(y),C=o.getX(y+1),b=o.getX(y+2);s=br(this,p,t,i,h,c,u,M,C,b),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let g=m,p=v;g<p;g+=3){const w=o.getX(g),A=o.getX(g+1),y=o.getX(g+2);s=br(this,r,t,i,h,c,u,w,A,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let m=0,v=d.length;m<v;m++){const g=d[m],p=r[g.materialIndex],w=Math.max(g.start,f.start),A=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let y=w,T=A;y<T;y+=3){const M=y,C=y+1,b=y+2;s=br(this,p,t,i,h,c,u,M,C,b),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let g=m,p=v;g<p;g+=3){const w=g,A=g+1,y=g+2;s=br(this,r,t,i,h,c,u,w,A,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function gm(a,t,e,i,s,n,r,o){let l;if(t.side===bi?l=i.intersectTriangle(r,n,s,!0,o):l=i.intersectTriangle(s,n,r,t.side===ks,o),l===null)return null;xr.copy(o),xr.applyMatrix4(a.matrixWorld);const h=e.ray.origin.distanceTo(xr);return h<e.near||h>e.far?null:{distance:h,point:xr.clone(),object:a}}function br(a,t,e,i,s,n,r,o,l,h){a.getVertexPosition(o,pr),a.getVertexPosition(l,mr),a.getVertexPosition(h,gr);const c=gm(a,t,e,i,pr,mr,gr,ru);if(c){const u=new L;zi.getBarycoord(ru,pr,mr,gr,u),s&&(c.uv=zi.getInterpolatedAttribute(s,o,l,h,u,new vt)),n&&(c.uv1=zi.getInterpolatedAttribute(n,o,l,h,u,new vt)),r&&(c.normal=zi.getInterpolatedAttribute(r,o,l,h,u,new L),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const d={a:o,b:l,c:h,normal:new L,materialIndex:0};zi.getNormal(pr,mr,gr,d.normal),c.face=d,c.barycoord=u}return c}class mf extends ei{constructor(t=null,e=1,i=1,s,n,r,o,l,h=oe,c=oe,u,d){super(null,r,o,l,h,c,s,n,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wt extends me{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Dn=new ge,ou=new ge,_r=[],lu=new pn,vm=new ge,xa=new we,ba=new ra;class Se extends we{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Wt(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,vm)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new pn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Dn),lu.copy(t.boundingBox).applyMatrix4(Dn),this.boundingBox.union(lu)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ra),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Dn),ba.copy(t.boundingSphere).applyMatrix4(Dn),this.boundingSphere.union(ba)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,n=i.length+1,r=t*n+1;for(let o=0;o<i.length;o++)i[o]=s[r+o]}raycast(t,e){const i=this.matrixWorld,s=this.count;if(xa.geometry=this.geometry,xa.material=this.material,xa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ba.copy(this.boundingSphere),ba.applyMatrix4(i),t.ray.intersectsSphere(ba)!==!1))for(let n=0;n<s;n++){this.getMatrixAt(n,Dn),ou.multiplyMatrices(i,Dn),xa.matrixWorld=ou,xa.raycast(t,_r);for(let r=0,o=_r.length;r<o;r++){const l=_r[r];l.instanceId=n,l.object=this,e.push(l)}_r.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Wt(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new mf(new Float32Array(s*this.count),s,this.count,ic,Xi));const n=this.morphTexture.source.data.data;let r=0;for(let h=0;h<i.length;h++)r+=i[h];const o=this.geometry.morphTargetsRelative?1:1-r,l=s*t;return n[l]=o,n.set(i,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const rl=new L,xm=new L,bm=new Bt;class Js{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=rl.subVectors(i,e).cross(xm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){const s=t.delta(rl),n=this.normal.dot(s);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/n;return i===!0&&(r<0||r>1)?null:e.copy(t.start).addScaledVector(s,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||bm.getNormalMatrix(t),s=this.coplanarPoint(rl).applyMatrix4(t),n=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(n),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ws=new ra,_m=new vt(.5,.5),yr=new L;class gf{constructor(t=new Js,e=new Js,i=new Js,s=new Js,n=new Js,r=new Js){this.planes=[t,e,i,s,n,r]}set(t,e,i,s,n,r){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(n),o[5].copy(r),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ss,i=!1){const s=this.planes,n=t.elements,r=n[0],o=n[1],l=n[2],h=n[3],c=n[4],u=n[5],d=n[6],f=n[7],m=n[8],v=n[9],g=n[10],p=n[11],w=n[12],A=n[13],y=n[14],T=n[15];if(s[0].setComponents(h-r,f-c,p-m,T-w).normalize(),s[1].setComponents(h+r,f+c,p+m,T+w).normalize(),s[2].setComponents(h+o,f+u,p+v,T+A).normalize(),s[3].setComponents(h-o,f-u,p-v,T-A).normalize(),i)s[4].setComponents(l,d,g,y).normalize(),s[5].setComponents(h-l,f-d,p-g,T-y).normalize();else if(s[4].setComponents(h-l,f-d,p-g,T-y).normalize(),e===ss)s[5].setComponents(h+l,f+d,p+g,T+y).normalize();else if(e===fo)s[5].setComponents(l,d,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ws.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ws.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ws)}intersectsSprite(t){Ws.center.set(0,0,0);const e=_m.distanceTo(t.center);return Ws.radius=.7071067811865476+e,Ws.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ws)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let n=0;n<6;n++)if(e[n].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(yr.x=s.normal.x>0?t.max.x:t.min.x,yr.y=s.normal.y>0?t.max.y:t.min.y,yr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(yr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ym extends oa{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const hu=new ge,Lh=new pf,Mr=new ra,wr=new L;class cc extends Ze{constructor(t=new Ee,e=new ym){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,n=t.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Mr.copy(i.boundingSphere),Mr.applyMatrix4(s),Mr.radius+=n,t.ray.intersectsSphere(Mr)===!1)return;hu.copy(s).invert(),Lh.copy(t.ray).applyMatrix4(hu);const o=n/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,h=i.index,u=i.attributes.position;if(h!==null){const d=Math.max(0,r.start),f=Math.min(h.count,r.start+r.count);for(let m=d,v=f;m<v;m++){const g=h.getX(m);wr.fromBufferAttribute(u,g),cu(wr,g,l,s,t,e,this)}}else{const d=Math.max(0,r.start),f=Math.min(u.count,r.start+r.count);for(let m=d,v=f;m<v;m++)wr.fromBufferAttribute(u,m),cu(wr,m,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,r=s.length;n<r;n++){const o=s[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=n}}}}}function cu(a,t,e,i,s,n,r){const o=Lh.distanceSqToPoint(a);if(o<e){const l=new L;Lh.closestPointToPoint(a,l),l.applyMatrix4(i);const h=s.ray.origin.distanceTo(l);if(h<s.near||h>s.far)return;n.push({distance:h,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class vf extends ei{constructor(t=[],e=hn,i,s,n,r,o,l,h,c){super(t,e,i,s,n,r,o,l,h,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class fi extends ei{constructor(t,e,i,s,n,r,o,l,h){super(t,e,i,s,n,r,o,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ea extends ei{constructor(t,e,i=ls,s,n,r,o=oe,l=oe,h,c=ws,u=1){if(c!==ws&&c!==rn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,s,n,r,o,l,c,i,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new lc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Mm extends ea{constructor(t,e=ls,i=hn,s,n,r=oe,o=oe,l,h=ws){const c={width:t,height:t,depth:1},u=[c,c,c,c,c,c];super(t,t,e,i,s,n,r,o,l,h),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class xf extends ei{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class hs extends Ee{constructor(t=1,e=1,i=1,s=1,n=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:n,depthSegments:r};const o=this;s=Math.floor(s),n=Math.floor(n),r=Math.floor(r);const l=[],h=[],c=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,i,e,t,r,n,0),m("z","y","x",1,-1,i,e,-t,r,n,1),m("x","z","y",1,1,t,i,e,s,r,2),m("x","z","y",1,-1,t,i,-e,s,r,3),m("x","y","z",1,-1,t,e,i,s,n,4),m("x","y","z",-1,-1,t,e,-i,s,n,5),this.setIndex(l),this.setAttribute("position",new ve(h,3)),this.setAttribute("normal",new ve(c,3)),this.setAttribute("uv",new ve(u,2));function m(v,g,p,w,A,y,T,M,C,b,x){const E=y/C,P=T/b,F=y/2,G=T/2,j=M/2,N=C+1,W=b+1;let z=0,K=0;const tt=new L;for(let at=0;at<W;at++){const ut=at*P-G;for(let xt=0;xt<N;xt++){const Yt=xt*E-F;tt[v]=Yt*w,tt[g]=ut*A,tt[p]=j,h.push(tt.x,tt.y,tt.z),tt[v]=0,tt[g]=0,tt[p]=M>0?1:-1,c.push(tt.x,tt.y,tt.z),u.push(xt/C),u.push(1-at/b),z+=1}}for(let at=0;at<b;at++)for(let ut=0;ut<C;ut++){const xt=d+ut+N*at,Yt=d+ut+N*(at+1),Ce=d+(ut+1)+N*(at+1),ie=d+(ut+1)+N*at;l.push(xt,Yt,ie),l.push(Yt,Ce,ie),K+=6}o.addGroup(f,K,x),f+=K,d+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Ao extends Ee{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const n=[],r=[],o=[],l=[],h=new L,c=new vt;r.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=i+u/e*s;h.x=t*Math.cos(f),h.y=t*Math.sin(f),r.push(h.x,h.y,h.z),o.push(0,0,1),c.x=(r[d]/t+1)/2,c.y=(r[d+1]/t+1)/2,l.push(c.x,c.y)}for(let u=1;u<=e;u++)n.push(u,u+1,0);this.setIndex(n),this.setAttribute("position",new ve(r,3)),this.setAttribute("normal",new ve(o,3)),this.setAttribute("uv",new ve(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ao(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class mn extends Ee{constructor(t=1,e=1,i=1,s=32,n=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:n,openEnded:r,thetaStart:o,thetaLength:l};const h=this;s=Math.floor(s),n=Math.floor(n);const c=[],u=[],d=[],f=[];let m=0;const v=[],g=i/2;let p=0;w(),r===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(c),this.setAttribute("position",new ve(u,3)),this.setAttribute("normal",new ve(d,3)),this.setAttribute("uv",new ve(f,2));function w(){const y=new L,T=new L;let M=0;const C=(e-t)/i;for(let b=0;b<=n;b++){const x=[],E=b/n,P=E*(e-t)+t;for(let F=0;F<=s;F++){const G=F/s,j=G*l+o,N=Math.sin(j),W=Math.cos(j);T.x=P*N,T.y=-E*i+g,T.z=P*W,u.push(T.x,T.y,T.z),y.set(N,C,W).normalize(),d.push(y.x,y.y,y.z),f.push(G,1-E),x.push(m++)}v.push(x)}for(let b=0;b<s;b++)for(let x=0;x<n;x++){const E=v[x][b],P=v[x+1][b],F=v[x+1][b+1],G=v[x][b+1];(t>0||x!==0)&&(c.push(E,P,G),M+=3),(e>0||x!==n-1)&&(c.push(P,F,G),M+=3)}h.addGroup(p,M,0),p+=M}function A(y){const T=m,M=new vt,C=new L;let b=0;const x=y===!0?t:e,E=y===!0?1:-1;for(let F=1;F<=s;F++)u.push(0,g*E,0),d.push(0,E,0),f.push(.5,.5),m++;const P=m;for(let F=0;F<=s;F++){const j=F/s*l+o,N=Math.cos(j),W=Math.sin(j);C.x=x*W,C.y=g*E,C.z=x*N,u.push(C.x,C.y,C.z),d.push(0,E,0),M.x=N*.5+.5,M.y=W*.5*E+.5,f.push(M.x,M.y),m++}for(let F=0;F<s;F++){const G=T+F,j=P+F;y===!0?c.push(j,j+1,G):c.push(j+1,j,G),b+=3}h.addGroup(p,b,y===!0?1:2),p+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Os extends mn{constructor(t=1,e=1,i=32,s=1,n=!1,r=0,o=Math.PI*2){super(0,t,e,i,s,n,r,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:n,thetaStart:r,thetaLength:o}}static fromJSON(t){return new Os(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class To extends Ee{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const n=[],r=[];o(s),h(i),c(),this.setAttribute("position",new ve(n,3)),this.setAttribute("normal",new ve(n.slice(),3)),this.setAttribute("uv",new ve(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(w){const A=new L,y=new L,T=new L;for(let M=0;M<e.length;M+=3)f(e[M+0],A),f(e[M+1],y),f(e[M+2],T),l(A,y,T,w)}function l(w,A,y,T){const M=T+1,C=[];for(let b=0;b<=M;b++){C[b]=[];const x=w.clone().lerp(y,b/M),E=A.clone().lerp(y,b/M),P=M-b;for(let F=0;F<=P;F++)F===0&&b===M?C[b][F]=x:C[b][F]=x.clone().lerp(E,F/P)}for(let b=0;b<M;b++)for(let x=0;x<2*(M-b)-1;x++){const E=Math.floor(x/2);x%2===0?(d(C[b][E+1]),d(C[b+1][E]),d(C[b][E])):(d(C[b][E+1]),d(C[b+1][E+1]),d(C[b+1][E]))}}function h(w){const A=new L;for(let y=0;y<n.length;y+=3)A.x=n[y+0],A.y=n[y+1],A.z=n[y+2],A.normalize().multiplyScalar(w),n[y+0]=A.x,n[y+1]=A.y,n[y+2]=A.z}function c(){const w=new L;for(let A=0;A<n.length;A+=3){w.x=n[A+0],w.y=n[A+1],w.z=n[A+2];const y=g(w)/2/Math.PI+.5,T=p(w)/Math.PI+.5;r.push(y,1-T)}m(),u()}function u(){for(let w=0;w<r.length;w+=6){const A=r[w+0],y=r[w+2],T=r[w+4],M=Math.max(A,y,T),C=Math.min(A,y,T);M>.9&&C<.1&&(A<.2&&(r[w+0]+=1),y<.2&&(r[w+2]+=1),T<.2&&(r[w+4]+=1))}}function d(w){n.push(w.x,w.y,w.z)}function f(w,A){const y=w*3;A.x=t[y+0],A.y=t[y+1],A.z=t[y+2]}function m(){const w=new L,A=new L,y=new L,T=new L,M=new vt,C=new vt,b=new vt;for(let x=0,E=0;x<n.length;x+=9,E+=6){w.set(n[x+0],n[x+1],n[x+2]),A.set(n[x+3],n[x+4],n[x+5]),y.set(n[x+6],n[x+7],n[x+8]),M.set(r[E+0],r[E+1]),C.set(r[E+2],r[E+3]),b.set(r[E+4],r[E+5]),T.copy(w).add(A).add(y).divideScalar(3);const P=g(T);v(M,E+0,w,P),v(C,E+2,A,P),v(b,E+4,y,P)}}function v(w,A,y,T){T<0&&w.x===1&&(r[A]=w.x-1),y.x===0&&y.z===0&&(r[A]=T/2/Math.PI+.5)}function g(w){return Math.atan2(w.z,-w.x)}function p(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new To(t.vertices,t.indices,t.radius,t.detail)}}class uc extends To{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],n=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,n,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new uc(t.radius,t.detail)}}class Ba extends To{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ba(t.radius,t.detail)}}class Jt extends Ee{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const n=t/2,r=e/2,o=Math.floor(i),l=Math.floor(s),h=o+1,c=l+1,u=t/o,d=e/l,f=[],m=[],v=[],g=[];for(let p=0;p<c;p++){const w=p*d-r;for(let A=0;A<h;A++){const y=A*u-n;m.push(y,-w,0),v.push(0,0,1),g.push(A/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<o;w++){const A=w+h*p,y=w+h*(p+1),T=w+1+h*(p+1),M=w+1+h*p;f.push(A,y,M),f.push(y,T,M)}this.setIndex(f),this.setAttribute("position",new ve(m,3)),this.setAttribute("normal",new ve(v,3)),this.setAttribute("uv",new ve(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jt(t.width,t.height,t.widthSegments,t.heightSegments)}}class yi extends Ee{constructor(t=.5,e=1,i=32,s=1,n=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:n,thetaLength:r},i=Math.max(3,i),s=Math.max(1,s);const o=[],l=[],h=[],c=[];let u=t;const d=(e-t)/s,f=new L,m=new vt;for(let v=0;v<=s;v++){for(let g=0;g<=i;g++){const p=n+g/i*r;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),h.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,c.push(m.x,m.y)}u+=d}for(let v=0;v<s;v++){const g=v*(i+1);for(let p=0;p<i;p++){const w=p+g,A=w,y=w+i+1,T=w+i+2,M=w+1;o.push(A,y,M),o.push(y,T,M)}}this.setIndex(o),this.setAttribute("position",new ve(l,3)),this.setAttribute("normal",new ve(h,3)),this.setAttribute("uv",new ve(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yi(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Eo extends Ee{constructor(t=1,e=32,i=16,s=0,n=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:n,thetaStart:r,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(r+o,Math.PI);let h=0;const c=[],u=new L,d=new L,f=[],m=[],v=[],g=[];for(let p=0;p<=i;p++){const w=[],A=p/i,y=r+A*o,T=t*Math.cos(y),M=Math.sqrt(t*t-T*T);let C=0;p===0&&r===0?C=.5/e:p===i&&l===Math.PI&&(C=-.5/e);for(let b=0;b<=e;b++){const x=b/e,E=s+x*n;u.x=-M*Math.cos(E),u.y=T,u.z=M*Math.sin(E),m.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),g.push(x+C,1-A),w.push(h++)}c.push(w)}for(let p=0;p<i;p++)for(let w=0;w<e;w++){const A=c[p][w+1],y=c[p][w],T=c[p+1][w],M=c[p+1][w+1];(p!==0||r>0)&&f.push(A,y,M),(p!==i-1||l<Math.PI)&&f.push(y,T,M)}this.setIndex(f),this.setAttribute("position",new ve(m,3)),this.setAttribute("normal",new ve(v,3)),this.setAttribute("uv",new ve(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Eo(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function ia(a){const t={};for(const e in a){t[e]={};for(const i in a[e]){const s=a[e][i];if(uu(s))s.isRenderTargetTexture?(kt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(uu(s[0])){const n=[];for(let r=0,o=s.length;r<o;r++)n[r]=s[r].clone();t[e][i]=n}else t[e][i]=s.slice();else t[e][i]=s}}return t}function di(a){const t={};for(let e=0;e<a.length;e++){const i=ia(a[e]);for(const s in i)t[s]=i[s]}return t}function uu(a){return a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)}function wm(a){const t=[];for(let e=0;e<a.length;e++)t.push(a[e].clone());return t}function bf(a){const t=a.getRenderTarget();return t===null?a.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}const Ha={clone:ia,merge:di};var Sm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Am=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ot extends oa{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sm,this.fragmentShader=Am,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ia(t.uniforms),this.uniformsGroups=wm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const i in t.uniforms){const s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new zt().setHex(s.value);break;case"v2":this.uniforms[i].value=new vt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new L().fromArray(s.value);break;case"v4":this.uniforms[i].value=new De().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Bt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ge().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class _f extends Ot{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Tm extends oa{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Np,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Em extends oa{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const ol={enabled:!1,files:{},add:function(a,t){this.enabled!==!1&&(du(a)||(this.files[a]=t))},get:function(a){if(this.enabled!==!1&&!du(a))return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};function du(a){try{const t=a.slice(a.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class Cm{constructor(t,e,i){const s=this;let n=!1,r=0,o=0,l;const h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(c){o++,n===!1&&s.onStart!==void 0&&s.onStart(c,r,o),n=!0},this.itemEnd=function(c){r++,s.onProgress!==void 0&&s.onProgress(c,r,o),r===o&&(n=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(c){s.onError!==void 0&&s.onError(c)},this.resolveURL=function(c){return c=c.normalize("NFC"),l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,u){return h.push(c,u),this},this.removeHandler=function(c){const u=h.indexOf(c);return u!==-1&&h.splice(u,2),this},this.getHandler=function(c){for(let u=0,d=h.length;u<d;u+=2){const f=h[u],m=h[u+1];if(f.global&&(f.lastIndex=0),f.test(c))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Rm=new Cm;class dc{constructor(t){this.manager=t!==void 0?t:Rm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const i=this;return new Promise(function(s,n){i.load(t,s,e,n)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}dc.DEFAULT_MATERIAL_NAME="__DEFAULT";const In=new WeakMap;class Pm extends dc{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const n=this,r=ol.get(`image:${t}`);if(r!==void 0){if(r.complete===!0)n.manager.itemStart(t),setTimeout(function(){e&&e(r),n.manager.itemEnd(t)},0);else{let u=In.get(r);u===void 0&&(u=[],In.set(r,u)),u.push({onLoad:e,onError:s})}return r}const o=Na("img");function l(){c(),e&&e(this);const u=In.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}In.delete(this),n.manager.itemEnd(t)}function h(u){c(),s&&s(u),ol.remove(`image:${t}`);const d=In.get(this)||[];for(let f=0;f<d.length;f++){const m=d[f];m.onError&&m.onError(u)}In.delete(this),n.manager.itemError(t),n.manager.itemEnd(t)}function c(){o.removeEventListener("load",l,!1),o.removeEventListener("error",h,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",h,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ol.add(`image:${t}`,o),n.manager.itemStart(t),o.src=t,o}}class ja extends dc{constructor(t){super(t)}load(t,e,i,s){const n=new ei,r=new Pm(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(o){n.image=o,n.needsUpdate=!0,e!==void 0&&e(n)},i,s),n}}const Sr=new L,Ar=new aa,Ki=new L;class yf extends Ze{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ge,this.projectionMatrix=new ge,this.projectionMatrixInverse=new ge,this.coordinateSystem=ss,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Sr,Ar,Ki),Ki.x===1&&Ki.y===1&&Ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sr,Ar,Ki.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Sr,Ar,Ki),Ki.x===1&&Ki.y===1&&Ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sr,Ar,Ki.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ls=new L,fu=new vt,pu=new vt;class Di extends yf{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Fh*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(zo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Fh*2*Math.atan(Math.tan(zo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ls.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ls.x,Ls.y).multiplyScalar(-t/Ls.z),Ls.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ls.x,Ls.y).multiplyScalar(-t/Ls.z)}getViewSize(t,e){return this.getViewBounds(t,fu,pu),e.subVectors(pu,fu)}setViewOffset(t,e,i,s,n,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=n,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(zo*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,n=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,h=r.fullHeight;n+=r.offsetX*s/l,e-=r.offsetY*i/h,s*=r.width/l,i*=r.height/h}const o=this.filmOffset;o!==0&&(n+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(n,n+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class fc extends yf{constructor(t=-1,e=1,i=1,s=-1,n=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=n,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,n,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=n,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let n=i-t,r=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;n+=h*this.view.offsetX,r=n+h*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(n,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Un=-90,zn=1;class Fm extends Ze{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Di(Un,zn,t,e);s.layers=this.layers,this.add(s);const n=new Di(Un,zn,t,e);n.layers=this.layers,this.add(n);const r=new Di(Un,zn,t,e);r.layers=this.layers,this.add(r);const o=new Di(Un,zn,t,e);o.layers=this.layers,this.add(o);const l=new Di(Un,zn,t,e);l.layers=this.layers,this.add(l);const h=new Di(Un,zn,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,n,r,o,l]=e;for(const h of e)this.remove(h);if(t===ss)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),n.up.set(0,0,-1),n.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===fo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),n.up.set(0,0,1),n.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[n,r,o,l,h,c]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,n),t.setRenderTarget(i,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(u,d,f),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class Lm extends Di{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Dm{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Im.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function Im(){this._document.hidden===!1&&this.reset()}class Mf{static{Mf.prototype.isMatrix2=!0}constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){const n=this.elements;return n[0]=t,n[2]=e,n[1]=i,n[3]=s,this}}function mu(a,t,e,i){const s=Um(i);switch(e){case af:return a*t;case ic:return a*t/s.components*s.byteLength;case sc:return a*t/s.components*s.byteLength;case cn:return a*t*2/s.components*s.byteLength;case nc:return a*t*2/s.components*s.byteLength;case rf:return a*t*3/s.components*s.byteLength;case qi:return a*t*4/s.components*s.byteLength;case ac:return a*t*4/s.components*s.byteLength;case Yr:case Qr:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*8;case Jr:case to:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*16;case eh:case sh:return Math.max(a,16)*Math.max(t,8)/4;case th:case ih:return Math.max(a,8)*Math.max(t,8)/2;case nh:case ah:case oh:case lh:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*8;case rh:case lo:case hh:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*16;case ch:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*16;case uh:return Math.floor((a+4)/5)*Math.floor((t+3)/4)*16;case dh:return Math.floor((a+4)/5)*Math.floor((t+4)/5)*16;case fh:return Math.floor((a+5)/6)*Math.floor((t+4)/5)*16;case ph:return Math.floor((a+5)/6)*Math.floor((t+5)/6)*16;case mh:return Math.floor((a+7)/8)*Math.floor((t+4)/5)*16;case gh:return Math.floor((a+7)/8)*Math.floor((t+5)/6)*16;case vh:return Math.floor((a+7)/8)*Math.floor((t+7)/8)*16;case xh:return Math.floor((a+9)/10)*Math.floor((t+4)/5)*16;case bh:return Math.floor((a+9)/10)*Math.floor((t+5)/6)*16;case _h:return Math.floor((a+9)/10)*Math.floor((t+7)/8)*16;case yh:return Math.floor((a+9)/10)*Math.floor((t+9)/10)*16;case Mh:return Math.floor((a+11)/12)*Math.floor((t+9)/10)*16;case wh:return Math.floor((a+11)/12)*Math.floor((t+11)/12)*16;case Sh:case Ah:case Th:return Math.ceil(a/4)*Math.ceil(t/4)*16;case Eh:case Ch:return Math.ceil(a/4)*Math.ceil(t/4)*8;case ho:case Rh:return Math.ceil(a/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Um(a){switch(a){case Ui:case tf:return{byteLength:1,components:1};case za:case ef:case Ri:return{byteLength:2,components:1};case tc:case ec:return{byteLength:2,components:4};case ls:case Jh:case Xi:return{byteLength:4,components:1};case sf:case nf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qh}}));typeof window<"u"&&(window.__THREE__?kt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qh);function wf(){let a=null,t=!1,e=null,i=null;function s(n,r){e(n,r),i=a.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&a!==null&&(i=a.requestAnimationFrame(s),t=!0)},stop:function(){a!==null&&a.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(n){e=n},setContext:function(n){a=n}}}function zm(a){const t=new WeakMap;function e(o,l){const h=o.array,c=o.usage,u=h.byteLength,d=a.createBuffer();a.bindBuffer(l,d),a.bufferData(l,h,c),o.onUploadCallback();let f;if(h instanceof Float32Array)f=a.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)f=a.HALF_FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?f=a.HALF_FLOAT:f=a.UNSIGNED_SHORT;else if(h instanceof Int16Array)f=a.SHORT;else if(h instanceof Uint32Array)f=a.UNSIGNED_INT;else if(h instanceof Int32Array)f=a.INT;else if(h instanceof Int8Array)f=a.BYTE;else if(h instanceof Uint8Array)f=a.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)f=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:f,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,h){const c=l.array,u=l.updateRanges;if(a.bindBuffer(h,o),u.length===0)a.bufferSubData(h,0,c);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){const m=u[d],v=u[f];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){const v=u[f];a.bufferSubData(h,v.start*c.BYTES_PER_ELEMENT,c,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function n(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(a.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const c=t.get(o);(!c||c.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const h=t.get(o);if(h===void 0)t.set(o,e(o,l));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,o,l),h.version=o.version}}return{get:s,remove:n,update:r}}var km=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Nm=`#ifdef USE_ALPHAHASH
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
#endif`,Om=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vm=`#ifdef USE_AOMAP
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
#endif`,Wm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xm=`#ifdef USE_BATCHING
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
#endif`,qm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$m=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Km=`#ifdef USE_IRIDESCENCE
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
#endif`,Ym=`#ifdef USE_BUMPMAP
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
#endif`,Qm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Jm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,t0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,e0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,i0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,s0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,n0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,a0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,r0=`#define PI 3.141592653589793
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
} // validated`,o0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,l0=`vec3 transformedNormal = objectNormal;
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
#endif`,h0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,c0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,u0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,d0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,f0="gl_FragColor = linearToOutputTexel( gl_FragColor );",p0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,m0=`#ifdef USE_ENVMAP
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
#endif`,g0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,v0=`#ifdef USE_ENVMAP
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
#endif`,x0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,b0=`#ifdef USE_ENVMAP
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
#endif`,_0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,y0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,M0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,w0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,S0=`#ifdef USE_GRADIENTMAP
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
}`,A0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,T0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,E0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,C0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,R0=`#ifdef USE_ENVMAP
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
#endif`,P0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,F0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,L0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,D0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,I0=`PhysicalMaterial material;
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
#endif`,U0=`uniform sampler2D dfgLUT;
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
}`,z0=`
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
#endif`,k0=`#if defined( RE_IndirectDiffuse )
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
#endif`,N0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,O0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,B0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,H0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,G0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,V0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,W0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,X0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,q0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,j0=`#if defined( USE_POINTS_UV )
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
#endif`,$0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Z0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,K0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Y0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Q0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,J0=`#ifdef USE_MORPHTARGETS
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
#endif`,tg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ig=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,sg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ng=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ag=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,rg=`#ifdef USE_NORMALMAP
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
#endif`,og=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ug=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,fg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_g=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Mg=`float getShadowMask() {
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
}`,wg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sg=`#ifdef USE_SKINNING
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
#endif`,Ag=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tg=`#ifdef USE_SKINNING
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
#endif`,Eg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fg=`#ifdef USE_TRANSMISSION
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
#endif`,Lg=`#ifdef USE_TRANSMISSION
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
#endif`,Dg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ig=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ug=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ng=`uniform sampler2D t2D;
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
}`,Og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Hg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vg=`#include <common>
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
}`,Wg=`#if DEPTH_PACKING == 3200
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
}`,Xg=`#define DISTANCE
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
}`,qg=`#define DISTANCE
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
}`,jg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$g=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zg=`uniform float scale;
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
}`,Kg=`uniform vec3 diffuse;
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
}`,Yg=`#include <common>
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
}`,Qg=`uniform vec3 diffuse;
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
}`,Jg=`#define LAMBERT
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
}`,tv=`#define LAMBERT
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
}`,ev=`#define MATCAP
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
}`,iv=`#define MATCAP
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
}`,sv=`#define NORMAL
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
}`,nv=`#define NORMAL
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
}`,av=`#define PHONG
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
}`,rv=`#define PHONG
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
}`,ov=`#define STANDARD
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
}`,lv=`#define STANDARD
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
}`,hv=`#define TOON
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
}`,cv=`#define TOON
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
}`,uv=`uniform float size;
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
}`,dv=`uniform vec3 diffuse;
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
}`,fv=`#include <common>
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
}`,pv=`uniform vec3 color;
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
}`,mv=`uniform float rotation;
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
}`,gv=`uniform vec3 diffuse;
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
}`,Xt={alphahash_fragment:km,alphahash_pars_fragment:Nm,alphamap_fragment:Om,alphamap_pars_fragment:Bm,alphatest_fragment:Hm,alphatest_pars_fragment:Gm,aomap_fragment:Vm,aomap_pars_fragment:Wm,batching_pars_vertex:Xm,batching_vertex:qm,begin_vertex:jm,beginnormal_vertex:$m,bsdfs:Zm,iridescence_fragment:Km,bumpmap_pars_fragment:Ym,clipping_planes_fragment:Qm,clipping_planes_pars_fragment:Jm,clipping_planes_pars_vertex:t0,clipping_planes_vertex:e0,color_fragment:i0,color_pars_fragment:s0,color_pars_vertex:n0,color_vertex:a0,common:r0,cube_uv_reflection_fragment:o0,defaultnormal_vertex:l0,displacementmap_pars_vertex:h0,displacementmap_vertex:c0,emissivemap_fragment:u0,emissivemap_pars_fragment:d0,colorspace_fragment:f0,colorspace_pars_fragment:p0,envmap_fragment:m0,envmap_common_pars_fragment:g0,envmap_pars_fragment:v0,envmap_pars_vertex:x0,envmap_physical_pars_fragment:R0,envmap_vertex:b0,fog_vertex:_0,fog_pars_vertex:y0,fog_fragment:M0,fog_pars_fragment:w0,gradientmap_pars_fragment:S0,lightmap_pars_fragment:A0,lights_lambert_fragment:T0,lights_lambert_pars_fragment:E0,lights_pars_begin:C0,lights_toon_fragment:P0,lights_toon_pars_fragment:F0,lights_phong_fragment:L0,lights_phong_pars_fragment:D0,lights_physical_fragment:I0,lights_physical_pars_fragment:U0,lights_fragment_begin:z0,lights_fragment_maps:k0,lights_fragment_end:N0,lightprobes_pars_fragment:O0,logdepthbuf_fragment:B0,logdepthbuf_pars_fragment:H0,logdepthbuf_pars_vertex:G0,logdepthbuf_vertex:V0,map_fragment:W0,map_pars_fragment:X0,map_particle_fragment:q0,map_particle_pars_fragment:j0,metalnessmap_fragment:$0,metalnessmap_pars_fragment:Z0,morphinstance_vertex:K0,morphcolor_vertex:Y0,morphnormal_vertex:Q0,morphtarget_pars_vertex:J0,morphtarget_vertex:tg,normal_fragment_begin:eg,normal_fragment_maps:ig,normal_pars_fragment:sg,normal_pars_vertex:ng,normal_vertex:ag,normalmap_pars_fragment:rg,clearcoat_normal_fragment_begin:og,clearcoat_normal_fragment_maps:lg,clearcoat_pars_fragment:hg,iridescence_pars_fragment:cg,opaque_fragment:ug,packing:dg,premultiplied_alpha_fragment:fg,project_vertex:pg,dithering_fragment:mg,dithering_pars_fragment:gg,roughnessmap_fragment:vg,roughnessmap_pars_fragment:xg,shadowmap_pars_fragment:bg,shadowmap_pars_vertex:_g,shadowmap_vertex:yg,shadowmask_pars_fragment:Mg,skinbase_vertex:wg,skinning_pars_vertex:Sg,skinning_vertex:Ag,skinnormal_vertex:Tg,specularmap_fragment:Eg,specularmap_pars_fragment:Cg,tonemapping_fragment:Rg,tonemapping_pars_fragment:Pg,transmission_fragment:Fg,transmission_pars_fragment:Lg,uv_pars_fragment:Dg,uv_pars_vertex:Ig,uv_vertex:Ug,worldpos_vertex:zg,background_vert:kg,background_frag:Ng,backgroundCube_vert:Og,backgroundCube_frag:Bg,cube_vert:Hg,cube_frag:Gg,depth_vert:Vg,depth_frag:Wg,distance_vert:Xg,distance_frag:qg,equirect_vert:jg,equirect_frag:$g,linedashed_vert:Zg,linedashed_frag:Kg,meshbasic_vert:Yg,meshbasic_frag:Qg,meshlambert_vert:Jg,meshlambert_frag:tv,meshmatcap_vert:ev,meshmatcap_frag:iv,meshnormal_vert:sv,meshnormal_frag:nv,meshphong_vert:av,meshphong_frag:rv,meshphysical_vert:ov,meshphysical_frag:lv,meshtoon_vert:hv,meshtoon_frag:cv,points_vert:uv,points_frag:dv,shadow_vert:fv,shadow_frag:pv,sprite_vert:mv,sprite_frag:gv},ft={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},es={basic:{uniforms:di([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:di([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new zt(0)},envMapIntensity:{value:1}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:di([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:di([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:di([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new zt(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:di([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:di([ft.points,ft.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:di([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:di([ft.common,ft.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:di([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:di([ft.sprite,ft.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distance:{uniforms:di([ft.common,ft.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distance_vert,fragmentShader:Xt.distance_frag},shadow:{uniforms:di([ft.lights,ft.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};es.physical={uniforms:di([es.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};const Tr={r:0,b:0,g:0},vv=new ge,Sf=new Bt;Sf.set(-1,0,0,0,1,0,0,0,1);function xv(a,t,e,i,s,n){const r=new zt(0);let o=s===!0?0:1,l,h,c=null,u=0,d=null;function f(w){let A=w.isScene===!0?w.background:null;if(A&&A.isTexture){const y=w.backgroundBlurriness>0;A=t.get(A,y)}return A}function m(w){let A=!1;const y=f(w);y===null?g(r,o):y&&y.isColor&&(g(y,1),A=!0);const T=a.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,n):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,n),(a.autoClear||A)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function v(w,A){const y=f(A);y&&(y.isCubeTexture||y.mapping===So)?(h===void 0&&(h=new we(new hs(1,1,1),new Ot({name:"BackgroundCubeMaterial",uniforms:ia(es.backgroundCube.uniforms),vertexShader:es.backgroundCube.vertexShader,fragmentShader:es.backgroundCube.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,M,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(vv.makeRotationFromEuler(A.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Sf),h.material.toneMapped=Zt.getTransfer(y.colorSpace)!==ae,(c!==y||u!==y.version||d!==a.toneMapping)&&(h.material.needsUpdate=!0,c=y,u=y.version,d=a.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new we(new Jt(2,2),new Ot({name:"BackgroundMaterial",uniforms:ia(es.background.uniforms),vertexShader:es.background.vertexShader,fragmentShader:es.background.fragmentShader,side:ks,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=Zt.getTransfer(y.colorSpace)!==ae,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(c!==y||u!==y.version||d!==a.toneMapping)&&(l.material.needsUpdate=!0,c=y,u=y.version,d=a.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function g(w,A){w.getRGB(Tr,bf(a)),e.buffers.color.setClear(Tr.r,Tr.g,Tr.b,A,n)}function p(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(w,A=1){r.set(w),o=A,g(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(w){o=w,g(r,o)},render:m,addToRenderList:v,dispose:p}}function bv(a,t){const e=a.getParameter(a.MAX_VERTEX_ATTRIBS),i={},s=d(null);let n=s,r=!1;function o(P,F,G,j,N){let W=!1;const z=u(P,j,G,F);n!==z&&(n=z,h(n.object)),W=f(P,j,G,N),W&&m(P,j,G,N),N!==null&&t.update(N,a.ELEMENT_ARRAY_BUFFER),(W||r)&&(r=!1,y(P,F,G,j),N!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function l(){return a.createVertexArray()}function h(P){return a.bindVertexArray(P)}function c(P){return a.deleteVertexArray(P)}function u(P,F,G,j){const N=j.wireframe===!0;let W=i[F.id];W===void 0&&(W={},i[F.id]=W);const z=P.isInstancedMesh===!0?P.id:0;let K=W[z];K===void 0&&(K={},W[z]=K);let tt=K[G.id];tt===void 0&&(tt={},K[G.id]=tt);let at=tt[N];return at===void 0&&(at=d(l()),tt[N]=at),at}function d(P){const F=[],G=[],j=[];for(let N=0;N<e;N++)F[N]=0,G[N]=0,j[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:G,attributeDivisors:j,object:P,attributes:{},index:null}}function f(P,F,G,j){const N=n.attributes,W=F.attributes;let z=0;const K=G.getAttributes();for(const tt in K)if(K[tt].location>=0){const ut=N[tt];let xt=W[tt];if(xt===void 0&&(tt==="instanceMatrix"&&P.instanceMatrix&&(xt=P.instanceMatrix),tt==="instanceColor"&&P.instanceColor&&(xt=P.instanceColor)),ut===void 0||ut.attribute!==xt||xt&&ut.data!==xt.data)return!0;z++}return n.attributesNum!==z||n.index!==j}function m(P,F,G,j){const N={},W=F.attributes;let z=0;const K=G.getAttributes();for(const tt in K)if(K[tt].location>=0){let ut=W[tt];ut===void 0&&(tt==="instanceMatrix"&&P.instanceMatrix&&(ut=P.instanceMatrix),tt==="instanceColor"&&P.instanceColor&&(ut=P.instanceColor));const xt={};xt.attribute=ut,ut&&ut.data&&(xt.data=ut.data),N[tt]=xt,z++}n.attributes=N,n.attributesNum=z,n.index=j}function v(){const P=n.newAttributes;for(let F=0,G=P.length;F<G;F++)P[F]=0}function g(P){p(P,0)}function p(P,F){const G=n.newAttributes,j=n.enabledAttributes,N=n.attributeDivisors;G[P]=1,j[P]===0&&(a.enableVertexAttribArray(P),j[P]=1),N[P]!==F&&(a.vertexAttribDivisor(P,F),N[P]=F)}function w(){const P=n.newAttributes,F=n.enabledAttributes;for(let G=0,j=F.length;G<j;G++)F[G]!==P[G]&&(a.disableVertexAttribArray(G),F[G]=0)}function A(P,F,G,j,N,W,z){z===!0?a.vertexAttribIPointer(P,F,G,N,W):a.vertexAttribPointer(P,F,G,j,N,W)}function y(P,F,G,j){v();const N=j.attributes,W=G.getAttributes(),z=F.defaultAttributeValues;for(const K in W){const tt=W[K];if(tt.location>=0){let at=N[K];if(at===void 0&&(K==="instanceMatrix"&&P.instanceMatrix&&(at=P.instanceMatrix),K==="instanceColor"&&P.instanceColor&&(at=P.instanceColor)),at!==void 0){const ut=at.normalized,xt=at.itemSize,Yt=t.get(at);if(Yt===void 0)continue;const Ce=Yt.buffer,ie=Yt.type,Y=Yt.bytesPerElement,rt=ie===a.INT||ie===a.UNSIGNED_INT||at.gpuType===Jh;if(at.isInterleavedBufferAttribute){const et=at.data,Nt=et.stride,Ht=at.offset;if(et.isInstancedInterleavedBuffer){for(let It=0;It<tt.locationSize;It++)p(tt.location+It,et.meshPerAttribute);P.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let It=0;It<tt.locationSize;It++)g(tt.location+It);a.bindBuffer(a.ARRAY_BUFFER,Ce);for(let It=0;It<tt.locationSize;It++)A(tt.location+It,xt/tt.locationSize,ie,ut,Nt*Y,(Ht+xt/tt.locationSize*It)*Y,rt)}else{if(at.isInstancedBufferAttribute){for(let et=0;et<tt.locationSize;et++)p(tt.location+et,at.meshPerAttribute);P.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let et=0;et<tt.locationSize;et++)g(tt.location+et);a.bindBuffer(a.ARRAY_BUFFER,Ce);for(let et=0;et<tt.locationSize;et++)A(tt.location+et,xt/tt.locationSize,ie,ut,xt*Y,xt/tt.locationSize*et*Y,rt)}}else if(z!==void 0){const ut=z[K];if(ut!==void 0)switch(ut.length){case 2:a.vertexAttrib2fv(tt.location,ut);break;case 3:a.vertexAttrib3fv(tt.location,ut);break;case 4:a.vertexAttrib4fv(tt.location,ut);break;default:a.vertexAttrib1fv(tt.location,ut)}}}}w()}function T(){x();for(const P in i){const F=i[P];for(const G in F){const j=F[G];for(const N in j){const W=j[N];for(const z in W)c(W[z].object),delete W[z];delete j[N]}}delete i[P]}}function M(P){if(i[P.id]===void 0)return;const F=i[P.id];for(const G in F){const j=F[G];for(const N in j){const W=j[N];for(const z in W)c(W[z].object),delete W[z];delete j[N]}}delete i[P.id]}function C(P){for(const F in i){const G=i[F];for(const j in G){const N=G[j];if(N[P.id]===void 0)continue;const W=N[P.id];for(const z in W)c(W[z].object),delete W[z];delete N[P.id]}}}function b(P){for(const F in i){const G=i[F],j=P.isInstancedMesh===!0?P.id:0,N=G[j];if(N!==void 0){for(const W in N){const z=N[W];for(const K in z)c(z[K].object),delete z[K];delete N[W]}delete G[j],Object.keys(G).length===0&&delete i[F]}}}function x(){E(),r=!0,n!==s&&(n=s,h(n.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:x,resetDefaultState:E,dispose:T,releaseStatesOfGeometry:M,releaseStatesOfObject:b,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:g,disableUnusedAttributes:w}}function _v(a,t,e){let i;function s(l){i=l}function n(l,h){a.drawArrays(i,l,h),e.update(h,i,1)}function r(l,h,c){c!==0&&(a.drawArraysInstanced(i,l,h,c),e.update(h,i,c))}function o(l,h,c){if(c===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,c);let d=0;for(let f=0;f<c;f++)d+=h[f];e.update(d,i,1)}this.setMode=s,this.render=n,this.renderInstances=r,this.renderMultiDraw=o}function yv(a,t,e,i){let s;function n(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=a.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(C){return!(C!==qi&&i.convert(C)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const b=C===Ri&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Ui&&i.convert(C)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Xi&&!b)}function l(C){if(C==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp";const c=l(h);c!==h&&(kt("WebGLRenderer:",h,"not supported, using",c,"instead."),h=c);const u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&d===!1&&kt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),m=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=a.getParameter(a.MAX_TEXTURE_SIZE),g=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),p=a.getParameter(a.MAX_VERTEX_ATTRIBS),w=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),A=a.getParameter(a.MAX_VARYING_VECTORS),y=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),T=a.getParameter(a.MAX_SAMPLES),M=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:n,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:w,maxVaryings:A,maxFragmentUniforms:y,maxSamples:T,samples:M}}function Mv(a){const t=this;let e=null,i=0,s=!1,n=!1;const r=new Js,o=new Bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){n=!0,c(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(u,d){e=c(u,d,0)},this.setState=function(u,d,f){const m=u.clippingPlanes,v=u.clipIntersection,g=u.clipShadows,p=a.get(u);if(!s||m===null||m.length===0||n&&!g)n?c(null):h();else{const w=n?0:i,A=w*4;let y=p.clippingState||null;l.value=y,y=c(m,d,A,f);for(let T=0;T!==A;++T)y[T]=e[T];p.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function c(u,d,f,m){const v=u!==null?u.length:0;let g=null;if(v!==0){if(g=l.value,m!==!0||g===null){const p=f+v*4,w=d.matrixWorldInverse;o.getNormalMatrix(w),(g===null||g.length<p)&&(g=new Float32Array(p));for(let A=0,y=f;A!==v;++A,y+=4)r.copy(u[A]).applyMatrix4(w,o),r.normal.toArray(g,y),g[y+3]=r.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,g}}const Us=4,gu=[.125,.215,.35,.446,.526,.582],sn=20,wv=256,_a=new fc,vu=new zt;let ll=null,hl=0,cl=0,ul=!1;const Sv=new L;class xu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,n={}){const{size:r=256,position:o=Sv}=n;ll=this._renderer.getRenderTarget(),hl=this._renderer.getActiveCubeFace(),cl=this._renderer.getActiveMipmapLevel(),ul=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_u(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(ll,hl,cl),this._renderer.xr.enabled=ul,t.scissorTest=!1,kn(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===hn||t.mapping===Jn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ll=this._renderer.getRenderTarget(),hl=this._renderer.getActiveCubeFace(),cl=this._renderer.getActiveMipmapLevel(),ul=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:hi,minFilter:hi,generateMipmaps:!1,type:Ri,format:qi,colorSpace:co,depthBuffer:!1},s=bu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bu(t,e,i);const{_lodMax:n}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Av(n)),this._blurMaterial=Ev(n,t,e),this._ggxMaterial=Tv(n,t,e)}return s}_compileMaterial(t){const e=new we(new Ee,t);this._renderer.compile(e,_a)}_sceneToCubeUV(t,e,i,s,n){const l=new Di(90,1,e,i),h=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(vu),u.toneMapping=rs,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new we(new hs,new Mi({name:"PMREM.Background",side:bi,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,g=v.material;let p=!1;const w=t.background;w?w.isColor&&(g.color.copy(w),t.background=null,p=!0):(g.color.copy(vu),p=!0);for(let A=0;A<6;A++){const y=A%3;y===0?(l.up.set(0,h[A],0),l.position.set(n.x,n.y,n.z),l.lookAt(n.x+c[A],n.y,n.z)):y===1?(l.up.set(0,0,h[A]),l.position.set(n.x,n.y,n.z),l.lookAt(n.x,n.y+c[A],n.z)):(l.up.set(0,h[A],0),l.position.set(n.x,n.y,n.z),l.lookAt(n.x,n.y,n.z+c[A]));const T=this._cubeSize;kn(s,y*T,A>2?T:0,T,T),u.setRenderTarget(s),p&&u.render(v,l),u.render(t,l)}u.toneMapping=f,u.autoClear=d,t.background=w}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===hn||t.mapping===Jn;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=yu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_u());const n=s?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=n;const o=n.uniforms;o.envMap.value=t;const l=this._cubeSize;kn(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(r,_a)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let n=1;n<s;n++)this._applyGGXFilter(t,n-1,n);e.autoClear=i}_applyGGXFilter(t,e,i){const s=this._renderer,n=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[i];o.material=r;const l=r.uniforms,h=i/(this._lodMeshes.length-1),c=e/(this._lodMeshes.length-1),u=Math.sqrt(h*h-c*c),d=0+h*1.25,f=u*d,{_lodMax:m}=this,v=this._sizeLods[i],g=3*v*(i>m-Us?i-m+Us:0),p=4*(this._cubeSize-v);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=m-e,kn(n,g,p,3*v,2*v),s.setRenderTarget(n),s.render(o,_a),l.envMap.value=n.texture,l.roughness.value=0,l.mipInt.value=m-i,kn(t,g,p,3*v,2*v),s.setRenderTarget(t),s.render(o,_a)}_blur(t,e,i,s,n){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,i,s,"latitudinal",n),this._halfBlur(r,t,i,i,s,"longitudinal",n)}_halfBlur(t,e,i,s,n,r,o){const l=this._renderer,h=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&Qt("blur direction must be either latitudinal or longitudinal!");const c=3,u=this._lodMeshes[s];u.material=h;const d=h.uniforms,f=this._sizeLods[i]-1,m=isFinite(n)?Math.PI/(2*f):2*Math.PI/(2*sn-1),v=n/m,g=isFinite(n)?1+Math.floor(c*v):sn;g>sn&&kt(`sigmaRadians, ${n}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${sn}`);const p=[];let w=0;for(let C=0;C<sn;++C){const b=C/v,x=Math.exp(-b*b/2);p.push(x),C===0?w+=x:C<g&&(w+=2*x)}for(let C=0;C<p.length;C++)p[C]=p[C]/w;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=r==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:A}=this;d.dTheta.value=m,d.mipInt.value=A-i;const y=this._sizeLods[s],T=3*y*(s>A-Us?s-A+Us:0),M=4*(this._cubeSize-y);kn(e,T,M,3*y,2*y),l.setRenderTarget(e),l.render(u,_a)}}function Av(a){const t=[],e=[],i=[];let s=a;const n=a-Us+1+gu.length;for(let r=0;r<n;r++){const o=Math.pow(2,s);t.push(o);let l=1/o;r>a-Us?l=gu[r-a+Us-1]:r===0&&(l=0),e.push(l);const h=1/(o-2),c=-h,u=1+h,d=[c,c,u,c,u,u,c,c,u,u,c,u],f=6,m=6,v=3,g=2,p=1,w=new Float32Array(v*m*f),A=new Float32Array(g*m*f),y=new Float32Array(p*m*f);for(let M=0;M<f;M++){const C=M%3*2/3-1,b=M>2?0:-1,x=[C,b,0,C+2/3,b,0,C+2/3,b+1,0,C,b,0,C+2/3,b+1,0,C,b+1,0];w.set(x,v*m*M),A.set(d,g*m*M);const E=[M,M,M,M,M,M];y.set(E,p*m*M)}const T=new Ee;T.setAttribute("position",new me(w,v)),T.setAttribute("uv",new me(A,g)),T.setAttribute("faceIndex",new me(y,p)),i.push(new we(T,null)),s>Us&&s--}return{lodMeshes:i,sizeLods:t,sigmas:e}}function bu(a,t,e){const i=new _i(a,t,e);return i.texture.mapping=So,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function kn(a,t,e,i,s){a.viewport.set(t,e,i,s),a.scissor.set(t,e,i,s)}function Tv(a,t,e){return new Ot({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:wv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Co(),fragmentShader:`

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
		`,blending:ns,depthTest:!1,depthWrite:!1})}function Ev(a,t,e){const i=new Float32Array(sn),s=new L(0,1,0);return new Ot({name:"SphericalGaussianBlur",defines:{n:sn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Co(),fragmentShader:`

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
		`,blending:ns,depthTest:!1,depthWrite:!1})}function _u(){return new Ot({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Co(),fragmentShader:`

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
		`,blending:ns,depthTest:!1,depthWrite:!1})}function yu(){return new Ot({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Co(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ns,depthTest:!1,depthWrite:!1})}function Co(){return`

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
	`}class Af extends _i{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new vf(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new hs(5,5,5),n=new Ot({name:"CubemapFromEquirect",uniforms:ia(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:bi,blending:ns});n.uniforms.tEquirect.value=e;const r=new we(s,n),o=e.minFilter;return e.minFilter===an&&(e.minFilter=hi),new Fm(1,10,this).update(t,r),e.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){const n=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,i,s);t.setRenderTarget(n)}}function Cv(a){let t=new WeakMap,e=new WeakMap,i=null;function s(d,f=!1){return d==null?null:f?r(d):n(d)}function n(d){if(d&&d.isTexture){const f=d.mapping;if(f===Do||f===Io)if(t.has(d)){const m=t.get(d).texture;return o(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const v=new Af(m.height);return v.fromEquirectangularTexture(a,d),t.set(d,v),d.addEventListener("dispose",h),o(v.texture,d.mapping)}else return null}}return d}function r(d){if(d&&d.isTexture){const f=d.mapping,m=f===Do||f===Io,v=f===hn||f===Jn;if(m||v){let g=e.get(d);const p=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return i===null&&(i=new xu(a)),g=m?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{const w=d.image;return m&&w&&w.height>0||v&&w&&l(w)?(i===null&&(i=new xu(a)),g=m?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",c),g.texture):null}}}return d}function o(d,f){return f===Do?d.mapping=hn:f===Io&&(d.mapping=Jn),d}function l(d){let f=0;const m=6;for(let v=0;v<m;v++)d[v]!==void 0&&f++;return f===m}function h(d){const f=d.target;f.removeEventListener("dispose",h);const m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function c(d){const f=d.target;f.removeEventListener("dispose",c);const m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function u(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:u}}function Rv(a){const t={};function e(i){if(t[i]!==void 0)return t[i];const s=a.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Zn("WebGLRenderer: "+i+" extension not supported."),s}}}function Pv(a,t,e,i){const s={},n=new WeakMap;function r(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const m in d.attributes)t.remove(d.attributes[m]);d.removeEventListener("dispose",r),delete s[d.id];const f=n.get(d);f&&(t.remove(f),n.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",r),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)t.update(d[f],a.ARRAY_BUFFER)}function h(u){const d=[],f=u.index,m=u.attributes.position;let v=0;if(m===void 0)return;if(f!==null){const w=f.array;v=f.version;for(let A=0,y=w.length;A<y;A+=3){const T=w[A+0],M=w[A+1],C=w[A+2];d.push(T,M,M,C,C,T)}}else{const w=m.array;v=m.version;for(let A=0,y=w.length/3-1;A<y;A+=3){const T=A+0,M=A+1,C=A+2;d.push(T,M,M,C,C,T)}}const g=new(m.count>=65535?df:uf)(d,1);g.version=v;const p=n.get(u);p&&t.remove(p),n.set(u,g)}function c(u){const d=n.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&h(u)}else h(u);return n.get(u)}return{get:o,update:l,getWireframeAttribute:c}}function Fv(a,t,e){let i;function s(u){i=u}let n,r;function o(u){n=u.type,r=u.bytesPerElement}function l(u,d){a.drawElements(i,d,n,u*r),e.update(d,i,1)}function h(u,d,f){f!==0&&(a.drawElementsInstanced(i,d,n,u*r,f),e.update(d,i,f))}function c(u,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,n,u,0,f);let v=0;for(let g=0;g<f;g++)v+=d[g];e.update(v,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=h,this.renderMultiDraw=c}function Lv(a){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(n,r,o){switch(e.calls++,r){case a.TRIANGLES:e.triangles+=o*(n/3);break;case a.LINES:e.lines+=o*(n/2);break;case a.LINE_STRIP:e.lines+=o*(n-1);break;case a.LINE_LOOP:e.lines+=o*n;break;case a.POINTS:e.points+=o*n;break;default:Qt("WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Dv(a,t,e){const i=new WeakMap,s=new De;function n(r,o,l){const h=r.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=c!==void 0?c.length:0;let d=i.get(o);if(d===void 0||d.count!==u){let E=function(){b.dispose(),i.delete(o),o.removeEventListener("dispose",E)};var f=E;d!==void 0&&d.texture.dispose();const m=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],w=o.morphAttributes.normal||[],A=o.morphAttributes.color||[];let y=0;m===!0&&(y=1),v===!0&&(y=2),g===!0&&(y=3);let T=o.attributes.position.count*y,M=1;T>t.maxTextureSize&&(M=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const C=new Float32Array(T*M*4*u),b=new lf(C,T,M,u);b.type=Xi,b.needsUpdate=!0;const x=y*4;for(let P=0;P<u;P++){const F=p[P],G=w[P],j=A[P],N=T*M*4*P;for(let W=0;W<F.count;W++){const z=W*x;m===!0&&(s.fromBufferAttribute(F,W),C[N+z+0]=s.x,C[N+z+1]=s.y,C[N+z+2]=s.z,C[N+z+3]=0),v===!0&&(s.fromBufferAttribute(G,W),C[N+z+4]=s.x,C[N+z+5]=s.y,C[N+z+6]=s.z,C[N+z+7]=0),g===!0&&(s.fromBufferAttribute(j,W),C[N+z+8]=s.x,C[N+z+9]=s.y,C[N+z+10]=s.z,C[N+z+11]=j.itemSize===4?s.w:1)}}d={count:u,texture:b,size:new vt(T,M)},i.set(o,d),o.addEventListener("dispose",E)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(a,"morphTexture",r.morphTexture,e);else{let m=0;for(let g=0;g<h.length;g++)m+=h[g];const v=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(a,"morphTargetBaseInfluence",v),l.getUniforms().setValue(a,"morphTargetInfluences",h)}l.getUniforms().setValue(a,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(a,"morphTargetsTextureSize",d.size)}return{update:n}}function Iv(a,t,e,i,s){let n=new WeakMap;function r(h){const c=s.render.frame,u=h.geometry,d=t.get(h,u);if(n.get(d)!==c&&(t.update(d),n.set(d,c)),h.isInstancedMesh&&(h.hasEventListener("dispose",l)===!1&&h.addEventListener("dispose",l),n.get(h)!==c&&(e.update(h.instanceMatrix,a.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,a.ARRAY_BUFFER),n.set(h,c))),h.isSkinnedMesh){const f=h.skeleton;n.get(f)!==c&&(f.update(),n.set(f,c))}return d}function o(){n=new WeakMap}function l(h){const c=h.target;c.removeEventListener("dispose",l),i.releaseStatesOfObject(c),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const Uv={[jh]:"LINEAR_TONE_MAPPING",[$h]:"REINHARD_TONE_MAPPING",[Zh]:"CINEON_TONE_MAPPING",[wo]:"ACES_FILMIC_TONE_MAPPING",[Yh]:"AGX_TONE_MAPPING",[Qh]:"NEUTRAL_TONE_MAPPING",[Kh]:"CUSTOM_TONE_MAPPING"};function zv(a,t,e,i,s,n){const r=new _i(t,e,{type:a,depthBuffer:s,stencilBuffer:n,samples:i?4:0,depthTexture:s?new ea(t,e):void 0}),o=new _i(t,e,{type:Ri,depthBuffer:!1,stencilBuffer:!1}),l=new Ee;l.setAttribute("position",new ve([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new ve([0,2,0,0,2,0],2));const h=new _f({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new we(l,h),u=new fc(-1,1,1,-1,0,1);let d=null,f=null,m=!1,v,g=null,p=[],w=!1;this.setSize=function(A,y){r.setSize(A,y),o.setSize(A,y);for(let T=0;T<p.length;T++){const M=p[T];M.setSize&&M.setSize(A,y)}},this.setEffects=function(A){p=A,w=p.length>0&&p[0].isRenderPass===!0;const y=r.width,T=r.height;for(let M=0;M<p.length;M++){const C=p[M];C.setSize&&C.setSize(y,T)}},this.begin=function(A,y){if(m||A.toneMapping===rs&&p.length===0)return!1;if(g=y,y!==null){const T=y.width,M=y.height;(r.width!==T||r.height!==M)&&this.setSize(T,M)}return w===!1&&A.setRenderTarget(r),v=A.toneMapping,A.toneMapping=rs,!0},this.hasRenderPass=function(){return w},this.end=function(A,y){A.toneMapping=v,m=!0;let T=r,M=o;for(let C=0;C<p.length;C++){const b=p[C];if(b.enabled!==!1&&(b.render(A,M,T,y),b.needsSwap!==!1)){const x=T;T=M,M=x}}if(d!==A.outputColorSpace||f!==A.toneMapping){d=A.outputColorSpace,f=A.toneMapping,h.defines={},Zt.getTransfer(d)===ae&&(h.defines.SRGB_TRANSFER="");const C=Uv[f];C&&(h.defines[C]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=T.texture,A.setRenderTarget(g),A.render(c,u),g=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),o.dispose(),l.dispose(),h.dispose()}}const Tf=new ei,Dh=new ea(1,1),Ef=new lf,Cf=new im,Rf=new vf,Mu=[],wu=[],Su=new Float32Array(16),Au=new Float32Array(9),Tu=new Float32Array(4);function la(a,t,e){const i=a[0];if(i<=0||i>0)return a;const s=t*e;let n=Mu[s];if(n===void 0&&(n=new Float32Array(s),Mu[s]=n),t!==0){i.toArray(n,0);for(let r=1,o=0;r!==t;++r)o+=e,a[r].toArray(n,o)}return n}function Xe(a,t){if(a.length!==t.length)return!1;for(let e=0,i=a.length;e<i;e++)if(a[e]!==t[e])return!1;return!0}function qe(a,t){for(let e=0,i=t.length;e<i;e++)a[e]=t[e]}function Ro(a,t){let e=wu[t];e===void 0&&(e=new Int32Array(t),wu[t]=e);for(let i=0;i!==t;++i)e[i]=a.allocateTextureUnit();return e}function kv(a,t){const e=this.cache;e[0]!==t&&(a.uniform1f(this.addr,t),e[0]=t)}function Nv(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(a.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;a.uniform2fv(this.addr,t),qe(e,t)}}function Ov(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(a.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(a.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Xe(e,t))return;a.uniform3fv(this.addr,t),qe(e,t)}}function Bv(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(a.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;a.uniform4fv(this.addr,t),qe(e,t)}}function Hv(a,t){const e=this.cache,i=t.elements;if(i===void 0){if(Xe(e,t))return;a.uniformMatrix2fv(this.addr,!1,t),qe(e,t)}else{if(Xe(e,i))return;Tu.set(i),a.uniformMatrix2fv(this.addr,!1,Tu),qe(e,i)}}function Gv(a,t){const e=this.cache,i=t.elements;if(i===void 0){if(Xe(e,t))return;a.uniformMatrix3fv(this.addr,!1,t),qe(e,t)}else{if(Xe(e,i))return;Au.set(i),a.uniformMatrix3fv(this.addr,!1,Au),qe(e,i)}}function Vv(a,t){const e=this.cache,i=t.elements;if(i===void 0){if(Xe(e,t))return;a.uniformMatrix4fv(this.addr,!1,t),qe(e,t)}else{if(Xe(e,i))return;Su.set(i),a.uniformMatrix4fv(this.addr,!1,Su),qe(e,i)}}function Wv(a,t){const e=this.cache;e[0]!==t&&(a.uniform1i(this.addr,t),e[0]=t)}function Xv(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(a.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;a.uniform2iv(this.addr,t),qe(e,t)}}function qv(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(a.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Xe(e,t))return;a.uniform3iv(this.addr,t),qe(e,t)}}function jv(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(a.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;a.uniform4iv(this.addr,t),qe(e,t)}}function $v(a,t){const e=this.cache;e[0]!==t&&(a.uniform1ui(this.addr,t),e[0]=t)}function Zv(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(a.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;a.uniform2uiv(this.addr,t),qe(e,t)}}function Kv(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(a.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Xe(e,t))return;a.uniform3uiv(this.addr,t),qe(e,t)}}function Yv(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(a.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;a.uniform4uiv(this.addr,t),qe(e,t)}}function Qv(a,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(a.uniform1i(this.addr,s),i[0]=s);let n;this.type===a.SAMPLER_2D_SHADOW?(Dh.compareFunction=e.isReversedDepthBuffer()?oc:rc,n=Dh):n=Tf,e.setTexture2D(t||n,s)}function Jv(a,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(a.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Cf,s)}function tx(a,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(a.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Rf,s)}function ex(a,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(a.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Ef,s)}function ix(a){switch(a){case 5126:return kv;case 35664:return Nv;case 35665:return Ov;case 35666:return Bv;case 35674:return Hv;case 35675:return Gv;case 35676:return Vv;case 5124:case 35670:return Wv;case 35667:case 35671:return Xv;case 35668:case 35672:return qv;case 35669:case 35673:return jv;case 5125:return $v;case 36294:return Zv;case 36295:return Kv;case 36296:return Yv;case 35678:case 36198:case 36298:case 36306:case 35682:return Qv;case 35679:case 36299:case 36307:return Jv;case 35680:case 36300:case 36308:case 36293:return tx;case 36289:case 36303:case 36311:case 36292:return ex}}function sx(a,t){a.uniform1fv(this.addr,t)}function nx(a,t){const e=la(t,this.size,2);a.uniform2fv(this.addr,e)}function ax(a,t){const e=la(t,this.size,3);a.uniform3fv(this.addr,e)}function rx(a,t){const e=la(t,this.size,4);a.uniform4fv(this.addr,e)}function ox(a,t){const e=la(t,this.size,4);a.uniformMatrix2fv(this.addr,!1,e)}function lx(a,t){const e=la(t,this.size,9);a.uniformMatrix3fv(this.addr,!1,e)}function hx(a,t){const e=la(t,this.size,16);a.uniformMatrix4fv(this.addr,!1,e)}function cx(a,t){a.uniform1iv(this.addr,t)}function ux(a,t){a.uniform2iv(this.addr,t)}function dx(a,t){a.uniform3iv(this.addr,t)}function fx(a,t){a.uniform4iv(this.addr,t)}function px(a,t){a.uniform1uiv(this.addr,t)}function mx(a,t){a.uniform2uiv(this.addr,t)}function gx(a,t){a.uniform3uiv(this.addr,t)}function vx(a,t){a.uniform4uiv(this.addr,t)}function xx(a,t,e){const i=this.cache,s=t.length,n=Ro(e,s);Xe(i,n)||(a.uniform1iv(this.addr,n),qe(i,n));let r;this.type===a.SAMPLER_2D_SHADOW?r=Dh:r=Tf;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||r,n[o])}function bx(a,t,e){const i=this.cache,s=t.length,n=Ro(e,s);Xe(i,n)||(a.uniform1iv(this.addr,n),qe(i,n));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||Cf,n[r])}function _x(a,t,e){const i=this.cache,s=t.length,n=Ro(e,s);Xe(i,n)||(a.uniform1iv(this.addr,n),qe(i,n));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||Rf,n[r])}function yx(a,t,e){const i=this.cache,s=t.length,n=Ro(e,s);Xe(i,n)||(a.uniform1iv(this.addr,n),qe(i,n));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||Ef,n[r])}function Mx(a){switch(a){case 5126:return sx;case 35664:return nx;case 35665:return ax;case 35666:return rx;case 35674:return ox;case 35675:return lx;case 35676:return hx;case 5124:case 35670:return cx;case 35667:case 35671:return ux;case 35668:case 35672:return dx;case 35669:case 35673:return fx;case 5125:return px;case 36294:return mx;case 36295:return gx;case 36296:return vx;case 35678:case 36198:case 36298:case 36306:case 35682:return xx;case 35679:case 36299:case 36307:return bx;case 35680:case 36300:case 36308:case 36293:return _x;case 36289:case 36303:case 36311:case 36292:return yx}}class wx{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=ix(e.type)}}class Sx{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Mx(e.type)}}class Ax{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let n=0,r=s.length;n!==r;++n){const o=s[n];o.setValue(t,e[o.id],i)}}}const dl=/(\w+)(\])?(\[|\.)?/g;function Eu(a,t){a.seq.push(t),a.map[t.id]=t}function Tx(a,t,e){const i=a.name,s=i.length;for(dl.lastIndex=0;;){const n=dl.exec(i),r=dl.lastIndex;let o=n[1];const l=n[2]==="]",h=n[3];if(l&&(o=o|0),h===void 0||h==="["&&r+2===s){Eu(e,h===void 0?new wx(o,a,t):new Sx(o,a,t));break}else{let u=e.map[o];u===void 0&&(u=new Ax(o),Eu(e,u)),e=u}}}class eo{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=t.getActiveUniform(e,r),l=t.getUniformLocation(e,o.name);Tx(o,l,this)}const s=[],n=[];for(const r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(r):n.push(r);s.length>0&&(this.seq=s.concat(n))}setValue(t,e,i,s){const n=this.map[e];n!==void 0&&n.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let n=0,r=e.length;n!==r;++n){const o=e[n],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,n=t.length;s!==n;++s){const r=t[s];r.id in e&&i.push(r)}return i}}function Cu(a,t,e){const i=a.createShader(t);return a.shaderSource(i,e),a.compileShader(i),i}const Ex=37297;let Cx=0;function Rx(a,t){const e=a.split(`
`),i=[],s=Math.max(t-6,0),n=Math.min(t+6,e.length);for(let r=s;r<n;r++){const o=r+1;i.push(`${o===t?">":" "} ${o}: ${e[r]}`)}return i.join(`
`)}const Ru=new Bt;function Px(a){Zt._getMatrix(Ru,Zt.workingColorSpace,a);const t=`mat3( ${Ru.elements.map(e=>e.toFixed(4))} )`;switch(Zt.getTransfer(a)){case uo:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return kt("WebGLProgram: Unsupported color space: ",a),[t,"LinearTransferOETF"]}}function Pu(a,t,e){const i=a.getShaderParameter(t,a.COMPILE_STATUS),n=(a.getShaderInfoLog(t)||"").trim();if(i&&n==="")return"";const r=/ERROR: 0:(\d+)/.exec(n);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+n+`

`+Rx(a.getShaderSource(t),o)}else return n}function Fx(a,t){const e=Px(t);return[`vec4 ${a}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const Lx={[jh]:"Linear",[$h]:"Reinhard",[Zh]:"Cineon",[wo]:"ACESFilmic",[Yh]:"AgX",[Qh]:"Neutral",[Kh]:"Custom"};function Dx(a,t){const e=Lx[t];return e===void 0?(kt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Er=new L;function Ix(){Zt.getLuminanceCoefficients(Er);const a=Er.x.toFixed(4),t=Er.y.toFixed(4),e=Er.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ux(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ia).join(`
`)}function zx(a){const t=[];for(const e in a){const i=a[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function kx(a,t){const e={},i=a.getProgramParameter(t,a.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const n=a.getActiveAttrib(t,s),r=n.name;let o=1;n.type===a.FLOAT_MAT2&&(o=2),n.type===a.FLOAT_MAT3&&(o=3),n.type===a.FLOAT_MAT4&&(o=4),e[r]={type:n.type,location:a.getAttribLocation(t,r),locationSize:o}}return e}function Ia(a){return a!==""}function Fu(a,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Lu(a,t){return a.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Nx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ih(a){return a.replace(Nx,Bx)}const Ox=new Map;function Bx(a,t){let e=Xt[t];if(e===void 0){const i=Ox.get(t);if(i!==void 0)e=Xt[i],kt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Ih(e)}const Hx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Du(a){return a.replace(Hx,Gx)}function Gx(a,t,e,i){let s="";for(let n=parseInt(t);n<parseInt(e);n++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return s}function Iu(a){let t=`precision ${a.precision} float;
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
	`;return a.precision==="highp"?t+=`
#define HIGH_PRECISION`:a.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const Vx={[Kr]:"SHADOWMAP_TYPE_PCF",[La]:"SHADOWMAP_TYPE_VSM"};function Wx(a){return Vx[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Xx={[hn]:"ENVMAP_TYPE_CUBE",[Jn]:"ENVMAP_TYPE_CUBE",[So]:"ENVMAP_TYPE_CUBE_UV"};function qx(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":Xx[a.envMapMode]||"ENVMAP_TYPE_CUBE"}const jx={[Jn]:"ENVMAP_MODE_REFRACTION"};function $x(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":jx[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Zx={[Qd]:"ENVMAP_BLENDING_MULTIPLY",[zp]:"ENVMAP_BLENDING_MIX",[kp]:"ENVMAP_BLENDING_ADD"};function Kx(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":Zx[a.combine]||"ENVMAP_BLENDING_NONE"}function Yx(a){const t=a.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Qx(a,t,e,i){const s=a.getContext(),n=e.defines;let r=e.vertexShader,o=e.fragmentShader;const l=Wx(e),h=qx(e),c=$x(e),u=Kx(e),d=Yx(e),f=Ux(e),m=zx(n),v=s.createProgram();let g,p,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ia).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ia).join(`
`),p.length>0&&(p+=`
`)):(g=[Iu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ia).join(`
`),p=[Iu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==rs?"#define TONE_MAPPING":"",e.toneMapping!==rs?Xt.tonemapping_pars_fragment:"",e.toneMapping!==rs?Dx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,Fx("linearToOutputTexel",e.outputColorSpace),Ix(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ia).join(`
`)),r=Ih(r),r=Fu(r,e),r=Lu(r,e),o=Ih(o),o=Fu(o,e),o=Lu(o,e),r=Du(r),o=Du(o),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Vc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Vc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const A=w+g+r,y=w+p+o,T=Cu(s,s.VERTEX_SHADER,A),M=Cu(s,s.FRAGMENT_SHADER,y);s.attachShader(v,T),s.attachShader(v,M),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function C(P){if(a.debug.checkShaderErrors){const F=s.getProgramInfoLog(v)||"",G=s.getShaderInfoLog(T)||"",j=s.getShaderInfoLog(M)||"",N=F.trim(),W=G.trim(),z=j.trim();let K=!0,tt=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(K=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(s,v,T,M);else{const at=Pu(s,T,"vertex"),ut=Pu(s,M,"fragment");Qt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+N+`
`+at+`
`+ut)}else N!==""?kt("WebGLProgram: Program Info Log:",N):(W===""||z==="")&&(tt=!1);tt&&(P.diagnostics={runnable:K,programLog:N,vertexShader:{log:W,prefix:g},fragmentShader:{log:z,prefix:p}})}s.deleteShader(T),s.deleteShader(M),b=new eo(s,v),x=kx(s,v)}let b;this.getUniforms=function(){return b===void 0&&C(this),b};let x;this.getAttributes=function(){return x===void 0&&C(this),x};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(v,Ex)),E},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Cx++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=M,this}let Jx=0;class t1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new e1(t),e.set(t,i)),i}}class e1{constructor(t){this.id=Jx++,this.code=t,this.usedTimes=0}}function i1(a){return a===cn||a===lo||a===ho}function s1(a,t,e,i,s,n){const r=new hf,o=new t1,l=new Set,h=[],c=new Map,u=i.logarithmicDepthBuffer;let d=i.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(b){return l.add(b),b===0?"uv":`uv${b}`}function v(b,x,E,P,F,G){const j=P.fog,N=F.geometry,W=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?P.environment:null,z=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,K=t.get(b.envMap||W,z),tt=K&&K.mapping===So?K.image.height:null,at=f[b.type];b.precision!==null&&(d=i.getMaxPrecision(b.precision),d!==b.precision&&kt("WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));const ut=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,xt=ut!==void 0?ut.length:0;let Yt=0;N.morphAttributes.position!==void 0&&(Yt=1),N.morphAttributes.normal!==void 0&&(Yt=2),N.morphAttributes.color!==void 0&&(Yt=3);let Ce,ie,Y,rt;if(at){const At=es[at];Ce=At.vertexShader,ie=At.fragmentShader}else{Ce=b.vertexShader,ie=b.fragmentShader;const At=o.getVertexShaderStage(b),Pe=o.getFragmentShaderStage(b);o.update(b,At,Pe),Y=At.id,rt=Pe.id}const et=a.getRenderTarget(),Nt=a.state.buffers.depth.getReversed(),Ht=F.isInstancedMesh===!0,It=F.isBatchedMesh===!0,Ie=!!b.map,$t=!!b.matcap,de=!!K,se=!!b.aoMap,te=!!b.lightMap,Ne=!!b.bumpMap&&b.wireframe===!1,Ge=!!b.normalMap,je=!!b.displacementMap,Ke=!!b.emissiveMap,Re=!!b.metalnessMap,Oe=!!b.roughnessMap,I=b.anisotropy>0,mi=b.clearcoat>0,re=b.dispersion>0,R=b.iridescence>0,_=b.sheen>0,k=b.transmission>0,H=I&&!!b.anisotropyMap,X=mi&&!!b.clearcoatMap,st=mi&&!!b.clearcoatNormalMap,ot=mi&&!!b.clearcoatRoughnessMap,q=R&&!!b.iridescenceMap,Z=R&&!!b.iridescenceThicknessMap,lt=_&&!!b.sheenColorMap,Rt=_&&!!b.sheenRoughnessMap,dt=!!b.specularMap,ht=!!b.specularColorMap,Dt=!!b.specularIntensityMap,Ut=k&&!!b.transmissionMap,Gt=k&&!!b.thicknessMap,D=!!b.gradientMap,nt=!!b.alphaMap,$=b.alphaTest>0,ct=!!b.alphaHash,gt=!!b.extensions;let J=rs;b.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(J=a.toneMapping);const Ct={shaderID:at,shaderType:b.type,shaderName:b.name,vertexShader:Ce,fragmentShader:ie,defines:b.defines,customVertexShaderID:Y,customFragmentShaderID:rt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:It,batchingColor:It&&F._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&F.instanceColor!==null,instancingMorph:Ht&&F.morphTexture!==null,outputColorSpace:et===null?a.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:Zt.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:Ie,matcap:$t,envMap:de,envMapMode:de&&K.mapping,envMapCubeUVHeight:tt,aoMap:se,lightMap:te,bumpMap:Ne,normalMap:Ge,displacementMap:je,emissiveMap:Ke,normalMapObjectSpace:Ge&&b.normalMapType===Op,normalMapTangentSpace:Ge&&b.normalMapType===Hc,packedNormalMap:Ge&&b.normalMapType===Hc&&i1(b.normalMap.format),metalnessMap:Re,roughnessMap:Oe,anisotropy:I,anisotropyMap:H,clearcoat:mi,clearcoatMap:X,clearcoatNormalMap:st,clearcoatRoughnessMap:ot,dispersion:re,iridescence:R,iridescenceMap:q,iridescenceThicknessMap:Z,sheen:_,sheenColorMap:lt,sheenRoughnessMap:Rt,specularMap:dt,specularColorMap:ht,specularIntensityMap:Dt,transmission:k,transmissionMap:Ut,thicknessMap:Gt,gradientMap:D,opaque:b.transparent===!1&&b.blending===as&&b.alphaToCoverage===!1,alphaMap:nt,alphaTest:$,alphaHash:ct,combine:b.combine,mapUv:Ie&&m(b.map.channel),aoMapUv:se&&m(b.aoMap.channel),lightMapUv:te&&m(b.lightMap.channel),bumpMapUv:Ne&&m(b.bumpMap.channel),normalMapUv:Ge&&m(b.normalMap.channel),displacementMapUv:je&&m(b.displacementMap.channel),emissiveMapUv:Ke&&m(b.emissiveMap.channel),metalnessMapUv:Re&&m(b.metalnessMap.channel),roughnessMapUv:Oe&&m(b.roughnessMap.channel),anisotropyMapUv:H&&m(b.anisotropyMap.channel),clearcoatMapUv:X&&m(b.clearcoatMap.channel),clearcoatNormalMapUv:st&&m(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&m(b.clearcoatRoughnessMap.channel),iridescenceMapUv:q&&m(b.iridescenceMap.channel),iridescenceThicknessMapUv:Z&&m(b.iridescenceThicknessMap.channel),sheenColorMapUv:lt&&m(b.sheenColorMap.channel),sheenRoughnessMapUv:Rt&&m(b.sheenRoughnessMap.channel),specularMapUv:dt&&m(b.specularMap.channel),specularColorMapUv:ht&&m(b.specularColorMap.channel),specularIntensityMapUv:Dt&&m(b.specularIntensityMap.channel),transmissionMapUv:Ut&&m(b.transmissionMap.channel),thicknessMapUv:Gt&&m(b.thicknessMap.channel),alphaMapUv:nt&&m(b.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Ge||I),vertexNormals:!!N.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!N.attributes.uv&&(Ie||nt),fog:!!j,useFog:b.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||N.attributes.normal===void 0&&Ge===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Nt,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:xt,morphTextureStride:Yt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:n.numPlanes,numClipIntersection:n.numIntersection,dithering:b.dithering,shadowMapEnabled:a.shadowMap.enabled&&E.length>0,shadowMapType:a.shadowMap.type,toneMapping:J,decodeVideoTexture:Ie&&b.map.isVideoTexture===!0&&Zt.getTransfer(b.map.colorSpace)===ae,decodeVideoTextureEmissive:Ke&&b.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(b.emissiveMap.colorSpace)===ae,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===ti,flipSided:b.side===bi,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:gt&&b.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(gt&&b.extensions.multiDraw===!0||It)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ct.vertexUv1s=l.has(1),Ct.vertexUv2s=l.has(2),Ct.vertexUv3s=l.has(3),l.clear(),Ct}function g(b){const x=[];if(b.shaderID?x.push(b.shaderID):(x.push(b.customVertexShaderID),x.push(b.customFragmentShaderID)),b.defines!==void 0)for(const E in b.defines)x.push(E),x.push(b.defines[E]);return b.isRawShaderMaterial===!1&&(p(x,b),w(x,b),x.push(a.outputColorSpace)),x.push(b.customProgramCacheKey),x.join()}function p(b,x){b.push(x.precision),b.push(x.outputColorSpace),b.push(x.envMapMode),b.push(x.envMapCubeUVHeight),b.push(x.mapUv),b.push(x.alphaMapUv),b.push(x.lightMapUv),b.push(x.aoMapUv),b.push(x.bumpMapUv),b.push(x.normalMapUv),b.push(x.displacementMapUv),b.push(x.emissiveMapUv),b.push(x.metalnessMapUv),b.push(x.roughnessMapUv),b.push(x.anisotropyMapUv),b.push(x.clearcoatMapUv),b.push(x.clearcoatNormalMapUv),b.push(x.clearcoatRoughnessMapUv),b.push(x.iridescenceMapUv),b.push(x.iridescenceThicknessMapUv),b.push(x.sheenColorMapUv),b.push(x.sheenRoughnessMapUv),b.push(x.specularMapUv),b.push(x.specularColorMapUv),b.push(x.specularIntensityMapUv),b.push(x.transmissionMapUv),b.push(x.thicknessMapUv),b.push(x.combine),b.push(x.fogExp2),b.push(x.sizeAttenuation),b.push(x.morphTargetsCount),b.push(x.morphAttributeCount),b.push(x.numDirLights),b.push(x.numPointLights),b.push(x.numSpotLights),b.push(x.numSpotLightMaps),b.push(x.numHemiLights),b.push(x.numRectAreaLights),b.push(x.numDirLightShadows),b.push(x.numPointLightShadows),b.push(x.numSpotLightShadows),b.push(x.numSpotLightShadowsWithMaps),b.push(x.numLightProbes),b.push(x.shadowMapType),b.push(x.toneMapping),b.push(x.numClippingPlanes),b.push(x.numClipIntersection),b.push(x.depthPacking)}function w(b,x){r.disableAll(),x.instancing&&r.enable(0),x.instancingColor&&r.enable(1),x.instancingMorph&&r.enable(2),x.matcap&&r.enable(3),x.envMap&&r.enable(4),x.normalMapObjectSpace&&r.enable(5),x.normalMapTangentSpace&&r.enable(6),x.clearcoat&&r.enable(7),x.iridescence&&r.enable(8),x.alphaTest&&r.enable(9),x.vertexColors&&r.enable(10),x.vertexAlphas&&r.enable(11),x.vertexUv1s&&r.enable(12),x.vertexUv2s&&r.enable(13),x.vertexUv3s&&r.enable(14),x.vertexTangents&&r.enable(15),x.anisotropy&&r.enable(16),x.alphaHash&&r.enable(17),x.batching&&r.enable(18),x.dispersion&&r.enable(19),x.batchingColor&&r.enable(20),x.gradientMap&&r.enable(21),x.packedNormalMap&&r.enable(22),x.vertexNormals&&r.enable(23),b.push(r.mask),r.disableAll(),x.fog&&r.enable(0),x.useFog&&r.enable(1),x.flatShading&&r.enable(2),x.logarithmicDepthBuffer&&r.enable(3),x.reversedDepthBuffer&&r.enable(4),x.skinning&&r.enable(5),x.morphTargets&&r.enable(6),x.morphNormals&&r.enable(7),x.morphColors&&r.enable(8),x.premultipliedAlpha&&r.enable(9),x.shadowMapEnabled&&r.enable(10),x.doubleSided&&r.enable(11),x.flipSided&&r.enable(12),x.useDepthPacking&&r.enable(13),x.dithering&&r.enable(14),x.transmission&&r.enable(15),x.sheen&&r.enable(16),x.opaque&&r.enable(17),x.pointsUvs&&r.enable(18),x.decodeVideoTexture&&r.enable(19),x.decodeVideoTextureEmissive&&r.enable(20),x.alphaToCoverage&&r.enable(21),x.numLightProbeGrids>0&&r.enable(22),x.hasPositionAttribute&&r.enable(23),b.push(r.mask)}function A(b){const x=f[b.type];let E;if(x){const P=es[x];E=Ha.clone(P.uniforms)}else E=b.uniforms;return E}function y(b,x){let E=c.get(x);return E!==void 0?++E.usedTimes:(E=new Qx(a,x,b,s),h.push(E),c.set(x,E)),E}function T(b){if(--b.usedTimes===0){const x=h.indexOf(b);h[x]=h[h.length-1],h.pop(),c.delete(b.cacheKey),b.destroy()}}function M(b){o.remove(b)}function C(){o.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:A,acquireProgram:y,releaseProgram:T,releaseShaderCache:M,programs:h,dispose:C}}function n1(){let a=new WeakMap;function t(r){return a.has(r)}function e(r){let o=a.get(r);return o===void 0&&(o={},a.set(r,o)),o}function i(r){a.delete(r)}function s(r,o,l){a.get(r)[o]=l}function n(){a=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:n}}function a1(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.material.id!==t.material.id?a.material.id-t.material.id:a.materialVariant!==t.materialVariant?a.materialVariant-t.materialVariant:a.z!==t.z?a.z-t.z:a.id-t.id}function Uu(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.z!==t.z?t.z-a.z:a.id-t.id}function zu(){const a=[];let t=0;const e=[],i=[],s=[];function n(){t=0,e.length=0,i.length=0,s.length=0}function r(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,m,v,g,p){let w=a[t];return w===void 0?(w={id:d.id,object:d,geometry:f,material:m,materialVariant:r(d),groupOrder:v,renderOrder:d.renderOrder,z:g,group:p},a[t]=w):(w.id=d.id,w.object=d,w.geometry=f,w.material=m,w.materialVariant=r(d),w.groupOrder=v,w.renderOrder=d.renderOrder,w.z=g,w.group=p),t++,w}function l(d,f,m,v,g,p){const w=o(d,f,m,v,g,p);m.transmission>0?i.push(w):m.transparent===!0?s.push(w):e.push(w)}function h(d,f,m,v,g,p){const w=o(d,f,m,v,g,p);m.transmission>0?i.unshift(w):m.transparent===!0?s.unshift(w):e.unshift(w)}function c(d,f,m){e.length>1&&e.sort(d||a1),i.length>1&&i.sort(f||Uu),s.length>1&&s.sort(f||Uu),m&&(e.reverse(),i.reverse(),s.reverse())}function u(){for(let d=t,f=a.length;d<f;d++){const m=a[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:s,init:n,push:l,unshift:h,finish:u,sort:c}}function r1(){let a=new WeakMap;function t(i,s){const n=a.get(i);let r;return n===void 0?(r=new zu,a.set(i,[r])):s>=n.length?(r=new zu,n.push(r)):r=n[s],r}function e(){a=new WeakMap}return{get:t,dispose:e}}function o1(){const a={};return{get:function(t){if(a[t.id]!==void 0)return a[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new zt};break;case"SpotLight":e={position:new L,direction:new L,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new L,halfWidth:new L,halfHeight:new L};break}return a[t.id]=e,e}}}function l1(){const a={};return{get:function(t){if(a[t.id]!==void 0)return a[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[t.id]=e,e}}}let h1=0;function c1(a,t){return(t.castShadow?2:0)-(a.castShadow?2:0)+(t.map?1:0)-(a.map?1:0)}function u1(a){const t=new o1,e=l1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new L);const s=new L,n=new ge,r=new ge;function o(h){let c=0,u=0,d=0;for(let x=0;x<9;x++)i.probe[x].set(0,0,0);let f=0,m=0,v=0,g=0,p=0,w=0,A=0,y=0,T=0,M=0,C=0;h.sort(c1);for(let x=0,E=h.length;x<E;x++){const P=h[x],F=P.color,G=P.intensity,j=P.distance;let N=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===cn?N=P.shadow.map.texture:N=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)c+=F.r*G,u+=F.g*G,d+=F.b*G;else if(P.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(P.sh.coefficients[W],G);C++}else if(P.isDirectionalLight){const W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const z=P.shadow,K=e.get(P);K.shadowIntensity=z.intensity,K.shadowBias=z.bias,K.shadowNormalBias=z.normalBias,K.shadowRadius=z.radius,K.shadowMapSize=z.mapSize,i.directionalShadow[f]=K,i.directionalShadowMap[f]=N,i.directionalShadowMatrix[f]=P.shadow.matrix,w++}i.directional[f]=W,f++}else if(P.isSpotLight){const W=t.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(F).multiplyScalar(G),W.distance=j,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,i.spot[v]=W;const z=P.shadow;if(P.map&&(i.spotLightMap[T]=P.map,T++,z.updateMatrices(P),P.castShadow&&M++),i.spotLightMatrix[v]=z.matrix,P.castShadow){const K=e.get(P);K.shadowIntensity=z.intensity,K.shadowBias=z.bias,K.shadowNormalBias=z.normalBias,K.shadowRadius=z.radius,K.shadowMapSize=z.mapSize,i.spotShadow[v]=K,i.spotShadowMap[v]=N,y++}v++}else if(P.isRectAreaLight){const W=t.get(P);W.color.copy(F).multiplyScalar(G),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),i.rectArea[g]=W,g++}else if(P.isPointLight){const W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){const z=P.shadow,K=e.get(P);K.shadowIntensity=z.intensity,K.shadowBias=z.bias,K.shadowNormalBias=z.normalBias,K.shadowRadius=z.radius,K.shadowMapSize=z.mapSize,K.shadowCameraNear=z.camera.near,K.shadowCameraFar=z.camera.far,i.pointShadow[m]=K,i.pointShadowMap[m]=N,i.pointShadowMatrix[m]=P.shadow.matrix,A++}i.point[m]=W,m++}else if(P.isHemisphereLight){const W=t.get(P);W.skyColor.copy(P.color).multiplyScalar(G),W.groundColor.copy(P.groundColor).multiplyScalar(G),i.hemi[p]=W,p++}}g>0&&(a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ft.LTC_FLOAT_1,i.rectAreaLTC2=ft.LTC_FLOAT_2):(i.rectAreaLTC1=ft.LTC_HALF_1,i.rectAreaLTC2=ft.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=u,i.ambient[2]=d;const b=i.hash;(b.directionalLength!==f||b.pointLength!==m||b.spotLength!==v||b.rectAreaLength!==g||b.hemiLength!==p||b.numDirectionalShadows!==w||b.numPointShadows!==A||b.numSpotShadows!==y||b.numSpotMaps!==T||b.numLightProbes!==C)&&(i.directional.length=f,i.spot.length=v,i.rectArea.length=g,i.point.length=m,i.hemi.length=p,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=y+T-M,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=M,i.numLightProbes=C,b.directionalLength=f,b.pointLength=m,b.spotLength=v,b.rectAreaLength=g,b.hemiLength=p,b.numDirectionalShadows=w,b.numPointShadows=A,b.numSpotShadows=y,b.numSpotMaps=T,b.numLightProbes=C,i.version=h1++)}function l(h,c){let u=0,d=0,f=0,m=0,v=0;const g=c.matrixWorldInverse;for(let p=0,w=h.length;p<w;p++){const A=h[p];if(A.isDirectionalLight){const y=i.directional[u];y.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),u++}else if(A.isSpotLight){const y=i.spot[f];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),f++}else if(A.isRectAreaLight){const y=i.rectArea[m];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(g),r.identity(),n.copy(A.matrixWorld),n.premultiply(g),r.extractRotation(n),y.halfWidth.set(A.width*.5,0,0),y.halfHeight.set(0,A.height*.5,0),y.halfWidth.applyMatrix4(r),y.halfHeight.applyMatrix4(r),m++}else if(A.isPointLight){const y=i.point[d];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(g),d++}else if(A.isHemisphereLight){const y=i.hemi[v];y.direction.setFromMatrixPosition(A.matrixWorld),y.direction.transformDirection(g),v++}}}return{setup:o,setupView:l,state:i}}function ku(a){const t=new u1(a),e=[],i=[],s=[];function n(d){u.camera=d,e.length=0,i.length=0,s.length=0}function r(d){e.push(d)}function o(d){i.push(d)}function l(d){s.push(d)}function h(){t.setup(e)}function c(d){t.setupView(e,d)}const u={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:n,state:u,setupLights:h,setupLightsView:c,pushLight:r,pushShadow:o,pushLightProbeGrid:l}}function d1(a){let t=new WeakMap;function e(s,n=0){const r=t.get(s);let o;return r===void 0?(o=new ku(a),t.set(s,[o])):n>=r.length?(o=new ku(a),r.push(o)):o=r[n],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const f1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,p1=`uniform sampler2D shadow_pass;
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
}`,m1=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],g1=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],Nu=new ge,ya=new L,fl=new L;function v1(a,t,e){let i=new gf;const s=new vt,n=new vt,r=new De,o=new Tm,l=new Em,h={},c=e.maxTextureSize,u={[ks]:bi,[bi]:ks,[ti]:ti},d=new Ot({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:f1,fragmentShader:p1}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new Ee;m.setAttribute("position",new me(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new we(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kr;let p=this.type;this.render=function(M,C,b){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||M.length===0)return;this.type===vp&&(kt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Kr);const x=a.getRenderTarget(),E=a.getActiveCubeFace(),P=a.getActiveMipmapLevel(),F=a.state;F.setBlending(ns),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const G=p!==this.type;G&&C.traverse(function(j){j.material&&(Array.isArray(j.material)?j.material.forEach(N=>N.needsUpdate=!0):j.material.needsUpdate=!0)});for(let j=0,N=M.length;j<N;j++){const W=M[j],z=W.shadow;if(z===void 0){kt("WebGLShadowMap:",W,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const K=z.getFrameExtents();s.multiply(K),n.copy(z.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(n.x=Math.floor(c/K.x),s.x=n.x*K.x,z.mapSize.x=n.x),s.y>c&&(n.y=Math.floor(c/K.y),s.y=n.y*K.y,z.mapSize.y=n.y));const tt=a.state.buffers.depth.getReversed();if(z.camera._reversedDepth=tt,z.map===null||G===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===La){if(W.isPointLight){kt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new _i(s.x,s.y,{format:cn,type:Ri,minFilter:hi,magFilter:hi,generateMipmaps:!1}),z.map.texture.name=W.name+".shadowMap",z.map.depthTexture=new ea(s.x,s.y,Xi),z.map.depthTexture.name=W.name+".shadowMapDepth",z.map.depthTexture.format=ws,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=oe,z.map.depthTexture.magFilter=oe}else W.isPointLight?(z.map=new Af(s.x),z.map.depthTexture=new Mm(s.x,ls)):(z.map=new _i(s.x,s.y),z.map.depthTexture=new ea(s.x,s.y,ls)),z.map.depthTexture.name=W.name+".shadowMap",z.map.depthTexture.format=ws,this.type===Kr?(z.map.depthTexture.compareFunction=tt?oc:rc,z.map.depthTexture.minFilter=hi,z.map.depthTexture.magFilter=hi):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=oe,z.map.depthTexture.magFilter=oe);z.camera.updateProjectionMatrix()}const at=z.map.isWebGLCubeRenderTarget?6:1;for(let ut=0;ut<at;ut++){if(z.map.isWebGLCubeRenderTarget)a.setRenderTarget(z.map,ut),a.clear();else{ut===0&&(a.setRenderTarget(z.map),a.clear());const xt=z.getViewport(ut);r.set(n.x*xt.x,n.y*xt.y,n.x*xt.z,n.y*xt.w),F.viewport(r)}if(W.isPointLight){const xt=z.camera,Yt=z.matrix,Ce=W.distance||xt.far;Ce!==xt.far&&(xt.far=Ce,xt.updateProjectionMatrix()),ya.setFromMatrixPosition(W.matrixWorld),xt.position.copy(ya),fl.copy(xt.position),fl.add(m1[ut]),xt.up.copy(g1[ut]),xt.lookAt(fl),xt.updateMatrixWorld(),Yt.makeTranslation(-ya.x,-ya.y,-ya.z),Nu.multiplyMatrices(xt.projectionMatrix,xt.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Nu,xt.coordinateSystem,xt.reversedDepth)}else z.updateMatrices(W);i=z.getFrustum(),y(C,b,z.camera,W,this.type)}z.isPointLightShadow!==!0&&this.type===La&&w(z,b),z.needsUpdate=!1}p=this.type,g.needsUpdate=!1,a.setRenderTarget(x,E,P)};function w(M,C){const b=t.update(v);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new _i(s.x,s.y,{format:cn,type:Ri})),d.uniforms.shadow_pass.value=M.map.depthTexture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,a.setRenderTarget(M.mapPass),a.clear(),a.renderBufferDirect(C,null,b,d,v,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,a.setRenderTarget(M.map),a.clear(),a.renderBufferDirect(C,null,b,f,v,null)}function A(M,C,b,x){let E=null;const P=b.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(P!==void 0)E=P;else if(E=b.isPointLight===!0?l:o,a.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const F=E.uuid,G=C.uuid;let j=h[F];j===void 0&&(j={},h[F]=j);let N=j[G];N===void 0&&(N=E.clone(),j[G]=N,C.addEventListener("dispose",T)),E=N}if(E.visible=C.visible,E.wireframe=C.wireframe,x===La?E.side=C.shadowSide!==null?C.shadowSide:C.side:E.side=C.shadowSide!==null?C.shadowSide:u[C.side],E.alphaMap=C.alphaMap,E.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,E.map=C.map,E.clipShadows=C.clipShadows,E.clippingPlanes=C.clippingPlanes,E.clipIntersection=C.clipIntersection,E.displacementMap=C.displacementMap,E.displacementScale=C.displacementScale,E.displacementBias=C.displacementBias,E.wireframeLinewidth=C.wireframeLinewidth,E.linewidth=C.linewidth,b.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const F=a.properties.get(E);F.light=b}return E}function y(M,C,b,x,E){if(M.visible===!1)return;if(M.layers.test(C.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&E===La)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,M.matrixWorld);const G=t.update(M),j=M.material;if(Array.isArray(j)){const N=G.groups;for(let W=0,z=N.length;W<z;W++){const K=N[W],tt=j[K.materialIndex];if(tt&&tt.visible){const at=A(M,tt,x,E);M.onBeforeShadow(a,M,C,b,G,at,K),a.renderBufferDirect(b,null,G,at,M,K),M.onAfterShadow(a,M,C,b,G,at,K)}}}else if(j.visible){const N=A(M,j,x,E);M.onBeforeShadow(a,M,C,b,G,N,null),a.renderBufferDirect(b,null,G,N,M,null),M.onAfterShadow(a,M,C,b,G,N,null)}}const F=M.children;for(let G=0,j=F.length;G<j;G++)y(F[G],C,b,x,E)}function T(M){M.target.removeEventListener("dispose",T);for(const b in h){const x=h[b],E=M.target.uuid;E in x&&(x[E].dispose(),delete x[E])}}}function x1(a,t){function e(){let D=!1;const nt=new De;let $=null;const ct=new De(0,0,0,0);return{setMask:function(gt){$!==gt&&!D&&(a.colorMask(gt,gt,gt,gt),$=gt)},setLocked:function(gt){D=gt},setClear:function(gt,J,Ct,At,Pe){Pe===!0&&(gt*=At,J*=At,Ct*=At),nt.set(gt,J,Ct,At),ct.equals(nt)===!1&&(a.clearColor(gt,J,Ct,At),ct.copy(nt))},reset:function(){D=!1,$=null,ct.set(-1,0,0,0)}}}function i(){let D=!1,nt=!1,$=null,ct=null,gt=null;return{setReversed:function(J){if(nt!==J){const Ct=t.get("EXT_clip_control");J?Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.ZERO_TO_ONE_EXT):Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.NEGATIVE_ONE_TO_ONE_EXT),nt=J;const At=gt;gt=null,this.setClear(At)}},getReversed:function(){return nt},setTest:function(J){J?et(a.DEPTH_TEST):Nt(a.DEPTH_TEST)},setMask:function(J){$!==J&&!D&&(a.depthMask(J),$=J)},setFunc:function(J){if(nt&&(J=Zp[J]),ct!==J){switch(J){case ql:a.depthFunc(a.NEVER);break;case jl:a.depthFunc(a.ALWAYS);break;case $l:a.depthFunc(a.LESS);break;case Qn:a.depthFunc(a.LEQUAL);break;case Zl:a.depthFunc(a.EQUAL);break;case Kl:a.depthFunc(a.GEQUAL);break;case Yl:a.depthFunc(a.GREATER);break;case Ql:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}ct=J}},setLocked:function(J){D=J},setClear:function(J){gt!==J&&(gt=J,nt&&(J=1-J),a.clearDepth(J))},reset:function(){D=!1,$=null,ct=null,gt=null,nt=!1}}}function s(){let D=!1,nt=null,$=null,ct=null,gt=null,J=null,Ct=null,At=null,Pe=null;return{setTest:function(xe){D||(xe?et(a.STENCIL_TEST):Nt(a.STENCIL_TEST))},setMask:function(xe){nt!==xe&&!D&&(a.stencilMask(xe),nt=xe)},setFunc:function(xe,ji,$i){($!==xe||ct!==ji||gt!==$i)&&(a.stencilFunc(xe,ji,$i),$=xe,ct=ji,gt=$i)},setOp:function(xe,ji,$i){(J!==xe||Ct!==ji||At!==$i)&&(a.stencilOp(xe,ji,$i),J=xe,Ct=ji,At=$i)},setLocked:function(xe){D=xe},setClear:function(xe){Pe!==xe&&(a.clearStencil(xe),Pe=xe)},reset:function(){D=!1,nt=null,$=null,ct=null,gt=null,J=null,Ct=null,At=null,Pe=null}}}const n=new e,r=new i,o=new s,l=new WeakMap,h=new WeakMap;let c={},u={},d={},f=new WeakMap,m=[],v=null,g=!1,p=null,w=null,A=null,y=null,T=null,M=null,C=null,b=new zt(0,0,0),x=0,E=!1,P=null,F=null,G=null,j=null,N=null;const W=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,K=0;const tt=a.getParameter(a.VERSION);tt.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(tt)[1]),z=K>=1):tt.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),z=K>=2);let at=null,ut={};const xt=a.getParameter(a.SCISSOR_BOX),Yt=a.getParameter(a.VIEWPORT),Ce=new De().fromArray(xt),ie=new De().fromArray(Yt);function Y(D,nt,$,ct){const gt=new Uint8Array(4),J=a.createTexture();a.bindTexture(D,J),a.texParameteri(D,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(D,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Ct=0;Ct<$;Ct++)D===a.TEXTURE_3D||D===a.TEXTURE_2D_ARRAY?a.texImage3D(nt,0,a.RGBA,1,1,ct,0,a.RGBA,a.UNSIGNED_BYTE,gt):a.texImage2D(nt+Ct,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,gt);return J}const rt={};rt[a.TEXTURE_2D]=Y(a.TEXTURE_2D,a.TEXTURE_2D,1),rt[a.TEXTURE_CUBE_MAP]=Y(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),rt[a.TEXTURE_2D_ARRAY]=Y(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),rt[a.TEXTURE_3D]=Y(a.TEXTURE_3D,a.TEXTURE_3D,1,1),n.setClear(0,0,0,1),r.setClear(1),o.setClear(0),et(a.DEPTH_TEST),r.setFunc(Qn),Ne(!1),Ge(Nc),et(a.CULL_FACE),se(ns);function et(D){c[D]!==!0&&(a.enable(D),c[D]=!0)}function Nt(D){c[D]!==!1&&(a.disable(D),c[D]=!1)}function Ht(D,nt){return d[D]!==nt?(a.bindFramebuffer(D,nt),d[D]=nt,D===a.DRAW_FRAMEBUFFER&&(d[a.FRAMEBUFFER]=nt),D===a.FRAMEBUFFER&&(d[a.DRAW_FRAMEBUFFER]=nt),!0):!1}function It(D,nt){let $=m,ct=!1;if(D){$=f.get(nt),$===void 0&&($=[],f.set(nt,$));const gt=D.textures;if($.length!==gt.length||$[0]!==a.COLOR_ATTACHMENT0){for(let J=0,Ct=gt.length;J<Ct;J++)$[J]=a.COLOR_ATTACHMENT0+J;$.length=gt.length,ct=!0}}else $[0]!==a.BACK&&($[0]=a.BACK,ct=!0);ct&&a.drawBuffers($)}function Ie(D){return v!==D?(a.useProgram(D),v=D,!0):!1}const $t={[en]:a.FUNC_ADD,[bp]:a.FUNC_SUBTRACT,[_p]:a.FUNC_REVERSE_SUBTRACT};$t[yp]=a.MIN,$t[Mp]=a.MAX;const de={[wp]:a.ZERO,[Sp]:a.ONE,[Ap]:a.SRC_COLOR,[Wl]:a.SRC_ALPHA,[Fp]:a.SRC_ALPHA_SATURATE,[Rp]:a.DST_COLOR,[Ep]:a.DST_ALPHA,[Tp]:a.ONE_MINUS_SRC_COLOR,[Xl]:a.ONE_MINUS_SRC_ALPHA,[Pp]:a.ONE_MINUS_DST_COLOR,[Cp]:a.ONE_MINUS_DST_ALPHA,[Lp]:a.CONSTANT_COLOR,[Dp]:a.ONE_MINUS_CONSTANT_COLOR,[Ip]:a.CONSTANT_ALPHA,[Up]:a.ONE_MINUS_CONSTANT_ALPHA};function se(D,nt,$,ct,gt,J,Ct,At,Pe,xe){if(D===ns){g===!0&&(Nt(a.BLEND),g=!1);return}if(g===!1&&(et(a.BLEND),g=!0),D!==xp){if(D!==p||xe!==E){if((w!==en||T!==en)&&(a.blendEquation(a.FUNC_ADD),w=en,T=en),xe)switch(D){case as:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case He:a.blendFunc(a.ONE,a.ONE);break;case Oc:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case Bc:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:Qt("WebGLState: Invalid blending: ",D);break}else switch(D){case as:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case He:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case Oc:Qt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Bc:Qt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qt("WebGLState: Invalid blending: ",D);break}A=null,y=null,M=null,C=null,b.set(0,0,0),x=0,p=D,E=xe}return}gt=gt||nt,J=J||$,Ct=Ct||ct,(nt!==w||gt!==T)&&(a.blendEquationSeparate($t[nt],$t[gt]),w=nt,T=gt),($!==A||ct!==y||J!==M||Ct!==C)&&(a.blendFuncSeparate(de[$],de[ct],de[J],de[Ct]),A=$,y=ct,M=J,C=Ct),(At.equals(b)===!1||Pe!==x)&&(a.blendColor(At.r,At.g,At.b,Pe),b.copy(At),x=Pe),p=D,E=!1}function te(D,nt){D.side===ti?Nt(a.CULL_FACE):et(a.CULL_FACE);let $=D.side===bi;nt&&($=!$),Ne($),D.blending===as&&D.transparent===!1?se(ns):se(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),r.setFunc(D.depthFunc),r.setTest(D.depthTest),r.setMask(D.depthWrite),n.setMask(D.colorWrite);const ct=D.stencilWrite;o.setTest(ct),ct&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ke(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?et(a.SAMPLE_ALPHA_TO_COVERAGE):Nt(a.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(D){P!==D&&(D?a.frontFace(a.CW):a.frontFace(a.CCW),P=D)}function Ge(D){D!==mp?(et(a.CULL_FACE),D!==F&&(D===Nc?a.cullFace(a.BACK):D===gp?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Nt(a.CULL_FACE),F=D}function je(D){D!==G&&(z&&a.lineWidth(D),G=D)}function Ke(D,nt,$){D?(et(a.POLYGON_OFFSET_FILL),(j!==nt||N!==$)&&(j=nt,N=$,r.getReversed()&&(nt=-nt),a.polygonOffset(nt,$))):Nt(a.POLYGON_OFFSET_FILL)}function Re(D){D?et(a.SCISSOR_TEST):Nt(a.SCISSOR_TEST)}function Oe(D){D===void 0&&(D=a.TEXTURE0+W-1),at!==D&&(a.activeTexture(D),at=D)}function I(D,nt,$){$===void 0&&(at===null?$=a.TEXTURE0+W-1:$=at);let ct=ut[$];ct===void 0&&(ct={type:void 0,texture:void 0},ut[$]=ct),(ct.type!==D||ct.texture!==nt)&&(at!==$&&(a.activeTexture($),at=$),a.bindTexture(D,nt||rt[D]),ct.type=D,ct.texture=nt)}function mi(){const D=ut[at];D!==void 0&&D.type!==void 0&&(a.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function re(){try{a.compressedTexImage2D(...arguments)}catch(D){Qt("WebGLState:",D)}}function R(){try{a.compressedTexImage3D(...arguments)}catch(D){Qt("WebGLState:",D)}}function _(){try{a.texSubImage2D(...arguments)}catch(D){Qt("WebGLState:",D)}}function k(){try{a.texSubImage3D(...arguments)}catch(D){Qt("WebGLState:",D)}}function H(){try{a.compressedTexSubImage2D(...arguments)}catch(D){Qt("WebGLState:",D)}}function X(){try{a.compressedTexSubImage3D(...arguments)}catch(D){Qt("WebGLState:",D)}}function st(){try{a.texStorage2D(...arguments)}catch(D){Qt("WebGLState:",D)}}function ot(){try{a.texStorage3D(...arguments)}catch(D){Qt("WebGLState:",D)}}function q(){try{a.texImage2D(...arguments)}catch(D){Qt("WebGLState:",D)}}function Z(){try{a.texImage3D(...arguments)}catch(D){Qt("WebGLState:",D)}}function lt(D){return u[D]!==void 0?u[D]:a.getParameter(D)}function Rt(D,nt){u[D]!==nt&&(a.pixelStorei(D,nt),u[D]=nt)}function dt(D){Ce.equals(D)===!1&&(a.scissor(D.x,D.y,D.z,D.w),Ce.copy(D))}function ht(D){ie.equals(D)===!1&&(a.viewport(D.x,D.y,D.z,D.w),ie.copy(D))}function Dt(D,nt){let $=h.get(nt);$===void 0&&($=new WeakMap,h.set(nt,$));let ct=$.get(D);ct===void 0&&(ct=a.getUniformBlockIndex(nt,D.name),$.set(D,ct))}function Ut(D,nt){const ct=h.get(nt).get(D);l.get(nt)!==ct&&(a.uniformBlockBinding(nt,ct,D.__bindingPointIndex),l.set(nt,ct))}function Gt(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),r.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),a.pixelStorei(a.PACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.BROWSER_DEFAULT_WEBGL),a.pixelStorei(a.PACK_ROW_LENGTH,0),a.pixelStorei(a.PACK_SKIP_PIXELS,0),a.pixelStorei(a.PACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_ROW_LENGTH,0),a.pixelStorei(a.UNPACK_IMAGE_HEIGHT,0),a.pixelStorei(a.UNPACK_SKIP_PIXELS,0),a.pixelStorei(a.UNPACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_SKIP_IMAGES,0),c={},u={},at=null,ut={},d={},f=new WeakMap,m=[],v=null,g=!1,p=null,w=null,A=null,y=null,T=null,M=null,C=null,b=new zt(0,0,0),x=0,E=!1,P=null,F=null,G=null,j=null,N=null,Ce.set(0,0,a.canvas.width,a.canvas.height),ie.set(0,0,a.canvas.width,a.canvas.height),n.reset(),r.reset(),o.reset()}return{buffers:{color:n,depth:r,stencil:o},enable:et,disable:Nt,bindFramebuffer:Ht,drawBuffers:It,useProgram:Ie,setBlending:se,setMaterial:te,setFlipSided:Ne,setCullFace:Ge,setLineWidth:je,setPolygonOffset:Ke,setScissorTest:Re,activeTexture:Oe,bindTexture:I,unbindTexture:mi,compressedTexImage2D:re,compressedTexImage3D:R,texImage2D:q,texImage3D:Z,pixelStorei:Rt,getParameter:lt,updateUBOMapping:Dt,uniformBlockBinding:Ut,texStorage2D:st,texStorage3D:ot,texSubImage2D:_,texSubImage3D:k,compressedTexSubImage2D:H,compressedTexSubImage3D:X,scissor:dt,viewport:ht,reset:Gt}}function b1(a,t,e,i,s,n,r){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new vt,c=new WeakMap,u=new Set;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,_){return m?new OffscreenCanvas(R,_):Na("canvas")}function g(R,_,k){let H=1;const X=re(R);if((X.width>k||X.height>k)&&(H=k/Math.max(X.width,X.height)),H<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const st=Math.floor(H*X.width),ot=Math.floor(H*X.height);d===void 0&&(d=v(st,ot));const q=_?v(st,ot):d;return q.width=st,q.height=ot,q.getContext("2d").drawImage(R,0,0,st,ot),kt("WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+st+"x"+ot+")."),q}else return"data"in R&&kt("WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),R;return R}function p(R){return R.generateMipmaps}function w(R){a.generateMipmap(R)}function A(R){return R.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?a.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function y(R,_,k,H,X,st=!1){if(R!==null){if(a[R]!==void 0)return a[R];kt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ot;H&&(ot=t.get("EXT_texture_norm16"),ot||kt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=_;if(_===a.RED&&(k===a.FLOAT&&(q=a.R32F),k===a.HALF_FLOAT&&(q=a.R16F),k===a.UNSIGNED_BYTE&&(q=a.R8),k===a.UNSIGNED_SHORT&&ot&&(q=ot.R16_EXT),k===a.SHORT&&ot&&(q=ot.R16_SNORM_EXT)),_===a.RED_INTEGER&&(k===a.UNSIGNED_BYTE&&(q=a.R8UI),k===a.UNSIGNED_SHORT&&(q=a.R16UI),k===a.UNSIGNED_INT&&(q=a.R32UI),k===a.BYTE&&(q=a.R8I),k===a.SHORT&&(q=a.R16I),k===a.INT&&(q=a.R32I)),_===a.RG&&(k===a.FLOAT&&(q=a.RG32F),k===a.HALF_FLOAT&&(q=a.RG16F),k===a.UNSIGNED_BYTE&&(q=a.RG8),k===a.UNSIGNED_SHORT&&ot&&(q=ot.RG16_EXT),k===a.SHORT&&ot&&(q=ot.RG16_SNORM_EXT)),_===a.RG_INTEGER&&(k===a.UNSIGNED_BYTE&&(q=a.RG8UI),k===a.UNSIGNED_SHORT&&(q=a.RG16UI),k===a.UNSIGNED_INT&&(q=a.RG32UI),k===a.BYTE&&(q=a.RG8I),k===a.SHORT&&(q=a.RG16I),k===a.INT&&(q=a.RG32I)),_===a.RGB_INTEGER&&(k===a.UNSIGNED_BYTE&&(q=a.RGB8UI),k===a.UNSIGNED_SHORT&&(q=a.RGB16UI),k===a.UNSIGNED_INT&&(q=a.RGB32UI),k===a.BYTE&&(q=a.RGB8I),k===a.SHORT&&(q=a.RGB16I),k===a.INT&&(q=a.RGB32I)),_===a.RGBA_INTEGER&&(k===a.UNSIGNED_BYTE&&(q=a.RGBA8UI),k===a.UNSIGNED_SHORT&&(q=a.RGBA16UI),k===a.UNSIGNED_INT&&(q=a.RGBA32UI),k===a.BYTE&&(q=a.RGBA8I),k===a.SHORT&&(q=a.RGBA16I),k===a.INT&&(q=a.RGBA32I)),_===a.RGB&&(k===a.UNSIGNED_SHORT&&ot&&(q=ot.RGB16_EXT),k===a.SHORT&&ot&&(q=ot.RGB16_SNORM_EXT),k===a.UNSIGNED_INT_5_9_9_9_REV&&(q=a.RGB9_E5),k===a.UNSIGNED_INT_10F_11F_11F_REV&&(q=a.R11F_G11F_B10F)),_===a.RGBA){const Z=st?uo:Zt.getTransfer(X);k===a.FLOAT&&(q=a.RGBA32F),k===a.HALF_FLOAT&&(q=a.RGBA16F),k===a.UNSIGNED_BYTE&&(q=Z===ae?a.SRGB8_ALPHA8:a.RGBA8),k===a.UNSIGNED_SHORT&&ot&&(q=ot.RGBA16_EXT),k===a.SHORT&&ot&&(q=ot.RGBA16_SNORM_EXT),k===a.UNSIGNED_SHORT_4_4_4_4&&(q=a.RGBA4),k===a.UNSIGNED_SHORT_5_5_5_1&&(q=a.RGB5_A1)}return(q===a.R16F||q===a.R32F||q===a.RG16F||q===a.RG32F||q===a.RGBA16F||q===a.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function T(R,_){let k;return R?_===null||_===ls||_===ka?k=a.DEPTH24_STENCIL8:_===Xi?k=a.DEPTH32F_STENCIL8:_===za&&(k=a.DEPTH24_STENCIL8,kt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===ls||_===ka?k=a.DEPTH_COMPONENT24:_===Xi?k=a.DEPTH_COMPONENT32F:_===za&&(k=a.DEPTH_COMPONENT16),k}function M(R,_){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==oe&&R.minFilter!==hi?Math.log2(Math.max(_.width,_.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?_.mipmaps.length:1}function C(R){const _=R.target;_.removeEventListener("dispose",C),x(_),_.isVideoTexture&&c.delete(_),_.isHTMLTexture&&u.delete(_)}function b(R){const _=R.target;_.removeEventListener("dispose",b),P(_)}function x(R){const _=i.get(R);if(_.__webglInit===void 0)return;const k=R.source,H=f.get(k);if(H){const X=H[_.__cacheKey];X.usedTimes--,X.usedTimes===0&&E(R),Object.keys(H).length===0&&f.delete(k)}i.remove(R)}function E(R){const _=i.get(R);a.deleteTexture(_.__webglTexture);const k=R.source,H=f.get(k);delete H[_.__cacheKey],r.memory.textures--}function P(R){const _=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(_.__webglFramebuffer[H]))for(let X=0;X<_.__webglFramebuffer[H].length;X++)a.deleteFramebuffer(_.__webglFramebuffer[H][X]);else a.deleteFramebuffer(_.__webglFramebuffer[H]);_.__webglDepthbuffer&&a.deleteRenderbuffer(_.__webglDepthbuffer[H])}else{if(Array.isArray(_.__webglFramebuffer))for(let H=0;H<_.__webglFramebuffer.length;H++)a.deleteFramebuffer(_.__webglFramebuffer[H]);else a.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&a.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&a.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let H=0;H<_.__webglColorRenderbuffer.length;H++)_.__webglColorRenderbuffer[H]&&a.deleteRenderbuffer(_.__webglColorRenderbuffer[H]);_.__webglDepthRenderbuffer&&a.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const k=R.textures;for(let H=0,X=k.length;H<X;H++){const st=i.get(k[H]);st.__webglTexture&&(a.deleteTexture(st.__webglTexture),r.memory.textures--),i.remove(k[H])}i.remove(R)}let F=0;function G(){F=0}function j(){return F}function N(R){F=R}function W(){const R=F;return R>=s.maxTextures&&kt("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),F+=1,R}function z(R){const _=[];return _.push(R.wrapS),_.push(R.wrapT),_.push(R.wrapR||0),_.push(R.magFilter),_.push(R.minFilter),_.push(R.anisotropy),_.push(R.internalFormat),_.push(R.format),_.push(R.type),_.push(R.generateMipmaps),_.push(R.premultiplyAlpha),_.push(R.flipY),_.push(R.unpackAlignment),_.push(R.colorSpace),_.join()}function K(R,_){const k=i.get(R);if(R.isVideoTexture&&I(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&k.__version!==R.version){const H=R.image;if(H===null)kt("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)kt("WebGLRenderer: Texture marked for update but image is incomplete");else{Nt(k,R,_);return}}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(a.TEXTURE_2D,k.__webglTexture,a.TEXTURE0+_)}function tt(R,_){const k=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){Nt(k,R,_);return}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(a.TEXTURE_2D_ARRAY,k.__webglTexture,a.TEXTURE0+_)}function at(R,_){const k=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){Nt(k,R,_);return}e.bindTexture(a.TEXTURE_3D,k.__webglTexture,a.TEXTURE0+_)}function ut(R,_){const k=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&k.__version!==R.version){Ht(k,R,_);return}e.bindTexture(a.TEXTURE_CUBE_MAP,k.__webglTexture,a.TEXTURE0+_)}const xt={[os]:a.REPEAT,[ki]:a.CLAMP_TO_EDGE,[Jl]:a.MIRRORED_REPEAT},Yt={[oe]:a.NEAREST,[qa]:a.NEAREST_MIPMAP_NEAREST,[tr]:a.NEAREST_MIPMAP_LINEAR,[hi]:a.LINEAR,[Uo]:a.LINEAR_MIPMAP_NEAREST,[an]:a.LINEAR_MIPMAP_LINEAR},Ce={[Bp]:a.NEVER,[Xp]:a.ALWAYS,[Hp]:a.LESS,[rc]:a.LEQUAL,[Gp]:a.EQUAL,[oc]:a.GEQUAL,[Vp]:a.GREATER,[Wp]:a.NOTEQUAL};function ie(R,_){if(_.type===Xi&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===hi||_.magFilter===Uo||_.magFilter===tr||_.magFilter===an||_.minFilter===hi||_.minFilter===Uo||_.minFilter===tr||_.minFilter===an)&&kt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(R,a.TEXTURE_WRAP_S,xt[_.wrapS]),a.texParameteri(R,a.TEXTURE_WRAP_T,xt[_.wrapT]),(R===a.TEXTURE_3D||R===a.TEXTURE_2D_ARRAY)&&a.texParameteri(R,a.TEXTURE_WRAP_R,xt[_.wrapR]),a.texParameteri(R,a.TEXTURE_MAG_FILTER,Yt[_.magFilter]),a.texParameteri(R,a.TEXTURE_MIN_FILTER,Yt[_.minFilter]),_.compareFunction&&(a.texParameteri(R,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(R,a.TEXTURE_COMPARE_FUNC,Ce[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===oe||_.minFilter!==tr&&_.minFilter!==an||_.type===Xi&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");a.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Y(R,_){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,_.addEventListener("dispose",C));const H=_.source;let X=f.get(H);X===void 0&&(X={},f.set(H,X));const st=z(_);if(st!==R.__cacheKey){X[st]===void 0&&(X[st]={texture:a.createTexture(),usedTimes:0},r.memory.textures++,k=!0),X[st].usedTimes++;const ot=X[R.__cacheKey];ot!==void 0&&(X[R.__cacheKey].usedTimes--,ot.usedTimes===0&&E(_)),R.__cacheKey=st,R.__webglTexture=X[st].texture}return k}function rt(R,_,k){return Math.floor(Math.floor(R/k)/_)}function et(R,_,k,H){const st=R.updateRanges;if(st.length===0)e.texSubImage2D(a.TEXTURE_2D,0,0,0,_.width,_.height,k,H,_.data);else{st.sort((Rt,dt)=>Rt.start-dt.start);let ot=0;for(let Rt=1;Rt<st.length;Rt++){const dt=st[ot],ht=st[Rt],Dt=dt.start+dt.count,Ut=rt(ht.start,_.width,4),Gt=rt(dt.start,_.width,4);ht.start<=Dt+1&&Ut===Gt&&rt(ht.start+ht.count-1,_.width,4)===Ut?dt.count=Math.max(dt.count,ht.start+ht.count-dt.start):(++ot,st[ot]=ht)}st.length=ot+1;const q=e.getParameter(a.UNPACK_ROW_LENGTH),Z=e.getParameter(a.UNPACK_SKIP_PIXELS),lt=e.getParameter(a.UNPACK_SKIP_ROWS);e.pixelStorei(a.UNPACK_ROW_LENGTH,_.width);for(let Rt=0,dt=st.length;Rt<dt;Rt++){const ht=st[Rt],Dt=Math.floor(ht.start/4),Ut=Math.ceil(ht.count/4),Gt=Dt%_.width,D=Math.floor(Dt/_.width),nt=Ut,$=1;e.pixelStorei(a.UNPACK_SKIP_PIXELS,Gt),e.pixelStorei(a.UNPACK_SKIP_ROWS,D),e.texSubImage2D(a.TEXTURE_2D,0,Gt,D,nt,$,k,H,_.data)}R.clearUpdateRanges(),e.pixelStorei(a.UNPACK_ROW_LENGTH,q),e.pixelStorei(a.UNPACK_SKIP_PIXELS,Z),e.pixelStorei(a.UNPACK_SKIP_ROWS,lt)}}function Nt(R,_,k){let H=a.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(H=a.TEXTURE_2D_ARRAY),_.isData3DTexture&&(H=a.TEXTURE_3D);const X=Y(R,_),st=_.source;e.bindTexture(H,R.__webglTexture,a.TEXTURE0+k);const ot=i.get(st);if(st.version!==ot.__version||X===!0){if(e.activeTexture(a.TEXTURE0+k),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const $=Zt.getPrimaries(Zt.workingColorSpace),ct=_.colorSpace===Ds?null:Zt.getPrimaries(_.colorSpace),gt=_.colorSpace===Ds||$===ct?a.NONE:a.BROWSER_DEFAULT_WEBGL;e.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt)}e.pixelStorei(a.UNPACK_ALIGNMENT,_.unpackAlignment);let Z=g(_.image,!1,s.maxTextureSize);Z=mi(_,Z);const lt=n.convert(_.format,_.colorSpace),Rt=n.convert(_.type);let dt=y(_.internalFormat,lt,Rt,_.normalized,_.colorSpace,_.isVideoTexture);ie(H,_);let ht;const Dt=_.mipmaps,Ut=_.isVideoTexture!==!0,Gt=ot.__version===void 0||X===!0,D=st.dataReady,nt=M(_,Z);if(_.isDepthTexture)dt=T(_.format===rn,_.type),Gt&&(Ut?e.texStorage2D(a.TEXTURE_2D,1,dt,Z.width,Z.height):e.texImage2D(a.TEXTURE_2D,0,dt,Z.width,Z.height,0,lt,Rt,null));else if(_.isDataTexture)if(Dt.length>0){Ut&&Gt&&e.texStorage2D(a.TEXTURE_2D,nt,dt,Dt[0].width,Dt[0].height);for(let $=0,ct=Dt.length;$<ct;$++)ht=Dt[$],Ut?D&&e.texSubImage2D(a.TEXTURE_2D,$,0,0,ht.width,ht.height,lt,Rt,ht.data):e.texImage2D(a.TEXTURE_2D,$,dt,ht.width,ht.height,0,lt,Rt,ht.data);_.generateMipmaps=!1}else Ut?(Gt&&e.texStorage2D(a.TEXTURE_2D,nt,dt,Z.width,Z.height),D&&et(_,Z,lt,Rt)):e.texImage2D(a.TEXTURE_2D,0,dt,Z.width,Z.height,0,lt,Rt,Z.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ut&&Gt&&e.texStorage3D(a.TEXTURE_2D_ARRAY,nt,dt,Dt[0].width,Dt[0].height,Z.depth);for(let $=0,ct=Dt.length;$<ct;$++)if(ht=Dt[$],_.format!==qi)if(lt!==null)if(Ut){if(D)if(_.layerUpdates.size>0){const gt=mu(ht.width,ht.height,_.format,_.type);for(const J of _.layerUpdates){const Ct=ht.data.subarray(J*gt/ht.data.BYTES_PER_ELEMENT,(J+1)*gt/ht.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,$,0,0,J,ht.width,ht.height,1,lt,Ct)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,$,0,0,0,ht.width,ht.height,Z.depth,lt,ht.data)}else e.compressedTexImage3D(a.TEXTURE_2D_ARRAY,$,dt,ht.width,ht.height,Z.depth,0,ht.data,0,0);else kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ut?D&&e.texSubImage3D(a.TEXTURE_2D_ARRAY,$,0,0,0,ht.width,ht.height,Z.depth,lt,Rt,ht.data):e.texImage3D(a.TEXTURE_2D_ARRAY,$,dt,ht.width,ht.height,Z.depth,0,lt,Rt,ht.data)}else{Ut&&Gt&&e.texStorage2D(a.TEXTURE_2D,nt,dt,Dt[0].width,Dt[0].height);for(let $=0,ct=Dt.length;$<ct;$++)ht=Dt[$],_.format!==qi?lt!==null?Ut?D&&e.compressedTexSubImage2D(a.TEXTURE_2D,$,0,0,ht.width,ht.height,lt,ht.data):e.compressedTexImage2D(a.TEXTURE_2D,$,dt,ht.width,ht.height,0,ht.data):kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?D&&e.texSubImage2D(a.TEXTURE_2D,$,0,0,ht.width,ht.height,lt,Rt,ht.data):e.texImage2D(a.TEXTURE_2D,$,dt,ht.width,ht.height,0,lt,Rt,ht.data)}else if(_.isDataArrayTexture)if(Ut){if(Gt&&e.texStorage3D(a.TEXTURE_2D_ARRAY,nt,dt,Z.width,Z.height,Z.depth),D)if(_.layerUpdates.size>0){const $=mu(Z.width,Z.height,_.format,_.type);for(const ct of _.layerUpdates){const gt=Z.data.subarray(ct*$/Z.data.BYTES_PER_ELEMENT,(ct+1)*$/Z.data.BYTES_PER_ELEMENT);e.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,ct,Z.width,Z.height,1,lt,Rt,gt)}_.clearLayerUpdates()}else e.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,lt,Rt,Z.data)}else e.texImage3D(a.TEXTURE_2D_ARRAY,0,dt,Z.width,Z.height,Z.depth,0,lt,Rt,Z.data);else if(_.isData3DTexture)Ut?(Gt&&e.texStorage3D(a.TEXTURE_3D,nt,dt,Z.width,Z.height,Z.depth),D&&e.texSubImage3D(a.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,lt,Rt,Z.data)):e.texImage3D(a.TEXTURE_3D,0,dt,Z.width,Z.height,Z.depth,0,lt,Rt,Z.data);else if(_.isFramebufferTexture){if(Gt)if(Ut)e.texStorage2D(a.TEXTURE_2D,nt,dt,Z.width,Z.height);else{let $=Z.width,ct=Z.height;for(let gt=0;gt<nt;gt++)e.texImage2D(a.TEXTURE_2D,gt,dt,$,ct,0,lt,Rt,null),$>>=1,ct>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in a){const $=a.canvas;if($.hasAttribute("layoutsubtree")||$.setAttribute("layoutsubtree","true"),Z.parentNode!==$){$.appendChild(Z),u.add(_),$.onpaint=ct=>{const gt=ct.changedElements;for(const J of u)gt.includes(J.image)&&(J.needsUpdate=!0)},$.requestPaint();return}if(a.texElementImage2D.length===3)a.texElementImage2D(a.TEXTURE_2D,a.RGBA8,Z);else{const gt=a.RGBA,J=a.RGBA,Ct=a.UNSIGNED_BYTE;a.texElementImage2D(a.TEXTURE_2D,0,gt,J,Ct,Z)}a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE)}}else if(Dt.length>0){if(Ut&&Gt){const $=re(Dt[0]);e.texStorage2D(a.TEXTURE_2D,nt,dt,$.width,$.height)}for(let $=0,ct=Dt.length;$<ct;$++)ht=Dt[$],Ut?D&&e.texSubImage2D(a.TEXTURE_2D,$,0,0,lt,Rt,ht):e.texImage2D(a.TEXTURE_2D,$,dt,lt,Rt,ht);_.generateMipmaps=!1}else if(Ut){if(Gt){const $=re(Z);e.texStorage2D(a.TEXTURE_2D,nt,dt,$.width,$.height)}D&&e.texSubImage2D(a.TEXTURE_2D,0,0,0,lt,Rt,Z)}else e.texImage2D(a.TEXTURE_2D,0,dt,lt,Rt,Z);p(_)&&w(H),ot.__version=st.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function Ht(R,_,k){if(_.image.length!==6)return;const H=Y(R,_),X=_.source;e.bindTexture(a.TEXTURE_CUBE_MAP,R.__webglTexture,a.TEXTURE0+k);const st=i.get(X);if(X.version!==st.__version||H===!0){e.activeTexture(a.TEXTURE0+k);const ot=Zt.getPrimaries(Zt.workingColorSpace),q=_.colorSpace===Ds?null:Zt.getPrimaries(_.colorSpace),Z=_.colorSpace===Ds||ot===q?a.NONE:a.BROWSER_DEFAULT_WEBGL;e.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(a.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);const lt=_.isCompressedTexture||_.image[0].isCompressedTexture,Rt=_.image[0]&&_.image[0].isDataTexture,dt=[];for(let J=0;J<6;J++)!lt&&!Rt?dt[J]=g(_.image[J],!0,s.maxCubemapSize):dt[J]=Rt?_.image[J].image:_.image[J],dt[J]=mi(_,dt[J]);const ht=dt[0],Dt=n.convert(_.format,_.colorSpace),Ut=n.convert(_.type),Gt=y(_.internalFormat,Dt,Ut,_.normalized,_.colorSpace),D=_.isVideoTexture!==!0,nt=st.__version===void 0||H===!0,$=X.dataReady;let ct=M(_,ht);ie(a.TEXTURE_CUBE_MAP,_);let gt;if(lt){D&&nt&&e.texStorage2D(a.TEXTURE_CUBE_MAP,ct,Gt,ht.width,ht.height);for(let J=0;J<6;J++){gt=dt[J].mipmaps;for(let Ct=0;Ct<gt.length;Ct++){const At=gt[Ct];_.format!==qi?Dt!==null?D?$&&e.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ct,0,0,At.width,At.height,Dt,At.data):e.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ct,Gt,At.width,At.height,0,At.data):kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?$&&e.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ct,0,0,At.width,At.height,Dt,Ut,At.data):e.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ct,Gt,At.width,At.height,0,Dt,Ut,At.data)}}}else{if(gt=_.mipmaps,D&&nt){gt.length>0&&ct++;const J=re(dt[0]);e.texStorage2D(a.TEXTURE_CUBE_MAP,ct,Gt,J.width,J.height)}for(let J=0;J<6;J++)if(Rt){D?$&&e.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,dt[J].width,dt[J].height,Dt,Ut,dt[J].data):e.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Gt,dt[J].width,dt[J].height,0,Dt,Ut,dt[J].data);for(let Ct=0;Ct<gt.length;Ct++){const Pe=gt[Ct].image[J].image;D?$&&e.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ct+1,0,0,Pe.width,Pe.height,Dt,Ut,Pe.data):e.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ct+1,Gt,Pe.width,Pe.height,0,Dt,Ut,Pe.data)}}else{D?$&&e.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Dt,Ut,dt[J]):e.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Gt,Dt,Ut,dt[J]);for(let Ct=0;Ct<gt.length;Ct++){const At=gt[Ct];D?$&&e.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ct+1,0,0,Dt,Ut,At.image[J]):e.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ct+1,Gt,Dt,Ut,At.image[J])}}}p(_)&&w(a.TEXTURE_CUBE_MAP),st.__version=X.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function It(R,_,k,H,X,st){const ot=n.convert(k.format,k.colorSpace),q=n.convert(k.type),Z=y(k.internalFormat,ot,q,k.normalized,k.colorSpace),lt=i.get(_),Rt=i.get(k);if(Rt.__renderTarget=_,!lt.__hasExternalTextures){const dt=Math.max(1,_.width>>st),ht=Math.max(1,_.height>>st);X===a.TEXTURE_3D||X===a.TEXTURE_2D_ARRAY?e.texImage3D(X,st,Z,dt,ht,_.depth,0,ot,q,null):e.texImage2D(X,st,Z,dt,ht,0,ot,q,null)}e.bindFramebuffer(a.FRAMEBUFFER,R),Oe(_)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,H,X,Rt.__webglTexture,0,Re(_)):(X===a.TEXTURE_2D||X>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,H,X,Rt.__webglTexture,st),e.bindFramebuffer(a.FRAMEBUFFER,null)}function Ie(R,_,k){if(a.bindRenderbuffer(a.RENDERBUFFER,R),_.depthBuffer){const H=_.depthTexture,X=H&&H.isDepthTexture?H.type:null,st=T(_.stencilBuffer,X),ot=_.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;Oe(_)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Re(_),st,_.width,_.height):k?a.renderbufferStorageMultisample(a.RENDERBUFFER,Re(_),st,_.width,_.height):a.renderbufferStorage(a.RENDERBUFFER,st,_.width,_.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,ot,a.RENDERBUFFER,R)}else{const H=_.textures;for(let X=0;X<H.length;X++){const st=H[X],ot=n.convert(st.format,st.colorSpace),q=n.convert(st.type),Z=y(st.internalFormat,ot,q,st.normalized,st.colorSpace);Oe(_)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Re(_),Z,_.width,_.height):k?a.renderbufferStorageMultisample(a.RENDERBUFFER,Re(_),Z,_.width,_.height):a.renderbufferStorage(a.RENDERBUFFER,Z,_.width,_.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function $t(R,_,k){const H=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(a.FRAMEBUFFER,R),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const X=i.get(_.depthTexture);if(X.__renderTarget=_,(!X.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),H){if(X.__webglInit===void 0&&(X.__webglInit=!0,_.depthTexture.addEventListener("dispose",C)),X.__webglTexture===void 0){X.__webglTexture=a.createTexture(),e.bindTexture(a.TEXTURE_CUBE_MAP,X.__webglTexture),ie(a.TEXTURE_CUBE_MAP,_.depthTexture);const lt=n.convert(_.depthTexture.format),Rt=n.convert(_.depthTexture.type);let dt;_.depthTexture.format===ws?dt=a.DEPTH_COMPONENT24:_.depthTexture.format===rn&&(dt=a.DEPTH24_STENCIL8);for(let ht=0;ht<6;ht++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,dt,_.width,_.height,0,lt,Rt,null)}}else K(_.depthTexture,0);const st=X.__webglTexture,ot=Re(_),q=H?a.TEXTURE_CUBE_MAP_POSITIVE_X+k:a.TEXTURE_2D,Z=_.depthTexture.format===rn?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(_.depthTexture.format===ws)Oe(_)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,Z,q,st,0,ot):a.framebufferTexture2D(a.FRAMEBUFFER,Z,q,st,0);else if(_.depthTexture.format===rn)Oe(_)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,Z,q,st,0,ot):a.framebufferTexture2D(a.FRAMEBUFFER,Z,q,st,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function de(R){const _=i.get(R),k=R.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==R.depthTexture){const H=R.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),H){const X=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,H.removeEventListener("dispose",X)};H.addEventListener("dispose",X),_.__depthDisposeCallback=X}_.__boundDepthTexture=H}if(R.depthTexture&&!_.__autoAllocateDepthBuffer)if(k)for(let H=0;H<6;H++)$t(_.__webglFramebuffer[H],R,H);else{const H=R.texture.mipmaps;H&&H.length>0?$t(_.__webglFramebuffer[0],R,0):$t(_.__webglFramebuffer,R,0)}else if(k){_.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(e.bindFramebuffer(a.FRAMEBUFFER,_.__webglFramebuffer[H]),_.__webglDepthbuffer[H]===void 0)_.__webglDepthbuffer[H]=a.createRenderbuffer(),Ie(_.__webglDepthbuffer[H],R,!1);else{const X=R.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,st=_.__webglDepthbuffer[H];a.bindRenderbuffer(a.RENDERBUFFER,st),a.framebufferRenderbuffer(a.FRAMEBUFFER,X,a.RENDERBUFFER,st)}}else{const H=R.texture.mipmaps;if(H&&H.length>0?e.bindFramebuffer(a.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(a.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=a.createRenderbuffer(),Ie(_.__webglDepthbuffer,R,!1);else{const X=R.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,st=_.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,st),a.framebufferRenderbuffer(a.FRAMEBUFFER,X,a.RENDERBUFFER,st)}}e.bindFramebuffer(a.FRAMEBUFFER,null)}function se(R,_,k){const H=i.get(R);_!==void 0&&It(H.__webglFramebuffer,R,R.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),k!==void 0&&de(R)}function te(R){const _=R.texture,k=i.get(R),H=i.get(_);R.addEventListener("dispose",b);const X=R.textures,st=R.isWebGLCubeRenderTarget===!0,ot=X.length>1;if(ot||(H.__webglTexture===void 0&&(H.__webglTexture=a.createTexture()),H.__version=_.version,r.memory.textures++),st){k.__webglFramebuffer=[];for(let q=0;q<6;q++)if(_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer[q]=[];for(let Z=0;Z<_.mipmaps.length;Z++)k.__webglFramebuffer[q][Z]=a.createFramebuffer()}else k.__webglFramebuffer[q]=a.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer=[];for(let q=0;q<_.mipmaps.length;q++)k.__webglFramebuffer[q]=a.createFramebuffer()}else k.__webglFramebuffer=a.createFramebuffer();if(ot)for(let q=0,Z=X.length;q<Z;q++){const lt=i.get(X[q]);lt.__webglTexture===void 0&&(lt.__webglTexture=a.createTexture(),r.memory.textures++)}if(R.samples>0&&Oe(R)===!1){k.__webglMultisampledFramebuffer=a.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(a.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let q=0;q<X.length;q++){const Z=X[q];k.__webglColorRenderbuffer[q]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,k.__webglColorRenderbuffer[q]);const lt=n.convert(Z.format,Z.colorSpace),Rt=n.convert(Z.type),dt=y(Z.internalFormat,lt,Rt,Z.normalized,Z.colorSpace,R.isXRRenderTarget===!0),ht=Re(R);a.renderbufferStorageMultisample(a.RENDERBUFFER,ht,dt,R.width,R.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+q,a.RENDERBUFFER,k.__webglColorRenderbuffer[q])}a.bindRenderbuffer(a.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=a.createRenderbuffer(),Ie(k.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(a.FRAMEBUFFER,null)}}if(st){e.bindTexture(a.TEXTURE_CUBE_MAP,H.__webglTexture),ie(a.TEXTURE_CUBE_MAP,_);for(let q=0;q<6;q++)if(_.mipmaps&&_.mipmaps.length>0)for(let Z=0;Z<_.mipmaps.length;Z++)It(k.__webglFramebuffer[q][Z],R,_,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+q,Z);else It(k.__webglFramebuffer[q],R,_,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);p(_)&&w(a.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ot){for(let q=0,Z=X.length;q<Z;q++){const lt=X[q],Rt=i.get(lt);let dt=a.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(dt=R.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),e.bindTexture(dt,Rt.__webglTexture),ie(dt,lt),It(k.__webglFramebuffer,R,lt,a.COLOR_ATTACHMENT0+q,dt,0),p(lt)&&w(dt)}e.unbindTexture()}else{let q=a.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(q=R.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),e.bindTexture(q,H.__webglTexture),ie(q,_),_.mipmaps&&_.mipmaps.length>0)for(let Z=0;Z<_.mipmaps.length;Z++)It(k.__webglFramebuffer[Z],R,_,a.COLOR_ATTACHMENT0,q,Z);else It(k.__webglFramebuffer,R,_,a.COLOR_ATTACHMENT0,q,0);p(_)&&w(q),e.unbindTexture()}R.depthBuffer&&de(R)}function Ne(R){const _=R.textures;for(let k=0,H=_.length;k<H;k++){const X=_[k];if(p(X)){const st=A(R),ot=i.get(X).__webglTexture;e.bindTexture(st,ot),w(st),e.unbindTexture()}}}const Ge=[],je=[];function Ke(R){if(R.samples>0){if(Oe(R)===!1){const _=R.textures,k=R.width,H=R.height;let X=a.COLOR_BUFFER_BIT;const st=R.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ot=i.get(R),q=_.length>1;if(q)for(let lt=0;lt<_.length;lt++)e.bindFramebuffer(a.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+lt,a.RENDERBUFFER,null),e.bindFramebuffer(a.FRAMEBUFFER,ot.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+lt,a.TEXTURE_2D,null,0);e.bindFramebuffer(a.READ_FRAMEBUFFER,ot.__webglMultisampledFramebuffer);const Z=R.texture.mipmaps;Z&&Z.length>0?e.bindFramebuffer(a.DRAW_FRAMEBUFFER,ot.__webglFramebuffer[0]):e.bindFramebuffer(a.DRAW_FRAMEBUFFER,ot.__webglFramebuffer);for(let lt=0;lt<_.length;lt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(X|=a.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(X|=a.STENCIL_BUFFER_BIT)),q){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,ot.__webglColorRenderbuffer[lt]);const Rt=i.get(_[lt]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Rt,0)}a.blitFramebuffer(0,0,k,H,0,0,k,H,X,a.NEAREST),l===!0&&(Ge.length=0,je.length=0,Ge.push(a.COLOR_ATTACHMENT0+lt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Ge.push(st),je.push(st),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,je)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,Ge))}if(e.bindFramebuffer(a.READ_FRAMEBUFFER,null),e.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),q)for(let lt=0;lt<_.length;lt++){e.bindFramebuffer(a.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+lt,a.RENDERBUFFER,ot.__webglColorRenderbuffer[lt]);const Rt=i.get(_[lt]).__webglTexture;e.bindFramebuffer(a.FRAMEBUFFER,ot.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+lt,a.TEXTURE_2D,Rt,0)}e.bindFramebuffer(a.DRAW_FRAMEBUFFER,ot.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const _=R.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[_])}}}function Re(R){return Math.min(s.maxSamples,R.samples)}function Oe(R){const _=i.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function I(R){const _=r.render.frame;c.get(R)!==_&&(c.set(R,_),R.update())}function mi(R,_){const k=R.colorSpace,H=R.format,X=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==co&&k!==Ds&&(Zt.getTransfer(k)===ae?(H!==qi||X!==Ui)&&kt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qt("WebGLTextures: Unsupported texture color space:",k)),_}function re(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(h.width=R.naturalWidth||R.width,h.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(h.width=R.displayWidth,h.height=R.displayHeight):(h.width=R.width,h.height=R.height),h}this.allocateTextureUnit=W,this.resetTextureUnits=G,this.getTextureUnits=j,this.setTextureUnits=N,this.setTexture2D=K,this.setTexture2DArray=tt,this.setTexture3D=at,this.setTextureCube=ut,this.rebindTextures=se,this.setupRenderTarget=te,this.updateRenderTargetMipmap=Ne,this.updateMultisampleRenderTarget=Ke,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=It,this.useMultisampledRTT=Oe,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function _1(a,t){function e(i,s=Ds){let n;const r=Zt.getTransfer(s);if(i===Ui)return a.UNSIGNED_BYTE;if(i===tc)return a.UNSIGNED_SHORT_4_4_4_4;if(i===ec)return a.UNSIGNED_SHORT_5_5_5_1;if(i===sf)return a.UNSIGNED_INT_5_9_9_9_REV;if(i===nf)return a.UNSIGNED_INT_10F_11F_11F_REV;if(i===tf)return a.BYTE;if(i===ef)return a.SHORT;if(i===za)return a.UNSIGNED_SHORT;if(i===Jh)return a.INT;if(i===ls)return a.UNSIGNED_INT;if(i===Xi)return a.FLOAT;if(i===Ri)return a.HALF_FLOAT;if(i===af)return a.ALPHA;if(i===rf)return a.RGB;if(i===qi)return a.RGBA;if(i===ws)return a.DEPTH_COMPONENT;if(i===rn)return a.DEPTH_STENCIL;if(i===ic)return a.RED;if(i===sc)return a.RED_INTEGER;if(i===cn)return a.RG;if(i===nc)return a.RG_INTEGER;if(i===ac)return a.RGBA_INTEGER;if(i===Yr||i===Qr||i===Jr||i===to)if(r===ae)if(n=t.get("WEBGL_compressed_texture_s3tc_srgb"),n!==null){if(i===Yr)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Qr)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Jr)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===to)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(n=t.get("WEBGL_compressed_texture_s3tc"),n!==null){if(i===Yr)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Qr)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Jr)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===to)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===th||i===eh||i===ih||i===sh)if(n=t.get("WEBGL_compressed_texture_pvrtc"),n!==null){if(i===th)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===eh)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ih)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===sh)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===nh||i===ah||i===rh||i===oh||i===lh||i===lo||i===hh)if(n=t.get("WEBGL_compressed_texture_etc"),n!==null){if(i===nh||i===ah)return r===ae?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(i===rh)return r===ae?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC;if(i===oh)return n.COMPRESSED_R11_EAC;if(i===lh)return n.COMPRESSED_SIGNED_R11_EAC;if(i===lo)return n.COMPRESSED_RG11_EAC;if(i===hh)return n.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ch||i===uh||i===dh||i===fh||i===ph||i===mh||i===gh||i===vh||i===xh||i===bh||i===_h||i===yh||i===Mh||i===wh)if(n=t.get("WEBGL_compressed_texture_astc"),n!==null){if(i===ch)return r===ae?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===uh)return r===ae?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===dh)return r===ae?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===fh)return r===ae?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ph)return r===ae?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===mh)return r===ae?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===gh)return r===ae?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===vh)return r===ae?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===xh)return r===ae?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===bh)return r===ae?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===_h)return r===ae?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===yh)return r===ae?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Mh)return r===ae?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===wh)return r===ae?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Sh||i===Ah||i===Th)if(n=t.get("EXT_texture_compression_bptc"),n!==null){if(i===Sh)return r===ae?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ah)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Th)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Eh||i===Ch||i===ho||i===Rh)if(n=t.get("EXT_texture_compression_rgtc"),n!==null){if(i===Eh)return n.COMPRESSED_RED_RGTC1_EXT;if(i===Ch)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ho)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Rh)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ka?a.UNSIGNED_INT_24_8:a[i]!==void 0?a[i]:null}return{convert:e}}const y1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,M1=`
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

}`;class w1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new xf(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Ot({vertexShader:y1,fragmentShader:M1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new we(new Jt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class S1 extends fn{constructor(t,e){super();const i=this;let s=null,n=1,r=null,o="local-floor",l=1,h=null,c=null,u=null,d=null,f=null,m=null;const v=typeof XRWebGLBinding<"u",g=new w1,p={},w=e.getContextAttributes();let A=null,y=null;const T=[],M=[],C=new vt;let b=null;const x=new Di;x.viewport=new De;const E=new Di;E.viewport=new De;const P=[x,E],F=new Lm;let G=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let rt=T[Y];return rt===void 0&&(rt=new Vo,T[Y]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(Y){let rt=T[Y];return rt===void 0&&(rt=new Vo,T[Y]=rt),rt.getGripSpace()},this.getHand=function(Y){let rt=T[Y];return rt===void 0&&(rt=new Vo,T[Y]=rt),rt.getHandSpace()};function N(Y){const rt=M.indexOf(Y.inputSource);if(rt===-1)return;const et=T[rt];et!==void 0&&(et.update(Y.inputSource,Y.frame,h||r),et.dispatchEvent({type:Y.type,data:Y.inputSource}))}function W(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",z);for(let Y=0;Y<T.length;Y++){const rt=M[Y];rt!==null&&(M[Y]=null,T[Y].disconnect(rt))}G=null,j=null,g.reset();for(const Y in p)delete p[Y];t.setRenderTarget(A),f=null,d=null,u=null,s=null,y=null,ie.stop(),i.isPresenting=!1,t.setPixelRatio(b),t.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){n=Y,i.isPresenting===!0&&kt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&kt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||r},this.setReferenceSpace=function(Y){h=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(A=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",W),s.addEventListener("inputsourceschange",z),w.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(C),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let et=null,Nt=null,Ht=null;w.depth&&(Ht=w.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=w.stencil?rn:ws,Nt=w.stencil?ka:ls);const It={colorFormat:e.RGBA8,depthFormat:Ht,scaleFactor:n};u=this.getBinding(),d=u.createProjectionLayer(It),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new _i(d.textureWidth,d.textureHeight,{format:qi,type:Ui,depthTexture:new ea(d.textureWidth,d.textureHeight,Nt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const et={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:n};f=new XRWebGLLayer(s,e,et),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new _i(f.framebufferWidth,f.framebufferHeight,{format:qi,type:Ui,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),h=null,r=await s.requestReferenceSpace(o),ie.setContext(s),ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function z(Y){for(let rt=0;rt<Y.removed.length;rt++){const et=Y.removed[rt],Nt=M.indexOf(et);Nt>=0&&(M[Nt]=null,T[Nt].disconnect(et))}for(let rt=0;rt<Y.added.length;rt++){const et=Y.added[rt];let Nt=M.indexOf(et);if(Nt===-1){for(let It=0;It<T.length;It++)if(It>=M.length){M.push(et),Nt=It;break}else if(M[It]===null){M[It]=et,Nt=It;break}if(Nt===-1)break}const Ht=T[Nt];Ht&&Ht.connect(et)}}const K=new L,tt=new L;function at(Y,rt,et){K.setFromMatrixPosition(rt.matrixWorld),tt.setFromMatrixPosition(et.matrixWorld);const Nt=K.distanceTo(tt),Ht=rt.projectionMatrix.elements,It=et.projectionMatrix.elements,Ie=Ht[14]/(Ht[10]-1),$t=Ht[14]/(Ht[10]+1),de=(Ht[9]+1)/Ht[5],se=(Ht[9]-1)/Ht[5],te=(Ht[8]-1)/Ht[0],Ne=(It[8]+1)/It[0],Ge=Ie*te,je=Ie*Ne,Ke=Nt/(-te+Ne),Re=Ke*-te;if(rt.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Re),Y.translateZ(Ke),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ht[10]===-1)Y.projectionMatrix.copy(rt.projectionMatrix),Y.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{const Oe=Ie+Ke,I=$t+Ke,mi=Ge-Re,re=je+(Nt-Re),R=de*$t/I*Oe,_=se*$t/I*Oe;Y.projectionMatrix.makePerspective(mi,re,R,_,Oe,I),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ut(Y,rt){rt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(rt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let rt=Y.near,et=Y.far;g.texture!==null&&(g.depthNear>0&&(rt=g.depthNear),g.depthFar>0&&(et=g.depthFar)),F.near=E.near=x.near=rt,F.far=E.far=x.far=et,(G!==F.near||j!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),G=F.near,j=F.far),F.layers.mask=Y.layers.mask|6,x.layers.mask=F.layers.mask&-5,E.layers.mask=F.layers.mask&-3;const Nt=Y.parent,Ht=F.cameras;ut(F,Nt);for(let It=0;It<Ht.length;It++)ut(Ht[It],Nt);Ht.length===2?at(F,x,E):F.projectionMatrix.copy(x.projectionMatrix),xt(Y,F,Nt)};function xt(Y,rt,et){et===null?Y.matrix.copy(rt.matrixWorld):(Y.matrix.copy(et.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(rt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(rt.projectionMatrix),Y.projectionMatrixInverse.copy(rt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Fh*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(F)},this.getCameraTexture=function(Y){return p[Y]};let Yt=null;function Ce(Y,rt){if(c=rt.getViewerPose(h||r),m=rt,c!==null){const et=c.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let Nt=!1;et.length!==F.cameras.length&&(F.cameras.length=0,Nt=!0);for(let $t=0;$t<et.length;$t++){const de=et[$t];let se=null;if(f!==null)se=f.getViewport(de);else{const Ne=u.getViewSubImage(d,de);se=Ne.viewport,$t===0&&(t.setRenderTargetTextures(y,Ne.colorTexture,Ne.depthStencilTexture),t.setRenderTarget(y))}let te=P[$t];te===void 0&&(te=new Di,te.layers.enable($t),te.viewport=new De,P[$t]=te),te.matrix.fromArray(de.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(de.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(se.x,se.y,se.width,se.height),$t===0&&(F.matrix.copy(te.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Nt===!0&&F.cameras.push(te)}const Ht=s.enabledFeatures;if(Ht&&Ht.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=i.getBinding();const $t=u.getDepthInformation(et[0]);$t&&$t.isValid&&$t.texture&&g.init($t,s.renderState)}if(Ht&&Ht.includes("camera-access")&&v){t.state.unbindTexture(),u=i.getBinding();for(let $t=0;$t<et.length;$t++){const de=et[$t].camera;if(de){let se=p[de];se||(se=new xf,p[de]=se);const te=u.getCameraImage(de);se.sourceTexture=te}}}}for(let et=0;et<T.length;et++){const Nt=M[et],Ht=T[et];Nt!==null&&Ht!==void 0&&Ht.update(Nt,rt,h||r)}Yt&&Yt(Y,rt),rt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:rt}),m=null}const ie=new wf;ie.setAnimationLoop(Ce),this.setAnimationLoop=function(Y){Yt=Y},this.dispose=function(){}}}const A1=new ge,Pf=new Bt;Pf.set(-1,0,0,0,1,0,0,0,1);function T1(a,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,bf(a)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,w,A,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?n(g,p):p.isMeshLambertMaterial?(n(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(n(g,p),u(g,p)):p.isMeshPhongMaterial?(n(g,p),c(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(n(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,y)):p.isMeshMatcapMaterial?(n(g,p),m(g,p)):p.isMeshDepthMaterial?n(g,p):p.isMeshDistanceMaterial?(n(g,p),v(g,p)):p.isMeshNormalMaterial?n(g,p):p.isLineBasicMaterial?(r(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,w,A):p.isSpriteMaterial?h(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function n(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===bi&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===bi&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const w=t.get(p),A=w.envMap,y=w.envMapRotation;A&&(g.envMap.value=A,g.envMapRotation.value.setFromMatrix4(A1.makeRotationFromEuler(y)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Pf),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function r(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,w,A){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*w,g.scale.value=A*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,w){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===bi&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=w.texture,g.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){const w=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(w.matrixWorld),g.nearDistance.value=w.shadow.camera.near,g.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function E1(a,t,e,i){let s={},n={},r=[];const o=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,T){const M=T.program;i.uniformBlockBinding(y,M)}function h(y,T){let M=s[y.id];M===void 0&&(g(y),M=c(y),s[y.id]=M,y.addEventListener("dispose",w));const C=T.program;i.updateUBOMapping(y,C);const b=t.render.frame;n[y.id]!==b&&(d(y),n[y.id]=b)}function c(y){const T=u();y.__bindingPointIndex=T;const M=a.createBuffer(),C=y.__size,b=y.usage;return a.bindBuffer(a.UNIFORM_BUFFER,M),a.bufferData(a.UNIFORM_BUFFER,C,b),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,T,M),M}function u(){for(let y=0;y<o;y++)if(r.indexOf(y)===-1)return r.push(y),y;return Qt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const T=s[y.id],M=y.uniforms,C=y.__cache;a.bindBuffer(a.UNIFORM_BUFFER,T);for(let b=0,x=M.length;b<x;b++){const E=M[b];if(Array.isArray(E))for(let P=0,F=E.length;P<F;P++)f(E[P],b,P,C);else f(E,b,0,C)}a.bindBuffer(a.UNIFORM_BUFFER,null)}function f(y,T,M,C){if(v(y,T,M,C)===!0){const b=y.__offset,x=y.value;if(Array.isArray(x)){let E=0;for(let P=0;P<x.length;P++){const F=x[P],G=p(F);m(F,y.__data,E),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(E+=G.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(x,y.__data,0);a.bufferSubData(a.UNIFORM_BUFFER,b,y.__data)}}function m(y,T,M){typeof y=="number"||typeof y=="boolean"?T[0]=y:y.isMatrix3?(T[0]=y.elements[0],T[1]=y.elements[1],T[2]=y.elements[2],T[3]=0,T[4]=y.elements[3],T[5]=y.elements[4],T[6]=y.elements[5],T[7]=0,T[8]=y.elements[6],T[9]=y.elements[7],T[10]=y.elements[8],T[11]=0):ArrayBuffer.isView(y)?T.set(new y.constructor(y.buffer,y.byteOffset,T.length)):y.toArray(T,M)}function v(y,T,M,C){const b=y.value,x=T+"_"+M;if(C[x]===void 0)return typeof b=="number"||typeof b=="boolean"?C[x]=b:ArrayBuffer.isView(b)?C[x]=b.slice():C[x]=b.clone(),!0;{const E=C[x];if(typeof b=="number"||typeof b=="boolean"){if(E!==b)return C[x]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(E.equals(b)===!1)return E.copy(b),!0}}return!1}function g(y){const T=y.uniforms;let M=0;const C=16;for(let x=0,E=T.length;x<E;x++){const P=Array.isArray(T[x])?T[x]:[T[x]];for(let F=0,G=P.length;F<G;F++){const j=P[F],N=Array.isArray(j.value)?j.value:[j.value];for(let W=0,z=N.length;W<z;W++){const K=N[W],tt=p(K),at=M%C,ut=at%tt.boundary,xt=at+ut;M+=ut,xt!==0&&C-xt<tt.storage&&(M+=C-xt),j.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=M,M+=tt.storage}}}const b=M%C;return b>0&&(M+=C-b),y.__size=M,y.__cache={},this}function p(y){const T={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(T.boundary=4,T.storage=4):y.isVector2?(T.boundary=8,T.storage=8):y.isVector3||y.isColor?(T.boundary=16,T.storage=12):y.isVector4?(T.boundary=16,T.storage=16):y.isMatrix3?(T.boundary=48,T.storage=48):y.isMatrix4?(T.boundary=64,T.storage=64):y.isTexture?kt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(T.boundary=16,T.storage=y.byteLength):kt("WebGLRenderer: Unsupported uniform value type.",y),T}function w(y){const T=y.target;T.removeEventListener("dispose",w);const M=r.indexOf(T.__bindingPointIndex);r.splice(M,1),a.deleteBuffer(s[T.id]),delete s[T.id],delete n[T.id]}function A(){for(const y in s)a.deleteBuffer(s[y]);r=[],s={},n={}}return{bind:l,update:h,dispose:A}}const C1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Yi=null;function R1(){return Yi===null&&(Yi=new mf(C1,16,16,cn,Ri),Yi.name="DFG_LUT",Yi.minFilter=hi,Yi.magFilter=hi,Yi.wrapS=ki,Yi.wrapT=ki,Yi.generateMipmaps=!1,Yi.needsUpdate=!0),Yi}class P1{constructor(t={}){const{canvas:e=jp(),context:i=null,depth:s=!0,stencil:n=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Ui}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=r;const v=f,g=new Set([ac,nc,sc]),p=new Set([Ui,ls,za,ka,tc,ec]),w=new Uint32Array(4),A=new Int32Array(4),y=new L;let T=null,M=null;const C=[],b=[];let x=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=rs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let P=!1,F=null,G=null,j=null,N=null;this._outputColorSpace=Me;let W=0,z=0,K=null,tt=-1,at=null;const ut=new De,xt=new De;let Yt=null;const Ce=new zt(0);let ie=0,Y=e.width,rt=e.height,et=1,Nt=null,Ht=null;const It=new De(0,0,Y,rt),Ie=new De(0,0,Y,rt);let $t=!1;const de=new gf;let se=!1,te=!1;const Ne=new ge,Ge=new L,je=new De,Ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Re=!1;function Oe(){return K===null?et:1}let I=i;function mi(S,U){return e.getContext(S,U)}try{const S={alpha:!0,depth:s,stencil:n,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${qh}`),e.addEventListener("webglcontextlost",Pe,!1),e.addEventListener("webglcontextrestored",xe,!1),e.addEventListener("webglcontextcreationerror",ji,!1),I===null){const U="webgl2";if(I=mi(U,S),I===null)throw mi(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(S){throw Qt("WebGLRenderer: "+S.message),S}let re,R,_,k,H,X,st,ot,q,Z,lt,Rt,dt,ht,Dt,Ut,Gt,D,nt,$,ct,gt,J;function Ct(){re=new Rv(I),re.init(),ct=new _1(I,re),R=new yv(I,re,t,ct),_=new x1(I,re),R.reversedDepthBuffer&&d&&_.buffers.depth.setReversed(!0),G=I.createFramebuffer(),j=I.createFramebuffer(),N=I.createFramebuffer(),k=new Lv(I),H=new n1,X=new b1(I,re,_,H,R,ct,k),st=new Cv(E),ot=new zm(I),gt=new bv(I,ot),q=new Pv(I,ot,k,gt),Z=new Iv(I,q,ot,gt,k),D=new Dv(I,R,X),Dt=new Mv(H),lt=new s1(E,st,re,R,gt,Dt),Rt=new T1(E,H),dt=new r1,ht=new d1(re),Gt=new xv(E,st,_,Z,m,l),Ut=new v1(E,Z,R),J=new E1(I,k,R,_),nt=new _v(I,re,k),$=new Fv(I,re,k),k.programs=lt.programs,E.capabilities=R,E.extensions=re,E.properties=H,E.renderLists=dt,E.shadowMap=Ut,E.state=_,E.info=k}Ct(),v!==Ui&&(x=new zv(v,e.width,e.height,o,s,n));const At=new S1(E,I);this.xr=At,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const S=re.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=re.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(S){S!==void 0&&(et=S,this.setSize(Y,rt,!1))},this.getSize=function(S){return S.set(Y,rt)},this.setSize=function(S,U,V=!0){if(At.isPresenting){kt("WebGLRenderer: Can't change size while VR device is presenting.");return}Y=S,rt=U,e.width=Math.floor(S*et),e.height=Math.floor(U*et),V===!0&&(e.style.width=S+"px",e.style.height=U+"px"),x!==null&&x.setSize(e.width,e.height),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(Y*et,rt*et).floor()},this.setDrawingBufferSize=function(S,U,V){Y=S,rt=U,et=V,e.width=Math.floor(S*V),e.height=Math.floor(U*V),this.setViewport(0,0,S,U)},this.setEffects=function(S){if(v===Ui){Qt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let U=0;U<S.length;U++)if(S[U].isOutputPass===!0){kt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}x.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(ut)},this.getViewport=function(S){return S.copy(It)},this.setViewport=function(S,U,V,O){S.isVector4?It.set(S.x,S.y,S.z,S.w):It.set(S,U,V,O),_.viewport(ut.copy(It).multiplyScalar(et).round())},this.getScissor=function(S){return S.copy(Ie)},this.setScissor=function(S,U,V,O){S.isVector4?Ie.set(S.x,S.y,S.z,S.w):Ie.set(S,U,V,O),_.scissor(xt.copy(Ie).multiplyScalar(et).round())},this.getScissorTest=function(){return $t},this.setScissorTest=function(S){_.setScissorTest($t=S)},this.setOpaqueSort=function(S){Nt=S},this.setTransparentSort=function(S){Ht=S},this.getClearColor=function(S){return S.copy(Gt.getClearColor())},this.setClearColor=function(){Gt.setClearColor(...arguments)},this.getClearAlpha=function(){return Gt.getClearAlpha()},this.setClearAlpha=function(){Gt.setClearAlpha(...arguments)},this.clear=function(S=!0,U=!0,V=!0){let O=0;if(S){let B=!1;if(K!==null){const mt=K.texture.format;B=g.has(mt)}if(B){const mt=K.texture.type,_t=p.has(mt),pt=Gt.getClearColor(),Et=Gt.getClearAlpha(),Pt=pt.r,Vt=pt.g,qt=pt.b;_t?(w[0]=Pt,w[1]=Vt,w[2]=qt,w[3]=Et,I.clearBufferuiv(I.COLOR,0,w)):(A[0]=Pt,A[1]=Vt,A[2]=qt,A[3]=Et,I.clearBufferiv(I.COLOR,0,A))}else O|=I.COLOR_BUFFER_BIT}U&&(O|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(O|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O!==0&&I.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),F=S},this.dispose=function(){e.removeEventListener("webglcontextlost",Pe,!1),e.removeEventListener("webglcontextrestored",xe,!1),e.removeEventListener("webglcontextcreationerror",ji,!1),Gt.dispose(),dt.dispose(),ht.dispose(),H.dispose(),st.dispose(),Z.dispose(),gt.dispose(),J.dispose(),lt.dispose(),At.dispose(),At.removeEventListener("sessionstart",Pc),At.removeEventListener("sessionend",Fc),Bs.stop()};function Pe(S){S.preventDefault(),po("WebGLRenderer: Context Lost."),P=!0}function xe(){po("WebGLRenderer: Context Restored."),P=!1;const S=k.autoReset,U=Ut.enabled,V=Ut.autoUpdate,O=Ut.needsUpdate,B=Ut.type;Ct(),k.autoReset=S,Ut.enabled=U,Ut.autoUpdate=V,Ut.needsUpdate=O,Ut.type=B}function ji(S){Qt("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function $i(S){const U=S.target;U.removeEventListener("dispose",$i),lp(U)}function lp(S){hp(S),H.remove(S)}function hp(S){const U=H.get(S).programs;U!==void 0&&(U.forEach(function(V){lt.releaseProgram(V)}),S.isShaderMaterial&&lt.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,V,O,B,mt){U===null&&(U=Ke);const _t=B.isMesh&&B.matrixWorld.determinantAffine()<0,pt=dp(S,U,V,O,B);_.setMaterial(O,_t);let Et=V.index,Pt=1;if(O.wireframe===!0){if(Et=q.getWireframeAttribute(V),Et===void 0)return;Pt=2}const Vt=V.drawRange,qt=V.attributes.position;let Ft=Vt.start*Pt,le=(Vt.start+Vt.count)*Pt;mt!==null&&(Ft=Math.max(Ft,mt.start*Pt),le=Math.min(le,(mt.start+mt.count)*Pt)),Et!==null?(Ft=Math.max(Ft,0),le=Math.min(le,Et.count)):qt!=null&&(Ft=Math.max(Ft,0),le=Math.min(le,qt.count));const Ue=le-Ft;if(Ue<0||Ue===1/0)return;gt.setup(B,O,pt,V,Et);let Fe,fe=nt;if(Et!==null&&(Fe=ot.get(Et),fe=$,fe.setIndex(Fe)),B.isMesh)O.wireframe===!0?(_.setLineWidth(O.wireframeLinewidth*Oe()),fe.setMode(I.LINES)):fe.setMode(I.TRIANGLES);else if(B.isLine){let ii=O.linewidth;ii===void 0&&(ii=1),_.setLineWidth(ii*Oe()),B.isLineSegments?fe.setMode(I.LINES):B.isLineLoop?fe.setMode(I.LINE_LOOP):fe.setMode(I.LINE_STRIP)}else B.isPoints?fe.setMode(I.POINTS):B.isSprite&&fe.setMode(I.TRIANGLES);if(B.isBatchedMesh)if(re.get("WEBGL_multi_draw"))fe.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const ii=B._multiDrawStarts,bt=B._multiDrawCounts,wi=B._multiDrawCount,ee=Et?ot.get(Et).bytesPerElement:1,Pi=H.get(O).currentProgram.getUniforms();for(let Zi=0;Zi<wi;Zi++)Pi.setValue(I,"_gl_DrawID",Zi),fe.render(ii[Zi]/ee,bt[Zi])}else if(B.isInstancedMesh)fe.renderInstances(Ft,Ue,B.count);else if(V.isInstancedBufferGeometry){const ii=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,bt=Math.min(V.instanceCount,ii);fe.renderInstances(Ft,Ue,bt)}else fe.render(Ft,Ue)};function Rc(S,U,V){S.transparent===!0&&S.side===ti&&S.forceSinglePass===!1?(S.side=bi,S.needsUpdate=!0,Ja(S,U,V),S.side=ks,S.needsUpdate=!0,Ja(S,U,V),S.side=ti):Ja(S,U,V)}this.compile=function(S,U,V=null){V===null&&(V=S),M=ht.get(V),M.init(U),b.push(M),V.traverseVisible(function(B){B.isLight&&B.layers.test(U.layers)&&(M.pushLight(B),B.castShadow&&M.pushShadow(B))}),S!==V&&S.traverseVisible(function(B){B.isLight&&B.layers.test(U.layers)&&(M.pushLight(B),B.castShadow&&M.pushShadow(B))}),M.setupLights();const O=new Set;return S.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const mt=B.material;if(mt)if(Array.isArray(mt))for(let _t=0;_t<mt.length;_t++){const pt=mt[_t];Rc(pt,V,B),O.add(pt)}else Rc(mt,V,B),O.add(mt)}),M=b.pop(),O},this.compileAsync=function(S,U,V=null){const O=this.compile(S,U,V);return new Promise(B=>{function mt(){if(O.forEach(function(_t){H.get(_t).currentProgram.isReady()&&O.delete(_t)}),O.size===0){B(S);return}setTimeout(mt,10)}re.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let Fo=null;function cp(S){Fo&&Fo(S)}function Pc(){Bs.stop()}function Fc(){Bs.start()}const Bs=new wf;Bs.setAnimationLoop(cp),typeof self<"u"&&Bs.setContext(self),this.setAnimationLoop=function(S){Fo=S,At.setAnimationLoop(S),S===null?Bs.stop():Bs.start()},At.addEventListener("sessionstart",Pc),At.addEventListener("sessionend",Fc),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){Qt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;F!==null&&F.renderStart(S,U);const V=At.enabled===!0&&At.isPresenting===!0,O=x!==null&&(K===null||V)&&x.begin(E,K);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),At.enabled===!0&&At.isPresenting===!0&&(x===null||x.isCompositing()===!1)&&(At.cameraAutoUpdate===!0&&At.updateCamera(U),U=At.getCamera()),S.isScene===!0&&S.onBeforeRender(E,S,U,K),M=ht.get(S,b.length),M.init(U),M.state.textureUnits=X.getTextureUnits(),b.push(M),Ne.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),de.setFromProjectionMatrix(Ne,ss,U.reversedDepth),te=this.localClippingEnabled,se=Dt.init(this.clippingPlanes,te),T=dt.get(S,C.length),T.init(),C.push(T),At.enabled===!0&&At.isPresenting===!0){const _t=E.xr.getDepthSensingMesh();_t!==null&&Lo(_t,U,-1/0,E.sortObjects)}Lo(S,U,0,E.sortObjects),T.finish(),E.sortObjects===!0&&T.sort(Nt,Ht,U.reversedDepth),Re=At.enabled===!1||At.isPresenting===!1||At.hasDepthSensing()===!1,Re&&Gt.addToRenderList(T,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),se===!0&&Dt.beginShadows();const B=M.state.shadowsArray;if(Ut.render(B,S,U),se===!0&&Dt.endShadows(),(O&&x.hasRenderPass())===!1){const _t=T.opaque,pt=T.transmissive;if(M.setupLights(),U.isArrayCamera){const Et=U.cameras;if(pt.length>0)for(let Pt=0,Vt=Et.length;Pt<Vt;Pt++){const qt=Et[Pt];Dc(_t,pt,S,qt)}Re&&Gt.render(S);for(let Pt=0,Vt=Et.length;Pt<Vt;Pt++){const qt=Et[Pt];Lc(T,S,qt,qt.viewport)}}else pt.length>0&&Dc(_t,pt,S,U),Re&&Gt.render(S),Lc(T,S,U)}K!==null&&z===0&&(X.updateMultisampleRenderTarget(K),X.updateRenderTargetMipmap(K)),O&&x.end(E),S.isScene===!0&&S.onAfterRender(E,S,U),gt.resetDefaultState(),tt=-1,at=null,b.pop(),b.length>0?(M=b[b.length-1],X.setTextureUnits(M.state.textureUnits),se===!0&&Dt.setGlobalState(E.clippingPlanes,M.state.camera)):M=null,C.pop(),C.length>0?T=C[C.length-1]:T=null,F!==null&&F.renderEnd()};function Lo(S,U,V,O){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)V=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLightProbeGrid)M.pushLightProbeGrid(S);else if(S.isLight)M.pushLight(S),S.castShadow&&M.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||de.intersectsSprite(S)){O&&je.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Ne);const _t=Z.update(S),pt=S.material;pt.visible&&T.push(S,_t,pt,V,je.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||de.intersectsObject(S))){const _t=Z.update(S),pt=S.material;if(O&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),je.copy(S.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),je.copy(_t.boundingSphere.center)),je.applyMatrix4(S.matrixWorld).applyMatrix4(Ne)),Array.isArray(pt)){const Et=_t.groups;for(let Pt=0,Vt=Et.length;Pt<Vt;Pt++){const qt=Et[Pt],Ft=pt[qt.materialIndex];Ft&&Ft.visible&&T.push(S,_t,Ft,V,je.z,qt)}}else pt.visible&&T.push(S,_t,pt,V,je.z,null)}}const mt=S.children;for(let _t=0,pt=mt.length;_t<pt;_t++)Lo(mt[_t],U,V,O)}function Lc(S,U,V,O){const{opaque:B,transmissive:mt,transparent:_t}=S;M.setupLightsView(V),se===!0&&Dt.setGlobalState(E.clippingPlanes,V),O&&_.viewport(ut.copy(O)),B.length>0&&Qa(B,U,V),mt.length>0&&Qa(mt,U,V),_t.length>0&&Qa(_t,U,V),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function Dc(S,U,V,O){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[O.id]===void 0){const Ft=re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[O.id]=new _i(1,1,{generateMipmaps:!0,type:Ft?Ri:Ui,minFilter:an,samples:Math.max(4,R.samples),stencilBuffer:n,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace})}const mt=M.state.transmissionRenderTarget[O.id],_t=O.viewport||ut;mt.setSize(_t.z*E.transmissionResolutionScale,_t.w*E.transmissionResolutionScale);const pt=E.getRenderTarget(),Et=E.getActiveCubeFace(),Pt=E.getActiveMipmapLevel();E.setRenderTarget(mt),E.getClearColor(Ce),ie=E.getClearAlpha(),ie<1&&E.setClearColor(16777215,.5),E.clear(),Re&&Gt.render(V);const Vt=E.toneMapping;E.toneMapping=rs;const qt=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),M.setupLightsView(O),se===!0&&Dt.setGlobalState(E.clippingPlanes,O),Qa(S,V,O),X.updateMultisampleRenderTarget(mt),X.updateRenderTargetMipmap(mt),re.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let le=0,Ue=U.length;le<Ue;le++){const Fe=U[le],{object:fe,geometry:ii,material:bt,group:wi}=Fe;if(bt.side===ti&&fe.layers.test(O.layers)){const ee=bt.side;bt.side=bi,bt.needsUpdate=!0,Ic(fe,V,O,ii,bt,wi),bt.side=ee,bt.needsUpdate=!0,Ft=!0}}Ft===!0&&(X.updateMultisampleRenderTarget(mt),X.updateRenderTargetMipmap(mt))}E.setRenderTarget(pt,Et,Pt),E.setClearColor(Ce,ie),qt!==void 0&&(O.viewport=qt),E.toneMapping=Vt}function Qa(S,U,V){const O=U.isScene===!0?U.overrideMaterial:null;for(let B=0,mt=S.length;B<mt;B++){const _t=S[B],{object:pt,geometry:Et,group:Pt}=_t;let Vt=_t.material;Vt.allowOverride===!0&&O!==null&&(Vt=O),pt.layers.test(V.layers)&&Ic(pt,U,V,Et,Vt,Pt)}}function Ic(S,U,V,O,B,mt){S.onBeforeRender(E,U,V,O,B,mt),S.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),B.onBeforeRender(E,U,V,O,S,mt),B.transparent===!0&&B.side===ti&&B.forceSinglePass===!1?(B.side=bi,B.needsUpdate=!0,E.renderBufferDirect(V,U,O,B,S,mt),B.side=ks,B.needsUpdate=!0,E.renderBufferDirect(V,U,O,B,S,mt),B.side=ti):E.renderBufferDirect(V,U,O,B,S,mt),S.onAfterRender(E,U,V,O,B,mt)}function Ja(S,U,V){U.isScene!==!0&&(U=Ke);const O=H.get(S),B=M.state.lights,mt=M.state.shadowsArray,_t=B.state.version,pt=lt.getParameters(S,B.state,mt,U,V,M.state.lightProbeGridArray),Et=lt.getProgramCacheKey(pt);let Pt=O.programs;O.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?U.environment:null,O.fog=U.fog;const Vt=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;O.envMap=st.get(S.envMap||O.environment,Vt),O.envMapRotation=O.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,Pt===void 0&&(S.addEventListener("dispose",$i),Pt=new Map,O.programs=Pt);let qt=Pt.get(Et);if(qt!==void 0){if(O.currentProgram===qt&&O.lightsStateVersion===_t)return zc(S,pt),qt}else pt.uniforms=lt.getUniforms(S),F!==null&&S.isNodeMaterial&&F.build(S,V,pt),S.onBeforeCompile(pt,E),qt=lt.acquireProgram(pt,Et),Pt.set(Et,qt),O.uniforms=pt.uniforms;const Ft=O.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ft.clippingPlanes=Dt.uniform),zc(S,pt),O.needsLights=pp(S),O.lightsStateVersion=_t,O.needsLights&&(Ft.ambientLightColor.value=B.state.ambient,Ft.lightProbe.value=B.state.probe,Ft.directionalLights.value=B.state.directional,Ft.directionalLightShadows.value=B.state.directionalShadow,Ft.spotLights.value=B.state.spot,Ft.spotLightShadows.value=B.state.spotShadow,Ft.rectAreaLights.value=B.state.rectArea,Ft.ltc_1.value=B.state.rectAreaLTC1,Ft.ltc_2.value=B.state.rectAreaLTC2,Ft.pointLights.value=B.state.point,Ft.pointLightShadows.value=B.state.pointShadow,Ft.hemisphereLights.value=B.state.hemi,Ft.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ft.spotLightMatrix.value=B.state.spotLightMatrix,Ft.spotLightMap.value=B.state.spotLightMap,Ft.pointShadowMatrix.value=B.state.pointShadowMatrix),O.lightProbeGrid=M.state.lightProbeGridArray.length>0,O.currentProgram=qt,O.uniformsList=null,qt}function Uc(S){if(S.uniformsList===null){const U=S.currentProgram.getUniforms();S.uniformsList=eo.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function zc(S,U){const V=H.get(S);V.outputColorSpace=U.outputColorSpace,V.batching=U.batching,V.batchingColor=U.batchingColor,V.instancing=U.instancing,V.instancingColor=U.instancingColor,V.instancingMorph=U.instancingMorph,V.skinning=U.skinning,V.morphTargets=U.morphTargets,V.morphNormals=U.morphNormals,V.morphColors=U.morphColors,V.morphTargetsCount=U.morphTargetsCount,V.numClippingPlanes=U.numClippingPlanes,V.numIntersection=U.numClipIntersection,V.vertexAlphas=U.vertexAlphas,V.vertexTangents=U.vertexTangents,V.toneMapping=U.toneMapping}function up(S,U){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;y.setFromMatrixPosition(U.matrixWorld);for(let V=0,O=S.length;V<O;V++){const B=S[V];if(B.texture!==null&&B.boundingBox.containsPoint(y))return B}return null}function dp(S,U,V,O,B){U.isScene!==!0&&(U=Ke),X.resetTextureUnits();const mt=U.fog,_t=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?U.environment:null,pt=K===null?E.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Zt.workingColorSpace,Et=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,Pt=st.get(O.envMap||_t,Et),Vt=O.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,qt=!!V.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Ft=!!V.morphAttributes.position,le=!!V.morphAttributes.normal,Ue=!!V.morphAttributes.color;let Fe=rs;O.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Fe=E.toneMapping);const fe=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ii=fe!==void 0?fe.length:0,bt=H.get(O),wi=M.state.lights;if(se===!0&&(te===!0||S!==at)){const be=S===at&&O.id===tt;Dt.setState(O,S,be)}let ee=!1;O.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==wi.state.version||bt.outputColorSpace!==pt||B.isBatchedMesh&&bt.batching===!1||!B.isBatchedMesh&&bt.batching===!0||B.isBatchedMesh&&bt.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&bt.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&bt.instancing===!1||!B.isInstancedMesh&&bt.instancing===!0||B.isSkinnedMesh&&bt.skinning===!1||!B.isSkinnedMesh&&bt.skinning===!0||B.isInstancedMesh&&bt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&bt.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&bt.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&bt.instancingMorph===!1&&B.morphTexture!==null||bt.envMap!==Pt||O.fog===!0&&bt.fog!==mt||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==Dt.numPlanes||bt.numIntersection!==Dt.numIntersection)||bt.vertexAlphas!==Vt||bt.vertexTangents!==qt||bt.morphTargets!==Ft||bt.morphNormals!==le||bt.morphColors!==Ue||bt.toneMapping!==Fe||bt.morphTargetsCount!==ii||!!bt.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(ee=!0):(ee=!0,bt.__version=O.version);let Pi=bt.currentProgram;ee===!0&&(Pi=Ja(O,U,B),F&&O.isNodeMaterial&&F.onUpdateProgram(O,Pi,bt));let Zi=!1,Ss=!1,gn=!1;const pe=Pi.getUniforms(),ze=bt.uniforms;if(_.useProgram(Pi.program)&&(Zi=!0,Ss=!0,gn=!0),O.id!==tt&&(tt=O.id,Ss=!0),bt.needsLights){const be=up(M.state.lightProbeGridArray,B);bt.lightProbeGrid!==be&&(bt.lightProbeGrid=be,Ss=!0)}if(Zi||at!==S){_.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),pe.setValue(I,"projectionMatrix",S.projectionMatrix),pe.setValue(I,"viewMatrix",S.matrixWorldInverse);const Ts=pe.map.cameraPosition;Ts!==void 0&&Ts.setValue(I,Ge.setFromMatrixPosition(S.matrixWorld)),R.logarithmicDepthBuffer&&pe.setValue(I,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&pe.setValue(I,"isOrthographic",S.isOrthographicCamera===!0),at!==S&&(at=S,Ss=!0,gn=!0)}if(bt.needsLights&&(wi.state.directionalShadowMap.length>0&&pe.setValue(I,"directionalShadowMap",wi.state.directionalShadowMap,X),wi.state.spotShadowMap.length>0&&pe.setValue(I,"spotShadowMap",wi.state.spotShadowMap,X),wi.state.pointShadowMap.length>0&&pe.setValue(I,"pointShadowMap",wi.state.pointShadowMap,X)),B.isSkinnedMesh){pe.setOptional(I,B,"bindMatrix"),pe.setOptional(I,B,"bindMatrixInverse");const be=B.skeleton;be&&(be.boneTexture===null&&be.computeBoneTexture(),pe.setValue(I,"boneTexture",be.boneTexture,X))}B.isBatchedMesh&&(pe.setOptional(I,B,"batchingTexture"),pe.setValue(I,"batchingTexture",B._matricesTexture,X),pe.setOptional(I,B,"batchingIdTexture"),pe.setValue(I,"batchingIdTexture",B._indirectTexture,X),pe.setOptional(I,B,"batchingColorTexture"),B._colorsTexture!==null&&pe.setValue(I,"batchingColorTexture",B._colorsTexture,X));const As=V.morphAttributes;if((As.position!==void 0||As.normal!==void 0||As.color!==void 0)&&D.update(B,V,Pi),(Ss||bt.receiveShadow!==B.receiveShadow)&&(bt.receiveShadow=B.receiveShadow,pe.setValue(I,"receiveShadow",B.receiveShadow)),(O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial)&&O.envMap===null&&U.environment!==null&&(ze.envMapIntensity.value=U.environmentIntensity),ze.dfgLUT!==void 0&&(ze.dfgLUT.value=R1()),Ss){if(pe.setValue(I,"toneMappingExposure",E.toneMappingExposure),bt.needsLights&&fp(ze,gn),mt&&O.fog===!0&&Rt.refreshFogUniforms(ze,mt),Rt.refreshMaterialUniforms(ze,O,et,rt,M.state.transmissionRenderTarget[S.id]),bt.needsLights&&bt.lightProbeGrid){const be=bt.lightProbeGrid;ze.probesSH.value=be.texture,ze.probesMin.value.copy(be.boundingBox.min),ze.probesMax.value.copy(be.boundingBox.max),ze.probesResolution.value.copy(be.resolution)}eo.upload(I,Uc(bt),ze,X)}if(O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(eo.upload(I,Uc(bt),ze,X),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&pe.setValue(I,"center",B.center),pe.setValue(I,"modelViewMatrix",B.modelViewMatrix),pe.setValue(I,"normalMatrix",B.normalMatrix),pe.setValue(I,"modelMatrix",B.matrixWorld),O.uniformsGroups!==void 0){const be=O.uniformsGroups;for(let Ts=0,vn=be.length;Ts<vn;Ts++){const kc=be[Ts];J.update(kc,Pi),J.bind(kc,Pi)}}return Pi}function fp(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function pp(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(S,U,V){const O=H.get(S);O.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),H.get(S.texture).__webglTexture=U,H.get(S.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:V,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,U){const V=H.get(S);V.__webglFramebuffer=U,V.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(S,U=0,V=0){K=S,W=U,z=V;let O=null,B=!1,mt=!1;if(S){const pt=H.get(S);if(pt.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(I.FRAMEBUFFER,pt.__webglFramebuffer),ut.copy(S.viewport),xt.copy(S.scissor),Yt=S.scissorTest,_.viewport(ut),_.scissor(xt),_.setScissorTest(Yt),tt=-1;return}else if(pt.__webglFramebuffer===void 0)X.setupRenderTarget(S);else if(pt.__hasExternalTextures)X.rebindTextures(S,H.get(S.texture).__webglTexture,H.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Vt=S.depthTexture;if(pt.__boundDepthTexture!==Vt){if(Vt!==null&&H.has(Vt)&&(S.width!==Vt.image.width||S.height!==Vt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");X.setupDepthRenderbuffer(S)}}const Et=S.texture;(Et.isData3DTexture||Et.isDataArrayTexture||Et.isCompressedArrayTexture)&&(mt=!0);const Pt=H.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Pt[U])?O=Pt[U][V]:O=Pt[U],B=!0):S.samples>0&&X.useMultisampledRTT(S)===!1?O=H.get(S).__webglMultisampledFramebuffer:Array.isArray(Pt)?O=Pt[V]:O=Pt,ut.copy(S.viewport),xt.copy(S.scissor),Yt=S.scissorTest}else ut.copy(It).multiplyScalar(et).floor(),xt.copy(Ie).multiplyScalar(et).floor(),Yt=$t;if(V!==0&&(O=G),_.bindFramebuffer(I.FRAMEBUFFER,O)&&_.drawBuffers(S,O),_.viewport(ut),_.scissor(xt),_.setScissorTest(Yt),B){const pt=H.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,pt.__webglTexture,V)}else if(mt){const pt=U;for(let Et=0;Et<S.textures.length;Et++){const Pt=H.get(S.textures[Et]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Et,Pt.__webglTexture,V,pt)}}else if(S!==null&&V!==0){const pt=H.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,pt.__webglTexture,V)}tt=-1},this.readRenderTargetPixels=function(S,U,V,O,B,mt,_t,pt=0){if(!(S&&S.isWebGLRenderTarget)){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=H.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&_t!==void 0&&(Et=Et[_t]),Et){_.bindFramebuffer(I.FRAMEBUFFER,Et);try{const Pt=S.textures[pt],Vt=Pt.format,qt=Pt.type;if(S.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+pt),!R.textureFormatReadable(Vt)){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!R.textureTypeReadable(qt)){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-O&&V>=0&&V<=S.height-B&&I.readPixels(U,V,O,B,ct.convert(Vt),ct.convert(qt),mt)}finally{const Pt=K!==null?H.get(K).__webglFramebuffer:null;_.bindFramebuffer(I.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(S,U,V,O,B,mt,_t,pt=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=H.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&_t!==void 0&&(Et=Et[_t]),Et)if(U>=0&&U<=S.width-O&&V>=0&&V<=S.height-B){_.bindFramebuffer(I.FRAMEBUFFER,Et);const Pt=S.textures[pt],Vt=Pt.format,qt=Pt.type;if(S.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+pt),!R.textureFormatReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!R.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ft=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Ft),I.bufferData(I.PIXEL_PACK_BUFFER,mt.byteLength,I.STREAM_READ),I.readPixels(U,V,O,B,ct.convert(Vt),ct.convert(qt),0);const le=K!==null?H.get(K).__webglFramebuffer:null;_.bindFramebuffer(I.FRAMEBUFFER,le);const Ue=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await $p(I,Ue,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Ft),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,mt),I.deleteBuffer(Ft),I.deleteSync(Ue),mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,U=null,V=0){const O=Math.pow(2,-V),B=Math.floor(S.image.width*O),mt=Math.floor(S.image.height*O),_t=U!==null?U.x:0,pt=U!==null?U.y:0;X.setTexture2D(S,0),I.copyTexSubImage2D(I.TEXTURE_2D,V,0,0,_t,pt,B,mt),_.unbindTexture()},this.copyTextureToTexture=function(S,U,V=null,O=null,B=0,mt=0){let _t,pt,Et,Pt,Vt,qt,Ft,le,Ue;const Fe=S.isCompressedTexture?S.mipmaps[mt]:S.image;if(V!==null)_t=V.max.x-V.min.x,pt=V.max.y-V.min.y,Et=V.isBox3?V.max.z-V.min.z:1,Pt=V.min.x,Vt=V.min.y,qt=V.isBox3?V.min.z:0;else{const ze=Math.pow(2,-B);_t=Math.floor(Fe.width*ze),pt=Math.floor(Fe.height*ze),S.isDataArrayTexture?Et=Fe.depth:S.isData3DTexture?Et=Math.floor(Fe.depth*ze):Et=1,Pt=0,Vt=0,qt=0}O!==null?(Ft=O.x,le=O.y,Ue=O.z):(Ft=0,le=0,Ue=0);const fe=ct.convert(U.format),ii=ct.convert(U.type);let bt;U.isData3DTexture?(X.setTexture3D(U,0),bt=I.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(X.setTexture2DArray(U,0),bt=I.TEXTURE_2D_ARRAY):(X.setTexture2D(U,0),bt=I.TEXTURE_2D),_.activeTexture(I.TEXTURE0),_.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),_.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),_.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);const wi=_.getParameter(I.UNPACK_ROW_LENGTH),ee=_.getParameter(I.UNPACK_IMAGE_HEIGHT),Pi=_.getParameter(I.UNPACK_SKIP_PIXELS),Zi=_.getParameter(I.UNPACK_SKIP_ROWS),Ss=_.getParameter(I.UNPACK_SKIP_IMAGES);_.pixelStorei(I.UNPACK_ROW_LENGTH,Fe.width),_.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Fe.height),_.pixelStorei(I.UNPACK_SKIP_PIXELS,Pt),_.pixelStorei(I.UNPACK_SKIP_ROWS,Vt),_.pixelStorei(I.UNPACK_SKIP_IMAGES,qt);const gn=S.isDataArrayTexture||S.isData3DTexture,pe=U.isDataArrayTexture||U.isData3DTexture;if(S.isDepthTexture){const ze=H.get(S),As=H.get(U),be=H.get(ze.__renderTarget),Ts=H.get(As.__renderTarget);_.bindFramebuffer(I.READ_FRAMEBUFFER,be.__webglFramebuffer),_.bindFramebuffer(I.DRAW_FRAMEBUFFER,Ts.__webglFramebuffer);for(let vn=0;vn<Et;vn++)gn&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,H.get(S).__webglTexture,B,qt+vn),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,H.get(U).__webglTexture,mt,Ue+vn)),I.blitFramebuffer(Pt,Vt,_t,pt,Ft,le,_t,pt,I.DEPTH_BUFFER_BIT,I.NEAREST);_.bindFramebuffer(I.READ_FRAMEBUFFER,null),_.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(B!==0||S.isRenderTargetTexture||H.has(S)){const ze=H.get(S),As=H.get(U);_.bindFramebuffer(I.READ_FRAMEBUFFER,j),_.bindFramebuffer(I.DRAW_FRAMEBUFFER,N);for(let be=0;be<Et;be++)gn?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ze.__webglTexture,B,qt+be):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ze.__webglTexture,B),pe?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,As.__webglTexture,mt,Ue+be):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,As.__webglTexture,mt),B!==0?I.blitFramebuffer(Pt,Vt,_t,pt,Ft,le,_t,pt,I.COLOR_BUFFER_BIT,I.NEAREST):pe?I.copyTexSubImage3D(bt,mt,Ft,le,Ue+be,Pt,Vt,_t,pt):I.copyTexSubImage2D(bt,mt,Ft,le,Pt,Vt,_t,pt);_.bindFramebuffer(I.READ_FRAMEBUFFER,null),_.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else pe?S.isDataTexture||S.isData3DTexture?I.texSubImage3D(bt,mt,Ft,le,Ue,_t,pt,Et,fe,ii,Fe.data):U.isCompressedArrayTexture?I.compressedTexSubImage3D(bt,mt,Ft,le,Ue,_t,pt,Et,fe,Fe.data):I.texSubImage3D(bt,mt,Ft,le,Ue,_t,pt,Et,fe,ii,Fe):S.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,mt,Ft,le,_t,pt,fe,ii,Fe.data):S.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,mt,Ft,le,Fe.width,Fe.height,fe,Fe.data):I.texSubImage2D(I.TEXTURE_2D,mt,Ft,le,_t,pt,fe,ii,Fe);_.pixelStorei(I.UNPACK_ROW_LENGTH,wi),_.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ee),_.pixelStorei(I.UNPACK_SKIP_PIXELS,Pi),_.pixelStorei(I.UNPACK_SKIP_ROWS,Zi),_.pixelStorei(I.UNPACK_SKIP_IMAGES,Ss),mt===0&&U.generateMipmaps&&I.generateMipmap(bt),_.unbindTexture()},this.initRenderTarget=function(S){H.get(S).__webglFramebuffer===void 0&&X.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?X.setTextureCube(S,0):S.isData3DTexture?X.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?X.setTexture2DArray(S,0):X.setTexture2D(S,0),_.unbindTexture()},this.resetState=function(){W=0,z=0,K=null,_.reset(),gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ss}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Zt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Zt._getUnpackColorSpace()}}const io={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class ha{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const F1=new fc(-1,1,1,-1,0,1);class L1 extends Ee{constructor(){super(),this.setAttribute("position",new ve([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ve([0,2,0,0,2,0],2))}}const D1=new L1;class pc{constructor(t){this._mesh=new we(D1,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,F1)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class mc extends ha{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Ot?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Ha.clone(t.uniforms),this.material=new Ot({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new pc(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Ou extends ha{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){const s=t.getContext(),n=t.state;n.buffers.color.setMask(!1),n.buffers.depth.setMask(!1),n.buffers.color.setLocked(!0),n.buffers.depth.setLocked(!0);let r,o;this.inverse?(r=0,o=1):(r=1,o=0),n.buffers.stencil.setTest(!0),n.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),n.buffers.stencil.setFunc(s.ALWAYS,r,4294967295),n.buffers.stencil.setClear(o),n.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),n.buffers.color.setLocked(!1),n.buffers.depth.setLocked(!1),n.buffers.color.setMask(!0),n.buffers.depth.setMask(!0),n.buffers.stencil.setLocked(!1),n.buffers.stencil.setFunc(s.EQUAL,1,4294967295),n.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),n.buffers.stencil.setLocked(!0)}}class I1 extends ha{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class U1{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const i=t.getSize(new vt);this._width=i.width,this._height=i.height,e=new _i(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ri}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new mc(io),this.copyPass.material.blending=ns,this.timer=new Dm}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());const e=this.renderer.getRenderTarget();let i=!1;for(let s=0,n=this.passes.length;s<n;s++){const r=this.passes[s];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),r.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),r.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Ou!==void 0&&(r instanceof Ou?i=!0:r instanceof I1&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new vt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let n=0;n<this.passes.length;n++)this.passes[n].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class z1 extends ha{constructor(t,e,i=null,s=null,n=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=n,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new zt}render(t,e,i){const s=t.autoClear;t.autoClear=!1;let n,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(n=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(n),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),t.autoClear=s}}const k1={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new zt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class sa extends ha{constructor(t,e=1,i,s){super(),this.strength=e,this.radius=i,this.threshold=s,this.resolution=t!==void 0?new vt(t.x,t.y):new vt(256,256),this.clearColor=new zt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let n=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new _i(n,r,{type:Ri}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let c=0;c<this.nMips;c++){const u=new _i(n,r,{type:Ri});u.texture.name="UnrealBloomPass.h"+c,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const d=new _i(n,r,{type:Ri});d.texture.name="UnrealBloomPass.v"+c,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),n=Math.round(n/2),r=Math.round(r/2)}const o=k1;this.highPassUniforms=Ha.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ot({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];n=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let c=0;c<this.nMips;c++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[c])),this.separableBlurMaterials[c].uniforms.invSize.value=new vt(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ha.clone(io.uniforms),this.blendMaterial=new Ot({uniforms:this.copyUniforms,vertexShader:io.vertexShader,fragmentShader:io.fragmentShader,premultipliedAlpha:!0,blending:He,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new zt,this._oldClearAlpha=1,this._basic=new Mi,this._fsQuad=new pc(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(i,s);for(let n=0;n<this.nMips;n++)this.renderTargetsHorizontal[n].setSize(i,s),this.renderTargetsVertical[n].setSize(i,s),this.separableBlurMaterials[n].uniforms.invSize.value=new vt(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(t,e,i,s,n){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const r=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),n&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=sa.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=sa.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,n&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=r}_getSeparableBlurMaterial(t){const e=[],i=t/3;for(let s=0;s<t;s++)e.push(.39894*Math.exp(-.5*s*s/(i*i))/i);return new Ot({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new vt(.5,.5)},direction:{value:new vt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`

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

				}`})}_getCompositeMaterial(t){return new Ot({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}sa.BlurDirectionX=new vt(1,0);sa.BlurDirectionY=new vt(0,1);const Cr={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class N1 extends ha{constructor(){super(),this.isOutputPass=!0,this.uniforms=Ha.clone(Cr.uniforms),this.material=new _f({name:Cr.name,uniforms:this.uniforms,vertexShader:Cr.vertexShader,fragmentShader:Cr.fragmentShader}),this._fsQuad=new pc(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Zt.getTransfer(this._outputColorSpace)===ae&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===jh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===$h?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Zh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===wo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Yh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Qh?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Kh&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const O1={uniforms:{tDiffuse:{value:null},uTime:{value:0},uBlur:{value:0},uBlurDir:{value:new vt(0,0)},uAberr:{value:0},uMobile:{value:0},uRes:{value:new vt(1,1)},uGrain:{value:.035},uVig:{value:.26}},vertexShader:`
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
  `};class B1{pass;mobile;blur=0;blurX=0;blurZ=0;aberr=0;musou=0;time=0;lastT=0;constructor(t){this.mobile=t,this.pass=new mc(O1),this.pass.uniforms.uMobile.value=t?1:0,this.pass.uniforms.uGrain.value=t?.02:.035,this.lastT=performance.now()}pulseBlur(t,e=0,i=0){t>this.blur&&(this.blur=t);const s=Math.hypot(e,i);s>.001?(this.blurX=e/s,this.blurZ=i/s):(this.blurX=0,this.blurZ=0)}pulseAberration(t){t>this.aberr&&(this.aberr=t)}setMusou(t){this.musou=t<0?0:t>1?1:t}setSize(t,e){this.pass.uniforms.uRes.value.set(t,e)}reset(){this.blur=0,this.aberr=0,this.musou=0}update(){const t=performance.now();let e=(t-this.lastT)/1e3;this.lastT=t,e>.1&&(e=.1),this.time+=e,this.blur=this.blur>.01?this.blur*Math.exp(-e/.11):0,this.aberr=this.aberr>.01?this.aberr*Math.exp(-e/.16):0;const i=this.musou*.45,s=this.musou*.3,n=this.blur>.01,r=this.pass.uniforms;r.uBlur.value=Math.max(this.blur,i),r.uBlurDir.value.set(n?this.blurX:0,n?this.blurZ:0),r.uAberr.value=Math.max(this.aberr,s),r.uTime.value=this.time}}function so(){return"ontouchstart"in window||navigator.maxTouchPoints>0}function Uh(){return Math.min(window.devicePixelRatio,so()?1.5:2)}function H1(a){const t=new P1({antialias:!1,powerPreference:"high-performance"});return t.setPixelRatio(Uh()),t.setSize(window.innerWidth,window.innerHeight),t.toneMapping=wo,t.toneMappingExposure=1,t.outputColorSpace=Me,t.setClearColor(329226,1),a.appendChild(t.domElement),t}const G1={uniforms:{tDiffuse:{value:null},uStrength:{value:0},uTime:{value:0}},vertexShader:`
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
  `},Rr=320,Pr=180,V1=2,Ma=90,Bu=4;class W1{composer;bloom;musouPass;postfx;renderer;bloomScale;pipEnabled;ring=[];ringCtx=[];ringFilled=0;ringHead=0;capCounter=0;replayT=-1;replayStart=0;replayFrames=[];pipWrap=null;pipCanvas=null;pipCtx=null;constructor(t,e,i){this.renderer=t,this.composer=new U1(t),this.composer.setPixelRatio(Uh()),this.composer.setSize(window.innerWidth,window.innerHeight),this.composer.addPass(new z1(e,i)),this.bloomScale=so()?.5:1,this.bloom=new sa(new vt(window.innerWidth*this.bloomScale,window.innerHeight*this.bloomScale),.34,.4,.88),this.composer.addPass(this.bloom),this.musouPass=new mc(G1),this.composer.addPass(this.musouPass),this.postfx=new B1(so()),this.postfx.setSize(window.innerWidth,window.innerHeight),this.composer.addPass(this.postfx.pass),this.composer.addPass(new N1),this.pipEnabled=!so(),this.pipEnabled&&this.initPip()}initPip(){for(let n=0;n<Ma;n++){const r=document.createElement("canvas");r.width=Rr,r.height=Pr;const o=r.getContext("2d");if(!o){this.pipEnabled=!1;return}this.ring.push(r),this.ringCtx.push(o)}const t=document.createElement("div");t.style.cssText=["position:fixed","right:18px","bottom:18px","width:26vw","max-width:360px","aspect-ratio:16/9","z-index:28","pointer-events:none","display:none","border:2px solid rgba(232,201,103,0.85)","border-radius:6px","overflow:hidden","box-shadow:0 6px 24px rgba(0,0,0,0.6)"].join(";");const e=document.createElement("div");e.textContent="討伐 · 슬로 리플레이",e.style.cssText=["position:absolute","left:0","top:0","padding:2px 8px","font:600 12px/1.4 system-ui,sans-serif","color:#ffe9a8","background:linear-gradient(90deg,rgba(0,0,0,0.7),rgba(0,0,0,0))","letter-spacing:0.04em"].join(";");const i=document.createElement("canvas");i.width=Rr,i.height=Pr,i.style.cssText="width:100%;height:100%;display:block;";const s=i.getContext("2d");if(!s){this.pipEnabled=!1;return}t.appendChild(i),t.appendChild(e),document.body.appendChild(t),this.pipWrap=t,this.pipCanvas=i,this.pipCtx=s}playReplay(){if(!this.pipEnabled||this.replayT>=0||this.ringFilled<8)return;this.replayFrames.length=0;const t=this.ringFilled<Ma?0:this.ringHead;for(let e=0;e<this.ringFilled;e++)this.replayFrames.push(this.ring[(t+e)%Ma]);this.replayT=0,this.replayStart=performance.now(),this.pipWrap&&(this.pipWrap.style.display="block",this.pipWrap.animate([{opacity:0,transform:"translateY(12px) scale(0.94)"},{opacity:1,transform:"none"}],{duration:260,easing:"ease-out"}))}setMusou(t,e){this.musouPass.uniforms.uStrength.value=t,this.musouPass.uniforms.uTime.value=e,this.postfx.setMusou(t)}pulseBlur(t,e=0,i=0){this.postfx.pulseBlur(t,e,i)}pulseAberration(t){this.postfx.pulseAberration(t)}setSize(t,e){const i=Uh();this.renderer.setPixelRatio(i),this.renderer.setSize(t,e),this.composer.setPixelRatio(i),this.composer.setSize(t,e),this.bloom.setSize(t*this.bloomScale,e*this.bloomScale),this.postfx.setSize(t,e)}render(){this.postfx.update(),this.composer.render(),this.pipEnabled&&this.pipTick()}pipTick(){if(this.replayT>=0){this.advanceReplay();return}++this.capCounter<V1||(this.capCounter=0,this.ringCtx[this.ringHead].drawImage(this.renderer.domElement,0,0,Rr,Pr),this.ringHead=(this.ringHead+1)%Ma,this.ringFilled<Ma&&this.ringFilled++)}advanceReplay(){const t=(performance.now()-this.replayStart)/1e3;if(this.replayT=t,t>=Bu||!this.pipCtx||this.replayFrames.length===0){this.endReplay();return}const e=Math.min(this.replayFrames.length-1,Math.floor(t/Bu*this.replayFrames.length));this.pipCtx.drawImage(this.replayFrames[e],0,0,Rr,Pr)}endReplay(){if(this.replayT=-1,this.replayFrames.length=0,this.capCounter=0,this.pipWrap){const t=this.pipWrap;t.animate([{opacity:1},{opacity:0}],{duration:260,easing:"ease-in"}).onfinish=()=>{t.style.display="none"}}}}const ca=55*Math.PI/180,X1=24,q1=Math.sin(ca),j1=Math.cos(ca),$1=1.1,Z1=1.5,Hu=1.1,K1=.08,Y1=2.5,Q1=.3,J1=.05,tb=.05,eb=1.32,Gu=2.2,ib=.55,Vu=1.8;function pl(a,t){const e=Math.sin(a*12.9898+t*78.233)*43758.5453;return(e-Math.floor(e))*2-1}const Wu=40;class sb{camera;sx={x:0,z:0};trauma=0;time=0;inited=!1;fovPunch=0;zoom=1;threat=0;speedFrac=0;cine=0;cineHold=0;azi=0;elevOff=0;offX=0;offZ=0;laX=0;laZ=0;laTX=0;laTZ=0;look=new L;constructor(){this.camera=new Di(Wu,window.innerWidth/window.innerHeight,.1,300)}onResize(t,e){this.camera.aspect=t/e,this.camera.updateProjectionMatrix()}addTrauma(t){this.trauma=Math.min(1,this.trauma+t)}punchFov(t){this.fovPunch=Math.max(-6,Math.min(6,this.fovPunch+t))}setThreat(t){this.threat=t<0?0:t>1?1:t}setLookAhead(t,e,i){const s=Math.min(1,i);this.speedFrac=s;const n=Math.hypot(t,e)||1;this.laTX=t/n*s*Gu*ib,this.laTZ=e/n*s*Gu}cinematic(t){this.cine=t}setCinematicPose(t,e,i,s=0,n=0){this.azi=t,this.elevOff=e,this.cineHold=i,this.offX=s,this.offZ=n}update(t,e,i){this.time+=t,this.laX+=(this.laTX-this.laX)*Math.min(1,Vu*t),this.laZ+=(this.laTZ-this.laZ)*Math.min(1,Vu*t);const s=e+this.laX,n=i+this.laZ;this.inited||(this.sx.x=s,this.sx.z=n,this.inited=!0);const r=1-Math.exp(-9*t);this.sx.x+=(s-this.sx.x)*r,this.sx.z+=(n-this.sx.z)*r,this.cine*=Math.exp(-t/.7),Math.abs(this.cine)<.002&&(this.cine=0);const o=Math.min(eb,1+this.threat*Q1-J1*(1-this.threat)+tb*this.speedFrac);this.zoom+=(o-this.zoom)*Math.min(1,Y1*t);const l=X1*Math.max(.5,this.zoom+this.cine+this.cineHold);Math.abs(this.fovPunch)>.001&&(this.fovPunch*=Math.exp(-t/.18),Math.abs(this.fovPunch)<.001&&(this.fovPunch=0),this.camera.fov=Wu+this.fovPunch,this.camera.updateProjectionMatrix());let h=q1,c=j1;if(this.elevOff!==0){const m=ca+this.elevOff;h=Math.sin(m),c=Math.cos(m)}const u=l*c,d=this.sx.x+this.offX,f=this.sx.z+this.offZ;if(this.azi!==0?this.camera.position.set(d+u*Math.sin(this.azi),l*h,f+u*Math.cos(this.azi)):this.camera.position.set(d,l*h,f+u),this.look.set(d,$1,f),this.camera.lookAt(this.look),this.trauma=Math.max(0,this.trauma-Z1*t),this.trauma>0){const m=this.trauma*this.trauma,v=this.time*32;this.camera.position.x+=Hu*m*pl(v,1),this.camera.position.y+=Hu*m*pl(v,2),this.camera.rotation.z+=K1*m*pl(v,3)}}}class nb{down=new Set;pressed=new Set;move={x:0,z:0};joy={x:0,z:0,active:!1};constructor(t=window){t.addEventListener("keydown",this.onKeyDown),t.addEventListener("keyup",this.onKeyUp),window.addEventListener("blur",()=>{this.down.clear()})}onKeyDown=t=>{ab.has(t.code)&&t.preventDefault(),this.down.has(t.code)||this.pressed.add(t.code),this.down.add(t.code)};onKeyUp=t=>{this.down.delete(t.code)};isDown(t){return this.down.has(t)}consumePressed(t){return this.pressed.has(t)?(this.pressed.delete(t),!0):!1}press(t){this.pressed.add(t)}poll(){if(this.joy.active){this.move.x=this.joy.x,this.move.z=this.joy.z;return}let t=0,e=0;(this.down.has("KeyD")||this.down.has("ArrowRight"))&&(t+=1),(this.down.has("KeyA")||this.down.has("ArrowLeft"))&&(t-=1),(this.down.has("KeyS")||this.down.has("ArrowDown"))&&(e+=1),(this.down.has("KeyW")||this.down.has("ArrowUp"))&&(e-=1),this.move.x=t,this.move.z=e}endFrame(){this.pressed.clear()}}const ab=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"]);class rb{running=!1;last=0;cb;constructor(t){this.cb=t}start(){this.running||(this.running=!0,this.last=performance.now(),requestAnimationFrame(this.tick))}stop(){this.running=!1}tick=t=>{if(!this.running)return;let e=(t-this.last)/1e3;this.last=t,e>.033&&(e=.033),e<0&&(e=0),this.cb(e),requestAnimationFrame(this.tick)}}const Ns=48,Ga=64;function gc(a,t,e,i,s,n){const r=t+s*Ns,o=e+i*Ga;n.u=r/a.texW,n.v=1-(o+Ga)/a.texH}class ob{manifest;sgrade;apriority;soldiers;variants;constructor(t,e){this.manifest=t,this.sgrade=e.sgrade,this.apriority=e.apriority,this.soldiers=e.soldiers,this.variants=e.variants}soldierBlockPx(t){return t*4*Ns}variantBlocks(t){return this.manifest.sheets.soldiersVariants.variants[t]??[]}}function Fr(a,t,e){a.magFilter=oe,a.minFilter=oe,a.generateMipmaps=!1,a.colorSpace=Me,a.premultiplyAlpha=!1,a.flipY=!0,a.needsUpdate=!0;const i=t*Ns,s=e*Ga;return{texture:a,texW:i,texH:s,cellUvW:Ns/i,cellUvH:Ga/s}}async function lb(){const t="/threesur/"+"assets/sprites/",i=await(await fetch(t+"manifest.json")).json(),s=new ja,n=c=>new Promise((u,d)=>{s.load(t+c,u,void 0,d)}),[r,o,l,h]=await Promise.all([n(i.sheets.sgrade.file),n(i.sheets.apriority.file),n(i.sheets.soldiers.file),n(i.sheets.soldiersVariants.file)]);return new ob(i,{sgrade:Fr(r,i.sheets.sgrade.cols,i.sheets.sgrade.rows),apriority:Fr(o,i.sheets.apriority.cols,i.sheets.apriority.rows),soldiers:Fr(l,i.sheets.soldiers.cols,i.sheets.soldiers.rows),variants:Fr(h,i.sheets.soldiersVariants.cols,i.sheets.soldiersVariants.rows)})}const Nn=a=>1-Math.pow(1-a,3),On=a=>a<.5?4*a*a*a:1-Math.pow(-2*a+2,3)/2,zh=a=>a<0?0:a>1?1:a,Xu=(a,t,e)=>{const i=zh((e-a)/(t-a));return i*i*(3-2*i)},Lr=.4,ml=-.15,qu=-.08,hb=-.11,ju=.4,Dr=.6,gl=1.1,cb=.07,ub=.9,$u=.45,vl=.7,db=-.13,fb=32,Zu=1,Ku=9,pb=.1,Yu=1.2,mb=.62,gb=-.12,Qu=6,Ju=.7,td=4,vb=.05;class xb{rig;onReplay;musouActive=!1;musouT=0;musouEndT=-1;endAzi=0;endElev=0;endZoom=0;killcamT=-1;killcamCooldown=0;panT=-1;panDirX=0;panDirZ=0;deathT=-1;deathDirX=0;deathDirZ=0;allyT=-1;allyDirX=0;allyDirZ=0;vignette;replayPending=!1;constructor(t,e){this.rig=t,this.onReplay=e??null,this.vignette=document.createElement("div"),this.vignette.style.cssText=["position:fixed","inset:0","pointer-events:none","opacity:0","z-index:29","background:radial-gradient(ellipse at center, rgba(0,0,0,0) 34%, rgba(6,4,10,0.9) 100%)"].join(";"),document.body.appendChild(this.vignette)}onMusouStart(){this.musouActive=!0,this.musouT=0,this.musouEndT=-1,this.killcamT=-1,this.rig.addTrauma(.35),this.rig.punchFov(-2.5)}onMusouEnd(){if(!this.musouActive)return;const t=this.musouPose(this.musouT);this.endAzi=t.azi,this.endElev=t.elev,this.endZoom=t.zoom,this.musouActive=!1,this.musouEndT=0,this.rig.cinematic(-.11),this.rig.punchFov(4.5),this.rig.addTrauma(.6)}onMassKill(t){this.musouActive||this.musouEndT>=0||this.killcamCooldown>0||this.killcamT>=0||(this.killcamT=0,this.killcamCooldown=fb,this.rig.addTrauma(.25),this.vignette.animate([{opacity:0},{opacity:.95,offset:.22},{opacity:.6,offset:.55},{opacity:0}],{duration:vl*1e3,easing:"ease-out"}))}onBossSpawn(t,e){const i=Math.hypot(t,e)||1;this.panDirX=t/i,this.panDirZ=e/i,this.panT=0}onBossDeath(t,e){const i=Math.hypot(t,e)||1;this.deathDirX=t/i,this.deathDirZ=e/i,this.deathT=0,this.panT=-1,this.onReplay?this.onReplay():this.replayPending=!0}onAllyJoin(t,e){if(this.musouActive||this.musouEndT>=0||this.panT>=0||this.deathT>=0||this.killcamT>=0)return;const i=Math.hypot(t,e)||1;this.allyDirX=t/i,this.allyDirZ=e/i,this.allyT=0}onDash(){this.rig.cinematic(-.1),this.rig.punchFov(2)}get wantsSkipInput(){return this.panT>=0}skip(){this.panT>=0&&(this.panT=-1),this.allyT>=0&&(this.allyT=-1)}consumeReplayTrigger(){return this.replayPending?(this.replayPending=!1,!0):!1}reset(){this.musouActive=!1,this.musouEndT=-1,this.killcamT=-1,this.killcamCooldown=0,this.panT=-1,this.deathT=-1,this.allyT=-1,this.replayPending=!1,this.rig.setCinematicPose(0,0,0,0,0)}update(t){this.killcamCooldown>0&&(this.killcamCooldown-=t);let e=0,i=0,s=0,n=0,r=0;if(this.musouActive){this.musouT+=t;const o=this.musouPose(this.musouT);e+=o.azi,i+=o.elev,s+=o.zoom}else if(this.musouEndT>=0){this.musouEndT+=t;const o=On(zh(this.musouEndT/$u));e+=this.endAzi*(1-o),i+=this.endElev*(1-o),s+=this.endZoom*(1-o),this.musouEndT>=$u&&(this.musouEndT=-1)}if(this.killcamT>=0){this.killcamT+=t;const o=this.killcamT/vl,l=Xu(0,.18,o)*(1-Xu(.55,1,o));s+=db*l,this.killcamT>=vl&&(this.killcamT=-1)}if(this.panT>=0){this.panT+=t;const o=this.panT/Zu,l=o<.5?Nn(o/.5):1-On((o-.5)/.5);n+=this.panDirX*Ku*l,r+=this.panDirZ*Ku*l,s+=pb*l,this.panT>=Zu&&(this.panT=-1)}if(this.deathT>=0){this.deathT+=t;const o=this.deathT/Yu,l=o<.45?Nn(o/.45):1-On((o-.45)/.55);e+=mb*l,s+=gb*l,n+=this.deathDirX*Qu*l,r+=this.deathDirZ*Qu*l,this.deathT>=Yu&&(this.deathT=-1)}if(this.allyT>=0)if(this.musouActive||this.musouEndT>=0||this.panT>=0||this.deathT>=0||this.killcamT>=0)this.allyT=-1;else{this.allyT+=t;const o=this.allyT/Ju,l=o<.5?Nn(o/.5):1-On((o-.5)/.5);n+=this.allyDirX*td*l,r+=this.allyDirZ*td*l,s+=vb*l,this.allyT>=Ju&&(this.allyT=-1)}this.rig.setCinematicPose(e,i,s,n,r)}musouPose(t){let e;if(t<Lr)e=ml*Nn(t/Lr);else if(t<.9){const n=On((t-Lr)/(.9-Lr));e=ml+(qu-ml)*n}else e=qu;const i=hb*Nn(zh(t/.5));let s;if(t<Dr)s=ju*Nn(t/Dr);else if(t<gl){const n=On((t-Dr)/(gl-Dr));s=ju*(1-n)}else s=cb*Math.sin((t-gl)*ub);return{azi:s,elev:i,zoom:e}}}const Qe=12,$a=`
  #define MAX_LIGHTS ${Qe}
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
`,Za="varying vec2 vWorldXZ;";class bb{px=new Float32Array(Qe);py=new Float32Array(Qe);pz=new Float32Array(Qe);cr=new Float32Array(Qe);cg=new Float32Array(Qe);cb=new Float32Array(Qe);rad=new Float32Array(Qe);life=new Float32Array(Qe);maxLife=new Float32Array(Qe);prio=new Uint8Array(Qe);uLightPos={value:new Float32Array(Qe*3)};uLightColor={value:new Float32Array(Qe*3)};uLightRadius={value:new Float32Array(Qe)};uLightCount={value:0};capActive;constructor(t=!1){this.capActive=t?6:Qe}spawn(t,e,i,s,n,r,o,l,h=!1){let c=-1,u=1/0;for(let d=0;d<Qe;d++){if(this.life[d]<=0){c=d;break}!h&&this.prio[d]===1||this.life[d]<u&&(u=this.life[d],c=d)}c<0||(this.px[c]=t,this.py[c]=e,this.pz[c]=i,this.cr[c]=s,this.cg[c]=n,this.cb[c]=r,this.rad[c]=o,this.life[c]=l,this.maxLife[c]=l,this.prio[c]=h?1:0)}update(t){const e=this.uLightPos.value,i=this.uLightColor.value,s=this.uLightRadius.value;let n=0;for(let r=0;r<Qe;r++){if(this.life[r]<=0||(this.life[r]-=t,this.life[r]<=0||n>=this.capActive))continue;const o=this.life[r]/this.maxLife[r],l=o*o,h=n*3;e[h]=this.px[r],e[h+1]=this.py[r],e[h+2]=this.pz[r],i[h]=this.cr[r]*l,i[h+1]=this.cg[r]*l,i[h+2]=this.cb[r]*l,s[n]=this.rad[r],n++}this.uLightCount.value=n}uniforms(){return{uLightPos:this.uLightPos,uLightColor:this.uLightColor,uLightRadius:this.uLightRadius,uLightCount:this.uLightCount}}reset(){this.life.fill(0),this.prio.fill(0),this.uLightCount.value=0}get activeCount(){return this.uLightCount.value}}const kh=420,Nh=42,ed=kh/Nh,Ir=240,_b=34;class yb{plane;tex;fireflies;fireflyMat;time=0;constructor(t,e){t.fog=new hc(329226,.017),this.tex=Mb(),this.tex.wrapS=os,this.tex.wrapT=os,this.tex.repeat.set(Nh,Nh);const i=new Jt(kh,kh,1,1);i.rotateX(-Math.PI/2);const s=new Mi({map:this.tex,toneMapped:!0});s.onBeforeCompile=h=>{Object.assign(h.uniforms,e),h.vertexShader=h.vertexShader.replace("#include <common>",`#include <common>
${Za}`).replace("#include <project_vertex>",`#include <project_vertex>
  vWorldXZ = (modelMatrix * vec4(transformed, 1.0)).xz;`),h.fragmentShader=h.fragmentShader.replace("#include <common>",`#include <common>
${$a}`).replace("#include <tonemapping_fragment>",`  gl_FragColor.rgb += sampleLights() * 1.35;
#include <tonemapping_fragment>`)},this.plane=new we(i,s),this.plane.renderOrder=-1,t.add(this.plane);const n=new Ee,r=new Float32Array(Ir*3),o=new Float32Array(Ir),l=new Float32Array(Ir);for(let h=0;h<Ir;h++){const c=Math.random()*Math.PI*2,u=Math.sqrt(Math.random())*_b;r[h*3]=Math.cos(c)*u,r[h*3+1]=.5+Math.random()*7,r[h*3+2]=Math.sin(c)*u,o[h]=Math.random()*Math.PI*2,l[h]=.5+Math.random()*1.2}n.setAttribute("position",new me(r,3)),n.setAttribute("aPhase",new me(o,1)),n.setAttribute("aSpeed",new me(l,1)),this.fireflyMat=new Ot({uniforms:{uTime:{value:0},uSize:{value:90},uColor:{value:new zt(1.5,.85,.4)}},vertexShader:`
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
      `,transparent:!0,blending:He,depthWrite:!1,depthTest:!0}),this.fireflies=new cc(n,this.fireflyMat),this.fireflies.frustumCulled=!1,t.add(this.fireflies)}update(t,e,i){this.time+=t,this.plane.position.set(e,0,i),this.tex.offset.set(e/ed,-i/ed),this.fireflies.position.set(e,0,i),this.fireflyMat.uniforms.uTime.value=this.time}}function Mb(){const t=document.createElement("canvas");t.width=512,t.height=512;const e=t.getContext("2d");e.fillStyle="#080a11",e.fillRect(0,0,512,512);const i=(n,r,o,l,h)=>{for(let c=-1;c<=1;c++)for(let u=-1;u<=1;u++)e.fillStyle=`rgba(${l},${l+4},${l+12},${h})`,e.beginPath(),e.arc(n+c*512,r+u*512,o,0,Math.PI*2),e.fill()};for(let n=0;n<40;n++)i(Math.random()*512,Math.random()*512,40+Math.random()*90,6+Math.random()*14,.04);for(let n=0;n<240;n++)i(Math.random()*512,Math.random()*512,8+Math.random()*30,8+Math.random()*26,.05);for(let n=0;n<900;n++)i(Math.random()*512,Math.random()*512,1+Math.random()*6,10+Math.random()*30,.05);e.strokeStyle="rgba(20,24,34,0.45)";for(let n=0;n<22;n++){e.lineWidth=.5+Math.random()*1.6;let r=Math.random()*512,o=Math.random()*512;e.beginPath(),e.moveTo(r,o);const l=3+(Math.random()*5|0);for(let h=0;h<l;h++)r+=(Math.random()*2-1)*55,o+=(Math.random()*2-1)*55,e.lineTo(r,o);e.stroke()}const s=new fi(t);return s.anisotropy=4,s.needsUpdate=!0,s}class Ff{s;constructor(t=Math.random()*4294967295>>>0){this.s=t>>>0}next(){this.s=this.s+1831565813|0;let t=Math.imul(this.s^this.s>>>15,1|this.s);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}range(t,e){return t+(e-t)*this.next()}int(t){return this.next()*t|0}}const ce=new Ff;function wb(a,t){const e=[];for(let s=0;s<t;s++)e.push({freq:2+s*3+a.int(3),amp:Math.pow(.62,s)*a.range(.7,1),phase:a.range(0,Math.PI*2)});let i=0;for(const s of e)i+=s.amp;return s=>{let n=0;for(const o of e)n+=o.amp*Math.sin(o.freq*s+o.phase);const r=n/i*.5+.5;return Math.pow(r,1.15)}}function Sb(a,t,e,i,s){const r=[],o=[];for(let u=0;u<=s;u++){const f=u/s*Math.PI*2,m=Math.cos(f)*a,v=Math.sin(f)*a,g=t+i(f)*e;r.push(m,-40,v),r.push(m,g,v)}for(let u=0;u<s;u++){const d=u*2,f=u*2+1,m=(u+1)*2,v=(u+1)*2+1;o.push(d,m,f,f,m,v)}const l=new Ee;l.setAttribute("position",new ve(r,3)),l.setIndex(o),l.computeVertexNormals();const h=new Mi({side:ti,fog:!0}),c=new we(l,h);return c.name="ridge",{mesh:c,mat:h}}function Ab(){const a=document.createElement("canvas");a.width=512,a.height=128;const t=a.getContext("2d"),e=t.createLinearGradient(0,0,0,128);e.addColorStop(0,"rgba(255,255,255,0)"),e.addColorStop(.42,"rgba(255,255,255,0.95)"),e.addColorStop(.62,"rgba(255,255,255,1)"),e.addColorStop(1,"rgba(255,255,255,0.55)"),t.fillStyle=e,t.fillRect(0,0,512,128),t.globalCompositeOperation="destination-out";for(let s=0;s<26;s++){const n=Math.random()*512,r=20+Math.random()*70,o=24+Math.random()*60,l=t.createRadialGradient(n,r,0,n,r,o);l.addColorStop(0,`rgba(0,0,0,${.15+Math.random()*.3})`),l.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=l,t.beginPath(),t.arc(n,r,o,0,Math.PI*2),t.fill()}const i=new fi(a);return i.wrapS=os,i.wrapT=ki,i.repeat.set(4,1),i.colorSpace=Me,i}function id(a,t,e,i){const s=new mn(a,a,e*2,96,1,!0),n=new Mi({map:i,transparent:!0,side:ti,depthWrite:!1,fog:!0,opacity:.85}),r=new we(s,n);return r.position.y=t,r.name="mist",r.renderOrder=2,{mesh:r,mat:n}}class Tb{group;layers=[];mists=[];constructor(t=91117){this.group=new Da,this.group.name="mountains",[{r:168,base:12,span:26,oct:6},{r:232,base:20,span:34,oct:5},{r:305,base:30,span:46,oct:5},{r:388,base:44,span:60,oct:4},{r:470,base:60,span:80,oct:4}].forEach((s,n)=>{const r=new Ff(t+n*1013),o=wb(r,s.oct),l=Sb(s.r,s.base,s.span,o,160);l.mesh.renderOrder=-10+n,this.group.add(l.mesh),this.layers.push(l)});const i=Ab();this.mists=[id(190,26,18,i),id(300,44,24,i.clone())],this.mists.forEach(s=>this.group.add(s.mesh))}setPalette(t,e,i,s){const n=new zt(t),r=new zt(e);this.layers.forEach((l,h)=>{const c=this.layers.length>1?h/(this.layers.length-1):0;l.mat.color.copy(n).lerp(r,c)});const o=new zt(i);this.mists.forEach((l,h)=>{l.mat.color.copy(o),l.mat.opacity=s*(h===0?1:.85)})}}const Eb=new L(18e-5,26e-5,8e-4),Cb=.019,on={uCutFrom:{value:new L(0,40,60)},uCutTo:{value:new L(0,1.2,0)},uCutR:{value:2},uCutOn:{value:0}};function sd(a,t,e,i,s,n,r){on.uCutFrom.value.set(a,t,e),on.uCutTo.value.set(i,s,n),on.uCutOn.value=r?1:0}const nd=new Map;function Rb(a){const t=nd.get(a);if(t)return t;const e=document.createElement("canvas");e.width=64,e.height=64;const i=e.getContext("2d"),s=a==="stone"?["#b7b2aa","#948f89","#716e6d","#4e4d52"]:a==="darkStone"?["#8b8988","#69686b","#4c4c52","#303138"]:a==="roof"?["#a5a9a8","#797f82","#545c62","#303943"]:a==="wood"?["#b7ada4","#8f857f","#655d5c","#403a3d"]:["#d8d1be","#afa68e","#817965","#514b42"];if(i.fillStyle=s[1],i.fillRect(0,0,64,64),a==="stone"||a==="darkStone")for(let r=0;r<64;r+=8){const o=(r/8&1)*6;i.fillStyle=s[3],i.fillRect(0,r,64,1);for(let l=-o;l<64;l+=12){i.fillRect(l,r,1,8);const h=l*7+r*11>>>2&1;i.fillStyle=s[h],i.fillRect(l+2,r+2,7,1),i.fillStyle=s[3]}}else if(a==="roof"){i.fillStyle=s[3];for(let r=0;r<64;r+=8)i.fillRect(0,r,64,1);for(let r=0;r<64;r+=8){const o=(r/8&1)*4;for(let l=-o;l<64;l+=8)i.fillStyle=s[2],i.fillRect(l,r+1,1,7),i.fillStyle=s[0],i.fillRect(l+2,r+2,4,1)}}else if(a==="wood"){for(let r=0;r<64;r+=8)i.fillStyle=s[3],i.fillRect(r,0,1,64),i.fillStyle=s[0],i.fillRect(r+2,0,1,64);for(let r=7;r<64;r+=17)i.fillStyle=s[2],i.fillRect(r*5%56+2,r,4,2)}else for(let r=0;r<64;r+=6)i.fillStyle=r/6&1?s[0]:s[2],i.fillRect(0,r,64,2);const n=new fi(e);return n.colorSpace=Me,n.wrapS=os,n.wrapT=os,n.magFilter=oe,n.minFilter=qa,n.generateMipmaps=!0,nd.set(a,n),n}function Ka(a){return new Ot({uniforms:{uBase:{value:new zt(a.base)},uDark:{value:new zt(a.dark)},uMap:{value:Rb(a.surface)},uTextureScale:{value:a.textureScale},uFogColor:{value:Eb.clone()},uFogDensity:{value:Cb},uCutFrom:on.uCutFrom,uCutTo:on.uCutTo,uCutR:on.uCutR,uCutOn:on.uCutOn},vertexShader:`
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
    `,depthWrite:!0,depthTest:!0})}class Xs{mesh;dummy=new Ze;scratch=new ge;w=0;constructor(t,e,i,s){this.mesh=new Se(e,i,s),this.mesh.instanceMatrix.setUsage(St),this.mesh.count=0,this.mesh.frustumCulled=!1,t.add(this.mesh)}begin(){this.w=0}push(t,e,i,s,n,r,o=0,l=0,h=0){this.w>=this.mesh.instanceMatrix.count||(this.dummy.position.set(t,e,i),this.dummy.rotation.set(h,o,l,"YXZ"),this.dummy.scale.set(s,n,r),this.dummy.updateMatrix(),this.scratch.copy(this.dummy.matrix),this.mesh.setMatrixAt(this.w++,this.scratch))}end(){this.mesh.count=this.w,this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.computeBoundingSphere()}get count(){return this.w}}const Pb=Ka({base:4011318,dark:2038043,surface:"stone",textureScale:.46}),Fb=Ka({base:6511446,dark:2696746,surface:"darkStone",textureScale:.52}),Lb=Ka({base:3489861,dark:1515042,surface:"roof",textureScale:.62}),Db=Ka({base:10165019,dark:4852234,surface:"wood",textureScale:.72}),ad=Ka({base:14792285,dark:7423265,surface:"gold",textureScale:.8});function Ur(){const a=new hs(1,1,1);return a.translate(0,.5,0),a}function Ib(){const a=document.createElement("canvas");a.width=32,a.height=32;const t=a.getContext("2d"),e=t.createRadialGradient(16,16,2,16,16,16);e.addColorStop(0,"rgba(255,255,255,0.78)"),e.addColorStop(.58,"rgba(255,255,255,0.48)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,32,32);const i=new fi(a);return i.magFilter=oe,i.minFilter=oe,i.generateMipmaps=!1,i}class Ub{stone;darkStone;roof;wood;goldTrim;gold;shadows;constructor(t){this.stone=new Xs(t,Ur(),Pb,4e3),this.darkStone=new Xs(t,Ur(),Fb,3e3),this.roof=new Xs(t,new hs(1,1,1),Lb,2e3),this.wood=new Xs(t,Ur(),Db,3e3),this.goldTrim=new Xs(t,Ur(),ad,1200),this.gold=new Xs(t,new Eo(1,6,4),ad,1200);const e=new Jt(1,1);e.rotateX(-Math.PI*.5);const i=new Mi({map:Ib(),color:329226,transparent:!0,opacity:.62,depthWrite:!1,depthTest:!0,toneMapped:!1});this.shadows=new Xs(t,e,i,600),this.shadows.mesh.renderOrder=0}begin(){this.stone.begin(),this.darkStone.begin(),this.roof.begin(),this.wood.begin(),this.goldTrim.begin(),this.gold.begin(),this.shadows.begin()}addHouse(t,e,i,s,n,r=0){this.shadows.push(t,.035,e,i+1.8,1,s+1.8),this.darkStone.push(t,0,e,i+.4,.45,s+.4,r),this.stone.push(t,.32,e,i,.35,s,r);const o=n-.8;this.wood.push(t,.65,e,i-.2,o,s-.2,r);const l=Math.cos(r),h=Math.sin(r);for(const f of[-.46,.46])for(const m of[-.46,.46]){const v=t+(f*i*l-m*s*h),g=e+(f*i*h+m*s*l);this.darkStone.push(v,.65,g,.38,o+.1,.38,r)}const c=.65+o,u=i+1.4,d=s+1.4;this.roof.push(t,c+.35,e,u,.55,d,r),this.wood.push(t,c,e,u-.3,.18,d-.3,r),this.goldTrim.push(t,c+.75,e,i*.7,.18,.2,r),this.gold.push(t-i*.35*l,c+.85,e-i*.35*h,.22,.3,.22),this.gold.push(t+i*.35*l,c+.85,e+i*.35*h,.22,.3,.22)}addPavilion(t,e,i,s,n=2,r=0){let o=0,l=i,h=s;this.shadows.push(t,.038,e,i+2.5,1,s+2.5);for(let c=0;c<n;c++){const u=2.4-c*.25;this.darkStone.push(t,o,e,l+.5,.4,h+.5,r),this.stone.push(t,o+.3,e,l,.3,h,r),this.wood.push(t,o+.6,e,l-.3,u,h-.3,r);const d=Math.cos(r),f=Math.sin(r);for(const p of[-.45,.45])for(const w of[-.45,.45]){const A=t+(p*l*d-w*h*f),y=e+(p*l*f+w*h*d);this.darkStone.push(A,o+.6,y,.42,u+.12,.42,r)}const m=o+.6+u,v=l+1.6-c*.2,g=h+1.6-c*.2;this.roof.push(t,m+.32,e,v,.5,g,r),this.wood.push(t,m,e,v-.3,.16,g-.3,r),this.goldTrim.push(t,m+.65,e,l*.75,.14,.18,r),o=m+.7,l*=.72,h*=.72}this.gold.push(t,o+.4,e,.35,.8,.35)}addWall(t){const e=t.hx*2,i=t.hz*2,s=t.horizontal?e:i,n=2.25,r=1.35,o=t.horizontal?s:r,l=t.horizontal?r:s;this.shadows.push(t.x,.035,t.z,o+2.1,1,l+2.1),this.darkStone.push(t.x,0,t.z,o+(t.horizontal?.18:.42),.42,l+(t.horizontal?.42:.18)),this.stone.push(t.x,.32,t.z,o,n-.32,l),this.darkStone.push(t.x,n-.08,t.z,t.horizontal?s+.2:1.72,.22,t.horizontal?1.72:s+.2);const h=Math.max(2,Math.floor(s/1.85)),c=s/h;for(let d=0;d<h;d++){if((d&1)!==0)continue;const f=-s*.5+c*(d+.5);for(const m of[-1,1]){const v=t.x+(t.horizontal?f:m*.54),g=t.z+(t.horizontal?m*.54:f);this.stone.push(v,n+.12,g,t.horizontal?c*.82:.44,.62,t.horizontal?.44:c*.82)}}const u=Math.max(2,Math.ceil(s/5.5));for(let d=0;d<=u;d++){const f=-s*.5+s*d/u,m=t.x+(t.horizontal?f:0),v=t.z+(t.horizontal?0:f);this.darkStone.push(m,0,v,t.horizontal?.42:1.72,1.5,t.horizontal?1.72:.42),this.stone.push(m,1.48,v,t.horizontal?.56:1.62,.28,t.horizontal?1.62:.56)}}addGate(t,e,i){const s=t.horizontal,n=m=>({x:t.x+(s?m:0),z:t.z+(s?0:m)}),r=(m,v,g,p,w,A,y=0)=>{const T=n(v);m.push(T.x,g,T.z,s?p:A,w,s?A:p,y)},o=(m,v,g,p)=>{const w=n(m),A=.18,y=p*.56;s?(this.roof.push(w.x,v+.18,w.z+p*.24,g,.13,y,0,0,A),this.roof.push(w.x,v+.18,w.z-p*.24,g,.13,y,0,0,-A),this.wood.push(w.x,v+.02,w.z+p*.55,g+.28,.14,.12),this.wood.push(w.x,v+.02,w.z-p*.55,g+.28,.14,.12),this.goldTrim.push(w.x,v+.39,w.z,g*.78,.09,.11)):(this.roof.push(w.x+p*.24,v+.18,w.z,y,.13,g,0,-A),this.roof.push(w.x-p*.24,v+.18,w.z,y,.13,g,0,A),this.wood.push(w.x+p*.55,v+.02,w.z,.12,.14,g+.28),this.wood.push(w.x-p*.55,v+.02,w.z,.12,.14,g+.28),this.goldTrim.push(w.x,v+.39,w.z,.11,.09,g*.78))};if(!i){for(const m of[-1,1]){r(this.darkStone,m*3.85,0,.84,.34,1.38),r(this.stone,m*3.85,.28,.66,2.25,1.16),r(this.darkStone,m*3.85,2.48,.92,.18,1.42);const v=n(m*3.85);this.gold.push(v.x,2.86,v.z,.12,.22,.12)}return}this.shadows.push(t.x,.038,t.z,s?12.2:6.2,1,s?6.2:12.2);const l=4.2,h=2.65,c=3.15,u=3.55,d=5;for(const m of[-1,1]){r(this.darkStone,m*l,0,h+.35,.45,c+.4),r(this.stone,m*l,.36,h,u-.36,c),r(this.darkStone,m*l,u-.12,h+.45,.22,c+.45);const v=n(m*l);o(m*l,u+.1,2.78,2.7),this.gold.push(v.x,u+.58,v.z,.12,.18,.12);for(const g of[-.62,.62]){const p=m*l+g*(h*.5);r(this.wood,p,u-.85,.13,.78,c+.18)}}r(this.stone,0,2.36,d+.72,1.02,c+.12),r(this.darkStone,0,3.34,d+1.15,.2,c+.42);const f=c*.5+.1;if(s?(this.wood.push(t.x,2.72,t.z+f,d+.32,.46,.16),this.goldTrim.push(t.x,2.82,t.z+f+.09,1.58,.25,.08)):(this.wood.push(t.x+f,2.72,t.z,.16,.46,d+.32),this.goldTrim.push(t.x+f+.09,2.82,t.z,.08,.25,1.58)),o(0,3.46,5.58,3),e)for(let m=0;m<12;m++){const v=m<6?-1:1,g=m%6/5,p=v*(d*(.26+g*.21)),w=n(p),A=(m*17%7-3)*.16,y=w.x+(s?0:A),T=w.z+(s?A:0);this.stone.push(y,0,T,.45+m%3*.14,.24+m%2*.15,.4+(m+1)%3*.12,m*.37)}else{const v=c*.5-.12;s?this.wood.push(t.x,0,t.z+v,d,2.62,.34):this.wood.push(t.x+v,0,t.z,.34,2.62,d);for(let g=-2;g<=2;g++){const p=n(d/5*g);s?this.darkStone.push(p.x,.12,p.z+v+.03,.09,2.34,.34+.08):this.darkStone.push(p.x+v+.03,.12,p.z,.34+.08,2.34,.09)}s?(this.goldTrim.push(t.x,.72,t.z+v+.08,d+.1,.12,.34+.14),this.goldTrim.push(t.x,1.76,t.z+v+.08,d+.1,.12,.34+.14)):(this.goldTrim.push(t.x+v+.08,.72,t.z,.34+.14,.12,d+.1),this.goldTrim.push(t.x+v+.08,1.76,t.z,.34+.14,.12,d+.1));for(const g of[-1,1]){const p=n(g*.58),w=s?{x:0,z:.23}:{x:.23,z:0};this.gold.push(p.x+w.x,1.27,p.z+w.z,.14,.14,.14)}}}end(){this.stone.end(),this.darkStone.end(),this.roof.end(),this.wood.end(),this.goldTrim.end(),this.gold.end(),this.shadows.end()}get count(){return this.stone.count+this.darkStone.count+this.roof.count+this.wood.count+this.goldTrim.count+this.gold.count+this.shadows.count}}const vc=2.4,Lf=-ca,zb=48/64,kb=new L(18e-5,26e-5,8e-4),Nb=.019,Df=1.15;function If(){const a=new Jt(zb,1,1,1);return a.translate(0,.5,0),a.rotateX(Lf),a}const Uf="varying float vFogDepth;",zf=`
  varying float vFogDepth;
  uniform vec3 uFogColor;
  uniform float uFogDensity;
`,Ob=`
  attribute vec2 aUvOffset;
  attribute float aFlash;
  attribute vec3 aTint;
  attribute vec2 aSquash; // #45 19.4 피격 스쿼시(x=폭·y=높이 곱, 기본 1,1) — 빌보드 변환 전 로컬 적용
  uniform vec2 uCellUv;
  varying vec2 vUv;
  varying vec2 vCellLo;
  varying float vFlash;
  varying vec3 vTint;
  ${Za}
  ${Uf}
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
`,kf=`
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
`,Bb=`
  uniform vec2 uCellUv;
  uniform vec2 uUvOffset;
  uniform float uFootDepth;
  varying vec2 vUv;
  ${Za}
  ${Uf}
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
`,Hb=`
  uniform sampler2D uMap;
  varying vec2 vUv;
  varying vec2 vCellLo;
  varying float vFlash;
  varying vec3 vTint;
  ${kf}
  ${$a}
  ${zf}
  void main() {
    vec4 tex = texture2D(uMap, vUv);
    if (tex.a < 0.5) discard;
    vec3 col = pow(tex.rgb, vec3(2.2)) * vTint * ${Df.toFixed(3)};
    // 디매팅 프린지 → 어두운 아웃라인으로 눌러 밝은 테두리 제거
    col *= mix(1.0, 0.32, edgeFactor(vUv, vCellLo));
    col += sampleLights() * 0.75; // 폭발/낙뢰가 적을 실제로 비춤
    col = mix(col, vec3(2.0), vFlash); // 피격 화이트 플래시(HDR로 블룸)
    float fog = 1.0 - exp(-uFogDensity * uFogDensity * vFogDepth * vFogDepth);
    col = mix(col, uFogColor, clamp(fog, 0.0, 1.0));
    gl_FragColor = vec4(col, 1.0);
  }
`,Gb=`
  uniform sampler2D uMap;
  uniform vec2 uUvOffset;
  uniform float uFlash;
  uniform vec3 uTint;
  uniform float uPlayer; // 1이면 플레이어(금색 림) / 0이면 다크 아웃라인
  uniform float uAlly; // 1이면 원군(청록 림 — 적과 확실히 구분)
  uniform float uRim; // 림 강도(모바일 저해상도 블룸 대응으로 낮춤)
  varying vec2 vUv;
  ${kf}
  ${$a}
  ${zf}
  void main() {
    vec4 tex = texture2D(uMap, vUv);
    if (tex.a < 0.5) discard;
    float lift = ${Df.toFixed(3)} * mix(1.0, 1.18, max(uPlayer, uAlly));
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
`;function Nf(){return{uFogColor:{value:kb.clone()},uFogDensity:{value:Nb}}}class zr{mesh;matArr;uvArr;flashArr;tintArr;uvAttr;flashAttr;tintAttr;squashArr;squashAttr;w=0;constructor(t,e,i){const s=If();this.uvArr=new Float32Array(e*2),this.flashArr=new Float32Array(e),this.tintArr=new Float32Array(e*3),this.uvAttr=new Wt(this.uvArr,2),this.flashAttr=new Wt(this.flashArr,1),this.tintAttr=new Wt(this.tintArr,3),this.uvAttr.setUsage(St),this.flashAttr.setUsage(St),this.tintAttr.setUsage(St),this.squashArr=new Float32Array(e*2),this.squashAttr=new Wt(this.squashArr,2),this.squashAttr.setUsage(St),s.setAttribute("aUvOffset",this.uvAttr),s.setAttribute("aFlash",this.flashAttr),s.setAttribute("aTint",this.tintAttr),s.setAttribute("aSquash",this.squashAttr);const n=new Ot({uniforms:{uMap:{value:t.texture},uCellUv:{value:new vt(t.cellUvW,t.cellUvH)},uTexel:{value:new vt(1/t.texW,1/t.texH)},...i,...Nf()},vertexShader:Ob,fragmentShader:Hb,transparent:!1,depthWrite:!0,depthTest:!0});this.mesh=new Se(s,n,e),this.mesh.instanceMatrix.setUsage(St),this.mesh.frustumCulled=!1,this.mesh.count=0,this.mesh.renderOrder=2,this.matArr=this.mesh.instanceMatrix.array}begin(){this.w=0}push(t,e,i,s,n,r,o,l,h){const c=this.w,u=c*16;this.matArr[u]=i,this.matArr[u+5]=i,this.matArr[u+10]=i,this.matArr[u+12]=t,this.matArr[u+13]=0,this.matArr[u+14]=e,this.matArr[u+15]=1;const d=c*2;this.uvArr[d]=s,this.uvArr[d+1]=n,this.flashArr[c]=r;const f=c*3;this.tintArr[f]=o,this.tintArr[f+1]=l,this.tintArr[f+2]=h,this.squashArr[c*2]=1,this.squashArr[c*2+1]=1,this.w++}setSquash(t,e){const i=this.w-1;i<0||(this.squashArr[i*2]=t,this.squashArr[i*2+1]=e)}end(){this.mesh.count=this.w,this.mesh.instanceMatrix.needsUpdate=!0,this.uvAttr.needsUpdate=!0,this.flashAttr.needsUpdate=!0,this.tintAttr.needsUpdate=!0,this.squashAttr.needsUpdate=!0}}class Of{mesh;mat;worldH;constructor(t,e,i=vc){this.worldH=i,this.mat=new Ot({uniforms:{uMap:{value:t.texture},uCellUv:{value:new vt(t.cellUvW,t.cellUvH)},uTexel:{value:new vt(1/t.texW,1/t.texH)},uUvOffset:{value:new vt(0,0)},uFootDepth:{value:0},uFlash:{value:0},uTint:{value:new zt(1,1,1)},uPlayer:{value:0},uAlly:{value:0},uRim:{value:1},...e,...Nf()},vertexShader:Bb,fragmentShader:Gb,transparent:!1,depthWrite:!0,depthTest:!0}),this.mesh=new we(If(),this.mat),this.mesh.frustumCulled=!1,this.mesh.scale.setScalar(i),this.mesh.renderOrder=2}setSheet(t){this.mat.uniforms.uMap.value=t.texture,this.mat.uniforms.uCellUv.value.set(t.cellUvW,t.cellUvH),this.mat.uniforms.uTexel.value.set(1/t.texW,1/t.texH)}setPlayer(t){this.mat.uniforms.uPlayer.value=t?1:0}setFootDepth(t){this.mat.uniforms.uFootDepth.value=t?1:0}setAlly(t){this.mat.uniforms.uAlly.value=t?1:0}setRimScale(t){this.mat.uniforms.uRim.value=t}setSquash(t,e){this.mesh.scale.set(this.worldH*t,this.worldH*e,this.worldH*t)}setUv(t,e){this.mat.uniforms.uUvOffset.value.set(t,e)}setFlash(t){this.mat.uniforms.uFlash.value=t}setTint(t,e,i){this.mat.uniforms.uTint.value.setRGB(t,e,i)}setPosition(t,e,i){this.mesh.position.set(t,e,i)}setScale(t){this.mesh.scale.setScalar(t)}}class xc{mesh;matArr;w=0;constructor(t){const e=new Ao(1,20);e.rotateX(-Math.PI/2);const i=Vb(),s=new Mi({map:i,color:0,transparent:!0,opacity:.5,depthWrite:!1,depthTest:!0,side:ti,toneMapped:!1});this.mesh=new Se(e,s,t),this.mesh.instanceMatrix.setUsage(St),this.mesh.frustumCulled=!1,this.mesh.count=0,this.mesh.renderOrder=0,this.matArr=this.mesh.instanceMatrix.array}begin(){this.w=0}push(t,e,i){const s=this.w*16;this.matArr[s]=i,this.matArr[s+5]=1,this.matArr[s+10]=i,this.matArr[s+12]=t,this.matArr[s+13]=.02,this.matArr[s+14]=e,this.matArr[s+15]=1,this.w++}end(){this.mesh.count=this.w,this.mesh.instanceMatrix.needsUpdate=!0}}function Vb(){const t=document.createElement("canvas");t.width=64,t.height=64;const e=t.getContext("2d"),i=e.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.6,"rgba(255,255,255,0.7)"),i.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=i,e.fillRect(0,0,64,64);const s=new fi(t);return s.needsUpdate=!0,s}function Yn(a,t,e){return a===0&&t===0?e:Math.abs(a)>Math.abs(t)?a>0?2:1:t>0?0:3}const Bn={palisade:3,warDrum:6,powderCart:8,dumplingCart:9,shrine:10,gong:12},Wb=4,Xb=4,qb=new L(18e-5,26e-5,8e-4),jb=.019;let xl=null;function $b(){if(xl)return xl;const a=new ja().load("/threesur/assets/world/world-kit-atlas-retro.png");return a.colorSpace=Me,a.magFilter=oe,a.minFilter=qa,a.generateMipmaps=!0,a.wrapS=ki,a.wrapT=ki,xl=a,a}class Bf{mesh;matrices;uvOffsets;tints;uvAttr;tintAttr;cols;rows;w=0;constructor(t,e,i=!0,s=$b(),n=Wb,r=Xb){this.cols=n,this.rows=r;const o=new Jt(1,1,1,1);o.translate(0,.5,0),o.rotateX(-ca),this.uvOffsets=new Float32Array(e*2),this.tints=new Float32Array(e*3),this.uvAttr=new Wt(this.uvOffsets,2),this.tintAttr=new Wt(this.tints,3),i&&(this.uvAttr.setUsage(St),this.tintAttr.setUsage(St)),o.setAttribute("aUvOffset",this.uvAttr),o.setAttribute("aTint",this.tintAttr);const l=new Ot({uniforms:{uMap:{value:s},uCellUv:{value:new vt(1/n,1/r)},uFogColor:{value:qb.clone()},uFogDensity:{value:jb}},vertexShader:`
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
      `,transparent:!1,depthWrite:!0,depthTest:!0});this.mesh=new Se(o,l,e),i&&this.mesh.instanceMatrix.setUsage(St),this.mesh.count=0,this.mesh.renderOrder=1,this.mesh.frustumCulled=!1,this.matrices=this.mesh.instanceMatrix.array,t.add(this.mesh)}begin(){this.w=0}push(t,e,i,s,n,r=1){const o=this.w++,l=o*16;this.matrices[l]=s,this.matrices[l+5]=n,this.matrices[l+10]=n,this.matrices[l+12]=e,this.matrices[l+13]=0,this.matrices[l+14]=i,this.matrices[l+15]=1;const h=o*2,c=t%this.cols,u=Math.floor(t/this.cols);this.uvOffsets[h]=c/this.cols,this.uvOffsets[h+1]=1-(u+1)/this.rows;const d=o*3;this.tints[d]=r,this.tints[d+1]=r,this.tints[d+2]=r}end(){this.mesh.count=this.w,this.mesh.instanceMatrix.needsUpdate=!0,this.uvAttr.needsUpdate=!0,this.tintAttr.needsUpdate=!0}get count(){return this.w}}class Zb{mesh;matrices;w=0;constructor(t,e){const i=new Jt(1,1);i.rotateX(-Math.PI/2);const s=Kb(),n=new Mi({map:s,transparent:!0,opacity:.54,depthWrite:!1});this.mesh=new Se(i,n,e),this.mesh.count=0,this.mesh.renderOrder=0,this.mesh.frustumCulled=!1,this.matrices=this.mesh.instanceMatrix.array,t.add(this.mesh)}begin(){this.w=0}push(t,e,i,s){const n=this.w++*16;this.matrices[n]=i,this.matrices[n+5]=1,this.matrices[n+10]=s,this.matrices[n+12]=t,this.matrices[n+13]=.025,this.matrices[n+14]=e,this.matrices[n+15]=1}end(){this.mesh.count=this.w,this.mesh.instanceMatrix.needsUpdate=!0}get count(){return this.w}}function Kb(){const t=document.createElement("canvas");t.width=64,t.height=64;const e=t.getContext("2d");e.clearRect(0,0,64,64),e.fillStyle="rgba(72,55,39,0.74)",e.fillRect(2,2,60,60);for(let s=4;s<60;s+=6)for(let n=3+s/6%2*4;n<61;n+=9){const r=66+(n*13+s*7)%22;e.fillStyle=`rgba(${r},${r-10},${r-21},0.48)`,e.fillRect(n,s,6,3)}const i=new fi(t);return i.colorSpace=Me,i.magFilter=oe,i.minFilter=qa,i.wrapS=os,i.wrapT=os,i.generateMipmaps=!0,i}class Yb{mesh;constructor(t){const e=new Jt(1,1);e.translate(0,.5,0),e.rotateX(-ca);const i=new ja().load("/threesur/assets/world/hulao-fortress.png");i.colorSpace=Me,i.magFilter=oe,i.minFilter=qa,i.generateMipmaps=!0,i.repeat.set(1,.62),i.offset.set(0,.38);const s=new Mi({map:i,alphaTest:.08,transparent:!0,opacity:.72,depthWrite:!1,depthTest:!0,toneMapped:!1,side:ti});this.mesh=new we(e,s),this.mesh.visible=!1,this.mesh.frustumCulled=!1,this.mesh.renderOrder=-1,t.add(this.mesh)}place(t,e){this.mesh.visible=!0,this.mesh.position.set(t,4.1,e-5.6),this.mesh.scale.set(14,6.4,6.4)}}class Qb{map;sprites;roads;fortress;landmark;propShadows;revision=-1;constructor(t,e){this.map=e,this.sprites=new Bf(t,320,!1),this.roads=new Zb(t,160),this.fortress=new Ub(t),this.landmark=new Yb(t),this.propShadows=new xc(64),t.add(this.propShadows.mesh)}update(){if(this.revision!==this.map.revision){this.revision=this.map.revision,this.sprites.begin(),this.fortress.begin(),this.roads.begin(),this.propShadows.begin(),this.landmark.mesh.visible=!1;for(const t of this.map.roads)this.roads.push(t.x,t.z,t.width,t.depth);for(const t of this.map.walls)this.fortress.addWall(t);for(const t of this.map.houses)t.pavilion?this.fortress.addPavilion(t.x,t.z,t.w,t.d,t.tiers??2,t.ry??0):this.fortress.addHouse(t.x,t.z,t.w,t.d,t.h,t.ry??0);for(const t of this.map.gates){const e=this.map.isGateBreached(t.key);t.key==="origin-north"&&this.landmark.place(t.x,t.z);const i=t.key==="origin-north"||t.key.startsWith("castle-");this.fortress.addGate(t,e,i)}for(const t of this.map.props)this.sprites.push(t.kind,t.x,t.z,t.width,t.height,.96),this.propShadows.push(t.x,t.z,Math.max(.8,t.width*.38));this.roads.end(),this.fortress.end(),this.sprites.end(),this.propShadows.end()}}get visibleProps(){return this.sprites.count+this.fortress.count+this.roads.count}get landmarkVisible(){return this.landmark.mesh.visible}}const Ve=72;class Jb{x=new Float32Array(Ve);y=new Float32Array(Ve);z=new Float32Array(Ve);vx=new Float32Array(Ve);vy=new Float32Array(Ve);vz=new Float32Array(Ve);life=new Float32Array(Ve);ttl=new Float32Array(Ve);sx=new Float32Array(Ve);sy=new Float32Array(Ve);sz=new Float32Array(Ve);cr=new Float32Array(Ve);cg=new Float32Array(Ve);cb=new Float32Array(Ve);cursor=0;mesh;matrices;colors;fades;colorAttr;fadeAttr;constructor(t){const e=new hs(1,1,1);this.colors=new Float32Array(Ve*3),this.fades=new Float32Array(Ve),this.colorAttr=new Wt(this.colors,3),this.fadeAttr=new Wt(this.fades,1),this.colorAttr.setUsage(St),this.fadeAttr.setUsage(St),e.setAttribute("aColor",this.colorAttr),e.setAttribute("aFade",this.fadeAttr);const i=new Ot({vertexShader:`
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
      `,transparent:!1,depthWrite:!0,depthTest:!0});this.mesh=new Se(e,i,Ve),this.mesh.instanceMatrix.setUsage(St),this.mesh.count=0,this.mesh.frustumCulled=!1,this.mesh.renderOrder=3,this.matrices=this.mesh.instanceMatrix.array,t.add(this.mesh)}reset(){this.life.fill(0),this.mesh.count=0}burst(t,e){const i="ontouchstart"in window?28:48;for(let s=0;s<i;s++){const n=this.cursor++%Ve,r=Math.random()*Math.PI*2,o=2.4+Math.random()*5.2;if(this.x[n]=t+(Math.random()-.5)*3.4,this.y[n]=.8+Math.random()*3.8,this.z[n]=e+(Math.random()-.5)*1.2,this.vx[n]=Math.cos(r)*o,this.vz[n]=Math.sin(r)*o,this.vy[n]=3.8+Math.random()*6.5,this.ttl[n]=.75+Math.random()*.75,this.life[n]=this.ttl[n],this.sx[n]=.16+Math.random()*.42,this.sy[n]=.12+Math.random()*.5,this.sz[n]=.14+Math.random()*.4,s%4===0)this.cr[n]=1.08,this.cg[n]=.3,this.cb[n]=.13;else{const l=.34+Math.random()*.28;this.cr[n]=l*1.1,this.cg[n]=l*.78,this.cb[n]=l*.58}}}update(t){let e=0;for(let i=0;i<Ve;i++){if(this.life[i]<=0||(this.life[i]-=t,this.life[i]<=0))continue;this.vy[i]-=12*t,this.x[i]+=this.vx[i]*t,this.y[i]+=this.vy[i]*t,this.z[i]+=this.vz[i]*t,this.vx[i]*=Math.max(0,1-t*1.5),this.vz[i]*=Math.max(0,1-t*1.5),this.y[i]<.12&&(this.y[i]=.12,this.vy[i]*=-.28);const s=e*16;this.matrices[s]=this.sx[i],this.matrices[s+5]=this.sy[i],this.matrices[s+10]=this.sz[i],this.matrices[s+12]=this.x[i],this.matrices[s+13]=this.y[i],this.matrices[s+14]=this.z[i],this.matrices[s+15]=1;const n=e*3;this.colors[n]=this.cr[i],this.colors[n+1]=this.cg[i],this.colors[n+2]=this.cb[i],this.fades[e]=this.life[i]/this.ttl[i],e++}this.mesh.count=e,this.mesh.instanceMatrix.needsUpdate=!0,this.colorAttr.needsUpdate=!0,this.fadeAttr.needsUpdate=!0}get activeCount(){return this.mesh.count}}function Ni(a,t=!1){const e=a[0].index!==null,i=new Set(Object.keys(a[0].attributes)),s=new Set(Object.keys(a[0].morphAttributes)),n={},r={},o=a[0].morphTargetsRelative,l=new Ee;let h=0;for(let c=0;c<a.length;++c){const u=a[c];let d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;n[f]===void 0&&(n[f]=[]),n[f].push(u.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;l.addGroup(h,f,c),h+=f}}if(e){let c=0;const u=[];for(let d=0;d<a.length;++d){const f=a[d].index;for(let m=0;m<f.count;++m)u.push(f.getX(m)+c);c+=a[d].attributes.position.count}l.setIndex(u)}for(const c in n){const u=rd(n[c]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;l.setAttribute(c,u)}for(const c in r){const u=r[c][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[c]=[];for(let d=0;d<u;++d){const f=[];for(let v=0;v<r[c].length;++v)f.push(r[c][v][d]);const m=rd(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;l.morphAttributes[c].push(m)}}}return l}function rd(a){let t,e,i,s=-1,n=0;for(let h=0;h<a.length;++h){const c=a[h];if(t===void 0&&(t=c.array.constructor),t!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=c.itemSize),e!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=c.normalized),i!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=c.gpuType),s!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;n+=c.count*e}const r=new t(n),o=new me(r,e,i);let l=0;for(let h=0;h<a.length;++h){const c=a[h];if(c.isInterleavedBufferAttribute){const u=l/e;for(let d=0,f=c.count;d<f;d++)for(let m=0;m<e;m++){const v=c.getComponent(d,m);o.setComponent(d+u,m,v)}}else r.set(c.array,l);l+=c.count*e}return s!==void 0&&(o.gpuType=s),o}const t_=0,e_=1,i_=["attack-spear","attack-guandao","attack-zhangba","attack-halberd"];function s_(a){const t=new ja().load(`/threesur/assets/projectiles/${a}.png`);return t.colorSpace=Me,t.magFilter=oe,t.minFilter=oe,t.generateMipmaps=!1,t}class n_{pools=[[],[],[],[]];cursors=new Uint8Array(4);constructor(t){const e=new Jt(1,1);e.rotateX(-Math.PI*.5);const i=e.clone();i.translate(.5,0,0);for(let s=0;s<4;s++){const n=s_(i_[s]),r=s===t_?i:e;for(let o=0;o<8;o++){const l=new Mi({map:n,transparent:!0,opacity:0,blending:as,depthWrite:!1,depthTest:!0,toneMapped:!1}),h=new we(r,l);h.visible=!1,h.frustumCulled=!1,h.renderOrder=5,t.add(h),this.pools[s].push({mesh:h,material:l,age:0,duration:.2,scaleX:1,scaleZ:1,active:!1})}}}spawn(t,e,i,s,n,r,o,l){const h=this.pools[t],c=this.cursors[t];this.cursors[t]=(c+1)%h.length;const u=h[c];u.age=0,u.duration=l,u.scaleX=r,u.scaleZ=o,u.active=!0,u.mesh.visible=!0,u.mesh.position.set(e,.72,i),u.mesh.rotation.y=Math.atan2(-n,s),u.mesh.scale.set(r*.88,1,o*.88),u.material.opacity=1}update(t){for(const e of this.pools)for(const i of e){if(!i.active)continue;i.age+=t;const s=i.age/i.duration;if(s>=1){i.active=!1,i.mesh.visible=!1;continue}const r=.88+(1-(1-s)*(1-s))*.16;i.mesh.scale.set(i.scaleX*r,1,i.scaleZ*r),i.material.opacity=Math.min(1,(1-s)*1.7)}}}const ke=12,Oh=0,od=1,bl=2;class a_{x=new Float32Array(ke);z=new Float32Array(ke);ang=new Float32Array(ke);sx=new Float32Array(ke);sz=new Float32Array(ke);shape=new Float32Array(ke);param=new Float32Array(ke);life=new Float32Array(ke);maxLife=new Float32Array(ke);cr=new Float32Array(ke);cg=new Float32Array(ke);cb=new Float32Array(ke);alive=new Uint8Array(ke);cursor=0;mesh;matArr;aShape;aProg;aParam;aCol;aAlpha;shapeAttr;progAttr;paramAttr;colAttr;alphaAttr;constructor(t){const e=new Jt(1,1);e.rotateX(-Math.PI/2),this.aShape=new Float32Array(ke),this.aProg=new Float32Array(ke),this.aParam=new Float32Array(ke),this.aCol=new Float32Array(ke*3),this.aAlpha=new Float32Array(ke),this.shapeAttr=new Wt(this.aShape,1),this.progAttr=new Wt(this.aProg,1),this.paramAttr=new Wt(this.aParam,1),this.colAttr=new Wt(this.aCol,3),this.alphaAttr=new Wt(this.aAlpha,1);for(const s of[this.shapeAttr,this.progAttr,this.paramAttr,this.colAttr,this.alphaAttr])s.setUsage(St);e.setAttribute("aShape",this.shapeAttr),e.setAttribute("aProg",this.progAttr),e.setAttribute("aParam",this.paramAttr),e.setAttribute("aCol",this.colAttr),e.setAttribute("aAlpha",this.alphaAttr);const i=new Ot({vertexShader:`
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
      `,transparent:!0,blending:as,depthWrite:!1,depthTest:!0});this.mesh=new Se(e,i,ke),this.mesh.instanceMatrix.setUsage(St),this.mesh.frustumCulled=!1,this.mesh.count=0,this.mesh.renderOrder=2,this.matArr=this.mesh.instanceMatrix.array,t.add(this.mesh)}reset(){this.alive.fill(0),this.mesh.count=0}spawn(t,e,i,s,n,r,o,l,h,c,u){const d=this.cursor;this.cursor=(this.cursor+1)%ke,this.x[d]=e,this.z[d]=i,this.ang[d]=s,this.sx[d]=n,this.sz[d]=r,this.shape[d]=t,this.param[d]=o,this.life[d]=l,this.maxLife[d]=l,this.cr[d]=h,this.cg[d]=c,this.cb[d]=u,this.alive[d]=1}update(t){let e=0;for(let i=0;i<ke;i++){if(this.alive[i]===0)continue;if(this.life[i]-=t,this.life[i]<=0){this.alive[i]=0;continue}const s=Math.cos(this.ang[i]),n=Math.sin(this.ang[i]),r=this.sx[i],o=this.sz[i],l=e*16;this.matArr[l]=s*r,this.matArr[l+1]=0,this.matArr[l+2]=-n*r,this.matArr[l+3]=0,this.matArr[l+4]=0,this.matArr[l+5]=1,this.matArr[l+6]=0,this.matArr[l+7]=0,this.matArr[l+8]=n*o,this.matArr[l+9]=0,this.matArr[l+10]=s*o,this.matArr[l+11]=0,this.matArr[l+12]=this.x[i],this.matArr[l+13]=.05,this.matArr[l+14]=this.z[i],this.matArr[l+15]=1,this.aShape[e]=this.shape[i],this.aProg[e]=1-this.life[i]/this.maxLife[i],this.aParam[e]=this.param[i],this.aCol[e*3]=this.cr[i],this.aCol[e*3+1]=this.cg[i],this.aCol[e*3+2]=this.cb[i],this.aAlpha[e]=Math.min(1,(this.maxLife[i]-this.life[i])/.12),e++}this.mesh.count=e,this.mesh.instanceMatrix.needsUpdate=!0,this.shapeAttr.needsUpdate=!0,this.progAttr.needsUpdate=!0,this.paramAttr.needsUpdate=!0,this.colAttr.needsUpdate=!0,this.alphaAttr.needsUpdate=!0}}const ai=6,r_=12;class o_{x=new Float32Array(ai);y=new Float32Array(ai);z=new Float32Array(ai);vx=new Float32Array(ai);vy=new Float32Array(ai);vz=new Float32Array(ai);rot=new Float32Array(ai);spin=new Float32Array(ai);life=new Float32Array(ai);maxLife=new Float32Array(ai);alive=new Uint8Array(ai);cursor=0;mesh;matArr;aFade;fadeAttr;constructor(t){const e=new Jt(1,1);this.aFade=new Float32Array(ai),this.fadeAttr=new Wt(this.aFade,1),this.fadeAttr.setUsage(St),e.setAttribute("aFade",this.fadeAttr);const i=new Ot({vertexShader:`
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
      `,transparent:!0,blending:He,depthWrite:!1,depthTest:!1});this.mesh=new Se(e,i,ai),this.mesh.instanceMatrix.setUsage(St),this.mesh.frustumCulled=!1,this.mesh.count=0,this.mesh.renderOrder=20,this.matArr=this.mesh.instanceMatrix.array,t.add(this.mesh)}reset(){this.alive.fill(0),this.mesh.count=0}activeCount(){let t=0;for(let e=0;e<ai;e++)t+=this.alive[e];return t}spawn(t,e,i,s){if(this.activeCount()>=2)return;const n=this.cursor;this.cursor=(this.cursor+1)%ai,this.x[n]=t,this.y[n]=1,this.z[n]=e,this.vx[n]=i*22+(Math.random()-.5)*2,this.vy[n]=6+Math.random()*2,this.vz[n]=s*22+(Math.random()-.5)*2,this.rot[n]=Math.random()*6.28,this.spin[n]=7+Math.random()*5,this.life[n]=1.1,this.maxLife[n]=1.1,this.alive[n]=1}update(t){let e=0;for(let i=0;i<ai;i++){if(this.alive[i]===0)continue;if(this.life[i]-=t,this.life[i]<=0){this.alive[i]=0;continue}this.vy[i]-=r_*t,this.x[i]+=this.vx[i]*t,this.y[i]+=this.vy[i]*t,this.z[i]+=this.vz[i]*t,this.rot[i]+=this.spin[i]*t;const s=this.life[i]/this.maxLife[i],n=this.maxLife[i]-this.life[i],r=.88+.12*Math.min(1,n/.05),o=.8+.2*Math.min(1,s/.28),l=1.25*r*o,h=Math.cos(this.rot[i])*l,c=Math.sin(this.rot[i])*l,u=e*16;this.matArr[u]=h,this.matArr[u+1]=c,this.matArr[u+2]=0,this.matArr[u+3]=0,this.matArr[u+4]=-c,this.matArr[u+5]=h,this.matArr[u+6]=0,this.matArr[u+7]=0,this.matArr[u+8]=0,this.matArr[u+9]=0,this.matArr[u+10]=l,this.matArr[u+11]=0,this.matArr[u+12]=this.x[i],this.matArr[u+13]=this.y[i],this.matArr[u+14]=this.z[i],this.matArr[u+15]=1;const d=Math.min(1,s/.22),f=1+.3*Math.max(0,1-n/.08);this.aFade[e]=Math.min(1.1,d*f),e++}this.mesh.count=e,this.mesh.instanceMatrix.needsUpdate=!0,this.fadeAttr.needsUpdate=!0}}const Hf=new L(18e-5,26e-5,8e-4),Gf=.019;function l_(){const a=new mn(.055,.055,.78,6);a.rotateZ(-Math.PI/2),a.translate(-.06,0,0);const t=new Os(.15,.32,8);return t.rotateZ(-Math.PI/2),t.translate(.49,0,0),Ni([a,t],!1)}class h_{mesh;matArr;colArr;fadeArr;colAttr;fadeAttr;cap;w=0;constructor(t,e,i){this.cap=e;const s=l_();this.colArr=new Float32Array(e*3),this.fadeArr=new Float32Array(e),this.colAttr=new Wt(this.colArr,3),this.fadeAttr=new Wt(this.fadeArr,1),this.colAttr.setUsage(St),this.fadeAttr.setUsage(St),s.setAttribute("aColor",this.colAttr),s.setAttribute("aFade",this.fadeAttr);const n=new Ot({uniforms:{uFogColor:{value:Hf.clone()},uFogDensity:{value:Gf},...i},vertexShader:`
        attribute vec3 aColor;
        attribute float aFade;
        varying vec3 vColor;
        varying float vFade;
        varying float vShade;
        varying float vFogDepth;
        ${Za}
        void main() {
          vColor = aColor;
          vFade = aFade;
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
        ${$a}
        void main() {
          vec3 col = vColor * vShade;
          col += sampleLights() * 0.9;
          float fog = 1.0 - exp(-uFogDensity * uFogDensity * vFogDepth * vFogDepth);
          col = mix(col, uFogColor, clamp(fog, 0.0, 1.0));
          gl_FragColor = vec4(col, vFade);
        }
      `,transparent:!0,depthWrite:!0,depthTest:!0});this.mesh=new Se(s,n,e),this.mesh.instanceMatrix.setUsage(St),this.mesh.frustumCulled=!1,this.mesh.count=0,this.mesh.renderOrder=4,this.matArr=this.mesh.instanceMatrix.array,t.add(this.mesh)}begin(){this.w=0}push(t,e,i,s,n,r,o,l,h,c){if(this.w>=this.cap)return;const u=this.w++,d=u*16,f=Math.cos(s),m=Math.sin(s);this.matArr[d]=f*n,this.matArr[d+1]=0,this.matArr[d+2]=-m*n,this.matArr[d+3]=0,this.matArr[d+4]=0,this.matArr[d+5]=r,this.matArr[d+6]=0,this.matArr[d+7]=0,this.matArr[d+8]=m*r,this.matArr[d+9]=0,this.matArr[d+10]=f*r,this.matArr[d+11]=0,this.matArr[d+12]=t,this.matArr[d+13]=e,this.matArr[d+14]=i,this.matArr[d+15]=1;const v=u*3;this.colArr[v]=o,this.colArr[v+1]=l,this.colArr[v+2]=h,this.fadeArr[u]=c}end(){this.mesh.count=this.w,this.mesh.instanceMatrix.needsUpdate=!0,this.colAttr.needsUpdate=!0,this.fadeAttr.needsUpdate=!0}}function c_(){const a=new yi(.75,1.05,18,1,-.75,1.5);return a.rotateX(-Math.PI/2),a}function u_(){return new Eo(.3,8,8)}function d_(){return new Ba(.24)}function f_(){const a=new Os(.4,1.8,6);return a.rotateZ(-Math.PI/2),a}class xi{mesh;matArr;colArr;fadeArr;colAttr;fadeAttr;cap;w=0;constructor(t,e,i,s){this.cap=i,this.colArr=new Float32Array(i*3),this.fadeArr=new Float32Array(i),this.colAttr=new Wt(this.colArr,3),this.fadeAttr=new Wt(this.fadeArr,1),this.colAttr.setUsage(St),this.fadeAttr.setUsage(St),e.setAttribute("aColor",this.colAttr),e.setAttribute("aFade",this.fadeAttr);const n=new Ot({uniforms:{uFogColor:{value:Hf.clone()},uFogDensity:{value:Gf},...s},vertexShader:`
        attribute vec3 aColor;
        attribute float aFade;
        varying vec3 vColor;
        varying float vFade;
        varying float vShade;
        varying float vFogDepth;
        ${Za}
        void main() {
          vColor = aColor;
          vFade = aFade;
          vec3 n = normalize(mat3(instanceMatrix) * normal);
          vShade = 0.65 + 0.35 * clamp(dot(n, normalize(vec3(0.4, 0.8, 0.35))), 0.0, 1.0);
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
        ${$a}
        void main() {
          vec3 col = vColor * vShade * 1.5;
          col += sampleLights() * 1.2;
          float fog = 1.0 - exp(-uFogDensity * uFogDensity * vFogDepth * vFogDepth);
          col = mix(col, uFogColor, clamp(fog, 0.0, 1.0));
          gl_FragColor = vec4(col, vFade);
        }
      `,transparent:!0,depthWrite:!1,depthTest:!0,blending:He});this.mesh=new Se(e,n,i),this.mesh.instanceMatrix.setUsage(St),this.mesh.frustumCulled=!1,this.mesh.count=0,this.mesh.renderOrder=5,this.matArr=this.mesh.instanceMatrix.array,t.add(this.mesh)}begin(){this.w=0}push(t,e,i,s,n,r,o,l,h,c,u){if(this.w>=this.cap)return;const d=this.w++,f=d*16,m=Math.cos(s),v=Math.sin(s);this.matArr[f]=m*n,this.matArr[f+1]=0,this.matArr[f+2]=-v*n,this.matArr[f+3]=0,this.matArr[f+4]=0,this.matArr[f+5]=r,this.matArr[f+6]=0,this.matArr[f+7]=0,this.matArr[f+8]=v*o,this.matArr[f+9]=0,this.matArr[f+10]=m*o,this.matArr[f+11]=0,this.matArr[f+12]=t,this.matArr[f+13]=e,this.matArr[f+14]=i,this.matArr[f+15]=1;const g=d*3;this.colArr[g]=l,this.colArr[g+1]=h,this.colArr[g+2]=c,this.fadeArr[d]=u}end(){this.mesh.count=this.w,this.mesh.instanceMatrix.needsUpdate=!0,this.colAttr.needsUpdate=!0,this.fadeAttr.needsUpdate=!0}}function p_(){const a=[];for(let t=0;t<3;t++){const e=new yi(.6+t*.18,.78+t*.18,24,1,-.9+t*.15,1.8-t*.1);e.rotateX(-Math.PI/2),e.translate(0,.15*t,0),a.push(e)}return Ni(a,!1)}function m_(){const a=[];for(let t=-1;t<=1;t++){const e=new Os(.08,1.6,4);e.rotateZ(-Math.PI/2),e.translate(.8,0,t*.35),a.push(e)}return Ni(a,!1)}function g_(){const a=new yi(.5,.65,32);a.rotateX(-Math.PI/2);const t=new yi(.85,.95,32);return t.rotateX(-Math.PI/2),Ni([a,t],!1)}function v_(){const a=[];for(let t=0;t<3;t++){const e=new yi(.7+t*.22,.96+t*.22,28,1,-1.1+t*.18,2.2-t*.12);e.rotateX(-Math.PI/2),e.translate(0,.18*t,0),a.push(e)}for(let t=0;t<4;t++){const e=new Os(.12,1.1,5),i=-.8+t*.5;e.rotateX(-Math.PI/2),e.rotateY(i),e.translate(Math.cos(i)*1.3,.25,Math.sin(i)*1.3),a.push(e)}return Ni(a,!1)}function x_(){const a=[],t=new yi(.6,.85,32);t.rotateX(-Math.PI/2),a.push(t);for(let e=0;e<12;e++){const i=new Os(.08,.9,4),s=e/12*Math.PI*2;i.rotateX(-Math.PI/2),i.rotateY(s),i.translate(Math.cos(s)*1.1,.1,Math.sin(s)*1.1),a.push(i)}return Ni(a,!1)}function b_(){const a=[],t=[[0,0,0],[.5,0,.3],[.9,0,-.2],[1.4,0,.4],[1.9,0,-.1]];for(let i=0;i<t.length-1;i++){const s=t[i],n=t[i+1],r=n[0]-s[0],o=n[2]-s[2],l=Math.sqrt(r*r+o*o),h=new mn(.06-i*.008,.08-i*.008,l,6);h.rotateZ(-Math.PI/2);const c=Math.atan2(-o,r);h.rotateY(c),h.translate((s[0]+n[0])/2,0,(s[2]+n[2])/2),a.push(h)}const e=new Os(.09,.6,6);return e.rotateZ(-Math.PI/2),e.translate(2.1,0,-.1),a.push(e),Ni(a,!1)}function __(){const a=[];for(let e=0;e<16;e++){const i=e/16,s=i*Math.PI*3,n=.5+i*.8,r=new Jt(.24,.45);r.rotateX(-Math.PI/2),r.rotateY(s),r.translate(Math.cos(s)*n,Math.sin(i*Math.PI)*.4,Math.sin(s)*n),a.push(r)}return Ni(a,!1)}function y_(){const a=[],t=new yi(.15,.65,12,1,.2,2.2);t.rotateX(-Math.PI/2),t.rotateZ(.3),t.translate(.35,.15,.2),a.push(t);const e=new yi(.15,.65,12,1,-2.4,2.2);e.rotateX(-Math.PI/2),e.rotateZ(-.3),e.translate(-.35,.15,.2),a.push(e);const i=new mn(.03,.08,1.2,6);return i.rotateZ(-Math.PI/2),a.push(i),Ni(a,!1)}function M_(){const a=[],t=new yi(.7,1.1,24,1,-1.2,2.4);t.rotateX(-Math.PI/2),a.push(t);for(let e=-1;e<=1;e++){const i=new yi(.25,.42,12,1,-1,2);i.rotateX(-Math.PI/2),i.translate(e*.65,.1,.4),a.push(i)}return Ni(a,!1)}function w_(){const a=[];for(let e=0;e<6;e++){const i=new Ba(.35),s=e/6*Math.PI*2;i.scale(.6,1.4,.6),i.rotateZ(-Math.PI/4),i.rotateY(s),i.translate(Math.cos(s)*.6,.2,Math.sin(s)*.6),a.push(i)}const t=new Ba(.4);return t.translate(0,.35,0),a.push(t),Ni(a,!1)}class S_{scene;thrusts=[];arcs=[];rings=[];bolts=[];chains=[];tCur=0;aCur=0;rCur=0;bCur=0;cCur=0;flashes=[];fCur=0;flashThisFrame=0;attackSprites;telegraph;koStar;decals=[];dCur=0;fireWalls=[];fwCur=0;meteors=[];mCur=0;ringQT=new Float32Array(8);ringQX=new Float32Array(8);ringQZ=new Float32Array(8);ringQR=new Float32Array(8);ringQCr=new Float32Array(8);ringQCg=new Float32Array(8);ringQCb=new Float32Array(8);ringQActive=new Uint8Array(8);rqCur=0;crestTexCache=new Map;baguaTexCache=null;screenFlash=null;spawnLight=null;spawnDecal=null;spawnMusouLight=null;glowWater=null;glowFlame=null;glowSun=null;glowThunder=null;glowRibbon=null;glowButterfly=null;glowClaw=null;glowMoon=null;glowBlood=null;glowCompass=null;initGlowBatches(t){this.glowWater=new xi(this.scene,p_(),64,t),this.glowFlame=new xi(this.scene,v_(),64,t),this.glowSun=new xi(this.scene,x_(),64,t),this.glowThunder=new xi(this.scene,b_(),64,t),this.glowRibbon=new xi(this.scene,__(),64,t),this.glowButterfly=new xi(this.scene,y_(),64,t),this.glowClaw=new xi(this.scene,m_(),64,t),this.glowMoon=new xi(this.scene,M_(),64,t),this.glowBlood=new xi(this.scene,w_(),64,t),this.glowCompass=new xi(this.scene,g_(),64,t)}spawnTechniqueMesh(t,e,i,s,n,r,o,l,h,c,u,d=1){switch(t){case"water":this.glowWater?.push(e,i,s,n,r,o,l,h,c,u,d);break;case"flame":this.glowFlame?.push(e,i,s,n,r,o,l,h,c,u,d);break;case"sun":this.glowSun?.push(e,i,s,n,r,o,l,h,c,u,d);break;case"thunder":this.glowThunder?.push(e,i,s,n,r,o,l,h,c,u,d);break;case"ribbon":this.glowRibbon?.push(e,i,s,n,r,o,l,h,c,u,d);break;case"butterfly":this.glowButterfly?.push(e,i,s,n,r,o,l,h,c,u,d);break;case"claw":this.glowClaw?.push(e,i,s,n,r,o,l,h,c,u,d);break;case"moon":this.glowMoon?.push(e,i,s,n,r,o,l,h,c,u,d);break;case"blood":this.glowBlood?.push(e,i,s,n,r,o,l,h,c,u,d);break;case"compass":this.glowCompass?.push(e,i,s,n,r,o,l,h,c,u,d);break}}constructor(t){this.scene=t,this.attackSprites=new n_(t),this.telegraph=new a_(t),this.koStar=new o_(t);const e=new Jt(1,1,1,1);e.rotateX(-Math.PI/2),e.translate(.5,0,0);for(let f=0;f<24;f++)this.thrusts.push(this.makeSlot(e,E_,1));const i=A_(56);for(let f=0;f<20;f++)this.arcs.push(this.makeSlot(i,C_,1,T_));const s=new yi(.8,1,48);s.rotateX(-Math.PI/2);for(let f=0;f<24;f++)this.rings.push(this.makeSlot(s,R_,.05));const n=new Jt(1,1,1,1);n.translate(0,.5,0);const r=new Jt(1,1,1,1);r.rotateY(Math.PI/2),r.translate(0,.5,0);const o=Ni([n,r]);for(let f=0;f<16;f++)this.bolts.push(this.makeSlot(o,F_,.16));const l=new Jt(1,1,1,1);l.rotateX(-Math.PI/2),l.translate(.5,0,0);for(let f=0;f<40;f++)this.chains.push(this.makeSlot(l,L_,.12));const h=new yi(0,1,28);h.rotateX(-Math.PI/2);for(let f=0;f<24;f++)this.flashes.push(this.makeSlot(h,P_,.2));const c=new Jt(1,1);c.rotateX(-Math.PI/2);for(let f=0;f<6;f++){const m=new Ot({uniforms:{uMap:{value:null},uAlpha:{value:0},uColor:{value:new zt(1,1,1)}},vertexShader:_l,fragmentShader:D_,transparent:!0,blending:He,depthWrite:!1,depthTest:!0}),v=new we(c,m);v.visible=!1,v.frustumCulled=!1,v.renderOrder=1,this.scene.add(v),this.decals.push({mesh:v,mat:m,age:0,dur:1,active:!1,rot:0})}const u=new Jt(1,1,1,1);u.rotateX(-Math.PI/2),u.translate(.5,0,0);for(let f=0;f<16;f++)this.fireWalls.push(this.makeSlot(u,I_,1));const d=new Jt(1,1,1,1);d.translate(0,.5,0);for(let f=0;f<20;f++){const m=new Ot({uniforms:{uColor:{value:new zt(1,1,1)},uT:{value:0}},vertexShader:_l,fragmentShader:U_,transparent:!0,blending:He,depthWrite:!1,depthTest:!0}),v=new we(d,m);v.visible=!1,v.frustumCulled=!1,v.renderOrder=4,this.scene.add(v),this.meteors.push({mesh:v,mat:m,age:0,dur:1,active:!1,tx:0,tz:0,h0:14,r:1,g:1,b:1})}}makeSlot(t,e,i,s=_l){const n=new Ot({uniforms:{uT:{value:0},uAlpha:{value:0},uColor:{value:new zt(1,1,1)},uHalf:{value:Math.PI},uSeed:{value:0}},vertexShader:s,fragmentShader:e,transparent:!0,blending:He,depthWrite:!1,depthTest:!0}),r=new we(t,n);return r.visible=!1,r.frustumCulled=!1,r.renderOrder=4,this.scene.add(r),{mesh:r,mat:n,age:0,dur:i,active:!1,data:0}}spawnThrust(t,e,i,s,n,r,o=.7,l=.95,h=1.7,c=.15,u=!0){const d=this.thrusts[this.tCur];this.tCur=(this.tCur+1)%this.thrusts.length,d.age=0,d.dur=c,d.active=!0,d.mesh.visible=!0,d.mesh.position.set(t,1,e),d.mesh.rotation.y=Math.atan2(-s,i),d.mesh.scale.set(n,1,r),d.mat.uniforms.uColor.value.setRGB(o,l,h),d.mat.uniforms.uAlpha.value=1}spawnDoubleThrust(t,e,i,s,n,r,o=1.2,l=1,h=.7,c=.16){this.spawnThrust(t,e,i,s,n,r,o,l,h,c,!1),this.spawnThrust(t,e,-i,-s,n,r,o,l,h,c,!1)}spawnSlashArc(t,e,i,s,n,r,o=1.6,l=.9,h=.5,c=.22,u=e_){const d=this.arcs[this.aCur];this.aCur=(this.aCur+1)%this.arcs.length,d.age=0,d.dur=c,d.active=!0,d.mesh.visible=!0,d.mesh.position.set(t,.6,e),d.mesh.rotation.y=Math.atan2(-s,i),d.mesh.scale.setScalar(n),d.mat.uniforms.uColor.value.setRGB(o,l,h),d.mat.uniforms.uHalf.value=r,d.mat.uniforms.uT.value=0;const f=Math.atan2(-s,i);o>2&&l<1?this.spawnTechniqueMesh("flame",t,.4,e,f,n*.9,.8,n*.9,o,l,h,.95):h>1.8&&o<1?this.spawnTechniqueMesh("water",t,.4,e,f,n*.9,.8,n*.9,o,l,h,.95):o>2&&l>1.8?this.spawnTechniqueMesh("sun",t,.4,e,f,n,1,n,o,l,h,.95):o>1&&h>1.5?this.spawnTechniqueMesh("butterfly",t,.4,e,f,n*.85,.8,n*.85,o,l,h,.95):o>1.5&&l<.8&&h>1?this.spawnTechniqueMesh("ribbon",t,.4,e,f,n*.9,.8,n*.9,o,l,h,.95):this.spawnTechniqueMesh("moon",t,.4,e,f,n*.85,.8,n*.85,o,l,h,.95)}spawnRing(t,e,i,s=1.4,n=1.2,r=.7,o=.5){const l=this.rings[this.rCur];this.rCur=(this.rCur+1)%this.rings.length,l.age=0,l.dur=o,l.active=!0,l.data=i,l.mesh.visible=!0,l.mesh.position.set(t,.5,e),l.mesh.scale.setScalar(i*.15),l.mat.uniforms.uColor.value.setRGB(s,n,r),l.mat.uniforms.uT.value=0,i>=3&&(this.spawnLight&&this.spawnLight(t,e,s,n,r,i*1.8,o*.7),this.spawnDecal&&this.spawnDecal(t,e,i*1.15,s,n,r))}spawnFlash(t,e,i,s,n,r){if(this.flashThisFrame>=3)return;this.flashThisFrame++;const o=this.flashes[this.fCur];this.fCur=(this.fCur+1)%this.flashes.length,o.age=0,o.dur=.2,o.active=!0,o.data=r,o.mesh.visible=!0,o.mesh.position.set(t,.45,e),o.mesh.scale.setScalar(r*.6),o.mat.uniforms.uColor.value.setRGB(i,s,n),o.mat.uniforms.uT.value=0,this.spawnLight&&this.spawnLight(t,e,i,s,n,r*1.6,.12+r*.02)}spawnTelegraph(t,e,i,s,n,r,o,l,h=.95,c=.18,u=.18){this.telegraph.spawn(t,e,i,s,n,r,o,l,h,c,u)}spawnKOStar(t,e,i,s){this.koStar.spawn(t,e,i,s)}spawnLightning(t,e,i=1.4,s=1.8,n=2.6,r=7){const o=this.bolts[this.bCur];this.bCur=(this.bCur+1)%this.bolts.length,o.age=0,o.dur=.16,o.active=!0,o.mesh.visible=!0,o.mesh.position.set(t,0,e),o.mesh.scale.set(2.2,r,1),o.mat.uniforms.uColor.value.setRGB(i,s,n),o.mat.uniforms.uSeed.value=Math.random(),o.mat.uniforms.uT.value=0,this.spawnRing(t,e,2.2,i*.8,s*.8,n,.4),this.screenFlash&&this.screenFlash(.16),this.spawnLight&&this.spawnLight(t,e,i,s,n,9,.3),this.spawnDecal&&this.spawnDecal(t,e,3.2,i,s,n)}spawnChainArc(t,e,i,s,n=1.2,r=1.8,o=2.6){const l=this.chains[this.cCur];this.cCur=(this.cCur+1)%this.chains.length;const h=i-t,c=s-e,u=Math.hypot(h,c)||.001;l.age=0,l.dur=.13,l.active=!0,l.mesh.visible=!0,l.mesh.position.set(t,.8,e),l.mesh.rotation.y=Math.atan2(-c,h),l.mesh.scale.set(u,1,.9),l.mat.uniforms.uColor.value.setRGB(n,r,o),l.mat.uniforms.uSeed.value=Math.random(),l.mat.uniforms.uT.value=0}spawnCrest(t,e,i,s,n,r,o=5){this.placeDecal(this.crestTexture(i),t,e,6.4,o,.4,s,n,r)}spawnBaguaSigil(t,e,i=5){this.placeDecal(this.baguaTexture(),t,e,8.4,i,.9,.6,1.5,2.4)}placeDecal(t,e,i,s,n,r,o,l,h){const c=this.decals[this.dCur];this.dCur=(this.dCur+1)%this.decals.length,c.mat.uniforms.uMap.value=t,c.mat.uniforms.uColor.value.setRGB(o,l,h),c.mesh.position.set(e,.07,i),c.mesh.scale.set(s,1,s),c.mesh.rotation.y=0,c.age=0,c.dur=n,c.rot=r,c.active=!0,c.mesh.visible=!0}spawnTripleShock(t,e,i,s=1.6,n=1,r=.4){this.spawnRing(t,e,i,s,n,r,.55);for(let o=1;o<=2;o++){const l=this.rqCur;this.rqCur=(this.rqCur+1)%8,this.ringQT[l]=o*.11,this.ringQX[l]=t,this.ringQZ[l]=e,this.ringQR[l]=i*(1+o*.35),this.ringQCr[l]=s,this.ringQCg[l]=n,this.ringQCb[l]=r,this.ringQActive[l]=1}}spawnFireWall(t,e,i,s,n,r=1.8,o=2.2){const l=this.fireWalls[this.fwCur];this.fwCur=(this.fwCur+1)%this.fireWalls.length,l.age=0,l.dur=o,l.active=!0,l.mesh.visible=!0,l.mesh.position.set(t,.15,e),l.mesh.rotation.y=Math.atan2(-s,i),l.mesh.scale.set(n,1,r),l.mat.uniforms.uColor.value.setRGB(2.4,.7,.2),l.mat.uniforms.uAlpha.value=1}spawnMeteorArrow(t,e,i=1.7,s=1.4,n=.6,r=.5){const o=this.meteors[this.mCur];this.mCur=(this.mCur+1)%this.meteors.length,o.age=0,o.dur=r,o.active=!0,o.tx=t,o.tz=e,o.h0=16,o.r=i,o.g=s,o.b=n,o.mat.uniforms.uColor.value.setRGB(i,s,n),o.mesh.visible=!0}spawnFlameTrail(t,e,i=.4,s=1.9,n=1.1){this.spawnFlash(t,e,i,s,n,1.5)}update(t){this.flashThisFrame=0,this.glowWater?.begin(),this.glowFlame?.begin(),this.glowSun?.begin(),this.glowThunder?.begin(),this.glowRibbon?.begin(),this.glowButterfly?.begin(),this.glowClaw?.begin(),this.glowMoon?.begin(),this.glowBlood?.begin(),this.glowCompass?.begin(),this.attackSprites.update(t),this.telegraph.update(t),this.koStar.update(t),this.tickThrust(t),this.tickArc(t),this.tickRing(t),this.tickFlash(t),this.tickDecals(t),this.tickFireWalls(t),this.tickMeteors(t),this.tickRingQueue(t),this.tickSimple(this.bolts,t),this.tickSimple(this.chains,t),this.glowWater?.end(),this.glowFlame?.end(),this.glowSun?.end(),this.glowThunder?.end(),this.glowRibbon?.end(),this.glowButterfly?.end(),this.glowClaw?.end(),this.glowMoon?.end(),this.glowBlood?.end(),this.glowCompass?.end()}tickDecals(t){for(const e of this.decals){if(!e.active)continue;if(e.age+=t,e.age>=e.dur){e.active=!1,e.mesh.visible=!1;continue}e.mesh.rotation.y+=e.rot*t;const i=e.age/e.dur,s=Math.min(1,i*6)*Math.min(1,(1-i)*3)*(.85+.15*Math.sin(e.age*6));e.mat.uniforms.uAlpha.value=s}}tickFireWalls(t){for(const e of this.fireWalls){if(!e.active)continue;e.age+=t;const i=e.age/e.dur;if(i>=1){this.retire(e);continue}e.mat.uniforms.uAlpha.value=Math.min(1,(1-i)*2.5),e.mat.uniforms.uT.value=e.age}}tickMeteors(t){for(const e of this.meteors){if(!e.active)continue;e.age+=t;const i=e.age/e.dur;if(i>=1){e.active=!1,e.mesh.visible=!1,this.spawnRing(e.tx,e.tz,2.6,e.r,e.g,e.b,.4);continue}const s=e.h0*(1-i)*(1-i);e.mesh.position.set(e.tx,s,e.tz),e.mesh.scale.set(.5,2.4,1),e.mat.uniforms.uT.value=i}}tickRingQueue(t){for(let e=0;e<8;e++)this.ringQActive[e]!==0&&(this.ringQT[e]-=t,this.ringQT[e]<=0&&(this.ringQActive[e]=0,this.spawnRing(this.ringQX[e],this.ringQZ[e],this.ringQR[e],this.ringQCr[e],this.ringQCg[e],this.ringQCb[e],.55)))}tickThrust(t){for(const e of this.thrusts){if(!e.active)continue;e.age+=t;const i=e.age/e.dur;if(i>=1){this.retire(e);continue}e.mat.uniforms.uAlpha.value=1-i}}tickArc(t){for(const e of this.arcs){if(!e.active)continue;e.age+=t;const i=e.age/e.dur;if(i>=1){this.retire(e);continue}e.mat.uniforms.uT.value=i}}tickRing(t){for(const e of this.rings){if(!e.active)continue;e.age+=t;const i=e.age/e.dur;if(i>=1){this.retire(e);continue}const s=e.data*(.15+.85*(1-(1-i)*(1-i)));e.mesh.scale.setScalar(s),e.mat.uniforms.uT.value=i}}tickFlash(t){for(const e of this.flashes){if(!e.active)continue;e.age+=t;const i=e.age/e.dur;if(i>=1){this.retire(e);continue}e.mesh.scale.setScalar(e.data*(.6+.6*i)),e.mat.uniforms.uT.value=i}}tickSimple(t,e){for(const i of t){if(!i.active)continue;i.age+=e;const s=i.age/i.dur;if(s>=1){this.retire(i);continue}i.mat.uniforms.uT.value=s}}retire(t){t.active=!1,t.mesh.visible=!1}crestTexture(t){const e=this.crestTexCache.get(t);if(e)return e;const i=256,s=document.createElement("canvas");s.width=i,s.height=i;const n=s.getContext("2d");n.clearRect(0,0,i,i),n.strokeStyle="rgba(255,255,255,0.85)",n.lineWidth=5,n.beginPath(),n.arc(i/2,i/2,i*.44,0,Math.PI*2),n.stroke(),n.lineWidth=2,n.beginPath(),n.arc(i/2,i/2,i*.38,0,Math.PI*2),n.stroke(),n.fillStyle="#ffffff",n.font='bold 150px "Nanum Myeongjo","SimSun",serif',n.textAlign="center",n.textBaseline="middle",n.fillText(t,i/2,i/2+6);const r=new fi(s);return r.colorSpace=Me,r.needsUpdate=!0,this.crestTexCache.set(t,r),r}baguaTexture(){if(this.baguaTexCache)return this.baguaTexCache;const t=256,e=document.createElement("canvas");e.width=t,e.height=t;const i=e.getContext("2d"),s=t/2;i.clearRect(0,0,t,t),i.strokeStyle="rgba(255,255,255,0.9)",i.lineWidth=3;for(const r of[t*.46,t*.32,t*.2])i.beginPath(),i.arc(s,s,r,0,Math.PI*2),i.stroke();for(let r=0;r<8;r++){const o=r/8*Math.PI*2;i.save(),i.translate(s+Math.cos(o)*t*.39,s+Math.sin(o)*t*.39),i.rotate(o+Math.PI/2),i.fillStyle="#ffffff";for(let l=0;l<3;l++){const h=(l-1)*9;r>>l&1?i.fillRect(-16,h-2,32,4):(i.fillRect(-16,h-2,12,4),i.fillRect(4,h-2,12,4))}i.restore()}const n=new fi(e);return n.colorSpace=Me,n.needsUpdate=!0,this.baguaTexCache=n,n}}function A_(a){const i=(a+1)*2,s=new Float32Array(i*3),n=new Float32Array(i),r=new Float32Array(i);for(let h=0;h<=a;h++){const c=-Math.PI+h/a*Math.PI*2,u=Math.cos(c),d=Math.sin(c),f=h*2;s[f*3]=.16*u,s[f*3+1]=0,s[f*3+2]=.16*d,n[f]=c/Math.PI,r[f]=0;const m=h*2+1;s[m*3]=1*u,s[m*3+1]=0,s[m*3+2]=1*d,n[m]=c/Math.PI,r[m]=1}const o=[];for(let h=0;h<a;h++){const c=h*2,u=h*2+1,d=(h+1)*2,f=(h+1)*2+1;o.push(c,u,d,u,f,d)}const l=new Ee;return l.setAttribute("position",new me(s,3)),l.setAttribute("aAng",new me(n,1)),l.setAttribute("aRad",new me(r,1)),l.setIndex(o),l}const _l=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,T_=`
  attribute float aAng;
  attribute float aRad;
  varying float vAng;
  varying float vRad;
  void main() {
    vAng = aAng;
    vRad = aRad;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,E_=`
  uniform float uAlpha;
  uniform vec3 uColor;
  varying vec2 vUv;
  void main() {
    float across = 1.0 - abs(vUv.y - 0.5) * 2.0;
    float along = smoothstep(0.0, 0.12, vUv.x) * (1.0 - smoothstep(0.55, 1.0, vUv.x));
    float b = pow(max(across, 0.0), 1.6) * along;
    gl_FragColor = vec4(uColor * b * 1.7, b * uAlpha);
  }
`,C_=`
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
`,R_=`
  uniform float uT;
  uniform vec3 uColor;
  varying vec2 vUv;
  void main() {
    float fade = 1.0 - uT;
    float b = fade * 1.4;
    gl_FragColor = vec4(uColor * b * 1.3, fade);
  }
`,P_=`
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
`,F_=`
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
`,L_=`
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
`,D_=`
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
`,I_=`
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
`,U_=`
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
`,gi=28,ld=1.7,yl=14,z_=.6,kr=2.4,k_=2.6,N_=.14,O_=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
  }
`,B_=`
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
`;class H_{effects;mesh;dummy=new Ze;up=new L(0,1,0);backDir=new L(0,1,0);phase=new Uint8Array(gi);wait=new Float32Array(gi);fall=new Float32Array(gi);ttl=new Float32Array(gi);tx=new Float32Array(gi);tz=new Float32Array(gi);wx=new Float32Array(gi);wz=new Float32Array(gi);bdx=new Float32Array(gi);bdy=new Float32Array(gi);bdz=new Float32Array(gi);cur=0;constructor(t,e){this.effects=e;const i=new Jt(1,1);i.translate(0,.5,0);const s=new Ot({vertexShader:O_,fragmentShader:B_,transparent:!0,blending:as,side:ti,depthWrite:!1,depthTest:!0});this.mesh=new Se(i,s,gi),this.mesh.instanceMatrix.setUsage(St),this.mesh.frustumCulled=!1,this.mesh.count=0,this.mesh.renderOrder=4,t.add(this.mesh)}volley(t){if(t.length===0)return;const e=Math.random()*Math.PI*2,i=Math.cos(e),s=Math.sin(e);for(const n of t){const r=Math.max(.05,n.t);this.effects.spawnTelegraph(Oh,n.x,n.z,0,ld*2,ld*2,0,r,1,.4,.14),this.alloc(n.x,n.z,r,i,s)}}alloc(t,e,i,s,n){const r=this.cur;this.cur=(this.cur+1)%gi;const o=Math.min(i,z_);this.phase[r]=1,this.wait[r]=Math.max(0,i-o),this.fall[r]=o,this.ttl[r]=o,this.tx[r]=t,this.tz[r]=e,this.wx[r]=s,this.wz[r]=n;const l=s*kr,h=n*kr,c=Math.hypot(l,yl,h)||1;this.bdx[r]=l/c,this.bdy[r]=yl/c,this.bdz[r]=h/c}update(t){let e=0;for(let i=0;i<gi;i++){const s=this.phase[i];if(s===0)continue;if(s===1){if(this.wait[i]-=t,this.wait[i]>0)continue;this.phase[i]=2,this.ttl[i]=this.fall[i]}if(this.ttl[i]-=t,this.ttl[i]<=0){this.impact(i),this.phase[i]=0;continue}const n=this.ttl[i]/this.fall[i],r=1-(1-n)*(1-n),o=this.tx[i]+this.wx[i]*kr*r,l=yl*r,h=this.tz[i]+this.wz[i]*kr*r;this.dummy.position.set(o,l,h),this.backDir.set(this.bdx[i],this.bdy[i],this.bdz[i]),this.dummy.quaternion.setFromUnitVectors(this.up,this.backDir),this.dummy.scale.set(N_,k_,1),this.dummy.updateMatrix(),this.mesh.setMatrixAt(e,this.dummy.matrix),e++}this.mesh.count=e,this.mesh.instanceMatrix.needsUpdate=!0}impact(t){const e=this.tx[t],i=this.tz[t];this.effects.spawnRing(e,i,1.6,.75,.5,.28,.32),this.effects.spawnDecal?.(e,i,1.3,.85,.4,.16)}reset(){this.phase.fill(0),this.cur=0,this.mesh.count=0}}const G_=Ns/Ga,V_=.25,W_=.4;class X_{mesh;mat;time=0;vis=0;boundTex=null;constructor(t){const e=new Jt(G_,1);e.translate(0,.5,0),e.rotateX(Lf),this.mat=new Ot({uniforms:{uMap:{value:null},uUvOffset:{value:new vt(0,0)},uCellUv:{value:new vt(1,1)},uTexel:{value:new vt(1,1)},uTime:{value:0},uAlpha:{value:0}},vertexShader:`
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
      `,transparent:!0,blending:He,depthWrite:!1,depthTest:!1}),this.mesh=new we(e,this.mat),this.mesh.scale.setScalar(vc),this.mesh.frustumCulled=!1,this.mesh.visible=!1,this.mesh.renderOrder=5,t.add(this.mesh)}reset(){this.time=0,this.vis=0,this.mesh.visible=!1}update(t,e,i,s,n=null,r=0,o=0){t>.1&&(t=.1);const l=n!==null;if(this.vis=s&&l?Math.min(1,this.vis+t/V_):Math.max(0,this.vis-t/W_),this.vis<=.001){this.mesh.visible=!1;return}this.time+=t,n&&(this.boundTex!==n.texture&&(this.mat.uniforms.uMap.value=n.texture,this.boundTex=n.texture),this.mat.uniforms.uCellUv.value.set(n.cellUvW,n.cellUvH),this.mat.uniforms.uTexel.value.set(1/n.texW,1/n.texH),this.mat.uniforms.uUvOffset.value.set(r,o)),this.mesh.position.set(e,0,i),this.mesh.visible=!0,this.mat.uniforms.uTime.value=this.time,this.mat.uniforms.uAlpha.value=this.vis}}class q_{points;pos;col;life;size;vel;invDur;grav;drag;posAttr;colAttr;lifeAttr;sizeAttr;n;cursor=0;constructor(t,e=4e3){this.n=e,this.pos=new Float32Array(e*3),this.col=new Float32Array(e*3),this.life=new Float32Array(e),this.size=new Float32Array(e),this.vel=new Float32Array(e*3),this.invDur=new Float32Array(e),this.grav=new Float32Array(e),this.drag=new Float32Array(e);const i=new Ee;this.posAttr=new me(this.pos,3),this.colAttr=new me(this.col,3),this.lifeAttr=new me(this.life,1),this.sizeAttr=new me(this.size,1),this.posAttr.setUsage(St),this.lifeAttr.setUsage(St),this.sizeAttr.setUsage(St),this.colAttr.setUsage(St),i.setAttribute("position",this.posAttr),i.setAttribute("aColor",this.colAttr),i.setAttribute("aLife",this.lifeAttr),i.setAttribute("aSize",this.sizeAttr);const s=new Ot({uniforms:{uPix:{value:320}},vertexShader:`
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
      `,transparent:!0,blending:He,depthWrite:!1,depthTest:!0});this.points=new cc(i,s),this.points.frustumCulled=!1,this.points.renderOrder=3,t.add(this.points)}emit(t,e,i,s,n,r,o,l,h,c,u,d,f){const m=this.cursor;this.cursor=(this.cursor+1)%this.n;const v=m*3;this.pos[v]=t,this.pos[v+1]=e,this.pos[v+2]=i,this.vel[v]=s,this.vel[v+1]=n,this.vel[v+2]=r,this.col[v]=o,this.col[v+1]=l,this.col[v+2]=h,this.size[m]=c,this.life[m]=1,this.invDur[m]=1/u,this.grav[m]=d,this.drag[m]=f}burst(t,e,i,s,n,r,o){for(let l=0;l<r;l++){const h=Math.random()*Math.PI*2,c=o*(.3+Math.random()*.9);this.emit(t,.7+Math.random()*.8,e,Math.cos(h)*c,1.5+Math.random()*3,Math.sin(h)*c,i,s,n,1,.3+Math.random()*.35,6,.92)}}fireEmber(t,e,i){const s=Math.random()*Math.PI*2,n=Math.sqrt(Math.random())*i;this.emit(t+Math.cos(s)*n,.2,e+Math.sin(s)*n,(Math.random()-.5)*.6,1.6+Math.random()*1.8,(Math.random()-.5)*.6,1.2,.5+Math.random()*.25,.12,.4+Math.random()*.3,.5+Math.random()*.4,-1.2,.9)}steam(t,e){const i=Math.random()*Math.PI*2,s=Math.random()*.5;this.emit(t+Math.cos(i)*s,1.6+Math.random()*.4,e+Math.sin(i)*s,(Math.random()-.5)*.3,.9+Math.random()*.7,(Math.random()-.5)*.3,.9,.95,.85,.9+Math.random()*.5,.7+Math.random()*.5,-.6,.94)}spark(t,e){const i=Math.random()*Math.PI*2,s=1.6+Math.random()*2.2;this.emit(t,1+Math.random()*.6,e,Math.cos(i)*s,1.2+Math.random()*2,Math.sin(i)*s,1.6,.85,.25,.42+Math.random()*.3,.22+Math.random()*.16,7,.9)}incense(t,e){const i=Math.random()*Math.PI*2,s=Math.random()*.7;this.emit(t+Math.cos(i)*s,1.2+Math.random()*.5,e+Math.sin(i)*s,(Math.random()-.5)*.25,.55+Math.random()*.5,(Math.random()-.5)*.25,1.1,.92,.55,.8+Math.random()*.6,.9+Math.random()*.6,-.4,.95)}dust(t,e){const i=Math.random()*Math.PI*2;this.emit(t,.3+Math.random()*.5,e,Math.cos(i)*1.4,.6+Math.random()*1,Math.sin(i)*1.4,1.1,1,.85,1.3+Math.random(),.4+Math.random()*.3,3,.9)}projectileTrail(t,e,i,s,n,r,o,l){const h=Math.hypot(i,s)||1,c=i/h,u=s/h,d=l===4?2:1,f=l===2||l===4?.75:l===3?.58:.38;for(let m=0;m<d;m++){const v=(Math.random()-.5)*(l===4?1.2:.35),g=Math.random()*(l===4?1.4:.45);this.emit(t-c*g-u*v,.75+Math.random()*.35,e-u*g+c*v,-c*(.8+Math.random()*1.6)-u*v,.25+Math.random()*.6,-u*(.8+Math.random()*1.6)+c*v,n*.7,r*.7,o*.7,f*(.7+Math.random()*.6),.16+Math.random()*.14,1,.88)}}projectileImpact(t,e,i,s,n,r){const o=r===2||r===4?9:r===3?6:4,l=r===4?5.2:r===2?4:2.8;for(let h=0;h<o;h++){const c=h/o*Math.PI*2+Math.random()*.45,u=l*(.45+Math.random()*.7);this.emit(t,.75+Math.random()*.45,e,Math.cos(c)*u,.9+Math.random()*1.8,Math.sin(c)*u,i,s,n,(r===2||r===4?.72:.48)*(.75+Math.random()*.5),.18+Math.random()*.18,4.2,.9)}}wisteriaPetal(t,e,i){const s=Math.random()*Math.PI*2,n=Math.sqrt(Math.random())*i;this.emit(t+Math.cos(s)*n,8+Math.random()*4,e+Math.sin(s)*n,-.8+(Math.random()-.5)*1.5,-1.5-Math.random()*1.2,-.8+(Math.random()-.5)*1.5,.54+Math.random()*.16,.22+Math.random()*.1,.72+Math.random()*.22,.35+Math.random()*.2,3+Math.random()*2,.8,.96)}waterSplash(t,e,i=12){for(let s=0;s<i;s++){const n=Math.random()*Math.PI*2,r=2+Math.random()*3.5;this.emit(t+(Math.random()-.5)*.8,.3+Math.random()*.6,e+(Math.random()-.5)*.8,Math.cos(n)*r,2+Math.random()*3,Math.sin(n)*r,.2+Math.random()*.2,.7+Math.random()*.3,1.8+Math.random()*.6,.8+Math.random()*.6,.35+Math.random()*.25,7,.91)}}lightningSpark(t,e,i=15){for(let s=0;s<i;s++){const n=Math.random()*Math.PI*2,r=4+Math.random()*6;this.emit(t,.5+Math.random()*.8,e,Math.cos(n)*r,1+Math.random()*4,Math.sin(n)*r,2.5+Math.random()*.5,2+Math.random()*.4,.3+Math.random()*.3,.6+Math.random()*.5,.2+Math.random()*.2,4,.88)}}butterflyPoison(t,e,i=8){for(let s=0;s<i;s++){const n=Math.random()*Math.PI*2,r=1+Math.random()*2;this.emit(t+(Math.random()-.5)*.5,.6+Math.random()*.8,e+(Math.random()-.5)*.5,Math.cos(n)*r,.8+Math.random()*1.5,Math.sin(n)*r,1.4+Math.random()*.4,.3+Math.random()*.2,2.2+Math.random()*.6,.7+Math.random()*.4,.5+Math.random()*.3,-.5,.93)}}update(t){const e=this.pos,i=this.vel,s=this.life,n=this.invDur,r=this.grav,o=this.drag;for(let l=0;l<this.n;l++){const h=s[l];if(h<=0)continue;const c=h-t*n[l];s[l]=c>0?c:0;const u=l*3;e[u]+=i[u]*t,e[u+1]+=i[u+1]*t,e[u+2]+=i[u+2]*t;const d=o[l];i[u]*=d,i[u+1]=i[u+1]*d-r[l]*t,i[u+2]*=d}this.posAttr.needsUpdate=!0,this.lifeAttr.needsUpdate=!0,this.colAttr.needsUpdate=!0,this.sizeAttr.needsUpdate=!0}}const Qi=600;function j_(){const a=document.createElement("canvas");a.width=64,a.height=64;const t=a.getContext("2d");t.fillStyle="#ffffff",t.beginPath(),t.moveTo(32,53),t.bezierCurveTo(47,45,46,19,35,13),t.quadraticCurveTo(32,17,29,13),t.bezierCurveTo(18,19,17,45,32,53),t.fill();const e=new fi(a);return e.generateMipmaps=!1,e}const $_=new L(18e-5,26e-5,8e-4),Z_=.019;class K_{points;pos;col;life;size;phase;fallSpeed;flutterAmp;flutterFreq;posAttr;colAttr;sizeAttr;lifeAttr;time=0;constructor(t){this.pos=new Float32Array(Qi*3),this.col=new Float32Array(Qi*3),this.life=new Float32Array(Qi),this.size=new Float32Array(Qi),this.phase=new Float32Array(Qi),this.fallSpeed=new Float32Array(Qi),this.flutterAmp=new Float32Array(Qi),this.flutterFreq=new Float32Array(Qi);const e=[[1,.82,.88],[1,.75,.84],[.96,.68,.78],[.92,.78,.98]];for(let n=0;n<Qi;n++){const r=n*3;this.pos[r]=(Math.random()-.5)*44,this.pos[r+1]=Math.random()*18+.5,this.pos[r+2]=(Math.random()-.5)*44;const o=e[Math.floor(Math.random()*e.length)];this.col[r]=o[0],this.col[r+1]=o[1],this.col[r+2]=o[2],this.life[n]=1,this.size[n]=.45+Math.random()*.45,this.phase[n]=Math.random()*Math.PI*2,this.fallSpeed[n]=.8+Math.random()*1.2,this.flutterAmp[n]=.8+Math.random()*1.4,this.flutterFreq[n]=1.2+Math.random()*1.8}const i=new Ee;this.posAttr=new me(this.pos,3),this.colAttr=new me(this.col,3),this.lifeAttr=new me(this.life,1),this.sizeAttr=new me(this.size,1),this.posAttr.setUsage(St),this.colAttr.setUsage(St),this.lifeAttr.setUsage(St),this.sizeAttr.setUsage(St),i.setAttribute("position",this.posAttr),i.setAttribute("aColor",this.colAttr),i.setAttribute("aLife",this.lifeAttr),i.setAttribute("aSize",this.sizeAttr);const s=new Ot({uniforms:{uMap:{value:j_()},uPix:{value:360},uFogColor:{value:$_.clone()},uFogDensity:{value:Z_}},vertexShader:`
        attribute float aLife;
        attribute float aSize;
        attribute vec3 aColor;
        uniform float uPix;
        varying float vLife;
        varying vec3 vColor;
        varying float vFogDepth;

        void main() {
          vLife = aLife;
          vColor = aColor;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          vFogDepth = -mv.z;
          gl_PointSize = (aLife > 0.0) ? uPix * aSize / max(0.1, -mv.z) : 0.0;
          gl_Position = projectionMatrix * mv;
        }
      `,fragmentShader:`
        uniform sampler2D uMap;
        uniform vec3 uFogColor;
        uniform float uFogDensity;
        varying float vLife;
        varying vec3 vColor;
        varying float vFogDepth;

        void main() {
          if (vLife <= 0.0) discard;
          vec4 tex = texture2D(uMap, gl_PointCoord);
          if (tex.a < 0.1) discard;
          vec3 col = vColor * tex.rgb * 1.35;
          float fog = 1.0 - exp(-uFogDensity * uFogDensity * vFogDepth * vFogDepth);
          col = mix(col, uFogColor, clamp(fog, 0.0, 1.0));
          gl_FragColor = vec4(col, tex.a * vLife * 0.85);
        }
      `,transparent:!0,blending:He,depthWrite:!1,depthTest:!0});this.points=new cc(i,s),this.points.frustumCulled=!1,this.points.renderOrder=4,t.add(this.points)}update(t,e,i){this.time+=t;const s=this.time,n=this.pos;for(let r=0;r<Qi;r++){const o=r*3,l=this.phase[r],h=this.flutterFreq[r],c=this.flutterAmp[r],u=this.fallSpeed[r];n[o]+=Math.sin(s*h+l)*c*t+.8*t,n[o+1]-=u*t,n[o+2]+=Math.cos(s*h*.7+l)*c*.6*t;const d=n[o]-e,f=n[o+2]-i;(n[o+1]<=.2||d*d+f*f>576)&&(n[o]=e+(Math.random()-.5)*40,n[o+1]=14+Math.random()*6,n[o+2]=i+(Math.random()-.5)*40)}this.posAttr.needsUpdate=!0}}const Hn=128,Gn=72;class Y_{slots=[];cap;cursor=0;constructor(t,e=56){this.cap=e;for(let i=0;i<e;i++){const s=document.createElement("canvas");s.width=Hn,s.height=Gn;const n=s.getContext("2d"),r=new fi(s),o=new ta({map:r,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1}),l=new Oa(o);l.visible=!1,l.renderOrder=10,t.add(l),this.slots.push({sprite:l,mat:o,tex:r,ctx:n,life:0,dur:.75,active:!1,base:1.25,crit:!1,bx:0})}}spawn(t,e,i,s,n=!1){const r=this.slots[this.cursor];this.cursor=(this.cursor+1)%this.cap;const o=r.ctx;o.clearRect(0,0,Hn,Gn);const l=Math.max(1,Math.round(t)).toString();o.font=n?'bold 46px "Times New Roman", serif':'bold 34px "Times New Roman", serif',o.textAlign="center",o.textBaseline="middle",o.lineWidth=5,o.strokeStyle="rgba(0,0,0,0.85)",o.strokeText(l,Hn/2,Gn/2),o.fillStyle=n?"#ffe14d":"#ffffff",o.fillText(l,Hn/2,Gn/2),r.tex.needsUpdate=!0,r.base=n?1.9:1.25,r.crit=n,r.bx=e+(Math.random()*.7-.35),r.sprite.scale.set(r.base*(Hn/Gn),r.base,1),r.sprite.position.set(r.bx,i,s),r.sprite.visible=!0,r.life=n?.95:.75,r.dur=r.life,r.mat.opacity=1,r.active=!0}update(t){for(let e=0;e<this.cap;e++){const i=this.slots[e];if(!i.active)continue;if(i.life-=t,i.life<=0){i.active=!1,i.sprite.visible=!1;continue}const s=i.dur-i.life,n=1-i.life/i.dur,r=1+.4*Math.exp(-s/.06),o=i.base*r;i.sprite.scale.set(o*(Hn/Gn),o,1);const l=i.crit?Math.sin(s*60)*.12*Math.exp(-s/.12):0;i.sprite.position.x=i.bx+l,i.sprite.position.y+=t*1.8,i.mat.opacity=1-n*n}}}const wa=256,Sa=64;class Q_{slots=[];cap;cursor=0;constructor(t,e=10){this.cap=e;for(let i=0;i<e;i++){const s=document.createElement("canvas");s.width=wa,s.height=Sa;const n=s.getContext("2d"),r=new fi(s),o=new ta({map:r,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1}),l=new Oa(o);l.visible=!1,l.renderOrder=11,l.scale.set(1.5*(wa/Sa),1.5,1),t.add(l),this.slots.push({sprite:l,mat:o,tex:r,ctx:n,text:""})}}begin(){this.cursor=0}place(t,e,i,s){if(this.cursor>=this.cap)return;const n=this.slots[this.cursor++];if(n.text!==t){n.text=t;const r=n.ctx;r.clearRect(0,0,wa,Sa),r.font='bold 30px "Nanum Myeongjo","Times New Roman",serif',r.textAlign="center",r.textBaseline="middle",r.lineWidth=5,r.strokeStyle="rgba(0,0,0,0.9)",r.strokeText(t,wa/2,Sa/2),r.fillStyle="#f0e0a0",r.fillText(t,wa/2,Sa/2),n.tex.needsUpdate=!0}n.sprite.position.set(e,i,s),n.sprite.visible=!0}end(){for(let t=this.cursor;t<this.cap;t++)this.slots[t].sprite.visible=!1}reset(){for(const t of this.slots)t.sprite.visible=!1;this.cursor=0}}const qs=30,ms=7,vi=1.25,ri=1.5,he=64,Ml=65535,Je=0,We=-48,Nr=9,xs=36,Gi=32,jn=16,nn=14,hd=8,J_=34,ty=41,ey=30,js=800,Or=900,cd=26,iy=9,ne={banners:[],bannerVersion:0,title:{text:"무한성 無限城",x:Je,y:6.4,z:We+Gi-8,alpha:0},allied:!1,flipVersion:0,flipX:0,flipZ:0},yt={cx:Je,cz:We,ohx:xs,ohz:Gi,ihx:jn,ihz:nn,outerGates:[{key:"castle-s",x:Je,z:We+Gi,horizontal:!0},{key:"castle-e",x:Je+xs,z:We,horizontal:!1},{key:"castle-w",x:Je-xs,z:We,horizontal:!1}],keepGate:{x:Je,z:We+nn}},ud=[{kind:11,width:3.2,height:5.4,name:"봉화대 烽火",glow:1.6,gr:1.05,gg:.52,gb:.2},{kind:5,width:5.4,height:4,name:"군영 軍營",glow:0,gr:0,gg:0,gb:0},{kind:6,width:3,height:3.4,name:"전고 戰鼓",glow:1.7,gr:1,gg:.38,gb:.26},{kind:2,width:3.4,height:5.6,name:"망루 望樓",glow:0,gr:0,gg:0,gb:0},{kind:4,width:4.8,height:3.6,name:"공성 잔해 殘骸",glow:0,gr:0,gg:0,gb:0}],sy=12,ny=2.399963229728653;function bc(a,t){let e=Math.imul(a^2654435769,2246822507)^Math.imul(t^3266489909,668265263);return e^=e>>>16,e>>>0}function dd(a,t,e){e.x=a,e.z=t,!(a===0&&t===0)&&(a===0?e.z-=Math.sign(t):t===0||(bc(a,t)&1)===0?e.x-=Math.sign(a):e.z-=Math.sign(t))}const wl={x:0,z:0},Sl={x:0,z:0};function Br(a,t,e,i){if(dd(a,t,wl),wl.x===e&&wl.z===i||(dd(e,i,Sl),Sl.x===a&&Sl.z===t))return!0;const s=Math.min(a,e),n=Math.min(t,i),r=a!==e?17:43;return bc(s*2+r,n*2-r)%100<22}class ay{walls=[];houses=[];roads=[];props=[];landmarks=[];gates=[];revision=0;collisionCount=0;breachCount=0;gateKills=0;colliders=[];breached=new Set;keepSealed=!0;castleBreachable=!0;gateHp={"castle-s":js,"castle-e":js,"castle-w":js,hulao:Or};hulaoActive=!1;hulaoTimer=0;hulaoX=0;hulaoZ=0;playerX=0;playerZ=0;castleFlow=!1;flowActive=!1;castleTitleAlpha=0;castleBannerDefs=[];flowOriginX=0;flowOriginZ=0;flowTargetCell=-1;flowTimer=0;blocked=new Uint8Array(he*he);distance=new Uint16Array(he*he);queue=new Int32Array(he*he);update(t,e,i){this.playerX=t,this.playerZ=e,this.hulaoActive&&(this.hulaoTimer-=i,(this.hulaoTimer<=0||this.breached.has("hulao"))&&this.endHulao());const s=t-Je,n=e-We,r=Math.hypot(s,n);if(this.castleTitleAlpha+=((r<ey?1:0)-this.castleTitleAlpha)*Math.min(1,i*2.4),ne.title.alpha=this.castleTitleAlpha,this.castleFlow?r>ty&&(this.castleFlow=!1):r<J_&&(this.castleFlow=!0,this.flowTimer=0),this.flowActive=this.hulaoActive||this.castleFlow,!this.flowActive)return;this.flowTimer-=i;const o=Math.floor(t/ri),l=Math.floor(e/ri),h=(o&65535)<<16^l&65535;(this.flowTimer<=0||h!==this.flowTargetCell)&&(this.flowTargetCell=h,this.flowTimer=.22,this.rebuildFlow())}reset(){this.breached.clear(),this.breachCount=0,this.gateKills=0,this.hulaoActive=!1,this.hulaoTimer=0,this.castleFlow=!1,this.flowActive=!1,this.castleTitleAlpha=0,ne.title.alpha=0,this.keepSealed=!0,this.castleBreachable=!0,this.gateHp["castle-s"]=js,this.gateHp["castle-e"]=js,this.gateHp["castle-w"]=js,this.gateHp.hulao=Or,ne.allied=!1,ne.flipX=Je,ne.flipZ=We,ne.flipVersion++,this.rebuild()}triggerHulao(t,e,i=45){this.hulaoActive=!0;const s=[e-14,e+14,We+Gi+15,We-Gi-15];let n=s[0];for(const r of s)if(!this.hulaoOverlapsCastle(t,r)){n=r;break}this.hulaoX=t,this.hulaoZ=n,this.hulaoTimer=i,this.gateKills=0,this.gateHp.hulao=Or,this.breached.delete("hulao"),this.rebuild(),this.rebuildFlow()}hulaoOverlapsCastle(t,e){const n=e>=We-Gi-3&&e<=We+Gi+3,r=t+20>=Je-xs-3&&t-20<=Je+xs+3;return n&&r}endHulao(){this.hulaoActive=!1,this.rebuild(),this.revision++}get hulaoOn(){return this.hulaoActive}rebuild(){this.walls.length=0,this.roads.length=0,this.props.length=0,this.landmarks.length=0,this.gates.length=0,this.colliders.length=0,this.buildLandmarks(),this.buildCastle(),this.hulaoActive&&this.buildHulao(),this.castleBannerDefs.length===0&&this.buildBanners(),this.revision++}buildLandmarks(){const t=(s,n,r,o,l)=>{this.props.push({x:s,z:n,kind:r,width:o,height:l}),this.colliders.push({x:s,z:n,hx:o*.5,hz:l*.5,gateKey:null})},e=(s,n,r,o,l,h,c,u,d,f)=>{this.props.push({x:s,z:n,kind:r,width:o,height:l}),this.landmarks.push({x:s,z:n,kind:r,width:o,height:l,name:h,glow:c,gr:u,gg:d,gb:f}),this.colliders.push({x:s,z:n,hx:o*.5,hz:l*.5,gateKey:null})};t(-43,-12,3,2,2.2),t(-37,-12,3,2,2.2),e(-40,-10,6,3,3.4,"수련용 바위 試練の岩",1.7,.8,.8,.8),t(-5,76,3,2.2,2.2),t(5,76,3,2.2,2.2),t(-3,84,11,2.6,4.4),t(3,84,11,2.6,4.4),e(0,80,5,6,4.5,"등나무꽃 신사 藤の花の神社",3,.6,.3,.9);const i=[{x:-90,z:-90,name:"남서부 등나무꽃 부락"},{x:90,z:-90,name:"남동부 등나무꽃 부락"},{x:-100,z:70,name:"북서부 등나무꽃 부락"}];for(const s of i)t(s.x-8,s.z-6,5,5.4,4),t(s.x+8,s.z+6,5,5.4,4),this.houses.push({x:s.x-7,z:s.z-5,w:6,d:5,h:2.8}),this.houses.push({x:s.x+7,z:s.z-5,w:6,d:5,h:2.8}),this.houses.push({x:s.x-7,z:s.z+6,w:6,d:5,h:2.8}),this.houses.push({x:s.x+7,z:s.z+6,w:6,d:5,h:2.8}),t(s.x-12,s.z-6,3,2,2.2),t(s.x-4,s.z-6,3,2,2.2),t(s.x-8,s.z-9,3,4,2.2),t(s.x+4,s.z+6,3,2,2.2),t(s.x+12,s.z+6,3,2,2.2),t(s.x+8,s.z+3,3,4,2.2),t(s.x-12,s.z+10,2,3.2,5.4),e(s.x,s.z,11,2.6,4.4,s.name,1.6,.6,.3,.9);for(let s=0;s<sy;s++){const n=ud[s%ud.length],r=30+s*8.5,o=s*ny,l=Math.cos(o)*r,h=Math.sin(o)*r,c=(l- -40)**2+(h- -10)**2,u=(l-0)**2+(h-80)**2;if(c<400||u<400)continue;let d=!1;for(const f of i)if((l-f.x)**2+(h-f.z)**2<484){d=!0;break}d||(n.glow>0?e(l,h,n.kind,n.width,n.height,n.name,n.glow,n.gr,n.gg,n.gb):t(l,h,n.kind,n.width,n.height))}}buildCastle(){const t=vi,e=Je,i=We,s=xs,n=Gi,r=Nr*.5,o=s-r,l=n-r;this.addWall(e,i-n,s*2,t,!0,!0),this.addWall(e-r-o*.5,i+n,o,t,!0,!0),this.addWall(e+r+o*.5,i+n,o,t,!0,!0),this.gates.push({key:"castle-s",x:e,z:i+n,horizontal:!0,visible:!0}),this.addCastleGateCollider("castle-s",e,i+n,Nr,!0),this.addWall(e+s,i-r-l*.5,t,l,!1,!0),this.addWall(e+s,i+r+l*.5,t,l,!1,!0),this.gates.push({key:"castle-e",x:e+s,z:i,horizontal:!1,visible:!0}),this.addCastleGateCollider("castle-e",e+s,i,Nr,!1),this.addWall(e-s,i-r-l*.5,t,l,!1,!0),this.addWall(e-s,i+r+l*.5,t,l,!1,!0),this.gates.push({key:"castle-w",x:e-s,z:i,horizontal:!1,visible:!0}),this.addCastleGateCollider("castle-w",e-s,i,Nr,!1);const h=jn,c=nn,u=hd*.5,d=h-u;this.addWall(e,i-c,h*2,t,!0,!0),this.addWall(e-u-d*.5,i+c,d,t,!0,!0),this.addWall(e+u+d*.5,i+c,d,t,!0,!0),this.gates.push({key:"castle-keep-s",x:e,z:i+c,horizontal:!0,visible:!0}),this.keepSealed&&this.addCastleGateCollider("castle-keep-s",e,i+c,hd,!0),this.addWall(e+h,i,t,c*2,!1,!0),this.addWall(e-h,i,t,c*2,!1,!0),this.props.push({x:e-6,z:i+n+1,kind:11,width:2.6,height:4.4}),this.props.push({x:e+6,z:i+n+1,kind:11,width:2.6,height:4.4}),this.props.push({x:e-s+2,z:i-n,kind:2,width:3.2,height:5.4}),this.props.push({x:e+s-2,z:i-n,kind:2,width:3.2,height:5.4}),this.houses.push({x:e,z:i-4,w:16,d:14,h:4.5,pavilion:!0,tiers:3}),this.houses.push({x:e-s+4,z:i+n-4,w:8,d:8,h:3.2,pavilion:!0,tiers:2}),this.houses.push({x:e+s-4,z:i+n-4,w:8,d:8,h:3.2,pavilion:!0,tiers:2}),this.houses.push({x:e-s+4,z:i-n+4,w:8,d:8,h:3.2,pavilion:!0,tiers:2}),this.houses.push({x:e+s-4,z:i-n+4,w:8,d:8,h:3.2,pavilion:!0,tiers:2}),this.houses.push({x:e-h+4,z:i+2,w:6,d:9,h:3.2}),this.houses.push({x:e+h-4,z:i+2,w:6,d:9,h:3.2}),this.landmarks.push({x:e,z:i+n+1.2,kind:11,width:2.6,height:4.4,name:"성문 城門",glow:3.2,gr:1.7,gg:.85,gb:.32}),this.landmarks.push({x:e,z:i,kind:2,width:3.4,height:5.6,name:"본성 本城",glow:1.7,gr:1.35,gg:1.05,gb:.5})}buildBanners(){const t=[.6,.11,.1],e=[.56,.42,.14],i=this.castleBannerDefs,s=(c,u,d,f,m,v,g)=>{i.push({x:c,z:u,poleH:d,w:f,h:m,ry:v,r:g[0],g:g[1],b:g[2]})},n=Je,r=We,o=xs,l=Gi;s(n-5.4,r+l,3.6,1.8,1.2,.28,t),s(n+5.4,r+l,3.6,1.8,1.2,-.28,t),s(n+o,r-5.6,3.4,1.7,1.1,.2,t),s(n+o,r+5.6,3.4,1.7,1.1,-.2,t),s(n-o,r-5.6,3.4,1.7,1.1,.2,t),s(n-o,r+5.6,3.4,1.7,1.1,-.2,t),s(n-o+1.6,r-l,3.7,1.6,1.05,.35,t),s(n+o-1.6,r-l,3.7,1.6,1.05,-.35,t),s(n-jn+1.2,r-nn,4.3,2.1,1.4,.35,e),s(n+jn-1.2,r-nn,4.3,2.1,1.4,-.35,e);let h=0;for(const c of this.landmarks)c.kind===5&&(s(c.x+c.width*.42,c.z,3,1.7,1.1,.6+h,t),h+=.7);ne.banners=i,ne.bannerVersion++}buildHulao(){const t=this.hulaoX,e=this.hulaoZ,i=20,s=ms*.5,n=i-s;this.addWall(t-s-n*.5,e,n,vi,!0,!0),this.addWall(t+s+n*.5,e,n,vi,!0,!0),this.gates.push({key:"hulao",x:t,z:e,horizontal:!0,visible:!0}),this.breached.has("hulao")||this.colliders.push({x:t,z:e,hx:s,hz:vi*.5,gateKey:"hulao"}),this.props.push({x:t-i,z:e,kind:10,width:5,height:5}),this.props.push({x:t+i,z:e,kind:10,width:5,height:5})}buildChunk(t,e,i){const s=t*qs,n=e*qs,r=Br(t,e,t,e-1),o=Br(t,e,t+1,e),l=Br(t,e,t,e+1),h=Br(t,e,t-1,e);if(i){this.roads.push({x:s,z:n,width:9,depth:9}),r&&this.roads.push({x:s,z:n-9.75,width:ms,depth:19.5}),l&&this.roads.push({x:s,z:n+9.75,width:ms,depth:19.5}),h&&this.roads.push({x:s-9.75,z:n,width:19.5,depth:ms}),o&&this.roads.push({x:s+9.75,z:n,width:19.5,depth:ms});const u=Number(r)+Number(o)+Number(l)+Number(h),d=bc(t,e),f=s+(d&1?10:-10),m=n+(d&2?9:-9);this.props.push({x:f,z:m,kind:u<=1?5:u===2?6:u===3?11:10,width:u<=1?5.5:3.4,height:u<=1?4.2:4.6})}const c=t===0&&e===0?"origin-north":`${t},${e}:n`;this.addBoundary(s,n-qs*.5,!0,r,i,t===0&&e===0,c),this.addBoundary(s-qs*.5,n,!1,h,i,!1,`${t},${e}:w`)}addBoundary(t,e,i,s,n,r,o){if(!s){this.addWall(t,e,i?qs:vi,i?vi:qs,i,n);return}const l=(qs-ms)*.25,h=ms*.5+l;i?(this.addWall(t-h,e,l*2,vi,!0,n),this.addWall(t+h,e,l*2,vi,!0,n)):(this.addWall(t,e-h,vi,l*2,!1,n),this.addWall(t,e+h,vi,l*2,!1,n)),n&&this.gates.push({key:o,x:t,z:e,horizontal:i,visible:n}),r&&!this.breached.has(o)&&this.colliders.push({x:t,z:e,hx:i?ms*.5:vi*.5,hz:i?vi*.5:ms*.5,gateKey:o})}addWall(t,e,i,s,n,r){this.colliders.push({x:t,z:e,hx:i*.5,hz:s*.5,gateKey:null}),r&&this.walls.push({x:t,z:e,hx:i*.5,hz:s*.5,horizontal:n,visible:r})}addCastleGateCollider(t,e,i,s,n){this.breached.has(t)||this.colliders.push({x:e,z:i,hx:n?s*.5:vi*.5,hz:n?vi*.5:s*.5,gateKey:t})}circleBlocked(t,e,i){for(const s of this.colliders){const n=Math.max(s.x-s.hx,Math.min(t,s.x+s.hx)),r=Math.max(s.z-s.hz,Math.min(e,s.z+s.hz)),o=t-n,l=e-r;if(o*o+l*l<i*i)return!0}return!1}resolveMovement(t,e,i,s,n,r){const o=this.colliders;if(o.length===0)return r.x=i,r.z=s,!1;let l=!1;const h=f=>{let m=i;for(let v=0;v<2;v++)for(const g of o)f<=g.z-g.hz-n||f>=g.z+g.hz+n||m<=g.x-g.hx-n||m>=g.x+g.hx+n||(m=i>=t?g.x-g.hx-n:g.x+g.hx+n,l=!0);return m},c=f=>{let m=s;for(let v=0;v<2;v++)for(const g of o)f<=g.x-g.hx-n||f>=g.x+g.hx+n||m<=g.z-g.hz-n||m>=g.z+g.hz+n||(m=s>=e?g.z-g.hz-n:g.z+g.hz+n,l=!0);return m};let u,d;return Math.abs(s-e)>Math.abs(i-t)?(d=c(t),u=h(d)):(u=h(e),d=c(u)),r.x=u,r.z=d,l&&this.collisionCount++,l}projectWalkable(t,e,i,s){if(!this.circleBlocked(t,e,i))return s.x=t,s.z=e,!1;for(let n=1;n<=5;n++){const r=n*1.1;for(let o=0;o<16;o++){const l=o/16*Math.PI*2,h=t+Math.cos(l)*r,c=e+Math.sin(l)*r;if(!this.circleBlocked(h,c,i))return s.x=h,s.z=c,!0}}return s.x=this.playerX,s.z=this.playerZ,!0}breachGate(t){const e=this.gates.find(s=>s.key===t);if(!e||this.breached.has(t))return null;this.breached.add(t),this.breachCount++,t in this.gateHp&&(this.gateHp[t]=0);const i={...e};return this.rebuild(),this.rebuildFlow(),i}breachNear(t,e,i){for(const s of this.gates){if(this.breached.has(s.key))continue;const n=t-s.x,r=e-s.z;if(!(n*n+r*r>i*i))return this.breachGate(s.key)}return null}gateMaxHp(t){return t==="hulao"?Or:t==="castle-s"||t==="castle-e"||t==="castle-w"?js:-1}damageGate(t,e){return this.gateMaxHp(t)<0||this.breached.has(t)||t.startsWith("castle-")&&!this.castleBreachable||e<=0||(this.gateHp[t]=Math.max(0,this.gateHp[t]-e),this.gateHp[t]>0)?null:this.breachGate(t)}gateHp01(t){if(this.breached.has(t))return-1;const e=this.gateMaxHp(t);return e<=0?-1:this.gateHp[t]/e}nearestSealedGateKey(t,e,i){let s=null,n=i*i;for(const r of this.gates){if(this.gateMaxHp(r.key)<0||this.breached.has(r.key)||r.key.startsWith("castle-")&&!this.castleBreachable)continue;const o=t-r.x,l=e-r.z,h=o*o+l*l;h<n&&(n=h,s=r.key)}return s}recordKillAt(t,e){const i=this.nearestSealedGateKey(t,e,iy);return i?this.damageGate(i,cd):null}primeGate(){this.breached.has("hulao")||(this.gateHp.hulao=cd)}isGateBreached(t="hulao"){return this.breached.has(t)}rebuildFlow(){this.flowOriginX=Math.floor(this.playerX/ri)*ri-he*ri/2,this.flowOriginZ=Math.floor(this.playerZ/ri)*ri-he*ri/2;const t=he*he;this.distance.fill(Ml);for(let o=0;o<he;o++)for(let l=0;l<he;l++){const h=this.flowOriginX+(l+.5)*ri,c=this.flowOriginZ+(o+.5)*ri;this.blocked[o*he+l]=this.circleBlocked(h,c,.58)?1:0}const e=Math.max(0,Math.min(he-1,Math.floor((this.playerX-this.flowOriginX)/ri)));let s=Math.max(0,Math.min(he-1,Math.floor((this.playerZ-this.flowOriginZ)/ri)))*he+e;if(this.blocked[s]){for(let o=0;o<t;o++)if(!this.blocked[o]){s=o;break}}let n=0,r=0;for(this.queue[r++]=s,this.distance[s]=0;n<r;){const o=this.queue[n++],l=o%he,h=o/he|0,c=this.distance[o]+1;l>0&&(r=this.visitFlow(o-1,c,r)),l+1<he&&(r=this.visitFlow(o+1,c,r)),h>0&&(r=this.visitFlow(o-he,c,r)),h+1<he&&(r=this.visitFlow(o+he,c,r))}}visitFlow(t,e,i){return this.blocked[t]||this.distance[t]!==Ml?i:(this.distance[t]=e,this.queue[i]=t,i+1)}flowDirection(t,e,i,s,n){if(!this.flowActive){this.directDirection(t,e,i,s,n);return}const r=Math.floor((t-this.flowOriginX)/ri),o=Math.floor((e-this.flowOriginZ)/ri);if(r<1||o<1||r>=he-1||o>=he-1){this.directDirection(t,e,i,s,n);return}const l=o*he+r;let h=this.distance[l],c=r,u=o;for(let m=-1;m<=1;m++)for(let v=-1;v<=1;v++){if(v===0&&m===0)continue;const g=(o+m)*he+r+v;this.blocked[g]||this.distance[g]>=h||v!==0&&m!==0&&(this.blocked[o*he+r+v]||this.blocked[(o+m)*he+r])||(h=this.distance[g],c=r+v,u=o+m)}if(h===Ml||c===r&&u===o){this.directDirection(t,e,i,s,n);return}const d=this.flowOriginX+(c+.5)*ri,f=this.flowOriginZ+(u+.5)*ri;this.directDirection(t,e,d,f,n)}directDirection(t,e,i,s,n){const r=i-t,o=s-e,l=Math.hypot(r,o)||1;n.x=r/l,n.z=o/l}get activeColliderCount(){return this.colliders.length}get castleFlowActive(){return this.castleFlow}get castleCenterX(){return Je}get castleCenterZ(){return We}insideCastleBounds(t,e,i=0){return t>=Je-xs-i&&t<=Je+xs+i&&e>=We-Gi-i&&e<=We+Gi+i}insideKeepBounds(t,e,i=0){return t>=Je-jn-i&&t<=Je+jn+i&&e>=We-nn-i&&e<=We+nn+i}openKeepGate(){this.keepSealed&&(this.keepSealed=!1,this.rebuild(),this.rebuildFlow())}setCastleBreachable(t){this.castleBreachable=t}castleOuterBreachCount(){let t=0;for(const e of yt.outerGates)this.breached.has(e.key)&&t++;return t}get keepGateSealed(){return this.keepSealed}}const Aa=288,Ta=72,ry={font:'bold 30px "Nanum Myeongjo","Times New Roman",serif',fill:"#f0e0a0",stroke:"rgba(0,0,0,0.92)",strokeW:6,scale:1.35},oy={font:'bold 27px "Nanum Myeongjo","Times New Roman",serif',fill:"#c8ecff",stroke:"rgba(0,0,0,0.88)",strokeW:6,scale:1.18},ly={font:'bold 32px "Nanum Myeongjo","Times New Roman",serif',fill:"#ffe6a2",stroke:"rgba(0,0,0,0.94)",strokeW:7,scale:2.35},hy=new L(18e-5,26e-5,8e-4),cy=.019,Al=[.14,.46,.44],uy=.055,dy=.8,fy=.15;class Tl{slots=[];cap;style;cursor=0;constructor(t,e,i,s){this.cap=e,this.style=i;for(let n=0;n<e;n++){const r=document.createElement("canvas");r.width=Aa,r.height=Ta;const o=r.getContext("2d"),l=new fi(r),h=new ta({map:l,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1}),c=new Oa(h);c.visible=!1,c.renderOrder=s,c.scale.set(i.scale*(Aa/Ta),i.scale,1),t.add(c),this.slots.push({sprite:c,mat:h,tex:l,ctx:o,text:""})}}begin(){this.cursor=0}place(t,e,i,s,n){if(this.cursor>=this.cap)return;const r=this.slots[this.cursor++];if(r.text!==t){r.text=t;const o=r.ctx,l=this.style;o.clearRect(0,0,Aa,Ta),o.font=l.font,o.textAlign="center",o.textBaseline="middle",o.lineWidth=l.strokeW,o.lineJoin="round",o.strokeStyle=l.stroke,o.strokeText(t,Aa/2,Ta/2),o.fillStyle=l.fill,o.fillText(t,Aa/2,Ta/2),r.tex.needsUpdate=!0}r.mat.opacity=n,r.sprite.position.set(e,i,s),r.sprite.visible=!0}end(){for(let t=this.cursor;t<this.cap;t++)this.slots[t].sprite.visible=!1}reset(){for(const t of this.slots)t.sprite.visible=!1;this.cursor=0}}class py{mat;matrices;colors;seeds;colAttr;seedAttr;mesh;cap;w=0;constructor(t,e){this.cap=e;const i=new Jt(1,1);i.rotateX(-Math.PI/2),this.colors=new Float32Array(e*3),this.seeds=new Float32Array(e),this.colAttr=new Wt(this.colors,3),this.seedAttr=new Wt(this.seeds,1),this.colAttr.setUsage(St),this.seedAttr.setUsage(St),i.setAttribute("aColor",this.colAttr),i.setAttribute("aSeed",this.seedAttr),this.mat=new Ot({uniforms:{uTime:{value:0}},vertexShader:`
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
      `,transparent:!0,blending:He,depthWrite:!1,depthTest:!0}),this.mesh=new Se(i,this.mat,e),this.mesh.count=0,this.mesh.frustumCulled=!1,this.mesh.renderOrder=2,this.mesh.instanceMatrix.setUsage(St),this.matrices=this.mesh.instanceMatrix.array,t.add(this.mesh)}begin(){this.w=0}push(t,e,i,s,n,r){if(this.w>=this.cap)return;const o=this.w++,l=o*16,h=i*2;this.matrices[l]=h,this.matrices[l+5]=1,this.matrices[l+10]=h,this.matrices[l+12]=t,this.matrices[l+13]=.06,this.matrices[l+14]=e,this.matrices[l+15]=1;const c=o*3;this.colors[c]=s,this.colors[c+1]=n,this.colors[c+2]=r,this.seeds[o]=(Math.floor(t*3.1+e*7.7)&63)/64}end(t){this.mat.uniforms.uTime.value=t,this.mesh.count=this.w,this.mesh.instanceMatrix.needsUpdate=!0,this.colAttr.needsUpdate=!0,this.seedAttr.needsUpdate=!0}reset(){this.w=0,this.mesh.count=0}}class my{cloth;poles;clothMat;seeds;cols;seedAttr;colAttr;flut;flutAttr;dummy=new Ze;cap;version=-1;flipVersion=-1;lastTime=-1;count=0;anyFlip=!1;bx;bz;baseCol;isRed;trPhase;trDelay;trProg;trFrom;trTo;constructor(t,e=24){this.cap=e;const i=new Jt(1,1,14,3);i.translate(.5,.5,0),this.seeds=new Float32Array(e),this.cols=new Float32Array(e*3),this.flut=new Float32Array(e).fill(1),this.seedAttr=new Wt(this.seeds,1),this.colAttr=new Wt(this.cols,3),this.flutAttr=new Wt(this.flut,1),this.seedAttr.setUsage(St),this.colAttr.setUsage(St),this.flutAttr.setUsage(St),i.setAttribute("aSeed",this.seedAttr),i.setAttribute("aColor",this.colAttr),i.setAttribute("aFlutter",this.flutAttr),this.bx=new Float32Array(e),this.bz=new Float32Array(e),this.baseCol=new Float32Array(e*3),this.isRed=new Uint8Array(e),this.trPhase=new Uint8Array(e),this.trDelay=new Float32Array(e),this.trProg=new Float32Array(e),this.trFrom=new Float32Array(e*3),this.trTo=new Float32Array(e*3),this.clothMat=new Ot({uniforms:{uTime:{value:0},uFogColor:{value:hy.clone()},uFogDensity:{value:cy}},vertexShader:`
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
      `,side:ti,transparent:!1,depthWrite:!0,depthTest:!0}),this.cloth=new Se(i,this.clothMat,e),this.cloth.count=0,this.cloth.frustumCulled=!1,this.cloth.renderOrder=1,this.cloth.instanceMatrix.setUsage(St);const s=new hs(1,1,1);s.translate(0,.5,0);const n=new Mi({color:2366745,toneMapped:!0});this.poles=new Se(s,n,e),this.poles.count=0,this.poles.frustumCulled=!1,this.poles.instanceMatrix.setUsage(St),t.add(this.cloth),t.add(this.poles)}rebuild(t){const e=Math.min(t.length,this.cap);for(let i=0;i<e;i++){const s=t[i];this.dummy.position.set(s.x,0,s.z),this.dummy.rotation.set(0,0,0),this.dummy.scale.set(.16,s.poleH,.16),this.dummy.updateMatrix(),this.poles.setMatrixAt(i,this.dummy.matrix),this.dummy.position.set(s.x,s.poleH-s.h-.15,s.z),this.dummy.rotation.set(0,s.ry,0),this.dummy.scale.set(s.w,s.h,1),this.dummy.updateMatrix(),this.cloth.setMatrixAt(i,this.dummy.matrix),this.seeds[i]=i*.37%1,this.cols[i*3]=s.r,this.cols[i*3+1]=s.g,this.cols[i*3+2]=s.b,this.bx[i]=s.x,this.bz[i]=s.z,this.baseCol[i*3]=s.r,this.baseCol[i*3+1]=s.g,this.baseCol[i*3+2]=s.b,this.isRed[i]=s.r>s.g&&s.r>s.b&&s.g<s.r*.5?1:0,this.trPhase[i]=0,this.flut[i]=1}this.count=e,this.cloth.count=e,this.poles.count=e,this.anyFlip=!1,this.cloth.instanceMatrix.needsUpdate=!0,this.poles.instanceMatrix.needsUpdate=!0,this.seedAttr.needsUpdate=!0,this.colAttr.needsUpdate=!0,this.flutAttr.needsUpdate=!0}update(t){ne.bannerVersion!==this.version&&(this.version=ne.bannerVersion,this.rebuild(ne.banners)),this.clothMat.uniforms.uTime.value=t;const e=this.lastTime<0?0:Math.min(.05,Math.max(0,t-this.lastTime));this.lastTime=t,ne.flipVersion!==this.flipVersion&&(this.flipVersion=ne.flipVersion,this.flipVersion>0&&this.armFlip()),this.anyFlip&&this.advanceFlip(e)}armFlip(){const t=ne.flipX,e=ne.flipZ,i=ne.allied;let s=!1;for(let n=0;n<this.count;n++){if(this.isRed[n]===0||Math.abs(this.bx[n]-yt.cx)>yt.ohx+2.5||Math.abs(this.bz[n]-yt.cz)>yt.ohz+2.5)continue;const r=this.bx[n]-t,o=this.bz[n]-e,l=Math.hypot(r,o);this.trDelay[n]=l*uy,this.trProg[n]=0,this.trPhase[n]=1;const h=n*3;this.trFrom[h]=this.cols[h],this.trFrom[h+1]=this.cols[h+1],this.trFrom[h+2]=this.cols[h+2],i?(this.trTo[h]=Al[0],this.trTo[h+1]=Al[1],this.trTo[h+2]=Al[2]):(this.trTo[h]=this.baseCol[h],this.trTo[h+1]=this.baseCol[h+1],this.trTo[h+2]=this.baseCol[h+2]),s=!0}this.anyFlip=s}advanceFlip(t){let e=!1;for(let i=0;i<this.count;i++){const s=this.trPhase[i];if(s===0)continue;if(e=!0,s===1){if(this.trDelay[i]-=t,this.trDelay[i]>0){this.flut[i]=1;continue}this.trPhase[i]=2,this.trProg[i]=0}this.trProg[i]+=t/dy;const n=this.trProg[i]>=1?1:this.trProg[i],r=n*n*(3-2*n),o=i*3;this.cols[o]=this.trFrom[o]+(this.trTo[o]-this.trFrom[o])*r,this.cols[o+1]=this.trFrom[o+1]+(this.trTo[o+1]-this.trFrom[o+1])*r,this.cols[o+2]=this.trFrom[o+2]+(this.trTo[o+2]-this.trFrom[o+2])*r,this.flut[i]=1+fy*Math.sin(n*Math.PI),n>=1&&(this.trPhase[i]=0,this.flut[i]=1)}this.anyFlip=e,this.colAttr.needsUpdate=!0,this.flutAttr.needsUpdate=!0}resetOwnership(){for(let t=0;t<this.count;t++){const e=t*3;this.cols[e]=this.baseCol[e],this.cols[e+1]=this.baseCol[e+1],this.cols[e+2]=this.baseCol[e+2],this.trPhase[t]=0,this.flut[t]=1}this.anyFlip=!1,this.flipVersion=ne.flipVersion,this.colAttr.needsUpdate=!0,this.flutAttr.needsUpdate=!0}}function gy(a,t,e){const i=document.createElement("canvas");i.width=4,i.height=4;const s=i.getContext("2d");s.fillStyle=`rgb(${a},${t},${e})`,s.fillRect(0,0,4,4);const n=new fi(i);return n.needsUpdate=!0,n}function vy(){const a=document.createElement("canvas");a.width=64,a.height=8;const t=a.getContext("2d"),e=t.createLinearGradient(0,0,64,0);e.addColorStop(0,"rgb(224,180,90)"),e.addColorStop(1,"rgb(200,96,36)"),t.fillStyle=e,t.fillRect(0,0,64,8);const i=new fi(a);return i.needsUpdate=!0,i}const Hr=3,El=.34,fd=3.2;class xy{bg=[];fill=[];cap;w=0;constructor(t,e){this.cap=e;const i=gy(58,12,10),s=vy();for(let n=0;n<e;n++){const r=new ta({map:i,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,opacity:.9}),o=new Oa(r);o.center.set(0,.5),o.scale.set(Hr,El,1),o.renderOrder=13,o.visible=!1,t.add(o),this.bg.push(o);const l=new ta({map:s,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1}),h=new Oa(l);h.center.set(0,.5),h.scale.set(Hr,El,1),h.renderOrder=14,h.visible=!1,t.add(h),this.fill.push(h)}}begin(){this.w=0}push(t,e,i){if(this.w>=this.cap||i<0)return;const s=this.w++,n=t-Hr*.5,r=this.bg[s];r.position.set(n,fd,e),r.visible=!0;const o=i>1?1:i,l=this.fill[s];l.position.set(n,fd,e),l.scale.set(Hr*o,El,1),l.visible=o>.001}end(){for(let t=this.w;t<this.cap;t++)this.bg[t].visible=!1,this.fill[t].visible=!1}reset(){for(let t=0;t<this.cap;t++)this.bg[t].visible=!1,this.fill[t].visible=!1;this.w=0}}class by{mat;matrices;colors;actives;colAttr;actAttr;mesh;cap;w=0;constructor(t,e){this.cap=e;const i=new Jt(1,1);i.rotateX(-Math.PI/2),this.colors=new Float32Array(e*3),this.actives=new Float32Array(e),this.colAttr=new Wt(this.colors,3),this.actAttr=new Wt(this.actives,1),this.colAttr.setUsage(St),this.actAttr.setUsage(St),i.setAttribute("aColor",this.colAttr),i.setAttribute("aActive",this.actAttr),this.mat=new Ot({uniforms:{uTime:{value:0}},vertexShader:`
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
      `,transparent:!0,blending:He,depthWrite:!1,depthTest:!0}),this.mesh=new Se(i,this.mat,e),this.mesh.count=0,this.mesh.frustumCulled=!1,this.mesh.renderOrder=2,this.mesh.instanceMatrix.setUsage(St),this.matrices=this.mesh.instanceMatrix.array,t.add(this.mesh)}begin(){this.w=0}push(t,e,i,s,n,r,o){if(this.w>=this.cap)return;const l=this.w++,h=l*16,c=i*2;this.matrices[h]=c,this.matrices[h+5]=1,this.matrices[h+10]=c,this.matrices[h+12]=t,this.matrices[h+13]=.05,this.matrices[h+14]=e,this.matrices[h+15]=1;const u=l*3;this.colors[u]=s,this.colors[u+1]=n,this.colors[u+2]=r,this.actives[l]=o?1:0}end(t){this.mat.uniforms.uTime.value=t,this.mesh.count=this.w,this.mesh.instanceMatrix.needsUpdate=!0,this.colAttr.needsUpdate=!0,this.actAttr.needsUpdate=!0}reset(){this.w=0,this.mesh.count=0}}class _y{glow;names;hints;titles;banners;gateBars;rings;time=0;guideEl;guideArrow;guideDist;gv=new L;constructor(t,e=24,i=18,s=6){this.glow=new py(t,e),this.names=new Tl(t,i,ry,11),this.hints=new Tl(t,s,oy,12),this.titles=new Tl(t,2,ly,13),this.banners=new my(t),this.gateBars=new xy(t,4),this.rings=new by(t,12),this.guideEl=document.createElement("div"),this.guideEl.style.cssText=["position:fixed","left:0","top:0","display:none","flex-direction:column","align-items:center","gap:2px","pointer-events:none","z-index:19",'font-family:"Nanum Myeongjo","Times New Roman",serif',"will-change:transform,left,top"].join(";"),this.guideArrow=document.createElement("div"),this.guideArrow.style.cssText=["width:0","height:0","border-top:7px solid transparent","border-bottom:7px solid transparent","border-left:26px solid rgba(244,222,150,0.9)","filter:drop-shadow(0 0 4px rgba(0,0,0,0.7))"].join(";"),this.guideDist=document.createElement("div"),this.guideDist.style.cssText="color:rgba(240,224,170,0.85);font-size:12px;letter-spacing:1px;text-shadow:0 1px 3px rgba(0,0,0,0.9);font-variant-numeric:tabular-nums;",this.guideEl.appendChild(this.guideArrow),this.guideEl.appendChild(this.guideDist),document.body.appendChild(this.guideEl)}begin(t){this.time=t,this.glow.begin(),this.names.begin(),this.hints.begin(),this.gateBars.begin(),this.rings.begin(),this.banners.update(t),this.titles.begin();const e=ne.title;e.alpha>.02&&this.titles.place(e.text,e.x,e.y,e.z,Math.min(1,e.alpha))}glowAt(t,e,i,s,n,r){this.glow.push(t,e,i,s,n,r)}name(t,e,i,s){this.names.place(t,e,i,s,1)}hint(t,e,i,s){const n=.62+.38*Math.sin(this.time*5.2);this.hints.place(t,e,i,s,n)}gateBar(t,e,i){this.gateBars.push(t,e,i)}interactRing(t,e,i,s,n,r){this.rings.push(t,e,1.6,i,s,n,r)}guide(t,e,i,s,n,r="rgba(244,222,150,0.9)"){const o=window.innerWidth,l=window.innerHeight;this.gv.set(t,2.2,e),this.gv.project(n);const h=this.gv.z>1;if(!h&&this.gv.x>=-1&&this.gv.x<=1&&this.gv.y>=-1&&this.gv.y<=1){this.guideEl.style.display!=="none"&&(this.guideEl.style.display="none");return}let u=this.gv.x,d=this.gv.y;h&&(u=-u,d=-d);let f=u,m=-d;const v=Math.hypot(f,m)||1;f/=v,m/=v;const g=o*.5,p=l*.5,w=46,A=Math.max(10,g-w),y=Math.max(10,p-w),T=Math.abs(f)<.001?1/0:A/Math.abs(f),M=Math.abs(m)<.001?1/0:y/Math.abs(m),C=Math.min(T,M),b=g+f*C,x=p+m*C,E=Math.atan2(m,f)*180/Math.PI,P=Math.round(Math.hypot(t-i,e-s));this.guideEl.style.display="flex",this.guideEl.style.left=`${b}px`,this.guideEl.style.top=`${x}px`,this.guideEl.style.transform="translate(-50%,-50%)",this.guideArrow.style.transform=`rotate(${E}deg)`,this.guideArrow.style.borderLeftColor=r,this.guideDist.style.color=r,this.guideDist.textContent=`${P}m`}guideOff(){this.guideEl.style.display!=="none"&&(this.guideEl.style.display="none")}end(){this.glow.end(this.time),this.names.end(),this.hints.end(),this.titles.end(),this.gateBars.end(),this.rings.end(this.time)}reset(){this.glow.reset(),this.names.reset(),this.hints.reset(),this.titles.reset(),this.gateBars.reset(),this.rings.reset(),this.guideOff(),this.banners.resetOwnership()}}const yy=.6,My=.4,wy=new L(.14,.46,.44),Sy=new L(.17,.55,.5),Ay=.03,Ty=.045,Ey=1.2;function pd(a,t){const e=t.borderW+.6,i=new Jt((t.halfX+e)*2,(t.halfZ+e)*2);i.rotateX(-Math.PI/2);const s=new Ot({uniforms:{uCenter:{value:a.clone()},uHalf:{value:new vt(t.halfX,t.halfZ)},uColor:{value:t.color.clone()},uFill:{value:t.fill},uLine:{value:t.line},uBorderW:{value:t.borderW},uGateHalf:{value:t.gateHalf},uGateSoft:{value:Ey},uGateMode:{value:t.gateMode},uInnerGap:{value:t.innerGap},uOpacity:{value:0},uTime:{value:0},uFlow:{value:.15}},vertexShader:`
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
    `,transparent:!0,depthWrite:!1,depthTest:!0,side:ti}),n=new we(i,s);return n.position.set(a.x,t.y,a.y),n.renderOrder=0,n.frustumCulled=!1,n.visible=!1,{mesh:n,mat:s}}class Cy{outerMat;innerMat;outer;inner;opacity=0;target=0;time=0;constructor(t){const e=new vt(yt.cx,yt.cz),i=pd(e,{halfX:yt.ohx,halfZ:yt.ohz,color:wy,fill:.13,line:.5,borderW:.7,gateHalf:4.5,gateMode:1,innerGap:0,y:Ay}),s=pd(e,{halfX:yt.ihx,halfZ:yt.ihz,color:Sy,fill:.2,line:.6,borderW:.45,gateHalf:4,gateMode:2,innerGap:1.1,y:Ty});this.outer=i.mesh,this.outerMat=i.mat,this.inner=s.mesh,this.innerMat=s.mat,t.add(this.outer,this.inner)}setActive(t){this.target=t?1:0,t&&(this.outer.visible=!0,this.inner.visible=!0)}update(t){if(this.opacity===0&&this.target===0){this.outer.visible&&(this.outer.visible=!1,this.inner.visible=!1);return}if(this.time+=t,this.opacity!==this.target){const e=this.target>this.opacity?t/yy:t/My;this.opacity=this.target>this.opacity?Math.min(this.target,this.opacity+e):Math.max(this.target,this.opacity-e)}this.outerMat.uniforms.uOpacity.value=this.opacity,this.innerMat.uniforms.uOpacity.value=this.opacity,this.outerMat.uniforms.uTime.value=this.time,this.innerMat.uniforms.uTime.value=this.time,this.opacity===0&&(this.outer.visible=!1,this.inner.visible=!1)}reset(){this.opacity=0,this.target=0,this.time=0,this.outerMat.uniforms.uOpacity.value=0,this.innerMat.uniforms.uOpacity.value=0,this.outer.visible=!1,this.inner.visible=!1}}const Ry=`
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
`,Py=`
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
`;class Fy{mesh;mat;texCache=new Map;life=0;dur=3;constructor(t){const e=new Jt(1,1,48,10);this.mat=new Ot({uniforms:{uTime:{value:0},uReveal:{value:0},uAlpha:{value:0},uColor:{value:new zt(.6,.6,.6)},uTex:{value:this.glyphTexture("群雄","군웅")}},vertexShader:Ry,fragmentShader:Py,transparent:!0,depthTest:!1,depthWrite:!1,side:ti}),this.mesh=new we(e,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=998,this.mesh.visible=!1,this.mesh.scale.set(18,4.4,1),t.add(this.mesh)}trigger(t,e,i){this.mat.uniforms.uColor.value=new zt(i[0],i[1],i[2]),this.mat.uniforms.uTex.value=this.glyphTexture(t,e),this.life=this.dur,this.mesh.visible=!0}update(t,e){if(this.life<=0){this.mesh.visible&&(this.mesh.visible=!1);return}this.life-=t;const i=1-this.life/this.dur;this.mat.uniforms.uTime.value+=t,this.mat.uniforms.uReveal.value=Math.min(1,i/.12);const s=Math.min(1,i/.1),n=Math.min(1,this.life/.6);this.mat.uniforms.uAlpha.value=Math.min(s,n)*.8,this.mesh.position.copy(e.position),this.mesh.quaternion.copy(e.quaternion),this.mesh.translateZ(-24),this.mesh.translateY(2.6)}reset(){this.life=0,this.mesh.visible=!1}get playing(){return this.life>0}glyphTexture(t,e){const i=t+e,s=this.texCache.get(i);if(s)return s;const n=1024,r=256,o=document.createElement("canvas");o.width=n,o.height=r;const l=o.getContext("2d");l.clearRect(0,0,n,r),l.textAlign="center",l.textBaseline="middle",l.shadowColor="rgba(0,0,0,0.85)",l.shadowBlur=10,l.fillStyle="#ffffff",l.font='bold 150px "Nanum Myeongjo","SimSun",serif',l.fillText(t,n/2,r*.42),l.font='bold 52px "Nanum Gothic","Malgun Gothic",sans-serif',l.fillText(e,n/2,r*.82);const h=new fi(o);return h.colorSpace=Me,h.needsUpdate=!0,this.texCache.set(i,h),h}}const Ye=40;class Ly{x=new Float32Array(Ye);z=new Float32Array(Ye);rad=new Float32Array(Ye);life=new Float32Array(Ye);maxLife=new Float32Array(Ye);seed=new Float32Array(Ye);cr=new Float32Array(Ye);cg=new Float32Array(Ye);cb=new Float32Array(Ye);alive=new Uint8Array(Ye);cursor=0;mesh;matArr;colArr;fadeArr;seedArr;colAttr;fadeAttr;seedAttr;constructor(t){const e=new Jt(1,1);e.rotateX(-Math.PI/2),this.colArr=new Float32Array(Ye*3),this.fadeArr=new Float32Array(Ye),this.seedArr=new Float32Array(Ye),this.colAttr=new Wt(this.colArr,3),this.fadeAttr=new Wt(this.fadeArr,1),this.seedAttr=new Wt(this.seedArr,1),this.colAttr.setUsage(St),this.fadeAttr.setUsage(St),this.seedAttr.setUsage(St),e.setAttribute("aColor",this.colAttr),e.setAttribute("aFade",this.fadeAttr),e.setAttribute("aSeed",this.seedAttr);const i=new Ot({vertexShader:`
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
      `,transparent:!0,blending:He,depthWrite:!1,depthTest:!0});this.mesh=new Se(e,i,Ye),this.mesh.instanceMatrix.setUsage(St),this.mesh.frustumCulled=!1,this.mesh.count=0,this.mesh.renderOrder=1,this.matArr=this.mesh.instanceMatrix.array,t.add(this.mesh)}reset(){this.alive.fill(0),this.mesh.count=0}spawn(t,e,i,s,n,r,o=1.6){const l=this.cursor;this.cursor=(this.cursor+1)%Ye,this.x[l]=t,this.z[l]=e,this.rad[l]=i,this.life[l]=o,this.maxLife[l]=o,this.seed[l]=Math.random(),this.cr[l]=s,this.cg[l]=n,this.cb[l]=r,this.alive[l]=1}update(t){for(let e=0;e<Ye;e++)this.alive[e]!==0&&(this.life[e]-=t,this.life[e]<=0&&(this.alive[e]=0))}render(){let t=0;for(let e=0;e<Ye;e++){if(this.alive[e]===0)continue;const i=t*16,s=this.rad[e]*2;this.matArr[i]=s,this.matArr[i+5]=1,this.matArr[i+10]=s,this.matArr[i+12]=this.x[e],this.matArr[i+13]=.04,this.matArr[i+14]=this.z[e],this.matArr[i+15]=1;const n=t*3;this.colArr[n]=this.cr[e],this.colArr[n+1]=this.cg[e],this.colArr[n+2]=this.cb[e];const r=this.life[e]/this.maxLife[e];this.fadeArr[t]=Math.min(1,r*3.5)*r,this.seedArr[t]=this.seed[e],t++}this.mesh.count=t,this.mesh.instanceMatrix.needsUpdate=!0,this.colAttr.needsUpdate=!0,this.fadeAttr.needsUpdate=!0,this.seedAttr.needsUpdate=!0}}const Vf="threesur-lang";let dn=Dy();const Bh=new Set;function Dy(){try{const a=localStorage.getItem(Vf);if(a==="ko"||a==="en")return a}catch{}return Iy()}function Iy(){const a=(navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language])||[];for(const t of a)if(typeof t=="string"&&t.toLowerCase().startsWith("ko"))return"ko";return"en"}function Mt(){return dn}function Uy(a){if(a!==dn){dn=a;try{localStorage.setItem(Vf,a)}catch{}for(const t of Bh)t(a)}}function zy(){return Uy(dn==="ko"?"en":"ko"),dn}function ky(a){return Bh.add(a),()=>Bh.delete(a)}function it(a,t){let i=(Cl[dn]??Cl.ko)[a]??Cl.ko[a]??a;if(t)for(const s in t)i=i.replace(new RegExp(`\\{${s}\\}`,"g"),String(t[s]));return i}function Ae(a,t,e){return dn==="ko"?e:Ny[a][t]??e}const Cl={ko:{titleKor:"멸 귀 무 쌍",titleTag:"귀멸 서바이버 · 단 한 명의 대원으로 혈귀를 베어라",start:"출전 出戰",shop:"귀살대 본부 鬼殺隊",codex:"전공 戰功",back:"뒤로 ‹",controlsHint:"<b>WASD / 화살표</b> 이동 · <b>Space</b> 무쌍난무 · <b>Esc</b> 일시정지<br>모바일: 좌측 가상 조이스틱 + 우측 무쌍 버튼",selectTitle:"대원 선택",weaponLabel:"무기",unlockAtShop:"본부에서 해금",hudKills:"처치 {n}",hudKillsLabel:"처치",hudLevel:"Lv {n}",hudCombo:"連 킬",musouHint:"무쌍 無雙 — Space",resultWin:"무한성 함락",resultLose:"전사",rsSurvive:"생존",rsKills:"처치",rsMaxCombo:"최대 콤보",rsLevel:"레벨",rsHero:"대원",rsBossKill:"보스 토벌",goldEarned:"획득 골드",goldBonus:"(콤보 보너스 +{n})",baseBalance:"본부 잔액 ⟡ {n}",retry:"다시 출전 再出戰",share:"전과 공유 戰果",toTitle:"본부로 鬼殺隊",newRecord:"신기록",achGet:"업적 달성!",heroUnlockGet:"새 대원 해금!",shopTitle:"귀살대 본부",goldHeld:"보유 골드 ⟡ {n}",tabUpgrade:"강화 强化",tabCodex:"전공 戰功",upgradeBuy:"강화",unlockBuy:"해금",lvbuUnlockName:"쿄쥬로 해금",lvbuUnlockDesc:"화염의 호흡 · 공격력 +25%(받는 피해 +25%) · 화염무쌍",maxed:"MAX",recSurvive:"최고 생존",recKills:"최다 처치",recLevel:"최고 레벨",recCombo:"최대 콤보",bossCodex:"보스 토벌 기록",slain:"토벌 완료",notSlain:"미토벌",achSection:"업적 業績",levelupTitle:"레벨 업 — 하나를 택하라",reroll:"리롤 (50G) · 보유 {n}G",levelupHint:"1 · 2 · 3 키로도 선택",tagNew:"신규",tagUp:"강화",tagMax:"최대",tagReward:"보상",tagCurse:"저주",catWeapon:"무기",catPassive:"패시브",catRelic:"저주 유물",rewardHealName:"재정비",rewardHealDesc:"체력 50% 회복",rewardGoldName:"군자금",rewardGoldDesc:"골드 +200",rewardXpName:"병법 수련",rewardXpDesc:"경험치 대량 획득",pauseTitle:"일시정지",resume:"계속 繼續",abandon:"포기 抛棄",resumeHint:"Esc 로도 계속",bannerAppear:"등장",bannerHulao:"무한성 출현",bannerAlly:"원군",bannerSupply:"보급 확보",bannerHulaoBreak:"무한성 성벽 붕괴",bannerEvolve:"진화!",bannerTreasure:"보물 寶物",bannerReward:"보상 報償",bannerEndless:"무한 전투"},en:{titleKor:"MEILGWI MUSOU",titleTag:"Demon Slayer Survivor · One slayer, ten thousand demons",start:"Sortie 出陣",shop:"HQ 鬼殺隊",codex:"Records 戰功",back:"Back ‹",controlsHint:"<b>WASD / Arrows</b> Move · <b>Space</b> Musou · <b>Esc</b> Pause<br>Mobile: left virtual stick + right Musou button",selectTitle:"Choose Your Slayer",weaponLabel:"Weapon",unlockAtShop:"Unlock at HQ",hudKills:"Kills {n}",hudKillsLabel:"Kills",hudLevel:"Lv {n}",hudCombo:"Combo",musouHint:"Musou 無雙 — Space",resultWin:"Mugen Castle Captured",resultLose:"Fallen in Battle",rsSurvive:"Survived",rsKills:"Kills",rsMaxCombo:"Max Combo",rsLevel:"Level",rsHero:"Slayer",rsBossKill:"Bosses Slain",goldEarned:"Gold Earned",goldBonus:"(combo bonus +{n})",baseBalance:"HQ balance ⟡ {n}",retry:"Sortie Again 再出陣",share:"Share 戰果",toTitle:"To HQ 鬼殺隊",newRecord:"RECORD",achGet:"Achievement unlocked!",heroUnlockGet:"New slayer unlocked!",shopTitle:"HQ",goldHeld:"Gold ⟡ {n}",tabUpgrade:"Upgrades 强化",tabCodex:"Records 戰功",upgradeBuy:"Upgrade",unlockBuy:"Unlock",lvbuUnlockName:"Unlock Kyojuro",lvbuUnlockDesc:"Flame Breathing · Attack +25% (damage taken +25%) · Flame Musou",maxed:"MAX",recSurvive:"Best Survival",recKills:"Most Kills",recLevel:"Best Level",recCombo:"Max Combo",bossCodex:"Bosses Slain",slain:"Slain",notSlain:"Not yet",achSection:"Achievements 業績",levelupTitle:"Level Up — Choose One",reroll:"Reroll (50G) · {n}G held",levelupHint:"Or press 1 · 2 · 3",tagNew:"NEW",tagUp:"UP",tagMax:"MAX",tagReward:"REWARD",tagCurse:"CURSE",catWeapon:"Weapon",catPassive:"Passive",catRelic:"Cursed Relic",rewardHealName:"Regroup",rewardHealDesc:"Restore 50% HP",rewardGoldName:"War Funds",rewardGoldDesc:"Gold +200",rewardXpName:"War Study",rewardXpDesc:"Gain a large amount of XP",pauseTitle:"Paused",resume:"Resume 繼續",abandon:"Abandon 抛棄",resumeHint:"Esc to resume",bannerAppear:"appears",bannerHulao:"Mugen Castle appears",bannerAlly:"Reinforcement",bannerSupply:"Supplies Secured",bannerHulaoBreak:"Mugen Castle Wall Breached",bannerEvolve:"Evolved!",bannerTreasure:"Treasure 寶물",bannerReward:"Reward 報償",bannerEndless:"Endless Battle"}},Ny={hero:{zhaoyun:"Tanjiro",guanyu:"Giyu",zhangfei:"Nezuko",zhugeliang:"Tamayo",huangzhong:"Shinobu",sunshangxiang:"Akaza",lvbu:"Kyojuro",yuanshao:"Doma",dongzhuo:"Enmu"},weapon:{spear:"Water Breathing",guandao:"Lull / Calm Water",zhangba:"Beast Breathing",baiyu:"Enchanting Blood",crossbow:"Insect Breathing",fire:"Exploding Blood",thunder:"Thunder Breathing",orbit:"Wisteria Ward",halberd:"Destructive Death",cavalry:"Flame Breathing",caltrop:"Wisteria Thorns",poison:"Wisteria Miasma",twinring:"Twin Nichirin Rings",zhanma:"Water Flowing Slash",bamen:"Wisteria Barrier",chibi:"Exploding Firestorm",tianfa:"Thunder Flash Speed",yuanrong:"Wisteria Sting Storm"},passive:{horseshoe:"Total Concentration",armor:"Nichirin Tempering",warbook:"Breathing Scroll",wine:"Wisteria Medicine",seal:"Hashira Crest",censer:"Wisteria Sachet",talismanho:"Warding Charm",vermilion:"Slayer Corps Banner"},upgrade:{attack:"Breathing Training",health:"Demon Blood Resistance",speed:"Agility Training",pickup:"Wisteria Gathering",cooldown:"Breathing Mastery",startLevel:"Veteran Slayer",revive:"Undying Will"}},Va={spear:"Piercing water slash forward",guandao:"Wide fan-shaped calm water slash",zhangba:"Dual front & rear beast claw thrust",baiyu:"Homing hallucinatory blood blossom",crossbow:"Auto poison needle rapid-fire",fire:"Exploding blood flame underfoot",thunder:"Thunderclap lightning strike overhead",orbit:"Orbiting wisteria wards",halberd:"360° destructive compass shockwave",cavalry:"Raging flame tiger charge",zhanma:"Launches spinning water slashes",bamen:"Piercing wisteria barrier storm",chibi:"Advancing blood explosion inferno",tianfa:"Thunderclap chain flash",yuanrong:"Omnidirectional poison needle storm"},no={first_win:{name:"Mugen Castle Conqueror",desc:"First victory (survive 10:00)"},slay_lvbu:{name:"Upper Rank Slayer",desc:"Defeat the final boss Kokushibo"},thousand_cut:{name:"Thousand-Demon Slayer",desc:"Slay 1,000 demons in a single run"},five_hundred_cut:{name:"Demon Hunter",desc:"Slay 500 demons in a single run"},invincible:{name:"See-Through World",desc:"Take no hit for 3 minutes"},master_smith:{name:"Swordsmith Prodigy",desc:"3+ evolved weapons in one run"},combo_master:{name:"Breathing Virtuoso",desc:"Exceed a 500 max combo"},veteran:{name:"Hashira Candidate",desc:"10,000 cumulative demon kills"},all_bosses:{name:"Twelve Kizuki Hunter",desc:"Slay all three bosses in one run"},high_level:{name:"Marked Slayer",desc:"Reach level 40"},endless_walker:{name:"Muzan Hunter",desc:"Survive 15 min in endless mode"},survivor:{name:"Corps Veteran",desc:"Survive 5+ minutes"}},Oy={zhaoyun:"Move speed +10%",guanyu:"Attack +15%",zhangfei:"Max HP +25%",zhugeliang:"Cooldown -10%",huangzhong:"Range & projectile speed +20%",sunshangxiang:"Range & projectile speed +15%, move speed +10%",lvbu:"Attack +25%, damage taken +25%"},By={zhaoyun:"Musou · Hinokami Kagura — 8-way invincible sun dash",guanyu:"Musou · Lull — giant water whirlpool slash",zhangfei:"Musou · Exploding Blood — full-screen blood shockwave",zhugeliang:"Musou · Enchanting Blood Art — hallucination storm",huangzhong:"Musou · Dance of the Centipede — omnidirectional needles",sunshangxiang:"Musou · Destructive Death Compass — shockwave storm",lvbu:"Musou · Flame Tiger — steerable invincible flame charge"},Wf=[{id:"horseshoe",name:"전집중 호흡",hanja:"全集中",maxLevel:5,desc:a=>Mt()==="en"?`Move speed +${a*8}%`:`이동속도 +${a*8}%`,apply:(a,t)=>{a.speedMul*=1+.08*t}},{id:"armor",name:"일륜도 단련",hanja:"鍛錬",maxLevel:5,desc:a=>Mt()==="en"?`Damage taken -${a*8}%`:`받는 피해 -${a*8}%`,apply:(a,t)=>{a.dmgReduction=Math.min(.8,a.dmgReduction+.08*t)}},{id:"warbook",name:"호흡 비결서",hanja:"呼吸秘卷",maxLevel:5,desc:a=>Mt()==="en"?`XP +${a*8}%`:`경험치 +${a*8}%`,apply:(a,t)=>{a.xpMul*=1+.08*t}},{id:"wine",name:"등나무꽃 약탕",hanja:"藤花湯",maxLevel:5,desc:a=>Mt()==="en"?`Max HP +${a*10}%, regen ${(a*.8).toFixed(1)}/s`:`최대체력 +${a*10}%, 재생 ${(a*.8).toFixed(1)}/s`,apply:(a,t)=>{a.maxHpMul*=1+.1*t,a.hpRegen+=.8*t}},{id:"seal",name:"주의 인장",hanja:"柱印",maxLevel:5,desc:a=>Mt()==="en"?`Gold gain +${a*10}%`:`골드 획득 +${a*10}%`,apply:(a,t)=>{a.goldMul*=1+.1*t}},{id:"censer",name:"등나무꽃 향낭",hanja:"藤香囊",maxLevel:5,desc:a=>Mt()==="en"?`Pickup radius +${a*15}%`:`픽업 반경 +${a*15}%`,apply:(a,t)=>{a.pickupMul*=1+.15*t}},{id:"talismanho",name:"수호 부적",hanja:"護符",maxLevel:5,desc:a=>Mt()==="en"?`Cooldown -${(100*(1-Math.pow(.95,a))).toFixed(0)}%`:`쿨다운 -${(100*(1-Math.pow(.95,a))).toFixed(0)}%`,apply:(a,t)=>{a.cooldownMul*=Math.pow(.95,t)}},{id:"vermilion",name:"귀살대 군기",hanja:"鬼殺旗",maxLevel:3,rare:!0,desc:a=>Mt()==="en"?`Projectiles +${a}`:`투사체 +${a}`,apply:(a,t)=>{a.projectileBonus+=t}}],Wi={};for(const a of Wf)Wi[a.id]=a;const Xf=[{id:"seven_star",name:"독낫",nameEn:"Gyutaro's Sickle",hanja:"毒鎌",desc:"공격력 +40%, 최대 체력 -30%",descEn:"Attack +40%, Max HP -30%",apply:a=>{a.damageMul*=1.4,a.maxHpMul*=.7}},{id:"bronze_decree",name:"무한성 비와 열쇠",nameEn:"Mugen Castle Key",hanja:"無限城琵琶鍵",desc:"골드 획득 +100%, 이동속도 -15%",descEn:"Gold gain +100%, Move speed -15%",apply:a=>{a.goldMul*=2,a.speedMul*=.85}},{id:"ox_fan",name:"금강엽 부채",nameEn:"Doma's Golden Fan",hanja:"鐵扇",desc:"쿨다운 -25%, 픽업 반경 -50%",descEn:"Cooldown -25%, Pickup radius -50%",apply:a=>{a.cooldownMul*=.75,a.pickupMul*=.5}},{id:"poison_pill",name:"푸른 피안화 가루",nameEn:"Blue Spider Lily Powder",hanja:"彼岸花",desc:"공격력 +30%, 받는 피해 +25%",descEn:"Attack +30%, Damage taken +25%",apply:a=>{a.damageMul*=1.3,a.dmgTakenMul*=1.25}},{id:"blood_banner",name:"희귀혈 주머니",nameEn:"Marechi Blood Pouch",hanja:"稀血",desc:"투사체 +2, 체력 재생 정지, 최대 체력 -15%",descEn:"Projectiles +2, HP regen off, Max HP -15%",apply:a=>{a.projectileBonus+=2,a.hpRegen=0,a.maxHpMul*=.85}},{id:"greedy_seal",name:"상현의 인장",nameEn:"Upper Rank Crest",hanja:"上弦印",desc:"경험치 +50%, 광역 -25%",descEn:"XP +50%, Area -25%",apply:a=>{a.xpMul*=1.5,a.areaMul*=.75}}],_c={};for(const a of Xf)_c[a.id]=a;function Hy(a){return Mt()==="en"?a.nameEn:a.name}function Gy(a){return Mt()==="en"?a.descEn:a.desc}function Vy(a,t){const e=Xf.filter(i=>!t.includes(i.id));return e.length===0?null:e[Math.floor(a()*e.length)]}const Wa=[{id:"zhangba_mao",name:"이노스케의 이도",nameEn:"Inosuke's Serrated Blades",hanja:"雙刀",desc:"공격력 +20%, 광역 +15%",descEn:"Attack +20%, Area +15%",lore:"이노스케가 멧돼지 탈을 쓰고 난전에서 거칠게 휘두르는 톱니 모양의 이도. 거친 성정만큼이나 무자비하게 살을 뜯어낸다.",loreEn:"A pair of serrated Nichirin blades Inosuke swings wildly. True to his beastly nature, they tear flesh apart mercilessly.",apply:a=>{a.damageMul*=1.2,a.areaMul*=1.15}},{id:"qinggang_jian",name:"탄지로의 일륜도",nameEn:"Tanjiro's Black Nichirin Sword",hanja:"日輪刀",desc:"공격력 +18%, 사거리·투사체 속도 +15%",descEn:"Attack +18%, Range & projectile speed +15%",lore:"탄지로가 쥐는 검은색 일륜도. 물의 호흡과 해의 호흡을 오가며 혈귀를 베어 가를 때 검신이 칠흑의 빛을 발한다.",loreEn:"A jet-black Nichirin sword held by Tanjiro. It glows with an abyssal sheen when channeling water or sun breathing forms.",apply:a=>{a.damageMul*=1.18,a.rangeMul*=1.15}},{id:"wanshi_gong",name:"젠이츠의 일륜도",nameEn:"Zenitsu's Nichirin Sword",hanja:"雷刀",desc:"사거리·투사체 속도 +30%",descEn:"Range & projectile speed +30%",lore:"젠이츠의 황금빛 일륜도. 벽력일섬의 번개 기운이 실려 순식간에 시공간을 가로지르는 신속의 참격을 퍼붓는다.",loreEn:"A golden Nichirin sword representing Thunder Breathing. Infused with lightning speed, it flashes through the battlefield.",apply:a=>{a.rangeMul*=1.3}},{id:"bao_dao",name:"렌고쿠의 코등이",nameEn:"Kyojuro's Flame Tsuba",hanja:"炎鍔",desc:"공격력 +28%",descEn:"Attack +28%",lore:"염주 렌고쿠 쿄쥬로가 쓰던 불꽃 모양 코등이. 타오르는 마음가짐과 호흡을 고조시켜 공격의 파괴력을 끌어올린다.",loreEn:"The flame-shaped sword guard left by Kyojuro. It fuels the slayers heart, heavily amplifying breathing power.",apply:a=>{a.damageMul*=1.28}},{id:"tietai_gong",name:"기유의 일륜도",nameEn:"Giyu's Nichirin Sword",hanja:"水刀",desc:"투사체 +1, 공격력 +10%",descEn:"Projectiles +1, Attack +10%",lore:"수주 토미오카 기유가 쥐는 청색 일륜도. 고요하고 물러서지 않는 신념의 검격으로 잔잔한 파동을 퍼트린다.",loreEn:"The blue Nichirin sword held by Giyu. It cuts with the absolute stillness of deep water, creating smooth shockwaves.",apply:a=>{a.projectileBonus+=1,a.damageMul*=1.1}},{id:"shuangtie_ji",name:"텐겐의 대형 이도",nameEn:"Tengen's Cleavers",hanja:"音爆刀",desc:"투사체 +1, 광역 +12%",descEn:"Projectiles +1, Area +12%",lore:"음주 우즈이 텐겐의 체인으로 연결된 대형 이도. 소리의 호흡과 폭발성 참격을 흩날려 넓은 범위를 날려버린다.",loreEn:"Massive dual cleavers connected by a chain. Used by Tengen to trigger roaring explosions across a wide sweep.",apply:a=>{a.projectileBonus+=1,a.areaMul*=1.12}},{id:"lian_nu",name:"사네미의 일륜도",nameEn:"Sanemi's Nichirin Sword",hanja:"風刀",desc:"쿨다운 -20%",descEn:"Cooldown -20%",lore:"풍주 시나즈가와 사네미의 녹색 일륜도. 거친 폭풍 같은 궤적으로 몰아치는 난무가 쉴 새 없이 휘몰아친다.",loreEn:"A green Nichirin sword representing Wind Breathing. Its tempestuous attacks slice in rapid, non-stop successions.",apply:a=>{a.cooldownMul*=.8}},{id:"mingguang_kai",name:"귀살대 대원복",nameEn:"Demon Slayer Uniform",hanja:"隊服",desc:"받는 피해 -22%",descEn:"Damage taken -22%",lore:"귀살대원들이 착용하는 칠흑의 대원복. 특수한 가공을 거쳐 혈귀의 엄니로부터 대원을 보호하며 가볍고 튼튼하다.",loreEn:"Special pitch-black uniform worn by members of the Demon Slayer Corps, offering protection against demonic fangs.",apply:a=>{a.dmgTakenMul*=.78}},{id:"sunzi_bingfa",name:"호흡의 비기",nameEn:"Breathing Secrets",hanja:"呼吸秘卷",desc:"쿨다운 -15%, 광역 +10%",descEn:"Cooldown -15%, Area +10%",lore:"역대 주들의 호흡 비결과 전투 비기가 적힌 두루마리. 읽은 자는 싸우기 전에 칼끝이 닿을 궤적의 틈을 포착한다.",loreEn:"Scrolls detailing ancient breathing mastery. Studying it sharpens focus and reveals the thread of interval.",apply:a=>{a.cooldownMul*=.85,a.areaMul*=1.1}},{id:"taigong_bingfa",name:"전집중 호흡법",nameEn:"Total Concentration Guide",hanja:"全集中法",desc:"경험치 +35%",descEn:"XP +35%",lore:"하루 종일 가슴에 산소를 가득 채우는 전집중 호흡의 해설서. 체내 에너지를 한계까지 끌어올려 성장 속도를 가속한다.",loreEn:"A master handbook on maintaining oxygen intake 24/7. It boosts cellular metabolism, hastening experience gain.",apply:a=>{a.xpMul*=1.35}},{id:"heshi_bi",name:"등나무꽃 주머니",nameEn:"Wisteria Sachet",hanja:"藤香囊",desc:"골드 +60%, 픽업 반경 +20%",descEn:"Gold +60%, Pickup radius +20%",lore:"혈귀들이 기피하는 등나무꽃 진액이 가득 든 향나무 주머니. 정신을 맑게 다스리고 장내를 정화하는 가호가 내린다.",loreEn:"A wooden sachet filled with wisteria essence. Its aroma cleanses the air, drawing gold and items closer.",apply:a=>{a.goldMul*=1.6,a.pickupMul*=1.2}},{id:"yu_jue",name:"오니의 곡옥",nameEn:"Demonic Magatama",hanja:"鬼勾玉",desc:"체력 재생 +1.5/s, 최대 체력 +12%",descEn:"HP regen +1.5/s, Max HP +12%",lore:"오니의 왕의 세포가 깃든 차가운 푸른색 곡옥. 등골이 서늘해지는 저주가 흐르지만 육체 치유 능력을 경이롭게 돕는다.",loreEn:"A freezing blue magatama containing Muzan's cells. It runs cold but acts as a powerful regenerative catalyst.",apply:a=>{a.hpRegen+=1.5,a.maxHpMul*=1.12}},{id:"shuo",name:"귀살대 보급마",nameEn:"Slayer Steed",hanja:"軍馬",desc:"공격력 +15%, 이동속도 +10%",descEn:"Attack +15%, Move speed +10%",lore:"기병이 타던 사나운 명마. 렌고쿠 가문 등에서 애용하던 말로 전장의 흙바닥을 힘차게 달리며 돌진력을 더한다.",loreEn:"A warhorse bred for rapid responses. It speeds up exploration and gives extra strength to charges.",apply:a=>{a.damageMul*=1.15,a.speedMul*=1.1}},{id:"huanshou_dao",name:"시노부의 하오리",nameEn:"Shinobu's Haori",hanja:"羽織",desc:"쿨다운 -10%, 공격력 +10%",descEn:"Cooldown -10%, Attack +10%",lore:"나비 날개 문양이 새겨진 가벼운 하오리. 바람을 가를 때마다 독침이 더 날카롭고 유연하게 사방으로 퍼진다.",loreEn:"A lightweight haori adorned with butterfly wing designs. It helps poison darts slip through the air much faster.",apply:a=>{a.cooldownMul*=.9,a.damageMul*=1.1}},{id:"jiao_gong",name:"교메이의 염주",nameEn:"Gyomei's Beads",hanja:"數珠",desc:"사거리·투사체 속도 +20%, 쿨다운 -8%",descEn:"Range & projectile speed +20%, Cooldown -8%",lore:"암주 히메지마 교메이의 무겁고 거대한 염주. 눈먼 자의 직감을 벼려내어 보이지 않는 장막 너머까지 거리를 넓힌다.",loreEn:"Heavy iron prayer beads belonging to Gyomei. They enhance focus, extending range beyond visual limits.",apply:a=>{a.rangeMul*=1.2,a.cooldownMul*=.92}},{id:"liangdang_kai",name:"귀살대 나무나막신",nameEn:"Wooden Geta",hanja:"木屐",desc:"받는 피해 -10%, 이동속도 +8%",descEn:"Damage taken -10%, Move speed +8%",lore:"대원들이 즐겨 신는 튼튼한 오동나무 나막신. 디딤발이 가벼워져 지면의 습격과 칼날을 사뿐하게 회피한다.",loreEn:"Sturdy wooden geta that lighten the slayers steps, making evasion and movement agile.",apply:a=>{a.dmgReduction=Math.min(.8,a.dmgReduction+.1),a.speedMul*=1.08}},{id:"zha_jia",name:"오니의 강갑",nameEn:"Demon Hide",hanja:"鬼皮",desc:"받는 피해 -12%, 최대 체력 +8%",descEn:"Damage taken -12%, Max HP +8%",lore:"강력한 오니를 사냥한 후 얻은 질긴 가죽들을 겹쳐 덧댄 갑옷 조각. 오니의 살점처럼 단단히 달라붙어 방호를 제공한다.",loreEn:"Armor fragments pieced together from tough demon hide. It acts like a secondary, resilient skin.",apply:a=>{a.dmgReduction=Math.min(.8,a.dmgReduction+.12),a.maxHpMul*=1.08}},{id:"zishou_jinyin",name:"등나무꽃 신사가마",nameEn:"Shrine Palanquin",hanja:"神輿",desc:"골드 +35%, 경험치 +15%",descEn:"Gold +35%, XP +15%",lore:"등나무꽃 신사를 모시는 영험한 의례용 가마. 축제의 북소리가 전장의 마장을 물리치고 대원들에게 자비와 수련의 축복을 싣는다.",loreEn:"A sacred shrine palanquin used in ceremonies. Its music dispels evil, granting coins and wisdom to slayers.",apply:a=>{a.goldMul*=1.35,a.xpMul*=1.15}},{id:"yin_yin",name:"우부야시키의 은인",nameEn:"Ubuyashiki Crest",hanja:"産屋敷印",desc:"골드 +25%, 최대 체력 +8%",descEn:"Gold +25%, Max HP +8%",lore:"등나무꽃 문양이 음각으로 조각된 은빛 결속의 인장. 가문의 가호와 영애가 대원들의 가슴속에 끝없는 생명력을 메운다.",loreEn:"A silver crest engraved with the wisteria mark. It instills honor and resilience in those who carry it.",apply:a=>{a.goldMul*=1.25,a.maxHpMul*=1.08}},{id:"jiuzhang_suanshu",name:"무잔의 피병",nameEn:"Blood of Muzan",hanja:"無惨血",desc:"픽업 반경 +30%, 경험치 +15%",descEn:"Pickup radius +30%, XP +15%",lore:"키부츠지 무잔의 저주받은 피가 극미량 든 시약병. 육체의 모든 감각과 오감을 폭발적으로 열어 자력과 흡수력을 넓힌다.",loreEn:"A vial holding a drop of Muzan's blood. It expands the senses, dramatically increasing magnet and XP intake.",apply:a=>{a.pickupMul*=1.3,a.xpMul*=1.15}},{id:"sima_fa",name:"수련용 목도",nameEn:"Training Bokken",hanja:"木刀",desc:"광역 +12%, 최대 체력 +10%",descEn:"Area +12%, Max HP +10%",lore:"사콘지의 폭포 수련장 등에서 끊임없이 휘두르던 무거운 참나무 목도. 몸에 각인된 단련의 궤적이 칼날을 한층 두껍게 뿜어낸다.",loreEn:"A heavy oak sword used in rigorous training. The callused hands it leaves produce massive strike arcs.",apply:a=>{a.areaMul*=1.12,a.maxHpMul*=1.1}},{id:"bingfa_chaolu",name:"귀살대 임무일지",nameEn:"Slayer Chronicles",hanja:"任務日誌",desc:"경험치 +20%, 광역 +10%",descEn:"XP +20%, Area +10%",lore:"임무를 거쳐 간 수많은 대원들의 전투 경험과 혈귀의 기믹이 기록된 책자. 선배들의 피맺힌 조언은 실전을 거칠 때 큰 격을 가르친다.",loreEn:"Chronicles logging combat details against various demons. The notes left by fallen elders teach valuable combat insight.",apply:a=>{a.xpMul*=1.2,a.areaMul*=1.1}},{id:"baiyu_pei",name:"액막이 가면",nameEn:"Ward Mask",hanja:"厄除面",desc:"체력 재생 +1/s, 이동속도 +8%",descEn:"HP regen +1/s, Move speed +8%",lore:"사콘지가 제자들의 액운을 막기 위해 깎아 만든 여우 모양 목가면. 재앙을 비껴가고 착용자의 상처를 부드럽게 감싸 치료한다.",loreEn:"A hand-carved fox mask given by Sakonji to ward off misfortune. It heals wounds and lightens the steps.",apply:a=>{a.hpRegen+=1,a.speedMul*=1.08}},{id:"shuanghuan_pei",name:"네즈코의 재갈",nameEn:"Nezuko's Bamboo Gag",hanja:"竹筒",desc:"쿨다운 -12%, 사거리·투사체 속도 +10%",descEn:"Cooldown -12%, Range & projectile speed +10%",lore:"네즈코가 입에 물고 있는 곧은 대나무 재갈. 인간을 공격하지 않고 이성을 유지하겠다는 강력한 절제와 다짐의 물건.",loreEn:"The bamboo gag Nezuko wears in her mouth. It stands as a symbol of restraint, calming thoughts and cooling skills.",apply:a=>{a.cooldownMul*=.88,a.rangeMul*=1.1}}],go={};for(const a of Wa)go[a.id]=a;function qf(a){return Mt()==="en"?a.nameEn:a.name}function jf(a){return Mt()==="en"?a.descEn:a.desc}function Wy(a){return Mt()==="en"?a.loreEn:a.lore}function Xy(a){return Wa.filter(t=>a.masterworks.includes(t.id))}function qy(a,t){return t.masterworks.includes(a)}function md(a,t,e){const i=Wa.filter(s=>!t.includes(s.id));for(let s=i.length-1;s>0;s--){const n=Math.floor(a()*(s+1)),r=i[s];i[s]=i[n],i[n]=r}return i.slice(0,Math.max(0,e))}const jy=8,$y=.5,Zy=6,Ky=.5,Yy=.16,Qy=.8,Jy=3.8,tM=.24,eM=.26,gd={KeyW:{x:0,z:-1},ArrowUp:{x:0,z:-1},KeyS:{x:0,z:1},ArrowDown:{x:0,z:1},KeyA:{x:-1,z:0},ArrowLeft:{x:-1,z:0},KeyD:{x:1,z:0},ArrowRight:{x:1,z:0}},iM=["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowLeft","ArrowDown","ArrowRight"];class sM{x=0;z=0;hp;maxHp;stats;hero;meta=null;relicIds=[];masterworkIds=[];curPassives={};buffAttackT=0;buffSpeedT=0;buffMusouT=0;faceX=0;faceZ=1;invuln=0;musouInvuln=!1;flash=0;hurtT=0;hurtFlash(){this.hurtT=.32}dir=0;frame=0;animTime=0;moving=!1;vx=0;vz=0;dashT=0;dashCd=0;ddx=0;ddz=1;time=0;lastTapCode="";lastTapAt=-1;sqSX=1;sqSY=1;justDashed=!1;dashDirX=0;dashDirZ=1;knbX=0;knbZ=0;driftCharge=0;driftSteerX=0;driftSteerZ=1;boostT=0;boostMul=1;boostDirX=0;boostDirZ=1;boostTier=0;justSkid=!1;justBoost=!1;nudge(t,e,i){this.knbX+=t*i,this.knbZ+=e*i}get dashing(){return this.dashT>0}get boosting(){return this.boostT>0}get velX(){return this.vx}get velZ(){return this.vz}get speedFrac(){return Math.hypot(this.vx,this.vz)/Math.max(.01,this.baseSpeed*this.stats.speedMul)}baseSpeed;baseHp;blockPx;quad;atlas;uv={u:0,v:0};constructor(t,e,i){this.atlas=t,this.hero=e;const s=e.sheet??"sgrade";this.quad=new Of(t[s],i),this.quad.setPlayer(!0),this.quad.setFootDepth(!0),this.baseSpeed=e.baseSpeed,this.baseHp=e.baseHp,this.stats={damageMul:1,cooldownMul:1,speedMul:1,maxHpMul:1,pickupMul:1,xpMul:1,dmgReduction:0,goldMul:1,hpRegen:0,projectileBonus:0,rangeMul:1,areaMul:1,dmgTakenMul:1},this.blockPx=e.charIndex*4*Ns,this.resetStats({}),this.maxHp=this.baseHp*this.stats.maxHpMul,this.hp=this.maxHp}get mesh(){return this.quad.mesh}get radius(){return Ky}setRimScale(t){this.quad.setRimScale(t)}setHero(t){this.hero=t,this.baseSpeed=t.baseSpeed,this.baseHp=t.baseHp,this.blockPx=t.charIndex*4*Ns;const e=t.sheet??"sgrade";this.quad.setSheet(this.atlas[e])}setMeta(t){this.meta=t}resetStats(t){this.curPassives=t;const e=this.stats,i=this.hero;e.damageMul=i.damageMul,e.cooldownMul=i.cooldownMul,e.speedMul=i.speedMul,e.maxHpMul=i.maxHpMul,e.pickupMul=1,e.xpMul=1,e.dmgReduction=0,e.goldMul=1,e.hpRegen=0,e.projectileBonus=0,e.rangeMul=i.rangeMul,e.areaMul=1,e.dmgTakenMul=i.dmgTakenMul;for(const s in t){const n=Wi[s];n&&n.apply(e,t[s])}this.meta&&(e.damageMul*=this.meta.damageMul,e.maxHpMul*=this.meta.maxHpMul,e.speedMul*=this.meta.speedMul,e.pickupMul*=this.meta.pickupMul,e.cooldownMul*=this.meta.cooldownMul);for(const s of this.relicIds){const n=_c[s];n&&n.apply(e)}for(const s of this.masterworkIds){const n=go[s];n&&n.apply(e)}this.buffAttackT>0&&(e.damageMul*=1.3),this.buffSpeedT>0&&(e.speedMul*=1.25)}addRelic(t){this.relicIds.includes(t)||(this.relicIds.push(t),this.recomputeStats(this.curPassives))}get relicCount(){return this.relicIds.length}addMasterwork(t){this.masterworkIds.includes(t)||(this.masterworkIds.push(t),this.recomputeStats(this.curPassives))}applyBuff(t,e){t==="attack"?this.buffAttackT=Math.max(this.buffAttackT,e):t==="speed"?this.buffSpeedT=Math.max(this.buffSpeedT,e):this.buffMusouT=Math.max(this.buffMusouT,e),this.recomputeStats(this.curPassives)}get musouBuffed(){return this.buffMusouT>0}get shrineBuffActive(){return this.buffAttackT>0||this.buffSpeedT>0||this.buffMusouT>0}get frameUv(){return this.uv}recomputeStats(t){const e=this.maxHp>0?this.hp/this.maxHp:1;this.resetStats(t),this.maxHp=this.baseHp*this.stats.maxHpMul,this.hp=this.maxHp*e}reset(t){this.x=0,this.z=0,this.relicIds=[],this.masterworkIds=[],this.buffAttackT=0,this.buffSpeedT=0,this.buffMusouT=0,this.resetStats(t),this.maxHp=this.baseHp*this.stats.maxHpMul,this.hp=this.maxHp,this.invuln=0,this.musouInvuln=!1,this.flash=0,this.faceX=0,this.faceZ=1,this.vx=0,this.vz=0,this.dashT=0,this.dashCd=0,this.driftCharge=0,this.boostT=0,this.boostTier=0,this.justSkid=!1,this.justBoost=!1,this.sqSX=1,this.sqSY=1,this.justDashed=!1}update(t,e){this.time+=t;const i=e.move.x,s=e.move.z,n=Math.hypot(i,s),r=n>0,o=r?i/n:0,l=r?s/n:0;let h=!1,c=r?o:this.faceX,u=r?l:this.faceZ;(e.consumePressed("ShiftLeft")||e.consumePressed("ShiftRight"))&&(h=!0);for(const M of iM)e.consumePressed(M)&&(this.lastTapCode===M&&this.time-this.lastTapAt<eM&&(h=!0,c=gd[M].x,u=gd[M].z),this.lastTapCode=M,this.lastTapAt=this.time);if(this.dashCd>0&&(this.dashCd-=t),h&&this.dashCd<=0&&this.dashT<=0){const M=Math.hypot(c,u)||1;this.ddx=c/M,this.ddz=u/M,this.dashT=Yy,this.dashCd=Qy,this.invuln=Math.max(this.invuln,tM),this.faceX=this.ddx,this.faceZ=this.ddz,this.dashDirX=this.ddx,this.dashDirZ=this.ddz,this.justDashed=!0}const d=this.baseSpeed*this.stats.speedMul;if(this.dashT>0){r&&o*this.ddx+l*this.ddz<.766&&(this.driftCharge+=t,this.driftSteerX=o,this.driftSteerZ=l,this.justSkid=!0),this.dashT-=t;const M=d*Jy;if(this.vx=this.ddx*M,this.vz=this.ddz*M,this.dashT<=0&&this.driftCharge>=.07){const C=this.driftCharge>=.12;this.boostT=C?.6:.4,this.boostMul=C?1.4:1.3,this.boostDirX=this.driftSteerX,this.boostDirZ=this.driftSteerZ,this.boostTier=C?2:1,this.justBoost=!0}this.dashT<=0&&(this.driftCharge=0)}else if(this.boostT>0){this.boostT-=t;const M=d*this.boostMul;this.vx=this.boostDirX*M,this.vz=this.boostDirZ*M,this.faceX=this.boostDirX,this.faceZ=this.boostDirZ}else if(r){this.faceX=o,this.faceZ=l;const M=1-Math.exp(-20*t);this.vx+=(o*d-this.vx)*M,this.vz+=(l*d-this.vz)*M}else{const M=Math.exp(-13*t);this.vx*=M,this.vz*=M,Math.abs(this.vx)<.02&&(this.vx=0),Math.abs(this.vz)<.02&&(this.vz=0)}this.x+=this.vx*t,this.z+=this.vz*t,this.x+=this.knbX*t,this.z+=this.knbZ*t;const f=Math.exp(-8*t);this.knbX*=f,this.knbZ*=f;const m=Math.hypot(this.vx,this.vz);this.moving=m>.05,this.moving?(this.dir=Yn(this.vx,this.vz,this.dir),this.animTime+=t,this.frame=(this.animTime*jy|0)%4):(this.dir=Yn(this.faceX,this.faceZ,this.dir),this.frame=0),this.invuln>0&&(this.invuln-=t),this.flash>0&&(this.flash-=t*Zy,this.flash<0&&(this.flash=0)),this.hurtT>0&&(this.hurtT-=t);let v=1,g=1,p=1;if(this.hurtT>0){const M=this.hurtT/.32;g=1-.62*M,p=1-.62*M}if(this.invuln>0){const M=.6+.4*(Math.sin(this.time*34)>0?1:0);v*=M,g*=M,p*=M}if(this.quad.setTint(v,g,p),this.buffAttackT>0||this.buffSpeedT>0||this.buffMusouT>0){const M=this.buffAttackT>0,C=this.buffSpeedT>0;this.buffAttackT>0&&(this.buffAttackT-=t),this.buffSpeedT>0&&(this.buffSpeedT-=t),this.buffMusouT>0&&(this.buffMusouT-=t),(M&&this.buffAttackT<=0||C&&this.buffSpeedT<=0)&&this.recomputeStats(this.curPassives)}this.stats.hpRegen>0&&this.hp<this.maxHp&&(this.hp=Math.min(this.maxHp,this.hp+this.stats.hpRegen*t));let w=1;this.dashT>0?w=1.28:m>d*.55&&(w=1.07);const A=1/Math.sqrt(w),y=Math.min(1,t*16);this.sqSX+=(A-this.sqSX)*y,this.sqSY+=(w-this.sqSY)*y,this.quad.setSquash(this.sqSX,this.sqSY);const T=this.hero.sheet??"sgrade";gc(this.atlas[T],this.blockPx,0,this.dir,this.frame,this.uv),this.quad.setUv(this.uv.u,this.uv.v),this.quad.setFlash(this.flash),this.quad.setPosition(this.x,0,this.z)}setPosition(t,e){this.x=t,this.z=e,this.quad.setPosition(t,0,e)}takeDamage(t){if(this.musouInvuln||this.invuln>0)return!1;const e=t*this.stats.dmgTakenMul*(1-this.stats.dmgReduction);return this.hp-=e,this.hp<0&&(this.hp=0),this.invuln=$y,this.flash=1,!0}heal(t){this.hp=Math.min(this.maxHp,this.hp+t)}revive(t,e){this.hp=this.maxHp*t,this.invuln=e,this.flash=1}get dead(){return this.hp<=0}}class Ii{mesh;matrices;fade;fadeAttr;material;cursor=0;constructor(t,e,i,s=5,n=1,r=!1){const o=new ja().load(`/threesur/assets/projectiles/${e}.png`);o.colorSpace=Me,o.magFilter=oe,o.minFilter=oe,o.generateMipmaps=!1;const l=new Jt(1,1,r?12:1,1);l.rotateX(-Math.PI/2),this.fade=new Float32Array(i),this.fadeAttr=new Wt(this.fade,1),this.fadeAttr.setUsage(St),l.setAttribute("aFade",this.fadeAttr),this.material=new Ot({uniforms:{uMap:{value:o},uTime:{value:0},uIntensity:{value:n}},vertexShader:`
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
      `,transparent:!0,blending:as,depthWrite:!1,depthTest:!0}),this.mesh=new Se(l,this.material,i),this.mesh.instanceMatrix.setUsage(St),this.mesh.frustumCulled=!1,this.mesh.count=0,this.mesh.renderOrder=s,this.matrices=this.mesh.instanceMatrix.array,t.add(this.mesh)}begin(t){this.cursor=0,this.material.uniforms.uTime.value=t}push(t,e,i,s,n,r,o){const l=this.cursor++,h=l*16,c=Math.cos(s),u=Math.sin(s);this.matrices[h]=c*n,this.matrices[h+1]=0,this.matrices[h+2]=-u*n,this.matrices[h+3]=0,this.matrices[h+4]=0,this.matrices[h+5]=1,this.matrices[h+6]=0,this.matrices[h+7]=0,this.matrices[h+8]=u*r,this.matrices[h+9]=0,this.matrices[h+10]=c*r,this.matrices[h+11]=0,this.matrices[h+12]=t,this.matrices[h+13]=e,this.matrices[h+14]=i,this.matrices[h+15]=1,this.fade[l]=o}end(){this.mesh.count=this.cursor,this.mesh.instanceMatrix.needsUpdate=!0,this.fadeAttr.needsUpdate=!0}}const jt=256,Vi=0,yc=1,vo=2,Mc=3,ln=4,bs=5,nM=6;class Ua{x=new Float32Array(jt);z=new Float32Array(jt);vx=new Float32Array(jt);vz=new Float32Array(jt);life=new Float32Array(jt);damage=new Float32Array(jt);radius=new Float32Array(jt);homing=new Uint8Array(jt);turn=new Float32Array(jt);kind=new Uint8Array(jt);cr=new Float32Array(jt);cg=new Float32Array(jt);cb=new Float32Array(jt);size=new Float32Array(jt);trailT=new Float32Array(jt);alive=new Uint8Array(jt);free=new Int32Array(jt);freeTop=0;mesh;matArr;colArr;kindArr;colAttr;kindAttr;spriteBatches;dots;dotArr;static AIM_CAP=8;aimLines;aimMatArr;aimChargeArr;aimChargeAttr;aimN=0;constructor(t){for(let l=0;l<jt;l++)this.free[l]=jt-1-l;this.freeTop=jt;const e=new Jt(1,1,1,1);e.rotateX(-Math.PI/2),this.colArr=new Float32Array(jt*3),this.kindArr=new Float32Array(jt),this.colAttr=new Wt(this.colArr,3),this.kindAttr=new Wt(this.kindArr,1),this.colAttr.setUsage(St),e.setAttribute("aColor",this.colAttr),e.setAttribute("aKind",this.kindAttr);const i=new Ot({uniforms:{uTime:{value:0}},vertexShader:`
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
      `,transparent:!0,blending:He,depthWrite:!1,depthTest:!0});this.mesh=new Se(e,i,jt),this.mesh.instanceMatrix.setUsage(St),this.mesh.frustumCulled=!1,this.mesh.count=0,this.mesh.renderOrder=4,this.matArr=this.mesh.instanceMatrix.array,t.add(this.mesh);const s=new Jt(1,1);s.rotateX(-Math.PI/2);const n=new Ot({uniforms:{uTime:{value:0}},vertexShader:`
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
      `,transparent:!0,blending:He,depthWrite:!1,depthTest:!0});this.dots=new Se(s,n,jt),this.dots.instanceMatrix.setUsage(St),this.dots.frustumCulled=!1,this.dots.count=0,this.dots.renderOrder=1,this.dotArr=this.dots.instanceMatrix.array,t.add(this.dots);const r=new Jt(1,1);r.rotateX(-Math.PI/2),this.aimChargeArr=new Float32Array(Ua.AIM_CAP),this.aimChargeAttr=new Wt(this.aimChargeArr,1),this.aimChargeAttr.setUsage(St),r.setAttribute("aCharge",this.aimChargeAttr);const o=new Ot({vertexShader:`
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
      `,transparent:!0,blending:He,depthWrite:!1,depthTest:!0});this.aimLines=new Se(r,o,Ua.AIM_CAP),this.aimLines.instanceMatrix.setUsage(St),this.aimLines.frustumCulled=!1,this.aimLines.count=0,this.aimLines.renderOrder=2,this.aimMatArr=this.aimLines.instanceMatrix.array,t.add(this.aimLines),this.spriteBatches=[new Ii(t,"enemy-arrow",jt,5,.92),new Ii(t,"enemy-orb",jt,5,.92),new Ii(t,"boss-fireball",jt,5,.92),new Ii(t,"boss-poison-orb",jt,5,.92),new Ii(t,"boss-lightning-spear",jt,5,.92),new Ii(t,"boss-heavy-shot",jt,5,.92)]}get object(){return this.mesh}get activeCount(){return jt-this.freeTop}get kindCounts(){const t=new Array(nM).fill(0);for(let e=0;e<jt;e++)this.alive[e]&&t[this.kind[e]]++;return t}reset(){this.alive.fill(0);for(let t=0;t<jt;t++)this.free[t]=jt-1-t;this.freeTop=jt,this.aimN=0,this.aimLines.count=0}aimLine(t,e,i,s,n){if(this.aimN>=Ua.AIM_CAP)return;const r=i-t,o=s-e,l=Math.hypot(r,o)||.001,h=Math.atan2(-o,r),c=Math.cos(h),u=Math.sin(h),d=.42,f=this.aimN*16;this.aimMatArr[f]=c*l,this.aimMatArr[f+2]=-u*l,this.aimMatArr[f+5]=1,this.aimMatArr[f+8]=u*d,this.aimMatArr[f+10]=c*d,this.aimMatArr[f+12]=(t+i)*.5,this.aimMatArr[f+13]=.06,this.aimMatArr[f+14]=(e+s)*.5,this.aimMatArr[f+15]=1,this.aimChargeArr[this.aimN]=n,this.aimN++}spawn(t,e,i,s,n,r,o,l){if(this.freeTop===0)return;const h=this.free[--this.freeTop];this.x[h]=t,this.z[h]=e,this.vx[h]=i*n,this.vz[h]=s*n;const c=Math.max(Vi,Math.min(bs,l|0));switch(this.life[h]=o?4.5:c===bs?3.8:3,this.damage[h]=r,this.homing[h]=o?1:0,this.kind[h]=c,this.trailT[h]=0,c){case yc:this.cr[h]=1.55,this.cg[h]=.5,this.cb[h]=2.25,this.size[h]=1.26,this.radius[h]=.4,this.turn[h]=3;break;case vo:this.cr[h]=2.5,this.cg[h]=.65,this.cb[h]=.18,this.size[h]=1.35,this.radius[h]=.48,this.turn[h]=0;break;case Mc:this.cr[h]=.6,this.cg[h]=2.05,this.cb[h]=1,this.size[h]=1.18,this.radius[h]=.45,this.turn[h]=1.35;break;case ln:this.cr[h]=1.9,this.cg[h]=.55,this.cb[h]=2.55,this.size[h]=1.5,this.radius[h]=.38,this.turn[h]=0;break;case bs:this.cr[h]=2.65,this.cg[h]=.95,this.cb[h]=.22,this.size[h]=1.7,this.radius[h]=.65,this.turn[h]=0;break;default:this.cr[h]=2.5,this.cg[h]=.4,this.cb[h]=1.7,this.size[h]=1.56,this.radius[h]=.34,this.turn[h]=0;break}this.alive[h]=1}update(t,e,i,s,n,r,o,l=null){const h=s;for(let c=0;c<jt;c++){if(this.alive[c]===0)continue;if(this.homing[c]){const m=e-this.x[c],v=i-this.z[c],g=Math.hypot(m,v)||1,p=Math.hypot(this.vx[c],this.vz[c]),w=Math.min(1,this.turn[c]*t);this.vx[c]+=(m/g*p-this.vx[c])*w,this.vz[c]+=(v/g*p-this.vz[c])*w}if(this.x[c]+=this.vx[c]*t,this.z[c]+=this.vz[c]*t,l&&l(this.x[c],this.z[c],this.radius[c])){r.projectileImpact(this.x[c],this.z[c],this.cr[c],this.cg[c],this.cb[c],this.kind[c]===Vi?0:3),this.alive[c]=0,this.free[this.freeTop++]=c;continue}this.trailT[c]-=t,this.trailT[c]<=0&&(r.projectileTrail(this.x[c],this.z[c],this.vx[c],this.vz[c],this.cr[c],this.cg[c],this.cb[c],this.kind[c]===Vi?0:3),this.trailT[c]=this.kind[c]===Vi?.09:.055);const u=e-this.x[c],d=i-this.z[c],f=this.radius[c]+h;if(u*u+d*d<=f*f){if(r.projectileImpact(this.x[c],this.z[c],this.cr[c],this.cg[c],this.cb[c],this.kind[c]===Vi?0:3),this.kind[c]!==Vi){const v=this.kind[c]===bs?2.1:this.kind[c]===vo?1.65:1.25;o.spawnRing(this.x[c],this.z[c],v,this.cr[c],this.cg[c],this.cb[c],.24)}r.burst(this.x[c],this.z[c],this.cr[c],this.cg[c],this.cb[c],9,5.5);const m=Math.hypot(this.vx[c],this.vz[c])||1;n(this.damage[c],this.vx[c]/m,this.vz[c]/m),this.alive[c]=0,this.free[this.freeTop++]=c;continue}this.life[c]-=t,this.life[c]<=0&&(this.alive[c]=0,this.free[this.freeTop++]=c)}}render(t){this.mesh.material.uniforms.uTime.value=t,this.dots.material.uniforms.uTime.value=t;for(const i of this.spriteBatches)i.begin(t);let e=0;for(let i=0;i<jt;i++){if(this.alive[i]===0)continue;const s=e*16,n=Math.atan2(-this.vz[i],this.vx[i]),r=Math.cos(n),o=Math.sin(n),l=this.kind[i]===Vi||this.kind[i]===ln||this.kind[i]===bs,h=l?this.size[i]*1.6:this.size[i],c=l?this.size[i]*.5:this.size[i];this.matArr[s]=r*h,this.matArr[s+2]=-o*h,this.matArr[s+5]=1,this.matArr[s+8]=o*c,this.matArr[s+10]=r*c,this.matArr[s+12]=this.x[i],this.matArr[s+13]=1,this.matArr[s+14]=this.z[i],this.matArr[s+15]=1;const u=e*3;this.colArr[u]=this.cr[i],this.colArr[u+1]=this.cg[i],this.colArr[u+2]=this.cb[i],this.kindArr[e]=this.kind[i];let d=this.size[i]*1.4,f=d;this.kind[i]===Vi?(d=this.size[i]*1.8,f=this.size[i]*.58):this.kind[i]===ln?(d=this.size[i]*1.9,f=this.size[i]*.68):this.kind[i]===bs&&(d=this.size[i]*1.65,f=this.size[i]*.82),this.spriteBatches[this.kind[i]].push(this.x[i],1.055,this.z[i],n,d,f,1);const m=e*16,v=(this.radius[i]+.68)*2;this.dotArr[m]=v,this.dotArr[m+5]=1,this.dotArr[m+10]=v,this.dotArr[m+12]=this.x[i],this.dotArr[m+13]=.05,this.dotArr[m+14]=this.z[i],this.dotArr[m+15]=1,e++}this.mesh.count=e,this.mesh.instanceMatrix.needsUpdate=!0,this.colAttr.needsUpdate=!0,this.kindAttr.needsUpdate=!0,this.dots.count=e,this.dots.instanceMatrix.needsUpdate=!0;for(const i of this.spriteBatches)i.end();this.aimLines.count=this.aimN,this.aimLines.instanceMatrix.needsUpdate=!0,this.aimChargeAttr.needsUpdate=!0,this.aimN=0}clearInCircle(t,e,i,s){const n=i*i;for(let r=0;r<jt;r++){if(this.alive[r]===0)continue;const o=this.x[r]-t,l=this.z[r]-e;o*o+l*l<=n&&(s.projectileImpact(this.x[r],this.z[r],this.cr[r],this.cg[r],this.cb[r],this.kind[r]===0?0:3),this.alive[r]=0,this.free[this.freeTop++]=r)}}}const wt=1024,Rl=8,vd=7,aM=7,xd=8,bd=3,rM=0,Hh=1,oM=2,tn=3,xo=4,$s=0,Ea=1,Gr=2,Vn=3,Ei=0,$f=1,ao=2,Zf=3;class lM{x=new Float32Array(wt);z=new Float32Array(wt);hp=new Float32Array(wt);maxHp=new Float32Array(wt);speed=new Float32Array(wt);radius=new Float32Array(wt);damage=new Float32Array(wt);gemValue=new Float32Array(wt);scale=new Float32Array(wt);sheetId=new Uint8Array(wt);blockPx=new Float32Array(wt);blockPy=new Float32Array(wt);dir=new Uint8Array(wt);frame=new Uint8Array(wt);animTime=new Float32Array(wt);flash=new Float32Array(wt);hitPunch=new Float32Array(wt);alive=new Uint8Array(wt);tr=new Float32Array(wt);tg=new Float32Array(wt);tb=new Float32Array(wt);kbx=new Float32Array(wt);kbz=new Float32Array(wt);kbResist=new Float32Array(wt);ranged=new Uint8Array(wt);range=new Float32Array(wt);atkCd=new Float32Array(wt);atkTimer=new Float32Array(wt);projDamage=new Float32Array(wt);projSpeed=new Float32Array(wt);projHoming=new Uint8Array(wt);behavior=new Uint8Array(wt);patternState=new Uint8Array(wt);patternT=new Float32Array(wt);aimX=new Float32Array(wt);aimZ=new Float32Array(wt);shieldHits=new Uint8Array(wt);elite=new Uint8Array(wt);boss=new Uint8Array(wt);groggy=new Uint8Array(wt);controlled=new Uint8Array(wt);stun=new Float32Array(wt);flee=new Uint8Array(wt);cart=new Uint8Array(wt);labels=new Array(wt).fill(null);chargeStarts=0;volleyStarts=0;casterStarts=0;specials=[];free=new Int32Array(wt);freeTop=0;aliveCount=0;cand=[];uv={u:0,v:0};nav={x:0,z:0};moved={x:0,z:0};constructor(){for(let t=0;t<wt;t++)this.free[t]=wt-1-t;this.freeTop=wt}spawn(t,e,i,s,n,r,o,l,h,c,u){if(this.freeTop===0)return-1;const d=this.free[--this.freeTop];return this.x[d]=t,this.z[d]=e,this.hp[d]=i,this.maxHp[d]=i,this.speed[d]=s,this.radius[d]=n,this.damage[d]=r,this.gemValue[d]=o,this.scale[d]=vc*l,this.sheetId[d]=h,this.blockPx[d]=c,this.blockPy[d]=u,this.dir[d]=0,this.frame[d]=0,this.animTime[d]=Math.random()*.5,this.flash[d]=0,this.hitPunch[d]=0,this.tr[d]=1,this.tg[d]=1,this.tb[d]=1,this.kbx[d]=0,this.kbz[d]=0,this.kbResist[d]=0,this.ranged[d]=0,this.atkTimer[d]=.5+Math.random(),this.behavior[d]=rM,this.patternState[d]=$s,this.patternT[d]=.8+Math.random()*1.8,this.aimX[d]=0,this.aimZ[d]=1,this.shieldHits[d]=0,this.elite[d]=0,this.boss[d]=0,this.groggy[d]=0,this.controlled[d]=0,this.stun[d]=0,this.flee[d]=0,this.cart[d]=0,this.labels[d]=null,this.alive[d]=1,this.aliveCount++,d}markSpecial(t){this.specials.push(t)}kill(t){this.alive[t]!==0&&(this.alive[t]=0,this.labels[t]=null,this.free[this.freeTop++]=t,this.aliveCount--)}reset(){this.alive.fill(0);for(let t=0;t<wt;t++)this.free[t]=wt-1-t,this.labels[t]=null;this.freeTop=wt,this.aliveCount=0,this.specials.length=0,this.chargeStarts=0,this.volleyStarts=0,this.casterStarts=0}damageAt(t,e){return this.behavior[t]===xo&&this.patternState[t]===$s&&(e*=.55,this.shieldHits[t]++,this.shieldHits[t]>=3&&(this.shieldHits[t]=0,this.patternState[t]=Vn,this.patternT[t]=2.4)),this.hp[t]-=e,this.flash[t]=1,this.hitPunch[t]=1,this.hp[t]<=0}push(t,e,i,s){if(this.controlled[t]===1)return;const n=s*(1-this.kbResist[t]);n<=0||(this.kbx[t]+=e*n,this.kbz[t]+=i*n,n>4&&this.stun[t]<.14&&(this.stun[t]=.14))}randomAlive(){if(this.aliveCount===0)return-1;let t=ce.next()*wt|0;for(let e=0;e<wt;e++){if(this.alive[t]===1&&this.controlled[t]===0)return t;t=(t+1)%wt}return-1}countInsideWalls(t){let e=0;for(let i=0;i<wt;i++)this.alive[i]&&t.circleBlocked(this.x[i],this.z[i],this.radius[i]*.9)&&e++;return e}insertAll(t){const e=this.alive;for(let i=0;i<wt;i++)e[i]&&t.insert(i,this.x[i],this.z[i])}update(t,e,i,s,n,r,o){const l=this.cand;let h=0;for(let c=0;c<wt;c++)this.alive[c]&&(this.patternState[c]===Ea||this.patternState[c]===Gr)&&h++;for(let c=0;c<wt;c++){if(this.alive[c]===0)continue;this.flash[c]>0&&(this.flash[c]-=t*aM,this.flash[c]<0&&(this.flash[c]=0)),this.hitPunch[c]>0&&(this.hitPunch[c]-=t*9,this.hitPunch[c]<0&&(this.hitPunch[c]=0));const u=this.x[c],d=this.z[c],f=e-u,m=i-d,v=Math.hypot(f,m)||1,g=f/v,p=m/v;o.flowDirection(u,d,e,i,this.nav);let w=this.nav.x,A=this.nav.z;if(this.controlled[c]===1){this.dir[c]=Yn(g,p,this.dir[c]),this.animTime[c]+=t,this.frame[c]=(this.animTime[c]*Rl|0)%4;continue}if(this.stun[c]>0){this.stun[c]-=t,o.resolveMovement(u,d,u+this.kbx[c]*t,d+this.kbz[c]*t,this.radius[c],this.moved),this.x[c]=this.moved.x,this.z[c]=this.moved.z;const W=Math.max(0,1-xd*t);this.kbx[c]*=W,this.kbz[c]*=W;continue}const y=this.speed[c];let T=w*y,M=A*y;if(this.flee[c]===1){o.resolveMovement(u,d,u-w*y*t,d-A*y*t,this.radius[c],this.moved),this.x[c]=this.moved.x,this.z[c]=this.moved.z,this.dir[c]=Yn(-w,-A,this.dir[c]),this.animTime[c]+=t,this.frame[c]=(this.animTime[c]*Rl|0)%4;continue}const C=this.behavior[c],b=this.patternState[c];if(C===Hh&&(this.patternT[c]-=t,b===$s?this.patternT[c]<=0&&v>=4&&v<=12&&h<bd&&(this.patternState[c]=Ea,this.patternT[c]=.68,this.aimX[c]=g,this.aimZ[c]=p,r.spawnRing(u,d,2.8,2.5,.35,.18,.55),r.spawnThrust(u,d,g,p,8.5,.24,2.5,.28,.14,.68),this.flash[c]=.28,this.chargeStarts++,h++):b===Ea?(T=0,M=0,this.flash[c]=Math.max(this.flash[c],.16),this.patternT[c]<=0&&(this.patternState[c]=Gr,this.patternT[c]=.42)):b===Gr?(T=this.aimX[c]*10.5,M=this.aimZ[c]*10.5,this.patternT[c]<=0&&(this.patternState[c]=Vn,this.patternT[c]=.95)):(T*=.12,M*=.12,this.patternT[c]<=0&&(this.patternState[c]=$s,this.patternT[c]=2.8+ce.next()*1.8))),C===xo&&b===Vn&&(this.patternT[c]-=t,T*=.35,M*=.35,this.patternT[c]<=0&&(this.patternState[c]=$s)),this.ranged[c]===1){const W=this.range[c];if(v<W*.6?(T=-w*y,M=-A*y):v<W&&(T*=.15,M*=.15),b===$s)this.atkTimer[c]-=t,this.atkTimer[c]<=0&&v<=W*1.15&&h<bd&&(this.patternState[c]=Ea,this.patternT[c]=C===tn?.92:.72,this.aimX[c]=g,this.aimZ[c]=p,C===tn?(r.spawnRing(u,d,3.4,1.5,.45,2.5,.75),this.casterStarts++):(r.spawnRing(u,d,2.8,1.9,.4,2.3,.55),r.spawnThrust(u,d,g,p,10.5,.14,1.9,.4,2.3,.72),this.volleyStarts++),h++);else if(b===Ea){this.patternT[c]-=t,T*=.05,M*=.05;const z=C===tn?.92:.72,K=Math.min(1,Math.max(0,1-this.patternT[c]/z));this.flash[c]=Math.max(this.flash[c],.1+K*.5),C!==tn&&n.aimLine(u,d,e,i,K),this.patternT[c]<=0&&(this.fireFan(c,u,d,n,C===tn),this.patternState[c]=Vn,this.patternT[c]=C===tn?.85:.6)}else b===Vn&&(this.patternT[c]-=t,T*=.2,M*=.2,this.patternT[c]<=0&&(this.patternState[c]=$s,this.atkTimer[c]=this.atkCd[c]))}const x=this.radius[c],E=x+.9,P=s.query(u,d,E,l);let F=0,G=0;for(let W=0;W<P;W++){const z=l[W];if(z===c)continue;const K=u-this.x[z],tt=d-this.z[z],at=K*K+tt*tt,ut=x+this.radius[z];if(at>0&&at<ut*ut){const xt=Math.sqrt(at),Yt=(ut-xt)/ut;F+=K/xt*Yt,G+=tt/xt*Yt}}T+=F*vd,M+=G*vd,T+=this.kbx[c],M+=this.kbz[c];const j=Math.max(0,1-xd*t);this.kbx[c]*=j,this.kbz[c]*=j;const N=o.resolveMovement(u,d,u+T*t,d+M*t,x,this.moved);this.x[c]=this.moved.x,this.z[c]=this.moved.z,N&&C===Hh&&this.patternState[c]===Gr&&(this.patternState[c]=Vn,this.patternT[c]=.95,r.spawnRing(this.x[c],this.z[c],1.8,2,.45,.18,.25)),this.dir[c]=Yn(T,M,this.dir[c]),this.animTime[c]+=t,this.frame[c]=(this.animTime[c]*Rl|0)%4}}fireFan(t,e,i,s,n){const r=Math.atan2(this.aimZ[t],this.aimX[t]),o=n?.23:.16,l=this.projSpeed[t]*.88;for(let h=-1;h<=1;h++){const c=r+o*h;s.spawn(e,i,Math.cos(c),Math.sin(c),l,this.projDamage[t],n,n?yc:Vi)}}render(t,e,i,s,n,r){e.begin(),i.begin(),s.begin(),n.begin();const o=this.uv;for(let l=0;l<wt;l++){if(this.alive[l]===0)continue;const h=this.sheetId[l];let c,u;if(h===$f?(c=t.variants,u=i):h===ao?(c=t.sgrade,u=s):h===Zf?(c=t.apriority,u=n):(c=t.soldiers,u=e),gc(c,this.blockPx[l],this.blockPy[l],this.dir[l],this.frame[l],o),u.push(this.x[l],this.z[l],this.scale[l],o.u,o.v,this.flash[l],this.tr[l],this.tg[l],this.tb[l]),this.hitPunch[l]>0){const d=this.hitPunch[l],f=this.boss[l]===1;u.setSquash(1+(f?.1:.25)*d,1-(f?.08:.25)*d)}r.push(this.x[l],this.z[l],this.radius[l]*1.5)}e.end(),i.end(),s.end(),n.end()}}const Ci={worker:{id:"worker",charIndex:5,hp:6,speed:1.6,radius:.45,damage:6,gemValue:1,worldScale:1},runner:{id:"runner",charIndex:7,hp:4,speed:3.3,radius:.4,damage:5,gemValue:1,worldScale:.95},guard:{id:"guard",charIndex:9,hp:14,speed:1.9,radius:.55,damage:8,gemValue:5,worldScale:1.1},general_spear:{id:"general_spear",charIndex:4,hp:42,speed:1.7,radius:.62,damage:11,gemValue:5,worldScale:1.18},general_blade:{id:"general_blade",charIndex:0,hp:26,speed:2.4,radius:.52,damage:10,gemValue:5,worldScale:1.06},general_bow:{id:"general_bow",charIndex:3,hp:20,speed:1.7,radius:.5,damage:6,gemValue:5,worldScale:1,ranged:!0,range:11,atkCd:2.2,projDamage:8,projSpeed:12},strategist:{id:"strategist",charIndex:6,hp:24,speed:1.4,radius:.5,damage:6,gemValue:5,worldScale:1,ranged:!0,range:13,atkCd:2.8,projDamage:11,projSpeed:7,projHoming:!0}},hM=192,cM=192,uM=19,_d=24,Vr=420,Pl=90,yd=[{id:"yellowturban",ko:"황건적",hanja:"黃巾",en:"Yellow Turbans",banner:[.85,.62,.24],tints:[[1.32,1.06,.5],[1.38,1.12,.56],[1.24,.98,.46]],variantStart:0,variantCount:7},{id:"dongzhuo",ko:"동탁군",hanja:"董卓",en:"Dong Zhuo's Host",banner:[.72,.2,.17],tints:[[1.4,.66,.56],[1.28,.58,.5],[1.46,.74,.64]],variantStart:7,variantCount:7},{id:"yuanshao",ko:"원소군",hanja:"袁紹",en:"Yuan Shao's Host",banner:[.24,.44,.72],tints:[[.66,.84,1.4],[.74,.9,1.32],[.6,.78,1.46]],variantStart:14,variantCount:6},{id:"warlords",ko:"군웅",hanja:"群雄",en:"Warlords",banner:[.5,.54,.6],tints:[[.88,.9,1.02],[.78,.82,.94],[1,.94,.92]],variantStart:20,variantCount:4}];function Md(a){return a<2.75?0:a<5.75?1:a<8.75?2:3}class dM{acc=0;eliteTimer=Pl;surroundTimer=0;bossActive=!1;siegeActive=!1;factionIdx=0;onWave=null;atlas;pool;map;apriorityNames;constructor(t,e,i){this.atlas=t,this.pool=e,this.map=i;const s=t.manifest.sheets.apriority.chars;this.apriorityNames=new Array(16).fill("장수");for(const n in s){const r=s[n];this.apriorityNames[r]=t.manifest.names[n]??n}}reset(){this.acc=0,this.eliteTimer=Pl,this.surroundTimer=0,this.bossActive=!1,this.siegeActive=!1,this.factionIdx=0}setBossActive(t){this.bossActive=t}setSiegeActive(t){this.siegeActive=t}hpScale(t){let e=1+.13*t+.011*t*t;return t>10&&(e*=Math.pow(1.35,t-10)),e}update(t,e,i,s){const n=e/60,r=Md(n);r!==this.factionIdx&&(this.factionIdx=r,this.onWave?.(yd[r]));let o=Math.min(18,2+n*1.7);if(this.bossActive?o*=.4:this.siegeActive&&(o*=.55),this.pool.aliveCount<Vr)for(this.acc+=o*t;this.acc>=1&&(this.acc-=1,!(this.pool.aliveCount>=Vr));)this.spawnOne(n,i,s);else this.acc=0;this.bossActive||(this.eliteTimer-=t,this.eliteTimer<=0&&(this.eliteTimer+=Pl,this.spawnElite(n,i,s))),!this.bossActive&&e>=300&&(this.surroundTimer-=t,this.surroundTimer<=0&&(this.surroundTimer=22,this.spawnSurround(n,i,s)))}ringPos(t,e,i){const s=ce.next()*Math.PI*2,n=ce.range(uM,_d);i.x=t+Math.cos(s)*n,i.z=e+Math.sin(s)*n,this.map.projectWalkable(i.x,i.z,.75,i)}_p={x:0,z:0};_spawnP={x:0,z:0};spawnOne(t,e,i){const s=this.pickType(t);this.ringPos(e,i,this._p),this.placeEnemy(s,this._p.x,this._p.z,t)}placeEnemy(t,e,i,s,n){this.map.projectWalkable(e,i,t.radius+.08,this._spawnP),e=this._spawnP.x,i=this._spawnP.z;const r=t.hp*this.hpScale(s);let o=Ei,l=this.atlas.soldierBlockPx(t.charIndex),h=0;const c=yd[n??Md(s)];if(s>=1){const f=this.atlas.variantBlocks(t.id);if(f.length>0){const m=(c.variantStart+ce.int(c.variantCount))%f.length,v=f[m];o=$f,l=v.c*hM,h=v.r*256}}const u=this.pool.spawn(e,i,r,t.speed,t.radius,t.damage,t.gemValue,t.worldScale,o,l,h);if(u<0)return-1;const d=c.tints[ce.int(c.tints.length)];return this.pool.tr[u]=d[0],this.pool.tg[u]=d[1],this.pool.tb[u]=d[2],t.ranged&&(this.pool.ranged[u]=1,this.pool.range[u]=t.range??11,this.pool.atkCd[u]=t.atkCd??2.5,this.pool.projDamage[u]=t.projDamage??8,this.pool.projSpeed[u]=t.projSpeed??10,this.pool.projHoming[u]=t.projHoming?1:0),t.id==="general_spear"||t.id==="runner"&&ce.next()<.34?this.pool.behavior[u]=Hh:t.id==="general_bow"?this.pool.behavior[u]=oM:t.id==="strategist"?this.pool.behavior[u]=tn:t.id==="guard"&&(this.pool.behavior[u]=xo),u}spawnElite(t,e,i){if(this.pool.aliveCount>=Vr)return;this.ringPos(e,i,this._p);const s=ce.int(16),n=Ci.guard.hp*25*this.hpScale(t),r=this.pool.spawn(this._p.x,this._p.z,n,2.2,.85,13,20,1.5,Zf,s*cM,0);r<0||(this.pool.elite[r]=1,this.pool.kbResist[r]=.5,this.pool.behavior[r]=xo,this.pool.tr[r]=1.5,this.pool.tg[r]=1.2,this.pool.tb[r]=.7,this.pool.labels[r]=`${this.apriorityNames[s]} 精銳`,this.pool.markSpecial(r))}forcePattern(t,e,i,s){const n=e/60;if(t==="charge"){const r=this.placeEnemy(Ci.general_spear,i+8,s,n);r>=0&&(this.pool.patternT[r]=0)}else if(t==="volley")for(let r=-1;r<=1;r++){const o=this.placeEnemy(Ci.general_bow,i+r*2.2,s+9,n);o>=0&&(this.pool.atkTimer[o]=0)}else if(t==="strategist"){const r=this.placeEnemy(Ci.strategist,i-8,s+5,n);r>=0&&(this.pool.atkTimer[r]=0)}else t==="shield"&&this.placeEnemy(Ci.guard,i+5,s+3,n)}spawnGateRush(t,e,i,s,n){for(let r=0;r<10;r++){const o=r/2|0,l=r%2*2-1,h=i?t+l*1.5:t-4-o*1.4,c=i?e-4-o*1.4:e+l*1.5;this.placeEnemy(r>=8?Ci.general_spear:Ci.runner,h,c,s,n)}}spawnSiegeAttacker(t,e,i,s=!1){const n=s?Ci.general_bow:this.pickType(i);return this.placeEnemy(n,t,e,i,1)}spawnSiegeRush(t,e,i){for(let s=0;s<10;s++){const n=s/10*Math.PI*2,r=1.4+s%3*.9;this.spawnSiegeAttacker(t+Math.cos(n)*r,e+Math.sin(n)*r,i,s>=8)}}spawnGateWatch(t,e){for(const i of t)this.spawnSiegeAttacker(i.x,i.z,e,!0)}garrisonCount(){let t=0;for(let e=0;e<wt;e++)this.pool.alive[e]===1&&this.pool.controlled[e]===0&&this.map.insideCastleBounds(this.pool.x[e],this.pool.z[e],0)&&t++;return t}spawnSurround(t,e,i){const n=_d;for(let r=0;r<36&&!(this.pool.aliveCount>=Vr);r++){const o=r/36*Math.PI*2+ce.range(-.05,.05),l=this.pickType(t);this.placeEnemy(l,e+Math.cos(o)*n,i+Math.sin(o)*n,t)}}pickType(t){const e=ce.next(),i=Ci;return t<1?e<.6?i.worker:i.runner:t<2?e<.45?i.worker:e<.75?i.runner:i.guard:t<3?e<.35?i.worker:e<.6?i.runner:e<.85?i.guard:i.general_spear:t<4.5?e<.3?i.worker:e<.5?i.runner:e<.68?i.guard:e<.85?i.general_spear:i.general_blade:t<6?e<.25?i.worker:e<.42?i.runner:e<.58?i.guard:e<.72?i.general_spear:e<.87?i.general_blade:i.general_bow:t<7.5?e<.2?i.runner:e<.36?i.guard:e<.52?i.general_spear:e<.68?i.general_blade:e<.85?i.general_bow:i.strategist:e<.16?i.runner:e<.32?i.guard:e<.48?i.general_spear:e<.66?i.general_blade:e<.83?i.general_bow:i.strategist}}const Wn=2,wd=4096,fM=8192;function Sd(a,t){return(a+wd)*fM+(t+wd)}class pM{buckets=new Map;used=[];clear(){const t=this.used;for(let e=0;e<t.length;e++){const i=this.buckets.get(t[e]);i&&(i.length=0)}t.length=0}insert(t,e,i){const s=Math.floor(e/Wn),n=Math.floor(i/Wn),r=Sd(s,n);let o=this.buckets.get(r);o===void 0&&(o=[],this.buckets.set(r,o)),o.length===0&&this.used.push(r),o.push(t)}query(t,e,i,s){const n=Math.floor((t-i)/Wn),r=Math.floor((t+i)/Wn),o=Math.floor((e-i)/Wn),l=Math.floor((e+i)/Wn);let h=0;for(let c=n;c<=r;c++)for(let u=o;u<=l;u++){const d=this.buckets.get(Sd(c,u));if(d!==void 0)for(let f=0;f<d.length;f++)s[h++]=d[f]}return h}}let Ad=0;function mM(a,t,e,i,s,n,r=0){const o=t.query(e,i,s,n);let l=-1,h=s*s,c=-1,u=s*s;const d=a.boss;for(let f=0;f<o;f++){const m=n[f];if(a.alive[m]===0)continue;const v=a.x[m]-e,g=a.z[m]-i,p=v*v+g*g;p<h&&(h=p,l=m),d!==void 0&&d[m]===1&&p<u&&(u=p,c=m)}if(Ad++,c>=0){const m=90+Math.round(40*Math.min(1,Math.max(0,r-60)/90));if(Ad%200<m)return c}return l}function gM(a,t,e,i,s,n){const r=s-e,o=n-i,l=r*r+o*o;let h=l>0?((a-e)*r+(t-i)*o)/l:0;h<0?h=0:h>1&&(h=1);const c=e+r*h,u=i+o*h,d=a-c,f=t-u;return d*d+f*f}const Le=512,vM=2,Td=.7;class xM{x=new Float32Array(Le);z=new Float32Array(Le);value=new Float32Array(Le);heal=new Uint8Array(Le);mag=new Uint8Array(Le);cr=new Float32Array(Le);cg=new Float32Array(Le);cb=new Float32Array(Le);alive=new Uint8Array(Le);free=new Int32Array(Le);freeTop=0;time=0;mesh;matArr;colArr;colAttr;constructor(t){for(let s=0;s<Le;s++)this.free[s]=Le-1-s;this.freeTop=Le;const e=new uc(.26,0),i=new Mi({toneMapped:!1});this.mesh=new Se(e,i,Le),this.mesh.instanceMatrix.setUsage(St),this.colArr=new Float32Array(Le*3),this.colAttr=new Wt(this.colArr,3),this.colAttr.setUsage(St),this.mesh.instanceColor=this.colAttr,this.mesh.frustumCulled=!1,this.mesh.count=0,this.mesh.renderOrder=1,this.matArr=this.mesh.instanceMatrix.array,t.add(this.mesh)}get object(){return this.mesh}reset(){for(let t=0;t<Le;t++)this.alive[t]=0,this.free[t]=Le-1-t;this.freeTop=Le}spawn(t,e,i){if(this.freeTop===0)return;const s=this.free[--this.freeTop];this.x[s]=t,this.z[s]=e,this.value[s]=i,this.heal[s]=0,this.mag[s]=0,this.alive[s]=1,i>=20?(this.cr[s]=2.2,this.cg[s]=.4,this.cb[s]=.5):i>=5?(this.cr[s]=.4,this.cg[s]=2,this.cb[s]=.7):(this.cr[s]=.35,this.cg[s]=.75,this.cb[s]=2.2)}spawnHeal(t,e,i){if(this.freeTop===0)return;const s=this.free[--this.freeTop];this.x[s]=t,this.z[s]=e,this.value[s]=i,this.heal[s]=1,this.mag[s]=0,this.alive[s]=1,this.cr[s]=2.4,this.cg[s]=2.1,this.cb[s]=1.5}magnetizeAll(){for(let t=0;t<Le;t++)this.alive[t]===1&&(this.mag[t]=1)}get activeHealCount(){let t=0;for(let e=0;e<Le;e++)this.alive[e]===1&&this.heal[e]===1&&t++;return t}update(t,e,i,s,n,r){this.time+=t;const o=vM*s,l=o*o,h=Td*Td;for(let c=0;c<Le;c++){if(this.alive[c]===0)continue;const u=e-this.x[c],d=i-this.z[c],f=u*u+d*d;if(this.mag[c]===0&&f<=l&&(this.mag[c]=1),this.mag[c]){const m=Math.sqrt(f)||1,v=6+(o-Math.min(o,m))*5+10/m;this.x[c]+=u/m*v*t,this.z[c]+=d/m*v*t,f<=h&&(this.heal[c]===1?r?.(this.value[c]):n(this.value[c]),this.alive[c]=0,this.free[this.freeTop++]=c)}}}render(){let t=0;const e=this.time;for(let i=0;i<Le;i++){if(this.alive[i]===0)continue;const s=t*16,n=1+.12*Math.sin(e*5+i);this.matArr[s]=n,this.matArr[s+5]=n,this.matArr[s+10]=n,this.matArr[s+12]=this.x[i],this.matArr[s+13]=.5+Math.sin(e*3+i)*.12,this.matArr[s+14]=this.z[i],this.matArr[s+15]=1;const r=t*3;this.colArr[r]=this.cr[i],this.colArr[r+1]=this.cg[i],this.colArr[r+2]=this.cb[i],t++}this.mesh.count=t,this.mesh.instanceMatrix.needsUpdate=!0,this.colAttr.needsUpdate=!0}}const Lt=384,Fl=8,bM=8,_M=.35,na=0,Po=1,Is=2,$n=3,_s=4,Kf=5;class yM{x=new Float32Array(Lt);z=new Float32Array(Lt);vx=new Float32Array(Lt);vz=new Float32Array(Lt);life=new Float32Array(Lt);invDur=new Float32Array(Lt);damage=new Float32Array(Lt);radius=new Float32Array(Lt);pierce=new Int16Array(Lt);homing=new Uint8Array(Lt);turn=new Float32Array(Lt);kind=new Uint8Array(Lt);cr=new Float32Array(Lt);cg=new Float32Array(Lt);cb=new Float32Array(Lt);len=new Float32Array(Lt);wid=new Float32Array(Lt);hy=new Float32Array(Lt);mode=new Uint8Array(Lt);oAng=new Float32Array(Lt);oRad=new Float32Array(Lt);oVel=new Float32Array(Lt);atkT=new Float32Array(Lt);dusty=new Uint8Array(Lt);trailT=new Float32Array(Lt);alive=new Uint8Array(Lt);hits=new Int32Array(Lt*Fl);hitN=new Uint8Array(Lt);free=new Int32Array(Lt);freeTop=0;mesh;matArr;colArr;kindArr;fadeArr;colAttr;kindAttr;fadeAttr;spriteBatches;arrows;slashes;orbs;crystals;cavalries;constructor(t,e){for(let n=0;n<Lt;n++)this.free[n]=Lt-1-n;this.freeTop=Lt;const i=new Jt(1,1,1,1);i.rotateX(-Math.PI/2),this.colArr=new Float32Array(Lt*3),this.kindArr=new Float32Array(Lt),this.fadeArr=new Float32Array(Lt),this.colAttr=new Wt(this.colArr,3),this.kindAttr=new Wt(this.kindArr,1),this.fadeAttr=new Wt(this.fadeArr,1),this.colAttr.setUsage(St),this.fadeAttr.setUsage(St),i.setAttribute("aColor",this.colAttr),i.setAttribute("aKind",this.kindAttr),i.setAttribute("aFade",this.fadeAttr);const s=new Ot({uniforms:{uTime:{value:0}},vertexShader:`
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
      `,transparent:!0,blending:He,depthWrite:!1,depthTest:!0});this.mesh=new Se(i,s,Lt),this.mesh.instanceMatrix.setUsage(St),this.mesh.frustumCulled=!1,this.mesh.count=0,this.mesh.renderOrder=4,this.matArr=this.mesh.instanceMatrix.array,t.add(this.mesh),this.spriteBatches=[new Ii(t,"player-arrow-basic",Lt),new Ii(t,"talisman",Lt,5,1,!0),new Ii(t,"slash-wave",Lt),new Ii(t,"bagua-orb",Lt),new Ii(t,"cavalry",Lt),new Ii(t,"player-arrow",Lt)],this.arrows=new h_(t,Lt,e),this.slashes=new xi(t,c_(),Lt,e),this.orbs=new xi(t,u_(),Lt,e),this.crystals=new xi(t,d_(),Lt,e),this.cavalries=new xi(t,f_(),Lt,e)}get object(){return this.mesh}reset(){this.alive.fill(0);for(let t=0;t<Lt;t++)this.free[t]=Lt-1-t;this.freeTop=Lt}acquire(){return this.freeTop===0?-1:this.free[--this.freeTop]}spawn(t,e,i,s,n,r,o,l,h,c,u,d,f,m,v,g=!1,p=6,w=!1){const A=this.acquire();A<0||(this.x[A]=t,this.z[A]=e,this.vx[A]=i*n,this.vz[A]=s*n,this.life[A]=h,this.invDur[A]=1/h,this.damage[A]=r,this.radius[A]=o,this.pierce[A]=l,this.homing[A]=g?1:0,this.turn[A]=p,this.kind[A]=c,this.cr[A]=u,this.cg[A]=d,this.cb[A]=f,this.len[A]=m,this.wid[A]=v,this.hy[A]=c===Is?.7:c===$n?.9:1,this.mode[A]=0,this.dusty[A]=w?1:0,this.trailT[A]=0,this.hitN[A]=0,this.alive[A]=1)}spawnOrbit(t,e,i,s,n,r,o,l){const h=this.acquire();h<0||(this.mode[h]=1,this.oAng[h]=t,this.oRad[h]=e,this.oVel[h]=i,this.damage[h]=s,this.radius[h]=l*.6,this.kind[h]=$n,this.cr[h]=n,this.cg[h]=r,this.cb[h]=o,this.len[h]=l,this.wid[h]=l,this.hy[h]=.9,this.atkT[h]=0,this.life[h]=1,this.invDur[h]=0,this.dusty[h]=0,this.trailT[h]=0,this.alive[h]=1)}clearOrbits(){for(let t=0;t<Lt;t++)this.alive[t]===1&&this.mode[t]===1&&(this.alive[t]=0,this.free[this.freeTop++]=t)}refreshOrbits(t,e,i){for(let s=0;s<Lt;s++)this.alive[s]===1&&this.mode[s]===1&&(this.damage[s]=t,this.oRad[s]=e,this.oVel[s]=i)}countOrbits(){let t=0;for(let e=0;e<Lt;e++)this.alive[e]===1&&this.mode[e]===1&&t++;return t}tryHit(t,e,i,s,n,r,o,l,h){const c=this.x[t],u=this.z[t],d=this.radius[t]+.7,f=i.query(c,u,d,r),m=this.mode[t]===1,v=t*Fl;for(let g=0;g<f;g++){const p=r[g];if(e.alive[p]===0)continue;const w=e.x[p]-c,A=e.z[p]-u,y=this.radius[t]+e.radius[p];if(w*w+A*A>y*y)continue;if(m){if(!o)continue}else{let b=!1;const x=this.hitN[t];for(let E=0;E<x;E++)if(this.hits[v+E]===p){b=!0;break}if(b)continue;x<Fl&&(this.hits[v+this.hitN[t]++]=p)}const M=e.boss[p]===1?this.damage[t]*bM*(e.groggy[p]===1?1.6:1)*(m?_M:1):this.damage[t],C=e.damageAt(p,M);if(s.spawn(M,e.x[p],e.scale[p]*.7,e.z[p],!1),l.projectileImpact(e.x[p],e.z[p],this.cr[t],this.cg[t],this.cb[t],this.kind[t]),this.kind[t]===Is?h.spawnRing(e.x[p],e.z[p],1.5,this.cr[t],this.cg[t],this.cb[t],.2):this.kind[t]===$n&&o?h.spawnRing(e.x[p],e.z[p],.75,this.cr[t],this.cg[t],this.cb[t],.18):this.kind[t]===_s&&h.spawnRing(e.x[p],e.z[p],1.9,1.5,.75,.35,.24),!C){if(this.kind[t]===_s||this.kind[t]===Is){const b=Math.hypot(this.vx[t],this.vz[t])||1;e.push(p,this.vx[t]/b,this.vz[t]/b,this.kind[t]===_s?7:3)}else if(m){const b=e.x[p]-c,x=e.z[p]-u,E=Math.hypot(b,x)||1;e.push(p,b/E,x/E,2)}}if(C&&n(p),!m&&(this.pierce[t]--,this.pierce[t]<0)){this.kill(t);return}}}kill(t){this.alive[t]=0,this.free[this.freeTop++]=t}update(t,e,i,s,n,r,o,l,h,c){for(let u=0;u<Lt;u++)if(this.alive[u]!==0){if(this.mode[u]===1){this.oAng[u]+=this.oVel[u]*t,this.x[u]=e+Math.cos(this.oAng[u])*this.oRad[u],this.z[u]=i+Math.sin(this.oAng[u])*this.oRad[u],this.atkT[u]-=t;const d=this.atkT[u]<=0;d&&(this.atkT[u]=.3),this.trailT[u]-=t,this.trailT[u]<=0&&(l.projectileTrail(this.x[u],this.z[u],0,0,this.cr[u],this.cg[u],this.cb[u],this.kind[u]),this.trailT[u]=.09),this.tryHit(u,s,n,r,o,c,d,l,h);continue}if(this.homing[u]){const d=MM(s,n,this.x[u],this.z[u],9,c);if(d>=0){const f=s.x[d]-this.x[u],m=s.z[d]-this.z[u],v=Math.hypot(f,m)||1,g=Math.hypot(this.vx[u],this.vz[u]),p=Math.min(1,this.turn[u]*t);this.vx[u]+=(f/v*g-this.vx[u])*p,this.vz[u]+=(m/v*g-this.vz[u])*p}}this.x[u]+=this.vx[u]*t,this.z[u]+=this.vz[u]*t,this.dusty[u]&&l.dust(this.x[u],this.z[u]),this.trailT[u]-=t,this.trailT[u]<=0&&(l.projectileTrail(this.x[u],this.z[u],this.vx[u],this.vz[u],this.cr[u],this.cg[u],this.cb[u],this.kind[u]),this.trailT[u]=this.kind[u]===_s?.035:this.kind[u]===na?.08:.055),this.tryHit(u,s,n,r,o,c,!1,l,h),this.alive[u]!==0&&(this.life[u]-=t,this.life[u]<=0&&this.kill(u))}}render(t){this.mesh.material.uniforms.uTime.value=t;for(const i of this.spriteBatches)i.begin(t);this.arrows.begin(),this.slashes.begin(),this.orbs.begin(),this.crystals.begin(),this.cavalries.begin();let e=0;for(let i=0;i<Lt;i++){if(this.alive[i]===0)continue;const s=e*16;let n,r,o;this.mode[i]===1||this.kind[i]===$n?(n=t*3,r=this.len[i],o=this.wid[i]):(n=Math.atan2(-this.vz[i],this.vx[i]),r=this.len[i],o=this.wid[i]);const l=Math.cos(n),h=Math.sin(n);this.matArr[s]=l*r,this.matArr[s+1]=0,this.matArr[s+2]=-h*r,this.matArr[s+3]=0,this.matArr[s+4]=0,this.matArr[s+5]=1,this.matArr[s+6]=0,this.matArr[s+7]=0,this.matArr[s+8]=h*o,this.matArr[s+9]=0,this.matArr[s+10]=l*o,this.matArr[s+11]=0,this.matArr[s+12]=this.x[i],this.matArr[s+13]=this.hy[i],this.matArr[s+14]=this.z[i],this.matArr[s+15]=1;const c=e*3;this.colArr[c]=this.cr[i],this.colArr[c+1]=this.cg[i],this.colArr[c+2]=this.cb[i],this.kindArr[e]=this.kind[i];let u=1;if(this.mode[i]===0){const f=this.life[i]*this.invDur[i];u=Math.min(1,f*4)*Math.min(1,(1-f)*6+.3)}if(this.fadeArr[e]=u,this.kind[i]===na||this.kind[i]===Kf)this.arrows.push(this.x[i],this.hy[i]+.2,this.z[i],n,this.len[i]*1.05,Math.max(this.wid[i],.5)*1.05,this.cr[i],this.cg[i],this.cb[i],u);else if(this.kind[i]===Is)this.slashes.push(this.x[i],this.hy[i]+.2,this.z[i],n,this.len[i],1,this.wid[i],this.cr[i],this.cg[i],this.cb[i],u);else if(this.kind[i]===$n)this.orbs.push(this.x[i],this.hy[i]+.2,this.z[i],n,this.len[i],this.len[i],this.wid[i],this.cr[i],this.cg[i],this.cb[i],u);else if(this.kind[i]===Po)this.crystals.push(this.x[i],this.hy[i]+.2,this.z[i],n+t*4,this.len[i]*.8,this.len[i]*.8,this.wid[i]*.8,this.cr[i],this.cg[i],this.cb[i],u);else if(this.kind[i]===_s)this.cavalries.push(this.x[i],this.hy[i]+.5,this.z[i],n,this.len[i]*.8,1.2,this.wid[i]*1.2,this.cr[i],this.cg[i],this.cb[i],u);else{const f=this.kind[i]===_s?this.len[i]:this.kind[i]===Is?Math.max(this.len[i],this.wid[i]):this.len[i]*1.18;this.spriteBatches[this.kind[i]].push(this.x[i],this.hy[i]+.055,this.z[i],n,f,f,u)}e++}this.mesh.count=e,this.mesh.instanceMatrix.needsUpdate=!0,this.colAttr.needsUpdate=!0,this.kindAttr.needsUpdate=!0,this.fadeAttr.needsUpdate=!0;for(const i of this.spriteBatches)i.end();this.arrows.end(),this.slashes.end(),this.orbs.end(),this.crystals.end(),this.cavalries.end()}}function MM(a,t,e,i,s,n){const r=t.query(e,i,s,n);let o=-1,l=s*s;for(let h=0;h<r;h++){const c=n[h];if(a.alive[c]===0)continue;const u=a.x[c]-e,d=a.z[c]-i,f=u*u+d*d;f<l&&(l=f,o=c)}return o}const _e=64,Ed=.25;class wM{x=new Float32Array(_e);z=new Float32Array(_e);radius=new Float32Array(_e);life=new Float32Array(_e);maxLife=new Float32Array(_e);dps=new Float32Array(_e);vx=new Float32Array(_e);vz=new Float32Array(_e);tickT=new Float32Array(_e);cr=new Float32Array(_e);cg=new Float32Array(_e);cb=new Float32Array(_e);alive=new Uint8Array(_e);free=new Int32Array(_e);freeTop=0;mesh;matArr;colArr;fadeArr;colAttr;fadeAttr;spawnLight=null;constructor(t){for(let s=0;s<_e;s++)this.free[s]=_e-1-s;this.freeTop=_e;const e=new Ao(1,40);e.rotateX(-Math.PI/2),this.colArr=new Float32Array(_e*3),this.fadeArr=new Float32Array(_e),this.colAttr=new Wt(this.colArr,3),this.fadeAttr=new Wt(this.fadeArr,1),this.colAttr.setUsage(St),this.fadeAttr.setUsage(St),e.setAttribute("aColor",this.colAttr),e.setAttribute("aFade",this.fadeAttr);const i=new Ot({uniforms:{uTime:{value:0}},vertexShader:`
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
      `,transparent:!0,blending:He,depthWrite:!1,depthTest:!0});this.mesh=new Se(e,i,_e),this.mesh.instanceMatrix.setUsage(St),this.mesh.frustumCulled=!1,this.mesh.count=0,this.mesh.renderOrder=3,this.matArr=this.mesh.instanceMatrix.array,t.add(this.mesh)}get object(){return this.mesh}reset(){this.alive.fill(0);for(let t=0;t<_e;t++)this.free[t]=_e-1-t;this.freeTop=_e}spawn(t,e,i,s,n,r=2.4,o=.9,l=.25,h=0,c=0){if(this.freeTop===0)return;const u=this.free[--this.freeTop];this.x[u]=t,this.z[u]=e,this.radius[u]=i,this.life[u]=s,this.maxLife[u]=s,this.dps[u]=n,this.vx[u]=h,this.vz[u]=c,this.tickT[u]=0,this.cr[u]=r,this.cg[u]=o,this.cb[u]=l,this.alive[u]=1}update(t,e,i,s,n,r,o){for(let l=0;l<_e;l++){if(this.alive[l]===0)continue;if(this.x[l]+=this.vx[l]*t,this.z[l]+=this.vz[l]*t,this.life[l]-=t,this.life[l]<=0){this.alive[l]=0,this.free[this.freeTop++]=l;continue}if(Math.random()<.22&&r.fireEmber(this.x[l],this.z[l],this.radius[l]*.8),this.spawnLight&&Math.random()<.55){const m=.35+Math.random()*.3;this.spawnLight(this.x[l],this.z[l],this.cr[l]*m,this.cg[l]*m,this.cb[l]*m,this.radius[l]*2,.14)}if(this.tickT[l]-=t,this.tickT[l]>0)continue;this.tickT[l]=Ed;const h=this.x[l],c=this.z[l],u=this.radius[l],d=this.dps[l]*Ed,f=i.query(h,c,u,o);for(let m=0;m<f;m++){const v=o[m];if(e.alive[v]===0)continue;const g=e.x[v]-h,p=e.z[v]-c,w=u+e.radius[v];if(g*g+p*p>w*w)continue;const A=e.damageAt(v,d);s.spawn(d,e.x[v],e.scale[v]*.7,e.z[v],!1),A&&n(v)}}}render(t){this.mesh.material.uniforms.uTime.value=t;let e=0;for(let i=0;i<_e;i++){if(this.alive[i]===0)continue;const s=e*16,n=this.radius[i];this.matArr[s]=n,this.matArr[s+5]=1,this.matArr[s+10]=n,this.matArr[s+12]=this.x[i],this.matArr[s+13]=.05,this.matArr[s+14]=this.z[i],this.matArr[s+15]=1;const r=e*3;this.colArr[r]=this.cr[i],this.colArr[r+1]=this.cg[i],this.colArr[r+2]=this.cb[i];const o=this.life[i]/this.maxLife[i];this.fadeArr[e]=Math.min(1,(1-o)*8+.4)*Math.min(1,o*4+.2),e++}this.mesh.count=e,this.mesh.instanceMatrix.needsUpdate=!0,this.colAttr.needsUpdate=!0,this.fadeAttr.needsUpdate=!0}}const oi=12,SM=2.6,Cd=1;class AM{x=new Float32Array(oi);z=new Float32Array(oi);mag=new Uint8Array(oi);boss=new Uint8Array(oi);alive=new Uint8Array(oi);free=new Int32Array(oi);freeTop=0;time=0;mesh;matArr;colArr;colAttr;constructor(t){for(let s=0;s<oi;s++)this.free[s]=oi-1-s;this.freeTop=oi;const e=new hs(.8,.6,.8),i=new Mi({toneMapped:!1,vertexColors:!1});this.mesh=new Se(e,i,oi),this.mesh.instanceMatrix.setUsage(St),this.colArr=new Float32Array(oi*3),this.colAttr=new Wt(this.colArr,3),this.colAttr.setUsage(St),this.mesh.instanceColor=this.colAttr,this.mesh.frustumCulled=!1,this.mesh.count=0,this.mesh.renderOrder=1,this.matArr=this.mesh.instanceMatrix.array,t.add(this.mesh)}get object(){return this.mesh}reset(){this.alive.fill(0);for(let t=0;t<oi;t++)this.free[t]=oi-1-t;this.freeTop=oi}spawn(t,e,i){if(this.freeTop===0)return;const s=this.free[--this.freeTop];this.x[s]=t,this.z[s]=e,this.mag[s]=0,this.boss[s]=i?1:0,this.alive[s]=1}update(t,e,i,s,n){this.time+=t;const r=SM*s,o=r*r,l=Cd*Cd;for(let h=0;h<oi;h++){if(this.alive[h]===0)continue;const c=e-this.x[h],u=i-this.z[h],d=c*c+u*u;if(this.mag[h]===0&&d<=o&&(this.mag[h]=1),this.mag[h]){const f=Math.sqrt(d)||1,m=5+8/f;this.x[h]+=c/f*m*t,this.z[h]+=u/f*m*t,d<=l&&(n(this.boss[h]===1),this.alive[h]=0,this.free[this.freeTop++]=h)}}}render(){let t=0;const e=this.time;for(let i=0;i<oi;i++){if(this.alive[i]===0)continue;const s=t*16,n=e*2+i,r=Math.cos(n),o=Math.sin(n),l=1+.12*Math.sin(e*5+i);this.matArr[s]=r*l,this.matArr[s+2]=-o*l,this.matArr[s+5]=l,this.matArr[s+8]=o*l,this.matArr[s+10]=r*l,this.matArr[s+12]=this.x[i],this.matArr[s+13]=.7+Math.sin(e*3+i)*.15,this.matArr[s+14]=this.z[i],this.matArr[s+15]=1;const h=t*3;this.boss[i]===1?(this.colArr[h]=2.6,this.colArr[h+1]=1.4,this.colArr[h+2]=2.4):(this.colArr[h]=2.8,this.colArr[h+1]=2,this.colArr[h+2]=.6),t++}this.mesh.count=t,this.mesh.instanceMatrix.needsUpdate=!0,this.colAttr.needsUpdate=!0}}const TM=3,Rd=[100,500,1e3],EM=["百人斬!","五百人斬!","千人斬!"],CM=[30,120,400],RM=200;class PM{count=0;timer=0;nextMilestone=0;onBanner;onPunch;constructor(t,e){this.onBanner=t,this.onPunch=e}reset(){this.count=0,this.timer=0,this.nextMilestone=0}get fever(){return this.count>=RM}onKill(){this.count++,this.timer=TM,this.onPunch();let t=0;for(;this.nextMilestone<Rd.length&&this.count>=Rd[this.nextMilestone];)this.onBanner(EM[this.nextMilestone]),t+=CM[this.nextMilestone],this.nextMilestone++;return t}update(t){this.count>0&&(this.timer-=t,this.timer<=0&&(this.count=0,this.nextMilestone=0))}}const Ll=5,FM=.3,Pd={zhaoyun:{char:"竈",r:2.4,g:.6,b:.2},guanyu:{char:"凪",r:.2,g:.8,b:2.4},zhangfei:{char:"爆",r:2.5,g:.3,b:1.2},zhugeliang:{char:"惑",r:1.8,g:.4,b:2.2},huangzhong:{char:"蝶",r:.6,g:.3,b:.9},lvbu:{char:"炎",r:2.5,g:.5,b:.1},sunshangxiang:{char:"術",r:.4,g:.8,b:2.2},default:{char:"滅",r:1.5,g:1.4,b:1}};class LM{gauge=0;active=!1;chargeMul=1;killRate=0;chargeLockT=0;timer=0;tick=0;stormAngle=0;dashIdx=0;dashTimer=0;initDone=!1;introDone=!1;heroMusou;onActivateFx;constructor(t,e){this.heroMusou=t,this.onActivateFx=e}setHero(t){this.heroMusou=t}reset(){this.gauge=0,this.active=!1,this.timer=0,this.tick=0,this.dashIdx=0,this.dashTimer=0,this.initDone=!1,this.introDone=!1,this.chargeMul=1,this.killRate=0,this.chargeLockT=0}get ready(){return this.gauge>=100}get enemyTimeScale(){return this.active?FM:1}addKill(t){if(this.active||this.chargeLockT>0)return;this.killRate+=.25;const e=1+Math.min(1.5,t*.02),i=Math.min(e,2/Math.max(this.killRate,.5));this.gauge=Math.min(100,this.gauge+i*this.chargeMul)}addHit(){this.active||(this.gauge=Math.min(100,this.gauge+3*this.chargeMul))}activate(){return!this.ready||this.active?!1:(this.active=!0,this.timer=Ll,this.tick=0,this.stormAngle=0,this.dashIdx=0,this.dashTimer=0,this.initDone=!1,this.introDone=!1,this.gauge=0,this.onActivateFx(),!0)}update(t,e,i){if(this.killRate*=Math.exp(-t/4),this.chargeLockT>0&&(this.chargeLockT-=t),!this.active)return!1;this.timer-=t,this.tick-=t,this.dashTimer-=t;const s=Pd[this.heroMusou]??Pd.default;switch(this.introDone||(this.introDone=!0,e.effects.spawnCrest(i.x,i.z,s.char,s.r,s.g,s.b,Ll),this.heroMusou==="zhugeliang"&&e.effects.spawnBaguaSigil(i.x,i.z,Ll)),e.effects.spawnMusouLight?.(i.x,i.z,s.r*.32,s.g*.32,s.b*.32,6.5,.07),this.heroMusou){case"zhaoyun":this.runZhaoyun(e,i);break;case"guanyu":this.runGuanyu(e,i);break;case"zhangfei":this.runZhangfei(e,i);break;case"zhugeliang":this.runZhuge(e,i);break;case"huangzhong":this.runHuang(e,i);break;case"lvbu":this.runLvbu(e,i);break;case"sunshangxiang":this.runSunshangxiang(e,i);break;default:this.runCommon(e,i);break}return this.timer<=0?(this.active=!1,this.chargeLockT=6,e.effects.spawnTripleShock(i.x,i.z,30,s.r,s.g,s.b),e.effects.spawnRing(i.x,i.z,26,2.2,1.7,.8,.7),e.effects.spawnMusouLight?.(i.x,i.z,s.r*.6,s.g*.6,s.b*.6,15,.5),this.aoe(e,i.x,i.z,30,400*e.stats.damageMul,6),!0):!1}runCommon(t,e){if(this.tick>0)return;this.tick=.1,this.stormAngle+=.9;const i=Math.cos(this.stormAngle),s=Math.sin(this.stormAngle);t.effects.spawnSlashArc(e.x,e.z,i,s,7,1.3,1.6,1.2,2.4,.24),this.aoe(t,e.x,e.z,7.5,60*t.stats.damageMul,0)}runZhaoyun(t,e){if(this.runCommon(t,e),this.dashTimer>0)return;this.dashTimer=.5;const i=this.dashIdx/8*Math.PI*2;this.dashIdx++;const s=Math.cos(i),n=Math.sin(i);e.x+=s*3.2,e.z+=n*3.2,e.faceX=s,e.faceZ=n,t.effects.spawnThrust(e.x,e.z,s,n,9,2.4,.6,.2,2.6);for(let r=0;r<4;r++)t.effects.spawnFlameTrail(e.x-s*r*1.8,e.z-n*r*1.8,2.4,.6,.2);this.capsule(t,e.x,e.z,s,n,9,1.2,90*t.stats.damageMul)}runGuanyu(t,e){if(this.tick>0)return;this.tick=.06,this.stormAngle+=.55;const i=Math.cos(this.stormAngle),s=Math.sin(this.stormAngle);t.effects.spawnSlashArc(e.x,e.z,i,s,9.5,.2,.8,2.4,1.1,.2),t.effects.spawnFlameTrail(e.x+i*9,e.z+s*9,.2,.8,2.4),this.aoe(t,e.x,e.z,9.5,55*t.stats.damageMul,5)}runZhangfei(t,e){if(!this.initDone){this.initDone=!0,this.stunAll(t,e.x,e.z,30,3),t.effects.spawnTripleShock(e.x,e.z,28,2.5,.3,1.2);for(let i=0;i<28;i++){const s=i/28*Math.PI*2;t.particles.dust(e.x+Math.cos(s)*3,e.z+Math.sin(s)*3)}this.aoe(t,e.x,e.z,30,90*t.stats.damageMul,12)}this.tick>0||(this.tick=.5,t.effects.spawnRing(e.x,e.z,14,2.5,.3,1.2,.4),this.aoe(t,e.x,e.z,26,70*t.stats.damageMul,4))}runZhuge(t,e){if(this.tick>0)return;this.tick=.12;const i=t.enemies.randomAlive();if(i<0)return;const s=t.enemies.x[i],n=t.enemies.z[i];t.zones.spawn(s,n,3.5,2,30,1.8,.4,2.2),this.aoe(t,s,n,3,80*t.stats.damageMul,0)}runHuang(t,e){if(this.tick>0)return;this.tick=.08;const i=12,s=this.stormAngle;this.stormAngle+=.4;const n=30*t.stats.damageMul;for(let r=0;r<i;r++){const o=s+r/i*Math.PI*2;t.projectiles.spawn(e.x,e.z,Math.cos(o),Math.sin(o),18,n,.5,3,1.6,na,.7,.3,.9,1.6,.55)}for(let r=0;r<3;r++){const o=4+Math.random()*16,l=Math.random()*Math.PI*2,h=e.x+Math.cos(l)*o,c=e.z+Math.sin(l)*o;t.effects.spawnMeteorArrow(h,c,.7,.3,.9,.45+Math.random()*.25),this.aoe(t,h,c,2.4,n*.7,2)}}runSunshangxiang(t,e){if(!(this.tick>0)){this.tick=.1,this.stormAngle+=.7;for(let i=0;i<3;i++){const s=this.stormAngle+i/3*Math.PI*2;t.effects.spawnSlashArc(e.x,e.z,Math.cos(s),Math.sin(s),6.5,.4,.8,2.2,1.05,.2)}if(this.aoe(t,e.x,e.z,7,62*t.stats.damageMul,4),this.dashTimer<=0){this.dashTimer=.8;const i=12,s=26*t.stats.damageMul;for(let n=0;n<i;n++){const r=this.stormAngle+n/i*Math.PI*2;t.projectiles.spawn(e.x,e.z,Math.cos(r),Math.sin(r),17,s,.5,3,1.5,na,.4,.8,2.2,1.6,.55)}}}}runLvbu(t,e){t.particles.dust(e.x,e.z),!(this.tick>0)&&(this.tick=.28,t.effects.spawnFireWall(e.x,e.z,e.faceX,e.faceZ,6,2.5,.1),t.effects.spawnRing(e.x,e.z,2.6,2.5,.5,.1,.3),this.aoe(t,e.x,e.z,7,85*t.stats.damageMul*2.3,6))}aoe(t,e,i,s,n,r){const o=t.enemies,l=t.hash.query(e,i,s,t.scratch);for(let h=0;h<l;h++){const c=t.scratch[h];if(o.alive[c]===0)continue;const u=o.x[c]-e,d=o.z[c]-i,f=u*u+d*d;if(f>s*s)continue;const m=o.damageAt(c,n);if(r>0){const v=Math.sqrt(f)||1;o.push(c,u/v,d/v,r)}m&&t.onKill(c)}}stunAll(t,e,i,s,n){const r=t.enemies,o=t.hash.query(e,i,s,t.scratch);for(let l=0;l<o;l++){const h=t.scratch[l];r.alive[h]===0||r.boss[h]===1||r.stun[h]<n&&(r.stun[h]=n)}}capsule(t,e,i,s,n,r,o,l){const h=t.enemies,c=e+s*r,u=i+n*r,d=(e+c)*.5,f=(i+u)*.5,m=t.hash.query(d,f,r*.5+o+1.2,t.scratch);for(let v=0;v<m;v++){const g=t.scratch[v];if(h.alive[g]===0)continue;const p=o+h.radius[g],w=DM(h.x[g],h.z[g],e,i,c,u),A=e+(c-e)*w,y=i+(u-i)*w,T=h.x[g]-A,M=h.z[g]-y;if(T*T+M*M>p*p)continue;const C=h.damageAt(g,l);h.push(g,s,n,6),C&&t.onKill(g)}}}function DM(a,t,e,i,s,n){const r=s-e,o=n-i,l=r*r+o*o;if(l<=0)return 0;let h=((a-e)*r+(t-i)*o)/l;return h<0?h=0:h>1&&(h=1),h}const Yf={yuanshao:{name:"도마",hanja:"童磨",charIndex:1,sheet:Ei,pattern:"fan",hp:6e3,speed:2.5,contact:14,radius:1.4,tr:.8,tg:1.2,tb:1.5},xiahoudun:{name:"아카자",hanja:"猗窩座",charIndex:5,sheet:ao,pattern:"dash",hp:6e3,speed:2.9,contact:16,radius:1.45,tr:1.5,tg:.8,tb:1.1},sunce:{name:"코쿠시보",hanja:"黒死牟",charIndex:6,sheet:ao,pattern:"rush",hp:5800,speed:3.3,contact:15,radius:1.35,tr:1,tg:.6,tb:1.3},dongzhuo:{name:"엔무",hanja:"魘夢",charIndex:2,sheet:Ei,pattern:"firezone",hp:3600,speed:2.1,contact:18,radius:1.6,tr:.8,tg:1.3,tb:1.2},simayi:{name:"루이",hanja:"累",charIndex:9,sheet:Ei,pattern:"delaybolt",hp:4e3,speed:2.3,contact:16,radius:1.5,tr:1.2,tg:1.2,tb:1.2},zhouyu:{name:"교코",hanja:"玉壺",charIndex:3,sheet:Ei,pattern:"firezone",hp:3600,speed:2.4,contact:16,radius:1.5,tr:.7,tg:1.4,tb:.9},lvbu:{name:"무잔",hanja:"鬼舞辻 無惨",charIndex:7,sheet:ao,pattern:"lvbu",hp:7500,speed:3.6,contact:20,radius:1.5,tr:1.6,tg:.4,tb:.4},huaxiong:{name:"나키메",hanja:"鳴女",charIndex:8,sheet:Ei,pattern:"dash",hp:5200,speed:2.7,contact:16,radius:1.45,tr:.7,tg:.4,tb:.8},dianwei:{name:"규타로",hanja:"妓夫太郎",charIndex:4,sheet:Ei,pattern:"dash",hp:5e3,speed:2.8,contact:17,radius:1.4,tr:1.3,tg:1.1,tb:.7},gaoshun:{name:"다키",hanja:"堕姫",charIndex:0,sheet:Ei,pattern:"fan",hp:5e3,speed:2.5,contact:15,radius:1.35,tr:1.5,tg:.8,tb:1.2},xiahouyuan:{name:"한텐구",hanja:"半天狗",charIndex:6,sheet:Ei,pattern:"delaybolt",hp:5e3,speed:2.6,contact:15,radius:1.4,tr:1.1,tg:.9,tb:.6},lumeng:{name:"카이가쿠",hanja:"獪岳",charIndex:7,sheet:Ei,pattern:"firezone",hp:5e3,speed:2.5,contact:16,radius:1.45,tr:.5,tg:.8,tb:1.5},luxun:{name:"손 혈귀",hanja:"手鬼",charIndex:5,sheet:Ei,pattern:"fan",hp:5e3,speed:2.5,contact:15,radius:1.4,tr:.4,tg:1.4,tb:.8}},Fd=["dianwei","gaoshun","xiahouyuan","lumeng","luxun"],IM=192;class UM{active=!1;idx=-1;typeId="";def=null;atlas;onWarn;atk1=0;atk2=0;atk3=0;dashState=0;dashT=0;dashDx=0;dashDz=0;boltX=new Float32Array(3);boltZ=new Float32Array(3);boltT=-1;groggyT=0;groggyCd=0;constructor(t,e){this.atlas=t,this.onWarn=e}get name(){return this.def?this.def.name:""}get hanja(){return this.def?this.def.hanja:""}hpFrac(t){if(!this.active||this.idx<0)return 0;const e=t.enemies;return e.alive[this.idx]===0?0:Math.max(0,e.hp[this.idx]/e.maxHp[this.idx])}spawn(t,e,i,s,n){const r=Yf[t];if(!r)return;const o=i.enemies,l=r.hp*(1+.08*e),h=o.spawn(s,n-16,l,r.speed,r.radius,r.contact,40,2.2,r.sheet,r.charIndex*IM,0);h<0||(o.boss[h]=1,o.kbResist[h]=.9,o.controlled[h]=1,o.tr[h]=r.tr,o.tg[h]=r.tg,o.tb[h]=r.tb,o.labels[h]=`${r.name} ${r.hanja}`,o.markSpecial(h),this.idx=h,this.typeId=t,this.def=r,this.active=!0,this.onWarn(r.name,r.hanja,t),this.atk1=2,this.atk2=r.pattern==="lvbu"?1.15:3.5,this.atk3=6,this.dashState=0,this.boltT=-1,this.groggyT=0,this.groggyCd=4,i.effects.spawnRing(s,n,24,2.4,1.2,.6,.9),i.effects.spawnLight?.(s,n-16,r.tr*.45,r.tg*.45,r.tb*.45,8,.55),this.onWarn(r.name,r.hanja,t))}update(t,e,i,s){if(!this.active)return;const n=s.x,r=s.z,o=e.enemies;if(o.alive[this.idx]===0){this.active=!1,this.idx=-1;return}const l=this.idx,h=this.def;if(this.groggyCd-=t,this.groggyT>0){this.groggyT-=t,o.groggy[l]=1,o.tr[l]=.55,o.tg[l]=.78,o.tb[l]=1.28,this.groggyT<=0&&(o.groggy[l]=0,o.tr[l]=h.tr,o.tg[l]=h.tg,o.tb[l]=h.tb);return}let c=n-o.x[l],u=r-o.z[l];const d=Math.hypot(c,u)||1;if(c/=d,u/=d,this.typeId==="xiahoudun"&&(this.atk3<=0&&(this.atk3=4,e.effects.spawnTelegraph(0,o.x[l],o.z[l],0,12,12,0,.8),e.effects.spawnRing(o.x[l],o.z[l],6,.4,.8,2.2,.85)),d<=6?o.speed[l]=h.speed*1.35:o.speed[l]=h.speed),this.dashState===2)o.x[l]+=this.dashDx*18*t,o.z[l]+=this.dashDz*18*t;else if(this.dashState===1)o.flash[l]=.6;else{const f=h.pattern==="fan"?d>9?1:-.2:1;o.x[l]+=c*o.speed[l]*f*t,o.z[l]+=u*o.speed[l]*f*t}switch(this.atk1-=t,this.atk2-=t,this.atk3-=t,h.pattern){case"fan":this.updateFan(e,i,l,c,u);break;case"firezone":this.updateFirezone(e,i,l,n,r,c,u);break;case"dash":this.updateDash(t,e,i,l,c,u);break;case"rush":this.updateRush(t,e,i,l,c,u);break;case"delaybolt":this.updateDelaybolt(t,e,i,l,n,r);break;case"lvbu":this.updateLvbu(t,e,i,l,s,c,u);break}}tryGroggy(t,e){if(this.groggyCd>0||this.groggyT>0)return;const i=t.enemies,s=i.hp[e]/i.maxHp[e]<.25;this.groggyT=s?1.2:1.8,this.groggyCd=this.groggyT+5,i.groggy[e]=1,i.hitPunch[e]=1,t.effects.spawnCrest(i.x[e],i.z[e],"隙",.6,.85,1.4,this.groggyT),t.particles.dust(i.x[e],i.z[e])}updateFan(t,e,i,s,n){const r=t.enemies;if(this.atk1<=0){this.atk1=2.4;const o=Math.atan2(n,s);for(let l=-3;l<=3;l++){const h=o+l*.16;e.spawn(r.x[i],r.z[i],Math.cos(h),Math.sin(h),10,12,!1,Vi)}t.effects.spawnRing(r.x[i],r.z[i],3,1.4,1.2,2,.4),t.effects.spawnTelegraph(od,r.x[i],r.z[i],Math.atan2(n,s),22,22,.62,.5),this.tryGroggy(t,i)}if(this.atk2<=0){this.atk2=5.2;const o=Math.atan2(n,s);for(let l=-1;l<=1;l++){const h=o+l*.32;e.spawn(r.x[i],r.z[i],Math.cos(h),Math.sin(h),5.4,16,!0,Mc)}t.effects.spawnRing(r.x[i],r.z[i],4.2,.7,2.1,1.2,.55)}}updateFirezone(t,e,i,s,n,r,o){const l=t.enemies;if(this.atk1<=0){this.atk1=3.2;for(let h=0;h<4;h++){const c=t.rng.next()*Math.PI*2,u=t.rng.range(0,5),d=s+Math.cos(c)*u,f=n+Math.sin(c)*u;t.effects.spawnTelegraph(Oh,d,f,0,6,6,0,.6),t.zones.spawn(d,f,3,3.2,16,2.6,.7,.2)}t.effects.spawnRing(l.x[i],l.z[i],4,2.4,1,.4,.5),this.tryGroggy(t,i)}if(this.atk2<=0){this.atk2=4.6;const h=Math.atan2(o,r);e.spawn(l.x[i],l.z[i],r,o,7.2,24,!1,bs);for(const c of[-.32,.32]){const u=h+c;e.spawn(l.x[i],l.z[i],Math.cos(u),Math.sin(u),8.5,17,!1,vo)}t.effects.spawnRing(l.x[i],l.z[i],4.8,2.6,.75,.2,.55)}}updateDash(t,e,i,s,n,r){const o=e.enemies;if(this.dashState===1?(this.dashT-=t,this.dashT<=0&&(this.dashState=2,this.dashT=.5,o.damage[s]=46,e.effects.spawnThrust(o.x[s],o.z[s],this.dashDx,this.dashDz,12,3.2,2.2,.7,.6),e.effects.spawnDecal?.(o.x[s],o.z[s],4,2.4,1,.4))):this.dashState===2&&(this.dashT-=t,e.particles.dust(o.x[s],o.z[s]),Math.random()<.4&&e.effects.spawnDecal?.(o.x[s],o.z[s],2.6,2.2,.9,.35),this.dashT<=0&&(this.dashState=0,o.damage[s]=this.def.contact,this.tryGroggy(e,s))),this.atk1<=0&&this.dashState===0&&(this.atk1=3,this.dashState=1,this.dashT=.55,this.dashDx=n,this.dashDz=r,e.effects.spawnTelegraph(bl,o.x[s]+n*5,o.z[s]+r*5,Math.atan2(r,n),10,4.2,0,.55)),this.atk2<=0){this.atk2=3.4;const l=Math.atan2(r,n);for(let h=-1;h<=1;h++){const c=l+h*.22;i.spawn(o.x[s],o.z[s],Math.cos(c),Math.sin(c),11,14,!1,bs)}}}updateRush(t,e,i,s,n,r){const o=e.enemies;if(this.dashState===2){if(this.dashT-=t,Math.random()<8*t){const l=e.rng.next()*Math.PI*2;i.spawn(o.x[s],o.z[s],Math.cos(l),Math.sin(l),8,12,!1,ln)}this.dashT<=0&&(this.dashState=0,o.damage[s]=this.def.contact,this.tryGroggy(e,s))}this.atk1<=0&&this.dashState===0&&(this.atk1=1.6,this.dashState=2,this.dashT=.3,this.dashDx=n,this.dashDz=r,o.damage[s]=30,e.effects.spawnTelegraph(bl,o.x[s]+n*4,o.z[s]+r*4,Math.atan2(r,n),8,3.4,0,.3),e.effects.spawnThrust(o.x[s],o.z[s],n,r,7,2.4,.5,1.25,2.2,.34,!1))}updateDelaybolt(t,e,i,s,n,r){if(e.enemies,this.atk1<=0&&this.boltT<0){this.atk1=3.6;for(let o=0;o<3;o++){const l=e.rng.next()*Math.PI*2,h=e.rng.range(0,6);this.boltX[o]=n+Math.cos(l)*h,this.boltZ[o]=r+Math.sin(l)*h,e.effects.spawnTelegraph(Oh,this.boltX[o],this.boltZ[o],0,6,6,0,.7)}this.boltT=.7}if(this.boltT>=0&&(this.boltT-=t,this.boltT<=0)){this.boltT=-1;for(let o=0;o<3;o++){e.effects.spawnLightning(this.boltX[o],this.boltZ[o],.7,1.2,2.6,9);for(let l=0;l<6;l++){const h=l/6*Math.PI*2;i.spawn(this.boltX[o],this.boltZ[o],Math.cos(h),Math.sin(h),5,16,!1,ln)}}this.tryGroggy(e,s)}}updateLvbu(t,e,i,s,n,r,o){const l=e.enemies,h=n.x,c=n.z;if(this.dashState===1?(this.dashT-=t,this.dashT<=0&&(this.dashState=2,this.dashT=.45,l.damage[s]=40,e.effects.spawnThrust(l.x[s],l.z[s],this.dashDx,this.dashDz,10,3,2.2,.4,.4))):this.dashState===2&&(this.dashT-=t,e.particles.dust(l.x[s],l.z[s]),this.dashT<=0&&(this.dashState=0,l.damage[s]=this.def.contact,this.tryGroggy(e,s))),this.atk1<=0&&this.dashState===0&&(this.atk1=4.5,this.dashState=1,this.dashT=.6,this.dashDx=r,this.dashDz=o,e.effects.spawnTelegraph(bl,l.x[s]+r*4.5,l.z[s]+o*4.5,Math.atan2(o,r),9,4.2,0,.6)),this.atk2<=0){this.atk2=3.5;const u=Math.hypot(h-l.x[s],c-l.z[s])||1;n.nudge(-r,-o,4.8),e.effects.spawnRing(l.x[s],l.z[s],u,2.5,.3,.3,.9),e.particles.dust(n.x,n.z);const d=Math.atan2(o,r);e.effects.spawnTelegraph(od,l.x[s],l.z[s],d,20,20,.5,.4);for(let f=-2;f<=2;f++){const m=d+f*.2;i.spawn(l.x[s],l.z[s],Math.cos(m),Math.sin(m),13,14,!1,ln)}this.tryGroggy(e,s)}if(this.atk3<=0){this.atk3=11;const u=Ci.general_blade,d=this.atlas.soldierBlockPx(u.charIndex);for(let f=0;f<3;f++){const m=e.rng.next()*Math.PI*2,v=3+e.rng.range(0,3);l.spawn(h+Math.cos(m)*v,c+Math.sin(m)*v,u.hp*2,u.speed,u.radius,u.damage,u.gemValue,u.worldScale,0,d,0)}e.effects.spawnRing(l.x[s],l.z[s],5,2,.4,.4,.5)}}}const Xn=40;class zM{d;cartTimes=[];cartFired=0;rush4=!1;rush7=!1;meteorCooldown=0;busyT=0;rushRemaining=0;rushAcc=0;rushDirX=0;rushDirZ=0;showerRemaining=0;showerAcc=0;mx=new Float32Array(Xn);mz=new Float32Array(Xn);mt=new Float32Array(Xn);mActive=new Uint8Array(Xn);constructor(t){this.d=t,this.reset()}reset(){const t=this.d.rng;this.cartTimes=[t.range(120,300),t.range(300,480)].sort((e,i)=>e-i),this.cartFired=0,this.rush4=!1,this.rush7=!1,this.meteorCooldown=0,this.busyT=0,this.rushRemaining=0,this.showerRemaining=0,this.mActive.fill(0)}update(t,e){this.busyT>0&&(this.busyT-=t);const i=this.busyT<=0;i&&this.cartFired<this.cartTimes.length&&e>=this.cartTimes[this.cartFired]?(this.cartFired++,this.spawnSupplyCart(e),this.busyT=14):i&&!this.rush4&&e>=240?(this.rush4=!0,this.startRush(),this.busyT=32):i&&!this.rush7&&e>=420?(this.rush7=!0,this.startRush(),this.busyT=32):i&&e>=360&&(this.meteorCooldown-=t,this.meteorCooldown<=0&&this.showerRemaining<=0&&(this.meteorCooldown=this.d.rng.range(35,55),this.startMeteorShower(),this.busyT=16)),this.rushRemaining>0&&this.tickRush(t,e),this.showerRemaining>0&&this.tickShower(t),this.tickMeteorImpacts(t)}forceRush(){this.startRush()}forceMeteor(){this.startMeteorShower()}forceCart(t){this.spawnSupplyCart(t)}startRush(){const t=this.d.rng.next()*Math.PI*2;this.rushDirX=Math.cos(t),this.rushDirZ=Math.sin(t),this.rushRemaining=30,this.rushAcc=0,this.d.banner(Mt()==="en"?"Yellow Turban Horde 黃巾大軍":"황건 대군 黃巾大軍","#e8c667")}tickRush(t,e){this.rushRemaining-=t,this.rushAcc+=t*14;const i=this.d.playerX(),s=this.d.playerZ(),n=e/60,r=1+.13*n+.011*n*n;for(;this.rushAcc>=1;){this.rushAcc-=1;const o=this.d.rng.range(-16,16),l=-this.rushDirZ,h=this.rushDirX,c=i-this.rushDirX*26+l*o,u=s-this.rushDirZ*26+h*o,d=this.d.rng.next()<.7?Ci.worker:Ci.runner;this.d.enemies.spawn(c,u,d.hp*r,d.speed,d.radius,d.damage,d.gemValue,d.worldScale,Ei,this.d.atlas.soldierBlockPx(d.charIndex),0)}}startMeteorShower(){this.showerRemaining=15,this.showerAcc=0,this.d.banner(Mt()==="en"?"Meteor Shower 流星雨":"유성우 流星雨","#ff9a3c")}tickShower(t){for(this.showerRemaining-=t,this.showerAcc+=t*3;this.showerAcc>=1;)this.showerAcc-=1,this.queueMeteor()}queueMeteor(){let t=-1;for(let l=0;l<Xn;l++)if(this.mActive[l]===0){t=l;break}if(t<0)return;const e=this.d.playerX(),i=this.d.playerZ(),s=this.d.rng.next()*Math.PI*2,n=this.d.rng.range(0,15),r=e+Math.cos(s)*n,o=i+Math.sin(s)*n;this.mx[t]=r,this.mz[t]=o,this.mt[t]=1,this.mActive[t]=1,this.d.effects.spawnRing(r,o,3.2,2,.7,.2,1)}tickMeteorImpacts(t){for(let e=0;e<Xn;e++){if(this.mActive[e]===0||(this.mt[e]-=t,this.mt[e]>0))continue;this.mActive[e]=0;const i=this.mx[e],s=this.mz[e];this.d.effects.spawnRing(i,s,4.5,2.6,1.2,.4,.5),this.d.zones.spawn(i,s,3.5,.5,120,2.6,.8,.2),this.d.particles.burst(i,s,2.6,1.2,.4,24,7);const n=this.d.playerX()-i,r=this.d.playerZ()-s;n*n+r*r<3.5*3.5&&this.d.hitPlayer(28)}}spawnSupplyCart(t){const e=this.d.enemies,i=t/60,s=1+.13*i+.011*i*i,n=this.d.playerX(),r=this.d.playerZ(),o=this.d.rng.next()*Math.PI*2,l=Ci.runner,h=n+Math.cos(o)*12,c=r+Math.sin(o)*12,u=e.spawn(h,c,220*s,3.6,.7,0,20,1.3,Ei,this.d.atlas.soldierBlockPx(l.charIndex),0);u<0||(e.flee[u]=1,e.cart[u]=1,e.tr[u]=2.4,e.tg[u]=1.9,e.tb[u]=.6,e.labels[u]=Mt()==="en"?"Supply Cart 補給馬車":"보급 마차 補給馬車",e.markSpecial(u),this.d.effects.spawnRing(h,c,4,2.4,1.9,.6,.6),this.d.banner(Mt()==="en"?"Supply Cart — don’t let it escape!":"보급 마차 — 놓치지 마라!","#ffe14d"))}}const li=32,gs=0,qn=1,Zs=2,Ca=3,Ra=4,Wr=5,Ks=6.5,Ld=3,kM=25,Dd=5.2,NM=["혈귀술 폭탄 爆彈","등나무꽃 약탕 藥湯","등나무꽃 사당 神社","귀살대 결계목 結界","경보 종 警鐘","전집중 북 戰鼓"],OM=["Blood Demon Bomb","Wisteria Elixir Cart","Wisteria Shrine","Corps Barrier","Warning Bell","Breathing Drum"],BM=["공격 → 유폭","회복 +30%","호흡 가호 획득","공격 → 파괴","접촉 → 젬 흡수","접근 → 적 기절"],HM=["Attack → explode","Heal +30%","Gain blessing","Attack → break","Touch → pull gems","Near → stun foes"],GM=a=>Mt()==="en"?OM[a]:NM[a],VM=a=>Mt()==="en"?HM[a]:BM[a],Id=[2.5,2.6,3.8,2.6,2.6,2.6],WM=[[1.5,.5,.18,2.5],[.55,1.25,.7,2.2],[1.5,1.05,.4,3.4],null,[1.7,1.3,.4,2.6],[1.4,.9,.5,2.4]];class XM{d;x=new Float32Array(li);z=new Float32Array(li);kind=new Uint8Array(li);alive=new Uint8Array(li);igniteT=new Float32Array(li);drumCd=new Float32Array(li);spawnTimer=4;batch;shadows;constructor(t,e){this.d=e,this.batch=new Bf(t,li),this.shadows=new xc(li),t.add(this.shadows.mesh)}reset(){this.alive.fill(0),this.igniteT.fill(0),this.drumCd.fill(0),this.spawnTimer=4}spawnObject(t){let e=-1;for(let h=0;h<li;h++)if(this.alive[h]===0){e=h;break}if(e<0)return;const i=this.d.rng,s=i.next(),n=(this.d.playerHpFrac?.()??1)<.4?.6:.44;let r=gs;s<.07?r=Ra:s<.15?r=Wr:s<.24?r=Zs:t>90&&s<n?r=qn:s>.72&&(r=Ca);const o=i.next()*Math.PI*2,l=i.range(8,16);this.x[e]=this.d.playerX()+Math.cos(o)*l,this.z[e]=this.d.playerZ()+Math.sin(o)*l,this.kind[e]=r,this.igniteT[e]=0,this.drumCd[e]=0,this.alive[e]=1}placeAt(t,e,i){let s=-1;for(let n=0;n<li;n++)if(this.alive[n]===0){s=n;break}return s<0?!1:(this.x[s]=e,this.z[s]=i,this.kind[s]=t,this.igniteT[s]=0,this.drumCd[s]=0,this.alive[s]=1,!0)}spawnDumplingAt(t,e){return this.placeAt(qn,t,e)}spawnGongAt(t,e){return this.placeAt(Ra,t,e)}update(t,e){this.spawnTimer-=t,this.spawnTimer<=0&&(this.spawnTimer=this.d.rng.range(6,11),this.spawnObject(e));const i=this.d.playerX(),s=this.d.playerZ(),n=this.d.playerRadius+.9,r=this.d.particles;for(let o=0;o<li;o++){if(this.alive[o]===0)continue;const l=this.kind[o],h=this.x[o],c=this.z[o];if(l===qn?Math.random()<9*t&&r.steam(h,c+.2):l===Zs?Math.random()<7*t&&r.incense(h,c):l===gs&&Math.random()<3.5*t&&r.spark(h,c),l===gs&&this.igniteT[o]>0&&(this.igniteT[o]-=t,Math.random()<40*t&&r.spark(h,c+.5),this.igniteT[o]<=0)){this.explode(o);continue}if(l===gs||l===Ca)continue;if(l===Wr){this.drumCd[o]>0&&(this.drumCd[o]-=t);const f=i-h,m=s-c;this.drumCd[o]<=0&&f*f+m*m<=36&&this.beatDrum(o);continue}const u=i-h,d=s-c;u*u+d*d<=n*n&&this.interact(o)}}emitMarkers(t,e,i){const s=Dd*Dd;for(let n=0;n<li;n++){if(this.alive[n]===0)continue;const r=this.kind[n],o=this.x[n],l=this.z[n],h=WM[r];h&&t.glowAt(o,l,h[3],h[0],h[1],h[2]),t.name(GM(r),o,Id[r],l),r===Zs?t.interactRing(o,l,1.5,1.05,.4,!0):r===Ra?t.interactRing(o,l,1.5,1.2,.5,!0):r===Wr&&t.interactRing(o,l,1.4,.85,.4,this.drumCd[n]<=0);const c=e-o,u=i-l;c*c+u*u<=s&&t.hint(VM(r),o,Id[r]+1,l)}}interact(t){if(this.kind[t]===qn)this.d.heal(.3),this.d.particles.burst(this.x[t],this.z[t],1.6,2.2,1,12,3),this.d.banner(Mt()==="en"?"Wisteria Elixir Cart":"등나무꽃 약탕","#9affc0");else if(this.kind[t]===Zs){const i=["attack","speed","musou"][this.d.rng.int(3)];this.d.applyBuff(i,30),this.d.effects.spawnRing(this.x[t],this.z[t],6,2.4,2,.8,.7);const s=Mt()==="en",n=i==="attack"?s?"Attack Up":"공격 강화":i==="speed"?s?"Gale":"질풍":s?"Musou Charge":"무쌍 충전";this.d.banner(`${s?"Wisteria Shrine":"등나무꽃 사당"} · ${n}`,"#e8c667")}else this.kind[t]===Ra&&(this.d.magnetizeGems?.(),this.d.effects.spawnRing(this.x[t],this.z[t],10,2,1.5,.5,.6),this.d.effects.spawnRing(this.x[t],this.z[t],18,1.8,1.35,.45,.8),this.d.banner(Mt()==="en"?"Warning Bell":"경보 종","#ffd86b"));this.alive[t]=0}beatDrum(t){this.drumCd[t]=kM,this.d.stunEnemies?.(this.x[t],this.z[t],9,.8),this.d.effects.spawnRing(this.x[t],this.z[t],9,1.5,.85,.4,.55),this.d.particles.burst(this.x[t],this.z[t],1.3,.85,.4,16,4),this.d.banner(Mt()==="en"?"Breathing Drum":"전집중 북","#e4a05b")}hitAt(t,e,i){let s=!1;for(let n=0;n<li;n++){if(this.alive[n]===0||this.kind[n]!==gs&&this.kind[n]!==Ca)continue;const r=t-this.x[n],o=e-this.z[n],l=i+.7;r*r+o*o<=l*l&&(this.kind[n]===gs?this.igniteT[n]<=0&&(this.igniteT[n]=Ld,this.d.effects.spawnRing(this.x[n],this.z[n],1.4,2.2,1.4,.5,.25)):this.breakPalisade(n),s=!0)}return s}explode(t){const e=this.x[t],i=this.z[t];this.alive[t]=0,this.igniteT[t]=0,this.d.effects.spawnRing(e,i,Ks,2.6,1,.3,.55),this.d.effects.spawnRing(e,i,Ks*.55,2.9,1.5,.6,.35),this.d.effects.spawnDecal?.(e,i,Ks*.8,.5,.28,.14),this.d.effects.spawnLight?.(e,i,2.4,1.15,.4,Ks*1.3,.32),this.d.particles.burst(e,i,2.6,1.1,.3,42,9),this.d.damageArea(e,i,Ks,120);for(let s=0;s<li;s++){if(this.alive[s]===0||this.kind[s]!==gs||this.igniteT[s]>0)continue;const n=this.x[s]-e,r=this.z[s]-i;n*n+r*r<=Ks*Ks&&(this.igniteT[s]=.3)}}breakPalisade(t){const e=this.x[t],i=this.z[t];this.alive[t]=0,this.d.effects.spawnRing(e,i,2.8,1.6,1.05,.45,.3),this.d.particles.burst(e,i,1.5,.85,.35,22,5),this.d.damageArea(e,i,2.5,35),this.d.banner(Mt()==="en"?"Palisade Broken 木柵":"목책 돌파 木柵","#e4a05b")}render(t){this.batch.begin(),this.shadows.begin();for(let e=0;e<li;e++){if(this.alive[e]===0)continue;if(this.kind[e]===gs){let s=1.12;if(this.igniteT[e]>0){const n=2+Math.max(0,Ld-this.igniteT[e])*3.5;s=Math.sin(t*n*Math.PI*2)>0?2.3:.7}this.batch.push(Bn.powderCart,this.x[e],this.z[e],2.4,2,s)}else this.kind[e]===qn?this.batch.push(Bn.dumplingCart,this.x[e],this.z[e],2.5,2.1,1.18):this.kind[e]===Zs?this.batch.push(Bn.shrine,this.x[e],this.z[e],2.8,3.3,1.13):this.kind[e]===Ra?this.batch.push(Bn.gong,this.x[e],this.z[e],2.4,2.2,1.1):this.kind[e]===Wr?this.batch.push(Bn.warDrum,this.x[e],this.z[e],2.4,2.2,1.1):this.batch.push(Bn.palisade,this.x[e],this.z[e],3.7,2.15,1.05);const i=this.kind[e]===Ca?1.55:this.kind[e]===Zs?1.08:.92;this.shadows.push(this.x[e],this.z[e],i)}this.batch.end(),this.shadows.end()}get visibleCount(){let t=0;for(let e=0;e<li;e++)t+=this.alive[e];return t}testShowcase(t,e){this.alive.fill(0);const i=[[-4.2,-3,gs],[4.2,-3,qn],[-4.2,3.2,Zs],[4.2,3.2,Ca]];for(let s=0;s<i.length;s++)this.x[s]=t+i[s][0],this.z[s]=e+i[s][1],this.kind[s]=i[s][2],this.alive[s]=1}}const qM={yuanshao:{appear:[{ko:"자, 다 함께 극락으로 가보실까요? 이 눈처럼 아름답게요.",en:"Now, shall we all go to paradise? Beautiful like this snow."},{ko:"슬퍼할 필요 없어요. 내 몸 안에서 영원히 살아가면 되니까.",en:"No need to be sad. For you will live forever inside my body."}],death:[{ko:"아아… 이것이 인간들이 말하는 '감정'이라는 걸까요? 귀엽네요.",en:"Ah... is this what humans call 'emotion'? Quite cute."},{ko:"지옥은 역시 정말로 있는 걸까요? 아쉬워라.",en:"Is hell indeed real after all? What a pity."}]},dongzhuo:{appear:[{ko:"꿈속에서 죽을 수 있다니, 이 얼마나 행복한 일인가요!",en:"To die inside a dream, what a blessed thing!"},{ko:"행복한 꿈을 꿀지, 악몽을 꿀지… 제가 결정해 드립니다.",en:"Whether you dream of happiness or a nightmare... I decide."}],death:[{ko:"아아, 악몽이야… 내가 이런 시시한 꼬맹이에게 베이다니!",en:"Ah, what a nightmare... to be sliced by a brat like you!"},{ko:"무잔 님의 피를 그렇게 많이 받았는데… 속이 상해 죽겠어!",en:"I received so much of Muzan-sama's blood... I'm dying of frustration!"}]},lvbu:{appear:[{ko:"생명을 잃는 것은 그저 자연재해를 만난 것과 같다.",en:"Losing your life is merely like meeting a natural disaster."},{ko:"나를 거역하려는 어리석은 자들이여, 소멸할 시간이다.",en:"Fools who try to defy me, it is time for your extinction."}],death:[{ko:"내가… 죽는다고? 인간들은 끝내 나를 지상의 태양 아래로…",en:"I... am dying? Humans finally dragged me under the sun..."},{ko:"나의 육체는 소멸하지만, 내 의지는 영원히 이어지리라.",en:"My physical body perishes, but my will shall carry on forever."}]},xiahoudun:{appear:[{ko:"술식 전개, 파괴살 나침. 네 투기를 보여 다오!",en:"Technique Development, Destructive Death Compass Needle. Show me your spirit!"},{ko:"너도 혈귀가 되어라. 나와 함께 무한히 무예를 닦자!",en:"Become a demon too. Train in martial arts infinitely with me!"}],death:[{ko:"하쿠지… 나는 그저 어머니와 코유키의 곁으로 가고 싶었어.",en:"Hakuji... I only wanted to go to mother and Koyuki's side."},{ko:"훌륭한 싸움이었다… 너는 최고의 강자다.",en:"A magnificent fight... You are the ultimate strong warrior."}]},sunce:{appear:[{ko:"달은 차고 기운다. 내 검의 궤적은 피할 수 없다.",en:"The moon waxes and wanes. The path of my blade is unavoidable."},{ko:"수백 년의 세월 동안 갈고닦은 달의 호흡을 보아라.",en:"Behold the Moon Breathing, honed over hundreds of years."}],death:[{ko:"요리이치… 나는 그저 너처럼 되고 싶었을 뿐이다.",en:"Yoriichi... I only wanted to become like you."},{ko:"내가 원했던 것은 이런 추악한 괴물이 되는 것이 아니었다…",en:"What I wanted was not to become such an ugly monster..."}]},simayi:{appear:[{ko:"우리는 단단한 거미줄로 연결된 진짜 '가족'이야.",en:"We are a real 'family' bound by sturdy spider threads."},{ko:"가족의 유대를 모르는 자는… 내 실에 갈기갈기 찢겨 죽는다.",en:"He who knows not family bonds... shall be torn by my threads."}],death:[{ko:"아아… 따뜻해. 오빠라고 불러줘서 고마워…",en:"Ah... so warm. Thank you for calling me big brother..."},{ko:"진짜 유대는… 칼로 자를 수 없는 것이었구나.",en:"A real bond... was something that couldn’t be cut by a blade."}]},zhouyu:{appear:[{ko:"효효효! 제 예술적인 항아리들의 미를 느껴 보십시오!",en:"Hyohyohyo! Feel the beauty of my artistic vases!"},{ko:"당신의 몸도 제 항아리 속에서 훌륭한 예술품이 될 겁니다.",en:"Your body too will become a splendid artwork in my vase."}],death:[{ko:"이 미개하고 천박한 인간들이 나의 진정한 예술을 훼손하다니!",en:"These vulgar humans defaced my true art!"},{ko:"어찌 감히 나를 베느냐! 항아리를 깨지 마라!",en:"How dare you cut me! Do not break my vases!"}]},dianwei:{appear:[{ko:"너희처럼 매끈매끈하고 잘생긴 녀석들은 다 찢어 죽여야 해!",en:"Pretty boys like you deserve to be torn to pieces!"},{ko:"내 피의 낫은 치명적인 독을 머금고 있지. 아주 고통스러울 거다.",en:"My blood scythes hold deadly poison. It will be agonizing."}],death:[{ko:"우메… 다음 생에는 반드시 너를 불행하지 않게 하마.",en:"Ume... in the next life, I will make sure you are not unhappy."},{ko:"세상이 아무리 우리를 미워해도, 우리는 서로가 있으니까.",en:"No matter how much the world hates us, we still have each other."}]},gaoshun:{appear:[{ko:"나는 아름답고 강한 혈귀! 더러운 인간들은 당장 꺼져!",en:"I am a beautiful and strong demon! Filthy humans, go away!"},{ko:"내 부드러운 오비는 무엇이든 잘라 버리고 감싸 안을 수 있어.",en:"My soft obi can slice anything and wrap it away."}],death:[{ko:"오빠아아아! 빨리 와서 날 구해줘! 이 녀석들이 내 목을 베었어!",en:"Onii-chan! Come save me! They cut off my head!"},{ko:"내가 왜 이렇게 추하게 죽어야 해… 억울해 죽겠어!",en:"Why do I have to die so uglily... It's so unfair!"}]},xiahouyuan:{appear:[{ko:"나를 인정해 주는 사람을 위해 일한다. 그게 뭐가 나쁘지?",en:"I work for those who acknowledge me. What is wrong with that?"},{ko:"번개의 호흡을 배신하고 얻어낸 칠흑의 번개를 보아라!",en:"Behold the pitch-black lightning gained by betraying thunder!"}],death:[{ko:"젠이츠… 나 혼자만 두고 죽는 일 따윈 없을 줄 알았는데…",en:"Zenitsu... I never thought I'd be left to die alone..."},{ko:"어째서 내가 지는 거지? 나는 특별한 존재다!",en:"Why am I losing? I am a special being!"}]},lumeng:{appear:[{ko:"희노애락, 분노와 슬픔은 나를 더욱 강하게 만든다!",en:"Joy, anger, grief, and pleasure... emotions make me stronger!"},{ko:"약자를 괴롭히는 너희들이야말로 진짜 악마들이로다!",en:"You who torment the weak are the true demons!"}],death:[{ko:"비겁하고 잔인한 녀석들… 결국 나를 찾아냈구나.",en:"Cowardly and cruel wretches... you found me after all."},{ko:"본체가… 베이다니… 분하도다!",en:"The main body... cut down... How frustrating!"}]},luxun:{appear:[{ko:"무한성은 무잔 님의 뜻대로 움직이는 공간입니다.",en:"Mugen Castle is a space that moves at Muzan-sama's will."},{ko:"비와(琵琶) 소리 한 번이면 전장의 구조가 뒤바뀔 것입니다.",en:"With one biwa strum, the battlefield's layout will warp."}],death:[{ko:"비와 채가… 부러졌는가… 무한성이 붕괴하는구나.",en:"Has the biwa pick broken... Mugen Castle is collapsing."},{ko:"무잔 님… 죄송합니다… 제 비와 소리가 멈춥니다…",en:"Muzan-sama... forgive me... my biwa sounds no more..."}]}};function Dl(a,t){const e=qM[a];if(!e)return"";const i=e[t];if(!i||i.length===0)return"";const s=i[Math.floor(Math.random()*i.length)];return Mt()==="en"?s.en:s.ko}const Qf=["cavalry","caltrop","poison"],ro=1e3,Jf=480,tp="cavalry";function wc(a,t){switch(a){case"caltrop":return t.totalKills>=ro;case"poison":return t.best.time>=Jf;case tp:return t.bosses.length>=1;default:return!0}}function jM(a){return Qf.filter(t=>wc(t,a))}function $M(a,t){const e=Mt()==="en";switch(a){case"caltrop":{const i=Math.min(ro,Math.floor(t.totalKills));return e?`Total kills ${i}/${ro}`:`누적 처치 ${i}/${ro}`}case"poison":{const i=Math.min(Jf,Math.floor(t.best.time)),s=`${Math.floor(i/60)}:${String(i%60).padStart(2,"0")}`;return e?`Best survival ${s} / 8:00`:`최고 생존 ${s} / 8:00`}case tp:return e?"Defeat your first boss":"첫 보스 처치";default:return""}}const Il={caltrop:{def:{id:"caltrop",name:"등나무 가시",hanja:"藤棘",maxLevel:8,desc:"이동 경로에 등나무 가시 설치 · 접촉 시 폭발 + 둔화"},nameEn:"Wisteria Thorns",descEn:"Wisteria thorns along your path; blast + slow on contact"},poison:{def:{id:"poison",name:"등나무 독안개",hanja:"藤毒霧",maxLevel:8,desc:"최다 밀집 지점에 등나무 독안개 · 지속 피해"},nameEn:"Wisteria Miasma",descEn:"Wisteria miasma on the densest cluster; damage over time"},twinring:{def:{id:"twinring",name:"쌍일륜",hanja:"雙日輪",maxLevel:8,desc:"전방 투척 쌍일륜 · 왕복하며 2회 관통 타격"},nameEn:"Twin Nichirin Rings",descEn:"Nichirin chakrams; pierce twice on the round trip"}},Te={spear:{id:"spear",name:"물의 호흡",hanja:"水の呼吸",maxLevel:8,desc:"전방 관통 물의 참격"},guandao:{id:"guandao",name:"잔잔한 물결",hanja:"凪",maxLevel:8,desc:"전방 넓은 부채꼴 참격"},zhangba:{id:"zhangba",name:"짐승의 호흡",hanja:"獣の呼吸",maxLevel:8,desc:"전후방 송곳니 참격"},baiyu:{id:"baiyu",name:"매혹의 연기",hanja:"惑血",maxLevel:8,desc:"유도 폭발 환각 꽃망울"},crossbow:{id:"crossbow",name:"벌레의 호흡",hanja:"蟲の呼吸",maxLevel:8,desc:"가장 가까운 적 자동 독침"},fire:{id:"fire",name:"혈귀술 폭혈",hanja:"爆血",maxLevel:8,desc:"발밑 폭결 장판 형성"},thunder:{id:"thunder",name:"번개의 호흡",hanja:"雷の呼吸",maxLevel:8,desc:"신속의 일격 무작위 낙뢰"},orbit:{id:"orbit",name:"등꽃 부적",hanja:"藤の護符",maxLevel:8,desc:"주위를 도는 등꽃 수호구"},halberd:{id:"halberd",name:"파괴살",hanja:"破壊殺",maxLevel:8,desc:"360° 전방위 충격파 난무"},cavalry:{id:"cavalry",name:"화염의 호흡",hanja:"炎の呼吸",maxLevel:8,desc:"돌진하는 불호랑이 소환"},zhanma:{id:"zhanma",name:"십일의 형 나기",hanja:"拾壱ノ型 凪",maxLevel:8,desc:"회전하는 푸른 물 참격파 발사",evolution:!0},bamen:{id:"bamen",name:"등꽃 결계",hanja:"藤結界",maxLevel:8,desc:"관통하는 등꽃 기운 폭풍",evolution:!0},chibi:{id:"chibi",name:"폭혈 업화",hanja:"爆血業火",maxLevel:8,desc:"전진하는 혈폭풍 해일",evolution:!0},tianfa:{id:"tianfa",name:"벽력일섬 신속",hanja:"霹靂一閃·神速",maxLevel:8,desc:"적 사이를 전이하는 번개",evolution:!0},yuanrong:{id:"yuanrong",name:"나비의 춤 화살비",hanja:"蝶ノ舞·嵐",maxLevel:8,desc:"전방위 독침 투사체 폭풍",evolution:!0}},Gh=[{from:"guandao",passive:"armor",to:"zhanma"},{from:"baiyu",passive:"warbook",to:"bamen"},{from:"fire",passive:"wine",to:"chibi"},{from:"thunder",passive:"talismanho",to:"tianfa"},{from:"crossbow",passive:"vermilion",to:"yuanrong"}];for(const a in Il)Te[a]=Il[a].def,Va[a]=Il[a].descEn;const ep=4.5;function bo(a,t,e,i,s,n,r,o){const l=a.enemies,h=(t+i)*.5,c=(e+s)*.5,u=Math.hypot(i-t,s-e)*.5+n+1.2,d=a.boosting===!0,f=d||a.dashing===!0?1.5:1,m=d?1.25:1,v=a.hash.query(h,c,u,a.scratch);for(let g=0;g<v;g++){const p=a.scratch[g];if(l.alive[p]===0)continue;const w=n+l.radius[p];if(gM(l.x[p],l.z[p],t,e,i,s)>w*w)continue;const A=l.boss[p]===1,y=(A?r*ep*(l.groggy[p]===1?1.6:1):r)*m,T=l.damageAt(p,y);a.damageText.spawn(y,l.x[p],l.scale[p]*.7,l.z[p],!1);const M=l.x[p]-a.px,C=l.z[p]-a.pz,b=Math.hypot(M,C)||1;o>0&&(l.push(p,M/b,C/b,o*f),o>=5&&!T&&a.rng.next()<.4&&a.particles.dust(l.x[p],l.z[p])),T?(a.onKill(p),!A&&(d||a.rng.next()<.6)&&a.effects.spawnKOStar(l.x[p],l.z[p],M/b,C/b)):A||(l.hitPunch[p]=d?1.6:1.4)}}function Sc(a,t,e,i,s,n,r,o,l){const h=a.enemies,c=Math.cos(r),u=a.boosting===!0,d=u||a.dashing===!0?1.5:1,f=u?1.25:1,m=a.hash.query(t,e,n+21,a.scratch);for(let v=0;v<m;v++){const g=a.scratch[v];if(h.alive[g]===0)continue;const p=h.x[g]-t,w=h.z[g]-e,A=p*p+w*w,y=h.boss[g]===1,T=(y?n+20:n)+h.radius[g];if(A>T*T)continue;const M=Math.sqrt(A)||1;if(r<3.13&&!y&&p/M*i+w/M*s<c)continue;const C=(y?o*ep*(h.groggy[g]===1?1.6:1):o)*f,b=h.damageAt(g,C);a.damageText.spawn(C,h.x[g],h.scale[g]*.7,h.z[g],!1),l>0&&(h.push(g,p/M,w/M,l*d),l>=5&&!b&&a.rng.next()<.35&&a.particles.dust(h.x[g],h.z[g])),b?(a.onKill(g),!y&&(u||a.rng.next()<.6)&&a.effects.spawnKOStar(h.x[g],h.z[g],p/M,w/M)):y||(h.hitPunch[g]=u?1.6:1.4)}}function pi(a,t,e,i){return t*a.stats.damageMul*(1+(e-1)*i)}class ci{level=1;timer=0;cooldownPerLevel=0;update(t){if(this.timer-=t.dt,this.timer>0)return;const e=this.baseCooldown*t.stats.cooldownMul*(1-(this.level-1)*this.cooldownPerLevel);this.timer+=Math.max(.05,e),this.timer<0&&(this.timer=0),t.onAttack(this.id,t.aimX,t.aimZ),this.fire(t)}}class ZM extends ci{id="spear";baseCooldown=1.1;fire(t){const e=(5+(this.level-1)*.6)*t.stats.rangeMul,i=.72,s=t.musouActive&&t.musouKey==="zhaoyun",n=pi(t,s?15:8,this.level,.15),r=t.px+t.aimX*e,o=t.pz+t.aimZ*e;bo(t,t.px,t.pz,r,o,i,n,3),s?(t.effects.spawnThrust(t.px,t.pz,t.aimX,t.aimZ,e,i*2.2,2.4,.6,.2),t.particles.burst(r,o,2.4,.6,.2,10,4)):(t.effects.spawnThrust(t.px,t.pz,t.aimX,t.aimZ,e,i*2.2,.7,.95,1.9),t.particles.waterSplash(r,o,14))}}class KM extends ci{id="guandao";baseCooldown=1.45;fire(t){const e=(4.4+(this.level-1)*.35)*t.stats.areaMul,i=1.05+(this.level-1)*.02,s=pi(t,15,this.level,.18);Sc(t,t.px,t.pz,t.aimX,t.aimZ,e,i,s,5),t.effects.spawnSlashArc(t.px,t.pz,t.aimX,t.aimZ,e,i,.3,.7,2.2),t.particles.waterSplash(t.px+t.aimX*e*.7,t.pz+t.aimZ*e*.7,16),t.effects.spawnRing(t.px,t.pz,e*.9,.3,.8,2.2,.35)}}class YM extends ci{id="zhangba";baseCooldown=1.15;fire(t){const e=(4.6+(this.level-1)*.4)*t.stats.rangeMul,i=.85,s=pi(t,10,this.level,.15),n=t.aimX,r=t.aimZ;bo(t,t.px,t.pz,t.px+n*e,t.pz+r*e,i,s,9),bo(t,t.px,t.pz,t.px-n*e,t.pz-r*e,i,s,9),t.effects.spawnDoubleThrust(t.px,t.pz,n,r,e,i*2.2,.7,1.3,1.5)}}class QM extends ci{id="baiyu";baseCooldown=1.6;fire(t){const e=2+Math.floor((this.level-1)/2)+t.stats.projectileBonus,i=pi(t,9,this.level,.14),s=8.5*t.stats.rangeMul,n=1+Math.floor(this.level/3),r=Math.atan2(t.aimZ,t.aimX);for(let o=0;o<e;o++){const l=r+(o-(e-1)*.5)*.24;t.projectiles.spawn(t.px,t.pz,Math.cos(l),Math.sin(l),s,i,.5,n,2.6,Po,1.8,.5,.8,1.5,.7,!0,7)}}}class JM extends ci{id="crossbow";baseCooldown=.55;cooldownPerLevel=.04;fire(t){const e=t.aimX,i=t.aimZ,s=1+t.stats.projectileBonus,n=pi(t,7,this.level,.12),r=15*t.stats.rangeMul,o=Math.floor((this.level-1)/2);t.particles.butterflyPoison(t.px,t.pz,6);for(let l=0;l<s;l++){const h=(l-(s-1)/2)*.12,c=Math.atan2(i,e)+h;t.projectiles.spawn(t.px,t.pz,Math.cos(c),Math.sin(c),r,n,.45,o,1.6,na,.7,.3,.9,1.5,.55)}}}class tw extends ci{id="fire";baseCooldown=3;fire(t){const e=(2.2+(this.level-1)*.28)*t.stats.areaMul,i=3+(this.level-1)*.3,s=10*t.stats.damageMul*(1+(this.level-1)*.15);t.zones.spawn(t.px,t.pz,e,i,s,2.5,.3,1.2),t.effects.spawnTechniqueMesh("blood",t.px,.15,t.pz,0,e*1.2,1,e*1.2,2.4,.4,1.5,.95),t.effects.spawnTripleShock(t.px,t.pz,e*1.3,2.4,.4,1.5)}}class ew extends ci{id="thunder";baseCooldown=2.4;cooldownPerLevel=.03;fire(t){const e=2+Math.floor(this.level/2)+t.stats.projectileBonus,i=pi(t,22,this.level,.16);let s=t.px,n=t.pz;const r=new Set;for(let o=0;o<e;o++){let l=-1,h=324;const c=t.hash.query(s,n,18,t.scratch);for(let m=0;m<c;m++){const v=t.scratch[m];if(t.enemies.alive[v]===0||r.has(v))continue;const g=t.enemies.x[v]-s,p=t.enemies.z[v]-n,w=g*g+p*p;w<h&&(h=w,l=v)}if(l<0&&(l=t.enemies.randomAlive(),l<0))break;r.add(l);const u=t.enemies.x[l],d=t.enemies.z[l];t.effects.spawnChainArc(s,n,u,d,2.8,2.3,.3),t.effects.spawnLightning(u,d,2.8,2.2,.3,4);const f=Math.atan2(-(d-n),u-s);t.effects.spawnTechniqueMesh("thunder",s,.4,n,f,3.5,1,1.2,2.8,2.2,.3,.95),t.particles.lightningSpark(u,d,12),t.effects.spawnFlash(u,d,2.6,2.1,.4,2.5),bo(t,s,n,u,d,1.2,i,4),s=u,n=d}}}class iw{id="orbit";level=1;built=-1;count(){return 2+Math.floor((this.level-1)/2)}update(t){const e=this.count()+t.stats.projectileBonus,i=3.2,s=2.2+(this.level-1)*.15,n=8*t.stats.damageMul*(1+(this.level-1)*.16);if(e!==this.built){t.projectiles.clearOrbits();for(let r=0;r<e;r++){const o=r/e*Math.PI*2;t.projectiles.spawnOrbit(o,i,s,n,1.2,.4,1.8,.9)}this.built=e}t.projectiles.refreshOrbits(n,i,s),t.effects.spawnTechniqueMesh("ribbon",t.px,.3,t.pz,Date.now()*.002,i*.8,.8,i*.8,1.8,.6,1.6,.8)}}class sw extends ci{id="halberd";baseCooldown=1.5;fire(t){const e=(3.6+(this.level-1)*.35)*t.stats.areaMul,i=pi(t,14,this.level,.16);Sc(t,t.px,t.pz,t.aimX,t.aimZ,e,Math.PI,i,6),t.effects.spawnTechniqueMesh("compass",t.px,.1,t.pz,0,e*1.6,.8,e*1.6,.8,.4,2.2,.95),t.effects.spawnRing(t.px,t.pz,e*1.4,.8,.4,2.2,.45),t.effects.spawnRing(t.px,t.pz,e*.8,1.4,.6,2.5,.3);const s=8+t.stats.projectileBonus;for(let n=0;n<s;n++){const r=n/s*Math.PI*2,o=Math.cos(r),l=Math.sin(r);t.projectiles.spawn(t.px,t.pz,o,l,13,i*.7,1.2,3,.6,Is,.8,.4,2.2,e*.7,e*.5,!1,0,!0)}}}class nw extends ci{id="cavalry";baseCooldown=4;fire(t){const e=1+Math.floor(this.level/2)+t.stats.projectileBonus,i=pi(t,18,this.level,.15),s=16;for(let n=0;n<e;n++){const r=t.rng.next()*Math.PI*2,o=Math.cos(r),l=Math.sin(r),h=t.px-o*22,c=t.pz-l*22;t.projectiles.spawn(h,c,o,l,s,i,1.3,9999,3,_s,2.8,.6,.15,4.5,1.7,!1,0,!0)}}}class Ti{id="caltrop";level=1;static CAP=32;static PLACE_INTERVAL=.9;static MAX_AGE=14;static TRIGGER_R=.95;cx=new Float32Array(Ti.CAP);cz=new Float32Array(Ti.CAP);age=new Float32Array(Ti.CAP);glintT=new Float32Array(Ti.CAP);armed=new Uint8Array(Ti.CAP);placeT=0;maxActive(){return Math.min(Ti.CAP,3+(this.level-1))}update(t){const e=Ti.CAP;this.placeT-=t.dt,this.placeT<=0&&(this.placeT+=Ti.PLACE_INTERVAL*t.stats.cooldownMul,this.placeT<0&&(this.placeT=0),this.place(t));const i=t.enemies,s=Ti.TRIGGER_R,n=(2.2+(this.level-1)*.13)*t.stats.areaMul,r=pi(t,20,this.level,.13),o=.5+(this.level-1)*.03;for(let l=0;l<e;l++){if(this.armed[l]===0)continue;if(this.age[l]+=t.dt,this.age[l]>=Ti.MAX_AGE){this.armed[l]=0;continue}const h=this.cx[l],c=this.cz[l];if(this.glintT[l]-=t.dt,this.glintT[l]<=0){this.glintT[l]=.7+t.rng.next()*.8;for(let f=0;f<3;f++)t.particles.emit(h+(t.rng.next()-.5)*.5,.12,c+(t.rng.next()-.5)*.5,(t.rng.next()-.5)*.3,.5+t.rng.next()*.5,(t.rng.next()-.5)*.3,.55,.68,.95,.5,.55,-.4,.9)}let u=!1;const d=t.hash.query(h,c,s+1,t.scratch);for(let f=0;f<d;f++){const m=t.scratch[f];if(i.alive[m]===0)continue;const v=i.x[m]-h,g=i.z[m]-c,p=s+i.radius[m];if(v*v+g*g<=p*p){u=!0;break}}u&&this.explode(t,l,h,c,n,r,o)}}place(t){const e=Ti.CAP,i=this.maxActive();let s=-1,n=0,r=-1,o=-1;for(let u=0;u<e;u++){if(this.armed[u]===0){s<0&&(s=u);continue}n++,this.age[u]>o&&(o=this.age[u],r=u)}let l;if(n<i&&s>=0)l=s;else if(r>=0)l=r;else if(s>=0)l=s;else return;const h=t.px-t.faceX*.5,c=t.pz-t.faceZ*.5;this.cx[l]=h,this.cz[l]=c,this.age[l]=0,this.glintT[l]=0,this.armed[l]=1,t.effects.spawnDecal?.(h,c,.55,.5,.62,.9)}explode(t,e,i,s,n,r,o){this.armed[e]=0;const l=t.enemies,h=t.hash.query(i,s,n,t.scratch);for(let c=0;c<h;c++){const u=t.scratch[c];if(l.alive[u]===0)continue;const d=l.x[u]-i,f=l.z[u]-s,m=n+l.radius[u];if(d*d+f*f>m*m)continue;const v=l.damageAt(u,r);t.damageText.spawn(r,l.x[u],l.scale[u]*.7,l.z[u],!1);const g=Math.sqrt(d*d+f*f)||1;l.push(u,d/g,f/g,4),v||(l.stun[u]=Math.max(l.stun[u],o)),v&&t.onKill(u)}t.effects.spawnRing(i,s,n+.6,.6,.75,1.1,.4),t.effects.spawnFlash(i,s,.7,.85,1.2,n*.8),t.particles.burst(i,s,.6,.72,1,12,6),t.effects.spawnDecal?.(i,s,n*.7,.55,.68,1),t.effects.spawnLight?.(i,s,.5,.65,1,n*2.2,.18)}}class aw extends ci{id="poison";baseCooldown=2.8;fire(t){const e=(2.4+(this.level-1)*.3)*t.stats.areaMul,i=4+(this.level-1)*.35,s=9*t.stats.damageMul*(1+(this.level-1)*.15),n=t.enemies;let r=t.px,o=t.pz,l=-1;const h=e*e;for(let c=0;c<6;c++){const u=n.randomAlive();if(u<0)break;const d=n.x[u],f=n.z[u],m=t.hash.query(d,f,e,t.scratch);let v=0;for(let g=0;g<m;g++){const p=t.scratch[g];if(n.alive[p]===0)continue;const w=n.x[p]-d,A=n.z[p]-f;w*w+A*A<=h&&v++}v>l&&(l=v,r=d,o=f)}l<0||t.zones.spawn(r,o,e,i,s,.3,1.3,.5)}}class ye extends ci{id="twinring";baseCooldown=1.6;static CAP=12;static HITSET=16;static OUT_SPEED=13;static RET_SPEED=15;static MAX_LIFE=4;bx=new Float32Array(ye.CAP);bz=new Float32Array(ye.CAP);dirX=new Float32Array(ye.CAP);dirZ=new Float32Array(ye.CAP);dist=new Float32Array(ye.CAP);maxD=new Float32Array(ye.CAP);dmgv=new Float32Array(ye.CAP);rad=new Float32Array(ye.CAP);life=new Float32Array(ye.CAP);spin=new Float32Array(ye.CAP);phase=new Uint8Array(ye.CAP);active=new Uint8Array(ye.CAP);hitset=new Int32Array(ye.CAP*ye.HITSET);hitN=new Uint8Array(ye.CAP);update(t){super.update(t),this.simulate(t)}fire(t){const e=1+Math.floor((this.level-1)/2)+t.stats.projectileBonus,i=pi(t,12,this.level,.13),s=(6+(this.level-1)*.5)*t.stats.rangeMul,n=Math.atan2(t.aimZ,t.aimX);for(let r=0;r<e;r++){const o=n+(r-(e-1)*.5)*.2;this.throwRing(t,Math.cos(o),Math.sin(o),i,s)}}throwRing(t,e,i,s,n){let r=-1;for(let o=0;o<ye.CAP;o++)if(this.active[o]===0){r=o;break}r<0||(this.bx[r]=t.px,this.bz[r]=t.pz,this.dirX[r]=e,this.dirZ[r]=i,this.dist[r]=0,this.maxD[r]=n,this.dmgv[r]=s,this.rad[r]=.9,this.life[r]=ye.MAX_LIFE,this.spin[r]=0,this.phase[r]=0,this.hitN[r]=0,this.active[r]=1)}simulate(t){const e=ye.CAP;for(let i=0;i<e;i++)if(this.active[i]!==0){if(this.life[i]-=t.dt,this.spin[i]+=t.dt*16,this.phase[i]===0){const s=ye.OUT_SPEED*t.dt;this.bx[i]+=this.dirX[i]*s,this.bz[i]+=this.dirZ[i]*s,this.dist[i]+=s,this.dist[i]>=this.maxD[i]&&(this.phase[i]=1,this.hitN[i]=0)}else{const s=t.px-this.bx[i],n=t.pz-this.bz[i],r=Math.hypot(s,n)||1,o=s/r,l=n/r,h=ye.RET_SPEED*t.dt,c=Math.min(1,r/this.maxD[i])*3.4;if(this.bx[i]+=o*h+-l*c*t.dt,this.bz[i]+=l*h+o*c*t.dt,r<=.9){this.active[i]=0;continue}}if(this.life[i]<=0){this.active[i]=0;continue}this.hitScan(t,i),this.renderBody(t,i)}}hitScan(t,e){const i=t.enemies,s=this.bx[e],n=this.bz[e],r=this.rad[e],o=e*ye.HITSET,l=t.hash.query(s,n,r+1,t.scratch);for(let h=0;h<l;h++){const c=t.scratch[h];if(i.alive[c]===0)continue;const u=i.x[c]-s,d=i.z[c]-n,f=r+i.radius[c];if(u*u+d*d>f*f)continue;let m=!1;const v=this.hitN[e];for(let p=0;p<v;p++)if(this.hitset[o+p]===c){m=!0;break}if(m)continue;v<ye.HITSET&&(this.hitset[o+this.hitN[e]++]=c);const g=i.damageAt(c,this.dmgv[e]);if(t.damageText.spawn(this.dmgv[e],i.x[c],i.scale[c]*.7,i.z[c],!1),!g){const p=Math.sqrt(u*u+d*d)||1;i.push(c,u/p,d/p,2)}t.effects.spawnRing(i.x[c],i.z[c],1,1.6,.5,.3,.16),g&&t.onKill(c)}}renderBody(t,e){const i=this.bx[e],s=this.bz[e],n=this.spin[e],r=.34;t.particles.emit(i+Math.cos(n)*r,.9,s+Math.sin(n)*r,0,0,0,.95,.62,.14,.6,.1,0,.9),t.particles.emit(i+Math.cos(n+Math.PI)*r,.9,s+Math.sin(n+Math.PI)*r,0,0,0,.9,.12,.14,.6,.1,0,.9),t.particles.emit(i,.9,s,0,0,0,.5,.22,.08,.42,.08,0,.9),t.rng.next()<.6&&t.effects.spawnLight?.(i,s,.42,.3,.09,1.5,.1)}}class rw extends ci{id="zhanma";level=8;baseCooldown=1;fire(t){const e=5.5*t.stats.areaMul;Sc(t,t.px,t.pz,t.aimX,t.aimZ,e,1.2,pi(t,26,8,.16),4),t.effects.spawnSlashArc(t.px,t.pz,t.aimX,t.aimZ,e,1.2,.6,2.4,1.2);const i=pi(t,22,8,.16),s=Math.atan2(t.aimZ,t.aimX);for(let n=-1;n<=1;n++){const r=s+n*.28;t.projectiles.spawn(t.px,t.pz,Math.cos(r),Math.sin(r),12,i,1.4,6,1.4,Is,.7,2.4,1.2,3,2.2)}}}class ow extends ci{id="bamen";level=8;baseCooldown=1.3;fire(t){const e=8+t.stats.projectileBonus,i=pi(t,12,8,.14),s=9*t.stats.rangeMul,n=t.rng.next()*Math.PI*2;for(let r=0;r<e;r++){const o=n+r/e*Math.PI*2;t.projectiles.spawn(t.px,t.pz,Math.cos(o),Math.sin(o),s,i,.55,6,3,Po,1.6,1.9,2.4,1.2,1,!0,5)}}}class lw extends ci{id="chibi";level=8;baseCooldown=2.4;fire(t){const e=18*t.stats.damageMul,i=t.aimX,s=t.aimZ;for(let n=0;n<3;n++){const r=1.5+n*2.2;t.zones.spawn(t.px+i*r,t.pz+s*r,(2.6+n*.4)*t.stats.areaMul,2.6,e,2.6,.7,.2,i*4.5,s*4.5)}}}class hw extends ci{id="tianfa";level=8;baseCooldown=2;hitBuf=new Int32Array(8);fire(t){const e=pi(t,24,8,.15),i=3+t.stats.projectileBonus,s=this.hitBuf;for(let n=0;n<i;n++){let r=t.enemies.randomAlive();if(r<0)break;t.effects.spawnLightning(t.enemies.x[r],t.enemies.z[r]);let o=t.enemies.x[r],l=t.enemies.z[r];s[0]=r;let h=1;for(let c=0;c<6;c++){const u=t.enemies,d=u.damageAt(r,e);t.damageText.spawn(e,u.x[r],u.scale[r]*.7,u.z[r],!0),d&&t.onKill(r);let f=-1,m=36;const v=t.hash.query(o,l,6,t.scratch);for(let g=0;g<v;g++){const p=t.scratch[g];if(u.alive[p]===0)continue;let w=!1;for(let M=0;M<h;M++)s[M]===p&&(w=!0);if(w)continue;const A=u.x[p]-o,y=u.z[p]-l,T=A*A+y*y;T<m&&(m=T,f=p)}if(f<0)break;t.effects.spawnChainArc(o,l,t.enemies.x[f],t.enemies.z[f]),t.particles.lightningSpark(t.enemies.x[f],t.enemies.z[f],8),o=t.enemies.x[f],l=t.enemies.z[f],r=f,h<s.length&&(s[h++]=f)}}}}class cw extends ci{id="yuanrong";level=8;baseCooldown=.5;fire(t){const i=pi(t,9,8,.12),s=16*t.stats.rangeMul;for(let n=0;n<12;n++){const r=n/12*Math.PI*2;t.projectiles.spawn(t.px,t.pz,Math.cos(r),Math.sin(r),s,i,.45,2,1.5,Kf,2.6,1.4,.5,1.5,.55)}}}const uw={spear:ZM,guandao:KM,zhangba:YM,baiyu:QM,crossbow:JM,fire:tw,thunder:ew,orbit:iw,halberd:sw,cavalry:nw,caltrop:Ti,poison:aw,twinring:ye,zhanma:rw,bamen:ow,chibi:lw,tianfa:hw,yuanrong:cw};function Pa(a){const t=uw[a];return new t}class dw{root;cardEls=[];rerollBtn;titleEl;hintEl;onPick=null;onReroll=null;count=0;active=!1;constructor(){this.root=document.createElement("div"),this.root.className="levelup-overlay";const t=document.createElement("div");t.className="levelup-wrap";const e=document.createElement("div");e.className="levelup-title",this.titleEl=e,t.appendChild(e);const i=document.createElement("div");i.className="levelup-row";for(let r=0;r<3;r++){const o=document.createElement("div");o.className="levelup-card";const l=r;o.addEventListener("click",()=>this.pick(l)),i.appendChild(o),this.cardEls.push(o)}t.appendChild(i);const s=document.createElement("div");s.className="levelup-bottom";const n=document.createElement("div");n.className="levelup-hint",this.hintEl=n,s.appendChild(n),this.rerollBtn=document.createElement("div"),this.rerollBtn.className="levelup-reroll",this.rerollBtn.addEventListener("click",()=>{this.onReroll&&this.onReroll()}),s.appendChild(this.rerollBtn),t.appendChild(s),this.root.appendChild(t),document.body.appendChild(this.root)}open(t,e,i,s,n){this.onPick=s,this.onReroll=n,this.count=t.length;for(let r=0;r<this.cardEls.length;r++){const o=this.cardEls[r],l=t[r];if(l){o.style.display="flex",o.style.borderColor=l.rare?"#ffe9a8":l.accent,o.style.boxShadow=l.rare?"0 0 26px rgba(255,220,120,0.4),inset 0 0 0 1px rgba(255,220,120,0.4)":"0 0 18px rgba(232,198,103,0.12),inset 0 0 0 1px rgba(232,198,103,0.12)";const h=l.badge?`<div class="lc-badge" style="background:${l.accent}22;color:${l.accent};border-color:${l.accent}66;">${l.badge}</div>`:"",c=l.count?/(\d+)\s*\/\s*(\d+)/.exec(l.count):null,u=c?c[1]===c[2]:!1,d=l.count?`<span class="lc-count${u?" full":""}">${l.count}</span>`:"",f=l.evoHint?`<div class="lc-evohint">${l.evoHint}</div>`:"";o.innerHTML=h+`<div class="lc-symbol" style="color:${l.accent};border-color:${l.accent};box-shadow:0 0 14px ${l.accent}55;">${l.symbol}</div><div class="lc-tag" style="color:${l.accent};">${l.tag}${d}</div><div class="lc-title">${l.title}</div><div class="lc-hanja" style="color:${l.accent};">${l.hanja}</div><div class="lc-desc">${l.desc}</div>`+f+`<div class="lc-num">${r+1}</div>`,o.animate([{transform:"translateY(26px) scale(0.9)",opacity:0},{transform:"translateY(0) scale(1)",opacity:1}],{duration:300,delay:r*90,easing:"cubic-bezier(0.2,0.9,0.3,1)",fill:"backwards"})}else o.style.display="none"}this.titleEl.innerHTML=`${it("levelupTitle")} <span>選一</span>`,this.hintEl.textContent=it("levelupHint"),this.rerollBtn.textContent=it("reroll",{n:e}),this.rerollBtn.style.opacity=i?"1":"0.4",this.rerollBtn.style.pointerEvents=i?"auto":"none",this.root.style.display="flex",this.active=!0}pick(t){if(!this.active||t>=this.count)return;this.active=!1,this.root.style.display="none";const e=this.onPick;this.onPick=null,this.onReroll=null,e&&e(t)}close(){this.active=!1,this.root.style.display="none"}}const Ud=6,fw=6;class pw{root;timerEl;killsEl;levelEl;goldEl;xpFill;hpFill;hpDelay;hpText;musouWrap;musouFill;musouHint;comboEl;bossWrap;bossFill;bossName;bannerLayer;bannerQueue=[];bannerSeq=0;bannerPlaying=!1;quoteLayer;bossActiveNow=!1;objWrap;objTitle;objSub;objBarTrack;objBarFill;objCountdown;objVisible=!1;objDanger=!1;feverEl;feverOn=!1;slotBar;bottom;seenSlots=new Set;weaponsFullSeen=!1;lastCombo=0;wasReady=!1;touch;constructor(t=!1){this.touch=t;const e=document.createElement("div");e.className="hud-top",e.style.cssText=["position:fixed","top:calc(env(safe-area-inset-top,0px) + 10px)","left:0","right:0","display:flex","flex-direction:column","align-items:center","gap:6px","pointer-events:none","z-index:20","transform-origin:top center",'font-family:"Nanum Myeongjo","Times New Roman",serif'].join(";"),this.timerEl=document.createElement("div"),this.timerEl.style.cssText="color:#f0e4c0;font-size:34px;letter-spacing:3px;text-shadow:0 2px 8px rgba(0,0,0,0.8);font-variant-numeric:tabular-nums;",this.timerEl.textContent="00:00",e.appendChild(this.timerEl);const i=document.createElement("div");i.style.cssText="display:flex;gap:20px;color:#c9cdda;font-size:15px;letter-spacing:1px;align-items:center;",this.levelEl=document.createElement("div"),this.levelEl.textContent="Lv 1",this.killsEl=document.createElement("div"),this.killsEl.style.cssText="font-variant-numeric:tabular-nums;",this.killsEl.textContent=`${it("hudKillsLabel")} 0`,this.goldEl=document.createElement("div"),this.goldEl.style.cssText="color:#e8c667;font-variant-numeric:tabular-nums;",this.goldEl.textContent="⟡ 0",i.appendChild(this.levelEl),i.appendChild(this.killsEl),i.appendChild(this.goldEl),e.appendChild(i);const s=document.createElement("div");s.style.cssText="width:min(70vw,520px);height:7px;background:rgba(20,22,30,0.85);border:1px solid rgba(232,198,103,0.3);border-radius:4px;overflow:hidden;",this.xpFill=document.createElement("div"),this.xpFill.style.cssText="height:100%;width:0%;background:linear-gradient(90deg,#5aa9ff,#a9d4ff);box-shadow:0 0 8px rgba(120,180,255,0.7);",s.appendChild(this.xpFill),e.appendChild(s),this.bossWrap=document.createElement("div"),this.bossWrap.style.cssText="display:none;flex-direction:column;align-items:center;gap:5px;margin-top:12px;",this.bossName=document.createElement("div"),this.bossName.style.cssText="color:#ff7a68;font-size:19px;letter-spacing:4px;text-shadow:0 0 12px rgba(232,92,74,0.7),0 2px 4px rgba(0,0,0,0.9);",this.bossWrap.appendChild(this.bossName);const n=document.createElement("div");n.style.cssText="width:min(80vw,640px);height:14px;background:rgba(20,10,10,0.85);border:1px solid rgba(232,92,74,0.5);border-radius:4px;overflow:hidden;",this.bossFill=document.createElement("div"),this.bossFill.style.cssText="height:100%;width:100%;background:linear-gradient(90deg,#8a1f16,#e85c4a,#e8c667);box-shadow:0 0 10px rgba(232,92,74,0.6);transition:width 0.1s;",n.appendChild(this.bossFill),this.bossWrap.appendChild(n),e.appendChild(this.bossWrap),this.objWrap=document.createElement("div"),this.objWrap.className="hud-objective",this.objWrap.style.cssText=["display:none","flex-direction:column","align-items:center","gap:4px","max-width:min(92vw,440px)","box-sizing:border-box","margin-top:10px","padding:7px 18px","border:1px solid rgba(232,198,103,0.42)","border-radius:9px","background:linear-gradient(180deg,rgba(22,19,12,0.9),rgba(12,11,8,0.92))","box-shadow:0 3px 16px rgba(0,0,0,0.5),0 0 14px rgba(232,198,103,0.1)"].join(";");const r=document.createElement("div");r.style.cssText="display:flex;gap:12px;align-items:baseline;justify-content:center;flex-wrap:wrap;max-width:100%;",this.objTitle=document.createElement("div"),this.objTitle.style.cssText="color:#f4e6bd;font-size:17px;letter-spacing:2px;text-align:center;line-height:1.25;text-shadow:0 1px 6px rgba(0,0,0,0.8);",this.objCountdown=document.createElement("div"),this.objCountdown.style.cssText="display:none;color:#e8c667;font-size:15px;letter-spacing:1px;font-variant-numeric:tabular-nums;",r.appendChild(this.objTitle),r.appendChild(this.objCountdown),this.objSub=document.createElement("div"),this.objSub.style.cssText="display:none;color:#b9b18c;font-size:12px;letter-spacing:1px;text-align:center;line-height:1.3;",this.objBarTrack=document.createElement("div"),this.objBarTrack.style.cssText="display:none;width:100%;height:5px;border-radius:3px;background:rgba(20,18,12,0.9);border:1px solid rgba(232,198,103,0.28);overflow:hidden;",this.objBarFill=document.createElement("div"),this.objBarFill.style.cssText="height:100%;width:0%;background:linear-gradient(90deg,#a8791f,#e8c667);box-shadow:0 0 6px rgba(232,198,103,0.4);transition:width 0.18s;",this.objBarTrack.appendChild(this.objBarFill),this.objWrap.appendChild(r),this.objWrap.appendChild(this.objSub),this.objWrap.appendChild(this.objBarTrack),e.appendChild(this.objWrap),document.body.appendChild(e),this.root=e,this.slotBar=document.createElement("div"),this.slotBar.className="hud-slots",this.slotBar.style.cssText=["position:fixed","top:calc(env(safe-area-inset-top,0px) + 10px)","left:calc(env(safe-area-inset-left,0px) + 10px)","display:flex","flex-direction:column","gap:6px","pointer-events:none","z-index:20","transform-origin:top left"].join(";");const o=document.createElement("div");o.style.cssText="display:flex;gap:4px;flex-wrap:wrap;max-width:220px;";const l=document.createElement("div");l.style.cssText="display:flex;gap:4px;flex-wrap:wrap;max-width:220px;",this.slotBar.appendChild(o),this.slotBar.appendChild(l),this.slotBar._w=o,this.slotBar._p=l,document.body.appendChild(this.slotBar);const h=document.createElement("div");h.className="hud-bottom",h.style.cssText=["position:fixed",`bottom:calc(env(safe-area-inset-bottom,0px) + ${this.touch?"15vh":"22px"})`,"left:0",`right:${this.touch?"calc(env(safe-area-inset-right,0px) + 134px)":"0"}`,"display:flex","flex-direction:column","align-items:center","gap:6px","pointer-events:none","z-index:20","transform-origin:bottom center",'font-family:"Nanum Myeongjo","Times New Roman",serif'].join(";"),this.musouWrap=document.createElement("div"),this.musouWrap.style.cssText=`display:${this.touch?"none":"flex"};flex-direction:column;align-items:center;gap:2px;`,this.musouHint=document.createElement("div"),this.musouHint.style.cssText="color:#e8c667;font-size:12px;letter-spacing:2px;opacity:0;transition:opacity 0.2s;",this.musouHint.innerHTML=it("musouHint"),this.musouWrap.appendChild(this.musouHint);const c=document.createElement("div");c.style.cssText="width:min(46vw,320px);height:9px;background:rgba(28,22,10,0.85);border:1px solid rgba(232,198,103,0.4);border-radius:5px;overflow:hidden;",this.musouFill=document.createElement("div"),this.musouFill.style.cssText="height:100%;width:0%;background:linear-gradient(90deg,#a8791f,#e8c667,#fff2c0);box-shadow:0 0 8px rgba(232,198,103,0.7);",c.appendChild(this.musouFill),this.musouWrap.appendChild(c),h.appendChild(this.musouWrap);const u=document.createElement("div");u.style.cssText=`width:${this.touch?"min(56vw,340px)":"min(60vw,420px)"};height:16px;background:rgba(20,22,30,0.85);border:1px solid rgba(232,198,103,0.35);border-radius:5px;overflow:hidden;position:relative;`,this.hpDelay=document.createElement("div"),this.hpDelay.style.cssText="position:absolute;left:0;top:0;height:100%;width:100%;background:rgba(255,225,210,0.7);transition:width 0.45s ease-out 0.14s;",u.appendChild(this.hpDelay),this.hpFill=document.createElement("div"),this.hpFill.style.cssText="position:absolute;left:0;top:0;height:100%;width:100%;background:linear-gradient(90deg,#c0362b,#e85c4a);box-shadow:0 0 8px rgba(232,92,74,0.6);transition:width 0.12s;",u.appendChild(this.hpFill),this.hpText=document.createElement("div"),this.hpText.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#fff;font-size:12px;letter-spacing:1px;text-shadow:0 1px 2px rgba(0,0,0,0.9);font-variant-numeric:tabular-nums;",this.hpText.textContent="100 / 100",u.appendChild(this.hpText),h.appendChild(u),document.body.appendChild(h),this.bottom=h,this.comboEl=document.createElement("div"),this.comboEl.style.cssText=["position:fixed","right:28px","top:38%","display:none","flex-direction:column","align-items:center","pointer-events:none","z-index:20",'font-family:"Nanum Myeongjo","Times New Roman",serif',"text-shadow:0 0 12px rgba(232,198,103,0.5)"].join(";"),document.body.appendChild(this.comboEl),this.bannerLayer=document.createElement("div"),this.bannerLayer.style.cssText=["position:fixed","inset:0","display:flex","align-items:center","justify-content:center","pointer-events:none","z-index:32",'font-family:"Nanum Myeongjo","Times New Roman",serif'].join(";"),document.body.appendChild(this.bannerLayer),this.quoteLayer=document.createElement("div"),this.quoteLayer.style.cssText=["position:fixed","top:calc(env(safe-area-inset-top,0px) + 96px)","left:0","right:0","display:flex","justify-content:center","padding:0 12px","pointer-events:none","z-index:21",'font-family:"Nanum Myeongjo","Times New Roman",serif'].join(";"),document.body.appendChild(this.quoteLayer),this.feverEl=document.createElement("div"),this.feverEl.style.cssText=["position:fixed","inset:0","pointer-events:none","opacity:0","z-index:29","transition:opacity 0.25s","box-shadow:inset 0 0 120px 24px rgba(255,180,60,0.55),inset 0 0 40px 8px rgba(255,120,30,0.5)"].join(";"),document.body.appendChild(this.feverEl)}setFever(t){t!==this.feverOn&&(this.feverOn=t,t?(this.feverEl.style.opacity="1",this.feverEl.animate([{filter:"brightness(1)"},{filter:"brightness(1.5)"},{filter:"brightness(1)"}],{duration:700,iterations:1/0})):(this.feverEl.style.opacity="0",this.feverEl.getAnimations().forEach(e=>e.cancel())))}setVisible(t){this.root.style.display=t?"flex":"none",this.slotBar.style.display=t?"flex":"none",this.bottom.style.display=t?"flex":"none",t||(this.comboEl.style.display="none",this.bossWrap.style.display="none",this.quoteLayer.textContent="",this.bannerQueue.length=0,this.bannerPlaying=!1,this.bannerLayer.textContent="",this.setFever(!1),this.objVisible=!1,this.objDanger=!1,this.objCountdown.classList.remove("obj-danger"),this.objCountdown.style.color="#e8c667",this.objWrap.getAnimations().forEach(e=>e.cancel()),this.objWrap.style.display="none",this.reflowQuote())}setObjective(t){if(!t){if(!this.objVisible)return;this.objVisible=!1,this.objDanger&&(this.objDanger=!1,this.objCountdown.classList.remove("obj-danger"),this.objCountdown.style.color="#e8c667");const i=this.objWrap,s=i.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease-out"});s.onfinish=()=>{this.objVisible||(i.style.display="none")},this.reflowQuote();return}if(this.objTitle.textContent=t.title,t.sub?(this.objSub.textContent=t.sub,this.objSub.style.display=""):this.objSub.style.display="none",t.progress01!==void 0&&t.progress01>=0?(this.objBarTrack.style.display="",this.objBarFill.style.width=`${Math.max(0,Math.min(1,t.progress01))*100}%`,this.objBarFill.style.background=t.color?`linear-gradient(90deg,${t.color},${t.color})`:"linear-gradient(90deg,#a8791f,#e8c667)"):this.objBarTrack.style.display="none",t.countdownSec!==void 0&&t.countdownSec>=0){const i=Math.ceil(t.countdownSec),s=Math.floor(i/60),n=i%60;this.objCountdown.textContent=`${s}:${n.toString().padStart(2,"0")}`,this.objCountdown.style.display="";const r=t.countdownSec<=10;r!==this.objDanger&&(this.objDanger=r,this.objCountdown.classList.toggle("obj-danger",r),this.objCountdown.style.color=r?"#ff6a58":"#e8c667")}else this.objCountdown.style.display="none",this.objDanger&&(this.objDanger=!1,this.objCountdown.classList.remove("obj-danger"),this.objCountdown.style.color="#e8c667");const e=this.objVisible;this.objVisible=!0,this.objWrap.style.display="flex",this.reflowQuote(),e||this.objWrap.animate([{opacity:0,transform:"translateY(-6px)"},{opacity:1,transform:"translateY(0)"}],{duration:200,easing:"ease-out"})}reflowQuote(){if(this.objVisible){const t=this.objWrap.getBoundingClientRect().bottom;this.quoteLayer.style.top=`${Math.round(t+8)}px`}else this.quoteLayer.style.top=`calc(env(safe-area-inset-top,0px) + ${this.bossActiveNow?164:96}px)`}setLoadout(t,e){const i=this.slotBar._w,s=this.slotBar._p;if(this.renderSlots(i,t,Ud),this.renderSlots(s,e,fw),!this.weaponsFullSeen&&t.length>=Ud){this.weaponsFullSeen=!0;const n=Mt()==="en"?"Full Arsenal":"병법 만진";this.banner(`${n} 兵法滿陣`,"#e8c667",54,1700)}}renderSlots(t,e,i){for(;t.children.length<i;){const s=document.createElement("div");s.style.cssText=["position:relative","width:30px","height:30px","border-radius:6px","display:flex","align-items:center","justify-content:center","font-size:16px",'font-family:"Nanum Myeongjo",serif',"box-shadow:0 1px 4px rgba(0,0,0,0.6)","transition:border-color 0.2s,background 0.2s"].join(";");const n=document.createElement("span"),r=document.createElement("span");r.style.cssText="position:absolute;right:-2px;bottom:-4px;font-size:10px;color:#f0e4c0;background:rgba(0,0,0,0.7);border-radius:3px;padding:0 2px;line-height:1.2;",s.appendChild(n),s.appendChild(r),t.appendChild(s)}for(let s=0;s<i;s++){const n=t.children[s],r=n.children[0],o=n.children[1],l=e[s];l?(n.style.borderStyle="solid",n.style.borderWidth="1px",n.style.borderColor=l.accent,n.style.background="rgba(14,15,21,0.8)",r.style.color=l.accent,r.textContent=l.glyph,o.style.display="",o.textContent=String(l.level),this.seenSlots.has(l.id)||(this.seenSlots.add(l.id),n.animate([{transform:"scale(1.6)",filter:"brightness(2.2)"},{transform:"scale(1)",filter:"brightness(1)"}],{duration:420,easing:"ease-out"}))):(n.style.borderStyle="dashed",n.style.borderWidth="1px",n.style.borderColor="rgba(232,198,103,0.16)",n.style.background="rgba(10,11,16,0.4)",r.style.color="rgba(232,198,103,0.22)",r.textContent="·",o.style.display="none",o.textContent="")}}resetSlots(){this.seenSlots.clear(),this.weaponsFullSeen=!1;const t=this.slotBar._w,e=this.slotBar._p;t.textContent="",e.textContent=""}update(t){const e=Math.floor(t.time/60),i=Math.floor(t.time%60);this.timerEl.textContent=`${e.toString().padStart(2,"0")}:${i.toString().padStart(2,"0")}`,this.killsEl.textContent=`${it("hudKillsLabel")} ${t.kills}`,this.levelEl.textContent=`Lv ${t.level}`,this.goldEl.textContent=`⟡ ${Math.floor(t.gold)}`,this.xpFill.style.width=`${Math.min(100,t.xp/t.nextXp*100)}%`;const s=Math.max(0,t.hp/t.maxHp*100);this.hpFill.style.width=`${s}%`,this.hpDelay.style.width=`${s}%`,this.hpText.textContent=`${Math.ceil(t.hp)} / ${Math.round(t.maxHp)}`,this.touch||(this.musouFill.style.width=`${Math.min(100,t.musouPct)}%`,t.musouReady&&!this.wasReady?(this.musouHint.style.opacity="1",this.musouWrap.animate([{filter:"brightness(1)"},{filter:"brightness(1.8)"},{filter:"brightness(1)"}],{duration:900,iterations:1/0})):!t.musouReady&&this.wasReady&&(this.musouHint.style.opacity="0",this.musouWrap.getAnimations().forEach(n=>n.cancel())),this.wasReady=t.musouReady),t.combo>=3?(this.comboEl.style.display="flex",this.comboEl.innerHTML=`<div style="color:#f0e4c0;font-size:52px;line-height:1;font-variant-numeric:tabular-nums;">${t.combo}</div><div style="color:#e8c667;font-size:16px;letter-spacing:2px;">${it("hudCombo")}</div>`,t.combo!==this.lastCombo&&this.punchCombo()):this.comboEl.style.display="none",this.lastCombo=t.combo,t.bossActive?(this.bossWrap.style.display="flex",this.bossName.textContent=`${t.bossName} ${t.bossHanja}`,this.bossFill.style.width=`${Math.max(0,t.bossFrac*100)}%`):this.bossWrap.style.display="none",t.bossActive!==this.bossActiveNow&&(this.bossActiveNow=t.bossActive,this.reflowQuote())}punchLevel(){this.levelEl.animate([{transform:"scale(1.35)",color:"#e8c667"},{transform:"scale(1)",color:"#c9cdda"}],{duration:260,easing:"ease-out"})}punchCombo(){this.comboEl.animate([{transform:"scale(1.3)"},{transform:"scale(1)"}],{duration:140,easing:"ease-out"})}banner(t,e,i,s=1400,n=0){for(this.bannerQueue.push({text:t,color:e,sizePx:i,durationMs:s,priority:n,seq:this.bannerSeq++});this.bannerQueue.length>2;){let r=0;for(let o=1;o<this.bannerQueue.length;o++){const l=this.bannerQueue[o],h=this.bannerQueue[r];(l.priority<h.priority||l.priority===h.priority&&l.seq<h.seq)&&(r=o)}this.bannerQueue.splice(r,1)}this.bannerPlaying||this.playNextBanner()}playNextBanner(){if(this.bannerQueue.length===0){this.bannerPlaying=!1;return}let t=0;for(let n=1;n<this.bannerQueue.length;n++){const r=this.bannerQueue[n],o=this.bannerQueue[t];(r.priority>o.priority||r.priority===o.priority&&r.seq<o.seq)&&(t=n)}const e=this.bannerQueue.splice(t,1)[0];this.bannerPlaying=!0;const i=document.createElement("div");i.textContent=e.text,i.style.cssText=["position:absolute",`color:${e.color}`,`font-size:min(${e.sizePx}px, 13vw)`,"letter-spacing:6px",`text-shadow:0 0 24px ${e.color}`,"white-space:nowrap"].join(";"),this.bannerLayer.appendChild(i);const s=i.animate([{transform:"scale(0.6)",opacity:0},{transform:"scale(1.1)",opacity:1,offset:.2},{transform:"scale(1)",opacity:1,offset:.75},{transform:"scale(1.05)",opacity:0}],{duration:e.durationMs,easing:"ease-out"});s.onfinish=()=>{i.remove(),this.playNextBanner()}}quote(t,e,i=3600){if(!e)return;this.quoteLayer.textContent="";const s=document.createElement("div");s.className="battle-quote",s.style.cssText=["width:min(680px,92vw)","padding:10px 16px","border:1px solid rgba(126,200,255,0.45)","border-radius:10px","background:linear-gradient(90deg,rgba(8,14,24,0.92),rgba(15,25,38,0.86))","box-shadow:0 4px 22px rgba(0,0,0,0.5),0 0 20px rgba(80,160,240,0.16)","display:flex","gap:10px","align-items:baseline","color:#e9f4ff","font-size:min(15px,3.6vw)","letter-spacing:0.4px","white-space:normal"].join(";");const n=document.createElement("b");n.textContent=t,n.style.cssText="color:#7ec8ff;white-space:nowrap;letter-spacing:2px;flex-shrink:0;";const r=document.createElement("span");r.textContent=`“${e}”`,r.style.cssText="line-height:1.4;",s.appendChild(n),s.appendChild(r),this.quoteLayer.appendChild(s);const o=s.animate([{transform:"translateY(-12px)",opacity:0},{transform:"translateY(0)",opacity:1,offset:.15},{transform:"translateY(0)",opacity:1,offset:.82},{transform:"translateY(-6px)",opacity:0}],{duration:i,easing:"ease-out"});o.onfinish=()=>s.remove()}musouCutin(t){const e=document.createElement("div");e.style.cssText=["position:fixed","inset:0","z-index:45","pointer-events:none","display:flex","align-items:center","justify-content:center","overflow:hidden","animation:musouCutinAnim 2.0s cubic-bezier(0.16, 1, 0.3, 1) forwards"].join(";");const i=document.createElement("div");i.style.cssText=["position:absolute","width:160%","height:260px","background:linear-gradient(90deg, transparent, rgba(255,220,130,0.85), rgba(255,100,60,0.95), transparent)","transform:rotate(-12deg) scaleY(1.4)","box-shadow:0 0 60px rgba(255,200,80,0.9), inset 0 0 40px rgba(255,255,255,0.9)"].join(";"),e.appendChild(i);const s=document.createElement("div"),n=`/threesur/assets/portraits/${t.portrait}.webp`;s.style.cssText=["position:absolute","left:3vw","top:10vh","width:45vw","height:78vh","background:linear-gradient(135deg, rgba(20, 18, 12, 0.94), rgba(40, 32, 16, 0.96))","clip-path:polygon(0% 0%, 92% 0%, 100% 100%, 8% 100%)","border-right:6px solid #ffe89e","box-shadow:0 0 60px rgba(255, 215, 100, 0.85), inset 0 0 40px rgba(255, 180, 40, 0.4)","overflow:hidden","display:flex","flex-direction:column","justify-content:flex-end","padding:36px"].join(";");const r=document.createElement("div");r.style.cssText=["position:absolute","inset:0","background-image:url("+n+")","background-size:cover","background-position:center top","filter:contrast(1.08) brightness(1.05)"].join(";"),s.appendChild(r);const o=document.createElement("div");o.style.cssText=["position:absolute","inset:0","background:linear-gradient(to top, rgba(10,8,6,0.95) 0%, rgba(10,8,6,0.55) 45%, transparent 100%)","pointer-events:none"].join(";"),s.appendChild(o);const l=document.createElement("div");l.style.cssText="position:relative;z-index:2;display:flex;flex-direction:column;gap:6px;";const h=document.createElement("div");h.style.cssText="color:#ffe89e;font-size:32px;letter-spacing:6px;font-weight:bold;text-shadow:0 0 16px rgba(255,215,100,0.9);",h.textContent=`${t.name} ${t.hanja}`;const c=document.createElement("div");if(c.style.cssText="color:#ffffff;font-size:46px;letter-spacing:8px;font-weight:900;text-shadow:0 0 28px rgba(255,80,40,1);",c.textContent="奧義 · 全集中 奥義",l.appendChild(h),l.appendChild(c),s.appendChild(l),e.appendChild(s),!document.getElementById("musou-cutin-style")){const u=document.createElement("style");u.id="musou-cutin-style",u.textContent=`
        @keyframes musouCutinAnim {
          0% { opacity:0; transform:scale(1.15) translateX(-30px); }
          12% { opacity:1; transform:scale(1) translateX(0); }
          80% { opacity:1; transform:scale(1) translateX(0); }
          100% { opacity:0; transform:scale(0.95) translateX(-30px); }
        }
      `,document.head.appendChild(u)}document.body.appendChild(e),setTimeout(()=>e.remove(),2e3)}bossCutin(t,e,i){const s=document.createElement("div");s.style.cssText=["position:fixed","inset:0","z-index:46","pointer-events:none","display:flex","align-items:center","justify-content:center","overflow:hidden","animation:musouCutinAnim 2.2s cubic-bezier(0.16, 1, 0.3, 1) forwards"].join(";");const n=document.createElement("div");n.style.cssText=["position:absolute","width:160%","height:260px","background:linear-gradient(90deg, transparent, rgba(230,40,40,0.9), rgba(120,10,20,0.95), transparent)","transform:rotate(12deg) scaleY(1.4)","box-shadow:0 0 60px rgba(220,30,30,0.9), inset 0 0 40px rgba(255,100,100,0.9)"].join(";"),s.appendChild(n);const r=document.createElement("div"),o=`/threesur/assets/portraits/${i}.webp`;r.style.cssText=["position:absolute","right:3vw","top:10vh","width:46vw","height:78vh","background:linear-gradient(135deg, rgba(24, 10, 14, 0.95), rgba(40, 12, 18, 0.97))","clip-path:polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%)","border-left:6px solid #e84a4a","box-shadow:0 0 60px rgba(230, 40, 40, 0.9), inset 0 0 40px rgba(255, 60, 60, 0.4)","overflow:hidden","display:flex","flex-direction:column","justify-content:flex-end","padding:36px"].join(";");const l=document.createElement("div");l.style.cssText=["position:absolute","inset:0","background-image:url("+o+")","background-size:cover","background-position:center top","filter:contrast(1.1) brightness(1.02)"].join(";"),r.appendChild(l);const h=document.createElement("div");h.style.cssText=["position:absolute","inset:0","background:linear-gradient(to top, rgba(16,8,10,0.95) 0%, rgba(16,8,10,0.55) 45%, transparent 100%)","pointer-events:none"].join(";"),r.appendChild(h);const c=document.createElement("div");c.style.cssText="position:relative;z-index:2;display:flex;flex-direction:column;gap:6px;";const u=document.createElement("div");u.style.cssText="color:#ff9e9e;font-size:32px;letter-spacing:6px;font-weight:bold;text-shadow:0 0 16px rgba(230,50,50,0.9);",u.textContent=`${t} ${e}`;const d=document.createElement("div");d.style.cssText="color:#ffffff;font-size:46px;letter-spacing:8px;font-weight:900;text-shadow:0 0 32px rgba(255,30,30,1);",d.textContent="十二鬼月 · 襲來",c.appendChild(u),c.appendChild(d),r.appendChild(c),s.appendChild(r),document.body.appendChild(s),setTimeout(()=>s.remove(),2200)}companionCutin(t){const e=document.createElement("div");e.style.cssText=["position:fixed","inset:0","z-index:44","pointer-events:none","display:flex","align-items:center","justify-content:center","overflow:hidden","animation:musouCutinAnim 2.0s cubic-bezier(0.16, 1, 0.3, 1) forwards"].join(";");const i=document.createElement("div");i.style.cssText=["position:absolute","width:160%","height:240px","background:linear-gradient(90deg, transparent, rgba(120,200,255,0.85), rgba(40,140,255,0.95), transparent)","transform:rotate(-10deg) scaleY(1.4)","box-shadow:0 0 50px rgba(100,180,255,0.8), inset 0 0 35px rgba(200,240,255,0.9)"].join(";"),e.appendChild(i);const s=document.createElement("div"),r=`/threesur/assets/portraits/${t.portrait??t.id}.webp`;s.style.cssText=["position:absolute","left:3vw","top:10vh","width:45vw","height:78vh","background:linear-gradient(135deg, rgba(10, 18, 28, 0.95), rgba(16, 28, 44, 0.97))","clip-path:polygon(0% 0%, 92% 0%, 100% 100%, 8% 100%)","border-right:6px solid #7ec8ff","box-shadow:0 0 50px rgba(100, 180, 255, 0.8), inset 0 0 35px rgba(140, 200, 255, 0.4)","overflow:hidden","display:flex","flex-direction:column","justify-content:flex-end","padding:36px"].join(";");const o=document.createElement("div");o.style.cssText=["position:absolute","inset:0","background-image:url("+r+")","background-size:cover","background-position:center top","filter:contrast(1.08) brightness(1.05)"].join(";"),s.appendChild(o);const l=document.createElement("div");l.style.cssText=["position:absolute","inset:0","background:linear-gradient(to top, rgba(8,14,22,0.95) 0%, rgba(8,14,22,0.55) 45%, transparent 100%)","pointer-events:none"].join(";"),s.appendChild(l);const h=document.createElement("div");h.style.cssText="position:relative;z-index:2;display:flex;flex-direction:column;gap:6px;";const c=document.createElement("div");c.style.cssText="color:#7ec8ff;font-size:32px;letter-spacing:6px;font-weight:bold;text-shadow:0 0 16px rgba(120,200,255,0.9);",c.textContent=`${t.name} ${t.hanja}`;const u=document.createElement("div");u.style.cssText="color:#ffffff;font-size:44px;letter-spacing:8px;font-weight:900;text-shadow:0 0 28px rgba(100,180,255,1);",u.textContent="鬼殺隊 · 救援 參戰!",h.appendChild(c),h.appendChild(u),s.appendChild(h),e.appendChild(s),document.body.appendChild(e),setTimeout(()=>e.remove(),2e3)}}const ys={zhaoyun:{id:"zhaoyun",name:"탄지로",hanja:"竈門 炭治郎",portrait:"tanjiro",sheet:"sgrade",charIndex:0,baseHp:100,baseSpeed:5.2,speedMul:1.1,damageMul:1,maxHpMul:1,cooldownMul:1,rangeMul:1,dmgTakenMul:1,startWeapon:"spear",bonusText:"이동속도 +10%",musou:"zhaoyun"},guanyu:{id:"guanyu",name:"기유",hanja:"冨岡 義勇",portrait:"tomioka",sheet:"sgrade",charIndex:2,baseHp:110,baseSpeed:4.9,speedMul:1,damageMul:1.15,maxHpMul:1,cooldownMul:1,rangeMul:1,dmgTakenMul:1,startWeapon:"guandao",bonusText:"공격력 +15%",musou:"guanyu"},zhangfei:{id:"zhangfei",name:"네즈코",hanja:"竈門 禰豆子",portrait:"nezuko",sheet:"sgrade",charIndex:1,baseHp:120,baseSpeed:4.8,speedMul:1,damageMul:1,maxHpMul:1.25,cooldownMul:1,rangeMul:1,dmgTakenMul:1,startWeapon:"fire",bonusText:"최대체력 +25%",musou:"zhangfei"},zhugeliang:{id:"zhugeliang",name:"미츠리",hanja:"甘露寺 蜜璃",portrait:"kanroji",sheet:"apriority",charIndex:6,baseHp:115,baseSpeed:5.2,speedMul:1.05,damageMul:1.1,maxHpMul:1,cooldownMul:.95,rangeMul:1,dmgTakenMul:1,startWeapon:"orbit",bonusText:"이동속도 +5% & 공격력 +10%",musou:"zhugeliang"},huangzhong:{id:"huangzhong",name:"시노부",hanja:"胡蝶 しのぶ",portrait:"shinobu",sheet:"sgrade",charIndex:4,baseHp:95,baseSpeed:5.1,speedMul:1,damageMul:1,maxHpMul:1,cooldownMul:1,rangeMul:1.2,dmgTakenMul:1,startWeapon:"crossbow",bonusText:"사거리·투사체속도 +20%",musou:"huangzhong"},sunshangxiang:{id:"sunshangxiang",name:"아카자",hanja:"猗窩座",portrait:"akaza",sheet:"sgrade",charIndex:5,baseHp:90,baseSpeed:5.3,speedMul:1.1,damageMul:1,maxHpMul:1,cooldownMul:1,rangeMul:1.15,dmgTakenMul:1,startWeapon:"halberd",bonusText:"사거리·투사체속도 +15%, 이동속도 +10%",musou:"sunshangxiang"},lvbu:{id:"lvbu",name:"쿄쥬로",hanja:"煉獄 杏寿郎",portrait:"rengoku",sheet:"sgrade",charIndex:3,baseHp:105,baseSpeed:5,speedMul:1,damageMul:1.25,maxHpMul:1,cooldownMul:1,rangeMul:1,dmgTakenMul:1.25,startWeapon:"cavalry",bonusText:"공격력 +25%, 받는 피해 +25%",musou:"lvbu"},zenitsu:{id:"zenitsu",name:"젠이츠",hanja:"我妻 善逸",portrait:"zenitsu",sheet:"apriority",charIndex:12,baseHp:100,baseSpeed:5.5,speedMul:1.15,damageMul:1,maxHpMul:1,cooldownMul:.9,rangeMul:1,dmgTakenMul:1,startWeapon:"thunder",bonusText:"이동속도 +15% & 쿨다운 -10%",musou:"zhaoyun"},inosuke:{id:"inosuke",name:"이노스케",hanja:"嘴平 伊之助",portrait:"inosuke",sheet:"apriority",charIndex:4,baseHp:110,baseSpeed:5.1,speedMul:1,damageMul:1.2,maxHpMul:1.1,cooldownMul:1,rangeMul:1,dmgTakenMul:1,startWeapon:"zhanma",bonusText:"공격력 +20% & 최대체력 +10%",musou:"lvbu"},tokito:{id:"tokito",name:"무이치로",hanja:"時透 無一郎",portrait:"tokito",sheet:"apriority",charIndex:9,baseHp:95,baseSpeed:5.2,speedMul:1.05,damageMul:1.15,maxHpMul:1,cooldownMul:.85,rangeMul:1,dmgTakenMul:1,startWeapon:"guandao",bonusText:"쿨다운 -15% & 공격력 +15%",musou:"guanyu"},uzui:{id:"uzui",name:"우즈이 텐겐",hanja:"宇髄 天元",portrait:"uzui",sheet:"apriority",charIndex:11,baseHp:105,baseSpeed:5.3,speedMul:1.1,damageMul:1.15,maxHpMul:1,cooldownMul:1,rangeMul:1.1,dmgTakenMul:1,startWeapon:"cavalry",bonusText:"이동속도 +10% & 공격력 +15%",musou:"lvbu"},sanemi:{id:"sanemi",name:"사네미",hanja:"不死川 実弥",portrait:"sanemi",sheet:"apriority",charIndex:8,baseHp:100,baseSpeed:5.3,speedMul:1.1,damageMul:1.2,maxHpMul:1,cooldownMul:.95,rangeMul:1,dmgTakenMul:1,startWeapon:"spear",bonusText:"공격력 +20% & 이동속도 +10%",musou:"zhaoyun"},himejima:{id:"himejima",name:"교메이",hanja:"悲鳴嶼 行冥",portrait:"himejima",sheet:"apriority",charIndex:2,baseHp:130,baseSpeed:4.8,speedMul:1,damageMul:1.25,maxHpMul:1.3,cooldownMul:1,rangeMul:1,dmgTakenMul:.85,startWeapon:"halberd",bonusText:"최대체력 +30% & 받는 피해 -15%",musou:"sunshangxiang"}},mw={title:"bgm-title.mp3",battle:"bgm-battle.mp3",boss:"bgm-boss.mp3",siege:"bgm-siege.mp3",victory:"jingle-victory.mp3",defeat:"jingle-defeat.mp3"},Ul=1.2,gw=2;class vw{ctx=null;master=null;musicBus=null;sfxBus=null;noise=null;buffers={};loading={};current=null;fading=null;wantBgm=null;muted=!1;hitCount=0;gemStep=0;gemStepAt=0;init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}try{const n=window.AudioContext??window.webkitAudioContext;this.ctx=new n}catch{this.ctx=null;return}const t=this.ctx,e=t.createDynamicsCompressor();e.threshold.value=-14,e.knee.value=24,e.ratio.value=4,e.attack.value=.003,e.release.value=.25,e.connect(t.destination),this.master=t.createGain(),this.master.gain.value=this.muted?0:1,this.master.connect(e),this.musicBus=t.createGain(),this.musicBus.gain.value=.55,this.musicBus.connect(this.master),this.sfxBus=t.createGain(),this.sfxBus.gain.value=.9,this.sfxBus.connect(this.master);const i=t.sampleRate*.5;this.noise=t.createBuffer(1,i,t.sampleRate);const s=this.noise.getChannelData(0);for(let n=0;n<i;n++)s[n]=Math.random()*2-1;this.resume(),this.wantBgm&&this.playBgm(this.wantBgm)}async resume(){if(this.ctx&&this.ctx.state==="suspended")try{await this.ctx.resume()}catch{}}get initialized(){return this.ctx!==null}setMuted(t){if(this.muted=t,this.master&&this.ctx){const e=this.ctx.currentTime;this.master.gain.cancelScheduledValues(e),this.master.gain.setTargetAtTime(t?0:1,e,.05)}}toggleMuted(){return this.setMuted(!this.muted),this.muted}base(){return"/threesur/assets/audio/"}ensureBuffer(t){if(!this.ctx||this.buffers[t]||this.loading[t])return;const e=mw[t];e&&(this.loading[t]=!0,fetch(this.base()+e).then(i=>i.arrayBuffer()).then(i=>this.ctx.decodeAudioData(i)).then(i=>{this.buffers[t]=i,this.loading[t]=!1,this.wantBgm===t&&(!this.current||this.current.name!==t)&&this.startBgm(t,i,!0)}).catch(()=>{this.loading[t]=!1}))}playBgm(t){if(this.wantBgm=t,!this.ctx||!this.musicBus||this.current&&this.current.name===t)return;const e=this.buffers[t];if(!e){this.ensureBuffer(t),this.fadeOutCurrent();return}this.startBgm(t,e,!0)}playJingle(t){if(this.wantBgm=null,!this.ctx||!this.musicBus)return;this.fadeOutCurrent();const e=this.buffers[t];if(!e){this.ensureBuffer(t);let i=!1;const s=()=>{if(i)return;const n=this.buffers[t];n&&(i=!0,this.startBgm(t,n,!1))};setTimeout(s,400),setTimeout(s,1200);return}this.startBgm(t,e,!1)}startBgm(t,e,i){if(!this.ctx||!this.musicBus)return;const s=this.ctx.currentTime;this.fadeOutCurrent();const n=this.ctx.createBufferSource();n.buffer=e,n.loop=i;const r=this.ctx.createGain();r.gain.setValueAtTime(0,s),r.gain.linearRampToValueAtTime(1,s+Ul),n.connect(r).connect(this.musicBus),n.start(),i?this.current={src:n,gain:r,name:t}:n.onended=()=>{try{n.disconnect(),r.disconnect()}catch{}}}hardStopFading(){if(!this.fading||!this.ctx)return;const t=this.ctx.currentTime,{src:e,gain:i}=this.fading;try{i.gain.cancelScheduledValues(t),i.gain.setValueAtTime(0,t),e.stop(t+.02)}catch{}this.fading=null}fadeOutCurrent(){if(!this.ctx||!this.current)return;this.hardStopFading();const t=this.ctx.currentTime,{src:e,gain:i}=this.current;i.gain.cancelScheduledValues(t),i.gain.setValueAtTime(i.gain.value,t),i.gain.linearRampToValueAtTime(0,t+Ul);try{e.stop(t+Ul+.05)}catch{}const s={src:e,gain:i};this.fading=s,e.onended=()=>{this.fading===s&&(this.fading=null);try{e.disconnect(),i.disconnect()}catch{}},this.current=null}stopBgm(){this.wantBgm=null,this.fadeOutCurrent()}endFrame(){this.hitCount=0}sfx(t){if(!this.ctx||!this.sfxBus||this.ctx.state!=="running")return;if(t==="hit"){if(this.hitCount>=gw)return;this.hitCount++}const e=this.ctx.currentTime;switch(t){case"hit":this.playHit(e);break;case"gem":this.playGem(e);break;case"levelup":this.playGong(e,220,1.4,.5),this.playGong(e+.02,330,1.2,.35);break;case"cardSelect":this.playBlip(e,660,.08,"square",.18),this.playBlip(e+.05,990,.07,"square",.14);break;case"musou":this.playDrum(e),this.playHum(e);break;case"bossHorn":this.playHorn(e);break;case"evolve":this.playSweep(e);break;case"playerHit":this.playThud(e);break;case"playerHitProj":this.playBlip(e,92,.11,"sine",.3),this.playBlip(e+.012,128,.07,"triangle",.16);break;case"revive":this.playGong(e,523,2.2,.4),this.playGong(e+.08,784,2,.3),this.playGong(e+.16,1046,1.8,.24);break;case"uiClick":this.playBlip(e,440,.05,"triangle",.12);break;case"relic":this.playSweep(e),this.playGong(e,147,1.8,.4);break;case"buff":this.playGong(e,587,1,.34),this.playGong(e+.07,880,.9,.26);break;case"warn":this.playHorn(e);break;case"fever":this.playDrum(e),this.playBlip(e,660,.08,"square",.16),this.playBlip(e+.06,990,.08,"square",.14),this.playBlip(e+.12,1320,.08,"square",.12);break;case"explosion":this.playThud(e),this.playHit(e);break;case"heartbeat":this.playBlip(e,70,.09,"sine",.18),this.playBlip(e+.13,58,.11,"sine",.14);break;case"achievement":this.playGong(e,659,1.6,.34),this.playGong(e+.09,988,1.4,.26),this.playGong(e+.18,1319,1.2,.2);break}}env(t,e,i,s,n){t.gain.setValueAtTime(0,e),t.gain.linearRampToValueAtTime(i,e+s),t.gain.exponentialRampToValueAtTime(1e-4,e+s+n)}playHit(t){const e=this.ctx,i=e.createOscillator();i.type="sine",i.frequency.setValueAtTime(180,t),i.frequency.exponentialRampToValueAtTime(60,t+.09);const s=e.createGain();this.env(s,t,.5,.002,.09),i.connect(s).connect(this.sfxBus),i.start(t),i.stop(t+.12);const n=e.createBufferSource();n.buffer=this.noise;const r=e.createBiquadFilter();r.type="bandpass",r.frequency.value=1400,r.Q.value=.8;const o=e.createGain();this.env(o,t,.28,.001,.05),n.connect(r).connect(o).connect(this.sfxBus),n.start(t),n.stop(t+.07)}playGem(t){const e=this.ctx;t-this.gemStepAt<.8?this.gemStep=Math.min(14,this.gemStep+1):this.gemStep=0,this.gemStepAt=t;const i=[0,2,4,7,9],s=Math.floor(this.gemStep/5),n=i[this.gemStep%5]+s*12,r=523.25*Math.pow(2,n/12),o=e.createOscillator();o.type="triangle",o.frequency.setValueAtTime(r,t);const l=e.createGain();this.env(l,t,.16,.004,.14),o.connect(l).connect(this.sfxBus),o.start(t),o.stop(t+.18)}playGong(t,e,i,s){const n=this.ctx,r=n.createOscillator();r.type="sine",r.frequency.setValueAtTime(e,t),r.frequency.exponentialRampToValueAtTime(e*.985,t+i);const o=n.createGain();this.env(o,t,s,.006,i);const l=n.createOscillator();l.type="sine",l.frequency.setValueAtTime(e*2.76,t);const h=n.createGain();this.env(h,t,s*.3,.006,i*.5),r.connect(o).connect(this.sfxBus),l.connect(h).connect(this.sfxBus),r.start(t),r.stop(t+i+.1),l.start(t),l.stop(t+i+.1)}playBlip(t,e,i,s,n){const r=this.ctx,o=r.createOscillator();o.type=s,o.frequency.setValueAtTime(e,t);const l=r.createGain();this.env(l,t,n,.002,i),o.connect(l).connect(this.sfxBus),o.start(t),o.stop(t+i+.02)}playDrum(t){const e=this.ctx,i=e.createOscillator();i.type="sine",i.frequency.setValueAtTime(160,t),i.frequency.exponentialRampToValueAtTime(45,t+.25);const s=e.createGain();this.env(s,t,.8,.002,.35),i.connect(s).connect(this.sfxBus),i.start(t),i.stop(t+.4);const n=e.createBufferSource();n.buffer=this.noise;const r=e.createBiquadFilter();r.type="lowpass",r.frequency.value=800;const o=e.createGain();this.env(o,t,.4,.001,.08),n.connect(r).connect(o).connect(this.sfxBus),n.start(t),n.stop(t+.1)}playHum(t){const e=this.ctx,i=e.createOscillator();i.type="sawtooth",i.frequency.setValueAtTime(70,t);const s=e.createBiquadFilter();s.type="lowpass",s.frequency.value=220;const n=e.createGain();n.gain.setValueAtTime(0,t),n.gain.linearRampToValueAtTime(.22,t+.15),n.gain.linearRampToValueAtTime(.18,t+.6),n.gain.exponentialRampToValueAtTime(1e-4,t+1.1),i.connect(s).connect(n).connect(this.sfxBus),i.start(t),i.stop(t+1.2)}playHorn(t){const e=this.ctx,i=e.createOscillator();i.type="sawtooth",i.frequency.setValueAtTime(140,t),i.frequency.linearRampToValueAtTime(175,t+.5);const s=e.createOscillator();s.frequency.value=5.5;const n=e.createGain();n.gain.value=6,s.connect(n).connect(i.frequency);const r=e.createBiquadFilter();r.type="lowpass",r.frequency.value=900;const o=e.createGain();o.gain.setValueAtTime(0,t),o.gain.linearRampToValueAtTime(.5,t+.12),o.gain.linearRampToValueAtTime(.45,t+.9),o.gain.exponentialRampToValueAtTime(1e-4,t+1.4),i.connect(r).connect(o).connect(this.sfxBus),i.start(t),i.stop(t+1.5),s.start(t),s.stop(t+1.5)}playSweep(t){const e=this.ctx,i=e.createOscillator();i.type="sine",i.frequency.setValueAtTime(300,t),i.frequency.exponentialRampToValueAtTime(1200,t+.6);const s=e.createGain();this.env(s,t,.4,.02,.6),i.connect(s).connect(this.sfxBus),i.start(t),i.stop(t+.7);const n=e.createOscillator();n.type="triangle",n.frequency.setValueAtTime(900,t),n.frequency.exponentialRampToValueAtTime(2400,t+.5);const r=e.createGain();this.env(r,t+.05,.18,.02,.45),n.connect(r).connect(this.sfxBus),n.start(t),n.stop(t+.6)}playThud(t){const e=this.ctx,i=e.createBufferSource();i.buffer=this.noise;const s=e.createBiquadFilter();s.type="lowpass",s.frequency.value=300;const n=e.createGain();this.env(n,t,.45,.002,.16),i.connect(s).connect(n).connect(this.sfxBus),i.start(t),i.stop(t+.2);const r=e.createOscillator();r.type="sine",r.frequency.setValueAtTime(90,t),r.frequency.exponentialRampToValueAtTime(50,t+.15);const o=e.createGain();this.env(o,t,.35,.002,.15),r.connect(o).connect(this.sfxBus),r.start(t),r.stop(t+.2)}}const Tt=new vw,ts={zhaoyun:{id:"urokodaki",name:"우로코다키 사콘지",hanja:"鱗滝 左近次",portrait:"urokodaki",sheet:"apriority",charIndex:10,attack:"slash",damage:32,cooldown:1.1,special:"rally",specialCd:16,line:{ko:"판단이 늦다! 정신 차려라!",en:"Too slow! Stay focused!"},cr:.4,cg:1.2,cb:1.6},guanyu:{id:"tokito",name:"토키토 무이치로",hanja:"時透 無一郎",portrait:"tokito",sheet:"apriority",charIndex:9,attack:"slash",damage:36,cooldown:1.2,special:"triplebolt",specialCd:17,line:{ko:"무슨 구름이었더라... 흩어져라!",en:"What shape was that cloud... Scatter!"},cr:.6,cg:1.5,cb:1.8},zhangfei:{id:"zenitsu",name:"아가츠마 젠이츠",hanja:"我妻 善逸",portrait:"zenitsu",sheet:"apriority",charIndex:12,attack:"lightning",damage:34,cooldown:1,special:"pierce",specialCd:15,line:{ko:"네즈코 양은 내가 지킨다!! 벽력일섬!",en:"I will protect Nezuko-chan!! Thunderclap!"},cr:2.2,cg:1.8,cb:.3},zhugeliang:{id:"aoi",name:"칸자키 아오이",hanja:"神崎 アオイ",portrait:"kanzaki_aoi",sheet:"apriority",charIndex:7,attack:"lightning",damage:30,cooldown:1.4,special:"firefan",specialCd:18,line:{ko:"약탕 준비 완료! 즉시 치료하겠어요!",en:"Medicine ready! Healing now!"},cr:.5,cg:1.6,cb:.8},huangzhong:{id:"kanao",name:"츠유리 카나오",hanja:"栗花落 カナヲ",portrait:"kanao",sheet:"apriority",charIndex:5,attack:"slash",damage:32,cooldown:1.1,special:"rally",specialCd:16,line:{ko:"동전을 던졌어요... 함께 싸우겠어요.",en:"I flipped a coin... I will fight with you."},cr:1.6,cg:.8,cb:1.2},sunshangxiang:{id:"himejima",name:"히메지마 교메이",hanja:"悲鳴嶼 行冥",portrait:"himejima",sheet:"apriority",charIndex:2,attack:"slash",damage:40,cooldown:1.3,special:"chargesweep",specialCd:19,line:{ko:"남무아미타불... 극락왕생 하거라.",en:"Namu Amida Butsu... Rest in peace."},cr:1.8,cg:1.2,cb:.5},lvbu:{id:"inosuke",name:"하시비라 이노스케",hanja:"嘴平 伊之助",portrait:"inosuke",sheet:"apriority",charIndex:4,attack:"slash",damage:38,cooldown:1.05,special:"chargesweep",specialCd:16,line:{ko:"저돌맹진! 저돌맹진!!",en:"Inosuke is here! Pig rush!!"},cr:.7,cg:1.3,cb:1.8}},zd=45,xw=270,bw=[ts.zhaoyun,ts.guanyu,ts.zhangfei,ts.zhugeliang,ts.huangzhong,ts.sunshangxiang,ts.lvbu,{id:"uzui",name:"우즈이 텐겐",hanja:"宇髄 天元",portrait:"uzui",sheet:"apriority",charIndex:11,attack:"slash",damage:38,cooldown:1.15,special:"chargesweep",specialCd:16,line:{ko:"화려하게 가보자고!!",en:"Let's go extravagantly!!"},cr:1.8,cg:1.4,cb:.4},{id:"sanemi",name:"시나즈가와 사네미",hanja:"不死川 実弥",portrait:"sanemi",sheet:"apriority",charIndex:8,attack:"slash",damage:37,cooldown:1.1,special:"pierce",specialCd:15,line:{ko:"혈귀 놈들, 모조리 찢어발겨주마!",en:"I'll shred every single demon!"},cr:.6,cg:1.7,cb:.7},{id:"kanroji",name:"칸로지 미츠리",hanja:"甘露寺 蜜璃",portrait:"kanroji",sheet:"apriority",charIndex:6,attack:"slash",damage:35,cooldown:1.05,special:"rally",specialCd:16,line:{ko:"가슴이 두근거려요! 힘낼게요!",en:"My heart is pounding! I'll do my best!"},cr:1.9,cg:.8,cb:1.4},{id:"iguro",name:"이구로 오바나이",hanja:"伊黒 小黒",portrait:"iguro",sheet:"apriority",charIndex:3,attack:"lightning",damage:36,cooldown:1.2,special:"triplebolt",specialCd:17,line:{ko:"신용할 수 없다... 하지만 돕겠다.",en:"I don't trust you... but I'll assist."},cr:.8,cg:1.4,cb:1.2},{id:"genya",name:"시나즈가와 겐야",hanja:"不死川 玄弥",portrait:"genya",sheet:"apriority",charIndex:0,attack:"lightning",damage:36,cooldown:1.3,special:"pierce",specialCd:16,line:{ko:"총탄으로 조져주마!",en:"I'll blow them away!"},cr:1.2,cg:.6,cb:1.4}];function _w(a,t){const e=bw.filter(i=>i.id!==a);return e[t()*e.length|0]}function ip(a){return Mt()==="en"?a.line.en:a.line.ko}const yw=15,Mw=7,ww=.64;class kd{active=!1;attacks=0;kills=0;x=0;z=0;radius=.45;def=ts.zhaoyun;atlas;sheet;quad;blockPx=0;dir=0;frame=0;animTime=0;attackTimer=0;specialTimer=0;posRingT=0;side=1;joinTime=zd;specialPhase=0;damageScale=1;joinDirX=0;joinDirZ=1;playerLevel=1;musouActive=!1;pendingSpecial=null;uv={u:0,v:0};constructor(t,e,i){this.atlas=e,this.sheet=e.apriority,this.quad=new Of(this.sheet,i,2.15),this.quad.setTint(.72,1.12,1.5),this.quad.setAlly(!0),this.quad.mesh.visible=!1,t.add(this.quad.mesh)}get definition(){return this.def}consumeSpecialEvent(){const t=this.pendingSpecial;return this.pendingSpecial=null,t}reset(t,e){this.def=e?.def??ts[t]??ts.zhaoyun;const i=this.def.sheet??"apriority";this.sheet=this.atlas[i],this.quad.setSheet(this.sheet),this.blockPx=this.def.charIndex*4*Ns,this.side=e?.side??1,this.joinTime=e?.joinTime??zd,this.specialPhase=e?.specialPhase??0,this.damageScale=1,this.active=!1,this.attacks=0,this.kills=0,this.animTime=0,this.attackTimer=0,this.specialTimer=0,this.pendingSpecial=null,this.quad.mesh.visible=!1}update(t,e,i,s,n,r){this.playerLevel=n,this.musouActive=r;let o=!1;if(!this.active){if(e<this.joinTime)return!1;this.active=!0,this.x=i.x-i.faceX*2.2+this.side*i.faceZ*1.4,this.z=i.z-i.faceZ*2.2-this.side*i.faceX*1.4,this.joinDirX=i.faceX||0,this.joinDirZ=i.faceZ||1,this.quad.mesh.visible=!0,this.specialTimer=this.def.specialCd*.5+this.specialPhase,this.joinSetpiece(s,i),o=!0}const l=i.x-i.faceX*2.2+this.side*i.faceZ*1.4,h=i.z-i.faceZ*2.2-this.side*i.faceX*1.4;let c=l-this.x,u=h-this.z;if(Math.hypot(c,u)>14)this.x=l,this.z=h,c=0,u=0;else{const m=1-Math.exp(-4.5*t);this.x+=c*m,this.z+=u*m}const f=Math.hypot(c,u)>.08;return this.dir=Yn(c,u,this.dir),f?(this.animTime+=t,this.frame=(this.animTime*Mw|0)%4):this.frame=0,this.specialTimer-=t,this.specialTimer<=0&&this.nearestEnemy(s,18)>=0&&(this.useSpecial(s,i),this.specialTimer=this.def.specialCd),this.attackTimer-=t,this.attackTimer<=0&&this.attack(s),this.posRingT-=t,this.posRingT<=0&&(this.posRingT=.55,s.effects.spawnRing(this.x,this.z,1.5,.4,1.2,2,.5)),gc(this.sheet,this.blockPx,0,this.dir,this.frame,this.uv),this.quad.setUv(this.uv.u,this.uv.v),this.quad.setPosition(this.x,0,this.z),o}dmg(t,e){return t*e.stats.damageMul*(1+this.playerLevel*.05)*this.damageScale}nearestEnemy(t,e){const i=t.enemies,s=t.hash.query(this.x,this.z,e,t.scratch);let n=-1,r=e*e;for(let o=0;o<s;o++){const l=t.scratch[o];if(i.alive[l]===0)continue;const h=i.x[l]-this.x,c=i.z[l]-this.z,u=h*h+c*c;u<r&&(r=u,n=l)}return n}joinSetpiece(t,e){const i=this.def,s=e.faceX||0,n=e.faceZ||1;for(let r=1;r<=4;r++)t.particles.dust(this.x-s*(1.2*r),this.z-n*(1.2*r));t.effects.spawnThrust(this.x-s*4.5,this.z-n*4.5,s,n,4.5,1.4,i.cr,i.cg,i.cb,.2),t.effects.spawnFlash(this.x,this.z,i.cr,i.cg,i.cb,2),t.effects.spawnRing(this.x,this.z,2.8,i.cr,i.cg,i.cb,.45),this.aoe(t,this.x,this.z,6,this.dmg(60,t),7)}attack(t){const e=this.nearestEnemy(t,yw);if(e<0){this.attackTimer=.25;return}const i=t.enemies,s=i.x[e]-this.x,n=i.z[e]-this.z,r=Math.hypot(s,n)||1,o=s/r,l=n/r,h=this.dmg(this.def.damage,t),c=this.musouActive?1.3:1;if(this.def.attack==="lightning"){t.effects.spawnChainArc(this.x,this.z,i.x[e],i.z[e],this.def.cr,this.def.cg,this.def.cb),this.hit(t,e,o,l,h*c,3);const d=this.nearestOther(t,i.x[e],i.z[e],e,6);d>=0&&(t.effects.spawnChainArc(i.x[e],i.z[e],i.x[d],i.z[d],this.def.cr,this.def.cg,this.def.cb),this.hit(t,d,o,l,h*.8*c,2))}else t.effects.spawnSlashArc(this.x,this.z,o,l,5.5,.9,this.def.cr,this.def.cg,this.def.cb,.18),this.cone(t,o,l,5.5,h*c,4);this.attacks++;let u=this.def.cooldown*t.stats.cooldownMul;this.musouActive&&(u*=.5),this.attackTimer=u}useSpecial(t,e){const i=this.def;switch(i.special){case"rally":{t.effects.spawnRing(this.x,this.z,9,i.cr,i.cg,i.cb,.6),t.effects.spawnFlash(this.x,this.z,i.cr,i.cg,i.cb,4),this.aoe(t,this.x,this.z,9,this.dmg(70,t),6),e.heal(e.maxHp*.05);break}case"triplebolt":{for(let s=0;s<3;s++){const n=this.nthEnemy(t,18,s);if(n<0)break;t.effects.spawnLightning(t.enemies.x[n],t.enemies.z[n],i.cr,i.cg,i.cb),this.aoe(t,t.enemies.x[n],t.enemies.z[n],3.2,this.dmg(55,t),3)}break}case"pierce":{const s=this.nearestEnemy(t,18),n=s>=0?t.enemies.x[s]-this.x:e.faceX,r=s>=0?t.enemies.z[s]-this.z:e.faceZ,o=Math.hypot(n,r)||1,l=n/o,h=r/o;t.effects.spawnThrust(this.x,this.z,l,h,11,2.2,i.cr,i.cg,i.cb,.24),this.capsule(t,this.x,this.z,l,h,11,1.4,this.dmg(85,t),9),this.x+=l*8,this.z+=h*8,t.effects.spawnFlash(this.x,this.z,i.cr,i.cg,i.cb,3);break}case"firefan":{const s=this.nearestEnemy(t,18),n=s>=0?t.enemies.x[s]-this.x:e.faceX,r=s>=0?t.enemies.z[s]-this.z:e.faceZ,o=Math.hypot(n,r)||1,l=n/o,h=r/o;t.effects.spawnSlashArc(this.x,this.z,l,h,9,1.3,i.cr,i.cg,i.cb,.24),this.cone(t,l,h,9,this.dmg(60,t),5),t.zones.spawn(this.x+l*5,this.z+h*5,4,3,this.dmg(24,t),2.4,.9,.25);break}case"chargesweep":{t.effects.spawnRing(this.x,this.z,9,i.cr,i.cg,i.cb,.5),t.effects.spawnSlashArc(this.x,this.z,this.dir===2?1:-1,0,9,1.5,i.cr,i.cg,i.cb,.26),this.aoe(t,this.x,this.z,9,this.dmg(75,t),9);break}}this.pendingSpecial={line:ip(i),cr:i.cr,cg:i.cg,cb:i.cb}}hit(t,e,i,s,n,r){const o=t.enemies;if(o.alive[e]===0)return;const l=o.damageAt(e,n);t.damageText.spawn(n,o.x[e],o.scale[e]*.7,o.z[e],!1),o.push(e,i,s,r),l&&t.onKill(e)}aoe(t,e,i,s,n,r){const o=t.enemies,l=t.hash.query(e,i,s,t.scratch);for(let h=0;h<l;h++){const c=t.scratch[h];if(o.alive[c]===0)continue;const u=o.x[c]-e,d=o.z[c]-i,f=u*u+d*d;if(f>s*s)continue;const m=Math.sqrt(f)||1,v=o.damageAt(c,n);t.damageText.spawn(n,o.x[c],o.scale[c]*.7,o.z[c],!1),o.push(c,u/m,d/m,r),v&&(this.kills++,t.onKill(c))}}cone(t,e,i,s,n,r){const o=t.enemies,l=t.hash.query(this.x,this.z,s,t.scratch);for(let h=0;h<l;h++){const c=t.scratch[h];if(o.alive[c]===0)continue;const u=o.x[c]-this.x,d=o.z[c]-this.z,f=u*u+d*d;if(f>s*s)continue;const m=Math.sqrt(f)||1;if(u/m*e+d/m*i<ww)continue;const v=o.damageAt(c,n);t.damageText.spawn(n,o.x[c],o.scale[c]*.7,o.z[c],!1),o.push(c,u/m,d/m,r),v&&(this.kills++,t.onKill(c))}}capsule(t,e,i,s,n,r,o,l,h){const c=t.enemies,u=e+s*r,d=i+n*r,f=(e+u)*.5,m=(i+d)*.5,v=t.hash.query(f,m,r*.5+o+1.2,t.scratch);for(let g=0;g<v;g++){const p=t.scratch[g];if(c.alive[p]===0)continue;const w=o+c.radius[p];let A=((c.x[p]-e)*s+(c.z[p]-i)*n)/(r||1);A<0?A=0:A>r&&(A=r);const y=e+s*A,T=i+n*A,M=c.x[p]-y,C=c.z[p]-T;if(M*M+C*C>w*w)continue;const b=c.damageAt(p,l);t.damageText.spawn(l,c.x[p],c.scale[p]*.7,c.z[p],!1),c.push(p,s,n,h),b&&(this.kills++,t.onKill(p))}}nearestOther(t,e,i,s,n){const r=t.enemies,o=t.hash.query(e,i,n,t.scratch);let l=-1,h=n*n;for(let c=0;c<o;c++){const u=t.scratch[c];if(u===s||r.alive[u]===0)continue;const d=r.x[u]-e,f=r.z[u]-i,m=d*d+f*f;m<h&&(h=m,l=u)}return l}nthEnemy(t,e,i){const s=t.enemies,n=t.hash.query(this.x,this.z,e,t.scratch);let r=0;for(let o=0;o<n;o++){const l=t.scratch[o];if(s.alive[l]!==0){if(r===i)return l;r++}}return-1}}const Vh={zhaoyun:{name:"탄지로",select:"가마도 탄지로, 혈귀를 베기 위해 검을 들었습니다!",lines:["가자, 네즈코! 우리는 함께 가야 해!","꺾이지 마! 포기하지 마! 마음을 강하게 먹어라!","물이 되어라, 물의 호흡 제1형 수면 베기!","히노카미 카구라... 맑고 푸른 하늘!","인간은 상처를 입어도, 마음의 상처는 치유할 수 있다!","새벽에는 호흡을 가다듬고 훈련에 임한다.","한낮에는 네즈코의 나무 궤를 살펴본다.","저물녘에는 산 너머 귀살대의 임무를 지시받는다.","밤에는 일륜도를 쥔 채 오니들을 추격한다."]},guanyu:{name:"기유",select:"내 목숨을 걸고서라도 네즈코의 처분을 미뤄 다오.",lines:["생살여탈권을 남에게 쥐어주지 마라!","물은 모든 것을 정화하며 흐른다. 내 칼날끝도 마찬가지.","나는 수주의 자리에 걸맞지 않은 사람이다.","사비토… 네 몫까지 내가 살아 있어야 했는데…","물의 호흡 제11형, 잔잔한 물결(凪)!","말은 적게 하오. 한 번 뱉은 말은 돌이킬 수 없소.","새벽 칼을 갈며 나를 거쳐간 인연들을 헤아린다.","한낮에도 등을 곧추세워 부끄럼이 없다.","저물녘 긴 칼날을 닦으며 마음을 조율한다.","밤이 깊어도 동료들의 의를 저버린 적 없다."]},zhangfei:{name:"네즈코",select:"음… 음음! (오빠, 내가 같이 싸울게!)",lines:["음-! (혈귀술 폭혈!)","음음! (인간은 내 가족이다. 혈귀는 적이다.)","음! (오빠를 다치게 하지 마!)","음음음! (등꽃 향기가 싫어... 하지만 오빠 곁에 있을 거야.)","음! (햇빛 아래서 걷고 싶어...)","음음! (오빠가 싸운다면 나도 같이 싸우겠어.)","새벽엔 나무 상자 틈으로 새어드는 오빠의 숨소리를 듣는다.","한낮엔 어두운 상자 속에서 묵묵히 이동하는 오빠의 진동을 느낀다.","저물녘 상자 문이 열리고 별빛 아래로 나설 준비를 한다.","밤엔 오빠의 등 뒤를 노리는 혈귀들에게 발차기를 날린다."]},zhugeliang:{name:"타마요",select:"인간으로 되돌릴 약은 반드시 완성될 것입니다.",lines:["혈귀술, 감각을 어지럽히는 향기!","인간을 해치지 않고 오니를 무찌르는 방법을 갈구해 왔습니다.","무잔... 당신은 반드시 내가 지옥으로 보낼 것입니다.","유시로, 나를 도와 함께 약을 만들어 보아요.","의사로서, 그리고 한 인간으로서 속죄의 길을 걷겠습니다.","새벽에는 현미경으로 오니의 세포를 조사한다.","한낮에는 조용한 서재에서 한약재를 정성스레 다린다.","저물녘에는 동틀 녘의 기운이 사라지길 조용히 기다린다.","밤에는 혈귀술로 약물의 융합 상태를 확인한다."]},huangzhong:{name:"시노부",select:"벌레의 호흡, 춤(舞) — 나비 춤!",lines:["당신을 죽이지는 않겠어요, 그저 고통 없는 독을 놓아줄 뿐.","언니... 귀살대의 평화로운 세상을 제가 이어받겠어요.","등나무꽃에서 추출한 맹독이 온몸을 휘감아 돌 것입니다.","화내지 않았어요, 전 늘 웃고 있답니다.","오니와 인간이 사이좋게 지낼 수 있는 날이 올까요?","새벽엔 독약 가마의 온도를 조절해 본다.","한낮엔 나비 저택에서 부상병들을 돌본다.","저물녘엔 독침 주사기의 흠집을 매끄럽게 닦아낸다.","밤엔 소리 없이 날아다니는 나비처럼 혈귀를 찾아 나선다."]},lvbu:{name:"쿄쥬로",select:"마음을 불태워라. 한계를 뛰어넘어라!",lines:["맛있다! 맛있다! 맛있다!","어머니, 저처럼 강하게 태어난 자의 의무는 약자를 돕는 것입니다.","내 검이 있는 한, 이 열차 안의 단 한 사람도 죽게 두지 않는다!","화염의 호흡 제9형 — 렌고쿠(煉獄)!","가슴을 펴고 살아라. 꺾이지 마라.","새벽에는 단풍 가득한 숲에서 마음을 다잡는다.","한낮엔 동료 대원들과 도시락을 맛있게 비운다.","저물녘엔 약자를 지킬 검날을 곧게 세운다.","밤에는 무한열차의 달리는 길목을 수호한다."]},sunshangxiang:{name:"아카자",select:"너도 혈귀가 되어라. 나와 함께 무술의 극의를 걷자!",lines:["강한 자는 살아남고, 약한 자는 도태된다. 이것이 이치다.","파괴살 나침... 네 투기(鬪氣)가 다 보이는군!","쿄쥬로, 너는 이대로 죽기엔 너무나 아깝다!","더 강한 강자를 내놔라! 멈추지 말고 덤벼라!","내 주먹은 한계가 없다. 허공을 뚫고 지나가리라!","새벽에는 무림의 극한을 찾아 주먹을 내지른다.","한낮에는 조용히 눈을 감고 투기의 조화를 살핀다.","저물녘에는 붉은 노을을 보며 옛 기억의 단편을 헤매인다.","밤에는 끝없는 강자들과 생사를 겨룬다."]},liubei:{name:"우로코다키",select:"판단이 늦다! 정신 차려라!",lines:["물의 호흡의 기본은 물의 흐름과 하나가 되는 것이다.","네가 그 거대한 수련 바위를 벨 때까지, 나는 기다릴 것이다.","두 남매가 사람을 해치지 않을 것임을, 내가 보증하마.","돌아와 주었구나... 무사히 돌아와 줘서 고맙다.","마지막 시험을 통과하라. 좁사 산의 덫들을 뚫고 살아 돌아오너라.","새벽에는 좁사 산 꼭대기에서 수련 강도를 검토한다.","한낮에는 탄지로의 자세를 매섭게 지적한다.","저물녘에는 여우 가면의 액막이 가호를 기원한다.","밤에는 두 남매의 장래를 생각하며 편지를 적는다."]},caocao:{name:"사비토",select:"사내로 태어났다면 고통을 견뎌라!",lines:["네 노력은 충분하지 않아. 모든 노력을 쏟아부어 몸으로 터득해라!","기유는... 살아야 한다. 그 녀석은 살아남아 수주가 되어야 해.","여우 가면 아래에 숨겨둔 각오가, 네 검 끝에서 우는구나.","나는 너를 지켜볼 것이다. 저 바위를 가를 때까지.","죽음은 슬픈 것이 아냐, 각오가 부족했음을 탓할 뿐.","새벽에는 안개 속에서 수련의 시작을 알린다.","한낮에는 목검을 쥐고 탄지로의 빈틈을 파고든다.","저물녘에는 기유의 뒷모습을 조용히 지켜본다.","밤에는 사령(死靈)의 목소리가 들리는 좁사 산을 지킨다."]},zhouyu:{name:"유시로",select:"타마요 님께 무례하게 굴지 마라!",lines:["타마요 님은 아름다우셔. 오늘도, 내일도 아름다우실 거다!","내 혈귀술은 시각을 가리고 결계를 생성한다.","탄지로, 타마요 님의 곁에 너무 가까이 서지 마라.","우리는 숨어 살아야 해. 무잔의 추격자들을 따돌려야 한다.","타마요 님을 위해서라면 내 목숨도 아깝지 않다!","새벽에는 타마요 님의 연구 기록을 정리해 둔다.","한낮에는 햇빛 차단 막을 이중으로 점검한다.","저물녘에는 입구의 결계 눈가림 부적을 갱신한다.","밤에는 타마요 님을 위해 차를 끓이고 곁을 지킨다."]},zhangliao:{name:"이노스케",select:"저돌맹진! 저돌맹진!! 이 몸이 가신다!",lines:["어이, 몬지로! 나와 힘을 겨루자!","짐승의 호흡 제3형 — 찢어발기기!","이 몸은 산의 왕이다! 모든 동물들은 나를 따른다!","칼날을 둥근 돌로 두드려 톱니처럼 만드는 것이 내 스타일이다!","약한 소리 하지 마라! 강해지는 것 외엔 길이 없다!","새벽에는 산속의 짐승들과 달리기 시합을 한다.","한낮에는 멧돼지 가면의 가죽을 강물에 빤다.","저물녘에는 돌멩이로 일륜도의 칼날을 갈아댄다.","밤에는 제일 큰 혈귀의 기운을 감지하며 냄새를 쫓는다."]},yuanshao:{name:"도마",select:"나는 만세극락교의 교주란다. 슬픔도 아픔도 없는 극락으로 인도해 주마.",lines:["사람들은 참 불쌍해. 감정에 휩쓸려 아파하기만 하고.","내 얼음 부채는 아름답지 않니? 마시면 폐가 얼어붙는 눈꽃이란다.","인간의 감정이라는 건 결국 착각에 불과해.","시노부 양... 나를 미워하지 마렴, 내 안에서 함께 영원히 살자.","무잔 님은 위대하셔. 그분의 명을 어기는 건 슬픈 일이지.","새벽에는 만세극락교의 신도들 기도를 들어준다.","한낮에는 차가운 얼음 정원에서 연꽃의 개화를 지켜본다.","저물녘에는 극락교의 연회 준비를 지시한다.","밤에는 맛있는 신도를 골라 한구석에서 만찬을 즐긴다."]},dongzhuo:{name:"엔무",select:"행복한 꿈을 꾸게 해 줄게. 영원히 깨어나지 않는 달콤한 꿈을...",lines:["인간의 마음은 유리 같아서 조금만 충격을 주어도 깨져 버리지.","꿈속에서 사랑하는 가족들을 만났니? 그런데 그건 전부 가짜란다.","무한열차와 융합한 내 몸은 그 누구도 막을 수 없어!","귀살대 녀석들의 절망하는 얼굴을 보는 건 정말 즐거워!","더 깊은 잠으로 빠져들어라... 강제 혼도 수면 최면!","새벽에는 무한열차의 들보 사이에서 기운을 조율한다.","한낮에는 승객들의 꿈결 속에 숨어들어 그들의 마음의 핵을 찾는다.","저물녘엔 기관실의 불길을 높여 속도를 가속한다.","밤에는 강제 수면 가스를 뿜어 전 차량을 지배한다."]},xiahoudun:{name:"아카자",select:"술식을 전개한다. 나침!",lines:["가까이 오너라! 네 투기가 내 나침을 자극하는군!","오직 강함만이 존재의 가치다. 약자는 죽어 마땅해!","나와 백 년이고 이백 년이고 겨루며 강해지자!","파괴살 공식... 내 권풍은 대기를 찢어발긴다!","인간은 결국 늙고 병들어 죽는다. 어째서 혈귀가 되지 않지?","새벽에는 주먹을 단련해 대기를 부수는 힘을 다듬는다.","한낮에는 굳게 닫힌 눈으로 투기의 맑음을 유도한다.","저물녘에는 붉게 물든 하늘을 보며 싸울 의지를 태운다.","밤에는 귀살대의 주들을 토벌하러 전장을 종횡무진한다."]},sunce:{name:"코쿠시보",select:"달의 호흡... 눈을 떠라, 일륜의 검이여.",lines:["나의 검은 달을 닮아 차갑고, 휘는 칼날은 공간을 왜곡한다.","오백 년간 닦아온 참격의 극의를 보여주마.","내 동생... 요리이치... 왜 너만을 축복한 것이냐...","귀살대의 검술 따위는 내 상대가 되지 못한다.","달의 호흡 제16형 — 월홍, 단현의 밤!","새벽에는 칼날에 돋아난 오니의 눈들을 정렬한다.","한낮에는 수백 년 전 동생과 겨루던 기억에 잠긴다.","저물녘에는 차오르는 달무리를 보며 칼끝을 세운다.","밤에는 상현의 1로서 오니들을 통솔하고 침입자를 벤다."]},simayi:{name:"루이",select:"내 가족의 인연을 방해하지 마라.",lines:["거미줄로 연결된 가족의 끈이야말로 절대적이다.","역할을 다하지 않는 가족은 존재할 가치가 없어.","내 실은 칼날보다 단단하고, 강철도 쉽게 썰어낸다.","탄지로, 네 여동생의 유대감을 내게 넘겨라!","각혈선혈... 붉은 실로 감싸 영원히 묶어주마.","새벽에는 거미줄에 맺힌 아침 이슬로 마장을 감춘다.","한낮에는 거미집 한가운데 거꾸로 매달려 휴식을 취한다.","저물녘에는 공포로 다져진 가족들의 기강을 정비한다.","밤에는 등나무 산에 진입하는 대원들을 실로 옭아맨다."]}};function Ac(a){return Vh[a]??null}function Nd(a){return Ac(a)?.select??""}function Od(a,t){const e=Ac(a);return!e||e.lines.length===0?"":e.lines[(t%e.lines.length+e.lines.length)%e.lines.length]}function Sw(a=Math.random){const t=Object.keys(Vh),e=t[Math.floor(a()*t.length)],i=Ac(e)??Vh[e];return{id:e,name:i.name,line:i.lines[Math.floor(a()*i.lines.length)]??i.select}}const Aw=40,Tw=1.2,Ew=40,Bd=100,zl=75,Cw=12,Rw=55,Pw=8,Fw=11,Lw=.9,Hd=1.7,Dw=10,Iw=6,Gd=90,Uw=[180,360,540];class zw{onLordSpawn=null;onCapture=null;onCounterattack=null;onVolley=null;onDefended=null;onLost=null;onApproach=null;d;state="enemy_held";approached=!1;sentriesSpawned=!1;garrisonAcc=0;captureTimer=0;counterTimer=0;waveIdx=0;trickleAcc=0;volleyTimer=0;fallGauge=0;gaugeThrottle=0;supplyTimer=0;lordX=0;lordZ=0;gameTime=0;volleys=[];_pt={x:0,z:0};constructor(t){this.d=t}reset(){this.state="enemy_held",this.approached=!1,this.sentriesSpawned=!1,this.garrisonAcc=0,this.captureTimer=0,this.counterTimer=0,this.waveIdx=0,this.trickleAcc=0,this.volleyTimer=0,this.fallGauge=0,this.gaugeThrottle=0,this.supplyTimer=0,this.volleys.length=0}update(t,e,i,s){this.gameTime=e;const n=Math.max(1,e/60),r=i-yt.cx,o=s-yt.cz,l=Math.hypot(r,o);switch(this.state){case"enemy_held":case"breached":this.updateSiegePhase(t,n,i,s,l);break;case"lord":break;case"captured":this.updateCaptured(t,e);break;case"counterattack":this.updateCounterattack(t,n,i,s,l);break}}updateSiegePhase(t,e,i,s,n){if(!(n>Aw)){for(this.approached||(this.approached=!0,this.onApproach?.()),this.sentriesSpawned||(this.sentriesSpawned=!0,this.d.spawner.spawnGateWatch(this.courtyardCorners(),e)),this.garrisonAcc+=Tw*t;this.garrisonAcc>=1;){if(this.garrisonAcc-=1,this.d.spawner.garrisonCount()>=Ew){this.garrisonAcc=0;break}const r=this.courtyardPoint();this.d.spawner.spawnSiegeAttacker(r.x,r.z,e,!1)}this.state==="breached"&&this.d.map.insideCastleBounds(i,s,-1)&&!this.d.map.insideKeepBounds(i,s,0)&&!this.d.bossActive()&&this.spawnLord()}}spawnLord(){this.state="lord",this.lordX=yt.keepGate.x,this.lordZ=yt.keepGate.z+4,this.d.map.openKeepGate(),this.d.requestLord(this.lordX,this.lordZ),this.onLordSpawn?.(this.lordX,this.lordZ)}notifyGateBreach(t){this.state==="enemy_held"&&(t==="castle-s"||t==="castle-e"||t==="castle-w")&&(this.state="breached")}captureNow(t,e){this.state==="lord"&&(this.state="captured",this.captureTimer=0,this.d.map.setCastleBreachable(!1),ne.allied=!0,ne.flipX=t,ne.flipZ=e,ne.flipVersion++,this.dropDumplings(2),this.d.placeSupply("gong",yt.cx,yt.cz+2),this.supplyTimer=Gd,this.onCapture?.(t,e))}updateCaptured(t,e){this.captureTimer+=t,this.tickSupplyRespawn(t),this.captureTimer>=Bd&&this.canStartCounter(e)&&this.startCounterattack()}canStartCounter(t){if(this.d.bossActive()||this.d.hulaoActive())return!1;for(const e of Uw)if(t>=e-25&&t<e)return!1;return!0}tickSupplyRespawn(t){this.supplyTimer-=t,this.supplyTimer<=0&&(this.supplyTimer=Gd,this.d.placeSupply("dumpling",yt.cx+(this.d.rng.next()-.5)*5,yt.cz+(this.d.rng.next()-.5)*4))}startCounterattack(){this.state="counterattack",this.counterTimer=0,this.waveIdx=0,this.trickleAcc=0,this.fallGauge=0,this.gaugeThrottle=0,this.volleyTimer=this.d.rng.range(2,4),this.volleys.length=0,this.d.spawner.setSiegeActive(!0),this.onCounterattack?.(),this.spawnWave(),this.waveIdx=1}updateCounterattack(t,e,i,s,n){for(this.counterTimer+=t,this.tickSupplyRespawn(t);this.waveIdx<4&&this.counterTimer>=this.waveIdx*20;)this.spawnWave(),this.waveIdx++;for(this.trickleAcc+=2*t;this.trickleAcc>=1;)this.trickleAcc-=1,this.spawnTrickle(e);if(this.volleyTimer-=t,this.volleyTimer<=0&&(this.d.map.insideCastleBounds(i,s,0)&&this.fireVolley(i,s),this.volleyTimer=this.d.rng.range(Pw,Fw)),this.updateVolleys(t,i,s),n>Rw){this.fall();return}this.counterTimer>=zl&&this.defend()}spawnWave(){const t=Math.max(1,this.gameTime/60);for(const e of yt.outerGates){const i=this.gateOutward(e.x,e.z);this.d.spawner.spawnSiegeRush(i.x,i.z,t)}}spawnTrickle(t){const e=yt.outerGates.filter(n=>this.d.map.isGateBreached(n.key));if(e.length===0)return;const i=e[this.d.rng.int(e.length)],s=this.gateOutward(i.x,i.z);this.d.spawner.spawnSiegeAttacker(s.x+(this.d.rng.next()-.5)*3,s.z+(this.d.rng.next()-.5)*3,t,this.d.rng.next()<.15)}gateOutward(t,e){let i=t-yt.cx,s=e-yt.cz;const n=Math.hypot(i,s)||1;return i/=n,s/=n,{x:t+i*5,z:e+s*5}}fireVolley(t,e){const i=5+this.d.rng.int(3),s=[];for(let n=0;n<i;n++){const r=this.d.rng.next()*Math.PI*2,o=this.d.rng.range(0,5.5);s.push({x:t+Math.cos(r)*o,z:e+Math.sin(r)*o,t:Lw})}for(const n of s)this.volleys.push({x:n.x,z:n.z,t:n.t});this.onVolley?.(s)}updateVolleys(t,e,i){for(let s=this.volleys.length-1;s>=0;s--){const n=this.volleys[s];if(n.t-=t,n.t<=0){const r=e-n.x,o=i-n.z;r*r+o*o<=Hd*Hd&&this.d.hitPlayer(Dw),this.volleys.splice(s,1)}}}defend(){this.state="held",this.d.spawner.setSiegeActive(!1),this.volleys.length=0,this.onDefended?.()}fall(){this.state="fallen",this.d.spawner.setSiegeActive(!1),this.volleys.length=0,ne.allied=!1,ne.flipX=yt.cx,ne.flipZ=yt.cz,ne.flipVersion++,this.onLost?.()}courtyardPoint(){for(let t=0;t<8;t++){const e=yt.cx+this.d.rng.range(-34,yt.ohx-2),i=yt.cz+this.d.rng.range(-30,yt.ohz-2);if(!this.d.map.insideKeepBounds(e,i,1))return this.d.map.projectWalkable(e,i,.75,this._pt),this._pt}return this._pt.x=yt.cx,this._pt.z=yt.cz+yt.ohz-4,this._pt}courtyardCorners(){return[{x:yt.cx-yt.ohx+3,z:yt.cz-yt.ohz+3},{x:yt.cx+yt.ohx-3,z:yt.cz-yt.ohz+3},{x:yt.cx-yt.ohx+3,z:yt.cz+yt.ohz-3},{x:yt.cx+yt.ohx-3,z:yt.cz+yt.ohz-3}]}dropDumplings(t){for(let e=0;e<t;e++){const i=e/Math.max(1,t)*Math.PI*2+.5;this.d.placeSupply("dumpling",yt.cx+Math.cos(i)*3,yt.cz+Math.sin(i)*3)}}get keepAuraActive(){return this.state==="captured"||this.state==="counterattack"||this.state==="held"}get keepCenterX(){return yt.cx}get keepCenterZ(){return yt.cz}get keepAuraRadius(){return Iw}get siegeState(){return this.state}get fallGaugeValue(){return this.fallGauge}get lordActive(){return this.state==="lord"}get counterRemainSec(){return this.state==="counterattack"?Math.max(0,zl-this.counterTimer):-1}get captureRemainSec(){return this.state==="captured"?Math.max(0,Bd-this.captureTimer):-1}testForceLord(){this.state==="enemy_held"&&(this.state="breached"),this.state==="breached"&&this.spawnLord()}testForceCounter(){this.state==="captured"&&this.startCounterattack()}testAddFall(t){this.fallGauge+=t,this.state==="counterattack"&&this.fallGauge>=Cw&&this.fall()}testForceDefend(){this.state==="counterattack"&&(this.counterTimer=zl,this.defend())}}const kw={ko:"나키메",en:"Nakime"},Vd=[{ko:"이곳은 무한성. 그 누구도 이곳을 마음대로 벗어날 수 없습니다.",en:"This is Mugen Castle. No one shall leave this place alive."},{ko:"비와와 소리가 울릴 때마다, 당신들의 공간은 왜곡될 것입니다.",en:"With every pluck of my biwa, your space shall warp."},{ko:"무잔 님의 명에 따라… 침입자를 이곳에서 지우겠습니다.",en:"By Muzan-sama’s command… I shall erase the intruders."}],Wd=[{ko:"무잔 님… 죄송합니다… 성의 제어가…",en:"Muzan-sama… forgive me… the castle control is…"},{ko:"비와가… 부서지고… 무한성이 흔들리는구나…",en:"The biwa is shattered… and Mugen Castle collapses…"}],Nw={ko:"무한성에 혈귀들이 웅거하고 있다. 결계를 부수고 성주 나키메의 목을 취하라.",en:"Demons lurk inside Mugen Castle. Break the barriers and take Nakime’s head."},Ow={capture:{ko:"무한성 제어 無限城制御",en:"Mugen Castle Controlled 無限城制御"},counter:{ko:"혈귀 대습격 鬼來襲",en:"Demonic Onslaught 鬼來襲"},defended:{ko:"무한성 정화 無限城淨化",en:"Mugen Castle Purified 無限城淨化"},fallen:{ko:"무한성 소실 無限城消失",en:"Mugen Castle Lost 無限城消失"}},Ya=a=>Mt()==="en"?a.en:a.ko;function Xd(){return Ya(kw)}function Bw(a=-1){const t=Vd.length,e=a<0?Math.floor(Math.random()*t):a%t;return Ya(Vd[e])}function Hw(a=-1){const t=Wd.length,e=a<0?Math.floor(Math.random()*t):a%t;return Ya(Wd[e])}function Gw(){return Ya(Nw)}function Xr(a){return Ya(Ow[a])}const Tc=a=>Mt()==="en"?a.en:a.ko,Vw={dongzhuo:{ko:"무한성 상공이 칠흑 같은 어둠에 휩싸인다. 십이귀월이 밀려온다.",en:"The Luoyang sky darkens at noon — Dong Zhuo’s host presses in."},yuanshao:{ko:"하북의 대군이 둑을 넘는다. 넓은 군세, 넓은 그늘.",en:"Hebei’s great host crosses the dike — a wide army, a wide shadow."},warlords:{ko:"깃발이 갈라진다. 이제부터는 군웅의 땅이다.",en:"The banners splinter — from here, the land of warlords."}},Ww={ko:"호로관 성문이 솟는다. 바람이 칼끝에 붙는다.",en:"The gate of Hulao rises — the wind clings to the blade."},Xw={dianwei:{ko:"완성 문을 지킨 그 교위가 다시 나섰다.",en:"That captain who held the Wancheng gate rides out again."},gaoshun:{ko:"함진영을 이끈 그 진장이 다시 줄을 세운다.",en:"That captain of the Trap-Breaker Camp forms his ranks anew."},xiahouyuan:{ko:"정군산의 그 선봉이 또 길목을 친다.",en:"That vanguard of Dingjun strikes the road once more."},lumeng:{ko:"형주를 삼킨 그 도독이 흰 옷으로 다시 온다.",en:"That commander who swallowed Jing comes again in white."},luxun:{ko:"이릉의 그 별장이 또 불줄을 편다.",en:"That lieutenant of Yiling lays out his fire-line again."}};function qw(a){const t=Vw[a];return t?Tc(t):""}function jw(){return Tc(Ww)}function $w(a){const t=Xw[a];return t?Tc(t):""}const qd=11,Zw=1.25,Kw=46,jd=6,$d=4.5,Yw=12,Qw=1.2,Jw=9,kl=0,Nl=1,tS=2;class eS{map;towerX=[];towerZ=[];beaconX=[];beaconZ=[];beaconState=[];beaconTimer=[];syncedRevision=-1;_dir={x:0,z:0};_pos={x:0,z:0};constructor(t){this.map=t}reset(){this.beaconX.length=0,this.beaconZ.length=0,this.beaconState.length=0,this.beaconTimer.length=0,this.towerX.length=0,this.towerZ.length=0,this.syncedRevision=-1,this.sync()}sync(){if(this.map.revision===this.syncedRevision)return;this.syncedRevision=this.map.revision;const t=this.beaconX.slice(),e=this.beaconZ.slice(),i=this.beaconState.slice(),s=this.beaconTimer.slice();this.towerX.length=0,this.towerZ.length=0,this.beaconX.length=0,this.beaconZ.length=0,this.beaconState.length=0,this.beaconTimer.length=0;for(const n of this.map.landmarks)if(n.name.includes("望樓")||n.name.includes("망루"))this.towerX.push(n.x),this.towerZ.push(n.z);else if(n.name.includes("烽火")||n.name.includes("향로")){this.beaconX.push(n.x),this.beaconZ.push(n.z);let r=kl,o=0;for(let l=0;l<t.length;l++){const h=t[l]-n.x,c=e[l]-n.z;if(h*h+c*c<.25){r=i[l],o=s[l];break}}this.beaconState.push(r),this.beaconTimer.push(o)}}update(t){this.sync();for(let e=0;e<this.beaconState.length;e++)this.beaconState[e]===Nl&&(this.beaconTimer[e]-=t,this.beaconTimer[e]<=0&&(this.beaconTimer[e]=0,this.beaconState[e]=tS))}watchtowerActive(t,e){this.sync();const i=qd*qd;for(let s=0;s<this.towerX.length;s++){const n=t-this.towerX[s],r=e-this.towerZ[s];if(n*n+r*r<=i)return!0}return!1}nearestThreatDir(t,e,i){const s=i.alive.length,n=Kw,r=n*n,o=jd*jd,l=i.controlled;let h=0,c=0,u=!1;for(let f=0;f<s;f++){if(i.alive[f]===0||l&&l[f]===1)continue;const m=i.x[f]-t,v=i.z[f]-e,g=m*m+v*v;if(g>r||g<o)continue;const p=Math.sqrt(g),w=1-p/n;h+=m/p*w,c+=v/p*w,u=!0}if(!u)return null;const d=Math.hypot(h,c);return d<1e-4?null:(this._dir.x=h/d,this._dir.z=c/d,this._dir)}tryIgniteBeacon(t,e){this.sync();const i=$d*$d;for(let s=0;s<this.beaconX.length;s++){if(this.beaconState[s]!==kl)continue;const n=t-this.beaconX[s],r=e-this.beaconZ[s];if(n*n+r*r<=i)return this.beaconState[s]=Nl,this.beaconTimer[s]=Yw,{x:this.beaconX[s],z:this.beaconZ[s],radius:Jw}}return null}beaconBuffActive(){for(let t=0;t<this.beaconState.length;t++)if(this.beaconState[t]===Nl)return!0;return!1}nearestArmedBeacon(t,e,i){this.sync();let s=null,n=i*i;for(let r=0;r<this.beaconX.length;r++){if(this.beaconState[r]!==kl)continue;const o=t-this.beaconX[r],l=e-this.beaconZ[r],h=o*o+l*l;h<n&&(n=h,this._pos.x=this.beaconX[r],this._pos.z=this.beaconZ[r],s=this._pos)}return s}beaconStateNear(t,e){this.sync();for(let i=0;i<this.beaconX.length;i++){const s=this.beaconX[i]-t,n=this.beaconZ[i]-e;if(s*s+n*n<.25)return this.beaconState[i]}return-1}get watchtowerCount(){return this.sync(),this.towerX.length}get beaconCount(){return this.sync(),this.beaconX.length}}const qr=6,Ol=6,Bl=50,Hl=600,iS=2,sS=.1;function jr(a){return 8+a*a*3}class _o{scene=new cm;rig;cinematics;postfx=null;input;atlas;ground;mountains;map=new ay;world;soldiersR;variantsR;sgradeR;apriorityR;shadowR;effects;lightField;banner;decals;particles;sakuraPetals;damageText;labels;markers;castleZone;gateBreachFx;arrowRain;starAura;player;companion;companion2;enemies=new lM;spawner;hash=new pM;gems;projectiles;zones;enemyProj;treasure;weapons;passives={};availableWeapons=null;combo;musou;boss;events;objects;siege;landmarks;siegeEvents={lordSpawn:0,capture:0,counter:0,volley:0,defended:0,lost:0};hud;levelup=new dw;hooks;hero=ys.zhaoyun;meta=null;state="attract";gameTime=0;kills=0;level=1;xp=0;nextXp=jr(1);pendingLevels=0;gold=0;goldEarned=0;maxCombo=0;bossesKilled=new Set;reviveAvailable=!1;reviveUsed=!1;ended=!1;boulderTime=0;boulderCompleted=!1;shrineCompleted=!1;discoveredTrainWreck=!1;discoveredWisteriaHouse=!1;attractTime=0;bossFlags={b3:!1,b6:!1,b9:!1};minibossIdx=0;nextMinibossAt=720;frameKills=0;killWindowT=0;killWindowCount=0;rerolledThisLevel=!1;relicIds=[];masterworkIds=[];feverWasOn=!1;endless=!1;victoryAchieved=!1;forceRelicNext=!1;heroQuoteCursor=0;nextHeroQuoteAt=12;hulaoAt=0;gateRushTimer=0;gateRushX=0;gateRushZ=0;gateRushHorizontal=!0;playerWallHits=0;timeScale=1;hitstopRemaining=0;musouStrength=0;renderTime=0;scratch=[];ctx;damageFlash;curChoices=[];moveOut={x:0,z:0};lastAttackWeapon="";lastAttackX=0;lastAttackZ=1;lastAttackCount=0;prevAttackCount=0;constructor(t,e,i,s,n=!1){this.atlas=t,this.rig=e,this.cinematics=new xb(e),this.input=i,this.hooks=s,this.hud=new pw(n),this.lightField=new bb(n);const r=this.lightField.uniforms();this.ground=new yb(this.scene,r),this.mountains=new Tb,this.scene.add(this.mountains.group),this.mountains.setPalette(790301,329226,329226,.85),this.map.update(0,0,0),this.world=new Qb(this.scene,this.map),this.soldiersR=new zr(t.soldiers,wt,r),this.variantsR=new zr(t.variants,wt,r),this.sgradeR=new zr(t.sgrade,48,r),this.apriorityR=new zr(t.apriority,48,r),this.shadowR=new xc(wt+2),this.scene.add(this.soldiersR.mesh,this.variantsR.mesh,this.sgradeR.mesh,this.apriorityR.mesh,this.shadowR.mesh),this.effects=new S_(this.scene),this.effects.initGlowBatches(r),this.arrowRain=new H_(this.scene,this.effects),this.starAura=new X_(this.scene),this.decals=new Ly(this.scene),this.particles=new q_(this.scene),this.sakuraPetals=new K_(this.scene),this.damageText=new Y_(this.scene),this.labels=new Q_(this.scene),this.markers=new _y(this.scene),this.castleZone=new Cy(this.scene),this.gateBreachFx=new Jb(this.scene),this.gems=new xM(this.scene),this.projectiles=new yM(this.scene,r),this.zones=new wM(this.scene),this.enemyProj=new Ua(this.scene),this.treasure=new AM(this.scene),this.player=new sM(t,this.hero,r),this.player.setRimScale(n?.5:1),this.scene.add(this.player.mesh),this.companion=new kd(this.scene,t,r),this.companion2=new kd(this.scene,t,r),this.spawner=new dM(t,this.enemies,this.map),this.banner=new Fy(this.scene),this.spawner.onWave=l=>{this.banner.trigger(l.hanja,l.ko,l.banner);const h=qw(l.id);h&&(this.hud.quote(this.hero.name,h,3200),this.nextHeroQuoteAt=this.gameTime+30)},this.weapons=[Pa(this.hero.startWeapon)],this.combo=new PM(l=>this.hud.banner(l,"#e8c667",60),()=>this.hud.punchCombo()),this.musou=new LM(this.hero.musou,()=>{this.hud.banner("奧義 · 全集中","#ffe9a8",96,1200,3),this.hud.musouCutin(this.hero),this.sayHero(2600),Tt.sfx("musou")});const o={yuanshao:"doma",dongzhuo:"enmu",lvbu:"muzan",xiahoudun:"akaza",sunce:"kokushibo",simayi:"rui",zhouyu:"gyokko",huaxiong:"nakime",dianwei:"gyutaro",gaoshun:"daki",xiahouyuan:"hantengu",lumeng:"sanemi",luxun:"hand_demon"};this.boss=new UM(t,(l,h,c)=>{this.hud.banner(`${l} ${it("bannerAppear")} ${h}`,"#e85c4a",44,1800,2);const u=o[c]??"akaza";this.hud.bossCutin(l,h,u);const d=Dl(c,"appear");d?this.hud.quote(l,d,3600):this.sayHero(),Tt.sfx("bossHorn"),Tt.playBgm("boss")}),this.events=new zM({enemies:this.enemies,zones:this.zones,effects:this.effects,particles:this.particles,atlas:t,rng:ce,banner:(l,h)=>{this.hud.banner(l,h,44,1800),Tt.sfx("warn")},playerX:()=>this.player.x,playerZ:()=>this.player.z,hitPlayer:l=>{this.onPlayerHit(l)}}),this.objects=new XM(this.scene,{effects:this.effects,particles:this.particles,rng:ce,playerX:()=>this.player.x,playerZ:()=>this.player.z,playerRadius:this.player.radius,damageArea:(l,h,c,u)=>{this.shockwave(l,h,c,u),Tt.sfx("explosion")},heal:l=>{this.player.heal(this.player.maxHp*l),Tt.sfx("buff")},applyBuff:(l,h)=>{this.player.applyBuff(l,h),Tt.sfx("buff")},banner:(l,h)=>{this.hud.banner(l,h,40,1400)},playerHpFrac:()=>this.player.hp/Math.max(1,this.player.maxHp),magnetizeGems:()=>this.gems.magnetizeAll(),stunEnemies:(l,h,c,u)=>{const d=this.hash.query(l,h,c,this.scratch);for(let f=0;f<d;f++){const m=this.scratch[f];this.enemies.alive[m]===1&&this.enemies.controlled[m]===0&&(this.enemies.stun[m]=Math.max(this.enemies.stun[m],u))}}}),this.ctx={dt:0,gameTime:0,px:0,pz:0,faceX:0,faceZ:1,aimX:0,aimZ:1,aimTarget:-1,hash:this.hash,enemies:this.enemies,effects:this.effects,damageText:this.damageText,projectiles:this.projectiles,zones:this.zones,particles:this.particles,stats:this.player.stats,rng:ce,onKill:l=>this.handleKill(l),onAttack:(l,h,c)=>{this.lastAttackWeapon=l,this.lastAttackX=h,this.lastAttackZ=c,this.lastAttackCount++},scratch:this.scratch},this.siege=new zw({map:this.map,spawner:this.spawner,enemies:this.enemies,rng:ce,bossActive:()=>this.boss.active,hulaoActive:()=>this.map.hulaoOn,requestLord:(l,h)=>{this.boss.active||(this.boss.spawn("huaxiong",Math.max(1,this.gameTime/60),this.ctx,l,h+16),this.boss.idx>=0&&(this.enemies.x[this.boss.idx]=l,this.enemies.z[this.boss.idx]=h,this.cinematics.onBossSpawn(l-this.player.x,h-this.player.z)))},hitPlayer:l=>{this.onPlayerHit(l)},placeSupply:(l,h,c)=>{l==="dumpling"?this.objects.spawnDumplingAt(h,c):this.objects.spawnGongAt(h,c)}}),this.siege.onApproach=()=>{this.hud.quote(this.hero.name,Gw(),3600),Tt.sfx("warn")},this.siege.onLordSpawn=()=>{this.siegeEvents.lordSpawn++,this.hud.quote(Xd(),Bw(),3200)},this.siege.onCapture=(l,h)=>{this.siegeEvents.capture++,this.hud.banner(Xr("capture"),"#ffd86b",60,1800,1);for(let u=0;u<10;u++){const d=ce.next()*Math.PI*2;this.gems.spawn(l+Math.cos(d)*2,h+Math.sin(d)*2,6)}const c=md(()=>ce.next(),this.masterworkIds,3);if(c.length>0){this.player.heal(this.player.maxHp*.4),this.curChoices=c.map(d=>({kind:"masterwork",id:d.id})),this.state="levelup";const u=this.curChoices.map(d=>this.cardView(d));this.levelup.open(u,Math.floor(this.gold),!1,d=>this.pickCard(d),()=>{})}else this.player.heal(this.player.maxHp*.5);this.hud.quote(this.hero.name,Mt()==="en"?"Luoyang is ours. Stay in the keep, resupply — the reclaimers will come.":"무한성을 함락시켰다. 결계를 사수하고 무잔을 소멸시켜라.",4200)},this.siege.onCounterattack=()=>{this.siegeEvents.counter++,this.hud.banner(Xr("counter"),"#e85c4a",56,1800,1),this.hud.quote(this.hero.name,Mt()==="en"?"Reclaimers flood in! Hold your ground in the castle for 75 seconds.":"탈환군이 몰려온다! 성 안에서 75초만 버텨내라.",4600),Tt.sfx("warn"),Tt.playBgm("siege"),this.rig.addTrauma(.4)},this.siege.onVolley=l=>{this.siegeEvents.volley++,this.arrowRain.volley(l)},this.siege.onDefended=()=>{this.siegeEvents.defended++,this.hud.banner(Xr("defended"),"#9affc0",60,1800,1);for(let l=0;l<24;l++){const h=ce.next()*Math.PI*2,c=2+ce.next()*5;this.gems.spawn(yt.cx+Math.cos(h)*c,yt.cz+Math.sin(h)*c,8)}for(let l=0;l<3;l++)this.objects.spawnDumplingAt(yt.cx+(l-1)*3,yt.cz+3);this.musou.gauge=Math.min(100,this.musou.gauge+50),this.rig.addTrauma(.5),Tt.sfx("levelup"),this.boss.active||Tt.playBgm("battle")},this.siege.onLost=()=>{this.siegeEvents.lost++,this.hud.banner(Xr("fallen"),"#c8322a",56,1800,1),this.rig.addTrauma(.6),Tt.sfx("warn"),this.boss.active||Tt.playBgm("battle")},this.landmarks=new eS(this.map),this.effects.screenFlash=l=>this.flashScreen(l),this.effects.spawnLight=(l,h,c,u,d,f,m)=>this.lightField.spawn(l,.6,h,c,u,d,f,m),this.zones.spawnLight=(l,h,c,u,d,f,m)=>this.lightField.spawn(l,.5,h,c,u,d,f,m),this.effects.spawnDecal=(l,h,c,u,d,f)=>this.decals.spawn(l,h,c,u,d,f),this.effects.spawnMusouLight=(l,h,c,u,d,f,m)=>this.lightField.spawn(l,.8,h,c,u,d,f,m,!0),this.damageFlash=document.createElement("div"),this.damageFlash.style.cssText=["position:fixed","inset:0","pointer-events:none","opacity:0","z-index:30","background:radial-gradient(ellipse at center, rgba(0,0,0,0) 28%, rgba(200,26,20,0.98) 100%)"].join(";"),document.body.appendChild(this.damageFlash),this.lowHpVignette=document.createElement("div"),this.lowHpVignette.style.cssText=["position:fixed","inset:0","pointer-events:none","opacity:0","z-index:29","transition:opacity 0.25s linear","background:radial-gradient(ellipse at center, rgba(0,0,0,0) 45%, rgba(150,10,10,0.9) 100%)"].join(";"),document.body.appendChild(this.lowHpVignette)}lowHpVignette;lowHpBeat=0;damageVigLevel=0;smallFlashCd=0;flashActive=0;updateLowHp(t){this.smallFlashCd>0&&(this.smallFlashCd-=t),this.damageVigLevel>.001?(this.damageVigLevel*=Math.exp(-t/.26),this.damageVigLevel<.02&&(this.damageVigLevel=0),this.damageFlash.style.opacity=this.damageVigLevel.toFixed(3)):this.damageFlash.style.opacity!=="0"&&(this.damageFlash.style.opacity="0");const e=this.player.hp/Math.max(1,this.player.maxHp);if(e<.3&&this.state==="play"&&!this.player.dead){const i=(.3-e)/.3;this.lowHpVignette.style.opacity=(.3+.3*i).toFixed(2),this.lowHpBeat-=t,this.lowHpBeat<=0&&(this.lowHpBeat=.5+.5*(e/.3),Tt.sfx("heartbeat"))}else this.lowHpVignette.style.opacity!=="0"&&(this.lowHpVignette.style.opacity="0",this.lowHpBeat=0)}pulseDamageVig(t){const e=t<.15?.15:t>.62?.62:t;e>this.damageVigLevel&&(this.damageVigLevel=e)}flashScreen(t){let e=t;if(e<.2){if(this.smallFlashCd>0)return;this.smallFlashCd=.5,e>.06&&(e=.06)}if(e=Math.min(e,.5-this.flashActive),e<=.01)return;const s=e;this.flashActive+=s;const n=document.createElement("div");n.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:31;background:rgba(200,220,255,1);",document.body.appendChild(n),n.animate([{opacity:e},{opacity:0}],{duration:120,easing:"ease-out"}).onfinish=()=>{n.remove(),this.flashActive-=s}}hitstop(t,e=.05){this.hitstopRemaining=Math.max(this.hitstopRemaining,t/1e3),this.timeScale=e}setHero(t){const e=ys[t];e&&(this.hero=e,this.player.setHero(e),this.musou.setHero(e.musou))}enterAttract(){this.resetPools(),this.player.mesh.visible=!1,this.hud.setVisible(!1),this.state="attract",this.attractTime=0}beginRun(t,e,i){this.setHero(t),this.meta=e,this.player.setMeta(e),this.availableWeapons=i?new Set(i):null,this.restart()}resetPools(){this.enemies.reset(),this.gems.reset(),this.projectiles.reset(),this.zones.reset(),this.enemyProj.reset(),this.treasure.reset(),this.labels.reset(),this.markers.reset(),this.castleZone.reset(),this.arrowRain.reset(),this.lightField.reset(),this.banner.reset(),this.decals.reset(),this.lowHpVignette.style.opacity="0",this.lowHpBeat=0,this.damageVigLevel=0,this.smallFlashCd=0,this.flashActive=0,this.damageFlash.style.opacity="0",this.spawner.reset(),this.combo.reset(),this.musou.reset(),this.events.reset(),this.objects.reset(),this.map.reset(),this.siege.reset(),this.landmarks.reset(),this.siegeEvents={lordSpawn:0,capture:0,counter:0,volley:0,defended:0,lost:0},this.gateBreachFx.reset(),this.starAura.reset(),this.cinematics.reset(),this.gateRushTimer=0,this.boulderTime=0,this.boulderCompleted=!1,this.shrineCompleted=!1,this.discoveredTrainWreck=!1,this.discoveredWisteriaHouse=!1,this.hulaoAt=420+ce.range(0,120),this.playerWallHits=0,this.lastAttackWeapon="",this.lastAttackX=0,this.lastAttackZ=1,this.lastAttackCount=0,this.prevAttackCount=0,this.companion.reset(this.hero.id),this.companion2.reset(this.hero.id,{def:_w(this.companion.definition.id,()=>ce.next()),side:-1,joinTime:xw,specialPhase:6}),this.boss.active=!1,this.boss.idx=-1}restart(){this.resetPools(),this.passives={},this.player.reset(this.passives),this.player.mesh.visible=!0,this.weapons=[Pa(this.hero.startWeapon)],this.gameTime=0,this.kills=0,this.xp=0,this.gold=0,this.goldEarned=0,this.maxCombo=0,this.bossesKilled.clear(),this.ended=!1,this.bossFlags={b3:!1,b6:!1,b9:!1},this.minibossIdx=0,this.nextMinibossAt=720,this.timeScale=1,this.hitstopRemaining=0,this.musouStrength=0,this.relicIds=[],this.masterworkIds=[],this.endless=!1,this.victoryAchieved=!1,this.forceRelicNext=!1,this.feverWasOn=!1,this.heroQuoteCursor=0,this.nextHeroQuoteAt=12,this.hud.setFever(!1),this.reviveAvailable=this.meta?.revive??!1,this.reviveUsed=!1;const t=this.meta?.startLevel??0;this.level=1+t,this.nextXp=jr(this.level),this.pendingLevels=t,this.hud.setVisible(!0),this.hud.resetSlots(),this.refreshLoadout(),this.state="play",Tt.playBgm("battle")}refreshLoadout(){const t=[];for(const i of this.weapons)t.push({id:i.id,glyph:(Te[i.id]?.hanja??"?")[0],level:i.level,accent:"#e8c667"});const e=[];for(const i in this.passives)e.push({id:i,glyph:(Wi[i]?.hanja??"?")[0],level:this.passives[i],accent:"#7ec8ff"});this.hud.setLoadout(t,e)}pause(){this.state==="play"&&(this.state="paused",this.hooks.onPause())}resume(){this.state==="paused"&&(this.state="play")}abandon(){(this.state==="paused"||this.state==="play")&&this.finish(this.victoryAchieved)}get musouGauge(){return this.musou.gauge}get musouReadyFlag(){return this.musou.ready}get currentState(){return this.state}update(t){if(this.renderTime+=t,this.state==="attract"){this.attractTime+=t;const x=Math.sin(this.attractTime*.06)*5,E=Math.cos(this.attractTime*.05)*5;this.ground.update(t,x,E),this.mountains.group.position.set(x,0,E);const P=Math.floor(4*t+Math.random());for(let F=0;F<P;F++)this.particles.wisteriaPetal(x,E,20);this.map.update(x,E,t),this.world.update(),this.particles.update(t),this.effects.update(t),this.rig.update(t,x,E),sd(0,0,0,0,0,0,!1),this.musouStrength+=(0-this.musouStrength)*Math.min(1,t*6),this.renderSprites();return}if(this.state==="dead"||this.state==="victory")return;if(this.state==="levelup"){this.input.consumePressed("Digit1")?this.pickCard(0):this.input.consumePressed("Digit2")?this.pickCard(1):this.input.consumePressed("Digit3")&&this.pickCard(2);return}if((this.input.consumePressed("Escape")||this.input.consumePressed("KeyP"))&&this.pause(),this.state==="paused")return;this.cinematics.wantsSkipInput&&(this.input.move.x!==0||this.input.move.z!==0||this.input.isDown("Space"))&&this.cinematics.skip(),this.input.consumePressed("Space")&&this.musou.activate()&&(this.rig.addTrauma(.5),this.cinematics.onMusouStart(),this.postfx?.pulseAberration(.7),this.flashScreen(.35)),this.hitstopRemaining>0&&(this.hitstopRemaining-=t,this.hitstopRemaining<=0&&(this.timeScale=1));const e=t*this.timeScale,i=e*this.musou.enemyTimeScale;this.frameKills=0,this.musou.chargeMul=this.player.musouBuffed?2:1,this.gameTime+=e,this.player.musouInvuln=this.musou.active,this.map.update(this.player.x,this.player.z,e);const s=this.player.x,n=this.player.z;if(this.player.update(e,this.input),this.map.resolveMovement(s,n,this.player.x,this.player.z,this.player.radius,this.moveOut)&&this.playerWallHits++,this.player.setPosition(this.moveOut.x,this.moveOut.z),this.player.justSkid&&(this.player.justSkid=!1,this.effects.spawnFlash(this.player.x,this.player.z,1.6,1.2,.4,.9),this.particles.dust(this.player.x,this.player.z)),this.player.justBoost){this.player.justBoost=!1;const x=this.player.boostTier>=2;this.effects.spawnThrust(this.player.x,this.player.z,this.player.faceX,this.player.faceZ,x?6:4.5,x?2.2:1.6,1.7,1.35,.5,.24),this.effects.spawnRing(this.player.x,this.player.z,x?4:2.8,1.7,1.3,.5,.4),this.rig.punchFov(x?3:2),Tt.sfx("warn")}if(this.map.update(this.player.x,this.player.z,0),this.world.update(),this.player.justDashed){this.player.justDashed=!1;const x=this.player.x,E=this.player.z,P=this.player.dashDirX,F=this.player.dashDirZ;this.effects.spawnRing(x,E,4.5,1.4,1.9,2.4,.35),this.effects.spawnThrust(x,E,P,F,6,2,.7,1.4,2.2,.22),this.effects.spawnFlash(x,E,.8,1.4,2.2,2.2);for(let G=0;G<6;G++)this.particles.dust(x-P*G*.4,E-F*G*.4);this.cinematics.onDash(),this.postfx?.pulseBlur(.8,P,F),Tt.sfx("warn")}this.gameTime>=this.nextHeroQuoteAt&&this.sayHero(),this.checkBossSpawn(),this.hulaoAt>0&&this.gameTime>=this.hulaoAt&&!this.map.hulaoOn&&!this.map.isGateBreached()&&(this.hulaoAt=0,this.map.triggerHulao(this.player.x,this.player.z),this.hud.banner(`${it("bannerHulao")} 虎牢關`,"#ffb05a",48,1800),this.hud.quote(this.hero.name,jw(),3200),this.nextHeroQuoteAt=this.gameTime+30,Tt.sfx("warn")),this.spawner.setBossActive(this.boss.active),this.spawner.update(i,this.gameTime,this.player.x,this.player.z),this.siege.update(i,this.gameTime,this.player.x,this.player.z),this.castleZone.setActive(this.siege.keepAuraActive),this.castleZone.update(e),this.landmarks.update(i);const r=this.landmarks.tryIgniteBeacon(this.player.x,this.player.z);if(r){const x=this.hash.query(r.x,r.z,r.radius,this.scratch);for(let E=0;E<x;E++){const P=this.scratch[E];if(this.enemies.alive[P]===1&&this.enemies.controlled[P]===0){this.enemies.stun[P]=Math.max(this.enemies.stun[P],.9);const F=this.enemies.x[P]-r.x,G=this.enemies.z[P]-r.z,j=Math.hypot(F,G)||1;this.enemies.push(P,F/j,G/j,6)}}this.effects.spawnRing(r.x,r.z,r.radius,2.2,1.1,.4,.5),this.hud.banner(Mt()==="en"?"Beacon Rally 烽火":"봉화 랠리 烽火","#ff9a3c",46,1400,1),Tt.sfx("warn")}this.hash.clear(),this.enemies.insertAll(this.hash);const o=mM(this.enemies,this.hash,this.player.x,this.player.z,22,this.scratch,this.enemies.aliveCount);if(this.ctx.aimTarget=o,this.ctx.aimX=this.player.faceX,this.ctx.aimZ=this.player.faceZ,this.ctx.dashing=this.player.dashing,this.ctx.boosting=this.player.boosting,o>=0){const x=this.enemies.x[o]-this.player.x,E=this.enemies.z[o]-this.player.z,P=Math.hypot(x,E)||1;this.ctx.aimX=x/P,this.ctx.aimZ=E/P}this.enemies.update(i,this.player.x,this.player.z,this.hash,this.enemyProj,this.effects,this.map),this.ctx.dt=e,this.ctx.gameTime=this.gameTime,this.ctx.px=this.player.x,this.ctx.pz=this.player.z,this.ctx.faceX=this.player.faceX,this.ctx.faceZ=this.player.faceZ,this.ctx.dt=i,this.boss.update(i,this.ctx,this.enemyProj,this.player),this.events.update(i,this.gameTime),this.ctx.dt=e,this.hash.clear(),this.enemies.insertAll(this.hash);const l=x=>{const E=x.definition;this.hud.banner(`${it("bannerAlly")} ${E.name} ${E.hanja}`,"#7ec8ff",46,1600),this.hud.companionCutin(E),this.hud.quote(E.name,Od(E.id,0)||ip(E)),Tt.sfx("buff"),this.cinematics.onAllyJoin(x.joinDirX,x.joinDirZ),this.hitstop(250,.32),this.banner.playing||this.banner.trigger(E.hanja,E.name,[E.cr,E.cg,E.cb])};this.companion.update(e,this.gameTime,this.player,this.ctx,this.level,this.musou.active)&&l(this.companion),this.companion2.update(e,this.gameTime,this.player,this.ctx,this.level,this.musou.active)&&l(this.companion2);const h=this.companion.active&&this.companion2.active;this.companion.damageScale=h?.8:1,this.companion2.damageScale=h?.8:1;const c=this.companion.consumeSpecialEvent();c&&(this.hud.quote(this.companion.definition.name,c.line),Tt.sfx("buff"));const u=this.companion2.consumeSpecialEvent();u&&(this.hud.quote(this.companion2.definition.name,u.line),Tt.sfx("buff"));const d=this.player.stats.rangeMul,f=this.player.stats.damageMul;this.landmarks.watchtowerActive(this.player.x,this.player.z)&&(this.player.stats.rangeMul=d*Zw),this.landmarks.beaconBuffActive()&&(this.player.stats.damageMul=f*Qw);for(let x=0;x<this.weapons.length;x++)this.weapons[x].update(this.ctx);this.player.stats.rangeMul=d,this.player.stats.damageMul=f,this.projectiles.update(e,this.player.x,this.player.z,this.enemies,this.hash,this.damageText,this.ctx.onKill,this.particles,this.effects,this.scratch),this.zones.update(e,this.enemies,this.hash,this.damageText,this.ctx.onKill,this.particles,this.scratch),this.objects.update(e,this.gameTime);for(const x of this.map.landmarks){if(x.kind!==5)continue;const E=this.player.x-x.x,P=this.player.z-x.z;E*E+P*P<=25&&(this.player.heal(this.player.maxHp*.025*e),Math.random()<6*e&&this.particles.steam(x.x,x.z+.4),this.lightField.spawn(x.x,.6,x.z,1.3,.9,.5,6,.2))}if(this.siege.keepAuraActive){const x=this.siege.keepCenterX,E=this.siege.keepCenterZ,P=this.player.x-x,F=this.player.z-E,G=this.siege.keepAuraRadius;P*P+F*F<=G*G&&(this.player.heal(this.player.maxHp*.025*e),Math.random()<6*e&&this.particles.steam(x,E+.4),this.lightField.spawn(x,.6,E,1.3,.9,.5,6,.2))}this.objects.hitAt(this.player.x,this.player.z,4);const m=this.lastAttackCount-this.prevAttackCount;if(this.prevAttackCount=this.lastAttackCount,m>0){const x=this.map.nearestSealedGateKey(this.player.x,this.player.z,6);if(x){const E=34*this.player.stats.damageMul*m,P=this.map.damageGate(x,E),F=this.map.gates.find(G=>G.key===x);F&&this.effects.spawnRing(F.x,F.z,1.5,1.6,.6,.22,.22),P&&this.onGateBreached(P)}}this.ctx.dt=t;const v=this.player.x,g=this.player.z;this.musou.update(t,this.ctx,this.player)&&this.cinematics.onMusouEnd(),this.musou.active&&this.hero.musou==="guanyu"&&(this.enemyProj.clearInCircle(this.player.x,this.player.z,9.5,this.particles),Math.random()<3.5*t&&this.effects.spawnTelegraph(0,this.player.x,this.player.z,0,19,19,0,.45)),this.map.resolveMovement(v,g,this.player.x,this.player.z,this.player.radius,this.moveOut),this.player.setPosition(this.moveOut.x,this.moveOut.z),this.ctx.dt=e,this.ctx.musouActive=this.musou.active,this.ctx.musouKey=this.musou.heroMusou,this.enemyProj.update(i,this.player.x,this.player.z,this.player.radius,this.onPlayerHit,this.particles,this.effects,(x,E,P)=>this.map.circleBlocked(x,E,P)),this.contactDamage(),this.frameKills>=8&&(this.hitstop(30,.08),this.rig.addTrauma(.35)),this.killWindowT-=t,this.killWindowT<=0&&(this.killWindowT=.5,this.killWindowCount=0),this.killWindowCount+=this.frameKills,this.killWindowCount>=6&&(this.cinematics.onMassKill(this.killWindowCount),this.postfx?.pulseBlur(.85),this.hitstop(240,.28),this.killWindowCount=-1e5),this.gems.update(e,this.player.x,this.player.z,this.player.stats.pickupMul,this.onCollect,x=>{this.player.heal(this.player.maxHp*x),Tt.sfx("buff")}),this.treasure.update(e,this.player.x,this.player.z,this.player.stats.pickupMul,this.onTreasure),this.combo.update(e);const p=this.combo.fever;this.hud.setFever(p),p&&!this.feverWasOn&&Tt.sfx("fever"),this.feverWasOn=p,this.effects.update(t),this.arrowRain.update(t),this.starAura.update(t,this.player.x,this.player.z,this.player.shrineBuffActive,this.atlas.sgrade,this.player.frameUv.u,this.player.frameUv.v),this.lightField.update(t),this.decals.update(t),this.updateLowHp(t),this.particles.update(t),this.sakuraPetals.update(t,this.player.x,this.player.z),this.damageText.update(t),this.gateBreachFx.update(t),this.ground.update(t,this.player.x,this.player.z),this.mountains.group.position.set(this.player.x,0,this.player.z);const w=Math.floor(5*t+Math.random());for(let x=0;x<w;x++)this.particles.wisteriaPetal(this.player.x,this.player.z,28);this.map.update(this.player.x,this.player.z,t),this.world.update();const A=this.hash.query(this.player.x,this.player.z,11,this.scratch);let y=0;for(let x=0;x<A;x++){const E=this.scratch[x];this.enemies.alive[E]===1&&this.enemies.controlled[E]===0&&y++}this.rig.setThreat(Math.min(1,y/45)),this.rig.setLookAhead(this.player.velX,this.player.velZ,this.player.speedFrac),this.cinematics.update(t),this.rig.update(t,this.player.x,this.player.z),this.banner.update(t,this.rig.camera);const T=this.rig.camera.position;sd(T.x,T.y,T.z,this.player.x,1.2,this.player.z,this.map.activeColliderCount>0),this.gateRushTimer>0&&(this.gateRushTimer-=t,this.gateRushTimer<=0&&this.spawner.spawnGateRush(this.gateRushX,this.gateRushZ,this.gateRushHorizontal,this.gameTime/60));const M=this.musou.active?.9:0;this.musouStrength+=(M-this.musouStrength)*Math.min(1,t*6),this.renderSprites(),this.updateLabels(),this.updateMarkers(t);const C=Mt()==="en";let b=null;if(!this.boulderCompleted){const x=this.player.x- -40,E=this.player.z- -10,P=Math.hypot(x,E);if(P<=4.5)if(this.boulderTime+=t,this.boulderTime>=5){this.boulderCompleted=!0,this.boulderTime=5,Tt.sfx("achievement"),this.gold+=300,this.goldEarned+=300;for(let F=0;F<15;F++){const G=Math.random()*Math.PI*2;this.gems.spawn(-40+Math.cos(G)*3,-10+Math.sin(G)*3,5)}this.effects.spawnRing(-40,-10,3.5,2,1.2,.4,.4),this.particles.burst(-40,-10,.8,.8,.8,20,5),this.hud.quote(C?"Sakonji":"우로코다키 사콘지",C?"You have sliced the boulder. Well done!":"바위를 벴구나. 잘 했다.",3500)}else b={title:C?"Quest: Slicing the Boulder":"임무: 바위 베기 수련",sub:C?`Stay near the training boulder (${(5-this.boulderTime).toFixed(1)}s left)`:`수련 바위 근처에 머물러라 (${(5-this.boulderTime).toFixed(1)}초 남음)`,progress01:this.boulderTime/5,color:"#a8a8a8"};else P<=15&&(b={title:C?"Quest: Slicing the Boulder":"임무: 바위 베기 수련",sub:C?"Approach the boulder to begin slicing training":"수련 바위 근처로 가서 수련을 시작하라",color:"#a8a8a8"})}if(!this.shrineCompleted&&!b){const x=this.player.x-0,E=this.player.z-80,P=Math.hypot(x,E);P<=6?(this.shrineCompleted=!0,Tt.sfx("revive"),this.player.heal(this.player.maxHp),this.player.invuln=Math.max(this.player.invuln,12),this.effects.spawnRing(0,80,5.5,1.2,.4,1.2,.4),this.particles.burst(0,80,.7,.3,.9,30,4),this.hud.quote(C?"Kagaya":"우부야시키 카가야",C?"May fortune and victory bless the Demon Slayers.":"오늘도 귀살대 대원에게 무운이 깃들기를.",3800)):P<=25&&(b={title:C?"Quest: Wisteria Shrine Blessing":"임무: 신사의 가호",sub:C?"Visit the Wisteria Shrine ahead to receive a divine blessing":"앞에 보이는 등나무꽃 신사를 참배하여 가호를 받아라",color:"#9b30b0"})}if(!this.discoveredTrainWreck){for(const x of this.map.landmarks)if(x.name.includes("열차")||x.name.includes("列車")){const E=this.player.x-x.x,P=this.player.z-x.z;if(E*E+P*P<=100){this.discoveredTrainWreck=!0,this.hud.quote(C?"Kyojuro":"렌고쿠 쿄쥬로",C?"The Mugen Train... I will protect everyone to the very end!":"무한열차인가... 단 한 사람도 죽게 두지 않는다!",4500),Tt.sfx("achievement");break}}}if(!this.discoveredWisteriaHouse){for(const x of this.map.landmarks)if(x.name.includes("후지꽃")||x.name.includes("藤의 집")||x.name.includes("藤の家")){const E=this.player.x-x.x,P=this.player.z-x.z;if(E*E+P*P<=100){this.discoveredWisteriaHouse=!0,this.hud.quote(C?"Tanjiro":"카마도 탄지로",C?"The scent of wisteria! A crest of the Wisteria family is here.":"등나무꽃의 향기야! 후지꽃 가문의 문양집이구나.",4e3),Tt.sfx("achievement");break}}}b?this.hud.setObjective(b):this.updateSiegeObjective(),this.pendingLevels>0&&this.state==="play"&&this.showNextLevelUp(),this.player.dead?this.onPlayerDeath():!this.endless&&this.gameTime>=Hl&&this.finish(!0),!this.ended&&this.hud.update(this.buildHudState())}buildHudState(){return{time:this.gameTime,kills:this.kills,level:this.level,xp:this.xp,nextXp:this.nextXp,hp:this.player.hp,maxHp:this.player.maxHp,gold:this.gold,musouPct:this.musou.gauge,musouReady:this.musou.ready,combo:this.combo.count,bossActive:this.boss.active,bossName:Ae("hero",this.boss.typeId,this.boss.name),bossHanja:this.boss.hanja,bossFrac:this.boss.hpFrac(this.ctx)}}sayHero(t=3600){const e=Od(this.hero.id,this.heroQuoteCursor++);this.hud.quote(this.hero.name,e,t),this.nextHeroQuoteAt=this.gameTime+60}static BOSS_SLOT_3=["yuanshao","xiahoudun","sunce"];static BOSS_SLOT_6=["dongzhuo","simayi","zhouyu"];checkBossSpawn(){if(this.boss.active)return;let t=!1;const e=this.gameTime/60;if(!this.bossFlags.b3&&this.gameTime>=180){this.bossFlags.b3=!0;const i=_o.BOSS_SLOT_3;this.boss.spawn(i[ce.int(i.length)],e,this.ctx,this.player.x,this.player.z),t=!0}else if(!this.bossFlags.b6&&this.gameTime>=360){this.bossFlags.b6=!0;const i=_o.BOSS_SLOT_6;this.boss.spawn(i[ce.int(i.length)],e,this.ctx,this.player.x,this.player.z),t=!0}else if(!this.bossFlags.b9&&this.gameTime>=540)this.bossFlags.b9=!0,this.boss.spawn("lvbu",e,this.ctx,this.player.x,this.player.z),t=!0;else if(this.endless&&this.gameTime>=this.nextMinibossAt){this.nextMinibossAt+=180;const i=Fd[this.minibossIdx%Fd.length];this.minibossIdx++,this.boss.spawn(i,e,this.ctx,this.player.x,this.player.z),t=!0}if(t&&this.boss.idx>=0&&(this.cinematics.onBossSpawn(this.enemies.x[this.boss.idx]-this.player.x,this.enemies.z[this.boss.idx]-this.player.z),this.boss.typeId)){const i=this.endless?$w(this.boss.typeId):"",s=i||Dl(this.boss.typeId,"appear");if(s){const n=i?this.hero.name:Ae("hero",this.boss.typeId,this.boss.name);this.hud.quote(n,s,3200)}}}consumeReplayTrigger(){return this.cinematics.consumeReplayTrigger()}setPostFx(t){this.postfx=t}renderSprites(){this.shadowR.begin(),this.state!=="attract"&&this.shadowR.push(this.player.x,this.player.z,this.player.radius*1.6),this.companion.active&&this.shadowR.push(this.companion.x,this.companion.z,this.companion.radius*1.5),this.companion2.active&&this.shadowR.push(this.companion2.x,this.companion2.z,this.companion2.radius*1.5),this.enemies.render(this.atlas,this.soldiersR,this.variantsR,this.sgradeR,this.apriorityR,this.shadowR),this.shadowR.end(),this.decals.render(),this.gems.render(),this.projectiles.render(this.renderTime),this.zones.render(this.renderTime),this.enemyProj.render(this.renderTime),this.treasure.render(),this.objects.render(this.renderTime)}updateLabels(){const t=this.enemies,e=t.specials;this.labels.begin();for(let i=e.length-1;i>=0;i--){const s=e[i];if(t.alive[s]===0||t.labels[s]===null){e.splice(i,1);continue}this.labels.place(t.labels[s],t.x[s],t.scale[s]*1.05,t.z[s]),t.cart[s]===1&&Math.random()<.6&&this.particles.emit(t.x[s],.8,t.z[s],0,.5,0,2.2,1.8,.6,.6,.5,-.4,.9)}this.labels.end()}updateMarkers(t){const e=this.player.x,i=this.player.z;this.markers.begin(this.renderTime);const s=this.map.landmarks;for(let r=0;r<s.length;r++){const o=s[r],l=e-o.x,h=i-o.z,c=l*l+h*h;o.glow>0&&this.markers.glowAt(o.x,o.z,o.glow,o.gr,o.gg,o.gb),c<900&&this.markers.name(o.name,o.x,o.height*.5+1,o.z),c<2116&&this.emitLandmarkAmbient(o,t),o.kind===11?this.markers.interactRing(o.x,o.z,1.6,.9,.35,this.landmarks.beaconStateNear(o.x,o.z)===0):o.kind===5?this.markers.interactRing(o.x,o.z,.5,1.3,.7,!0):o.kind===6?this.markers.interactRing(o.x,o.z,1.4,.85,.4,!0):o.kind===2&&this.markers.interactRing(o.x,o.z,.6,.85,1.2,this.landmarks.watchtowerActive(o.x,o.z))}this.objects.emitMarkers(this.markers,e,i);for(const r of yt.outerGates)this.markers.gateBar(r.x,r.z,this.map.gateHp01(r.key));const n=this.guideTarget();n?this.markers.guide(n.x,n.z,e,i,this.rig.camera,n.color):this.markers.guideOff(),this.markers.end()}guideTarget(){const t=this.enemies;for(let i=0;i<t.flee.length;i++)if(t.alive[i]===1&&t.flee[i]===1)return{x:t.x[i],z:t.z[i],color:"rgba(255,225,77,0.95)"};if(this.boss.active&&this.boss.idx>=0&&t.alive[this.boss.idx]===1)return{x:t.x[this.boss.idx],z:t.z[this.boss.idx],color:"rgba(232,92,74,0.95)"};const e=this.siegeGuideTarget();return e?{x:e.x,z:e.z,color:"rgba(120,220,200,0.9)"}:null}siegeGuideTarget(){const t=this.siege.siegeState;if(t==="held"||t==="fallen")return null;const e=Math.hypot(this.player.x-yt.cx,this.player.z-yt.cz)<70;if(t==="enemy_held"||t==="breached"){if(!e)return null;let i=null,s=1/0;for(const n of yt.outerGates){if(this.map.isGateBreached(n.key))continue;const r=(n.x-this.player.x)**2+(n.z-this.player.z)**2;r<s&&(s=r,i={x:n.x,z:n.z})}return i}return(t==="lord"||t==="captured"||t==="counterattack")&&e?{x:yt.cx,z:yt.cz}:null}updateSiegeObjective(){const t=this.siege.siegeState,e=Math.hypot(this.player.x-yt.cx,this.player.z-yt.cz)<60,i=Mt()==="en";if(!e||t==="held"||t==="fallen"){this.hud.setObjective(null);return}if(t==="enemy_held"||t==="breached"){const s=this.map.castleOuterBreachCount();this.hud.setObjective({title:i?"Breach the Mugen Castle gates":"무한성 관문을 부숴라",sub:i?`Attack the gate · breached ${s}/3 · reward 名器`:`성문을 공격하라 · 파성 ${s}/3 · 보상 名器`,progress01:s/3})}else if(t==="lord")this.hud.setObjective({title:i?"Slay the warlord Hua Xiong":"성주 화웅을 베어라",color:"#e85c4a"});else if(t==="captured"){const s=this.siege.captureRemainSec;this.hud.setObjective({title:i?"Mugen Castle breached":"무한성 침투 — 정비",sub:i?"Stay in the keep. Reclaimers incoming":"성에 머물러 대비 · 탈환군 내습 임박",countdownSec:s>=0?s:void 0,color:"#9affc0"})}else if(t==="counterattack"){const s=this.siege.counterRemainSec;this.hud.setObjective({title:i?"Hold Mugen Castle — survive!":"무한성 결전 — 버텨라!",sub:i?"Survive in the castle until time runs out":"성 안에서 시간이 다할 때까지 버텨라",countdownSec:s>=0?s:void 0,color:"#e85c4a"})}}emitLandmarkAmbient(t,e){const i=t.kind;i===11?Math.random()<13*e&&this.particles.fireEmber(t.x,t.z,.5):i===5?Math.random()<4*e&&this.particles.emit(t.x+(Math.random()-.5),t.height*.72,t.z+(Math.random()-.5)*.6,(Math.random()-.5)*.2,.7+Math.random()*.4,(Math.random()-.5)*.2,.5,.5,.52,1.1,1.2,-.3,.95):i===4&&Math.random()<2*e&&this.particles.emit(t.x,t.height*.5,t.z,0,.5+Math.random()*.3,0,.42,.42,.44,.9,1.4,-.2,.96)}contactDamage(){const t=this.player.x,e=this.player.z,i=this.hash.query(t,e,this.player.radius+1.8,this.scratch);let s=0;for(let n=0;n<i;n++){const r=this.scratch[n];if(this.enemies.alive[r]===0)continue;const o=t-this.enemies.x[r],l=e-this.enemies.z[r],h=this.player.radius+this.enemies.radius[r];o*o+l*l<=h*h&&this.enemies.damage[r]>s&&(s=this.enemies.damage[r])}s>0&&this.player.takeDamage(s*.5)&&(this.hitstop(90,.05),this.rig.addTrauma(.65),this.pulseDamageVig(.22+s*.5/this.player.maxHp*1.1),this.player.hurtFlash(),this.postfx?.pulseAberration(.85),this.musou.addHit(),Tt.sfx("playerHit"))}onPlayerHit=(t,e=0,i=0)=>(this.player.takeDamage(t)&&(this.hitstop(90,.05),this.rig.addTrauma(.62),this.pulseDamageVig(.22+t/this.player.maxHp*1.1),this.player.hurtFlash(),this.postfx?.pulseAberration(.85),this.musou.addHit(),e!==0||i!==0?(this.player.nudge(e,i,2.4),this.rig.addTrauma(.15),Tt.sfx("playerHitProj")):Tt.sfx("playerHit")),!0);addGold(t){this.gold+=t,this.goldEarned+=t}handleKill(t){const e=this.enemies,i=e.x[t],s=e.z[t],n=this.map.recordKillAt(i,s);if(n&&this.onGateBreached(n),e.cart[t]===1){this.particles.burst(i,s,2.6,2,.7,30,6),this.effects.spawnRing(i,s,7,2.6,2,.7,.6),this.treasure.spawn(i,s,!1),this.addGold(Math.round(400*this.player.stats.goldMul)),this.hud.banner(`${it("bannerSupply")} 補給確保`,"#ffe14d",52,1500),Tt.sfx("levelup"),this.kills++,e.kill(t);return}if(e.boss[t]===1){if(this.boss.typeId==="huaxiong"){this.captureCastle(t);return}if(this.particles.burst(i,s,2.6,1.6,.7,60,8),this.effects.spawnRing(i,s,16,2.4,1.6,.8,.7),this.effects.spawnRing(i,s,10,2.2,1.2,2,.5),this.effects.spawnFlash(i,s,2.6,2,1,7),this.treasure.spawn(i,s,!0),this.hitstop(120,.05),this.rig.addTrauma(.9),this.cinematics.onBossDeath(i-this.player.x,s-this.player.z),this.postfx?.pulseBlur(.7),this.postfx?.pulseAberration(1),this.flashScreen(.4),this.hud.banner("討伐","#e8c667",90,1600,1),Tt.sfx("levelup"),this.boss.typeId){const o=Dl(this.boss.typeId,"death");o&&this.hud.quote(Ae("hero",this.boss.typeId,this.boss.name),o,3200),this.bossesKilled.add(this.boss.typeId)}Tt.playBgm("battle"),this.addGold(Math.round(300*this.player.stats.goldMul)),this.kills++,e.kill(t);return}if(e.elite[t]===1){this.particles.burst(i,s,2.4,1.4,.7,26,6),this.effects.spawnRing(i,s,6,2.2,1.6,.8,.5),this.effects.spawnFlash(i,s,2.2,1.6,.8,3.6),this.treasure.spawn(i,s,!1),this.hitstop(60,.06),this.rig.addTrauma(.4),Tt.sfx("hit"),this.addGold(Math.round(50*this.player.stats.goldMul)),this.kills++,e.kill(t);return}if(this.hero.id==="huangzhong"&&(this.zones.spawn(i,s,2.4,1.8,42*this.player.stats.damageMul,.7,.3,.9),this.particles.burst(i,s,.7,.3,.9,8,3.2)),this.particles.burst(i,s,2.2*e.tr[t],1.3*e.tg[t],.5*e.tb[t],14,4.5),this.gems.spawn(i,s,e.gemValue[t]),this.musou.active){const o=Math.atan2(s-this.player.z,i-this.player.x);this.effects.spawnKOStar(i,s,Math.cos(o),Math.sin(o))}{const o=this.player.hp<this.player.maxHp*.4;this.gems.activeHealCount<6&&ce.next()<(o?.024:.012)&&this.gems.spawnHeal(i,s,.06)}this.addGold(this.player.stats.goldMul),this.kills++,this.frameKills++,this.frameKills<=2&&this.effects.spawnFlash(i,s,1.5*e.tr[t],.95*e.tg[t],.5*e.tb[t],1.4),Tt.sfx("hit");const r=this.combo.onKill();this.combo.count>this.maxCombo&&(this.maxCombo=this.combo.count),r>0&&(this.xp+=r*this.player.stats.xpMul),this.musou.addKill(this.combo.count),this.rig.punchFov(-.5),e.kill(t)}captureCastle(t){const e=this.enemies,i=e.x[t],s=e.z[t];this.particles.burst(i,s,2.6,1.6,.7,60,8),this.effects.spawnRing(i,s,16,2.4,1.6,.8,.7),this.effects.spawnRing(i,s,10,2.2,1.2,2,.5),this.effects.spawnFlash(i,s,2.6,2,1,7),this.hitstop(120,.05),this.rig.addTrauma(.9),this.cinematics.onBossDeath(i-this.player.x,s-this.player.z),this.postfx?.pulseBlur(.7),this.postfx?.pulseAberration(1),this.flashScreen(.4);const n=Hw();n&&this.hud.quote(Xd(),n,3200),Tt.sfx("levelup"),Tt.playBgm("battle"),this.kills++,this.siege.captureNow(i,s),e.kill(t)}onGateBreached(t){if(this.world.update(),this.gateBreachFx.burst(t.x,t.z),this.effects.spawnRing(t.x,t.z,11,1.15,.36,.13,.62),this.effects.spawnRing(t.x,t.z,6.5,.95,.62,.24,.4),this.particles.burst(t.x,t.z,1.8,.7,.25,72,9),this.hitstop(90,.03),this.rig.addTrauma(.78),this.rig.punchFov(3),this.flashScreen(.16),Tt.sfx("explosion"),t.key.startsWith("castle-")){this.siege.notifyGateBreach(t.key),this.hud.banner(`${Mt()==="en"?"Gate Breached":"성문 돌파"} 城門突破`,"#ffb05a",52,1600,1);return}this.hud.banner(`${it("bannerHulaoBreak")} 虎牢關破城`,"#ffb05a",58,1900),this.gateRushTimer=.8,this.gateRushX=t.x,this.gateRushZ=t.z,this.gateRushHorizontal=t.horizontal}onCollect=t=>{const e=this.combo.fever?1.5:1;for(this.xp+=t*this.player.stats.xpMul*e,Tt.sfx("gem"),this.particles.emit(this.player.x,1,this.player.z,0,1.5,0,.4,.8,2.2,.7,.4,3,.9);this.xp>=this.nextXp;)this.xp-=this.nextXp,this.level++,this.nextXp=jr(this.level),this.pendingLevels++,this.hud.punchLevel(),Tt.sfx("levelup")};onTreasure=t=>{this.effects.spawnRing(this.player.x,this.player.z,5,2.6,2,.8,.5);const e=this.tryEvolve();if(e){this.hud.banner(`${it("bannerEvolve")} ${e}`,"#ff9a3c",56,1800),Tt.sfx("evolve"),this.refreshLoadout();return}if(t){const i=md(()=>ce.next(),this.masterworkIds,3);if(i.length>0){this.player.heal(this.player.maxHp*.5),this.curChoices=i.map(n=>({kind:"masterwork",id:n.id})),this.state="levelup";const s=this.curChoices.map(n=>this.cardView(n));this.levelup.open(s,Math.floor(this.gold),!1,n=>this.pickCard(n),()=>{});return}}for(this.player.heal(this.player.maxHp*(t?.6:.35)),this.addGold(Math.round((t?200:80)*this.player.stats.goldMul)),this.xp+=(t?this.nextXp*1.5:this.nextXp*.6)*this.player.stats.xpMul,this.hud.banner(it(t?"bannerTreasure":"bannerReward"),"#9affc0",48,1400);this.xp>=this.nextXp;)this.xp-=this.nextXp,this.level++,this.nextXp=jr(this.level),this.pendingLevels++};tryEvolve(){for(const t of Gh){const e=this.weapons.find(s=>s.id===t.from);if(!e||e.level<8||(this.passives[t.passive]??0)<1||this.weapons.some(s=>s.id===t.to))continue;const i=this.weapons.indexOf(e);return this.weapons[i]=Pa(t.to),this.projectiles.clearOrbits(),this.effects.spawnRing(this.player.x,this.player.z,9,2.8,1.6,2.4,.8),Te[t.to].name}return null}showNextLevelUp(){if(this.pendingLevels<=0){this.state="play";return}this.pendingLevels--,this.state="levelup",this.rerolledThisLevel=!1,this.openCards()}openCards(){this.curChoices=this.buildChoices();const t=this.curChoices.map(e=>this.cardView(e));this.levelup.open(t,Math.floor(this.gold),!this.rerolledThisLevel&&this.gold>=Bl,e=>this.pickCard(e),()=>this.reroll())}reroll(){this.rerolledThisLevel||this.gold<Bl||(this.gold-=Bl,this.rerolledThisLevel=!0,this.openCards())}buildChoices(){const t=[];for(const i of this.weapons)i.level<8&&Te[i.id]&&!Te[i.id].evolution&&t.push({kind:"upWeapon",id:i.id});for(const i in this.passives){const s=Wi[i];s&&this.passives[i]<s.maxLevel&&t.push({kind:"upPassive",id:i})}if(this.weapons.length<qr)for(const i in Te)Te[i].evolution||this.availableWeapons&&!this.availableWeapons.has(i)||this.weapons.some(n=>n.id===i)||t.push({kind:"newWeapon",id:i});if(Object.keys(this.passives).length<Ol)for(const i of Wf)this.passives[i.id]===void 0&&t.push({kind:"newPassive",id:i.id});for(let i=t.length-1;i>0;i--){const s=ce.int(i+1),n=t[i];t[i]=t[s],t[s]=n}const e=t.slice(0,3);for(;e.length<3;){const i=["heal","gold","xp"][e.length%3];e.push({kind:"reward",id:i})}if(this.relicIds.length<iS&&(this.forceRelicNext||ce.next()<sS)){const i=Vy(()=>ce.next(),this.relicIds);i&&(e[ce.int(e.length)]={kind:"relic",id:i.id}),this.forceRelicNext=!1}return e}cardView(t){const e=Mt()==="en";if(t.kind==="newWeapon"){const n=Te[t.id];return{title:Ae("weapon",t.id,n.name),hanja:n.hanja,desc:e?Va[t.id]??n.desc:n.desc,tag:`${it("catWeapon")} · ${it("tagNew")}`,accent:"#e8c667",symbol:n.hanja[0],badge:it("tagNew"),count:`${e?"Weapons":"무기"} ${this.weapons.length}/${qr}`}}if(t.kind==="upWeapon"){const n=Te[t.id],r=this.weapons.find(h=>h.id===t.id),o=r.level+1>=8;let l;if(o){const h=Gh.find(c=>c.from===t.id);if(h&&!this.weapons.some(c=>c.id===h.to)){const c=Ae("passive",h.passive,Wi[h.passive]?.name??h.passive);l=(this.passives[h.passive]??0)>=1?e?"Evolution ready · elite chest 進化":"進化 준비 완료 · 정예 보물상자":e?`Evolve soon · needs ${c} 進化`:`進化 임박 · ${c} 필요`}}return{title:Ae("weapon",t.id,n.name),hanja:n.hanja,desc:e?Va[t.id]??n.desc:n.desc,tag:`${it("catWeapon")} ${it(o?"tagMax":"tagUp")} Lv${r.level}→${r.level+1}`,accent:"#e8a94a",symbol:n.hanja[0],badge:it(o?"tagMax":"tagUp"),rare:o,count:`${e?"Weapons":"무기"} ${this.weapons.length}/${qr}`,evoHint:l}}if(t.kind==="newPassive"){const n=Wi[t.id];return{title:Ae("passive",t.id,n.name),hanja:n.hanja,desc:n.desc(1),tag:`${it("catPassive")} · ${it("tagNew")}`,accent:"#7ec8ff",symbol:n.hanja[0],badge:it("tagNew"),rare:n.rare,count:`${e?"Passives":"패시브"} ${Object.keys(this.passives).length}/${Ol}`}}if(t.kind==="upPassive"){const n=Wi[t.id],r=this.passives[t.id];return{title:Ae("passive",t.id,n.name),hanja:n.hanja,desc:n.desc(r+1),tag:`${it("catPassive")} ${it("tagUp")} Lv${r}→${r+1}`,accent:"#7ec8ff",symbol:n.hanja[0],badge:it("tagUp"),rare:n.rare,count:`${e?"Passives":"패시브"} ${Object.keys(this.passives).length}/${Ol}`}}if(t.kind==="relic"){const n=_c[t.id];return{title:Hy(n),hanja:n.hanja,desc:Gy(n),tag:it("catRelic"),accent:"#c77dff",symbol:n.hanja[0],badge:it("tagCurse"),rare:!0}}if(t.kind==="masterwork"){const n=go[t.id];return{title:qf(n),hanja:n.hanja,desc:jf(n),tag:e?"Slayer Treasure 寶物":"대원 보물 寶物",accent:"#f5c542",symbol:n.hanja[0],badge:e?"TREASURE":"보물",rare:!0}}const s={heal:{name:it("rewardHealName"),hanja:"再整備",desc:it("rewardHealDesc"),symbol:"治"},gold:{name:it("rewardGoldName"),hanja:"軍資金",desc:it("rewardGoldDesc"),symbol:"金"},xp:{name:it("rewardXpName"),hanja:"兵法修鍊",desc:it("rewardXpDesc"),symbol:"書"}}[t.id];return{title:s.name,hanja:s.hanja,desc:s.desc,tag:it("tagReward"),accent:"#9affc0",symbol:s.symbol,badge:it("tagReward")}}pickCard(t){if(!this.levelup.active&&this.state!=="levelup")return;const e=this.curChoices[t];e&&(Tt.sfx("cardSelect"),this.applyChoice(e),this.levelup.close(),this.refreshLoadout(),this.showNextLevelUp())}applyChoice(t){if(t.kind==="newWeapon")this.weapons.push(Pa(t.id));else if(t.kind==="upWeapon"){const e=this.weapons.find(i=>i.id===t.id);e&&(e.level=Math.min(8,e.level+1))}else if(t.kind==="newPassive")this.passives[t.id]=1,this.player.recomputeStats(this.passives);else if(t.kind==="upPassive")this.passives[t.id]++,this.player.recomputeStats(this.passives);else if(t.kind==="relic")this.relicIds.push(t.id),this.player.addRelic(t.id),Tt.sfx("relic");else if(t.kind==="masterwork"){this.masterworkIds.push(t.id),this.player.addMasterwork(t.id),Tt.sfx("relic");const e=go[t.id].hanja[0];this.effects.spawnCrest(this.player.x,this.player.z,e,1.3,1.02,.34,2),this.effects.spawnRing(this.player.x,this.player.z,9,1.3,1.02,.34,.7),this.effects.spawnLight&&this.effects.spawnLight(this.player.x,this.player.z,1.6,1.2,.4,7,.5)}else t.id==="heal"?this.player.heal(this.player.maxHp*.5):t.id==="gold"?this.gold+=200:this.xp+=this.nextXp*.9*this.player.stats.xpMul}onPlayerDeath(){if(this.reviveAvailable&&!this.reviveUsed){this.reviveUsed=!0,this.player.revive(.5,2),this.effects.spawnRing(this.player.x,this.player.z,24,2.4,1.8,.8,.7),this.shockwave(this.player.x,this.player.z,26,600*this.player.stats.damageMul),this.rig.addTrauma(.7),this.flashScreen(.45),this.hud.banner("起死回生","#9affc0",60,1600),Tt.sfx("revive");return}this.finish(this.victoryAchieved)}resumeEndless(){this.endless||(this.endless=!0,this.ended=!1,this.victoryAchieved=!0,this.state="play",this.hud.setVisible(!0),this.hud.banner(`${it("bannerEndless")} 無限`,"#e85c4a",56,1600),Tt.playBgm("battle"))}shockwave(t,e,i,s){this.postfx?.pulseAberration(.7);const n=this.enemies,r=this.hash.query(t,e,i,this.scratch);for(let o=0;o<r;o++){const l=this.scratch[o];if(n.alive[l]===0)continue;const h=n.x[l]-t,c=n.z[l]-e,u=h*h+c*c;if(u>i*i)continue;const d=Math.sqrt(u)||1;n.push(l,h/d,c/d,10),n.damageAt(l,s)&&this.handleKill(l)}}finish(t){if(this.ended)return;this.ended=!0,t&&!this.endless&&this.gameTime>=Hl&&(this.victoryAchieved=!0),this.hud.setFever(!1),this.state=t?"victory":"dead",t?this.rig.addTrauma(.5):(this.damageVigLevel=0,this.damageFlash.animate([{opacity:.85},{opacity:0}],{duration:600,easing:"ease-out"}),this.rig.addTrauma(.8)),this.hud.setVisible(!1);const e=Math.floor(this.maxCombo),i={victory:t,heroId:this.hero.id,time:this.gameTime,kills:this.kills,maxCombo:this.maxCombo,level:this.level,goldEarned:Math.floor(this.goldEarned)+e,comboBonus:e,weapons:this.weapons.map(s=>({id:s.id,level:s.level})),passives:Object.keys(this.passives).map(s=>({id:s,level:this.passives[s]})),bosses:Array.from(this.bossesKilled),masterworks:[...this.masterworkIds],endless:this.endless,canContinue:t&&!this.endless&&this.gameTime>=Hl,luoyang:this.siegeEvents.defended>0?"held":this.siegeEvents.lost>0?"fallen":this.siegeEvents.capture>0?"captured":"none"};this.hooks.onEnd(i)}testSetTime(t){this.gameTime=t}testGiveWeapon(t){if(!Te[t])return;const e=this.weapons.find(i=>i.id===t);if(e)e.level=8;else{this.weapons.length>=qr&&this.weapons.pop();const i=Pa(t);i.level=8,this.weapons.push(i)}this.refreshLoadout()}testGivePassive(t,e=5){Wi[t]&&(this.passives[t]=Math.min(Wi[t].maxLevel,e),this.player.recomputeStats(this.passives),this.refreshLoadout())}testKillPlayer(){this.player.invuln=0,this.player.musouInvuln=!1,this.reviveAvailable=!1,this.player.takeDamage(999999)}testDamagePlayer(t){this.onPlayerHit(t)}testKillBoss(){if(!this.boss.active||this.boss.idx<0)return;const t=this.boss.idx;this.enemies.damageAt(t,1e9)&&this.handleKill(t)}testMusouFx(){const t=this.player.x,e=this.player.z;this.effects.spawnCrest(t,e,"龍",.5,1.4,2.4,6),this.effects.spawnBaguaSigil(t+13,e,6),this.effects.spawnTripleShock(t-13,e,5,1.6,1,.4),this.effects.spawnFireWall(t,e+11,1,0,9,1.8,3),this.effects.spawnFlameTrail(t+7,e-9,.4,1.9,1.1);for(let i=0;i<6;i++)this.effects.spawnMeteorArrow(t-12+i*4.5,e-13,1.7,1.4,.6,.55+i*.07);this.lightField.spawn(t,1,e,.5,1.2,2.2,12,2,!0)}testForceLevel(){this.xp+=this.nextXp,this.onCollect(0)}testShrineBuff(t="attack",e=30){this.player.applyBuff(t,e)}testFlashBurst(t=6,e=.4){for(let i=0;i<t;i++)this.flashScreen(e)}testFillMusou(){this.musou.gauge=100}testActivateMusou(){this.musou.gauge=100,this.musou.activate()}testAddGold(t){this.gold+=t}testSpawnProjectileShowcase(){const t=this.player.x-4,e=this.player.z,i=[[na,-3.2,2,1.5,.55,2,1.5,.7],[Po,-1.6,1.6,1.25,.95,1.7,1.7,2.1],[Is,0,1.3,3,2.2,.7,2.4,1.2],[$n,1.8,1,1.35,1.35,1.6,1.8,2.3],[_s,3.8,2.4,4.5,1.7,2,1.4,.9]];for(const[s,n,r,o,l,h,c,u]of i)this.projectiles.spawn(t,e+n,1,0,r,0,.2,99,4.5,s,h,c,u,o,l,!1,0,s===_s);this.testSpawnEnemyProjectileShowcase()}testSpawnEnemyProjectileShowcase(){const t=this.player.x-2.4,e=this.player.z,i=[[Vi,6.2,1.8,!1],[yc,3.8,1.3,!0],[vo,1.5,1.45,!1],[Mc,-.8,1.2,!0],[ln,-3.6,1.7,!1],[bs,-6.2,1.05,!1]];for(const[s,n,r,o]of i)this.enemyProj.spawn(t,e+n,1,0,r,0,o,s)}testSpawnBoss(t){this.boss.active||this.boss.spawn(t,this.gameTime/60,this.ctx,this.player.x,this.player.z)}testTreasure(t=!1){this.onTreasure(t)}testSetBossFlags(t,e,i){this.bossFlags={b3:t,b6:e,b9:i}}testTriggerEvent(t){t==="rush"?this.events.forceRush():t==="meteor"?this.events.forceMeteor():t==="cart"&&this.events.forceCart(this.gameTime)}testSpawnPattern(t){this.spawner.forcePattern(t,this.gameTime,this.player.x,this.player.z)}testShowWorldObjects(){this.objects.testShowcase(this.player.x,this.player.z)}testSetPlayerPosition(t,e){this.map.projectWalkable(t,e,this.player.radius,this.moveOut),this.player.setPosition(this.moveOut.x,this.moveOut.z),this.map.update(this.player.x,this.player.z,0),this.world.update()}testSetInvulnerable(t=60){this.player.invuln=Math.max(this.player.invuln,t)}testTriggerHulao(){this.map.triggerHulao(this.player.x,this.player.z)}testFlipBanners(t){ne.allied=t,ne.flipX=yt.cx,ne.flipZ=yt.cz,ne.flipVersion++}testVolley(){const t=this.player.x,e=this.player.z,i=[];for(let s=0;s<6;s++){const n=s/6*Math.PI*2;i.push({x:t+Math.cos(n)*5,z:e+Math.sin(n)*5,t:.9})}this.arrowRain.volley(i)}testPrimeGate(){this.map.hulaoOn||this.map.triggerHulao(this.player.x,this.player.z),this.map.primeGate()}testBreachGate(){this.map.hulaoOn||this.map.triggerHulao(this.player.x,this.player.z),this.map.primeGate();const t=this.map.gates.find(i=>i.key==="hulao");if(!t)return;const e=this.map.recordKillAt(t.x,t.z);e&&this.onGateBreached(e)}testSiegeBreach(t="castle-s"){const e=this.map.gates.find(s=>s.key===t);if(!e)return;const i=this.map.breachNear(e.x,e.z,.5);i&&this.onGateBreached(i)}testSiegeForceLord(){this.siege.testForceLord()}testSiegeForceCounter(){this.siege.testForceCounter()}testSiegeAddFall(t){this.siege.testAddFall(t)}testSiegeForceDefend(){this.siege.testForceDefend()}testSetObjective(t){this.hud.setObjective(t)}testDamageGate(t,e){const i=this.map.damageGate(t,e);i&&this.onGateBreached(i)}testForceRelic(){this.forceRelicNext=!0,this.testForceLevel()}testEnterEndless(){this.victoryAchieved=!0,this.endless=!0,this.gameTime<601&&(this.gameTime=601)}get testStats(){return{time:this.gameTime,musouGauge:this.musou.gauge,kills:this.kills,level:this.level,gold:Math.floor(this.gold),goldEarned:Math.floor(this.goldEarned),maxCombo:this.maxCombo,hero:this.hero.id,alive:this.enemies.aliveCount,worldProps:this.world.visibleProps,worldObjects:this.objects.visibleCount,map:{walls:this.map.walls.length,roads:this.map.roads.length,landmarks:this.map.landmarks.length,landmarkVisible:this.world.landmarkVisible,colliders:this.map.activeColliderCount,collisions:this.map.collisionCount,gateKills:this.map.gateKills,gateBreached:this.map.isGateBreached(),gateHp:{s:this.map.gateHp01("castle-s"),e:this.map.gateHp01("castle-e"),w:this.map.gateHp01("castle-w")},breaches:this.map.breachCount,playerInsideWall:this.map.circleBlocked(this.player.x,this.player.z,this.player.radius*.95),playerWallHits:this.playerWallHits,enemiesInsideWall:this.enemies.countInsideWalls(this.map),debris:this.gateBreachFx.activeCount,playerX:this.player.x,playerZ:this.player.z},enemyProjectiles:this.enemyProj.activeCount,enemyProjectileKinds:this.enemyProj.kindCounts,patterns:{charge:this.enemies.chargeStarts,volley:this.enemies.volleyStarts,caster:this.enemies.casterStarts},autoAim:{target:this.ctx.aimTarget,x:this.ctx.aimX,z:this.ctx.aimZ,lastWeapon:this.lastAttackWeapon,lastX:this.lastAttackX,lastZ:this.lastAttackZ,count:this.lastAttackCount},weapons:this.weapons.map(t=>`${t.id}:${t.level}`),passives:{...this.passives},musou:this.musou.gauge,bossActive:this.boss.active,bossHp01:this.boss.hpFrac(this.ctx),bossX:this.boss.idx>=0?this.enemies.x[this.boss.idx]:0,bossZ:this.boss.idx>=0?this.enemies.z[this.boss.idx]:0,companion:this.companion.active?this.companion.definition.id:null,companionAttacks:this.companion.attacks,companionKills:this.companion.kills+this.companion2.kills,relics:[...this.relicIds],endless:this.endless,fever:this.combo.fever,siege:{state:this.siege.siegeState,fallGauge:this.siege.fallGaugeValue,allied:ne.allied,events:{...this.siegeEvents}},state:this.state}}}const sp=[{id:"attack",name:"무예 단련",hanja:"武藝鍛鍊",maxLevel:5,desc:a=>Mt()==="en"?`Attack +${a*8}%`:`공격력 +${a*8}%`},{id:"health",name:"철갑 강화",hanja:"鐵甲强化",maxLevel:5,desc:a=>Mt()==="en"?`Max HP +${a*10}%`:`최대 체력 +${a*10}%`},{id:"speed",name:"준마 훈련",hanja:"駿馬訓鍊",maxLevel:5,desc:a=>Mt()==="en"?`Move speed +${a*5}%`:`이동속도 +${a*5}%`},{id:"pickup",name:"집혼 향낭",hanja:"集魂香囊",maxLevel:5,desc:a=>Mt()==="en"?`Pickup radius +${a*12}%`:`픽업 반경 +${a*12}%`},{id:"cooldown",name:"전술 통달",hanja:"戰術通達",maxLevel:5,desc:a=>Mt()==="en"?`Cooldown -${(100*(1-Math.pow(.96,a))).toFixed(0)}%`:`쿨다운 -${(100*(1-Math.pow(.96,a))).toFixed(0)}%`},{id:"startLevel",name:"숙련 출진",hanja:"熟練出陣",maxLevel:5,desc:a=>Mt()==="en"?a>0?`Start at level ${1+a}`:"Start at level 1":a>0?`${a}레벨 상태로 시작`:"기본 1레벨로 시작"},{id:"revive",name:"기사회생",hanja:"起死回生",maxLevel:1,desc:a=>Mt()==="en"?a>0?"Revive once per run (HP 50%, 2s invuln, shockwave)":"No revival on death":a>0?"런당 1회 부활 (HP 50%·무적 2초·충격파)":"사망 시 부활 없음"}],np={};for(const a of sp)np[a.id]=a;function ap(a,t){return t>=a.maxLevel?-1:200*Math.pow(2,t)}const yo=5e3;function nS(a){const t=e=>a[e]??0;return{damageMul:1+.08*t("attack"),maxHpMul:1+.1*t("health"),speedMul:1+.05*t("speed"),pickupMul:1+.12*t("pickup"),cooldownMul:Math.pow(.96,t("cooldown")),startLevel:t("startLevel"),revive:t("revive")>0}}function aS(a){let t=0;for(const e of a)Te[e.id]?.evolution&&t++;return t}const Mo=[{id:"first_win",name:"천하의 주인",hanja:"天下之主",desc:"첫 승리 (10:00 생존)",priority:60,check:a=>a.victory},{id:"slay_lvbu",name:"비장군 참살",hanja:"飛將軍斬殺",desc:"최종보스 여포 처치",priority:80,check:a=>a.bosses.includes("lvbu")},{id:"thousand_cut",name:"천인참",hanja:"千人斬",desc:"한 런에서 1,000명 처치",priority:55,check:a=>a.kills>=1e3},{id:"five_hundred_cut",name:"오백인참",hanja:"五百人斬",desc:"한 런에서 500명 처치",priority:35,check:a=>a.kills>=500},{id:"invincible",name:"금강불괴",hanja:"金剛不壞",desc:"3분간 무피격 유지",priority:65,check:a=>(a.noHitTime??0)>=180},{id:"master_smith",name:"전설의 대장장이",hanja:"傳說鍛冶",desc:"한 런에서 진화 무기 3종 이상",priority:70,check:a=>aS(a.weapons)>=3},{id:"combo_master",name:"연격의 화신",hanja:"連擊化身",desc:"최대 콤보 500 돌파",priority:50,check:a=>a.maxCombo>=500},{id:"veteran",name:"백전노장",hanja:"百戰老將",desc:"누적 10,000명 처치",priority:45,check:a=>(a.totalKills??0)>=1e4},{id:"all_bosses",name:"군웅할거의 종결자",hanja:"群雄割據終結",desc:"한 런에서 세 보스 모두 처치",priority:75,check:a=>a.bosses.includes("yuanshao")&&a.bosses.includes("dongzhuo")&&a.bosses.includes("lvbu")},{id:"high_level",name:"병법의 대가",hanja:"兵法大家",desc:"레벨 40 도달",priority:40,check:a=>a.level>=40},{id:"endless_walker",name:"무명의 사신",hanja:"無名死神",desc:"무한 모드에서 15분 생존",priority:85,check:a=>!!a.endless&&a.time>=900},{id:"survivor",name:"역전의 용사",hanja:"歷戰勇士",desc:"5분 이상 생존",priority:20,check:a=>a.time>=300}],Ec={};for(const a of Mo)Ec[a.id]=a;function rS(a){const t=[];for(const e of Mo)e.check(a)&&t.push(e.id);return t}function oS(a){let t=null;for(const i of a){const s=Ec[i];s&&(!t||s.priority>t.priority)&&(t=s)}const e=Mt()==="en";return t?{name:e?no[t.id]?.name??t.name:t.name,hanja:t.hanja}:{name:e?"Nameless General":"무명의 장수",hanja:"無名將"}}const lS=[{id:"mugen_conquered",ko:"무한성을 정복한 자",en:"Conqueror of Mugen Castle",rarity:3,cond:a=>a.luoyang==="held"},{id:"ilgidangcheon",ko:"일기당천 一騎當千",en:"One Rider, a Thousand Foes",rarity:3,cond:a=>a.kills>=1e3},{id:"endless_field",ko:"끝나지 않는 전장에 남은 자",en:"One Who Remained on the Endless Field",rarity:3,cond:a=>a.endless},{id:"wuchao_fire",ko:"오소의 밤불을 든 자",en:"Bearer of the Wuchao Night-Fire",rarity:3,cond:a=>a.bosses.length>=3&&a.maxCombo>=300},{id:"first_unify",ko:"처음으로 천하를 통일한 자",en:"First to Unify the Realm",rarity:3,cond:(a,t)=>a.victory&&t.totalWins<=1},{id:"gate_breaker",ko:"성문을 여는 자",en:"Breaker of the Gate",rarity:2,cond:a=>a.luoyang==="captured"||a.luoyang==="held"},{id:"fallen_gate",ko:"무너진 성문에서 살아남은 자",en:"Survivor of the Fallen Gate",rarity:2,cond:a=>a.luoyang==="fallen"},{id:"three_champions",ko:"세 챔피언을 꺾은 자",en:"Feller of Three Champions",rarity:2,cond:a=>a.bosses.length>=3},{id:"combo_sweep",ko:"한 호흡에 벤 자",en:"One Breath, One Sweep",rarity:2,cond:a=>a.maxCombo>=300},{id:"masterworks_bearer",ko:"명기를 갖춘 자",en:"Bearer of Masterworks",rarity:2,cond:a=>a.masterworks.length>=3},{id:"yangren_gate",ko:"양인의 잿문을 연 자",en:"One Who Opened the Ash-Gate of Yangren",rarity:2,cond:a=>a.bosses.includes("dongzhuo")},{id:"baima_banner",ko:"백마 둑의 큰 깃발을 붙든 자",en:"Holder of the Great Banner at Baima",rarity:2,cond:a=>a.bosses.includes("yuanshao")},{id:"unified",ko:"살아 돌아온 머릿수를 센 자",en:"One Who Counted the Living Home",rarity:1,cond:a=>a.victory},{id:"ash_road",ko:"잿길을 헤치고 나아간 자",en:"One Who Cut Through the Ash-Road",rarity:1,cond:a=>a.kills>=500},{id:"one_masterwork",ko:"명기 하나를 얻은 자",en:"Finder of a Masterwork",rarity:1,cond:a=>a.masterworks.length>=1},{id:"altar_count",ko:"제단 아래 사람 수를 센 자",en:"One Who Counted Heads Beneath the Altar",rarity:1,cond:()=>!0}];function rp(a,t){let e=null;for(const i of lS)i.cond(a,t)&&(!e||i.rarity>e.rarity)&&(e=i);return e}function hS(a){return Mt()==="en"?a.en:a.ko}const cS=["zhaoyun","zhugeliang","huangzhong","guanyu","zhangfei","sunshangxiang","lvbu","zenitsu","inosuke","tokito","uzui","sanemi","himejima"];function Cc(a,t){switch(a){case"zhaoyun":case"zhugeliang":case"huangzhong":return!0;case"guanyu":case"zenitsu":return t.totalKills>=50;case"zhangfei":case"inosuke":return t.totalKills>=150;case"sunshangxiang":case"tokito":return t.best.time>=180;case"sanemi":case"uzui":case"himejima":return t.bosses.length>=1;case"lvbu":return t.lvbuUnlocked;default:return!1}}function Zd(a){return cS.filter(t=>Cc(t,a))}function uS(a,t){const e=Mt()==="en";switch(a){case"guanyu":case"zenitsu":return e?`Total kills ${Math.min(50,Math.floor(t.totalKills))}/50`:`누적 처치 ${Math.min(50,Math.floor(t.totalKills))}/50`;case"zhangfei":case"inosuke":return e?`Total kills ${Math.min(150,Math.floor(t.totalKills))}/150`:`누적 처치 ${Math.min(150,Math.floor(t.totalKills))}/150`;case"sunshangxiang":case"tokito":{const i=Math.min(180,Math.floor(t.best.time)),s=`${Math.floor(i/60)}:${String(i%60).padStart(2,"0")}`;return e?`Best survival ${s} / 3:00`:`최고 생존 ${s} / 3:00`}case"sanemi":case"uzui":case"himejima":return e?"Slay 1 Twelve Kizuki Boss":"십이귀월 보스 1회 토벌";case"lvbu":return e?"Unlock at Camp (5000⟡)":"본진에서 5000⟡ 해금";default:return""}}const Li=1200,Ji=630,dS="midagedev.github.io/threesur",Kd="https://midagedev.github.io/threesur/";function fS(a){const t=Math.floor(a/60),e=Math.floor(a%60);return`${t.toString().padStart(2,"0")}:${e.toString().padStart(2,"0")}`}function pS(a,t){const e=document.createElement("canvas");e.width=Li,e.height=Ji;const i=e.getContext("2d"),s=ys[a.heroId],n=i.createLinearGradient(0,0,Li,Ji);n.addColorStop(0,"#12131b"),n.addColorStop(1,"#05060a"),i.fillStyle=n,i.fillRect(0,0,Li,Ji);const r=i.createRadialGradient(Li/2,Ji/2,200,Li/2,Ji/2,760);r.addColorStop(0,"rgba(0,0,0,0)"),r.addColorStop(1,"rgba(0,0,0,0.55)"),i.fillStyle=r,i.fillRect(0,0,Li,Ji),i.strokeStyle="rgba(120,140,180,0.05)",i.lineWidth=1;for(let M=0;M<=Li;M+=60)i.beginPath(),i.moveTo(M,0),i.lineTo(M,Ji),i.stroke();i.strokeStyle="rgba(232,198,103,0.7)",i.lineWidth=2,i.strokeRect(22,22,Li-44,Ji-44),i.strokeStyle="rgba(232,198,103,0.25)",i.lineWidth=1,i.strokeRect(30,30,Li-60,Ji-60);const o='"Nanum Myeongjo","Times New Roman",serif';i.textAlign="left",i.textBaseline="alphabetic",i.fillStyle="#f0e4c0",i.font=`bold 46px ${o}`,i.fillText(Mt()==="en"?"MELGWIMUSOU":"멸귀무쌍",60,96),i.fillStyle="#e8c667",i.font=`30px ${o}`,i.fillText("滅鬼無雙",270,94);const l=70,h=150,c=210,u=280;i.save(),i.fillStyle="rgba(0,0,0,0.35)",i.fillRect(l,h,c,u),i.strokeStyle="rgba(232,198,103,0.5)",i.lineWidth=2,i.strokeRect(l,h,c,u);const d=t?.sgrade.texture.image;if(d&&s){const M=s.charIndex*4*48;i.imageSmoothingEnabled=!1;const C=Math.min(c/48,u/64)*.82,b=48*C,x=64*C;i.drawImage(d,M,0,48,64,l+(c-b)/2,h+(u-x)/2-6,b,x)}i.restore(),i.textAlign="center",i.fillStyle="#f0e4c0",i.font=`28px ${o}`,i.fillText(s?Ae("hero",a.heroId,s.name):Mt()==="en"?"General":"장수",l+c/2,h+u+40),i.fillStyle="#e8c667",i.font=`20px ${o}`,i.fillText(s?s.hanja:"",l+c/2,h+u+68);const f=340;i.textAlign="left",i.fillStyle="#8a8f9c",i.font=`26px ${o}`,i.fillText(Mt()==="en"?"KILLS":"처치",f,190);const m=a.kills.toLocaleString();i.fillStyle="#e85c4a",i.font=`bold 130px ${o}`,i.fillText(m,f,300);const v=i.measureText(m).width;i.fillStyle="#e8c667",i.font=`56px ${o}`,i.fillText("斬",f+v+24,300);const g=366,p=[[Mt()==="en"?"Survived":"생존",fS(a.time)],[Mt()==="en"?"Max Combo":"최대 콤보",`${a.maxCombo.toLocaleString()}`],[Mt()==="en"?"Level":"레벨",`Lv ${a.level}`],[Mt()==="en"?"Gold":"획득 골드",`${a.goldEarned.toLocaleString()}`]];let w=f;i.textBaseline="alphabetic";for(const[M,C]of p){i.textAlign="left",i.fillStyle="#8a8f9c",i.font=`20px ${o}`,i.fillText(M,w,g),i.fillStyle="#f0e4c0",i.font=`bold 34px ${o}`,i.fillText(C,w,g+40);const b=i.measureText(C).width;w+=Math.max(150,b+70)}if(a.title){const M=f,C=430,b=`${a.title.name} ${a.title.hanja}`;i.font=`24px ${o}`;const x=i.measureText(b).width+44;i.fillStyle="rgba(232,198,103,0.14)",$r(i,M,C,x,44,22),i.fill(),i.strokeStyle="rgba(232,198,103,0.6)",i.lineWidth=1.5,$r(i,M,C,x,44,22),i.stroke(),i.fillStyle="#e8c667",i.textAlign="left",i.fillText(b,M+22,C+30)}const A=502;i.font=`20px ${o}`,i.textAlign="left",i.fillStyle="#8a8f9c",i.fillText(Mt()==="en"?"TACTICS":"전법",f,A-6);let y=f;const T=A+8;for(const M of a.weapons.slice(0,6)){const C=Te[M.id];if(!C)continue;const b=C.hanja;i.font=`22px ${o}`;const x=i.measureText(b).width+28,E=C.evolution;if(i.fillStyle=E?"rgba(255,154,60,0.16)":"rgba(120,150,200,0.12)",$r(i,y,T,x,40,8),i.fill(),i.strokeStyle=E?"rgba(255,154,60,0.7)":"rgba(160,180,220,0.5)",i.lineWidth=1.5,$r(i,y,T,x,40,8),i.stroke(),i.fillStyle=E?"#ffb469":"#cdd7ee",i.fillText(b,y+14,T+28),y+=x+12,y>Li-70)break}return mS(i,Li-150,150,a.victory),i.textAlign="right",i.fillStyle="#8a8f9c",i.font=`22px ${o}`,i.fillText(dS,Li-60,Ji-48),e}function $r(a,t,e,i,s,n){a.beginPath(),a.moveTo(t+n,e),a.arcTo(t+i,e,t+i,e+s,n),a.arcTo(t+i,e+s,t,e+s,n),a.arcTo(t,e+s,t,e,n),a.arcTo(t,e,t+i,e,n),a.closePath()}function mS(a,t,e,i){a.save(),a.translate(t,e),a.rotate(-.12);const n=i?"#c0362b":"#3a3f4c";a.strokeStyle=n,a.lineWidth=5,a.beginPath(),a.rect(-78,-78,156,156),a.stroke(),a.fillStyle=i?"rgba(192,54,43,0.12)":"rgba(58,63,76,0.15)",a.fillRect(-78,-78,156,156),a.fillStyle=n,a.textAlign="center",a.textBaseline="middle",a.font='bold 40px "Nanum Myeongjo","Times New Roman",serif',i?(a.fillText("天下",0,-26),a.fillText("統一",0,26)):(a.font='bold 62px "Nanum Myeongjo","Times New Roman",serif',a.fillText("戰死",0,0)),a.restore()}function Wh(a){return new Promise((t,e)=>{a.toBlob(i=>i?t(i):e(new Error("blob 생성 실패")),"image/png")})}function gS(a){const t=ys[a.heroId];if(Mt()==="en"){const s=t?Ae("hero",a.heroId,t.name):"a slayer",n=a.victory?"conquered Mugen Castle":`slew ${a.kills.toLocaleString()} demons`;return`As ${s} in Melgwimusou, I ${n}! ⚔️ ${Kd}`}const e=t?t.name:"대원",i=a.victory?"무한성을 함락했다":`${a.kills.toLocaleString()}마리의 혈귀를 베었다`;return`멸귀무쌍에서 ${e}으로 ${i}! ⚔️ ${Kd}`}async function vS(a,t){let e;try{e=await Wh(a)}catch{return"failed"}const i=new File([e],"melgwimusou.png",{type:"image/png"}),s=navigator;if(s.share&&s.canShare&&s.canShare({files:[i]}))try{return await s.share({files:[i],text:t,title:"멸귀무쌍 滅鬼無雙"}),"shared"}catch{}try{const n=window.ClipboardItem;if(n&&navigator.clipboard&&"write"in navigator.clipboard)return await navigator.clipboard.write([new n({"image/png":e})]),"copied"}catch{}try{const n=URL.createObjectURL(e),r=document.createElement("a");return r.href=n,r.download="melgwimusou.png",document.body.appendChild(r),r.click(),r.remove(),setTimeout(()=>URL.revokeObjectURL(n),4e3),"downloaded"}catch{return"failed"}}function xS(a,t){const e=pS(a,t),i=document.createElement("div");i.style.cssText=["position:fixed","inset:0","z-index:60","display:flex","flex-direction:column","align-items:center","justify-content:center","gap:18px","background:rgba(4,5,9,0.88)",'font-family:"Nanum Myeongjo","Times New Roman",serif'].join(";");const s=document.createElement("img");s.src=e.toDataURL("image/png"),s.style.cssText="width:min(90vw,720px);border-radius:8px;box-shadow:0 8px 40px rgba(0,0,0,0.6);",i.appendChild(s);const n=document.createElement("div");n.style.cssText="color:#e8c667;font-size:15px;height:18px;letter-spacing:1px;",i.appendChild(n);const r=u=>{n.textContent=u,n.animate([{opacity:1},{opacity:1,offset:.7},{opacity:0}],{duration:2200})},o=document.createElement("div");o.style.cssText="display:flex;gap:12px;flex-wrap:wrap;justify-content:center;";const l=(u,d,f=!1)=>{const m=document.createElement("button");return m.textContent=u,m.style.cssText=["padding:11px 22px","border-radius:8px","cursor:pointer","font-size:15px","letter-spacing:1px","font-family:inherit",f?"background:linear-gradient(180deg,#e8c667,#a8791f);color:#161006;border:none;":"background:transparent;color:#e8c667;border:1px solid #6b5a2e;"].join(";"),m.addEventListener("click",d),o.appendChild(m),m},h=Mt()==="en",c=gS(a);l(h?"Share":"전과 공유",async()=>{const u=await vS(e,c);r(h?u==="shared"?"Shared":u==="copied"?"Image copied to clipboard":u==="downloaded"?"Image saved":"Share failed":u==="shared"?"공유했습니다":u==="copied"?"이미지를 클립보드에 복사했습니다":u==="downloaded"?"이미지를 저장했습니다":"공유에 실패했습니다")},!0),l(h?"Copy Image":"이미지 복사",async()=>{try{const u=window.ClipboardItem,d=await Wh(e);if(!u)throw new Error("unsupported");await navigator.clipboard.write([new u({"image/png":d})]),r(h?"Image copied to clipboard":"이미지를 클립보드에 복사했습니다")}catch{r(h?"This browser does not support image copy":"이 브라우저는 이미지 복사를 지원하지 않습니다")}}),l(h?"Save Image":"이미지 저장",async()=>{const u=await Wh(e),d=URL.createObjectURL(u),f=document.createElement("a");f.href=d,f.download="melgwimusou.png",f.click(),setTimeout(()=>URL.revokeObjectURL(d),4e3),r(h?"Image saved":"이미지를 저장했습니다")}),l(h?"Copy Text":"문구 복사",async()=>{try{await navigator.clipboard.writeText(c),r(h?"Share text copied":"공유 문구를 복사했습니다")}catch{r(h?"Clipboard access blocked":"클립보드 접근이 차단되었습니다")}}),l(h?"Close":"닫기",()=>i.remove()),i.appendChild(o),document.body.appendChild(i)}const bS=["zhaoyun","zhugeliang","huangzhong","guanyu","zhangfei","sunshangxiang","lvbu","zenitsu","inosuke","tokito","uzui","sanemi","himejima"],_S=["yuanshao","dongzhuo","lvbu"];function Yd(a){const t=Math.floor(a/60),e=Math.floor(a%60);return`${t.toString().padStart(2,"0")}:${e.toString().padStart(2,"0")}`}function Q(a,t,e){const i=document.createElement(a);return t&&(i.className=t),e!==void 0&&(i.innerHTML=e),i}function yS(a,t){const e=Q("div","hero-portrait"),i=Math.round(48*t),s=Math.round(64*t);if(e.style.width=`${i}px`,e.style.height=`${s}px`,e.style.borderRadius="10px",e.style.overflow="hidden",a.portrait){const n=`/threesur/assets/portraits/${a.portrait}.webp`,r=document.createElement("img");r.src=n,r.style.width="100%",r.style.height="100%",r.style.objectFit="cover",r.style.objectPosition="center top",e.appendChild(r)}else{const r=`/threesur/assets/sprites/${a.sheet??"sgrade"}.png`,o=48,l=64,h=36*o,c=4*l,u=a.charIndex*4*o;e.style.backgroundImage=`url(${r})`,e.style.backgroundSize=`${h*t}px ${c*t}px`,e.style.backgroundPosition=`-${u*t}px 0px`}return e}class MS{cb;atlas;overlay;fade;muted=!1;current="none";rerender=null;constructor(t,e){this.cb=t,this.atlas=e,this.fade=Q("div"),this.fade.id="fade",document.body.appendChild(this.fade),this.overlay=Q("div","overlay"),document.body.appendChild(this.overlay),ky(()=>{this.rerender&&this.rerender()})}setMuted(t){this.muted=t}show(t,e=!1){const i=()=>{this.overlay.textContent="",t(),this.overlay.classList.add("show")};if(e){i();return}this.fade.style.pointerEvents="auto";const s=this.fade.animate([{opacity:0},{opacity:1}],{duration:150,easing:"ease-in",fill:"forwards"});s.onfinish=()=>{i();const n=this.fade.animate([{opacity:1},{opacity:0}],{duration:150,easing:"ease-out",fill:"forwards"});n.onfinish=()=>{this.fade.style.pointerEvents="none"}}}hide(){this.overlay.classList.remove("show"),this.current="none"}button(t,e,i){const s=Q("button",i?.primary?"btn btn-primary":"btn");return s.textContent=t,i?.disabled&&(s.disabled=!0),s.addEventListener("click",()=>{s.disabled||e()}),s}muteButton(){const t=Q("button","btn btn-icon");return t.textContent=this.muted?"🔇":"🔊",t.setAttribute("aria-label","음소거 토글 / mute"),t.addEventListener("click",()=>{this.muted=this.cb.onToggleMute(),t.textContent=this.muted?"🔇":"🔊"}),t}langButton(){const t=Q("button","btn btn-icon");return t.textContent=Mt()==="ko"?"EN":"KO",t.setAttribute("aria-label","language / 언어"),t.addEventListener("click",()=>{zy()}),t}showTitle(t=!1){this.current="title";const e=Sw(),i=()=>{const s=Q("div","screen"),n=Q("div","title-mark");n.appendChild(Q("div","title-hanja","滅鬼無雙")),n.appendChild(Q("div","title-kor",it("titleKor"))),n.appendChild(Q("div","title-tag",it("titleTag"))),s.appendChild(n);const r=Q("div","btn-row");r.appendChild(this.button(it("start"),this.cb.onStart,{primary:!0})),s.appendChild(r);const o=Q("div","btn-row");o.appendChild(this.button(it("shop"),()=>this.cb.onOpenShop("upgrade"))),o.appendChild(this.button(it("codex"),()=>this.cb.onOpenShop("codex"))),o.appendChild(this.muteButton()),o.appendChild(this.langButton()),s.appendChild(o),s.appendChild(Q("div","controls-hint",it("controlsHint"))),e.line&&s.appendChild(Q("div","title-quote",`“${e.line}” <span class="who">— ${e.name}</span>`)),this.overlay.appendChild(s)};this.rerender=()=>{this.overlay.textContent="",i()},this.show(i,t)}showSelect(t){this.current="select";const e=()=>{const i=Q("div","screen");i.appendChild(Q("div","section-title",`${it("selectTitle")} <small>將帥選擇</small>`));const s=Q("div","hero-grid");for(const n of bS){const r=ys[n];if(!r)continue;const o=!Cc(n,t),l=Q("div",o?"hero-card locked":"hero-card");o&&n==="lvbu"&&l.classList.add("shop-lock");const h=yS(r,2.4);if(l.appendChild(h),o){const d=Q("div","hero-lock");d.appendChild(Q("div","","🔒")),d.appendChild(Q("div","price",uS(n,t))),l.appendChild(d)}const c=Te[r.startWeapon]?.name??r.startWeapon;l.appendChild(Q("div","hero-name",`${Ae("hero",n,r.name)}<span class="hanja">${r.hanja}</span>`)),l.appendChild(Q("div","hero-line",`${it("weaponLabel")} <span class="k">${Ae("weapon",r.startWeapon,c)}</span>`)),l.appendChild(Q("div","hero-line",Mt()==="en"?Oy[n]??r.bonusText:r.bonusText)),l.appendChild(Q("div","hero-musou",this.musouText(n)));const u=Nd(n);u&&!o&&l.appendChild(Q("div","hero-quote",`“${u}”`)),o?n==="lvbu"&&l.addEventListener("click",()=>this.cb.onOpenShop("upgrade")):l.addEventListener("click",()=>this.cb.onSelectHero(n)),s.appendChild(l)}i.appendChild(s),i.appendChild(this.button(it("back"),this.cb.onBackToTitle)),this.overlay.appendChild(i)};this.rerender=()=>{this.overlay.textContent="",e()},this.show(e)}musouText(t){return Mt()==="en"?By[t]??"Musou":{zhaoyun:"무쌍 히노카미 카구라 — 8방향 무적 태양 돌진",guanyu:"무쌍 나기(凪) — 거대 물 소용돌이 참격",zhangfei:"무쌍 폭혈 — 전화면 혈폭 충격파",zhugeliang:"무쌍 혈술 환각 — 환각 혈술 폭풍",huangzhong:"무쌍 벌레의 춤 — 전방위 독침",sunshangxiang:"무쌍 파괴살 나침 — 충격파 난무",lvbu:"무쌍 화염의 호랑이 — 조작 가능 무적 화염 돌진"}[t]??"무쌍난무"}showResult(t,e,i,s){this.current="result";const n=()=>{const r=Q("div","screen"),o=t.victory;r.appendChild(Q("div",`result-title ${o?"win":"lose"}`,o?"滅鬼無雙":"戰死")),r.appendChild(Q("div","result-sub",it(o?"resultWin":"resultLose")));const l=Nd(t.heroId);l&&r.appendChild(Q("div","result-quote",`“${l}”`));const h=rp(t,e);if(h){const g=Mt()==="en"?"Epithet":"訓章";r.appendChild(Q("div","result-epithet",`<span class="ep-label">${g}</span><span class="ep-name">“${hS(h)}”</span>`))}if(s.newAchievements.length>0){const g=s.newAchievements.map(p=>Ec[p]).filter(p=>!!p).map(p=>`${Mt()==="en"?no[p.id]?.name??p.name:p.name} ${p.hanja}`).join(" · ");r.appendChild(Q("div","ach-toast",`${it("achGet")} <b>${g}</b>`))}if(s.newHeroes.length>0){const g=s.newHeroes.map(p=>ys[p]?`${Ae("hero",p,ys[p].name)} ${ys[p].hanja}`:null).filter(p=>!!p).join(" · ");r.appendChild(Q("div","ach-toast hero-unlock-toast",`${it("heroUnlockGet")} <b>${g}</b>`))}if(s.newWeapons&&s.newWeapons.length>0){const g=s.newWeapons.map(p=>Te[p]?`${Ae("weapon",p,Te[p].name)} ${Te[p].hanja}`:null).filter(p=>!!p).join(" · ");if(g){const p=Mt()==="en"?"New tactic unlocked":"신규 병법 해금";r.appendChild(Q("div","ach-toast weapon-unlock-toast",`${p} — <b>${g}</b>`))}}const c=Q("div","result-stats");c.appendChild(this.stat(it("rsSurvive"),Yd(t.time),i.time)),c.appendChild(this.stat(it("rsKills"),String(t.kills),i.kills)),c.appendChild(this.stat(it("rsMaxCombo"),String(t.maxCombo),i.combo)),c.appendChild(this.stat(it("rsLevel"),`Lv ${t.level}`,i.level)),c.appendChild(this.stat(it("rsHero"),Ae("hero",t.heroId,ys[t.heroId]?.name??t.heroId),!1)),c.appendChild(this.stat(it("rsBossKill"),String(t.bosses.length),!1)),r.appendChild(c);const u=Q("div","gold-earned",`${it("goldEarned")} ⟡ ${t.goldEarned}`+(t.comboBonus>0?`<span class="bonus">${it("goldBonus",{n:t.comboBonus})}</span>`:""));r.appendChild(u);const d=Mt()==="en";r.appendChild(Q("div","controls-hint",`${it("baseBalance",{n:e.gold})} · ${d?"spend it below to upgrade your camp":"아래 강화로 본진을 영구 강화"}`));const f=Q("div","build-summary");for(const g of t.weapons)f.appendChild(Q("div","build-chip w",`${Ae("weapon",g.id,Te[g.id]?.name??g.id)} <b>Lv${g.level}</b>`));for(const g of t.passives)f.appendChild(Q("div","build-chip p",`${Ae("passive",g.id,Wi[g.id]?.name??g.id)} <b>Lv${g.level}</b>`));r.appendChild(f);const m=Q("div","btn-row");m.appendChild(this.button(it("retry"),this.cb.onRetry,{primary:!0}));const v=this.button(`${d?"Upgrade":"본진 강화"} ⟡ ${e.gold} 強化`,()=>this.cb.onOpenShop("upgrade"));v.style.borderColor="#e8c667",v.style.color="#f4dc8a",v.style.boxShadow="0 0 14px rgba(232, 198, 103, 0.28)",m.appendChild(v),m.appendChild(this.button(it("share"),()=>xS({victory:t.victory,heroId:t.heroId,time:t.time,kills:t.kills,maxCombo:t.maxCombo,level:t.level,goldEarned:t.goldEarned,weapons:t.weapons,title:s.title},this.atlas))),m.appendChild(this.button(it("toTitle"),this.cb.onBackToTitle)),r.appendChild(m),this.overlay.appendChild(r)};this.rerender=()=>{this.overlay.textContent="",n()},this.show(n)}stat(t,e,i){const s=Q("div","rs");return s.appendChild(Q("div","v",e+(i?`<span class="nr">${it("newRecord")}</span>`:""))),s.appendChild(Q("div","l",t)),s}shopSave=null;shopTab="upgrade";showShop(t,e){this.current="shop",this.rerender=()=>this.rebuildShop(t,this.shopTab),this.show(()=>this.buildShop(t,e))}rerenderShop(){this.current==="shop"&&this.shopSave&&this.rebuildShop(this.shopSave,this.shopTab)}rebuildShop(t,e){this.overlay.textContent="",this.buildShop(t,e)}buildShop(t,e){this.shopSave=t,this.shopTab=e;const i=Q("div","screen");i.appendChild(Q("div","section-title",`${it("shopTitle")} <small>本陣</small>`)),i.appendChild(Q("div","gold-tag",it("goldHeld",{n:t.gold})));const s=Q("div","tabs"),n=Q("div",e==="upgrade"?"tab active":"tab",it("tabUpgrade")),r=Q("div",e==="codex"?"tab active":"tab",it("tabCodex"));n.addEventListener("click",()=>this.rebuildShop(t,"upgrade")),r.addEventListener("click",()=>this.rebuildShop(t,"codex")),s.appendChild(n),s.appendChild(r),i.appendChild(s),e==="upgrade"?i.appendChild(this.upgradeList(t)):i.appendChild(this.codexPanel(t)),i.appendChild(this.button(it("back"),this.cb.onBackToTitle)),this.overlay.appendChild(i)}upgradeList(t){const e=Q("div","shop-list");for(const i of sp){const s=t.upgrades[i.id]??0,n=ap(i,s),r=n<0,o=Q("div","shop-row"),l=Q("div","shop-info");l.appendChild(Q("div","name",`${Ae("upgrade",i.id,i.name)}<span class="hanja">${i.hanja}</span>`)),l.appendChild(Q("div","desc",r?i.desc(s):i.desc(s+1)));const h=Q("div","pips");for(let u=0;u<i.maxLevel;u++)h.appendChild(Q("div",u<s?"pip on":"pip"));l.appendChild(h),o.appendChild(l);const c=Q("div","shop-buy");if(r)c.appendChild(Q("div","gold-tag",it("maxed")));else{const u=t.gold>=n;c.appendChild(Q("div","controls-hint",`⟡ ${n}`)),c.appendChild(this.button(it("upgradeBuy"),()=>this.cb.onBuyUpgrade(i.id),{disabled:!u}))}o.appendChild(c),e.appendChild(o)}if(!t.lvbuUnlocked){const i=Q("div","shop-row"),s=Q("div","shop-info");s.appendChild(Q("div","name",`${it("lvbuUnlockName")}<span class="hanja">呂布</span>`)),s.appendChild(Q("div","desc",it("lvbuUnlockDesc"))),i.appendChild(s);const n=Q("div","shop-buy");n.appendChild(Q("div","controls-hint",`⟡ ${yo}`)),n.appendChild(this.button(it("unlockBuy"),this.cb.onUnlockLvbu,{disabled:t.gold<yo})),i.appendChild(n),e.appendChild(i)}return e}codexPanel(t){const e=Q("div","screen");e.style.gap="14px",e.style.padding="0";const i=Q("div","records");i.appendChild(this.rec(Yd(t.best.time),it("recSurvive"))),i.appendChild(this.rec(String(t.best.kills),it("recKills"))),i.appendChild(this.rec(`Lv ${t.best.level}`,it("recLevel"))),i.appendChild(this.rec(String(t.best.combo),it("recCombo"))),e.appendChild(i),e.appendChild(Q("div","controls-hint",it("bossCodex")));const s=Q("div","codex-grid");for(const f of _S){const m=Yf[f];if(!m)continue;const v=t.bosses.includes(f),g=Q("div",v?"codex-cell slain":"codex-cell");g.appendChild(Q("div","cx-name",v?`${Ae("hero",f,m.name)} ${m.hanja}`:"???")),g.appendChild(Q("div","cx-state",v?`<span style="color:#e8c667">${it("slain")}</span>`:`<span style="color:#7f8496">${it("notSlain")}</span>`)),s.appendChild(g)}e.appendChild(s);const n=Mt()==="en";e.appendChild(Q("div","controls-hint",n?"Tactics Codex 兵法":"병법 도감 兵法"));const r=Q("div","wpn-grid");for(const f in Te){const m=Te[f];if(m.evolution)continue;const v=Qf.includes(f)&&!wc(f,t),g=Q("div",v?"wpn-cell locked":"wpn-cell");v?(g.appendChild(Q("div","wpn-name","？？？")),g.appendChild(Q("div","wpn-cond",$M(f,t)))):(g.appendChild(Q("div","wpn-name",`${Ae("weapon",f,m.name)} <span class="wh">${m.hanja}</span>`)),g.appendChild(Q("div","wpn-desc",n?Va[f]??m.desc:m.desc))),r.appendChild(g)}e.appendChild(r),e.appendChild(Q("div","controls-hint",n?"Evolutions 秘傳":"진화 비전 秘傳"));const o="MAX",l=Q("div","wpn-grid");for(const f of Gh){const m=Te[f.to],v=Te[f.from],g=Wi[f.passive];if(!m||!v||!g)continue;const p=Q("div","wpn-cell evo");p.appendChild(Q("div","wpn-name",`${Ae("weapon",f.to,m.name)} <span class="wh">${m.hanja}</span>`)),p.appendChild(Q("div","wpn-desc",n?Va[f.to]??m.desc:m.desc)),p.appendChild(Q("div","wpn-recipe",`${Ae("weapon",f.from,v.name)} <b>${o}</b> + ${Ae("passive",f.passive,g.name)}`)),l.appendChild(p)}e.appendChild(l);const h=Xy(t).length;e.appendChild(Q("div","controls-hint",`${n?"Slayer Treasures":"대원 보물 도감"} 寶物 (${h}/${Wa.length})`));const c=Q("div","mw-grid");for(const f of Wa){const m=qy(f.id,t),v=Q("div",m?"mw-cell owned":"mw-cell locked");v.appendChild(Q("div","mw-name",`${qf(f)} <span class="mh">${f.hanja}</span>`)),m?(v.appendChild(Q("div","mw-desc",jf(f))),v.appendChild(Q("div","mw-lore",`“${Wy(f)}”`))):v.appendChild(Q("div","mw-state",n?"Undiscovered":"未得")),c.appendChild(v)}e.appendChild(c);const u=t.achievements??[];e.appendChild(Q("div","controls-hint",`${it("achSection")} (${u.length}/${Mo.length})`));const d=Q("div","ach-grid");for(const f of Mo){const m=u.includes(f.id),v=n?no[f.id]?.name??f.name:f.name,g=n?no[f.id]?.desc??f.desc:f.desc,p=Q("div",m?"ach-cell done":"ach-cell");p.appendChild(Q("div","ach-name",m?`${v} <span class="ah">${f.hanja}</span>`:v)),p.appendChild(Q("div","ach-desc",m?g:"???")),d.appendChild(p)}return e.appendChild(d),e}rec(t,e){const i=Q("div","rec");return i.appendChild(Q("div","rv",t)),i.appendChild(Q("div","rl",e)),i}showPause(){this.current="pause";const t=()=>{this.overlay.textContent="";const e=Q("div","screen");e.appendChild(Q("div","section-title",`${it("pauseTitle")} <small>一時停止</small>`));const i=Q("div","btn-row");i.appendChild(this.button(it("resume"),this.cb.onResume,{primary:!0})),i.appendChild(this.muteButton()),i.appendChild(this.langButton()),i.appendChild(this.button(it("abandon"),this.cb.onAbandon)),e.appendChild(i),e.appendChild(Q("div","controls-hint",it("resumeHint"))),this.overlay.appendChild(e),this.overlay.classList.add("show")};this.rerender=t,t()}}const vs=60,wS=.1;class SS{input;moveZone;base;knob;musouBtn;musouRing;movePointer=-1;startX=0;startY=0;visible=!1;ready=!1;constructor(t){this.input=t,this.moveZone=document.createElement("div"),this.moveZone.style.cssText=["position:fixed","inset:0","z-index:22","touch-action:none","display:none"].join(";"),this.base=document.createElement("div"),this.base.style.cssText=["position:fixed","z-index:22",`width:${vs*2}px`,`height:${vs*2}px`,"border-radius:50%","border:2px solid rgba(232,198,103,0.5)","background:radial-gradient(circle,rgba(20,22,30,0.5),rgba(10,11,17,0.35))","box-shadow:0 0 18px rgba(232,198,103,0.2)","transform:translate(-50%,-50%)","display:none","pointer-events:none"].join(";"),this.knob=document.createElement("div"),this.knob.style.cssText=["position:absolute","width:52px","height:52px","border-radius:50%","background:radial-gradient(circle at 40% 35%,#f0e4c0,#a8791f)","box-shadow:0 0 14px rgba(232,198,103,0.6)","transform:translate(-50%,-50%)","pointer-events:none"].join(";"),this.base.appendChild(this.knob),this.moveZone.appendChild(this.base),document.body.appendChild(this.moveZone),this.musouBtn=document.createElement("div"),this.musouBtn.style.cssText=["position:fixed","right:calc(env(safe-area-inset-right,0px) + 22px)","bottom:calc(env(safe-area-inset-bottom,0px) + 64px)","width:92px","height:92px","border-radius:50%","z-index:23","touch-action:none","display:none","align-items:center","justify-content:center",'font-family:"Nanum Myeongjo","Times New Roman",serif'].join(";"),this.musouRing=document.createElement("div"),this.musouRing.style.cssText=["position:absolute","inset:0","border-radius:50%","background:conic-gradient(#e8c667 0deg, rgba(40,32,14,0.7) 0deg)","-webkit-mask:radial-gradient(circle, transparent 34px, #000 35px)","mask:radial-gradient(circle, transparent 34px, #000 35px)"].join(";"),this.musouBtn.appendChild(this.musouRing);const e=document.createElement("div");e.style.cssText=["position:absolute","inset:10px","border-radius:50%","background:radial-gradient(circle at 40% 35%,#2a2410,#14120a)","border:1px solid rgba(232,198,103,0.5)","display:flex","align-items:center","justify-content:center","color:#e8c667","font-size:26px","letter-spacing:1px"].join(";"),e.textContent="無",this.musouBtn.appendChild(e),document.body.appendChild(this.musouBtn),this.moveZone.addEventListener("pointerdown",this.onMoveDown,{passive:!1}),this.moveZone.addEventListener("pointermove",this.onMoveMove,{passive:!1}),this.moveZone.addEventListener("pointerup",this.onMoveUp),this.moveZone.addEventListener("pointercancel",this.onMoveUp),this.moveZone.addEventListener("lostpointercapture",this.onMoveUp),window.addEventListener("pointerup",this.onWindowRelease),window.addEventListener("pointercancel",this.onWindowRelease),this.musouBtn.addEventListener("pointerdown",this.onMusouDown)}onWindowRelease=t=>{this.movePointer!==-1&&t.pointerId===this.movePointer&&this.endMove()};setVisible(t){this.visible!==t&&(this.visible=t,this.moveZone.style.display=t?"block":"none",this.musouBtn.style.display=t?"flex":"none",t||this.endMove())}setMusou(t,e){if(!this.visible)return;const i=Math.min(360,t/100*360);this.musouRing.style.background=`conic-gradient(#e8c667 ${i}deg, rgba(40,32,14,0.7) ${i}deg)`,e&&!this.ready?this.musouBtn.animate([{transform:"scale(1)"},{transform:"scale(1.12)"},{transform:"scale(1)"}],{duration:700,iterations:1/0}):!e&&this.ready&&this.musouBtn.getAnimations().forEach(s=>s.cancel()),this.ready=e}onMoveDown=t=>{if(t.preventDefault(),this.movePointer!==-1&&this.movePointer!==t.pointerId)try{this.moveZone.releasePointerCapture(this.movePointer)}catch{}this.movePointer=t.pointerId,this.startX=t.clientX,this.startY=t.clientY,this.base.style.left=`${t.clientX}px`,this.base.style.top=`${t.clientY}px`,this.base.style.display="block",this.knob.style.left="50%",this.knob.style.top="50%",this.input.joy.active=!0,this.input.joy.x=0,this.input.joy.z=0;try{this.moveZone.setPointerCapture(t.pointerId)}catch{}};onMoveMove=t=>{if(t.pointerId!==this.movePointer)return;t.preventDefault();let e=t.clientX-this.startX,i=t.clientY-this.startY;const s=Math.hypot(e,i);s>vs&&(e=e/s*vs,i=i/s*vs),this.knob.style.left=`${50+e/vs*50}%`,this.knob.style.top=`${50+i/vs*50}%`;const n=e/vs,r=i/vs;Math.hypot(n,r)<wS?(this.input.joy.x=0,this.input.joy.z=0):(this.input.joy.x=n,this.input.joy.z=r)};onMoveUp=t=>{t.pointerId===this.movePointer&&this.endMove()};endMove(){if(this.movePointer!==-1)try{this.moveZone.releasePointerCapture(this.movePointer)}catch{}this.movePointer=-1,this.base.style.display="none",this.input.joy.active=!1,this.input.joy.x=0,this.input.joy.z=0}onMusouDown=t=>{t.preventDefault(),this.input.press("Space"),this.musouBtn.animate([{filter:"brightness(1.8)"},{filter:"brightness(1)"}],{duration:200,easing:"ease-out"})}}function AS(){return new URLSearchParams(location.search).has("touch")?!0:"ontouchstart"in window||navigator.maxTouchPoints>0}const op="threesur-save-v1",Xh=1;function oo(){return{version:Xh,gold:0,upgrades:{},lvbuUnlocked:!1,muted:!1,best:{time:0,kills:0,level:1,combo:0},bosses:[],achievements:[],unlockedWeapons:[],masterworks:[],totalKills:0,totalWins:0,epithets:[]}}function TS(){let a=null;try{a=localStorage.getItem(op)}catch{return oo()}if(!a)return oo();let t;try{t=JSON.parse(a)}catch{return oo()}return ES(t)}function ES(a){const t=oo();if(typeof a!="object"||a===null)return t;const e=a;return typeof e.version=="number"&&e.version>Xh?t:{version:Xh,gold:Ys(e.gold,0),upgrades:CS(e.upgrades),lvbuUnlocked:e.lvbuUnlocked===!0,muted:e.muted===!0,best:{time:Ys(e.best?.time,0),kills:Ys(e.best?.kills,0),level:Ys(e.best?.level,1),combo:Ys(e.best?.combo,0)},bosses:Array.isArray(e.bosses)?e.bosses.filter(i=>typeof i=="string"):[],achievements:Array.isArray(e.achievements)?e.achievements.filter(i=>typeof i=="string"):[],unlockedWeapons:Array.isArray(e.unlockedWeapons)?e.unlockedWeapons.filter(i=>typeof i=="string"):[],masterworks:Array.isArray(e.masterworks)?e.masterworks.filter(i=>typeof i=="string"):[],totalKills:Ys(e.totalKills,0),totalWins:Ys(e.totalWins,0),epithets:Array.isArray(e.epithets)?e.epithets.filter(i=>typeof i=="string"):[]}}function Ys(a,t){return typeof a=="number"&&isFinite(a)?a:t}function CS(a){const t={};if(typeof a=="object"&&a!==null)for(const e in a){const i=a[e];typeof i=="number"&&isFinite(i)&&i>0&&(t[e]=Math.floor(i))}return t}function Fa(a){try{localStorage.setItem(op,JSON.stringify(a))}catch{}}function RS(a,t){const e={time:t.time>a.time,kills:t.kills>a.kills,level:t.level>a.level,combo:t.combo>a.combo};return e.time&&(a.time=t.time),e.kills&&(a.kills=t.kills),e.level&&(a.level=t.level),e.combo&&(a.combo=t.combo),e}const PS=document.getElementById("app"),Xa=document.createElement("div");Xa.id="loading";Xa.innerHTML='<div style="font-size:30px;">멸귀무쌍 滅鬼無雙</div><div style="font-size:15px;color:#b8bcc8;">대원 소집 중…</div>';document.body.appendChild(Xa);const Qs=H1(PS),Gl=new sb,Zr=new nb,Vl=AS();lb().then(a=>{const t=TS();Tt.setMuted(t.muted);let e="title",i="zhaoyun",s=null;const n=new _o(a,Gl,Zr,{onEnd:x=>m(x),onPause:()=>v()},Vl),r=new W1(Qs,n.scene,Gl.camera);n.setPostFx(r);const o=new SS(Zr),l=new MS({onStart:()=>c(),onSelectHero:x=>f(x),onOpenShop:x=>u(x),onBackToTitle:()=>h(),onRetry:()=>f(s?.heroId??i),onBuyUpgrade:x=>p(x),onUnlockLvbu:()=>w(),onToggleMute:()=>(t.muted=Tt.toggleMuted(),Fa(t),t.muted),onResume:()=>g(),onAbandon:()=>n.abandon()},a);l.setMuted(t.muted);function h(){e="title",n.enterAttract(),o.setVisible(!1),Tt.playBgm("title"),l.showTitle()}function c(){e="select",Tt.playBgm("title"),l.showSelect(t)}function u(x){e="shop",Tt.playBgm("title"),l.showShop(t,x)}function d(x){return Object.keys(Te).filter(E=>!Te[E].evolution&&wc(E,x))}function f(x,E=!1){!E&&!Cc(x,t)||(i=x,e="run",l.hide(),n.beginRun(x,nS(t.upgrades),d(t)),o.setVisible(Vl))}function m(x){e="result",s=x,o.setVisible(!1);const E=new Set(Zd(t));t.gold+=x.goldEarned;const P=RS(t.best,{time:x.time,kills:x.kills,level:x.level,combo:x.maxCombo});for(const z of x.bosses)t.bosses.includes(z)||t.bosses.push(z);t.totalKills+=x.kills,x.victory&&(t.totalWins+=1);const F=rS({victory:x.victory,kills:x.kills,maxCombo:x.maxCombo,time:x.time,level:x.level,bosses:x.bosses,weapons:x.weapons,totalKills:t.totalKills,totalWins:t.totalWins,endless:x.endless}),G=F.filter(z=>!t.achievements.includes(z));for(const z of G)t.achievements.push(z);const j=Zd(t).filter(z=>!E.has(z)),N=jM(t).filter(z=>!t.unlockedWeapons.includes(z));for(const z of N)t.unlockedWeapons.push(z);for(const z of x.masterworks)t.masterworks.includes(z)||t.masterworks.push(z);const W=rp(x,t);W&&!t.epithets.includes(W.id)&&t.epithets.push(W.id),Fa(t),Tt.playJingle(x.victory?"victory":"defeat"),(G.length>0||N.length>0)&&Tt.sfx("achievement"),l.showResult(x,t,P,{title:oS(F),newAchievements:G,newHeroes:j,newWeapons:N})}function v(){e="pause",o.setVisible(!1),l.showPause()}function g(){e="run",l.hide(),n.resume(),o.setVisible(Vl)}function p(x){const E=np[x];if(!E)return;const P=t.upgrades[x]??0,F=ap(E,P);F<0||t.gold<F||(t.gold-=F,t.upgrades[x]=P+1,Fa(t),Tt.sfx("uiClick"),l.rerenderShop())}function w(){t.lvbuUnlocked||t.gold<yo||(t.gold-=yo,t.lvbuUnlocked=!0,Fa(t),Tt.sfx("revive"),l.rerenderShop())}const A=()=>{Tt.init(),Tt.playBgm(e==="run"?"battle":"title")};window.addEventListener("pointerdown",A,{once:!0}),window.addEventListener("keydown",A,{once:!0}),document.addEventListener("gesturestart",x=>x.preventDefault(),{passive:!1}),document.addEventListener("gesturechange",x=>x.preventDefault(),{passive:!1});let y=0;document.addEventListener("touchend",x=>{const E=performance.now();E-y<320&&x.cancelable&&x.preventDefault(),y=E},{passive:!1}),window.addEventListener("keydown",x=>{x.code==="Escape"&&e==="pause"&&g()});const T=()=>{const x=Math.round(window.visualViewport?.width??window.innerWidth),E=Math.round(window.visualViewport?.height??window.innerHeight);Gl.onResize(x,E),r.setSize(x,E)};window.addEventListener("resize",T),window.visualViewport?.addEventListener("resize",T),window.addEventListener("orientationchange",()=>{T(),setTimeout(T,250)}),requestAnimationFrame(T),setTimeout(T,300),n.enterAttract(),Tt.playBgm("title"),l.showTitle(!0),Xa.remove(),Qs.info.autoReset=!1;let M=60;new rb(x=>{Zr.poll(),n.update(x),e==="run"&&o.setMusou(n.musouGauge,n.musouReadyFlag),r.setMusou(n.musouStrength,n.renderTime),e==="run"&&n.consumeReplayTrigger()&&r.playReplay(),Qs.info.reset(),r.render(),Zr.endFrame(),Tt.endFrame(),x>0&&(M+=(1/x-M)*.05)}).start(),(location.hostname==="localhost"||location.hostname==="127.0.0.1")&&(window.__GAME_TEST__={goToTitle:()=>h(),selectHero:x=>f(x,!0),openShop:(x="upgrade")=>u(x),grantGold:x=>{t.gold+=x,Fa(t),l.rerenderShop()},buyUpgrade:x=>p(x),unlockLvbu:()=>w(),killPlayer:()=>n.testKillPlayer(),damagePlayer:x=>n.testDamagePlayer(x),killBoss:()=>n.testKillBoss(),get scene(){return e},get save(){return{gold:t.gold,upgrades:{...t.upgrades},lvbuUnlocked:t.lvbuUnlocked,best:{...t.best},bosses:[...t.bosses],achievements:[...t.achievements],totalKills:t.totalKills,totalWins:t.totalWins}},setTime:x=>n.testSetTime(x),giveWeapon:x=>n.testGiveWeapon(x),givePassive:(x,E)=>n.testGivePassive(x,E),levelUp:()=>n.testForceLevel(),fillMusou:()=>n.testFillMusou(),activateMusou:()=>n.testActivateMusou(),addGold:x=>n.testAddGold(x),showProjectiles:()=>n.testSpawnProjectileShowcase(),showEnemyProjectiles:()=>n.testSpawnEnemyProjectileShowcase(),musouFx:()=>n.testMusouFx(),shrineBuff:(x,E)=>n.testShrineBuff(x,E),flashBurst:(x,E)=>n.testFlashBurst(x,E),spawnBoss:x=>n.testSpawnBoss(x),setBossFlags:(x,E,P)=>n.testSetBossFlags(x,E,P),treasure:x=>n.testTreasure(x),triggerEvent:x=>n.testTriggerEvent(x),spawnPattern:x=>n.testSpawnPattern(x),showWorldObjects:()=>n.testShowWorldObjects(),setPlayerPosition:(x,E)=>n.testSetPlayerPosition(x,E),setInvulnerable:x=>n.testSetInvulnerable(x),primeGate:()=>n.testPrimeGate(),breachGate:()=>n.testBreachGate(),triggerHulao:()=>n.testTriggerHulao(),flipBanners:x=>n.testFlipBanners(x),testVolley:()=>n.testVolley(),siegeBreach:(x="castle-s")=>n.testSiegeBreach(x),siegeForceLord:()=>n.testSiegeForceLord(),siegeForceCounter:()=>n.testSiegeForceCounter(),siegeAddFall:x=>n.testSiegeAddFall(x),siegeForceDefend:()=>n.testSiegeForceDefend(),setObjective:x=>n.testSetObjective(x),damageGate:(x,E)=>n.testDamageGate(x,E),resumeEndless:()=>n.resumeEndless(),forceRelic:()=>n.testForceRelic(),enterEndless:()=>n.testEnterEndless(),get stats(){return n.testStats}},window.__DEBUG__={info:()=>({fps:Math.round(M),calls:Qs.info.render.calls,tris:Qs.info.render.triangles,geometries:Qs.info.memory.geometries,textures:Qs.info.memory.textures})})}).catch(a=>{console.error(a),Xa.innerHTML=`<div style="color:#e85c4a;font-size:22px;">로드 실패</div><div style="font-size:13px;color:#b8bcc8;max-width:80vw;">${String(a)}</div>`});
