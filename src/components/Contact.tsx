import { Anchor, Container, Stack, Text, Title } from '@mantine/core';
import { content } from '../content';
import { FadeIn } from './FadeIn';

export function Contact() {
  const { contact } = content;

  return (
    <Container component="section" id="contact" size="md" py={{ base: 56, sm: 80 }}>
      <FadeIn>
        <Stack gap="md" maw={720}>
          <Title order={2} c="teal.8">
            Contact
          </Title>
          <Text c="dark.6" mb="xs">
            Reach out anytime.
          </Text>
          <Anchor href={`mailto:${contact.email}`} c="teal.7" size="lg" underline="hover">
            {contact.email}
          </Anchor>
          <Anchor
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            c="teal.7"
            size="lg"
            underline="hover"
          >
            GitHub
          </Anchor>
          <Anchor
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            c="teal.7"
            size="lg"
            underline="hover"
          >
            LinkedIn
          </Anchor>
        </Stack>
      </FadeIn>
    </Container>
  );
}
