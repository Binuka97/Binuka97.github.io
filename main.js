async function getToken() {
    try {
        const currentToken = await messaging.getToken({
            vapidKey: "BOpyILiKsgS9WP-RQZVR8fg3fnBSFxJyTjy19VYmE9DnpWQauczXuDbxgOwEEG9UhBLAzY5W-Md7id6rECa4jGc"
        });

        if (currentToken) {
            console.log(" FCM Token:", currentToken);
            document.getElementById("output").innerText = currentToken;
        } else {
            console.warn(" No registration token available.");
        }
    } catch (err) {
        console.error(" sToken error:", err);
    }
}
