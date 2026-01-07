// Replace with your Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyD0fNYSBOlqq6qzjz5a4Kd8ugcAT2rcEag",
    authDomain: "webtestapp-6b381.firebaseapp.com",
    projectId: "webtestapp-6b381",
    storageBucket: "webtestapp-6b381.firebasestorage.app",
    messagingSenderId: "193208553473",
    appId: "1:193208553473:web:5f8cca9962808b9d5f3000",
    measurementId: "G-GV7HE3EKRM"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
