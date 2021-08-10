module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/vue3-essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "arrow-parens": 0,
    "arrow-body-style": 0,
    "comma-dangle": ["error", "never"],
    "default-case": 0,
    "indent": "off",
    "linebreak-style": ["error", "windows"],
    "lines-between-class-members": 0,
    "max-len": ["error", { "code": 180 }],
    "no-underscore-dangle": 0,
    "no-tabs": 0,
    "no-param-reassign": 0,
    "object-curly-newline": "off",
    "quotes": ["error", "single", { "avoidEscape": true }],
    "template-curly-spacing": "off",
		"vue/valid-v-slot": "off"
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)",
      ],
      env: {
        mocha: true,
      },
    },
  ],
};
