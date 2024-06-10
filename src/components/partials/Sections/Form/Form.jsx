import FormDetails from "./FormDetails/FormDetails";
import FormWrapper from "./FormWrapper/FormWrapper";
import InputGroup from "./Inputgroup/InputGroup";
function Form() {
  return (
    <FormWrapper>
      <div className="opacity" />
      <div style={{ zIndex: 1 }}>
        <div className="absolute inset-y-0 left-0 content-center pl-40 space-y-10">
          <FormDetails />
          <InputGroup />
        </div>
      </div>
    </FormWrapper>
  );
}

export default Form;
