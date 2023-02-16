import {Request, Response} from "express"
import mongoose from "mongoose";
import taskModel from "../Model/taskModel";
import TaskModel from "../Model/taskModel"
import userModel from "../model/userModel";

const getTask = async (req: Request, res: Response) => {
    await TaskModel.find();
    return res.status(200).json({
        message: "found"
    })
};

const CreateTask = async (req: Request, res: Response): Promise<Response> => {
    try {
        const getUser = await userModel.findById(req.params.id);

        if(getUser) {
            const {title, date} = req.body;
            let myDate = Date.now().toLocaleString();

            const createtask = await taskModel.create({
                title,
                date: date ? date: myDate,
                reminder: "",
                status: false,
                note: "",
            });

            await getUser?.myDay.push(new mongoose.Types.ObjectId(createtask!._id))
            await getUser?.task.push(new mongoose.Types.ObjectId(createtask!._id))
        }
    } catch (error) {
        
    }
}