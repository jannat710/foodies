function SectionTitle({ mainText, subText, alignment = "center", subTitle }) {
  return (
    <div className="space-y-10" style={{ textAlign: alignment }}>
      <h1>
        {mainText} <span>{subText}</span>
      </h1>
      <h6>{subTitle}</h6>
    </div>
  );
}

export default SectionTitle;
