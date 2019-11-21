import React from "react";

import "./Hobbies.scss";
import ScrollAnimation from "react-animate-on-scroll";

class Hobbies extends React.Component {
  render() {
    return (
      <div id="hobbies-section">
        <div className="row hobbies-container">
          <div className="col-12 hobbies-heading">
            <ScrollAnimation
              animateOnce={true}
              offset={0}
              delay={1}
              animateIn="tada"
              initiallyVisible={true}
            >
              <h1>GALLERY</h1>
            </ScrollAnimation>
          </div>
          <div className="col-12 hobbies-gallery">
          </div>
        </div>
      </div>
    );
  }
}

export default Hobbies;
