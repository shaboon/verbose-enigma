import React, { useState } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import SEO from "./pages/SEO";
import ORM from "./pages/ORM";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function HoriseonBody() {
  const [currentPage, setCurrentPage] = useState("Home");

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.

  const handlePageChange = (currentPage) => setCurrentPage(currentPage);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />

      {/* Here we are calling the renderPage method which will return a component  */}

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SEO" element={<SEO />} />
          <Route path="/ORM" element={<ORM />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}
