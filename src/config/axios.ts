import axios from 'axios';

import { env } from '@/env.mjs';

const instance = axios.create({
  baseURL: (() => {
    return env.NEXT_PUBLIC_API_URL;
  })(),
});

export default instance;
