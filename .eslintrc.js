module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "env": {
    "node": true,
    "jest": true,
    "es6": true,
    "browser": true,
  },
  "plugins": [
    "react",
    "jsx-a11y",
  ],
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
    },
  },
  "rules": {
    "arrow-parens": 0,
    "arrow-body-style": [
      2,
      "as-needed",
    ],
    "class-methods-use-this": 0,
    "comma-dangle": [
      2,
      "always-multiline",
    ],
    "no-console": 1,
    "prefer-template": 2,
    "indent": [
      2,
      2,
    ],
    "import/no-unresolved": 2,
    "import/prefer-default-export": 0,
    "jsx-a11y/aria-props": 2,
    "jsx-a11y/anchor-is-valid": 0,
    "jsx-a11y/heading-has-content": 0,
    "jsx-a11y/label-has-for": 2,
    "jsx-a11y/role-has-required-aria-props": 2,
    "jsx-a11y/role-supports-aria-props": 2,
    "react/jsx-filename-extension": 0,
    "react/require-extension": 0,
    "react/prefer-stateless-function": [
      0, {
        "ignorePureComponents": true
      }
    ],
    "semi": 0,
  },
}
