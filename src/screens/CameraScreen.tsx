import React from 'react';
import {
  Button,
  ScrollView,
  Image,
  StyleSheet,
  Share,
} from 'react-native';
import {
  launchCamera,
  launchImageLibrary,
  ImagePickerResponse,
} from 'react-native-image-picker';
import { useApp } from '../context/AppContext';

export default function CameraScreen() {
  const { state, addImage } = useApp();

  const handleResult = (response: ImagePickerResponse) => {
    if (response.assets && response.assets.length > 0) {
      const uri = response.assets[0].uri;
      if (uri) {
        addImage(uri);
      }
    }
  };

  const openCamera = () => {
    launchCamera({ mediaType: 'photo', saveToPhotos: true }, handleResult);
  };

  const openLibrary = () => {
    launchImageLibrary({ mediaType: 'photo' }, handleResult);
  };

  const shareLast = () => {
    const uri = state.images[state.images.length - 1];
    if (uri) {
      Share.share({ url: uri });
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Button title="Open Camera" onPress={openCamera} />
      <Button title="Import Image" onPress={openLibrary} />
      <Button
        title="Share Last Image"
        onPress={shareLast}
        disabled={state.images.length === 0}
      />
      {state.images.map((uri) => (
        <Image key={uri} source={{ uri }} style={styles.image} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  image: {
    width: '100%',
    height: 200,
    marginTop: 16,
  },
});
