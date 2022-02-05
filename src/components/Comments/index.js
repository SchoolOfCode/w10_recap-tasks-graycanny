import React from "react";

function Comments({ comments }) {
  return (
    <div>
      <section className="comment-section">
        {comments.map((comment) => {
          return (
            <div className="comment">
              <h4>{comment.name} says:</h4>
              <p>{comment.text}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default Comments;
