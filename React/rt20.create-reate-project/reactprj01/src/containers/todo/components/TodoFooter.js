import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useReducer,
} from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const StyledTodoFooter = styled.div`
  /* styled 설정. https://styled-components.com/docs/basics#adapting-based-on-props */
  .clearAllContainer {
    width: 16rem;
    height: 50px;
    line-height: 50px;
    background-color: white;
    border-radius: 5px;
    margin: 0 auto;
  }

  .clearAllBtn {
    color: #e20303;
    display: block;
  }
`;

function TodoFooter({ callbackClearAll }) {
  // 이벤트 핸들러 작성.
  const handlerClearAll = (e) => {
    // 이벤트 핸들러는 화살표 함수로 만든다
    console.log(e.target);
    debugger;

    // 부모 컴포넌트의 콜백 메서드 callbackClearAll 호출.
    callbackClearAll();
  };

  // JSX로 화면 만들기. 조건부 렌더링: https://ko.reactjs.org/docs/conditional-rendering.html
  return (
    <StyledTodoFooter>
      <div className="clearAllContainer">
        <span className="clearAllBtn" onClick={handlerClearAll}>
          Clear All component
        </span>
      </div>
    </StyledTodoFooter>
  );
}

TodoFooter.propTypes = {
  // props의 프로퍼티 타입 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  callbackClearAll: PropTypes.func.isRequired,
};
TodoFooter.defaultProps = {
  // props의 디폴트 값 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  callbackClearAll: () => {},
};

export default React.memo(TodoFooter); // React.memo()는 props 미변경시 컴포넌트 리렌더링 방지 설정
