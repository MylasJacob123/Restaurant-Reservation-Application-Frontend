import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image } from "react-native";
import backgroundImage from "../assets/girafe_enhanced.png";
import logoImage from "../assets/Charcoal_Black_Minimalist_Typographic_Cafe_Bar_Restaurant_Logo__1_-removebg-preview 2_enhanced.png";

function LandingPage({ navigateTo }) {
  return (
    <ImageBackground source={backgroundImage} style={styles.container}>
      <Image source={logoImage} style={styles.logo} />
      <View style={styles.content}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigateTo("Login")}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigateTo("Register")}
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
  },
  logo: {
    width: "60%",
    height: 90,
    marginBottom: 30,
    backgroundColor: "rgba(0,0,0, 0.05)",
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 10,
    width: "70%",
    marginTop: 50
  },
  button: {
    backgroundColor: "#F09E61",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 5,
    marginVertical: 10,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default LandingPage;
