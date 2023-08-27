import "./index.css";
import React from "react";
import { createRoot } from "react-dom/client";

// React
function App() {
  const [province, setProvince] = React.useState("default Province");
  const [district, setDistrict] = React.useState("default District");

  const handleChangeProvince = (e) => {
    const value = e.target.value;
    setProvince(value);
    console.log(value);
  };
  const handleChangeDistrict = (e) => {
    const value = e.target.value;
    setDistrict(value);
    console.log(value);
  };

  return (
    <div>
      <select onChange={handleChangeProvince}>
        <option value="Bangkok">Bangkok</option>
        <option value="Phuket">Phuket</option>
      </select>
      <select onChange={handleChangeDistrict}>
        <option value="Bangna">Bangna</option>
        <option value="Ladpao">Ladpao</option>
      </select>
    </div>
  );
}

// ReactDOM
const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(<App />);
