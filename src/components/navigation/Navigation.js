import React from 'react';
import { Link } from 'react-router-dom'
import { Menu } from 'antd';
import { Wrapper } from './Navigation.style'

function Navigation() {
  return (
    <Wrapper>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">
          <Link to={`/`}>Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to={`/project/Awesone`}>Project Awesone</Link>
        </Menu.Item>
      </Menu>


    </Wrapper>
  );
}

export default Navigation;