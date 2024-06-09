function Title({ text, mainHeading, className }) {
  return (
    <h3
      className={`${
        mainHeading ? "text-6xl font-medium" : "text-3xl font-medium"
      } ${className}`}
    >
      {text} <br />
    </h3>
  );
}

export default Title;
