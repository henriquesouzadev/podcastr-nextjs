import axios from 'axios';

export const api = axios.create({
   baseURL: 'https://raw.githubusercontent.com/henriquesouzadev/podcastr-nextjs/main/db.json' || 'http://localhost:3333/'
});