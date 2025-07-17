// Import wallet logos

import phantomLogo from '@/assets/image/phantom.webp';
import solflareLogo from '@/assets/image/solflare.webp';
import backpackLogo from '@/assets/image/backpack.webp';
import jupiterLogo from '@/assets/image/jupiter-ag-jup-logo.png';
import bitgetLogo from '@/assets/image/bitget.webp';
import binanceLogo from '@/assets/image/binance.webp';
import crossmintLogo from '@/assets/image/crossmint.webp';
import decafLogo from '@/assets/image/decaf.webp';
import exodusLogo from '@/assets/image/exodus.webp';
import gemLogo from '@/assets/image/gem.webp';
import guardaLogo from '@/assets/image/guarda.webp';
import keystoneLogo from '@/assets/image/keystone.webp';
import ledgerLogo from '@/assets/image/ledger.webp';
import nowwalletLogo from '@/assets/image/nowwallet.webp';
import privyLogo from '@/assets/image/privy.webp';
import tiplinkLogo from '@/assets/image/tiplink.webp';
import tokenpocketLogo from '@/assets/image/tokenpocket.webp';
import trustwalletLogo from '@/assets/image/trustwalletcore.webp';
import dynamicLogo from '@/assets/image/dynamic.webp';

export interface Wallet {
  id: string;
  name: string;
  logo: string;
  platforms: ('web' | 'mobile' | 'desktop' | 'browser-extension' | 'hardware')[];
  custodyModel: 'self-custody' | 'MPC' | 'custodial';
  fiatOnRamp: boolean;
  fiatOffRamp: boolean;
  pushNotifications: boolean;
  solanaPayQR: 'yes' | 'partial' | 'no';
  version: string;
  testDate: string;
  description: string;
  website: string;
  downloadLinks: {
    web?: string;
    mobile?: string;
    desktop?: string;
    browserExtension?: string;
    hardware?: string;
  };
  features: string[];
  additionalNotes?: string;
}

export const wallets: Wallet[] = [
  {
    id: 'phantom',
    name: 'Phantom',
    logo: phantomLogo, // You'll need to add this logo
    platforms: ['web', 'mobile', 'browser-extension'],
    custodyModel: 'self-custody',
    fiatOnRamp: true,
    fiatOffRamp: true,
    pushNotifications: true,
    solanaPayQR: 'yes',
    version: '24.20.0', // Latest version as of search
    testDate: '2024-01-25',
    description: 'Phantom is one of the most popular Solana wallets with multi-chain support. It offers a seamless user experience with support for multiple blockchains in one wallet. Phantom is known for its intuitive interface, robust security features, and excellent Solana ecosystem integration.',
    website: 'https://phantom.app',
    downloadLinks: {
      web: 'https://phantom.app',
      mobile: 'https://phantom.app/download',
      browserExtension: 'https://phantom.app/download'
    },
    features: ['Multi-Chain Support', 'NFT Gallery', 'DeFi Integration', 'Staking', 'Swap Functionality', 'Hardware Wallet Support', 'dApp Browser', 'Transaction History', 'Security Features', 'Developer APIs'],
    additionalNotes: 'Excellent Solana Pay QR implementation with seamless multi-chain experience. One of the most trusted wallets in the Solana ecosystem.'
  },
  
  {
    id: 'backpack',
    name: 'Backpack',
    logo: backpackLogo,
    platforms: ['web', 'mobile', 'browser-extension'],
    custodyModel: 'self-custody',
    fiatOnRamp: true,
    fiatOffRamp: true,
    pushNotifications: true,
    solanaPayQR: 'yes',
    version: '0.6.0',
    testDate: '2024-01-25',
    description: 'Backpack is a modern wallet and exchange platform that offers seamless trading, managing, and securing of cryptocurrency assets. Built with a focus on user experience and security, Backpack provides integrated trading features alongside wallet functionality.',
    website: 'https://backpack.app',
    downloadLinks: {
      web: 'https://backpack.app',
      mobile: 'https://backpack.app/download',
      browserExtension: 'https://backpack.app/download'
    },
    features: ['Integrated Exchange', 'Trading Features', 'Portfolio Management', 'Security Features', 'Multi-Asset Support', 'NFT Support', 'DeFi Access', 'Staking', 'Advanced Analytics', 'Developer Tools'],
    additionalNotes: 'Robust platform combining wallet and exchange features with good Solana Pay support. Popular among traders and DeFi users.'
  },
  {
  id: 'jupiter-mobile',
  name: 'Jupiter Mobile',
  logo: jupiterLogo,
  platforms: ['web', 'mobile'],
  custodyModel: 'self-custody',
  fiatOnRamp: true,
  fiatOffRamp: false,
  pushNotifications: true,
  solanaPayQR: 'yes',
  version: '1.0.0',
  testDate: '2024-10-01',
  description: 'Jupiter Mobile is the fastest wallet to explore Solana safely. Built by Jupiter Exchange (the #1 DeFi platform in crypto), this wallet offers breakthrough trading experience with the lowest fees and instant swaps for all Solana tokens. Features Magic Scan for scan-to-trade functionality and seamless FIAT to SOL onramp in 50 seconds.',
  website: 'https://jup.ag/mobile',
  downloadLinks: {
    web: 'https://jup.ag/mobile',
    mobile: 'https://jup.ag/mobile',
  },
  features: ['One-Tap Trading', 'Magic Scan', 'Instant Token Swap', 'Real-time Charts', 'DEX Screener', 'Organic Score Safety', 'Apple Pay Support', 'Google Pay Support', 'FIAT Onramp', 'dApp Browser', 'Jupiter DAO Governance', 'Jupuary Airdrops', 'Advanced Trading Features', 'Portfolio Management', 'Low Platform Fees', 'Ultra-Fast Performance'],
  additionalNotes: 'Mobile-first wallet from Jupiter Exchange with focus on DeFi trading. Offers 10x cheaper trading than other wallets with breakthrough Magic Scan feature and fastest FIAT onramp. Excellent for Solana DeFi traders and general users seeking premium trading experience.'
},
  {
    id: 'dynamic',
    name: 'Dynamic',
    logo: dynamicLogo,
    platforms: ['web', 'mobile'],
    custodyModel: 'self-custody',
    fiatOnRamp: true,
    fiatOffRamp: false,
    pushNotifications: true,
    solanaPayQR: 'yes',
    version: '0.19.0',
    testDate: '2024-01-25',
    description: 'Dynamic offers a suite of tools for effortless login, wallet creation and user management. Designed for users and built for developers, it provides seamless wallet infrastructure.',
    website: 'https://dynamic.xyz',
    downloadLinks: {
      web: 'https://dynamic.xyz',
      mobile: 'https://dynamic.xyz/products'
    },
    features: ['Easy Login', 'Wallet Creation', 'User Management', 'Developer Tools', 'Multi-Chain Support', 'Social Login', 'Embedded Wallets', 'SDK Available', 'Authentication', 'Infrastructure'],
    additionalNotes: 'Developer-focused infrastructure with excellent Solana Pay support. Perfect for building user-friendly web3 applications.'
  },
  {
    id: 'solflare',
    name: 'Solflare',
    logo: solflareLogo,
    platforms: ['web', 'mobile', 'browser-extension'],
    custodyModel: 'self-custody',
    fiatOnRamp: true,
    fiatOffRamp: true,
    pushNotifications: true,
    solanaPayQR: 'yes',
    version: '1.90.0',
    testDate: '2024-07-15',
    description: 'Solflare is a powerful Solana-native wallet with advanced trading features, comprehensive DeFi access, and institutional-grade security. It offers limit orders, trend analysis, and complete portfolio management tools.',
    website: 'https://solflare.com',
    downloadLinks: {
      web: 'https://solflare.com',
      mobile: 'https://solflare.com/download',
      browserExtension: 'https://solflare.com/download'
    },
    features: ['Limit Orders', 'Trend Analysis', 'DeFi Dashboard', 'Staking Rewards', 'NFT Gallery', 'Hardware Wallet Support', 'Portfolio Tracking', 'Live Market Data', 'Custom Watchlists', 'Advanced Security'],
    additionalNotes: 'Native Solana Pay support with professional trading features. Preferred by advanced users and DeFi enthusiasts.'
  },
  {
    id: 'bitget',
    name: 'Bitget Wallet',
    logo: bitgetLogo,
    platforms: ['mobile', 'browser-extension'],
    custodyModel: 'self-custody',
    fiatOnRamp: true,
    fiatOffRamp: true,
    pushNotifications: true,
    solanaPayQR: 'partial',
    version: '8.15.0',
    testDate: '2024-07-15',
    description: 'Bitget Wallet is a Web3 trading wallet offering faster trading and better assets. It provides comprehensive DeFi access with advanced trading features.',
    website: 'https://web3.bitget.com',
    downloadLinks: {
      mobile: 'https://web3.bitget.com/download',
      browserExtension: 'https://web3.bitget.com/download'
    },
    features: ['Trading Focus', 'DeFi Integration', 'Multi-Chain Support', 'Advanced Trading', 'Portfolio Management', 'Market Analytics', 'Social Trading', 'NFT Marketplace', 'Staking Rewards', 'Copy Trading'],
    additionalNotes: 'QR scanner available but not specifically optimized for Solana Pay. Focus on professional trading features.'
  },
  {
    id: 'exodus',
    name: 'Exodus',
    logo: exodusLogo,
    platforms: ['web', 'mobile', 'desktop'],
    custodyModel: 'self-custody',
    fiatOnRamp: true,
    fiatOffRamp: true,
    pushNotifications: true,
    solanaPayQR: 'yes',
    version: '24.8.1',
    testDate: '2024-01-20',
    description: 'Exodus is a popular multi-chain wallet with a highly user-friendly interface and attractive design. This wallet supports over 260 cryptocurrencies and provides comprehensive portfolio tracking features, built-in exchange, and staking rewards. Exodus is renowned for its ease of use and is suitable for both beginners and advanced users.',
    website: 'https://www.exodus.com',
    downloadLinks: {
      web: 'https://www.exodus.com/web3-wallet',
      mobile: 'https://www.exodus.com/download',
      desktop: 'https://www.exodus.com/download'
    },
    features: ['Multi-chain Support', 'Built-in Exchange', 'Portfolio Tracking', 'Staking Rewards', 'NFT Support', 'Hardware Wallet Integration', 'Sync Across Devices', 'Advanced Charting', 'News & Insights', 'Custom Themes'],
    additionalNotes: 'Solid Solana Pay support with easily accessible QR scanner. Seamless synchronization between desktop and mobile for optimal multi-device experience.'
  },
  {
    id: 'gem',
    name: 'Gem Wallet',
    logo: gemLogo,
    platforms: ['mobile'],
    custodyModel: 'self-custody',
    fiatOnRamp: true,
    fiatOffRamp: false,
    pushNotifications: true,
    solanaPayQR: 'yes',
    version: '3.2.1',
    testDate: '2024-01-18',
    description: 'Gem Wallet is a mobile wallet that focuses on simplicity and enterprise-level security. Developed with cutting-edge technology, Gem offers a smooth experience with biometric authentication, encrypted backup, and secure recovery features. This wallet is perfect for users who prioritize security without sacrificing user experience.',
    website: 'https://gemwallet.com',
    downloadLinks: {
      mobile: 'https://gemwallet.com/download'
    },
    features: ['Biometric Security', 'Encrypted Backup', 'Multi-Asset Support', 'DeFi Integration', 'Price Alerts', 'Transaction History', 'Secure Recovery', 'Dark Mode', 'Fingerprint Lock', 'Face ID Support'],
    additionalNotes: 'Responsive QR scanner with clean Solana Pay implementation. Primary focus on mobile security and premium user experience.'
  },
  {
    id: 'guarda',
    name: 'Guarda Wallet',
    logo: guardaLogo,
    platforms: ['web', 'mobile', 'desktop', 'browser-extension'],
    custodyModel: 'self-custody',
    fiatOnRamp: true,
    fiatOffRamp: true,
    pushNotifications: true,
    solanaPayQR: 'partial',
    version: '2.15.3',
    testDate: '2024-01-16',
    description: 'Guarda is a multi-currency wallet that supports over 10,000 tokens and 50+ blockchains. This wallet offers a comprehensive solution for crypto management with built-in exchange, staking, and fiat gateway features. Guarda also provides white-label solutions for businesses and has a solid security track record.',
    website: 'https://guarda.com',
    downloadLinks: {
      web: 'https://guarda.com/wallet',
      mobile: 'https://guarda.com/download',
      desktop: 'https://guarda.com/download',
      browserExtension: 'https://guarda.com/download'
    },
    features: ['Multi-Currency Support', 'Built-in Exchange', 'Staking Pool', 'Fiat Gateway', 'White-Label Solutions', 'API Access', 'Business Tools', 'Cold Storage', 'Multi-Signature', 'Backup & Recovery'],
    additionalNotes: 'QR support available but not specifically optimized for Solana Pay. More focused on multi-chain ecosystem and enterprise solutions.'
  },
  {
    id: 'trustwallet',
    name: 'Trust Wallet',
    logo: trustwalletLogo,
    platforms: ['mobile', 'browser-extension'],
    custodyModel: 'self-custody',
    fiatOnRamp: true,
    fiatOffRamp: true,
    pushNotifications: true,
    solanaPayQR: 'partial',
    version: '8.15',
    testDate: '2024-01-14',
    description: 'Trust Wallet is one of the most popular mobile wallets in the world, developed by Binance. This wallet supports over 100 blockchains and 4.5 million assets with a focus on security and ease of use. Trust Wallet offers access to DeFi, NFT marketplaces, and Web3 apps with an intuitive interface.',
    website: 'https://trustwallet.com',
    downloadLinks: {
      mobile: 'https://trustwallet.com/download',
      browserExtension: 'https://trustwallet.com/browser-extension'
    },
    features: ['Multi-Chain Support', 'DeFi Integration', 'NFT Marketplace', 'Web3 Browser', 'Staking Rewards', 'Hardware Wallet Support', 'WalletConnect', 'Cross-Chain Bridge', 'Portfolio Tracking', 'Security Center'],
    additionalNotes: 'QR scanner available but not specifically optimized for Solana Pay. Focus on multi-chain ecosystem and mass adoption.'
  },
  {
    id: 'tiplink',
    name: 'TipLink',
    logo: tiplinkLogo,
    platforms: ['web', 'mobile'],
    custodyModel: 'self-custody',
    fiatOnRamp: false,
    fiatOffRamp: false,
    pushNotifications: false,
    solanaPayQR: 'yes',
    version: '2.1.0',
    testDate: '2024-01-12',
    description: 'TipLink is an innovative and revolutionary wallet with the concept of "wallet as a link". Users can send cryptocurrency to anyone just by sharing a link, even to people who don\'t have a crypto wallet yet. TipLink enables very easy onboarding to the crypto world and is perfect for use cases like tipping, gifts, and mass distribution.',
    website: 'https://tiplink.io',
    downloadLinks: {
      web: 'https://tiplink.io',
      mobile: 'https://tiplink.io/download'
    },
    features: ['Link-based Wallets', 'Easy Onboarding', 'Mass Distribution', 'Gift Cards', 'Tipping System', 'No Registration Required', 'Instant Claims', 'Social Sharing', 'Batch Sending', 'Custom Branding'],
    additionalNotes: 'Unique Solana Pay implementation with focus on easy sharing and claiming. Perfect for micropayments and mass adoption use cases.'
  },
  {
    id: 'tokenpocket',
    name: 'TokenPocket',
    logo: tokenpocketLogo,
    platforms: ['mobile', 'browser-extension'],
    custodyModel: 'self-custody',
    fiatOnRamp: true,
    fiatOffRamp: true,
    pushNotifications: true,
    solanaPayQR: 'partial',
    version: '1.6.8',
    testDate: '2024-01-10',
    description: 'TokenPocket is a comprehensive multi-chain wallet with support for over 100 blockchains. This wallet offers a complete ecosystem with built-in DEX, DeFi tools, NFT marketplace, and gaming hub. TokenPocket also features social trading and advanced portfolio management capabilities.',
    website: 'https://tokenpocket.pro',
    downloadLinks: {
      mobile: 'https://tokenpocket.pro/download',
      browserExtension: 'https://tokenpocket.pro/download'
    },
    features: ['Multi-Chain DEX', 'DeFi Dashboard', 'NFT Marketplace', 'Gaming Hub', 'Social Trading', 'Portfolio Management', 'Yield Farming', 'Lending Protocol', 'Cross-Chain Bridge', 'Market Analytics'],
    additionalNotes: 'QR scanner available but not specifically optimized for Solana Pay. Focus on DeFi ecosystem and gaming applications.'
  },
  {
    id: 'binance',
    name: 'Binance Web3 Wallet',
    logo: binanceLogo,
    platforms: ['mobile', 'browser-extension'],
    custodyModel: 'self-custody',
    fiatOnRamp: true,
    fiatOffRamp: true,
    pushNotifications: true,
    solanaPayQR: 'no',
    version: '2.8.0',
    testDate: '2024-01-08',
    description: 'Binance Web3 Wallet is a gateway to the Web3 ecosystem developed by Binance, the world\'s largest crypto exchange. This wallet is integrated with the Binance ecosystem, offering access to trading, DeFi, NFT marketplaces, and various crypto services. Backed by Binance, this wallet provides high liquidity and security.',
    website: 'https://www.binance.com/web3wallet',
    downloadLinks: {
      mobile: 'https://www.binance.com/download',
      browserExtension: 'https://www.binance.com/web3wallet'
    },
    features: ['Binance Integration', 'Spot Trading', 'Futures Trading', 'DeFi Access', 'NFT Marketplace', 'Launchpad Access', 'Earn Products', 'Copy Trading', 'Institutional Services', 'Advanced Analytics'],
    additionalNotes: 'No specific implementation found for Solana Pay QR. Focus on Binance ecosystem integration and trading features.'
  },
  {
    id: 'crossmint',
    name: 'Crossmint',
    logo: crossmintLogo,
    platforms: ['web', 'mobile'],
    custodyModel: 'custodial',
    fiatOnRamp: true,
    fiatOffRamp: true,
    pushNotifications: true,
    solanaPayQR: 'yes',
    version: '1.4.2',
    testDate: '2024-01-06',
    description: 'Crossmint is a wallet that focuses on enterprise solutions and mass adoption with both custodial and non-custodial options. This wallet offers infrastructure for businesses looking to integrate crypto payments and NFT functionality. Crossmint also provides powerful APIs for developers.',
    website: 'https://crossmint.com',
    downloadLinks: {
      web: 'https://crossmint.com/wallet',
      mobile: 'https://crossmint.com/download'
    },
    features: ['Enterprise Solutions', 'API Integration', 'Mass Adoption Tools', 'Custodial Options', 'Developer APIs', 'Business Dashboard', 'Bulk Operations', 'Compliance Tools', 'White-Label Solutions', 'Payment Processing'],
    additionalNotes: 'Robust Solana Pay implementation with focus on enterprise use cases. Perfect for businesses looking to integrate crypto payments.'
  },
  {
    id: 'decaf',
    name: 'Decaf Wallet',
    logo: decafLogo,
    platforms: ['mobile'],
    custodyModel: 'self-custody',
    fiatOnRamp: false,
    fiatOffRamp: false,
    pushNotifications: true,
    solanaPayQR: 'yes',
    version: '1.1.3',
    testDate: '2024-01-04',
    description: 'Decaf is a minimalist mobile wallet with a focus on privacy and security. This wallet offers a clean and simple experience without sacrificing important features. Decaf is perfect for users who want a reliable and easy-to-use wallet with a small footprint.',
    website: 'https://decaf.so',
    downloadLinks: {
      mobile: 'https://decaf.so/download'
    },
    features: ['Privacy Focus', 'Minimal Design', 'Fast Transactions', 'Secure Storage', 'Biometric Lock', 'Backup & Recovery', 'Transaction History', 'Network Selection', 'Fee Optimization', 'Offline Support'],
    additionalNotes: 'Simple and effective QR scanner for Solana Pay. Focus on minimalist yet powerful user experience.'
  },
  {
    id: 'nowwallet',
    name: 'NOW Wallet',
    logo: nowwalletLogo,
    platforms: ['mobile', 'web'],
    custodyModel: 'self-custody',
    fiatOnRamp: true,
    fiatOffRamp: true,
    pushNotifications: true,
    solanaPayQR: 'partial',
    version: '3.1.5',
    testDate: '2024-01-02',
    description: 'NOW Wallet is a wallet that focuses on ease of use and instant transactions. This wallet offers an intuitive interface with advanced features like instant swap, portfolio tracking, and market analytics. NOW Wallet is perfect for users who want a smooth trading experience.',
    website: 'https://walletnow.app',
    downloadLinks: {
      mobile: 'https://walletnow.app/download',
      web: 'https://walletnow.app'
    },
    features: ['Instant Swap', 'Portfolio Tracking', 'Market Analytics', 'Price Alerts', 'Multi-Asset Support', 'Real-time Charts', 'News Feed', 'Social Features', 'Yield Tracking', 'Tax Reporting'],
    additionalNotes: 'QR scanner available but not specifically optimized for Solana Pay. Focus on instant transactions and trading experience.'
  },
  {
    id: 'ledger',
    name: 'Ledger Live',
    logo: ledgerLogo,
    platforms: ['desktop', 'mobile'],
    custodyModel: 'self-custody',
    fiatOnRamp: true,
    fiatOffRamp: true,
    pushNotifications: true,
    solanaPayQR: 'no',
    version: '2.73.1',
    testDate: '2024-01-01',
    description: 'Ledger Live is a software wallet developed by Ledger, the leading hardware wallet manufacturer. This wallet offers enterprise-level security with seamless hardware wallet integration. Ledger Live supports over 5,500 crypto assets and provides comprehensive portfolio management features.',
    website: 'https://www.ledger.com/ledger-live',
    downloadLinks: {
      desktop: 'https://www.ledger.com/ledger-live/download',
      mobile: 'https://www.ledger.com/ledger-live/download'
    },
    features: ['Hardware Integration', 'Enterprise Security', 'Portfolio Management', 'Staking Services', 'DeFi Access', 'NFT Support', 'Market Data', 'Tax Reporting', 'Institutional Features', 'Cold Storage'],
    additionalNotes: 'Focus on hardware wallet integration and enterprise security. No specific implementation for Solana Pay QR scanning.'
  },
  {
    id: 'keystone',
    name: 'Keystone',
    logo: keystoneLogo,
    platforms: ['hardware', 'mobile'],
    custodyModel: 'self-custody',
    fiatOnRamp: false,
    fiatOffRamp: false,
    pushNotifications: false,
    solanaPayQR: 'partial',
    version: '1.8.0',
    testDate: '2023-12-30',
    description: 'Keystone is a hardware wallet that offers air-gapped security for crypto assets. This wallet uses QR codes for communication with software wallets, providing high security without internet connection. Keystone is perfect for users who prioritize security and cold storage.',
    website: 'https://keyst.one',
    downloadLinks: {
      hardware: 'https://keyst.one/products',
      mobile: 'https://keyst.one/download'
    },
    features: ['Air-Gapped Security', 'QR Communication', 'Multi-Signature', 'Cold Storage', 'Open Source', 'Multi-Coin Support', 'Secure Element', 'Backup & Recovery', 'Firmware Updates', 'Developer APIs'],
    additionalNotes: 'Uses QR codes for communication but not specifically for Solana Pay. Focus on air-gapped security and hardware-based protection.'
  },
  {
    id: 'privy',
    name: 'Privy',
    logo: privyLogo,
    platforms: ['web', 'mobile'],
    custodyModel: 'self-custody',
    fiatOnRamp: true,
    fiatOffRamp: false,
    pushNotifications: true,
    solanaPayQR: 'yes',
    version: '1.2.8',
    testDate: '2023-12-28',
    description: 'Privy is a wallet that focuses on developer experience and easy integration. This wallet offers a powerful SDK for developers who want to integrate crypto functionality into their applications. Privy also provides seamless authentication and wallet management.',
    website: 'https://privy.io',
    downloadLinks: {
      web: 'https://privy.io/wallet',
      mobile: 'https://privy.io/download'
    },
    features: ['Developer SDK', 'Easy Integration', 'Authentication', 'Wallet Management', 'Social Login', 'Embedded Wallets', 'Multi-Chain Support', 'API Access', 'Custom Branding', 'White-Label Solutions'],
    additionalNotes: 'Developer-friendly QR scanner with focus on easy integration. Perfect for developers looking to integrate Solana Pay into their applications.'
  },
  {
    id: 'guarda',
    name: 'Guarda Wallet',
    logo: guardaLogo,
    platforms: ['web', 'mobile', 'desktop', 'browser-extension'],
    custodyModel: 'self-custody',
    fiatOnRamp: true,
    fiatOffRamp: true,
    pushNotifications: true,
    solanaPayQR: 'partial',
    version: '2.15.3',
    testDate: '2024-01-16',
    description: 'Guarda is a multi-currency wallet that supports over 10,000 tokens and 50+ blockchains. This wallet offers a comprehensive solution for crypto management with built-in exchange, staking, and fiat gateway features. Guarda also provides white-label solutions for businesses and has a solid security track record.',
    website: 'https://guarda.com',
    downloadLinks: {
      web: 'https://guarda.com/wallet',
      mobile: 'https://guarda.com/download',
      desktop: 'https://guarda.com/download',
      browserExtension: 'https://guarda.com/download'
    },
    features: ['Multi-Currency Support', 'Built-in Exchange', 'Staking Pool', 'Fiat Gateway', 'White-Label Solutions', 'API Access', 'Business Tools', 'Cold Storage', 'Multi-Signature', 'Backup & Recovery'],
    additionalNotes: 'Dukungan QR tersedia namun tidak secara khusus dioptimalkan untuk Solana Pay. Lebih fokus pada multi-chain ecosystem dan enterprise solutions.'
  },
  {
    id: 'trustwallet',
    name: 'Trust Wallet',
    logo: trustwalletLogo,
    platforms: ['mobile', 'browser-extension'],
    custodyModel: 'self-custody',
    fiatOnRamp: true,
    fiatOffRamp: true,
    pushNotifications: true,
    solanaPayQR: 'partial',
    version: '8.15',
    testDate: '2024-01-14',
    description: 'Trust Wallet is one of the most popular mobile wallets in the world, developed by Binance. This wallet supports over 100 blockchains and 4.5 million assets with a focus on security and ease of use. Trust Wallet offers access to DeFi, NFT marketplaces, and Web3 apps with an intuitive interface.',
    website: 'https://trustwallet.com',
    downloadLinks: {
      mobile: 'https://trustwallet.com/download',
      browserExtension: 'https://trustwallet.com/browser-extension'
    },
    features: ['Multi-Chain Support', 'DeFi Integration', 'NFT Marketplace', 'Web3 Browser', 'Staking Rewards', 'Hardware Wallet Support', 'WalletConnect', 'Cross-Chain Bridge', 'Portfolio Tracking', 'Security Center'],
    additionalNotes: 'QR scanner tersedia namun tidak secara khusus dioptimalkan untuk Solana Pay. Fokus pada multi-chain ecosystem dan massa adoption.'
  },
  {
    id: 'tiplink',
    name: 'TipLink',
    logo: tiplinkLogo,
    platforms: ['web', 'mobile'],
    custodyModel: 'self-custody',
    fiatOnRamp: false,
    fiatOffRamp: false,
    pushNotifications: false,
    solanaPayQR: 'yes',
    version: '2.1.0',
    testDate: '2024-01-12',
    description: 'TipLink is an innovative and revolutionary wallet with the concept of "wallet as a link". Users can send cryptocurrency to anyone just by sharing a link, even to people who don\'t have a crypto wallet yet. TipLink enables very easy onboarding to the crypto world and is perfect for use cases like tipping, gifts, and mass distribution.',
    website: 'https://tiplink.io',
    downloadLinks: {
      web: 'https://tiplink.io',
      mobile: 'https://tiplink.io/download'
    },
    features: ['Link-based Wallets', 'Easy Onboarding', 'Mass Distribution', 'Gift Cards', 'Tipping System', 'No Registration Required', 'Instant Claims', 'Social Sharing', 'Batch Sending', 'Custom Branding'],
    additionalNotes: 'Implementasi Solana Pay yang unik dengan fokus pada kemudahan sharing dan claiming. Sangat cocok untuk use case micropayments dan mass adoption.'
  },
  {
    id: 'tokenpocket',
    name: 'TokenPocket',
    logo: tokenpocketLogo,
    platforms: ['mobile', 'browser-extension'],
    custodyModel: 'self-custody',
    fiatOnRamp: true,
    fiatOffRamp: true,
    pushNotifications: true,
    solanaPayQR: 'partial',
    version: '1.6.8',
    testDate: '2024-01-10',
    description: 'TokenPocket is a comprehensive multi-chain wallet with support for over 100 blockchains. This wallet offers a complete ecosystem with built-in DEX, DeFi tools, NFT marketplace, and gaming hub. TokenPocket also features social trading and advanced portfolio management capabilities.',
    website: 'https://tokenpocket.pro',
    downloadLinks: {
      mobile: 'https://tokenpocket.pro/download',
      browserExtension: 'https://tokenpocket.pro/download'
    },
    features: ['Multi-Chain DEX', 'DeFi Dashboard', 'NFT Marketplace', 'Gaming Hub', 'Social Trading', 'Portfolio Management', 'Yield Farming', 'Lending Protocol', 'Cross-Chain Bridge', 'Market Analytics'],
    additionalNotes: 'QR scanner tersedia namun tidak secara khusus dioptimalkan untuk Solana Pay. Fokus pada DeFi ecosystem dan gaming applications.'
  },
  {
    id: 'binance',
    name: 'Binance Web3 Wallet',
    logo: binanceLogo,
    platforms: ['mobile', 'browser-extension'],
    custodyModel: 'self-custody',
    fiatOnRamp: true,
    fiatOffRamp: true,
    pushNotifications: true,
    solanaPayQR: 'no',
    version: '2.8.0',
    testDate: '2024-01-08',
    description: 'Binance Web3 Wallet is a gateway to the Web3 ecosystem developed by Binance, the world\'s largest crypto exchange. This wallet is integrated with the Binance ecosystem, offering access to trading, DeFi, NFT marketplaces, and various crypto services. Backed by Binance, this wallet provides high liquidity and security.',
    website: 'https://www.binance.com/web3wallet',
    downloadLinks: {
      mobile: 'https://www.binance.com/download',
      browserExtension: 'https://www.binance.com/web3wallet'
    },
    features: ['Binance Integration', 'Spot Trading', 'Futures Trading', 'DeFi Access', 'NFT Marketplace', 'Launchpad Access', 'Earn Products', 'Copy Trading', 'Institutional Services', 'Advanced Analytics'],
    additionalNotes: 'Tidak ditemukan implementasi khusus untuk Solana Pay QR. Fokus pada integrasi dengan Binance ecosystem dan trading features.'
  },
  {
    id: 'crossmint',
    name: 'Crossmint',
    logo: crossmintLogo,
    platforms: ['web', 'mobile'],
    custodyModel: 'custodial',
    fiatOnRamp: true,
    fiatOffRamp: true,
    pushNotifications: true,
    solanaPayQR: 'yes',
    version: '1.4.2',
    testDate: '2024-01-06',
    description: 'Crossmint is a wallet that focuses on enterprise solutions and mass adoption with both custodial and non-custodial options. This wallet offers infrastructure for businesses looking to integrate crypto payments and NFT functionality. Crossmint also provides powerful APIs for developers.',
    website: 'https://crossmint.com',
    downloadLinks: {
      web: 'https://crossmint.com/wallet',
      mobile: 'https://crossmint.com/download'
    },
    features: ['Enterprise Solutions', 'API Integration', 'Mass Adoption Tools', 'Custodial Options', 'Developer APIs', 'Business Dashboard', 'Bulk Operations', 'Compliance Tools', 'White-Label Solutions', 'Payment Processing'],
    additionalNotes: 'Implementasi Solana Pay yang robust dengan fokus pada enterprise use cases. Sangat cocok untuk businesses yang ingin mengintegrasikan crypto payments.'
  },
  {
    id: 'decaf',
    name: 'Decaf Wallet',
    logo: decafLogo,
    platforms: ['mobile'],
    custodyModel: 'self-custody',
    fiatOnRamp: false,
    fiatOffRamp: false,
    pushNotifications: true,
    solanaPayQR: 'yes',
    version: '1.1.3',
    testDate: '2024-01-04',
    description: 'Decaf is a minimalist mobile wallet with a focus on privacy and security. This wallet offers a clean and simple experience without sacrificing important features. Decaf is perfect for users who want a reliable and easy-to-use wallet with a small footprint.',
    website: 'https://decaf.so',
    downloadLinks: {
      mobile: 'https://decaf.so/download'
    },
    features: ['Privacy Focus', 'Minimal Design', 'Fast Transactions', 'Secure Storage', 'Biometric Lock', 'Backup & Recovery', 'Transaction History', 'Network Selection', 'Fee Optimization', 'Offline Support'],
    additionalNotes: 'QR scanner yang simpel dan efektif untuk Solana Pay. Fokus pada user experience yang minimalis namun powerful.'
  },
  {
    id: 'nowwallet',
    name: 'NOW Wallet',
    logo: nowwalletLogo,
    platforms: ['mobile', 'web'],
    custodyModel: 'self-custody',
    fiatOnRamp: true,
    fiatOffRamp: true,
    pushNotifications: true,
    solanaPayQR: 'partial',
    version: '3.1.5',
    testDate: '2024-01-02',
    description: 'NOW Wallet is a wallet that focuses on ease of use and instant transactions. This wallet offers an intuitive interface with advanced features like instant swap, portfolio tracking, and market analytics. NOW Wallet is perfect for users who want a smooth trading experience.',
    website: 'https://walletnow.app',
    downloadLinks: {
      mobile: 'https://walletnow.app/download',
      web: 'https://walletnow.app'
    },
    features: ['Instant Swap', 'Portfolio Tracking', 'Market Analytics', 'Price Alerts', 'Multi-Asset Support', 'Real-time Charts', 'News Feed', 'Social Features', 'Yield Tracking', 'Tax Reporting'],
    additionalNotes: 'QR scanner tersedia namun tidak secara khusus dioptimalkan untuk Solana Pay. Fokus pada instant transactions dan trading experience.'
  },
  {
    id: 'ledger',
    name: 'Ledger Live',
    logo: ledgerLogo,
    platforms: ['desktop', 'mobile'],
    custodyModel: 'self-custody',
    fiatOnRamp: true,
    fiatOffRamp: true,
    pushNotifications: true,
    solanaPayQR: 'no',
    version: '2.73.1',
    testDate: '2024-01-01',
    description: 'Ledger Live is a software wallet developed by Ledger, the leading hardware wallet manufacturer. This wallet offers enterprise-level security with seamless hardware wallet integration. Ledger Live supports over 5,500 crypto assets and provides comprehensive portfolio management features.',
    website: 'https://www.ledger.com/ledger-live',
    downloadLinks: {
      desktop: 'https://www.ledger.com/ledger-live/download',
      mobile: 'https://www.ledger.com/ledger-live/download'
    },
    features: ['Hardware Integration', 'Enterprise Security', 'Portfolio Management', 'Staking Services', 'DeFi Access', 'NFT Support', 'Market Data', 'Tax Reporting', 'Institutional Features', 'Cold Storage'],
    additionalNotes: 'Fokus pada hardware wallet integration dan enterprise security. Tidak memiliki implementasi khusus untuk Solana Pay QR scanning.'
  },
  {
    id: 'keystone',
    name: 'Keystone',
    logo: keystoneLogo,
    platforms: ['hardware', 'mobile'],
    custodyModel: 'self-custody',
    fiatOnRamp: false,
    fiatOffRamp: false,
    pushNotifications: false,
    solanaPayQR: 'partial',
    version: '1.8.0',
    testDate: '2023-12-30',
    description: 'Keystone is a hardware wallet that offers air-gapped security for crypto assets. This wallet uses QR codes for communication with software wallets, providing high security without internet connection. Keystone is perfect for users who prioritize security and cold storage.',
    website: 'https://keyst.one',
    downloadLinks: {
      hardware: 'https://keyst.one/products',
      mobile: 'https://keyst.one/download'
    },
    features: ['Air-Gapped Security', 'QR Communication', 'Multi-Signature', 'Cold Storage', 'Open Source', 'Multi-Coin Support', 'Secure Element', 'Backup & Recovery', 'Firmware Updates', 'Developer APIs'],
    additionalNotes: 'Menggunakan QR codes untuk komunikasi namun tidak secara khusus untuk Solana Pay. Fokus pada air-gapped security dan hardware-based protection.'
  },
  {
    id: 'privy',
    name: 'Privy',
    logo: privyLogo,
    platforms: ['web', 'mobile'],
    custodyModel: 'self-custody',
    fiatOnRamp: true,
    fiatOffRamp: false,
    pushNotifications: true,
    solanaPayQR: 'yes',
    version: '1.2.8',
    testDate: '2023-12-28',
    description: 'Privy is a wallet that focuses on developer experience and easy integration. This wallet offers a powerful SDK for developers who want to integrate crypto functionality into their applications. Privy also provides seamless authentication and wallet management.',
    website: 'https://privy.io',
    downloadLinks: {
      web: 'https://privy.io/wallet',
      mobile: 'https://privy.io/download'
    },
    features: ['Developer SDK', 'Easy Integration', 'Authentication', 'Wallet Management', 'Social Login', 'Embedded Wallets', 'Multi-Chain Support', 'API Access', 'Custom Branding', 'White-Label Solutions'],
    additionalNotes: 'QR scanner yang developer-friendly dengan fokus pada easy integration. Sangat cocok untuk developers yang ingin mengintegrasikan Solana Pay ke dalam aplikasi mereka.'
  }
];

export const getCustodyModelColor = (model: Wallet['custodyModel']) => {
  switch (model) {
    case 'self-custody':
      return 'bg-success text-success-foreground';
    case 'MPC':
      return 'bg-warning text-warning-foreground';
    case 'custodial':
      return 'bg-destructive text-destructive-foreground';
    default:
      return 'bg-muted text-muted-foreground';
  }
};

export const getSolanaPayColor = (support: Wallet['solanaPayQR']) => {
  switch (support) {
    case 'yes':
      return 'bg-success text-success-foreground';
    case 'partial':
      return 'bg-warning text-warning-foreground';
    case 'no':
      return 'bg-destructive text-destructive-foreground';
    default:
      return 'bg-muted text-muted-foreground';
  }
};