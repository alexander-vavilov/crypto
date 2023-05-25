import { createContext, useState } from 'react'

export const CurrencyContext = createContext()

const CurrencyContextProvider = ({ children }) => {
  const [currency, setCurrency] = useState(
    localStorage.getItem('currency') || 'usd'
  )

  let currencySymbol
  switch (currency) {
    case 'usd':
      currencySymbol = '$'
      break
    case 'rub':
      currencySymbol = '₽'
      break
    default:
      break
  }

  const changeCurrency = currency => {
    setCurrency(currency)
    localStorage.setItem('currency', currency)
  }

  const value = {
    currency,
    changeCurrency,
    currencySymbol,
  }

  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  )
}

export default CurrencyContextProvider
