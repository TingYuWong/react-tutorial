import { useEffect } from 'react'
import styles from './ProtectedRoute.module.css'
import { Outlet, useNavigate } from 'react-router-dom'

const ProtectedRoute = () => {

  const navigate = useNavigate()

  useEffect(() => {
    if(!localStorage.getItem('username')) navigate('/')
  }, [])

  return (
    <Outlet />
  )
}

export default ProtectedRoute