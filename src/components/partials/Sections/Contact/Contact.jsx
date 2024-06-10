import phone from "../../../../assets/icons/phone.svg";
function Contact() {
  return (
    <button className="bg-secondary hover:bg-primary rounded-full h-10 w-10 p-2">
      <img src={phone} alt="" />
    </button>
  );
}

export default Contact;
