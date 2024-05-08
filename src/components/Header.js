
const Header = () => {
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
          <input className="px-4 py-2" type="text" placeholder="Search..." />
          <button>Search</button>
        </div>
      </div>
      </div>
      </div>
  );
}

export default Header;
