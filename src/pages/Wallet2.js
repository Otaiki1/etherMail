import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Wallet2 = () => {
  const navigate = useNavigate();

  const onRectangle10Click = useCallback(() => {
    navigate("/wallet2");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[51.81rem] overflow-hidden text-center text-[1rem] text-white font-lato">
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
      <div className="absolute top-[5.5rem] left-[31.44rem] rounded-3xs bg-gray-200 shadow-[0px_0px_10px_rgba(255,_255,_255,_0.2)] w-[27.19rem] h-[40.75rem] overflow-hidden text-[2.5rem]">
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
            src="/materialsymbolsarrowdropdownrounded.svg"
          />
        </div>
      </div>
      <div className="absolute top-[12.19rem] left-[31.44rem] rounded-3xs bg-whitesmoke shadow-[0px_0px_10px_rgba(255,_255,_255,_0.2)] w-[27.19rem] h-[34rem] overflow-hidden text-[0.75rem]">
        <div className="absolute top-[14.56rem] left-[-0.06rem] bg-gray-100 w-[27.25rem] h-[6.13rem]" />
        <div className="absolute top-[1rem] left-[7.38rem] rounded-31xl bg-gray-100 w-[12.5rem] h-[3.25rem]" />
        <div className="absolute top-[2.06rem] left-[7.88rem] text-[0.88rem] font-medium">
          0xe8984ef2dadb5b3474
        </div>
        <div className="absolute top-[12.06rem] left-[10.69rem] text-[1.13rem] font-semibold text-black">
          $2,500USD
        </div>
        <div className="absolute top-[15.94rem] left-[1.63rem] w-[5rem] h-[3.44rem]">
          <div className="absolute top-[0rem] left-[0rem] rounded-xl bg-gray-600 w-[5rem] h-[3.44rem]" />
          <div className="absolute top-[0.5rem] left-[1.81rem] w-[1.5rem] h-[2.5rem]">
            <img
              className="absolute top-[0rem] left-[0rem] w-[1.5rem] h-[1.5rem] opacity-[0.8]"
              alt=""
              src="/materialsymbolsaddcardoutlinerounded.svg"
            />
            <b className="absolute top-[1.63rem] left-[0.06rem]">Buy</b>
          </div>
        </div>
        <div className="absolute top-[15.94rem] left-[7.94rem] w-[5rem] h-[3.44rem]">
          <div className="absolute top-[0rem] left-[0rem] rounded-xl bg-gray-600 w-[5rem] h-[3.44rem]" />
          <div className="absolute top-[0.5rem] left-[1.81rem] w-[1.5rem] h-[2.5rem]">
            <img
              className="absolute top-[0rem] left-[0rem] w-[1.5rem] h-[1.5rem] opacity-[0.8]"
              alt=""
              src="/mdiarrowbottomrightboldboxoutline.svg"
            />
            <b className="absolute top-[1.63rem] left-[0.13rem]">Sell</b>
          </div>
        </div>
        <div className="absolute top-[15.94rem] left-[14.25rem] w-[5rem] h-[3.44rem]">
          <div className="absolute top-[0rem] left-[0rem] rounded-xl bg-gray-600 w-[5rem] h-[3.44rem]" />
          <div className="absolute top-[0.5rem] left-[1.63rem] w-[1.81rem] h-[2.5rem]">
            <img
              className="absolute top-[0rem] left-[0.19rem] w-[1.5rem] h-[1.5rem] opacity-[0.8]"
              alt=""
              src="/materialsymbolsswaphorizrounded1.svg"
            />
            <b className="absolute top-[1.63rem] left-[0rem]">Swap</b>
          </div>
        </div>
        <div className="absolute top-[15.94rem] left-[20.56rem] w-[5rem] h-[3.44rem]">
          <div className="absolute top-[0rem] left-[0rem] rounded-xl bg-gray-600 w-[5rem] h-[3.44rem]" />
          <div className="absolute top-[0.5rem] left-[1.44rem] w-[2.19rem] h-[2.5rem]">
            <img
              className="absolute top-[0rem] left-[0.38rem] w-[1.5rem] h-[1.5rem] opacity-[0.8]"
              alt=""
              src="/iconparkoutlinebridgeone.svg"
            />
            <b className="absolute top-[1.63rem] left-[0rem]">Bridge</b>
          </div>
        </div>
        <div className="absolute top-[21.69rem] left-[1.5rem] text-[1rem] font-semibold text-black">
          Tokens
        </div>
        <div className="absolute top-[7.94rem] left-[7.56rem] w-[12.06rem] h-[3.63rem] text-[3rem] text-black">
          <div className="absolute top-[0rem] left-[0rem] font-semibold">
            <span>{`20 `}</span>
            <span className="text-silver">ETH</span>
          </div>
          <img
            className="absolute top-[1.03rem] left-[10.53rem] w-[1.56rem] h-[1.56rem]"
            alt=""
            src="/bigraphuparrow.svg"
          />
        </div>
        <img
          className="absolute top-[5.38rem] left-[12.25rem] w-[2.69rem] h-[2.69rem]"
          alt=""
          src="/group-101.svg"
        />
        <div className="absolute top-[23.5rem] left-[1.5rem] bg-white w-[24.06rem] h-[4.13rem]" />
        <div className="absolute top-[24.25rem] left-[4.94rem] text-[1rem] font-semibold text-black">
          20 ETH
        </div>
        <div className="absolute top-[25.94rem] left-[4.94rem] text-[1rem] font-semibold text-black">
          $2,500
        </div>
        <img
          className="absolute top-[24.25rem] left-[2.06rem] w-[1.88rem] h-[1.88rem]"
          alt=""
          src="/group-112.svg"
        />
      </div>
      <div className="absolute top-[40.75rem] left-[31.44rem] rounded-t-none rounded-b-8xs bg-gainsboro w-[27.19rem] h-[5.5rem]" />
      <div className="absolute top-[41.25rem] left-[33.94rem] flex flex-row items-start justify-start gap-[6.88rem] opacity-[0.8]">
        <img
          className="relative w-[2.81rem] h-[2.81rem] shrink-0"
          alt=""
          src="/healthiconscoins1.svg"
        />
        <img
          className="relative w-[2.81rem] h-[2.81rem] shrink-0"
          alt=""
          src="/mdistarminusoutline.svg"
        />
        <img
          className="relative w-[2.81rem] h-[2.81rem] shrink-0"
          alt=""
          src="/tableractivityheartbeat.svg"
        />
      </div>
      <div className="absolute top-[44.38rem] left-[33.69rem] font-semibold text-gray-100">
        Assets
      </div>
      <div className="absolute top-[44.38rem] left-[44rem] font-semibold text-gray-100">
        Nft’s
      </div>
      <div className="absolute top-[44.38rem] left-[53.06rem] font-semibold text-gray-100">
        Activity
      </div>
      <img
        className="absolute top-[14.25rem] left-[49.56rem] w-[1.25rem] h-[1.25rem]"
        alt=""
        src="/materialsymbolscontentcopyoutlinerounded.svg"
      />
      <img
        className="absolute top-[37rem] left-[54rem] w-[1.5rem] h-[1.5rem]"
        alt=""
        src="/materialsymbolsarrowdropdowncirclerounded.svg"
      />
      <div className="absolute top-[37.44rem] left-[63.25rem] bg-white w-[26.13rem] h-[11.25rem] overflow-hidden text-[2rem]">
        <img
          className="absolute top-[0.5rem] left-[0.56rem] w-[3.88rem] h-[3.88rem]"
          alt=""
          src="/ellipse-3.svg"
        />
        <b className="absolute top-[1.13rem] left-[1.81rem] inline-block w-[1.44rem] h-[1.94rem]">
          zi
        </b>
        <div className="absolute top-[3.25rem] left-[4.94rem] text-[1.25rem] font-medium text-gray-300">
          <p className="m-0">You have received 2.ETH from</p>
          <p className="m-0">0x75759678695894fgfhf837364</p>
        </div>
        <div className="absolute top-[7.06rem] left-[4.06rem] w-[18.05rem] h-[3.14rem] text-[0.94rem]">
          <div
            className="absolute top-[0rem] left-[0rem] rounded-5xs-5 bg-gray-100 w-[7.97rem] h-[3.09rem] cursor-pointer"
            onClick={onRectangle10Click}
          />
          <div className="absolute top-[0rem] left-[10.03rem] rounded-5xs-5 bg-white box-border w-[8.06rem] h-[3.19rem] border-[0.8px] border-solid border-gray-100" />
          <b className="absolute top-[0.98rem] left-[2.78rem]">Claim</b>
          <b className="absolute top-[1.03rem] left-[12.77rem] text-black">
            Reject
          </b>
        </div>
        <b className="absolute top-[1rem] left-[10.38rem] text-[1rem] text-black">
          Notification
        </b>
      </div>
    </div>
  );
};

export default Wallet2;
