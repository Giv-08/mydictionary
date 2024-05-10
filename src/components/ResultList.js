import { useState, useEffect, useContext } from "react";
import { InputContext } from "../App";
import axios from "axios";
import MeaningList from "./MeaningList";
import Example from "./Example";
import Synonym from "./Synonym";
import Antonym from "./Antonym";

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
    return <h1>Loading...</h1>
  }

  if(error) {
    return <h2 className="text-center">No definition found</h2>
  }

  return (
    <div className="container mx-auto">
      { response && (
      <div>
        <h3 className="font-bold mt-4">Phonetic:</h3>
        <h3 className="font-bold mt-4">Part of Speech:</h3>
        <h3 className="font-bold mt-4">Audio:</h3>
        <h3 className="font-bold mt-4">Meaning:</h3>
        <MeaningList mean={response} />
        <h3 className="font-bold mt-4">Example:</h3>
        <Example mean={response} />
        <h3 className="font-bold mt-4">Synonym:</h3>
        <Synonym mean={response} />
        <h3 className="font-bold mt-4">Antonym:</h3>
        <Antonym mean={response} />
      </div>
      )}
    </div>
  );

};

export default ResultList;
