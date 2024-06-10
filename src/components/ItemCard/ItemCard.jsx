import Button from "../partials/Elements/Button/Button";

function ItemCard() {
  const dishes = [
    {
      id: 1,
      name: "Dish 1",
      image: "https://i.postimg.cc/TwSGpnJ1/dish1.jpg",
      details: "Delicious pasta with tomato sauce and fresh basil leaves.",
    },
    {
      id: 2,
      name: "Dish 2",
      image: "https://i.postimg.cc/9zHhBVSj/dish2.jpg",
      details: "Succulent grilled chicken with steamed vegetables and lemon.",
    },
    {
      id: 3,
      name: "Dish 3",
      image: "https://i.postimg.cc/6624z0SH/dish3.jpg",
      details:
        "Creamy risotto with mushrooms, parmesan cheese, and truffle oil.",
    },
    {
      id: 4,
      name: "Dish 4",
      image: "https://i.postimg.cc/5yCJvjs3/dish4.jpg",
      details:
        "Tender beef steak cooked to perfection with garlic butter sauce.",
    },
  ];
  return (
    <div className="grid lg:grid-cols-2 gap-10 py-10">
      {dishes.map((item) => (
        <div key={item.id}>
          <div class="max-w-xl w-full mx-auto bg-gray-800 rounded-b-3xl overflow-hidden">
            <img src={item.image} alt="" />
            <div class=" bg-gray-900 text-center space-y-5 py-5">
              <h3>{item.name}</h3>
              <h6>{item.details}</h6>
              <Button primary text={"Order Now"} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemCard;
