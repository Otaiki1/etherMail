import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./wallet3.css";
const Wallet3 = () => {
  const navigate = useNavigate();

  const onGroupContainer4Click = useCallback(() => {
    navigate("/send2");
  }, [navigate]);

  return (
    <div className="wallet3">
      <img className="component-1-icon7" alt="" src="/component-1.svg" />
      <img className="wallet-child3" alt="" src="/rectangle-2.svg" />
      <div className="rectangle-parent23">
        <button className="frame-child42" />
        <img className="frame-child43" alt="" src="/ellipse-1.svg" />
        <b className="zi8">zi</b>
        <div className="ethereum-mainet-parent5">
          <div className="ethereum-mainet7">Ethereum mainet</div>
          <img
            className="material-symbolsarrow-drop-do-icon10"
            alt=""
            src="/materialsymbolsarrowdropdownrounded.svg"
          />
        </div>
      </div>
      <div className="rectangle-parent24">
        <div className="frame-child44" />
        <div className="frame-child45" />
        <div className="xe8984ef2dadb5b34747">0xe8984ef2dadb5b3474</div>
        <div className="usd6">$2,500USD</div>
        <div className="rectangle-parent25">
          <div className="group-child16" />
          <div className="material-symbolsadd-card-outl-container">
            <img
              className="material-symbolsadd-card-outl-icon2"
              alt=""
              src="/materialsymbolsaddcardoutlinerounded.svg"
            />
            <b className="buy2">Buy</b>
          </div>
        </div>
        <div className="rectangle-parent26" onClick={onGroupContainer4Click}>
          <div className="group-child16" />
          <div className="material-symbolsadd-card-outl-container">
            <img
              className="material-symbolsadd-card-outl-icon2"
              alt=""
              src="/mdiarrowbottomrightboldboxoutline.svg"
            />
            <b className="sell2">Sell</b>
          </div>
        </div>
        <div className="rectangle-parent27">
          <div className="group-child16" />
          <div className="material-symbolsswap-horiz-ro-container">
            <img
              className="material-symbolsswap-horiz-ro-icon2"
              alt=""
              src="/materialsymbolsswaphorizrounded2.svg"
            />
            <b className="swap2">Swap</b>
          </div>
        </div>
        <div className="rectangle-parent28">
          <div className="group-child16" />
          <div className="icon-park-outlinebridge-one-container">
            <img
              className="icon-park-outlinebridge-one2"
              alt=""
              src="/iconparkoutlinebridgeone.svg"
            />
            <b className="swap2">Bridge</b>
          </div>
        </div>
        <div className="tokens3">Tokens</div>
        <div className="eth-container">
          <div className="eth6">
            <span>{`20 `}</span>
            <span className="eth7">ETH</span>
          </div>
          <img
            className="bigraph-up-arrow-icon2"
            alt=""
            src="/bigraphuparrow1.svg"
          />
        </div>
        <img className="frame-child46" alt="" src="/group-102.svg" />
        <div className="frame-child47" />
        <div className="eth8">20 ETH</div>
        <div className="div8">$2,500</div>
        <img className="frame-child48" alt="" src="/group-113.svg" />
      </div>
      <div className="wallet-child4" />
      <div className="healthiconscoins-parent1">
        <img className="healthiconscoins3" alt="" src="/healthiconscoins.svg" />
        <img
          className="healthiconscoins3"
          alt=""
          src="/mdistarminusoutline.svg"
        />
        <img
          className="healthiconscoins3"
          alt=""
          src="/tableractivityheartbeat.svg"
        />
      </div>
      <div className="assets3">Assets</div>
      <div className="nfts3">Nft’s</div>
      <div className="activity3">Activity</div>
      <img
        className="material-symbolscontent-copy-icon7"
        alt=""
        src="/materialsymbolscontentcopyoutlinerounded3.svg"
      />
      <img
        className="material-symbolsarrow-drop-do-icon11"
        alt=""
        src="/materialsymbolsarrowdropdowncirclerounded1.svg"
      />
    </div>
  );
};

export default Wallet3;
