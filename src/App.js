import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import MainContainer from "./components/MainContainer";
function App() {
  // console.log(process.env.STRIPE_SECRET_KEY);
  return (
    <>
      <MainContainer />
      <Footer />
    </>
  );
}

export default App;
