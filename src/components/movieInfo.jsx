import React from 'react';

export default function MovieInfo(props) {
  const { title, tagline, release_date, overview, video } = props;

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

  function formatDate(date) {
    if (!date) return;
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateTimeFormat = new Intl.DateTimeFormat('en-US', options);
    return dateTimeFormat.format(new Date(date));
  }

}


//https://www.youtube.com/watch?v=szby7ZHLnkA


{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/szby7ZHLnkA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */ }