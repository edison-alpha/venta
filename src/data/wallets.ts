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
import trezorLogo from '@/assets/image/trezor.png';
import heliumLogo from '@/assets/image/helium.webp';
import glowLogo from '@/assets/image/glow.webp';
import fuseLogo from '@/assets/image/fuse.webp';
import circleLogo from '@/assets/image/circle.webp';
import enkryptLogo from '@/assets/image/enkrypt.webp';
import okxLogo from '@/assets/image/okx-logo.png';
import cdpLogo from '@/assets/image/cdp.webp';
import walletconnectLogo from '@/assets/image/walletconnect.webp';
import turnkeyLogo from '@/assets/image/turnkey.webp';
import coinwalletLogo from '@/assets/image/coinwallet.webp';
import web3authLogo from '@/assets/image/web3auth.webp';
import braveLogo from '@/assets/image/brave.webp';
import slopeLogo from '@/assets/image/slope.png';
import coinbaseLogo from '@/assets/image/coinbase.png';
import atomicLogo from '@/assets/image/atomic.png';
import metamaskLogo from '@/assets/image/metamask.png';
import robinhoodLogo from '@/assets/image/robinhood.webp';

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
  inAppDexSwap: boolean;
  nftGallery: boolean;
  inAppStaking: boolean;
}

export const wallets: Wallet[] = [
  {
    id: "phantom",
    name: "Phantom",
    logo: phantomLogo,
    platforms: ["web", "mobile", "browser-extension"],
    custodyModel: "self-custody",
    inAppDexSwap: true,
    nftGallery: true,
    inAppStaking: true,
    fiatOnRamp: true,
    fiatOffRamp: true,
    pushNotifications: true,
    solanaPayQR: "yes",
    version: "25.25.0",
    testDate: "2025-07-17",
    description: "Phantom is one of the most popular Solana wallets with multi-chain support. It offers a seamless user experience with support for multiple blockchains in one wallet. Phantom is known for its intuitive interface, robust security features, and excellent Solana ecosystem integration.",
    website: "https://phantom.app",
    downloadLinks: {
      web: "https://phantom.app",
      mobile: "https://phantom.app/download",
      browserExtension: "https://phantom.app/download"
    },
    features: ["Multi-Chain Support", "NFT Gallery", "DeFi Integration", "Staking", "Swap Functionality", "Hardware Wallet Support", "dApp Browser", "Transaction History", "Security Features", "Developer APIs"],
    additionalNotes: "Excellent Solana Pay QR implementation with seamless multi-chain experience. One of the most trusted wallets in the Solana ecosystem."
  },
  {
    id: "backpack",
    name: "Backpack",
    logo: backpackLogo,
    platforms: ["mobile", "browser-extension"],
    custodyModel: "self-custody",
    inAppDexSwap: true,
    nftGallery: true,
    inAppStaking: true,
    fiatOnRamp: true,
    fiatOffRamp: true,
    pushNotifications: true,
    solanaPayQR: "yes",
    version: "2.45.0",
    testDate: "2025-07-17",
    description: "Backpack is a modern wallet and exchange platform that offers seamless trading, managing, and securing of cryptocurrency assets. Built with a focus on user experience and security, Backpack provides integrated trading features alongside wallet functionality.",
    website: "https://backpack.app",
    downloadLinks: {
      mobile: "https://backpack.app/download",
      browserExtension: "https://backpack.app/download"
    },
    features: ["Integrated Exchange", "Trading Features", "Portfolio Management", "Security Features", "Multi-Asset Support", "NFT Support", "DeFi Access", "Staking", "Advanced Analytics", "Developer Tools"],
    additionalNotes: "Robust platform combining wallet and exchange features with good Solana Pay support. Popular among traders and DeFi users."
  },
  {
    id: "jupitermobile",
    name: "Jupiter Mobile",
    logo: jupiterLogo,
    platforms: ["mobile"],
    custodyModel: "self-custody",
    inAppDexSwap: true,
    nftGallery: true,
    inAppStaking: true,
    fiatOnRamp: true,
    fiatOffRamp: false,
    pushNotifications: true,
    solanaPayQR: "yes",
    version: "1.41.0",
    testDate: "2025-07-17",
    description: "Jupiter Mobile is the fastest wallet to explore Solana safely. Built by Jupiter Exchange, it offers a breakthrough trading experience with low fees and instant swaps for all Solana tokens.",
    website: "https://jup.ag/mobile",
    downloadLinks: {
      mobile: "https://jup.ag/mobile"
    },
    features: ["One-Tap Trading", "Magic Scan", "Instant Token Swap", "Real-time Charts", "DEX Screener", "Organic Score Safety", "Apple Pay Support", "Google Pay Support", "FIAT Onramp", "dApp Browser", "Jupiter DAO Governance", "Jupuary Airdrops", "Advanced Trading Features", "Portfolio Management", "Low Platform Fees", "Ultra-Fast Performance"],
    additionalNotes: "Mobile-first wallet from Jupiter Exchange with focus on DeFi trading. Offers 10x cheaper trading than other wallets with breakthrough Magic Scan feature and fastest FIAT onramp."
  },
  {
    id: "solflare",
    name: "Solflare",
    logo: solflareLogo,
    platforms: ["web", "mobile", "browser-extension"],
    custodyModel: "self-custody",
    inAppDexSwap: true,
    nftGallery: true,
    inAppStaking: true,
    fiatOnRamp: true,
    fiatOffRamp: true,
    pushNotifications: true,
    solanaPayQR: "yes",
    version: "1.90.0",
    testDate: "2025-07-17",
    description: "Solflare is a powerful Solana-native wallet with advanced trading features, comprehensive DeFi access, and institutional-grade security. It offers limit orders, trend analysis, and complete portfolio management tools.",
    website: "https://solflare.com",
    downloadLinks: {
      web: "https://solflare.com",
      mobile: "https://solflare.com/download",
      browserExtension: "https://solflare.com/download"
    },
    features: ["Limit Orders", "Trend Analysis", "DeFi Dashboard", "Staking Rewards", "NFT Gallery", "Hardware Wallet Support", "Portfolio Tracking", "Live Market Data", "Custom Watchlists", "Advanced Security"],
    additionalNotes: "Native Solana Pay support with professional trading features. Preferred by advanced users and DeFi enthusiasts."
  },
  {
    id: "bitget",
    name: "Bitget Wallet",
    logo: bitgetLogo,
    platforms: ["mobile", "browser-extension"],
    custodyModel: "self-custody",
    inAppDexSwap: true,
    nftGallery: true,
    inAppStaking: true,
    fiatOnRamp: true,
    fiatOffRamp: true,
    pushNotifications: true,
    solanaPayQR: "partial",
    version: "9.6.0",
    testDate: "2025-07-17",
    description: "Bitget Wallet is a Web3 trading wallet offering faster trading and better assets. It provides comprehensive DeFi access with advanced trading features.",
    website: "https://web3.bitget.com",
    downloadLinks: {
      mobile: "https://web3.bitget.com/download",
      browserExtension: "https://web3.bitget.com/download"
    },
    features: ["Trading Focus", "DeFi Integration", "Multi-Chain Support", "Advanced Trading", "Portfolio Management", "Market Analytics", "Social Trading", "NFT Marketplace", "Staking Rewards", "Copy Trading"],
    additionalNotes: "QR scanner available but not specifically optimized for Solana Pay. Focus on professional trading features."
  },
  {
    id: "exodus",
    name: "Exodus",
    logo: exodusLogo,
    platforms: ["web", "mobile", "desktop"],
    custodyModel: "self-custody",
    inAppDexSwap: true,
    nftGallery: true,
    inAppStaking: true,
    fiatOnRamp: true,
    fiatOffRamp: true,
    pushNotifications: true,
    solanaPayQR: "yes",
    version: "25.28.4",
    testDate: "2025-07-17",
    description: "Exodus is a popular multi-chain wallet with a highly user-friendly interface and attractive design. It supports over 260 cryptocurrencies and provides comprehensive portfolio tracking features, built-in exchange, and staking rewards.",
    website: "https://www.exodus.com",
    downloadLinks: {
      web: "https://www.exodus.com/web3-wallet",
      mobile: "https://www.exodus.com/download",
      desktop: "https://www.exodus.com/download"
    },
    features: ["Multi-chain Support", "Built-in Exchange", "Portfolio Tracking", "Staking Rewards", "NFT Support", "Hardware Wallet Integration", "Sync Across Devices", "Advanced Charting", "News & Insights", "Custom Themes"],
    additionalNotes: "Solid Solana Pay support with easily accessible QR scanner. Seamless synchronization between desktop and mobile for optimal multi-device experience."
  },
  {
    id: "gemwallet",
    name: "Gem Wallet",
    logo: gemLogo,
    platforms: ["mobile"],
    custodyModel: "self-custody",
    inAppDexSwap: true,
    nftGallery: true,
    inAppStaking: false,
    fiatOnRamp: true,
    fiatOffRamp: false,
    pushNotifications: true,
    solanaPayQR: "yes",
    version: "1.3.195",
    testDate: "2025-07-17",
    description: "Gem Wallet is a mobile wallet that focuses on simplicity and enterprise-level security. Developed with cutting-edge technology, Gem offers a smooth experience with biometric authentication, encrypted backup, and secure recovery features.",
    website: "https://gemwallet.com",
    downloadLinks: {
      mobile: "https://gemwallet.com/download"
    },
    features: ["Biometric Security", "Encrypted Backup", "Multi-Asset Support", "DeFi Integration", "Price Alerts", "Transaction History", "Secure Recovery", "Dark Mode", "Fingerprint Lock", "Face ID Support"],
    additionalNotes: "Responsive QR scanner with clean Solana Pay implementation. Primary focus on mobile security and premium user experience."
  },
  {
    id: "guarda",
    name: "Guarda Wallet",
    logo: guardaLogo,
    platforms: ["web", "mobile", "desktop", "browser-extension"],
    custodyModel: "self-custody",
    inAppDexSwap: true,
    nftGallery: true,
    inAppStaking: false,
    fiatOnRamp: true,
    fiatOffRamp: true,
    pushNotifications: true,
    solanaPayQR: "partial",
    version: "3.0.65",
    testDate: "2025-07-17",
    description: "Guarda is a multi-currency wallet that supports over 10,000 tokens and 50+ blockchains. It offers a comprehensive solution for crypto management with built-in exchange, staking, and fiat gateway features.",
    website: "https://guarda.com",
    downloadLinks: {
      web: "https://guarda.com/wallet",
      mobile: "https://guarda.com/download",
      desktop: "https://guarda.com/download",
      browserExtension: "https://guarda.com/download"
    },
    features: ["Multi-Currency Support", "Built-in Exchange", "Staking Pool", "Fiat Gateway", "White-Label Solutions", "API Access", "Business Tools", "Cold Storage", "Multi-Signature", "Backup & Recovery"],
    additionalNotes: "QR support available but not specifically optimized for Solana Pay. More focused on multi-chain ecosystem and enterprise solutions."
  },
  {
    id: "trust",
    name: "Trust Wallet",
    logo: trustwalletLogo,
    platforms: ["mobile", "browser-extension"],
    custodyModel: "self-custody",
    inAppDexSwap: true,
    nftGallery: true,
    inAppStaking: true,
    fiatOnRamp: true,
    fiatOffRamp: true,
    pushNotifications: true,
    solanaPayQR: "partial",
    version: "11.45",
    testDate: "2025-07-17",
    description: "Trust Wallet is one of the most popular mobile wallets in the world, developed by Binance. It supports over 100 blockchains and 4.5 million assets with a focus on security and ease of use.",
    website: "https://trustwallet.com",
    downloadLinks: {
      mobile: "https://trustwallet.com/download",
      browserExtension: "https://trustwallet.com/browser-extension"
    },
    features: ["Multi-Chain Support", "DeFi Integration", "NFT Marketplace", "Web3 Browser", "Staking Rewards", "Hardware Wallet Support", "WalletConnect", "Cross-Chain Bridge", "Portfolio Tracking", "Security Center"],
    additionalNotes: "QR scanner available but not specifically optimized for Solana Pay. Focus on multi-chain ecosystem and mass adoption."
  },
  {
    id: "tiplink",
    name: "Tiplink",
    logo: tiplinkLogo,
    platforms: ["web", "mobile"],
    custodyModel: "self-custody",
    inAppDexSwap: false,
    nftGallery: false,
    inAppStaking: false,
    fiatOnRamp: false,
    fiatOffRamp: false,
    pushNotifications: false,
    solanaPayQR: "yes",
    version: "2.1.0",
    testDate: "2025-07-17",
    description: "TipLink is an innovative wallet with a 'wallet as a link' concept, allowing users to send cryptocurrency via a link, even to those without a crypto wallet.",
    website: "https://tiplink.io",
    downloadLinks: {
      web: "https://tiplink.io",
      mobile: "https://tiplink.io/download"
    },
    features: ["Link-based Wallets", "Easy Onboarding", "Mass Distribution", "Gift Cards", "Tipping System", "No Registration Required", "Instant Claims", "Social Sharing", "Batch Sending", "Custom Branding"],
    additionalNotes: "Unique Solana Pay implementation with focus on easy sharing and claiming. Perfect for micropayments and mass adoption use cases."
  },
  {
    id: "tokenpocket",
    name: "TokenPocket",
    logo: tokenpocketLogo,
    platforms: ["mobile", "browser-extension"],
    custodyModel: "self-custody",
    inAppDexSwap: true,
    nftGallery: true,
    inAppStaking: true,
    fiatOnRamp: true,
    fiatOffRamp: true,
    pushNotifications: true,
    solanaPayQR: "partial",
    version: "2.8.0",
    testDate: "2025-07-17",
    description: "TokenPocket is a comprehensive multi-chain wallet with support for over 100 blockchains. It offers a complete ecosystem with built-in DEX, DeFi tools, NFT marketplace, and gaming hub.",
    website: "https://tokenpocket.pro",
    downloadLinks: {
      mobile: "https://tokenpocket.pro/download",
      browserExtension: "https://tokenpocket.pro/download"
    },
    features: ["Multi-Chain DEX", "DeFi Dashboard", "NFT Marketplace", "Gaming Hub", "Social Trading", "Portfolio Management", "Yield Farming", "Lending Protocol", "Cross-Chain Bridge", "Market Analytics"],
    additionalNotes: "QR scanner available but not specifically optimized for Solana Pay. Focus on DeFi ecosystem and gaming applications."
  },
  {
    id: "binanceweb3",
    name: "Binance Web3 Wallet",
    logo: binanceLogo,
    platforms: ["mobile", "browser-extension"],
    custodyModel: "self-custody",
    inAppDexSwap: true,
    nftGallery: true,
    inAppStaking: true,
    fiatOnRamp: true,
    fiatOffRamp: true,
    pushNotifications: true,
    solanaPayQR: "no",
    version: "2.8.0",
    testDate: "2025-07-17",
    description: "Binance Web3 Wallet is a gateway to the Web3 ecosystem developed by Binance, offering access to trading, DeFi, NFT marketplaces, and various crypto services.",
    website: "https://www.binance.com/web3wallet",
    downloadLinks: {
      mobile: "https://www.binance.com/download",
      browserExtension: "https://www.binance.com/web3wallet"
    },
    features: ["Binance Integration", "Spot Trading", "Futures Trading", "DeFi Access", "NFT Marketplace", "Launchpad Access", "Earn Products", "Copy Trading", "Institutional Services", "Advanced Analytics"],
    additionalNotes: "No specific implementation found for Solana Pay QR. Focus on Binance ecosystem integration and trading features."
  },
  {
    id: "decaf",
    name: "Decaf Wallet",
    logo: decafLogo,
    platforms: ["mobile"],
    custodyModel: "self-custody",
    inAppDexSwap: true,
    nftGallery: true,
    inAppStaking: false,
    fiatOnRamp: false,
    fiatOffRamp: false,
    pushNotifications: true,
    solanaPayQR: "yes",
    version: "1.5.25",
    testDate: "2025-07-17",
    description: "Decaf is a minimalist mobile wallet with a focus on privacy and security, offering a clean and simple experience without sacrificing important features.",
    website: "https://decaf.so",
    downloadLinks: {
      mobile: "https://decaf.so/download"
    },
    features: ["Privacy Focus", "Minimal Design", "Fast Transactions", "Secure Storage", "Biometric Lock", "Backup & Recovery", "Transaction History", "Network Selection", "Fee Optimization", "Offline Support"],
    additionalNotes: "Simple and effective QR scanner for Solana Pay. Focus on minimalist yet powerful user experience."
  },
  {
    id: "nowwallet",
    name: "NOW Wallet",
    logo: nowwalletLogo,
    platforms: ["mobile", "web"],
    custodyModel: "self-custody",
    inAppDexSwap: true,
    nftGallery: false,
    inAppStaking: false,
    fiatOnRamp: true,
    fiatOffRamp: true,
    pushNotifications: true,
    solanaPayQR: "partial",
    version: "1.5.25",
    testDate: "2025-07-17",
    description: "NOW Wallet focuses on ease of use and instant transactions, offering an intuitive interface with advanced features like instant swap, portfolio tracking, and market analytics.",
    website: "https://walletnow.app",
    downloadLinks: {
      mobile: "https://walletnow.app/download",
      web: "https://walletnow.app"
    },
    features: ["Instant Swap", "Portfolio Tracking", "Market Analytics", "Price Alerts", "Multi-Asset Support", "Real-time Charts", "News Feed", "Social Features", "Yield Tracking", "Tax Reporting"],
    additionalNotes: "QR scanner available but not specifically optimized for Solana Pay. Focus on instant transactions and trading experience."
  },
  {
    id: "ledger",
    name: "Ledger",
    logo: ledgerLogo,
    platforms: ["desktop", "mobile", "hardware"],
    custodyModel: "self-custody",
    inAppDexSwap: false,
    nftGallery: true,
    inAppStaking: true,
    fiatOnRamp: true,
    fiatOffRamp: true,
    pushNotifications: true,
    solanaPayQR: "no",
    version: "2.118.1",
    testDate: "2025-07-17",
    description: "Ledger Live is a software wallet developed by Ledger, the leading hardware wallet manufacturer. It offers enterprise-level security with seamless hardware wallet integration and supports over 5,500 crypto assets.",
    website: "https://www.ledger.com/ledger-live",
    downloadLinks: {
      desktop: "https://www.ledger.com/ledger-live/download",
      mobile: "https://www.ledger.com/ledger-live/download",
      hardware: "https://www.ledger.com"
    },
    features: ["Hardware Integration", "Enterprise Security", "Portfolio Management", "Staking Services", "DeFi Access", "NFT Support", "Market Data", "Tax Reporting", "Institutional Features", "Cold Storage"],
    additionalNotes: "Focus on hardware wallet integration and enterprise security. No specific implementation for Solana Pay QR scanning."
  },
  {
    id: "keystone",
    name: "Keystone",
    logo: keystoneLogo,
    platforms: ["hardware", "mobile"],
    custodyModel: "self-custody",
    inAppDexSwap: false,
    nftGallery: false,
    inAppStaking: false,
    fiatOnRamp: false,
    fiatOffRamp: false,
    pushNotifications: false,
    solanaPayQR: "partial",
    version: "2.2.0",
    testDate: "2025-07-17",
    description: "Keystone is a hardware wallet that offers air-gapped security for crypto assets, using QR codes for communication with software wallets, providing high security without internet connection.",
    website: "https://keyst.one",
    downloadLinks: {
      hardware: "https://keyst.one/products",
      mobile: "https://keyst.one/download"
    },
    features: ["Air-Gapped Security", "QR Communication", "Multi-Signature", "Cold Storage", "Open Source", "Multi-Coin Support", "Secure Element", "Backup & Recovery", "Firmware Updates", "Developer APIs"],
    additionalNotes: "Uses QR codes for communication but not specifically for Solana Pay. Focus on air-gapped security and hardware-based protection."
  },
  {
    id: "trezor",
    name: "Trezor",
    logo: trezorLogo,
    platforms: ["hardware", "mobile"],
    custodyModel: "self-custody",
    inAppDexSwap: false,
    nftGallery: true,
    inAppStaking: true,
    fiatOnRamp: false,
    fiatOffRamp: false,
    pushNotifications: false,
    solanaPayQR: "no",
    version: "latest",
    testDate: "2025-07-18",
    description: "Trezor is a leading hardware wallet provider, offering secure storage for Solana and other cryptocurrencies with a focus on high security standards.",
    website: "https://trezor.io",
    downloadLinks: {
      hardware: "https://trezor.io",
      mobile: "https://trezor.io/download"
    },
    features: ["Hardware Integration", "Enterprise Security", "Portfolio Management", "Staking Services", "NFT Support", "Cold Storage"],
    additionalNotes: "No specific implementation for Solana Pay QR. Focus on hardware-based security and integration with software wallets."
  },
  {
    id: "helium",
    name: "Helium",
    logo: heliumLogo,
    platforms: ["mobile"],
    custodyModel: "self-custody",
    inAppDexSwap: true,
    nftGallery: true,
    inAppStaking: true,
    fiatOnRamp: false,
    fiatOffRamp: false,
    pushNotifications: true,
    solanaPayQR: "yes",
    version: "latest",
    testDate: "2025-07-18",
    description: "Helium Wallet is designed for managing Helium accounts, supporting HNT, MOBILE, IOT, DC, SOL, and USDC tokens with a focus on user-friendly features.",
    website: "https://docs.helium.com/wallets/helium-wallet-app",
    downloadLinks: {
      mobile: "https://docs.helium.com/wallets/helium-wallet-app"
    },
    features: ["Multiple Accounts", "Ledger Balance", "Address Book", "Helium Identity Verification", "Token Lock-up for Voting", "Multiple Recipient Payments", "Claim Tokens from Hotspots", "Claim Rewards", "Transfer NFTs", "Token Swaps"],
    additionalNotes: "Responsive QR scanner with clean Solana Pay implementation. Focus on Helium ecosystem integration."
  },
  {
    id: "dynamic",
    name: "Dynamic",
    logo: dynamicLogo,
    platforms: ["web", "mobile"],
    custodyModel: "self-custody",
    inAppDexSwap: true,
    nftGallery: true,
    inAppStaking: false,
    fiatOnRamp: true,
    fiatOffRamp: false,
    pushNotifications: true,
    solanaPayQR: "yes",
    version: "4.23.0",
    testDate: "2025-07-17",
    description: "Dynamic offers a suite of tools for effortless login, wallet creation, and user management, designed for users and built for developers with seamless wallet infrastructure.",
    website: "https://dynamic.xyz",
    downloadLinks: {
      web: "https://dynamic.xyz",
      mobile: "https://dynamic.xyz/products"
    },
    features: ["Easy Login", "Wallet Creation", "User Management", "Developer Tools", "Multi-Chain Support", "Social Login", "Embedded Wallets", "SDK Available", "Authentication", "Infrastructure"],
    additionalNotes: "Developer-focused infrastructure with excellent Solana Pay support. Perfect for building user-friendly web3 applications."
  },
  {
    id: "crossmint_non_custodial",
    name: "Crossmint Non-Custodial",
    logo: crossmintLogo,
    platforms: ["web", "mobile"],
    custodyModel: "self-custody",
    inAppDexSwap: true,
    nftGallery: true,
    inAppStaking: false,
    fiatOnRamp: true,
    fiatOffRamp: true,
    pushNotifications: true,
    solanaPayQR: "yes",
    version: "1.4.2",
    testDate: "2025-07-17",
    description: "Crossmint Non-Custodial wallet focuses on enterprise solutions and mass adoption, offering infrastructure for businesses to integrate crypto payments and NFT functionality.",
    website: "https://crossmint.com",
    downloadLinks: {
      web: "https://crossmint.com/wallet",
      mobile: "https://crossmint.com/download"
    },
    features: ["Enterprise Solutions", "API Integration", "Mass Adoption Tools", "Developer APIs", "Business Dashboard", "Bulk Operations", "Compliance Tools", "White-Label Solutions", "Payment Processing"],
    additionalNotes: "Robust Solana Pay implementation with focus on enterprise use cases."
  },
  {
    id: "crossmint_custodial",
    name: "Crossmint Custodial",
    logo: crossmintLogo,
    platforms: ["web", "mobile"],
    custodyModel: "custodial",
    inAppDexSwap: true,
    nftGallery: true,
    inAppStaking: false,
    fiatOnRamp: true,
    fiatOffRamp: true,
    pushNotifications: true,
    solanaPayQR: "yes",
    version: "1.4.2",
    testDate: "2025-07-17",
    description: "Crossmint Custodial wallet provides enterprise-grade solutions with custodial options for businesses integrating crypto payments and NFTs.",
    website: "https://crossmint.com",
    downloadLinks: {
      web: "https://crossmint.com/wallet",
      mobile: "https://crossmint.com/download"
    },
    features: ["Enterprise Solutions", "API Integration", "Mass Adoption Tools", "Custodial Options", "Developer APIs", "Business Dashboard", "Bulk Operations", "Compliance Tools", "White-Label Solutions", "Payment Processing"],
    additionalNotes: "Robust Solana Pay implementation tailored for enterprise use cases."
  },
  {
    id: "robinhood",
    name: "Robinhood",
    logo: robinhoodLogo,
    platforms: ["mobile"],
    custodyModel: "custodial",
    inAppDexSwap: false,
    nftGallery: false,
    inAppStaking: true,
    fiatOnRamp: true,
    fiatOffRamp: true,
    pushNotifications: true,
    solanaPayQR: "no",
    version: "latest",
    testDate: "2025-07-18",
    description: "Robinhood provides a custodial wallet with Solana support, integrated into its trading platform for seamless crypto and fiat management.",
    website: "https://robinhood.com",
    downloadLinks: {
      mobile: "https://robinhood.com/download"
    },
    features: ["Trading Platform", "Fiat Integration", "Portfolio Management", "Staking", "Market Data"],
    additionalNotes: "No specific Solana Pay QR support. Focus on custodial trading and fiat integration."
  },
  {
    id: "glow",
    name: "Glow",
    logo: glowLogo,
    platforms: ["mobile", "browser-extension"],
    custodyModel: "self-custody",
    inAppDexSwap: true,
    nftGallery: true,
    inAppStaking: true,
    fiatOnRamp: true,
    fiatOffRamp: true,
    pushNotifications: true,
    solanaPayQR: "yes",
    version: "latest",
    testDate: "2025-07-18",
    description: "Glow is a user-friendly Solana wallet with strong DeFi and NFT support, designed for seamless interaction with the Solana ecosystem.",
    website: "https://glow.app",
    downloadLinks: {
      mobile: "https://glow.app/download",
      browserExtension: "https://glow.app/download"
    },
    features: ["DeFi Integration", "NFT Support", "Staking", "Fiat Gateway", "dApp Browser"],
    additionalNotes: "Solid Solana Pay QR support with a focus on user-friendly DeFi and NFT interactions."
  },
  {
    id: "fuse",
    name: "Fuse Wallet",
    logo: fuseLogo,
    platforms: ["mobile"],
    custodyModel: "self-custody",
    inAppDexSwap: true,
    nftGallery: false,
    inAppStaking: false,
    fiatOnRamp: true,
    fiatOffRamp: false,
    pushNotifications: true,
    solanaPayQR: "no",
    version: "latest",
    testDate: "2025-07-18",
    description: "Fuse Wallet is a mobile-first wallet focused on simplifying crypto payments and DeFi access for Solana users.",
    website: "https://fuse.io",
    downloadLinks: {
      mobile: "https://fuse.io/wallet"
    },
    features: ["DeFi Access", "Payment Solutions", "Fiat Onramp", "Multi-Chain Support"],
    additionalNotes: "No specific Solana Pay QR support. Focus on simplifying crypto payments."
  },
  {
    id: "circle",
    name: "Circle",
    logo: circleLogo,
    platforms: ["web", "mobile"],
    custodyModel: "custodial",
    inAppDexSwap: false,
    nftGallery: false,
    inAppStaking: false,
    fiatOnRamp: true,
    fiatOffRamp: true,
    pushNotifications: true,
    solanaPayQR: "no",
    version: "latest",
    testDate: "2025-07-18",
    description: "Circle provides a custodial wallet with Solana support, focused on enterprise-grade fiat integration and stablecoin management.",
    website: "https://circle.com",
    downloadLinks: {
      web: "https://circle.com/wallet",
      mobile: "https://circle.com/download"
    },
    features: ["Fiat Integration", "Stablecoin Support", "Enterprise Solutions", "Payment Processing"],
    additionalNotes: "No specific Solana Pay QR support. Focus on custodial fiat and stablecoin solutions."
  },
  {
    id: "enkrypt",
    name: "Enkrypt",
    logo: enkryptLogo,
    platforms: ["browser-extension"],
    custodyModel: "self-custody",
    inAppDexSwap: false,
    nftGallery: true,
    inAppStaking: true,
    fiatOnRamp: false,
    fiatOffRamp: false,
    pushNotifications: false,
    solanaPayQR: "no",
    version: "latest",
    testDate: "2025-07-18",
    description: "Enkrypt is a browser-extension wallet with Solana support, designed for secure multi-chain interactions.",
    website: "https://enkrypt.com",
    downloadLinks: {
      browserExtension: "https://enkrypt.com/download"
    },
    features: ["Multi-Chain Support", "NFT Support", "Staking", "dApp Browser"],
    additionalNotes: "No specific Solana Pay QR support. Focus on browser-based multi-chain interactions."
  },
  {
    id: "okx",
    name: "OKX",
    logo: okxLogo,
    platforms: ["mobile", "browser-extension"],
    custodyModel: "self-custody",
    inAppDexSwap: true,
    nftGallery: true,
    inAppStaking: true,
    fiatOnRamp: true,
    fiatOffRamp: true,
    pushNotifications: true,
    solanaPayQR: "partial",
    version: "latest",
    testDate: "2025-07-18",
    description: "OKX Wallet is a multi-chain wallet with strong DeFi and NFT support, integrated with the OKX exchange ecosystem.",
    website: "https://okx.com/web3",
    downloadLinks: {
      mobile: "https://okx.com/download",
      browserExtension: "https://okx.com/web3/download"
    },
    features: ["DeFi Integration", "NFT Marketplace", "Staking", "Fiat Gateway", "Exchange Integration", "Portfolio Management"],
    additionalNotes: "QR scanner available but not specifically optimized for Solana Pay. Focus on DeFi and exchange integration."
  },
  {
    id: "cdp",
    name: "CDP Wallets",
    logo: cdpLogo,
    platforms: ["web"],
    custodyModel: "self-custody",
    inAppDexSwap: false,
    nftGallery: false,
    inAppStaking: false,
    fiatOnRamp: false,
    fiatOffRamp: false,
    pushNotifications: false,
    solanaPayQR: "no",
    version: "latest",
    testDate: "2025-07-18",
    description: "CDP Wallets provide a web-based solution for Solana asset management, focused on simplicity and developer integration.",
    website: "https://cdp.wallets",
    downloadLinks: {
      web: "https://cdp.wallets"
    },
    features: ["Web-Based Access", "Developer Tools", "Asset Management"],
    additionalNotes: "No specific Solana Pay QR support. Focus on web-based simplicity."
  },
  {
    id: "walletconnect",
    name: "WalletConnect",
    logo: walletconnectLogo,
    platforms: ["mobile", "web"],
    custodyModel: "self-custody",
    inAppDexSwap: false,
    nftGallery: false,
    inAppStaking: false,
    fiatOnRamp: false,
    fiatOffRamp: false,
    pushNotifications: false,
    solanaPayQR: "no",
    version: "latest",
    testDate: "2025-07-18",
    description: "WalletConnect is a protocol for connecting wallets to dApps, supporting Solana among other chains.",
    website: "https://walletconnect.com",
    downloadLinks: {
      web: "https://walletconnect.com",
      mobile: "https://walletconnect.com/download"
    },
    features: ["dApp Connectivity", "Multi-Chain Support", "Protocol Integration"],
    additionalNotes: "No specific Solana Pay QR support. Focus on dApp connectivity."
  },
  {
    id: "turnkey",
    name: "Turnkey",
    logo: turnkeyLogo,
    platforms: ["web"],
    custodyModel: "self-custody",
    inAppDexSwap: false,
    nftGallery: false,
    inAppStaking: false,
    fiatOnRamp: false,
    fiatOffRamp: false,
    pushNotifications: false,
    solanaPayQR: "no",
    version: "latest",
    testDate: "2025-07-18",
    description: "Turnkey provides a secure wallet infrastructure for Solana, focused on developer-friendly integration.",
    website: "https://turnkey.io",
    downloadLinks: {
      web: "https://turnkey.io"
    },
    features: ["Developer Tools", "Secure Infrastructure", "Multi-Chain Support"],
    additionalNotes: "No specific Solana Pay QR support. Focus on developer infrastructure."
  },
  {
    id: "coinwallet",
    name: "Coin Wallet",
    logo: coinwalletLogo,
    platforms: ["mobile", "desktop"],
    custodyModel: "self-custody",
    inAppDexSwap: true,
    nftGallery: true,
    inAppStaking: true,
    fiatOnRamp: true,
    fiatOffRamp: true,
    pushNotifications: true,
    solanaPayQR: "partial",
    version: "latest",
    testDate: "2025-07-18",
    description: "Coin Wallet is a multi-chain wallet supporting Solana, with a focus on user-friendly asset management and DeFi integration.",
    website: "https://coin.space",
    downloadLinks: {
      mobile: "https://coin.space/download",
      desktop: "https://coin.space/download"
    },
    features: ["Multi-Chain Support", "DeFi Integration", "NFT Support", "Staking", "Fiat Gateway"],
    additionalNotes: "QR scanner available but not optimized for Solana Pay. Focus on user-friendly asset management."
  },
  {
    id: "web3auth",
    name: "Web3Auth",
    logo: web3authLogo,
    platforms: ["web", "mobile"],
    custodyModel: "self-custody",
    inAppDexSwap: false,
    nftGallery: false,
    inAppStaking: false,
    fiatOnRamp: false,
    fiatOffRamp: false,
    pushNotifications: false,
    solanaPayQR: "no",
    version: "latest",
    testDate: "2025-07-18",
    description: "Web3Auth provides a wallet infrastructure for seamless authentication and Solana support, tailored for developers.",
    website: "https://web3auth.io",
    downloadLinks: {
      web: "https://web3auth.io",
      mobile: "https://web3auth.io/download"
    },
    features: ["Authentication", "Developer Tools", "Multi-Chain Support", "Social Login"],
    additionalNotes: "No specific Solana Pay QR support. Focus on authentication and developer integration."
  },
  {
    id: "brave",
    name: "Brave",
    logo: braveLogo,
    platforms: ["browser-extension"],
    custodyModel: "self-custody",
    inAppDexSwap: true,
    nftGallery: true,
    inAppStaking: false,
    fiatOnRamp: true,
    fiatOffRamp: false,
    pushNotifications: true,
    solanaPayQR: "partial",
    version: "latest",
    testDate: "2025-07-18",
    description: "Brave Wallet is integrated into the Brave browser, offering Solana support with a focus on privacy and Web3 access.",
    website: "https://brave.com/wallet",
    downloadLinks: {
      browserExtension: "https://brave.com/download"
    },
    features: ["Privacy Focus", "Web3 Access", "NFT Support", "DeFi Integration", "Fiat Onramp"],
    additionalNotes: "QR scanner available but not optimized for Solana Pay. Focus on privacy and browser integration."
  },
  {
    id: "slope",
    name: "Slope",
    logo: slopeLogo,
    platforms: ["mobile", "browser-extension"],
    custodyModel: "self-custody",
    inAppDexSwap: true,
    nftGallery: true,
    inAppStaking: false,
    fiatOnRamp: true,
    fiatOffRamp: false,
    pushNotifications: true,
    solanaPayQR: "yes",
    version: "latest",
    testDate: "2025-07-18",
    description: "Slope is a Solana-focused wallet with strong support for NFTs and DeFi, designed for seamless user interactions.",
    website: "https://slope.finance",
    downloadLinks: {
      mobile: "https://slope.finance/download",
      browserExtension: "https://slope.finance/download"
    },
    features: ["NFT Support", "DeFi Integration", "Fiat Onramp", "dApp Browser"],
    additionalNotes: "Solid Solana Pay QR support with a focus on NFT and DeFi interactions."
  },
  {
    id: "coinbase",
    name: "Coinbase Wallet",
    logo: coinbaseLogo,
    platforms: ["mobile", "browser-extension"],
    custodyModel: "self-custody",
    inAppDexSwap: true,
    nftGallery: true,
    inAppStaking: true,
    fiatOnRamp: true,
    fiatOffRamp: true,
    pushNotifications: true,
    solanaPayQR: "partial",
    version: "latest",
    testDate: "2025-07-18",
    description: "Coinbase Wallet is a multi-chain wallet with Solana support, integrated with the Coinbase ecosystem for trading and asset management.",
    website: "https://wallet.coinbase.com",
    downloadLinks: {
      mobile: "https://wallet.coinbase.com/download",
      browserExtension: "https://wallet.coinbase.com/download"
    },
    features: ["Multi-Chain Support", "DeFi Integration", "NFT Marketplace", "Staking", "Fiat Gateway", "Exchange Integration"],
    additionalNotes: "QR scanner available but not optimized for Solana Pay. Focus on Coinbase ecosystem integration."
  },
  {
    id: "atomic",
    name: "Atomic Wallet",
    logo: atomicLogo,
    platforms: ["mobile", "desktop"],
    custodyModel: "self-custody",
    inAppDexSwap: true,
    nftGallery: true,
    inAppStaking: true,
    fiatOnRamp: true,
    fiatOffRamp: true,
    pushNotifications: true,
    solanaPayQR: "partial",
    version: "latest",
    testDate: "2025-07-18",
    description: "Atomic Wallet is a multi-chain wallet supporting Solana, with a focus on decentralized asset management and staking.",
    website: "https://atomicwallet.io",
    downloadLinks: {
      mobile: "https://atomicwallet.io/download",
      desktop: "https://atomicwallet.io/download"
    },
    features: ["Multi-Chain Support", "DeFi Integration", "NFT Support", "Staking", "Fiat Gateway"],
    additionalNotes: "QR scanner available but not optimized for Solana Pay. Focus on decentralized asset management."
  },
  {
    id: "metamask",
    name: "MetaMask (Solana Snap)",
    logo: metamaskLogo,
    platforms: ["browser-extension"],
    custodyModel: "self-custody",
    inAppDexSwap: true,
    nftGallery: true,
    inAppStaking: false,
    fiatOnRamp: true,
    fiatOffRamp: false,
    pushNotifications: true,
    solanaPayQR: "no",
    version: "latest",
    testDate: "2025-07-18",
    description: "MetaMask supports Solana via a Solana Snap, extending its multi-chain capabilities to include Solana dApps and assets.",
    website: "https://metamask.io",
    downloadLinks: {
      browserExtension: "https://metamask.io/download"
    },
    features: ["Multi-Chain Support", "Solana Snap", "DeFi Integration", "NFT Support", "dApp Browser", "Fiat Onramp"],
    additionalNotes: "No specific Solana Pay QR support. Focus on multi-chain dApp interactions via Solana Snap."
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