// import { useState } from "react";
import { useFormik } from "formik";
import "./comForm.css";
const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = 'username cannot be empty!';
  }

  return errors;
};
export default function CommentsForm({addNewComment}) {

  // let [formData, setFormData] = useState({
  //   username: "",
  //   remarks: "",
  //   rating: 5,
  // });

const formik = useFormik({
  initialValues: {
    username: '',
    remarks: '',
    rating: 5,
  },
  validate,
  onSubmit: (values) => {
    alert(JSON.stringify(values, null, 2));
  },
});


  // let handleInputChange = (event) => {
  //   setFormData((currData) => {
  //     return {...currData, [event.target.name]: event.target.value }
  //   });
  // };

// let handleForm = (event) => {
//   if(!formData.username) {
//     console.log("username is null value");
//     setIsValid(false);
//     event.preventDefault();
//     return ;
//   }
//   console.log(formData);
//   addNewComment(formData);
//   event.preventDefault();  
//   setFormData(
//     {
//       username: "",
//       remarks: "",
//       rating: 5,
//     });
// };
  return (
    <>
    <form onSubmit={formik.handleSubmit} className="commentForm1">
    <label htmlFor="username">username: </label>
    <input type="text" 
    placeholder="username" 
    value={formik.values.username}
    onChange={formik.handleChange}
    id="username"
    name="username"
    />

{formik.errors.username ? <p style={{color: "brown", fontWeight: "bold", textDecoration:"italic"}}>{formik.errors.username}</p> : null}
    {/* {!isValid && <p style={{color: "red", fontSize: "10px" }}>username is not empty!</p>} */}
    <br/><br/>

    <label htmlFor="remark">Remarks: </label>
    <textarea 
    value={formik.values.remarks} 
    placeholder="add new remarks"
    onChange={formik.handleChange}
    id="remark"
    name="remarks"
    ></textarea><br/><br/>

    <label htmlFor="rating">Ratings: </label>
    <input type="number" 
    placeholder="rating" 
    min={1} max={5} 
    value={formik.values.rating}
    onChange={formik.handleChange}
    id="rating"
    name="rating"
    />
    <br/><br/>
    <button type="submit" className="btn">Add Comment</button> 
    </form>
    </>
  )
}