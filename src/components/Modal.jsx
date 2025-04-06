import React from "react";

export default function Modal({ ref, targettime, remaingtime, handlereset }) {
  var result;
  console.log(remaingtime);
  var res = (remaingtime / 1000).toFixed(2);
  if (remaingtime <= 0) result = "YOU LOST";
  else result = "YOU WON";
  return (
    <dialog ref={ref} className="result-modal">
      <h2>{result}</h2>
      <p>
        target time was <strong>{targettime} seconds.</strong>
      </p>
      <p>
        You stopped timer with <strong>{res} seconds left.</strong>
      </p>
      <form method="dailog">
        <button onClick={handlereset}> Restart</button>
      </form>
    </dialog>
  );
}
