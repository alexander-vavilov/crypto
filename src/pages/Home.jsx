import React from 'react'
import { Box, Container, Link, Text } from '@chakra-ui/react'
import CoinsTable from '../components/CoinsTable/CoinsTable'

const Home = () => {
  return (
    <Box h="full">
      <Container maxW="7xl" h="full" py="4">
        <CoinsTable />
        <Text as="span" textTransform="capitalize">
          data provided by{' '}
          <Link
            href="https://www.coingecko.com/"
            target="_blank"
            color="purple.400"
          >
            CoinGecko
          </Link>
        </Text>
      </Container>
    </Box>
  )
}

export default Home
