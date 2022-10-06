import axios from 'axios'

export default class RestApi {
  constructor(baseUrl) {
    this.baseUrl = baseUrl
  }

  request(method, path = '', params = {}, data = {}) {
    let options = {
      url: import.meta.env.VITE_API_URL + path,
      params,
      data,
      method,
      headers: {
        'Content-Type': 'application/json'
      }
    }
    //console.log(options)
    return axios(options)
      .then((response) => ({ response: response.data, isSuccess: true }))
      .catch((error) => ({ response: error.response, isSuccess: false }))
  }

  get(...rest) {
    return this.request('get', ...rest)
  }

  post(path, data = {}, ...rest) {
    return this.request('post', path, rest.params, data, ...rest)
  }
}

/* function request(method, path = '', params = {}, data = {}, auth = true) {
  let options = {
    url: import.meta.env.VITE_API_URL + path,
    params,
    data,
    method,
    //timeout: 1000,
    headers: {
      'Content-Type': 'application/json'
    }
  } */

  /* if (auth) {
    const localStorage = window.localStorage
    options.headers.Authorization =
      localStorage.getItem('_auth_type') + ' ' + localStorage.getItem('_auth')
  } */

/*   return axios(options)
    .then((response) => ({ response: response.data, isSuccess: true }))
    .catch((error) => ({ response: error.response, isSuccess: false }))
} */

/* function get(...rest) {
  return request('get', ...rest)
}

function post(path, data = {}, ...rest) {
  return request('post', path, rest.params, data, ...rest)
}
 */
/* const Cats = {
  list: {
    get: (limit) => get('images/search', { limit }),
    /* getDataToCreate: () => get('schedule/data-to-create'),
    store: (data) => post('schedule/store', data),
    getEmployees: (data) => post('schedule/get-employees', data),
    delete: (id) => get('schedule/delete', { id }), */
  /* }
}
 */
/* export default Cats */
