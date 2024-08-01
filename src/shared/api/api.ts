import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage/localstorage';

const baseURL = Dev ? 'http://localhost:8000' : '';

export const api = axios.create({
	baseURL,
	headers: {
		Authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY),
	},
});
