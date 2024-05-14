
import { useContext, useState } from "react";
import { InputContext } from "../App";

const Header = () => {

  const [ value, setValue ] = useState("");
  const { inputValue, setInputValue } = useContext(InputContext);
  const handleInputChange = event => setValue(event.target.value);
  const handleSubmit = () => {
    setInputValue(value);
    setValue("");
  }

  const handleInputKeyDown = (event) => {
    if(event.key === 'Enter') {
      setInputValue(value);
      setValue("");
    }
  }
  return (
      <div>
        <div className="bg-amber-500 py-8">
          <h1 className="tracking-wider text-4xl text-center font-bold">
            My Dictionary
          </h1>
          <p className="text-center py-4">
            Make your words meaningful
          </p>

      <div>
        <div className="flex justify-center">
          <input className="rounded-l-lg px-3 py-2 md:w-80 bg-gray-100 text-black " type="text" placeholder="Search..." onChange={handleInputChange} value={value} onKeyDown={handleInputKeyDown}/>
          <button className="rounded-r-lg bg-green-500 border-l text-center text-white px-3 py-2 hover:bg-green-600 transition duration-300 ease-in-out" onClick={handleSubmit}>Search</button>
        </div>
      </div>

      </div>
      { inputValue && (
        <div className="flex justify-center">
          <h3 className="border-b-2 border-slate-50 w-96 py-2 text-center text-2xl">Result : <span className="text-3xl text-green-500 font-bold">{inputValue}</span></h3>
        </div>
      )}
      </div>
  );
}

export default Header;
