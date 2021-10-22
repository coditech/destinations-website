import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import CategoryContainer from "./components/CategoryContainer";
import DestinationsContainer from "./components/DestinationsContainer";
import Message from "./components/Message";
import Footer from "./components/Footer";
import reactDom from "react-dom";

function App() {
  const [continents, setContinents] = useState([]);
  const [destinations, setDestinations] = useState([]);
  useEffect(async () => {
    const response = await fetch("http://localhost:8000/api/continents");
    const blah = await response.json();
    console.log(blah.data);
    setContinents(blah.data);
  }, []);
  useEffect(async () => {
    const response = await fetch("http://localhost:8000/api/destinations");
    const blah = await response.json();
    console.log(blah.data);
    setDestinations(blah.data);
  }, []);
  return (
    <div className="tm-main-content" id="top">
      <div className="tm-top-bar-bg"></div>
      <Navbar />
      <div className="tm-page-wrap mx-auto">
        <Header />
        <div className="tm-container-outer" id="tm-section-3">
          <CategoryContainer continents={continents} />

          <DestinationsContainer destinations={destinations} />
        </div>

        <Message />
        <Footer />
      </div>
    </div>
  );
}

export default App;
