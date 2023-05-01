export default function WalletNav() {
  return (
    <div className="rounded-3xs w-full h-[10%] overflow-hidden text-[2.5rem] text-white flex justify-around pt-4">
      <div>
        <b className="">zi</b>
      </div>
      <div className="w-[9.63rem] h-[1.5rem] text-[1rem] text-black">
        <button className="cursor-pointer [border:none] p-0 bg-white rounded-8xs w-[12.63rem] h-[3.25rem]">
          <span className="font-semibold">Ethereum mainnet</span>
          <img
            className="w-[1.5rem] h-[1.5rem]"
            alt=""
            src="/materialsymbolsarro wdropdownrounded.svg"
          />
        </button>
      </div>
      <div>
        <img className="w-[3.31rem] h-[3.31rem]" alt="" src="/ellipse-1.svg" />
      </div>
    </div>
  );
}
