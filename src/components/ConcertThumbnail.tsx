import React from 'react';
import {Image, View, StyleSheet} from 'react-native';
import './ConcertThumbnail.scss';
const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    h1Color: {
        height: 'red'
    }
});
export interface IConcertThumbnailProps {
    id: string;
    title: string;
    imgURL: string;
};

const ConcertThumbnail = ({title, imgURL}: IConcertThumbnailProps) => (
    <View>
        <div className="imageLogo">
            <Image source={{uri: imgURL}}/>
        </div>
        <h1 > {title} </h1>
    </View>
);

export default ConcertThumbnail;
