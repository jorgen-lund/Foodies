import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {RootNavigationProp} from '../../navigationFiles/navigationTypes';
import BoothNavbarButton from './BoothNavbarButton';

interface BoothNavbarProps {
  activeBoothName: string;
}

const BoothNavbar = (props: BoothNavbarProps) => {
  const navigation = useNavigation<RootNavigationProp>();

  const goToItalianBooth = () =>
    navigation.navigate('BoothNavigator', {screen: 'ItalianBooth'});
  const goToIndianBooth = () =>
    navigation.navigate('BoothNavigator', {screen: 'IndianBooth'});
  const goToMexicanBooth = () =>
    navigation.navigate('BoothNavigator', {screen: 'MexicanBooth'});

  return (
    <View style={[styles.container]}>
      <BoothNavbarButton
        onPress={goToItalianBooth}
        boothName={'Italian'}
        activeBoothName={props.activeBoothName}
      />
      <BoothNavbarButton
        onPress={goToIndianBooth}
        boothName={'Indian'}
        activeBoothName={props.activeBoothName}
      />
      <BoothNavbarButton
        onPress={goToMexicanBooth}
        boothName={'Mexican'}
        activeBoothName={props.activeBoothName}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#ED6232',
    height: 60,
    alignContent: 'center',
    alignItems: 'center',
  },
});
export default BoothNavbar;
