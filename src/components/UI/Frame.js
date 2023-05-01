export default function Frame(props) {
  return (
    <div className="relative rounded-3xs bg-gray-200 shadow-[0px_0px_10px_rgba(255,_255,_255,_0.2)] w-[27.19rem] h-[40.75rem] overflow-hidden text-[1.5rem] text-white font-lato">
      {props.children}
    </div>
  );
}
