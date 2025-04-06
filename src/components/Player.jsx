import { useRef, useState } from "react";

export default function Player() {
  const [name, setName] = useState();
  const nameref = useRef();
  function handleSubmit() {
    setName(nameref.current.value);
  }
  return (
    <section id="player">
      <h2>Welcome {name ? name : "unknown entity"}</h2>
      <p>
        <input ref={nameref} type="text" />
        <button onClick={handleSubmit}>Set Name</button>
      </p>
    </section>
  );
}
