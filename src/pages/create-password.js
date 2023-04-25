import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./create-password.css";
const CreatePassword = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/wallet-created");
  }, [navigate]);

  return (
    <div className="create-password">
      <img className="component-1-icon9" alt="" src="/component-1.svg" />
      <img className="create-password-child" alt="" src="/rectangle-2.svg" />
      <div className="create-password-for-this-walle-parent">
        <div className="create-password-for-container">
          <p className="create-password-for">Create Password for this</p>
          <p className="create-password-for">wallet</p>
        </div>
        <button className="create-wallet-wrapper" onClick={onFrameButtonClick}>
          <b className="create-wallet">Create wallet</b>
        </button>
        <div className="frame-child49" />
        <b className="create-password1">Create Password</b>
        <div className="frame-child50" />
        <b className="confirm-password">Confirm Password</b>
      </div>
    </div>
  );
};

export default CreatePassword;
