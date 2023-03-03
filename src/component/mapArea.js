import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const MapArea = () => {
  const position = [51.505, -0.09];
  const MapContainerStyle = {
    width: "400px",
    height: "300px",
    display: "inline-block",
    padding: "10px"
  };
  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={MapContainerStyle}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
  );
};

export default MapArea;