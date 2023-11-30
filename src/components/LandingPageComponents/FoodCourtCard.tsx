import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { FoodCourtCardProps } from '../../interfaces/landingPageInterfaces';


/* Represents the clickable cards that directs the user to the
   different foodbooths */
const FoodCourtCard = (props: FoodCourtCardProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.onPress}>
        <View style={styles.imageView}>
          <Image source={props.image} style={styles.image} />
          <View>
            <Text style={styles.text}>{props.country}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingBottom: 20,
  },
  imageView: {
    width: '90%',
    height: 70,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  text: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Suwannaphum-Black',
  },
});

export default FoodCourtCard;
