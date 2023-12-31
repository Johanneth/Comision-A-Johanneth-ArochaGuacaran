import { ForumModel } from "../models/Forums.js"

// controlador para mostrar la vista
export const ctrlView = async (req, res) => {
    try {
        const forums = await ForumModel.findAll();
        res.render('index', {forums})


    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: 'Error en el servidor'
        })
    }
}


//controlador para traer todas las tareas
export const ctrlGetForums = async (req, res) => {
    try {
        const forums = await ForumModel.findAll();
        res.render('forums', {forums})                    
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message:'Error en el Servidor!'
        })
        
    }

}


//controlador para crear todas las tareas
export const ctrlCreateForum = async (req, res) => {
    try {
        const newForum = await ForumModel.create(req.body)
        return res.status(201).json(newForum)
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: 'Error en el Servidor!'
        })
    }
}

//controlador para modificar una tarea

export const ctrlUpdateForum = async (req, res) => {
    const { id } = req.params
    try {
        const forum = await ForumModel.findByPk(id)

        if (!forum) {
            return res.status(404).json({
                message: 'Tarea no encontrada'
            })
        }

        forum.update(req.body)

        return res.status(200).json(forum)
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: 'Error en el servidor'
        })
    }
}


//controlador para eliminar una tarea
export const ctrlDeleteForum = async (req, res) => {
    const { id } = req.params
    try {
        const forumDeleted = await ForumModel.destroy({
            where: {
                id: id
            }
        })
        if (!forumDeleted) {
            return res.status(404).json({
                message: 'Tarea no encontrada'
            })
        }
        return res.status(200).json({
            message: 'Tarea eliminada'
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: 'Error'
        })
    }
}
