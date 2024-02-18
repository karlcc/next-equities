import axios from 'axios';

// import { env } from '@/env.mjs';

const instance = axios.create({
  baseURL: (() => {
    const publicApiUrl = process.env.NEXT_PUBLIC_API_URL;
    if (!publicApiUrl) {
      return process.env.NEXT_PUBLIC_API_URL;
    }
    return publicApiUrl;
  })(),
});

export default instance;
