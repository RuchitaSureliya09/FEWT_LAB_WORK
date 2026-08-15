import React from "react";

function A1_Child() {
  return (
    <>
      <h1>Student Details</h1>
      <A1_Parent name="Ruchita" age="18" />
    </>
  );
}

function A1_Parent({ name, age }) {
  return (
    <>
      <h2>Name : {name}</h2>
      <h3>Age : {age}</h3>
    </>
  );
}

export default A1_Child;
