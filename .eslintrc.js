module.exports = {
  parser: "babel-eslint",
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": "airbnb",
  "rules": {
    "react/jsx-filename-extension": 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'react/state-in-constructor': 'off',
    'no-underscore-dangle': 'off',
  }
};