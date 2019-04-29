import genImage from "./genImage";
import { putImage, updateItem } from "./firebase";

const base = "https://us-central1-ca-dark-history.cloudfunctions.net/api";

export const postItem = async post => {
  const tmp = require("!svg-inline-loader!@/assets/Template.svg");
  const svg = document.createElement("div");
  svg.innerHTML = tmp;
  // データのポスト & 画像の生成
  const [{ message }, blob] = await Promise.all([
    fetch(`${base}/item`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(post)
    }).then(x => x.json()),
    genImage(svg.querySelector("svg"), post.title, post.detail)
  ]);
  //ストレージに保存 & URLの取得
  const imageURL = await putImage(blob, `${message}.png`).then(x =>
    x.ref.getDownloadURL()
  );
  await updateItem(message, { imageURL });

  return message;
};

export const getItem = id => {
  return fetch(`${base}/item/${id}`);
};

export const getAllItem = () => {
  return fetch(`${base}/items`);
};
