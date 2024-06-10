import Button from "../../../Elements/Button/Button";

function HeroDetails() {
  return (
    <>
      <div className="space-y-10 text-center md:text-left">
        <h3 className="uppercase">New reswtaurant</h3>
        <h1>Where every ingredients tells a story</h1>
      </div>
      <Button text={"Read More"} />
    </>
  );
}

export default HeroDetails;
