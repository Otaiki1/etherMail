import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/newimport");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[51.81rem] overflow-hidden text-center text-[1.5rem] text-white font-lato">
      <img
        className="absolute top-[0rem] left-[0rem] w-[90rem] h-[51.81rem] overflow-hidden"
        alt=""
        src="/component-1.svg"
      />
      <img
        className="absolute top-[69.5rem] left-[32.25rem] w-[90rem] h-[51.81rem]"
        alt=""
        src="/rectangle-2.svg"
      />
      <div className="absolute top-[5.5rem] left-[31.38rem] rounded-3xs bg-gray-200 shadow-[0px_0px_10px_rgba(255,_255,_255,_0.2)] w-[27.19rem] h-[40.75rem] overflow-hidden">
        <div className="absolute top-[14.13rem] left-[2.63rem] font-medium">
          <p className="m-0">&nbsp;</p>
          <p className="m-0">{` `}</p>
          <p className="m-0">Buy, store, send and swap tokens</p>
          <p className="m-0">Explore blockchain apps</p>
        </div>
        <div className="absolute top-[10.44rem] left-[2.25rem] text-[1.25rem] font-semibold">
          Connecting you to the decentralized web
        </div>
        <div className="absolute top-[6.88rem] left-[3.81rem] text-[2rem] font-extrabold">
          Welcome to ZI Wallet
        </div>
        <button
          className="cursor-pointer [border:none] p-0 bg-pink absolute top-[28.69rem] left-[4.25rem] rounded-3xs w-[18.75rem] h-[3.88rem] overflow-hidden"
          onClick={onFrameButtonClick}
        >
          <div className="absolute top-[1.19rem] left-[5.5rem] w-[7.81rem] h-[1.5rem]">
            <b className="absolute top-[0.06rem] left-[0rem] text-[1.13rem] font-lato text-black text-center">
              Get Started
            </b>
            <img
              className="absolute top-[0rem] left-[6.31rem] w-[1.5rem] h-[1.5rem]"
              alt=""
              src="/materialsymbolsarrowrightaltrounded.svg"
            />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Welcome;
