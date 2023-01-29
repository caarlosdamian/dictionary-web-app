import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { fetchData } from "../services";

export const useSearch = () => {
  const [search, setSearch] = useState("");
  const [emptyString, setEmptyString] = useState(false);
  const { isFetched, isLoading, data, refetch, isError, isSuccess } = useQuery(
    ["search", search],
    () => fetchData(search),
    {
      enabled: false,
    }
  );

  const handleSearch = (e: any) => {
    e.preventDefault();

    if (search.length) {
      refetch();
    } else {
      setEmptyString(true);
    }
  };

  useEffect(() => {
    setEmptyString(false);
  }, [search]);

  return {
    handleSearch,
    isFetched,
    isLoading,
    data,
    setSearch,
    search,
    isSuccess,
    isError,
    emptyString,
  };
};
