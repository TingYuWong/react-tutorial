import { useEffect, useState, useContext } from 'react'
import styles from './Root.module.css'
import { Outlet, Link } from 'react-router-dom'
import useAuth, { UserContext } from '../../CustomHook/useAuth'

const Root = () => {

  const { username, handleLogin, handleLogOut, handleUserName } = useAuth()

  useEffect(() => {
    handleUserName()
  }, [])

  return (
    <div>
      <div>
        {
          username ? (
            <div>
              Welcome back { username }
              <button onClick={handleLogOut}>Log Out</button>
            </div>
          ) : (
            <button onClick={handleLogin}>Log In</button>
          )
        }
      </div>
      <div>Hi I am root!</div>
      <div className={styles.nav}>
        <Link to="public">Public Route</Link>
        { username && <Link to="protected">Protected Route</Link> }
      </div>
      <UserContext.Provider value={ { username, handleLogin, handleLogOut } }>
        <Outlet />
      </UserContext.Provider>
    </div>
  )
}

export default Root