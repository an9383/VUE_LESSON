import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
  useReducer,
  Fragment,
  forwardRef,
  useImperativeHandle,
} from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  useParams,
  useLocation,
  useHistory,
  useNavigate,
} from 'react-router-dom';

const StyledTodoList = styled.div`
  /* styled 설정. https://styled-components.com/docs/basics#adapting-based-on-props */

  ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
  }

  li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
  }

  li.checked {
    background: #bbb;
    color: #fff;
    text-decoration: line-through;
  }

  .checkBtn {
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
  }

  .removeBtn {
    margin-left: auto;
    color: #de4343;
  }

  .list-enter-active,
  .list-leave-active {
    transition: all 1s;
  }

  .list-enter,
  .list-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }
`;

function TodoList({ todoItems,
  callbackDoneToggle,
  callbackRemoveTodo }) {
  const handlerDoneToggle = (e) => {
    // 이벤트 핸들러는 화살표 함수로 만든다
    console.log(e.target);
    debugger;

    // data-id={item.id}
    const id = Number(e.target.dataset.id);

    // data-item={JSON.stringify(item)}
    const item = JSON.parse(e.target.dataset.item);

    // 부모 컴포넌트의 콜백 메서드 callbackDoneToggle 호출
    callbackDoneToggle(id);
  };

  const handlerRemoveTodo = (e, id) => {
    // 이벤트 핸들러는 화살표 함수로 만든다
    console.log(e.target);
    debugger;

    // 부모 컴포넌트의 콜백 메서드 callbackRemoveTodo 호출
    callbackRemoveTodo(id);
  };

  // JSX로 화면 만들기. 조건부 렌더링: https://ko.reactjs.org/docs/conditional-rendering.html
  const lis =
    todoItems &&
    todoItems.length > 0 &&
    todoItems.map((item) => {
      // item === {id, todo, done}
      const checked = item.done ? 'checked' : null;
      return (
        <li
          className={checked}
          key={item.id}
          data-id={item.id}
          data-item={JSON.stringify(item)}
          onClick={handlerDoneToggle}
        >
          <i aria-hidden="true" className="checkBtn fas fa-check"></i>
          {item.todo}
          <span
            type="button"
            className="removeBtn"
            onClick={(e) => {
              e.stopPropagation(); //  이벤트 취소. 버블링 방지

              // 부모 컴포넌트의 콜백 메서드 handlerRemoveTodo 호출
              handlerRemoveTodo(e, item.id); // item.id 는 number
            }}
          >
            <i aria-hidden="true" className="far fa-trash-alt"></i>
          </span>
        </li>
      );
    });
  return (
    <StyledTodoList>
      <section>
        <ul>{lis}</ul>
      </section>
    </StyledTodoList>
  );
}

TodoList.propTypes = {
  // props의 프로퍼티 타입 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  todoItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  callbackDoneToggle: PropTypes.func.isRequired,
  callbackRemoveTodo: PropTypes.func.isRequired,
};
TodoList.defaultProps = {
  // props의 디폴트 값 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  todoItems: [],
  callbackDoneToggle: () => {},
  callbackRemoveTodo: () => {},
};

export default React.memo(TodoList); // React.memo()는 props 미변경시 컴포넌트 리렌더링 방지 설정
