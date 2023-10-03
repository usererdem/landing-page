import React from "react";
// Global Style
import GlobalStyle from "./components/GlobalStyle";
// Import Pages
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import Nav from "./components/Nav";
import MovieDetail from "./pages/MovieDetail";
// Router
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path='/' exact element={<AboutUs />} />

        <Route path='/work' exact element={<OurWork />} />
        <Route path='/work/:id' exact element={<MovieDetail />} />

        <Route path='/contact' exact element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
