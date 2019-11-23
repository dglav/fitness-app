import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyDPJh-luBWyRxfsud62iwfmZSUpscU74tk",
  authDomain: "fitness-app-45a27.firebaseapp.com",
  databaseURL: "https://fitness-app-45a27.firebaseio.com",
  projectId: "fitness-app-45a27",
  storageBucket: "fitness-app-45a27.appspot.com",
  messagingSenderId: "703718018420",
  appId: "1:703718018420:web:59163041ead2638b23b021",
  measurementId: "G-SP24WSMLHZ"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const getStuff = async () => {
  const usersCollectionRef = firestore.collection("users");
  console.log(usersCollectionRef);
  const userDocumentRef = usersCollectionRef.doc("dZrjrnLHyzwl6bKQTqpI");
  console.log(userDocumentRef);
  userDocumentRef.set({
    displayName: "Drew",
    workout: "wk1"
  });
};

export const uploadToDatabase = async (collectionName, data) => {
  const collectionRef = firestore.collection(collectionName);
  console.log(collectionRef);

  const batch = firestore.batch();
  Object.keys(data).map(async key => {
    const docRef = collectionRef.doc(key);
    console.log(docRef);
    batch.set(docRef, data[key]);
  });

  return await batch.commit();
};

export const addCollectionsAndDocuments = async (collectionName, data) => {
  const collectionRef = firestore.collection(collectionName);
  console.log(collectionRef);

  const batch = firestore.batch();
  Object.keys(data).map(async key => {
    const docRef = collectionRef.doc(key);
    console.log(docRef);
    batch.set(docRef, data[key]);
  });
  return await batch.commit();
};

export const addExercisesToUser = async (userId, exercises) => {
  const collectionRef = firestore.collection(`users/${userId}/history/`);
  let exercisesObj = {};
  exercises.map(exercise => {
    return (exercisesObj[exercise] = {
      exists: true
    });
  });
  addCollectionsAndDocuments(collectionRef, exercises);
};

export const convertExercisesSnapshotToMap = exercisesCollection => {
  const transformedCollection = exercisesCollection.docs.map(doc => {
    const { repsAndSets } = doc.data();
    return {
      id: doc.id,
      repsAndSets
    };
  });
  return transformedCollection.reduce((accum, collection) => {
    accum[collection.id] = { repsAndSets: collection.repsAndSets };
    return accum;
  }, {});
};
