import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const CreatePassword = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/wallet-created");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[51.81rem] overflow-hidden text-center text-[1.25rem] text-white font-lato">
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
      <div className="absolute top-[5.5rem] left-[31.44rem] rounded-3xs bg-gray-200 shadow-[0px_0px_10px_rgba(255,_255,_255,_0.2)] w-[27.19rem] h-[40.75rem] overflow-hidden">
        <div className="absolute top-[2.94rem] left-[3.25rem] text-[1.88rem] font-extrabold text-lavenderblush">
          <p className="m-0">Create Password for this</p>
          <p className="m-0">wallet</p>
        </div>
        <button
          className="cursor-pointer [border:none] p-0 bg-pink absolute top-[26.94rem] left-[4.25rem] rounded-3xs w-[18.75rem] h-[3.88rem] overflow-hidden"
          onClick={onFrameButtonClick}
        >
          <b className="absolute top-[1.25rem] left-[6.06rem] text-[1.13rem] font-lato text-black text-center">
            Create wallet
          </b>
        </button>
        <div className="absolute top-[12.13rem] left-[3rem] rounded-3xs bg-white w-[21.25rem] h-[3rem] overflow-hidden" />
        <b className="absolute top-[10.13rem] left-[3rem]">Create Password</b>
        <div className="absolute top-[19.25rem] left-[3rem] rounded-3xs bg-white w-[21.25rem] h-[3rem] overflow-hidden" />
        <b className="absolute top-[17.25rem] left-[3rem]">Confirm Password</b>
      </div>
    </div>
  );
};

export default CreatePassword;
