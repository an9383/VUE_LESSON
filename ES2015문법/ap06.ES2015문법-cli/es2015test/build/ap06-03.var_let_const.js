"use strict";

function _readOnlyError(name) { throw new TypeError("\"" + name + "\" is read-only"); }
var msg = 'global scope';
if (true) {
  var _msg = 'block scope';
}
function outer(params) {
  var msg = 'function scope at outer ';
  if (true) {
    var _msg2 = 'block scope at outer ';
  }
}
var pizza = true;
false, _readOnlyError("pizza"); // 에러 발생.