'use client';

import { ColumnDef } from '@tanstack/react-table';

import { columnstitles } from './data/data';
import { DataTableRowActions } from './data-table-row-actions';

import { DataTableColumnHeader } from '@/components/data-table-column-header';
// import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
// import { Watchlist } from './data/schema';
import { Watchlist } from '@/types/watchlist/watachlist';

export const columns: ColumnDef<Watchlist>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'id',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ID" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue('id')}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'issue',
    header: ({ column }) => {
      const titlelabel = columnstitles.find((label) => label.value === 'issue');
      if (!titlelabel) {
        return null;
      }
      return <DataTableColumnHeader column={column} title={titlelabel.label} />;
    },
    cell: ({ row }) => {
      // const label = labels.find((label) => label.value === row.original.label);

      return (
        <div className="flex space-x-2">
          {/* {label && <Badge variant="outline">{label.label}</Badge>} */}
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue('issue')}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: 'createdBy',
    header: ({ column }) => {
      const titlelabel = columnstitles.find(
        (label) => label.value === 'createdBy'
      );
      if (!titlelabel) {
        return 'createdBy';
      }
      return <DataTableColumnHeader column={column} title={titlelabel.label} />;
    },
    cell: ({ row }) => (
      <div className="w-[80px]">{row.getValue('createdBy')}</div>
    ),
  },
  {
    id: 'actions',
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
