function SectionTitle({
  mainText,
  subText,
  alignment = "center",
  subTitle1,
  subTitle2,
}) {
  return (
    <div className="space-y-10" style={{ textAlign: alignment }}>
      <h1>
        {mainText} <span>{subText}</span>
      </h1>
      <h6>{subTitle1}</h6>
      <h6>{subTitle2}</h6>
    </div>
  );
}

export default SectionTitle;
