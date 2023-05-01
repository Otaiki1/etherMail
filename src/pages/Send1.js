import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Frame from "../components/UI/Frame";
import WalletTopNav from "../components/Wallet/WalletTopNav";
import InfoBox from "../components/Send/InfoBox";

const Send1 = () => {
  const navigate = useNavigate();

  const onRectangle3Click = useCallback(() => {
    navigate("/wallet");
  }, [navigate]);

  return (
    <Frame>
      <WalletTopNav />

      <div className="bg-whitesmoke h-[88%] rounded-t-lg">
        <InfoBox
          infoText="Recipient is yet to claim token Do you want to cancel Transaction"
          failureText="No"
          successText="Yes"
          successHandler={onRectangle3Click}
        />
      </div>
    </Frame>
  );
};

export default Send1;
