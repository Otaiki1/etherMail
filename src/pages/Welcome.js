import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/newimport");
  }, [navigate]);

  return (
    <>
      <div className="rounded-3xs bg-gray-200 shadow-[0px_0px_10px_rgba(255,_255,_255,_0.2)] w-[27.19rem] h-[40.75rem] overflow-hidden text-center text-[1.5rem] text-white font-lato px-8 space-y-24 pt-16">
        <div>
          <h1 className="text-[2rem] font-extrabold">Welcome to ZI Wallet</h1>
          <h2 className="text-[1.25rem] font-semibold">
            Connecting you to the decentralized web
          </h2>
        </div>

        <div className="font-medium">
          <p className="m-0">&nbsp;</p>
          <p className="m-0">{` `}</p>
          <p className="m-0">Buy, store, send and swap tokens</p>
          <p className="m-0">Explore blockchain apps</p>
        </div>

        <button
          className="cursor-pointer [border:none] pt-4 bg-pink rounded-3xs w-[20rem] h-[3.88rem] overflow-hidden"
          onClick={onFrameButtonClick}
        >
          <div className="w-full h-full">
            <b className="text-[1.13rem] font-lato text-black text-center">
              Get Started
            </b>
            <img
              className="w-[1.5rem] h-[1.5rem]"
              alt=""
              src="/materialsymbolsarrowrightaltrounded.svg"
            />
          </div>
        </button>
      </div>
    </>
  );
};

export default Welcome;
