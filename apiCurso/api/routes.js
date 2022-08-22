import Router from '@koa/router'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const router = new Router()
const prisma = new PrismaClient()

router.post('/signup', async ctx => {
	const saltRounds = 10
	const password = bcrypt.hashSync(ctx.request.body.password, saltRounds)

	try {
		const user = await prisma.users.create({
			data: {
				name: ctx.request.body.name,
				email: ctx.request.body.email,
				password
			}
		})

		const accessToken = jwt.sign({
			sub: user.id
		}, process.env.JWT_SECRET, { expiresIn: '24h' })
	
		ctx.body = {
			id: user.id,
			name: user.name,
			email: user.email,
			accessToken
		}
		
	} catch (error) {
		if(error.meta && !error.meta.target) {
			ctx.status = 422
			ctx.body = "Email já existe."
			return
		}

		ctx.status = 500
		ctx.body = 'Internal error'
	}

})

router.get('/login', async ctx => {
	const [, token ] = ctx.request.headers.authorization.split(' ')
	const [email, plainTextPassword] = Buffer.from(token, 'base64').toString().split(':')

	const user = await prisma.users.findUnique({
		where: { email }
	})

	if(!user){
		ctx.status = 404
		return
	}

	const passwordMatch = bcrypt.compareSync(plainTextPassword, user.password)

	if (passwordMatch) {
		const accessToken = jwt.sign({
			sub: user.id
		}, process.env.JWT_SECRET, { expiresIn: '24h' })

		ctx.body = {
			id: user.id,
			name: user.name,
			email: user.email,
			accessToken
		}

		return
	}

	ctx.status = 404
})