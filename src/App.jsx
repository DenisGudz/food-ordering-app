import Cart from './components/Cart.jsx';
import Header from './components/header.jsx'
import Meals from './components/meals.jsx';
import { CartContextProvider } from './components/store/CartContext.jsx';
import UserProgressContextProvider from './components/store/UserProgressContext.jsx';
import Checkout from './components/checkout.jsx';
function App() {

  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart />
        <Checkout />
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
