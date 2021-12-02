/*
 * Copyright (c) 2021 FLECS Technologies GmbH
 *
 * Created on Tue Nov 30 2021
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

import { Component } from 'react'

const GET_DEVICE_INFO_URL = 'http://localhost:80/GetDeviceInfo'
const GET_INSTALLED_APP_LIST_URL = 'http://localhost:80/InstalledAppList'
const GET_INSTANTIATED_APP_LIST_URL = 'http://localhost:80/InstantiatedApps'

const POST_INSTALL_APP_URL = 'http://localhost:80/InstallApp'
const POST_UNINSTALL_APP_URL = 'http://localhost:80/UninstallApp'
const POST_START_INSTANCE_URL = 'http://localhost:80/StartAppInstance'
const POST_STOP_INSTANCE_URL = 'http://localhost:80/StopAppInstance'
const POST_CREATE_APP_INSTANCE_URL = 'http://localhost:80/CreateAppInstance'
const POST_DELETE_APP_INSTANCE_URL = 'http://localhost:80/DeleteAppInstance'

const PUT_SIDELOAD_APP = 'http://localhost:80/SideloadApp'

const GET_APP_LIST_URL = 'http://marketplace.flecs.tech/AppList'

export default class DeviceAPIConfiguration extends Component {
  // post requests
  static get POST_INSTALL_APP_URL () {
    return POST_INSTALL_APP_URL
  }

  static get POST_UNINSTALL_APP_URL () {
    return POST_UNINSTALL_APP_URL
  }

  static get POST_START_INSTANCE_URL () {
    return POST_START_INSTANCE_URL
  }

  static get POST_STOP_INSTANCE_URL () {
    return POST_STOP_INSTANCE_URL
  }

  static get POST_CREATE_APP_INSTANCE_URL () {
    return POST_CREATE_APP_INSTANCE_URL
  }

  static get POST_DELETE_APP_INSTANCE_URL () {
    return POST_DELETE_APP_INSTANCE_URL
  }

  // get requests
  static get GET_DEVICE_INFO_URL () {
    return GET_DEVICE_INFO_URL
  }

  static get GET_INSTALLED_APP_LIST_URL () {
    return GET_INSTALLED_APP_LIST_URL
  }

  static get GET_INSTANTIATED_APP_LIST_URL () {
    return GET_INSTANTIATED_APP_LIST_URL
  }

  // put requests
  static get PUT_SIDELOAD_APP () {
    return PUT_SIDELOAD_APP
  }
}

export class MarketplaceAPIConfiguration {
  // get requests
  static get GET_APP_LIST_URL () {
    return GET_APP_LIST_URL
  }
  // post requests
}
