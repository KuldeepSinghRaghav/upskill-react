import React, { useState } from "react";

function ControlledComponent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // handling multiple inputs with the same method.
  function handleChange(e) {
    if (e.target.name === "name") {
      const capLetter = e.target.value.toUpperCase();
      setName(capLetter);
    }
    if (e.target.name === "email") {
      setEmail(e.target.value);
    }
    // .... other inputs if we add more.
  }

  return (
    <div className="main">
      <form>
        <label>
          Name:
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
      </form>
    </div>
  );
}

export default ControlledComponent;
