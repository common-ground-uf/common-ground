import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import {gallery} from '../data/dummyData';

const styles = StyleSheet.create({
    gallery: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
    },
    galleryImage: {
        width: 100,
        height: 100,
        borderRadius: 2,
        marginRight: 10,
    }
  });

function Gallery() {
    return (
        <ScrollView>
            <Text>Gallery</Text>
            <View style={styles.gallery}>
                {gallery.map((image, index) => 
                    <Image style={styles.galleryImage} source={{uri: image}} key={index} />
                )}
          </View>
        </ScrollView>
    );
}

export { Gallery };
