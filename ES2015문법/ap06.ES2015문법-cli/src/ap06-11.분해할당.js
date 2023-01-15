/*
 (구조) 분해 할당에 대해서 알아본다.
*/

const points = [20, 30, 40];
const x1 = points[0];
const y1 = points[0];
const z1 = points[0];
console.log(x1, y1, z1);

const [x2, y2, z2] = points;
console.log(x2, y2, z2);

const [x3, , z3] = points;
console.log(x3, z3);

const [x4, y4] = points;
console.log(x4, y4);

const car = {
  type: 't',
  color: 's',
  model: 2017,
};
const type1 = car.type;
const color1 = car.color;
const model1 = car.model;
console.log(type1, color1, model1);
const { type, color, model, gear } = car;
console.log(type, color, model, gear);
