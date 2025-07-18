import { useEffect, useState } from "react";
import { wallets } from "@/data/wallets";
import { WalletCard } from "./WalletCard";

export function MyFollowedWallets() {
  const [followed, setFollowed] = useState<string[]>([]);

  // Fungsi untuk refresh daftar follow
  const refreshFollowed = () => {
    const myFollow = JSON.parse(localStorage.getItem("myFollow") || "[]");
    setFollowed(myFollow);
  };

  useEffect(() => {
    refreshFollowed();
    // Listener untuk perubahan localStorage (cross-tab)
    const handleStorage = (e: StorageEvent) => {
      if (e.key === "myFollow") {
        refreshFollowed();
      }
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  // Listener untuk perubahan di tab yang sama (misal klik love)
  useEffect(() => {
    window.addEventListener("myFollowChanged", refreshFollowed);
    return () => window.removeEventListener("myFollowChanged", refreshFollowed);
  }, []);

  const followedWallets = wallets.filter(w => followed.includes(w.name));

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold mb-4">My Followed Wallets</h2>
      {followedWallets.length === 0 ? (
        <p className="text-muted-foreground">No wallets followed yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {followedWallets.map(wallet => (
            <WalletCard key={wallet.name} wallet={wallet} onViewDetails={() => {}} />
          ))}
        </div>
      )}
    </div>
  );
}
