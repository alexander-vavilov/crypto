import { Box, Select, Stack, useColorModeValue } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { ColorModeSwitcher } from '../../ColorModeSwitcher'
import { CurrencyContext } from '../../contexts/CurrencyContext'
import { useTranslation } from 'react-i18next'

const HeaderMenu = ({ isOpen }) => {
  const { currency, changeCurrency } = useContext(CurrencyContext)
  const { i18n } = useTranslation()

  const backgroundColor = useColorModeValue('gray.300', 'gray.900')

  return (
    <Box
      className="no-margin-inline-start"
      pos={['fixed', 'static']}
      top={isOpen ? '0' : '-100%'}
      left="0"
      w={['full', 'auto']}
      p={['4', '0']}
      pt={['16', '0']}
      bg={[backgroundColor, 'transparent']}
      order={['2', null, '3']}
      zIndex="10"

      // I'll never use chakra ui**
    >
      <Stack direction={['column', 'row']} h={['full', 'auto']}>
        <Select
          variant="filled"
          defaultValue={i18n.language}
          onChange={e => i18n.changeLanguage(e.target.value)}
          minW="max-content"
        >
          <option value="en">en</option>
          <option value="ru">ru</option>
        </Select>
        <Select
          variant="filled"
          defaultValue={currency}
          onChange={e => changeCurrency(e.target.value)}
          minW="max-content"
        >
          <option value="usd">usd</option>
          <option value="rub">rub</option>
        </Select>
        <ColorModeSwitcher />
      </Stack>
    </Box>
  )
}

export default HeaderMenu
