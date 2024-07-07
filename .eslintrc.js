const { endOfLine } = require("./.prettierrc")

module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    "prettier/prettier": [
      "error",
      {
        "endOfLine": "lf"
      }
    ]
  }
};
