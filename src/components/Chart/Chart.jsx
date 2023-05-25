import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { Box } from '@chakra-ui/react'
import ChartTooltip from './ChartTooltip'
import { base_URL } from '../../utils'
import ChartTabs from './ChartTabs'
import ChartSelectDays from './ChartSelectDays'
import { CurrencyContext } from '../../contexts/CurrencyContext'
import { useTranslation } from 'react-i18next'
import Loader from '../Loader'

const Chart = ({ id }) => {
  const { currency } = useContext(CurrencyContext)
  const [type, setType] = useState('prices')
  const [days, setDays] = useState(1)
  const [chartData, setChartData] = useState([])

  const { i18n } = useTranslation()
  const language = i18n.language

  const [isLoading, setIsLoading] = useState(false)

  let convertedData = chartData[type]?.map(item => {
    const date = new Date(item[0])
    const dailyStat = date.toLocaleDateString(language)
    const hourlyStat = date.toLocaleTimeString(language, {
      hour: '2-digit',
      minute: '2-digit',
    })

    return {
      date: days === 1 ? hourlyStat : dailyStat,
      [type]: item[1]?.toFixed(2),
    }
  })

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)

      const { data } = await axios.get(`${base_URL}/coins/${id}/market_chart`, {
        params: {
          vs_currency: currency,
          days,
          interval: days === 1 ? 'hourly' : 'daily',
        },
      })

      setChartData(data)
      setIsLoading(false)
    }

    fetchData()
  }, [id, days, currency])

  return (
    <Box w="full" h="100%">
      <ChartTabs setType={setType} />
      <ChartSelectDays days={days} setDays={setDays} />
      {isLoading && <Loader />}
      <Box w="100%" h="500px" overflowX="auto">
        <ResponsiveContainer minWidth="500px" width="100%" height="100%">
          <LineChart data={convertedData}>
            <Line
              type="monotone"
              dataKey={type}
              strokeWidth="1.5"
              stroke="#8884d8"
            />
            <CartesianGrid stroke="#727272" />
            <XAxis dataKey="date" />
            <YAxis
              type="number"
              dataKey={type}
              width={135}
              domain={['dataMin', 'dataMax']}
            />
            <Tooltip content={<ChartTooltip />} type={type} />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  )
}

export default Chart
