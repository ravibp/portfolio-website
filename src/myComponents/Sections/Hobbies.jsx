import React from "react";

import "myComponents/Sections/Hobbies.scss";

class Hobbies extends React.Component {
  render() {
    return (
      <div id="hobbies-section">
        <div className="row hobbies-container">
          <div className="col-12 hobbies-heading">

            <h1>GALLERY</h1>
          </div>
          <div className="col-12 hobbies-gallery">
          </div>
        </div>
      </div>
    );
  }
}

export default Hobbies;
