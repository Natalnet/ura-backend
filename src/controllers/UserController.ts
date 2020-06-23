import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

class UserController {
  async index(require: Request, response: Response) {
    const users = await prisma.users.findMany({
      include: {
        borroweds: true,
        files: true
      }
    })

    response.json(users)
  }

  async store(require: Request, response: Response) {
    const { name, email, password, project } = require.body

    const password_hash = await bcrypt.hash(password, 8)

    const user = await prisma.users.create({
      data: {
        name,
        email,
        password_hash,
        project,
        created_at: new Date(),
        updated_at: new Date()
      }
    })

    response.json(user)
  }
}

export default new UserController()
