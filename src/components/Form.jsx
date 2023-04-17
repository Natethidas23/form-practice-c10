import { useState } from "react";
import App from "../App";

export default function Form() {
  const [firstName, setFirstName] = useState();
  const [lastName, setlastName] = useState();
  const [color, setColor] = useState("#00ff00");
  const [dateLocal, setDateLocal] = useState();
  const [comment, setComment] = useState();

  const handleUpdate = (e) => {
    const newValue = e.target.value;
    console.log(newValue);
  };

  return (
    <>
      <form>
        <h2>Form</h2>
        <label>
          Name:
          <input
            type="text"
            value={firstName}
            placeholder="First Name"
            onChange={handleUpdate}
          />
        </label>

        <br />

        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            placeholder="Last Name"
            onChange={{ handleUpdate }}
          />
        </label>

        <br />

        <label>
          Color:
          <input type="color" value={color} onchange={handleUpdate} />
        </label>
      </form>

      <label>Date:
        <input type="datetime-local" 
            value={dateLocal}
            onChange={ handleUpdate } />
      </label>

        <br/>

       <label>
       
        Message:
        <textarea col="5" row="25" onChange={handleUpdate}>
          {comment}
        </textarea>
      </label> 
    </>
  );
}
