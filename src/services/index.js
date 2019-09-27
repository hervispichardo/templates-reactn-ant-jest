import axios from 'axios';

const Api = 'https://hervispichardo.com/api/'

const request = axios.create({
  headers: {'Authorization': ''}
});

const getAll = (id) => {
  return request.get(`${Api}`)
}


export {
  getAll
}