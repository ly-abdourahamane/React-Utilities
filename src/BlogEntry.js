import React from 'react';
import classes from './BlogEntry.module.css';

function BlogEntry({entry}) {
  console.log(entry, classes);
 // classes.BlogEntry['background-color'] = 'blue';
        return (
            <div className={classes.BlogEntry}>
              <h3>{entry.title}</h3>
              <p>{entry.summary}</p>
              {entry.image && <p>{entry.image}</p>}
            </div>
          )     
}

export default BlogEntry;
