import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isOpen: false
    }
    this.toggleNav = this.toggleNav.bind(this)
    this.closeNav = this.closeNav.bind(this)
  }
  toggleNav () {
    this.setState({isOpen: !this.state.isOpen}, () => console.log("New State >>", this.state))
  }
  closeNav () {
    this.setState({isOpen: false})
  }
  render() {
    return (
      <div className="App">
        <div className={`menu-wrapper ${this.state.isOpen ? 'navOpen' : 'navClosed'}`}><Menu closeNav={this.closeNav} /></div>
        <div className={`main-wrapper ${this.state.isOpen ? 'navOpen' : 'navClosed'}`}><Main toggleNav={this.toggleNav} /></div>
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
    </div>
  )
}

export default App;
