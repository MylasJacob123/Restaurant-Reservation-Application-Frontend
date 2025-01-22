import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  ImageBackground,
  Image,
  Alert,
} from "react-native";
import backgroundImage from "../assets/girafe_enhanced.png";
import logoImage from "../assets/Charcoal_Black_Minimalist_Typographic_Cafe_Bar_Restaurant_Logo__1_-removebg-preview 2_enhanced.png";

function RegisterPage({ navigateTo }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [isModalVisible, setModalVisible] = useState(false);

  const validateForm = () => {
    if (!name) {
      Alert.alert("Error", "Name is required.");
      return false;
    }
    if (!email || !email.includes("@")) {
      Alert.alert("Error", "Please enter a valid email address.");
      return false;
    }
    if (!password || password.length < 6) {
      Alert.alert("Error", "Password must be at least 6 characters long.");
      return false;
    }
    if (!role) {
      Alert.alert("Error", "Please select a role.");
      return false;
    }
    return true;
  };

  const handleRegister = async () => {
    if (!validateForm()) return;

    try {
      const response = await fetch(
        "https://restaurant-reservation-application-bq2w.onrender.com/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
            role,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        Alert.alert("Success", data.message || "Registration successful!");
      } else {
        Alert.alert(
          "Error",
          data.error || "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      Alert.alert("Error", "Something went wrong. Please try again.");
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.imageBackground}>
        <Image source={logoImage} style={styles.image} />
      </ImageBackground>

      <View style={styles.body}>
        <Text style={styles.heading}>Register</Text>

        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity
          style={styles.input}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.pickerText}>
            {role.charAt(0).toUpperCase() + role.slice(1)}
          </Text>
        </TouchableOpacity>

        <Modal
          visible={isModalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <TouchableOpacity
                style={styles.modalOption}
                onPress={() => {
                  setRole("user");
                  setModalVisible(false);
                }}
              >
                <Text style={styles.modalText}>User</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalOption}
                onPress={() => {
                  setRole("admin");
                  setModalVisible(false);
                }}
              >
                <Text style={styles.modalText}>Admin</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <TouchableOpacity style={styles.Button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>

        <Text style={styles.LoginButtonTxt} onPress={() => navigateTo("Login")}>
          Already have an account? Login
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
  body: {
    width: "100%",
    height: "60%",
    position: "absolute",
    top: "42%",
    gap: 15,
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#F09E61",
    width: "80%",
    color: "#808080",
    borderRadius: 10,
    padding: 12,
  },
  Button: {
    backgroundColor: "#F09E61",
    width: "80%",
    height: 55,
    borderRadius: 10,
  },
  heading: {
    fontWeight: "540",
    fontSize: 25,
    color: "#F09E61",
  },
  buttonText: {
    marginTop: 8,
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "normal",
  },
  imageBackground: {
    flex: 1,
    width: "100%",
    height: "40%",
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
  LoginButtonTxt: {
    color: "#F09E61",
    fontSize: 17,
  },
  pickerText: {
    fontSize: 16,
    color: "#333",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 8,
    width: 200,
  },
  modalOption: {
    paddingVertical: 10,
  },
  modalText: {
    fontSize: 18,
    textAlign: "center",
  },
});

export default RegisterPage;
