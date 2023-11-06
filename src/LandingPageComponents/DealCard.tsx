import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface DealCardProps {
  image: ImageSourcePropType;
  country: string;
  dishName: string;
}

const DealCard = (props: DealCardProps) => {
  return (
    <View style={[styles.container]}>
      <TouchableOpacity>
        <View>
          <Image style={[styles.image]} source={props.image}></Image>
          <View style={[styles.textContainer]}>
            <Text style={[styles.countryText]}>
              {props.country}
            </Text>
            <Text
              style={[styles.dishText]}>
              {props.dishName}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    marginBottom: 10,
  },
  image: {
    width: 130,
    height: 100,
    borderRadius: 10,
  },
  textContainer: {
    alignItems: 'center',
  },
  countryText: {
    fontSize: 10,
    fontFamily: 'Suwannaphum-bold',
  },
  dishText: {
    fontFamily: 'Suwannaphum-bold',
    fontSize: 12,
    marginTop: -6,
  },
});

export default DealCard;
