import { useState, useRef } from "react";
import GuestBookInput from "./GuestBookInput";

export default function GuestBook() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const nameInput = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();

    alert(`Name: ${name}, Message: ${message}`);

    setName("");
    setMessage("");

    nameInput.current.focus();
  }

  return (
    <>
      <h1>Guest Book</h1>
      <form onSubmit={handleSubmit}>
        <GuestBookInput
          ref={nameInput}
          name={name}
          setName={setName}
        />

        <label htmlFor="message">Message</label>
        <br />
        <textarea
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <br />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}
