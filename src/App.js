import CuisineCategories from "./components/CuisineCategories";
import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CuisineCategories />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
