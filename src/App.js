import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer, Header } from "./components/utility";
import {
  BlogPage,
  ComparePage,
  ConfermPassword,
  ContactPage,
  HomePage,
  LoginPage,
  OurStorePage,
  ResetPassword,
  SignupPage,
  WishListPage,
} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collections/our-store" element={<OurStorePage />} />
        <Route path="/our-blogs" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/compare-products" element={<ComparePage />} />
        <Route path="/wishlist" element={<WishListPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignupPage />} />
        <Route path="/forget-password" element={<ConfermPassword />} />
        <Route path="/conferm-Password" element={<ResetPassword />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
