import { useState } from "react";
import "./Home.css";

function Home() {
  const [name, setName] = useState("Player1");
  const [inputName, setInputName] = useState("");
  const [showConfetti, setShowConfetti] = useState(false);

  const changeName = () => {
    if (inputName.trim() !== "") {
      setName(inputName);
      setShowConfetti(true);
    }
    setTimeout(() => setShowConfetti(false), 2000);
    setName("Player2");
    console.log(inputName);
  };
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <p>Winner name : {name}</p>

      <h1>Game Winner</h1>
      <input
        type="text"
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
        placeholder="Enter new name"
        style={{ padding: "5px", marginRight: "10px" }}
      />
      <button onClick={changeName} style={{ padding: "5px 10px" } }>
        Update  
      </button>
      <p>Winner name : {inputName}</p>
      {showConfetti && <div className="confetti">🎉🎉🎉</div>}
    </div>
  );
}

export default Home;
