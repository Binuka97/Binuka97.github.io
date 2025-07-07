importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

// Replace with your config
firebase.initializeApp({
    apiKey: "AIzaSyD0fNYSBOlqq6qzjz5a4Kd8ugcAT2rcEag",
    authDomain: "webtestapp-6b381.firebaseapp.com",
    projectId: "webtestapp-6b381",
    storageBucket: "webtestapp-6b381.firebasestorage.app",
    messagingSenderId: "193208553473",
    appId: "1:193208553473:web:5f8cca9962808b9d5f3000",
    measurementId: "G-GV7HE3EKRM"
});

const messaging = firebase.messaging();
