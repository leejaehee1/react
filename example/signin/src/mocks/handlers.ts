import { setupWorker, rest } from 'msw'
import { LoginReqType } from '../types'


// export type LoginReqType ={
//   email: string;
//   password: string;
// }

interface LoginResponse {
  token: string
}
export const handlers = [
  rest.post<LoginReqType, LoginResponse>('http://jsoftware.co.kr/jhuman/', (req, res, ctx) => {
    const { email } = req.body
    const { password } = req.body
    console.log(email)
    console.log(password)
    return res(
      ctx.status(200),
      ctx.json({
        "token":"426c2172-7cf7-4395-93e8-3771b4a50ade",
      })
    )
  }),
]
// handlers.start()
