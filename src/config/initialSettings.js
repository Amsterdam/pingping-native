// const LOCAL_URL = 'http://192.168.1.110:4000';
const ACC_URL = 'https://acc.api.pingping.amsterdam.nl';
const PROD_URL = 'https://api.pingping.amsterdam.nl';

export const BASE_URL = __DEV__ ? ACC_URL : PROD_URL;
export const API_URL = `${BASE_URL}/api`;
