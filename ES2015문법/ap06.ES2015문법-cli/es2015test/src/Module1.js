/*

  export 변수나 함수를 내보낼 때 사용한다.
  export 파일에서 여러 번 사용 가능하다.

  exprot default 변수나 함수를 내보낼 때 사용한다.
  export default 는 파일에서 한 번만 사용 가능하다.
*/

const a = 1;
const b = 2;

// export 변수나 함수를 내보낼 때 사용한다.
// export 파일에서 여러 번 사용 가능하다.
export { a };
export const c = 3;

// exprot default 변수나 함수를 내보낼 때 사용한다.
// export default 는 파일에서 한 번만 사용 가능하다.
export default b;
