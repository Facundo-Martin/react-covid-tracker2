import React from "react";
import "./Article.css";

const Article = ({ image, title, author, date, summary, link }) => {
  const summaryLength = summary.length;
  console.log(summaryLength);
  return (
    <div className="app__article">
      <div className="app__article-image">
        <a href={link} target="_blank">
          <img src={image} alt="news image" />
        </a>
      </div>

      <div className="app__article-content">
        <div className="app__article-heading">
          <h4>{title}</h4>
        </div>
        <div className="app__article-subheading">
          <p>{author ? author : "Random Author"}</p>
          <div>
            <i>{date}</i>
          </div>
        </div>
        <div className="app__article-summary">
          <div className="app__article-summary-content">
            {/* {summary.Length <= 800 ? summary : "PUTO EL QUE LEE"} */}
            {summary}
          </div>
          ...
        </div>
        <a href={link}>Read More</a>
      </div>
    </div>
  );
};

export default Article;
