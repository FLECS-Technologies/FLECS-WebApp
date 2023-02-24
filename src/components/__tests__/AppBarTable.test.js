/*
 * Copyright (c) 2021 FLECS Technologies GmbH
 *
 * Created on Fri Feb 24 2021
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

// import React from 'react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { act } from 'react-dom/test-utils'
import { render, screen } from '@testing-library/react'
import BasicTable from '../AppBarTable'

const jobs = [
  {
    id: 1,
    description: 'Went fishing',
    status: 'successful'
  },
  {
    id: 2,
    description: 'Do the laundry',
    status: 'failed'
  },
  {
    id: 3,
    description: 'Repair sink',
    status: 'pending'
  },
  {
    id: 4,
    description: 'Drive home',
    status: 'running'
  }
]

describe('AppBarTable', () => {
  test('renders AppBarTable component', async () => {
    await act(async () => {
      render(BasicTable([]))
    })
    expect(screen.getByText('Installation Log')).toBeVisible()
    expect(screen.getByText('Clear All')).toBeVisible()
  })

  test('click on clear all button', async () => {
    const clearAllFinishedJobs = jest.fn()
    const deleteJobs = jest.fn()
    const user = userEvent.setup()
    await act(async () => {
      render(BasicTable([], deleteJobs, clearAllFinishedJobs, false))
    })
    expect(screen.getByText('Clear All')).toBeVisible()
    const clearAllButton = screen.getByText('Clear All')
    await user.click(clearAllButton)
    expect(clearAllFinishedJobs).toHaveBeenCalled()
  })

  test('render with jobs', async () => {
    await act(async () => {
      render(BasicTable(jobs))
    })

    expect(screen.getByText(jobs[1].description)).toBeVisible()
    expect(screen.getByText(jobs[2].status)).toBeVisible()
  })

  test('render with jobs and click on clear', async () => {
    const deleteJobs = jest.fn()
    const user = userEvent.setup()
    await act(async () => {
      render(BasicTable(jobs, deleteJobs, undefined, true))
    })

    const clearButton = screen.getAllByTestId('ClearIcon')
    await user.click(clearButton[0])
    expect(deleteJobs).toHaveBeenCalled()
  })
})
