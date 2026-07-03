import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
const MapComponent = () => {
    const mapRef = useRef(null);
    const mapInstanceRef = useRef(null);
    useEffect(() => {
        if (!mapRef.current || mapInstanceRef.current)
            return;
        const center = [47.52, 8.74];
        const map = L.map(mapRef.current, {
            center,
            zoom: 12.5,
            zoomControl: false,
            scrollWheelZoom: false,
            dragging: false,
            doubleClickZoom: false,
            keyboard: false,
        });
        mapInstanceRef.current = map;
        L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
            attribution: "&copy; OpenStreetMap contributors",
        }).addTo(map);
        setTimeout(() => {
            map.invalidateSize();
        }, 0);
        return () => {
            map.remove();
            mapInstanceRef.current = null;
        };
    }, []);
    return (_jsx("div", { ref: mapRef, className: "fixed inset-0 -z-10 pointer-events-none", style: {
            height: "100vh",
            width: "100vw",
            opacity: 1,
            filter: "grayscale(1) contrast(1.05)",
        } }));
};
export default MapComponent;
