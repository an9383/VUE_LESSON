/*

    스프레드 사용법을 학습한다.

    ES 5에서는
    arguments 매개변수는 유사 배열 객체다.
        length 프로퍼티가 있다.
        Array  메서드를 사용할 수 없다.
        arrow function에서는 arguments는 사용할 수 없다.

    ES2015 에서는
    rest 매개변수는 배열이다.
        rest 연산자(...)를 사용하여 함수의 매개변수를 작성한 형태다.
        함수의 매개변수로 넘어오는 값들을 "배열"로 만든다.

    Spread 연산자는 ... 이다.
        이터러블(iterable) 객체를 "개별" 요소로 분리
        이터러블(iterable) 객체에는 Array, String, Map, Set 등이 있다.
        iterator를 생성해서 next()로 순회할 수 있는 자료구조가 이터러블

*/
const cities = ['서울', '부산', '제주'];
console.log(cities[0], cities[1], cities[2]); // '서울', '부산', '제주'

console.log(...cities); // '서울', '부산', '제주'

const east = ['U', 'K', 'T'];
const west = ['N', 'C', 'G'];

// east 와 west 를 결합하여  countries 배열을 만드시오
const countries = east.concat(west); // "U", "K", "T", "N", "C", "G"

// east 와 west 를 결합하여  countries1 배열을 만드시오.
// spread 연산자 사용하여
// spread 연산자 는 새로운 배열이나 객체를 만들 때 주로 사용된다
const countries1 = [...east, ...west];
console.log(countries1); // ["U", "K", "T", "N", "C", "G"]

const car1 = {
  type: 't1',
  color: 'S1',
  model: 2017,
};
const car2 = {
  type: 't2',
  color: 'S2',
  model: 2019,
};

const { type } = car1; // const type = car1.type;
console.log(type); // t1

const func = ({ type }) => {
  console.log(type); // t2
};
const newcar = { ...car1, ...car2 }; // === car2
func(newcar); // newcar === car2  ===> t2 출력
func({ ...car1, ...car2 }); //  ===> t2 출력

// spread 연산자를 이용하여 새로운 객체를 만드는 방법을 실습한다.
// ===> 불변객체의 복제 후 할당
const moring = {
  breacfast: '미역국',
  lunuch: '삼치구이',
};
const dinner = '스테이크';
const meals = {
  ...moring,
  dinner, // dinner: dinner,
};

console.log(meals); // meals 에 출력되는 값은 무엇인가?


// props 에 출력되는 값은 무엇인가?
function childComponent(...props) {
  // callee
  console.log(props); // props 에 출력되는 값은 무엇인가?
}
const message = 'passed from Parent Component';
childComponent(...message); // caller
