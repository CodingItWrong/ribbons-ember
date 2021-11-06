'use strict';

module.exports = {
  extends: ['recommended', 'stylistic'],
  rules: {
    'eol-last': 'always',
    'no-action': false, // used to refresh route
    'no-implicit-this': {
      allow: ['send'],
    },
  },
};
