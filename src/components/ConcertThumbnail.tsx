import React from 'react';
import {Image, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    logo: {
      width: 66,
      height: 58,
    },
});
export interface IConcertThumbnailProps {
    title: string;
    imgURL: string;
};

const ConcertThumbnail = ({title, imgURL}: IConcertThumbnailProps) => (
    <View>
        <h1> {title} </h1>
        <Image
            style={styles.logo}
            source={{
                uri: imgURL,
            }}
        />
    </View>
);

export default ConcertThumbnail;
