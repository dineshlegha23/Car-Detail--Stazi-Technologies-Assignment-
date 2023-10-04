import React from "react";
import { Outlet } from "react-router-dom";
import Cars from "./Cars";

function Template({ search, setSearch, carData }) {
  return (
    <section className="section featured-car" id="featured-car">
      <div className="container">
        <div className="title-wrapper">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            name="search"
            placeholder="Search..."
            className="search"
          />
        </div>
        <ul className="featured-car-list">
          <Cars carData={carData} search={search} />
        </ul>
      </div>
    </section>
  );
}

export default Template;
