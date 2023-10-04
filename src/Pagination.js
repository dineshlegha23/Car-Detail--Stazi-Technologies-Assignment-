import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

import "./style.css";

function Pagination({ setCurrentPage, currentPage }) {
  let pages = [];
  const navigate = useNavigate();
  for (let i = 1; i <= 10; i++) {
    pages.push(i);
  }
  function prevPage() {
    navigate(`/page/${currentPage - 1}`);
    setCurrentPage(currentPage - 1);
  }
  function nextPage() {
    navigate(`/page/${currentPage + 1}`);
    setCurrentPage(currentPage + 1);
  }

  return (
    <>
      <div className="center">
        <button
          style={{
            margin: "10px",
            width: "60px",
            height: "60px",
            backgroundColor: currentPage === 1 ? "gray" : "",
          }}
          disabled={currentPage === 1}
          onClick={prevPage}
        >
          Prev
        </button>
        {pages.map((page) => (
          <NavLink key={page} to={`/page/${page}`}>
            <span
              className={page === currentPage ? "active" : ""}
              onClick={() => setCurrentPage(page)}
            >
              {page}{" "}
            </span>
          </NavLink>
        ))}
        <button
          style={{
            margin: "10px",
            width: "60px",
            height: "60px",
            backgroundColor: currentPage === 10 ? "gray" : "",
          }}
          disabled={currentPage === 10}
          onClick={nextPage}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default Pagination;
