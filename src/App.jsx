import Hero from "./components/Hero"
import { useState, createContext } from "react"
export const ColorContext = createContext()
function App() {
  const [color, setColor] = useState("");

  return (
    <div className="App">
      <ColorContext.Provider value={color}>
        <Hero />
      </ColorContext.Provider>
      <input type="text" onChange={(e) => setColor(e.target.value)} />
    </div>
  )
}

export default App
