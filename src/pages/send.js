import "./send.css";
const Send = () => {
  return (
    <div className="send">
      <img className="component-1-icon" alt="" src="/component-1.svg" />
      <img className="send-child" alt="" src="/rectangle-2.svg" />
      <div className="rectangle-parent">
        <div className="frame-child" />
        <img className="frame-item" alt="" src="/ellipse-1.svg" />
        <b className="zi">zi</b>
        <div className="ethereum-mainet-parent">
          <div className="ethereum-mainet">Ethereum mainet</div>
          <img
            className="material-symbolsarrow-drop-do-icon"
            alt=""
            src="/materialsymbolsarrowdropdownrounded.svg"
          />
        </div>
      </div>
      <div className="rectangle-group">
        <div className="frame-inner" />
        <div className="xe8984ef2dadb5b3474">0xe8984ef2dadb5b3474</div>
        <div className="send-eth">Send ETH</div>
        <div className="recipients-wallet-address">
          Recipient’s wallet address
        </div>
        <div className="rectangle-div" />
        <div className="amount">Amount</div>
        <div className="frame-child1" />
        <div className="frame-child2" />
        <div className="frame-child3" />
        <img className="group-icon" alt="" src="/group-12.svg" />
        <img
          className="material-symbolsarrow-circle-icon"
          alt=""
          src="/materialsymbolsarrowcircleleftrounded.svg"
        />
        <div className="div">0.00</div>
        <b className="cancel">Cancel</b>
        <b className="send1">Send</b>
      </div>
      <img
        className="material-symbolscontent-copy-icon"
        alt=""
        src="/materialsymbolscontentcopyoutlinerounded.svg"
      />
    </div>
  );
};

export default Send;
