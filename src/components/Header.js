
import { useState } from "react";

const Header = () => {

  const [ value, setValue ] = useState("");
  const handleInputChange = event => setValue(event.target.value);
  const handleSubmit = () => {
    setValue("");
  }

  return (
      <div>
        <div className="py-8">
          <h1 className="text-3xl text-center font-bold underline">
            My Dictionary
          </h1>
          <p>
            Make your words meaningful
          </p>

      <div>
        <div>
          <input className="px-4 py-2" type="text" placeholder="Search..." onChange={handleInputChange}/>
          <button onSubmit={handleSubmit}>Search</button>
        </div>
      </div>

      {/* result for : WORD SEARCHED */}
      <h3>Result : <span>Cat</span></h3>
      </div>
      </div>
  );
}

export default Header;
