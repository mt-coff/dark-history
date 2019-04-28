import * as functions from "firebase-functions";
import * as model from "./model";
import * as express from "express";
import genImage from "./genImage";

const app = express();

app.post("/item", async (req, res) => {
  const post = model.newPost(req.body);
  try {
    post.imageURL = await genImage(
      "ca-dark-history.appspot.com",
      post.title,
      post.detail
    );
    const id = await model.postData(post);
    res.status(200).json({ message: id });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Failed" });
  }
});
app.get("/item/:id", async (req, res) => {
  try {
    const post = await model.getPost(req.params.id);
    res.status(200).json({
      ...post,
      createAt:
        post.createAt instanceof Date
          ? post.createAt.getMilliseconds()
          : post.createAt.toMillis()
    });
  } catch (e) {
    res.status(404).json({ message: e });
  }
});
app.get("/items", async (req, res) => {
  try {
    const posts = await model.getAllPost();
    res.status(200).json(
      posts.map(x => ({
        ...x,
        createAt:
          x.createAt instanceof Date
            ? x.createAt.getMilliseconds()
            : x.createAt.toMillis()
      }))
    );
  } catch (e) {
    res.status(404).json({ message: e });
  }
});

export const api = functions.https.onRequest(app);
