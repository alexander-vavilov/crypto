import { useEffect, useState } from 'react'
import axios from 'axios'
import { base_URL } from '../utils'

const useCoinsAmount = () => {
  const [coinsAmount, setCoinsAmount] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${base_URL}/global`)
        setCoinsAmount(data.data.active_cryptocurrencies)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])

  return coinsAmount
}

export default useCoinsAmount
