import React, { useRef, useState } from "react";
import Modal from "./Modal";

export default function Card({ type, time }) {
  const [remaingtime, setRemaining] = useState(time * 1000);
  const dailogref = useRef();
  const timeref = useRef();
  const status = remaingtime > 0 && remaingtime < time * 1000;
  function handlereset() {
    setRemaining(time * 1000);
  }
  if (remaingtime <= 0) {
    clearInterval(timeref.current);
    dailogref.current.showModal();
  }
  function handlestart() {
    timeref.current = setInterval(() => {
      setRemaining((time) => time - 10);
    }, 10);
  }
  function handlestop() {
    dailogref.current.showModal();
    clearInterval(timeref.current);
  }
  return (
    <div className="challenge">
      <Modal
        targettime={time}
        ref={dailogref}
        remaingtime={remaingtime}
        handlereset={handlereset}
      />

      <h2>{type}</h2>
      <div className="challenge-time">
        {time} second{time > 1 ? "" : "s"}
      </div>
      <button onClick={status ? handlestop : handlestart}>
        {status ? "Stop Challenge" : "Start Challenge"}
      </button>
      <p className={status ? "active" : undefined}>
        {status ? "Timer is running...." : "Timer inactive"}
      </p>
    </div>
  );
}
