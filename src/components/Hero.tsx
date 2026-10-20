import { Button, Container, Stack, Text, Title } from '@mantine/core';
import { IconArrowDown } from '@tabler/icons-react';
import { site } from '../content';
import classes from './Hero.module.css';

export function Hero() {
  return (
    <section id="top" className={classes.hero} aria-label="Introduction">
      <div className={classes.atmosphere} aria-hidden />
      <Container size="lg" className={classes.inner}>
        <Stack gap="md" className={classes.copy} maw={720}>
          <Title order={1} className={classes.name}>
            {site.name}
          </Title>
          <Text className={classes.tagline}>{site.tagline}</Text>
          <Button
            component="a"
            href="#about"
            size="md"
            radius="md"
            rightSection={<IconArrowDown size={18} />}
            className={classes.cta}
            w={{ base: '100%', xs: 'auto' }}
          >
            About me
          </Button>
        </Stack>
      </Container>
    </section>
  );
}
