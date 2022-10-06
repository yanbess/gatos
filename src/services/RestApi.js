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
