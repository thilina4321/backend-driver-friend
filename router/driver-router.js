const express = require('express')
const router = express.Router()

//controlers
const driverController = require('../controller/driver-controller')

router.get('/all-drivers', driverController.allDrivers)
router.post('/add-driver', driverController.addDriver)
router.get('/find-driver/:id', driverController.findDriver)
router.delete('/delete-driver/:id', driverController.deleteDriver)

module.exports = router