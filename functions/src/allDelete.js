const admin = require("firebase-admin");

admin.initializeApp({ projectId: "ca-dark-history" });

(async () => {
  const firestore = admin.firestore();
  const batch = firestore.batch();

  const posts = await firestore.collection("posts").get();
  posts.docs.map(x => x.ref).forEach(x => batch.delete(x));
  const results = await batch.commit();
  results.forEach((_, i) => console.log("Deleted : " + posts.docs[i].id));
})();
