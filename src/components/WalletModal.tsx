import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  ExternalLink, 
  Download, 
  Smartphone, 
  Monitor, 
  Globe, 
  Puzzle,
  Check,
  X,
  AlertTriangle,
  Calendar,
  Package
} from "lucide-react";
import { Wallet, getCustodyModelColor, getSolanaPayColor } from "@/data/wallets";

interface WalletModalProps {
  wallet: Wallet | null;
  isOpen: boolean;
  onClose: () => void;
}

const platformIcons = {
  web: Globe,
  mobile: Smartphone,
  desktop: Monitor,
  'browser-extension': Puzzle,
};

const booleanIcons = {
  true: Check,
  false: X,
};

export function WalletModal({ wallet, isOpen, onClose }: WalletModalProps) {
  if (!wallet) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-card border-0 shadow-glow">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-2xl">
            <motion.img
              src={wallet.logo}
              alt={`${wallet.name} logo`}
              className="w-16 h-16 rounded-lg object-cover bg-muted"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              onError={(e) => {
                e.currentTarget.src = `data:image/svg+xml;base64,${btoa(`
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="64" height="64" rx="12" fill="hsl(259 94% 51%)"/>
                    <text x="32" y="40" text-anchor="middle" fill="white" font-family="system-ui" font-size="24" font-weight="600">
                      ${wallet.name.charAt(0)}
                    </text>
                  </svg>
                `)}`;
              }}
            />
            {wallet.name}
          </DialogTitle>
        </DialogHeader>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-6"
        >
          {/* Description & Website */}
          <div className="space-y-3">
            <p className="text-muted-foreground">{wallet.description}</p>
            <Button
              asChild
              variant="outline"
              className="gap-2 hover:bg-[rgba(255,255,255,0.3)]"
            >
              <a href={wallet.website} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                Visit Website
              </a>
            </Button>
          </div>

          <Separator />

          {/* Platform Support */}
          <div>
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Monitor className="h-5 w-5 text-primary" />
              Platform Support
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {wallet.platforms.map((platform) => {
                const Icon = platformIcons[platform];
                const downloadLink = wallet.downloadLinks[platform as keyof typeof wallet.downloadLinks];
                return (
                  <motion.div
                    key={platform}
                    whileHover={{ scale: 1.02 }}
                    className="p-3 rounded-lg border bg-card text-center space-y-2"
                  >
                    <Icon className="h-6 w-6 mx-auto text-primary" />
                    <p className="text-sm font-medium capitalize">
                      {platform.replace('-', ' ')}
                    </p>
                    {downloadLink && (
                      <Button
                        size="sm"
                        variant="outline"
                        asChild
                        className="w-full hover:bg-[rgba(255,255,255,0.3)]"
                      >
                        <a href={downloadLink} target="_blank" rel="noopener noreferrer">
                          <Download className="h-3 w-3 mr-1" />
                          Download
                        </a>
                      </Button>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

          <Separator />

          {/* Feature Matrix */}
          <div>
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Package className="h-5 w-5 text-primary" />
              Feature Matrix
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-lg border">
                  <span className="font-medium">Custody Model</span>
                  <Badge className={getCustodyModelColor(wallet.custodyModel)}>
                    {wallet.custodyModel}
                  </Badge>
                </div>
                
                <div className="flex items-center justify-between p-3 rounded-lg border">
                  <span className="font-medium">Fiat On-Ramp</span>
                  <div className="flex items-center gap-2">
                    {wallet.fiatOnRamp ? (
                      <Check className="h-4 w-4 text-success" />
                    ) : (
                      <X className="h-4 w-4 text-destructive" />
                    )}
                    <span className={wallet.fiatOnRamp ? "text-success" : "text-destructive"}>
                      {wallet.fiatOnRamp ? "Yes" : "No"}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg border">
                  <span className="font-medium">Fiat Off-Ramp</span>
                  <div className="flex items-center gap-2">
                    {wallet.fiatOffRamp ? (
                      <Check className="h-4 w-4 text-success" />
                    ) : (
                      <X className="h-4 w-4 text-destructive" />
                    )}
                    <span className={wallet.fiatOffRamp ? "text-success" : "text-destructive"}>
                      {wallet.fiatOffRamp ? "Yes" : "No"}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg border">
                  <span className="font-medium">Push Notifications</span>
                  <div className="flex items-center gap-2">
                    {wallet.pushNotifications ? (
                      <Check className="h-4 w-4 text-success" />
                    ) : (
                      <X className="h-4 w-4 text-destructive" />
                    )}
                    <span className={wallet.pushNotifications ? "text-success" : "text-destructive"}>
                      {wallet.pushNotifications ? "Yes" : "No"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-lg border">
                  <span className="font-medium">Solana Pay QR</span>
                  <Badge className={getSolanaPayColor(wallet.solanaPayQR)}>
                    {wallet.solanaPayQR}
                  </Badge>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg border">
                  <span className="font-medium">Version Tested</span>
                  <span className="text-sm text-muted-foreground">{wallet.version}</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg border">
                  <span className="font-medium">Test Date</span>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{wallet.testDate}</span>
                  </div>
                </div>

                {wallet.additionalNotes && (
                  <div className="p-3 rounded-lg border bg-warning/10 border-warning/20">
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-warning mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-sm mb-1">Additional Notes</p>
                        <p className="text-sm text-muted-foreground">{wallet.additionalNotes}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <Separator />

          {/* Features */}
          <div>
            <h3 className="font-semibold mb-3">Key Features</h3>
            <div className="flex flex-wrap gap-2">
              <AnimatePresence>
                {wallet.features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Badge variant="secondary">{feature}</Badge>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}