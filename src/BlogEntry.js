import React from 'react';
import classes from './BlogEntry.module.css';

class BlogEntry extends React.Component {

  render()  {
  console.log(this.props.entry, classes);
  let {entry, onClick} = this.props;
        return (
            <div className={classes.BlogEntry} onClick={() =>onClick(entry)}>
              <h3>{entry.title}</h3>
              <p>{entry.summary}</p>
              {entry.image && entry.image}
            </div>
          ) 
        }    
}
export default BlogEntry;
