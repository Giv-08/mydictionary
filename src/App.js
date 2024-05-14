import { createContext, useState } from "react";
import Header from "./components/Header";
import ResultList from "./components/ResultList";
import Footer from "./components/Footer";

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
      <ResultList />
      <Footer />
    </div>
    </InputContext.Provider>
  );
}

export default App;
