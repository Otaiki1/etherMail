import Button from "../UI/Button";

export default function SendForm(props) {
  return (
    <form className="text-darkgray pt-8 px-6">
      <h2 className="text-[1rem] font-semibold">Send ETH</h2>
      <div className="flex justify-center">
        <img className="w-[2.69rem] h-[2.69rem]" alt="" src="/group-102.svg" />
      </div>
      <div className="mt-2">
        <label className="text-sm font-semibold" htmlFor="walletaddress">
          Recipients Wallet Address
        </label>
        <input
          className="bg-white w-[24.06rem] h-[4.13rem]"
          type="text"
          id="walletaddress"
        />
      </div>
      <div className="mt-2">
        <label className="text-sm font-semibold" htmlFor="amount">
          Amount
        </label>
        <input
          className="bg-white w-[24.06rem] h-[4.13rem]"
          type="number"
          id="amount"
        />
        <span className="text-sm">0.00</span>
      </div>
      <div className="mt-6 flex justify-between">
        <Button extraClass="bg-gray-100 text-white">Cancel</Button>
        <Button
          extraClass="bg-white text-black"
          clickHandler={props.submitForm}
        >
          Send
        </Button>
      </div>
    </form>
  );
}
