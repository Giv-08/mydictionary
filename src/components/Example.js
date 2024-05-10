const Example = ({mean}) => {
  console.log(mean);
  return(
  <div>
    {/* fetch data from array by looping */}
    {mean.map(val => val.meanings.map(means => means.definitions.map(def => (
      <div key={def.example}>
        {def.example? <li className="list-none">{def.example}</li> : ""}
      </div>
    ))))}
  </div>
);
};

export default Example;
