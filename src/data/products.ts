export interface Product {
  id: string;
  title: string;
  category: string;
  price: string;
  description: string;
  features: string[];
  badge?: string;
  rating: number;
  salesCount: string;
  demoUrl?: string;
  techStack: string[];
  highlights: string[];
}

export const POPULAR_PRODUCTS: Product[] = [
  {
    id: 'casino-platform-pro',
    title: 'Premium Casino Platform',
    category: 'Casino Platforms',
    price: '$499',
    description: 'Turnkey online casino software featuring 250+ certified games, multi-currency crypto wallets, live RTP control, and automated bonus engines.',
    features: [
      '250+ Certified Slots, Live Tables & Crash Games',
      'Multi-Currency Wallet (Crypto & Fiat Web3)',
      'Automated Anti-Fraud & Risk Management Engine',
      'Real-Time Backoffice with Instant Payout Control'
    ],
    badge: 'BEST SELLER',
    rating: 4.98,
    salesCount: '180+ Deployed',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'],
    highlights: ['99.99% Uptime Guarantee', 'Instant White-Label Setup', 'GLI-19 Architecture Ready']
  },
  {
    id: 'multi-game-portal',
    title: 'Multi Game Platform',
    category: 'Gaming Platforms',
    price: '$399',
    description: 'High-concurrency gaming portal with unified lobby, social guilds, tournaments, leaderboard engine, and matchmaking microservices.',
    features: [
      'Unified Game Hub with 50+ Casual & PvP Titles',
      'Global Tournament & Ranked Matchmaking System',
      'Social Guilds, Player Chat & Live Spectator Feeds',
      'Modular Microservices Architecture with WebSocket'
    ],
    badge: 'HIGH DEMAND',
    rating: 4.95,
    salesCount: '140+ Deployed',
    techStack: ['Next.js', 'Go / Golang', 'MongoDB', 'Socket.io', 'AWS'],
    highlights: ['Up to 50k Concurrent Users', 'Full Source Code Included', 'Cross-Platform Ready']
  },
  {
    id: 'sports-betting-suite',
    title: 'Sports Betting Platform',
    category: 'Sports Betting UI',
    price: '$449',
    description: 'Comprehensive sports & esports wagering platform with ultra-low latency live odds feeds, bet-builder, cash-out, and risk management.',
    features: [
      'Live Odds Integration for 40+ Global Sports & Esports',
      'Dynamic Bet Builder, Accumulators & Early Cash-out',
      'Instant Match Visualizer & In-Play Telemetry',
      'Custom Margin Adjuster & Autonomous Risk Shield'
    ],
    badge: 'POPULAR',
    rating: 4.92,
    salesCount: '115+ Deployed',
    techStack: ['React', 'TypeScript', 'Node.js', 'Kafka', 'Redis'],
    highlights: ['Ultra-Low Latency Odds', 'Automated Settlement', 'Mobile First Layout']
  },
  {
    id: 'gaming-mobile-app',
    title: 'Gaming Mobile App',
    category: 'Mobile Apps',
    price: '$299',
    description: 'Native-feel iOS & Android gaming application with biometric authentication, push notifications, offline cache, and ultra-fluid 120Hz UI.',
    features: [
      'React Native / Flutter Cross-Platform Architecture',
      'Biometric Login (FaceID / Fingerprint) & Apple Pay',
      'Push Notification Campaign & Retention System',
      'Hardware-Accelerated 120Hz Animation Smoothness'
    ],
    badge: 'NEW RELEASE',
    rating: 4.96,
    salesCount: '95+ Deployed',
    techStack: ['React Native', 'TypeScript', 'Tailwind', 'Fastlane', 'Firebase'],
    highlights: ['App Store & Play Store Ready', 'Zero Lag WebSockets', 'Haptic Touch Feedback']
  }
];

export const FEATURED_PRODUCT: Product = {
  id: 'next-gen-casino-enterprise',
  title: 'NEXT-GEN CASINO PLATFORM',
  category: 'Enterprise White-Label',
  price: '$899',
  description: 'The pinnacle of iGaming technology. Engineered for high-volume operators who demand uncompromised performance, military-grade security, and breathtaking visual luxury.',
  features: [
    'Modular Microservices Architecture supporting 100k+ CCU',
    'Integrated Provably Fair cryptographic verification algorithm',
    'Zero-latency WebSockets with state synchronization',
    'Custom dynamic theme engine with gold/purple royal presets',
    'Unified payments: Visa, Mastercard, Bitcoin, Ethereum, USDT',
    'Comprehensive compliance audit logs & GLI-compliant reporting'
  ],
  badge: 'FLAGSHIP PLATFORM',
  rating: 4.99,
  salesCount: '320+ Operators',
  techStack: [
    'React / Next.js',
    'Node.js',
    'MongoDB',
    'Tailwind CSS',
    'TypeScript',
    'WebSocket',
    'Docker',
    'AWS / VPS'
  ],
  highlights: [
    'Full Commercial License & Source Code Included',
    'Lifetime Security Patches & Version Updates',
    'Dedicated 24/7 DevOps Support & Deployment Team',
    '30-Day Money Back Deployment Guarantee'
  ]
};
