import styles from './ProtectedContent.module.css'
import { useNavigate } from 'react-router-dom'
import { getPrivateData } from '../../api'
import { useState, useEffect } from 'react'

const usePrivateData = () => {
  const [privateData, setPrivateData] = useState([])
  const [loading, setLoading] = useState(true)

  const call_getPrivateDataApi = async () => {
    setLoading(true)
    try {
      const data = await getPrivateData()
      setPrivateData(data)
    } catch {

    } finally {
      setLoading(false)
    }
  }

  return { loading, privateData, call_getPrivateDataApi }
}

const ProtectedContent = () => {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/")
  }

  const { loading, privateData, call_getPrivateDataApi } = usePrivateData()

  useEffect(() => {
    call_getPrivateDataApi()
  }, [])

  return (
    <>
      {
        loading ? (
          <div>Loading Private Data......</div>
        ) : (
          <div>
            {
              !!privateData.length && privateData.map((item, idx) => (
                <div key={idx}>{item}</div>
              ))
            }
            <button onClick={handleClick}>Back To Root Route</button>
          </div>
        )
      }
    </>
    )
}

export default ProtectedContent