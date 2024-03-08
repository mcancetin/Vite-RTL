/** @format */

module.exports = {
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    requireConfigFile: false,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      impliedStrict: true
    },
    babelOptions: {
      presets: ["@babel/preset-react"]
    }
  },
  env: {
    browser: true,
    es2021: true
  },
  extends: ["airbnb", "prettier"],
  overrides: [
    {
      files: ["**/*.test.js", "**/*.test.jsx"],
      env: {
        jest: true
      }
    }
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off"
  }
}
