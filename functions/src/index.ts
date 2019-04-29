import * as functions from "firebase-functions";
import * as model from "./model";
import * as express from "express";

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.post("/item", async (req, res) => {
  const post = model.newPost(req.body);
  try {
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

const view = express();
view.set("view engine", "esj");

view.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const { imageURL } = await model.getPost(id);
    res.status(200).render("./ogp.ejs", { imageURL, id });
  } catch (e) {
    res.status(404).render("./notfount.ejs");
  }
});

export const api = functions.https.onRequest(app);
export const ogp = functions.https.onRequest(view);
