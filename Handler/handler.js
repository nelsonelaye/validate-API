const userModel = require("../Model/model")
const validateData = require("../Config/validate")

const createUser = async (req, res) => {
    try {

        const {error} = validateData.validateUser(req.body)

        if(error){
            res.status(409).json({
                status: "Failure",
                message: error.message
            })
        }
        const user = await userModel.create(req.body)

        res.status(201).json({
            status: "Success",
            data: user
        })
    } catch (error) {
        res.status(500).json({
            status: "Failure",
            message: error.message
        })
    }
}

const allUsers = async (req, res) => {
    try {
        const users = await userModel.find()
        // if(users.length < 1){
        //     res.status(404).json({
        //         status: "Success",
        //         data: user
        //     })
        // }
        res.status(200).json({
            status: "Success",
            data: users
        })
    } catch (error) {
        res.status(404).json({
            status: "Failure",
            message: error.message
        })
    }
}

const oneUser =  async (req, res) => {
    try {
        const user = await userModel.findById(req.params.id)

        if(!user){
            res.status(404).json({
                status: "Failure",
                message: "User not found"
            })
        }
        res.status(200).json({
            status: "Success",
            data: user
        })
    } catch (error) {
        res.status(400).json({
            status: "Failure",
            message: error.message
        })
    }
}

const updateUser =  async (req, res) => {
    try {
        const id =  req.params.id
        const user = await userModel.findById(id)

        if(!user){
            res.status(404).json({
                status: "Failure",
                message: "User not found"
            })
        }

        const newUpdate = await userModel.findByIdAndUpdate(id, req.body, {new: true}) 

        res.status(200).json({
            status: "Success",
            data: newUpdate
        })
    } catch (error) {
        res.status(400).json({
            status: "Failure",
            message: error.message
        })
    }
}

const deleteUser =  async (req, res) => {
    try {
        const id =  req.params.id
        const user = await userModel.findById(id)

        if(!user){
            res.status(404).json({
                status: "Failure",
                message: "User not found"
            })
        }

        const newUpdate = await userModel.findByIdAndDelete(id) 

        res.status(204).json({
            status: "Success",
            message: "User has been deleted"
        })
    } catch (error) {
        res.status(400).json({
            status: "Failure",
            message: error.message
        })
    }
}

module.exports = {
    createUser,
    allUsers,
    oneUser,
    updateUser,
    deleteUser
}