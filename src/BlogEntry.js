import React from 'react';

function BlogEntry(props) {
  console.log(props.entry);
        return (
            <div className="BlogEntry">
              <h3>{props.entry.title}</h3>
              <p>{props.entry.summary}</p>
            </div>
          )     
}

export default BlogEntry;
