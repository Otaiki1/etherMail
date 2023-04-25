import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./send3.css";
const Send3 = () => {
  const navigate = useNavigate();

  const onRectangleButtonClick = useCallback(() => {
    navigate("/send1");
  }, [navigate]);

  return (
    <div className="send4">
      <img className="component-1-icon6" alt="" src="/component-1.svg" />
      <img className="send-child1" alt="" src="/rectangle-2.svg" />
      <div className="rectangle-parent21">
        <div className="frame-child34" />
        <img className="frame-child35" alt="" src="/ellipse-1.svg" />
        <b className="zi7">zi</b>
        <div className="ethereum-mainet-parent4">
          <div className="ethereum-mainet6">Ethereum mainet</div>
          <img
            className="material-symbolsarrow-drop-do-icon9"
            alt=""
            src="/materialsymbolsarrowdropdownrounded1.svg"
          />
        </div>
      </div>
      <div className="rectangle-parent22">
        <div className="frame-child36" />
        <div className="xe8984ef2dadb5b34746">0xe8984ef2dadb5b3474</div>
        <div className="send-eth3">Send ETH</div>
        <div className="recipients-wallet-address1">
          Recipient’s wallet address
        </div>
        <div className="frame-child37" />
        <div className="amount1">Amount</div>
        <div className="frame-child38" />
        <div className="frame-child39" />
        <button className="frame-child40" onClick={onRectangleButtonClick} />
        <img className="frame-child41" alt="" src="/group-123.svg" />
        <img
          className="material-symbolsarrow-circle-icon3"
          alt=""
          src="/materialsymbolsarrowcircleleftrounded.svg"
        />
        <div className="div7">0.00</div>
        <b className="cancel1">Cancel</b>
        <b className="send5">Send</b>
      </div>
      <img
        className="material-symbolscontent-copy-icon6"
        alt=""
        src="/materialsymbolscontentcopyoutlinerounded3.svg"
      />
    </div>
  );
};

export default Send3;
