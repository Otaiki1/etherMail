export default function WalletBottomNav() {
  return (
    <div className="absolute bottom-0 rounded-t-none rounded-b-8xs bg-gainsboro w-[27.19rem] h-[4.5rem] bg-white">
      <div className="flex opacity-[0.8] justify-around">
        <div className="font-semibold text-sm text-slate-800">
          <img
            className="w-[2.81rem] h-[2.81rem] shrink-0"
            alt=""
            src="/healthiconscoins.svg"
          />{" "}
          <span className="block">Assets</span>
        </div>
        <div className="font-semibold text-sm text-slate-800">
          <img
            className="w-[2.81rem] h-[2.81rem] shrink-0"
            alt=""
            src="/mdistarminusoutline.svg"
          />
          <span className="block">Nft’s</span>
        </div>
        <div className="font-semibold text-sm text-slate-800">
          <img
            className="w-[2.81rem] h-[2.81rem] shrink-0"
            alt=""
            src="/tableractivityheartbeat.svg"
          />
          <span className="block">Activity</span>
        </div>
      </div>
    </div>
  );
}
