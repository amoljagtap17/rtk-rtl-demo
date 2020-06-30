import React from 'react'
import {
  render,
  cleanup,
  fireEvent,
  waitForDomChange
} from '@testing-library/react'
import App from 'App'
import { GETUSERDATA, NEWUSERDATA } from './mock-server/handlers'

afterEach(cleanup)

it('renders App component successfully with user data from API', async () => {
  const { getByText } = render(<App />)

  await waitForDomChange()

  expect(getByText(/React App!/i)).toBeInTheDocument()

  GETUSERDATA.forEach(({ name }) => {
    expect(getByText(`${name}`)).toBeInTheDocument()
  })
})

it('renders App component successfully populating new added user on click of ADD button', async () => {
  const { getByText, getByTestId } = render(<App />)

  await waitForDomChange()

  fireEvent.click(getByTestId('add-btn'))

  await waitForDomChange()

  expect(getByText(`${NEWUSERDATA.name}`)).toBeInTheDocument()
})
