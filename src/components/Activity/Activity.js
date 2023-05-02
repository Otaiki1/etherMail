export default function Activity(props) {
  return (
    <div className="flex bg-white w-full h-[4.13rem] pt-3 pl-2 text-black justify-between mt-4">
      <div className="flex justify-between">
        <div>
          <img
            className="w-[3.13rem] h-[3.13rem]"
            alt=""
            src="/group-111.svg"
          />
        </div>
        <div>
          <h3>{props.actionType}</h3>
          <h4>
            {props.actionDate}
            <span className="ml-4"> from: {props.fromAddress}</span>
          </h4>
        </div>
      </div>
      <div>
        <h3>{props.actionVal}</h3>
        <p>${props.actionAmt}</p>
      </div>
    </div>
  );
}
