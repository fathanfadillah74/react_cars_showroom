import { useState } from "react";
import carData from "../data/car.js";
import "../assets/style/home.css";

function Home() {
  const [cars, setCars] = useState(carData);
  const [filteredCars, setFilteredCars] = useState(cars);

  const filterCars = (inputUser, category) => {
    const filtered = cars.filter((car) => {
      const carProperty = car[category].toLowerCase();
      console.log("🚀 ~ filtered ~ carProperty:", carProperty)  
      return carProperty.includes(inputUser);
    });
    setFilteredCars(filtered);
  };

  const inputHandler = (e) => {
    const inputUser = e.target.value.toLowerCase();
    filterCars(inputUser, "nama");
  };

  const selectHandler = (e) => {
    const selectedCategory = e.target.value.toLowerCase();
    filterCars(selectedCategory, e.target.name);
  };

  return (
    <div className="container">
      <section className="header">
        <img src="images/logo.png" alt="logo" className="logo" />
        <div className="card">
          <p className="title">Cari Mobil Impian Anda</p>
          <form action="">
            <div className="search-container">
              <input
                type="text"
                className="search"
                placeholder="Search"
                onChange={inputHandler}
              />
              <img src="images/search.png" alt="" className="search-button" />
            </div>
            <div className="category">
              <select name="merek" onChange={selectHandler}>
                <option value="" disabled selected>
                  Merek
                </option>
                {carData.map((car) => (
                  <option key={car.productId} value={car.merek}>
                    {car.merek}
                  </option>
                ))}
              </select>
              <select name="tipe" onChange={selectHandler}>
                <option value="" disabled selected>
                  Tipe
                </option>
                {carData.map((car) => (
                  <option key={car.productId} value={car.tipe}>
                    {car.tipe}
                  </option>
                ))}
              </select>
              <select name="warna" onChange={selectHandler}>
                <option value="" disabled selected>
                  Warna
                </option>
                {carData.map((car) => (
                  <option key={car.productId} value={car.warna}>
                    {car.warna}
                  </option>
                ))}
              </select>
            </div>
          </form>
        </div>
      </section>

      <section className="main-section">
        <div className="cards-container">
          {/* Mapping untuk menampilkan hasil filter */}
          {filteredCars.map((car) => (
            <div key={car.productId} className="card card-product">
              <div className="img-product-container">
                <img
                  src={`images/${car.path}`}
                  alt=""
                  className="image-product"
                />
              </div>
              <div className="description">
                <div className="body-card">
                  <div className="name">
                    <span>{car.nama}</span>
                  </div>
                  <p className="key">
                    Merek: <span className="value">{car.merek}</span>
                  </p>
                  <p className="key">
                    Warna: <span className="value">{car.warna}</span>
                  </p>
                  <p className="key">
                    Tipe: <span className="value">{car.tipe}</span>
                  </p>
                  <button className="button-detail">Lihat Detail</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
