import "./App.css";
import React, {  useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import {  useDispatch } from "react-redux";
import { init } from "./redux-store/productSlice";
import Footer from "./components/Footer"
import Header from "./components/Header" 

function App() {
  const [currentPage, setCurrentPage] = useState()
  const dispatch = useDispatch();

  /*hace un fetch de los datos de los productos e inicializa 
  el store de redux con estos datos*/
  useEffect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then((data) => dispatch(init(data.results)));
  }, []);


  return (
    <div className="App">
      <Header currentPage={currentPage}/>
      <Outlet context={{setCurrentPage}}/>
      <Footer />
    </div>
  );
}

export default App;
