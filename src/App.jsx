import "./App.css";
import ToDo from "./todo";
import Food from "./food";
import Counter from "./counter";
import Batsman from "./Batsman";
import Run from "./Run";

function App() {
  const time = 50;
  function handleClick() {
    alert("i'm ckick");
  }
  function handleClick2() {
    alert("click 2");
  }
  return (
    <>
      <h1> React core concept</h1>
      <button onClick={handleClick2}>buton2</button>
      <button onClick={handleClick}>butone</button>
      <ToDo task="js" isdone={true}></ToDo>
      <Food task="done" isDone={true} time={time}></Food>
      <Food task="khabo" isDone={false} time={0}></Food>
      <Run> </Run>
      <Batsman></Batsman>

      <Counter></Counter>

      {/* <Student></Student>
      <Student></Student>
      <Person></Person>
      <TestStyle name="Modumdar" tech="english"></TestStyle>
      <TestStyle name="rashedar" tech="Bangla"></TestStyle>
      <TestStyle name="Rafi" tech="Math"></TestStyle>
      <Salami evenet="Rojar Eid" amonut="500"></Salami>
      <Salami evenet="Graduation"></Salami>
      <Phone name="Nokia" price="5000"></Phone> */}
    </>
  );
}

function Student() {
  return (
    <div className="student">
      <p>Name: </p>
      <p>dept:</p>
    </div>
  );
}
const PersonStyle = {
  color: "red",
};
function Person() {
  return (
    <p style={PersonStyle}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde mollitia
      nesciunt ab autem id expedita sapiente sunt officia sint hic! Laboriosam
      aperiam sequi distinctio, veritatis tempora culpa harum voluptatem
      dolorem.
    </p>
  );
}
function TestStyle(props) {
  console.log(props);
  return (
    <>
      <div
        style={{
          border: "10px solid green",
          borderRadius: "20px",
        }}
      >
        <div
          style={{
            color: "blue",
          }}
        >
          {" "}
          hellow {props.name}
        </div>
        <p>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          temporibus dignissimos asperiores corporis eaque minus nam id
          reiciendis, neque consequuntur quisquam, quia ab, aut dolore? Incidunt
          voluptatem repudiandae adipisci labore. {props.tech}
        </p>
      </div>
    </>
  );
}
function Salami({ evenet, amonut = 0 }) {
  return (
    <div className="student">
      <p>Salami for:{evenet}</p>
      <p>Amount:{amonut}</p>
    </div>
  );
}
function Phone({ name, price }) {
  return (
    <div className="student">
      <p>Name:{name}</p>
      <p>Price:{price}</p>
    </div>
  );
}
export default App;
