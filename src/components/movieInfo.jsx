import React, { Component } from 'react';
import { withLastLocation } from 'react-router-last-location';

class MovieInfo extends Component {

  state = {
    data: {},
  }

  render() {

    const { title, tagline, release_date, overview, video } = this.state.data;

    // TODO: implement back button
    return (
      <section>

        {/* <button className="btn btn-primary" onClick={this.handleBackClick}>Back to Results</button> */}
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
          <iframe width="560" height="315" src={`https://www.youtube.com/embed/${video.key}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        );
      }
    }
  }

  componentDidMount = async () => {
    const { id } = this.props.match.params;
    console.log('match', id);

    try {
      // TODO: put this in util
      const url = `http://localhost:3001/findMovie?query=${id}`;
      const response = await fetch(url);
      const data = await response.json();
      this.setState({ data });
    } catch (e) {
      console.error(e);
    }
  }

}

function formatDate(date) {
  if (!date) return;

  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const dateTimeFormat = new Intl.DateTimeFormat('en-US', options);
  return dateTimeFormat.format(new Date(date));
}

export default withLastLocation(MovieInfo);