import * as services from '../services/likes.services.js'
/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
export async function likeToArticle(req,res){
    services.likeToArticle(req.params.id,req.body);
    res.end()
}


