import { Container, Stack, Text, Title } from '@mantine/core';
import { content } from '../content';
import { FadeIn } from './FadeIn';

export function Experience() {
  return (
    <Container component="section" id="experience" size="md" py={{ base: 56, sm: 80 }}>
      <FadeIn>
        <Stack gap="xl">
          <Title order={2} c="teal.8">
            Experience
          </Title>
          {content.experience.map((role, index) => (
            <FadeIn key={role.title} delayMs={index * 100}>
              <Stack gap="xs" maw={720}>
                <Title order={3} fz="xl" c="dark.8">
                  {role.title}
                </Title>
                <Text c="teal.7" fw={500}>
                  {role.company} · {role.type}
                </Text>
                <Text size="sm" c="dark.4">
                  {role.dates} · {role.location}
                </Text>
                <Text size="md" lh={1.7} c="dark.6" mt="xs">
                  {role.description}
                </Text>
              </Stack>
            </FadeIn>
          ))}
        </Stack>
      </FadeIn>
    </Container>
  );
}
