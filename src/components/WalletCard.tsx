import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Info, Smartphone, Monitor, Globe, Puzzle, ChevronDown, ChevronUp } from "lucide-react";
import { Wallet, getCustodyModelColor, getSolanaPayColor } from "@/data/wallets";

interface WalletCardProps {
  wallet: Wallet;
  onViewDetails: (wallet: Wallet) => void;
}

const platformIcons = {
  web: Globe,
  mobile: Smartphone,
  desktop: Monitor,
  'browser-extension': Puzzle,
  hardware: Info,
};

export function WalletCard({ wallet, onViewDetails }: WalletCardProps) {
  const [showAllFeatures, setShowAllFeatures] = useState(false);
  // Cek apakah wallet sudah di-follow di localStorage
  const [loved, setLoved] = useState(() => {
    const myFollow = JSON.parse(localStorage.getItem('myFollow') || '[]');
    return myFollow.includes(wallet.name);
  });
  const displayedFeatures = showAllFeatures ? wallet.features : wallet.features.slice(0, 3);
  const remainingCount = wallet.features.length > 3 ? wallet.features.length - 3 : 0;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card className="h-full transition-smooth hover:shadow-elegant border-0 bg-gray-700/70 backdrop-blur-sm">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
      <motion.img
        src={(() => {
          try {
            // Use imported logo variable if available
            // @ts-ignore
            return require(`@/assets/image/${wallet.logo.replace('Logo','').toLowerCase()}.webp`);
          } catch {
            // fallback to imported logo variable
            // @ts-ignore
            return (typeof wallet.logo === 'string' && wallet.logo in window ? window[wallet.logo] : wallet.logo);
          }
        })()}
        alt={`${wallet.name} logo`}
        className="w-12 h-12 rounded-lg object-cover bg-muted"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        onError={(e) => {
          e.currentTarget.src = `data:image/svg+xml;base64,${btoa(`
            <svg width='48' height='48' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <rect width='48' height='48' rx='8' fill='hsl(259 94% 51%)'/>
              <text x='24' y='30' text-anchor='middle' fill='white' font-family='system-ui' font-size='20' font-weight='600'>
                ${wallet.name.charAt(0)}
              </text>
            </svg>
          `)}`;
        }}
      />
              <div>
                <h3 className="font-semibold text-lg text-card-foreground">{wallet.name}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {wallet.description}
                </p>
              </div>
            </div>
            {/* Love Icon */}
            <Button
              variant="ghost"
              size="icon"
              className={`opacity-70 hover:bg-white/30 ${loved ? 'text-red-500' : 'text-muted-foreground'}`}
              aria-label={loved ? 'Unlove wallet' : 'Love wallet'}
            onClick={() => {
              const myFollow = JSON.parse(localStorage.getItem('myFollow') || '[]');
              if (!loved) {
                // Tambahkan wallet ke myFollow
                const updated = [...myFollow, wallet.name];
                localStorage.setItem('myFollow', JSON.stringify(updated));
                setLoved(true);
                window.dispatchEvent(new Event('myFollowChanged'));
              } else {
                // Hapus wallet dari myFollow
                const updated = myFollow.filter((n: string) => n !== wallet.name);
                localStorage.setItem('myFollow', JSON.stringify(updated));
                setLoved(false);
                window.dispatchEvent(new Event('myFollowChanged'));
              }
            }}
            >
              {loved ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12.1 4.44c-1.36-1.32-3.57-1.32-4.93 0-1.36 1.32-1.36 3.46 0 4.78l7.07 7.07a.75.75 0 0 0 1.06 0l7.07-7.07c1.36-1.32 1.36-3.46 0-4.78-1.36-1.32-3.57-1.32-4.93 0l-.67.65-.67-.65z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              )}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="opacity-70 hover:bg-white/30"
            >
              <a href={wallet.website} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-4">
          {/* Platforms */}
          <div className="flex flex-wrap gap-2">
            {wallet.platforms.map((platform) => {
              const Icon = platformIcons[platform] || Info;
              return (
                <Badge key={platform} variant="secondary" className="gap-1.5">
                  <Icon className="h-3 w-3" />
                  {platform.replace(/-/g, ' ')}
                </Badge>
              );
            })}
          </div>

          {/* Key Indicators */}
          <div className="grid grid-cols-2 gap-2">
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground">Custody</p>
              <Badge className={getCustodyModelColor(wallet.custodyModel)}>
                {wallet.custodyModel.charAt(0).toUpperCase() + wallet.custodyModel.slice(1)}
              </Badge>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground">Solana Pay QR</p>
              <Badge className={getSolanaPayColor(wallet.solanaPayQR)}>
                {wallet.solanaPayQR.charAt(0).toUpperCase() + wallet.solanaPayQR.slice(1)}
              </Badge>
            </div>
          </div>

          {/* Features preview */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-xs text-muted-foreground">Key Features</p>
              {wallet.features.length > 3 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowAllFeatures(!showAllFeatures)}
                  className="h-auto p-1 text-xs hover:bg-white/30"
                >
                  {showAllFeatures ? (
                    <>
                      <ChevronUp className="h-3 w-3 mr-1" />
                      Show Less
                    </>
                  ) : (
                    <>
                      <ChevronDown className="h-3 w-3 mr-1" />
                      Show All
                    </>
                  )}
                </Button>
              )}
            </div>
            <AnimatePresence mode="wait">
              <motion.div 
                key={showAllFeatures ? 'all' : 'limited'}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-wrap gap-1"
              >
                {displayedFeatures.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Badge variant="outline" className="text-xs">
                      {feature}
                    </Badge>
                  </motion.div>
                ))}
                {!showAllFeatures && remainingCount > 0 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.15 }}
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setShowAllFeatures(true)}
                      className="h-6 px-2 text-xs bg-primary/10 border-primary/20 hover:bg-primary/20"
                    >
                      +{remainingCount} more
                    </Button>
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
          <Button
            onClick={() => onViewDetails(wallet)}
            className="w-full mt-4 bg-gradient-to-r from-purple-700 via-indigo-700 to-blue-600 border-0 shadow-glow text-white rounded-full flex items-center justify-center gap-2"
            size="sm"
          >
            View Details
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}