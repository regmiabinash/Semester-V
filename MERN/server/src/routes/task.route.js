import express from 'express'
import { deleteTask,getById,getAll, createTask, updateTask,pinTask,getAllPinned} from "../controllers/task.controller.js"
import { authenticate } from '../middleways/auth.middleware.js'
const router = express.Router() 

//  create tasks
router.post('/',authenticate,createTask)

// update task
router.put('/:id',updateTask)      

// get all
router.get('/',getAll)    

// delete
router.delete('/:id',deleteTask)    

// get by id
router.get('/:id',getById)

// pin task
router.put('/pin/:id',pinTask)


// get all pinned tasks
router.get('/pinned/all',getAllPinned)

// export
export default router