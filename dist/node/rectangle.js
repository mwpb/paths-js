// Generated by uRequire v0.6.13-01 - template: 'nodejs' 
(function (window, global) {
  
var __isAMD = !!(typeof define === 'function' && define.amd),
    __isNode = (typeof exports === 'object'),
    __isWeb = !__isNode;

var Polygon = require('./polygon');

module.exports = (function () {
  return function (_arg) {
    var bottom, left, right, top;
    left = _arg.left, right = _arg.right, top = _arg.top, bottom = _arg.bottom;
    return Polygon({
      points: [
        [
          right,
          top
        ],
        [
          right,
          bottom
        ],
        [
          left,
          bottom
        ],
        [
          left,
          top
        ]
      ],
      closed: true
    });
  };
}).call(this);


}).call(this, (typeof exports === 'object' ? global : window), (typeof exports === 'object' ? global : window))