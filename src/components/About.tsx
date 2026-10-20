import { Stack, Text } from '@mantine/core';
import { aboutParagraphs } from '../content';
import { Section } from './Section';
import classes from './About.module.css';

export function About() {
  return (
    <Section id="about" title="About" subtitle="What I care about when building software.">
      <Stack gap="lg" maw={720} className={classes.body}>
        {aboutParagraphs.map((paragraph) => (
          <Text key={paragraph.slice(0, 32)} className={classes.paragraph}>
            {paragraph}
          </Text>
        ))}
      </Stack>
    </Section>
  );
}
