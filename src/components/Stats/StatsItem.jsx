import {
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
  Tag,
  Text,
} from '@chakra-ui/react'
import React, { useContext } from 'react'
import { CurrencyContext } from '../../contexts/CurrencyContext'
import { useTranslation } from 'react-i18next'

const StatsItem = ({ data }) => {
  const { currencySymbol } = useContext(CurrencyContext)
  const { i18n } = useTranslation()
  const language = i18n.language

  return (
    <Stat>
      <StatLabel display="flex" alignItems="center" gap="2">
        <Text as="span" whiteSpace="nowrap">
          {data.title}
        </Text>
        {data.rank && <Tag>#{data.rank}</Tag>}
      </StatLabel>
      <StatNumber>
        {currencySymbol}
        {data.number?.toLocaleString(language)}
      </StatNumber>
      {data.changes && (
        <StatHelpText>
          <StatArrow type={data.changes > 0 ? 'increase' : 'decrease'} />
          {data.changes}
        </StatHelpText>
      )}
    </Stat>
  )
}

export default StatsItem
