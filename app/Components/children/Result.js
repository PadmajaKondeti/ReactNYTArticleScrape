var React = require('react');

var Result = React.createClass({
  render: function(){
    // console.log("results component: ")
    // console.log(this.props.articles)
    // var articleItems= this.props.articles.map(function(article){
    // 	return <li>{article.main}</li>;
    // })
    return(
      <div>
  		<li>
        	<a href={this.props.article.web_url} target="_blank">{this.props.article.main}</a>
        </li>
      </div>
    )
  }
});

module.exports = Result;