const Task = require('../models/Task');

module.exports.createTask = async (req, res) => {
    try{
        const {name, description, status} = req.body;

        // action for creating a new task
        const task = new Task({
            name,
            description,
            status,
        });

        // save the task to the database
        await task.save();
        res.status(201).json({message: 'Task created Successfully ', task});

    }catch(error){
        console.error("Error in creating Task :", error);
        res.status(500).json({error: "Error Occurred"});
    }
};

// actions for getting all the tasks
module.exports.getAllTasks = async (req, res) => {
    try{
        
        // retrieving all tasks from the database
        const tasks = await Task.find();
        res.status(200).json({tasks});

    }catch(error){
        console.error("Failed to get the tasks :", error);
        res.status(500).json({error: 'An Error occurred'});
    }
};

module.exports.updateTask = async (req, res) => {
    try{
        const {id} = req.params;
        const {name, description, status} = req.body;

        // Find the task in the Database
        const task = await Task.findById(id);
        if(!task){
            return res.status(404).json({error: 'Task Not Found'});
        }
        task.name = name;
        task.description = description;
        task.status = status;

        // save the updated task
        await task.save();
        res.status(200).json({message: 'Task Updated Successfully', task});


    }catch(error){
        console.log("Error in updating the tasks: ", error);
        res.status(500).json({error: 'An error occurred'});
    }
};

module.exports.deleteTask = async (req, res) => {
    try{

        const {id} = req.params;

        // find the task in the database
        const task = await Task.findById(id);
        if(!task){
            return res.status(404).json({error: 'Task not Found'});
        }

        // Delete the Task
        await task.remove();
        res.status(200).json({message: 'Task Deleted Successfully'});

    }catch(error){

    }
};