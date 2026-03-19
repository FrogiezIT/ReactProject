import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
                   <h1>Shopping Cart</h1>
      
      
      
      <ProductList />
               <Cart />
    </CartProvider>
  );
}

export default App;