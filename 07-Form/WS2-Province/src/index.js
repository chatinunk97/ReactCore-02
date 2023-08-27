import "./index.css";
import React from "react";
import { createRoot } from "react-dom/client";

// React
function App() {
  const [province, setProvince] = React.useState("Initial Province");
  const [district, setDistrict] = React.useState("Initial District");

  const handleChangeProvince = (e) => {
    setProvince(e.target.value,console.log(province));
  };
  const handleChangeDistrict = (e) => {
    setDistrict(e.target.value);
  };

  const result = province + " ---- " + district
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
      <br></br>
      {result}
    </div>
  );
}

// ReactDOM
const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(<App />);
