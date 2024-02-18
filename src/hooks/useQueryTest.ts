import { useQuery } from '@tanstack/react-query';
// import axios from 'axios';

// import { Watchlist } from '@/types/watchlist/watachlist';

export const QUERY_TEST = 'QUERY_TEST';

const queryWatchlist = async () => {
  // const response = await axios.get<{
  //   data: WatchlistDto[];
  // }>('/api/v1/watchlists');
  // return response.data?.data?.map((watachlistDto) => toModel(watachlistDto));
  const response = await fetch('http://54.255.191.34:8080/api/v1/watchlists');
  // const watchlists = response.data as Watchlist[];
  const watchlists = response.json();
  return watchlists;
};

const useQueryTest = () => {
  return useQuery({
    queryKey: [QUERY_TEST],
    queryFn: queryWatchlist,
  });
};

export default useQueryTest;
