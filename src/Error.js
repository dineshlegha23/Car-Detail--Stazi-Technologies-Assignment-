import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "dodgerblue" }}>
        404 Not Found!
      </h1>
      <Link
        to={"/"}
        style={{
          textAlign: "center",
          marginTop: "20px",
          fontSize: "1.5rem",
          color: "blue",
        }}
      >
        Goto HomePage
      </Link>
    </div>
  );
}

export default Error;
