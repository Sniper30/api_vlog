import * as videosServices from '../services/videos.serivces.js';
import fs from 'fs';
/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
export async function getAll(req, res) {
  const resorces = await videosServices.getAll();
  res.status(200).json(resorces);
}
;
export async function getOne(req, res) {
  const resorce = await videosServices.getOne(req.params.id);
  res.status(200).json(resorce);
}
export async function addone(req, res) {
  await videosServices.addOne(req.body);
  res.status(200).json({
    message: "added success"
  });
}
export async function deleteOne(req, res) {
  await videosServices.deleteOne(req.params.id);
  res.status(200).json({
    message: "deleted"
  });
}
export async function updateOne(req, res) {
  await videosServices.updateOne(req.body, req.params.id);
  res.status(200).json({
    message: "updated"
  });
}