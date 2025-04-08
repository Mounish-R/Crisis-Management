import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import Header from '../components/Header';
import './CrisisMap.css';

// Custom icons based on disaster type
const iconColors = {
  earthquake: 'red',
  flood: 'blue',
  landslide: 'orange',
  default: 'gray'
};

const getIcon = (type) => {
  const color = iconColors[type] || iconColors.default;
  return new L.Icon({
    iconUrl: `/icons/marker-icon-${color}.png`,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: '/icons/marker-shadow.png'
  });
};

function CrisisMap() {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(
          `https://newsapi.org/v2/everything?q=earthquake OR flood OR landslide&language=en&sortBy=publishedAt&apiKey=899120176c734afca7d8c99114c7c7b1`
        );
        const data = await res.json();

        const processed = data.articles.map((article, idx) => {
          const title = article.title.toLowerCase();
          let type = 'default';
          if (title.includes('earthquake')) type = 'earthquake';
          else if (title.includes('flood')) type = 'flood';
          else if (title.includes('landslide')) type = 'landslide';

          return {
            lat: 22.9734 + (Math.random() * 10 - 5), // Randomized location for demo
            lng: 78.6569 + (Math.random() * 10 - 5),
            location: article.source.name,
            description: article.title,
            type: type
          };
        });

        setNewsData(processed);
      } catch (err) {
        console.error('Error fetching disaster news:', err);
      }
    };

    fetchNews();
  }, []);

  return (
    <div>
      <Header />
      <div className="map-container">
        <h2>India Crisis Map</h2>
        <div className="legend">
          <div><span className="legend-icon red"></span> Earthquake</div>
          <div><span className="legend-icon blue"></span> Flood</div>
          <div><span className="legend-icon orange"></span> Landslide</div>
        </div>
        <MapContainer center={[22.9734, 78.6569]} zoom={5} style={{ height: '500px', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {newsData.map((item, idx) => (
            <Marker key={idx} position={[item.lat, item.lng]} icon={getIcon(item.type)}>
              <Popup>
                <strong>{item.location}</strong><br />
                {item.description}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}

export default CrisisMap;