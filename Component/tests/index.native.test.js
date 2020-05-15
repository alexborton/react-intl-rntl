import React from 'react'
import { customRender as render } from '../../utils/TestUtils/reactNativeTestingLibrary'

import Component from '..'

describe('<Component />', () => {
  it('renders with text', () => {
    const { getByText, unmount, debug } = render(
      <Component />,
    )

    debug()

    getByText(/Not translated/)
    getByText(/This is a translated piece of text/)
    getByText(/This is a value/)

    unmount()
  })

})
