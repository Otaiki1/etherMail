import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./wallet-created.css";
const WalletCreated = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/wallet");
  }, [navigate]);

  const onRectangleCheckboxClick = useCallback(() => {
    //TODO: allowbuttonclick
  }, []);

  return (
    <div className="wallet-created">
      <img className="pheye-slash-icon" alt="" src="/pheyeslash.svg" />
      <img className="component-1-icon8" alt="" src="/component-1.svg" />
      <img className="wallet-created-child" alt="" src="/rectangle-2.svg" />
      <div className="wallet-created-successfully-parent">
        <div className="wallet-created-successfully-container">
          <p className="successfully">Wallet created</p>
          <p className="successfully">Successfully</p>
        </div>
        <button className="open-zi-wallet-wrapper" onClick={onFrameButtonClick}>
          <b className="open-zi-wallet">Open Zi wallet</b>
        </button>
        <div className="group-container">
          <div className="juliet-parent">
            <b className="juliet">Juliet</b>
            <b className="gabriel">Gabriel</b>
            <b className="caleb">Caleb</b>
          </div>
          <div className="juliet-group">
            <b className="pelumi">Juliet</b>
            <b className="gabriel1">Gabriel</b>
            <b className="caleb">Caleb</b>
          </div>
          <div className="esther-parent">
            <b className="esther">Esther</b>
            <b className="ot46384">OT46384</b>
            <b className="pelumi">Pelumi</b>
          </div>
          <div className="esther-group">
            <b className="esther1">Esther</b>
            <b className="esther">Oyin</b>
            <b className="pelumi">Isaac</b>
          </div>
          <img className="pheye-slash-icon1" alt="" src="/pheyeslash1.svg" />
        </div>
        <b className="recovery-phrase">Recovery Phrase</b>
        <input
          className="rectangle-input"
          type="checkbox"
          onClick={onRectangleCheckboxClick}
        />
        <b className="i-have-saved">I have saved my secret recovery phrase</b>
      </div>
    </div>
  );
};

export default WalletCreated;
