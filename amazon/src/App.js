import { Routes, Route } from "react-router-dom";

import {HomePage,Navbar,Checkout,SearchResults,ProductPage} from "./components/index"

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/checkout" element={<Checkout />} />

      </Routes>
    </>
  );
}

export default App;
