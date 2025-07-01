import { useState } from "react"
import Button from "./Components/Button";

function App() {

  const [count , setcount] = useState(0);
  return(
    <div>
        <div className="App">
          <p>Count : {count}</p>
          <Button onClick={() => setcount(count+1)} children={"Increament"} />
        </div>
    </div>
  )
}

export default App
