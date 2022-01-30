import React from "react";
import Title from "../Title";
import Para from "../Para";
import Comments from "../Comments";

function Article({ article }) {
  return (
    <div>
      <article className="post">
        <Title title={article.title} />
        <Para para={article.paragraphs} />
        <button className="like-button">Like 👍</button>
        <Comments comments={article.comments} />
      </article>
    </div>
  );
}

export default Article;
