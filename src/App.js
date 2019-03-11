import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isOpen: false,
      isMobile: false
    }
    this.toggleNav = this.toggleNav.bind(this)
    this.closeNav = this.closeNav.bind(this)
    this.isMobileToggle = this.isMobileToggle.bind(this)
  }
  toggleNav () {
    this.setState({isOpen: !this.state.isOpen})
  }
  closeNav () {
    this.setState({isOpen: false})
  }
  isMobileToggle () {
    this.setState({isMobile: !this.state.isMobile})
  }
  render() {
    return (
      <div className="App">
        <div
          className={`menu-wrapper ${this.state.isOpen ? 'navOpen' : 'navClosed'} ${this.state.isMobile ? 'mobile' : 'desktop'}`}
        ><Menu closeNav={this.closeNav} /></div>
        <div
          className={`main-wrapper ${this.state.isOpen ? 'navOpen' : 'navClosed'} ${this.state.isMobile ? 'mobile' : 'desktop'}`}
        ><Main toggleNav={this.toggleNav} isMobileToggle={this.isMobileToggle} isMobileStatus={this.state.isMobile} /></div>
      </div>
    );
  }
}

function Menu (props) {
  return (
    <div>
      <a href="javascript:void(0)" className="closeBtn" onClick={() => props.closeNav()}>&times;</a>
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Clients</a>
      <a href="#">Contact</a>
    </div>
  )
}

function Main (props) {
  return (
    <div>
      <span onClick={() => props.toggleNav()}>&#9776; open</span>
      <h1>Lorem ipsum dolor sit amet.</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, magnam maiores accusamus quis nostrum est quisquam alias officiis, inventore amet quia voluptatem. Dicta possimus aut nisi quia ducimus asperiores? Consequuntur aut neque, veritatis, fuga doloremque id, voluptate at pariatur eos mollitia esse voluptatibus iste! Earum sed eum suscipit corporis est.</p>
      <button onClick={() => props.isMobileToggle()}>isMobile toggle</button>
    </div>
  )
}

export default App;
