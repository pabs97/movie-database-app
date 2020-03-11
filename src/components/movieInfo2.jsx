import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import { withLastLocation } from 'react-router-last-location';

class MovieInfo2 extends Component {


  // export default function MovieInfo2(props) {
  // const { title, tagline, release_date, overview, video } = props;

  state = {
    data: {},
  }

  render() {

    const { title, tagline, release_date, overview, video } = this.state.data;

    return (
      <section>
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
    // const { id } = useParams();
    // debugger;
    console.log('match', id);

    try {
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


// getIndividualMovieInfo = async (movieId) => {
//   // async componentDidMount() {
//   try {
//     const url = `http://localhost:3001/findMovie?query=${movieId}`;
//     const response = await fetch(url);
//     const individual = await response.json();
//     // debugger;
//     this.setState({ individual });
//   } catch (e) {
//     console.error(e);
//   }
// }

// }


//https://www.youtube.com/watch?v=szby7ZHLnkA


{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/szby7ZHLnkA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */ }


export default withLastLocation(MovieInfo2);