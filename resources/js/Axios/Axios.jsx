import axios from 'axios';
import { base_url } from '../Data/Data';

// const base_url = "";
const Axios = axios.create({
    baseURL: base_url
});

export default Axios;