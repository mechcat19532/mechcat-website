import "./App.css";
import logo from "./img/logo.png";
import lazycat from "./img/lazycat.png";
import paw1 from "./img/paw1.png";
import paw2 from "./img/paw2.png";
import wave from "./img/wave.png";
import squiggle from "./img/squiggly-line.png";
import peaking from "./img/peaking.png";
import arrow from "./img/arrow.png";
import pin from "./img/pin-icon.png";
import email from "./img/email-icon.png";
import insta from "./img/insta-icon.png";
import yt from "./img/yt-icon.png";

var prevScrollpos = window.scrollY;

function HideMenu() {
  window.addEventListener('scroll', function () {
    var currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("nav-bar").style.top = '0px';
    } else if (prevScrollpos < currentScrollPos) {
      document.getElementById("nav-bar").style.top = '-150px';
    }
    prevScrollpos = currentScrollPos;
  });
}
export default function website() {
  return (
    <html>
      <div id='caustics'></div>
      <body>
        <HideMenu />
        <div id="nav-bar">
          <div className="nav-wrapper">
            <svg>
              <filter id="noise1">
                <feTurbulence type="turbulence" baseFrequency=".05" numOctaves="1" seed="3" stitchTiles='stitch' />
                <feDisplacementMap in="SourceGraphic" scale="10" />
              </filter>
            </svg>
            <a href="#banner-image"><img className="logo-wrapper" src={logo} alt="mechcat logo" /></a>
            <div className="nav-text-left">
              <a href="#banner-image"><div className="name-font"><b><p>MECHCAT</p> </b></div></a>
            </div>
            <div className="nav-text">
              <a href="#contact"><p>Contact Us</p> </a>
            </div>
            <div className="nav-text">
              <a href="#sponsor"><p>Sponsors</p></a>
            </div>
            <div className="nav-text">
              <a href="#team"><p>The Team</p></a>
            </div>
            <div className="nav-text">
              <a href="#robot"><p>Robot</p></a>
            </div>
            <div className="nav-text">
              <a href="#about"><p>About Us</p></a>
            </div>
          </div>
        </div>
        <div id="banner-image">
          <div className="waves"><b><h1>MECHCAT</h1></b></div>
          <div className="waves"><b><h2>MECHCAT</h2></b></div>
          <div className="banner-text">
            <div className="date"><b><h1>2024 - 2025</h1> </b></div>
            <img className="lazycat" src={lazycat} alt="a lazy cat" />
            <div className="name-font"><h1><br></br></h1></div>
            <img className="paw1" src={paw1} alt="paw" />
            <div className="chall-name"><p>INTO THE DEEP</p></div>
            <img className="paw2" src={paw2} alt="paw" />
          </div>
        </div>
        <img className="wave" src={wave} alt="wave" />

        <div id="about">
          <div className="about-box">
            <div className="slide-in">
              <div className="title-about"><h1>About Us</h1></div>
              <img className="squiggle" src={squiggle} alt="squiggle"></img>
            </div>
            <div className="slide-left"><img className="peaking" src={peaking} alt="a peaking cat" /></div>
            <div className="fade-in">
              <div className="about-wrapper"><h3>
                MechCat (short for MeCATronics) is a Dr. Norman Bethune Collegiate Institute robotics team competing in the First Tech Challenge (FTC) competition.
                MechCat started competing in 2021 and is entering its fourth season under new leadership.
                Based in Toronto, Canada, Team 19532 aims to advance to Worlds while developing skills in STEM, teamwork, and problem-solving.
                Despite our inexperience, we’ve continued to climb our way over each obstacle with determination and spirit.
                Through competitions, MechCat strives to represent its school and community by setting an example of success and inspiring others through our different feats, such as representing our school in different tournaments.
              </h3></div>
            </div>
          </div>
        </div>
        <div id="robot">
          <div className="robot-img"></div>
          <div className="catsteps">
            <img src={paw1} alt="paw"></img>
            <img src={paw1} alt="paw"></img>
            <img src={paw1} alt="paw"></img>
            <img src={paw1} alt="paw"></img>
            <img src={paw1} alt="paw"></img>
          </div>
          <div className="robot-box">
            <div className="slide-in">
              <div className="title-robot"><h1> Our Robot</h1></div>
              <img className="squiggle" src={squiggle} alt="squiggle"></img>
            </div>
          </div>
        </div>
        <div id="team">
          <div className="team-box">
            <div className="team-img"></div>
            <div className="slide-in">
              <div className="title-team"><h1>Our Team</h1></div>
              <img className="squiggle" src={squiggle} alt="squiggle"></img>
              <img className="arrow" src={arrow} alt="arrow"></img>
            </div>
          </div>
        </div>
        <div id="sponsor">
          <div className="sponsor-box">
          <div className="title-sponsor"><h1> Our Sponsors</h1></div>
          <div className="tom-brothers"></div>
          <div className="bethune"></div>
          </div>
        </div>
        <div id="contact">
          <div className="contact-box">
            <div className="slide-in">
              <div className="title-contact"><h1>Contact Us</h1></div>
              <img className="squiggle" src={squiggle} alt="squiggle"></img>
            </div>
            <div className="catsteps">
              <img src={paw1} alt="paw"></img>
              <img src={paw1} alt="paw"></img>
              <img src={paw1} alt="paw"></img>
              <img src={paw1} alt="paw"></img>
              <img src={paw1} alt="paw"></img>
            </div>
            <div className="map-wrapper">
              <iframe className="googlemap"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2879.128145183073!2d-79.32496221195696!3d43.811701296565815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d391096f94c7%3A0xe8860b0ba7d1ad10!2sDr.%20Norman%20Bethune%20Collegiate%20Institute!5e0!3m2!1sen!2sca!4v1703189725256!5m2!1sen!2sca"
                title="google map of Bethune"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
            <div className="icon-box">
              <a href="https://www.google.com/maps?ll=43.811701,-79.320091&z=16&t=m&hl=en&gl=CA&mapclient=embed&cid=16755091608366591248">
                <img src={pin} alt="pin logo"></img>
              </a>
              <a href="https://www.google.com/maps?ll=43.811701,-79.320091&z=16&t=m&hl=en&gl=CA&mapclient=embed&cid=16755091608366591248">
                <p>200 Fundy Bay Blvd, Scarborough, ON M1W 3G1</p>
              </a>
            </div>
            <div className="icon-box">
              <a href="https://www.instagram.com/ftcmechcat/">
              <img src={insta} alt="insta logo"></img>
              </a>
              <a href="https://www.instagram.com/ftcmechcat/">
                <p>@ftcmechcat</p>
              </a>
            </div>
            <div className="icon-box">
              <a href="mailto:ftcmechcat@gmail.com">
              <img src={email} alt="email logo"></img>
              </a>
              <a href="mailto:ftcmechcat@gmail.com">
                <p>ftcmechcat@gmail.com</p>
              </a>
            </div>
            <div className="icon-box">
              <a href="https://www.youtube.com/@MechCat-Robotics">
                <img src={yt} alt="youtube logo"></img
                ></a>
              <a href="https://www.youtube.com/@MechCat-Robotics">
                <p>@MechCat- Robotics</p>
              </a>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
