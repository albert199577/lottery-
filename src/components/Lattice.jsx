import './App.css'

function App() {
  function component() {
    return <div className="component"></div>;
  }
  
  function special() {
    return <div className="component special"></div>;
  }

  return (
    <>
      <div className="app grid md:gap-4 gap-2 p-4 justify-center justify-items-center"></div>
    </>
  )
}

export default App
