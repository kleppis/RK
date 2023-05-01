import React from "react";
import Navbar from "../components/navbar.tsx";
import Bunn from "../components/bunn.tsx";
import './home.css';


function Home() {
  return (
    <body>
      <div>
        <Navbar />
      </div>
      <div className=" RKhome">
        <div className="sitat">
          <div className="sitatEn">
            Uformelt - sosialt - relasjonsbasert
          </div>
          <div className="sitatTo">
            - fordi du har godt av det.
          </div>
        </div>
      </div>
      <div className=" omOss">
        <div className="initiativet">
          Om initiativet
        </div>
        <div className="tekst">
          RK Invitational er primært et humoristisk begrep for et lavterskel løpe/trenings-arrangement.
          Målet er å bidra til kontinuitet i aktivitet og trening for deltakerne ved å arrangere jevnlige,
          uformelle konkurranser som holder motivasjonen oppe gjennom året. Hvorfor? Fordi aktivitet og
          trening er viktig for helsa, både psykisk og fysisk!
        </div>
      </div>
      <div>
        <Bunn />
      </div>
    </body>
  );
}
export default Home;
