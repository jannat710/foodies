import phone from "../../../../assets/icons/phone.svg";
import Button from "../../Elements/Button/Button";
function ContactUs() {
  const data = [
    {
      id: 1,
      title: "CALL US",
      schedule: "Mon-Fri from 8am to 5am",
      phoneNumber: "+91 890 987 7809",
      icon: "phone icon",
    },
    {
      id: 2,
      title: "REACH US",
      schedule: "Mon-Fri from 8am to 5am",
      phoneNumber: "+91 890 987 7809",
      icon: "phone icon",
    },
    {
      id: 3,
      title: "MAIL US",
      schedule: "Mon-Fri from 8am to 5am",
      phoneNumber: "+91 890 987 7809",
      imageId: "image_id",
    },
  ];
  return (
    <section>
      <div className="grid lg:grid-cols-3">
        {data.map((item) => (
          <div key={item.id}>
            <div class="max-w-xl w-full mx-auto  rounded-xl overflow-hidden ">
              <div class="max-w-sm mx-auto pt-12 pb-8 px-5 text-center">
                {/* image */}
                <Button image={phone} primary={false} className="w-16 h-16" />
                <h4>{item.title}</h4>
                <h6>{item.schedule}</h6>
                <h4 className="text-primary">{item.phoneNumber}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ContactUs;
