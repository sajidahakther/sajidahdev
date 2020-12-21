import React from "react";
import "./styles/App.sass";
import DesktopNav from "./components/navbar/desktop-nav";
import MobileNav from "./components/navbar/mobile-nav";
import Backdrop from "./components/navbar/backdrop";
import Home from "./components/home/home";
import Projects from "./components/projects/projects";
import About from "./components/about/about";
import Blog from "./components/blog/blog";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";

class App extends React.Component {
  state = {
    userIsScrolled: false,
    mobileNavbarOpen: false,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.userIsScrolled);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.userIsScrolled);
  }

  userIsScrolled = () => {
    if (window.pageYOffset > 80) {
      this.setState({ userIsScrolled: true });
    } else {
      this.setState({ userIsScrolled: false });
    }
  };

  closeMobileMenu = () => {
    this.setState({ mobileNavbarOpen: false });
  };

  mobileMenuOpen = () => {
    this.setState({ mobileNavbarOpen: true });
  };

  render() {
    let backdrop = <Backdrop closeMobileMenu={this.closeMobileMenu} />;
    if (this.state.mobileNavbarOpen) {
      backdrop = (
        <Backdrop closeMobileMenu={this.closeMobileMenu} isOpen={true} />
      );
    }
    let mobileNavbar = <MobileNav />;
    if (this.state.mobileNavbarOpen) {
      mobileNavbar = (
        <MobileNav isOpen={true} closeMobileMenu={this.closeMobileMenu} />
      );
    }

    return (
      <div className="App">
        {mobileNavbar}
        {backdrop}
        <DesktopNav
          userIsScrolled={this.state.userIsScrolled}
          mobileMenuOpen={this.mobileMenuOpen}
        />
        <Home />
        <About />
        <Projects />
        <Blog />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
