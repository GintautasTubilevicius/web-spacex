import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage, Error, Coctails, SingleCoctail, Drinks, SingleDrink, Favorites, Gin, NonAlcoholic } from "./pages";
import { Footer, Header } from "./Components";
import List from "./pages/List";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="*" element={<Error />}></Route>
        <Route path="/coctails" element={<Coctails />}></Route>
        <Route path="/coctails/:idDrink" element={<SingleCoctail />}></Route>
        <Route path="/drinks" element={<Drinks />}></Route>
        <Route path="/drinks/:idDrink" element={<SingleDrink />}></Route>
        <Route path="/nonalcoholic" element={<NonAlcoholic />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
        <Route path="/gin" element={<Gin />}></Route>
        <Route path="/list/:letter" element={<List />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
