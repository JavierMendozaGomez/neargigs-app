import React from 'react';
import {View} from 'react-native';
import ConcertThumbnail, { IConcertThumbnailProps } from '../components/ConcertThumbnail';

const Concerts = () => {
    const concertThumbnails: IConcertThumbnailProps [] = [
        {
            imgURL: 'https://www.nacionrock.com/wp-content/uploads/system-of-a-down-steal-this-album-cd-D_NQ_NP_713898-MLM27074074828_032018-F.jpg%22',
            title: 'System of a down'
        }
    ]
    return (
        <View>
            {
            concertThumbnails.map((concertThumbnailProps) => (
                <ConcertThumbnail {...concertThumbnailProps} />
            ))
            }
        </View>
    )
};

export default Concerts;