import useSWR from 'swr';
import axios from 'axios';

const fetcher = (url) => axios.get(url).then((res) => res.data);

export const useFetch = (url) => {
  const { data, error } = useSWR(url, fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};