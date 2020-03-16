import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { updateMovieResults } from '../util/movieDbApi';


export default class Nav extends Component {
  state = {
    value: '',
    results: []
  }

  render() {
    const { type } = this.props;
    let bgcolor, placeholder;

    if (type === 'actors') {
      bgcolor = 'bg-dark';
      placeholder = 'Search Actors';
    } else {
      bgcolor = 'bg-primary';
      placeholder = 'Search Movies';
    }

    return (
      // <nav className={'navbar navbar-dark bg-dark'} >
      <nav className={'navbar navbar-dark navbar-expand-md ' + bgcolor} >
        <div className="navbar-collapse collapse">
          < span className="font-weight-bold navbar-text">Super Movie DB</span>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to='/movies' className="nav-link">Movies</Link>
            </li>
            <li className="nav-item">
              <Link to='/actors' className="nav-link">Actors</Link>
            </li>
          </ul></div>



        {/* < span className="font-weight-bold navbar-text">Super Movie DB</span>
      <Link to='/movies' className="navbar-text">Movies</Link>
      <Link to='/actors' className="navbar-text">Actors</Link> */}

        <form className="form-inline" onSubmit={(event) => this.props.onSearch(event, this.state.value)}>
          <input className="form-control mr-sm-2" type="search" placeholder={placeholder} aria-label={placeholder} onChange={this.handleTyping} />
          {this.renderInputSearchResults()}
          <button className="btn btn-outline-success my-2 my-sm-0">Search</button>
        </form>
      </nav >
    )
  }

  renderInputSearchResults() {
    const { results } = this.state;

    if (results.length) {
      return (
        <section
          className="inputSearchResults"
        >

          {results.map((result, i) => {
            return <p key={i}>{result}</p>
          })}
        </section>
      );


    }
  }

  handleTyping = (event) => {


    const { value } = event.target;
    if (!value) {
      this.setState({ value, results: [] });
      return;
    }

    this.setState({ value });

    return;

    debounce(async () => {
      const results = await updateMovieResults(value);

      this.setState({
        results: results
          .splice(0, 5)
          .map(r => r.title)
      });
    });

  }

}


const delay = 1000;
let timeout = null;

function debounce(fn) {
  if (timeout) clearTimeout(timeout);

  timeout = setTimeout(() => {
    fn();
    timeout = null;
  }, delay);
}
