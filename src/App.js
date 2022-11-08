import './App.css';
import React, { useState, useRef } from 'react'
import data from './data.js'
import { Outlet, Link, useNavigate }  from 'react-router-dom'
import { useSelector } from 'react-redux'

function App() {
  const [dataCakes, setDataCakes] = useState(data.results)
  const cartItems = useSelector(state => state.cart)
  const ref = useRef()
  const navigate = useNavigate()

  return (
    <div className="App">
      <header>
        <div className='header-menu'>
          <h1><span>Pastry</span> Shop</h1>
          <div className="header-buttons">
            <button>
                <Link to="/cart">
                  <i className={cartItems.length > 0 ? "ri-shopping-cart-fill" : "ri-shopping-cart-line"}/>
                </Link>  
            </button>
            <button>
                <i className="ri-menu-line"/>
            </button>
          </div>
        </div>
        <nav>
            <ul className="header-nav">
                <Link to="/">Home</Link>
                <Link state={dataCakes} to="/products">Productos</Link>
                <Link to="/contact">Contactos</Link>
                <div ref={ref} className='nav-pointer'></div>
            </ul>
        </nav>
      </header>
      
      <Outlet />
    </div>
  );
}

export default App;
