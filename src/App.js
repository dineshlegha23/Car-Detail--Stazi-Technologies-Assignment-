import React, { useEffect, useState } from "react";
import Cars from "./Cars";
import data from "./data";
import Pagination from "./Pagination";
import Template from "./Template";
import { useParams } from "react-router-dom";

import "./style.css";

function App() {
  let { page } = useParams();
  const [carData, setCarData] = useState(data);
  const [search, setSearch] = useState("");

  if (page === undefined) {
    page = 1;
  }
  console.log(page);
  const [currentPage, setCurrentPage] = useState(page);
  const [carsPerPage, setCarsPerPage] = useState(6);

  const lastCarIndex = currentPage * carsPerPage;
  const firstCarIndex = lastCarIndex - carsPerPage;
  const newCarData = carData.slice(firstCarIndex, lastCarIndex);

  if (page === 1) {
    return (
      <>
        <h1 style={{ textAlign: "center", color: "dodgerblue" }}>HomePage</h1>
        <Template search={search} setSearch={setSearch} carData={newCarData} />
        <Pagination setCurrentPage={setCurrentPage} currentPage={currentPage} />
      </>
    );
  }
  return (
    <>
      {page && (
        <h1 style={{ textAlign: "center", color: "dodgerblue" }}>
          Page - {page}
        </h1>
      )}
      <Template
        search={search}
        setSearch={setSearch}
        carData={newCarData}
      ></Template>
      <Pagination setCurrentPage={setCurrentPage} currentPage={currentPage} />
    </>
  );
}

export default App;
