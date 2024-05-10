
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
        <div className="py-8">
          <h1 className="text-3xl text-center font-bold">
            My Dictionary
          </h1>
          <p>
            Make your words meaningful
          </p>

      <div>
        <div>
          <input className="px-3 py-2 md:w-80 bg-gray-100 text-black" type="text" placeholder="Search..." onChange={handleInputChange} onKeyDown={handleInputKeyDown}/>
          <button className="bg-blue-400 border-l text-center text-white px-3 py-2" onClick={handleSubmit}>Search</button>
        </div>
      </div>

      { inputValue && (
      <h3>Result : <span>{inputValue}</span></h3>
      )}
      </div>
      </div>
  );
}

export default Header;
