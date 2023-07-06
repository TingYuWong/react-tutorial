import { useState, createContext } from 'react'
import { useNavigate } from 'react-router-dom'

const useAuth = () => {

  const [username, setUserName] = useState('')
  const navigate = useNavigate()

  const handleUserName = () => {
    setUserName(localStorage.getItem('username'))
  }

  const handleLogin = () => {
    localStorage.setItem('username', 'User One')
    handleUserName()
    navigate('/')
  }

  const handleLogOut = () => {
    localStorage.removeItem('username')
    handleUserName()
    navigate('/')
  }

  return { username, handleLogin, handleLogOut, handleUserName }
}

export const UserContext = createContext()
export default useAuth

