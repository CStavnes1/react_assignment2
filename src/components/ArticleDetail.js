import React from "react";

const ArticleDetail = props => (
  <div className="text-center">
    <img
      alt={props.title}
      className="img-fluid"
      src={props.src}
      style={{ margin: "0 auto" }}
    />
    <h3>Title: {props.Title}</h3>
    <h3>Date: {props.Date}</h3>
    <h3>URL: {props.url}</h3>
  </div>
);

export default ArticleDetail;
