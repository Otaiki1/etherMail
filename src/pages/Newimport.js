import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Newimport = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/create-password");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[51.81rem] overflow-hidden text-center text-[1.25rem] text-white font-lato">
      <img
        className="absolute top-[0rem] left-[0rem] w-[90rem] h-[51.81rem] overflow-hidden"
        alt=""
        src="/component-11.svg"
      />
      <img
        className="absolute top-[69.5rem] left-[32.25rem] w-[90rem] h-[51.81rem]"
        alt=""
        src="/rectangle-2.svg"
      />
      <div className="absolute top-[12.31rem] left-[16.25rem] rounded-3xs bg-gray-200 shadow-[0px_0px_10px_rgba(255,_255,_255,_0.2)] w-[27.19rem] h-[27.13rem] overflow-hidden">
        <div className="absolute top-[12.06rem] left-[3.38rem] font-medium inline-block w-[20.44rem]">
          This creates a new wallet and a 12-word recovery phrase.
        </div>
        <div className="absolute top-[7.94rem] left-[2.38rem] text-[1.5rem] font-semibold">
          We can have you set up one now
        </div>
        <button
          className="cursor-pointer [border:none] p-0 bg-pink absolute top-[18.63rem] left-[4.25rem] rounded-3xs w-[18.75rem] h-[3.88rem] overflow-hidden"
          onClick={onFrameButtonClick}
        >
          <div className="absolute top-[1.19rem] left-[4.69rem] w-[9.38rem] h-[1.5rem]">
            <b className="absolute top-[0.06rem] left-[0rem] text-[1.13rem] font-lato text-black text-center">
              Create Wallet
            </b>
            <img
              className="absolute top-[0rem] left-[7.88rem] w-[1.5rem] h-[1.5rem]"
              alt=""
              src="/materialsymbolsadd.svg"
            />
          </div>
        </button>
        <div className="absolute top-[2.88rem] left-[5.56rem] text-[2rem] font-extrabold">
          New to Zi Wallet?
        </div>
      </div>
      <div className="absolute top-[12.31rem] left-[46.56rem] rounded-3xs bg-gray-200 shadow-[0px_0px_10px_rgba(255,_255,_255,_0.2)] w-[27.19rem] h-[27.13rem] overflow-hidden">
        <div className="absolute top-[8.44rem] left-[4.5rem] font-semibold">
          We can have you set up one now
        </div>
        <button className="cursor-pointer [border:none] p-0 bg-pink absolute top-[18.63rem] left-[4.25rem] rounded-3xs w-[18.75rem] h-[3.88rem] overflow-hidden">
          <div className="absolute top-[1.19rem] left-[4.69rem] w-[9.44rem] h-[1.5rem]">
            <b className="absolute top-[0.06rem] left-[0rem] text-[1.13rem] font-lato text-black text-center">
              Import Wallet
            </b>
            <img
              className="absolute top-[0rem] left-[7.94rem] w-[1.5rem] h-[1.5rem]"
              alt=""
              src="/materialsymbolsadd.svg"
            />
          </div>
        </button>
        <div className="absolute top-[2.88rem] left-[7.31rem] text-[2rem] font-extrabold">
          Import Wallet
        </div>
        <div className="absolute top-[11.56rem] left-[0.88rem] font-medium inline-block w-[25.5rem]">
          Import your existing wallet by entering the 12-word recovery phrase.
        </div>
      </div>
    </div>
  );
};

export default Newimport;
