import Header from './components/header.jsx'
import Meals from './components/meals.jsx';
import { CartContextProvider } from './components/store/CartContext.jsx';

function App() {
  return (
    <>
      <Header />
      <Meals />
    </>
  );
}

export default App;
