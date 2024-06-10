import Button from "../../../Elements/Button/Button";
import SectionTitle from "../../../Elements/SectionTitle/SectionTitle";

function AboutDescription() {
  return (
    <div className="space-y-10">
      <SectionTitle mainText="About" subText="Us" alignment="left" />
      <h6>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        similique unde iure laborum molestias repudiandae vel sunt animi nulla
        obcaecati ipsa, quam delectus officiis, dolorum a, autem labore velit
        alias!
      </h6>
      <h6>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        similique unde iure laborum molestias repudiandae vel sunt animi nulla
        obcaecati ipsa, quam delectus officiis, dolorum a, autem labore velit
        alias!
      </h6>
      <Button text={"Order Now"} />
    </div>
  );
}

export default AboutDescription;
