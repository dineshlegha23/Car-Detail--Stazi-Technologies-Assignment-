import React from "react";
import Car from "./Car";

function Cars({ carData, search }) {
  return (
    <>
      {carData
        .filter((car) => {
          return search.toLowerCase() === ""
            ? car
            : car.name.toLowerCase().includes(search);
        })
        .map((car) => (
          <Car key={car.id} car={car} />
        ))}
    </>
  );
}

export default Cars;
