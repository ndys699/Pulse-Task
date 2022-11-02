
import React from "react";

function SignUp() {
  return (
    <div>
      <div>
        <form>
          <div>
            <input placeholder = "Name as per certificates"></input>
          </div>
          <div>
            <input placeholder = "Choose Gender"></input>
          </div>
          <div>
            <input placeholder = "Choose Marital Status"></input>
          </div>
          <div>
            <input type = "file"></input>
          </div>
          <div>
            <input placeholder = "Mobile No"></input>
          </div>
          <div>
            <input placeholder = "City/Town"></input>
          </div>
          <div>
            <input placeholder = "Choose Your State"></input>
          </div>
          <div>
            <input placeholder = "Email"></input>
          </div>
          <div>
            <input placeholder = "Password"></input>
          </div>
          <div>
            <input placeholder = "Re-type Your Password"></input>
          </div>
          
          <div>
            <button>Submit</button>
            <button>Back</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;

