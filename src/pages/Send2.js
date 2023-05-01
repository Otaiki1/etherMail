import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import InfoBox from "../components/Send/InfoBox";
import Frame from "../components/UI/Frame";
import WalletTopNav from "../components/Wallet/WalletTopNav";

const Send2 = () => {
  const navigate = useNavigate();

  const onRectangleButtonClick = useCallback(() => {
    navigate("/send1");
  }, [navigate]);

  return (
    <Frame>
      <WalletTopNav />

      <div className="bg-whitesmoke h-[88%] rounded-t-lg">
        <InfoBox
          infoText="You are sending 20.ETH to 0x647464585758gdh"
          failureText="Reject"
          successText="confirm"
          successHandler={onRectangleButtonClick}
        />
      </div>
    </Frame>
  );
};

export default Send2;
