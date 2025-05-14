import "./Cart.css";

function CartItem({ item, addToCart, subtractFromCart }) {
  return (
    <>
      <li className="cart-item">
        <div>
          {item.image} {item.name}
        </div>
        <div className="cart-quantity-box">
          <button
            onClick={() => {
              subtractFromCart(item);
            }}
          >
            -
          </button>
          <span>{item.quantity}</span>
          <button
            onClick={() => {
              addToCart(item);
            }}
          >
            +
          </button>
        </div>
      </li>
    </>
  );
}

export default CartItem;
