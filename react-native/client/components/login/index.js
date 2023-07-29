import AsyncStorage from "@react-native-community/async-storage";
import axios from "axios";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Button from "../common/Button";
import TextInput from "../common/TextInput";
import styles from "./login.style";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  // submit handler
  const submitHandler = async () => {
    const validationErrors = {};

    if (!email) {
      validationErrors.email = "Email is required!!";
    }

    if (!password) {
      validationErrors.password = "Password is required!!";
    }

    if (Object.keys(validationErrors).length > 0) {
      return setErrors(validationErrors);
    }

    // request to server
    try {
      setIsLoading(true);

      const res = await axios.post(`http://localhost:8000/api/auth/login`, {
        email,
        password,
      });

      if (res?.data?.user?._id) {
        await AsyncStorage.setItem(
          "@MyApp:user",
          JSON.stringify(res.data?.user)
        );

        router.push("/");
      }

      console.log("res", res.data?.user);
    } catch (err) {
      console.log(err);
      setErrors(err?.response?.data?.error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={email}
        placeholder="Email"
        onChange={setEmail}
        type="emailAddress"
      />
      {errors?.email && <Text style={styles.errorMsg}>{errors?.email}</Text>}
      <TextInput
        value={password}
        placeholder="Password"
        onChange={setPassword}
        type="password"
      />
      {errors?.password && (
        <Text style={styles.errorMsg}>{errors?.password}</Text>
      )}
      <View style={styles.buttonContainer}>
        <Button onPress={submitHandler} isLoading={isLoading}>
          Sign in
        </Button>
      </View>
      <TouchableOpacity>
        <Text style={styles.forgetText}>Forgot password?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
