import { db } from "../config/database.js";


export async function getAll() {
  const resorces = await db.collection("youtube_videos").get();
  return resorces.docs.map((res) => res.data());
}

export async function getOne(id) {
  const resorce = await db.collection("youtube_videos").doc(id).get();
  return resorce.data();
}

export async function addOne(body) {
  let { title, description, link, date, author } = body;
  await db.collection("youtube_videos")
  .add({ title, description, link, date, author});
}

export async function deleteOne(id) {
   await db.collection("youtube_videos").doc(id).delete();
}

export async function updateOne(data, id) {
  const { title, description, link, date, author } = data;
  await db.collection("youtube_videos").doc(id)
  .update({ title, description, link, date, author});

}
