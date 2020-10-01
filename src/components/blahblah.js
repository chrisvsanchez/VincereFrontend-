// import React, { useState } from "react";
// import ReactMapGL, { Marker, Popup } from "react-map-gl";
// const APIKEY = process.env.REACT_APP_MAPBOX_API_KEY;

// function Map() {
//   const [viewport, setViewport] = useState({
//     width: "100%",
//     height: 600,
//     latitude: 39.0626831,
//     longitude: -101.642682,
//     zoom: 4,
//   });
//   const [selectedShop, setSelectedShop] = useState(null);
//   return (
//     <div>
//       <ReactMapGL
//         {...viewport}
//         mapboxApiAccessToken={APIKEY}
//         mapStyle="mapbox://styles/kelseymapbox/ckfd8wvd43zi719p30pnbson5"
//         onViewportChange={(viewport) => {
//           setViewport(viewport);
//         }}
//       >
//         {coffee.locations.map((shop) => (
//           <Marker
//             key={shop.id}
//             latitude={shop.coordinates[1]}
//             longitude={shop.coordinates[0]}
//           >
//             <button
//               className="marker-button"
//               onClick={(e) => {
//                 e.preventDefault();
//                 setSelectedShop(shop);
//               }}
//             >
//               <img
//                 className="coffee-marker"
//                 src={CoffeeCup}
//                 alt="coffee marker"
//               ></img>
//             </button>
//           </Marker>
//         ))}
//         {selectedShop ? (
//           <Popup
//             latitude={selectedShop.coordinates[1]}
//             longitude={selectedShop.coordinates[0]}
//             onClose={() => {
//               setSelectedShop(null);
//             }}
//           >
//             <div className="pop">
//               <h2 className="pop-up-name">{selectedShop.name}</h2>
//               <p className="pop-up-hours">{selectedShop.hours}</p>
//             </div>
//           </Popup>
//         ) : null}
//       </ReactMapGL>
//     </div>
//   );
// }
// export default Map;
