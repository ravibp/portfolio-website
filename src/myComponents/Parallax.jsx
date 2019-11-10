import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import parallaxStyle from "assets/jss/parallaxStyle.jsx";

class Parallax extends React.Component {
  constructor(props) {
    super(props);
    var windowScrollTop = window.pageYOffset / 3;
    this.state = {
      transform: "translate3d(0," + windowScrollTop + "px,0)"
    };
  }
  showRenderedPage() {
    // const spinnerComponent = document.querySelector(".loader");
    // const appComponent = document.querySelector("#root");
    // appComponent.style.opacity = "1";
    // appComponent.style.transition = "opacity 1s";
    // spinnerComponent.style.opacity = "0";
    // spinnerComponent.style.transition = "opacity 1s";
  };
  componentDidMount() {
    var windowScrollTop = window.pageYOffset / 3;
    this.setState({
      transform: "translate3d(0," + windowScrollTop + "px,0)"
    });
    window.addEventListener("scroll", this.resetTransform);

    var videoElement = document.getElementById("landingPage-bgVideo");
    videoElement.oncanplay = function () {
      const parallax = new Parallax()
      parallax.showRenderedPage();
    };
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.resetTransform);
  }

  resetTransform = () => {
    var windowScrollTop = window.pageYOffset / 3;
    this.setState({
      transform: "translate3d(0," + windowScrollTop + "px,0)"
    });
  };
  render() {
    const {
      classes,
      filter,
      className,
      children,
      style,
      backgroundVideo,
      small
    } = this.props;
    const parallaxClasses = classNames({
      [classes.parallax]: true,
      [classes.filter]: filter,
      [classes.small]: small,
      [className]: className !== undefined
    });
    return (
      <div
        className={parallaxClasses + " custom"}
        style={{
          ...style,
          ...this.state
        }}
      >
        <video
          className="video-effect"
          autoPlay
          muted
          loop
          id="landingPage-bgVideo"
        >
          <source src={backgroundVideo} type="video/mp4" />;
          </video>
        {children}
      </div>
    );
  }
}

export default withStyles(parallaxStyle)(Parallax);
