import { useEffect, useState } from "react";
import axios from "axios";

axios.defaults.baseUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en'

const ResultList = () => {
  const { inputValue } = useContext(InputContext);
  const [ response, setResponse ] = useState(null);
  const [ error, setError ] = useState("");
  const [ loading, setLoading ] = useState(false);

  const fetchData = async () => {
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
  return (
    <div className="container mx-auto">
      <div>
        <h3 className="font-bold mt-4">Meaning:</h3>
        <h3 className="font-bold mt-4">Example:</h3>
        <h3 className="font-bold mt-4">Synonym:</h3>
        <h3 className="font-bold mt-4">Antonym:</h3>
      </div>
    </div>
  );

};

export default ResultList;
