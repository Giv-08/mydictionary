import { createContext, useState } from "react";
import Header from "./components/Header";

// create context
export const InputContext = createContext();

function App() {
  const [inputValue, setInputValue] = useState("");
  const value = {
    inputValue, setInputValue
  }

  return (
    <inputContext value={value}>
    <div className="App">
      <Header />
    </div>
    </inputContext>
  );
}

export default App;
