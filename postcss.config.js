const postcssPresetEnv = require(`postcss-preset-env`)
const tailwind = require("tailwindcss")
module.exports = () => ({
  plugins: [
    tailwind(tailwind),
    postcssPresetEnv({
      stage: 0,
    }),
  ],
})
