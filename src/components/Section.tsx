import { Container, Stack, Text, Title } from '@mantine/core';
import type { ReactNode } from 'react';
import classes from './Section.module.css';

type SectionProps = {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  muted?: boolean;
};

export function Section({ id, title, subtitle, children, muted }: SectionProps) {
  return (
    <section id={id} className={classes.section} data-muted={muted || undefined}>
      <Container size="xl" className={classes.inner}>
        <Stack gap="xl" maw={900} mx="auto" w="100%" className={classes.content}>
          <Stack gap="xs" className={classes.heading} ta="center" align="center">
            <Title order={2} className={classes.title}>
              {title}
            </Title>
            {subtitle ? (
              <Text className={classes.subtitle} maw={720} mx="auto">
                {subtitle}
              </Text>
            ) : null}
          </Stack>
          {children}
        </Stack>
      </Container>
    </section>
  );
}
