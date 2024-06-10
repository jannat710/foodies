import hero from "../../../../../assets/hero.jpg";
function HeroWrapper({ children }) {
  return (
    <div
      className="min-h-screen bg-cover relative"
      style={{
        backgroundImage: `url(${hero})`,
      }}
    >
      <div className="opacity" />
      <div style={{ zIndex: 1 }}>{children}</div>
    </div>
  );
}

export default HeroWrapper;
