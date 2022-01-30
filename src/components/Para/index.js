import React from "react";

function Para({ para }) {
  return (
    <div>
      {para.map((paragraph, index) => (
        <p>{paragraph}</p>
      ))}
    </div>
  );
}

export default Para;
