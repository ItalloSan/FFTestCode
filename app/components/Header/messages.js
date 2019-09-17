/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Header';

export default defineMessages({
  home: {
    id: `${scope}.Albus`,
    defaultMessage: 'Albus',
  },
  features: {
    id: `${scope}.halliffane`,
    defaultMessage: 'Hall of Fame',
  },
  campaigns: {
    id: `${scope}.campaigns`,
    defaultMessage: 'Campaigns',
  },
});
