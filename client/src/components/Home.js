import React, { useRef, useEffect, useState } from "react";
import "../styles/home.css";

//style={{opacity: isVisible ? "1" : "0"}}

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const chefRef = useRef(null);

  /*observador que ayuda a disparar una animacion cuando la seccion 3 entra
  en el campo de vision de la ventana del navegador*/
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsVisible(entry.isIntersecting);
    });
    observer.observe(chefRef.current);
  }, []);

  return (
    <div className="home" style={{backgroundImage:'url(../images/background_bakery.jpg)', backgroundRepeat: 'repeat', backgroundSize: '50%'}}>
      <section className="home-section-1" style={{backgroundImage:'url(../images/bakery3.jpg)', backgroundSize: 'cover'}}>
        <div className="home-info">
          <h1>Tu Pasteleria</h1>
          <p className="home-introduction">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <img className="bakery1" src={"../images/bakery1.jpg"} alt="bakery" />
        <img className="bakery2" src={"../images/bakery3.jpg"} alt="bakery" />
        <img className="bakery3" src={"../images/bakery2.jpg"} alt="bakery" />
      </section>

      <section ref={chefRef} className="home-section-3">
        <div className={(isVisible ? "show" : "") + " home-section-3-chefs"}>
          <h1>Quienes Somos?</h1>
          <div className="chef-cards">
            <div className="chef">
              <img
                src={"../images/Kermit_Chef.jpg"}
                alt="kermit the frog as chef"
              />
              <p>Kermit &quot;the frog&quot;</p>
            </div>
            <div className="chef">
              <img
                src={"../images/The_Swedish_Chef.jpg"}
                alt="the swedish chef muppet"
              />
              <p>The swedish</p>
            </div>
            <div className="chef">
              <img
                src={"../images/Cookie_Monster_Chef.jpg"}
                alt="the cookie monster as chef"
              />
              <p>The cookie monster</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
