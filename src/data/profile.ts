export const profile = {
  name: 'Marcelo Santamaria',
  title: 'Platform & Cloud Architect',
  subtitle:
    'Cloud Architecture · Platform Engineering · Distributed Systems · Kubernetes · AI-Assisted Engineering',
  location: 'Montevideo, Uruguay',
  languages: ['Spanish (Native)', 'English (Professional)'],
  email: 'jackpelorus@gmail.com',
  linkedin: 'https://linkedin.com/in/marcelo-santamaria-87792114',
  github: 'https://github.com/jacksmartv',
} as const;

export const heroHighlights = [
  'AWS',
  'Kubernetes',
  'Platform Engineering',
  'Cloud Architecture',
  'IoT',
  'Infrastructure as Code',
] as const;

export const platformSnapshot = [
  { label: 'Platform Engineering', value: '10+ years' },
  { label: 'Cloud Architecture', value: 'AWS · Kubernetes' },
  { label: 'Kubernetes Platform', value: '500+ Deployments' },
  { label: 'IoT Systems', value: '50,000+ Devices' },
  { label: 'Infrastructure', value: 'Terraform · CI/CD' },
  { label: 'Leadership', value: 'Technical Mentoring' },
] as const;

export const selectedAchievements = [
  'Architected a multi-tenant AWS EKS platform running 500+ Kubernetes deployments across 3 availability zones.',
  'Resolved a cluster-wide resource quota overcommit, right-sizing capacity allocation across 100+ namespaces.',
  'Built centralized device management for 50,000+ IoT devices across a smart-city deployment.',
  'Designed real-time telemetry pipelines on Kafka, AWS IoT Core, and Lambda for a live IoT platform.',
  'Provided technical leadership and mentorship for platform teams at TicketSocket/Halo Media and Globant.',
] as const;

export const engineeringPhilosophy = [
  "I build platforms that make engineering teams more productive, not just applications that work. A cloud migration or a CI/CD pipeline is only successful if it reduces the cognitive load on the people who operate it every day.",
  'Good architecture is a balance between simplicity, scalability, and operational excellence. The best systems I have shipped were not the most sophisticated — they were the ones that stayed boring, observable, and easy to change under real production pressure.',
] as const;

export const architecturePrinciples = [
  {
    title: 'Infrastructure as Code over manual operations',
    description:
      'If a change to production cannot be expressed in version control, it is not a repeatable process.',
  },
  {
    title: 'Observability is a feature, not an afterthought',
    description:
      'Metrics, logs, and traces are designed alongside the system, not bolted on after the first incident.',
  },
  {
    title: 'Simplicity scales better than cleverness',
    description:
      'A boring solution that the whole team understands outlives a clever one that only its author can operate.',
  },
  {
    title: 'Automate first, optimize later',
    description:
      'Remove manual steps before tuning performance — most reliability problems are process problems in disguise.',
  },
  {
    title: 'Measure before changing architecture',
    description:
      'Architectural decisions are justified by data — throughput, latency, cost, incident history — not by trend.',
  },
  {
    title: 'Security by design',
    description:
      'Identity, encryption, and least-privilege access are part of the initial design, not a hardening pass before launch.',
  },
  {
    title: 'Reliability over novelty',
    description:
      'New technology earns its place by solving a real constraint, not by being new.',
  },
  {
    title: 'Documentation is part of the deliverable',
    description:
      'A system is not done until the people operating it can understand it without asking the person who built it.',
  },
  {
    title: 'Small, reversible changes beat big rewrites',
    description:
      'Incremental migrations with a rollback path consistently outperform big-bang cutovers in enterprise environments.',
  },
  {
    title: 'Design for operators, not only developers',
    description:
      'The on-call engineer at 3am is a first-class user of every system that gets built.',
  },
] as const;

export const technicalLeadership = [
  {
    title: 'Architecture-Led, Not People Management',
    description:
      'Leads through architecture and hands-on execution — staying close to code, infrastructure, and production systems while guiding the engineers on the team.',
  },
  {
    title: 'Mentoring & Team Leadership',
    description:
      'Provides technical leadership and mentorship for a team of 3 DevOps engineers at TicketSocket/Halo Media, and led 2 engineers on IoT solutions at Globant.',
  },
  {
    title: 'Production Incident Leadership',
    description:
      'Leads technical investigation and resolution of complex production incidents across distributed systems, databases, networking, and cloud infrastructure — driving long-term architectural fixes instead of temporary patches.',
  },
  {
    title: 'AI-Assisted Engineering',
    description:
      'Uses AI-assisted engineering (GitHub Copilot, ChatGPT) to accelerate troubleshooting and documentation, while keeping engineering judgment and final review in-house.',
  },
] as const;

export const skillCategories = [
  {
    category: 'Cloud',
    skills: ['AWS', 'Azure'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'TypeScript', 'JavaScript', 'Python', 'Java', 'PHP', 'SQL'],
  },
  {
    category: 'Containers',
    skills: ['Kubernetes (Amazon EKS)', 'Docker', 'OpenShift', 'KEDA'],
  },
  {
    category: 'Infrastructure as Code',
    skills: ['Terraform', 'CloudFormation', 'Ansible'],
  },
  {
    category: 'Databases',
    skills: ['PostgreSQL', 'Aurora', 'MySQL', 'MongoDB', 'Redis'],
  },
  {
    category: 'Messaging',
    skills: ['Kafka / Amazon MSK'],
  },
  {
    category: 'CI/CD',
    skills: ['GitHub Actions', 'GitHub', 'GitLab CI', 'Jenkins'],
  },
  {
    category: 'Observability',
    skills: ['Prometheus', 'Grafana', 'ELK', 'CloudWatch'],
  },
] as const;

export const experience = [
  {
    company: 'TicketSocket (contracted through Halo Media)',
    location: 'USA',
    role: 'Platform & Cloud Architect',
    start: 'Oct 2022',
    end: 'Present',
    achievements: [
      'Architect and evolve a multi-tenant AWS EKS platform running 500+ Kubernetes deployments across 3 availability zones, supporting hundreds of production workloads with event-driven autoscaling via KEDA.',
      'Design and operate cloud-native data and messaging infrastructure — Aurora Serverless v2 (MySQL and PostgreSQL) and Kafka/MSK — underpinning a distributed, multi-tenant SaaS architecture.',
      'Identified and resolved a cluster-wide resource quota overcommit, right-sizing capacity allocation across 100+ namespaces to improve reliability and cost efficiency.',
      'Lead technical investigation and resolution of complex production incidents across distributed systems, databases, networking, and cloud infrastructure, driving long-term architectural fixes instead of temporary patches.',
      'Architect solutions hands-on while providing technical leadership and mentorship for a team of 3 DevOps engineers, influencing architectural decisions and establishing engineering standards.',
      'Use AI-assisted engineering (GitHub Copilot, ChatGPT) to accelerate troubleshooting and documentation, while keeping engineering judgment and final review in-house.',
    ],
    technologies: ['AWS EKS', 'Kubernetes', 'KEDA', 'Aurora Serverless v2', 'Kafka/MSK', 'Terraform'],
  },
  {
    company: 'Globant',
    location: 'Argentina / Uruguay',
    role: 'Senior Software Designer | Cloud & IoT Architect',
    start: 'Dec 2016',
    end: 'Oct 2022',
    achievements: [
      'Designed and implemented a RESTful API for an e-commerce platform, increasing transactional throughput by 15%.',
      'Designed a smart-city IoT platform using edge computing for real-time monitoring of traffic lights, waste management, and environmental sensors.',
      'Designed and built, hands-on, an IoT device management system giving centralized control over 50,000+ connected devices across multiple locations — guiding a team of 2 engineers through implementation and improving uptime and operational efficiency.',
      'Implemented IoT security frameworks — end-to-end encryption, device authentication, secure boot — and real-time data pipelines using Kafka, AWS IoT Core, and AWS Lambda.',
      'Worked across AWS and Azure cloud environments, participating in architecture reviews and technical decision-making for enterprise software delivery.',
    ],
    technologies: ['Kafka', 'AWS IoT Core', 'AWS Lambda', 'AWS', 'Azure', 'Edge Computing'],
  },
  {
    company: 'Zennovia',
    location: 'Argentina',
    role: 'Senior PHP Programmer',
    start: 'Apr 2015',
    end: 'Nov 2016',
    achievements: [
      'Led development and optimization of high-traffic e-commerce websites using PHP (Laravel, Symfony).',
      'Developed and maintained RESTful APIs and third-party integrations, improving data-exchange efficiency by 40%.',
      'Optimized MySQL queries, reducing load times by up to 50%.',
      'Implemented unit and integration tests with PHPUnit, reducing production errors.',
      'Implemented CI/CD pipelines with Jenkins and GitLab, reducing release cycle time by 30%.',
    ],
    technologies: ['PHP', 'Laravel', 'Symfony', 'MySQL', 'Jenkins', 'GitLab CI'],
  },
] as const;

export const education = [
  {
    school: 'UTN Argentina FRLP',
    degree: 'System Engineer',
    start: 'Mar 1994',
    end: 'Mar 2002',
  },
  {
    school: 'Image Campus, Argentina',
    degree: 'Senior Programmer',
    start: 'Mar 2004',
    end: 'Dec 2006',
  },
] as const;

export const certifications = [
  { name: 'Smart TV OTT Developer', date: 'Oct 2012', location: 'South Korea' },
  { name: 'HTML5 Expert', date: 'Dec 2010', location: 'Argentina' },
  { name: 'AJAX Developer 2.0', date: 'Mar 2009', location: 'Argentina' },
] as const;
