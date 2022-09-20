import { useStorage } from "@plasmohq/storage"
import { AppShell, Navbar, Header, Checkbox, Button, Stack, Container, Title } from '@mantine/core';

export const Sub = ({ name = "Extension" }) => {
  const [openCount] = useStorage<number>("open-count")

  const [checked] = useStorage("checked")

  return (
    <AppShell
      padding="md"
      // navbar={<Navbar width={{ base: 300 }} p="xs">{/* Navbar content */}</Navbar>}
      header={<Header height={60} p="xs"><Title order={2}>Plasmo Mantine Test</Title></Header>}
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
      <Container size="md">
        <Stack>
          <Title order={1}>Times opened: {openCount}</Title>
          <Checkbox
            label="I agree to sell my privacy"
            checked={checked}
          />
          <Button>test</Button>
        </Stack>
      </Container>
    </AppShell>
  )
}