import React, { Component } from 'react'
import Footer from './components/Footer'
import './Login.scss'
import { Button, Input, Form } from 'antd'
class Login extends Component {
  state = {
    btnLoading: false
  }

  login = (value) => {
    this.setState({
      btnLoading: true
    })
    setTimeout(() => {
      this.setState({
        btnLoading: false
      })
      this.props.history.push('/company/list')
    }, 1000)
    console.log(value)
  }

  render() {
    const layout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    }
    const tailLayout = {
      wrapperCol: { offset: 8, span: 16 },
    }
    const { Item }  = Form
    return (
      <div>
        <div className="login-box">
          <Form
            {...layout}
            onFinish = {this.login}
          >
            <Item
              label="用户名"
              name="username"
            >
              <Input />
            </Item>
            <Item
              label="密码"
              name="password"
            >
              <Input.Password />
            </Item>
            <Item
              {...tailLayout}
            >
              <Button type="primary" htmlType="submit" block loading={this.state.btnLoading}>登录</Button>
            </Item>
          </Form>
        </div>
        <Footer />
      </div>
    )
  }
}
export default Login