import { Select } from '@chakra-ui/react'
import React from 'react'

const ChartSelectDays = ({ setDays }) => {
  const selectDays = [
    {
      title: '24h',
      value: 1,
    },
    {
      title: '7d',
      value: 7,
    },
    {
      title: '14d',
      value: 14,
    },
    {
      title: '30d',
      value: 30,
    },
    {
      title: '60d',
      value: 60,
    },
    {
      title: '90d',
      value: 90,
    },
    {
      title: '180d',
      value: 180,
    },
    {
      title: '1y',
      value: 365,
    },
    {
      title: 'max',
      value: 'max',
    },
  ]

  return (
    <Select
      variant="filled"
      onChange={e => setDays(e.target.value)}
      maxW="max-content"
      py="4"
    >
      {selectDays.map(({ title, value }) => (
        <option key={value} value={value}>
          {title}
        </option>
      ))}
    </Select>
  )
}

export default ChartSelectDays
