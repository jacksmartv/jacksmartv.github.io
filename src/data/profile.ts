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
  { label: 'Platform Engineering', value: '20+ years' },
  { label: 'Cloud Architecture', value: 'AWS · Kubernetes' },
  { label: 'Enterprise Platforms', value: '200+ Microservices' },
  { label: 'IoT Systems', value: '50,000+ Devices' },
  { label: 'Infrastructure', value: 'Terraform · CI/CD' },
  { label: 'Leadership', value: 'Technical Mentoring' },
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
    title: 'Architecture Reviews & Platform Standards',
    description:
      'Defined platform-wide standards for deployment, CI/CD, and infrastructure conventions across a 200+ microservices environment at Halo Media.',
  },
  {
    title: 'Mentoring & Team Leadership',
    description:
      'Led a team of 3 DevOps engineers at Halo Media and 2 engineers on IoT solutions at Globant, building a culture of automation and continuous learning.',
  },
  {
    title: 'Cloud Governance & Security Reviews',
    description:
      'Established IAM, OAuth/SSO, and vulnerability-scanning practices as part of a DevSecOps approach to platform security.',
  },
  {
    title: 'Infrastructure Strategy',
    description:
      'Drove the decision to migrate legacy systems to a cloud-native environment on AWS, balancing availability, disaster recovery, and delivery speed.',
  },
] as const;

export const skillCategories = [
  {
    category: 'Cloud',
    skills: ['AWS', 'Azure', 'Google Cloud Platform'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'PHP', 'Java', 'Python', 'Ruby'],
  },
  {
    category: 'Architecture',
    skills: ['Microservices', 'Event-Driven Systems', 'RESTful APIs', 'Edge Computing'],
  },
  {
    category: 'Infrastructure as Code',
    skills: ['Terraform', 'CloudFormation', 'Ansible', 'Puppet', 'Chef'],
  },
  {
    category: 'Containerization',
    skills: ['Docker', 'Kubernetes', 'OpenShift'],
  },
  {
    category: 'Monitoring & Observability',
    skills: ['Prometheus', 'Grafana', 'ELK Stack', 'Nagios'],
  },
  {
    category: 'IoT',
    skills: ['Apache Kafka', 'AWS IoT Core', 'AWS Lambda', 'Edge Computing'],
  },
  {
    category: 'Security',
    skills: ['DevSecOps', 'AWS IAM', 'OAuth', 'SSO', 'Vulnerability Scanning'],
  },
] as const;

export const experience = [
  {
    company: 'Halo Media',
    location: 'USA',
    role: 'Lead DevOps Architect – Security Manager',
    start: 'Oct 2022',
    end: 'Present',
    achievements: [
      'Spearheaded the architecture and deployment of scalable cloud infrastructure on AWS and Kubernetes, supporting a 200+ microservices environment.',
      'Led a team of 3 DevOps engineers, building a culture of collaboration, continuous learning, and automation.',
      'Designed and implemented CI/CD pipelines with Jenkins, GitLab, and Terraform, reducing deployment times by 32% and improving release frequency.',
      'Drove the migration of legacy systems to a cloud-native environment, ensuring high availability and disaster recovery through AWS EC2, S3, and RDS.',
      'Established best practices for version control, monitoring, and incident management, reducing downtime by 30%.',
    ],
    technologies: ['AWS', 'Kubernetes', 'Terraform', 'Jenkins', 'GitLab CI', 'Prometheus', 'Grafana'],
  },
  {
    company: 'Globant',
    location: 'Argentina / Uruguay',
    role: 'Senior Software Designer – IoT Architect',
    start: 'Dec 2016',
    end: 'Oct 2022',
    achievements: [
      'Designed and architected a smart-city IoT platform using edge computing, enabling real-time monitoring of traffic lights, waste management, and environmental sensors.',
      'Led a team of 2 engineers building end-to-end IoT solutions for industrial automation, integrating IoT devices, AWS/Azure, and predictive-maintenance ML.',
      'Developed and deployed a scalable device management system centrally controlling 50,000+ IoT devices across multiple locations.',
      'Implemented IoT security frameworks — end-to-end encryption, device authentication, and secure boot.',
      'Designed real-time data ingestion pipelines using Apache Kafka, AWS IoT Core, and AWS Lambda.',
      'Designed and implemented a RESTful API for an e-commerce platform, increasing transactional throughput by 15%.',
    ],
    technologies: ['Kafka', 'AWS IoT Core', 'AWS Lambda', 'Java', 'Spring Boot', 'Edge Computing'],
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
