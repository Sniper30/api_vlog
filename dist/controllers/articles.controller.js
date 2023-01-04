import * as articlesServices from "../services/articles.services.js";

/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
export async function getAll(req, res) {
  const results = await articlesServices.getAll();
  res.status(200).json({
    results
  });
}

/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
export async function getOne(req, res) {
  const results = await articlesServices.getOne(req.params.id);
  res.status(200).json({
    results
  });
}

/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
export async function addOne(req, res) {
  let resource = req.body;
  await articlesServices.addOne(resource);
  res.status(200).json({
    message: "added"
  });
}
/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
export async function deleteOne(req, res) {
  await articlesServices.deleteOne(req.params.id);
  res.status(200).json({
    message: "deleted one document"
  });
}

/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
export async function updateOne(req, res) {
  await articlesServices.updateOne(req.body, req.params.id);
  res.status(200).json({
    message: "updated one document"
  });
}