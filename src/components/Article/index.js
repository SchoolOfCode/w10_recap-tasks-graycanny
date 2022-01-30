import React from "react";
import "./article.css";
import Title from "../Title";
import Para from "../Para";
import Comments from "../Comments";
import { Button } from "antd";
import { Divider } from "antd";

function Article({ article }) {
  return (
    <div>
      <article className="post">
        <Title title={article.title} />
        <Divider />
        <Para className="para" para={article.paragraphs} />
        <Divider />
        <Button className="like-button">Like 👍</Button>
        <Divider />
        <Comments comments={article.comments} />
      </article>
    </div>
  );
}

export default Article;
