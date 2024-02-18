import { useQuery } from '@tanstack/react-query';

import axios from '@/config/axios';
import { Watchlist } from '@/types/watchlist/watachlist';

export const QUERY_WATCHLIST = 'QUERY_WATCHLIST';

const queryWatchlist = async () => {
  // const response = await axios.get<{
  //   data: WatchlistDto[];
  // }>('/api/v1/watchlists');
  // return response.data?.data?.map((watachlistDto) => toModel(watachlistDto));
  const response = await axios.get('/api/v1/watchlists');
  const watchlists = response.data as Watchlist[];
  return watchlists;
};

const useQueryTest = () => {
  return useQuery({
    queryKey: [QUERY_WATCHLIST],
    queryFn: queryWatchlist,
  });
};

export default useQueryTest;
