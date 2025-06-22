import { useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [clicksA, setClicksA] = useState(0);
  const [clicksB, setClicksB] = useState(0);
  const pageLoadTime = useRef(Date.now());

  const handleClickA = () => {
    setClicksA((prev) => prev + 1);
    const elapsedSeconds = Math.floor((Date.now() - pageLoadTime.current) / 1000);
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag("event", "click", {
        event_category: "Button Interaction",
        event_label: "Variant A",
        value: elapsedSeconds,
      });
    }
    if (typeof window !== 'undefined' && typeof window.hj === 'function') {
      window.hj("event", "Button A Clicked", { elapsedTime: elapsedSeconds });
    }
  };

  const handleClickB = () => {
    setClicksB((prev) => prev + 1);
    const elapsedSeconds = Math.floor((Date.now() - pageLoadTime.current) / 1000);
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag("event", "click", {
        event_category: "Button Interaction",
        event_label: "Variant B",
        value: elapsedSeconds,
      });
    }
    if (typeof window !== 'undefined' && typeof window.hj === 'function') {
      window.hj("event", "Button B Clicked", { elapsedTime: elapsedSeconds });
    }
  };

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          style={{
            background: "#2563eb",
            color: "white",
            padding: "1em 2em",
            border: "none",
            borderRadius: 6,
            marginRight: 16,
          }}
          onClick={handleClickA}
        >
          Buy Now
        </button>
        <button
          style={{
            background: "#22c55e",
            color: "white",
            padding: "1em 2em",
            border: "none",
            borderRadius: 6,
          }}
          onClick={handleClickB}
        >
          Get Started
        </button>
        <div style={{ marginTop: "1em", fontWeight: "bold" }}>
          Variant A clicks: {clicksA} <br />
          Variant B clicks: {clicksB}
        </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
