import React from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  HStack,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react'

const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  const backgroundColor = useColorModeValue('gray.300', 'gray.600')
  const activeBackgroundColor = useColorModeValue('gray.400', 'gray.700')

  const startPage = currentPage <= 3 ? 1 : currentPage - 2
  const endPage = startPage + 4 >= totalPages ? totalPages : startPage + 4

  let pages = []
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i)
  }

  const handlePageNumberClick = number => {
    window.scrollTo(0, 0)
    setCurrentPage(number)
  }
  const handlePrevPageClick = () => {
    if (currentPage === 1) return

    window.scrollTo(0, 0)
    setCurrentPage(currentPage => currentPage - 1)
  }
  const handleNextPageClick = () => {
    if (currentPage === totalPages) return

    window.scrollTo(0, 0)
    setCurrentPage(currentPage => currentPage + 1)
  }

  return (
    <Box py="4">
      <HStack>
        <IconButton
          onClick={handlePrevPageClick}
          icon={<ChevronLeftIcon boxSize={8} />}
          isDisabled={currentPage === 1}
        />
        {pages.map(number => {
          return (
            <Button
              key={number}
              onClick={() => handlePageNumberClick(number)}
              minW="8"
              bg={
                number === currentPage ? activeBackgroundColor : backgroundColor
              }
            >
              {number}
            </Button>
          )
        })}
        <IconButton
          onClick={handleNextPageClick}
          icon={<ChevronRightIcon boxSize={8} />}
          isDisabled={currentPage === totalPages}
        />
      </HStack>
    </Box>
  )
}

export default Pagination
