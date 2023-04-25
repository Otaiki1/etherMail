import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./send2.css";
const Send2 = () => {
  const navigate = useNavigate();

  const onRectangleButtonClick = useCallback(() => {
    navigate("/send");
  }, [navigate]);

  return (
    <div className="send3">
      <img className="component-1-icon5" alt="" src="/component-1.svg" />
      <img className="send-inner" alt="" src="/rectangle-2.svg" />
      <div className="rectangle-parent19">
        <div className="frame-child29" />
        <img className="frame-child30" alt="" src="/ellipse-1.svg" />
        <b className="zi6">zi</b>
        <div className="ethereum-mainet-parent3">
          <div className="ethereum-mainet5">Ethereum mainet</div>
          <img
            className="material-symbolsarrow-drop-do-icon8"
            alt=""
            src="/materialsymbolsarrowdropdownrounded.svg"
          />
        </div>
      </div>
      <div className="rectangle-parent20">
        <div className="frame-child31" />
        <div className="xe8984ef2dadb5b34745">0xe8984ef2dadb5b3474</div>
        <div className="send-eth2">Send ETH</div>
        <div className="frame-child32" />
        <button className="rectangle-button" onClick={onRectangleButtonClick} />
        <img className="frame-child33" alt="" src="/group-122.svg" />
        <img
          className="material-symbolsarrow-circle-icon2"
          alt=""
          src="/materialsymbolsarrowcircleleftrounded.svg"
        />
        <b className="reject1">Reject</b>
        <b className="confirm">Confirm</b>
        <b className="you-are-sending-container">
          <p className="you-are-sending">You are sending 20.ETH to</p>
          <p className="you-are-sending">&nbsp;</p>
          <p className="you-are-sending">0x647464585758gdh</p>
        </b>
      </div>
      <img
        className="material-symbolscontent-copy-icon5"
        alt=""
        src="/materialsymbolscontentcopyoutlinerounded2.svg"
      />
    </div>
  );
};

export default Send2;
