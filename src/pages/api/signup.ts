import type { NextApiRequest, NextApiResponse } from 'next'

interface User {
    username: string
    email: string
    password: string
}
export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
      const { username, email, password }: User = req.body
      
      if (!username || !email || !password) {
        res.status(400).json({ message: 'Missing required field' })
        return
      }
      
      const user: User = {
        username,
        email,
        password
      }
  
      res.status(200).json({ message: 'User registered successfully' })
    } else {
      res.status(405).json({ message: 'Method Not Allowed' })
    }
  }

  