import { Router } from "express" ;
import { ctrlCreateTask, ctrlDeleteTask, ctrlGetTasks, ctrlUpdateTask } from "../controllers/task.controllers.js"

const taskRouter = Router ();

//endpoint para traer todas las tareas
taskRouter.get('/api/tasks', ctrlGetTasks)

//endpoint para crear todas las tareas
taskRouter.post('/api/tasks',ctrlCreateTask)

//endpoint para modificar todas las tareas
taskRouter.put('/api/:id', ctrlUpdateTask)

//endpoint para eliminar todas las tareas
taskRouter.delete('/api/:id', ctrlDeleteTask )

export { taskRouter }