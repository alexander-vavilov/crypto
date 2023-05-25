import React, { useState } from 'react'
import {
  Box,
  Container,
  HStack,
  Divider,
  useColorModeValue,
  IconButton,
} from '@chakra-ui/react'
import HeaderSearch from './HeaderSearch'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import HeaderMenu from './HeaderMenu'
import HeaderLogo from './HeaderLogo'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const backgroundColor = useColorModeValue('white', 'gray.800')

  return (
    <Box
      as="header"
      pos="sticky"
      top="0"
      bg={backgroundColor}
      zIndex="10"
      boxShadow="md"
    >
      <Container maxW="8xl" py="4">
        <HStack
          justify="space-between"
          gap="4"
          flexWrap={['wrap', null, 'nowrap']}
        >
          <HeaderLogo />
          <IconButton
            onClick={() => setIsOpen(isOpen => !isOpen)}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            display={['inline-flex', 'none']}
            zIndex="20"
          />
          <HeaderSearch />
          <HeaderMenu isOpen={isOpen} />
        </HStack>
      </Container>
      <Divider />
    </Box>
  )
}

export default Header
