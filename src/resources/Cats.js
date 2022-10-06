import RestApi from '../services/RestApi'

export default class Cats {
  constructor() {
    this.restApi = new RestApi()
  }

  getList(limit) {
    return this.restApi.get('images/search', { limit })
  }

  //We can use this method to get single cat by ID:
  /* getCatByID(id) {
    return this.restApi.get('images/' + id)
  } */
}
