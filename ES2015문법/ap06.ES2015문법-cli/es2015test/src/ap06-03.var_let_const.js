let msg = 'global scope';

if (true) {
  let msg = 'block scope';
}

function outer(params) {
  let msg = 'function scope at outer ';

  if (true) {
    let msg = 'block scope at outer ';
  }
}

const pizza = true;
pizza = false; // 에러 발생.
