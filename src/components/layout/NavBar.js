import { Menu } from 'antd'
import React, { Component } from 'react'
import { asyncRoutes } from '../../router/router'
import { Link } from 'react-router-dom'
class NavBar extends Component{
  render() {
    const { SubMenu } = Menu
    return (
      <div>
        <Menu
          mode="inline"
          style={{width: 256}}
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
        <div>
          { this.props.children }
        </div>
      </div>
    )
  }
}

export default NavBar