
//// <App/> is a Function Component -> render UI

const App = () => {

  // const handleChange = ({target})=>{
  //   console.log(target.value)
  // }
  // return (<input onChange={handleChange}/>)

  ////CHeckbox
// const handleCheck = (event) =>{
//   console.log("checked",event.target.checked)
// }
//   return( 
//   <div>
//     <input type="checkbox" onChange={handleCheck}/>
//     <label>Extra Shot</label>
//   </div>
//   )


//// Option
const handleSelect = (event)=>{
  console.log(event.target.value)
}


return(
  <>
  <label htmlFor='gender'>Please select an Option</label>
  <select onChange = {handleSelect} id='gender'>
    <option value = 'a'>Option - 1</option>
    <option value = 'b'>Option - 2</option>
  </select>
  </>
)

};


// ReactDOM
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
