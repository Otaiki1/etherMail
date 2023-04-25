import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./welcome.css";
const Welcome = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/newimport");
  }, [navigate]);

  return (
    <div className="welcome">
      <img className="component-1-icon11" alt="" src="/component-1.svg" />
      <img className="welcome-child" alt="" src="/rectangle-2.svg" />
      <div className="buy-store-send-and-swap-toke-parent">
        <div className="buy-store-send-container">
          <p className="p">&nbsp;</p>
          <p className="p">{` `}</p>
          <p className="p">Buy, store, send and swap tokens</p>
          <p className="p">Explore blockchain apps</p>
        </div>
        <div className="connecting-you-to">
          Connecting you to the decentralized web
        </div>
        <div className="welcome-to-zi">Welcome to ZI Wallet</div>
        <button className="frame-button" onClick={onFrameButtonClick}>
          <div className="get-started-parent">
            <b className="get-started">Get Started</b>
            <img
              className="material-symbolsarrow-right-a-icon"
              alt=""
              src="/materialsymbolsarrowrightaltrounded.svg"
            />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Welcome;
