import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Abaut from "./Abaut";
import Features from "./Features";
import Team from "./Team";
import Services from "./Services";
import Contact from "./Contact";
import NoPage from "./NoPage";
import "../css/Responsive.css";
function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Abaut />} />
          <Route path="Features" element={<Features />} />
          <Route path="Team" element={<Team />} />
          <Route path="Services" element={<Services />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Index;
