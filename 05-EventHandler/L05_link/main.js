// -   สร้างลิงค์ <a> มีข้อความว่า “Google”
// -   เมื่อผู้ใช้ click link ให้ขึ้นคำถามว่า “Leave for https://google.com?”
// -   ถ้าผู้ใช้กด OK ให้ redirect ไปที่ https://google.com
// -   ถ้าผู้ใช้กด Cancel ให้ยกเลิก redirect ไปที่ https://google.com

const App = () => {
  const confirmAction = (event) => {
    const response = confirm("Leave for https://google.com?");
    if (response) {
      return;
    }
    event.preventDefault();
  };
  return (
    <>
      <a onClick={confirmAction} href="https://google.com">
        Go to Google
      </a>
    </>
  );
};

// ReactDOM
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
