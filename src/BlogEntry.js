import React from 'react';
import classes from './BlogEntry.module.css';

class BlogEntry extends React.Component {

  render()  {
  console.log(this.props.entry, classes);
        return (
            <div className={classes.BlogEntry} onClick={() => this.props.onClick(this.props.entry)}>
              <h3>{this.props.entry.title}</h3>
              <p>{this.props.entry.summary}</p>
              {this.props.entry.image && this.props.entry.image}
            </div>
          ) 
        }    
}
export default BlogEntry;
