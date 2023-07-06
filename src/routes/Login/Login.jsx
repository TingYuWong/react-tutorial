import styles from './Login.module.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate()

  const handleLogin = () => {
    localStorage.setItem('username', 'User One')
    navigate('/')
  }

  return (
    <button onClick={handleLogin}>Login</button>
  )
}

export default Login