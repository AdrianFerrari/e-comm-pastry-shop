import React, { useEffect, useRef } from "react";
import useObservador from "../hooks/useObserver";
import Carousel from "./Carousel";
import { Link, useOutletContext } from "react-router-dom"
import "../styles/home.css";
import useProgressiveImage from "../hooks/useProgressiveImage";

function Home() {
  const {setCurrentPage} = useOutletContext()
  const bakery1loaded = useProgressiveImage("../images/chocolate-cake-1.jpg")
  const bakery2loaded = useProgressiveImage("../images/chocolate-cake-2.jpg")
  const bakery3loaded = useProgressiveImage("../images/lemon_rasberry.jpg")
  
  const chefRefKermit = useRef(null);
  const chefRefSwedish = useRef(null);
  const chefRefMonster = useRef(null);

  /*observador que ayuda a disparar una animacion cuando la seccion 3 entra
  en el campo de vision de la ventana del navegador*/
  const kermitOnScreen = useObservador(chefRefKermit)
  const swedishOnScreen = useObservador(chefRefSwedish)
  const monsterOnScreen = useObservador(chefRefMonster)


  useEffect(() => {
    setCurrentPage("home")
  }, [])

  return (
    <div className="home">

      <section className="home-section-1" style={{backgroundImage:`url("../images/bakery3.jpg")`, backgroundSize: 'cover'}}>
        <div className="home-info">
          <h1>Tu Pasteleria</h1>
          <p className="home-introduction">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        {bakery1loaded && <img className="bakery1 home-section-1-img" src={bakery1loaded} alt="bakery"/> }
        {bakery2loaded && <img className="bakery2 home-section-1-img" src={bakery2loaded} alt="bakery"/>}
        {bakery3loaded && <img className="bakery3 home-section-1-img" src={bakery3loaded} alt="bakery"/>}
      </section>

      <section className="home-section-2">
        <Link to="products">
          <h1>Productos {">"}</h1>
        </Link>
       <Carousel />
      </section>

      <section className="home-section-3">
        
          <h1>Quienes Somos?</h1>
          <div className="chef-cards">
            <div ref={chefRefKermit} className={(kermitOnScreen && "show ") + "chef kermit"}>
              <img
                src={"../images/Kermit_Chef.jpg"}
                alt="kermit the frog as chef"
              />
              <div className="chef-description">
                <h3>Kermit &quot;the frog&quot;</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tortor leo, luctus nec suscipit venenatis, tincidunt eget arcu. Nullam mollis posuere enim, id sodales purus ornare blandit.</p>
              </div>
            </div>
            <div ref={chefRefSwedish} className={(swedishOnScreen && "show ") + "chef swedish"}>
              <img
                src={"../images/The_Swedish_Chef.jpg"}
                alt="the swedish chef muppet"
              />
              <div className="chef-description">
                <h3>The swedish</h3>
                <p>Quisque acs nisi non augue auctor vestibulum in nec ligula. Fusce iaculis pretium nunc sit amet faucibus. Morbi dignissim nisl sed nulla ultrices, id ultrices mauris molestie.</p>
              </div>
            </div>
            <div ref={chefRefMonster} className={(monsterOnScreen && "show ") + "chef monster"}>
              <img
                src={"../images/Cookie_Monster_Chef.jpg"}
                alt="the cookie monster as chef"
              />
              <div className="chef-description">
                <h3>The cookie monster</h3>
                <p>Pellentesque vulputate ligula lacus, quis bibendum est aliquet non. Curabitur id mi eleifend, consectetur justo ultrices, malesuada nisl.</p>
              </div>
            </div>
          </div>
        
      </section>

    </div>
  );
}

export default Home;
