import express from 'express'
import {update,read,remove,create, getUsers, getUserById} from "../controllers/userControllers.js"
const router = express.Router()


router.post('/',create)

router.put('/:Uid',update)

// get by id
router.get('/',getUsers)

// delete
router.delete('/:id',remove)

router.get('/:id',getUserById)


export default router