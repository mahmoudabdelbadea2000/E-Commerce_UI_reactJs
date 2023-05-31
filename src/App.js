import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer, Header } from "./components/utility";
import {
  BlogNewsPage,
  BlogPage,
  CartPage,
  CheckOutPage,
  ComparePage,
  ConfermPassword,
  ContactPage,
  HomePage,
  LoginPage,
  OurStorePage,
  PrivacyPolicyPage,
  ProductDetailsPage,
  RefundPolicyPage,
  ResetPassword,
  ShappingPolicyPage,
  SignupPage,
  TermCondtionPage,
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
        <Route path="/blogs/news/:id" element={<BlogNewsPage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/refund-policy" element={<RefundPolicyPage />} />
        <Route path="/shapping-policy" element={<ShappingPolicyPage />} />
        <Route path="/tremcondtions" element={<TermCondtionPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/check-out" element={<CheckOutPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
