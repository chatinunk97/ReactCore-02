// -   สร้าง Button มีข้อความว่า “Hide”
// -   เมื่อผู้ใช้ click button ให้ซ่อนข้อความและเปลี่ยนข้อความบน Button เป็น “Show”
// -   เมื่อclick button อีกครั้งให้แสดงข้อความและเปลี่ยนข้อความบน Button เป็น Hide


const App = ()=>{

    const [isHide,setState] = React.useState(false)

    const toggleHide = ()=>{
        if(isHide){
            setState(!isHide)
            return
        }
        setState(!isHide)
    }
    return(
        <div className="container">
        <button onClick = {toggleHide}> {isHide ? "SHOW" : "HIDE"}</button>
        <h1 className = {isHide ? "hide" : ""}>TEXT</h1>
        </div>
    )
}

// ReactDOM
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App/>);
