import React, { useState, useEffect } from "react";

function HavaDurumu() {
  const url = "https://api.openweathermap.org/data/2.5/";
  const key = "48e31020dbb1b39cc1a671cbf3179bef";
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const setQuery = (e) => {
    if (e.key === "Enter") {
      getResult(city);
    }
  };

  const getResult = (cityName) => {
    const query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`;
    fetch(query)
      .then((response) => response.json())
      .then((result) => {
        // Hava durumu verisini sadece valid sonuç alındığında set ediyoruz
        if (result.cod === 200) {
          setWeatherData(result);
        }
      })
      .catch((error) => {
        console.log("Hata aldı", error);
      });
  };

  return (
    <div>
      <h1>Hava Durumu</h1>

      {/* Şehir ismi girilebilecek input alanı */}
      <input
        type="text"
        placeholder="Şehir girin"
        value={city}
        onChange={(e) => setCity(e.target.value)} // city state'ini güncelleme
        onKeyPress={setQuery} // Enter'a basıldığında sorgu yapılır
      />

      {/* weatherData null ise bilgi gösterilmez */}
      {weatherData && (
        <div>
          <h2 className="cityName">
            {weatherData.name}, {weatherData.sys.country}
          </h2>
          <p className="temp">{Math.round(weatherData.main.temp)}°C</p>
          <p className="desc">{weatherData.weather[0].description}</p>
        </div>
      )}

      {/* Eğer weatherData null ise "Yükleniyor..." mesajı göster */}
      {!weatherData && <p>Hava durumu bilgisi yükleniyor...</p>}
    </div>
  );
}

export default HavaDurumu;
