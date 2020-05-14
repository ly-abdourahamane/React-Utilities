import React from 'react';
import classes from './BlogEntry.module.css';

function BlogEntry({entry, onClick}) {
  console.log(entry, classes);
        return (
            <div className={classes.BlogEntry} onClick={() => onClick(entry)}>
              <h3>{entry.title}</h3>
              <p>{entry.summary}</p>
              {entry.image && entry.image}
            </div>
          )     
}

export default BlogEntry;
