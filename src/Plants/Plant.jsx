import "./Plants.css";

function Plant({ addToCart, plant }) {
  return (
    <>
      <li className="plant-item">
        <figure>{plant.image}</figure>
        <h3>{plant.name}</h3>
        <button
          onClick={() => {
            addToCart(plant);
          }}
        >
          Add to cart
        </button>
      </li>
    </>
  );
}

export default Plant;
