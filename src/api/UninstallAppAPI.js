import BaseAPI from './BaseAPI'
import DeviceAPIConfiguration from './api-config'

export default class PostUninstallAppAPI extends BaseAPI {
  uninstallApp (appId, appVersion) {
    // POST request using fetch with error handling
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ appId, appVersion })
    }

    const apiURL = new DeviceAPIConfiguration()

    const response = this.callAPI(apiURL.POST_UNINSTALL_APP_URL, requestOptions)

    return response
  }
}
