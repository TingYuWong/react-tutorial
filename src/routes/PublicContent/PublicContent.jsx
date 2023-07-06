import styles from './PublicContent.module.css'
import { useNavigate } from 'react-router-dom'
import { getPublicData } from '../../api'
import { useEffect, useState } from 'react'

const usePublicData = () => {
  const [publicData, setPublicData] = useState([])
  const [loading, setLoading] = useState(true)

  const call_getPublicDataApi = async () => {
    setLoading(true)
    try {
      const data = await getPublicData()
      setPublicData(data)
    } catch {

    } finally {
      setLoading(false)
    }
  }

  return { loading, publicData, call_getPublicDataApi }
}

const PublicContent = () => {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/")
  }

  const { loading, publicData, call_getPublicDataApi } = usePublicData()

  useEffect(() => {
    call_getPublicDataApi()
  }, [])

  return (
    <>
      {
        loading ? (
          <div>Loading Public Data......</div>
        ) : (
          <div>
            {
              !!publicData.length && publicData.map((item, idx) => (
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

export default PublicContent