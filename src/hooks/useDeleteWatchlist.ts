import { useMutation, useQueryClient } from '@tanstack/react-query';

import axios from '@/config/axios';
import { QUERY_WATCHLIST } from '@/hooks/useQueryWatchlist';

const deleteWatchlist = async (id: string) => {
  try {
    await axios.delete(`/api/v1/watchlists/${id}`);
  } catch (error) {
    console.error('Error deleting watchlist', error);
    throw error;
  }
};

const useDeleteWatchlist = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteWatchlist,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: [QUERY_WATCHLIST] });
    },
    onError: (error) => {
      console.error('Error deleting watchlist', error);
    },
  });
};
export default useDeleteWatchlist;
