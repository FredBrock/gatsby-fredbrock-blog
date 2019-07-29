import Typography from "typography"
import oceanBeachTheme from "typography-theme-ocean-beach"
oceanBeachTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  "h2,h3": {
    marginBottom: rhythm(1 / 2),
    marginTop: rhythm(2),
  },
  a: {
    textShadow: "none",
  },
})
const typography = new Typography(oceanBeachTheme)

// Export helper functions
// export const { scale, rhythm, options } = typography
export default typography
