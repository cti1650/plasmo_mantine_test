import { Button, Checkbox, Stack, Title } from "@mantine/core"
import { useStorage } from "@plasmohq/storage"

export const Main = ({ name = "Extension" }) => {
  const [openCount] = useStorage<number>("open-count", (storedCount) =>
    typeof storedCount === "undefined" ? 0 : storedCount + 1
  )

  const [checked, setChecked] = useStorage("checked", true)

  return (
    <div
      className="flex flex-col py-4 px-8 min-w-[300px]"
    >
      <Stack>
        <Title order={3} align="center">
          Plasmo Mantine Test
        </Title>
        <p>Times opened: {openCount}</p>
        <Checkbox
            label="I agree to sell my privacy"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
        <Button>test</Button>
      </Stack>
    </div>
  )
}