import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "./redux/authSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AdminPage from "./components/AdminPage";
import HomePage from "./components/HomePage";
import LandingPage from "./components/LandingPage";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import UserProfile from "./components/UserProfile";

const App = () => {
  const [currentScreen, setCurrentScreen] = useState("Landing");
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  // Load user data from AsyncStorage on app start
  useEffect(() => {
    const loadUserData = async () => {
      const savedUser = await AsyncStorage.getItem("@loggedUser");
      if (savedUser) {
        const userData = JSON.parse(savedUser);
        dispatch(loginSuccess({ user: userData.user, token: userData.token }));
      }
    };
    loadUserData();
  }, [dispatch]);

  const navigateToScreen = (screenName, params = {}) => {
    setCurrentScreen({ screenName, params });
  };

  const renderScreen = () => {
    switch (currentScreen.screenName) {
      case "Landing":
        return <LandingPage navigateTo={navigateToScreen} />;
      case "Admin":
        return <AdminPage navigateTo={navigateToScreen} />;
      case "Home":
        return <HomePage navigateTo={navigateToScreen} />;
      case "Login":
        return <LoginPage navigateTo={navigateToScreen} />;
      case "Register":
        return <RegisterPage navigateTo={navigateToScreen} />;
      case "Forgot":
        return <ForgotPassword navigateTo={navigateToScreen} />;
      case "Reset":
        return <ResetPassword navigateTo={navigateToScreen} />;
      case "UserProfile":
        return <UserProfile route={{ params: currentScreen.params }} navigateTo={navigateToScreen} />;
      default:
        return <LandingPage navigateTo={navigateToScreen} />;
    }
  };

  return (
    <View style={styles.container}>
      {renderScreen()}

      {currentScreen.screenName !== "Landing" &&
        currentScreen.screenName !== "Login" &&
        currentScreen.screenName !== "Register" &&
        currentScreen.screenName !== "Forgot" &&
        currentScreen.screenName !== "Reset" && (
          <View style={styles.tabBar}>
            <TouchableOpacity
              onPress={() => navigateToScreen("Home")}
              style={styles.tabButton}
            >
              <Text style={styles.tabText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigateToScreen("Admin")}
              style={styles.tabButton}
            >
              <Text style={styles.tabText}>Admin</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigateToScreen("UserProfile")}
              style={styles.tabButton}
            >
              <Text style={styles.tabText}>UserProfile</Text>
            </TouchableOpacity>
          </View>
        )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  tabButton: {
    padding: 10,
  },
  tabText: {
    fontSize: 16,
  },
});

export default App;
