import React from 'react'
import { Navigate } from 'react-router'
import authService from './utils/authService'
import { useEffect, useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { fetchMe } from './pages/profile/slices/profileSlice';

const ProtectedRoute = ({user,children}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const checkUser = async () => {
      try {
        const response = await dispatch(fetchMe());
        return !!response.data;
      } catch (error) {
        return false;
      }
    };

    checkUser();
   
  }, []);
    console.log(authService.checkUser())
    if (!user) {
        return <Navigate to="/login" replace />
      }
      return children

}

export default ProtectedRoute
