const postcssPresetEnv = require(`postcss-preset-env`)
const tailwind = require("tailwindcss")
module.exports = () => ({
  plugins: [
    require("postcss-import"),
    require("tailwindcss"),
    postcssPresetEnv({
      stage: 0,
    }),
  ],
})
