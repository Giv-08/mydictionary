const Phonetic = ({ mean }) => {
  return (
    <div className="columns-2 md:columns-3">
      {mean.map(val =>
        <div key={val.phonetic}>
        <span>{val.phonetic}</span>
      </div>

)}
    </div>
  );
};

export default Phonetic;
