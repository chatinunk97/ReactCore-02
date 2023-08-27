// -   จงสร้าง tag `<button>Button</button>`
// -   เมื่อผู้ใช้กดปุ่มให้ console.log("clicked")
// -   เมื่อผู้ใช้กดปุ่มให้ alert("Hi") เพิ่มด้วย

// Hint : onChange

const Button= ()=>{
    return (
        <button onClick = {(e)=>console.log(e)}>Button</button>
    )
}

const App=()=>{
    return (
        <>
        <Button/>
        </>
    )
}
// ReactDOM
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App/>);
