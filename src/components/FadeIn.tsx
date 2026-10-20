import { Box } from '@mantine/core';
import { useIntersection } from '@mantine/hooks';
import type { ReactNode } from 'react';

type FadeInProps = {
  children: ReactNode;
  delayMs?: number;
};

export function FadeIn({ children, delayMs = 0 }: FadeInProps) {
  const { ref, entry } = useIntersection({
    root: null,
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px',
  });

  const visible = entry?.isIntersecting ?? false;

  return (
    <Box
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(1.25rem)',
        transition: `opacity 0.7s ease ${delayMs}ms, transform 0.7s ease ${delayMs}ms`,
      }}
    >
      {children}
    </Box>
  );
}
