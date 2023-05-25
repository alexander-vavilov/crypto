import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { base_URL } from '../utils'
import {
  Box,
  Container,
  Flex,
  HStack,
  Heading,
  Image,
  Link,
  Tag,
  Text,
} from '@chakra-ui/react'
import Stats from '../components/Stats/Stats'
import Chart from '../components/Chart/Chart'
import { CurrencyContext } from '../contexts/CurrencyContext'
import { useTranslation } from 'react-i18next'
import { Link as RouterLink } from 'react-router-dom'
import { ChevronLeftIcon } from '@chakra-ui/icons'

const Coin = () => {
  const { coinId } = useParams()
  const { currency } = useContext(CurrencyContext)
  const [coinData, setCoinData] = useState({})

  const { i18n, t } = useTranslation()
  const language = i18n.language

  const localeDescription = coinData.description?.[language]
  const defaultDescription = coinData.description?.en
  const description = localeDescription
    ? localeDescription
    : `*There is no localized description* ${defaultDescription}`
  const cleanedDescription = description.replace(/(<([^>]+)>)/gi, '')

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`${base_URL}/coins/${coinId}`, {
        params: {
          tickers: false,
          community_data: false,
          market_data: true,
        },
      })
      setCoinData(data)
    }

    fetchData()
  }, [coinId, currency])

  return (
    <Box>
      <Container maxW="8xl" py="5vh">
        <Link as={RouterLink} to={-1}>
          <Flex align="center" color="purple.400">
            <ChevronLeftIcon boxSize={7} />
            <Text as="span">Back</Text>
          </Flex>
        </Link>
        <Box py="4">
          <Tag>
            {t('coin.rank')} #
            {coinData.coingecko_rank ? coinData.coingecko_rank : '???'}
          </Tag>
          <HStack py="3">
            <Image src={coinData.image?.small} />
            <Heading>{coinData.localization?.[language]}</Heading>
          </HStack>
          <Stats coinData={coinData} />
          <Chart id={coinId} />
        </Box>
        <Text>{cleanedDescription}</Text>
      </Container>
    </Box>
  )
}

export default Coin
