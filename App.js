import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import AdminPage from "./components/AdminPage";
import HomePage from "./components/HomePage";
import LandingPage from "./components/LandingPage";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";

const App = () => {
  const [currentScreen, setCurrentScreen] = useState("Landing");

  const navigateToScreen = (screenName) => {
    setCurrentScreen(screenName);
  };

  const renderScreen = () => {
    switch (currentScreen) {
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
      default:
        return <LandingPage navigateTo={navigateToScreen} />;
    }
  };

  return (
    <View style={styles.container}>
      {renderScreen()}

      {currentScreen !== "Landing" &&
        currentScreen !== "Login" &&
        currentScreen !== "Register" &&
        currentScreen !== "Forgot" &&
        currentScreen !== "Reset" && (
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
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
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
