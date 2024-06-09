function Button({ text, action, primary, className, type }) {
  return (
    <button
      type={type}
      className={`rounded-full min-w-32  ring-1 py-4 px-8 duration-300 uppercase ${
        primary
          ? "bg-primary text-white hover:bg-transparent hover:text-primary "
          : "bg-primary text-primaryColor ring-primary hover:ring-secondary hover:bg-secondary text-white hover:text-black font-semibold "
      } ${className}`}
      onClick={action}
    >
      {text}
    </button>
  );
}

export default Button;
