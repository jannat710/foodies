import BoxCircle from "./BoxCircle/BoxCircle";
import HeroDetails from "./HeroDetails/HeroDetails";
import HeroWrapper from "./HeroWrapper/HeroWrapper";
function Hero() {
  return (
    <HeroWrapper>
      <div className="absolute inset-0 lg:left-0 flex flex-col items-center lg:items-start justify-center pl-0 lg:pl-40 space-y-10">
        <BoxCircle />
        <HeroDetails />
      </div>
    </HeroWrapper>
  );
}

export default Hero;
