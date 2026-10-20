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
  'I am a full-stack developer with a focus on internal tools and Guidewire. I like projects where the goal is clear: make something faster, simpler, or easier for the people using it every day. Whether that’s a dashboard that puts important information in one place or automation that cuts down repetitive manual work, I’m most motivated when I can see the impact.',
  'My background is a BBA in Business Informatics from Idaho State University (2024), which helps me think about software from both a technical and business perspective — not just how to build something, but why it matters and who it’s for.',
  'I am currently working toward my Guidewire ACE Certification in PolicyCenter Configuration, and I’m always looking to grow as a developer.',
];

export const skills = [
  { name: 'Cursor AI', years: 1 },
  { name: 'React.js', years: 1 },
  { name: 'Postman', years: 2 },
  { name: 'JavaScript', years: 6 },
  { name: 'Java', years: 6 },
  { name: 'Python', years: 3 },
  { name: 'SQL/SQLite', years: 3 },
  { name: 'HTML5/CSS3', years: 5 },
  { name: 'PHP', years: 3 },
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
      'I have worked closely with Calcas’ senior software architect to identify and plan projects that make life easier for developers and business teams. Currently I am working on upgrading API implementations in Guidewire PolicyCenter. My focus is on full-stack development and internal tools: building things that save time, reduce friction, and help people do their jobs better.',
  },
  {
    title: 'Information Technology Consultant',
    company: 'A-Affordable Bail Bonds Idaho LLC',
    type: 'Freelance',
    dates: 'May 2020 – Present',
    duration: '6 yrs 6 mos',
    location: 'Pocatello, Idaho, United States · On-site',
    description:
      'While working at A-Affordable Bail Bonds Idaho LLC, I am responsible for designing, implementing, and maintaining all IT infrastructure for the company as well as advise on emerging technologies.',
  },
] as const;

export const education = [
  {
    school: 'Idaho State University',
    degree: 'Bachelor of Business Administration - BBA, Business Informatics',
    dates: 'Aug 2019 – May 2024',
  },
  {
    school: 'Century High School',
    degree: 'High School Diploma',
    dates: 'Aug 2011 – June 2015',
  },
] as const;
