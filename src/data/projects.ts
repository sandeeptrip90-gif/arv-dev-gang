export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  tagline: string;
  client: string;
  releaseYear: string;
  metrics: { label: string; value: string }[];
  description: string;
  previewUrl: string;
  technologies: string[];
  gradientTheme: string;
  accentColor: string;
}

export const PORTFOLIO_PROJECTS: ProjectItem[] = [
  {
    id: 'project-casino-ui',
    title: 'Casino Platform UI',
    category: 'iGaming Suite',
    tagline: 'High-Roller Web3 Casino Architecture',
    client: 'Velvet Royale Global',
    releaseYear: '2026',
    metrics: [
      { label: 'Active CCU', value: '45,000+' },
      { label: 'Latency', value: '< 28ms' },
      { label: 'Annual Volume', value: '$120M+' }
    ],
    description: 'A dark royal purple and metallic gold casino frontend featuring dynamic animated reels, multi-provider lobby aggregation, and instant web3 crypto deposits.',
    previewUrl: '#demo',
    technologies: ['React 19', 'Tailwind CSS', 'WebSockets', 'Canvas 2D', 'Ethers.js'],
    gradientTheme: 'from-purple-900/60 via-black/80 to-purple-950/60',
    accentColor: '#EAB308'
  },
  {
    id: 'project-game-dashboard',
    title: 'Game Dashboard',
    category: 'Telemetry & Ops',
    tagline: 'Real-Time Player Activity Matrix',
    client: 'CyberApex Interactive',
    releaseYear: '2026',
    metrics: [
      { label: 'Events/sec', value: '1.2M' },
      { label: 'Chart Refresh', value: '60 FPS' },
      { label: 'Risk Accuracy', value: '99.8%' }
    ],
    description: 'Holographic mission-control dashboard monitoring game state volatility, player retention cohorts, and automated bonus abuse defenses.',
    previewUrl: '#demo',
    technologies: ['Next.js', 'Apache Kafka', 'ClickHouse', 'D3.js', 'Tailwind'],
    gradientTheme: 'from-indigo-950/60 via-black/80 to-purple-950/60',
    accentColor: '#C084FC'
  },
  {
    id: 'project-mobile-app',
    title: 'Mobile App UI',
    category: 'Mobile Gaming',
    tagline: '120Hz Hyper-Fluid Gaming Experience',
    client: 'NovaStrike Mobile',
    releaseYear: '2026',
    metrics: [
      { label: 'Store Rating', value: '4.9 ★' },
      { label: 'Frame Rate', value: '120 FPS' },
      { label: 'Downloads', value: '850K+' }
    ],
    description: 'Handcrafted mobile gaming application with biometric face login, one-tap crypto top-up, haptic feedback, and offline wallet balance cache.',
    previewUrl: '#demo',
    technologies: ['React Native', 'Swift', 'Kotlin', 'Tailwind', 'Reanimated 3'],
    gradientTheme: 'from-fuchsia-950/60 via-black/80 to-purple-950/60',
    accentColor: '#EAB308'
  },
  {
    id: 'project-sports-betting',
    title: 'Sports Betting Platform',
    category: 'Wagering Engine',
    tagline: 'Millisecond Live In-Play Betting Feed',
    client: 'ApexOdds Group',
    releaseYear: '2026',
    metrics: [
      { label: 'Live Events', value: '8,000/mo' },
      { label: 'Odds Feed Lag', value: '14ms' },
      { label: 'Settlement Speed', value: 'Instant' }
    ],
    description: 'Next-gen sportsbook interface featuring live radar pitch animations, multi-match multiview, and custom margin risk shields.',
    previewUrl: '#demo',
    technologies: ['TypeScript', 'WebSocket', 'Tailwind', 'Go Engine', 'Redis'],
    gradientTheme: 'from-purple-900/60 via-black/80 to-amber-950/60',
    accentColor: '#FACC15'
  },
  {
    id: 'project-admin-panel',
    title: 'Admin Panel',
    category: 'Backoffice Ops',
    tagline: 'Institutional Scale Operations Command',
    client: 'Sovereign Gaming Labs',
    releaseYear: '2026',
    metrics: [
      { label: 'Tenant Support', value: 'Unlimited' },
      { label: 'Audit Trail', value: '100% Immutable' },
      { label: 'KYC Automation', value: '85%' }
    ],
    description: 'White-label administrative backoffice allowing multi-tenant management, game provider API toggle switches, and financial ledger audits.',
    previewUrl: '#demo',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'Tailwind'],
    gradientTheme: 'from-violet-950/60 via-black/80 to-purple-900/60',
    accentColor: '#A855F7'
  },
  {
    id: 'project-gaming-portal',
    title: 'Gaming Portal',
    category: 'Community & Tournaments',
    tagline: 'Competitive Guilds & Prize Tournaments',
    client: 'TitanRealm Entertainment',
    releaseYear: '2026',
    metrics: [
      { label: 'Guilds Formed', value: '4,200+' },
      { label: 'Prize Pool Disp.', value: '$4.5M' },
      { label: 'Uptime', value: '99.995%' }
    ],
    description: 'Community-centric gaming portal featuring real-time ranked ladders, live spectator broadcasts, token rewards, and integrated digital storefront.',
    previewUrl: '#demo',
    technologies: ['Next.js 15', 'Prisma', 'Tailwind CSS', 'WebRTC', 'Redis'],
    gradientTheme: 'from-purple-950/60 via-black/80 to-fuchsia-950/60',
    accentColor: '#EAB308'
  }
];
