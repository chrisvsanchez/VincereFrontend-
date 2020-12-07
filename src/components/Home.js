import React from "react";
import { Image } from "semantic-ui-react";

import clip from "./video/Background.mp4";

import mainlogo from "./Images/mainlogo.png";
import logo from "./Images/VNYCC_white.png";
function Home() {
  return (
    <>
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%,-50%)",
          zIndex: "-1",
        }}
      >
        <source src={clip} type={"video/mp4"} />
      </video>
      {/* <div
        style={{
          // backgroundColor: "grey",
          textShadow: "3px 3px #000",
          textAlign: "center",
          color: "white",
          margin: "auto",
          width: "50%",
          padding: "10px",
          bottom: "0%",
        }}
      >
        <Typical
          steps={[
            "Win",
            1000,
            "Win Against",
            1000,
            "Win Against All",
            1000,
            "Win Against All Odds",
            1000,
          ]}
          loop={Infinity}
          wrapper="h1"
          center
        />
      </div> */}
      <div>
        {/* <Image
          src={wheel}
          size="massive"
          style={{
            position: "absolute",
            top: "20%",
            right: "70%",
            bottom: "-10%",
          }}
        ></Image> */}
        <Image
          src={logo}
          size="massive"
          style={{
            position: "absolute",
            left: "-10%",
            right: "-10%",
            bottom: "-10%",
            top: "-60%",
          }}
        ></Image>
        <Image
          src={mainlogo}
          size="small"
          style={{
            position: "absolute",
            left: "-9%",
            right: "-10%",
            bottom: "0%",
            top: "0%",
          }}
        ></Image>
      </div>
    </>
  );
}
export default Home;
