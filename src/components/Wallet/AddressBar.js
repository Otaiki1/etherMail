export default function AddressBar(props) {
  return (
    <div className="rounded-31xl bg-gray-100 w-[12.5rem] h-[3.25rem]">
      <p className="text-[0.88rem] font-medium text-center">{props.address}</p>
    </div>
  );
}
