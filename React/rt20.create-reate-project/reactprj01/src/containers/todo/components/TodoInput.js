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

const StyledTodoInput = styled.div`
  /* styled 설정. https://styled-components.com/docs/basics#adapting-based-on-props */
  button {
    border-style: groove;
  }

  input {
    border-style: groove;
    width: 200px;
  }

  .shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
  }

  input:focus {
    outline: none;
  }

  .inputBox {
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
  }

  .inputBox input {
    border-style: none;
    font-size: 0.9rem;
  }

  .addContainer {
    float: right;
    background: linear-gradient(to right, #6478fb, #8763fb);
    display: inline-block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
  }

  .addBtn {
    color: white;
    vertical-align: middle;
  }

  .closeModalBtn {
    color: #62acde;
  }

  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-container {
    width: 300px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }

  .modal-header h3 {
    margin-top: 0;
    color: #62acde;
  }

  .modal-body {
    margin: 20px 0;
  }

  .modal-default-button {
    float: right;
  }

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

function TodoInput({ callbackAddTodo }) {
  // useState 를 사용한 컴포넌트의 상태값 설정
  const [isShowModal, setIsShowModal] = useState(false); // 기본타입인 경우

  // ref 만들기.
  const refInputTodo = useRef();

  // 이벤트 핸들러 작성.
  const handlerShowModal = (e) => {
    // 이벤트 핸들러는 화살표 함수로 만든다
    console.log(e.target);
    debugger;
    // isShowModal === true  ===> isShowModal = false
    // isShowModal === false ===> isShowModal = true
    setIsShowModal(!isShowModal);
  };
  const handlerAddTodo = (e) => {
    // 이벤트 핸들러는 화살표 함수로 만든다
    console.log(e.target);
    debugger;

    // click 이벤트 취소. 버블링 방지
    e.stopPropagation();

    // input 에 입력된 값을 가져오기. 어떻게 해야 하나? ==> ref이름.current.속성명
    // value 속성값 가져오기: ref이름.current.value
    // class 속성값 가져오기: ref이름.current.className
    const value = refInputTodo.current.value;

    // input 태그 입력값 유효성 검사

    // input 태그에 빈 문자열이나 공백이 입력 되는 경우는 modal 창이 출력되게 하시오
    if (!value || !value.trim()) {
      // isShowModal = true;
      setIsShowModal(true);
      return; // 함수 실행을 멈춘다.
    }

    // TodoContainer 의 callbackAddTodo 메서드 호출 기능 추가
    callbackAddTodo(value);

    // add 후에 input 태그의 입력 값 지우기.
    // input 의 value 속성에 값을 설정하기. 어떻게 해야 하나? ==> ref이름.current.속성명
    // value 속성값 가져오기: ref이름.current.value
    refInputTodo.current.value = '';
  };

  // JSX로 화면 만들기. 조건부 렌더링: https://ko.reactjs.org/docs/conditional-rendering.html
  return (
    <StyledTodoInput>
      <div className="inputBox shadow">
        <input
          type="text"
          placeholder="Type what you have to do"
          ref={refInputTodo}
          onKeyUp={(e) => {
            // enter 키 가 입력되면
            e.keyCode === 13 && handlerAddTodo(e);
          }}
        />
        <span className="addContainer" onClick={handlerAddTodo}>
          <i aria-hidden="true" className="addBtn fas fa-plus"></i>
        </span>

        {isShowModal && (
          <div className="modal-mask">
            <div className="modal-wrapper">
              <div className="modal-container">
                <div className="modal-header">
                  <h3 slot="header">경고</h3>
                </div>

                <div className="modal-footer" onClick={handlerShowModal}>
                  <span>
                    할 일을 입력하세요.
                    <i
                      className="closeModalBtn fas fa-times"
                      aria-hidden="true"
                    ></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </StyledTodoInput>
  );
}

TodoInput.propTypes = {
  // props의 프로퍼티 타입 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  callbackAddTodo: PropTypes.func.isRequired,
};
TodoInput.defaultProps = {
  // props의 디폴트 값 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  callbackAddTodo: () => {},
};

export default React.memo(TodoInput); // React.memo()는 props 미변경시 컴포넌트 리렌더링 방지 설정
