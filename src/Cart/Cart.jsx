import CartItem from "./CartItems";
import "./Cart.css";

function Cart({ cartItems, addToCart, subtractFromCart }) {
  return (
    <>
      {cartItems.length === 0 && <p>Your cart is empty.</p>}
      {cartItems.length > 0 && (
        <ul>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              addToCart={addToCart}
              subtractFromCart={subtractFromCart}
            />
          ))}
        </ul>
      )}
    </>
  );
}

export default Cart;
