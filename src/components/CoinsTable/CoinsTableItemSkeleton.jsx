import { HStack, Skeleton, Td, Text, Tr } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { CurrencyContext } from '../../contexts/CurrencyContext'

const CoinsTableItemSkeleton = () => {
  const { currencySymbol } = useContext(CurrencyContext)

  return (
    <Tr>
      <Td># ?</Td>
      <Td>
        <Skeleton width="full" height="10px" />
      </Td>
      <Td>
        <HStack>
          <Text as="span">{currencySymbol}</Text>
          <Skeleton width="full" height="10px" />
        </HStack>
      </Td>
      <Td>
        <Skeleton height="10px" />
      </Td>
      <Td>
        <Skeleton height="10px" />
      </Td>
      <Td>
        <Skeleton height="10px" />
      </Td>
    </Tr>
  )
}

export default CoinsTableItemSkeleton
