export const site = {
  name: 'Thomas Evans',
  tagline: 'Full-Stack Developer',
  email: 'ThomasRulonEvans@gmail.com',
  github: 'https://github.com/ThomasRulonEvans',
  linkedin: 'https://www.linkedin.com/in/thomasrulonevans/',
};

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
] as const;

export const aboutParagraphs = [
  'I like taking an idea, sometimes just a sketch or a conversation, and turning it into something real that people can actually use. That’s what drew me to software, and it’s still what I enjoy most about the work.',
  'I’m a full-stack developer with a focus on internal tools and Guidewire. I like projects where the goal is clear: make something faster, simpler, or easier for the people using it every day. Whether that’s a dashboard that puts important information in one place or automation that cuts down repetitive manual work, I’m most motivated when I can see the impact.',
  'My background is a BBA in Business Informatics from Idaho State University (2024), which helps me think about software from both a technical and business perspective — not just how to build something, but why it matters and who it’s for.',
  'Technically, I work with Java, JavaScript, React, SQL, PHP, and Linux. I’m currently working toward my Guidewire ACE Certification in PolicyCenter Configuration, and I’m always looking to grow as a developer.',
];

export const skills = [
  { name: 'Java', years: 6 },
  { name: 'JavaScript', years: 6 },
  { name: 'React.js', years: 1 },
  { name: 'Cursor AI', years: 1 },
] as const;

export const experience = [
  {
    title: 'Software Development Intern',
    company: 'California Casualty',
    type: 'Internship',
    dates: 'Feb 2026 – Present',
    duration: '9 mos',
    location: 'Remote',
    description:
      'I work closely with our senior software architect to identify and plan projects that make life easier for developers and business teams. My focus is on full-stack development and internal tools: building things that save time, reduce friction, and help people do their jobs faster.',
  },
  {
    title: 'Information Technology Consultant',
    company: 'A-affordable Bail Bonds Idaho LLC',
    type: 'Freelance',
    dates: 'May 2020 – Present',
    duration: '6 yrs 6 mos',
    location: 'Pocatello, Idaho, United States · On-site',
    description:
      'Designed, implemented, and maintain all IT infrastructure for the company as well as advise on emerging technologies.',
  },
] as const;

export const education = {
  school: 'Idaho State University',
  degree: 'Bachelor of Business Administration - BBA, Business Informatics',
  dates: 'Aug 2019 – May 2024',
};
