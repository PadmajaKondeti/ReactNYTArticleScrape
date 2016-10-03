var React = require('react');

var Result = React.createClass({
  render: function(){
    // console.log("results component: ")
    // console.log(this.props.articles)
    // var articleItems= this.props.articles.map(function(article){
    // 	return <li>{article.main}</li>;
    // })

     // <li className="list-group-item">
     //            <h3>{this.props.title}</h3>
     //            <p>{this.props.lead}</p>
     //            <div className="btn-group pull-right">
     //              <button className="btn btn-primary" onClick={this.handleClick}>Save</button>
     //              <a className="btn btn-default" href={this.props.url} target="_blank">
     //                View Article
     //              </a>
     //            </div>
     //          <p>Date Published: {this.props.date}</p>
     //        </li>
    return(
      <div>
  		<li className="list-group-item">
  			<a href={this.props.article.web_url} target="_blank">{this.props.article.main}</a>
     	    <div className="btn-group pull-right">
     	    	<button type="button" className="btn btn-primary">Save</button>
        	</div>
        	<p>{this.props.article.pub_date}</p>
        </li>
      </div>
    )
  }
});

module.exports = Result;