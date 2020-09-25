import { Menu } from 'antd'
import React, { Component } from 'react'
import { asyncRoutes } from '../../router/router'
import { Link } from 'react-router-dom'
import './Layout.scss'
class NavBar extends Component{
  render() {
    const { SubMenu } = Menu
    return (
      <div className="z-layout">
        <Menu
          mode="inline"
        >
          {asyncRoutes.map(parent => (
            <SubMenu key={parent.path} title={parent.title}>
              {parent.subs.map(child => 
                (<Menu.Item
                  key={child.path}>
                    <Link to={child.path}>
                      { child.title }
                    </Link>
                </Menu.Item>))}
            </SubMenu>))}
        </Menu>
        <div className="app-main">
          { this.props.children }
        </div>
      </div>
    )
  }
}

export default NavBar