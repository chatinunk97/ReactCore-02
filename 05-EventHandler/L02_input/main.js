// -   จงสร้าง tag `<input>`
// -   เมื่อผู้ใช้พิมพ์ค่าลงใน `<input>` ให้ console.log(ค่าที่ผู้ใช้พิมพ์)

// Hint : onChange

const itemList = [
    {id:1 , productName :"iphone15" }
  ]
  

const Input = () =>{
    const handleChange = (event)=>{
        let foundIndex;
        if((event.target.value).length > 3){
            foundIndex = itemList.findIndex((item)=>{
                 return item.productName.includes((event.target.value).toLowerCase())
            })
            let foundItem = itemList[foundIndex]
            console.log(`${foundItem?.id},${foundItem?.productName}`)
          
        }
        
    }
    return(
        <input type="text" onChange = {handleChange}></input>
    )
}

const App = ()=>{
    return (
    <>
    <Input/>
    </>
    )
}

// ReactDOM
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App/>);
