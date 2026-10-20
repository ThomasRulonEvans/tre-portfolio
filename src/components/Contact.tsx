import { Anchor, Group, Stack, Text } from '@mantine/core';
import { IconBrandGithub, IconBrandLinkedin, IconMail } from '@tabler/icons-react';
import { site } from '../content';
import { Section } from './Section';
import classes from './Contact.module.css';

const links = [
  {
    label: site.email,
    href: `mailto:${site.email}`,
    icon: IconMail,
  },
  {
    label: 'GitHub',
    href: site.github,
    icon: IconBrandGithub,
  },
  {
    label: 'LinkedIn',
    href: site.linkedin,
    icon: IconBrandLinkedin,
  },
] as const;

export function Contact() {
  return (
    <Section
      id="contact"
      title="Contact"
      subtitle="Reach out by email or connect on GitHub and LinkedIn."
    >
      <Stack gap="md" className={classes.list} align="center">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <Anchor
              key={link.href}
              href={link.href}
              target={link.href.startsWith('mailto:') ? undefined : '_blank'}
              rel={link.href.startsWith('mailto:') ? undefined : 'noreferrer'}
              className={classes.link}
              underline="never"
            >
              <Group gap="sm" justify="center">
                <Icon size={22} stroke={1.6} />
                <Text fw={500}>{link.label}</Text>
              </Group>
            </Anchor>
          );
        })}
      </Stack>
    </Section>
  );
}
