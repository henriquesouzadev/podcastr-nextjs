import axios from 'axios';

export const api = axios.create({
   baseURL: 'https://github.com/henriquesouzadev/podcastr-nextjs/blob/main/db.json' || 'http://localhost:3333/'
});