/*
 * Copyright (c) 2021 FLECS Technologies GmbH
 *
 * Created on Fri Dec 17 2021
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import BaseAPI from './BaseAPI'
import { DeviceAPIConfiguration } from './api-config'

export default class GetBrowseServiceMesh extends BaseAPI {
  async getBrowseServiceMesh () {
    // GET request using fetch with error handling
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    }

    try {
      await this.callAPI(DeviceAPIConfiguration.GET_BROWSE_SERVICE_MESH, requestOptions)
    } catch (error) {
      console.log(error)
    }
  }
}
