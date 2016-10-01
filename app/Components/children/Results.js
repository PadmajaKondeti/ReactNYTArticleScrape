var React = require('react');

var Results = React.createClass({
  render: function(){
    return(
      <div>{console.log("Results: ", this.props.articles)}
      </div>
    )
  }
});

module.exports = Results;