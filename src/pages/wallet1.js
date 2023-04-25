import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./wallet1.css";
const Wallet1 = () => {
  const navigate = useNavigate();

  const onHealthiconscoinsClick = useCallback(() => {
    navigate("/wallet1");
  }, [navigate]);

  return (
    <div className="wallet1">
      <img className="component-1-icon3" alt="" src="/component-1.svg" />
      <img className="wallet-inner" alt="" src="/rectangle-2.svg" />
      <div className="rectangle-parent6">
        <div className="frame-child17" />
        <img className="frame-child18" alt="" src="/ellipse-1.svg" />
        <b className="zi3">zi</b>
        <div className="ethereum-mainet-parent1">
          <div className="ethereum-mainet3">Ethereum mainet</div>
          <img
            className="material-symbolsarrow-drop-do-icon4"
            alt=""
            src="/materialsymbolsarrowdropdownrounded.svg"
          />
        </div>
      </div>
      <div className="rectangle-parent7">
        <div className="frame-child19" />
        <div className="xe8984ef2dadb5b34743">0xe8984ef2dadb5b3474</div>
        <div className="tokens1">Tokens</div>
        <div className="frame-wrapper">
          <div className="group-parent">
            <div className="rectangle-parent8">
              <div className="group-child2" />
              <b className="apr-13">Apr 13</b>
              <div className="from-0x876asd">from: 0x876.....asd</div>
              <div className="usd1">$12.56 USD</div>
              <div className="recieve">Recieve</div>
              <div className="div2">10.658</div>
              <img className="group-child3" alt="" src="/group-111.svg" />
            </div>
            <div className="rectangle-parent8">
              <div className="group-child2" />
              <b className="apr-13">Apr 13</b>
              <div className="from-0x876asd">to: 0x876.....asd</div>
              <div className="usd1">$12.56 USD</div>
              <div className="sent">Sent</div>
              <div className="div2">10.658</div>
              <img className="group-child3" alt="" src="/group-111.svg" />
            </div>
            <div className="rectangle-parent8">
              <div className="group-child2" />
              <b className="apr-13">Apr 13</b>
              <div className="from-0x876asd">from: 0x876.....asd</div>
              <div className="usd1">$12.56 USD</div>
              <div className="recieve">Recieve</div>
              <div className="div2">10.658</div>
              <img className="group-child3" alt="" src="/group-111.svg" />
            </div>
            <div className="rectangle-parent8">
              <div className="group-child2" />
              <b className="apr-13">Apr 13</b>
              <div className="from-0x876asd">from: 0x876.....asd</div>
              <div className="usd1">$12.56 USD</div>
              <div className="recieve">Recieve</div>
              <div className="div2">10.658</div>
              <img className="group-child9" alt="" src="/group-111.svg" />
            </div>
          </div>
        </div>
        <div className="frame-child20" />
      </div>
      <div className="wallet-child1" />
      <div className="healthiconscoins-group">
        <img
          className="healthiconscoins1"
          alt=""
          src="/healthiconscoins.svg"
          onClick={onHealthiconscoinsClick}
        />
        <img
          className="mdistar-minus-outline-icon1"
          alt=""
          src="/mdistarminusoutline.svg"
        />
        <img
          className="mdistar-minus-outline-icon1"
          alt=""
          src="/tableractivityheartbeat.svg"
        />
      </div>
      <div className="assets1">Assets</div>
      <div className="nfts1">Nft’s</div>
      <div className="activity1">Activity</div>
      <img
        className="material-symbolscontent-copy-icon3"
        alt=""
        src="/materialsymbolscontentcopyoutlinerounded.svg"
      />
      <img
        className="material-symbolsarrow-drop-do-icon5"
        alt=""
        src="/materialsymbolsarrowdropdowncirclerounded.svg"
      />
    </div>
  );
};

export default Wallet1;
