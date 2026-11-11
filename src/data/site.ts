// All site content lives here. Edit this file to change text, links or projects.

export const site = {
  name: 'Sayem Al Amin',
  role: 'Designer & Developer',
  description:
    'Designer and developer who builds fast, clear digital products with AI. Open to client projects and junior roles.',
  email: 'alamin.intlbd@gmail.com',
  location: 'Chittagong, Bangladesh',
  timeZone: 'Asia/Karachi', // Islamabad
  timeCity: 'Islamabad',
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sayemalamin/' },
    { label: 'GitHub', href: 'https://github.com/alamin2507' },
    { label: 'Instagram', href: 'https://www.instagram.com/sayem_._08/' },
    { label: 'Facebook', href: 'https://www.facebook.com/sayemalamin25' },
  ],
};

export const nav = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export const services = [
  {
    title: 'Web Design & Development',
    level: 'Core',
    points: ['UI/UX design', 'Responsive layouts', 'Fast static sites', 'Deploy & domain'],
    text: 'I design and build websites from the first sketch to the live domain. Clean layout, fast loading, secure by default.',
  },
  {
    title: 'Business & AI Solutions',
    level: 'Core',
    points: ['Problem discovery', 'AI-assisted builds', 'Workflow automation', 'Product thinking'],
    text: 'I start from the business problem, then use AI tools to ship a working product quickly. AI is how I work, not a label.',
  },
  {
    title: 'Digital Marketing',
    level: 'Intermediate',
    points: ['Content planning', 'Social media', 'Landing pages'],
    text: 'I help a small brand plan its content, run its social pages and turn visitors into leads.',
  },
  {
    title: 'Video Editing',
    level: 'Intermediate',
    points: ['Short-form reels', 'Captions', 'Simple motion graphics'],
    text: 'Short, clear videos for social media with captions, clean cuts and simple motion graphics.',
  },
];

export const projects = [
  {
    title: 'This Portfolio',
    type: 'Design · Development · AI',
    year: '2026',
    text: 'A case study in building with AI: from a written PRD and SOP to a deployed static site. Astro, plain CSS, almost no JavaScript, strict security headers.',
  },
  {
    title: 'Custom Video Editor',
    type: 'In progress',
    year: '2026',
    text: 'A video editor shaped around my own editing workflow, so repeated steps take one click instead of ten.',
  },
  {
    title: 'Automated Clothing Design Editor',
    type: 'In progress',
    year: '2026',
    text: 'An editor that automates the repetitive parts of preparing clothing designs.',
  },
];

export const process = [
  { title: 'Discover', text: 'Understand the business, the users and the real problem before any design.' },
  { title: 'Design', text: 'Structure first, then visuals. Simple screens that are easy to use.' },
  { title: 'Build', text: 'Small, reviewable steps with AI. Minimal code, tested as it grows.' },
  { title: 'Launch', text: 'Deploy, measure speed and security, then keep improving.' },
];

export const education = [
  {
    title: 'BS in Computer Science',
    place: 'Pakistan Institute of Engineering & Applied Sciences',
    year: '2026 – 2030',
    note: 'Fully funded scholarship.',
    current: true,
  },
  {
    title: 'B.Sc. in Computer Science & Engineering',
    place: 'International Islamic University Chittagong',
    year: '2025 – 2029',
    note: 'Completed the first year, then moved to Pakistan on the scholarship.',
    current: false,
  },
];

export const skills = [
  { group: 'Design', items: ['UI/UX', 'Layout & type', 'Design systems'] },
  { group: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React', 'Astro'] },
  { group: 'Backend', items: ['Node.js', 'Django', 'MySQL', 'PostgreSQL', 'NoSQL'] },
  { group: 'Workflow', items: ['AI-assisted development', 'Git & GitHub', 'PRD → SOP → Build'] },
];
