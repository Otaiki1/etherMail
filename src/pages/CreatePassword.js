import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const CreatePassword = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/wallet-created");
  }, [navigate]);

  return (
    <div className="text-[1.25rem] text-white font-lato">
      <div className="rounded-3xs bg-gray-200 shadow-[0px_0px_10px_rgba(255,_255,_255,_0.2)] w-[27.19rem] h-[40.75rem] overflow-hidden space-y-12">
        <div className="text-[1.88rem] font-extrabold text-lavenderblush text-center mt-12">
          <p className="m-0">Create Password for this</p>
          <p className="m-0">wallet</p>
        </div>
        <div className="px-12">
          <label className="block">Create Password</label>
          <input className="rounded-3xs bg-white w-[21.25rem] h-[3rem] overflow-hidden" />
        </div>
        <div className="px-12">
          <label className="block">Confirm Password</label>
          <input className="rounded-3xs bg-white w-[21.25rem] h-[3rem] overflow-hidden" />
        </div>
        <button
          className="cursor-pointer [border:none] p-0 bg-pink rounded-3xs w-[18.75rem] h-[3.88rem] overflow-hidden block mx-auto"
          onClick={onFrameButtonClick}
        >
          <b className="text-[1.13rem] font-lato text-black text-center">
            Create wallet
          </b>
        </button>
      </div>
    </div>
  );
};

export default CreatePassword;
