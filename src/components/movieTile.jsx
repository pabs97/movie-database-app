import React from 'react';

export default function MovieTile(props) {

  const { title, poster_path, overview, id, onMovieSeeMore } = props;

  return (
    <article className="card" style={{ width: '18rem' }}>
      {/* <img src={this.posterPath(poster_path)} className="card-img-top" alt="..." /> */}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{overview}</p>
        <button onClick={() => onMovieSeeMore(id)} className="btn btn-primary">See More</button>
      </div>
    </article>
  );
}
