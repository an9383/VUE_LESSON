// var a ; // 변수의 호이스팅ㅗ

function test(params) {
  console.log('test');
}

console.log('a=', a); // undefined

console.log('');
var a = 10;
console.log('');
console.log('');

const arr = [];

for (let index in arr) {
  console.log(arr[index]);
}

var str = 'abcdef';
str[1] = 1; //
str2 = str[0] + '1' + str.substring(2, str.length - 1);

var a = 10; // 변수 선언

// var test;
test();

test();

const ddd = function aaa(a) {
  return a;
};

const eee = function (a) {
  return a;
};

const fff = (a) => {
  return a;
};


const func1 ( var aaa){

  var aaa;

  return aaa;
}