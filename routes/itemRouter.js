const Router = require('express')
const router = new Router()
const itemController = require('../controllers/itemController')
const checkRole = require("../middleware/checkRoleMiddleware");

router.post('/', checkRole('ADMIN'), itemController.create)
router.post('/change-name', checkRole('ADMIN'), itemController.changeName)
router.post('/change-price', checkRole('ADMIN'), itemController.changePrice)
router.post('/change-params', checkRole('ADMIN'), itemController.changeParams)
router.post('/change-availability', checkRole('ADMIN'), itemController.changeAvailability)
router.post('/change-visibility', checkRole('ADMIN'), itemController.changeVisibility)
router.post('/change-length', checkRole('ADMIN'), itemController.changeLength)
router.post('/change-width', checkRole('ADMIN'), itemController.changeWidth)
router.post('/change-height', checkRole('ADMIN'), itemController.changeHeight)
router.post('/change-weight', checkRole('ADMIN'), itemController.changeWeight)
router.post('/change-flag', checkRole('ADMIN'), itemController.changeDiscountFlag)
router.post('/change-discount', checkRole('ADMIN'), itemController.changeDiscount)
router.post('/change-scale',checkRole('ADMIN'), itemController.changeScale)
router.get('/all', checkRole('ADMIN'), itemController.getFullAll)
router.get('/', itemController.getAll)
router.get('/page', itemController.getPageAll)
router.get('/:id', itemController.getOne)

module.exports = router