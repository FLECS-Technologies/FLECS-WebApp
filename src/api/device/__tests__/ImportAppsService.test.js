/*
 * Copyright (c) 2022 FLECS Technologies GmbH
 *
 * Created on Fri Dec 09 2022
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
import '@testing-library/dom'
import { waitFor } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import axios from 'axios'
import { putImportApps } from '../ImportAppsService'

jest.mock('axios')

const mockPutImportApps = {
  data: {
    additionalInfo: 'Ok'
  }
}

describe('ImportAppsService', () => {
  beforeAll(() => {
    axios.get = jest.fn()
  })

  afterAll(() => {
    jest.resetAllMocks()
  })
  test('calls successfull putImportApps', async () => {
    axios.put.mockResolvedValueOnce(mockPutImportApps)
    const file = new File([], 'flecs-export.tar')
    const response = await waitFor(() => putImportApps(file))

    expect(response.additionalInfo).toBe(mockPutImportApps.data.additionalInfo)
  })

  test('calls unsuccessfull putImportApps', async () => {
    axios.put.mockRejectedValueOnce(new Error('Failed to import apps.'))
    await act(async () => {
      expect(putImportApps()).rejects.toThrowError()
    })
  })
})
