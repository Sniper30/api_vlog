import { db } from "../config/database.js";

export async function likeToArticle(id, body) {
  let query = await db.collection("articles").doc(id).get();
  let resource = query.data();
  if (!resource.LIKES) resource.LIKES = [];
  let check_new_like = resource.LIKES.some(
    (like) => like.user_email === body.user_email
  );
  if (!check_new_like) {
    resource.LIKES.push({ ...body, ids: [id] });
  } else {
    for (let i = 0; i < resource.LIKES.length; i++) {
      let like = resource.LIKES[i];

      if (like.user_email === body.user_email) {
        if (!like.ids) like.ids = [];
        if (!like.ids.every((_id) => _id === id)) like.ids.push(id);
      }
    }
  }
  await db.collection("articles").doc(id).update(resource);
}
