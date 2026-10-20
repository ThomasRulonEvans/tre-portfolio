import { Group, Progress, Stack, Text } from '@mantine/core';
import { skills } from '../content';
import { Section } from './Section';
import classes from './Skills.module.css';

const maxYears = Math.max(...skills.map((s) => s.years));

export function Skills() {
  return (
    <Section
      id="skills"
      title="Skills"
      subtitle="Tools I use day to day, with years of hands-on experience."
      muted
    >
      <Stack gap="xl" maw={640} className={classes.list}>
        {skills.map((skill) => (
          <Stack key={skill.name} gap="xs">
            <Group justify="space-between">
              <Text fw={600} c="gray.1">
                {skill.name}
              </Text>
              <Text size="sm" c="teal.4" fw={500}>
                {skill.years} {skill.years === 1 ? 'year' : 'years'}
              </Text>
            </Group>
            <Progress
              value={(skill.years / maxYears) * 100}
              color="teal"
              size="md"
              radius="xl"
              aria-label={`${skill.name}: ${skill.years} years`}
            />
          </Stack>
        ))}
      </Stack>
    </Section>
  );
}
