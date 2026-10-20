import { Badge, Group, Stack, Text, Timeline, Title } from '@mantine/core';
import { IconBriefcase } from '@tabler/icons-react';
import { experience } from '../content';
import { Section } from './Section';
import classes from './Experience.module.css';

export function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
      subtitle="Roles where I’ve built tools, infrastructure, and clearer workflows."
    >
      <Timeline
        active={experience.length}
        bulletSize={28}
        lineWidth={2}
        color="teal"
        className={classes.timeline}
      >
        {experience.map((job) => (
          <Timeline.Item
            key={`${job.company}-${job.title}`}
            bullet={<IconBriefcase size={14} />}
            title={
              <Title order={3} className={classes.jobTitle}>
                {job.title}
              </Title>
            }
          >
            <Stack gap="sm" mt="xs" mb="xl">
              <Text fw={600} c="teal.4">
                {job.company}
              </Text>
              <Group gap="xs">
                <Badge variant="light" color="teal" radius="sm">
                  {job.type}
                </Badge>
                <Text size="sm" c="dimmed">
                  {job.dates} · {job.duration}
                </Text>
              </Group>
              <Text size="sm" c="dimmed">
                {job.location}
              </Text>
              <Text className={classes.description}>{job.description}</Text>
            </Stack>
          </Timeline.Item>
        ))}
      </Timeline>
    </Section>
  );
}
