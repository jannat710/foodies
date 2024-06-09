import Title from "../../../Elements/Title/Title";

function BoxCircle() {
  return (
    <div className="bg-green-800 rounded-full h-60 w-60 flex items-center justify-center text-center">
      <div className="">
        <Title mainHeading text={"40%"} />
        <h4 className="uppercase">
          Business <br></br>Lunch
        </h4>
      </div>
    </div>
  );
}

export default BoxCircle;
