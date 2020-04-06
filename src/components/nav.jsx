import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withLastLocation } from 'react-router-last-location';
import { handleSearchTypingAction } from '../actions/navActions';
import { searchMoviesAction } from '../actions/fetchMovieActions';
import { connect } from 'react-redux';

class Nav extends Component {

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

        <form
          className="form-inline"
          onSubmit={this.handleSearchSubmit}
        >
          <input className="form-control mr-sm-2" type="search" placeholder={placeholder} aria-label={placeholder} onChange={this.props.handleSearchTypingAction} />
          {/* {this.renderInputSearchResults()} */}
          <button className="btn btn-outline-success my-2 my-sm-0">Search</button>
        </form>
      </nav >
    )
  }

  handleSearchSubmit = (event) => {
    this.props.searchMoviesAction(event, this.props.searchValue)
      .then(() => this.props.history.push('/movies/'));
  }

  // TODO: implement this
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

  // handleTyping = (event) => {
  //   const { value } = event.target;
  //   if (!value) {
  //     this.setState({ value, results: [] });
  //     return;
  //   }
  //   this.setState({ value });
  //   return;

  //   debounce(async () => {
  //     const results = await updateMovieResults(value);

  //     this.setState({
  //       results: results
  //         .splice(0, 5)
  //         .map(r => r.title)
  //     });
  //   });
  // }
}

// const delay = 1000;
// let timeout = null;

// function debounce(fn) {
//   if (timeout) clearTimeout(timeout);

//   timeout = setTimeout(() => {
//     fn();
//     timeout = null;
//   }, delay);
// }

const mapStateToProps = (state) => {
  return { ...state.searchInputReducer };

};

export default connect(mapStateToProps, {
  searchMoviesAction,
  handleSearchTypingAction
})(withLastLocation(Nav));