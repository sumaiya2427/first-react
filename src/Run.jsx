import { useState } from "react";

export default function Run() {
  const [run, setRun] = useState(0);
  const [sixes, setSixes] = useState(0);
  const handlesingle = () => {
    const upRun = run + 1;
    setRun(upRun);
  };
  const handleSix = () => {
    const upRun = run + 6;
    const updatetSixes = sixes + 1;
    setSixes(updatetSixes);

    setRun(upRun);
  };
  const handleFour = () => {
    const upRun = run + 4;
    setRun(upRun);
  };
  const style = {
    border: "2px solid green",
  };
  return (
    <div style={style}>
      <h3>Palayer:Bangla Batsman</h3>
      {run > 50 && <p>Youre score 50</p>}
      <p>
        <small>six:{sixes}</small>
      </p>
      <h1>Score:{run}</h1>
      <button onClick={handlesingle}>Singles</button>
      <button onClick={handleFour}>Four</button>
      <button onClick={handleSix}>Six</button>
    </div>
  );
}
