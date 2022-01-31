import React from "react";
import css from "./Para.module.css";

function Para({ para }) {
  return (
    <div className={css.para}>
      {para.map((paragraph, index) => (
        <p>{paragraph}</p>
      ))}
    </div>
  );
}

export default Para;
