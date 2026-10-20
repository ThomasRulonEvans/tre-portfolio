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
      <Container size="lg" className={classes.inner}>
        <Stack gap="xl">
          <Stack gap="xs" className={classes.heading}>
            <Title order={2} className={classes.title}>
              {title}
            </Title>
            {subtitle ? (
              <Text className={classes.subtitle} maw={640}>
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
