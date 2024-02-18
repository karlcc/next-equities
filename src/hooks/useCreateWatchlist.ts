import { useMutation } from '@tanstack/react-query'; // Import useMutation

import axios from '@/config/axios';
import { WatchlistPostDto } from '@/types/watchlist/watachlist'; // Fix typo in import path

// Define your mutation function
const postWatchlist = async (newRecordData: WatchlistPostDto) => {
  try {
    const response = await axios.post('/api/v1/watchlists', newRecordData);
    return response.data; // Return the newly created record
  } catch (error) {
    console.error('Error posting new record:', error);
    throw error;
  }
};

// Use the useMutation hook
const useCreateWatchlist = () => {
  return useMutation({
    mutationFn: postWatchlist,
    // Optional: Handle successful mutation
    onSuccess: (data) => {
      console.log('New record posted successfully:', data);
      // You can perform additional actions here if needed
    },
    // Optional: Handle mutation errors
    onError: (error) => {
      console.error('Error posting new record:', error);
      // You can handle errors or show notifications to the user
    },
  });
};

export default useCreateWatchlist;
