import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, total } = useCart();

  return (
    <div className="bg-white flex justify-between m-auto w-fit py-2 px-3">
    
      {cart.length === 0 && <p>Cart is empty</p>}

      {cart.map((item, index) => (
        <div key={index}>
          {item.name}  ${item.price} 

          <button className="ml-2" onClick={() => removeFromCart(index)}>
            Remove
          </button>
        </div>
      ))}

      <h3 className="ml-2">Total: ${total}</h3>
    </div>
  );
};

export default Cart;