import React from 'react'
import { Badge, Box, Heading, Stack, Text } from '@chakra-ui/layout'

const Welcome = () => {
  return (
    <Box flexDirection="column" maxW="960px" mx="auto">
      <Box pb={2}>
        <Badge variant="subtle" colorScheme="purple" mr={2}>
          Getting started
        </Badge>
        <Badge variant="subtle" colorScheme="purple">
          React ⚛️
        </Badge>
      </Box>
      <Box backgroundColor="gray.50" p={4} borderRadius="md">
        <Stack>
          <Heading>Welcome to your Root App!</Heading>
          <Text>Here put your content</Text>
        </Stack>
      </Box>
    </Box>
  )
}

export default Welcome
