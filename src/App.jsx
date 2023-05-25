import React from 'react'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import { Home, Coin } from './pages'
import Layout from './components/Layout'

const theme = extendTheme({
  styles: {
    global: {
      html: {
        minHeight: '100%',
      },
      'body, #root': {
        height: '100%',
      },
      '.no-margin-inline-start': {
        marginInlineStart: '0 !important',
      },
    },
  },
})

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="coins/:coinId" element={<Coin />} />
        </Route>
      </Routes>
    </ChakraProvider>
  )
}

export default App
