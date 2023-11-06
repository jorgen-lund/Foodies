import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface FoodCourtCardProps {
  country: string;
  image: ImageSourcePropType;
}

const FoodCourtCard = (props: FoodCourtCardProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
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
    fontFamily: "Suwannaphum-Black",
  },
});

export default FoodCourtCard;
