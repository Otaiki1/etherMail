import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./send1.css";
const Send1 = () => {
  const navigate = useNavigate();

  const onRectangle3Click = useCallback(() => {
    navigate("/wallet");
  }, [navigate]);

  return (
    <div className="send2">
      <img className="component-1-icon2" alt="" src="/component-1.svg" />
      <img className="send-item" alt="" src="/rectangle-2.svg" />
      <div className="rectangle-parent4">
        <div className="frame-child11" />
        <img className="frame-child12" alt="" src="/ellipse-1.svg" />
        <b className="zi2">zi</b>
        <div className="ethereum-mainet-container">
          <div className="ethereum-mainet2">Ethereum mainet</div>
          <img
            className="material-symbolsarrow-drop-do-icon3"
            alt=""
            src="/materialsymbolsarrowdropdownrounded.svg"
          />
        </div>
      </div>
      <div className="rectangle-parent5">
        <div className="frame-child13" />
        <div className="xe8984ef2dadb5b34742">0xe8984ef2dadb5b3474</div>
        <div className="send-eth1">Send ETH</div>
        <div className="frame-child14" onClick={onRectangle3Click} />
        <div className="frame-child15" />
        <img className="frame-child16" alt="" src="/group-121.svg" />
        <img
          className="material-symbolsarrow-circle-icon1"
          alt=""
          src="/materialsymbolsarrowcircleleftrounded.svg"
        />
        <b className="yes">Yes</b>
        <b className="no">No</b>
        <b className="recipient-is-yet-container">
          <p className="recipient-is-yet">Recipient is yet to claim token</p>
          <p className="recipient-is-yet">Do you want to cancel</p>
          <p className="recipient-is-yet">Transaction</p>
        </b>
      </div>
      <img
        className="material-symbolscontent-copy-icon2"
        alt=""
        src="/materialsymbolscontentcopyoutlinerounded1.svg"
      />
    </div>
  );
};

export default Send1;
