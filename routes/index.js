const Router = require('express')
const router = new Router()
const itemRouter = require('./itemRouter')
const userRouter = require('./userRouter')
const brandRouter = require('./brandRouter')
const categoryRouter = require('./categoryRouter')
const categoryDownRouter = require('./categoryDownRouter')
const basketRouter = require('./basketRouter')
const basketItemRouter = require('./basketItemRouter')
const orderRouter = require('./orderRouter')
const orderItemRouter = require('./orderItemRouter')
const infoItemRouter = require('./itemInfoRouter')
const itemColorRouter = require('./itemColorRouter')
const scaleController = require('./scaleRouter')

router.use('/user', userRouter)
router.use('/category', categoryRouter)
router.use('/categorydown', categoryDownRouter)
router.use('/brand', brandRouter)
router.use('/item', itemRouter)
router.use('/basket', basketRouter)
router.use('/basketitem', basketItemRouter)
router.use('/order', orderRouter)
router.use('/orderitem', orderItemRouter)
router.use('/info', infoItemRouter)
router.use('/color', itemColorRouter)
router.use('/scale', scaleController)

module.exports = router