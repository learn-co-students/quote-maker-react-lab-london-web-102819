import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote } from '../actions/quotes.js';
import { downvoteQuote } from '../actions/quotes.js';
import { upvoteQuote } from '../actions/quotes.js';

class Quotes extends Component {

  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {this.props.quotes.map(q => <QuoteCard 
                  removeQuote = {this.props.removeQuote} 
                  upvoteQuote = {this.props.upvoteQuote} 
                  downvoteQuote = {this.props.downvoteQuote} 
                  quote = { q } 
              />) }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//add arguments to connect as needed
export default connect(state => ({quotes: state.quotes}), {upvoteQuote, downvoteQuote, removeQuote})(Quotes);
