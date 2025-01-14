import { useState } from "react";
import Header from "./containers/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import ProductComponent from "./containers/ProductComponent";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/productListing" element={<ProductListing />} />
            <Route path="/productComponent" element={<ProductComponent />} />
            <Route path="*" element={<div>404 not found</div>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
