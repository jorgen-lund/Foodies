import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ItalianBooth from '../booths/ItalianBooth';
import IndianBooth from '../booths/IndianBooth';
import MexicanBooth from '../booths/MexicanBooth';

const BoothStack = createNativeStackNavigator();

/* Navigator for all the booths*/
const BoothNavigator = () => {
  return (
    <BoothStack.Navigator
      screenOptions={{headerShown: false, animation: 'none'}}>
      <BoothStack.Screen name="ItalianBooth" component={ItalianBooth} />
      <BoothStack.Screen name="IndianBooth" component={IndianBooth} />
      <BoothStack.Screen name="MexicanBooth" component={MexicanBooth} />
    </BoothStack.Navigator>
  );
};
export default BoothNavigator;
