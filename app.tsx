import React from 'react'
import { Helmet } from 'react-helmet'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { Box, Flex } from '@chakra-ui/layout'
import { ErrorBoundary } from 'react-error-boundary'

import ErrorFallback from 'components/error-fallback'

import Routes from 'router/routesComponent'

const App = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Learn by example!</title>
      </Helmet>
      <BrowserRouter>
        <ChakraProvider>
          <Flex direction="column" height="100vh">
            <Box mt={4} className="container" flex={1}>
              <Routes />
            </Box>
          </Flex>
        </ChakraProvider>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App
