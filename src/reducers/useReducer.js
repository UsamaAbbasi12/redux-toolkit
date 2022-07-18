import { createReducer } from "@reduxjs/toolkit";
const initialstate = {
  fullName: "Usama Tahir",
  jobDescription: "Software Engineer",
  age: 23,
};

// const userReducer = (state = initialstate, action) => {
//   if (action.type === "UPDATE_AGE") {
//     return {
//       ...state,
//       age: action.payload,
//     };
//   }
//   return state;
// };

// export default userReducer;
export default createReducer(initialstate, (builder) => {
  builder.addCase("UPDATE_AGE", (state, action) => {
    state.age = action.payload;
  });
});
