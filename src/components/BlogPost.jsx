// src/components/BlogPost.jsx
import React from 'react';

function BlogPost({ title, date, content }) { // { title, date, content } are props
  return (
    <article className="blog-post"> {/* Apply CSS class */}
      <h3>{title}</h3>
      <small>Published on {date}</small>
      <p>{content}</p>
    </article>
  );
}

export default BlogPost;