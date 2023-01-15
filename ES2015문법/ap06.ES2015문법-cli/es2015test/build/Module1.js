"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.c = exports.a = void 0;
// Module1.js
var a = 1;
exports.a = a;
var b = 2;

// export 변수나 함수를 내보낼 때 사용한다.
// export 파일에서 여러 번 사용 가능하다.

var c = 3;

// exprot default 변수나 함수를 내보낼 때 사용한다.
// export default 는 파일에서 한 번만 사용 가능하다.
exports.c = c;
var _default = b;
exports["default"] = _default;