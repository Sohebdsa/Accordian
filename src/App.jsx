import './App.css'
import Accordian from './components/Accordian'
import Data from './data/Data'
function App() {
  const info=Data
  // console.log(info)
  return (
    <>
      <Accordian data={info}/>
    </>
  )
}

export default App
