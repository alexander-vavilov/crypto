import React from 'react'
import {
  Badge,
  Divider,
  HStack,
  Image,
  Link,
  List,
  ListItem,
  Tag,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

const HeaderSearchResults = ({ searchResults, setSearchResults }) => {
  const backgroundColor = useColorModeValue(
    'rgb(226, 232, 240, 0.7)',
    'rgb(23, 25, 35, 0.8)'
  )
  const hoverBackgroundColor = useColorModeValue('gray.300', 'gray.700')

  return (
    <List
      position="absolute"
      w="full"
      maxH="50vh"
      bg={backgroundColor}
      backdropFilter="blur(4px)"
      rounded="md"
      overflowY="auto"
      zIndex="10"
    >
      {searchResults.map(
        ({ name, symbol, large: image, market_cap_rank: rank, id }) => (
          <ListItem key={id}>
            <Link
              as={RouterLink}
              to={`/coins/${id}`}
              onClick={() => setSearchResults([])}
              display="inline-block"
              w="full"
              px="3"
              py="1.5"
              _hover={{ bg: hoverBackgroundColor }}
            >
              <HStack justify="space-between">
                <HStack>
                  <Image src={image} w="8" rounded="full" />
                  <Text>{name}</Text>
                  <Badge fontSize="x-small">{symbol}</Badge>
                </HStack>
                <Tag>#{rank ? rank : '???'}</Tag>
              </HStack>
            </Link>
            <Divider />
          </ListItem>
        )
      )}
    </List>
  )
}

export default HeaderSearchResults
