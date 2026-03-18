import { useCart } from "../context/CartContext";

const products = [
  { id: 1, name: "Laptop", price: 800 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Headphones", price: 100 }
];

const ProductList = () => {
  const { addToCart } = useCart();

  return (
    <div className="flex flex-row gap-5 m-auto justify-center my-5">
      {products.map((product) => (
        <div key={product.id} className="bg-blue-950 p-5 rounded-2xl w-1/5">
          <p className="text-white">{product.name}</p>
          <p className="text-white my-3">${product.price}</p>

          <button className="bg-white text-black px-8 py-2 rounded-xs" onClick={() => addToCart(product)}>
            Add to Cart
          </button>

        </div>
      ))}
    </div>
  );
};

export default ProductList;