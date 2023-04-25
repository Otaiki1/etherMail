import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./newimport.css";
const Newimport = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/create-password");
  }, [navigate]);

  return (
    <div className="newimport">
      <img className="component-1-icon10" alt="" src="/component-11.svg" />
      <img className="newimport-child" alt="" src="/rectangle-2.svg" />
      <div className="this-creates-a-new-wallet-and-parent">
        <div className="this-creates-a">
          This creates a new wallet and a 12-word recovery phrase.
        </div>
        <div className="we-can-have">We can have you set up one now</div>
        <button className="group-wrapper" onClick={onFrameButtonClick}>
          <div className="create-wallet-parent">
            <b className="import-wallet">Create Wallet</b>
            <img
              className="material-symbolsadd-icon"
              alt=""
              src="/materialsymbolsadd.svg"
            />
          </div>
        </button>
        <div className="new-to-zi">New to Zi Wallet?</div>
      </div>
      <div className="we-can-have-you-set-up-one-now-parent">
        <div className="we-can-have1">We can have you set up one now</div>
        <button className="group-wrapper">
          <div className="import-wallet-parent">
            <b className="import-wallet">Import Wallet</b>
            <img
              className="material-symbolsadd-icon1"
              alt=""
              src="/materialsymbolsadd.svg"
            />
          </div>
        </button>
        <div className="import-wallet1">Import Wallet</div>
        <div className="import-your-existing">
          Import your existing wallet by entering the 12-word recovery phrase.
        </div>
      </div>
    </div>
  );
};

export default Newimport;
