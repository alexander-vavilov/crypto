import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Link, Text } from '@chakra-ui/react'

const HeaderLogo = () => {
  return (
    <Link
      as={RouterLink}
      to="/"
      fontSize="xl"
      fontWeight="semibold"
      zIndex="20"
    >
      Hittau
      <Text as="span" color="purple.400">
        Crypto
      </Text>
    </Link>
  )
}

export default HeaderLogo
