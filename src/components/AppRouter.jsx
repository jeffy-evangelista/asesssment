import React from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  useLocation,
} from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import Homepage from '../pages/Homepage'
import Loginpage from '../pages/Loginpage'
import NotfoundPage from '../pages/NotfoundPage'
import Profilepage from '../pages/Profile/Profile'
import EditProfile from '../pages/Profile/Update'
import Registerpage from '../pages/Registerpage'

import TechnologyStack from '../pages/NavPages/User/TechnologyStack'
import ContactInformation from '../pages/NavPages/User/ContactInformation'
import IndexUser from '../pages/Users/IndexUser'
import Order from '../pages/NavPages/User/Order/Order'
import Menu from '../pages/NavPages/User/Menu'


export default function AppRouter(props) {
  return (
    <>
      <Router>
        <Switch>

          <Route exact path='/' component={Homepage} />
          <Route exact path='/contact-information' component={ContactInformation} />
          <Route exact path='/menu' component={Menu} />
          <Route exact path='/technology-stack' component={TechnologyStack} />
          <Route exact path='/order' component={Order} />
          <ProtectedRoute exact path='/login' component={Loginpage} />
          <ProtectedRoute exact path='/register' component={Registerpage} />
          <ProtectedRoute exact path='/profile' component={Profilepage} />
          <ProtectedRoute exact path='/profile/edit' component={EditProfile} />
          <ProtectedRoute exact path='/users' component={IndexUser} />
        
          <Route exact path='*' component={NotfoundPage} />
        </Switch>
      </Router>
    </>
  )
}

function ProtectedRoute(props) {
  const { currentUser } = useAuth()
  const { path } = props
  const location = useLocation()

  if (
    path === '/login' ||
    path === '/register' ||
    path === '/forgot-password' ||
    path === '/reset-password'
  ) {
    return currentUser ? (
      <Redirect to={location.state?.from ?? '/order'} />
    ) : (
      <Route {...props} />
    )
  }
  return currentUser ? (
    <Route {...props} />
  ) : (
    <Redirect
      to={{
        pathname: '/login',
        state: { from: path },
      }}
    />
  )
}
