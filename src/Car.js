function Car({ car }) {
  const { id, name, image, year, capacity, mode, average, type, price } = car;
  return (
    <>
      <li>
        <div className="featured-car-card">
          <figure className="card-banner">
            <img
              src={image}
              alt={name}
              loading="lazy"
              width="440"
              height="300"
              className="w-100"
            />
          </figure>

          <div className="card-content">
            <div className="card-title-wrapper">
              <h3 className="h3 card-title">
                <a href="/">{name}</a>
              </h3>

              <data className="year" value="2021">
                {year}
              </data>
            </div>

            <ul className="card-list">
              <li className="card-list-item">
                <ion-icon name="people-outline"></ion-icon>

                <span className="card-item-text">{capacity}</span>
              </li>

              <li className="card-list-item">
                <ion-icon name="flash-outline"></ion-icon>

                <span className="card-item-text">{mode}</span>
              </li>

              <li className="card-list-item">
                <ion-icon name="speedometer-outline"></ion-icon>

                <span className="card-item-text">{average} / 1-litre</span>
              </li>

              <li className="card-list-item">
                <ion-icon name="hardware-chip-outline"></ion-icon>

                <span className="card-item-text">{type}</span>
              </li>
            </ul>

            <div className="card-price-wrapper">
              <p className="card-price">
                <strong>{price}</strong> / month
              </p>

              <button
                className="btn fav-btn"
                aria-label="Add to favourite list"
              >
                <ion-icon name="heart-outline"></ion-icon>
              </button>

              <button className="btn">Rent now</button>
            </div>
          </div>
        </div>
      </li>
    </>
  );
}

export default Car;
