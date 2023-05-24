import React from "react";

import instagram from "../pictures/instagram.png"
import facebook from '../pictures/facebook.png'
import onin_logo from "../pictures/onin_logo.png"

function Footer(){

    return(
            <footer className="footer">
              <div className="footer-left">
                <a><img src={onin_logo} style={{marginLeft: '30px'}} alt="" /></a>
                <span>© 2022 Company, Inc</span>
              </div>
              <div className="footer-right">
                <ul className="footer-ul">
                  {/* <li className="ms-3"><span>Instagram</span><a href="#"><img src={instagram} alt="" /></a></li>
                  <li className="ms-3"><span>Facebook</span><a href="#"><img src={facebook} alt="" /></a></li> */}
                </ul>
              </div>
            </footer>
    );
}

export default Footer;