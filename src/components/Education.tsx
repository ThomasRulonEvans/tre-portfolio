import { Stack, Text, Title } from '@mantine/core';
import { education } from '../content';
import { Section } from './Section';
import classes from './Education.module.css';

export function Education() {
  return (
    <Section id="education" title="Education" muted>
      <Stack gap="xs" className={classes.block} maw={640}>
        <Title order={3} className={classes.school}>
          {education.school}
        </Title>
        <Text className={classes.degree}>{education.degree}</Text>
        <Text size="sm" c="dimmed">
          {education.dates}
        </Text>
      </Stack>
    </Section>
  );
}
