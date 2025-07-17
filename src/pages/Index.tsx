import { useState, useMemo } from "react";
import { OrbitingCircles } from "../components/ui/orbiting-circles";
import phantomLogo from '@/assets/image/phantom.webp';
import solflareLogo from '@/assets/image/solflare.webp';
import backpackLogo from '@/assets/image/backpack.webp';
import jupiterLogo from '@/assets/image/jupiter-ag-jup-logo.png';
import bitgetLogo from '@/assets/image/bitget.webp';
import binanceLogo from '@/assets/image/binance.webp';
import tokenpocketLogo from '@/assets/image/tokenpocket.webp';
import trustwalletLogo from '@/assets/image/trustwalletcore.webp';
import solanaLogo from '@/assets/image/solana-logo.png';
import cosmicHero from '@/assets/image/Cosmic Hero.png';
import { Wallet as WalletIcon, Search, Settings, Download, Star, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
// Removed duplicate import of WalletIcon
import { wallets, Wallet } from "@/data/wallets";
import { WalletCard } from "@/components/WalletCard";
import { WalletModal } from "@/components/WalletModal";
import { WalletFilters } from "@/components/WalletFilters";
import { ThemeToggle } from "@/components/ThemeToggle";
import logoLight from "@/assets/logo-light.webp";
import ventaLogo from "@/assets/logo-light.webp";
import { AnimatedText } from "../components/AnimatedText";


const Index = () => {
  const [selectedWallet, setSelectedWallet] = useState<Wallet | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [platformFilter, setPlatformFilter] = useState("all");
  const [custodyFilter, setCustodyFilter] = useState("all");
  const [solanaPayFilter, setSolanaPayFilter] = useState("all");

  const filteredWallets = useMemo(() => {
    return wallets.filter((wallet) => {
      const matchesSearch = wallet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           wallet.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           wallet.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesPlatform = platformFilter === "all" || wallet.platforms.includes(platformFilter as any);
      const matchesCustody = custodyFilter === "all" || wallet.custodyModel === custodyFilter;
      const matchesSolanaPay = solanaPayFilter === "all" || wallet.solanaPayQR === solanaPayFilter;

      return matchesSearch && matchesPlatform && matchesCustody && matchesSolanaPay;
    });
  }, [searchTerm, platformFilter, custodyFilter, solanaPayFilter]);

  const handleClearFilters = () => {
    setSearchTerm("");
    setPlatformFilter("all");
    setCustodyFilter("all");
    setSolanaPayFilter("all");
  };

  const exportData = () => {
    const dataStr = JSON.stringify(filteredWallets, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'solana-wallets-data.json';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/80 font-poppins">
      <div
        className="w-full"
        style={{
          backgroundImage: `url(${cosmicHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Header with Navbar */}
        <motion.header
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="sticky top-0 z-50  bg-background/40"
          style={{
            background: "rgba(132, 132, 132, 0)", // transparan tanpa blur
          }}
        >
          <div className="container mx-auto px-4 md:px-8 lg:px-16 flex items-center justify-between h-16">
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
            >
              <img src={logoLight} alt="Logo" className="h-32 w-32 object-contain" />
            </motion.div>
            {/* Navbar */}
            <nav className="flex-1 flex items-center justify-center">
              <motion.ul
              className="flex gap-4 text-[14px] md:text-[15px] font-normal"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: -10 },
                visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.08 }
                }
              }}
              >
              {[
                { href: "https://www.venta.xyz/", label: "Home" },
                { href: "/", label: "Wallet" },
                { href: "#solanapay", label: "Solana Pay" },
                { href: "https://docs.venta.xyz", label: "Documentation", external: true }
              ].map((item) => {
                const isSelected =
                (!item.external && window.location.pathname === item.href) ||
                (item.href.startsWith("#") && window.location.hash === item.href);

                return (
                <motion.li
                  key={item.label}
                  variants={{
                  hidden: { opacity: 0, y: -10 },
                  visible: { opacity: 1, y: 0 }
                  }}
                  whileHover={{ scale: 1.12, y: -2 }}
                  whileTap={{ scale: 0.96, y: 0 }}
                >
                  <a
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className={`transition-all flex items-center gap-2 ${
                    isSelected ? "font-semibold" : ""
                  }`}
                  >
                  <motion.span
                    className={`bg-white/10 border border-white text-white px-3 py-1.5 rounded-full backdrop-blur-md text-[13px] md:text-[14px] ${
                    isSelected
                      ? "bg-white/30 border-primary text-primary-foreground shadow-lg"
                      : ""
                    }`}
                    whileHover={{
                    scale: 1.08,
                    boxShadow: "0 2px 16px 0 rgba(80, 80, 255, 0.12)"
                    }}
                    whileTap={{
                    scale: 0.97,
                    boxShadow: "0 1px 8px 0 rgba(80, 80, 255, 0.08)"
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {item.label}
                  </motion.span>
                  </a>
                </motion.li>
                );
              })}
              </motion.ul>
            </nav>
            <motion.div
              className="flex items-center gap-3 justify-end"
              whileHover={{ scale: 1.08, rotate: 8 }}
              whileTap={{ scale: 0.96, rotate: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <a
              href="https://github.com/venta-labs/pay-wallet-explorer"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
              title="View on GitHub"
              >
              <motion.svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-label="GitHub"
                whileTap={{ scale: 0.96, rotate: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.17-1.1-1.48-1.1-1.48-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.65.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.38-2.03 1-2.75-.1-.26-.44-1.3.09-2.7 0 0 .83-.27 2.73 1.02a9.18 9.18 0 0 1 2.49-.34c.85 0 1.71.12 2.5.34 1.9-1.29 2.73-1.02 2.73-1.02.53 1.4.19 2.44.09 2.7.62.72 1 1.63 1 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .26.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"/>
              </motion.svg>
              </a>
            </motion.div>
          </div>
        </motion.header>
        {/* Tambahkan container agar padding kiri-kanan sejajar dengan wallet filter */}
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <section className="relative flex flex-col md:flex-row items-center justify-between gap-8 py-6 overflow-hidden">
        {/* Left: Text (Moved from Right) */}
        <div className="flex-1 min-w-[260px] order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span>Venta Solana Wallet Explorer </span>
            <span className="ml-2 text-primary">
          <AnimatedText
            words={[
              'Phantom',
              'Backpack',
              'Solflare',
              'OKXWallet',
              'Jupiter',
              'Bitget',
              'Binance',
              'TokenPocket',
              'TrustWallet',
            ]}
            interval={1200}
          />
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-2">
            Find a Wallet That Works for You
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Select the features you need to discover a wallet that meets your needs.
          </p>
        </div>

        {/* Right: Orbiting Circles */}
        <div className="flex-1 flex-shrink-0 order-1 md:order-2 w-full lg:w-auto flex justify-center min-w-[400px]">
          <div
            className="relative flex items-center justify-center overflow-visible"
            style={{
              width: '400px',
              height: '400px',
            }}
          >
            <div
              className="absolute z-10 flex items-center justify-center"
              style={{
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: '64px',
          height: '64px',
          boxShadow: '0 2px 48px 0 rgba(80, 255, 255, 0.45), 0 0 100px 12px #14f195',
          borderRadius: '50%',
              }}
            >
              <img
          src={solanaLogo}
          alt="Solana Logo"
          style={{
            width: '40px',
            height: '40px',
            objectFit: 'contain',
          }}
          aria-label="Central Solana Logo"
              />
            </div>

            {/* Use different delays and durations so logos never align/sejajar */}
            <OrbitingCircles
              className="w-[34px] h-[34px] border-none bg-transparent"
              duration={19}
              delay={7}
              radius={100}
            >
              <img src={solflareLogo} alt="Solflare" width={34} height={34} style={{ borderRadius: '50%' }} />
            </OrbitingCircles>

            <OrbitingCircles
              className="w-[44px] h-[44px] border-none bg-transparent"
              radius={120}
              duration={23}
              delay={3}
              reverse
            >
              <img src={backpackLogo} alt="Backpack" width={44} height={44} style={{ borderRadius: '50%' }} />
            </OrbitingCircles>
            <OrbitingCircles
              className="w-[44px] h-[44px] border-none bg-transparent"
              radius={140}
              duration={25}
              delay={11}
              reverse
            >
              <img src={jupiterLogo} alt="Jupiter" width={44} height={44} style={{ borderRadius: '50%' }} />
            </OrbitingCircles>
            <OrbitingCircles
              className="w-[44px] h-[44px] border-none bg-transparent"
              radius={160}
              duration={27}
              delay={17}
              reverse
            >
              <img src={bitgetLogo} alt="Bitget" width={44} height={44} style={{ borderRadius: '50%' }} />
            </OrbitingCircles>
            <OrbitingCircles
              className="w-[44px] h-[44px] border-none bg-transparent"
              radius={180}
              duration={29}
              delay={21}
              reverse
            >
              <img src={binanceLogo} alt="Binance" width={44} height={44} style={{ borderRadius: '50%' }} />
            </OrbitingCircles>
            <OrbitingCircles
              className="w-[44px] h-[44px] border-none bg-transparent"
              radius={200}
              duration={31}
              delay={29}
              reverse
            >
              <img src={tokenpocketLogo} alt="TokenPocket" width={44} height={44} style={{ borderRadius: '50%' }} />
            </OrbitingCircles>
          </div>
        </div>
          </section>
        </div>
      </div>

        {/* Hero Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
        </motion.div>
      <main className="container mx-auto px-4 md:px-8 lg:px-16 py-8 space-y-8">
        {/* Filters */}
        <WalletFilters
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          platformFilter={platformFilter}
          onPlatformFilterChange={setPlatformFilter}
          custodyFilter={custodyFilter}
          onCustodyFilterChange={setCustodyFilter}
          solanaPayFilter={solanaPayFilter}
          onSolanaPayFilterChange={setSolanaPayFilter}
          onClearFilters={handleClearFilters}
          filteredCount={filteredWallets.length}
          totalCount={wallets.length}
        />

        {/* Solana Wallet text & Export Data Button */}
        <div className="flex items-center justify-between mb-4">
            <span className="text-xl md:text-3xl font-bold text-foreground">Solana Wallet</span>
          <Button
            onClick={exportData}
            variant="outline"
            size="sm"
            className="gap-2 bg-background/50 backdrop-blur-sm border-0"
          >
            <Download className="h-4 w-4" />
            Export Data
          </Button>
        </div>

        {/* Wallet Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredWallets.map((wallet, index) => (
            <motion.div
              key={wallet.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <WalletCard
                wallet={wallet}
                onViewDetails={setSelectedWallet}
              />
            </motion.div>
          ))}
        </motion.div>

        {filteredWallets.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">No wallets found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search criteria or clear the filters
            </p>
            <Button
              onClick={handleClearFilters}
              variant="outline"
              className="hover:bg-[rgba(255,255,255,0.3)]"
            >
              Clear All Filters
            </Button>
          </motion.div>
        )}
      </main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="border-t border-border/40 bg-gradient-to-br from-background via-background to-background/90 backdrop-blur-xl mt-16 relative overflow-hidden"
      >
        <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-16 py-10 md:py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center mb-4 md:mb-0">
          <img src={logoLight} alt="Logo" className="h-8 w-auto object-contain drop-shadow-lg" />
        </div>
        {/* Center: Copyright & Social */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <p className="text-base font-semibold text-foreground mb-2">© {new Date().getFullYear()} Venta</p>
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            <Badge variant="outline">Last Updated: July 2025</Badge>
            <Badge variant="outline">Community Driven</Badge>
            <Badge variant="outline">MIT License</Badge>
          </div>
          <div className="flex items-center gap-4">
            {/* Twitter/X link */}
            <a
              href="https://x.com/venta_xyz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Venta Twitter"
              className="hover:text-primary transition-colors text-white rounded-lg hover:bg-[rgba(255,255,255,0.3)] p-1"
            >
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <rect width="32" height="32" rx="8" fill="currentColor" className="text-background" />
                <path
                  d="M20.7 10.5h3.1l-6.8 7.8 7.9 8.2h-6.2l-4.9-5.2-5.6 5.2H6.1l7.3-6.7-7.7-8.3h6.3l4.4 4.7 5.6-4.7zm-1.1 13.2h1.7l-10.2-11h-1.8l10.3 11z"
                  fill="#fff"
                />
              </svg>
            </a>
            {/* Email */}
            <a
              href="mailto:venta.xyz@gmail.com"
              className="flex items-center gap-2 text-white hover:text-primary transition-colors text-base font-medium rounded-lg hover:bg-[rgba(255,255,255,0.3)] p-1"
              aria-label="Email Venta"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect width="24" height="24" rx="6" fill="currentColor" className="text-background" />
                <path
                  d="M5 8.5V16a1.5 1.5 0 0 0 1.5 1.5h11A1.5 1.5 0 0 0 19 16V8.5m-14 0A1.5 1.5 0 0 1 6.5 7h11A1.5 1.5 0 0 1 19 8.5m-14 0 7 5.5 7-5.5"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </a>
          </div>
        </div>
        {/* Right: Back to Top Button */}
        <div className="flex-shrink-0 flex items-center md:justify-end w-full md:w-auto mt-4 md:mt-0">
          <Button
            variant="outline"
            className="rounded-xl shadow-sm px-6 py-2 text-base font-semibold bg-background/60 hover:bg-primary/10"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Back to top <span className="ml-2">↑</span>
          </Button>
        </div>
          </div>
        </div>
      </motion.footer>
      {/* Wallet Detail Modal */}
      <WalletModal
        wallet={selectedWallet}
        isOpen={!!selectedWallet}
        onClose={() => setSelectedWallet(null)}
      />
    </div>
  );
};

export default Index;
