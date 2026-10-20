import { Container, Text } from '@mantine/core';
import { content } from '../content';

export function Footer() {
  return (
    <Container component="footer" size="md" py="xl" mt="md">
      <Text size="sm" c="dark.3" ta="center">
        © {new Date().getFullYear()} {content.name}
      </Text>
    </Container>
  );
}
