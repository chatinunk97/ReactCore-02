// ทำ UI โดยใช้ function Component

// -   Accordion สามารถเปิด-ปิดเพื่อแสดงเนื้อหาได้
// -   Design : from figma community




const App = () => {

    const [isHide , setState] = React.useState(true)

    const handleHide = ()=>{
        setState(!isHide)
        console.log(isHide)
    }
    return (
        <>
        <div className = 'container'>
            {/* <button > wow </button> */}
            <img className= {`${isHide ?  'flip' :''}`} onClick={handleHide} src="https://www.svgrepo.com/show/533603/arrow-narrow-down-move.svg"></img>
            <div className = {`content ${isHide ?  'hide' :''}`}>
                <p>TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT</p>
            </div>
        </div>
        </>
    )
}


// ReactDOM
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App/>);
