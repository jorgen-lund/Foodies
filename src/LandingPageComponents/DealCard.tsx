import React from 'react';
import {
  Image,
  ImageSourcePropType,
  ScrollView,
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
    <View style={{paddingLeft: 20}}>
      <TouchableOpacity>
        <View>
          <Image
            style={{width: 140, height: 110, borderRadius: 10}}
            source={props.image}></Image>
          <View style={{alignItems: 'center'}}>
            <Text style={{fontSize: 12, fontFamily: 'Suwannaphum-bold'}}>
              {props.country}
            </Text>
            <Text
              style={{
                fontFamily: 'Suwannaphum-bold',
                fontSize: 14,
                marginTop: -6,
              }}>
              {props.dishName}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default DealCard;
