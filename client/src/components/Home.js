import React, { useEffect, useRef } from "react";
import { useObservador } from "../hooks/observer.hook";
import Carousel from "./Carousel";
import { Link, useOutletContext } from "react-router-dom"
import "../styles/home.css";

function Home() {
  const {setCurrentPage} = useOutletContext()
  
  const chefRefKermit = useRef(null);
  const chefRefSwedish = useRef(null);
  const chefRefMonster = useRef(null);

  /*observador que ayuda a disparar una animacion cuando la seccion 3 entra
  en el campo de vision de la ventana del navegador*/
  const kermitOnScreen = useObservador(chefRefKermit)
  const swedishOnScreen = useObservador(chefRefSwedish)
  const monsterOnScreen = useObservador(chefRefMonster)

  function urlImgPath(imgName) {
    return process.env.REACT_APP_URL + "images/" + imgName + ".jpg"
  }

  useEffect(() => {
    setCurrentPage("home")
  }, [])

  return (
    <div className="home" style={{backgroundImage:`url(${urlImgPath("background_bakery")})`, backgroundRepeat: 'repeat', backgroundSize: '50%'}}>

      <section className="home-section-1" style={{backgroundImage:`url(${urlImgPath("bakery3")})`, backgroundSize: 'cover'}}>
        <div className="home-info">
          <h1>Tu Pasteleria</h1>
          <p className="home-introduction">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <img className="bakery1" src={urlImgPath("chocolate-cake-1")} alt="bakery" />
        <img className="bakery2" src={urlImgPath("chocolate-cake-2")} alt="bakery" />
        <img className="bakery3" src={urlImgPath("lemon_rasberry")} alt="bakery" />
      </section>

      <section className="home-section-2">
        <Link to="products">
          <h1>Productos {">"}</h1>
        </Link>
       <Carousel />
      </section>

      <section className="home-section-3">
        <div className="home-section-3-chefs">
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
                <p>Quisque ac nisi non augue auctor vestibulum in nec ligula. Fusce iaculis pretium nunc sit amet faucibus. Morbi dignissim nisl sed nulla ultrices, id ultrices mauris molestie.</p>
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
        </div>
      </section>

    </div>
  );
}

export default Home;
