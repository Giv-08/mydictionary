const Phonetic = ({ mean }) => {
  return (
    <div className="grid grid-cols-3">
      {mean.map(val =>
        <div className="flex justify-center" key={val.phonetic}>
        <span>{val.phonetic}</span>
      </div>
)}
    </div>
  );
};

export default Phonetic;
