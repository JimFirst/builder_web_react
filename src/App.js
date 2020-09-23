import React from 'react'
import Login from './pages/Login/Login'
import NavBar from './components/layout/NavBar'
import CompanyList from './pages/company/CompanyList'
import Administrators from './pages/company/Administrators'
import { Switch, Route } from 'react-router-dom'
import './App.css'
function App() {
  return (
    <Switch>
      <Route exact path="/" component={Login}></Route>
      <Route path="/company" component={
        () => (
          <NavBar>
            {/* <Route exact path="/company" component={CompanyList}></Route> */}
            <Route exact path="/company/list" component={CompanyList}></Route>
            <Route exact path="/company/administrators" component={Administrators}></Route>
            <Route exact path="company/keyManage" render={() => import('./pages/company/CompanyList.js')}></Route>
          </NavBar>
        )
      }>
      </Route>
    </Switch>
  )
}

export default App;
