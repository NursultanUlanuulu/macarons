import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const WorldMap = () => {
  const position = [59.987743, 30.370254]; // Координаты БЦ "Сова"

  return (
    <MapContainer
      center={position}
      zoom={15}
      style={{ height: "50vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          БЦ Сова
          <br />
          ул. Маршала Tухачевского, 22, Санкт-Петербург, Россия, 195067
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default WorldMap;
