import { useState } from "react";
import { useQuery } from "react-query";
import { fetchData } from "../services";

export const useSearch = () => {
  const [search, setSearch] = useState("");
  const { isFetched, isLoading, data, refetch } = useQuery(
    ["search", search],
    () => fetchData(search),
    {
      enabled: false,
    }
  );

  const handleSearch = (e: any) => {
    e.preventDefault();
    refetch();
  };

  return {
    handleSearch,
    isFetched,
    isLoading,
    data,
    setSearch,
    search,
  };
};
