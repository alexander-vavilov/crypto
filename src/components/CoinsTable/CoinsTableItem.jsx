import {
  HStack,
  Image,
  Link,
  Tag,
  Td,
  Text,
  Tr,
  useColorModeValue,
} from '@chakra-ui/react'
import React, { useContext } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { CurrencyContext } from '../../contexts/CurrencyContext'

const CoinsTableItem = ({ coin }) => {
  const { image, name, symbol, current_price } = coin
  const { currencySymbol } = useContext(CurrencyContext)
  const hoverBackgroundColor = useColorModeValue('gray.200', 'gray.700')

  const hourPriceChangePercentage =
    coin.price_change_percentage_1h_in_currency?.toFixed(1)
  const dayPriceChangePercentage =
    coin.price_change_percentage_24h_in_currency?.toFixed(1)
  const weekPriceChangePercentage =
    coin.price_change_percentage_7d_in_currency?.toFixed(1)

  const getColor = percentage => (percentage > 0 ? 'green.500' : 'red.500')

  return (
    <Tr key={coin.id} _hover={{ bg: hoverBackgroundColor }}>
      <Td>{coin.market_cap_rank}</Td>
      <Td>
        <Link as={RouterLink} to={`coins/${coin.id}`}>
          <HStack>
            <Image src={image} w="8" />
            <Text>{name}</Text>
            <Tag size="sm" fontSize="xs" textTransform="uppercase">
              {symbol}
            </Tag>
          </HStack>
        </Link>
      </Td>
      <Td>
        {currencySymbol}
        {current_price}
      </Td>
      <Td color={getColor(hourPriceChangePercentage)}>
        {hourPriceChangePercentage}%
      </Td>
      <Td color={getColor(dayPriceChangePercentage)}>
        {dayPriceChangePercentage}%
      </Td>
      <Td color={getColor(weekPriceChangePercentage)}>
        {weekPriceChangePercentage}%
      </Td>
    </Tr>
  )
}

export default CoinsTableItem
