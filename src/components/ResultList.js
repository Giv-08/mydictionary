import { useState, useEffect, useContext } from "react";
import { InputContext } from "../App";
import axios from "axios";
import MeaningList from "./MeaningList";
import Example from "./Example";
import Synonym from "./Synonym";
import Antonym from "./Antonym";
// import PartOfSpeech from "./PartOfSpeech";
import Phonetic from "./Phonetic";

axios.defaults.baseURL = 'https://api.dictionaryapi.dev/api/v2/entries/en';

const ResultList = () => {
  const { inputValue } = useContext(InputContext);
  const [ response, setResponse ] = useState(null);
  const [ error, setError ] = useState("");
  const [ loading, setLoading ] = useState(false);

  const fetchData = async (param) => {
    try {
      setLoading(true);
      const res = await axios(`/${param}`);
      setResponse(res.data);
      setError(null);
     } catch(err) {
      setError(err);
     } finally {
      setLoading(false)
     }
  }

  useEffect (() => {
    if(inputValue.length) {
      fetchData(inputValue)
    }
  }, [inputValue])

  if(loading) {
    return <h1 className="py-6 text-center text-2xl">Loading...</h1>
  }

  if(error) {
    return <h2 className="py-6 text-center text-2xl">No definition found</h2>
  }

  return (
    <div className="container mx-auto">
      { response && (
      <div>
        {/* <div className="grid grid-cols-4 py-4"> */}
          <h3 className="tracking-wider text-2xl text-amber-500 font-bold mt-4 text-center py-2">Phonetic:</h3>
          <Phonetic mean={response} />
          {/* <h3 className="font-bold mt-4">Part of Speech:</h3>
          <PartOfSpeech mean={response} /> */}
        {/* </div> */}
        <h3 className="tracking-wider text-2xl text-amber-500 font-bold mt-4 text-center py-8">Meaning:</h3>
        <MeaningList mean={response} />
        <h3 className="tracking-wider text-2xl text-amber-500 font-bold mt-4 text-center py-8">Example:</h3>
        <Example mean={response} />
        <h3 className="tracking-wider text-2xl text-amber-500 font-bold mt-4 text-center py-8">Synonym:</h3>
        <Synonym mean={response} />
        <h3 className="tracking-wider text-2xl text-amber-500 font-bold mt-4 text-center py-8">Antonym:</h3>
        <Antonym mean={response} />
      </div>
      )}
    </div>
  );

};

export default ResultList;
