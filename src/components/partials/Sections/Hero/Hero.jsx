import Button from "../../Elements/Button/Button";
import Title from "../../Elements/Title/Title";
import BoxCircle from "./BoxCircle/BoxCircle";
import HeroWrapper from "./HeroWrapper/HeroWrapper";
function Hero() {
  return (
    <HeroWrapper>
      <div className="absolute inset-y-0 left-0 content-center *:py-5 pl-40">
        <BoxCircle />
        <Title className="uppercase text-white" text={"New reswtaurant"} />
        <Title
          className=" text-white "
          mainHeading
          text={"Where every ingredients tells a story"}
        />
        <Button text={"Read More"} />
      </div>
    </HeroWrapper>
  );
}

export default Hero;
