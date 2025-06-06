import React, { useState } from 'react';
import { View, Image, Share } from 'react-native';
import { Button } from 'react-native-paper';
import { launchCamera } from 'react-native-image-picker';

export default function CameraScreen() {
  const [photoUri, setPhotoUri] = useState<string | undefined>();

  const takePhoto = async () => {
    const result = await launchCamera({ mediaType: 'photo', saveToPhotos: true });
    if (result.assets && result.assets.length > 0) {
      setPhotoUri(result.assets[0].uri);
    }
  };

  const sharePhoto = async () => {
    if (photoUri) {
      await Share.share({ url: photoUri });
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {photoUri && (
        <Image
          source={{ uri: photoUri }}
          style={{ width: 200, height: 200, marginBottom: 16 }}
        />
      )}
      <Button mode="contained" onPress={takePhoto}>
        Take Photo
      </Button>
      {photoUri && (
        <Button style={{ marginTop: 8 }} onPress={sharePhoto}>
          Share
        </Button>
      )}
    </View>
  );
}
