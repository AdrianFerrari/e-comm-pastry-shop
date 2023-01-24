import "./App.css";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer"
import Header from "./components/Header" 

function App() {
  const [currentPage, setCurrentPage] = useState()

  return (
    <div className="App">
      <Header currentPage={currentPage}/>
      <Outlet context={{setCurrentPage}}/>
      <Footer />
    </div>
  );
}

export default App;
