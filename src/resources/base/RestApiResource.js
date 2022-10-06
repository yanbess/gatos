import RestApi from '../../services/RestApi'
import ResourceBuilder from './ResourceBuilder'

export default class RestApiResource {
  constructor() {
    this.restApi = new RestApi()
  }

  buildResource(result) {
    const resource = new ResourceBuilder()
    resource.setResult(result.response)
    resource.setSuccess(result.isSuccess)
    return resource
  }
}
