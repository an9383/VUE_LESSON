import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';

import styled, { css } from 'styled-components';
const StyledPageHome = styled.div`
  /* NavLink 컴포넌트에서 사용되는 CSS */
  .active {
    background-color: aqua;
  }
  .inactive {
    background-color: none;
  }
`;

import CompStyle from '../containers/styled/CompStyle';
import CrudContainer from '../components/crud/CrudContainer';
import HomeContainer from '../containers/home/HomeContainer';
import TodoContainer from '../containers/todo/TodoContainer';

function PageHome({ ...props }) {
  return (
    <StyledPageHome>
      <div>
        <ul>
          <li>
            <NavLink to={''}>Home</NavLink>
          </li>
          <li>
            <NavLink to={'/style'}>Style</NavLink>
          </li>
          <li>
            <NavLink to={'/crud'}>Crud</NavLink>
          </li>
          <li>
            <NavLink to={'/todo'}>Todo</NavLink>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path={'/style'} element={<CompStyle />}></Route>
        <Route path={'/crud'} element={<CrudContainer />}></Route>
        <Route path={'/todo'} element={<TodoContainer />}></Route>
        <Route path={'/'} element={<HomeContainer />}></Route>
        <Route path={'*'} to={'/'}></Route>
      </Routes>
    </StyledPageHome>
  );
}

PageHome.propTypes = {
  // props의 프로퍼티 타입 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // 인자명: PropTypes.func.isRequired,
  // 인자명: PropTypes.arrayOf(PropTypes.object),
};
PageHome.defaultProps = {
  // props의 디폴트 값 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // 인자명: () => {},
  // 인자명: [],
};

export default React.memo(PageHome); // React.memo()는 props 미변경시 컴포넌트 리렌더링 방지 설정
