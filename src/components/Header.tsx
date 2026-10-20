import { useEffect, useState } from 'react';
import {
  Anchor,
  Box,
  Burger,
  Container,
  Drawer,
  Group,
  Stack,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { content } from '../content';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [opened, { toggle, close }] = useDisclosure(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Box
      component="header"
      pos="sticky"
      top={0}
      style={{
        zIndex: 100,
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        backgroundColor: scrolled
          ? 'rgba(247, 251, 251, 0.82)'
          : 'transparent',
        borderBottom: scrolled
          ? '1px solid rgba(14, 125, 121, 0.12)'
          : '1px solid transparent',
        transition: 'background-color 0.25s ease, border-color 0.25s ease, backdrop-filter 0.25s ease',
      }}
    >
      <Container size="md" py="sm">
        <Group justify="space-between" wrap="nowrap">
          <Anchor href="#top" underline="never" c="teal.7" fw={700} ff="Syne, sans-serif">
            {content.name}
          </Anchor>

          <Group gap="lg" visibleFrom="sm">
            {content.nav.map((item) => (
              <Anchor
                key={item.href}
                href={item.href}
                c="dark.6"
                size="sm"
                underline="hover"
                style={{ transition: 'color 0.2s ease' }}
              >
                {item.label}
              </Anchor>
            ))}
          </Group>

          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" aria-label="Open navigation" />
        </Group>
      </Container>

      <Drawer opened={opened} onClose={close} position="right" size="xs" title={content.name}>
        <Stack gap="md">
          {content.nav.map((item) => (
            <Anchor key={item.href} href={item.href} onClick={close} c="dark.7" size="lg">
              {item.label}
            </Anchor>
          ))}
        </Stack>
      </Drawer>
    </Box>
  );
}
