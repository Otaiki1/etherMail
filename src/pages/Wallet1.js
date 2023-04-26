import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Wallet1 = () => {
  const navigate = useNavigate();

  const onHealthiconscoinsClick = useCallback(() => {
    navigate("/wallet1");
  }, [navigate]);

  return (
    <div className="relative w-full h-[51.81rem] overflow-hidden text-center text-[1rem] text-gray-100 font-lato">
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
      <div className="absolute top-[5.5rem] left-[31.44rem] rounded-3xs bg-gray-200 shadow-[0px_0px_10px_rgba(255,_255,_255,_0.2)] w-[27.19rem] h-[40.75rem] overflow-hidden text-[2.5rem] text-white">
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
      <div className="absolute top-[12.19rem] left-[31.44rem] rounded-3xs bg-whitesmoke shadow-[0px_0px_10px_rgba(255,_255,_255,_0.2)] w-[27.19rem] h-[34rem] overflow-hidden text-[0.88rem] text-white">
        <div className="absolute top-[1rem] left-[7.38rem] rounded-31xl bg-gray-100 w-[12.5rem] h-[3.25rem]" />
        <div className="absolute top-[2.06rem] left-[7.88rem] font-medium">
          0xe8984ef2dadb5b3474
        </div>
        <div className="absolute top-[4.75rem] left-[1.5rem] text-[1rem] font-semibold text-black">
          Tokens
        </div>
        <div className="absolute top-[6.56rem] left-[1.5rem] w-[24.06rem] h-[21.94rem] text-[0.75rem] text-gray-100">
          <div className="absolute top-[0rem] left-[0rem] h-[21.94rem] overflow-hidden flex flex-col items-start justify-start gap-[1rem]">
            <div className="relative w-[24.06rem] h-[6.25rem] shrink-0">
              <div className="absolute top-[0rem] left-[0rem] bg-white w-[24.06rem] h-[6.25rem]" />
              <b className="absolute top-[3.38rem] left-[4.19rem] inline-block w-[2.38rem] h-[1.31rem]">
                Apr 13
              </b>
              <div className="absolute top-[3.38rem] left-[7.19rem] font-semibold text-left inline-block w-[6.19rem] h-[1.31rem]">
                from: 0x876.....asd
              </div>
              <div className="absolute top-[3.38rem] left-[19.19rem] font-semibold text-gray-400 text-left inline-block w-[4.38rem] h-[1.31rem]">
                $12.56 USD
              </div>
              <div className="absolute top-[1.56rem] left-[4.19rem] text-[1rem] font-semibold text-black inline-block w-[3.69rem] h-[1.31rem]">
                Recieve
              </div>
              <div className="absolute top-[1.56rem] left-[19.88rem] text-[1rem] font-semibold text-black inline-block w-[3.69rem] h-[1.31rem]">
                10.658
              </div>
              <img
                className="absolute top-[1.56rem] left-[0.56rem] w-[3.13rem] h-[3.13rem]"
                alt=""
                src="/group-111.svg"
              />
            </div>
            <div className="relative w-[24.06rem] h-[6.25rem] shrink-0">
              <div className="absolute top-[0rem] left-[0rem] bg-white w-[24.06rem] h-[6.25rem]" />
              <b className="absolute top-[3.38rem] left-[4.19rem] inline-block w-[2.38rem] h-[1.31rem]">
                Apr 13
              </b>
              <div className="absolute top-[3.38rem] left-[7.19rem] font-semibold text-left inline-block w-[6.19rem] h-[1.31rem]">
                to: 0x876.....asd
              </div>
              <div className="absolute top-[3.38rem] left-[19.19rem] font-semibold text-gray-400 text-left inline-block w-[4.38rem] h-[1.31rem]">
                $12.56 USD
              </div>
              <div className="absolute top-[1.56rem] left-[4.19rem] text-[1rem] font-semibold text-black inline-block w-[2.31rem] h-[1.31rem]">
                Sent
              </div>
              <div className="absolute top-[1.56rem] left-[19.88rem] text-[1rem] font-semibold text-black inline-block w-[3.69rem] h-[1.31rem]">
                10.658
              </div>
              <img
                className="absolute top-[1.56rem] left-[0.56rem] w-[3.13rem] h-[3.13rem]"
                alt=""
                src="/group-111.svg"
              />
            </div>
            <div className="relative w-[24.06rem] h-[6.25rem] shrink-0">
              <div className="absolute top-[0rem] left-[0rem] bg-white w-[24.06rem] h-[6.25rem]" />
              <b className="absolute top-[3.38rem] left-[4.19rem] inline-block w-[2.38rem] h-[1.31rem]">
                Apr 13
              </b>
              <div className="absolute top-[3.38rem] left-[7.19rem] font-semibold text-left inline-block w-[6.19rem] h-[1.31rem]">
                from: 0x876.....asd
              </div>
              <div className="absolute top-[3.38rem] left-[19.19rem] font-semibold text-gray-400 text-left inline-block w-[4.38rem] h-[1.31rem]">
                $12.56 USD
              </div>
              <div className="absolute top-[1.56rem] left-[4.19rem] text-[1rem] font-semibold text-black inline-block w-[3.69rem] h-[1.31rem]">
                Recieve
              </div>
              <div className="absolute top-[1.56rem] left-[19.88rem] text-[1rem] font-semibold text-black inline-block w-[3.69rem] h-[1.31rem]">
                10.658
              </div>
              <img
                className="absolute top-[1.56rem] left-[0.56rem] w-[3.13rem] h-[3.13rem]"
                alt=""
                src="/group-111.svg"
              />
            </div>
            <div className="relative w-[24.06rem] h-[6.25rem] shrink-0">
              <div className="absolute top-[0rem] left-[0rem] bg-white w-[24.06rem] h-[6.25rem]" />
              <b className="absolute top-[3.38rem] left-[4.19rem] inline-block w-[2.38rem] h-[1.31rem]">
                Apr 13
              </b>
              <div className="absolute top-[3.38rem] left-[7.19rem] font-semibold text-left inline-block w-[6.19rem] h-[1.31rem]">
                from: 0x876.....asd
              </div>
              <div className="absolute top-[3.38rem] left-[19.19rem] font-semibold text-gray-400 text-left inline-block w-[4.38rem] h-[1.31rem]">
                $12.56 USD
              </div>
              <div className="absolute top-[1.56rem] left-[4.19rem] text-[1rem] font-semibold text-black inline-block w-[3.69rem] h-[1.31rem]">
                Recieve
              </div>
              <div className="absolute top-[1.56rem] left-[19.88rem] text-[1rem] font-semibold text-black inline-block w-[3.69rem] h-[1.31rem]">
                10.658
              </div>
              <img
                className="absolute top-[23.31rem] left-[0.56rem] w-[3.13rem] h-[3.13rem]"
                alt=""
                src="/group-111.svg"
              />
            </div>
          </div>
        </div>
        <div className="absolute top-[28.5rem] left-[19.81rem] bg-gray-100 w-[6.31rem] h-[0.25rem]" />
      </div>
      <div className="absolute top-[40.75rem] left-[31.44rem] rounded-t-none rounded-b-8xs bg-gainsboro w-[27.19rem] h-[5.5rem]" />
      <div className="absolute top-[41.25rem] left-[33.94rem] flex flex-row items-start justify-start gap-[6.88rem] opacity-[0.8]">
        <img
          className="relative w-[2.81rem] h-[2.81rem] shrink-0 cursor-pointer"
          alt=""
          src="/healthiconscoins.svg"
          onClick={onHealthiconscoinsClick}
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
      <div className="absolute top-[44.38rem] left-[33.69rem] font-semibold">
        Assets
      </div>
      <div className="absolute top-[44.38rem] left-[44rem] font-semibold">
        Nft’s
      </div>
      <div className="absolute top-[44.38rem] left-[53.06rem] font-semibold">
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
    </div>
  );
};

export default Wallet1;
