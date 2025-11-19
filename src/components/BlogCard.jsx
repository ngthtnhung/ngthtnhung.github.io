import React from 'react';
import './BlogCard.css';

const BlogCard = ({ date, title, excerpt, link }) => {
  return (
    <article className="blog-card">
      <div className="blog-image">
        <div className="placeholder-image">Blog Post</div>
      </div>
      <div className="blog-content">
        <span className="blog-date">{date}</span>
        <h3>{title}</h3>
        <p>{excerpt}</p>
        <a href={link} className="read-more">Read More →</a>
      </div>
    </article>
  );
};

export default BlogCard;
