import React from "react";
import css from "./Title.module.css";

function Title({ title }) {
  return (
    <div>
      <h2 className={css.articleTitle}>{title}</h2>
    </div>
  );
}

export default Title;
