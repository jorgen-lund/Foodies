import React from 'react';
import {Image, ImageSourcePropType, StyleSheet, Text, View} from 'react-native';

interface BoothDescriptionProps {
  boothName: string;
  boothImage: ImageSourcePropType;
  boothDescription: string;
}

const BoothDescription = (props: BoothDescriptionProps) => {
  return (
    <View>
      <View style={[styles.infoContainer]}>
        <Image source={props.boothImage} style={[styles.image]} />
        <Text style={[styles.name]}>{props.boothName}</Text>
      </View>
      <Text style={[styles.description]}>
        {props.boothDescription}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    height: 170,
    justifyContent: 'center',
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
  name: {
    color: '#FFFFFF',
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Suwannaphum-Black',
  },
  description: {
    alignItems: 'center',
    fontFamily: 'Suwannaphum-Regular',
    paddingHorizontal: 16,
    paddingTop: 10,
    fontSize: 12,
  },
});

export default BoothDescription;
