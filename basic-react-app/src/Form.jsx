function handleFormSubmit(event) {
  event.preventDefault();
  console.log("Form was submited");
}


export default function Form() {
  return (
      <form onSubmit={handleFormSubmit}>
    <input type="text" placeholder="Here Write Something"/>
      <button>Submit Form</button>
  </form>
  );
}