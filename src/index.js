const firebase = require("firebase-admin");

const serviceAccount = require("../artutour-firebase-adminsdk-9yplz-f48cd32419.json");

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://artutour.firebaseio.com"
});

const db = firebase.firestore();

// let docRef = db.collection('users').doc();

// let setAda = docRef.set({
//   first: 'Healing',
//   last: 'Factor',
//   born: 1700
// });

// let aTuringRef = db.collection('users').doc();

// let setAlan = aTuringRef.set({
//   'first': 'Alan',
//   'middle': 'Mathison',
//   'last': 'Turing',
//   'born': 1912
// });

//READ DATA
// db.collection("users")
//   .get()
//   .then(snapshot => {
//     snapshot.forEach(doc => {
//       console.log(doc.id, "=>", doc.data());
//     });
//   })
//   .catch(err => {
//     console.log("Error getting documents", err);
//   });


// db.collection("users")
//   .orderBy("first", "asc")
//   .where(doc.id === "n8mW9IDmVYajxoLG26SW")
//   .then(snapshot => {
//     snapshot.forEach(doc => {
//       console.log(doc.id, "=>", doc.data());
//     });
//   });


// const user = db.doc("/users/n8mW9IDmVYajxoLG26SW");
// console.log(user.data());

//READ INDIVIDUAL DATA
const docRef = db.collection('users').doc('SQxv8eC2LSN7DfwgvhF9');
docRef.get().then(function(doc) {
    if (doc.exists) {
        console.log("Document data:", doc.data());
    } else {
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});

//TODO: UPDATE DATA
// let aTuringRef = db.collection('users').doc('n8mW9IDmVYajxoLG26SW');

// let setAlan = aTuringRef.update({
//   'first': 'AlanZZZZZZ',
//   'middle': 'Mathison',
//   'last': 'Turing',
//   'born': 2000,
//   'die': 1911
// });

//TODO: DELETE INDIVIDUAL DOCUMENT
// db.collection("users").doc("n8mW9IDmVYajxoLG26SW").delete().then(function() {
//   console.log("Document successfully deleted!");
// }).catch(function(error) {
//   console.error("Error removing document: ", error);
// });

