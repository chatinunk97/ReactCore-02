// -   จงสร้าง Button มีข้อความว่า “Click to hide me”
// -   เมื่อผู้ใช้ click button ให้ซ่อน button

const App = () => {
    console.log('start')
    const [isHide,stateChange] = React.useState(false)

    const handleHide = ()=>{
 

        if(!isHide){
            stateChange(!isHide);
        }
    }


    return (
        <button className={isHide ? "hide":'.none'}  onClick={handleHide}> Click to Hide me ! </button>
    )
}

// ReactDOM
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App/>);
