import React from "react";
import "./Footer.scss";
import ReactContactForm from 'react-mail-form';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer-container row no-gutters">
        <div className="col-12 footer__heading"><h3>Let's work together!</h3></div>
        <div className="col-4 footer__contact">
          <h3>CONTACT</h3>
          <p>Phone: 919035804165</p>
          <p>Email: ravibp95@gmail.com</p>
          <ReactContactForm to="ravibp95@gmail.com" />
        </div>
        <div className="col-4 footer__links">
          <h3>AROUND THE WEB</h3>
          <div className="row no-gutters col-12 footer__socialMediaLinks">
            <a target="_blank" rel='noopener noreferrer' href="https://www.facebook.com/ravibp95"><i className="fab fa-facebook"></i></a>
            {/* <a target="_blank" rel='noopener noreferrer' href="https://www.facebook.com/Maverick.M4"><i className="fab fa-twitter"></i></a> */}
            <a target="_blank" rel='noopener noreferrer' href="https://www.linkedin.com/in/ravibp"><i className="fab fa-linkedin"></i></a>
            <a target="_blank" rel='noopener noreferrer' href="https://github.com/ravibp"><i className="fab fa-github"></i></a>
          </div>
        </div>
        <div className="col-4 footer__location">
          <h3>LOCATION</h3>
          <p>Bangalore, India</p>
        </div>
        {/* <div className="col-6">
          <ReactContactForm to="ravibp95@gmail.com" />
        </div> */}
      </div>
    )
  }
}
export default Footer;
