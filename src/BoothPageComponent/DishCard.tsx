import React, {useState} from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Switch,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DishInformation from './dishCardComponents/DishInformation';
import DishButtons from './dishCardComponents/DishButtons';

interface DishCardProps {
  image: ImageSourcePropType;
  name: string;
  description: string;
  allergies: string;
  price: number;
}

const DishCard = (props: DishCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSelected, setSelection] = useState(false);

  const handleEditPress = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <View>
      <View style={[styles.cardContainer]}>
        <View style={[styles.imageContainer]}>
          <Image source={props.image} style={[styles.image]} />
        </View>
        <View style={[styles.rightHalfContainer]}>
          <DishInformation
            name={props.name}
            description={props.description}
            allergies={props.allergies}
          />
          <View style={[styles.priceAndButtonsContainer]}>
            <Text style={[styles.priceText]}>{props.price} Kr</Text>
            <DishButtons handleEditPress={handleEditPress} />
          </View>
        </View>
      </View>
      {isExpanded && (
        <View>
          <Text>Legg til ekstra:</Text>
        </View>
      )}
    </View>
  );
};

{
}
const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    backgroundColor: '#F1F0F0',
    marginHorizontal: 20,
    height: 160,
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 20,
  },
  imageContainer: {marginLeft: 10},
  image: {
    width: 140,
    height: 140,
    borderRadius: 10,
  },
  rightHalfContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  priceText: {
    fontSize: 16,
    fontWeight: '500',
  },
  priceAndButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
  },
});

export default DishCard;
