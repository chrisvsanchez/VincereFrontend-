import React, { useState, useEffect } from "react";
import ReactMapGl, { Marker, Popup } from "react-map-gl";
import { Image, Button } from "semantic-ui-react";
import * as ride from "../data/event.json";
const APIKEY = process.env.REACT_APP_MAPBOX_TOKEN;
function Map() {
  const [viewport, setViewport] = useState({
    latitude: 40.712728,
    longitude: -74.006015,
    width: "80vw",
    height: "70vh",
    zoom: 9,
  });
  const [selectedEvent, setSelectedEvent] = useState(null);
  useEffect(() => {
    const listener = (e) => {
      if (e.key === "Escape") {
        setSelectedEvent(null);
      }
    };
    window.addEventListener("keydown", listener);
    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ReactMapGl
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/chrisvsanchez/ckfq1pi9l1nm319p7i76pdz1c"
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      >
        {ride.events.map((eventObj) => (
          <Marker
            key={eventObj.id}
            latitude={eventObj.coordinates[1]}
            longitude={eventObj.coordinates[0]}
          >
            <button
              class="marker-btn"
              onClick={(e) => {
                e.preventDefault();
                setSelectedEvent(eventObj);
              }}
            >
              <Image src={"final.vincere.sword.svg"}></Image>
            </button>
          </Marker>
        ))}
        {selectedEvent ? (
          <Popup
            latitude={selectedEvent.coordinates[1]}
            longitude={selectedEvent.coordinates[0]}
            onClose={() => {
              setSelectedEvent(null);
            }}
          >
            <div>
              <h1>{selectedEvent.name}</h1>
              <h3>{selectedEvent.address}</h3>
              <h3>{selectedEvent.date}</h3>
              <h3>{selectedEvent.event_time}</h3>
            </div>
          </Popup>
        ) : null}
      </ReactMapGl>
    </div>
  );
}
export default Map;
