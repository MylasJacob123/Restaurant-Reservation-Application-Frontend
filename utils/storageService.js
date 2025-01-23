import AsyncStorage from "@react-native-async-storage/async-storage";

const storageService = {
  async saveUser(user) {
    try {
      await AsyncStorage.setItem("@loggedUser", JSON.stringify(user));
    } catch (error) {
      console.error("Error saving user data to AsyncStorage:", error);
    }
  },

  async getUser() {
    try {
      const user = await AsyncStorage.getItem("@loggedUser");
      return user ? JSON.parse(user) : null;
    } catch (error) {
      console.error("Error retrieving user data from AsyncStorage:", error);
      return null;
    }
  },

  async removeUser() {
    try {
      await AsyncStorage.removeItem("@loggedUser");
    } catch (error) {
      console.error("Error removing user data from AsyncStorage:", error);
    }
  },
};

export default storageService;
