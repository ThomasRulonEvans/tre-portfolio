import { useState } from 'react';
import {
  Anchor,
  Box,
  Burger,
  Container,
  Drawer,
  Group,
  Stack,
  Text,
} from '@mantine/core';
import { useDisclosure, useWindowScroll } from '@mantine/hooks';
import { navLinks, site } from '../content';
import classes from './Header.module.css';

export function Header() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [scroll] = useWindowScroll();
  const [active, setActive] = useState('#about');

  const links = navLinks.map((link) => (
    <Anchor
      key={link.href}
      href={link.href}
      className={classes.link}
      data-active={active === link.href || undefined}
      onClick={() => {
        setActive(link.href);
        close();
      }}
    >
      {link.label}
    </Anchor>
  ));

  return (
    <Box
      component="header"
      className={classes.header}
      data-scrolled={scroll.y > 12 || undefined}
    >
      <Container size="lg" className={classes.inner}>
        <Anchor href="#top" className={classes.brand} underline="never">
          <Text component="span" className={classes.brandText}>
            {site.name}
          </Text>
        </Anchor>

        <Group gap="lg" visibleFrom="sm" className={classes.links}>
          {links}
        </Group>

        <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom="sm"
          size="sm"
          color="teal.4"
          aria-label="Toggle navigation"
        />
      </Container>

      <Drawer
        opened={opened}
        onClose={close}
        size="100%"
        padding="md"
        title={site.name}
        hiddenFrom="sm"
        zIndex={1000}
      >
        <Stack gap="md">{links}</Stack>
      </Drawer>
    </Box>
  );
}
