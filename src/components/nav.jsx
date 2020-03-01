import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {

  state = {
    value: ''
  }

  render() {
    const { search, bgcolor } = this.getTypeProps();

    return (
      <nav className={'navbar navbar-dark ' + bgcolor} >

        <span className="font-weight-bold navbar-text">Super Movie DB</span>
        <Link to='/movies' className="navbar-text">Movies</Link>
        <Link to='/actors' className="navbar-text">Actors</Link>

        <form className="form-inline" onSubmit={(event) => this.props.onSearch(event, this.state.value)}>
          <input className="form-control mr-sm-2" type="search" placeholder={search} aria-label="Search" onChange={this.handleChange} />
          <button className="btn btn-outline-success my-2 my-sm-0">Search</button>
        </form>
      </nav>
    )
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }
}

export class NavActors extends Nav {
  getTypeProps() {
    return {
      search: 'Search Actors',
      bgcolor: 'bg-dark',
    }
  }
}

export class NavMovies extends Nav {
  getTypeProps() {
    return {
      search: 'Search Movies',
      bgcolor: 'bg-primary',
    }
  }
}
