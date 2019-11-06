import React, { Component } from 'react';
import NavEl from './NavEl';
import Progress from './Progress';

class Header extends Component {
  state = {
    scrollPosition: 0
  };

  listenToScrollEvent = () => {
    document.addEventListener('scroll', () => {
      requestAnimationFrame(() => {
        this.calculateScrollDistance();
      });
    });
  };

  calculateScrollDistance = () => {
    const scrollTop = window.pageYOffset; // how much the user has scrolled by
    const winHeight = window.innerHeight;
    const docHeight = this.getDocHeight();

    const totalDocScrollLength = docHeight - winHeight;
    const scrollPosition = Math.floor((scrollTop / totalDocScrollLength) * 100);

    this.setState({
      scrollPosition
    });
  };

  getDocHeight = () => {
    return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );
  };

  componentDidMount() {
    this.listenToScrollEvent();
  }

  render() {
    return (
      <header>
        <Progress scroll={this.state.scrollPosition + '%'} />
        <nav className="fixed z-10 bottom-0 w-100 bg-black flex flex-row left-0-l w-auto-l h-100-l">
          <ul className="list w-100 flex justify-around flex-column-l justify-center-l">
            <NavEl to="/" icon="user-circle" title="About" />
            <NavEl to="/builds" icon="folder-open" title="Builds" />
            <NavEl to="/contact" icon="envelope" title="Contact" />
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
