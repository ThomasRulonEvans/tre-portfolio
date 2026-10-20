import { Container, Text } from '@mantine/core';
import { site } from '../content';
import classes from './Footer.module.css';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={classes.footer}>
      <Container size="xl">
        <Text size="sm" c="dimmed" ta="center">
          © {year} {site.name}
        </Text>
      </Container>
    </footer>
  );
}
