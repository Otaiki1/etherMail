import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Frame from "../components/UI/Frame";
import WalletTopNav from "../components/Wallet/WalletTopNav";
import SendForm from "../components/Send/SendForm";
import AddressBar from "../components/Wallet/AddressBar";

const Send3 = () => {
  const navigate = useNavigate();

  const onRectangleButtonClick = useCallback(() => {
    navigate("/send2");
  }, [navigate]);

  return (
    <Frame>
      <WalletTopNav />

      <div className="bg-whitesmoke h-[88%] rounded-t-lg">
        <div className="w-[70%] flex justify-between pt-5 pl-5">
          <div>
            <img src="./materialsymbolsarrowcircleleftrounded.svg" alt="" />
          </div>
          <AddressBar address="0xe8984ef2dadb5b3474" />
        </div>
        <SendForm submitForm={onRectangleButtonClick} />
      </div>
    </Frame>
  );
};

export default Send3;
{
  /* <img
        className="absolute top-[0rem] left-[0rem] w-[90rem] h-[51.81rem] overflow-hidden"
        alt=""
        src="/component-1.svg"
      />
      <img
        className="absolute top-[69.5rem] left-[32.25rem] w-[90rem] h-[51.81rem]"
        alt=""
        src="/rectangle-2.svg"
      /> */
}
{
  /* <div className="absolute top-[5.5rem] left-[31.44rem] rounded-3xs bg-gray-200 shadow-[0px_0px_10px_rgba(255,_255,_255,_0.2)] w-[27.19rem] h-[40.75rem] overflow-hidden">
        <div className="absolute top-[2rem] left-[7.31rem] rounded-8xs bg-white w-[12.63rem] h-[3.25rem]" />
        <img
          className="absolute top-[1.97rem] left-[22.09rem] w-[3.31rem] h-[3.31rem]"
          alt=""
          src="/ellipse-1.svg"
        />
        <b className="absolute top-[2.13rem] left-[1.69rem]">zi</b>
        <div className="absolute top-[2.88rem] left-[8.81rem] w-[9.63rem] h-[1.5rem] text-[1rem] text-black">
          <div className="absolute top-[0.13rem] left-[0rem] font-semibold">
            Ethereum mainet
          </div>
          <img
            className="absolute top-[0rem] left-[8.13rem] w-[1.5rem] h-[1.5rem]"
            alt=""
            src="/materialsymbolsarrowdropdownrounded1.svg"
          />
        </div>
      </div>
      <div className="absolute top-[12.19rem] left-[31.44rem] rounded-3xs bg-whitesmoke shadow-[0px_0px_10px_rgba(255,_255,_255,_0.2)] w-[27.19rem] h-[34rem] overflow-hidden text-[0.88rem] text-darkgray">
        <div className="absolute top-[1rem] left-[7.38rem] rounded-31xl bg-gray-100 w-[12.5rem] h-[3.25rem]" />
        <div className="absolute top-[2.06rem] left-[7.88rem] font-medium text-white">
          0xe8984ef2dadb5b3474
        </div>
        <div className="absolute top-[5.75rem] left-[1.81rem] text-[1rem] font-semibold">
          Send ETH
        </div>
        <div className="absolute top-[12.75rem] left-[1.5rem] font-semibold">
          Recipient’s wallet address
        </div>
        <div className="absolute top-[14.31rem] left-[1.5rem] bg-white w-[24.06rem] h-[4.13rem]" />
        <div className="absolute top-[19.44rem] left-[1.5rem] font-semibold">
          Amount
        </div>
        <div className="absolute top-[21rem] left-[1.5rem] bg-white w-[24.06rem] h-[4.13rem]" />
        <div className="absolute top-[27.94rem] left-[1.5rem] rounded-3xs bg-gray-100 w-[10.63rem] h-[4.13rem]" />
        <button
          className="cursor-pointer p-0 bg-white absolute top-[27.94rem] left-[14.88rem] rounded-3xs box-border w-[10.75rem] h-[4.25rem] border-[1px] border-solid border-gray-100"
          onClick={onRectangleButtonClick}
        />
        <img
          className="absolute top-[6.75rem] left-[11.13rem] w-[5rem] h-[5rem]"
          alt=""
          src="/group-123.svg"
        />
        <img
          className="absolute top-[1rem] left-[1rem] w-[1.5rem] h-[1.5rem]"
          alt=""
          src="/materialsymbolsarrowcircleleftrounded.svg"
        />
        <div className="absolute top-[25.38rem] left-[1.5rem] font-semibold">
          0.00
        </div>
        <b className="absolute top-[29.25rem] left-[4.94rem] text-[1.25rem] text-white">
          Cancel
        </b>
        <b className="absolute top-[29.31rem] left-[18.88rem] text-[1.25rem] text-black">
          Send
        </b>
      </div>
      <img
        className="absolute top-[14.25rem] left-[49.56rem] w-[1.25rem] h-[1.25rem]"
        alt=""
        src="/materialsymbolscontentcopyoutlinerounded2.svg"
      />
    </div> */
}
