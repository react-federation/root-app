import React from 'react'
import { Helmet } from 'react-helmet'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { ErrorBoundary } from 'react-error-boundary'

import ErrorFallback from 'components/error-fallback'

import Welcome from 'components/welcome'

const App = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Learn by example!</title>
      </Helmet>
      <BrowserRouter>
        <ChakraProvider>
          <Welcome />
        </ChakraProvider>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App
