import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { booksList } from "./actions";
import Search from "./components/search";
import BooksList from "./components/booksList";

import "./App.css";

class App extends Component {
  

  getKeywords = e => {
    let key = e.target.value;
    this.props.booksList(key);
  };

  render() {
    return (
      <div className="App">
        <Search keywords={this.getKeywords} />      
        <BooksList books={this.props.books.items}/>
        <h2>chossenbook</h2>
      </div>
    );
  }
}
const mapStateToProps = state => {
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
