import BaseAPI from './BaseAPI'
import DeviceAPIConfiguration from './api-config'

export default class DeleteAppInstanceAPI extends BaseAPI {
  deleteAppInstance (appId, appVersion, instanceName) {
    // POST request using fetch with error handling
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ appId, appVersion, instanceName })
    }

    const response = this.callAPI(
      DeviceAPIConfiguration.POST_DELETE_APP_INSTANCE_URL,
      requestOptions
    )

    return response
  }
}
