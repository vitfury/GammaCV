webpackJsonp([81],{558:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(69);t.default={init:function(){return{prevFrame:new n.f("uint8",[384,500,4])}},op:function(e,t,a){var r=e;return"mult"===t.MATH.type&&(r=n.E(r,a.prevFrame)),"div"===t.MATH.type&&(r=n.s(r,a.prevFrame)),"add"===t.MATH.type&&(r=n.h(r,a.prevFrame)),"sub"===t.MATH.type&&(r=n.M(r,a.prevFrame)),r},tick:function(e,t){var a=t.canvas,r=t.operation,u=t.output,p=t.session,v=t.context;n.o(a),p.runOp(r,e,u),n.O(this.imgInput,v.prevFrame),n.m(a,u)},params:{MATH:{type:{name:"Operation",type:"constant",values:[{name:"Mult",value:"mult"},{name:"Div",value:"div"},{name:"Add",value:"add"},{name:"Sub",value:"sub"}]}}}}}});