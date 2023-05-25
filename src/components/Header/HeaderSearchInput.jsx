import React, { useState } from 'react'
import {
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react'
import axios from 'axios'
import { base_URL } from '../../utils'
import { SearchIcon } from '@chakra-ui/icons'

const HeaderSearchInput = ({ setSearchResults }) => {
  const [search, setSearch] = useState('')

  const handleSearch = async () => {
    const { data } = await axios.get(`${base_URL}/search`, {
      params: { query: search.toLowerCase() },
    })
    setSearchResults(data.coins)
  }

  const handleKeyDown = e => {
    if (e.key === 'Enter') handleSearch()
  }

  return (
    <InputGroup>
      <Input
        value={search}
        onChange={e => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search..."
      />
      <InputRightElement>
        <IconButton
          onClick={handleSearch}
          icon={<SearchIcon />}
          variant="ghost"
        />
      </InputRightElement>
    </InputGroup>
  )
}

export default HeaderSearchInput
