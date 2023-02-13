import React from "react";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import { Routes, Route,Redirect } from "react-router-dom";
import Header from "./common/Header";
import ServiceDetail from "./pages/ServiceDetail/ServiceDetail";
import Faq from "./pages/Faq/Faq";
import Gynacologist from "./pages/Services/Gynacologist";
import Autism from "./pages/Services/Autism";
import Thyroid from "./pages/Services/Thyroid";
import Migraine from "./pages/Services/Migraine";
import BackPain from "./pages/Services/Backpain";
import Diabetics from "./pages/Services/Diabetics";

function App() {
  return (
    <>
      <Header />
      <Routes >
        <Route path="/testyora/" element={<Home/>}/>
        <Route path="/" index element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/serviceDetail" element={<ServiceDetail/>} />
        <Route path="/faq" element={<Faq/>} />
        <Route path="/gynecologist" element={<Gynacologist/>} />
        <Route path="/autism" element={<Autism/>} />
        <Route path="/thyroid" element={<Thyroid/>} />
        <Route path="/migraine" element={<Migraine/>} />
        <Route path="/backpain" element={<BackPain/>} />
        <Route path="/diabetics" element={<Diabetics/>} />
      </Routes>
    </>
  );
}

export default App;
