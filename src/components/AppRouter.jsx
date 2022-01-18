import React from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  useLocation,
} from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import ForgotPasswordPage from '../pages/ForgotPasswordPage'
import Homepage from '../pages/Homepage'
import Loginpage from '../pages/Loginpage'
import NotfoundPage from '../pages/NotfoundPage'
import Profilepage from '../pages/Profile/Profile'
import EditProfile from '../pages/Profile/Update'
import Registerpage from '../pages/Registerpage'
import ResetPasswordPage from '../pages/ResetPasswordPage'
import TestPage from '../pages/TestPage'
import IndexClient from '../pages/TargetClientList/IndexClient'
import SocialWorker from '../pages/SocialWorker/SocialWorker'
import Reports from '../pages/Reports/Index'
import IndexUser from '../pages/Users/IndexUser'
import IndexPatient from '../pages/Patients/IndexPatient'
import ImmunizationNutrition from '../pages/LandingPages/ImmunizationNutrition'
import AnimalBite from '../pages/LandingPages/AnimalBite'
import CommunicableDiseases from '../pages/LandingPages/CommunicableDiseases'
import TropicalDiseases from '../pages/LandingPages/TropicalDiseases'
import IndexAnimalBite from '../pages/AdminPages/AnimalBite/IndexAnimalBite'
import IndexCommunicable from '../pages/AdminPages/Communicable/IndexCommunicable'
import IndexImmunization from '../pages/AdminPages/Immunization/IndexImmunization'
import IndexTropical from '../pages/AdminPages/Tropical/IndexTropical'
export default function AppRouter(props) {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/animal-bite' component={AnimalBite} />
          <Route exact path='/communicable' component={CommunicableDiseases} />
          <Route exact path='/immunization' component={ImmunizationNutrition} />
          <Route exact path='/tropical' component={TropicalDiseases} />
          <ProtectedRoute exact path='/animal-bite-admin' component={IndexAnimalBite} />
          <ProtectedRoute exact path='/communicable-admin' component={IndexCommunicable} />
          <ProtectedRoute exact path='/immunization-admin' component={IndexImmunization} />
          <ProtectedRoute exact path='/tropical-admin' component={IndexTropical} />
          <ProtectedRoute exact path='/login' component={Loginpage} />
          <ProtectedRoute exact path='/register' component={Registerpage} />
          <ProtectedRoute exact path='/profile' component={Profilepage} />
          <ProtectedRoute exact path='/profile/edit' component={EditProfile} />
          <ProtectedRoute exact path='/test' component={TestPage} />
          <ProtectedRoute exact path='/social-worker' component={SocialWorker} />
          <ProtectedRoute exact path='/users' component={IndexUser} />
          <ProtectedRoute exact path='/patients' component={IndexPatient} />
          <ProtectedRoute exact path='/target-client-list' component={IndexClient} />
          <ProtectedRoute exact path='/reports' component={Reports} />
          <ProtectedRoute exact path='/forgot-password' component={ForgotPasswordPage} />
          <ProtectedRoute exact path='/reset-password' component={ResetPasswordPage} />
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
      <Redirect to={location.state?.from ?? '/target-client-list'} />
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
