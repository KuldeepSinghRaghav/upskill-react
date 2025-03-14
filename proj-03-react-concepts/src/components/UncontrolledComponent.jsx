import React, { useRef } from "react";

function UncontrolledComponent() {
  {
    /* recommended to use controlled components, uncontrolled components are handeled by the DOM itself. */
  }
  const refObject = useRef();

  function handleSubmit(e) {
    // e.preventDefault() prevents the default form submission behavior, which would reload the page.
    e.preventDefault()
    const value = refObject.current.value.toUpperCase()
    alert(value)
  }
  return (
    <div className="main">
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label> 
        <br />
        <input type="text" ref={refObject} />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UncontrolledComponent;
