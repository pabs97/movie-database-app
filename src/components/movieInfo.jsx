import React from 'react';

export default function MovieInfo(props) {
  const { title, tagline, release_date, overview } = props;

  return (
    <section>
      <h3>{title}</h3>
      <p>{tagline}</p>
      <span>{release_date}</span>
      <p>{overview}</p>
    </section>
  );
}


//https://www.youtube.com/watch?v=szby7ZHLnkA