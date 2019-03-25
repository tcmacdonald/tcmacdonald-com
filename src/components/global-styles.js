import { createGlobalStyle } from "styled-components"
import global from "./global-variables"

export default createGlobalStyle`
body {
  background: ${global.colors.orange};
  font-family: ${global.typography.base_font_family};
  font-size: 110%;
  line-height: 180%;
}

main {
  background-color: white;
  padding: 1em 0 2em;
}

footer {
  padding: 2em 0 3em;
}

h1, h2 {
  font-family: Roboto Slab, sans-serif;
}

a {
  color: deepskyblue;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}

blockquote {
  margin: 0 0 2em;
  padding: 0 1em;
  border-left: 3px solid orange;
  font-style: italic;
}
`
