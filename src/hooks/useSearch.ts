import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useAppDispatch } from "../redux/hooks";
import { setData } from "../redux/slices/searchSlice";
import { fetchData } from "../services";

export const useSearch = () => {
  const [search, setSearch] = useState("");
  const [emptyString, setEmptyString] = useState(false);
  const { isFetched, isLoading, data, refetch, isError, isSuccess, status } =
    useQuery(["search", search], () => fetchData(search), {
      enabled: false,
    });
  const dispatch = useAppDispatch();

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

  useEffect(() => {
    if (data === undefined) {
      return;
    } else if (Array.isArray(data)) {
      dispatch(setData(data));
    } else {
      dispatch(setData([data]));
    }
  }, [data]);

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
