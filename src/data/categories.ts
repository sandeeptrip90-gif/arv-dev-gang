export interface Category {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  itemCount: string;
  mascotImage?: string;
  characterTitle?: string;
  iconName: string;
  features: string[];
}

export const CATEGORIES: Category[] = [
  {
    id: 'casino-platforms',
    name: 'Casino Platforms',
    subtitle: 'High-Roller Luxury Suites',
    description: 'Certified slot engines, live dealer stream integration, crash multiplier games, and provably fair cryptographic mechanics.',
    itemCount: '24 Ready Templates',
    mascotImage: '/assets/images/casino_host.jpg',
    characterTitle: 'VIP Gaming Host',
    iconName: 'Crown',
    features: ['Instant Provably Fair', 'Crypto & Fiat Gateway', 'Dynamic Multipliers']
  },
  {
    id: 'gaming-platforms',
    name: 'Gaming Platforms',
    subtitle: 'Esports & Multiplayer Arenas',
    description: 'Ultra-low ping multiplayer matchmaking hubs, tournament brackets, guild social rooms, and virtual economy trading.',
    itemCount: '18 Systems',
    mascotImage: '/assets/images/esports_mascot.jpg',
    characterTitle: 'Esports Arena Lead',
    iconName: 'Gamepad2',
    features: ['Tournament Engine', 'Ranked Matchmaking', 'Guild Hubs']
  },
  {
    id: 'sports-betting',
    name: 'Sports Betting UI',
    subtitle: 'Real-Time Odds Feeds',
    description: 'Precision in-play sportsbooks with automated market creation, risk-hedging algorithms, and dynamic cashout sliders.',
    itemCount: '12 Solutions',
    iconName: 'Zap',
    features: ['Live Odds Radar', 'Bet Builder Engine', 'Automated Settler']
  },
  {
    id: 'admin-panels',
    name: 'Admin Panels',
    subtitle: 'Executive Telemetry & Control',
    description: 'Full-spectrum operational backoffices with real-time GGR tracking, player cohort metrics, KYC verification, and risk defense.',
    itemCount: '15 Dashboards',
    mascotImage: '/assets/images/analyst.jpg',
    characterTitle: 'Live Ops Analyst',
    iconName: 'BarChart3',
    features: ['Real-Time GGR & NGR', 'Automated KYC Flow', 'Player Risk Scoring']
  },
  {
    id: 'mobile-apps',
    name: 'Mobile Apps',
    subtitle: 'iOS & Android Native Builds',
    description: 'Ultra-responsive 120Hz mobile apps built on React Native & Flutter with offline game state cache and biometric security.',
    itemCount: '16 Applications',
    iconName: 'Smartphone',
    features: ['Biometric Auth', 'Offline State Cache', '120fps Smoothness']
  },
  {
    id: 'custom-dev',
    name: 'Custom Development',
    subtitle: 'Bespoke Engineering Studio',
    description: 'Dedicated senior gaming architects building proprietary game logic, custom mathematics, unique art directions, and custom infrastructure.',
    itemCount: 'Full Team On-Demand',
    mascotImage: '/assets/images/female_dev.jpg',
    characterTitle: 'Lead Software Architect',
    iconName: 'Code2',
    features: ['Custom Math Models', 'White-Glove Architecture', 'Full IP Transfer']
  }
];
