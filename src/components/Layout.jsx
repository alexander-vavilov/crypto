import React from 'react'
import Header from './Header/Header'
import { Outlet } from 'react-router-dom'
import { Box, Flex } from '@chakra-ui/react'
import Footer from './Footer'

const Layout = () => {
  return (
    <Flex direction="column" h="full" minH="100vh">
      <Header />
      <Box as="main" flex="auto">
        <Outlet />
      </Box>
      <Footer />
    </Flex>
  )
}

export default Layout
