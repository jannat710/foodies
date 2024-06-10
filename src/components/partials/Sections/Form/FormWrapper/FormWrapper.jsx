import bgImage from "../../../../../assets/banner1.jpg";
function FormWrapper({ children }) {
  return (
    <div
      className="min-h-screen bg-cover relative"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {children}
    </div>
  );
}

export default FormWrapper;
