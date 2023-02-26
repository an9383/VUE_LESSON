import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

const StyledTodoContainer = styled.div`
  /* styled 설정. https://styled-components.com/docs/basics#adapting-based-on-props */
`;

import TodoHeader from './components/TodoHeader';
import TodoFooter from './components/TodoFooter';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

function TodoContainer({ ...props }) {
  // useState 를 사용한 컴포넌트의 상태값 설정
  const [todoItems, setTodoItems] = useState([
    { id: 1, todo: '영화보기', done: false },
    { id: 2, todo: '주말 산책', done: true },
    { id: 3, todo: 'ES6 학습', done: false },
    { id: 4, todo: '잠실 야구장', done: false },
  ]); // 배열타입인 경우

  // callback 메서드 작성. callback 메서드는 부모의 공유 상태값을 변경하기 위해서 사용된다.
  const callbackClearAll = useCallback(
    (param) => {
      // state 변경
      // setTodoItems 는  todoItems 상태를 바꾸기 위한 setter 메서드
      // todoItems = [];
      debugger;
      setTodoItems([]);
    },
    [
      /* 연관배열: 콜백 메서드에서 변경하고자 하는 연관되는 상태(변수)명들을 기술 */
      todoItems,
    ],
  );
  const callbackDoneToggle = useCallback(
    (id) => {
      // state 변경
      // setTodoItems 는  todoItems 상태를 바꾸기 위한 setter 메서드
      debugger;

      // 배열 복제
      const newitems =
        todoItems &&
        todoItems.length > 0 &&
        todoItems.map((item) => {
          if (id === item.id) {
            item.done = !item.done;
          }
          return item;
        });

      // 배열 할당
      setTodoItems(newitems);
    },
    [
      /* 연관배열: 콜백 메서드에서 변경하고자 하는 연관되는 상태(변수)명들을 기술 */
      todoItems,
    ],
  );

  const callbackRemoveTodo = useCallback(
    (id) => {
      // state 변경 코드를 완성하시오.
      // filter 메서드를 이용한 삭제 방법 실습.

      // 배열 복제
      const newitems =
        todoItems &&
        todoItems.length > 0 &&
        todoItems.filter((item) => {
          if (item.id === id) return false; // 삭제 == 뺀다
          return true; // 나둔다.
        });

      // 배열 할당
      setTodoItems(newitems);
    },
    [
      /* 연관배열: 콜백 메서드에서 변경하고자 하는 연관되는 상태(변수)명들을 기술 */
      todoItems,
    ],
  );

  const callbackAddTodo = useCallback(
    (value) => {
      // state 변경 코드를 완성하시오.
      // map과 reduce 를 사용하여 max id 구하기 ==> newid 만들기
      const maxid =
        todoItems &&
        todoItems.length > 0 &&
        todoItems
          .map((item) => item.id) // [1,2,3,4]
          .reduce((pvalue, cvalue) => {
            // 큰값 반환하기
            if (pvalue > cvalue) return pvalue;
            else return cvalue;
          }, 0);

      // todoItems 추가할 객체 만들기
      const newtodo = {
        id: maxid + 1,
        todo: value,
        done: false,
      };

      // 배열에 추가.
      // todoItems.push(newItem);
      // todoItems = [...todoItems, newTodo];
      setTodoItems([...todoItems, newTodo]);
    },
    [
      /* 연관배열: 콜백 메서드에서 변경하고자 하는 연관되는 상태(변수)명들을 기술 */
      todoItems,
    ],
  );

  // 이벤트 핸들러 작성.
  const handler = (e) => {
    // 이벤트 핸들러는 화살표 함수로 만든다
    console.log(e.target);
  };

  // JSX로 화면 만들기. 조건부 렌더링: https://ko.reactjs.org/docs/conditional-rendering.html
  return (
    <StyledTodoContainer>
      <div id="app">
        {/* <!-- TodoHeader --> */}
        <TodoHeader></TodoHeader>

        {/* <!-- TodoInput --> */}
        <TodoInput callbackAddTodo={callbackAddTodo}></TodoInput>

        {/* <!-- TodoList --> */}
        <TodoList
          todoItems={todoItems}
          callbackDoneToggle={callbackDoneToggle}
          callbackRemoveTodo={callbackRemoveTodo}
        ></TodoList>

        {/* <!-- TodoFooter --> */}
        <TodoFooter callbackClearAll={callbackClearAll}></TodoFooter>
      </div>
    </StyledTodoContainer>
  );
}

TodoContainer.propTypes = {
  // props의 프로퍼티 타입 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // 인자명: PropTypes.func.isRequired,
  // 인자명: PropTypes.arrayOf(PropTypes.object),
};
TodoContainer.defaultProps = {
  // props의 디폴트 값 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // 인자명: () => {},
  // 인자명: [],
};

export default React.memo(TodoContainer); // React.memo()는 props 미변경시 컴포넌트 리렌더링 방지 설정
