import React, { Component } from 'react';
import { apikey } from '../util/keys.json';

export default class MovieTile extends Component {
  state = {}

  render() {

    const { title, poster_path, overview } = this.props;

    return (
      <article className="card" style={{ width: '18rem' }}>
        <img src={this.posterPath(poster_path)} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{overview}</p>
          <a href="#" className="btn btn-primary">See More</a>
        </div>
      </article >
    );
  }

  posterPath(poster) {
    return `https://api.themoviedb.org/3/movie${poster}?api_key=${apikey}&language=en-US&page=1`;
  }
}


// https://api.themoviedb.org/3/movie//images?api_key=e922de56b43e77f334779a67e764c22d&language=en-US
// https://api.themoviedb.org/3/movie//images?api_key=e922de56b43e77f334779a67e764c22d&language=en-US
// /fpemzjF623QVTe98pCVlwwtFC5N.jpg
// https://api.themoviedb.org/3/movie/19316/images?api_key=e922de56b43e77f334779a67e764c22d&language=en-US
// https://api.themoviedb.org/3/movie/19316/images/fpemzjF623QVTe98pCVlwwtFC5N.jpg?api_key=e922de56b43e77f334779a67e764c22d