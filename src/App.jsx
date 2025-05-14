import { useState } from "react";
import PLANTS from "./data";
import Plants from "./Plants/Plants";
import Cart from "./Cart/Cart";

export default function App() {
  const [plants, setPlants] = useState(PLANTS);
  const [cartItems, setCartItems] = useState([]);

  function subtractFromCart(selectedPlant) {
    if (selectedPlant.quantity > 1) {
      const updatedCartItems = cartItems.map((plant) => {
        if (plant.id === selectedPlant.id && plant.quantity > 0) {
          return { ...plant, quantity: plant.quantity - 1 };
        }
        return plant;
      });
      setCartItems(updatedCartItems);
    } else {
      setCartItems(cartItems.filter((plant) => plant.id !== selectedPlant.id));
    }
  }

  function addToCart(selectedPlant) {
    const itemFound = cartItems.find((plant) => plant.id === selectedPlant.id);

    if (itemFound) {
      const updatedCartItems = cartItems.map((plant) => {
        if (plant.id === itemFound.id) {
          return { ...plant, quantity: plant.quantity + 1 };
        }
        return plant;
      });
      setCartItems(updatedCartItems);
    } else {
      setCartItems([
        ...cartItems,
        {
          id: selectedPlant.id,
          image: selectedPlant.image,
          name: selectedPlant.name,
          quantity: 1,
        },
      ]);
    }
  }

  return (
    <>
      <h1>Proper Plants</h1>
      <main>
        <section>
          <h2>Plants</h2>
          <Plants
            plants={plants}
            // cartItems={cartItems}
            setCartItems={setCartItems}
            addToCart={addToCart}
          />
        </section>
        <section>
          <h2>Cart</h2>
          <Cart
            cartItems={cartItems}
            addToCart={addToCart}
            subtractFromCart={subtractFromCart}
          />
        </section>
      </main>
    </>
  );
}
