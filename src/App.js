import React, { Component } from "react";
import { connect } from "react-redux";
import Search from "./components/search";
import { bindActionCreators } from "redux";
import { booksList } from "./actions";
import { debounce } from "lodash.debounce";

import "./App.css";

class App extends Component {
  printProps = () => {
    let items = this.props.books.items;
    console.log(items[0].volumeInfo.title)
    console.log(items[0].volumeInfo.authors)
    console.log(items[0].volumeInfo.description)
    console.log(items[0].volumeInfo.imageLinks.thumbnail)
  };
  getKeywords = e => {
    let key = e.target.value;
    this.props.booksList(key);
  };

  render() {
    return (
      <div className="App">
        <Search keywords={this.getKeywords} />
        <button onClick={this.printProps}>klick me</button>
        <h2>booklist</h2>
        <h2>chossenbook</h2>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log("app", state);
  return {
    books: state.booksList.books
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      booksList
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
