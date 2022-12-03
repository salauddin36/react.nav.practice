import "./style.css"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Admin from "./components/Admin"
import Product from "./components/Products"

function App() {
  return (
    <div>
      <Navbar />

      <Home />
      <Product />
      <Admin />
    </div>
  );
}

export default App;
