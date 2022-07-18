import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
function Profile() {
  const { fullName, jobDescription, age } = useSelector((state) => {
    return state;
  });
  const [newAge, setnewAge] = useState();
  const dispatch = useDispatch();
  const changeAge = (age) => {
    dispatch({ type: "UPDATE_AGE", payload: age });
  };
  return (
    <div>
      <h1>Welcome to My Profile </h1>
      <div className="data">
        <h2>{fullName}</h2>
        <h2>{jobDescription}</h2>
        <h2>{age}</h2>
        <input type="text" onChange={(e) => setnewAge(e.target.value)} />
        <button onClick={() => changeAge(newAge)}>Update Age</button>
      </div>
    </div>
  );
}

export default Profile;
