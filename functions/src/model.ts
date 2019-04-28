import * as firebase from "firebase-admin";

firebase.initializeApp();

export interface Post {
  id: string;
  title: string;
  detail: string;
  imageID: string;
  darkness: number;
  strength: number;
  createAt: Date | FirebaseFirestore.Timestamp;
}

export const newPost = (post: { title: string; detail?: string }): Post => {
  return {
    title: post.title,
    detail: post.detail || "",
    id: "",
    imageID: "",
    darkness: 0,
    strength: 0,
    createAt: new Date()
  };
};

export const postData = async ({ id, ...post }: Post): Promise<string> => {
  const ref = await firebase
    .firestore()
    .collection("posts")
    .add(post);

  return ref.id;
};

export const getPost = async (id: string): Promise<Post> => {
  let snapShot: FirebaseFirestore.DocumentSnapshot;
  try {
    snapShot = await firebase
      .firestore()
      .collection("posts")
      .doc(id)
      .get();
  } catch (e) {
    throw e;
  }

  if (snapShot.exists) {
    const data = snapShot.data() as Post;
    return {
      ...data,
      id: snapShot.id
    };
  } else {
    throw new Error(`${id} is not exists.`);
  }
};

export const getAllPost = async (): Promise<Post[]> => {
  let snapShot: FirebaseFirestore.QuerySnapshot;
  try {
    snapShot = await firebase
      .firestore()
      .collection("posts")
      .get();
  } catch (e) {
    throw e;
  }

  if (snapShot.empty) return [];
  return snapShot.docs.map(x => ({ id: x.id, ...x.data() } as Post));
};
