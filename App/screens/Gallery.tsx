// This file is no longer being used for the restaurants, but maybe it will be used for something else?

import React from 'react';
import {
  View,
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Modal,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  gallery: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    flexWrap: 'wrap',
  },
  galleryImage: {
    width: '100%',
    height: 100,
  },
  touchableOpacity: {
    width: '25%',
    minHeight: 100,
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    alignItems: 'center',
    width: '90%',
  },
  expandedImage: {
    width: '95%',
    height: '95%',
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,.6)',
  },
});

type GalleryProps = {
  navigation: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    navigate: any;
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  route: {
    params: {
      galleryPhotos: string[];
    };
  };
  galleryPhotos: string[];
};

function Gallery(props: GalleryProps) {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [expandedImage, setExpandedImage] = React.useState('');
  const onPressThumbnail = (image: string) => {
    setModalVisible(true);
    setExpandedImage(image);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <ScrollView>
        <View style={styles.gallery}>
          {props.route.params.galleryPhotos.map((image, index) => (
            <TouchableOpacity
              onPress={() => onPressThumbnail(image)}
              key={index}
              style={styles.touchableOpacity}
            >
              <Image style={styles.galleryImage} source={{ uri: image }} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
      >
        <TouchableOpacity style={styles.centeredView} onPress={closeModal}>
          <View style={styles.modalView}>
            <Image
              style={styles.expandedImage}
              source={{ uri: expandedImage }}
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>
      </Modal>
      {modalVisible && (
        <TouchableOpacity style={styles.overlay} onPress={closeModal} />
      )}
    </>
  );
}

export { Gallery };
