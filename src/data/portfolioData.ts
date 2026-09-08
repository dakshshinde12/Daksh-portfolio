import {
  ProjectItem,
  SkillItem,
  MilestoneItem,
  FocusAreaItem,
  BeyondCodeDimension,
} from '../types';

export const HERO_DATA = {
  name: 'DAKSH SHINDE',
  subBadge: 'B.TECH · AI & DATA SCIENCE · 2026 · REVA UNIVERSITY',
  specTags: ['SPEC: C & PYTHON', 'DSA · PROBLEM SOLVING'],
  location: 'BASED IN BENGALURU',
  headline: "I'M AN AI & DATA SCIENCE STUDENT",
  summary:
    "I'm currently building my foundations in programming, Data Structures & Algorithms, and problem solving while exploring creativity, personal branding, sales, and new areas of technology.",
  portraitUrl:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuB_tsT0Uu5GuHNw7cAhvwdcuKLaZOTu8_km-2b1tO_815omQSn5rYLOXnSH8fI788VAkPAlyhtlKDYhESoA2gHRsSdQJqtgUAQQAJkv_8D9y5JzxGj4mefx0Pcfrc96KNIx0vFu95rYLfijbHfh0pPMXUZWYhYH_7HsFrfYQAM9rHe4ogbrOWX6AicSOO-fXv2mEyiESBVhCXxcPJctjC9rppqtcnACy5YkjajXRamxpTMwtG0OqFgW',
};

export const FOCUS_AREAS: FocusAreaItem[] = [
  {
    index: '01',
    title: 'C PROGRAMMING',
    description: 'Programming fundamentals and practical implementation.',
    details: [
      'Low-level memory management and pointer arithmetic',
      'Dynamic memory allocation (malloc, calloc, free)',
      'Structuring programs with modular headers and compilation routines',
      'Console-based algorithm simulation and benchmark tests',
    ],
    tools: ['GCC', 'C11 / C99', 'GDB', 'Makefiles'],
  },
  {
    index: '02',
    title: 'PYTHON',
    description: 'Building programming knowledge and exploring applications.',
    details: [
      'Core syntax, list comprehensions, and functional paradigms',
      'Data handling and matrix manipulation foundations',
      'Scripting for automation and experimental pipelines',
      'Connecting algorithmic logic with Pythonic efficiency',
    ],
    tools: ['Python 3.x', 'NumPy', 'Jupyter', 'Virtual Environments'],
  },
  {
    index: '03',
    title: 'DATA STRUCTURES & ALGORITHMS',
    description: 'Currently learning DSA using C and improving problem-solving abilities.',
    details: [
      'Implementation of dynamic arrays, linked lists, stacks, and queues from scratch',
      'Tree traversals (inorder, preorder, postorder) and recursion traces',
      'Searching and sorting algorithms with Big-O complexity calculation',
      'Translating problem statements into mathematical algorithmic steps',
    ],
    tools: ['C Source', 'Complexity Analysis', 'LeetCode Practice', 'Visualizers'],
  },
  {
    index: '04',
    title: 'ARTIFICIAL INTELLIGENCE',
    description: 'Exploring AI and technology as part of my academic and personal development.',
    details: [
      'Foundational machine learning concepts and mathematical principles',
      'Linear algebra and statistics for predictive modeling',
      'Data preprocessing, feature normalization, and metric evaluation',
      'Exploration of modern generative paradigms and real-world AI applications',
    ],
    tools: ['Scikit-Learn', 'Math for ML', 'Model Evaluation', 'Data Analysis'],
  },
];

export const SKILLS: SkillItem[] = [
  {
    index: '01',
    title: 'C',
    status: 'LEARNING',
    tags: 'CORE RUNTIME · MEMORY · POINTERS',
    description: 'Deep dive into computer architecture, memory allocation, pointers, structs, and efficient execution.',
  },
  {
    index: '02',
    title: 'PYTHON',
    status: 'DEVELOPING',
    tags: 'SYNTAX · SCRIPTING · PROTOTYPING',
    description: 'Versatile language for computational scripts, algorithmic prototypes, and data science workflows.',
  },
  {
    index: '03',
    title: 'DATA STRUCTURES',
    status: 'LEARNING',
    tags: 'ARRAYS · STACKS · QUEUES · LINKED LISTS',
    description: 'Manual implementation in C to master cache-locality, memory addresses, and data organization.',
  },
  {
    index: '04',
    title: 'ALGORITHMS',
    status: 'DEVELOPING',
    tags: 'SEARCH · SORT · TIME COMPLEXITY ANALYSIS',
    description: 'Binary search, divide-and-conquer, sorting efficiencies, asymptotic Big-O notation, and space bounds.',
  },
  {
    index: '05',
    title: 'ARTIFICIAL INTELLIGENCE',
    status: 'EXPLORING',
    tags: 'FOUNDATIONAL CONCEPTS · DATA SCIENCE',
    description: 'Statistical reasoning, feature engineering, classification models, and evaluating intelligent systems.',
  },
  {
    index: '06',
    title: 'PROBLEM SOLVING',
    status: 'PRACTICING',
    tags: 'ANALYTICAL RIGOR · PRACTICAL CODING',
    description: 'Deconstructing ambiguous problems into testable code routines with edge-case consideration.',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'energy-monitoring',
    index: '01',
    title: 'ENERGY MONITORING SYSTEM',
    subtitle: 'REAL-TIME CONSUMPTION TELEMETRY & AUDIT PLATFORM',
    category: 'ACADEMIC BUILD',
    status: 'COMPLETED',
    description:
      'An academic project focused on monitoring energy usage, providing practical exposure to approaching a real-world problem through a technology-driven solution.',
    extendedDetails: [
      'Engineered an end-to-end framework to sample instantaneous wattage, current draw, and power factor across connected load lines.',
      'Constructed algorithmic filtering routines to detect anomalous spike events exceeding normal 1.1 kW baseline thresholds.',
      'Evaluated practical power-saving strategies and automated alerts for peak demand management.',
    ],
    keyHighlights: [
      '50Hz sampling frequency simulated across active virtual sensors',
      'Real-time peak detection with nominal baseline tracking',
      'Systematic reduction of power leakage during inactive periods',
    ],
    technologies: ['C / Embedded Logic', 'Sensor Telemetry', 'Circuit Analysis', 'Data Logging'],
    outcome: 'REAL-WORLD PROBLEM SOLVING',
    visualType: 'telemetry',
  },
  {
    id: 'enso-circle',
    index: '02',
    title: 'ENSO CIRCLE',
    subtitle: 'PHILOSOPHICAL SYSTEMIC REASONING & STRUCTURED DISCOURSE',
    category: 'PRESENTATION',
    status: 'COMPLETED',
    description:
      'A presentation-based project prepared and presented as part of academic/project work, demonstrating research, organization, communication, and presentation skills.',
    extendedDetails: [
      'Synthesized the Zen concept of Ensō (the circle of togetherness, void, and uninhibited elegance) with computational design thinking.',
      'Explored how cyclical iteration in engineering parallels deliberate minimalist principles in personal mastery.',
      'Presented structured discourse before an academic panel, defending conceptual models with clarity and poise.',
    ],
    keyHighlights: [
      'Comprehensive slide deck and visual storytelling synthesis',
      'Discourse on disciplined minimalism in code and architecture',
      'Interactive Q&A defense in an academic forum',
    ],
    technologies: ['Research Methodologies', 'Public Presentation', 'Visual Architecture', 'Cognitive Modeling'],
    outcome: 'RESEARCH & COMMUNICATION',
    visualType: 'enso',
  },
];

export const MILESTONES: MilestoneItem[] = [
  {
    index: '01',
    title: 'ENERGY MONITORING SYSTEM',
    description: 'Academic project completed; practical exposure to technology-driven energy telemetry.',
    tag: '[ ACADEMIC BUILD ]',
    status: 'COMPLETED',
  },
  {
    index: '02',
    title: 'ENSO CIRCLE',
    description: 'Project prepared and presented; sharpened research, visual organization, and public presentation.',
    tag: '[ PRESENTATION ]',
    status: 'COMPLETED',
  },
  {
    index: '03',
    title: 'DSA WITH C',
    description: 'Currently learning Data Structures & Algorithms using C for foundational depth.',
    tag: '[ ACTIVE SPRINT ]',
    status: 'IN_PROGRESS',
  },
  {
    index: '04',
    title: 'PROGRAMMING RIGOR',
    description: 'Developing stronger programming understanding through line-by-line study and independent implementation.',
    tag: '[ CORE METHOD ]',
    status: 'CORE',
  },
  {
    index: '05',
    title: 'PROBLEM SOLVING',
    description: 'Improving programming and analytical problem-solving abilities through continuous hands-on practice.',
    tag: '[ DELIBERATE PRACTICE ]',
    status: 'IN_PROGRESS',
  },
  {
    index: '06',
    title: 'PERSONAL BRAND',
    description: 'Exploring personal branding, positioning, and practical cross-disciplinary skills such as sales.',
    tag: '[ MULTI-DISCIPLINARY ]',
    status: 'IN_PROGRESS',
  },
  {
    index: '07',
    title: 'CONTINUOUS EXPLORATION',
    description: 'Continuously experimenting with different skills, fields, and methodologies rather than boxing identity prematurely.',
    tag: '[ ONGOING COMMITMENT ]',
    status: 'CORE',
  },
];

export const BEYOND_CODE_DIMENSIONS: BeyondCodeDimension[] = [
  {
    index: '01',
    title: 'CREATIVITY',
    subtitle: 'Synthesizing aesthetics with analytical code',
  },
  {
    index: '02',
    title: 'PERSONAL DEVELOPMENT',
    subtitle: 'Daily deliberate habits & mental models',
  },
  {
    index: '03',
    title: 'SALES',
    subtitle: 'Persuasion, empathy & articulating value',
  },
  {
    index: '04',
    title: 'READING',
    subtitle: 'Deep dives into non-fiction & tech histories',
  },
  {
    index: '05',
    title: 'LEARNING NEW SKILLS',
    subtitle: 'Relentless intellectual curiosity',
  },
  {
    index: '06',
    title: 'EXPERIMENTATION',
    subtitle: 'Rapid iterative testing without fear of failure',
  },
  {
    index: '07',
    title: 'PERSONAL BRANDING',
    subtitle: 'Curating authentic identity and clear positioning',
    spanCol: true,
  },
];

export const CONTACT_INFO = {
  email: 'dakshshinde1144@gmail.com',
  phone: '+91 8310982497',
  rawPhone: '8310982497',
  linkedinUrl: 'https://www.linkedin.com/in/daksh-shinde-890600431',
  linkedinHandle: 'Daksh Shinde',
  githubUrl: 'https://github.com/dakshshinde12/portfolio.git',
  githubHandle: 'dakshshinde12',
  location: 'Bengaluru, Karnataka, India',
  institution: 'REVA University · School of C&IT',
  coordinates: {
    lat: '13.1136° N',
    lon: '77.6346° E',
    region: 'BLR // IN',
  },
};
