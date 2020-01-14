import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  background-color: rgba(20, 20, 20, 0.8);
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const Ul = styled.ul`
  display: flex;
`;

const Li = styled.li`
  width: 80px;
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default () => (
  <Header>
    <Ul>
      <Li>
        <SLink to='/'>Movies</SLink>
      </Li>
      <Li>
        <SLink to='/tv'>TV</SLink>
      </Li>
      <Li>
        <SLink to='/search'>Search</SLink>
      </Li>
    </Ul>
  </Header>
);