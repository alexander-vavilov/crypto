import React, { useEffect, useRef, useState } from 'react'
import { Box } from '@chakra-ui/react'
import HeaderSearchResults from './HeaderSearchResults'
import HeaderSearchInput from './HeaderSearchInput'

const HeaderSearch = () => {
  const [searchResults, setSearchResults] = useState([])
  const searchRef = useRef(null)

  useEffect(() => {
    const handleClickAway = e => {
      if (!searchRef.current.contains(e?.target) && searchResults.length > 0) {
        setSearchResults([])
      }
    }

    window.addEventListener('mousedown', handleClickAway)

    return () => window.removeEventListener('mousedown', handleClickAway)
  }, [searchResults.length])

  return (
    <Box ref={searchRef} position="relative" w="full" order="3">
      <HeaderSearchInput setSearchResults={setSearchResults} />
      {searchResults.length > 0 && (
        <HeaderSearchResults
          searchResults={searchResults}
          setSearchResults={setSearchResults}
        />
      )}
    </Box>
  )
}

export default HeaderSearch
