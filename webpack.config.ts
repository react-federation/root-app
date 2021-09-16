import { webpackConfig } from '@bondi/config'
import { merge } from 'webpack-merge'
import Webpack from 'webpack'

import packageJson from './package.json'

const { ModuleFederationPlugin } = Webpack.container
const { APP_NAMESPACE: name = 'default_namespace', APP_MODULE: module = 'root_app' } = process.env

const moduleFederationConfig = {
  name,
  exposes: {
    [module]: './app.tsx'
  },
  filename: 'root_app.js',
  shared: {
    react: {
      import: 'react',
      shareKey: 'react',
      shareScope: 'default',
      singleton: true,
      requiredVersion: packageJson.dependencies.react
    },
    'react-dom': {
      import: 'react-dom',
      shareKey: 'react-dom',
      shareScope: 'default',
      singleton: true,
      requiredVersion: packageJson.dependencies['react-dom']
    },
    'react-router-dom': {
      import: 'react-router-dom',
      shareKey: 'react-router-dom',
      shareScope: 'default',
      singleton: true,
      requiredVersion: packageJson.dependencies['react-router-dom']
    }
  }
}

const moduleFederationPlugin = new ModuleFederationPlugin(moduleFederationConfig)
const definePlugin = new Webpack.DefinePlugin({
  PROJECT_PATH: JSON.stringify(process.cwd()),
  COINGECKO_API: JSON.stringify(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
  )
})

const projectConfig: ReturnType<typeof merge> = {
  devServer: {
    port: 3000,
    historyApiFallback: true
  },
  plugins: [moduleFederationPlugin, definePlugin],
  output: {
    publicPath: 'auto'
  }
}

const config: any = merge(webpackConfig, projectConfig)

export default config
