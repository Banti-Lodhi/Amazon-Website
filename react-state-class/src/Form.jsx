import { useState } from "react";
export default function Form() {
  let [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    password: "",
  });
  
let handleInputChange = (event) => {
  setFormData((currData) => {
  return {...currData, [event.target.name] : event.target.value};
});
};

let handleSubmit = (event) => {
   event.preventDefault();
   console.log(formData);
   setFormData({
      fullName: "",
      userName: "",  
      password: "", 
   });
};

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="fullName">FullName: </label>
      <input
       placeholder="Enter your name" 
       type="text" value={formData.fullName} 
       id = "fullName"
       name="fullName"
       onChange={handleInputChange}
       />

       <br/>  <br/>
       <label htmlFor="userName">UserName: </label>
      <input
       placeholder="Enter Username" 
       type="text" value={formData.userName} 
       id = "userName"
       name="userName"
       onChange={handleInputChange}
       />
       <br/>  <br/>
       <label htmlFor="password">PassWord: </label>
      <input
       placeholder="password" 
       type="password" value={formData.password} 
       id = "password"
       name="password"
       onChange={handleInputChange}
       />

      <br/><br/>
      <button>Click On</button>
    </form>
  );
}