import React, { useEffect, useState } from 'react'
import axios from 'axios'

export interface IUser {
  id: number
  name: string
}

function App() {
  const [users, setUsers] = useState<IUser[] | null>(null)

  useEffect(() => {
    const getUsers = async () => {
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      )

      setUsers(data)
    }

    getUsers()
  }, [])

  const onClickHandler = async () => {
    const { data } = await axios.post<IUser>(
      'https://jsonplaceholder.typicode.com/users',
      {
        id: 3,
        name: 'Test User'
      }
    )

    setUsers((prevUsers) => [...prevUsers!, data])
  }

  return (
    <>
      <h1>React App!</h1>
      {users &&
        users.map(({ id, name }) => (
          <h3 key={id} onClick={onClickHandler}>
            {name}
          </h3>
        ))}

      <button onClick={onClickHandler} data-testid="add-btn">
        ADD
      </button>
    </>
  )
}

export default App
