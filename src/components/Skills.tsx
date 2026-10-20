import { Container, SimpleGrid, Stack, Text, Title } from '@mantine/core';
import { content } from '../content';
import { FadeIn } from './FadeIn';

export function Skills() {
  return (
    <Container component="section" id="skills" size="md" py={{ base: 56, sm: 80 }}>
      <FadeIn>
        <Stack gap="xl">
          <Title order={2} c="teal.8">
            Skills
          </Title>
          <SimpleGrid cols={{ base: 1, xs: 2 }} spacing="xl">
            {content.skills.map((skill, index) => (
              <FadeIn key={skill.name} delayMs={index * 80}>
                <Stack gap={4}>
                  <Text fw={600} fz="lg" c="dark.8">
                    {skill.name}
                  </Text>
                  <Text c="teal.7" size="sm">
                    {skill.years} {skill.years === 1 ? 'year' : 'years'}
                  </Text>
                </Stack>
              </FadeIn>
            ))}
          </SimpleGrid>
        </Stack>
      </FadeIn>
    </Container>
  );
}
