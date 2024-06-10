import Button from "../../../Elements/Button/Button";

function InputGroup() {
  return (
    <div className="flex-row lg:flex space-x-0 lg:space-x-6 space-y-6 lg:space-y-0">
      <input className="input_styles" placeholder="Enter your valid email" />
      <Button text={"Read More"} />
    </div>
  );
}

export default InputGroup;
