import Button from "../UI/Button";

export default function InfoBox(props) {
  return (
    <div className="space-y-8 px-6 pt-5">
      <h2 className="text-[1rem] font-semibold text-darkgray">Send ETH</h2>
      <div className="flex justify-center">
        <img className="w-[5rem] h-[5rem]" alt="" src="/group-102.svg" />
      </div>
      <div className="w-1/2 mx-auto">
        <h2 className="font-bold text-black text-xl">{props.infoText}</h2>
      </div>
      <div className="mt-6 flex justify-between">
        <Button extraClass="bg-gray-100 text-white">{props.failureText}</Button>
        <Button
          extraClass="bg-white text-black"
          clickHandler={props.successHandler}
        >
          {props.successText}
        </Button>
      </div>
    </div>
  );
}
