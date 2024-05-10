const PartOfSpeech = ({mean}) => {
  console.log(mean);
  return(
  <div>
    {/* fetch data from array by looping */}
    {mean.map(val => val.meanings.map(means =>
      <div key={means.partOfSpeech}>
        <span>{means.partOfSpeech}</span>
      </div>
    ))}
  </div>
);
};
// <h2>Phonetic {val.phonetic}</h2>
export default PartOfSpeech;
