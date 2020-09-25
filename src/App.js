import React from 'react'
import Login from './pages/Login/Login'
import Layout from './components/layout/Layout'
import CompanyList from './pages/company/CompanyList'
import Administrators from './pages/company/Administrators'
import { Switch, Route } from 'react-router-dom'
import './App.css'
function App() {
  return (
    <Switch>
      <Route exact path="/" component={Login}></Route>
      <Route path="/company" render=
        {
          () => (
            <Layout>
              {/* <Route exact path="/company" component={CompanyList}></Route> */}
              <Route exact path="/company/list" component={CompanyList}></Route>
              <Route exact path="/company/administrators" component={Administrators}></Route>
              <Route exact path="/company/keyManage"></Route>
            </Layout>
          )
        }>
      </Route>
      <Route path="/project" render=
        {
          () => (
            <Layout>
              {/* <Route exact path="/company" component={CompanyList}></Route> */}
              <Route exact path="/project/list" component={CompanyList}></Route>
              <Route exact path="/project/administrators" component={Administrators}></Route>
            </Layout>
          )
        }>
      </Route>
    </Switch>
  )
}

export default App;
