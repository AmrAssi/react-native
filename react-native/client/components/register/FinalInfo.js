import axios from "axios";
import * as ImagePicker from "expo-image-picker";
import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { icons } from "../../constants";
import Button from "../common/Button";
import styles from "./register.style";

const FinalInfo = ({ setActiveTab, userInfo, setSignTab }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsloading] = useState(false);
  const [imageBuffer, setImageBuffer] = useState(null);

  const fetchImageBuffer = async () => {
    if (selectedImage) {
      try {
        const response = await fetch(selectedImage);
        const buffer = await response.arrayBuffer();
        setImageBuffer(Buffer.from(buffer));
      } catch (error) {
        console.log("Error fetching image buffer:", error);
      }
    }
  };

  useEffect(() => {
    fetchImageBuffer();
  }, [selectedImage]);

  // get image
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result?.cancelled) {
      setSelectedImage(result.uri);
    }
  };

  // submit handler
  const submitHandler = async () => {
    // check validation
    const validationErrors = {};

    if (!selectedImage) {
      validationErrors.profilePic = "Profile Picture is required!!";
    }

    if (Object.keys(validationErrors).length > 0) {
      return setErrors(validationErrors);
    }

    // request to server
    try {
      setIsloading(true);

      const res = await axios.post(`http://localhost:8000/api/auth/register`, {
        profilePic: imageBuffer,
        ...userInfo,
      });

      if (res?.data?._id) {
        setSignTab("sign-in");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsloading(false);
    }
  };

  return (
    <View style={styles.container}>
      {selectedImage ? (
        <Image source={{ uri: selectedImage }} style={styles.profilePic} />
      ) : (
        <TouchableOpacity style={styles.imageContainer} onPress={pickImage}>
          <Image
            style={styles.image}
            source={icons.camera}
            resizeMode="contain"
          />
          <Text style={styles.imageText}>Select profile picture</Text>
        </TouchableOpacity>
      )}

      {errors?.profilePic && (
        <Text style={{ textAlign: "center", ...styles.errorMsg }}>
          {errors?.profilePic}
        </Text>
      )}

      <View style={styles.buttonContainer}>
        <Button isLoading={isLoading} onPress={submitHandler}>
          Sign up
        </Button>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => setActiveTab(1)}>
          <Text style={styles.goBackBtn}>Go Back</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.warnText}>
        Age-Under 18 not to allow registration and issue appropriate notice.
      </Text>
    </View>
  );
};

export default FinalInfo;
