import { rest } from 'msw'
import { IUser } from 'App'

export const GETUSERDATA: IUser[] = [
  {
    id: 1,
    name: 'Leanne Graham'
  },
  {
    id: 2,
    name: 'Ervin Howell'
  }
]

export const NEWUSERDATA: IUser = {
  id: 3,
  name: 'Test User'
}

export const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(GETUSERDATA))
  }),

  rest.post('https://jsonplaceholder.typicode.com/users', (req, res, ctx) => {
    const createdPost = req.body as IUser

    return res(ctx.status(200), ctx.json(createdPost))
  })
]
