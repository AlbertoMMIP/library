import React from "react";

function CardBook({book}) {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={book.urlimage} alt="Placeholder" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{book.title}</p>
            <p className="subtitle is-6">@{book.author}</p>
          </div>
        </div>

        <div className="content" style={{minHeight: 250}}>
          {book.description.substring(0,150)} . . .
          <br />
          <time dateTime="2016-1-1">Registrado el {book.register_date}</time>
        </div>
      </div>
    </div>
  );
}

export default CardBook;
