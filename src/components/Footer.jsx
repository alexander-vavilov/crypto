import React from 'react'
import { Box, Container, Flex, useColorModeValue } from '@chakra-ui/react'

const Footer = () => {
  const backgroundColor = useColorModeValue('gray.200', 'gray.700')

  return (
    <Box as="footer" bg={backgroundColor}>
      <Container py="4">
        <Flex justifyContent="center">
          &copy; {new Date().getFullYear()} - HittauDev
        </Flex>
      </Container>
    </Box>
  )
}
export default Footer
