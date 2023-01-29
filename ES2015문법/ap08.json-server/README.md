자바스크립트 테스트 프레임워크
- Mocha
- Jasmine
- Jest
- Karma

Jest는
- jest 는 코드 동작 여부를 테스트 하는 Jasmine 기반의 '테스팅 프레임워크' 입니다.
- https://jestjs.io/

Jest 테스트 파일
- __test__ 폴더
- xxxx.test.js 파일

Jest의 장점
- 제로 설정
- 스냅샷 테스트 지원
- Mocking 객체 테스트 지원
- 테스트 코드 분리 지원
- 코드 coverage(정적 분석) 지원
- Jasmine assertion 지원

Jest는 test suite 와 test unit 의 구조를 갖는다.
| 함수       | 설명                                            |
| ---------- | ----------------------------------------------- |
| describe   | 테스트 꾸러미                                   |
|            | 여러 개의 테스트를 감싸는 역활                  |
| beforeAll  | 준비                                            |
| beforeEach | 모든 테스트 꾸러미 또는 개별 테스트를 위한 준비 |
| afterAll   | 정리                                            |
| afterEach  | 모든 태스트 꾸러미 또는 개별 테스트를 위한 정리 |
| test       | 개별 테스트 케이스                              |

태스트는
1. 테스트 꾸러미 작성 ==> describe
2. 테스트 케이스 작성 ==> it
3. 테스트 케이스에 assertion 생성.
  assertion 은 BDD 형식으로 작성하며 예/아니오 로 처리된다.

```
  describe('Noun: method or a class/module name', () => {
    beforeAll((done) => {
      // This code will be called just once before all it statements
      done()
    });
    beforeEach((done) => {
      // This code will be called many times before all it statements
      done()
    });
    afterAll((done) => {
      // This code will be called just once after all it statements
      done()
    });
    afterEach((done) => {
      // This code will be called many times after all it statements
      done()
    });
    test('Verb describing the behavior', (done) => {
      // Assertions
      done()
    });
  });
```

Jest가 지원하는 주요 assertion 메서드 목록
- not: 이어지는체인의 비교를반대로만든다.
- expect(OBJECT).toBe(value): 자바스크립트 일치 연산자←==)를 시용했을 때 값이 동일 할 것을 예상한다(값뿐만 아니라 값의 타입도 비교한다).
- expect(OBJECT).toEqual(value): 값을 갚은 비교(deep-equal) 했을 때 동일할 것을 예상 한다.
- expect(OBJECT).toBeFalsy(): 값이 거짓일 것으로 예상한다(이어지는참고사항을살펴보기 바란다).
- expect(OBJECT).toBeTruthy(): 값이 참일 것으로 예상한다.
- expect(OBJECT).toBeNul l(): 값이 null 일 것으로 예상한다.
- expect(OBJECT).toBeUndefined(): 값이 정의되지 않을 것으로 예상한다.
- expect(OBJECT).toBeDefined(): 값이 정의될 것으로 예상한다.
- expect(OBJECT).toMatch(regexp): 값이 정규표현식에 일치할 것으로 예상한다.


구글 검색
- jest saga debugging
- How To Debug Jest Tests
- https://www.youtube.com/watch?v=Nl54MJDR2p8&ab_channel=BrianDesign
- https://www.youtube.com/watch?v=g4MdUjxA-S4&list=PLZKTXPmaJk8L1xCg_1cRjL5huINlP2JKt

jest 동영상
- https://artsy.github.io/blog/2018/08/24/How-to-debug-jest-tests/
- https://github.com/facebook/jest/issues/3750


jest 프로젝트 참조 사이트
- https://jestjs.io/docs/cli
- https://jestjs.io/docs/getting-started

jest 테스트 코드 작성시 참조 사이트
- https://jestjs.io/docs/getting-started
- http://www.albertgao.xyz/2017/05/24/how-to-test-expressjs-with-jest-and-supertest/
- https://yonghyunlee.gitlab.io/temp_post/jest/
- https://www.js2uix.com/frontend/jest-study-step2/
- https://www.js2uix.com/frontend/jest-study-step3/




## 서버 기능 만들기


## server 프로젝트 생성

1. 작업 폴더로 이동
```
  $ mkdir -p ./server    # 폴더 생성
  $ cd ./server          # 폴더 이동
```


2. package.json 생성
```
  $ npm init
```

3. node 모듈 설치
- json-server : rest api 서버 라이브러리
- axios : rest api 호출 라이브러리
```
  $ npm install --save json-server
  $ npm install --save axios
```

4. jest 설치
jest-cli 는 단일 파일만 테스트 하는 경우에 사용합니다.

```
  $ npm install --save-dev jest \
                           jest-cli \
                           @types/jest \
                           babel-jest
```

5. supertest 모듈 설치
```
  $ npm install --save-dev supertest
```

6. superagent 모듈 설치
```
  $ npm install --save-dev superagent
```

7. babel 모듈 설치
- https://medium.com/codeclan/mocking-es-and-commonjs-modules-with-jest-mock-37bbb552da43

```
  $ npm install --save-dev @babel/cli \
                           @babel/core \
                           @babel/preset-env
```


## 프로젝트에 구조
```
  프로젝트
  |-- src
  | |-- api.js
  | `-- api.test.js
  |-- .babelrc
  |-- db.json
  `-- package.json
```

### babel 모듈 설정
  .babelrc 파일을 프로젝트 루트에 만들기
```
  $ pwd # 현재 작업하는 폴더 위치 확인
  $ ls -a # package.json 파일이 보이는지 확인
  $ touch .babelrc
  $ echo -e "{\n\"presets\": [\"@babel/preset-env\"]}" > .babelrc
  $ cat .babelrc
  $ .babelrc
  {
    "presets": ["@babel/preset-env"]
  }
```


### json-server 설정 및 실행하기

1. db.json 파일 생성
```
  $ ls               # package.json 파일이 보이는지 확인.
  $ touch ./db.json  # db.json 파일 생성
  $ cat ./db.json    # db.json 파일 내용 확인
  {
    "board": [
      {
        "id": 1,
        "title": "json-server",
        "author": "typicode"
      }
    ],
    "comments": [
      {
        "id": 1,
        "body": "comment1",
        "postId": 1
      }
    ],
    "profile": {
      "name": "typicode"
    },
    "memo": [
      {
        "id": 1,
        "body": "comment1",
        "postId": 1
      }
    ],
  }
```

2. package.json 에 json-server 실행 script 추가

- 변경 전
```
{
  ...중략
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
}
```

- 변경 후
```
{
  ...중략
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",

    "server": "npx json-server --watch db.json --port 5000",
  },
  ...중략
}
```


3. json-server 실행하기
```
  $ npm run server

  \{^_^}/ hi!

  Loading db.json
  Done

  Resources
  http://localhost:5000/board
  http://localhost:5000/comments
  http://localhost:5000/profile
  http://localhost:5000/memo

  Home
  http://localhost:5000

  Type s + enter at any time to create a snapshot of the database
  Watching...
```


### 프로젝트에 api 테스트 코드 추가

1. package.json 에서 실행 jest 실행 script 추가
* https://tod2.tistory.com/214
* https://jestjs.io/docs/cli#--envenvironment


- 변경 전
```
{
  ...중략
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
}
```

- 변경 후
```
{
  ...중략
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",

    "test:watch": "jest --watchAll --env=node --verbose --rootDir=./src",
  },
  ...중략
}
```

2. 파일 생성
```
  $ mkdir -p ./src

  $ touch ./src/api.js \
          ./src/api.test.js
```

3. src/api.js 에 api 호출 코드 작성
```
  const axios = require('axios');

  const apiCore = axios.create({
    baseURL: 'http://localhost:5000/',
  });

  const commentsget1 = () => apiCore.get('/comments');
  const commentsget2 = (payload) => apiCore.get('/comments/' + payload);

  module.exports = {
    commentsget1,
    commentsget2,
  };
```

4. src/api.test.js 에 단위 테스트 작성
```
  const api = require('./api');

  describe('api.test 테스트', () => {
    test('api.test >> get', (done) => {
      const data = api.commentsget1();
      console.table(data);
      done();
    });
    test('api.test >> get', (done) => {
      const data = api.commentsget2(1);
      console.table(data);
      done();
    });
    test('api.test >> get', (done) => {
      const data = api.commentsget3(1);
      console.table(data);
      done();
    });
  });
```

5. 개별 파일 watch 모드로 jest 테스트 실행
```
  $ ls # package.json 보이는지 확인
  $ npx jest --help
  $ npx jest --env=node --watch src/api.test.js
```

6. 전체 파일 watch 모드로 jest 테스트 실행
```
  $ ls # package.json 보이는지 확인
  $ npx jest --help
  $ npx jest --watch --env=node
```




### jest deubgging 모드로 실행하기

1. package.json 에서 실행 jest deubgging 모드로 실행 script 추가
* https://tod2.tistory.com/214
* https://jestjs.io/docs/cli#--envenvironment


- 변경 전
```
{
  ...중략
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
    "test:watch": "jest --watchAll --env=node --verbose --rootDir=./src",
  },
}
```

- 변경 후
```
{
  ...중략
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "test:watch": "jest --watchAll --env=node --verbose --rootDir=./src",

    "test:debug": "node --inspect-brk node_modules/jest/bin/jest --runInBand --watch --env=node --verbose --rootDir=./src"
  },
  ...중략
}
```

2. jest deubgging 모드로 실행하기

```
  $ node --inspect-brk node_modules/jest/bin/jest --runInBand --watch --env=node --verbose --rootDir=./src"

  $ npm run test:debug
```

3. 테스트 코드(api.test.js)에 debugger 삽입

4. Chrome을 열고 주소 표시줄에 다음을 입력합니다.
chrome://inspect

5. "Open dedicated DevTools for Node" 클릭
연결 추가 127.0.0.1:9229

6. CLI 에서 실행을 중지하려면 이면 "ctrl + c" 눌러 실행 중지
