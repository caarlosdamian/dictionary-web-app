export const fetchData = async (word: string) => {
  const res = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
  );
  const response = await res.json();
  return response;
};


// const [count, setCount] = useState(0);
// const { data, status } = useQuery("word", () => fetchData("word"));