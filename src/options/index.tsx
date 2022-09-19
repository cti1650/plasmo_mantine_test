import { MantineProvider } from "@mantine/core"
import { Sub } from "~components/sub"

import "../styles/style.css"

function OptionsIndex() {
  return <MantineProvider withGlobalStyles withNormalizeCSS>
    <Sub />
  </MantineProvider>
}

export default OptionsIndex