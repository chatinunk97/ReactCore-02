// -   จงสร้าง tag `<select>`
//ซึ่งมีข้อมูลชื่อประเทศในรายการให้เลือก (ให้ลองใส่มา 5 ประเทศ)
// -   เมื่อผู้ใช้เลือกประเทศ ให้ console.log ค่าประเทศที่ถูกเลือก

// Hint : onChange

const App = () => {
    const handleChange = (event)=>{
        console.log(event.target.value)
    }
  return (
    <>
      <select id="country" onChange = {handleChange}>
        <option value="Thailand">Thailand</option>
        <option value="Japan">Japan</option>
        <option value="US">US</option>
        <option value="UK">UK</option>
        <option value="Singapore">Singapore</option>
      </select>
    </>
  );
};

// ReactDOM
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
