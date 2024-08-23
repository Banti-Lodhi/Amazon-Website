import { useState } from "react";
import "./Comment.css";
import CommentsForm from "./CommentsForm";
export default function Comment() {

  let [comments, setComments] = useState([
  {
    username: "@psm",
    remarks: "Excellently Expriencer",
    rating: 4,    
  },
]);

  let addNewComment = (comment) => {
    setComments((currComments) => [...currComments, comment]);
  }

  return (
    <>
      <div>
        <h4>Preetam singh</h4>
        <h2>All Comments</h2>
        {comments.map((comment, idx) => (

          <div className="comment" key={idx}>
            <span>{comment.remarks}</span>
            &nbsp;
            <span>(rating = {comment.rating})</span>
            <p>- {comment.username}</p>
          </div>
        ))}
        </div>
      <hr></hr>
      <CommentsForm addNewComment={addNewComment} />
    </> 
  );
} 