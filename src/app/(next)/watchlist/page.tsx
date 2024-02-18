import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

import List from './list';

import { QUERY_WATCHLIST, queryWatchlist } from '@/hooks/useQueryWatchlist';

export default async function Page() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [QUERY_WATCHLIST],
    queryFn: queryWatchlist,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <List watchlists={[]} />
    </HydrationBoundary>
  );
}
