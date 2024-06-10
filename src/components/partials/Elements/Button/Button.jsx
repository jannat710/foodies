function Button({ text, image, action, primary, className, type }) {
  return (
    <button
      type={type}
      className={`rounded-full ${
        image ? "h-10 w-10 p-2" : "min-w-32 py-4 px-8"
      } duration-300 uppercase ring-1 ${
        primary
          ? "bg-secondary hover:bg-primary hover:text-white font-semibold ring-secondary hover:ring-primary"
          : "bg-primary ring-primary hover:ring-secondary hover:bg-secondary text-white hover:text-black font-semibold"
      } ${className}`}
      onClick={action}
    >
      {image ? <img src={image} alt="" /> : text}
    </button>
  );
}

export default Button;
