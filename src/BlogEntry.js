import React from 'react';
import './BlogEntry.css';

function BlogEntry({entry}) {
  console.log(entry);
        return (
            <div className="BlogEntry">
              <h3>{entry.title}</h3>
              <p>{entry.summary}</p>
              {entry.image && <p>{entry.image}</p>}
            </div>
          )     
}

export default BlogEntry;
