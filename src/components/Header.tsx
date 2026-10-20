import { useEffect, useRef, useState } from 'react';
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

/** Ignore scroll-driven resets while click navigation is still animating */
const NAV_SCROLL_GRACE_MS = 900;

export function Header() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [scroll] = useWindowScroll();
  const [active, setActive] = useState('');
  const ignoreUntil = useRef(0);
  const lastScrollY = useRef(scroll.y);

  useEffect(() => {
    if (Date.now() < ignoreUntil.current) {
      lastScrollY.current = scroll.y;
      return;
    }

    if (active && scroll.y !== lastScrollY.current) {
      setActive('');
    }

    lastScrollY.current = scroll.y;
  }, [scroll.y, active]);

  const activateLink = (href: string) => {
    ignoreUntil.current = Date.now() + NAV_SCROLL_GRACE_MS;
    setActive(href);
    close();
  };

  const links = navLinks.map((link) => (
    <Anchor
      key={link.href}
      href={link.href}
      className={classes.link}
      data-active={active === link.href || undefined}
      onClick={() => activateLink(link.href)}
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
      <Container size="xl" className={classes.inner}>
        <Anchor
          href="#top"
          className={classes.brand}
          underline="never"
          onClick={() => {
            ignoreUntil.current = Date.now() + NAV_SCROLL_GRACE_MS;
            setActive('');
          }}
        >
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
