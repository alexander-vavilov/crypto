import { Flex, Spinner } from '@chakra-ui/react'
import React from 'react'

const Loader = () => {
  return (
    <Flex justify="center" align="center" h="full" pb="4">
      <Spinner size="xl" />
    </Flex>
  )
}

export default Loader
