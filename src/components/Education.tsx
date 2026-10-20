import { Container, Stack, Text, Title } from '@mantine/core';
import { content } from '../content';
import { FadeIn } from './FadeIn';

export function Education() {
  const { education } = content;

  return (
    <Container component="section" id="education" size="md" py={{ base: 56, sm: 80 }}>
      <FadeIn>
        <Stack gap="md" maw={720}>
          <Title order={2} c="teal.8">
            Education
          </Title>
          <Title order={3} fz="xl" c="dark.8">
            {education.school}
          </Title>
          <Text c="dark.6" size="md">
            {education.degree}
          </Text>
          <Text size="sm" c="dark.4">
            {education.dates}
          </Text>
        </Stack>
      </FadeIn>
    </Container>
  );
}
