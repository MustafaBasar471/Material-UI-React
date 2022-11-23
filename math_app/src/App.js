import { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export default function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    setNum1(Math.floor(Math.random() * 100));
    setNum2(Math.floor(Math.random() * 100));
  }, []);

  const handleClick = () => {
    const url = `https://api.mathjs.org/v4/?expr=${num1}%2B${num2}`;
    axios.get(url).then((res) => {
      if (+userInput === res.data)
        toast.success("Correct, answer is " + (num1 + num2));
      else toast.error("Wrong, asnwer is " + (num1 + num2));
    });
  };

  return (
    <div className="App">
      <Toaster />
      <h1>Math Practice</h1>
      <div className="main">
        <div>
          <h2>
            {num1} + {num2}
          </h2>
          <div className="main__group">
            <label htmlFor="userInput">
              Please enter the answer of the transaction
            </label>
            <input
              id="userInput"
              className="main__group_input"
              placeholder="Enter the answer"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
            <button className="main__group_button" onClick={handleClick}>
              Check
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
