import { Th, Thead, Tr, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { useTranslation } from 'react-i18next'

const CoinsTableHead = () => {
  const { t } = useTranslation()
  const tableHeadBackgroundColor = useColorModeValue('gray.300', 'gray.900')

  return (
    <Thead bg={tableHeadBackgroundColor}>
      <Tr>
        <Th>#</Th>
        <Th>{t('home.table.head.coin')}</Th>
        <Th>{t('home.table.head.price')}</Th>
        <Th>1{t('time.hour')}</Th>
        <Th>24{t('time.hour')}</Th>
        <Th>7{t('time.day')}</Th>
      </Tr>
    </Thead>
  )
}

export default CoinsTableHead
