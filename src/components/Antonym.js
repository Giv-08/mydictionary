const Antonym = ({ mean }) => {
  return (
    <div className="columns-2 md:columns-3">
      {mean.map(val => val.meanings.map(means => means.definitions.map(def => {
        return means.antonyms?.map(anto => (
          <li>{anto}</li>
        ))
      })))}
    </div>
  );
};

export default Antonym;
