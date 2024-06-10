function Menu() {
  const menuData = [
    {
      id: 1,
      name: "Fresh Food",
      image: "https://i.postimg.cc/RZxWB5Pj/menu1.jpg",
    },
    {
      id: 2,
      name: "Fresh Food",
      image: "https://i.postimg.cc/XvVXrK6L/menu2.jpg",
    },
    {
      id: 3,
      name: "Fresh Food",
      image: "https://i.postimg.cc/Bn5XZYkt/menu3.jpg",
    },
  ];
  return (
    <section className="grid lg:grid-cols-3 gap-32 ">
      {menuData.map((item) => (
        <div
          key={item.id}
          className="h-80 bg-cover relative flex items-center justify-center rounded-2xl max-w-xl"
          style={{
            backgroundImage: `url(${item.image})`,
          }}
        >
          <h3>{item.name}</h3>
        </div>
      ))}
    </section>
  );
}

export default Menu;
