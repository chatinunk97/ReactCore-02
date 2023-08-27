// -   สร้าง checkbox ขึ้นมา 3 อัน
// -   ให้แต่ละอันมี name คือ phoneBrand
// -   เมื่อผู้ใช้ tick หรือ untick checkbox ให้ console.log
//     -   ค่า name ของ checkbox
//     -   ค่า value ของ checkbox
//     -   checkbox นั้นถูก tick หรือ untick

const itemList = [
  {id:1 , productName :"iphone15" }
]

const App = () => {

const handleChange = (bruh,a,b) =>{

    console.log(bruh.target.value,bruh.target.checked)
    console.log(a,b)
}
  return (
    <>
      <input onChange={(event) => {handleChange(event,"Param1","Param2")}} type="checkbox" id="apple" name="phoeBrand" value="Apple" />
      <label htmlFor="apple">Apple</label>
      <input onChange={handleChange} type="checkbox" id="samsung" name="phomeBrand" value="Samsung" />
      <label htmlFor="samsung">Samsung</label>
      <input onChange={handleChange}  type="checkbox" id="huawei" name="phoneBrand" value="Huawei" />
      <label htmlFor="huawei">Huawei</label>
    </>
  );
};

// ReactDOM
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
root.render(<App/>);
