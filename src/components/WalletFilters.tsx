import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Search, Filter, X } from "lucide-react";
import { Wallet } from "@/data/wallets";

interface WalletFiltersProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  platformFilter: string;
  onPlatformFilterChange: (value: string) => void;
  custodyFilter: string;
  onCustodyFilterChange: (value: string) => void;
  solanaPayFilter: string;
  onSolanaPayFilterChange: (value: string) => void;
  onClearFilters: () => void;
  filteredCount: number;
  totalCount: number;
}

export function WalletFilters({
  searchTerm,
  onSearchChange,
  platformFilter,
  onPlatformFilterChange,
  custodyFilter,
  onCustodyFilterChange,
  solanaPayFilter,
  onSolanaPayFilterChange,
  onClearFilters,
  filteredCount,
  totalCount,
}: WalletFiltersProps) {
  const hasActiveFilters = searchTerm || platformFilter !== "all" || custodyFilter !== "all" || solanaPayFilter !== "all";

  // Platform filter options based on wallet data
  const platformFilters = [
    { label: "All Wallets", value: "all" },
    { label: "Web", value: "web" },
    { label: "Mobile", value: "mobile" },
    { label: "Desktop", value: "desktop" },
    { label: "Browser Extension", value: "browser-extension" },
    { label: "Hardware", value: "hardware" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="relative space-y-6 p-6 rounded-xl border-0 overflow-hidden bg-transparent"
    >
      {/* Tab Header */}
      <div className="flex items-center gap-8 border-b border-white/20 mb-2 relative">
        <button className="text-white font-medium text-lg relative" style={{letterSpacing:0.5}}>
          Wallets <span className="ml-1 px-2 py-0.5 rounded bg-primary/20 text-white text-sm">{totalCount}</span>
          <span className="absolute left-0 -bottom-2 w-full h-0.5 bg-primary rounded" />
        </button>
        <button className="text-white font-medium text-lg relative">
          My Follow <span className="ml-1 px-2 py-0.5 rounded bg-muted text-white text-sm">4</span>
        </button>
        <div className="relative flex-1 max-w-md ml-auto mb-2">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
          <Input
            placeholder="Search wallets..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 bg-background/10 rounded-lg focus:ring-1 focus:ring-white/30 focus:border-white/30 w-full"
            autoFocus
          />
        </div>
      </div>

      {/* Horizontal Feature Filters */}
      <div className="flex flex-wrap gap-3 mb-4">
        {platformFilters.map(({ label, value }) => (
          <button
            key={value}
            onClick={() => onPlatformFilterChange(value)}
            className={`px-5 py-2 rounded-full font-medium text-sm transition-all border
              ${platformFilter === value
                ? 'bg-white/30 border-white text-white'
                : 'bg-transparent border-white/30 text-white'}
              hover:bg-white/30 hover:border-white hover:text-white`}
            style={{ minWidth: '80px' }}
          >
            {label}
          </button>
        ))}
      </div>
    </motion.div>
  );
}