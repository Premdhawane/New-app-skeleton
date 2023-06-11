import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
      <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Khabare  Roj Ki </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
              <a className="nav-link active" aria-current="page" href="#">Home</a>
              <a className="nav-link" href="#">About</a>
           
        </div>
      </div>
    </nav>
      </div>
    )
  }
}

export default Navbar
