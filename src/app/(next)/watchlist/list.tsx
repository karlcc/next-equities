'use client';

import { ColumnDef } from '@tanstack/react-table';
import { useRouter } from 'next/navigation';

import { columns } from './columns';

import { DataTable } from '@/components/data-table';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import useQueryWatchlist from '@/hooks/useQueryWatchlist';
import { Watchlist } from '@/types/watchlist/watachlist';

interface ListProps {
  watchlists: Watchlist[];
}

const List: React.FC<ListProps> = ({ watchlists }) => {
  const router = useRouter();

  const { data: watchlist, isLoading, isError } = useQueryWatchlist(watchlists);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <div>
      <div className="flex flex-col space-y-8 p-8">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of favor stock!
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              className="text-xs md:text-sm"
              onClick={() => router.push(`/addstock`)}
            >
              <Icons.add className="mr-2 size-4" /> Add New
            </Button>
          </div>
        </div>
        <DataTable
          data={watchlist || []}
          columns={
            columns as ColumnDef<Watchlist | null | undefined, unknown>[]
          }
        />
      </div>
    </div>
  );
};

export default List;
