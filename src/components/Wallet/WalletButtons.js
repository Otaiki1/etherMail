import WalletButton from "./WalletButton";
import bridgeIcon from "../assets/bridge-icon.svg";
import buyIcon from "../assets/buy-icon.svg";
import sellIcon from "../assets/sell-icon.svg";
import swapIcon from "../assets/swap-icon.svg";

const allItems = [
  { name: "buy", icon: buyIcon },
  { name: "sell", icon: sellIcon },
  { name: "swap", icon: swapIcon },
  { name: "bridge", icon: bridgeIcon },
];
export default function WalletButtons() {
  return (
    <div className="bg-gray-100 flex items-center px-6 py-4 w-full h-[5%]">
      {allItems.map((item) => {
        return <WalletButton image={item.icon} text={item.name} />;
      })}
    </div>
  );
}
