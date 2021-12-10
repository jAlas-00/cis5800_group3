import { BrowserRouter as Router, Routes, Route, Navigate, Outlet} from 'react-router-dom'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import ProfilePage from '../pages/ProfilePage'
import ProtectedPage from '../pages/ProtectedPage'
import ForgotPasswordPage from '../pages/ForgotPasswordPage'
import ErrorPage from '../pages/ErrorPage'
import NavbarComponent from './NavbarComponent'
import LibraryUsersPage from '../pages/LibraryUsersPage'
import ReportPage from '../pages/ReportPage.js'
import ApiPage from '../pages/ApiPage.js'
import CatalogPage from '../pages/CatalogPage'
import { useAuth } from '../contexts/AuthContext'


function AppRouter() {
  return (
    <>
    <Router>
      <NavbarComponent/>
      <Routes>
        <Route exact path='/' element={<HomePage />}/>
        <Route exact path='/login' element={<LoginPage />}/>
        <Route exact path='/register' element={<RegisterPage />}/>

        <Route exact path='/profile' element={<ProtectedRoute />}>
          <Route exact path='/profile' element={<ProfilePage/>}/>
        </Route>

        <Route exact path='/protected-page' element={<ProtectedPage />}/>
        <Route exact path='/forgotpassword' element={<ForgotPasswordPage />}/>
        <Route exact path='/libraryusers' element={<LibraryUsersPage />}/>
        <Route exact path='/report' element={<ReportPage />}/>


        <Route exact path='/books' element={<ApiPage />}/>


        <Route exact path='/catalog' element={<CatalogPage />}/>
        <Route exact path='*' element={<ErrorPage />}/>
      </Routes>
    </Router>
    </>
  )
}

const ProtectedRoute = () => {
  let authorized = true
  const { currentUser } = useAuth()
  {currentUser != 'null' ? authorized = true : authorized = false}

  return authorized ? <Outlet /> : <Navigate to="/login" />;
}


export default AppRouter