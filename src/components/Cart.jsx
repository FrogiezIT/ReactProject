import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, total } = useCart();

  return (
    <div className="bg-white py-2 px-3 w-1/2 m-auto">
      <table className="table-auto border-collapse border-spacing-2 border border-gray-400 dark:border-gray-500 w-full">
        <thead>
          <tr>
            <th className="border border-gray-300 dark:border-gray-600">Name</th>
            <th className="border border-gray-300 dark:border-gray-600">Price</th>
          </tr>
        </thead>
        <tbody>

          {cart.length === 0 && <p>Cart is empty</p>}

          {cart.map((item, index) => (
            <tr key={index}>
              <td className="border border-gray-300 dark:border-gray-700">{item.name}</td>
              <td className="border border-gray-300 dark:border-gray-700">${item.price} </td>
              <td className="border border-gray-300 dark:border-gray-700"><button className="ml-2 cursor-pointer" onClick={() => removeFromCart(index)}>
                Remove
              </button></td>
            </tr>

          ))}
          <tr className="border border-gray-300 dark:border-gray-700 text-center">
            <td >
              <h3 className="ml-2">Total: ${total}</h3>
            </td>
          </tr>

        </tbody>
      </table>
    </div>
  );
};

export default Cart;