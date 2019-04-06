import React, { Component } from "react";

export default class BooksList extends Component {
  stringCutter(string) {
    return string.slice(0, 300);
  }

  listRender = books => {
    return books.map((book, i) => (
      <div className={"book__wrapper"} key={i}>
        {book.volumeInfo.imageLinks ? (
          <img
            src={book.volumeInfo.imageLinks.smallThumbnail}
            alt={book.volumeInfo.title}
          />
        ) : (
          <div className={"noImage"} />
        )}
        <h2>{book.volumeInfo.title}</h2>
        <h3>{book.volumeInfo.authors}</h3>
        <div>
          {book.volumeInfo.description
            ? this.stringCutter(book.volumeInfo.description)
            : null}
          ...
        </div>
      </div>
    ));
  };

  render() {
    return (
      <div>
        <div className={"bookList__wrapper"}>
          {this.props.books ? this.listRender(this.props.books) : null}
        </div>
      </div>
    );
  }
}
