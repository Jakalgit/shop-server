const {ItemColor, Item} = require("../models/models")
const uuid = require('uuid')
const path = require('path');

class itemColorController {
    async create(req, res) {
        try {
            let {itemId} = req.body
            let {img_1, img_2, img_3, img_4} = req.files

            const item = await Item.findOne({
                where: {id: itemId}
            })

            if (item && itemId && img_1 && img_2 && img_3 && img_4) {

                // 1ое изображение
                let fileName_1 = uuid.v4() + ".jpg"
                await img_1.mv(path.resolve(__dirname, '..', 'static', fileName_1))

                // 2ое изображение
                let fileName_2 = uuid.v4() + ".jpg"
                await img_2.mv(path.resolve(__dirname, '..', 'static', fileName_2))

                // 3ое изображение
                let fileName_3 = uuid.v4() + ".jpg"
                await img_3.mv(path.resolve(__dirname, '..', 'static', fileName_3))

                // 4ое изображение
                let fileName_4 = uuid.v4() + ".jpg"
                await img_4.mv(path.resolve(__dirname, '..', 'static', fileName_4))

                const itemColor = await ItemColor.create({itemId, img1: fileName_1, img2: fileName_2, img3: fileName_3, img4: fileName_4})

                // Обновление изображения айтема
                const colors = await ItemColor.findAll({where: {itemId}})
                item.img = colors[0].img1

                await item.save()

                return res.json(itemColor)
            } else {
                return res.json('Ошибка')
            }
        } catch (e) {
            console.log(e)
            return res.json('Ошибка')
        }
    }

    async changeImg_1(req, res) {
        try {
            const {id} = req.body
            const {img1} = req.files

            let fileName = uuid.v4() + ".jpg"
            await img1.mv(path.resolve(__dirname, '..', 'static', fileName))

            const colorCond = await ItemColor.findOne({where: {id}})
            if (colorCond) {
                colorCond.img1 = fileName
                await colorCond.save()

                // Смена изображения айтема если мы меняем 1ый цвет
                const colors = await ItemColor.findAll({where: colorCond.itemId})
                const item = await Item.findOne({where: colorCond.itemId})
                item.img = colors[0].img1
                await item.save()

                return res.json('Сохранено')
            } else {
                return res.json('Ошибка')
            }
        } catch (e) {
            console.log(e)
            return res.json('Ошибка')
        }
    }

    async changeImg_2(req, res) {
        try {
            const {id} = req.body
            const {img2} = req.files

            let fileName = uuid.v4() + ".jpg"
            await img2.mv(path.resolve(__dirname, '..', 'static', fileName))

            const colorCond = await ItemColor.findOne({where: {id}})
            if (colorCond) {
                colorCond.img2 = fileName
                await colorCond.save()

                return res.json('Сохранено')
            } else {
                return res.json('Ошибка')
            }
        } catch (e) {
            console.log(e)
            return res.json('Ошибка')
        }
    }

    async changeImg_3(req, res) {
        try {
            const {id} = req.body
            const {img3} = req.files

            let fileName = uuid.v4() + ".jpg"
            await img3.mv(path.resolve(__dirname, '..', 'static', fileName))

            const colorCond = await ItemColor.findOne({where: {id}})
            if (colorCond) {
                colorCond.img3 = fileName
                await colorCond.save()

                return res.json('Сохранено')
            } else {
                return res.json('Ошибка')
            }
        } catch (e) {
            console.log(e)
            return res.json('Ошибка')
        }
    }

    async changeImg_4(req, res) {
        try {
            const {id} = req.body
            const {img4} = req.files

            let fileName = uuid.v4() + ".jpg"
            await img4.mv(path.resolve(__dirname, '..', 'static', fileName))

            const colorCond = await ItemColor.findOne({where: {id}})
            if (colorCond) {
                colorCond.img4 = fileName
                await colorCond.save()

                return res.json('Сохранено')
            } else {
                return res.json('Ошибка')
            }
        } catch (e) {
            console.log(e)
            return res.json('Ошибка')
        }
    }

    async deleteColor(req, res) {
        try {
            const {id} = req.body

            const colorCond = await ItemColor.findOne({where: {id}})
            if (colorCond) {
                await ItemColor.destroy({where: {id}})

                // Смена изображения айтема если мы удаляем 1ый цвет
                const colors = await ItemColor.findAll({where: colorCond.itemId})
                const item = await Item.findOne({where: colorCond.itemId})
                item.img = colors[0].img1
                await item.save()

                return res.json('Удалено')
            } else {
                return res.json('Ошибка')
            }
        } catch (e) {
            console.log(e)
            return res.json('Ошибка')
        }
    }

    async getColor(req, res) {
        try {
            const {id} = req.params

            const itemColor = await ItemColor.findOne({where: {id}})
            if (itemColor) {
                return res.json(itemColor)
            } else {
                return res.json('Ошибка')
            }
        } catch (e) {
            console.log(e)
            return res.json('Ошибка')
        }
    }

    async getAll(req, res) {
        try {
            const {itemId} = req.query

            const itemColors = await ItemColor.findAll({where: {itemId}})
            if (itemColors.length !== 0) {
                return res.json(itemColors)
            } else {
                return res.json('Ошибка')
            }
        } catch (e) {
            console.log(e)
            return res.json('Ошибка')
        }
    }

    async getFullAll(req, res) {
        const itemColors = await ItemColor.findAll()

        return res.json(itemColors)
    }
}

module.exports = new itemColorController()