import React, { useContext } from 'react'
import { StatGroup } from '@chakra-ui/react'
import StatsItem from './StatsItem'
import { CurrencyContext } from '../../contexts/CurrencyContext'
import { useTranslation } from 'react-i18next'

const Stats = ({ coinData }) => {
  const marketData = coinData.market_data
  const { currency } = useContext(CurrencyContext)
  const { t } = useTranslation()

  const statsItems = [
    {
      title: t('coin.stats.price'),
      number: marketData?.current_price[currency],
      changes: marketData?.price_change_percentage_7d,
    },
    {
      title: t('coin.stats.market_cap'),
      rank: coinData.market_cap_rank,
      number: marketData?.market_cap[currency],
      changes: marketData?.market_cap_change_percentage_24h,
    },
    {
      title: t('coin.stats.total_volume'),
      number: marketData?.total_volume[currency],
    },
  ]

  return (
    <StatGroup flexDirection={['column', null, 'row']}>
      {statsItems.map(stat => (
        <StatsItem key={stat.title} data={stat} />
      ))}
    </StatGroup>
  )
}

export default Stats
