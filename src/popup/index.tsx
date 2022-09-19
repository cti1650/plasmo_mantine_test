import { MantineProvider } from "@mantine/core"
import { Main } from "~components/main"

import "../styles/style.css"

function IndexPopup() {
  return <MantineProvider withGlobalStyles withNormalizeCSS>
    <Main />
  </MantineProvider>
}

export default IndexPopup