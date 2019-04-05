import React, { Component } from "react";

export default class BooksList extends Component {
  stringCutter(string) {
    return string.slice(0, 300);
  }

  listRender = books => {
    return books.map((book, i) => (
      <div key={i}>
        <h2>{book.volumeInfo.title}</h2>
        <h3>{book.volumeInfo.authors}</h3>
        <div>
          {book.volumeInfo.description
            ? this.stringCutter(book.volumeInfo.description)
            : null}
          ...
        </div>
        {book.volumeInfo.imageLinks ? (
          <img
            src={book.volumeInfo.imageLinks.smallThumbnail}
            alt={book.volumeInfo.title}
          />
        ) : null}
      </div>
    ));
  };

  render() {
    return (
      <div>
        {this.props.books ? <h1>data loaded</h1> : <h1>loading data</h1>}
        <div>{this.props.books ? this.listRender(this.props.books) : null}</div>
      </div>
    );
  }
}
