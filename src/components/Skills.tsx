import { SimpleGrid, Stack, Text, ThemeIcon } from '@mantine/core';
import {
  IconBrandCss3,
  IconBrandJavascript,
  IconBrandPhp,
  IconBrandPython,
  IconBrandReact,
  IconCoffee,
  IconDatabase,
  IconApi,
  IconSparkles,
} from '@tabler/icons-react';
import type { TablerIcon } from '@tabler/icons-react';
import { skills } from '../content';
import { Section } from './Section';
import classes from './Skills.module.css';

const skillIcons: Record<(typeof skills)[number]['name'], TablerIcon> = {
  Java: IconCoffee,
  JavaScript: IconBrandJavascript,
  'HTML5/CSS3': IconBrandCss3,
  Python: IconBrandPython,
  PHP: IconBrandPhp,
  'SQL/SQLite': IconDatabase,
  Postman: IconApi,
  'React.js': IconBrandReact,
  'Cursor AI': IconSparkles,
};

export function Skills() {
  return (
    <Section
      id="skills"
      title="Skills"
      subtitle="Tools I use from day to day to infrequently, with years of hands-on experience."
      muted
    >
      <SimpleGrid
        cols={{ base: 2, sm: 3 }}
        spacing={{ base: 'lg', sm: 'xl' }}
        className={classes.grid}
      >
        {skills.map((skill) => {
          const Icon = skillIcons[skill.name];

          return (
            <Stack
              key={skill.name}
              align="center"
              gap="sm"
              className={classes.item}
              aria-label={`${skill.name}: ${skill.years} ${skill.years === 1 ? 'year' : 'years'}`}
            >
              <ThemeIcon
                size={64}
                radius="md"
                variant="light"
                color="teal"
                className={classes.icon}
              >
                <Icon size={34} stroke={1.5} />
              </ThemeIcon>
              <Text fw={600} c="gray.1" ta="center">
                {skill.name}
              </Text>
              <Text size="sm" c="teal.4" fw={500} ta="center">
                {skill.years} {skill.years === 1 ? 'year' : 'years'}
              </Text>
            </Stack>
          );
        })}
      </SimpleGrid>
    </Section>
  );
}
