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

// util functions
export const setDocumentsfromCollectionRef = async (collectionRef, data) => {
  const batch = firestore.batch();
  Object.keys(data).map(async key => {
    const docRef = collectionRef.doc(key);
    batch.set(docRef, data[key]);
  });
  try {
    await batch.commit();
  } catch (err) {
    console.log(err);
    return false;
  }
  return true;
};

export const getDocumentsfromCollectionRef = async collectionRef => {
  const allDocs = await collectionRef.get();
  let allDocsWithData = {};
  allDocs.docs.forEach(doc => {
    allDocsWithData[doc.id] = doc.data();
  });
  return allDocsWithData;
};

export const addExercisesToUser = (userId, exercises) => {
  // Inputs:
  // userId = userId string
  // exercises = array of exercises

  const collectionRef = firestore.collection(`users/${userId}/history/`);
  let exercisesObj = {};
  exercises.map(exercise => {
    return (exercisesObj[exercise] = {
      exists: true
    });
  });
  setDocumentsfromCollectionRef(collectionRef, exercisesObj);
};

// export const addExerciseRecords = (userId, data) => {
//   const exerciseName = Object.keys(data)[0];
//   const repsAndSets = Object.keys(data[exerciseName])[0];
//   const collectionRef = firestore.collection(
//     `users/${userId}/history/${exerciseName}/${repsAndSets}/`
//   );
//   const exerciseRecords = data[exerciseName][repsAndSets];
//   setDocumentsfromCollectionRef(collectionRef, exerciseRecords);
// };

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
