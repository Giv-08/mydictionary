
const MeaningList = ({mean}) => {
  console.log(mean);
  return(
  <div>
    {/* fetch data from array by looping */}
    {mean.map(val => val.meanings.map(means => means.definitions.map(def => (
      <div key={def.definition}>
        <li className="list-none">{def.definition}</li>
      </div>
    ))))}
  </div>
);
};
// <h2>Part of Speech: {means.partOfSpeech}</h2>
// <h2>Phonetic {val.phonetic}</h2>
export default MeaningList;
