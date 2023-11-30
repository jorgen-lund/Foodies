import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import DishInformation from './dishCardComponents/DishInformation';
import DishButton from './dishCardComponents/DishButton';
import {useDispatch} from 'react-redux';
import {addItem} from '../../redux/shoppingCartSlice';
import { DishCardProps } from '../../interfaces/boothComponentInterfaces';

/** Displays a dish, and with this an image, description, price and 
 *  a button that places it in a redux global shoppingCart with other
 *  DishCards. Contains functionality for opening an extra part (changing
 *  the styling of the card dynamically), where one has the option to adapt
 *  or add extras to the dish. This has not yet been implemented properly,
 *  and is therefore commented out.
 */
const DishCard = (props: DishCardProps) => {
  const dispatch = useDispatch();

  // const [isExpanded, setIsExpanded] = useState<boolean>(false);

    /**  These two functions are not being used yet
  const checkIfExtras = () => {
    return props.extraItems !== undefined ? true : false;
  };
  const handleEditPress = () => {
    checkIfExtras() && setIsExpanded(true);
  };
  */
  

  /* Creates an Order object,which is then placed in a globally
     accessible shoppingCart, using Redux. */
  const handleAddToCart = () => {
    const order = {
      id: props.id,
      name: props.name,
      price: props.price,
      amount: 1,
    };
    dispatch(addItem(order));
  };


  // const dynamicTopCardStyle = {
  //   ...styles.topCardContainer,
  //   borderRadius: isExpanded ? 0 : 8,
  //   borderTopLeftRadius: 8,
  //   borderTopRightRadius: 8,
  // };

  return (
    <View>
      <View style={[styles.topCardContainer]}>
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
            {/* {!isExpanded && (
              <View style={[styles.dishButtonContainer]}>
                {checkIfExtras() && (
                  <DishButton
                    onPress={handleEditPress}
                    MaterialIconName={'edit'}
                  />
                )} */}
                <DishButton
                  MaterialIconName={'add-shopping-cart'}
                  onPress={handleAddToCart}
                />
              {/* </View>
            )} */}
          </View>
        </View>
      </View>
      
      {/* {isExpanded && checkIfExtras() && (
        <Extras setIsExpanded={setIsExpanded} extraItems={props.extraItems!} />
      )} */}
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
    borderRadius: 8,
  },
  // expanded: {
  //   borderTopLeftRadius: 8,
  //   borderTopRightRadius: 8,
  //   borderBottomLeftRadius: 0,
  //   borderBottomRightRadius: 0,
  // },
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
