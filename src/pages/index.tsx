import { MantineProvider } from "@mantine/core"
import { Main } from "~components/main"

import "../styles/mantineBase.css"
import "../styles/style.css"

function IndexPage() {
  return <MantineProvider
    withGlobalStyles
    theme={{
      /** Put your mantine theme override here */
      colorScheme: 'dark',
    }}>
    <Main name="App" />
  </MantineProvider>
}

export default IndexPage