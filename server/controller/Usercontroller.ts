import {Request, Response} from "express";
import userModel from "../model/userModel";

// GetAll

const GetAllUser = async(req: Request, res: Response): Promise<Response> =>{
    try {
        const getUser =await userModel.find();
        return res.status(200).json({
            message: "data gotten successfully",
            data: getUser
        })
        
    } catch (error) {
        return res.status(404).json({
            message: "an error occurred"
        })
    }
}

// GetSingle 

const GetSingle = async (req: Request, res: Response): Promise<Response> => {
 try {
    const getSingle = await userModel.findById(req.params.id)

    return res.status(200).json({
        message: "data gotten successfully",
        data: getSingle
    })
    
 } catch (error) {

    return res.status(400).json({
        message: "an error occurred"
    })
    
 }
}

// Post methos


const newUser = async (req: Request, res: Response)=>{
    try {

        
        
    } catch (error) {
        return res.status(400).json({
            message: "an error occurred"
        })
    }
}