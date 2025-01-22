import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  StyleSheet,
  Alert, 
} from "react-native";
import backgroundImage from "../assets/girafe_enhanced.png";
import logoImage from "../assets/Charcoal_Black_Minimalist_Typographic_Cafe_Bar_Restaurant_Logo__1_-removebg-preview 2_enhanced.png";

function LoginPage({ navigateTo }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in both fields.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "https://restaurant-reservation-application-bq2w.onrender.com/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        Alert.alert("Error", data.error || "Login failed. Please try again.");
      } else {
        console.log("Login successful", data);
        Alert.alert("Success", "Login successful!", [
          {
            text: "OK",
            onPress: () => navigateTo("Home"), 
          },
        ]);
      }
    } catch (err) {
      Alert.alert("Error", "An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.imageBackground}>
        <Image source={logoImage} style={styles.image} />
      </ImageBackground>

      <View style={styles.body}>
        <Text style={styles.heading}>Welcome Back!</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />

        <Text
          style={styles.forgotButtonText}
          onPress={() => navigateTo("Forgot")}
        >
          Forgot Password
        </Text>

        <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={loading}>
          <Text style={styles.buttonText}>
            {loading ? "Logging in..." : "Login"}
          </Text>
        </TouchableOpacity>

        <Text
          style={styles.registerButtonText}
          onPress={() => navigateTo("Register")}
        >
          Don't have an account? Register
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  imageBackground: {
    flex: 1,
    width: "100%",
    height: "46%",
    borderRadius: 30,
  },
  image: {
    marginTop: 50,
    width: "50%",
    height: 90,
    backgroundColor: "rgba(0,0,0, .05)",
    position: "absolute",
    top: "10%",
    left: "25%",
  },
  body: {
    width: "100%",
    height: "40%",
    position: "absolute",
    top: "50%",
    alignItems: "center",
    gap: 15,
  },
  heading: {
    fontWeight: "540",
    fontSize: 25,
    color: "#F09E61",
  },
  input: {
    borderWidth: 1,
    borderColor: "#F09E61",
    width: "90%",
    color: "#808080",
    borderRadius: 10,
    padding: 12,
    height: 48,
  },
  button: {
    backgroundColor: "#F09E61",
    width: "90%",
    height: 48,
    borderRadius: 10,
  },
  buttonText: {
    marginTop: 8,
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 20,
  },
  forgotButtonText: {
    textAlign: "right",
    width: "87%",
    fontSize: 17,
    marginBottom: 15,
    color: "#F09E61",
  },
  registerButtonText: {
    color: "#F09E61",
    fontSize: 17,
  },
});

export default LoginPage;
