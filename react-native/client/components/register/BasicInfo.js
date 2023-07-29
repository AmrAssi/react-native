import axios from "axios";
import React, { useState } from "react";
import { Text, View } from "react-native";
import Button from "../common/Button";
import TextInput from "../common/TextInput";
import styles from "./register.style";

const BasicInfo = ({ getUserInfo }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [departmentName, setDepartmentName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // submit handler
  const submitHandler = async () => {
    const validationErrors = {};

    if (!firstName) {
      validationErrors.firstName = "First Name is required!!";
    }

    if (!lastName) {
      validationErrors.lastName = "Last Name is required!!";
    }

    if (!email) {
      validationErrors.email = "Email is required!!";
    }

    if (!password) {
      validationErrors.password = "Password is required!!";
    } else if (password.length < 6) {
      validationErrors.password = "Password must be at least 6 characters";
    }

    // check dublicate email
    if (email) {
      try {
        setIsLoading(true);

        const res = await axios.post(
          `http://localhost:8000/api/auth/check-user`,
          {
            email,
          }
        );
      } catch (err) {
        validationErrors.email = err?.response?.data?.error?.email;
      } finally {
        setIsLoading(false);
      }
    }

    if (Object.keys(validationErrors).length > 0) {
      return setErrors(validationErrors);
    } else {
      getUserInfo({
        firstName,
        lastName,
        departmentName,
        email,
        password,
      });
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={firstName}
        placeholder="First Name"
        onChange={setFirstName}
        type="name"
      />
      {errors?.firstName && (
        <Text style={styles.errorMsg}>{errors?.firstName}</Text>
      )}
      <TextInput
        value={lastName}
        placeholder="Last Name"
        onChange={setLastName}
        type="name"
      />
      {errors?.lastName && (
        <Text style={styles.errorMsg}>{errors?.lastName}</Text>
      )}
      <TextInput
        value={departmentName}
        placeholder="Department Name"
        onChange={setDepartmentName}
        type="name"
      />
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
        <Button isLoading={isLoading} onPress={submitHandler}>
          Next
        </Button>
      </View>
      <Text style={styles.warnText}>
        Age-Under 18 not to allow registration and issue appropriate notice.
      </Text>
    </View>
  );
};

export default BasicInfo;
