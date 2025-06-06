import React, { useState } from 'react';
import { View, Image, Share } from 'react-native';
import { Button } from 'react-native-paper';
import { launchCamera, Asset } from 'react-native-image-picker';

export default function CameraScreen() {
  const [photo, setPhoto] = useState<Asset | null>(null);

  const takePhoto = () => {
    launchCamera({ mediaType: 'photo' }, (res) => {
      if (res.assets && res.assets.length > 0) {
        setPhoto(res.assets[0]);
      }
    });
  };

  const sharePhoto = async () => {
    if (photo?.uri) {
      try {
        await Share.share({ url: photo.uri });
      } catch {}
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {photo && (
        <Image
          source={{ uri: photo.uri }}
          style={{ width: 200, height: 200, marginBottom: 16 }}
        />
      )}
      <Button mode="contained" onPress={takePhoto}>
        Take Photo
      </Button>
      {photo && (
        <Button style={{ marginTop: 8 }} onPress={sharePhoto}>
          Share
        </Button>
      )}
    </View>
  );
}
