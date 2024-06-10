import Button from "../../../Elements/Button/Button";


function InputGroup() {
  return (
    <div className="space-x-6">
      <input className="input_styles" placeholder="Enter your valid email" />
      <Button text={"Read More"} />
    </div>
  );
}

export default InputGroup
