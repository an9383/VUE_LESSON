�ڹٽ�ũ��Ʈ �׽�Ʈ �����ӿ�ũ
- Mocha
- Jasmine
- Jest
- Karma

Jest��
- jest �� �ڵ� ���� ���θ� �׽�Ʈ �ϴ� Jasmine ����� '�׽��� �����ӿ�ũ' �Դϴ�.
- https://jestjs.io/

Jest �׽�Ʈ ����
- __test__ ����
- xxxx.test.js ����

Jest�� ����
- ���� ����
- ������ �׽�Ʈ ����
- Mocking ��ü �׽�Ʈ ����
- �׽�Ʈ �ڵ� �и� ����
- �ڵ� coverage(���� �м�) ����
- Jasmine assertion ����

Jest�� test suite �� test unit �� ������ ���´�.
| �Լ�       | ����                                            |
| ---------- | ----------------------------------------------- |
| describe   | �׽�Ʈ �ٷ���                                   |
|            | ���� ���� �׽�Ʈ�� ���δ� ��Ȱ                  |
| beforeAll  | �غ�                                            |
| beforeEach | ��� �׽�Ʈ �ٷ��� �Ǵ� ���� �׽�Ʈ�� ���� �غ� |
| afterAll   | ����                                            |
| afterEach  | ��� �½�Ʈ �ٷ��� �Ǵ� ���� �׽�Ʈ�� ���� ���� |
| test       | ���� �׽�Ʈ ���̽�                              |

�½�Ʈ��
1. �׽�Ʈ �ٷ��� �ۼ� ==> describe
2. �׽�Ʈ ���̽� �ۼ� ==> it
3. �׽�Ʈ ���̽��� assertion ����.
  assertion �� BDD �������� �ۼ��ϸ� ��/�ƴϿ� �� ó���ȴ�.

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

Jest�� �����ϴ� �ֿ� assertion �޼��� ���
- not: �̾�����ü���� �񱳸��ݴ�θ����.
- expect(OBJECT).toBe(value): �ڹٽ�ũ��Ʈ ��ġ �����ڡ�==)�� �ÿ����� �� ���� ���� �� ���� �����Ѵ�(���Ӹ� �ƴ϶� ���� Ÿ�Ե� ���Ѵ�).
- expect(OBJECT).toEqual(value): ���� ���� ��(deep-equal) ���� �� ������ ���� ���� �Ѵ�.
- expect(OBJECT).toBeFalsy(): ���� ������ ������ �����Ѵ�(�̾�����������������캸�� �ٶ���).
- expect(OBJECT).toBeTruthy(): ���� ���� ������ �����Ѵ�.
- expect(OBJECT).toBeNul l(): ���� null �� ������ �����Ѵ�.
- expect(OBJECT).toBeUndefined(): ���� ���ǵ��� ���� ������ �����Ѵ�.
- expect(OBJECT).toBeDefined(): ���� ���ǵ� ������ �����Ѵ�.
- expect(OBJECT).toMatch(regexp): ���� ����ǥ���Ŀ� ��ġ�� ������ �����Ѵ�.


���� �˻�
- jest saga debugging
- How To Debug Jest Tests
- https://www.youtube.com/watch?v=Nl54MJDR2p8&ab_channel=BrianDesign
- https://www.youtube.com/watch?v=g4MdUjxA-S4&list=PLZKTXPmaJk8L1xCg_1cRjL5huINlP2JKt

jest ������
- https://artsy.github.io/blog/2018/08/24/How-to-debug-jest-tests/
- https://github.com/facebook/jest/issues/3750


jest ������Ʈ ���� ����Ʈ
- https://jestjs.io/docs/cli
- https://jestjs.io/docs/getting-started

jest �׽�Ʈ �ڵ� �ۼ��� ���� ����Ʈ
- https://jestjs.io/docs/getting-started
- http://www.albertgao.xyz/2017/05/24/how-to-test-expressjs-with-jest-and-supertest/
- https://yonghyunlee.gitlab.io/temp_post/jest/
- https://www.js2uix.com/frontend/jest-study-step2/
- https://www.js2uix.com/frontend/jest-study-step3/




## ���� ��� �����


## server ������Ʈ ����

1. �۾� ������ �̵�
```
  $ mkdir -p ./server    # ���� ����
  $ cd ./server          # ���� �̵�
```


2. package.json ����
```
  $ npm init
```

3. node ��� ��ġ
- json-server : rest api ���� ���̺귯��
- axios : rest api ȣ�� ���̺귯��
```
  $ npm install --save json-server
  $ npm install --save axios
```

4. jest ��ġ
jest-cli �� ���� ���ϸ� �׽�Ʈ �ϴ� ��쿡 ����մϴ�.

```
  $ npm install --save-dev jest \
                           jest-cli \
                           @types/jest \
                           babel-jest
```

5. supertest ��� ��ġ
```
  $ npm install --save-dev supertest
```

6. superagent ��� ��ġ
```
  $ npm install --save-dev superagent
```

7. babel ��� ��ġ
- https://medium.com/codeclan/mocking-es-and-commonjs-modules-with-jest-mock-37bbb552da43

```
  $ npm install --save-dev @babel/cli \
                           @babel/core \
                           @babel/preset-env
```


## ������Ʈ�� ����
```
  ������Ʈ
  |-- src
  | |-- api.js
  | `-- api.test.js
  |-- .babelrc
  |-- db.json
  `-- package.json
```

### babel ��� ����
  .babelrc ������ ������Ʈ ��Ʈ�� �����
```
  $ pwd # ���� �۾��ϴ� ���� ��ġ Ȯ��
  $ ls -a # package.json ������ ���̴��� Ȯ��
  $ touch .babelrc
  $ echo -e "{\n\"presets\": [\"@babel/preset-env\"]}" > .babelrc
  $ cat .babelrc
  $ .babelrc
  {
    "presets": ["@babel/preset-env"]
  }
```


### json-server ���� �� �����ϱ�

1. db.json ���� ����
```
  $ ls               # package.json ������ ���̴��� Ȯ��.
  $ touch ./db.json  # db.json ���� ����
  $ cat ./db.json    # db.json ���� ���� Ȯ��
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

2. package.json �� json-server ���� script �߰�

- ���� ��
```
{
  ...�߷�
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
}
```

- ���� ��
```
{
  ...�߷�
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",

    "server": "npx json-server --watch db.json --port 5000",
  },
  ...�߷�
}
```


3. json-server �����ϱ�
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


### ������Ʈ�� api �׽�Ʈ �ڵ� �߰�

1. package.json ���� ���� jest ���� script �߰�
* https://tod2.tistory.com/214
* https://jestjs.io/docs/cli#--envenvironment


- ���� ��
```
{
  ...�߷�
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
}
```

- ���� ��
```
{
  ...�߷�
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",

    "test:watch": "jest --watchAll --env=node --verbose --rootDir=./src",
  },
  ...�߷�
}
```

2. ���� ����
```
  $ mkdir -p ./src

  $ touch ./src/api.js \
          ./src/api.test.js
```

3. src/api.js �� api ȣ�� �ڵ� �ۼ�
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

4. src/api.test.js �� ���� �׽�Ʈ �ۼ�
```
  const api = require('./api');

  describe('api.test �׽�Ʈ', () => {
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

5. ���� ���� watch ���� jest �׽�Ʈ ����
```
  $ ls # package.json ���̴��� Ȯ��
  $ npx jest --help
  $ npx jest --env=node --watch src/api.test.js
```

6. ��ü ���� watch ���� jest �׽�Ʈ ����
```
  $ ls # package.json ���̴��� Ȯ��
  $ npx jest --help
  $ npx jest --watch --env=node
```




### jest deubgging ���� �����ϱ�

1. package.json ���� ���� jest deubgging ���� ���� script �߰�
* https://tod2.tistory.com/214
* https://jestjs.io/docs/cli#--envenvironment


- ���� ��
```
{
  ...�߷�
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
    "test:watch": "jest --watchAll --env=node --verbose --rootDir=./src",
  },
}
```

- ���� ��
```
{
  ...�߷�
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "test:watch": "jest --watchAll --env=node --verbose --rootDir=./src",

    "test:debug": "node --inspect-brk node_modules/jest/bin/jest --runInBand --watch --env=node --verbose --rootDir=./src"
  },
  ...�߷�
}
```

2. jest deubgging ���� �����ϱ�

```
  $ node --inspect-brk node_modules/jest/bin/jest --runInBand --watch --env=node --verbose --rootDir=./src"

  $ npm run test:debug
```

3. �׽�Ʈ �ڵ�(api.test.js)�� debugger ����

4. Chrome�� ���� �ּ� ǥ���ٿ� ������ �Է��մϴ�.
chrome://inspect

5. "Open dedicated DevTools for Node" Ŭ��
���� �߰� 127.0.0.1:9229

6. CLI ���� ������ �����Ϸ��� �̸� "ctrl + c" ���� ���� ����
