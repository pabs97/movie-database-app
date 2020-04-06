import React, { Component } from 'react';
import { withLastLocation } from 'react-router-last-location';
import { getMovieAction } from '../actions/fetchMovieActions';
import { connect } from 'react-redux';

class MovieInfo extends Component {

  render() {
    const { title, tagline, release_date, overview, video } = this.props;

    return (
      <section>
        {this.showBackButton()}

        <h3>{title}</h3>
        {videoIframe()}
        <p>{tagline}</p>
        <span>Release Date: {formatDate(release_date)}</span>
        <p>{overview}</p>
      </section>
    );

    function videoIframe() {
      if (video && video.key) {
        return (
          <iframe width="560" height="315" src={`https://www.youtube.com/embed/${video.key}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        );
      }
    }
  }

  componentDidMount = () => {
    this.props.getMovieAction(this.props.match.params.id);
  }

  showBackButton = () => {
    if (this.props.backButton) {
      return <button className="btn btn-primary" onClick={this.props.history.goBack}>Back to Results</button>;
    }
  }
}

function formatDate(date) {
  if (!date) return;

  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const dateTimeFormat = new Intl.DateTimeFormat('en-US', options);
  return dateTimeFormat.format(new Date(date));
}

const mapStateToProps = (state) => {
  return { ...state.movieInfoReducer };
}

export default connect(mapStateToProps, { getMovieAction })(withLastLocation(MovieInfo));
