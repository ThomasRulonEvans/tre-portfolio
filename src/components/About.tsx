import { Container, Stack, Text, Title } from '@mantine/core';
import { content } from '../content';
import { FadeIn } from './FadeIn';

export function About() {
  return (
    <Container component="section" id="about" size="md" py={{ base: 56, sm: 80 }}>
      <FadeIn>
        <Stack gap="lg" maw={720}>
          <Title order={2} c="teal.8">
            About
          </Title>
          {content.about.map((paragraph) => (
            <Text key={paragraph.slice(0, 32)} size="lg" lh={1.7} c="dark.6">
              {paragraph}
            </Text>
          ))}
        </Stack>
      </FadeIn>
    </Container>
  );
}
