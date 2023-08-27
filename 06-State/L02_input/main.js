// -   จงสร้าง Button มีข้อความว่า “Click to hide me”
// -   เมื่อผู้ใช้ click button ให้ซ่อน button





const App = ()=>{

    const [isHide,setState]= React.useState(false)

    function toggleHide(){
        if(isHide){
            setState(!isHide)
            return
        }
        setState(!isHide)
    }


    return (
        <>
        <button onClick = {toggleHide}>Click to hide the below Text</button>
        <h1 className = {isHide ? "hide" : ""}>TEXT</h1>
        </>
    )
}



// ReactDOM
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App/>);
