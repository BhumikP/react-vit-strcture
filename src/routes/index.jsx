import { getItemFromStorage } from '@utils/helper'
import PublicRoutes from './publicRoutes'
import PrivateRoutes from './privateRoutes'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AppRoutes() {
  const isLoggedIn = getItemFromStorage('isLoggedIn')
  const [login,setLogin]=useState(!!isLoggedIn)

  const navigate=useNavigate()

  useEffect(()=>{
    if(isLoggedIn){
      setLogin(true)
    }
    if(!isLoggedIn){
      navigate('/')
    }
    
  },[isLoggedIn, navigate])

  return login ? <PrivateRoutes /> : <PublicRoutes />
}

export default AppRoutes
