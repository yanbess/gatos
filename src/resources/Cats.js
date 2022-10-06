import RestApiResource from './base/RestApiResource'

export default class Cats extends RestApiResource {
  async getList(limit) {
    let result = await this.restApi.get('images/search', { limit })
    return this.buildResource(result)
  }

  //We can use this method to get single cat by ID:
  /* async getCatByID(id) {
    let result = await this.restApi.get('images/' + id)
    return this.buildResource(result)
  } */
}
