import React, { useContext } from 'react'
import { Box, Text, useColorModeValue } from '@chakra-ui/react'
import { CurrencyContext } from '../../contexts/CurrencyContext'
import { useTranslation } from 'react-i18next'

const ChartTooltip = ({ payload, label, active }) => {
  const { currencySymbol } = useContext(CurrencyContext)
  const { t } = useTranslation()
  const title = t(`coin.chart.${payload?.[0]?.name}`)
  const backgroundColor = useColorModeValue('gray.300', 'gray.700')

  return (
    active && (
      <Box p="3" bg={backgroundColor} rounded="md">
        <Text>{`${title}: ${currencySymbol}${payload?.[0]?.value}`}</Text>
        <Text>{`The ${title} at ${label} is ${currencySymbol}${payload?.[0]?.value}`}</Text>
      </Box>
    )
  )
}

export default ChartTooltip
