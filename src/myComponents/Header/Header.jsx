import React from "react";
import "myComponents/Header/Header.scss";
import HeaderLinks from "myComponents/Header/HeaderLinks.jsx";
import HamburgerMenu from "react-hamburger-menu";
const isMobileOnly = window.innerWidth <= 767 ? true : false;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.state = {
      drawerOpenFlagFlag: false
    };
  }
  handleDrawerToggle = () => {
    this.setState(
      prevState => {
        return { drawerOpenFlag: !prevState.drawerOpenFlag };
      },
      () => {
        if (this.state.drawerOpenFlag) {
          this.refs["headerNavBar-ref"].classList.remove("drawer-hide");
          this.refs["headerNavBar-ref"].style.marginTop = "0px";
          document.getElementById("hamburgerOverlay-ref").style.background = "#000000bd";
          document.getElementById("hamburgerOverlay-ref").style.zIndex = "100";
        } else {
          this.refs["headerNavBar-ref"].style.marginTop = "-250px";
          document.getElementById("hamburgerOverlay-ref").style.zIndex = "0";
          document.getElementById("hamburgerOverlay-ref").style.background = "transparent";
        }
      }
    );
  };
  headerColorChange = () => {
    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > 600) {
      this.refs["headerNavBar-ref"].classList.add("scrolledHeader-style");
      this.refs["headerNavBar-ref"].classList.remove("transparentHeader-style");
    } else {
      this.refs["headerNavBar-ref"].classList.remove("scrolledHeader-style");
      this.refs["headerNavBar-ref"].classList.add("transparentHeader-style");
    }
  };

  setWrapperRef(node) {
    this.wrapperRef = node;
  }
  /**
   * Toggle on Clicking outside of element
   */
  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      if (this.state.drawerOpenFlag) {
        this.handleDrawerToggle();
      }
    }
  }

  componentDidMount() {
    if (isMobileOnly) {
      document.addEventListener("mousedown", this.handleClickOutside);
    }
    window.addEventListener("scroll", this.headerColorChange);
  }
  componentWillUnmount() {
    if (isMobileOnly) {
      document.removeEventListener("mousedown", this.handleClickOutside);
    }
    window.removeEventListener("scroll", this.headerColorChange);
  }

  render() {
    if (isMobileOnly) {
      return (
        <div
          className="header-container row no-gutters w-100 drawer-hide"
          ref="headerNavBar-ref"
        >
          <div ref={this.setWrapperRef}>
            <div className="hamburgerMenu-icon">
              <HamburgerMenu
                isOpen={this.state.drawerOpenFlag === undefined ? false : this.state.drawerOpenFlag}
                menuClicked={this.handleDrawerToggle.bind(this)}
                width={25}
                height={20}
                strokeWidth={3}
                rotate={0}
                color="white"
                borderRadius={0}
                animationDuration={0.5}
              />
            </div>
            <div
              id="headerNavBar"
              className="header-container row no-gutters w-100 header-commonStyles"
              ref="headerNavBar-ref"
            >
              <div id="headerLinksId" className="col-12 header-headerLinks">
                <HeaderLinks handleDrawerToggle={this.handleDrawerToggle} />
              </div>
              <hr className="c" />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div
          id="headerNavBar"
          className="header-container row no-gutters w-100 header-commonStyles"
          ref="headerNavBar-ref"
        >
          <div className="col-12 header-headerLinks">
            <HeaderLinks />
          </div>
          <hr />
        </div>
      );
    }
  }
}

export default Header;
