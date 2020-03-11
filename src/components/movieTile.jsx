import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


class MovieTile extends Component {
  // function MovieTile(props) {
  render() {
    const { title, poster_path, overview, id, onMovieSeeMore } = this.props;

    return (
      <article className="card" style={{ width: '18rem' }}>

        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <img src={'http://image.tmdb.org/t/p/w185/' + poster_path} className="card-img-top" alt="..." />
          {/* <p className="card-text">{overview}</p> */}
          {/* <button onClick={() => onMovieSeeMore(id)} className="btn btn-primary">See More</button> */}
          <button onClick={() => this.onMovieSeeMore(id)} className="btn btn-primary">See More</button>
        </div>
      </article>
    );
  }

  onMovieSeeMore(id) {
    this.props.history.push('/movie/' + id);
  }
}

export default withRouter(MovieTile);