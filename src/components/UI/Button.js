export default function Button(props) {
  return (
    <button
      className={`cursor-pointer p-0 rounded-3xs box-border w-[10.75rem] h-[4.25rem] border-[1px] border-solid border-gray-100 font-bold text-lg ${props.extraClass}`}
      onClick={props.clickHandler}
    >
      {props.children}
    </button>
  );
}
