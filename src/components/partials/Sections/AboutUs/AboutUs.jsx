import AboutDescription from "./AboutDescription/AboutDescription";
import AboutImage from "./AboutImage/AboutImage";

function AboutUs() {
  return (
    <section className="flex justify-between gap-20">
      <div className="self-center">
        <AboutDescription />
      </div>
      <div className="w-1/2">
        <AboutImage />
      </div>
    </section>
  );
}

export default AboutUs;
