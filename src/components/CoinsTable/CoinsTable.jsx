import React, { useContext, useEffect, useState } from 'react'
import { Box, Table, TableContainer, Tbody } from '@chakra-ui/react'
import axios from 'axios'
import { base_URL } from '../../utils'
import CoinsTableItem from './CoinsTableItem'
import { CurrencyContext } from '../../contexts/CurrencyContext'
import { useTranslation } from 'react-i18next'
import Pagination from '../Pagination'
import useCoinsAmount from '../../hooks/useCoinsAmount'
import CoinsTableItemSkeleton from './CoinsTableItemSkeleton'
import CoinsTableHead from './CoinsTableHead'
import Loader from '../Loader'

const CoinsTable = () => {
  const { currency } = useContext(CurrencyContext)
  const [coinsData, setCoinsData] = useState()

  const { i18n } = useTranslation()
  const language = i18n.language

  const [currentPage, setCurrentPage] = useState(1)
  const coinsPerPage = 50
  const coinsAmount = useCoinsAmount()
  const totalPages = Math.ceil(coinsAmount / coinsPerPage)

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)

      try {
        const { data } = await axios.get(`${base_URL}/coins/markets`, {
          params: {
            vs_currency: currency,
            price_change_percentage: '1h,24h,7d',
            locale: language,
            per_page: coinsPerPage,
            page: currentPage,
            order: 'market_cap_rank',
          },
        })
        setCoinsData(data)
      } catch (error) {
        console.error(error)
        setCoinsData(null)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [currency, language, currentPage])

  return (
    <Box>
      {isLoading && <Loader />}
      <TableContainer h="full">
        <Table variant="simple">
          <CoinsTableHead />
          <Tbody>
            {coinsData ? (
              coinsData.map(coin => (
                <CoinsTableItem key={coin.id} coin={coin} />
              ))
            ) : (
              <CoinsTableItemSkeleton />
            )}
          </Tbody>
        </Table>
      </TableContainer>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </Box>
  )
}

export default CoinsTable
