// ✅ Replace with your Firebase project config
const firebaseConfig = {
    apiKey: "AIzaSyD0fNYSBOlqq6qzjz5a4Kd8ugcAT2rcEag",
    authDomain: "webtestapp-6b381.firebaseapp.com",
    projectId: "webtestapp-6b381",
    storageBucket: "webtestapp-6b381.firebasestorage.app",
    messagingSenderId: "193208553473",
    appId: "1:193208553473:web:5f8cca9962808b9d5f3000",
    measurementId: "G-GV7HE3EKRM"
};

// ✅ Replace with your Firebase VAPID key
const vapidKey = "BOpyILiKsgS9WP-RQZVR8fg3fnBSFxJyTjy19VYmE9DnpWQauczXuDbxgOwEEG9UhBLAzY5W-Md7id6rECa4jGc";

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Request permission and get the FCM token
async function getFcmToken() {
  try {
    const token = await messaging.getToken({ vapidKey });
    if (token) {
      document.getElementById("token").textContent = token;
      console.log("FCM Token:", token);
    } else {
      console.warn("No registration token available. Request permission to generate one.");
    }
  } catch (error) {
    console.error("An error occurred while retrieving token:", error);
  }
}
