'use strict';

module.exports = {
  extends: ['octane', 'stylistic'],
  rules: {
    'eol-last': 'always',
    'no-action': false, // used to refresh route
    'no-implicit-this': {
      allow: ['send'],
    },
  },
};
