const Koa = require('koa')
const Router = require('@koa/router')
const { PrismaClient } = require('@prisma/client')
const { koaBody } = require('koa-body')

const app = new Koa()
const prisma = new PrismaClient()
const router = new Router()
app.use(koaBody())

//Create
router.post('/car', async (ctx) => {
  try {
    const reqCar = ctx.request.body

    if (!reqCar || !reqCar.registerNo) {
      ctx.status = 400
      ctx.body = { error: 'Bad Request.' }
      return
    }
    const duplicatedCar = await prisma.car.findMany({
      where: {
        registerNo: reqCar.registerNo,
      },
    })
    if (duplicatedCar.length <= 0) {
      const newCar = await prisma.car.create({
        data: reqCar,
      })
      ctx.status = 201
      ctx.body = newCar
    } else {
      ctx.status = 400
      ctx.body = { error: 'Register No. Already Exist.' }
    }
  } catch (ex) {
    ctx.status = 500
    ctx.body = { error: 'Internal Server Error.' }
    console.error(ex)
  }
})
//ReadAll
router.get('/car', async (ctx) => {
  try {
    const carlist = await prisma.car.findMany()
    if (carlist.length > 0) {
      ctx.status = 200
      ctx.body = carlist
    } else {
      ctx.status = 404
      ctx.body = carlist
    }
  } catch (ex) {
    ctx.status = 500
    ctx.body = 'Internal Server Error.'
    console.error(ex)
  }
})
//ReadSingle
//Update
//DELETE

const PORT = 3000
app.use(router.routes()).use(router.allowedMethods())
app.listen(PORT)
console.log('App listening on port:' + PORT)
