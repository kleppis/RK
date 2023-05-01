import React from "react";
import Navbar from "../components/navbar.tsx";
import Bunn from "../components/bunn.tsx";
import './konsept.css';
import konsept1 from './pageBilder/konsept1.jpg';
import konsept2 from './pageBilder/konsept2.jpg';
import konsept3 from './pageBilder/konsept3.jpeg';
import konsept4 from './pageBilder/konsept4.jpeg';
import konsept5 from './pageBilder/konsept5.jpeg';



function Konsepter() {
    return (
        <div>
            <Navbar />
            <div className="konseptHeaderBG">
                <div className="konseptHeader">
                    Konsepter
                </div>
            </div>
            <div className="konseptDescHeader">
                Våre konsepter:
            </div>
            <div className="konseptFlexContainer">
                <div className="konseptFlex">
                    <img src={konsept1} alt="bilde" className="konseptImg" />
                    <div className="kTB">
                        <div className="kTH">
                            Main-Event
                        </div>
                        <div className="kTT">
                            Diverse konkurranser, der den reelle konkurrenten er deg selv.
                        </div>
                    </div>
                </div>
                <div className="konseptFlex">
                    <img src={konsept2} alt="bilde" className="konseptImg" />
                    <div className="kTB">
                        <div className="kTH">
                            Jogg & Talk
                        </div>
                        <div className="kTT">
                            Du bestemmer farten og temaet, så lenge jeg klarer å snakke samtidig.
                        </div>
                    </div>
                </div>
                <div className="konseptFlex">
                    <img src={konsept3} alt="bilde" className="konseptImg" />
                    <div className="kTB">
                        <div className="kTH"> Langtur i skauen</div>
                        <div className="kTT">
                            Der det passer best selvsagt, men spesialiteten er Movatn - Grorud-dalen. Inkluderer sjokoladestopp.
                        </div>
                    </div>
                </div>
                <div className="konseptFlex">

                    <img src={konsept4} alt="bilde" className="konseptImg" />

                    <div className="kTB">
                        <div className="kTH">
                            DU bestemmer
                        </div>
                        <div className="kTT">
                            Du velger økta, jeg blir med!
                        </div>
                    </div>
                </div>
                <div className="konseptFlex">
                    <img src={konsept5} alt="bilde" className="konseptImg" />
                    <div className="kTB">
                        <div className="kTH">
                            Volds-loops
                        </div>
                        <div className="kTT">
                            Intz på Volds. Du bestemmer fart og antall. Jeg fungerer enten som hare eller slips.
                        </div>
                    </div>
                </div>
            </div>
            <Bunn />
        </div>
    )
}


export default Konsepter;