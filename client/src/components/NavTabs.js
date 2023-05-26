import React from "react";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <header>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            href="/"
            onClick={() => handlePageChange("Home")}
            // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === "Home" ? "nav-link active" : "nav-link"}
          >
            Hori<span className="seo">seo</span>n
          </a>
        </li>
        <li className="nav-item">
          <a
            href="/seo"
            onClick={() => handlePageChange("SEO")}
            // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === "SEO" ? "nav-link active" : "nav-link"}
          >
            Search Engine Optimization
          </a>
        </li>
        <li className="nav-item">
          <a
            href="/orm"
            onClick={() => handlePageChange("ORM")}
            // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === "ORM" ? "nav-link active" : "nav-link"}
          >
            Online Reputation Management
          </a>
        </li>
        <li className="nav-item">
          <a
            href="/smm"
            onClick={() => handlePageChange("SMM")}
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === "SMM" ? "nav-link active" : "nav-link"}
          >
            Social Media Marketing
          </a>
        </li>
      </ul>
    </header>
  );
}

export default NavTabs;
