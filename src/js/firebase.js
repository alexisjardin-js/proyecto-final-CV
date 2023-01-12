const firebaseConfig = {
  apiKey: "AIzaSyCVg3wQhenDjICTKaqSgT_zkwOTxLSOH2k",
  authDomain: "contact-form-150e5.firebaseapp.com",
  projectId: "contact-form-150e5",
  storageBucket: "contact-form-150e5.appspot.com",
  messagingSenderId: "589072161688",
  appId: "1:589072161688:web:86893f57f0b3e7254fa9ed"
  };
  
firebase.initializeApp(firebaseConfig);
firebase.analytics();
let db = firebase.firestore();