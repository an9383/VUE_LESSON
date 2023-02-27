/*
    rest 연산자 사용법을 학습한다.

    ES 5에서는
    arguments 매개변수는 유사 배열 객체다.
    length 프로퍼티가 있다.
    Array 메서드를 사용할 수 없다.
    arrow function에서는 arguments는 사용할 수 없다.

    ES 6에서는
    rest 매개변수는 배열이다.
    rest 연산자(...)를 사용하여 함수의 매개변수를 작성한 형태다.
    함수의 매개변수로 넘어오는 값들을 "배열"로 만든다.
*/

// ...args 에서  ... 를 rest 연산자라고 부른다
// arguments 를 대체 가능
function greet(...args) {
  // 가변매개변수를 이용한 출력
  console.log('가변매개변수(rest연산자) >> ', args); // arguments 를 사용하여 출력

  console.log('arguments >> ', arguments);
  console.log('\n\n');
}
greet(); //
greet('Elise'); //  Elise
greet('Mike', 'Hi'); //  Mike Hi

// ES5 에서 rest 연산자 기능 구현하기
function func1() {
  var args = Array.prototype.slice.call(arguments);
  var first = args[0];
  var others = args.slice(1);
  console.log('func1 >> first', first);
  console.log('func1 >> others', others);
}
func1(1, 2, 3, 4, 0);

// ES6 문법
function func2(...args) {
  const [first, ...others] = args;
  console.log('func2 >> first', first); // 1
  console.log('func2 >> others', others); // [2,3,4,0]
}
func2(1, 2, 3, 4, 0);

// ES6 문법
function func3(first, ...others) {
  console.log('func3 >> first', first);
  console.log('func3 >> others', others);
}
func3(1, 2, 3, 4, 0);

// ES6 예제
const [item1, ...items] = [0, 1, 2];
console.log('combined >> item1', item1); // item1 = 0
console.log('combined >> items', items); // items = [1, 2]

const { other, ...others } = { one: 1, two: 2, three: 3, four: 4, other: 0 };
console.log('combined >> other', other); // other = 0
console.log('combined >> others', others); // others = { one: 1, two: 2, three: 3, four: 4}
