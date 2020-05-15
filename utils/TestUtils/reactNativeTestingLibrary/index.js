import React from 'react'
import { render } from 'react-native-testing-library'
import { IntlProvider } from 'react-intl'
import { Text } from 'react-native'

const customRender = (ui, options = {}) =>
  render(
    <IntlProvider locale="en" textComponent={Text}>
      {ui}
    </IntlProvider>,
    options,
  )

export * from 'react-native-testing-library'

export { customRender }
