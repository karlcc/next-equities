import { DashboardConfig } from 'types';

export const nextConfig: DashboardConfig = {
  mainNav: [
    {
      title: 'Watchlist',
      href: '/watchlist',
    },
    {
      title: 'Add',
      href: '/addstock',
    },
    {
      title: 'Chart',
      href: '/chart/spy',
    },
    {
      title: 'Support',
      href: '/support',
      disabled: true,
    },
  ],
};

export const heroConfig: DashboardConfig = {
  mainNav: [
    {
      title: 'Watchlist',
      href: '/watchlist',
    },
    {
      title: 'Chart',
      href: '/chart/spy',
    },
    {
      title: 'Support',
      href: '/support',
      disabled: true,
    },
  ],
};
