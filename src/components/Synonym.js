// const Synonym = ({ mean }) => {
//   return (
//   <div>
//     {/* fetch data from array by looping */}
//     {mean.map(val => val.meanings.map(means => means.definitions.map(def => {
//       // loop thru synonyms array if there is any
//       return def.synonyms?.map(syn => (
//         <li className="list-none">{syn}</li>
//       ))
//     })))}
//   </div>
// );
// };

// export default Synonym;
const Synonym = ({ mean }) => {
  return (
    <div className="columns-2 md:columns-3">
      {mean.map(val => val.meanings.map(means => means.definitions.map(def => {
        return means.synonyms?.map(syn => (
          <li>{syn}</li>
        ))
      })))}
    </div>
  );
};

export default Synonym;
