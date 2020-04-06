import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { enableBackButtonAction } from '../actions/movieInfoActions';

class MovieTile extends Component {
  render() {
    let { title, poster_path, id } = this.props;

    // Default poster
    poster_path = poster_path || '/qTwpPJU8zA71oiQCbGNfxSKT6nR.jpg';

    return (
      <article className="card" style={{ width: '18rem' }}>

        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <img src={'http://image.tmdb.org/t/p/w185' + poster_path} className="card-img-top" alt="..." />
          <button onClick={() => this.onMovieSeeMore(id)} className="btn btn-primary">See More</button>
        </div>
      </article>
    );
  }

  onMovieSeeMore(id) {
    this.props.enableBackButtonAction();
    this.props.history.push('/movie/' + id);
  }
}

export default connect(null, { enableBackButtonAction })(withRouter(MovieTile));