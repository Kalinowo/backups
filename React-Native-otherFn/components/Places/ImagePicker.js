import { Alert, Image, Text, StyleSheet, View } from "react-native";
import {
  launchCameraAsync,
  PermissionStatus,
  useCameraPermissions,
} from "expo-image-picker";
import { useState } from "react";
import { Colors } from "../../constants/colors";
import OutlineButton from "../UI/OutlinedButton";

export default function ImagePicker({ onTakeImage }) {
  const [pickImage, setPickImage] = useState();
  const [cameraPermissionInfo, requestPermission] = useCameraPermissions();

  async function verifyPermissions() {
    if (cameraPermissionInfo.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }
    if (cameraPermissionInfo.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permissions!",
        "You need to grant camera permissions"
      );
      return false;
    }
    return true;
  }

  async function takeImageHandler() {
    const hasPermissions = await verifyPermissions();

    if (!hasPermissions) {
      return;
    }

    //c197
    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
    setPickImage(image.uri);
    onTakeImage(image.uri);
  }

  let imagePreview = <Text>No image taken yet</Text>;

  if (pickImage) {
    imagePreview = <Image style={styles.image} source={{ uri: pickImage }} />;
  }

  return (
    <View>
      <View style={styles.imagePreview}>{imagePreview}</View>
      <OutlineButton icon="camera" onPress={takeImageHandler}>
        Take Image
      </OutlineButton>
    </View>
  );
}

const styles = StyleSheet.create({
  imagePreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 4,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
