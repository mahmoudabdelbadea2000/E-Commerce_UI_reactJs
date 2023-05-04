import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer, Header } from "./components/utility";
import BlogPage from "./pages/blog/BlogPage";
import HomePage from "./pages/home/HomePage";
import OurStorePage from "./pages/ourStore/OurStorePage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collections/our-store" element={<OurStorePage />} />
        <Route path="our-blogs" element={<BlogPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
