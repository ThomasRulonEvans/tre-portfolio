import { Stack, Text, Title } from '@mantine/core';
import { education } from '../content';
import { Section } from './Section';
import classes from './Education.module.css';

export function Education() {
  return (
    <Section id="education" title="Education" muted>
      <Stack gap="xl" className={classes.list} ta="center" align="center">
        {education.map((entry) => (
          <Stack key={entry.school} gap="xs" className={classes.block} align="center">
            <Title order={3} className={classes.school}>
              {entry.school}
            </Title>
            <Text className={classes.degree}>{entry.degree}</Text>
            <Text size="sm" c="dimmed">
              {entry.dates}
            </Text>
          </Stack>
        ))}
      </Stack>
    </Section>
  );
}
