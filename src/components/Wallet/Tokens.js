import Token from "./Token";

export default function Tokens(props) {
  return (
    <div className="bg-slate-100 p-4 h-[30%]">
      <h3 className="text-sm text-black">Tokens</h3>
      <div>{props.children}</div>
    </div>
  );
}
