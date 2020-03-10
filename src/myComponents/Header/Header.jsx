import React from "react";
import "myComponents/Header/Header.scss";
import HeaderLinks from "myComponents/Header/HeaderLinks.jsx";
import HamburgerMenu from "react-hamburger-menu";
const isMobileOnly = window.innerWidth <= 767 ? true : false;

class Header extends React.Component {
  constructor(props) {
    super(props);
    if (isMobileOnly) {
      this.hamburgerRef = React.createRef();
      this.hamburgerOverlayRef = React.createRef();
    }
    else {
      this.headerNavBarRef = React.createRef();

    }
    this.state = {
      drawerOpenFlag: false
    };
  }
  handleDrawerToggle = () => {
    this.setState(
      prevState => {
        return { drawerOpenFlag: !prevState.drawerOpenFlag };
      },
      () => {
        if (this.state.drawerOpenFlag) {
          this.hamburgerRef.current.style.marginTop = "0px";
          this.hamburgerOverlayRef.current.style.background = "#000000bd";
          this.hamburgerOverlayRef.current.style.zIndex = "100";
        } else {
          this.hamburgerRef.current.style.marginTop = "-250px";
          this.hamburgerOverlayRef.current.style.zIndex = "0";
          this.hamburgerOverlayRef.current.style.background = "transparent";
        }
      }
    );
  };
  headerColorChange = () => {
    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > 600) {
      this.headerNavBarRef.current.classList.add("header__scrolledStyle");
      this.headerNavBarRef.current.classList.remove("header__transparentStyle");
    } else {
      this.headerNavBarRef.current.classList.remove("header__scrolledStyle");
      this.headerNavBarRef.current.classList.add("header__transparentStyle");
    }
  };

  /**
   * Toggle on Clicking outside of element
   */
  handleClickOutside = (event) => {
    if (this.hamburgerRef && !this.hamburgerRef.current.contains(event.target)) {
      if (this.state.drawerOpenFlag) {
        // this.handleDrawerToggle();
      }
    }
  }

  componentDidMount() {
    if (isMobileOnly) {
      document.addEventListener("mousedown", this.handleClickOutside);
    }
    else {
      window.addEventListener("scroll", this.headerColorChange);
    }
  }
  componentWillUnmount() {
    if (isMobileOnly) {
      document.removeEventListener("mousedown", this.handleClickOutside);
    }
    else {
      window.removeEventListener("scroll", this.headerColorChange);
    }
  }

  render() {
    if (isMobileOnly) {
      console.log("state", this.state.drawerOpenFlag);

      return (
        <div
          className="header-container row no-gutters w-100"
        >
          <div ref={this.hamburgerOverlayRef} className="header__hamburger-overlay"></div>
          <div className="hamburgerMenu-icon">
            <HamburgerMenu
              isOpen={this.state.drawerOpenFlag === undefined ? false : this.state.drawerOpenFlag}
              menuClicked={this.handleDrawerToggle}
              width={25}
              height={20}
              strokeWidth={3}
              rotate={0}
              color="white"
              borderRadius={0}
              animationDuration={0.5}
            />
          </div>
          <div ref={this.hamburgerRef} className="col-12 header__links">
            <HeaderLinks handleDrawerToggle={this.handleDrawerToggle} />
          </div>
          <hr />
        </div>
      );
    } else {
      return (
        <div
          className="header-container row no-gutters w-100 header__commonStyles"
          ref={this.headerNavBarRef}
        >
          <div className="col-12 header__links">
            <HeaderLinks />
          </div>
          <hr />
        </div>
      );
    }
  }
}

export default Header;
