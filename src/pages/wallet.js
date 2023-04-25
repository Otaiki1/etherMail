import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./wallet.css";
const Wallet = () => {
  const navigate = useNavigate();

  const onGroupContainer4Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="wallet">
      <img className="component-1-icon1" alt="" src="/component-1.svg" />
      <img className="wallet-child" alt="" src="/rectangle-2.svg" />
      <div className="rectangle-container">
        <div className="frame-child4" />
        <img className="ellipse-icon" alt="" src="/ellipse-1.svg" />
        <b className="zi1">zi</b>
        <div className="ethereum-mainet-group">
          <div className="ethereum-mainet1">Ethereum mainet</div>
          <img
            className="material-symbolsarrow-drop-do-icon1"
            alt=""
            src="/materialsymbolsarrowdropdownrounded1.svg"
          />
        </div>
      </div>
      <div className="frame-div">
        <div className="frame-child5" />
        <div className="frame-child6" />
        <div className="xe8984ef2dadb5b34741">0xe8984ef2dadb5b3474</div>
        <div className="usd">$2,500USD</div>
        <div className="group-div">
          <div className="group-child" />
          <div className="material-symbolsadd-card-outl-parent">
            <img
              className="material-symbolsadd-card-outl-icon"
              alt=""
              src="/materialsymbolsaddcardoutlinerounded.svg"
            />
            <b className="buy">Buy</b>
          </div>
        </div>
        <div className="rectangle-parent1" onClick={onGroupContainer4Click}>
          <div className="group-child" />
          <div className="material-symbolsadd-card-outl-parent">
            <img
              className="material-symbolsadd-card-outl-icon"
              alt=""
              src="/mdiarrowbottomrightboldboxoutline.svg"
            />
            <b className="sell">Sell</b>
          </div>
        </div>
        <div className="rectangle-parent2">
          <div className="group-child" />
          <div className="material-symbolsswap-horiz-ro-parent">
            <img
              className="material-symbolsswap-horiz-ro-icon"
              alt=""
              src="/materialsymbolsswaphorizrounded.svg"
            />
            <b className="swap">Swap</b>
          </div>
        </div>
        <div className="rectangle-parent3">
          <div className="group-child" />
          <div className="icon-park-outlinebridge-one-parent">
            <img
              className="icon-park-outlinebridge-one"
              alt=""
              src="/iconparkoutlinebridgeone.svg"
            />
            <b className="swap">Bridge</b>
          </div>
        </div>
        <div className="tokens">Tokens</div>
        <div className="eth-parent">
          <div className="eth">
            <span>{`20 `}</span>
            <span className="eth1">ETH</span>
          </div>
          <img
            className="bigraph-up-arrow-icon"
            alt=""
            src="/bigraphuparrow.svg"
          />
        </div>
        <img className="frame-child7" alt="" src="/group-10.svg" />
        <div className="frame-child8" />
        <div className="eth2">20 ETH</div>
        <div className="div1">$2,500</div>
        <img className="frame-child9" alt="" src="/group-11.svg" />
        <div className="frame-child10" />
      </div>
      <div className="wallet-item" />
      <div className="healthiconscoins-parent">
        <img className="healthiconscoins" alt="" src="/healthiconscoins.svg" />
        <img
          className="healthiconscoins"
          alt=""
          src="/mdistarminusoutline.svg"
        />
        <img
          className="healthiconscoins"
          alt=""
          src="/tableractivityheartbeat.svg"
        />
      </div>
      <div className="assets">Assets</div>
      <div className="nfts">Nft’s</div>
      <div className="activity">Activity</div>
      <img
        className="material-symbolscontent-copy-icon1"
        alt=""
        src="/materialsymbolscontentcopyoutlinerounded.svg"
      />
      <img
        className="material-symbolsarrow-drop-do-icon2"
        alt=""
        src="/materialsymbolsarrowdropdowncirclerounded.svg"
      />
    </div>
  );
};

export default Wallet;
