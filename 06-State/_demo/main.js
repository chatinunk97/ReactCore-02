/// 1 Function APP
// const App = () => {

// /// 2 Handle Logic

// // We are using React Parameter here
// // State Number => Initial state set to 0
// const [state,setState] = React.useState(0)

// function handleIncrease(){
//     setState(state+1);
//     console.log('increase',state)
// }
// function handleDecrease(){
//     setState(state-1);
//     console.log('decrease',state)
// }
// function handleReset(){
//     setState(0);
//     console.log('Reset',state)
// }

// /// 3 Return of 1 => UI
//   return (
//     <>
//     <div className="container">
//       <button onClick={handleDecrease}>-</button>
//       <h1>{state}</h1>
//       <button onClick={handleIncrease}>+</button>
//     </div>
//     <div className='container'>
//     <button className='reset' onClick={handleReset}>RESET</button>
//     </div>
//     </>

//   );
// };

function App() {
  const [isDark, setIsDark] = React.useState(false);

  const handleToggle = () => {
    setIsDark(!isDark);
  };
  console.log(isDark ? "DARK" : "LIGHT")
  return (
    <div>
        {/* {isDark ? <h3>DARK</h3> : <h3>LIGHT</h3>} */}

        {<h3 className={isDark? 'dark' : 'light'}>{isDark ? "Dark":"Light"}</h3>}

      <button onClick={handleToggle}>Toggle Mode</button>
    </div>
  );
}

// ReactDOM
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
