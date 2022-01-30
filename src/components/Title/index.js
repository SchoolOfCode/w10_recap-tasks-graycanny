import React from "react";
import "./Title.css";

function Title({ title }) {
  return (
    <div>
      <h2 className="articleTitle">{title}</h2>
    </div>
  );
}

export default Title;
