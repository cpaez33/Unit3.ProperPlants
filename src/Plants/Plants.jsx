import "./Plants.css";
import Plant from "./Plant";

function Plants({ plants, addToCart }) {
  // console.log(cartItems);

  return (
    <ul className="plant-grid">
      {plants.map((plant) => (
        <Plant key={plant.id} addToCart={addToCart} plant={plant} />
      ))}
    </ul>
  );
}
export default Plants;
