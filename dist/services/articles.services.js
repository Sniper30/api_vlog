import { db } from "../config/database.js";
export async function getAll() {
  const querySnapshot = await db.collection("articles").get();
  const snap = querySnapshot.docs.map(doc => {
    return Object.assign(doc.data(), {
      id: doc.id
    });
  });
  return snap;
}
export async function getOne(id) {
  const querySnapshot = await db.collection("articles").doc(id).get();
  return querySnapshot.data();
}
export async function addOne(body) {
  let {
    author,
    title,
    date,
    post,
    topics,
    image
  } = body;
  await db.collection("articles").add({
    author,
    title,
    date,
    post,
    topics,
    image
  });
}
export async function deleteOne(id) {
  await db.collection("articles").doc(id).delete();
}
export async function updateOne(data, id) {
  let {
    author,
    title,
    date,
    post,
    topics,
    image,
    description
  } = data;
  await db.collection("articles").doc(id).update({
    author,
    title,
    date,
    post,
    topics,
    image,
    description
  });
}