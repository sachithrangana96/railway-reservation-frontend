import React from 'react'
import { Navigate } from 'react-router'
import authService from './utils/authService'

const ProtectedRoute = ({user,children}) => {
    console.log(authService.checkUser())
    if (!user) {
        return <Navigate to="/login" replace />
      }
      return children

}

export default ProtectedRoute
