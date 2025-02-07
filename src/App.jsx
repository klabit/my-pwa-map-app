import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useState } from "react";

const containerStyle = {
    width: "100%",
    height: "400px",
};

function App() {
    const [location, setLocation] = useState({ lat: 37.7749, lng: -122.4194 });

    return (
        <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
            <GoogleMap mapContainerStyle={containerStyle} center={location} zoom={15}>
                <Marker position={location} />
            </GoogleMap>
        </LoadScript>
    );
}

export default App;
