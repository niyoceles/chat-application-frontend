import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const baseURL = process.env.REACT_APP_BACKEND;
const env = process.env.NODE_ENV;

const http =
	env === 'test'
		? axios
		: axios.create({
				baseURL,
		  });
export default http;
