import React, { Component } from 'react';
import MovieTitle from './movieTitle';

class MovieResults extends Component {
  state = {
    movies: [],
  };

  render() {
    return (
      <React.Fragment>
        <h3>{this.title}</h3>
        {/* <p>{this.props.search}</p> */}
        <section className="d-flex flex-wrap">
          {this.populateMovieTitles()}
        </section>
      </React.Fragment>

    );
  }

  populateMovieTitles() {
    return this.state.movies.map(movie => {
      return (
        <MovieTitle
          key={movie.id}
          {...movie}
        />
      )
    });
  }
}








export class PopularResults extends MovieResults {
  constructor() {
    super();
    this.title = 'Popular Movies';
    this.endpoint = 'http://localhost:3001/popularMovies';
  }

  async componentDidMount() {
    const response = await fetch(this.endpoint);
    const movies = await response.json();

    console.log(movies);
    this.setState({ movies });
  }
}

export class SearchResults extends MovieResults {
  constructor() {
    super();
    this.title = 'Search Results';
    this.endpoint = 'http://localhost:3001/searchResults';
  }

  async updateSearchResults(search) {
    if (!search) return;

    const url = `${this.endpoint}?query=${search}`;
    const response = await fetch(url);
    const movies = await response.json();

    this.setState({ movies });
  }
}







const sample = {
  "popularity": 365.261,
  "vote_count": 568,
  "video": false,
  "poster_path": "/uPGq1mkEXznUpapDmOSxbsybjfp.jpg",
  "id": 475303,
  "adult": false,
  "backdrop_path": "/6fkqwqLEcDZOEAnBBfKAniwNxtx.jpg",
  "original_language": "en",
  "original_title": "A Rainy Day in New York",
  "genre_ids": [
    35,
    10749
  ],
  "title": "A Rainy Day in New York",
  "vote_average": 6.8,
  "overview": "Two young people arrive in New York to spend a weekend, but once they arrive they're met with bad weather and a series of adventures.",
  "release_date": "2019-07-26"
}