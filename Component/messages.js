import { defineMessages } from 'react-intl'

export default defineMessages({
  translation: {
    id: 'Component.translation',
    defaultMessage: 'This is a translated piece of text',
  },
  translationWithValue: {
    id: 'Component.translationWithValue',
    defaultMessage: 'This is a translated text with a value. {VALUE}',
  },
  translationWithTextValue: {
    id: 'Component.translationWithTextValue',
    defaultMessage: 'Embedded <Text> comp {VALUE}'
  }
})
