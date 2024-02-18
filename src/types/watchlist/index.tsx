import { Watchlist, WatchlistDto } from './watachlist';

export const toModel = (
  watchlistDto?: WatchlistDto
): Watchlist | undefined | null => {
  if (!watchlistDto) return undefined;

  return {
    id: watchlistDto.id,
    issue: watchlistDto.issue,

    createdAt: watchlistDto.createdAt,
    createdBy: watchlistDto.createdBy,
    updatedAt: watchlistDto.lastModified,
    lastModifiedBy: watchlistDto.lastModifiedBy,
  };
};

export const toDto = (watchlist: Watchlist): WatchlistDto => {
  return {
    id: watchlist.id,
    issue: watchlist.issue,

    createdAt: watchlist.createdAt,
    createdBy: watchlist.createdBy,
    lastModified: watchlist.updatedAt,
    lastModifiedBy: watchlist.lastModifiedBy,
  };
};
