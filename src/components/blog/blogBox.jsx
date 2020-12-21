import React from "react";
import "./blog.sass";

const blog = (props) => (
  <div className="blog__box">
    <div className="blog__image">
      <img src={props.article.image} alt="blog post" />
    </div>
    <div className="blog__info">
      <h4 className="serif">{props.article.title}</h4>
      <p>{props.article.description}</p>
      <a href="#blogpost" className="blog__link">Read more</a>
    </div>
  </div>
);

export default blog;
