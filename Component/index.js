import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Text, View } from 'react-native'

import messages from './messages'

const Component = () => (
  <View flex={1} alignItems="center" justifyContent="center">
    <Text>Not translated</Text>
    <Text>
      <FormattedMessage {...messages.translation} />
    </Text>
    <Text>
      <FormattedMessage {...messages.translationWithValue} values={{ VALUE: 'This is a value' }} />
    </Text>
    <Text>
      <FormattedMessage
        {...messages.translationWithTextValue}
        values={{
          VALUE: <Text>This is embedded text</Text> 
        }}
      />
    </Text>
  </View>
)

export default Component
