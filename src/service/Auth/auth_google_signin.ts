import AsyncStorage from "@react-native-async-storage/async-storage";

class GoogleLogin {
    async getUserInfo(token: string) {
        if (!token) return;
        try {
            const response = await fetch(
                "https://www.googleapis.com/userinfo/v2/me",
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );

            const user = await response.json();
            this.sendUserInfoToServer(user);
            await AsyncStorage.setItem("@user", JSON.stringify(user));
            return user;
        } catch (error) {

        }
    }

    async sendUserInfoToServer(user: any) {
        try {
            const response = await fetch("https://se-foodhub-7fdf668fb550.herokuapp.com/api/user/auth/google", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(user),
            });
        
            if (!response.ok) {
              throw new Error("Failed to send user info to server");
      
            }
        
            console.log("User info sent to server successfully");
          } catch (error) {
            console.error("Error sending user info to server:", error);
          }
    }
}
