import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./wallet2.css";
const Wallet2 = () => {
  const navigate = useNavigate();

  const onRectangle10Click = useCallback(() => {
    navigate("/wallet2");
  }, [navigate]);

  return (
    <div className="wallet2">
      <img className="component-1-icon4" alt="" src="/component-1.svg" />
      <img className="rectangle-icon" alt="" src="/rectangle-2.svg" />
      <div className="rectangle-parent12">
        <div className="frame-child21" />
        <img className="frame-child22" alt="" src="/ellipse-1.svg" />
        <b className="zi4">zi</b>
        <div className="ethereum-mainet-parent2">
          <div className="ethereum-mainet4">Ethereum mainet</div>
          <img
            className="material-symbolsarrow-drop-do-icon6"
            alt=""
            src="/materialsymbolsarrowdropdownrounded.svg"
          />
        </div>
      </div>
      <div className="rectangle-parent13">
        <div className="frame-child23" />
        <div className="frame-child24" />
        <div className="xe8984ef2dadb5b34744">0xe8984ef2dadb5b3474</div>
        <div className="usd5">$2,500USD</div>
        <div className="rectangle-parent14">
          <div className="group-child10" />
          <div className="material-symbolsadd-card-outl-group">
            <img
              className="material-symbolsadd-card-outl-icon1"
              alt=""
              src="/materialsymbolsaddcardoutlinerounded.svg"
            />
            <b className="buy1">Buy</b>
          </div>
        </div>
        <div className="rectangle-parent15">
          <div className="group-child10" />
          <div className="material-symbolsadd-card-outl-group">
            <img
              className="material-symbolsadd-card-outl-icon1"
              alt=""
              src="/mdiarrowbottomrightboldboxoutline.svg"
            />
            <b className="sell1">Sell</b>
          </div>
        </div>
        <div className="rectangle-parent16">
          <div className="group-child10" />
          <div className="material-symbolsswap-horiz-ro-group">
            <img
              className="material-symbolsswap-horiz-ro-icon1"
              alt=""
              src="/materialsymbolsswaphorizrounded1.svg"
            />
            <b className="swap1">Swap</b>
          </div>
        </div>
        <div className="rectangle-parent17">
          <div className="group-child10" />
          <div className="icon-park-outlinebridge-one-group">
            <img
              className="icon-park-outlinebridge-one1"
              alt=""
              src="/iconparkoutlinebridgeone.svg"
            />
            <b className="swap1">Bridge</b>
          </div>
        </div>
        <div className="tokens2">Tokens</div>
        <div className="eth-group">
          <div className="eth3">
            <span>{`20 `}</span>
            <span className="eth4">ETH</span>
          </div>
          <img
            className="bigraph-up-arrow-icon1"
            alt=""
            src="/bigraphuparrow.svg"
          />
        </div>
        <img className="frame-child25" alt="" src="/group-101.svg" />
        <div className="frame-child26" />
        <div className="eth5">20 ETH</div>
        <div className="div6">$2,500</div>
        <img className="frame-child27" alt="" src="/group-112.svg" />
      </div>
      <div className="wallet-child2" />
      <div className="healthiconscoins-container">
        <img
          className="healthiconscoins2"
          alt=""
          src="/healthiconscoins1.svg"
        />
        <img
          className="healthiconscoins2"
          alt=""
          src="/mdistarminusoutline.svg"
        />
        <img
          className="healthiconscoins2"
          alt=""
          src="/tableractivityheartbeat.svg"
        />
      </div>
      <div className="assets2">Assets</div>
      <div className="nfts2">Nft’s</div>
      <div className="activity2">Activity</div>
      <img
        className="material-symbolscontent-copy-icon4"
        alt=""
        src="/materialsymbolscontentcopyoutlinerounded.svg"
      />
      <img
        className="material-symbolsarrow-drop-do-icon7"
        alt=""
        src="/materialsymbolsarrowdropdowncirclerounded.svg"
      />
      <div className="ellipse-parent">
        <img className="frame-child28" alt="" src="/ellipse-3.svg" />
        <b className="zi5">zi</b>
        <div className="you-have-received-container">
          <p className="you-have-received">You have received 2.ETH from</p>
          <p className="you-have-received">0x75759678695894fgfhf837364</p>
        </div>
        <div className="rectangle-parent18">
          <div className="group-child14" onClick={onRectangle10Click} />
          <div className="group-child15" />
          <b className="claim">Claim</b>
          <b className="reject">Reject</b>
        </div>
        <b className="notification">Notification</b>
      </div>
    </div>
  );
};

export default Wallet2;
