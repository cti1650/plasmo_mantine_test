import { MantineProvider } from "@mantine/core"
import { Main } from "~components/main"

import "../styles/style.css"

function IndexPage() {
  return <MantineProvider withGlobalStyles withNormalizeCSS>
    <Main name="App" />
  </MantineProvider>
}

export default IndexPage