import { ColorModeScript } from '@chakra-ui/react'
import React, { StrictMode } from 'react'
import * as ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import CurrencyContextProvider from './contexts/CurrencyContext'
import './i18n'
import App from './App'

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)

root.render(
  <StrictMode>
    <ColorModeScript />
    <BrowserRouter>
      <CurrencyContextProvider>
        <App />
      </CurrencyContextProvider>
    </BrowserRouter>
  </StrictMode>
)
