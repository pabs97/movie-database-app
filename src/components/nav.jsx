import React, { Component } from 'react';


class Nav extends Component {

  state = {
    value: ''
  }

  render() {
    return (
      <nav className={'navbar navbar-dark ' + this.navColor()} >
        {/* <nav className="navbar navbar-dark bg-dark" > */}
        <span className="navbar-text">Movies</span>
        <span className="navbar-text">Actors</span>

        <form className="form-inline" onSubmit={(event) => this.props.onSearch(event, this.state.value)}>
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={this.handleChange} />
          <button className="btn btn-outline-success my-2 my-sm-0">Search</button>


          {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
        </form>
      </nav>
    )
  }

  navColor() {
    return this.state.type === 'movies' ? 'bg-light' : 'bg-primary'
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }
}

export default Nav;