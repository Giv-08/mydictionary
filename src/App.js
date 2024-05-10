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
    <InputContext.Provider value={value}>
    <div className="App">
      <Header />
    </div>
    </InputContext.Provider>
  );
}

export default App;
