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
  try {
    const resorce = await videosServices.getOne(req.params.id);
    res.status(200).json(resorce);
  } catch (err) {
    res.status(400).json({
      message: "Hay un error: " + err.message
    });
  }
}
export async function addone(req, res) {
  try {
    await videosServices.addOne(req.body);
    res.status(200).json({
      message: "added success"
    });
  } catch (err) {
    res.status(400).json({
      message: "Hay un error: " + err.message
    });
  }
}
export async function deleteOne(req, res) {
  try {
    await videosServices.deleteOne(req.params.id);
    res.status(200).json({
      message: "deleted"
    });
  } catch (err) {
    res.status(400).json({
      message: "Hay un error: " + err.message
    });
  }
}
export async function updateOne(req, res) {
  try {
    await videosServices.updateOne(req.body, req.params.id);
    res.status(200).json({
      message: "updated"
    });
  } catch (err) {
    res.status(400).json({
      message: "Hay un error: " + err.message
    });
  }
}