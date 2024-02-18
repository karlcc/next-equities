import { useQuery } from '@tanstack/react-query';

import axios from '@/config/axios';
import { toModel } from '@/types/watchlist/';
import { Watchlist, WatchlistDto } from '@/types/watchlist/watachlist';

export const QUERY_WATCHLIST = 'QUERY_WATCHLIST';

export const queryWatchlist = async () => {
  const response = await axios.get<WatchlistDto[]>('/api/v1/watchlists');
  const watchlistsDto = response.data;

  if (watchlistsDto) {
    const watchlists = watchlistsDto.map((watchlistDto) =>
      toModel(watchlistDto)
    );
    return watchlists;
  }

  return [];
};

const useQueryWatchlist = (initialData?: Watchlist[]) => {
  return useQuery({
    queryKey: [QUERY_WATCHLIST],
    queryFn: queryWatchlist,
    initialData,
    staleTime: 2 * 1000, // 2 seconds
  });
};

export default useQueryWatchlist;
