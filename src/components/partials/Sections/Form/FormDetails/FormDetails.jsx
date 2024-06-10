import SectionTitle from "../../../Elements/SectionTitle/SectionTitle";
import BoxCircle from "../../Hero/BoxCircle/BoxCircle";

function FormDetails() {
  return (
    <>
      <BoxCircle />
      <div className="space-y-10">
        <SectionTitle
          mainText="Keep up to date with us"
          alignment="left"
          subTitle1={`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis,
          nulla!`}
        />
      </div>
    </>
  );
}

export default FormDetails;
