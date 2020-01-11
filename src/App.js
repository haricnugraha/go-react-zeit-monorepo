import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

export default function App() {
  const [data, setData] = useState("Fetch API..");

  useEffect(() => {
    const endpoint = "/api/hello-world.go";

    fetch(endpoint)
      .then(response => response.json())
      .then(response => {
        setData(response.text);
      })
      .catch(() => {
        setData("Error");
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{data}</p>
      </header>
    </div>
  );
}
