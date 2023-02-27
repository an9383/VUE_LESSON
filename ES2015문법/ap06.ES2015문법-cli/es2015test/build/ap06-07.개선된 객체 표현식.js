"use strict";

/*

    개선된 객체 표현식에 대해서 알아본다.
      개선된 객체 프러퍼티 표현식
      개선된 객체 메서드 표현식
*/
var name = '홍길동';
var age = 20;
var p2 = {
  name: name,
  age: age,
  powerYell: function powerYell() {
    console.log("".concat(this.name));
  },
  setAge: function setAge(h) {
    this.age = h;
    console.log("".concat(this.age));
  }
};
p2.powerYell();
p2.setAge(30);