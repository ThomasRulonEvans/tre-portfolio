import { Box, Button, Container, Stack, Text, Title } from '@mantine/core';
import { content } from '../content';

export function Hero() {
  return (
    <Box
      component="section"
      id="top"
      mih="calc(100vh - 64px)"
      display="flex"
      style={{ alignItems: 'center' }}
    >
      <Container size="md" w="100%" py={{ base: 64, sm: 96 }}>
        <Stack gap="md" maw={640}>
          <Title
            order={1}
            fz={{ base: 42, sm: 64 }}
            lh={1.05}
            c="teal.8"
            className="hero-name"
          >
            {content.name}
          </Title>
          <Text fz={{ base: 'lg', sm: 'xl' }} c="dark.5" maw={420}>
            {content.tagline}
          </Text>
          <Box mt="sm">
            <Button
              component="a"
              href={content.cta.href}
              size="md"
              radius="md"
              className="cta-button"
            >
              {content.cta.label}
            </Button>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
