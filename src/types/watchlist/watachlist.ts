export interface WatchlistPostDto {
  id?: number;
  issue: string;
}
export interface WatchlistDto {
  id: number;
  issue: string;

  createdAt: string;
  createdBy: number;
  lastModified: string;
  lastModifiedBy: string;
}

export interface Watchlist {
  id: number;
  issue: string;

  createdAt: string;
  createdBy: number;
  updatedAt: string;
  lastModifiedBy: string;
}
