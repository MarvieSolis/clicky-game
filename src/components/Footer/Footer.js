import React from "react";
import "./Footer.css";
import logo from "./miniLogo.png";

// Footer
const Footer = props => (

    <div id="footer" className="container-fluid">

        <div className="row justify-content-center">
            <div className="col-auto">
                <div className="footerWrapper">
                    <a id="footerContent" href="https://marviesolis.github.io/" target="_blank">
                        <h4 id="name">Marvie
                        <img id="logo" src={logo} alt="Marvie's Logo" /> Solis
                    </h4>
                    </a>
                </div>
            </div>
        </div>

    </div>

)

export default Footer;