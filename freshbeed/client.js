var IH="186";var wH=0,w$=1,zH=2;var e9=1,HQ=2,L9=3,A8=0,lJ=1,AJ=2,T8=0,J7=1,z$=2,P$=3,_$=4,PH=5;var M9=100,_H=101,AH=102,TH=103,SH=104,jH=200,vH=201,yH=202,fH=203,hH=204,bH=205,xH=206,gH=207,pH=208,lH=209,mH=210,dH=211,uH=212,cH=213,nH=214,sH=0,iH=1,oH=2,A$=3,aH=4,rH=5,tH=6,eH=7,JK=0,QK=1,$K=2,k8=0,T$=1,S$=2,j$=3,Q7=4,v$=5,y$=6,f$=7;var D9=301,T6=302,KQ=303,YQ=304,$7=306,o8=1000,V9=1001,XQ=1002,B8=1003,UQ=1004;var S6=1005;var vJ=1006,k9=1007;var S8=1008;var C8=1009,WK=1010,ZK=1011,W7=1012,h$=1013,q6=1014,a8=1015,j8=1016,b$=1017,x$=1018,B9=1020,HK=35902,KK=35899,YK=1021,XK=1022,v8=1023,j6=1026,v6=1027,UK=1028,g$=1029,y6=1030,p$=1031;var l$=1033,EQ=33776,GQ=33777,NQ=33778,qQ=33779,m$=35840,d$=35841,u$=35842,c$=35843,n$=36196,s$=37492,i$=37496,o$=37488,a$=37489,FQ=37490,r$=37491,t$=37808,e$=37809,JW=37810,QW=37811,$W=37812,WW=37813,ZW=37814,HW=37815,KW=37816,YW=37817,XW=37818,UW=37819,EW=37820,GW=37821,NW=36492,qW=36494,FW=36495,OW=36283,RW=36284,OQ=36285,LW=36286;var MW=2300,RQ=2301;var DW=0,Z7=1,C9=2;var VW=0,EK=1,f6="",Q8="srgb",$8="srgb-linear",kW="linear",GJ="srgb";var GK=512,NK=513,qK=514,LQ=515,FK=516,OK=517,MQ=518,RK=519;var BW="300 es",CW=2000;function WX(J){for(let Q=J.length-1;Q>=0;--Q)if(J[Q]>=65535)return!0;return!1}function ZX(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}function F9(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function LK(){let J=F9("canvas");return J.style.display="block",J}var bZ={},O9=null;function t9(...J){let Q="THREE."+J.shift();if(O9)O9("log",Q,...J);else console.log(Q,...J)}function MK(J){let Q=J[0];if(typeof Q==="string"&&Q.startsWith("TSL:")){let $=J[1];if($&&$.isStackTrace)J[0]+=" "+$.getLocation();else J[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return J}function A0(...J){J=MK(J);let Q="THREE."+J.shift();if(O9)O9("warn",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.warn($.getError(Q));else console.warn(Q,...J)}}function f0(...J){J=MK(J);let Q="THREE."+J.shift();if(O9)O9("error",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.error($.getError(Q));else console.error(Q,...J)}}function _6(...J){let Q=J.join(" ");if(Q in bZ)return;bZ[Q]=!0,A0(...J)}function DK(J,Q,$){return new Promise(function(W,Z){function H(){switch(J.clientWaitSync(Q,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:Z();break;case J.TIMEOUT_EXPIRED:setTimeout(H,$);break;default:W()}}setTimeout(H,$)})}var VK={[0]:1,[2]:6,[4]:7,[3]:5,[1]:0,[6]:2,[7]:4,[5]:3};class y8{addEventListener(J,Q){if(this._listeners===void 0)this._listeners={};let $=this._listeners;if($[J]===void 0)$[J]=[];if($[J].indexOf(Q)===-1)$[J].push(Q)}hasEventListener(J,Q){let $=this._listeners;if($===void 0)return!1;return $[J]!==void 0&&$[J].indexOf(Q)!==-1}removeEventListener(J,Q){let $=this._listeners;if($===void 0)return;let W=$[J];if(W!==void 0){let Z=W.indexOf(Q);if(Z!==-1)W.splice(Z,1)}}dispatchEvent(J){let Q=this._listeners;if(Q===void 0)return;let $=Q[J.type];if($!==void 0){J.target=this;let W=$.slice(0);for(let Z=0,H=W.length;Z<H;Z++)W[Z].call(this,J);J.target=null}}}var gJ=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xZ=1234567,a9=Math.PI/180,A6=180/Math.PI;function V8(){let J=Math.random()*4294967295|0,Q=Math.random()*4294967295|0,$=Math.random()*4294967295|0,W=Math.random()*4294967295|0;return(gJ[J&255]+gJ[J>>8&255]+gJ[J>>16&255]+gJ[J>>24&255]+"-"+gJ[Q&255]+gJ[Q>>8&255]+"-"+gJ[Q>>16&15|64]+gJ[Q>>24&255]+"-"+gJ[$&63|128]+gJ[$>>8&255]+"-"+gJ[$>>16&255]+gJ[$>>24&255]+gJ[W&255]+gJ[W>>8&255]+gJ[W>>16&255]+gJ[W>>24&255]).toLowerCase()}function i0(J,Q,$){return Math.max(Q,Math.min($,J))}function IW(J,Q){return(J%Q+Q)%Q}function HX(J,Q,$,W,Z){return W+(J-Q)*(Z-W)/($-Q)}function KX(J,Q,$){if(J!==Q)return($-J)/(Q-J);else return 0}function r9(J,Q,$){return(1-$)*J+$*Q}function YX(J,Q,$,W){return r9(J,Q,1-Math.exp(-$*W))}function XX(J,Q=1){return Q-Math.abs(IW(J,Q*2)-Q)}function UX(J,Q,$){if(J<=Q)return 0;if(J>=$)return 1;return J=(J-Q)/($-Q),J*J*(3-2*J)}function EX(J,Q,$){if(J<=Q)return 0;if(J>=$)return 1;return J=(J-Q)/($-Q),J*J*J*(J*(J*6-15)+10)}function GX(J,Q){return J+Math.floor(Math.random()*(Q-J+1))}function NX(J,Q){return J+Math.random()*(Q-J)}function qX(J){return J*(0.5-Math.random())}function FX(J){if(J!==void 0)xZ=J;let Q=xZ+=1831565813;return Q=Math.imul(Q^Q>>>15,Q|1),Q^=Q+Math.imul(Q^Q>>>7,Q|61),((Q^Q>>>14)>>>0)/4294967296}function OX(J){return J*a9}function RX(J){return J*A6}function LX(J){return J>0&&Number.isInteger(J)&&2**Math.round(Math.log2(J))===J}function MX(J){return Math.pow(2,Math.ceil(Math.log(J)/Math.LN2))}function DX(J){return Math.pow(2,Math.floor(Math.log(J)/Math.LN2))}function VX(J,Q,$,W,Z){let{cos:H,sin:K}=Math,Y=H($/2),X=K($/2),U=H((Q+W)/2),E=K((Q+W)/2),N=H((Q-W)/2),G=K((Q-W)/2),q=H((W-Q)/2),R=K((W-Q)/2);switch(Z){case"XYX":J.set(Y*E,X*N,X*G,Y*U);break;case"YZY":J.set(X*G,Y*E,X*N,Y*U);break;case"ZXZ":J.set(X*N,X*G,Y*E,Y*U);break;case"XZX":J.set(Y*E,X*R,X*q,Y*U);break;case"YXY":J.set(X*q,Y*E,X*R,Y*U);break;case"ZYZ":J.set(X*R,X*q,Y*E,Y*U);break;default:A0("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+Z)}}function D8(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return J/4294967295;case Uint16Array:return J/65535;case Uint8Array:case Uint8ClampedArray:return J/255;case Int32Array:return Math.max(J/2147483647,-1);case Int16Array:return Math.max(J/32767,-1);case Int8Array:return Math.max(J/127,-1);default:throw Error("THREE.MathUtils: Invalid component type.")}}function HJ(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return Math.round(J*4294967295);case Uint16Array:return Math.round(J*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(J*255);case Int32Array:return Math.round(J*2147483647);case Int16Array:return Math.round(J*32767);case Int8Array:return Math.round(J*127);default:throw Error("THREE.MathUtils: Invalid component type.")}}var wW={DEG2RAD:a9,RAD2DEG:A6,generateUUID:V8,clamp:i0,euclideanModulo:IW,mapLinear:HX,inverseLerp:KX,lerp:r9,damp:YX,pingpong:XX,smoothstep:UX,smootherstep:EX,randInt:GX,randFloat:NX,randFloatSpread:qX,seededRandom:FX,degToRad:OX,radToDeg:RX,isPowerOfTwo:LX,ceilPowerOfTwo:MX,floorPowerOfTwo:DX,setQuaternionFromProperEuler:VX,normalize:HJ,denormalize:D8};class y0{static{y0.prototype.isVector2=!0}constructor(J=0,Q=0){this.x=J,this.y=Q}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,Q){return this.x=J,this.y=Q,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;default:throw Error("THREE.Vector2: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let Q=this.x,$=this.y,W=J.elements;return this.x=W[0]*Q+W[3]*$+W[6],this.y=W[1]*Q+W[4]*$+W[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,Q){return this.x=i0(this.x,J.x,Q.x),this.y=i0(this.y,J.y,Q.y),this}clampScalar(J,Q){return this.x=i0(this.x,J,Q),this.y=i0(this.y,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(i0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(i0($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y;return Q*Q+$*$}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this}rotateAround(J,Q){let $=Math.cos(Q),W=Math.sin(Q),Z=this.x-J.x,H=this.y-J.y;return this.x=Z*$-H*W+J.x,this.y=Z*W+H*$+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class hJ{constructor(J=0,Q=0,$=0,W=1){this.isQuaternion=!0,this._x=J,this._y=Q,this._z=$,this._w=W}static slerpFlat(J,Q,$,W,Z,H,K){let Y=$[W+0],X=$[W+1],U=$[W+2],E=$[W+3],N=Z[H+0],G=Z[H+1],q=Z[H+2],R=Z[H+3];if(E!==R||Y!==N||X!==G||U!==q){let k=Y*N+X*G+U*q+E*R;if(k<0)N=-N,G=-G,q=-q,R=-R,k=-k;let F=1-K;if(k<0.9995){let O=Math.acos(k),z=Math.sin(O);F=Math.sin(F*O)/z,K=Math.sin(K*O)/z,Y=Y*F+N*K,X=X*F+G*K,U=U*F+q*K,E=E*F+R*K}else{Y=Y*F+N*K,X=X*F+G*K,U=U*F+q*K,E=E*F+R*K;let O=1/Math.sqrt(Y*Y+X*X+U*U+E*E);Y*=O,X*=O,U*=O,E*=O}}J[Q]=Y,J[Q+1]=X,J[Q+2]=U,J[Q+3]=E}static multiplyQuaternionsFlat(J,Q,$,W,Z,H){let K=$[W],Y=$[W+1],X=$[W+2],U=$[W+3],E=Z[H],N=Z[H+1],G=Z[H+2],q=Z[H+3];return J[Q]=K*q+U*E+Y*G-X*N,J[Q+1]=Y*q+U*N+X*E-K*G,J[Q+2]=X*q+U*G+K*N-Y*E,J[Q+3]=U*q-K*E-Y*N-X*G,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,Q,$,W){return this._x=J,this._y=Q,this._z=$,this._w=W,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,Q=!0){let{_x:$,_y:W,_z:Z,_order:H}=J,K=Math.cos,Y=Math.sin,X=K($/2),U=K(W/2),E=K(Z/2),N=Y($/2),G=Y(W/2),q=Y(Z/2);switch(H){case"XYZ":this._x=N*U*E+X*G*q,this._y=X*G*E-N*U*q,this._z=X*U*q+N*G*E,this._w=X*U*E-N*G*q;break;case"YXZ":this._x=N*U*E+X*G*q,this._y=X*G*E-N*U*q,this._z=X*U*q-N*G*E,this._w=X*U*E+N*G*q;break;case"ZXY":this._x=N*U*E-X*G*q,this._y=X*G*E+N*U*q,this._z=X*U*q+N*G*E,this._w=X*U*E-N*G*q;break;case"ZYX":this._x=N*U*E-X*G*q,this._y=X*G*E+N*U*q,this._z=X*U*q-N*G*E,this._w=X*U*E+N*G*q;break;case"YZX":this._x=N*U*E+X*G*q,this._y=X*G*E+N*U*q,this._z=X*U*q-N*G*E,this._w=X*U*E-N*G*q;break;case"XZY":this._x=N*U*E-X*G*q,this._y=X*G*E-N*U*q,this._z=X*U*q+N*G*E,this._w=X*U*E+N*G*q;break;default:A0("Quaternion: .setFromEuler() encountered an unknown order: "+H)}if(Q===!0)this._onChangeCallback();return this}setFromAxisAngle(J,Q){let $=Q/2,W=Math.sin($);return this._x=J.x*W,this._y=J.y*W,this._z=J.z*W,this._w=Math.cos($),this._onChangeCallback(),this}setFromRotationMatrix(J){let Q=J.elements,$=Q[0],W=Q[4],Z=Q[8],H=Q[1],K=Q[5],Y=Q[9],X=Q[2],U=Q[6],E=Q[10],N=$+K+E;if(N>0){let G=0.5/Math.sqrt(N+1);this._w=0.25/G,this._x=(U-Y)*G,this._y=(Z-X)*G,this._z=(H-W)*G}else if($>K&&$>E){let G=2*Math.sqrt(1+$-K-E);this._w=(U-Y)/G,this._x=0.25*G,this._y=(W+H)/G,this._z=(Z+X)/G}else if(K>E){let G=2*Math.sqrt(1+K-$-E);this._w=(Z-X)/G,this._x=(W+H)/G,this._y=0.25*G,this._z=(Y+U)/G}else{let G=2*Math.sqrt(1+E-$-K);this._w=(H-W)/G,this._x=(Z+X)/G,this._y=(Y+U)/G,this._z=0.25*G}return this._onChangeCallback(),this}setFromUnitVectors(J,Q){let $=J.dot(Q)+1;if($<0.00000001)if($=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=$;else this._x=0,this._y=-J.z,this._z=J.y,this._w=$;else this._x=J.y*Q.z-J.z*Q.y,this._y=J.z*Q.x-J.x*Q.z,this._z=J.x*Q.y-J.y*Q.x,this._w=$;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(i0(this.dot(J),-1,1)))}rotateTowards(J,Q){let $=this.angleTo(J);if($===0)return this;let W=Math.min(1,Q/$);return this.slerp(J,W),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,Q){let{_x:$,_y:W,_z:Z,_w:H}=J,K=Q._x,Y=Q._y,X=Q._z,U=Q._w;return this._x=$*U+H*K+W*X-Z*Y,this._y=W*U+H*Y+Z*K-$*X,this._z=Z*U+H*X+$*Y-W*K,this._w=H*U-$*K-W*Y-Z*X,this._onChangeCallback(),this}slerp(J,Q){let{_x:$,_y:W,_z:Z,_w:H}=J,K=this.dot(J);if(K<0)$=-$,W=-W,Z=-Z,H=-H,K=-K;let Y=1-Q;if(K<0.9995){let X=Math.acos(K),U=Math.sin(X);Y=Math.sin(Y*X)/U,Q=Math.sin(Q*X)/U,this._x=this._x*Y+$*Q,this._y=this._y*Y+W*Q,this._z=this._z*Y+Z*Q,this._w=this._w*Y+H*Q,this._onChangeCallback()}else this._x=this._x*Y+$*Q,this._y=this._y*Y+W*Q,this._z=this._z*Y+Z*Q,this._w=this._w*Y+H*Q,this.normalize();return this}slerpQuaternions(J,Q,$){return this.copy(J).slerp(Q,$)}random(){let J=2*Math.PI*Math.random(),Q=2*Math.PI*Math.random(),$=Math.random(),W=Math.sqrt(1-$),Z=Math.sqrt($);return this.set(W*Math.sin(J),W*Math.cos(J),Z*Math.sin(Q),Z*Math.cos(Q))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,Q=0){return this._x=J[Q],this._y=J[Q+1],this._z=J[Q+2],this._w=J[Q+3],this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._w,J}fromBufferAttribute(J,Q){return this._x=J.getX(Q),this._y=J.getY(Q),this._z=J.getZ(Q),this._w=J.getW(Q),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class h{static{h.prototype.isVector3=!0}constructor(J=0,Q=0,$=0){this.x=J,this.y=Q,this.z=$}set(J,Q,$){if($===void 0)$=this.z;return this.x=J,this.y=Q,this.z=$,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;default:throw Error("THREE.Vector3: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,Q){return this.x=J.x*Q.x,this.y=J.y*Q.y,this.z=J.z*Q.z,this}applyEuler(J){return this.applyQuaternion(gZ.setFromEuler(J))}applyAxisAngle(J,Q){return this.applyQuaternion(gZ.setFromAxisAngle(J,Q))}applyMatrix3(J){let Q=this.x,$=this.y,W=this.z,Z=J.elements;return this.x=Z[0]*Q+Z[3]*$+Z[6]*W,this.y=Z[1]*Q+Z[4]*$+Z[7]*W,this.z=Z[2]*Q+Z[5]*$+Z[8]*W,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let Q=this.x,$=this.y,W=this.z,Z=J.elements,H=1/(Z[3]*Q+Z[7]*$+Z[11]*W+Z[15]);return this.x=(Z[0]*Q+Z[4]*$+Z[8]*W+Z[12])*H,this.y=(Z[1]*Q+Z[5]*$+Z[9]*W+Z[13])*H,this.z=(Z[2]*Q+Z[6]*$+Z[10]*W+Z[14])*H,this}applyQuaternion(J){let Q=this.x,$=this.y,W=this.z,Z=J.x,H=J.y,K=J.z,Y=J.w,X=2*(H*W-K*$),U=2*(K*Q-Z*W),E=2*(Z*$-H*Q);return this.x=Q+Y*X+H*E-K*U,this.y=$+Y*U+K*X-Z*E,this.z=W+Y*E+Z*U-H*X,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let Q=this.x,$=this.y,W=this.z,Z=J.elements;return this.x=Z[0]*Q+Z[4]*$+Z[8]*W,this.y=Z[1]*Q+Z[5]*$+Z[9]*W,this.z=Z[2]*Q+Z[6]*$+Z[10]*W,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,Q){return this.x=i0(this.x,J.x,Q.x),this.y=i0(this.y,J.y,Q.y),this.z=i0(this.z,J.z,Q.z),this}clampScalar(J,Q){return this.x=i0(this.x,J,Q),this.y=i0(this.y,J,Q),this.z=i0(this.z,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(i0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,Q){let{x:$,y:W,z:Z}=J,H=Q.x,K=Q.y,Y=Q.z;return this.x=W*Y-Z*K,this.y=Z*H-$*Y,this.z=$*K-W*H,this}projectOnVector(J){let Q=J.lengthSq();if(Q===0)return this.set(0,0,0);let $=J.dot(this)/Q;return this.copy(J).multiplyScalar($)}projectOnPlane(J){return tQ.copy(this).projectOnVector(J),this.sub(tQ)}reflect(J){return this.sub(tQ.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(i0($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y,W=this.z-J.z;return Q*Q+$*$+W*W}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,Q,$){let W=Math.sin(Q)*J;return this.x=W*Math.sin($),this.y=Math.cos(Q)*J,this.z=W*Math.cos($),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,Q,$){return this.x=J*Math.sin(Q),this.y=$,this.z=J*Math.cos(Q),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this}setFromMatrixScale(J){let Q=this.setFromMatrixColumn(J,0).length(),$=this.setFromMatrixColumn(J,1).length(),W=this.setFromMatrixColumn(J,2).length();return this.x=Q,this.y=$,this.z=W,this}setFromMatrixColumn(J,Q){return this.fromArray(J.elements,Q*4)}setFromMatrix3Column(J,Q){return this.fromArray(J.elements,Q*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,Q=Math.random()*2-1,$=Math.sqrt(1-Q*Q);return this.x=$*Math.cos(J),this.y=Q,this.z=$*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var tQ=new h,gZ=new hJ;class x0{static{x0.prototype.isMatrix3=!0}constructor(J,Q,$,W,Z,H,K,Y,X){if(this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,Q,$,W,Z,H,K,Y,X)}set(J,Q,$,W,Z,H,K,Y,X){let U=this.elements;return U[0]=J,U[1]=W,U[2]=K,U[3]=Q,U[4]=Z,U[5]=Y,U[6]=$,U[7]=H,U[8]=X,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],this}extractBasis(J,Q,$){return J.setFromMatrix3Column(this,0),Q.setFromMatrix3Column(this,1),$.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let Q=J.elements;return this.set(Q[0],Q[4],Q[8],Q[1],Q[5],Q[9],Q[2],Q[6],Q[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,W=Q.elements,Z=this.elements,H=$[0],K=$[3],Y=$[6],X=$[1],U=$[4],E=$[7],N=$[2],G=$[5],q=$[8],R=W[0],k=W[3],F=W[6],O=W[1],z=W[4],A=W[7],V=W[2],I=W[5],P=W[8];return Z[0]=H*R+K*O+Y*V,Z[3]=H*k+K*z+Y*I,Z[6]=H*F+K*A+Y*P,Z[1]=X*R+U*O+E*V,Z[4]=X*k+U*z+E*I,Z[7]=X*F+U*A+E*P,Z[2]=N*R+G*O+q*V,Z[5]=N*k+G*z+q*I,Z[8]=N*F+G*A+q*P,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[3]*=J,Q[6]*=J,Q[1]*=J,Q[4]*=J,Q[7]*=J,Q[2]*=J,Q[5]*=J,Q[8]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[1],W=J[2],Z=J[3],H=J[4],K=J[5],Y=J[6],X=J[7],U=J[8];return Q*H*U-Q*K*X-$*Z*U+$*K*Y+W*Z*X-W*H*Y}invert(){let J=this.elements,Q=J[0],$=J[1],W=J[2],Z=J[3],H=J[4],K=J[5],Y=J[6],X=J[7],U=J[8],E=U*H-K*X,N=K*Y-U*Z,G=X*Z-H*Y,q=Q*E+$*N+W*G;if(q===0)return this.set(0,0,0,0,0,0,0,0,0);let R=1/q;return J[0]=E*R,J[1]=(W*X-U*$)*R,J[2]=(K*$-W*H)*R,J[3]=N*R,J[4]=(U*Q-W*Y)*R,J[5]=(W*Z-K*Q)*R,J[6]=G*R,J[7]=($*Y-X*Q)*R,J[8]=(H*Q-$*Z)*R,this}transpose(){let J,Q=this.elements;return J=Q[1],Q[1]=Q[3],Q[3]=J,J=Q[2],Q[2]=Q[6],Q[6]=J,J=Q[5],Q[5]=Q[7],Q[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let Q=this.elements;return J[0]=Q[0],J[1]=Q[3],J[2]=Q[6],J[3]=Q[1],J[4]=Q[4],J[5]=Q[7],J[6]=Q[2],J[7]=Q[5],J[8]=Q[8],this}setUvTransform(J,Q,$,W,Z,H,K){let Y=Math.cos(Z),X=Math.sin(Z);return this.set($*Y,$*X,-$*(Y*H+X*K)+H+J,-W*X,W*Y,-W*(-X*H+Y*K)+K+Q,0,0,1),this}scale(J,Q){return _6("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(eQ.makeScale(J,Q)),this}rotate(J){return _6("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(eQ.makeRotation(-J)),this}translate(J,Q){return _6("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(eQ.makeTranslation(J,Q)),this}makeTranslation(J,Q){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,Q,0,0,1);return this}makeRotation(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,$,Q,0,0,0,1),this}makeScale(J,Q){return this.set(J,0,0,0,Q,0,0,0,1),this}equals(J){let Q=this.elements,$=J.elements;for(let W=0;W<9;W++)if(Q[W]!==$[W])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<9;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var eQ=new x0,pZ=new x0().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),lZ=new x0().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function kX(){let J={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(Z,H,K){if(this.enabled===!1||H===K||!H||!K)return Z;if(this.spaces[H].transfer==="srgb")Z.r=s8(Z.r),Z.g=s8(Z.g),Z.b=s8(Z.b);if(this.spaces[H].primaries!==this.spaces[K].primaries)Z.applyMatrix3(this.spaces[H].toXYZ),Z.applyMatrix3(this.spaces[K].fromXYZ);if(this.spaces[K].transfer==="srgb")Z.r=q9(Z.r),Z.g=q9(Z.g),Z.b=q9(Z.b);return Z},workingToColorSpace:function(Z,H){return this.convert(Z,this.workingColorSpace,H)},colorSpaceToWorking:function(Z,H){return this.convert(Z,H,this.workingColorSpace)},getPrimaries:function(Z){return this.spaces[Z].primaries},getTransfer:function(Z){if(Z==="")return"linear";return this.spaces[Z].transfer},getToneMappingMode:function(Z){return this.spaces[Z].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(Z,H=this.workingColorSpace){return Z.fromArray(this.spaces[H].luminanceCoefficients)},define:function(Z){Object.assign(this.spaces,Z)},_getMatrix:function(Z,H,K){return Z.copy(this.spaces[H].toXYZ).multiply(this.spaces[K].fromXYZ)},_getDrawingBufferColorSpace:function(Z){return this.spaces[Z].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(Z=this.workingColorSpace){return this.spaces[Z].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(Z,H){return _6("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),J.workingToColorSpace(Z,H)},toWorkingColorSpace:function(Z,H){return _6("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),J.colorSpaceToWorking(Z,H)}},Q=[0.64,0.33,0.3,0.6,0.15,0.06],$=[0.2126,0.7152,0.0722],W=[0.3127,0.329];return J.define({["srgb-linear"]:{primaries:Q,whitePoint:W,transfer:"linear",toXYZ:pZ,fromXYZ:lZ,luminanceCoefficients:$,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:Q,whitePoint:W,transfer:"srgb",toXYZ:pZ,fromXYZ:lZ,luminanceCoefficients:$,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),J}var c0=kX();function s8(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function q9(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var o6;class zW{static getDataURL(J,Q="image/png"){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement>"u")return J.src;let $;if(J instanceof HTMLCanvasElement)$=J;else{if(o6===void 0)o6=F9("canvas");o6.width=J.width,o6.height=J.height;let W=o6.getContext("2d");if(J instanceof ImageData)W.putImageData(J,0,0);else W.drawImage(J,0,0,J.width,J.height);$=o6}return $.toDataURL(Q)}static sRGBToLinear(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap){let Q=F9("canvas");Q.width=J.width,Q.height=J.height;let $=Q.getContext("2d");$.drawImage(J,0,0,J.width,J.height);let W=$.getImageData(0,0,J.width,J.height),Z=W.data;for(let H=0;H<Z.length;H++)Z[H]=s8(Z[H]/255)*255;return $.putImageData(W,0,0),Q}else if(J.data){let Q=J.data.slice(0);for(let $=0;$<Q.length;$++)if(Q instanceof Uint8Array||Q instanceof Uint8ClampedArray)Q[$]=Math.floor(s8(Q[$]/255)*255);else Q[$]=s8(Q[$]);return{data:Q,width:J.width,height:J.height}}else return A0("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var BX=0;class H7{constructor(J=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:BX++}),this.uuid=V8(),this.data=J,this.dataReady=!0,this.version=0}getSize(J){let Q=this.data;if(typeof HTMLVideoElement<"u"&&Q instanceof HTMLVideoElement)J.set(Q.videoWidth,Q.videoHeight,0);else if(typeof VideoFrame<"u"&&Q instanceof VideoFrame)J.set(Q.displayWidth,Q.displayHeight,0);else if(Q!==null)J.set(Q.width,Q.height,Q.depth||0);else J.set(0,0,0);return J}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let $={uuid:this.uuid,url:""},W=this.data;if(W!==null){let Z;if(Array.isArray(W)){Z=[];for(let H=0,K=W.length;H<K;H++)if(W[H].isDataTexture)Z.push(J$(W[H].image));else Z.push(J$(W[H]))}else Z=J$(W);$.url=Z}if(!Q)J.images[this.uuid]=$;return $}}function J$(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap)return zW.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return A0("Texture: Unable to serialize Texture."),{}}var CX=0,Q$=new h;class BJ extends y8{constructor(J=BJ.DEFAULT_IMAGE,Q=BJ.DEFAULT_MAPPING,$=1001,W=1001,Z=1006,H=1008,K=1023,Y=1009,X=BJ.DEFAULT_ANISOTROPY,U=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:CX++}),this.uuid=V8(),this.name="",this.source=new H7(J),this.mipmaps=[],this.mapping=Q,this.channel=0,this.wrapS=$,this.wrapT=W,this.magFilter=Z,this.minFilter=H,this.anisotropy=X,this.format=K,this.internalFormat=null,this.type=Y,this.offset=new y0(0,0),this.repeat=new y0(1,1),this.center=new y0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new x0,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=U,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=J&&J.depth&&J.depth>1?!0:!1,this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Q$).x}get height(){return this.source.getSize(Q$).y}get depth(){return this.source.getSize(Q$).z}get image(){return this.source.data}set image(J){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.normalized=J.normalized,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.renderTarget=J.renderTarget,this.isRenderTargetTexture=J.isRenderTargetTexture,this.isArrayTexture=J.isArrayTexture,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}setValues(J){for(let Q in J){let $=J[Q];if($===void 0){A0(`Texture.setValues(): parameter '${Q}' has value of undefined.`);continue}let W=this[Q];if(W===void 0){A0(`Texture.setValues(): property '${Q}' does not exist.`);continue}if(W&&$&&(W.isVector2&&$.isVector2))W.copy($);else if(W&&$&&(W.isVector3&&$.isVector3))W.copy($);else if(W&&$&&(W.isMatrix3&&$.isMatrix3))W.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let $={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)$.userData=this.userData;if(!Q)J.textures[this.uuid]=$;return $}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}BJ.DEFAULT_IMAGE=null;BJ.DEFAULT_MAPPING=300;BJ.DEFAULT_ANISOTROPY=1;class YJ{static{YJ.prototype.isVector4=!0}constructor(J=0,Q=0,$=0,W=1){this.x=J,this.y=Q,this.z=$,this.w=W}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,Q,$,W){return this.x=J,this.y=Q,this.z=$,this.w=W,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;case 3:this.w=Q;break;default:throw Error("THREE.Vector4: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this.w=J.w+Q.w,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this.w+=J.w*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this.w=J.w-Q.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let Q=this.x,$=this.y,W=this.z,Z=this.w,H=J.elements;return this.x=H[0]*Q+H[4]*$+H[8]*W+H[12]*Z,this.y=H[1]*Q+H[5]*$+H[9]*W+H[13]*Z,this.z=H[2]*Q+H[6]*$+H[10]*W+H[14]*Z,this.w=H[3]*Q+H[7]*$+H[11]*W+H[15]*Z,this}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this.w/=J.w,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let Q=Math.sqrt(1-J.w*J.w);if(Q<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/Q,this.y=J.y/Q,this.z=J.z/Q;return this}setAxisAngleFromRotationMatrix(J){let Q,$,W,Z,H=0.01,K=0.1,Y=J.elements,X=Y[0],U=Y[4],E=Y[8],N=Y[1],G=Y[5],q=Y[9],R=Y[2],k=Y[6],F=Y[10];if(Math.abs(U-N)<0.01&&Math.abs(E-R)<0.01&&Math.abs(q-k)<0.01){if(Math.abs(U+N)<0.1&&Math.abs(E+R)<0.1&&Math.abs(q+k)<0.1&&Math.abs(X+G+F-3)<0.1)return this.set(1,0,0,0),this;Q=Math.PI;let z=(X+1)/2,A=(G+1)/2,V=(F+1)/2,I=(U+N)/4,P=(E+R)/4,_=(q+k)/4;if(z>A&&z>V)if(z<0.01)$=0,W=0.707106781,Z=0.707106781;else $=Math.sqrt(z),W=I/$,Z=P/$;else if(A>V)if(A<0.01)$=0.707106781,W=0,Z=0.707106781;else W=Math.sqrt(A),$=I/W,Z=_/W;else if(V<0.01)$=0.707106781,W=0.707106781,Z=0;else Z=Math.sqrt(V),$=P/Z,W=_/Z;return this.set($,W,Z,Q),this}let O=Math.sqrt((k-q)*(k-q)+(E-R)*(E-R)+(N-U)*(N-U));if(Math.abs(O)<0.001)O=1;return this.x=(k-q)/O,this.y=(E-R)/O,this.z=(N-U)/O,this.w=Math.acos((X+G+F-1)/2),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this.w=Q[15],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,Q){return this.x=i0(this.x,J.x,Q.x),this.y=i0(this.y,J.y,Q.y),this.z=i0(this.z,J.z,Q.z),this.w=i0(this.w,J.w,Q.w),this}clampScalar(J,Q){return this.x=i0(this.x,J,Q),this.y=i0(this.y,J,Q),this.z=i0(this.z,J,Q),this.w=i0(this.w,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(i0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this.w+=(J.w-this.w)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this.w=J.w+(Q.w-J.w)*$,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this.w=J[Q+3],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J[Q+3]=this.w,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this.w=J.getW(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class PW extends y8{constructor(J=1,Q=1,$={}){super();$=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},$),this.isRenderTarget=!0,this.width=J,this.height=Q,this.depth=$.depth,this.scissor=new YJ(0,0,J,Q),this.scissorTest=!1,this.viewport=new YJ(0,0,J,Q),this.textures=[];let W={width:J,height:Q,depth:$.depth},Z=new BJ(W),H=$.count;for(let K=0;K<H;K++)this.textures[K]=Z.clone(),this.textures[K].isRenderTargetTexture=!0,this.textures[K].renderTarget=this;this._setTextureOptions($),this.depthBuffer=$.depthBuffer,this.stencilBuffer=$.stencilBuffer,this.resolveColorBuffer=$.resolveColorBuffer,this.resolveDepthBuffer=$.resolveDepthBuffer,this.resolveStencilBuffer=$.resolveStencilBuffer,this.storeMultisampledColorBuffer=$.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=$.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=$.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=$.depthTexture,this.samples=$.samples,this.multiview=$.multiview,this.useArrayDepthTexture=$.useArrayDepthTexture}_setTextureOptions(J={}){let Q={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(J.mapping!==void 0)Q.mapping=J.mapping;if(J.wrapS!==void 0)Q.wrapS=J.wrapS;if(J.wrapT!==void 0)Q.wrapT=J.wrapT;if(J.wrapR!==void 0)Q.wrapR=J.wrapR;if(J.magFilter!==void 0)Q.magFilter=J.magFilter;if(J.minFilter!==void 0)Q.minFilter=J.minFilter;if(J.format!==void 0)Q.format=J.format;if(J.type!==void 0)Q.type=J.type;if(J.anisotropy!==void 0)Q.anisotropy=J.anisotropy;if(J.colorSpace!==void 0)Q.colorSpace=J.colorSpace;if(J.flipY!==void 0)Q.flipY=J.flipY;if(J.generateMipmaps!==void 0)Q.generateMipmaps=J.generateMipmaps;if(J.internalFormat!==void 0)Q.internalFormat=J.internalFormat;for(let $=0;$<this.textures.length;$++)this.textures[$].setValues(Q)}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}set depthTexture(J){if(this._depthTexture!==null&&this._depthTexture.renderTarget===this)this._depthTexture.renderTarget=null;if(J!==null&&J.renderTarget===null)J.renderTarget=this;this._depthTexture=J}get depthTexture(){return this._depthTexture}setSize(J,Q,$=1){if(this.width!==J||this.height!==Q||this.depth!==$){this.width=J,this.height=Q,this.depth=$;for(let W=0,Z=this.textures.length;W<Z;W++)if(this.textures[W].image.width=J,this.textures[W].image.height=Q,this.textures[W].image.depth=$,this.textures[W].isData3DTexture!==!0)this.textures[W].isArrayTexture=this.textures[W].image.depth>1;this.dispose()}this.viewport.set(0,0,J,Q),this.scissor.set(0,0,J,Q)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.textures.length=0;for(let Q=0,$=J.textures.length;Q<$;Q++){this.textures[Q]=J.textures[Q].clone(),this.textures[Q].isRenderTargetTexture=!0,this.textures[Q].renderTarget=this;let W=Object.assign({},J.textures[Q].image);this.textures[Q].source=new H7(W)}if(this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveColorBuffer=J.resolveColorBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,this.storeMultisampledColorBuffer=J.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=J.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=J.storeMultisampledStencilBuffer,J.depthTexture!==null)if(J.depthTexture.renderTarget===J){let Q=J.depthTexture.clone();Q.renderTarget=null,this.depthTexture=Q}else this.depthTexture=J.depthTexture;return this.samples=J.samples,this.multiview=J.multiview,this.useArrayDepthTexture=J.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class W8 extends PW{constructor(J=1,Q=1,$={}){super(J,Q,$);this.isWebGLRenderTarget=!0}}class DQ extends BJ{constructor(J=null,Q=1,$=1,W=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:Q,height:$,depth:W},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(J){return super.copy(J),this.wrapR=J.wrapR,this}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class _W extends BJ{constructor(J=null,Q=1,$=1,W=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:Q,height:$,depth:W},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(J){return super.copy(J),this.wrapR=J.wrapR,this}}class b0{static{b0.prototype.isMatrix4=!0}constructor(J,Q,$,W,Z,H,K,Y,X,U,E,N,G,q,R,k){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,Q,$,W,Z,H,K,Y,X,U,E,N,G,q,R,k)}set(J,Q,$,W,Z,H,K,Y,X,U,E,N,G,q,R,k){let F=this.elements;return F[0]=J,F[4]=Q,F[8]=$,F[12]=W,F[1]=Z,F[5]=H,F[9]=K,F[13]=Y,F[2]=X,F[6]=U,F[10]=E,F[14]=N,F[3]=G,F[7]=q,F[11]=R,F[15]=k,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new b0().fromArray(this.elements)}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],Q[9]=$[9],Q[10]=$[10],Q[11]=$[11],Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],Q[15]=$[15],this}copyPosition(J){let Q=this.elements,$=J.elements;return Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],this}setFromMatrix3(J){let Q=J.elements;return this.set(Q[0],Q[3],Q[6],0,Q[1],Q[4],Q[7],0,Q[2],Q[5],Q[8],0,0,0,0,1),this}extractBasis(J,Q,$){if(this.determinantAffine()===0)return J.set(1,0,0),Q.set(0,1,0),$.set(0,0,1),this;return J.setFromMatrixColumn(this,0),Q.setFromMatrixColumn(this,1),$.setFromMatrixColumn(this,2),this}makeBasis(J,Q,$){return this.set(J.x,Q.x,$.x,0,J.y,Q.y,$.y,0,J.z,Q.z,$.z,0,0,0,0,1),this}extractRotation(J){if(J.determinantAffine()===0)return this.identity();let Q=this.elements,$=J.elements,W=1/a6.setFromMatrixColumn(J,0).length(),Z=1/a6.setFromMatrixColumn(J,1).length(),H=1/a6.setFromMatrixColumn(J,2).length();return Q[0]=$[0]*W,Q[1]=$[1]*W,Q[2]=$[2]*W,Q[3]=0,Q[4]=$[4]*Z,Q[5]=$[5]*Z,Q[6]=$[6]*Z,Q[7]=0,Q[8]=$[8]*H,Q[9]=$[9]*H,Q[10]=$[10]*H,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromEuler(J){let Q=this.elements,$=J.x,W=J.y,Z=J.z,H=Math.cos($),K=Math.sin($),Y=Math.cos(W),X=Math.sin(W),U=Math.cos(Z),E=Math.sin(Z);if(J.order==="XYZ"){let N=H*U,G=H*E,q=K*U,R=K*E;Q[0]=Y*U,Q[4]=-Y*E,Q[8]=X,Q[1]=G+q*X,Q[5]=N-R*X,Q[9]=-K*Y,Q[2]=R-N*X,Q[6]=q+G*X,Q[10]=H*Y}else if(J.order==="YXZ"){let N=Y*U,G=Y*E,q=X*U,R=X*E;Q[0]=N+R*K,Q[4]=q*K-G,Q[8]=H*X,Q[1]=H*E,Q[5]=H*U,Q[9]=-K,Q[2]=G*K-q,Q[6]=R+N*K,Q[10]=H*Y}else if(J.order==="ZXY"){let N=Y*U,G=Y*E,q=X*U,R=X*E;Q[0]=N-R*K,Q[4]=-H*E,Q[8]=q+G*K,Q[1]=G+q*K,Q[5]=H*U,Q[9]=R-N*K,Q[2]=-H*X,Q[6]=K,Q[10]=H*Y}else if(J.order==="ZYX"){let N=H*U,G=H*E,q=K*U,R=K*E;Q[0]=Y*U,Q[4]=q*X-G,Q[8]=N*X+R,Q[1]=Y*E,Q[5]=R*X+N,Q[9]=G*X-q,Q[2]=-X,Q[6]=K*Y,Q[10]=H*Y}else if(J.order==="YZX"){let N=H*Y,G=H*X,q=K*Y,R=K*X;Q[0]=Y*U,Q[4]=R-N*E,Q[8]=q*E+G,Q[1]=E,Q[5]=H*U,Q[9]=-K*U,Q[2]=-X*U,Q[6]=G*E+q,Q[10]=N-R*E}else if(J.order==="XZY"){let N=H*Y,G=H*X,q=K*Y,R=K*X;Q[0]=Y*U,Q[4]=-E,Q[8]=X*U,Q[1]=N*E+R,Q[5]=H*U,Q[9]=G*E-q,Q[2]=q*E-G,Q[6]=K*U,Q[10]=R*E+N}return Q[3]=0,Q[7]=0,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromQuaternion(J){return this.compose(IX,J,wX)}lookAt(J,Q,$){let W=this.elements;if(tJ.subVectors(J,Q),tJ.lengthSq()===0)tJ.z=1;if(tJ.normalize(),H6.crossVectors($,tJ),H6.lengthSq()===0){if(Math.abs($.z)===1)tJ.x+=0.0001;else tJ.z+=0.0001;tJ.normalize(),H6.crossVectors($,tJ)}return H6.normalize(),_7.crossVectors(tJ,H6),W[0]=H6.x,W[4]=_7.x,W[8]=tJ.x,W[1]=H6.y,W[5]=_7.y,W[9]=tJ.y,W[2]=H6.z,W[6]=_7.z,W[10]=tJ.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,W=Q.elements,Z=this.elements,H=$[0],K=$[4],Y=$[8],X=$[12],U=$[1],E=$[5],N=$[9],G=$[13],q=$[2],R=$[6],k=$[10],F=$[14],O=$[3],z=$[7],A=$[11],V=$[15],I=W[0],P=W[4],_=W[8],M=W[12],C=W[1],l=W[5],y=W[9],b=W[13],e=W[2],S=W[6],u=W[10],Q0=W[14],d=W[3],Y0=W[7],r=W[11],$0=W[15];return Z[0]=H*I+K*C+Y*e+X*d,Z[4]=H*P+K*l+Y*S+X*Y0,Z[8]=H*_+K*y+Y*u+X*r,Z[12]=H*M+K*b+Y*Q0+X*$0,Z[1]=U*I+E*C+N*e+G*d,Z[5]=U*P+E*l+N*S+G*Y0,Z[9]=U*_+E*y+N*u+G*r,Z[13]=U*M+E*b+N*Q0+G*$0,Z[2]=q*I+R*C+k*e+F*d,Z[6]=q*P+R*l+k*S+F*Y0,Z[10]=q*_+R*y+k*u+F*r,Z[14]=q*M+R*b+k*Q0+F*$0,Z[3]=O*I+z*C+A*e+V*d,Z[7]=O*P+z*l+A*S+V*Y0,Z[11]=O*_+z*y+A*u+V*r,Z[15]=O*M+z*b+A*Q0+V*$0,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[4]*=J,Q[8]*=J,Q[12]*=J,Q[1]*=J,Q[5]*=J,Q[9]*=J,Q[13]*=J,Q[2]*=J,Q[6]*=J,Q[10]*=J,Q[14]*=J,Q[3]*=J,Q[7]*=J,Q[11]*=J,Q[15]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[4],W=J[8],Z=J[12],H=J[1],K=J[5],Y=J[9],X=J[13],U=J[2],E=J[6],N=J[10],G=J[14],q=J[3],R=J[7],k=J[11],F=J[15],O=Y*G-X*N,z=K*G-X*E,A=K*N-Y*E,V=H*G-X*U,I=H*N-Y*U,P=H*E-K*U;return Q*(R*O-k*z+F*A)-$*(q*O-k*V+F*I)+W*(q*z-R*V+F*P)-Z*(q*A-R*I+k*P)}determinantAffine(){let J=this.elements,Q=J[0],$=J[4],W=J[8],Z=J[1],H=J[5],K=J[9],Y=J[2],X=J[6],U=J[10];return Q*(H*U-K*X)-$*(Z*U-K*Y)+W*(Z*X-H*Y)}transpose(){let J=this.elements,Q;return Q=J[1],J[1]=J[4],J[4]=Q,Q=J[2],J[2]=J[8],J[8]=Q,Q=J[6],J[6]=J[9],J[9]=Q,Q=J[3],J[3]=J[12],J[12]=Q,Q=J[7],J[7]=J[13],J[13]=Q,Q=J[11],J[11]=J[14],J[14]=Q,this}setPosition(J,Q,$){let W=this.elements;if(J.isVector3)W[12]=J.x,W[13]=J.y,W[14]=J.z;else W[12]=J,W[13]=Q,W[14]=$;return this}invert(){let J=this.elements,Q=J[0],$=J[1],W=J[2],Z=J[3],H=J[4],K=J[5],Y=J[6],X=J[7],U=J[8],E=J[9],N=J[10],G=J[11],q=J[12],R=J[13],k=J[14],F=J[15],O=Q*K-$*H,z=Q*Y-W*H,A=Q*X-Z*H,V=$*Y-W*K,I=$*X-Z*K,P=W*X-Z*Y,_=U*R-E*q,M=U*k-N*q,C=U*F-G*q,l=E*k-N*R,y=E*F-G*R,b=N*F-G*k,e=O*b-z*y+A*l+V*C-I*M+P*_;if(e===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/e;return J[0]=(K*b-Y*y+X*l)*S,J[1]=(W*y-$*b-Z*l)*S,J[2]=(R*P-k*I+F*V)*S,J[3]=(N*I-E*P-G*V)*S,J[4]=(Y*C-H*b-X*M)*S,J[5]=(Q*b-W*C+Z*M)*S,J[6]=(k*A-q*P-F*z)*S,J[7]=(U*P-N*A+G*z)*S,J[8]=(H*y-K*C+X*_)*S,J[9]=($*C-Q*y-Z*_)*S,J[10]=(q*I-R*A+F*O)*S,J[11]=(E*A-U*I-G*O)*S,J[12]=(K*M-H*l-Y*_)*S,J[13]=(Q*l-$*M+W*_)*S,J[14]=(R*z-q*V-k*O)*S,J[15]=(U*V-E*z+N*O)*S,this}scale(J){let Q=this.elements,$=J.x,W=J.y,Z=J.z;return Q[0]*=$,Q[4]*=W,Q[8]*=Z,Q[1]*=$,Q[5]*=W,Q[9]*=Z,Q[2]*=$,Q[6]*=W,Q[10]*=Z,Q[3]*=$,Q[7]*=W,Q[11]*=Z,this}getMaxScaleOnAxis(){let J=this.elements,Q=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],$=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],W=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max(Q,$,W))}makeTranslation(J,Q,$){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,Q,0,0,1,$,0,0,0,1);return this}makeRotationX(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(1,0,0,0,0,Q,-$,0,0,$,Q,0,0,0,0,1),this}makeRotationY(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,0,$,0,0,1,0,0,-$,0,Q,0,0,0,0,1),this}makeRotationZ(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,0,$,Q,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,Q){let $=Math.cos(Q),W=Math.sin(Q),Z=1-$,H=J.x,K=J.y,Y=J.z,X=Z*H,U=Z*K;return this.set(X*H+$,X*K-W*Y,X*Y+W*K,0,X*K+W*Y,U*K+$,U*Y-W*H,0,X*Y-W*K,U*Y+W*H,Z*Y*Y+$,0,0,0,0,1),this}makeScale(J,Q,$){return this.set(J,0,0,0,0,Q,0,0,0,0,$,0,0,0,0,1),this}makeShear(J,Q,$,W,Z,H){return this.set(1,$,Z,0,J,1,H,0,Q,W,1,0,0,0,0,1),this}compose(J,Q,$){let W=this.elements,Z=Q._x,H=Q._y,K=Q._z,Y=Q._w,X=Z+Z,U=H+H,E=K+K,N=Z*X,G=Z*U,q=Z*E,R=H*U,k=H*E,F=K*E,O=Y*X,z=Y*U,A=Y*E,V=$.x,I=$.y,P=$.z;return W[0]=(1-(R+F))*V,W[1]=(G+A)*V,W[2]=(q-z)*V,W[3]=0,W[4]=(G-A)*I,W[5]=(1-(N+F))*I,W[6]=(k+O)*I,W[7]=0,W[8]=(q+z)*P,W[9]=(k-O)*P,W[10]=(1-(N+R))*P,W[11]=0,W[12]=J.x,W[13]=J.y,W[14]=J.z,W[15]=1,this}decompose(J,Q,$){let W=this.elements;J.x=W[12],J.y=W[13],J.z=W[14];let Z=this.determinantAffine();if(Z===0)return $.set(1,1,1),Q.identity(),this;let H=a6.set(W[0],W[1],W[2]).length(),K=a6.set(W[4],W[5],W[6]).length(),Y=a6.set(W[8],W[9],W[10]).length();if(Z<0)H=-H;R8.copy(this);let X=1/H,U=1/K,E=1/Y;return R8.elements[0]*=X,R8.elements[1]*=X,R8.elements[2]*=X,R8.elements[4]*=U,R8.elements[5]*=U,R8.elements[6]*=U,R8.elements[8]*=E,R8.elements[9]*=E,R8.elements[10]*=E,Q.setFromRotationMatrix(R8),$.x=H,$.y=K,$.z=Y,this}makePerspective(J,Q,$,W,Z,H,K=2000,Y=!1){let X=this.elements,U=2*Z/(Q-J),E=2*Z/($-W),N=(Q+J)/(Q-J),G=($+W)/($-W),q,R;if(Y)q=Z/(H-Z),R=H*Z/(H-Z);else if(K===2000)q=-(H+Z)/(H-Z),R=-2*H*Z/(H-Z);else if(K===2001)q=-H/(H-Z),R=-H*Z/(H-Z);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+K);return X[0]=U,X[4]=0,X[8]=N,X[12]=0,X[1]=0,X[5]=E,X[9]=G,X[13]=0,X[2]=0,X[6]=0,X[10]=q,X[14]=R,X[3]=0,X[7]=0,X[11]=-1,X[15]=0,this}makeOrthographic(J,Q,$,W,Z,H,K=2000,Y=!1){let X=this.elements,U=2/(Q-J),E=2/($-W),N=-(Q+J)/(Q-J),G=-($+W)/($-W),q,R;if(Y)q=1/(H-Z),R=H/(H-Z);else if(K===2000)q=-2/(H-Z),R=-(H+Z)/(H-Z);else if(K===2001)q=-1/(H-Z),R=-Z/(H-Z);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+K);return X[0]=U,X[4]=0,X[8]=0,X[12]=N,X[1]=0,X[5]=E,X[9]=0,X[13]=G,X[2]=0,X[6]=0,X[10]=q,X[14]=R,X[3]=0,X[7]=0,X[11]=0,X[15]=1,this}equals(J){let Q=this.elements,$=J.elements;for(let W=0;W<16;W++)if(Q[W]!==$[W])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<16;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J[Q+9]=$[9],J[Q+10]=$[10],J[Q+11]=$[11],J[Q+12]=$[12],J[Q+13]=$[13],J[Q+14]=$[14],J[Q+15]=$[15],J}}var a6=new h,R8=new b0,IX=new h(0,0,0),wX=new h(1,1,1),H6=new h,_7=new h,tJ=new h,mZ=new b0,dZ=new hJ;class i8{constructor(J=0,Q=0,$=0,W=i8.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=Q,this._z=$,this._order=W}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,Q,$,W=this._order){return this._x=J,this._y=Q,this._z=$,this._order=W,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,Q=this._order,$=!0){let W=J.elements,Z=W[0],H=W[4],K=W[8],Y=W[1],X=W[5],U=W[9],E=W[2],N=W[6],G=W[10];switch(Q){case"XYZ":if(this._y=Math.asin(i0(K,-1,1)),Math.abs(K)<0.9999999)this._x=Math.atan2(-U,G),this._z=Math.atan2(-H,Z);else this._x=Math.atan2(N,X),this._z=0;break;case"YXZ":if(this._x=Math.asin(-i0(U,-1,1)),Math.abs(U)<0.9999999)this._y=Math.atan2(K,G),this._z=Math.atan2(Y,X);else this._y=Math.atan2(-E,Z),this._z=0;break;case"ZXY":if(this._x=Math.asin(i0(N,-1,1)),Math.abs(N)<0.9999999)this._y=Math.atan2(-E,G),this._z=Math.atan2(-H,X);else this._y=0,this._z=Math.atan2(Y,Z);break;case"ZYX":if(this._y=Math.asin(-i0(E,-1,1)),Math.abs(E)<0.9999999)this._x=Math.atan2(N,G),this._z=Math.atan2(Y,Z);else this._x=0,this._z=Math.atan2(-H,X);break;case"YZX":if(this._z=Math.asin(i0(Y,-1,1)),Math.abs(Y)<0.9999999)this._x=Math.atan2(-U,X),this._y=Math.atan2(-E,Z);else this._x=0,this._y=Math.atan2(K,G);break;case"XZY":if(this._z=Math.asin(-i0(H,-1,1)),Math.abs(H)<0.9999999)this._x=Math.atan2(N,X),this._y=Math.atan2(K,Z);else this._x=Math.atan2(-U,G),this._y=0;break;default:A0("Euler: .setFromRotationMatrix() encountered an unknown order: "+Q)}if(this._order=Q,$===!0)this._onChangeCallback();return this}setFromQuaternion(J,Q,$){return mZ.makeRotationFromQuaternion(J),this.setFromRotationMatrix(mZ,Q,$)}setFromVector3(J,Q=this._order){return this.set(J.x,J.y,J.z,Q)}reorder(J){return dZ.setFromEuler(this),this.setFromQuaternion(dZ,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}i8.DEFAULT_ORDER="XYZ";class K7{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var zX=0,uZ=new h,r6=new hJ,l8=new b0,A7=new h,g9=new h,PX=new h,_X=new hJ,cZ=new h(1,0,0),nZ=new h(0,1,0),sZ=new h(0,0,1),iZ={type:"added"},AX={type:"removed"},t6={type:"childadded",child:null},$$={type:"childremoved",child:null};class KJ extends y8{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:zX++}),this.uuid=V8(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=KJ.DEFAULT_UP.clone();let J=new h,Q=new i8,$=new hJ,W=new h(1,1,1);function Z(){$.setFromEuler(Q,!1)}function H(){Q.setFromQuaternion($,void 0,!1)}Q._onChange(Z),$._onChange(H),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:Q},quaternion:{configurable:!0,enumerable:!0,value:$},scale:{configurable:!0,enumerable:!0,value:W},modelViewMatrix:{value:new b0},normalMatrix:{value:new x0}}),this.matrix=new b0,this.matrixWorld=new b0,this.matrixAutoUpdate=KJ.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=KJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new K7,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,Q){this.quaternion.setFromAxisAngle(J,Q)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,Q){return r6.setFromAxisAngle(J,Q),this.quaternion.multiply(r6),this}rotateOnWorldAxis(J,Q){return r6.setFromAxisAngle(J,Q),this.quaternion.premultiply(r6),this}rotateX(J){return this.rotateOnAxis(cZ,J)}rotateY(J){return this.rotateOnAxis(nZ,J)}rotateZ(J){return this.rotateOnAxis(sZ,J)}translateOnAxis(J,Q){return uZ.copy(J).applyQuaternion(this.quaternion),this.position.add(uZ.multiplyScalar(Q)),this}translateX(J){return this.translateOnAxis(cZ,J)}translateY(J){return this.translateOnAxis(nZ,J)}translateZ(J){return this.translateOnAxis(sZ,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(l8.copy(this.matrixWorld).invert())}lookAt(J,Q,$){if(J.isVector3)A7.copy(J);else A7.set(J,Q,$);let W=this.parent;if(this.updateWorldMatrix(!0,!1),g9.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)l8.lookAt(g9,A7,this.up);else l8.lookAt(A7,g9,this.up);if(this.quaternion.setFromRotationMatrix(l8),W)l8.extractRotation(W.matrixWorld),r6.setFromRotationMatrix(l8),this.quaternion.premultiply(r6.invert())}add(J){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.add(arguments[Q]);return this}if(J===this)return f0("Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(iZ),t6.child=J,this.dispatchEvent(t6),t6.child=null;else f0("Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let $=0;$<arguments.length;$++)this.remove(arguments[$]);return this}let Q=this.children.indexOf(J);if(Q!==-1)J.parent=null,this.children.splice(Q,1),J.dispatchEvent(AX),$$.child=J,this.dispatchEvent($$),$$.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),l8.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),l8.multiply(J.parent.matrixWorld);return J.applyMatrix4(l8),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(iZ),t6.child=J,this.dispatchEvent(t6),t6.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,Q){if(this[J]===Q)return this;for(let $=0,W=this.children.length;$<W;$++){let H=this.children[$].getObjectByProperty(J,Q);if(H!==void 0)return H}return}getObjectsByProperty(J,Q,$=[]){if(this[J]===Q)$.push(this);let W=this.children;for(let Z=0,H=W.length;Z<H;Z++)W[Z].getObjectsByProperty(J,Q,$);return $}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(g9,J,PX),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(g9,_X,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let Q=this.matrixWorld.elements;return J.set(Q[8],Q[9],Q[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(J){J(this);let Q=this.children;for(let $=0,W=Q.length;$<W;$++)Q[$].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let Q=this.children;for(let $=0,W=Q.length;$<W;$++)Q[$].traverseVisible(J)}traverseAncestors(J){let Q=this.parent;if(Q!==null)J(Q),Q.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let J=this.pivot;if(J!==null){let{x:Q,y:$,z:W}=J,Z=this.matrix.elements;Z[12]+=Q-Z[0]*Q-Z[4]*$-Z[8]*W,Z[13]+=$-Z[1]*Q-Z[5]*$-Z[9]*W,Z[14]+=W-Z[2]*Q-Z[6]*$-Z[10]*W}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let Q=this.children;for(let $=0,W=Q.length;$<W;$++)Q[$].updateMatrixWorld(J)}updateWorldMatrix(J,Q,$=!1){let W=this.parent;if(J===!0&&W!==null)W.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||$){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,$=!0}if(Q===!0){let Z=this.children;for(let H=0,K=Z.length;H<K;H++)Z[H].updateWorldMatrix(!1,!0,$)}}toJSON(J){let Q=J===void 0||typeof J==="string",$={};if(Q)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},$.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let W={};if(W.uuid=this.uuid,W.type=this.type,W.name=this.name,W.castShadow=this.castShadow,W.receiveShadow=this.receiveShadow,W.visible=this.visible,W.frustumCulled=this.frustumCulled,W.renderOrder=this.renderOrder,W.static=this.static,W.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0)W.userData=this.userData;if(W.layers=this.layers.mask,W.matrix=this.matrix.toArray(),W.up=this.up.toArray(),this.pivot!==null)W.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==void 0)W.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)W.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(W.type="InstancedMesh",W.count=this.count,W.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)W.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(W.type="BatchedMesh",W.perObjectFrustumCulled=this.perObjectFrustumCulled,W.sortObjects=this.sortObjects,W.drawRanges=this._drawRanges,W.reservedRanges=this._reservedRanges,W.geometryInfo=this._geometryInfo.map((K)=>({...K,boundingBox:K.boundingBox?K.boundingBox.toJSON():void 0,boundingSphere:K.boundingSphere?K.boundingSphere.toJSON():void 0})),W.instanceInfo=this._instanceInfo.map((K)=>({...K})),W.availableInstanceIds=this._availableInstanceIds.slice(),W.availableGeometryIds=this._availableGeometryIds.slice(),W.nextIndexStart=this._nextIndexStart,W.nextVertexStart=this._nextVertexStart,W.geometryCount=this._geometryCount,W.maxInstanceCount=this._maxInstanceCount,W.maxVertexCount=this._maxVertexCount,W.maxIndexCount=this._maxIndexCount,W.geometryInitialized=this._geometryInitialized,W.matricesTexture=this._matricesTexture.toJSON(J),W.indirectTexture=this._indirectTexture.toJSON(J),this._colorsTexture!==null)W.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)W.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)W.boundingBox=this.boundingBox.toJSON()}function Z(K,Y){if(K[Y.uuid]===void 0)K[Y.uuid]=Y.toJSON(J);return Y.uuid}if(this.isScene){if(this.background){if(this.background.isColor)W.background=this.background.toJSON();else if(this.background.isTexture)W.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)W.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){W.geometry=Z(J.geometries,this.geometry);let K=this.geometry.parameters;if(K!==void 0&&K.shapes!==void 0){let Y=K.shapes;if(Array.isArray(Y))for(let X=0,U=Y.length;X<U;X++){let E=Y[X];Z(J.shapes,E)}else Z(J.shapes,Y)}}if(this.isSkinnedMesh){if(W.bindMode=this.bindMode,W.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)Z(J.skeletons,this.skeleton),W.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let K=[];for(let Y=0,X=this.material.length;Y<X;Y++)K.push(Z(J.materials,this.material[Y]));W.material=K}else W.material=Z(J.materials,this.material);if(this.children.length>0){W.children=[];for(let K=0;K<this.children.length;K++)W.children.push(this.children[K].toJSON(J).object)}if(this.animations.length>0){W.animations=[];for(let K=0;K<this.animations.length;K++){let Y=this.animations[K];W.animations.push(Z(J.animations,Y))}}if(Q){let K=H(J.geometries),Y=H(J.materials),X=H(J.textures),U=H(J.images),E=H(J.shapes),N=H(J.skeletons),G=H(J.animations),q=H(J.nodes);if(K.length>0)$.geometries=K;if(Y.length>0)$.materials=Y;if(X.length>0)$.textures=X;if(U.length>0)$.images=U;if(E.length>0)$.shapes=E;if(N.length>0)$.skeletons=N;if(G.length>0)$.animations=G;if(q.length>0)$.nodes=q}return $.object=W,$;function H(K){let Y=[];for(let X in K){let U=K[X];delete U.metadata,Y.push(U)}return Y}}clone(J){return new this.constructor().copy(this,J)}copy(J,Q=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.pivot=J.pivot!==null?J.pivot.clone():null,this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.static=J.static,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),Q===!0)for(let $=0;$<J.children.length;$++){let W=J.children[$];this.add(W.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}KJ.DEFAULT_UP=new h(0,1,0);KJ.DEFAULT_MATRIX_AUTO_UPDATE=!0;KJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class sJ extends KJ{constructor(){super();this.isGroup=!0,this.type="Group"}}var TX={type:"move"};class Y7{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new sJ,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new sJ,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new h,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new h;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new sJ,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new h,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new h,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let Q=this._hand;if(Q)for(let $ of J.hand.values())this._getHandJoint(Q,$)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,Q,$){let W=null,Z=null,H=null,K=this._targetRay,Y=this._grip,X=this._hand;if(J&&Q.session.visibilityState!=="visible-blurred"){if(X&&J.hand){H=!0;for(let R of J.hand.values()){let k=Q.getJointPose(R,$),F=this._getHandJoint(X,R);if(k!==null)F.matrix.fromArray(k.transform.matrix),F.matrix.decompose(F.position,F.rotation,F.scale),F.matrixWorldNeedsUpdate=!0,F.jointRadius=k.radius;F.visible=k!==null}let U=X.joints["index-finger-tip"],E=X.joints["thumb-tip"],N=U.position.distanceTo(E.position),G=0.02,q=0.005;if(X.inputState.pinching&&N>G+q)X.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!X.inputState.pinching&&N<=G-q)X.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(Y!==null&&J.gripSpace){if(Z=Q.getPose(J.gripSpace,$),Z!==null){if(Y.matrix.fromArray(Z.transform.matrix),Y.matrix.decompose(Y.position,Y.rotation,Y.scale),Y.matrixWorldNeedsUpdate=!0,Z.linearVelocity)Y.hasLinearVelocity=!0,Y.linearVelocity.copy(Z.linearVelocity);else Y.hasLinearVelocity=!1;if(Z.angularVelocity)Y.hasAngularVelocity=!0,Y.angularVelocity.copy(Z.angularVelocity);else Y.hasAngularVelocity=!1;if(Y.eventsEnabled)Y.dispatchEvent({type:"gripUpdated",data:J,target:this})}}if(K!==null){if(W=Q.getPose(J.targetRaySpace,$),W===null&&Z!==null)W=Z;if(W!==null){if(K.matrix.fromArray(W.transform.matrix),K.matrix.decompose(K.position,K.rotation,K.scale),K.matrixWorldNeedsUpdate=!0,W.linearVelocity)K.hasLinearVelocity=!0,K.linearVelocity.copy(W.linearVelocity);else K.hasLinearVelocity=!1;if(W.angularVelocity)K.hasAngularVelocity=!0,K.angularVelocity.copy(W.angularVelocity);else K.hasAngularVelocity=!1;this.dispatchEvent(TX)}}}if(K!==null)K.visible=W!==null;if(Y!==null)Y.visible=Z!==null;if(X!==null)X.visible=H!==null;return this}_getHandJoint(J,Q){if(J.joints[Q.jointName]===void 0){let $=new sJ;$.matrixAutoUpdate=!1,$.visible=!1,J.joints[Q.jointName]=$,J.add($)}return J.joints[Q.jointName]}}var kK={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},K6={h:0,s:0,l:0},T7={h:0,s:0,l:0};function W$(J,Q,$){if($<0)$+=1;if($>1)$-=1;if($<0.16666666666666666)return J+(Q-J)*6*$;if($<0.5)return Q;if($<0.6666666666666666)return J+(Q-J)*6*(0.6666666666666666-$);return J}class j0{constructor(J,Q,$){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,Q,$)}set(J,Q,$){if(Q===void 0&&$===void 0){let W=J;if(W&&W.isColor)this.copy(W);else if(typeof W==="number")this.setHex(W);else if(typeof W==="string")this.setStyle(W)}else this.setRGB(J,Q,$);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,Q="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,c0.colorSpaceToWorking(this,Q),this}setRGB(J,Q,$,W=c0.workingColorSpace){return this.r=J,this.g=Q,this.b=$,c0.colorSpaceToWorking(this,W),this}setHSL(J,Q,$,W=c0.workingColorSpace){if(J=IW(J,1),Q=i0(Q,0,1),$=i0($,0,1),Q===0)this.r=this.g=this.b=$;else{let Z=$<=0.5?$*(1+Q):$+Q-$*Q,H=2*$-Z;this.r=W$(H,Z,J+0.3333333333333333),this.g=W$(H,Z,J),this.b=W$(H,Z,J-0.3333333333333333)}return c0.colorSpaceToWorking(this,W),this}setStyle(J,Q="srgb"){function $(Z){if(Z===void 0)return;if(parseFloat(Z)<1)A0("Color: Alpha component of "+J+" will be ignored.")}let W;if(W=/^(\w+)\(([^\)]*)\)/.exec(J)){let Z,H=W[1],K=W[2];switch(H){case"rgb":case"rgba":if(Z=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(K))return $(Z[4]),this.setRGB(Math.min(255,parseInt(Z[1],10))/255,Math.min(255,parseInt(Z[2],10))/255,Math.min(255,parseInt(Z[3],10))/255,Q);if(Z=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(K))return $(Z[4]),this.setRGB(Math.min(100,parseInt(Z[1],10))/100,Math.min(100,parseInt(Z[2],10))/100,Math.min(100,parseInt(Z[3],10))/100,Q);break;case"hsl":case"hsla":if(Z=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(K))return $(Z[4]),this.setHSL(parseFloat(Z[1])/360,parseFloat(Z[2])/100,parseFloat(Z[3])/100,Q);break;default:A0("Color: Unknown color model "+J)}}else if(W=/^\#([A-Fa-f\d]+)$/.exec(J)){let Z=W[1],H=Z.length;if(H===3)return this.setRGB(parseInt(Z.charAt(0),16)/15,parseInt(Z.charAt(1),16)/15,parseInt(Z.charAt(2),16)/15,Q);else if(H===6)return this.setHex(parseInt(Z,16),Q);else A0("Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,Q);return this}setColorName(J,Q="srgb"){let $=kK[J.toLowerCase()];if($!==void 0)this.setHex($,Q);else A0("Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=s8(J.r),this.g=s8(J.g),this.b=s8(J.b),this}copyLinearToSRGB(J){return this.r=q9(J.r),this.g=q9(J.g),this.b=q9(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return c0.workingToColorSpace(pJ.copy(this),J),Math.round(i0(pJ.r*255,0,255))*65536+Math.round(i0(pJ.g*255,0,255))*256+Math.round(i0(pJ.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,Q=c0.workingColorSpace){c0.workingToColorSpace(pJ.copy(this),Q);let{r:$,g:W,b:Z}=pJ,H=Math.max($,W,Z),K=Math.min($,W,Z),Y,X,U=(K+H)/2;if(K===H)Y=0,X=0;else{let E=H-K;switch(X=U<=0.5?E/(H+K):E/(2-H-K),H){case $:Y=(W-Z)/E+(W<Z?6:0);break;case W:Y=(Z-$)/E+2;break;case Z:Y=($-W)/E+4;break}Y/=6}return J.h=Y,J.s=X,J.l=U,J}getRGB(J,Q=c0.workingColorSpace){return c0.workingToColorSpace(pJ.copy(this),Q),J.r=pJ.r,J.g=pJ.g,J.b=pJ.b,J}getStyle(J="srgb"){c0.workingToColorSpace(pJ.copy(this),J);let{r:Q,g:$,b:W}=pJ;if(J!=="srgb")return`color(${J} ${Q.toFixed(3)} ${$.toFixed(3)} ${W.toFixed(3)})`;return`rgb(${Math.round(Q*255)},${Math.round($*255)},${Math.round(W*255)})`}offsetHSL(J,Q,$){return this.getHSL(K6),this.setHSL(K6.h+J,K6.s+Q,K6.l+$)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,Q){return this.r=J.r+Q.r,this.g=J.g+Q.g,this.b=J.b+Q.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,Q){return this.r+=(J.r-this.r)*Q,this.g+=(J.g-this.g)*Q,this.b+=(J.b-this.b)*Q,this}lerpColors(J,Q,$){return this.r=J.r+(Q.r-J.r)*$,this.g=J.g+(Q.g-J.g)*$,this.b=J.b+(Q.b-J.b)*$,this}lerpHSL(J,Q){this.getHSL(K6),J.getHSL(T7);let $=r9(K6.h,T7.h,Q),W=r9(K6.s,T7.s,Q),Z=r9(K6.l,T7.l,Q);return this.setHSL($,W,Z),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let Q=this.r,$=this.g,W=this.b,Z=J.elements;return this.r=Z[0]*Q+Z[3]*$+Z[6]*W,this.g=Z[1]*Q+Z[4]*$+Z[7]*W,this.b=Z[2]*Q+Z[5]*$+Z[8]*W,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,Q=0){return this.r=J[Q],this.g=J[Q+1],this.b=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.r,J[Q+1]=this.g,J[Q+2]=this.b,J}fromBufferAttribute(J,Q){return this.r=J.getX(Q),this.g=J.getY(Q),this.b=J.getZ(Q),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var pJ=new j0;j0.NAMES=kK;class X7{constructor(J,Q=1,$=1000){this.isFog=!0,this.name="",this.color=new j0(J),this.near=Q,this.far=$}clone(){return new X7(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class VQ extends KJ{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new i8,this.environmentIntensity=1,this.environmentRotation=new i8,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(J,Q){if(super.copy(J,Q),J.background!==null)this.background=J.background.clone();if(J.environment!==null)this.environment=J.environment.clone();if(J.fog!==null)this.fog=J.fog.clone();if(this.backgroundBlurriness=J.backgroundBlurriness,this.backgroundIntensity=J.backgroundIntensity,this.backgroundRotation.copy(J.backgroundRotation),this.environmentIntensity=J.environmentIntensity,this.environmentRotation.copy(J.environmentRotation),J.overrideMaterial!==null)this.overrideMaterial=J.overrideMaterial.clone();return this.matrixAutoUpdate=J.matrixAutoUpdate,this}toJSON(J){let Q=super.toJSON(J);if(this.fog!==null)Q.object.fog=this.fog.toJSON();return Q.object.backgroundBlurriness=this.backgroundBlurriness,Q.object.backgroundIntensity=this.backgroundIntensity,Q.object.backgroundRotation=this.backgroundRotation.toArray(),Q.object.environmentIntensity=this.environmentIntensity,Q.object.environmentRotation=this.environmentRotation.toArray(),Q}}var L8=new h,m8=new h,Z$=new h,d8=new h,e6=new h,J9=new h,oZ=new h,H$=new h,K$=new h,Y$=new h,X$=new YJ,U$=new YJ,E$=new YJ;class J8{constructor(J=new h,Q=new h,$=new h){this.a=J,this.b=Q,this.c=$}static getNormal(J,Q,$,W){W.subVectors($,Q),L8.subVectors(J,Q),W.cross(L8);let Z=W.lengthSq();if(Z>0)return W.multiplyScalar(1/Math.sqrt(Z));return W.set(0,0,0)}static getBarycoord(J,Q,$,W,Z){L8.subVectors(W,Q),m8.subVectors($,Q),Z$.subVectors(J,Q);let H=L8.dot(L8),K=L8.dot(m8),Y=L8.dot(Z$),X=m8.dot(m8),U=m8.dot(Z$),E=H*X-K*K;if(E===0)return Z.set(0,0,0),null;let N=1/E,G=(X*Y-K*U)*N,q=(H*U-K*Y)*N;return Z.set(1-G-q,q,G)}static containsPoint(J,Q,$,W){if(this.getBarycoord(J,Q,$,W,d8)===null)return!1;return d8.x>=0&&d8.y>=0&&d8.x+d8.y<=1}static getInterpolation(J,Q,$,W,Z,H,K,Y){if(this.getBarycoord(J,Q,$,W,d8)===null){if(Y.x=0,Y.y=0,"z"in Y)Y.z=0;if("w"in Y)Y.w=0;return null}return Y.setScalar(0),Y.addScaledVector(Z,d8.x),Y.addScaledVector(H,d8.y),Y.addScaledVector(K,d8.z),Y}static getInterpolatedAttribute(J,Q,$,W,Z,H){return X$.setScalar(0),U$.setScalar(0),E$.setScalar(0),X$.fromBufferAttribute(J,Q),U$.fromBufferAttribute(J,$),E$.fromBufferAttribute(J,W),H.setScalar(0),H.addScaledVector(X$,Z.x),H.addScaledVector(U$,Z.y),H.addScaledVector(E$,Z.z),H}static isFrontFacing(J,Q,$,W){return L8.subVectors($,Q),m8.subVectors(J,Q),L8.cross(m8).dot(W)<0}set(J,Q,$){return this.a.copy(J),this.b.copy(Q),this.c.copy($),this}setFromPointsAndIndices(J,Q,$,W){return this.a.copy(J[Q]),this.b.copy(J[$]),this.c.copy(J[W]),this}setFromAttributeAndIndices(J,Q,$,W){return this.a.fromBufferAttribute(J,Q),this.b.fromBufferAttribute(J,$),this.c.fromBufferAttribute(J,W),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return L8.subVectors(this.c,this.b),m8.subVectors(this.a,this.b),L8.cross(m8).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return J8.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,Q){return J8.getBarycoord(J,this.a,this.b,this.c,Q)}getInterpolation(J,Q,$,W,Z){return J8.getInterpolation(J,this.a,this.b,this.c,Q,$,W,Z)}containsPoint(J){return J8.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return J8.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,Q){let $=this.a,W=this.b,Z=this.c,H,K;e6.subVectors(W,$),J9.subVectors(Z,$),H$.subVectors(J,$);let Y=e6.dot(H$),X=J9.dot(H$);if(Y<=0&&X<=0)return Q.copy($);K$.subVectors(J,W);let U=e6.dot(K$),E=J9.dot(K$);if(U>=0&&E<=U)return Q.copy(W);let N=Y*E-U*X;if(N<=0&&Y>=0&&U<=0)return H=Y/(Y-U),Q.copy($).addScaledVector(e6,H);Y$.subVectors(J,Z);let G=e6.dot(Y$),q=J9.dot(Y$);if(q>=0&&G<=q)return Q.copy(Z);let R=G*X-Y*q;if(R<=0&&X>=0&&q<=0)return K=X/(X-q),Q.copy($).addScaledVector(J9,K);let k=U*q-G*E;if(k<=0&&E-U>=0&&G-q>=0)return oZ.subVectors(Z,W),K=(E-U)/(E-U+(G-q)),Q.copy(W).addScaledVector(oZ,K);let F=1/(k+R+N);return H=R*F,K=N*F,Q.copy($).addScaledVector(e6,H).addScaledVector(J9,K)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}class iJ{constructor(J=new h(1/0,1/0,1/0),Q=new h(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=Q}set(J,Q){return this.min.copy(J),this.max.copy(Q),this}setFromArray(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q+=3)this.expandByPoint(M8.fromArray(J,Q));return this}setFromBufferAttribute(J){this.makeEmpty();for(let Q=0,$=J.count;Q<$;Q++)this.expandByPoint(M8.fromBufferAttribute(J,Q));return this}setFromPoints(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q++)this.expandByPoint(J[Q]);return this}setFromCenterAndSize(J,Q){let $=M8.copy(Q).multiplyScalar(0.5);return this.min.copy(J).sub($),this.max.copy(J).add($),this}setFromObject(J,Q=!1){return this.makeEmpty(),this.expandByObject(J,Q)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,Q=!1){J.updateWorldMatrix(!1,!1);let $=J.geometry;if($!==void 0){let Z=$.getAttribute("position");if(Q===!0&&Z!==void 0&&J.isInstancedMesh!==!0)for(let H=0,K=Z.count;H<K;H++){if(J.isMesh===!0)J.getVertexPosition(H,M8);else M8.fromBufferAttribute(Z,H);M8.applyMatrix4(J.matrixWorld),this.expandByPoint(M8)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();S7.copy(J.boundingBox)}else{if($.boundingBox===null)$.computeBoundingBox();S7.copy($.boundingBox)}S7.applyMatrix4(J.matrixWorld),this.union(S7)}}let W=J.children;for(let Z=0,H=W.length;Z<H;Z++)this.expandByObject(W[Z],Q);return this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y&&J.z>=this.min.z&&J.z<=this.max.z}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,Q){return Q.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y&&J.max.z>=this.min.z&&J.min.z<=this.max.z}intersectsSphere(J){return this.clampPoint(J.center,M8),M8.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let Q,$;if(J.normal.x>0)Q=J.normal.x*this.min.x,$=J.normal.x*this.max.x;else Q=J.normal.x*this.max.x,$=J.normal.x*this.min.x;if(J.normal.y>0)Q+=J.normal.y*this.min.y,$+=J.normal.y*this.max.y;else Q+=J.normal.y*this.max.y,$+=J.normal.y*this.min.y;if(J.normal.z>0)Q+=J.normal.z*this.min.z,$+=J.normal.z*this.max.z;else Q+=J.normal.z*this.max.z,$+=J.normal.z*this.min.z;return Q<=-J.constant&&$>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(p9),j7.subVectors(this.max,p9),Q9.subVectors(J.a,p9),$9.subVectors(J.b,p9),W9.subVectors(J.c,p9),Y6.subVectors($9,Q9),X6.subVectors(W9,$9),I6.subVectors(Q9,W9);let Q=[0,-Y6.z,Y6.y,0,-X6.z,X6.y,0,-I6.z,I6.y,Y6.z,0,-Y6.x,X6.z,0,-X6.x,I6.z,0,-I6.x,-Y6.y,Y6.x,0,-X6.y,X6.x,0,-I6.y,I6.x,0];if(!G$(Q,Q9,$9,W9,j7))return!1;if(Q=[1,0,0,0,1,0,0,0,1],!G$(Q,Q9,$9,W9,j7))return!1;return v7.crossVectors(Y6,X6),Q=[v7.x,v7.y,v7.z],G$(Q,Q9,$9,W9,j7)}clampPoint(J,Q){return Q.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,M8).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(M8).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return u8[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),u8[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),u8[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),u8[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),u8[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),u8[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),u8[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),u8[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(u8),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(J){return this.min.fromArray(J.min),this.max.fromArray(J.max),this}}var u8=[new h,new h,new h,new h,new h,new h,new h,new h],M8=new h,S7=new iJ,Q9=new h,$9=new h,W9=new h,Y6=new h,X6=new h,I6=new h,p9=new h,j7=new h,v7=new h,w6=new h;function G$(J,Q,$,W,Z){for(let H=0,K=J.length-3;H<=K;H+=3){w6.fromArray(J,H);let Y=Z.x*Math.abs(w6.x)+Z.y*Math.abs(w6.y)+Z.z*Math.abs(w6.z),X=Q.dot(w6),U=$.dot(w6),E=W.dot(w6);if(Math.max(-Math.max(X,U,E),Math.min(X,U,E))>Y)return!1}return!0}var zJ=new h,y7=new y0,SX=0;class _J extends y8{constructor(J,Q,$=!1){super();if(Array.isArray(J))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:SX++}),this.name="",this.array=J,this.itemSize=Q,this.count=J!==void 0?J.length/Q:0,this.normalized=$,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this}copyAt(J,Q,$){J*=this.itemSize,$*=Q.itemSize;for(let W=0,Z=this.itemSize;W<Z;W++)this.array[J+W]=Q.array[$+W];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let Q=0,$=this.count;Q<$;Q++)y7.fromBufferAttribute(this,Q),y7.applyMatrix3(J),this.setXY(Q,y7.x,y7.y);else if(this.itemSize===3)for(let Q=0,$=this.count;Q<$;Q++)zJ.fromBufferAttribute(this,Q),zJ.applyMatrix3(J),this.setXYZ(Q,zJ.x,zJ.y,zJ.z);return this}applyMatrix4(J){for(let Q=0,$=this.count;Q<$;Q++)zJ.fromBufferAttribute(this,Q),zJ.applyMatrix4(J),this.setXYZ(Q,zJ.x,zJ.y,zJ.z);return this}applyNormalMatrix(J){for(let Q=0,$=this.count;Q<$;Q++)zJ.fromBufferAttribute(this,Q),zJ.applyNormalMatrix(J),this.setXYZ(Q,zJ.x,zJ.y,zJ.z);return this}transformDirection(J){for(let Q=0,$=this.count;Q<$;Q++)zJ.fromBufferAttribute(this,Q),zJ.transformDirection(J),this.setXYZ(Q,zJ.x,zJ.y,zJ.z);return this}set(J,Q=0){return this.array.set(J,Q),this}getComponent(J,Q){let $=this.array[J*this.itemSize+Q];if(this.normalized)$=D8($,this.array);return $}setComponent(J,Q,$){if(this.normalized)$=HJ($,this.array);return this.array[J*this.itemSize+Q]=$,this}getX(J){let Q=this.array[J*this.itemSize];if(this.normalized)Q=D8(Q,this.array);return Q}setX(J,Q){if(this.normalized)Q=HJ(Q,this.array);return this.array[J*this.itemSize]=Q,this}getY(J){let Q=this.array[J*this.itemSize+1];if(this.normalized)Q=D8(Q,this.array);return Q}setY(J,Q){if(this.normalized)Q=HJ(Q,this.array);return this.array[J*this.itemSize+1]=Q,this}getZ(J){let Q=this.array[J*this.itemSize+2];if(this.normalized)Q=D8(Q,this.array);return Q}setZ(J,Q){if(this.normalized)Q=HJ(Q,this.array);return this.array[J*this.itemSize+2]=Q,this}getW(J){let Q=this.array[J*this.itemSize+3];if(this.normalized)Q=D8(Q,this.array);return Q}setW(J,Q){if(this.normalized)Q=HJ(Q,this.array);return this.array[J*this.itemSize+3]=Q,this}setXY(J,Q,$){if(J*=this.itemSize,this.normalized)Q=HJ(Q,this.array),$=HJ($,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this}setXYZ(J,Q,$,W){if(J*=this.itemSize,this.normalized)Q=HJ(Q,this.array),$=HJ($,this.array),W=HJ(W,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=W,this}setXYZW(J,Q,$,W,Z){if(J*=this.itemSize,this.normalized)Q=HJ(Q,this.array),$=HJ($,this.array),W=HJ(W,this.array),Z=HJ(Z,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=W,this.array[J+3]=Z,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return J.name=this.name,J.usage=this.usage,J.gpuType=this.gpuType,J}dispose(){this.dispatchEvent({type:"dispose"})}}class kQ extends _J{constructor(J,Q,$){super(new Uint16Array(J),Q,$)}}class BQ extends _J{constructor(J,Q,$){super(new Uint32Array(J),Q,$)}}class e0 extends _J{constructor(J,Q,$){super(new Float32Array(J),Q,$)}}var jX=new iJ,l9=new h,N$=new h;class Z8{constructor(J=new h,Q=-1){this.isSphere=!0,this.center=J,this.radius=Q}set(J,Q){return this.center.copy(J),this.radius=Q,this}setFromPoints(J,Q){let $=this.center;if(Q!==void 0)$.copy(Q);else jX.setFromPoints(J).getCenter($);let W=0;for(let Z=0,H=J.length;Z<H;Z++)W=Math.max(W,$.distanceToSquared(J[Z]));return this.radius=Math.sqrt(W),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let Q=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=Q*Q}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,Q){let $=this.center.distanceToSquared(J);if(Q.copy(J),$>this.radius*this.radius)Q.sub(this.center).normalize(),Q.multiplyScalar(this.radius).add(this.center);return Q}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;l9.subVectors(J,this.center);let Q=l9.lengthSq();if(Q>this.radius*this.radius){let $=Math.sqrt(Q),W=($-this.radius)*0.5;this.center.addScaledVector(l9,W/$),this.radius+=W}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else N$.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(l9.copy(J.center).add(N$)),this.expandByPoint(l9.copy(J.center).sub(N$));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(J){return this.radius=J.radius,this.center.fromArray(J.center),this}}var vX=0,E8=new b0,q$=new KJ,Z9=new h,eJ=new iJ,m9=new iJ,jJ=new h;class FJ extends y8{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vX++}),this.uuid=V8(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new((WX(J))?BQ:kQ)(J,1);else this.index=J;return this}setIndirect(J,Q=0){return this.indirect=J,this.indirectOffset=Q,this}getIndirect(){return this.indirect}getAttribute(J){return this.attributes[J]}setAttribute(J,Q){return this.attributes[J]=Q,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,Q,$=0){this.groups.push({start:J,count:Q,materialIndex:$})}clearGroups(){this.groups=[]}setDrawRange(J,Q){this.drawRange.start=J,this.drawRange.count=Q}applyMatrix4(J){let Q=this.attributes.position;if(Q!==void 0)Q.applyMatrix4(J),Q.needsUpdate=!0;let $=this.attributes.normal;if($!==void 0){let Z=new x0().getNormalMatrix(J);$.applyNormalMatrix(Z),$.needsUpdate=!0}let W=this.attributes.tangent;if(W!==void 0)W.transformDirection(J),W.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(J){return E8.makeRotationFromQuaternion(J),this.applyMatrix4(E8),this}rotateX(J){return E8.makeRotationX(J),this.applyMatrix4(E8),this}rotateY(J){return E8.makeRotationY(J),this.applyMatrix4(E8),this}rotateZ(J){return E8.makeRotationZ(J),this.applyMatrix4(E8),this}translate(J,Q,$){return E8.makeTranslation(J,Q,$),this.applyMatrix4(E8),this}scale(J,Q,$){return E8.makeScale(J,Q,$),this.applyMatrix4(E8),this}lookAt(J){return q$.lookAt(J),q$.updateMatrix(),this.applyMatrix4(q$.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Z9).negate(),this.translate(Z9.x,Z9.y,Z9.z),this}setFromPoints(J){let Q=this.getAttribute("position");if(Q===void 0){let $=[];for(let W=0,Z=J.length;W<Z;W++){let H=J[W];$.push(H.x,H.y,H.z||0)}this.setAttribute("position",new e0($,3))}else{let $=Math.min(J.length,Q.count);for(let W=0;W<$;W++){let Z=J[W];Q.setXYZ(W,Z.x,Z.y,Z.z||0)}if(J.length>Q.count)A0("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");Q.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new iJ;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){f0("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new h(-1/0,-1/0,-1/0),new h(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),Q)for(let $=0,W=Q.length;$<W;$++){let Z=Q[$];if(eJ.setFromBufferAttribute(Z),this.morphTargetsRelative)jJ.addVectors(this.boundingBox.min,eJ.min),this.boundingBox.expandByPoint(jJ),jJ.addVectors(this.boundingBox.max,eJ.max),this.boundingBox.expandByPoint(jJ);else this.boundingBox.expandByPoint(eJ.min),this.boundingBox.expandByPoint(eJ.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))f0('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new Z8;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){f0("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new h,1/0);return}if(J){let $=this.boundingSphere.center;if(eJ.setFromBufferAttribute(J),Q)for(let Z=0,H=Q.length;Z<H;Z++){let K=Q[Z];if(m9.setFromBufferAttribute(K),this.morphTargetsRelative)jJ.addVectors(eJ.min,m9.min),eJ.expandByPoint(jJ),jJ.addVectors(eJ.max,m9.max),eJ.expandByPoint(jJ);else eJ.expandByPoint(m9.min),eJ.expandByPoint(m9.max)}eJ.getCenter($);let W=0;for(let Z=0,H=J.count;Z<H;Z++)jJ.fromBufferAttribute(J,Z),W=Math.max(W,$.distanceToSquared(jJ));if(Q)for(let Z=0,H=Q.length;Z<H;Z++){let K=Q[Z],Y=this.morphTargetsRelative;for(let X=0,U=K.count;X<U;X++){if(jJ.fromBufferAttribute(K,X),Y)Z9.fromBufferAttribute(J,X),jJ.add(Z9);W=Math.max(W,$.distanceToSquared(jJ))}}if(this.boundingSphere.radius=Math.sqrt(W),isNaN(this.boundingSphere.radius))f0('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,Q=this.attributes;if(J===null||Q.position===void 0||Q.normal===void 0||Q.uv===void 0){f0("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:$,normal:W,uv:Z}=Q,H=this.getAttribute("tangent");if(H===void 0||H.count!==$.count)H=new _J(new Float32Array(4*$.count),4),this.setAttribute("tangent",H);let K=[],Y=[];for(let _=0;_<$.count;_++)K[_]=new h,Y[_]=new h;let X=new h,U=new h,E=new h,N=new y0,G=new y0,q=new y0,R=new h,k=new h;function F(_,M,C){X.fromBufferAttribute($,_),U.fromBufferAttribute($,M),E.fromBufferAttribute($,C),N.fromBufferAttribute(Z,_),G.fromBufferAttribute(Z,M),q.fromBufferAttribute(Z,C),U.sub(X),E.sub(X),G.sub(N),q.sub(N);let l=1/(G.x*q.y-q.x*G.y);if(!isFinite(l))return;R.copy(U).multiplyScalar(q.y).addScaledVector(E,-G.y).multiplyScalar(l),k.copy(E).multiplyScalar(G.x).addScaledVector(U,-q.x).multiplyScalar(l),K[_].add(R),K[M].add(R),K[C].add(R),Y[_].add(k),Y[M].add(k),Y[C].add(k)}let O=this.groups;if(O.length===0)O=[{start:0,count:J.count}];for(let _=0,M=O.length;_<M;++_){let C=O[_],l=C.start,y=C.count;for(let b=l,e=l+y;b<e;b+=3)F(J.getX(b+0),J.getX(b+1),J.getX(b+2))}let z=new h,A=new h,V=new h,I=new h;function P(_){V.fromBufferAttribute(W,_),I.copy(V);let M=K[_];z.copy(M),z.sub(V.multiplyScalar(V.dot(M))).normalize(),A.crossVectors(I,M);let l=A.dot(Y[_])<0?-1:1;H.setXYZW(_,z.x,z.y,z.z,l)}for(let _=0,M=O.length;_<M;++_){let C=O[_],l=C.start,y=C.count;for(let b=l,e=l+y;b<e;b+=3)P(J.getX(b+0)),P(J.getX(b+1)),P(J.getX(b+2))}this._transformed=!0}computeVertexNormals(){let J=this.index,Q=this.getAttribute("position");if(Q!==void 0){let $=this.getAttribute("normal");if($===void 0||$.count!==Q.count)$=new _J(new Float32Array(Q.count*3),3),this.setAttribute("normal",$);else for(let N=0,G=$.count;N<G;N++)$.setXYZ(N,0,0,0);let W=new h,Z=new h,H=new h,K=new h,Y=new h,X=new h,U=new h,E=new h;if(J)for(let N=0,G=J.count;N<G;N+=3){let q=J.getX(N+0),R=J.getX(N+1),k=J.getX(N+2);W.fromBufferAttribute(Q,q),Z.fromBufferAttribute(Q,R),H.fromBufferAttribute(Q,k),U.subVectors(H,Z),E.subVectors(W,Z),U.cross(E),K.fromBufferAttribute($,q),Y.fromBufferAttribute($,R),X.fromBufferAttribute($,k),K.add(U),Y.add(U),X.add(U),$.setXYZ(q,K.x,K.y,K.z),$.setXYZ(R,Y.x,Y.y,Y.z),$.setXYZ(k,X.x,X.y,X.z)}else for(let N=0,G=Q.count;N<G;N+=3)W.fromBufferAttribute(Q,N+0),Z.fromBufferAttribute(Q,N+1),H.fromBufferAttribute(Q,N+2),U.subVectors(H,Z),E.subVectors(W,Z),U.cross(E),$.setXYZ(N+0,U.x,U.y,U.z),$.setXYZ(N+1,U.x,U.y,U.z),$.setXYZ(N+2,U.x,U.y,U.z);this.normalizeNormals(),$.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let Q=0,$=J.count;Q<$;Q++)jJ.fromBufferAttribute(J,Q),jJ.normalize(),J.setXYZ(Q,jJ.x,jJ.y,jJ.z)}toNonIndexed(){function J(K,Y){let{array:X,itemSize:U,normalized:E}=K,N=new X.constructor(Y.length*U),G=0,q=0;for(let R=0,k=Y.length;R<k;R++){if(K.isInterleavedBufferAttribute)G=Y[R]*K.data.stride+K.offset;else G=Y[R]*U;for(let F=0;F<U;F++)N[q++]=X[G++]}return new _J(N,U,E)}if(this.index===null)return A0("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let Q=new FJ,$=this.index.array,W=this.attributes;for(let K in W){let Y=W[K],X=J(Y,$);Q.setAttribute(K,X)}let Z=this.morphAttributes;for(let K in Z){let Y=[],X=Z[K];for(let U=0,E=X.length;U<E;U++){let N=X[U],G=J(N,$);Y.push(G)}Q.morphAttributes[K]=Y}Q.morphTargetsRelative=this.morphTargetsRelative;let H=this.groups;for(let K=0,Y=H.length;K<Y;K++){let X=H[K];Q.addGroup(X.start,X.count,X.materialIndex)}return Q}toJSON(){let J={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,J.name=this.name,Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let Y=this.parameters;for(let X in Y)if(Y[X]!==void 0)J[X]=Y[X];return J}J.data={attributes:{}};let Q=this.index;if(Q!==null)J.data.index={type:Q.array.constructor.name,array:Array.prototype.slice.call(Q.array)};let $=this.attributes;for(let Y in $){let X=$[Y];J.data.attributes[Y]=X.toJSON(J.data)}let W={},Z=!1;for(let Y in this.morphAttributes){let X=this.morphAttributes[Y],U=[];for(let E=0,N=X.length;E<N;E++){let G=X[E];U.push(G.toJSON(J.data))}if(U.length>0)W[Y]=U,Z=!0}if(Z)J.data.morphAttributes=W,J.data.morphTargetsRelative=this.morphTargetsRelative;let H=this.groups;if(H.length>0)J.data.groups=JSON.parse(JSON.stringify(H));let K=this.boundingSphere;if(K!==null)J.data.boundingSphere=K.toJSON();return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let Q={};this.name=J.name;let $=J.index;if($!==null)this.setIndex($.clone());let W=J.attributes;for(let X in W){let U=W[X];this.setAttribute(X,U.clone(Q))}let Z=J.morphAttributes;for(let X in Z){let U=[],E=Z[X];for(let N=0,G=E.length;N<G;N++)U.push(E[N].clone(Q));this.morphAttributes[X]=U}this.morphTargetsRelative=J.morphTargetsRelative;let H=J.groups;for(let X=0,U=H.length;X<U;X++){let E=H[X];this.addGroup(E.start,E.count,E.materialIndex)}let K=J.boundingBox;if(K!==null)this.boundingBox=K.clone();let Y=J.boundingSphere;if(Y!==null)this.boundingSphere=Y.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this._transformed=J._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class I9{constructor(J,Q){this.isInterleavedBuffer=!0,this.array=J,this.stride=Q,this.count=J!==void 0?J.length/Q:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=V8()}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.array=new J.array.constructor(J.array),this.count=J.count,this.stride=J.stride,this.usage=J.usage,this}copyAt(J,Q,$){J*=this.stride,$*=Q.stride;for(let W=0,Z=this.stride;W<Z;W++)this.array[J+W]=Q.array[$+W];return this}set(J,Q=0){return this.array.set(J,Q),this}clone(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=V8();if(J.arrayBuffers[this.array.buffer._uuid]===void 0)J.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer;let Q=new this.array.constructor(J.arrayBuffers[this.array.buffer._uuid]),$=new this.constructor(Q,this.stride);return $.setUsage(this.usage),$}onUpload(J){return this.onUploadCallback=J,this}toJSON(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=V8();if(J.arrayBuffers[this.array.buffer._uuid]===void 0)J.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer));let Q={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return Q.usage=this.usage,Q}}var cJ=new h;class G6{constructor(J,Q,$,W=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=J,this.itemSize=Q,this.offset=$,this.normalized=W}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(J){this.data.needsUpdate=J}applyMatrix4(J){for(let Q=0,$=this.data.count;Q<$;Q++)cJ.fromBufferAttribute(this,Q),cJ.applyMatrix4(J),this.setXYZ(Q,cJ.x,cJ.y,cJ.z);return this}applyNormalMatrix(J){for(let Q=0,$=this.count;Q<$;Q++)cJ.fromBufferAttribute(this,Q),cJ.applyNormalMatrix(J),this.setXYZ(Q,cJ.x,cJ.y,cJ.z);return this}transformDirection(J){for(let Q=0,$=this.count;Q<$;Q++)cJ.fromBufferAttribute(this,Q),cJ.transformDirection(J),this.setXYZ(Q,cJ.x,cJ.y,cJ.z);return this}getComponent(J,Q){let $=this.array[J*this.data.stride+this.offset+Q];if(this.normalized)$=D8($,this.array);return $}setComponent(J,Q,$){if(this.normalized)$=HJ($,this.array);return this.data.array[J*this.data.stride+this.offset+Q]=$,this}setX(J,Q){if(this.normalized)Q=HJ(Q,this.array);return this.data.array[J*this.data.stride+this.offset]=Q,this}setY(J,Q){if(this.normalized)Q=HJ(Q,this.array);return this.data.array[J*this.data.stride+this.offset+1]=Q,this}setZ(J,Q){if(this.normalized)Q=HJ(Q,this.array);return this.data.array[J*this.data.stride+this.offset+2]=Q,this}setW(J,Q){if(this.normalized)Q=HJ(Q,this.array);return this.data.array[J*this.data.stride+this.offset+3]=Q,this}getX(J){let Q=this.data.array[J*this.data.stride+this.offset];if(this.normalized)Q=D8(Q,this.array);return Q}getY(J){let Q=this.data.array[J*this.data.stride+this.offset+1];if(this.normalized)Q=D8(Q,this.array);return Q}getZ(J){let Q=this.data.array[J*this.data.stride+this.offset+2];if(this.normalized)Q=D8(Q,this.array);return Q}getW(J){let Q=this.data.array[J*this.data.stride+this.offset+3];if(this.normalized)Q=D8(Q,this.array);return Q}setXY(J,Q,$){if(J=J*this.data.stride+this.offset,this.normalized)Q=HJ(Q,this.array),$=HJ($,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=$,this}setXYZ(J,Q,$,W){if(J=J*this.data.stride+this.offset,this.normalized)Q=HJ(Q,this.array),$=HJ($,this.array),W=HJ(W,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=$,this.data.array[J+2]=W,this}setXYZW(J,Q,$,W,Z){if(J=J*this.data.stride+this.offset,this.normalized)Q=HJ(Q,this.array),$=HJ($,this.array),W=HJ(W,this.array),Z=HJ(Z,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=$,this.data.array[J+2]=W,this.data.array[J+3]=Z,this}clone(J){if(J===void 0){t9("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let Q=[];for(let $=0;$<this.count;$++){let W=$*this.data.stride+this.offset;for(let Z=0;Z<this.itemSize;Z++)Q.push(this.data.array[W+Z])}return new _J(new this.array.constructor(Q),this.itemSize,this.normalized)}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.clone(J);return new G6(J.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON(J){if(J===void 0){t9("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let Q=[];for(let $=0;$<this.count;$++){let W=$*this.data.stride+this.offset;for(let Z=0;Z<this.itemSize;Z++)Q.push(this.data.array[W+Z])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:Q,normalized:this.normalized}}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.toJSON(J);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}}var F$=new h,yX=new h,fX=new x0;class G8{constructor(J=new h(1,0,0),Q=0){this.isPlane=!0,this.normal=J,this.constant=Q}set(J,Q){return this.normal.copy(J),this.constant=Q,this}setComponents(J,Q,$,W){return this.normal.set(J,Q,$),this.constant=W,this}setFromNormalAndCoplanarPoint(J,Q){return this.normal.copy(J),this.constant=-Q.dot(this.normal),this}setFromCoplanarPoints(J,Q,$){let W=F$.subVectors($,Q).cross(yX.subVectors(J,Q)).normalize();return this.setFromNormalAndCoplanarPoint(W,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,Q){return Q.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,Q,$=!0){let W=J.delta(F$),Z=this.normal.dot(W);if(Z===0){if(this.distanceToPoint(J.start)===0)return Q.copy(J.start);return null}let H=-(J.start.dot(this.normal)+this.constant)/Z;if($===!0&&(H<0||H>1))return null;return Q.copy(J.start).addScaledVector(W,H)}intersectsLine(J){let Q=this.distanceToPoint(J.start),$=this.distanceToPoint(J.end);return Q<0&&$>0||$<0&&Q>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,Q){let $=Q||fX.getNormalMatrix(J),W=this.coplanarPoint(F$).applyMatrix4(J),Z=this.normal.applyMatrix3($).normalize();return this.constant=-W.dot(Z),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(J){return this.normal.fromArray(J.normal),this.constant=J.constant,this}}var hX=0;class oJ extends y8{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:hX++}),this.uuid=V8(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new j0(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let Q in J){let $=J[Q];if($===void 0){A0(`Material: parameter '${Q}' has value of undefined.`);continue}let W=this[Q];if(W===void 0){A0(`Material: '${Q}' is not a property of THREE.${this.type}.`);continue}if(W&&W.isColor)W.set($);else if(W&&W.isVector2&&($&&$.isVector2)||W&&W.isEuler&&($&&$.isEuler)||W&&W.isVector3&&($&&$.isVector3))W.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(Q)J={textures:{},images:{}};let $={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if($.uuid=this.uuid,$.type=this.type,$.blending=this.blending,$.side=this.side,$.shadowSide=this.shadowSide,$.vertexColors=this.vertexColors,$.opacity=this.opacity,$.transparent=this.transparent,$.blendSrc=this.blendSrc,$.blendDst=this.blendDst,$.blendEquation=this.blendEquation,$.blendSrcAlpha=this.blendSrcAlpha,$.blendDstAlpha=this.blendDstAlpha,$.blendEquationAlpha=this.blendEquationAlpha,$.blendColor=this.blendColor.getHex(),$.blendAlpha=this.blendAlpha,$.depthFunc=this.depthFunc,$.depthTest=this.depthTest,$.depthWrite=this.depthWrite,$.colorWrite=this.colorWrite,$.clipIntersection=this.clipIntersection,$.clipShadows=this.clipShadows,$.stencilWriteMask=this.stencilWriteMask,$.stencilFunc=this.stencilFunc,$.stencilRef=this.stencilRef,$.stencilFuncMask=this.stencilFuncMask,$.stencilFail=this.stencilFail,$.stencilZFail=this.stencilZFail,$.stencilZPass=this.stencilZPass,$.stencilWrite=this.stencilWrite,$.polygonOffset=this.polygonOffset,$.polygonOffsetFactor=this.polygonOffsetFactor,$.polygonOffsetUnits=this.polygonOffsetUnits,$.dithering=this.dithering,$.alphaTest=this.alphaTest,$.alphaHash=this.alphaHash,$.alphaToCoverage=this.alphaToCoverage,$.premultipliedAlpha=this.premultipliedAlpha,$.forceSinglePass=this.forceSinglePass,$.allowOverride=this.allowOverride,$.visible=this.visible,$.toneMapped=this.toneMapped,$.name=this.name,this.color&&this.color.isColor)$.color=this.color.getHex();if(this.roughness!==void 0)$.roughness=this.roughness;if(this.metalness!==void 0)$.metalness=this.metalness;if(this.sheen!==void 0)$.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)$.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)$.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)$.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0)$.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)$.specular=this.specular.getHex();if(this.specularIntensity!==void 0)$.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)$.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)$.shininess=this.shininess;if(this.clearcoat!==void 0)$.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)$.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)$.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)$.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)$.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,$.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)$.sheenColorMap=this.sheenColorMap.toJSON(J).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)$.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(J).uuid;if(this.dispersion!==void 0)$.dispersion=this.dispersion;if(this.retroreflectivity!==void 0)$.retroreflectivity=this.retroreflectivity;if(this.iridescence!==void 0)$.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)$.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)$.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)$.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)$.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)$.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)$.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)$.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)$.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)$.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)$.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)$.lightMap=this.lightMap.toJSON(J).uuid,$.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)$.aoMap=this.aoMap.toJSON(J).uuid,$.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)$.bumpMap=this.bumpMap.toJSON(J).uuid,$.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)$.normalMap=this.normalMap.toJSON(J).uuid,$.normalMapType=this.normalMapType,$.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)$.displacementMap=this.displacementMap.toJSON(J).uuid,$.displacementScale=this.displacementScale,$.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)$.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)$.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)$.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)$.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)$.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)$.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if($.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)$.combine=this.combine}if(this.envMapRotation!==void 0)$.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)$.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)$.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)$.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)$.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)$.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)$.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)$.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)$.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0)$.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)$.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)$.size=this.size;if(this.sizeAttenuation!==void 0)$.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)$.clippingPlanes=this.clippingPlanes.map((Z)=>Z.toJSON());if(this.rotation!==void 0)$.rotation=this.rotation;if(this.depthPacking!==void 0)$.depthPacking=this.depthPacking;if(this.linewidth!==void 0)$.linewidth=this.linewidth;if(this.linecap!==void 0)$.linecap=this.linecap;if(this.linejoin!==void 0)$.linejoin=this.linejoin;if(this.dashSize!==void 0)$.dashSize=this.dashSize;if(this.gapSize!==void 0)$.gapSize=this.gapSize;if(this.scale!==void 0)$.scale=this.scale;if(this.wireframe!==void 0)$.wireframe=this.wireframe;if(this.wireframeLinewidth!==void 0)$.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==void 0)$.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==void 0)$.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==void 0)$.flatShading=this.flatShading;if(this.fog!==void 0)$.fog=this.fog;if(Object.keys(this.userData).length>0)$.userData=this.userData;function W(Z){let H=[];for(let K in Z){let Y=Z[K];delete Y.metadata,H.push(Y)}return H}if(Q){let Z=W(J.textures),H=W(J.images);if(Z.length>0)$.textures=Z;if(H.length>0)$.images=H}return $}fromJSON(J,Q){if(J.uuid!==void 0)this.uuid=J.uuid;if(J.name!==void 0)this.name=J.name;if(J.color!==void 0&&this.color!==void 0)this.color.setHex(J.color);if(J.roughness!==void 0)this.roughness=J.roughness;if(J.metalness!==void 0)this.metalness=J.metalness;if(J.sheen!==void 0)this.sheen=J.sheen;if(J.sheenColor!==void 0)this.sheenColor=new j0().setHex(J.sheenColor);if(J.sheenRoughness!==void 0)this.sheenRoughness=J.sheenRoughness;if(J.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(J.emissive);if(J.specular!==void 0&&this.specular!==void 0)this.specular.setHex(J.specular);if(J.specularIntensity!==void 0)this.specularIntensity=J.specularIntensity;if(J.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(J.specularColor);if(J.shininess!==void 0)this.shininess=J.shininess;if(J.clearcoat!==void 0)this.clearcoat=J.clearcoat;if(J.clearcoatRoughness!==void 0)this.clearcoatRoughness=J.clearcoatRoughness;if(J.dispersion!==void 0)this.dispersion=J.dispersion;if(J.retroreflectivity!==void 0)this.retroreflectivity=J.retroreflectivity;if(J.iridescence!==void 0)this.iridescence=J.iridescence;if(J.iridescenceIOR!==void 0)this.iridescenceIOR=J.iridescenceIOR;if(J.iridescenceThicknessRange!==void 0)this.iridescenceThicknessRange=J.iridescenceThicknessRange;if(J.transmission!==void 0)this.transmission=J.transmission;if(J.thickness!==void 0)this.thickness=J.thickness;if(J.attenuationDistance!==void 0)this.attenuationDistance=J.attenuationDistance;if(J.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(J.attenuationColor);if(J.anisotropy!==void 0)this.anisotropy=J.anisotropy;if(J.anisotropyRotation!==void 0)this.anisotropyRotation=J.anisotropyRotation;if(J.fog!==void 0)this.fog=J.fog;if(J.flatShading!==void 0)this.flatShading=J.flatShading;if(J.blending!==void 0)this.blending=J.blending;if(J.combine!==void 0)this.combine=J.combine;if(J.side!==void 0)this.side=J.side;if(J.shadowSide!==void 0)this.shadowSide=J.shadowSide;if(J.opacity!==void 0)this.opacity=J.opacity;if(J.transparent!==void 0)this.transparent=J.transparent;if(J.alphaTest!==void 0)this.alphaTest=J.alphaTest;if(J.alphaHash!==void 0)this.alphaHash=J.alphaHash;if(J.depthFunc!==void 0)this.depthFunc=J.depthFunc;if(J.depthTest!==void 0)this.depthTest=J.depthTest;if(J.depthWrite!==void 0)this.depthWrite=J.depthWrite;if(J.colorWrite!==void 0)this.colorWrite=J.colorWrite;if(J.clippingPlanes!==void 0)this.clippingPlanes=J.clippingPlanes.map(($)=>new G8().fromJSON($));if(J.clipIntersection!==void 0)this.clipIntersection=J.clipIntersection;if(J.clipShadows!==void 0)this.clipShadows=J.clipShadows;if(J.depthPacking!==void 0)this.depthPacking=J.depthPacking;if(J.blendSrc!==void 0)this.blendSrc=J.blendSrc;if(J.blendDst!==void 0)this.blendDst=J.blendDst;if(J.blendEquation!==void 0)this.blendEquation=J.blendEquation;if(J.blendSrcAlpha!==void 0)this.blendSrcAlpha=J.blendSrcAlpha;if(J.blendDstAlpha!==void 0)this.blendDstAlpha=J.blendDstAlpha;if(J.blendEquationAlpha!==void 0)this.blendEquationAlpha=J.blendEquationAlpha;if(J.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(J.blendColor);if(J.blendAlpha!==void 0)this.blendAlpha=J.blendAlpha;if(J.stencilWriteMask!==void 0)this.stencilWriteMask=J.stencilWriteMask;if(J.stencilFunc!==void 0)this.stencilFunc=J.stencilFunc;if(J.stencilRef!==void 0)this.stencilRef=J.stencilRef;if(J.stencilFuncMask!==void 0)this.stencilFuncMask=J.stencilFuncMask;if(J.stencilFail!==void 0)this.stencilFail=J.stencilFail;if(J.stencilZFail!==void 0)this.stencilZFail=J.stencilZFail;if(J.stencilZPass!==void 0)this.stencilZPass=J.stencilZPass;if(J.stencilWrite!==void 0)this.stencilWrite=J.stencilWrite;if(J.wireframe!==void 0)this.wireframe=J.wireframe;if(J.wireframeLinewidth!==void 0)this.wireframeLinewidth=J.wireframeLinewidth;if(J.wireframeLinecap!==void 0)this.wireframeLinecap=J.wireframeLinecap;if(J.wireframeLinejoin!==void 0)this.wireframeLinejoin=J.wireframeLinejoin;if(J.rotation!==void 0)this.rotation=J.rotation;if(J.linewidth!==void 0)this.linewidth=J.linewidth;if(J.linecap!==void 0)this.linecap=J.linecap;if(J.linejoin!==void 0)this.linejoin=J.linejoin;if(J.dashSize!==void 0)this.dashSize=J.dashSize;if(J.gapSize!==void 0)this.gapSize=J.gapSize;if(J.scale!==void 0)this.scale=J.scale;if(J.polygonOffset!==void 0)this.polygonOffset=J.polygonOffset;if(J.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=J.polygonOffsetFactor;if(J.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=J.polygonOffsetUnits;if(J.dithering!==void 0)this.dithering=J.dithering;if(J.alphaToCoverage!==void 0)this.alphaToCoverage=J.alphaToCoverage;if(J.premultipliedAlpha!==void 0)this.premultipliedAlpha=J.premultipliedAlpha;if(J.forceSinglePass!==void 0)this.forceSinglePass=J.forceSinglePass;if(J.allowOverride!==void 0)this.allowOverride=J.allowOverride;if(J.visible!==void 0)this.visible=J.visible;if(J.toneMapped!==void 0)this.toneMapped=J.toneMapped;if(J.userData!==void 0)this.userData=J.userData;if(J.vertexColors!==void 0)if(typeof J.vertexColors==="number")this.vertexColors=J.vertexColors>0;else this.vertexColors=J.vertexColors;if(J.size!==void 0)this.size=J.size;if(J.sizeAttenuation!==void 0)this.sizeAttenuation=J.sizeAttenuation;if(J.map!==void 0)this.map=Q[J.map]||null;if(J.matcap!==void 0)this.matcap=Q[J.matcap]||null;if(J.alphaMap!==void 0)this.alphaMap=Q[J.alphaMap]||null;if(J.bumpMap!==void 0)this.bumpMap=Q[J.bumpMap]||null;if(J.bumpScale!==void 0)this.bumpScale=J.bumpScale;if(J.normalMap!==void 0)this.normalMap=Q[J.normalMap]||null;if(J.normalMapType!==void 0)this.normalMapType=J.normalMapType;if(J.normalScale!==void 0){let $=J.normalScale;if(Array.isArray($)===!1)$=[$,$];this.normalScale=new y0().fromArray($)}if(J.displacementMap!==void 0)this.displacementMap=Q[J.displacementMap]||null;if(J.displacementScale!==void 0)this.displacementScale=J.displacementScale;if(J.displacementBias!==void 0)this.displacementBias=J.displacementBias;if(J.roughnessMap!==void 0)this.roughnessMap=Q[J.roughnessMap]||null;if(J.metalnessMap!==void 0)this.metalnessMap=Q[J.metalnessMap]||null;if(J.emissiveMap!==void 0)this.emissiveMap=Q[J.emissiveMap]||null;if(J.emissiveIntensity!==void 0)this.emissiveIntensity=J.emissiveIntensity;if(J.specularMap!==void 0)this.specularMap=Q[J.specularMap]||null;if(J.specularIntensityMap!==void 0)this.specularIntensityMap=Q[J.specularIntensityMap]||null;if(J.specularColorMap!==void 0)this.specularColorMap=Q[J.specularColorMap]||null;if(J.envMap!==void 0)this.envMap=Q[J.envMap]||null;if(J.envMapRotation!==void 0)this.envMapRotation.fromArray(J.envMapRotation);if(J.envMapIntensity!==void 0)this.envMapIntensity=J.envMapIntensity;if(J.reflectivity!==void 0)this.reflectivity=J.reflectivity;if(J.refractionRatio!==void 0)this.refractionRatio=J.refractionRatio;if(J.lightMap!==void 0)this.lightMap=Q[J.lightMap]||null;if(J.lightMapIntensity!==void 0)this.lightMapIntensity=J.lightMapIntensity;if(J.aoMap!==void 0)this.aoMap=Q[J.aoMap]||null;if(J.aoMapIntensity!==void 0)this.aoMapIntensity=J.aoMapIntensity;if(J.gradientMap!==void 0)this.gradientMap=Q[J.gradientMap]||null;if(J.clearcoatMap!==void 0)this.clearcoatMap=Q[J.clearcoatMap]||null;if(J.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=Q[J.clearcoatRoughnessMap]||null;if(J.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=Q[J.clearcoatNormalMap]||null;if(J.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new y0().fromArray(J.clearcoatNormalScale);if(J.iridescenceMap!==void 0)this.iridescenceMap=Q[J.iridescenceMap]||null;if(J.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=Q[J.iridescenceThicknessMap]||null;if(J.transmissionMap!==void 0)this.transmissionMap=Q[J.transmissionMap]||null;if(J.thicknessMap!==void 0)this.thicknessMap=Q[J.thicknessMap]||null;if(J.anisotropyMap!==void 0)this.anisotropyMap=Q[J.anisotropyMap]||null;if(J.sheenColorMap!==void 0)this.sheenColorMap=Q[J.sheenColorMap]||null;if(J.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=Q[J.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let Q=J.clippingPlanes,$=null;if(Q!==null){let W=Q.length;$=Array(W);for(let Z=0;Z!==W;++Z)$[Z]=Q[Z].clone()}return this.clippingPlanes=$,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.allowOverride=J.allowOverride,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}}class U7 extends oJ{constructor(J){super();this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new j0(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.alphaMap=J.alphaMap,this.rotation=J.rotation,this.sizeAttenuation=J.sizeAttenuation,this.fog=J.fog,this}}var H9,d9=new h,K9=new h,Y9=new h,X9=new y0,u9=new y0,BK=new b0,f7=new h,c9=new h,h7=new h,aZ=new y0,O$=new y0,rZ=new y0;class CQ extends KJ{constructor(J=new U7){super();if(this.isSprite=!0,this.type="Sprite",H9===void 0){H9=new FJ;let Q=new Float32Array([-0.5,-0.5,0,0,0,0.5,-0.5,0,1,0,0.5,0.5,0,1,1,-0.5,0.5,0,0,1]),$=new I9(Q,5);H9.setIndex([0,1,2,0,2,3]),H9.setAttribute("position",new G6($,3,0,!1)),H9.setAttribute("uv",new G6($,2,3,!1))}this.geometry=H9,this.material=J,this.center=new y0(0.5,0.5),this.count=1}intersectsFrustum(J){return J.intersectsSprite(this)}raycast(J,Q){if(J.camera===null)f0('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.');if(K9.setFromMatrixScale(this.matrixWorld),BK.copy(J.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(J.camera.matrixWorldInverse,this.matrixWorld),Y9.setFromMatrixPosition(this.modelViewMatrix),J.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1)K9.multiplyScalar(-Y9.z);let $=this.material.rotation,W,Z;if($!==0)Z=Math.cos($),W=Math.sin($);let H=this.center;b7(f7.set(-0.5,-0.5,0),Y9,H,K9,W,Z),b7(c9.set(0.5,-0.5,0),Y9,H,K9,W,Z),b7(h7.set(0.5,0.5,0),Y9,H,K9,W,Z),aZ.set(0,0),O$.set(1,0),rZ.set(1,1);let K=J.ray.intersectTriangle(f7,c9,h7,!1,d9);if(K===null){if(b7(c9.set(-0.5,0.5,0),Y9,H,K9,W,Z),O$.set(0,1),K=J.ray.intersectTriangle(f7,h7,c9,!1,d9),K===null)return}let Y=J.ray.origin.distanceTo(d9);if(Y<J.near||Y>J.far)return;Q.push({distance:Y,point:d9.clone(),uv:J8.getInterpolation(d9,f7,c9,h7,aZ,O$,rZ,new y0),face:null,object:this})}copy(J,Q){if(super.copy(J,Q),J.center!==void 0)this.center.copy(J.center);return this.material=J.material,this}}function b7(J,Q,$,W,Z,H){if(X9.subVectors(J,$).addScalar(0.5).multiply(W),Z!==void 0)u9.x=H*X9.x-Z*X9.y,u9.y=Z*X9.x+H*X9.y;else u9.copy(X9);J.copy(Q),J.x+=u9.x,J.y+=u9.y,J.applyMatrix4(BK)}var c8=new h,R$=new h,x7=new h,g7=new h;class h6{constructor(J=new h,Q=new h(0,0,-1)){this.origin=J,this.direction=Q}set(J,Q){return this.origin.copy(J),this.direction.copy(Q),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,Q){return Q.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,c8)),this}closestPointToPoint(J,Q){Q.subVectors(J,this.origin);let $=Q.dot(this.direction);if($<0)return Q.copy(this.origin);return Q.copy(this.origin).addScaledVector(this.direction,$)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let Q=c8.subVectors(J,this.origin).dot(this.direction);if(Q<0)return this.origin.distanceToSquared(J);return c8.copy(this.origin).addScaledVector(this.direction,Q),c8.distanceToSquared(J)}distanceSqToSegment(J,Q,$,W){R$.copy(J).add(Q).multiplyScalar(0.5),x7.copy(Q).sub(J).normalize(),g7.copy(this.origin).sub(R$);let Z=J.distanceTo(Q)*0.5,H=-this.direction.dot(x7),K=g7.dot(this.direction),Y=-g7.dot(x7),X=g7.lengthSq(),U=Math.abs(1-H*H),E,N,G,q;if(U>0)if(E=H*Y-K,N=H*K-Y,q=Z*U,E>=0)if(N>=-q)if(N<=q){let R=1/U;E*=R,N*=R,G=E*(E+H*N+2*K)+N*(H*E+N+2*Y)+X}else N=Z,E=Math.max(0,-(H*N+K)),G=-E*E+N*(N+2*Y)+X;else N=-Z,E=Math.max(0,-(H*N+K)),G=-E*E+N*(N+2*Y)+X;else if(N<=-q)E=Math.max(0,-(-H*Z+K)),N=E>0?-Z:Math.min(Math.max(-Z,-Y),Z),G=-E*E+N*(N+2*Y)+X;else if(N<=q)E=0,N=Math.min(Math.max(-Z,-Y),Z),G=N*(N+2*Y)+X;else E=Math.max(0,-(H*Z+K)),N=E>0?Z:Math.min(Math.max(-Z,-Y),Z),G=-E*E+N*(N+2*Y)+X;else N=H>0?-Z:Z,E=Math.max(0,-(H*N+K)),G=-E*E+N*(N+2*Y)+X;if($)$.copy(this.origin).addScaledVector(this.direction,E);if(W)W.copy(R$).addScaledVector(x7,N);return G}intersectSphere(J,Q){if(J.radius<0)return null;c8.subVectors(J.center,this.origin);let $=c8.dot(this.direction),W=c8.dot(c8)-$*$,Z=J.radius*J.radius;if(W>Z)return null;let H=Math.sqrt(Z-W),K=$-H,Y=$+H;if(Y<0)return null;if(K<0)return this.at(Y,Q);return this.at(K,Q)}intersectsSphere(J){if(J.radius<0)return!1;return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let Q=J.normal.dot(this.direction);if(Q===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let $=-(this.origin.dot(J.normal)+J.constant)/Q;return $>=0?$:null}intersectPlane(J,Q){let $=this.distanceToPlane(J);if($===null)return null;return this.at($,Q)}intersectsPlane(J){let Q=J.distanceToPoint(this.origin);if(Q===0)return!0;if(J.normal.dot(this.direction)*Q<0)return!0;return!1}intersectBox(J,Q){let $,W,Z,H,K,Y,X=1/this.direction.x,U=1/this.direction.y,E=1/this.direction.z,N=this.origin;if(X>=0)$=(J.min.x-N.x)*X,W=(J.max.x-N.x)*X;else $=(J.max.x-N.x)*X,W=(J.min.x-N.x)*X;if(U>=0)Z=(J.min.y-N.y)*U,H=(J.max.y-N.y)*U;else Z=(J.max.y-N.y)*U,H=(J.min.y-N.y)*U;if($>H||Z>W)return null;if(Z>$||isNaN($))$=Z;if(H<W||isNaN(W))W=H;if(E>=0)K=(J.min.z-N.z)*E,Y=(J.max.z-N.z)*E;else K=(J.max.z-N.z)*E,Y=(J.min.z-N.z)*E;if($>Y||K>W)return null;if(K>$||$!==$)$=K;if(Y<W||W!==W)W=Y;if(W<0)return null;return this.at($>=0?$:W,Q)}intersectsBox(J){return this.intersectBox(J,c8)!==null}intersectTriangle(J,Q,$,W,Z){let H=this.origin,K=this.direction,Y=K.x,X=K.y,U=K.z,E=J.x-H.x,N=J.y-H.y,G=J.z-H.z,q=Q.x-H.x,R=Q.y-H.y,k=Q.z-H.z,F=$.x-H.x,O=$.y-H.y,z=$.z-H.z,A=Math.abs(Y),V=Math.abs(X),I=Math.abs(U),P,_,M,C,l,y,b,e,S,u,Q0,d;if(A>=V&&A>=I)if(M=Y,y=E,S=q,d=F,Y>=0)P=X,_=U,C=N,l=G,b=R,e=k,u=O,Q0=z;else P=U,_=X,C=G,l=N,b=k,e=R,u=z,Q0=O;else if(V>=I)if(M=X,y=N,S=R,d=O,X>=0)P=U,_=Y,C=G,l=E,b=k,e=q,u=z,Q0=F;else P=Y,_=U,C=E,l=G,b=q,e=k,u=F,Q0=z;else if(M=U,y=G,S=k,d=z,U>=0)P=Y,_=X,C=E,l=N,b=q,e=R,u=F,Q0=O;else P=X,_=Y,C=N,l=E,b=R,e=q,u=O,Q0=F;if(M===0)return null;let Y0=P/M,r=_/M,$0=1/M,Z0=C-Y0*y,C0=l-r*y,T0=b-Y0*S,$J=e-r*S,p0=u-Y0*d,s=Q0-r*d,K0=p0*$J-s*T0,U0=Z0*s-C0*p0,S0=T0*C0-$J*Z0;if(W){if(K0<0||U0<0||S0<0)return null}else if((K0<0||U0<0||S0<0)&&(K0>0||U0>0||S0>0))return null;let v0=K0+U0+S0;if(v0===0)return null;let z0=$0*(K0*y+U0*S+S0*d);if(v0>0?z0<0:z0>0)return null;return this.at(z0/v0,Z)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class RJ extends oJ{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new j0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new i8,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var tZ=new b0,z6=new h6,p7=new Z8,eZ=new h,l7=new h,m7=new h,d7=new h,L$=new h,u7=new h,JH=new h,c7=new h;class o0 extends KJ{constructor(J=new FJ,Q=new RJ){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(J,Q){if(super.copy(J,Q),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let W=Q[$[0]];if(W!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let Z=0,H=W.length;Z<H;Z++){let K=W[Z].name||String(Z);this.morphTargetInfluences.push(0),this.morphTargetDictionary[K]=Z}}}}getVertexPosition(J,Q){let $=this.geometry,W=$.attributes.position,Z=$.morphAttributes.position,H=$.morphTargetsRelative;Q.fromBufferAttribute(W,J);let K=this.morphTargetInfluences;if(Z&&K){u7.set(0,0,0);for(let Y=0,X=Z.length;Y<X;Y++){let U=K[Y],E=Z[Y];if(U===0)continue;if(L$.fromBufferAttribute(E,J),H)u7.addScaledVector(L$,U);else u7.addScaledVector(L$.sub(Q),U)}Q.add(u7)}return Q}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,Q){let $=this.geometry,W=this.material,Z=this.matrixWorld;if(W===void 0)return;if($.boundingSphere===null)$.computeBoundingSphere();if(p7.copy($.boundingSphere),p7.applyMatrix4(Z),z6.copy(J.ray).recast(J.near),p7.containsPoint(z6.origin)===!1){if(z6.intersectSphere(p7,eZ)===null)return;if(z6.origin.distanceToSquared(eZ)>(J.far-J.near)**2)return}if(tZ.copy(Z).invert(),z6.copy(J.ray).applyMatrix4(tZ),$.boundingBox!==null){if(z6.intersectsBox($.boundingBox)===!1)return}this._computeIntersections(J,Q,z6)}_computeIntersections(J,Q,$){let W,Z=this.geometry,H=this.material,K=Z.index,Y=Z.attributes.position,X=Z.attributes.uv,U=Z.attributes.uv1,E=Z.attributes.normal,N=Z.groups,G=Z.drawRange;if(K!==null)if(Array.isArray(H))for(let q=0,R=N.length;q<R;q++){let k=N[q],F=H[k.materialIndex],O=Math.max(k.start,G.start),z=Math.min(K.count,Math.min(k.start+k.count,G.start+G.count));for(let A=O,V=z;A<V;A+=3){let I=K.getX(A),P=K.getX(A+1),_=K.getX(A+2);if(W=n7(this,F,J,$,X,U,E,I,P,_),W)W.faceIndex=Math.floor(A/3),W.face.materialIndex=k.materialIndex,Q.push(W)}}else{let q=Math.max(0,G.start),R=Math.min(K.count,G.start+G.count);for(let k=q,F=R;k<F;k+=3){let O=K.getX(k),z=K.getX(k+1),A=K.getX(k+2);if(W=n7(this,H,J,$,X,U,E,O,z,A),W)W.faceIndex=Math.floor(k/3),Q.push(W)}}else if(Y!==void 0)if(Array.isArray(H))for(let q=0,R=N.length;q<R;q++){let k=N[q],F=H[k.materialIndex],O=Math.max(k.start,G.start),z=Math.min(Y.count,Math.min(k.start+k.count,G.start+G.count));for(let A=O,V=z;A<V;A+=3){let I=A,P=A+1,_=A+2;if(W=n7(this,F,J,$,X,U,E,I,P,_),W)W.faceIndex=Math.floor(A/3),W.face.materialIndex=k.materialIndex,Q.push(W)}}else{let q=Math.max(0,G.start),R=Math.min(Y.count,G.start+G.count);for(let k=q,F=R;k<F;k+=3){let O=k,z=k+1,A=k+2;if(W=n7(this,H,J,$,X,U,E,O,z,A),W)W.faceIndex=Math.floor(k/3),Q.push(W)}}}}function bX(J,Q,$,W,Z,H,K,Y){let X;if(Q.side===1)X=W.intersectTriangle(K,H,Z,!0,Y);else X=W.intersectTriangle(Z,H,K,Q.side===0,Y);if(X===null)return null;c7.copy(Y),c7.applyMatrix4(J.matrixWorld);let U=$.ray.origin.distanceTo(c7);if(U<$.near||U>$.far)return null;return{distance:U,point:c7.clone(),object:J}}function n7(J,Q,$,W,Z,H,K,Y,X,U){J.getVertexPosition(Y,l7),J.getVertexPosition(X,m7),J.getVertexPosition(U,d7);let E=bX(J,Q,$,W,l7,m7,d7,JH);if(E){let N=new h;if(J8.getBarycoord(JH,l7,m7,d7,N),Z)E.uv=J8.getInterpolatedAttribute(Z,Y,X,U,N,new y0);if(H)E.uv1=J8.getInterpolatedAttribute(H,Y,X,U,N,new y0);if(K){if(E.normal=J8.getInterpolatedAttribute(K,Y,X,U,N,new h),E.normal.dot(W.direction)>0)E.normal.multiplyScalar(-1)}let G={a:Y,b:X,c:U,normal:new h,materialIndex:0};J8.getNormal(l7,m7,d7,G.normal),E.face=G,E.barycoord=N}return E}var n9=new YJ,QH=new YJ,$H=new YJ,xX=new YJ,WH=new b0,s7=new h,M$=new Z8,ZH=new b0,D$=new h6;class IQ extends o0{constructor(J,Q){super(J,Q);this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new b0,this.bindMatrixInverse=new b0,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let J=this.geometry;if(this.boundingBox===null)this.boundingBox=new iJ;this.boundingBox.makeEmpty();let Q=J.getAttribute("position");for(let $=0;$<Q.count;$++)this.getVertexPosition($,s7),this.boundingBox.expandByPoint(s7)}computeBoundingSphere(){let J=this.geometry;if(this.boundingSphere===null)this.boundingSphere=new Z8;this.boundingSphere.makeEmpty();let Q=J.getAttribute("position");for(let $=0;$<Q.count;$++)this.getVertexPosition($,s7),this.boundingSphere.expandByPoint(s7)}copy(J,Q){if(super.copy(J,Q),this.bindMode=J.bindMode,this.bindMatrix.copy(J.bindMatrix),this.bindMatrixInverse.copy(J.bindMatrixInverse),this.skeleton=J.skeleton,J.boundingBox!==null)this.boundingBox=J.boundingBox.clone();if(J.boundingSphere!==null)this.boundingSphere=J.boundingSphere.clone();return this}raycast(J,Q){let $=this.material,W=this.matrixWorld;if($===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(M$.copy(this.boundingSphere),M$.applyMatrix4(W),J.ray.intersectsSphere(M$)===!1)return;if(ZH.copy(W).invert(),D$.copy(J.ray).applyMatrix4(ZH),this.boundingBox!==null){if(D$.intersectsBox(this.boundingBox)===!1)return}this._computeIntersections(J,Q,D$)}getVertexPosition(J,Q){return super.getVertexPosition(J,Q),this.applyBoneTransform(J,Q),Q}bind(J,Q){if(this.skeleton=J,Q===void 0)this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),Q=this.matrixWorld;this.bindMatrix.copy(Q),this.bindMatrixInverse.copy(Q).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let J=new YJ,Q=this.geometry.attributes.skinWeight;for(let $=0,W=Q.count;$<W;$++){J.fromBufferAttribute(Q,$);let Z=1/J.manhattanLength();if(Z!==1/0)J.multiplyScalar(Z);else J.set(1,0,0,0);Q.setXYZW($,J.x,J.y,J.z,J.w)}}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.bindMode==="attached")this.bindMatrixInverse.copy(this.matrixWorld).invert();else if(this.bindMode==="detached")this.bindMatrixInverse.copy(this.bindMatrix).invert();else A0("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(J,Q){let $=this.skeleton,W=this.geometry;if(QH.fromBufferAttribute(W.attributes.skinIndex,J),$H.fromBufferAttribute(W.attributes.skinWeight,J),Q.isVector4)n9.copy(Q),Q.set(0,0,0,0);else n9.set(...Q,1),Q.set(0,0,0);n9.applyMatrix4(this.bindMatrix);for(let Z=0;Z<4;Z++){let H=$H.getComponent(Z);if(H!==0){let K=QH.getComponent(Z);WH.multiplyMatrices($.bones[K].matrixWorld,$.boneInverses[K]),Q.addScaledVector(xX.copy(n9).applyMatrix4(WH),H)}}if(Q.isVector4)Q.w=n9.w;return Q.applyMatrix4(this.bindMatrixInverse)}}class E7 extends KJ{constructor(){super();this.isBone=!0,this.type="Bone"}}class G7 extends BJ{constructor(J=null,Q=1,$=1,W,Z,H,K,Y,X=1003,U=1003,E,N){super(null,H,K,Y,X,U,W,Z,E,N);this.isDataTexture=!0,this.image={data:J,width:Q,height:$},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var HH=new b0,gX=new b0;class N7{constructor(J=[],Q=[]){this.uuid=V8(),this.bones=J.slice(0),this.boneInverses=Q,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let J=this.bones,Q=this.boneInverses;if(this.boneMatrices=new Float32Array(J.length*16),Q.length===0)this.calculateInverses();else if(J.length!==Q.length){A0("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let $=0,W=this.bones.length;$<W;$++)this.boneInverses.push(new b0)}}calculateInverses(){this.boneInverses.length=0;for(let J=0,Q=this.bones.length;J<Q;J++){let $=new b0;if(this.bones[J])$.copy(this.bones[J].matrixWorld).invert();this.boneInverses.push($)}}pose(){for(let J=0,Q=this.bones.length;J<Q;J++){let $=this.bones[J];if($)$.matrixWorld.copy(this.boneInverses[J]).invert()}for(let J=0,Q=this.bones.length;J<Q;J++){let $=this.bones[J];if($){if($.parent&&$.parent.isBone)$.matrix.copy($.parent.matrixWorld).invert(),$.matrix.multiply($.matrixWorld);else $.matrix.copy($.matrixWorld);$.matrix.decompose($.position,$.quaternion,$.scale)}}}update(){let J=this.bones,Q=this.boneInverses,$=this.boneMatrices,W=this.boneTexture;for(let Z=0,H=J.length;Z<H;Z++){let K=J[Z]?J[Z].matrixWorld:gX;HH.multiplyMatrices(K,Q[Z]),HH.toArray($,Z*16)}if(W!==null)W.needsUpdate=!0}clone(){return new N7(this.bones,this.boneInverses)}computeBoneTexture(){let J=Math.sqrt(this.bones.length*4);J=Math.ceil(J/4)*4,J=Math.max(J,4);let Q=new Float32Array(J*J*4);Q.set(this.boneMatrices);let $=new G7(Q,J,J,1023,1015);return $.needsUpdate=!0,this.boneMatrices=Q,this.boneTexture=$,this}getBoneByName(J){for(let Q=0,$=this.bones.length;Q<$;Q++){let W=this.bones[Q];if(W.name===J)return W}return}dispose(){if(this.boneTexture!==null)this.boneTexture.dispose(),this.boneTexture=null}fromJSON(J,Q){this.uuid=J.uuid;for(let $=0,W=J.bones.length;$<W;$++){let Z=J.bones[$],H=Q[Z];if(H===void 0)A0("Skeleton: No bone found with UUID:",Z),H=new E7;this.bones.push(H),this.boneInverses.push(new b0().fromArray(J.boneInverses[$]))}return this.init(),this}toJSON(){let J={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};J.uuid=this.uuid;let Q=this.bones,$=this.boneInverses;for(let W=0,Z=Q.length;W<Z;W++){let H=Q[W];J.bones.push(H.uuid);let K=$[W];J.boneInverses.push(K.toArray())}return J}}class N6 extends _J{constructor(J,Q,$,W=1){super(J,Q,$);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=W}copy(J){return super.copy(J),this.meshPerAttribute=J.meshPerAttribute,this}toJSON(){let J=super.toJSON();return J.meshPerAttribute=this.meshPerAttribute,J.isInstancedBufferAttribute=!0,J}}var U9=new b0,KH=new b0,i7=[],YH=new iJ,pX=new b0,s9=new o0,i9=new Z8;class F6 extends o0{constructor(J,Q,$){super(J,Q);this.isInstancedMesh=!0,this.instanceMatrix=new N6(new Float32Array($*16),16),this.instanceColor=null,this.morphTexture=null,this.count=$,this.boundingBox=null,this.boundingSphere=null;for(let W=0;W<$;W++)this.setMatrixAt(W,pX)}computeBoundingBox(){let J=this.geometry,Q=this.count;if(this.boundingBox===null)this.boundingBox=new iJ;if(J.boundingBox===null)J.computeBoundingBox();this.boundingBox.makeEmpty();for(let $=0;$<Q;$++)this.getMatrixAt($,U9),YH.copy(J.boundingBox).applyMatrix4(U9),this.boundingBox.union(YH)}computeBoundingSphere(){let J=this.geometry,Q=this.count;if(this.boundingSphere===null)this.boundingSphere=new Z8;if(J.boundingSphere===null)J.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let $=0;$<Q;$++)this.getMatrixAt($,U9),i9.copy(J.boundingSphere).applyMatrix4(U9),this.boundingSphere.union(i9)}copy(J,Q){if(super.copy(J,Q),this.instanceMatrix.copy(J.instanceMatrix),J.morphTexture!==null)this.morphTexture=J.morphTexture.clone();if(J.instanceColor!==null)this.instanceColor=J.instanceColor.clone();if(this.count=J.count,J.boundingBox!==null)this.boundingBox=J.boundingBox.clone();if(J.boundingSphere!==null)this.boundingSphere=J.boundingSphere.clone();return this}getColorAt(J,Q){if(this.instanceColor===null)return Q.setRGB(1,1,1);else return Q.fromArray(this.instanceColor.array,J*3)}getMatrixAt(J,Q){return Q.fromArray(this.instanceMatrix.array,J*16)}getMorphAt(J,Q){let $=Q.morphTargetInfluences,W=this.morphTexture.source.data.data,Z=$.length+1,H=J*Z+1;for(let K=0;K<$.length;K++)$[K]=W[H+K]}raycast(J,Q){let $=this.matrixWorld,W=this.count;if(s9.geometry=this.geometry,s9.material=this.material,s9.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(i9.copy(this.boundingSphere),i9.applyMatrix4($),J.ray.intersectsSphere(i9)===!1)return;for(let Z=0;Z<W;Z++){this.getMatrixAt(Z,U9),KH.multiplyMatrices($,U9),s9.matrixWorld=KH,s9.raycast(J,i7);for(let H=0,K=i7.length;H<K;H++){let Y=i7[H];Y.instanceId=Z,Y.object=this,Q.push(Y)}i7.length=0}}setColorAt(J,Q){if(this.instanceColor===null)this.instanceColor=new N6(new Float32Array(this.instanceMatrix.count*3).fill(1),3);return Q.toArray(this.instanceColor.array,J*3),this}setMatrixAt(J,Q){return Q.toArray(this.instanceMatrix.array,J*16),this}setMorphAt(J,Q){let $=Q.morphTargetInfluences,W=$.length+1;if(this.morphTexture===null)this.morphTexture=new G7(new Float32Array(W*this.count),W,this.count,1028,1015);let Z=this.morphTexture.source.data.data,H=0;for(let X=0;X<$.length;X++)H+=$[X];let K=this.geometry.morphTargetsRelative?1:1-H,Y=W*J;return Z[Y]=K,Z.set($,Y+1),this}updateMorphTargets(){}dispose(){if(super.dispose(),this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null}}var P6=new Z8,lX=new y0(0.5,0.5),o7=new h;class q7{constructor(J=new G8,Q=new G8,$=new G8,W=new G8,Z=new G8,H=new G8){this.planes=[J,Q,$,W,Z,H]}set(J,Q,$,W,Z,H){let K=this.planes;return K[0].copy(J),K[1].copy(Q),K[2].copy($),K[3].copy(W),K[4].copy(Z),K[5].copy(H),this}copy(J){let Q=this.planes;for(let $=0;$<6;$++)Q[$].copy(J.planes[$]);return this}setFromProjectionMatrix(J,Q=2000,$=!1){let W=this.planes,Z=J.elements,H=Z[0],K=Z[1],Y=Z[2],X=Z[3],U=Z[4],E=Z[5],N=Z[6],G=Z[7],q=Z[8],R=Z[9],k=Z[10],F=Z[11],O=Z[12],z=Z[13],A=Z[14],V=Z[15];if(W[0].setComponents(X-H,G-U,F-q,V-O).normalize(),W[1].setComponents(X+H,G+U,F+q,V+O).normalize(),W[2].setComponents(X+K,G+E,F+R,V+z).normalize(),W[3].setComponents(X-K,G-E,F-R,V-z).normalize(),$)W[4].setComponents(Y,N,k,A).normalize(),W[5].setComponents(X-Y,G-N,F-k,V-A).normalize();else if(W[4].setComponents(X-Y,G-N,F-k,V-A).normalize(),Q===2000)W[5].setComponents(X+Y,G+N,F+k,V+A).normalize();else if(Q===2001)W[5].setComponents(Y,N,k,A).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+Q);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();P6.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let Q=J.geometry;if(Q.boundingSphere===null)Q.computeBoundingSphere();P6.copy(Q.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(P6)}intersectsSprite(J){P6.center.set(0,0,0);let Q=lX.distanceTo(J.center);return P6.radius=0.7071067811865476+Q,P6.applyMatrix4(J.matrixWorld),this.intersectsSphere(P6)}intersectsSphere(J){let Q=this.planes,$=J.center,W=-J.radius;for(let Z=0;Z<6;Z++)if(Q[Z].distanceToPoint($)<W)return!1;return!0}intersectsBox(J){let Q=this.planes;for(let $=0;$<6;$++){let W=Q[$];if(o7.x=W.normal.x>0?J.max.x:J.min.x,o7.y=W.normal.y>0?J.max.y:J.min.y,o7.z=W.normal.z>0?J.max.z:J.min.z,W.distanceToPoint(o7)<0)return!1}return!0}containsPoint(J){let Q=this.planes;for(let $=0;$<6;$++)if(Q[$].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class F7 extends oJ{constructor(J){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new j0(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.linewidth=J.linewidth,this.linecap=J.linecap,this.linejoin=J.linejoin,this.fog=J.fog,this}}var WQ=new h,ZQ=new h,XH=new b0,o9=new h6,a7=new Z8,V$=new h,UH=new h;class w9 extends KJ{constructor(J=new FJ,Q=new F7){super();this.isLine=!0,this.type="Line",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(J,Q){return super.copy(J,Q),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}computeLineDistances(){let J=this.geometry;if(J.index===null){let Q=J.attributes.position,$=[0];for(let W=1,Z=Q.count;W<Z;W++)WQ.fromBufferAttribute(Q,W-1),ZQ.fromBufferAttribute(Q,W),$[W]=$[W-1],$[W]+=WQ.distanceTo(ZQ);J.setAttribute("lineDistance",new e0($,1))}else A0("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,Q){let $=this.geometry,W=this.matrixWorld,Z=J.params.Line.threshold,H=$.drawRange;if($.boundingSphere===null)$.computeBoundingSphere();if(a7.copy($.boundingSphere),a7.applyMatrix4(W),a7.radius+=Z,J.ray.intersectsSphere(a7)===!1)return;XH.copy(W).invert(),o9.copy(J.ray).applyMatrix4(XH);let K=Z/((this.scale.x+this.scale.y+this.scale.z)/3),Y=K*K,X=this.isLineSegments?2:1,U=$.index,N=$.attributes.position;if(U!==null){let G=Math.max(0,H.start),q=Math.min(U.count,H.start+H.count);for(let R=G,k=q-1;R<k;R+=X){let F=U.getX(R),O=U.getX(R+1),z=r7(this,J,o9,Y,F,O,R);if(z)Q.push(z)}if(this.isLineLoop){let R=U.getX(q-1),k=U.getX(G),F=r7(this,J,o9,Y,R,k,q-1);if(F)Q.push(F)}}else{let G=Math.max(0,H.start),q=Math.min(N.count,H.start+H.count);for(let R=G,k=q-1;R<k;R+=X){let F=r7(this,J,o9,Y,R,R+1,R);if(F)Q.push(F)}if(this.isLineLoop){let R=r7(this,J,o9,Y,q-1,G,q-1);if(R)Q.push(R)}}}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let W=Q[$[0]];if(W!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let Z=0,H=W.length;Z<H;Z++){let K=W[Z].name||String(Z);this.morphTargetInfluences.push(0),this.morphTargetDictionary[K]=Z}}}}}function r7(J,Q,$,W,Z,H,K){let Y=J.geometry.attributes.position;if(WQ.fromBufferAttribute(Y,Z),ZQ.fromBufferAttribute(Y,H),$.distanceSqToSegment(WQ,ZQ,V$,UH)>W)return;V$.applyMatrix4(J.matrixWorld);let U=Q.ray.origin.distanceTo(V$);if(U<Q.near||U>Q.far)return;return{distance:U,point:UH.clone().applyMatrix4(J.matrixWorld),index:K,face:null,faceIndex:null,barycoord:null,object:J}}var EH=new h,GH=new h;class wQ extends w9{constructor(J,Q){super(J,Q);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let J=this.geometry;if(J.index===null){let Q=J.attributes.position,$=[];for(let W=0,Z=Q.count;W<Z;W+=2)EH.fromBufferAttribute(Q,W),GH.fromBufferAttribute(Q,W+1),$[W]=W===0?0:$[W-1],$[W+1]=$[W]+EH.distanceTo(GH);J.setAttribute("lineDistance",new e0($,1))}else A0("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class zQ extends w9{constructor(J,Q){super(J,Q);this.isLineLoop=!0,this.type="LineLoop"}}class O7 extends oJ{constructor(J){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new j0(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.alphaMap=J.alphaMap,this.size=J.size,this.sizeAttenuation=J.sizeAttenuation,this.fog=J.fog,this}}var NH=new b0,C$=new h6,t7=new Z8,e7=new h;class PQ extends KJ{constructor(J=new FJ,Q=new O7){super();this.isPoints=!0,this.type="Points",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(J,Q){return super.copy(J,Q),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,Q){let $=this.geometry,W=this.matrixWorld,Z=J.params.Points.threshold,H=$.drawRange;if($.boundingSphere===null)$.computeBoundingSphere();if(t7.copy($.boundingSphere),t7.applyMatrix4(W),t7.radius+=Z,J.ray.intersectsSphere(t7)===!1)return;NH.copy(W).invert(),C$.copy(J.ray).applyMatrix4(NH);let K=Z/((this.scale.x+this.scale.y+this.scale.z)/3),Y=K*K,X=$.index,E=$.attributes.position;if(X!==null){let N=Math.max(0,H.start),G=Math.min(X.count,H.start+H.count);for(let q=N,R=G;q<R;q++){let k=X.getX(q);e7.fromBufferAttribute(E,k),qH(e7,k,Y,W,J,Q,this)}}else{let N=Math.max(0,H.start),G=Math.min(E.count,H.start+H.count);for(let q=N,R=G;q<R;q++)e7.fromBufferAttribute(E,q),qH(e7,q,Y,W,J,Q,this)}}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let W=Q[$[0]];if(W!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let Z=0,H=W.length;Z<H;Z++){let K=W[Z].name||String(Z);this.morphTargetInfluences.push(0),this.morphTargetDictionary[K]=Z}}}}}function qH(J,Q,$,W,Z,H,K){let Y=C$.distanceSqToPoint(J);if(Y<$){let X=new h;C$.closestPointToPoint(J,X),X.applyMatrix4(W);let U=Z.ray.origin.distanceTo(X);if(U<Z.near||U>Z.far)return;H.push({distance:U,distanceToRay:Math.sqrt(Y),point:X,index:Q,face:null,faceIndex:null,barycoord:null,object:K})}}class _Q extends BJ{constructor(J=[],Q=301,$,W,Z,H,K,Y,X,U){super(J,Q,$,W,Z,H,K,Y,X,U);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class z9 extends BJ{constructor(J,Q,$,W,Z,H,K,Y,X){super(J,Q,$,W,Z,H,K,Y,X);this.isCanvasTexture=!0,this.needsUpdate=!0}}class b6 extends BJ{constructor(J,Q,$=1014,W,Z,H,K=1003,Y=1003,X,U=1026,E=1){if(U!==1026&&U!==1027)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let N={width:J,height:Q,depth:E};super(N,W,Z,H,K,Y,U,$,X);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.source=new H7(Object.assign({},J.image)),this.compareFunction=J.compareFunction,this}toJSON(J){let Q=super.toJSON(J);return Q.compareFunction=this.compareFunction,Q}}class AW extends b6{constructor(J,Q=1014,$=301,W,Z,H=1003,K=1003,Y,X=1026){let U={width:J,height:J,depth:1},E=[U,U,U,U,U,U];super(J,J,Q,$,W,Z,H,K,Y,X);this.image=E,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(J){this.image=J}}class AQ extends BJ{constructor(J=null){super();this.sourceTexture=J,this.isExternalTexture=!0}copy(J){return super.copy(J),this.sourceTexture=J.sourceTexture,this}}class I8 extends FJ{constructor(J=1,Q=1,$=1,W=1,Z=1,H=1){super();this.type="BoxGeometry",this.parameters={width:J,height:Q,depth:$,widthSegments:W,heightSegments:Z,depthSegments:H};let K=this;W=Math.floor(W),Z=Math.floor(Z),H=Math.floor(H);let Y=[],X=[],U=[],E=[],N=0,G=0;q("z","y","x",-1,-1,$,Q,J,H,Z,0),q("z","y","x",1,-1,$,Q,-J,H,Z,1),q("x","z","y",1,1,J,$,Q,W,H,2),q("x","z","y",1,-1,J,$,-Q,W,H,3),q("x","y","z",1,-1,J,Q,$,W,Z,4),q("x","y","z",-1,-1,J,Q,-$,W,Z,5),this.setIndex(Y),this.setAttribute("position",new e0(X,3)),this.setAttribute("normal",new e0(U,3)),this.setAttribute("uv",new e0(E,2));function q(R,k,F,O,z,A,V,I,P,_,M){let C=A/P,l=V/_,y=A/2,b=V/2,e=I/2,S=P+1,u=_+1,Q0=0,d=0,Y0=new h;for(let r=0;r<u;r++){let $0=r*l-b;for(let Z0=0;Z0<S;Z0++){let C0=Z0*C-y;Y0[R]=C0*O,Y0[k]=$0*z,Y0[F]=e,X.push(Y0.x,Y0.y,Y0.z),Y0[R]=0,Y0[k]=0,Y0[F]=I>0?1:-1,U.push(Y0.x,Y0.y,Y0.z),E.push(Z0/P),E.push(1-r/_),Q0+=1}}for(let r=0;r<_;r++)for(let $0=0;$0<P;$0++){let Z0=N+$0+S*r,C0=N+$0+S*(r+1),T0=N+($0+1)+S*(r+1),$J=N+($0+1)+S*r;Y.push(Z0,C0,$J),Y.push(C0,T0,$J),d+=6}K.addGroup(G,d,M),G+=d,N+=Q0}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new I8(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}class P9 extends FJ{constructor(J=1,Q=32,$=0,W=Math.PI*2){super();this.type="CircleGeometry",this.parameters={radius:J,segments:Q,thetaStart:$,thetaLength:W},Q=Math.max(3,Q);let Z=[],H=[],K=[],Y=[],X=new h,U=new y0;H.push(0,0,0),K.push(0,0,1),Y.push(0.5,0.5);for(let E=0,N=3;E<=Q;E++,N+=3){let G=$+E/Q*W;X.x=J*Math.cos(G),X.y=J*Math.sin(G),H.push(X.x,X.y,X.z),K.push(0,0,1),U.x=(H[N]/J+1)/2,U.y=(H[N+1]/J+1)/2,Y.push(U.x,U.y)}for(let E=1;E<=Q;E++)Z.push(E,E+1,0);this.setIndex(Z),this.setAttribute("position",new e0(H,3)),this.setAttribute("normal",new e0(K,3)),this.setAttribute("uv",new e0(Y,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new P9(J.radius,J.segments,J.thetaStart,J.thetaLength)}}class x6 extends FJ{constructor(J=1,Q=1,$=1,W=32,Z=1,H=!1,K=0,Y=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:J,radiusBottom:Q,height:$,radialSegments:W,heightSegments:Z,openEnded:H,thetaStart:K,thetaLength:Y};let X=this;W=Math.floor(W),Z=Math.floor(Z);let U=[],E=[],N=[],G=[],q=0,R=[],k=$/2,F=0;if(O(),H===!1){if(J>0)z(!0);if(Q>0)z(!1)}this.setIndex(U),this.setAttribute("position",new e0(E,3)),this.setAttribute("normal",new e0(N,3)),this.setAttribute("uv",new e0(G,2));function O(){let A=new h,V=new h,I=0,P=(Q-J)/$;for(let _=0;_<=Z;_++){let M=[],C=_/Z,l=C*(Q-J)+J;for(let y=0;y<=W;y++){let b=y/W,e=b*Y+K,S=Math.sin(e),u=Math.cos(e);V.x=l*S,V.y=-C*$+k,V.z=l*u,E.push(V.x,V.y,V.z),A.set(S,P,u).normalize(),N.push(A.x,A.y,A.z),G.push(b,1-C),M.push(q++)}R.push(M)}for(let _=0;_<W;_++)for(let M=0;M<Z;M++){let C=R[M][_],l=R[M+1][_],y=R[M+1][_+1],b=R[M][_+1];if(J>0||M!==0)U.push(C,l,b),I+=3;if(Q>0||M!==Z-1)U.push(l,y,b),I+=3}X.addGroup(F,I,0),F+=I}function z(A){let V=q,I=new y0,P=new h,_=0,M=A===!0?J:Q,C=A===!0?1:-1;for(let y=1;y<=W;y++)E.push(0,k*C,0),N.push(0,C,0),G.push(0.5,0.5),q++;let l=q;for(let y=0;y<=W;y++){let e=y/W*Y+K,S=Math.cos(e),u=Math.sin(e);P.x=M*u,P.y=k*C,P.z=M*S,E.push(P.x,P.y,P.z),N.push(0,C,0),I.x=S*0.5+0.5,I.y=u*0.5*C+0.5,G.push(I.x,I.y),q++}for(let y=0;y<W;y++){let b=V+y,e=l+y;if(A===!0)U.push(e,e+1,b);else U.push(e+1,e,b);_+=3}X.addGroup(F,_,A===!0?1:2),F+=_}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new x6(J.radiusTop,J.radiusBottom,J.height,J.radialSegments,J.heightSegments,J.openEnded,J.thetaStart,J.thetaLength)}}class R7 extends x6{constructor(J=1,Q=1,$=32,W=1,Z=!1,H=0,K=Math.PI*2){super(0,J,Q,$,W,Z,H,K);this.type="ConeGeometry",this.parameters={radius:J,height:Q,radialSegments:$,heightSegments:W,openEnded:Z,thetaStart:H,thetaLength:K}}static fromJSON(J){return new R7(J.radius,J.height,J.radialSegments,J.heightSegments,J.openEnded,J.thetaStart,J.thetaLength)}}class aJ extends FJ{constructor(J=1,Q=1,$=1,W=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:Q,widthSegments:$,heightSegments:W};let Z=J/2,H=Q/2,K=Math.floor($),Y=Math.floor(W),X=K+1,U=Y+1,E=J/K,N=Q/Y,G=[],q=[],R=[],k=[];for(let F=0;F<U;F++){let O=F*N-H;for(let z=0;z<X;z++){let A=z*E-Z;q.push(A,-O,0),R.push(0,0,1),k.push(z/K),k.push(1-F/Y)}}for(let F=0;F<Y;F++)for(let O=0;O<K;O++){let z=O+X*F,A=O+X*(F+1),V=O+1+X*(F+1),I=O+1+X*F;G.push(z,A,I),G.push(A,V,I)}this.setIndex(G),this.setAttribute("position",new e0(q,3)),this.setAttribute("normal",new e0(R,3)),this.setAttribute("uv",new e0(k,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new aJ(J.width,J.height,J.widthSegments,J.heightSegments)}}class _9 extends FJ{constructor(J=0.5,Q=1,$=32,W=1,Z=0,H=Math.PI*2){super();this.type="RingGeometry",this.parameters={innerRadius:J,outerRadius:Q,thetaSegments:$,phiSegments:W,thetaStart:Z,thetaLength:H},$=Math.max(3,$),W=Math.max(1,W);let K=[],Y=[],X=[],U=[],E=J,N=(Q-J)/W,G=new h,q=new y0;for(let R=0;R<=W;R++){for(let k=0;k<=$;k++){let F=Z+k/$*H;G.x=E*Math.cos(F),G.y=E*Math.sin(F),Y.push(G.x,G.y,G.z),X.push(0,0,1),q.x=(G.x/Q+1)/2,q.y=(G.y/Q+1)/2,U.push(q.x,q.y)}E+=N}for(let R=0;R<W;R++){let k=R*($+1);for(let F=0;F<$;F++){let O=F+k,z=O,A=O+$+1,V=O+$+2,I=O+1;K.push(z,A,I),K.push(A,V,I)}}this.setIndex(K),this.setAttribute("position",new e0(Y,3)),this.setAttribute("normal",new e0(X,3)),this.setAttribute("uv",new e0(U,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new _9(J.innerRadius,J.outerRadius,J.thetaSegments,J.phiSegments,J.thetaStart,J.thetaLength)}}class g6 extends FJ{constructor(J=1,Q=32,$=16,W=0,Z=Math.PI*2,H=0,K=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:J,widthSegments:Q,heightSegments:$,phiStart:W,phiLength:Z,thetaStart:H,thetaLength:K},Q=Math.max(3,Math.floor(Q)),$=Math.max(2,Math.floor($));let Y=Math.min(H+K,Math.PI),X=0,U=[],E=new h,N=new h,G=[],q=[],R=[],k=[];for(let F=0;F<=$;F++){let O=[],z=F/$,A=H+z*K,V=J*Math.cos(A),I=Math.sqrt(J*J-V*V),P=0;if(F===0&&H===0)P=0.5/Q;else if(F===$&&Y===Math.PI)P=-0.5/Q;for(let _=0;_<=Q;_++){let M=_/Q,C=W+M*Z;E.x=-I*Math.cos(C),E.y=V,E.z=I*Math.sin(C),q.push(E.x,E.y,E.z),N.copy(E).normalize(),R.push(N.x,N.y,N.z),k.push(M+P,1-z),O.push(X++)}U.push(O)}for(let F=0;F<$;F++)for(let O=0;O<Q;O++){let z=U[F][O+1],A=U[F][O],V=U[F+1][O],I=U[F+1][O+1];if(F!==0||H>0)G.push(z,A,I);if(F!==$-1||Y<Math.PI)G.push(A,V,I)}this.setIndex(G),this.setAttribute("position",new e0(q,3)),this.setAttribute("normal",new e0(R,3)),this.setAttribute("uv",new e0(k,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new g6(J.radius,J.widthSegments,J.heightSegments,J.phiStart,J.phiLength,J.thetaStart,J.thetaLength)}}class A9 extends FJ{constructor(J=1,Q=0.4,$=12,W=48,Z=Math.PI*2,H=0,K=Math.PI*2){super();this.type="TorusGeometry",this.parameters={radius:J,tube:Q,radialSegments:$,tubularSegments:W,arc:Z,thetaStart:H,thetaLength:K},$=Math.floor($),W=Math.floor(W);let Y=[],X=[],U=[],E=[],N=new h,G=new h,q=new h;for(let R=0;R<=$;R++){let k=H+R/$*K;for(let F=0;F<=W;F++){let O=F/W*Z;G.x=(J+Q*Math.cos(k))*Math.cos(O),G.y=(J+Q*Math.cos(k))*Math.sin(O),G.z=Q*Math.sin(k),X.push(G.x,G.y,G.z),N.x=J*Math.cos(O),N.y=J*Math.sin(O),q.subVectors(G,N).normalize(),U.push(q.x,q.y,q.z),E.push(F/W),E.push(R/$)}}for(let R=1;R<=$;R++)for(let k=1;k<=W;k++){let F=(W+1)*R+k-1,O=(W+1)*(R-1)+k-1,z=(W+1)*(R-1)+k,A=(W+1)*R+k;Y.push(F,O,A),Y.push(O,z,A)}this.setIndex(Y),this.setAttribute("position",new e0(X,3)),this.setAttribute("normal",new e0(U,3)),this.setAttribute("uv",new e0(E,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new A9(J.radius,J.tube,J.radialSegments,J.tubularSegments,J.arc,J.thetaStart,J.thetaLength)}}function p6(J){let Q={};for(let $ in J){Q[$]={};for(let W in J[$]){let Z=J[$][W];if(FH(Z))if(Z.isRenderTargetTexture)A0("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),Q[$][W]=null;else Q[$][W]=Z.clone();else if(Array.isArray(Z))if(FH(Z[0])){let H=[];for(let K=0,Y=Z.length;K<Y;K++)H[K]=Z[K].clone();Q[$][W]=H}else Q[$][W]=Z.slice();else Q[$][W]=Z}}return Q}function mJ(J){let Q={};for(let $=0;$<J.length;$++){let W=p6(J[$]);for(let Z in W)Q[Z]=W[Z]}return Q}function FH(J){return J&&(J.isColor||J.isMatrix3||J.isMatrix4||J.isVector2||J.isVector3||J.isVector4||J.isTexture||J.isQuaternion)}function mX(J){let Q=[];for(let $=0;$<J.length;$++)Q.push(J[$].clone());return Q}function TW(J){let Q=J.getRenderTarget();if(Q===null)return J.outputColorSpace;if(Q.isXRRenderTarget===!0)return Q.texture.colorSpace;return c0.workingColorSpace}var CK={clone:p6,merge:mJ},dX=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uX=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class rJ extends oJ{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dX,this.fragmentShader=uX,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=p6(J.uniforms),this.uniformsGroups=mX(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this.defaultAttributeValues=Object.assign({},J.defaultAttributeValues),this.index0AttributeName=J.index0AttributeName,this.uniformsNeedUpdate=J.uniformsNeedUpdate,this}toJSON(J){let Q=super.toJSON(J);Q.glslVersion=this.glslVersion,Q.uniforms={};for(let W in this.uniforms){let H=this.uniforms[W].value;if(H&&H.isTexture)Q.uniforms[W]={type:"t",value:H.toJSON(J).uuid};else if(H&&H.isColor)Q.uniforms[W]={type:"c",value:H.getHex()};else if(H&&H.isVector2)Q.uniforms[W]={type:"v2",value:H.toArray()};else if(H&&H.isVector3)Q.uniforms[W]={type:"v3",value:H.toArray()};else if(H&&H.isVector4)Q.uniforms[W]={type:"v4",value:H.toArray()};else if(H&&H.isMatrix3)Q.uniforms[W]={type:"m3",value:H.toArray()};else if(H&&H.isMatrix4)Q.uniforms[W]={type:"m4",value:H.toArray()};else Q.uniforms[W]={value:H}}if(Object.keys(this.defines).length>0)Q.defines=this.defines;Q.vertexShader=this.vertexShader,Q.fragmentShader=this.fragmentShader,Q.lights=this.lights,Q.clipping=this.clipping;let $={};for(let W in this.extensions)if(this.extensions[W]===!0)$[W]=!0;if(Object.keys($).length>0)Q.extensions=$;return Q}fromJSON(J,Q){if(super.fromJSON(J,Q),J.uniforms!==void 0)for(let $ in J.uniforms){let W=J.uniforms[$];switch(this.uniforms[$]={},W.type){case"t":this.uniforms[$].value=Q[W.value]||null;break;case"c":this.uniforms[$].value=new j0().setHex(W.value);break;case"v2":this.uniforms[$].value=new y0().fromArray(W.value);break;case"v3":this.uniforms[$].value=new h().fromArray(W.value);break;case"v4":this.uniforms[$].value=new YJ().fromArray(W.value);break;case"m3":this.uniforms[$].value=new x0().fromArray(W.value);break;case"m4":this.uniforms[$].value=new b0().fromArray(W.value);break;default:this.uniforms[$].value=W.value}}if(J.defines!==void 0)this.defines=J.defines;if(J.vertexShader!==void 0)this.vertexShader=J.vertexShader;if(J.fragmentShader!==void 0)this.fragmentShader=J.fragmentShader;if(J.glslVersion!==void 0)this.glslVersion=J.glslVersion;if(J.extensions!==void 0)for(let $ in J.extensions)this.extensions[$]=J.extensions[$];if(J.lights!==void 0)this.lights=J.lights;if(J.clipping!==void 0)this.clipping=J.clipping;return this}}class SW extends rJ{constructor(J){super(J);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class H8 extends oJ{constructor(J){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new j0(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new j0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new y0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new i8,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.defines={STANDARD:""},this.color.copy(J.color),this.roughness=J.roughness,this.metalness=J.metalness,this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.roughnessMap=J.roughnessMap,this.metalnessMap=J.metalnessMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.envMapIntensity=J.envMapIntensity,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class K8 extends H8{constructor(J){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new y0(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return i0(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(Q){this.ior=(1+0.4*Q)/(1-0.4*Q)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new j0(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new j0(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new j0(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(J)}get anisotropy(){return this._anisotropy}set anisotropy(J){if(this._anisotropy>0!==J>0)this.version++;this._anisotropy=J}get clearcoat(){return this._clearcoat}set clearcoat(J){if(this._clearcoat>0!==J>0)this.version++;this._clearcoat=J}get iridescence(){return this._iridescence}set iridescence(J){if(this._iridescence>0!==J>0)this.version++;this._iridescence=J}get dispersion(){return this._dispersion}set dispersion(J){if(this._dispersion>0!==J>0)this.version++;this._dispersion=J}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(J){if(this._retroreflectivity>0!==J>0)this.version++;this._retroreflectivity=J}get sheen(){return this._sheen}set sheen(J){if(this._sheen>0!==J>0)this.version++;this._sheen=J}get transmission(){return this._transmission}set transmission(J){if(this._transmission>0!==J>0)this.version++;this._transmission=J}copy(J){return super.copy(J),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=J.anisotropy,this.anisotropyRotation=J.anisotropyRotation,this.anisotropyMap=J.anisotropyMap,this.clearcoat=J.clearcoat,this.clearcoatMap=J.clearcoatMap,this.clearcoatRoughness=J.clearcoatRoughness,this.clearcoatRoughnessMap=J.clearcoatRoughnessMap,this.clearcoatNormalMap=J.clearcoatNormalMap,this.clearcoatNormalScale.copy(J.clearcoatNormalScale),this.dispersion=J.dispersion,this.ior=J.ior,this.iridescence=J.iridescence,this.iridescenceMap=J.iridescenceMap,this.iridescenceIOR=J.iridescenceIOR,this.iridescenceThicknessRange=[...J.iridescenceThicknessRange],this.iridescenceThicknessMap=J.iridescenceThicknessMap,this.retroreflectivity=J.retroreflectivity,this.sheen=J.sheen,this.sheenColor.copy(J.sheenColor),this.sheenColorMap=J.sheenColorMap,this.sheenRoughness=J.sheenRoughness,this.sheenRoughnessMap=J.sheenRoughnessMap,this.transmission=J.transmission,this.transmissionMap=J.transmissionMap,this.thickness=J.thickness,this.thicknessMap=J.thicknessMap,this.attenuationDistance=J.attenuationDistance,this.attenuationColor.copy(J.attenuationColor),this.specularIntensity=J.specularIntensity,this.specularIntensityMap=J.specularIntensityMap,this.specularColor.copy(J.specularColor),this.specularColorMap=J.specularColorMap,this}}class jW extends oJ{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class vW extends oJ{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}function E6(J,Q){if(!J||J.constructor===Q)return J;if(typeof Q.BYTES_PER_ELEMENT==="number")return new Q(J);return Array.prototype.slice.call(J)}function $Q(J){return J!==void 0&&J.inTangents!==void 0&&J.outTangents!==void 0}function cX(J){function Q(Z,H){return J[Z]-J[H]}let $=J.length,W=Array($);for(let Z=0;Z!==$;++Z)W[Z]=Z;return W.sort(Q),W}function OH(J,Q,$){let W=J.length,Z=new J.constructor(W);for(let H=0,K=0;K!==W;++H){let Y=$[H]*Q;for(let X=0;X!==Q;++X)Z[K++]=J[Y+X]}return Z}function nX(J,Q,$,W){let Z=1,H=J[0];while(H!==void 0&&H[W]===void 0)H=J[Z++];if(H===void 0)return;let K=H[W];if(K===void 0)return;if(Array.isArray(K))do{if(K=H[W],K!==void 0)Q.push(H.time),$.push(...K);H=J[Z++]}while(H!==void 0);else if(K.toArray!==void 0)do{if(K=H[W],K!==void 0)Q.push(H.time),K.toArray($,$.length);H=J[Z++]}while(H!==void 0);else do{if(K=H[W],K!==void 0)Q.push(H.time),$.push(K);H=J[Z++]}while(H!==void 0)}class r8{constructor(J,Q,$,W){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=W!==void 0?W:new Q.constructor($),this.sampleValues=Q,this.valueSize=$,this.settings=null,this.DefaultSettings_={}}evaluate(J){let Q=this.parameterPositions,$=this._cachedIndex,W=Q[$],Z=Q[$-1];J:{Q:{let H;$:{W:if(!(J<W)){for(let K=$+2;;){if(W===void 0){if(J<Z)break W;return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}if($===K)break;if(Z=W,W=Q[++$],J<W)break Q}H=Q.length;break $}if(!(J>=Z)){let K=Q[1];if(J<K)$=2,Z=K;for(let Y=$-2;;){if(Z===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if($===Y)break;if(W=Z,Z=Q[--$-1],J>=Z)break Q}H=$,$=0;break $}break J}while($<H){let K=$+H>>>1;if(J<Q[K])H=K;else $=K+1}if(W=Q[$],Z=Q[$-1],Z===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(W===void 0)return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}this._cachedIndex=$,this.intervalChanged_($,Z,W)}return this.interpolate_($,Z,J,W)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let Q=this.resultBuffer,$=this.sampleValues,W=this.valueSize,Z=J*W;for(let H=0;H!==W;++H)Q[H]=$[Z+H];return Q}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class yW extends r8{constructor(J,Q,$,W){super(J,Q,$,W);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,Q,$){let W=this.parameterPositions,Z=J-2,H=J+1,K=W[Z],Y=W[H];if(K===void 0)switch(this.getSettings_().endingStart){case 2401:Z=J,K=2*Q-$;break;case 2402:Z=W.length-2,K=Q+W[Z]-W[Z+1];break;default:Z=J,K=$}if(Y===void 0)switch(this.getSettings_().endingEnd){case 2401:H=J,Y=2*$-Q;break;case 2402:H=1,Y=$+W[1]-W[0];break;default:H=J-1,Y=Q}let X=($-Q)*0.5,U=this.valueSize;this._weightPrev=X/(Q-K),this._weightNext=X/(Y-$),this._offsetPrev=Z*U,this._offsetNext=H*U}interpolate_(J,Q,$,W){let Z=this.resultBuffer,H=this.sampleValues,K=this.valueSize,Y=J*K,X=Y-K,U=this._offsetPrev,E=this._offsetNext,N=this._weightPrev,G=this._weightNext,q=($-Q)/(W-Q),R=q*q,k=R*q,F=-N*k+2*N*R-N*q,O=(1+N)*k+(-1.5-2*N)*R+(-0.5+N)*q+1,z=(-1-G)*k+(1.5+G)*R+0.5*q,A=G*k-G*R;for(let V=0;V!==K;++V)Z[V]=F*H[U+V]+O*H[X+V]+z*H[Y+V]+A*H[E+V];return Z}}class TQ extends r8{constructor(J,Q,$,W){super(J,Q,$,W)}interpolate_(J,Q,$,W){let Z=this.resultBuffer,H=this.sampleValues,K=this.valueSize,Y=J*K,X=Y-K,U=($-Q)/(W-Q),E=1-U;for(let N=0;N!==K;++N)Z[N]=H[X+N]*E+H[Y+N]*U;return Z}}class fW extends r8{constructor(J,Q,$,W){super(J,Q,$,W)}interpolate_(J){return this.copySampleValue_(J-1)}}class hW extends r8{interpolate_(J,Q,$,W){let Z=this.resultBuffer,H=this.sampleValues,K=this.valueSize,Y=J*K,X=Y-K,U=this.inTangents,E=this.outTangents;if(!U||!E){let q=($-Q)/(W-Q),R=1-q;for(let k=0;k!==K;++k)Z[k]=H[X+k]*R+H[Y+k]*q;return Z}let N=K*2,G=J-1;for(let q=0;q!==K;++q){let R=H[X+q],k=H[Y+q],F=G*N+q*2,O=E[F],z=E[F+1],A=J*N+q*2,V=U[A],I=U[A+1],P=iX($,Q,O,V,W);Z[q]=IK(P,R,z,I,k)}return Z}}function IK(J,Q,$,W,Z){let H=1-J;return H*H*H*Q+3*H*H*J*$+3*H*J*J*W+J*J*J*Z}function sX(J,Q,$,W,Z){let H=1-J;return 3*H*H*($-Q)+6*H*J*(W-$)+3*J*J*(Z-W)}function iX(J,Q,$,W,Z){let H=(J-Q)/(Z-Q);for(let K=0;K<8;K++){let Y=IK(H,Q,$,W,Z)-J;if(Math.abs(Y)<0.0000000001)break;let X=sX(H,Q,$,W,Z);if(Math.abs(X)<0.0000000001)break;H=Math.max(0,Math.min(1,H-Y/X))}return H}class Y8{constructor(J,Q,$,W){if(J===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(Q===void 0||Q.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=E6(Q,this.TimeBufferType),this.values=E6($,this.ValueBufferType),this.setInterpolation(W||this.DefaultInterpolation)}static toJSON(J){let Q=J.constructor,$;if(Q.toJSON!==this.toJSON)$=Q.toJSON(J);else{$={name:J.name,times:E6(J.times,Array),values:E6(J.values,Array)};let W=J.getInterpolation();if(W!==J.DefaultInterpolation)$.interpolation=W;if($Q(J.settings))$.settings={inTangents:E6(J.settings.inTangents,Array),outTangents:E6(J.settings.outTangents,Array)}}return $.type=J.ValueTypeName,$}InterpolantFactoryMethodDiscrete(J){return new fW(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new TQ(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new yW(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodBezier(J){let Q=new hW(this.times,this.values,this.getValueSize(),J);if(this.settings)Q.inTangents=this.settings.inTangents,Q.outTangents=this.settings.outTangents;return Q}setInterpolation(J){let Q;switch(J){case 2300:Q=this.InterpolantFactoryMethodDiscrete;break;case 2301:Q=this.InterpolantFactoryMethodLinear;break;case 2302:Q=this.InterpolantFactoryMethodSmooth;break;case 2303:Q=this.InterpolantFactoryMethodBezier;break}if(Q===void 0){let $="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error($);return A0("KeyframeTrack:",$),this}return this.createInterpolant=Q,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let Q=this.times;for(let $=0,W=Q.length;$!==W;++$)Q[$]+=J}return this}scale(J){if(J!==1){let Q=this.times;for(let $=0,W=Q.length;$!==W;++$)Q[$]*=J;if($Q(this.settings))RH(this.settings.inTangents,J),RH(this.settings.outTangents,J)}return this}trim(J,Q){let $=this.times,W=$.length,Z=0,H=W-1;while(Z!==W&&$[Z]<J)++Z;while(H!==-1&&$[H]>Q)--H;if(++H,Z!==0||H!==W){if(Z>=H)H=Math.max(H,1),Z=H-1;let K=this.getValueSize();this.times=$.slice(Z,H),this.values=this.values.slice(Z*K,H*K)}return this}validate(){let J=!0,Q=this.getValueSize();if(Q-Math.floor(Q)!==0)f0("KeyframeTrack: Invalid value size in track.",this),J=!1;let $=this.times,W=this.values,Z=$.length;if(Z===0)f0("KeyframeTrack: Track is empty.",this),J=!1;let H=null;for(let K=0;K!==Z;K++){let Y=$[K];if(typeof Y==="number"&&isNaN(Y)){f0("KeyframeTrack: Time is not a valid number.",this,K,Y),J=!1;break}if(H!==null&&H>Y){f0("KeyframeTrack: Out of order keys.",this,K,Y,H),J=!1;break}H=Y}if(W!==void 0){if(ZX(W))for(let K=0,Y=W.length;K!==Y;++K){let X=W[K];if(isNaN(X)){f0("KeyframeTrack: Value is not a valid number.",this,K,X),J=!1;break}}}return J}optimize(){let J=this.times.slice(),Q=this.values.slice(),$=this.getValueSize(),W=this.getInterpolation()===2302,Z=J.length-1,H=1;for(let K=1;K<Z;++K){let Y=!1,X=J[K],U=J[K+1];if(X!==U&&(K!==1||X!==J[0]))if(!W){let E=K*$,N=E-$,G=E+$;for(let q=0;q!==$;++q){let R=Q[E+q];if(R!==Q[N+q]||R!==Q[G+q]){Y=!0;break}}}else Y=!0;if(Y){if(K!==H){J[H]=J[K];let E=K*$,N=H*$;for(let G=0;G!==$;++G)Q[N+G]=Q[E+G]}++H}}if(Z>0){J[H]=J[Z];for(let K=Z*$,Y=H*$,X=0;X!==$;++X)Q[Y+X]=Q[K+X];++H}if(H!==J.length)this.times=J.slice(0,H),this.values=Q.slice(0,H*$);else this.times=J,this.values=Q;return this}clone(){let J=this.times.slice(),Q=this.values.slice(),W=new this.constructor(this.name,J,Q);if(W.createInterpolant=this.createInterpolant,$Q(this.settings))W.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return W}}function RH(J,Q){for(let $=0,W=J.length;$!==W;$+=2)J[$]*=Q}Y8.prototype.ValueTypeName="";Y8.prototype.TimeBufferType=Float32Array;Y8.prototype.ValueBufferType=Float32Array;Y8.prototype.DefaultInterpolation=2301;class O6 extends Y8{constructor(J,Q,$){super(J,Q,$)}}O6.prototype.ValueTypeName="bool";O6.prototype.ValueBufferType=Array;O6.prototype.DefaultInterpolation=2300;O6.prototype.InterpolantFactoryMethodLinear=void 0;O6.prototype.InterpolantFactoryMethodSmooth=void 0;class SQ extends Y8{constructor(J,Q,$,W){super(J,Q,$,W)}}SQ.prototype.ValueTypeName="color";class R6 extends Y8{constructor(J,Q,$,W){super(J,Q,$,W)}}R6.prototype.ValueTypeName="number";class bW extends r8{constructor(J,Q,$,W){super(J,Q,$,W)}interpolate_(J,Q,$,W){let Z=this.resultBuffer,H=this.sampleValues,K=this.valueSize,Y=($-Q)/(W-Q),X=J*K;for(let U=X+K;X!==U;X+=4)hJ.slerpFlat(Z,0,H,X-K,H,X,Y);return Z}}class L6 extends Y8{constructor(J,Q,$,W){super(J,Q,$,W)}InterpolantFactoryMethodLinear(J){return new bW(this.times,this.values,this.getValueSize(),J)}}L6.prototype.ValueTypeName="quaternion";L6.prototype.InterpolantFactoryMethodSmooth=void 0;class M6 extends Y8{constructor(J,Q,$){super(J,Q,$)}}M6.prototype.ValueTypeName="string";M6.prototype.ValueBufferType=Array;M6.prototype.DefaultInterpolation=2300;M6.prototype.InterpolantFactoryMethodLinear=void 0;M6.prototype.InterpolantFactoryMethodSmooth=void 0;class l6 extends Y8{constructor(J,Q,$,W){super(J,Q,$,W)}}l6.prototype.ValueTypeName="vector";class R9{constructor(J="",Q=-1,$=[],W=2500){if(this.name=J,this.tracks=$,this.duration=Q,this.blendMode=W,this.uuid=V8(),this.userData={},this.duration<0)this.resetDuration()}static parse(J){let Q=[],$=J.tracks,W=1/(J.fps||1);for(let H=0,K=$.length;H!==K;++H)Q.push(aX($[H]).scale(W));let Z=new this(J.name,J.duration,Q,J.blendMode);return Z.uuid=J.uuid,Z.userData=JSON.parse(J.userData||"{}"),Z}static toJSON(J){let Q=[],$=J.tracks,W={name:J.name,duration:J.duration,tracks:Q,uuid:J.uuid,blendMode:J.blendMode,userData:JSON.stringify(J.userData)};for(let Z=0,H=$.length;Z!==H;++Z)Q.push(Y8.toJSON($[Z]));return W}static CreateFromMorphTargetSequence(J,Q,$,W){let Z=Q.length,H=[];for(let K=0;K<Z;K++){let Y=[],X=[];Y.push((K+Z-1)%Z,K,(K+1)%Z),X.push(0,1,0);let U=cX(Y);if(Y=OH(Y,1,U),X=OH(X,1,U),!W&&Y[0]===0)Y.push(Z),X.push(X[0]);H.push(new R6(".morphTargetInfluences["+Q[K].name+"]",Y,X).scale(1/$))}return new this(J,-1,H)}static findByName(J,Q){let $=J;if(!Array.isArray(J)){let W=J;$=W.geometry&&W.geometry.animations||W.animations}for(let W=0;W<$.length;W++)if($[W].name===Q)return $[W];return null}static CreateClipsFromMorphTargetSequences(J,Q,$){let W={},Z=/^([\w-]*?)([\d]+)$/;for(let K=0,Y=J.length;K<Y;K++){let X=J[K],U=X.name.match(Z);if(U&&U.length>1){let E=U[1],N=W[E];if(!N)W[E]=N=[];N.push(X)}}let H=[];for(let K in W)H.push(this.CreateFromMorphTargetSequence(K,W[K],Q,$));return H}resetDuration(){let J=this.tracks,Q=0;for(let $=0,W=J.length;$!==W;++$){let Z=this.tracks[$];Q=Math.max(Q,Z.times[Z.times.length-1])}return this.duration=Q,this}trim(){for(let J=0;J<this.tracks.length;J++)this.tracks[J].trim(0,this.duration);return this}validate(){let J=!0;for(let Q=0;Q<this.tracks.length;Q++)J=J&&this.tracks[Q].validate();return J}optimize(){for(let J=0;J<this.tracks.length;J++)this.tracks[J].optimize();return this}clone(){let J=[];for(let $=0;$<this.tracks.length;$++)J.push(this.tracks[$].clone());let Q=new this.constructor(this.name,this.duration,J,this.blendMode);return Q.userData=JSON.parse(JSON.stringify(this.userData)),Q}toJSON(){return this.constructor.toJSON(this)}}function oX(J){switch(J.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return R6;case"vector":case"vector2":case"vector3":case"vector4":return l6;case"color":return SQ;case"quaternion":return L6;case"bool":case"boolean":return O6;case"string":return M6}throw Error("THREE.KeyframeTrack: Unsupported typeName: "+J)}function aX(J){if(J.type===void 0)throw Error("THREE.KeyframeTrack: track type undefined, can not parse");let Q=oX(J.type);if(J.times===void 0){let W=[],Z=[];nX(J.keys,W,Z,"value"),J.times=W,J.values=Z}let $;if(Q.parse!==void 0)$=Q.parse(J);else $=new Q(J.name,J.times,J.values,J.interpolation);if($Q(J.settings))$.settings={inTangents:E6(J.settings.inTangents,Float32Array),outTangents:E6(J.settings.outTangents,Float32Array)};return $}var _8={enabled:!1,files:{},add:function(J,Q){if(this.enabled===!1)return;if(LH(J))return;this.files[J]=Q},get:function(J){if(this.enabled===!1)return;if(LH(J))return;return this.files[J]},remove:function(J){delete this.files[J]},clear:function(){this.files={}}};function LH(J){try{let Q=J.slice(J.indexOf(":")+1);return new URL(Q).protocol==="blob:"}catch(Q){return!1}}class xW{constructor(J,Q,$){let W=this,Z=!1,H=0,K=0,Y=void 0,X=[];this.onStart=void 0,this.onLoad=J,this.onProgress=Q,this.onError=$,this._abortController=null,this.itemStart=function(U){if(K++,Z===!1){if(W.onStart!==void 0)W.onStart(U,H,K)}Z=!0},this.itemEnd=function(U){if(H++,W.onProgress!==void 0)W.onProgress(U,H,K);if(H===K){if(Z=!1,W.onLoad!==void 0)W.onLoad()}},this.itemError=function(U){if(W.onError!==void 0)W.onError(U)},this.resolveURL=function(U){if(U=U.normalize("NFC"),Y)return Y(U);return U},this.setURLModifier=function(U){return Y=U,this},this.addHandler=function(U,E){return X.push(U,E),this},this.removeHandler=function(U){let E=X.indexOf(U);if(E!==-1)X.splice(E,2);return this},this.getHandler=function(U){for(let E=0,N=X.length;E<N;E+=2){let G=X[E],q=X[E+1];if(G.global)G.lastIndex=0;if(G.test(U))return q}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var wK=new xW;class t8{constructor(J){if(this.manager=J!==void 0?J:wK,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(J,Q){let $=this;return new Promise(function(W,Z){$.load(J,W,Q,Z)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}abort(){return this}}t8.DEFAULT_MATERIAL_NAME="__DEFAULT";var n8={};class zK extends Error{constructor(J,Q){super(J);this.response=Q}}class L7 extends t8{constructor(J){super(J);this.mimeType="",this.responseType="",this._abortController=new AbortController}load(J,Q,$,W){if(J===void 0)J="";if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let Z=_8.get(`file:${J}`);if(Z!==void 0){this.manager.itemStart(J),setTimeout(()=>{if(Q)Q(Z);this.manager.itemEnd(J)},0);return}if(n8[J]!==void 0){n8[J].push({onLoad:Q,onProgress:$,onError:W});return}n8[J]=[],n8[J].push({onLoad:Q,onProgress:$,onError:W});let H=new Request(J,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),K=this.mimeType,Y=this.responseType;fetch(H).then((X)=>{if(X.status===200||X.status===0){if(X.status===0)A0("FileLoader: HTTP Status 0 received.");if(typeof ReadableStream>"u"||X.body===void 0||X.body.getReader===void 0)return X;let U=n8[J],E=X.body.getReader(),N=X.headers.get("X-File-Size")||X.headers.get("Content-Length"),G=N?parseInt(N):0,q=G!==0,R=0,k=new ReadableStream({start(F){O();function O(){E.read().then(({done:z,value:A})=>{if(z)F.close();else{R+=A.byteLength;let V=new ProgressEvent("progress",{lengthComputable:q,loaded:R,total:G});for(let I=0,P=U.length;I<P;I++){let _=U[I];if(_.onProgress)_.onProgress(V)}F.enqueue(A),O()}},(z)=>{F.error(z)})}}});return new Response(k)}else throw new zK(`fetch for "${X.url}" responded with ${X.status}: ${X.statusText}`,X)}).then((X)=>{switch(Y){case"arraybuffer":return X.arrayBuffer();case"blob":return X.blob();case"document":return X.text().then((U)=>{return new DOMParser().parseFromString(U,K)});case"json":return X.json();default:if(K==="")return X.text();else{let E=/charset="?([^;"\s]*)"?/i.exec(K),N=E&&E[1]?E[1].toLowerCase():void 0,G=new TextDecoder(N);return X.arrayBuffer().then((q)=>G.decode(q))}}}).then((X)=>{_8.add(`file:${J}`,X);let U=n8[J];delete n8[J];for(let E=0,N=U.length;E<N;E++){let G=U[E];if(G.onLoad)G.onLoad(X)}}).catch((X)=>{let U=n8[J];if(U===void 0)throw this.manager.itemError(J),X;delete n8[J];for(let E=0,N=U.length;E<N;E++){let G=U[E];if(G.onError)G.onError(X)}this.manager.itemError(J)}).finally(()=>{this.manager.itemEnd(J)}),this.manager.itemStart(J)}setResponseType(J){return this.responseType=J,this}setMimeType(J){return this.mimeType=J,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}var E9=new WeakMap;class gW extends t8{constructor(J){super(J)}load(J,Q,$,W){if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let Z=this,H=_8.get(`image:${J}`);if(H!==void 0){if(H.complete===!0)Z.manager.itemStart(J),setTimeout(function(){if(Q)Q(H);Z.manager.itemEnd(J)},0);else{let E=E9.get(H);if(E===void 0)E=[],E9.set(H,E);E.push({onLoad:Q,onError:W})}return H}let K=F9("img");function Y(){if(U(),Q)Q(this);let E=E9.get(this)||[];for(let N=0;N<E.length;N++){let G=E[N];if(G.onLoad)G.onLoad(this)}E9.delete(this),Z.manager.itemEnd(J)}function X(E){if(U(),W)W(E);_8.remove(`image:${J}`);let N=E9.get(this)||[];for(let G=0;G<N.length;G++){let q=N[G];if(q.onError)q.onError(E)}E9.delete(this),Z.manager.itemError(J),Z.manager.itemEnd(J)}function U(){K.removeEventListener("load",Y,!1),K.removeEventListener("error",X,!1)}if(K.addEventListener("load",Y,!1),K.addEventListener("error",X,!1),J.slice(0,5)!=="data:"){if(this.crossOrigin!==void 0)K.crossOrigin=this.crossOrigin}return _8.add(`image:${J}`,K),Z.manager.itemStart(J),K.src=J,K}}class T9 extends t8{constructor(J){super(J)}load(J,Q,$,W){let Z=new BJ,H=new gW(this.manager);return H.setCrossOrigin(this.crossOrigin),H.setPath(this.path),H.load(J,function(K){if(Z.image=K,Z.needsUpdate=!0,Q!==void 0)Q(Z)},$,W),Z}}class S9 extends KJ{constructor(J,Q=1){super();this.isLight=!0,this.type="Light",this.color=new j0(J),this.intensity=Q}copy(J,Q){return super.copy(J,Q),this.color.copy(J.color),this.intensity=J.intensity,this}toJSON(J){let Q=super.toJSON(J);return Q.object.color=this.color.getHex(),Q.object.intensity=this.intensity,Q}}class jQ extends S9{constructor(J,Q,$){super(J,$);this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(KJ.DEFAULT_UP),this.updateMatrix(),this.groundColor=new j0(Q)}copy(J,Q){return super.copy(J,Q),this.groundColor.copy(J.groundColor),this}toJSON(J){let Q=super.toJSON(J);return Q.object.groundColor=this.groundColor.getHex(),Q}}var k$=new b0,MH=new h,DH=new h;class M7{constructor(J){this.camera=J,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new y0(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new b0,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new q7,this._frameExtents=new y0(1,1),this._viewportCount=1,this._viewports=[new YJ(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(J){let Q=this.camera;MH.setFromMatrixPosition(J.matrixWorld),Q.position.copy(MH),DH.setFromMatrixPosition(J.target.matrixWorld),Q.lookAt(DH),Q.updateMatrixWorld(),this._updateMatrix(Q,this.matrix,this._frustum)}_updateMatrix(J,Q,$,W){k$.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),$.setFromProjectionMatrix(k$,J.coordinateSystem,J.reversedDepth);let Z=this._frameExtents,H=W?W.z/Z.x:1,K=W?W.w/Z.y:1,Y=W?W.x/Z.x:0,X=W?W.y/Z.y:0;if(J.coordinateSystem===2001||J.reversedDepth)Q.set(0.5*H,0,0,0.5*H+Y,0,0.5*K,0,0.5*K+X,0,0,1,0,0,0,0,1);else Q.set(0.5*H,0,0,0.5*H+Y,0,0.5*K,0,0.5*K+X,0,0,0.5,0.5,0,0,0,1);Q.multiply(k$)}getViewport(J){return this._viewports[J]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(J){return this.camera=J.camera.clone(),this.intensity=J.intensity,this.bias=J.bias,this.radius=J.radius,this.autoUpdate=J.autoUpdate,this.needsUpdate=J.needsUpdate,this.normalBias=J.normalBias,this.blurSamples=J.blurSamples,this.mapSize.copy(J.mapSize),this.biasNode=J.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let J={};return J.intensity=this.intensity,J.bias=this.bias,J.normalBias=this.normalBias,J.radius=this.radius,J.blurSamples=this.blurSamples,J.mapSize=this.mapSize.toArray(),J.camera=this.camera.toJSON(!1).object,delete J.camera.matrix,J}}var JQ=new h,QQ=new hJ,P8=new h;class vQ extends KJ{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new b0,this.projectionMatrix=new b0,this.projectionMatrixInverse=new b0,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(J,Q){return super.copy(J,Q),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.matrixWorld.decompose(JQ,QQ,P8),P8.x===1&&P8.y===1&&P8.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(JQ,QQ,P8.set(1,1,1)).invert()}updateWorldMatrix(J,Q,$=!1){if(super.updateWorldMatrix(J,Q,$),this.matrixWorld.decompose(JQ,QQ,P8),P8.x===1&&P8.y===1&&P8.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(JQ,QQ,P8.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var U6=new h,VH=new y0,kH=new y0;class PJ extends vQ{constructor(J=50,Q=1,$=0.1,W=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=$,this.far=W,this.focus=10,this.aspect=Q,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let Q=0.5*this.getFilmHeight()/J;this.fov=A6*2*Math.atan(Q),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan(a9*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return A6*2*Math.atan(Math.tan(a9*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,Q,$){U6.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),Q.set(U6.x,U6.y).multiplyScalar(-J/U6.z),U6.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),$.set(U6.x,U6.y).multiplyScalar(-J/U6.z)}getViewSize(J,Q){return this.getViewBounds(J,VH,kH),Q.subVectors(kH,VH)}setViewOffset(J,Q,$,W,Z,H){if(this.aspect=J/Q,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=W,this.view.width=Z,this.view.height=H,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,Q=J*Math.tan(a9*0.5*this.fov)/this.zoom,$=2*Q,W=this.aspect*$,Z=-0.5*W,H=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:Y,fullHeight:X}=H;Z+=H.offsetX*W/Y,Q-=H.offsetY*$/X,W*=H.width/Y,$*=H.height/X}let K=this.filmOffset;if(K!==0)Z+=J*K/this.getFilmWidth();this.projectionMatrix.makePerspective(Z,Z+W,Q,Q-$,J,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.fov=this.fov,Q.object.zoom=this.zoom,Q.object.near=this.near,Q.object.far=this.far,Q.object.focus=this.focus,Q.object.aspect=this.aspect,this.view!==null)Q.object.view=Object.assign({},this.view);return Q.object.filmGauge=this.filmGauge,Q.object.filmOffset=this.filmOffset,Q}}class PK extends M7{constructor(){super(new PJ(50,1,0.5,500));this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(J){let Q=this.camera,$=A6*2*J.angle*this.focus,W=this.mapSize.width/this.mapSize.height*this.aspect,Z=J.distance||Q.far;if($!==Q.fov||W!==Q.aspect||Z!==Q.far)Q.fov=$,Q.aspect=W,Q.far=Z,Q.updateProjectionMatrix();super.updateMatrices(J)}copy(J){return super.copy(J),this.focus=J.focus,this.aspect=J.aspect,this}toJSON(){let J=super.toJSON();return J.focus=this.focus,J.aspect=this.aspect,J}}class yQ extends S9{constructor(J,Q,$=0,W=Math.PI/3,Z=0,H=2){super(J,Q);this.isSpotLight=!0,this.type="SpotLight",this.position.copy(KJ.DEFAULT_UP),this.updateMatrix(),this.target=new KJ,this.distance=$,this.angle=W,this.penumbra=Z,this.decay=H,this.map=null,this.shadow=new PK}get power(){return this.intensity*Math.PI}set power(J){this.intensity=J/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.angle=J.angle,this.penumbra=J.penumbra,this.decay=J.decay,this.target=J.target.clone(),this.map=J.map,this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);if(Q.object.distance=this.distance,Q.object.angle=this.angle,Q.object.decay=this.decay,Q.object.penumbra=this.penumbra,Q.object.target=this.target.uuid,this.map&&this.map.isTexture)Q.object.map=this.map.toJSON(J).uuid;return Q.object.shadow=this.shadow.toJSON(),Q}}class _K extends M7{constructor(){super(new PJ(90,1,0.5,500));this.isPointLightShadow=!0}}class fQ extends S9{constructor(J,Q,$=0,W=2){super(J,Q);this.isPointLight=!0,this.type="PointLight",this.distance=$,this.decay=W,this.shadow=new _K}get power(){return this.intensity*4*Math.PI}set power(J){this.intensity=J/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.decay=J.decay,this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);return Q.object.distance=this.distance,Q.object.decay=this.decay,Q.object.shadow=this.shadow.toJSON(),Q}}class m6 extends vQ{constructor(J=-1,Q=1,$=1,W=-1,Z=0.1,H=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=Q,this.top=$,this.bottom=W,this.near=Z,this.far=H,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,Q,$,W,Z,H){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=W,this.view.width=Z,this.view.height=H,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),Q=(this.top-this.bottom)/(2*this.zoom),$=(this.right+this.left)/2,W=(this.top+this.bottom)/2,Z=$-J,H=$+J,K=W+Q,Y=W-Q;if(this.view!==null&&this.view.enabled){let X=(this.right-this.left)/this.view.fullWidth/this.zoom,U=(this.top-this.bottom)/this.view.fullHeight/this.zoom;Z+=X*this.view.offsetX,H=Z+X*this.view.width,K-=U*this.view.offsetY,Y=K-U*this.view.height}this.projectionMatrix.makeOrthographic(Z,H,K,Y,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.zoom=this.zoom,Q.object.left=this.left,Q.object.right=this.right,Q.object.top=this.top,Q.object.bottom=this.bottom,Q.object.near=this.near,Q.object.far=this.far,this.view!==null)Q.object.view=Object.assign({},this.view);return Q}}class AK extends M7{constructor(){super(new m6(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class d6 extends S9{constructor(J,Q){super(J,Q);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(KJ.DEFAULT_UP),this.updateMatrix(),this.target=new KJ,this.shadow=new AK}dispose(){super.dispose(),this.shadow.dispose()}copy(J){return super.copy(J),this.target=J.target.clone(),this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);return Q.object.shadow=this.shadow.toJSON(),Q.object.target=this.target.uuid,Q}}class D6{static extractUrlBase(J){let Q=J.lastIndexOf("/");if(Q===-1)return"./";return J.slice(0,Q+1)}static resolveURL(J,Q){if(typeof J!=="string"||J==="")return"";if(/^https?:\/\//i.test(Q)&&/^\//.test(J))Q=Q.replace(/(^https?:\/\/[^\/]+).*/i,"$1");if(/^(https?:)?\/\//i.test(J))return J;if(/^data:.*,.*$/i.test(J))return J;if(/^blob:.*$/i.test(J))return J;return Q+J}}var B$=new WeakMap;class hQ extends t8{constructor(J){super(J);if(this.isImageBitmapLoader=!0,typeof createImageBitmap>"u")A0("ImageBitmapLoader: createImageBitmap() not supported.");if(typeof fetch>"u")A0("ImageBitmapLoader: fetch() not supported.");this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(J){return this.options=J,this}load(J,Q,$,W){if(J===void 0)J="";if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let Z=this,H=_8.get(`image-bitmap:${J}`);if(H!==void 0){if(Z.manager.itemStart(J),H.then){H.then((X)=>{if(B$.has(H)===!0){if(W)W(B$.get(H));Z.manager.itemError(J),Z.manager.itemEnd(J)}else{if(Q)Q(X);Z.manager.itemEnd(J)}});return}setTimeout(function(){if(Q)Q(H);Z.manager.itemEnd(J)},0);return}let K={};K.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",K.headers=this.requestHeader,K.signal=typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let Y=fetch(J,K).then(function(X){return X.blob()}).then(function(X){return createImageBitmap(X,Object.assign({},Z.options,{colorSpaceConversion:"none"}))}).then(function(X){if(_8.add(`image-bitmap:${J}`,X),Q)Q(X);return Z.manager.itemEnd(J),X}).catch(function(X){if(W)W(X);B$.set(Y,X),_8.remove(`image-bitmap:${J}`),Z.manager.itemError(J),Z.manager.itemEnd(J)});_8.add(`image-bitmap:${J}`,Y),Z.manager.itemStart(J)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}var G9=-90,N9=1;class pW extends KJ{constructor(J,Q,$){super();this.type="CubeCamera",this.renderTarget=$,this.coordinateSystem=null,this.activeMipmapLevel=0;let W=new PJ(G9,N9,J,Q);W.layers=this.layers,this.add(W);let Z=new PJ(G9,N9,J,Q);Z.layers=this.layers,this.add(Z);let H=new PJ(G9,N9,J,Q);H.layers=this.layers,this.add(H);let K=new PJ(G9,N9,J,Q);K.layers=this.layers,this.add(K);let Y=new PJ(G9,N9,J,Q);Y.layers=this.layers,this.add(Y);let X=new PJ(G9,N9,J,Q);X.layers=this.layers,this.add(X)}updateCoordinateSystem(){let J=this.coordinateSystem,Q=this.children.concat(),[$,W,Z,H,K,Y]=Q;for(let X of Q)this.remove(X);if(J===2000)$.up.set(0,1,0),$.lookAt(1,0,0),W.up.set(0,1,0),W.lookAt(-1,0,0),Z.up.set(0,0,-1),Z.lookAt(0,1,0),H.up.set(0,0,1),H.lookAt(0,-1,0),K.up.set(0,1,0),K.lookAt(0,0,1),Y.up.set(0,1,0),Y.lookAt(0,0,-1);else if(J===2001)$.up.set(0,-1,0),$.lookAt(-1,0,0),W.up.set(0,-1,0),W.lookAt(1,0,0),Z.up.set(0,0,1),Z.lookAt(0,1,0),H.up.set(0,0,-1),H.lookAt(0,-1,0),K.up.set(0,-1,0),K.lookAt(0,0,1),Y.up.set(0,-1,0),Y.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let X of Q)this.add(X),X.updateMatrixWorld()}update(J,Q){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:$,activeMipmapLevel:W}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[Z,H,K,Y,X,U]=this.children,E=J.getRenderTarget(),N=J.getActiveCubeFace(),G=J.getActiveMipmapLevel(),q=J.xr.enabled;J.xr.enabled=!1;let R=$.texture.generateMipmaps;$.texture.generateMipmaps=!1;let k=!1;if(J.isWebGLRenderer===!0)k=J.state.buffers.depth.getReversed();else k=J.reversedDepthBuffer;if(J.setRenderTarget($,0,W),k&&J.autoClear===!1)J.clearDepth();if(J.render(Q,Z),J.setRenderTarget($,1,W),k&&J.autoClear===!1)J.clearDepth();if(J.render(Q,H),J.setRenderTarget($,2,W),k&&J.autoClear===!1)J.clearDepth();if(J.render(Q,K),J.setRenderTarget($,3,W),k&&J.autoClear===!1)J.clearDepth();if(J.render(Q,Y),J.setRenderTarget($,4,W),k&&J.autoClear===!1)J.clearDepth();if(J.render(Q,X),$.texture.generateMipmaps=R,J.setRenderTarget($,5,W),k&&J.autoClear===!1)J.clearDepth();J.render(Q,U),J.setRenderTarget(E,N,G),J.xr.enabled=q,$.texture.needsPMREMUpdate=!0}}class lW extends PJ{constructor(J=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=J}}class mW{constructor(J,Q,$){this.binding=J,this.valueSize=$;let W,Z,H;switch(Q){case"quaternion":W=this._slerp,Z=this._slerpAdditive,H=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array($*6),this._workIndex=5;break;case"string":case"bool":W=this._select,Z=this._select,H=this._setAdditiveIdentityOther,this.buffer=Array($*5);break;default:W=this._lerp,Z=this._lerpAdditive,H=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array($*5)}this._mixBufferRegion=W,this._mixBufferRegionAdditive=Z,this._setIdentity=H,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(J,Q){let $=this.buffer,W=this.valueSize,Z=J*W+W,H=this.cumulativeWeight;if(H===0){for(let K=0;K!==W;++K)$[Z+K]=$[K];H=Q}else{H+=Q;let K=Q/H;this._mixBufferRegion($,Z,0,K,W)}this.cumulativeWeight=H}accumulateAdditive(J){let Q=this.buffer,$=this.valueSize,W=$*this._addIndex;if(this.cumulativeWeightAdditive===0)this._setIdentity();this._mixBufferRegionAdditive(Q,W,0,J,$),this.cumulativeWeightAdditive+=J}apply(J){let Q=this.valueSize,$=this.buffer,W=J*Q+Q,Z=this.cumulativeWeight,H=this.cumulativeWeightAdditive,K=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,Z<1){let Y=Q*this._origIndex;this._mixBufferRegion($,W,Y,1-Z,Q)}if(H>0)this._mixBufferRegionAdditive($,W,this._addIndex*Q,1,Q);for(let Y=Q,X=Q+Q;Y!==X;++Y)if($[Y]!==$[Y+Q]){K.setValue($,W);break}}saveOriginalState(){let J=this.binding,Q=this.buffer,$=this.valueSize,W=$*this._origIndex;J.getValue(Q,W);for(let Z=$,H=W;Z!==H;++Z)Q[Z]=Q[W+Z%$];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let J=this.valueSize*3;this.binding.setValue(this.buffer,J)}_setAdditiveIdentityNumeric(){let J=this._addIndex*this.valueSize,Q=J+this.valueSize;for(let $=J;$<Q;$++)this.buffer[$]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let J=this._origIndex*this.valueSize,Q=this._addIndex*this.valueSize;for(let $=0;$<this.valueSize;$++)this.buffer[Q+$]=this.buffer[J+$]}_select(J,Q,$,W,Z){if(W>=0.5)for(let H=0;H!==Z;++H)J[Q+H]=J[$+H]}_slerp(J,Q,$,W){hJ.slerpFlat(J,Q,J,Q,J,$,W)}_slerpAdditive(J,Q,$,W,Z){let H=this._workIndex*Z;hJ.multiplyQuaternionsFlat(J,H,J,Q,J,$),hJ.slerpFlat(J,Q,J,Q,J,H,W)}_lerp(J,Q,$,W,Z){let H=1-W;for(let K=0;K!==Z;++K){let Y=Q+K;J[Y]=J[Y]*H+J[$+K]*W}}_lerpAdditive(J,Q,$,W,Z){for(let H=0;H!==Z;++H){let K=Q+H;J[K]=J[K]+J[$+H]*W}}}var dW="\\[\\]\\.:\\/",rX=new RegExp("["+dW+"]","g"),uW="[^"+dW+"]",tX="[^"+dW.replace("\\.","")+"]",eX=/((?:WC+[\/:])*)/.source.replace("WC",uW),JU=/(WCOD+)?/.source.replace("WCOD",tX),QU=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",uW),$U=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",uW),WU=new RegExp("^"+eX+JU+QU+$U+"$"),ZU=["material","materials","bones","map"];class TK{constructor(J,Q,$){let W=$||t0.parseTrackName(Q);this._targetGroup=J,this._bindings=J.subscribe_(Q,W)}getValue(J,Q){this.bind();let $=this._targetGroup.nCachedObjects_,W=this._bindings[$];if(W!==void 0)W.getValue(J,Q)}setValue(J,Q){let $=this._bindings;for(let W=this._targetGroup.nCachedObjects_,Z=$.length;W!==Z;++W)$[W].setValue(J,Q)}bind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].bind()}unbind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].unbind()}}class t0{constructor(J,Q,$){this.path=Q,this.parsedPath=$||t0.parseTrackName(Q),this.node=t0.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,Q,$){if(!(J&&J.isAnimationObjectGroup))return new t0(J,Q,$);else return new t0.Composite(J,Q,$)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(rX,"")}static parseTrackName(J){let Q=WU.exec(J);if(Q===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+J);let $={nodeName:Q[2],objectName:Q[3],objectIndex:Q[4],propertyName:Q[5],propertyIndex:Q[6]},W=$.nodeName&&$.nodeName.lastIndexOf(".");if(W!==void 0&&W!==-1){let Z=$.nodeName.substring(W+1);if(ZU.indexOf(Z)!==-1)$.nodeName=$.nodeName.substring(0,W),$.objectName=Z}if($.propertyName===null||$.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+J);return $}static findNode(J,Q){if(Q===void 0||Q===""||Q==="."||Q===-1||Q===J.name||Q===J.uuid)return J;if(J.skeleton){let $=J.skeleton.getBoneByName(Q);if($!==void 0)return $}if(J.children){let $=function(Z){for(let H=0;H<Z.length;H++){let K=Z[H];if(K.name===Q||K.uuid===Q)return K;let Y=$(K.children);if(Y)return Y}return null},W=$(J.children);if(W)return W}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,Q){J[Q]=this.targetObject[this.propertyName]}_getValue_array(J,Q){let $=this.resolvedProperty;for(let W=0,Z=$.length;W!==Z;++W)J[Q++]=$[W]}_getValue_arrayElement(J,Q){J[Q]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,Q){this.resolvedProperty.toArray(J,Q)}_setValue_direct(J,Q){this.targetObject[this.propertyName]=J[Q]}_setValue_direct_setNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,Q){let $=this.resolvedProperty;for(let W=0,Z=$.length;W!==Z;++W)$[W]=J[Q++]}_setValue_array_setNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let W=0,Z=$.length;W!==Z;++W)$[W]=J[Q++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let W=0,Z=$.length;W!==Z;++W)$[W]=J[Q++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q]}_setValue_arrayElement_setNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,Q){this.resolvedProperty.fromArray(J,Q)}_setValue_fromArray_setNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,Q){this.bind(),this.getValue(J,Q)}_setValue_unbound(J,Q){this.bind(),this.setValue(J,Q)}bind(){let J=this.node,Q=this.parsedPath,$=Q.objectName,W=Q.propertyName,Z=Q.propertyIndex;if(!J)J=t0.findNode(this.rootNode,Q.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){A0("PropertyBinding: No target node found for track: "+this.path+".");return}if($){let X=Q.objectIndex;switch($){case"materials":if(!J.material){f0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){f0("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){f0("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let U=0;U<J.length;U++)if(J[U].name===X){X=U;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){f0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){f0("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[$]===void 0){f0("PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[$]}if(X!==void 0){if(J[X]===void 0){f0("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[X]}}let H=J[W];if(H===void 0){let X=Q.nodeName;f0("PropertyBinding: Trying to update property for track: "+X+"."+W+" but it wasn't found.",J);return}let K=this.Versioning.None;if(this.targetObject=J,J.isMaterial===!0)K=this.Versioning.NeedsUpdate;else if(J.isObject3D===!0)K=this.Versioning.MatrixWorldNeedsUpdate;let Y=this.BindingType.Direct;if(Z!==void 0){if(W==="morphTargetInfluences"){if(!J.geometry){f0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){f0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[Z]!==void 0)Z=J.morphTargetDictionary[Z]}Y=this.BindingType.ArrayElement,this.resolvedProperty=H,this.propertyIndex=Z}else if(H.fromArray!==void 0&&H.toArray!==void 0)Y=this.BindingType.HasFromToArray,this.resolvedProperty=H;else if(Array.isArray(H))Y=this.BindingType.EntireArray,this.resolvedProperty=H;else this.propertyName=W;this.getValue=this.GetterByBindingType[Y],this.setValue=this.SetterByBindingTypeAndVersioning[Y][K]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}t0.Composite=TK;t0.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};t0.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};t0.prototype.GetterByBindingType=[t0.prototype._getValue_direct,t0.prototype._getValue_array,t0.prototype._getValue_arrayElement,t0.prototype._getValue_toArray];t0.prototype.SetterByBindingTypeAndVersioning=[[t0.prototype._setValue_direct,t0.prototype._setValue_direct_setNeedsUpdate,t0.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[t0.prototype._setValue_array,t0.prototype._setValue_array_setNeedsUpdate,t0.prototype._setValue_array_setMatrixWorldNeedsUpdate],[t0.prototype._setValue_arrayElement,t0.prototype._setValue_arrayElement_setNeedsUpdate,t0.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[t0.prototype._setValue_fromArray,t0.prototype._setValue_fromArray_setNeedsUpdate,t0.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class cW{constructor(J,Q,$=null,W=Q.blendMode){this._mixer=J,this._clip=Q,this._localRoot=$,this.blendMode=W;let Z=Q.tracks,H=Z.length,K=Array(H),Y={endingStart:2400,endingEnd:2400};for(let X=0;X!==H;++X){let U=Z[X].createInterpolant(null);K[X]=U,U.settings=Y}this._interpolantSettings=Y,this._interpolants=K,this._propertyBindings=Array(H),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=2201,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(J){return this._startTime=J,this}setLoop(J,Q){return this.loop=J,this.repetitions=Q,this}setEffectiveWeight(J){return this.weight=J,this._effectiveWeight=this.enabled?J:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(J){return this._scheduleFading(J,0,1)}fadeOut(J){return this._scheduleFading(J,1,0)}crossFadeFrom(J,Q,$=!1){if(J.fadeOut(Q),this.fadeIn(Q),$===!0){let W=this._clip.duration,Z=J._clip.duration,H=Z/W,K=W/Z;J._restoreTimeScale=J.timeScale,this._restoreTimeScale=this.timeScale,J.warp(1,H,Q),this.warp(K,1,Q)}return this}crossFadeTo(J,Q,$=!1){return J.crossFadeFrom(this,Q,$)}stopFading(){let J=this._weightInterpolant;if(J!==null)this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(J);return this}setEffectiveTimeScale(J){return this.timeScale=J,this._effectiveTimeScale=this.paused?0:J,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(J){return this.timeScale=this._clip.duration/J,this.stopWarping()}syncWith(J){return this.time=J.time,this.timeScale=J.timeScale,this.stopWarping()}halt(J){return this.warp(this._effectiveTimeScale,0,J)}warp(J,Q,$){let W=this._mixer,Z=W.time,H=this.timeScale,K=this._timeScaleInterpolant;if(K===null)K=W._lendControlInterpolant(),this._timeScaleInterpolant=K;let{parameterPositions:Y,sampleValues:X}=K;return Y[0]=Z,Y[1]=Z+$,X[0]=J/H,X[1]=Q/H,this}stopWarping(){let J=this._timeScaleInterpolant;if(J!==null)this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(J);return this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(J,Q,$,W){if(!this.enabled){this._updateWeight(J);return}let Z=this._startTime;if(Z!==null){let Y=(J-Z)*$;if(Y<0||$===0)Q=0;else this._startTime=null,Q=$*Y}Q*=this._updateTimeScale(J);let H=this._updateTime(Q),K=this._updateWeight(J);if(K>0){let Y=this._interpolants,X=this._propertyBindings;switch(this.blendMode){case 2501:for(let U=0,E=Y.length;U!==E;++U)Y[U].evaluate(H),X[U].accumulateAdditive(K);break;case 2500:default:for(let U=0,E=Y.length;U!==E;++U)Y[U].evaluate(H),X[U].accumulate(W,K)}}}_updateWeight(J){let Q=0;if(this.enabled){Q=this.weight;let $=this._weightInterpolant;if($!==null){let W=$.evaluate(J)[0];if(Q*=W,J>$.parameterPositions[1]){if(this.stopFading(),W===0)this.enabled=!1}}}return this._effectiveWeight=Q,Q}_updateTimeScale(J){let Q=0;if(!this.paused){Q=this.timeScale;let $=this._timeScaleInterpolant;if($!==null){let W=$.evaluate(J)[0];if(Q*=W,J>$.parameterPositions[1]){if(Q===0)this.paused=!0;else{if(this._restoreTimeScale!==null)Q=this._restoreTimeScale;this.timeScale=Q}this.stopWarping()}}}return this._effectiveTimeScale=Q,Q}_updateTime(J){let Q=this._clip.duration,$=this.loop,W=this.time+J,Z=this._loopCount,H=$===2202;if(J===0){if(Z===-1)return W;return H&&(Z&1)===1?Q-W:W}if($===2200){if(Z===-1)this._loopCount=0,this._setEndings(!0,!0,!1);J:{if(W>=Q)W=Q;else if(W<0)W=0;else{this.time=W;break J}if(this.clampWhenFinished)this.paused=!0;else this.enabled=!1;this.time=W,this._mixer.dispatchEvent({type:"finished",action:this,direction:J<0?-1:1})}}else{if(Z===-1)if(J>=0)Z=0,this._setEndings(!0,this.repetitions===0,H);else this._setEndings(this.repetitions===0,!0,H);if(W>=Q||W<0){let K=Math.floor(W/Q);W-=Q*K,Z+=Math.abs(K);let Y=this.repetitions-Z;if(Y<=0){if(this.clampWhenFinished)this.paused=!0;else this.enabled=!1;W=J>0?Q:0,this.time=W,this._mixer.dispatchEvent({type:"finished",action:this,direction:J>0?1:-1})}else{if(Y===1){let X=J<0;this._setEndings(X,!X,H)}else this._setEndings(!1,!1,H);this._loopCount=Z,this.time=W,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:K})}}else this._loopCount=Z,this.time=W;if(H&&(Z&1)===1)return Q-W}return W}_setEndings(J,Q,$){let W=this._interpolantSettings;if($)W.endingStart=2401,W.endingEnd=2401;else{if(J)W.endingStart=this.zeroSlopeAtStart?2401:2400;else W.endingStart=2402;if(Q)W.endingEnd=this.zeroSlopeAtEnd?2401:2400;else W.endingEnd=2402}}_scheduleFading(J,Q,$){let W=this._mixer,Z=W.time,H=this._weightInterpolant;if(H===null)H=W._lendControlInterpolant(),this._weightInterpolant=H;let{parameterPositions:K,sampleValues:Y}=H;return K[0]=Z,Y[0]=Q,K[1]=Z+J,Y[1]=$,this}}var HU=new Float32Array(1);class bQ extends y8{constructor(J){super();if(this._root=J,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(J,Q){let $=J._localRoot||this._root,W=J._clip.tracks,Z=W.length,H=J._propertyBindings,K=J._interpolants,Y=$.uuid,X=this._bindingsByRootAndName,U=X[Y];if(U===void 0)U={},X[Y]=U;for(let E=0;E!==Z;++E){let N=W[E],G=N.name,q=U[G];if(q!==void 0)++q.referenceCount,H[E]=q;else{if(q=H[E],q!==void 0){if(q._cacheIndex===null)++q.referenceCount,this._addInactiveBinding(q,Y,G);continue}let R=Q&&Q._propertyBindings[E].binding.parsedPath;q=new mW(t0.create($,G,R),N.ValueTypeName,N.getValueSize()),++q.referenceCount,this._addInactiveBinding(q,Y,G),H[E]=q}K[E].resultBuffer=q.buffer}}_activateAction(J){if(!this._isActiveAction(J)){if(J._cacheIndex===null){let $=(J._localRoot||this._root).uuid,W=J._clip.uuid,Z=this._actionsByClip[W];this._bindAction(J,Z&&Z.knownActions[0]),this._addInactiveAction(J,W,$)}let Q=J._propertyBindings;for(let $=0,W=Q.length;$!==W;++$){let Z=Q[$];if(Z.useCount++===0)this._lendBinding(Z),Z.saveOriginalState()}this._lendAction(J)}}_deactivateAction(J){if(this._isActiveAction(J)){let Q=J._propertyBindings;for(let $=0,W=Q.length;$!==W;++$){let Z=Q[$];if(--Z.useCount===0)Z.restoreOriginalState(),this._takeBackBinding(Z)}this._takeBackAction(J)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let J=this;this.stats={actions:{get total(){return J._actions.length},get inUse(){return J._nActiveActions}},bindings:{get total(){return J._bindings.length},get inUse(){return J._nActiveBindings}},controlInterpolants:{get total(){return J._controlInterpolants.length},get inUse(){return J._nActiveControlInterpolants}}}}_isActiveAction(J){let Q=J._cacheIndex;return Q!==null&&Q<this._nActiveActions}_addInactiveAction(J,Q,$){let W=this._actions,Z=this._actionsByClip,H=Z[Q];if(H===void 0)H={knownActions:[J],actionByRoot:{}},J._byClipCacheIndex=0,Z[Q]=H;else{let K=H.knownActions;J._byClipCacheIndex=K.length,K.push(J)}J._cacheIndex=W.length,W.push(J),H.actionByRoot[$]=J}_removeInactiveAction(J){let Q=this._actions,$=Q[Q.length-1],W=J._cacheIndex;$._cacheIndex=W,Q[W]=$,Q.pop(),J._cacheIndex=null;let Z=J._clip.uuid,H=this._actionsByClip,K=H[Z],Y=K.knownActions,X=Y[Y.length-1],U=J._byClipCacheIndex;X._byClipCacheIndex=U,Y[U]=X,Y.pop(),J._byClipCacheIndex=null;let E=K.actionByRoot,N=(J._localRoot||this._root).uuid;if(delete E[N],Y.length===0)delete H[Z];this._removeInactiveBindingsForAction(J)}_removeInactiveBindingsForAction(J){let Q=J._propertyBindings;for(let $=0,W=Q.length;$!==W;++$){let Z=Q[$];if(--Z.referenceCount===0)this._removeInactiveBinding(Z)}}_lendAction(J){let Q=this._actions,$=J._cacheIndex,W=this._nActiveActions++,Z=Q[W];J._cacheIndex=W,Q[W]=J,Z._cacheIndex=$,Q[$]=Z}_takeBackAction(J){let Q=this._actions,$=J._cacheIndex,W=--this._nActiveActions,Z=Q[W];J._cacheIndex=W,Q[W]=J,Z._cacheIndex=$,Q[$]=Z}_addInactiveBinding(J,Q,$){let W=this._bindingsByRootAndName,Z=this._bindings,H=W[Q];if(H===void 0)H={},W[Q]=H;H[$]=J,J._cacheIndex=Z.length,Z.push(J)}_removeInactiveBinding(J){let Q=this._bindings,$=J.binding,W=$.rootNode.uuid,Z=$.path,H=this._bindingsByRootAndName,K=H[W],Y=Q[Q.length-1],X=J._cacheIndex;if(Y._cacheIndex=X,Q[X]=Y,Q.pop(),delete K[Z],Object.keys(K).length===0)delete H[W]}_lendBinding(J){let Q=this._bindings,$=J._cacheIndex,W=this._nActiveBindings++,Z=Q[W];J._cacheIndex=W,Q[W]=J,Z._cacheIndex=$,Q[$]=Z}_takeBackBinding(J){let Q=this._bindings,$=J._cacheIndex,W=--this._nActiveBindings,Z=Q[W];J._cacheIndex=W,Q[W]=J,Z._cacheIndex=$,Q[$]=Z}_lendControlInterpolant(){let J=this._controlInterpolants,Q=this._nActiveControlInterpolants++,$=J[Q];if($===void 0)$=new TQ(new Float32Array(2),new Float32Array(2),1,HU),$.__cacheIndex=Q,J[Q]=$;return $}_takeBackControlInterpolant(J){let Q=this._controlInterpolants,$=J.__cacheIndex,W=--this._nActiveControlInterpolants,Z=Q[W];J.__cacheIndex=W,Q[W]=J,Z.__cacheIndex=$,Q[$]=Z}clipAction(J,Q,$){let W=Q||this._root,Z=W.uuid,H=typeof J==="string"?R9.findByName(W,J):J,K=H!==null?H.uuid:J,Y=this._actionsByClip[K],X=null;if($===void 0)if(H!==null)$=H.blendMode;else $=2500;if(Y!==void 0){let E=Y.actionByRoot[Z];if(E!==void 0&&E.blendMode===$)return E;if(X=Y.knownActions[0],H===null)H=X._clip}if(H===null)return null;let U=new cW(this,H,Q,$);return this._bindAction(U,X),this._addInactiveAction(U,K,Z),U}existingAction(J,Q){let $=Q||this._root,W=$.uuid,Z=typeof J==="string"?R9.findByName($,J):J,H=Z?Z.uuid:J,K=this._actionsByClip[H];if(K!==void 0)return K.actionByRoot[W]||null;return null}stopAllAction(){let J=this._actions,Q=this._nActiveActions;for(let $=Q-1;$>=0;--$)J[$].stop();return this}update(J){J*=this.timeScale;let Q=this._actions,$=this._nActiveActions,W=this.time+=J,Z=Math.sign(J),H=this._accuIndex^=1;for(let X=0;X!==$;++X)Q[X]._update(W,J,Z,H);let K=this._bindings,Y=this._nActiveBindings;for(let X=0;X!==Y;++X)K[X].apply(H);return this}setTime(J){this.time=0;for(let Q=0;Q<this._actions.length;Q++)this._actions[Q].time=0;return this.update(J)}getRoot(){return this._root}uncacheClip(J){let Q=this._actions,$=J.uuid,W=this._actionsByClip,Z=W[$];if(Z!==void 0){let H=Z.knownActions;for(let K=0,Y=H.length;K!==Y;++K){let X=H[K];this._deactivateAction(X);let U=X._cacheIndex,E=Q[Q.length-1];X._cacheIndex=null,X._byClipCacheIndex=null,E._cacheIndex=U,Q[U]=E,Q.pop(),this._removeInactiveBindingsForAction(X)}delete W[$]}}uncacheRoot(J){let Q=J.uuid,$=this._actionsByClip;for(let H in $){let K=$[H].actionByRoot,Y=K[Q];if(Y!==void 0)this._deactivateAction(Y),this._removeInactiveAction(Y)}let W=this._bindingsByRootAndName,Z=W[Q];if(Z!==void 0)for(let H in Z){let K=Z[H];K.restoreOriginalState(),this._removeInactiveBinding(K)}}uncacheAction(J,Q){let $=this.existingAction(J,Q);if($!==null)this._deactivateAction($),this._removeInactiveAction($)}}var BH=new b0;class xQ{constructor(J,Q,$=0,W=1/0){this.ray=new h6(J,Q),this.near=$,this.far=W,this.camera=null,this.layers=new K7,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(J,Q){this.ray.set(J,Q)}setFromCamera(J,Q){if(Q.isPerspectiveCamera)this.ray.origin.setFromMatrixPosition(Q.matrixWorld),this.ray.direction.set(J.x,J.y,0.5).unproject(Q).sub(this.ray.origin).normalize(),this.camera=Q;else if(Q.isOrthographicCamera)this.ray.origin.set(J.x,J.y,Q.projectionMatrix.elements[14]).unproject(Q),this.ray.direction.set(0,0,-1).transformDirection(Q.matrixWorld),this.camera=Q;else f0("Raycaster: Unsupported camera type: "+Q.type)}setFromXRController(J){return BH.identity().extractRotation(J.matrixWorld),this.ray.origin.setFromMatrixPosition(J.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(BH),this}intersectObject(J,Q=!0,$=[]){return I$(J,this,$,Q),$.sort(CH),$}intersectObjects(J,Q=!0,$=[]){for(let W=0,Z=J.length;W<Z;W++)I$(J[W],this,$,Q);return $.sort(CH),$}}function CH(J,Q){return J.distance-Q.distance}function I$(J,Q,$,W){let Z=!0;if(J.layers.test(Q.layers)){if(J.raycast(Q,$)===!1)Z=!1}if(Z===!0&&W===!0){let H=J.children;for(let K=0,Y=H.length;K<Y;K++)I$(H[K],Q,$,!0)}}class nW{static{nW.prototype.isMatrix2=!0}constructor(J,Q,$,W){if(this.elements=[1,0,0,1],J!==void 0)this.set(J,Q,$,W)}identity(){return this.set(1,0,0,1),this}fromArray(J,Q=0){for(let $=0;$<4;$++)this.elements[$]=J[$+Q];return this}set(J,Q,$,W){let Z=this.elements;return Z[0]=J,Z[2]=Q,Z[1]=$,Z[3]=W,this}}function sW(J,Q,$,W){let Z=KU(W);switch($){case 1021:return J*Q;case 1028:return J*Q/Z.components*Z.byteLength;case 1029:return J*Q/Z.components*Z.byteLength;case 1030:return J*Q*2/Z.components*Z.byteLength;case 1031:return J*Q*2/Z.components*Z.byteLength;case 1022:return J*Q*3/Z.components*Z.byteLength;case 1023:return J*Q*4/Z.components*Z.byteLength;case 1033:return J*Q*4/Z.components*Z.byteLength;case 33776:case 33777:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 33778:case 33779:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 35841:case 35843:return Math.max(J,16)*Math.max(Q,8)/4;case 35840:case 35842:return Math.max(J,8)*Math.max(Q,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37808:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37809:return Math.floor((J+4)/5)*Math.floor((Q+3)/4)*16;case 37810:return Math.floor((J+4)/5)*Math.floor((Q+4)/5)*16;case 37811:return Math.floor((J+5)/6)*Math.floor((Q+4)/5)*16;case 37812:return Math.floor((J+5)/6)*Math.floor((Q+5)/6)*16;case 37813:return Math.floor((J+7)/8)*Math.floor((Q+4)/5)*16;case 37814:return Math.floor((J+7)/8)*Math.floor((Q+5)/6)*16;case 37815:return Math.floor((J+7)/8)*Math.floor((Q+7)/8)*16;case 37816:return Math.floor((J+9)/10)*Math.floor((Q+4)/5)*16;case 37817:return Math.floor((J+9)/10)*Math.floor((Q+5)/6)*16;case 37818:return Math.floor((J+9)/10)*Math.floor((Q+7)/8)*16;case 37819:return Math.floor((J+9)/10)*Math.floor((Q+9)/10)*16;case 37820:return Math.floor((J+11)/12)*Math.floor((Q+9)/10)*16;case 37821:return Math.floor((J+11)/12)*Math.floor((Q+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(J/4)*Math.ceil(Q/4)*16;case 36283:case 36284:return Math.ceil(J/4)*Math.ceil(Q/4)*8;case 36285:case 36286:return Math.ceil(J/4)*Math.ceil(Q/4)*16}throw Error(`Unable to determine texture byte length for ${$} format.`)}function KU(J){switch(J){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${J}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));if(typeof window<"u")if(window.__THREE__)A0("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="186";function tK(){let J=null,Q=!1,$=null,W=null;function Z(H,K){W=J.requestAnimationFrame(Z),$(H,K)}return{start:function(){if(Q===!0)return;if($===null)return;if(J===null)return;W=J.requestAnimationFrame(Z),Q=!0},stop:function(){if(J!==null)J.cancelAnimationFrame(W);Q=!1},setAnimationLoop:function(H){$=H},setContext:function(H){J=H}}}function YU(J){let Q=new WeakMap;function $(Y,X){let{array:U,usage:E}=Y,N=U.byteLength,G=J.createBuffer();J.bindBuffer(X,G),J.bufferData(X,U,E),Y.onUploadCallback();let q;if(U instanceof Float32Array)q=J.FLOAT;else if(typeof Float16Array<"u"&&U instanceof Float16Array)q=J.HALF_FLOAT;else if(U instanceof Uint16Array)if(Y.isFloat16BufferAttribute)q=J.HALF_FLOAT;else q=J.UNSIGNED_SHORT;else if(U instanceof Int16Array)q=J.SHORT;else if(U instanceof Uint32Array)q=J.UNSIGNED_INT;else if(U instanceof Int32Array)q=J.INT;else if(U instanceof Int8Array)q=J.BYTE;else if(U instanceof Uint8Array)q=J.UNSIGNED_BYTE;else if(U instanceof Uint8ClampedArray)q=J.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+U);return{buffer:G,type:q,bytesPerElement:U.BYTES_PER_ELEMENT,version:Y.version,size:N}}function W(Y,X,U){let{array:E,updateRanges:N}=X;if(J.bindBuffer(U,Y),N.length===0)J.bufferSubData(U,0,E);else{N.sort((q,R)=>q.start-R.start);let G=0;for(let q=1;q<N.length;q++){let R=N[G],k=N[q];if(k.start<=R.start+R.count+1)R.count=Math.max(R.count,k.start+k.count-R.start);else++G,N[G]=k}N.length=G+1;for(let q=0,R=N.length;q<R;q++){let k=N[q];J.bufferSubData(U,k.start*E.BYTES_PER_ELEMENT,E,k.start,k.count)}X.clearUpdateRanges()}X.onUploadCallback()}function Z(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;return Q.get(Y)}function H(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;let X=Q.get(Y);if(X)J.deleteBuffer(X.buffer),Q.delete(Y)}function K(Y,X){if(Y.isInterleavedBufferAttribute)Y=Y.data;if(Y.isGLBufferAttribute){let E=Q.get(Y);if(!E||E.version<Y.version)Q.set(Y,{buffer:Y.buffer,type:Y.type,bytesPerElement:Y.elementSize,version:Y.version});return}let U=Q.get(Y);if(U===void 0)Q.set(Y,$(Y,X));else if(U.version<Y.version){if(U.size!==Y.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");W(U.buffer,Y,X),U.version=Y.version}}return{get:Z,remove:H,update:K}}var XU=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,UU=`#ifdef USE_ALPHAHASH
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
#endif`,EU=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,GU=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,NU=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qU=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,FU=`#ifdef USE_AOMAP
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
#endif`,OU=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,RU=`#ifdef USE_BATCHING
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
#endif`,LU=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,MU=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,DU=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,VU=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kU=`#ifdef USE_IRIDESCENCE
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
#endif`,BU=`#ifdef USE_BUMPMAP
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
#endif`,CU=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,IU=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wU=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zU=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,PU=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,_U=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,AU=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,TU=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,SU=`#define PI 3.141592653589793
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
} // validated`,jU=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vU=`vec3 transformedNormal = objectNormal;
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
#endif`,yU=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fU=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hU=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bU=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xU="gl_FragColor = linearToOutputTexel( gl_FragColor );",gU=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,pU=`#ifdef USE_ENVMAP
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
#endif`,lU=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,mU=`#ifdef USE_ENVMAP
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
#endif`,dU=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,uU=`#ifdef USE_ENVMAP
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
#endif`,cU=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nU=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sU=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,iU=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,oU=`#ifdef USE_GRADIENTMAP
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
}`,aU=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rU=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tU=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,eU=`uniform bool receiveShadow;
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#include <lightprobes_pars_fragment>`,JE=`#ifdef USE_ENVMAP
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
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,QE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$E=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,WE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ZE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,HE=`PhysicalMaterial material;
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
#endif`,KE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
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
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
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
}`,YE=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
#endif`,XE=`#if defined( RE_IndirectDiffuse )
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
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,UE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,EE=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,GE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,NE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,FE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,OE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,RE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,LE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ME=`#if defined( USE_POINTS_UV )
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
#endif`,DE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,VE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,BE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,CE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,IE=`#ifdef USE_MORPHTARGETS
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
#endif`,wE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,PE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_E=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,AE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,SE=`#ifdef USE_NORMALMAP
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
#endif`,jE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,xE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
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
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
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
#endif`,cE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,nE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,sE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
}`,iE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,oE=`#ifdef USE_SKINNING
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
#endif`,aE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rE=`#ifdef USE_SKINNING
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
#endif`,tE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,eE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,J5=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Q5=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$5=`#ifdef USE_TRANSMISSION
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
#endif`,W5=`#ifdef USE_TRANSMISSION
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
#endif`,Z5=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,H5=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,K5=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Y5=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,X5=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,U5=`uniform sampler2D t2D;
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
}`,E5=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,G5=`#ifdef ENVMAP_TYPE_CUBE
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
}`,N5=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,q5=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,F5=`#include <common>
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
}`,O5=`#if DEPTH_PACKING == 3200
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
}`,R5=`#define DISTANCE
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
}`,L5=`#define DISTANCE
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
}`,M5=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,D5=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V5=`uniform float scale;
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
}`,k5=`uniform vec3 diffuse;
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
}`,B5=`#include <common>
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
}`,C5=`uniform vec3 diffuse;
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
}`,I5=`#define LAMBERT
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
}`,w5=`#define LAMBERT
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
}`,z5=`#define MATCAP
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
}`,P5=`#define MATCAP
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
}`,_5=`#define NORMAL
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
}`,A5=`#define NORMAL
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
}`,T5=`#define PHONG
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
}`,S5=`#define PHONG
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
}`,j5=`#define STANDARD
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
}`,v5=`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
}`,y5=`#define TOON
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
}`,f5=`#define TOON
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
}`,h5=`uniform float size;
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
}`,b5=`uniform vec3 diffuse;
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
}`,x5=`#include <common>
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
}`,g5=`uniform vec3 color;
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
}`,p5=`uniform float rotation;
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
}`,l5=`uniform vec3 diffuse;
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
}`,m0={alphahash_fragment:XU,alphahash_pars_fragment:UU,alphamap_fragment:EU,alphamap_pars_fragment:GU,alphatest_fragment:NU,alphatest_pars_fragment:qU,aomap_fragment:FU,aomap_pars_fragment:OU,batching_pars_vertex:RU,batching_vertex:LU,begin_vertex:MU,beginnormal_vertex:DU,bsdfs:VU,iridescence_fragment:kU,bumpmap_pars_fragment:BU,clipping_planes_fragment:CU,clipping_planes_pars_fragment:IU,clipping_planes_pars_vertex:wU,clipping_planes_vertex:zU,color_fragment:PU,color_pars_fragment:_U,color_pars_vertex:AU,color_vertex:TU,common:SU,cube_uv_reflection_fragment:jU,defaultnormal_vertex:vU,displacementmap_pars_vertex:yU,displacementmap_vertex:fU,emissivemap_fragment:hU,emissivemap_pars_fragment:bU,colorspace_fragment:xU,colorspace_pars_fragment:gU,envmap_fragment:pU,envmap_common_pars_fragment:lU,envmap_pars_fragment:mU,envmap_pars_vertex:dU,envmap_physical_pars_fragment:JE,envmap_vertex:uU,fog_vertex:cU,fog_pars_vertex:nU,fog_fragment:sU,fog_pars_fragment:iU,gradientmap_pars_fragment:oU,lightmap_pars_fragment:aU,lights_lambert_fragment:rU,lights_lambert_pars_fragment:tU,lights_pars_begin:eU,lights_toon_fragment:QE,lights_toon_pars_fragment:$E,lights_phong_fragment:WE,lights_phong_pars_fragment:ZE,lights_physical_fragment:HE,lights_physical_pars_fragment:KE,lights_fragment_begin:YE,lights_fragment_maps:XE,lights_fragment_end:UE,lightprobes_pars_fragment:EE,logdepthbuf_fragment:GE,logdepthbuf_pars_fragment:NE,logdepthbuf_pars_vertex:qE,logdepthbuf_vertex:FE,map_fragment:OE,map_pars_fragment:RE,map_particle_fragment:LE,map_particle_pars_fragment:ME,metalnessmap_fragment:DE,metalnessmap_pars_fragment:VE,morphinstance_vertex:kE,morphcolor_vertex:BE,morphnormal_vertex:CE,morphtarget_pars_vertex:IE,morphtarget_vertex:wE,normal_fragment_begin:zE,normal_fragment_maps:PE,normal_pars_fragment:_E,normal_pars_vertex:AE,normal_vertex:TE,normalmap_pars_fragment:SE,clearcoat_normal_fragment_begin:jE,clearcoat_normal_fragment_maps:vE,clearcoat_pars_fragment:yE,iridescence_pars_fragment:fE,opaque_fragment:hE,packing:bE,premultiplied_alpha_fragment:xE,project_vertex:gE,dithering_fragment:pE,dithering_pars_fragment:lE,roughnessmap_fragment:mE,roughnessmap_pars_fragment:dE,shadowmap_pars_fragment:uE,shadowmap_pars_vertex:cE,shadowmap_vertex:nE,shadowmask_pars_fragment:sE,skinbase_vertex:iE,skinning_pars_vertex:oE,skinning_vertex:aE,skinnormal_vertex:rE,specularmap_fragment:tE,specularmap_pars_fragment:eE,tonemapping_fragment:J5,tonemapping_pars_fragment:Q5,transmission_fragment:$5,transmission_pars_fragment:W5,uv_pars_fragment:Z5,uv_pars_vertex:H5,uv_vertex:K5,worldpos_vertex:Y5,background_vert:X5,background_frag:U5,backgroundCube_vert:E5,backgroundCube_frag:G5,cube_vert:N5,cube_frag:q5,depth_vert:F5,depth_frag:O5,distance_vert:R5,distance_frag:L5,equirect_vert:M5,equirect_frag:D5,linedashed_vert:V5,linedashed_frag:k5,meshbasic_vert:B5,meshbasic_frag:C5,meshlambert_vert:I5,meshlambert_frag:w5,meshmatcap_vert:z5,meshmatcap_frag:P5,meshnormal_vert:_5,meshnormal_frag:A5,meshphong_vert:T5,meshphong_frag:S5,meshphysical_vert:j5,meshphysical_frag:v5,meshtoon_vert:y5,meshtoon_frag:f5,points_vert:h5,points_frag:b5,shadow_vert:x5,shadow_frag:g5,sprite_vert:p5,sprite_frag:l5},L0={common:{diffuse:{value:new j0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new x0},alphaMap:{value:null},alphaMapTransform:{value:new x0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new x0}},envmap:{envMap:{value:null},envMapRotation:{value:new x0},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new x0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new x0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new x0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new x0},normalScale:{value:new y0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new x0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new x0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new x0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new x0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new j0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new h},probesMax:{value:new h},probesResolution:{value:new h}},points:{diffuse:{value:new j0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new x0},alphaTest:{value:0},uvTransform:{value:new x0}},sprite:{diffuse:{value:new j0(16777215)},opacity:{value:1},center:{value:new y0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new x0},alphaMap:{value:null},alphaMapTransform:{value:new x0},alphaTest:{value:0}}},h8={basic:{uniforms:mJ([L0.common,L0.specularmap,L0.envmap,L0.aomap,L0.lightmap,L0.fog]),vertexShader:m0.meshbasic_vert,fragmentShader:m0.meshbasic_frag},lambert:{uniforms:mJ([L0.common,L0.specularmap,L0.envmap,L0.aomap,L0.lightmap,L0.emissivemap,L0.bumpmap,L0.normalmap,L0.displacementmap,L0.fog,L0.lights,{emissive:{value:new j0(0)},envMapIntensity:{value:1}}]),vertexShader:m0.meshlambert_vert,fragmentShader:m0.meshlambert_frag},phong:{uniforms:mJ([L0.common,L0.specularmap,L0.envmap,L0.aomap,L0.lightmap,L0.emissivemap,L0.bumpmap,L0.normalmap,L0.displacementmap,L0.fog,L0.lights,{emissive:{value:new j0(0)},specular:{value:new j0(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:m0.meshphong_vert,fragmentShader:m0.meshphong_frag},standard:{uniforms:mJ([L0.common,L0.envmap,L0.aomap,L0.lightmap,L0.emissivemap,L0.bumpmap,L0.normalmap,L0.displacementmap,L0.roughnessmap,L0.metalnessmap,L0.fog,L0.lights,{emissive:{value:new j0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:m0.meshphysical_vert,fragmentShader:m0.meshphysical_frag},toon:{uniforms:mJ([L0.common,L0.aomap,L0.lightmap,L0.emissivemap,L0.bumpmap,L0.normalmap,L0.displacementmap,L0.gradientmap,L0.fog,L0.lights,{emissive:{value:new j0(0)}}]),vertexShader:m0.meshtoon_vert,fragmentShader:m0.meshtoon_frag},matcap:{uniforms:mJ([L0.common,L0.bumpmap,L0.normalmap,L0.displacementmap,L0.fog,{matcap:{value:null}}]),vertexShader:m0.meshmatcap_vert,fragmentShader:m0.meshmatcap_frag},points:{uniforms:mJ([L0.points,L0.fog]),vertexShader:m0.points_vert,fragmentShader:m0.points_frag},dashed:{uniforms:mJ([L0.common,L0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:m0.linedashed_vert,fragmentShader:m0.linedashed_frag},depth:{uniforms:mJ([L0.common,L0.displacementmap]),vertexShader:m0.depth_vert,fragmentShader:m0.depth_frag},normal:{uniforms:mJ([L0.common,L0.bumpmap,L0.normalmap,L0.displacementmap,{opacity:{value:1}}]),vertexShader:m0.meshnormal_vert,fragmentShader:m0.meshnormal_frag},sprite:{uniforms:mJ([L0.sprite,L0.fog]),vertexShader:m0.sprite_vert,fragmentShader:m0.sprite_frag},background:{uniforms:{uvTransform:{value:new x0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:m0.background_vert,fragmentShader:m0.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new x0}},vertexShader:m0.backgroundCube_vert,fragmentShader:m0.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:m0.cube_vert,fragmentShader:m0.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:m0.equirect_vert,fragmentShader:m0.equirect_frag},distance:{uniforms:mJ([L0.common,L0.displacementmap,{referencePosition:{value:new h},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:m0.distance_vert,fragmentShader:m0.distance_frag},shadow:{uniforms:mJ([L0.lights,L0.fog,{color:{value:new j0(0)},opacity:{value:1}}]),vertexShader:m0.shadow_vert,fragmentShader:m0.shadow_frag}};h8.physical={uniforms:mJ([h8.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new x0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new x0},clearcoatNormalScale:{value:new y0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new x0},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new x0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new x0},sheen:{value:0},sheenColor:{value:new j0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new x0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new x0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new x0},transmissionSamplerSize:{value:new y0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new x0},attenuationDistance:{value:0},attenuationColor:{value:new j0(0)},specularColor:{value:new j0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new x0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new x0},anisotropyVector:{value:new y0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new x0}}]),vertexShader:m0.meshphysical_vert,fragmentShader:m0.meshphysical_frag};var gQ={r:0,b:0,g:0},m5=new b0,eK=new x0;eK.set(-1,0,0,0,1,0,0,0,1);function d5(J,Q,$,W,Z,H){let K=new j0(0),Y=Z===!0?0:1,X,U,E=null,N=0,G=null;function q(z){let A=z.isScene===!0?z.background:null;if(A&&A.isTexture){let V=z.backgroundBlurriness>0;A=Q.get(A,V)}return A}function R(z){let A=!1,V=q(z);if(V===null)F(K,Y);else if(V&&V.isColor)F(V,1),A=!0;let I=J.xr.getEnvironmentBlendMode();if(I==="additive")$.buffers.color.setClear(0,0,0,1,H);else if(I==="alpha-blend")$.buffers.color.setClear(0,0,0,0,H);if(J.autoClear||A)$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}function k(z,A){let V=q(A);if(V&&(V.isCubeTexture||V.mapping===$7)){if(U===void 0)U=new o0(new I8(1,1,1),new rJ({name:"BackgroundCubeMaterial",uniforms:p6(h8.backgroundCube.uniforms),vertexShader:h8.backgroundCube.vertexShader,fragmentShader:h8.backgroundCube.fragmentShader,side:lJ,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),U.geometry.deleteAttribute("normal"),U.geometry.deleteAttribute("uv"),U.onBeforeRender=function(I,P,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(U.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),W.update(U);if(U.material.uniforms.envMap.value=V,U.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,U.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,U.material.uniforms.backgroundRotation.value.setFromMatrix4(m5.makeRotationFromEuler(A.backgroundRotation)).transpose(),V.isCubeTexture&&V.isRenderTargetTexture===!1)U.material.uniforms.backgroundRotation.value.premultiply(eK);if(U.material.toneMapped=c0.getTransfer(V.colorSpace)!==GJ,E!==V||N!==V.version||G!==J.toneMapping)U.material.needsUpdate=!0,E=V,N=V.version,G=J.toneMapping;U.layers.enableAll(),z.unshift(U,U.geometry,U.material,0,0,null)}else if(V&&V.isTexture){if(X===void 0)X=new o0(new aJ(2,2),new rJ({name:"BackgroundMaterial",uniforms:p6(h8.background.uniforms),vertexShader:h8.background.vertexShader,fragmentShader:h8.background.fragmentShader,side:A8,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),X.geometry.deleteAttribute("normal"),Object.defineProperty(X.material,"map",{get:function(){return this.uniforms.t2D.value}}),W.update(X);if(X.material.uniforms.t2D.value=V,X.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,X.material.toneMapped=c0.getTransfer(V.colorSpace)!==GJ,V.matrixAutoUpdate===!0)V.updateMatrix();if(X.material.uniforms.uvTransform.value.copy(V.matrix),E!==V||N!==V.version||G!==J.toneMapping)X.material.needsUpdate=!0,E=V,N=V.version,G=J.toneMapping;X.layers.enableAll(),z.unshift(X,X.geometry,X.material,0,0,null)}}function F(z,A){z.getRGB(gQ,TW(J)),$.buffers.color.setClear(gQ.r,gQ.g,gQ.b,A,H)}function O(){if(U!==void 0)U.geometry.dispose(),U.material.dispose(),U=void 0;if(X!==void 0)X.geometry.dispose(),X.material.dispose(),X=void 0}return{getClearColor:function(){return K},setClearColor:function(z,A=1){K.set(z),Y=A,F(K,Y)},getClearAlpha:function(){return Y},setClearAlpha:function(z){Y=z,F(K,Y)},render:R,addToRenderList:k,dispose:O}}function u5(J,Q){let $=J.getParameter(J.MAX_VERTEX_ATTRIBS),W={},Z=G(null),H=Z,K=!1;function Y(y,b,e,S,u){let Q0=!1,d=N(y,S,e,b);if(H!==d)H=d,U(H.object);if(Q0=q(y,S,e,u),Q0)R(y,S,e,u);if(u!==null)Q.update(u,J.ELEMENT_ARRAY_BUFFER);if(Q0||K){if(K=!1,V(y,b,e,S),u!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,Q.get(u).buffer)}}function X(){return J.createVertexArray()}function U(y){return J.bindVertexArray(y)}function E(y){return J.deleteVertexArray(y)}function N(y,b,e,S){let u=S.wireframe===!0,Q0=W[b.id];if(Q0===void 0)Q0={},W[b.id]=Q0;let d=y.isInstancedMesh===!0?y.id:0,Y0=Q0[d];if(Y0===void 0)Y0={},Q0[d]=Y0;let r=Y0[e.id];if(r===void 0)r={},Y0[e.id]=r;let $0=r[u];if($0===void 0)$0=G(X()),r[u]=$0;return $0}function G(y){let b=[],e=[],S=[];for(let u=0;u<$;u++)b[u]=0,e[u]=0,S[u]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:e,attributeDivisors:S,object:y,attributes:{},index:null}}function q(y,b,e,S){let u=H.attributes,Q0=b.attributes,d=0,Y0=e.getAttributes();for(let r in Y0)if(Y0[r].location>=0){let Z0=u[r],C0=Q0[r];if(C0===void 0){if(r==="instanceMatrix"&&y.instanceMatrix)C0=y.instanceMatrix;if(r==="instanceColor"&&y.instanceColor)C0=y.instanceColor}if(Z0===void 0)return!0;if(Z0.attribute!==C0)return!0;if(C0&&Z0.data!==C0.data)return!0;d++}if(H.attributesNum!==d)return!0;if(H.index!==S)return!0;return!1}function R(y,b,e,S){let u={},Q0=b.attributes,d=0,Y0=e.getAttributes();for(let r in Y0)if(Y0[r].location>=0){let Z0=Q0[r];if(Z0===void 0){if(r==="instanceMatrix"&&y.instanceMatrix)Z0=y.instanceMatrix;if(r==="instanceColor"&&y.instanceColor)Z0=y.instanceColor}let C0={};if(C0.attribute=Z0,Z0&&Z0.data)C0.data=Z0.data;u[r]=C0,d++}H.attributes=u,H.attributesNum=d,H.index=S}function k(){let y=H.newAttributes;for(let b=0,e=y.length;b<e;b++)y[b]=0}function F(y){O(y,0)}function O(y,b){let{newAttributes:e,enabledAttributes:S,attributeDivisors:u}=H;if(e[y]=1,S[y]===0)J.enableVertexAttribArray(y),S[y]=1;if(u[y]!==b)J.vertexAttribDivisor(y,b),u[y]=b}function z(){let{newAttributes:y,enabledAttributes:b}=H;for(let e=0,S=b.length;e<S;e++)if(b[e]!==y[e])J.disableVertexAttribArray(e),b[e]=0}function A(y,b,e,S,u,Q0,d){if(d===!0)J.vertexAttribIPointer(y,b,e,u,Q0);else J.vertexAttribPointer(y,b,e,S,u,Q0)}function V(y,b,e,S){k();let u=S.attributes,Q0=e.getAttributes(),d=b.defaultAttributeValues;for(let Y0 in Q0){let r=Q0[Y0];if(r.location>=0){let $0=u[Y0];if($0===void 0){if(Y0==="instanceMatrix"&&y.instanceMatrix)$0=y.instanceMatrix;if(Y0==="instanceColor"&&y.instanceColor)$0=y.instanceColor}if($0!==void 0){let{normalized:Z0,itemSize:C0}=$0,T0=Q.get($0);if(T0===void 0)continue;let{buffer:$J,type:p0,bytesPerElement:s}=T0,K0=p0===J.INT||p0===J.UNSIGNED_INT||$0.gpuType===h$;if($0.isInterleavedBufferAttribute){let U0=$0.data,S0=U0.stride,v0=$0.offset;if(U0.isInstancedInterleavedBuffer){for(let z0=0;z0<r.locationSize;z0++)O(r.location+z0,U0.meshPerAttribute);if(y.isInstancedMesh!==!0&&S._maxInstanceCount===void 0)S._maxInstanceCount=U0.meshPerAttribute*U0.count}else for(let z0=0;z0<r.locationSize;z0++)F(r.location+z0);J.bindBuffer(J.ARRAY_BUFFER,$J);for(let z0=0;z0<r.locationSize;z0++)A(r.location+z0,C0/r.locationSize,p0,Z0,S0*s,(v0+C0/r.locationSize*z0)*s,K0)}else{if($0.isInstancedBufferAttribute){for(let U0=0;U0<r.locationSize;U0++)O(r.location+U0,$0.meshPerAttribute);if(y.isInstancedMesh!==!0&&S._maxInstanceCount===void 0)S._maxInstanceCount=$0.meshPerAttribute*$0.count}else for(let U0=0;U0<r.locationSize;U0++)F(r.location+U0);J.bindBuffer(J.ARRAY_BUFFER,$J);for(let U0=0;U0<r.locationSize;U0++)A(r.location+U0,C0/r.locationSize,p0,Z0,C0*s,C0/r.locationSize*U0*s,K0)}}else if(d!==void 0){let Z0=d[Y0];if(Z0!==void 0)switch(Z0.length){case 2:J.vertexAttrib2fv(r.location,Z0);break;case 3:J.vertexAttrib3fv(r.location,Z0);break;case 4:J.vertexAttrib4fv(r.location,Z0);break;default:J.vertexAttrib1fv(r.location,Z0)}}}}z()}function I(){C();for(let y in W){let b=W[y];for(let e in b){let S=b[e];for(let u in S){let Q0=S[u];for(let d in Q0)E(Q0[d].object),delete Q0[d];delete S[u]}}delete W[y]}}function P(y){if(W[y.id]===void 0)return;let b=W[y.id];for(let e in b){let S=b[e];for(let u in S){let Q0=S[u];for(let d in Q0)E(Q0[d].object),delete Q0[d];delete S[u]}}delete W[y.id]}function _(y){for(let b in W){let e=W[b];for(let S in e){let u=e[S];if(u[y.id]===void 0)continue;let Q0=u[y.id];for(let d in Q0)E(Q0[d].object),delete Q0[d];delete u[y.id]}}}function M(y){for(let b in W){let e=W[b],S=y.isInstancedMesh===!0?y.id:0,u=e[S];if(u===void 0)continue;for(let Q0 in u){let d=u[Q0];for(let Y0 in d)E(d[Y0].object),delete d[Y0];delete u[Q0]}if(delete e[S],Object.keys(e).length===0)delete W[b]}}function C(){if(l(),K=!0,H===Z)return;H=Z,U(H.object)}function l(){Z.geometry=null,Z.program=null,Z.wireframe=!1}return{setup:Y,reset:C,resetDefaultState:l,dispose:I,releaseStatesOfGeometry:P,releaseStatesOfObject:M,releaseStatesOfProgram:_,initAttributes:k,enableAttribute:F,disableUnusedAttributes:z}}function c5(J,Q,$){let W;function Z(X){W=X}function H(X,U){J.drawArrays(W,X,U),$.update(U,W,1)}function K(X,U,E){if(E===0)return;J.drawArraysInstanced(W,X,U,E),$.update(U,W,E)}function Y(X,U,E){if(E===0)return;Q.get("WEBGL_multi_draw").multiDrawArraysWEBGL(W,X,0,U,0,E);let G=0;for(let q=0;q<E;q++)G+=U[q];$.update(G,W,1)}this.setMode=Z,this.render=H,this.renderInstances=K,this.renderMultiDraw=Y}function n5(J,Q,$,W){let Z;function H(){if(Z!==void 0)return Z;if(Q.has("EXT_texture_filter_anisotropic")===!0){let _=Q.get("EXT_texture_filter_anisotropic");Z=J.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else Z=0;return Z}function K(_){if(_!==v8&&W.convert(_)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function Y(_){let M=_===j8&&(Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float"));if(_!==C8&&_!==a8&&!M&&W.convert(_)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function X(_){if(_==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";_="mediump"}if(_==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let U=$.precision!==void 0?$.precision:"highp",E=X(U);if(E!==U)A0("WebGLRenderer:",U,"not supported, using",E,"instead."),U=E;let N=$.logarithmicDepthBuffer===!0,G=$.reversedDepthBuffer===!0&&Q.has("EXT_clip_control");if($.reversedDepthBuffer===!0&&G===!1)A0("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let q=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),R=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),k=J.getParameter(J.MAX_TEXTURE_SIZE),F=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),O=J.getParameter(J.MAX_VERTEX_ATTRIBS),z=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),A=J.getParameter(J.MAX_VARYING_VECTORS),V=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),I=J.getParameter(J.MAX_SAMPLES),P=J.getParameter(J.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:H,getMaxPrecision:X,textureFormatReadable:K,textureTypeReadable:Y,precision:U,logarithmicDepthBuffer:N,reversedDepthBuffer:G,maxTextures:q,maxVertexTextures:R,maxTextureSize:k,maxCubemapSize:F,maxAttributes:O,maxVertexUniforms:z,maxVaryings:A,maxFragmentUniforms:V,maxSamples:I,samples:P}}function s5(J){let Q=this,$=null,W=0,Z=!1,H=!1,K=new G8,Y=new x0,X={value:null,needsUpdate:!1};this.uniform=X,this.numPlanes=0,this.numIntersection=0,this.init=function(N,G){let q=N.length!==0||G||W!==0||Z;return Z=G,W=N.length,q},this.beginShadows=function(){H=!0,E(null)},this.endShadows=function(){H=!1},this.setGlobalState=function(N,G){$=E(N,G,0)},this.setState=function(N,G,q){let{clippingPlanes:R,clipIntersection:k,clipShadows:F}=N,O=J.get(N);if(!Z||R===null||R.length===0||H&&!F)if(H)E(null);else U();else{let z=H?0:W,A=z*4,V=O.clippingState||null;X.value=V,V=E(R,G,A,q);for(let I=0;I!==A;++I)V[I]=$[I];O.clippingState=V,this.numIntersection=k?this.numPlanes:0,this.numPlanes+=z}};function U(){if(X.value!==$)X.value=$,X.needsUpdate=W>0;Q.numPlanes=W,Q.numIntersection=0}function E(N,G,q,R){let k=N!==null?N.length:0,F=null;if(k!==0){if(F=X.value,R!==!0||F===null){let O=q+k*4,z=G.matrixWorldInverse;if(Y.getNormalMatrix(z),F===null||F.length<O)F=new Float32Array(O);for(let A=0,V=q;A!==k;++A,V+=4)K.copy(N[A]).applyMatrix4(z,Y),K.normal.toArray(F,V),F[V+3]=K.constant}X.value=F,X.needsUpdate=!0}return Q.numPlanes=k,Q.numIntersection=0,F}}var v9=4,i5=6,o5=20,a5=256,D7=new m6,SK=new j0,iW=null,oW=0,aW=0,rW=!1,r5=new h,u6=new h;class JZ{constructor(J){this._renderer=J,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(J,Q=0,$=0.1,W=100,Z={}){let{size:H=256,position:K=r5}=Z;iW=this._renderer.getRenderTarget(),oW=this._renderer.getActiveCubeFace(),aW=this._renderer.getActiveMipmapLevel(),rW=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(H);let Y=this._allocateTargets();if(Y.depthBuffer=!0,this._sceneToCubeUV(J,$,W,Y,K),Q>0)this._blur(Y,0,0,Q);return this._applyPMREM(Y),this._cleanup(Y),Y}fromEquirectangular(J,Q=null){return this._fromTexture(J,Q)}fromCubemap(J,Q=null){return this._fromTexture(J,Q)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=yK(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=vK(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._backgroundBox!==null)this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose()}_setSize(J){this._lodMax=Math.floor(Math.log2(J)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let J=0;J<this._lodMeshes.length;J++)this._lodMeshes[J].geometry.dispose()}_cleanup(J){this._renderer.setRenderTarget(iW,oW,aW),this._renderer.xr.enabled=rW,J.scissorTest=!1,j9(J,0,0,J.width,J.height)}_fromTexture(J,Q){if(J.mapping===D9||J.mapping===T6)this._setSize(J.image.length===0?16:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);iW=this._renderer.getRenderTarget(),oW=this._renderer.getActiveCubeFace(),aW=this._renderer.getActiveMipmapLevel(),rW=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let $=Q||this._allocateTargets();return this._textureToCubeUV(J,$),this._applyPMREM($),this._cleanup($),$}_allocateTargets(){let J=3*Math.max(this._cubeSize,112),Q=4*this._cubeSize,$={magFilter:vJ,minFilter:vJ,generateMipmaps:!1,type:j8,format:v8,colorSpace:$8,depthBuffer:!1},W=jK(J,Q,$);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==J||this._pingPongRenderTarget.height!==Q){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=jK(J,Q,$);let{_lodMax:Z}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=t5(Z)),this._blurMaterial=JG(Z,J,Q),this._ggxMaterial=e5(Z,J,Q)}return W}_compileMaterial(J){let Q=new o0(new FJ,J);this._renderer.compile(Q,D7)}_sceneToCubeUV(J,Q,$,W,Z){let Y=new PJ(90,1,Q,$),X=[1,-1,1,1,1,1],U=[1,1,1,-1,-1,-1],E=this._renderer,N=E.autoClear,G=E.toneMapping;if(E.getClearColor(SK),E.toneMapping=k8,E.autoClear=!1,E.state.buffers.depth.getReversed())E.setRenderTarget(W),E.clearDepth(),E.setRenderTarget(null);if(this._backgroundBox===null)this._backgroundBox=new o0(new I8,new RJ({name:"PMREM.Background",side:lJ,depthWrite:!1,depthTest:!1}));let R=this._backgroundBox,k=R.material,F=!1,O=J.background;if(O){if(O.isColor)k.color.copy(O),J.background=null,F=!0}else k.color.copy(SK),F=!0;for(let z=0;z<6;z++){let A=z%3;if(A===0)Y.up.set(0,X[z],0),Y.position.set(Z.x,Z.y,Z.z),Y.lookAt(Z.x+U[z],Z.y,Z.z);else if(A===1)Y.up.set(0,0,X[z]),Y.position.set(Z.x,Z.y,Z.z),Y.lookAt(Z.x,Z.y+U[z],Z.z);else Y.up.set(0,X[z],0),Y.position.set(Z.x,Z.y,Z.z),Y.lookAt(Z.x,Z.y,Z.z+U[z]);let V=this._cubeSize;if(j9(W,A*V,z>2?V:0,V,V),E.setRenderTarget(W),F)E.render(R,Y);E.render(J,Y)}E.toneMapping=G,E.autoClear=N,J.background=O}_textureToCubeUV(J,Q){let $=this._renderer,W=J.mapping===D9||J.mapping===T6;if(W){if(this._cubemapMaterial===null)this._cubemapMaterial=yK();this._cubemapMaterial.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=vK();let Z=W?this._cubemapMaterial:this._equirectMaterial,H=this._lodMeshes[0];H.material=Z;let K=Z.uniforms;K.envMap.value=J;let Y=this._cubeSize;j9(Q,0,0,3*Y,2*Y),$.setRenderTarget(Q),$.render(H,D7)}_applyPMREM(J){let Q=this._renderer,$=Q.autoClear;Q.autoClear=!1;let W=this._lodMeshes.length;for(let Z=1;Z<W;Z++)this._applyGGXFilter(J,Z-1,Z);Q.autoClear=$}_applyGGXFilter(J,Q,$){let W=this._renderer,Z=this._pingPongRenderTarget,H=this._ggxMaterial,K=this._lodMeshes[$];K.material=H;let Y=H.uniforms,X=$/(this._lodMeshes.length-1),U=Q/(this._lodMeshes.length-1),E=Math.sqrt(X*X-U*U),N=X*1.25,G=E*N,{_lodMax:q}=this,R=this._sizeLods[$],k=3*R*($>q-v9?$-q+v9:0),F=4*(this._cubeSize-R);Y.envMap.value=J.texture,Y.roughness.value=G,Y.mipInt.value=q-Q,j9(Z,k,F,3*R,2*R),W.setRenderTarget(Z),W.render(K,D7),Y.envMap.value=Z.texture,Y.roughness.value=0,Y.mipInt.value=q-$,j9(J,k,F,3*R,2*R),W.setRenderTarget(J),W.render(K,D7)}_blur(J,Q,$,W){let Z=this._pingPongRenderTarget,H=Math.min(W,Math.PI)/Math.SQRT2;this._blurPass(J,Z,Q,$,H),this._blurPass(Z,J,$,$,H)}_blurPass(J,Q,$,W,Z){let H=this._renderer,K=this._blurMaterial,Y=this._lodMeshes[W];Y.material=K;let X=K.uniforms;X.envMap.value=J.texture,X.sigma.value=Z,X.mipInt.value=this._lodMax-$;let U=this._sizeLods[W],E=3*U*(W>this._lodMax-v9?W-this._lodMax+v9:0),N=4*(this._cubeSize-U);j9(Q,E,N,3*U,2*U),H.setRenderTarget(Q),H.render(Y,D7)}}function t5(J){let Q=[],$=[],W=J,Z=J-v9+1+i5;for(let H=0;H<Z;H++){let K=Math.pow(2,W);Q.push(K);let Y=1/(K-2),X=-Y,U=1+Y,E=[X,X,U,X,U,U,X,X,U,U,X,U],N=6,G=6,q=3,R=new Float32Array(q*G*N),k=new Float32Array(q*G*N);for(let O=0;O<N;O++){let z=O%3*2/3-1,A=O>2?0:-1,V=[z,A,0,z+0.6666666666666666,A,0,z+0.6666666666666666,A+1,0,z,A,0,z+0.6666666666666666,A+1,0,z,A+1,0];R.set(V,q*G*O);for(let I=0;I<G;I++){let P=E[I*2]*2-1,_=E[I*2+1]*2-1;if(O===0)u6.set(1,_,P);else if(O===1)u6.set(-P,1,-_);else if(O===2)u6.set(-P,_,1);else if(O===3)u6.set(-1,_,-P);else if(O===4)u6.set(-P,-1,_);else u6.set(P,_,-1);u6.toArray(k,(O*G+I)*q)}}let F=new FJ;if(F.setAttribute("position",new _J(R,q)),F.setAttribute("outputDirection",new _J(k,q)),$.push(new o0(F,null)),W>v9)W--}return{lodMeshes:$,sizeLods:Q}}function jK(J,Q,$){let W=new W8(J,Q,$);return W.texture.mapping=$7,W.texture.name="PMREM.cubeUv",W.scissorTest=!0,W}function j9(J,Q,$,W,Z){J.viewport.set(Q,$,W,Z),J.scissor.set(Q,$,W,Z)}function e5(J,Q,$){return new rJ({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:a5,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:lQ(),fragmentShader:`

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
		`,blending:T8,depthTest:!1,depthWrite:!1})}function JG(J,Q,$){return new rJ({name:"SphericalGaussianBlur",defines:{SAMPLES:o5,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:lQ(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:T8,depthTest:!1,depthWrite:!1})}function vK(){return new rJ({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lQ(),fragmentShader:`

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
		`,blending:T8,depthTest:!1,depthWrite:!1})}function yK(){return new rJ({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lQ(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:T8,depthTest:!1,depthWrite:!1})}function lQ(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class WZ extends W8{constructor(J=1,Q={}){super(J,J,Q);this.isWebGLCubeRenderTarget=!0;let $={width:J,height:J,depth:1},W=[$,$,$,$,$,$];this.texture=new _Q(W),this._setTextureOptions(Q),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(J,Q){this.texture.type=Q.type,this.texture.colorSpace=Q.colorSpace,this.texture.generateMipmaps=Q.generateMipmaps,this.texture.minFilter=Q.minFilter,this.texture.magFilter=Q.magFilter;let $={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},W=new I8(5,5,5),Z=new rJ({name:"CubemapFromEquirect",uniforms:p6($.uniforms),vertexShader:$.vertexShader,fragmentShader:$.fragmentShader,side:lJ,blending:T8});Z.uniforms.tEquirect.value=Q;let H=new o0(W,Z),K=Q.minFilter;if(Q.minFilter===S8)Q.minFilter=vJ;return new pW(1,10,this).update(J,H),Q.minFilter=K,H.geometry.dispose(),H.material.dispose(),this}clear(J,Q=!0,$=!0,W=!0){let Z=J.getRenderTarget();for(let H=0;H<6;H++)J.setRenderTarget(this,H),J.clear(Q,$,W);J.setRenderTarget(Z)}}function QG(J){let Q=new WeakMap,$=new WeakMap,W=null;function Z(G,q=!1){if(G===null||G===void 0)return null;if(q)return K(G);return H(G)}function H(G){if(G&&G.isTexture){let q=G.mapping;if(q===KQ||q===YQ)if(Q.has(G)){let R=Q.get(G).texture;return Y(R,G.mapping)}else{let R=G.image;if(R&&R.height>0){let k=new WZ(R.height);return k.fromEquirectangularTexture(J,G),Q.set(G,k),G.addEventListener("dispose",U),Y(k.texture,G.mapping)}else return null}}return G}function K(G){if(G&&G.isTexture){let q=G.mapping,R=q===KQ||q===YQ,k=q===D9||q===T6;if(R||k){let F=$.get(G),O=F!==void 0?F.texture.pmremVersion:0;if(G.isRenderTargetTexture&&G.pmremVersion!==O){if(W===null)W=new JZ(J);return F=R?W.fromEquirectangular(G,F):W.fromCubemap(G,F),F.texture.pmremVersion=G.pmremVersion,$.set(G,F),F.texture}else if(F!==void 0)return F.texture;else{let z=G.image;if(R&&z&&z.height>0||k&&z&&X(z)){if(W===null)W=new JZ(J);return F=R?W.fromEquirectangular(G):W.fromCubemap(G),F.texture.pmremVersion=G.pmremVersion,$.set(G,F),G.addEventListener("dispose",E),F.texture}else return null}}}return G}function Y(G,q){if(q===KQ)G.mapping=D9;else if(q===YQ)G.mapping=T6;return G}function X(G){let q=0,R=6;for(let k=0;k<R;k++)if(G[k]!==void 0)q++;return q===R}function U(G){let q=G.target;q.removeEventListener("dispose",U);let R=Q.get(q);if(R!==void 0)Q.delete(q),R.dispose()}function E(G){let q=G.target;q.removeEventListener("dispose",E);let R=$.get(q);if(R!==void 0)$.delete(q),R.dispose()}function N(){if(Q=new WeakMap,$=new WeakMap,W!==null)W.dispose(),W=null}return{get:Z,dispose:N}}function $G(J){let Q={};function $(W){if(Q[W]!==void 0)return Q[W];let Z=J.getExtension(W);return Q[W]=Z,Z}return{has:function(W){return $(W)!==null},init:function(){$("EXT_color_buffer_float"),$("WEBGL_clip_cull_distance"),$("OES_texture_float_linear"),$("EXT_color_buffer_half_float"),$("WEBGL_multisampled_render_to_texture"),$("WEBGL_render_shared_exponent")},get:function(W){let Z=$(W);if(Z===null)_6("WebGLRenderer: "+W+" extension not supported.");return Z}}}function WG(J,Q,$,W){let Z={},H=new WeakMap;function K(N){let G=N.target;if(G.index!==null)Q.remove(G.index);for(let R in G.attributes)Q.remove(G.attributes[R]);G.removeEventListener("dispose",K),delete Z[G.id];let q=H.get(G);if(q)Q.remove(q),H.delete(G);if(W.releaseStatesOfGeometry(G),G.isInstancedBufferGeometry===!0)delete G._maxInstanceCount;$.memory.geometries--}function Y(N,G){if(Z[G.id]===!0)return G;return G.addEventListener("dispose",K),Z[G.id]=!0,$.memory.geometries++,G}function X(N){let G=N.attributes;for(let q in G)Q.update(G[q],J.ARRAY_BUFFER)}function U(N){let G=[],q=N.index,R=N.attributes.position,k=0;if(R===void 0)return;if(q!==null){let z=q.array;k=q.version;for(let A=0,V=z.length;A<V;A+=3){let I=z[A+0],P=z[A+1],_=z[A+2];G.push(I,P,P,_,_,I)}}else{let z=R.array;k=R.version;for(let A=0,V=z.length/3-1;A<V;A+=3){let I=A+0,P=A+1,_=A+2;G.push(I,P,P,_,_,I)}}let F=new(R.count>=65535?BQ:kQ)(G,1);F.version=k;let O=H.get(N);if(O)Q.remove(O);H.set(N,F)}function E(N){let G=H.get(N);if(G){let q=N.index;if(q!==null){if(G.version<q.version)U(N)}}else U(N);return H.get(N)}return{get:Y,update:X,getWireframeAttribute:E}}function ZG(J,Q,$){let W;function Z(N){W=N}let H,K;function Y(N){H=N.type,K=N.bytesPerElement}function X(N,G){J.drawElements(W,G,H,N*K),$.update(G,W,1)}function U(N,G,q){if(q===0)return;J.drawElementsInstanced(W,G,H,N*K,q),$.update(G,W,q)}function E(N,G,q){if(q===0)return;Q.get("WEBGL_multi_draw").multiDrawElementsWEBGL(W,G,0,H,N,0,q);let k=0;for(let F=0;F<q;F++)k+=G[F];$.update(k,W,1)}this.setMode=Z,this.setIndex=Y,this.render=X,this.renderInstances=U,this.renderMultiDraw=E}function HG(J){let Q={geometries:0,textures:0},$={frame:0,calls:0,triangles:0,points:0,lines:0};function W(H,K,Y){switch($.calls++,K){case J.TRIANGLES:$.triangles+=Y*(H/3);break;case J.LINES:$.lines+=Y*(H/2);break;case J.LINE_STRIP:$.lines+=Y*(H-1);break;case J.LINE_LOOP:$.lines+=Y*H;break;case J.POINTS:$.points+=Y*H;break;default:f0("WebGLInfo: Unknown draw mode:",K);break}}function Z(){$.calls=0,$.triangles=0,$.points=0,$.lines=0}return{memory:Q,render:$,programs:null,autoReset:!0,reset:Z,update:W}}function KG(J,Q,$){let W=new WeakMap,Z=new YJ;function H(K,Y,X){let U=K.morphTargetInfluences,E=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,N=E!==void 0?E.length:0,G=W.get(Y);if(G===void 0||G.count!==N){let C=function(){_.dispose(),W.delete(Y),Y.removeEventListener("dispose",C)};if(G!==void 0)G.texture.dispose();let q=Y.morphAttributes.position!==void 0,R=Y.morphAttributes.normal!==void 0,k=Y.morphAttributes.color!==void 0,F=Y.morphAttributes.position||[],O=Y.morphAttributes.normal||[],z=Y.morphAttributes.color||[],A=0;if(q===!0)A=1;if(R===!0)A=2;if(k===!0)A=3;let V=Y.attributes.position.count*A,I=1;if(V>Q.maxTextureSize)I=Math.ceil(V/Q.maxTextureSize),V=Q.maxTextureSize;let P=new Float32Array(V*I*4*N),_=new DQ(P,V,I,N);_.type=a8,_.needsUpdate=!0;let M=A*4;for(let l=0;l<N;l++){let y=F[l],b=O[l],e=z[l],S=V*I*4*l;for(let u=0;u<y.count;u++){let Q0=u*M;if(q===!0)Z.fromBufferAttribute(y,u),P[S+Q0+0]=Z.x,P[S+Q0+1]=Z.y,P[S+Q0+2]=Z.z,P[S+Q0+3]=0;if(R===!0)Z.fromBufferAttribute(b,u),P[S+Q0+4]=Z.x,P[S+Q0+5]=Z.y,P[S+Q0+6]=Z.z,P[S+Q0+7]=0;if(k===!0)Z.fromBufferAttribute(e,u),P[S+Q0+8]=Z.x,P[S+Q0+9]=Z.y,P[S+Q0+10]=Z.z,P[S+Q0+11]=e.itemSize===4?Z.w:1}}G={count:N,texture:_,size:new y0(V,I)},W.set(Y,G),Y.addEventListener("dispose",C)}if(K.isInstancedMesh===!0&&K.morphTexture!==null)X.getUniforms().setValue(J,"morphTexture",K.morphTexture,$);else{let q=0;for(let k=0;k<U.length;k++)q+=U[k];let R=Y.morphTargetsRelative?1:1-q;X.getUniforms().setValue(J,"morphTargetBaseInfluence",R),X.getUniforms().setValue(J,"morphTargetInfluences",U)}X.getUniforms().setValue(J,"morphTargetsTexture",G.texture,$),X.getUniforms().setValue(J,"morphTargetsTextureSize",G.size)}return{update:H}}function YG(J,Q,$,W,Z){let H=new WeakMap;function K(U){let E=Z.render.frame,N=U.geometry,G=Q.get(U,N);if(H.get(G)!==E)Q.update(G),H.set(G,E);if(U.isInstancedMesh){if(U.hasEventListener("dispose",X)===!1)U.addEventListener("dispose",X);if(H.get(U)!==E){if($.update(U.instanceMatrix,J.ARRAY_BUFFER),U.instanceColor!==null)$.update(U.instanceColor,J.ARRAY_BUFFER);H.set(U,E)}}if(U.isSkinnedMesh){let q=U.skeleton;if(H.get(q)!==E)q.update(),H.set(q,E)}return G}function Y(){H=new WeakMap}function X(U){let E=U.target;if(E.removeEventListener("dispose",X),W.releaseStatesOfObject(E),$.remove(E.instanceMatrix),E.instanceColor!==null)$.remove(E.instanceColor)}return{update:K,dispose:Y}}var XG={[T$]:"LINEAR_TONE_MAPPING",[S$]:"REINHARD_TONE_MAPPING",[j$]:"CINEON_TONE_MAPPING",[Q7]:"ACES_FILMIC_TONE_MAPPING",[y$]:"AGX_TONE_MAPPING",[f$]:"NEUTRAL_TONE_MAPPING",[v$]:"CUSTOM_TONE_MAPPING"};function UG(J,Q,$,W,Z,H){let K=new W8(Q,$,{type:J,depthBuffer:Z,stencilBuffer:H,samples:W?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),Y=null,X=null,U=new FJ;U.setAttribute("position",new e0([-1,3,0,-1,-1,0,3,-1,0],3)),U.setAttribute("uv",new e0([0,2,0,0,2,0],2));let E=new SW({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),N=new o0(U,E),G=new m6(-1,1,1,-1,0,1),q=null,R=null,k=!1,F,O=null,z=[],A=!1;this.setSize=function(V,I){if(K.setSize(V,I),Y!==null)Y.setSize(V,I);if(X!==null)X.setSize(V,I);for(let P=0;P<z.length;P++){let _=z[P];if(_.setSize)_.setSize(V,I)}},this.setEffects=function(V){z=V,A=z.length>0&&z[0].isRenderPass===!0;let{width:I,height:P}=K;if(z.length>0&&Y===null)Y=new W8(I,P,{type:j8,depthBuffer:!1,stencilBuffer:!1}),X=new W8(I,P,{type:j8,depthBuffer:!1,stencilBuffer:!1});for(let _=0;_<z.length;_++){let M=z[_];if(M.setSize)M.setSize(I,P)}},this.begin=function(V,I){if(k)return!1;if(V.toneMapping===k8&&z.length===0)return!1;if(O=I,I!==null){let{width:P,height:_}=I;if(K.width!==P||K.height!==_)this.setSize(P,_)}if(A===!1)V.setRenderTarget(K);return F=V.toneMapping,V.toneMapping=k8,!0},this.hasRenderPass=function(){return A},this.end=function(V,I){V.toneMapping=F,k=!0;let P=K,_=Y;for(let M=0;M<z.length;M++){let C=z[M];if(C.enabled===!1)continue;if(C.render(V,_,P,I),C.needsSwap!==!1)P=_,_=_===Y?X:Y}if(q!==V.outputColorSpace||R!==V.toneMapping){if(q=V.outputColorSpace,R=V.toneMapping,E.defines={},c0.getTransfer(q)===GJ)E.defines.SRGB_TRANSFER="";let M=XG[R];if(M)E.defines[M]="";E.needsUpdate=!0}E.uniforms.tDiffuse.value=P.texture,V.setRenderTarget(O),V.render(N,G),O=null,k=!1},this.isCompositing=function(){return k},this.dispose=function(){if(K.dispose(),Y!==null)Y.dispose();if(X!==null)X.dispose();U.dispose(),E.dispose()}}var JY=new BJ,QZ=new b6(1,1),QY=new DQ,$Y=new _W,WY=new _Q,fK=[],hK=[],bK=new Float32Array(16),xK=new Float32Array(9),gK=new Float32Array(4);function y9(J,Q,$){let W=J[0];if(W<=0||W>0)return J;let Z=Q*$,H=fK[Z];if(H===void 0)H=new Float32Array(Z),fK[Z]=H;if(Q!==0){W.toArray(H,0);for(let K=1,Y=0;K!==Q;++K)Y+=$,J[K].toArray(H,Y)}return H}function TJ(J,Q){if(J.length!==Q.length)return!1;for(let $=0,W=J.length;$<W;$++)if(J[$]!==Q[$])return!1;return!0}function SJ(J,Q){for(let $=0,W=Q.length;$<W;$++)J[$]=Q[$]}function mQ(J,Q){let $=hK[Q];if($===void 0)$=new Int32Array(Q),hK[Q]=$;for(let W=0;W!==Q;++W)$[W]=J.allocateTextureUnit();return $}function EG(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1f(this.addr,Q),$[0]=Q}function GG(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2f(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(TJ($,Q))return;J.uniform2fv(this.addr,Q),SJ($,Q)}}function NG(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3f(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else if(Q.r!==void 0){if($[0]!==Q.r||$[1]!==Q.g||$[2]!==Q.b)J.uniform3f(this.addr,Q.r,Q.g,Q.b),$[0]=Q.r,$[1]=Q.g,$[2]=Q.b}else{if(TJ($,Q))return;J.uniform3fv(this.addr,Q),SJ($,Q)}}function qG(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4f(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(TJ($,Q))return;J.uniform4fv(this.addr,Q),SJ($,Q)}}function FG(J,Q){let $=this.cache,W=Q.elements;if(W===void 0){if(TJ($,Q))return;J.uniformMatrix2fv(this.addr,!1,Q),SJ($,Q)}else{if(TJ($,W))return;gK.set(W),J.uniformMatrix2fv(this.addr,!1,gK),SJ($,W)}}function OG(J,Q){let $=this.cache,W=Q.elements;if(W===void 0){if(TJ($,Q))return;J.uniformMatrix3fv(this.addr,!1,Q),SJ($,Q)}else{if(TJ($,W))return;xK.set(W),J.uniformMatrix3fv(this.addr,!1,xK),SJ($,W)}}function RG(J,Q){let $=this.cache,W=Q.elements;if(W===void 0){if(TJ($,Q))return;J.uniformMatrix4fv(this.addr,!1,Q),SJ($,Q)}else{if(TJ($,W))return;bK.set(W),J.uniformMatrix4fv(this.addr,!1,bK),SJ($,W)}}function LG(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1i(this.addr,Q),$[0]=Q}function MG(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2i(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(TJ($,Q))return;J.uniform2iv(this.addr,Q),SJ($,Q)}}function DG(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3i(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(TJ($,Q))return;J.uniform3iv(this.addr,Q),SJ($,Q)}}function VG(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4i(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(TJ($,Q))return;J.uniform4iv(this.addr,Q),SJ($,Q)}}function kG(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1ui(this.addr,Q),$[0]=Q}function BG(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2ui(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(TJ($,Q))return;J.uniform2uiv(this.addr,Q),SJ($,Q)}}function CG(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3ui(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(TJ($,Q))return;J.uniform3uiv(this.addr,Q),SJ($,Q)}}function IG(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4ui(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(TJ($,Q))return;J.uniform4uiv(this.addr,Q),SJ($,Q)}}function wG(J,Q,$){let W=this.cache,Z=$.allocateTextureUnit();if(W[0]!==Z)J.uniform1i(this.addr,Z),W[0]=Z;let H;if(this.type===J.SAMPLER_2D_SHADOW)QZ.compareFunction=$.isReversedDepthBuffer()?MQ:LQ,H=QZ;else H=JY;$.setTexture2D(Q||H,Z)}function zG(J,Q,$){let W=this.cache,Z=$.allocateTextureUnit();if(W[0]!==Z)J.uniform1i(this.addr,Z),W[0]=Z;$.setTexture3D(Q||$Y,Z)}function PG(J,Q,$){let W=this.cache,Z=$.allocateTextureUnit();if(W[0]!==Z)J.uniform1i(this.addr,Z),W[0]=Z;$.setTextureCube(Q||WY,Z)}function _G(J,Q,$){let W=this.cache,Z=$.allocateTextureUnit();if(W[0]!==Z)J.uniform1i(this.addr,Z),W[0]=Z;$.setTexture2DArray(Q||QY,Z)}function AG(J){switch(J){case 5126:return EG;case 35664:return GG;case 35665:return NG;case 35666:return qG;case 35674:return FG;case 35675:return OG;case 35676:return RG;case 5124:case 35670:return LG;case 35667:case 35671:return MG;case 35668:case 35672:return DG;case 35669:case 35673:return VG;case 5125:return kG;case 36294:return BG;case 36295:return CG;case 36296:return IG;case 35678:case 36198:case 36298:case 36306:case 35682:return wG;case 35679:case 36299:case 36307:return zG;case 35680:case 36300:case 36308:case 36293:return PG;case 36289:case 36303:case 36311:case 36292:return _G}}function TG(J,Q){J.uniform1fv(this.addr,Q)}function SG(J,Q){let $=y9(Q,this.size,2);J.uniform2fv(this.addr,$)}function jG(J,Q){let $=y9(Q,this.size,3);J.uniform3fv(this.addr,$)}function vG(J,Q){let $=y9(Q,this.size,4);J.uniform4fv(this.addr,$)}function yG(J,Q){let $=y9(Q,this.size,4);J.uniformMatrix2fv(this.addr,!1,$)}function fG(J,Q){let $=y9(Q,this.size,9);J.uniformMatrix3fv(this.addr,!1,$)}function hG(J,Q){let $=y9(Q,this.size,16);J.uniformMatrix4fv(this.addr,!1,$)}function bG(J,Q){J.uniform1iv(this.addr,Q)}function xG(J,Q){J.uniform2iv(this.addr,Q)}function gG(J,Q){J.uniform3iv(this.addr,Q)}function pG(J,Q){J.uniform4iv(this.addr,Q)}function lG(J,Q){J.uniform1uiv(this.addr,Q)}function mG(J,Q){J.uniform2uiv(this.addr,Q)}function dG(J,Q){J.uniform3uiv(this.addr,Q)}function uG(J,Q){J.uniform4uiv(this.addr,Q)}function cG(J,Q,$){let W=this.cache,Z=Q.length,H=mQ($,Z);if(!TJ(W,H))J.uniform1iv(this.addr,H),SJ(W,H);let K;if(this.type===J.SAMPLER_2D_SHADOW)K=QZ;else K=JY;for(let Y=0;Y!==Z;++Y)$.setTexture2D(Q[Y]||K,H[Y])}function nG(J,Q,$){let W=this.cache,Z=Q.length,H=mQ($,Z);if(!TJ(W,H))J.uniform1iv(this.addr,H),SJ(W,H);for(let K=0;K!==Z;++K)$.setTexture3D(Q[K]||$Y,H[K])}function sG(J,Q,$){let W=this.cache,Z=Q.length,H=mQ($,Z);if(!TJ(W,H))J.uniform1iv(this.addr,H),SJ(W,H);for(let K=0;K!==Z;++K)$.setTextureCube(Q[K]||WY,H[K])}function iG(J,Q,$){let W=this.cache,Z=Q.length,H=mQ($,Z);if(!TJ(W,H))J.uniform1iv(this.addr,H),SJ(W,H);for(let K=0;K!==Z;++K)$.setTexture2DArray(Q[K]||QY,H[K])}function oG(J){switch(J){case 5126:return TG;case 35664:return SG;case 35665:return jG;case 35666:return vG;case 35674:return yG;case 35675:return fG;case 35676:return hG;case 5124:case 35670:return bG;case 35667:case 35671:return xG;case 35668:case 35672:return gG;case 35669:case 35673:return pG;case 5125:return lG;case 36294:return mG;case 36295:return dG;case 36296:return uG;case 35678:case 36198:case 36298:case 36306:case 35682:return cG;case 35679:case 36299:case 36307:return nG;case 35680:case 36300:case 36308:case 36293:return sG;case 36289:case 36303:case 36311:case 36292:return iG}}class ZY{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.setValue=AG(Q.type)}}class HY{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.size=Q.size,this.setValue=oG(Q.type)}}class KY{constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,Q,$){let W=this.seq;for(let Z=0,H=W.length;Z!==H;++Z){let K=W[Z];K.setValue(J,Q[K.id],$)}}}var tW=/(\w+)(\])?(\[|\.)?/g;function pK(J,Q){J.seq.push(Q),J.map[Q.id]=Q}function aG(J,Q,$){let W=J.name,Z=W.length;tW.lastIndex=0;while(!0){let H=tW.exec(W),K=tW.lastIndex,Y=H[1],X=H[2]==="]",U=H[3];if(X)Y=Y|0;if(U===void 0||U==="["&&K+2===Z){pK($,U===void 0?new ZY(Y,J,Q):new HY(Y,J,Q));break}else{let N=$.map[Y];if(N===void 0)N=new KY(Y),pK($,N);$=N}}}class B7{constructor(J,Q){this.seq=[],this.map={};let $=J.getProgramParameter(Q,J.ACTIVE_UNIFORMS);for(let H=0;H<$;++H){let K=J.getActiveUniform(Q,H),Y=J.getUniformLocation(Q,K.name);aG(K,Y,this)}let W=[],Z=[];for(let H of this.seq)if(H.type===J.SAMPLER_2D_SHADOW||H.type===J.SAMPLER_CUBE_SHADOW||H.type===J.SAMPLER_2D_ARRAY_SHADOW)W.push(H);else Z.push(H);if(W.length>0)this.seq=W.concat(Z)}setValue(J,Q,$,W){let Z=this.map[Q];if(Z!==void 0)Z.setValue(J,$,W)}setOptional(J,Q,$){let W=Q[$];if(W!==void 0)this.setValue(J,$,W)}static upload(J,Q,$,W){for(let Z=0,H=Q.length;Z!==H;++Z){let K=Q[Z],Y=$[K.id];if(Y.needsUpdate!==!1)K.setValue(J,Y.value,W)}}static seqWithValue(J,Q){let $=[];for(let W=0,Z=J.length;W!==Z;++W){let H=J[W];if(H.id in Q)$.push(H)}return $}}function lK(J,Q,$){let W=J.createShader(Q);return J.shaderSource(W,$),J.compileShader(W),W}var rG=37297,tG=0;function eG(J,Q){let $=J.split(`
`),W=[],Z=Math.max(Q-6,0),H=Math.min(Q+6,$.length);for(let K=Z;K<H;K++){let Y=K+1;W.push(`${Y===Q?">":" "} ${Y}: ${$[K]}`)}return W.join(`
`)}var mK=new x0;function JN(J){c0._getMatrix(mK,c0.workingColorSpace,J);let Q=`mat3( ${mK.elements.map(($)=>$.toFixed(4))} )`;switch(c0.getTransfer(J)){case kW:return[Q,"LinearTransferOETF"];case GJ:return[Q,"sRGBTransferOETF"];default:return A0("WebGLProgram: Unsupported color space: ",J),[Q,"LinearTransferOETF"]}}function dK(J,Q,$){let W=J.getShaderParameter(Q,J.COMPILE_STATUS),H=(J.getShaderInfoLog(Q)||"").trim();if(W&&H==="")return"";let K=/ERROR: 0:(\d+)/.exec(H);if(K){let Y=parseInt(K[1]);return $.toUpperCase()+`

`+H+`

`+eG(J.getShaderSource(Q),Y)}else return H}function QN(J,Q){let $=JN(Q);return[`vec4 ${J}( vec4 value ) {`,`	return ${$[1]}( vec4( value.rgb * ${$[0]}, value.a ) );`,"}"].join(`
`)}var $N={[T$]:"Linear",[S$]:"Reinhard",[j$]:"Cineon",[Q7]:"ACESFilmic",[y$]:"AgX",[f$]:"Neutral",[v$]:"Custom"};function WN(J,Q){let $=$N[Q];if($===void 0)return A0("WebGLProgram: Unsupported toneMapping:",Q),"vec3 "+J+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+J+"( vec3 color ) { return "+$+"ToneMapping( color ); }"}var pQ=new h;function ZN(){c0.getLuminanceCoefficients(pQ);let J=pQ.x.toFixed(4),Q=pQ.y.toFixed(4),$=pQ.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${J}, ${Q}, ${$} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function HN(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(k7).join(`
`)}function KN(J){let Q=[];for(let $ in J){let W=J[$];if(W===!1)continue;Q.push("#define "+$+" "+W)}return Q.join(`
`)}function YN(J,Q){let $={},W=J.getProgramParameter(Q,J.ACTIVE_ATTRIBUTES);for(let Z=0;Z<W;Z++){let H=J.getActiveAttrib(Q,Z),K=H.name,Y=1;if(H.type===J.FLOAT_MAT2)Y=2;if(H.type===J.FLOAT_MAT3)Y=3;if(H.type===J.FLOAT_MAT4)Y=4;$[K]={type:H.type,location:J.getAttribLocation(Q,K),locationSize:Y}}return $}function k7(J){return J!==""}function uK(J,Q){let $=Q.numSpotLightShadows+Q.numSpotLightMaps-Q.numSpotLightShadowsWithMaps;return J.replace(/NUM_SUN_LIGHTS/g,Q.numSunLights).replace(/NUM_DIR_LIGHTS/g,Q.numDirLights).replace(/NUM_SPOT_LIGHTS/g,Q.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,Q.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,$).replace(/NUM_RECT_AREA_LIGHTS/g,Q.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,Q.numPointLights).replace(/NUM_HEMI_LIGHTS/g,Q.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,Q.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,Q.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,Q.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,Q.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,Q.numPointLightShadows)}function cK(J,Q){return J.replace(/NUM_CLIPPING_PLANES/g,Q.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,Q.numClippingPlanes-Q.numClipIntersection)}var XN=/^[ \t]*#include +<([\w\d./]+)>/gm;function $Z(J){return J.replace(XN,EN)}var UN=new Map;function EN(J,Q){let $=m0[Q];if($===void 0){let W=UN.get(Q);if(W!==void 0)$=m0[W],A0('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',Q,W);else throw Error("THREE.WebGLProgram: Can not resolve #include <"+Q+">")}return $Z($)}var GN=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nK(J){return J.replace(GN,NN)}function NN(J,Q,$,W){let Z="";for(let H=parseInt(Q);H<parseInt($);H++)Z+=W.replace(/\[\s*i\s*\]/g,"[ "+H+" ]").replace(/UNROLLED_LOOP_INDEX/g,H);return Z}function sK(J){let Q=`precision ${J.precision} float;
	precision ${J.precision} int;
	precision ${J.precision} sampler2D;
	precision ${J.precision} samplerCube;
	precision ${J.precision} sampler3D;
	precision ${J.precision} sampler2DArray;
	precision ${J.precision} sampler2DShadow;
	precision ${J.precision} samplerCubeShadow;
	precision ${J.precision} sampler2DArrayShadow;
	precision ${J.precision} isampler2D;
	precision ${J.precision} isampler3D;
	precision ${J.precision} isamplerCube;
	precision ${J.precision} isampler2DArray;
	precision ${J.precision} usampler2D;
	precision ${J.precision} usampler3D;
	precision ${J.precision} usamplerCube;
	precision ${J.precision} usampler2DArray;
	`;if(J.precision==="highp")Q+=`
#define HIGH_PRECISION`;else if(J.precision==="mediump")Q+=`
#define MEDIUM_PRECISION`;else if(J.precision==="lowp")Q+=`
#define LOW_PRECISION`;return Q}var qN={[e9]:"SHADOWMAP_TYPE_PCF",[L9]:"SHADOWMAP_TYPE_VSM"};function FN(J){return qN[J.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var ON={[D9]:"ENVMAP_TYPE_CUBE",[T6]:"ENVMAP_TYPE_CUBE",[$7]:"ENVMAP_TYPE_CUBE_UV"};function RN(J){if(J.envMap===!1)return"ENVMAP_TYPE_CUBE";return ON[J.envMapMode]||"ENVMAP_TYPE_CUBE"}var LN={[T6]:"ENVMAP_MODE_REFRACTION"};function MN(J){if(J.envMap===!1)return"ENVMAP_MODE_REFLECTION";return LN[J.envMapMode]||"ENVMAP_MODE_REFLECTION"}var DN={[JK]:"ENVMAP_BLENDING_MULTIPLY",[QK]:"ENVMAP_BLENDING_MIX",[$K]:"ENVMAP_BLENDING_ADD"};function VN(J){if(J.envMap===!1)return"ENVMAP_BLENDING_NONE";return DN[J.combine]||"ENVMAP_BLENDING_NONE"}function kN(J){let Q=J.envMapCubeUVHeight;if(Q===null)return null;let $=Math.log2(Q)-2,W=1/Q;return{texelWidth:1/(3*Math.max(Math.pow(2,$),112)),texelHeight:W,maxMip:$}}function BN(J,Q,$,W){let Z=J.getContext(),H=$.defines,K=$.vertexShader,Y=$.fragmentShader,X=FN($),U=RN($),E=MN($),N=VN($),G=kN($),q=HN($),R=KN(H),k=Z.createProgram(),F,O,z=$.glslVersion?"#version "+$.glslVersion+`
`:"";if($.isRawShaderMaterial){if(F=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,R].filter(k7).join(`
`),F.length>0)F+=`
`;if(O=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,R].filter(k7).join(`
`),O.length>0)O+=`
`}else F=[sK($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,R,$.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",$.batching?"#define USE_BATCHING":"",$.batchingColor?"#define USE_BATCHING_COLOR":"",$.instancing?"#define USE_INSTANCING":"",$.instancingColor?"#define USE_INSTANCING_COLOR":"",$.instancingMorph?"#define USE_INSTANCING_MORPH":"",$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.map?"#define USE_MAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+E:"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.displacementMap?"#define USE_DISPLACEMENTMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.mapUv?"#define MAP_UV "+$.mapUv:"",$.alphaMapUv?"#define ALPHAMAP_UV "+$.alphaMapUv:"",$.lightMapUv?"#define LIGHTMAP_UV "+$.lightMapUv:"",$.aoMapUv?"#define AOMAP_UV "+$.aoMapUv:"",$.emissiveMapUv?"#define EMISSIVEMAP_UV "+$.emissiveMapUv:"",$.bumpMapUv?"#define BUMPMAP_UV "+$.bumpMapUv:"",$.normalMapUv?"#define NORMALMAP_UV "+$.normalMapUv:"",$.displacementMapUv?"#define DISPLACEMENTMAP_UV "+$.displacementMapUv:"",$.metalnessMapUv?"#define METALNESSMAP_UV "+$.metalnessMapUv:"",$.roughnessMapUv?"#define ROUGHNESSMAP_UV "+$.roughnessMapUv:"",$.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+$.anisotropyMapUv:"",$.clearcoatMapUv?"#define CLEARCOATMAP_UV "+$.clearcoatMapUv:"",$.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+$.clearcoatNormalMapUv:"",$.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+$.clearcoatRoughnessMapUv:"",$.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+$.iridescenceMapUv:"",$.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+$.iridescenceThicknessMapUv:"",$.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+$.sheenColorMapUv:"",$.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+$.sheenRoughnessMapUv:"",$.specularMapUv?"#define SPECULARMAP_UV "+$.specularMapUv:"",$.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+$.specularColorMapUv:"",$.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+$.specularIntensityMapUv:"",$.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+$.transmissionMapUv:"",$.thicknessMapUv?"#define THICKNESSMAP_UV "+$.thicknessMapUv:"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexNormals?"#define HAS_NORMAL":"",$.vertexColors?"#define USE_COLOR":"",$.vertexAlphas?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.flatShading?"#define FLAT_SHADED":"",$.skinning?"#define USE_SKINNING":"",$.morphTargets?"#define USE_MORPHTARGETS":"",$.morphNormals&&$.flatShading===!1?"#define USE_MORPHNORMALS":"",$.morphColors?"#define USE_MORPHCOLORS":"",$.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+$.morphTextureStride:"",$.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+$.morphTargetsCount:"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+X:"",$.sizeAttenuation?"#define USE_SIZEATTENUATION":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(k7).join(`
`),O=[sK($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,R,$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",$.map?"#define USE_MAP":"",$.matcap?"#define USE_MATCAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+U:"",$.envMap?"#define "+E:"",$.envMap?"#define "+N:"",G?"#define CUBEUV_TEXEL_WIDTH "+G.texelWidth:"",G?"#define CUBEUV_TEXEL_HEIGHT "+G.texelHeight:"",G?"#define CUBEUV_MAX_MIP "+G.maxMip+".0":"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoat?"#define USE_CLEARCOAT":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.dispersion?"#define USE_DISPERSION":"",$.retroreflection?"#define USE_RETROREFLECTION":"",$.iridescence?"#define USE_IRIDESCENCE":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaTest?"#define USE_ALPHATEST":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.sheen?"#define USE_SHEEN":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexColors||$.instancingColor?"#define USE_COLOR":"",$.vertexAlphas||$.batchingColor?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.gradientMap?"#define USE_GRADIENTMAP":"",$.flatShading?"#define FLAT_SHADED":"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+X:"",$.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",$.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",$.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",$.toneMapping!==k8?"#define TONE_MAPPING":"",$.toneMapping!==k8?m0.tonemapping_pars_fragment:"",$.toneMapping!==k8?WN("toneMapping",$.toneMapping):"",$.dithering?"#define DITHERING":"",$.opaque?"#define OPAQUE":"",m0.colorspace_pars_fragment,QN("linearToOutputTexel",$.outputColorSpace),ZN(),$.useDepthPacking?"#define DEPTH_PACKING "+$.depthPacking:"",`
`].filter(k7).join(`
`);if(K=$Z(K),K=uK(K,$),K=cK(K,$),Y=$Z(Y),Y=uK(Y,$),Y=cK(Y,$),K=nK(K),Y=nK(Y),$.isRawShaderMaterial!==!0)z=`#version 300 es
`,F=[q,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+F,O=["#define varying in",$.glslVersion===BW?"":"layout(location = 0) out highp vec4 pc_fragColor;",$.glslVersion===BW?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+O;let A=z+F+K,V=z+O+Y,I=lK(Z,Z.VERTEX_SHADER,A),P=lK(Z,Z.FRAGMENT_SHADER,V);if(Z.attachShader(k,I),Z.attachShader(k,P),$.index0AttributeName!==void 0)Z.bindAttribLocation(k,0,$.index0AttributeName);else if($.hasPositionAttribute===!0)Z.bindAttribLocation(k,0,"position");Z.linkProgram(k);function _(y){if(J.debug.checkShaderErrors){let b=Z.getProgramInfoLog(k)||"",e=Z.getShaderInfoLog(I)||"",S=Z.getShaderInfoLog(P)||"",u=b.trim(),Q0=e.trim(),d=S.trim(),Y0=!0,r=!0;if(Z.getProgramParameter(k,Z.LINK_STATUS)===!1)if(Y0=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError(Z,k,I,P);else{let $0=dK(Z,I,"vertex"),Z0=dK(Z,P,"fragment");f0("WebGLProgram: Shader Error "+Z.getError()+" - VALIDATE_STATUS "+Z.getProgramParameter(k,Z.VALIDATE_STATUS)+`

Material Name: `+y.name+`
Material Type: `+y.type+`

Program Info Log: `+u+`
`+$0+`
`+Z0)}else if(u!=="")A0("WebGLProgram: Program Info Log:",u);else if(Q0===""||d==="")r=!1;if(r)y.diagnostics={runnable:Y0,programLog:u,vertexShader:{log:Q0,prefix:F},fragmentShader:{log:d,prefix:O}}}Z.deleteShader(I),Z.deleteShader(P),M=new B7(Z,k),C=YN(Z,k)}let M;this.getUniforms=function(){if(M===void 0)_(this);return M};let C;this.getAttributes=function(){if(C===void 0)_(this);return C};let l=$.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(l===!1)l=Z.getProgramParameter(k,rG);return l},this.destroy=function(){W.releaseStatesOfProgram(this),Z.deleteProgram(k),this.program=void 0},this.type=$.shaderType,this.name=$.shaderName,this.id=tG++,this.cacheKey=Q,this.usedTimes=1,this.program=k,this.vertexShader=I,this.fragmentShader=P,this}var CN=0;class YY{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J,Q,$){let W=this._getShaderCacheForMaterial(J);if(W.has(Q)===!1)W.add(Q),Q.usedTimes++;if(W.has($)===!1)W.add($),$.usedTimes++;return this}remove(J){let Q=this.materialCache.get(J);for(let $ of Q)if($.usedTimes--,$.usedTimes===0)this.shaderCache.delete($.code);return this.materialCache.delete(J),this}getVertexShaderStage(J){return this._getShaderStage(J.vertexShader)}getFragmentShaderStage(J){return this._getShaderStage(J.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let Q=this.materialCache,$=Q.get(J);if($===void 0)$=new Set,Q.set(J,$);return $}_getShaderStage(J){let Q=this.shaderCache,$=Q.get(J);if($===void 0)$=new XY(J),Q.set(J,$);return $}}class XY{constructor(J){this.id=CN++,this.code=J,this.usedTimes=0}}function IN(J){return J===y6||J===FQ||J===OQ}function wN(J,Q,$,W,Z,H){let K=new K7,Y=new YY,X=new Set,U=[],E=new Map,N=W.logarithmicDepthBuffer,G=W.precision,q={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(M){if(X.add(M),M===0)return"uv";return`uv${M}`}function k(M,C,l,y,b,e){let S=y.fog,u=b.geometry,Q0=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?y.environment:null,d=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,Y0=Q.get(M.envMap||Q0,d),r=!!Y0&&Y0.mapping===$7?Y0.image.height:null,$0=q[M.type];if(M.precision!==null){if(G=W.getMaxPrecision(M.precision),G!==M.precision)A0("WebGLProgram.getParameters:",M.precision,"not supported, using",G,"instead.")}let Z0=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,C0=Z0!==void 0?Z0.length:0,T0=0;if(u.morphAttributes.position!==void 0)T0=1;if(u.morphAttributes.normal!==void 0)T0=2;if(u.morphAttributes.color!==void 0)T0=3;let $J,p0,s,K0;if($0){let NJ=h8[$0];$J=NJ.vertexShader,p0=NJ.fragmentShader}else{$J=M.vertexShader,p0=M.fragmentShader;let NJ=Y.getVertexShaderStage(M),WJ=Y.getFragmentShaderStage(M);Y.update(M,NJ,WJ),s=NJ.id,K0=WJ.id}let U0=J.getRenderTarget(),S0=J.state.buffers.depth.getReversed(),v0=b.isInstancedMesh===!0,z0=b.isBatchedMesh===!0,MJ=!!M.map,h0=!!M.matcap,d0=!!Y0,r0=!!M.aoMap,u0=!!M.lightMap,VJ=!!M.bumpMap&&M.wireframe===!1,JJ=!!M.normalMap,yJ=!!M.displacementMap,IJ=!!M.emissiveMap,DJ=!!M.metalnessMap,v=!!M.roughnessMap,fJ=M.anisotropy>0,QJ=M.clearcoat>0,UJ=M.dispersion>0,B=M.retroreflectivity>0,L=M.iridescence>0,j=M.sheen>0,m=M.transmission>0,W0=fJ&&!!M.anisotropyMap,G0=QJ&&!!M.clearcoatMap,O0=QJ&&!!M.clearcoatNormalMap,a=QJ&&!!M.clearcoatRoughnessMap,w=L&&!!M.iridescenceMap,x=L&&!!M.iridescenceThicknessMap,n=j&&!!M.sheenColorMap,o=j&&!!M.sheenRoughnessMap,J0=!!M.specularMap,E0=!!M.specularColorMap,q0=!!M.specularIntensityMap,V0=m&&!!M.transmissionMap,T=m&&!!M.thicknessMap,H0=!!M.gradientMap,i=!!M.alphaMap,X0=M.alphaTest>0,R0=!!M.alphaHash,t=!!M.extensions,F0=k8;if(M.toneMapped){if(U0===null||U0.isXRRenderTarget===!0)F0=J.toneMapping}let g0={shaderID:$0,shaderType:M.type,shaderName:M.name,vertexShader:$J,fragmentShader:p0,defines:M.defines,customVertexShaderID:s,customFragmentShaderID:K0,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:G,batching:z0,batchingColor:z0&&b._colorsTexture!==null,instancing:v0,instancingColor:v0&&b.instanceColor!==null,instancingMorph:v0&&b.morphTexture!==null,outputColorSpace:U0===null?J.outputColorSpace:U0.isXRRenderTarget===!0?U0.texture.colorSpace:c0.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:MJ,matcap:h0,envMap:d0,envMapMode:d0&&Y0.mapping,envMapCubeUVHeight:r,aoMap:r0,lightMap:u0,bumpMap:VJ,normalMap:JJ,displacementMap:yJ,emissiveMap:IJ,normalMapObjectSpace:JJ&&M.normalMapType===EK,normalMapTangentSpace:JJ&&M.normalMapType===VW,packedNormalMap:JJ&&M.normalMapType===VW&&IN(M.normalMap.format),metalnessMap:DJ,roughnessMap:v,anisotropy:fJ,anisotropyMap:W0,clearcoat:QJ,clearcoatMap:G0,clearcoatNormalMap:O0,clearcoatRoughnessMap:a,dispersion:UJ,retroreflection:B,iridescence:L,iridescenceMap:w,iridescenceThicknessMap:x,sheen:j,sheenColorMap:n,sheenRoughnessMap:o,specularMap:J0,specularColorMap:E0,specularIntensityMap:q0,transmission:m,transmissionMap:V0,thicknessMap:T,gradientMap:H0,opaque:M.transparent===!1&&M.blending===J7&&M.alphaToCoverage===!1,alphaMap:i,alphaTest:X0,alphaHash:R0,combine:M.combine,mapUv:MJ&&R(M.map.channel),aoMapUv:r0&&R(M.aoMap.channel),lightMapUv:u0&&R(M.lightMap.channel),bumpMapUv:VJ&&R(M.bumpMap.channel),normalMapUv:JJ&&R(M.normalMap.channel),displacementMapUv:yJ&&R(M.displacementMap.channel),emissiveMapUv:IJ&&R(M.emissiveMap.channel),metalnessMapUv:DJ&&R(M.metalnessMap.channel),roughnessMapUv:v&&R(M.roughnessMap.channel),anisotropyMapUv:W0&&R(M.anisotropyMap.channel),clearcoatMapUv:G0&&R(M.clearcoatMap.channel),clearcoatNormalMapUv:O0&&R(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:a&&R(M.clearcoatRoughnessMap.channel),iridescenceMapUv:w&&R(M.iridescenceMap.channel),iridescenceThicknessMapUv:x&&R(M.iridescenceThicknessMap.channel),sheenColorMapUv:n&&R(M.sheenColorMap.channel),sheenRoughnessMapUv:o&&R(M.sheenRoughnessMap.channel),specularMapUv:J0&&R(M.specularMap.channel),specularColorMapUv:E0&&R(M.specularColorMap.channel),specularIntensityMapUv:q0&&R(M.specularIntensityMap.channel),transmissionMapUv:V0&&R(M.transmissionMap.channel),thicknessMapUv:T&&R(M.thicknessMap.channel),alphaMapUv:i&&R(M.alphaMap.channel),vertexTangents:!!u.attributes.tangent&&(JJ||fJ),vertexNormals:!!u.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!u.attributes.color&&u.attributes.color.itemSize===4,pointsUvs:b.isPoints===!0&&!!u.attributes.uv&&(MJ||i),fog:!!S,useFog:M.fog===!0,fogExp2:!!S&&S.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||u.attributes.normal===void 0&&JJ===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:N,reversedDepthBuffer:S0,skinning:b.isSkinnedMesh===!0,hasPositionAttribute:u.attributes.position!==void 0,morphTargets:u.morphAttributes.position!==void 0,morphNormals:u.morphAttributes.normal!==void 0,morphColors:u.morphAttributes.color!==void 0,morphTargetsCount:C0,morphTextureStride:T0,numSunLights:C.sun.length,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numSunLightShadows:C.sunShadowMap.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:e.length,numClippingPlanes:H.numPlanes,numClipIntersection:H.numIntersection,dithering:M.dithering,shadowMapEnabled:J.shadowMap.enabled&&l.length>0,shadowMapType:J.shadowMap.type,toneMapping:F0,decodeVideoTexture:MJ&&M.map.isVideoTexture===!0&&c0.getTransfer(M.map.colorSpace)===GJ,decodeVideoTextureEmissive:IJ&&M.emissiveMap.isVideoTexture===!0&&c0.getTransfer(M.emissiveMap.colorSpace)===GJ,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===AJ,flipSided:M.side===lJ,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:t&&M.extensions.clipCullDistance===!0&&$.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(t&&M.extensions.multiDraw===!0||z0)&&$.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:$.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return g0.vertexUv1s=X.has(1),g0.vertexUv2s=X.has(2),g0.vertexUv3s=X.has(3),X.clear(),g0}function F(M){let C=[];if(M.shaderID)C.push(M.shaderID);else C.push(M.customVertexShaderID),C.push(M.customFragmentShaderID);if(M.defines!==void 0)for(let l in M.defines)C.push(l),C.push(M.defines[l]);if(M.isRawShaderMaterial===!1)O(C,M),z(C,M),C.push(J.outputColorSpace);return C.push(M.customProgramCacheKey),C.join()}function O(M,C){M.push(C.precision),M.push(C.outputColorSpace),M.push(C.envMapMode),M.push(C.envMapCubeUVHeight),M.push(C.mapUv),M.push(C.alphaMapUv),M.push(C.lightMapUv),M.push(C.aoMapUv),M.push(C.bumpMapUv),M.push(C.normalMapUv),M.push(C.displacementMapUv),M.push(C.emissiveMapUv),M.push(C.metalnessMapUv),M.push(C.roughnessMapUv),M.push(C.anisotropyMapUv),M.push(C.clearcoatMapUv),M.push(C.clearcoatNormalMapUv),M.push(C.clearcoatRoughnessMapUv),M.push(C.iridescenceMapUv),M.push(C.iridescenceThicknessMapUv),M.push(C.sheenColorMapUv),M.push(C.sheenRoughnessMapUv),M.push(C.specularMapUv),M.push(C.specularColorMapUv),M.push(C.specularIntensityMapUv),M.push(C.transmissionMapUv),M.push(C.thicknessMapUv),M.push(C.combine),M.push(C.fogExp2),M.push(C.sizeAttenuation),M.push(C.morphTargetsCount),M.push(C.morphAttributeCount),M.push(C.numSunLights),M.push(C.numDirLights),M.push(C.numPointLights),M.push(C.numSpotLights),M.push(C.numSpotLightMaps),M.push(C.numHemiLights),M.push(C.numRectAreaLights),M.push(C.numSunLightShadows),M.push(C.numDirLightShadows),M.push(C.numPointLightShadows),M.push(C.numSpotLightShadows),M.push(C.numSpotLightShadowsWithMaps),M.push(C.numLightProbes),M.push(C.shadowMapType),M.push(C.toneMapping),M.push(C.numClippingPlanes),M.push(C.numClipIntersection),M.push(C.depthPacking)}function z(M,C){if(K.disableAll(),C.instancing)K.enable(0);if(C.instancingColor)K.enable(1);if(C.instancingMorph)K.enable(2);if(C.matcap)K.enable(3);if(C.envMap)K.enable(4);if(C.normalMapObjectSpace)K.enable(5);if(C.normalMapTangentSpace)K.enable(6);if(C.clearcoat)K.enable(7);if(C.iridescence)K.enable(8);if(C.alphaTest)K.enable(9);if(C.vertexColors)K.enable(10);if(C.vertexAlphas)K.enable(11);if(C.vertexUv1s)K.enable(12);if(C.vertexUv2s)K.enable(13);if(C.vertexUv3s)K.enable(14);if(C.vertexTangents)K.enable(15);if(C.anisotropy)K.enable(16);if(C.alphaHash)K.enable(17);if(C.batching)K.enable(18);if(C.dispersion)K.enable(19);if(C.retroreflection)K.enable(24);if(C.batchingColor)K.enable(20);if(C.gradientMap)K.enable(21);if(C.packedNormalMap)K.enable(22);if(C.vertexNormals)K.enable(23);if(M.push(K.mask),K.disableAll(),C.fog)K.enable(0);if(C.useFog)K.enable(1);if(C.flatShading)K.enable(2);if(C.logarithmicDepthBuffer)K.enable(3);if(C.reversedDepthBuffer)K.enable(4);if(C.skinning)K.enable(5);if(C.morphTargets)K.enable(6);if(C.morphNormals)K.enable(7);if(C.morphColors)K.enable(8);if(C.premultipliedAlpha)K.enable(9);if(C.shadowMapEnabled)K.enable(10);if(C.doubleSided)K.enable(11);if(C.flipSided)K.enable(12);if(C.useDepthPacking)K.enable(13);if(C.dithering)K.enable(14);if(C.transmission)K.enable(15);if(C.sheen)K.enable(16);if(C.opaque)K.enable(17);if(C.pointsUvs)K.enable(18);if(C.decodeVideoTexture)K.enable(19);if(C.decodeVideoTextureEmissive)K.enable(20);if(C.alphaToCoverage)K.enable(21);if(C.numLightProbeGrids>0)K.enable(22);if(C.hasPositionAttribute)K.enable(23);M.push(K.mask)}function A(M){let C=q[M.type],l;if(C){let y=h8[C];l=CK.clone(y.uniforms)}else l=M.uniforms;return l}function V(M,C){let l=E.get(C);if(l!==void 0)++l.usedTimes;else l=new BN(J,C,M,Z),U.push(l),E.set(C,l);return l}function I(M){if(--M.usedTimes===0){let C=U.indexOf(M);U[C]=U[U.length-1],U.pop(),E.delete(M.cacheKey),M.destroy()}}function P(M){Y.remove(M)}function _(){Y.dispose()}return{getParameters:k,getProgramCacheKey:F,getUniforms:A,acquireProgram:V,releaseProgram:I,releaseShaderCache:P,programs:U,dispose:_}}function zN(){let J=new WeakMap;function Q(K){return J.has(K)}function $(K){let Y=J.get(K);if(Y===void 0)Y={},J.set(K,Y);return Y}function W(K){J.delete(K)}function Z(K,Y,X){J.get(K)[Y]=X}function H(){J=new WeakMap}return{has:Q,get:$,remove:W,update:Z,dispose:H}}function PN(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.material.id!==Q.material.id)return J.material.id-Q.material.id;else if(J.materialVariant!==Q.materialVariant)return J.materialVariant-Q.materialVariant;else if(J.z!==Q.z)return J.z-Q.z;else return J.id-Q.id}function iK(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.z!==Q.z)return Q.z-J.z;else return J.id-Q.id}function oK(){let J=[],Q=0,$=[],W=[],Z=[];function H(){Q=0,$.length=0,W.length=0,Z.length=0}function K(G){let q=0;if(G.isInstancedMesh)q+=2;if(G.isSkinnedMesh)q+=1;return q}function Y(G,q,R,k,F,O){let z=J[Q];if(z===void 0)z={id:G.id,object:G,geometry:q,material:R,materialVariant:K(G),groupOrder:k,renderOrder:G.renderOrder,z:F,group:O},J[Q]=z;else z.id=G.id,z.object=G,z.geometry=q,z.material=R,z.materialVariant=K(G),z.groupOrder=k,z.renderOrder=G.renderOrder,z.z=F,z.group=O;return Q++,z}function X(G,q,R,k,F,O,z){if(z.reversedDepth===!0)F=-F;let A=Y(G,q,R,k,F,O);if(R.transmission>0)W.push(A);else if(R.transparent===!0)Z.push(A);else $.push(A)}function U(G,q,R,k,F,O){let z=Y(G,q,R,k,F,O);if(R.transmission>0)W.unshift(z);else if(R.transparent===!0)Z.unshift(z);else $.unshift(z)}function E(G,q){if($.length>1)$.sort(G||PN);if(W.length>1)W.sort(q||iK);if(Z.length>1)Z.sort(q||iK)}function N(){for(let G=Q,q=J.length;G<q;G++){let R=J[G];if(R.id===null)break;R.id=null,R.object=null,R.geometry=null,R.material=null,R.group=null}}return{opaque:$,transmissive:W,transparent:Z,init:H,push:X,unshift:U,finish:N,sort:E}}function _N(){let J=new WeakMap;function Q(W,Z){let H=J.get(W),K;if(H===void 0)K=new oK,J.set(W,[K]);else if(Z>=H.length)K=new oK,H.push(K);else K=H[Z];return K}function $(){J=new WeakMap}return{get:Q,dispose:$}}function AN(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"SunLight":case"DirectionalLight":$={direction:new h,color:new j0};break;case"SpotLight":$={position:new h,direction:new h,color:new j0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":$={position:new h,color:new j0,distance:0,decay:0};break;case"HemisphereLight":$={direction:new h,skyColor:new j0,groundColor:new j0};break;case"RectAreaLight":$={color:new j0,position:new h,halfWidth:new h,halfHeight:new h};break}return J[Q.id]=$,$}}}function TN(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"SunLight":case"DirectionalLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new y0};break;case"SpotLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new y0};break;case"PointLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new y0,shadowCameraNear:1,shadowCameraFar:1000};break}return J[Q.id]=$,$}}}var SN=0;function jN(J,Q){return(Q.castShadow?2:0)-(J.castShadow?2:0)+(Q.map?1:0)-(J.map?1:0)}function vN(J){let Q=new AN,$=TN(),W={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let U=0;U<9;U++)W.probe.push(new h);let Z=new h,H=new b0,K=new b0;function Y(U){let E=0,N=0,G=0;for(let b=0;b<9;b++)W.probe[b].set(0,0,0);let q=0,R=0,k=0,F=0,O=0,z=0,A=0,V=0,I=0,P=0,_=0,M=0,C=0,l=0;U.sort(jN);for(let b=0,e=U.length;b<e;b++){let S=U[b],u=S.color,Q0=S.intensity,d=S.distance,Y0=null;if(S.shadow&&S.shadow.map)if(S.shadow.map.texture.format===y6)Y0=S.shadow.map.texture;else Y0=S.shadow.map.depthTexture||S.shadow.map.texture;if(S.isAmbientLight)E+=u.r*Q0,N+=u.g*Q0,G+=u.b*Q0;else if(S.isLightProbe){for(let r=0;r<9;r++)W.probe[r].addScaledVector(S.sh.coefficients[r],Q0);l++}else if(S.isSunLight){let r=Q.get(S);if(r.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let $0=S.shadow,Z0=$.get(S);Z0.shadowIntensity=$0.intensity,Z0.shadowBias=$0.bias,Z0.shadowNormalBias=$0.normalBias,Z0.shadowRadius=$0.radius,Z0.shadowMapSize.copy($0.mapSize).multiply($0.getFrameExtents()),W.sunShadow[R]=Z0,W.sunShadowMap[R]=Y0;let C0=$0.getViewportCount();for(let T0=0;T0<C0;T0++)W.sunShadowMatrix[k+T0]=$0.getMatrix(T0),W.sunShadowCascade[k+T0]=$0._cascadeData[T0];k+=C0,R++}W.sun[q]=r,q++}else if(S.isDirectionalLight){let r=Q.get(S);if(r.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let $0=S.shadow,Z0=$.get(S);Z0.shadowIntensity=$0.intensity,Z0.shadowBias=$0.bias,Z0.shadowNormalBias=$0.normalBias,Z0.shadowRadius=$0.radius,Z0.shadowMapSize=$0.mapSize,W.directionalShadow[F]=Z0,W.directionalShadowMap[F]=Y0,W.directionalShadowMatrix[F]=S.shadow.matrix,I++}W.directional[F]=r,F++}else if(S.isSpotLight){let r=Q.get(S);r.position.setFromMatrixPosition(S.matrixWorld),r.color.copy(u).multiplyScalar(Q0),r.distance=d,r.coneCos=Math.cos(S.angle),r.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),r.decay=S.decay,W.spot[z]=r;let $0=S.shadow;if(S.map){if(W.spotLightMap[M]=S.map,M++,$0.updateMatrices(S),S.castShadow)C++}if(W.spotLightMatrix[z]=$0.matrix,S.castShadow){let Z0=$.get(S);Z0.shadowIntensity=$0.intensity,Z0.shadowBias=$0.bias,Z0.shadowNormalBias=$0.normalBias,Z0.shadowRadius=$0.radius,Z0.shadowMapSize=$0.mapSize,W.spotShadow[z]=Z0,W.spotShadowMap[z]=Y0,_++}z++}else if(S.isRectAreaLight){let r=Q.get(S);r.color.copy(u).multiplyScalar(Q0),r.halfWidth.set(S.width*0.5,0,0),r.halfHeight.set(0,S.height*0.5,0),W.rectArea[A]=r,A++}else if(S.isPointLight){let r=Q.get(S);if(r.color.copy(S.color).multiplyScalar(S.intensity),r.distance=S.distance,r.decay=S.decay,S.castShadow){let $0=S.shadow,Z0=$.get(S);Z0.shadowIntensity=$0.intensity,Z0.shadowBias=$0.bias,Z0.shadowNormalBias=$0.normalBias,Z0.shadowRadius=$0.radius,Z0.shadowMapSize=$0.mapSize,Z0.shadowCameraNear=$0.camera.near,Z0.shadowCameraFar=$0.camera.far,W.pointShadow[O]=Z0,W.pointShadowMap[O]=Y0,W.pointShadowMatrix[O]=S.shadow.matrix,P++}W.point[O]=r,O++}else if(S.isHemisphereLight){let r=Q.get(S);r.skyColor.copy(S.color).multiplyScalar(Q0),r.groundColor.copy(S.groundColor).multiplyScalar(Q0),W.hemi[V]=r,V++}}if(A>0)if(J.has("OES_texture_float_linear")===!0)W.rectAreaLTC1=L0.LTC_FLOAT_1,W.rectAreaLTC2=L0.LTC_FLOAT_2;else W.rectAreaLTC1=L0.LTC_HALF_1,W.rectAreaLTC2=L0.LTC_HALF_2;W.ambient[0]=E,W.ambient[1]=N,W.ambient[2]=G;let y=W.hash;if(y.sunLength!==q||y.directionalLength!==F||y.pointLength!==O||y.spotLength!==z||y.rectAreaLength!==A||y.hemiLength!==V||y.numSunShadows!==R||y.numDirectionalShadows!==I||y.numPointShadows!==P||y.numSpotShadows!==_||y.numSpotMaps!==M||y.numLightProbes!==l)W.sun.length=q,W.directional.length=F,W.spot.length=z,W.rectArea.length=A,W.point.length=O,W.hemi.length=V,W.sunShadow.length=R,W.sunShadowMap.length=R,W.sunShadowMatrix.length=k,W.sunShadowCascade.length=k,W.directionalShadow.length=I,W.directionalShadowMap.length=I,W.directionalShadowMatrix.length=I,W.pointShadow.length=P,W.pointShadowMap.length=P,W.pointShadowMatrix.length=P,W.spotShadow.length=_,W.spotShadowMap.length=_,W.spotLightMatrix.length=_+M-C,W.spotLightMap.length=M,W.numSpotLightShadowsWithMaps=C,W.numLightProbes=l,y.sunLength=q,y.directionalLength=F,y.pointLength=O,y.spotLength=z,y.rectAreaLength=A,y.hemiLength=V,y.numSunShadows=R,y.numDirectionalShadows=I,y.numPointShadows=P,y.numSpotShadows=_,y.numSpotMaps=M,y.numLightProbes=l,W.version=SN++}function X(U,E){let N=0,G=0,q=0,R=0,k=0,F=0,O=E.matrixWorldInverse;for(let z=0,A=U.length;z<A;z++){let V=U[z];if(V.isSunLight){let I=W.sun[N];I.direction.setFromMatrixPosition(V.matrixWorld),I.direction.transformDirection(O),N++}else if(V.isDirectionalLight){let I=W.directional[G];I.direction.setFromMatrixPosition(V.matrixWorld),Z.setFromMatrixPosition(V.target.matrixWorld),I.direction.sub(Z),I.direction.transformDirection(O),G++}else if(V.isSpotLight){let I=W.spot[R];I.position.setFromMatrixPosition(V.matrixWorld),I.position.applyMatrix4(O),I.direction.setFromMatrixPosition(V.matrixWorld),Z.setFromMatrixPosition(V.target.matrixWorld),I.direction.sub(Z),I.direction.transformDirection(O),R++}else if(V.isRectAreaLight){let I=W.rectArea[k];I.position.setFromMatrixPosition(V.matrixWorld),I.position.applyMatrix4(O),K.identity(),H.copy(V.matrixWorld),H.premultiply(O),K.extractRotation(H),I.halfWidth.set(V.width*0.5,0,0),I.halfHeight.set(0,V.height*0.5,0),I.halfWidth.applyMatrix4(K),I.halfHeight.applyMatrix4(K),k++}else if(V.isPointLight){let I=W.point[q];I.position.setFromMatrixPosition(V.matrixWorld),I.position.applyMatrix4(O),q++}else if(V.isHemisphereLight){let I=W.hemi[F];I.direction.setFromMatrixPosition(V.matrixWorld),I.direction.transformDirection(O),F++}}}return{setup:Y,setupView:X,state:W}}function aK(J){let Q=new vN(J),$=[],W=[],Z=[];function H(G){N.camera=G,$.length=0,W.length=0,Z.length=0}function K(G){$.push(G)}function Y(G){W.push(G)}function X(G){Z.push(G)}function U(){Q.setup($)}function E(G){Q.setupView($,G)}let N={lightsArray:$,shadowsArray:W,lightProbeGridArray:Z,camera:null,lights:Q,transmissionRenderTarget:{},textureUnits:0};return{init:H,state:N,setupLights:U,setupLightsView:E,pushLight:K,pushShadow:Y,pushLightProbeGrid:X}}function yN(J){let Q=new WeakMap;function $(Z,H=0){let K=Q.get(Z),Y;if(K===void 0)Y=new aK(J),Q.set(Z,[Y]);else if(H>=K.length)Y=new aK(J),K.push(Y);else Y=K[H];return Y}function W(){Q=new WeakMap}return{get:$,dispose:W}}var fN=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hN=`uniform sampler2D shadow_pass;
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
}`,bN=[new h(1,0,0),new h(-1,0,0),new h(0,1,0),new h(0,-1,0),new h(0,0,1),new h(0,0,-1)],xN=[new h(0,-1,0),new h(0,-1,0),new h(0,0,1),new h(0,0,-1),new h(0,-1,0),new h(0,-1,0)],rK=new b0,V7=new h,eW=new h;function gN(J,Q,$){let W=new q7,Z=new y0,H=new y0,K=new YJ,Y=new jW,X=new vW,U={},E=$.maxTextureSize,N={[A8]:lJ,[lJ]:A8,[AJ]:AJ},G=new rJ({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new y0},radius:{value:4}},vertexShader:fN,fragmentShader:hN}),q=G.clone();q.defines.HORIZONTAL_PASS=1;let R=new FJ;R.setAttribute("position",new _J(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let k=new o0(R,G),F=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=e9;let O=this.type;this.render=function(P,_,M){if(F.enabled===!1)return;if(F.autoUpdate===!1&&F.needsUpdate===!1)return;if(P.length===0)return;if(this.type===HQ)A0("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=e9;let C=J.getRenderTarget(),l=J.getActiveCubeFace(),y=J.getActiveMipmapLevel(),b=J.state;if(b.setBlending(T8),b.buffers.depth.getReversed()===!0)b.buffers.color.setClear(0,0,0,0);else b.buffers.color.setClear(1,1,1,1);b.buffers.depth.setTest(!0),b.setScissorTest(!1);let e=O!==this.type;if(e)_.traverse(function(S){if(S.material)if(Array.isArray(S.material))S.material.forEach((u)=>u.needsUpdate=!0);else S.material.needsUpdate=!0});for(let S=0,u=P.length;S<u;S++){let Q0=P[S],d=Q0.shadow;if(d===void 0){A0("WebGLShadowMap:",Q0,"has no shadow.");continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;Z.copy(d.mapSize);let Y0=d.getFrameExtents();if(Z.multiply(Y0),H.copy(d.mapSize),Z.x>E||Z.y>E){if(Z.x>E)H.x=Math.floor(E/Y0.x),Z.x=H.x*Y0.x,d.mapSize.x=H.x;if(Z.y>E)H.y=Math.floor(E/Y0.y),Z.y=H.y*Y0.y,d.mapSize.y=H.y}let r=J.state.buffers.depth.getReversed();if(d.camera._reversedDepth=r,d.map===null||e===!0){if(d.map!==null){if(d.map.depthTexture!==null)d.map.depthTexture.dispose(),d.map.depthTexture=null;d.map.dispose()}if(this.type===L9){if(Q0.isPointLight){A0("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}d.map=new W8(Z.x,Z.y,{format:y6,type:j8,minFilter:vJ,magFilter:vJ,generateMipmaps:!1}),d.map.texture.name=Q0.name+".shadowMap",d.map.depthTexture=new b6(Z.x,Z.y,a8),d.map.depthTexture.name=Q0.name+".shadowMapDepth",d.map.depthTexture.format=j6,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=B8,d.map.depthTexture.magFilter=B8}else{if(Q0.isPointLight)d.map=new WZ(Z.x),d.map.depthTexture=new AW(Z.x,q6);else d.map=new W8(Z.x,Z.y),d.map.depthTexture=new b6(Z.x,Z.y,q6);if(d.map.depthTexture.name=Q0.name+".shadowMap",d.map.depthTexture.format=j6,this.type===e9)d.map.depthTexture.compareFunction=r?MQ:LQ,d.map.depthTexture.minFilter=vJ,d.map.depthTexture.magFilter=vJ;else d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=B8,d.map.depthTexture.magFilter=B8}d.camera.updateProjectionMatrix()}if(d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==Z.x||d.map.height!==Z.y))d.map.setSize(Z.x,Z.y);let $0=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();if(Q0.isPointLight!==!0)d.updateMatrices(Q0,M);for(let Z0=0;Z0<$0;Z0++){let C0=d.getCamera(Z0);if(Q0.isPointLight){let{camera:T0,matrix:$J}=d,p0=Q0.distance||T0.far;if(p0!==T0.far)T0.far=p0,T0.updateProjectionMatrix();V7.setFromMatrixPosition(Q0.matrixWorld),T0.position.copy(V7),eW.copy(T0.position),eW.add(bN[Z0]),T0.up.copy(xN[Z0]),T0.lookAt(eW),T0.updateMatrixWorld(),$J.makeTranslation(-V7.x,-V7.y,-V7.z),rK.multiplyMatrices(T0.projectionMatrix,T0.matrixWorldInverse),d._frustum.setFromProjectionMatrix(rK,T0.coordinateSystem,T0.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)J.setRenderTarget(d.map,Z0),J.clear();else{if(Z0===0)J.setRenderTarget(d.map),J.clear();let T0=d.getViewport(Z0);K.set(H.x*T0.x,H.y*T0.y,H.x*T0.z,H.y*T0.w),b.viewport(K)}W=d.getFrustum(Z0),V(_,M,C0,Q0,this.type)}if(d.isPointLightShadow!==!0&&this.type===L9)z(d,M);d.needsUpdate=!1}O=this.type,F.needsUpdate=!1,J.setRenderTarget(C,l,y)};function z(P,_){let M=Q.update(k);if(G.defines.VSM_SAMPLES!==P.blurSamples)G.defines.VSM_SAMPLES=P.blurSamples,q.defines.VSM_SAMPLES=P.blurSamples,G.needsUpdate=!0,q.needsUpdate=!0;if(P.mapPass===null)P.mapPass=new W8(Z.x,Z.y,{format:y6,type:j8});else if(P.mapPass.width!==P.map.width||P.mapPass.height!==P.map.height)P.mapPass.setSize(P.map.width,P.map.height);G.uniforms.shadow_pass.value=P.map.depthTexture,G.uniforms.resolution.value.set(P.map.width,P.map.height),G.uniforms.radius.value=P.radius,J.setRenderTarget(P.mapPass),J.clear(),J.renderBufferDirect(_,null,M,G,k,null),q.uniforms.shadow_pass.value=P.mapPass.texture,q.uniforms.resolution.value.set(P.map.width,P.map.height),q.uniforms.radius.value=P.radius,J.setRenderTarget(P.map),J.clear(),J.renderBufferDirect(_,null,M,q,k,null)}function A(P,_,M,C){let l=null,y=M.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(y!==void 0)l=y;else if(l=M.isPointLight===!0?X:Y,J.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let b=l.uuid,e=_.uuid,S=U[b];if(S===void 0)S={},U[b]=S;let u=S[e];if(u===void 0)u=l.clone(),S[e]=u,_.addEventListener("dispose",I);l=u}if(l.visible=_.visible,l.wireframe=_.wireframe,C===L9)l.side=_.shadowSide!==null?_.shadowSide:_.side;else l.side=_.shadowSide!==null?_.shadowSide:N[_.side];if(l.alphaMap=_.alphaMap,l.alphaTest=_.alphaToCoverage===!0?0.5:_.alphaTest,l.map=_.map,l.clipShadows=_.clipShadows,l.clippingPlanes=_.clippingPlanes,l.clipIntersection=_.clipIntersection,l.displacementMap=_.displacementMap,l.displacementScale=_.displacementScale,l.displacementBias=_.displacementBias,l.wireframeLinewidth=_.wireframeLinewidth,l.linewidth=_.linewidth,M.isPointLight===!0&&l.isMeshDistanceMaterial===!0){let b=J.properties.get(l);b.light=M}return l}function V(P,_,M,C,l){if(P.visible===!1)return;if(P.layers.test(_.layers)&&(P.isMesh||P.isLine||P.isPoints)){if((P.castShadow||P.receiveShadow&&l===L9)&&(!P.frustumCulled||P.intersectsFrustum(W))){P.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,P.matrixWorld);let e=Q.update(P),S=P.material;if(Array.isArray(S)){let u=e.groups;for(let Q0=0,d=u.length;Q0<d;Q0++){let Y0=u[Q0],r=S[Y0.materialIndex];if(r&&r.visible){let $0=A(P,r,C,l);P.onBeforeShadow(J,P,_,M,e,$0,Y0),J.renderBufferDirect(M,null,e,$0,P,Y0),P.onAfterShadow(J,P,_,M,e,$0,Y0)}}}else if(S.visible){let u=A(P,S,C,l);P.onBeforeShadow(J,P,_,M,e,u,null),J.renderBufferDirect(M,null,e,u,P,null),P.onAfterShadow(J,P,_,M,e,u,null)}}}let b=P.children;for(let e=0,S=b.length;e<S;e++)V(b[e],_,M,C,l)}function I(P){P.target.removeEventListener("dispose",I);for(let M in U){let C=U[M],l=P.target.uuid;if(l in C)C[l].dispose(),delete C[l]}}}function pN(J,Q){function $(){let T=!1,H0=new YJ,i=null,X0=new YJ(0,0,0,0);return{setMask:function(R0){if(i!==R0&&!T)J.colorMask(R0,R0,R0,R0),i=R0},setLocked:function(R0){T=R0},setClear:function(R0,t,F0,g0,NJ){if(NJ===!0)R0*=g0,t*=g0,F0*=g0;if(H0.set(R0,t,F0,g0),X0.equals(H0)===!1)J.clearColor(R0,t,F0,g0),X0.copy(H0)},reset:function(){T=!1,i=null,X0.set(-1,0,0,0)}}}function W(){let T=!1,H0=!1,i=null,X0=null,R0=null;return{setReversed:function(t){if(H0!==t){let F0=Q.get("EXT_clip_control");if(t)F0.clipControlEXT(F0.LOWER_LEFT_EXT,F0.ZERO_TO_ONE_EXT);else F0.clipControlEXT(F0.LOWER_LEFT_EXT,F0.NEGATIVE_ONE_TO_ONE_EXT);H0=t;let g0=R0;R0=null,this.setClear(g0)}},getReversed:function(){return H0},setTest:function(t){if(t)U0(J.DEPTH_TEST);else S0(J.DEPTH_TEST)},setMask:function(t){if(i!==t&&!T)J.depthMask(t),i=t},setFunc:function(t){if(H0)t=VK[t];if(X0!==t){switch(t){case sH:J.depthFunc(J.NEVER);break;case iH:J.depthFunc(J.ALWAYS);break;case oH:J.depthFunc(J.LESS);break;case A$:J.depthFunc(J.LEQUAL);break;case aH:J.depthFunc(J.EQUAL);break;case rH:J.depthFunc(J.GEQUAL);break;case tH:J.depthFunc(J.GREATER);break;case eH:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}X0=t}},setLocked:function(t){T=t},setClear:function(t){if(R0!==t){if(R0=t,H0)t=1-t;J.clearDepth(t)}},reset:function(){T=!1,i=null,X0=null,R0=null,H0=!1}}}function Z(){let T=!1,H0=null,i=null,X0=null,R0=null,t=null,F0=null,g0=null,NJ=null;return{setTest:function(WJ){if(!T)if(WJ)U0(J.STENCIL_TEST);else S0(J.STENCIL_TEST)},setMask:function(WJ){if(H0!==WJ&&!T)J.stencilMask(WJ),H0=WJ},setFunc:function(WJ,w8,p8){if(i!==WJ||X0!==w8||R0!==p8)J.stencilFunc(WJ,w8,p8),i=WJ,X0=w8,R0=p8},setOp:function(WJ,w8,p8){if(t!==WJ||F0!==w8||g0!==p8)J.stencilOp(WJ,w8,p8),t=WJ,F0=w8,g0=p8},setLocked:function(WJ){T=WJ},setClear:function(WJ){if(NJ!==WJ)J.clearStencil(WJ),NJ=WJ},reset:function(){T=!1,H0=null,i=null,X0=null,R0=null,t=null,F0=null,g0=null,NJ=null}}}let H=new $,K=new W,Y=new Z,X=new WeakMap,U=new WeakMap,E={},N={},G={},q=new WeakMap,R=[],k=null,F=!1,O=null,z=null,A=null,V=null,I=null,P=null,_=null,M=new j0(0,0,0),C=0,l=!1,y=null,b=null,e=null,S=null,u=null,Q0=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),d=!1,Y0=0,r=J.getParameter(J.VERSION);if(r.indexOf("WebGL")!==-1)Y0=parseFloat(/^WebGL (\d)/.exec(r)[1]),d=Y0>=1;else if(r.indexOf("OpenGL ES")!==-1)Y0=parseFloat(/^OpenGL ES (\d)/.exec(r)[1]),d=Y0>=2;let $0=null,Z0={},C0=J.getParameter(J.SCISSOR_BOX),T0=J.getParameter(J.VIEWPORT),$J=new YJ().fromArray(C0),p0=new YJ().fromArray(T0);function s(T,H0,i,X0){let R0=new Uint8Array(4),t=J.createTexture();J.bindTexture(T,t),J.texParameteri(T,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(T,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let F0=0;F0<i;F0++)if(T===J.TEXTURE_3D||T===J.TEXTURE_2D_ARRAY)J.texImage3D(H0,0,J.RGBA,1,1,X0,0,J.RGBA,J.UNSIGNED_BYTE,R0);else J.texImage2D(H0+F0,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,R0);return t}let K0={};K0[J.TEXTURE_2D]=s(J.TEXTURE_2D,J.TEXTURE_2D,1),K0[J.TEXTURE_CUBE_MAP]=s(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),K0[J.TEXTURE_2D_ARRAY]=s(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),K0[J.TEXTURE_3D]=s(J.TEXTURE_3D,J.TEXTURE_3D,1,1),H.setClear(0,0,0,1),K.setClear(1),Y.setClear(0),U0(J.DEPTH_TEST),K.setFunc(A$),VJ(!1),JJ(w$),U0(J.CULL_FACE),r0(T8);function U0(T){if(E[T]!==!0)J.enable(T),E[T]=!0}function S0(T){if(E[T]!==!1)J.disable(T),E[T]=!1}function v0(T,H0){if(G[T]!==H0){if(J.bindFramebuffer(T,H0),G[T]=H0,T===J.DRAW_FRAMEBUFFER)G[J.FRAMEBUFFER]=H0;if(T===J.FRAMEBUFFER)G[J.DRAW_FRAMEBUFFER]=H0;return!0}return!1}function z0(T,H0){let i=R,X0=!1;if(T){if(i=q.get(H0),i===void 0)i=[],q.set(H0,i);let R0=T.textures;if(i.length!==R0.length||i[0]!==J.COLOR_ATTACHMENT0){for(let t=0,F0=R0.length;t<F0;t++)i[t]=J.COLOR_ATTACHMENT0+t;i.length=R0.length,X0=!0}}else if(i[0]!==J.BACK)i[0]=J.BACK,X0=!0;if(X0)J.drawBuffers(i)}function MJ(T){if(k!==T)return J.useProgram(T),k=T,!0;return!1}let h0={[M9]:J.FUNC_ADD,[_H]:J.FUNC_SUBTRACT,[AH]:J.FUNC_REVERSE_SUBTRACT};h0[TH]=J.MIN,h0[SH]=J.MAX;let d0={[jH]:J.ZERO,[vH]:J.ONE,[yH]:J.SRC_COLOR,[hH]:J.SRC_ALPHA,[mH]:J.SRC_ALPHA_SATURATE,[pH]:J.DST_COLOR,[xH]:J.DST_ALPHA,[fH]:J.ONE_MINUS_SRC_COLOR,[bH]:J.ONE_MINUS_SRC_ALPHA,[lH]:J.ONE_MINUS_DST_COLOR,[gH]:J.ONE_MINUS_DST_ALPHA,[dH]:J.CONSTANT_COLOR,[uH]:J.ONE_MINUS_CONSTANT_COLOR,[cH]:J.CONSTANT_ALPHA,[nH]:J.ONE_MINUS_CONSTANT_ALPHA};function r0(T,H0,i,X0,R0,t,F0,g0,NJ,WJ){if(T===T8){if(F===!0)S0(J.BLEND),F=!1;return}if(F===!1)U0(J.BLEND),F=!0;if(T!==PH){if(T!==O||WJ!==l){if(z!==M9||I!==M9)J.blendEquation(J.FUNC_ADD),z=M9,I=M9;if(WJ)switch(T){case J7:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case z$:J.blendFunc(J.ONE,J.ONE);break;case P$:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case _$:J.blendFuncSeparate(J.DST_COLOR,J.ONE_MINUS_SRC_ALPHA,J.ZERO,J.ONE);break;default:f0("WebGLState: Invalid blending: ",T);break}else switch(T){case J7:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case z$:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE,J.ONE,J.ONE);break;case P$:f0("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _$:f0("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:f0("WebGLState: Invalid blending: ",T);break}A=null,V=null,P=null,_=null,M.set(0,0,0),C=0,O=T,l=WJ}return}if(R0=R0||H0,t=t||i,F0=F0||X0,H0!==z||R0!==I)J.blendEquationSeparate(h0[H0],h0[R0]),z=H0,I=R0;if(i!==A||X0!==V||t!==P||F0!==_)J.blendFuncSeparate(d0[i],d0[X0],d0[t],d0[F0]),A=i,V=X0,P=t,_=F0;if(g0.equals(M)===!1||NJ!==C)J.blendColor(g0.r,g0.g,g0.b,NJ),M.copy(g0),C=NJ;O=T,l=!1}function u0(T,H0){T.side===AJ?S0(J.CULL_FACE):U0(J.CULL_FACE);let i=T.side===lJ;if(H0)i=!i;VJ(i),T.blending===J7&&T.transparent===!1?r0(T8):r0(T.blending,T.blendEquation,T.blendSrc,T.blendDst,T.blendEquationAlpha,T.blendSrcAlpha,T.blendDstAlpha,T.blendColor,T.blendAlpha,T.premultipliedAlpha),K.setFunc(T.depthFunc),K.setTest(T.depthTest),K.setMask(T.depthWrite),H.setMask(T.colorWrite);let X0=T.stencilWrite;if(Y.setTest(X0),X0)Y.setMask(T.stencilWriteMask),Y.setFunc(T.stencilFunc,T.stencilRef,T.stencilFuncMask),Y.setOp(T.stencilFail,T.stencilZFail,T.stencilZPass);IJ(T.polygonOffset,T.polygonOffsetFactor,T.polygonOffsetUnits),T.alphaToCoverage===!0?U0(J.SAMPLE_ALPHA_TO_COVERAGE):S0(J.SAMPLE_ALPHA_TO_COVERAGE)}function VJ(T){if(y!==T){if(T)J.frontFace(J.CW);else J.frontFace(J.CCW);y=T}}function JJ(T){if(T!==wH){if(U0(J.CULL_FACE),T!==b)if(T===w$)J.cullFace(J.BACK);else if(T===zH)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else S0(J.CULL_FACE);b=T}function yJ(T){if(T!==e){if(d)J.lineWidth(T);e=T}}function IJ(T,H0,i){if(T){if(U0(J.POLYGON_OFFSET_FILL),S!==H0||u!==i){if(S=H0,u=i,K.getReversed())H0=-H0;J.polygonOffset(H0,i)}}else S0(J.POLYGON_OFFSET_FILL)}function DJ(T){if(T)U0(J.SCISSOR_TEST);else S0(J.SCISSOR_TEST)}function v(T){if(T===void 0)T=J.TEXTURE0+Q0-1;if($0!==T)J.activeTexture(T),$0=T}function fJ(T,H0,i){if(i===void 0)if($0===null)i=J.TEXTURE0+Q0-1;else i=$0;let X0=Z0[i];if(X0===void 0)X0={type:void 0,texture:void 0},Z0[i]=X0;if(X0.type!==T||X0.texture!==H0){if($0!==i)J.activeTexture(i),$0=i;J.bindTexture(T,H0||K0[T]),X0.type=T,X0.texture=H0}}function QJ(){let T=Z0[$0];if(T!==void 0&&T.type!==void 0)J.bindTexture(T.type,null),T.type=void 0,T.texture=void 0}function UJ(){try{J.compressedTexImage2D(...arguments)}catch(T){f0("WebGLState:",T)}}function B(){try{J.compressedTexImage3D(...arguments)}catch(T){f0("WebGLState:",T)}}function L(){try{J.texSubImage2D(...arguments)}catch(T){f0("WebGLState:",T)}}function j(){try{J.texSubImage3D(...arguments)}catch(T){f0("WebGLState:",T)}}function m(){try{J.compressedTexSubImage2D(...arguments)}catch(T){f0("WebGLState:",T)}}function W0(){try{J.compressedTexSubImage3D(...arguments)}catch(T){f0("WebGLState:",T)}}function G0(){try{J.texStorage2D(...arguments)}catch(T){f0("WebGLState:",T)}}function O0(){try{J.texStorage3D(...arguments)}catch(T){f0("WebGLState:",T)}}function a(){try{J.texImage2D(...arguments)}catch(T){f0("WebGLState:",T)}}function w(){try{J.texImage3D(...arguments)}catch(T){f0("WebGLState:",T)}}function x(T){if(N[T]!==void 0)return N[T];else return J.getParameter(T)}function n(T,H0){if(N[T]!==H0)J.pixelStorei(T,H0),N[T]=H0}function o(T){if($J.equals(T)===!1)J.scissor(T.x,T.y,T.z,T.w),$J.copy(T)}function J0(T){if(p0.equals(T)===!1)J.viewport(T.x,T.y,T.z,T.w),p0.copy(T)}function E0(T,H0){let i=U.get(H0);if(i===void 0)i=new WeakMap,U.set(H0,i);let X0=i.get(T);if(X0===void 0)X0=J.getUniformBlockIndex(H0,T.name),i.set(T,X0)}function q0(T,H0){let X0=U.get(H0).get(T);if(X.get(H0)!==X0)J.uniformBlockBinding(H0,X0,T.__bindingPointIndex),X.set(H0,X0)}function V0(){J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),K.setReversed(!1),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null),J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),J.pixelStorei(J.PACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,!1),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,J.BROWSER_DEFAULT_WEBGL),J.pixelStorei(J.PACK_ROW_LENGTH,0),J.pixelStorei(J.PACK_SKIP_PIXELS,0),J.pixelStorei(J.PACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_ROW_LENGTH,0),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,0),J.pixelStorei(J.UNPACK_SKIP_PIXELS,0),J.pixelStorei(J.UNPACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_SKIP_IMAGES,0),E={},N={},$0=null,Z0={},G={},q=new WeakMap,R=[],k=null,F=!1,O=null,z=null,A=null,V=null,I=null,P=null,_=null,M=new j0(0,0,0),C=0,l=!1,y=null,b=null,e=null,S=null,u=null,$J.set(0,0,J.canvas.width,J.canvas.height),p0.set(0,0,J.canvas.width,J.canvas.height),H.reset(),K.reset(),Y.reset()}return{buffers:{color:H,depth:K,stencil:Y},enable:U0,disable:S0,bindFramebuffer:v0,drawBuffers:z0,useProgram:MJ,setBlending:r0,setMaterial:u0,setFlipSided:VJ,setCullFace:JJ,setLineWidth:yJ,setPolygonOffset:IJ,setScissorTest:DJ,activeTexture:v,bindTexture:fJ,unbindTexture:QJ,compressedTexImage2D:UJ,compressedTexImage3D:B,texImage2D:a,texImage3D:w,pixelStorei:n,getParameter:x,updateUBOMapping:E0,uniformBlockBinding:q0,texStorage2D:G0,texStorage3D:O0,texSubImage2D:L,texSubImage3D:j,compressedTexSubImage2D:m,compressedTexSubImage3D:W0,scissor:o,viewport:J0,reset:V0}}function lN(J,Q,$,W,Z,H,K){let Y=Q.has("WEBGL_multisampled_render_to_texture")?Q.get("WEBGL_multisampled_render_to_texture"):null,X=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),U=new y0,E=new WeakMap,N=new Set,G,q=new WeakMap,R=!1;try{R=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(B){}function k(B,L){return R?new OffscreenCanvas(B,L):F9("canvas")}function F(B,L,j){let m=1,W0=UJ(B);if(W0.width>j||W0.height>j)m=j/Math.max(W0.width,W0.height);if(m<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){let G0=Math.floor(m*W0.width),O0=Math.floor(m*W0.height);if(G===void 0)G=k(G0,O0);let a=L?k(G0,O0):G;return a.width=G0,a.height=O0,a.getContext("2d").drawImage(B,0,0,G0,O0),A0("WebGLRenderer: Texture has been resized from ("+W0.width+"x"+W0.height+") to ("+G0+"x"+O0+")."),a}else{if("data"in B)A0("WebGLRenderer: Image in DataTexture is too big ("+W0.width+"x"+W0.height+").");return B}return B}function O(B){return B.generateMipmaps}function z(B){J.generateMipmap(B)}function A(B){if(B.isWebGLCubeRenderTarget)return J.TEXTURE_CUBE_MAP;if(B.isWebGL3DRenderTarget)return J.TEXTURE_3D;if(B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture)return J.TEXTURE_2D_ARRAY;return J.TEXTURE_2D}function V(B,L,j,m,W0,G0=!1){if(B!==null){if(J[B]!==void 0)return J[B];A0("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let O0;if(m){if(O0=Q.get("EXT_texture_norm16"),!O0)A0("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let a=L;if(L===J.RED){if(j===J.FLOAT)a=J.R32F;if(j===J.HALF_FLOAT)a=J.R16F;if(j===J.UNSIGNED_BYTE)a=J.R8;if(j===J.UNSIGNED_SHORT&&O0)a=O0.R16_EXT;if(j===J.SHORT&&O0)a=O0.R16_SNORM_EXT}if(L===J.RED_INTEGER){if(j===J.UNSIGNED_BYTE)a=J.R8UI;if(j===J.UNSIGNED_SHORT)a=J.R16UI;if(j===J.UNSIGNED_INT)a=J.R32UI;if(j===J.BYTE)a=J.R8I;if(j===J.SHORT)a=J.R16I;if(j===J.INT)a=J.R32I}if(L===J.RG){if(j===J.FLOAT)a=J.RG32F;if(j===J.HALF_FLOAT)a=J.RG16F;if(j===J.UNSIGNED_BYTE)a=J.RG8;if(j===J.UNSIGNED_SHORT&&O0)a=O0.RG16_EXT;if(j===J.SHORT&&O0)a=O0.RG16_SNORM_EXT}if(L===J.RG_INTEGER){if(j===J.UNSIGNED_BYTE)a=J.RG8UI;if(j===J.UNSIGNED_SHORT)a=J.RG16UI;if(j===J.UNSIGNED_INT)a=J.RG32UI;if(j===J.BYTE)a=J.RG8I;if(j===J.SHORT)a=J.RG16I;if(j===J.INT)a=J.RG32I}if(L===J.RGB_INTEGER){if(j===J.UNSIGNED_BYTE)a=J.RGB8UI;if(j===J.UNSIGNED_SHORT)a=J.RGB16UI;if(j===J.UNSIGNED_INT)a=J.RGB32UI;if(j===J.BYTE)a=J.RGB8I;if(j===J.SHORT)a=J.RGB16I;if(j===J.INT)a=J.RGB32I}if(L===J.RGBA_INTEGER){if(j===J.UNSIGNED_BYTE)a=J.RGBA8UI;if(j===J.UNSIGNED_SHORT)a=J.RGBA16UI;if(j===J.UNSIGNED_INT)a=J.RGBA32UI;if(j===J.BYTE)a=J.RGBA8I;if(j===J.SHORT)a=J.RGBA16I;if(j===J.INT)a=J.RGBA32I}if(L===J.RGB){if(j===J.UNSIGNED_SHORT&&O0)a=O0.RGB16_EXT;if(j===J.SHORT&&O0)a=O0.RGB16_SNORM_EXT;if(j===J.UNSIGNED_INT_5_9_9_9_REV)a=J.RGB9_E5;if(j===J.UNSIGNED_INT_10F_11F_11F_REV)a=J.R11F_G11F_B10F}if(L===J.RGBA){let w=G0?kW:c0.getTransfer(W0);if(j===J.FLOAT)a=J.RGBA32F;if(j===J.HALF_FLOAT)a=J.RGBA16F;if(j===J.UNSIGNED_BYTE)a=w===GJ?J.SRGB8_ALPHA8:J.RGBA8;if(j===J.UNSIGNED_SHORT&&O0)a=O0.RGBA16_EXT;if(j===J.SHORT&&O0)a=O0.RGBA16_SNORM_EXT;if(j===J.UNSIGNED_SHORT_4_4_4_4)a=J.RGBA4;if(j===J.UNSIGNED_SHORT_5_5_5_1)a=J.RGB5_A1}if(a===J.R16F||a===J.R32F||a===J.RG16F||a===J.RG32F||a===J.RGBA16F||a===J.RGBA32F)Q.get("EXT_color_buffer_float");return a}function I(B,L){let j;if(B){if(L===null||L===q6||L===B9)j=J.DEPTH24_STENCIL8;else if(L===a8)j=J.DEPTH32F_STENCIL8;else if(L===W7)j=J.DEPTH24_STENCIL8,A0("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(L===null||L===q6||L===B9)j=J.DEPTH_COMPONENT24;else if(L===a8)j=J.DEPTH_COMPONENT32F;else if(L===W7)j=J.DEPTH_COMPONENT16;return j}function P(B,L){if(O(B)===!0||B.isFramebufferTexture&&B.minFilter!==B8&&B.minFilter!==vJ)return Math.log2(Math.max(L.width,L.height))+1;else if(B.mipmaps!==void 0&&B.mipmaps.length>0)return B.mipmaps.length;else if(B.isCompressedTexture&&Array.isArray(B.image))return L.mipmaps.length;else return 1}function _(B){let L=B.target;if(L.removeEventListener("dispose",_),C(L),L.isVideoTexture)E.delete(L);if(L.isHTMLTexture)N.delete(L)}function M(B){let L=B.target;L.removeEventListener("dispose",M),y(L)}function C(B){let L=W.get(B);if(L.__webglInit===void 0)return;let j=B.source,m=q.get(j);if(m){let W0=m[L.__cacheKey];if(W0.usedTimes--,W0.usedTimes===0)l(B);if(Object.keys(m).length===0)q.delete(j)}W.remove(B)}function l(B){let L=W.get(B);J.deleteTexture(L.__webglTexture);let j=B.source,m=q.get(j);delete m[L.__cacheKey],K.memory.textures--}function y(B){let L=W.get(B);if(B.depthTexture)B.depthTexture.dispose(),W.remove(B.depthTexture);if(B.isWebGLCubeRenderTarget)for(let m=0;m<6;m++){if(Array.isArray(L.__webglFramebuffer[m]))for(let W0=0;W0<L.__webglFramebuffer[m].length;W0++)J.deleteFramebuffer(L.__webglFramebuffer[m][W0]);else J.deleteFramebuffer(L.__webglFramebuffer[m]);if(L.__webglDepthbuffer)J.deleteRenderbuffer(L.__webglDepthbuffer[m])}else{if(Array.isArray(L.__webglFramebuffer))for(let m=0;m<L.__webglFramebuffer.length;m++)J.deleteFramebuffer(L.__webglFramebuffer[m]);else J.deleteFramebuffer(L.__webglFramebuffer);if(L.__webglDepthbuffer)J.deleteRenderbuffer(L.__webglDepthbuffer);if(L.__webglMultisampledFramebuffer)J.deleteFramebuffer(L.__webglMultisampledFramebuffer);if(L.__webglColorRenderbuffer){for(let m=0;m<L.__webglColorRenderbuffer.length;m++)if(L.__webglColorRenderbuffer[m])J.deleteRenderbuffer(L.__webglColorRenderbuffer[m])}if(L.__webglDepthRenderbuffer)J.deleteRenderbuffer(L.__webglDepthRenderbuffer)}let j=B.textures;for(let m=0,W0=j.length;m<W0;m++){let G0=W.get(j[m]);if(G0.__webglTexture)J.deleteTexture(G0.__webglTexture),K.memory.textures--;W.remove(j[m])}W.remove(B)}let b=0;function e(){b=0}function S(){return b}function u(B){b=B}function Q0(){let B=b;if(B>=Z.maxTextures)A0("WebGLTextures: Trying to use "+(B+1)+" texture units while this GPU supports only "+Z.maxTextures);return b+=1,B}function d(B){let L=[];return L.push(B.wrapS),L.push(B.wrapT),L.push(B.wrapR||0),L.push(B.magFilter),L.push(B.minFilter),L.push(B.anisotropy),L.push(B.internalFormat),L.push(B.format),L.push(B.type),L.push(B.generateMipmaps),L.push(B.premultiplyAlpha),L.push(B.flipY),L.push(B.unpackAlignment),L.push(B.colorSpace),L.join()}function Y0(B,L){let j=W.get(B);if(B.isVideoTexture)fJ(B);if(B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&j.__version!==B.version){let m=B.image;if(m===null)A0("WebGLRenderer: Texture marked for update but no image data found.");else if(m.complete===!1)A0("WebGLRenderer: Texture marked for update but image is incomplete");else{S0(j,B,L);return}}else if(B.isExternalTexture)j.__webglTexture=B.sourceTexture?B.sourceTexture:null;$.bindTexture(J.TEXTURE_2D,j.__webglTexture,J.TEXTURE0+L)}function r(B,L){let j=W.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&j.__version!==B.version){S0(j,B,L);return}else if(B.isExternalTexture)j.__webglTexture=B.sourceTexture?B.sourceTexture:null;$.bindTexture(J.TEXTURE_2D_ARRAY,j.__webglTexture,J.TEXTURE0+L)}function $0(B,L){let j=W.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&j.__version!==B.version){S0(j,B,L);return}$.bindTexture(J.TEXTURE_3D,j.__webglTexture,J.TEXTURE0+L)}function Z0(B,L){let j=W.get(B);if(B.isCubeDepthTexture!==!0&&B.version>0&&j.__version!==B.version){v0(j,B,L);return}$.bindTexture(J.TEXTURE_CUBE_MAP,j.__webglTexture,J.TEXTURE0+L)}let C0={[o8]:J.REPEAT,[V9]:J.CLAMP_TO_EDGE,[XQ]:J.MIRRORED_REPEAT},T0={[B8]:J.NEAREST,[UQ]:J.NEAREST_MIPMAP_NEAREST,[S6]:J.NEAREST_MIPMAP_LINEAR,[vJ]:J.LINEAR,[k9]:J.LINEAR_MIPMAP_NEAREST,[S8]:J.LINEAR_MIPMAP_LINEAR},$J={[GK]:J.NEVER,[RK]:J.ALWAYS,[NK]:J.LESS,[LQ]:J.LEQUAL,[qK]:J.EQUAL,[MQ]:J.GEQUAL,[FK]:J.GREATER,[OK]:J.NOTEQUAL};function p0(B,L){if(L.type===a8&&Q.has("OES_texture_float_linear")===!1&&(L.magFilter===vJ||L.magFilter===k9||L.magFilter===S6||L.magFilter===S8||L.minFilter===vJ||L.minFilter===k9||L.minFilter===S6||L.minFilter===S8))A0("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(J.texParameteri(B,J.TEXTURE_WRAP_S,C0[L.wrapS]),J.texParameteri(B,J.TEXTURE_WRAP_T,C0[L.wrapT]),B===J.TEXTURE_3D||B===J.TEXTURE_2D_ARRAY)J.texParameteri(B,J.TEXTURE_WRAP_R,C0[L.wrapR]);if(J.texParameteri(B,J.TEXTURE_MAG_FILTER,T0[L.magFilter]),J.texParameteri(B,J.TEXTURE_MIN_FILTER,T0[L.minFilter]),L.compareFunction)J.texParameteri(B,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(B,J.TEXTURE_COMPARE_FUNC,$J[L.compareFunction]);if(Q.has("EXT_texture_filter_anisotropic")===!0){if(L.magFilter===B8)return;if(L.minFilter!==S6&&L.minFilter!==S8)return;if(L.type===a8&&Q.has("OES_texture_float_linear")===!1)return;if(L.anisotropy>1||W.get(L).__currentAnisotropy){let j=Q.get("EXT_texture_filter_anisotropic");J.texParameterf(B,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(L.anisotropy,Z.getMaxAnisotropy())),W.get(L).__currentAnisotropy=L.anisotropy}}}function s(B,L){let j=!1;if(B.__webglInit===void 0)B.__webglInit=!0,L.addEventListener("dispose",_);let m=L.source,W0=q.get(m);if(W0===void 0)W0={},q.set(m,W0);let G0=d(L);if(G0!==B.__cacheKey){if(W0[G0]===void 0)W0[G0]={texture:J.createTexture(),usedTimes:0},K.memory.textures++,j=!0;W0[G0].usedTimes++;let O0=W0[B.__cacheKey];if(O0!==void 0){if(W0[B.__cacheKey].usedTimes--,O0.usedTimes===0)l(L)}B.__cacheKey=G0,B.__webglTexture=W0[G0].texture}return j}function K0(B,L,j){return Math.floor(Math.floor(B/j)/L)}function U0(B,L,j,m){let G0=B.updateRanges;if(G0.length===0)$.texSubImage2D(J.TEXTURE_2D,0,0,0,L.width,L.height,j,m,L.data);else{G0.sort((n,o)=>n.start-o.start);let O0=0;for(let n=1;n<G0.length;n++){let o=G0[O0],J0=G0[n],E0=o.start+o.count,q0=K0(J0.start,L.width,4),V0=K0(o.start,L.width,4);if(J0.start<=E0+1&&q0===V0&&K0(J0.start+J0.count-1,L.width,4)===q0)o.count=Math.max(o.count,J0.start+J0.count-o.start);else++O0,G0[O0]=J0}G0.length=O0+1;let a=$.getParameter(J.UNPACK_ROW_LENGTH),w=$.getParameter(J.UNPACK_SKIP_PIXELS),x=$.getParameter(J.UNPACK_SKIP_ROWS);$.pixelStorei(J.UNPACK_ROW_LENGTH,L.width);for(let n=0,o=G0.length;n<o;n++){let J0=G0[n],E0=Math.floor(J0.start/4),q0=Math.ceil(J0.count/4),V0=E0%L.width,T=Math.floor(E0/L.width),H0=q0,i=1;$.pixelStorei(J.UNPACK_SKIP_PIXELS,V0),$.pixelStorei(J.UNPACK_SKIP_ROWS,T),$.texSubImage2D(J.TEXTURE_2D,0,V0,T,H0,1,j,m,L.data)}B.clearUpdateRanges(),$.pixelStorei(J.UNPACK_ROW_LENGTH,a),$.pixelStorei(J.UNPACK_SKIP_PIXELS,w),$.pixelStorei(J.UNPACK_SKIP_ROWS,x)}}function S0(B,L,j){let m=J.TEXTURE_2D;if(L.isDataArrayTexture||L.isCompressedArrayTexture)m=J.TEXTURE_2D_ARRAY;if(L.isData3DTexture)m=J.TEXTURE_3D;let W0=s(B,L),G0=L.source;$.bindTexture(m,B.__webglTexture,J.TEXTURE0+j);let O0=W.get(G0);if(G0.version!==O0.__version||W0===!0){if($.activeTexture(J.TEXTURE0+j),(typeof ImageBitmap<"u"&&L.image instanceof ImageBitmap)===!1){let i=c0.getPrimaries(c0.workingColorSpace),X0=L.colorSpace===f6?null:c0.getPrimaries(L.colorSpace),R0=L.colorSpace===f6||i===X0?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,L.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,R0)}$.pixelStorei(J.UNPACK_ALIGNMENT,L.unpackAlignment);let w=F(L.image,!1,Z.maxTextureSize);w=QJ(L,w);let x=H.convert(L.format,L.colorSpace),n=H.convert(L.type),o=V(L.internalFormat,x,n,L.normalized,L.colorSpace,L.isVideoTexture);p0(m,L);let J0,E0=L.mipmaps,q0=L.isVideoTexture!==!0,V0=O0.__version===void 0||W0===!0,T=G0.dataReady,H0=P(L,w);if(L.isDepthTexture){if(o=I(L.format===v6,L.type),V0)if(q0)$.texStorage2D(J.TEXTURE_2D,1,o,w.width,w.height);else $.texImage2D(J.TEXTURE_2D,0,o,w.width,w.height,0,x,n,null)}else if(L.isDataTexture)if(E0.length>0){if(q0&&V0)$.texStorage2D(J.TEXTURE_2D,H0,o,E0[0].width,E0[0].height);for(let i=0,X0=E0.length;i<X0;i++)if(J0=E0[i],q0){if(T)$.texSubImage2D(J.TEXTURE_2D,i,0,0,J0.width,J0.height,x,n,J0.data)}else $.texImage2D(J.TEXTURE_2D,i,o,J0.width,J0.height,0,x,n,J0.data);L.generateMipmaps=!1}else if(q0){if(V0)$.texStorage2D(J.TEXTURE_2D,H0,o,w.width,w.height);if(T)U0(L,w,x,n)}else $.texImage2D(J.TEXTURE_2D,0,o,w.width,w.height,0,x,n,w.data);else if(L.isCompressedTexture)if(L.isCompressedArrayTexture){if(q0&&V0)$.texStorage3D(J.TEXTURE_2D_ARRAY,H0,o,E0[0].width,E0[0].height,w.depth);for(let i=0,X0=E0.length;i<X0;i++)if(J0=E0[i],L.format!==v8)if(x!==null)if(q0){if(T)if(L.layerUpdates.size>0){let R0=sW(J0.width,J0.height,L.format,L.type);for(let t of L.layerUpdates){let F0=J0.data.subarray(t*R0/J0.data.BYTES_PER_ELEMENT,(t+1)*R0/J0.data.BYTES_PER_ELEMENT);$.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,i,0,0,t,J0.width,J0.height,1,x,F0)}}else $.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,i,0,0,0,J0.width,J0.height,w.depth,x,J0.data)}else $.compressedTexImage3D(J.TEXTURE_2D_ARRAY,i,o,J0.width,J0.height,w.depth,0,J0.data,0,0);else A0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(q0){if(T)$.texSubImage3D(J.TEXTURE_2D_ARRAY,i,0,0,0,J0.width,J0.height,w.depth,x,n,J0.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,i,o,J0.width,J0.height,w.depth,0,x,n,J0.data);if(L.layerUpdates.size>0)L.clearLayerUpdates()}else{if(q0&&V0)$.texStorage2D(J.TEXTURE_2D,H0,o,E0[0].width,E0[0].height);for(let i=0,X0=E0.length;i<X0;i++)if(J0=E0[i],L.format!==v8)if(x!==null)if(q0){if(T)$.compressedTexSubImage2D(J.TEXTURE_2D,i,0,0,J0.width,J0.height,x,J0.data)}else $.compressedTexImage2D(J.TEXTURE_2D,i,o,J0.width,J0.height,0,J0.data);else A0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(q0){if(T)$.texSubImage2D(J.TEXTURE_2D,i,0,0,J0.width,J0.height,x,n,J0.data)}else $.texImage2D(J.TEXTURE_2D,i,o,J0.width,J0.height,0,x,n,J0.data)}else if(L.isDataArrayTexture)if(q0){if(V0)$.texStorage3D(J.TEXTURE_2D_ARRAY,H0,o,w.width,w.height,w.depth);if(T)if(L.layerUpdates.size>0){let i=sW(w.width,w.height,L.format,L.type);for(let X0 of L.layerUpdates){let R0=w.data.subarray(X0*i/w.data.BYTES_PER_ELEMENT,(X0+1)*i/w.data.BYTES_PER_ELEMENT);$.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,X0,w.width,w.height,1,x,n,R0)}L.clearLayerUpdates()}else $.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,w.width,w.height,w.depth,x,n,w.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,0,o,w.width,w.height,w.depth,0,x,n,w.data);else if(L.isData3DTexture)if(q0){if(V0)$.texStorage3D(J.TEXTURE_3D,H0,o,w.width,w.height,w.depth);if(T)$.texSubImage3D(J.TEXTURE_3D,0,0,0,0,w.width,w.height,w.depth,x,n,w.data)}else $.texImage3D(J.TEXTURE_3D,0,o,w.width,w.height,w.depth,0,x,n,w.data);else if(L.isFramebufferTexture){if(V0)if(q0)$.texStorage2D(J.TEXTURE_2D,H0,o,w.width,w.height);else{let{width:i,height:X0}=w;for(let R0=0;R0<H0;R0++)$.texImage2D(J.TEXTURE_2D,R0,o,i,X0,0,x,n,null),i>>=1,X0>>=1}}else if(L.isHTMLTexture){if("texElementImage2D"in J){let i=J.canvas;if(!i.hasAttribute("layoutsubtree"))i.setAttribute("layoutsubtree","true");if(w.parentNode!==i){i.appendChild(w),N.add(L),i.onpaint=(X0)=>{let R0=X0.changedElements;for(let t of N)if(R0.includes(t.image))t.needsUpdate=!0},i.requestPaint();return}if(J.texElementImage2D.length===3)J.texElementImage2D(J.TEXTURE_2D,J.RGBA8,w);else{let{RGBA:R0,RGBA:t,UNSIGNED_BYTE:F0}=J;J.texElementImage2D(J.TEXTURE_2D,0,R0,t,F0,w)}J.texParameteri(J.TEXTURE_2D,J.TEXTURE_MIN_FILTER,J.LINEAR),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_S,J.CLAMP_TO_EDGE),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_T,J.CLAMP_TO_EDGE)}}else if(E0.length>0){if(q0&&V0){let i=UJ(E0[0]);$.texStorage2D(J.TEXTURE_2D,H0,o,i.width,i.height)}for(let i=0,X0=E0.length;i<X0;i++)if(J0=E0[i],q0){if(T)$.texSubImage2D(J.TEXTURE_2D,i,0,0,x,n,J0)}else $.texImage2D(J.TEXTURE_2D,i,o,x,n,J0);L.generateMipmaps=!1}else if(q0){if(V0){let i=UJ(w);$.texStorage2D(J.TEXTURE_2D,H0,o,i.width,i.height)}if(T)$.texSubImage2D(J.TEXTURE_2D,0,0,0,x,n,w)}else $.texImage2D(J.TEXTURE_2D,0,o,x,n,w);if(O(L))z(m);if(O0.__version=G0.version,L.onUpdate)L.onUpdate(L)}B.__version=L.version}function v0(B,L,j){if(L.image.length!==6)return;let m=s(B,L),W0=L.source;$.bindTexture(J.TEXTURE_CUBE_MAP,B.__webglTexture,J.TEXTURE0+j);let G0=W.get(W0);if(W0.version!==G0.__version||m===!0){$.activeTexture(J.TEXTURE0+j);let O0=c0.getPrimaries(c0.workingColorSpace),a=L.colorSpace===f6?null:c0.getPrimaries(L.colorSpace),w=L.colorSpace===f6||O0===a?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,L.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),$.pixelStorei(J.UNPACK_ALIGNMENT,L.unpackAlignment),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,w);let x=L.isCompressedTexture||L.image[0].isCompressedTexture,n=L.image[0]&&L.image[0].isDataTexture,o=[];for(let t=0;t<6;t++){if(!x&&!n)o[t]=F(L.image[t],!0,Z.maxCubemapSize);else o[t]=n?L.image[t].image:L.image[t];o[t]=QJ(L,o[t])}let J0=o[0],E0=H.convert(L.format,L.colorSpace),q0=H.convert(L.type),V0=V(L.internalFormat,E0,q0,L.normalized,L.colorSpace),T=L.isVideoTexture!==!0,H0=G0.__version===void 0||m===!0,i=W0.dataReady,X0=P(L,J0);p0(J.TEXTURE_CUBE_MAP,L);let R0;if(x){if(T&&H0)$.texStorage2D(J.TEXTURE_CUBE_MAP,X0,V0,J0.width,J0.height);for(let t=0;t<6;t++){R0=o[t].mipmaps;for(let F0=0;F0<R0.length;F0++){let g0=R0[F0];if(L.format!==v8)if(E0!==null)if(T){if(i)$.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,F0,0,0,g0.width,g0.height,E0,g0.data)}else $.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,F0,V0,g0.width,g0.height,0,g0.data);else A0("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(T){if(i)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,F0,0,0,g0.width,g0.height,E0,q0,g0.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,F0,V0,g0.width,g0.height,0,E0,q0,g0.data)}}}else{if(R0=L.mipmaps,T&&H0){if(R0.length>0)X0++;let t=UJ(o[0]);$.texStorage2D(J.TEXTURE_CUBE_MAP,X0,V0,t.width,t.height)}for(let t=0;t<6;t++)if(n){if(T){if(i)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,o[t].width,o[t].height,E0,q0,o[t].data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,V0,o[t].width,o[t].height,0,E0,q0,o[t].data);for(let F0=0;F0<R0.length;F0++){let NJ=R0[F0].image[t].image;if(T){if(i)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,F0+1,0,0,NJ.width,NJ.height,E0,q0,NJ.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,F0+1,V0,NJ.width,NJ.height,0,E0,q0,NJ.data)}}else{if(T){if(i)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,E0,q0,o[t])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,V0,E0,q0,o[t]);for(let F0=0;F0<R0.length;F0++){let g0=R0[F0];if(T){if(i)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,F0+1,0,0,E0,q0,g0.image[t])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,F0+1,V0,E0,q0,g0.image[t])}}}if(O(L))z(J.TEXTURE_CUBE_MAP);if(G0.__version=W0.version,L.onUpdate)L.onUpdate(L)}B.__version=L.version}function z0(B,L,j,m,W0,G0){let O0=H.convert(j.format,j.colorSpace),a=H.convert(j.type),w=V(j.internalFormat,O0,a,j.normalized,j.colorSpace),x=W.get(L),n=W.get(j);if(n.__renderTarget=L,!x.__hasExternalTextures){let o=Math.max(1,L.width>>G0),J0=Math.max(1,L.height>>G0);if(W0===J.TEXTURE_3D||W0===J.TEXTURE_2D_ARRAY)$.texImage3D(W0,G0,w,o,J0,L.depth,0,O0,a,null);else $.texImage2D(W0,G0,w,o,J0,0,O0,a,null)}if($.bindFramebuffer(J.FRAMEBUFFER,B),v(L))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,m,W0,n.__webglTexture,0,DJ(L));else if(W0===J.TEXTURE_2D||W0>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&W0<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,m,W0,n.__webglTexture,G0);$.bindFramebuffer(J.FRAMEBUFFER,null)}function MJ(B,L,j){if(J.bindRenderbuffer(J.RENDERBUFFER,B),L.depthBuffer){let m=L.depthTexture,W0=m&&m.isDepthTexture?m.type:null,G0=I(L.stencilBuffer,W0),O0=L.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(v(L))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,DJ(L),G0,L.width,L.height);else if(j)J.renderbufferStorageMultisample(J.RENDERBUFFER,DJ(L),G0,L.width,L.height);else J.renderbufferStorage(J.RENDERBUFFER,G0,L.width,L.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,O0,J.RENDERBUFFER,B)}else{let m=L.textures;for(let W0=0;W0<m.length;W0++){let G0=m[W0],O0=H.convert(G0.format,G0.colorSpace),a=H.convert(G0.type),w=V(G0.internalFormat,O0,a,G0.normalized,G0.colorSpace);if(v(L))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,DJ(L),w,L.width,L.height);else if(j)J.renderbufferStorageMultisample(J.RENDERBUFFER,DJ(L),w,L.width,L.height);else J.renderbufferStorage(J.RENDERBUFFER,w,L.width,L.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function h0(B,L,j){let m=L.isWebGLCubeRenderTarget===!0;if($.bindFramebuffer(J.FRAMEBUFFER,B),!(L.depthTexture&&L.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let W0=W.get(L.depthTexture);if(W0.__renderTarget=L,!W0.__webglTexture||L.depthTexture.image.width!==L.width||L.depthTexture.image.height!==L.height)L.depthTexture.image.width=L.width,L.depthTexture.image.height=L.height,L.depthTexture.needsUpdate=!0;if(m){if(W0.__webglInit===void 0)W0.__webglInit=!0,L.depthTexture.addEventListener("dispose",_);if(W0.__webglTexture===void 0){W0.__webglTexture=J.createTexture(),$.bindTexture(J.TEXTURE_CUBE_MAP,W0.__webglTexture),p0(J.TEXTURE_CUBE_MAP,L.depthTexture);let x=H.convert(L.depthTexture.format),n=H.convert(L.depthTexture.type),o;if(L.depthTexture.format===j6)o=J.DEPTH_COMPONENT24;else if(L.depthTexture.format===v6)o=J.DEPTH24_STENCIL8;for(let J0=0;J0<6;J0++)J.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+J0,0,o,L.width,L.height,0,x,n,null)}}else Y0(L.depthTexture,0);let G0=W0.__webglTexture,O0=DJ(L),a=m?J.TEXTURE_CUBE_MAP_POSITIVE_X+j:J.TEXTURE_2D,w=L.depthTexture.format===v6?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(L.depthTexture.format===j6)if(v(L))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,w,a,G0,0,O0);else J.framebufferTexture2D(J.FRAMEBUFFER,w,a,G0,0);else if(L.depthTexture.format===v6)if(v(L))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,w,a,G0,0,O0);else J.framebufferTexture2D(J.FRAMEBUFFER,w,a,G0,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function d0(B){let L=W.get(B),j=B.isWebGLCubeRenderTarget===!0;if(L.__boundDepthTexture!==B.depthTexture){let m=B.depthTexture;if(L.__depthDisposeCallback)L.__depthDisposeCallback();if(m){let W0=()=>{delete L.__boundDepthTexture,delete L.__depthDisposeCallback,m.removeEventListener("dispose",W0)};m.addEventListener("dispose",W0),L.__depthDisposeCallback=W0}L.__boundDepthTexture=m}if(B.depthTexture&&!L.__autoAllocateDepthBuffer)if(j)for(let m=0;m<6;m++)h0(L.__webglFramebuffer[m],B,m);else{let m=B.texture.mipmaps;if(m&&m.length>0)h0(L.__webglFramebuffer[0],B,0);else h0(L.__webglFramebuffer,B,0)}else if(j){L.__webglDepthbuffer=[];for(let m=0;m<6;m++)if($.bindFramebuffer(J.FRAMEBUFFER,L.__webglFramebuffer[m]),L.__webglDepthbuffer[m]===void 0)L.__webglDepthbuffer[m]=J.createRenderbuffer(),MJ(L.__webglDepthbuffer[m],B,!1);else{let W0=B.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,G0=L.__webglDepthbuffer[m];J.bindRenderbuffer(J.RENDERBUFFER,G0),J.framebufferRenderbuffer(J.FRAMEBUFFER,W0,J.RENDERBUFFER,G0)}}else{let m=B.texture.mipmaps;if(m&&m.length>0)$.bindFramebuffer(J.FRAMEBUFFER,L.__webglFramebuffer[0]);else $.bindFramebuffer(J.FRAMEBUFFER,L.__webglFramebuffer);if(L.__webglDepthbuffer===void 0)L.__webglDepthbuffer=J.createRenderbuffer(),MJ(L.__webglDepthbuffer,B,!1);else{let W0=B.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,G0=L.__webglDepthbuffer;J.bindRenderbuffer(J.RENDERBUFFER,G0),J.framebufferRenderbuffer(J.FRAMEBUFFER,W0,J.RENDERBUFFER,G0)}}$.bindFramebuffer(J.FRAMEBUFFER,null)}function r0(B,L,j){let m=W.get(B);if(L!==void 0)z0(m.__webglFramebuffer,B,B.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(j!==void 0)d0(B)}function u0(B){let L=B.texture,j=W.get(B),m=W.get(L);B.addEventListener("dispose",M);let W0=B.textures,G0=B.isWebGLCubeRenderTarget===!0,O0=W0.length>1;if(!O0){if(m.__webglTexture===void 0)m.__webglTexture=J.createTexture();m.__version=L.version,K.memory.textures++}if(G0){j.__webglFramebuffer=[];for(let a=0;a<6;a++)if(L.mipmaps&&L.mipmaps.length>0){j.__webglFramebuffer[a]=[];for(let w=0;w<L.mipmaps.length;w++)j.__webglFramebuffer[a][w]=J.createFramebuffer()}else j.__webglFramebuffer[a]=J.createFramebuffer()}else{if(L.mipmaps&&L.mipmaps.length>0){j.__webglFramebuffer=[];for(let a=0;a<L.mipmaps.length;a++)j.__webglFramebuffer[a]=J.createFramebuffer()}else j.__webglFramebuffer=J.createFramebuffer();if(O0)for(let a=0,w=W0.length;a<w;a++){let x=W.get(W0[a]);if(x.__webglTexture===void 0)x.__webglTexture=J.createTexture(),K.memory.textures++}if(B.samples>0&&v(B)===!1){j.__webglMultisampledFramebuffer=J.createFramebuffer(),j.__webglColorRenderbuffer=[],$.bindFramebuffer(J.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let a=0;a<W0.length;a++){let w=W0[a];j.__webglColorRenderbuffer[a]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,j.__webglColorRenderbuffer[a]);let x=H.convert(w.format,w.colorSpace),n=H.convert(w.type),o=V(w.internalFormat,x,n,w.normalized,w.colorSpace,B.isXRRenderTarget===!0),J0=DJ(B);J.renderbufferStorageMultisample(J.RENDERBUFFER,J0,o,B.width,B.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+a,J.RENDERBUFFER,j.__webglColorRenderbuffer[a])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),B.depthBuffer)j.__webglDepthRenderbuffer=J.createRenderbuffer(),MJ(j.__webglDepthRenderbuffer,B,!0);$.bindFramebuffer(J.FRAMEBUFFER,null)}}if(G0){$.bindTexture(J.TEXTURE_CUBE_MAP,m.__webglTexture),p0(J.TEXTURE_CUBE_MAP,L);for(let a=0;a<6;a++)if(L.mipmaps&&L.mipmaps.length>0)for(let w=0;w<L.mipmaps.length;w++)z0(j.__webglFramebuffer[a][w],B,L,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+a,w);else z0(j.__webglFramebuffer[a],B,L,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+a,0);if(O(L))z(J.TEXTURE_CUBE_MAP);$.unbindTexture()}else if(O0){for(let a=0,w=W0.length;a<w;a++){let x=W0[a],n=W.get(x),o=J.TEXTURE_2D;if(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)o=B.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(o,n.__webglTexture),p0(o,x),z0(j.__webglFramebuffer,B,x,J.COLOR_ATTACHMENT0+a,o,0),O(x))z(o)}$.unbindTexture()}else{let a=J.TEXTURE_2D;if(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)a=B.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(a,m.__webglTexture),p0(a,L),L.mipmaps&&L.mipmaps.length>0)for(let w=0;w<L.mipmaps.length;w++)z0(j.__webglFramebuffer[w],B,L,J.COLOR_ATTACHMENT0,a,w);else z0(j.__webglFramebuffer,B,L,J.COLOR_ATTACHMENT0,a,0);if(O(L))z(a);$.unbindTexture()}if(B.depthBuffer)d0(B)}function VJ(B){let L=B.textures;for(let j=0,m=L.length;j<m;j++){let W0=L[j];if(O(W0)){let G0=A(B),O0=W.get(W0).__webglTexture;$.bindTexture(G0,O0),z(G0),$.unbindTexture()}}}let JJ=[],yJ=[];function IJ(B){if(B.samples>0){if(v(B)===!1){let{textures:L,width:j,height:m}=B,W0=J.COLOR_BUFFER_BIT,G0=B.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,O0=W.get(B),a=L.length>1;if(a)for(let x=0;x<L.length;x++)$.bindFramebuffer(J.FRAMEBUFFER,O0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+x,J.RENDERBUFFER,null),$.bindFramebuffer(J.FRAMEBUFFER,O0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+x,J.TEXTURE_2D,null,0);$.bindFramebuffer(J.READ_FRAMEBUFFER,O0.__webglMultisampledFramebuffer);let w=B.texture.mipmaps;if(w&&w.length>0)$.bindFramebuffer(J.DRAW_FRAMEBUFFER,O0.__webglFramebuffer[0]);else $.bindFramebuffer(J.DRAW_FRAMEBUFFER,O0.__webglFramebuffer);for(let x=0;x<L.length;x++){if(B.resolveDepthBuffer){if(B.depthBuffer)W0|=J.DEPTH_BUFFER_BIT;if(B.stencilBuffer&&B.resolveStencilBuffer)W0|=J.STENCIL_BUFFER_BIT}if(a){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,O0.__webglColorRenderbuffer[x]);let n=W.get(L[x]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,n,0)}if(J.blitFramebuffer(0,0,j,m,0,0,j,m,W0,J.NEAREST),X===!0){if(JJ.length=0,yJ.length=0,JJ.push(J.COLOR_ATTACHMENT0+x),B.depthBuffer&&B.storeMultisampledDepthBuffer===!1)JJ.push(G0),yJ.push(G0),J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,yJ);J.invalidateFramebuffer(J.READ_FRAMEBUFFER,JJ)}}if($.bindFramebuffer(J.READ_FRAMEBUFFER,null),$.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),a)for(let x=0;x<L.length;x++){$.bindFramebuffer(J.FRAMEBUFFER,O0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+x,J.RENDERBUFFER,O0.__webglColorRenderbuffer[x]);let n=W.get(L[x]).__webglTexture;$.bindFramebuffer(J.FRAMEBUFFER,O0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+x,J.TEXTURE_2D,n,0)}$.bindFramebuffer(J.DRAW_FRAMEBUFFER,O0.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.storeMultisampledDepthBuffer===!1&&X){let L=B.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[L])}}}function DJ(B){return Math.min(Z.maxSamples,B.samples)}function v(B){let L=W.get(B);return B.samples>0&&Q.has("WEBGL_multisampled_render_to_texture")===!0&&L.__useRenderToTexture!==!1}function fJ(B){let L=K.render.frame;if(E.get(B)!==L)E.set(B,L),B.update()}function QJ(B,L){let{colorSpace:j,format:m,type:W0}=B;if(B.isCompressedTexture===!0||B.isVideoTexture===!0)return L;if(j!==$8&&j!==f6)if(c0.getTransfer(j)===GJ){if(m!==v8||W0!==C8)A0("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else f0("WebGLTextures: Unsupported texture color space:",j);return L}function UJ(B){if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement)U.width=B.naturalWidth||B.width,U.height=B.naturalHeight||B.height;else if(typeof VideoFrame<"u"&&B instanceof VideoFrame)U.width=B.displayWidth,U.height=B.displayHeight;else U.width=B.width,U.height=B.height;return U}this.allocateTextureUnit=Q0,this.resetTextureUnits=e,this.getTextureUnits=S,this.setTextureUnits=u,this.setTexture2D=Y0,this.setTexture2DArray=r,this.setTexture3D=$0,this.setTextureCube=Z0,this.rebindTextures=r0,this.setupRenderTarget=u0,this.updateRenderTargetMipmap=VJ,this.updateMultisampleRenderTarget=IJ,this.setupDepthRenderbuffer=d0,this.setupFrameBufferTexture=z0,this.useMultisampledRTT=v,this.isReversedDepthBuffer=function(){return $.buffers.depth.getReversed()}}function mN(J,Q){function $(W,Z=f6){let H,K=c0.getTransfer(Z);if(W===C8)return J.UNSIGNED_BYTE;if(W===b$)return J.UNSIGNED_SHORT_4_4_4_4;if(W===x$)return J.UNSIGNED_SHORT_5_5_5_1;if(W===HK)return J.UNSIGNED_INT_5_9_9_9_REV;if(W===KK)return J.UNSIGNED_INT_10F_11F_11F_REV;if(W===WK)return J.BYTE;if(W===ZK)return J.SHORT;if(W===W7)return J.UNSIGNED_SHORT;if(W===h$)return J.INT;if(W===q6)return J.UNSIGNED_INT;if(W===a8)return J.FLOAT;if(W===j8)return J.HALF_FLOAT;if(W===YK)return J.ALPHA;if(W===XK)return J.RGB;if(W===v8)return J.RGBA;if(W===j6)return J.DEPTH_COMPONENT;if(W===v6)return J.DEPTH_STENCIL;if(W===UK)return J.RED;if(W===g$)return J.RED_INTEGER;if(W===y6)return J.RG;if(W===p$)return J.RG_INTEGER;if(W===l$)return J.RGBA_INTEGER;if(W===EQ||W===GQ||W===NQ||W===qQ)if(K===GJ)if(H=Q.get("WEBGL_compressed_texture_s3tc_srgb"),H!==null){if(W===EQ)return H.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(W===GQ)return H.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(W===NQ)return H.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(W===qQ)return H.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(H=Q.get("WEBGL_compressed_texture_s3tc"),H!==null){if(W===EQ)return H.COMPRESSED_RGB_S3TC_DXT1_EXT;if(W===GQ)return H.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(W===NQ)return H.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(W===qQ)return H.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(W===m$||W===d$||W===u$||W===c$)if(H=Q.get("WEBGL_compressed_texture_pvrtc"),H!==null){if(W===m$)return H.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(W===d$)return H.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(W===u$)return H.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(W===c$)return H.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(W===n$||W===s$||W===i$||W===o$||W===a$||W===FQ||W===r$)if(H=Q.get("WEBGL_compressed_texture_etc"),H!==null){if(W===n$||W===s$)return K===GJ?H.COMPRESSED_SRGB8_ETC2:H.COMPRESSED_RGB8_ETC2;if(W===i$)return K===GJ?H.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:H.COMPRESSED_RGBA8_ETC2_EAC;if(W===o$)return H.COMPRESSED_R11_EAC;if(W===a$)return H.COMPRESSED_SIGNED_R11_EAC;if(W===FQ)return H.COMPRESSED_RG11_EAC;if(W===r$)return H.COMPRESSED_SIGNED_RG11_EAC}else return null;if(W===t$||W===e$||W===JW||W===QW||W===$W||W===WW||W===ZW||W===HW||W===KW||W===YW||W===XW||W===UW||W===EW||W===GW)if(H=Q.get("WEBGL_compressed_texture_astc"),H!==null){if(W===t$)return K===GJ?H.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:H.COMPRESSED_RGBA_ASTC_4x4_KHR;if(W===e$)return K===GJ?H.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:H.COMPRESSED_RGBA_ASTC_5x4_KHR;if(W===JW)return K===GJ?H.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:H.COMPRESSED_RGBA_ASTC_5x5_KHR;if(W===QW)return K===GJ?H.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:H.COMPRESSED_RGBA_ASTC_6x5_KHR;if(W===$W)return K===GJ?H.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:H.COMPRESSED_RGBA_ASTC_6x6_KHR;if(W===WW)return K===GJ?H.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:H.COMPRESSED_RGBA_ASTC_8x5_KHR;if(W===ZW)return K===GJ?H.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:H.COMPRESSED_RGBA_ASTC_8x6_KHR;if(W===HW)return K===GJ?H.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:H.COMPRESSED_RGBA_ASTC_8x8_KHR;if(W===KW)return K===GJ?H.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:H.COMPRESSED_RGBA_ASTC_10x5_KHR;if(W===YW)return K===GJ?H.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:H.COMPRESSED_RGBA_ASTC_10x6_KHR;if(W===XW)return K===GJ?H.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:H.COMPRESSED_RGBA_ASTC_10x8_KHR;if(W===UW)return K===GJ?H.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:H.COMPRESSED_RGBA_ASTC_10x10_KHR;if(W===EW)return K===GJ?H.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:H.COMPRESSED_RGBA_ASTC_12x10_KHR;if(W===GW)return K===GJ?H.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:H.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(W===NW||W===qW||W===FW)if(H=Q.get("EXT_texture_compression_bptc"),H!==null){if(W===NW)return K===GJ?H.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:H.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(W===qW)return H.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(W===FW)return H.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(W===OW||W===RW||W===OQ||W===LW)if(H=Q.get("EXT_texture_compression_rgtc"),H!==null){if(W===OW)return H.COMPRESSED_RED_RGTC1_EXT;if(W===RW)return H.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(W===OQ)return H.COMPRESSED_RED_GREEN_RGTC2_EXT;if(W===LW)return H.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(W===B9)return J.UNSIGNED_INT_24_8;return J[W]!==void 0?J[W]:null}return{convert:$}}var dN=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,uN=`
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

}`;class UY{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(J,Q){if(this.texture===null){let $=new AQ(J.texture);if(J.depthNear!==Q.depthNear||J.depthFar!==Q.depthFar)this.depthNear=J.depthNear,this.depthFar=J.depthFar;this.texture=$}}getMesh(J){if(this.texture!==null){if(this.mesh===null){let Q=J.cameras[0].viewport,$=new rJ({vertexShader:dN,fragmentShader:uN,uniforms:{depthColor:{value:this.texture},depthWidth:{value:Q.z},depthHeight:{value:Q.w}}});this.mesh=new o0(new aJ(20,20),$)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class EY extends y8{constructor(J,Q){super();let $=this,W=null,Z=1,H=null,K="local-floor",Y=1,X=null,U=null,E=null,N=null,G=null,q=null,R=typeof XRWebGLBinding<"u",k=new UY,F={},O=Q.getContextAttributes(),z=null,A=null,V=[],I=[],P=new y0,_=null,M=null,C=new PJ;C.viewport=new YJ;let l=new PJ;l.viewport=new YJ;let y=[C,l],b=new lW,e=null,S=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(s){let K0=V[s];if(K0===void 0)K0=new Y7,V[s]=K0;return K0.getTargetRaySpace()},this.getControllerGrip=function(s){let K0=V[s];if(K0===void 0)K0=new Y7,V[s]=K0;return K0.getGripSpace()},this.getHand=function(s){let K0=V[s];if(K0===void 0)K0=new Y7,V[s]=K0;return K0.getHandSpace()};function u(s){let K0=I.indexOf(s.inputSource);if(K0===-1)return;let U0=V[K0];if(U0!==void 0)U0.update(s.inputSource,s.frame,X||H),U0.dispatchEvent({type:s.type,data:s.inputSource})}function Q0(){W.removeEventListener("select",u),W.removeEventListener("selectstart",u),W.removeEventListener("selectend",u),W.removeEventListener("squeeze",u),W.removeEventListener("squeezestart",u),W.removeEventListener("squeezeend",u),W.removeEventListener("end",Q0),W.removeEventListener("inputsourceschange",d);for(let s=0;s<V.length;s++){let K0=I[s];if(K0===null)continue;I[s]=null,V[s].disconnect(K0)}e=null,S=null,k.reset();for(let s in F)delete F[s];if(J.setRenderTarget(z),G=null,N=null,E=null,W=null,A=null,p0.stop(),$.isPresenting=!1,J.setPixelRatio(_),J.setSize(P.width,P.height,!1),M!==null){let s=M.camera;s.fov=M.fov,s.zoom=M.zoom,s.updateProjectionMatrix(),M=null}$.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(s){if(Z=s,$.isPresenting===!0)A0("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(s){if(K=s,$.isPresenting===!0)A0("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return X||H},this.setReferenceSpace=function(s){X=s},this.getBaseLayer=function(){return N!==null?N:G},this.getBinding=function(){if(E===null&&R)E=new XRWebGLBinding(W,Q);return E},this.getFrame=function(){return q},this.getSession=function(){return W},this.setSession=async function(s){if(W=s,W!==null){if(z=J.getRenderTarget(),W.addEventListener("select",u),W.addEventListener("selectstart",u),W.addEventListener("selectend",u),W.addEventListener("squeeze",u),W.addEventListener("squeezestart",u),W.addEventListener("squeezeend",u),W.addEventListener("end",Q0),W.addEventListener("inputsourceschange",d),O.xrCompatible!==!0)await Q.makeXRCompatible();if(_=J.getPixelRatio(),J.getSize(P),!(R&&("createProjectionLayer"in XRWebGLBinding.prototype))){let U0={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:Z};G=new XRWebGLLayer(W,Q,U0),W.updateRenderState({baseLayer:G}),J.setPixelRatio(1),J.setSize(G.framebufferWidth,G.framebufferHeight,!1),A=new W8(G.framebufferWidth,G.framebufferHeight,{format:v8,type:C8,colorSpace:J.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:G.ignoreDepthValues===!1,resolveStencilBuffer:G.ignoreDepthValues===!1,storeMultisampledDepthBuffer:G.ignoreDepthValues===!1,storeMultisampledStencilBuffer:G.ignoreDepthValues===!1})}else{let U0=null,S0=null,v0=null;if(O.depth)v0=O.stencil?Q.DEPTH24_STENCIL8:Q.DEPTH_COMPONENT24,U0=O.stencil?v6:j6,S0=O.stencil?B9:q6;let z0={colorFormat:Q.RGBA8,depthFormat:v0,scaleFactor:Z};E=this.getBinding(),N=E.createProjectionLayer(z0),W.updateRenderState({layers:[N]}),J.setPixelRatio(1),J.setSize(N.textureWidth,N.textureHeight,!1),A=new W8(N.textureWidth,N.textureHeight,{format:v8,type:C8,depthTexture:new b6(N.textureWidth,N.textureHeight,S0,void 0,void 0,void 0,void 0,void 0,void 0,U0),stencilBuffer:O.stencil,colorSpace:J.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:N.ignoreDepthValues===!1,resolveStencilBuffer:N.ignoreDepthValues===!1,storeMultisampledDepthBuffer:N.ignoreDepthValues===!1,storeMultisampledStencilBuffer:N.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(Y),X=null,H=await W.requestReferenceSpace(K),p0.setContext(W),p0.start(),$.isPresenting=!0,$.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(W!==null)return W.environmentBlendMode},this.getDepthTexture=function(){return k.getDepthTexture()};function d(s){for(let K0=0;K0<s.removed.length;K0++){let U0=s.removed[K0],S0=I.indexOf(U0);if(S0>=0)I[S0]=null,V[S0].disconnect(U0)}for(let K0=0;K0<s.added.length;K0++){let U0=s.added[K0],S0=I.indexOf(U0);if(S0===-1){for(let z0=0;z0<V.length;z0++)if(z0>=I.length){I.push(U0),S0=z0;break}else if(I[z0]===null){I[z0]=U0,S0=z0;break}if(S0===-1)break}let v0=V[S0];if(v0)v0.connect(U0)}}let Y0=new h,r=new h;function $0(s,K0,U0){Y0.setFromMatrixPosition(K0.matrixWorld),r.setFromMatrixPosition(U0.matrixWorld);let S0=Y0.distanceTo(r),v0=K0.projectionMatrix.elements,z0=U0.projectionMatrix.elements,MJ=v0[14]/(v0[10]-1),h0=v0[14]/(v0[10]+1),d0=(v0[9]+1)/v0[5],r0=(v0[9]-1)/v0[5],u0=(v0[8]-1)/v0[0],VJ=(z0[8]+1)/z0[0],JJ=MJ*u0,yJ=MJ*VJ,IJ=S0/(-u0+VJ),DJ=IJ*-u0;if(K0.matrixWorld.decompose(s.position,s.quaternion,s.scale),s.translateX(DJ),s.translateZ(IJ),s.matrixWorld.compose(s.position,s.quaternion,s.scale),s.matrixWorldInverse.copy(s.matrixWorld).invert(),v0[10]===-1)s.projectionMatrix.copy(K0.projectionMatrix),s.projectionMatrixInverse.copy(K0.projectionMatrixInverse);else{let v=MJ+IJ,fJ=h0+IJ,QJ=JJ-DJ,UJ=yJ+(S0-DJ),B=d0*h0/fJ*v,L=r0*h0/fJ*v;s.projectionMatrix.makePerspective(QJ,UJ,B,L,v,fJ),s.projectionMatrixInverse.copy(s.projectionMatrix).invert()}}function Z0(s,K0){if(K0===null)s.matrixWorld.copy(s.matrix);else s.matrixWorld.multiplyMatrices(K0.matrixWorld,s.matrix);s.matrixWorldInverse.copy(s.matrixWorld).invert()}this.updateCamera=function(s){if(W===null)return;let{near:K0,far:U0}=s;if(k.texture!==null){if(k.depthNear>0)K0=k.depthNear;if(k.depthFar>0)U0=k.depthFar}if(b.near=l.near=C.near=K0,b.far=l.far=C.far=U0,e!==b.near||S!==b.far)W.updateRenderState({depthNear:b.near,depthFar:b.far}),e=b.near,S=b.far;b.layers.mask=s.layers.mask|6,C.layers.mask=b.layers.mask&-5,l.layers.mask=b.layers.mask&-3;let S0=s.parent,v0=b.cameras;Z0(b,S0);for(let z0=0;z0<v0.length;z0++)Z0(v0[z0],S0);if(v0.length===2)$0(b,C,l);else b.projectionMatrix.copy(C.projectionMatrix);if(M===null&&s.isPerspectiveCamera)M={camera:s,fov:s.fov,zoom:s.zoom};C0(s,b,S0)};function C0(s,K0,U0){if(U0===null)s.matrix.copy(K0.matrixWorld);else s.matrix.copy(U0.matrixWorld),s.matrix.invert(),s.matrix.multiply(K0.matrixWorld);if(s.matrix.decompose(s.position,s.quaternion,s.scale),s.updateMatrixWorld(!0),s.projectionMatrix.copy(K0.projectionMatrix),s.projectionMatrixInverse.copy(K0.projectionMatrixInverse),s.isPerspectiveCamera)s.fov=A6*2*Math.atan(1/s.projectionMatrix.elements[5]),s.zoom=1}this.getCamera=function(){return b},this.getFoveation=function(){if(N===null&&G===null)return;return Y},this.setFoveation=function(s){if(Y=s,N!==null)N.fixedFoveation=s;if(G!==null&&G.fixedFoveation!==void 0)G.fixedFoveation=s},this.hasDepthSensing=function(){return k.texture!==null},this.getDepthSensingMesh=function(){return k.getMesh(b)},this.getCameraTexture=function(s){return F[s]};let T0=null;function $J(s,K0){if(U=K0.getViewerPose(X||H),q=K0,U!==null){let U0=U.views;if(G!==null)J.setRenderTargetFramebuffer(A,G.framebuffer),J.setRenderTarget(A);let S0=!1;if(U0.length!==b.cameras.length)b.cameras.length=0,S0=!0;for(let h0=0;h0<U0.length;h0++){let d0=U0[h0],r0=null;if(G!==null)r0=G.getViewport(d0);else{let VJ=E.getViewSubImage(N,d0);if(r0=VJ.viewport,h0===0)J.setRenderTargetTextures(A,VJ.colorTexture,VJ.depthStencilTexture),J.setRenderTarget(A)}let u0=y[h0];if(u0===void 0)u0=new PJ,u0.layers.enable(h0),u0.viewport=new YJ,y[h0]=u0;if(u0.matrix.fromArray(d0.transform.matrix),u0.matrix.decompose(u0.position,u0.quaternion,u0.scale),u0.projectionMatrix.fromArray(d0.projectionMatrix),u0.projectionMatrixInverse.copy(u0.projectionMatrix).invert(),u0.viewport.set(r0.x,r0.y,r0.width,r0.height),h0===0)b.matrix.copy(u0.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale);if(S0===!0)b.cameras.push(u0)}let v0=W.enabledFeatures;if(v0&&v0.includes("depth-sensing")&&W.depthUsage=="gpu-optimized"&&R){E=$.getBinding();let h0=E.getDepthInformation(U0[0]);if(h0&&h0.isValid&&h0.texture)k.init(h0,W.renderState)}if(v0&&v0.includes("camera-access")&&R){J.state.unbindTexture(),E=$.getBinding();for(let h0=0;h0<U0.length;h0++){let d0=U0[h0].camera;if(d0){let r0=F[d0];if(!r0)r0=new AQ,F[d0]=r0;let u0=E.getCameraImage(d0);r0.sourceTexture=u0}}}}for(let U0=0;U0<V.length;U0++){let S0=I[U0],v0=V[U0];if(S0!==null&&v0!==void 0)v0.update(S0,K0,X||H)}if(T0)T0(s,K0);if(K0.detectedPlanes)$.dispatchEvent({type:"planesdetected",data:K0});q=null}let p0=new tK;p0.setAnimationLoop($J),this.setAnimationLoop=function(s){T0=s},this.dispose=function(){}}}var cN=new b0,GY=new x0;GY.set(-1,0,0,0,1,0,0,0,1);function nN(J,Q){function $(F,O){if(F.matrixAutoUpdate===!0)F.updateMatrix();O.value.copy(F.matrix)}function W(F,O){if(O.color.getRGB(F.fogColor.value,TW(J)),O.isFog)F.fogNear.value=O.near,F.fogFar.value=O.far;else if(O.isFogExp2)F.fogDensity.value=O.density}function Z(F,O,z,A,V){if(O.isNodeMaterial)O.uniformsNeedUpdate=!1;else if(O.isMeshBasicMaterial)H(F,O);else if(O.isMeshLambertMaterial){if(H(F,O),O.envMap)F.envMapIntensity.value=O.envMapIntensity}else if(O.isMeshToonMaterial)H(F,O),N(F,O);else if(O.isMeshPhongMaterial){if(H(F,O),E(F,O),O.envMap)F.envMapIntensity.value=O.envMapIntensity}else if(O.isMeshStandardMaterial){if(H(F,O),G(F,O),O.isMeshPhysicalMaterial)q(F,O,V)}else if(O.isMeshMatcapMaterial)H(F,O),R(F,O);else if(O.isMeshDepthMaterial)H(F,O);else if(O.isMeshDistanceMaterial)H(F,O),k(F,O);else if(O.isMeshNormalMaterial)H(F,O);else if(O.isLineBasicMaterial){if(K(F,O),O.isLineDashedMaterial)Y(F,O)}else if(O.isPointsMaterial)X(F,O,z,A);else if(O.isSpriteMaterial)U(F,O);else if(O.isShadowMaterial)F.color.value.copy(O.color),F.opacity.value=O.opacity;else if(O.isShaderMaterial)O.uniformsNeedUpdate=!1}function H(F,O){if(F.opacity.value=O.opacity,O.color)F.diffuse.value.copy(O.color);if(O.emissive)F.emissive.value.copy(O.emissive).multiplyScalar(O.emissiveIntensity);if(O.map)F.map.value=O.map,$(O.map,F.mapTransform);if(O.alphaMap)F.alphaMap.value=O.alphaMap,$(O.alphaMap,F.alphaMapTransform);if(O.bumpMap){if(F.bumpMap.value=O.bumpMap,$(O.bumpMap,F.bumpMapTransform),F.bumpScale.value=O.bumpScale,O.side===lJ)F.bumpScale.value*=-1}if(O.normalMap){if(F.normalMap.value=O.normalMap,$(O.normalMap,F.normalMapTransform),F.normalScale.value.copy(O.normalScale),O.side===lJ)F.normalScale.value.negate()}if(O.displacementMap)F.displacementMap.value=O.displacementMap,$(O.displacementMap,F.displacementMapTransform),F.displacementScale.value=O.displacementScale,F.displacementBias.value=O.displacementBias;if(O.emissiveMap)F.emissiveMap.value=O.emissiveMap,$(O.emissiveMap,F.emissiveMapTransform);if(O.specularMap)F.specularMap.value=O.specularMap,$(O.specularMap,F.specularMapTransform);if(O.alphaTest>0)F.alphaTest.value=O.alphaTest;let z=Q.get(O),A=z.envMap,V=z.envMapRotation;if(A){if(F.envMap.value=A,F.envMapRotation.value.setFromMatrix4(cN.makeRotationFromEuler(V)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1)F.envMapRotation.value.premultiply(GY);F.reflectivity.value=O.reflectivity,F.ior.value=O.ior,F.refractionRatio.value=O.refractionRatio}if(O.lightMap)F.lightMap.value=O.lightMap,F.lightMapIntensity.value=O.lightMapIntensity,$(O.lightMap,F.lightMapTransform);if(O.aoMap)F.aoMap.value=O.aoMap,F.aoMapIntensity.value=O.aoMapIntensity,$(O.aoMap,F.aoMapTransform)}function K(F,O){if(F.diffuse.value.copy(O.color),F.opacity.value=O.opacity,O.map)F.map.value=O.map,$(O.map,F.mapTransform)}function Y(F,O){F.dashSize.value=O.dashSize,F.totalSize.value=O.dashSize+O.gapSize,F.scale.value=O.scale}function X(F,O,z,A){if(F.diffuse.value.copy(O.color),F.opacity.value=O.opacity,F.size.value=O.size*z,F.scale.value=A*0.5,O.map)F.map.value=O.map,$(O.map,F.uvTransform);if(O.alphaMap)F.alphaMap.value=O.alphaMap,$(O.alphaMap,F.alphaMapTransform);if(O.alphaTest>0)F.alphaTest.value=O.alphaTest}function U(F,O){if(F.diffuse.value.copy(O.color),F.opacity.value=O.opacity,F.rotation.value=O.rotation,O.map)F.map.value=O.map,$(O.map,F.mapTransform);if(O.alphaMap)F.alphaMap.value=O.alphaMap,$(O.alphaMap,F.alphaMapTransform);if(O.alphaTest>0)F.alphaTest.value=O.alphaTest}function E(F,O){F.specular.value.copy(O.specular),F.shininess.value=Math.max(O.shininess,0.0001)}function N(F,O){if(O.gradientMap)F.gradientMap.value=O.gradientMap}function G(F,O){if(F.metalness.value=O.metalness,O.metalnessMap)F.metalnessMap.value=O.metalnessMap,$(O.metalnessMap,F.metalnessMapTransform);if(F.roughness.value=O.roughness,O.roughnessMap)F.roughnessMap.value=O.roughnessMap,$(O.roughnessMap,F.roughnessMapTransform);if(O.envMap)F.envMapIntensity.value=O.envMapIntensity}function q(F,O,z){if(F.ior.value=O.ior,O.sheen>0){if(F.sheenColor.value.copy(O.sheenColor).multiplyScalar(O.sheen),F.sheenRoughness.value=O.sheenRoughness,O.sheenColorMap)F.sheenColorMap.value=O.sheenColorMap,$(O.sheenColorMap,F.sheenColorMapTransform);if(O.sheenRoughnessMap)F.sheenRoughnessMap.value=O.sheenRoughnessMap,$(O.sheenRoughnessMap,F.sheenRoughnessMapTransform)}if(O.clearcoat>0){if(F.clearcoat.value=O.clearcoat,F.clearcoatRoughness.value=O.clearcoatRoughness,O.clearcoatMap)F.clearcoatMap.value=O.clearcoatMap,$(O.clearcoatMap,F.clearcoatMapTransform);if(O.clearcoatRoughnessMap)F.clearcoatRoughnessMap.value=O.clearcoatRoughnessMap,$(O.clearcoatRoughnessMap,F.clearcoatRoughnessMapTransform);if(O.clearcoatNormalMap){if(F.clearcoatNormalMap.value=O.clearcoatNormalMap,$(O.clearcoatNormalMap,F.clearcoatNormalMapTransform),F.clearcoatNormalScale.value.copy(O.clearcoatNormalScale),O.side===lJ)F.clearcoatNormalScale.value.negate()}}if(O.dispersion>0)F.dispersion.value=O.dispersion;if(O.retroreflectivity>0)F.retroreflectivity.value=O.retroreflectivity;if(O.iridescence>0){if(F.iridescence.value=O.iridescence,F.iridescenceIOR.value=O.iridescenceIOR,F.iridescenceThicknessMinimum.value=O.iridescenceThicknessRange[0],F.iridescenceThicknessMaximum.value=O.iridescenceThicknessRange[1],O.iridescenceMap)F.iridescenceMap.value=O.iridescenceMap,$(O.iridescenceMap,F.iridescenceMapTransform);if(O.iridescenceThicknessMap)F.iridescenceThicknessMap.value=O.iridescenceThicknessMap,$(O.iridescenceThicknessMap,F.iridescenceThicknessMapTransform)}if(O.transmission>0){if(F.transmission.value=O.transmission,F.transmissionSamplerMap.value=z.texture,F.transmissionSamplerSize.value.set(z.width,z.height),O.transmissionMap)F.transmissionMap.value=O.transmissionMap,$(O.transmissionMap,F.transmissionMapTransform);if(F.thickness.value=O.thickness,O.thicknessMap)F.thicknessMap.value=O.thicknessMap,$(O.thicknessMap,F.thicknessMapTransform);F.attenuationDistance.value=O.attenuationDistance,F.attenuationColor.value.copy(O.attenuationColor)}if(O.anisotropy>0){if(F.anisotropyVector.value.set(O.anisotropy*Math.cos(O.anisotropyRotation),O.anisotropy*Math.sin(O.anisotropyRotation)),O.anisotropyMap)F.anisotropyMap.value=O.anisotropyMap,$(O.anisotropyMap,F.anisotropyMapTransform)}if(F.specularIntensity.value=O.specularIntensity,F.specularColor.value.copy(O.specularColor),O.specularColorMap)F.specularColorMap.value=O.specularColorMap,$(O.specularColorMap,F.specularColorMapTransform);if(O.specularIntensityMap)F.specularIntensityMap.value=O.specularIntensityMap,$(O.specularIntensityMap,F.specularIntensityMapTransform)}function R(F,O){if(O.matcap)F.matcap.value=O.matcap}function k(F,O){let z=Q.get(O).light;F.referencePosition.value.setFromMatrixPosition(z.matrixWorld),F.nearDistance.value=z.shadow.camera.near,F.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:W,refreshMaterialUniforms:Z}}function sN(J,Q,$,W){let Z={},H={},K=[],Y=J.getParameter(J.MAX_UNIFORM_BUFFER_BINDINGS);function X(V,I){let P=I.program;W.uniformBlockBinding(V,P)}function U(V,I){let P=Z[V.id];if(P===void 0)F(V),P=E(V),Z[V.id]=P,V.addEventListener("dispose",z);let _=I.program;W.updateUBOMapping(V,_);let M=Q.render.frame;if(H[V.id]!==M)G(V),H[V.id]=M}function E(V){let I=N();V.__bindingPointIndex=I;let P=J.createBuffer(),_=V.__size,M=V.usage;return J.bindBuffer(J.UNIFORM_BUFFER,P),J.bufferData(J.UNIFORM_BUFFER,_,M),J.bindBuffer(J.UNIFORM_BUFFER,null),J.bindBufferBase(J.UNIFORM_BUFFER,I,P),P}function N(){for(let V=0;V<Y;V++)if(K.indexOf(V)===-1)return K.push(V),V;return f0("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function G(V){let I=Z[V.id],P=V.uniforms,_=V.__cache;J.bindBuffer(J.UNIFORM_BUFFER,I);for(let M=0,C=P.length;M<C;M++){let l=P[M];if(Array.isArray(l))for(let y=0,b=l.length;y<b;y++)q(l[y],M,y,_);else q(l,M,0,_)}J.bindBuffer(J.UNIFORM_BUFFER,null)}function q(V,I,P,_){if(k(V,I,P,_)===!0){let{__offset:M,value:C}=V;if(Array.isArray(C)){let l=0;for(let y=0;y<C.length;y++){let b=C[y],e=O(b);if(R(b,V.__data,l),typeof b!=="number"&&typeof b!=="boolean"&&!b.isMatrix3&&!ArrayBuffer.isView(b))l+=e.storage/Float32Array.BYTES_PER_ELEMENT}}else R(C,V.__data,0);J.bufferSubData(J.UNIFORM_BUFFER,M,V.__data)}}function R(V,I,P){if(typeof V==="number"||typeof V==="boolean")I[0]=V;else if(V.isMatrix3)I[0]=V.elements[0],I[1]=V.elements[1],I[2]=V.elements[2],I[3]=0,I[4]=V.elements[3],I[5]=V.elements[4],I[6]=V.elements[5],I[7]=0,I[8]=V.elements[6],I[9]=V.elements[7],I[10]=V.elements[8],I[11]=0;else if(ArrayBuffer.isView(V))I.set(new V.constructor(V.buffer,V.byteOffset,I.length));else V.toArray(I,P)}function k(V,I,P,_){let M=V.value,C=I+"_"+P;if(_[C]===void 0){if(typeof M==="number"||typeof M==="boolean")_[C]=M;else if(ArrayBuffer.isView(M))_[C]=M.slice();else _[C]=M.clone();return!0}else{let l=_[C];if(typeof M==="number"||typeof M==="boolean"){if(l!==M)return _[C]=M,!0}else if(ArrayBuffer.isView(M))return!0;else if(l.equals(M)===!1)return l.copy(M),!0}return!1}function F(V){let I=V.uniforms,P=0,_=16;for(let C=0,l=I.length;C<l;C++){let y=Array.isArray(I[C])?I[C]:[I[C]];for(let b=0,e=y.length;b<e;b++){let S=y[b],u=Array.isArray(S.value)?S.value:[S.value];for(let Q0=0,d=u.length;Q0<d;Q0++){let Y0=u[Q0],r=O(Y0),$0=P%_,Z0=$0%r.boundary,C0=$0+Z0;if(P+=Z0,C0!==0&&_-C0<r.storage)P+=_-C0;S.__data=new Float32Array(r.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=P,P+=r.storage}}}let M=P%_;if(M>0)P+=_-M;return V.__size=P,V.__cache={},this}function O(V){let I={boundary:0,storage:0};if(typeof V==="number"||typeof V==="boolean")I.boundary=4,I.storage=4;else if(V.isVector2)I.boundary=8,I.storage=8;else if(V.isVector3||V.isColor)I.boundary=16,I.storage=12;else if(V.isVector4)I.boundary=16,I.storage=16;else if(V.isMatrix3)I.boundary=48,I.storage=48;else if(V.isMatrix4)I.boundary=64,I.storage=64;else if(V.isTexture)A0("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(V))I.boundary=16,I.storage=V.byteLength;else A0("WebGLRenderer: Unsupported uniform value type.",V);return I}function z(V){let I=V.target;I.removeEventListener("dispose",z);let P=K.indexOf(I.__bindingPointIndex);K.splice(P,1),J.deleteBuffer(Z[I.id]),delete Z[I.id],delete H[I.id]}function A(){for(let V in Z)J.deleteBuffer(Z[V]);K=[],Z={},H={}}return{bind:X,update:U,dispose:A}}var iN=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),f8=null;function oN(){if(f8===null)f8=new G7(iN,16,16,y6,j8),f8.name="DFG_LUT",f8.minFilter=vJ,f8.magFilter=vJ,f8.wrapS=V9,f8.wrapT=V9,f8.generateMipmaps=!1,f8.needsUpdate=!0;return f8}class ZZ{constructor(J={}){let{canvas:Q=LK(),context:$=null,depth:W=!0,stencil:Z=!1,alpha:H=!1,antialias:K=!1,premultipliedAlpha:Y=!0,preserveDrawingBuffer:X=!1,powerPreference:U="default",failIfMajorPerformanceCaveat:E=!1,reversedDepthBuffer:N=!1,outputBufferType:G=C8}=J;this.isWebGLRenderer=!0;let q;if($!==null){if(typeof WebGLRenderingContext<"u"&&$ instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");q=$.getContextAttributes().alpha}else q=H;let R=G,k=new Set([l$,p$,g$]),F=new Set([C8,q6,W7,B9,b$,x$]),O=new Uint32Array(4),z=new Int32Array(4),A=new h,V=null,I=null,P=[],_=[],M=null;this.domElement=Q,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=k8,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,l=!1,y=null,b=null,e=null,S=null;this._outputColorSpace=Q8;let u=0,Q0=0,d=null,Y0=-1,r=null,$0=new YJ,Z0=new YJ,C0=null,T0=new j0(0),$J=0,p0=Q.width,s=Q.height,K0=1,U0=null,S0=null,v0=new YJ(0,0,p0,s),z0=new YJ(0,0,p0,s),MJ=!1,h0=new q7,d0=!1,r0=!1,u0=new b0,VJ=new h,JJ=new YJ,yJ={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},IJ=!1;function DJ(){return d===null?K0:1}let v=$;function fJ(D,f){return Q.getContext(D,f)}let QJ,UJ,B,L,j,m,W0,G0,O0,a,w,x,n,o,J0,E0,q0,V0,T,H0,i,X0,R0;try{let D={alpha:!0,depth:W,stencil:Z,antialias:K,premultipliedAlpha:Y,preserveDrawingBuffer:X,powerPreference:U,failIfMajorPerformanceCaveat:E};if("setAttribute"in Q)Q.setAttribute("data-engine",`three.js r${IH}`);if(Q.addEventListener("webglcontextlost",g0,!1),Q.addEventListener("webglcontextrestored",NJ,!1),Q.addEventListener("webglcontextcreationerror",WJ,!1),v===null){if(v=fJ("webgl2",D),v===null)if(fJ("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}t()}catch(D){throw Q.removeEventListener("webglcontextlost",g0,!1),Q.removeEventListener("webglcontextrestored",NJ,!1),Q.removeEventListener("webglcontextcreationerror",WJ,!1),f0("WebGLRenderer: "+D.message),D}function t(){if(QJ=new $G(v),QJ.init(),i=new mN(v,QJ),UJ=new n5(v,QJ,J,i),B=new pN(v,QJ),UJ.reversedDepthBuffer&&N)B.buffers.depth.setReversed(!0);b=v.createFramebuffer(),e=v.createFramebuffer(),S=v.createFramebuffer(),L=new HG(v),j=new zN,m=new lN(v,QJ,B,j,UJ,i,L),W0=new QG(C),G0=new YU(v),X0=new u5(v,G0),O0=new WG(v,G0,L,X0),a=new YG(v,O0,G0,X0,L),V0=new KG(v,UJ,m),J0=new s5(j),w=new wN(C,W0,QJ,UJ,X0,J0),x=new nN(C,j),n=new _N,o=new yN(QJ),q0=new d5(C,W0,B,a,q,Y),E0=new gN(C,a,UJ),R0=new sN(v,L,UJ,B),T=new c5(v,QJ,L),H0=new ZG(v,QJ,L),L.programs=w.programs,C.capabilities=UJ,C.extensions=QJ,C.properties=j,C.renderLists=n,C.shadowMap=E0,C.state=B,C.info=L}if(R!==C8)M=new UG(R,Q.width,Q.height,K,W,Z);let F0=new EY(C,v);this.xr=F0,this.getContext=function(){return v},this.getContextAttributes=function(){return v.getContextAttributes()},this.forceContextLoss=function(){let D=QJ.get("WEBGL_lose_context");if(D)D.loseContext()},this.forceContextRestore=function(){let D=QJ.get("WEBGL_lose_context");if(D)D.restoreContext()},this.getPixelRatio=function(){return K0},this.setPixelRatio=function(D){if(D===void 0)return;K0=D,this.setSize(p0,s,!1)},this.getSize=function(D){return D.set(p0,s)},this.setSize=function(D,f,c=!0){if(F0.isPresenting){A0("WebGLRenderer: Can't change size while VR device is presenting.");return}if(p0=D,s=f,Q.width=Math.floor(D*K0),Q.height=Math.floor(f*K0),c===!0)Q.style.width=D+"px",Q.style.height=f+"px";if(M!==null)M.setSize(Q.width,Q.height);this.setViewport(0,0,D,f)},this.getDrawingBufferSize=function(D){return D.set(p0*K0,s*K0).floor()},this.setDrawingBufferSize=function(D,f,c){p0=D,s=f,K0=c,Q.width=Math.floor(D*c),Q.height=Math.floor(f*c),this.setViewport(0,0,D,f)},this.setEffects=function(D){if(R===C8){f0("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(D){for(let f=0;f<D.length;f++)if(D[f].isOutputPass===!0){A0("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}M.setEffects(D||[])},this.getCurrentViewport=function(D){return D.copy($0)},this.getViewport=function(D){return D.copy(v0)},this.setViewport=function(D,f,c,g){if(D.isVector4)v0.set(D.x,D.y,D.z,D.w);else v0.set(D,f,c,g);B.viewport($0.copy(v0).multiplyScalar(K0).round())},this.getScissor=function(D){return D.copy(z0)},this.setScissor=function(D,f,c,g){if(D.isVector4)z0.set(D.x,D.y,D.z,D.w);else z0.set(D,f,c,g);B.scissor(Z0.copy(z0).multiplyScalar(K0).round())},this.getScissorTest=function(){return MJ},this.setScissorTest=function(D){B.setScissorTest(MJ=D)},this.setOpaqueSort=function(D){U0=D},this.setTransparentSort=function(D){S0=D},this.getClearColor=function(D){return D.copy(q0.getClearColor())},this.setClearColor=function(){q0.setClearColor(...arguments)},this.getClearAlpha=function(){return q0.getClearAlpha()},this.setClearAlpha=function(){q0.setClearAlpha(...arguments)},this.clear=function(D=!0,f=!0,c=!0){let g=0;if(D){let p=!1;if(d!==null){let D0=d.texture.format;p=k.has(D0)}if(p){let D0=d.texture.type,B0=F.has(D0),M0=q0.getClearColor(),I0=q0.getClearAlpha(),P0=M0.r,l0=M0.g,s0=M0.b;if(B0)O[0]=P0,O[1]=l0,O[2]=s0,O[3]=I0,v.clearBufferuiv(v.COLOR,0,O);else z[0]=P0,z[1]=l0,z[2]=s0,z[3]=I0,v.clearBufferiv(v.COLOR,0,z)}else g|=v.COLOR_BUFFER_BIT}if(f)g|=v.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(c)g|=v.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(g!==0)v.clear(g)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(D){D.setRenderer(this),y=D},this.dispose=function(){Q.removeEventListener("webglcontextlost",g0,!1),Q.removeEventListener("webglcontextrestored",NJ,!1),Q.removeEventListener("webglcontextcreationerror",WJ,!1),q0.dispose(),n.dispose(),o.dispose(),j.dispose(),W0.dispose(),a.dispose(),X0.dispose(),R0.dispose(),w.dispose(),F0.dispose(),F0.removeEventListener("sessionstart",_Z),F0.removeEventListener("sessionend",AZ),C6.stop()};function g0(D){D.preventDefault(),t9("WebGLRenderer: Context Lost."),l=!0}function NJ(){t9("WebGLRenderer: Context Restored."),l=!1;let D=L.autoReset,f=E0.enabled,c=E0.autoUpdate,g=E0.needsUpdate,p=E0.type;t(),L.autoReset=D,E0.enabled=f,E0.autoUpdate=c,E0.needsUpdate=g,E0.type=p}function WJ(D){f0("WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function w8(D){let f=D.target;f.removeEventListener("dispose",w8),p8(f)}function p8(D){rY(D),j.remove(D)}function rY(D){let f=j.get(D).programs;if(f!==void 0){if(f.forEach(function(c){w.releaseProgram(c)}),D.isShaderMaterial)w.releaseShaderCache(D)}}this.renderBufferDirect=function(D,f,c,g,p,D0){if(f===null)f=yJ;let B0=p.isMesh&&p.matrixWorld.determinantAffine()<0,M0=JX(D,f,c,g,p);B.setMaterial(g,B0);let I0=c.index,P0=1;if(g.wireframe===!0){if(I0=O0.getWireframeAttribute(c),I0===void 0)return;P0=2}let l0=c.drawRange,s0=c.attributes.position,w0=l0.start*P0,ZJ=(l0.start+l0.count)*P0;if(D0!==null)w0=Math.max(w0,D0.start*P0),ZJ=Math.min(ZJ,(D0.start+D0.count)*P0);if(I0!==null)w0=Math.max(w0,0),ZJ=Math.min(ZJ,I0.count);else if(s0!==void 0&&s0!==null)w0=Math.max(w0,0),ZJ=Math.min(ZJ,s0.count);let wJ=ZJ-w0;if(wJ<0||wJ===1/0)return;X0.setup(p,g,M0,c,I0);let OJ,EJ=T;if(I0!==null)OJ=G0.get(I0),EJ=H0,EJ.setIndex(OJ);if(p.isMesh)if(g.wireframe===!0)B.setLineWidth(g.wireframeLinewidth*DJ()),EJ.setMode(v.LINES);else EJ.setMode(v.TRIANGLES);else if(p.isLine){let xJ=g.linewidth;if(xJ===void 0)xJ=1;if(B.setLineWidth(xJ*DJ()),p.isLineSegments)EJ.setMode(v.LINES);else if(p.isLineLoop)EJ.setMode(v.LINE_LOOP);else EJ.setMode(v.LINE_STRIP)}else if(p.isPoints)EJ.setMode(v.POINTS);else if(p.isSprite)EJ.setMode(v.TRIANGLES);if(p.isBatchedMesh)if(!QJ.get("WEBGL_multi_draw")){let{_multiDrawStarts:xJ,_multiDrawCounts:k0,_multiDrawCount:uJ}=p,a0=I0?G0.get(I0).bytesPerElement:1,U8=j.get(g).currentProgram.getUniforms();for(let z8=0;z8<uJ;z8++)U8.setValue(v,"_gl_DrawID",z8),EJ.render(xJ[z8]/a0,k0[z8])}else EJ.renderMultiDraw(p._multiDrawStarts,p._multiDrawCounts,p._multiDrawCount);else if(p.isInstancedMesh)EJ.renderInstances(w0,wJ,p.count);else if(c.isInstancedBufferGeometry){let xJ=c._maxInstanceCount!==void 0?c._maxInstanceCount:1/0,k0=Math.min(c.instanceCount,xJ);EJ.renderInstances(w0,wJ,k0)}else EJ.render(w0,wJ)};function PZ(D,f,c,g){if(y!==null&&D.isNodeMaterial)y.setObject(g,D);if(d0===!0)J0.setState(D,c,!1);if(D.transparent===!0&&D.side===AJ&&D.forceSinglePass===!1)D.side=lJ,D.needsUpdate=!0,P7(D,f,g),D.side=A8,D.needsUpdate=!0,P7(D,f,g),D.side=AJ;else P7(D,f,g)}this.compile=function(D,f,c=null){if(c===null)c=D;if(y!==null)y.renderStart(D,f,c);if(I=o.get(c),I.init(f),_.push(I),c.traverseVisible(function(p){if(p.isLight&&p.layers.test(f.layers)){if(I.pushLight(p),p.castShadow)I.pushShadow(p)}}),D!==c)D.traverseVisible(function(p){if(p.isLight&&p.layers.test(f.layers)){if(I.pushLight(p),p.castShadow)I.pushShadow(p)}});if(I.setupLights(),y!==null)y.updateLights(I.state.lightsArray);if(r0=this.localClippingEnabled,d0=J0.init(this.clippingPlanes,r0),d0===!0)J0.setGlobalState(this.clippingPlanes,f);if(y!==null)E0.render(I.state.shadowsArray,c,f);let g=new Set;if(D.traverse(function(p){if(!(p.isMesh||p.isPoints||p.isLine||p.isSprite))return;let D0=p.material;if(D0)if(Array.isArray(D0))for(let B0=0;B0<D0.length;B0++){let M0=D0[B0];PZ(M0,c,f,p),g.add(M0)}else PZ(D0,c,f,p),g.add(D0)}),I=_.pop(),y!==null)y.renderEnd();return g},this.compileAsync=function(D,f,c=null){let g=this.compile(D,f,c);return new Promise((p)=>{function D0(){if(g.forEach(function(B0){let I0=j.get(B0).currentProgram;if(I0===void 0||I0.isReady())g.delete(B0)}),g.size===0){p(D);return}setTimeout(D0,10)}if(QJ.get("KHR_parallel_shader_compile")!==null)D0();else setTimeout(D0,10)})};let aQ=null;function tY(D){if(aQ)aQ(D)}function _Z(){C6.stop()}function AZ(){C6.start()}let C6=new tK;if(C6.setAnimationLoop(tY),typeof self<"u")C6.setContext(self);this.setAnimationLoop=function(D){aQ=D,F0.setAnimationLoop(D),D===null?C6.stop():C6.start()},F0.addEventListener("sessionstart",_Z),F0.addEventListener("sessionend",AZ),this.render=function(D,f){if(f!==void 0&&f.isCamera!==!0){f0("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(l===!0)return;if(y!==null)y.renderStart(D,f);let c=F0.enabled===!0&&F0.isPresenting===!0,g=M!==null&&(d===null||c)&&M.begin(C,d);if(D.matrixWorldAutoUpdate===!0)D.updateMatrixWorld();if(f.parent===null&&f.matrixWorldAutoUpdate===!0)f.updateMatrixWorld();if(F0.enabled===!0&&F0.isPresenting===!0&&(M===null||M.isCompositing()===!1)){if(F0.cameraAutoUpdate===!0)F0.updateCamera(f);f=F0.getCamera()}if(D.isScene===!0)D.onBeforeRender(C,D,f,d);if(I=o.get(D,_.length),I.init(f),I.state.textureUnits=m.getTextureUnits(),_.push(I),u0.multiplyMatrices(f.projectionMatrix,f.matrixWorldInverse),h0.setFromProjectionMatrix(u0,CW,f.reversedDepth),r0=this.localClippingEnabled,d0=J0.init(this.clippingPlanes,r0),V=n.get(D,P.length),V.init(),P.push(V),F0.enabled===!0&&F0.isPresenting===!0){let B0=C.xr.getDepthSensingMesh();if(B0!==null)rQ(B0,f,-1/0,C.sortObjects)}if(rQ(D,f,0,C.sortObjects),V.finish(),y!==null)y.updateLights(I.state.lightsArray);if(C.sortObjects===!0)V.sort(U0,S0);if(IJ=F0.enabled===!1||F0.isPresenting===!1||F0.hasDepthSensing()===!1,IJ)q0.addToRenderList(V,D);if(this.info.render.frame++,this.info.autoReset===!0)this.info.reset();if(d0===!0)J0.beginShadows();let p=I.state.shadowsArray;if(E0.render(p,D,f),d0===!0)J0.endShadows();if((g&&M.hasRenderPass())===!1){let{opaque:B0,transmissive:M0}=V;if(I.setupLights(),f.isArrayCamera){let I0=f.cameras;if(M0.length>0)for(let P0=0,l0=I0.length;P0<l0;P0++){let s0=I0[P0];SZ(B0,M0,D,s0)}if(IJ)q0.render(D);for(let P0=0,l0=I0.length;P0<l0;P0++){let s0=I0[P0];TZ(V,D,s0,s0.viewport)}}else{if(M0.length>0)SZ(B0,M0,D,f);if(IJ)q0.render(D);TZ(V,D,f)}}if(d!==null&&Q0===0)m.updateMultisampleRenderTarget(d),m.updateRenderTargetMipmap(d);if(g)M.end(C);if(D.isScene===!0)D.onAfterRender(C,D,f);if(X0.resetDefaultState(),Y0=-1,r=null,_.pop(),_.length>0){if(I=_[_.length-1],m.setTextureUnits(I.state.textureUnits),d0===!0)J0.setGlobalState(C.clippingPlanes,I.state.camera)}else I=null;if(P.pop(),P.length>0)V=P[P.length-1];else V=null;if(y!==null)y.renderEnd()};function rQ(D,f,c,g){if(D.visible===!1)return;if(D.layers.test(f.layers)){if(D.isGroup)c=D.renderOrder;else if(D.isLOD){if(D.autoUpdate===!0)D.update(f)}else if(D.isLightProbeGrid)I.pushLightProbeGrid(D);else if(D.isLight){if(I.pushLight(D),D.castShadow)I.pushShadow(D)}else if(D.isSprite){if(!D.frustumCulled||D.intersectsFrustum(h0)){if(g)JJ.setFromMatrixPosition(D.matrixWorld).applyMatrix4(u0);let B0=a.update(D),M0=D.material;if(M0.visible)V.push(D,B0,M0,c,JJ.z,null,f)}}else if(D.isMesh||D.isLine||D.isPoints){if(!D.frustumCulled||D.intersectsFrustum(h0)){let B0=a.update(D),M0=D.material;if(g){if(D.boundingSphere!==void 0){if(D.boundingSphere===null)D.computeBoundingSphere();JJ.copy(D.boundingSphere.center)}else{if(B0.boundingSphere===null)B0.computeBoundingSphere();JJ.copy(B0.boundingSphere.center)}JJ.applyMatrix4(D.matrixWorld).applyMatrix4(u0)}if(Array.isArray(M0)){let I0=B0.groups;for(let P0=0,l0=I0.length;P0<l0;P0++){let s0=I0[P0],w0=M0[s0.materialIndex];if(w0&&w0.visible)V.push(D,B0,w0,c,JJ.z,s0,f)}}else if(M0.visible)V.push(D,B0,M0,c,JJ.z,null,f)}}}let D0=D.children;for(let B0=0,M0=D0.length;B0<M0;B0++)rQ(D0[B0],f,c,g)}function TZ(D,f,c,g){let{opaque:p,transmissive:D0,transparent:B0}=D;if(I.setupLightsView(c),d0===!0)J0.setGlobalState(C.clippingPlanes,c);if(g)B.viewport($0.copy(g));if(p.length>0)z7(p,f,c);if(D0.length>0)z7(D0,f,c);if(B0.length>0)z7(B0,f,c);B.buffers.depth.setTest(!0),B.buffers.depth.setMask(!0),B.buffers.color.setMask(!0),B.setPolygonOffset(!1)}function SZ(D,f,c,g){if((c.isScene===!0?c.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[g.id]===void 0){let w0=QJ.has("EXT_color_buffer_half_float")||QJ.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[g.id]=new W8(1,1,{generateMipmaps:!0,type:w0?j8:C8,minFilter:S8,samples:Math.max(4,UJ.samples),stencilBuffer:Z,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:c0.workingColorSpace})}let D0=I.state.transmissionRenderTarget[g.id],B0=g.viewport||$0;D0.setSize(B0.z*C.transmissionResolutionScale,B0.w*C.transmissionResolutionScale);let M0=C.getRenderTarget(),I0=C.getActiveCubeFace(),P0=C.getActiveMipmapLevel();if(C.setRenderTarget(D0),C.getClearColor(T0),$J=C.getClearAlpha(),$J<1)C.setClearColor(16777215,0.5);if(C.clear(),IJ)q0.render(c);let l0=C.toneMapping;C.toneMapping=k8;let s0=g.viewport;if(g.viewport!==void 0)g.viewport=void 0;if(I.setupLightsView(g),d0===!0)J0.setGlobalState(C.clippingPlanes,g);if(z7(D,c,g),m.updateMultisampleRenderTarget(D0),m.updateRenderTargetMipmap(D0),QJ.has("WEBGL_multisampled_render_to_texture")===!1){let w0=!1;for(let ZJ=0,wJ=f.length;ZJ<wJ;ZJ++){let OJ=f[ZJ],{object:EJ,geometry:xJ,material:k0,group:uJ}=OJ;if(k0.side===AJ&&EJ.layers.test(g.layers)){let a0=k0.side;k0.side=lJ,k0.needsUpdate=!0,jZ(EJ,c,g,xJ,k0,uJ),k0.side=a0,k0.needsUpdate=!0,w0=!0}}if(w0===!0)m.updateMultisampleRenderTarget(D0),m.updateRenderTargetMipmap(D0)}if(C.setRenderTarget(M0,I0,P0),C.setClearColor(T0,$J),s0!==void 0)g.viewport=s0;C.toneMapping=l0}function z7(D,f,c){let g=f.isScene===!0?f.overrideMaterial:null;for(let p=0,D0=D.length;p<D0;p++){let B0=D[p],{object:M0,geometry:I0,group:P0}=B0,l0=B0.material;if(l0.allowOverride===!0&&g!==null)l0=g;if(M0.layers.test(c.layers))jZ(M0,f,c,I0,l0,P0)}}function jZ(D,f,c,g,p,D0){if(y!==null&&p.isNodeMaterial)y.setObject(D,p);if(D.onBeforeRender(C,f,c,g,p,D0),D.modelViewMatrix.multiplyMatrices(c.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),p.onBeforeRender(C,f,c,g,D,D0),p.transparent===!0&&p.side===AJ&&p.forceSinglePass===!1)p.side=lJ,p.needsUpdate=!0,C.renderBufferDirect(c,f,g,p,D,D0),p.side=A8,p.needsUpdate=!0,C.renderBufferDirect(c,f,g,p,D,D0),p.side=AJ;else C.renderBufferDirect(c,f,g,p,D,D0);D.onAfterRender(C,f,c,g,p,D0)}function P7(D,f,c){if(f.isScene!==!0)f=yJ;let g=j.get(D),p=I.state.lights,D0=I.state.shadowsArray,B0=p.state.version,M0=w.getParameters(D,p.state,D0,f,c,I.state.lightProbeGridArray),I0=w.getProgramCacheKey(M0),P0=g.programs;g.environment=D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial?f.environment:null,g.fog=f.fog;let l0=D.isMeshStandardMaterial||D.isMeshLambertMaterial&&!D.envMap||D.isMeshPhongMaterial&&!D.envMap;if(g.envMap=W0.get(D.envMap||g.environment,l0),g.envMapRotation=g.environment!==null&&D.envMap===null?f.environmentRotation:D.envMapRotation,P0===void 0)D.addEventListener("dispose",w8),P0=new Map,g.programs=P0;let s0=P0.get(I0);if(s0!==void 0){if(g.currentProgram===s0&&g.lightsStateVersion===B0)return yZ(D,M0),s0}else{if(M0.uniforms=w.getUniforms(D),y!==null&&D.isNodeMaterial)y.build(D,c,M0);D.onBeforeCompile(M0,C),s0=w.acquireProgram(M0,I0),P0.set(I0,s0),g.uniforms=M0.uniforms}let w0=g.uniforms;if(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)w0.clippingPlanes=J0.uniform;if(yZ(D,M0),g.needsLights=$X(D),g.lightsStateVersion=B0,g.needsLights)w0.ambientLightColor.value=p.state.ambient,w0.lightProbe.value=p.state.probe,w0.sunLights.value=p.state.sun,w0.sunLightShadows.value=p.state.sunShadow,w0.directionalLights.value=p.state.directional,w0.directionalLightShadows.value=p.state.directionalShadow,w0.spotLights.value=p.state.spot,w0.spotLightShadows.value=p.state.spotShadow,w0.rectAreaLights.value=p.state.rectArea,w0.ltc_1.value=p.state.rectAreaLTC1,w0.ltc_2.value=p.state.rectAreaLTC2,w0.pointLights.value=p.state.point,w0.pointLightShadows.value=p.state.pointShadow,w0.hemisphereLights.value=p.state.hemi,w0.sunShadowMatrix.value=p.state.sunShadowMatrix,w0.sunShadowCascade.value=p.state.sunShadowCascade,w0.directionalShadowMatrix.value=p.state.directionalShadowMatrix,w0.spotLightMatrix.value=p.state.spotLightMatrix,w0.spotLightMap.value=p.state.spotLightMap,w0.pointShadowMatrix.value=p.state.pointShadowMatrix;return g.lightProbeGrid=I.state.lightProbeGridArray.length>0,g.currentProgram=s0,g.uniformsList=null,s0}function vZ(D){if(D.uniformsList===null){let f=D.currentProgram.getUniforms();D.uniformsList=B7.seqWithValue(f.seq,D.uniforms)}return D.uniformsList}function yZ(D,f){let c=j.get(D);c.outputColorSpace=f.outputColorSpace,c.batching=f.batching,c.batchingColor=f.batchingColor,c.instancing=f.instancing,c.instancingColor=f.instancingColor,c.instancingMorph=f.instancingMorph,c.skinning=f.skinning,c.morphTargets=f.morphTargets,c.morphNormals=f.morphNormals,c.morphColors=f.morphColors,c.morphTargetsCount=f.morphTargetsCount,c.numClippingPlanes=f.numClippingPlanes,c.numIntersection=f.numClipIntersection,c.vertexAlphas=f.vertexAlphas,c.vertexTangents=f.vertexTangents,c.toneMapping=f.toneMapping}function eY(D,f){if(D.length===0)return null;if(D.length===1)return D[0].texture!==null?D[0]:null;A.setFromMatrixPosition(f.matrixWorld);for(let c=0,g=D.length;c<g;c++){let p=D[c];if(p.texture!==null&&p.boundingBox.containsPoint(A))return p}return null}function JX(D,f,c,g,p){if(f.isScene!==!0)f=yJ;m.resetTextureUnits();let D0=f.fog,B0=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?f.environment:null,M0=d===null?C.outputColorSpace:d.isXRRenderTarget===!0?d.texture.colorSpace:c0.workingColorSpace,I0=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,P0=W0.get(g.envMap||B0,I0),l0=g.vertexColors===!0&&!!c.attributes.color&&c.attributes.color.itemSize===4,s0=!!c.attributes.tangent&&(!!g.normalMap||g.anisotropy>0),w0=!!c.morphAttributes.position,ZJ=!!c.morphAttributes.normal,wJ=!!c.morphAttributes.color,OJ=k8;if(g.toneMapped){if(d===null||d.isXRRenderTarget===!0)OJ=C.toneMapping}let EJ=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,xJ=EJ!==void 0?EJ.length:0,k0=j.get(g),uJ=I.state.lights;if(d0===!0){if(r0===!0||D!==r){let qJ=D===r&&g.id===Y0;J0.setState(g,D,qJ)}}let a0=!1;if(g.version===k0.__version){if(k0.needsLights&&k0.lightsStateVersion!==uJ.state.version)a0=!0;else if(k0.outputColorSpace!==M0)a0=!0;else if(p.isBatchedMesh&&k0.batching===!1)a0=!0;else if(!p.isBatchedMesh&&k0.batching===!0)a0=!0;else if(p.isBatchedMesh&&k0.batchingColor===!0&&p._colorsTexture===null)a0=!0;else if(p.isBatchedMesh&&k0.batchingColor===!1&&p._colorsTexture!==null)a0=!0;else if(p.isInstancedMesh&&k0.instancing===!1)a0=!0;else if(!p.isInstancedMesh&&k0.instancing===!0)a0=!0;else if(p.isSkinnedMesh&&k0.skinning===!1)a0=!0;else if(!p.isSkinnedMesh&&k0.skinning===!0)a0=!0;else if(p.isInstancedMesh&&k0.instancingColor===!0&&p.instanceColor===null)a0=!0;else if(p.isInstancedMesh&&k0.instancingColor===!1&&p.instanceColor!==null)a0=!0;else if(p.isInstancedMesh&&k0.instancingMorph===!0&&p.morphTexture===null)a0=!0;else if(p.isInstancedMesh&&k0.instancingMorph===!1&&p.morphTexture!==null)a0=!0;else if(k0.envMap!==P0)a0=!0;else if(g.fog===!0&&k0.fog!==D0)a0=!0;else if(k0.numClippingPlanes!==void 0&&(k0.numClippingPlanes!==J0.numPlanes||k0.numIntersection!==J0.numIntersection))a0=!0;else if(k0.vertexAlphas!==l0)a0=!0;else if(k0.vertexTangents!==s0)a0=!0;else if(k0.morphTargets!==w0)a0=!0;else if(k0.morphNormals!==ZJ)a0=!0;else if(k0.morphColors!==wJ)a0=!0;else if(k0.toneMapping!==OJ)a0=!0;else if(k0.morphTargetsCount!==xJ)a0=!0;else if(!!k0.lightProbeGrid!==I.state.lightProbeGridArray.length>0)a0=!0}else a0=!0,k0.__version=g.version;let U8=k0.currentProgram;if(a0===!0){if(U8=P7(g,f,p),y&&g.isNodeMaterial)y.onUpdateProgram(g,U8,k0)}let z8=!1,$6=!1,s6=!1,XJ=U8.getUniforms(),kJ=k0.uniforms;if(B.useProgram(U8.program))z8=!0,$6=!0,s6=!0;if(g.id!==Y0)Y0=g.id,$6=!0;if(k0.needsLights){let qJ=eY(I.state.lightProbeGridArray,p);if(k0.lightProbeGrid!==qJ)k0.lightProbeGrid=qJ,$6=!0}if(z8||r!==D){if(B.buffers.depth.getReversed()&&D.reversedDepth!==!0)D._reversedDepth=!0,D.updateProjectionMatrix();XJ.setValue(v,"projectionMatrix",D.projectionMatrix),XJ.setValue(v,"viewMatrix",D.matrixWorldInverse);let Z6=XJ.map.cameraPosition;if(Z6!==void 0)Z6.setValue(v,VJ.setFromMatrixPosition(D.matrixWorld));if(UJ.logarithmicDepthBuffer)XJ.setValue(v,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2));if(g.isMeshPhongMaterial||g.isMeshToonMaterial||g.isMeshLambertMaterial||g.isMeshBasicMaterial||g.isMeshStandardMaterial||g.isShaderMaterial)XJ.setValue(v,"isOrthographic",D.isOrthographicCamera===!0);if(r!==D)r=D,$6=!0,s6=!0}if(k0.needsLights){if(uJ.state.sunShadowMap.length>0)XJ.setValue(v,"sunShadowMap",uJ.state.sunShadowMap,m);if(uJ.state.directionalShadowMap.length>0)XJ.setValue(v,"directionalShadowMap",uJ.state.directionalShadowMap,m);if(uJ.state.spotShadowMap.length>0)XJ.setValue(v,"spotShadowMap",uJ.state.spotShadowMap,m);if(uJ.state.pointShadowMap.length>0)XJ.setValue(v,"pointShadowMap",uJ.state.pointShadowMap,m)}if(p.isSkinnedMesh){XJ.setOptional(v,p,"bindMatrix"),XJ.setOptional(v,p,"bindMatrixInverse");let qJ=p.skeleton;if(qJ){if(qJ.boneTexture===null)qJ.computeBoneTexture();XJ.setValue(v,"boneTexture",qJ.boneTexture,m)}}if(p.isBatchedMesh){if(XJ.setOptional(v,p,"batchingTexture"),XJ.setValue(v,"batchingTexture",p._matricesTexture,m),XJ.setOptional(v,p,"batchingIdTexture"),XJ.setValue(v,"batchingIdTexture",p._indirectTexture,m),XJ.setOptional(v,p,"batchingColorTexture"),p._colorsTexture!==null)XJ.setValue(v,"batchingColorTexture",p._colorsTexture,m)}let W6=c.morphAttributes;if(W6.position!==void 0||W6.normal!==void 0||W6.color!==void 0)V0.update(p,c,U8);if($6||k0.receiveShadow!==p.receiveShadow)k0.receiveShadow=p.receiveShadow,XJ.setValue(v,"receiveShadow",p.receiveShadow);if((g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial)&&g.envMap===null&&f.environment!==null)kJ.envMapIntensity.value=f.environmentIntensity;if(kJ.dfgLUT!==void 0)kJ.dfgLUT.value=oN();if($6){if(XJ.setValue(v,"toneMappingExposure",C.toneMappingExposure),k0.needsLights)QX(kJ,s6);if(D0&&g.fog===!0)x.refreshFogUniforms(kJ,D0);if(x.refreshMaterialUniforms(kJ,g,K0,s,I.state.transmissionRenderTarget[D.id]),k0.needsLights&&k0.lightProbeGrid){let qJ=k0.lightProbeGrid;kJ.probesSH.value=qJ.texture,kJ.probesMin.value.copy(qJ.boundingBox.min),kJ.probesMax.value.copy(qJ.boundingBox.max),kJ.probesResolution.value.copy(qJ.resolution)}B7.upload(v,vZ(k0),kJ,m)}if(g.isShaderMaterial&&g.uniformsNeedUpdate===!0)B7.upload(v,vZ(k0),kJ,m),g.uniformsNeedUpdate=!1;if(g.isSpriteMaterial)XJ.setValue(v,"center",p.center);if(XJ.setValue(v,"modelViewMatrix",p.modelViewMatrix),XJ.setValue(v,"normalMatrix",p.normalMatrix),XJ.setValue(v,"modelMatrix",p.matrixWorld),g.uniformsGroups!==void 0){let qJ=g.uniformsGroups;for(let Z6=0,i6=qJ.length;Z6<i6;Z6++){let hZ=qJ[Z6];R0.update(hZ,U8),R0.bind(hZ,U8)}}return U8}function QX(D,f){D.ambientLightColor.needsUpdate=f,D.lightProbe.needsUpdate=f,D.sunLights.needsUpdate=f,D.sunLightShadows.needsUpdate=f,D.directionalLights.needsUpdate=f,D.directionalLightShadows.needsUpdate=f,D.pointLights.needsUpdate=f,D.pointLightShadows.needsUpdate=f,D.spotLights.needsUpdate=f,D.spotLightShadows.needsUpdate=f,D.rectAreaLights.needsUpdate=f,D.hemisphereLights.needsUpdate=f}function $X(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return u},this.getActiveMipmapLevel=function(){return Q0},this.getRenderTarget=function(){return d},this.setRenderTargetTextures=function(D,f,c){let g=j.get(D);if(g.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,g.__autoAllocateDepthBuffer===!1)g.__useRenderToTexture=!1;j.get(D.texture).__webglTexture=f,j.get(D.depthTexture).__webglTexture=g.__autoAllocateDepthBuffer?void 0:c,g.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,f){let c=j.get(D);c.__webglFramebuffer=f,c.__useDefaultFramebuffer=f===void 0},this.setRenderTarget=function(D,f=0,c=0){d=D,u=f,Q0=c;let g=null,p=!1,D0=!1;if(D){let M0=j.get(D);if(M0.__useDefaultFramebuffer!==void 0){B.bindFramebuffer(v.FRAMEBUFFER,M0.__webglFramebuffer),$0.copy(D.viewport),Z0.copy(D.scissor),C0=D.scissorTest,B.viewport($0),B.scissor(Z0),B.setScissorTest(C0),Y0=-1;return}else if(M0.__webglFramebuffer===void 0)m.setupRenderTarget(D);else if(M0.__hasExternalTextures)m.rebindTextures(D,j.get(D.texture).__webglTexture,j.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){let l0=D.depthTexture;if(M0.__boundDepthTexture!==l0){if(l0!==null&&j.has(l0)&&(D.width!==l0.image.width||D.height!==l0.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");m.setupDepthRenderbuffer(D)}}let I0=D.texture;if(I0.isData3DTexture||I0.isDataArrayTexture||I0.isCompressedArrayTexture)D0=!0;let P0=j.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget){if(Array.isArray(P0[f]))g=P0[f][c];else g=P0[f];p=!0}else if(D.samples>0&&m.useMultisampledRTT(D)===!1)g=j.get(D).__webglMultisampledFramebuffer;else if(Array.isArray(P0))g=P0[c];else g=P0;$0.copy(D.viewport),Z0.copy(D.scissor),C0=D.scissorTest}else $0.copy(v0).multiplyScalar(K0).floor(),Z0.copy(z0).multiplyScalar(K0).floor(),C0=MJ;if(c!==0)g=b;if(B.bindFramebuffer(v.FRAMEBUFFER,g))B.drawBuffers(D,g);if(B.viewport($0),B.scissor(Z0),B.setScissorTest(C0),p){let M0=j.get(D.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_CUBE_MAP_POSITIVE_X+f,M0.__webglTexture,c)}else if(D0){let M0=f;for(let I0=0;I0<D.textures.length;I0++){let P0=j.get(D.textures[I0]);v.framebufferTextureLayer(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0+I0,P0.__webglTexture,c,M0)}}else if(D!==null&&c!==0){let M0=j.get(D.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,M0.__webglTexture,c)}Y0=-1};function fZ(D){let f=j.get(D);if(f.__readFormat!==D.format||f.__readType!==D.type)f.__readFormat=D.format,f.__readType=D.type,f.__formatReadable=UJ.textureFormatReadable(D.format),f.__typeReadable=UJ.textureTypeReadable(D.type);return f}if(this.readRenderTargetPixels=function(D,f,c,g,p,D0,B0,M0=0){if(!(D&&D.isWebGLRenderTarget)){f0("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let I0=j.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&B0!==void 0)I0=I0[B0];if(I0){B.bindFramebuffer(v.FRAMEBUFFER,I0);try{let P0=D.textures[M0],l0=P0.format,s0=P0.type;if(D.textures.length>1)v.readBuffer(v.COLOR_ATTACHMENT0+M0);let w0=fZ(P0);if(w0.__formatReadable===!1){f0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(w0.__typeReadable===!1){f0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(f>=0&&f<=D.width-g&&(c>=0&&c<=D.height-p))v.readPixels(f,c,g,p,i.convert(l0),i.convert(s0),D0)}finally{let P0=d!==null?j.get(d).__webglFramebuffer:null;B.bindFramebuffer(v.FRAMEBUFFER,P0)}}},this.readRenderTargetPixelsAsync=async function(D,f,c,g,p,D0,B0,M0=0){if(!(D&&D.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let I0=j.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&B0!==void 0)I0=I0[B0];if(I0)if(f>=0&&f<=D.width-g&&(c>=0&&c<=D.height-p)){B.bindFramebuffer(v.FRAMEBUFFER,I0);let P0=D.textures[M0],l0=P0.format,s0=P0.type;if(D.textures.length>1)v.readBuffer(v.COLOR_ATTACHMENT0+M0);let w0=fZ(P0);if(w0.__formatReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(w0.__typeReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ZJ=v.createBuffer();v.bindBuffer(v.PIXEL_PACK_BUFFER,ZJ),v.bufferData(v.PIXEL_PACK_BUFFER,D0.byteLength,v.STREAM_READ),v.readPixels(f,c,g,p,i.convert(l0),i.convert(s0),0),v.bindBuffer(v.PIXEL_PACK_BUFFER,null);let wJ=d!==null?j.get(d).__webglFramebuffer:null;B.bindFramebuffer(v.FRAMEBUFFER,wJ);let OJ=v.fenceSync(v.SYNC_GPU_COMMANDS_COMPLETE,0);return v.flush(),await DK(v,OJ,4),v.bindBuffer(v.PIXEL_PACK_BUFFER,ZJ),v.getBufferSubData(v.PIXEL_PACK_BUFFER,0,D0),v.bindBuffer(v.PIXEL_PACK_BUFFER,null),v.deleteBuffer(ZJ),v.deleteSync(OJ),D0}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,f=null,c=0){let g=Math.pow(2,-c),p=Math.floor(D.image.width*g),D0=Math.floor(D.image.height*g),B0=f!==null?f.x:0,M0=f!==null?f.y:0;m.setTexture2D(D,0),v.copyTexSubImage2D(v.TEXTURE_2D,c,0,0,B0,M0,p,D0),B.unbindTexture()},this.copyTextureToTexture=function(D,f,c=null,g=null,p=0,D0=0){let B0,M0,I0,P0,l0,s0,w0,ZJ,wJ,OJ=D.isCompressedTexture?D.mipmaps[D0]:D.image;if(c!==null)B0=c.max.x-c.min.x,M0=c.max.y-c.min.y,I0=c.isBox3?c.max.z-c.min.z:1,P0=c.min.x,l0=c.min.y,s0=c.isBox3?c.min.z:0;else{let kJ=Math.pow(2,-p);if(B0=Math.floor(OJ.width*kJ),M0=Math.floor(OJ.height*kJ),D.isDataArrayTexture)I0=OJ.depth;else if(D.isData3DTexture)I0=Math.floor(OJ.depth*kJ);else I0=1;P0=0,l0=0,s0=0}if(g!==null)w0=g.x,ZJ=g.y,wJ=g.z;else w0=0,ZJ=0,wJ=0;let EJ=i.convert(f.format),xJ=i.convert(f.type),k0;if(f.isData3DTexture)m.setTexture3D(f,0),k0=v.TEXTURE_3D;else if(f.isDataArrayTexture||f.isCompressedArrayTexture)m.setTexture2DArray(f,0),k0=v.TEXTURE_2D_ARRAY;else m.setTexture2D(f,0),k0=v.TEXTURE_2D;B.activeTexture(v.TEXTURE0),B.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,f.flipY),B.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,f.premultiplyAlpha),B.pixelStorei(v.UNPACK_ALIGNMENT,f.unpackAlignment);let uJ=B.getParameter(v.UNPACK_ROW_LENGTH),a0=B.getParameter(v.UNPACK_IMAGE_HEIGHT),U8=B.getParameter(v.UNPACK_SKIP_PIXELS),z8=B.getParameter(v.UNPACK_SKIP_ROWS),$6=B.getParameter(v.UNPACK_SKIP_IMAGES);B.pixelStorei(v.UNPACK_ROW_LENGTH,OJ.width),B.pixelStorei(v.UNPACK_IMAGE_HEIGHT,OJ.height),B.pixelStorei(v.UNPACK_SKIP_PIXELS,P0),B.pixelStorei(v.UNPACK_SKIP_ROWS,l0),B.pixelStorei(v.UNPACK_SKIP_IMAGES,s0);let s6=D.isDataArrayTexture||D.isData3DTexture,XJ=f.isDataArrayTexture||f.isData3DTexture;if(D.isDepthTexture){let kJ=j.get(D),W6=j.get(f),qJ=j.get(kJ.__renderTarget),Z6=j.get(W6.__renderTarget);B.bindFramebuffer(v.READ_FRAMEBUFFER,qJ.__webglFramebuffer),B.bindFramebuffer(v.DRAW_FRAMEBUFFER,Z6.__webglFramebuffer);for(let i6=0;i6<I0;i6++){if(s6)v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,j.get(D).__webglTexture,p,s0+i6),v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,j.get(f).__webglTexture,D0,wJ+i6);v.blitFramebuffer(P0,l0,B0,M0,w0,ZJ,B0,M0,v.DEPTH_BUFFER_BIT,v.NEAREST)}B.bindFramebuffer(v.READ_FRAMEBUFFER,null),B.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else if(p!==0||D.isRenderTargetTexture||j.has(D)){let kJ=j.get(D),W6=j.get(f);B.bindFramebuffer(v.READ_FRAMEBUFFER,e),B.bindFramebuffer(v.DRAW_FRAMEBUFFER,S);for(let qJ=0;qJ<I0;qJ++){if(s6)v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,kJ.__webglTexture,p,s0+qJ);else v.framebufferTexture2D(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,kJ.__webglTexture,p);if(XJ)v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,W6.__webglTexture,D0,wJ+qJ);else v.framebufferTexture2D(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,W6.__webglTexture,D0);if(p!==0)v.blitFramebuffer(P0,l0,B0,M0,w0,ZJ,B0,M0,v.COLOR_BUFFER_BIT,v.NEAREST);else if(XJ)v.copyTexSubImage3D(k0,D0,w0,ZJ,wJ+qJ,P0,l0,B0,M0);else v.copyTexSubImage2D(k0,D0,w0,ZJ,P0,l0,B0,M0)}B.bindFramebuffer(v.READ_FRAMEBUFFER,null),B.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else if(XJ)if(D.isDataTexture||D.isData3DTexture)v.texSubImage3D(k0,D0,w0,ZJ,wJ,B0,M0,I0,EJ,xJ,OJ.data);else if(f.isCompressedArrayTexture)v.compressedTexSubImage3D(k0,D0,w0,ZJ,wJ,B0,M0,I0,EJ,OJ.data);else v.texSubImage3D(k0,D0,w0,ZJ,wJ,B0,M0,I0,EJ,xJ,OJ);else if(D.isDataTexture)v.texSubImage2D(v.TEXTURE_2D,D0,w0,ZJ,B0,M0,EJ,xJ,OJ.data);else if(D.isCompressedTexture)v.compressedTexSubImage2D(v.TEXTURE_2D,D0,w0,ZJ,OJ.width,OJ.height,EJ,OJ.data);else v.texSubImage2D(v.TEXTURE_2D,D0,w0,ZJ,B0,M0,EJ,xJ,OJ);if(B.pixelStorei(v.UNPACK_ROW_LENGTH,uJ),B.pixelStorei(v.UNPACK_IMAGE_HEIGHT,a0),B.pixelStorei(v.UNPACK_SKIP_PIXELS,U8),B.pixelStorei(v.UNPACK_SKIP_ROWS,z8),B.pixelStorei(v.UNPACK_SKIP_IMAGES,$6),D0===0&&f.generateMipmaps)v.generateMipmap(k0);B.unbindTexture()},this.initRenderTarget=function(D){if(j.get(D).__webglFramebuffer===void 0)m.setupRenderTarget(D)},this.initTexture=function(D){if(D.isCubeTexture)m.setTextureCube(D,0);else if(D.isData3DTexture)m.setTexture3D(D,0);else if(D.isDataArrayTexture||D.isCompressedArrayTexture)m.setTexture2DArray(D,0);else m.setTexture2D(D,0);B.unbindTexture()},this.resetState=function(){u=0,Q0=0,d=null,B.reset(),X0.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return CW}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let Q=this.getContext();Q.drawingBufferColorSpace=c0._getDrawingBufferColorSpace(J),Q.unpackColorSpace=c0._getUnpackColorSpace()}}function f9(J,Q=!1){let $=J[0].index!==null,W=new Set(Object.keys(J[0].attributes)),Z=new Set(Object.keys(J[0].morphAttributes)),H={},K={},Y=J[0].morphTargetsRelative,X=new FJ,U=0;for(let E=0;E<J.length;++E){let N=J[E],G=0;if($!==(N.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+E+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let q in N.attributes){if(!W.has(q))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+E+'. All geometries must have compatible attributes; make sure "'+q+'" attribute exists among all geometries, or in none of them.'),null;if(H[q]===void 0)H[q]=[];H[q].push(N.attributes[q]),G++}if(G!==W.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+E+". Make sure all geometries have the same number of attributes."),null;if(Y!==N.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+E+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let q in N.morphAttributes){if(!Z.has(q))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+E+".  .morphAttributes must be consistent throughout all geometries."),null;if(K[q]===void 0)K[q]=[];K[q].push(N.morphAttributes[q])}if(Q){let q;if($)q=N.index.count;else if(N.attributes.position!==void 0)q=N.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+E+". The geometry must have either an index or a position attribute"),null;X.addGroup(U,q,E),U+=q}}if($){let E=0,N=[];for(let G=0;G<J.length;++G){let q=J[G].index;for(let R=0;R<q.count;++R)N.push(q.getX(R)+E);E+=J[G].attributes.position.count}X.setIndex(N)}for(let E in H){let N=NY(H[E]);if(!N)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+E+" attribute."),null;X.setAttribute(E,N)}for(let E in K){let N=K[E][0].length;if(N===0)continue;X.morphAttributes=X.morphAttributes||{},X.morphAttributes[E]=[];for(let G=0;G<N;++G){let q=[];for(let k=0;k<K[E].length;++k)q.push(K[E][k][G]);let R=NY(q);if(!R)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+E+" morphAttribute."),null;X.morphAttributes[E].push(R)}}return X}function NY(J){let Q,$,W,Z=-1,H=0;for(let U=0;U<J.length;++U){let E=J[U];if(Q===void 0)Q=E.array.constructor;if(Q!==E.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if($===void 0)$=E.itemSize;if($!==E.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(W===void 0)W=E.normalized;if(W!==E.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(Z===-1)Z=E.gpuType;if(Z!==E.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;H+=E.count*$}let K=new Q(H),Y=new _J(K,$,W),X=0;for(let U=0;U<J.length;++U){let E=J[U];if(E.isInterleavedBufferAttribute){let N=X/$;for(let G=0,q=E.count;G<q;G++)for(let R=0;R<$;R++){let k=E.getComponent(G,R);Y.setComponent(G+N,R,k)}}else K.set(E.array,X);X+=E.count*$}if(Z!==void 0)Y.gpuType=Z;return Y}function HZ(J,Q){if(Q===DW)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),J;if(Q===C9||Q===Z7){let $=J.getIndex();if($===null){let H=[],K=J.getAttribute("position");if(K!==void 0){for(let Y=0;Y<K.count;Y++)H.push(Y);J.setIndex(H),$=J.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),J}let W=$.count-2,Z=[];if(Q===C9)for(let H=1;H<=W;H++)Z.push($.getX(0)),Z.push($.getX(H)),Z.push($.getX(H+1));else for(let H=0;H<W;H++)if(H%2===0)Z.push($.getX(H)),Z.push($.getX(H+1)),Z.push($.getX(H+2));else Z.push($.getX(H+2)),Z.push($.getX(H+1)),Z.push($.getX(H));if(Z.length/3!==W)console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");return J.setIndex(Z),J.clearGroups(),J}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",Q),J}function dQ(J){let Q=new Map,$=new Map,W=J.clone();return qY(J,W,function(Z,H){Q.set(H,Z),$.set(Z,H)}),W.traverse(function(Z){if(!Z.isSkinnedMesh)return;let H=Z,K=Q.get(Z),Y=K.skeleton.bones;H.skeleton=K.skeleton.clone(),H.bindMatrix.copy(K.bindMatrix),H.skeleton.bones=Y.map(function(X){return $.get(X)}),H.bind(H.skeleton,H.bindMatrix)}),W}function qY(J,Q,$){$(J,Q);for(let W=0;W<J.children.length;W++)qY(J.children[W],Q.children[W],$)}class NZ extends t8{constructor(J){super(J);this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(Q){return new kY(Q)}),this.register(function(Q){return new BY(Q)}),this.register(function(Q){return new SY(Q)}),this.register(function(Q){return new jY(Q)}),this.register(function(Q){return new vY(Q)}),this.register(function(Q){return new IY(Q)}),this.register(function(Q){return new wY(Q)}),this.register(function(Q){return new zY(Q)}),this.register(function(Q){return new PY(Q)}),this.register(function(Q){return new VY(Q)}),this.register(function(Q){return new _Y(Q)}),this.register(function(Q){return new CY(Q)}),this.register(function(Q){return new TY(Q)}),this.register(function(Q){return new AY(Q)}),this.register(function(Q){return new MY(Q)}),this.register(function(Q){return new UZ(Q,n0.EXT_MESHOPT_COMPRESSION)}),this.register(function(Q){return new UZ(Q,n0.KHR_MESHOPT_COMPRESSION)}),this.register(function(Q){return new yY(Q)})}load(J,Q,$,W){let Z=this,H;if(this.resourcePath!=="")H=this.resourcePath;else if(this.path!==""){let X=D6.extractUrlBase(J);H=D6.resolveURL(X,this.path)}else H=D6.extractUrlBase(J);this.manager.itemStart(J);let K=function(X){if(W)W(X);else console.error(X);Z.manager.itemError(J),Z.manager.itemEnd(J)},Y=new L7(this.manager);Y.setPath(this.path),Y.setResponseType("arraybuffer"),Y.setRequestHeader(this.requestHeader),Y.setWithCredentials(this.withCredentials),Y.load(J,function(X){try{Z.parse(X,H,function(U){Q(U),Z.manager.itemEnd(J)},K)}catch(U){K(U)}},$,K)}setDRACOLoader(J){return this.dracoLoader=J,this}setKTX2Loader(J){return this.ktx2Loader=J,this}setMeshoptDecoder(J){return this.meshoptDecoder=J,this}register(J){if(this.pluginCallbacks.indexOf(J)===-1)this.pluginCallbacks.push(J);return this}unregister(J){if(this.pluginCallbacks.indexOf(J)!==-1)this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(J),1);return this}parse(J,Q,$,W){let Z,H={},K={},Y=new TextDecoder;if(typeof J==="string")Z=JSON.parse(J);else if(J instanceof ArrayBuffer)if(Y.decode(new Uint8Array(J,0,4))===fY){try{H[n0.KHR_BINARY_GLTF]=new hY(J)}catch(E){if(W)W(E);return}Z=JSON.parse(H[n0.KHR_BINARY_GLTF].content)}else Z=JSON.parse(Y.decode(J));else Z=J;if(Z.asset===void 0||Z.asset.version[0]<2){if(W)W(Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let X=new lY(Z,{path:Q||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});X.fileLoader.setRequestHeader(this.requestHeader);for(let U=0;U<this.pluginCallbacks.length;U++){let E=this.pluginCallbacks[U](X);if(!E.name)console.error("THREE.GLTFLoader: Invalid plugin found: missing name");K[E.name]=E,H[E.name]=!0}if(Z.extensionsUsed)for(let U=0;U<Z.extensionsUsed.length;++U){let E=Z.extensionsUsed[U],N=Z.extensionsRequired||[];switch(E){case n0.KHR_MATERIALS_UNLIT:H[E]=new DY;break;case n0.KHR_DRACO_MESH_COMPRESSION:H[E]=new bY(Z,this.dracoLoader);break;case n0.KHR_TEXTURE_TRANSFORM:H[E]=new xY;break;case n0.KHR_MESH_QUANTIZATION:H[E]=new gY;break;default:if(N.indexOf(E)>=0&&K[E]===void 0)console.warn('THREE.GLTFLoader: Unknown extension "'+E+'".')}}X.setExtensions(H),X.setPlugins(K),X.parse($,W)}parseAsync(J,Q){let $=this;return new Promise(function(W,Z){$.parse(J,Q,W,Z)})}}function rN(){let J={};return{get:function(Q){return J[Q]},add:function(Q,$){J[Q]=$},remove:function(Q){delete J[Q]},removeAll:function(){J={}}}}function CJ(J,Q,$){let W=J.json.materials[Q];if(W.extensions&&W.extensions[$])return W.extensions[$];return null}var n0={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class MY{constructor(J){this.parser=J,this.name=n0.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let J=this.parser,Q=this.parser.json.nodes||[];for(let $=0,W=Q.length;$<W;$++){let Z=Q[$];if(Z.extensions&&Z.extensions[this.name]&&Z.extensions[this.name].light!==void 0)J._addNodeRef(this.cache,Z.extensions[this.name].light)}}_loadLight(J){let Q=this.parser,$="light:"+J,W=Q.cache.get($);if(W)return W;let Z=Q.json,Y=((Z.extensions&&Z.extensions[this.name]||{}).lights||[])[J],X,U=new j0(16777215);if(Y.color!==void 0)U.setRGB(Y.color[0],Y.color[1],Y.color[2],$8);let E=Y.range!==void 0?Y.range:0;switch(Y.type){case"directional":X=new d6(U),X.target.position.set(0,0,-1),X.add(X.target);break;case"point":X=new fQ(U),X.distance=E;break;case"spot":X=new yQ(U),X.distance=E,Y.spot=Y.spot||{},Y.spot.innerConeAngle=Y.spot.innerConeAngle!==void 0?Y.spot.innerConeAngle:0,Y.spot.outerConeAngle=Y.spot.outerConeAngle!==void 0?Y.spot.outerConeAngle:Math.PI/4,X.angle=Y.spot.outerConeAngle,X.penumbra=1-Y.spot.innerConeAngle/Y.spot.outerConeAngle,X.target.position.set(0,0,-1),X.add(X.target);break;default:throw Error("THREE.GLTFLoader: Unexpected light type: "+Y.type)}if(X.position.set(0,0,0),b8(X,Y),Y.intensity!==void 0)X.intensity=Y.intensity;return X.name=Q.createUniqueName(Y.name||"light_"+J),W=Promise.resolve(X),Q.cache.add($,W),W}getDependency(J,Q){if(J!=="light")return;return this._loadLight(Q)}createNodeAttachment(J){let Q=this,$=this.parser,Z=$.json.nodes[J],K=(Z.extensions&&Z.extensions[this.name]||{}).light;if(K===void 0)return null;return this._loadLight(K).then(function(Y){return $._getNodeRef(Q.cache,K,Y)})}}class DY{constructor(){this.name=n0.KHR_MATERIALS_UNLIT}getMaterialType(){return RJ}extendParams(J,Q,$){let W=[];J.color=new j0(1,1,1),J.opacity=1;let Z=Q.pbrMetallicRoughness;if(Z){if(Array.isArray(Z.baseColorFactor)){let H=Z.baseColorFactor;J.color.setRGB(H[0],H[1],H[2],$8),J.opacity=H[3]}if(Z.baseColorTexture!==void 0)W.push($.assignTexture(J,"map",Z.baseColorTexture,Q8))}return Promise.all(W)}}class VY{constructor(J){this.parser=J,this.name=n0.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(J,Q){let $=CJ(this.parser,J,this.name);if($===null)return Promise.resolve();if($.emissiveStrength!==void 0)Q.emissiveIntensity=$.emissiveStrength;return Promise.resolve()}}class kY{constructor(J){this.parser=J,this.name=n0.KHR_MATERIALS_CLEARCOAT}getMaterialType(J){return CJ(this.parser,J,this.name)!==null?K8:null}extendMaterialParams(J,Q){let $=CJ(this.parser,J,this.name);if($===null)return Promise.resolve();let W=[];if($.clearcoatFactor!==void 0)Q.clearcoat=$.clearcoatFactor;if($.clearcoatTexture!==void 0)W.push(this.parser.assignTexture(Q,"clearcoatMap",$.clearcoatTexture));if($.clearcoatRoughnessFactor!==void 0)Q.clearcoatRoughness=$.clearcoatRoughnessFactor;if($.clearcoatRoughnessTexture!==void 0)W.push(this.parser.assignTexture(Q,"clearcoatRoughnessMap",$.clearcoatRoughnessTexture));if($.clearcoatNormalTexture!==void 0){if(W.push(this.parser.assignTexture(Q,"clearcoatNormalMap",$.clearcoatNormalTexture)),$.clearcoatNormalTexture.scale!==void 0){let Z=$.clearcoatNormalTexture.scale;Q.clearcoatNormalScale=new y0(Z,Z)}}return Promise.all(W)}}class BY{constructor(J){this.parser=J,this.name=n0.KHR_MATERIALS_DISPERSION}getMaterialType(J){return CJ(this.parser,J,this.name)!==null?K8:null}extendMaterialParams(J,Q){let $=CJ(this.parser,J,this.name);if($===null)return Promise.resolve();return Q.dispersion=$.dispersion!==void 0?$.dispersion:0,Promise.resolve()}}class CY{constructor(J){this.parser=J,this.name=n0.KHR_MATERIALS_IRIDESCENCE}getMaterialType(J){return CJ(this.parser,J,this.name)!==null?K8:null}extendMaterialParams(J,Q){let $=CJ(this.parser,J,this.name);if($===null)return Promise.resolve();let W=[];if($.iridescenceFactor!==void 0)Q.iridescence=$.iridescenceFactor;if($.iridescenceTexture!==void 0)W.push(this.parser.assignTexture(Q,"iridescenceMap",$.iridescenceTexture));if($.iridescenceIor!==void 0)Q.iridescenceIOR=$.iridescenceIor;if(Q.iridescenceThicknessRange===void 0)Q.iridescenceThicknessRange=[100,400];if($.iridescenceThicknessMinimum!==void 0)Q.iridescenceThicknessRange[0]=$.iridescenceThicknessMinimum;if($.iridescenceThicknessMaximum!==void 0)Q.iridescenceThicknessRange[1]=$.iridescenceThicknessMaximum;if($.iridescenceThicknessTexture!==void 0)W.push(this.parser.assignTexture(Q,"iridescenceThicknessMap",$.iridescenceThicknessTexture));return Promise.all(W)}}class IY{constructor(J){this.parser=J,this.name=n0.KHR_MATERIALS_SHEEN}getMaterialType(J){return CJ(this.parser,J,this.name)!==null?K8:null}extendMaterialParams(J,Q){let $=CJ(this.parser,J,this.name);if($===null)return Promise.resolve();let W=[];if(Q.sheenColor=new j0(0,0,0),Q.sheenRoughness=0,Q.sheen=1,$.sheenColorFactor!==void 0){let Z=$.sheenColorFactor;Q.sheenColor.setRGB(Z[0],Z[1],Z[2],$8)}if($.sheenRoughnessFactor!==void 0)Q.sheenRoughness=$.sheenRoughnessFactor;if($.sheenColorTexture!==void 0)W.push(this.parser.assignTexture(Q,"sheenColorMap",$.sheenColorTexture,Q8));if($.sheenRoughnessTexture!==void 0)W.push(this.parser.assignTexture(Q,"sheenRoughnessMap",$.sheenRoughnessTexture));return Promise.all(W)}}class wY{constructor(J){this.parser=J,this.name=n0.KHR_MATERIALS_TRANSMISSION}getMaterialType(J){return CJ(this.parser,J,this.name)!==null?K8:null}extendMaterialParams(J,Q){let $=CJ(this.parser,J,this.name);if($===null)return Promise.resolve();let W=[];if($.transmissionFactor!==void 0)Q.transmission=$.transmissionFactor;if($.transmissionTexture!==void 0)W.push(this.parser.assignTexture(Q,"transmissionMap",$.transmissionTexture));return Promise.all(W)}}class zY{constructor(J){this.parser=J,this.name=n0.KHR_MATERIALS_VOLUME}getMaterialType(J){return CJ(this.parser,J,this.name)!==null?K8:null}extendMaterialParams(J,Q){let $=CJ(this.parser,J,this.name);if($===null)return Promise.resolve();let W=[];if(Q.thickness=$.thicknessFactor!==void 0?$.thicknessFactor:0,$.thicknessTexture!==void 0)W.push(this.parser.assignTexture(Q,"thicknessMap",$.thicknessTexture));Q.attenuationDistance=$.attenuationDistance||1/0;let Z=$.attenuationColor||[1,1,1];return Q.attenuationColor=new j0().setRGB(Z[0],Z[1],Z[2],$8),Promise.all(W)}}class PY{constructor(J){this.parser=J,this.name=n0.KHR_MATERIALS_IOR}getMaterialType(J){return CJ(this.parser,J,this.name)!==null?K8:null}extendMaterialParams(J,Q){let $=CJ(this.parser,J,this.name);if($===null)return Promise.resolve();if(Q.ior=$.ior!==void 0?$.ior:1.5,Q.ior===0)Q.ior=1000;return Promise.resolve()}}class _Y{constructor(J){this.parser=J,this.name=n0.KHR_MATERIALS_SPECULAR}getMaterialType(J){return CJ(this.parser,J,this.name)!==null?K8:null}extendMaterialParams(J,Q){let $=CJ(this.parser,J,this.name);if($===null)return Promise.resolve();let W=[];if(Q.specularIntensity=$.specularFactor!==void 0?$.specularFactor:1,$.specularTexture!==void 0)W.push(this.parser.assignTexture(Q,"specularIntensityMap",$.specularTexture));let Z=$.specularColorFactor||[1,1,1];if(Q.specularColor=new j0().setRGB(Z[0],Z[1],Z[2],$8),$.specularColorTexture!==void 0)W.push(this.parser.assignTexture(Q,"specularColorMap",$.specularColorTexture,Q8));return Promise.all(W)}}class AY{constructor(J){this.parser=J,this.name=n0.EXT_MATERIALS_BUMP}getMaterialType(J){return CJ(this.parser,J,this.name)!==null?K8:null}extendMaterialParams(J,Q){let $=CJ(this.parser,J,this.name);if($===null)return Promise.resolve();let W=[];if(Q.bumpScale=$.bumpFactor!==void 0?$.bumpFactor:1,$.bumpTexture!==void 0)W.push(this.parser.assignTexture(Q,"bumpMap",$.bumpTexture));return Promise.all(W)}}class TY{constructor(J){this.parser=J,this.name=n0.KHR_MATERIALS_ANISOTROPY}getMaterialType(J){return CJ(this.parser,J,this.name)!==null?K8:null}extendMaterialParams(J,Q){let $=CJ(this.parser,J,this.name);if($===null)return Promise.resolve();let W=[];if($.anisotropyStrength!==void 0)Q.anisotropy=$.anisotropyStrength;if($.anisotropyRotation!==void 0)Q.anisotropyRotation=$.anisotropyRotation;if($.anisotropyTexture!==void 0)W.push(this.parser.assignTexture(Q,"anisotropyMap",$.anisotropyTexture));return Promise.all(W)}}class SY{constructor(J){this.parser=J,this.name=n0.KHR_TEXTURE_BASISU}loadTexture(J){let Q=this.parser,$=Q.json,W=$.textures[J];if(!W.extensions||!W.extensions[this.name])return null;let Z=W.extensions[this.name],H=Q.options.ktx2Loader;if(!H)if($.extensionsRequired&&$.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");else return null;return Q.loadTextureImage(J,Z.source,H)}}class jY{constructor(J){this.parser=J,this.name=n0.EXT_TEXTURE_WEBP}loadTexture(J){let Q=this.name,$=this.parser,W=$.json,Z=W.textures[J];if(!Z.extensions||!Z.extensions[Q])return null;let H=Z.extensions[Q],K=W.images[H.source],Y=$.textureLoader;if(K.uri){let X=$.options.manager.getHandler(K.uri);if(X!==null)Y=X}return $.loadTextureImage(J,H.source,Y)}}class vY{constructor(J){this.parser=J,this.name=n0.EXT_TEXTURE_AVIF}loadTexture(J){let Q=this.name,$=this.parser,W=$.json,Z=W.textures[J];if(!Z.extensions||!Z.extensions[Q])return null;let H=Z.extensions[Q],K=W.images[H.source],Y=$.textureLoader;if(K.uri){let X=$.options.manager.getHandler(K.uri);if(X!==null)Y=X}return $.loadTextureImage(J,H.source,Y)}}class UZ{constructor(J,Q){this.name=Q,this.parser=J}loadBufferView(J){let Q=this.parser.json,$=Q.bufferViews[J];if($.extensions&&$.extensions[this.name]){let W=$.extensions[this.name],Z=this.parser.getDependency("buffer",W.buffer),H=this.parser.options.meshoptDecoder;if(!H||!H.supported)if(Q.extensionsRequired&&Q.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");else return null;return Z.then(function(K){let Y=W.byteOffset||0,X=W.byteLength||0,U=W.count,E=W.byteStride,N=new Uint8Array(K,Y,X);if(H.decodeGltfBufferAsync)return H.decodeGltfBufferAsync(U,E,N,W.mode,W.filter).then(function(G){return G.buffer});else return H.ready.then(function(){let G=new ArrayBuffer(U*E);return H.decodeGltfBuffer(new Uint8Array(G),U,E,N,W.mode,W.filter),G})})}else return null}}class yY{constructor(J){this.name=n0.EXT_MESH_GPU_INSTANCING,this.parser=J}createNodeMesh(J){let Q=this.parser.json,$=Q.nodes[J];if(!$.extensions||!$.extensions[this.name]||$.mesh===void 0)return null;let W=Q.meshes[$.mesh];for(let X of W.primitives)if(X.mode!==N8.TRIANGLES&&X.mode!==N8.TRIANGLE_STRIP&&X.mode!==N8.TRIANGLE_FAN&&X.mode!==void 0)return null;let H=$.extensions[this.name].attributes,K=[],Y={};for(let X in H)K.push(this.parser.getDependency("accessor",H[X]).then((U)=>{return Y[X]=U,Y[X]}));if(K.length<1)return null;return K.push(this.parser.createNodeMesh(J)),Promise.all(K).then((X)=>{let U=X.pop(),E=U.isGroup?U.children:[U],N=X[0].count,G=[];for(let q of E){let R=new b0,k=new h,F=new hJ,O=new h(1,1,1),z=new F6(q.geometry,q.material,N);for(let V=0;V<N;V++){if(Y.TRANSLATION)k.fromBufferAttribute(Y.TRANSLATION,V);if(Y.ROTATION)F.fromBufferAttribute(Y.ROTATION,V);if(Y.SCALE)O.fromBufferAttribute(Y.SCALE,V);z.setMatrixAt(V,R.compose(k,F,O))}let A=null;for(let V in Y)if(V==="_COLOR_0"){let I=Y[V];z.instanceColor=new N6(I.array,I.itemSize,I.normalized)}else if(V!=="TRANSLATION"&&V!=="ROTATION"&&V!=="SCALE"){if(A===null){let P=z.geometry;A=new FJ,A.name=P.name;for(let _ in P.attributes)A.setAttribute(_,P.attributes[_]);for(let _ in P.morphAttributes)A.morphAttributes[_]=P.morphAttributes[_];if(P.index!==null)A.setIndex(P.index);A.morphTargetsRelative=P.morphTargetsRelative;for(let _ of P.groups)A.addGroup(_.start,_.count,_.materialIndex);if(P.boundingBox!==null)A.boundingBox=P.boundingBox.clone();if(P.boundingSphere!==null)A.boundingSphere=P.boundingSphere.clone();A.drawRange.start=P.drawRange.start,A.drawRange.count=P.drawRange.count,A.userData=Object.assign({},P.userData),z.geometry=A}let I=Y[V];A.setAttribute(V,new N6(I.array,I.itemSize,I.normalized))}KJ.prototype.copy.call(z,q),this.parser.assignFinalMaterial(z),G.push(z)}if(U.isGroup)return U.clear(),U.add(...G),U;return G[0]})}}var fY="glTF",C7=12,FY={JSON:1313821514,BIN:5130562};class hY{constructor(J){this.name=n0.KHR_BINARY_GLTF,this.content=null,this.body=null;let Q=new DataView(J,0,C7),$=new TextDecoder;if(this.header={magic:$.decode(new Uint8Array(J.slice(0,4))),version:Q.getUint32(4,!0),length:Q.getUint32(8,!0)},this.header.magic!==fY)throw Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");else if(this.header.version<2)throw Error("THREE.GLTFLoader: Legacy binary file detected.");let W=this.header.length-C7,Z=new DataView(J,C7),H=0;while(H<W){let K=Z.getUint32(H,!0);H+=4;let Y=Z.getUint32(H,!0);if(H+=4,Y===FY.JSON){let X=new Uint8Array(J,C7+H,K);this.content=$.decode(X)}else if(Y===FY.BIN){let X=C7+H;this.body=J.slice(X,X+K)}H+=K}if(this.content===null)throw Error("THREE.GLTFLoader: JSON content not found.")}}class bY{constructor(J,Q){if(!Q)throw Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=n0.KHR_DRACO_MESH_COMPRESSION,this.json=J,this.dracoLoader=Q,this.dracoLoader.preload()}decodePrimitive(J,Q){let $=this.json,W=this.dracoLoader,Z=J.extensions[this.name].bufferView,H=J.extensions[this.name].attributes,K={},Y={},X={};for(let U in H){let E=EZ[U]||U.toLowerCase();K[E]=H[U]}for(let U in J.attributes){let E=EZ[U]||U.toLowerCase();if(H[U]!==void 0){let N=$.accessors[J.attributes[U]],G=h9[N.componentType];X[E]=G.name,Y[E]=N.normalized===!0}}return Q.getDependency("bufferView",Z).then(function(U){return new Promise(function(E,N){W.decodeDracoFile(U,function(G){for(let q in G.attributes){let R=G.attributes[q],k=Y[q];if(k!==void 0)R.normalized=k}E(G)},K,X,$8,N)})})}}class xY{constructor(){this.name=n0.KHR_TEXTURE_TRANSFORM}extendTexture(J,Q){if((Q.texCoord===void 0||Q.texCoord===J.channel)&&Q.offset===void 0&&Q.rotation===void 0&&Q.scale===void 0)return J;if(J=J.clone(),Q.texCoord!==void 0)J.channel=Q.texCoord;if(Q.offset!==void 0)J.offset.fromArray(Q.offset);if(Q.rotation!==void 0)J.rotation=Q.rotation;if(Q.scale!==void 0)J.repeat.fromArray(Q.scale);if(Q.rotation!==void 0){let $=Math.cos(J.rotation),W=Math.sin(J.rotation);J.matrix.set(J.repeat.x*$,J.repeat.y*W,J.offset.x,-J.repeat.x*W,J.repeat.y*$,J.offset.y,0,0,1),J.matrixAutoUpdate=!1}return J.needsUpdate=!0,J}}class gY{constructor(){this.name=n0.KHR_MESH_QUANTIZATION}}class qZ extends r8{constructor(J,Q,$,W){super(J,Q,$,W)}copySampleValue_(J){let Q=this.resultBuffer,$=this.sampleValues,W=this.valueSize,Z=J*W*3+W;for(let H=0;H!==W;H++)Q[H]=$[Z+H];return Q}interpolate_(J,Q,$,W){let Z=this.resultBuffer,H=this.sampleValues,K=this.valueSize,Y=K*2,X=K*3,U=W-Q,E=($-Q)/U,N=E*E,G=N*E,q=J*X,R=q-X,k=-2*G+3*N,F=G-N,O=1-k,z=F-N+E;for(let A=0;A!==K;A++){let V=H[R+A+K],I=H[R+A+Y]*U,P=H[q+A+K],_=H[q+A]*U;Z[A]=O*V+z*I+k*P+F*_}return Z}}var tN=new hJ;class pY extends qZ{interpolate_(J,Q,$,W){let Z=super.interpolate_(J,Q,$,W);return tN.fromArray(Z).normalize().toArray(Z),Z}}var N8={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},h9={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},OY={9728:B8,9729:vJ,9984:UQ,9985:k9,9986:S6,9987:S8},RY={33071:V9,33648:XQ,10497:o8},KZ={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},EZ={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},V6={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},eN={CUBICSPLINE:void 0,LINEAR:RQ,STEP:MW},YZ={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function J1(J){if(J.DefaultMaterial===void 0)J.DefaultMaterial=new H8({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:A8});return J.DefaultMaterial}function c6(J,Q,$){for(let W in $.extensions)if(J[W]===void 0)Q.userData.gltfExtensions=Q.userData.gltfExtensions||{},Q.userData.gltfExtensions[W]=$.extensions[W]}function b8(J,Q){if(Q.extras!==void 0)if(typeof Q.extras==="object")Object.assign(J.userData,Q.extras);else console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+Q.extras)}function Q1(J,Q,$){let W=!1,Z=!1,H=!1;for(let U=0,E=Q.length;U<E;U++){let N=Q[U];if(N.POSITION!==void 0)W=!0;if(N.NORMAL!==void 0)Z=!0;if(N.COLOR_0!==void 0)H=!0;if(W&&Z&&H)break}if(!W&&!Z&&!H)return Promise.resolve(J);let K=[],Y=[],X=[];for(let U=0,E=Q.length;U<E;U++){let N=Q[U];if(W){let G=N.POSITION!==void 0?$.getDependency("accessor",N.POSITION):J.attributes.position;K.push(G)}if(Z){let G=N.NORMAL!==void 0?$.getDependency("accessor",N.NORMAL):J.attributes.normal;Y.push(G)}if(H){let G=N.COLOR_0!==void 0?$.getDependency("accessor",N.COLOR_0):J.attributes.color;X.push(G)}}return Promise.all([Promise.all(K),Promise.all(Y),Promise.all(X)]).then(function(U){let E=U[0],N=U[1],G=U[2];if(W)J.morphAttributes.position=E;if(Z)J.morphAttributes.normal=N;if(H)J.morphAttributes.color=G;return J.morphTargetsRelative=!0,J})}function $1(J,Q){if(J.updateMorphTargets(),Q.weights!==void 0)for(let $=0,W=Q.weights.length;$<W;$++)J.morphTargetInfluences[$]=Q.weights[$];if(Q.extras&&Array.isArray(Q.extras.targetNames)){let $=Q.extras.targetNames;if(J.morphTargetInfluences.length===$.length){J.morphTargetDictionary={};for(let W=0,Z=$.length;W<Z;W++)J.morphTargetDictionary[$[W]]=W}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function W1(J){let Q,$=J.extensions&&J.extensions[n0.KHR_DRACO_MESH_COMPRESSION];if($)Q="draco:"+$.bufferView+":"+$.indices+":"+XZ($.attributes);else Q=J.indices+":"+XZ(J.attributes)+":"+J.mode;if(J.targets!==void 0)for(let W=0,Z=J.targets.length;W<Z;W++)Q+=":"+XZ(J.targets[W]);return Q}function XZ(J){let Q="",$=Object.keys(J).sort();for(let W=0,Z=$.length;W<Z;W++)Q+=$[W]+":"+J[$[W]]+";";return Q}function GZ(J){switch(J){case Int8Array:return 0.007874015748031496;case Uint8Array:return 0.00392156862745098;case Int16Array:return 0.00003051850947599719;case Uint16Array:return 0.000015259021896696422;default:throw Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Z1(J){if(J.search(/\.jpe?g($|\?)/i)>0||J.search(/^data\:image\/jpeg/)===0)return"image/jpeg";if(J.search(/\.webp($|\?)/i)>0||J.search(/^data\:image\/webp/)===0)return"image/webp";if(J.search(/\.ktx2($|\?)/i)>0||J.search(/^data\:image\/ktx2/)===0)return"image/ktx2";return"image/png"}var H1=new b0;class lY{constructor(J={},Q={}){this.json=J,this.extensions={},this.plugins={},this.options=Q,this.cache=new rN,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let $=!1,W=-1,Z=!1,H=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let K=navigator.userAgent;$=/^((?!chrome|android).)*safari/i.test(K)===!0;let Y=K.match(/Version\/(\d+)/);W=$&&Y?parseInt(Y[1],10):-1,Z=K.indexOf("Firefox")>-1,H=Z?K.match(/Firefox\/([0-9]+)\./)[1]:-1}if(typeof createImageBitmap>"u"||$&&W<17||Z&&H<98)this.textureLoader=new T9(this.options.manager);else this.textureLoader=new hQ(this.options.manager);if(this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new L7(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials")this.fileLoader.setWithCredentials(!0)}setExtensions(J){this.extensions=J}setPlugins(J){this.plugins=J}parse(J,Q){let $=this,W=this.json,Z=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(H){return H._markDefs&&H._markDefs()}),Promise.all(this._invokeAll(function(H){return H.beforeRoot&&H.beforeRoot()})).then(function(){return Promise.all([$.getDependencies("scene"),$.getDependencies("animation"),$.getDependencies("camera")])}).then(function(H){let K={scene:H[0][W.scene||0],scenes:H[0],animations:H[1],cameras:H[2],asset:W.asset,parser:$,userData:{}};return c6(Z,K,W),b8(K,W),Promise.all($._invokeAll(function(Y){return Y.afterRoot&&Y.afterRoot(K)})).then(function(){for(let Y of K.scenes)Y.updateMatrixWorld();J(K)})}).catch(Q)}_markDefs(){let J=this.json.nodes||[],Q=this.json.skins||[],$=this.json.meshes||[];for(let W=0,Z=Q.length;W<Z;W++){let H=Q[W].joints;for(let K=0,Y=H.length;K<Y;K++)J[H[K]].isBone=!0}for(let W=0,Z=J.length;W<Z;W++){let H=J[W];if(H.mesh!==void 0){if(this._addNodeRef(this.meshCache,H.mesh),H.skin!==void 0)$[H.mesh].isSkinnedMesh=!0}if(H.camera!==void 0)this._addNodeRef(this.cameraCache,H.camera)}}_addNodeRef(J,Q){if(Q===void 0)return;if(J.refs[Q]===void 0)J.refs[Q]=J.uses[Q]=0;J.refs[Q]++}_getNodeRef(J,Q,$){if(J.refs[Q]<=1)return $;let W=$.clone(),Z=(H,K)=>{let Y=this.associations.get(H);if(Y!=null)this.associations.set(K,Y);for(let[X,U]of H.children.entries())Z(U,K.children[X])};return Z($,W),W.name+="_instance_"+J.uses[Q]++,W}_invokeOne(J){let Q=Object.values(this.plugins);Q.push(this);for(let $=0;$<Q.length;$++){let W=J(Q[$]);if(W)return W}return null}_invokeAll(J){let Q=Object.values(this.plugins);Q.unshift(this);let $=[];for(let W=0;W<Q.length;W++){let Z=J(Q[W]);if(Z)$.push(Z)}return $}getDependency(J,Q){let $=J+":"+Q,W=this.cache.get($);if(!W){switch(J){case"scene":W=this.loadScene(Q);break;case"node":W=this._invokeOne(function(Z){return Z.loadNode&&Z.loadNode(Q)});break;case"mesh":W=this._invokeOne(function(Z){return Z.loadMesh&&Z.loadMesh(Q)});break;case"accessor":W=this.loadAccessor(Q);break;case"bufferView":W=this._invokeOne(function(Z){return Z.loadBufferView&&Z.loadBufferView(Q)});break;case"buffer":W=this.loadBuffer(Q);break;case"material":W=this._invokeOne(function(Z){return Z.loadMaterial&&Z.loadMaterial(Q)});break;case"texture":W=this._invokeOne(function(Z){return Z.loadTexture&&Z.loadTexture(Q)});break;case"skin":W=this.loadSkin(Q);break;case"animation":W=this._invokeOne(function(Z){return Z.loadAnimation&&Z.loadAnimation(Q)});break;case"camera":W=this.loadCamera(Q);break;default:if(W=this._invokeOne(function(Z){return Z!=this&&Z.getDependency&&Z.getDependency(J,Q)}),!W)throw Error("Unknown type: "+J);break}this.cache.add($,W)}return W}getDependencies(J){let Q=this.cache.get(J);if(!Q){let $=this,W=this.json[J+(J==="mesh"?"es":"s")]||[];Q=Promise.all(W.map(function(Z,H){return $.getDependency(J,H)})),this.cache.add(J,Q)}return Q}loadBuffer(J){let Q=this.json.buffers[J],$=this.fileLoader;if(Q.type&&Q.type!=="arraybuffer")throw Error("THREE.GLTFLoader: "+Q.type+" buffer type is not supported.");if(Q.uri===void 0&&J===0)return Promise.resolve(this.extensions[n0.KHR_BINARY_GLTF].body);let W=this.options;return new Promise(function(Z,H){$.load(D6.resolveURL(Q.uri,W.path),Z,void 0,function(){H(Error('THREE.GLTFLoader: Failed to load buffer "'+Q.uri+'".'))})})}loadBufferView(J){let Q=this.json.bufferViews[J];return this.getDependency("buffer",Q.buffer).then(function($){let W=Q.byteLength||0,Z=Q.byteOffset||0;return $.slice(Z,Z+W)})}loadAccessor(J){let Q=this,$=this.json,W=this.json.accessors[J];if(W.bufferView===void 0&&W.sparse===void 0){let H=KZ[W.type],K=h9[W.componentType],Y=W.normalized===!0,X=new K(W.count*H);return Promise.resolve(new _J(X,H,Y))}let Z=[];if(W.bufferView!==void 0)Z.push(this.getDependency("bufferView",W.bufferView));else Z.push(null);if(W.sparse!==void 0)Z.push(this.getDependency("bufferView",W.sparse.indices.bufferView)),Z.push(this.getDependency("bufferView",W.sparse.values.bufferView));return Promise.all(Z).then(function(H){let K=H[0],Y=KZ[W.type],X=h9[W.componentType],U=X.BYTES_PER_ELEMENT,E=U*Y,N=W.byteOffset||0,G=W.bufferView!==void 0?$.bufferViews[W.bufferView].byteStride:void 0,q=W.normalized===!0,R,k;if(G&&G!==E){let F=Math.floor(N/G),O="InterleavedBuffer:"+W.bufferView+":"+W.componentType+":"+F+":"+W.count,z=Q.cache.get(O);if(!z)R=new X(K,F*G,W.count*G/U),z=new I9(R,G/U),Q.cache.add(O,z);k=new G6(z,Y,N%G/U,q)}else{if(K===null)R=new X(W.count*Y);else R=new X(K,N,W.count*Y);k=new _J(R,Y,q)}if(W.sparse!==void 0){let F=KZ.SCALAR,O=h9[W.sparse.indices.componentType],z=W.sparse.indices.byteOffset||0,A=W.sparse.values.byteOffset||0,V=new O(H[1],z,W.sparse.count*F),I=new X(H[2],A,W.sparse.count*Y);if(K!==null)k=new _J(k.array.slice(),k.itemSize,k.normalized);k.normalized=!1;for(let P=0,_=V.length;P<_;P++){let M=V[P];if(k.setX(M,I[P*Y]),Y>=2)k.setY(M,I[P*Y+1]);if(Y>=3)k.setZ(M,I[P*Y+2]);if(Y>=4)k.setW(M,I[P*Y+3]);if(Y>=5)throw Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}k.normalized=q}return k})}loadTexture(J){let Q=this.json,$=this.options,Z=Q.textures[J].source,H=Q.images[Z],K=this.textureLoader;if(H.uri){let Y=$.manager.getHandler(H.uri);if(Y!==null)K=Y}return this.loadTextureImage(J,Z,K)}loadTextureImage(J,Q,$){let W=this,Z=this.json,H=Z.textures[J],K=Z.images[Q],Y=(K.uri||K.bufferView)+":"+H.sampler;if(this.textureCache[Y])return this.textureCache[Y];let X=this.loadImageSource(Q,$).then(function(U){if(U.flipY=!1,U.name=H.name||K.name||"",U.name===""&&typeof K.uri==="string"&&K.uri.startsWith("data:image/")===!1)U.name=K.uri;let N=(Z.samplers||{})[H.sampler]||{};return U.magFilter=OY[N.magFilter]||vJ,U.minFilter=OY[N.minFilter]||S8,U.wrapS=RY[N.wrapS]||o8,U.wrapT=RY[N.wrapT]||o8,U.generateMipmaps=!U.isCompressedTexture&&U.minFilter!==B8&&U.minFilter!==vJ,W.associations.set(U,{textures:J}),U}).catch(function(){return null});return this.textureCache[Y]=X,X}loadImageSource(J,Q){let $=this,W=this.json,Z=this.options;if(this.sourceCache[J]!==void 0)return this.sourceCache[J].then((E)=>E.clone());let H=W.images[J],K=self.URL||self.webkitURL,Y=H.uri||"",X=!1;if(H.bufferView!==void 0)Y=$.getDependency("bufferView",H.bufferView).then(function(E){X=!0;let N=new Blob([E],{type:H.mimeType});return Y=K.createObjectURL(N),Y});else if(H.uri===void 0)throw Error("THREE.GLTFLoader: Image "+J+" is missing URI and bufferView");let U=Promise.resolve(Y).then(function(E){return new Promise(function(N,G){let q=N;if(Q.isImageBitmapLoader===!0)q=function(R){let k=new BJ(R);k.needsUpdate=!0,N(k)};Q.load(D6.resolveURL(E,Z.path),q,void 0,G)})}).then(function(E){if(X===!0)K.revokeObjectURL(Y);return b8(E,H),E.userData.mimeType=H.mimeType||Z1(H.uri),E}).catch(function(E){throw console.error("THREE.GLTFLoader: Couldn't load texture",Y),E});return this.sourceCache[J]=U,U}assignTexture(J,Q,$,W){let Z=this;return this.getDependency("texture",$.index).then(function(H){if(!H)return null;if($.texCoord!==void 0&&$.texCoord>0)H=H.clone(),H.channel=$.texCoord;if(Z.extensions[n0.KHR_TEXTURE_TRANSFORM]){let K=$.extensions!==void 0?$.extensions[n0.KHR_TEXTURE_TRANSFORM]:void 0;if(K){let Y=Z.associations.get(H);H=Z.extensions[n0.KHR_TEXTURE_TRANSFORM].extendTexture(H,K),Z.associations.set(H,Y)}}if(W!==void 0)H.colorSpace=W;return J[Q]=H,H})}assignFinalMaterial(J){let{geometry:Q,material:$}=J,W=Q.attributes.tangent===void 0,Z=Q.attributes.color!==void 0,H=Q.attributes.normal===void 0;if(J.isPoints){let K="PointsMaterial:"+$.uuid,Y=this.cache.get(K);if(!Y)Y=new O7,oJ.prototype.copy.call(Y,$),Y.color.copy($.color),Y.map=$.map,Y.sizeAttenuation=!1,this.cache.add(K,Y);$=Y}else if(J.isLine){let K="LineBasicMaterial:"+$.uuid,Y=this.cache.get(K);if(!Y)Y=new F7,oJ.prototype.copy.call(Y,$),Y.color.copy($.color),Y.map=$.map,this.cache.add(K,Y);$=Y}if(W||Z||H){let K="ClonedMaterial:"+$.uuid+":";if(W)K+="derivative-tangents:";if(Z)K+="vertex-colors:";if(H)K+="flat-shading:";let Y=this.cache.get(K);if(!Y){if(Y=$.clone(),Z)Y.vertexColors=!0;if(H)Y.flatShading=!0;if(W){if(Y.normalScale)Y.normalScale.y*=-1;if(Y.clearcoatNormalScale)Y.clearcoatNormalScale.y*=-1}this.cache.add(K,Y),this.associations.set(Y,this.associations.get($))}$=Y}J.material=$}getMaterialType(){return H8}loadMaterial(J){let Q=this,$=this.json,W=this.extensions,Z=$.materials[J],H,K={},Y=Z.extensions||{},X=[];if(Y[n0.KHR_MATERIALS_UNLIT]){let E=W[n0.KHR_MATERIALS_UNLIT];H=E.getMaterialType(),X.push(E.extendParams(K,Z,Q))}else{let E=Z.pbrMetallicRoughness||{};if(K.color=new j0(1,1,1),K.opacity=1,Array.isArray(E.baseColorFactor)){let N=E.baseColorFactor;K.color.setRGB(N[0],N[1],N[2],$8),K.opacity=N[3]}if(E.baseColorTexture!==void 0)X.push(Q.assignTexture(K,"map",E.baseColorTexture,Q8));if(K.metalness=E.metallicFactor!==void 0?E.metallicFactor:1,K.roughness=E.roughnessFactor!==void 0?E.roughnessFactor:1,E.metallicRoughnessTexture!==void 0)X.push(Q.assignTexture(K,"metalnessMap",E.metallicRoughnessTexture)),X.push(Q.assignTexture(K,"roughnessMap",E.metallicRoughnessTexture));H=this._invokeOne(function(N){return N.getMaterialType&&N.getMaterialType(J)}),X.push(Promise.all(this._invokeAll(function(N){return N.extendMaterialParams&&N.extendMaterialParams(J,K)})))}if(Z.doubleSided===!0)K.side=AJ;let U=Z.alphaMode||YZ.OPAQUE;if(U===YZ.BLEND)K.transparent=!0,K.depthWrite=!1;else if(K.transparent=!1,U===YZ.MASK)K.alphaTest=Z.alphaCutoff!==void 0?Z.alphaCutoff:0.5;if(Z.normalTexture!==void 0&&H!==RJ){if(X.push(Q.assignTexture(K,"normalMap",Z.normalTexture)),K.normalScale=new y0(1,1),Z.normalTexture.scale!==void 0){let E=Z.normalTexture.scale;K.normalScale.set(E,E)}}if(Z.occlusionTexture!==void 0&&H!==RJ){if(X.push(Q.assignTexture(K,"aoMap",Z.occlusionTexture)),Z.occlusionTexture.strength!==void 0)K.aoMapIntensity=Z.occlusionTexture.strength}if(Z.emissiveFactor!==void 0&&H!==RJ){let E=Z.emissiveFactor;K.emissive=new j0().setRGB(E[0],E[1],E[2],$8)}if(Z.emissiveTexture!==void 0&&H!==RJ)X.push(Q.assignTexture(K,"emissiveMap",Z.emissiveTexture,Q8));return Promise.all(X).then(function(){let E=new H(K);if(Z.name)E.name=Z.name;if(b8(E,Z),Q.associations.set(E,{materials:J}),Z.extensions)c6(W,E,Z);return E})}createUniqueName(J){let Q=t0.sanitizeNodeName(J||"");if(Q in this.nodeNamesUsed)return Q+"_"+ ++this.nodeNamesUsed[Q];else return this.nodeNamesUsed[Q]=0,Q}loadGeometries(J){let Q=this,$=this.extensions,W=this.primitiveCache;function Z(K){return $[n0.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(K,Q).then(function(Y){return LY(Y,K,Q)})}let H=[];for(let K=0,Y=J.length;K<Y;K++){let X=J[K],U=W1(X),E=W[U];if(E)H.push(E.promise);else{let N;if(X.extensions&&X.extensions[n0.KHR_DRACO_MESH_COMPRESSION])N=Z(X);else N=LY(new FJ,X,Q);if(X.mode===N8.TRIANGLE_STRIP)N=N.then((G)=>HZ(G,Z7));else if(X.mode===N8.TRIANGLE_FAN)N=N.then((G)=>HZ(G,C9));W[U]={primitive:X,promise:N},H.push(N)}}return Promise.all(H)}loadMesh(J){let Q=this,$=this.json,W=this.extensions,Z=$.meshes[J],H=Z.primitives,K=[];for(let Y=0,X=H.length;Y<X;Y++){let U=H[Y].material===void 0?J1(this.cache):this.getDependency("material",H[Y].material);K.push(U)}return K.push(Q.loadGeometries(H)),Promise.all(K).then(async function(Y){let X=Y.slice(0,Y.length-1),U=Y[Y.length-1],E=[];for(let G=0,q=U.length;G<q;G++){let R=U[G],k=H[G],F,O=X[G];if(k.mode===N8.TRIANGLES||k.mode===N8.TRIANGLE_STRIP||k.mode===N8.TRIANGLE_FAN||k.mode===void 0){let z=Z.isSkinnedMesh===!0,A=R.hasAttribute("skinIndex")&&R.hasAttribute("skinWeight");if(z&&A===!1)console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled.");if(F=z&&A?new IQ(R,O):new o0(R,O),F.isSkinnedMesh===!0)F.normalizeSkinWeights()}else if(k.mode===N8.LINES)F=new wQ(R,O);else if(k.mode===N8.LINE_STRIP)F=new w9(R,O);else if(k.mode===N8.LINE_LOOP)F=new zQ(R,O);else if(k.mode===N8.POINTS)F=new PQ(R,O);else throw Error("THREE.GLTFLoader: Primitive mode unsupported: "+k.mode);if(Object.keys(F.geometry.morphAttributes).length>0)$1(F,Z);if(F.name=Q.createUniqueName(Z.name||"mesh_"+J),b8(F,Z),k.extensions)c6(W,F,k);Q.assignFinalMaterial(F),E.push(F)}for(let G=0,q=E.length;G<q;G++)Q.associations.set(E[G],{meshes:J,primitives:G});if(E.length===1){if(Z.extensions)c6(W,E[0],Z);return E[0]}let N=new sJ;if(Z.extensions)c6(W,N,Z);Q.associations.set(N,{meshes:J});for(let G=0,q=E.length;G<q;G++)N.add(E[G]);return N})}loadCamera(J){let Q,$=this.json.cameras[J],W=$[$.type];if(!W){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}if($.type==="perspective")Q=new PJ(wW.radToDeg(W.yfov),W.aspectRatio||1,W.znear||1,W.zfar||2000000);else if($.type==="orthographic")Q=new m6(-W.xmag,W.xmag,W.ymag,-W.ymag,W.znear,W.zfar);if($.name)Q.name=this.createUniqueName($.name);return b8(Q,$),Promise.resolve(Q)}loadSkin(J){let Q=this.json.skins[J],$=[];for(let W=0,Z=Q.joints.length;W<Z;W++)$.push(this._loadNodeShallow(Q.joints[W]));if(Q.inverseBindMatrices!==void 0)$.push(this.getDependency("accessor",Q.inverseBindMatrices));else $.push(null);return Promise.all($).then(function(W){let Z=W.pop(),H=W,K=[],Y=[];for(let X=0,U=H.length;X<U;X++){let E=H[X];if(E){K.push(E);let N=new b0;if(Z!==null)N.fromArray(Z.array,X*16);Y.push(N)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',Q.joints[X])}return new N7(K,Y)})}loadAnimation(J){let Q=this.json,$=this,W=Q.animations[J],Z=W.name?W.name:"animation_"+J,H=[],K=[],Y=[],X=[],U=[];for(let E=0,N=W.channels.length;E<N;E++){let G=W.channels[E],q=W.samplers[G.sampler],R=G.target,k=R.node,F=W.parameters!==void 0?W.parameters[q.input]:q.input,O=W.parameters!==void 0?W.parameters[q.output]:q.output;if(R.node===void 0)continue;H.push(this.getDependency("node",k)),K.push(this.getDependency("accessor",F)),Y.push(this.getDependency("accessor",O)),X.push(q),U.push(R)}return Promise.all([Promise.all(H),Promise.all(K),Promise.all(Y),Promise.all(X),Promise.all(U)]).then(function(E){let N=E[0],G=E[1],q=E[2],R=E[3],k=E[4],F=[];for(let z=0,A=N.length;z<A;z++){let V=N[z],I=G[z],P=q[z],_=R[z],M=k[z];if(V===void 0)continue;if(V.updateMatrix)V.updateMatrix();let C=$._createAnimationTracks(V,I,P,_,M);if(C)for(let l=0;l<C.length;l++)F.push(C[l])}let O=new R9(Z,void 0,F);return b8(O,W),O})}createNodeMesh(J){let Q=this.json,$=this,W=Q.nodes[J];if(W.mesh===void 0)return null;return $.getDependency("mesh",W.mesh).then(function(Z){let H=$._getNodeRef($.meshCache,W.mesh,Z);if(W.weights!==void 0)H.traverse(function(K){if(!K.isMesh)return;for(let Y=0,X=W.weights.length;Y<X;Y++)K.morphTargetInfluences[Y]=W.weights[Y]});return H})}loadNode(J){let Q=this.json,$=this,W=Q.nodes[J],Z=$._loadNodeShallow(J),H=[],K=W.children||[];for(let X=0,U=K.length;X<U;X++)H.push($.getDependency("node",K[X]));let Y=W.skin===void 0?Promise.resolve(null):$.getDependency("skin",W.skin);return Promise.all([Z,Promise.all(H),Y]).then(function(X){let U=X[0],E=X[1],N=X[2];if(N!==null)U.traverse(function(G){if(!G.isSkinnedMesh)return;G.bind(N,H1)});for(let G=0,q=E.length;G<q;G++)U.add(E[G]);if(U.userData.pivot!==void 0&&E.length>0){let G=U.userData.pivot,q=E[0];U.pivot=new h().fromArray(G),U.position.x-=G[0],U.position.y-=G[1],U.position.z-=G[2],q.position.set(0,0,0),delete U.userData.pivot}return U})}_loadNodeShallow(J){let Q=this.json,$=this.extensions,W=this;if(this.nodeCache[J]!==void 0)return this.nodeCache[J];let Z=Q.nodes[J],H=Z.name?W.createUniqueName(Z.name):"",K=[],Y=W._invokeOne(function(X){return X.createNodeMesh&&X.createNodeMesh(J)});if(Y)K.push(Y);if(Z.camera!==void 0)K.push(W.getDependency("camera",Z.camera).then(function(X){return W._getNodeRef(W.cameraCache,Z.camera,X)}));return W._invokeAll(function(X){return X.createNodeAttachment&&X.createNodeAttachment(J)}).forEach(function(X){K.push(X)}),this.nodeCache[J]=Promise.all(K).then(function(X){let U;if(Z.isBone===!0)U=new E7;else if(X.length>1)U=new sJ;else if(X.length===1)U=X[0];else U=new KJ;if(U!==X[0])for(let E=0,N=X.length;E<N;E++)U.add(X[E]);if(Z.name)U.userData.name=Z.name,U.name=H;if(b8(U,Z),Z.extensions)c6($,U,Z);if(Z.matrix!==void 0){let E=new b0;E.fromArray(Z.matrix),U.applyMatrix4(E)}else{if(Z.translation!==void 0)U.position.fromArray(Z.translation);if(Z.rotation!==void 0)U.quaternion.fromArray(Z.rotation);if(Z.scale!==void 0)U.scale.fromArray(Z.scale)}if(!W.associations.has(U))W.associations.set(U,{});else if(Z.mesh!==void 0&&W.meshCache.refs[Z.mesh]>1){let E=W.associations.get(U);W.associations.set(U,{...E})}return W.associations.get(U).nodes=J,U}),this.nodeCache[J]}loadScene(J){let Q=this.extensions,$=this.json.scenes[J],W=this,Z=new sJ;if($.name)Z.name=W.createUniqueName($.name);if(b8(Z,$),$.extensions)c6(Q,Z,$);let H=$.nodes||[],K=[];for(let Y=0,X=H.length;Y<X;Y++)K.push(W.getDependency("node",H[Y]));return Promise.all(K).then(function(Y){for(let U=0,E=Y.length;U<E;U++){let N=Y[U];if(N.parent!==null)Z.add(dQ(N));else Z.add(N)}let X=(U)=>{let E=new Map;for(let[N,G]of W.associations)if(N instanceof oJ||N instanceof BJ)E.set(N,G);return U.traverse((N)=>{let G=W.associations.get(N);if(G!=null)E.set(N,G)}),E};return W.associations=X(Z),Z})}_createAnimationTracks(J,Q,$,W,Z){let H=[],K=J.name?J.name:J.uuid,Y=[];function X(G){if(G.morphTargetInfluences)Y.push(G.name?G.name:G.uuid)}if(V6[Z.path]===V6.weights){if(X(J),J.isGroup)J.children.forEach(X)}else Y.push(K);let U;switch(V6[Z.path]){case V6.weights:U=R6;break;case V6.rotation:U=L6;break;case V6.translation:case V6.scale:U=l6;break;default:switch($.itemSize){case 1:U=R6;break;case 2:case 3:default:U=l6;break}break}let E=W.interpolation!==void 0?eN[W.interpolation]:RQ,N=this._getArrayFromAccessor($);for(let G=0,q=Y.length;G<q;G++){let R=new U(Y[G]+"."+V6[Z.path],Q.array,N,E);if(W.interpolation==="CUBICSPLINE")this._createCubicSplineTrackInterpolant(R);H.push(R)}return H}_getArrayFromAccessor(J){let Q=J.array;if(J.normalized){let $=GZ(Q.constructor),W=new Float32Array(Q.length);for(let Z=0,H=Q.length;Z<H;Z++)W[Z]=Q[Z]*$;Q=W}return Q}_createCubicSplineTrackInterpolant(J){J.createInterpolant=function($){return new(this instanceof L6?pY:qZ)(this.times,this.values,this.getValueSize()/3,$)},J.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function K1(J,Q,$){let W=Q.attributes,Z=new iJ;if(W.POSITION!==void 0){let Y=$.json.accessors[W.POSITION],X=Y.min,U=Y.max;if(X!==void 0&&U!==void 0){if(Z.set(new h(X[0],X[1],X[2]),new h(U[0],U[1],U[2])),Y.normalized){let E=GZ(h9[Y.componentType]);Z.min.multiplyScalar(E),Z.max.multiplyScalar(E)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let H=Q.targets;if(H!==void 0){let Y=new h,X=new h;for(let U=0,E=H.length;U<E;U++){let N=H[U];if(N.POSITION!==void 0){let G=$.json.accessors[N.POSITION],q=G.min,R=G.max;if(q!==void 0&&R!==void 0){if(X.setX(Math.max(Math.abs(q[0]),Math.abs(R[0]))),X.setY(Math.max(Math.abs(q[1]),Math.abs(R[1]))),X.setZ(Math.max(Math.abs(q[2]),Math.abs(R[2]))),G.normalized){let k=GZ(h9[G.componentType]);X.multiplyScalar(k)}Y.max(X)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}Z.expandByVector(Y)}J.boundingBox=Z;let K=new Z8;Z.getCenter(K.center),K.radius=Z.min.distanceTo(Z.max)/2,J.boundingSphere=K}function LY(J,Q,$){let W=Q.attributes,Z=[];function H(K,Y){return $.getDependency("accessor",K).then(function(X){J.setAttribute(Y,X)})}for(let K in W){let Y=EZ[K]||K.toLowerCase();if(Y in J.attributes)continue;Z.push(H(W[K],Y))}if(Q.indices!==void 0&&!J.index){let K=$.getDependency("accessor",Q.indices).then(function(Y){J.setIndex(Y)});Z.push(K)}if(c0.workingColorSpace!==$8&&"COLOR_0"in W)console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${c0.workingColorSpace}" not supported.`);return b8(J,Q),K1(J,Q,$),Promise.all(Z).then(function(){return Q.targets!==void 0?Q1(J,Q.targets,$):J})}var dJ=h;async function mY(J,Q){let $=new ZZ({canvas:J,antialias:!0,powerPreference:"high-performance"});$.setPixelRatio(Math.min(devicePixelRatio,1.5)),$.setSize(innerWidth,innerHeight),$.shadowMap.enabled=!0,$.shadowMap.type=HQ,$.outputColorSpace=Q8,$.toneMapping=Q7,$.toneMappingExposure=1.15;let W=new VQ;W.background=new j0("#a8cbdc"),W.fog=new X7("#b1c9d1",95,210);let Z=new PJ(57,innerWidth/innerHeight,0.1,240);Z.position.set(-4,3.8,-33),W.add(new jQ("#d4eaff","#536635",2.25));let H=new d6("#fff3d7",3.5);H.position.set(-35,48,-28),H.castShadow=!0,H.shadow.mapSize.set(1024,1024),H.shadow.camera.left=-30,H.shadow.camera.right=30,H.shadow.camera.top=38,H.shadow.camera.bottom=-38,H.shadow.camera.near=1,H.shadow.camera.far=160,H.shadow.bias=-0.0003,H.shadow.normalBias=0.025,H.shadow.radius=3,W.add(H),W.add(H.target);let K=new d6("#beddf9",0.6);K.position.set(20,10,20),W.add(K);let Y=new o0(new g6(225,32,16),new rJ({side:lJ,depthWrite:!1,uniforms:{sunDir:{value:new dJ(-0.5,0.65,-0.35).normalize()}},vertexShader:"varying vec3 vP;void main(){vP=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec3 vP;uniform vec3 sunDir;float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);}void main(){vec3 n=normalize(vP);float y=max(0.,n.y);vec3 c=mix(vec3(.77,.86,.89),vec3(.23,.51,.72),pow(y,.5));vec2 uv=n.xz/(y+.2)*3.;float cloud=noise(uv)*.55+noise(uv*2.)*.27+noise(uv*4.)*.13;float a=smoothstep(.50,.73,cloud)*smoothstep(.0,.35,y);c=mix(c,vec3(.97,.97,.94),a*.8);float sun=pow(max(0.,dot(n,sunDir)),250.);c+=vec3(1.,.85,.58)*sun*.6;gl_FragColor=vec4(c,1.);}"}));W.add(Y);let X={},U={};function E(w,x,n={}){X[w]=new H8({color:x,roughness:0.85,...n}),U[w]=[]}E("concrete","#77868a"),E("dark","#142938"),E("steel","#a8b1b4",{metalness:0.6,roughness:0.35}),E("roof","#adb9bd",{metalness:0.3,side:AJ}),E("teal","#247482"),E("white","#e8ede3"),E("black","#0c1c26"),E("light","#ffffff",{emissive:"#e3f4ff",emissiveIntensity:3}),E("cone","#ec8e42");let N=new KJ;function G(w,x,n=0,o=0,J0=0,E0=0,q0=0,V0=0){N.position.set(n,o,J0),N.rotation.set(E0,q0,V0),N.scale.set(1,1,1),N.updateMatrix(),w.applyMatrix4(N.matrix),U[x].push(w)}function q(w,x,n,o,J0,E0,q0,V0=0){G(new I8(J0,E0,q0),w,x,n,o,0,V0)}function R(w,x,n=0.09,o="steel"){let J0=new dJ().subVectors(x,w),E0=new x6(n,n,J0.length(),6),q0=new hJ().setFromUnitVectors(new dJ(0,1,0),J0.normalize());E0.applyQuaternion(q0),E0.translate((w.x+x.x)/2,(w.y+x.y)/2,(w.z+x.z)/2),U[o].push(E0)}function k(w,x,n,o,J0){let q0=[],V0=[];for(let H0=0;H0<=112;H0++){let i=H0/112*Math.PI*2;if(q0.push(Math.cos(i)*w,n,Math.sin(i)*x,Math.cos(i)*(w+o),n,Math.sin(i)*(x+o)),H0<112){let X0=H0*2;V0.push(X0,X0+2,X0+1,X0+1,X0+2,X0+3)}}let T=new FJ;T.setAttribute("position",new e0(q0,3)),T.setIndex(V0),T.computeVertexNormals(),U[J0].push(T)}function F(w,x,n){let o=[],J0=[];for(let q0=0;q0<=112;q0++){let V0=q0/112*Math.PI*2;if(o.push(Math.cos(V0)*w,n,Math.sin(V0)*x,Math.cos(V0)*w,n-0.55,Math.sin(V0)*x),q0<112){let T=q0*2;J0.push(T,T+1,T+2,T+1,T+3,T+2)}}let E0=new FJ;E0.setAttribute("position",new e0(o,3)),E0.setIndex(J0),E0.computeVertexNormals(),U.concrete.push(E0)}for(let w=0;w<3;w++){for(let x=0;x<10;x++){let n=w*10+x;k(27+n*0.83,57+n*0.83,1.6+n*0.53+w*0.8,0.85,"concrete"),F(27+n*0.83,57+n*0.83,1.6+n*0.53+w*0.8)}k(26.6+w*8.3,56.6+w*8.3,1.2+w*6.1,1,"dark")}k(26,56,0.5,1.2,"dark"),k(52,82,19.7,13,"roof"),k(51.5,81.5,19.55,0.5,"steel"),k(57,87,22,8,"dark");for(let w=0;w<36;w++){let x=w/36*Math.PI*2,n=Math.cos(x),o=Math.sin(x);R(new dJ(n*54,1,o*84),new dJ(n*57,23,o*87),0.18),R(new dJ(n*51,19.6,o*81),new dJ(n*65,22,o*95),0.13),R(new dJ(n*51,19.6,o*81),new dJ(n*57,23,o*87),0.075);for(let J0=0;J0<5;J0++){let E0=x+(J0-2)*0.014;q("light",Math.cos(E0)*51.6,19.05,Math.sin(E0)*81.6,0.72,0.2,0.5,-E0)}}let O=2400,z=new F6(new I8(0.32,0.44,0.23),new H8({roughness:1}),O),A=new F6(new g6(0.12,5,3),new H8({roughness:1}),O),V=["#e2dfd1","#617e8b","#284956","#b7c4bc","#50697d","#947568","#243744","#cab790","#748e8d","#304855"],I=1024,P=()=>{return I=Math.imul(I,1664525)+1013904223>>>0,I/4294967296};for(let w=0;w<O;w++){let x=Math.floor(w/80),n=Math.floor(x/10),o=w%80/80*Math.PI*2+P()*0.022;N.position.set(Math.cos(o)*(27.5+x*0.83),2.03+x*0.53+n*0.8,Math.sin(o)*(57.5+x*0.83)),N.rotation.set(0.05,Math.PI/2-o,0),N.scale.set(1,1,1),N.updateMatrix(),z.setMatrixAt(w,N.matrix),z.setColorAt(w,new j0(V[Math.floor(P()*V.length)])),N.position.y+=0.39,N.updateMatrix(),A.setMatrixAt(w,N.matrix),A.setColorAt(w,new j0(["#c69e7e","#aa7c5d","#785341","#ddba95"][Math.floor(P()*4)]))}W.add(z,A),Q(0.2,"Building the stadium…");let _=new T9,M=await _.loadAsync("/assets/grass_basecolor.png");M.colorSpace=Q8,M.wrapS=M.wrapT=o8,M.repeat.set(54,95),M.anisotropy=Math.min(8,$.capabilities.getMaxAnisotropy());let C=await _.loadAsync("/assets/grass_normal.png");C.wrapS=C.wrapT=o8,C.repeat.copy(M.repeat);let l=new H8({color:"#a8b78b",map:M,normalMap:C,normalScale:new y0(0.3,0.3),roughness:0.96}),y=new o0(new aJ(110,180),l);y.rotation.x=-Math.PI/2,y.receiveShadow=!0,W.add(y);let b=[];for(let w=0;w<10;w++){let x=new aJ(37,5);x.rotateX(-Math.PI/2),x.translate(0,0.006,-47.5+w*10),b.push(x)}let e=new o0(f9(b),new RJ({color:"#c1d698",transparent:!0,opacity:0.08,depthWrite:!1}));W.add(e);for(let w of[-18.5,18.5])q("white",w,0.018,0,0.12,0.024,100);for(let w of[-50,-32,32,50])q("white",0,0.018,w,37,0.024,0.13);for(let w=-40;w<=40;w+=10)for(let x of[-18.1,18.1])q("white",x,0.022,w,0.8,0.024,0.1);q("white",0,0.02,0,1.2,0.022,0.1),q("white",0,0.02,0,0.1,0.022,1.2);let S=new RJ({color:"#244a54",transparent:!0,opacity:0.14,depthWrite:!1});for(let w of[-41,41]){let x=new o0(new aJ(36.9,18),S);x.rotation.x=-Math.PI/2,x.position.set(0,0.009,w),W.add(x)}for(let w of[-19,19])for(let x of[-50,-32,32,50])G(new R7(0.16,0.38,8),"cone",w,0.19,x);function u(w,x="#102837",n="#ecf1e7",o=1024,J0=128){let E0=document.createElement("canvas");E0.width=o,E0.height=J0;let q0=E0.getContext("2d");q0.fillStyle=x,q0.fillRect(0,0,o,J0),q0.fillStyle=n,q0.font=`700 ${J0*0.51}px Barlow, Arial`,q0.textAlign="center",q0.textBaseline="middle",q0.fillText(w,o/2,J0*0.52);let V0=new z9(E0);return V0.colorSpace=Q8,V0}let Q0=new RJ({map:u("FreshBee    /    PLAY FURTHER.","#0d2938","#e8efdf"),side:AJ}),d=[];for(let w of[-1,1])for(let x=-48;x<50;x+=14){let n=new aJ(13.7,1.1);n.rotateY(-w*Math.PI/2),n.translate(w*23,0.72,x),d.push(n)}for(let w of[-1,1])for(let x=-18;x<=18;x+=12){let n=new aJ(11.7,1.1);n.rotateY(w>0?Math.PI:0),n.translate(x,0.72,w*54),d.push(n)}W.add(new o0(f9(d),Q0));let Y0=new RJ({map:u("F R E S H B E E     —     SAME GAME. MORE PEOPLE.","#163745","#dce5db"),side:AJ}),r=[];for(let w of[-1,1])for(let x=-45;x<=45;x+=18){let n=new aJ(17.8,0.8);n.rotateY(-w*Math.PI/2),n.translate(w*35,7.75,x),r.push(n)}W.add(new o0(f9(r),Y0));let $0=new o0(new aJ(23,3.5),new RJ({map:u("F R E S H B E E","#294944","#a5bc93"),transparent:!0,opacity:0.55,depthWrite:!1}));$0.rotation.x=-Math.PI/2,$0.rotation.z=Math.PI,$0.position.set(0,0.025,43),W.add($0);let Z0=document.createElement("canvas");Z0.width=1024,Z0.height=384;let C0=Z0.getContext("2d"),T0=new z9(Z0);T0.colorSpace=Q8;let $J=new o0(new aJ(14,5.25),new RJ({map:T0}));$J.rotation.y=Math.PI,$J.position.set(0,14,75),W.add($J),q("dark",0,14,75.4,14.5,5.8,0.6);function p0(w,x,n){C0.fillStyle="#081c2d",C0.fillRect(0,0,1024,384),C0.fillStyle="#c5ef62",C0.font="600 26px Arial",C0.textAlign="center",C0.fillText("FRESHBEE  /  ULTIMATE FRISBEE",512,60),C0.font="bold 140px Arial",C0.fillStyle="#f5f5f1",C0.fillText(`${w}  :  ${x}`,512,220),C0.font="28px Arial",C0.fillStyle="#b2c4c8",C0.fillText(`SKYRIDERS      ${n}      WINDADDICTS`,512,308),T0.needsUpdate=!0}p0(0,0,"00:00");for(let[w,x]of Object.entries(U)){if(!x.length)continue;for(let o of x)o.deleteAttribute("uv");let n=new o0(f9(x),X[w]);n.receiveShadow=!0,W.add(n);for(let o of x)o.dispose()}let s=new sJ,K0=new H8({color:"#f8f8ef",roughness:0.27,metalness:0.03}),U0=new o0(new x6(0.145,0.152,0.019,40),K0);U0.castShadow=!0,s.add(U0);let S0=new o0(new A9(0.14,0.011,6,40),K0);S0.rotation.x=Math.PI/2,s.add(S0);for(let w of[0.07,0.095]){let x=new o0(new A9(w,0.002,4,32),new H8({color:"#142b3b",roughness:0.6}));x.rotation.x=Math.PI/2,x.position.y=0.012,s.add(x)}let v0=new o0(new I8(0.038,0.002,0.012),new RJ({color:"#293d4d"}));v0.position.set(0.04,0.014,0.03),s.add(v0),W.add(s);let z0=new o0(new P9(0.21,24),new RJ({color:"#07111b",transparent:!0,opacity:0.25,depthWrite:!1}));z0.rotation.x=-Math.PI/2,W.add(z0);let MJ=new o0(new _9(0.48,0.53,48),new RJ({color:"#c5ef62",transparent:!0,opacity:0.75,depthWrite:!1,side:AJ}));MJ.rotation.x=-Math.PI/2,W.add(MJ);let h0=new sJ,d0=new o0(new _9(0.65,0.71,40),new RJ({color:"#efffd7",transparent:!0,opacity:0.9,side:AJ,depthWrite:!1}));d0.rotation.x=-Math.PI/2,h0.add(d0);let r0=[];for(let w=0;w<4;w++){let x=w*Math.PI/2,n=new I8(0.08,0.03,0.25);n.rotateY(x),n.translate(Math.sin(x)*0.89,0,Math.cos(x)*0.89),r0.push(n)}h0.add(new o0(f9(r0),new RJ({color:"#d5fda2"}))),W.add(h0);let u0=new F6(new g6(0.045,5,4),new RJ({color:"#eafdd1",transparent:!0,opacity:0.82,depthTest:!0}),36);W.add(u0),Q(0.47,"Preparing your athlete…");let VJ=await new NZ().loadAsync("/assets/athlete.glb",(w)=>{if(w.total)Q(0.47+0.4*w.loaded/w.total,"Loading athlete and animations…")}),JJ=[],yJ=new iJ().setFromObject(VJ.scene),DJ=1.86/yJ.getSize(new dJ).y,v=VJ.animations.map((w)=>{let x=w.clone();x.tracks=x.tracks.filter((n)=>!n.name.endsWith(".scale"));for(let n of x.tracks)if(n.name.endsWith(".position")&&/hips|pelvis|root/i.test(n.name))for(let o=0;o<n.values.length;o+=3)n.values[o]=n.values[0],n.values[o+2]=n.values[2];return x}),fJ=v.find((w)=>/run/i.test(w.name))||v[0],QJ=new RJ({color:"#c5ef62",side:AJ,transparent:!0,opacity:0.9});for(let w=0;w<10;w++){let x=new sJ,n=dQ(VJ.scene);n.scale.setScalar(DJ),n.position.y=-yJ.min.y*DJ;let o={},J0={};if(n.traverse((t)=>{if(t.isBone)o[t.name]=t,J0[t.name]={q:t.quaternion.clone(),p:t.position.clone()};if(t.isMesh)t.castShadow=!0,t.receiveShadow=!0,t.frustumCulled=!1,t.material=t.material.clone(),t.material.side=A8,t.material.roughness=0.83}),w>=5)n.traverse((t)=>{if(t.isMesh)t.material.onBeforeCompile=(F0)=>{F0.fragmentShader=F0.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
 float clothMask = (1.0-smoothstep(0.12,0.29,max(diffuseColor.r,max(diffuseColor.g,diffuseColor.b)))) * smoothstep(-0.015,0.015,diffuseColor.b-diffuseColor.r);diffuseColor.rgb=mix(diffuseColor.rgb,vec3(0.82,0.86,0.85),clothMask*0.94);`)},t.material.customProgramCacheKey=()=>"away-v1"});x.add(n),W.add(x);let E0=new bQ(n),q0=null;if(fJ)q0=E0.clipAction(fJ),q0.play(),E0.update(0.15+w*0.07);let V0={};for(let[t,F0]of Object.entries(o))V0[t]=F0.quaternion.clone();let T=new o0(new P9(0.38,18),new RJ({color:"#112214",transparent:!0,opacity:0.2,depthWrite:!1}));T.rotation.x=-Math.PI/2,T.position.y=0.025,W.add(T);let H0=document.createElement("canvas");H0.width=128,H0.height=128;let i=H0.getContext("2d");i.fillStyle=w<5?"#c5ef62":"#e6eeee",i.font="bold 55px Arial",i.textAlign="center",i.fillText([7,10,21,14,9][w%5],64,69);let X0=new z9(H0),R0=new CQ(new U7({map:X0,transparent:!0,depthTest:!1}));R0.scale.set(0.7,0.7,1),W.add(R0),JJ.push({root:x,model:n,mixer:E0,run:q0,bones:o,bindPose:V0,rest:J0,shadow:T,sprite:R0})}let UJ=new dJ(0,1.4,-16),B=new dJ,L=new dJ,j="",m=!1;function W0(w,x,n,o,J0){w.root.position.set(x.x,0,x.z),w.root.rotation.y=x.face;let E0=Math.hypot(x.vx,x.vz);if(w.run){if(w.run.timeScale=Math.max(0.45,E0/4.5),w.mixer.update(n),E0<0.25){w.run.time=0.07,w.mixer.update(0);for(let[V0,T]of Object.entries(w.bones))if(/leg|foot|toe|hips/i.test(V0))T.quaternion.copy(w.rest[V0].q),T.position.copy(w.rest[V0].p)}}let q0=Math.min(0.13,E0*0.018);w.model.rotation.x=q0;for(let[V0,T]of Object.entries(w.bones)){let H0=V0.toLowerCase();if(/rightarm|upperarm_r|upperarm\.r|r_upperarm/.test(H0)){if(x.throwPose>0)T.rotation.x-=Math.sin((0.55-x.throwPose)/0.55*Math.PI)*1.4;else if(o===x.id)T.rotation.z-=0.4,T.rotation.x-=0.65;else if(x.reach>0)T.rotation.x-=1.4}if(/leftarm|upperarm_l|upperarm\.l|l_upperarm/.test(H0)&&x.reach>0)T.rotation.x-=1.3}w.shadow.position.set(x.x,0.025,x.z),w.sprite.position.set(x.x,2.6,x.z),w.sprite.visible=x.id!==J0}function G0(w,x,n){for(let V0=0;V0<10;V0++)W0(JJ[V0],w.athletes[V0],x,w.owner,w.controlled);let o=w.athletes[w.controlled];if(s.position.set(w.disc.x,w.disc.y,w.disc.z),w.owner>=0){let V0=JJ[w.owner].bones.RightHand;if(V0)JJ[w.owner].root.updateMatrixWorld(!0),V0.getWorldPosition(s.position),s.position.y+=0.02}if(s.scale.setScalar(w.flight?1.35:1),s.rotation.y+=x*(w.flight?33:1),s.rotation.z=w.flight?Math.sin(w.time*3)*0.07:0.06,s.rotation.x=w.flight?0.08:0,z0.position.set(w.disc.x,0.03,w.disc.z),z0.scale.setScalar(1+w.disc.y*0.13),z0.material.opacity=0.3/(1+w.disc.y*0.5),MJ.position.set(o.x,0.035,o.z),MJ.material.opacity=0.5+Math.sin(w.time*4)*0.1,n.menu)B.set(o.x-3.3,2.7,o.z-4.7),L.set(o.x+1.2,1.3,o.z+3.5),Z.setViewOffset(innerWidth,innerHeight,-innerWidth*0.2,0,innerWidth,innerHeight);else{Z.clearViewOffset();let V0=w.flight?Math.min(6,Math.max(-3,w.disc.z-o.z))*0.16:0;B.set(o.x-1.15,3.2,o.z-5.5),L.set(o.x+0.45,1.25,o.z+6+V0)}if(!m)Z.position.copy(B),UJ.copy(L),m=!0;else Z.position.lerp(B,1-Math.exp(-x*5)),UJ.lerp(L,1-Math.exp(-x*7));Z.lookAt(UJ),Z.fov+=((n.sprint?62:57)-Z.fov)*Math.min(1,x*4),Z.updateProjectionMatrix(),H.target.position.set(o.x,0,o.z+12),H.position.set(o.x-35,48,o.z-28);let J0=w.owner===w.controlled&&!n.menu&&!w.reset;if(u0.visible=J0,h0.visible=J0||!!w.flight,w.flight)h0.position.set(w.flight.ex,0.055,w.flight.ez),h0.scale.setScalar(1.2+Math.sin(w.time*7)*0.1),d0.material.color.set(w.flight.team===0?"#c5ef62":"#ffd5a1");else d0.material.color.set("#efffd7");if(J0){let V0=n.aim,T=V0.x-o.x,H0=V0.z-o.z,i=Math.hypot(T,H0)||1;h0.position.set(V0.x,0.055,V0.z),h0.scale.setScalar(1+Math.sin(w.time*5)*0.035);for(let X0=0;X0<36;X0++){let R0=X0/35,t=Math.sin(R0*Math.PI);N.position.set(o.x+T*R0-H0/i*t*0.28,1.15+t*(1.15+i*0.045),o.z+H0*R0+T/i*t*0.28),N.rotation.set(0,0,0),N.scale.setScalar(n.charging?1:0.65),N.updateMatrix(),u0.setMatrixAt(X0,N.matrix)}u0.instanceMatrix.needsUpdate=!0}let E0=`${String(Math.floor(w.time/60)).padStart(2,"0")}:${String(Math.floor(w.time%60)).padStart(2,"0")}`,q0=w.score.join()+E0;if(q0!==j)p0(...w.score,E0),j=q0;$.render(W,Z)}function O0(){$.setSize(innerWidth,innerHeight),Z.aspect=innerWidth/innerHeight,Z.updateProjectionMatrix(),m=!1}function a(w){$.setPixelRatio(w?Math.min(devicePixelRatio,1.5):1),$.shadowMap.enabled=w,z.count=w?2400:1200,A.count=z.count,O0()}return Q(1,"The field is ready."),{renderer:$,scene:W,camera:Z,render:G0,resize:O0,quality:a,athletes:JJ,project(w){return new dJ(w.x,w.y??0.1,w.z).project(Z)},ray(w,x){let n=new xQ;n.setFromCamera(new y0(w/innerWidth*2-1,1-x/innerHeight*2),Z);let o=new dJ;return n.ray.intersectPlane(new G8(new dJ(0,1,0),0),o)}}}var q8=(J,Q,$)=>Math.max(Q,Math.min($,J)),e8=(J,Q)=>Math.hypot(J.x-Q.x,J.z-Q.z);function dY(J){return Array.from({length:10},(Q,$)=>{let W=$<5?0:1,Z=$%5,H=W===0?1:-1;return{id:$,team:W,number:[7,10,21,14,9][Z],x:[0,-11,10,-7,8][Z],z:H*[-27,-15,-10,2,14][Z]+(J===1?2:0),vx:0,vz:0,face:W===0?0:Math.PI,stamina:1,reach:0,throwPose:0}})}function uQ(J){return{players:[...J],athletes:dY(0),controlled:0,score:[0,0],time:0,owner:0,team:0,held:0,flight:null,disc:{x:0,y:1.15,z:-27},catchWindow:0,catchCooldown:0,reset:0,nextTeam:0,event:"ready",eventId:0,completed:0,interceptions:0,winner:null,call:0}}function RZ(J,Q,$){if(!J.players.includes(Q))return{ok:!1,error:"not seated"};if(!$||!["step","throw","catch","call","switch"].includes($.type))return{ok:!1,error:"unknown action"};if(J.winner!==null)return{ok:!1,error:"match finished"};if($.type==="step"&&(!Number.isFinite($.x)||!Number.isFinite($.z)||Math.abs($.x)>1||Math.abs($.z)>1))return{ok:!1,error:"invalid movement"};if($.type==="throw"&&(J.owner!==J.controlled||!Number.isFinite($.x)||!Number.isFinite($.z)||Math.abs($.x)>30||Math.abs($.z)>60||!Number.isFinite($.power)||$.power<0||$.power>1))return{ok:!1,error:"invalid throw"};return{ok:!0}}function J6(J,Q){J.event=Q,J.eventId++}function OZ(J,Q,$,W,Z=1){let H=J.athletes[Q],K=$-H.x,Y=W-H.z,X=Math.hypot(K,Y)||1,U=8+28*Z;if(X>U)K*=U/X,Y*=U/X,X=U;let E=H.x+K,N=H.z+Y;J.flight={sx:H.x,sz:H.z,ex:E,ez:N,elapsed:0,duration:Math.max(0.48,X/19),height:1.15+X*0.045,from:Q,team:H.team,curve:0.28},J.owner=-1,J.held=0,H.throwPose=0.55,H.face=Math.atan2(K,Y),J6(J,"throw")}function Y1(J,Q,$="catch"){let W=J.athletes[Q],Z=J.team;if(J.owner=Q,J.team=W.team,J.held=0,J.flight=null,J.disc={x:W.x,y:1.15,z:W.z},W.reach=0.5,Z!==W.team){if(W.team===0)J.interceptions++;J6(J,"interception")}else if(J6(J,$),W.team===0)J.completed++;if(W.team===0&&W.z>=32||W.team===1&&W.z<=-32){if(J.score[W.team]++,J.nextTeam=1-W.team,J.reset=2.4,J6(J,W.team===0?"goal":"opponent-goal"),J.score[W.team]>=7)J.winner=W.team,J6(J,W.team===0?"win":"loss")}}function FZ(J,Q,$,W){let Z=J.athletes.filter((K)=>K.team===W);Z.sort((K,Y)=>Math.hypot(K.x-Q,K.z-$)-Math.hypot(Y.x-Q,Y.z-$));let H=Z[0];H.x=q8(Q,-17.4,17.4),H.z=q8($,-30,30),H.vx=0,H.vz=0,J.owner=H.id,J.team=W,J.held=0,J.flight=null,J.disc={x:H.x,y:1.15,z:H.z},J6(J,"turnover")}function uY(J,Q,$,W,Z){let H=Math.hypot(Q,$);if(H>1)Q/=H,$/=H;let K=1-Math.exp(-Z*12);if(J.vx+=(Q*W-J.vx)*K,J.vz+=($*W-J.vz)*K,J.x=q8(J.x+J.vx*Z,-18.1,18.1),J.z=q8(J.z+J.vz*Z,-49,49),Math.hypot(J.vx,J.vz)>0.3){let Y=Math.atan2(J.vx,J.vz),X=Math.atan2(Math.sin(Y-J.face),Math.cos(Y-J.face));J.face+=X*Math.min(1,Z*10)}}function X1(J,Q,$,W,Z){let H=Q-J.x,K=$-J.z,Y=Math.hypot(H,K);uY(J,H/Math.max(1,Y),K/Math.max(1,Y),Y<0.4?0:W,Z)}function U1(J,Q){let $=J.owner>=0?J.athletes[J.owner]:null;for(let W of J.athletes){if(W.id===J.controlled)continue;let Z=W.team===0?1:-1,H=[0,-12,12,-6,7][W.id%5],K=W.x,Y=W.z,X=4.65;if(J.flight){let U=J.flight;if(Math.hypot(W.x-U.ex,W.z-U.ez)<14)K=U.ex,Y=U.ez,X=W.team===U.team?6:5;else K=H,Y=q8(J.disc.z+Z*(5+W.id%5*3),-45,45)}else if($)if($.id===W.id)K=W.x+Math.sin(J.time+W.id)*2,Y=q8(W.z+Z*5,-35,35),X=2.5;else if(W.team===J.team)K=H+Math.sin(J.time*0.8+W.id)*2,Y=q8($.z+Z*(9+W.id%5*4),-43,43);else{let U=J.athletes[W.team===0?W.id+5:W.id-5];K=U.x+Math.sin(J.time*0.5+W.id)*0.5,Y=U.z-Z*2.6,X=4.25}X1(W,K,Y,X,Q)}if($&&$.id!==J.controlled&&J.held>($.team===0?1.5:2)){let W=J.athletes.filter((H)=>H.team===$.team&&H.id!==$.id&&e8(H,$)<34&&e8(H,$)>4),Z=$.team===0?1:-1;if(W.sort((H,K)=>{let Y=(X)=>{let U=10;for(let E of J.athletes)if(E.team!==X.team)U=Math.min(U,e8(E,X));return(X.z-$.z)*Z*0.5+U+(X.id===J.controlled?J.call>0?24:6:0)};return Y(K)-Y(H)}),W.length){let H=W[0],K=e8(H,$)/19,Y=H.id===J.controlled?0.5:0.7;OZ(J,$.id,q8(H.x+H.vx*K*Y,-17,17),q8(H.z+H.vz*K*Y,-47,47),1),J.call=0}else if(J.held>4)OZ(J,$.id,q8($.x+7,-15,15),q8($.z+Z*15,-44,44),1)}}function cY(J,Q,$){if(!RZ(J,Q,$).ok)return J;let W={...J,score:[...J.score],athletes:J.athletes.map((K)=>({...K})),disc:{...J.disc},flight:J.flight?{...J.flight}:null};if($.type==="throw")return OZ(W,W.controlled,$.x,$.z,$.power),W;if($.type==="catch"){if(W.catchCooldown<=0)W.catchWindow=0.5,W.catchCooldown=0.65,W.athletes[W.controlled].reach=0.5,J6(W,"reach");return W}if($.type==="call")return W.call=3,J6(W,"call"),W;if($.type==="switch"){if(W.owner>=0&&W.team===0)W.controlled=W.owner;else{let K=W.athletes.filter((Y)=>Y.team===0&&Y.id!==W.controlled);K.sort((Y,X)=>e8(Y,W.disc)-e8(X,W.disc)),W.controlled=K[0].id}return W.catchWindow=0,W}W.time+=0.016666666666666666,W.call=Math.max(0,W.call-0.016666666666666666),W.catchWindow=Math.max(0,W.catchWindow-0.016666666666666666),W.catchCooldown=Math.max(0,W.catchCooldown-0.016666666666666666);for(let K of W.athletes)K.reach=Math.max(0,K.reach-0.016666666666666666),K.throwPose=Math.max(0,K.throwPose-0.016666666666666666);if(W.reset>0){if(W.reset-=0.016666666666666666,W.reset<=0)W.athletes=dY(W.nextTeam),W.controlled=0,W.owner=W.nextTeam===0?0:5,W.team=W.nextTeam,W.flight=null,W.held=0,W.disc={x:W.athletes[W.owner].x,y:1.15,z:W.athletes[W.owner].z},J6(W,"restart");return W}let Z=W.athletes[W.controlled],H=!!$.sprint&&Z.stamina>0.03&&Math.hypot($.x,$.z)>0.1;if(Z.stamina=q8(Z.stamina+(H?-0.26:0.15)*0.016666666666666666,0,1),uY(Z,$.x,$.z,H?8.5:5.7,0.016666666666666666),W.owner>=0)W.held+=0.016666666666666666;U1(W,0.016666666666666666);for(let K=0;K<10;K++)for(let Y=K+1;Y<10;Y++){let X=W.athletes[K],U=W.athletes[Y],E=X.x-U.x,N=X.z-U.z,G=Math.hypot(E,N);if(G>0.01&&G<0.68){let q=(0.68-G)*0.3;X.x+=E/G*q,X.z+=N/G*q,U.x-=E/G*q,U.z-=N/G*q}}if(W.flight){let K=W.flight;K.elapsed+=0.016666666666666666;let Y=Math.min(1,K.elapsed/K.duration),X=Math.sin(Math.PI*Y),U=K.ex-K.sx,E=K.ez-K.sz,N=Math.hypot(U,E)||1;if(W.disc={x:K.sx+U*Y-E/N*X*K.curve,y:1.15+X*K.height,z:K.sz+E*Y+U/N*X*K.curve},K.elapsed>0.24&&W.disc.y<2.45){let G=W.athletes.filter((q)=>q.id!==K.from&&e8(q,W.disc)<(q.id===W.controlled?1.35:1.12));G.sort((q,R)=>e8(q,W.disc)-e8(R,W.disc));for(let q of G){if(q.id===W.controlled&&W.catchWindow<=0)continue;if(q.team!==K.team&&Y<0.28)continue;Y1(W,q.id);break}}if(W.flight&&Y>=1)FZ(W,W.disc.x,W.disc.z,1-K.team);else if(W.flight&&(Math.abs(W.disc.x)>18.5||Math.abs(W.disc.z)>50))FZ(W,W.disc.x,W.disc.z,1-K.team)}else if(W.owner>=0){let K=W.athletes[W.owner];if(W.disc={x:K.x+Math.cos(K.face)*0.48,y:1.12,z:K.z-Math.sin(K.face)*0.48},W.held>10)FZ(W,K.x,K.z,1-K.team)}return W}var N0=(J)=>document.getElementById(J),DZ=(J,Q,$)=>Math.max(Q,Math.min($,J)),_0=uQ(["local"]),x8,nJ=!1,bJ=!1,O8=!1,n6=0,oQ=!1,w7={x:0,z:0},g8=null,F8=1,k6={x:-11,z:-15},VZ=-1,nY=0,iQ=!1,cQ=!0,X8=new Set,I7=null,Q6=null,nQ=0,sY=performance.now(),sQ=0,kZ=60,LZ=0,MZ=0,LJ=N0("minimap").getContext("2d"),E1={ready:["FRESHBEE ARENA","YOUR GAME. YOUR MOMENT."],catch:["POSSESSION SECURED","CLEAN CATCH"],interception:["DEFENSE INTO ATTACK","INTERCEPTION"],turnover:["POSSESSION CHANGES","TURNOVER"],goal:["SKYRIDERS +1","THAT’S ULTIMATE."],"opponent-goal":["WINDADDICTS +1","POINT TO OPPONENTS"],call:["GET OPEN","PASS REQUESTED"],restart:["NEXT POINT","PLAY ON"],win:["FIRST TO SEVEN","YOU OWNED THE MOMENT."],loss:["FINAL WHISTLE","NEXT ONE IS YOURS."]};function B6(J){if(RZ(_0,"local",J).ok)_0=cY(_0,"local",J)}function x9(){X8.clear(),oQ=!1,w7={x:0,z:0},O8=!1,Q6=null,g8=null,N0("stick").style.transform="",N0("sprint").classList.remove("pressed"),N0("primary").classList.remove("pressed")}function BZ(){if(!nJ||bJ||_0.reset>0)return;if(_0.owner!==_0.controlled){B6({type:"catch"});return}O8=!0,n6=0.3,Q6=null}function CZ(){if(!O8)return;O8=!1,B6({type:"throw",x:k6.x,z:k6.z,power:n6}),N0("primary").classList.remove("pressed"),g8=null,Q6=null}function iY(){if(_0.owner===_0.controlled){if(F8=(F8+1)%5,F8===_0.controlled)F8=(F8+1)%5;g8=null,Q6=null}else B6({type:"call"})}function G1(){let J=_0.athletes[_0.controlled],Q;if(Q6)Q=Q6;else if(g8){let U=x8.ray(g8.x,g8.y);if(U&&Math.abs(U.x)<100&&Math.abs(U.z)<150)Q=U}if(!Q){if(F8===_0.controlled)F8=(F8+1)%5;let U=_0.athletes[F8],E=Math.hypot(U.x-J.x,U.z-J.z);Q={x:U.x+U.vx*E/19*0.65,z:U.z+U.vz*E/19*0.65}}let $=DZ(Q.x,-22,22),W=DZ(Q.z,-53,53);if(g8&&!Q6){for(let U of _0.athletes)if(U.team===0&&U.id!==_0.controlled&&Math.hypot(U.x-$,U.z-W)<2.5){$=U.x+U.vx*0.2,W=U.z+U.vz*0.2,F8=U.id;break}}let Z=$-J.x,H=W-J.z,K=Math.hypot(Z,H)||1,Y=O8?8+28*n6:32,X=Math.min(K,Y);k6={x:J.x+Z/K*X,z:J.z+H/K*X}}function IZ(){nJ=!0,bJ=!1,_0=uQ(["local"]),F8=1,x9(),N0("menu").classList.add("hidden"),document.body.classList.add("playing");for(let J of["scoreboard","playercard","mapbox","matchtips","controls"])N0(J).classList.remove("hidden");N0("modal").classList.add("hidden"),N0("footerleft").textContent="HOLD SPACE TO THROW  /  E TO CATCH  /  Q TO CALL",VZ=-1}function b9(J=!1){if(!nJ&&!J)return;bJ=!0,x9(),N0("modalTitle").textContent=J?"Make every pass count.":"Take a breather.",N0("helpcontent").classList.remove("hidden"),N0("results").classList.add("hidden"),N0("resume").innerHTML=(nJ?"BACK TO THE FIELD":"BACK TO THE ARENA")+" <span>→</span>",N0("modal").classList.remove("hidden")}function N1(){bJ=!0,x9(),N0("modalTitle").textContent=_0.winner===0?"The moment is yours.":"A match worth playing.",N0("helpcontent").classList.add("hidden"),N0("results").classList.remove("hidden"),N0("results").innerHTML=`<strong style="color:#c5ef62;font:600 58px Barlow Condensed">${_0.score[0]} — ${_0.score[1]}</strong><br>${_0.winner===0?"SKYRIDERS WIN":"WINDADDICTS WIN"}<br>${_0.completed} completed catches · ${_0.interceptions} interceptions`,N0("resume").innerHTML="PLAY ANOTHER MATCH <span>→</span>",N0("modal").classList.remove("hidden")}N0("start").onclick=IZ;N0("help").onclick=()=>b9(!0);N0("pause").onclick=()=>bJ?wZ():b9();function wZ(){if(_0.winner!==null){IZ();return}bJ=!1,N0("modal").classList.add("hidden"),x9()}N0("resume").onclick=wZ;N0("restart").onclick=IZ;N0("playercard").onclick=()=>{if(nJ&&!bJ)B6({type:"switch"})};N0("quality").onclick=()=>{cQ=!cQ,x8?.quality(cQ),N0("quality").textContent=cQ?"HIGH QUALITY":"PERFORMANCE"};N0("fullscreen").onclick=()=>{if(document.fullscreenElement)document.exitFullscreen?.();else N0("game").requestFullscreen?.().catch(()=>{})};window.addEventListener("keydown",(J)=>{if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Tab"].includes(J.code))J.preventDefault();if(J.repeat)return;if(J.code==="Escape"){bJ?wZ():b9();return}if(J.code==="KeyH"){b9(!0);return}if(J.code==="Backquote")iQ=!iQ,N0("perf").classList.toggle("hidden",!iQ);if(!nJ||bJ)return;if(X8.add(J.code),J.code==="Space")BZ();if(J.code==="KeyE")B6({type:"catch"});if(J.code==="KeyQ")iY();if(J.code==="Tab")B6({type:"switch"})});window.addEventListener("keyup",(J)=>{if(X8.delete(J.code),J.code==="Space")CZ()});window.addEventListener("blur",()=>{if(x9(),nJ&&!bJ)b9()});document.addEventListener("visibilitychange",()=>{if(document.hidden){if(x9(),nJ&&!bJ)b9()}});N0("world").addEventListener("pointermove",(J)=>{if(J.pointerType==="mouse"&&nJ&&!bJ)g8={x:J.clientX,y:J.clientY}});N0("world").addEventListener("pointerdown",(J)=>{if(J.pointerType==="mouse"&&J.button===0&&nJ&&!bJ)g8={x:J.clientX,y:J.clientY},BZ()});N0("world").addEventListener("pointerup",()=>CZ());N0("primary").addEventListener("pointerdown",(J)=>{if(J.preventDefault(),bJ||!nJ)return;J.currentTarget.setPointerCapture(J.pointerId),I7={x:J.clientX,y:J.clientY},BZ(),N0("primary").classList.add("pressed")});N0("primary").addEventListener("pointermove",(J)=>{if(!O8||!I7)return;let Q=J.clientX-I7.x,$=J.clientY-I7.y;if(Math.hypot(Q,$)>8){let W=_0.athletes[_0.controlled],Z=-Q*0.009,H=DZ(18-$*0.1,6,36);Q6={x:W.x+Math.sin(Z)*H,z:W.z+Math.cos(Z)*H}}});for(let J of["pointerup","pointercancel"])N0("primary").addEventListener(J,()=>{if(J==="pointerup")CZ();else O8=!1;I7=null,N0("primary").classList.remove("pressed")});N0("sprint").addEventListener("pointerdown",(J)=>{J.preventDefault(),J.currentTarget.setPointerCapture(J.pointerId),oQ=!0,J.currentTarget.classList.add("pressed")});for(let J of["pointerup","pointercancel"])N0("sprint").addEventListener(J,()=>{oQ=!1,N0("sprint").classList.remove("pressed")});N0("call").addEventListener("pointerdown",(J)=>{if(J.preventDefault(),nJ&&!bJ)iY()});var zZ=null;function oY(J){let Q=N0("joystick").getBoundingClientRect(),$=Q.left+Q.width/2,W=Q.top+Q.height/2,Z=Q.width*0.32,H=J.clientX-$,K=J.clientY-W,Y=Math.hypot(H,K),X=Y>Z?Z/Y:1;w7={x:H*X/Z,z:-K*X/Z},N0("stick").style.transform=`translate(${H*X*146/Q.width}px,${K*X*146/Q.height}px)`}N0("joystick").addEventListener("pointerdown",(J)=>{J.preventDefault(),zZ=J.pointerId,J.currentTarget.setPointerCapture(J.pointerId),oY(J)});N0("joystick").addEventListener("pointermove",(J)=>{if(J.pointerId===zZ)oY(J)});for(let J of["pointerup","pointercancel"])N0("joystick").addEventListener(J,()=>{zZ=null,w7={x:0,z:0},N0("stick").style.transform=""});function q1(){LJ.clearRect(0,0,260,150);let $=(Z)=>12+(Z+50)/100*236,W=(Z)=>75+Z/37*128;LJ.fillStyle="#9bc95b18",LJ.fillRect(12,11,42.48,128),LJ.fillStyle="#88bdd615",LJ.fillRect(205.52,11,42.48,128),LJ.strokeStyle="#b5d8c060",LJ.lineWidth=1,LJ.strokeRect(12,11,236,128);for(let Z of[-32,0,32])LJ.beginPath(),LJ.moveTo($(Z),11),LJ.lineTo($(Z),139),LJ.stroke();for(let Z of _0.athletes){if(LJ.fillStyle=Z.team===0?"#bdec6b":"#dbe9e8",LJ.beginPath(),Z.id===_0.controlled)LJ.moveTo($(Z.z)+5,W(Z.x)),LJ.lineTo($(Z.z)-4,W(Z.x)-4),LJ.lineTo($(Z.z)-4,W(Z.x)+4),LJ.closePath();else LJ.arc($(Z.z),W(Z.x),3,0,Math.PI*2);LJ.fill()}LJ.strokeStyle="#ffe3a1",LJ.lineWidth=2,LJ.beginPath(),LJ.arc($(_0.disc.z),W(_0.disc.x),5,0,Math.PI*2),LJ.stroke()}function F1(J){if(!nJ)return;N0("homeScore").textContent=_0.score[0],N0("awayScore").textContent=_0.score[1],N0("clock").textContent=`${String(Math.floor(_0.time/60)).padStart(2,"0")}:${String(Math.floor(_0.time%60)).padStart(2,"0")}`;let Q=_0.athletes[_0.controlled],$=_0.owner===_0.controlled,W=_0.flight&&Math.hypot(_0.disc.x-Q.x,_0.disc.z-Q.z)<11;if(N0("playernum").textContent=String(Q.number).padStart(2,"0"),N0("possession").textContent=$?`IN POSSESSION · ${Math.max(0,10-Math.floor(_0.held))}s`:_0.team===0?"ON OFFENSE":"ON DEFENSE",N0("primaryLabel").textContent=$?"THROW":_0.team===0?"CATCH":"INTERCEPT",N0("primaryKey").textContent=$?"SPACE":"E",N0("primary").classList.toggle("ready",!!W),N0("discIcon").style.opacity=$?"1":".55",N0("call").querySelector("b").textContent=$?"TARGET":"CALL",N0("staminaFill").style.width=Q.stamina*100+"%",N0("chargebox").classList.toggle("hidden",!O8),N0("powerFill").style.width=n6*100+"%",N0("powerValue").textContent=Math.round(n6*100)+"%",N0("contexttip").textContent=O8?"Aim your landing spot · release to throw":$?"Hold THROW, aim, release to pass":W?"MOVE TO THE DISC · TAP E TO CATCH":_0.team===0?"Find open space · Q to call for a pass":"Close the passing lane · E to intercept",$&&!_0.reset){let Z=x8.project({x:k6.x,y:1.6,z:k6.z});N0("targetlabel").classList.toggle("hidden",Z.z>1||Math.abs(Z.x)>1||Math.abs(Z.y)>1),N0("targetlabel").style.left=(Z.x*0.5+0.5)*innerWidth+"px",N0("targetlabel").style.top=(-Z.y*0.5+0.5)*innerHeight+"px",N0("targetdistance").textContent=Math.round(Math.hypot(k6.x-Q.x,k6.z-Q.z))+" m",N0("targetname").textContent=g8||Q6?"LANDING ZONE":"PASS TO #"+_0.athletes[F8].number}else N0("targetlabel").classList.add("hidden");if(VZ!==_0.eventId){VZ=_0.eventId;let Z=E1[_0.event];if(Z)N0("eventkicker").textContent=Z[0],N0("eventtext").textContent=Z[1],N0("announcement").classList.add("active"),nY=J+(_0.event==="goal"||_0.event==="opponent-goal"?2100:1250);if(_0.winner!==null)setTimeout(N1,1600)}if(matchMedia("(pointer:coarse)").matches)N0("contexttip").textContent=O8?"Drag to aim · release to throw":$?"Hold THROW · drag to aim · release":W?"MOVE TO THE DISC · TAP CATCH":_0.team===0?"Get open · tap CALL for a pass":"Close the lane · tap INTERCEPT";if(J>nY)N0("announcement").classList.remove("active");q1()}async function O1(){try{if(x8=await mY(N0("world"),(J,Q)=>{N0("loadbar").style.width=J*100+"%",N0("loadstatus").textContent=Q}),N0("start").disabled=!1,N0("startLabel").textContent="ENTER THE MATCH",N0("loading").style.opacity=".25",window.__freshbee={get state(){return structuredClone(_0)},dispatch:B6,setup:()=>{return _0=uQ(["local"]),_0},get renderInfo(){return{calls:x8.renderer.info.render.calls,triangles:x8.renderer.info.render.triangles,fps:kZ,animations:x8.athletes[0].run?"run":"none"}}},new URLSearchParams(location.search).has("test"))window.__freshbee.setState=(J)=>{_0=structuredClone(J)};requestAnimationFrame(aY)}catch(J){console.error(J),N0("loadstatus").textContent="The 3D arena could not load. Check WebGL support and reload.",N0("startLabel").textContent="RELOAD ARENA",N0("start").disabled=!1,N0("start").onclick=()=>location.reload()}}function aY(J){let Q=performance.now(),$=Math.min(0.05,(J-sY)/1000);sY=J;let W=oQ||X8.has("ShiftLeft")||X8.has("ShiftRight");if(nJ&&!bJ&&_0.winner===null){if(O8)n6=Math.min(1,n6+$*0.72);G1();let Z=(X8.has("KeyD")||X8.has("ArrowRight")?1:0)-(X8.has("KeyA")||X8.has("ArrowLeft")?1:0)+w7.x,H=(X8.has("KeyW")||X8.has("ArrowUp")?1:0)-(X8.has("KeyS")||X8.has("ArrowDown")?1:0)+w7.z;Z=-Z;let K=Math.hypot(Z,H);if(K>1)Z/=K,H/=K;nQ+=$;while(nQ>=0.016666666666666666)B6({type:"step",x:Z,z:H,sprint:W}),nQ-=0.016666666666666666}else nQ=0;if(x8.render(_0,bJ?0:$,{menu:!nJ,aim:k6,charging:O8,sprint:W}),F1(J),sQ++,MZ+=performance.now()-Q,J-LZ>1000){if(kZ=sQ*1000/(J-LZ),iQ)N0("perf").textContent=`${kZ.toFixed(0)} FPS · ${x8.renderer.info.render.calls} draws
CPU ${(MZ/sQ).toFixed(1)}ms · GPU browser-managed`;LZ=J,sQ=0,MZ=0}requestAnimationFrame(aY)}window.addEventListener("resize",()=>x8?.resize());O1();
