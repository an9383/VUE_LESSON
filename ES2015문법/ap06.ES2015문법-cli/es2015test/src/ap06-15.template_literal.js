/*

  ES2015의 template literal( 백틱, ` ) 에 대해서 알아본다.
  template literal 의 용도
  1. 다중 문자열 만들 때
  2. 변수 치환
*/
const string1 = '안녕하세요';
const string2 = '반갑습니다';
const greeting = `${string1}, ${string2}`;
console.log(greeting);

const product = { name: '도서', price: '4200원' };
const message = `

  제품 ${product.name} 의 가격은 ${product.price} 입니다.

  end
`;
console.log(message);
