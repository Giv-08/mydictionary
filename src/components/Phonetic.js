const Phonetic = ({ mean }) => {
  return (
    <div>
      {mean.map(val =>
        <div className="flex justify-center" key={val.phonetic}>
        <span>{val.phonetic}</span>
      </div>
)}
    </div>
  );
};

export default Phonetic;
