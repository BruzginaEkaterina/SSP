import React from 'react';
import { Image } from 'react-native';
import Swiper from 'react-native-swiper';
import * as Animatable from 'react-native-animatable';
import styles from './styles';

const PhotosScreen = () => (
    <Swiper>
      <Animatable.Image animation="rotate" duration={5000}  iterationCount={1} source={{uri: 'https://kartinki.pics/uploads/posts/2022-03/thumbs/1647526670_2-kartinkin-net-p-priroda-vertikalnie-kartinki-2.jpg'}} style={styles.image}/>
      <Animatable.Image animation="fadeIn" duration={4000} iterationCount="infinite" direction="alternate" source={{uri: 'https://amiel.club/uploads/posts/2022-03/1647526610_71-amiel-club-p-priroda-vertikalnie-kartinki-75.jpg'}} style={styles.image}/>
      <Animatable.Image animation="pulse" easing="ease-out" iterationCount="infinite" source={{uri: 'https://kartinki.pics/uploads/posts/2022-03/1647526679_10-kartinkin-net-p-priroda-vertikalnie-kartinki-12.jpg'}} style={styles.image}/>
    </Swiper>
  );
export default PhotosScreen;