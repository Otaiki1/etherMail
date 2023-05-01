import WalletButton from "./WalletButton";
import bridgeIcon from "../assets/bridge-icon.svg";
import buyIcon from "../assets/buy-icon.svg";
import sellIcon from "../assets/sell-icon.svg";
import swapIcon from "../assets/swap-icon.svg";

export default function WalletButtons(props) {
  const allItems = [
    { name: "buy", icon: buyIcon, clickHandler: () => {} },
    { name: "sell", icon: sellIcon, clickHandler: props.onSend },
    { name: "swap", icon: swapIcon, clickHandler: () => {} },
    { name: "bridge", icon: bridgeIcon, clickHandler: () => {} },
  ];
  return (
    <div className="bg-gray-100 flex items-center px-6 py-4 w-full h-[5%]">
      {allItems.map((item) => {
        return (
          <WalletButton
            image={item.icon}
            text={item.name}
            clickHandler={item.clickHandler}
          />
        );
      })}
    </div>
  );
}
