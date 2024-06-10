import ItemCard from "../../../ItemCard/ItemCard";
import SectionTitle from "../../Elements/SectionTitle/SectionTitle";

function Items() {
  return (
    <section>
      <SectionTitle
        mainText="View Our Tasty"
        subText="Foods"
        subTitle1={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, sint?"
        }
      />
      <ItemCard />
    </section>
  );
}

export default Items;
