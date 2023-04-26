import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Newimport = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/create-password");
  }, [navigate]);

  return (
    <>
      <div className="text-center text-[1.25rem] text-white font-lato flex space-x-8">
        <div className="rounded-3xs bg-gray-200 shadow-[0px_0px_10px_rgba(255,_255,_255,_0.2)] w-[27.19rem] h-[27.13rem] overflow-hidden space-y-12 ">
          <div className="text-[2rem] font-extrabold mt-8">
            New to Zi Wallet?
          </div>
          <div className=" text-[1.5rem] font-semibold">
            We can have you set up one now
          </div>
          <div className="font-medium inline-block">
            This creates a new wallet and a 12-word recovery phrase.
          </div>

          <button
            className="cursor-pointer [border:none] p-0 bg-pink rounded-3xs w-[18.75rem] h-[3.88rem] overflow-hidden"
            onClick={onFrameButtonClick}
          >
            <div className="w-full flex justify-center">
              <b className="text-[1.13rem] font-lato text-black text-center">
                Create Wallet
              </b>
              <img
                className="w-[1.5rem] h-[1.5rem]"
                alt=""
                src="/materialsymbolsadd.svg"
              />
            </div>
          </button>
        </div>

        <div className="rounded-3xs bg-gray-200 shadow-[0px_0px_10px_rgba(255,_255,_255,_0.2)] w-[27.19rem] h-[27.13rem] overflow-hidden space-y-12 text-center">
          <div className="text-[2rem] font-extrabold mt-8">Import Wallet</div>
          <div className=" text-[1.5rem] font-semibold">
            We can have you set up one now
          </div>
          <div className="font-medium inline-block w-full">
            Import your existing wallet by entering the 12-word recovery phrase.
          </div>

          <button
            className="cursor-pointer [border:none] p-0 bg-pink rounded-3xs w-[18.75rem] h-[3.88rem] overflow-hidden"
            onClick={onFrameButtonClick}
          >
            <div className="w-full flex justify-center">
              <b className="text-[1.13rem] font-lato text-black text-center">
                Import Wallet
              </b>
              <img
                className="w-[1.5rem] h-[1.5rem]"
                alt=""
                src="/materialsymbolsadd.svg"
              />
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Newimport;
