import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const WalletCreated = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/wallet");
  }, [navigate]);

  const onRectangleCheckboxClick = useCallback(() => {
    //TODO: allowbuttonclick
  }, []);

  return (
    <div className="relative w-full h-[51.81rem] overflow-hidden text-center text-[1.88rem] text-lavenderblush font-lato">
      <img
        className="absolute top-[17.88rem] left-[37rem] w-[16rem] h-[16rem]"
        alt=""
        src="/pheyeslash.svg"
      />
      {/* <img
        className="absolute top-[0rem] left-[0rem] w-[90rem] h-[51.81rem] overflow-hidden"
        alt=""
        src="/component-1.svg"
      />
      <img
        className="absolute top-[69.5rem] left-[32.25rem] w-[90rem] h-[51.81rem]"
        alt=""
        src="/rectangle-2.svg"
      /> */}
      <div className="absolute top-[5.5rem] left-[31.44rem] rounded-3xs bg-gray-200 shadow-[0px_0px_10px_rgba(255,_255,_255,_0.2)] w-[27.19rem] h-[40.75rem] overflow-hidden">
        <div className="absolute top-[2.94rem] left-[7.38rem] font-extrabold">
          <p className="m-0">Wallet created</p>
          <p className="m-0">Successfully</p>
        </div>
        <button
          className="cursor-pointer [border:none] p-0 bg-pink absolute top-[32.44rem] left-[4.25rem] rounded-3xs w-[18.75rem] h-[3.88rem] overflow-hidden"
          onClick={onFrameButtonClick}
        >
          <b className="absolute top-[1.25rem] left-[5.75rem] text-[1.13rem] font-lato text-black text-center">
            Open Zi wallet
          </b>
        </button>
        <div className="absolute top-[12.13rem] left-[3rem] rounded-3xs bg-white w-[21.25rem] h-[8.38rem] overflow-hidden text-left text-[0.88rem] text-black">
          <div className="absolute top-[1.38rem] left-[1.44rem] w-[2.88rem] h-[5.5rem]">
            <b className="absolute top-[0rem] left-[0.06rem]">Juliet</b>
            <b className="absolute top-[2.19rem] left-[0.06rem]">Gabriel</b>
            <b className="absolute top-[4.44rem] left-[0rem]">Caleb</b>
          </div>
          <div className="absolute top-[1.38rem] left-[17rem] w-[2.81rem] h-[5.5rem]">
            <b className="absolute top-[0rem] left-[0rem]">Juliet</b>
            <b className="absolute top-[2.19rem] left-[0rem]">Gabriel</b>
            <b className="absolute top-[4.44rem] left-[0rem]">Caleb</b>
          </div>
          <div className="absolute top-[1.5rem] left-[6rem] w-[3.75rem] h-[5.31rem]">
            <b className="absolute top-[2.13rem] left-[0rem]">Esther</b>
            <b className="absolute top-[4.25rem] left-[0rem]">OT46384</b>
            <b className="absolute top-[0rem] left-[0rem]">Pelumi</b>
          </div>
          <div className="absolute top-[1.5rem] left-[11.56rem] w-[2.56rem] h-[5.31rem]">
            <b className="absolute top-[4.25rem] left-[0.06rem]">Esther</b>
            <b className="absolute top-[2.13rem] left-[0rem]">Oyin</b>
            <b className="absolute top-[0rem] left-[0rem]">Isaac</b>
          </div>
          <img
            className="absolute top-[7.13rem] left-[19.31rem] w-[1rem] h-[1rem]"
            alt=""
            src="/pheyeslash1.svg"
          />
        </div>
        <b className="absolute top-[9.63rem] left-[9rem] text-[1.25rem] text-whitesmoke">
          Recovery Phrase
        </b>
        <input
          className="cursor-pointer absolute top-[28.06rem] left-[3.06rem] rounded-8xs bg-white w-[1.56rem] h-[1.56rem]"
          type="checkbox"
          onClick={onRectangleCheckboxClick}
        />
        <b className="absolute top-[28.25rem] left-[5.63rem] text-[1rem] text-white">
          I have saved my secret recovery phrase
        </b>
      </div>
    </div>
  );
};

export default WalletCreated;
