import { useCart } from "../context/CartContext";

const products = [
  { id: 1, name: "Laptop", price: 800 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Headphones", price: 100 }
];

const ProductList = () => {
  const { addToCart } = useCart();

  return (
    <div>
      <h2>Products</h2>

      {products.map((product) => (
        <div key={product.id}>
          <p>{product.name} - ${product.price}</p>

          <button onClick={() => addToCart(product)}>
            Add to Cart
          </button>

        </div>
      ))}
    </div>
  );
};

export default ProductList;