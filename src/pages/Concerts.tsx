import React from 'react';
import {View} from 'react-native';
import ConcertThumbnail, { IConcertThumbnailProps } from '../components/ConcertThumbnail';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
const Concerts = () => {
    const concertThumbnails: IConcertThumbnailProps [] = [
        {
            id: '7500bfce-fb6d-4c11-8090-05e90c835b1a',
            imgURL: 'https://ih1.redbubble.net/image.1078595872.7625/flat,128x,075,f-pad,128x128,f8f8f8.jpg',
            title: 'System of a down'
        }
    ]
    return (
        <View>
                {
                concertThumbnails.map((concertThumbnailProps) => (
                    <ConcertThumbnail {...concertThumbnailProps} key={concertThumbnailProps.id}/>
                ))}
        </View>
    )
};

export default Concerts;