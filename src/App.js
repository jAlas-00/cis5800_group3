import React from 'react'
import AppRouter from './components/AppRouter'
import Footer from './components/Footer'
import AuthContext from './contexts/AuthContext'

function App() {
  return (
    <>
    <AuthContext>
      <AppRouter />
    </AuthContext>
    <Footer/>
    </>
  )
}

export default App