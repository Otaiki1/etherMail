export default function WalletButton({ image, text }) {
  return (
    <button className="text-white bg-slate-500 rounded-xl w-[5rem] h-[3rem] flex flex-col items-center mr-6">
      <img src={image} alt="" className="w-[1.5rem] h-[1.5rem] opacity-[0.8]" />
      <span>{text}</span>
    </button>
  );
}
