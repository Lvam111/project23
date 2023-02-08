const express = require('express')
const router= express.Router()
const developerController = require('../controllers/developer')

router.get("/:id",developerController.getOneDeveloper)
router.get('/',developerController.getAllDevelopers)
router.put('/:id',developerController.updateDeveloper)
router.patch('/:id',developerController.patchDeveloper)
router.post('/',developerController.addDeveloper)
router.delete('/:id',developerController.deleteOneDeveloper)





module.exports= router;