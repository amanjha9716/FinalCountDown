import Player from "./components/Player.jsx";
import Card from "./components/Card.jsx";
function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <Card time={1} type={"Easy"} />
        <Card time={5} type={"Tittle Tough"} />
        <Card time={10} type={"Hard"} />
        <Card time={15} type={"Pro"} />
      </div>
    </>
  );
}

export default App;
