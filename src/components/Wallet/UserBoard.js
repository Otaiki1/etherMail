export default function UserBoard() {
  return (
    <div className="w-full bg-white h-[30%] rounded-t-xl py-6">
      <div className="flex flex-col items-center space-y-2">
        <div className="rounded-31xl bg-gray-100 w-[12.5rem] h-[3.25rem]">
          <p className="text-[0.88rem] font-medium text-center">
            0xe8984ef2dadb5b3474
          </p>
        </div>
        <div>
          <img
            className="w-[2.69rem] h-[2.69rem]"
            alt=""
            src="/group-102.svg"
          />
        </div>
        <div className="w-[12.06rem] h-[3.63rem] text-[3rem] text-black">
          <div className="font-semibold">
            <span className="">{`20 `}</span>
            <span className="text-silver">ETH</span>
            <img
              className="w-[1.56rem] h-[1.56rem]"
              alt=""
              src="/bigraphuparrow.svg"
            />
          </div>
        </div>
        <div className="text-[1.13rem] font-semibold text-black">$2,500USD</div>
      </div>
    </div>
  );
}
