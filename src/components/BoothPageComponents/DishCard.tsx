import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import DishInformation from './dishCardComponents/DishInformation';
import Extras from './dishCardComponents/Extras';
import DishButton from './dishCardComponents/DishButton';
import {DishCardProps} from '../../interfaces/interfaces';

const DishCard = (props: DishCardProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const checkIfExtras = () => {
    return props.extraItems !== undefined ? true : false;
  };

  const handleEditPress = () => {
    checkIfExtras() && setIsExpanded(true);
  };

  const dynamicTopCardStyle = {
    ...styles.topCardContainer,
    borderRadius: isExpanded ? 0 : 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  };
  return (
    <View>
      <View style={dynamicTopCardStyle}>
        <View style={[styles.imageContainer]}>
          <Image source={{uri: props.imageUrl}} style={[styles.image]} />
        </View>
        <View style={[styles.rightHalfContainer]}>
          <DishInformation
            name={props.name}
            description={props.description}
            allergies={props.allergies}
          />
          <View style={[styles.priceAndButtonsContainer]}>
            <Text style={[styles.priceText]}>{props.price} kr</Text>
            {!isExpanded && (
              <View style={[styles.dishButtonContainer]}>
                {checkIfExtras() && (
                  <DishButton
                    handleEditPress={handleEditPress}
                    MaterialIconName={'edit'}
                  />
                )}
                <DishButton MaterialIconName={'add-shopping-cart'} />
              </View>
            )}
          </View>
        </View>
      </View>
      {isExpanded && checkIfExtras() && (
        <Extras setIsExpanded={setIsExpanded} extraItems={props.extraItems!} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  topCardContainer: {
    flexDirection: 'row',
    backgroundColor: '#F1F0F0',
    marginHorizontal: 20,
    alignItems: 'center',
    marginTop: 20,
  },
  expanded: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  collapsed: {
    borderRadius: 8,
  },
  imageContainer: {margin: 10},
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
  dishButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
  },
});

export default DishCard;
