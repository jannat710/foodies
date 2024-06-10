function Button({ text, icon, action, primary, className, type }) {
  const isIconButton = !!icon;
  return (
    // <button
    //   type={type}
    //   className={`rounded-full min-w-32  ring-1 py-4 px-8 duration-300 uppercase ${
    //     primary
    //       ? "bg-secondary hover:bg-primary hover:text-white font-semibold ring-secondary hover:ring-primary"
    //       : "bg-primary ring-primary hover:ring-secondary hover:bg-secondary text-white hover:text-black font-semibold "
    //   } ${className}`}
    //   onClick={action}
    // >
    //   {text}
    // </button>
    <button
      type={type}
      className={`rounded-full min-w-32 ring-1 py-4 px-8 duration-300 uppercase ${
        primary
          ? "bg-secondary hover:bg-primary hover:text-white font-semibold ring-secondary hover:ring-primary"
          : "bg-primary ring-primary hover:ring-secondary hover:bg-secondary text-white hover:text-black font-semibold "
      } ${isIconButton ? "h-10 w-10 p-2" : ""} ${className}`}
      onClick={action}
    >
      {isIconButton ? (
        <img src={icon} alt="" className="w-full h-full" />
      ) : (
        text
      )}
    </button>
  );
}

export default Button;
