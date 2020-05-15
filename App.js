import React from 'react'
import { IntlProvider } from 'react-intl'
import { Text } from 'react-native'

import Component from './Component'

class App extends React.Component {
  render = () => {
    return (
      <IntlProvider locale="en" textComponent={Text}>
        <Component />
      </IntlProvider>
    )
  }
}

export default App
