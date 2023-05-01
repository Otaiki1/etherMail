export default function Token() {
  return (
    <div className="bg-white w-full h-[4.13rem] flex pt-3 pl-2 text-black justify-between">
      <div>
        <div className="flex font-semibold">
          <img src="./group-102.svg" alt="" />
          <div className="ml-4 text-sm">
            <span className="block">20 ETH</span>
            <span className="block">$2500</span>
          </div>
        </div>
      </div>
      <div className="flex justify-center ">
        <img
          src="./materialsymbolsarrowdropdowncirclerounded.svg"
          alt=""
          className="w-[2.25rem] h-[2.25rem] mr-5"
        />
      </div>
    </div>
  );
}
