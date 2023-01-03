import * as articlesServices from "../services/articles.services.js";

/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
export async function getAll(req,res){
    
    try {
        const results = await articlesServices.getAll();
        console.log(results)
        res.status(200).json({results})
    } catch (err) {
        // res.status(err.status).json({message:err.message || err});
        console.log(err.message)
    }
} 

/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
export async function getOne(req,res){
   
    try {
        const results = await articlesServices.getOne(req.params.id);
        res.status(200).json({results})
    } catch (err) {
        res.status(err.status).json({message:err.message || err});
    }
}


/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
export async function addOne(req,res){
    try {
        let resource = req.body;
        await articlesServices.addOne(resource);
    } catch (err) {
        // res.status(err.status).json({message:err.message || err })
        console.log(err)
    }
    res.end();
}
/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
export async function deleteOne(req,res){
    try {
        await articlesServices.deleteOne(req.params.id)
        res.status(200).json({message:"deleted one document"})
    } catch (err) {
        res.status(400).json({message:"hay un error"})
    }
}

/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
 export async function updateOne(req,res){
    try {
        await articlesServices.updateOne(req.body,req.params.id)
        res.status(200).json({message:"updated one document"})
    } catch (err) {
        res.status(400).json({message:"hay un error"})
    }
}