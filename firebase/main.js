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

const vapidKey = "BOpyILiKsgS9WP-RQZVR8fg3fnBSFxJyTjy19VYmE9DnpWQauczXuDbxgOwEEG9UhBLAzY5W-Md7id6rECa4jGc";

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Register the service worker and then get the token
navigator.serviceWorker.register('firebase-messaging-sw.js')
  .then(async (registration) => {
    console.log("Service worker registered");

    // Expose globally so it can be called from button
    window.getFcmToken = async function () {
      try {
        const token = await messaging.getToken({
          vapidKey,
          serviceWorkerRegistration: registration
        });

        if (token) {
        document.getElementById("token").textContent = token;
        document.getElementById("copyTokenBtn").style.display = "inline-block";
        console.log("FCM Token:", token);
        } else {
          console.warn("No registration token available.");
        }
      } catch (err) {
        console.error("An error occurred while retrieving token:", err);
      }
    };
  })
  .catch((err) => {
    console.error("Service worker registration failed:", err);
  });


  // Function to copy the token to clipboard
window.copyToken = function () {
  const tokenElement = document.getElementById("token");
  const token = tokenElement.textContent;

  if (!token) {
    alert("No token to copy!");
    return;
  }

  navigator.clipboard.writeText(token).then(() => {
    alert("FCM token copied to clipboard!");
  }).catch((err) => {
    console.error("Failed to copy token:", err);
    alert("Failed to copy token.");
  });
};